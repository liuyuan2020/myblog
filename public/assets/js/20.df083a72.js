(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{462:function(s,a,t){"use strict";t.r(a);var n=t(17),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("blockquote",[t("p",[s._v("最近开始注意开发时css属性的书写顺序，还是有一些意义的，因为页面内容快速加载和流畅的交互是用户希望得到的Web体验，所以在开发过程中我们需要依据浏览器的渲染机制等来考虑前端有哪些优化内容，主要是可以减少浏览器的reflow(回流),提升浏览器渲染dom的性能。")])]),s._v(" "),t("h2",{attrs:{id:"浏览器渲染顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染顺序"}},[s._v("#")]),s._v(" 浏览器渲染顺序")]),s._v(" "),t("ol",[t("li",[s._v("解析html构建dom树，解析css构建css树，将html解析成树形的数据结构，将css解析成树形的数据结构。")]),s._v(" "),t("li",[s._v("构建render树：DOM树和CSS树合并后形成render树。")]),s._v(" "),t("li",[s._v("布局render树：有了render树，浏览器已经知道哪些网页中有哪些节点，各个节点的css定义以及他们的从属关系，从而计算出每个节点在屏幕中的位置。")]),s._v(" "),t("li",[s._v("绘制render树：按照计算出来的规则，通过显卡把内容画在屏幕上。")])]),s._v(" "),t("h2",{attrs:{id:"css书写顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css书写顺序"}},[s._v("#")]),s._v(" css书写顺序")]),s._v(" "),t("p",[t("strong",[s._v("定位属性")]),s._v("->"),t("strong",[s._v("自身属性")]),s._v("->"),t("strong",[s._v("文字样式")]),s._v("->"),t("strong",[s._v("文本属性")]),s._v("->"),t("strong",[s._v("css3新增的属性")])]),s._v(" "),t("h3",{attrs:{id:"定位属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定位属性"}},[s._v("#")]),s._v(" 定位属性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("display\nposition\nfloat\nleft\ntop\nright\nbottom\noverflow\nclear\nz-index\ncontent\nlist-style\nvisibility\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"自身属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自身属性"}},[s._v("#")]),s._v(" 自身属性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("width\nheight\nborder\npadding\nmargin\nbackground\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"文字样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文字样式"}},[s._v("#")]),s._v(" 文字样式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("font-family\nfont-size\nfont-style\nfont-weight\nfont-varient\ncolor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"文本属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文本属性"}},[s._v("#")]),s._v(" 文本属性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("text-align\nvertical-align\ntext-wrap\ntext-transform\ntext-indent\ntext-decoration\nletter-spacing\nwhite-space\ntext-overflow\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"css3新增的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css3新增的属性"}},[s._v("#")]),s._v(" css3新增的属性")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("box-shadowius\ncursor\nborder-rad\nbackground:linear-gradient\ntransform\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"css命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css命名规范"}},[s._v("#")]),s._v(" css命名规范")]),s._v(" "),t("ol",[t("li",[s._v("必须以字母开头命名选择器，这样可保证在所有浏览器下都能兼容；")]),s._v(" "),t("li",[s._v("不允许单个字母的类选择器出现")]),s._v(" "),t("li",[s._v("不允许命名带有广告等英文的单词，例如：ad,adv,adver,advertising，以防止该模块被浏览器当成垃圾广告过滤掉。")]),s._v(" "),t("li",[s._v("禁止出现下划线，统一使用'-'来连接")]),s._v(" "),t("li",[s._v("见名知意")])]),s._v(" "),t("h2",{attrs:{id:"css注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css注意事项"}},[s._v("#")]),s._v(" css注意事项")]),s._v(" "),t("ol",[t("li",[s._v("不要以完全没有语义的标签作为选择器，这会造成大面积污染")]),s._v(" "),t("li",[s._v("简写css颜色属性值")]),s._v(" "),t("li",[s._v("删除css属性值为0的单位")]),s._v(" "),t("li",[s._v("删除无用的css样式")]),s._v(" "),t("li",[s._v("使用有意义的命名方式")])])])}),[],!1,null,null,null);a.default=e.exports}}]);