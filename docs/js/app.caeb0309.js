(function(e){function t(t){for(var s,r,c=t[0],i=t[1],u=t[2],p=0,d=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},o=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/project_name/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0052":function(e,t,n){"use strict";var s=n("19a4"),a=n.n(s);a.a},"034f":function(e,t,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},"0503":function(e,t,n){},"0629":function(e,t,n){"use strict";var s=n("3588"),a=n.n(s);a.a},"0bf1":function(e,t,n){},1984:function(e,t,n){"use strict";var s=n("0bf1"),a=n.n(s);a.a},"19a4":function(e,t,n){},"21ef":function(e,t,n){},"23f7":function(e,t,n){"use strict";var s=n("8bce"),a=n.n(s);a.a},3588:function(e,t,n){},"44f3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex--cc",attrs:{id:"app"}},[n("StatCookies"),n("TheDashboard")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"the-dashboard shadow rounded flex"},[n("div",{staticClass:"area area--cookie"},[n("TheCookie"),n("StatCPS")],1),n("TheUpgrades")],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"the-cookie rounded flex flex--cc"},[n("img",{staticClass:"cookie",attrs:{alt:"cookie",src:"img/cookie.svg"},on:{click:e.addCookies}})])},u=[],l={name:"TheCookie",components:{},data:function(){return{}},methods:{addCookies:function(){this.$store.commit("addCookies",1)}}},p=l,d=(n("23f7"),n("2877")),f=Object(d["a"])(p,i,u,!1,null,"392c8887",null),v=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stat-total rounded flex flex--cc"},[n("span",{staticClass:"cps"},[e._v(e._s(e.cps.toFixed(2)))]),n("span",{staticClass:"label"},[e._v("CPS")])])},m=[],g={name:"StatCPS",components:{},data:function(){return{}},computed:{cps:function(){return this.$store.state.cps}}},C=g,b=(n("b6cc"),Object(d["a"])(C,h,m,!1,null,"61df9488",null)),S=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"the-upgrades rounded"},[n("UpgradeAutoTap"),n("UpgradeGrandma")],1)},k=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upgrade-autotap flex"},[n("UpgradeSectionName",{attrs:{upgradeIcon:"img/iconAutoTap.svg",upgradeName:"AutoTap"}}),n("UpgradeSectionInfo",{attrs:{upgradeInfo:"Taps "+e.taps+" times every "+(e.speed%1==0?e.speed+".0":e.speed.toFixed(1))+" seconds"}}),n("UpgradeSectionCPS",{attrs:{upgradeCPS:e.cps}}),n("UpgradeSectionBuy",{class:{dark:!0},attrs:{upgradePrice:e.price},nativeOn:{click:function(t){return e.increaseLevel(t)}}})],1)},U=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upgrade-section-name flex flex--cc"},[n("img",{staticClass:"icon",attrs:{alt:"icon",src:e.upgradeIcon}}),n("div",{staticClass:"name"},[e._v(e._s(e.upgradeName))])])},P=[],$={name:"UpgradeSectionName",props:{upgradeIcon:String,upgradeName:String},components:{},data:function(){return{}}},O=$,j=(n("c13f"),Object(d["a"])(O,y,P,!1,null,"54bbb48b",null)),B=j.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upgrade-section-info flex flex--cc"},[n("p",{staticClass:"info"},[e._v(e._s(e.upgradeInfo))])])},w=[],T={name:"UpgradeSectionInfo",props:{upgradeInfo:String},components:{},data:function(){return{}}},E=T,N=(n("0629"),Object(d["a"])(E,I,w,!1,null,"b533cede",null)),A=N.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upgrade-section-cps flex flex--cc"},[n("span",{staticClass:"cps"},[e._v(e._s(e.upgradeCPS.toFixed(2)))]),n("span",{staticClass:"label"},[e._v("CPS")])])},G=[],L=(n("a9e3"),{name:"UpgradeSectionCPS",props:{upgradeCPS:Number},components:{},data:function(){return{}}}),M=L,D=(n("fd1f"),Object(d["a"])(M,F,G,!1,null,"4868f28b",null)),J=D.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upgrade-section-buy flex flex--cc"},[n("button",{staticClass:"btn flex rounded"},[n("img",{staticClass:"icon",attrs:{src:"img/iconBuy.svg",alt:"buy"}}),n("div",{staticClass:"price"},[e._v(e._s(0==e.upgradePrice?"Free":e.upgradePrice))])])])},z=[],H={name:"UpgradeSectionBuy",props:{upgradePrice:Number},components:{},data:function(){return{}}},K=H,Q=(n("0052"),Object(d["a"])(K,q,z,!1,null,"052d5645",null)),R=Q.exports,V={name:"UpgradeAutoTap",components:{UpgradeSectionName:B,UpgradeSectionInfo:A,UpgradeSectionCPS:J,UpgradeSectionBuy:R},data:function(){return{costBase:10,level:0,speedBase:5,loop:null,tapsBase:1}},computed:{taps:function(){return 0==this.level?0:this.tapsBase+2*this.level-2},price:function(){return this.costBase*this.level},cps:function(){return 0==this.speed?0:1/this.speed*this.taps},speed:function(){return 0==this.level?0:this.speedBase-this.level/5+.2}},methods:{increaseLevel:function(){this.$store.state.cookies>=this.price&&(this.$store.commit("removeCookies",this.price),this.level++)}},watch:{cps:function(e,t){this.$store.commit("increaseCps",{newCps:this.cps,oldCps:t})},level:function(){var e=this;this.loop?(clearInterval(this.loop),this.loop=setInterval((function(){return e.$store.commit("addCookies",e.taps)}),1e3*this.speed)):this.loop=setInterval((function(){return e.$store.commit("addCookies",e.taps)}),1e3*this.speed)}}},W=V,X=(n("cea4"),Object(d["a"])(W,x,U,!1,null,"5a220738",null)),Y=X.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upgrade-grandma flex"},[n("UpgradeSectionName",{attrs:{upgradeIcon:"img/iconGrandma.svg",upgradeName:"Grandma"}}),n("UpgradeSectionInfo",{attrs:{upgradeInfo:"Bakes "+e.taps+" cookies every "+(e.speed%1==0?e.speed+".0":e.speed.toFixed(1))+" seconds"}}),n("UpgradeSectionCPS",{attrs:{upgradeCPS:e.cps}}),n("UpgradeSectionBuy",{attrs:{upgradePrice:e.price},nativeOn:{click:function(t){return e.increaseLevel(t)}}})],1)},ee=[],te={name:"UpgradeGrandma",components:{UpgradeSectionName:B,UpgradeSectionInfo:A,UpgradeSectionCPS:J,UpgradeSectionBuy:R},data:function(){return{costBase:100,level:0,speedBase:10,loop:null,tapsBase:10}},computed:{taps:function(){return 0==this.level?0:this.tapsBase+2*this.level-2},price:function(){return 0==this.level?50:this.costBase*this.level},cps:function(){return 0==this.speed?0:1/this.speed*this.taps},speed:function(){return 0==this.level?0:this.speedBase-this.level/5+.2}},methods:{increaseLevel:function(){this.$store.state.cookies>=this.price&&(this.$store.commit("removeCookies",this.price),this.level++)}},watch:{cps:function(e,t){this.$store.commit("increaseCps",{newCps:this.cps,oldCps:t})},level:function(){var e=this;this.loop?(clearInterval(this.loop),this.loop=setInterval((function(){return e.$store.commit("addCookies",e.taps)}),1e3*this.speed)):this.loop=setInterval((function(){return e.$store.commit("addCookies",e.taps)}),1e3*this.speed)}}},ne=te,se=(n("da75"),Object(d["a"])(ne,Z,ee,!1,null,"3f37c6fc",null)),ae=se.exports,oe={name:"TheUpgrades",components:{UpgradeAutoTap:Y,UpgradeGrandma:ae},data:function(){return{}}},re=oe,ce=(n("7580"),Object(d["a"])(re,_,k,!1,null,"4f323eb6",null)),ie=ce.exports,ue={name:"TheDashboard",components:{TheCookie:v,StatCPS:S,TheUpgrades:ie},data:function(){return{}}},le=ue,pe=(n("1984"),Object(d["a"])(le,r,c,!1,null,"7606c607",null)),de=pe.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stat-cookies flex"},[n("span",{staticClass:"cookies"},[e._v(e._s(e.cookies))]),n("img",{staticClass:"icon",attrs:{src:"img/cookies.svg",alt:"cookies"}})])},ve=[],he={name:"StatCookies",components:{},data:function(){return{}},computed:{cookies:function(){return this.$store.state.cookies}}},me=he,ge=(n("8b5a"),Object(d["a"])(me,fe,ve,!1,null,"23e7feee",null)),Ce=ge.exports,be={name:"App",components:{TheDashboard:de,StatCookies:Ce}},Se=be,_e=(n("034f"),Object(d["a"])(Se,a,o,!1,null,null,null)),ke=_e.exports,xe=n("2f62");s["a"].config.productionTip=!1,s["a"].use(xe["a"]);var Ue=new xe["a"].Store({state:{cookies:0,cps:0},mutations:{addCookies:function(e,t){return e.cookies+=t},removeCookies:function(e,t){return e.cookies-=t},increaseCps:function(e,t){var n=t.newCps,s=t.oldCps;e.cps-=s,e.cps+=n}}});new s["a"]({render:function(e){return e(ke)},store:Ue}).$mount("#app")},"69b3":function(e,t,n){},7580:function(e,t,n){"use strict";var s=n("d61c"),a=n.n(s);a.a},"85ec":function(e,t,n){},"8b5a":function(e,t,n){"use strict";var s=n("9fe1"),a=n.n(s);a.a},"8bce":function(e,t,n){},"9fe1":function(e,t,n){},b6cc:function(e,t,n){"use strict";var s=n("0503"),a=n.n(s);a.a},c13f:function(e,t,n){"use strict";var s=n("21ef"),a=n.n(s);a.a},cea4:function(e,t,n){"use strict";var s=n("44f3"),a=n.n(s);a.a},d61c:function(e,t,n){},da75:function(e,t,n){"use strict";var s=n("69b3"),a=n.n(s);a.a},e500:function(e,t,n){},fd1f:function(e,t,n){"use strict";var s=n("e500"),a=n.n(s);a.a}});
//# sourceMappingURL=app.caeb0309.js.map