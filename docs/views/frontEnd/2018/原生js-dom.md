---
title: 原生js-document
date: 2018-11-15 17:11:27
categories:
  - 前端学习记录
tags:
  - js
  - dom
  - 前端
---

## 前言

之前经常用 js 封装好的库文件 jquery，用原生 js 的好处是能提高页面的加载速度

## 获取元素

1、通过 id 获取 html 元素 **document.getElementById('id 名')**
<font color=red>用的相对较多</font>

    document.getElementById("btn");

2、通过 class 获取**document.getElementsByClassName('class 名')** 获取的是类数组，数组内放的是 html 元素 不管有几个 class 名相同的 获取的都是类数组 如果想要获取真正的元素 需要加[]

<font color=red>用的相对较少，兼容性不是很好</font>

    var arr = document.getElementsByClassName("one")[0];

3、**document.getElementsByTagName('标签名')** 跟上面的 class 一样

<font color=red>用的相对较多</font>

4、**document.getElementsByName('name 名')**跟上面的一样

**一般经常用的是下面的两个，比较方便**

5、**document.querySelector('css 选择器')** 获取的是满足条件的第一个 html 元素

6、**document.querySelectorAll('css 选择器')** 获取的是满足条件的所有 html 元素的类数组

## 绑定事件

1、document.querySelector("#btn").onclick = function() {
console.log(1);
};

2、也可以先定义一个函数，之后在 html 元素内部写 onclick

    var fun = function() {
        console.log("hahah");
    };
      <a href="javascript:;" class="one" onclick="fun()">按钮</a>

3、**事件对象**

    要使用事件对象的话 需要在事件函数内 写个参数 event 才能使用。
    event.target 获取鼠标真正点击的 dom 元素

## 属性和方法

1、**dom 对象.getAttribute('属性名')**:获取元素属性的属性值

2、**dom 对象.setAttribute('属性名','属性值')** 设置属性 也可以设置多个 ({'名':'值'，'名':'值'，'名':'值'....})

3、**dom 元素.className 获取**:获取元素的类名

4、**dom 元素.className = ''**:设置元素的类名

5、**dom.value** value 属性设置或获取表单元素的内容

    var val = document.querySelector("textarea").value;
    document.querySelector("textarea").value = "";

6、**document.createElement('标签名')** 创建一个新标签

7、**dom 元素.appendChild(dom 元素)** 向 前面的 dom 元素内部最后面添加 后面的 dom 元素

    注意：appendChild()需要传入的是一个对象，而不是字符串

8、**dom 元素.innerHTML**：属性设置或获取 html 内容

9、**dom 元素.insertBefore('要添加的 li','原来存在的元素 li')**

    insertBefore 方法第二个参数如果为 undefined的话直接添加到ul内部最后面

10、**dom 元素.removeChild(dom 元素)** 删除前面 dom 元素内的某个后面的 dom 元素

11、**dom.parentNode** 属性 获取 dom 元素的父级节点

## 修改元素样式

**jq 修改样式的方法**

css addClass removeClass width height

**原生 dom 对象（通过原生的方法获取的真实 dom 节点 即页面中的某个标签）修改样式的方法**

style 属性 ：该属性指的是该对象所有的行内样式
那么直接对 style 对象下的属性进行修改相当于直接修改行内样式。

    // 下面拿到的是一个对象，对象里面的属性名是样式名，属性值是样式值，可直接用对象的方法修改样式值
    document.querySelector('.box').style

**document.querySelector('.box').style.backgroundColor = '#000'**

## 获取元素的功能用函数封装

    function get(selector){
        return document.querySelector(selector)
    }

## 事件委托(在 jq 中同样适用)

**功能**

1.替换 for 循环绑定事件

2.实现点击新添加的元素触发某个操作

3.将后代元素的事件委托给祖先 前提是因为事件冒泡

**属性**

**event.target** 获取鼠标真正点击的 dom 元素

**dom 元素.tagName** 获取当前 dom 元素的标签名 返回的是大写的标签名

## 函数封装(addClass removeClass)实例

**实现带左右按钮和页码的轮播图**

**body 结构部分**

    // show 是大盒子

    <div class="show">
        <div class="pic" style="margin-left: 0px;">
            <img src="./images/gracetan_01.jpg" alt="" />
            <img src="./images/gracetan_02.jpg" alt="" />
            <img src="./images/gracetan_03.jpg" alt="" />
            <img src="./images/gracetan_04.jpg" alt="" />
            <img src="./images/gracetan_05.jpg" alt="" />
        </div>
        // 页码
        <ul class="list">
            <li data-num="0">1</li>
            <li data-num="1">2</li>
            <li data-num="2">3</li>
            <li data-num="3">4</li>
            <li data-num="4">5</li>
        </ul>
        // 向前向后按钮
        <div class="side prev"><i class="iconfont icon-zuoyou"></i></div>
        <div class="side next"><i class="iconfont icon-you-copy-copy"></i></div>
    </div>

**样式部分**

```
// 用 display:flex 布局
.show {
width: 670px;
height: 329px;
overflow: hidden;
position: relative;
}
/ inline-block 的元素只要是 html 上面两个元素之间有回车就会出现边距 /
.show .pic {
width: 3350px;
height: 329px;
display: flex;
transition: margin-left 0.5s;
margin-left: 0px;
}
.list {
display: flex;
width: 100%;
justify-content: center;
position: absolute;
bottom: 15px;
}
.list li {
list-style: none;
width: 30px;
height: 30px;
line-height: 30px;
background-color: #ccc;
font-size: 14px;
border-radius: 50%;
text-align: center;
cursor: pointer;
}
.side {
position: absolute;
top: 132px;
width: 30px;
height: 45px;
text-align: center;
cursor: pointer;
background-color: rgba(0, 0, 0, 0.2);
}
.side .iconfont {
font-size: 16px;
color: #fff;
line-height: 45px;
}
.prev {
align-self: flex-start;
left: 10px;
}
.next {
align-self: flex-end;
left: 630px;
}
.show .list .grey {
background-color: #ccc;
}
.show .list .active {
background-color: pink;
}
```

**js 部分**

**封装一个 addClass(className,selector)函数**

      var newClass;
      function addClass(className, selector) {
        // addClass的功能是可以在原有的类名下添加新的
        // 先获取已有的类名，在将新添加的存入数组中
        var objClass = selector.className;
        // 用字符串方法indexOf 的话有弊端，当本来就有包含active的字符串时，就不会添加active这个类名
        // 因此要在需要查找的字符串前后加上空白符
        if (objClass.indexOf(" " + className + " ") === -1) {
          objClass += " ";
          newClass = objClass + className;
        }
        selector.className = newClass;
      }

**封装一个 removeClass(className,selector)函数**

    function removeClass(className, selector) {
        var re = new RegExp("(\\s|^)(" + className + ")(\\s|$)");
        // 如果要删除的类名存在，那么将这个类名删除
        console.log(re.exec(selector.className));
        if (re.test(selector.className)) {
          selector.className = selector.className.replace(re, " ").trim();
          console.log(selector.className);
        }
      }

方法一：**利用循环绑定事件**

    var liArr = document.querySelectorAll(".list li");
    var pic = document.querySelector(".pic ");
    for (var i = 0; i < liArr.length; i++) {
      liArr[i].onclick = function() {
     // 原生事件内的 this 指的是触发事件的原生 dom 元素
     // 先改变所有 li 的背景颜色
      for (var j = 0; j < liArr.length; j++) {
         liArr[j].style.backgroundColor = "#ccc";
       }
       // 当前点击的按钮变色
      this.style.backgroundColor = "pink";
      // 改变 pic margin-left
       var ind = this.getAttribute("data-num");
       var ml = ind \* -670 + "px";
       pic.style.marginLeft = ml;
      };
    }

方法二：**利用事件委托**

```
var ind = 0;
var pic = document.querySelector(".pic ");
document.querySelector(".list").onclick = function(event) {
    var ele = event.target;
    if (ele.tagName === "LI") {
        // 点击了ul下的某个li
        for (var j = 0; j < liArr.length; j++) {
            removeClass("active", liArr[j]);
        }
        addClass("active", ele);
        ind = ele.getAttribute("data-num");
        ind1 = ind;
        var ml = ind * -670 + "px";
        pic.style.marginLeft = ml;
    }
};
```

**点击向前按钮**

    var ind1 = 0;
      document.querySelector(".prev").onclick = function() {
        ind1--;
        if (ind1 < 0) {
          ind1 = liArr.length - 1;
        }
        for (var j = 0; j < liArr.length; j++) {
          removeClass("active", liArr[j]);
        }
        addClass("active", liArr[ind1]);
        var ml1 = ind1 * -670 + "px";
        pic.style.marginLeft = ml1;
      };

**点击向后按钮**

    document.querySelector(".next").onclick = function() {
        // ind1 = ind;
        ind1++;
        if (ind1 > liArr.length - 1) {
          ind1 = 0;
        }
        for (var j = 0; j < liArr.length; j++) {
          removeClass("active", liArr[j]);
        }
        addClass("active", liArr[ind1]);
        var ml1 = ind1 * -670 + "px";
        pic.style.marginLeft = ml1;
      };
