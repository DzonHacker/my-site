(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(10),i=n.n(a),l=(n(24),n(25),n(2)),r=n(4),j=(n(26),n(27),n(0)),d=function(e){var t=function(e){if(13==e.keyCode)for(var t=document.getElementsByTagName("input"),n=0;n<t.length;n++)t[n].className.indexOf("terminal__input")>=0&&(t[n].className+=" disable__input")},n=e.output.map((function(n){return Object.keys(n).map((function(c,s){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"results",children:n[c]}),Object(j.jsxs)("div",{className:"terminal__commandArea",children:[Object(j.jsx)("span",{className:"terminal__hostname",children:"Dzons:~ "}),Object(j.jsx)("input",{id:"terminal__inputId",autoComplete:"off",autoCorrect:"off",className:"terminal__input",placeholder:"help",onKeyUp:e.onPressed,onChange:e.onChanged,onKeyDown:t,autoFocus:!0})]})]},c+s)}))}));return Object(c.useEffect)((function(){e.toClear&&(document.getElementById("terminal__inputId").value="",document.getElementById("terminal__inputId").focus(),document.getElementById("terminal__inputId").classList.remove("disable__input"))}),[e.toClear]),Object(j.jsxs)("div",{className:"terminal__contents",children:[Object(j.jsxs)("div",{className:"terminal__commandArea",children:[Object(j.jsx)("span",{className:"terminal__hostname",children:"Dzons:~ "}),Object(j.jsx)("input",{id:"terminal__inputId",autoComplete:"off",autoCorrect:"off",className:"terminal__input",placeholder:"help",onKeyUp:e.onPressed,onChange:e.onChanged,onKeyDown:t,autoFocus:!0})]}),n]})},h=n(13),o=n.n(h),b=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)([]),h=Object(r.a)(i,2),b=h[0],m=h[1],O=Object(c.useState)(!1),_=Object(r.a)(O,2),x=_[0],p=_[1],u=Object(j.jsx)("div",{});return Object(j.jsxs)("div",{className:"terminal",children:[Object(j.jsx)("div",{className:"terminal__bar",children:Object(j.jsx)(o.a,{className:"terminal__cancleBtn"})}),Object(j.jsx)("div",{className:"terminal__body",children:Object(j.jsx)(d,{onChanged:function(e){var t=e.target.value.toString().toLowerCase();a(t)},onPressed:function(e){if(13==e.keyCode)switch(s){case"help":u=Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"getname "}),Object(j.jsx)("span",{children:"Get Full Name Of the Owner"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"getaddress"}),Object(j.jsx)("span",{children:"Get Address/Phone Of the Owner"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"getinfo "}),Object(j.jsx)("span",{children:"Get Info in Brief"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"viewcv "}),Object(j.jsx)("span",{children:"View CV"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"linktree "}),Object(j.jsx)("span",{children:"Get Social Site Links"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"clear "}),Object(j.jsx)("span",{children:"Clear Terminal"})]})]}),Object(l.a)(b),m([].concat(Object(l.a)(b),[{help:u}])),p(!1);break;case"getname":u=Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"John Sherchan"})}),Object(l.a)(b),m([].concat(Object(l.a)(b),[{getname:u}])),p(!1);break;case"getaddress":u=Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Dhapasi, Tokha, Kathmandu 44600"}),Object(j.jsx)("p",{children:"john.sherchan10@gmail.com"}),Object(j.jsx)("p",{children:"+977 9860176702"})]}),Object(l.a)(b),m([].concat(Object(l.a)(b),[{getname:u}])),p(!1);break;case"getinfo":u=Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"I am Kathmandu-based cyber-security and reverse engineering expert with "}),Object(j.jsx)("p",{children:"skillful expertise in security consulting, auditing, testing and compliance"}),Object(j.jsx)("p",{children:" and focuses on solving issues of concern to management in regards to cybersecurity."})]}),Object(l.a)(b),m([].concat(Object(l.a)(b),[{getname:u}])),p(!1);break;case"viewcv":u=Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"wget "}),Object(j.jsx)("a",{className:"cv__a",href:"#",children:"https://mycv.com"})]}),Object(l.a)(b),m([].concat(Object(l.a)(b),[{getname:u}])),p(!1);break;case"linktree":u=Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"====== Links ======"}),Object(j.jsx)("p",{style:{marginBottom:"20px"},children:"== Click To Redirect =="}),Object(j.jsxs)("ul",{className:"linktree",children:[Object(j.jsx)("li",{className:"linktree__list",children:Object(j.jsx)("a",{className:"linktree__list_a",target:"__blank",href:"https://johnsherchan.com.np",children:"Website"})}),Object(j.jsx)("li",{className:"linktree__list",children:Object(j.jsx)("a",{className:"linktree__list_a",target:"__blank",href:"https://www.instagram.com/0x447a6f6e/",children:"instagram  - @0x447a6f6e"})}),Object(j.jsx)("li",{className:"linktree__list",children:Object(j.jsx)("a",{className:"linktree__list_a",target:"__blank",href:"https://www.instagram.com/cyber._.mancer/",children:"instagram  - @cyber._.mancer"})}),Object(j.jsx)("li",{className:"linktree__list",children:Object(j.jsx)("a",{className:"linktree__list_a",target:"__blank",href:"https://www.facebook.com/john.sherchan.9/",children:"facebook"})}),Object(j.jsx)("li",{className:"linktree__list",children:Object(j.jsx)("a",{className:"linktree__list_a",target:"__blank",href:"https://www.linkedin.com/in/john-sherchan-b4a0a2147/",children:"linkedin"})}),Object(j.jsx)("li",{className:"linktree__list",children:Object(j.jsx)("a",{className:"linktree__list_a",target:"__blank",href:"https://github.com/DzonHacker",children:"github"})})]})]}),Object(l.a)(b),m([].concat(Object(l.a)(b),[{getname:u}])),p(!1);break;case"clear":m([{}]),p(!0);break;default:u=Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"getname "}),Object(j.jsx)("span",{children:"Get Full Name Of the Owner"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"getaddress"}),Object(j.jsx)("span",{children:"Get Address Of the Owner"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"getinfo "}),Object(j.jsx)("span",{children:"Get Info in Brief"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"viewcv "}),Object(j.jsx)("span",{children:"View CV"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"linktree "}),Object(j.jsx)("span",{children:"Get Social Site Links"})]}),Object(j.jsxs)("div",{className:"content__elements",children:[Object(j.jsx)("p",{children:"clear "}),Object(j.jsx)("span",{children:"Clear Terminal"})]})]}),Object(l.a)(b),m([].concat(Object(l.a)(b),[{help:u}])),p(!1)}},output:b,toClear:x})})]})},m=(n(34),n(15)),O=n.n(m),_=n(16),x=n.n(_),p=n(17),u=n.n(p),f=n(18),g=n.n(f),k=function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("a",{href:"https://www.linkedin.com/in/john-sherchan-b4a0a2147/",target:"__blank",children:[Object(j.jsx)(O.a,{className:"icon linkedin__icon"})," "]}),Object(j.jsx)("a",{href:"https://github.com/DzonHacker",target:"__blank",children:Object(j.jsx)(x.a,{className:"icon github__icon"})}),Object(j.jsx)("a",{href:"https://www.instagram.com/cyber._.mancer/",target:"__blank",children:Object(j.jsx)(u.a,{className:"icon instagram__icon"})}),Object(j.jsx)("a",{href:"https://www.facebook.com/john.sherchan.9/",target:"__blank",children:Object(j.jsx)(g.a,{className:"icon facebook__icon"})})]})};var v=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(k,{}),Object(j.jsx)(b,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),N()}},[[36,1,2]]]);
//# sourceMappingURL=main.c2a3e05f.chunk.js.map