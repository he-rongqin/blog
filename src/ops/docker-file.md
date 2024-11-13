---
title: Dockerfile
date: 2024-11-13
editLink: false
category:
    - 运维
tag: 
    - Docker
    - K8s
---

**要求**

- 使用 `java8` 作为基础镜像
- 将`spring boot`项目构建为`docker` 镜像
- 容器支持传递：`vmargs`、`args`

**场景描述**

> 开发完成后，只需要手动打包为`jar`或者通过`jenkins` 进行编译打包为jar一次即可，即里面的项目配置通过外部配置进行覆盖，比如，在将`jar`打包为`docker` 镜像时，将应用本身的配置覆盖，程序员不需要关注各个环境的部署配置，只关注业务开发（开发环境）。

## 准备

```shel
├── demo
│   ├── Dockerfile
│   ├── app.jar
│   └── config
│       └── bootstrap.yaml
```

- 一个`spring boot` 应用包：`app.jar`
- 一个 覆盖配置文件：`config/bootstrap.yaml`
- 一个`Dockerfile` 文件

*Note:*
> Spring boot 的配置文件加载优先级：启动时传递的参数 > 应用（即jar文件）同级config/properties或yaml > 应用同级的配置：properties或yaml配置文件 > jar内下classpath:properties或者yaml文件 > Java代码中的配置

## Dockerfile

```dockerfile
FROM openjdk:8u342-jre # 1 
ENV TZ=Asia/Shanghai #2
WORKDIR /home/app   #3
COPY app.jar app.jar    #4 
COPY config config  #5
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone    #6
USER root   #7
EXPOSE 8080 #8
ENTRYPOINT java ${JAVA_OPTS} -jar app.jar --user.timezone=GMT+08  ${JAVA_CLI}   #9
```

*Note：*

- *#1 基础镜像*
- *#2 时区环境变量*
- *#3 工作目录，容器启动后会创建该目录，下面的操作都将基于这个目录进行*
- *#4 复制当前目录（基于Dockerfile)下的 app.jar 到容器，COPY source[宿主机目录/文件] dest[容器目录或文件]*
- *#5 复制配置文件目录*
- *#6 设置容器时区*
- *#7设置用户*
- *#8 往外暴露的端口*
- *#9 设置容器启动时执行的命令*
  - `JAVA_OPTS`，环境变量，容器启动时传`vmargs` 虚拟机参数，比如：`-Xms 128m -Xmx 256m`
  - `JAVA_CLI`,`arg` 系统参数，容器启动时传，即`main`方法接手的参数，例如：`--spring.profiles.active=test`

## 构建镜像&启动容器

构建镜像

```shell
cd demo
docker build -t app:v1.0.0-test .
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