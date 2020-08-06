---
title: AJAX 请求
date: 2018-12-13 09:28:22
categories:
  - 前端学习记录
tags:
  - AJAX
---

## 前言

1.**同步和异步**：同步阻塞，异步非阻塞。

**可以简单地理解为：可以改变程序正常执行顺序的操作就可以看成是异步操作。**

```js
// 最基础的异步是 setTimeout 和 setInterval ，可以控制 js 的执行顺序
console.log(1);
setTimeout(function() {
  console.log(3);
}, 1000);
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
console.log(2);
```

2.**AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。**

3.**通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。**

## 原生的 ajax 请求

1.**创建 XMLHttpRequest 对象**。

**该方法需要做兼容处理 参考文档即可**

    const xhr = new XMLHttpRequest()

2.**使用该对象**

**创建请求**：`open`方法。

**open 的使用**：需要接受三个参数。

      method(请求的方法或类型)：'GET'  'POST'
      url(请求的地址)
      async(是否异步)：10000% 选异步   true

```js
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);
```

3.**发出创建的请求**:`send`方法。

      xhr.send()

4.**使用 onreadystatechange 事件，监听请求**

该事件只要发出了请求就会一直执行直到请求结束。

```js
xhr.onreadystatechange = function() {
  // 判断请求是否成功，成功之后获取相应的数据
  // 使用 readyState(该对象的请求状态 0-4) 和 status(状态码)
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 此时就是请求成功，后台返回了数据
    //  responseText 就是返回的数据
    const res = xhr.responseText;
    // 由于现在数据交互都是 json 格式，所以后台返回的数据是 json 字符串，我们想要使用的话 想要将 json 字符串转化为对象
    // 使用 JSON 的方法   JSON.stringify()    JSON.parse()将json转化为 对象
    console.log(JSON.parse(res));
    // 接下来就可以将数据展示到页面上了
  }
};
```

### 发 get 请求传参数

```js
const xhr = new XMLHttpRequest();
// get 方法 传递参数需要写在 url 内，url 内问号后面是写参数的
xhr.open('GET', 'https://cnodejs.org/api/v1/topics?page=1&limit=5', true);
xhr.send();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const res = xhr.responseText;
    console.log(JSON.parse(res));
  }
};
```

### 发 post 请求传参数

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cnodejs.org/api/v1/accesstoken', true);
// send 方法可以用作 post 传递参数
// 因为数据交互基本上都是 JSON 格式 所以说传递过去的数据也要是 JSON 格式，那么我们要把我们的对象格式转化成 JSON
// 当我们向后台传递 JSON 格式数据的时候 需要设置请求头类型设置成 json
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(
  JSON.stringify({ accesstoken: '9948d556-1825-416f-934f-b3ce046403e3' })
);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    // 新建 img
    const img = document.createElement('img');
    img.setAttribute('src', res.avatar_url);
    document.querySelector('.box').appendChild(img);
  }
};
```

## jquery 的 ajax 请求

### GET 方法

**get 请求传递参数 可以写到 url 后 需要加 问号，也可以写到 data 属性内 直接写成字符串,或者写成 对象格式。**

```js
$.ajax({
  type: 'GET',
  url: 'https://cnodejs.org/api/v1/topics',
  // data: 'page=1&limit=5',
  data: { page: 2, limit: 5, tab: 'ask' },
  success: function(res) {
    // 请求成功之后该函数执行，该函数有个参数 参数就是后台返回的数据
    console.log(res);
  },
  error: function(err) {
    // 请求失败 输出错误提示
    console.log(err);
  }
});
```

### POST 方法

**post 传参 直接用对象形式 写到 data 属性中即可。**

```js
$.ajax({
  type: 'POST',
  url: 'https://cnodejs.org/api/v1/accesstoken',
  data: { accesstoken: '9948d556-1825-416f-934f-b3ce046403e3' },
  success: function(res) {
    console.log(res);
  }
});
```

## 原生 fetch 请求

**需要接受两个参数**

      第一个参数是 地址url
      第二个参数是对象  method(方法)    body(post参数)   headers(请求头)

### GET 方法

```js
fetch('https://cnodejs.org/api/v1/topics?limit=5', {
  method: 'GET'
})
  .then(function(res) {
    return res.json();
  })
  .then(function(res) {
    console.log(res);
  });
```

### POST 方法

```js
fetch('https://cnodejs.org/api/v1/accesstoken', {
  method: 'POST',
  body: JSON.stringify({
    accesstoken: '9948d556-1825-416f-934f-b3ce046403e3'
  }),
  headers: { 'Content-type': 'application/json' }
})
  .then(function(res) {
    return res.json();
  })
  .then(function(res) {
    console.log(res);
  });
```

## axios 发请求(和 fetch 一样基于 promise)

### GET 方法

```js
axios.get('https://cnodejs.org/api/v1/topics?limit=5').then(function(res) {
  // 这个 res 并不是后台返回的直接数据，而是 axios 封装好的数据，后台的数据 在 data 属性下
  console.log(res.data);
});
```

### POST 方法

```js
axios
  .post('https://cnodejs.org/api/v1/accesstoken', {
    accesstoken: '9948d556-1825-416f-934f-b3ce046403e3'
  })
  .then(function(res) {
    console.log(res.data);
  });
```
