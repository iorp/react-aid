"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../_rollupPluginBabelHelpers-412799d7.js"),r=require("react");require("bootstrap/dist/css/bootstrap.min.css");var t=require("react-bootstrap"),a=require("../../hooks/useExpose.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(r);require("./style.css");var o=r.forwardRef((function(n,o){var s=n.children,u=n.drawerPlacement,c=void 0===u?"end":u,i=r.useState(!1),f=e._slicedToArray(i,2),d=f[0],m=f[1],v=function(){return m(!1)};return a.default(o,{toggleDrawer:function(){return m((function(e){return!e}))},collapseDrawer:v,expandDrawer:function(){return m(!0)}}),l.default.createElement(l.default.Fragment,null,l.default.createElement(t.Navbar,e._extends({ref:o},Object.fromEntries(Object.entries(n).filter((function(r){var t=e._slicedToArray(r,1)[0];return t===t.toLowerCase()}))),{className:"ioutil-navbar ".concat(n.className||"")}),l.default.createElement("div",{className:"ioutil-navbar-bar"},s),l.default.createElement(t.Offcanvas,{placement:c,show:d,onHide:v,style:{top:0,bottom:0}},l.default.createElement(t.Offcanvas.Body,{className:"ioutil-navbar-drawer"},s))))}));exports.default=o;