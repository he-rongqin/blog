---
title: "Gateway Sentinel 网关流控、熔断降级"
date: 2024-11-02
author: HeRongqin
order: 2
editLink: false
category:
    - 微服务教程
tag:
    - 网关
    - Sentinel
---


在网关侧需要满足以下流控、熔断降级：

- 根据 route 资源做流控
- 根据 route 资源做熔断、降级
- 根据 url 资源做流控
- 根据 url 资源做熔断、降级

### 一、前提条件


版本规划：

- JDK `1.8+`
- sentinel-dashboard `1.8.6`
- nacos `2.3.1`
- spring cloud `2021.0.5`
- spring boot `2.6.13`
- spring-cloud-alibaba `2021.0.5.0`

前提条件：

- 部署 `sentinel-dashboard` 并启动
- 部署 `nacos` 并启动

### 二、 Spring cloud Gateway

**Maven 依赖**
```xml
<!--ali cloud -->
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-alibaba-dependencies</artifactId>
            <version>${spring-cloud-alibaba.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
        <!--其他依赖-->
    </dependencies>
</dependencyManagement>
<dependencies>
    <!--熔断、降级-->
    <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
    </dependency>
    <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-alibaba-sentinel-gateway</artifactId>
    </dependency>
    <!--其他依赖-->
</dependencies>
 
```

**Sentinel使用 Nacos Datasource**

**Maven** 

```xml
<!-- Sentinel规则持久化至Nacos配置 -->
<dependency>
    <groupId>com.alibaba.csp</groupId>
    <artifactId>sentinel-datasource-nacos</artifactId>
</dependency>
```

**application.yaml 配置**

```yaml
spring:
  application:
    name: cgi-bin
  cloud:
    sentinel:
      transport:
        # sentinel-dashboard url
        dashboard: localhost:9000
      scg:
        fallback:
          mode: response
          response-status: 429
          # 自定义sentinel 返回内容
          response-body: '{"code": 429, "msg": "服务器忙，稍后再试", "errMsg": "服务器忙，稍后再试"}'
      datasource:
        # 网关流控规则
        gw-flow:
          nacos:
            server-addr: ${spring.cloud.nacos.config.server-addr}
            namespace: ${spring.cloud.nacos.config.namespace}
            username: ${spring.cloud.nacos.config.username}
            password: ${spring.cloud.nacos.config.password}
            data-id: ${spring.application.name}-flow-rules
            group-id: SENTINEL-GROUP
            data-type: json
            rule-type: gw_flow
        # 网关降级规则
        degrade:
          nacos:
            data-id: ${spring.application.name}-degrade-rules
            group-id: SENTINEL-GROUP
            data-type: json
            server-addr: ${spring.cloud.nacos.config.server-addr}
            rule-type: degrade
        # 网关api 分组流控规则
        api-group-rule:
          nacos:
            rule-type: gw_api_group
            data-id: ${spring.application.name}-api-group-rules
            group-id: SENTINEL_GROUP
            data-type: json
            server-addr: ${spring.cloud.nacos.config.server-addr}
            namespace: ${spring.cloud.nacos.config.namespace}
            username: ${spring.cloud.nacos.config.username}
            password: ${spring.cloud.nacos.config.password}
```
*Note：配置文件中可以自定义sentinel 返回的内容结构，可以配置以nacos为sentinel的持久化数据源*

### 三、 nacos 配置流控规则

**Route 流控**

```json
{
  "resource" : "资源名称，可以是网关中的 route 名称或者用户自定义的 API 分组名称",
  "resourceMode": "资源类型，规则是针对 API Gateway 的 route（RESOURCE_MODE_ROUTE_ID）还是用户在 Sentinel 中定义的 API 分组（RESOURCE_MODE_CUSTOM_API_NAME），默认是 route，（0 - 路由模式；1 - api模式）",
  "grade": "限流指标维度，同限流规则的 grade 字段（0 - 线程数；1-QPS）",
  "count": "限流阈值，QPS或线程数值",
  "intervalSec": "统计时间窗口，单位是秒，默认是 1 秒",
  "controlBehavior": "流量整形的控制效果，同限流规则的 controlBehavior 字段，目前支持快速失败和匀速排队两种模式，默认是快速失败（0 - 快速失败；1-匀速排队）",
  "burst": "应对突发请求时额外允许的请求数目",
  "maxQueueingTimeoutMs": "匀速排队模式下的最长排队时间，单位是毫秒，仅在匀速排队模式下生效",
  "paramItem": "参数限流配置。若不提供，则代表不针对参数进行限流，该网关规则将会被转换成普通流控规则；否则会转换成热点规则"
}
```

**paramItem** 参数限流配置，提供以下字段：

- **parseStrategy**，从请求中提取参数的策略，目前支持提取来源 IP（PARAM_PARSE_STRATEGY_CLIENT_IP）、Host（PARAM_PARSE_STRATEGY_HOST）、任意 Header（PARAM_PARSE_STRATEGY_HEADER）和任意 URL 参数（PARAM_PARSE_STRATEGY_URL_PARAM）四种模式。
- **fieldName**，若提取策略选择 Header 模式或 URL 参数模式，则需要指定对应的 header 名称或 URL 参数名称
- **pattern**，参数值的匹配模式，只有匹配该模式的请求属性值会纳入统计和流控；若为空则统计该请求属性的所有值。（1.6.2 版本开始支持）
- **matchStrategy**，参数值的匹配策略，目前支持精确匹配（PARAM_MATCH_STRATEGY_EXACT）、子串匹配（PARAM_MATCH_STRATEGY_CONTAINS）和正则匹配（PARAM_MATCH_STRATEGY_REGEX）。（1.6.2 版本开始支持）

**示例：**

在nacos配种中心新增流控规则，如下：

```json
[{
  "resource" : "oss-service",
  "resourceMode": 0,
  "grade": 1,
  "count": 1,
  "intervalSec": 1,
  "controlBehavior": 0
}]
```
*Note:* 

- *注意namespace、data-id、group 需要与配置中对应*
- *json是一个数组！一个数组！*

**API 分组流控**

在nacos配置中心配置`API 流控分组`

```json
[{
  "apiName" : "oss-service-health",
  "predicateItems": [
    {
      "pattern": "/oss-service/v1/health",
      "matchStrategy" : 0
    }
  ]

}
]
```

*Note: 字段描述*

- `apiName` 分组名称
- `predicateItems` 匹配规则，是个数组
- `matchStrategy` 匹配策略， 0 - 精准匹配，1 - 模糊匹配，2 - 正则匹配
- `pattern` url 表达式，可以是精准的url：`/oss-service/v1/health`，也可以是模糊的url:`/oss-service/v1/**`，也可以是带正则表达式的url:`/oss-service/v1/\d`

在nacos配置中心配置`流控规则`

```json
[{
  "resource" : "oss-service-health",
  "resourceMode": 1,
  "grade": 1,
  "count": 2,
  "intervalSec": 1,
  "controlBehavior": 0
}
]
```

*Note: 注意*

- 先配置`API 分组`，再配流控规则，其中：`resource`为分组名称，`resourceMode=1` 资源模式为`API`，其他的规则与流控规则一致
- 注意`nacos`配置中心的`namespace`、`data-id`、`group`需要与`yaml`配置文件中一致

### 四、 nacos 配置熔断规则

```json
{
  "resource" : "资源名称，资源名，资源名是限流规则的作用对象，比如请求资源 getUser",
  "grade": "熔断策略，支持慢调用比例/异常比例/异常数策略。0：慢调用比例，1：异常比例，2：异常数。默认为0，慢调用比例。",
  "count": "慢调用比例模式下为慢调用临界 RT（超出该值计为慢调用）；异常比例/异常数模式下为对应的阈值。",
  "timeWindow": "熔断时长，单位为秒",
  "minRequestAmount": "熔断经过该值后恢复到 HALF-OPEN 状态。HALF-OPEN 状态：熔断后经过熔断时长后的第一个请求成功而没有错误则恢复正常结束熔断，否则继续熔断。默认为 5 。",
  "statIntervalMs": "统计时长（单位为 ms），如 60*1000 代表分钟级。默认为 1000 ms。",
  "slowRatioThreshold": "慢调用比例阈值，仅慢调用比例模式有效0 ~ 1"
}
```

**示例：**

在`nacos`配置中心中心中熔断规则：

```json
[
  {
    "resource": "/oss-service/v1/health",
    "grade": 2,
    "count": 2,
    "timeWindow": 3,
    "minRequestAmount": 5,
    "statIntervalMs": 1000
  }
]
```
### 五、 结论

以上示例，都经过`JMeter`验证通过。