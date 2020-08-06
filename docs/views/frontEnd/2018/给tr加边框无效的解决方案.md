---
title: 给tr加边框无效的解决方案
date: 2018-11-11 20:04:29
categories:
  - 参考手册
tags:
  - 前端
  - css
---

**解决办法**

    给table加上一个样式：
    table{
      border-collapse:collapse;
    }
    无效果的原因是因为<tr>标签的属性中没有border和solid属性。

    边框不折叠的表格(即 border-collapse:collapse)的行列，行组和列组是不具有border的。
    默认table边框是折叠的。
