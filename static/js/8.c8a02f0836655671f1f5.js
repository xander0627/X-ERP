webpackJsonp([8],{CJtT:function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=e("E4LH"),o={name:"login",data:function(){return{loginForm:{username:"admin",password:"1111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,i,e){Object(t.a)(i)?e():e(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(n,i,e){i.length<6?e(new Error("密码不能小于6位")):e()}}]},loading:!1,showDialog:!1,usernameActive:!1,passwordActive:!1,isKeepPw:!1}},methods:{usernameClick:function(){this.usernameActive=!0,this.passwordActive=!1},passwordClick:function(){this.passwordActive=!0,this.usernameActive=!1},keepPassword:function(){this.isKeepPw=!this.isKeepPw},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(i){if(!i)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("LoginByUsername",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:"/"})}).catch(function(){n.loading=!1})})}},created:function(){},destroyed:function(){}},r={render:function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:n.loginForm,rules:n.loginRules,"label-position":"left"}},[e("div",{staticClass:"title"},[e("h3",[n._v("X-ERP项目管理系统")]),n._v(" "),e("p",[n._v("X-ERP PROJECT MANAGEMENT SYSTEM")])]),n._v(" "),e("el-form-item",{class:n.usernameActive?"isActive":"",attrs:{prop:"username"}},[e("span",{staticClass:"iconfont icon-username"}),n._v(" "),e("el-input",{attrs:{name:"username",type:"text",autoComplete:"on",placeholder:"请输入您的账号"},nativeOn:{click:function(i){n.usernameClick(i)}},model:{value:n.loginForm.username,callback:function(i){n.$set(n.loginForm,"username",i)},expression:"loginForm.username"}})],1),n._v(" "),e("el-form-item",{class:n.passwordActive?"isActive":"",attrs:{prop:"password"}},[e("span",{staticClass:"iconfont icon-password"}),n._v(" "),e("el-input",{attrs:{name:"password",type:"password",autoComplete:"on",placeholder:"请输入您的密码"},nativeOn:{click:function(i){n.passwordClick(i)},keyup:function(i){if(!("button"in i)&&n._k(i.keyCode,"enter",13,i.key))return null;n.handleLogin(i)}},model:{value:n.loginForm.password,callback:function(i){n.$set(n.loginForm,"password",i)},expression:"loginForm.password"}})],1),n._v(" "),e("div",{staticClass:"login-btn"},[e("el-button",{attrs:{type:"primary",loading:n.loading},nativeOn:{click:function(i){i.preventDefault(),n.handleLogin(i)}}},[n._v("登录")]),n._v(" "),e("div",{staticClass:"keep-pw"},[e("i",{class:"iconfont "+(n.isKeepPw?"icon-checkon":"icon-check"),on:{click:n.keepPassword}}),n._v(" "),e("label",[n._v("记住密码")])])],1)],1)],1)},staticRenderFns:[]},l=e("XAIM")(o,r,!1,function(n){e("CTAS")},null,null);i.default=l.exports},CTAS:function(n,i,e){var t=e("jDQG");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e("6imX")("5e7a34ca",t,!0)},E4LH:function(n,i,e){"use strict";i.a=function(n){return["admin","editor"].indexOf(n.trim())>=0}},Xcss:function(n,i,e){n.exports=e.p+"static/img/login-bg.af34e6a.jpg"},jDQG:function(n,i,e){(n.exports=e("bKW+")(!1)).push([n.i,"\n.login-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  height: 100vh;\n  background: url("+e("Xcss")+");\n}\n.login-container input:-webkit-autofill {\n    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;\n    -webkit-text-fill-color: #fff !important;\n}\n.login-container input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n}\n.login-container .login-form {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 404px;\n    margin: 0 auto;\n    margin-top: 35vh;\n}\n.login-container .title {\n    width: 100%;\n    text-align: center;\n}\n.login-container .title h3 {\n      font-size: 30px;\n      line-height: 30px;\n      letter-spacing: 4.8px;\n      color: #35d5ba;\n}\n.login-container .title p {\n      line-height: 12px;\n      font-size: 12px;\n      letter-spacing: 2.4px;\n      color: #fff;\n      margin-top: 10px;\n}\n.login-container .el-form-item {\n    margin-top: 30px;\n    width: 100%;\n    height: 50px;\n    opacity: 0.6;\n    border-radius: 6px;\n    background-color: #161621;\n    border: solid 2px #ffffff;\n}\n.login-container .el-form-item span {\n      display: inline-block;\n      width: 56px;\n      line-height: 50px;\n      text-align: center;\n      font-size: 26px;\n      background-color: #161621;\n      color: #fff;\n      vertical-align: middle;\n}\n.login-container .el-form-item .el-input {\n      display: inline-block;\n      width: 330px;\n      height: 30px;\n      line-height: 30px;\n      margin: 10px 0;\n      margin-left: 2px;\n      border-left: 3px solid #161621;\n      vertical-align: middle;\n}\n.login-container .el-form-item .el-input input {\n        height: 20px;\n        line-height: 20px;\n        font-size: 16px;\n        color: #fff;\n        letter-spacing: 0.6px;\n        margin: 5px 0;\n        padding: 0 20px;\n        -webkit-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        -o-box-sizing: border-box;\n        box-sizing: border-box;\n}\n.login-container .el-form-item.isActive {\n    border: solid 2px #35d5ba;\n}\n.login-container .el-form-item.isActive .el-input {\n      border-left: 3px solid #35d5ba;\n}\n.login-container .login-btn {\n    margin-top: 28px;\n}\n.login-container .login-btn .el-button {\n      float: left;\n      width: 260px;\n      height: 50px;\n      border-radius: 6px;\n      background-color: #35d5ba;\n}\n.login-container .login-btn .el-button span {\n        display: inline-block;\n        width: 62px;\n        font-size: 22px;\n        letter-spacing: 3.5px;\n        text-align: justify;\n        text-justify: distribute-all-lines;\n        text-align-last: justify;\n}\n.login-container .login-btn .keep-pw {\n      float: right;\n      height: 18px;\n      margin: 16px 0;\n      color: rgba(255, 255, 255, 0.5);\n      opacity: 0.5;\n}\n.login-container .login-btn .keep-pw i {\n        display: inline-block;\n        width: 16px;\n        height: 16px;\n        font-size: 18px !important;\n        vertical-align: middle;\n        margin-top: -2px;\n}\n.login-container .login-btn .keep-pw label {\n        display: inline-block;\n        line-height: 16px;\n        font-size: 16px;\n        letter-spacing: 2.6px;\n        margin-left: 6px;\n        vertical-align: middle;\n}\n",""])}});