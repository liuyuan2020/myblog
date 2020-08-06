---
title: HTML5和CSS3新增内容
date: 2018-09-16 16:29:30
list_number: false
categories:
- 参考手册
tags:
- HTML5
- CSS3
- 前端
---

## HTML5新增内容

>HTML5 是对 HTML 标准的第五次修订。其主要的目标是将互联网语义化，以便更好地被人类和机器阅读，并同时提供更好地支持各种媒体的嵌入。HTML5 的语法是向后兼容的。现在国内普遍说的 H5 是包括了 CSS3，JavaScript 的说法（严格意义上说，这么叫并不合适，但是已经这么叫开了，就将错就错了）。

**与HTML 4的不同之处**
文件类型声明（<!DOCTYPE>）仅有一型：<!DOCTYPE HTML>。
新的解析顺序：不再基于SGML。
新的元素：
section,video, progress, nav, meter, time, aside, canvas, command, datalist, details, embed, figcaption, figure（**里面常用来包含一个img和一个a标签**）, footer, header, hgroup, keygen, mark, output, rp, rt, ruby, source, summary, wbr。
input元素的新类型：date, email, url等等。
新的属性：ping（用于a与area）, charset（用于meta）, async（用于script）。
全域属性：id, tabindex, repeat。
新的全域属性：contenteditable, contextmenu, draggable, dropzone, hidden, spellcheck。
移除元素：acronym, applet, basefont, big, center, dir, font, frame, frameset, isindex, noframes, strike, tt。
**新增标签**
HTML 5提供了一些新的元素和属性，反映典型的现代用法网站。其中有些是技术上类似&lt;div&gt;和&lt;span&gt;标签，但有一定含义，例如&lt;nav&gt;（网站导航块）和&lt;footer&gt;&lt;audio&gt;和&lt;video&gt;标记。

**移除的标签**
一些过时的HTML 4标记将取消，其中包括纯粹用作显示效果的标记，如&lt;font&gt;和&lt;center&gt;，因为它们已经被CSS取代。还有一些通过DOM的网络行为。

**修改的标签**
尽管和SGML在标记上的相似性，HTML5的句法并不再基于它了，而是被设计成向后兼容对老版本的HTML的解析。它有一个新的开始列看起来就像SGML的文档类型声明，<!DOCTYPE HTML>，这会触发和标准兼容的渲染模式。在2009年1月5号，HTML5添加了Web Form 2.0的内容，html5开始发展起来。

**无障碍（Accessibility）**
为了使HTML5的新元素或新属性获取最大化的兼容性，开发人员需要附加一点额外补助，或者有些特性根本没有被任何浏览器实现，或者浏览器根本不支持补助技术。因此有些特殊的HTML5特性根本不能使用。更多细节可参见HTML5 Accessibility（无障碍）

**新应用程序接口（API）**
除了原先的DOM接口，HTML5增加了更多样化的API:

HTML Geolocation
HTML Drag and Drop
HTML Local Storage
HTML Application Cache
HTML Web Workers
HTML SSE
HTML Canvas/WebGL
HTML Audio/Video

## CSS3新增样式

**一. box-shadow(阴影效果)**

    使用:
    box-shadow: 20px 10px 0 #000;
    -moz-box-shadow: 20px 10px 0 #000;
    -webkit-box-shadow: 20px 10px 0 #000;
>支持: 
    FF3.5, Safari 4, Chrome 3


**二. border-colors(为边框设置多种颜色)**

    使用:
       border: 10px solid #000;
       -moz-border-bottom-colors: #555 #666 #777 #888 #999 #aaa #bbb #ccc;
       -moz-border-top-colors: #555 #666 #777 #888 #999 #aaa #bbb #ccc;
       -moz-border-left-colors: #555 #666 #777 #888 #999 #aaa #bbb #ccc;
       -moz-border-right-colors: #555 #666 #777 #888 #999 #aaa #bbb #ccc;
>说明: 
       颜色值数量不固定, 且FF的私有写法不支持缩写: -moz-border-colors: #333 #444 #555;
支持:
      FF3+


**三. boder-image(图片边框)**

    使用:
       -moz-border-image: url(exam.png) 20 20 20 20 repeat;
       -webkit-border-image: url(exam.png) 20 20 20 20 repeat;
>说明:
(1). 20 20 20 20 ---> 边框的宽度, 分别对应top, right, bottom, left边框, 改变宽度可以实现不同的效果;
(2). 边框图片效果(目前仅实现了两种): 
      repeat --- 边框图片会平铺, 类似于背景重复;
      stretch --- 边框图片会以拉伸的方式来铺满整个边框;
(3). 必须将元素的边框厚度设置为非0非auto值.
支持:
       FF 3.5, Safari 4, Chrome 3


**四. text-shadow(文本阴影)**

    使用: 
       text-shadow: [<颜色><水平偏移><纵向偏移><模糊半径>] || [<水平偏移><纵向偏移><模糊半径><颜色>];
>说明:
(1) <颜色>和<模糊半径>是可选的, 当<颜色>未指定时, 将使用文本颜色; 当<模糊半径>未指定时, 半径值为0;
(2) shadow可以是逗号分隔的列表, 如:
     text-shadow: 2px 2px 2px #ccc, 3px 3px 3px #ddd;
(3) 阴影效果会按照shadow list中指定的顺序应用到元素上;
(4) 这些阴影效果有可能相互重叠, 但不会叠加文本本身;
(5) 阴影可能会跑到容器的边界之外, 但不会影响容器的大小.
支持:
       FF 3.5, Opera 10, Safari 4, Chrome 3


**五. text-overflow(文本截断)**

    使用:
       text-overflow: inherit | ellipsis | clip ;
       -o-text-overflow: inherit | ellipsis | clip;
>说明: 
(1) 还有一个属性ellipsis-word, 但各浏览器均不支持.
支持: 
       IE6+, Safari4, Chrome3, Opera10


**六. word-wrap(自动换行)**

    使用:
       word-wrap: normal | break-word;
>支持:
       IE6+, FF 3.5, Safari 4, Chrome 3


**七. border-radius(圆角边框)**

    使用:
       -moz-border-radius:
       5px;
       -webkit-border-radius:
       5px;
>支持:
FF 3+,  Safari 4, Chrome 3
 

**八. opacity(不透明度)**  

    使用:
       opacity: 0.5;
       filter: alpha(opacity=50);
       -ms-filter(opacity=50);
>支持:
       all


**九. box-sizing(控制盒模型的组成模式)**

    使用:
       box-sizing: content-box | border-box; // for opera
       -moz-box-sizing: content-box | border-box;
       -webkit-box-sizing: content-box | border-box;
>说明:
      1. content-box: 
      使用此值时, 盒模型的组成模式是, 元素宽度 = content + padding + border;
      2. border-box: 
      使用此值时, 盒模型的组成模式是, 元素宽度 = content(即使设置了padding和border, 元素的宽度
      也不会变).
支持:
       FF3+, Opera 10, Safari 4, Chrome 3


**十. resize(元素缩放)**

    使用: 
       resize: none | both | horizontal | vertical;
>说明:
       1. 必须将元素的overflow属性设置为auto或hidden, 该属性才能起作用(overflow设置为visible时, 无效);
       2. 属性值说明:
       (1). none --> 禁用缩放;
       (2). both --> 可同时缩放宽度和高度;
       (3). horizontal --> 仅能缩放宽度;
       (4). vertical --> 仅能缩放高度;
支持:
       safari 4, chrome 3


**十一. outline(外边框)**

    使用:
       outline: 边框厚度 边框样式 边框颜色;
       outline-offset: 偏移值;
>说明:
       outline-offset需要独立写, 简写是无效的.
支持:
       FF3+, safari 4, chrome 3, opera 10


**十二. background-size(指定背景图片的尺寸)**

    使用:
       -o-background-size: [length | percentage] {1, 2};
       -webkit-background-size: [length | percentage] {1, 2};
>例如:
       -o-background-size: 50px 60px;
       -webkit-background-size: 50px 60px;
       这会将背景图片的宽设置了50px, 高60px.
支持:
       safari 4, chrome 3, opera 10  


**十三. background-origin(指定背景图片从哪里开始显示)** 

    使用: 
       -webkit-background-origin: border | padding | content;
       -moz-background-origin: border | padding | content;  
>说明:
       (1) border --> 从border区域开始显示背景;
       (2) padding --> 从padding区域开始显示背景;
       (3) content --> 从content区域开始显示背景;
注意:
       1. 必须先指定background属性, 然后才能指定该属性, 如果该属性出现在background属性之前, 
会无效.
支持:
       safari 4, chrome 3, FF 3+         


**十四. background-clip(指定背景图片从什么位置开始裁切)**

    使用: 
       -webkit-background-origin: border-box | padding-box | content-box | no-clip;
>说明:
       (1) border-box --> 从border区域向外裁剪背景;
       (2) padding-box --> 从padding区域向外裁剪背景;
       (3) content-box --> 从content区域向外裁剪背景;
       (4) no-clip --> 不裁切背景.
注意:
       1. 必须先指定background属性, 然后才能指定该属性, 如果该属性出现在background属性之前, 
会无效.
支持:
       safari 4, chrome 3


**十五.  background(为一个元素指定多个背景)**

    使用: 
       background: [background-image] | [background-origin] | [background-clip]
        | [background-repeat] |[background-size] | [background-position]
>例子:
       background: url(bg1.png) no-repeat left top, url(bg2.png) no-repeat right bottom;
支持:
       safari 4, chrome 3


**十六. hsl(通过色调, 饱和度, 亮度来指定颜色值)**

    使用:
       hsl: ( ||  || );
>说明:
       (1) length: h(色调),  0(或360)表示红色, 120表示绿色, 240表示蓝色;
       (2) percentage: s(饱和度),  取值为0%到100%之间的值;
       (3) percentage: l(亮度),  取值为0%到100%之间的值;
例子:
       background: hsl(240, 50%, 100%);
       color: hsl(100, 80, 100%);
支持:
       safari 4, chrome 3, FF3, opera 10


**十七. hsla(在hsl的基础上上增加了一个透明度设置)**

    使用:
       hsla: ( ||  ||  || );
>说明:
       (1) opacity: a(透明度), 取值在0到1之间;
例子:
       background: hsl(240, 50%, 100%, 0.5);
       color: hsl(240, 50%, 100%, 0.5);
支持:
       safari 4, chrome 3, FF3, opera 10


**十八. rgba(基于r,g,b三个颜色通道来设置颜色值, 通过a来设置透明度)**

    使用:
       rgba: (r, g, b, opacity);
>说明:
       (1) r: 红色, 正整数 | 百分数;
       (2) g: 绿色, 正整数 | 百分数;
       (3) b: 蓝色, 正整数 | 百分数;
       (4) a: 透明度, 取值在0到1之间;
       (5) 正整数在0到255之间, 百分数在0%到100%之间.
例子:
       rgba: (100%, 244, 0, 0.5);
支持:
       safari 4, chrome 3, FF3, opera 10