(this.webpackJsonpdoctors_list_mp=this.webpackJsonpdoctors_list_mp||[]).push([[0],{34:function(e){e.exports=JSON.parse('{"allTherapistsData":"https://twojpsycholog.pl/lb-proxy/api-market/open/therapists"}')},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),i=n.n(c),r=n(7),s=n.n(r),l=(n(51),n(4)),o=(n(52),n.p+"static/media/TP.86b7a90d.svg");function j(e){var t=e.children;return Object(a.jsxs)("div",{className:"appLayout",children:[Object(a.jsx)("div",{className:"appLayout_navBar",children:Object(a.jsx)("h5",{children:"Lista Specjalist\xf3w"})}),Object(a.jsx)("div",{className:"appLayout_leftBar",children:Object(a.jsx)("img",{src:o,alt:"tpLogo"})}),Object(a.jsx)("div",{style:{marginLeft:"81px",backgroundColor:"#E5E5E5",height:"100%"},children:t})]})}n(53);var d=n(88),u=n(87),h=n(12);function p(e){var t=e.setToggleSideBarRight,n=e.setToggleAppOverlay,i=e.setSingleTherapistId,r=Object(c.useState)(0),s=Object(l.a)(r,2),o=s[0],j=s[1],p=Object(h.c)((function(e){var t=10*o,n=t+10;return e.main.allTherapists&&e.main.allTherapists.slice(t,n)})),b=Object(h.c)((function(e){return Math.floor(e.main.allTherapists&&e.main.allTherapists.length/10)})),O=function(e){var t=e.length>3?Object(a.jsx)("span",{children:"..."}):null;return Object(a.jsxs)(a.Fragment,{children:[e.slice(0,3).map((function(t,n){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("span",{children:t}),n<2&&1!==e.length?", ":""]},n)})),t]})};return Object(a.jsx)("div",{className:"tableComponent",children:Object(a.jsxs)("div",{className:"tableComponent_wrapper",children:[Object(a.jsxs)("div",{className:"tableComponent_header",children:[Object(a.jsx)("div",{className:"tableComponent_header--specialist",children:Object(a.jsx)("span",{children:"Specjalista"})}),Object(a.jsx)("div",{className:"tableComponent_header--specialization",children:Object(a.jsx)("span",{children:"Specjalizacje"})})]}),p.map((function(e,r){return Object(a.jsxs)("div",{className:"table",children:[Object(a.jsxs)("div",{className:"table_info",children:[Object(a.jsx)("div",{className:"table_info--avatar",children:Object(a.jsx)("img",{src:e.avatarUrl})}),Object(a.jsx)("div",{className:"table_info--name",children:"".concat(e.fullName.length>20?e.fullName+"...":e.fullName)})]}),Object(a.jsx)(d.a,{title:e.specializations.map((function(e,t){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("span",{children:e}),t<2&&1!==e.length?", ":""]},t)})),disableHoverListener:e.specializations.length<4,arrow:!0,placement:"top",children:Object(a.jsx)("div",{className:"table_info--specializations",onClick:function(){return a=e.therapistId,i(a),n(!0),void t(!0);var a},children:0!==e.specializations.length?O(e.specializations):Object(a.jsx)("span",{children:"Brak danych"})})})]},r)})),Object(a.jsx)("div",{className:"table_info--pagination",children:Object(a.jsx)(u.a,{count:b,page:o+1,onChange:function(e,t){return j(t-1)},variant:"outlined",shape:"rounded"})})]})})}n(60);function b(e){var t=e.children,n=e.closeModals;return Object(a.jsx)("div",{className:"appOverlay",id:"overlay",onClick:function(e){return function(e){if("overlay"===e.target.id)return n()}(e)},children:t})}n(61),n(62);var O=function(e){var t=e.labelText,n=e.data,c=e.handleInput;return Object(a.jsxs)("div",{className:"customInput",children:[Object(a.jsx)("label",{children:t}),Object(a.jsx)("input",{defaultValue:n,type:"text",onChange:function(e){return c(e.target.value)}})]})},f=(n(63),function(e){var t=e.labelText,n=e.handleTextArea,c=e.data;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"textArea",children:[Object(a.jsx)("label",{className:"textArea_label",children:t}),Object(a.jsx)("textarea",{className:"textArea_area",onChange:function(e){return n(e.target.value)},type:"text",defaultValue:c})]})})}),g=n(34);n(64);function x(e){var t=e.onClick,n=e.role,c=e.title;return Object(a.jsx)("button",{className:"".concat(n),onClick:t,children:c})}var m=n.p+"static/media/close_24px.31d9b89a.svg";function T(e){var t=e.setToggleAppOverlay,n=e.setToggleMainModal,i=e.setToggleSideBarRight,r=e.singleTherapistId,s=Object(h.c)((function(e){return e.main.singleTherapist})),o=Object(h.b)(),j=Object(c.useState)(""),d=Object(l.a)(j,2),u=d[0],p=d[1],b=Object(c.useState)(""),T=Object(l.a)(b,2),v=T[0],_=T[1],N=Object(c.useState)(!0),y=Object(l.a)(N,2),E=y[0],S=y[1];Object(c.useEffect)((function(){var e;return null===s&&o((e=r,function(t){fetch("".concat(g.allTherapistsData,"/").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_SINGLE_THERAPIST",data:e})})).catch((function(e){console.error("Error:",e)}))})),null!==s&&(p(s.fullName),_(s.aboutMe)),function(){null!==s&&o((function(e){return e({type:"ERASE_THERAPIST_INFO"})}))}}),[o,s,r]);return Object(a.jsxs)("div",{className:"sideBarRight",children:[Object(a.jsx)("button",{className:"sideBarRight_closeButton",onClick:function(){return t((function(e){return!e}))},children:Object(a.jsx)("img",{src:m,alt:"closeButton"})}),Object(a.jsx)("hr",{style:{width:"100%",marginTop:"51px"}}),Object(a.jsx)("div",{className:"sideBarRight_contentWrapper",children:null!==s?Object(a.jsx)(a.Fragment,{children:E?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h5",{children:"Informacje o specjali\u015bcie"}),Object(a.jsxs)("section",{className:"sideBarRight_contentWrapper--overflowSection",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{className:"sideBarRight_contentWrapper--label",children:"Imi\u0119 i nazwisko"}),Object(a.jsx)("span",{className:"sideBarRight_contentWrapper--info",children:u||"Brak danych"})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{className:"sideBarRight_contentWrapper--label",children:"Specjalizacje"}),Object(a.jsx)("span",{className:"sideBarRight_contentWrapper--info",children:0!==s.specializations.length?s.specializations.map((function(e,t){return Object(a.jsx)("span",{className:"sideBarRight_contentWrapper--info--specializations",children:"".concat(e," ").concat(t<s.specializations.length-1?",\xa0":"")},t)})):"Brak danych"})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{className:"sideBarRight_contentWrapper--label",children:"Rodzaje terapii"}),Object(a.jsx)("span",{className:"sideBarRight_contentWrapper--info",children:0!==s.therapyTypes.length?s.therapyTypes.map((function(e,t){return Object(a.jsx)("span",{className:"sideBarRight_info--specializations",children:"".concat(e," ").concat(t<s.therapyTypes.length-1?",\xa0":"")},t)})):"Brak danych"})]}),Object(a.jsxs)("article",{children:[Object(a.jsx)("label",{className:"sideBarRight_contentWrapper--label",children:"Rodzaje Certyfikat\xf3w"}),Object(a.jsx)("span",{className:"sideBarRight_contentWrapper--info",children:Object(a.jsx)("ul",{children:0!==s.certificates.length?s.certificates.map((function(e,t){return Object(a.jsx)("li",{children:e.name},t)})):"Brak danych"})})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{className:"sideBarRight_contentWrapper--label",children:"O mnie"}),Object(a.jsx)("span",{className:"sideBarRight_contentWrapper--info",children:v||"Brak danych"})]})]}),Object(a.jsxs)("div",{className:"sideBarRight_contentWrapper--buttonsContainer",children:[Object(a.jsx)(x,{role:"withBorder",title:"Edytuj",onClick:function(){return S((function(e){return!e}))}}),Object(a.jsx)(x,{role:"withBorderError",title:"Usu\u0144",onClick:function(){return t(!0),i(!1),n(!0)}})]})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h5",{children:"Edytuj informacje o specjali\u015bcie"}),Object(a.jsx)(O,{labelText:"Imi\u0119 i nazwisko",data:u||"Brak danych",handleInput:function(e){return p(e)}}),Object(a.jsx)(f,{labelText:"O mnie",data:v||"Brak danych",handleTextArea:function(e){return _(e)}}),Object(a.jsxs)("div",{className:"sideBarRight_buttonsContainer",children:[Object(a.jsx)(x,{role:"confirmButton",title:"Zapisz",onClick:function(){return function(e,t,n){return S((function(e){return!e})),o(function(e,t,n){var a={fullName:e,aboutMe:t,singleTherapistId:n};return function(e){return e({type:"SAVE_EDITED_THERAPIST_INFO",data:a})}}(e,t,n)),alert("react.toastify... 'Zapisano Dane' :)")}(u,v,r)}}),Object(a.jsx)(x,{role:"withBorder",title:"Anuluj",onClick:function(){return S((function(e){return!e}))}})]})]})}):Object(a.jsx)("div",{className:"loader"})})]})}n(65);function v(e){var t=e.setToggleMainModal,n=e.setToggleSideBarRight,c=e.setToggleAppOverlay,i=e.singleTherapistId,r=Object(h.b)();return Object(a.jsx)("div",{className:"mainModal",children:Object(a.jsxs)("div",{className:"mainModal_content",children:[Object(a.jsx)("h5",{children:"Usun\u0105\u0107 ofert\u0119?"}),Object(a.jsx)("p",{children:"Czy na pewno chcesz usun\u0105\u0107 tego specjalist\u0119? Tej akcji nie mo\u017cna cofn\u0105\u0107."}),Object(a.jsxs)("div",{className:"mainModal_content--buttons",children:[Object(a.jsx)(x,{role:"withBorder",title:"Anuluj",onClick:function(){return t(!1),n(!0)}}),Object(a.jsx)(x,{role:"errorButton",title:"Usu\u0144",onClick:function(){return function(e){return r((n=e,function(e){return e({type:"DELETE_THERAPIST_DATA",data:n})})),t(!1),c(!1),alert("react.toastify... 'Pomy\u015blnie usuni\u0119to u\u017cytkownika.' :)");var n}(i)}})]})]})})}var _=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),o=s[0],d=s[1],u=Object(c.useState)(!1),O=Object(l.a)(u,2),f=O[0],x=O[1],m=Object(c.useState)(""),_=Object(l.a)(m,2),N=_[0],y=_[1],E=Object(h.c)((function(e){return e.main.allTherapists})),S=Object(h.b)();return Object(c.useEffect)((function(){S((function(e){fetch(g.allTherapistsData,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({citySeoName:"ONLINE"})}).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_ALL_THERAPISTS",data:t.therapists})})).catch((function(e){console.error("Error:",e)}))}))}),[S]),Object(a.jsxs)(a.Fragment,{children:[!1===n?null:Object(a.jsxs)(b,{closeModals:function(){return i(!1),d(!1),x(!1)},children:[!1===f?null:Object(a.jsx)(v,{setToggleMainModal:x,setToggleSideBarRight:d,setToggleAppOverlay:i,singleTherapistId:N}),!1===o?null:Object(a.jsx)(T,{setToggleAppOverlay:i,setToggleMainModal:x,setToggleSideBarRight:d,singleTherapistId:N})]}),Object(a.jsx)(j,{children:null===E?Object(a.jsx)("div",{className:"loader",style:{display:"flex",alignItems:"center",justifyContent:"center"}}):Object(a.jsx)(p,{setToggleSideBarRight:d,setToggleAppOverlay:i,setSingleTherapistId:y})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},y=n(17),E=n(40),S=n(41),B=n(5),I=n(14),R={allTherapists:null,singleTherapist:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,n=e;switch(t.type){case"FETCH_ALL_THERAPISTS":n=Object(I.a)(Object(I.a)({},e),{},{allTherapists:t.data});break;case"FETCH_SINGLE_THERAPIST":n=Object(I.a)(Object(I.a)({},e),{},{singleTherapist:t.data});break;case"SAVE_EDITED_THERAPIST_INFO":var a=t.data,c=a.fullName,i=a.aboutMe,r=a.singleTherapistId,s=e.allTherapists.findIndex((function(e){return e.therapistId===r})),l=Object(B.a)(e.allTherapists),o=e.allTherapists[s];o.aboutMe=i,o.fullName=c,l[s]=o,n=Object(I.a)(Object(I.a)({},e),{},{newAllTherapists:l});break;case"DELETE_THERAPIST_DATA":var j=e.allTherapists.findIndex((function(e){return e.therapistId===t.data}));function d(){if(-1!==j){var t=Object(B.a)(e.allTherapists);return t.splice(j,1),t}return e.newAllTherapists}var u=d();n=Object(I.a)(Object(I.a)({},e),{},{allTherapists:u});break;case"ERASE_THERAPIST_INFO":n=Object(I.a)(Object(I.a)({},e),{},{singleTherapist:null});break;default:return e}return n},C=Object(y.c)({main:A}),k=Object(S.createLogger)(),w=[E.a];w.push(k);var z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d,L=Object(y.e)(C,z(y.a.apply(void 0,w)));s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(h.a,{store:L,children:Object(a.jsx)(_,{})})}),document.getElementById("root")),N()}},[[66,1,2]]]);
//# sourceMappingURL=main.c9902aa8.chunk.js.map