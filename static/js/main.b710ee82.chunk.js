/*! For license information please see main.b710ee82.chunk.js.LICENSE.txt */
(this.webpackJsonpReact_firsr=this.webpackJsonpReact_firsr||[]).push([[0],{19:function(e,t,n){e.exports={about_me:"About_about_me__1itGx",about_me_right:"About_about_me_right__2WgH4"}},20:function(e,t,n){e.exports={main:"All_to_do_main__3_oWy"}},21:function(e,t,n){e.exports={global_win:"Win_global_win__1xYfv",in:"Win_in__bToW3",b:"Win_b__9J90u"}},26:function(e,t,n){e.exports={Comment:"Comment_Comment__1uqYg",Comment_right:"Comment_Comment_right__2kJ1q"}},27:function(e,t,n){e.exports={global_empty:"With_window_global_empty__2We05",empty:"With_window_empty__pPbne"}},28:function(e,t,n){e.exports={main_game:"krectuk_noluk_main_game__MpOnj",input_button:"krectuk_noluk_input_button__1Sq8g"}},32:function(e,t,n){e.exports={global:"Current_to_do_global__1qI8r"}},38:function(e,t,n){},39:function(e,t,n){},48:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(30),i=n.n(a),s=(n(38),n(9)),r=(n(39),n(0));var l=function(){return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)(s.b,{to:"home",children:"Home"}),Object(r.jsx)(s.b,{to:"to_do",children:"TO DO"}),Object(r.jsx)(s.b,{to:"settings",children:"Settings"}),Object(r.jsx)(s.b,{to:"friend",children:"Friends"}),Object(r.jsx)(s.b,{to:"krectuk_noluk",children:"Krectuk_noluk"}),Object(r.jsx)(s.b,{to:"zzz",children:"ZZZ"}),Object(r.jsx)(s.b,{to:"message",children:"Message"}),Object(r.jsx)(s.b,{to:"time",children:"Time"})]})},u=n(19),j=n.n(u),o=function(){return Object(r.jsxs)("div",{className:j.a.about_me,children:[Object(r.jsx)("img",{src:"https://lh3.googleusercontent.com/proxy/u2Vmth6vXpTZ8ycCi2uOEV1RliqpxaSLH19ISlQ3c7DpP_Dv59oNC3UnGvWD8xh3oIXRFiZ3t9WBBx-VPGIFZMnKYuXHL3xbvVsT8keK1-XKhw"}),Object(r.jsx)("div",{className:j.a.about_me_right,children:Object(r.jsx)("div",{className:j.a.description,children:"SMTH"})})]})},b=n(3),d=n(26),O=n.n(d),m=function(e){return Object(r.jsxs)("div",{className:O.a.Comment,children:[Object(r.jsx)("img",{src:e.obj.ava}),Object(r.jsxs)("div",{className:O.a.Comment_right,children:[Object(r.jsx)("p",{children:e.obj.name}),Object(r.jsx)("p",{children:e.obj.text}),Object(r.jsx)("p",{children:e.obj._id})]})]})},h=n(12),p=(n(48),n(4)),v=function(e){var t=Object(c.useState)(1),n=Object(b.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(""),l=Object(b.a)(s,2),u=l[0],j=l[1],o=Object(c.useState)(0),d=Object(b.a)(o,2);d[0],d[1];return Object(r.jsxs)("div",{className:"create",children:[Object(r.jsx)("input",{onInput:function(e){i(e.target.value)},value:a,type:"text"}),Object(r.jsx)("input",{onInput:function(e){j(e.target.value)},value:u,type:"text"}),Object(r.jsx)("button",{onClick:function(t){var n={name:a,_id:Object(p.generate)(),ava:"https://memchik.ru/images/templates/sasha_grey.jpg",text:u},c=e.change_com,i=c.setComments,s=c.comments;i([].concat(Object(h.a)(s),[n]))},children:"X"})]})},f=[{name:"Sasha",_id:69,ava:"https://memchik.ru/images/templates/sasha_grey.jpg",text:"deep areas of knowledge"},{name:"Max",_id:68,ava:"https://memchik.ru/images/templates/sasha_grey.jpg",text:"deep areas of knowledge"},{name:"Gar",_id:67,ava:"https://memchik.ru/images/templates/sasha_grey.jpg",text:"deep areas of knowledge"}],_=function(){var e=Object(c.useState)(f),t=Object(b.a)(e,2),n=t[0],a=t[1],i=n.map((function(e){return Object(r.jsx)(m,{obj:e},e._id)}));return Object(r.jsxs)("div",{className:"comments",children:[Object(r.jsx)(v,{change_com:{comments:n,setComments:a},name:"asda",age:"sjdj"}),i]})},x=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(_,{})]})},g=n(27),y=n.n(g),k=function(e){return Object(r.jsx)("div",{className:y.a.global_empty,children:Object(r.jsx)("div",{onClick:function(){return e.window(null)},className:y.a.empty,children:"Cant be ampty"})})},N=function(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(""),l=Object(b.a)(s,2),u=l[0],j=l[1];return Object(r.jsxs)("div",{className:"button_input",children:[Object(r.jsx)("input",{onInput:function(e){return i(e.target.value)},value:a,type:"text"}),Object(r.jsx)("button",{onClick:function(){var t={value:a,id:Object(p.generate)(),packed:!1,filter:!1};t.value.trim()?e.change_value.setLists([].concat(Object(h.a)(e.change_value.lists),[t])):j(Object(r.jsx)(k,{window:j}))},children:"Click"}),Object(r.jsx)("div",{className:"input_empty",children:u})]})},w=n(2),S=n(32),C=n.n(S),I=0,W=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(e.value),l=Object(b.a)(s,2),u=l[0],j=l[1],o=Object(c.useState)(null),d=Object(b.a)(o,2),O=d[0],m=d[1];return Object(r.jsxs)("div",{className:C.a.global,children:[Object(r.jsx)("input",{checked:e.packed,onChange:function(){return e.change_galochka(e.id)},type:"checkbox"}),a?Object(r.jsx)("input",{type:"text",value:u,onChange:function(e){j(e.target.value),console.log(++I)},onBlur:function(){u.trim()?i(!1):m(Object(r.jsx)(k,{window:m})),e.change_value(e.id,u)}}):Object(r.jsx)("span",{onDoubleClick:function(){i(!0)},children:u}),a,O,Object(r.jsx)("button",{onClick:function(){return e.current_delate(e.id)},children:"X"})]})},X=n(20),D=n.n(X),M=function(e){var t=e.list.filter((function(e){return e.packed})).map((function(t){return Object(r.jsx)(W,Object(w.a)(Object(w.a)({},t),{},{current_delate:e.current_delate,change_galochka:e.change_galochka,change_value:e.change_value}),t.id)})),n=e.list.filter((function(e){return!e.packed})).map((function(t){return Object(r.jsx)(W,Object(w.a)(Object(w.a)({},t),{},{current_delate:e.current_delate,change_galochka:e.change_galochka,change_value:e.change_value}),t.id)}));return Object(r.jsxs)("div",{className:D.a.main,children:[Object(r.jsx)("div",{className:D.a.left,children:n}),Object(r.jsx)("div",{className:D.a.right,children:t})]})},T=[{value:"Pants",id:Object(p.generate)(),packed:!1,filter:!1},{value:"Jacket",id:Object(p.generate)(),packed:!1,filter:!1},{value:"iPhone Charger",id:Object(p.generate)(),packed:!1,filter:!1},{value:"MacBook",id:Object(p.generate)(),packed:!1,filter:!1},{value:"Sleeping Pills",id:Object(p.generate)(),packed:!0,filter:!1},{value:"Underwear",id:Object(p.generate)(),packed:!1,filter:!1},{value:"Hat",id:Object(p.generate)(),packed:!1,filter:!1},{value:"T-Shirts",id:Object(p.generate)(),packed:!1,filter:!1},{value:"Belt",id:Object(p.generate)(),packed:!1,filter:!1},{value:"Passport",id:Object(p.generate)(),packed:!0,filter:!1},{value:"Sandwich",id:Object(p.generate)(),packed:!0,filter:!1}],H=function(){var e=Object(c.useState)(T),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{change_value:{lists:n,setLists:a}}),Object(r.jsx)(M,{list:n,change_value:function(e,t){return a(n.map((function(n){return n.id===e&&(n.value=t),n})))},current_delate:function(e){return a(n.filter((function(t){return t.id!==e})))},change_galochka:function(e){return a(n.map((function(t){return t.id===e&&(t.packed=!t.packed),t})))}})]})},P=function(){return Object(r.jsx)(r.Fragment,{children:"Message"})},z=function(){return Object(r.jsx)("div",{children:"Friends"})},B=n(10),E=n(28),F=n.n(E),Z=n(14);n(57);var q=function(e){return Object(r.jsx)("div",{onClick:function(t){if(!e.item.value){var n="true"===t.target.parentNode.title;e.setDiv(e.item.id,n),e.history(e.item.id)}},title:e.title,className:e.item.class,children:e.item.value})},J=n(21),L=n.n(J);var R=function(e){return Object(r.jsx)("div",{className:L.a.global_win,children:Object(r.jsxs)("div",{className:L.a.in,children:[Object(r.jsx)("p",{children:"You win!"}),Object(r.jsx)("button",{onClick:function(){e.setWin(!1),e.setNew()},className:L.a.b,children:"X"})]})})},G={player_first:{name:"X",step:0,winner:0},player_second:{name:"O",step:0,winner:0},current_step:!0},K=[null,null,null,null,null,null,null,null,null],V=[{value:null,id:Object(p.generate)(),class:""},{value:null,id:Object(p.generate)(),class:""},{value:null,id:Object(p.generate)(),class:""},{value:null,id:Object(p.generate)(),class:""},{value:null,id:Object(p.generate)(),class:""},{value:null,id:Object(p.generate)(),class:""},{value:null,id:Object(p.generate)(),class:""},{value:null,id:Object(p.generate)(),class:""},{value:null,id:Object(p.generate)(),class:""}],Y=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];var A=function(e){var t=Object(B.useState)(G),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(B.useState)(K),s=Object(b.a)(i,2),l=s[0],u=s[1],j=Object(B.useState)(!1),o=Object(b.a)(j,2),d=o[0],O=o[1],m=Object(B.useState)(V),p=Object(b.a)(m,2),v=p[0],f=p[1],_=Object(B.useState)(!1),x=Object(b.a)(_,2),g=x[0],y=x[1];Object(B.useEffect)((function(){W(),S()}),[l]),Object(B.useEffect)((function(){S()}),[c]);var k=function(){v.find((function(e){return"X"===e.value||"X"===e.value}))?y(!0):y(!1)},N=function(e){u(l.map((function(t,n){return+e===n+1?c.current_step?"X":"O":t})))},S=function(){e.history.setItem("globalInf",c)},C=function(t){var n=[],a=v.map((function(e,n){return e.id===t&&(e.value=c.current_step?"X":"O"),e}));e.history.getItem("history").then((function(t){e.history.setItem("history",[Object(h.a)(a)]),function(e,t){e&&e.forEach((function(e){t.push(Object(h.a)(e))})),t.push(Object(h.a)(v))}(t,n),e.history.setItem("history",n)}))};Object(B.useEffect)((function(){e.history.getItem("globalInf").then((function(e){e&&a(e)})),e.history.getItem("history").then((function(e){if(e){if(e.length){var t=e[e.length-1];Y.find((function(e){return D(e[0],e[1],e[2],t)}))?(k(),f(V)):f(t)}u(l.map((function(t,n){return e[e.length-1][n].value?e[e.length-1][n].value:null})))}}))}),[]);var I=function(e){var t,n=c.current_step?"player_first":"player_second";-1===e&&(n="player_first"===n?"player_second":"player_first"),a(Object(w.a)(Object(w.a)({},c),{},(t={},Object(Z.a)(t,n,Object(w.a)(Object(w.a)({},c[n]),{},{step:c[n].step+e})),Object(Z.a)(t,"current_step",!c.current_step),t)))},W=function(){k();var t=Y.find((function(e){return D(e[0],e[1],e[2])}));t&&(f(v.map((function(e,n){if(t.includes(n))switch(t){case Y[0]:case Y[1]:case Y[2]:e.class="win_line win";break;case Y[3]:e.class="win_dia_left win";break;case Y[4]:e.class="win_dia_right win";break;case Y[5]:case Y[6]:case Y[7]:e.class="win_ver win"}return e}))),O(!0),e.history.setItem("history",null),X())},X=function(){var e,t=c.current_step?"player_second":"player_first";a(Object(w.a)(Object(w.a)({},c),{},(e={},Object(Z.a)(e,t,Object(w.a)(Object(w.a)({},c[t]),{},{winner:c[t].winner+1})),Object(Z.a)(e,"current_step",!0),e)))},D=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v;return c[e].value===c[t].value&&c[e].value===c[n].value&&c[e].value&&c[t].value&&c[n].value},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.current_step;f(v.map((function(n){return n.id===e&&(n.value=t?"X":"O"),n})))};return Object(r.jsxs)("div",{className:"game_div",children:[d&&Object(r.jsx)(R,{setWin:O,setNew:function(){u(K),f(v.map((function(e){return e.class="",e.value=null,e})))}}),Object(r.jsx)("div",{onClick:function(e){e.target.innerHTML.trim()||(I(1),N(e.target.title))},className:"game",title:c.current_step.toString(),children:v.map((function(e,t){return Object(r.jsx)(q,{history:C,item:e,setDiv:M,title:t,all_div:v},t)}))}),Object(r.jsxs)("div",{className:"players",children:[Object(r.jsx)("div",{className:"current_player",children:c.current_step?e.first:e.second}),Object(r.jsx)("div",{className:"button_back",children:g&&Object(r.jsx)("button",{onClick:function(){if(I(-1),8===l.filter((function(e){return null===e})).length)return u(K),e.history.setItem("history",null),f(V.map((function(e){return e.value=null,e})));e.history.getItem("history").then((function(t){if(t){if(!t[t.length-2])return e.history.setItem("history",null),u(K),f(t[0].map((function(e){return e.value=null,e})));f(t[t.length-2]),e.history.setItem("history",t.filter((function(e,t,n){if(t<n.length-1)return e})))}}))},className:"back_position",children:"Cancel"})}),Object(r.jsxs)("div",{className:"global_inform_players",children:[Object(r.jsxs)("div",{className:"firts_player",children:[Object(r.jsx)("div",{className:"name",children:"Name:"}),Object(r.jsx)("div",{className:"name_player",children:e.first}),Object(r.jsx)("div",{className:"win",children:"Wins:"}),Object(r.jsx)("div",{className:"win_games",children:c.player_first.winner}),Object(r.jsx)("div",{className:"step",children:"Steps:"}),Object(r.jsx)("div",{className:"steps",children:c.player_first.step})]}),Object(r.jsxs)("div",{className:"second_player",children:[Object(r.jsx)("div",{className:"name",children:"Name:"}),Object(r.jsx)("div",{className:"name_player",children:e.second}),Object(r.jsx)("div",{className:"win",children:"Wins"}),Object(r.jsx)("div",{className:"win_games",children:c.player_second.winner}),Object(r.jsx)("div",{className:"step",children:"Steps:"}),Object(r.jsx)("div",{className:"steps",children:c.player_second.step})]})]}),Object(r.jsx)("div",{className:"reset",children:Object(r.jsx)("button",{onClick:function(){e.rest(),a(G),f(V.map((function(e){return e.value=null,e})))},children:"Restart"})})]})]})},U=n(33),Q=n.n(U),$={first:{value:"",style:null},second:{value:"",style:null}};var ee=function(){var e=Q.a.createInstance({name:"history"}),t=Object(B.useState)(!0),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(B.useState)($),s=Object(b.a)(i,2),l=s[0],u=s[1];return Object(r.jsx)("div",{className:F.a.main_game,children:c?Object(r.jsxs)("div",{className:F.a.input_button,children:[Object(r.jsx)("input",{onInput:function(e){return u(Object(w.a)(Object(w.a)({},l),{},{first:Object(w.a)(Object(w.a)({},l.first),{},{value:e.target.value})}))},value:l.first.value,style:{border:l.first.style},type:"text"}),Object(r.jsx)("input",{onInput:function(e){return u(Object(w.a)(Object(w.a)({},l),{},{second:Object(w.a)(Object(w.a)({},l.second),{},{value:e.target.value})}))},value:l.second.value,style:{border:l.second.style},type:"text"}),Object(r.jsx)("button",{onClick:function(){l.first.value.trim()&&l.second.value.trim()?a(!1):u(Object(w.a)(Object(w.a)({},l),{},{first:Object(w.a)(Object(w.a)({},l.first),{},{style:"1px solid red"}),second:Object(w.a)(Object(w.a)({},l.second),{},{style:"1px solid red"})}))},children:"Start"})]}):Object(r.jsx)(A,{first:l.first.value,history:e,rest:function(){u($),a(!0),e.clear()},second:l.second.value})})},te=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(b.a)(i,2),l=s[0],u=s[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{onInput:function(e){return a(e.target.value)},value:n,type:"text"}),Object(r.jsx)("button",{onClick:function(e){u([].concat(Object(h.a)(l),[{value:n,id:2}]))},children:"Click"}),Object(r.jsx)("div",{children:l.map((function(e,t){return Object(r.jsx)(ne,{setDiv:u,obj:e.value},t)}))})]})},ne=function(e){return Object(r.jsx)("div",{children:e.obj})},ce=function(){return Object(r.jsx)("div",{children:"Settings"})},ae=function(){return Object(r.jsx)("div",{className:"main"})},ie=n(5);var se=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)("main",{children:Object(r.jsxs)(ie.c,{children:[Object(r.jsx)(ie.a,{path:"/to_do",component:H}),Object(r.jsx)(ie.a,{path:"/home",component:x}),Object(r.jsx)(ie.a,{path:"/message",component:P}),Object(r.jsx)(ie.a,{path:"/friend",component:z}),Object(r.jsx)(ie.a,{path:"/krectuk_noluk",component:ee}),Object(r.jsx)(ie.a,{path:"/zzz",component:te}),Object(r.jsx)(ie.a,{path:"/settings",component:ce}),Object(r.jsx)(ie.a,{path:"/time",component:ae})]})})]})};i.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(se,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.b710ee82.chunk.js.map