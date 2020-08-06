---
title: wow.js 和 bootstrap 两种js插件库
date: 2018-11-27 09:40:04
categories:
  - 前端学习记录
tags:
  - 前端
---

## 前言

1、wow.js 能让 pc 端页面滚动时显示动画，使页面更有趣，是一个 js 插件库，一般用 wow.js 配合 animate.css 食用。

2、Bootstrap 也是一种 js 插件库，能让开发变得更简单，迅速。

3、设计师常用的 ui 网站：ant design

## 食用教程

一.**wow.js**

具体参考 github 里面的教程https://github.com/matthieua/WOW
说明里面 Read the documentation 也很有帮助。

1、导入 animate.css、animate.min.css 和 wow.js 、wow.min.js。
可以用 cdn。

2、写五个圆盒子，并在类名中加上"wow （animate 效果名）"，在标签内加上属性 data-wow-duration='2s' data-wow-delay = "5s"。

注意：animate 效果也可以自己写动画。

3、在 script 标签里加上：

    var wow = new WOW()
    wow.init()

二. **Bootstrap**

参考文档即可。
