(function(e){function t(t){for(var n,o,l=t[0],p=t[1],f=t[2],d=t[3]||[],h=0,m=[];h<l.length;h++)o=l[h],a[o]&&m.push(a[o][0]),a[o]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);s&&s(t),d.forEach(function(e){if(void 0===a[e]){a[e]=null;var t=document.createElement("link");i.nc&&t.setAttribute("nonce",i.nc),t.rel="prefetch",t.as="script",t.href=c(e),document.head.appendChild(t)}});while(m.length)m.shift()();return u.push.apply(u,f||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({"home-privacy":"home-privacy"}[e]||e)+"-legacy."+{"home-privacy":"f9fab3a8","chunk-76ea9688":"9ea991f2"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"home-privacy":1,"chunk-76ea9688":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise(function(t,r){for(var n="css/"+({"home-privacy":"home-privacy"}[e]||e)+"."+{"home-privacy":"47cc76a9","chunk-76ea9688":"11cef110"}[e]+".css",a=i.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===n||p===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],p=l.getAttribute("data-href");if(p===n||p===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],s.parentNode.removeChild(s),r(u)},s.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(s)}).then(function(){o[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=u);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=c(e),l=function(t){p.onerror=p.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:p})},12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/privacypolicysuratonlineapp/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var s=p;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"35b5":function(e,t,r){"use strict";var n=r("47ec"),o=r.n(n);o.a},"47ec":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("body",{attrs:{id:"app"}},[r("router-view")],1)},a=[],u={name:"App",data:function(){return{title:"Privacy Policy Surat Online"}},methods:{}},c=u,i=(r("35b5"),r("2877")),l=Object(i["a"])(c,o,a,!1,null,null,null),p=l.exports,f=r("8c4f");n["a"].use(f["a"]);var s=function(){return r.e("home-privacy").then(r.bind(null,"4ad8"))},d=new f["a"]({routes:[{path:"/",name:"home",component:s},{path:"*",redirect:{name:"home"}}]});n["a"].config.productionTip=!1,new n["a"]({router:d,render:function(e){return e(p)}}).$mount("#app")}});