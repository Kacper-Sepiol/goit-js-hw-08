!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i="Expected a function",o=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return o;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=u.test(e);return i||l.test(e)?f(e.slice(2),i?2:8):a.test(e)?o:+e}"use strict";n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),function(e,t,n){var o,r,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(i);function j(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function w(e){var n=e-f,i=e-c;return void 0===f||n>=t||n<0||d&&i>=a}function S(){var e,n,i,o=g();if(w(o))return h(o);l=setTimeout(S,(e=o-f,n=o-c,i=t-e,d?p(i,a-n):i))}function h(e){return(l=void 0,m&&o)?j(e):(o=r=void 0,u)}function O(){var e,n=g(),i=w(n);if(o=arguments,r=this,f=n,i){if(void 0===l)return c=e=f,l=setTimeout(S,t),s?j(e):u;if(d)return l=setTimeout(S,t),j(f)}return void 0===l&&(l=setTimeout(S,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},O.flush=function(){return void 0===l?u:h(g())},O}(e,t,{leading:o,maxWait:t,trailing:r})};let j=document.querySelector('input[name="email"]'),w=document.querySelector('textarea[name="message"]'),S=document.querySelector(".feedback-form");S.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(){let e={email:j.value,message:w.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))},500)),window.addEventListener("load",function(){let e=localStorage.getItem("feedback-form-state");if(e){let t=JSON.parse(e);j.value=t.email,w.value=t.message}else j.value="",w.value=""}),S.addEventListener("submit",e=>{e.preventDefault();let t={email:j.value,message:w.value};localStorage.removeItem("feedback-form-state"),j.value="",w.value="",console.log("wyslano formularz:",t)})}();
//# sourceMappingURL=03-feedback.04976ee3.js.map