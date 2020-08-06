---
title: React路由组件
date: 2018-12-12 12:28:22
categories:
  - 前端学习记录
tags:
  - react
---

### react 路由(页面跳转) react-router

**react 项目是单页面应用，要实现页面跳转的话需要依赖 react 的 react-router-dom 包来实现**,官网参考链接 react-router

1.在项目下安装 **react-router-dom**:`npm i react-router-dom`

2.在 App.js 内引入 **BrowserRouter** 。`import { BroswerRouter } from 'react-router-dom` BroswerRouter 是 react-router-dom 包内的一个 react 组件，该组件的作用是:**保持与 URL 的 UI 同步**

3.containers:容器组件，为了使展示列表和逻辑操作区分开
