---
title: React基础-评论展示和删除以及受控组件和非受控组件
date: 2018-12-10 12:28:22
categories:
  - 前端学习记录
tags:
  - react
---

## 前言

1.尽量不要在 return 函数内写太多 js 操作，return 内就是负责展示的，逻辑操作最好写在 return 之外。

2.实现点击评论按钮，将文本输入框中的内容展示到下方的列表中，需要将用`map`方法遍历对象数组，变成标签数组。

3.通过标签数组生成的元素，必须要给每一个元素加上属性 key 并且属性值是唯一的，通常 key 的值是数据的 id 值。

## 实现过程

### state 值

```js
state = {
  comments: [
    {
      id: 1,
      txt: 'hahaha1'
    },
    {
      id: 2,
      txt: 'hahaha2'
    },
    {
      id: 3,
      txt: 'hahaha3'
    },
    {
      id: 4,
      txt: 'ahahah4'
    }
  ],
  val: '',
  num: '3',
  username: '',
  password: '',
  ischecked: true
};
```

### render 函数中

**需要将 textarea 变成受控组件**

```js
render() {
    const { comments, val, num, username, password, ischecked } = this.state;
    // 不变性 直接 comments.reverse comments 本身也会颠倒顺序，间接的修改了 state 违背了不变性
    const showDiv = comments.length ? (
      <ul>
        {[...comments].reverse().map(comment => (
          <li key={comment.id}>
            {comment.txt}
            <button
              onClick={() => {
                this.deleteLi(comment.id);
              }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <div>请回复</div>
    );
    return (
      <div>
        <h1>文章</h1>
        <p>ksdalsdjkakl sdasdkasdjkasld sdsadas sdsadas</p>

    // 将textarea变成受控组件
        <textarea
          value={val}
          name="val"
          onChange={this.handleInput}
          onKeyDown={this.handleEnter}
        />
        <button onClick={this.clickSub}>评论</button>
        <h4>回复</h4>
        {showDiv}
        <select value={num} name="num" onChange={this.handleInput}>
          <option value="1">11</option>
          <option value="2">22</option>
          <option value="3">33</option>
          <option value="4">44</option>
        </select>
        <br />
        <label htmlFor="user">用户名</label>
        <input
          type="text"
          id="user"
          name="username"
          value={username}
          onChange={this.handleInput}
        />
        <br />
        <label htmlFor="pwd">密码</label>
        <input
          type="text"
          id="pwd"
          value={password}
          name="password"
          onChange={this.handleInput}
        />
        <br />
        <input
          type="checkbox"
          id="agree"
          value={ischecked}
          name="ischecked"
          onChange={this.handleInput}
        />
        <label htmlFor="agree">是否同意</label>
        <br />
        <br />
        <Form />
      </div>
    );
  }
```

### 点击评论按钮函数

```js
clickSub = () => {
  const { comments } = this.state;
  // 当输入的是有效字符的时候 才能评论
  if (this.state.val.trim()) {
    const newComment = {
      id: shortId(),
      txt: this.state.val
    };
    this.setState({
      comments: [...comments, newComment],
      val: ''
    });
  } else {
    alert('请输入有效字符');
  }
};
```

### 删除评论函数

```js
deleteLi = id => {
  const { comments } = this.state;

  this.setState({
    comments: comments.filter(comment => comment.id !== id)
  });
};
```

### 利用键盘码添加评论

```js
handleEnter = event => {
  if (event.keyCode === 13) {
    this.clickSub();
  }
};
```

### 将复选框变成受控组件

```js
handleInput = event => {
  const target = event.target;
  const vaule = target.type !== 'checkbox' ? target.checked : target.vaule;
  const name = target.name;
  this.setState({
    [name]: vaule
  });
};
```
