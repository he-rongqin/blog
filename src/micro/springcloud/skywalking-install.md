---
title: Skywalking 部署
date: 2024-11-05
editLink: false
order: 3
---

## 一、Skywalking 介绍

`SkyWalking` 是一个开源可观测平台，用于收集、分析、聚合和可视化来自服务和云原生基础设施的数据。 `SkyWalking` 提供了一种简单的方法来保持分布式系统的清晰视图，甚至跨云。它是一种现代 APM，专为云原生、基于容器的分布式系统而设计。

`SkyWalking` 涵盖了云原生世界中的所有可观测性需求，包括：

- **Tracing**，支持 `SkyWalking` 原生数据格式以及 `v1` 和 `v2` 格式的 `Zipkin` 痕迹。
- **Metrics**， `SkyWalking`支持成熟的指标格式，包括`原生仪表格式`、`OTEL`指标格式和`Telegraf`格式。 `SkyWalking` 与 `Service Mesh 平台`（通常是 `Istio` 和 `Envoy`）集成，以将可观察性构建到数据平面或控制平面中。此外，`SkyWalking` 原生代理可以在指标模式下运行，这大大提高了性能。
- **Logging**，包括从`磁盘`或通过`网络`收集的日志。本机代理可以`自动将跟踪上下文与日志绑定`，或者使用 `SkyWalking` 通过文本内容绑定跟踪和日志。
- **Profiling**，分析是一个强大的工具，可以帮助开发人员从代码行的角度了解应用程序的性能。 `SkyWalking` 提供捆绑在本机语言代理和独立 `ebpf` 代理中的分析功能。
- **Event**，事件是一种特殊的数据，用于记录系统中的重要时刻，例如版本升级、配置变更等。将事件与指标联系起来可以帮助解释指标中的波峰或波谷，并将事件与指标联系起来。带有跟踪和日志的事件可以帮助解决根本原因。

## 二、安装 Skywalking（本地）

- 安装 `skywalking-oap-server:10.1.0`
- 安装 `skywalking-ui:10.1.0`
- 安装 `Elasticsearch:7.0` （生产，本地或开发环境可使用`h2`内存数据库进存储）

**Docker 安装**

安装 `skywalking-oap-server`

```shell
docker run --name oap --restart always -d -e TZ=Asia/Shanghai -p 12800:12800 -p 11800:11800 apache/skywalking-oap-server:10.1.0
```

安装 `skywalking-ui`

```shell
docker run --name oap-ui --link oap:oap --restart always -d -e SW_OAP_ADDRESS=http://oap:12800 -e SW_ZIPKIN_ADDRESS=http://oap:9412 -e TZ=Asia/Shanghai -p 8088:8080 apache/skywalking-ui:10.1.0
```

## 参考资料

- https://skywalking.apache.org/docs/main/v10.1.0/en/concepts-and-designs/overview/