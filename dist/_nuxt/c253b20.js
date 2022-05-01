(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{196:function(t,e){},285:function(t,e,n){"use strict";n.r(e);var o=n(41),r=(n(59),n(111),n(80),n(109),n(38),n(58),n(5)),l=n(161),c=n(911),d=n(72),m=r.a.extend({name:"DefaultHeader",props:{transSublinks:{required:!1,type:Boolean,default:!1}},data:function(){return{isTouch:!1,mobileMenuVis:!1,mobileConnectWalletVis:!1,scrolled:!1,walletController:{},availableInstallTypes:[],availableConnectTypes:[],availableConnections:[],states:{},supportFeatures:[],subscription:{},linkJustClicked:!1}},computed:{currentPath:function(){var t=/\/(\w*)\//g.exec(this.$nuxt.$route.path);if(t)return t[1].toUpperCase();return(t=/\/(\w.*)/g.exec(this.$nuxt.$route.path))&&""!==t[1]?t[1].toUpperCase():"HOME"}},created:function(){var t=this;void 0===Object(d.a)()?Object(d.b)().then((function(){t.walletController=Object(d.a)(),t.subscribeWallet()})):(this.walletController=Object(d.a)(),this.subscribeWallet())},beforeDestroy:function(){var t;null===(t=this.subscription)||void 0===t||t.unsubscribe()},methods:{hideMobileNav:function(){this.mobileMenuVis&&(this.mobileMenuVis=!1)},subscribeWallet:function(){var t=this;this.subscription=Object(c.a)([this.walletController.availableConnectTypes(),this.walletController.availableInstallTypes(),this.walletController.availableConnections(),this.walletController.states()]).subscribe((function(e){var n=Object(o.a)(e,4),r=n[0],c=n[1],d=n[2],m=n[3];t.availableInstallTypes=c,t.availableConnectTypes=r,t.availableConnections=d,t.states=m,t.supportFeatures=m.status===l.b.WALLET_CONNECTED?Array.from(m.supportFeatures):[]}))},linkClicked:function(){var t=this;this.linkJustClicked=!0,setTimeout((function(){t.linkJustClicked=!1}),100),setTimeout((function(){var e=t.$el.querySelectorAll(".ddCat");e&&(console.log(e),e.forEach((function(t){return t.classList.remove("subLinksWrapperVis")})))}),100)}}}),M=(n(836),n(37)),component=Object(M.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"headerMain"},[o("nav",{staticClass:"mainNav"},[o("NuxtLink",{staticClass:"homeMain",attrs:{to:"/"}},[o("div",{staticClass:"home"},[o("img",{staticClass:"torch",attrs:{src:n(340),alt:"Homepage"}}),t._v(" "),o("div",{staticClass:"textWrapper"},[o("img",{staticClass:"homeText",attrs:{src:n(341),alt:"Homepage"}}),t._v(" "),"/"!==t.$nuxt.$route.path?o("span",{staticClass:"siteName"},[t._v(t._s(t.currentPath))]):t._e()])])]),t._v(" "),o("ul",{staticClass:"mainLinks default rosStretch"},[o("li",[o("NuxtLink",{staticClass:"linkHover",class:{underline:"/"===t.$nuxt.$route.path},attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",{staticClass:"ddCat"},[o("a",{class:{underline:"WINE"===t.currentPath}},[t._v("Wine\n          "),o("div",{staticClass:"ddArrow"})]),t._v(" "),t.linkJustClicked?t._e():o("div",{staticClass:"subLinksWrapper"},[o("ul",{staticClass:"subLinks",class:{subLinksTrans:t.transSublinks}},[o("li",[o("NuxtLink",{attrs:{to:"/wine"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("Buy Wine")])],1),t._v(" "),o("li",[o("NuxtLink",{attrs:{to:"/wine/winemakers"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("Winemakers")])],1)])])]),t._v(" "),o("li",{staticClass:"ddCat"},[o("a",{class:{underline:"CLUB"===t.currentPath}},[t._v("Club\n          "),o("div",{staticClass:"ddArrow"})]),t._v(" "),t.linkJustClicked?t._e():o("div",{staticClass:"subLinksWrapper"},[o("ul",{staticClass:"subLinks",class:{subLinksTrans:t.transSublinks}},[o("li",[o("NuxtLink",{attrs:{to:"/club"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("Articles")])],1),t._v(" "),o("li",[o("NuxtLink",{attrs:{to:"/club/myWine"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("My Wine")])],1),t._v(" "),o("li",[o("NuxtLink",{attrs:{to:"/club/events"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("Events")])],1)])])])]),t._v(" "),o("div",{staticClass:"btnWrapper"},[o("InputsConnectWallet")],1),t._v(" "),o("img",{staticClass:"mobileMenuBtn",attrs:{src:n(561),alt:"Open Mobile Menu"},on:{click:function(e){e.stopPropagation(),t.mobileMenuVis=!t.mobileMenuVis}}})],1),t._v(" "),t.mobileMenuVis?o("div",{staticClass:"overlayBlocker"}):t._e(),t._v(" "),o("nav",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideMobileNav,expression:"hideMobileNav"}],staticClass:"mobileNav",class:{vis:t.mobileMenuVis}},[o("svg",{staticClass:"closeMobileMenuBtn",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},on:{click:function(e){t.mobileMenuVis=!1}}},[o("path",{attrs:{d:"M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"}})]),t._v(" "),o("div",{staticClass:"btnWrapper"},[o("InputsConnectWallet")],1),t._v(" "),o("ul",{staticClass:"mainLinks mobile rosStretch"},[o("li",{on:{click:function(e){t.mobileMenuVis=!1}}},[o("NuxtLink",{staticClass:"linkHover",class:{underline:"/"===t.$nuxt.$route.path},attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",{staticClass:"ddCat",on:{click:function(t){return t.currentTarget.classList.toggle("subLinksWrapperVis")}}},[o("a",{class:{underline:"WINE"===t.currentPath}},[t._v("Wine\n          "),o("div",{staticClass:"ddArrow"})]),t._v(" "),t.linkJustClicked?t._e():o("div",{staticClass:"subLinksWrapper"},[o("ul",{staticClass:"subLinks"},[o("li",{on:{click:function(e){t.mobileMenuVis=!1}}},[o("NuxtLink",{attrs:{to:"/wine"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("Buy Wine")])],1),t._v(" "),o("li",{on:{click:function(e){t.mobileMenuVis=!1}}},[o("NuxtLink",{attrs:{to:"/wine/winemakers"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("Winemakers")])],1)])])]),t._v(" "),o("li",{staticClass:"ddCat",on:{click:function(t){return t.currentTarget.classList.toggle("subLinksWrapperVis")}}},[o("a",{class:{underline:"CLUB"===t.currentPath}},[t._v("Club\n          "),o("div",{staticClass:"ddArrow"})]),t._v(" "),t.linkJustClicked?t._e():o("div",{staticClass:"subLinksWrapper"},[o("ul",{staticClass:"subLinks"},[o("li",{on:{click:function(e){t.mobileMenuVis=!1}}},[o("NuxtLink",{attrs:{to:"/club"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("Articles")])],1),t._v(" "),o("li",{on:{click:function(e){t.mobileMenuVis=!1}}},[o("NuxtLink",{attrs:{to:"/club/myWine"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("My Wine")])],1),t._v(" "),o("li",{on:{click:function(e){t.mobileMenuVis=!1}}},[o("NuxtLink",{attrs:{to:"/club/events"},nativeOn:{click:function(e){return t.linkClicked.apply(null,arguments)}}},[t._v("Events")])],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InputsConnectWallet:n(508).default})},286:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"noselect"},[o("div",{staticClass:"logo"},[o("img",{staticClass:"torch",attrs:{src:n(340),alt:"Homepage"}}),t._v(" "),o("img",{staticClass:"logoText",attrs:{src:n(341),alt:"Homepage"}})]),t._v(" "),o("div",{staticClass:"linksWrapper"},[o("a",{staticClass:"docLink",attrs:{href:"https://docs.minerva.market/",target:"_blank"}},[o("span",[t._v("Documentation")]),t._v(" "),o("img",{attrs:{src:n(840),alt:"Documentation Link"}})]),t._v(" "),o("div",{staticClass:"socialsLinks"},[o("a",{staticClass:"socialLink",attrs:{href:"https://twitter.com/Minerva_wine",target:"_blank"}},[o("img",{attrs:{src:n(841),alt:"Twitter Link"}})]),t._v(" "),o("a",{staticClass:"socialLink",attrs:{href:"http://discord.gg/GeaWsVg6A5",target:"_blank"}},[o("img",{attrs:{src:n(842),alt:"Discord Link"}})]),t._v(" "),o("a",{staticClass:"socialLink",attrs:{href:"http://medium.com/@Minerva_NFT",target:"_blank"}},[o("img",{attrs:{src:n(843),alt:"Medium Link"}})]),t._v(" "),o("a",{staticClass:"socialLink",attrs:{href:"https://www.linkedin.com/company/minerva-dao",target:"_blank"}},[o("img",{attrs:{src:n(844),alt:"LinkedIn Link"}})]),t._v(" "),o("a",{staticClass:"socialLink",attrs:{href:"https://www.instagram.com/minerva.wine/",target:"_blank"}},[o("img",{attrs:{src:n(845),alt:"Instagram Link"}})]),t._v(" "),o("a",{staticClass:"socialLink",attrs:{href:"http://t.me/MinervaNFT",target:"_blank"}},[o("img",{attrs:{src:n(846),alt:"Telegram Link"}})])]),t._v(" "),o("a",{staticClass:"privPol",attrs:{href:"https://docs.minerva.market/legal-documents/minerva-privacy-policy",target:"_blank"}},[o("span",[t._v("Privacy Policy")])])])])}],r=n(5).a.extend({}),l=(n(847),n(37)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"6639dd51",null);e.default=component.exports},295:function(t,e,n){"use strict";n(5).a.directive("click-outside",{bind:function(t,e,n){t.clickOutsideEvent=function(o){t===o.target||t.contains(o.target)||n.context[e.expression](o)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}})},339:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("f365ed86",content,!0,{sourceMap:!1})},340:function(t,e,n){t.exports=n.p+"img/torch.79ab5f7.svg"},341:function(t,e,n){t.exports=n.p+"img/minervaText.76ddc06.svg"},467:function(t,e,n){var content=n(837);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("91c8e678",content,!0,{sourceMap:!1})},468:function(t,e,n){var content=n(839);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("627a3d65",content,!0,{sourceMap:!1})},469:function(t,e,n){var content=n(848);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("51135ab7",content,!0,{sourceMap:!1})},470:function(t,e,n){var content=n(850);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("d5e6ed9a",content,!0,{sourceMap:!1})},471:function(t,e,n){var content=n(852);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("1c1c544c",content,!0,{sourceMap:!1})},498:function(t,e,n){"use strict";var o=n(5).a.extend({data:function(){return{scrolled:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.clientHeight;this.scrolled=!t}}}),r=(n(559),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("DefaultHeader",{staticClass:"header",class:{shadow:t.scrolled}}),t._v(" "),n("Nuxt",{staticClass:"main"}),t._v(" "),n("DefaultFooter",{staticClass:"footer"})],1)}),[],!1,null,"ffae8588",null);e.a=component.exports;installComponents(component,{DefaultHeader:n(285).default,DefaultFooter:n(286).default})},499:function(t,e,n){"use strict";var o=n(5),r=n(72),l=o.a.extend({data:function(){return{scrolled:!1,walletController:{}}},created:function(){var t=this;void 0===Object(r.a)()?Object(r.b)().then((function(){t.walletController=Object(r.a)()})):this.walletController=Object(r.a)()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.clientHeight;this.scrolled=!t}}}),c=(n(849),n(37)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("DefaultHeader",{staticClass:"header",class:{shadow:t.scrolled}}),t._v(" "),n("Nuxt",{staticClass:"main"}),t._v(" "),n("DefaultFooter")],1)}),[],!1,null,"016c08a6",null);e.a=component.exports;installComponents(component,{DefaultHeader:n(285).default,DefaultFooter:n(286).default})},500:function(t,e,n){"use strict";var o=n(5).a.extend({data:function(){return{scrolled:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.clientHeight;this.scrolled=!t}}}),r=(n(851),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("DefaultHeader",{staticClass:"header",class:{shadow:t.scrolled},attrs:{"trans-sublinks":!0}}),t._v(" "),n("Nuxt",{staticClass:"main"}),t._v(" "),n("DefaultFooter",{staticClass:"footer"})],1)}),[],!1,null,"bc52e7b0",null);e.a=component.exports;installComponents(component,{DefaultHeader:n(285).default,DefaultFooter:n(286).default})},508:function(t,e,n){"use strict";n.r(e);n(838);var o=n(37),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button"},[t._v("CONNECT WALLET")])}),[],!1,null,"3a7310b4",null);e.default=component.exports},509:function(t,e,n){n(510),t.exports=n(511)},550:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("19580260",content,!0,{sourceMap:!1})},551:function(t,e,n){var o=n(65)(!1);o.push([t.i,'html{overflow-y:scroll}*{font-family:Helvetica;margin:0}.app{min-height:100vh}.noselect,img{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.linkHover,.underline{position:relative}.linkHover:before,.underline:before{content:"";background:#d6a11a;position:absolute;bottom:-4px;right:0;left:0;margin-left:auto;margin-right:auto;width:50%;height:2px}.linkHover:before{width:0}.linkHover:hover:before{transition:width .2s ease;width:50%}.linkHoverParent>a{position:relative}.linkHoverParent>a:before{content:"";background:#d6a11a;position:absolute;bottom:-4px;right:0;left:0;margin-left:auto;margin-right:auto;height:2px;width:0}.linkHoverParent:hover>a:before{transition:width .2s ease;width:50%}a{text-decoration:none}.customh1,.customh3,.mainFontStlyeBig{font-family:"Roslindale";color:#fff}.customh1{font-size:7.56em;font-weight:400;margin-bottom:9px;margin-top:15px;line-height:1}.customh2,.customh4{font-family:"Sabiya-Regular";color:#d6a11a;font-size:6.3rem;font-weight:400;margin-bottom:-10px}.customh3{font-weight:400;font-size:3rem}.customh4{font-size:4rem}p{margin:5px 0;color:inherit;min-height:1em;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased!important;-moz-font-smoothing:antialiased!important;text-rendering:optimizelegibility!important;letter-spacing:.05em;font-size:1.4em;line-height:1.4}.button,.buttonLight{display:inline-block;height:63px;letter-spacing:.06rem;text-decoration:none;padding:15px 20px;line-height:1;background-color:#d6a11a;color:#fff;border:none;border-radius:7px;cursor:pointer;transition:all .2s ease;overflow:hidden;position:relative;z-index:1;min-width:198px;font-size:1rem}.button:after,.buttonLight:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:100%;background-color:#d6a11a;border-radius:7px;z-index:-2}.button:before,.buttonLight:before{content:"";position:absolute;bottom:0;left:0;height:100%;width:0;background-color:#e3ab1c;transition:all .2s;border-radius:0;z-index:-1}.button:hover:before,.buttonLight:hover:before{width:100%}.button:active:before,.buttonLight:active:before{background-color:#d6a11a}.buttonLight{background-color:transparent;border:2.5px solid #d6a11a;color:#fff}.buttonLight:after,.buttonLight:before{content:none}.buttonLight:hover{background-color:#d6a11a}.buttonLight:active{background-color:transparent;transition:all 0s}.smaller{font-size:.6em;color:inherit}.fade-in{opacity:0;transition:opacity .3s ease-in}.fade-in.appear{opacity:1}.from-left{transform:translateX(-50%)}.from-right{transform:translateX(50%)}.from-left,.from-right{transition:opacity .3s ease-in,transform .3s ease-in;opacity:0}.from-left.appear,.from-right.appear{transform:translateX(0);opacity:1}@media screen and (max-width:707px){html{font-size:.9em}}@media screen and (max-width:900px){.customh1{font-size:5.9em!important}.customh2,.customh4{font-size:5.5em!important}}@media screen and (max-width:643px){html{font-size:.8em}.customh1{font-size:5em!important}.customh2,.customh4{line-height:70%!important}}@media screen and (max-width:530px){html{font-size:.7em}.customh2,.customh4{font-size:5.5em!important}p{line-height:1.6em!important}}@media screen and (max-width:417px){html{font-size:.6em}.customh2,.customh4{font-size:5em!important}.button,.buttonLight{min-width:120px!important;height:auto!important;min-height:45px;padding:0 5px}p{line-height:1.5em!important;font-size:16px}}@media screen and (max-width:370px){.customh1{font-size:3.9em!important}.customh2,.customh4{font-size:4em!important}}@media screen and (max-width:320px){.customh1{font-size:3.5em!important}}@media screen and (max-width:287px){p{line-height:1.3em!important}}@media screen and (max-height:950px)and (min-width:643px){html{font-size:.9em}}@media screen and (max-height:900px)and (min-width:530px){html{font-size:.8em}}',""]),t.exports=o},552:function(t,e,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("d06ce81e",content,!0,{sourceMap:!1})},553:function(t,e,n){var o=n(65),r=n(507),l=n(554),c=n(555),d=n(556),m=n(557),M=n(558),h=o(!1),f=r(l),x=r(c),w=r(d),L=r(m),v=r(M);h.push([t.i,'@font-face{font-family:"Sabiya-Regular";src:url('+f+') format("woff2"),url('+x+') format("woff");font-display:fallback}@font-face{src:url('+w+') format("woff2"),url('+L+') format("woff");font-family:"Roslindale";font-style:normal;font-weight:300;font-display:fallback}@font-face{font-family:"Glacial-Indifference";src:url('+v+') format("woff");font-weight:400;font-style:normal;font-display:fallback}',""]),t.exports=h},554:function(t,e,n){t.exports=n.p+"fonts/font.9dfbe49.woff2"},555:function(t,e,n){t.exports=n.p+"fonts/font.d0f01ad.woff"},556:function(t,e,n){t.exports=n.p+"fonts/Roslindale-DisplayCondensedLight.d02c4ab.woff2"},557:function(t,e,n){t.exports=n.p+"fonts/Roslindale-DisplayCondensedLight.990397a.woff"},558:function(t,e,n){t.exports=n.p+"fonts/Glacial-Indifference-Regular.ttf.ff4fd48.woff"},559:function(t,e,n){"use strict";n(339)},560:function(t,e,n){var o=n(65)(!1);o.push([t.i,".app[data-v-ffae8588]{background-color:#15364a}.app[data-v-ffae8588],.header[data-v-ffae8588]{width:100%}@media screen and (max-width:530px){.header[data-v-ffae8588]{position:-webkit-sticky;position:sticky;top:0;background-color:#15364a}}.main[data-v-ffae8588]{z-index:1;margin-bottom:199px}@media screen and (max-width:530px){.shadow[data-v-ffae8588]{box-shadow:-1px 0 31px 12px rgba(0,0,0,.1)}}",""]),t.exports=o},561:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjI0Ljc1cHgiIGhlaWdodD0iMjQuNzVweCIgdmlld0JveD0iMCAwIDI0Ljc1IDI0Ljc1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNC43NSAyNC43NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTAsMy44NzVjMC0xLjEwNCwwLjg5Ni0yLDItMmgyMC43NWMxLjEwNCwwLDIsMC44OTYsMiwycy0wLjg5NiwyLTIsMkgyQzAuODk2LDUuODc1LDAsNC45NzksMCwzLjg3NXogTTIyLjc1LDEwLjM3NUgyDQoJCWMtMS4xMDQsMC0yLDAuODk2LTIsMmMwLDEuMTA0LDAuODk2LDIsMiwyaDIwLjc1YzEuMTA0LDAsMi0wLjg5NiwyLTJDMjQuNzUsMTEuMjcxLDIzLjg1NSwxMC4zNzUsMjIuNzUsMTAuMzc1eiBNMjIuNzUsMTguODc1SDINCgkJYy0xLjEwNCwwLTIsMC44OTYtMiwyczAuODk2LDIsMiwyaDIwLjc1YzEuMTA0LDAsMi0wLjg5NiwyLTJTMjMuODU1LDE4Ljg3NSwyMi43NSwxOC44NzV6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},682:function(t,e){},684:function(t,e){},694:function(t,e){},696:function(t,e){},712:function(t,e){},714:function(t,e){},715:function(t,e){},72:function(t,e,n){"use strict";n.d(e,"b",(function(){return M})),n.d(e,"a",(function(){return f}));n(74),n(73),n(85),n(38),n(119),n(58),n(120);var o,r=n(54),l=n(23),c=(n(79),n(161));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function M(){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.c)();case 2:e=t.sent,o=new c.a(m({},e));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return o}},797:function(t,e){},799:function(t,e){},806:function(t,e){},836:function(t,e,n){"use strict";n(467)},837:function(t,e,n){var o=n(65)(!1);o.push([t.i,'li{position:relative}li .ddArrow{position:absolute;right:-16px;top:11px;width:5px;height:5px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(-45deg);display:inline;transition-property:transform top;transition-duration:.2s;transition-timing-function:ease}li .underline{position:relative}li .underline:before{content:"";background:#d6a11a;position:absolute;bottom:-4px;right:0;left:0;margin-left:auto;margin-right:auto;width:50%;height:2px}li .underline.homeMain:before{content:none}li a{letter-spacing:.05em}.headerMain{position:relative;z-index:10}.headerMain .mainNav{height:110px;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 40px}@media screen and (max-height:855px),screen and (max-width:417px){.headerMain .mainNav{height:100px}}@media screen and (max-width:295px){.headerMain .mainNav{justify-content:flex-start}}.headerMain .mainNav .home{display:flex;align-items:center;justify-content:space-between;width:220px}@media screen and (max-width:370px){.headerMain .mainNav .home{justify-content:flex-start;align-items:flex-end}}@media screen and (max-width:295px){.headerMain .mainNav .home{width:100%}}@media screen and (max-height:855px),screen and (max-width:417px){.headerMain .mainNav .home .torch{height:45px}}.headerMain .mainNav .home .textWrapper{margin-left:10px;margin-top:5px}.headerMain .mainNav .home .textWrapper .homeText{height:30px}@media screen and (max-width:370px){.headerMain .mainNav .home .textWrapper .homeText{display:none}}@media screen and (max-height:855px),screen and (max-width:417px){.headerMain .mainNav .home .textWrapper .homeText{height:25px;padding-right:30px}}.headerMain .mainNav .home .textWrapper .siteName{color:#fff;font-size:16px;line-height:.9;display:none}@media screen and (max-width:530px){.headerMain .mainNav .home .textWrapper .siteName{display:block}}@media screen and (max-width:370px){.headerMain .mainNav .home .textWrapper .siteName{display:none}}.headerMain .mainNav .btnWrapper{width:220px;display:flex;justify-content:flex-end}@media screen and (max-width:1050px){.headerMain .mainNav .btnWrapper{margin-right:80px}}@media screen and (max-width:750px){.headerMain .mainNav .btnWrapper{display:none}}.headerMain .mainNav .mobileMenuBtn{filter:invert(100%) sepia(0) saturate(0) hue-rotate(73deg) brightness(101%) contrast(102%);height:40px;position:absolute;right:40px;display:none;cursor:pointer}@media screen and (max-width:1050px){.headerMain .mainNav .mobileMenuBtn{display:block}}@media screen and (max-height:855px),screen and (max-width:417px){.headerMain .mainNav .mobileMenuBtn{height:37px}}@media screen and (max-width:1050px){.headerMain .mainNav .mainLinks{display:none}}@media screen and (max-height:855px),screen and (max-width:417px){.headerMain .mainNav .mainLinks{font-size:20px!important}}.headerMain .mainNav .default{grid-gap:50px;gap:50px;position:relative;padding-top:10px}.headerMain .mainNav .default .ddCat a{margin-right:16px!important;position:relative}.headerMain .mainNav .default .ddCat:hover a:before{content:none}.headerMain .mainNav .default li{position:relative;z-index:2;cursor:pointer}.headerMain .mainNav .default li *{padding:0}.headerMain .mainNav .default li .subLinksWrapper{position:absolute;padding-top:12px;z-index:1;display:none}.headerMain .mainNav .default li .subLinksWrapper .subLinks{list-style:none;width:auto;background-color:#113042;display:flex;flex-direction:column;align-items:center;padding-top:14px;padding-bottom:15px;border-radius:1px;white-space:nowrap;box-shadow:5px 5px 13px 0 rgba(0,0,0,.12)}.headerMain .mainNav .default li .subLinksWrapper .subLinks:after{bottom:calc(100% - 12px);left:23px;content:"";height:0;width:0;position:absolute;pointer-events:none;border:7px solid transparent;border-bottom-color:#113042;margin-left:-7px}.headerMain .mainNav .default li .subLinksWrapper .subLinks li{width:100%;font-size:.9em;cursor:pointer}.headerMain .mainNav .default li .subLinksWrapper .subLinks li a{width:100%;letter-spacing:.1em;padding:8px 30px;box-sizing:border-box;display:block;color:#eee}.headerMain .mainNav .default li .subLinksWrapper .subLinks li .underline:before{width:90%;bottom:-3px}.headerMain .mainNav .default li .subLinksWrapper .subLinks li:hover{background-color:#123144}.headerMain .mainNav .default li .subLinksWrapper .subLinks li:hover>a{color:#fff}.headerMain .mainNav .default li .subLinksWrapper .subLinks li:hover>a:before{width:90%;bottom:-3px}.headerMain .mainNav .default li:hover .subLinksWrapper{display:block}.headerMain .mainLinks{height:40px;display:flex;font-size:24px;list-style:none}.headerMain .mainLinks li a{color:#fff;font-family:"Roslindale"}.headerMain .overlayBlocker{position:fixed;top:0;height:100vh;width:100vw;background-color:transparent;z-index:19}.headerMain .mobileNav{background-color:#15364a;display:inline-block;position:fixed;overflow:hidden;height:100vh;width:0;z-index:20;right:0;top:0;transition:width .2s ease}@media screen and (max-width:370px){.headerMain .mobileNav{max-width:100vw}}.headerMain .mobileNav .closeMobileMenuBtn{position:absolute;top:30px;left:30px;filter:invert(100%) sepia(0) saturate(0) hue-rotate(73deg) brightness(101%) contrast(102%);cursor:pointer}.headerMain .mobileNav .btnWrapper{align-items:center;flex-direction:column;display:none;position:absolute;left:0;right:0;bottom:70px;margin-left:auto;margin-right:auto}@media screen and (max-height:340px){.headerMain .mobileNav .btnWrapper{bottom:30px}}@media screen and (max-width:750px){.headerMain .mobileNav .btnWrapper{display:flex}}@media screen and (max-width:529px){.headerMain .mobileNav .btnWrapper .button{min-width:0!important;width:60%}}.headerMain .mobileNav .mainLinks{height:100%;flex-direction:column;padding:87px 0 15% 150px;opacity:0;transition-delay:0s;transition-duration:.01s}@media screen and (max-width:370px){.headerMain .mobileNav .mainLinks{padding-left:40vw}}@media screen and (max-height:400px){.headerMain .mobileNav .mainLinks{padding-top:40px}}@media screen and (max-height:340px){.headerMain .mobileNav .mainLinks{padding-top:20px}}.headerMain .mobileNav .mainLinks li{margin-top:25px}.headerMain .mobileNav .mobile .ddCat a{margin-right:16px!important;position:relative}.headerMain .mobileNav .mobile li{position:relative;z-index:2;cursor:pointer;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.headerMain .mobileNav .mobile li *{padding:0}.headerMain .mobileNav .mobile li .subLinksWrapper{z-index:1;display:none}.headerMain .mobileNav .mobile li .subLinksWrapper .subLinks{list-style:none;width:auto;display:flex;flex-direction:column;align-items:center;padding-bottom:15px;border-radius:1px;white-space:nowrap}.headerMain .mobileNav .mobile li .subLinksWrapper .subLinks li{width:100%;font-size:.8em;cursor:pointer;list-style:none}.headerMain .mobileNav .mobile li .subLinksWrapper .subLinks li a{width:100%;letter-spacing:.1em;padding-left:15px;padding-right:30px;box-sizing:border-box;display:block;color:#eee}.headerMain .mobileNav .mobile li .subLinksWrapper .subLinks li .underline:before{width:90%;bottom:-3px}.headerMain .mobileNav .mobile li .subLinksWrapper .subLinks li:hover{background-color:#123144}.headerMain .mobileNav .mobile li .subLinksWrapper .subLinks li:hover>a{color:#fff}.headerMain .mobileNav .mobile li .subLinksWrapper .subLinks li:hover>a:before{width:90%;bottom:-3px}.headerMain .mobileNav .mobile .subLinksWrapperVis .subLinksWrapper{display:block}.headerMain .vis{width:350px;box-shadow:-1px 0 31px 12px rgba(0,0,0,.15)}.headerMain .vis .mainLinks{opacity:1;transition:opacity .3s ease;transition-delay:.1s}.subLinksTrans{background-color:rgba(54,54,54,.54118)!important}.subLinksTrans:after{border-bottom-color:rgba(54,54,54,.54118)!important}.subLinksTrans li:hover{background-color:transparent!important;background:linear-gradient(180deg,hsla(0,0%,100%,0),rgba(54,54,54,.08) 3%,rgba(54,54,54,.08) 97%,hsla(0,0%,100%,0))!important}',""]),t.exports=o},838:function(t,e,n){"use strict";n(468)},839:function(t,e,n){var o=n(65)(!1);o.push([t.i,".button[data-v-3a7310b4]{cursor:default;font-size:14px!important;height:54px}@media screen and (max-height:855px){.button[data-v-3a7310b4]{height:50px;font-size:13px!important;min-width:180px}}",""]),t.exports=o},840:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+PHBhdGggZD0iTTMyLDEyMmg2NGM3LjIsMCwxMy01LjgsMTMtMTNWMjljMC02LjEtMi40LTExLjktNi43LTE2LjNTOTIuMSw2LDg2LDZMMzIsNmMtNy4yLDAtMTMsNS44LTEzLDEzdjkwIEMxOSwxMTYuMiwyNC44LDEyMiwzMiwxMjJ6IE04Ni4xLDkyaC00NGMtMS43LDAtMy0xLjMtMy0zczEuMy0zLDMtM2g0NGMxLjcsMCwzLDEuMywzLDNTODcuOCw5Miw4Ni4xLDkyeiBNOTgsMTcgYzIuNSwyLjUsNC4xLDUuNiw0LjcsOUg5NmMtMy45LDAtNy0zLjEtNy03bDAtNi43QzkyLjQsMTIuOSw5NS41LDE0LjUsOTgsMTd6IE00MS45LDU2aDQ0YzEuNywwLDMsMS4zLDMsM3MtMS4zLDMtMywzaC00NCBjLTEuNywwLTMtMS4zLTMtM1M0MC4yLDU2LDQxLjksNTZ6IE00MS45LDcxaDQ0YzEuNywwLDMsMS4zLDMsM3MtMS4zLDMtMywzaC00NGMtMS43LDAtMy0xLjMtMy0zUzQwLjIsNzEsNDEuOSw3MXoiLz48L3N2Zz4="},841:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPiAgICA8cGF0aCBkPSJNMjgsNi45MzdjLTAuOTU3LDAuNDI1LTEuOTg1LDAuNzExLTMuMDY0LDAuODRjMS4xMDItMC42NiwxLjk0Ny0xLjcwNSwyLjM0NS0yLjk1MWMtMS4wMywwLjYxMS0yLjE3MiwxLjA1NS0zLjM4OCwxLjI5NSBjLTAuOTczLTEuMDM3LTIuMzU5LTEuNjg1LTMuODkzLTEuNjg1Yy0yLjk0NiwwLTUuMzM0LDIuMzg5LTUuMzM0LDUuMzM0YzAsMC40MTgsMC4wNDgsMC44MjYsMC4xMzgsMS4yMTUgYy00LjQzMy0wLjIyMi04LjM2My0yLjM0Ni0xMC45OTUtNS41NzRDMy4zNTEsNi4xOTksMy4wODgsNy4xMTUsMy4wODgsOC4wOTRjMCwxLjg1LDAuOTQxLDMuNDgzLDIuMzcyLDQuNDM5IGMtMC44NzQtMC4wMjgtMS42OTctMC4yNjgtMi40MTYtMC42NjdjMCwwLjAyMywwLDAuMDQ0LDAsMC4wNjdjMCwyLjU4NSwxLjgzOCw0Ljc0MSw0LjI3OSw1LjIzIGMtMC40NDcsMC4xMjItMC45MTksMC4xODctMS40MDYsMC4xODdjLTAuMzQzLDAtMC42NzgtMC4wMzQtMS4wMDMtMC4wOTVjMC42NzksMi4xMTksMi42NDksMy42NjIsNC45ODMsMy43MDUgYy0xLjgyNSwxLjQzMS00LjEyNSwyLjI4NC02LjYyNSwyLjI4NGMtMC40MywwLTAuODU1LTAuMDI1LTEuMjczLTAuMDc1YzIuMzYxLDEuNTEzLDUuMTY0LDIuMzk2LDguMTc3LDIuMzk2IGM5LjgxMiwwLDE1LjE3Ni04LjEyOCwxNS4xNzYtMTUuMTc3YzAtMC4yMzEtMC4wMDUtMC40NjEtMC4wMTUtMC42OUMyNi4zOCw4Ljk0NSwyNy4yODUsOC4wMDYsMjgsNi45Mzd6Ii8+PC9zdmc+"},842:function(t,e,n){t.exports=n.p+"img/discord.a967add.svg"},843:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPjxwYXRoIGQ9Ik04LjUgN0E4LjUgOC41IDAgMTA4LjUgMjQgOC41IDguNSAwIDEwOC41IDd6TTIyIDhBNCA3LjUgMCAxMDIyIDIzIDQgNy41IDAgMTAyMiA4ek0yOC41IDlBMS41IDYuNSAwIDEwMjguNSAyMiAxLjUgNi41IDAgMTAyOC41IDl6Ii8+PC9zdmc+"},844:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPiAgICA8cGF0aCBkPSJNMjQsNEg2QzQuODk1LDQsNCw0Ljg5NSw0LDZ2MThjMCwxLjEwNSwwLjg5NSwyLDIsMmgxOGMxLjEwNSwwLDItMC44OTUsMi0yVjZDMjYsNC44OTUsMjUuMTA1LDQsMjQsNHogTTEwLjk1NCwyMmgtMi45NSB2LTkuNDkyaDIuOTVWMjJ6IE05LjQ0OSwxMS4xNTFjLTAuOTUxLDAtMS43Mi0wLjc3MS0xLjcyLTEuNzJjMC0wLjk0OSwwLjc3LTEuNzE5LDEuNzItMS43MTljMC45NDgsMCwxLjcxOSwwLjc3MSwxLjcxOSwxLjcxOSBDMTEuMTY4LDEwLjM4LDEwLjM5NywxMS4xNTEsOS40NDksMTEuMTUxeiBNMjIuMDA0LDIyaC0yLjk0OHYtNC42MTZjMC0xLjEwMS0wLjAyLTIuNTE3LTEuNTMzLTIuNTE3IGMtMS41MzUsMC0xLjc3MSwxLjE5OS0xLjc3MSwyLjQzN1YyMmgtMi45NDh2LTkuNDkyaDIuODN2MS4yOTdoMC4wNGMwLjM5NC0wLjc0NiwxLjM1Ni0xLjUzMywyLjc5MS0xLjUzMyBjMi45ODcsMCwzLjUzOSwxLjk2NiwzLjUzOSw0LjUyMlYyMnoiLz48L3N2Zz4="},845:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPiAgICA8cGF0aCBkPSJNIDkuOTk4MDQ2OSAzIEMgNi4xMzkwNDY5IDMgMyA2LjE0MTk1MzEgMyAxMC4wMDE5NTMgTCAzIDIwLjAwMTk1MyBDIDMgMjMuODYwOTUzIDYuMTQxOTUzMSAyNyAxMC4wMDE5NTMgMjcgTCAyMC4wMDE5NTMgMjcgQyAyMy44NjA5NTMgMjcgMjcgMjMuODU4MDQ3IDI3IDE5Ljk5ODA0NyBMIDI3IDkuOTk4MDQ2OSBDIDI3IDYuMTM5MDQ2OSAyMy44NTgwNDcgMyAxOS45OTgwNDcgMyBMIDkuOTk4MDQ2OSAzIHogTSAyMiA3IEMgMjIuNTUyIDcgMjMgNy40NDggMjMgOCBDIDIzIDguNTUyIDIyLjU1MiA5IDIyIDkgQyAyMS40NDggOSAyMSA4LjU1MiAyMSA4IEMgMjEgNy40NDggMjEuNDQ4IDcgMjIgNyB6IE0gMTUgOSBDIDE4LjMwOSA5IDIxIDExLjY5MSAyMSAxNSBDIDIxIDE4LjMwOSAxOC4zMDkgMjEgMTUgMjEgQyAxMS42OTEgMjEgOSAxOC4zMDkgOSAxNSBDIDkgMTEuNjkxIDExLjY5MSA5IDE1IDkgeiBNIDE1IDExIEEgNCA0IDAgMCAwIDExIDE1IEEgNCA0IDAgMCAwIDE1IDE5IEEgNCA0IDAgMCAwIDE5IDE1IEEgNCA0IDAgMCAwIDE1IDExIHoiLz48L3N2Zz4="},846:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPjxwYXRoIGQ9Ik00Ni4xMzcsNi41NTJjLTAuNzUtMC42MzYtMS45MjgtMC43MjctMy4xNDYtMC4yMzhsLTAuMDAyLDBDNDEuNzA4LDYuODI4LDYuNzI4LDIxLjgzMiw1LjMwNCwyMi40NDUJYy0wLjI1OSwwLjA5LTIuNTIxLDAuOTM0LTIuMjg4LDIuODE0YzAuMjA4LDEuNjk1LDIuMDI2LDIuMzk3LDIuMjQ4LDIuNDc4bDguODkzLDMuMDQ1YzAuNTksMS45NjQsMi43NjUsOS4yMSwzLjI0NiwxMC43NTgJYzAuMywwLjk2NSwwLjc4OSwyLjIzMywxLjY0NiwyLjQ5NGMwLjc1MiwwLjI5LDEuNSwwLjAyNSwxLjk4NC0wLjM1NWw1LjQzNy01LjA0M2w4Ljc3Nyw2Ljg0NWwwLjIwOSwwLjEyNQljMC41OTYsMC4yNjQsMS4xNjcsMC4zOTYsMS43MTIsMC4zOTZjMC40MjEsMCwwLjgyNS0wLjA3OSwxLjIxMS0wLjIzN2MxLjMxNS0wLjU0LDEuODQxLTEuNzkzLDEuODk2LTEuOTM1bDYuNTU2LTM0LjA3NwlDNDcuMjMxLDcuOTMzLDQ2LjY3NSw3LjAwNyw0Ni4xMzcsNi41NTJ6IE0yMiwzMmwtMyw4bC0zLTEwbDIzLTE3TDIyLDMyeiIvPjwvc3ZnPg=="},847:function(t,e,n){"use strict";n(469)},848:function(t,e,n){var o=n(65)(!1);o.push([t.i,"footer[data-v-6639dd51]{height:200px;width:100%;background-color:#0c2636;position:fixed;bottom:0;left:0;z-index:-1}footer .linksWrapper[data-v-6639dd51]{position:absolute;bottom:50px;right:60px;display:flex;height:95px;flex-direction:column;align-items:flex-end;justify-content:space-between;filter:invert(100%) sepia(58%) saturate(427%) hue-rotate(223deg) brightness(121%) contrast(71%);padding-left:30px}@media screen and (max-width:329px){footer .linksWrapper[data-v-6639dd51]{height:120px;bottom:35px}}@media screen and (max-width:275px){footer .linksWrapper[data-v-6639dd51]{bottom:0;top:0;right:0;left:0;margin:auto;width:80%}}footer .linksWrapper .docLink[data-v-6639dd51]{cursor:pointer;width:145px;display:flex;justify-content:space-between;align-items:center;font-size:16px;color:#000}footer .linksWrapper .docLink img[data-v-6639dd51]{width:30px}footer .linksWrapper .docLink :hover+img[data-v-6639dd51],footer .linksWrapper .docLink img[data-v-6639dd51]:hover{transform:scale(1.1)}footer .linksWrapper .socialsLinks[data-v-6639dd51]{display:flex;flex-wrap:wrap;justify-content:flex-end}footer .linksWrapper .socialsLinks .socialLink[data-v-6639dd51]{width:30px;margin-left:10px;cursor:pointer}footer .linksWrapper .socialsLinks .socialLink[data-v-6639dd51] :hover{transform:scale(1.1)}footer .linksWrapper .socialsLinks .socialLink *[data-v-6639dd51]{width:30px}footer .linksWrapper .privPol[data-v-6639dd51]{color:#000;font-size:14px!important}footer .logo[data-v-6639dd51]{position:absolute;width:210px;height:105px;left:40px;right:auto;top:10px;bottom:0;margin:auto;display:flex;flex-grow:0;flex:0;align-items:center;flex-direction:row;justify-content:space-between}footer .logo .torch[data-v-6639dd51]{width:15px}@media screen and (max-width:470px){footer .logo .torch[data-v-6639dd51]{display:none}}footer .logo .logoText[data-v-6639dd51]{width:170px}@media screen and (max-width:690px){footer .logo .logoText[data-v-6639dd51]{display:none}}",""]),t.exports=o},849:function(t,e,n){"use strict";n(470)},850:function(t,e,n){var o=n(65)(!1);o.push([t.i,".header[data-v-016c08a6]{position:fixed;width:100%;background-color:#15364a}.main[data-v-016c08a6]{z-index:1;margin-bottom:199px;background-color:#fff}@media screen and (max-width:1225px){.shadow[data-v-016c08a6]{box-shadow:-1px 0 31px 12px rgba(0,0,0,.1)}}",""]),t.exports=o},851:function(t,e,n){"use strict";n(471)},852:function(t,e,n){var o=n(65)(!1);o.push([t.i,".app[data-v-bc52e7b0]{background-color:#15364a}.app[data-v-bc52e7b0],.header[data-v-bc52e7b0]{width:100%}@media screen and (max-width:530px){.header[data-v-bc52e7b0]{position:-webkit-sticky;position:sticky;top:0;background-color:#15364a}}.main[data-v-bc52e7b0]{z-index:1;margin-bottom:199px}@media screen and (max-width:530px){.shadow[data-v-bc52e7b0]{box-shadow:-1px 0 31px 12px rgba(0,0,0,.1)}}",""]),t.exports=o},853:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return l})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return d})),n.d(e,"accessorType",(function(){return m}));var o=n(223),r=function(){return{currentArticleKeyword:""}},l={currentArticleKeyword:function(t){return t.currentArticleKeyword}},c={SET_currentArticleKeyword:function(t,e){return t.currentArticleKeyword=e}},d={},m=Object(o.b)({state:r,getters:l,mutations:c,actions:d,modules:{}})}},[[509,25,3,26]]]);