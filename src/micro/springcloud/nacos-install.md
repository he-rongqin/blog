---
title: Nacos 部署安装（单机）
date: 2024-11-11
order: 3
editLink: false
category:
    - 微服务教程
tag:
    - Nacos
    - Nacos config
---

## Nacos 安装部署（Docker）

使用`docker`部署`nacos`单机模式。

**准备**

- Mysql 数据库，版本：`8+`
- Nacos 镜像（也可以在运行的时候再去`hub.docker.com`进行下载），版本：`v2.3.1`

数据库连接：

```shell
username: root
passwork: 123456
db: nacos
host: 127.0.0.1/localhost
port: 3306
```

Docker 部署

```shell
docker run --name nacos-st -e MODE=standalone \
    -e NACOS_AUTH_IDENTITY_KEY=nacos -e NACOS_AUTH_IDENTITY_VALUE=nacos \
    -e NACOS_AUTH_ENABLE=true -e NACOS_AUTH_TOKEN=SlRwVmtHV3g1Um5jU2dtekNucnRlVlZRTjRnazlsRm1oS3NwajI= \
    -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=nacos -e MYSQL_USER=root -e MYSQL_PASSWORD=123456 \
    -p 8848:8848 -p 9848:9848 -d nacos/nacos-server:v2.3.1

```
重点参数说明：

- `MODE`，运行模式
- `NACOS_AUTH_ENABLE`， 是否启动鉴权（设置为true时，控制台、客户端都需要账号和密码进行登录），对应nacos中：`nacos.core.auth.plugin.nacos.token.secret.key`属性，**必须是大于或等于32位且经过base64 encoding 的一个字符串**，否则启动的时候会报这个key长度问题
- `NACOS_AUTH_IDENTITY_KEY`，对应`nacos`中`nacos.core.auth.server.identity.key`，认证key，当`NACOS_AUTH_ENABLE=true`时这个必填
- `NACOS_AUTH_IDENTITY_VALUE`，对应`nacos`中，`nacos.core.auth.server.identity.value`，认证value，当`NACOS_AUTH_ENABLE=true`时这个必填

启动完成后，在浏览器访问：`http://localhost:8848/nacos/`，账号/密码： `nacos` / `nacos`