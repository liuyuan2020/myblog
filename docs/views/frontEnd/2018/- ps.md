---
title: html
date: 2018-10-15 09:13:46
categories:
  - 前端学习记录
tags:
  - 前端
  - html
  - sublime Text
  - ps
---

## sublime text 快捷键

### tab 组合键

    例如：
    margin:0;-------m0+tab
    width:1422px;-----w1422+tab
    height:150px;-----h150+tab
    bgc+tab----默认颜色值是白色
    .类名+tab----自动生成一个带有类名的div
    ！+tab----自动生成前面的一些声明
    .top+.bottom+tab-------自动补全两个类名分别为top和bottom的盒子
    meta:vp+tab-------自动生成移动端布局需要的meta标签

### ctrl 组合键

    ctrl+n：新建文件
    Ctrl+f：搜索栏
    Ctrl+？：自动注释
    Ctrl+d : 双击一个名字之后选择和这个名字相同的下一个
    Ctrl+shift+↑|↓: 选中语句选择向上或向下移动。

## ps 快捷键

    alt+滚轮：缩小放大图片
    空格+拖拽：移动图片
    ctrl+shift+alt+s:导出切片

## head 头部样式处理

1、body 等有些标签自带上下左右 8 像素的边距，影响正常开发，因此需要一个**全局样式处理**。

```
*{
    magin:0;padding:0;
 }
```

2、header、section、footer 的样式里宽度要设置为百分比，**防止窗口缩放时下边出现滚动条**

```
header{
    width:100%;
    hegight:143px;
    background-color:#fff;
}
/*宽度100%意思就是和父级一样，也就是说和body（浏览器宽度）一样*/
```

3、可以写大小的结构都是默认竖向排列，如果想要横向需要给所有横向的结构添加`float`样式，例如：

```
.logo{
    width:452px;
    height:93px;
    background-color:#fff;
    float:left;
}
```

4、 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
margin: 0;
padding: 0;
border: 0;
outline: 0;
font-weight: inherit;
font-style: inherit;
font-size: 100%;
font-family: inherit;
vertical-align: baseline;
}
.clearfix:before,
.clearfix:after {
content: "";
display: block;
clear: both;
visibility: hidden;
line-height: 0;
height: 0;
font-size:0;
}

## 页面重构

1、画结构（根据设计图）header(logo、banner：轮播图、导航、搜索)+section（网页主体内容）+footer（版权信息、友情链接）保证网页主要内容左右边界对齐居中。
2、代码顺序，按照设计图分块从上到下从左到右
3、标签种类：header（头部）section（主体）footer（底部）

## 表单

### label 标签

`input`前面的文字提示，使用 label 标签，label 标签内的 for 作用是：**当 for 的值和 input 的 id 值相同的时候，点击 label 文字就可以激活输入框**，例如：

```
<label for="username">姓名：</label>
<input type="text" id="username">
```

## 自定义属性

在 html 内给 li 定义一个自定义属性 data-num 值为对应的索引值，之后可以利用 dom 元素.getAttribute('属性名')来获取属性值。

**一般用来获取元素下标**
