(this["webpackJsonpmemories-fe"]=this["webpackJsonpmemories-fe"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(15),s=a(19),o=a(60),l=a(43),u=a(149),d=a(150),p=a(141),j=a(153),b=a(148),f=a(17),m=a.n(f),x=a(34),h=a(35),g=a.n(h),O="https://memories-project-pm.herokuapp.com/posts",v=function(e,t){return g.a.patch("".concat(O,"/").concat(e),t)},y=function(e){return g.a.delete("".concat(O,"/").concat(e))},C="FETCH_ALL",k="CREATE",w="UPDATE",N="DELETE",E=function(e,t){return function(){var a=Object(x.a)(m.a.mark((function a(n){var r,c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v(e,t);case 3:r=a.sent,c=r.data,n({type:w,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},S=a(147),D=a(27),z=a(61),P=a.n(z),T=a(138),_=a(140),A=a(152),I=a(143),W=a(144),B=a(142),F=a(145),L=a(146),M=a(135),R=Object(M.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},tag:{textTransform:"uppercase",fontSize:"11px",borderRadius:"4px",backgroundColor:"rgb(220,220,220)",padding:"2px 6px",margin:"2px"}}),H=a(5),J=function(e){var t=e.post,a=e.setEditedPost,n=R(),r=Object(i.b)();return Object(H.jsxs)(T.a,{className:n.card,children:[Object(H.jsx)(_.a,{className:n.media,image:t.selectedFile||" ",title:t.title}),Object(H.jsxs)("div",{className:n.overlay,children:[Object(H.jsx)(p.a,{variant:"h6",children:t.creator}),Object(H.jsx)(p.a,{variant:"body2",children:P()(t.createdAt).fromNow()})]}),Object(H.jsx)("div",{className:n.overlay2,children:Object(H.jsxs)(A.a,{style:{color:"white"},size:"small",onClick:function(){a(t._id)},children:[Object(H.jsx)(B.a,{fontSize:"default"})," "]})}),Object(H.jsxs)("div",{className:n.details,children:[Object(H.jsx)(p.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return Object(H.jsxs)("span",{className:n.tag,children:["#",e]},e)}))}),Object(H.jsx)(p.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(H.jsx)(I.a,{children:Object(H.jsx)(p.a,{className:n.message,variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(H.jsxs)(W.a,{className:n.cardActions,children:[Object(H.jsxs)(A.a,{size:"small",color:"primary",onClick:function(){r(E(t._id,Object(D.a)(Object(D.a)({},t),{},{likeCount:t.likeCount+1})))},children:[Object(H.jsx)(F.a,{fontSize:"small"}),"Like ",t.likeCount]}),Object(H.jsxs)(A.a,{size:"small",color:"primary",onClick:function(){var e;r((e=t._id,function(){var t=Object(x.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:a({type:N,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(H.jsx)(L.a,{fontSize:"small"}),"Delete"]})]})]})]})},U=Object(M.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),V=function(e){var t=e.setEditedPost,a=U(),n=Object(i.c)((function(e){return e.posts}));return n.length?Object(H.jsx)(b.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(H.jsx)(b.a,{item:!0,xs:12,sm:6,children:Object(H.jsx)(J,{post:e,setEditedPost:t})},e._id)}))}):Object(H.jsx)(S.a,{})},q=a(40),G=a(69),K=a(151),Q=a(66),X=a.n(Q),Y=Object(M.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Z=function(e){var t=e.editedPost,a=e.setEditedPost,r=Y(),c=Object(i.b)(),s={title:"",message:"",creator:"",tags:[""],selectedFile:""},o=Object(n.useState)(s),u=Object(l.a)(o,2),d=u[0],j=u[1],b=function(e,t){j(Object(D.a)(Object(D.a)({},d),{},Object(q.a)({},e,t)))},f=Object(i.c)((function(e){return e.posts.find((function(e){return e._id===t}))}));Object(n.useEffect)((function(){f&&j(f)}),[f]);var h=function(){a(null),j(s)};return Object(H.jsx)(G.a,{className:r.paper,children:Object(H.jsxs)("form",{autoComplete:"off",noValidate:!0,className:[r.form,r.root].join(" "),onSubmit:function(e){e.preventDefault(),t?c(E(t,d)):(console.log("postData: ",d),c(function(e){return function(){var t=Object(x.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,g.a.post(O,c);case 3:n=t.sent,r=n.data,a({type:k,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(d))),h()},children:[Object(H.jsxs)(p.a,{variant:"h6",children:[t?"Editing":"Creating"," a memory"]}),Object(H.jsx)(K.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:d.creator,onChange:function(e){return b("creator",e.target.value)}}),Object(H.jsx)(K.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:d.title,onChange:function(e){return b("title",e.target.value)}}),Object(H.jsx)(K.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:d.message,onChange:function(e){return b("message",e.target.value)}}),Object(H.jsx)(K.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:d.tags,onChange:function(e){return b("tags",e.target.value.split(","))}}),Object(H.jsx)("div",{className:r.fileInput,children:Object(H.jsx)(X.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return b("selectedFile",t)}})}),Object(H.jsx)(A.a,{className:r.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(H.jsx)(A.a,{variant:"contained",color:"secondary",size:"small",onClick:h,fullWidth:!0,children:"Clear"})]})})},$=a.p+"static/media/memories.9cfa8a46.png",ee=Object(M.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})),te=function(){var e=ee(),t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(x.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(O);case 3:a=e.sent,n=a.data,t({type:C,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[r,s]),Object(H.jsxs)(u.a,{maxwidth:"lg",children:[Object(H.jsxs)(d.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(H.jsx)(p.a,{className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(H.jsx)("img",{className:e.heading,src:$,alt:"memories",height:"60"})]}),Object(H.jsx)(j.a,{in:!0,children:Object(H.jsx)(u.a,{children:Object(H.jsxs)(b.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(H.jsx)(b.a,{item:!0,xs:12,sm:7,children:Object(H.jsx)(V,{setEditedPost:c})}),Object(H.jsx)(b.a,{item:!0,xs:12,sm:4,children:Object(H.jsx)(Z,{editedPost:r,setEditedPost:c})})]})})})]})},ae=a(67),ne=[],re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.payload;case k:return[].concat(Object(ae.a)(e),[t.payload]);case w:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case N:return e.filter((function(e){return e._id!==t.payload}));default:return e}},ce=Object(s.c)({posts:re}),ie=(a(104),Object(s.e)(ce,Object(s.d)(Object(s.a)(o.a))));c.a.render(Object(H.jsx)(i.a,{store:ie,children:Object(H.jsx)(te,{})}),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.b5d9532e.chunk.js.map