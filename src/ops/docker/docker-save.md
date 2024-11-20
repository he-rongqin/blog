---
title: Docker 镜像的导出导入
date: 2024-11-20
editLink: false
category:
    - 运维
tag: 
    - Docker
---

应用场景：当我们的环境无法访问互联网镜像库的时候，我们就需要手动上传基础镜像，才能完成镜像的构建和运行。

镜像导出

```shell
docker save -o images.tar [image:tag] 
```

*NOTE:*
- `-o` 表示将镜像输出到某个文件
- `[image:tag]` 表示需要导出的镜像，可以多个，用 空格 分割即可，例如：`docker save -o baseimages.tar NGNIX:1.23.1 openjdk:8u`

镜像导入

```shell
docker load -i baseimages.tar
```
