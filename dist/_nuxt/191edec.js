(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4,13],{1e3:function(t,e,r){var n=r(59)(!1);n.push([t.i,".wrapperArticleCard{display:flex;flex-direction:column;height:573px;padding-top:22px}@media screen and (max-width:550px),screen and (max-width:600px)and (min-height:1050px){.wrapperArticleCard{justify-content:center;padding-top:0;height:auto}.wrapperArticleCard *{max-width:90vw!important}.wrapperArticleCard .image{height:60vw!important;width:90vw!important}}.wrapperArticleCard *{max-width:497px}@media screen and (max-height:1050px){.wrapperArticleCard *{max-width:457px}}.wrapperArticleCard .image{width:497px;height:343px;margin-bottom:10px}@media screen and (max-height:1050px){.wrapperArticleCard .image{width:457px;height:316px}}@media screen and (max-width:550px),screen and (max-width:600px)and (min-height:1050px){.wrapperArticleCard .image{height:48vw!important}}.wrapperArticleCard .image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.wrapperArticleCard .taa{margin-bottom:1px;font-size:1.1em;color:#000}.wrapperArticleCard .taa .aa{top:-3px;position:relative}@media screen and (max-width:570px){.wrapperArticleCard .taa .aa{font-size:.9em}}@media screen and (max-width:430px){.wrapperArticleCard .taa .aa{font-size:.8em}}@media screen and (max-width:370px){.wrapperArticleCard .taa .aa{font-size:.7em}}@media screen and (max-width:270px){.wrapperArticleCard .taa .aa{font-size:.65em}}.wrapperArticleCard .taa .title{font-weight:400;font-size:1.8em;line-height:1.05!important;margin-top:2px;margin-bottom:5px;word-wrap:break-word}@media screen and (max-height:1050px){.wrapperArticleCard .taa .title{font-size:1.65em}}@media screen and (max-width:570px){.wrapperArticleCard .taa .title{font-size:1.65em}}@media screen and (max-width:430px){.wrapperArticleCard .taa .title{font-size:1.45em}}@media screen and (max-width:370px){.wrapperArticleCard .taa .title{font-size:1.35em}}@media screen and (max-width:270px){.wrapperArticleCard .taa .title{font-size:1.25em}}.wrapperArticleCard .taa .by{color:#777}.wrapperArticleCard .taa .author{color:#333}.wrapperArticleCard .taa .date{margin-left:.3em;color:#333}.wrapperArticleCard .abstract{font-size:1.1em;max-height:60px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.15em!important;overflow:hidden;color:#777;margin-top:2px}@media screen and (max-width:417px){.wrapperArticleCard .abstract{font-size:.9em}}.wrapperArticleCard .rmcat{margin-top:4px;display:flex;justify-content:space-between}.wrapperArticleCard .rmcat .rm{color:#d6a11a;font-weight:600;display:flex;align-items:center}@media screen and (max-width:530px){.wrapperArticleCard .rmcat .rm{font-size:.9em}}.wrapperArticleCard .rmcat .cats{margin-right:10px;margin-left:10px;display:flex;grid-gap:8px;gap:8px}",""]),t.exports=n},1047:function(t,e,r){"use strict";r.r(e);r(62),r(138),r(962);var n=r(4),o=r(927),c=n.a.extend({name:"ArticlePreview",components:{portableImage:o.default},props:{article:{type:Object,required:!0}},computed:{formatDate:function(){var t=this.article.publishedAt.substring(0,this.article.publishedAt.indexOf("T")).replaceAll("-","");return t.substring(6,8)+"/"+t.substring(4,6)+"/"+t.substring(0,4)}}}),h=(r(999),r(29)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"wrapperArticleCard"},[r("portableImage",{staticClass:"image",attrs:{asset:t.article.mainImage.asset,"new-height":"378",alt:t.article.seo.focus_keyword+" main article image"}}),t._v(" "),r("span",{staticClass:"taa"},[r("h3",{staticClass:"title"},[t._v(t._s(t.article.title))]),t._v(" "),r("span",{staticClass:"aa"},[r("i",{staticClass:"by"},[t._v("by")]),t._v(" "),r("span",{staticClass:"author"},[t._v(t._s(t.article.author.name)+",")]),r("i",{staticClass:"date"},[t._v(" "+t._s(t.formatDate))])])]),t._v(" "),r("p",{staticClass:"abstract"},[t._v("\n    "+t._s(t.article.abstract)+"\n  ")]),t._v(" "),r("div",{staticClass:"rmcat"},[r("span",{staticClass:"rm"},[t._v("READ MORE")]),t._v(" "),r("div",{staticClass:"cats"},t._l(t.article.categories,(function(t){return r("CategoryBar",{key:t._id,attrs:{cat:{name:t.title,desciption:t.desciption}}})})),1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoryBar:r(959).default})},920:function(t,e,r){var content=r(926);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("00044304",content,!0,{sourceMap:!1})},921:function(t,e,r){t.exports=function(){var t="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function e(e){var r=e.split("-"),n=r[1],o=r[2],c=r[3];if(!n||!o||!c)throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');var h=o.split("x"),l=+h[0],d=+h[1];if(!isFinite(l)||!isFinite(d))throw new Error("Malformed asset _ref '"+e+"'. Expected an id like \""+t+'".');return{id:n,width:l,height:d,format:c}}var r=function(t){return!!t&&"string"==typeof t._ref},n=function(t){return!!t&&"string"==typeof t._id},o=function(t){var source=t;return!(!source||!source.asset)&&"string"==typeof source.asset.url};function c(source){if(!source)return null;var image;if("string"==typeof source&&h(source))image={asset:{_ref:l(source)}};else if("string"==typeof source)image={asset:{_ref:source}};else if(r(source))image={asset:source};else if(n(source))image={asset:{_ref:source._id||""}};else if(o(source))image={asset:{_ref:l(source.asset.url)}};else{if("object"!=typeof source.asset)return null;image=source}var img=source;return img.crop&&(image.crop=img.crop),img.hotspot&&(image.hotspot=img.hotspot),d(image)}function h(t){return/^https?:\/\//.test(""+t)}function l(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function d(image){if(image.crop&&image.hotspot)return image;var t=Object.assign({},image);return t.crop||(t.crop={left:0,top:0,bottom:0,right:0}),t.hotspot||(t.hotspot={x:.5,y:.5,height:1,width:1}),t}var f=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function m(t){var r=Object.assign({},t||{}),source=r.source;delete r.source;var image=c(source);if(!image)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(source)+")");var n=e(image.asset._ref||image.asset._id||""),o=Math.round(image.crop.left*n.width),h=Math.round(image.crop.top*n.height),l={left:o,top:h,width:Math.round(n.width-image.crop.right*n.width-o),height:Math.round(n.height-image.crop.bottom*n.height-h)},d=image.hotspot.height*n.height/2,f=image.hotspot.width*n.width/2,m=image.hotspot.x*n.width,v=image.hotspot.y*n.height,y={left:m-f,top:v-d,right:m+f,bottom:v+d};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=Object.assign({},r,x({crop:l,hotspot:y},r))),w(Object.assign({},r,{asset:n}))}function w(t){var e=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,o=[];if(t.rect){var c=t.rect,h=c.left,l=c.top,d=c.width,m=c.height;(0!==h||0!==l||m!==t.asset.height||d!==t.asset.width)&&o.push("rect="+h+","+l+","+d+","+m)}t.bg&&o.push("bg="+t.bg),t.focalPoint&&(o.push("fp-x="+t.focalPoint.x),o.push("fp-y="+t.focalPoint.y));var w=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return w&&o.push("flip="+w),f.forEach((function(e){var r=e[0],param=e[1];void 0!==t[r]?o.push(param+"="+encodeURIComponent(t[r])):void 0!==t[param]&&o.push(param+"="+encodeURIComponent(t[param]))})),0===o.length?n:n+"?"+o.join("&")}function x(source,t){var e,r=t.width,n=t.height;if(!r||!n)return{width:r,height:n,rect:source.crop};var o=source.crop,c=source.hotspot,h=r/n;if(o.width/o.height>h){var l=Math.round(o.height),d=Math.round(l*h),f=Math.max(0,Math.round(o.top)),m=Math.round((c.right-c.left)/2+c.left),w=Math.max(0,Math.round(m-d/2));w<o.left?w=o.left:w+d>o.left+o.width&&(w=o.left+o.width-d),e={left:w,top:f,width:d,height:l}}else{var x=o.width,v=Math.round(x/h),y=Math.max(0,Math.round(o.left)),C=Math.round((c.bottom-c.top)/2+c.top),O=Math.max(0,Math.round(C-v/2));O<o.top?O=o.top:O+v>o.top+o.height&&(O=o.top+o.height-v),e={left:y,top:O,width:x,height:v}}return{width:r,height:n,rect:e}}var v=["clip","crop","fill","fillmax","max","scale","min"],y=["top","bottom","left","right","center","focalpoint","entropy"],C=["format"];function O(t){return!!t&&"object"==typeof t.clientConfig}function _(t){for(var i=0,e=f;i<e.length;i+=1){var r=e[i],n=r[0],param=r[1];if(t===n||t===param)return n}return t}function A(t){var e=t;if(O(e)){var r=e.clientConfig,n=r.apiHost,o=r.projectId,c=r.dataset;return new j(null,{baseUrl:(n||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:o,dataset:c})}return new j(null,t)}var j=function(t,e){this.options=t?Object.assign({},t.options||{},e||{}):Object.assign({},e||{})};return j.prototype.withOptions=function(t){var e=t.baseUrl||this.options.baseUrl,r={baseUrl:e};for(var n in t)t.hasOwnProperty(n)&&(r[_(n)]=t[n]);return new j(this,Object.assign({},{baseUrl:e},r))},j.prototype.image=function(source){return this.withOptions({source:source})},j.prototype.dataset=function(t){return this.withOptions({dataset:t})},j.prototype.projectId=function(t){return this.withOptions({projectId:t})},j.prototype.bg=function(t){return this.withOptions({bg:t})},j.prototype.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},j.prototype.width=function(t){return this.withOptions({width:t})},j.prototype.height=function(t){return this.withOptions({height:t})},j.prototype.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},j.prototype.maxWidth=function(t){return this.withOptions({maxWidth:t})},j.prototype.minWidth=function(t){return this.withOptions({minWidth:t})},j.prototype.maxHeight=function(t){return this.withOptions({maxHeight:t})},j.prototype.minHeight=function(t){return this.withOptions({minHeight:t})},j.prototype.size=function(t,e){return this.withOptions({width:t,height:e})},j.prototype.blur=function(t){return this.withOptions({blur:t})},j.prototype.sharpen=function(t){return this.withOptions({sharpen:t})},j.prototype.rect=function(t,e,r,n){return this.withOptions({rect:{left:t,top:e,width:r,height:n}})},j.prototype.format=function(t){return this.withOptions({format:t})},j.prototype.invert=function(t){return this.withOptions({invert:t})},j.prototype.orientation=function(t){return this.withOptions({orientation:t})},j.prototype.quality=function(t){return this.withOptions({quality:t})},j.prototype.forceDownload=function(t){return this.withOptions({download:t})},j.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},j.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},j.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},j.prototype.fit=function(t){if(-1===v.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},j.prototype.crop=function(t){if(-1===y.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},j.prototype.saturation=function(t){return this.withOptions({saturation:t})},j.prototype.auto=function(t){if(-1===C.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},j.prototype.pad=function(t){return this.withOptions({pad:t})},j.prototype.url=function(){return m(this.options)},j.prototype.toString=function(){return this.url()},A}()},925:function(t,e,r){"use strict";r(920)},926:function(t,e,r){var n=r(59)(!1);n.push([t.i,".cover[data-v-23f2ac0b]{display:block;width:100%}",""]),t.exports=n},927:function(t,e,r){"use strict";r.r(e);var n=r(921),o=r.n(n),c=r(4).a.extend({props:{asset:{type:Object,required:!0},newHeight:{type:String,required:!1,default:""},alt:{type:String,required:!1,default:""}},computed:{newHeightString:function(){return""!==this.newHeight?"?h="+this.newHeight:""},keyword:function(){return this.$accessor&&""===this.alt?this.$accessor.currentArticleKeyword:this.alt}},methods:{urlFor:function(t){return o()(this.$sanity.config).image(t)}}}),h=(r(925),r(29)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"imgwrapper"},[r("img",{staticClass:"cover",attrs:{src:t.urlFor(t.asset._ref).url()+t.newHeightString,quality:"85",alt:t.keyword}})])}),[],!1,null,"23f2ac0b",null);e.default=component.exports},936:function(t,e,r){var content=r(953);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("013a44f0",content,!0,{sourceMap:!1})},952:function(t,e,r){"use strict";r(936)},953:function(t,e,r){var n=r(59)(!1);n.push([t.i,".wrapper[data-v-cadd3d26]{display:flex;justify-content:center;align-items:center;border:1px solid #ebebeb;background-color:#f7f7f7;padding:2px 7px;box-sizing:border-box;border-radius:1px}.wrapper .catName[data-v-cadd3d26]{color:#777;font-size:max(.8em,10px)}",""]),t.exports=n},959:function(t,e,r){"use strict";r.r(e);var n=r(4).a.extend({props:{cat:{type:Object,required:!0}}}),o=(r(952),r(29)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("span",{staticClass:"catName",attrs:{title:t.cat.desciption}},[t._v(t._s(t.cat.name))])])}),[],!1,null,"cadd3d26",null);e.default=component.exports},962:function(t,e,r){r(963)},963:function(t,e,r){"use strict";var n=r(19),o=r(8),c=r(30),h=r(14),l=r(61),d=r(22),f=r(232),m=r(40),w=r(96),x=r(233),v=r(509),y=r(20),C=r(68),O=y("replace"),_=RegExp.prototype,A=o.TypeError,j=h(x),M=h("".indexOf),z=h("".replace),I=h("".slice),E=Math.max,k=function(t,e,r){return r>t.length?-1:""===e?r:M(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,o,h,x,y,H,P,U,R=l(this),$=0,S=0,W="";if(null!=t){if((r=f(t))&&(n=m(l("flags"in _?t.flags:j(t))),!~M(n,"g")))throw A("`.replaceAll` does not allow non-global regexes");if(o=w(t,O))return c(o,t,R,e);if(C&&r)return z(m(R),t,e)}for(h=m(R),x=m(t),(y=d(e))||(e=m(e)),H=x.length,P=E(1,H),$=k(h,x,0);-1!==$;)U=y?m(e(x,$,h)):v(x,h,$,[],void 0,e),W+=I(h,S,$)+U,S=$+H,$=k(h,x,$+P);return S<h.length&&(W+=I(h,S)),W}})},977:function(t,e,r){var content=r(1e3);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("02afa044",content,!0,{sourceMap:!1})},999:function(t,e,r){"use strict";r(977)}}]);