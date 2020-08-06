---
title: event 事件对象
date: 2018-11-19 16:08:11
categories:
  - 前端学习记录
tags:
  - 前端
  - js
---

## 前言

1、**event 事件对象** 事件函数内的参数（默认第一个参数是 event 事件对象）

2、**jq 事件对象（没有兼容性差异）**

3、**属性** target pageX(鼠标相对于文档顶部的距离) pageY type which 键盘码或鼠标按键码
4、**方法** stopPropagation()阻止事件冒泡 preventDefault()阻止默认行为触发

## 原生 event 事件对象

### 获取事件对象

1、**ie(678) 获取** window.event

2、**非 ie**直接使用参数 event

      document.querySelector("button").onclick = function(event) {
      // 获取事件对象的兼容处理
      // var eve = 0 || window.event;

<font color=red>当或运算符左边的值是 false( undefined 或 null) 时，会将或运算符后面的值赋值给变量，反之将前面的值赋值给变量</font>

### 获取真正触发事件的元素（也是有兼容性的）

1、**非 ie**

    eve.target

2、**ie(678)**

    eve.srcElement

3、**区分 ie 和非 ie 使用事件函数的参数来区分 如果该参数的值是 undefined 说明是 ie(678)**

       if (event) {
         console.log(eve.target);
       } else {
         console.log(eve.srcElement);
       }

### 阻止事件冒泡有兼容

1、**非 ie** eve.stopPropagation()

2、**ie(678)** eve.cancelBubble = true

### 鼠标距离浏览器窗口的坐标

1、**clientX clientY**

2、**screenX screenY**

### 键盘码

1、**ie** eve.keyCode

2、**非 ie** eve.which

3、**绑定键盘事件 最好使用 keyup**

## 事件

    onclick
    onmouseenter
    onmouseleave
    onfocus
    onblur
    ondblclick
    onkeydown
    onkeyup
    onkeypress
    onscroll
    onmousemove
    onchange
    onload 等同于 jq 的 ready
    $(document).ready(function() {});
    window.onload = function() {
         页面中dom元素加载完毕尤其是图片;
    };

**一些表单的 html 属性 value 都可以通过 原生 dom.属性名 修改或获取**

**设置或获取浏览器滚动条距离顶部的距离**

    document.documentElement.scrollTop = 0;

## 实例

**实现效果**

1、鼠标滚到一定距离之后显示侧边四个按钮

2、点击按钮，鼠标滚轮跳到对应盒子的内容的开始位置

**实现过程**

**body 部分**

    <div class="box"></div>
    <div class="side">
      <ul>
        <li><a data-num="0" href="javascript:;">1</a></li>
        <li><a data-num="1" href="javascript:;">2</a></li>
        <li><a data-num="2" href="javascript:;">3</a></li>
        <li><a data-num="3" href="javascript:;">4</a></li>
      </ul>
    </div>
    <div class="boxs">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
    </div>

**js 部分**

```
// 实现鼠标滚到一定距离，按钮出现
window.onscroll = function() {
  // 获取当前鼠标滚动轮距离body顶部的距离
  var distance = document.documentElement.scrollTop;
  var side = document.querySelector(".side");
  if (distance > 200) {
    side.style.display = "block";
  } else {
    side.style.display = "none";
  }
};
// 利用事件委托
document.querySelector("ul").onclick = function() {
  var ele = event.target;
  if (ele.tagName === "A") {
  // 点击了 ul 下的某个a,获取a里面的自定义的属性的值作为a的标号
  var ind = ele.getAttribute("data-num");

// 方法三
// 如果父级有相对定位返回相对于父级顶部的距离 如果没有返回相对于文档顶部的距离
  var box = document.querySelectorAll(".boxs div");
  var juli = box[ind].offsetTop;
  document.documentElement.scrollTop = juli;

// 方法二
var place =box[ind].getBoundingClientRect().top + document.documentElement.scrollTop;
document.documentElement.scrollTop = place;
// 方法一
// switch (parseInt(ind)) {
//   case 0:
//     document.documentElement.scrollTop = 0;
//     break;

//   case 1:
//     document.documentElement.scrollTop = 400;
//     break;
//   case 2:
//     document.documentElement.scrollTop = 1000;
//     break;
//   case 3:
//     document.documentElement.scrollTop = 1600;
//     break;
// }
  }
};
```
