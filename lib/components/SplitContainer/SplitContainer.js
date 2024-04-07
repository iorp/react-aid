"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../_rollupPluginBabelHelpers-412799d7.js"),t=require("react"),r=require("../../hooks/useExpose.js"),n=require("./src/FlexDivider.js"),i=require("./src/FlexPanel.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=a(t),o=t.forwardRef((function(a,o){var d=t.useState({direction:a.direction||"column",style:e._objectSpread2(e._objectSpread2({},a.style||{}),{display:"flex",flexDirection:a.direction||"column"}),panels:[],ready:!1,ref:o,refs:[]}),l=e._slicedToArray(d,2),u=l[0],f=l[1],s=function(t){f((function(r){return e._objectSpread2(e._objectSpread2({},r),{},{ready:!1,panels:[].concat(e._toConsumableArray(r.panels||[]),e._toConsumableArray(t))})}))};return r.default(o,{self:{state:u,setState:f},addPanels:s,removePanels:function(t){f((function(r){return e._objectSpread2(e._objectSpread2({},r),{},{ready:!1,panels:(r.panels||[]).filter((function(e,r){return!t.includes(r)}))})}))},setDirection:function(t){f((function(r){return e._objectSpread2(e._objectSpread2({},r),{},{ready:!1,direction:t})}))},setPanelSize:function(e,t){u.refs.panels[e].current.style["row"==u.direction?"width":"height"]=t}}),t.useEffect((function(){s(c.default.Children.toArray(a.children))}),[]),t.useEffect((function(){var r,a,d,l;r=u.panels,a=[],d=[],l=[],r.forEach((function(u,f){var s=t.createRef();if(u=c.default.createElement(i.default,e._extends({ref:s,key:"p".concat(f)},u.props,{parentNode:o})),d.push(s),a.push(u),f<r.length-1){var p=t.createRef(),y=c.default.createElement(n.default,{ref:p,key:"s".concat(f),parentNode:o});l.push(p),a.push(y)}})),f((function(t){return e._objectSpread2(e._objectSpread2({},t),{},{ready:!0,children:a,refs:{panels:d,dividers:l}})}))}),[u.panels,u.direction]),t.useEffect((function(){u.initialized&&f((function(t){return e._objectSpread2(e._objectSpread2({},t),{},{style:e._objectSpread2(e._objectSpread2({},t.style||{}),{},{flexDirection:u.direction})})}))}),[u.ready,u.direction]),t.useEffect((function(){u.children&&u.children.length>0&&!u.initialized&&("function"==typeof a.onReady&&a.onReady(u,o),f((function(t){return e._objectSpread2(e._objectSpread2({},t),{},{initialized:!0})})))}),[u.children]),t.useEffect((function(){u.ready&&u.children&&u.children.length>0&&"function"==typeof a.onUpdateChildren&&a.onUpdateChildren(u,o)}),[u.ready,u.children]),c.default.createElement("div",e._extends({ref:o,style:u.style},Object.fromEntries(Object.entries(a).filter((function(t){var r=e._slicedToArray(t,1)[0];return r===r.toLowerCase()})))),u.children)}));exports.default=o;