(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,5,6],{318:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("e8b06bd6",content,!0,{sourceMap:!1})},319:function(t,e,r){var content=r(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("49c8c94a",content,!0,{sourceMap:!1})},321:function(t,e,r){t.exports=function(){var t="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function e(e){var r=e.split("-"),n=r[1],o=r[2],c=r[3];if(!n||!o||!c)throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');var l=o.split("x"),h=+l[0],f=+l[1];if(!isFinite(h)||!isFinite(f))throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');return{id:n,width:h,height:f,format:c}}var r=function(t){return!!t&&"string"==typeof t._ref},n=function(t){return!!t&&"string"==typeof t._id},o=function(t){var source=t;return!(!source||!source.asset)&&"string"==typeof source.asset.url};function c(source){if(!source)return null;var image;if("string"==typeof source&&l(source))image={asset:{_ref:h(source)}};else if("string"==typeof source)image={asset:{_ref:source}};else if(r(source))image={asset:source};else if(n(source))image={asset:{_ref:source._id||""}};else if(o(source))image={asset:{_ref:h(source.asset.url)}};else{if("object"!=typeof source.asset)return null;image=source}var img=source;return img.crop&&(image.crop=img.crop),img.hotspot&&(image.hotspot=img.hotspot),f(image)}function l(t){return/^https?:\/\//.test(""+t)}function h(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function f(image){if(image.crop&&image.hotspot)return image;var t=Object.assign({},image);return t.crop||(t.crop={left:0,top:0,bottom:0,right:0}),t.hotspot||(t.hotspot={x:.5,y:.5,height:1,width:1}),t}var d=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function y(t){var r=Object.assign({},t||{}),source=r.source;delete r.source;var image=c(source);if(!image)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(source)+")");var n=e(image.asset._ref||image.asset._id||""),o=Math.round(image.crop.left*n.width),l=Math.round(image.crop.top*n.height),h={left:o,top:l,width:Math.round(n.width-image.crop.right*n.width-o),height:Math.round(n.height-image.crop.bottom*n.height-l)},f=image.hotspot.height*n.height/2,d=image.hotspot.width*n.width/2,y=image.hotspot.x*n.width,v=image.hotspot.y*n.height,x={left:y-d,top:v-f,right:y+d,bottom:v+f};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=Object.assign({},r,w({crop:h,hotspot:x},r))),m(Object.assign({},r,{asset:n}))}function m(t){var e=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,o=[];if(t.rect){var c=t.rect,l=c.left,h=c.top,f=c.width,y=c.height;(0!==l||0!==h||y!==t.asset.height||f!==t.asset.width)&&o.push("rect="+l+","+h+","+f+","+y)}t.bg&&o.push("bg="+t.bg),t.focalPoint&&(o.push("fp-x="+t.focalPoint.x),o.push("fp-y="+t.focalPoint.y));var m=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return m&&o.push("flip="+m),d.forEach((function(e){var r=e[0],param=e[1];void 0!==t[r]?o.push(param+"="+encodeURIComponent(t[r])):void 0!==t[param]&&o.push(param+"="+encodeURIComponent(t[param]))})),0===o.length?n:n+"?"+o.join("&")}function w(source,t){var e,r=t.width,n=t.height;if(!r||!n)return{width:r,height:n,rect:source.crop};var o=source.crop,c=source.hotspot,l=r/n;if(o.width/o.height>l){var h=Math.round(o.height),f=Math.round(h*l),d=Math.max(0,Math.round(o.top)),y=Math.round((c.right-c.left)/2+c.left),m=Math.max(0,Math.round(y-f/2));m<o.left?m=o.left:m+f>o.left+o.width&&(m=o.left+o.width-f),e={left:m,top:d,width:f,height:h}}else{var w=o.width,v=Math.round(w/l),x=Math.max(0,Math.round(o.left)),O=Math.round((c.bottom-c.top)/2+c.top),_=Math.max(0,Math.round(O-v/2));_<o.top?_=o.top:_+v>o.top+o.height&&(_=o.top+o.height-v),e={left:x,top:_,width:w,height:v}}return{width:r,height:n,rect:e}}var v=["clip","crop","fill","fillmax","max","scale","min"],x=["top","bottom","left","right","center","focalpoint","entropy"],O=["format"];function _(t){return!!t&&"object"==typeof t.clientConfig}function j(t){for(var i=0,e=d;i<e.length;i+=1){var r=e[i],n=r[0],param=r[1];if(t===n||t===param)return n}return t}function k(t){var e=t;if(_(e)){var r=e.clientConfig,n=r.apiHost,o=r.projectId,c=r.dataset;return new S(null,{baseUrl:(n||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:o,dataset:c})}return new S(null,t)}var S=function(t,e){this.options=t?Object.assign({},t.options||{},e||{}):Object.assign({},e||{})};return S.prototype.withOptions=function(t){var e=t.baseUrl||this.options.baseUrl,r={baseUrl:e};for(var n in t)t.hasOwnProperty(n)&&(r[j(n)]=t[n]);return new S(this,Object.assign({},{baseUrl:e},r))},S.prototype.image=function(source){return this.withOptions({source:source})},S.prototype.dataset=function(t){return this.withOptions({dataset:t})},S.prototype.projectId=function(t){return this.withOptions({projectId:t})},S.prototype.bg=function(t){return this.withOptions({bg:t})},S.prototype.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},S.prototype.width=function(t){return this.withOptions({width:t})},S.prototype.height=function(t){return this.withOptions({height:t})},S.prototype.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},S.prototype.maxWidth=function(t){return this.withOptions({maxWidth:t})},S.prototype.minWidth=function(t){return this.withOptions({minWidth:t})},S.prototype.maxHeight=function(t){return this.withOptions({maxHeight:t})},S.prototype.minHeight=function(t){return this.withOptions({minHeight:t})},S.prototype.size=function(t,e){return this.withOptions({width:t,height:e})},S.prototype.blur=function(t){return this.withOptions({blur:t})},S.prototype.sharpen=function(t){return this.withOptions({sharpen:t})},S.prototype.rect=function(t,e,r,n){return this.withOptions({rect:{left:t,top:e,width:r,height:n}})},S.prototype.format=function(t){return this.withOptions({format:t})},S.prototype.invert=function(t){return this.withOptions({invert:t})},S.prototype.orientation=function(t){return this.withOptions({orientation:t})},S.prototype.quality=function(t){return this.withOptions({quality:t})},S.prototype.forceDownload=function(t){return this.withOptions({download:t})},S.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},S.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},S.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},S.prototype.fit=function(t){if(-1===v.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},S.prototype.crop=function(t){if(-1===x.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},S.prototype.saturation=function(t){return this.withOptions({saturation:t})},S.prototype.auto=function(t){if(-1===O.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},S.prototype.pad=function(t){return this.withOptions({pad:t})},S.prototype.url=function(){return y(this.options)},S.prototype.toString=function(){return this.url()},k}()},322:function(t,e,r){"use strict";r(318)},323:function(t,e,r){var n=r(48)(!1);n.push([t.i,".cover[data-v-7071c51d]{display:block;margin:50px auto;width:100%}",""]),t.exports=n},324:function(t,e,r){"use strict";r(319)},325:function(t,e,r){var n=r(48)(!1);n.push([t.i,"iframe[data-v-1ee9292f]{display:block;margin:50px auto}",""]),t.exports=n},326:function(t,e,r){"use strict";function n(t){return null!==t&&"object"==typeof t}function o(t,e,r=".",c){if(!n(e))return o(t,{},r,c);const l=Object.assign({},e);for(const e in t){if("__proto__"===e||"constructor"===e)continue;const h=t[e];null!=h&&(c&&c(l,e,h,r)||(Array.isArray(h)&&Array.isArray(l[e])?l[e]=l[e].concat(h):n(h)&&n(l[e])?l[e]=o(h,l[e],(r?`${r}.`:"")+e.toString(),c):l[e]=h))}return l}function c(t){return(...e)=>e.reduce(((p,e)=>o(p,e,"",t)),{})}r.r(e);const l=c();l.fn=c(((t,e,r,n)=>{if(void 0!==t[e]&&"function"==typeof r)return t[e]=r(t[e]),!0})),l.arrayFn=c(((t,e,r,n)=>{if(Array.isArray(t[e])&&"function"==typeof r)return t[e]=r(t[e]),!0})),l.extend=c,e.default=l},330:function(t,e,r){"use strict";function n(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return y}));var o=r(8);r(39);encodeURIComponent;const c=String.raw||((t,...e)=>{const r=t.length-1;return t.slice(0,r).reduce(((t,r,n)=>t+r+e[n]),"")+t[r]});var l,h;function f(t,e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var o,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c(l||(l=n(['*[_type == "post" && slug.current == "','"]'])),e),t.next=3,r.fetch(o);case 3:return h=t.sent[0],t.abrupt("return",h);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c(h||(h=n(['*[_type == "post"]{_createdAt, author, categories, slug, title }']))),t.next=3,e.fetch(r);case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},331:function(t,e,r){var content=r(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("3640550a",content,!0,{sourceMap:!1})},332:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const o=n(r(326)),c={types:{span:"span",image:"img"},marks:{strong:"strong",em:"em",link:"a"},styles:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",normal:"p",blockquote:"blockquote"},listItem:"li",container:"div"};let l=1;function h(t){if(!t)return{};const e=Object.entries(t).reduce(((t,[e,r])=>{switch(!0){case["_key","key"].includes(e):return t.key=r||null,t;case["class","href","src"].includes(e):return t.attrs[e]=r,t;case["_type"].includes(e):return t;default:return t.props[e]=r,t}}),{props:{},attrs:{}});return e.props={level:l,...e.props},e}function f(t,e){if(!t)return;const{_type:r,listItem:n}=t;return n?e.listItem||"li":r&&r in e.types?e.types[r]:r&&r in e.marks?e.marks[r]:void 0}function d(t,content,[mark,...e]=[],r=c,n=[]){if(!mark)return content;const o=mark in r.marks?{_type:mark,_key:""}:n.find((t=>t._key===mark));return t(f(o,r)||"span",h(o),[d(t,content,e,r,n)])}function y(t,e){const{length:r}=t;if(!e.level)return t.push(e),t;const{_type:n,children:o,level:c}=t[r-1]||{};return"list"===n&&o?c===e.level?o.push(e):y(o,e):t.push({_type:"list",children:[e],level:e.level}),t}function m(t,e,r,n=!1){return(n?e:e.reduce(y,[])).map((e=>{const n=function(t,{style:style,listItem:e},r,n){const o=style?style.match(/^h(\d)$/):[];return!e&&o&&o.length>1&&(l=Number(o[1])),!e&&style&&r.styles[style]?t(r.styles[style],{},n):n}(t,e,r,function(t,e,content,r){const n=f(e,r);return n?[t(n,h(e),content)]:content}(t,e,"block"===e._type?(e.children||[]).map((n=>"span"!==n._type?t(f(n,r)||"span",h(n),[d(t,n.text,n.marks,r,e.markDefs)]):d(t,n.text,n.marks,r,e.markDefs))):[],r));return n}))}const w={name:"SanityContent",functional:!0,props:{blocks:{type:Array,default:()=>[]},serializers:{type:Object,default:()=>({})},renderContainerOnSingleChild:{type:Boolean,default:!1}},render(t,{props:e,data:data}){const r=o.default(e.serializers,c);return r.types.list=r.types.list||{name:"ListComponent",functional:!0,props:{children:{type:Array,default:()=>[]}},render:(h2,{props:t})=>h2(t.children.length&&"number"===t.children[0].listItem?"ol":"ul",{},m(h2,t.children,r,!0))},t(r.container,data,m(t,e.blocks||[],r))}};e.SanityContent=w,e.default=w},334:function(t,e,r){"use strict";r.r(e);var n=r(321),o=r.n(n),c=r(2).a.extend({props:{asset:{type:Object,required:!0}},methods:{urlFor:function(t){return o()(this.$sanity.config).image(t)}}}),l=(r(322),r(19)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"imgwrapper"},[r("img",{staticClass:"cover",attrs:{src:t.urlFor(t.asset._ref).url(),quality:"85"}})])}),[],!1,null,"7071c51d",null);e.default=component.exports},335:function(t,e,r){"use strict";r.r(e);var n=r(2).a.extend({props:{url:{type:String,required:!0}}}),o=(r(324),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("iframe",{ref:"iframe",attrs:{frameborder:"0",allowfullscreen:"",width:"800",height:"450",src:t.url}})])}),[],!1,null,"1ee9292f",null);e.default=component.exports},337:function(t,e,r){"use strict";r.r(e);var n=r(19),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"text",attrs:{target:"_blank",href:t.$attrs.href}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,r){"use strict";r(331)},339:function(t,e,r){var n=r(48)(!1);n.push([t.i,".wrapperSanity{display:flex;justify-content:center;align-items:center}.wrapperSanity .contentwrapperSanity{width:60vw;padding:227px 0 100px}.wrapperSanity .contentwrapperSanity h1{color:#000;margin-bottom:50px}.wrapperSanity .contentwrapperSanity .bodySanity{color:#272727}.wrapperSanity .contentwrapperSanity .bodySanity p{margin:5px 0;color:#343434;min-height:1em}.wrapperSanity .contentwrapperSanity .bodySanity h4{font-size:2em;margin-bottom:15px}.wrapperSanity .contentwrapperSanity .bodySanity iframe{margin:50px}.wrapperSanity .contentwrapperSanity .bodySanity ul{font-size:1.5em}",""]),t.exports=n},351:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(39),r(2)),c=r(330),l=r(334),h=r(337),f=r(335),d=o.a.extend({name:"FocusedArticle",layout:"fixedHeader",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app.$sanity,n=t.route,e.next=3,Object(c.a)(n.params.articleFocused,r);case 3:return o=e.sent,e.abrupt("return",{currentArticle:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{serializers:{types:{image:l.default,youtube:f.default},marks:{link:h.default}},currentArticle:{}}},head:function(){return{title:this.currentArticle.title}}}),y=(r(338),r(19)),component=Object(y.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapperSanity"},[r("article",{staticClass:"contentwrapperSanity"},[r("h1",{staticClass:"customh1"},[t._v(t._s(t.currentArticle.title))]),t._v(" "),r("SanityContent",{staticClass:"bodySanity",attrs:{blocks:t.currentArticle.body,serializers:t.serializers}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SanityContent:r(332).default})}}]);