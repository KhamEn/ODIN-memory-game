(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,function(e,a,c){},,function(e,a,c){},function(e,a,c){},function(e,a,c){"use strict";c.r(a);var t=c(1),r=c.n(t),n=c(4),s=c.n(n),i=c(2),d=(c(9),c(0));var m=function(e){return Object(d.jsxs)("div",{className:"Divided",children:[Object(d.jsxs)("span",{className:"Scoreboard",children:[Object(d.jsx)("div",{className:"Scoreboard-titleCurrent",children:"Current"}),Object(d.jsx)("div",{className:"Scoreboard-currentScore",children:e.currentScore})]}),Object(d.jsx)("span",{className:"Divided-divider"}),Object(d.jsxs)("span",{className:"Scoreboard",children:[Object(d.jsx)("div",{className:"Scoreboard-titleBest",children:"Best"}),Object(d.jsx)("div",{className:"Scoreboard-bestScore",children:e.bestScore})]})]})};c(11);var o=function(e){function a(a){e.onCardSelect(a.target.alt)}return Object(d.jsx)("div",{className:"grid-container",children:e.cards.map((function(e){return Object(d.jsxs)("div",{className:"Card Card--hovering",children:[Object(d.jsx)("img",{src:e.image,alt:e.name,className:"Card-picture",onClick:a}),Object(d.jsx)("div",{className:"Card-composerName",children:e.name})]})}))})},j=c.p+"static/media/Bach.da65ab26.jpg",b=c.p+"static/media/Beethoven.a25b555a.jpg",l=c.p+"static/media/Brahms.a6d8e80b.jpg",u=c.p+"static/media/Bruckner.dfd9501a.jpg",p=c.p+"static/media/Chopin.4cb2b1dd.jpg",h=c.p+"static/media/Dvorak.36756c58.jpg",g=c.p+"static/media/Glass.cb51d44d.jpg",O=c.p+"static/media/Haydn.c485f8b1.jpg",S=c.p+"static/media/Mendelssohn.54d1fd06.jpg",v=c.p+"static/media/Mozart.d4e4d1dc.jpg",f=c.p+"static/media/Rachmaninoff.0a69e0ea.jpg",x=c.p+"static/media/Schubert.5bcdf48b.jpg";c(12);var N=function(e){return Object(d.jsxs)("div",{className:"Banner",children:[Object(d.jsx)("div",{className:"Banner-title",children:"Memory Game"}),Object(d.jsx)("span",{className:"Banner-logoLine",children:Object(d.jsx)(m,{currentScore:e.currentScore,bestScore:e.bestScore})})]})};function B(e){for(var a=e.length-1;a>0;a--){var c=Math.floor(Math.random()*(a+1)),t=e[a];e[a]=e[c],e[c]=t}return e}var C=function(){var e=[{name:"Bach",image:j},{name:"Beethoven",image:b},{name:"Brahms",image:l},{name:"Bruckner",image:u},{name:"Chopin",image:p},{name:"Dvorak",image:h},{name:"Glass",image:g},{name:"Haydn",image:O},{name:"Mendelssohn",image:S},{name:"Mozart",image:v},{name:"Rachmaninoff",image:f},{name:"Schubert",image:x}],a=Object(t.useState)(0),c=Object(i.a)(a,2),r=c[0],n=c[1],s=Object(t.useState)(0),m=Object(i.a)(s,2),C=m[0],M=m[1],k=Object(t.useState)(B(e)),y=Object(i.a)(k,2),w=y[0],D=y[1],G=Object(t.useState)(new Set),z=Object(i.a)(G,2),H=z[0],J=z[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{currentScore:r,bestScore:C}),Object(d.jsx)(o,{cards:w,onCardSelect:function(a){H.has(a)?(r>C&&M(r),n(0),J(new Set)):(J((function(e){return new Set(e.add(a))})),n((function(e){return e+1}))),D(B(e))}})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.270e584f.chunk.js.map