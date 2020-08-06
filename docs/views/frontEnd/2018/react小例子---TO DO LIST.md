---
title: react 小例子----TO DO LIST
date: 2018-12-18 9:22:00
categories:
  - 前端学习记录
tags:
  - react
---

## 实现功能

**具体实现效果可以去我的 github 仓库去看。**

1.在输入框中输入要做的事可以展示在列表中。

2.每一项都会有一个删除按钮，点击就会删除对应项，再次点击会取消删除线。

3.点击项目名字会出现删除线，代表该项目已经完成，并且会出现在已完成的项目列表中。

4.有三个类别：还有几个项目未完成、所有项目、未完成项目、已完成项目，每个类别都有对应的项目展示。

5.在输入框中输入完成之后按回车键可代替添加按钮。

## 实现过程

### 创建 react 项目

1.可以利用脚手架`create-react-app`创建项目：

    create-react-app react-todo

也可以**复制**以前的项目：

    cp react-jdLoop/ react-todo -r

2.进入到该项目根目录的文件夹下，然后安装 npm 包管理工具：

    cd react-todo
    npm i

3.安装完成之后，启动项目：

    npm start

4.删除项目目录下不必要的文件：

    logo.svg
    index.css
    app.test.js
    App.css

    打开 index.js,删除 import './index.css';
    打开 App.js,删除
    import logo from './logo.svg';
    import './App.css';

### 创建本地数据库

1.在项目的根目录下，创建一个本地的数据库`api`文件夹，在文件夹下新建一个文件`db.json`，**json 文件里每一个属性和属性值都必须加双引号**

```js
{
  "list": [
    {
      "body": "上课",
      "done": false,
      "id": 1
    },
    {
      "body": "写作业",
      "done": true,
      "id": 2
    }
  ]
}
```

2.进入到 api 文件夹下
