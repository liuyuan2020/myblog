---
title: jQuery中的事件冒泡
date: 2018-11-06 13:50:08
categories:
  - 前端学习记录
tags:
  - jQuery
  - 前端
---

## 前言

事件冒泡：给盒子内的元素绑定相同的事件，当点击子元素的时候同样会触发祖先元素的事件。
触发顺序是从内到外，可以使用 jq 事件对象的 event.stopPropagation()阻止事件冒泡。

## 实例

1、body 内需要引入的核心 js 库就不用再说了。
2、**body 中的元素**

    <button class='btn'>按钮</button>
    <div class='box'></div>

3、**盒子的样式**

    .box{
      width:200px;
      height:200px;
      background-color:#ff0;
      display:none;
    }

4、**jQ 事件**

```
<script>
  $('body').click(function(){
    $('.box').fadeOut(500)
  })
  $('.btn').click(function(){
    $('.box').fadeToggle(500)
  })
</script>
```

**上述事件执行后会出现点击按钮后，盒子先缓慢出现，有缓慢消失，这就是发生了事件冒泡，在点击按钮之后不仅发生了 btn 的点击事件，还发生了 body 的点击事件。**

5、**解决办法**

```
<script>
  $('body').click(function(){
    $('.box').fadeOut(500)
  })
  $('.btn').click(function(event){
    event.stopPropagation()
    $('.box').fadeToggle(500)
  })
</script>
```
