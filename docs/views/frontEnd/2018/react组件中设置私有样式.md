---
title: styled-components React组件中设置私有样式
date: 2018-12-20 14:14:00
categories:
  - 前端学习记录
tags:
  - react
---

## 安装和导入

1.在项目文件夹的根目录下安装：

    npm install --save styled-components

2.在 App.js 文件里面导入：

    import styled from 'styled-components'

## 给组件写样式

### 给按钮简单修改样式

1.新建一个`Button.js`组件作为 App.js 的子组件，然后在 Button 组件里面写一个 button 按钮

    <button>按钮</button>

2.想要给这个按钮单独写一个样式，需要在 Button 组件最后面定义：

```js
const Btn = styled.button`
  color: red;
`;
```

3.之后将第一步中的 button 标签改成：

    <Btn>按钮</Btn>

4.**实现效果放在 github 中的 react-recharts 仓库里的 Transition1.gif 图中。**

### 添加动画效果
