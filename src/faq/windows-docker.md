---
title: 解决：Windows 安装 Docker 报错：此访问列表格式不规范，因此无法修改
date: 2024-11-03
editLink: false
---

在Windows 上安装 docker 时，提示：`此访问列表格式不规范，因此无法修改`，解决方案：

`cmd` 管理员打开：

```shell
icacls "C:\Program Files\Docker" /reset /t /c /q
icacls ""C:\ProgramData\DockerDesktop" /reset /t /c /q
```

*Note:参数说明*

- /reset：重置权限为默认值。
- /t：递归地应用到所有子文件和子目录。
- /c：继续执行，即使出现错误。
- /q：静默模式，不显示成功消息。

**参考资料：**

- https://blog.csdn.net/qq_19309473/article/details/142408021