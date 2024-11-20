---
title: Endpoints 集群外部服务进行代理
date: 2024-11-19
editLink: false
category:
    - 运维
tag: 
    - K8S
    - SVC
---

场景一：

`skywalking oap server` 并不是在k8s集群内部部署，但是想在应用中通过svc访问 `oap server`。


```yaml
# 配置 skywalking oap server svc 代理映射
apiVersion: v1
kind: Service
metadata:
  name: oap-server-svc
  namespace: default
spec:
  ports:
    - name: grpc
      protocol: TCP
      port: 11800
      targetPort: 11800
    - name: http
      protocol: TCP
      port: 12800
      targetPort: 12800
---
apiVersion: v1
kind: Endpoints
metadata:
  name: oap-server-svc
  namespace: default
subsets:
- addresses:
  - ip: 10.19.0.109 # 目标服务ip
  ports:
  - name: grpc
    port: 11800
    protocol: TCP
  - name: http
    port: 12800
    protocol: TCP
```

场景二：外部数据库集群svc代理

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mysql-svc
  namespace: default
spec:
  ports:
    - name: tcp
      protocol: TCP
      port: 3306
      targetPort: 3306
---
apiVersion: v1
kind: Endpoints
metadata:
  name: mysql-svc
  namespace: default
subsets:
- addresses:      # 目标服务ip
  - ip: 10.0.0.1
  - ip: 10.0.0.2
  - ip: 10.0.0.3
  ports:
  - name: tcp
    port: 3306    # 目标服务端口
    protocol: TCP
```