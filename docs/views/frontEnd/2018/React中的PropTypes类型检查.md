---
title: React中的PropTypes类型检查
date: 2018-12-10 9:22:00
categories:
  - 前端学习记录
tags:
  - react
---

## 前言

1.当父组件给子组件传递属性值的时候，不知道是传递数字还是字符串，这个时候要在子组件中，对传过来的属性进行类型检查。

2.**传递数字的时候，要将数字写在大括号里。**

3.类型检查依赖一个包，这个包不需要下载，react 中自带。

    import PropTypes from 'prop-types';

## 例子

**父组件中(App.js)**

```js
<Card cardWidth={100} />
<Card title="xxxxx" pra='ssssss'/>
```

**子组件中(Card.js)**

```js
const { cardWidth } = this.props;

// 在子组件的最后部分添加：

Card.propTypes = {
  // 将该组件的 cardWidth 的属性值规定为字符串，也就是当父组件使用该组件的时候，传props时，该属性的属性值必须是字符串类型，否则会报警。
  cardWidth: PropTypes.string
// imgSrc 属性的值是字符串而且是必须的属性，也就是说父组件使用子组件的时候必须传递该属性。
  imgSrc:PropTypes.string.isRequired
};
```

## 使用 propTypes 对 props 进行默认值设置

```js
Card.defaultProps = {
  title: '标题',
  pra: '段落'
};
```
