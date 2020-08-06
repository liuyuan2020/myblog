---
title: css取消双击文字变成选选中状态
date: 2018-11-05 11:00:52
categories:
- 前端学习记录
tags:
- css
---

## 前言
   在我们写前端页面的时候，由于手速过快，会经常双击，浏览器就会默认选中你双击的文本，这种当然需要避免。
## 方法
1、方法一：**user-select:none;**

因为存在着兼容性的问题，所以在写的时候需要考虑一下：
```
div{
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
      user-select:none;
}
```
2、方法二：**onselectstart="return false;"**

在相应的标签上添加onselectstart="return false;"，例如：

    <section onselectstart="return false;">这又是一段文字</section>
如果把上述方法写到body中，就实现了禁止用户选中页面上的内容的效果。
