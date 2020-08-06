---
title: dom 操作
date: 2018-10-29 11:01:27
categories:
- 前端学习记录
tags:
- dom
- 前端
- jQuery
---

## 前言
1.**dom**:document object module
2.**dom节点**：dom树就是页面的整体结构，第一次课上画的图，dom节点就是dom的每个html元素。
3.**原生js写法**：document.getElementsbyTagName('input')[0]
4.**jQuery 封装后**：$('input:button')
5.**事件绑定是在页面渲染完毕之后就已经绑定成功了,所以每当创建一个新的dom之后要给新添加的btn绑定事件**
## 添加dom操作
    
    父级.append(元素):将后面元素添加到前面元素内部当做最后一个子级
    父级.prepend(元素) 将后面元素添加到前面元素内部当做第一个子级
    元素.after(元素) 将后面元素添加到前面元素当做其后一个兄弟
    元素.before(元素) 将后面元素添加到前面元素当做前面的一个兄弟
**与上面功能一样但是使用方法相反的方法**
    
    appendTo prependTo insertAfter insertBefore
## 创建dom操作
**$('< li>')**:创建一个空的 li 标签

	$('<button class="xxxx">删除</button>')
**此时要注意 双引号不能套双引号，单引同样。**
## 删除dom操作
**xx.remove() 删除 xx 元素**

## 清空一个标签
**.empty()** 
