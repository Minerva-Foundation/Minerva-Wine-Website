(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{320:function(e,t,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(49).default)("a36ccc84",content,!0,{sourceMap:!1})},328:function(e,t,r){"use strict";r(320)},329:function(e,t,r){var n=r(48)(!1);n.push([e.i,"*[data-v-447c34e1]{text-align:left;z-index:1}.wrapperOuter .line[data-v-447c34e1]{width:100%}.wrapperOuter .wrapper[data-v-447c34e1]{display:flex;position:relative;background-color:transparent!important;padding:50px 0}.wrapperOuter .wrapper .iteration[data-v-447c34e1]{flex-shrink:0;width:210px}.wrapperOuter .wrapper .iteration h4[data-v-447c34e1]{cursor:pointer}.wrapperOuter .wrapper .main[data-v-447c34e1]{color:#fff}.wrapperOuter .wrapper .main p[data-v-447c34e1]{padding:30px 15% 40px 0;opacity:0;overflow:hidden}.wrapperOuter .wrapper .main h3[data-v-447c34e1]{padding-right:70px;cursor:pointer}.wrapperOuter .wrapper .main .expandedp[data-v-447c34e1]{opacity:1;transition:opacity .5s ease}.wrapperOuter .wrapper .expandBtnWrapper[data-v-447c34e1]{position:absolute;top:65px;right:20px;height:40px;width:40px;cursor:pointer}.wrapperOuter .wrapper .expandBtnWrapper .expandLines[data-v-447c34e1]{position:absolute;top:20px;transition:transform .3s ease}.wrapperOuter .wrapper .collapsedClassVert[data-v-447c34e1]{transform:rotate(-90deg)}.wrapperOuter .collapsedWrapper[data-v-447c34e1]{max-height:70px;transition:max-height .3s ease-in}",""]),e.exports=n},336:function(e,t,r){"use strict";r.r(t);var n=r(2).a.extend({name:"CollapsibleGuide",props:{iteration:{default:"",type:String},header:{default:"",type:String},mainText:{default:"",type:String},secondaryText:{default:"",type:String},first:{default:!1,type:Boolean}},data:function(){return{expanded:!1}}}),o=(r(328),r(19)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapperOuter"},[e.first?r("svg",{staticClass:"line",attrs:{width:"100%",height:"2",viewBox:"0 0 1000 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"}},[r("line",{attrs:{x1:"8.74228e-08",y1:"1",x2:"100%",y2:"1.00012",stroke:"white","stroke-opacity":"0.5","stroke-width":"2"}})]):e._e(),e._v(" "),r("div",{staticClass:"wrapper",class:{collapsedWrapper:!e.expanded}},[r("div",{staticClass:"iteration"},[r("h4",{staticClass:"customh4",on:{click:function(t){e.expanded=!e.expanded}}},[e._v(e._s(e.iteration))])]),e._v(" "),r("div",{staticClass:"main"},[r("h3",{staticClass:"customh3",on:{click:function(t){e.expanded=!e.expanded}}},[e._v(e._s(e.header))]),e._v(" "),r("p",{ref:"para",staticClass:"mainText",class:{expandedp:e.expanded}},[e._v("\n        "+e._s(e.mainText)+"\n        "),r("br"),r("br"),e._v("\n        "+e._s(e.secondaryText)+"\n      ")])]),e._v(" "),r("div",{staticClass:"expandBtnWrapper",on:{click:function(t){e.expanded=!e.expanded}}},[r("svg",{staticClass:"expandLines",class:{collapsedClassHor:!e.expanded},attrs:{width:"40",height:"3",viewBox:"0 0 40 3",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("line",{attrs:{y1:"1.14258",x2:"40",y2:"1.14258",stroke:"white","stroke-width":"2"}})]),e._v(" "),r("svg",{staticClass:"expandLines",class:{collapsedClassVert:!e.expanded},attrs:{width:"40",height:"3",viewBox:"0 0 40 3",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("line",{attrs:{y1:"1.14258",x2:"40",y2:"1.14258",stroke:"white","stroke-width":"2"}})])])]),e._v(" "),r("svg",{attrs:{width:"100%",height:"2",viewBox:"0 0 1000 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"}},[r("line",{attrs:{x1:"8.74228e-08",y1:"1",x2:"100%",y2:"1.00012",stroke:"white","stroke-opacity":"0.5","stroke-width":"2"}})])])}),[],!1,null,"447c34e1",null);t.default=component.exports}}]);