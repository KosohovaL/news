(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{39:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(14),i=c.n(s),l=(c(38),c(39),c(6)),r=c(3),j=c(17),o=c(53),d=c(48),b=c(52),h=c(1);var m=function(e){var t=Object(r.g)(),c=Object(a.useState)(!1),n=Object(l.a)(c,2),s=n[0],i=n[1],j=function(){return i(!1)};return Object(h.jsxs)("div",{className:"login-form",children:[Object(h.jsx)("h1",{className:"text-info",children:"News"}),Object(h.jsx)("h2",{className:"text-info",children:"Log in"}),Object(h.jsxs)("form",{onSubmit:function(c){c.preventDefault();var a=c.target.elements,n=a.login,s=a.password;"Admin"===n.value&&"12345"===s.value?(localStorage.setItem("login","true"),e.login(!0),console.log(e),t("/profile",{state:{isLogin:!0}})):i(!0)},children:[Object(h.jsxs)("div",{className:"row mt-4",children:[Object(h.jsx)("div",{className:"col-2 text-left",children:Object(h.jsx)("label",{className:"text-info",htmlFor:"login",children:"Login (Admin)"})}),Object(h.jsx)("div",{className:"col-10 text-right",children:Object(h.jsx)("input",{name:"login",type:"text",placeholder:"Login",className:"my-input"})})]}),Object(h.jsxs)("div",{className:"row mt-3",children:[Object(h.jsx)("div",{className:"col-2 text-left",children:Object(h.jsx)("label",{className:"text-info",htmlFor:"password",children:"Password (12345) "})}),Object(h.jsx)("div",{className:"col-10 text-right",children:Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",className:"my-input"})})]}),Object(h.jsx)(d.a,{variant:"outline-info mt-3 mr-5 mb-10",type:"submit",children:"Login"})]}),Object(h.jsxs)(b.a,{show:s,onHide:j,size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(h.jsx)(b.a.Header,{closeButton:!0,children:Object(h.jsx)(b.a.Title,{children:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u0457"})}),Object(h.jsx)(b.a.Body,{children:"\u0412\u0438 \u043d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u043b\u0438 \u043b\u043e\u0433\u0456\u043d \u0430\u0431\u043e \u043f\u0430\u0440\u043e\u043b\u044c!"}),Object(h.jsx)(b.a.Footer,{children:Object(h.jsx)(d.a,{variant:"secondary",onClick:j,children:"Close"})})]})]})},x=c(49),O=c(54),u=c(50),g=c(51);var p=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),r=i[0],j=i[1],o=Object(a.useState)([]),d=Object(l.a)(o,2),b=d[0],m=d[1];return Object(a.useEffect)((function(){j(!0),fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",{method:"GET",headers:{"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"c99acddff6mshc08508ac0ef4a76p1e33f0jsn8273c3819d11"}}).then((function(e){return e.json()})).then((function(e){m(e.value),console.log(e.value[0].image.thumbnail.contentUrl)})).catch((function(e){n(e)})).finally((function(){j(!1)}))}),[]),c?Object(h.jsxs)("div",{children:["Error: ",c.message]}):r?Object(h.jsx)("div",{children:"Loading..."}):b?Object(h.jsx)(u.a,{fluid:!0,children:Object(h.jsx)(g.a,{children:b.map((function(e,t){return Object(h.jsx)(x.a,{className:"col-lg-3 d-flex align-items-stretch",children:Object(h.jsxs)(O.a,{border:"light",className:"myCard",children:[Object(h.jsx)(O.a.Img,{variant:"top",className:"cardImg",src:e.image.thumbnail.contentUrl}),Object(h.jsxs)(O.a.Body,{children:[Object(h.jsx)(O.a.Title,{children:e.name}),Object(h.jsx)(O.a.Text,{children:e.description})]}),Object(h.jsx)(O.a.Footer,{className:"text-muted cardFooter",children:e.provider[0].name})]})},t)}))})}):void 0};var f=function(){var e=Object(r.f)().state;return console.log(e),Object(h.jsx)("div",{className:"p-3",children:Object(h.jsxs)(O.a,{style:{width:"16rem"},children:[Object(h.jsx)(O.a.Img,{className:"p-3",variant:"top",src:"profile.png"}),Object(h.jsxs)(O.a.Body,{className:"p-3 border bg-light",children:[Object(h.jsx)(O.a.Title,{children:"Admin"}),Object(h.jsx)(O.a.Text,{children:"\u041f\u0440\u043e\u0444\u0456\u043b\u044c \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 Admin"})]})]})})};function v(){return localStorage.getItem("login")?Object(h.jsx)(r.a,{to:"/profile"}):Object(h.jsx)(r.a,{to:"/login"})}var N=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=(t[0],t[1]);return Object(h.jsx)(j.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)(o.a,{variant:"pills",defaultActiveKey:"/",children:[Object(h.jsx)(o.a.Item,{children:Object(h.jsx)(j.b,{className:localStorage.getItem("login")?"nav-link disabled":"nav-link",activeClasName:"active",to:"/login",children:"Login"})}),Object(h.jsx)(o.a.Item,{children:Object(h.jsx)(j.b,{className:"nav-link",activeClasName:"active",to:"/news",children:"News"})}),Object(h.jsx)(o.a.Item,{children:Object(h.jsx)(j.b,{className:localStorage.getItem("login")?"nav-link":"nav-link disabled",activeClasName:"active",to:"/profile",children:"Profile"})})]}),Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"/",element:Object(h.jsx)(v,{})}),Object(h.jsx)(r.b,{path:"/login",element:Object(h.jsx)(m,{login:c})}),"} />",Object(h.jsx)(r.b,{path:"/news",element:Object(h.jsx)(p,{})}),Object(h.jsx)(r.b,{path:"/profile",element:Object(h.jsx)(f,{})}),Object(h.jsx)(r.b,{path:"*",element:Object(h.jsx)("h1",{children:"Not found"})})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),w()}},[[46,1,2]]]);
//# sourceMappingURL=main.054fe060.chunk.js.map