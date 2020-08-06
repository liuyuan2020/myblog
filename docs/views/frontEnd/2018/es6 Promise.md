---
title: es6 Promise
date: 2018-12-17 15:45:00
categories:
  - 前端学习记录
tags:
  - es6
---

## 前言

1.**异步操作**：定时器、动画、ajax、setState。

2.原来想要在异步操作之后执行某件事，都是用回调函数，有的时候会掉入**回调地狱**。

3.**axios**是 Promise 的实例。

## es6 promise 的写法

```js
// 创建一个 promise 对象
const promise = new Promise((resolve, reject) => {
  // resolve和reject代表promise状态，前者代表完成，后者代表失败。
  //   大括号里面写异步操作，例如： ajax setTimeout 等。
  if(){
      resolve()
  }else{
      reject()
  }
});
```

1.将异步操作写到 promise 的参数函数内。

2.使用 promise 的 then 方法定义 resolve。
