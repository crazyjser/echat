(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],f=0,h=[];f<i.length;f++)o=i[f],c[o]&&h.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({home:"home",login:"login",register:"register"}[e]||e)+"."+{home:"f08db5a5",login:"7f2c2636",register:"e73cb1e9"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={home:1,login:1,register:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r=({home:"home",login:"login",register:"register"}[e]||e)+"."+{home:"62b482ce",login:"63fe2705",register:"ef0e62d2"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var i=c[a],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){i=f[a],s=i.getAttribute("data-href");if(s===r||s===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,n(c)},h.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(h)}).then(function(){o[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=a);var s,f=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,u.nc&&h.setAttribute("nonce",u.nc),h.src=i(e),s=function(t){h.onerror=h.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}c[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:h})},12e4);h.onerror=h.onload=s,f.appendChild(h)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var l=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0969":function(e,t,n){},"0dfd":function(e,t,n){},"106f":function(e,t,n){},"2b61":function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i});var r=function(e){this.get=function(){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):""},this.set=function(t){localStorage.setItem(e,JSON.stringify(t))},this.clear=function(){localStorage.removeItem(e)}},o=new r("echat_user"),c=new r("echat_event"),a=new r("echat_theme"),i=new r("current_user")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.$store.getters.obtainUserTheme?e.$store.getters.obtainUserTheme.name:"cyan"],attrs:{id:"app"}},[n("router-view")],1)},c=[],a=n("c93e"),i=(n("ac6a"),n("456d"),n("7f7f"),n("2b61")),u=n("2f62"),s={data:function(){return{themeClass:""}},computed:{theme:function(){return this.$store.getters.obtainUserTheme}},watch:{theme:function(e){this.themeClass=e?e.name:"cyan"}},mounted:function(){i["d"].get().length?(this.initUser(i["d"].get()),this.initEvent(i["b"].get()),this.initTheme(i["c"].get()),Object.keys(i["a"].get()).length||this.$router.push({path:"/login"})):(i["d"].set([]),i["b"].set([]),i["c"].set([]),i["a"].set({}),this.$router.push({path:"/login"}))},methods:Object(a["a"])({},Object(u["b"])({initUser:"INITUSER",initEvent:"INITEVENT",initTheme:"INITTHEME",setCurrentUser:"SETCURRENTUSER"}))},f=s,h=(n("5c0b"),n("2877")),l=Object(h["a"])(f,o,c,!1,null,null,null);l.options.__file="App.vue";var m=l.exports,d=n("8c4f"),p=function(){return n.e("login").then(n.bind(null,"a55b"))},g=function(){return n.e("register").then(n.bind(null,"73cf"))},E=function(){return n.e("home").then(n.bind(null,"bb51"))};r["a"].use(d["a"]);var T,b=new d["a"]({routes:[{path:"/login",name:"login",component:p},{path:"/register",name:"register",component:g},{path:"/",name:"home",component:E}]}),v=n("b970"),U={echatUser:[],echatEvent:[],echatTheme:[],currentUser:i["a"].get()||{},theme:[{color:"#00b0f0",name:"blue"},{color:"#00d1b2",name:"green"},{color:"#f4b976",name:"orange"},{color:"#f39894",name:"pink"},{color:"#26b6be",name:"cyan"}]},y=(n("7514"),{obtainUserTheme:function(e){return e.echatTheme.find(function(t){return e.currentUser.account===t.account})},obtainUserTodoThing:function(e){var t=[];return e.echatEvent.filter(function(n){n.account===e.currentUser.account&&1===n.type&&t.push(n)}),t},obtainUserCompleteThing:function(e){var t=[];return e.echatEvent.filter(function(n){n.account===e.currentUser.account&&2===n.type&&t.push(n)}),t},obtainUserCancelThing:function(e){var t=[];return e.echatEvent.filter(function(n){n.account===e.currentUser.account&&3===n.type&&t.push(n)}),t}}),w=n("a322"),O="INITUSER",N="INITEVENT",S="INITTHEME",I="ADDUSER",j="SETCURRENTUSER",C="SETTINGTHEME",A="MODIFYNAME",R="ADDTODOTHING",H="COMPLETETHING",D="CANCELTHING",M="RESETTHING",_="RESETTODO",$=(T={},Object(w["a"])(T,O,function(e,t){e.echatUser=t}),Object(w["a"])(T,N,function(e,t){e.echatEvent=t}),Object(w["a"])(T,S,function(e,t){e.echatTheme=t}),Object(w["a"])(T,I,function(e,t){var n=e.echatUser;if(n.length){if(n.find(function(e){return e.account===t.account}))return window.ECHAT.$toast({position:"bottom",message:"电话号码或邮箱已被占用"}),!1;e.echatUser.push(t)}else e.echatUser.push(t);i["d"].set(e.echatUser),e.currentUser=t,i["a"].set(t),window.ECHAT.$router.push({path:"/"})}),Object(w["a"])(T,j,function(e,t){e.currentUser=t}),Object(w["a"])(T,C,function(e,t){var n=e.currentUser.account,r={name:t.name,account:n};e.echatTheme.find(function(e){return e.account===n})?e.echatTheme.forEach(function(e){e.account===n&&(e.name=t.name)}):e.echatTheme.push(r),i["c"].set(e.echatTheme)}),Object(w["a"])(T,A,function(e,t){e.currentUser.name=t,i["a"].set(e.currentUser),e.echatUser.forEach(function(n){n.account===e.currentUser.account&&(n.name=t)}),i["d"].set(e.echatUser)}),Object(w["a"])(T,R,function(e,t){var n=e.currentUser.account,r={account:n,content:t,id:(new Date).getTime(),type:1};e.echatEvent.push(r),i["b"].set(e.echatEvent)}),Object(w["a"])(T,H,function(e,t){e.echatEvent.forEach(function(e){e.id===t&&(e.type=2)}),i["b"].set(e.echatEvent)}),Object(w["a"])(T,D,function(e,t){e.echatEvent.forEach(function(e){e.id===t&&(e.type=3)}),i["b"].set(e.echatEvent)}),Object(w["a"])(T,M,function(e,t){e.echatEvent.forEach(function(e){e.id===t&&(e.type=1)}),i["b"].set(e.echatEvent)}),Object(w["a"])(T,_,function(e,t){e.echatEvent.forEach(function(e){e.id===t&&(e.type=1)}),i["b"].set(e.echatEvent)}),T),P={addUser:function(e,t){var n=e.commit;n("ADDUSER",t)},login:function(e,t){var n=e.state,r=e.commit,o=n.echatUser.find(function(e){return e.account===t.account}),c=n.echatUser.find(function(e){return e.account===t.account&&e.password===t.password});void 0===o?window.ECHAT.$toast({position:"bottom",message:"用户名不存在,请先注册"}):void 0===c?window.ECHAT.$toast({position:"bottom",message:"密码不正确"}):(t.name=c.name,r("SETCURRENTUSER",t),i["a"].set(t),window.ECHAT.$router.push({path:"/"}))},loginOut:function(e,t){e.state;var n=e.commit;i["a"].set({}),n("SETCURRENTUSER",{}),window.ECHAT.$router.push({path:"/login"})},settingTheme:function(e,t){var n=e.commit;n("SETTINGTHEME",t)},addThing:function(e,t){var n=e.commit;n("ADDTODOTHING",t)},completeThing:function(e,t){var n=e.commit;n("COMPLETETHING",t)},cancelThing:function(e,t){var n=e.commit;n("CANCELTHING",t)},resetThing:function(e,t){var n=e.commit;n("RESETTHING",t)},resetTodo:function(e,t){var n=e.commit;n("RESETTODO",t)},modifyName:function(e,t){var n=e.commit;n("MODIFYNAME",t)}};r["a"].use(u["a"]);var G=new u["a"].Store({state:U,getters:y,mutations:$,actions:P}),k=n("fe3c"),x=n.n(k);n("8590"),n("0dfd"),n("0969");r["a"].use(v["a"]),r["a"].config.productionTip=!1,x.a.attach(document.body),window.ECHAT=new r["a"]({router:b,store:G,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("106f"),o=n.n(r);o.a}});
//# sourceMappingURL=app.a568eb26.js.map