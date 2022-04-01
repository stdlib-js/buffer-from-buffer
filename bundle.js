// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).copyBuffer=r()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(t){return!1}},i=Object.defineProperty,o=Object.prototype,u=o.toString,a=o.__defineGetter__,f=o.__defineSetter__,s=o.__lookupGetter__,h=o.__lookupSetter__;var c=function(t,r,e){var n,i,c,l;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(s.call(t,r)||h.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),c="get"in e,l="set"in e,i&&(c||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&a&&a.call(t,r,e.get),l&&f&&f.call(t,r,e.set),t},l=i,p=c,g=n()?l:p;var v=function(t,r,e){g(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},d=v;var y=function(t){return"boolean"==typeof t};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var m=function(){return w&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,E=b;var _=function(t){return E.call(t)},A=Object.prototype.hasOwnProperty;var P=function(t,r){return null!=t&&A.call(t,r)},R="function"==typeof Symbol?Symbol.toStringTag:"",T=P,S=R,B=b;var O=_,I=function(t){var r,e,n;if(null==t)return B.call(t);e=t[S],r=T(t,S);try{t[S]=void 0}catch(r){return B.call(t)}return n=B.call(t),r?t[S]=e:delete t[S],n},U=m()?I:O,j=Boolean.prototype.toString;var x=U,Y=function(t){try{return j.call(t),!0}catch(t){return!1}},M=m();var C=function(t){return"object"==typeof t&&(t instanceof Boolean||(M?Y(t):"[object Boolean]"===x(t)))},k=y,L=C;var V=d,D=function(t){return k(t)||L(t)},N=C;V(D,"isPrimitive",y),V(D,"isObject",N);var F=D;var $=function(){return new Function("return this;")()},z="object"==typeof self?self:null,G="object"==typeof window?window:null,Z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},X="object"==typeof Z?Z:null;module.exports=X;var W=F.isPrimitive,q=$,J=z,H=G,K=t(Object.freeze({__proto__:null}));var Q=function(t){if(arguments.length){if(!W(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return q()}if(J)return J;if(H)return H;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},tt=Q(),rt=tt.document&&tt.document.childNodes,et=Int8Array,nt=r,it=rt,ot=et;var ut=function(){return"function"==typeof nt||"object"==typeof ot||"function"==typeof it};var at=function(){return/^\s*function\s*([^(]*)/i},ft=at;d(ft,"REGEXP",at());var st=ft,ht=U;var ct=Array.isArray?Array.isArray:function(t){return"[object Array]"===ht(t)};var lt=function(t){return null!==t&&"object"==typeof t};d(lt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!ct(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(lt));var pt=lt;var gt=function(t){return pt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))},vt=U,dt=st.REGEXP,yt=gt;var wt=function(t){var r,e,n;if(("Object"===(e=vt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=dt.exec(n.toString()))return r[1]}return yt(t)?"Buffer":e},mt=wt;var bt=wt;var Et=function(t){var r;return null===t?"null":"object"===(r=typeof t)?mt(t).toLowerCase():r},_t=function(t){return bt(t).toLowerCase()},At=ut()?_t:Et;var Pt=function(t){return"function"===At(t)},Rt=[],Tt=[],St="undefined"!=typeof Uint8Array?Uint8Array:Array,Bt=!1;function Ot(){Bt=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,e=t.length;r<e;++r)Rt[r]=t[r],Tt[t.charCodeAt(r)]=r;Tt["-".charCodeAt(0)]=62,Tt["_".charCodeAt(0)]=63}function It(t,r,e){for(var n,i,o=[],u=r;u<e;u+=3)n=(t[u]<<16)+(t[u+1]<<8)+t[u+2],o.push(Rt[(i=n)>>18&63]+Rt[i>>12&63]+Rt[i>>6&63]+Rt[63&i]);return o.join("")}function Ut(t){var r;Bt||Ot();for(var e=t.length,n=e%3,i="",o=[],u=16383,a=0,f=e-n;a<f;a+=u)o.push(It(t,a,a+u>f?f:a+u));return 1===n?(r=t[e-1],i+=Rt[r>>2],i+=Rt[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=Rt[r>>10],i+=Rt[r>>4&63],i+=Rt[r<<2&63],i+="="),o.push(i),o.join("")}function jt(t,r,e,n,i){var o,u,a=8*i-n-1,f=(1<<a)-1,s=f>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=a;h>0;o=256*o+t[r+c],c+=l,h-=8);for(u=o&(1<<-h)-1,o>>=-h,h+=n;h>0;u=256*u+t[r+c],c+=l,h-=8);if(0===o)o=1-s;else{if(o===f)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=s}return(p?-1:1)*u*Math.pow(2,o-n)}function xt(t,r,e,n,i,o){var u,a,f,s=8*o-i-1,h=(1<<s)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,v=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(a=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-u))<1&&(u--,f*=2),(r+=u+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(u++,f/=2),u+c>=h?(a=0,u=h):u+c>=1?(a=(r*f-1)*Math.pow(2,i),u+=c):(a=r*Math.pow(2,c-1)*Math.pow(2,i),u=0));i>=8;t[e+p]=255&a,p+=g,a/=256,i-=8);for(u=u<<i|a,s+=i;s>0;t[e+p]=255&u,p+=g,u/=256,s-=8);t[e+p-g]|=128*v}var Yt={}.toString,Mt=Array.isArray||function(t){return"[object Array]"==Yt.call(t)};Vt.TYPED_ARRAY_SUPPORT=void 0===Z.TYPED_ARRAY_SUPPORT||Z.TYPED_ARRAY_SUPPORT;var Ct=kt();function kt(){return Vt.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function Lt(t,r){if(kt()<r)throw new RangeError("Invalid typed array length");return Vt.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=Vt.prototype:(null===t&&(t=new Vt(r)),t.length=r),t}function Vt(t,r,e){if(!(Vt.TYPED_ARRAY_SUPPORT||this instanceof Vt))return new Vt(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return Ft(this,t)}return Dt(this,t,r,e)}function Dt(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);Vt.TYPED_ARRAY_SUPPORT?(t=r).__proto__=Vt.prototype:t=$t(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!Vt.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|Zt(r,e),i=(t=Lt(t,n)).write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(Gt(r)){var e=0|zt(r.length);return 0===(t=Lt(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?Lt(t,0):$t(t,r);if("Buffer"===r.type&&Mt(r.data))return $t(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function Nt(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function Ft(t,r){if(Nt(r),t=Lt(t,r<0?0:0|zt(r)),!Vt.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function $t(t,r){var e=r.length<0?0:0|zt(r.length);t=Lt(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function zt(t){if(t>=kt())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+kt().toString(16)+" bytes");return 0|t}function Gt(t){return!(null==t||!t._isBuffer)}function Zt(t,r){if(Gt(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return mr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return br(t).length;default:if(n)return mr(t).length;r=(""+r).toLowerCase(),n=!0}}function Xt(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return fr(this,r,e);case"utf8":case"utf-8":return ir(this,r,e);case"ascii":return ur(this,r,e);case"latin1":case"binary":return ar(this,r,e);case"base64":return nr(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return sr(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function Wt(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function qt(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=Vt.from(r,n)),Gt(r))return 0===r.length?-1:Jt(t,r,e,n,i);if("number"==typeof r)return r&=255,Vt.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):Jt(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function Jt(t,r,e,n,i){var o,u=1,a=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,a/=2,f/=2,e/=2}function s(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(i){var h=-1;for(o=e;o<a;o++)if(s(t,o)===s(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*u}else-1!==h&&(o-=o-h),h=-1}else for(e+f>a&&(e=a-f),o=e;o>=0;o--){for(var c=!0,l=0;l<f;l++)if(s(t,o+l)!==s(r,l)){c=!1;break}if(c)return o}return-1}function Ht(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var a=parseInt(r.substr(2*u,2),16);if(isNaN(a))return u;t[e+u]=a}return u}function Kt(t,r,e,n){return Er(mr(r,t.length-e),t,e,n)}function Qt(t,r,e,n){return Er(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function tr(t,r,e,n){return Qt(t,r,e,n)}function rr(t,r,e,n){return Er(br(r),t,e,n)}function er(t,r,e,n){return Er(function(t,r){for(var e,n,i,o=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function nr(t,r,e){return 0===r&&e===t.length?Ut(t):Ut(t.slice(r,e))}function ir(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,u,a,f,s=t[i],h=null,c=s>239?4:s>223?3:s>191?2:1;if(i+c<=e)switch(c){case 1:s<128&&(h=s);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&s)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(f=(15&s)<<12|(63&o)<<6|63&u)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],u=t[i+2],a=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&a)&&(f=(15&s)<<18|(63&o)<<12|(63&u)<<6|63&a)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=or)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=or));return e}(n)}Vt.poolSize=8192,Vt._augment=function(t){return t.__proto__=Vt.prototype,t},Vt.from=function(t,r,e){return Dt(null,t,r,e)},Vt.TYPED_ARRAY_SUPPORT&&(Vt.prototype.__proto__=Uint8Array.prototype,Vt.__proto__=Uint8Array),Vt.alloc=function(t,r,e){return function(t,r,e,n){return Nt(r),r<=0?Lt(t,r):void 0!==e?"string"==typeof n?Lt(t,r).fill(e,n):Lt(t,r).fill(e):Lt(t,r)}(null,t,r,e)},Vt.allocUnsafe=function(t){return Ft(null,t)},Vt.allocUnsafeSlow=function(t){return Ft(null,t)},Vt.isBuffer=_r,Vt.compare=function(t,r){if(!Gt(t)||!Gt(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},Vt.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Vt.concat=function(t,r){if(!Mt(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Vt.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=Vt.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!Gt(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},Vt.byteLength=Zt,Vt.prototype._isBuffer=!0,Vt.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)Wt(this,r,r+1);return this},Vt.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)Wt(this,r,r+3),Wt(this,r+1,r+2);return this},Vt.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)Wt(this,r,r+7),Wt(this,r+1,r+6),Wt(this,r+2,r+5),Wt(this,r+3,r+4);return this},Vt.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?ir(this,0,t):Xt.apply(this,arguments)},Vt.prototype.equals=function(t){if(!Gt(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Vt.compare(this,t)},Vt.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},Vt.prototype.compare=function(t,r,e,n,i){if(!Gt(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),a=Math.min(o,u),f=this.slice(n,i),s=t.slice(r,e),h=0;h<a;++h)if(f[h]!==s[h]){o=f[h],u=s[h];break}return o<u?-1:u<o?1:0},Vt.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},Vt.prototype.indexOf=function(t,r,e){return qt(this,t,r,e,!0)},Vt.prototype.lastIndexOf=function(t,r,e){return qt(this,t,r,e,!1)},Vt.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return Ht(this,t,r,e);case"utf8":case"utf-8":return Kt(this,t,r,e);case"ascii":return Qt(this,t,r,e);case"latin1":case"binary":return tr(this,t,r,e);case"base64":return rr(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return er(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},Vt.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var or=4096;function ur(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function ar(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function fr(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=wr(t[o]);return i}function sr(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function hr(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function cr(t,r,e,n,i,o){if(!Gt(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function lr(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function pr(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function gr(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function vr(t,r,e,n,i){return i||gr(t,0,e,4),xt(t,r,e,n,23,4),e+4}function dr(t,r,e,n,i){return i||gr(t,0,e,8),xt(t,r,e,n,52,8),e+8}Vt.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),Vt.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=Vt.prototype;else{var i=r-t;e=new Vt(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},Vt.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||hr(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},Vt.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||hr(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},Vt.prototype.readUInt8=function(t,r){return r||hr(t,1,this.length),this[t]},Vt.prototype.readUInt16LE=function(t,r){return r||hr(t,2,this.length),this[t]|this[t+1]<<8},Vt.prototype.readUInt16BE=function(t,r){return r||hr(t,2,this.length),this[t]<<8|this[t+1]},Vt.prototype.readUInt32LE=function(t,r){return r||hr(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Vt.prototype.readUInt32BE=function(t,r){return r||hr(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Vt.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||hr(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},Vt.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||hr(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},Vt.prototype.readInt8=function(t,r){return r||hr(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Vt.prototype.readInt16LE=function(t,r){r||hr(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},Vt.prototype.readInt16BE=function(t,r){r||hr(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},Vt.prototype.readInt32LE=function(t,r){return r||hr(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Vt.prototype.readInt32BE=function(t,r){return r||hr(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Vt.prototype.readFloatLE=function(t,r){return r||hr(t,4,this.length),jt(this,t,!0,23,4)},Vt.prototype.readFloatBE=function(t,r){return r||hr(t,4,this.length),jt(this,t,!1,23,4)},Vt.prototype.readDoubleLE=function(t,r){return r||hr(t,8,this.length),jt(this,t,!0,52,8)},Vt.prototype.readDoubleBE=function(t,r){return r||hr(t,8,this.length),jt(this,t,!1,52,8)},Vt.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||cr(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},Vt.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||cr(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},Vt.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,1,255,0),Vt.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},Vt.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,2,65535,0),Vt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):lr(this,t,r,!0),r+2},Vt.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,2,65535,0),Vt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):lr(this,t,r,!1),r+2},Vt.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,4,4294967295,0),Vt.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):pr(this,t,r,!0),r+4},Vt.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,4,4294967295,0),Vt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):pr(this,t,r,!1),r+4},Vt.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);cr(this,t,r,e,i-1,-i)}var o=0,u=1,a=0;for(this[r]=255&t;++o<e&&(u*=256);)t<0&&0===a&&0!==this[r+o-1]&&(a=1),this[r+o]=(t/u>>0)-a&255;return r+e},Vt.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);cr(this,t,r,e,i-1,-i)}var o=e-1,u=1,a=0;for(this[r+o]=255&t;--o>=0&&(u*=256);)t<0&&0===a&&0!==this[r+o+1]&&(a=1),this[r+o]=(t/u>>0)-a&255;return r+e},Vt.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,1,127,-128),Vt.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},Vt.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,2,32767,-32768),Vt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):lr(this,t,r,!0),r+2},Vt.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,2,32767,-32768),Vt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):lr(this,t,r,!1),r+2},Vt.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,4,2147483647,-2147483648),Vt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):pr(this,t,r,!0),r+4},Vt.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||cr(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),Vt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):pr(this,t,r,!1),r+4},Vt.prototype.writeFloatLE=function(t,r,e){return vr(this,t,r,!0,e)},Vt.prototype.writeFloatBE=function(t,r,e){return vr(this,t,r,!1,e)},Vt.prototype.writeDoubleLE=function(t,r,e){return dr(this,t,r,!0,e)},Vt.prototype.writeDoubleBE=function(t,r,e){return dr(this,t,r,!1,e)},Vt.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!Vt.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},Vt.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Vt.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var u=Gt(t)?t:mr(new Vt(t,n).toString()),a=u.length;for(o=0;o<e-r;++o)this[o+r]=u[o%a]}return this};var yr=/[^+\/0-9A-Za-z-_]/g;function wr(t){return t<16?"0"+t.toString(16):t.toString(16)}function mr(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function br(t){return function(t){var r,e,n,i,o,u;Bt||Ot();var a=t.length;if(a%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===t[a-2]?2:"="===t[a-1]?1:0,u=new St(3*a/4-o),n=o>0?a-4:a;var f=0;for(r=0,e=0;r<n;r+=4,e+=3)i=Tt[t.charCodeAt(r)]<<18|Tt[t.charCodeAt(r+1)]<<12|Tt[t.charCodeAt(r+2)]<<6|Tt[t.charCodeAt(r+3)],u[f++]=i>>16&255,u[f++]=i>>8&255,u[f++]=255&i;return 2===o?(i=Tt[t.charCodeAt(r)]<<2|Tt[t.charCodeAt(r+1)]>>4,u[f++]=255&i):1===o&&(i=Tt[t.charCodeAt(r)]<<10|Tt[t.charCodeAt(r+1)]<<4|Tt[t.charCodeAt(r+2)]>>2,u[f++]=i>>8&255,u[f++]=255&i),u}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(yr,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Er(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function _r(t){return null!=t&&(!!t._isBuffer||Ar(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&Ar(t.slice(0,0))}(t))}function Ar(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var Pr=Object.freeze({__proto__:null,Buffer:Vt,INSPECT_MAX_BYTES:50,SlowBuffer:function(t){return+t!=t&&(t=0),Vt.alloc(+t)},isBuffer:_r,kMaxLength:Ct}),Rr=Vt;module.exports=Rr;var Tr=gt,Sr=t(Object.freeze({__proto__:null}));var Br=function(){var t,r;if("function"!=typeof Sr)return!1;try{r="function"==typeof Sr.from?Sr.from([1,2,3,4]):new Sr([1,2,3,4]),t=Tr(r)&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){t=!1}return t},Or=Br;var Ir=t(Pr).Buffer,Ur=function(){throw new Error("not implemented")},jr=Or()?Ir:Ur,xr=Pt(jr.from);var Yr=function(t){return"string"==typeof t},Mr=String.prototype.valueOf;var Cr=U,kr=function(t){try{return Mr.call(t),!0}catch(t){return!1}},Lr=m();var Vr=function(t){return"object"==typeof t&&(t instanceof String||(Lr?kr(t):"[object String]"===Cr(t)))},Dr=Yr,Nr=Vr;var Fr=d,$r=function(t){return Dr(t)||Nr(t)},zr=Vr;Fr($r,"isPrimitive",Yr),Fr($r,"isObject",zr);var Gr=$r,Zr=Math.floor;var Xr=function(t){return Zr(t)===t},Wr=Xr;var qr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Wr(t.length)&&t.length>=0&&t.length<=9007199254740991};var Jr=function(t){return"number"==typeof t},Hr=Number,Kr=Hr.prototype.toString;var Qr=U,te=Hr,re=function(t){try{return Kr.call(t),!0}catch(t){return!1}},ee=m();var ne=function(t){return"object"==typeof t&&(t instanceof te||(ee?re(t):"[object Number]"===Qr(t)))},ie=Jr,oe=ne;var ue=d,ae=function(t){return ie(t)||oe(t)},fe=ne;ue(ae,"isPrimitive",Jr),ue(ae,"isObject",fe);var se=ae,he=Number.POSITIVE_INFINITY,ce=Hr.NEGATIVE_INFINITY,le=he,pe=ce,ge=Xr;var ve=function(t){return t<le&&t>pe&&ge(t)},de=se.isPrimitive,ye=ve;var we=function(t){return de(t)&&ye(t)},me=se.isObject,be=ve;var Ee=function(t){return me(t)&&be(t.valueOf())},_e=we,Ae=Ee;var Pe=d,Re=function(t){return _e(t)||Ae(t)},Te=Ee;Pe(Re,"isPrimitive",we),Pe(Re,"isObject",Te);var Se=Re;var Be=function(t){return t!=t},Oe=se.isPrimitive,Ie=Be;var Ue=function(t){return Oe(t)&&Ie(t)},je=se.isObject,xe=Be;var Ye=function(t){return je(t)&&xe(t.valueOf())},Me=Ue,Ce=Ye;var ke=d,Le=function(t){return Me(t)||Ce(t)},Ve=Ye;ke(Le,"isPrimitive",Ue),ke(Le,"isObject",Ve);var De=qr,Ne=Se.isPrimitive,Fe=Gr.isPrimitive,$e=Le.isPrimitive;var ze=function(t,r,e){var n,i,o;if(!De(t)&&!Fe(t))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+t+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ne(e))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+e+"`.");(i=e)<0&&(i=0)}else i=0;if(Fe(t)){if(!Fe(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");return-1!==t.indexOf(r,i)}if(n=t.length,$e(r)){for(o=i;o<n;o++)if($e(t[o]))return!0;return!1}for(o=i;o<n;o++)if(t[o]===r)return!0;return!1},Ge=ze,Ze=Gr.isPrimitive;var Xe=function(t){if(!Ze(t))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+t+"`.");return t.toLowerCase()},We=Gr.isPrimitive;var qe=function(t){if(!We(t))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+t+"`.");return t.toUpperCase()},Je=Xe,He=qe,Ke=Gr.isPrimitive;var Qe=function(t){return Ke(t)&&t===He(t)&&t!==Je(t)},tn=he,rn=ce;var en=function(t){return t==t&&t>rn&&t<tn},nn=Se.isPrimitive;var on=function(t){return nn(t)&&t>=0},un=Se.isObject;var an=function(t){return un(t)&&t.valueOf()>=0},fn=on,sn=an;var hn=d,cn=function(t){return fn(t)||sn(t)},ln=an;hn(cn,"isPrimitive",on),hn(cn,"isObject",ln);var pn=cn.isPrimitive,gn=Gr.isPrimitive;var vn=function(t,r){var e,n;if(!gn(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!pn(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(0===t.length||0===r)return"";if(t.length*r>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(e="",n=r;1==(1&n)&&(e+=t),0!==(n>>>=1);)t+=t;return e},dn=Se.isPrimitive,yn=Gr.isPrimitive;var wn=function(t,r,e){var n,i;if(!yn(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(!yn(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");if(arguments.length>2){if(!dn(e))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+e+"`.");n=e<0?t.length+e:e}else n=0;if(0===r.length)return!0;if(n<0||n+r.length>t.length)return!1;for(i=0;i<r.length;i++)if(t.charCodeAt(n+i)!==r.charCodeAt(i))return!1;return!0},mn=vn,bn=wn;var En=function(t,r,e){var n=!1,i=r-t.length;return i<0||(bn(t,"-")&&(n=!0,t=t.substr(1)),t=e?t+mn("0",i):mn("0",i)+t,n&&(t="-"+t)),t},_n=Qe,An=qe,Pn=Xe,Rn=en,Tn=se.isPrimitive,Sn=En;var Bn=function(t){var r,e,n;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,n=parseInt(e,10),!Rn(n)){if(!Tn(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===t.specifier||10!==r)&&(n=4294967295+n+1),n<0?(e=(-n).toString(r),t.precision&&(e=Sn(e,t.precision,t.padRight)),e="-"+e):(e=n.toString(r),n||t.precision?t.precision&&(e=Sn(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=_n(t.specifier)?An(e):Pn(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e},On=Gr.isPrimitive,In=/[-\/\\^$*+?.()|[\]{}]/g;var Un=function(t){var r,e;if(!On(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(In,"\\$&"):(r=(r=t.substring(1,e)).replace(In,"\\$&"),t=t[0]+r+t.substring(e))},jn=RegExp.prototype.exec;var xn=U,Yn=function(t){try{return jn.call(t),!0}catch(t){return!1}},Mn=m();var Cn=Un,kn=Pt,Ln=Gr.isPrimitive,Vn=function(t){return"object"==typeof t&&(t instanceof RegExp||(Mn?Yn(t):"[object RegExp]"===xn(t)))};var Dn=Qe,Nn=qe,Fn=Xe,$n=function(t,r,e){if(!Ln(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(Ln(r))r=Cn(r),r=new RegExp(r,"g");else if(!Vn(r))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+r+"`.");if(!Ln(e)&&!kn(e))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+e+"`.");return t.replace(r,e)},zn=en,Gn=se.isPrimitive,Zn=function(t){return Math.abs(t)},Xn=/e\+(\d)$/,Wn=/e-(\d)$/,qn=/^(\d+)$/,Jn=/^(\d+)e/,Hn=/\.0$/,Kn=/\.0*e/,Qn=/(\..*[^0])0*e/;var ti=function(t){var r,e,n=parseFloat(t.arg);if(!zn(n)){if(!Gn(t.arg))throw new Error("invalid floating-point number. Value: "+e);n=t.arg}switch(t.specifier){case"e":case"E":e=n.toExponential(t.precision);break;case"f":case"F":e=n.toFixed(t.precision);break;case"g":case"G":Zn(n)<1e-4?((r=t.precision)>0&&(r-=1),e=n.toExponential(r)):e=n.toPrecision(t.precision),t.alternate||(e=$n(e,Qn,"$1e"),e=$n(e,Kn,"e"),e=$n(e,Hn,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=$n(e,Xn,"e+0$1"),e=$n(e,Wn,"e-0$1"),t.alternate&&(e=$n(e,qn,"$1."),e=$n(e,Jn,"$1.e")),n>=0&&t.sign&&(e=t.sign+e),e=Dn(t.specifier)?Nn(e):Fn(e)},ri=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var ei=vn;var ni=Gr.isPrimitive,ii=Ge,oi=Be,ui=Bn,ai=ti,fi=function(t){var r,e,n,i,o;for(r=0,n=[],o=ri.exec(t);o;)(e=t.slice(r,ri.lastIndex-o[0].length)).length&&n.push(e),(i=u(o,n.length))&&n.push(i),r=ri.lastIndex,o=ri.exec(t);return(e=t.slice(r)).length&&n.push(e),n;function u(t){return{mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],hasPeriod:"."===t[4],precision:t[5],specifier:t[6]}}},si=function(t,r,e){var n=r-t.length;return n<0?t:t=e?t+ei(" ",n):ei(" ",n)+t},hi=En,ci=String.fromCharCode;var li=function(t){var r,e,n,i,o,u,a,f,s;if(!ni(t))throw new TypeError("invalid argument. Must provide a string. Value: `"+t+"`.");for(r=fi(t),u="",a=1,f=0;f<r.length;f++)if(n=r[f],ni(n))u+=n;else{for(n.mapping&&(a=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!ii(e,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[a],10),a+=1,oi(n.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[a],10),a+=1,oi(n.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[a],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=ui(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!oi(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=oi(o)?String(n.arg):ci(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=ai(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=hi(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=si(n.arg,n.width,n.padRight)),u+=n.arg||"",a+=1}return u},pi=gt,gi=li,vi=jr;var di=function(t){if(!pi(t))throw new TypeError(gi("invalid argument. Must provide a Buffer. Value: `%s`.",t));return vi.from(t)},yi=gt,wi=li,mi=jr;var bi=function(t){if(!yi(t))throw new TypeError(wi("invalid argument. Must provide a Buffer. Value: `%s`.",t));return new mi(t)};return xr?di:bi}));
//# sourceMappingURL=bundle.js.map
