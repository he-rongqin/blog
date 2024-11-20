---
title: Service
date: 2024-11-20
editLink: false
category:
    - 运维
tag: 
    - K8S
    - Service
    - SVC
---

Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service    # SVC 名称，如：gateway-svc
  namespace: default  # 所在的名称空间
spec:
  selector:           # pod 选择器
    app: MYAPP        # 过滤标签名，与pod标签名对应
  type: ClusterIP     # 服务类型，ClusterIP 集群ip，集群外无法访问；NodePort，通过每个节点上的 IP 和静态端口（NodePort）公开 Service
  ports:
  - name: MYAPP
    protocol: TCP
    port:             # svc端口（非nodePort）
    targetPort:       # 目标端口，pod的端口
    # 如果 type = NodePort，你可以设置nodePort的端口号，不能冲突
    #nodePort: 
```

参考：
- https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/service-resources/service-v1/