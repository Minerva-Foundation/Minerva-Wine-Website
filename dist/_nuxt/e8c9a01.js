(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4,11,12,13,14],{1024:function(t,e,r){"use strict";r.r(e);var n=r(23),o=(r(59),r(136),r(953),r(38),r(165),r(79),r(5)),c=r(915),l=r.n(c),d=r(951),h=r(922),f=r(950),m=r(949),w=r(952),y=o.a.extend({name:"FocusedArticle",components:{portableImage:h.default},layout:"fixedHeader",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app.$sanity,n=t.route,e.next=3,Object(d.a)(n.params.articleFocused,r);case 3:return o=e.sent,e.abrupt("return",{currentArticle:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{serializers:{types:{image:h.default,youtube:m.default},marks:{link:f.default}},currentArticle:{},metadata:[]}},head:function(){return{title:this.currentArticle.seo.seo_title,meta:this.metadata,link:[{hid:"canonical",rel:"canonical",href:"https://minerva.market/club/"+this.currentArticle.slug.current}]}},computed:{formatDate:function(){var t=this.currentArticle.publishedAt.toString().substring(0,this.currentArticle.publishedAt.toString().indexOf("T")).replaceAll("-","");return t.substring(6,8)+"/"+t.substring(4,6)+"/"+t.substring(0,4)}},mounted:function(){this.$accessor.SET_currentArticleKeyword(this.currentArticle.seo.focus_keyword),this.metadata=Object(w.a)(this.currentArticle.seo.seo_title,this.currentArticle.seo.meta_description,"Minerva",this.currentArticle.seo.focus_keyword,l()(this.$sanity.config).image(this.currentArticle.mainImage.asset._ref).url()+"?w=500&h=250&fit=crop&crop=center"),this.metadata.push({hid:"twitter:card",name:"twitter:card",property:"twitter:card",content:"summary_large_image"})}}),x=(r(996),r(37)),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapperClubArticle"},[r("aside",{staticClass:"extraInfo"},[r("div",{staticClass:"wrapperFixed sticky"},[r("div",{staticClass:"secWrapper"},[r("span",{staticClass:"sectionTitle"},[t._v("Author")]),t._v(" "),r("address",{staticClass:"author"},[r("div",{staticClass:"row"},[r("portableImage",{staticClass:"authorImage",attrs:{asset:t.currentArticle.author.image.asset,"new-height":"100",alt:t.currentArticle.author.name+" Profile picture"}}),t._v("\n            "+t._s(t.currentArticle.author.name)+"\n          ")],1),t._v(" "),r("SanityContent",{attrs:{blocks:t.currentArticle.author.bio,serializers:t.serializers}})],1)])])]),t._v(" "),r("div",{staticClass:"wrapperSanity"},[r("article",{staticClass:"contentwrapperSanity"},[r("h1",{staticClass:"articleh1"},[t._v(t._s(t.currentArticle.title))]),t._v(" "),r("div",{staticClass:"detailsTop"},[r("span",{staticClass:"aad"},[r("i",{staticClass:"by"},[t._v("by")]),t._v(" "),r("span",{staticClass:"author"},[t._v(t._s(t.currentArticle.author.name)+",")]),r("i",{staticClass:"date"},[t._v(" "+t._s(t.formatDate))])]),t._v(" "),r("div",{staticClass:"cats"},t._l(t.currentArticle.categories,(function(t){return r("CategoryBar",{key:t._id,attrs:{cat:{name:t.title,desciption:t.desciption}}})})),1)]),t._v(" "),r("p",{staticClass:"abstract"},[t._v(t._s(t.currentArticle.abstract))]),t._v(" "),r("portableImage",{attrs:{asset:t.currentArticle.mainImage.asset,alt:t.currentArticle.seo.focus_keyword+" main article image"}}),t._v(" "),r("SanityContent",{staticClass:"bodySanity",attrs:{blocks:t.currentArticle.body,serializers:t.serializers}}),t._v(" "),r("address",{staticClass:"detailsBottom"},[r("span",{staticClass:"sectionTitle"},[t._v("Author")]),t._v(" "),r("div",{staticClass:"sectionWrapper"},[r("portableImage",{staticClass:"authorImage",attrs:{asset:t.currentArticle.author.image.asset,"new-height":"100",alt:t.currentArticle.author.name+" Profile picture"}}),t._v(" "),r("div",{staticClass:"detailWrapper"},[r("span",{staticClass:"name"},[t._v("\n              "+t._s(t.currentArticle.author.name)+"\n            ")]),t._v(" "),r("SanityContent",{attrs:{blocks:t.currentArticle.author.bio,serializers:t.serializers}})],1)],1)])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SanityContent:r(932).default,CategoryBar:r(948).default})},914:function(t,e,r){var content=r(919);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("00044304",content,!0,{sourceMap:!1})},915:function(t,e,r){t.exports=function(){var t="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function e(e){var r=e.split("-"),n=r[1],o=r[2],c=r[3];if(!n||!o||!c)throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');var l=o.split("x"),d=+l[0],h=+l[1];if(!isFinite(d)||!isFinite(h))throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');return{id:n,width:d,height:h,format:c}}var r=function(t){return!!t&&"string"==typeof t._ref},n=function(t){return!!t&&"string"==typeof t._id},o=function(t){var source=t;return!(!source||!source.asset)&&"string"==typeof source.asset.url};function c(source){if(!source)return null;var image;if("string"==typeof source&&l(source))image={asset:{_ref:d(source)}};else if("string"==typeof source)image={asset:{_ref:source}};else if(r(source))image={asset:source};else if(n(source))image={asset:{_ref:source._id||""}};else if(o(source))image={asset:{_ref:d(source.asset.url)}};else{if("object"!=typeof source.asset)return null;image=source}var img=source;return img.crop&&(image.crop=img.crop),img.hotspot&&(image.hotspot=img.hotspot),h(image)}function l(t){return/^https?:\/\//.test(""+t)}function d(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function h(image){if(image.crop&&image.hotspot)return image;var t=Object.assign({},image);return t.crop||(t.crop={left:0,top:0,bottom:0,right:0}),t.hotspot||(t.hotspot={x:.5,y:.5,height:1,width:1}),t}var f=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function m(t){var r=Object.assign({},t||{}),source=r.source;delete r.source;var image=c(source);if(!image)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(source)+")");var n=e(image.asset._ref||image.asset._id||""),o=Math.round(image.crop.left*n.width),l=Math.round(image.crop.top*n.height),d={left:o,top:l,width:Math.round(n.width-image.crop.right*n.width-o),height:Math.round(n.height-image.crop.bottom*n.height-l)},h=image.hotspot.height*n.height/2,f=image.hotspot.width*n.width/2,m=image.hotspot.x*n.width,x=image.hotspot.y*n.height,v={left:m-f,top:x-h,right:m+f,bottom:x+h};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=Object.assign({},r,y({crop:d,hotspot:v},r))),w(Object.assign({},r,{asset:n}))}function w(t){var e=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,o=[];if(t.rect){var c=t.rect,l=c.left,d=c.top,h=c.width,m=c.height;(0!==l||0!==d||m!==t.asset.height||h!==t.asset.width)&&o.push("rect="+l+","+d+","+h+","+m)}t.bg&&o.push("bg="+t.bg),t.focalPoint&&(o.push("fp-x="+t.focalPoint.x),o.push("fp-y="+t.focalPoint.y));var w=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return w&&o.push("flip="+w),f.forEach((function(e){var r=e[0],param=e[1];void 0!==t[r]?o.push(param+"="+encodeURIComponent(t[r])):void 0!==t[param]&&o.push(param+"="+encodeURIComponent(t[param]))})),0===o.length?n:n+"?"+o.join("&")}function y(source,t){var e,r=t.width,n=t.height;if(!r||!n)return{width:r,height:n,rect:source.crop};var o=source.crop,c=source.hotspot,l=r/n;if(o.width/o.height>l){var d=Math.round(o.height),h=Math.round(d*l),f=Math.max(0,Math.round(o.top)),m=Math.round((c.right-c.left)/2+c.left),w=Math.max(0,Math.round(m-h/2));w<o.left?w=o.left:w+h>o.left+o.width&&(w=o.left+o.width-h),e={left:w,top:f,width:h,height:d}}else{var y=o.width,x=Math.round(y/l),v=Math.max(0,Math.round(o.left)),A=Math.round((c.bottom-c.top)/2+c.top),C=Math.max(0,Math.round(A-x/2));C<o.top?C=o.top:C+x>o.top+o.height&&(C=o.top+o.height-x),e={left:v,top:C,width:y,height:x}}return{width:r,height:n,rect:e}}var x=["clip","crop","fill","fillmax","max","scale","min"],v=["top","bottom","left","right","center","focalpoint","entropy"],A=["format"];function C(t){return!!t&&"object"==typeof t.clientConfig}function S(t){for(var i=0,e=f;i<e.length;i+=1){var r=e[i],n=r[0],param=r[1];if(t===n||t===param)return n}return t}function _(t){var e=t;if(C(e)){var r=e.clientConfig,n=r.apiHost,o=r.projectId,c=r.dataset;return new O(null,{baseUrl:(n||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:o,dataset:c})}return new O(null,t)}var O=function(t,e){this.options=t?Object.assign({},t.options||{},e||{}):Object.assign({},e||{})};return O.prototype.withOptions=function(t){var e=t.baseUrl||this.options.baseUrl,r={baseUrl:e};for(var n in t)t.hasOwnProperty(n)&&(r[S(n)]=t[n]);return new O(this,Object.assign({},{baseUrl:e},r))},O.prototype.image=function(source){return this.withOptions({source:source})},O.prototype.dataset=function(t){return this.withOptions({dataset:t})},O.prototype.projectId=function(t){return this.withOptions({projectId:t})},O.prototype.bg=function(t){return this.withOptions({bg:t})},O.prototype.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},O.prototype.width=function(t){return this.withOptions({width:t})},O.prototype.height=function(t){return this.withOptions({height:t})},O.prototype.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},O.prototype.maxWidth=function(t){return this.withOptions({maxWidth:t})},O.prototype.minWidth=function(t){return this.withOptions({minWidth:t})},O.prototype.maxHeight=function(t){return this.withOptions({maxHeight:t})},O.prototype.minHeight=function(t){return this.withOptions({minHeight:t})},O.prototype.size=function(t,e){return this.withOptions({width:t,height:e})},O.prototype.blur=function(t){return this.withOptions({blur:t})},O.prototype.sharpen=function(t){return this.withOptions({sharpen:t})},O.prototype.rect=function(t,e,r,n){return this.withOptions({rect:{left:t,top:e,width:r,height:n}})},O.prototype.format=function(t){return this.withOptions({format:t})},O.prototype.invert=function(t){return this.withOptions({invert:t})},O.prototype.orientation=function(t){return this.withOptions({orientation:t})},O.prototype.quality=function(t){return this.withOptions({quality:t})},O.prototype.forceDownload=function(t){return this.withOptions({download:t})},O.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},O.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},O.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},O.prototype.fit=function(t){if(-1===x.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},O.prototype.crop=function(t){if(-1===v.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},O.prototype.saturation=function(t){return this.withOptions({saturation:t})},O.prototype.auto=function(t){if(-1===A.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},O.prototype.pad=function(t){return this.withOptions({pad:t})},O.prototype.url=function(){return m(this.options)},O.prototype.toString=function(){return this.url()},_}()},916:function(t,e,r){"use strict";function n(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}r.d(e,"a",(function(){return n}))},917:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));encodeURIComponent;const n=String.raw||((t,...e)=>{const r=t.length-1;return t.slice(0,r).reduce(((t,r,n)=>t+r+e[n]),"")+t[r]})},918:function(t,e,r){"use strict";r(914)},919:function(t,e,r){var n=r(65)(!1);n.push([t.i,".cover[data-v-23f2ac0b]{display:block;width:100%}",""]),t.exports=n},922:function(t,e,r){"use strict";r.r(e);var n=r(915),o=r.n(n),c=r(5).a.extend({props:{asset:{type:Object,required:!0},newHeight:{type:String,required:!1,default:""},alt:{type:String,required:!1,default:""}},computed:{newHeightString:function(){return""!==this.newHeight?"?h="+this.newHeight:""},keyword:function(){return this.$accessor&&""===this.alt?this.$accessor.currentArticleKeyword:this.alt}},methods:{urlFor:function(t){return o()(this.$sanity.config).image(t)}}}),l=(r(918),r(37)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"imgwrapper"},[r("img",{staticClass:"cover",attrs:{src:t.urlFor(t.asset._ref).url()+t.newHeightString,quality:"85",alt:t.keyword}})])}),[],!1,null,"23f2ac0b",null);e.default=component.exports},923:function(t,e,r){var content=r(937);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("7f00d0c4",content,!0,{sourceMap:!1})},924:function(t,e,r){var content=r(941);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("21ee52d0",content,!0,{sourceMap:!1})},925:function(t,e,r){var content=r(943);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("7a65af98",content,!0,{sourceMap:!1})},930:function(t,e,r){"use strict";function n(t){return null!==t&&"object"==typeof t}function o(t,e,r=".",c){if(!n(e))return o(t,{},r,c);const l=Object.assign({},e);for(const e in t){if("__proto__"===e||"constructor"===e)continue;const d=t[e];null!=d&&(c&&c(l,e,d,r)||(Array.isArray(d)&&Array.isArray(l[e])?l[e]=l[e].concat(d):n(d)&&n(l[e])?l[e]=o(d,l[e],(r?`${r}.`:"")+e.toString(),c):l[e]=d))}return l}function c(t){return(...e)=>e.reduce(((p,e)=>o(p,e,"",t)),{})}r.r(e);const l=c();l.fn=c(((t,e,r,n)=>{if(void 0!==t[e]&&"function"==typeof r)return t[e]=r(t[e]),!0})),l.arrayFn=c(((t,e,r,n)=>{if(Array.isArray(t[e])&&"function"==typeof r)return t[e]=r(t[e]),!0})),l.extend=c,e.default=l},932:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const o=n(r(930)),c={types:{span:"span",image:"img"},marks:{strong:"strong",em:"em",link:"a"},styles:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",normal:"p",blockquote:"blockquote"},listItem:"li",container:"div"};let l=1;function d(t){if(!t)return{};const e=Object.entries(t).reduce(((t,[e,r])=>{switch(!0){case["_key","key"].includes(e):return t.key=r||null,t;case["class","href","src"].includes(e):return t.attrs[e]=r,t;case["_type"].includes(e):return t;default:return t.props[e]=r,t}}),{props:{},attrs:{}});return e.props={level:l,...e.props},e}function h(t,e){if(!t)return;const{_type:r,listItem:n}=t;return n?e.listItem||"li":r&&r in e.types?e.types[r]:r&&r in e.marks?e.marks[r]:void 0}function f(t,content,[mark,...e]=[],r=c,n=[]){if(!mark)return content;const o=mark in r.marks?{_type:mark,_key:""}:n.find((t=>t._key===mark));return t(h(o,r)||"span",d(o),[f(t,content,e,r,n)])}function m(t,e){const{length:r}=t;if(!e.level)return t.push(e),t;const{_type:n,children:o,level:c}=t[r-1]||{};return"list"===n&&o?c===e.level?o.push(e):m(o,e):t.push({_type:"list",children:[e],level:e.level}),t}function w(t,e,r,n=!1){return(n?e:e.reduce(m,[])).map((e=>{const n=function(t,{style:style,listItem:e},r,n){const o=style?style.match(/^h(\d)$/):[];return!e&&o&&o.length>1&&(l=Number(o[1])),!e&&style&&r.styles[style]?t(r.styles[style],{},n):n}(t,e,r,function(t,e,content,r){const n=h(e,r);return n?[t(n,d(e),content)]:content}(t,e,"block"===e._type?(e.children||[]).map((n=>"span"!==n._type?t(h(n,r)||"span",d(n),[f(t,n.text,n.marks,r,e.markDefs)]):f(t,n.text,n.marks,r,e.markDefs))):[],r));return n}))}const y={name:"SanityContent",functional:!0,props:{blocks:{type:Array,default:()=>[]},serializers:{type:Object,default:()=>({})},renderContainerOnSingleChild:{type:Boolean,default:!1}},render(t,{props:e,data:data}){const r=o.default(e.serializers,c);return r.types.list=r.types.list||{name:"ListComponent",functional:!0,props:{children:{type:Array,default:()=>[]}},render:(h2,{props:t})=>h2(t.children.length&&"number"===t.children[0].listItem?"ol":"ul",{},w(h2,t.children,r,!0))},t(r.container,data,w(t,e.blocks||[],r))}};e.SanityContent=y,e.default=y},936:function(t,e,r){"use strict";r(923)},937:function(t,e,r){var n=r(65)(!1);n.push([t.i,".wrapper[data-v-2afe0cd2]{display:flex;justify-content:center;align-items:center;border:1px solid #ebebeb;background-color:#f7f7f7;padding:2px 7px;box-sizing:border-box;border-radius:1px}.wrapper .catName[data-v-2afe0cd2]{color:#777;font-size:.8em}",""]),t.exports=n},940:function(t,e,r){"use strict";r(924)},941:function(t,e,r){var n=r(65)(!1);n.push([t.i,"a[data-v-5945f07c]{color:#d6a11a;text-decoration:underline}",""]),t.exports=n},942:function(t,e,r){"use strict";r(925)},943:function(t,e,r){var n=r(65)(!1);n.push([t.i,"iframe[data-v-3dc09594]{display:block;margin:50px auto;width:50em;height:28.125em}@media screen and (max-width:930px),screen and (max-width:1050px)and (min-height:950px){iframe[data-v-3dc09594]{width:80vw;height:45vw}}",""]),t.exports=n},948:function(t,e,r){"use strict";r.r(e);var n=r(5).a.extend({props:{cat:{type:Object,required:!0}}}),o=(r(936),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("span",{staticClass:"catName",attrs:{title:t.cat.desciption}},[t._v(t._s(t.cat.name))])])}),[],!1,null,"2afe0cd2",null);e.default=component.exports},949:function(t,e,r){"use strict";r.r(e);var n=r(5).a.extend({props:{url:{type:String,required:!0}}}),o=(r(942),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("iframe",{attrs:{frameborder:"0",allowfullscreen:"",src:t.url}})])}),[],!1,null,"3dc09594",null);e.default=component.exports},950:function(t,e,r){"use strict";r.r(e);r(940);var n=r(37),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"text",attrs:{target:"_blank",href:t.$attrs.href}},[t._t("default")],2)}),[],!1,null,"5945f07c",null);e.default=component.exports},951:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return m}));var n,o,c=r(916),l=r(23),d=(r(79),r(917));function h(t,e){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(regeneratorRuntime.mark((function t(e,r){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object(d.a)(n||(n=Object(c.a)(['*[_type == "post" && slug.current == "','"]{publishedAt,title,abstract,author->,body,categories[]->{title,description,_id},mainImage,seo,slug}'])),e),t.next=3,r.fetch(o);case 3:return l=t.sent[0],t.abrupt("return",l);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(d.a)(o||(o=Object(c.a)(['*[_type == "post"]{publishedAt, author->{name}, seo{focus_keyword}, categories[]->{title,description,_id}, slug, title, mainImage, abstract }  | order(publishedAt desc)']))),t.next=3,e.fetch(r);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},952:function(t,e,r){"use strict";function meta(){var title=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Minerva - A new era of Wine",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Purchase 'en primeur' wine sourced directly from producers with confirmation of sale stored safely on the blockchain, accompanied by a unique artwork for each sale phase, while earning yield on it until delivery. Winemakers from across the world are hand-picked by our community for their unique narrative, quality, and innovation.",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Minerva",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",img=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"/images/Minerva_Banner.jpg";return[{hid:"og:title",property:"og:title",name:"og:title",content:title},{hid:"og:description",property:"og:description",name:"og:description",content:t},{hid:"description",name:"description",content:t},{hid:"og:image",property:"og:image",name:"og:image",content:img},{hid:"og:site_name",property:"og:site_name",name:"og:site_name",content:e},{hid:"keywords",name:"keywords",content:r},{hid:"twitter:title",property:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",property:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",name:"twitter:image",content:img}]}r.d(e,"a",(function(){return meta}))},953:function(t,e,r){r(954)},954:function(t,e,r){"use strict";var n=r(21),o=r(8),c=r(29),l=r(14),d=r(60),h=r(22),f=r(230),m=r(39),w=r(95),y=r(231),x=r(505),v=r(19),A=r(67),C=v("replace"),S=RegExp.prototype,_=o.TypeError,O=l(y),k=l("".indexOf),I=l("".replace),j=l("".slice),z=Math.max,M=function(t,e,r){return r>t.length?-1:""===e?r:k(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,o,l,y,v,W,E,B,F=d(this),H=0,T=0,$="";if(null!=t){if((r=f(t))&&(n=m(d("flags"in S?t.flags:O(t))),!~k(n,"g")))throw _("`.replaceAll` does not allow non-global regexes");if(o=w(t,C))return c(o,t,F,e);if(A&&r)return I(m(F),t,e)}for(l=m(F),y=m(t),(v=h(e))||(e=m(e)),W=y.length,E=z(1,W),H=M(l,y,0);-1!==H;)B=v?m(e(y,H,l)):x(y,l,H,[],void 0,e),$+=j(l,T,H)+B,T=H+W,H=M(l,y,H+E);return T<l.length&&($+=j(l,T)),$}})},971:function(t,e,r){var content=r(997);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("3640550a",content,!0,{sourceMap:!1})},996:function(t,e,r){"use strict";r(971)},997:function(t,e,r){var n=r(65)(!1);n.push([t.i,'.wrapperClubArticle{display:grid;grid-template-columns:[aside] min(400px,20vw) [content] auto}@media screen and (max-height:700px),screen and (max-width:1225px){.wrapperClubArticle{grid-template-columns:[content] 100%}}@media screen and (max-height:630px),screen and (max-width:370px){.wrapperClubArticle{padding-top:0}}.wrapperClubArticle .extraInfo{border-right:1px solid rgba(0,0,0,.2);position:relative;height:100%;background-color:#fcfcfc}@media screen and (max-height:700px),screen and (max-width:1225px){.wrapperClubArticle .extraInfo{display:none}}.wrapperClubArticle .extraInfo .wrapperFixed{position:sticky;position:-webkit-sticky;width:min(400px,20vw);padding-top:110px;box-sizing:border-box;height:100vh;top:0}@media screen and (max-height:760px){.wrapperClubArticle .extraInfo .wrapperFixed{position:sticky;position:-webkit-sticky;top:0}}.wrapperClubArticle .extraInfo .wrapperFixed .sectionTitle{padding-top:4vh;width:100%;text-align:left;border-bottom:1px solid rgba(0,0,0,.2);padding-bottom:5px;box-sizing:border-box;padding-left:5%;margin-bottom:20px;color:#777}.wrapperClubArticle .extraInfo .wrapperFixed .secWrapper{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%}.wrapperClubArticle .extraInfo .wrapperFixed .secWrapper .author{font-style:normal;color:#333;width:70%;font-size:2em;font-family:"Glacial-Indifference";margin-top:10px}.wrapperClubArticle .extraInfo .wrapperFixed .secWrapper .author .row{display:flex;align-items:center;padding-bottom:5px}.wrapperClubArticle .extraInfo .wrapperFixed .secWrapper .author .row .authorImage{margin-right:10px}.wrapperClubArticle .extraInfo .wrapperFixed .secWrapper .author .row .authorImage img{width:80px;border-radius:50%}.wrapperClubArticle .extraInfo .wrapperFixed .secWrapper .author p{margin-top:10px;color:#777;letter-spacing:.01em;font-size:1.3rem;line-height:1.4rem}.wrapperClubArticle .wrapperSanity{padding-top:100px;padding-bottom:200px;grid-column:content;display:flex;justify-content:center;align-items:center;width:100%}@media screen and (max-width:417px){.wrapperClubArticle .wrapperSanity{padding-bottom:50px}}.wrapperClubArticle .wrapperSanity .detailsBottom{font-style:normal;color:#333;width:100%;margin-top:50px;display:none}@media screen and (max-height:700px),screen and (max-width:1225px){.wrapperClubArticle .wrapperSanity .detailsBottom{display:block}}.wrapperClubArticle .wrapperSanity .detailsBottom .sectionTitle{padding-top:4vh;margin-left:10px;padding-left:20px;width:90%;text-align:left;border-bottom:1px solid #d8d8d8;padding-bottom:5px;color:#777;display:inline-block}@media screen and (max-width:530px){.wrapperClubArticle .wrapperSanity .detailsBottom .sectionTitle{margin-left:0}}.wrapperClubArticle .wrapperSanity .detailsBottom .sectionWrapper{margin-top:-20px;width:90%;font-size:2em;display:flex;align-items:center}.wrapperClubArticle .wrapperSanity .detailsBottom .sectionWrapper .name{font-family:"Glacial-Indifference"}.wrapperClubArticle .wrapperSanity .detailsBottom .sectionWrapper .authorImage{margin-bottom:10px}.wrapperClubArticle .wrapperSanity .detailsBottom .sectionWrapper .authorImage img{max-width:100px;width:14vw;min-width:60px;border-radius:50%}.wrapperClubArticle .wrapperSanity .detailsBottom .sectionWrapper .detailWrapper{margin-left:40px}@media screen and (max-width:530px){.wrapperClubArticle .wrapperSanity .detailsBottom .sectionWrapper .detailWrapper{margin-left:20px}}.wrapperClubArticle .wrapperSanity .detailsBottom .sectionWrapper .detailWrapper p{margin-top:10px;color:#5f5f5f;letter-spacing:.01em;font-size:1.3rem;line-height:1.4rem}.wrapperClubArticle .wrapperSanity .contentwrapperSanity{max-width:55em;padding-top:130px}@media screen and (max-width:930px),screen and (max-width:1050px)and (min-height:950px){.wrapperClubArticle .wrapperSanity .contentwrapperSanity{max-width:87%}}@media screen and (max-height:855px),screen and (max-width:417px){.wrapperClubArticle .wrapperSanity .contentwrapperSanity{padding-top:60px}}@media screen and (max-width:530px){.wrapperClubArticle .wrapperSanity .contentwrapperSanity{padding-top:100px}}@media screen and (max-width:417px){.wrapperClubArticle .wrapperSanity .contentwrapperSanity{padding-top:50px}}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .articleh1{color:#000;font-weight:400;margin-bottom:9px;margin-top:15px;line-height:1;font-size:3.9em}@media screen and (max-width:287px){.wrapperClubArticle .wrapperSanity .contentwrapperSanity .articleh1{margin-bottom:14px}}@media screen and (max-width:490px){.wrapperClubArticle .wrapperSanity .contentwrapperSanity .articleh1{font-size:3.5em}}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .detailsTop{display:flex;align-items:center;padding-top:5px}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .detailsTop .aad{font-size:1.2em}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .detailsTop .aad .by{color:#777}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .detailsTop .aad .author{font-size:1.1em;color:#333}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .detailsTop .aad .date{margin-left:.3em;color:#333}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .detailsTop .cats{margin-left:30px;display:flex;grid-gap:8px;gap:8px}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .abstract{margin-top:30px}.wrapperClubArticle .wrapperSanity .contentwrapperSanity img{margin:50px auto}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity{color:#272727}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity p{margin:5px 0;color:#333;min-height:1em;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased!important;-moz-font-smoothing:antialiased!important;text-rendering:optimizelegibility!important;letter-spacing:.05em;font-size:max(1.3em,16px);line-height:1.4}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity h4{font-size:1.7em}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity h3{font-size:2em}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity h4{font-size:2.2em}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity h1,.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity h2,.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity h3,.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity h4{margin-bottom:25px}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity ul{font-size:1.5em;color:#333}.wrapperClubArticle .wrapperSanity .contentwrapperSanity .bodySanity ul li{margin-bottom:12px;max-width:min(30em,65vw)}',""]),t.exports=n}}]);