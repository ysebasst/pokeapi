(this.webpackJsonppokeapi=this.webpackJsonppokeapi||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(4),i=c.n(r);c(10);var o=function(){return Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("a",{href:"/",className:"navbar-brand",children:"PokeAPI"})})})},j=c(2);var l=function(e){var t=e.url,c=Object(s.useState)(null),a=Object(j.a)(c,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){t&&fetch(t).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){e&&i(e)}))}),[t]),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-header",children:Object(n.jsx)("h2",{children:r?"".concat(r.id,". ").concat(r.name):""})}),Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{src:r?r.sprites.front_default:"",alt:"Pokemon"})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("div",{className:"poke-title",children:"Stats"}),r?r.stats.map((function(e,t){return Object(n.jsxs)("div",{className:t%2===1?"poke-stats par":"poke-stats",children:[Object(n.jsx)("div",{children:e.stat.name}),Object(n.jsx)("div",{children:e.base_stat})]})})):"",Object(n.jsx)("div",{className:"poke-title",children:"Types"}),Object(n.jsx)("div",{className:"poke-types",children:r?r.types.map((function(e){return Object(n.jsx)("div",{children:e.type.name})})):""})]})]})};var d=function(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0").then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){e&&a(e)}))}),[]),Object(n.jsx)("div",{className:"pokemon-content container",children:c?c.results.map((function(e,t){return Object(n.jsx)(l,{url:e.url},t)})):Object(n.jsx)("div",{children:"No hay elementos"})})};var u=function(){return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(o,{}),Object(n.jsx)(d,{})]})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.7ae7b7e1.chunk.js.map