(window.webpackJsonp=window.webpackJsonp||[]).push([[24,6,12],{912:function(t,e,r){"use strict";function n(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}r.d(e,"a",(function(){return n}))},913:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));encodeURIComponent;const n=String.raw||((t,...e)=>{const r=t.length-1;return t.slice(0,r).reduce(((t,r,n)=>t+r+e[n]),"")+t[r]})},914:function(t,e,r){t.exports=function(){var t="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function e(e){var r=e.split("-"),n=r[1],o=r[2],h=r[3];if(!n||!o||!h)throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');var c=o.split("x"),f=+c[0],l=+c[1];if(!isFinite(f)||!isFinite(l))throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');return{id:n,width:f,height:l,format:h}}var r=function(t){return!!t&&"string"==typeof t._ref},n=function(t){return!!t&&"string"==typeof t._id},o=function(t){var source=t;return!(!source||!source.asset)&&"string"==typeof source.asset.url};function h(source){if(!source)return null;var image;if("string"==typeof source&&c(source))image={asset:{_ref:f(source)}};else if("string"==typeof source)image={asset:{_ref:source}};else if(r(source))image={asset:source};else if(n(source))image={asset:{_ref:source._id||""}};else if(o(source))image={asset:{_ref:f(source.asset.url)}};else{if("object"!=typeof source.asset)return null;image=source}var img=source;return img.crop&&(image.crop=img.crop),img.hotspot&&(image.hotspot=img.hotspot),l(image)}function c(t){return/^https?:\/\//.test(""+t)}function f(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function l(image){if(image.crop&&image.hotspot)return image;var t=Object.assign({},image);return t.crop||(t.crop={left:0,top:0,bottom:0,right:0}),t.hotspot||(t.hotspot={x:.5,y:.5,height:1,width:1}),t}var d=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function y(t){var r=Object.assign({},t||{}),source=r.source;delete r.source;var image=h(source);if(!image)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(source)+")");var n=e(image.asset._ref||image.asset._id||""),o=Math.round(image.crop.left*n.width),c=Math.round(image.crop.top*n.height),f={left:o,top:c,width:Math.round(n.width-image.crop.right*n.width-o),height:Math.round(n.height-image.crop.bottom*n.height-c)},l=image.hotspot.height*n.height/2,d=image.hotspot.width*n.width/2,y=image.hotspot.x*n.width,v=image.hotspot.y*n.height,O={left:y-d,top:v-l,right:y+d,bottom:v+l};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=Object.assign({},r,w({crop:f,hotspot:O},r))),m(Object.assign({},r,{asset:n}))}function m(t){var e=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,o=[];if(t.rect){var h=t.rect,c=h.left,f=h.top,l=h.width,y=h.height;(0!==c||0!==f||y!==t.asset.height||l!==t.asset.width)&&o.push("rect="+c+","+f+","+l+","+y)}t.bg&&o.push("bg="+t.bg),t.focalPoint&&(o.push("fp-x="+t.focalPoint.x),o.push("fp-y="+t.focalPoint.y));var m=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return m&&o.push("flip="+m),d.forEach((function(e){var r=e[0],param=e[1];void 0!==t[r]?o.push(param+"="+encodeURIComponent(t[r])):void 0!==t[param]&&o.push(param+"="+encodeURIComponent(t[param]))})),0===o.length?n:n+"?"+o.join("&")}function w(source,t){var e,r=t.width,n=t.height;if(!r||!n)return{width:r,height:n,rect:source.crop};var o=source.crop,h=source.hotspot,c=r/n;if(o.width/o.height>c){var f=Math.round(o.height),l=Math.round(f*c),d=Math.max(0,Math.round(o.top)),y=Math.round((h.right-h.left)/2+h.left),m=Math.max(0,Math.round(y-l/2));m<o.left?m=o.left:m+l>o.left+o.width&&(m=o.left+o.width-l),e={left:m,top:d,width:l,height:f}}else{var w=o.width,v=Math.round(w/c),O=Math.max(0,Math.round(o.left)),I=Math.round((h.bottom-h.top)/2+h.top),x=Math.max(0,Math.round(I-v/2));x<o.top?x=o.top:x+v>o.top+o.height&&(x=o.top+o.height-v),e={left:O,top:x,width:w,height:v}}return{width:r,height:n,rect:e}}var v=["clip","crop","fill","fillmax","max","scale","min"],O=["top","bottom","left","right","center","focalpoint","entropy"],I=["format"];function x(t){return!!t&&"object"==typeof t.clientConfig}function _(t){for(var i=0,e=d;i<e.length;i+=1){var r=e[i],n=r[0],param=r[1];if(t===n||t===param)return n}return t}function j(t){var e=t;if(x(e)){var r=e.clientConfig,n=r.apiHost,o=r.projectId,h=r.dataset;return new k(null,{baseUrl:(n||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:o,dataset:h})}return new k(null,t)}var k=function(t,e){this.options=t?Object.assign({},t.options||{},e||{}):Object.assign({},e||{})};return k.prototype.withOptions=function(t){var e=t.baseUrl||this.options.baseUrl,r={baseUrl:e};for(var n in t)t.hasOwnProperty(n)&&(r[_(n)]=t[n]);return new k(this,Object.assign({},{baseUrl:e},r))},k.prototype.image=function(source){return this.withOptions({source:source})},k.prototype.dataset=function(t){return this.withOptions({dataset:t})},k.prototype.projectId=function(t){return this.withOptions({projectId:t})},k.prototype.bg=function(t){return this.withOptions({bg:t})},k.prototype.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},k.prototype.width=function(t){return this.withOptions({width:t})},k.prototype.height=function(t){return this.withOptions({height:t})},k.prototype.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},k.prototype.maxWidth=function(t){return this.withOptions({maxWidth:t})},k.prototype.minWidth=function(t){return this.withOptions({minWidth:t})},k.prototype.maxHeight=function(t){return this.withOptions({maxHeight:t})},k.prototype.minHeight=function(t){return this.withOptions({minHeight:t})},k.prototype.size=function(t,e){return this.withOptions({width:t,height:e})},k.prototype.blur=function(t){return this.withOptions({blur:t})},k.prototype.sharpen=function(t){return this.withOptions({sharpen:t})},k.prototype.rect=function(t,e,r,n){return this.withOptions({rect:{left:t,top:e,width:r,height:n}})},k.prototype.format=function(t){return this.withOptions({format:t})},k.prototype.invert=function(t){return this.withOptions({invert:t})},k.prototype.orientation=function(t){return this.withOptions({orientation:t})},k.prototype.quality=function(t){return this.withOptions({quality:t})},k.prototype.forceDownload=function(t){return this.withOptions({download:t})},k.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},k.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},k.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},k.prototype.fit=function(t){if(-1===v.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},k.prototype.crop=function(t){if(-1===O.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},k.prototype.saturation=function(t){return this.withOptions({saturation:t})},k.prototype.auto=function(t){if(-1===I.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},k.prototype.pad=function(t){return this.withOptions({pad:t})},k.prototype.url=function(){return y(this.options)},k.prototype.toString=function(){return this.url()},j}()},931:function(t,e,r){"use strict";function n(t){return null!==t&&"object"==typeof t}function o(t,e,r=".",h){if(!n(e))return o(t,{},r,h);const c=Object.assign({},e);for(const e in t){if("__proto__"===e||"constructor"===e)continue;const f=t[e];null!=f&&(h&&h(c,e,f,r)||(Array.isArray(f)&&Array.isArray(c[e])?c[e]=c[e].concat(f):n(f)&&n(c[e])?c[e]=o(f,c[e],(r?`${r}.`:"")+e.toString(),h):c[e]=f))}return c}function h(t){return(...e)=>e.reduce(((p,e)=>o(p,e,"",t)),{})}r.r(e);const c=h();c.fn=h(((t,e,r,n)=>{if(void 0!==t[e]&&"function"==typeof r)return t[e]=r(t[e]),!0})),c.arrayFn=h(((t,e,r,n)=>{if(Array.isArray(t[e])&&"function"==typeof r)return t[e]=r(t[e]),!0})),c.extend=h,e.default=c},935:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const o=n(r(931)),h={types:{span:"span",image:"img"},marks:{strong:"strong",em:"em",link:"a"},styles:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",normal:"p",blockquote:"blockquote"},listItem:"li",container:"div"};let c=1;function f(t){if(!t)return{};const e=Object.entries(t).reduce(((t,[e,r])=>{switch(!0){case["_key","key"].includes(e):return t.key=r||null,t;case["class","href","src"].includes(e):return t.attrs[e]=r,t;case["_type"].includes(e):return t;default:return t.props[e]=r,t}}),{props:{},attrs:{}});return e.props={level:c,...e.props},e}function l(t,e){if(!t)return;const{_type:r,listItem:n}=t;return n?e.listItem||"li":r&&r in e.types?e.types[r]:r&&r in e.marks?e.marks[r]:void 0}function d(t,content,[mark,...e]=[],r=h,n=[]){if(!mark)return content;const o=mark in r.marks?{_type:mark,_key:""}:n.find((t=>t._key===mark));return t(l(o,r)||"span",f(o),[d(t,content,e,r,n)])}function y(t,e){const{length:r}=t;if(!e.level)return t.push(e),t;const{_type:n,children:o,level:h}=t[r-1]||{};return"list"===n&&o?h===e.level?o.push(e):y(o,e):t.push({_type:"list",children:[e],level:e.level}),t}function m(t,e,r,n=!1){return(n?e:e.reduce(y,[])).map((e=>{const n=function(t,{style:style,listItem:e},r,n){const o=style?style.match(/^h(\d)$/):[];return!e&&o&&o.length>1&&(c=Number(o[1])),!e&&style&&r.styles[style]?t(r.styles[style],{},n):n}(t,e,r,function(t,e,content,r){const n=l(e,r);return n?[t(n,f(e),content)]:content}(t,e,"block"===e._type?(e.children||[]).map((n=>"span"!==n._type?t(l(n,r)||"span",f(n),[d(t,n.text,n.marks,r,e.markDefs)]):d(t,n.text,n.marks,r,e.markDefs))):[],r));return n}))}const w={name:"SanityContent",functional:!0,props:{blocks:{type:Array,default:()=>[]},serializers:{type:Object,default:()=>({})},renderContainerOnSingleChild:{type:Boolean,default:!1}},render(t,{props:e,data:data}){const r=o.default(e.serializers,h);return r.types.list=r.types.list||{name:"ListComponent",functional:!0,props:{children:{type:Array,default:()=>[]}},render:(h2,{props:t})=>h2(t.children.length&&"number"===t.children[0].listItem?"ol":"ul",{},m(h2,t.children,r,!0))},t(r.container,data,m(t,e.blocks||[],r))}};e.SanityContent=w,e.default=w},947:function(t,e,r){var n=r(14);t.exports=n(1..valueOf)},948:function(t,e,r){var n=r(14),o=r(58),h=r(37),c=r(949),f=n("".replace),l="["+c+"]",d=RegExp("^"+l+l+"*"),y=RegExp(l+l+"*$"),m=function(t){return function(e){var r=h(o(e));return 1&t&&(r=f(r,d,"")),2&t&&(r=f(r,y,"")),r}};t.exports={start:m(1),end:m(2),trim:m(3)}},949:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},954:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(250);var o=r(296),h=r(188);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(h.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},961:function(t,e,r){"use strict";var n=r(33),o=r(7),h=r(14),c=r(229),f=r(51),l=r(41),d=r(504),y=r(92),m=r(228),w=r(502),v=r(17),O=r(166).f,I=r(80).f,x=r(48).f,_=r(947),j=r(948).trim,k="Number",E=o.Number,M=E.prototype,N=o.TypeError,A=h("".slice),S=h("".charCodeAt),P=function(t){var e=w(t,"number");return"bigint"==typeof e?e:C(e)},C=function(t){var e,r,n,o,h,c,f,code,l=w(t,"number");if(m(l))throw N("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=j(l),43===(e=S(l,0))||45===e){if(88===(r=S(l,2))||120===r)return NaN}else if(48===e){switch(S(l,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+l}for(c=(h=A(l,2)).length,f=0;f<c;f++)if((code=S(h,f))<48||code>o)return NaN;return parseInt(h,n)}return+l};if(c(k,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var U,R=function(t){var e=arguments.length<1?0:E(P(t)),r=this;return y(M,r)&&v((function(){_(r)}))?d(Object(e),r,R):e},H=n?O(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;H.length>z;z++)l(E,U=H[z])&&!l(R,U)&&x(R,U,I(E,U));R.prototype=M,M.constructor=R,f(o,k,R)}}}]);