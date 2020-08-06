---
title: Felx 布局
date: 2018-11-16 09:46:04
categories:
  - 前端学习记录
tags:
  - 前端
  - Flex
---

## 前言

1、有关 flex 一定要记住两点：**容器**（display:flex 的元素） **项目**（flex 下的子级叫项目）
2、Flex 布局 可以简便、完整、响应式地实现各种页面布局。

## 基本概念

1、**容器** 写有 display:flex 的元素，它所有子元素自动成为容器成员，称为 Flex**项目**

2、容器默认存在两根轴：水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）也可以叫副轴。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

## 容器的属性

**以下六个属性设置在容器上**

    flex-direction：  row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    flex-flow: <flex-direction> || <flex-wrap>;
    justify-content: flex-start | flex-end | center | space-between | space-around;
    align-items: flex-start | flex-end | center | baseline | stretch;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;

1、**flex-direction** 属性决定主轴的方向（即项目的排列方向）。

    row（默认值）：主轴为水平方向，起点在左端。
    row-reverse：主轴为水平方向，起点在右端。
    column：主轴为垂直方向，起点在上沿。
    column-reverse：主轴为垂直方向，起点在下沿。

2、默认情况下，项目都排在一条线（又称"轴线"）上。**flex-wrap** 属性定义，如果一条轴线排不下，如何换行。

    nowrap（默认）：不换行。
    wrap：换行，第一行在上方。
    wrap-reverse：换行，第一行在下方。

3、**flex-flow** 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。

4、**justify-content** 属性定义了项目在主轴上的对齐方式。

    flex-start（默认值）：左对齐
    flex-end：右对齐
    center： 居中
    space-between：两端对齐，项目之间的间隔都相等。
    space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

5、**align-items** 属性定义项目在交叉轴上如何对齐。

    flex-start：交叉轴的起点对齐。
    flex-end：交叉轴的终点对齐。
    center：交叉轴的中点对齐。
    baseline: 项目的第一行文字的基线对齐。
    stretch（默认值）：如果项目未设置高度或设为   auto，将占满整个容器的高度。

6、**align-content** 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

    flex-start：与交叉轴的起点对齐。
    flex-end：与交叉轴的终点对齐。
    center：与交叉轴的中点对齐。
    space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    stretch（默认值）：轴线占满整个交叉轴。

## 项目属性

**以下 6 个属性设置在项目上。**

    order:<integer>;
    flex-grow: <number>; /* default 0 */
    flex-shrink: <number>; /* default 1 */
    flex-basis: <length> | auto; /* default auto */
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    align-self: auto | flex-start | flex-end | center | baseline | stretch;

1、**order**属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

2、**flex-grow**属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

    如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
    如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

3、**flex-shrink**属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

    如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
    如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
    负值对该属性无效。

4、**flex-basis**属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。

    它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

5、**flex 属性**是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

    建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

6、**align-self**属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

    该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

## 实例

**手机端淘宝页面布局（不用定位，用 Flex 布局）**

1、body 部分

    <div class="wrap">
      <header></header>
      <div class="main"><div class="box"></div></div>
      <footer></footer>
    </div>

2、css 样式部分

    * {
        margin: 0;
        padding: 0;
      }
      .wrap {
        display: flex;
        width: 100%;
        flex-direction: column;
        height: 100vh;
        /* vh 屏幕的高度比例 100 相当于100%的屏幕高度 vw宽度 */
      }
      header {
        width: 100%;
        background-color: rgb(185, 84, 84);
        height: 50px;
        flex-shrink: 0;
      }
      .main {
        width: 100%;
        background-color: rgb(71, 23, 126);
        flex-grow: 1;
        overflow: scroll;
      }
      .main .box {
        height: 2000px;
        width: 100%;
      }
      footer {
        width: 100%;
        background-color: rgb(33, 209, 48);
        height: 50px;
        flex-shrink: 0;
      }

**关于大盒子高度如何设置可以用 vh 也可以用 js 获取屏幕高度**

      //jq 方法
      console.log($(window.height()));
      // 原生js方法
      console.log(window.screen.availHeight);
