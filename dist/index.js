"use strict";var k=function(o,u){return function(){return u||o((u={exports:{}}).exports,u),u.exports}};var N=k(function(V,y){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=require('@stdlib/utils-define-read-write-accessor/dist'),x=require('@stdlib/array-base-accessors/dist'),q=require('@stdlib/array-base-copy/dist');function J(o,u){var h,l,n,c,v,a,s,f,r;if(s=o.length,s<1)return[];if(n=q(o),f=n[0].length,f<1)return[];for(a=[],r=0;r<s;r++)a.push(x(n[r]).accessors);c=q(u);function p(e){return g(this,"_i",e),this}for(r=0;r<s;r++)h=m(n[r],a[r][0]),l=O(n[r],a[r][1]),w(p.prototype,c[r],h,l);for(g(p.prototype,"toJSON",_),v=[],r=0;r<f;r++)v.push(new p(r));return v;function m(e,i){return t;function t(){return i(e,this._i)}}function O(e,i){return t;function t(d){i(e,this._i,d)}}function _(){var e,i,t;for(e={},t=0;t<s;t++)i=c[t],e[i]=this[i];return e}}y.exports=J
});var R=N();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
