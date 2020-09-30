(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{452:function(t,s,v){"use strict";v.r(s);var a=v(17),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("blockquote",[v("p",[t._v("之前开发vue项目的时候基本上用的都是v-if，没有考虑用过v-show，因为遇到的基本都是需要重新走子组件的生命周期，但是如果考虑到性能的话，像那些不需要重新执行子组件的生命周期的时候用v-show直接控制dom显示隐藏即可。")])]),t._v(" "),v("h2",{attrs:{id:"v-if"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v-if"}},[t._v("#")]),t._v(" v-if")]),t._v(" "),v("p",[t._v("在首次渲染的时候，如果条件为false，什么也不操作，v-if控制的dom元素或者组件不会渲染。当条件为true的时候，开始局部编译，动态的向DOM元素里面添加元素。当条件从true变为false的时候，开始局部编译，卸载这些元素，也就是删除。这种方式是比较消耗性能的，因为v-if在显示隐藏过程中有DOM的添加和删除，v-show就简单多了，只是操作css。")]),t._v(" "),v("h2",{attrs:{id:"v-show"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v-show"}},[t._v("#")]),t._v(" v-show")]),t._v(" "),v("p",[t._v("v-show不管条件是true还是false，"),v("strong",[t._v("第一次渲染的时候都会编译出来")]),t._v("，也就是标签都会添加到DOM中。之后切换的时候，通过display: none;样式来显示隐藏元素。可以说"),v("strong",[t._v("只是改变css的样式")]),t._v("，几乎不会影响什么性能。")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("ol",[v("li",[t._v("v-if和v-show都可以控制元素的显示隐藏但是有本质区别的，v-if是控制元素的添加与删除，而 v-show只是控制元素的 display属性。")]),t._v(" "),v("li",[t._v("v-if有更高的"),v("strong",[t._v("切换开销")]),t._v("，而 v-show 有更高的"),v("strong",[t._v("初始渲染开销")]),t._v("。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if较好。")]),t._v(" "),v("li",[t._v("v-if可以搭配"),v("code",[t._v("<template>")]),t._v("标签使用，而v-show不可以。")])]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("p",[t._v("慕课网："),v("a",{attrs:{href:"https://www.imooc.com/article/264961",target:"_blank",rel:"noopener noreferrer"}},[t._v("六小登登"),v("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);