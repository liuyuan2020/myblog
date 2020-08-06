---
title: webpack 编译 es6 语法
date: 2018-12-06 09:46:13
categories:
- 前端学习记录
tags:
---

1.将项目初始化为 npm 项目，使用`npm init -y`命令。

2.在项目下安装 webpack 工具 `npm install webpack webpack-cli` 。

3.在项目下存储 js 文件的文件夹改名为 src。

4.在项目的根目录下新建文件 webpack.config.js，将官网首页的代码复制粘贴。

    const path = require("path");

    module.exports = {
      entry: "./src/index.js",
      output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
      }
    };
