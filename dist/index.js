"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var t=i(function(T,a){
var q=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/buffer-ctor/dist'),p=q(m.from);a.exports=p
});var o=i(function(V,f){
var B=require('@stdlib/assert-is-buffer/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist'),c=require('@stdlib/buffer-ctor/dist');function w(r){if(!B(r))throw new TypeError(l('0GN3b',r));return c.from(r)}f.exports=w
});var v=i(function(j,s){
var d=require('@stdlib/assert-is-buffer/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist'),y=require('@stdlib/buffer-ctor/dist');function h(r){if(!d(r))throw new TypeError(x('0GN3b',r));return new y(r)}s.exports=h
});var g=t(),E=o(),F=v(),u;g?u=E:u=F;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
