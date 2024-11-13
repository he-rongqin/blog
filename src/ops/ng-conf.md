---
title: Nginx 配置
date: 2024-11-13
editLink: false
category:
    - 运维
tag: 
    - Ngnix
---

文件目录：`[Nginx安装目录]/conf`。**Ngnix 最常用命令：`nginx -s reload` 刷新配置。**

## Ngnix 主配置

```config
#user  root;
worker_processes  4;
worker_cpu_affinity auto;
worker_rlimit_nofile 11000;

error_log  logs/error.log warn;
pid        logs/nginx.pid;

events {
    use epoll;
    worker_connections  4096;
    multi_accept on;
}

# TCP 代理
#stream {
#
#    upstream redis {
#        server 10.x.x.x:6379;
#    }
#    server {
#        listen     6378;
#        proxy_pass redis;
#    }
#    upstream mysql {
#        server 192.x.x.x:3306;
#    }
#    server {
#        listen     3307;
#        proxy_pass mysql;
#    }
#}


http {

    # 文件扩展映射
    include       mime.types;
    default_type  application/octet-stream;

    # 日志格���
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"'
                      '$upstream_addr $upstream_status $upstream_response_time $request_time';

    # 防xss攻击
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

    # 最大缓存文件
    open_file_cache max=10000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 1;

    # 允许url带有下划线
    underscores_in_headers on;

    # 版本号隐藏
    server_tokens off;

    # 客户端连接保持会话超时时间
    keepalive_timeout 60;

    # 高效传输模式
    send_timeout 15; 
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;

    # 压缩模式
    gzip on;
    gzip_min_length 2k;
    gzip_buffers 4 16k;
    gzip_http_version 1.0;
    gzip_comp_level 2;
    gzip_types text/plain application/x-javascript text/css application/xml; 

    # 客户端超时时间
    reset_timedout_connection on;
    client_max_body_size  500m;
    client_header_timeout 15;
    client_body_timeout 15;

    # 反向代理时间
    proxy_connect_timeout 60;
    #后端服务器数据回传时间，就是在规定时间内后端服务器必须传完所有的数据
    proxy_send_timeout 90;
    #连接成功后，等候后端服务器响应时间，其实已经进入后端的排队之中等候处理
    proxy_read_timeout 90;
    proxy_buffers 4 32k;
    proxy_busy_buffers_size 64k;

    # 代理传递
    proxy_http_version 1.1;
    proxy_intercept_errors on;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $http_host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Connection "upgrade";
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header origin $http_origin;
    proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;

    # 后端服务定义
    include conf.d/*.conf;

}
```

## Ngnix 服务代理配置

在`conf`目录下，创建：`conf.d` 目录，项目中的所有服务代理都在这里维护，最终的目录： `conf/conf.d`。

*Note：*
> 需要在主配置进行导入该目录下的配置：`http{ include conf.d/*.conf;}`

后端服务配置（举例）：

```config
upstream backend {
    server http://192.168.x.1:8080 weight=5;
    server http://192.168.x.2:8080 weight=1;
    server http://192.168.x.3:8080 weight=3;
}
server {
    listen 8080;
    server localhost;
    location /api/ {
        proxy_pass http://backend/;
        // 其他配置
    } 
}
```

## 参考

- https://nginx.org/en/docs/http/ngx_http_upstream_module.html