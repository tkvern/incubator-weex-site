(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{192:function(t,e,s){},247:function(t,e,s){"use strict";var i=s(192);s.n(i).a},300:function(t,e,s){"use strict";s.r(e);s(29);var i=s(180),a=s.n(i),n=s(53),r=s.n(n),c=s(15),o=s.n(c),l=s(0),d={data:function(){return{tabIndex:1,bugSubmitted:!1,imageList:[],envIOS:!1,envAndroid:!1,captchaCode:!1,title:"",src:"",detail:"",iosPhoneType:"",iosOS:"",iosWeexSDKVersion:"",androidPhoneType:"",androidOS:"",androidWeexSDKVersion:"",dingding:"",project:"",captcha:"",captchaUrl:"".concat(this.API_PREFIX,"/api/captcha/create"),selectFile:!1,submitting:!1,bugId:"",sendContent:"",messages:[{from:"robot",content:"Hi，Weexer，我是问答机器人，你可以用最简短的词语来问我weex相关问题，比如输入“图片”试试"}]}},computed:{valid:function(){var t=this.envIOS&&this.iosPhoneType&&this.iosOS&&this.iosWeexSDKVersion,e=this.envAndroid&&this.androidPhoneType&&this.androidOS&&this.androidWeexSDKVersion;return this.title&&this.captcha&&this.src&&this.detail&&this.selectFile&&(t||e)&&!this.submitting}},methods:{scrollIntoView:function(){this.$refs.window.lastElementChild.scrollIntoView()},reviseLastMessageStatus:function(t){var e=this.messages.length-1,s=a.a.cloneDeep(this.messages[e]);s.status=t,this.messages.splice(e,1,s)},resendMsg:function(t){var e=t.target.nextElementSibling.innerHTML;this.sendMessage(e)},sendMsg:function(){this.sendMessage()},sendMessage:function(t){var e=this,s=t||this.sendContent;if(s=s.replace(/^\s+|\s+$/g,"").replace(/[\r\n]/g,""),console.log(s),t||(this.sendContent="",s)){var i=!1,a=setTimeout(function(){i||e.reviseLastMessageStatus("loading")},300);this.messages.push({from:"user",content:s}),l.a.nextTick(function(){return e.scrollIntoView()}),o.a.post("".concat(this.API_PREFIX,"/api/robot/response"),r.a.stringify({q:s})).then(function(t){i=!0;var s=t.data;s.success&&(e.reviseLastMessageStatus(""),a&&clearTimeout(a),e.messages.push({from:"robot",content:s.message.result.fulfillment.speech}),l.a.nextTick(function(){return e.scrollIntoView()}))}).catch(function(t){console.log(t),i=!0,e.reviseLastMessageStatus("fail"),a&&clearTimeout(a)})}},changeTab:function(t){this.tabIndex=t,this.bugSubmitted&&(this.bugSubmitted=!1,this.imageList=[],this.envIOS=!1,this.envAndroid=!1,this.title="",this.src="",this.detail="",this.iosPhoneType="",this.iosOS="",this.iosWeexSDKVersion="",this.androidPhoneType="",this.androidOS="",this.androidWeexSDKVersion="",this.dingding="",this.project="",this.captcha="",this.selectFile=!1,this.bugId="",this.captchaCode=!1)},onFileChange:function(){if(this.$refs.image){var t=this.$refs.image.files;this.imageList=this.imageList.concat([].slice.call(t))}this.selectFile=!0},deleteImage:function(t){this.imageList.splice(t,1);var e=this.imageList.length;this.selectFile=e>0},editCaptcha:function(){this.captchaUrl="".concat(this.API_PREFIX,"/api/captcha/create?d=").concat(Math.random())},submit:function(){var t=this;if(this.valid){this.submitting=!0;var e=new FormData;e.append("title",this.title),e.append("src",this.src),e.append("detail",this.detail);var s={};this.envIOS&&(s.ios={type:this.iosPhoneType,os:this.iosOS,weexSDKVersion:this.iosWeexSDKVersion}),this.envAndroid&&(s.android={type:this.androidPhoneType,os:this.androidOS,weexSDKVersion:this.androidWeexSDKVersion}),e.append("env",JSON.stringify(s)),this.dingding&&e.append("dingding",this.dingding),this.project&&e.append("project",this.project),this.captcha&&e.append("captcha",this.captcha),a.a.each(this.imageList,function(t,s){e.append("file",t)}),o.a.post("".concat(this.API_PREFIX,"/api/issue/createIssue"),e).then(function(e){var s=e.data;t.submitting=!1,s.success?(t.bugSubmitted=!0,t.bugId=s.modelId,o.a.get("".concat(t.API_PREFIX,"/api/captcha/create"))):s.success||"ErrCaptche"!==s.message||(t.captchaCode=!0)})}}}},h=(s(247),s(1)),v=Object(h.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"module"},[s("div",{staticClass:"tabs"},[s("span",{class:["tab",{active:1===t.tabIndex}],on:{click:function(e){return t.changeTab(1)}}},[t._v("我要提Bug")]),s("span",{class:["tab",{active:0===t.tabIndex}],on:{click:function(e){return t.changeTab(0)}}},[t._v("我要提问")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.tabIndex,expression:"tabIndex === 0"}],staticClass:"container"},[t._m(0),s("div",{staticClass:"dialog"},[s("div",{staticClass:"dialog-left"},[s("div",{ref:"window",staticClass:"window"},t._l(t.messages,function(e,i){return s("div",{key:i,class:["msg","robot"===e.from?"from-robot":"from-user"]},["robot"===e.from?s("img",{staticClass:"avatar",attrs:{src:"/robot-dialog.png",width:"40",height:"40"}}):t._e(),"robot"===e.from?s("div",{staticClass:"msg-content render-md",domProps:{innerHTML:t._s(t.marked(e.content))}}):t._e(),"user"===e.from?s("div",{staticClass:"msg-content"},["fail"===e.status?s("img",{staticClass:"resendBtn",attrs:{src:"/send-msg-fail.svg"},on:{click:t.resendMsg}}):t._e(),"loading"===e.status?s("img",{attrs:{src:"/loading.gif",width:"16",height:"16"}}):t._e(),s("div",[t._v(t._s(e.content))])]):t._e(),"user"===e.from?s("img",{staticClass:"avatar",attrs:{src:"/github-logo.svg"}}):t._e()])}),0),s("div",{staticClass:"edit-area"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sendContent,expression:"sendContent"}],attrs:{placeholder:"请输入你想问的问题，不超过500个字",maxlength:"500"},domProps:{value:t.sendContent},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMsg(e)},input:function(e){e.target.composing||(t.sendContent=e.target.value)}}}),s("span",{staticClass:"send-btn",on:{click:t.sendMsg}},[t._v("发送")])])]),t._m(1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.tabIndex,expression:"tabIndex === 1"}],staticClass:"container",staticStyle:{"box-shadow":"0 3px 11px 0 rgba(0,0,0,0.10)"}},[t.bugSubmitted?s("div",{staticStyle:{height:"605px"}},[s("div",{staticClass:"feedback"},[t._v("\n          我们已经收到您提交的Bug，"),s("br"),t._v("\n          Bug ID："),s("span",[t._v(t._s(t.bugId))]),s("br"),t._v("\n          请耐心等待处理结果。"),s("br"),s("img",{attrs:{src:"/success-filling@2x.svg"}})]),s("div",[t._v("如等待已久，可以在 EMAS | Weex 交流群（群号 : 21796062） 中反馈bug ID。")])]):s("div",[t._m(2),s("div",[s("div",{staticClass:"item"},[t._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"second-child input",attrs:{placeholder:"20字符以内",maxlength:"20"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"item"},[t._m(4),s("input",{directives:[{name:"model",rawName:"v-model",value:t.src,expression:"src"}],staticClass:"second-child input",attrs:{placeholder:"请填写可复现bug的dotwe url"},domProps:{value:t.src},on:{input:function(e){e.target.composing||(t.src=e.target.value)}}}),s("a",{staticClass:"third-child",attrs:{target:"_blank",href:"http://editor.weex.io"}},[t._v("编写Demo")])]),s("div",{staticClass:"item",staticStyle:{"align-items":"flex-start"}},[t._m(5),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.detail,expression:"detail"}],staticClass:"second-child input textarea",attrs:{rows:"5",placeholder:"weex核心开发人员并不了解你的业务，因此尽可能详细地描述bug的复现步骤，有助于定位bug。例如：复现步骤1... 2... 3...，期望的正常结果是...，最好能附上带文字说明的图片或动图。"},domProps:{value:t.detail},on:{input:function(e){e.target.composing||(t.detail=e.target.value)}}})]),s("div",{staticClass:"item",staticStyle:{"align-items":"flex-start"}},[t._m(6),s("div",{staticClass:"second-child upload-file"},[s("input",{ref:"image",staticClass:"upload-input",attrs:{type:"file",multiple:"",accept:"image/jpg, image/jpeg, image/png, image/gif, .log, .txt"},on:{change:t.onFileChange}}),s("span",{staticClass:"upload-btn"},[t._v("上传")]),0===t.imageList.length?s("div",{staticClass:"upload-tip"},[t._v("上传格式只限.jpg、.jpeg、.png、.gif、.log、.txt")]):s("div",{staticClass:"image-list"},t._l(t.imageList,function(e,i){return s("div",{key:i},[s("img",{staticStyle:{"margin-right":"4px"},attrs:{src:"/attach-icon.svg"}}),s("span",{staticClass:"image-name"},[t._v(t._s(e.name))]),s("img",{staticStyle:{width:"9px",cursor:"pointer"},attrs:{src:"/close-icon.svg"},on:{click:function(e){return t.deleteImage(i)}}})])}),0)])]),s("div",{staticClass:"item",staticStyle:{"align-items":"flex-start"}},[t._m(7),s("div",{staticClass:"second-child env"},[s("div",{staticClass:"clearfix"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.envIOS,expression:"envIOS"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.envIOS)?t._i(t.envIOS,null)>-1:t.envIOS},on:{change:function(e){var s=t.envIOS,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=t._i(s,null);i.checked?n<0&&(t.envIOS=s.concat([null])):n>-1&&(t.envIOS=s.slice(0,n).concat(s.slice(n+1)))}else t.envIOS=a}}}),s("span",{staticClass:"phone"},[t._v("iOS")]),s("img",{attrs:{src:"/iOS@2x.png",width:"17",height:"17"}})]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.envAndroid,expression:"envAndroid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.envAndroid)?t._i(t.envAndroid,null)>-1:t.envAndroid},on:{change:function(e){var s=t.envAndroid,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=t._i(s,null);i.checked?n<0&&(t.envAndroid=s.concat([null])):n>-1&&(t.envAndroid=s.slice(0,n).concat(s.slice(n+1)))}else t.envAndroid=a}}}),s("span",{staticClass:"phone"},[t._v("Android")]),s("img",{attrs:{src:"/Android@2x.png",width:"17",height:"17"}})])]),t.envIOS?s("div",{staticClass:"env-detail"},[t._m(8),s("div",{staticClass:"item"},[t._m(9),s("input",{directives:[{name:"model",rawName:"v-model",value:t.iosPhoneType,expression:"iosPhoneType"}],staticClass:"second-child input",attrs:{placeholder:"例如：iPhoneXs"},domProps:{value:t.iosPhoneType},on:{input:function(e){e.target.composing||(t.iosPhoneType=e.target.value)}}})]),s("div",{staticClass:"item"},[t._m(10),s("input",{directives:[{name:"model",rawName:"v-model",value:t.iosOS,expression:"iosOS"}],staticClass:"second-child input",attrs:{placeholder:"例如：iOS  10.3"},domProps:{value:t.iosOS},on:{input:function(e){e.target.composing||(t.iosOS=e.target.value)}}})]),s("div",{staticClass:"item"},[t._m(11),s("input",{directives:[{name:"model",rawName:"v-model",value:t.iosWeexSDKVersion,expression:"iosWeexSDKVersion"}],staticClass:"second-child input",attrs:{placeholder:"例如：0.18.3"},domProps:{value:t.iosWeexSDKVersion},on:{input:function(e){e.target.composing||(t.iosWeexSDKVersion=e.target.value)}}})])]):t._e(),t.envAndroid?s("div",{staticClass:"env-detail"},[t._m(12),s("div",{staticClass:"item"},[t._m(13),s("input",{directives:[{name:"model",rawName:"v-model",value:t.androidPhoneType,expression:"androidPhoneType"}],staticClass:"second-child input",attrs:{placeholder:"例如：华为 Mate 8"},domProps:{value:t.androidPhoneType},on:{input:function(e){e.target.composing||(t.androidPhoneType=e.target.value)}}})]),s("div",{staticClass:"item"},[t._m(14),s("input",{directives:[{name:"model",rawName:"v-model",value:t.androidOS,expression:"androidOS"}],staticClass:"second-child input",attrs:{placeholder:"例如：EMUI 5.0.1"},domProps:{value:t.androidOS},on:{input:function(e){e.target.composing||(t.androidOS=e.target.value)}}})]),s("div",{staticClass:"item"},[t._m(15),s("input",{directives:[{name:"model",rawName:"v-model",value:t.androidWeexSDKVersion,expression:"androidWeexSDKVersion"}],staticClass:"second-child input",attrs:{placeholder:"例如：0.18.3"},domProps:{value:t.androidWeexSDKVersion},on:{input:function(e){e.target.composing||(t.androidWeexSDKVersion=e.target.value)}}})])]):t._e()])]),t._m(16),s("div",{staticClass:"item"},[s("div",[t._v("你的钉钉号")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dingding,expression:"dingding"}],staticClass:"second-child input",attrs:{placeholder:"例如：zqltsn0"},domProps:{value:t.dingding},on:{input:function(e){e.target.composing||(t.dingding=e.target.value)}}})]),s("div",{staticClass:"item"},[s("div",[t._v("项目名称")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.project,expression:"project"}],staticClass:"second-child input",attrs:{placeholder:"EMAS客户请填写你的单位和项目名，我们会优先处理"},domProps:{value:t.project},on:{input:function(e){e.target.composing||(t.project=e.target.value)}}})]),s("div",{staticClass:"item"},[t._m(17),s("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticClass:"captche-child input",attrs:{placeholder:"验证码"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),s("img",{staticClass:"captcheImg",attrs:{src:t.captchaUrl,alt:"captcha"},on:{click:t.editCaptcha}}),t.captchaCode?s("span",{staticClass:"errCaptche"},[t._v("* 验证码不匹配")]):t._e()]),s("div",{staticClass:"item"},[s("div"),s("div",{staticClass:"second-child submit"},[s("span",{class:["submit-btn",{"submit-btn-valid":t.valid}],on:{click:t.submit}},[t._v("提交")])])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"robot-header"},[e("img",{attrs:{src:"/robot-logo.png",width:"96px",height:"96px"}}),e("span",[this._v("智能答疑机器人")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dialog-right"},[e("span",[this._v("如果对机器人的回答不够满意，你可以去问答社区尝试搜索相关答案或者在那里提问："),e("br")]),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/t/weex",target:"_blank"}},[this._v("SegmentFault")])]),e("li",[e("a",{attrs:{href:"https://stackoverflow.com/search?q=weex",target:"_blank"}},[this._v("StackOverflow")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"desc"},[this._v("如果你"),e("span",{staticClass:"empa"},[this._v("确认")]),this._v("这是一个bug，可以在这里提交反馈，我们会反馈到 weex sdk 核心开发团队，描述越详尽，越容易被解决哦。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("标题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("复现Demo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("复现步骤&期望结果")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("附件上传")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("复现环境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"env-type"},[e("img",{attrs:{src:"/iOS@2x.png",width:"17",height:"17"}}),e("span",{staticClass:"phone"},[this._v("iOS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("机型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("系统版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("weex sdk版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"env-type"},[e("img",{attrs:{src:"/Android@2x.png",width:"17",height:"17"}}),e("span",{staticClass:"phone"},[this._v("Android")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("机型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("系统版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("weex sdk版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("div",{staticStyle:{color:"#1d2c41"}},[this._v("处理结果通知")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"star"},[this._v("*")]),this._v("验证码")])}],!1,null,"248158a8",null);e.default=v.exports}}]);