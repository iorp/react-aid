"use strict";var e=require("./_rollupPluginBabelHelpers-412799d7.js"),r=require("react"),t=require("./components/Locale/contexts/LocaleContext.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(r);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==c(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===c(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var l={deepMerge:function e(r,t){if("object"!==c(r)||"object"!==c(t))return t;var n=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},r);for(var o in t)t.hasOwnProperty(o)&&(r.hasOwnProperty(o)&&"object"===c(r[o])&&"object"===c(t[o])?n[o]=e(r[o],t[o]):n[o]=t[o]);return n},set:function(e,r,t,n){if(e||console.error("No target provided"),r||console.error("No path provided"),""==r)e=t;else{var o=e;"string"==typeof r&&(r=r.split("."));for(var i=0;i<r.length;i++)void 0===o[r[i]]&&(o[r[i]]={}),i==r.length-1?n?Object.assign(o[r[i]],t):o[r[i]]=t:o=o[r[i]]}return e},get:function(e,r){if(e||console.error("No object provided"),r||console.error("No path provided"),""===r)return e;var t=e;"string"==typeof r&&(r=r.split("."));for(var n=0;n<r.length;n++){if(null==t[r[n]])return null;t=t[r[n]]}return t},del:function(e,r,t){r&&""!=r||console.error("No path provided"),e&&""!=e||console.error("No object provided");var n=e,o=null;"string"==typeof r&&(r=r.split("."));for(var i=0;i<r.length;i++){if(null==n[r[i]])return e;i==r.length-1?(delete n[r[i]],t&&null!=o&&delete o[r[i-1]]):(o=n,n=n[r[i]])}return e},iterate:function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=0;for(var i in r)if(r.hasOwnProperty(i)){var u=r[i];t(i,u,n,o),"object"===c(u)&&null!==u&&e(u,t,n+1),o++}}};exports.Locale=function(n){var i=n.children,u={default:"es",available:["en","es"]},c=r.useState(null),a=e._slicedToArray(c,2);a[0],a[1];var s=r.useState((function(){return l.deepMerge(u,n.options||{})})),f=e._slicedToArray(s,2),p=f[0];f[1];var b=r.useState({current:null,strings:{}}),v=e._slicedToArray(b,2),d=v[0],g=v[1];r.useEffect((function(){g((function(r){return e._objectSpread2(e._objectSpread2({},r),{},{current:p.default})}))}),[p]);var y={locale:d,setLocale:g,useLocale:function(){var r=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return console.log(33,e,d.strings||{}),d&&d.strings&&d.strings[d.current]&&d.strings[d.current][e]||r};return{locale:d,setLocale:g,setLanguage:function(r){g((function(t){return e._objectSpread2(e._objectSpread2({},t),{},{current:r})}))},setStrings:function(r){var t=d.strings||{};for(var n in r=JSON.parse(JSON.stringify(r,(function(e,r){return e.startsWith("#")?void 0:r}))))t.hasOwnProperty(n)?t[n]=e._objectSpread2(e._objectSpread2({},t[n]),r[n]):t[n]=r[n],g((function(r){return e._objectSpread2(e._objectSpread2({},r),{},{strings:t})}))},getString:r,L:r}}};return o.default.createElement(t.default.Provider,{value:y},i)},exports.objects=l;