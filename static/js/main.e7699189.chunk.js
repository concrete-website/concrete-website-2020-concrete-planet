(this["webpackJsonpconcrete-plant"]=this["webpackJsonpconcrete-plant"]||[]).push([[0],{100:function(e,t,a){},146:function(e,t){},154:function(e,t){},155:function(e,t){},160:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(21),l=a.n(c),u=(a(98),a(3)),i=(a(99),a(100),a(9)),s=a(7),m=a(8),d=a.n(m),b=a(31),p=a.n(b),f=Object(r.createContext)();function g(e){var t=Object(r.useState)(localStorage.getItem("token")),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Object(r.useState)(!1),s=Object(u.a)(i,2),m=s[0],d=s[1],b=Object(r.useState)(""),g=Object(u.a)(b,2),h=g[0],E=g[1];function v(){var e=localStorage.getItem("token");n.emit("message",{name:"home",message:e})}return Object(r.useEffect)((function(){n=p()("https://concrete-react.herokuapp.com/",{query:{token:localStorage.getItem("token")}}),v(),console.log("first socekt")}),[]),Object(r.useEffect)((function(){n.on("connect",(function(){console.log("connected")}))}),[]),Object(r.useEffect)((function(){n.on("message",(function(e){var t=e.name,a=e.data;console.log(t),E(a),console.log("on store"),"anas"!=t&&alert("\u062a\u0645 \u062a\u063a\u064a\u064a\u0631 \u0634\u064a\u0621")})),console.log("second effect")}),[]),console.log("rendered store"),o.a.createElement(f.Provider,{value:{data:c,setdata:l,sok:m,setsok:d,orders:h,setorders:E,emitms1:v}},e.children)}var h=Object(s.f)((function(e){var t=e.history,a=e.match,n=Object(r.useState)(""),c=Object(u.a)(n,2),l=(c[0],c[1]),i=Object(r.useState)(""),s=Object(u.a)(i,2),m=(s[0],s[1]),b=Object(r.useState)(""),p=Object(u.a)(b,2),g=(p[0],p[1],Object(r.useContext)(f));return Object(r.useEffect)((function(){var e=localStorage.getItem("id");"/login"==a.path&&g.data&&"5f54f79720960f4618748bbe"==e&&t.push("/")}),[]),o.a.createElement("div",{style:{backgroundColor:"gray"},className:"container p-4"},o.a.createElement("h1",null,"\u05d0.\u05e6\u05de\u05e0\u05d8\u05d9\u05d8 \u05d1\u05d0\u05e7\u05d4"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=e.target.elements,n=a.email,r=a.password,o={email:n.value,password:r.value},c={headers:{"x-auth-token":localStorage.getItem("token")}};d.a.post("https://concrete-react.herokuapp.com/auth/login",o,c).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("id",e.data.user.id),g.setdata(e.data.token),t.push("/")})).catch((function(e){console.log(e)}))}},o.a.createElement("br",null),o.a.createElement("input",{onChange:function(e){l(e.target.value)},className:"form-control",type:"text",name:"email",placeholder:"user Name"}),o.a.createElement("br",null),o.a.createElement("input",{onChange:function(e){m(e.target.value)},className:"form-control",type:"password",name:"password",placeholder:"password"}),o.a.createElement("br",null),o.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(){}},"Log in")))})),E=a(15),v=function(e){var t=e.component,a=Object(E.a)(e,["component"]),n=Object(r.useContext)(f).data;return o.a.createElement(s.b,Object.assign({},a,{component:function(e){return n?o.a.createElement(t,e):o.a.createElement(s.a,{to:"/login"})}}))},O=a(166),j=a(167),y=a(165),k=a(40),x=a(28),S=[],C=function(e){var t=e.csvData,a=e.fileName,n=Object(r.useState)(!1),c=Object(u.a)(n,2),l=c[0],i=c[1],s=Object(r.useState)(!1),m=Object(u.a)(s,2);m[0],m[1];Object(r.useEffect)((function(){l&&setTimeout((function(){i(!1)}),6e6)}));var b=function(e){var t=new Date(e),a=+t.getMonth()+1;return t.getDate()+"/"+a+"/"+t.getFullYear()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},p=function(e,t){var a=new Date(e),n=+a.getMonth()+1,r=a.getDate()+"/"+n+"/"+a.getFullYear()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();return"b3"!=t&&(r="\u05dc\u05d0 \u05de\u05d5\u05db\u05df/\u063a\u064a\u0631 \u062c\u0627\u0647\u0632"),r},f=function(){try{t.map((function(e,t){var a=t+1;S.push({"\u05e9\u05dd \u05d4\u05d4\u05d6\u05de\u05e0\u05d4":e.orderName,"\u05e1\u05d5\u05d2 \u05d4\u05d4\u05d6\u05de\u05e0\u05d4":e.orderType,"\u05db\u05ea\u05d5\u05d1\u05ea":e.orderDirection,"\u05e7\u05d5\u05d1":e.cupAmount,"\u05d9\u05e6\u05d9\u05e8\u05ea \u05d4\u05d4\u05d6\u05de\u05e0\u05d4":b(e.createdAt),"\u05e1\u05d9\u05d5\u05dd \u05d4\u05d4\u05d6\u05de\u05e0\u05d4":p(e.dateFinished,e.finishOrder),ID:e._id,"\u05de\u05e1\u05e4\u05e8 \u05d4\u05d4\u05d6\u05de\u05e0\u05d4":a})}))}catch(e){}!function(e,t){var a={Sheets:{data:x.utils.json_to_sheet(e)},SheetNames:["data"]},n=x.write(a,{bookType:"xlsx",type:"array"}),r=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});k.saveAs(r,t+".xlsx")}(S,a)};return o.a.createElement("div",{style:{}},o.a.createElement("button",{className:"btn btn-success",onClick:function(e){return f()}},"Export"),o.a.createElement("button",{className:"btn btn-danger",onClick:function(){f(),setTimeout((function(){i(!l)}),1e4)}},"\u062a\u0646\u0632\u064a\u0644 \u062b\u0645 \u062d\u0630\u0641"),function(){if(l)return o.a.createElement("button",{className:"btn btn-danger",onClick:function(){!function(){var e={headers:{"x-auth-token":localStorage.getItem("token")}};d.a.delete("https://concrete-react.herokuapp.com/users/del",e).then((function(e){alert("!\u062a\u0645 \u062d\u0630\u0641 \u0643\u0644 \u0634\u064a\u0621")})).catch((function(e){}))}()}},"Delete/ !\u062d\u0630\u0641 \u0643\u0644 \u0634\u064a\u0621")}())},N=!1;var D=Object(s.f)((function(e){var t=e.history,a=Object(r.useContext)(f),n=Object(r.useState)(""),c=Object(u.a)(n,2),l=(c[0],c[1],Object(r.useState)("")),s=Object(u.a)(l,2),m=(s[0],s[1],Object(r.useState)(3)),b=Object(u.a)(m,2),p=(b[0],b[1],Object(r.useState)(!1)),g=Object(u.a)(p,2),h=(g[0],g[1],localStorage.getItem("id"));return N="5f54f79720960f4618748bbe"==h,console.log("home rendered"),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(O.a,{collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark"},o.a.createElement("button",{className:"btn btn-primary m-1",onClick:function(){localStorage.removeItem("token"),a.setdata("")}},"\u05dc\u05d4\u05ea\u05e0\u05ea\u05e7"),o.a.createElement(O.a.Brand,{href:"#home"},"\u05d0.\u05e6\u05de\u05e0\u05d8\u05d9\u05d8 \u05d1\u05d0\u05e7\u05d4"),o.a.createElement(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(O.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(j.a,{style:{direction:"rtl"},className:"ml-auto"},o.a.createElement(j.a.Link,{style:{textAlign:"right"},onClick:function(){window.location.reload(!1)}},'"Refresh" \u0627\u0638\u0647\u0627\u0631 \u0627\u0644\u0637\u0627\u0628\u064a\u0627\u062a/\u05d4\u05e6\u05d2 \u05d4\u05d6\u05de\u05e0\u05d5\u05ea'),o.a.createElement(j.a.Link,{style:{textAlign:"right"},onClick:function(){t.push("/")}},"\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea \u05d4\u05d4\u05d6\u05de\u05e0\u05d5\u05ea"),N?o.a.createElement(j.a.Link,{style:{textAlign:"right"},as:i.b,to:"/ord",href:"b"},"\u05e6\u05d5\u05e8 \u05d4\u05d6\u05de\u05e0\u05d4 \u05d7\u05d3\u05e9\u05d4"):"",N?o.a.createElement(j.a.Link,{style:{textAlign:"right"},as:i.b,to:"/clients",href:"b"},"\u05d7\u05e9\u05d1\u05d5\u05df \u05d4\u05dc\u05e7\u05d5\u05d7\u05d5\u05ea"):"",o.a.createElement(j.a.Link,{style:{textAlign:"right"},onClick:function(){!function(){var e={headers:{"x-auth-token":localStorage.getItem("token")}};d.a.get("https://concrete-react.herokuapp.com/users/get/null",e).then((function(e){a.setorders(e.data)})).catch((function(e){console.log(e),console.log("an error")}))}()},as:i.b,to:"/",href:"b"},"\u0643\u0644 \u0627\u0644\u0637\u0644\u0628\u064a\u0627\u062a/\u05db\u05dc \u05d4\u05d4\u05d6\u05de\u05e0\u05d5\u05ea"),o.a.createElement(y.a,{onClick:function(){},style:{textAlign:"right"},title:"Download Excel file",id:"collasible-nav-dropdown"},o.a.createElement("div",{style:{textAlign:"right"}},function(){if("5f54f79720960f4618748bbe"==localStorage.getItem("id"))return o.a.createElement(C,{csvData:a.orders,fileName:"newfile"})}()),o.a.createElement(y.a.Divider,null)))))),o.a.createElement("div",{className:"container "},function(){if(a.orders)try{return a.orders.map((function(e,t){return o.a.createElement("div",{key:t,style:{backgroundColor:"rgb(190, 185, 185)",marginBottom:"20px",marginTop:"30px"}},o.a.createElement("h6",null,t+1," :\u05d4\u05d6\u05de\u05e0\u05d4"),o.a.createElement("h4",null,"ID: ",e._id.substring(20)),o.a.createElement("h3",null,"\u0627\u0633\u0645 \u0627\u0644\u0637\u0644\u0628\u064a\u0647/\u05e9\u05dd \u05d4\u05d4\u05d6\u05de\u05e0\u05d4"),o.a.createElement("h4",{style:{borderBottom:"1px solid gray"}},e.orderName),o.a.createElement("h3",null,"\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628\u064a\u0647\u064e/\u05e1\u05d5\u05d2 \u05d4\u05d4\u05d6\u05de\u05e0\u05d4"),o.a.createElement("h4",{style:{borderBottom:"1px solid gray",backgroundColor:"#6c757d",marginBottom:"10px"}},e.orderType),o.a.createElement("h3",null,"\u0639\u0646\u0648\u0627\u0646/\u05db\u05ea\u05d5\u05d1\u05ea"),o.a.createElement("h4",{style:{borderBottom:"1px solid gray",marginBottom:"10px"}},e.orderDirection),o.a.createElement("h3",null,"\u0643\u0648\u0628/\u05e7\u05d5\u05d1"),o.a.createElement("h4",{style:{borderBottom:"1px solid gray",backgroundColor:"#6c757d",marginBottom:"10px"}},e.cupAmount),o.a.createElement("h5",null,"\u062a\u0627\u0631\u064a\u062e \u0648\u0648\u0642\u062a \u0627\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628\u064a\u0647"),o.a.createElement("h6",{style:{borderBottom:"1px solid gray",marginBottom:"10px"}}," ",function(e){var t=new Date(e),a=+t.getMonth()+1;return t.getDate()+"/"+a+"/"+t.getFullYear()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(e.createdAt)," "),o.a.createElement("h5",null,":\u062a\u0627\u0631\u064a\u062e \u0648\u0648\u0642\u062a \u0627\u0646\u0647\u0627\u0621 \u0627\u0644\u0637\u0644\u0628\u064a\u0647"),o.a.createElement("h3",{style:{borderBottom:"1px solid gray",paddingBottom:"10px",marginBottom:"10px"}}," ",function(e,t){var a=new Date(e),n=+a.getMonth()+1,r=a.getDate()+"/"+n+"/"+a.getFullYear()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();return"b3"!=t&&(r="\u05dc\u05d0 \u05de\u05d5\u05db\u05df/\u063a\u064a\u0631 \u062c\u0627\u0647\u0632"),r}(e.dateFinished,e.finishOrder)," "),"b2"==e.finishOrder?o.a.createElement("h3",{style:{backgroundColor:"#fd7e14"}},"\u05d1\u05d4\u05db\u05e0\u05d4"):"",N?o.a.createElement("button",{className:"btn btn-danger m-1",onClick:function(){!function(e){var t={headers:{"x-auth-token":localStorage.getItem("token")}};d.a.delete("https://concrete-react.herokuapp.com/users/delid/"+e,t).then((function(e){setTimeout((function(){a.emitms1()}),1e3)})).catch((function(e){console.log(e)}))}(e._id)}},"\u05de\u05d7\u05e7 \u05d4\u05d6\u05de\u05e0\u05d4"):"",N?o.a.createElement(i.b,{className:"btn btn-primary m-1",to:"/upd/"+e._id}," \u062a\u0639\u062f\u064a\u0644/\u05e2\u05e8\u05d9\u05db\u05d4 "):"",o.a.createElement(i.b,{className:"btn btn-primary m-1",to:"/updw/"+e._id}," \u062d\u0627\u0644\u0647 \u0627\u0644\u0637\u0644\u0628\u064a\u0647/\u05d4\u05de\u05e6\u05d1 "))}))}catch(e){console.log(e)}}(),o.a.createElement("br",null)))})),w=(a(159),!1);var T=Object(s.f)((function(e){var t=e.history,a=Object(r.useContext)(f),n=localStorage.getItem("id");return w="5f54f79720960f4618748bbe"==n,o.a.createElement("div",null,o.a.createElement(O.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark"},o.a.createElement(O.a.Brand,{href:"#home"},"\u05d0.\u05e6\u05de\u05e0\u05d8\u05d9\u05d8 \u05d1\u05d0\u05e7\u05d4"),o.a.createElement(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(O.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(j.a,{style:{direction:"rtl"},className:"ml-auto"},o.a.createElement(j.a.Link,{style:{textAlign:"right"},onClick:function(){a.emitms1(),t.push("/")}},"\u05e2\u05de\u05d5\u05d3 \u05d4\u05d1\u05d9\u05ea \u05d4\u05d4\u05d6\u05de\u05e0\u05d5\u05ea"),w?o.a.createElement(j.a.Link,{style:{textAlign:"right"},as:i.b,to:"/ord",href:"b"},"\u05e6\u05d5\u05e8 \u05d4\u05d6\u05de\u05e0\u05d4 \u05d7\u05d3\u05e9\u05d4"):""))))}));function A(){var e=Object(r.useContext)(f),t=Object(r.useState)(""),a=Object(u.a)(t,2),n=(a[0],a[1]),c=Object(r.useState)(""),l=Object(u.a)(c,2),i=(l[0],l[1]),s=Object(r.useState)(!1),m=Object(u.a)(s,2),b=m[0],p=m[1],g=Object(r.useState)(!1),h=Object(u.a)(g,2),E=h[0],v=h[1];return o.a.createElement("div",null,o.a.createElement(T,null),E?o.a.createElement("h1",null,"...\u05de\u05d5\u05e8\u05d9\u05d3"):"",o.a.createElement("h1",null,b),o.a.createElement("form",{style:{backgroundColor:"rgb(190, 185, 185)",padding:"50px"},className:"container",onSubmit:function(t){t.preventDefault();var a={headers:{"x-auth-token":localStorage.getItem("token")}};v(!0);var n=t.target.elements,r=n.orderName,o=n.orderDirection,c=n.orderType,l=n.cupAmount,u=(new Date,{orderName:r.value,orderDirection:o.value,orderType:c.value,cupAmount:l.value,finishOrder:"b1",dateFinished:null});d.a.post("https://concrete-react.herokuapp.com/users/add",u,a).then((function(t){p("\u05d4\u05d6\u05de\u05e0\u05d4 \u05e0\u05d5\u05e1\u05e4\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"),v(!1),e.emitms1()})).catch((function(e){p("!!\u05d4\u05d6\u05de\u05e0\u05d4 \u05dc\u05d0 \u05e0\u05d5\u05e1\u05e4\u05d4"),v(!1)}))}},o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0627\u0633\u0645 \u0627\u0644\u0637\u0644\u0628\u064a\u0647/\u05e9\u05dd \u05d4\u05d4\u05d6\u05de\u05e0\u05d4"),o.a.createElement("input",{onChange:function(e){i(e.target.value)},className:"form-control",type:"text",minLength:"1",name:"orderName",placeholder:"order Name"}),o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0639\u0646\u0648\u0627\u0646/\u05db\u05ea\u05d5\u05d1\u05ea"),o.a.createElement("input",{onChange:function(e){},className:"form-control",type:"text",name:"orderDirection",minLength:"1",placeholder:"orderDirection"}),o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628\u064a\u0647\u064e/\u05e1\u05d5\u05d2 \u05d4\u05d4\u05d6\u05de\u05e0\u05d4"),o.a.createElement("input",{onChange:function(e){},className:"form-control",type:"text",name:"orderType",minLength:"1",placeholder:"order Type"}),o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0643\u0648\u0628/\u05e7\u05d5\u05d1"),o.a.createElement("input",{onChange:function(e){n(e.target.value)},className:"form-control",type:"text",minLength:"1",name:"cupAmount",placeholder:"cup Amount"}),o.a.createElement("button",{className:"btn btn-primary m-4",type:"submit",onClick:function(){}},"\u05d4\u05db\u05e0\u05ea \u05d4\u05d6\u05de\u05e0\u05d4")))}var I=function(e){var t=e.component,a=Object(E.a)(e,["component"]),n=Object(r.useContext)(f).data;return o.a.createElement(s.b,Object.assign({},a,{render:function(e){return n?o.a.createElement(t,e):o.a.createElement(s.a,{to:"/login"})}}))};var B=Object(s.f)((function(e){var t=e.match,a=Object(r.useContext)(f),n=Object(r.useState)(""),c=Object(u.a)(n,2),l=c[0],i=c[1],s=Object(r.useState)(""),m=Object(u.a)(s,2),b=m[0],p=m[1],g=Object(r.useState)(""),h=Object(u.a)(g,2),E=h[0],v=h[1],O=Object(r.useState)(""),j=Object(u.a)(O,2),y=j[0],k=j[1],x=Object(r.useState)(!0),S=Object(u.a)(x,2),C=S[0],N=S[1],D=Object(r.useState)(!1),w=Object(u.a)(D,2),A=w[0],I=w[1];return Object(r.useEffect)((function(){var e={headers:{"x-auth-token":localStorage.getItem("token")}};d.a.get("https://concrete-react.herokuapp.com/users/"+t.params.id,e).then((function(e){i(e.data.orderName),p(e.data.orderDirection),v(e.data.orderType),k(e.data.cupAmount),N(!1)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",null,o.a.createElement(T,null),o.a.createElement("h1",null,A),C?o.a.createElement("h2",null,"...\u05de\u05d5\u05e8\u05d9\u05d3"):"",o.a.createElement("form",{className:"container",style:{backgroundColor:"rgb(190, 185, 185)",padding:"50px"},onSubmit:function(e){e.preventDefault();var n={headers:{"x-auth-token":localStorage.getItem("token")}},r=e.target.elements,o=r.orderName,c=r.orderDirection,l=r.orderType,u=r.cupAmount,i=(Date.now(),{orderName:o.value,orderDirection:c.value,orderType:l.value,cupAmount:u.value,finishOrder:"no",dateFinished:null});d.a.post("https://concrete-react.herokuapp.com/users/upd/"+t.params.id,i,n).then((function(e){I("\u05d4\u05d4\u05d6\u05de\u05e0\u05d4 \u05e9\u05d5\u05e0\u05ea\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"),a.emitms1()})).catch((function(e){console.log(e),I(" !!\u05d4\u05d4\u05d6\u05de\u05e0\u05d4 \u05dc\u05d0 \u05e9\u05d5\u05e0\u05ea\u05d4 ")}))}},o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0627\u0633\u0645 \u0627\u0644\u0637\u0644\u0628\u064a\u0647/\u05e9\u05dd \u05d4\u05d4\u05d6\u05de\u05e0\u05d4"),o.a.createElement("input",{onChange:function(e){i(e.target.value)},className:"form-control",type:"text",name:"orderName",placeholder:"order Name",defaultValue:l}),o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0639\u0646\u0648\u0627\u0646/\u05db\u05ea\u05d5\u05d1\u05ea"),o.a.createElement("input",{onChange:function(e){},className:"form-control",type:"text",name:"orderDirection",placeholder:"orderDirection",defaultValue:b}),o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628\u064a\u0647\u064e/\u05e1\u05d5\u05d2 \u05d4\u05d4\u05d6\u05de\u05e0\u05d4"),o.a.createElement("input",{onChange:function(e){},className:"form-control",type:"text",name:"orderType",placeholder:"order type",defaultValue:E}),o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0643\u0648\u0628/\u05e7\u05d5\u05d1"),o.a.createElement("input",{onChange:function(e){k(e.target.value)},className:"form-control",type:"text",name:"cupAmount",placeholder:"cup Amount",defaultValue:y}),function(){if("5f54f79720960f4618748bbe"==localStorage.getItem("id"))return o.a.createElement("button",{className:"btn btn-primary m-4",type:"submit",onClick:function(){}},"\u05ea\u05d9\u05e7\u05d5\u05df \u05d4\u05d6\u05de\u05e0\u05d4")}()))}));function F(){var e=Object(r.useState)(""),t=Object(u.a)(e,2);t[0],t[1];return Object(r.useEffect)((function(){var e={headers:{"x-auth-token":localStorage.getItem("token")}};d.a.get("https://concrete-react.herokuapp.com/users/ordwrker",e).then((function(e){})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",null,o.a.createElement("h1",null,"orders"))}var M=Object(s.f)((function(e){var t=e.match,a=Object(r.useContext)(f),n=Object(r.useState)(""),c=Object(u.a)(n,2),l=c[0],i=c[1],s=Object(r.useState)(""),m=Object(u.a)(s,2),b=m[0],p=m[1],g=Object(r.useState)(!0),h=Object(u.a)(g,2),E=h[0],v=h[1],O=Object(r.useState)(""),j=Object(u.a)(O,2),y=j[0],k=j[1],x=Object(r.useState)("green"),S=Object(u.a)(x,2),C=S[0],N=S[1],D=Object(r.useState)("blue"),w=Object(u.a)(D,2),A=w[0],I=w[1],B=Object(r.useState)("blue"),F=Object(u.a)(B,2),M=F[0],L=F[1],_=function(e){var a,n={headers:{"x-auth-token":localStorage.getItem("token")}},r=new Date;switch(e){case"b1":N("green"),I("blue"),L("blue"),a={finishOrder:"b1",dateFinished:null};break;case"b2":N("blue"),I("green"),L("blue"),a={finishOrder:"b2",dateFinished:null};break;case"b3":N("blue"),I("blue"),L("green"),a={finishOrder:"b3",dateFinished:r}}d.a.post("https://concrete-react.herokuapp.com/users/updw/"+t.params.id,a,n).then((function(e){console.log(e)})).catch((function(e){N("green"),I("blue"),L("blue"),alert("\u05d1\u05e2\u05d9\u05d9\u05ea \u05d0\u05d9\u05e0\u05d8\u05e8\u05e0\u05d8/\u0645\u0634\u0643\u0644\u0647 \u0627\u0646\u062a\u0631\u0646\u062a"),console.log(e)}))};return Object(r.useEffect)((function(){var e={headers:{"x-auth-token":localStorage.getItem("token")}};d.a.get("https://concrete-react.herokuapp.com/users/"+t.params.id,e).then((function(e){i(e.data.orderName),p(e.data.cupAmount),k(e.data.orderDirection),v(!1),function(e){switch(e){case"b1":N("green"),I("blue"),L("blue");break;case"b2":N("blue"),I("green"),L("blue");break;case"b3":N("blue"),I("blue"),L("green")}}(e.data.finishOrder)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",null,o.a.createElement(T,null),E?o.a.createElement("h2",null,"...\u05de\u05d5\u05e8\u05d9\u05d3"):"",o.a.createElement("div",{className:"container",style:{backgroundColor:"rgb(190, 185, 185)",padding:"50px"}},o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0627\u0633\u0645 \u0627\u0644\u0637\u0644\u0628\u064a\u0647/\u05e9\u05dd \u05d4\u05d4\u05d6\u05de\u05e0\u05d4"),o.a.createElement("input",{onChange:function(e){i(e.target.value)},className:"form-control",type:"text",name:"orderName",placeholder:"order Name",defaultValue:l,disabled:!0}),o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0639\u0646\u0648\u0627\u0646/\u05db\u05ea\u05d5\u05d1\u05ea"),o.a.createElement("input",{onChange:function(e){},className:"form-control",type:"text",name:"orderDirection",placeholder:"orderDirection",defaultValue:y,disabled:!0}),o.a.createElement("h3",{style:{marginTop:"30px"}},"\u0643\u0648\u0628/\u05e7\u05d5\u05d1"),o.a.createElement("input",{onChange:function(e){p(e.target.value)},className:"form-control",type:"text",name:"cupAmount",placeholder:"cup Amount",defaultValue:b,disabled:!0}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{style:{backgroundColor:C},className:"btn btn-primary",onClick:function(){_("b1"),setTimeout((function(){a.emitms1()}),1e3),_("b1")}},"\u05d1\u05d4\u05de\u05ea\u05e0\u05d4/\u0641\u064a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{style:{backgroundColor:A},className:"btn btn-primary",onClick:function(){setTimeout((function(){a.emitms1()}),1e3),_("b2")}},"\u05d1\u05d4\u05db\u05e0\u05d4/\u0641\u064a \u0627\u0644\u062a\u062d\u0636\u064a\u0631"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{style:{backgroundColor:M},className:"btn btn-primary",onClick:function(){setTimeout((function(){a.emitms1()}),1e3),_("b3")}},"\u05d4\u05d4\u05d6\u05de\u05e0\u05d4 \u05de\u05d5\u05db\u05e0\u05d4/\u0627\u0644\u0637\u0644\u0628\u064a\u0647 \u062c\u0627\u0647\u0632\u0647")))})),L=function(e){var t=e.component,a=Object(E.a)(e,["component"]),n=Object(r.useContext)(f).data;return o.a.createElement(s.b,Object.assign({},a,{component:function(e){return n?o.a.createElement(t,e):o.a.createElement(s.a,{to:"/login"})}}))},_=function(e){var t=e.component,a=Object(E.a)(e,["component"]),n=Object(r.useContext)(f).data;return o.a.createElement(s.b,Object.assign({},a,{component:function(e){return n?o.a.createElement(t,e):o.a.createElement(s.a,{to:"/login"})}}))},V=function(e){var t=e.component,a=Object(E.a)(e,["component"]),n=Object(r.useContext)(f).data;return o.a.createElement(s.b,Object.assign({},a,{component:function(e){return n?o.a.createElement(t,e):o.a.createElement(s.a,{to:"/login"})}}))},H=a(47);function Y(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=(t[0],t[1],Object(r.useState)("")),n=Object(u.a)(a,2),c=n[0],l=n[1],i=Object(r.useState)([]),s=Object(u.a)(i,2),m=s[0],b=s[1];Object(r.useEffect)((function(){!function(){var e={headers:{"x-auth-token":localStorage.getItem("token")}};d.a.get("https://concrete-react.herokuapp.com/users/get/null",e).then((function(e){l(e.data)})).catch((function(e){console.log(e),console.log("an error")}))}()}),[]);var p=function(e){return e.split(" ").join("")},f=function(){var e=function(){if(c){for(var e=[],t=0;t<c.length;t++)-1==e.indexOf(p(c[t].orderName))&&e.push(p(c[t].orderName));var a=[];return e.forEach((function(e){var t=c.filter((function(t){return p(t.orderName)==p(e)}));a=[].concat(Object(H.a)(a),[t])})),a}}(),t=[];try{if(e)for(var a=0;a<e.length;a++)for(var n=0;n<e[a].length;n++)-1==t.indexOf(p(e[a][n].orderType))&&t.push(p(e[a][n].orderType))}catch(f){console.log(f)}if(t){if(t.length>=e.length)var r=t.length;else r=e.length;for(var o=[],l=0;l<r;l++){if(0,l<e.length){var u=l;o.push({orderName:e[u][0].orderName,arrofobj:[]})}for(var i=function(a){m=0,d=e[u].filter((function(e){return p(e.orderType)==p(t[a])}));for(var n=0;n<d.length;n++)"b3"==d[n].finishOrder&&(m+=+d[n].cupAmount);if(0!=d.length){e[u].length;try{for(var r=!1,c=0;c<o.length;c++)for(var l=function(e){var t=o[c].arrofobj.findIndex((function(t){return t._id==d[e]._id}));r=-1==t},i=0;i<d.length;i++)l(i);if(r){var s=m;o[u].arrofobj=[].concat(Object(H.a)(o[u].arrofobj),Object(H.a)(d),[{sumcup:s}])}}catch(b){console.log(b)}}},s=0;s<t.length;s++){var m,d;i(s)}}b(o)}};return o.a.createElement("div",null,o.a.createElement(T,null),o.a.createElement("div",{className:"container"},o.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){f()}},"\u05d4\u05e6\u05d2 \u05d4\u05db\u05dc"),function(){if(m)return m.map((function(e,t){return o.a.createElement("div",{key:t,style:{}},o.a.createElement("table",{style:{direction:"rtl"},className:"table table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"\u05e9\u05dd \u05d4\u05d4\u05d6\u05de\u05e0\u05d4: ",e.orderName," "))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"\u05ea\u05d0\u05e8\u05d9\u05da \u05d9\u05e6\u05d9\u05e8\u05d4"),o.a.createElement("td",null,"\u05ea\u05d0\u05e8\u05d9\u05da \u05d4\u05db\u05e0\u05d4"),o.a.createElement("td",null,"\u05db\u05ea\u05d5\u05d1\u05ea"),o.a.createElement("td",null,"\u05d7\u05d5\u05de\u05e8"),o.a.createElement("td",null,"\u05db\u05de\u05d5\u05ea \u05e7\u05d5\u05d1")),e.arrofobj.map((function(e,t){var a;a="b3"!=e.finishOrder?"red":"#28a745";return o.a.createElement("tr",{key:t,style:{}},o.a.createElement("td",{style:{backgroundColor:a}},e.sumcup?"":function(e){var t=new Date(e),a=+t.getMonth()+1;return t.getDate()+"/"+a+"/"+t.getFullYear()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(e.createdAt)),o.a.createElement("td",{style:{backgroundColor:a}},e.sumcup?"":function(e,t){var a=new Date(e),n=+a.getMonth()+1,r=a.getDate()+"/"+n+"/"+a.getFullYear()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();return"b3"!=t&&(r="\u05dc\u05d0 \u05de\u05d5\u05db\u05df/\u063a\u064a\u0631 \u062c\u0627\u0647\u0632"),r}(e.updatedAt,e.finishOrder)),o.a.createElement("td",{style:{backgroundColor:a}},e.orderDirection),o.a.createElement("td",{style:{backgroundColor:a}},e.orderType),e.sumcup?o.a.createElement("td",{key:t,style:{backgroundColor:"#ffc107",fontSize:"25px"}},' \u05e1\u05d4"\u05db: ',e.sumcup):o.a.createElement("td",{key:t,style:{backgroundColor:a}},e.cupAmount))})))))}))}()))}var J=function(e){var t=e.component,a=Object(E.a)(e,["component"]),n=Object(r.useContext)(f).data;return o.a.createElement(s.b,Object.assign({},a,{component:function(e){return n?o.a.createElement(t,e):o.a.createElement(s.a,{to:"/login"})}}))};var W=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2);return t[0],t[1],document.title,o.a.createElement("div",{className:"App"},o.a.createElement(g,null,o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(v,{exact:!0,path:"/",component:D}),o.a.createElement(s.b,{exact:!0,path:"/login",component:h}),o.a.createElement(I,{exact:!0,path:"/ord",component:A}),o.a.createElement(L,{exact:!0,path:"/upd/:id",component:B}),o.a.createElement(V,{exact:!0,path:"/updw/:id",component:M}),o.a.createElement(_,{exact:!0,path:"/worker",component:F}),o.a.createElement(J,{exact:!0,path:"/clients",component:Y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t){},93:function(e,t,a){e.exports=a(160)},98:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[93,1,2]]]);
//# sourceMappingURL=main.e7699189.chunk.js.map