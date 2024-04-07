"use strict";function r(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function e(r,e,o){return(e=function(r){var e=function(r,e){if("object"!==t(r)||null===r)return r;var o=r[Symbol.toPrimitive];if(void 0!==o){var n=o.call(r,e||"default");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"===t(e)?e:String(e)}(e))in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t(r)}var o={deepMerge:function o(n,i){if("object"!==t(n)||"object"!==t(i))return i;var l=function(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(r){e(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}({},n);for(var c in i)i.hasOwnProperty(c)&&(n.hasOwnProperty(c)&&"object"===t(n[c])&&"object"===t(i[c])?l[c]=o(n[c],i[c]):l[c]=i[c]);return l},set:function(r,e,t,o){if(r||console.error("No target provided"),e||console.error("No path provided"),""==e)r=t;else{var n=r;"string"==typeof e&&(e=e.split("."));for(var i=0;i<e.length;i++)void 0===n[e[i]]&&(n[e[i]]={}),i==e.length-1?o?Object.assign(n[e[i]],t):n[e[i]]=t:n=n[e[i]]}return r},get:function(r,e){if(r||console.error("No object provided"),e||console.error("No path provided"),""===e)return r;var t=r;"string"==typeof e&&(e=e.split("."));for(var o=0;o<e.length;o++){if(null==t[e[o]])return null;t=t[e[o]]}return t},del:function(r,e,t){e&&""!=e||console.error("No path provided"),r&&""!=r||console.error("No object provided");var o=r,n=null;"string"==typeof e&&(e=e.split("."));for(var i=0;i<e.length;i++){if(null==o[e[i]])return r;i==e.length-1?(delete o[e[i]],t&&null!=n&&delete n[e[i-1]]):(n=o,o=o[e[i]])}return r},iterate:function r(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=0;for(var c in e)if(e.hasOwnProperty(c)){var u=e[c];o(c,u,n,l,i),"object"===t(u)&&null!==u&&r(u,o,n+1,e),l++}}};exports.objects=o;