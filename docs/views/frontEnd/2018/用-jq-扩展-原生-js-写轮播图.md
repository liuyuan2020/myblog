---
title: 用 jq 扩展 + 原生 js 写轮播图
date: 2018-11-27 09:30:36
categories:
  - 前端学习记录
tags:
  - js
  - jq
---

## 前言

1.如果想要给 jq 加上新方法或属性，要用`jQuery.fn.extend`(也可以写作\$.fn.extend)

    jQuery.fn.extend({方法名:function(){}})

2.为了使页面的更加灵活，方便修改，可以用 js 写轮播图

## 实现过程

一.**body 部分 填写除轮播的固定部分**

    <!-- 填写固定的html -->
    <div class="loop1">
      <a href=""><img src="./imges/5beaa473N2474f0bd.jpg" alt=""/></a>
      <a href=""><img src="./imges/5becc8c5Ncb30804f.jpg" alt=""/></a>
      <a href=""><img src="./imges/5bf27970Nab538101.jpg" alt=""/></a>
      <a href=""><img src="./imges/5bf4e1feN6df9afad.jpg" alt=""/></a>
    </div>
    <div class="loop2">
      <a href=""><img src="./imges/5beaa473N2474f0bd.jpg" alt=""/></a>
      <a href=""><img src="./imges/5becc8c5Ncb30804f.jpg" alt=""/></a>
      <a href=""><img src="./imges/5bf27970Nab538101.jpg" alt=""/></a>
      <a href=""><img src="./imges/5bf4e1feN6df9afad.jpg" alt=""/></a>
    </div>

二.**样式部分**

**因为之后会添加类名 loop，所以最好所有类选择器前面都加上父级类名 loop**

```
/* 视窗 loop 以及图片的样式 */
.loop {
  overflow: hidden;
  position: relative;
}
.loop a img {
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.5s;
}
.loop a:first-child img {
  z-index: 1;
  opacity: 1;
}
/* 给左右按钮和下面的按钮写样式 */
.loop .list {
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  bottom: 20px;
  z-index: 2;
  display: flex;
  justify-content: center;
  width: 100%;
}
.loop .list li {
  margin-right: 5px;
  display: flex;
}
.loop .list li:last-child {
  margin-right: 0px;
}
.loop .list li span {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
}
.loop .list li:first-child span {
  background-color: hotpink;
}
.loop .prev,
.loop .next {
  position: absolute;
  top: 200px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 50px;
  height: 100px;
  z-index: 3;
  color: #fff;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  cursor: pointer;
}
.loop .prev {
  left: 0px;
}
.loop .next {
  right: 0px;
}

```

三.**用 jq 扩展+js 实现轮播部分，记得引入 jq 库(面向编程的方法)**

<font color=red>jQuery.fn.extend({

\/\*在 jq 扩展里面写轮播方法\*\/
loop:function(options){}

})</font>

```
// 自定义轮播图插件 类似Swiper
jQuery.fn.extend({
  loop: function(options) {
    // options 配置选项
    // 窗口大小 width height
    var that = this;

    // 是否有分页器(isPagination)
    // 是否有左右箭头
    // 是否自动播放  (setInterval)
    // 滑入是否停止自动播放  (clearInterval)
    // 滑出是否开始自动播放 重新赋值 setInterval
    // 默认配置
    var defaultOptions = {
      width: 590,
      height: 470,
      isPagination: true,
      autoPlay: true
    };
    var currentOptions = $.extend(defaultOptions, options);
    // console.log(currentOptions);
    that.width(currentOptions.width);
    that.height(currentOptions.height);

    // 在 loop 内生成对应个数的按钮
    // 给按钮绑定事件
    // 自动播放 滑入停止自动播放 滑出继续自动播放
    // 窗口大小自定制
    // 定义一些需要的数据

    // this 指的是实例化对象$('.loop')

    if (currentOptions.isPagination) {
      var imgNum = that.find("a img").length;
      // 创建列表 ul
      var ul = $('<ul class="list"></ul>');
      // 给列表添加 li
      for (var i = 0; i < imgNum; i++) {
        var li = $("<li>").html(`<span></span>`);
        ul.append(li);
      }
      // 将创建好的ul生成到页面中
      that.append(ul);
      that.find(".list li span").click(function() {
        // 找到对应的按钮位置换图片
        var ind = $(this)
          .parent()
          .index();
        that
          .find("a img")
          .eq(ind)
          .css({ "z-index": 1, opacity: 1 })
          .parent()
          .siblings("a")
          .children("img")
          .css({ "z-index": 0, opacity: 0 });
        // 换按钮颜色
        $(this)
          .css("background-color", "hotpink")
          .parent()
          .siblings("li")
          .children("span")
          .css("background-color", "#fff");
      });
    }
    that.addClass("loop");
    // 自动播放
    if (currentOptions.autoPlay) {
      var ind1 = 0;

      var run = setInterval(function() {
        ind1++;
        if (ind1 > imgNum) {
          ind1 = 0;
        }
        // 改变图片
        that
          .find("a img")
          .eq(ind1)
          .css({ "z-index": 1, opacity: 1 })
          .parent()
          .siblings("a")
          .children("img")
          .css({ "z-index": 0, opacity: 0 });
        // 换按钮颜色
        that
          .find(".list li span")
          .eq(ind1)
          .css("background-color", "hotpink")
          .parent()
          .siblings("li")
          .children("span")
          .css("background-color", "#fff");
      }, 1000);
      // console.log(this);
      that.mouseenter(function() {
        clearInterval(run);
      });
      that.mouseleave(function() {});
    }
  }
});
```

四.**另一种扩展的写法（面向对象的写法）**

      (function() {
    $.fn.loop = function(options) {
      // this 指的是调用该方法对象 该对象有可能是一个 dom 也可能是多个
      // 每有一个dom生成一个新的loop对象（面向对象）
      this.each(function() {
        var loop = new Loop($(this));
        loop.settings = $.extend({}, loop.defaultOptions, options);
        loop.init();
      });
    };
    function Loop(element) {
      this.dom = element;
      this.settings = null;
      // 当前现实的图片位置（索引值）
      this.ind = 0;
      this.num = element.find("a img").length;
    }
    Loop.prototype.init = function() {
      this.dom.addClass("loop");
      this.setsize();
      if (this.settings.isPagination) {
        this.create();
        this.bindBtn();
      }
      this.createArrow();
      this.bindArrow();
    };
    var that = this;
    Loop.prototype.create = function() {
      // 创建分页器
      var imgNum = this.dom.find("a img").length;
      // 创建列表 ul
      var ul = $('<ul class="list"></ul>');
      // 给列表添加 li
      for (var i = 0; i < imgNum; i++) {
        var li = $("<li>").html(`<span></span>`);
        ul.append(li);
      }
      // 将创建好的ul生成到页面中
      this.dom.append(ul);
    };
    Loop.prototype.bindBtn = function() {
      var that = this;
      this.dom.find(".list li span").click(function() {
        // 找到对应的按钮位置换图片
        var ind = $(this)
          .parent()
          .index();
        // 事件内部的 this 指向会变
        // 改变该对象 ind 属性
        that.ind = ind;
        that.dom
          .find("a>img")
          .eq(ind)
          .css({ "z-index": 1, opacity: 1 })
          .parent()
          .siblings("a")
          .children("img")
          .css({ "z-index": 0, opacity: 0 });
        // 换按钮颜色
        $(this)
          .css("background-color", "hotpink")
          .parent()
          .siblings("li")
          .children("span")
          .css("background-color", "#fff");
      });
    };
    // 创建左右箭头
    Loop.prototype.createArrow = function() {
      var left = $("<div>")
        .text("<")
        .addClass("prev");
      var right = $("<div>")
        .text(">")
        .addClass("next");
      this.dom.append(left).append(right);
    };
    // 给左右箭头绑定事件
    Loop.prototype.bindArrow = function() {
      var that = this;
      console.log(that.dom);
      that.dom.children(".next").click(function() {
        that.ind++;
        console.log(that.ind);
        if (that.ind >= that.num) {
          that.ind = 0;
        }
        that.dom
          .find("a>img")
          .eq(that.ind)
          .css({ "z-index": 1, opacity: 1 })
          .parent()
          .siblings("a")
          .children("img")
          .css({ "z-index": 0, opacity: 0 });
        that.dom
          .find(".list>li>span")
          .eq(that.ind)
          .css("background-color", "hotpink")
          .parent()
          .siblings("li")
          .children("span")
          .css("background-color", "#fff");
      });
      that.dom.children(".prev").click(function() {
        that.ind--;
        console.log(that.ind);
        if (that.ind <= that.num) {
          that.ind = 3;
        }
        that.dom
          .find("a>img")
          .eq(that.ind)
          .css({ "z-index": 1, opacity: 1 })
          .parent()
          .siblings("a")
          .children("img")
          .css({ "z-index": 0, opacity: 0 });
        that.dom
          .find(".list>li>span")
          .eq(that.ind)
          .css("background-color", "hotpink")
          .parent()
          .siblings("li")
          .children("span")
          .css("background-color", "#fff");
      });
    };
    Loop.prototype.setsize = function() {
      // 设置窗口大小
      this.dom.width(this.settings.width);
      this.dom.height(this.settings.height);
    };
    Loop.prototype.defaultOptions = {
      width: 590,
      height: 470,
      isPagination: true
    };

})(\$);

## 结束

最后在 html 里加上 script 标签，执行 loop 方法即可

    $('.loop1').loop()
    $('.loop2').loop()
