---
title: Nginx 代理 Nacos 登录：403 问题
editLink: false
category:
    - Nginx
tag:
    - Nacos
    - Nacos / nginx
---

代理配置

```conf
server {
 listen 9090;
 server_name 127.0.0.1;
 # 前端静态代理
 location / {
    proxy_pass http://localhost:8848/;
 }
}
```

![403](/assets/images/nc/nc-ng-403.png)

调整代理配置

```
server {
 listen 9090;
 server_name 127.0.0.1;
 # 前端静态代理
 location / {
   proxy_set_header Host $host;#保留代理之前的host
   proxy_set_header X-Real-IP $remote_addr;#保留代理之前的真实客户端ip
    proxy_pass http://localhost:8848/;
 }
}
```
刷新 `nginx` 配置：`nginx -s reload`，刷新浏览器即可。

![调整后访问](/assets/images/nc/nc-ng.png)