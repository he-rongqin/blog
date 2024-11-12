---
title: Ngnix 代理Nacos
date: 2024-11-11
order: 4
editLink: false
category:
    - 微服务教程
tag:
    - Nacos
    - Nacos / nginx
---

## Nacos 安装

[Nacos 部署](./nacos-install.md)

情况说明：

- 开启了nacos鉴权
- 使用mysql存储
- 端口：`8848`

## Nginx 代理Nacos

代理配置

```conf
server {
 listen 9090;
 server_name 127.0.0.1;
 location / {
    proxy_set_header Host $host;#保留代理之前的host，重要，否则访问登录会报403
    proxy_set_header X-Real-IP $remote_addr;#保留代理之前的真实客户端ip，重要，否则访问登录会报403
    proxy_pass http://localhost:8848/;
 }
}
```

重点配置

- `proxy_set_header Host $host`，保留代理之前的host，重要，否则访问登录会报`403`
- `proxy_set_header X-Real-IP $remote_addr`，保留代理之前的真实客户端ip，重要，否则访问登录会报`403`

配置完成后，刷新`nginx`配置:`nginx -s reload`，浏览器访问：`http://localhost:9090/nacos/` 就能访问到nacos控制台。

![9090访问](/assets/images/nc/nc-ng.png)