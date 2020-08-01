(this["webpackJsonpsleep-chart"]=this["webpackJsonpsleep-chart"]||[]).push([[0],{21:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),u=function(){return r.a.createElement("h2",null,"Sleep Chart")},o=function(e){var t=parseInt(e,10),a=Math.floor(t/36e5);return a+"hr "+Math.floor((t-36e5*a)/6e4)+"min"},s=a(2),i=a.n(s),d=a(7),m=a(4),p=a(20),f=a(5),E=function(e,t){switch(t.type){case"GET_DATA":return Object(f.a)({},e,{loading:!1,data:t.payload});case"DELETE_DATUM":return Object(f.a)({},e,{data:e.data.filter((function(e){return e._id!==t.payload}))});case"ADD_DATUM":return Object(f.a)({},e,{data:[].concat(Object(p.a)(e.data),[t.payload])});case"DATA_ERROR":return Object(f.a)({},e,{error:t.payload});default:return e}},h=a(8),v=a.n(h),b={data:[],error:null,loading:!0},D=Object(n.createContext)(b),y=function(e){var t=e.children,a=Object(n.useReducer)(E,b),c=Object(m.a)(a,2),l=c[0],u=c[1],o=function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/v1/data");case 3:t=e.sent,u({type:"GET_DATA",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u({type:"DATA_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/api/v1/data/".concat(t));case 3:u({type:"DELETE_DATUM",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),u({type:"DATA_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,v.a.post("/api/v1/data",t,a);case 4:n=e.sent,u({type:"ADD_DATUM",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),u({type:"DATA_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(D.Provider,{value:{data:l.data,error:l.error,loading:l.loading,getData:o,deleteDatum:s,addDatum:p}},t)},g=function(){var e=Object(n.useContext)(D).data.map((function(e){return Date.parse(e.ends)-Date.parse(e.starts)})),t=e.reduce((function(e,t){return e+t}),0),a=0===t?"0hr 0min":o((t/e.length).toFixed(0));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Asleep Average"),r.a.createElement("h1",null,a))},O=a(19),A=a.n(O),j=function(){var e=Object(n.useContext)(D).data.slice(0,7);return(e=e.map((function(e){var t=new Date(e.starts),a=new Date(e.ends),n=function(e){switch(e){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat";default:return""}}(a.getDay());return t.setMonth(0),a.setMonth(0),t.setDate(1),a.setDate(1),console.log(t.valueOf()),console.log(a.valueOf()),{x:n,y:[t.getTime(),a.getTime()]}}))).reverse(),console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Sleep Analysis"),r.a.createElement("div",{className:"chart-container"},e.length>0?r.a.createElement(A.a,{type:"rangeBar",series:[{data:e}],width:"350px",height:"100%",options:{plotOptions:{bar:{horizontal:!0}},xaxis:{type:"datetime",labels:{datetimeUTC:!1,format:"h"}}}}):"No recorded data"))},x=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),u=Object(m.a)(l,2),o=u[0],s=u[1],i=Object(n.useContext)(D).addDatum;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add Data"),r.a.createElement("form",{onSubmit:function(e){(e.preventDefault(),a<o)&&i({starts:a,ends:o})}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"datetime-local"},"Starts"),r.a.createElement("input",{type:"datetime-local",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"datetime-local"},"Ends"),r.a.createElement("input",{type:"datetime-local",value:o,onChange:function(e){return s(e.target.value)}})),r.a.createElement("button",{className:"btn"},"Add")))},T=function(e){var t=e.datum,a=Object(n.useContext)(D).deleteDatum,c=Date.parse(t.starts),l=Date.parse(t.ends),u=new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).formatRange(c,l);return r.a.createElement("li",null,u,r.a.createElement("span",null,o(l-c)),r.a.createElement("button",{onClick:function(){return a(t._id)},className:"delete-btn"},"x"))},R=function(){var e=Object(n.useContext)(D),t=e.data,a=e.getData;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"All Recorded Data"),r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(T,{key:e._id,datum:e})}))))},w=(a(48),function(){return r.a.createElement(y,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement(j,null),r.a.createElement(x,null),r.a.createElement(R,null)))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2151a9e9.chunk.js.map