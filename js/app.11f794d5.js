(function(e){function n(n){for(var r,i,l=n[0],u=n[1],c=n[2],s=0,d=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(n);while(d.length)d.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var p=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:t("cf05"),width:"25%"}}),r("HelloWorld",{attrs:{msg:"Hello Vue in CodeSandbox!"}})],1)},a=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("This is the one now.")])},l=[],u=t("7aaa");function c(){var e=u["d"](800,600);document.body.appendChild(e.view);var n=new u["b"];let t=new u["c"];function r(e,t){var r=[];console.log("loading done."),console.log(t);const a=t.mapsk.textures["transition_12.png"];r.push(a);let i=new u["a"](r);i.animationSpeed=.025,i.play(),n.addChild(i),requestAnimationFrame(o)}function o(){e.render(n),requestAnimationFrame(o)}t.add("mapsk","t1.json"),t.load(),t.onComplete.add(r)}var p={name:"testcase",mounted(){this.$nextTick(()=>{c()})}},s=p,d=t("2877"),f=Object(d["a"])(s,i,l,!1,null,"06a265da",null),v=f.exports,b={name:"App",components:{HelloWorld:v}},h=b,m=(t("034f"),Object(d["a"])(h,o,a,!1,null,null,null)),g=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:e=>e(g)}).$mount("#app")},"85ec":function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.c2a605fb.png"}});
//# sourceMappingURL=app.11f794d5.js.map