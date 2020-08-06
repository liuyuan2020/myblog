---
title: 用构造函数仿jq
date: 2018-11-25 16:44:59
categories:
  - 前端学习记录
tags:
  - 前端
  - js
  - jq
---

## 前言

一、**构造函数**

**因为调用 _\$ 函数之后要返回一个对象，并且这个对象要使用 _$构造函数的所有公有属性和方法，那么首先想到的是返回一个由 _$ 构造函数创建的实例化类 但是这样的话就死循环了，所以返回的是 继承该构造函数公有方法的另一个类的实例化对象**

    function _$(selector) {
      return new Selector(selector);
    }

二、**函数原型对象里的方法们**

1、**改变颜色**

    changeColor: function(color) {
       var domArr = this.dom;
       for (var i = 0; i < domArr.length; i++) {
       domArr[i].style.color = color;
       }
      // this.dom.style.color = color
      return this;
      },

2、**获取某个属性或者设置属性值**

      attr: function(attrName, attrValue) {
       // 获取或修改
       var len = arguments.length;
       /*如果有两个参数，说明是修改属性值*/
       if (len > 1) {
       // 修改
       var domArr = this.dom;
       /*遍历dom结点数组，可以修改所有结点的属性值*/
       for (var i = 0; i < domArr.length; i++) {
         domArr[i].setAttribute(attrName, attrValue);
        }
       // 返回的 this 的目的是能使用我们自己定义各种方法，实现链式操作
         return this;
        } else {
           // 获取只能获取一个值
            return this.dom[0].getAttribute(attrName);
        }
      },

3、**修改 dom 元素样式**

    css: function() {
      var len = arguments.length;
      var cssName = arguments[0];
      var domArr = this.dom;
      if (len === 2) {
        // 设置
        var cssValue = arguments[1];
        for (var i = 0; i < domArr.length; i++) {
          domArr[i].style[cssName] = cssValue;
        }
      return this;
      } else if (len === 1) {
        // 如何判断是否为对象
          if (Object.prototype.toString.call(arguments[0] === "[object Object]")) {
          // 为对象执行修改操作
            for (var i = 0; i < domArr.length; i++) {
          // 查找总共有多少个 dom 结点需要修改样式
              for (var j in arguments[0]) {
              // 看参数对象下的所有的属性
                console.log(j);
                domArr[i].style[j] = arguments[0][j];
              }
            }
          console.log(arguments[0].getAttribute);
          // 获取对象中的参数
          } else {
            return window.getComputedStyle(this.dom[0], null)[cssName];
          }
        }
      }

三、**获取 dom 结点的构造函数**

      function Selector(selector) {
        this.dom = document.querySelectorAll(selector);
      }

四、**构造函数的继承**

      Selector.prototype = _$.prototype;

## jq 扩展

<font color=red>修改 jq 原型的话会覆盖原型之前的属性或方法，用.fn.extend 就不会</font>

      // jq 扩展 给 jq 添加方法
      // 自定制一个高亮方法 Highlight
      // $('h1').highLight('red')
      // console.log(jQuery.prototype);
      // jQuery.prototype.a = 10;
      // var b = $("h1").a;
      // console.log(b);

      // jQuery.fn.extend({ a: 10 });
      // var b = $("h1").a;
      // var c = $("h1").css("width");
      // console.log(b, c);
      jQuery.fn.extend({
        highLight: function(obj) {
          // 修改 jquery 对象的颜色
          if (!obj) {
            // 相当于没有传参
            obj = {
              backgroundColor: "yellow",
              color: "red"
            };
          } else {
            if (!obj.color) {
              obj.color = "red";
            }
            if (!obj.backgroundColor) {
              obj.backgroundColor = "yellow";
            }
          }
          this.css({ color: obj.color, backgroundColor: obj.backgroundColor });
        }
      });
      $("h1").highLight({ backgroundColor: "red", color: "yellow" });


<font color=red>采用 defaultOptions 用户可以自定义 highLight 的默认颜色</font>

    highLight:function(obj){
      var defaultObj = {
        backgroundColor:'yellow',
        color:'red'
      }
      var newObj = $.extend(jQuery.fn.highLight.defaultOptions,obj)
    }
    // 给高亮方法添加一组默认值
      // 默认配置必须是方法有了之后才能设置
      jQuery.fn.highLight.defaultOptions = {
        backgroundColor:'yellow',
        color:'red'
      }

**针对高亮设置颜色只给一个值，那么另一个值采用默认值，可以给出一个默认的对象，里面放默认值，后面设置的值会覆盖默认值，没有设置的采用默认值**

<font color=red>对象的合并</font>

    highLight:function(obj){
      var defaultObj = {
        backgroundColor:'yellow',
        color:'red'
      }
      // 让 obj 的属性覆盖 defaultObj 的属性
      // jq 提供的处理对象合并的方法 $.extend(obj1,obj2,...) 返回一个新的对象
      // 后面对象重名属性会覆盖前面的
      var newObj = $.extend(defaultObj,obj)
    }

<font color=red>原生 js 合并对象 es6 语法，浏览器要考虑兼容 也是后面的覆盖前面的</font>

    var newObj = Object.assign(defaultObj,obj)
    console.log(newObj)

<font color=red>es8 的合并对象</font>

    var newObj = {...defaultObj,...obj}
