"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../_rollupPluginBabelHelpers-412799d7.js"),t=require("react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(t);exports.default=function(n){var u=n.basename,a=n.routes,l=t.useState(f()),o=e._slicedToArray(l,2),i=o[0],d=o[1];function f(){var e=window.location.pathname;return(e.startsWith(u)?e.slice(u.length):e)||"/"}t.useEffect((function(){var e=function(){d(f())};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]);var c=a.find((function(e){return e.path===i})),s=c?c.element:function(){return r.default.createElement("div",null,r.default.createElement("h1",null,"404 - Not Found"),r.default.createElement("p",null,"Sorry, the page you are looking for does not exist."))};return r.default.createElement("div",null,r.default.createElement(s,null))};