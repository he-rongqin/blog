---
title: Skywalking agent Java
date: 2024-11-07
editLink: false
order: 4
category:
    - 微服务
    - apm
tag:
    - APM
    - 服务治理
    - 链路监控
---

本章内容都是在`微服务架构体系`中进行验证。

## 一、下载 Skywalking Agent Java

`skywalking-java-agent-9.3.0` [下载地址](https://www.apache.org/dyn/closer.cgi/skywalking/java-agent/9.3.0/apache-skywalking-java-agent-9.3.0.tgz)

解压后的目录：
```shell
+-- agent
    +-- activations
         apm-toolkit-log4j-1.x-activation.jar
         apm-toolkit-log4j-2.x-activation.jar
         apm-toolkit-logback-1.x-activation.jar
         ...
    +-- config
         agent.config  
    +-- plugins
         apm-dubbo-plugin.jar
         apm-feign-default-http-9.x.jar
         apm-httpClient-4.x-plugin.jar
         .....
    +-- optional-plugins
         apm-gson-2.x-plugin.jar
         .....
    +-- bootstrap-plugins
         jdk-http-plugin.jar
         .....
    +-- expired-plugins
         # Expired plugins are moved to this folder. No guarantee of working and maintenance.
         apm-impala-2.6.x-plugin.jar
         .....
    +-- logs
    skywalking-agent.jar
```

## 二、设置Java Agent

**条件**

- `agent` 适用于 `JDK 8 - 21`
- `java agent` `9.3.0`
- SkyWalking OAP server `10.1.0+`
- SkyWalking ui `10.1.0`

**期望**

- 调用链路跟踪
- 查看调用 `Trace` 路径
- 查看调用 `Trace` 日志

**准备**

- 准备`Nginx` ，用于代理网关
- 准备 `gateway` 服务
- 准备 `twork-service` 服务
- 准备 `oss-service` 服务

*Note：最好是准备3个或以上服务*

### 2.1 plugins

从 `optional-plugins` 目录下将一下插件复制到 `plugins` 目录，否则在有些场景（gateway）会有问题，这里需要根据自己的应用版本选择相应版本，我这里的spring boot 版本是：`spring boot 2.x`。

- apm-mybatis-3.x-plugin-9.3.0.jar
- apm-nacos-client-2.x-plugin-9.3.0.jar
- apm-sentinel-1.x-plugin-9.3.0.jar
- apm-spring-cloud-gateway-3.x-plugin-9.3.0.jar
- apm-spring-webflux-5.x-plugin-9.3.0.jar

### 2.2 应用配置

在每个需要集成`skywalking`的应用中配置以下内容：

Maven，`sw.version = 9.3.0`
```xml
<!--skywalking -->
<dependency>
    <groupId>org.apache.skywalking</groupId>
    <artifactId>apm-toolkit-micrometer-registry</artifactId>
    <version>${sw.version}</version>
</dependency>
<dependency>
     <groupId>org.apache.skywalking</groupId>
     <artifactId>apm-toolkit-logback-1.x</artifactId>
     <version>${sw.version}</version>
</dependency>
<dependency>
    <groupId>org.apache.skywalking</groupId>
    <artifactId>apm-toolkit-trace</artifactId>
    <version>${sw.version}</version>
</dependency>
<!--skywalking end-->
```

在 `logback.xml` 中添加

```xml
<appender name="skywalkingConsoleAppender" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="ch.qos.logback.core.encoder.LayoutWrappingEncoder">
            <layout class="org.apache.skywalking.apm.toolkit.log.logback.v1.x.mdc.TraceIdMDCPatternLogbackLayout">
                <Pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{tid}] [%thread] %-5level %logger{36} -%msg%n</Pattern>
            </layout>
        </encoder>
    </appender>

    <!--skywalking log trace-->
    <appender name="grpc-log" class="org.apache.skywalking.apm.toolkit.log.logback.v1.x.log.GRPCLogClientAppender">
        <encoder class="ch.qos.logback.core.encoder.LayoutWrappingEncoder">
            <layout class="org.apache.skywalking.apm.toolkit.log.logback.v1.x.mdc.TraceIdMDCPatternLogbackLayout">
                <Pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{tid}] [%thread] %-5level %logger{36} -%msg%n</Pattern>
            </layout>
        </encoder>
    </appender>

<root level="INFO">
        <appender-ref ref="skywalkingConsoleAppender"/>
        <appender-ref ref="grpc-log"/>
</root>
```

### 2.3 配置启动参数

在应用（`Spring boot`）启动的时候，设置`jvm` 参数: `-javaagent: [skywalking agent 的解压目录]`

```shell
# agent name 服务名
-DSW_AGENT_NAME=cgi-bin
# skywalking oap 11800 地址
-DSW_AGENT_COLLECTOR_BACKEND_SERVICES=127.0.0.1:11800
# skywalking agent 的绝对路径
-javaagent:D:\work_space\code\local-bin\apm\skywalking\skywalking-agent\skywalking-agent.jar
```

## 三、验证结果

启动应用

- 启动，`Nginx`，并代理`/cgi-bin/` 到网关
- 启动 gateway
- 启动 twork-service
- 启动 oss-service

`Postmain` 访问：

- `oss-service/v1/health`
- `/twork-service/v1/team/task/page?page=1&pageSize=8`

查看 skywalking ui

访问`skywalking ui` : `http://localhost:8088`（这里的8088 是从docker中映射出来的端口，以实际情况为准），查看拓扑图

![拓扑图](/blog/assets/images/sw/topo.png)

查看`Trace` 列表

![Trace](/blog/assets/images/sw/trace.png)

查看日志

![Log](/blog/assets/images/sw/log.png)



