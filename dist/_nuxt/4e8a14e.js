(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5],{1003:function(e,r,t){"use strict";t.r(r);var n=[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("aside",{staticClass:"clubHeader"},[n("div",{staticClass:"headerContent"},[n("div",{staticClass:"customh2"},[e._v("Curated")]),e._v(" "),n("h1",{staticClass:"customh1"},[e._v("Quality Wines")])]),e._v(" "),n("div",{staticClass:"barrelWrapper"},[n("img",{staticClass:"bottle",attrs:{src:t(972),alt:"Wine Bottle"}}),e._v(" "),n("img",{staticClass:"globe",attrs:{src:t(931),alt:"Globe"}})])])}],o=(t(109),t(94),t(110),t(81),t(59),t(73),t(133),t(134),t(95),t(23)),d=(t(40),t(165),t(135),t(136),t(64),t(501),t(79),t(6)),l=t(70),c=t(940);function w(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return m(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,d=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return d=e.done,e},e:function(e){l=!0,o=e},f:function(){try{d||null==t.return||t.return()}finally{if(l)throw o}}}}function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,t=new Array(r);i<r;i++)t[i]=e[i];return t}var f=d.a.extend({asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.app.$sanity,r.next=3,Object(c.a)(t);case 3:return n=r.sent,r.abrupt("return",{crowdfunds:n});case 5:case"end":return r.stop()}}),r)})))()},data:function(){return{walletController:{},typeFilters:[],countryFilters:[],vintageFilters:[],appliedFilterCount:0,mobileFilterVis:!1,countries:[],vintages:[],crowdfunds:[],filterFullyInView:!1,visibleCrowdfunds:[]}},computed:{stringFilterCount:function(){return this.appliedFilterCount>=10?this.appliedFilterCount.toString():"0"+this.appliedFilterCount.toString()},countryFiltersUsable:function(){var e,r={},t=w(this.countries);try{for(t.s();!(e=t.n()).done;){var n=e.value;r[n]=this.countryFilters.includes(n)}}catch(e){t.e(e)}finally{t.f()}return r},vintageFiltersUsable:function(){var e,r={},t=w(this.vintages);try{for(t.s();!(e=t.n()).done;){var n=e.value;r[n]=this.vintageFilters.includes(n)}}catch(e){t.e(e)}finally{t.f()}return r}},mounted:function(){this.calcVisibleCrowdfunds(),window.addEventListener("resize",this.calcVisibleCrowdfunds);var e,r=w(this.crowdfunds);try{for(r.s();!(e=r.n()).done;){var t=e.value;this.countries.includes(t.country.toLowerCase())||this.countries.push(t.country.toLowerCase()),this.vintages.includes(t.vintage.toLowerCase())||this.vintages.push(t.vintage.toLowerCase())}}catch(e){r.e(e)}finally{r.f()}var n=this,o=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?n.filterFullyInView=!0:n.filterFullyInView=!1}))}),{threshold:.99}),d=this.$el.querySelector(".wrapperSticky");d&&o.observe(d)},created:function(){var e=this;void 0===Object(l.a)()?Object(l.b)().then((function(){e.walletController=Object(l.a)()})):this.walletController=Object(l.a)()},beforeDestroy:function(){window.removeEventListener("resize",this.calcVisibleCrowdfunds)},methods:{filterClick:function(filter,e){var r=filter.indexOf(e);if(r>-1?(filter.splice(r,1),this.appliedFilterCount--):(filter.push(e),this.appliedFilterCount++),this.filterFullyInView){var t=this.$el.querySelector(".wineCardWrapper");t&&t.scrollIntoView()}this.calcVisibleCrowdfunds()},removeFilters:function(){this.typeFilters=[],this.countryFilters=[],this.vintageFilters=[],this.appliedFilterCount=0,this.calcVisibleCrowdfunds()},selectionEventParserCountry:function(e){this.filterClick(this.countryFilters,e.option)},selectionEventParserVintage:function(e){this.filterClick(this.vintageFilters,e.option)},visibleWithFilters:function(e){return(0===this.typeFilters.length||this.typeFilters.includes(e.type.toLowerCase()))&&(0===this.countryFilters.length||this.countryFilters.includes(e.country.toLowerCase()))&&(0===this.vintageFilters.length||this.vintageFilters.includes(e.vintage.toLowerCase()))},calcVisibleCrowdfunds:function(){var e=[],r=0,t=window.innerWidth,n=this;function o(i){return t<2380?i>=4&&(i+2)%6==0&&r<n.crowdfunds.length-1||i>=4&&(i+1)%6==0&&r<n.crowdfunds.length-1:((i+3)%6==0||(i+2)%6==0)&&r<n.crowdfunds.length-3}for(var i=1;r<this.crowdfunds.length;i++)if(o(i))e.push({slug:{current:"filler"+i}});else{var d=this.crowdfunds[r++];d&&this.visibleWithFilters(d)&&e.push(d)}this.visibleCrowdfunds=e}}}),x=(t(973),t(43)),component=Object(x.a)(f,(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"wrapperWinePage"},[e._m(0),e._v(" "),n("div",{staticClass:"mainCont"},[n("div",{staticClass:"overlay",class:{overlayVis:e.mobileFilterVis},on:{click:function(r){e.mobileFilterVis=!1}}}),e._v(" "),n("aside",{staticClass:"filter",class:{mobileFilterVis:e.mobileFilterVis}},[n("div",{staticClass:"wrapperSticky"},[n("div",{staticClass:"openMobileFilterWrapper",class:{menuBtnClicked:e.mobileFilterVis},on:{click:function(r){e.mobileFilterVis=!e.mobileFilterVis}}},[n("div",{staticClass:"whitebar"}),e._v(" "),n("img",{staticClass:"openMobileFilter",attrs:{src:t(967),alt:"Filter"}})]),e._v(" "),n("div",{staticClass:"filterContWrapper"},[n("div",{staticClass:"clearFilters"},[n("span",{staticClass:"text",on:{click:function(r){return e.removeFilters()}}},[e._v("CLEAR FILTERS")]),n("span",{staticClass:"hm"},[e._v(e._s(e.stringFilterCount))]),e._v(" "),n("svg",{staticClass:"closeMobileFilter",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},on:{click:function(r){e.mobileFilterVis=!1}}},[n("path",{attrs:{fill:"#777",d:"M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"}})])]),e._v(" "),n("span",{staticClass:"filterTitle"},[e._v("Type")]),e._v(" "),n("div",{staticClass:"filterCardWrapper"},[n("div",{staticClass:"filtercard filterType",class:{selected:e.typeFilters.includes("red")},on:{click:function(r){return e.filterClick(e.typeFilters,"red")}}},[n("img",{attrs:{src:t(968),alt:"Red Wine"}}),e._v("\n              RED\n            ")]),e._v(" "),n("div",{staticClass:"filtercard filterType",class:{selected:e.typeFilters.includes("white")},on:{click:function(r){return e.filterClick(e.typeFilters,"white")}}},[n("img",{attrs:{src:t(969),alt:"White Wine"}}),e._v("\n              WHITE\n            ")]),e._v(" "),n("div",{staticClass:"filtercard filterType",class:{selected:e.typeFilters.includes("champ")},on:{click:function(r){return e.filterClick(e.typeFilters,"champ")}}},[n("img",{attrs:{src:t(970),alt:"Champagne"}}),e._v("\n              CHAMPAGNE\n            ")]),e._v(" "),n("div",{staticClass:"filtercard filterType",class:{selected:e.typeFilters.includes("port")},on:{click:function(r){return e.filterClick(e.typeFilters,"port")}}},[n("img",{attrs:{src:t(971),alt:"Port Wine"}}),e._v("\n              PORT\n            ")])]),e._v(" "),n("span",{staticClass:"filterTitle"},[e._v("Country")]),e._v(" "),n("inputsFilterSelect",{attrs:{name:"Country",placeholder:"Select countries ...",options:e.countryFiltersUsable},on:{selectionChecked:e.selectionEventParserCountry}}),e._v(" "),n("span",{staticClass:"filterTitle"},[e._v("Vintage")]),e._v(" "),n("inputsFilterSelect",{attrs:{name:"Vintage",placeholder:"Select vintages ...",options:e.vintageFiltersUsable},on:{selectionChecked:e.selectionEventParserVintage}})],1)])]),e._v(" "),n("main",{staticClass:"wineCardMain"},[n("div",{staticClass:"wineCardWrapper",style:{"grid-template-columns":"repeat(auto-fill, minmax(max(665px, 100%/3), 1fr))"}},[e._l(e.visibleCrowdfunds,(function(e){return n("CrowdCard",{key:e.slug.current,attrs:{"crowd-f":e}})})),e._v(" "),n("div",{staticClass:"borderhiderL"})],2)])])])}),n,!1,null,"642b8b9e",null);r.default=component.exports;installComponents(component,{CrowdCard:t(933).default})},912:function(e,r,t){"use strict";function n(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}t.d(r,"a",(function(){return n}))},913:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));encodeURIComponent;const n=String.raw||((e,...r)=>{const t=e.length-1;return e.slice(0,t).reduce(((e,t,n)=>e+t+r[n]),"")+e[t]})},914:function(e,r,t){var content=t(921);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(72).default)("594a07a4",content,!0,{sourceMap:!1})},920:function(e,r,t){"use strict";t(914)},921:function(e,r,t){var n=t(71)(!1);n.push([e.i,'.wrapperCrowdCard{height:730px;display:grid;grid-template-columns:55% 45%;grid-template-rows:65% 35%;grid-template-areas:"info image" "crowdInfo crowdInfo";padding:45px;box-sizing:border-box;border-right:1px solid #ccc;border-bottom:1px solid #ccc;color:#333;background-color:#fff;font-size:max(1em,12px)}@media screen and (max-height:950px),screen and (max-width:1330px){.wrapperCrowdCard{height:680px}}@media screen and (max-height:900px),screen and (max-width:1180px){.wrapperCrowdCard{height:630px}}@media screen and (max-width:1085px){.wrapperCrowdCard{height:auto}}@media screen and (max-width:525px){.wrapperCrowdCard{padding:32px 32px 35px}}@media screen and (max-width:435px){.wrapperCrowdCard{padding:25px 25px 27px}}.wrapperCrowdCard .info{display:flex;flex-direction:column;margin-right:10px}.wrapperCrowdCard .info>*{margin-bottom:10px}.wrapperCrowdCard .info .title{position:relative;margin-bottom:5px}.wrapperCrowdCard .info .title a{text-decoration:none;color:#333}.wrapperCrowdCard .info .title .titleText{font-size:max(2.875em,32px);font-family:"Roslindale"}.wrapperCrowdCard .info .title .linkArrow{font-size:1.2em;position:absolute;top:15px;margin-left:5px;color:#777}.wrapperCrowdCard .info .timer{margin-top:10px;margin-bottom:20px;color:#777;font-size:1.2em}@media screen and (max-width:643px){.wrapperCrowdCard .info .timer{margin-top:0;margin-bottom:15px}}.wrapperCrowdCard .info .timer .time{font-size:1.1em;color:#333}.wrapperCrowdCard .info .shortInfo{color:#777;margin-bottom:20px;margin-top:15px}.wrapperCrowdCard .info .infoItem{font-size:1.05em;color:#333}.wrapperCrowdCard .info .meta{display:flex;flex-direction:column}.wrapperCrowdCard .info .catName{color:#777;text-transform:uppercase;font-size:1.05em}.wrapperCrowdCard .info .country{display:flex;align-items:center;margin-bottom:20px}.wrapperCrowdCard .info .country .countryName{text-transform:uppercase;color:#d6a11a;margin-left:15px;font-size:max(1.125em,14px)}.wrapperCrowdCard .info .country .flag img{border:1px solid rgba(0,0,0,.2);max-width:39px;height:39px;border-radius:50%}@media screen and (max-width:643px){.wrapperCrowdCard .info .country .flag img{height:25px;max-width:25px}}.wrapperCrowdCard .image{margin-left:20px}.wrapperCrowdCard .image .thumbnail{width:100%;height:100%}@media screen and (max-width:1085px){.wrapperCrowdCard .image .thumbnail{max-height:275px}}.wrapperCrowdCard .image .thumbnail img{width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.wrapperCrowdCard .crowdInfo{grid-area:crowdInfo;display:flex;flex-direction:column;justify-content:flex-end}@media screen and (max-width:1085px){.wrapperCrowdCard .crowdInfo{margin-top:40px}}.wrapperCrowdCard .crowdInfo .rest{display:flex}.wrapperCrowdCard .crowdInfo .rest .purchaseInfo{display:flex;flex-direction:column;justify-content:flex-start;margin-right:40px}@media screen and (max-width:435px){.wrapperCrowdCard .crowdInfo .rest .purchaseInfo{margin-right:0;padding-right:20px;box-sizing:border-box}}.wrapperCrowdCard .crowdInfo .rest .purchaseInfo .case{font-size:.875em;color:#777;padding-bottom:5px;padding-right:10px;box-sizing:border-box}.wrapperCrowdCard .crowdInfo .rest .purchaseInfo .price{font-family:"Roslindale";font-size:3.5em}@media screen and (max-width:400px){.wrapperCrowdCard .crowdInfo .rest .purchaseInfo .price{line-height:.7;margin-top:5px}}.wrapperCrowdCard .crowdInfo .rest .purchaseInfo .price .smaller{font-family:"Roslindale";font-size:.5em}.wrapperCrowdCard .crowdInfo .rest .buy .btns{padding-bottom:10px;display:flex}.wrapperCrowdCard .crowdInfo .rest .buy .btns button{min-width:0;padding-left:26px;padding-right:26px;height:59px!important;font-size:1em}@media screen and (max-height:950px),screen and (max-width:1330px){.wrapperCrowdCard .crowdInfo .rest .buy .btns button{height:52px!important}}@media screen and (max-height:900px),screen and (max-width:1180px){.wrapperCrowdCard .crowdInfo .rest .buy .btns button{height:49px!important}}@media screen and (max-width:643px){.wrapperCrowdCard .crowdInfo .rest .buy .btns button{height:42px!important}}@media screen and (max-width:525px){.wrapperCrowdCard .crowdInfo .rest .buy .btns button{padding-left:20px!important;padding-right:20px!important;min-width:0!important;min-height:0!important}}.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight{color:#8b8b8b;border-color:#adadad;border-width:1px;margin-left:12px}.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight:after{content:"MORE INFO";position:relative;bottom:auto;left:auto;width:auto;background-color:transparent}@media screen and (max-width:525px){.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight:after{content:"MORE"}}@media screen and (max-width:435px){.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight:after{content:"ℹ";font-size:1.6em}}.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight:hover{color:#fff;border-color:#fff}@media screen and (max-width:435px){.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight{padding:0!important;width:39px}}.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase{display:flex}.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase .amount{border-top-left-radius:7px;border-bottom-left-radius:7px;border:1px solid #adadad;width:40px;color:#777;font-size:1.5em;text-align:center}.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase .amount:focus{border:1px solid #8b8b8b;outline:none}@media screen and (max-width:525px){.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase .amount{width:30px;font-size:1.2em}}.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase .button{border-top-left-radius:0;border-bottom-left-radius:0}.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer{font-size:.81em;display:flex;align-items:flex-start}.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer input{margin-top:1px;margin-right:8px;filter:saturate(0);cursor:pointer}@media screen and (max-height:900px),screen and (max-width:1180px){.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer input{margin-top:0}}.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer label{cursor:pointer}.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer label a{color:#d6a11a}.wrapperCrowdCard .crowdInfo .progress{display:flex;flex-direction:column;justify-content:flex-end;font-size:.875em;margin-top:20px;margin-bottom:5px;position:relative;color:#777}@media screen and (max-width:400px){.wrapperCrowdCard .crowdInfo .progress{margin-top:35px}}.wrapperCrowdCard .crowdInfo .progress .progressBar{margin-top:5px;width:100%;border-radius:0;height:5px;position:relative;background-color:#e9e9e9;display:flex}.wrapperCrowdCard .crowdInfo .progress .progressBar .value{height:100%;background-color:#d6a11a;display:inline-block}.wrapperCrowdCard .crowdInfo .progress .progressBar .label{position:absolute;bottom:10px;color:#777}.wrapperCrowdCard .crowdInfo .progress .progressBar .labelMimax{position:absolute;top:10px;color:#777}.wrapperCrowdCard .crowdInfo .progress .progressBar .max{right:0}.wrapperCrowdCard .crowdInfo .progress .progress::-webkit-progress-bar{background-color:#e9e9e9}.wrapperCrowdCard .crowdInfo .progress .progress::-webkit-progress-value{background-color:#d6a11a!important}.wrapperCrowdCard .crowdInfo .progress .progress::-moz-progress-bar{background-color:#d6a11a!important}.filler{background-color:transparent;border:none}@media screen and (max-width:1085px){.filler{height:0;padding:0}}',""]),e.exports=n},931:function(e,r,t){e.exports=t.p+"img/globe.9c701a5.png"},933:function(e,r,t){"use strict";t.r(r);var n=t(23),o=(t(131),t(79),t(6));t(40);function d(e){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function e(r){var t,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),t=200*Math.random()+80,n=100*Math.random()+20,o={running:!0,price:Math.floor(t),min:Math.floor(n/Math.random()*10),max:Math.floor(n),current:Math.floor(n-n/(7*Math.random()+1)),maxBuy:5},e.next=6,new Promise((function(e){setTimeout((function(){e(o)}),500)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var c=o.a.extend({name:"CrowdfundCard",props:{crowdF:{type:Object,required:!0},onMerchantPage:{type:Boolean,required:!1,default:!1}},data:function(){return{cfbInfo:{},amount:1,timeLeft:"",timeToStart:"",started:!1,ended:!0}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d("asdasd");case 2:t=r.sent,e.cfbInfo=t;case 4:case"end":return r.stop()}}),r)})))()},mounted:function(){this.getTimeLeft()},methods:{getTimeLeft:function(){var e=this;setInterval((function(){var r=(new Date).getTime(),t=Date.parse(e.crowdF.start)-r,n=Date.parse(e.crowdF.end)-r;if(t>0){e.ended=!1;var o=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%36e5/6e4)+1;e.timeToStart=o+"d "+d+"h "+l+"m "}else if(n>0){e.started=!0,e.ended=!1;var c=Math.floor(n/864e5),w=Math.floor(n%864e5/36e5),m=Math.floor(n%36e5/6e4)+1;e.timeLeft=c+"d "+w+"h "+m+"m "}else e.ended=!0}),1e3)}}}),w=(t(920),t(43)),component=Object(w.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return"filler"!==e.crowdF.slug.current.substring(0,6)?t("div",{staticClass:"wrapperCrowdCard"},[t("div",{staticClass:"info"},[t("div",{staticClass:"title"},[t("NuxtLink",{attrs:{to:"/wine/"+e.crowdF.merchant.slug.current}},[t("span",{staticClass:"titleText"},[e._v(e._s(e.crowdF.merchant.title))]),t("span",{staticClass:"linkArrow"},[e._v("↗")])])],1),e._v(" "),t("div",{staticClass:"country"},[t("portableImage",{staticClass:"flag",attrs:{asset:e.crowdF.merchant.flag.asset,"new-height":"40",alt:e.crowdF.country+" flag"}}),e._v(" "),t("span",{staticClass:"countryName"},[e._v(e._s(e.crowdF.country))])],1),e._v(" "),t("div",{staticClass:"variety meta"},[t("span",{staticClass:"catName"},[e._v("Variety:")]),t("span",{staticClass:"infoItem"},[e._v(e._s(e.crowdF.variety))])]),e._v(" "),t("div",{staticClass:"type meta"},[t("span",{staticClass:"catName"},[e._v("Type:")]),t("span",{staticClass:"infoItem"},[e._v(e._s(e.crowdF.type))])]),e._v(" "),t("div",{staticClass:"vintage meta"},[t("span",{staticClass:"catName"},[e._v("Vintage:")]),t("span",{staticClass:"infoItem"},[e._v(e._s(e.crowdF.vintage))])]),e._v(" "),t("div",{staticClass:"date meta"},[t("span",{staticClass:"catName"},[e._v("Delivery Snapshot Date:")]),t("span",{staticClass:"infoItem"},[e._v(e._s(e.crowdF.date))])]),e._v(" "),t("div",{staticClass:"tc meta"},[t("span",{staticClass:"catName"},[e._v("Delivery Information:")]),t("span",{staticClass:"infoItem"},[e._v(e._s(e.crowdF.tc))])]),e._v(" "),t("div",{staticClass:"timer"},[t("span",{staticClass:"timerLabel"},[e._v(e._s(e.ended?"ENDED":e.started?"TIME LEFT:":"STARTS IN:"))]),t("span",{staticClass:"time"},[e._v("\n        "+e._s(e.ended?"":e.started?e.timeLeft:e.timeToStart))])])]),e._v(" "),t("div",{staticClass:"image"},[t("portableImage",{staticClass:"thumbnail",attrs:{asset:e.crowdF.cardImage.asset,"new-height":"500",alt:e.crowdF.merchant.title+" Crowdloan Thumbnail"}})],1),e._v(" "),t("div",{staticClass:"crowdInfo"},[t("div",{staticClass:"rest"},[t("div",{staticClass:"purchaseInfo"},[t("span",{staticClass:"case"},[e._v("Case Of 6 Bottles")]),e._v(" "),t("span",{staticClass:"price"},[e._v(e._s(e.cfbInfo.price)+" "),t("span",{staticClass:"smaller"},[e._v("UST")])])]),e._v(" "),t("div",{staticClass:"buy"},[t("div",{staticClass:"btns"},[t("form",{staticClass:"purchase"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"amount",attrs:{type:"text"},domProps:{value:e.amount},on:{input:function(r){r.target.composing||(e.amount=r.target.value)}}}),e._v(" "),t("button",{staticClass:"button"},[e._v("BUY NOW")])]),e._v(" "),e.onMerchantPage?t("button",{staticClass:"buttonLight",on:{click:function(r){return e.$emit("infoClicked",e.crowdF.slug.current)}}}):t("NuxtLink",{attrs:{to:{path:"/wine/"+e.crowdF.merchant.slug.current,hash:"#"+e.crowdF.slug.current+"details"}}},[t("button",{staticClass:"buttonLight"})])],1),e._v(" "),t("span",{staticClass:"disclaimer"},[t("input",{attrs:{id:e.crowdF.slug.current,type:"checkbox"}}),t("label",{attrs:{for:e.crowdF.slug.current}},[e._v("By buying you agree to the\n            "),t("a",{attrs:{href:"https://docs.minerva.market/legal-documents/minerva-privacy-policy",target:"_blank"}},[e._v("Terms and Conditions")]),e._v("."),t("br"),e._v("Delivery included in price")])])])]),e._v(" "),t("div",{staticClass:"progress"},[e._v("\n      FUNDED\n      "),t("div",{staticClass:"progressBar"},[e.cfbInfo.current/e.cfbInfo.max>.1?t("span",{staticClass:"value",style:{width:e.cfbInfo.current/e.cfbInfo.max*100+"%"}},[t("span",{staticClass:"label",style:{right:99-e.cfbInfo.current/e.cfbInfo.max*100+"%"}},[e._v(e._s(e.cfbInfo.current))]),e._v(" "),t("span",{staticClass:"labelMimax max"},[e._v("MAX: "+e._s(e.cfbInfo.max)+" Cases")])]):e._e()])])])]):t("div",{staticClass:"wrapperCrowdCard filler"})}),[],!1,null,null,null);r.default=component.exports},940:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return h}));var n,o,d=t(912),l=t(23),c=t(950),w=(t(79),t(40),t(165),t(501),t(913));function m(e){for(var r=(new Date).getTime(),t=[],i=0;i<e.length;i++){Date.parse(e[i].end.toString())-r<-6e4&&(t.push(e[i]),e.splice(i--,1))}return e.push.apply(e,Object(c.a)(t.reverse())),e}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(regeneratorRuntime.mark((function e(r){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(w.a)(n||(n=Object(d.a)(['*[_type == "crowdfund" ]{merchant->{flag,title,slug},start,end,contract,cardImage,country,date,shortInfo,slug,tc,type,variety,vintage}  | order(start asc)']))),e.next=3,r.fetch(t);case 3:return o=e.sent,e.abrupt("return",m(o));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,r){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(regeneratorRuntime.mark((function e(r,t){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(w.a)(o||(o=Object(d.a)(['*[_type == "crowdfund" && merchant._ref == "','"]{merchant->{flag,title,slug},detail1,detail2,detail3,artwork,start,end,contract,cardImage,country,acidity,body,fruitiness,date,shortInfo,slug,tc,type,variety,vintage}  | order(start asc)'])),r),e.next=3,t.fetch(n);case 3:return l=e.sent,e.abrupt("return",m(l));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},950:function(e,r,t){"use strict";t.d(r,"a",(function(){return l}));var n=t(250);var o=t(296),d=t(188);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(o.a)(e)||Object(d.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},953:function(e,r,t){var content=t(974);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(72).default)("e5e2019c",content,!0,{sourceMap:!1})},967:function(e,r){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmZpbHRlci1zb2xpZDwvdGl0bGU+CiAgICA8cGF0aCBmaWxsPSIjZDZhMTFhIiBjbGFzcz0iY2xyLWktc29saWQgY2xyLWktc29saWQtcGF0aC0xIiBkPSJNMjIsMzNWMTkuNUwzMy40Nyw4QTEuODEsMS44MSwwLDAsMCwzNCw2LjdWNWExLDEsMCwwLDAtMS0xSDNBMSwxLDAsMCwwLDIsNVY2LjY3YTEuNzksMS43OSwwLDAsMCwuNTMsMS4yN0wxNCwxOS41OHYxMC4yWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNkNmExMWEiIGQ9Ik0zMy40OCw0aC0zMUEuNTIuNTIsMCwwLDAsMiw0LjUyVjYuMjRhMS4zMywxLjMzLDAsMCwwLC4zOS45NWwxMiwxMnYxMGw3LjI1LDMuNjFWMTkuMTdsMTItMTJBMS4zNSwxLjM1LDAsMCwwLDM0LDYuMjZWNC41MkEuNTIuNTIsMCwwLDAsMzMuNDgsNFoiIGNsYXNzPSJjbHItaS1zb2xpZCBjbHItaS1zb2xpZC1wYXRoLTEiPjwvcGF0aD4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbC1vcGFjaXR5PSIwIi8+Cjwvc3ZnPg=="},968:function(e,r,t){e.exports=t.p+"img/red_type.8d54eb7.jpg"},969:function(e,r,t){e.exports=t.p+"img/white_type.8abf9d8.jpg"},970:function(e,r,t){e.exports=t.p+"img/champ_type.daae32e.jpg"},971:function(e,r,t){e.exports=t.p+"img/port_type.b21678f.jpg"},972:function(e,r,t){e.exports=t.p+"img/wine_bottle_filled_bright.d0bcaa7.png"},973:function(e,r,t){"use strict";t(953)},974:function(e,r,t){var n=t(71),o=t(505),d=t(975),l=t(976),c=n(!1),w=o(d),m=o(l);c.push([e.i,'@media screen and (max-width:1330px){.wrapperWinePage[data-v-642b8b9e]{font-size:.9em}}@media screen and (max-width:1180px){.wrapperWinePage[data-v-642b8b9e]{font-size:.8em}}.wrapperWinePage .clubHeader[data-v-642b8b9e]{position:relative;background-color:#15364a;height:310px;display:flex;align-items:flex-end;margin-top:-1px;padding-bottom:20px}@media screen and (max-width:700px){.wrapperWinePage .clubHeader[data-v-642b8b9e]{height:300px;font-size:1.2em}}@media screen and (max-width:530px){.wrapperWinePage .clubHeader[data-v-642b8b9e]{display:none}}@media screen and (max-height:950px)and (min-width:700px){.wrapperWinePage .clubHeader[data-v-642b8b9e]{height:280px}}@media screen and (max-height:900px){.wrapperWinePage .clubHeader[data-v-642b8b9e]{height:260px}}.wrapperWinePage .clubHeader .headerContent[data-v-642b8b9e]{margin-left:50px;z-index:7}@media screen and (max-width:750px){.wrapperWinePage .clubHeader .headerContent[data-v-642b8b9e]{margin-left:30px}}@media screen and (max-width:750px){.wrapperWinePage .clubHeader .headerContent .walletComp[data-v-642b8b9e]{display:none}}.wrapperWinePage .clubHeader .headerContent h1[data-v-642b8b9e]{margin-bottom:25px}.wrapperWinePage .clubHeader .barrelWrapper[data-v-642b8b9e]{position:absolute;z-index:5;bottom:0;left:300px;overflow:hidden;width:715px}@media screen and (max-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper[data-v-642b8b9e]{right:0;left:auto}}@media screen and (max-height:950px)and (min-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper[data-v-642b8b9e]{left:260px}}@media screen and (max-height:900px)and (min-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper[data-v-642b8b9e]{left:215px}}.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-642b8b9e]{z-index:-1;position:relative;bottom:-300px;right:20px;width:375px;transform:scaleX(-1)}@media screen and (max-height:950px){.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-642b8b9e]{width:335px;bottom:-275px}}@media screen and (max-height:900px){.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-642b8b9e]{width:305px;bottom:-250px}}@media screen and (max-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-642b8b9e]{width:350px;bottom:-250px;right:-100px}}@media screen and (max-width:1050px)and (max-height:950px){.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-642b8b9e]{width:335px;bottom:-275px;right:-140px}}.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-642b8b9e]{z-index:0;position:relative;bottom:-170px;right:-180px;transform:rotate(-12deg) scaleX(-1);width:310px}@media screen and (max-height:950px){.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-642b8b9e]{width:270px;bottom:-150px;right:-160px}}@media screen and (max-height:900px){.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-642b8b9e]{width:250px;bottom:-140px}}@media screen and (max-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-642b8b9e]{width:290px;bottom:-148px;right:-310px}}@media screen and (max-width:1050px)and (max-height:950px){.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-642b8b9e]{width:250px;bottom:-120px}}.wrapperWinePage .mainCont[data-v-642b8b9e]{background-color:#fff;display:flex;position:relative;height:100%;contain:paint}.wrapperWinePage .mainCont .overlay[data-v-642b8b9e]{display:none;position:absolute;z-index:2;left:0;top:0;width:100%;height:100%;background-color:transparent;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}@media screen and (max-width:1700px){.wrapperWinePage .mainCont .overlayVis[data-v-642b8b9e]{display:block}}@media screen and (max-width:1700px){.wrapperWinePage .mainCont .mobileFilterVis[data-v-642b8b9e]{right:0!important;box-shadow:-5px 2px 15px -3px rgba(0,0,0,.07)}}.wrapperWinePage .mainCont .filter[data-v-642b8b9e]{position:relative;overflow:visible!important;display:unset}@media screen and (max-width:1700px){.wrapperWinePage .mainCont .filter[data-v-642b8b9e]{position:absolute;transition:right .2s ease;z-index:5;top:0;right:-370px;height:100%}}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter[data-v-642b8b9e]{right:-100vw}}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .menuBtnClicked[data-v-642b8b9e]{opacity:0!important}}.wrapperWinePage .mainCont .filter .wrapperSticky[data-v-642b8b9e]{height:100vh;position:sticky;position:-webkit-sticky;top:0}@media screen and (max-width:530px){.wrapperWinePage .mainCont .filter .wrapperSticky[data-v-642b8b9e]{top:127px}}@media screen and (max-height:855px)and (max-width:530px),screen and (max-width:417px){.wrapperWinePage .mainCont .filter .wrapperSticky[data-v-642b8b9e]{top:100px}}.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper[data-v-642b8b9e]{position:absolute;top:23px;left:-69px;transition:opacity .15s ease;opacity:1;display:none;width:70px;height:60px;border-bottom-left-radius:12px;border-top-left-radius:12px;background-color:#fcfcfc;z-index:5;box-sizing:border-box;border:1px solid rgba(0,0,0,.2);border-right-color:#fcfcfc;box-shadow:-5px 2px 15px -3px rgba(0,0,0,.07);cursor:pointer}@media screen and (max-width:1700px){.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper[data-v-642b8b9e]{display:flex;justify-content:center;align-items:center}}@media screen and (max-width:435px){.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper[data-v-642b8b9e]{width:55px;height:50px;top:33px;left:-54px}}.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper .whitebar[data-v-642b8b9e]{position:absolute;right:-4px;top:0;height:58px;width:9px;background-color:#fcfcfc}@media screen and (max-width:435px){.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper .whitebar[data-v-642b8b9e]{height:48px}}.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper .openMobileFilter[data-v-642b8b9e]{width:45px}@media screen and (max-width:435px){.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper .openMobileFilter[data-v-642b8b9e]{width:35px}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-642b8b9e]{background-color:#fcfcfc;max-width:370px;min-width:370px;display:flex;box-sizing:border-box;flex-direction:column;align-items:center;padding-top:53px;padding-bottom:20px;overflow-y:scroll;height:100%;direction:rtl;color:#333}@media screen and (max-width:1700px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-642b8b9e]{direction:ltr;border-right:none;border-left:1px solid rgba(0,0,0,.2)}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-642b8b9e]::-webkit-scrollbar-track{border-radius:10px;background-color:#fcfcfc}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-642b8b9e]::-webkit-scrollbar{width:5px;background-color:#f5f5f5}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-642b8b9e]::-webkit-scrollbar-thumb{border-radius:20px;background-color:rgba(0,0,0,.2)}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper>*[data-v-642b8b9e]{width:294px;margin-bottom:23px;direction:ltr}@media screen and (max-width:325px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper>*[data-v-642b8b9e]{width:90%}}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-642b8b9e]{max-width:100vw;min-width:100vw}}@media screen and (max-width:530px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-642b8b9e]{padding-bottom:127px}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters[data-v-642b8b9e]{width:100%;display:flex;box-sizing:border-box;justify-content:space-between;align-items:flex-end;padding:0 26px 11px;border-bottom:1px solid rgba(0,0,0,.2);position:relative}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .text[data-v-642b8b9e]{cursor:pointer;font-size:16px!important}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .hm[data-v-642b8b9e]{font-size:16px!important;box-sizing:border-box;color:#777}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .hm[data-v-642b8b9e]{margin-left:20px}}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters[data-v-642b8b9e]{justify-content:start}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .closeMobileFilter[data-v-642b8b9e]{display:none;position:absolute;top:-20px;right:30px}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .closeMobileFilter[data-v-642b8b9e]{display:block}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterTitle[data-v-642b8b9e]{font-family:"Roslindale";font-size:2.5em}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper[data-v-642b8b9e]{display:grid;grid-template-columns:repeat(2,137px);grid-row-gap:23px;row-gap:23px;grid-column-gap:20px;-moz-column-gap:20px;column-gap:20px}@media screen and (max-width:325px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper[data-v-642b8b9e]{grid-template-columns:repeat(2,calc(46vw - 10px));grid-row-gap:15px;row-gap:15px;grid-column-gap:15px;-moz-column-gap:15px;column-gap:15px}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filtercard[data-v-642b8b9e]{background-color:#fff;padding:16px 0 11px;border-radius:12px;box-sizing:border-box;border:1px solid rgba(0,0,0,.2);font-size:14.5px!important;cursor:pointer;overflow:hidden}@media screen and (max-width:530px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filtercard[data-v-642b8b9e]{padding:21px 0}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .selected[data-v-642b8b9e]{border:1px solid rgba(0,0,0,.75)}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filterType[data-v-642b8b9e]{min-width:137px;max-width:137px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}@media screen and (max-width:325px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filterType[data-v-642b8b9e]{min-width:calc(46vw - 10px);max-width:calc(46vw - 10px)}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filterType img[data-v-642b8b9e]{margin-bottom:10px}@media screen and (max-width:530px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filterType img[data-v-642b8b9e]{display:none}}.wrapperWinePage .mainCont .wineCardMain[data-v-642b8b9e]{width:100%;z-index:0;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;background-position:0 100%;min-height:100vh}.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper[data-v-642b8b9e]{display:grid}@media screen and (max-height:950px),screen and (max-width:1330px){.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper[data-v-642b8b9e]{grid-template-columns:repeat(auto-fill,minmax(577px,1fr))!important}}@media screen and (max-height:900px),screen and (max-width:1180px){.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper[data-v-642b8b9e]{grid-template-columns:repeat(auto-fill,minmax(max(543px,50%),1fr))!important}}@media screen and (max-width:1085px){.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper[data-v-642b8b9e]{display:flex;flex-direction:column}}.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper .borderhiderL[data-v-642b8b9e]{width:1px;height:100%;position:absolute;background-color:#c1c6cb;left:370px;top:0}@media screen and (max-width:1700px){.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper .borderhiderL[data-v-642b8b9e]{left:0}}.webp .wineCardMain[data-v-642b8b9e]{background-image:url('+w+")}.no-webp .wineCardMain[data-v-642b8b9e]{background-image:url("+m+")}",""]),e.exports=c},975:function(e,r,t){e.exports=t.p+"img/vines_full.4a88203.webp"},976:function(e,r,t){e.exports=t.p+"img/vines_full.131818d.jpg"}}]);