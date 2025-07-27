"use strict";var k=function(i,n){return function(){return n||i((n={exports:{}}).exports,n),n.exports}};var N=k(function(b,q){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=require('@stdlib/utils-define-read-write-accessor/dist'),x=require('@stdlib/array-base-accessors/dist'),J=require('@stdlib/array-base-copy/dist');function R(i,n){var h,l,c,v,s,o,f,a,r;if(o=i.length,o<1)return[];if(f=i[0].length,f<1)return[];for(s=[],r=0;r<o;r++)s.push(x(i[r]).accessors);c=J(n);function p(e){return g(this,"_i",e),this}for(r=0;r<o;r++)h=m(i[r],s[r][0]),l=O(i[r],s[r][1]),w(p.prototype,c[r],h,l);for(g(p.prototype,"toJSON",_),v=[],a=0;a<f;a++)v.push(new p(a));return v;function m(e,u){return t;function t(){return u(e,this._i)}}function O(e,u){return t;function t(d){u(e,this._i,d)}}function _(){var e,u,t;for(e={},t=0;t<o;t++)u=c[t],e[u]=this[u];return e}}q.exports=R
});var S=N();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
