(this["webpackJsonpweather-test"]=this["webpackJsonpweather-test"]||[]).push([[0],{129:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(6),c=t.n(i),o=(t(86),t(14)),u=t(15),l=t(57),s=t.n(l),m=t(74),d=t(37),p=t(75),f=t.n(p),h=t(151),v=t(152),x=t(150),w=t(149);function b(){var n=Object(o.a)([""]);return b=function(){return n},n}function g(){var n=Object(o.a)(["\ndisplay: flex;\nalign-items: center;\n"]);return g=function(){return n},n}function E(){var n=Object(o.a)(["\nfont-size: 20px;\n@media screen and (max-width: 600px){\nfont-size: 15px;\n}\npadding: -5px;\n&>*{\npadding: 5px;\n}\n"]);return E=function(){return n},n}function y(){var n=Object(o.a)(["\npadding: 16px 24px;\ntext-align: center;\nfont-size: 30px;\n@media screen and (max-width: 600px){\nfont-size: 20px;\n}\n"]);return y=function(){return n},n}var j=u.a.div(y()),O=u.a.div(E()),k=u.a.div(g()),C=u.a.img(b());var z=function(n){var e=n.onClose,t=n.open,a=n.cityInfo,i=a.main;return r.a.createElement(x.a,{onClose:function(){e(t)},open:t},r.a.createElement(j,null,"More about weather"),r.a.createElement(w.a,null,r.a.createElement(O,null,r.a.createElement("div",null,"Temperature min: ",T(i.temp_min)," \xb0C"),r.a.createElement("div",null,"Temperature max: ",T(i.temp_max)," \xb0C"),r.a.createElement("div",null,"And it feels like ",T(i.feels_like)," \xb0C"),r.a.createElement(k,null,r.a.createElement(C,{src:"https://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),alt:a.weather[0].main}),r.a.createElement("div",null," ",a.weather[0].description)),r.a.createElement("div",null," Wind: ",a.wind.speed," m/s"))))},I=f()((function(n){return{root:{width:"100%"}}}));var T=function(n){return(n-273).toFixed(0)},F=function(n){var e=I(),t=n.cityInfo,i=Object(a.useState)(!1),c=Object(d.a)(i,2),o=c[0],u=c[1],l=t.main.temp;return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{button:!0,variant:"outlined",onClick:function(){u(!0)}},r.a.createElement(v.a,{primary:t.name,secondary:"Temperature today: ".concat(T(l)," \xb0C")})),r.a.createElement(z,{open:o,onClose:function(n){u(!1)},cityInfo:t}))},M=t(76),A=t.n(M);function D(){var n=Object(o.a)(["\ncolor: white;\nfont-size: 3vh;\n"]);return D=function(){return n},n}var L=u.a.div(D());var S=function(n){var e=n.city,t=Object(a.useState)(!1),i=Object(d.a)(t,2),c=i[0],o=i[1],u=Object(a.useState)({}),l=Object(d.a)(u,2),p=l[0],f=l[1];return Object(a.useEffect)((function(){function n(){return(n=Object(m.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=12048a468d7808777fe096886d9beb48")).then((function(n){var e=n.data;f(e),o(!0)})).catch((function(n){return console.error(n)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),c?r.a.createElement(F,{cityInfo:p}):r.a.createElement(L,null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")};function W(){var n=Object(o.a)(["\nheight: 100vh;\nwidth: 100vw;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nbackground: linear-gradient(149.94deg, #CDF0FF 9.2%, \nrgba(186, 223, 244, 0.98991) 21.69%, \nrgba(56, 102, 169, 0.92) 63.84%, #2E5DA4 83.89%, #2E5DA4 91.59%);\n\n&>*{\nmargin: 5px;\nmax-width: 400px;\n@media screen and (max-width: 600px){\nmax-width: 300px;\n}\nborder-radius: 10px;\nbackground: white;\n}\n\n.MuiListItemText-primary{\ncolor: black;\nfont-size: 25px;\n}\n.MuiListItemText-secondary{\ncolor: black;\nfont-size: 20px;\n}\n"]);return W=function(){return n},n}var _=u.a.div(W()),B=["London","Moscow","Canberra"];var J=function(){return r.a.createElement(_,null,B.map((function(n){return r.a.createElement(S,{key:n,city:n})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},81:function(n,e,t){n.exports=t(129)},86:function(n,e,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.b8434605.chunk.js.map