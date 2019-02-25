(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{320:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"事件冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件冒泡 "),s("Badge",{attrs:{text:"v0.13+",type:"warn",vertical:"middle"}})],1),t._m(0),s("p",[t._v("如果你是个 web 开发者，你大概对浏览器事件冒泡机制已经很熟悉了，而且可能认为 Weex 默认会支持事件冒泡。然而，Weex 在 0.13 之前是不支持这一特性的，在 0.13 版本，Weex 提供了这项支持。")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),s("p",[t._v("在事件处理函数里，可以通过调用 "),s("code",[t._v("event.stopPropagation")]),t._v(" 方法阻止事件冒泡。这个方法和 "),s("a",{attrs:{href:"https://dom.spec.whatwg.org/#dom-event-stoppropagation",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM 标准"),s("OutboundLink")],1),t._v(" 里的方法一致。注意 "),s("code",[t._v("event.stopPropagation")]),t._v(" 和 "),s("code",[t._v("bubble=true")]),t._v(" 的影响范围不同，前者仅针对当前冒泡到的元素以及其祖先层级有效，而对子元素无效。而后者相当于一个全局开关，开启以后对该根元素内部所有子元素都开启了事件冒泡效果。两者可以同时存在。")]),t._m(12),t._m(13),t._m(14),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/fa2957ce3e9eb47ad9ae1da22d845e95",target:"_blank",rel:"noopener noreferrer"}},[t._v("开启事件冒泡"),s("OutboundLink")],1),t._v("\n使用 Weex playground App 扫描页面里的二维码，然后在打开页面中点击包含 ‘click me’ 文字的方框，会看到事件冒泡效果，即外层的组件依次显示事件成功冒泡到当前组件的提示。")])]),s("li",[s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/2cc80e19c9b2430fb780234628065a69",target:"_blank",rel:"noopener noreferrer"}},[t._v("阻止冒泡"),s("OutboundLink")],1),t._v("\n使用 Weex playground App 扫描页面里的二维码，然后在打开页面中点击包含 ‘click me’ 文字的方框，可以看到事件冒泡被父组件中断了，不再冒泡到最外层组件。")])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),e("p",[this._v("目前仅 Weex Native（Android 和 iOS）支持，web 端 暂时不支持此项特性.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 概念")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("以点击事件为例，比如一个点击事件发生在某个 "),e("code",[this._v("<video>")]),this._v(" 元素上，这个元素有一个父元素（比如是个 "),e("code",[this._v("div")]),this._v(" 元素），浏览器会执行两个处理阶段 - 捕获（capturing）阶段和冒泡（bubbling）阶段。在 web 开发中冒泡阶段会用的比较多，而捕获处理用的比较少。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在捕获阶段，浏览器检查当前元素的最外层父节点（在 web 上，比如，"),e("code",[this._v("<html>")]),this._v(" 元素），如果它上面绑定了一个 click 事件处理器，那么先执行这个处理器。然后检查下一个元素，"),e("code",[this._v("<html>")]),this._v(" 的子元素里是 "),e("code",[this._v("<video>")]),this._v(" 祖先元素的那个元素，做同样的检测。一步步直到遇到当前点击的这个元素本身。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("接下来是冒泡阶段，方向和捕获阶段相反：浏览器先检测当前被点击的元素上是否注册了点击事件处理器，如果有则执行它。接下来检测它的父元素，一步步向上，直到最外层 "),e("code",[this._v("<html>")]),this._v(" 元素。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1DF.3nZbpK1RjSZFyXXX_qFXa-960-452.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们一般使用默认的事件注册机制，将事件处理注册在冒泡阶段，所以处理冒泡阶段的情况比较多。当我们想要停止事件冒泡，只需要调用事件对象的 "),e("code",[this._v("stopPropagation")]),this._v(" 方法。标准事件对象包含 "),e("code",[this._v("stopPropagation")]),this._v(" 方法，当执行事件处理器时调用该方法，会立即停止事件冒泡，这样事件冒泡处理链上的后续处理器就不会再执行下去。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Weex 在 0.13 版本 SDK 里实现了事件冒泡机制。注意事件冒泡默认是不开启的，你需要在模板根元素上加上属性 "),e("code",[this._v("bubble=true")]),this._v(" 才能开启冒泡。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("事件冒泡默认不开启，需要手动添加 "),e("code",[this._v("bubble=true")]),this._v(" 属性到根元素上。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 开启事件冒泡机制. --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bubble")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"阻止冒泡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阻止冒泡","aria-hidden":"true"}},[this._v("#")]),this._v(" 阻止冒泡")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleClick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻止继续冒泡.")]),t._v("\n    event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),e("p",[this._v("需要注意的是: 为了兼容之前的版本，Weex 默认不会开启事件冒泡机制。需要在根元素的属性上，添加 "),e("code",[this._v('bubble="true"')]),this._v(" 来开启冒泡机制。否则，将不会向上传播事件，保持与之前版本的效果相同。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo")])}],!1,null,null,null);e.default=n.exports}}]);