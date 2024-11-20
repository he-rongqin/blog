---
title: 使用 docker compose 安装 skywalking
date: 2024-11-20
editLink: false
category:
    - 运维
tag: 
    - Docker
    - Docker compose
---

版本：

- `elasticsearch-oss:7.4.2`
- `skywalking-oap-server:10.1.0`
- `skywalking-ui:10.1.0`

docker-compose.yaml 文件

```yaml
version: '3.8'
services:
  elasticsearch:
    image: elasticsearch/elasticsearch-oss:7.4.2
    container_name: elasticsearch
    ports:
      - "9200:9200"
      - "9300:9300"
    networks:
      - sw
    healthcheck:
      test: [ "CMD-SHELL", "curl --silent --fail localhost:9200/_cluster/health || exit 1" ]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
    environment:
      - discovery.type=single-node
      #锁定物理内存地址，防止es内存被交换出去，也就是避免es使用swap交换分区，频繁的交换，会导致IOPS变高
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
      - "TZ=Asia/Shanghai"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes: 
      - /data/elasticsearch/data:/usr/share/elasticsearch/data
      #- /data/elasticsearch/logs:/usr/share/elasticsearch/logs

  oap-server: 
    image: apache/skywalking-oap-server:10.1.0
    container_name: oap-server
    depends_on:
      - elasticsearch
    ports:
      - "11800:11800"
      - "12800:12800"
    networks:
      - sw
    healthcheck:
      test: [ "CMD-SHELL", "curl http://localhost:12800/internal/l7check" ]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
    links:
      - elasticsearch
    environment: 
      SW_HEALTH_CHECKER: default
      SW_TELEMETRY: prometheus
      JAVA_OPTS: "-Xms2048m -Xmx2048m"
      SW_STORAGE: elasticsearch
      SW_STORAGE_ES_CLUSTER_NODES: elasticsearch:9200
  ui:
    image: apache/skywalking-ui:10.1.0
    container_name: ui
    depends_on:
      - oap-server
    links: 
      - oap-server
    ports:
      - "8080:8080"
    networks:
      - sw
    environment:
      SW_OAP_ADDRESS: http://oap-server:12800
      SW_ZIPKIN_ADDRESS: http://oap-server:9412

networks:
  sw:
```


运行：`docker compose up -d` 或者 `docker compose -f skywalking-compose.yaml -d`

*NOTE:*

- *必须安装 `docker compose`*
- *`docker compose up`会执行当前目录下的：`docker-compose.yaml`，默认是在当前`shell session`执行, `ctrl+c` 后会执行：`stop`*
- *`-f` 指定`docker-compose.yaml` 文件路径*
- *`-d`后台运行*
- *`volumes` 挂载的目录，需要授权：chmod 777 [dir]，否则回报无法访问容器目录，其实是无法访问挂载的宿主机的目录*