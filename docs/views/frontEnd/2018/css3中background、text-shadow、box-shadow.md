---
title: css3中背景、阴影、文字、动画
date: 2018-10-20 14:34:40
categories:
  - 前端学习记录
tags:
  - css3
  - 前端
---

## css 浏览器厂商前缀

**有些 css3 不同浏览器写法不一样或者不兼容，需要加上厂商前缀在属性名或属性值前加厂商缀**

-webkit- 谷歌 Safari（苹果）
-ms- ie
-o- Opera（欧鹏）
-moz- firefox（火狐）

## 背景

常用属性：**background-image、background-repeat、background-position、background-color、background-size**

### 调整背景图大小：

    1、background-size:宽(px %) 高（px %);百分比根据盒子宽高计算。
    2、background-size:100% ;（宽度100%高度自适应）
    3、background-size:cover;(图片无限放大或缩小直至盖住所有全覆盖，**保留图片比例**)
    4、background-size:contain;（在盒子中能看到完整的最大的图片）

### 背景渐变（只举例线性渐变）

    /*水平线性渐变*/
    background: linear-gradient(to right, red,white);
    /*垂直线性渐变*/
    background: linear-gradient(red,white);

### 背景图的定位区域（不常用）

    规定背景图的定位区域，默认是在padding内。
    background-origin:border-box ;

### 背景图剪裁（不常用）

    background-clip: padding-box;

### 多重背景

**在 background-image 下写两个 url，之间用逗号隔开**

```
background-image: url(images/1.jpg),url(images/2.jpg);
/*第一张图不平铺，第二张图横向平铺*/
background-repeat:no-repeat,repeat-x;
```

## 阴影

**注意：阴影不占实际位置，多重阴影：属性值之间用逗号隔开**

### text-shadow

    text-shadow:水平（必须） 垂直（必须） 模糊（可选） 颜色（可选）;

### box-shadow

    box-shadow:水平偏移 垂直偏移 模糊 尺寸 颜色（默认是黑色） 位置（默认是外面，inset是里面）;

```
box-shadow:2px 2px 5px 5px #000 inset;
```

## CSS 文字

### 文本过长显示省略号

**浏览器会把没有空格的一段字母当做一个单词，当一行撑不下一个单词时，单词会掉到下一行**

**打破长单词，当一行的最后一个单词过长，达到设置的宽时，有时需要打破长单词**
**wrod-break:break-all;**

```
/*单行文本超出显示3个省略号需要的四个条件*/
文本必须有定宽   width:200px;
强制不换行       white-space:nowrap;
超出部分隐藏     overflow:hidden;
文本超出先是省略号text-overflow:ellipsis;
```

```css
/*多行文本超出显示3个省略号需要的条件*/
p {
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

### 文本过长截掉

**修剪文本，超出部分直接截掉**
**text-overflow:clip;**

### 自定义字体

**通常自定义字体都写到样式最顶端,四种后缀名的字体文件统一放到 fonts 文件夹里，定义样式之后就可以使用 font-family 对应的字体了**

> @font-face{

    	**定义自己的字体**
    	**自定义字体的名称**
    	font-family:BebasNeue;
    	** 自定义字体的路径 每一个url是一种字体类型的路径**
    	**ttf eot woff svg 都是字体文件，只不过不同浏览器认识字体类型不一样**
    	**最后引入svg，否则会出现浏览器会报警告信息**
    	src:url(fonts/BebasNeue-webfont.eot),url(fonts/BebasNeue-webfont.svg),url(fonts/BebasNeue-webfont.ttf),url(fonts/BebasNeue-webfont.woff);
    }

## CSS3 转换

**只作用于块元素**
**用空格可以写多个转换属性**

transform:translate(100px,100px) rotate(40dge);

    CSS3转换-transform 可实现位移 旋转 缩放 拉伸（少见）。转换的盒子（原来的位置不变，也不会改变别人的位置，还会盖住普通布局的元素）
    **位移**  transform:translate(水平,垂直);
    **旋转**  transform:rotate(deg);中心点默认是盒子最中间
    **缩放**  transform:scale(宽倍数，高倍数); 写一个值的时候意思是宽和高的倍数一样

## 过渡

**作用：监听样式变化，给变化的过程加上过渡效果**
**写法：transition:样式名（必须的 想要监听哪个样式） 过渡时间（必须的 单位 s 或 ms） 速度曲线（默认是 ease 匀速 linear） 延迟时间（单位 s 或 ms)
样式名有个特殊值 all 代表所有样式也就是说 transition 会监听所有的样式变化**

```
.box{
	width: 400px;
	height: 400px;
	background-color: #ccc;
	box-shadow: 2px 2px 5px 5px  #000 inset;
/*监听样式background-color变化，只要background-color发生了变化，就会加上过渡效果*/
	transition: background-color 2s
}
.box3:hover{
	background-color: #f00;
}

/*可以分别对某个样式进行监听 */
.box{
	width: 400px;
	height: 400px;
	background-color: #ccc;
	box-shadow: 2px 2px 5px 5px  #000 inset;
/*监听样式background-color变化，只要background-color发生了变化，就会加上过渡效果*/
	transition: background-color 2s linear 2s,transform 3s linear;
}
.box3:hover{
	background-color: #f00;
	transform:translate(0px,0px);
}
```
