---
title: "Spring cloud Gateway 动态路由"
editLink: false # 是否显示编辑链接
date: 2024-11-07
order: 1
category:
  - 微服务教程
---

## 一、分析过程

**Gateway Route**

我们先看看，在`Spring cloud Gateway`中`路由`在`yaml`中是怎么配置的：

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: twork-service
          uri: lb://twork-service
          predicates:
            - Path=/twork-service/**
          filters:
            - StripPrefix=1   # 过滤掉前缀：/twork-service

        - id: oss-service
          uri: lb://oss-service
          predicates:
            - Path=/oss-service/**
```

`Spring cloud Gateway` 默认是将路由信息存在内存中的，我们看一下：`GatewayAutoConfiguration`中有这么一段代码：

```java
@Bean
    @ConditionalOnMissingBean({RouteDefinitionRepository.class})
    public InMemoryRouteDefinitionRepository inMemoryRouteDefinitionRepository() {
        return new InMemoryRouteDefinitionRepository();
    }
```

好，现在说一下该模式下的问题：**每次上新服务或者调整路由规则，比如：加过滤器，我们都需要重启Gateway，才能让配置生效。Gateway 是所有资源请求的入口，在生产环境，是很危险的。**

那么解决这个问题，我们需要：

- `route` 的持久化，将 `route` 规则配置放到`Nacos` 配置中心
- 如何动态更新路由，从 `Nacos` 配置中心获取`route` 通过`InMemoryRouteDefinitionRepository` 更新内存中的路由
- 通知 `Gateway` 刷新 负载中的 `service-id`

## 二、实现路由变更处理器

需要梳理下，更新场景：

- 初始化路由，`Nacos` 配置了路由，服务本地没有，同步路由，新增到本地
- 清空路由，`Nacos` 路由配置已删除，需要同步清空本地路由
- 增量增加路由，`Nacos` 增加了一个新路由，需要同步更新本地路由
- 路由变更，`Nacos` 路由更新部分属性，比如：增加`filter`、`predicates`、`uri`等，需要同步更新本地对应的路由（非全量）
- 删除路由，在`Nacos` 中删除了某个路由配置，同步删除本地相应路由

代码

```java
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.event.RefreshRoutesEvent;
import org.springframework.cloud.gateway.route.InMemoryRouteDefinitionRepository;
import org.springframework.cloud.gateway.route.RouteDefinition;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author herongqin
 * @date 2024/11/5 11:24
 **/
@Component
@Slf4j
public class DynamicRouteHandle implements ApplicationEventPublisherAware {

    private final InMemoryRouteDefinitionRepository inMemoryRouteDefinitionRepository;
    private ApplicationEventPublisher publisher;

    @Autowired
    public DynamicRouteHandle(final InMemoryRouteDefinitionRepository inMemoryRouteDefinitionRepository) {
        this.inMemoryRouteDefinitionRepository = inMemoryRouteDefinitionRepository;
    }

    public void initRoute(String routes) {
        log.info("init routes: \n{}", routes);
        if (StrUtil.isEmpty(routes)) {
            log.info("init routes fail, routes is empty");
            return;
        }
        List<RouteDefinition> routeDefinitions = JSONUtil.toList(routes, RouteDefinition.class);
        if (CollectionUtils.isEmpty(routeDefinitions)) {
            log.info("init routes fail, routes is empty");
            return;
        }
        handle(routeDefinitions);
    }

    public void handle(List<RouteDefinition> routeDefinitions) {
        // 判断route 是否存在
        List<RouteDefinition> originalRoutes = inMemoryRouteDefinitionRepository.getRouteDefinitions().buffer().blockFirst();
        // 原路由为空，nacos 路由不为空，初始化全部路由
        if (CollectionUtils.isEmpty(originalRoutes) && !CollectionUtils.isEmpty(routeDefinitions)) {
            // 新增路由
            routeDefinitions.forEach(r -> inMemoryRouteDefinitionRepository.save(Mono.just(r)).subscribe());

            // 发布route 更新事件（通知lb触发心跳）
            publisher.publishEvent(new RefreshRoutesEvent(this));
            log.info("新增路由处理完成[本地不存在 route， nacos 新增]。");
            return;
        }
        // 原路由不为空，nacos为空，清空原路由
        if (!CollectionUtils.isEmpty(originalRoutes) && CollectionUtils.isEmpty(routeDefinitions)) {
            // 清空原路由
            originalRoutes.forEach(r -> inMemoryRouteDefinitionRepository.delete(Mono.just(r.getId())).subscribe());
            // 发布route 更新事件（通知lb触发心跳）
            publisher.publishEvent(new RefreshRoutesEvent(this));
            log.info("清空路由处理完成[本地存在 route， nacos 已清空]。");
            return;
        }
        Map<String, RouteDefinition> originalRoutesMap = originalRoutes.stream().collect(Collectors.toMap(RouteDefinition::getId, RouteDefinition -> RouteDefinition));
        // 处理路由
        routeDefinitions.forEach(r -> {
            // 路由存在
            if (originalRoutesMap.containsKey(r.getId())) {
                // 判断路由是否变更
                JSONObject route_n = JSONUtil.parseObj(r);
                JSONObject route_o = JSONUtil.parseObj(originalRoutesMap.get(r.getId()));
                // 不相等，有变更
                if (!route_n.equals(route_o)) {
                    // 先删除，再新增
                    inMemoryRouteDefinitionRepository.delete(Mono.just(r.getId())).subscribe();
                    inMemoryRouteDefinitionRepository.save(Mono.just(r)).subscribe();
                    log.info("路由变更，更新完成[字段变更] \n - old_route: {} \n - new_route: {}", route_o, route_n);
                }
            }else {
                // 新增路由
                inMemoryRouteDefinitionRepository.save(Mono.just(r)).subscribe();
                log.info("新增路由，处理完成 - route: {}", r);
            }
        });

        // 删除路由
        Map<String, RouteDefinition> routeDefinitionMap = routeDefinitions.stream().collect(Collectors.toMap(RouteDefinition::getId, t -> t));
        originalRoutes.forEach(t -> {
            // 如果本地（原）路由不存在nacos配置中，则删除
            if (!routeDefinitionMap.containsKey(t.getId())) {
                inMemoryRouteDefinitionRepository.delete(Mono.just(t.getId())).subscribe();
                log.info("删除路由，处理完成 - route: {}", t);
            }
        });
        // 发布route 更新事件（通知lb触发心跳）
        publisher.publishEvent(new RefreshRoutesEvent(this));
        log.info("路由变更处理完成。");
    }

    @Override
    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
        this.publisher = applicationEventPublisher;
    }
```

*Note:*

- *需要实现`ApplicationEventPublisherAware` 用于路由更新事件发布*
- *每次变更路由，都需要发布路由更新事件：`publisher.publishEvent(new RefreshRoutesEvent(this));`*


## 三、使用 Nacos 动态刷新网关路由

**Nacos 中的配置**

- `dataId` = `gateway-route`
- 配置类型：`Json`
- `namespace` 、`Group` 与配置中心的一致

route json:
```json
[
    {
      "id": "twork-service",
      "uri": "lb://twork-service",
      "predicates": [
        {
          "name": "Path",
          "args": {
            "pattern": "/twork-service/**"
          }
        }
      ],
      "filters": [
        {
          "name": "StripPrefix",
          "args": {
            "parts": 1
          }
        }
      ]
    },
    {
      "id": "oss-service",
      "uri": "lb://oss-service",
      "predicates": [
        {
          "name": "Path",
          "args": {
            "pattern": "/oss-service/**"
          }
        }
      ],
      "filters": [
        {
          "name": "StripPrefix",
          "args": {
            "parts": 1
          }
        }
      ]
    }
  ]

```

*Note: 配置是个Json数组*

**创建 Nacos config Listener**

```java

import cn.hutool.json.JSONUtil;
import com.alibaba.nacos.api.config.listener.Listener;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.gateway.route.RouteDefinition;

import java.util.List;
import java.util.concurrent.Executor;

/**
 * @author herongqin
 * @date 2024/11/5 9:53
 **/
@Slf4j
@RefreshScope
public class RouteConfigChangeListener implements Listener {

    private DynamicRouteHandle dynamicRouteHandle;

    public RouteConfigChangeListener(DynamicRouteHandle dynamicRouteHandle) {
        this.dynamicRouteHandle = dynamicRouteHandle;
    }

    @Override
    public Executor getExecutor() {
      // 自定义线程池
        return null;
    }

    @Override
    public void receiveConfigInfo(String route) {
        log.info("网关路由配置变更: \n{}", route);
        try {
            List<RouteDefinition> routeDefinitions = JSONUtil.toList(route, RouteDefinition.class);
            dynamicRouteHandle.handle(routeDefinitions);
        } catch (Exception e) {
            log.error("route json convert error", e);
        }
    }
}

```

*Note：*

- *实现`com.alibaba.nacos.api.config.listener.Listener`接口*
- *实现`receiveConfigInfo` 方法，当`Nacos` 配置变更后，会回调这个接口*


**初始化 Nacos Service & Nacos config**

```java
import com.alibaba.cloud.nacos.NacosConfigProperties;
import com.alibaba.nacos.api.NacosFactory;
import com.alibaba.nacos.api.config.ConfigService;
import com.alibaba.nacos.api.exception.NacosException;
import com.leatop.gateway.route.DynamicRouteHandle;
import com.leatop.gateway.route.RouteConfigChangeListener;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;

import javax.annotation.PostConstruct;
import java.util.Properties;

/**
 * @author herongqin
 * @date 2024/11/5 9:48
 **/
@Configuration
@RequiredArgsConstructor
@Slf4j
@ConditionalOnProperty(prefix = "spring.cloud.gateway.route.nacos", name = "enable", havingValue = "true")
public class DynamicRouteNacosConfig {

    private final NacosConfigProperties nacosConfigProperties;

    private final DynamicRouteHandle dynamicRouteHandle;

    @PostConstruct
    public void initNacosConfig() {
        try {
            Properties properties = new Properties();
            properties.setProperty("serverAddr", nacosConfigProperties.getServerAddr());
            if (!StringUtils.isEmpty(nacosConfigProperties.getNamespace())) {
                properties.setProperty("namespace", nacosConfigProperties.getNamespace());
            }
            final String dataId = "gateway-route";
            ConfigService configService = NacosFactory.createConfigService(properties);
            // 添加路由变更监听器
            String config = configService.getConfigAndSignListener(dataId, nacosConfigProperties.getGroup(), nacosConfigProperties.getTimeout(), new RouteConfigChangeListener(dynamicRouteHandle));
            // 初始化路由
            dynamicRouteHandle.initRoute(config);
            log.info("Initialize nacos config success.\n{}", nacosConfigProperties);
        } catch (NacosException e) {
            log.error("Initialize nacos config failed.", e);
        }
    }
}
```

*Note：*

- *`@ConditionalOnProperty` 做为加载条件，只有配置了`spring.cloud.gateway.route.nacos.enable=true` 才会启用 `Nacos` 动态刷新路由*
- *定义 `dataId` - `gateway-route`*