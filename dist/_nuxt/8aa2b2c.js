(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{931:function(t,o,r){var content=r(934);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("00044304",content,!0,{sourceMap:!1})},932:function(t,o,r){t.exports=function(){var t="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function o(o){var r=o.split("-"),e=r[1],n=r[2],h=r[3];if(!e||!n||!h)throw new Error("Malformed asset _ref '"+o+"'. Expected an id like \""+t+'".');var f=n.split("x"),c=+f[0],l=+f[1];if(!isFinite(c)||!isFinite(l))throw new Error("Malformed asset _ref '"+o+"'. Expected an id like \""+t+'".');return{id:e,width:c,height:l,format:h}}var r=function(t){return!!t&&"string"==typeof t._ref},e=function(t){return!!t&&"string"==typeof t._id},n=function(t){var source=t;return!(!source||!source.asset)&&"string"==typeof source.asset.url};function h(source){if(!source)return null;var image;if("string"==typeof source&&f(source))image={asset:{_ref:c(source)}};else if("string"==typeof source)image={asset:{_ref:source}};else if(r(source))image={asset:source};else if(e(source))image={asset:{_ref:source._id||""}};else if(n(source))image={asset:{_ref:c(source.asset.url)}};else{if("object"!=typeof source.asset)return null;image=source}var img=source;return img.crop&&(image.crop=img.crop),img.hotspot&&(image.hotspot=img.hotspot),l(image)}function f(t){return/^https?:\/\//.test(""+t)}function c(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function l(image){if(image.crop&&image.hotspot)return image;var t=Object.assign({},image);return t.crop||(t.crop={left:0,top:0,bottom:0,right:0}),t.hotspot||(t.hotspot={x:.5,y:.5,height:1,width:1}),t}var d=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function w(t){var r=Object.assign({},t||{}),source=r.source;delete r.source;var image=h(source);if(!image)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(source)+")");var e=o(image.asset._ref||image.asset._id||""),n=Math.round(image.crop.left*e.width),f=Math.round(image.crop.top*e.height),c={left:n,top:f,width:Math.round(e.width-image.crop.right*e.width-n),height:Math.round(e.height-image.crop.bottom*e.height-f)},l=image.hotspot.height*e.height/2,d=image.hotspot.width*e.width/2,w=image.hotspot.x*e.width,v=image.hotspot.y*e.height,O={left:w-d,top:v-l,right:w+d,bottom:v+l};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=Object.assign({},r,m({crop:c,hotspot:O},r))),y(Object.assign({},r,{asset:e}))}function y(t){var o=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,e=o+"/images/"+t.projectId+"/"+t.dataset+"/"+r,n=[];if(t.rect){var h=t.rect,f=h.left,c=h.top,l=h.width,w=h.height;(0!==f||0!==c||w!==t.asset.height||l!==t.asset.width)&&n.push("rect="+f+","+c+","+l+","+w)}t.bg&&n.push("bg="+t.bg),t.focalPoint&&(n.push("fp-x="+t.focalPoint.x),n.push("fp-y="+t.focalPoint.y));var y=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return y&&n.push("flip="+y),d.forEach((function(o){var r=o[0],param=o[1];void 0!==t[r]?n.push(param+"="+encodeURIComponent(t[r])):void 0!==t[param]&&n.push(param+"="+encodeURIComponent(t[param]))})),0===n.length?e:e+"?"+n.join("&")}function m(source,t){var o,r=t.width,e=t.height;if(!r||!e)return{width:r,height:e,rect:source.crop};var n=source.crop,h=source.hotspot,f=r/e;if(n.width/n.height>f){var c=Math.round(n.height),l=Math.round(c*f),d=Math.max(0,Math.round(n.top)),w=Math.round((h.right-h.left)/2+h.left),y=Math.max(0,Math.round(w-l/2));y<n.left?y=n.left:y+l>n.left+n.width&&(y=n.left+n.width-l),o={left:y,top:d,width:l,height:c}}else{var m=n.width,v=Math.round(m/f),O=Math.max(0,Math.round(n.left)),x=Math.round((h.bottom-h.top)/2+h.top),M=Math.max(0,Math.round(x-v/2));M<n.top?M=n.top:M+v>n.top+n.height&&(M=n.top+n.height-v),o={left:O,top:M,width:m,height:v}}return{width:r,height:e,rect:o}}var v=["clip","crop","fill","fillmax","max","scale","min"],O=["top","bottom","left","right","center","focalpoint","entropy"],x=["format"];function M(t){return!!t&&"object"==typeof t.clientConfig}function j(t){for(var i=0,o=d;i<o.length;i+=1){var r=o[i],e=r[0],param=r[1];if(t===e||t===param)return e}return t}function _(t){var o=t;if(M(o)){var r=o.clientConfig,e=r.apiHost,n=r.projectId,h=r.dataset;return new H(null,{baseUrl:(e||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:n,dataset:h})}return new H(null,t)}var H=function(t,o){this.options=t?Object.assign({},t.options||{},o||{}):Object.assign({},o||{})};return H.prototype.withOptions=function(t){var o=t.baseUrl||this.options.baseUrl,r={baseUrl:o};for(var e in t)t.hasOwnProperty(e)&&(r[j(e)]=t[e]);return new H(this,Object.assign({},{baseUrl:o},r))},H.prototype.image=function(source){return this.withOptions({source:source})},H.prototype.dataset=function(t){return this.withOptions({dataset:t})},H.prototype.projectId=function(t){return this.withOptions({projectId:t})},H.prototype.bg=function(t){return this.withOptions({bg:t})},H.prototype.dpr=function(t){return this.withOptions(t&&1!==t?{dpr:t}:{})},H.prototype.width=function(t){return this.withOptions({width:t})},H.prototype.height=function(t){return this.withOptions({height:t})},H.prototype.focalPoint=function(t,o){return this.withOptions({focalPoint:{x:t,y:o}})},H.prototype.maxWidth=function(t){return this.withOptions({maxWidth:t})},H.prototype.minWidth=function(t){return this.withOptions({minWidth:t})},H.prototype.maxHeight=function(t){return this.withOptions({maxHeight:t})},H.prototype.minHeight=function(t){return this.withOptions({minHeight:t})},H.prototype.size=function(t,o){return this.withOptions({width:t,height:o})},H.prototype.blur=function(t){return this.withOptions({blur:t})},H.prototype.sharpen=function(t){return this.withOptions({sharpen:t})},H.prototype.rect=function(t,o,r,e){return this.withOptions({rect:{left:t,top:o,width:r,height:e}})},H.prototype.format=function(t){return this.withOptions({format:t})},H.prototype.invert=function(t){return this.withOptions({invert:t})},H.prototype.orientation=function(t){return this.withOptions({orientation:t})},H.prototype.quality=function(t){return this.withOptions({quality:t})},H.prototype.forceDownload=function(t){return this.withOptions({download:t})},H.prototype.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},H.prototype.flipVertical=function(){return this.withOptions({flipVertical:!0})},H.prototype.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},H.prototype.fit=function(t){if(-1===v.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},H.prototype.crop=function(t){if(-1===O.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},H.prototype.saturation=function(t){return this.withOptions({saturation:t})},H.prototype.auto=function(t){if(-1===x.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},H.prototype.pad=function(t){return this.withOptions({pad:t})},H.prototype.url=function(){return w(this.options)},H.prototype.toString=function(){return this.url()},_}()},933:function(t,o,r){"use strict";r(931)},934:function(t,o,r){var e=r(61)(!1);e.push([t.i,".cover[data-v-23f2ac0b]{display:block;width:100%}",""]),t.exports=e},938:function(t,o,r){"use strict";r.r(o);var e=r(932),n=r.n(e),h=r(4).a.extend({props:{asset:{type:Object,required:!0},newHeight:{type:String,required:!1,default:""},alt:{type:String,required:!1,default:""}},computed:{newHeightString:function(){return""!==this.newHeight?"?h="+this.newHeight:""},keyword:function(){return this.$accessor&&""===this.alt?this.$accessor.currentArticleKeyword:this.alt}},methods:{urlFor:function(t){return n()(this.$sanity.config).image(t)}}}),f=(r(933),r(29)),component=Object(f.a)(h,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"imgwrapper"},[r("img",{staticClass:"cover",attrs:{src:t.urlFor(t.asset._ref).url()+t.newHeightString,quality:"85",alt:t.keyword}})])}),[],!1,null,"23f2ac0b",null);o.default=component.exports}}]);