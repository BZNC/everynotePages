webpackJsonp([3],{"WMg/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Dd8w"),a=s.n(r),n=s("NYxO"),o={date:function(){return{}},created:function(){var t=this;this.checkLogin({path:"/login"}),this.getNotebooks(),this.getTrashNotes().then(function(){t.setCurTrashNoteId({curTrashNoteId:t.$route.query.noteId}),t.$router.replace({path:"/trash",query:{noteId:t.curTrashNote.id}})})},computed:a()({},Object(n.c)(["trashNotes","curTrashNote","belongTo"])),methods:a()({},Object(n.d)(["setCurTrashNoteId"]),Object(n.b)(["checkLogin","deleteTrashNote","revertTrashNote","getTrashNotes","getNotebooks"]),{onDelete:function(){var t=this;this.$confirm("删除后将无法恢复","确定删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteTrashNote({noteId:t.curTrashNote.id}).then(function(){t.setCurTrashNoteId(),t.$router.replace({path:"/trash",query:{noteId:t.curTrashNote.id}})})})},onRevert:function(){var t=this;this.revertTrashNote({noteId:this.curTrashNote.id}).then(function(){t.setCurTrashNoteId(),t.$router.replace({path:"/trash",query:{noteId:t.curTrashNote.id}})})}}),beforeRouteUpdate:function(t,e,s){this.setCurTrashNoteId({curTrashNoteId:t.query.noteId}),s()}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail",attrs:{id:"trash"}},[s("div",{staticClass:"note-sidebar"},[s("div",{staticClass:"notebook-title"},[t._v("回收站")]),t._v(" "),t._m(0),t._v(" "),s("ul",{staticClass:"notes"},t._l(t.trashNotes,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:"/trash?noteId="+e.id}},[s("span",{staticClass:"date"},[t._v(t._s(e.updatedAtFriendly))]),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(e.title))])])],1)}),0)]),t._v(" "),s("div",{staticClass:"note-detail"},[s("div",{staticClass:"note-bar"},[s("span",[t._v("创建日期:"+t._s(t.curTrashNote.createdAtFriendly))]),t._v(" "),s("span",[t._v("|")]),t._v(" "),s("span",[t._v("更新日期:"+t._s(t.curTrashNote.updatedAtFriendly))]),t._v(" "),s("span",[t._v("|")]),t._v(" "),s("span",[t._v("所属笔记本:"+t._s(t.belongTo))]),t._v(" "),s("a",{staticClass:"btn action",on:{click:t.onDelete}},[t._v("彻底删除")]),t._v(" "),s("a",{staticClass:"btn action",on:{click:t.onRevert}},[t._v("恢复")])]),t._v(" "),s("div",{staticClass:"note-title"},[s("span",[t._v(t._s(t.curTrashNote.title))])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"editor"},[s("span",[t._v(t._s(t.curTrashNote.content))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu"},[e("div",[this._v("更新时间")]),this._v(" "),e("div",[this._v("标题")])])}]};var c=s("VU/8")(o,i,!1,function(t){s("v3Iv")},"data-v-18eccdcf",null);e.default=c.exports},v3Iv:function(t,e){}});
//# sourceMappingURL=3.bd4b3b3bfbb4b33938ab.js.map