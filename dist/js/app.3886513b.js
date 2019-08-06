(function(e){function t(t){for(var r,i,s=t[0],a=t[1],u=t[2],p=0,f=[];p<s.length;p++)i=s[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/photo-review-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"113a":function(e,t,n){"use strict";var r=n("e8c2"),o=n.n(r);o.a},4869:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ListContainer"),n("PhotoContainer"),n("CommentContainer"),n("SelectionContainer"),e.errors.length?n("div",e._l(e.errors,function(t,r){return n("span",{key:r,staticClass:"red"},[e._v(e._s(t.message))])}),0):e._e()],1)},c=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-container"},[n("h1",[e._v("Photos")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("ListPhotos",{attrs:{list:e.filtered},on:{selection:e.selectPhoto}}),n("div",[n("button",{on:{click:function(t){return e.updatePagination(!1)}}},[e._v("prev")]),n("button",{on:{click:function(t){return e.updatePagination(!0)}}},[e._v("next")])])],1)},a=[],u=(n("386d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.list,function(t){return n("li",{key:t.id,class:[t.isSelected?"bold":""],on:{click:function(n){return e.select(t)}}},[e._v(" \n      #"+e._s(t.id)+" - "+e._s(t.title)+"\n    ")])}),0)}),l=[],p={name:"ListPhotos",props:{list:{type:Array,required:!1}},methods:{select:function(e){this.$emit("selection",e)}},computed:{listed:function(){return this.list}}},f=p,m=(n("a511"),n("2877")),d=Object(m["a"])(f,u,l,!1,null,null,null),O=d.exports,b=n("2f62");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P={components:{ListPhotos:O},data:function(){return{search:""}},computed:v({},Object(b["c"])(["getPhotos"]),{filtered:function(){var e=this;return this.getPhotos.filter(function(t){return t.title.indexOf(e.search)>-1})}}),methods:v({},Object(b["b"])(["fetchPhotos","updatePagination","selectPhoto"])),mounted:function(){this.fetchPhotos()}},y=P,g=(n("7a64"),Object(m["a"])(y,s,a,!1,null,null,null)),j=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selectedPhoto?n("div",{staticClass:"photo-container"},[n("h1",[e._v("Details")]),e.selectedPhoto?n("div",[n("h3",[e._v("#"+e._s(e.selectedPhoto.id)+" "+e._s(e.selectedPhoto.title)+" "),n("button",{on:{click:function(t){return e.addToSelection(e.selectedPhoto)}}},[e._v("add to selection")])]),n("a",{attrs:{href:e.selectedPhoto.url}},[e._v("See original")]),e._v(" from "),n("span",[e._v("album: "+e._s(e.selectedPhoto.albumId))]),n("div",[n("img",{attrs:{src:e.selectedPhoto.thumbnailUrl}}),n("img",{attrs:{src:e.selectedPhoto.url}})])]):e._e()]):e._e()},w=[];function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var C={name:"PhotoContainer",computed:D({},Object(b["d"])(["selectedPhoto"])),methods:D({},Object(b["b"])(["addToSelection"]))},S=C,T=(n("c6ac"),Object(m["a"])(S,_,w,!1,null,null,null)),x=T.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selectionList.length?n("div",{staticClass:"selection-container"},[n("h1",[e._v("Selection")]),e._l(e.selectionList,function(t){return n("div",{key:t.id},[n("span",[e._v("ID#"+e._s(t.id))]),n("div",[n("img",{attrs:{src:t.thumbnailUrl}})]),t.comments?n("div",e._l(t.comments,function(t,r){return n("div",{key:r},[e._v("\n        "+e._s(t.body.substring(0,20))+"...\n      ")])}),0):e._e(),n("button",{on:{click:function(n){return e.removeFromSelection(t)}}},[e._v("remove #"+e._s(t.id))])])})],2):e._e()},L=[];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A={computed:R({},Object(b["d"])(["selectionList"])),methods:R({},Object(b["b"])(["removeFromSelection"]))},N=A,$=Object(m["a"])(N,k,L,!1,null,null,null),F=$.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.getComments.length?n("div",{staticClass:"comment-container"},[n("h1",[e._v("Comments")]),e._l(e.getComments,function(t){return n("Comment",{key:t.id,attrs:{comment:t,isSelected:e.selectedPhoto.isSelected}})})],2):e._e()},U=[],G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comments"},[n("strong",[e._v(e._s(e.comment.name))]),e._v(" // "),n("i",[e._v(e._s(e.comment.email))]),n("br"),n("div",{class:[e.editable?"edit":""]},[n("code",{ref:"textField",attrs:{contenteditable:e.editable}},[e._v(e._s(e.comment.body))])]),n("br"),e.editable?e._e():n("button",{on:{click:function(t){return e.editComment(e.comment)}}},[e._v("edit")]),e.editable?n("button",{on:{click:function(t){return e.saveComment(e.comment)}}},[e._v("save")]):e._e(),n("button",{attrs:{disabled:!this.isSelected},on:{click:function(t){return e.addComment(e.comment)}}},[e._v("add to selection")])])},H=[];function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var q={props:{comment:{type:Object},isSelected:{type:Boolean}},data:function(){return{editable:!1}},methods:V({},Object(b["b"])(["updateComment","addCommentPhoto"]),{addComment:function(e){this.addCommentPhoto(e)},editComment:function(e){console.log(e),this.editable=!0},saveComment:function(e){this.editable=!1,console.log(this.$refs.textField),e.body=this.$refs.textField.innerText,this.updateComment(e)}})},B=q,z=(n("113a"),Object(m["a"])(B,G,H,!1,null,null,null)),K=z.exports;function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var X={components:{Comment:K},computed:W({},Object(b["c"])(["getComments"]),{},Object(b["d"])(["selectedPhoto"]))},Y=X,Z=Object(m["a"])(Y,I,U,!1,null,null,null),ee=Z.exports;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var re={name:"app",components:{ListContainer:j,PhotoContainer:x,CommentContainer:ee,SelectionContainer:F},computed:ne({},Object(b["d"])(["errors","selectionList"]))},oe=re,ce=(n("5c0b"),Object(m["a"])(oe,o,c,!1,null,null,null)),ie=ce.exports,se=(n("20d6"),n("96cf"),n("3b8d")),ae=n("bc3a"),ue=n.n(ae);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}r["a"].use(b["a"]);var fe=new b["a"].Store({state:{photos:[],selectedPhoto:null,errors:[],page:0,selectionList:[],comments:[],commentPage:0},getters:{getPhotos:function(e){return e.photos.slice(e.page,e.page+10)},getComments:function(e){return e.comments.filter(function(t){return t.postId===e.selectedPhoto.id})}},mutations:{ADD_ERROR:function(e,t){e.errors.push(t)},GET_PHOTOS:function(e,t){e.photos=t.map(function(e){return pe({},e,{isSelected:e.isSelected||!1,comments:[]})})},UPDATE_PAGE:function(e,t){t?e.page+=10:e.page>0&&(e.page-=10)},SELECT_PHOTO:function(e,t){e.selectedPhoto=t},ADD_TO_SELECTION:function(e,t){e.selectionList.push(t)},REMOVE_FROM_SELECTION:function(e,t){e.selectionList.splice(t,1)},ADD_COMMENTS:function(e,t){e.comments=t},UPDATE_COMMENT:function(e,t){e.comments=e.comments.map(function(e){return e.id===t.id?t:e})},ADD_COMMENT_TO_SELECTED:function(e,t){e.selectedPhoto.comments.push(t)}},actions:{updatePagination:function(e,t){var n=e.commit;n("UPDATE_PAGE",t)},fetchPhotos:function(){var e=Object(se["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,ue.a.get("https://jsonplaceholder.typicode.com/photos");case 4:return r=e.sent,n("GET_PHOTOS",r.data),e.abrupt("return");case 9:e.prev=9,e.t0=e["catch"](1),n("ADD_ERROR",e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchComments:function(){var e=Object(se["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,o=t.state,!o.comments.length){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,ue()("https://jsonplaceholder.typicode.com/photos/".concat(n,"/comments"));case 6:c=e.sent,console.log(c.data),r("ADD_COMMENTS",c.data),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),r("ADD_ERROR",e.t0);case 14:case"end":return e.stop()}},e,null,[[3,11]])}));function t(t,n){return e.apply(this,arguments)}return t}(),selectPhoto:function(e,t){var n=e.commit,r=e.state,o=e.dispatch;t.id!==r.selectedPhoto&&(n("SELECT_PHOTO",t),o("fetchComments",t.id))},addToSelection:function(e,t){var n=e.commit,r=e.state,o=r.selectionList.filter(function(e){return e.id===t.id});o.length||(t.isSelected=!0,n("ADD_TO_SELECTION",t))},removeFromSelection:function(e,t){var n=e.commit,r=e.state,o=r.selectionList.findIndex(function(e){return e.id===t.id});t.isSelected=!1,o>-1&&n("REMOVE_FROM_SELECTION",o)},updateComment:function(e,t){var n=e.commit;n("UPDATE_COMMENT",t)},addCommentPhoto:function(e,t){var n=e.commit;e.state;n("ADD_COMMENT_TO_SELECTED",t)}}});r["a"].config.productionTip=!1,new r["a"]({store:fe,render:function(e){return e(ie)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"7a64":function(e,t,n){"use strict";var r=n("4869"),o=n.n(r);o.a},"94ce":function(e,t,n){},a511:function(e,t,n){"use strict";var r=n("94ce"),o=n.n(r);o.a},c6ac:function(e,t,n){"use strict";var r=n("ea30"),o=n.n(r);o.a},e8c2:function(e,t,n){},ea30:function(e,t,n){}});
//# sourceMappingURL=app.3886513b.js.map