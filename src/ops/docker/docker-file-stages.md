---
title: Dockerfile 分阶段构建
date: 2025-03-19
editLink: false
category:
    - 运维
tag: 
    - Docker
    - Dockerfile
---


## 场景描述

在`CI/CD`的场景下，从代码提交合并到自动打包构建，会分好几个阶段，例如：`git push` -> `代码规范检查` -> `sonar 扫描` -> `maven 打包` --> `docker 打包镜像` -> `docker push harbor`。在这里如果自动触发构建不做过多赘述（Jenkins内容，感兴趣的自行了解），这里只做`Dockerfile` 分阶段构建镜像的说明。

举个例子：现在需要将开发提交的`portal-gateway`代码打包成一个`docker 镜像`。

常规情况下，分两步：

- 源码通过maven ：`mvn clean package`编译为jar包。
- 将这个jar 构建成一个docker 镜像，发布的时候运行这个镜像即可。

现在，通过dockerfile的分阶段构建完成这两步。

## 准备

```shell
# maven 项目源码结构
$ tree -L 2
.
|-- Dockerfile
|-- README.md
|-- config
|   |-- application.yaml
|   `-- bootstrap.yaml
|-- pom.xml
|-- src
|   `-- main

# 两个docker 基础镜像
$ docker images
REPOSITORY        TAG                               IMAGE ID       CREATED        SIZE
eclipse-temurin   17.0.14_7-jdk-alpine-3.21         51e074d8dc1a   6 weeks ago    332MB
maven             3.9.9-eclipse-temurin-17-alpine   1810170af99d   7 months ago   351MB

```

- 一个 maven 项目结构，项目名称（按实际情况）：`portal-gateway`
- 一个同级目录下`Dockerfile`文件
- 两个docker基础镜像，分别是：`maven:3.9.9-eclipse-temurin-17-alpine`、`eclipse-temurin:17.0.14_7-jdk-alpine-3.21`

*Note:*
> 我们拿到的是未编译的源码，要经过maven进行编译打包后，才能根据这个jar打包构建发布，所以需要maven基础镜像镜像编译打包，需要jdk运行这个jar应用。

## Dockerfile

```dockerfile
# 第一阶段，使用maven进行构建打包
FROM maven:3.9.9-eclipse-temurin-17-alpine AS builder
# 工作目录
WORKDIR /home/builder
# 复制源码
COPY src src
COPY pom.xml pom.xml
# maven构建
RUN mvn clean package

# 第二阶段，根据第一阶段打的包，构建镜像
FROM eclipse-temurin:17.0.14_7-jdk-alpine-3.21 AS deploy
WORKDIR /home/app
# 从第一阶段拿到的jar进行构建
COPY --from=builder /home/builder/target/portal-gateway-2.0.1-SNAPSHOT.jar ./app.jar
COPY config/ config/
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone
EXPOSE 8080
ENTRYPOINT java ${JAVA_OPTS} -jar  app.jar ${JAVA_CLI}
```

*Note：*

- *关键点1：FROM AS，将某一个阶段通过AS关键字命名*
- *关键点2：COPY --from=builder，复制某个阶段的产物（不是宿主机）*

*这里只是描述两个阶段而已，无论多少个阶段，逻辑是一样的，无非是 `AS` 阶段，然后取某个阶段的产物*

## 构建镜像&启动容器

构建镜像

```shell
cd demo
docker build -t gateway:v1.0.0 .
```

*Note：*

- `-t`， 表示需要为镜像打`tag`（版本号）- `v1.0.0-test`
- `.` 表示使用当前目录下的Dockerfile文件进行构建镜像（当然也可以通过`-f [path]`指定其他目录下的Dockerfile [参考](https://www.runoob.com/docker/docker-build-command.html)）

启动容器

```shell
docker run --name demo -e JAVA_OPTS=-Xms 128m -Xmx 256m -e JAVA_CLI=--spring.profiles.active=dev -d demo:v1.0.0-test
```

## 参考

- https://docs.docker.com/reference/dockerfile/
- https://www.runoob.com/docker/docker-build-command.html