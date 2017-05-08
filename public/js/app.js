/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function i(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););
return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function c(n,t){return!(null==n||!n.length)&&-1<d(n,t,0)}function a(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];
return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function _(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function g(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function d(n,t,r){if(t===t)n:{
--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=g(n,b,r);return n}function y(n,t,r,e){--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function b(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:P}function j(n){return function(t){return null==t?F:t[n]}}function w(n){return function(t){return null==n?F:n[t]}}function m(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;
return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==F&&(r=r===F?i:r+i)}return r}function E(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function O(n,t){return l(t,function(t){return[t,n[t]]})}function S(n){return function(t){return n(t)}}function I(n,t){return l(t,function(t){return n[t]})}function R(n,t){return n.has(t)}function z(n,t){for(var r=-1,e=n.length;++r<e&&-1<d(t,n[r],0););return r}function W(n,t){for(var r=n.length;r--&&-1<d(t,n[r],0););return r}function B(n){
return"\\"+Tn[n]}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function U(n,t){return function(r){return n(t(r))}}function C(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function M(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function T(n){if(Bn.test(n)){
for(var t=zn.lastIndex=0;zn.test(n);)++t;n=t}else n=tt(n);return n}function $(n){return Bn.test(n)?n.match(zn)||[]:n.split("")}var F,N=1/0,P=NaN,Z=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],q=/\b__p\+='';/g,V=/\b(__p\+=)''\+/g,K=/(__e\(.*?\)|\b__t\))\+'';/g,G=/&(?:amp|lt|gt|quot|#39);/g,H=/[&<>"']/g,J=RegExp(G.source),Y=RegExp(H.source),Q=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,nn=/<%=([\s\S]+?)%>/g,tn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rn=/^\w*$/,en=/^\./,un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,on=/[\\^$.*+?()[\]{}|]/g,fn=RegExp(on.source),cn=/^\s+|\s+$/g,an=/^\s+/,ln=/\s+$/,sn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,hn=/\{\n\/\* \[wrapped with (.+)\] \*/,pn=/,? & /,_n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,vn=/\\(\\)?/g,gn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,dn=/\w*$/,yn=/^[-+]0x[0-9a-f]+$/i,bn=/^0b[01]+$/i,xn=/^\[object .+?Constructor\]$/,jn=/^0o[0-7]+$/i,wn=/^(?:0|[1-9]\d*)$/,mn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,An=/($^)/,kn=/['\n\r\u2028\u2029\\]/g,En="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",On="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+En,Sn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",In=RegExp("['\u2019]","g"),Rn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),zn=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Sn+En,"g"),Wn=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+",On].join("|"),"g"),Bn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Ln=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Un="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Cn={};
Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=true,Cn["[object Arguments]"]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object Boolean]"]=Cn["[object DataView]"]=Cn["[object Date]"]=Cn["[object Error]"]=Cn["[object Function]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn["[object Object]"]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object WeakMap]"]=false;
var Dn={};Dn["[object Arguments]"]=Dn["[object Array]"]=Dn["[object ArrayBuffer]"]=Dn["[object DataView]"]=Dn["[object Boolean]"]=Dn["[object Date]"]=Dn["[object Float32Array]"]=Dn["[object Float64Array]"]=Dn["[object Int8Array]"]=Dn["[object Int16Array]"]=Dn["[object Int32Array]"]=Dn["[object Map]"]=Dn["[object Number]"]=Dn["[object Object]"]=Dn["[object RegExp]"]=Dn["[object Set]"]=Dn["[object String]"]=Dn["[object Symbol]"]=Dn["[object Uint8Array]"]=Dn["[object Uint8ClampedArray]"]=Dn["[object Uint16Array]"]=Dn["[object Uint32Array]"]=true,
Dn["[object Error]"]=Dn["[object Function]"]=Dn["[object WeakMap]"]=false;var Mn,Tn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$n=parseFloat,Fn=parseInt,Nn=typeof global=="object"&&global&&global.Object===Object&&global,Pn=typeof self=="object"&&self&&self.Object===Object&&self,Zn=Nn||Pn||Function("return this")(),qn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vn=qn&&typeof module=="object"&&module&&!module.nodeType&&module,Kn=Vn&&Vn.exports===qn,Gn=Kn&&Nn.process;
n:{try{Mn=Gn&&Gn.binding&&Gn.binding("util");break n}catch(n){}Mn=void 0}var Hn=Mn&&Mn.isArrayBuffer,Jn=Mn&&Mn.isDate,Yn=Mn&&Mn.isMap,Qn=Mn&&Mn.isRegExp,Xn=Mn&&Mn.isSet,nt=Mn&&Mn.isTypedArray,tt=j("length"),rt=w({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I",
"\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C",
"\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i",
"\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S",
"\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe",
"\u0149":"'n","\u017f":"s"}),et=w({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),ut=w({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),it=function w(En){function On(n){if(xu(n)&&!af(n)&&!(n instanceof Mn)){if(n instanceof zn)return n;if(ci.call(n,"__wrapped__"))return Pe(n)}return new zn(n)}function Sn(){}function zn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=F}function Mn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,
this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Pn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function qn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Pn;++t<r;)this.add(n[t])}function Vn(n){
this.size=(this.__data__=new Nn(n)).size}function Gn(n,t){var r,e=af(n),u=!e&&cf(n),i=!e&&!u&&sf(n),o=!e&&!u&&!i&&gf(n),u=(e=e||u||i||o)?E(n.length,ri):[],f=u.length;for(r in n)!t&&!ci.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Re(r,f))||u.push(r);return u}function tt(n){var t=n.length;return t?n[cr(0,t-1)]:F}function ot(n,t){return Te(Mr(n),gt(t,0,n.length))}function ft(n){return Te(Mr(n))}function ct(n,t,r){(r===F||hu(n[t],r))&&(r!==F||t in n)||_t(n,t,r);
}function at(n,t,r){var e=n[t];ci.call(n,t)&&hu(e,r)&&(r!==F||t in n)||_t(n,t,r)}function lt(n,t){for(var r=n.length;r--;)if(hu(n[r][0],t))return r;return-1}function st(n,t,r,e){return oo(n,function(n,u,i){t(e,n,r(n),i)}),e}function ht(n,t){return n&&Tr(t,Lu(t),n)}function pt(n,t){return n&&Tr(t,Uu(t),n)}function _t(n,t,r){"__proto__"==t&&Ei?Ei(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function vt(n,t){for(var r=-1,e=t.length,u=Hu(e),i=null==n;++r<e;)u[r]=i?F:Wu(n,t[r]);return u;
}function gt(n,t,r){return n===n&&(r!==F&&(n=n<=r?n:r),t!==F&&(n=n>=t?n:t)),n}function dt(n,t,r,e,i,o){var f,c=1&t,a=2&t,l=4&t;if(r&&(f=i?r(n,e,i,o):r(n)),f!==F)return f;if(!bu(n))return n;if(e=af(n)){if(f=Ee(n),!c)return Mr(n,f)}else{var s=yo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(sf(n))return Wr(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Oe(n),!c)return a?Fr(n,pt(f,n)):$r(n,ht(f,n))}else{if(!Dn[s])return i?n:{};f=Se(n,s,dt,c)}}if(o||(o=new Vn),
i=o.get(n))return i;o.set(n,f);var a=l?a?ye:de:a?Uu:Lu,p=e?F:a(n);return u(p||n,function(e,u){p&&(u=e,e=n[u]),at(f,u,dt(e,t,r,u,n,o))}),f}function yt(n){var t=Lu(n);return function(r){return bt(r,n,t)}}function bt(n,t,r){var e=r.length;if(null==n)return!e;for(n=ni(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===F&&!(u in n)||!i(o))return false}return true}function xt(n,t,r){if(typeof n!="function")throw new ei("Expected a function");return jo(function(){n.apply(F,r)},t)}function jt(n,t,r,e){var u=-1,i=c,o=true,f=n.length,s=[],h=t.length;
if(!f)return s;r&&(t=l(t,S(r))),e?(i=a,o=false):200<=t.length&&(i=R,o=false,t=new qn(t));n:for(;++u<f;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(o&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function wt(n,t){var r=true;return oo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function mt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===F?o===o&&!Au(o):r(o,f)))var f=o,c=i}return c}function At(n,t){var r=[];return oo(n,function(n,e,u){
t(n,e,u)&&r.push(n)}),r}function kt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ie),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?kt(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function Et(n,t){return n&&co(n,t,Lu)}function Ot(n,t){return n&&ao(n,t,Lu)}function St(n,t){return f(t,function(t){return gu(n[t])})}function It(n,t){t=Rr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[$e(t[r++])];return r&&r==e?n:F}function Rt(n,t,r){return t=t(n),af(n)?t:s(t,r(n))}function zt(n){if(null==n)n=n===F?"[object Undefined]":"[object Null]";else if(ki&&ki in ni(n)){
var t=ci.call(n,ki),r=n[ki];try{n[ki]=F;var e=true}catch(n){}var u=si.call(n);e&&(t?n[ki]=r:delete n[ki]),n=u}else n=si.call(n);return n}function Wt(n,t){return n>t}function Bt(n,t){return null!=n&&ci.call(n,t)}function Lt(n,t){return null!=n&&t in ni(n)}function Ut(n,t,r){for(var e=r?a:c,u=n[0].length,i=n.length,o=i,f=Hu(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,S(t))),s=Mi(p.length,s),f[o]=!r&&(t||120<=u&&120<=p.length)?new qn(o&&p):F}var p=n[0],_=-1,v=f[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;
if(v?!R(v,d):!e(h,d,r)){for(o=i;--o;){var y=f[o];if(y?!R(y,d):!e(n[o],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Ct(n,t,r){var e={};return Et(n,function(n,u,i){t(e,r(n),u,i)}),e}function Dt(n,t,e){return t=Rr(t,n),n=2>t.length?n:It(n,vr(t,0,-1)),t=null==n?n:n[$e(Ge(t))],null==t?F:r(t,n,e)}function Mt(n){return xu(n)&&"[object Arguments]"==zt(n)}function Tt(n){return xu(n)&&"[object ArrayBuffer]"==zt(n)}function $t(n){return xu(n)&&"[object Date]"==zt(n)}function Ft(n,t,r,e,u){if(n===t)t=true;else if(null==n||null==t||!xu(n)&&!xu(t))t=n!==n&&t!==t;else n:{
var i=af(n),o=af(t),f=i?"[object Array]":yo(n),c=o?"[object Array]":yo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&sf(n)){if(!sf(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Vn),t=i||gf(n)?_e(n,t,r,e,Ft,u):ve(n,t,f,r,e,Ft,u);else{if(!(1&r)&&(i=a&&ci.call(n,"__wrapped__"),f=o&&ci.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Vn),t=Ft(n,t,r,e,u);break n}if(c)t:if(u||(u=new Vn),
i=1&r,f=de(n),o=f.length,c=de(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:ci.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===F?h!==p&&!Ft(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l)}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),
u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Nt(n){return xu(n)&&"[object Map]"==yo(n)}function Pt(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=ni(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===F&&!(c in n))return false}else{if(f=new Vn,e)var s=e(a,l,c,n,t,f);if(s===F?!Ft(l,a,3,e,f):!s)return false}}return true}function Zt(n){return!(!bu(n)||li&&li in n)&&(gu(n)?_i:xn).test(Fe(n))}function qt(n){
return xu(n)&&"[object RegExp]"==zt(n)}function Vt(n){return xu(n)&&"[object Set]"==yo(n)}function Kt(n){return xu(n)&&yu(n.length)&&!!Cn[zt(n)]}function Gt(n){return typeof n=="function"?n:null==n?Nu:typeof n=="object"?af(n)?Xt(n[0],n[1]):Qt(n):Vu(n)}function Ht(n){if(!Le(n))return Ci(n);var t,r=[];for(t in ni(n))ci.call(n,t)&&"constructor"!=t&&r.push(t);return r}function Jt(n,t){return n<t}function Yt(n,t){var r=-1,e=pu(n)?Hu(n.length):[];return oo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Qt(n){
var t=me(n);return 1==t.length&&t[0][2]?Ue(t[0][0],t[0][1]):function(r){return r===n||Pt(r,n,t)}}function Xt(n,t){return We(n)&&t===t&&!bu(t)?Ue($e(n),t):function(r){var e=Wu(r,n);return e===F&&e===t?Bu(r,n):Ft(t,e,3)}}function nr(n,t,r,e,u){n!==t&&co(t,function(i,o){if(bu(i)){u||(u=new Vn);var f=u,c=n[o],a=t[o],l=f.get(a);if(l)ct(n,o,l);else{var l=e?e(c,a,o+"",n,t,f):F,s=l===F;if(s){var h=af(a),p=!h&&sf(a),_=!h&&!p&&gf(a),l=a;h||p||_?af(c)?l=c:_u(c)?l=Mr(c):p?(s=false,l=Wr(a,true)):_?(s=false,l=Lr(a,true)):l=[]:wu(a)||cf(a)?(l=c,
cf(c)?l=Ru(c):(!bu(c)||r&&gu(c))&&(l=Oe(a))):s=false}s&&(f.set(a,l),nr(l,a,r,e,f),f.delete(a)),ct(n,o,l)}}else f=e?e(n[o],i,o+"",n,t,u):F,f===F&&(f=i),ct(n,o,f)},Uu)}function tr(n,t){var r=n.length;if(r)return t+=0>t?r:0,Re(t,r)?n[t]:F}function rr(n,t,r){var e=-1;return t=l(t.length?t:[Nu],S(je())),n=Yt(n,function(n){return{a:l(t,function(t){return t(n)}),b:++e,c:n}}),A(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Ur(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);
break n}}e=n.b-t.b}return e})}function er(n,t){return ur(n,t,function(t,r){return Bu(n,r)})}function ur(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=It(n,o);r(f,o)&&pr(i,Rr(o,n),f)}return i}function ir(n){return function(t){return It(t,n)}}function or(n,t,r,e){var u=e?y:d,i=-1,o=t.length,f=n;for(n===t&&(t=Mr(t)),r&&(f=l(n,S(r)));++i<o;)for(var c=0,a=t[i],a=r?r(a):a;-1<(c=u(f,a,c,e));)f!==n&&wi.call(f,c,1),wi.call(n,c,1);return n}function fr(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];
if(r==e||u!==i){var i=u;Re(u)?wi.call(n,u,1):mr(n,u)}}}function cr(n,t){return n+zi(Fi()*(t-n+1))}function ar(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=zi(t/2))&&(n+=n);while(t);return r}function lr(n,t){return wo(Ce(n,t,Nu),n+"")}function sr(n){return tt(Du(n))}function hr(n,t){var r=Du(n);return Te(r,gt(t,0,r.length))}function pr(n,t,r,e){if(!bu(n))return n;t=Rr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=$e(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):F;
a===F&&(a=bu(l)?l:Re(t[u+1])?[]:{})}at(f,c,a),f=f[c]}return n}function _r(n){return Te(Du(n))}function vr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Hu(u);++e<u;)r[e]=n[e+t];return r}function gr(n,t){var r;return oo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function dr(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!Au(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return yr(n,t,Nu,r);
}function yr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=Au(t),a=t===F;u<i;){var l=zi((u+i)/2),s=r(n[l]),h=s!==F,p=null===s,_=s===s,v=Au(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Mi(i,4294967294)}function br(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!hu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function xr(n){return typeof n=="number"?n:Au(n)?P:+n}function jr(n){if(typeof n=="string")return n;
if(af(n))return l(n,jr)+"";if(Au(n))return uo?uo.call(n):"";var t=n+"";return"0"==t&&1/n==-N?"-0":t}function wr(n,t,r){var e=-1,u=c,i=n.length,o=true,f=[],l=f;if(r)o=false,u=a;else if(200<=i){if(u=t?null:po(n))return D(u);o=false,u=R,l=new qn}else l=t?[]:f;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(o&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),f.push(s)}else u(l,h,r)||(l!==f&&l.push(h),f.push(s))}return f}function mr(n,t){return t=Rr(t,n),n=2>t.length?n:It(n,vr(t,0,-1)),
null==n||delete n[$e(Ge(t))]}function Ar(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?vr(n,e?0:i,e?i+1:u):vr(n,e?i+1:0,e?u:i)}function kr(n,t){var r=n;return r instanceof Mn&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function Er(n,t,r){var e=n.length;if(2>e)return e?wr(n[0]):[];for(var u=-1,i=Hu(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=jt(i[u]||o,n[f],t,r));return wr(kt(i,1),t,r)}function Or(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:F);
return o}function Sr(n){return _u(n)?n:[]}function Ir(n){return typeof n=="function"?n:Nu}function Rr(n,t){return af(n)?n:We(n,t)?[n]:mo(zu(n))}function zr(n,t,r){var e=n.length;return r=r===F?e:r,!t&&r>=e?n:vr(n,t,r)}function Wr(n,t){if(t)return n.slice();var r=n.length,r=yi?yi(r):new n.constructor(r);return n.copy(r),r}function Br(n){var t=new n.constructor(n.byteLength);return new di(t).set(new di(n)),t}function Lr(n,t){return new n.constructor(t?Br(n.buffer):n.buffer,n.byteOffset,n.length)}function Ur(n,t){
if(n!==t){var r=n!==F,e=null===n,u=n===n,i=Au(n),o=t!==F,f=null===t,c=t===t,a=Au(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Cr(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Di(i-o,0),l=Hu(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Dr(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Di(i-f,0),s=Hu(l+a);
for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Mr(n,t){var r=-1,e=n.length;for(t||(t=Hu(e));++r<e;)t[r]=n[r];return t}function Tr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):F;c===F&&(c=n[f]),u?_t(r,f,c):at(r,f,c)}return r}function $r(n,t){return Tr(n,vo(n),t)}function Fr(n,t){return Tr(n,go(n),t)}function Nr(n,t){return function(r,u){var i=af(r)?e:st,o=t?t():{};return i(r,n,je(u,2),o);
}}function Pr(n){return lr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:F,o=2<u?r[2]:F,i=3<n.length&&typeof i=="function"?(u--,i):F;for(o&&ze(r[0],r[1],o)&&(i=3>u?F:i,u=1),t=ni(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Zr(n,t){return function(r,e){if(null==r)return r;if(!pu(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=ni(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function qr(n){return function(t,r,e){var u=-1,i=ni(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
}return t}}function Vr(n,t,r){function e(){return(this&&this!==Zn&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Hr(n);return e}function Kr(n){return function(t){t=zu(t);var r=Bn.test(t)?$(t):F,e=r?r[0]:t.charAt(0);return t=r?zr(r,1).join(""):t.slice(1),e[n]()+t}}function Gr(n){return function(t){return h($u(Tu(t).replace(In,"")),n,"")}}function Hr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=io(n.prototype),t=n.apply(r,t);return bu(t)?t:r}}function Jr(n,t,e){function u(){for(var o=arguments.length,f=Hu(o),c=o,a=xe(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:C(f,a),o-=c.length,o<e?fe(n,t,Xr,u.placeholder,F,f,c,F,F,e-o):r(this&&this!==Zn&&this instanceof u?i:n,this,f);
}var i=Hr(n);return u}function Yr(n){return function(t,r,e){var u=ni(t);if(!pu(t)){var i=je(r,3);t=Lu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:F}}function Qr(n){return ge(function(t){var r=t.length,e=r,u=zn.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ei("Expected a function");if(u&&!o&&"wrapper"==be(i))var o=new zn([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=be(i),f="wrapper"==u?_o(i):F,o=f&&Be(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[be(f[0])].apply(o,f[3]):1==i.length&&Be(i)?o[u]():o.thru(i);
return function(){var n=arguments,e=n[0];if(o&&1==n.length&&af(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Xr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Hu(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=xe(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Cr(y,e,u,_)),i&&(y=Dr(y,i,o,_)),d-=x,_&&d<a)return j=C(y,j),fe(n,t,Xr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Mi(f.length,x),m=Mr(y);w--;){
var A=f[w];y[w]=Re(A,x)?m[A]:F}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==Zn&&this instanceof l&&(b=g||Hr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?F:Hr(n);return l}function ne(n,t){return function(r,e){return Ct(r,n,t(e))}}function te(n,t){return function(r,e){var u;if(r===F&&e===F)return t;if(r!==F&&(u=r),e!==F){if(u===F)return e;typeof r=="string"||typeof e=="string"?(r=jr(r),e=jr(e)):(r=xr(r),e=xr(e)),u=n(r,e)}return u}}function re(n){return ge(function(t){
return t=l(t,S(je())),lr(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function ee(n,t){t=t===F?" ":jr(t);var r=t.length;return 2>r?r?ar(t,n):t:(r=ar(t,Ri(n/T(t))),Bn.test(t)?zr($(r),0,n).join(""):r.slice(0,n))}function ue(n,t,e,u){function i(){for(var t=-1,c=arguments.length,a=-1,l=u.length,s=Hu(l+c),h=this&&this!==Zn&&this instanceof i?f:n;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++t];return r(h,o?e:this,s)}var o=1&t,f=Hr(n);return i}function ie(n){return function(t,r,e){
e&&typeof e!="number"&&ze(t,r,e)&&(r=e=F),t=Eu(t),r===F?(r=t,t=0):r=Eu(r),e=e===F?t<r?1:-1:Eu(e);var u=-1;r=Di(Ri((r-t)/(e||1)),0);for(var i=Hu(r);r--;)i[n?r:++u]=t,t+=e;return i}}function oe(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Iu(t),r=Iu(r)),n(t,r)}}function fe(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:F;o=l?F:o;var h=l?i:F;return i=l?F:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(F,u),Be(n)&&xo(r,u),r.placeholder=e,De(r,n,t)}function ce(n){
var t=Xu[n];return function(n,r){if(n=Iu(n),r=null==r?0:Mi(Ou(r),292)){var e=(zu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(zu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function ae(n){return function(t){var r=yo(t);return"[object Map]"==r?L(t):"[object Set]"==r?M(t):O(t,n(t))}}function le(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ei("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=F),o=o===F?o:Di(Ou(o),0),f=f===F?f:Ou(f),a-=u?u.length:0,64&t){
var l=e,s=u;e=u=F}var h=c?F:_o(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Cr(e,r,h[4]):r,i[4]=e?C(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Dr(e,r,h[6]):r,i[6]=e?C(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Mi(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===F?c?0:n.length:Di(i[9]-a,0),!f&&24&t&&(t&=-25),De((h?lo:xo)(t&&1!=t?8==t||16==t?Jr(n,t,f):32!=t&&33!=t||u.length?Xr.apply(F,i):ue(n,t,r,e):Vr(n,t,r),i),n,t)}function se(n,t,r,e){return n===F||hu(n,ii[r])&&!ci.call(e,r)?t:n}function he(n,t,r,e,u,i){return bu(n)&&bu(t)&&(i.set(t,n),nr(n,t,F,he,i),i.delete(t)),n}function pe(n){return wu(n)?F:n}function _e(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;var c=-1,a=true,l=2&r?new qn:F;
for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],h=t[c];if(e)var p=o?e(h,s,c,t,n,i):e(s,h,c,n,t,i);if(p!==F){if(p)continue;a=false;break}if(l){if(!_(t,function(n,t){if(!R(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==h&&!u(s,h,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function ve(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":if(n.byteLength!=t.byteLength||!i(new di(n),new di(t)))break;
return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return hu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=L;case"[object Set]":if(f||(f=D),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=_e(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(eo)return eo.call(n)==eo.call(t)}return false}function ge(n){return wo(Ce(n,F,Ve),n+"")}function de(n){
return Rt(n,Lu,vo)}function ye(n){return Rt(n,Uu,go)}function be(n){for(var t=n.name+"",r=Ji[t],e=ci.call(Ji,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function xe(n){return(ci.call(On,"placeholder")?On:n).placeholder}function je(){var n=On.iteratee||Pu,n=n===Pu?Gt:n;return arguments.length?n(arguments[0],arguments[1]):n}function we(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
}function me(n){for(var t=Lu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!bu(u)]}return t}function Ae(n,t){var r=null==n?F:n[t];return Zt(r)?r:F}function ke(n,t,r){t=Rr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=$e(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&yu(u)&&Re(o,u)&&(af(n)||cf(n)))}function Ee(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&ci.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Oe(n){
return typeof n.constructor!="function"||Le(n)?{}:io(bi(n))}function Se(r,e,u,i){var o=r.constructor;switch(e){case"[object ArrayBuffer]":return Br(r);case"[object Boolean]":case"[object Date]":return new o(+r);case"[object DataView]":return e=i?Br(r.buffer):r.buffer,new r.constructor(e,r.byteOffset,r.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
case"[object Uint16Array]":case"[object Uint32Array]":return Lr(r,i);case"[object Map]":return e=i?u(L(r),1):L(r),h(e,n,new r.constructor);case"[object Number]":case"[object String]":return new o(r);case"[object RegExp]":return e=new r.constructor(r.source,dn.exec(r)),e.lastIndex=r.lastIndex,e;case"[object Set]":return e=i?u(D(r),1):D(r),h(e,t,new r.constructor);case"[object Symbol]":return eo?ni(eo.call(r)):{}}}function Ie(n){return af(n)||cf(n)||!!(mi&&n&&n[mi])}function Re(n,t){return t=null==t?9007199254740991:t,
!!t&&(typeof n=="number"||wn.test(n))&&-1<n&&0==n%1&&n<t}function ze(n,t,r){if(!bu(r))return false;var e=typeof t;return!!("number"==e?pu(r)&&Re(t,r.length):"string"==e&&t in r)&&hu(r[t],n)}function We(n,t){if(af(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!Au(n))||(rn.test(n)||!tn.test(n)||null!=t&&n in ni(t))}function Be(n){var t=be(n),r=On[t];return typeof r=="function"&&t in Mn.prototype&&(n===r||(t=_o(r),!!t&&n===t[0]))}function Le(n){var t=n&&n.constructor;
return n===(typeof t=="function"&&t.prototype||ii)}function Ue(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==F||n in ni(r)))}}function Ce(n,t,e){return t=Di(t===F?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Di(u.length-t,0),f=Hu(o);++i<o;)f[i]=u[t+i];for(i=-1,o=Hu(t+1);++i<t;)o[i]=u[i];return o[t]=e(f),r(n,this,o)}}function De(n,t,r){var e=t+"";t=wo;var u,i=Ne;return u=(u=e.match(hn))?u[1].split(pn):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),
e=e.replace(sn,"{\n/* [wrapped with "+r+"] */\n")),t(n,e)}function Me(n){var t=0,r=0;return function(){var e=Ti(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(F,arguments)}}function Te(n,t){var r=-1,e=n.length,u=e-1;for(t=t===F?e:t;++r<t;){var e=cr(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function $e(n){if(typeof n=="string"||Au(n))return n;var t=n+"";return"0"==t&&1/n==-N?"-0":t}function Fe(n){if(null!=n){try{return fi.call(n)}catch(n){}return n+""}return"";
}function Ne(n,t){return u(Z,function(r){var e="_."+r[0];t&r[1]&&!c(n,e)&&n.push(e)}),n.sort()}function Pe(n){if(n instanceof Mn)return n.clone();var t=new zn(n.__wrapped__,n.__chain__);return t.__actions__=Mr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ze(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Ou(r),0>r&&(r=Di(e+r,0)),g(n,je(t,3),r)):-1}function qe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==F&&(u=Ou(r),u=0>r?Di(e+u,0):Mi(u,e-1)),
g(n,je(t,3),u,true)}function Ve(n){return(null==n?0:n.length)?kt(n,1):[]}function Ke(n){return n&&n.length?n[0]:F}function Ge(n){var t=null==n?0:n.length;return t?n[t-1]:F}function He(n,t){return n&&n.length&&t&&t.length?or(n,t):n}function Je(n){return null==n?n:Ni.call(n)}function Ye(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(_u(n))return t=Di(n.length,t),true}),E(t,function(t){return l(n,j(t))})}function Qe(n,t){if(!n||!n.length)return[];var e=Ye(n);return null==t?e:l(e,function(n){
return r(t,F,n)})}function Xe(n){return n=On(n),n.__chain__=true,n}function nu(n,t){return t(n)}function tu(){return this}function ru(n,t){return(af(n)?u:oo)(n,je(t,3))}function eu(n,t){return(af(n)?i:fo)(n,je(t,3))}function uu(n,t){return(af(n)?l:Yt)(n,je(t,3))}function iu(n,t,r){return t=r?F:t,t=n&&null==t?n.length:t,le(n,128,F,F,F,F,t)}function ou(n,t){var r;if(typeof t!="function")throw new ei("Expected a function");return n=Ou(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=F),
r}}function fu(n,t,r){return t=r?F:t,n=le(n,8,F,F,F,F,F,t),n.placeholder=fu.placeholder,n}function cu(n,t,r){return t=r?F:t,n=le(n,16,F,F,F,F,F,t),n.placeholder=cu.placeholder,n}function au(n,t,r){function e(t){var r=c,e=a;return c=a=F,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===F||r>=t||0>r||g&&n>=l}function i(){var n=Jo();if(u(n))return o(n);var r,e=jo;r=n-_,n=t-(n-p),r=g?Mi(n,l-r):n,h=e(i,r)}function o(n){return h=F,d&&c?e(n):(c=a=F,s)}function f(){var n=Jo(),r=u(n);if(c=arguments,
a=this,p=n,r){if(h===F)return _=n=p,h=jo(i,t),v?e(n):s;if(g)return h=jo(i,t),e(p)}return h===F&&(h=jo(i,t)),s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ei("Expected a function");return t=Iu(t)||0,bu(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Di(Iu(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==F&&ho(h),_=0,c=p=a=h=F},f.flush=function(){return h===F?s:o(Jo())},f}function lu(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),
r.cache=i.set(u,e)||i,e)}if(typeof n!="function"||null!=t&&typeof t!="function")throw new ei("Expected a function");return r.cache=new(lu.Cache||Pn),r}function su(n){if(typeof n!="function")throw new ei("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function hu(n,t){return n===t||n!==n&&t!==t}function pu(n){return null!=n&&yu(n.length)&&!gu(n);
}function _u(n){return xu(n)&&pu(n)}function vu(n){if(!xu(n))return false;var t=zt(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!wu(n)}function gu(n){return!!bu(n)&&(n=zt(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function du(n){return typeof n=="number"&&n==Ou(n)}function yu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function bu(n){var t=typeof n;return null!=n&&("object"==t||"function"==t);
}function xu(n){return null!=n&&typeof n=="object"}function ju(n){return typeof n=="number"||xu(n)&&"[object Number]"==zt(n)}function wu(n){return!(!xu(n)||"[object Object]"!=zt(n))&&(n=bi(n),null===n||(n=ci.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&fi.call(n)==hi))}function mu(n){return typeof n=="string"||!af(n)&&xu(n)&&"[object String]"==zt(n)}function Au(n){return typeof n=="symbol"||xu(n)&&"[object Symbol]"==zt(n)}function ku(n){if(!n)return[];if(pu(n))return mu(n)?$(n):Mr(n);
if(Ai&&n[Ai]){n=n[Ai]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}return t=yo(n),("[object Map]"==t?L:"[object Set]"==t?D:Du)(n)}function Eu(n){return n?(n=Iu(n),n===N||n===-N?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function Ou(n){n=Eu(n);var t=n%1;return n===n?t?n-t:n:0}function Su(n){return n?gt(Ou(n),0,4294967295):0}function Iu(n){if(typeof n=="number")return n;if(Au(n))return P;if(bu(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=bu(n)?n+"":n),typeof n!="string")return 0===n?n:+n;
n=n.replace(cn,"");var t=bn.test(n);return t||jn.test(n)?Fn(n.slice(2),t?2:8):yn.test(n)?P:+n}function Ru(n){return Tr(n,Uu(n))}function zu(n){return null==n?"":jr(n)}function Wu(n,t,r){return n=null==n?F:It(n,t),n===F?r:n}function Bu(n,t){return null!=n&&ke(n,t,Lt)}function Lu(n){return pu(n)?Gn(n):Ht(n)}function Uu(n){if(pu(n))n=Gn(n,true);else if(bu(n)){var t,r=Le(n),e=[];for(t in n)("constructor"!=t||!r&&ci.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in ni(n))t.push(r);n=t}return n}function Cu(n,t){
if(null==n)return{};var r=l(ye(n),function(n){return[n]});return t=je(t),ur(n,r,function(n,r){return t(n,r[0])})}function Du(n){return null==n?[]:I(n,Lu(n))}function Mu(n){return Nf(zu(n).toLowerCase())}function Tu(n){return(n=zu(n))&&n.replace(mn,rt).replace(Rn,"")}function $u(n,t,r){return n=zu(n),t=r?F:t,t===F?Ln.test(n)?n.match(Wn)||[]:n.match(_n)||[]:n.match(t)||[]}function Fu(n){return function(){return n}}function Nu(n){return n}function Pu(n){return Gt(typeof n=="function"?n:dt(n,1))}function Zu(n,t,r){
var e=Lu(t),i=St(t,e);null!=r||bu(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=St(t,Lu(t)));var o=!(bu(r)&&"chain"in r&&!r.chain),f=gu(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Mr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function qu(){}function Vu(n){return We(n)?j($e(n)):ir(n)}function Ku(){return[]}function Gu(){
return false}En=null==En?Zn:it.defaults(Zn.Object(),En,it.pick(Zn,Un));var Hu=En.Array,Ju=En.Date,Yu=En.Error,Qu=En.Function,Xu=En.Math,ni=En.Object,ti=En.RegExp,ri=En.String,ei=En.TypeError,ui=Hu.prototype,ii=ni.prototype,oi=En["__core-js_shared__"],fi=Qu.prototype.toString,ci=ii.hasOwnProperty,ai=0,li=function(){var n=/[^.]+$/.exec(oi&&oi.keys&&oi.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),si=ii.toString,hi=fi.call(ni),pi=Zn._,_i=ti("^"+fi.call(ci).replace(on,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vi=Kn?En.Buffer:F,gi=En.Symbol,di=En.Uint8Array,yi=vi?vi.f:F,bi=U(ni.getPrototypeOf,ni),xi=ni.create,ji=ii.propertyIsEnumerable,wi=ui.splice,mi=gi?gi.isConcatSpreadable:F,Ai=gi?gi.iterator:F,ki=gi?gi.toStringTag:F,Ei=function(){
try{var n=Ae(ni,"defineProperty");return n({},"",{}),n}catch(n){}}(),Oi=En.clearTimeout!==Zn.clearTimeout&&En.clearTimeout,Si=Ju&&Ju.now!==Zn.Date.now&&Ju.now,Ii=En.setTimeout!==Zn.setTimeout&&En.setTimeout,Ri=Xu.ceil,zi=Xu.floor,Wi=ni.getOwnPropertySymbols,Bi=vi?vi.isBuffer:F,Li=En.isFinite,Ui=ui.join,Ci=U(ni.keys,ni),Di=Xu.max,Mi=Xu.min,Ti=Ju.now,$i=En.parseInt,Fi=Xu.random,Ni=ui.reverse,Pi=Ae(En,"DataView"),Zi=Ae(En,"Map"),qi=Ae(En,"Promise"),Vi=Ae(En,"Set"),Ki=Ae(En,"WeakMap"),Gi=Ae(ni,"create"),Hi=Ki&&new Ki,Ji={},Yi=Fe(Pi),Qi=Fe(Zi),Xi=Fe(qi),no=Fe(Vi),to=Fe(Ki),ro=gi?gi.prototype:F,eo=ro?ro.valueOf:F,uo=ro?ro.toString:F,io=function(){
function n(){}return function(t){return bu(t)?xi?xi(t):(n.prototype=t,t=new n,n.prototype=F,t):{}}}();On.templateSettings={escape:Q,evaluate:X,interpolate:nn,variable:"",imports:{_:On}},On.prototype=Sn.prototype,On.prototype.constructor=On,zn.prototype=io(Sn.prototype),zn.prototype.constructor=zn,Mn.prototype=io(Sn.prototype),Mn.prototype.constructor=Mn,Tn.prototype.clear=function(){this.__data__=Gi?Gi(null):{},this.size=0},Tn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
this.size-=n?1:0,n},Tn.prototype.get=function(n){var t=this.__data__;return Gi?(n=t[n],"__lodash_hash_undefined__"===n?F:n):ci.call(t,n)?t[n]:F},Tn.prototype.has=function(n){var t=this.__data__;return Gi?t[n]!==F:ci.call(t,n)},Tn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Gi&&t===F?"__lodash_hash_undefined__":t,this},Nn.prototype.clear=function(){this.__data__=[],this.size=0},Nn.prototype.delete=function(n){var t=this.__data__;return n=lt(t,n),!(0>n)&&(n==t.length-1?t.pop():wi.call(t,n,1),
--this.size,true)},Nn.prototype.get=function(n){var t=this.__data__;return n=lt(t,n),0>n?F:t[n][1]},Nn.prototype.has=function(n){return-1<lt(this.__data__,n)},Nn.prototype.set=function(n,t){var r=this.__data__,e=lt(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Pn.prototype.clear=function(){this.size=0,this.__data__={hash:new Tn,map:new(Zi||Nn),string:new Tn}},Pn.prototype.delete=function(n){return n=we(this,n).delete(n),this.size-=n?1:0,n},Pn.prototype.get=function(n){return we(this,n).get(n);
},Pn.prototype.has=function(n){return we(this,n).has(n)},Pn.prototype.set=function(n,t){var r=we(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},qn.prototype.add=qn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},qn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.clear=function(){this.__data__=new Nn,this.size=0},Vn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Vn.prototype.get=function(n){
return this.__data__.get(n)},Vn.prototype.has=function(n){return this.__data__.has(n)},Vn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Nn){var e=r.__data__;if(!Zi||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Pn(e)}return r.set(n,t),this.size=r.size,this};var oo=Zr(Et),fo=Zr(Ot,true),co=qr(),ao=qr(true),lo=Hi?function(n,t){return Hi.set(n,t),n}:Nu,so=Ei?function(n,t){return Ei(n,"toString",{configurable:true,enumerable:false,value:Fu(t),writable:true})}:Nu,ho=Oi||function(n){
return Zn.clearTimeout(n)},po=Vi&&1/D(new Vi([,-0]))[1]==N?function(n){return new Vi(n)}:qu,_o=Hi?function(n){return Hi.get(n)}:qu,vo=Wi?function(n){return null==n?[]:(n=ni(n),f(Wi(n),function(t){return ji.call(n,t)}))}:Ku,go=Wi?function(n){for(var t=[];n;)s(t,vo(n)),n=bi(n);return t}:Ku,yo=zt;(Pi&&"[object DataView]"!=yo(new Pi(new ArrayBuffer(1)))||Zi&&"[object Map]"!=yo(new Zi)||qi&&"[object Promise]"!=yo(qi.resolve())||Vi&&"[object Set]"!=yo(new Vi)||Ki&&"[object WeakMap]"!=yo(new Ki))&&(yo=function(n){
var t=zt(n);if(n=(n="[object Object]"==t?n.constructor:F)?Fe(n):"")switch(n){case Yi:return"[object DataView]";case Qi:return"[object Map]";case Xi:return"[object Promise]";case no:return"[object Set]";case to:return"[object WeakMap]"}return t});var bo=oi?gu:Gu,xo=Me(lo),jo=Ii||function(n,t){return Zn.setTimeout(n,t)},wo=Me(so),mo=function(n){n=lu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return en.test(n)&&t.push(""),n.replace(un,function(n,r,e,u){
t.push(e?u.replace(vn,"$1"):r||n)}),t}),Ao=lr(function(n,t){return _u(n)?jt(n,kt(t,1,_u,true)):[]}),ko=lr(function(n,t){var r=Ge(t);return _u(r)&&(r=F),_u(n)?jt(n,kt(t,1,_u,true),je(r,2)):[]}),Eo=lr(function(n,t){var r=Ge(t);return _u(r)&&(r=F),_u(n)?jt(n,kt(t,1,_u,true),F,r):[]}),Oo=lr(function(n){var t=l(n,Sr);return t.length&&t[0]===n[0]?Ut(t):[]}),So=lr(function(n){var t=Ge(n),r=l(n,Sr);return t===Ge(r)?t=F:r.pop(),r.length&&r[0]===n[0]?Ut(r,je(t,2)):[]}),Io=lr(function(n){var t=Ge(n),r=l(n,Sr);return(t=typeof t=="function"?t:F)&&r.pop(),
r.length&&r[0]===n[0]?Ut(r,F,t):[]}),Ro=lr(He),zo=ge(function(n,t){var r=null==n?0:n.length,e=vt(n,t);return fr(n,l(t,function(n){return Re(n,r)?+n:n}).sort(Ur)),e}),Wo=lr(function(n){return wr(kt(n,1,_u,true))}),Bo=lr(function(n){var t=Ge(n);return _u(t)&&(t=F),wr(kt(n,1,_u,true),je(t,2))}),Lo=lr(function(n){var t=Ge(n),t=typeof t=="function"?t:F;return wr(kt(n,1,_u,true),F,t)}),Uo=lr(function(n,t){return _u(n)?jt(n,t):[]}),Co=lr(function(n){return Er(f(n,_u))}),Do=lr(function(n){var t=Ge(n);return _u(t)&&(t=F),
Er(f(n,_u),je(t,2))}),Mo=lr(function(n){var t=Ge(n),t=typeof t=="function"?t:F;return Er(f(n,_u),F,t)}),To=lr(Ye),$o=lr(function(n){var t=n.length,t=1<t?n[t-1]:F,t=typeof t=="function"?(n.pop(),t):F;return Qe(n,t)}),Fo=ge(function(n){function t(t){return vt(t,n)}var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Mn&&Re(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:nu,args:[t],thisArg:F}),new zn(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(F),
n})):this.thru(t)}),No=Nr(function(n,t,r){ci.call(n,r)?++n[r]:_t(n,r,1)}),Po=Yr(Ze),Zo=Yr(qe),qo=Nr(function(n,t,r){ci.call(n,r)?n[r].push(t):_t(n,r,[t])}),Vo=lr(function(n,t,e){var u=-1,i=typeof t=="function",o=pu(n)?Hu(n.length):[];return oo(n,function(n){o[++u]=i?r(t,n,e):Dt(n,t,e)}),o}),Ko=Nr(function(n,t,r){_t(n,r,t)}),Go=Nr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ho=lr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&ze(n,t[0],t[1])?t=[]:2<r&&ze(t[0],t[1],t[2])&&(t=[t[0]]),
rr(n,kt(t,1),[])}),Jo=Si||function(){return Zn.Date.now()},Yo=lr(function(n,t,r){var e=1;if(r.length)var u=C(r,xe(Yo)),e=32|e;return le(n,e,t,r,u)}),Qo=lr(function(n,t,r){var e=3;if(r.length)var u=C(r,xe(Qo)),e=32|e;return le(t,e,n,r,u)}),Xo=lr(function(n,t){return xt(n,1,t)}),nf=lr(function(n,t,r){return xt(n,Iu(t)||0,r)});lu.Cache=Pn;var tf=lr(function(n,t){t=1==t.length&&af(t[0])?l(t[0],S(je())):l(kt(t,1),S(je()));var e=t.length;return lr(function(u){for(var i=-1,o=Mi(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);
return r(n,this,u)})}),rf=lr(function(n,t){return le(n,32,F,t,C(t,xe(rf)))}),ef=lr(function(n,t){return le(n,64,F,t,C(t,xe(ef)))}),uf=ge(function(n,t){return le(n,256,F,F,F,t)}),of=oe(Wt),ff=oe(function(n,t){return n>=t}),cf=Mt(function(){return arguments}())?Mt:function(n){return xu(n)&&ci.call(n,"callee")&&!ji.call(n,"callee")},af=Hu.isArray,lf=Hn?S(Hn):Tt,sf=Bi||Gu,hf=Jn?S(Jn):$t,pf=Yn?S(Yn):Nt,_f=Qn?S(Qn):qt,vf=Xn?S(Xn):Vt,gf=nt?S(nt):Kt,df=oe(Jt),yf=oe(function(n,t){return n<=t}),bf=Pr(function(n,t){
if(Le(t)||pu(t))Tr(t,Lu(t),n);else for(var r in t)ci.call(t,r)&&at(n,r,t[r])}),xf=Pr(function(n,t){Tr(t,Uu(t),n)}),jf=Pr(function(n,t,r,e){Tr(t,Uu(t),n,e)}),wf=Pr(function(n,t,r,e){Tr(t,Lu(t),n,e)}),mf=ge(vt),Af=lr(function(n){return n.push(F,se),r(jf,F,n)}),kf=lr(function(n){return n.push(F,he),r(Rf,F,n)}),Ef=ne(function(n,t,r){n[t]=r},Fu(Nu)),Of=ne(function(n,t,r){ci.call(n,t)?n[t].push(r):n[t]=[r]},je),Sf=lr(Dt),If=Pr(function(n,t,r){nr(n,t,r)}),Rf=Pr(function(n,t,r,e){nr(n,t,r,e)}),zf=ge(function(n,t){
var r={};if(null==n)return r;var e=false;t=l(t,function(t){return t=Rr(t,n),e||(e=1<t.length),t}),Tr(n,ye(n),r),e&&(r=dt(r,7,pe));for(var u=t.length;u--;)mr(r,t[u]);return r}),Wf=ge(function(n,t){return null==n?{}:er(n,t)}),Bf=ae(Lu),Lf=ae(Uu),Uf=Gr(function(n,t,r){return t=t.toLowerCase(),n+(r?Mu(t):t)}),Cf=Gr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Df=Gr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Mf=Kr("toLowerCase"),Tf=Gr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase();
}),$f=Gr(function(n,t,r){return n+(r?" ":"")+Nf(t)}),Ff=Gr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Nf=Kr("toUpperCase"),Pf=lr(function(n,t){try{return r(n,F,t)}catch(n){return vu(n)?n:new Yu(n)}}),Zf=ge(function(n,t){return u(t,function(t){t=$e(t),_t(n,t,Yo(n[t],n))}),n}),qf=Qr(),Vf=Qr(true),Kf=lr(function(n,t){return function(r){return Dt(r,n,t)}}),Gf=lr(function(n,t){return function(r){return Dt(n,r,t)}}),Hf=re(l),Jf=re(o),Yf=re(_),Qf=ie(),Xf=ie(true),nc=te(function(n,t){return n+t},0),tc=ce("ceil"),rc=te(function(n,t){
return n/t},1),ec=ce("floor"),uc=te(function(n,t){return n*t},1),ic=ce("round"),oc=te(function(n,t){return n-t},0);return On.after=function(n,t){if(typeof t!="function")throw new ei("Expected a function");return n=Ou(n),function(){if(1>--n)return t.apply(this,arguments)}},On.ary=iu,On.assign=bf,On.assignIn=xf,On.assignInWith=jf,On.assignWith=wf,On.at=mf,On.before=ou,On.bind=Yo,On.bindAll=Zf,On.bindKey=Qo,On.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return af(n)?n:[n]},
On.chain=Xe,On.chunk=function(n,t,r){if(t=(r?ze(n,t,r):t===F)?1:Di(Ou(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Hu(Ri(r/t));e<r;)i[u++]=vr(n,e,e+=t);return i},On.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},On.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Hu(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return s(af(r)?Mr(r):[r],kt(t,1))},On.cond=function(n){var t=null==n?0:n.length,e=je();return n=t?l(n,function(n){
if("function"!=typeof n[1])throw new ei("Expected a function");return[e(n[0]),n[1]]}):[],lr(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})},On.conforms=function(n){return yt(dt(n,1))},On.constant=Fu,On.countBy=No,On.create=function(n,t){var r=io(n);return null==t?r:ht(r,t)},On.curry=fu,On.curryRight=cu,On.debounce=au,On.defaults=Af,On.defaultsDeep=kf,On.defer=Xo,On.delay=nf,On.difference=Ao,On.differenceBy=ko,On.differenceWith=Eo,On.drop=function(n,t,r){var e=null==n?0:n.length;
return e?(t=r||t===F?1:Ou(t),vr(n,0>t?0:t,e)):[]},On.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Ou(t),t=e-t,vr(n,0,0>t?0:t)):[]},On.dropRightWhile=function(n,t){return n&&n.length?Ar(n,je(t,3),true,true):[]},On.dropWhile=function(n,t){return n&&n.length?Ar(n,je(t,3),true):[]},On.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&ze(n,t,r)&&(r=0,e=u),u=n.length,r=Ou(r),0>r&&(r=-r>u?0:u+r),e=e===F||e>u?u:Ou(e),0>e&&(e+=u),e=r>e?0:Su(e);r<e;)n[r++]=t;
return n},On.filter=function(n,t){return(af(n)?f:At)(n,je(t,3))},On.flatMap=function(n,t){return kt(uu(n,t),1)},On.flatMapDeep=function(n,t){return kt(uu(n,t),N)},On.flatMapDepth=function(n,t,r){return r=r===F?1:Ou(r),kt(uu(n,t),r)},On.flatten=Ve,On.flattenDeep=function(n){return(null==n?0:n.length)?kt(n,N):[]},On.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===F?1:Ou(t),kt(n,t)):[]},On.flip=function(n){return le(n,512)},On.flow=qf,On.flowRight=Vf,On.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){
var u=n[t];e[u[0]]=u[1]}return e},On.functions=function(n){return null==n?[]:St(n,Lu(n))},On.functionsIn=function(n){return null==n?[]:St(n,Uu(n))},On.groupBy=qo,On.initial=function(n){return(null==n?0:n.length)?vr(n,0,-1):[]},On.intersection=Oo,On.intersectionBy=So,On.intersectionWith=Io,On.invert=Ef,On.invertBy=Of,On.invokeMap=Vo,On.iteratee=Pu,On.keyBy=Ko,On.keys=Lu,On.keysIn=Uu,On.map=uu,On.mapKeys=function(n,t){var r={};return t=je(t,3),Et(n,function(n,e,u){_t(r,t(n,e,u),n)}),r},On.mapValues=function(n,t){
var r={};return t=je(t,3),Et(n,function(n,e,u){_t(r,e,t(n,e,u))}),r},On.matches=function(n){return Qt(dt(n,1))},On.matchesProperty=function(n,t){return Xt(n,dt(t,1))},On.memoize=lu,On.merge=If,On.mergeWith=Rf,On.method=Kf,On.methodOf=Gf,On.mixin=Zu,On.negate=su,On.nthArg=function(n){return n=Ou(n),lr(function(t){return tr(t,n)})},On.omit=zf,On.omitBy=function(n,t){return Cu(n,su(je(t)))},On.once=function(n){return ou(2,n)},On.orderBy=function(n,t,r,e){return null==n?[]:(af(t)||(t=null==t?[]:[t]),
r=e?F:r,af(r)||(r=null==r?[]:[r]),rr(n,t,r))},On.over=Hf,On.overArgs=tf,On.overEvery=Jf,On.overSome=Yf,On.partial=rf,On.partialRight=ef,On.partition=Go,On.pick=Wf,On.pickBy=Cu,On.property=Vu,On.propertyOf=function(n){return function(t){return null==n?F:It(n,t)}},On.pull=Ro,On.pullAll=He,On.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?or(n,t,je(r,2)):n},On.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?or(n,t,F,r):n},On.pullAt=zo,On.range=Qf,On.rangeRight=Xf,On.rearg=uf,On.reject=function(n,t){
return(af(n)?f:At)(n,su(je(t,3)))},On.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=je(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return fr(n,u),r},On.rest=function(n,t){if(typeof n!="function")throw new ei("Expected a function");return t=t===F?t:Ou(t),lr(n,t)},On.reverse=Je,On.sampleSize=function(n,t,r){return t=(r?ze(n,t,r):t===F)?1:Ou(t),(af(n)?ot:hr)(n,t)},On.set=function(n,t,r){return null==n?n:pr(n,t,r)},On.setWith=function(n,t,r,e){return e=typeof e=="function"?e:F,
null==n?n:pr(n,t,r,e)},On.shuffle=function(n){return(af(n)?ft:_r)(n)},On.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&ze(n,t,r)?(t=0,r=e):(t=null==t?0:Ou(t),r=r===F?e:Ou(r)),vr(n,t,r)):[]},On.sortBy=Ho,On.sortedUniq=function(n){return n&&n.length?br(n):[]},On.sortedUniqBy=function(n,t){return n&&n.length?br(n,je(t,2)):[]},On.split=function(n,t,r){return r&&typeof r!="number"&&ze(n,t,r)&&(t=r=F),r=r===F?4294967295:r>>>0,r?(n=zu(n))&&(typeof t=="string"||null!=t&&!_f(t))&&(t=jr(t),
!t&&Bn.test(n))?zr($(n),0,r):n.split(t,r):[]},On.spread=function(n,t){if(typeof n!="function")throw new ei("Expected a function");return t=null==t?0:Di(Ou(t),0),lr(function(e){var u=e[t];return e=zr(e,0,t),u&&s(e,u),r(n,this,e)})},On.tail=function(n){var t=null==n?0:n.length;return t?vr(n,1,t):[]},On.take=function(n,t,r){return n&&n.length?(t=r||t===F?1:Ou(t),vr(n,0,0>t?0:t)):[]},On.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===F?1:Ou(t),t=e-t,vr(n,0>t?0:t,e)):[]},On.takeRightWhile=function(n,t){
return n&&n.length?Ar(n,je(t,3),false,true):[]},On.takeWhile=function(n,t){return n&&n.length?Ar(n,je(t,3)):[]},On.tap=function(n,t){return t(n),n},On.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ei("Expected a function");return bu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),au(n,t,{leading:e,maxWait:t,trailing:u})},On.thru=nu,On.toArray=ku,On.toPairs=Bf,On.toPairsIn=Lf,On.toPath=function(n){return af(n)?l(n,$e):Au(n)?[n]:Mr(mo(zu(n)))},On.toPlainObject=Ru,
On.transform=function(n,t,r){var e=af(n),i=e||sf(n)||gf(n);if(t=je(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:bu(n)&&gu(o)?io(bi(n)):{}}return(i?u:Et)(n,function(n,e,u){return t(r,n,e,u)}),r},On.unary=function(n){return iu(n,1)},On.union=Wo,On.unionBy=Bo,On.unionWith=Lo,On.uniq=function(n){return n&&n.length?wr(n):[]},On.uniqBy=function(n,t){return n&&n.length?wr(n,je(t,2)):[]},On.uniqWith=function(n,t){return t=typeof t=="function"?t:F,n&&n.length?wr(n,F,t):[]},On.unset=function(n,t){return null==n||mr(n,t);
},On.unzip=Ye,On.unzipWith=Qe,On.update=function(n,t,r){return null==n?n:pr(n,t,Ir(r)(It(n,t)),void 0)},On.updateWith=function(n,t,r,e){return e=typeof e=="function"?e:F,null!=n&&(n=pr(n,t,Ir(r)(It(n,t)),e)),n},On.values=Du,On.valuesIn=function(n){return null==n?[]:I(n,Uu(n))},On.without=Uo,On.words=$u,On.wrap=function(n,t){return rf(Ir(t),n)},On.xor=Co,On.xorBy=Do,On.xorWith=Mo,On.zip=To,On.zipObject=function(n,t){return Or(n||[],t||[],at)},On.zipObjectDeep=function(n,t){return Or(n||[],t||[],pr);
},On.zipWith=$o,On.entries=Bf,On.entriesIn=Lf,On.extend=xf,On.extendWith=jf,Zu(On,On),On.add=nc,On.attempt=Pf,On.camelCase=Uf,On.capitalize=Mu,On.ceil=tc,On.clamp=function(n,t,r){return r===F&&(r=t,t=F),r!==F&&(r=Iu(r),r=r===r?r:0),t!==F&&(t=Iu(t),t=t===t?t:0),gt(Iu(n),t,r)},On.clone=function(n){return dt(n,4)},On.cloneDeep=function(n){return dt(n,5)},On.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:F,dt(n,5,t)},On.cloneWith=function(n,t){return t=typeof t=="function"?t:F,dt(n,4,t)},
On.conformsTo=function(n,t){return null==t||bt(n,t,Lu(t))},On.deburr=Tu,On.defaultTo=function(n,t){return null==n||n!==n?t:n},On.divide=rc,On.endsWith=function(n,t,r){n=zu(n),t=jr(t);var e=n.length,e=r=r===F?e:gt(Ou(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},On.eq=hu,On.escape=function(n){return(n=zu(n))&&Y.test(n)?n.replace(H,et):n},On.escapeRegExp=function(n){return(n=zu(n))&&fn.test(n)?n.replace(on,"\\$&"):n},On.every=function(n,t,r){var e=af(n)?o:wt;return r&&ze(n,t,r)&&(t=F),e(n,je(t,3));
},On.find=Po,On.findIndex=Ze,On.findKey=function(n,t){return v(n,je(t,3),Et)},On.findLast=Zo,On.findLastIndex=qe,On.findLastKey=function(n,t){return v(n,je(t,3),Ot)},On.floor=ec,On.forEach=ru,On.forEachRight=eu,On.forIn=function(n,t){return null==n?n:co(n,je(t,3),Uu)},On.forInRight=function(n,t){return null==n?n:ao(n,je(t,3),Uu)},On.forOwn=function(n,t){return n&&Et(n,je(t,3))},On.forOwnRight=function(n,t){return n&&Ot(n,je(t,3))},On.get=Wu,On.gt=of,On.gte=ff,On.has=function(n,t){return null!=n&&ke(n,t,Bt);
},On.hasIn=Bu,On.head=Ke,On.identity=Nu,On.includes=function(n,t,r,e){return n=pu(n)?n:Du(n),r=r&&!e?Ou(r):0,e=n.length,0>r&&(r=Di(e+r,0)),mu(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<d(n,t,r)},On.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Ou(r),0>r&&(r=Di(e+r,0)),d(n,t,r)):-1},On.inRange=function(n,t,r){return t=Eu(t),r===F?(r=t,t=0):r=Eu(r),n=Iu(n),n>=Mi(t,r)&&n<Di(t,r)},On.invoke=Sf,On.isArguments=cf,On.isArray=af,On.isArrayBuffer=lf,On.isArrayLike=pu,On.isArrayLikeObject=_u,
On.isBoolean=function(n){return true===n||false===n||xu(n)&&"[object Boolean]"==zt(n)},On.isBuffer=sf,On.isDate=hf,On.isElement=function(n){return xu(n)&&1===n.nodeType&&!wu(n)},On.isEmpty=function(n){if(null==n)return true;if(pu(n)&&(af(n)||typeof n=="string"||typeof n.splice=="function"||sf(n)||gf(n)||cf(n)))return!n.length;var t=yo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(Le(n))return!Ht(n).length;for(var r in n)if(ci.call(n,r))return false;return true},On.isEqual=function(n,t){return Ft(n,t);
},On.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:F)?r(n,t):F;return e===F?Ft(n,t,F,r):!!e},On.isError=vu,On.isFinite=function(n){return typeof n=="number"&&Li(n)},On.isFunction=gu,On.isInteger=du,On.isLength=yu,On.isMap=pf,On.isMatch=function(n,t){return n===t||Pt(n,t,me(t))},On.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:F,Pt(n,t,me(t),r)},On.isNaN=function(n){return ju(n)&&n!=+n},On.isNative=function(n){if(bo(n))throw new Yu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
return Zt(n)},On.isNil=function(n){return null==n},On.isNull=function(n){return null===n},On.isNumber=ju,On.isObject=bu,On.isObjectLike=xu,On.isPlainObject=wu,On.isRegExp=_f,On.isSafeInteger=function(n){return du(n)&&-9007199254740991<=n&&9007199254740991>=n},On.isSet=vf,On.isString=mu,On.isSymbol=Au,On.isTypedArray=gf,On.isUndefined=function(n){return n===F},On.isWeakMap=function(n){return xu(n)&&"[object WeakMap]"==yo(n)},On.isWeakSet=function(n){return xu(n)&&"[object WeakSet]"==zt(n)},On.join=function(n,t){
return null==n?"":Ui.call(n,t)},On.kebabCase=Cf,On.last=Ge,On.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==F&&(u=Ou(r),u=0>u?Di(e+u,0):Mi(u,e-1)),t===t){for(r=u+1;r--&&n[r]!==t;);n=r}else n=g(n,b,u,true);return n},On.lowerCase=Df,On.lowerFirst=Mf,On.lt=df,On.lte=yf,On.max=function(n){return n&&n.length?mt(n,Nu,Wt):F},On.maxBy=function(n,t){return n&&n.length?mt(n,je(t,2),Wt):F},On.mean=function(n){return x(n,Nu)},On.meanBy=function(n,t){return x(n,je(t,2))},On.min=function(n){
return n&&n.length?mt(n,Nu,Jt):F},On.minBy=function(n,t){return n&&n.length?mt(n,je(t,2),Jt):F},On.stubArray=Ku,On.stubFalse=Gu,On.stubObject=function(){return{}},On.stubString=function(){return""},On.stubTrue=function(){return true},On.multiply=uc,On.nth=function(n,t){return n&&n.length?tr(n,Ou(t)):F},On.noConflict=function(){return Zn._===this&&(Zn._=pi),this},On.noop=qu,On.now=Jo,On.pad=function(n,t,r){n=zu(n);var e=(t=Ou(t))?T(n):0;return!t||e>=t?n:(t=(t-e)/2,ee(zi(t),r)+n+ee(Ri(t),r))},On.padEnd=function(n,t,r){
n=zu(n);var e=(t=Ou(t))?T(n):0;return t&&e<t?n+ee(t-e,r):n},On.padStart=function(n,t,r){n=zu(n);var e=(t=Ou(t))?T(n):0;return t&&e<t?ee(t-e,r)+n:n},On.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),$i(zu(n).replace(an,""),t||0)},On.random=function(n,t,r){if(r&&typeof r!="boolean"&&ze(n,t,r)&&(t=r=F),r===F&&(typeof t=="boolean"?(r=t,t=F):typeof n=="boolean"&&(r=n,n=F)),n===F&&t===F?(n=0,t=1):(n=Eu(n),t===F?(t=n,n=0):t=Eu(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Fi(),Mi(n+r*(t-n+$n("1e-"+((r+"").length-1))),t)):cr(n,t);
},On.reduce=function(n,t,r){var e=af(n)?h:m,u=3>arguments.length;return e(n,je(t,4),r,u,oo)},On.reduceRight=function(n,t,r){var e=af(n)?p:m,u=3>arguments.length;return e(n,je(t,4),r,u,fo)},On.repeat=function(n,t,r){return t=(r?ze(n,t,r):t===F)?1:Ou(t),ar(zu(n),t)},On.replace=function(){var n=arguments,t=zu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},On.result=function(n,t,r){t=Rr(t,n);var e=-1,u=t.length;for(u||(u=1,n=F);++e<u;){var i=null==n?F:n[$e(t[e])];i===F&&(e=u,i=r),n=gu(i)?i.call(n):i;
}return n},On.round=ic,On.runInContext=w,On.sample=function(n){return(af(n)?tt:sr)(n)},On.size=function(n){if(null==n)return 0;if(pu(n))return mu(n)?T(n):n.length;var t=yo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Ht(n).length},On.snakeCase=Tf,On.some=function(n,t,r){var e=af(n)?_:gr;return r&&ze(n,t,r)&&(t=F),e(n,je(t,3))},On.sortedIndex=function(n,t){return dr(n,t)},On.sortedIndexBy=function(n,t,r){return yr(n,t,je(r,2))},On.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){
var e=dr(n,t);if(e<r&&hu(n[e],t))return e}return-1},On.sortedLastIndex=function(n,t){return dr(n,t,true)},On.sortedLastIndexBy=function(n,t,r){return yr(n,t,je(r,2),true)},On.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=dr(n,t,true)-1;if(hu(n[r],t))return r}return-1},On.startCase=$f,On.startsWith=function(n,t,r){return n=zu(n),r=null==r?0:gt(Ou(r),0,n.length),t=jr(t),n.slice(r,r+t.length)==t},On.subtract=oc,On.sum=function(n){return n&&n.length?k(n,Nu):0},On.sumBy=function(n,t){return n&&n.length?k(n,je(t,2)):0;
},On.template=function(n,t,r){var e=On.templateSettings;r&&ze(n,t,r)&&(t=F),n=zu(n),t=jf({},t,e,se),r=jf({},t.imports,e.imports,se);var u,i,o=Lu(r),f=I(r,o),c=0;r=t.interpolate||An;var a="__p+='";r=ti((t.escape||An).source+"|"+r.source+"|"+(r===nn?gn:An).source+"|"+(t.evaluate||An).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(kn,B),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),
e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(q,""):a).replace(V,"$1").replace(K,"$1;"),a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Pf(function(){return Qu(o,l+"return "+a).apply(F,f)}),t.source=a,vu(t))throw t;return t},On.times=function(n,t){if(n=Ou(n),1>n||9007199254740991<n)return[];
var r=4294967295,e=Mi(n,4294967295);for(t=je(t),n-=4294967295,e=E(e,t);++r<n;)t(r);return e},On.toFinite=Eu,On.toInteger=Ou,On.toLength=Su,On.toLower=function(n){return zu(n).toLowerCase()},On.toNumber=Iu,On.toSafeInteger=function(n){return n?gt(Ou(n),-9007199254740991,9007199254740991):0===n?n:0},On.toString=zu,On.toUpper=function(n){return zu(n).toUpperCase()},On.trim=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(cn,""):n&&(t=jr(t))?(n=$(n),r=$(t),t=z(n,r),r=W(n,r)+1,zr(n,t,r).join("")):n;
},On.trimEnd=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(ln,""):n&&(t=jr(t))?(n=$(n),t=W(n,$(t))+1,zr(n,0,t).join("")):n},On.trimStart=function(n,t,r){return(n=zu(n))&&(r||t===F)?n.replace(an,""):n&&(t=jr(t))?(n=$(n),t=z(n,$(t)),zr(n,t).join("")):n},On.truncate=function(n,t){var r=30,e="...";if(bu(t))var u="separator"in t?t.separator:u,r="length"in t?Ou(t.length):r,e="omission"in t?jr(t.omission):e;n=zu(n);var i=n.length;if(Bn.test(n))var o=$(n),i=o.length;if(r>=i)return n;if(i=r-T(e),1>i)return e;
if(r=o?zr(o,0,i).join(""):n.slice(0,i),u===F)return r+e;if(o&&(i+=r.length-i),_f(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=ti(u.source,zu(dn.exec(u))+"g")),u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===F?i:c)}}else n.indexOf(jr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},On.unescape=function(n){return(n=zu(n))&&J.test(n)?n.replace(G,ut):n},On.uniqueId=function(n){var t=++ai;return zu(n)+t},On.upperCase=Ff,On.upperFirst=Nf,On.each=ru,On.eachRight=eu,On.first=Ke,
Zu(On,function(){var n={};return Et(On,function(t,r){ci.call(On.prototype,r)||(n[r]=t)}),n}(),{chain:false}),On.VERSION="4.17.4",u("bind bindKey curry curryRight partial partialRight".split(" "),function(n){On[n].placeholder=On}),u(["drop","take"],function(n,t){Mn.prototype[n]=function(r){r=r===F?1:Di(Ou(r),0);var e=this.__filtered__&&!t?new Mn(this):this.clone();return e.__filtered__?e.__takeCount__=Mi(r,e.__takeCount__):e.__views__.push({size:Mi(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Mn.prototype[n+"Right"]=function(t){
return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Mn.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:je(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Mn.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Mn.prototype[n]=function(){return this.__filtered__?new Mn(this):this[r](1);
}}),Mn.prototype.compact=function(){return this.filter(Nu)},Mn.prototype.find=function(n){return this.filter(n).head()},Mn.prototype.findLast=function(n){return this.reverse().find(n)},Mn.prototype.invokeMap=lr(function(n,t){return typeof n=="function"?new Mn(this):this.map(function(r){return Dt(r,n,t)})}),Mn.prototype.reject=function(n){return this.filter(su(je(n)))},Mn.prototype.slice=function(n,t){n=Ou(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Mn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),
t!==F&&(t=Ou(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Mn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Mn.prototype.toArray=function(){return this.take(4294967295)},Et(Mn.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=On[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(On.prototype[t]=function(){function t(n){return n=u.apply(On,s([n],f)),e&&h?n[0]:n}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Mn,a=f[0],l=c||af(o);
l&&r&&typeof a=="function"&&1!=a.length&&(c=l=false);var h=this.__chain__,p=!!this.__actions__.length,a=i&&!h,c=c&&!p;return!i&&l?(o=c?o:new Mn(this),o=n.apply(o,f),o.__actions__.push({func:nu,args:[t],thisArg:F}),new zn(o,h)):a&&c?n.apply(this,f):(o=this.thru(t),a?e?o.value()[0]:o.value():o)})}),u("pop push shift sort splice unshift".split(" "),function(n){var t=ui[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);On.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){
var u=this.value();return t.apply(af(u)?u:[],n)}return this[r](function(r){return t.apply(af(r)?r:[],n)})}}),Et(Mn.prototype,function(n,t){var r=On[t];if(r){var e=r.name+"";(Ji[e]||(Ji[e]=[])).push({name:t,func:r})}}),Ji[Xr(F,2).name]=[{name:"wrapper",func:F}],Mn.prototype.clone=function(){var n=new Mn(this.__wrapped__);return n.__actions__=Mr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Mr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Mr(this.__views__),
n},Mn.prototype.reverse=function(){if(this.__filtered__){var n=new Mn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Mn.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=af(t),u=0>r,i=e?t.length:0;n=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Mi(n,f+s);break;case"takeRight":f=Di(f,n-s)}}if(n={start:f,end:n},o=n.start,f=n.end,n=f-o,
o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Mi(n,this.__takeCount__),!e||!u&&i==n&&l==n)return kr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},On.prototype.at=Fo,On.prototype.chain=function(){return Xe(this)},On.prototype.commit=function(){return new zn(this.value(),this.__chain__)},On.prototype.next=function(){this.__values__===F&&(this.__values__=ku(this.value()));
var n=this.__index__>=this.__values__.length;return{done:n,value:n?F:this.__values__[this.__index__++]}},On.prototype.plant=function(n){for(var t,r=this;r instanceof Sn;){var e=Pe(r);e.__index__=0,e.__values__=F,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},On.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Mn?(this.__actions__.length&&(n=new Mn(this)),n=n.reverse(),n.__actions__.push({func:nu,args:[Je],thisArg:F}),new zn(n,this.__chain__)):this.thru(Je);
},On.prototype.toJSON=On.prototype.valueOf=On.prototype.value=function(){return kr(this.__wrapped__,this.__actions__)},On.prototype.first=On.prototype.head,Ai&&(On.prototype[Ai]=tu),On}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=it, define(function(){return it})):Vn?((Vn.exports=it)._=it,qn._=it):Zn._=it}).call(this);
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define("hljs",[],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var n,t,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return w(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;r>n;n++)if(w(i[n])||a(i[n]))return i[n]}function o(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function u(e){l+="</"+t(e)+">"}function c(e){("start"==e.event?o:u)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=i();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(o)}else"start"==g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return l+n(a.substr(s))}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var u={},c=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?c("keyword",a.k):Object.keys(a.k).forEach(function(e){c(e,a.k[e])}),a.k=u}a.lR=t(a.l||/\b\w+\b/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,t,a,i){function o(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function h(e,n,t,r){var a=r?"":E.classPrefix,i='<span class="'+a,o=t?"":"</span>";return i+=e+'">',i+n+o}function p(){if(!L.k)return n(M);var e="",t=0;L.lR.lastIndex=0;for(var r=L.lR.exec(M);r;){e+=n(M.substr(t,r.index-t));var a=g(L,r);a?(B+=a[1],e+=h(a[0],n(r[0]))):e+=n(r[0]),t=L.lR.lastIndex,r=L.lR.exec(M)}return e+n(M.substr(t))}function d(){var e="string"==typeof L.sL;if(e&&!x[L.sL])return n(M);var t=e?l(L.sL,M,!0,y[L.sL]):f(M,L.sL.length?L.sL:void 0);return L.r>0&&(B+=t.r),e&&(y[L.sL]=t.top),h(t.language,t.value,!1,!0)}function b(){return void 0!==L.sL?d():p()}function v(e,t){var r=e.cN?h(e.cN,"",!0):"";e.rB?(k+=r,M=""):e.eB?(k+=n(t)+r,M=""):(k+=r,M=t),L=Object.create(e,{parent:{value:L}})}function m(e,t){if(M+=e,void 0===t)return k+=b(),0;var r=o(t,L);if(r)return k+=b(),v(r,t),r.rB?0:t.length;var a=u(L,t);if(a){var i=L;i.rE||i.eE||(M+=t),k+=b();do L.cN&&(k+="</span>"),B+=L.r,L=L.parent;while(L!=a.parent);return i.eE&&(k+=n(t)),M="",a.starts&&v(a.starts,""),i.rE?0:t.length}if(c(t,L))throw new Error('Illegal lexeme "'+t+'" for mode "'+(L.cN||"<unnamed>")+'"');return M+=t,t.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var R,L=i||N,y={},k="";for(R=L;R!=N;R=R.parent)R.cN&&(k=h(R.cN,"",!0)+k);var M="",B=0;try{for(var C,j,I=0;;){if(L.t.lastIndex=I,C=L.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}for(m(t.substr(I)),R=L;R.parent;R=R.parent)R.cN&&(k+="</span>");return{r:B,value:k,language:e,top:L}}catch(O){if(-1!=O.message.indexOf("Illegal"))return{r:0,value:n(t)};throw O}}function f(e,t){t=t||E.languages||Object.keys(x);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(w(n)){var t=l(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function g(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\n/g,"<br>")),e}function h(e,n,t){var r=n?R[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function p(e){var n=i(e);if(!a(n)){var t;E.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?l(n,r,!0):f(r),s=u(t);if(s.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=c(s,u(p),r)}o.value=g(o.value),e.innerHTML=o.value,e.className=h(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function m(n,t){var r=x[n]=t(e);r.aliases&&r.aliases.forEach(function(e){R[e]=n})}function N(){return Object.keys(x)}function w(e){return e=(e||"").toLowerCase(),x[e]||x[R[e]]}var E={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},x={},R={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=g,e.highlightBlock=p,e.configure=d,e.initHighlighting=b,e.initHighlightingOnLoad=v,e.registerLanguage=m,e.listLanguages=N,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",a={cN:"function",b:c+"\\(",rB:!0,eE:!0,e:"\\("},r={cN:"rule",b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{cN:"value",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"id",b:/\#[A-Za-z0-9_-]+/},{cN:"class",b:/\.[A-Za-z0-9_-]+/},{cN:"attr_selector",b:/\[/,e:/\]/,i:"$"},{cN:"pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:c,r:0},{cN:"rules",b:"{",e:"}",i:/\S/,c:[e.CBCM,r]}]}});hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}});hljs.registerLanguage("php",function(e){var c={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},a={cN:"preprocessor",b:/<\?(php)?|\?>/},i={cN:"string",c:[e.BE,a],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},t={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"},a]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},a,c,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,i,t]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},i,t]}});hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"pi",r:10,b:/^\s*['"]use (strict|asm)['"]/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\s*[);\]]/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:[e.CLCM,e.CBCM]}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{bK:"import",e:"[;$]",k:"import from as",c:[e.ASM,e.QSM]},{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]}],i:/#/}});hljs.registerLanguage("sql",function(e){var t=e.C("--","$");return{cI:!0,i:/[<>{}*]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",e:/;/,eW:!0,k:{keyword:"abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}});
/*!
 * clipboard.js v1.6.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return i(n?n:e)},s,s.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){function o(e,t){for(;e&&e.nodeType!==i;){if(e.matches(t))return e;e=e.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=o},{}],2:[function(e,t,n){function o(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}var r=e("./closest");t.exports=o},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function o(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return i(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=o},{"./is":3,delegate:2}],5:[function(e,t,n){function o(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}t.exports=o},{}],6:[function(e,t,n){function o(){}o.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function o(){i.off(e,o),t.apply(n,arguments)}var i=this;return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var r=0,a=o.length;r<a;r++)o[r].fn!==t&&o[r].fn._!==t&&i.push(o[r]);return i.length?n[e]=i:delete n[e],this}},t.exports=o},{}],7:[function(t,n,o){!function(i,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof o)r(n,t("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(){function e(t){o(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,o){!function(i,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(e,t,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var u=i(t),s=i(n),f=i(o),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=function(e){function t(e,n){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof t?[t]:t,o=!!document.queryCommandSupported;return n.forEach(function(e){o=o&&!!document.queryCommandSupported(e)}),o}}]),t}(s.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
/*!
 Material Components for the web
 Copyright (c) 2017 Google Inc.
 License: Apache-2.0
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mdc"] = factory();
	else
		root["mdc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    return _possibleConstructorReturn(this, (MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).apply(this, arguments));
  }

  _createClass(MDCRipple, [{
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isUnbounded = _ref.isUnbounded,
          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = isUnbounded;
      }
      return ripple;
    }
  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getMatchesProperty */])(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* supportsCssVariables */])(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }
  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }
  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }
  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }
  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["remapEvent"] = remapEvent;
/* harmony export (immutable) */ __webpack_exports__["getTransformPropertyName"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["supportsCssCustomProperties"] = supportsCssCustomProperties;
/* harmony export (immutable) */ __webpack_exports__["applyPassive"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["saveElementTabState"] = saveElementTabState;
/* harmony export (immutable) */ __webpack_exports__["restoreElementTabState"] = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TAB_DATA = 'data-mdc-tabindex';
var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

var storedTransformPropertyName_ = void 0;
var supportsPassive_ = void 0;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName) {
  var globalObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
      case 'touchstart':
        return 'pointerdown';
      case 'touchmove':
        return 'pointermove';
      case 'touchend':
        return 'pointerup';
      default:
        return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : '-webkit-transform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function supportsCssVariables(windowObj) {
  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSimpleMenu", function() { return __WEBPACK_IMPORTED_MODULE_0__simple__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSimpleMenuFoundation", function() { return __WEBPACK_IMPORTED_MODULE_0__simple__["b"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCorrectEventName;
/* unused harmony export getCorrectPropertyName */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string
 * }}
 */
var VendorPropertyMapType = void 0;

/** @const {Object<string, !VendorPropertyMapType>} */
var eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};

/** @const {Object<string, !VendorPropertyMapType>} */
var cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj['document']['createElement']('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["b"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["c"] = bezierProgress;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var storedTransformPropertyName_ = void 0;

// Returns the name of the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Clamps a value between the minimum and the maximum, returning the clamped value.
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(max, Math.max(min, value));
}

// Returns the easing value to apply at time t, for a given cubic bezier curve.
// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
// Paramters are as follows:
// - time: The current time in the animation, scaled between 0 and 1.
// - x1: The x value of control point P1.
// - y1: The y value of control point P1.
// - x2: The x value of control point P2.
// - y2: The y value of control point P2.
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

// Compute a single coordinate at a position point between 0 and 1.
// c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  var ic0 = t * c1;
  var ic1 = c1 + t * (c2 - c1);
  var ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

// Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
function solvePositionFromXValue_(xVal, x1, x2) {
  var EPSILON = 1e-6;
  var MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  var t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  var tMin = 0;
  var tMax = 1;
  var value = 0;
  for (var i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mdcAutoInit;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var registry = Object.create(null);

var CONSOLE_WARN = console.warn.bind(console);

/**
 * Auto-initializes all mdc components on a page.
 */
function mdcAutoInit() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CONSOLE_WARN;

  var nodes = root.querySelectorAll('[data-mdc-auto-init]');
  for (var i = 0, node; node = nodes[i]; i++) {
    var ctorName = node.dataset.mdcAutoInit;
    if (!ctorName) {
      throw new Error('(mdc-auto-init) Constructor name must be given.');
    }

    var Ctor = registry[ctorName];
    if (typeof Ctor !== 'function') {
      throw new Error('(mdc-auto-init) Could not find constructor in registry for ' + ctorName);
    }

    if (node[ctorName]) {
      warn('(mdc-auto-init) Component already initialized for ' + node + '. Skipping...');
      continue;
    }

    // TODO: Should we make an eslint rule for an attachTo() static method?
    var component = Ctor.attachTo(node);
    Object.defineProperty(node, ctorName, {
      value: component,
      writable: false,
      enumerable: false,
      configurable: true
    });
  }
}

mdcAutoInit.register = function (componentName, Ctor) {
  var warn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONSOLE_WARN;

  if (typeof Ctor !== 'function') {
    throw new Error('(mdc-auto-init) Invalid Ctor value ' + Ctor + '. Expected function');
  }
  if (registry[componentName]) {
    warn('(mdc-auto-init) Overriding registration for ' + componentName + ' with ' + Ctor + '. ' + ('Was: ' + registry[componentName]));
  }
  registry[componentName] = Ctor;
};

mdcAutoInit.deregister = function (componentName) {
  delete registry[componentName];
};

mdcAutoInit.deregisterAll = function () {
  Object.keys(registry).forEach(this.deregister, this);
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_animation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() { return __WEBPACK_IMPORTED_MODULE_4__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckbox", function() { return MDCCheckbox; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var MDCCheckbox = function (_MDCComponent) {
  _inherits(MDCCheckbox, _MDCComponent);

  _createClass(MDCCheckbox, [{
    key: 'nativeCb_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR;

      return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCCheckbox(root);
    }
  }]);

  function MDCCheckbox() {
    var _ref;

    _classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCCheckbox, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["a" /* getMatchesProperty */])(HTMLElement.prototype);
      var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.nativeCb_[MATCHES](':active');
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeCb_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeCb_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRippleFoundation"](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](this.root_, foundation);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
          return _this3.root_.addEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'), handler);
        },
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
          return _this3.root_.removeEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'), handler);
        },
        registerChangeHandler: function registerChangeHandler(handler) {
          return _this3.nativeCb_.addEventListener('change', handler);
        },
        deregisterChangeHandler: function deregisterChangeHandler(handler) {
          return _this3.nativeCb_.removeEventListener('change', handler);
        },
        getNativeControl: function getNativeControl() {
          return _this3.nativeCb_;
        },
        forceLayout: function forceLayout() {
          return _this3.root_.offsetWidth;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return Boolean(_this3.root_.parentNode);
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    },
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }]);

  return MDCCheckbox;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_3__util__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialog", function() { return MDCDialog; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var MDCDialog = function (_MDCComponent) {
  _inherits(MDCDialog, _MDCComponent);

  function MDCDialog() {
    _classCallCheck(this, MDCDialog);

    return _possibleConstructorReturn(this, (MDCDialog.__proto__ || Object.getPrototypeOf(MDCDialog)).apply(this, arguments));
  }

  _createClass(MDCDialog, [{
    key: 'initialize',
    value: function initialize() {
      this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_3__util__["createFocusTrapInstance"](this.dialogSurface_, this.acceptButton_);
      this.footerBtnRipples_ = [];

      var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
      for (var i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
        this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](footerBtn));
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.footerBtnRipples_.forEach(function (ripple) {
        return ripple.destroy();
      });
      _get(MDCDialog.prototype.__proto__ || Object.getPrototypeOf(MDCDialog.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'show',
    value: function show() {
      this.foundation_.open();
    }
  }, {
    key: 'close',
    value: function close() {
      this.foundation_.close();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setStyle: function setStyle(prop, val) {
          return _this2.root_.style.setProperty(prop, val);
        },
        addBodyClass: function addBodyClass(className) {
          return document.body.classList.add(className);
        },
        removeBodyClass: function removeBodyClass(className) {
          return document.body.classList.remove(className);
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(evt, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(evt, handler);
        },
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.addEventListener(evt, handler);
        },
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.removeEventListener(evt, handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        notifyAccept: function notifyAccept() {
          return _this2.emit('MDCDialog:accept');
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit('MDCDialog:cancel');
        },
        trapFocusOnSurface: function trapFocusOnSurface() {
          return _this2.focusTrap_.activate();
        },
        untrapFocusOnSurface: function untrapFocusOnSurface() {
          return _this2.focusTrap_.deactivate();
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }
  }, {
    key: 'acceptButton_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_SELECTOR);
    }
  }, {
    key: 'dialogSurface_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.DIALOG_SURFACE_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCDialog(root);
    }
  }]);

  return MDCDialog;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__temporary__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawer", function() { return __WEBPACK_IMPORTED_MODULE_1__temporary__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__temporary__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistent__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawer", function() { return __WEBPACK_IMPORTED_MODULE_2__persistent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__persistent__["b"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_0__util__; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFormFieldFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFormField", function() { return MDCFormField; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var MDCFormField = function (_MDCComponent) {
  _inherits(MDCFormField, _MDCComponent);

  function MDCFormField() {
    _classCallCheck(this, MDCFormField);

    return _possibleConstructorReturn(this, (MDCFormField.__proto__ || Object.getPrototypeOf(MDCFormField)).apply(this, arguments));
  }

  _createClass(MDCFormField, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.label_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.label_.removeEventListener(type, handler);
        },
        activateInputRipple: function activateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.activate();
          }
        },
        deactivateInputRipple: function deactivateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.deactivate();
          }
        }
      });
    }
  }, {
    key: 'input',
    set: function set(input) {
      this.input_ = input;
    },
    get: function get() {
      return this.input_;
    }
  }, {
    key: 'label_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.LABEL_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCFormField(root);
    }
  }]);

  return MDCFormField;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCGridListFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCGridList", function() { return MDCGridList; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCGridList = function (_MDCComponent) {
  _inherits(MDCGridList, _MDCComponent);

  function MDCGridList() {
    _classCallCheck(this, MDCGridList);

    return _possibleConstructorReturn(this, (MDCGridList.__proto__ || Object.getPrototypeOf(MDCGridList)).apply(this, arguments));
  }

  _createClass(MDCGridList, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        getOffsetWidth: function getOffsetWidth() {
          return _this2.root_.offsetWidth;
        },
        getNumberOfTiles: function getNumberOfTiles() {
          return _this2.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TILE_SELECTOR).length;
        },
        getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex(index) {
          return _this2.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TILE_SELECTOR)[index].offsetWidth;
        },
        setStyleForTilesElement: function setStyleForTilesElement(property, value) {
          _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TILES_SELECTOR).style[property] = value;
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        }
      });
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCGridList(root);
    }
  }]);

  return MDCGridList;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCIconToggleFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCIconToggle", function() { return MDCIconToggle; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCIconToggle = function (_MDCComponent) {
  _inherits(MDCIconToggle, _MDCComponent);

  _createClass(MDCIconToggle, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCIconToggle(root);
    }
  }]);

  function MDCIconToggle() {
    var _ref;

    _classCallCheck(this, MDCIconToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCIconToggle.__proto__ || Object.getPrototypeOf(MDCIconToggle)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCIconToggle, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.foundation_.isKeyboardActivated();
        },
        computeBoundingRect: function computeBoundingRect() {
          var dim = 48;

          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          return {
            left: left,
            top: top,
            width: dim,
            height: dim,
            right: left + dim,
            bottom: left + dim
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRippleFoundation"](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](this.root_, foundation);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCIconToggle.prototype.__proto__ || Object.getPrototypeOf(MDCIconToggle.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.iconEl_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.iconEl_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this3.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this3.root_.removeEventListener(type, handler);
        },
        setText: function setText(text) {
          _this3.iconEl_.textContent = text;
        },
        getTabIndex: function getTabIndex() {
          return (/* number */_this3.root_.tabIndex
          );
        },
        setTabIndex: function setTabIndex(tabIndex) {
          _this3.root_.tabIndex = tabIndex;
        },
        getAttr: function getAttr(name, value) {
          return _this3.root_.getAttribute(name, value);
        },
        setAttr: function setAttr(name, value) {
          return _this3.root_.setAttribute(name, value);
        },
        rmAttr: function rmAttr(name) {
          return _this3.root_.removeAttribute(name);
        },
        notifyChange: function notifyChange(evtData) {
          return _this3.emit('MDCIconToggle:change', evtData);
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.on = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ARIA_PRESSED) === 'true';
      this.disabled = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ARIA_DISABLED) === 'true';
    }
  }, {
    key: 'refreshToggleData',
    value: function refreshToggleData() {
      this.foundation_.refreshToggleData();
    }
  }, {
    key: 'iconEl_',
    get: function get() {
      var sel = this.root_.dataset.iconInnerSelector;

      return sel ? this.root_.querySelector(sel) : this.root_;
    }
  }, {
    key: 'on',
    get: function get() {
      return this.foundation_.isOn();
    },
    set: function set(isOn) {
      this.foundation_.toggle(isOn);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(isDisabled) {
      this.foundation_.setDisabled(isDisabled);
    }
  }]);

  return MDCIconToggle;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRadioFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRadio", function() { return MDCRadio; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCRadio = function (_MDCComponent) {
  _inherits(MDCRadio, _MDCComponent);

  _createClass(MDCRadio, [{
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCRadio(root);
    }
  }]);

  function MDCRadio() {
    var _ref;

    _classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCRadio, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
        // UI we desire.
        isSurfaceActive: function isSurfaceActive() {
          return false;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRippleFoundation"](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](this.root_, foundation);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        getNativeControl: function getNativeControl() {
          return _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR);
        }
      });
    }
  }, {
    key: 'nativeControl_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR);
    }
  }]);

  return MDCRadio;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_menu__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelectFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelect", function() { return MDCSelect; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCSelect = function (_MDCComponent) {
  _inherits(MDCSelect, _MDCComponent);

  function MDCSelect() {
    _classCallCheck(this, MDCSelect);

    return _possibleConstructorReturn(this, (MDCSelect.__proto__ || Object.getPrototypeOf(MDCSelect)).apply(this, arguments));
  }

  _createClass(MDCSelect, [{
    key: 'item',
    value: function item(index) {
      return this.options[index] || null;
    }
  }, {
    key: 'nameditem',
    value: function nameditem(key) {
      // NOTE: IE11 precludes us from using Array.prototype.find
      for (var i = 0, options = this.options, option; option = options[i]; i++) {
        if (option.id === key || option.getAttribute('name') === key) {
          return option;
        }
      }
      return null;
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var menuFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new __WEBPACK_IMPORTED_MODULE_1__material_menu__["MDCSimpleMenu"](el);
      };

      this.menuEl_ = this.root_.querySelector('.mdc-select__menu');
      this.menu_ = menuFactory(this.menuEl_);
      this.selectedText_ = this.root_.querySelector('.mdc-select__selected-text');
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        rmAttr: function rmAttr(attr, value) {
          return _this2.root_.removeAttribute(attr, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this2.root_.getBoundingClientRect();
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        makeTabbable: function makeTabbable() {
          _this2.root_.tabIndex = 0;
        },
        makeUntabbable: function makeUntabbable() {
          _this2.root_.tabIndex = -1;
        },
        getComputedStyleValue: function getComputedStyleValue(prop) {
          return window.getComputedStyle(_this2.root_).getPropertyValue(prop);
        },
        setStyle: function setStyle(propertyName, value) {
          return _this2.root_.style.setProperty(propertyName, value);
        },
        create2dRenderingContext: function create2dRenderingContext() {
          return document.createElement('canvas').getContext('2d');
        },
        setMenuElStyle: function setMenuElStyle(propertyName, value) {
          return _this2.menuEl_.style.setProperty(propertyName, value);
        },
        setMenuElAttr: function setMenuElAttr(attr, value) {
          return _this2.menuEl_.setAttribute(attr, value);
        },
        rmMenuElAttr: function rmMenuElAttr(attr) {
          return _this2.menuEl_.removeAttribute(attr);
        },
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return _this2.menuEl_.offsetHeight;
        },
        openMenu: function openMenu(focusIndex) {
          return _this2.menu_.show({ focusIndex: focusIndex });
        },
        isMenuOpen: function isMenuOpen() {
          return _this2.menu_.open;
        },
        setSelectedTextContent: function setSelectedTextContent(selectedTextContent) {
          _this2.selectedText_.textContent = selectedTextContent;
        },
        getNumberOfOptions: function getNumberOfOptions() {
          return _this2.options.length;
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex(index) {
          return _this2.options[index].textContent;
        },
        getValueForOptionAtIndex: function getValueForOptionAtIndex(index) {
          return _this2.options[index].id || _this2.options[index].textContent;
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
          return _this2.options[index].setAttribute(attr, value);
        },
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
          return _this2.options[index].removeAttribute(attr);
        },
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex(index) {
          return _this2.options[index].offsetTop;
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler(type, handler) {
          return _this2.menu_.listen(type, handler);
        },
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler(type, handler) {
          return _this2.menu_.unlisten(type, handler);
        },
        notifyChange: function notifyChange() {
          return _this2.emit('MDCSelect:change', _this2);
        },
        getWindowInnerHeight: function getWindowInnerHeight() {
          return window.innerHeight;
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var selectedOption = this.selectedOptions[0];
      var idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
      if (idx >= 0) {
        this.selectedIndex = idx;
      }

      if (this.root_.getAttribute('aria-disabled') === 'true') {
        this.disabled = true;
      }
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }
  }, {
    key: 'options',
    get: function get() {
      return this.menu_.items;
    }
  }, {
    key: 'selectedOptions',
    get: function get() {
      return this.root_.querySelectorAll('[aria-selected]');
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSelect(root);
    }
  }]);

  return MDCSelect;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_animation__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbar", function() { return MDCSnackbar; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCSnackbar = function (_MDCComponent) {
  _inherits(MDCSnackbar, _MDCComponent);

  function MDCSnackbar() {
    _classCallCheck(this, MDCSnackbar);

    return _possibleConstructorReturn(this, (MDCSnackbar.__proto__ || Object.getPrototypeOf(MDCSnackbar)).apply(this, arguments));
  }

  _createClass(MDCSnackbar, [{
    key: 'show',
    value: function show(data) {
      this.foundation_.show(data);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCSnackbarFoundatio = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings,
          TEXT_SELECTOR = _MDCSnackbarFoundatio.TEXT_SELECTOR,
          ACTION_BUTTON_SELECTOR = _MDCSnackbarFoundatio.ACTION_BUTTON_SELECTOR;

      var getText = function getText() {
        return _this2.root_.querySelector(TEXT_SELECTOR);
      };
      var getActionButton = function getActionButton() {
        return _this2.root_.querySelector(ACTION_BUTTON_SELECTOR);
      };

      /* eslint brace-style: "off" */
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setAriaHidden: function setAriaHidden() {
          return _this2.root_.setAttribute('aria-hidden', 'true');
        },
        unsetAriaHidden: function unsetAriaHidden() {
          return _this2.root_.removeAttribute('aria-hidden');
        },
        setActionAriaHidden: function setActionAriaHidden() {
          return getActionButton().setAttribute('aria-hidden', 'true');
        },
        unsetActionAriaHidden: function unsetActionAriaHidden() {
          return getActionButton().removeAttribute('aria-hidden');
        },
        setActionText: function setActionText(text) {
          getActionButton().textContent = text;
        },
        setMessageText: function setMessageText(text) {
          getText().textContent = text;
        },
        registerActionClickHandler: function registerActionClickHandler(handler) {
          return getActionButton().addEventListener('click', handler);
        },
        deregisterActionClickHandler: function deregisterActionClickHandler(handler) {
          return getActionButton().removeEventListener('click', handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.root_.addEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_animation__["a" /* getCorrectEventName */])(window, 'transitionend'), handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.root_.removeEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_animation__["a" /* getCorrectEventName */])(window, 'transitionend'), handler);
        }
      });
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSnackbar(root);
    }
  }]);

  return MDCSnackbar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextfieldFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextfield", function() { return MDCTextfield; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCTextfield = function (_MDCComponent) {
  _inherits(MDCTextfield, _MDCComponent);

  _createClass(MDCTextfield, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTextfield(root);
    }
  }]);

  function MDCTextfield() {
    var _ref;

    _classCallCheck(this, MDCTextfield);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCTextfield.__proto__ || Object.getPrototypeOf(MDCTextfield)).call.apply(_ref, [this].concat(args)));

    var input = _this.input_;
    _this.helptextElement = input.hasAttribute('aria-controls') ? document.getElementById(input.getAttribute('aria-controls')) : null;
    return _this;
  }

  _createClass(MDCTextfield, [{
    key: 'initialSyncWithDom',
    value: function initialSyncWithDom() {
      this.disabled = this.input_.disabled;
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](_extends({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        addClassToLabel: function addClassToLabel(className) {
          var label = _this2.label_;
          if (label) {
            label.classList.add(className);
          }
        },
        removeClassFromLabel: function removeClassFromLabel(className) {
          var label = _this2.label_;
          if (label) {
            label.classList.remove(className);
          }
        }
      }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_()));
    }
  }, {
    key: 'getInputAdapterMethods_',
    value: function getInputAdapterMethods_() {
      var _this3 = this;

      return {
        registerInputFocusHandler: function registerInputFocusHandler(handler) {
          return _this3.input_.addEventListener('focus', handler);
        },
        registerInputBlurHandler: function registerInputBlurHandler(handler) {
          return _this3.input_.addEventListener('blur', handler);
        },
        registerInputInputHandler: function registerInputInputHandler(handler) {
          return _this3.input_.addEventListener('input', handler);
        },
        registerInputKeydownHandler: function registerInputKeydownHandler(handler) {
          return _this3.input_.addEventListener('keydown', handler);
        },
        deregisterInputFocusHandler: function deregisterInputFocusHandler(handler) {
          return _this3.input_.removeEventListener('focus', handler);
        },
        deregisterInputBlurHandler: function deregisterInputBlurHandler(handler) {
          return _this3.input_.removeEventListener('blur', handler);
        },
        deregisterInputInputHandler: function deregisterInputInputHandler(handler) {
          return _this3.input_.removeEventListener('input', handler);
        },
        deregisterInputKeydownHandler: function deregisterInputKeydownHandler(handler) {
          return _this3.input_.removeEventListener('keydown', handler);
        },
        getNativeInput: function getNativeInput() {
          return _this3.input_;
        }
      };
    }
  }, {
    key: 'getHelptextAdapterMethods_',
    value: function getHelptextAdapterMethods_() {
      var _this4 = this;

      return {
        addClassToHelptext: function addClassToHelptext(className) {
          if (_this4.helptextElement) {
            _this4.helptextElement.classList.add(className);
          }
        },
        removeClassFromHelptext: function removeClassFromHelptext(className) {
          if (_this4.helptextElement) {
            _this4.helptextElement.classList.remove(className);
          }
        },
        helptextHasClass: function helptextHasClass(className) {
          if (!_this4.helptextElement) {
            return false;
          }
          return _this4.helptextElement.classList.contains(className);
        },
        setHelptextAttr: function setHelptextAttr(name, value) {
          if (_this4.helptextElement) {
            _this4.helptextElement.setAttribute(name, value);
          }
        },
        removeHelptextAttr: function removeHelptextAttr(name) {
          if (_this4.helptextElement) {
            _this4.helptextElement.removeAttribute(name);
          }
        }
      };
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'input_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.INPUT_SELECTOR);
    }
  }, {
    key: 'label_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.LABEL_SELECTOR);
    }
  }]);

  return MDCTextfield;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCToolbarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_2__util__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCToolbar", function() { return MDCToolbar; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









var MDCToolbar = function (_MDCComponent) {
  _inherits(MDCToolbar, _MDCComponent);

  function MDCToolbar() {
    _classCallCheck(this, MDCToolbar);

    return _possibleConstructorReturn(this, (MDCToolbar.__proto__ || Object.getPrototypeOf(MDCToolbar)).apply(this, arguments));
  }

  _createClass(MDCToolbar, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        registerScrollHandler: function registerScrollHandler(handler) {
          return window.addEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        deregisterScrollHandler: function deregisterScrollHandler(handler) {
          return window.removeEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        getViewportWidth: function getViewportWidth() {
          return window.innerWidth;
        },
        getViewportScrollY: function getViewportScrollY() {
          return window.pageYOffset;
        },
        getOffsetHeight: function getOffsetHeight() {
          return _this2.root_.offsetHeight;
        },
        getFlexibleRowElementOffsetHeight: function getFlexibleRowElementOffsetHeight() {
          return _this2.flexibleRowElement_.offsetHeight;
        },
        notifyChange: function notifyChange(evtData) {
          return _this2.emit('MDCToolbar:change', evtData);
        },
        setStyle: function setStyle(property, value) {
          return _this2.root_.style.setProperty(property, value);
        },
        setStyleForTitleElement: function setStyleForTitleElement(property, value) {
          return _this2.titleElement_.style.setProperty(property, value);
        },
        setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement(property, value) {
          return _this2.flexibleRowElement_.style.setProperty(property, value);
        },
        setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement(property, value) {
          if (_this2.fixedAdjustElement) {
            _this2.fixedAdjustElement.style.setProperty(property, value);
          }
        }
      });
    }
  }, {
    key: 'flexibleRowElement_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.FLEXIBLE_ROW_SELECTOR);
    }
  }, {
    key: 'titleElement_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TITLE_SELECTOR);
    }
  }, {
    key: 'fixedAdjustElement',
    set: function set(fixedAdjustElement) {
      this.fixedAdjustElement_ = fixedAdjustElement;
      this.foundation_.updateAdjustElementStyles();
    },
    get: function get() {
      return this.fixedAdjustElement_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCToolbar(root);
    }
  }]);

  return MDCToolbar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_checkbox__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_form_field__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_grid_list__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_icon_toggle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_radio__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ripple__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_dialog__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_drawer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_textfield__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_snackbar__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_menu__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_select__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_toolbar__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_auto_init__ = __webpack_require__(9);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "base", function() { return __WEBPACK_IMPORTED_MODULE_0__material_base__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "checkbox", function() { return __WEBPACK_IMPORTED_MODULE_1__material_checkbox__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "formField", function() { return __WEBPACK_IMPORTED_MODULE_2__material_form_field__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "gridList", function() { return __WEBPACK_IMPORTED_MODULE_3__material_grid_list__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "iconToggle", function() { return __WEBPACK_IMPORTED_MODULE_4__material_icon_toggle__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "radio", function() { return __WEBPACK_IMPORTED_MODULE_5__material_radio__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ripple", function() { return __WEBPACK_IMPORTED_MODULE_6__material_ripple__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "snackbar", function() { return __WEBPACK_IMPORTED_MODULE_10__material_snackbar__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dialog", function() { return __WEBPACK_IMPORTED_MODULE_7__material_dialog__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "drawer", function() { return __WEBPACK_IMPORTED_MODULE_8__material_drawer__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "textfield", function() { return __WEBPACK_IMPORTED_MODULE_9__material_textfield__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return __WEBPACK_IMPORTED_MODULE_11__material_menu__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_12__material_select__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "toolbar", function() { return __WEBPACK_IMPORTED_MODULE_13__material_toolbar__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "autoInit", function() { return __WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

















// Register all components
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCCheckbox', __WEBPACK_IMPORTED_MODULE_1__material_checkbox__["MDCCheckbox"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCDialog', __WEBPACK_IMPORTED_MODULE_7__material_dialog__["MDCDialog"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCPersistentDrawer', __WEBPACK_IMPORTED_MODULE_8__material_drawer__["MDCPersistentDrawer"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCTemporaryDrawer', __WEBPACK_IMPORTED_MODULE_8__material_drawer__["MDCTemporaryDrawer"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCRipple', __WEBPACK_IMPORTED_MODULE_6__material_ripple__["MDCRipple"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCGridList', __WEBPACK_IMPORTED_MODULE_3__material_grid_list__["MDCGridList"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCIconToggle', __WEBPACK_IMPORTED_MODULE_4__material_icon_toggle__["MDCIconToggle"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCRadio', __WEBPACK_IMPORTED_MODULE_5__material_radio__["MDCRadio"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCSnackbar', __WEBPACK_IMPORTED_MODULE_10__material_snackbar__["MDCSnackbar"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCTextfield', __WEBPACK_IMPORTED_MODULE_9__material_textfield__["MDCTextfield"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCSimpleMenu', __WEBPACK_IMPORTED_MODULE_11__material_menu__["MDCSimpleMenu"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCSelect', __WEBPACK_IMPORTED_MODULE_12__material_select__["MDCSelect"]);
__WEBPACK_IMPORTED_MODULE_14__material_auto_init__["a" /* default */].register('MDCToolbar', __WEBPACK_IMPORTED_MODULE_13__material_toolbar__["MDCToolbar"]);

// Export all components.


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
    }
  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{
      // Subclasses can override this to do any additional setup work that would be considered part of a
      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
      // initialized. Any additional arguments besides root and foundation will be passed in here.
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    // Wrapper method to add an event listener to the component's root element. This is most useful when
    // listening for custom events.

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    // Wrapper method to remove an event listener to the component's root element. This is most useful when
    // unlistening for custom events.

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    // Fires a cross-browser-compatible custom event from the component root of the given type,
    // with the given data.

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, { detail: evtData });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, false, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ROOT = 'mdc-checkbox';

var cssClasses = {
  ROOT: 'mdc-checkbox',
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

var strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate'
};

var numbers = {
  ANIM_END_LATCH_MS: 100
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(23);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var CB_PROTO_PROPS = ['checked', 'indeterminate'];

var MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
        registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
        deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{},
        forceLayout: function forceLayout() {},
        isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
      };
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    _classCallCheck(this, MDCCheckboxFoundation);

    var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INIT;
    _this.currentAnimationClass_ = '';
    _this.animEndLatchTimer_ = 0;
    _this.animEndHandler_ = function () {
      clearTimeout(_this.animEndLatchTimer_);
      _this.animEndLatchTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(_this.currentAnimationClass_);
        _this.adapter_.deregisterAnimationEndHandler(_this.animEndHandler_);
      }, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].ANIM_END_LATCH_MS);
    };
    _this.changeHandler_ = function () {
      return _this.transitionCheckState_();
    };
    return _this;
  }

  _createClass(MDCCheckboxFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].UPGRADED);
      this.adapter_.registerChangeHandler(this.changeHandler_);
      this.installPropertyChangeHooks_();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterChangeHandler(this.changeHandler_);
      this.uninstallPropertyChangeHooks_();
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isIndeterminate',
    value: function isIndeterminate() {
      return this.getNativeControl_().indeterminate;
    }
  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate(indeterminate) {
      this.getNativeControl_().indeterminate = indeterminate;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeControl_().disabled = disabled;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }
  }, {
    key: 'installPropertyChangeHooks_',
    value: function installPropertyChangeHooks_() {
      var _this2 = this;

      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, {
            get: desc.get,
            set: function set(state) {
              desc.set.call(nativeCb, state);
              _this2.transitionCheckState_();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          });
        }
      });
    }
  }, {
    key: 'uninstallPropertyChangeHooks_',
    value: function uninstallPropertyChangeHooks_() {
      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    }
  }, {
    key: 'transitionCheckState_',
    value: function transitionCheckState_() {
      var nativeCb = this.adapter_.getNativeControl();
      if (!nativeCb) {
        return;
      }
      var oldState = this.currentCheckState_;
      var newState = this.determineCheckState_(nativeCb);
      if (oldState === newState) {
        return;
      }

      // Check to ensure that there isn't a previously existing animation class, in case for example
      // the user interacted with the checkbox before the animation was finished.
      if (this.currentAnimationClass_.length > 0) {
        clearTimeout(this.animEndLatchTimer_);
        this.adapter_.forceLayout();
        this.adapter_.removeClass(this.currentAnimationClass_);
      }

      this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
      this.currentCheckState_ = newState;

      // Check for parentNode so that animations are only run when the element is attached
      // to the DOM.
      if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
        this.adapter_.addClass(this.currentAnimationClass_);
        this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
      }
    }
  }, {
    key: 'determineCheckState_',
    value: function determineCheckState_(nativeCb) {
      var TRANSITION_STATE_INDETERMINATE = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INDETERMINATE,
          TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;


      if (nativeCb.indeterminate) {
        return TRANSITION_STATE_INDETERMINATE;
      }
      return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    }
  }, {
    key: 'getTransitionAnimationClass_',
    value: function getTransitionAnimationClass_(oldState, newState) {
      var TRANSITION_STATE_INIT = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INIT,
          TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;
      var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
          ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
          ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
          ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
          ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
          ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
          ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


      switch (oldState) {
        case TRANSITION_STATE_INIT:
          if (newState === TRANSITION_STATE_UNCHECKED) {
            return '';
          }
        // fallthrough
        case TRANSITION_STATE_UNCHECKED:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
        case TRANSITION_STATE_CHECKED:
          return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
        // TRANSITION_STATE_INDETERMINATE
        default:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      }
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        indeterminate: false,
        disabled: false,
        value: null
      };
    }
  }]);

  return MDCCheckboxFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCCheckboxFoundation);


function validDescriptor(inputPropDesc) {
  return inputPropDesc && typeof inputPropDesc.set === 'function';
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
};

var strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept'
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCDialogFoundation = function (_MDCFoundation) {
  _inherits(MDCDialogFoundation, _MDCFoundation);

  _createClass(MDCDialogFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setStyle: function setStyle() /* propertyName: string, value: string */{},
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        notifyAccept: function notifyAccept() {},
        notifyCancel: function notifyCancel() {},
        trapFocusOnSurface: function trapFocusOnSurface() {},
        untrapFocusOnSurface: function untrapFocusOnSurface() {}
      };
    }
  }]);

  function MDCDialogFoundation(adapter) {
    _classCallCheck(this, MDCDialogFoundation);

    var _this = _possibleConstructorReturn(this, (MDCDialogFoundation.__proto__ || Object.getPrototypeOf(MDCDialogFoundation)).call(this, _extends(MDCDialogFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;
    _this.componentClickHandler_ = function () {
      return _this.cancel(true);
    };
    _this.dialogClickHandler_ = function (evt) {
      return _this.handleDialogClick_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.cancel(true);
      }
    };
    return _this;
  }

  _createClass(MDCDialogFoundation, [{
    key: 'destroy',
    value: function destroy() {
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      this.isOpen_ = true;
      this.disableScroll_();
      this.adapter_.setStyle('visibility', 'visible');
      this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
      this.adapter_.trapFocusOnSurface();

      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'close',
    value: function close() {
      this.isOpen_ = false;
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.adapter_.setStyle('visibility', 'hidden');
      this.enableScroll_();

      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }, {
    key: 'accept',
    value: function accept(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyAccept();
      }

      this.close();
    }
  }, {
    key: 'cancel',
    value: function cancel(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyCancel();
      }

      this.close();
    }
  }, {
    key: 'handleDialogClick_',
    value: function handleDialogClick_(evt) {
      evt.stopPropagation();
      var target = evt.target;

      if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACCEPT_BTN)) {
        this.accept(true);
      } else if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].CANCEL_BTN)) {
        this.cancel(true);
      }
    }
  }, {
    key: 'disableScroll_',
    value: function disableScroll_() {
      this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
    }
  }, {
    key: 'enableScroll_',
    value: function enableScroll_() {
      this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
    }
  }]);

  return MDCDialogFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCDialogFoundation);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
/* harmony export (immutable) */ __webpack_exports__["createFocusTrapInstance"] = createFocusTrapInstance;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function createFocusTrapInstance(surfaceEl, acceptButtonEl) {
  var focusTrapFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a;

  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true
  });
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var cssClasses = {
  ROOT: 'mdc-persistent-drawer',
  OPEN: 'mdc-persistent-drawer--open',
  ANIMATING: 'mdc-persistent-drawer--animating'
};

var strings = {
  DRAWER_SELECTOR: '.mdc-persistent-drawer__drawer',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */]
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(28);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCPersistentDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCPersistentDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCPersistentDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return _extends(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        }
      });
    }
  }]);

  function MDCPersistentDrawerFoundation(adapter) {
    _classCallCheck(this, MDCPersistentDrawerFoundation);

    return _possibleConstructorReturn(this, (MDCPersistentDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCPersistentDrawerFoundation)).call(this, _extends(MDCPersistentDrawerFoundation.defaultAdapter, adapter), MDCPersistentDrawerFoundation.cssClasses.ROOT, MDCPersistentDrawerFoundation.cssClasses.ANIMATING, MDCPersistentDrawerFoundation.cssClasses.OPEN));
  }

  _createClass(MDCPersistentDrawerFoundation, [{
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }]);

  return MDCPersistentDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCPersistentDrawerFoundation);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* unused harmony reexport util */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCPersistentDrawer; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCPersistentDrawer = function (_MDCComponent) {
  _inherits(MDCPersistentDrawer, _MDCComponent);

  function MDCPersistentDrawer() {
    _classCallCheck(this, MDCPersistentDrawer);

    return _possibleConstructorReturn(this, (MDCPersistentDrawer.__proto__ || Object.getPrototypeOf(MDCPersistentDrawer)).apply(this, arguments));
  }

  _createClass(MDCPersistentDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var FOCUSABLE_ELEMENTS = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.FOCUSABLE_ELEMENTS;


      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.root_.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.root_.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(__WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : 'translateX(' + value + 'px)');
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        notifyOpen: function notifyOpen() {
          return _this2.emit('MDCPersistentDrawer:open');
        },
        notifyClose: function notifyClose() {
          return _this2.emit('MDCPersistentDrawer:close');
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCPersistentDrawer(root);
    }
  }]);

  return MDCPersistentDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOCUSABLE_ELEMENTS; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FOCUSABLE_ELEMENTS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSlidableDrawerFoundation; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var MDCSlidableDrawerFoundation = function (_MDCFoundation) {
  _inherits(MDCSlidableDrawerFoundation, _MDCFoundation);

  _createClass(MDCSlidableDrawerFoundation, null, [{
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        setTranslateX: function setTranslateX() /* value: number | null */{},
        getFocusableElements: function getFocusableElements() /* NodeList */{},
        saveElementTabState: function saveElementTabState() /* el: Element */{},
        restoreElementTabState: function restoreElementTabState() /* el: Element */{},
        makeElementUntabbable: function makeElementUntabbable() /* el: Element */{},
        notifyOpen: function notifyOpen() {},
        notifyClose: function notifyClose() {},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        getDrawerWidth: function getDrawerWidth() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSlidableDrawerFoundation(adapter, rootCssClass, animatingCssClass, openCssClass) {
    _classCallCheck(this, MDCSlidableDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSlidableDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCSlidableDrawerFoundation)).call(this, _extends(MDCSlidableDrawerFoundation.defaultAdapter, adapter)));

    _this.rootCssClass_ = rootCssClass;
    _this.animatingCssClass_ = animatingCssClass;
    _this.openCssClass_ = openCssClass;

    _this.transitionEndHandler_ = function (ev) {
      if (_this.isRootTransitioningEventTarget_(ev.target)) {
        _this.adapter_.removeClass(_this.animatingCssClass_);
        _this.adapter_.deregisterTransitionEndHandler(_this.transitionEndHandler_);
      }
    };

    _this.inert_ = false;

    _this.drawerClickHandler_ = function (evt) {
      return evt.stopPropagation();
    };
    _this.componentTouchStartHandler_ = function (evt) {
      return _this.handleTouchStart_(evt);
    };
    _this.componentTouchMoveHandler_ = function (evt) {
      return _this.handleTouchMove_(evt);
    };
    _this.componentTouchEndHandler_ = function (evt) {
      return _this.handleTouchEnd_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.close();
      }
    };
    return _this;
  }

  _createClass(MDCSlidableDrawerFoundation, [{
    key: 'init',
    value: function init() {
      var ROOT = this.rootCssClass_;
      var OPEN = this.openCssClass_;

      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      } else {
        this.detabinate_();
        this.isOpen_ = false;
      }

      this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
      // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.addClass(this.openCssClass_);
      this.retabinate_();
      // Debounce multiple calls
      if (!this.isOpen_) {
        this.adapter_.notifyOpen();
      }
      this.isOpen_ = true;
    }
  }, {
    key: 'close',
    value: function close() {
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.removeClass(this.openCssClass_);
      this.detabinate_();
      // Debounce multiple calls
      if (this.isOpen_) {
        this.adapter_.notifyClose();
      }
      this.isOpen_ = false;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /**
     *  Render all children of the drawer inert when it's closed.
     */

  }, {
    key: 'detabinate_',
    value: function detabinate_() {
      if (this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.saveElementTabState(elements[i]);
          this.adapter_.makeElementUntabbable(elements[i]);
        }
      }

      this.inert_ = true;
    }

    /**
     *  Make all children of the drawer tabbable again when it's open.
     */

  }, {
    key: 'retabinate_',
    value: function retabinate_() {
      if (!this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.restoreElementTabState(elements[i]);
        }
      }

      this.inert_ = false;
    }
  }, {
    key: 'handleTouchStart_',
    value: function handleTouchStart_(evt) {
      if (!this.adapter_.hasClass(this.openCssClass_)) {
        return;
      }
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.direction_ = this.adapter_.isRtl() ? -1 : 1;
      this.drawerWidth_ = this.adapter_.getDrawerWidth();
      this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
      this.currentX_ = this.startX_;
      this.touchingSideNav_ = true;

      requestAnimationFrame(this.updateDrawer_.bind(this));
    }
  }, {
    key: 'handleTouchMove_',
    value: function handleTouchMove_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    }
  }, {
    key: 'handleTouchEnd_',
    value: function handleTouchEnd_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.prepareForTouchEnd_();

      // Did the user close the drawer by more than 50%?
      if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
        this.close();
      } else {
        // Triggering an open here means we'll get a nice animation back to the fully open state.
        this.open();
      }
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      this.touchingSideNav_ = false;
      this.adapter_.setTranslateX(null);
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      if (!this.touchingSideNav_) {
        return;
      }

      requestAnimationFrame(this.updateDrawer_.bind(this));
      this.adapter_.setTranslateX(this.newPosition_);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_() {
      // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
      // if the event target is the root event target currently transitioning.
      return false;
    }
  }, {
    key: 'newPosition_',
    get: function get() {
      var newPos = null;

      if (this.direction_ === 1) {
        newPos = Math.min(0, this.currentX_ - this.startX_);
      } else {
        newPos = Math.max(0, this.currentX_ - this.startX_);
      }

      return newPos;
    }
  }]);

  return MDCSlidableDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var cssClasses = {
  ROOT: 'mdc-temporary-drawer',
  OPEN: 'mdc-temporary-drawer--open',
  ANIMATING: 'mdc-temporary-drawer--animating'
};

var strings = {
  DRAWER_SELECTOR: '.mdc-temporary-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* FOCUSABLE_ELEMENTS */]
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(33);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCTemporaryDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCTemporaryDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCTemporaryDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return _extends(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        },
        updateCssVariable: function updateCssVariable() /* value: string */{}
      });
    }
  }]);

  function MDCTemporaryDrawerFoundation(adapter) {
    _classCallCheck(this, MDCTemporaryDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTemporaryDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation)).call(this, _extends(MDCTemporaryDrawerFoundation.defaultAdapter, adapter), MDCTemporaryDrawerFoundation.cssClasses.ROOT, MDCTemporaryDrawerFoundation.cssClasses.ANIMATING, MDCTemporaryDrawerFoundation.cssClasses.OPEN));

    _this.componentClickHandler_ = function () {
      return _this.close();
    };
    return _this;
  }

  _createClass(MDCTemporaryDrawerFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'init', this).call(this);

      // Make browser aware of custom property being used in this element.
      // Workaround for certain types of hard-to-reproduce heisenbugs.
      this.adapter_.updateCssVariable(0);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'destroy', this).call(this);

      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      // Make sure custom property values are cleared before starting.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'open', this).call(this);
    }
  }, {
    key: 'close',
    value: function close() {
      // Make sure custom property values are cleared before making any changes.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'close', this).call(this);
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'prepareForTouchEnd_', this).call(this);

      this.adapter_.updateCssVariable('');
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'updateDrawer_', this).call(this);

      var newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
      this.adapter_.updateCssVariable(newOpacity);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }]);

  return MDCTemporaryDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* MDCSlidableDrawerFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTemporaryDrawerFoundation);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* unused harmony reexport util */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTemporaryDrawer; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCTemporaryDrawer = function (_MDCComponent) {
  _inherits(MDCTemporaryDrawer, _MDCComponent);

  function MDCTemporaryDrawer() {
    _classCallCheck(this, MDCTemporaryDrawer);

    return _possibleConstructorReturn(this, (MDCTemporaryDrawer.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawer)).apply(this, arguments));
  }

  _createClass(MDCTemporaryDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCTemporaryDrawerFo = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings,
          FOCUSABLE_ELEMENTS = _MDCTemporaryDrawerFo.FOCUSABLE_ELEMENTS,
          OPACITY_VAR_NAME = _MDCTemporaryDrawerFo.OPACITY_VAR_NAME;


      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.drawer.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.drawer.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(__WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : 'translateX(' + value + 'px)');
        },
        updateCssVariable: function updateCssVariable(value) {
          if (__WEBPACK_IMPORTED_MODULE_2__util__["supportsCssCustomProperties"]()) {
            _this2.root_.style.setProperty(OPACITY_VAR_NAME, value);
          }
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        notifyOpen: function notifyOpen() {
          return _this2.emit('MDCTemporaryDrawer:open');
        },
        notifyClose: function notifyClose() {
          return _this2.emit('MDCTemporaryDrawer:close');
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTemporaryDrawer(root);
    }
  }]);

  return MDCTemporaryDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ROOT: 'mdc-form-field'
};

var strings = {
  LABEL_SELECTOR: '.mdc-form-field > label'
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(36);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCFormFieldFoundation = function (_MDCFoundation) {
  _inherits(MDCFormFieldFoundation, _MDCFoundation);

  _createClass(MDCFormFieldFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        activateInputRipple: function activateInputRipple() {},
        deactivateInputRipple: function deactivateInputRipple() {}
      };
    }
  }]);

  function MDCFormFieldFoundation(adapter) {
    _classCallCheck(this, MDCFormFieldFoundation);

    var _this = _possibleConstructorReturn(this, (MDCFormFieldFoundation.__proto__ || Object.getPrototypeOf(MDCFormFieldFoundation)).call(this, _extends(MDCFormFieldFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handleClick_(evt);
    };
    return _this;
  }

  _createClass(MDCFormFieldFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    }
  }, {
    key: 'handleClick_',
    value: function handleClick_() {
      var _this2 = this;

      this.adapter_.activateInputRipple();
      requestAnimationFrame(function () {
        return _this2.adapter_.deactivateInputRipple();
      });
    }
  }]);

  return MDCFormFieldFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCFormFieldFoundation);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  TILES_SELECTOR: '.mdc-grid-list__tiles',
  TILE_SELECTOR: '.mdc-grid-tile'
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(38);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCGridListFoundation = function (_MDCFoundation) {
  _inherits(MDCGridListFoundation, _MDCFoundation);

  _createClass(MDCGridListFoundation, null, [{
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        getOffsetWidth: function getOffsetWidth() {
          return (/* number */0
          );
        },
        getNumberOfTiles: function getNumberOfTiles() {
          return (/* number */0
          );
        },
        getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex() {
          return (/* index: number */ /* number */0
          );
        },
        setStyleForTilesElement: function setStyleForTilesElement() /* property: string, value: string */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{}
      };
    }
  }]);

  function MDCGridListFoundation(adapter) {
    _classCallCheck(this, MDCGridListFoundation);

    var _this = _possibleConstructorReturn(this, (MDCGridListFoundation.__proto__ || Object.getPrototypeOf(MDCGridListFoundation)).call(this, _extends(MDCGridListFoundation.defaultAdapter, adapter)));

    _this.resizeHandler_ = function () {
      return _this.alignCenter();
    };
    _this.resizeFrame_ = 0;
    return _this;
  }

  _createClass(MDCGridListFoundation, [{
    key: 'init',
    value: function init() {
      this.alignCenter();
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'alignCenter',
    value: function alignCenter() {
      var _this2 = this;

      if (this.resizeFrame_ !== 0) {
        cancelAnimationFrame(this.resizeFrame_);
      }
      this.resizeFrame_ = requestAnimationFrame(function () {
        _this2.alignCenter_();
        _this2.resizeFrame_ = 0;
      });
    }
  }, {
    key: 'alignCenter_',
    value: function alignCenter_() {
      if (this.adapter_.getNumberOfTiles() == 0) {
        return;
      }
      var gridWidth = this.adapter_.getOffsetWidth();
      var itemWidth = this.adapter_.getOffsetWidthForTileAtIndex(0);
      var tilesWidth = itemWidth * Math.floor(gridWidth / itemWidth);
      this.adapter_.setStyleForTilesElement('width', tilesWidth + 'px');
    }
  }]);

  return MDCGridListFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCGridListFoundation);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  DATA_TOGGLE_ON: 'data-toggle-on',
  DATA_TOGGLE_OFF: 'data-toggle-off',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_LABEL: 'aria-label'
};

var cssClasses = {
  ROOT: 'mdc-icon-toggle',
  DISABLED: 'mdc-icon-toggle--disabled'
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(40);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCIconToggleFoundation = function (_MDCFoundation) {
  _inherits(MDCIconToggleFoundation, _MDCFoundation);

  _createClass(MDCIconToggleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        setText: function setText() /* text: string */{},
        getTabIndex: function getTabIndex() {
          return (/* number */0
          );
        },
        setTabIndex: function setTabIndex() /* tabIndex: number */{},
        getAttr: function getAttr() {
          return (/* name: string */ /* string */''
          );
        },
        setAttr: function setAttr() /* name: string, value: string */{},
        rmAttr: function rmAttr() /* name: string */{},
        notifyChange: function notifyChange() /* evtData: {isOn: boolean} */{}
      };
    }
  }]);

  function MDCIconToggleFoundation(adapter) {
    _classCallCheck(this, MDCIconToggleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCIconToggleFoundation.__proto__ || Object.getPrototypeOf(MDCIconToggleFoundation)).call(this, _extends(MDCIconToggleFoundation.defaultAdapter, adapter)));

    _this.on_ = false;
    _this.disabled_ = false;
    _this.savedTabIndex_ = -1;
    _this.toggleOnData_ = null;
    _this.toggleOffData_ = null;
    _this.clickHandler_ = function () {
      return _this.toggleFromEvt_();
    };
    _this.isHandlingKeydown_ = false;
    _this.keydownHandler_ = function (evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = true;
        return evt.preventDefault();
      }
    };
    _this.keyupHandler_ = function (evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = false;
        _this.toggleFromEvt_();
      }
    };
    return _this;
  }

  _createClass(MDCIconToggleFoundation, [{
    key: 'init',
    value: function init() {
      this.refreshToggleData();
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
    }
  }, {
    key: 'refreshToggleData',
    value: function refreshToggleData() {
      var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
          DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
          DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;

      this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
      this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
    }
  }, {
    key: 'toggleFromEvt_',
    value: function toggleFromEvt_() {
      this.toggle();
      var isOn = this.on_;

      this.adapter_.notifyChange({ isOn: isOn });
    }
  }, {
    key: 'isOn',
    value: function isOn() {
      return this.on_;
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;

      this.on_ = isOn;

      var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
          ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
          ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;

      var _ref = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
          content = _ref.content,
          label = _ref.label,
          cssClass = _ref.cssClass;

      var _ref2 = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
          classToRemove = _ref2.cssClass;

      if (this.on_) {
        this.adapter_.setAttr(ARIA_PRESSED, 'true');
      } else {
        this.adapter_.setAttr(ARIA_PRESSED, 'false');
      }

      if (classToRemove) {
        this.adapter_.removeClass(classToRemove);
      }
      if (cssClass) {
        this.adapter_.addClass(cssClass);
      }
      if (content) {
        this.adapter_.setText(content);
      }
      if (label) {
        this.adapter_.setAttr(ARIA_LABEL, label);
      }
    }
  }, {
    key: 'parseJsonDataAttr_',
    value: function parseJsonDataAttr_(dataAttr) {
      var val = this.adapter_.getAttr(dataAttr);
      if (!val) {
        return {};
      }
      return JSON.parse(val);
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled_;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(isDisabled) {
      this.disabled_ = isDisabled;

      var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
      var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;


      if (this.disabled_) {
        this.savedTabIndex = this.adapter_.getTabIndex();
        this.adapter_.setTabIndex(-1);
        this.adapter_.setAttr(ARIA_DISABLED, 'true');
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.setTabIndex(this.savedTabIndex);
        this.adapter_.rmAttr(ARIA_DISABLED);
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'isKeyboardActivated',
    value: function isKeyboardActivated() {
      return this.isHandlingKeydown_;
    }
  }]);

  return MDCIconToggleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCIconToggleFoundation);


function isSpace(_ref3) {
  var key = _ref3.key,
      keyCode = _ref3.keyCode;

  return key && key === 'Space' || keyCode === 32;
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-simple-menu',
  OPEN: 'mdc-simple-menu--open',
  ANIMATING: 'mdc-simple-menu--animating',
  TOP_RIGHT: 'mdc-simple-menu--open-from-top-right',
  BOTTOM_LEFT: 'mdc-simple-menu--open-from-bottom-left',
  BOTTOM_RIGHT: 'mdc-simple-menu--open-from-bottom-right'
};

var strings = {
  ITEMS_SELECTOR: '.mdc-simple-menu__items'
};

var numbers = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of the menu animation.
  TRANSITION_DURATION_MS: 300,
  // The menu starts its open animation with the X axis at this time value (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
  TRANSITION_X1: 0,
  TRANSITION_Y1: 0,
  TRANSITION_X2: 0.2,
  TRANSITION_Y2: 1
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var MDCSimpleMenuFoundation = function (_MDCFoundation) {
  _inherits(MDCSimpleMenuFoundation, _MDCFoundation);

  _createClass(MDCSimpleMenuFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        getInnerDimensions: function getInnerDimensions() {
          return (/* { width: number, height: number } */{}
          );
        },
        hasAnchor: function hasAnchor() {
          return (/* boolean */false
          );
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return (
            /* { width: number, height: number, top: number, right: number, bottom: number, left: number } */{}
          );
        },
        getWindowDimensions: function getWindowDimensions() {
          return (/* { width: number, height: number } */{}
          );
        },
        setScale: function setScale() /* x: number, y: number */{},
        setInnerScale: function setInnerScale() /* x: number, y: number */{},
        getNumberOfItems: function getNumberOfItems() {
          return (/* number */0
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        registerDocumentClickHandler: function registerDocumentClickHandler() /* handler: EventListener */{},
        deregisterDocumentClickHandler: function deregisterDocumentClickHandler() /* handler: EventListener */{},
        getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
          return (/* index: number */ /* {top: number, height: number} */{}
          );
        },
        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() /* index: number, value: string */{},
        getIndexForEventTarget: function getIndexForEventTarget() {
          return (/* target: EventTarget */ /* number */0
          );
        },
        notifySelected: function notifySelected() /* evtData: {index: number} */{},
        notifyCancel: function notifyCancel() {},
        saveFocus: function saveFocus() {},
        restoreFocus: function restoreFocus() {},
        isFocused: function isFocused() {
          return (/* boolean */false
          );
        },
        focus: function focus() {},
        getFocusedItemIndex: function getFocusedItemIndex() {
          return (/* number */-1
          );
        },
        focusItemAtIndex: function focusItemAtIndex() /* index: number */{},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        setTransformOrigin: function setTransformOrigin() /* origin: string */{},
        setPosition: function setPosition() /* position: { top: string, right: string, bottom: string, left: string } */{},
        getAccurateTime: function getAccurateTime() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSimpleMenuFoundation(adapter) {
    _classCallCheck(this, MDCSimpleMenuFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSimpleMenuFoundation.__proto__ || Object.getPrototypeOf(MDCSimpleMenuFoundation)).call(this, _extends(MDCSimpleMenuFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handlePossibleSelected_(evt);
    };
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeyboardDown_(evt);
    };
    _this.keyupHandler_ = function (evt) {
      return _this.handleKeyboardUp_(evt);
    };
    _this.documentClickHandler_ = function () {
      _this.adapter_.notifyCancel();
      _this.close();
    };
    _this.isOpen_ = false;
    _this.startScaleX_ = 0;
    _this.startScaleY_ = 0;
    _this.targetScale_ = 1;
    _this.scaleX_ = 0;
    _this.scaleY_ = 0;
    _this.running_ = false;
    _this.selectedTriggerTimerId_ = 0;
    _this.animationRequestId_ = 0;
    return _this;
  }

  _createClass(MDCSimpleMenuFoundation, [{
    key: 'init',
    value: function init() {
      var _MDCSimpleMenuFoundat = MDCSimpleMenuFoundation.cssClasses,
          ROOT = _MDCSimpleMenuFoundat.ROOT,
          OPEN = _MDCSimpleMenuFoundat.OPEN;


      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      }

      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      clearTimeout(this.selectedTriggerTimerId_);
      // Cancel any currently running animations.
      cancelAnimationFrame(this.animationRequestId_);
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
    }

    // Calculate transition delays for individual menu items, so that they fade in one at a time.

  }, {
    key: 'applyTransitionDelays_',
    value: function applyTransitionDelays_() {
      var _MDCSimpleMenuFoundat2 = MDCSimpleMenuFoundation.cssClasses,
          BOTTOM_LEFT = _MDCSimpleMenuFoundat2.BOTTOM_LEFT,
          BOTTOM_RIGHT = _MDCSimpleMenuFoundat2.BOTTOM_RIGHT;

      var numItems = this.adapter_.getNumberOfItems();
      var height = this.dimensions_.height;

      var transitionDuration = MDCSimpleMenuFoundation.numbers.TRANSITION_DURATION_MS / 1000;
      var start = MDCSimpleMenuFoundation.numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

      for (var index = 0; index < numItems; index++) {
        var _adapter_$getYParamsF = this.adapter_.getYParamsForItemAtIndex(index),
            itemTop = _adapter_$getYParamsF.top,
            itemHeight = _adapter_$getYParamsF.height;

        this.itemHeight_ = itemHeight;
        var itemDelayFraction = itemTop / height;
        if (this.adapter_.hasClass(BOTTOM_LEFT) || this.adapter_.hasClass(BOTTOM_RIGHT)) {
          itemDelayFraction = (height - itemTop - itemHeight) / height;
        }
        var itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
        // Use toFixed() here to normalize CSS unit precision across browsers
        this.adapter_.setTransitionDelayForItemAtIndex(index, itemDelay.toFixed(3) + 's');
      }
    }

    // Remove transition delays from menu items.

  }, {
    key: 'removeTransitionDelays_',
    value: function removeTransitionDelays_() {
      var numItems = this.adapter_.getNumberOfItems();
      for (var i = 0; i < numItems; i++) {
        this.adapter_.setTransitionDelayForItemAtIndex(i, null);
      }
    }

    // Animate menu opening or closing.

  }, {
    key: 'animationLoop_',
    value: function animationLoop_() {
      var _this2 = this;

      var time = this.adapter_.getAccurateTime();
      var _MDCSimpleMenuFoundat3 = MDCSimpleMenuFoundation.numbers,
          TRANSITION_DURATION_MS = _MDCSimpleMenuFoundat3.TRANSITION_DURATION_MS,
          TRANSITION_X1 = _MDCSimpleMenuFoundat3.TRANSITION_X1,
          TRANSITION_Y1 = _MDCSimpleMenuFoundat3.TRANSITION_Y1,
          TRANSITION_X2 = _MDCSimpleMenuFoundat3.TRANSITION_X2,
          TRANSITION_Y2 = _MDCSimpleMenuFoundat3.TRANSITION_Y2,
          TRANSITION_SCALE_ADJUSTMENT_X = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_X,
          TRANSITION_SCALE_ADJUSTMENT_Y = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_Y;

      var currentTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])((time - this.startTime_) / TRANSITION_DURATION_MS);

      // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
      var currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X));
      // No time-shifting on the Y axis when closing.
      var currentTimeY = currentTime;

      var startScaleY = this.startScaleY_;
      if (this.targetScale_ === 1) {
        // Start with the menu at the height of a single item.
        if (this.itemHeight_) {
          startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
        }
        // X axis moves faster, so time-shift forward.
        currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
        // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
        currentTimeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y));
      }

      // Apply cubic bezier easing independently to each axis.
      var easeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* bezierProgress */])(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
      var easeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* bezierProgress */])(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

      // Calculate the scales to apply to the outer container and inner container.
      this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * easeX;
      var invScaleX = 1 / (this.scaleX_ === 0 ? 1 : this.scaleX_);
      this.scaleY_ = startScaleY + (this.targetScale_ - startScaleY) * easeY;
      var invScaleY = 1 / (this.scaleY_ === 0 ? 1 : this.scaleY_);

      // Apply scales.
      this.adapter_.setScale(this.scaleX_, this.scaleY_);
      this.adapter_.setInnerScale(invScaleX, invScaleY);

      // Stop animation when we've covered the entire 0 - 1 range of time.
      if (currentTime < 1) {
        this.animationRequestId_ = requestAnimationFrame(function () {
          return _this2.animationLoop_();
        });
      } else {
        this.animationRequestId_ = 0;
        this.running_ = false;
        this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      }
    }

    // Starts the open or close animation.

  }, {
    key: 'animateMenu_',
    value: function animateMenu_() {
      var _this3 = this;

      this.startTime_ = this.adapter_.getAccurateTime();
      this.startScaleX_ = this.scaleX_;
      this.startScaleY_ = this.scaleY_;

      this.targetScale_ = this.isOpen_ ? 1 : 0;

      if (!this.running_) {
        this.running_ = true;
        this.animationRequestId_ = requestAnimationFrame(function () {
          return _this3.animationLoop_();
        });
      }
    }
  }, {
    key: 'focusOnOpen_',
    value: function focusOnOpen_(focusIndex) {
      if (focusIndex === null) {
        // First, try focusing the menu.
        this.adapter_.focus();
        // If that doesn't work, focus first item instead.
        if (!this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        }
      } else {
        this.adapter_.focusItemAtIndex(focusIndex);
      }
    }

    // Handle keys that we want to repeat on hold (tab and arrows).

  }, {
    key: 'handleKeyboardDown_',
    value: function handleKeyboardDown_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key,
          shiftKey = evt.shiftKey;

      var isTab = key === 'Tab' || keyCode === 9;
      var isArrowUp = key === 'ArrowUp' || keyCode === 38;
      var isArrowDown = key === 'ArrowDown' || keyCode === 40;
      var isSpace = key === 'Space' || keyCode === 32;

      var focusedItemIndex = this.adapter_.getFocusedItemIndex();
      var lastItemIndex = this.adapter_.getNumberOfItems() - 1;

      if (shiftKey && isTab && focusedItemIndex === 0) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
        evt.preventDefault();
        return false;
      }

      if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
        this.adapter_.focusItemAtIndex(0);
        evt.preventDefault();
        return false;
      }

      // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
      if (isArrowUp || isArrowDown || isSpace) {
        evt.preventDefault();
      }

      if (isArrowUp) {
        if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(lastItemIndex);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
        }
      } else if (isArrowDown) {
        if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
        }
      }

      return true;
    }

    // Handle keys that we don't want to repeat on hold (Enter, Space, Escape).

  }, {
    key: 'handleKeyboardUp_',
    value: function handleKeyboardUp_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key;

      var isEnter = key === 'Enter' || keyCode === 13;
      var isSpace = key === 'Space' || keyCode === 32;
      var isEscape = key === 'Escape' || keyCode === 27;

      if (isEnter || isSpace) {
        this.handlePossibleSelected_(evt);
      }

      if (isEscape) {
        this.adapter_.notifyCancel();
        this.close();
      }

      return true;
    }
  }, {
    key: 'handlePossibleSelected_',
    value: function handlePossibleSelected_(evt) {
      var _this4 = this;

      var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
      if (targetIndex < 0) {
        return;
      }
      // Debounce multiple selections
      if (this.selectedTriggerTimerId_) {
        return;
      }
      this.selectedTriggerTimerId_ = setTimeout(function () {
        _this4.selectedTriggerTimerId_ = 0;
        _this4.close();
        _this4.adapter_.notifySelected({ index: targetIndex });
      }, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].SELECTED_TRIGGER_DELAY);
    }
  }, {
    key: 'autoPosition_',
    value: function autoPosition_() {
      var _position;

      if (!this.adapter_.hasAnchor()) {
        return;
      }

      // Defaults: open from the top left.
      var vertical = 'top';
      var horizontal = 'left';

      var anchor = this.adapter_.getAnchorDimensions();
      var windowDimensions = this.adapter_.getWindowDimensions();

      var topOverflow = anchor.top + this.dimensions_.height - windowDimensions.height;
      var bottomOverflow = this.dimensions_.height - anchor.bottom;
      var extendsBeyondTopBounds = topOverflow > 0;

      if (extendsBeyondTopBounds) {
        if (bottomOverflow < topOverflow) {
          vertical = 'bottom';
        }
      }

      var leftOverflow = anchor.left + this.dimensions_.width - windowDimensions.width;
      var rightOverflow = this.dimensions_.width - anchor.right;
      var extendsBeyondLeftBounds = leftOverflow > 0;
      var extendsBeyondRightBounds = rightOverflow > 0;

      if (this.adapter_.isRtl()) {
        // In RTL, we prefer to open from the right.
        horizontal = 'right';
        if (extendsBeyondRightBounds && leftOverflow < rightOverflow) {
          horizontal = 'left';
        }
      } else if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
        horizontal = 'right';
      }

      var position = (_position = {}, _defineProperty(_position, horizontal, '0'), _defineProperty(_position, vertical, '0'), _position);

      this.adapter_.setTransformOrigin(vertical + ' ' + horizontal);
      this.adapter_.setPosition(position);
    }

    // Open the menu.

  }, {
    key: 'open',
    value: function open() {
      var _this5 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.adapter_.saveFocus();
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      this.animationRequestId_ = requestAnimationFrame(function () {
        _this5.dimensions_ = _this5.adapter_.getInnerDimensions();
        _this5.applyTransitionDelays_();
        _this5.autoPosition_();
        _this5.animateMenu_();
        _this5.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
        _this5.focusOnOpen_(focusIndex);
        _this5.adapter_.registerDocumentClickHandler(_this5.documentClickHandler_);
      });
      this.isOpen_ = true;
    }

    // Close the menu.

  }, {
    key: 'close',
    value: function close() {
      var _this6 = this;

      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      requestAnimationFrame(function () {
        _this6.removeTransitionDelays_();
        _this6.animateMenu_();
        _this6.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
      });
      this.isOpen_ = false;
      this.adapter_.restoreFocus();
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }]);

  return MDCSimpleMenuFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCSimpleMenuFoundation);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSimpleMenu; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCSimpleMenu = function (_MDCComponent) {
  _inherits(MDCSimpleMenu, _MDCComponent);

  function MDCSimpleMenu() {
    _classCallCheck(this, MDCSimpleMenu);

    return _possibleConstructorReturn(this, (MDCSimpleMenu.__proto__ || Object.getPrototypeOf(MDCSimpleMenu)).apply(this, arguments));
  }

  _createClass(MDCSimpleMenu, [{
    key: 'show',
    value: function show() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.foundation_.open({ focusIndex: focusIndex });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.foundation_.close();
    }

    /* Return the item container element inside the component. */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.itemsContainer_);
        },
        getInnerDimensions: function getInnerDimensions() {
          var itemsContainer = _this2.itemsContainer_;

          return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
        },
        hasAnchor: function hasAnchor() {
          return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return _this2.root_.parentElement.getBoundingClientRect();
        },
        getWindowDimensions: function getWindowDimensions() {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        setScale: function setScale(x, y) {
          _this2.root_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window)] = 'scale(' + x + ', ' + y + ')';
        },
        setInnerScale: function setInnerScale(x, y) {
          _this2.itemsContainer_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window)] = 'scale(' + x + ', ' + y + ')';
        },
        getNumberOfItems: function getNumberOfItems() {
          return _this2.items.length;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        registerDocumentClickHandler: function registerDocumentClickHandler(handler) {
          return document.addEventListener('click', handler);
        },
        deregisterDocumentClickHandler: function deregisterDocumentClickHandler(handler) {
          return document.removeEventListener('click', handler);
        },
        getYParamsForItemAtIndex: function getYParamsForItemAtIndex(index) {
          var _items$index = _this2.items[index],
              top = _items$index.offsetTop,
              height = _items$index.offsetHeight;

          return { top: top, height: height };
        },
        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex(index, value) {
          return _this2.items[index].style.setProperty('transition-delay', value);
        },
        getIndexForEventTarget: function getIndexForEventTarget(target) {
          return _this2.items.indexOf(target);
        },
        notifySelected: function notifySelected(evtData) {
          return _this2.emit('MDCSimpleMenu:selected', {
            index: evtData.index,
            item: _this2.items[evtData.index]
          });
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit('MDCSimpleMenu:cancel');
        },
        saveFocus: function saveFocus() {
          _this2.previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (_this2.previousFocus_) {
            _this2.previousFocus_.focus();
          }
        },
        isFocused: function isFocused() {
          return document.activeElement === _this2.root_;
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        getFocusedItemIndex: function getFocusedItemIndex() {
          return _this2.items.indexOf(document.activeElement);
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          return _this2.items[index].focus();
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this2.root_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window) + '-origin'] = origin;
        },
        setPosition: function setPosition(position) {
          _this2.root_.style.left = 'left' in position ? position.left : null;
          _this2.root_.style.right = 'right' in position ? position.right : null;
          _this2.root_.style.top = 'top' in position ? position.top : null;
          _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        getAccurateTime: function getAccurateTime() {
          return window.performance.now();
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }, {
    key: 'itemsContainer_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ITEMS_SELECTOR);
    }

    /* Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     */

  }, {
    key: 'items',
    get: function get() {
      var itemsContainer = this.itemsContainer_;

      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSimpleMenu(root);
    }
  }]);

  return MDCSimpleMenu;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

var cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(45);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    _classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
  }

  _createClass(MDCRadioFoundation, [{
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        disabled: false,
        value: null
      };
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{}
      };
    }
  }]);

  return MDCRadioFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRadioFoundation);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    // We compute this property so that we are not querying information about the client
    // until the point in time where the foundation requests it. This prevents scenarios where
    // client-side feature-detection may happen too early, such as when components are rendered on the server
    // and then initialized at mount time on the client.
    get: function get() {
      return this.adapter_.browserSupportsCssVars();
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;
    _this.frame_ = { width: 0, height: 0 };
    _this.activationState_ = _this.defaultActivationState_();
    _this.xfDuration_ = 0;
    _this.initialSize_ = 0;
    _this.maxRadius_ = 0;
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];
    _this.listeners_ = {
      activate: function activate(e) {
        return _this.activate_(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate_(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      }
    };
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.fgScale_ = 0;
    _this.activationTimer_ = 0;
    _this.activationAnimationHasEnded_ = false;
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };
    return _this;
  }

  _createClass(MDCRippleFoundation, [{
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationStartTime: 0,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_) {
        return;
      }
      this.addEventListeners_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'addEventListeners_',
    value: function addEventListeners_() {
      var _this3 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
        });
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this4 = this;

      var activationState = this.activationState_;

      if (activationState.isActivated) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
      activationState.activationStartTime = Date.now();

      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this4.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this4.activationState_ = _this4.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.activate_(null);
    }
  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this5 = this;

      var _MDCRippleFoundation$2 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$3.BG_ACTIVE_FILL,
          FG_DEACTIVATION = _MDCRippleFoundation$3.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$3.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(BG_ACTIVE_FILL);
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this5.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }
  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var activationState = this.activationState_;
      var activationEvent = activationState.activationEvent,
          wasActivatedByPointer = activationState.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getNormalizedEventCoords */])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }
  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_ = this.activationState_,
          hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
          isActivated = _activationState_.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        // Note that we don't need to remove this here since it's removed on re-activation.
        this.adapter_.addClass(FG_DEACTIVATION);
      }
    }
  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$4.BG_ACTIVE_FILL,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;

      this.adapter_.removeClass(BG_ACTIVE_FILL);
      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this6 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.

      if (!activationState.isActivated) {
        return;
      }
      // Programmatic deactivation.
      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(evtObject, _extends({}, activationState));
        });
        this.activationState_ = this.defaultActivationState_();
        return;
      }

      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
      var expectedActivationType = activationState.activationEvent.type;
      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
      // Essentially, what we need to do here is decouple the deactivation UX from the actual
      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
      // another.
      var needsDeactivationUX = actualActivationType === expectedActivationType;
      var needsActualDeactivation = needsDeactivationUX;
      if (activationState.wasActivatedByPointer) {
        needsActualDeactivation = e.type === 'mouseup';
      }

      var state = _extends({}, activationState);
      requestAnimationFrame(function () {
        if (needsDeactivationUX) {
          _this6.activationState_.hasDeactivationUXRun = true;
          _this6.animateDeactivation_(e, state);
        }

        if (needsActualDeactivation) {
          _this6.activationState_ = _this6.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_(null);
    }
  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;
      var BG_FOCUSED = MDCRippleFoundation.cssClasses.BG_FOCUSED;

      if (wasActivatedByPointer || wasElementMadeActive) {
        // Remove class left over by element being focused
        this.adapter_.removeClass(BG_FOCUSED);
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this7 = this;

      if (!this.isSupported_) {
        return;
      }
      this.removeEventListeners_();

      var _MDCRippleFoundation$5 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$5.ROOT,
          UNBOUNDED = _MDCRippleFoundation$5.UNBOUNDED;

      requestAnimationFrame(function () {
        _this7.adapter_.removeClass(ROOT);
        _this7.adapter_.removeClass(UNBOUNDED);
        _this7.removeCssVars_();
      });
    }
  }, {
    key: 'removeEventListeners_',
    value: function removeEventListeners_() {
      var _this8 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this8.adapter_.deregisterInteractionHandler(info[k], _this8.listeners_[k]);
        });
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this9 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this9.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this10 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this10.layoutInternal_();
        _this10.layoutFrame_ = 0;
      });
    }
  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      this.frame_ = this.adapter_.computeBoundingRect();

      var maxDim = Math.max(this.frame_.height, this.frame_.width);
      var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

      // 60% of the largest dimension of the surface
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

      // Diameter of the surface + 10px
      this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;
      this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
      this.updateLayoutCssVars_();
    }
  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
          VAR_SURFACE_WIDTH = _MDCRippleFoundation$6.VAR_SURFACE_WIDTH,
          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$6.VAR_SURFACE_HEIGHT,
          VAR_FG_SIZE = _MDCRippleFoundation$6.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$6.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$6.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$6.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }
  }]);

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-select',
  OPEN: 'mdc-select--open',
  DISABLED: 'mdc-select--disabled'
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(49);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var OPENER_KEYS = [{ key: 'ArrowUp', keyCode: 38, forType: 'keydown' }, { key: 'ArrowDown', keyCode: 40, forType: 'keydown' }, { key: 'Space', keyCode: 32, forType: 'keyup' }];

var MDCSelectFoundation = function (_MDCFoundation) {
  _inherits(MDCSelectFoundation, _MDCFoundation);

  _createClass(MDCSelectFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAttr: function setAttr() /* attr: string, value: string */{},
        rmAttr: function rmAttr() /* attr: string */{},
        computeBoundingRect: function computeBoundingRect() {
          return (/* {left: number, top: number} */{ left: 0, top: 0 }
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        focus: function focus() {},
        makeTabbable: function makeTabbable() {},
        makeUntabbable: function makeUntabbable() {},
        getComputedStyleValue: function getComputedStyleValue() {
          return (/* propertyName: string */ /* string */''
          );
        },
        setStyle: function setStyle() /* propertyName: string, value: string */{},
        create2dRenderingContext: function create2dRenderingContext() {
          return (/* {font: string, measureText: (string) => {width: number}} */{
              font: '',
              measureText: function measureText() {
                return { width: 0 };
              }
            }
          );
        },
        setMenuElStyle: function setMenuElStyle() /* propertyName: string, value: string */{},
        setMenuElAttr: function setMenuElAttr() /* attr: string, value: string */{},
        rmMenuElAttr: function rmMenuElAttr() /* attr: string */{},
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return (/* number */0
          );
        },
        openMenu: function openMenu() /* focusIndex: number */{},
        isMenuOpen: function isMenuOpen() {
          return (/* boolean */false
          );
        },
        setSelectedTextContent: function setSelectedTextContent() /* textContent: string */{},
        getNumberOfOptions: function getNumberOfOptions() {
          return (/* number */0
          );
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        getValueForOptionAtIndex: function getValueForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex() /* index: number, attr: string, value: string */{},
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() /* index: number, attr: string */{},
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex() {
          return (/* index: number */ /* number */0
          );
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler() /* type: string, handler: EventListener */{},
        notifyChange: function notifyChange() {},
        getWindowInnerHeight: function getWindowInnerHeight() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSelectFoundation(adapter) {
    _classCallCheck(this, MDCSelectFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSelectFoundation.__proto__ || Object.getPrototypeOf(MDCSelectFoundation)).call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));

    _this.ctx_ = null;
    _this.selectedIndex_ = -1;
    _this.disabled_ = false;
    _this.displayHandler_ = function (evt) {
      evt.preventDefault();
      if (!_this.adapter_.isMenuOpen()) {
        _this.open_();
      }
    };
    _this.displayViaKeyboardHandler_ = function (evt) {
      return _this.handleDisplayViaKeyboard_(evt);
    };
    _this.selectionHandler_ = function (_ref) {
      var detail = _ref.detail;
      var index = detail.index;

      _this.close_();
      if (index !== _this.selectedIndex_) {
        _this.setSelectedIndex(index);
        _this.adapter_.notifyChange();
      }
    };
    _this.cancelHandler_ = function () {
      _this.close_();
    };
    return _this;
  }

  _createClass(MDCSelectFoundation, [{
    key: 'init',
    value: function init() {
      this.ctx_ = this.adapter_.create2dRenderingContext();
      this.adapter_.registerInteractionHandler('click', this.displayHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
      this.resize();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Drop reference to context object to prevent potential leaks
      this.ctx_ = null;
      this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.selectedIndex_ >= 0 ? this.adapter_.getValueForOptionAtIndex(this.selectedIndex_) : '';
    }
  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex() {
      return this.selectedIndex_;
    }
  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      var prevSelectedIndex = this.selectedIndex_;
      if (prevSelectedIndex >= 0) {
        this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected');
      }

      this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfOptions() ? index : -1;
      var selectedTextContent = '';
      if (this.selectedIndex_ >= 0) {
        selectedTextContent = this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim();
        this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
      }
      this.adapter_.setSelectedTextContent(selectedTextContent);
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled_;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;

      this.disabled_ = disabled;
      if (this.disabled_) {
        this.adapter_.addClass(DISABLED);
        this.adapter_.setAttr('aria-disabled', 'true');
        this.adapter_.makeUntabbable();
      } else {
        this.adapter_.removeClass(DISABLED);
        this.adapter_.rmAttr('aria-disabled');
        this.adapter_.makeTabbable();
      }
    }
  }, {
    key: 'resize',
    value: function resize() {
      var font = this.adapter_.getComputedStyleValue('font');
      var letterSpacing = parseFloat(this.adapter_.getComputedStyleValue('letter-spacing'));
      if (font) {
        this.ctx_.font = font;
      } else {
        var primaryFontFamily = this.adapter_.getComputedStyleValue('font-family').split(',')[0];
        var fontSize = this.adapter_.getComputedStyleValue('font-size');
        this.ctx_.font = fontSize + ' ' + primaryFontFamily;
      }

      var maxTextLength = 0;
      for (var i = 0, l = this.adapter_.getNumberOfOptions(); i < l; i++) {
        var txt = this.adapter_.getTextForOptionAtIndex(i).trim();

        var _ctx_$measureText = this.ctx_.measureText(txt),
            width = _ctx_$measureText.width;

        var addedSpace = letterSpacing * txt.length;
        maxTextLength = Math.max(maxTextLength, Math.ceil(width + addedSpace));
      }
      this.adapter_.setStyle('width', maxTextLength + 'px');
    }
  }, {
    key: 'open_',
    value: function open_() {
      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

      var focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;

      var _computeMenuStylesFor = this.computeMenuStylesForOpenAtIndex_(focusIndex),
          left = _computeMenuStylesFor.left,
          top = _computeMenuStylesFor.top,
          transformOrigin = _computeMenuStylesFor.transformOrigin;

      this.adapter_.setMenuElStyle('left', left);
      this.adapter_.setMenuElStyle('top', top);
      this.adapter_.setMenuElStyle('transform-origin', transformOrigin);
      this.adapter_.addClass(OPEN);
      this.adapter_.openMenu(focusIndex);
    }
  }, {
    key: 'computeMenuStylesForOpenAtIndex_',
    value: function computeMenuStylesForOpenAtIndex_(index) {
      var innerHeight = this.adapter_.getWindowInnerHeight();

      var _adapter_$computeBoun = this.adapter_.computeBoundingRect(),
          left = _adapter_$computeBoun.left,
          top = _adapter_$computeBoun.top;

      this.adapter_.setMenuElAttr('aria-hidden', 'true');
      this.adapter_.setMenuElStyle('display', 'block');
      var menuHeight = this.adapter_.getMenuElOffsetHeight();
      var itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
      this.adapter_.setMenuElStyle('display', '');
      this.adapter_.rmMenuElAttr('aria-hidden');

      var adjustedTop = top - itemOffsetTop;
      var adjustedHeight = menuHeight - itemOffsetTop;
      var overflowsTop = adjustedTop < 0;
      var overflowsBottom = adjustedTop + adjustedHeight > innerHeight;
      if (overflowsTop) {
        adjustedTop = 0;
      } else if (overflowsBottom) {
        adjustedTop = Math.max(0, adjustedTop - adjustedHeight);
      }

      return {
        left: left + 'px',
        top: adjustedTop + 'px',
        transformOrigin: 'center ' + itemOffsetTop + 'px'
      };
    }
  }, {
    key: 'close_',
    value: function close_() {
      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

      this.adapter_.removeClass(OPEN);
      this.adapter_.focus();
    }
  }, {
    key: 'handleDisplayViaKeyboard_',
    value: function handleDisplayViaKeyboard_(evt) {
      // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
      // global.
      var EVENT_PHASE_AT_TARGET = 2;
      if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
        return;
      }

      // Prevent pressing space down from scrolling the page
      var isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
      if (isSpaceDown) {
        evt.preventDefault();
      }

      var isOpenerKey = OPENER_KEYS.some(function (_ref2) {
        var key = _ref2.key,
            keyCode = _ref2.keyCode,
            forType = _ref2.forType;

        return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
      });
      if (isOpenerKey) {
        this.displayHandler_(evt);
      }
    }
  }]);

  return MDCSelectFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCSelectFoundation);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-snackbar',
  TEXT: 'mdc-snackbar__text',
  ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
  ACTION_BUTTON: 'mdc-snackbar__action-button',
  ACTIVE: 'mdc-snackbar--active',
  MULTILINE: 'mdc-snackbar--multiline',
  ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom'
};

var strings = {
  TEXT_SELECTOR: '.mdc-snackbar__text',
  ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
  ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button'
};

var numbers = {
  MESSAGE_TIMEOUT: 2750
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(51);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCSnackbarFoundation = function (_MDCFoundation) {
  _inherits(MDCSnackbarFoundation, _MDCFoundation);

  _createClass(MDCSnackbarFoundation, [{
    key: 'active',
    get: function get() {
      return this.active_;
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAriaHidden: function setAriaHidden() {},
        unsetAriaHidden: function unsetAriaHidden() {},
        setMessageText: function setMessageText() /* message: string */{},
        setActionText: function setActionText() /* actionText: string */{},
        setActionAriaHidden: function setActionAriaHidden() {},
        unsetActionAriaHidden: function unsetActionAriaHidden() {},
        registerActionClickHandler: function registerActionClickHandler() /* handler: EventListener */{},
        deregisterActionClickHandler: function deregisterActionClickHandler() /* handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{}
      };
    }
  }]);

  function MDCSnackbarFoundation(adapter) {
    _classCallCheck(this, MDCSnackbarFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSnackbarFoundation.__proto__ || Object.getPrototypeOf(MDCSnackbarFoundation)).call(this, _extends(MDCSnackbarFoundation.defaultAdapter, adapter)));

    _this.active_ = false;
    _this.queue_ = [];
    _this.actionClickHandler_ = function () {
      return _this.invokeAction_();
    };
    return _this;
  }

  _createClass(MDCSnackbarFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerActionClickHandler(this.actionClickHandler_);
      this.adapter_.setAriaHidden();
      this.adapter_.setActionAriaHidden();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
    }
  }, {
    key: 'show',
    value: function show(data) {
      if (!data) {
        throw new Error('Please provide a data object with at least a message to display.');
      }
      if (!data.message) {
        throw new Error('Please provide a message to be displayed.');
      }
      if (data.actionHandler && !data.actionText) {
        throw new Error('Please provide action text with the handler.');
      }

      if (this.active) {
        this.queue_.push(data);
        return;
      }

      var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE,
          MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].MULTILINE,
          ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTION_ON_BOTTOM;
      var MESSAGE_TIMEOUT = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].MESSAGE_TIMEOUT;


      this.adapter_.setMessageText(data.message);

      if (data.multiline) {
        this.adapter_.addClass(MULTILINE);
        if (data.actionOnBottom) {
          this.adapter_.addClass(ACTION_ON_BOTTOM);
        }
      }

      if (data.actionHandler) {
        this.adapter_.setActionText(data.actionText);
        this.actionHandler_ = data.actionHandler;
        this.setActionHidden_(false);
      } else {
        this.setActionHidden_(true);
        this.actionHandler_ = null;
        this.adapter_.setActionText(null);
      }

      this.active_ = true;
      this.adapter_.addClass(ACTIVE);
      this.adapter_.unsetAriaHidden();

      setTimeout(this.cleanup_.bind(this), data.timeout || MESSAGE_TIMEOUT);
    }
  }, {
    key: 'invokeAction_',
    value: function invokeAction_() {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    }
  }, {
    key: 'cleanup_',
    value: function cleanup_() {
      var _this2 = this;

      var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE,
          MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].MULTILINE,
          ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTION_ON_BOTTOM;


      this.adapter_.removeClass(ACTIVE);

      var handler = function handler() {
        _this2.adapter_.deregisterTransitionEndHandler(handler);
        _this2.adapter_.removeClass(MULTILINE);
        _this2.adapter_.removeClass(ACTION_ON_BOTTOM);
        _this2.setActionHidden_(true);
        _this2.adapter_.setMessageText(null);
        _this2.adapter_.setActionText(null);
        _this2.adapter_.setAriaHidden();
        _this2.active_ = false;
        _this2.showNext_();
      };

      this.adapter_.registerTransitionEndHandler(handler);
    }
  }, {
    key: 'showNext_',
    value: function showNext_() {
      if (!this.queue_.length) {
        return;
      }

      this.show(this.queue_.shift());
    }
  }, {
    key: 'setActionHidden_',
    value: function setActionHidden_(isHidden) {
      if (isHidden) {
        this.adapter_.setActionAriaHidden();
      } else {
        this.adapter_.unsetActionAriaHidden();
      }
    }
  }]);

  return MDCSnackbarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCSnackbarFoundation);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  INPUT_SELECTOR: '.mdc-textfield__input',
  LABEL_SELECTOR: '.mdc-textfield__label'
};

var cssClasses = {
  ROOT: 'mdc-textfield',
  UPGRADED: 'mdc-textfield--upgraded',
  DISABLED: 'mdc-textfield--disabled',
  FOCUSED: 'mdc-textfield--focused',
  INVALID: 'mdc-textfield--invalid',
  HELPTEXT_PERSISTENT: 'mdc-textfield-helptext--persistent',
  HELPTEXT_VALIDATION_MSG: 'mdc-textfield-helptext--validation-msg',
  LABEL_FLOAT_ABOVE: 'mdc-textfield__label--float-above'
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(53);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCTextfieldFoundation = function (_MDCFoundation) {
  _inherits(MDCTextfieldFoundation, _MDCFoundation);

  _createClass(MDCTextfieldFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        addClassToLabel: function addClassToLabel() /* className: string */{},
        removeClassFromLabel: function removeClassFromLabel() /* className: string */{},
        addClassToHelptext: function addClassToHelptext() /* className: string */{},
        removeClassFromHelptext: function removeClassFromHelptext() /* className: string */{},
        helptextHasClass: function helptextHasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        registerInputFocusHandler: function registerInputFocusHandler() /* handler: EventListener */{},
        deregisterInputFocusHandler: function deregisterInputFocusHandler() /* handler: EventListener */{},
        registerInputBlurHandler: function registerInputBlurHandler() /* handler: EventListener */{},
        deregisterInputBlurHandler: function deregisterInputBlurHandler() /* handler: EventListener */{},
        registerInputInputHandler: function registerInputInputHandler() /* handler: EventListener */{},
        deregisterInputInputHandler: function deregisterInputInputHandler() /* handler: EventListener */{},
        registerInputKeydownHandler: function registerInputKeydownHandler() /* handler: EventListener */{},
        deregisterInputKeydownHandler: function deregisterInputKeydownHandler() /* handler: EventListener */{},
        setHelptextAttr: function setHelptextAttr() /* name: string, value: string */{},
        removeHelptextAttr: function removeHelptextAttr() /* name: string */{},
        getNativeInput: function getNativeInput() {
          return (/* HTMLInputElement */{}
          );
        }
      };
    }
  }]);

  function MDCTextfieldFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCTextfieldFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTextfieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextfieldFoundation)).call(this, _extends(MDCTextfieldFoundation.defaultAdapter, adapter)));

    _this.receivedUserInput_ = false;
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus_();
    };
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus_();
    };
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus_();
    };
    _this.inputKeydownHandler_ = function () {
      return _this.receivedUserInput_ = true;
    };
    return _this;
  }

  _createClass(MDCTextfieldFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
      this.adapter_.registerInputFocusHandler(this.inputFocusHandler_);
      this.adapter_.registerInputBlurHandler(this.inputBlurHandler_);
      this.adapter_.registerInputInputHandler(this.inputInputHandler_);
      this.adapter_.registerInputKeydownHandler(this.inputKeydownHandler_);

      // Ensure label does not collide with any pre-filled value.
      if (this.getNativeInput_().value) {
        this.adapter_.addClassToLabel(MDCTextfieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.removeClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
      this.adapter_.deregisterInputFocusHandler(this.inputFocusHandler_);
      this.adapter_.deregisterInputBlurHandler(this.inputBlurHandler_);
      this.adapter_.deregisterInputInputHandler(this.inputInputHandler_);
      this.adapter_.deregisterInputKeydownHandler(this.inputKeydownHandler_);
    }
  }, {
    key: 'activateFocus_',
    value: function activateFocus_() {
      var _MDCTextfieldFoundati = MDCTextfieldFoundation.cssClasses,
          FOCUSED = _MDCTextfieldFoundati.FOCUSED,
          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati.LABEL_FLOAT_ABOVE;

      this.adapter_.addClass(FOCUSED);
      this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
      this.showHelptext_();
    }
  }, {
    key: 'autoCompleteFocus_',
    value: function autoCompleteFocus_() {
      if (!this.receivedUserInput_) {
        this.activateFocus_();
      }
    }
  }, {
    key: 'showHelptext_',
    value: function showHelptext_() {
      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

      this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
    }
  }, {
    key: 'deactivateFocus_',
    value: function deactivateFocus_() {
      var _MDCTextfieldFoundati2 = MDCTextfieldFoundation.cssClasses,
          FOCUSED = _MDCTextfieldFoundati2.FOCUSED,
          INVALID = _MDCTextfieldFoundati2.INVALID,
          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati2.LABEL_FLOAT_ABOVE;

      var input = this.getNativeInput_();
      var isValid = input.checkValidity();

      this.adapter_.removeClass(FOCUSED);
      if (!input.value) {
        this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
        this.receivedUserInput_ = false;
      }
      if (isValid) {
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.addClass(INVALID);
      }
      this.updateHelptextOnDeactivation_(isValid);
    }
  }, {
    key: 'updateHelptextOnDeactivation_',
    value: function updateHelptextOnDeactivation_(isValid) {
      var _MDCTextfieldFoundati3 = MDCTextfieldFoundation.cssClasses,
          HELPTEXT_PERSISTENT = _MDCTextfieldFoundati3.HELPTEXT_PERSISTENT,
          HELPTEXT_VALIDATION_MSG = _MDCTextfieldFoundati3.HELPTEXT_VALIDATION_MSG;
      var ROLE = MDCTextfieldFoundation.strings.ROLE;

      var helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
      var helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
      var validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;

      if (validationMsgNeedsDisplay) {
        this.adapter_.setHelptextAttr(ROLE, 'alert');
      } else {
        this.adapter_.removeHelptextAttr(ROLE);
      }

      if (helptextIsPersistent || validationMsgNeedsDisplay) {
        return;
      }
      this.hideHelptext_();
    }
  }, {
    key: 'hideHelptext_',
    value: function hideHelptext_() {
      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

      this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeInput_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCTextfieldFoundation.cssClasses.DISABLED;

      this.getNativeInput_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'getNativeInput_',
    value: function getNativeInput_() {
      return this.adapter_.getNativeInput() || {
        checkValidity: function checkValidity() {
          return true;
        },
        value: '',
        disabled: false
      };
    }
  }]);

  return MDCTextfieldFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTextfieldFoundation);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  FIXED: 'mdc-toolbar--fixed',
  FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
  FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
  TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
  FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
  FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
  FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized'
};

var strings = {
  TITLE_SELECTOR: '.mdc-toolbar__title',
  FLEXIBLE_ROW_SELECTOR: '.mdc-toolbar__row:first-child'
};

var numbers = {
  MAX_TITLE_SIZE: 2.125,
  MIN_TITLE_SIZE: 1.25,
  TOOLBAR_ROW_HEIGHT: 64,
  TOOLBAR_ROW_MOBILE_HEIGHT: 56,
  TOOLBAR_MOBILE_BREAKPOINT: 599
};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(55);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var MDCToolbarFoundation = function (_MDCFoundation) {
  _inherits(MDCToolbarFoundation, _MDCFoundation);

  _createClass(MDCToolbarFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        hasClass: function hasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerScrollHandler: function registerScrollHandler() /* handler: EventListener */{},
        deregisterScrollHandler: function deregisterScrollHandler() /* handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        getViewportWidth: function getViewportWidth() {
          return (/* number */0
          );
        },
        getViewportScrollY: function getViewportScrollY() {
          return (/* number */0
          );
        },
        getOffsetHeight: function getOffsetHeight() {
          return (/* number */0
          );
        },
        getFlexibleRowElementOffsetHeight: function getFlexibleRowElementOffsetHeight() {
          return (/* number */0
          );
        },
        notifyChange: function notifyChange() /* evtData: {flexibleExpansionRatio: number} */{},
        setStyle: function setStyle() /* property: string, value: string */{},
        setStyleForTitleElement: function setStyleForTitleElement() /* property: string, value: string */{},
        setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement() /* property: string, value: string */{},
        setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement() /* property: string, value: string */{}
      };
    }
  }]);

  function MDCToolbarFoundation(adapter) {
    _classCallCheck(this, MDCToolbarFoundation);

    var _this = _possibleConstructorReturn(this, (MDCToolbarFoundation.__proto__ || Object.getPrototypeOf(MDCToolbarFoundation)).call(this, _extends(MDCToolbarFoundation.defaultAdapter, adapter)));

    _this.resizeHandler_ = function () {
      return _this.checkRowHeight_();
    };
    _this.scrollHandler_ = function () {
      return _this.updateToolbarStyles_();
    };
    _this.checkRowHeightFrame_ = 0;
    _this.scrollFrame_ = 0;
    _this.executedLastChange_ = false;

    _this.calculations_ = {
      toolbarRowHeight: 0,
      // Calculated Height ratio. We use ratio to calculate corresponding heights in resize event.
      toolbarRatio: 0, // The ratio of toolbar height to row height
      flexibleExpansionRatio: 0, // The ratio of flexible space height to row height
      maxTranslateYRatio: 0, // The ratio of max toolbar move up distance to row height
      scrollThesholdRatio: 0, // The ratio of max scrollTop that we should listen to to row height
      // Derived Heights based on the above key ratios.
      toolbarHeight: 0,
      flexibleExpansionHeight: 0, // Flexible row minus toolbar height (derived)
      maxTranslateYDistance: 0, // When toolbar only fix last row (derived)
      scrollTheshold: 0
    };
    // Toolbar fixed behavior
    // If toolbar is fixed
    _this.fixed_ = false;
    // If fixed is targeted only at the last row
    _this.fixedLastrow_ = false;
    // Toolbar flexible behavior
    // If the first row is flexible
    _this.hasFlexibleRow_ = false;
    // If use the default behavior
    _this.useFlexDefaultBehavior_ = false;
    return _this;
  }

  _createClass(MDCToolbarFoundation, [{
    key: 'init',
    value: function init() {
      this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
      this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
      this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);
      if (this.hasFlexibleRow_) {
        this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
      }
      this.initKeyRatio_();
      this.setKeyHeights_();
      this.adapter_.registerResizeHandler(this.resizeHandler_);
      this.adapter_.registerScrollHandler(this.scrollHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }
  }, {
    key: 'updateAdjustElementStyles',
    value: function updateAdjustElementStyles() {
      if (this.fixed_) {
        this.adapter_.setStyleForFixedAdjustElement('margin-top', this.calculations_.toolbarHeight + 'px');
      }
    }
  }, {
    key: 'getFlexibleExpansionRatio_',
    value: function getFlexibleExpansionRatio_(scrollTop) {
      // To prevent division by zero when there is no flexibleExpansionHeight
      var delta = 0.0001;
      return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
    }
  }, {
    key: 'checkRowHeight_',
    value: function checkRowHeight_() {
      var _this2 = this;

      cancelAnimationFrame(this.checkRowHeightFrame_);
      this.checkRowHeightFrame_ = requestAnimationFrame(function () {
        return _this2.setKeyHeights_();
      });
    }
  }, {
    key: 'setKeyHeights_',
    value: function setKeyHeights_() {
      var newToolbarRowHeight = this.getRowHeight_();
      if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
        this.calculations_.toolbarRowHeight = newToolbarRowHeight;
        this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
        this.calculations_.flexibleExpansionHeight = this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
        this.calculations_.maxTranslateYDistance = this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
        this.calculations_.scrollTheshold = this.calculations_.scrollThesholdRatio * this.calculations_.toolbarRowHeight;
        this.updateAdjustElementStyles();
        this.updateToolbarStyles_();
      }
    }
  }, {
    key: 'updateToolbarStyles_',
    value: function updateToolbarStyles_() {
      var _this3 = this;

      cancelAnimationFrame(this.scrollFrame_);
      this.scrollFrame_ = requestAnimationFrame(function () {
        var scrollTop = _this3.adapter_.getViewportScrollY();
        var hasScrolledOutOfTheshold = _this3.scrolledOutOfTheshold_(scrollTop);

        if (hasScrolledOutOfTheshold && _this3.executedLastChange_) {
          return;
        }

        var flexibleExpansionRatio = _this3.getFlexibleExpansionRatio_(scrollTop);
        _this3.updateToolbarFlexibleState_(flexibleExpansionRatio);
        if (_this3.fixedLastrow_) {
          _this3.updateToolbarFixedState_(scrollTop);
        }
        if (_this3.hasFlexibleRow_) {
          _this3.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
        }
        _this3.executedLastChange_ = hasScrolledOutOfTheshold;
        _this3.adapter_.notifyChange({ flexibleExpansionRatio: flexibleExpansionRatio });
      });
    }
  }, {
    key: 'scrolledOutOfTheshold_',
    value: function scrolledOutOfTheshold_(scrollTop) {
      return scrollTop > this.calculations_.scrollTheshold;
    }
  }, {
    key: 'initKeyRatio_',
    value: function initKeyRatio_() {
      var toolbarRowHeight = this.getRowHeight_();
      var flexibleRowMaxRatio = this.adapter_.getFlexibleRowElementOffsetHeight() / toolbarRowHeight;
      this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
      this.calculations_.flexibleExpansionRatio = flexibleRowMaxRatio - 1;
      this.calculations_.maxTranslateYRatio = this.fixedLastrow_ ? this.calculations_.toolbarRatio - flexibleRowMaxRatio : 0;
      this.calculations_.scrollThesholdRatio = (this.fixedLastrow_ ? this.calculations_.toolbarRatio : flexibleRowMaxRatio) - 1;
    }
  }, {
    key: 'getRowHeight_',
    value: function getRowHeight_() {
      var breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
      return this.adapter_.getViewportWidth() <= breakpoint ? MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
    }
  }, {
    key: 'updateToolbarFlexibleState_',
    value: function updateToolbarFlexibleState_(flexibleExpansionRatio) {
      this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
      this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
      if (flexibleExpansionRatio === 1) {
        this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
      } else if (flexibleExpansionRatio === 0) {
        this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
      }
    }
  }, {
    key: 'updateToolbarFixedState_',
    value: function updateToolbarFixedState_(scrollTop) {
      var translateDistance = Math.max(0, Math.min(scrollTop - this.calculations_.flexibleExpansionHeight, this.calculations_.maxTranslateYDistance));
      this.adapter_.setStyle('transform', 'translateY(' + -translateDistance + 'px)');
      if (translateDistance === this.calculations_.maxTranslateYDistance) {
        this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
      } else {
        this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
      }
    }
  }, {
    key: 'updateFlexibleRowElementStyles_',
    value: function updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
      if (this.fixed_) {
        var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
        this.adapter_.setStyleForFlexibleRowElement('height', height + this.calculations_.toolbarRowHeight + 'px');
      }
      if (this.useFlexDefaultBehavior_) {
        this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
      }
    }
  }, {
    key: 'updateElementStylesDefaultBehavior_',
    value: function updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
      var maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
      var minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
      var currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;
      if (this.fixed_) {
        var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
        this.adapter_.setStyleForTitleElement('transform', 'translateY(' + height + 'px)');
      }
      this.adapter_.setStyleForTitleElement('font-size', currentTitleSize + 'rem');
    }
  }]);

  return MDCToolbarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCToolbarFoundation);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["applyPassive"] = applyPassive;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var supportsPassive_ = void 0;

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(59);

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;

  var container = (typeof element === 'string')
    ? document.querySelector(element)
    : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
    ? userOptions.returnFocusOnDeactivate
    : true;
  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
    ? userOptions.escapeDeactivates
    : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause,
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
        ? activateOptions.onActivate
        : config.onActivate,
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate,
      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
        ? deactivateOptions.onDeactivate
        : config.onDeactivate,
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    e.preventDefault();
    updateTabbableNodes();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);
    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
    var firstTabbableNode = tabbableNodes[0];

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function(el) {
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable();

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors);

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
}

function createIsUnavailable() {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === document.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === document.documentElement) return false;

    var computedStyle = window.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}


/***/ })
/******/ ]);
});
(function(t,e){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){t.Backbone=t.Exoskeleton=e(t,n,i,r)})}else if(typeof exports!=="undefined"){var i,r;try{i=require("underscore")}catch(n){}try{r=require("jquery")}catch(n){}e(t,exports,i,r)}else{t.Backbone=t.Exoskeleton=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}})(this,function(t,e,i,r){"use strict";var n=t.Backbone;var s=t.Exoskeleton;var a=e.utils=i=i||{};e.$=r;var o=[];var u=o.push;var l=o.slice;var c={}.toString;e.noConflict=function(){t.Backbone=n;t.Exoskeleton=s;return this};e.emulateHTTP=false;e.emulateJSON=false;e.extend=function(t,e){var r=this;var n;if(t&&hasOwnProperty.call(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};var f=function(){throw new Error('A "url" property or function must be specified')};var h=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}};var d=function(t){return typeof i[t]==="function"};a.result=function D(t,e){var i=t?t[e]:undefined;return typeof i==="function"?t[e]():i};a.defaults=function F(t){l.call(arguments,1).forEach(function(e){for(var i in e)if(t[i]===undefined)t[i]=e[i]});return t};a.extend=function G(t){l.call(arguments,1).forEach(function(e){for(var i in e)t[i]=e[i]});return t};var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};a.escape=function V(t){return t==null?"":String(t).replace(/[&<>"']/g,function(t){return p[t]})};a.sortBy=function(t,e,i){var r=typeof e==="function"?e:function(t){return t[e]};return t.map(function(t,e,n){return{value:t,index:e,criteria:r.call(i,t,e,n)}}).sort(function(t,e){var i=t.criteria;var r=e.criteria;if(i!==r){if(i>r||i===void 0)return 1;if(i<r||r===void 0)return-1}return t.index-e.index}).map(function(t){return t.value})};var v=0;a.uniqueId=function X(t){var e=++v+"";return t?t+e:e};var g=function(t,e,i,r){if(t===e)return t!==0||1/t==1/e;if(t==null||e==null)return t===e;var n=c.call(t);if(n!=c.call(e))return false;switch(n){case"[object String]":return t==String(e);case"[object Number]":return t!==+t?e!==+e:t===0?1/t===1/e:t===+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if(typeof t!="object"||typeof e!="object")return false;var s=i.length;while(s--){if(i[s]==t)return r[s]==e}var a=t.constructor,o=e.constructor;if(a!==o&&!(typeof a==="function"&&a instanceof a&&typeof o==="function"&&o instanceof o)){return false}i.push(t);r.push(e);var u=0,l=true;if(n==="[object Array]"){u=t.length;l=u===e.length;if(l){while(u--){if(!(l=g(t[u],e[u],i,r)))break}}}else{for(var f in t){if(hasOwnProperty.call(t,f)){u++;if(!(l=hasOwnProperty.call(e,f)&&g(t[f],e[f],i,r)))break}}if(l){for(f in e){if(hasOwnProperty.call(e,f)&&!u--)break}l=!u}}i.pop();r.pop();return l};a.isEqual=function(t,e){return g(t,e,[],[])};a.matchesSelector=function(){if(typeof document==="undefined")return;var t="MatchesSelector";var e=document.createElement("div");var i;["matches","webkit"+t,"moz"+t,"ms"+t].some(function(t){var r=t in e;i=t;return r});if(!i)throw new Error("Element#matches is not supported");return function(t,e){return t[i](e)}}();a.delegate=function(t,e,i,r){if(typeof i==="function"){r=i;i=null}if(typeof r!=="function"){throw new TypeError("View#delegate expects callback function")}var n=t.el;var s=r.bind(t);var o=i?function(t){for(var e=t.target;e&&e!==n;e=e.parentNode){if(a.matchesSelector(e,i)){t.delegateTarget=e;return s(t)}}}:s;n.addEventListener(e,o,false);t._handlers.push({eventName:e,selector:i,callback:r,handler:o});return o};a.undelegate=function(t,e,i,r){if(typeof i==="function"){r=i;i=null}var n=t._handlers;var s=function(e){t.el.removeEventListener(e.eventName,e.handler,false)};if(!e&&!i&&!r){n.forEach(s);t._handlers=[]}else{n.filter(function(t){return t.eventName===e&&(r?t.callback===r:true)&&(i?t.selector===i:true)}).forEach(function(t){s(t);n.splice(n.indexOf(t),1)})}};a.ajax=function(){var t=/^(?:application|text)\/xml/;var i=/^application\/json/;var r=function(e,r){if(e==null)e=r.getResponseHeader("content-type");if(t.test(e)){return r.responseXML}else if(i.test(e)){return JSON.parse(r.responseText)}else{return r.responseText}};var n=function(t){return t.status>=200&&t.status<300||t.status===304||t.status===0&&window.location.protocol==="file:"};var s=function(t,e,i){return function(){if(t.readyState!==4)return;var s=t.status;var a=r(e.headers&&e.headers.Accept,t);if(n(t)){if(e.success)e.success(a);if(i)i.resolve(a)}else{var o=new Error("Server responded with a status of "+s);if(e.error)e.error(t,s,o);if(i)i.reject(t)}}};return function(t){if(t==null)throw new Error("You must provide options");if(t.type==null)t.type="GET";var i=new XMLHttpRequest;var r=e.Deferred&&e.Deferred();if(t.contentType){if(t.headers==null)t.headers={};t.headers["Content-Type"]=t.contentType}if(t.type==="GET"&&typeof t.data==="object"){var n="";var a=function(t,e){return e==null?"":"&"+encodeURIComponent(t)+"="+encodeURIComponent(e)};for(var o in t.data){n+=a(o,t.data[o])}if(n){var u=t.url.indexOf("?")===-1?"?":"&";t.url+=u+n.substring(1)}}if(t.credentials)t.withCredentials=true;i.addEventListener("readystatechange",s(i,t,r));i.open(t.type,t.url,true);if(t.headers)for(var o in t.headers){i.setRequestHeader(o,t.headers[o])}if(t.beforeSend)t.beforeSend(i);i.send(t.data);return r?r.promise:undefined}}();var m=e.Events={on:function(t,e,i){if(!b(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!b(this,"once",t,[e,i])||!e)return this;var r=this;var n;var s=function(){if(n)return;n=true;r.off(t,s);e.apply(this,arguments)};s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,n,s,a,o,u,l,c;if(!this._events||!b(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events=undefined;return this}a=t?[t]:Object.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(s=this._events[t]){this._events[t]=r=[];if(e||i){for(l=0,c=s.length;l<c;l++){n=s[l];if(e&&e!==n.callback&&e!==n.callback._callback||i&&i!==n.context){r.push(n)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=l.call(arguments,1);if(!b(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)w(i,e);if(r)w(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeningTo;if(!r)return this;var n=!e&&!i;if(!i&&typeof e==="object")i=this;if(t)(r={})[t._listenId]=t;for(var s in r){t=r[s];t.off(e,i,this);if(n||!Object.keys(t._events).length){delete this._listeningTo[s]}}return this}};var y=/\s+/;var b=function(t,e,i,r){if(!i)return true;var n;if(typeof i==="object"){for(var s in i){n=[s,i[s]];u.apply(n,r);t[e].apply(t,n)}return false}if(y.test(i)){var a=i.split(y);for(var o=0,l=a.length;o<l;o++){n=[a[o]];u.apply(n,r);t[e].apply(t,n)}return false}return true};var w=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e)}};var _={listenTo:"on",listenToOnce:"once"};Object.keys(_).forEach(function(t){var e=_[t];m[t]=function(t,r,n){var s=this._listeningTo||(this._listeningTo={});var a=t._listenId||(t._listenId=i.uniqueId("l"));s[a]=t;if(!n&&typeof r==="object")n=this;t[e](r,n,this);return this}});m.bind=m.on;m.unbind=m.off;var x=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId("c");this.attributes=Object.create(null);if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed=Object.create(null);this.initialize.apply(this,arguments)};i.extend(x.prototype,m,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return i.extend(Object.create(null),this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,r){var n,s,a,o,u,l,c,f;if(t==null)return this;if(typeof t==="object"){s=t;r=e}else{(s={})[t]=e}r||(r={});if(!this._validate(s,r))return false;a=r.unset;u=r.silent;o=[];l=this._changing;this._changing=true;if(!l){this._previousAttributes=i.extend(Object.create(null),this.attributes);this.changed={}}f=this.attributes,c=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(n in s){e=s[n];if(!i.isEqual(f[n],e))o.push(n);if(!i.isEqual(c[n],e)){this.changed[n]=e}else{delete this.changed[n]}a?delete f[n]:f[n]=e}if(!u){if(o.length)this._pending=true;for(var h=0,d=o.length;h<d;h++){this.trigger("change:"+o[h],this,f[o[h]],r)}}if(l)return this;if(!u){while(this._pending){this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!!Object.keys(this.changed).length;return hasOwnProperty.call(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.extend(Object.create(null),this.changed):false;var e,r=false;var n=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(i.isEqual(n[s],e=t[s]))continue;(r||(r={}))[s]=e}return r},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.extend(Object.create(null),this._previousAttributes)},fetch:function(t){t=t?i.extend({},t):{};if(t.parse===void 0)t.parse=true;var e=this;var r=t.success;t.success=function(i){if(!e.set(e.parse(i,t),t))return false;if(r)r(e,i,t);e.trigger("sync",e,i,t)};h(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n,s,a,o=this.attributes;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true},r);if(n&&!r.wait){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}if(n&&r.wait){this.attributes=i.extend(Object.create(null),o,n)}if(r.parse===void 0)r.parse=true;var u=this;var l=r.success;r.success=function(t){u.attributes=o;var e=u.parse(t,r);if(r.wait)e=i.extend(n||{},e);if(e&&typeof e==="object"&&!u.set(e,r)){return false}if(l)l(u,t,r);u.trigger("sync",u,t,r)};h(this,r);s=this.isNew()?"create":r.patch?"patch":"update";if(s==="patch")r.attrs=n;a=this.sync(s,this,r);if(n&&r.wait)this.attributes=o;return a},destroy:function(t){t=t?i.extend({},t):{};var e=this;var r=t.success;var n=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(t.wait||e.isNew())n();if(r)r(e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};if(this.isNew()){t.success();return false}h(this,t);var s=this.sync("delete",this,t);if(!t.wait)n();return s},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||f();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},i.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend(Object.create(null),this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});if(i.keys){var E=["keys","values","pairs","invert","pick","omit"];E.filter(d).forEach(function(t){x.prototype[t]=function(){var e=l.call(arguments);e.unshift(this.attributes);return i[t].apply(i,e)}})}var j=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var k={add:true,remove:true,merge:true};var O={add:true,remove:false};i.extend(j.prototype,m,{model:typeof x==="undefined"?null:x,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,O))},remove:function(t,e){var i=!Array.isArray(t);t=i?[t]:t.slice();e||(e={});var r,n,s,a;for(r=0,n=t.length;r<n;r++){a=t[r]=this.get(t[r]);if(!a)continue;delete this._byId[a.id];delete this._byId[a.cid];s=this.indexOf(a);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;a.trigger("remove",a,this,e)}this._removeReference(a)}return i?t[0]:t},set:function(t,e){e=i.defaults({},e,k);if(e.parse)t=this.parse(t,e);var r=!Array.isArray(t);t=r?t?[t]:[]:t.slice();var n,s,a,o,u,l,c;var f=e.at;var h=this.model;var d=this.comparator&&f==null&&e.sort!==false;var p=typeof this.comparator==="string"?this.comparator:null;var v=[],g=[],m={};var y=e.add,b=e.merge,w=e.remove;var _=!d&&y&&w?[]:false;for(n=0,s=t.length;n<s;n++){u=t[n];if(u instanceof x){a=o=u}else{a=u[h.prototype.idAttribute]}if(l=this.get(a)){if(w)m[l.cid]=true;if(b){u=u===o?o.attributes:u;if(e.parse)u=l.parse(u,e);l.set(u,e);if(d&&!c&&l.hasChanged(p))c=true}t[n]=l}else if(y){o=t[n]=this._prepareModel(u,e);if(!o)continue;v.push(o);o.on("all",this._onModelEvent,this);this._byId[o.cid]=o;if(o.id!=null)this._byId[o.id]=o}if(_)_.push(l||o)}if(w){for(n=0,s=this.length;n<s;++n){if(!m[(o=this.models[n]).cid])g.push(o)}if(g.length)this.remove(g,e)}if(v.length||_&&_.length){if(d)c=true;this.length+=v.length;if(f!=null){for(n=0,s=v.length;n<s;n++){this.models.splice(f+n,0,v[n])}}else{if(_)this.models.length=0;var E=_||v;for(n=0,s=E.length;n<s;n++){this.models.push(E[n])}}}if(c)this.sort({silent:true});if(!e.silent){for(n=0,s=v.length;n<s;n++){(o=v[n]).trigger("add",o,this,e)}if(c||_&&_.length)this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,n=this.models.length;r<n;r++){this._removeReference(this.models[r])}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return l.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t.id]||this._byId[t.cid]||this._byId[t]},at:function(t){return this.models[t]},where:function(t,e){if(!t||!Object.keys(t).length)return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(typeof this.comparator==="string"||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(this.comparator.bind(this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.models.map(function(e){return e.get(t)})},fetch:function(t){t=t?i.extend({},t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e(r,i,t);r.trigger("sync",r,i,t)};h(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.extend({},e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var r=this;var n=e.success;e.success=function(t,e,i){if(i.wait)r.add(t,i);if(n)n(t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId=Object.create(null)},_prepareModel:function(t,e){if(t instanceof j.prototype.model){if(!t.collection)t.collection=this;return t}e=e?i.extend({},e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});if(d("each")){var S=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"];S.filter(d).forEach(function(t){j.prototype[t]=function(){var e=l.call(arguments);e.unshift(this.models);return i[t].apply(i,e)}});var T=["groupBy","countBy","sortBy"];T.filter(d).forEach(function(t){j.prototype[t]=function(e,r){var n=typeof e==="function"?e:function(t){return t.get(e)};return i[t](this.models,n,r)}})}else{["forEach","map","filter","some","every","reduce","reduceRight","indexOf","lastIndexOf"].forEach(function(t){j.prototype[t]=function(e,i){return this.models[t](e,i)}});j.prototype.find=function(t,e){var i;this.some(function(r,n,s){if(t.call(e,r,n,s)){i=r;return true}});return i};["sortBy"].forEach(function(t){j.prototype[t]=function(e,r){var n=typeof e==="function"?e:function(t){return t.get(e)};return i[t](this.models,n,r)}})}var N=/^(\S+)\s*(.*)$/;var $=["model","collection","el","id","attributes","className","tagName","events"];var A=e.View=function(t){this.cid=i.uniqueId("view");if(t)Object.keys(t).forEach(function(e){if($.indexOf(e)!==-1)this[e]=t[e]},this);this._handlers=[];this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};i.extend(A.prototype,m,{useNative:false,tagName:"div",$:function(t){return e.$&&!this.useNative?this.$el.find(t):this.findAll(t)},find:function(t){return this.el.querySelector(t)},findAll:function(t){return l.call(this.el.querySelectorAll(t))},initialize:function(){},render:function(){return this},remove:function(){var t;if(e.$&&!this.useNative){this.$el.remove()}else if(t=this.el.parentNode){t.removeChild(this.el)}this.stopListening();return this},setElement:function(t,i){if(e.$&&!this.useNative){if(this.$el)this.undelegateEvents();this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]}else{if(this.el)this.undelegateEvents();this.el=typeof t==="string"?document.querySelector(t):t}if(i!==false)this.delegateEvents();return this},delegateEvents:function(t,r){if(!(t||(t=i.result(this,"events"))))return this;if(!r)this.undelegateEvents();for(var n in t){var s=t[n];if(typeof s!=="function")s=this[t[n]];var o=n.match(N);var u=o[1],l=o[2];if(e.$&&!this.useNative){u+=".delegateEvents"+this.cid;s=s.bind(this);this.$el.on(u,l?l:null,s)}else{a.delegate(this,u,l,s)}}return this},undelegateEvents:function(){if(e.$&&!this.useNative){this.$el.off(".delegateEvents"+this.cid)}else{a.undelegate(this)}return this},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t.className=i.result(this,"className");if(t["class"])t.className=t["class"];var e=i.extend(document.createElement(i.result(this,"tagName")),t);this.setElement(e,false)}else{this.setElement(i.result(this,"el"),false)}}});e.sync=function(t,r,n){var s=C[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||f()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var C={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=e.$?function(){return e.$.ajax.apply(e.$,arguments)}:a.ajax;if(e.$)e.Deferred=function(){return new e.$.Deferred};var H=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var I=/\((.*?)\)/g;var P=/(\(\?)?:\w+/g;var R=/\*\w+/g;var q=/[\-{}\[\]+?.,\\\^$|#\s]/g;var U=function(t){return t?typeof t==="object"&&c.call(t)==="[object RegExp]":false};i.extend(H.prototype,m,{initialize:function(){},route:function(t,i,r){if(!U(t))t=this._routeToRegExp(t);if(typeof i==="function"){r=i;i=""}if(!r)r=this[i];var n=this;e.history.route(t,function(s){var a=n._extractParameters(t,s);r&&r.apply(n,a);n.trigger.apply(n,["route:"+i].concat(a));n.trigger("route",i,a);e.history.trigger("route",n,i,a)});return this},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=Object.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(q,"\\$&").replace(I,"(?:$1)?").replace(P,function(t,e){return e?t:"([^/]+)"}).replace(R,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return i.map(function(t){return t?decodeURIComponent(t):null})}});var L=e.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var M=/^[#\/]|\s+$/g;var B=/^\/+|\/+$/g;var J=/\/$/;var z=/[#].*$/;L.started=false;i.extend(L.prototype,m,{getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t){if(t==null){if(this._wantsPushState||!this._wantsHashChange){t=this.location.pathname+this.location.search;var e=this.root.replace(J,"");if(!t.indexOf(e))t=t.slice(e.length)}else{t=this.getHash()}}return t.replace(M,"")},start:function(t){if(L.started)throw new Error("Backbone.history has already been started");L.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;var e=this.getFragment();this.root=("/"+this.root+"/").replace(B,"/");if(this._wantsPushState){window.addEventListener("popstate",this.checkUrl,false)}else if(this._wantsHashChange){window.addEventListener("hashchange",this.checkUrl,false)}this.fragment=e;var r=this.location;var n=r.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState){if(n&&r.hash){this.fragment=this.getHash().replace(M,"");this.history.replaceState({},document.title,this.root+this.fragment)}}if(!this.options.silent)return this.loadUrl()},stop:function(){window.removeEventListener("popstate",this.checkUrl);window.removeEventListener("hashchange",this.checkUrl);L.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();if(t===this.fragment)return false;this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return this.handlers.some(function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!L.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(z,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._wantsPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace)}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});["Model","Collection","Router","View","History"].forEach(function(t){var i=e[t];if(i)i.extend=e.extend});i.extend(e,m);e.history=new L;return e});

/**
 * Part of the Data Grid package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the Cartalyst PSL License.
 *
 * This source file is subject to the Cartalyst PSL License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Data Grid
 * @version    4.0.1
 * @author     Cartalyst LLC
 * @license    Cartalyst PSL
 * @copyright  (c) 2011-2017, Cartalyst LLC
 * @link       http://cartalyst.com
 */

!function(global) {
  'use strict';

  /**
   * Creates a new DataGridManager.
   *
   * @param {Object} options
   * @return void
   */
  function DataGridManager(options) {
    this.defaults = {

      url: {
        hash: true,
        semantic: false,
        base: '',
      },

    };

    this.grids = [];
    this.opt = _.assign(this.defaults);
    this.currentHash = null;

    _.each(_.keys(options), _.bind(function(key) {
      this.opt[key] = _.defaults(options[key], this.defaults[key]);
    }, this));

    this._checkDependencies();

    this.backbone = Backbone.noConflict();

    _.defer(_.bind(this._init, this));
  }

  /**
   * Initializes the DataGridManager.
   *
   * @return {DataGridManager}
   */
  DataGridManager.prototype._init =
  function _init() {
    _.defer(_.bind(function() {
      this
        ._initRouter()
        ._initGrids();
    }, this));

    return this;
  };

  /**
   * Initializes the backbone router.
   *
   * @return {DataGridManager}
   */
  DataGridManager.prototype._initRouter =
  function _initRouter() {
    var routerOptions = {};
    var Router = this.backbone.Router.extend({
      routes: {
        '*path': 'defaultRoute',
      },

      defaultRoute: _.bind(this._updateGrids, this),
    });

    if (this.opt.url.semantic) {
      routerOptions = {
        root: this.opt.url.base,
        pushState: true,
      };
    }

    this.router = new Router();

    this.backbone.history.start(routerOptions);

    return this;
  };

  /**
   * Updates data grids.
   *
   * @return {DataGridManager}
   */
  DataGridManager.prototype._updateGrids =
  function _updateGrids() {
    var hash = this.backbone.history.getFragment();
    var keys = [];
    var separateRoutes = [];
    var untouchedGrids = [];
    var updatedGrids = [];
    var routes;

    _.each(this.grids, function(grid) {
      keys.push(grid.key);
    });

    if (this.grids.length > 1) {
      var regex = new RegExp(keys.join('\\/|') + '\\/');
      routes = _.compact(hash.split(regex));
      for (var i = routes.length - 1; i >= 0; i--) {
        routes[i] = keys[i] + '/' + routes[i];
      }
    } else {
      routes = [hash];
    }

    _.each(routes, function(route) {
      separateRoutes.push(_.compact(route.split('/')));
    });

    if (this.grids.length === 1) {
      this.grids[0]
        .reset()
        .applyFromRoute(separateRoutes[0])
        .refresh();
    } else {
      _.each(this.grids, function(grid) {
        if (_.isEmpty(separateRoutes)) {
            grid.reset();
            grid.applyDefaults();
            grid.refresh();

            updatedGrids.push(grid);
        } else {
            _.each(separateRoutes, function(route) {
              if (route[0] === grid.key) {
                grid
                  .reset()
                  .applyFromRoute(route)
                  .refresh();

                updatedGrids.push(grid);
              }
            });
        }
      });

      untouchedGrids = _.difference(this.grids, updatedGrids);

      _.each(untouchedGrids, function(grid) {
        grid.reset();
        grid.applyDefaults();
        grid.refresh();
      }, this);
    }

    return this;
  };

  /**
   * Initializes the data grids.
   *
   * @return {DataGridManager}
   */
  DataGridManager.prototype._initGrids =
  function _initGrids() {
    var _this = this;

    _.each(this.grids, function(grid) {
      $(grid).on('dg:hashchange', function(event) {
        _this._updateHash(event);
      });
    });

    return this;
  };

  /**
   * Updates the hash fragment.
   *
   * @return {DataGridManager}
   */
  DataGridManager.prototype._updateHash =
  function _updateHash(event) {
    var hashParts = [];
    var hash;
    var finalHash;

    event.preventDefault();

    if (! this.opt.url.hash) {
      return;
    }

    _.each(this.grids, function(grid) {
      hash = grid.buildHash();

      if (hash !== grid._getBaseHash()) {
        hashParts.push(hash);
      }
    });

    finalHash = hashParts.join('/');

    if (finalHash !== this.currentHash) {
      this.backbone.history.navigate(finalHash, {trigger: false});
    }

    this.currentHash = finalHash;

    return this;
  };

  /**
   * Ensures dependencies are available.
   *
   * @return {DataGridManager}
   */
  DataGridManager.prototype._checkDependencies =
  function _checkDependencies() {
    if (typeof _ === 'undefined') {
      throw new Error('Underscore is not defined. ' +
        'DataGrid Requires UnderscoreJS v1.6.0 or later to run!');
    }

    if (typeof Backbone === 'undefined') {
      throw new Error('DataGrid Requires Backbone.js v1.0.0 or later to run!');
    }

    return this;
  };

  /**
   * Registers and creates a new data grid.
   *
   * @param {String} name
   * @param {Object} options
   * @return {DataGrid}
   */
  DataGridManager.prototype.create =
  function create(name, options) {
    var newGrid = new DataGrid(name, options, this);

    this.grids.push(newGrid);

    return newGrid;
  };

  /**
   * Creates a new DataGrid.
   *
   * @param {String} name
   * @param {Object} options
   * @return {DataGrid}
   */
  function DataGrid(name, options, manager) {
    this.manager = manager;

    this.originalDefaults = {
      source: null,

      prefetched: false,

      pagination: {
        method: 'single',
        threshold: null,
        throttle: null,
        scroll: null,
        infiniteScroll: false,
        scrollOffset: undefined,
      },

      cssClasses: {
        ascClass: 'asc',
        descClass: 'desc',
        appliedFilter: 'selected',
        activeLayout: 'active',
      },

      sorting: {
        column: undefined,
        direction: undefined,
        multicolumn: true,
        delimiter: ','
      },

      delimiter: {
        query: ';',
        expression: ':',
      },

      templateSettings: {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      },

      filters: {},

      search: {
        live: true,
        timeout: 600,
      },

      loader: {
        element: undefined,
        showEffect: 'fadeIn',
        hideEffect: 'fadeOut',
        duration: 200,
      },

      formats: {
        timestamp: 'YYYY-MM-DD HH:mm:ss',
        serverDate: 'YYYY-MM-DD',
        clientDate: 'MMM DD, YYYY',
      },

      callback: undefined,
    };

    this.availableFilters = {
      term: new TermFilter(this),
      range: new RangeFilter(this),
      search: new SearchFilter(this),
      live: new LiveFilter(this),
    };

    this.defaults = _.cloneDeep(this.originalDefaults);
    this.key = name;
    this.$body = $(document.body);
    this.grid = this._getGridSelector();

    // Options
    this.opt = _.assign(this.defaults);

    _.each(_.keys(options), _.bind(function(key) {
      if (key === 'layouts') {
        this.opt[key] = options[key];
      } else {
        this.opt[key] = _.defaults(options[key], this.defaults[key]);
      }
    }, this));

    this.defaults.pagination = _.cloneDeep(this.opt.pagination);
    this.originalDefaults.pagination = _.cloneDeep(this.defaults.pagination);

    var $source = this._getEl(this._getSelector('source'));
    var source = $source.data('grid-source');

    if ($source.length && !_.isEmpty(source)) {
      this.opt.source = source;
    }

    this.appliedFilters = [];
    this.sorts = [];
    this.initial = true;
    this.response = null;
    this.searchActive = false;
    this.currentUri = null;
    this.searchTimeout = null;

    this.pagination = {
      pageIndex: 1,
      pages: null,
      total: null,
      filtered: null,
      baseThrottle: this.opt.pagination.throttle,
    };

    _.defer(_.bind(this._init, this));

    return this;
  }

  /**
   * Initializes Data Grid.
   *
   * @return {DataGrid}
   */
  DataGrid.prototype._init =
  function _init() {
    this
      ._initLayouts()
      ._listeners();

    return this;
  };

  /**
   * Initializes layouts.
   *
   * @return {DataGrid}
   */
  DataGrid.prototype._initLayouts =
  function _initLayouts() {
    var layouts = this._getEl(this._getSelector('layout'));
    var layoutName;

    _.assign(_.templateSettings, this.opt.templateSettings);

    this.layouts = {};
    this.baseLayouts = {};

    _.each(layouts, _.bind(function(layout) {
      layoutName = $(layout).data('grid-layout');

      this.baseLayouts[layoutName] = layoutName;
    }, this));

    this._setLayouts(this.baseLayouts);

    return this;
  };

   /**
   * Resets layouts.
   *
   * @return {DataGrid}
   */
  DataGrid.prototype._resetLayouts =
  function _resetLayouts() {
    _.each(_.keys(this.layouts), _.bind(function(key) {
      this.layouts[key].layout.html('');
    }, this));

    return this;
  };

  /**
   * Sets data grid layouts.
   *
   * @param {Object} options
   * @return {DataGrid}
   */
  DataGrid.prototype._setLayouts =
  function _setLayouts(options) {
    _.each(options, _.bind(function(template, name) {
        this.setLayout(name, template, false);
    }, this));

    return this;
  };

  /**
   * Sets data grid layout.
   *
   * @param {String} name
   * @param {String} template
   * @param {Boolean} render
   * @return {DataGrid}
   */
  DataGrid.prototype.setLayout =
  function setLayout(name, template, render) {
    render = render === undefined ? true : false;
    var layouts = {};
    var $layout;
    var $template;

    layouts[name] = template;
    this.baseLayouts[name] = template;

    _.each(_.keys(layouts), _.bind(function(key) {
      if (_.isNull(layouts[key])) {
        delete this.layouts[key];
        return;
      }

      $layout = this._getEl(this._getSelector('layout', name));
      $template = this._getEl(
        this._getSelector('template', layouts[key])
      );

      if ($layout && $template) {
        this.layouts[key] = {
          layout: $layout,
          template: _.template($template.html()),
          action: $template.data('grid-action') || 'html'
        };
      }

    }, this));

    if (render) {
      this._render();
    }

    return this;
  };

  /**
   * jQuery.on wrapper for dg:event callbacks.
   *
   * @param {Event} event
   * @param {Object} callback
   * @return {DataGrid}
   */
  DataGrid.prototype.on =
  function on(event, callback) {
    if (_.isObject(event)) {
      this._callbackListeners(event);
    } else {
      this._bindCallback(event, callback);
    }

    return this;
  };

  /**
   * Applies info based on route.
   *
   * @param {Array} route
   * @return {DataGrid}
   */
  DataGrid.prototype.applyFromRoute =
  function applyFromRoute(route) {
    var parsedRoute = route;
    var lastItem;
    var str;

    lastItem = parsedRoute[(parsedRoute.length - 1)];

    if (/^threshold/g.test(lastItem)) {
      this._extractThresholdFromRoute(lastItem);

      parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

      lastItem = parsedRoute[(parsedRoute.length - 1)];
    }

    if (/^throttle/g.test(lastItem)) {
      this._extractThrottleFromRoute(lastItem);

      parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

      lastItem = parsedRoute[(parsedRoute.length - 1)];
    }

    if (/^layout/g.test(lastItem)) {
      this._extractLayoutFromRoute(lastItem);

      parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

      lastItem = parsedRoute[(parsedRoute.length - 1)];
    }

    if (/^page/g.test(lastItem)) {
      this._extractPageFromRoute(lastItem);

      parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

      lastItem = parsedRoute[(parsedRoute.length - 1)];
    } else {
      this.pagination.pageIndex = 1;
    }

    if ((/desc$/g.test(lastItem)) || (/asc$/g.test(lastItem))) {
      this._extractSortsFromRoute(lastItem);

      // Remove sort from parsedRoute
      parsedRoute = parsedRoute.splice(0, (parsedRoute.length - 1));

      lastItem = parsedRoute[(parsedRoute.length - 1)];
    } else if (this.opt.sorting.column && this.opt.sorting.direction) {
      str = this.opt.sorting.column +
        this.opt.delimiter.expression +
        this.opt.sorting.direction;

      this._extractSortsFromRoute(str);
    }

    this._extractFiltersFromRoute(parsedRoute);

    return this;
  };

  /**
   * Binds single callback.
   *
   * @param {Event} event
   * @param {Object} callback
   * @return void
   */
  DataGrid.prototype._bindCallback =
  function _bindCallback(event, callback) {
    $(this).on(event, _.bind(function() {
      callback.apply(this, _.tail(arguments));
    }, this));
  };

  /**
   * Initializes filter event listeners.
   *
   * @return {DataGrid}
   */
  DataGrid.prototype._initFilters =
  function _initFilters() {
    _.each(_.keys(this.availableFilters), _.bind(function(type) {
      this.availableFilters[type].init();
    }, this));

    return this;
  };

  /**
   * Initializes custom event listeners.
   *
   * @return void
   */
  DataGrid.prototype._callbackListeners =
  function _callbackListeners(events) {
    if (_.isEmpty(events)) {
      return;
    }

    _.each(_.keys(events), _.bind(function(event) {
      this._bindCallback(event, events[event]);
    }, this));
  };

  /**
   * Adds listeners.
   *
   * @return void
   */
  DataGrid.prototype._listeners =
  function _listeners() {
    var offset;
    var throttled;
    var page;

    $(this).on('dg:update', _.bind(this._fetchResults, this));

    this._initFilters()
      ._callbackListeners(this.opt.events);

    this.$body.on('click',
      this._getGlobalResetSelector(), _.bind(this._onGlobalReset, this)
    );

    this.$body.on('click',
      this._getResetFilterSelector(), _.bind(this._onFilterUnapply, this)
    );

    this.$body.on('click',
      this._getResetGroupSelector(), _.bind(this._onGroupFilterUnapply, this)
    );

    this.$body.on('click',
      this._getPlainSortSelector(), _.bind(this._onSort, this)
    );

    this.$body.on('click',
      this._getSelector('page'), _.bind(this._onPaginate, this)
    );

    this.$body.on('click',
      this._getSelector('throttle'), _.bind(this._onThrottle, this)
    );

    this.$body.on('click',
      this._getSelector('download'), _.bind(this._onDownload, this)
    );

    this.$body.on('click',
      this._getSelector('switch-layout'), _.bind(this._onLayoutChange, this)
    );

    if (
      this.opt.pagination.infiniteScroll &&
      this.opt.pagination.method === 'infinite'
    ) {
      offset = this.opt.pagination.scrollOffset || 400;

      throttled = _.throttle(_.bind(function() {
        if (
          $(window).scrollTop() >=
            $(document).height() - $(window).height() - offset
        ) {
          page = this.pagination.pageIndex + 1;

          if (page <= this.response.pages) {
            this.goToPage(page);

            this.refresh();
          }
        }
      }, this), 800);

      $(window).scroll(throttled);
    }
  };

  /**
   * Handles global resets.
   *
   * @param {Event} event
   * @return void
   */
  DataGrid.prototype._onGlobalReset =
  function _onGlobalReset(event) {
    event.preventDefault();

    this.reset();

    this.refresh();
  };

  /**
   * Handles applied filter removal.
   *
   * @param {Event} event
   * @return void
   */
  DataGrid.prototype._onFilterUnapply =
  function _onFilterUnapply(event) {
    var $applied = $(event.currentTarget);
    var name = $applied.data('grid-reset-filter');
    var $filter = this._getEl(this._getSelector('filter', name));

    event.preventDefault();

    if ($filter.prop('tagName') === 'OPTION') {
      $filter.closest('select').val(
        $filter.closest('select').find('option:first').val()
      );
    }

    this.removeFilter(name);
    this.refresh();
  };

  /**
   * Handles applied group filters removal.
   *
   * @param {Event} event
   * @return void
   */
  DataGrid.prototype._onGroupFilterUnapply =
  function _onGroupFilterUnapply(event) {
    var $applied = $(event.currentTarget);
    var name = $applied.data('grid-reset-group');

    event.preventDefault();
    event.stopPropagation();

    if (! name) {
      $applied = $applied.parents('[data-grid-group]');
      name = $applied.data('grid-group');
    }

    this._removeGroupFilters(name);
    this._resetLayouts();
    this.refresh();
  };

  /**
   * Handles sort click.
   *
   * @param {Event} event
   * @return void
   */
  DataGrid.prototype._onSort =
  function _onSort(event) {
    var $elem = $(event.currentTarget);

    event.preventDefault();

    this._extractSortsFromClick($elem, event.shiftKey);

    this.refresh();
  };

  /**
   * Handles page click.
   *
   * @param {Event} event
   * @return void
   */
  DataGrid.prototype._onPaginate =
  function _onPaginate(event) {
    var $page = $(event.currentTarget);

    $(this).trigger('dg:switching', {grid: this, page: $page});

    event.preventDefault();

    this.applyScroll()
      ._handlePageChange($page);

    $(this).trigger('dg:switched', {grid: this, page: $page});
  };

  /**
   * Handles throttle click.
   *
   * @param {Event} event
   * @return void
   */
  DataGrid.prototype._onThrottle =
  function _onThrottle(event) {
    event.preventDefault();

    this.opt.pagination.throttle += this.pagination.baseThrottle;

    this.refresh();
  };

  /**
   * Handles download.
   *
   * @param {Event} event
   * @return void
   */
  DataGrid.prototype._onDownload =
  function _onDownload(event) {
    var type = $(event.currentTarget).data('grid-download');

    event.preventDefault();

    document.location = this.opt.source + '?' + this._buildAjaxURI(type);
  };

  /**
   * Handles layout switching.
   *
   * @param {Event} event
   * @return void
   */
  DataGrid.prototype._onLayoutChange =
  function _onLayoutChange(event) {
    var $el = $(event.currentTarget);
    var layout = $el.data('grid-switch-layout');

    this._getEl(this._getSelector('switch-layout')).removeClass(this.opt.cssClasses.activeLayout);

    $el.addClass(this.opt.cssClasses.activeLayout);

    layout = layout.split(':');

    this.setLayout(layout[0], layout[1]);
  };

  /**
   * Applies a filter.
   *
   * @param {Object} filter
   * @return {DataGrid|null}
   */
  DataGrid.prototype.applyFilter =
  function applyFilter(filter) {
    if (this._isFilterApplied(filter)) {
      return;
    }

    $(this).trigger('dg:applying', {filter: filter});

    this.appliedFilters.push(filter);

    $(this).trigger('dg:applied', {filter: filter});

    return this;
  };

  /**
   * Initialize default filters and sorts.
   *
   * @return void
   */
  DataGrid.prototype.applyDefaults =
  function applyDefaults() {
    var $filter;
    var $sort;
    var sorts;
    var sort;
    var direction;
    var type;
    var filterInfo;

    // Default filter elements
    _.each(this._getEl(this._getSelector('filter-default')),
      _.bind(function(filter) {
        $filter = this._getEl(filter);

        type = $filter.data('grid-type') || 'term';

        this.availableFilters[type]._extractFromElement($filter, false);
      }, this)
    );

    // Default filter presets
    _.each(_.keys(this.opt.filters), _.bind(function(name) {
      if (this.opt.filters[name].isDefault) {
        $filter = this._getEl(this._getSelector('filter', name));

        type = this.opt.filters[name].type || 'term';

        if ($filter.length) {
          this.availableFilters[type]._extractFromElement($filter, false);
        } else {
          filterInfo = {
            name: name
          };

          filterInfo = _.extend(filterInfo, this.opt.filters[name]);

          this.applyFilter(filterInfo);
        }
      }
    }, this));

    // Default sorts
    $sort = this._getEl(this._getSelector('sort-default'));

    if ($sort.length) {
      sort = $sort.data('grid-sort');
      sorts = sort.split(':');
      direction = ! _.isUndefined(sorts[1]) ? sorts[1] : 'asc';

      this.sorts.push({
        column: sorts[0],
        direction: direction
      });
    }
  };

  /**
   * Removes a filter by name.
   *
   * @param {String} name
   * @return void
   */
  DataGrid.prototype.removeFilter =
  function removeFilter(name) {
    var filter = _.find(this.appliedFilters, {name: name});

    if (! filter) {
      return;
    }

    $(this).trigger('dg:removing', {filter: filter});

    this.appliedFilters = _.reject(
      this.appliedFilters, function(query) {
        return query.name === name;
      }
    );

    if (this.opt.pagination.method === 'infinite') {
      this._resetLayouts();
    }

    this.goToPage(1);

    $(this).trigger('dg:removed', {filter: filter});
  };

  /**
   * Remove filters by their group name.
   *
   * @param {String} group
   * @return void
   */
  DataGrid.prototype._removeGroupFilters =
  function _removeGroupFilters(group) {
    var $group = $('[data-grid-group="' + group + '"]');

    if (! $group.length) {
      return;
    }

    $(this).trigger('dg:removing_group', {group: group});

    _.each($group.find('[data-grid-filter]'), _.bind(function(filter) {
      $(filter).removeClass(this.opt.cssClasses.appliedFilter);

      this.removeFilter($(filter).data('grid-filter'));
    }, this));

    $(this).trigger('dg:removed_group', {group: $group});
  };

  /**
   * Handles the page change from the pagination.
   *
   * @param {Object} $el
   * @return {DataGrid}
   */
  DataGrid.prototype._handlePageChange =
  function _handlePageChange($el) {
    var page = $el.data('grid-page');

    if (this.opt.pagination.method === 'infinite') {
      $el.data('grid-page', ++page);
    }

    this.goToPage(page);

    this.refresh();

    return this;
  };

  /**
   * Navigates to the given page.
   *
   * @param  {Number} page
   * @return {DataGrid}
   */
  DataGrid.prototype.goToPage =
  function goToPage(page) {
    var pageNumber = parseInt(page, 10);

    this.pagination.pageIndex = isNaN(pageNumber) ? 1 : page;

    return this;
  };

  /**
   * Sets the sort direction on the given element.
   *
   * @param  {Array} sorts
   * @return void
   */
  DataGrid.prototype._setSortDirection =
  function _setSortDirection(sorts) {
    var grid = this.grid;
    var ascClass = this.opt.cssClasses.ascClass;
    var descClass = this.opt.cssClasses.descClass;
    var remove;
    var add;

    // Remove all classes from other sorts
    $(this._getPlainSortSelector())
      .removeClass(ascClass)
      .removeClass(descClass);

    _.each(sorts, _.bind(function(sort) {
      remove = sort.direction === 'asc' ? descClass : ascClass;
      add = sort.direction === 'asc' ? ascClass : descClass;

      $('[data-grid-sort^="' + sort.column + '"]' + grid + ',' +
        grid + ' [data-grid-sort^="' + sort.column + '"]'
      ).removeClass(remove).addClass(add);
    }, this));
  };

  /**
   * Resets group filters before applying new ones.
   *
   * @param {Object} $el
   * @return void
   */
  DataGrid.prototype.resetBeforeApply =
  function resetBeforeApply($filter) {
    var $resetFilter = $filter.parents('[data-grid-reset-filter]');
    var $resetGroup = $filter.parents('[data-grid-reset-group]');
    var $group;
    var group;

    if (this.opt.pagination.method === 'infinite') {
      this._resetLayouts();
    }

    if ($filter.closest('[data-grid-reset]').length) {
      this.reset();
      return;
    }

    if (! _.isEmpty($filter.data('grid-reset-filter'))) {
      this.removeFilter($filter.data('grid-reset-filter'));
    } else if (
      ! _.isUndefined($filter.data('grid-reset-filter')) &&
      !_.isUndefined($filter.data('grid-search'))
    ) {
      _.each(
        _.filter(
          this.appliedFilters, {type: 'search'}
        ),
        _.bind(function(filter) {
          this.removeFilter(filter.name);
        }, this)
      );
    }

    if (! _.isEmpty($filter.data('grid-reset-group'))) {
      this._removeGroupFilters($filter.data('grid-reset-group'));
    }

    if (! _.isEmpty($resetFilter.data('grid-reset-filter'))) {
      this.removeFilter($resetFilter.data('grid-reset-filter'));
    }

    if ($resetGroup.length) {
      if (! _.isEmpty($resetGroup.data('grid-reset-group'))) {
        this._removeGroupFilters($resetGroup.data('grid-reset-group'));
      } else {
        $group = $filter.closest('[data-grid-group]');
        group = $group.data('grid-group');

        this._removeGroupFilters(group);
      }
    }
  };

  /**
   * Determines whether a filter is already applied or not.
   *
   * @param {Object} filter
   * @return {Boolean}
   */
  DataGrid.prototype._isFilterApplied =
  function _isFilterApplied(filter) {
    return _.isObject(_.find(this.appliedFilters, {name: filter.name}));
  };

  /**
   * Trims the given value.
   *
   * @param {String} value
   * @return {String}
   */
  DataGrid.prototype._cleanup =
  function _cleanup(value) {
    return $.trim(value);
  };

  /**
   * Extracts sorts from clicked element.
   *
   * @param {Object} $el
   * @param {Boolean} multi
   * @return void
   */
  DataGrid.prototype._extractSortsFromClick =
  function _extractSortsFromClick($el, multi) {
    var isMulti = multi && this.opt.sorting.multicolumn;
    var opt = this.opt;
    var sortArray = $el.data('grid-sort').split(':');
    var column = _.trim(sortArray[0]);
    var direction = _.trim(sortArray[1]) || 'asc';
    var sort = _.find(this.sorts, {column: column});

    if (! column) {
      return;
    }

    // Reset page for infinite grids
    if (opt.pagination.method === 'infinite') {
      this._resetLayouts();

      this.goToPage(1);
    }

    $(this).trigger('dg:sorting', {sort: sort});

    if (! sort) {
      sort = {
        column: column,
        direction: direction
      };

      if (isMulti) {
        this.sorts.push(sort);
      } else {
        this.sorts = [sort];
      }
    } else {
      if (
        opt.sorting.column === column &&
        sort.direction === opt.sorting.direction ||
        sort.direction === direction
      ) {
        sort.direction = (sort.direction === 'asc') ? 'desc' : 'asc';

        if (! isMulti) {
          this.sorts = [sort];
        }
      } else {
        this.sorts = _.reject(
          this.sorts, function(oldSort) {
            return oldSort.column === sort.column;
          }
        );
      }
    }

    $(this).trigger('dg:sorted', {sort: this.sorts});
  };

  /**
   * Parses sort expressions.
   *
   * @param {String} sortRaw
   * @return {Array}
   */
  DataGrid.prototype._parseSort =
  function _parseSort(sortRaw) {
    return _.compact(
      _.map(
        sortRaw.split(this.opt.delimiter.query),
        _.bind(function(expression) {
          var sort = expression.split(this.opt.delimiter.expression);

          if (_.isEmpty(_.trim(sort))) {
            return;
          }

          return {
            column: _.trim(sort[0]),
            direction: _.trim(sort[1]) || 'asc',
          };
        }, this)
      )
    );
  };

  /**
   * Sets sorts.
   *
   * @param {Array} sorts
   * @return void
   */
  DataGrid.prototype.setSort =
  function setSort(sorts) {
    this.sorts = (! _.isEmpty(sorts)) ? sorts : [];
  };

  /**
   * Extracts filters from route.
   *
   * @param {Array} routes
   * @return void
   */
  DataGrid.prototype._extractFiltersFromRoute =
  function _extractFiltersFromRoute(routes) {
    var extracted = false;
    var type;

    this.appliedFilters = [];

    _.each(routes, _.bind(function(fragment) {
      for (type in _.invert(_.keys(this.availableFilters))) {
        if (_.has(this.availableFilters, type)) {
          extracted =
            this.availableFilters[type].extractFromRoute(fragment) ||
            false;
        }

        if (extracted) {
          break;
        }
      }
    }, this));
  };

  /**
   * Extracts sorts from route.
   *
   * @param {String} sortRoute
   * @return void
   */
  DataGrid.prototype._extractSortsFromRoute =
  function _extractSortsFromRoute(sortRoute) {
    var sorts = sortRoute.split(this.opt.sorting.delimiter);
    var newSort;

    _.each(sorts, _.bind(function(sort) {
      newSort = sort.split(this.opt.delimiter.expression);

      this.sorts = _.reject(
        this.sorts, function(query) {
          return query.column === newSort[0];
        }
      );

      this.sorts.push({
        column: _.trim(newSort[0]),
        direction: _.trim(newSort[1]),
      });
    }, this));
  };

  /**
   * Extracts the current page from the route.
   *
   * @param {String} page
   * @return void
   */
  DataGrid.prototype._extractPageFromRoute =
  function _extractPageFromRoute(page) {
    var pageArray = page.split(this.opt.delimiter.expression);

    if (_.isEmpty(pageArray[1]) || pageArray[1] <= 0) {
      this.pagination.pageIndex = 1;
    } else {
      this.pagination.pageIndex = parseInt(pageArray[1], 10);
    }
  };

  /**
   * Extracts threshold from route.
   *
   * @param {String} threshold
   * @return void
   */
  DataGrid.prototype._extractThresholdFromRoute =
  function _extractThresholdFromRoute(threshold) {
    var extractedThreshold = threshold.split(this.opt.delimiter.expression)[1];

    this.setThreshold(extractedThreshold);
  };

  /**
   * Extracts throttle from route.
   *
   * @param {String} throttle
   * @return void
   */
  DataGrid.prototype._extractThrottleFromRoute =
  function _extractThrottleFromRoute(throttle) {
    var extractedThrottle = throttle.split(this.opt.delimiter.expression)[1];

    this.setThrottle(extractedThrottle);
  };

  /**
   * Extracts layout from route.
   *
   * @param {@string} layout
   * @return void
   */
  DataGrid.prototype._extractLayoutFromRoute =
  function _extractLayoutFromRoute(layout) {
    var _this = this;
    var layouts = layout.substr(7).split(',');
    var layoutParts;

    this._getEl(this._getSelector('switch-layout')).removeClass(this.opt.cssClasses.activeLayout);

    _.each(layouts, _.bind(function(layout) {
      _this._getEl(_this._getSelector('switch-layout', layout)).addClass(_this.opt.cssClasses.activeLayout);

      layoutParts = layout.split(this.opt.delimiter.expression);

      _this.setLayout(layoutParts[0], layoutParts[1], false);
    }, this));
  };

  /**
   * Build filter fragment.
   *
   * @return {String}
   */
  DataGrid.prototype._buildFilterFragment =
  function _buildFilterFragment() {
    return _.flatten(_.map(this.appliedFilters, _.bind(function(index) {
      if (_.has(this.availableFilters, index.type)) {
        return this.availableFilters[index.type].buildFragment(index);
      }
    }, this)));
  };

  /**
   * Build filter fragment.
   *
   * @return {String}
   */
  DataGrid.prototype.buildDefaultFilterFragment =
  function buildDefaultFilterFragment() {
    return _.flatten(_.map(this.appliedFilters, _.bind(function(index) {
      if (_.has(this.availableFilters, index.type)) {
        return this.availableFilters[index.type].buildFragment(index);
      }
    }, this)));
  };

  /**
   * Build sort fragment.
   *
   * @return {String}
   */
  DataGrid.prototype._buildSortFragment =
  function _buildSortFragment() {
    var delimiter = this.opt.delimiter.expression;

    var sorts = _.compact(_.map(this.sorts, _.bind(function(sort) {
      if (
        (sort.column !== this.opt.sorting.column ||
        sort.direction !== this.opt.sorting.direction)
      ) {
        return sort.column + delimiter + sort.direction;
      }
    }, this)));

    if (sorts.length) {
      return sorts.join(this.opt.sorting.delimiter);
    }
  };

  /**
   * Build page fragment.
   *
   * @return {String}
   */
  DataGrid.prototype._buildPageFragment =
  function _buildPageFragment() {
    if (
      this.pagination.pageIndex > 1 &&
      this.opt.pagination.method !== 'infinite'
    ) {
      return 'page' +
        this.opt.delimiter.expression +
        this.pagination.pageIndex;
    }
  };

  /**
   * Build layout fragment.
   *
   * @return {String}
   */
  DataGrid.prototype._buildLayoutFragment =
  function _buildLayoutFragment() {
    var fragments = [];

    // Skip layouts for infinite grids
    if (this.opt.pagination.method === 'infinite') {
      return;
    }

    _.each(this.baseLayouts, _.bind(function(layout, key) {
      if (key !== layout) {
        fragments.push(key + this.opt.delimiter.expression + layout);
      }
    }, this));

    if (! _.isEmpty(fragments)) {
      return 'layout' + this.opt.delimiter.expression + fragments.join(',');
    }
  };

  /**
   * Build throttle fragment.
   *
   * @return {String}
   */
  DataGrid.prototype._buildThrottleFragment =
  function _buildThrottleFragment() {
    if (! this.opt.pagination.throttle) {
      return;
    }

    if (
      this.defaults.pagination.throttle !== this.opt.pagination.throttle
    ) {
      return 'throttle' +
        this.opt.delimiter.expression +
        this.opt.pagination.throttle;
    }
  };

  /**
   * Build threshold fragment.
   *
   * @return {String}
   */
  DataGrid.prototype._buildThresholdFragment =
  function _buildThresholdFragment() {
    if (! this.opt.pagination.threshold) {
      return;
    }

    if (
      this.defaults.pagination.threshold !== this.opt.pagination.threshold
    ) {
      return 'threshold' +
        this.opt.delimiter.expression +
        this.opt.pagination.threshold;
    }
  };

  /**
   * Grabs all the results from the server.
   *
   * @return void
   */
  DataGrid.prototype._fetchResults =
  function _fetchResults(force) {
    force = force !== undefined ? force : false;

    var _this = this;
    var uri = this._buildAjaxURI();

    // Only render if the ajax uri hasn't changed. (layout changes)
    if (this.currentUri === uri && force !== true) {
      this._render();
    } else {
      $(this).trigger('dg:fetching', {grid: this});

      this._showLoader();

      $.ajax({
        url: this.opt.source,
        dataType: 'json',
        data: uri,
      })
        .done(function(data) {
          _this.response = data;

          _this._render();
        })
        .fail(_.bind(this._renderFailed, this));
    }

    this.currentUri = uri;
  };

  /**
   * Handles ajax response rendering
   *
   * @param {Object} response
   * @return void
   */
  DataGrid.prototype._render =
  function _render(response) {
    response = response !== undefined ? response : this.response;

    this.initial = false;
    var active;
    var layout;
    var data;
    var action;

    if (this.pagination.pageIndex > response.pages) {
      this.pagination.pageIndex = response.pages;

      this.refresh();

      return false;
    }

    _.each(_.keys(this.layouts), _.bind(function(key) {
      active = _.isUndefined(
        this.layouts[key].layout.data('grid-layout-disabled')
      );

      if (! active) {
        return;
      }

      layout = this.layouts[key].layout;

      data = this.layouts[key].template({grid: this, response: response, pagination: this.buildPagination(response)});
      action = this.layouts[key].action === 'update' ?
        'html' : this.layouts[key].action;

      // Render template
      layout[action](data);

      // Trigger layout event
      layout.trigger('dg:layout_rendered');
    }, this));

    this._setSortDirection(response.sort);

    this._hideLoader();

    this.searchActive = false;

    $(this).trigger('dg:hashchange');

    this.callback();

    $(this).trigger('dg:fetched', {response: response});
  };

  /**
   * Handles ajax failure response.
   *
   * @param {Object} jqXHR
   * @param {String} textStatus
   * @param {Object} errorThrown
   * @return void
   */
  DataGrid.prototype._renderFailed =
  function _renderFailed(jqXHR, textStatus, errorThrown) {
    console.error('fetchResults ' + jqXHR.status, errorThrown);

    this.searchActive = false;
  };

  /**
   * Builds the hash fragment.
   *
   * @return {String}
   */
  DataGrid.prototype.buildHash =
  function buildHash() {
    var base = _.compact(_.flatten([
      this._buildFilterFragment(),
      this._buildSortFragment(),
      this._buildPageFragment(),
      this._buildLayoutFragment(),
      this._buildThrottleFragment(),
      this._buildThresholdFragment()
    ])).join('/');

    var hash = this._getBaseHash() + base;

    return hash;
  };

  /**
   * Builds the ajax uri.
   *
   * @param {String} download
   * @return {String}
   */
  DataGrid.prototype._buildAjaxURI =
  function _buildAjaxURI(download) {
    var params = {
      filters: [],
      page: this.pagination.pageIndex,
      method: this.opt.pagination.method,
    };

    if (this.opt.pagination.threshold) {
      params.threshold = this.opt.pagination.threshold ?
        this.opt.pagination.threshold : this.defaults.pagination.threshold;
    }

    if (this.opt.pagination.throttle) {
      params.throttle = this.opt.pagination.throttle ?
        this.opt.pagination.throttle : this.defaults.pagination.throttle;
    }

    _.each(this.appliedFilters, _.bind(function(filter) {
      if (_.has(this.availableFilters, filter.type)) {
        params.filters = _.flatten(
          params.filters.concat(
            this.availableFilters[filter.type].buildParams(filter)
          )
        );
      }
    }, this));

    if (! _.isEmpty(this.sorts)) {
      params.sort = _.map(this.sorts, _.bind(function(sort) {
        return {
          column: sort.column,
          direction: sort.direction,
        };
      }, this));
    }

    if (download) {
      params.download = download;
    }

    return $.param(params);
  };

  /**
   * Builds the pagination.
   *
   * @param {Object} json
   * @return {Object}
   */
  DataGrid.prototype.buildPagination =
  function buildPagination(json) {
    var page = json.page;
    var next = json.nextPage;
    var prev = json.previousPage;
    var total = json.pages;

    switch (this.opt.pagination.method) {
    case 'single':
    case 'group':
      return this._buildRegularPagination(page, next, prev, total);
    case 'infinite':
      return this._buildInfinitePagination(page, next, total);
    }
  };

  /**
   * Builds regular pagination.
   *
   * @param {Number} page
   * @param {Number} next
   * @param {Number} prev
   * @param {Number} total
   * @return {Object}
   */
  DataGrid.prototype._buildRegularPagination =
  function _buildRegularPagination(page, next, prev, total) {
    var perPage = this._calculatePagination();
    var pageLimit;
    var pageStart;

    if (this.response.threshold > this.response.filtered) {
      pageLimit = this.response.filtered;
    } else if (this.pagination.pageIndex === 1) {
      pageLimit = perPage > this.response.filtered ?
        this.response.filtered : perPage;
    } else {
      pageLimit =
        this.response.total < (perPage * this.pagination.pageIndex) ?
        this.response.filtered : (perPage * this.pagination.pageIndex);
    }

    if (perPage === 0) {
      pageStart = 0;
    } else {
      if (this.pagination.pageIndex === 1) {
        if (this.response.filtered > 0) {
          pageStart = 1;
        } else {
          pageStart = 0;
        }
      } else {
        pageStart = perPage * (this.pagination.pageIndex - 1) + 1;
      }
    }

    return {
      pageStart: pageStart,
      pageLimit: pageLimit,
      nextPage: next,
      previousPage: prev,
      page: page,
      pages: total,
      total: this.response.total,
      filtered: this.response.filtered,
      throttle: this.opt.pagination.throttle ?
        this.opt.pagination.throttle : this.defaults.pagination.throttle,
      threshold: this.opt.pagination.threshold ?
        this.opt.pagination.threshold : this.defaults.pagination.threshold,
      perPage: perPage,
    };
  };

  /**
   * Builds the infinite pagination.
   *
   * @param {Number} page
   * @param {Number} next
   * @param {Number} total
   * @return {Object}
   */
  DataGrid.prototype._buildInfinitePagination =
  function _buildInfinitePagination(page, next, total) {
    return (! next) ? null : {
      page: page,
      total: total,
      infinite: true,
    };
  };

  /**
   * Calculate results per page.
   *
   * @return {Number}
   */
  DataGrid.prototype._calculatePagination =
  function _calculatePagination() {
    switch (this.response.method) {
    case 'single':
    case 'infinite':
      return this.response.throttle ?
        this.response.throttle : this.defaults.pagination.throttle;
    case 'group':
      return Math.ceil(
        this.response.filtered / (
          this.response.throttle ?
            this.response.throttle : this.defaults.pagination.throttle
        )
      );
    }
  };

  /**
   * Shows the loading bar.
   *
   * @return void
   */
  DataGrid.prototype._showLoader =
  function _showLoader() {
    var effect = this.opt.loader.showEffect;
    var duration = this.opt.loader.duration;
    var $loader = this._getEl(this._getLoaderSelector());

    if (! $loader.length) {
      return;
    }

    $loader.finish()[effect]({
      duration: duration,
    });
  };

  /**
   * Hides the loading bar.
   *
   * @return void
   */
  DataGrid.prototype._hideLoader =
  function _hideLoader() {
    var effect = this.opt.loader.hideEffect;
    var duration = this.opt.loader.duration;
    var $loader = this._getEl(this._getLoaderSelector());

    if (! $loader.length) {
      return;
    }

    $loader.finish()[effect]({
      duration: duration,
    });
  };

  /**
   * Resets Data Grid.
   *
   * @return {DataGrid}
   */
  DataGrid.prototype.reset =
  function reset() {
    var $search = $(this._getSearchSelector());
    var $sort = this._getEl(this._getSelector('sort'));
    var $group = this._getEl(this._getSelector('group', null, 'select'));
    var sort;

    $(this).trigger('dg:resetting');

    // Elements
    $sort.removeClass(this.opt.cssClasses.ascClass)
      .removeClass(this.opt.cssClasses.ascClass);
    $search.find('input').val('');
    $search.find('select').prop('selectedIndex', 0);
    $group.find(':eq(0)').prop('selected', true);

    // Defaults
    this.defaults = _.cloneDeep(this.originalDefaults);
    this.opt.pagination = _.clone(this.originalDefaults.pagination);

    // Filters
    this.appliedFilters = [];

    // Sort
    this.sorts = [];

    if (this.opt.sorting.column) {
      sort = this.opt.sorting.column +
        this.opt.delimiter.expression +
        this.opt.sorting.direction;

      this._extractSortsFromRoute(sort);
    }

    // Layout
    this._initLayouts();

    // Reset infinite layouts
    if (this.opt.pagination.method === 'infinite') {
      this._resetLayouts();
    }

    // Pagination
    this.pagination.pageIndex = 1;

    $(this).trigger('dg:reset');

    return this;
  };

  /**
   * Refreshes Data Grid
   *
   * @return {DataGrid}
   */
  DataGrid.prototype.refresh =
  function refresh(force) {
    this._fetchResults(force);

    return this;
  };

  /**
   * Returns the grids base hash.
   *
   * @return {String}
   */
  DataGrid.prototype._getBaseHash =
  function _getBaseHash() {
    if (this.manager.grids.length === 1) {
      return '';
    }

    return this.key + '/';
  };

  /**
   * Returns an element from the dom.
   *
   * @param {String} selector
   * @return {Object}
   */
  DataGrid.prototype._getEl =
  function _getEl(selector) {
    return this.$body.find(selector);
  };

  /**
   * Returns the data grid element selector.
   *
   * @return {String}
   */
  DataGrid.prototype._getGridSelector =
  function _getGridSelector() {
      return '[data-grid="' + this.key + '"]';
    };

  /**
   * Returns the element selector based
   * on type, value, prefix and postfix.
   *
   * @param {String} type
   * @param {String} value
   * @param {String} prefix
   * @param {String} postfix
   * @return {String}
   */
  DataGrid.prototype._getSelector =
  function _getSelector(type, value, prefix, postfix) {
    var gridSelector = this._getGridSelector();
    var selector = '';

    if (! _.isUndefined(prefix) && ! _.isNull(prefix)) {
      selector += prefix;
    }

    selector += '[data-grid';

    if (! _.isUndefined(type) && ! _.isNull(type)) {
      selector += '-' + type;
    }

    if (! _.isUndefined(value) && ! _.isNull(value)) {
      selector += '="' + value + '"';
    }

    selector += ']';

    if (! _.isUndefined(postfix) && ! _.isNull(postfix)) {
      selector += postfix;
    }

    return selector + gridSelector + ',' +
      gridSelector + ' ' + selector;
  };

  /**
   * Returns the data grid global reset selector.
   *
   * @return {String}
   */
  DataGrid.prototype._getGlobalResetSelector =
  function _getGlobalResetSelector() {
    return this._getSelector(
      'reset', null, null, ':not([data-grid-filter]):not([data-grid-group])'
    );
  };

  /**
   * Returns the data grid filter reset selector.
   *
   * @return {String}
   */
  DataGrid.prototype._getResetFilterSelector =
  function _getResetFilterSelector() {
    return this._getSelector('reset-filter', null, null, ':not(form)');
  };

  /**
   * Returns the data grid filter group reset selector.
   *
   * @return {String}
   */
  DataGrid.prototype._getResetGroupSelector =
  function _getResetGroupSelector() {
    return this._getSelector('reset-group', null, null, ':not([data-grid-group][data-grid-reset-group])');
  };

  /**
   * Returns the data grid sort selector.
   *
   * @return {String}
   */
  DataGrid.prototype._getPlainSortSelector =
  function _getPlainSortSelector() {
    return this._getSelector('sort', null, null, ':not([data-grid-filter])');
  };

  /**
   * Returns the data grid term selector.
   *
   * @return {String}
   */
  DataGrid.prototype._getTermSelector =
  function _getTermSelector() {
    return this._getSelector(
      'filter', null, null, ':not([data-grid-type="range"])'
    );
  };

  /**
   * Returns the data grid loader selector.
   *
   * @return {String}
   */
  DataGrid.prototype._getLoaderSelector =
  function _getLoaderSelector() {
    var gridSelector = this._getGridSelector();
    var loader = this.opt.loader.element;

    return gridSelector + loader + ',' + gridSelector + ' ' + loader;
  };

  /**
   * Returns the data grid search selector.
   *
   * @param {String} value
   * @return {String}
   */
  DataGrid.prototype._getSearchSelector =
  function _getSearchSelector(value) {
    var gridSelector = this._getGridSelector();
    var selector = '[data-grid-search]' + gridSelector;

    if (value) {
      selector += ' option[value=' + value + ']';
    }

    selector += ',' + gridSelector + ' ' + '[data-grid-search]';

    if (value) {
      selector += ' option[value=' + value + ']';
    }

    return selector;
  };

  /**
   * Returns the data grid range filter selector.
   *
   * @param {String} filter
   * @param {String} type
   * @return {String}
   */
  DataGrid.prototype._getRangeFilterSelector =
  function _getRangeFilterSelector(filter, type) {
    var gridSelector = this._getGridSelector();

    return '[data-grid-filter="' + filter + '"]' +
      '[data-grid-range="' + type + '"]' +
      gridSelector + ',' +
      gridSelector + ' ' +
      '[data-grid-filter="' + filter + '"]' +
      '[data-grid-range="' + type + '"]';
  };

  /**
   * Data grid callback.
   *
   * @return {DataGrid}
   */
  DataGrid.prototype.callback =
  function callback() {
    var _callback = this.opt.callback;

    if (_.isFunction(_callback)) {
      _callback.call(this);
    }

    return this;
  };

  /**
   * Applies the scroll feature animation.
   *
   * @return {DataGrid}
   */
  DataGrid.prototype.applyScroll =
  function applyScroll() {
    var scroll = this.opt.pagination.scroll;

    if (_.isFunction(scroll)) {
      scroll();
    } else if (scroll) {
      $(document.body).animate({
        scrollTop: $(scroll).offset().top
      }, 200);
    }

    return this;
  };

  /**
   * Check for operators.
   *
   * @return {Boolean}
   */
  DataGrid.prototype._checkOperator =
  function _checkOperator(value) {
    return />|<|!=|=|<=|>=|<>/.test(value);
  };

  /**
   * Sets the scroll value.
   *
   * @param  element  string
   * @return void
   */
  DataGrid.prototype.setScroll =
  function setScroll(element) {
    this.opt.pagination.scroll = element;
  };

  /**
   * Returns the throttle.
   *
   * @return {Number}
   */
  DataGrid.prototype.getThrottle =
  function getThrottle() {
    return this.opt.pagination.throttle;
  };

  /**
   * Sets the throttle.
   *
   * @param  value  int
   * @return void
   */
  DataGrid.prototype.setThrottle =
  function setThrottle(value) {
    this.opt.pagination.throttle = parseInt(value, 10);
  };

  /**
   * Returns the threshold.
   *
   * @return {Number}
   */
  DataGrid.prototype.getThreshold =
  function getThreshold() {
    return this.opt.pagination.threshold;
  };

  /**
   * Sets the threshold.
   *
   * @param  value  int
   * @return void
   */
  DataGrid.prototype.setThreshold =
  function setThreshold(value) {
    this.opt.pagination.threshold = parseInt(value, 10);
  };

  /**
   * Creates a new TermFilter.
   *
   * @param {DataGrid} grid
   * @return void
   */
  function TermFilter(grid) {
    this.grid = grid;
  }

  /**
   * Initializes the TermFilter.
   *
   * @return void
   */
  TermFilter.prototype.init = function init() {
    this._listeners();
  };

  /**
   * Adds listeners.
   *
   * @return void
   */
  TermFilter.prototype._listeners =
  function _listeners() {
    this.grid.$body.on('click',
      this.grid._getTermSelector(),
      _.bind(this._onFilter, this)
    );

    this.grid.$body.on('change',
      this.grid._getSelector('group', null, 'select'),
      _.bind(this._onSelectFilter, this)
    );
  };

  /**
   * Extracts filter data from a url fragment.
   *
   * @param {String} fragment
   * @return void
   */
  TermFilter.prototype.extractFromRoute =
  function extractFromRoute(fragment) {
    var $filter = this.grid._getEl(this.grid._getSelector('filter', fragment));
    var filterInfo;

    // Set the matching option if we're dealing with a select
    if ($filter[0] !== undefined && $filter[0].nodeName === 'OPTION') {
      $filter.parent().val($filter.val());
    }

    if (! _.has(this.grid.opt.filters, fragment) && ! $filter.length) {
      return;
    } else if (_.has(this.grid.opt.filters, fragment) && ! $filter.length) {
      filterInfo = {
        name: fragment
      };

      filterInfo = _.extend(filterInfo, this.grid.opt.filters[fragment]);

      this.grid.applyFilter(filterInfo);

      return;
    }

    this._extractFromElement($filter, false);

    return true;
  };

  /**
   * Builds url fragment from filter data.
   *
   * @param {TermFilter} filter
   * @return {String}
   */
  TermFilter.prototype.buildFragment =
  function buildFragment(filter) {
    return filter.name;
  };

  /**
   * Builds ajax request params from filter data.
   *
   * @param {TermFilter} filter
   * @return {Object}
   */
  TermFilter.prototype.buildParams =
  function buildParams(filter) {
    return _.map(filter.query, _.bind(function(query) {
      var queryString = {};

      if (query.operator) {
        queryString[query.column] = '|' +
          query.operator + this.grid._cleanup(query.value) +
          '|';
      } else {
        queryString[query.column] = this.grid._cleanup(query.value);
      }

      return queryString;
    }, this));
  };

  /**
   * Extracts filters from element.
   *
   * @param {Object} $filter
   * @param {Boolean} refresh
   * @return void
   */
  TermFilter.prototype._extractFromElement =
  function _extractFromElement($filter, refresh) {
    refresh = refresh !== undefined ? refresh : true;
    var sort = $filter.data('grid-sort');
    var filter = $filter.data('grid-filter');
    var resetGroup = $filter.data('grid-reset-group');

    if (! _.isEmpty(sort)) {
      this.grid.setSort(this.grid._parseSort(sort));
    }

    if (filter) {
      this.grid.removeFilter(filter);
      this.grid.resetBeforeApply($filter);
      this._apply($filter);
    } else if (! _.isUndefined(resetGroup)) {
      this.grid.resetBeforeApply($filter);
    }

    $filter.addClass(this.grid.opt.cssClasses.appliedFilter);

    if (refresh) {
      this.grid.goToPage(1);

      this.grid.refresh();
    }
  };

  /**
   * Handles filter click.
   *
   * @param {Event} event
   * @return void
   */
  TermFilter.prototype._onFilter =
  function _onFilter(event) {
    var $filter = $(event.currentTarget);
    var type = $filter.data('grid-type') || 'term';

    event.preventDefault();

    if (type !== 'term') {
      return;
    }

    this.grid.applyScroll();

    this._extractFromElement($filter);
  };

  /**
   * Handles select filter change.
   *
   * @param {Event} event
   * @return void
   */
  TermFilter.prototype._onSelectFilter =
  function _onSelectFilter(event) {
    var $select = $(event.currentTarget);
    var $filter = $select.find(':selected');
    var type = $filter.data('grid-type') || 'term';

    if (type !== 'term') {
      return;
    }

    this.grid.applyScroll();

    this._extractFromElement($filter);
  };

  /**
   * Applies a term filter.
   *
   * @param {Object} filter
   * @return void
   */
  TermFilter.prototype._apply =
  function _apply($filter) {
    var filter = $filter.data('grid-filter');
    var label = $filter.data('grid-label') || '';
    var query = $filter.data('grid-query') || '';
    var filterInfo = {
      name: filter,
      type: 'term',
      label: label
    };

    if (_.has(this.grid.opt.filters, filter)) {
      filterInfo = _.extend(filterInfo, this.grid.opt.filters[filter]);
    } else {
      if (query.length) {
        filterInfo.query = this._parseQuery(query);
      }
    }

    this.grid.applyFilter(filterInfo);
  };

  /**
   * Parses query strings.
   *
   * @param {String} queryRaw
   * @return {Object}
   */
  TermFilter.prototype._parseQuery =
  function _parseQuery(queryRaw) {
    return _.compact(
      _.map(
        queryRaw.split(this.grid.opt.delimiter.query),
        _.bind(function(expression) {
          var query;
          var queryInfo;

          if (_.isEmpty(expression)) {
            return;
          }

          query = _.trim(expression).split(this.grid.opt.delimiter.expression);

          if (query.length === 3) {
            queryInfo = {
              column: query[0],
              value: this.grid._cleanup(query[2]),
              operator: this.grid._checkOperator(query[1]) ? query[1] : null,
            };
          } else if (query.length === 2) {
            queryInfo = {
              column: query[0],
              value: this.grid._cleanup(query[1]),
            };
          }

          return queryInfo;
        }, this)
      )
    );
  };

  /**
   * Creates a new RangeFilter.
   *
   * @param {DataGrid} grid
   * @return void
   */
  function RangeFilter(grid) {
    this.grid = grid;
  }

  /**
   * Initializes the RangeFilter.
   *
   * @return void
   */
  RangeFilter.prototype.init = function init() {
    this._listeners();
  };

  /**
   * Adds listeners.
   *
   * @return void
   */
  RangeFilter.prototype._listeners =
  function _listeners() {
    var rangeSelector = this.grid._getSelector('type', 'range');

    this.grid.$body.on('click',
      rangeSelector,
      _.bind(this._onRange, this)
    );

    this.grid.$body.on('change',
      rangeSelector,
      _.bind(this._onRangeChange, this)
    );
  };

  /**
   * Extracts filter data from a url fragment.
   *
   * @param {String} fragment
   * @return void
   */
  RangeFilter.prototype.extractFromRoute =
  function extractFromRoute(fragment) {
    var delimiter = this.grid.opt.delimiter.expression;
    var query = fragment.split(delimiter);
    var name = query[0];
    var $filter = this.grid._getEl(this.grid._getSelector('filter', name));
    var type = $filter.data('grid-type');
    var range = $filter.data('grid-range');
    var date = $filter.data('grid-date');
    var queryFrom = query[1];
    var queryTo = query[2];
    var serverDateFormat = $filter.data('grid-server-date-format');
    var clientDateFormat = $filter.data('grid-client-date-format');
    var isDate;
    var $from;
    var $to;

    if (! $filter.length || type !== 'range') {
      return;
    }

    if (_.isUndefined(range)) {
      $filter.data(
        'grid-query', name + delimiter + queryFrom + delimiter + queryTo
      );
    } else {
      $from = this.grid._getEl(
        this.grid._getRangeFilterSelector(name, 'start')
      );
      $to = this.grid._getEl(
        this.grid._getRangeFilterSelector(name, 'end')
      );

      isDate = _.isUndefined(date) ? null : true;
      serverDateFormat = _.isNull(serverDateFormat) ?
        null : this.grid.opt.formats.serverDate;
      clientDateFormat = _.isNull(clientDateFormat) ?
        null : this.grid.opt.formats.clientDate;

      if (serverDateFormat && moment && isDate) {
        queryFrom = moment(queryFrom, serverDateFormat)
          .format(clientDateFormat);

        queryTo = moment(queryTo, serverDateFormat)
          .format(clientDateFormat);
      }

      if ($from.is(':input')) {
        $from.val(queryFrom);
      } else {
        $from.find(':input:first').val(queryFrom);
      }

      if ($to.is(':input')) {
        $to.val(queryTo);
      } else {
        $to.find(':input:first').val(queryTo);
      }
    }

    this._extractFromElement($filter, false);

    return true;
  };

  /**
   * Builds url fragment from filter data.
   *
   * @param {RangeFilter} filter
   * @return {String}
   */
  RangeFilter.prototype.buildFragment =
  function buildFragment(filter) {
    var delimiter = this.grid.opt.delimiter.expression;

    return filter.name +
      delimiter +
      filter.query.from +
      delimiter +
      filter.query.to;
  };

  /**
   * Builds ajax request params from filter data.
   *
   * @param {RangeFilter} filter
   * @return {Object}
   */
  RangeFilter.prototype.buildParams =
  function buildParams(filter) {
    var query = filter.query;
    var queryString = {};

    queryString[query.column] = '|>=' + query.from + '|<=' + query.to + '|';

    return queryString;
  };

  /**
   * Handles range clicks.
   *
   * @param {Event} event
   * @return void
   */
  RangeFilter.prototype._onRange =
  function _onRange(event) {
    var $filter = $(event.currentTarget);
    var type = $filter.data('grid-type') || 'range';

    event.preventDefault();

    if (type !== 'range' || !_.isUndefined($filter.data('grid-range'))) {
      return;
    }

    this._extractFromElement($filter);
  };

  /**
   * Handles range changes.
   *
   * @param {Event} event
   * @return void
   */
  RangeFilter.prototype._onRangeChange =
  function _onRangeChange(event) {
    var $filter = $(event.currentTarget);
    var type = $filter.data('grid-type');

    event.preventDefault();

    if (type !== 'range') {
      return;
    }

    this._extractFromElement($filter);
  };

  /**
   * Extracts range filters from element.
   *
   * @param {Object} $filter
   * @param {Boolean} refresh
   * @return void
   */
  RangeFilter.prototype._extractFromElement =
  function _extractFromElement($filter, refresh) {
    refresh = refresh !== undefined ? refresh : true;
    var name = $filter.data('grid-filter');
    var label = $filter.data('grid-label');
    var sort = $filter.data('grid-sort');
    var date = $filter.data('grid-date');
    var serverDate = $filter.data('grid-server-date-format');
    var clientDate = $filter.data('grid-client-date-format');
    var range = $filter.data('grid-range');
    var delimiter = this.grid.opt.delimiter.expression;
    var isDate = _.isUndefined(date) ? null : true;
    var serverDateFormat = _.isNull(serverDate) ?
      null : this.grid.opt.formats.serverDate;
    var clientDateFormat = _.isNull(clientDate) ?
      null : this.grid.opt.formats.clientDate;
    var query = $filter.data('grid-query');
    var filter;
    var column;
    var $from;
    var queryFrom;
    var $to;
    var queryTo;

    if (_.isUndefined(range)) {
      query = query.split(delimiter);
      column = query[0];
      queryFrom = query[1];
      queryTo = query[2];
    } else {
      $from = this.grid._getEl(
        this.grid._getRangeFilterSelector(name, 'start')
      );
      $to = this.grid._getEl(
        this.grid._getRangeFilterSelector(name, 'end')
      );
      column = $from.data('grid-query').split(delimiter)[0];
      queryFrom = $from.is(':input') ?
        $from.val() : $from.find(':input:first').val() ||
        $from.data('grid-query').split(delimiter)[1];
      queryTo = $to.is(':input') ?
        $to.val() : $to.find(':input:first').val() ||
        $to.data('grid-query').split(delimiter)[1];
    }

    if (_.isEmpty(queryFrom) || _.isEmpty(queryTo)) {
      return;
    }

    this.grid.removeFilter(name);

    this.grid.resetBeforeApply($filter);

    if (! _.isEmpty(sort)) {
      this.grid.setSort(this._parseSort(sort));
    }

    if (serverDateFormat && moment && isDate) {
      queryFrom = moment(queryFrom, clientDateFormat).format(serverDateFormat);

      queryTo = moment(queryTo, clientDateFormat).format(serverDateFormat);
    }

    filter = {
      name: name,
      type: 'range',
      label: label,
      query: {
        column: column,
        from: queryFrom,
        to: queryTo,
      },
    };

    this.grid.applyFilter(filter);

    $filter.addClass(this.grid.opt.cssClasses.appliedFilter);

    if (refresh) {
      this.grid.goToPage(1);

      this.grid.refresh();
    }
  };

  /**
   * Creates a new SearchFilter.
   *
   * @param {DataGrid} grid
   * @return void
   */
  function SearchFilter(grid) {
    this.grid = grid;
  }

  /**
   * Initializes the SearchFilter.
   *
   * @return void
   */
  SearchFilter.prototype.init = function init() {
    this._listeners();
  };

  /**
   * Adds listeners.
   *
   * @return void
   */
  SearchFilter.prototype._listeners =
  function _listeners() {
    this.grid.$body.on('submit',
      this.grid._getSearchSelector(),
      _.bind(this._onSearch, this)
    );
  };

  /**
   * Extracts filter data from a url fragment.
   *
   * @param {String} fragment
   * @return void
   */
  SearchFilter.prototype.extractFromRoute =
  function extractFromRoute(fragment) {
    var route = fragment.split(this.grid.opt.delimiter.expression);
    var $option = this.grid._getEl(this.grid._getSearchSelector(route[0]));
    var filter;

    if (route[0] !== 'all' && ! $option.length) {
      return;
    }

    if (route.length === 3) {
      filter = {
        name: 'search:' + route[0] + ':' +
          route[2].toLowerCase(),
        type: 'search',
        query: {
          column: route[0],
          value: this.grid._cleanup(route[2]),
          operator: route[1],
        },
      };
    } else {
      filter = {
        name: 'search:' + route[0] + ':' +
          route[1].toLowerCase(),
        type: 'search',
        query: {
          column: route[0],
          value: this.grid._cleanup(route[1]),
        },
      };
    }

    this.grid.applyFilter(filter);

    return true;
  };

  /**
   * Builds url fragment from filter data.
   *
   * @param {SearchFilter} filter
   * @return {String}
   */
  SearchFilter.prototype.buildFragment =
  function buildFragment(filter) {
    return filter.query.column +
      this.grid.opt.delimiter.expression +
      filter.query.value;
  };

  /**
   * Builds ajax request params from filter data.
   *
   * @param {SearchFilter} filter
   * @return {Object}
   */
  SearchFilter.prototype.buildParams =
  function buildParams(filter) {
    var query = filter.query;
    var queryString = {};

    if (query.column === 'all') {
      queryString = (query.operator) ?
        '|' + query.operator + this.grid._cleanup(query.value) + '|' :
        this.grid._cleanup(query.value);
    } else {
      queryString[query.column] = (query.operator) ?
        '|' + query.operator + this.grid._cleanup(query.value) + '|' :
        this.grid._cleanup(query.value);
    }

    return queryString;
  };

  /**
   * Handles search form submission.
   *
   * @param {Event} event
   * @return void
   */
  SearchFilter.prototype._onSearch =
  function _onSearch(event) {
    var $form = $(event.currentTarget);

    event.preventDefault();

    this._extractFromElement($form);
  };

  /**
   * Extracts filters from search form.
   *
   * @param {Object} $form
   * @return void
   */
  SearchFilter.prototype._extractFromElement =
  function _extractFromElement($form) {
    var $input = $form.find('input');
    var $select = $form.find('select:not([data-grid-group])');
    var column = $select.val() || 'all';
    var value = $.trim($input.val());
    var operator = $form.data('grid-operator');
    var filter;

    this.grid.searchActive = true;

    clearTimeout(this.grid.searchTimeout);

    if (! value.length) {
      return;
    }

    if ($select.length) {
      $select.prop('selectedIndex', 0);
    }

    // Remove live search filter
    this.grid.appliedFilters = _.reject(
      this.grid.appliedFilters, function(query) {
        return query.type === 'live';
      }
    );

    filter = {
      name: 'search:' + column + ':' +
        value.toLowerCase(),
      type: 'search',
      query: {
        column: column,
        value: this.grid._cleanup(value),
        operator: operator,
      },
    };

    $input.val('').data('old', '');

    this.grid.resetBeforeApply($form);

    if (! _.isEmpty($form.data('grid-sort'))) {
      this.grid.setSort(this._parseSort($form.data('grid-sort')));
    }

    this.grid.applyFilter(filter);

    this.grid.goToPage(1);

    this.grid.refresh();
  };

  /**
   * Creates a new LiveFilter.
   *
   * @param {DataGrid} grid
   * @return void
   */
  function LiveFilter(grid) {
    this.grid = grid;
  }

  /**
   * Initializes the LiveFilter.
   *
   * @return void
   */
  LiveFilter.prototype.init = function init() {
    this._listeners();
  };

  /**
   * Adds listeners.
   *
   * @return void
   */
  LiveFilter.prototype._listeners =
  function _listeners() {
    if (this.grid.opt.search.live) {
      this.grid.$body.on('keyup',
        this.grid._getSearchSelector(),
        _.bind(this._onLiveSearch, this)
      );
    }
  };

  /**
   * Extracts filter data from a url fragment.
   *
   * @param {String} fragment
   * @return void
   */
  LiveFilter.prototype.extractFromRoute =
  function extractFromRoute() {

  };

  /**
   * Builds url fragment from filter data.
   *
   * @param {LiveFilter} filter
   * @return {String}
   */
  LiveFilter.prototype.buildFragment =
  function buildFragment() {

  };

  /**
   * Builds ajax request params from filter data.
   *
   * @param {LiveFilter} filter
   * @return {Object}
   */
  LiveFilter.prototype.buildParams =
  function buildParams(filter) {
    return this.grid.availableFilters.search.buildParams(filter);
  };

  /**
   * Handles live search.
   *
   * @param {Event} event
   * @return void
   */
  LiveFilter.prototype._onLiveSearch =
  function _onLiveSearch(event) {
    var elem = $(event.currentTarget);

    if (event.keyCode === 13) {
      return;
    }

    event.preventDefault();

    this._extractFromElement(elem);
  };

  /**
   * Applies live search filter.
   *
   * @param {Object} $form
   * @return void
   */
  LiveFilter.prototype._extractFromElement =
  function _extractFromElement($form) {
    if (this.grid.searchActive) {
      return;
    }

    clearTimeout(this.grid.searchTimeout);

    this.grid.searchTimeout = setTimeout(_.bind(function($formEl) {
      var $input = $formEl.find('input');
      var $select = $formEl.find('select:not([data-grid-group])');
      var column = $select.val() || 'all';
      var value = $.trim($input.val());
      var old = $input.data('old');
      var operator = $formEl.data('operator');
      var filter;

      if (this.grid.opt.pagination.method === 'infinite') {
        this.grid._resetLayouts();
      }

      if (old) {
        this.grid.appliedFilters = _.reject(
          this.grid.appliedFilters, function(query) {
            return query.type === 'live';
          }
        );

        if (! value.length) {
          this.grid.goToPage(1);

          this.grid.refresh();

          return;
        }
      }

      filter = {
        name: 'live',
        type: 'live',
        query: {
          column: column,
          value: this.grid._cleanup(value),
          operator: operator,
        },
      };

      $input.data('old', value);

      this.grid.applyFilter(filter);

      this.grid.goToPage(1);

      this.grid.refresh();
    }, this, $form), this.grid.opt.search.timeout);
  };

  var previousDataGridManager = global.DataGridManager;

  DataGridManager.noConflict =
  function noConflict() {
    global.DataGridManager = previousDataGridManager;

    return DataGridManager;
  };

  global.DataGridManager = DataGridManager;

  var previousDataGrid = global.DataGrid;

  DataGrid.noConflict =
  function noConflict() {
    global.DataGrid = previousDataGrid;

    return DataGrid;
  };

  global.DataGrid = DataGrid;

  var previousTermFilter = global.TermFilter;

  TermFilter.noConflict =
  function noConflict() {
    global.TermFilter = previousTermFilter;

    return TermFilter;
  };

  global.TermFilter = TermFilter;

  var previousRangeFilter = global.RangeFilter;

  RangeFilter.noConflict =
  function noConflict() {
    global.RangeFilter = previousRangeFilter;

    return RangeFilter;
  };

  global.RangeFilter = RangeFilter;

  var previousSearchFilter = global.SearchFilter;

  SearchFilter.noConflict =
  function noConflict() {
    global.SearchFilter = previousSearchFilter;

    return SearchFilter;
  };

  global.SearchFilter = SearchFilter;

  var previousLiveFilter = global.LiveFilter;

  LiveFilter.noConflict =
  function noConflict() {
    global.LiveFilter = previousLiveFilter;

    return LiveFilter;
  };

  global.LiveFilter = LiveFilter;
}(this);

/*
 * Cartalyst Demo
 * Copyright 2017 Cartalyst LLC. All Rights Reserved.
 *
 * Provides helpers for various sections of the application.
 *
 */

var Demo;

;(function (window, document, $, undefined) {
    'use strict';

    Demo = Demo || {
        App: {},
        Cache: {},
    };

    // Cache common selectors
    Demo.Cache.$win  = $(window);
    Demo.Cache.$body = $(document.body);

    // Initialize functions
    Demo.App.init = function () {
        Demo.App
            .foundation()
            .listeners()
            .wrapCodeBlocks()
            .initHighlightJs()
            .initClipboard()
            .addClasses()
            .createTutorial()
        ;
    };

    // Add Listeners
	Demo.App.listeners = function()
	{
        Demo.Cache.$body
			.on('mouseover', '.js-demo-preview:not(code .js-demo-preview)', Demo.App.previewAttributes)
            .on('mouseenter', 'option.js-demo-preview:not(code .js-demo-preview)', Demo.App.previewAttributes)
        ;

		return this;
	};

    // Initialize Foundation 6
    Demo.App.foundation = function ()
    {
        Demo.Cache.$body.foundation();

        return this;
    }

    // Show preview of data-grid attributes from element on hover.
    Demo.App.previewAttributes = function (event) {

        var target = $(event.target);
        var tag = target.closest('.js-demo-preview').prop('tagName').toLowerCase();
        var attributes = target.closest('.js-demo-preview').data();

        // find all data-grid attributes
        var filteredAttributes = _.forEach(attributes, function(val, key) {
            if (key.substr(0, 4) === 'grid') {
                return {key: val};
            }
        });

        var newAttributes = [];

        _.each(filteredAttributes, function(val, key) {
            key = 'data-' + _.snakeCase(key).replace(/_/g, '-');

            newAttributes.push(key + '="' + val + '"');
        });

        // create new element from target and newAttributes
        var element = '<' + tag + ' ' + newAttributes.join(' ') + '></' + tag + '>';

        //update preview area with code example.
        $('.preview > div').fadeIn();
        $('.preview pre code').text(element);

        return this;
    };

    // Create code blocks generated from markdown.
    Demo.App.wrapCodeBlocks = function () {
        $('.article--tutorial h5').each(function () {
            $(this)
                .addClass('source_code__header')
                .next('p')
                .addClass('source_code__block')
                .wrapInner('<pre></pre>')
            ;

            $(this).next().addBack().wrapAll('<div class="source_code"></div>');
        });

        // Add Actions
        $('.source_code').each(function () {
            var el = $(this);
            var slug = Demo.App.slugify(el.children('.source_code__header').html());

            $(this).append('<nav class="source_code__actions"></nav>');

            // Add the copy to clipboard button
            el
                .find('.source_code__actions')
                .append('<button class="small button" data-copy-text data-clipboard-target="#'+slug+'"><i class="material-icons">content_cut</i></button>')
            ;

            el.find('.source_code__block > pre > code').attr('id', slug);
        });

        return this;
    };

    // Syntax highlighting for code blocks.
    Demo.App.initHighlightJs = function () {

        hljs.initHighlightingOnLoad();

        return this;
    };

    // Readability for examples, add framework, app specific classes here.
    Demo.App.addClasses = function () {
        if ($('[data-example]').length) {

            // What example is being displayed
            var type = $('[data-example]').data('example');

            switch(type) {
                case 'crops':

                    // Filters
                    $('[data-grid-filter]').addClass('js-demo-preview');
                    $('[data-grid-sort]').addClass('js-demo-preview');

                    // Layouts
                    $('[data-grid-switch-layout]').addClass('js-demo-preview');

                    // Search Form
                    $('.search form > div').addClass('mdl-textfield mdl-js-textfield');
                    $('.search form > div input').addClass('mdl-textfield__input');
                    $('.search form > div label').addClass('mdl-textfield__label');

                    // Table
                    $('th').addClass('js-demo-preview');

                    // Applied filters
                    $('[data-grid-layout="filters"]').on('dg:layout_rendered', function() {
                        $(this).find('button').addClass('js-demo-preview');
                    });

                    // Pagination
                    $('[data-grid-layout="pagination"]').on('dg:layout_rendered', function() {
                        $(this).find('button').addClass('js-demo-preview');
                    });

                    break;
                case 'apricots':

                    // Group Filters
                    $('[data-grid-group] > button').addClass('js-demo-preview');

                    break;
                case 'fruits':

                    // Group Filters
                    $('[data-grid-group] > button').addClass('js-demo-preview');

                    break;
                default:
                    // Default
                ;
            }
        };

        return this;
    };

    // Initializes the Clipboard.js
    Demo.App.initClipboard = function () {
        var clipboard = new Clipboard('[data-copy-text]');

        clipboard.on('success', function (e) {
            e.clearSelection();

            // Show success notice
            $('.source_code__actions').prepend('<span class="action__message">Copied!</span>')

            $('.action__message').fadeOut(2500, function () {
                $(this).remove();
            });
        });

        clipboard.on('error', function (e) {
            // Show fallback tooltip
            $('.source_code__actions').prepend('<span class="action__message">'+Demo.App.fallbackMessage()+'</span>')

            $('.action__message').fadeOut(4500, function () {
                $(this).remove();
            });
        });

        return this;
    };

    // Slugifies the given string
    Demo.App.slugify = function (str) {
        if (str === undefined) return;

        return str
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .toLowerCase()
            .replace(/\s/g,'-')
        ;
    };

    Demo.App.fallbackMessage = function () {
        var message = '';

        if(/iPhone|iPad/i.test(navigator.userAgent)) {
            message = 'No support :(';
        }
        else if (/Mac/i.test(navigator.userAgent)) {
            message = 'Press ⌘-C to copy';
        }
        else {
            message = 'Press Ctrl-C to copy';
        }

        return message;
    };

    Demo.App.createTutorial = function () {
        $("article h3").each(function() {
            var slug = Demo.App.slugify($(this).text());
            $(this).attr('id',slug);
          }
        );
    }

    // Job done, lets run
    Demo.App.init();

})(window, document, jQuery);
