---
title: react 项目部署
date: 2018-12-20 15:19:00
categories:
  - 前端学习记录
tags:
  - react
---

## 前言

## 部署到 github 的 gh-pages 上

1.先确保本地项目能启动并且没有什么问题。

2.更改 package.json 内容，添加 homepage。

```js
  "homepage":"https://yourname.github.io/yourapp",
  "scripts":{
    "deploy": "gh-pages -d build"
  }
```

3.本地安装 gh-pages 包 `npm i gh-pages -D`

4.本地执行 `npm run build` 打包 react 项目到 build 文件夹。

5.将本地的文件夹初始化为 git 仓库(不添加 README.md)，并且上传。

6.执行 npm run deploy 将打包好的项目部署到 gh-pages 分支。

7.查看页面即可访问项目。

8.如果要更新项目的话 先更新本地的服务器代码，然后`npm run build`打包，打包完成之后，先上传到 master 分支，然后使用 `npm run deploy` 更新 gh-pahes 分支

## 部署到 netlify 免费服务器上

1.先确保本地项目能启动并且没有什么问题。

2.将本地的文件夹初始化为 git 仓库(不添加 README.md)，并且上传。

3.用 github 账号登录 netlify 网站，进入之后点击`New site from Git`-->Create a new site（GitHub）--->选择要部署的项目仓库---->Deploy site。这样就完成了，会生成一个网址，根据网址访问项目内容，网址名可以更改。
