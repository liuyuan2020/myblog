---
title: 用原生js写animate函数
date: 2018-11-20 14:21:09
categories:
  - 前端学习记录
tags:
  - 前端
  - js
---

## animate 函数

1、默认 styleObj（样式对象）内只有一个属性

    function animate(ele, styleObj) {
      // 从对象中获取属性名
      // 使用 for in 语句遍历对象 可以获取对象的属性名以及属性值
      for (var i in styleObj) {
       // for in 语句中声明的变量指的是属性名
        var styleName = i;
       // 访问对象下不存在的属性时，得到的结果是 undefined
       // 因为对象.后面的不会当变量去处理
      // 对象下获取属性值还有另外一种方法 对象[属性名] 因为[]内写的是变量，会当做变量处理
        var styleValue = styleObj[styleName];
        console.log(styleValue);
     }

2、使用 **Object.keys(对象)**可以获取该对象下的属性，以<font color=red>数组</font>的形式

function animate(ele, styleObj){
var styleName = Object.keys(styleObj)[0];
var targetValue = styleObj[styleName];
console.log(styleName, styleValue);
}
3、**获取当前元素现在的样式值 样式初始值**

**非 ie**

    使用 window.getComputedStyle(元素,null)获取该元素的最终样式对象
    var startValue = parseFloat(
    window.getComputedStyle(ele, null)[styleName]);

**ie**

    使用元素 元素.currentStyle 获取该元素的最终样式对象

4、**每间隔几秒执行改变一次样式值（两种方法）**

**方法一 计时器**

     var run = setInterval(function() {
     //当前样式值大于目标样式值时缩小，小于时放大，等于时停止
     if (startValue > targetValue) {
     startValue--;
     } else if (startValue < targetValue) {
     startValue++;
     } else {
     clearInterval(run);
     }
     ele.style[styleName] = startValue + "px";
     }, 10);

**方法二 requestAnimationFrame**

    function run() {
      if (startValue > targetValue) {
        startValue--;
      } else if (startValue < targetValue) {
        startValue++;
      }
      ele.style[styleName] = startValue + "px";
      if (startValue !== targetValue) {
        // 递归函数 函数内部调用该函数 相当于 for 或 setInterval
        requestAnimationFrame(run);
      }
    }
    run();

**函数调用部分**

1.使用计时器让元素每过一段时间就改变样式

2.点击按钮之后 每过 10ms 让 box 的 margin-left + 1

    var ml = 0;
    document.querySelector("button").onclick = function() {
      setInterval(function() {
        ml++;
        document.querySelector(".box").style.marginLeft = ml + "px";
      }, 10);
      animate(document.querySelector(".box"),{width: 400});
    };
