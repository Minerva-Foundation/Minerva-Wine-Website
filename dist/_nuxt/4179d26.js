(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1028:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"clubHeader"},[n("div",{staticClass:"headerContent"},[n("div",{staticClass:"customh2"},[e._v("Curated")]),e._v(" "),n("h1",{staticClass:"customh1"},[e._v("Quality Wines")])]),e._v(" "),n("div",{staticClass:"barrelWrapper"},[n("img",{staticClass:"bottle",attrs:{src:r(954),alt:"Wine Bottle"}}),e._v(" "),n("img",{staticClass:"globe",attrs:{src:r(931),alt:"Globe"}})])])}],o=(r(110),r(92),r(111),r(80),r(59),r(73),r(132),r(133),r(93),r(23)),d=(r(38),r(165),r(134),r(135),r(58),r(503),r(79),r(5)),l=r(72),c=r(955);function f(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,d=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return d=e.done,e},e:function(e){l=!0,o=e},f:function(){try{d||null==r.return||r.return()}finally{if(l)throw o}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var m=d.a.extend({asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app.$sanity,t.next=3,Object(c.a)(r);case 3:return n=t.sent,t.abrupt("return",{crowdfunds:n});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{walletController:{},typeFilters:[],countryFilters:[],vintageFilters:[],appliedFilterCount:0,mobileFilterVis:!1,countries:[],vintages:[],crowdfunds:[],filterFullyInView:!1,visibleCrowdfunds:[]}},computed:{stringFilterCount:function(){return this.appliedFilterCount>=10?this.appliedFilterCount.toString():"0"+this.appliedFilterCount.toString()},countryFiltersUsable:function(){var e,t={},r=f(this.countries);try{for(r.s();!(e=r.n()).done;){var n=e.value;t[n]=this.countryFilters.includes(n)}}catch(e){r.e(e)}finally{r.f()}return t},vintageFiltersUsable:function(){var e,t={},r=f(this.vintages);try{for(r.s();!(e=r.n()).done;){var n=e.value;t[n]=this.vintageFilters.includes(n)}}catch(e){r.e(e)}finally{r.f()}return t}},mounted:function(){this.calcVisibleCrowdfunds(),window.addEventListener("resize",this.calcVisibleCrowdfunds);var e,t=f(this.crowdfunds);try{for(t.s();!(e=t.n()).done;){var r=e.value;this.countries.includes(r.country.toLowerCase())||this.countries.push(r.country.toLowerCase()),this.vintages.includes(r.vintage.toLowerCase())||this.vintages.push(r.vintage.toLowerCase())}}catch(e){t.e(e)}finally{t.f()}var n=this,o=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?n.filterFullyInView=!0:n.filterFullyInView=!1}))}),{threshold:.99}),d=this.$el.querySelector(".wrapperSticky");d&&o.observe(d)},created:function(){var e=this;void 0===Object(l.a)()?Object(l.b)().then((function(){e.walletController=Object(l.a)()})):this.walletController=Object(l.a)()},beforeDestroy:function(){window.removeEventListener("resize",this.calcVisibleCrowdfunds)},methods:{filterClick:function(filter,e){var t=filter.indexOf(e);if(t>-1?(filter.splice(t,1),this.appliedFilterCount--):(filter.push(e),this.appliedFilterCount++),this.filterFullyInView){var r=this.$el.querySelector(".wineCardWrapper");r&&r.scrollIntoView()}this.calcVisibleCrowdfunds()},removeFilters:function(){this.typeFilters=[],this.countryFilters=[],this.vintageFilters=[],this.appliedFilterCount=0,this.calcVisibleCrowdfunds()},selectionEventParserCountry:function(e){this.filterClick(this.countryFilters,e.option)},selectionEventParserVintage:function(e){this.filterClick(this.vintageFilters,e.option)},visibleWithFilters:function(e){return(0===this.typeFilters.length||this.typeFilters.includes(e.type.toLowerCase()))&&(0===this.countryFilters.length||this.countryFilters.includes(e.country.toLowerCase()))&&(0===this.vintageFilters.length||this.vintageFilters.includes(e.vintage.toLowerCase()))},calcVisibleCrowdfunds:function(){var e=[],t=0,r=window.innerWidth,n=this;function o(i){return r<2380?i>=4&&(i+2)%6==0&&t<n.crowdfunds.length||i>=4&&(i+1)%6==0&&t<n.crowdfunds.length:((i+3)%6==0||(i+2)%6==0)&&t<n.crowdfunds.length-3}for(var i=1;t<this.crowdfunds.length;i++)if(o(i))e.push({slug:{current:"filler"+i}});else{var d=this.crowdfunds[t++];d&&this.visibleWithFilters(d)&&e.push(d)}this.visibleCrowdfunds=e}}}),x=(r(992),r(37)),component=Object(x.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapperWinePage"},[e._m(0),e._v(" "),n("div",{staticClass:"mainCont"},[n("div",{staticClass:"overlay",class:{overlayVis:e.mobileFilterVis},on:{click:function(t){e.mobileFilterVis=!1}}}),e._v(" "),n("aside",{staticClass:"filter",class:{mobileFilterVis:e.mobileFilterVis}},[n("div",{staticClass:"wrapperSticky"},[n("div",{staticClass:"openMobileFilterWrapper",class:{menuBtnClicked:e.mobileFilterVis},on:{click:function(t){e.mobileFilterVis=!e.mobileFilterVis}}},[n("div",{staticClass:"whitebar"}),e._v(" "),n("img",{staticClass:"openMobileFilter",attrs:{src:r(937),alt:"Filter"}})]),e._v(" "),n("div",{staticClass:"filterContWrapper"},[n("div",{staticClass:"clearFilters"},[n("span",{staticClass:"text",on:{click:function(t){return e.removeFilters()}}},[e._v("CLEAR FILTERS")]),n("span",{staticClass:"hm"},[e._v(e._s(e.stringFilterCount))]),e._v(" "),n("svg",{staticClass:"closeMobileFilter",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},on:{click:function(t){e.mobileFilterVis=!1}}},[n("path",{attrs:{fill:"#777",d:"M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"}})])]),e._v(" "),n("span",{staticClass:"filterTitle"},[e._v("Type")]),e._v(" "),n("div",{staticClass:"filterCardWrapper"},[n("div",{staticClass:"filtercard filterType",class:{selected:e.typeFilters.includes("red")},on:{click:function(t){return e.filterClick(e.typeFilters,"red")}}},[n("img",{attrs:{src:r(988),alt:"Red Wine"}}),e._v("\n              RED\n            ")]),e._v(" "),n("div",{staticClass:"filtercard filterType",class:{selected:e.typeFilters.includes("white")},on:{click:function(t){return e.filterClick(e.typeFilters,"white")}}},[n("img",{attrs:{src:r(989),alt:"White Wine"}}),e._v("\n              WHITE\n            ")]),e._v(" "),n("div",{staticClass:"filtercard filterType",class:{selected:e.typeFilters.includes("champ")},on:{click:function(t){return e.filterClick(e.typeFilters,"champ")}}},[n("img",{attrs:{src:r(990),alt:"Champagne"}}),e._v("\n              CHAMPAGNE\n            ")]),e._v(" "),n("div",{staticClass:"filtercard filterType",class:{selected:e.typeFilters.includes("port")},on:{click:function(t){return e.filterClick(e.typeFilters,"port")}}},[n("img",{attrs:{src:r(991),alt:"Port Wine"}}),e._v("\n              PORT\n            ")])]),e._v(" "),n("span",{staticClass:"filterTitle"},[e._v("Country")]),e._v(" "),n("inputsFilterSelect",{attrs:{name:"Country",placeholder:"Select countries ...",options:e.countryFiltersUsable},on:{selectionChecked:e.selectionEventParserCountry}}),e._v(" "),n("span",{staticClass:"filterTitle"},[e._v("Vintage")]),e._v(" "),n("inputsFilterSelect",{attrs:{name:"Vintage",placeholder:"Select vintages ...",options:e.vintageFiltersUsable},on:{selectionChecked:e.selectionEventParserVintage}})],1)])]),e._v(" "),n("main",{staticClass:"wineCardMain"},[n("div",{staticClass:"wineCardWrapper",style:{"grid-template-columns":"repeat(auto-fill, minmax(max(665px, 100%/3), 1fr))"}},[e._l(e.visibleCrowdfunds,(function(e){return n("CrowdCard",{key:e.slug.current,attrs:{"crowd-f":e}})})),e._v(" "),n("div",{staticClass:"borderhiderL"})],2)])]),e._v(" "),n("ScrollTop")],1)}),n,!1,null,"5dc18fe6",null);t.default=component.exports;installComponents(component,{CrowdCard:r(933).default,ScrollTop:r(934).default})},921:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,"a",(function(){return n}))},922:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));encodeURIComponent;const n=String.raw||((e,...t)=>{const r=e.length-1;return e.slice(0,r).reduce(((e,r,n)=>e+r+t[n]),"")+e[r]})},931:function(e,t,r){e.exports=r.p+"img/globe.9c701a5.png"},937:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmZpbHRlci1zb2xpZDwvdGl0bGU+CiAgICA8cGF0aCBmaWxsPSIjZDZhMTFhIiBjbGFzcz0iY2xyLWktc29saWQgY2xyLWktc29saWQtcGF0aC0xIiBkPSJNMjIsMzNWMTkuNUwzMy40Nyw4QTEuODEsMS44MSwwLDAsMCwzNCw2LjdWNWExLDEsMCwwLDAtMS0xSDNBMSwxLDAsMCwwLDIsNVY2LjY3YTEuNzksMS43OSwwLDAsMCwuNTMsMS4yN0wxNCwxOS41OHYxMC4yWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNkNmExMWEiIGQ9Ik0zMy40OCw0aC0zMUEuNTIuNTIsMCwwLDAsMiw0LjUyVjYuMjRhMS4zMywxLjMzLDAsMCwwLC4zOS45NWwxMiwxMnYxMGw3LjI1LDMuNjFWMTkuMTdsMTItMTJBMS4zNSwxLjM1LDAsMCwwLDM0LDYuMjZWNC41MkEuNTIuNTIsMCwwLDAsMzMuNDgsNFoiIGNsYXNzPSJjbHItaS1zb2xpZCBjbHItaS1zb2xpZC1wYXRoLTEiPjwvcGF0aD4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbC1vcGFjaXR5PSIwIi8+Cjwvc3ZnPg=="},954:function(e,t,r){e.exports=r.p+"img/wine_bottle_filled_bright.d0bcaa7.png"},969:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(232);var o=r(298),d=r(167);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(o.a)(e)||Object(d.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},972:function(e,t,r){var content=r(993);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("0dbffb6a",content,!0,{sourceMap:!1})},988:function(e,t,r){e.exports=r.p+"img/red_type.8d54eb7.jpg"},989:function(e,t,r){e.exports=r.p+"img/white_type.8abf9d8.jpg"},990:function(e,t,r){e.exports=r.p+"img/champ_type.daae32e.jpg"},991:function(e,t,r){e.exports=r.p+"img/port_type.b21678f.jpg"},992:function(e,t,r){"use strict";r(972)},993:function(e,t,r){var n=r(65),o=r(507),d=r(994),l=r(995),c=n(!1),f=o(d),w=o(l);c.push([e.i,'.wrapperWinePage[data-v-5dc18fe6]{position:relative}@media screen and (max-width:1330px){.wrapperWinePage[data-v-5dc18fe6]{font-size:.9em}}@media screen and (max-width:1180px){.wrapperWinePage[data-v-5dc18fe6]{font-size:.8em}}.wrapperWinePage .clubHeader[data-v-5dc18fe6]{position:relative;background-color:#15364a;height:310px;display:flex;align-items:flex-end;margin-top:-1px;padding-bottom:20px}@media screen and (max-width:700px){.wrapperWinePage .clubHeader[data-v-5dc18fe6]{height:300px;font-size:1.2em}}@media screen and (max-width:530px){.wrapperWinePage .clubHeader[data-v-5dc18fe6]{display:none}}@media screen and (max-height:950px)and (min-width:700px){.wrapperWinePage .clubHeader[data-v-5dc18fe6]{height:280px}}@media screen and (max-height:900px){.wrapperWinePage .clubHeader[data-v-5dc18fe6]{height:260px}}.wrapperWinePage .clubHeader .headerContent[data-v-5dc18fe6]{margin-left:50px;z-index:7}@media screen and (max-width:750px){.wrapperWinePage .clubHeader .headerContent[data-v-5dc18fe6]{margin-left:30px}}@media screen and (max-width:750px){.wrapperWinePage .clubHeader .headerContent .walletComp[data-v-5dc18fe6]{display:none}}.wrapperWinePage .clubHeader .headerContent h1[data-v-5dc18fe6]{margin-bottom:25px}.wrapperWinePage .clubHeader .barrelWrapper[data-v-5dc18fe6]{position:absolute;z-index:5;bottom:0;left:300px;overflow:hidden;width:715px}@media screen and (max-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper[data-v-5dc18fe6]{right:0;left:auto}}@media screen and (max-height:950px)and (min-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper[data-v-5dc18fe6]{left:260px}}@media screen and (max-height:900px)and (min-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper[data-v-5dc18fe6]{left:215px}}.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-5dc18fe6]{z-index:-1;position:relative;bottom:-300px;right:20px;width:375px;transform:scaleX(-1)}@media screen and (max-height:950px){.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-5dc18fe6]{width:335px;bottom:-275px}}@media screen and (max-height:900px){.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-5dc18fe6]{width:305px;bottom:-250px}}@media screen and (max-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-5dc18fe6]{width:350px;bottom:-250px;right:-100px}}@media screen and (max-width:1050px)and (max-height:950px){.wrapperWinePage .clubHeader .barrelWrapper .globe[data-v-5dc18fe6]{width:335px;bottom:-275px;right:-140px}}.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-5dc18fe6]{z-index:0;position:relative;bottom:-170px;right:-180px;transform:rotate(-12deg) scaleX(-1);width:310px}@media screen and (max-height:950px){.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-5dc18fe6]{width:270px;bottom:-150px;right:-160px}}@media screen and (max-height:900px){.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-5dc18fe6]{width:250px;bottom:-140px}}@media screen and (max-width:1050px){.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-5dc18fe6]{width:290px;bottom:-148px;right:-310px}}@media screen and (max-width:1050px)and (max-height:950px){.wrapperWinePage .clubHeader .barrelWrapper .bottle[data-v-5dc18fe6]{width:250px;bottom:-120px}}.wrapperWinePage .mainCont[data-v-5dc18fe6]{background-color:#fff;display:flex;position:relative;height:100%;contain:paint}.wrapperWinePage .mainCont .overlay[data-v-5dc18fe6]{display:none;position:absolute;z-index:2;left:0;top:0;width:100%;height:100%;background-color:transparent;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}@media screen and (max-width:1714px){.wrapperWinePage .mainCont .overlayVis[data-v-5dc18fe6]{display:block}}@media screen and (max-width:1714px){.wrapperWinePage .mainCont .mobileFilterVis[data-v-5dc18fe6]{right:0!important;box-shadow:-5px 2px 15px -3px rgba(0,0,0,.07)}}.wrapperWinePage .mainCont .filter[data-v-5dc18fe6]{position:relative;overflow:visible!important;display:unset}@media screen and (max-width:1714px){.wrapperWinePage .mainCont .filter[data-v-5dc18fe6]{position:absolute;transition:right .2s ease;z-index:5;top:0;right:-370px;height:100%}}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter[data-v-5dc18fe6]{right:-100vw}}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .menuBtnClicked[data-v-5dc18fe6]{opacity:0!important}}.wrapperWinePage .mainCont .filter .wrapperSticky[data-v-5dc18fe6]{height:100vh;position:sticky;position:-webkit-sticky;top:0}@media screen and (max-width:530px){.wrapperWinePage .mainCont .filter .wrapperSticky[data-v-5dc18fe6]{top:110px}}@media screen and (max-height:855px)and (max-width:530px),screen and (max-width:417px){.wrapperWinePage .mainCont .filter .wrapperSticky[data-v-5dc18fe6]{top:100px}}.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper[data-v-5dc18fe6]{position:absolute;top:23px;left:-69px;transition:opacity .15s ease;opacity:1;display:none;width:70px;height:60px;border-bottom-left-radius:12px;border-top-left-radius:12px;background-color:#fcfcfc;z-index:5;box-sizing:border-box;border:1px solid rgba(0,0,0,.2);border-right-color:#fcfcfc;box-shadow:-5px 2px 15px -3px rgba(0,0,0,.07);cursor:pointer}@media screen and (max-width:1714px){.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper[data-v-5dc18fe6]{display:flex;justify-content:center;align-items:center}}@media screen and (max-width:435px){.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper[data-v-5dc18fe6]{width:55px;height:50px;top:33px;left:-54px}}.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper .whitebar[data-v-5dc18fe6]{position:absolute;right:-4px;top:0;height:58px;width:9px;background-color:#fcfcfc}@media screen and (max-width:435px){.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper .whitebar[data-v-5dc18fe6]{height:48px}}.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper .openMobileFilter[data-v-5dc18fe6]{width:45px}@media screen and (max-width:435px){.wrapperWinePage .mainCont .filter .wrapperSticky .openMobileFilterWrapper .openMobileFilter[data-v-5dc18fe6]{width:35px}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-5dc18fe6]{background-color:#fcfcfc;max-width:370px;min-width:370px;display:flex;box-sizing:border-box;flex-direction:column;align-items:center;padding-top:53px;padding-bottom:20px;overflow-y:scroll;height:100%;direction:rtl;color:#333}@media screen and (max-width:1714px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-5dc18fe6]{direction:ltr;border-right:none;border-left:1px solid rgba(0,0,0,.2)}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-5dc18fe6]::-webkit-scrollbar-track{border-radius:10px;background-color:#fcfcfc}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-5dc18fe6]::-webkit-scrollbar{width:5px;background-color:#f5f5f5}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-5dc18fe6]::-webkit-scrollbar-thumb{border-radius:20px;background-color:rgba(0,0,0,.2)}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper>*[data-v-5dc18fe6]{width:294px;margin-bottom:23px;direction:ltr}@media screen and (max-width:325px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper>*[data-v-5dc18fe6]{width:90%}}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-5dc18fe6]{max-width:100vw;min-width:100vw}}@media screen and (max-width:530px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper[data-v-5dc18fe6]{padding-bottom:110px}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters[data-v-5dc18fe6]{width:100%;display:flex;box-sizing:border-box;justify-content:space-between;align-items:flex-end;padding:0 26px 11px;border-bottom:1px solid rgba(0,0,0,.2);position:relative}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .text[data-v-5dc18fe6]{cursor:pointer;font-size:16px!important}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .hm[data-v-5dc18fe6]{font-size:16px!important;box-sizing:border-box;color:#777}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .hm[data-v-5dc18fe6]{margin-left:20px}}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters[data-v-5dc18fe6]{justify-content:start}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .closeMobileFilter[data-v-5dc18fe6]{display:none;position:absolute;top:-20px;right:30px}@media screen and (max-width:465px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .clearFilters .closeMobileFilter[data-v-5dc18fe6]{display:block}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterTitle[data-v-5dc18fe6]{font-family:"Roslindale";font-size:2.5em}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper[data-v-5dc18fe6]{display:grid;grid-template-columns:repeat(2,137px);grid-row-gap:23px;row-gap:23px;grid-column-gap:20px;-moz-column-gap:20px;column-gap:20px}@media screen and (max-width:325px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper[data-v-5dc18fe6]{grid-template-columns:repeat(2,calc(46vw - 10px));grid-row-gap:15px;row-gap:15px;grid-column-gap:15px;-moz-column-gap:15px;column-gap:15px}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filtercard[data-v-5dc18fe6]{background-color:#fff;padding:16px 0 11px;border-radius:12px;box-sizing:border-box;border:1px solid rgba(0,0,0,.2);font-size:14.5px!important;cursor:pointer;overflow:hidden}@media screen and (max-width:530px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filtercard[data-v-5dc18fe6]{padding:21px 0}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .selected[data-v-5dc18fe6]{border:1px solid rgba(0,0,0,.75)}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filterType[data-v-5dc18fe6]{min-width:137px;max-width:137px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}@media screen and (max-width:325px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filterType[data-v-5dc18fe6]{min-width:calc(46vw - 10px);max-width:calc(46vw - 10px)}}.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filterType img[data-v-5dc18fe6]{margin-bottom:10px}@media screen and (max-width:530px){.wrapperWinePage .mainCont .filter .wrapperSticky .filterContWrapper .filterCardWrapper .filterType img[data-v-5dc18fe6]{display:none}}.wrapperWinePage .mainCont .wineCardMain[data-v-5dc18fe6]{width:100%;z-index:0;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;background-position:0 100%;min-height:100vh}.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper[data-v-5dc18fe6]{display:grid}@media screen and (max-height:950px),screen and (max-width:1330px){.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper[data-v-5dc18fe6]{grid-template-columns:repeat(auto-fill,minmax(577px,1fr))!important}}@media screen and (max-height:900px),screen and (max-width:1180px){.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper[data-v-5dc18fe6]{grid-template-columns:repeat(auto-fill,minmax(max(543px,50%),1fr))!important}}@media screen and (max-width:1085px){.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper[data-v-5dc18fe6]{display:flex;flex-direction:column}}.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper .borderhiderL[data-v-5dc18fe6]{width:1px;height:100%;position:absolute;background-color:#c1c6cb;left:370px;top:0}@media screen and (max-width:1714px){.wrapperWinePage .mainCont .wineCardMain .wineCardWrapper .borderhiderL[data-v-5dc18fe6]{left:0}}.webp .wineCardMain[data-v-5dc18fe6]{background-image:url('+f+")}.no-webp .wineCardMain[data-v-5dc18fe6]{background-image:url("+w+")}",""]),e.exports=c},994:function(e,t,r){e.exports=r.p+"img/vines_full.4a88203.webp"},995:function(e,t,r){e.exports=r.p+"img/vines_full.131818d.jpg"}}]);