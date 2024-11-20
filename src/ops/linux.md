---
title: Linux 常用命令
date: 2024-11-19
editLink: false
order: 1
category:
    - 运维
tag: 
    - Linux
---

文件/目录

```shell
# 以KB、MB、GB 显示文件大小
ls -lh

# 以KB显示文件大小
ls -ll

# 查看当前目录下各文件、文件夹的大小
du -h –max-depth=1 *

# 查看当前目录的总大小，s就是汇总， 后面可以跟指定目录
du -sh

# 创建目录
mkdir test

# 创建目录及子目录（递归创建）
mkdir -p test/test1/test2

# 复制文件/目录
cp source target

# 剪切/移动文件或目录
mv source target

# 重命名
mv old.text news.text

# 创建文件
touche file.text

# 创建并编辑文件
vim file.text

```

查看端口占用情况

```shell
netstat -tuln
```