---
title: 自定义skywalking agent java 基础镜像
date: 2024-11-19
editLink: false
category:
    - 运维
tag: 
    - Docker
    - Dockerfile
---

自定义skywalking agent java 基础镜像

版本：

- oap-server，`10.3.0`
- skywalking ui，`10.3.0`
- skywalking agent java，`9.3.0`

下载以及前期准备工作移步：[Skywalking agent Java](/micro/springcloud/skywalking-agent.md)

Dockerfile

```dockerfile
FROM openjdk:8u102
WORKDIR /apm
COPY skywalking-agent /apm/skywalking-agent

# 设置 SkyWalking Agent 的 JAVA_TOOL_OPTIONS 环境变量（可以在子镜像中覆盖）
ENV JAVA_TOOL_OPTIONS="-javaagent:/apm/skywalking-agent/skywalking-agent.jar"

# 设置 SkyWalking Agent 的默认配置
ENV SW_AGENT_NAME=default-service
ENV SW_AGENT_COLLECTOR_BACKEND_SERVICES=oap-server-svc:11800

# 提供一个默认命令（子镜像可以覆盖）
CMD ["java", "-version"]
```