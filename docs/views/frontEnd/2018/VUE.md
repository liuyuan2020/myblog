---
title: VUE
date: 2019-1-3 14:14:00
categories:
  - 前端学习记录
tags:
  - vue
---

## 基础介绍

1.**vue**的速度比**react**要更快速，目前工作偏向于 VUE，react 主要用于大一些的项目，vue 用于小一点的项目。

2.Vue 是一套用于构建用户界面的渐进式框架

## vue 的安装

`npm install -g @vue/cli`，安装完成之后，执行命令 `vue --version` 可以查看当前的版本号。

    类似于react中的脚手架，安装慢的话，可以换成淘宝镜像，具体方法参考：https://www.cnblogs.com/zycbloger/p/6210049.html

## vue 的创建

1.vue create <项目名>

2.创建完毕之后，进入到项目的根目录下，执行命令`npm run serve`，启动项目。`src/components`目录下的初始文件可以删除，在 App.vue 文件里删除和他相关的语句，在 template 标签里只留一个 hello，项目初始化完毕。
