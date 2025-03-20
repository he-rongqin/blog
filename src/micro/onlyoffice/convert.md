---
title: OnlyOffice Word 转 PDF
editLink: false
index: false
icon: laptop-code
category:
  - OnlyOffice 日常使用
---

## 场景描述

在日常企业级应用开发过程中，文档预览、文档相互转换是非常常见的需求，平时我们都是使用纯java的一些工具进行处理，比如：`docx4j`、`Apache POI + iText`等，无论使用哪种方案，简单的一点问题没有，但是遇到比较复杂的格式，如：表格、字体等样式，效果都不是很理想，不是字体缺失，就是样式错乱，而且解决起来非常麻烦（有可能还解决不了）。

其实，无论选择哪种方案，都需要有个取舍，使用上面的工具，简单、轻量；但是想要效果好，最好的方式还是要有独立的`office server`，如：`LibreOffice`、`OnlyOffice`，因为它们是一套完整的office文档解决方案，并且对外提供API调用。

**本文将描述使用onlyoffice将word转换为pdf。**

*注：使用onlyoffice的前提，需要安装部署onlyoffice，在使用本教程时，确保已部署onlyoffice。*

## WORD 转 PDF

接口: `http://documentServer/ConvertService.ashx`

请求方式： `POST`

Header 参数：

```json
Accept: application/json; // 如果不设置为application/json; 响应的是xml格式
Content-type: application/json;
```

参数：

```json
{
    "sync" :false, // 是否异步，主要影响转换进度的返回，false时，转换进度直接时100
    "filetype": "docx", // 文档类型
    "key" : "ab2058df4bbc4d2f211abe12646ac883", // 文档的唯一编码，可以是文档的md5，也可以是一个唯一随机串
    "outputtype": "pdf", // 输出文件类型
    "title": "test.docx", // 标题，转换完之后，下载的文件名
    "url" : "文档下载地址" // 文档下载地址，需要访问白名单，供onlyoffice ：documentServer 进行访问下载
}
```

请求示例：

```json
{
    "sync" :false, 
    "filetype": "docx",
    "key" : "ab2058df4bbc4d2f211abe12646ac883",
    "outputtype": "pdf",
    "title": "test.docx",
    "url" : "http://192.19.0.107:9104/api/cgi-bin/oss-service/v1/ali-oss/download/1654f65941404973a280f074b63b8e4b.docx"
}
```

响应结果：

```json
{
    "fileUrl": "http://documentServer/cache/files/data/conv_ab2058df4bbc4d2f211abe12646ac883_513/output.pdf/test.pdf?md5=6gLrsbSrQb3GjKlx652lgA&expires=1742460434&shardkey=1742284077136&filename=test.pdf", // pdf下载地址
    "fileType": "pdf", // 文件类型
    "percent": 100, // 进度
    "endConvert": true // 是否转换结束
}
```

将`fileUrl`在浏览器中访问，即可完成pdf下载，也可以通过前端进行控制跳转下载。