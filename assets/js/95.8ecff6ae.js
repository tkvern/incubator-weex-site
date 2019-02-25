(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{515:function(e,t,s){"use strict";s.r(t);var r=s(1),o=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("p",[e._v("A series of stream api. It provides a network request.")]),e._m(1),e._m(2),s("p",[e._v("Start a network request, use two callbacks to receive server's response data.")]),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),s("ul",[s("li",[s("a",{attrs:{href:"http://dotwe.org/vue/80b21a0fce98acdffad96c57b2eadd1d",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simple Demo"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"http://dotwe.org/vue/6dd65122144d9ad26594c0f900c75cd4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Post Demo"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"http://dotwe.org/vue/892bd1c977b61762baca8e02a65b6d97",target:"_blank",rel:"noopener noreferrer"}},[e._v("Get Demo"),s("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream","aria-hidden":"true"}},[this._v("#")]),this._v(" stream")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"fetch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch","aria-hidden":"true"}},[this._v("#")]),this._v(" fetch")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"fetch-options-callback-progresscallback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch-options-callback-progresscallback","aria-hidden":"true"}},[this._v("#")]),this._v(" fetch(options, callback, progressCallback)")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("strong",[e._v("@options")]),e._v(", the request options, key value style dictionary.\n"),s("ul",[s("li",[s("strong",[s("code",[e._v("method")])]),e._v(", string, the HTTP method "),s("code",[e._v("GET")]),e._v(" or "),s("code",[e._v("POST")]),e._v(".")]),s("li",[s("strong",[s("code",[e._v("url")])]),e._v(", string, the request url.")]),s("li",[s("strong",[s("code",[e._v("headers")])]),e._v(", string, the HTTP request headers.")]),s("li",[s("strong",[s("code",[e._v("type")])]),e._v(", string, response type, 'json','text' or 'jsonp'(same as 'json' in native implementation)")]),s("li",[s("strong",[s("code",[e._v("body")])]),e._v(", string, the HTTP body.")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),s("ul",[s("li",[e._v("The "),s("code",[e._v("body")]),e._v(" parameter only supports arguments of type "),s("code",[e._v("string")]),e._v(". Do not use the "),s("code",[e._v("JSON")]),e._v(" format directly, you must convert it to a string.")]),s("li",[e._v("The "),s("code",[e._v("GET")]),e._v(" request does not support arguments as "),s("code",[e._v("body")]),e._v(". Please use the URL to set the parameters.")]),s("li",[e._v("The default value of "),s("code",[e._v("Content-Type")]),e._v(" is "),s("code",[e._v("application/x-www-form-urlencoded")]),e._v(".")]),s("li",[e._v("If you need to send data in "),s("code",[e._v("JSON")]),e._v(" format via POST, you need to set "),s("code",[e._v("Content-Type")]),e._v(" to "),s("code",[e._v("application/json")]),e._v(".")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[s("strong",[e._v("@callback")]),e._v(", a callback function whose argument is the response object of the request. Callback function will receive a "),s("code",[e._v("response")]),e._v(" object.")]),s("ul",[s("li",[s("strong",[s("code",[e._v("status")])]),e._v(", number, response status code.")]),s("li",[s("strong",[s("code",[e._v("ok")])]),e._v(", boolean, true if status code is bewteen 200～299.")]),s("li",[s("strong",[s("code",[e._v("statusText")])]),e._v(", string, status text")]),s("li",[s("strong",[s("code",[e._v("data")])]),e._v(", string, response data. It's a object if request option is "),s("code",[e._v("json")]),e._v("/"),s("code",[e._v("jsonp")]),e._v(", or "),s("em",[e._v("(string)")]),e._v(" in other type value.")]),s("li",[s("strong",[s("code",[e._v("headers")])]),e._v(", object, response headers.")])])]),s("li",[s("p",[s("strong",[e._v("@progressCallback")]),e._v(", function, a progress callback. This callback will be invoked before request finished.")]),s("ul",[s("li",[s("strong",[s("code",[e._v("readyState")])]),e._v(", number, current request state.'1':request connection opened;'2':response headers received.;'3':response data is loading;")]),s("li",[s("strong",[s("code",[e._v("status")])]),e._v(", number, response status code.")]),s("li",[s("strong",[s("code",[e._v("length")])]),e._v(" number, bytes of data have received. You can read full length of response from 'headers'.")]),s("li",[s("strong",[s("code",[e._v("statusText")])]),e._v(", string, status text.")]),s("li",[s("strong",[s("code",[e._v("headers")])]),e._v(". object, response headers.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),t("ul",[t("li",[this._v("Default Content-Type is 'application/x-www-form-urlencoded'. (The type specified in fetch is the response type!)")]),t("li",[this._v("You need to set the Content-Type header to 'application/json' manually if you want to post the json body.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Demos")])])}],!1,null,null,null);t.default=o.exports}}]);