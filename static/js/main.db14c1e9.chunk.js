(this["webpackJsonpdrum-machine-app"]=this["webpackJsonpdrum-machine-app"]||[]).push([[0],{11:function(e,r,t){"use strict";t.r(r);var c=t(1),a=t.n(c),n=t(4),d=t.n(n),s=t(2),i=(t(9),t(0)),o=function(e){var r=e.clip,t=e.setDisplay,a=Object(c.useState)(!1),n=Object(s.a)(a,2),d=n[0],o=n[1];Object(c.useEffect)((function(){return document.addEventListener("keydown",m),function(){document.removeEventListener("keydown",m)}}),[]);var m=function(e){e.keyCode===r.keyCode&&u()},u=function(){var e=document.getElementById(r.keyTrigger);o(!0),setTimeout((function(){return o(!1)}),200),e.currentTime=0,e.play(),t(r.id)};return Object(i.jsx)("div",{className:"btn-group",children:Object(i.jsxs)("div",{onClick:u,className:"btn btn-secondary p-3 m-2 drum-pad ".concat(d&&"btn-warning border border-5 border-dark rounded"),id:r.id,children:[Object(i.jsx)("audio",{src:r.url,className:"clip",id:r.keyTrigger}),r.keyTrigger]})})},m=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];var u=function(){var e=Object(c.useState)(!1),r=Object(s.a)(e,2),t=r[0],a=r[1];return Object(i.jsx)("div",{className:"row justify-content-center bg-primary vh-100 text-white",children:Object(i.jsxs)("div",{id:"drum-machine",className:"text-center col-6",children:[Object(i.jsx)("h1",{className:"py-5",children:"Drum Machine"}),m.map((function(e){return Object(i.jsx)(o,{clip:e,setDisplay:a},e.id)})),Object(i.jsx)("h3",{id:"display",children:t})]})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(r){var t=r.getCLS,c=r.getFID,a=r.getFCP,n=r.getLCP,d=r.getTTFB;t(e),c(e),a(e),n(e),d(e)}))};d.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),p()},9:function(e,r,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.db14c1e9.chunk.js.map