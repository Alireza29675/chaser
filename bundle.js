!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r,i=n(1);var u=(0,((r=i)&&r.__esModule?r:{default:r}).default)(0),o=document.querySelector(".chaser-value span"),a=document.querySelector(".target-value span"),c=document.querySelector(".chaser-box"),l=document.querySelector(".target-box"),s=document.querySelector("input");!function t(){requestAnimationFrame(t);var e=parseFloat(s.value);u.target=e,o.innerHTML=u.value,a.innerHTML=u.target,l.style.left=u.target+"px",c.style.left=u.value+"px"}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=a(n(2)),u=a(n(3)),o=a(n(4));function a(t){return t&&t.__esModule?t:{default:t}}var c={linear:i.default,"ease-in":u.default,"ease-out":o.default},l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ease-in";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initial=this._target=e,this.timingFunction=r,this.duration=n,this.startTime=0}return r(t,[{key:"timingFunction",set:function(t){if(!c[t])return console.error(t+" is not a timing-function!");this._timingFunction=c[t],this._timingFunctionName=t},get:function(){return this._timingFunctionName}},{key:"target",set:function(t){t!==this.target&&(this._initial=this.value,this.startTime=Date.now(),this._target=t)},get:function(){return this._target}},{key:"value",set:function(t){this._initial=this._target=t},get:function(){var t,e,n,r=(t=(Date.now()-this.startTime)/this.duration,e=0,n=1,Math.min(n,Math.max(e,t)));return this._initial+(this._target-this._initial)*this._timingFunction(r)}}]),t}();e.default=function(t,e,n){return new l(t,e,n)}},function(t,e){t.exports=function(t){return t}},function(t,e){t.exports=function(t){var e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}},function(t,e){t.exports=function(t){return Math.sin(t*Math.PI/2)}}]);