(window.webpackJsonpunicafe_react=window.webpackJsonpunicafe_react||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),l=(n(20),n(3)),i=n(2),u=n.n(i),s=n(14),m=function(e){var t=e.handleClick,n=e.type,r=e.text;return a.a.createElement("button",{onClick:t,type:n},r)},f=function(e){var t=e.note,n=e.toggleImportant,r=e.deleteNote;return a.a.createElement("tr",{className:"note"},a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.title),a.a.createElement("td",null,t.important?"important":"not important"),a.a.createElement("td",null,a.a.createElement(m,{text:"X",handleClick:function(){return r(t.id)}})),a.a.createElement("td",null,a.a.createElement(m,{text:"toggle",handleClick:function(){return n(t.id)}})))},d="http://localhost:3001/notes",h=function(){return u.a.get(d).then(function(e){return e.data})},p=function(e){return u.a.post(d,e).then(function(e){return e.data})},v=function(e,t){return u.a.put("".concat(d,"/").concat(e),t).then(function(e){return e.data})},E=function(e){return u.a.delete("".concat(d,"/").concat(e)).then(function(e){return e.data})};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var b=function(e){var t=e.notes,n=e.showAll,r=e.setNotes,c=n?t:t.filter(function(e){return e.important}),o=function(e){var n=t.find(function(t){return t.id===e}),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){Object(s.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{important:!n.important});v(e,a).then(function(n){var a=t.map(function(t){return t.id!==e?t:n});r(a)}).catch(function(e){console.log(e.message)})};return a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"ID"),a.a.createElement("th",null,"Title"))),a.a.createElement("tbody",null,c.map(function(e){return a.a.createElement(f,{key:e.id,note:e,deleteNote:function(){return function(e){var n=t.find(function(t){return t.id===e});window.confirm("Delete ".concat(n.title," ?"))&&E(e).then(function(n){r(t.filter(function(t){return t.id!==e}))}).catch(function(e){console.log(e)})}(e.id)},toggleImportant:function(){return o(e.id)}})})))},O=function(e){var t=e.title;return a.a.createElement("h1",null,t)},w=function(e){var t=e.handleNoteChange,n=e.value;return a.a.createElement("input",{onChange:t,value:n})},y=function(e){var t=e.handleSubmit,n=e.handleNoteChange,r=e.note;return a.a.createElement("form",{onSubmit:t},a.a.createElement(w,{value:r,handleNoteChange:n}),a.a.createElement(m,{type:"submit",text:"Save"}))},j=function(e){var t=e.messages;if(0===t.length)return[];return a.a.createElement("div",null,t.map(function(e){return console.log(e),""!==e.success?a.a.createElement("div",null,a.a.createElement("div",{className:"success"},e.success)):""!==e.error?a.a.createElement("div",null,a.a.createElement("div",{className:"error"},e.error)):void 0}))},S=function(){return a.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},a.a.createElement("br",null),a.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},N=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)("a new note"),i=Object(l.a)(o,2),u=i[0],s=i[1],f=Object(r.useState)(!0),d=Object(l.a)(f,2),v=d[0],E=d[1],g=Object(r.useState)([]),w=Object(l.a)(g,2),N=w[0],k=w[1];Object(r.useEffect)(function(){h().then(function(e){c(e)}).catch(function(e){var t={error:e.message,success:""};k(N.concat(t))})},[]);return a.a.createElement("div",null,a.a.createElement(O,{title:"Notes"}),a.a.createElement(j,{messages:N}),a.a.createElement(m,{handleClick:function(){E(!v)},text:"showAll"}),a.a.createElement(b,{notes:n,showAll:v,setNotes:c}),a.a.createElement(y,{handleSubmit:function(e){e.preventDefault();var t={title:u,date:(new Date).toISOString(),important:.5*Math.random()};return n.filter(function(e){return e.title===u}).length>0?alert("The ".concat(u," already exist")):""===t.title?alert("The note cannot be empty"):void p(t).then(function(e){c(n.concat(e)),s("");var r={error:"",success:"".concat(t.title," has been added to the list")};k(N.concat(r)),setTimeout(function(){k([])},3e3)}).catch(function(e){var t={error:e.message,success:""};k(N.concat(t)),setTimeout(function(){k([])},3e3)})},handleNoteChange:function(e){console.log(e.target.value),s(e.target.value)},note:u}),a.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.a4161353.chunk.js.map