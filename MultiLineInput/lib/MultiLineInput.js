!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports.MultiLineInput=n(require("react")):e.MultiLineInput=n(e.react)}(this,function(e){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function s(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),l=t(5),c=r(l);t(4);var p=function(e){var n={};return e||(n.disabled="disabled"),n},f=function(e,n){return e&&n?e:null},d=function(e){function n(){return o(this,n),i(this,Object.getPrototypeOf(n).call(this))}return s(n,e),u(n,[{key:"render",value:function(){var e=this.props;return c["default"].createElement("textArea",a({className:"dnn-ui-common-multi-line-input "+e.className,id:e.id,onChange:f(e.onChange,e.enabled),onBlur:f(e.onBlur,e.enabled),onFocus:f(e.onFocus,e.enabled),onKeyDown:f(e.onKeyDown,e.enabled),onKeyPress:f(e.onKeyPress,e.enabled),onKeyUp:f(e.onKeyUp,e.enabled),value:e.value,tabIndex:e.tabIndex,style:e.style,placeholder:e.placeholder,maxLength:e.maxLength},p(e.enabled)))}}]),n}(l.Component);d.PropTypes={id:l.PropTypes.string,className:l.PropTypes.string,onChange:l.PropTypes.func,onBlur:l.PropTypes.func,onFocus:l.PropTypes.func,onKeyDown:l.PropTypes.func,onKeyPress:l.PropTypes.func,onKeyUp:l.PropTypes.func,value:l.PropTypes.string,enabled:l.PropTypes.bool,tabIndex:l.PropTypes.number,placeholder:l.PropTypes.string,style:l.PropTypes.object,maxLength:l.PropTypes.number},d.defaultProps={className:"",enabled:!0},n["default"]=d},function(e,n,t){n=e.exports=t(2)(),n.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-ui-common-multi-line-input{resize:none;width:100%;margin-bottom:10px;border-radius:3px;background-color:#fff;border:1px solid #959695;box-sizing:border-box;padding:8px 16px 100px;color:#46292b}.dnn-ui-common-multi-line-input:focus{border:1px solid #1e88c3;outline:none}.dnn-ui-common-multi-line-input:disabled{background:#e5e7e6;border-color:#e5e7e6}:-moz-placeholder,:-ms-input-placeholder,::-moz-placeholder,::-webkit-input-placeholder{color:#c8c8c8}",""])},function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},function(e,n,t){function r(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],n))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(l(r.parts[i],n));d[r.id]={id:r.id,refs:1,parts:s}}}}function o(e){for(var n=[],t={},r=0;r<e.length;r++){var o=e[r],i=o[0],s=o[1],a=o[2],u=o[3],l={css:s,media:a,sourceMap:u};t[i]?t[i].parts.push(l):n.push(t[i]={id:i,parts:[l]})}return n}function i(e,n){var t=y(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),g.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function s(e){e.parentNode.removeChild(e);var n=g.indexOf(e);n>=0&&g.splice(n,1)}function a(e){var n=document.createElement("style");return n.type="text/css",i(e,n),n}function u(e){var n=document.createElement("link");return n.rel="stylesheet",i(e,n),n}function l(e,n){var t,r,o;if(n.singleton){var i=m++;t=v||(v=a(n)),r=c.bind(null,t,i,!1),o=c.bind(null,t,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=u(n),r=f.bind(null,t),o=function(){s(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),r=p.bind(null,t),o=function(){s(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}function c(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function p(e,n){var t=n.css,r=n.media;n.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function f(e,n){var t=n.css,r=(n.media,n.sourceMap);r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([t],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,g=[];e.exports=function(e,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=b()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var t=o(e);return r(t,n),function(e){for(var i=[],s=0;s<t.length;s++){var a=t[s],u=d[a.id];u.refs--,i.push(u)}if(e){var l=o(e);r(l,n)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var x=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.id,r,""]]);t(3)(r,{});r.locals&&(e.exports=r.locals)},function(n,t){n.exports=e}])});