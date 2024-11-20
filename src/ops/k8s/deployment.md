---
title: Deployment
date: 2024-11-20
editLink: false
category:
    - 运维
tag: 
    - K8S
    - Deployment
    - Pod
---

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name:  MYAPP        # Deployment名
  namespace: default  # 名称空间
  labels:
    app:  MYAPP       # 标签名，与pod name对应
spec:
  selector:
    matchLabels:
      app: MYAPP
  replicas: 1  # 副本数
  strategy:                   # 策略指定用于用新 Pod 替换旧 Pod 的策略，文档：https://kubernetes.io/zh-cn/docs/concepts/workloads/controllers/deployment/#strategy
    rollingUpdate:            # 滚动更新
      maxSurge: 25%           # 最大峰值，用来指定可以创建的超出期望 Pod 个数的 Pod 数量，默认：25%
      maxUnavailable: 25%     # 最大不可用数或比例，默认：25%
    type: RollingUpdate       # 可以是 “Recreate” - 创建更新 或 “RollingUpdate” - 滚动更新，默认：“RollingUpdate”
  template:
    metadata:
      labels:
        app:  MYAPP
    spec:
      # initContainers:
        # Init containers are exactly like regular containers, except:
          # - Init containers always run to completion.
          # - Each init container must complete successfully before the next one starts.
      containers:
      - name:  MYAPP          # Pod中的容器名字
        image:  MYAPP:latest  # Pod中容器镜像
        resizePolicy:         # 容器资源调整策略，调整策略允许更精细地控制 Pod 中的容器如何针对 CPU 和内存资源进行调整。
          - resourceName: cpu
            restartPolicy: NotRequired  # 在运行时调整容器的资源，不需要重启，默认：NotRequired
          - resourceName: memory
            restartPolicy: RestartContainer # 重启容器并在重启后应用新资源，默认：NotRequired。
        resources:
          requests:   
            cpu: 0.5          # Pod 中的 CPU 请求
            memory: 100Mi     # pod 中的内存请求
          limits:
            cpu: 100m         # Pod 中的 CPU 限制
            memory: 200Mi     # pod 中的内存限制
        env:                  # 环境变量，可以从configMap中注入，也可以通过 K - V 传入
        - name: DB_HOST
          valueFrom:
            configMapKeyRef:
              name: MYAPP
              key: DB_HOST
        - name: SPRING_PROFILE_ACTIVE
          vaule: test
        ports:
        - containerPort:  80  # 容器端口
          name:  MYAPP
        volumeMounts:         # pod 挂载卷
        - name: localtime
          mountPath: /etc/localtime # 挂载目录
      volumes:                # 卷，常用 hostPath、nfs、持久卷（pv、pvc），参考：https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/
        - name: localtime     # name与volumeMounts[*].name对应
          hostPath:           # 宿主机目录
            path: /usr/share/zoneinfo/Asia/Shanghai
      restartPolicy: Always   # pod的重启策略，Always - 总是重启；Never - 从不
```

参考：

- https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/deployment-v1/