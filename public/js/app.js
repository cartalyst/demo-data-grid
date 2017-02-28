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
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define("hljs",[],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var n,t,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return w(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;r>n;n++)if(w(i[n])||a(i[n]))return i[n]}function o(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function u(e){l+="</"+t(e)+">"}function c(e){("start"==e.event?o:u)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=i();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(o)}else"start"==g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return l+n(a.substr(s))}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var u={},c=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?c("keyword",a.k):Object.keys(a.k).forEach(function(e){c(e,a.k[e])}),a.k=u}a.lR=t(a.l||/\b\w+\b/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,t,a,i){function o(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function h(e,n,t,r){var a=r?"":E.classPrefix,i='<span class="'+a,o=t?"":"</span>";return i+=e+'">',i+n+o}function p(){if(!L.k)return n(M);var e="",t=0;L.lR.lastIndex=0;for(var r=L.lR.exec(M);r;){e+=n(M.substr(t,r.index-t));var a=g(L,r);a?(B+=a[1],e+=h(a[0],n(r[0]))):e+=n(r[0]),t=L.lR.lastIndex,r=L.lR.exec(M)}return e+n(M.substr(t))}function d(){var e="string"==typeof L.sL;if(e&&!x[L.sL])return n(M);var t=e?l(L.sL,M,!0,y[L.sL]):f(M,L.sL.length?L.sL:void 0);return L.r>0&&(B+=t.r),e&&(y[L.sL]=t.top),h(t.language,t.value,!1,!0)}function b(){return void 0!==L.sL?d():p()}function v(e,t){var r=e.cN?h(e.cN,"",!0):"";e.rB?(k+=r,M=""):e.eB?(k+=n(t)+r,M=""):(k+=r,M=t),L=Object.create(e,{parent:{value:L}})}function m(e,t){if(M+=e,void 0===t)return k+=b(),0;var r=o(t,L);if(r)return k+=b(),v(r,t),r.rB?0:t.length;var a=u(L,t);if(a){var i=L;i.rE||i.eE||(M+=t),k+=b();do L.cN&&(k+="</span>"),B+=L.r,L=L.parent;while(L!=a.parent);return i.eE&&(k+=n(t)),M="",a.starts&&v(a.starts,""),i.rE?0:t.length}if(c(t,L))throw new Error('Illegal lexeme "'+t+'" for mode "'+(L.cN||"<unnamed>")+'"');return M+=t,t.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var R,L=i||N,y={},k="";for(R=L;R!=N;R=R.parent)R.cN&&(k=h(R.cN,"",!0)+k);var M="",B=0;try{for(var C,j,I=0;;){if(L.t.lastIndex=I,C=L.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}for(m(t.substr(I)),R=L;R.parent;R=R.parent)R.cN&&(k+="</span>");return{r:B,value:k,language:e,top:L}}catch(O){if(-1!=O.message.indexOf("Illegal"))return{r:0,value:n(t)};throw O}}function f(e,t){t=t||E.languages||Object.keys(x);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(w(n)){var t=l(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function g(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\n/g,"<br>")),e}function h(e,n,t){var r=n?R[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function p(e){var n=i(e);if(!a(n)){var t;E.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?l(n,r,!0):f(r),s=u(t);if(s.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=c(s,u(p),r)}o.value=g(o.value),e.innerHTML=o.value,e.className=h(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function m(n,t){var r=x[n]=t(e);r.aliases&&r.aliases.forEach(function(e){R[e]=n})}function N(){return Object.keys(x)}function w(e){return e=(e||"").toLowerCase(),x[e]||x[R[e]]}var E={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},x={},R={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=g,e.highlightBlock=p,e.configure=d,e.initHighlighting=b,e.initHighlightingOnLoad=v,e.registerLanguage=m,e.listLanguages=N,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",a={cN:"function",b:c+"\\(",rB:!0,eE:!0,e:"\\("},r={cN:"rule",b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{cN:"value",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"id",b:/\#[A-Za-z0-9_-]+/},{cN:"class",b:/\.[A-Za-z0-9_-]+/},{cN:"attr_selector",b:/\[/,e:/\]/,i:"$"},{cN:"pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:c,r:0},{cN:"rules",b:"{",e:"}",i:/\S/,c:[e.CBCM,r]}]}});hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}});hljs.registerLanguage("php",function(e){var c={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},a={cN:"preprocessor",b:/<\?(php)?|\?>/},i={cN:"string",c:[e.BE,a],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},t={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"},a]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},a,c,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,i,t]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},i,t]}});hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"pi",r:10,b:/^\s*['"]use (strict|asm)['"]/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\s*[);\]]/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:[e.CLCM,e.CBCM]}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{bK:"import",e:"[;$]",k:"import from as",c:[e.ASM,e.QSM]},{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]}],i:/#/}});hljs.registerLanguage("sql",function(e){var t=e.C("--","$");return{cI:!0,i:/[<>{}*]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",e:/;/,eW:!0,k:{keyword:"abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}});
function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(t){"use strict";function e(t){if(void 0===Function.prototype.name){var e=/function\s([^(]{1,})\(/,i=e.exec(t.toString());return i&&i.length>1?i[1].trim():""}return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name}function i(t){return"true"===t||"false"!==t&&(isNaN(1*t)?t:parseFloat(t))}function n(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var s="6.3.0",o={version:s,_plugins:{},_uuids:[],rtl:function(){return"rtl"===t("html").attr("dir")},plugin:function(t,i){var s=i||e(t),o=n(s);this._plugins[o]=this[s]=t},registerPlugin:function(t,i){var s=i?n(i):e(t.constructor).toLowerCase();t.uuid=this.GetYoDigits(6,s),t.$element.attr("data-"+s)||t.$element.attr("data-"+s,t.uuid),t.$element.data("zfPlugin")||t.$element.data("zfPlugin",t),t.$element.trigger("init.zf."+s),this._uuids.push(t.uuid)},unregisterPlugin:function(t){var i=n(e(t.$element.data("zfPlugin").constructor));this._uuids.splice(this._uuids.indexOf(t.uuid),1),t.$element.removeAttr("data-"+i).removeData("zfPlugin").trigger("destroyed.zf."+i);for(var s in t)t[s]=null},reInit:function(e){var i=e instanceof t;try{if(i)e.each(function(){t(this).data("zfPlugin")._init()});else{var s=typeof e,o=this,a={object:function(e){e.forEach(function(e){e=n(e),t("[data-"+e+"]").foundation("_init")})},string:function(){e=n(e),t("[data-"+e+"]").foundation("_init")},undefined:function(){this.object(Object.keys(o._plugins))}};a[s](e)}}catch(t){console.error(t)}finally{return e}},GetYoDigits:function(t,e){return t=t||6,Math.round(Math.pow(36,t+1)-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-"+e:"")},reflow:function(e,n){"undefined"==typeof n?n=Object.keys(this._plugins):"string"==typeof n&&(n=[n]);var s=this;t.each(n,function(n,o){var a=s._plugins[o],r=t(e).find("[data-"+o+"]").addBack("[data-"+o+"]");r.each(function(){var e=t(this),n={};if(e.data("zfPlugin"))return void console.warn("Tried to initialize "+o+" on an element that already has a Foundation plugin.");if(e.attr("data-options")){e.attr("data-options").split(";").forEach(function(t,e){var s=t.split(":").map(function(t){return t.trim()});s[0]&&(n[s[0]]=i(s[1]))})}try{e.data("zfPlugin",new a(t(this),n))}catch(t){console.error(t)}finally{return}})})},getFnName:e,transitionend:function(t){var e,i={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},n=document.createElement("div");for(var s in i)"undefined"!=typeof n.style[s]&&(e=i[s]);return e?e:(e=setTimeout(function(){t.triggerHandler("transitionend",[t])},1),"transitionend")}};o.util={throttle:function(t,e){var i=null;return function(){var n=this,s=arguments;null===i&&(i=setTimeout(function(){t.apply(n,s),i=null},e))}}};var a=function(i){var n=typeof i,s=t("meta.foundation-mq"),a=t(".no-js");if(s.length||t('<meta class="foundation-mq">').appendTo(document.head),a.length&&a.removeClass("no-js"),"undefined"===n)o.MediaQuery._init(),o.reflow(this);else{if("string"!==n)throw new TypeError("We're sorry, "+n+" is not a valid parameter. You must use a string representing the method you wish to invoke.");var r=Array.prototype.slice.call(arguments,1),l=this.data("zfPlugin");if(void 0===l||void 0===l[i])throw new ReferenceError("We're sorry, '"+i+"' is not an available method for "+(l?e(l):"this element")+".");1===this.length?l[i].apply(l,r):this.each(function(e,n){l[i].apply(t(n).data("zfPlugin"),r)})}return this};window.Foundation=o,t.fn.foundation=a,function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var i=t[e];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var e=Date.now(),i=Math.max(n+16,e);return setTimeout(function(){t(n=i)},i-e)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},s=function(){return i.apply(this instanceof n?this:t,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),s.prototype=new n,s})}(jQuery),!function(t){function e(t,e,n,s){var o,a,r,l,u=i(t);if(e){var d=i(e);a=u.offset.top+u.height<=d.height+d.offset.top,o=u.offset.top>=d.offset.top,r=u.offset.left>=d.offset.left,l=u.offset.left+u.width<=d.width+d.offset.left}else a=u.offset.top+u.height<=u.windowDims.height+u.windowDims.offset.top,o=u.offset.top>=u.windowDims.offset.top,r=u.offset.left>=u.windowDims.offset.left,l=u.offset.left+u.width<=u.windowDims.width;var h=[a,o,r,l];return n?r===l==!0:s?o===a==!0:h.indexOf(!1)===-1}function i(t,e){if(t=t.length?t[0]:t,t===window||t===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var i=t.getBoundingClientRect(),n=t.parentNode.getBoundingClientRect(),s=document.body.getBoundingClientRect(),o=window.pageYOffset,a=window.pageXOffset;return{width:i.width,height:i.height,offset:{top:i.top+o,left:i.left+a},parentDims:{width:n.width,height:n.height,offset:{top:n.top+o,left:n.left+a}},windowDims:{width:s.width,height:s.height,offset:{top:o,left:a}}}}function n(t,e,n,s,o,a){var r=i(t),l=e?i(e):null;switch(n){case"top":return{left:Foundation.rtl()?l.offset.left-r.width+l.width:l.offset.left,top:l.offset.top-(r.height+s)};case"left":return{left:l.offset.left-(r.width+o),top:l.offset.top};case"right":return{left:l.offset.left+l.width+o,top:l.offset.top};case"center top":return{left:l.offset.left+l.width/2-r.width/2,top:l.offset.top-(r.height+s)};case"center bottom":return{left:a?o:l.offset.left+l.width/2-r.width/2,top:l.offset.top+l.height+s};case"center left":return{left:l.offset.left-(r.width+o),top:l.offset.top+l.height/2-r.height/2};case"center right":return{left:l.offset.left+l.width+o+1,top:l.offset.top+l.height/2-r.height/2};case"center":return{left:r.windowDims.offset.left+r.windowDims.width/2-r.width/2,top:r.windowDims.offset.top+r.windowDims.height/2-r.height/2};case"reveal":return{left:(r.windowDims.width-r.width)/2,top:r.windowDims.offset.top+s};case"reveal full":return{left:r.windowDims.offset.left,top:r.windowDims.offset.top};case"left bottom":return{left:l.offset.left,top:l.offset.top+l.height+s};case"right bottom":return{left:l.offset.left+l.width+o-r.width,top:l.offset.top+l.height+s};default:return{left:Foundation.rtl()?l.offset.left-r.width+l.width:l.offset.left+o,top:l.offset.top+l.height+s}}}Foundation.Box={ImNotTouchingYou:e,GetDimensions:i,GetOffsets:n}}(jQuery),!function(t){function e(t){var e={};for(var i in t)e[t[i]]=t[i];return e}var i={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},n={},s={keys:e(i),parseKey:function(t){var e=i[t.which||t.keyCode]||String.fromCharCode(t.which).toUpperCase();return e=e.replace(/\W+/,""),t.shiftKey&&(e="SHIFT_"+e),t.ctrlKey&&(e="CTRL_"+e),t.altKey&&(e="ALT_"+e),e=e.replace(/_$/,"")},handleKey:function(e,i,s){var o,a,r,l=n[i],u=this.parseKey(e);if(!l)return console.warn("Component not defined!");if(o="undefined"==typeof l.ltr?l:Foundation.rtl()?t.extend({},l.ltr,l.rtl):t.extend({},l.rtl,l.ltr),a=o[u],r=s[a],r&&"function"==typeof r){var d=r.apply();(s.handled||"function"==typeof s.handled)&&s.handled(d)}else(s.unhandled||"function"==typeof s.unhandled)&&s.unhandled()},findFocusable:function(e){return!!e&&e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!t(this).is(":visible")||t(this).attr("tabindex")<0)})},register:function(t,e){n[t]=e},trapFocus:function(t){var e=Foundation.Keyboard.findFocusable(t),i=e.eq(0),n=e.eq(-1);t.on("keydown.zf.trapfocus",function(t){t.target===n[0]&&"TAB"===Foundation.Keyboard.parseKey(t)?(t.preventDefault(),i.focus()):t.target===i[0]&&"SHIFT_TAB"===Foundation.Keyboard.parseKey(t)&&(t.preventDefault(),n.focus())})},releaseFocus:function(t){t.off("keydown.zf.trapfocus")}};Foundation.Keyboard=s}(jQuery),!function(t){function e(t){var e={};return"string"!=typeof t?e:(t=t.trim().slice(1,-1))?e=t.split("&").reduce(function(t,e){var i=e.replace(/\+/g," ").split("="),n=i[0],s=i[1];return n=decodeURIComponent(n),s=void 0===s?null:decodeURIComponent(s),t.hasOwnProperty(n)?Array.isArray(t[n])?t[n].push(s):t[n]=[t[n],s]:t[n]=s,t},{}):e}var i={queries:[],current:"",_init:function(){var i,n=this,s=t(".foundation-mq").css("font-family");i=e(s);for(var o in i)i.hasOwnProperty(o)&&n.queries.push({name:o,value:"only screen and (min-width: "+i[o]+")"});this.current=this._getCurrentSize(),this._watcher()},atLeast:function(t){var e=this.get(t);return!!e&&window.matchMedia(e).matches},is:function(t){return t=t.trim().split(" "),t.length>1&&"only"===t[1]?t[0]===this._getCurrentSize():this.atLeast(t[0])},get:function(t){for(var e in this.queries)if(this.queries.hasOwnProperty(e)){var i=this.queries[e];if(t===i.name)return i.value}return null},_getCurrentSize:function(){for(var t,e=0;e<this.queries.length;e++){var i=this.queries[e];window.matchMedia(i.value).matches&&(t=i)}return"object"==typeof t?t.name:t},_watcher:function(){var e=this;t(window).on("resize.zf.mediaquery",function(){var i=e._getCurrentSize(),n=e.current;i!==n&&(e.current=i,t(window).trigger("changed.zf.mediaquery",[i,n]))})}};Foundation.MediaQuery=i,window.matchMedia||(window.matchMedia=function(){"use strict";var t=window.styleMedia||window.media;if(!t){var e=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;e.type="text/css",e.id="matchmediajs-test",i&&i.parentNode&&i.parentNode.insertBefore(e,i),n="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle,t={matchMedium:function(t){var i="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=i:e.textContent=i,"1px"===n.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),Foundation.MediaQuery=i}(jQuery),!function(t){function e(t,e,i){function n(r){a||(a=r),o=r-a,i.apply(e),o<t?s=window.requestAnimationFrame(n,e):(window.cancelAnimationFrame(s),e.trigger("finished.zf.animate",[e]).triggerHandler("finished.zf.animate",[e]))}var s,o,a=null;return 0===t?(i.apply(e),void e.trigger("finished.zf.animate",[e]).triggerHandler("finished.zf.animate",[e])):void(s=window.requestAnimationFrame(n))}function i(e,i,o,a){function r(){e||i.hide(),l(),a&&a.apply(i)}function l(){i[0].style.transitionDuration=0,i.removeClass(u+" "+d+" "+o)}if(i=t(i).eq(0),i.length){var u=e?n[0]:n[1],d=e?s[0]:s[1];l(),i.addClass(o).css("transition","none"),requestAnimationFrame(function(){i.addClass(u),e&&i.show()}),requestAnimationFrame(function(){i[0].offsetWidth,i.css("transition","").addClass(d)}),i.one(Foundation.transitionend(i),r)}}var n=["mui-enter","mui-leave"],s=["mui-enter-active","mui-leave-active"],o={animateIn:function(t,e,n){i(!0,t,e,n)},animateOut:function(t,e,n){i(!1,t,e,n)}};Foundation.Move=e,Foundation.Motion=o}(jQuery),!function(t){var e={Feather:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zf";e.attr("role","menubar");var n=e.find("li").attr({role:"menuitem"}),s="is-"+i+"-submenu",o=s+"-item",a="is-"+i+"-submenu-parent";n.each(function(){var e=t(this),n=e.children("ul");n.length&&(e.addClass(a).attr({"aria-haspopup":!0,"aria-label":e.children("a:first").text()}),"drilldown"===i&&e.attr({"aria-expanded":!1}),n.addClass("submenu "+s).attr({"data-submenu":"",role:"menu"}),"drilldown"===i&&n.attr({"aria-hidden":!0})),e.parent("[data-submenu]").length&&e.addClass("is-submenu-item "+o)})},Burn:function(t,e){var i="is-"+e+"-submenu",n=i+"-item",s="is-"+e+"-submenu-parent";t.find(">li, .menu, .menu > li").removeClass(i+" "+n+" "+s+" is-submenu-item submenu is-active").removeAttr("data-submenu").css("display","")}};Foundation.Nest=e}(jQuery),!function(t){function e(t,e,i){var n,s,o=this,a=e.duration,r=Object.keys(t.data())[0]||"timer",l=-1;this.isPaused=!1,this.restart=function(){l=-1,clearTimeout(s),this.start()},this.start=function(){this.isPaused=!1,clearTimeout(s),l=l<=0?a:l,t.data("paused",!1),n=Date.now(),s=setTimeout(function(){e.infinite&&o.restart(),i&&"function"==typeof i&&i()},l),t.trigger("timerstart.zf."+r)},this.pause=function(){this.isPaused=!0,clearTimeout(s),t.data("paused",!0);var e=Date.now();l-=e-n,t.trigger("timerpaused.zf."+r)}}function i(e,i){function n(){s--,0===s&&i()}var s=e.length;0===s&&i(),e.each(function(){if(this.complete||4===this.readyState||"complete"===this.readyState)n();else{var e=t(this).attr("src");t(this).attr("src",e+"?"+(new Date).getTime()),t(this).one("load",function(){n()})}})}Foundation.Timer=e,Foundation.onImagesLoaded=i}(jQuery),function(t){function e(){this.removeEventListener("touchmove",i),this.removeEventListener("touchend",e),u=!1}function i(i){if(t.spotSwipe.preventDefault&&i.preventDefault(),u){var n,s=i.touches[0].pageX,a=(i.touches[0].pageY,o-s);l=(new Date).getTime()-r,Math.abs(a)>=t.spotSwipe.moveThreshold&&l<=t.spotSwipe.timeThreshold&&(n=a>0?"left":"right"),n&&(i.preventDefault(),e.call(this),t(this).trigger("swipe",n).trigger("swipe"+n))}}function n(t){1==t.touches.length&&(o=t.touches[0].pageX,a=t.touches[0].pageY,u=!0,r=(new Date).getTime(),this.addEventListener("touchmove",i,!1),this.addEventListener("touchend",e,!1))}function s(){this.addEventListener&&this.addEventListener("touchstart",n,!1)}t.spotSwipe={version:"1.0.0",enabled:"ontouchstart"in document.documentElement,preventDefault:!1,moveThreshold:75,timeThreshold:200};var o,a,r,l,u=!1;t.event.special.swipe={setup:s},t.each(["left","up","down","right"],function(){t.event.special["swipe"+this]={setup:function(){t(this).on("swipe",t.noop)}}})}(jQuery),!function(t){t.fn.addTouch=function(){this.each(function(i,n){t(n).bind("touchstart touchmove touchend touchcancel",function(){e(event)})});var e=function(t){var e,i=t.changedTouches,n=i[0],s={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},o=s[t.type];"MouseEvent"in window&&"function"==typeof window.MouseEvent?e=new window.MouseEvent(o,{bubbles:!0,cancelable:!0,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY}):(e=document.createEvent("MouseEvent"),e.initMouseEvent(o,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null)),n.target.dispatchEvent(e)}}}(jQuery),!function(t){function e(){a(),n(),s(),o(),i()}function i(e){var i=t("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];if(e&&("string"==typeof e?n.push(e):"object"==typeof e&&"string"==typeof e[0]?n.concat(e):console.error("Plugin names must be strings")),i.length){var s=n.map(function(t){return"closeme.zf."+t}).join(" ");t(window).off(s).on(s,function(e,i){var n=e.namespace.split(".")[0],s=t("[data-"+n+"]").not('[data-yeti-box="'+i+'"]');s.each(function(){var e=t(this);e.triggerHandler("close.zf.trigger",[e])})})}}function n(e){var i=void 0,n=t("[data-resize]");n.length&&t(window).off("resize.zf.trigger").on("resize.zf.trigger",function(s){i&&clearTimeout(i),i=setTimeout(function(){r||n.each(function(){t(this).triggerHandler("resizeme.zf.trigger")}),n.attr("data-events","resize")},e||10)})}function s(e){var i=void 0,n=t("[data-scroll]");n.length&&t(window).off("scroll.zf.trigger").on("scroll.zf.trigger",function(s){i&&clearTimeout(i),i=setTimeout(function(){r||n.each(function(){t(this).triggerHandler("scrollme.zf.trigger")}),n.attr("data-events","scroll")},e||10)})}function o(e){var i=t("[data-mutate]");i.length&&r&&i.each(function(){t(this).triggerHandler("mutateme.zf.trigger")})}function a(){if(!r)return!1;var e=document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),i=function(e){var i=t(e[0].target);switch(e[0].type){case"attributes":"scroll"===i.attr("data-events")&&"data-events"===e[0].attributeName&&i.triggerHandler("scrollme.zf.trigger",[i,window.pageYOffset]),"resize"===i.attr("data-events")&&"data-events"===e[0].attributeName&&i.triggerHandler("resizeme.zf.trigger",[i]),"style"===e[0].attributeName&&(i.closest("[data-mutate]").attr("data-events","mutate"),i.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[i.closest("[data-mutate]")]));break;case"childList":i.closest("[data-mutate]").attr("data-events","mutate"),i.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[i.closest("[data-mutate]")]);break;default:return!1}};if(e.length)for(var n=0;n<=e.length-1;n++){var s=new r(i);s.observe(e[n],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}}var r=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if(t[e]+"MutationObserver"in window)return window[t[e]+"MutationObserver"];return!1}(),l=function(e,i){e.data(i).split(" ").forEach(function(n){t("#"+n)["close"===i?"trigger":"triggerHandler"](i+".zf.trigger",[e])})};t(document).on("click.zf.trigger","[data-open]",function(){l(t(this),"open")}),t(document).on("click.zf.trigger","[data-close]",function(){var e=t(this).data("close");e?l(t(this),"close"):t(this).trigger("close.zf.trigger")}),t(document).on("click.zf.trigger","[data-toggle]",function(){var e=t(this).data("toggle");e?l(t(this),"toggle"):t(this).trigger("toggle.zf.trigger")}),t(document).on("close.zf.trigger","[data-closable]",function(e){e.stopPropagation();var i=t(this).data("closable");""!==i?Foundation.Motion.animateOut(t(this),i,function(){t(this).trigger("closed.zf")}):t(this).fadeOut().trigger("closed.zf")}),t(document).on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",function(){var e=t(this).data("toggle-focus");t("#"+e).triggerHandler("toggle.zf.trigger",[t(this)])}),t(window).on("load",function(){e()}),Foundation.IHearYou=e}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Abide")}return _createClass(e,[{key:"_init",value:function(){this.$inputs=this.$element.find("input, textarea, select"),this._events()}},{key:"_events",value:function(){var e=this;this.$element.off(".abide").on("reset.zf.abide",function(){e.resetForm()}).on("submit.zf.abide",function(){return e.validateForm()}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(i){e.validateInput(t(i.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(i){e.validateInput(t(i.target))}),this.options.validateOnBlur&&this.$inputs.off("blur.zf.abide").on("blur.zf.abide",function(i){e.validateInput(t(i.target))})}},{key:"_reflow",value:function(){this._init()}},{key:"requiredCheck",value:function(t){if(!t.attr("required"))return!0;var e=!0;switch(t[0].type){case"checkbox":e=t[0].checked;break;case"select":case"select-one":case"select-multiple":var i=t.find("option:selected");i.length&&i.val()||(e=!1);break;default:t.val()&&t.val().length||(e=!1)}return e}},{key:"findFormError",value:function(t){var e=t.siblings(this.options.formErrorSelector);return e.length||(e=t.parent().find(this.options.formErrorSelector)),e}},{key:"findLabel",value:function(t){var e=t[0].id,i=this.$element.find('label[for="'+e+'"]');return i.length?i:t.closest("label")}},{key:"findRadioLabels",value:function(e){var i=this,n=e.map(function(e,n){var s=n.id,o=i.$element.find('label[for="'+s+'"]');return o.length||(o=t(n).closest("label")),o[0]});return t(n)}},{key:"addErrorClasses",value:function(t){var e=this.findLabel(t),i=this.findFormError(t);e.length&&e.addClass(this.options.labelErrorClass),i.length&&i.addClass(this.options.formErrorClass),t.addClass(this.options.inputErrorClass).attr("data-invalid","")}},{key:"removeRadioErrorClasses",value:function(t){var e=this.$element.find(':radio[name="'+t+'"]'),i=this.findRadioLabels(e),n=this.findFormError(e);i.length&&i.removeClass(this.options.labelErrorClass),n.length&&n.removeClass(this.options.formErrorClass),e.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")}},{key:"removeErrorClasses",value:function(t){if("radio"==t[0].type)return this.removeRadioErrorClasses(t.attr("name"));var e=this.findLabel(t),i=this.findFormError(t);e.length&&e.removeClass(this.options.labelErrorClass),i.length&&i.removeClass(this.options.formErrorClass),t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")}},{key:"validateInput",value:function(e){var i=this,n=this.requiredCheck(e),s=!1,o=!0,a=e.attr("data-validator"),r=!0;if(e.is("[data-abide-ignore]")||e.is('[type="hidden"]'))return!0;switch(e[0].type){case"radio":s=this.validateRadio(e.attr("name"));break;case"checkbox":s=n;break;case"select":case"select-one":case"select-multiple":s=n;break;default:s=this.validateText(e)}a&&(o=this.matchValidation(e,a,e.attr("required"))),e.attr("data-equalto")&&(r=this.options.validators.equalTo(e));var l=[n,s,o,r].indexOf(!1)===-1,u=(l?"valid":"invalid")+".zf.abide";if(l){var d=this.$element.find('[data-equalto="'+e.attr("id")+'"]');d.length&&!function(){var e=i;d.each(function(){t(this).val()&&e.validateInput(t(this))})}()}return this[l?"removeErrorClasses":"addErrorClasses"](e),e.trigger(u,[e]),l}},{key:"validateForm",value:function(){var e=[],i=this;this.$inputs.each(function(){e.push(i.validateInput(t(this)))});var n=e.indexOf(!1)===-1;return this.$element.find("[data-abide-error]").css("display",n?"none":"block"),this.$element.trigger((n?"formvalid":"forminvalid")+".zf.abide",[this.$element]),n}},{key:"validateText",value:function(t,e){e=e||t.attr("pattern")||t.attr("type");var i=t.val(),n=!1;return i.length?n=this.options.patterns.hasOwnProperty(e)?this.options.patterns[e].test(i):e===t.attr("type")||new RegExp(e).test(i):t.prop("required")||(n=!0),n}},{key:"validateRadio",value:function(e){var i=this.$element.find(':radio[name="'+e+'"]'),n=!1,s=!1;return i.each(function(e,i){t(i).attr("required")&&(s=!0)}),s||(n=!0),n||i.each(function(e,i){t(i).prop("checked")&&(n=!0)}),n}},{key:"matchValidation",value:function(t,e,i){var n=this;i=!!i;var s=e.split(" ").map(function(e){return n.options.validators[e](t,i,t.parent())});return s.indexOf(!1)===-1}},{key:"resetForm",value:function(){var e=this.$element,i=this.options;t("."+i.labelErrorClass,e).not("small").removeClass(i.labelErrorClass),t("."+i.inputErrorClass,e).not("small").removeClass(i.inputErrorClass),t(i.formErrorSelector+"."+i.formErrorClass).removeClass(i.formErrorClass),e.find("[data-abide-error]").css("display","none"),t(":input",e).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"),t(":input:radio",e).not("[data-abide-ignore]").prop("checked",!1).removeAttr("data-invalid"),t(":input:checkbox",e).not("[data-abide-ignore]").prop("checked",!1).removeAttr("data-invalid"),e.trigger("formreset.zf.abide",[e])}},{key:"destroy",value:function(){var e=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){e.removeErrorClasses(t(this))}),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={validateOn:"fieldChange",labelErrorClass:"is-invalid-label",inputErrorClass:"is-invalid-input",formErrorSelector:".form-error",formErrorClass:"is-visible",liveValidate:!1,validateOnBlur:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(e,i,n){return t("#"+e.attr("data-equalto")).val()===e.val()}}},Foundation.plugin(e,"Abide")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Accordion"),Foundation.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}return _createClass(e,[{key:"_init",value:function(){this.$element.attr("role","tablist"),this.$tabs=this.$element.children("[data-accordion-item]"),this.$tabs.each(function(e,i){var n=t(i),s=n.children("[data-tab-content]"),o=s[0].id||Foundation.GetYoDigits(6,"accordion"),a=i.id||o+"-label";n.find("a:first").attr({"aria-controls":o,role:"tab",id:a,"aria-expanded":!1,"aria-selected":!1}),s.attr({role:"tabpanel","aria-labelledby":a,"aria-hidden":!0,id:o})});var e=this.$element.find(".is-active").children("[data-tab-content]");e.length&&this.down(e,!0),this._events()}},{key:"_events",value:function(){var e=this;this.$tabs.each(function(){var i=t(this),n=i.children("[data-tab-content]");n.length&&i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(t){t.preventDefault(),e.toggle(n)}).on("keydown.zf.accordion",function(t){Foundation.Keyboard.handleKey(t,"Accordion",{toggle:function(){e.toggle(n)},next:function(){var t=i.next().find("a").focus();e.options.multiExpand||t.trigger("click.zf.accordion")},previous:function(){var t=i.prev().find("a").focus();e.options.multiExpand||t.trigger("click.zf.accordion")},handled:function(){t.preventDefault(),t.stopPropagation()}})})})}},{key:"toggle",value:function(t){t.parent().hasClass("is-active")?this.up(t):this.down(t)}},{key:"down",value:function(e,i){var n=this;if(e.attr("aria-hidden",!1).parent("[data-tab-content]").addBack().parent().addClass("is-active"),!this.options.multiExpand&&!i){var s=this.$element.children(".is-active").children("[data-tab-content]");s.length&&this.up(s.not(e))}e.slideDown(this.options.slideSpeed,function(){n.$element.trigger("down.zf.accordion",[e])}),t("#"+e.attr("aria-labelledby")).attr({"aria-expanded":!0,"aria-selected":!0})}},{key:"up",value:function(e){var i=e.parent().siblings(),n=this;(this.options.allowAllClosed||i.hasClass("is-active"))&&e.parent().hasClass("is-active")&&(e.slideUp(n.options.slideSpeed,function(){n.$element.trigger("up.zf.accordion",[e])}),e.attr("aria-hidden",!0).parent().removeClass("is-active"),t("#"+e.attr("aria-labelledby")).attr({"aria-expanded":!1,"aria-selected":!1}))}},{key:"destroy",value:function(){this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={slideSpeed:250,multiExpand:!1,allowAllClosed:!1},Foundation.plugin(e,"Accordion")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){
var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"accordion"),this._init(),Foundation.registerPlugin(this,"AccordionMenu"),Foundation.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll"})}return _createClass(e,[{key:"_init",value:function(){this.$element.find("[data-submenu]").not(".is-active").slideUp(0),this.$element.attr({role:"menu","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".is-accordion-submenu-parent"),this.$menuLinks.each(function(){var e=this.id||Foundation.GetYoDigits(6,"acc-menu-link"),i=t(this),n=i.children("[data-submenu]"),s=n[0].id||Foundation.GetYoDigits(6,"acc-menu"),o=n.hasClass("is-active");i.attr({"aria-controls":s,"aria-expanded":o,role:"menuitem",id:e}),n.attr({"aria-labelledby":e,"aria-hidden":!o,role:"menu",id:s})});var e=this.$element.find(".is-active");if(e.length){var i=this;e.each(function(){i.down(t(this))})}this._events()}},{key:"_events",value:function(){var e=this;this.$element.find("li").each(function(){var i=t(this).children("[data-submenu]");i.length&&t(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(t){t.preventDefault(),e.toggle(i)})}).on("keydown.zf.accordionmenu",function(i){var n,s,o=t(this),a=o.parent("ul").children("li"),r=o.children("[data-submenu]");a.each(function(e){if(t(this).is(o))return n=a.eq(Math.max(0,e-1)).find("a").first(),s=a.eq(Math.min(e+1,a.length-1)).find("a").first(),t(this).children("[data-submenu]:visible").length&&(s=o.find("li:first-child").find("a").first()),t(this).is(":first-child")?n=o.parents("li").first().find("a").first():n.parents("li").first().children("[data-submenu]:visible").length&&(n=n.parents("li").find("li:last-child").find("a").first()),void(t(this).is(":last-child")&&(s=o.parents("li").first().next("li").find("a").first()))}),Foundation.Keyboard.handleKey(i,"AccordionMenu",{open:function(){r.is(":hidden")&&(e.down(r),r.find("li").first().find("a").first().focus())},close:function(){r.length&&!r.is(":hidden")?e.up(r):o.parent("[data-submenu]").length&&(e.up(o.parent("[data-submenu]")),o.parents("li").first().find("a").first().focus())},up:function(){return n.focus(),!0},down:function(){return s.focus(),!0},toggle:function(){o.children("[data-submenu]").length&&e.toggle(o.children("[data-submenu]"))},closeAll:function(){e.hideAll()},handled:function(t){t&&i.preventDefault(),i.stopImmediatePropagation()}})})}},{key:"hideAll",value:function(){this.up(this.$element.find("[data-submenu]"))}},{key:"showAll",value:function(){this.down(this.$element.find("[data-submenu]"))}},{key:"toggle",value:function(t){t.is(":animated")||(t.is(":hidden")?this.down(t):this.up(t))}},{key:"down",value:function(t){var e=this;this.options.multiOpen||this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))),t.addClass("is-active").attr({"aria-hidden":!1}).parent(".is-accordion-submenu-parent").attr({"aria-expanded":!0}),t.slideDown(e.options.slideSpeed,function(){e.$element.trigger("down.zf.accordionMenu",[t])})}},{key:"up",value:function(t){var e=this;t.slideUp(e.options.slideSpeed,function(){e.$element.trigger("up.zf.accordionMenu",[t])});var i=t.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden",!0);i.parent(".is-accordion-submenu-parent").attr("aria-expanded",!1)}},{key:"destroy",value:function(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),Foundation.Nest.Burn(this.$element,"accordion"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={slideSpeed:250,multiOpen:!0},Foundation.plugin(e,"AccordionMenu")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"drilldown"),this._init(),Foundation.registerPlugin(this,"Drilldown"),Foundation.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}return _createClass(e,[{key:"_init",value:function(){this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a"),this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","menuitem").find("a"),this.$element.attr("data-mutate",this.$element.attr("data-drilldown")||Foundation.GetYoDigits(6,"drilldown")),this._prepareMenu(),this._registerEvents(),this._keyboardEvents()}},{key:"_prepareMenu",value:function(){var e=this;this.$submenuAnchors.each(function(){var i=t(this),n=i.parent();e.options.parentLink&&i.clone().prependTo(n.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'),i.data("savedHref",i.attr("href")).removeAttr("href").attr("tabindex",0),i.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"menu"}),e._events(i)}),this.$submenus.each(function(){var i=t(this),n=i.find(".js-drilldown-back");if(!n.length)switch(e.options.backButtonPosition){case"bottom":i.append(e.options.backButton);break;case"top":i.prepend(e.options.backButton);break;default:console.error("Unsupported backButtonPosition value '"+e.options.backButtonPosition+"'")}e._back(i)}),this.options.autoHeight||this.$submenus.addClass("drilldown-submenu-cover-previous"),this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=t(this.options.wrapper).addClass("is-drilldown"),this.options.animateHeight&&this.$wrapper.addClass("animate-height"),this.$wrapper=this.$element.wrap(this.$wrapper).parent().css(this._getMaxDims()))}},{key:"_resize",value:function(){this.$wrapper.css({"max-width":"none","min-height":"none"}),this.$wrapper.css(this._getMaxDims())}},{key:"_events",value:function(e){var i=this;e.off("click.zf.drilldown").on("click.zf.drilldown",function(n){if(t(n.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(n.stopImmediatePropagation(),n.preventDefault()),i._show(e.parent("li")),i.options.closeOnClick){var s=t("body");s.off(".zf.drilldown").on("click.zf.drilldown",function(e){e.target===i.$element[0]||t.contains(i.$element[0],e.target)||(e.preventDefault(),i._hideAll(),s.off(".zf.drilldown"))})}}),this.$element.on("mutateme.zf.trigger",this._resize.bind(this))}},{key:"_registerEvents",value:function(){this.options.scrollTop&&(this._bindHandler=this._scrollTop.bind(this),this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown",this._bindHandler))}},{key:"_scrollTop",value:function(){var e=this,i=""!=e.options.scrollTopElement?t(e.options.scrollTopElement):e.$element,n=parseInt(i.offset().top+e.options.scrollTopOffset);t("html, body").stop(!0).animate({scrollTop:n},e.options.animationDuration,e.options.animationEasing,function(){this===t("html")[0]&&e.$element.trigger("scrollme.zf.drilldown")})}},{key:"_keyboardEvents",value:function(){var e=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown",function(i){var n,s,o=t(this),a=o.parent("li").parent("ul").children("li").children("a");a.each(function(e){if(t(this).is(o))return n=a.eq(Math.max(0,e-1)),void(s=a.eq(Math.min(e+1,a.length-1)))}),Foundation.Keyboard.handleKey(i,"Drilldown",{next:function(){if(o.is(e.$submenuAnchors))return e._show(o.parent("li")),o.parent("li").one(Foundation.transitionend(o),function(){o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()}),!0},previous:function(){return e._hide(o.parent("li").parent("ul")),o.parent("li").parent("ul").one(Foundation.transitionend(o),function(){setTimeout(function(){o.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0},up:function(){return n.focus(),!0},down:function(){return s.focus(),!0},close:function(){e._back()},open:function(){return o.is(e.$menuItems)?o.is(e.$submenuAnchors)?(e._show(o.parent("li")),o.parent("li").one(Foundation.transitionend(o),function(){o.parent("li").find("ul li a").filter(e.$menuItems).first().focus()}),!0):void 0:(e._hide(o.parent("li").parent("ul")),o.parent("li").parent("ul").one(Foundation.transitionend(o),function(){setTimeout(function(){o.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0)},handled:function(t){t&&i.preventDefault(),i.stopImmediatePropagation()}})})}},{key:"_hideAll",value:function(){var t=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");this.options.autoHeight&&this.$wrapper.css({height:t.parent().closest("ul").data("calcHeight")}),t.one(Foundation.transitionend(t),function(e){t.removeClass("is-active is-closing")}),this.$element.trigger("closed.zf.drilldown")}},{key:"_back",value:function(t){var e=this;t.off("click.zf.drilldown"),t.children(".js-drilldown-back").on("click.zf.drilldown",function(i){i.stopImmediatePropagation(),e._hide(t);var n=t.parent("li").parent("ul").parent("li");n.length&&e._show(n)})}},{key:"_menuLinkEvents",value:function(){var t=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(e){setTimeout(function(){t._hideAll()},0)})}},{key:"_show",value:function(t){this.options.autoHeight&&this.$wrapper.css({height:t.children("[data-submenu]").data("calcHeight")}),t.attr("aria-expanded",!0),t.children("[data-submenu]").addClass("is-active").attr("aria-hidden",!1),this.$element.trigger("open.zf.drilldown",[t])}},{key:"_hide",value:function(t){this.options.autoHeight&&this.$wrapper.css({height:t.parent().closest("ul").data("calcHeight")});t.parent("li").attr("aria-expanded",!1),t.attr("aria-hidden",!0).addClass("is-closing"),t.addClass("is-closing").one(Foundation.transitionend(t),function(){t.removeClass("is-active is-closing"),t.blur()}),t.trigger("hide.zf.drilldown",[t])}},{key:"_getMaxDims",value:function(){var e=0,i={},n=this;return this.$submenus.add(this.$element).each(function(){var s=(t(this).children("li").length,Foundation.Box.GetDimensions(this).height);e=s>e?s:e,n.options.autoHeight&&(t(this).data("calcHeight",s),t(this).hasClass("is-drilldown-submenu")||(i.height=s))}),this.options.autoHeight||(i["min-height"]=e+"px"),i["max-width"]=this.$element[0].getBoundingClientRect().width+"px",i}},{key:"destroy",value:function(){this.options.scrollTop&&this.$element.off(".zf.drilldown",this._bindHandler),this._hideAll(),this.$element.off("mutateme.zf.trigger"),Foundation.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),this.$submenuAnchors.each(function(){t(this).off(".zf.drilldown")}),this.$submenus.removeClass("drilldown-submenu-cover-previous"),this.$element.find("a").each(function(){var e=t(this);e.removeAttr("tabindex"),e.data("savedHref")&&e.attr("href",e.data("savedHref")).removeData("savedHref")}),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',backButtonPosition:"top",wrapper:"<div></div>",parentLink:!1,closeOnClick:!1,autoHeight:!1,animateHeight:!1,scrollTop:!1,scrollTopElement:"",scrollTopOffset:0,animationDuration:500,animationEasing:"swing"},Foundation.plugin(e,"Drilldown")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Dropdown"),Foundation.Keyboard.register("Dropdown",{ENTER:"open",SPACE:"open",ESCAPE:"close"})}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("id");this.$anchor=t(t('[data-toggle="'+e+'"]').length?'[data-toggle="'+e+'"]':'[data-open="'+e+'"]'),this.$anchor.attr({"aria-controls":e,"data-is-focus":!1,"data-yeti-box":e,"aria-haspopup":!0,"aria-expanded":!1}),this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null,this.options.positionClass=this.getPositionClass(),this.counter=4,this.usedPositions=[],this.$element.attr({"aria-hidden":"true","data-yeti-box":e,"data-resize":e,"aria-labelledby":this.$anchor[0].id||Foundation.GetYoDigits(6,"dd-anchor")}),this._events()}},{key:"getPositionClass",value:function(){var t=this.$element[0].className.match(/(top|left|right|bottom)/g);t=t?t[0]:"";var e=/float-(\S+)/.exec(this.$anchor[0].className);e=e?e[1]:"";var i=e?e+" "+t:t;return i}},{key:"_reposition",value:function(t){this.usedPositions.push(t?t:"bottom"),!t&&this.usedPositions.indexOf("top")<0?this.$element.addClass("top"):"top"===t&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"left"===t&&this.usedPositions.indexOf("right")<0?this.$element.removeClass(t).addClass("right"):"right"===t&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):!t&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.$element.addClass("left"):"top"===t&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):"left"===t&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"right"===t&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):this.$element.removeClass(t),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){if("false"===this.$anchor.attr("aria-expanded"))return!1;var t=this.getPositionClass(),e=Foundation.Box.GetDimensions(this.$element),i=(Foundation.Box.GetDimensions(this.$anchor),"left"===t?"left":"right"===t?"left":"top"),n="top"===i?"height":"width";"height"===n?this.options.vOffset:this.options.hOffset;if(e.width>=e.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.$element,this.$parent)){var s=e.windowDims.width,o=0;if(this.$parent){var a=Foundation.Box.GetDimensions(this.$parent),o=a.offset.left;a.width<s&&(s=a.width)}return this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,"center bottom",this.options.vOffset,this.options.hOffset+o,!0)).css({width:s-2*this.options.hOffset,height:"auto"}),this.classChanged=!0,!1}for(this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,t,this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.$element,this.$parent,!0)&&this.counter;)this._reposition(t),this._setPosition()}},{key:"_events",value:function(){var e=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.options.hover&&(this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){var i=t("body").data();"undefined"!=typeof i.whatinput&&"mouse"!==i.whatinput||(clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.open(),e.$anchor.data("hover",!0)},e.options.hoverDelay))}).on("mouseleave.zf.dropdown",function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.close(),e.$anchor.data("hover",!1)},e.options.hoverDelay)}),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(e.timeout)}).on("mouseleave.zf.dropdown",function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.close(),e.$anchor.data("hover",!1)},e.options.hoverDelay)})),this.$anchor.add(this.$element).on("keydown.zf.dropdown",function(i){var n=t(this);Foundation.Keyboard.findFocusable(e.$element);Foundation.Keyboard.handleKey(i,"Dropdown",{open:function(){n.is(e.$anchor)&&(e.open(),e.$element.attr("tabindex",-1).focus(),i.preventDefault())},close:function(){e.close(),e.$anchor.focus()}})})}},{key:"_addBodyHandler",value:function(){var e=t(document.body).not(this.$element),i=this;e.off("click.zf.dropdown").on("click.zf.dropdown",function(t){i.$anchor.is(t.target)||i.$anchor.find(t.target).length||i.$element.find(t.target).length||(i.close(),e.off("click.zf.dropdown"))})}},{key:"open",value:function(){if(this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchor.addClass("hover").attr({"aria-expanded":!0}),this._setPosition(),this.$element.addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var t=Foundation.Keyboard.findFocusable(this.$element);t.length&&t.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.options.trapFocus&&Foundation.Keyboard.trapFocus(this.$element),this.$element.trigger("show.zf.dropdown",[this.$element])}},{key:"close",value:function(){if(!this.$element.hasClass("is-open"))return!1;if(this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchor.removeClass("hover").attr("aria-expanded",!1),this.classChanged){var t=this.getPositionClass();t&&this.$element.removeClass(t),this.$element.addClass(this.options.positionClass).css({height:"",width:""}),this.classChanged=!1,this.counter=4,this.usedPositions.length=0}this.$element.trigger("hide.zf.dropdown",[this.$element]),this.options.trapFocus&&Foundation.Keyboard.releaseFocus(this.$element)}},{key:"toggle",value:function(){if(this.$element.hasClass("is-open")){if(this.$anchor.data("hover"))return;this.close()}else this.open()}},{key:"destroy",value:function(){this.$element.off(".zf.trigger").hide(),this.$anchor.off(".zf.dropdown"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={parentClass:null,hoverDelay:250,hover:!1,hoverPane:!1,vOffset:1,hOffset:1,positionClass:"",trapFocus:!1,autoFocus:!1,closeOnClick:!1},Foundation.plugin(e,"Dropdown")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"dropdown"),this._init(),Foundation.registerPlugin(this,"DropdownMenu"),Foundation.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}return _createClass(e,[{key:"_init",value:function(){var t=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),this.$element.hasClass(this.options.rightClass)||"right"===this.options.alignment||Foundation.rtl()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",t.addClass("opens-left")):t.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_isVertical",value:function(){return"block"===this.$tabs.css("display")}},{key:"_events",value:function(){var e=this,i="ontouchstart"in window||"undefined"!=typeof window.ontouchstart,n="is-dropdown-submenu-parent",s=function(s){var o=t(s.target).parentsUntil("ul","."+n),a=o.hasClass(n),r="true"===o.attr("data-is-click"),l=o.children(".is-dropdown-submenu");if(a)if(r){if(!e.options.closeOnClick||!e.options.clickOpen&&!i||e.options.forceFollow&&i)return;s.stopImmediatePropagation(),s.preventDefault(),e._hide(o)}else s.preventDefault(),s.stopImmediatePropagation(),e._show(l),o.add(o.parentsUntil(e.$element,"."+n)).attr("data-is-click",!0)};(this.options.clickOpen||i)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",s),e.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownmenu touchend.zf.dropdownmenu",function(i){var s=t(this),o=s.hasClass(n);o||e._hide()}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(i){var s=t(this),o=s.hasClass(n);o&&(clearTimeout(s.data("_delay")),s.data("_delay",setTimeout(function(){e._show(s.children(".is-dropdown-submenu"))},e.options.hoverDelay)))}).on("mouseleave.zf.dropdownmenu",function(i){var s=t(this),o=s.hasClass(n);if(o&&e.options.autoclose){if("true"===s.attr("data-is-click")&&e.options.clickOpen)return!1;clearTimeout(s.data("_delay")),s.data("_delay",setTimeout(function(){e._hide(s)},e.options.closingTime))}}),this.$menuItems.on("keydown.zf.dropdownmenu",function(i){var n,s,o=t(i.target).parentsUntil("ul",'[role="menuitem"]'),a=e.$tabs.index(o)>-1,r=a?e.$tabs:o.siblings("li").add(o);r.each(function(e){if(t(this).is(o))return n=r.eq(e-1),void(s=r.eq(e+1))});var l=function(){o.is(":last-child")||(s.children("a:first").focus(),i.preventDefault())},u=function(){n.children("a:first").focus(),i.preventDefault()},d=function(){var t=o.children("ul.is-dropdown-submenu");t.length&&(e._show(t),o.find("li > a:first").focus(),i.preventDefault())},h=function(){var t=o.parent("ul").parent("li");t.children("a:first").focus(),e._hide(t),i.preventDefault()},c={open:d,close:function(){e._hide(e.$element),e.$menuItems.find("a:first").focus(),i.preventDefault()},handled:function(){i.stopImmediatePropagation()}};a?e._isVertical()?Foundation.rtl()?t.extend(c,{down:l,up:u,next:h,previous:d}):t.extend(c,{down:l,up:u,next:d,previous:h}):Foundation.rtl()?t.extend(c,{next:u,previous:l,down:d,up:h}):t.extend(c,{next:l,previous:u,down:d,up:h}):Foundation.rtl()?t.extend(c,{next:h,previous:d,down:l,up:u}):t.extend(c,{next:d,previous:h,down:l,up:u}),Foundation.Keyboard.handleKey(i,"DropdownMenu",c)})}},{key:"_addBodyHandler",value:function(){var e=t(document.body),i=this;e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(t){var n=i.$element.find(t.target);n.length||(i._hide(),e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}},{key:"_show",value:function(e){var i=this.$tabs.index(this.$tabs.filter(function(i,n){return t(n).find(e).length>0})),n=e.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(n,i),e.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");var s=Foundation.Box.ImNotTouchingYou(e,null,!0);if(!s){var o="left"===this.options.alignment?"-right":"-left",a=e.parent(".is-dropdown-submenu-parent");a.removeClass("opens"+o).addClass("opens-"+this.options.alignment),s=Foundation.Box.ImNotTouchingYou(e,null,!0),s||a.removeClass("opens-"+this.options.alignment).addClass("opens-inner"),this.changed=!0}e.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdownmenu",[e])}},{key:"_hide",value:function(t,e){var i;i=t&&t.length?t:void 0!==e?this.$tabs.not(function(t,i){return t===e}):this.$element;var n=i.hasClass("is-active")||i.find(".is-active").length>0;if(n){if(i.find("li.is-active").add(i).attr({"data-is-click":!1}).removeClass("is-active"),i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),this.changed||i.find("opens-inner").length){var s="left"===this.options.alignment?"right":"left";i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-"+this.options.alignment).addClass("opens-"+s),this.changed=!1}this.$element.trigger("hide.zf.dropdownmenu",[i])}}},{key:"destroy",value:function(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),t(document.body).off(".zf.dropdownmenu"),Foundation.Nest.Burn(this.$element,"dropdown"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={disableHover:!1,autoclose:!0,hoverDelay:50,clickOpen:!1,closingTime:500,alignment:"left",closeOnClick:!0,closeOnClickInside:!0,verticalClass:"vertical",rightClass:"align-right",forceFollow:!0},Foundation.plugin(e,"DropdownMenu")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Equalizer")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("data-equalizer")||"",i=this.$element.find('[data-equalizer-watch="'+e+'"]');this.$watched=i.length?i:this.$element.find("[data-equalizer-watch]"),this.$element.attr("data-resize",e||Foundation.GetYoDigits(6,"eq")),this.$element.attr("data-mutate",e||Foundation.GetYoDigits(6,"eq")),this.hasNested=this.$element.find("[data-equalizer]").length>0,this.isNested=this.$element.parentsUntil(document.body,"[data-equalizer]").length>0,this.isOn=!1,this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var n,s=this.$element.find("img");this.options.equalizeOn?(n=this._checkMQ(),t(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))):this._events(),(void 0!==n&&n===!1||void 0===n)&&(s.length?Foundation.onImagesLoaded(s,this._reflow.bind(this)):this._reflow())}},{key:"_pauseEvents",value:function(){this.isOn=!1,this.$element.off({".zf.equalizer":this._bindHandler.onPostEqualizedBound,"resizeme.zf.trigger":this._bindHandler.onResizeMeBound,"mutateme.zf.trigger":this._bindHandler.onResizeMeBound})}},{key:"_onResizeMe",value:function(t){this._reflow()}},{key:"_onPostEqualized",value:function(t){t.target!==this.$element[0]&&this._reflow()}},{key:"_events",value:function(){this._pauseEvents(),this.hasNested?this.$element.on("postequalized.zf.equalizer",this._bindHandler.onPostEqualizedBound):(this.$element.on("resizeme.zf.trigger",this._bindHandler.onResizeMeBound),this.$element.on("mutateme.zf.trigger",this._bindHandler.onResizeMeBound)),this.isOn=!0}},{key:"_checkMQ",value:function(){var t=!Foundation.MediaQuery.is(this.options.equalizeOn);return t?this.isOn&&(this._pauseEvents(),this.$watched.css("height","auto")):this.isOn||this._events(),t}},{key:"_killswitch",value:function(){}},{key:"_reflow",value:function(){return!this.options.equalizeOnStack&&this._isStacked()?(this.$watched.css("height","auto"),!1):void(this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this)))}},{key:"_isStacked",value:function(){return!this.$watched[0]||!this.$watched[1]||this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top}},{key:"getHeights",value:function(t){for(var e=[],i=0,n=this.$watched.length;i<n;i++)this.$watched[i].style.height="auto",e.push(this.$watched[i].offsetHeight);t(e)}},{key:"getHeightsByRow",value:function(e){var i=this.$watched.length?this.$watched.first().offset().top:0,n=[],s=0;n[s]=[];for(var o=0,a=this.$watched.length;o<a;o++){this.$watched[o].style.height="auto";var r=t(this.$watched[o]).offset().top;r!=i&&(s++,n[s]=[],i=r),n[s].push([this.$watched[o],this.$watched[o].offsetHeight])}for(var l=0,u=n.length;l<u;l++){var d=t(n[l]).map(function(){return this[1]}).get(),h=Math.max.apply(null,d);n[l].push(h)}e(n)}},{key:"applyHeight",value:function(t){var e=Math.max.apply(null,t);this.$element.trigger("preequalized.zf.equalizer"),this.$watched.css("height",e),this.$element.trigger("postequalized.zf.equalizer")}},{key:"applyHeightByRow",value:function(e){this.$element.trigger("preequalized.zf.equalizer");for(var i=0,n=e.length;i<n;i++){var s=e[i].length,o=e[i][s-1];if(s<=2)t(e[i][0][0]).css({height:"auto"});else{this.$element.trigger("preequalizedrow.zf.equalizer");for(var a=0,r=s-1;a<r;a++)t(e[i][a][0]).css({height:o});this.$element.trigger("postequalizedrow.zf.equalizer")}}this.$element.trigger("postequalized.zf.equalizer")}},{key:"destroy",value:function(){this._pauseEvents(),this.$watched.css("height","auto"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={equalizeOnStack:!1,equalizeByRow:!1,equalizeOn:""},Foundation.plugin(e,"Equalizer")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,n),this.rules=[],this.currentPath="",this._init(),this._events(),Foundation.registerPlugin(this,"Interchange")}return _createClass(e,[{key:"_init",value:function(){this._addBreakpoints(),this._generateRules(),this._reflow()}},{key:"_events",value:function(){var e=this;t(window).on("resize.zf.interchange",Foundation.util.throttle(function(){e._reflow()},50))}},{key:"_reflow",value:function(){var t;for(var e in this.rules)if(this.rules.hasOwnProperty(e)){var i=this.rules[e];window.matchMedia(i.query).matches&&(t=i)}t&&this.replace(t.path)}},{key:"_addBreakpoints",value:function(){for(var t in Foundation.MediaQuery.queries)if(Foundation.MediaQuery.queries.hasOwnProperty(t)){var i=Foundation.MediaQuery.queries[t];e.SPECIAL_QUERIES[i.name]=i.value}}},{key:"_generateRules",value:function(t){var i,n=[];i=this.options.rules?this.options.rules:this.$element.data("interchange").match(/\[.*?\]/g);for(var s in i)if(i.hasOwnProperty(s)){var o=i[s].slice(1,-1).split(", "),a=o.slice(0,-1).join(""),r=o[o.length-1];e.SPECIAL_QUERIES[r]&&(r=e.SPECIAL_QUERIES[r]),n.push({path:a,query:r})}this.rules=n}},{key:"replace",value:function(e){if(this.currentPath!==e){var i=this,n="replaced.zf.interchange";"IMG"===this.$element[0].nodeName?this.$element.attr("src",e).on("load",function(){i.currentPath=e}).trigger(n):e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)?this.$element.css({"background-image":"url("+e+")"}).trigger(n):t.get(e,function(s){i.$element.html(s).trigger(n),t(s).foundation(),i.currentPath=e})}}},{key:"destroy",value:function(){}}]),e}();e.defaults={rules:null},e.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"},Foundation.plugin(e,"Interchange")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),this.calcPoints(),Foundation.registerPlugin(this,"Magellan");
}return _createClass(e,[{key:"_init",value:function(){var e=this.$element[0].id||Foundation.GetYoDigits(6,"magellan");this.$targets=t("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":e,"data-scroll":e,id:e}),this.$active=t(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()}},{key:"calcPoints",value:function(){var e=this,i=document.body,n=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,n.clientHeight)),this.docHeight=Math.round(Math.max(i.scrollHeight,i.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)),this.$targets.each(function(){var i=t(this),n=Math.round(i.offset().top-e.options.threshold);i.targetPoint=n,e.points.push(n)})}},{key:"_events",value:function(){var e=this;t("html, body"),{duration:e.options.animationDuration,easing:e.options.animationEasing};t(window).one("load",function(){e.options.deepLinking&&location.hash&&e.scrollToLoc(location.hash),e.calcPoints(),e._updateActive()}),this.$element.on({"resizeme.zf.trigger":this.reflow.bind(this),"scrollme.zf.trigger":this._updateActive.bind(this)}).on("click.zf.magellan",'a[href^="#"]',function(t){t.preventDefault();var i=this.getAttribute("href");e.scrollToLoc(i)}),t(window).on("popstate",function(t){e.options.deepLinking&&e.scrollToLoc(window.location.hash)})}},{key:"scrollToLoc",value:function(e){if(!t(e).length)return!1;this._inTransition=!0;var i=this,n=Math.round(t(e).offset().top-this.options.threshold/2-this.options.barOffset);t("html, body").stop(!0).animate({scrollTop:n},this.options.animationDuration,this.options.animationEasing,function(){i._inTransition=!1,i._updateActive()})}},{key:"reflow",value:function(){this.calcPoints(),this._updateActive()}},{key:"_updateActive",value:function(){if(!this._inTransition){var t,e=parseInt(window.pageYOffset,10);if(e+this.winHeight===this.docHeight)t=this.points.length-1;else if(e<this.points[0])t=void 0;else{var i=this.scrollPos<e,n=this,s=this.points.filter(function(t,s){return i?t-n.options.barOffset<=e:t-n.options.barOffset-n.options.threshold<=e});t=s.length?s.length-1:0}if(this.$active.removeClass(this.options.activeClass),this.$active=this.$links.filter('[href="#'+this.$targets.eq(t).data("magellan-target")+'"]').addClass(this.options.activeClass),this.options.deepLinking){var o="";void 0!=t&&(o=this.$active[0].getAttribute("href")),o!==window.location.hash&&(window.history.pushState?window.history.pushState(null,null,o):window.location.hash=o)}this.scrollPos=e,this.$element.trigger("update.zf.magellan",[this.$active])}}},{key:"destroy",value:function(){if(this.$element.off(".zf.trigger .zf.magellan").find("."+this.options.activeClass).removeClass(this.options.activeClass),this.options.deepLinking){var t=this.$active[0].getAttribute("href");window.location.hash.replace(t,"")}Foundation.unregisterPlugin(this)}}]),e}();e.defaults={animationDuration:500,animationEasing:"linear",threshold:50,activeClass:"active",deepLinking:!1,barOffset:0},Foundation.plugin(e,"Magellan")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this.$lastTrigger=t(),this.$triggers=t(),this._init(),this._events(),Foundation.registerPlugin(this,"OffCanvas"),Foundation.Keyboard.register("OffCanvas",{ESCAPE:"close"})}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("id");if(this.$element.attr("aria-hidden","true"),this.$element.addClass("is-transition-"+this.options.transition),this.$triggers=t(document).find('[data-open="'+e+'"], [data-close="'+e+'"], [data-toggle="'+e+'"]').attr("aria-expanded","false").attr("aria-controls",e),this.options.contentOverlay===!0){var i=document.createElement("div"),n="fixed"===t(this.$element).css("position")?"is-overlay-fixed":"is-overlay-absolute";i.setAttribute("class","js-off-canvas-overlay "+n),this.$overlay=t(i),"is-overlay-fixed"===n?t("body").append(this.$overlay):this.$element.siblings("[data-off-canvas-content]").append(this.$overlay)}this.options.isRevealed=this.options.isRevealed||new RegExp(this.options.revealClass,"g").test(this.$element[0].className),this.options.isRevealed===!0&&(this.options.revealOn=this.options.revealOn||this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],this._setMQChecker()),!this.options.transitionTime==!0&&(this.options.transitionTime=1e3*parseFloat(window.getComputedStyle(t("[data-off-canvas]")[0]).transitionDuration))}},{key:"_events",value:function(){if(this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),this.options.closeOnClick===!0){var e=this.options.contentOverlay?this.$overlay:t("[data-off-canvas-content]");e.on({"click.zf.offcanvas":this.close.bind(this)})}}},{key:"_setMQChecker",value:function(){var e=this;t(window).on("changed.zf.mediaquery",function(){Foundation.MediaQuery.atLeast(e.options.revealOn)?e.reveal(!0):e.reveal(!1)}).one("load.zf.offcanvas",function(){Foundation.MediaQuery.atLeast(e.options.revealOn)&&e.reveal(!0)})}},{key:"reveal",value:function(t){var e=this.$element.find("[data-close]");t?(this.close(),this.isRevealed=!0,this.$element.attr("aria-hidden","false"),this.$element.off("open.zf.trigger toggle.zf.trigger"),e.length&&e.hide()):(this.isRevealed=!1,this.$element.attr("aria-hidden","true"),this.$element.on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),e.length&&e.show())}},{key:"_stopScrolling",value:function(t){return!1}},{key:"open",value:function(e,i){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var n=this;i&&(this.$lastTrigger=i),"top"===this.options.forceTo?window.scrollTo(0,0):"bottom"===this.options.forceTo&&window.scrollTo(0,document.body.scrollHeight),n.$element.addClass("is-open"),this.$triggers.attr("aria-expanded","true"),this.$element.attr("aria-hidden","false").trigger("opened.zf.offcanvas"),this.options.contentScroll===!1&&t("body").addClass("is-off-canvas-open").on("touchmove",this._stopScrolling),this.options.contentOverlay===!0&&this.$overlay.addClass("is-visible"),this.options.closeOnClick===!0&&this.options.contentOverlay===!0&&this.$overlay.addClass("is-closable"),this.options.autoFocus===!0&&this.$element.one(Foundation.transitionend(this.$element),function(){n.$element.find("a, button").eq(0).focus()}),this.options.trapFocus===!0&&(this.$element.siblings("[data-off-canvas-content]").attr("tabindex","-1"),Foundation.Keyboard.trapFocus(this.$element))}}},{key:"close",value:function(e){if(this.$element.hasClass("is-open")&&!this.isRevealed){var i=this;i.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true").trigger("closed.zf.offcanvas"),this.options.contentScroll===!1&&t("body").removeClass("is-off-canvas-open").off("touchmove",this._stopScrolling),this.options.contentOverlay===!0&&this.$overlay.removeClass("is-visible"),this.options.closeOnClick===!0&&this.options.contentOverlay===!0&&this.$overlay.removeClass("is-closable"),this.$triggers.attr("aria-expanded","false"),this.options.trapFocus===!0&&(this.$element.siblings("[data-off-canvas-content]").removeAttr("tabindex"),Foundation.Keyboard.releaseFocus(this.$element))}}},{key:"toggle",value:function(t,e){this.$element.hasClass("is-open")?this.close(t,e):this.open(t,e)}},{key:"_handleKeyboard",value:function(t){var e=this;Foundation.Keyboard.handleKey(t,"OffCanvas",{close:function(){return e.close(),e.$lastTrigger.focus(),!0},handled:function(){t.stopPropagation(),t.preventDefault()}})}},{key:"destroy",value:function(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$overlay.off(".zf.offcanvas"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={closeOnClick:!0,contentOverlay:!0,contentScroll:!0,transitionTime:0,transition:"push",forceTo:null,isRevealed:!1,revealOn:null,autoFocus:!0,revealClass:"reveal-for-",trapFocus:!1},Foundation.plugin(e,"OffCanvas")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Orbit"),Foundation.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}return _createClass(e,[{key:"_init",value:function(){this._reset(),this.$wrapper=this.$element.find("."+this.options.containerClass),this.$slides=this.$element.find("."+this.options.slideClass);var t=this.$element.find("img"),e=this.$slides.filter(".is-active"),i=this.$element[0].id||Foundation.GetYoDigits(6,"orbit");this.$element.attr({"data-resize":i,id:i}),e.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),t.length?Foundation.onImagesLoaded(t,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&this.$slides.length>1&&this.geoSync(),this.options.accessible&&this.$wrapper.attr("tabindex",0)}},{key:"_loadBullets",value:function(){this.$bullets=this.$element.find("."+this.options.boxOfBullets).find("button")}},{key:"geoSync",value:function(){var t=this;this.timer=new Foundation.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){t.changeSlide(!0)}),this.timer.start()}},{key:"_prepareForOrbit",value:function(){this._setWrapperHeight()}},{key:"_setWrapperHeight",value:function(e){var i,n=0,s=0,o=this;this.$slides.each(function(){i=this.getBoundingClientRect().height,t(this).attr("data-slide",s),o.$slides.filter(".is-active")[0]!==o.$slides.eq(s)[0]&&t(this).css({position:"relative",display:"none"}),n=i>n?i:n,s++}),s===this.$slides.length&&(this.$wrapper.css({height:n}),e&&e(n))}},{key:"_setSlideHeight",value:function(e){this.$slides.each(function(){t(this).css("max-height",e)})}},{key:"_events",value:function(){var e=this;if(this.$element.off(".resizeme.zf.trigger").on({"resizeme.zf.trigger":this._prepareForOrbit.bind(this)}),this.$slides.length>1){if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(t){t.preventDefault(),e.changeSlide(!0)}).on("swiperight.zf.orbit",function(t){t.preventDefault(),e.changeSlide(!1)}),this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){e.$element.data("clickedOn",!e.$element.data("clickedOn")),e.timer[e.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){e.timer.pause()}).on("mouseleave.zf.orbit",function(){e.$element.data("clickedOn")||e.timer.start()})),this.options.navButtons){var i=this.$element.find("."+this.options.nextClass+", ."+this.options.prevClass);i.attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(i){i.preventDefault(),e.changeSlide(t(this).hasClass(e.options.nextClass))})}this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;var i=t(this).data("slide"),n=i>e.$slides.filter(".is-active").data("slide"),s=e.$slides.eq(i);e.changeSlide(n,s,i)}),this.options.accessible&&this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(i){Foundation.Keyboard.handleKey(i,"Orbit",{next:function(){e.changeSlide(!0)},previous:function(){e.changeSlide(!1)},handled:function(){t(i.target).is(e.$bullets)&&e.$bullets.filter(".is-active").focus()}})})}}},{key:"_reset",value:function(){"undefined"!=typeof this.$slides&&this.$slides.length>1&&(this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),this.options.autoPlay&&this.timer.restart(),this.$slides.each(function(e){t(e).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()}),this.$slides.first().addClass("is-active").show(),this.$element.trigger("slidechange.zf.orbit",[this.$slides.first()]),this.options.bullets&&this._updateBullets(0))}},{key:"changeSlide",value:function(t,e,i){if(this.$slides){var n=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(n[0].className))return!1;var s,o=this.$slides.first(),a=this.$slides.last(),r=t?"Right":"Left",l=t?"Left":"Right",u=this;s=e?e:t?this.options.infiniteWrap?n.next("."+this.options.slideClass).length?n.next("."+this.options.slideClass):o:n.next("."+this.options.slideClass):this.options.infiniteWrap?n.prev("."+this.options.slideClass).length?n.prev("."+this.options.slideClass):a:n.prev("."+this.options.slideClass),s.length&&(this.$element.trigger("beforeslidechange.zf.orbit",[n,s]),this.options.bullets&&(i=i||this.$slides.index(s),this._updateBullets(i)),this.options.useMUI&&!this.$element.is(":hidden")?(Foundation.Motion.animateIn(s.addClass("is-active").css({position:"absolute",top:0}),this.options["animInFrom"+r],function(){s.css({position:"relative",display:"block"}).attr("aria-live","polite")}),Foundation.Motion.animateOut(n.removeClass("is-active"),this.options["animOutTo"+l],function(){n.removeAttr("aria-live"),u.options.autoPlay&&!u.timer.isPaused&&u.timer.restart()})):(n.removeClass("is-active is-in").removeAttr("aria-live").hide(),s.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart()),this.$element.trigger("slidechange.zf.orbit",[s]))}}},{key:"_updateBullets",value:function(t){var e=this.$element.find("."+this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),i=e.find("span:last").detach();this.$bullets.eq(t).addClass("is-active").append(i)}},{key:"destroy",value:function(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={bullets:!0,navButtons:!0,animInFromRight:"slide-in-right",animOutToRight:"slide-out-right",animInFromLeft:"slide-in-left",animOutToLeft:"slide-out-left",autoPlay:!0,timerDelay:5e3,infiniteWrap:!0,swipe:!0,pauseOnHover:!0,accessible:!0,containerClass:"orbit-container",slideClass:"orbit-slide",boxOfBullets:"orbit-bullets",nextClass:"orbit-next",prevClass:"orbit-previous",useMUI:!0},Foundation.plugin(e,"Orbit")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=t(i),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveMenu")}return _createClass(e,[{key:"_init",value:function(){if("string"==typeof this.rules){for(var e={},n=this.rules.split(" "),s=0;s<n.length;s++){var o=n[s].split("-"),a=o.length>1?o[0]:"small",r=o.length>1?o[1]:o[0];null!==i[r]&&(e[a]=i[r])}this.rules=e}t.isEmptyObject(this.rules)||this._checkMediaQueries(),this.$element.attr("data-mutate",this.$element.attr("data-mutate")||Foundation.GetYoDigits(6,"responsive-menu"))}},{key:"_events",value:function(){var e=this;t(window).on("changed.zf.mediaquery",function(){e._checkMediaQueries()})}},{key:"_checkMediaQueries",value:function(){var e,n=this;t.each(this.rules,function(t){Foundation.MediaQuery.atLeast(t)&&(e=t)}),e&&(this.currentPlugin instanceof this.rules[e].plugin||(t.each(i,function(t,e){n.$element.removeClass(e.cssClass)}),this.$element.addClass(this.rules[e].cssClass),this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[e].plugin(this.$element,{})))}},{key:"destroy",value:function(){this.currentPlugin.destroy(),t(window).off(".zf.ResponsiveMenu"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={};var i={dropdown:{cssClass:"dropdown",plugin:Foundation._plugins["dropdown-menu"]||null},drilldown:{cssClass:"drilldown",plugin:Foundation._plugins.drilldown||null},accordion:{cssClass:"accordion-menu",plugin:Foundation._plugins["accordion-menu"]||null}};Foundation.plugin(e,"ResponsiveMenu")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=t(i),this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveToggle")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.data("responsive-toggle");if(e||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=t("#"+e),this.$toggler=this.$element.find("[data-toggle]"),this.options=t.extend({},this.options,this.$targetMenu.data()),this.options.animate){var i=this.options.animate.split(" ");this.animationIn=i[0],this.animationOut=i[1]||null}this._update()}},{key:"_events",value:function(){this._updateMqHandler=this._update.bind(this),t(window).on("changed.zf.mediaquery",this._updateMqHandler),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}},{key:"_update",value:function(){Foundation.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}},{key:"toggleMenu",value:function(){var t=this;Foundation.MediaQuery.atLeast(this.options.hideFor)||(this.options.animate?this.$targetMenu.is(":hidden")?Foundation.Motion.animateIn(this.$targetMenu,this.animationIn,function(){t.$element.trigger("toggled.zf.responsiveToggle"),t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")}):Foundation.Motion.animateOut(this.$targetMenu,this.animationOut,function(){t.$element.trigger("toggled.zf.responsiveToggle")}):(this.$targetMenu.toggle(0),this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"),this.$element.trigger("toggled.zf.responsiveToggle")))}},{key:"destroy",value:function(){this.$element.off(".zf.responsiveToggle"),this.$toggler.off(".zf.responsiveToggle"),t(window).off("changed.zf.mediaquery",this._updateMqHandler),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={hideFor:"medium",animate:!1},Foundation.plugin(e,"ResponsiveToggle")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(){return/iP(ad|hone|od).*OS/.test(window.navigator.userAgent)}function i(){return/Android/.test(window.navigator.userAgent)}function n(){return e()||i()}var s=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Reveal"),Foundation.Keyboard.register("Reveal",{ENTER:"open",SPACE:"open",ESCAPE:"close"})}return _createClass(e,[{key:"_init",value:function(){this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:Foundation.MediaQuery.current},this.isMobile=n(),this.$anchor=t(t('[data-open="'+this.id+'"]').length?'[data-open="'+this.id+'"]':'[data-toggle="'+this.id+'"]'),this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":!0,tabindex:0}),(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(t(this.options.appendTo)),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#"+this.id&&t(window).one("load.zf.reveal",this.open.bind(this))}},{key:"_makeOverlay",value:function(){return t("<div></div>").addClass("reveal-overlay").appendTo(this.options.appendTo)}},{key:"_updatePosition",value:function(){var e,i,n=this.$element.outerWidth(),s=t(window).width(),o=this.$element.outerHeight(),a=t(window).height();e="auto"===this.options.hOffset?parseInt((s-n)/2,10):parseInt(this.options.hOffset,10),i="auto"===this.options.vOffset?o>a?parseInt(Math.min(100,a/10),10):parseInt((a-o)/4,10):parseInt(this.options.vOffset,10),this.$element.css({top:i+"px"}),this.$overlay&&"auto"===this.options.hOffset||(this.$element.css({left:e+"px"}),this.$element.css({margin:"0px"}))}},{key:"_events",value:function(){var e=this,i=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function(n,s){if(n.target===i.$element[0]||t(n.target).parents("[data-closable]")[0]===s)return e.close.apply(e)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function(){i._updatePosition()}}),this.$anchor.length&&this.$anchor.on("keydown.zf.reveal",function(t){13!==t.which&&32!==t.which||(t.stopPropagation(),t.preventDefault(),i.open())}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(e){e.target!==i.$element[0]&&!t.contains(i.$element[0],e.target)&&t.contains(document,e.target)&&i.close()}),this.options.deepLink&&t(window).on("popstate.zf.reveal:"+this.id,this._handleState.bind(this))}},{key:"_handleState",value:function(t){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}},{key:"open",value:function(){function e(){s.isMobile?(s.originalScrollPos||(s.originalScrollPos=window.pageYOffset),t("html, body").addClass("is-reveal-open")):t("body").addClass("is-reveal-open")}var i=this;if(this.options.deepLink){var n="#"+this.id;window.history.pushState?window.history.pushState(null,null,n):window.location.hash=n}this.isActive=!0,this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&(this.$overlay.css({visibility:""}).hide(),this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")),this.options.multipleOpened||this.$element.trigger("closeme.zf.reveal",this.id);var s=this;this.options.animationIn?!function(){var t=function(){s.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),e(),Foundation.Keyboard.trapFocus(s.$element)};i.options.overlay&&Foundation.Motion.animateIn(i.$overlay,"fade-in"),Foundation.Motion.animateIn(i.$element,i.options.animationIn,function(){i.$element&&(i.focusableElements=Foundation.Keyboard.findFocusable(i.$element),t())})}():(this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay)),this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),Foundation.Keyboard.trapFocus(this.$element),this.$element.trigger("open.zf.reveal"),e(),setTimeout(function(){i._extraHandlers()},0)}},{key:"_extraHandlers",value:function(){var e=this;this.$element&&(this.focusableElements=Foundation.Keyboard.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||t("body").on("click.zf.reveal",function(i){i.target!==e.$element[0]&&!t.contains(e.$element[0],i.target)&&t.contains(document,i.target)&&e.close()}),this.options.closeOnEsc&&t(window).on("keydown.zf.reveal",function(t){Foundation.Keyboard.handleKey(t,"Reveal",{close:function(){e.options.closeOnEsc&&(e.close(),e.$anchor.focus())}})}),this.$element.on("keydown.zf.reveal",function(i){var n=t(this);Foundation.Keyboard.handleKey(i,"Reveal",{open:function(){e.$element.find(":focus").is(e.$element.find("[data-close]"))?setTimeout(function(){e.$anchor.focus()},1):n.is(e.focusableElements)&&e.open()},close:function(){e.options.closeOnEsc&&(e.close(),e.$anchor.focus())},handled:function(t){t&&i.preventDefault()}})}))}},{key:"close",value:function(){function e(){i.isMobile?(t("html, body").removeClass("is-reveal-open"),i.originalScrollPos&&(t("body").scrollTop(i.originalScrollPos),i.originalScrollPos=null)):t("body").removeClass("is-reveal-open"),Foundation.Keyboard.releaseFocus(i.$element),i.$element.attr("aria-hidden",!0),i.$element.trigger("closed.zf.reveal")}if(!this.isActive||!this.$element.is(":visible"))return!1;var i=this;this.options.animationOut?(this.options.overlay?Foundation.Motion.animateOut(this.$overlay,"fade-out",e):e(),Foundation.Motion.animateOut(this.$element,this.options.animationOut)):(this.options.overlay?this.$overlay.hide(0,e):e(),this.$element.hide(this.options.hideDelay)),this.options.closeOnEsc&&t(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&t("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,i.options.deepLink&&(window.history.replaceState?window.history.replaceState("",document.title,window.location.href.replace("#"+this.id,"")):window.location.hash="")}},{key:"toggle",value:function(){this.isActive?this.close():this.open()}},{key:"destroy",value:function(){this.options.overlay&&(this.$element.appendTo(t(this.options.appendTo)),this.$overlay.hide().off().remove()),this.$element.hide().off(),this.$anchor.off(".zf"),t(window).off(".zf.reveal:"+this.id),Foundation.unregisterPlugin(this)}}]),e}();s.defaults={animationIn:"",animationOut:"",showDelay:0,hideDelay:0,closeOnClick:!0,closeOnEsc:!0,multipleOpened:!1,vOffset:"auto",hOffset:"auto",fullScreen:!1,btmOffsetPct:10,overlay:!0,resetOnClose:!1,deepLink:!1,appendTo:"body"},Foundation.plugin(s,"Reveal")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(t,e){return t/e}function i(t,e,i,n){return Math.abs(t.position()[e]+t[n]()/2-i)}function n(t,e){return Math.log(e)/Math.log(t)}var s=function(){function s(e,i){_classCallCheck(this,s),this.$element=e,this.options=t.extend({},s.defaults,this.$element.data(),i),this._init(),Foundation.registerPlugin(this,"Slider"),Foundation.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}return _createClass(s,[{key:"_init",value:function(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):t("#"+this.$handle.attr("aria-controls")),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var e=!1;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=t().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=this.inputs.length>1?this.inputs.eq(1):t("#"+this.$handle2.attr("aria-controls")),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),e=!0,this._setInitAttr(1)),this.setHandles(),this._events()}},{key:"setHandles",value:function(){var t=this;this.handles[1]?this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0,function(){t._setHandlePos(t.$handle2,t.inputs.eq(1).val(),!0)}):this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0)}},{key:"_reflow",value:function(){this.setHandles()}},{key:"_pctOfBar",value:function(t){var i=e(t-this.options.start,this.options.end-this.options.start);switch(this.options.positionValueFunction){case"pow":i=this._logTransform(i);break;case"log":i=this._powTransform(i)}return i.toFixed(2)}},{key:"_value",value:function(t){switch(this.options.positionValueFunction){case"pow":t=this._powTransform(t);break;case"log":t=this._logTransform(t)}var e=(this.options.end-this.options.start)*t+this.options.start;return e}},{key:"_logTransform",value:function(t){return n(this.options.nonLinearBase,t*(this.options.nonLinearBase-1)+1)}},{key:"_powTransform",value:function(t){return(Math.pow(this.options.nonLinearBase,t)-1)/(this.options.nonLinearBase-1)}},{key:"_setHandlePos",value:function(t,i,n,s){if(!this.$element.hasClass(this.options.disabledClass)){i=parseFloat(i),i<this.options.start?i=this.options.start:i>this.options.end&&(i=this.options.end);var o=this.options.doubleSided;if(o)if(0===this.handles.index(t)){var a=parseFloat(this.$handle2.attr("aria-valuenow"));i=i>=a?a-this.options.step:i}else{var r=parseFloat(this.$handle.attr("aria-valuenow"));i=i<=r?r+this.options.step:i}this.options.vertical&&!n&&(i=this.options.end-i);var l=this,u=this.options.vertical,d=u?"height":"width",h=u?"top":"left",c=t[0].getBoundingClientRect()[d],f=this.$element[0].getBoundingClientRect()[d],p=this._pctOfBar(i),m=(f-c)*p,g=(100*e(m,f)).toFixed(this.options.decimal);i=parseFloat(i.toFixed(this.options.decimal));var v={};if(this._setValues(t,i),o){var y,w=0===this.handles.index(t),b=~~(100*e(c,f));if(w)v[h]=g+"%",y=parseFloat(this.$handle2[0].style[h])-g+b,s&&"function"==typeof s&&s();else{var $=parseFloat(this.$handle[0].style[h]);y=g-(isNaN($)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):$)+b}v["min-"+d]=y+"%"}this.$element.one("finished.zf.animate",function(){l.$element.trigger("moved.zf.slider",[t])});var C=this.$element.data("dragging")?1e3/60:this.options.moveTime;Foundation.Move(C,t,function(){isNaN(g)?t.css(h,100*p+"%"):t.css(h,g+"%"),l.options.doubleSided?l.$fill.css(v):l.$fill.css(d,100*p+"%")}),clearTimeout(l.timeout),l.timeout=setTimeout(function(){l.$element.trigger("changed.zf.slider",[t])},l.options.changedDelay)}}},{key:"_setInitAttr",value:function(t){var e=0===t?this.options.initialStart:this.options.initialEnd,i=this.inputs.eq(t).attr("id")||Foundation.GetYoDigits(6,"slider");this.inputs.eq(t).attr({id:i,max:this.options.end,min:this.options.start,step:this.options.step}),this.inputs.eq(t).val(e),this.handles.eq(t).attr({role:"slider","aria-controls":i,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":e,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}},{key:"_setValues",value:function(t,e){var i=this.options.doubleSided?this.handles.index(t):0;this.inputs.eq(i).val(e),t.attr("aria-valuenow",e)}},{key:"_handleEvent",value:function(n,s,o){var a,r;if(o)a=this._adjustValue(null,o),r=!0;else{n.preventDefault();var l=this,u=this.options.vertical,d=u?"height":"width",h=u?"top":"left",c=u?n.pageY:n.pageX,f=(this.$handle[0].getBoundingClientRect()[d]/2,this.$element[0].getBoundingClientRect()[d]),p=u?t(window).scrollTop():t(window).scrollLeft(),m=this.$element.offset()[h];n.clientY===n.pageY&&(c+=p);var g,v=c-m;g=v<0?0:v>f?f:v;var y=e(g,f);if(a=this._value(y),Foundation.rtl()&&!this.options.vertical&&(a=this.options.end-a),a=l._adjustValue(null,a),r=!1,!s){var w=i(this.$handle,h,g,d),b=i(this.$handle2,h,g,d);
s=w<=b?this.$handle:this.$handle2}}this._setHandlePos(s,a,r)}},{key:"_adjustValue",value:function(t,e){var i,n,s,o,a=this.options.step,r=parseFloat(a/2);return i=t?parseFloat(t.attr("aria-valuenow")):e,n=i%a,s=i-n,o=s+a,0===n?i:i=i>=s+r?o:s}},{key:"_events",value:function(){this._eventsForHandle(this.$handle),this.handles[1]&&this._eventsForHandle(this.$handle2)}},{key:"_eventsForHandle",value:function(e){var i,n=this;if(this.inputs.off("change.zf.slider").on("change.zf.slider",function(e){var i=n.inputs.index(t(this));n._handleEvent(e,n.handles.eq(i),t(this).val())}),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(e){return!n.$element.data("dragging")&&void(t(e.target).is("[data-slider-handle]")||(n.options.doubleSided?n._handleEvent(e):n._handleEvent(e,n.$handle)))}),this.options.draggable){this.handles.addTouch();var s=t("body");e.off("mousedown.zf.slider").on("mousedown.zf.slider",function(o){e.addClass("is-dragging"),n.$fill.addClass("is-dragging"),n.$element.data("dragging",!0),i=t(o.currentTarget),s.on("mousemove.zf.slider",function(t){t.preventDefault(),n._handleEvent(t,i)}).on("mouseup.zf.slider",function(t){n._handleEvent(t,i),e.removeClass("is-dragging"),n.$fill.removeClass("is-dragging"),n.$element.data("dragging",!1),s.off("mousemove.zf.slider mouseup.zf.slider")})}).on("selectstart.zf.slider touchmove.zf.slider",function(t){t.preventDefault()})}e.off("keydown.zf.slider").on("keydown.zf.slider",function(e){var i,s=t(this),o=n.options.doubleSided?n.handles.index(s):0,a=parseFloat(n.inputs.eq(o).val());Foundation.Keyboard.handleKey(e,"Slider",{decrease:function(){i=a-n.options.step},increase:function(){i=a+n.options.step},decrease_fast:function(){i=a-10*n.options.step},increase_fast:function(){i=a+10*n.options.step},handled:function(){e.preventDefault(),n._setHandlePos(s,i,!0)}})})}},{key:"destroy",value:function(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),clearTimeout(this.timeout),Foundation.unregisterPlugin(this)}}]),s}();s.defaults={start:0,end:100,step:1,initialStart:0,initialEnd:100,binding:!1,clickSelect:!0,vertical:!1,draggable:!0,disabled:!1,doubleSided:!1,decimal:2,moveTime:200,disabledClass:"disabled",invertVertical:!1,changedDelay:500,nonLinearBase:5,positionValueFunction:"linear"},Foundation.plugin(s,"Slider")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}var i=function(){function i(e,n){_classCallCheck(this,i),this.$element=e,this.options=t.extend({},i.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Sticky")}return _createClass(i,[{key:"_init",value:function(){var e=this.$element.parent("[data-sticky-container]"),i=this.$element[0].id||Foundation.GetYoDigits(6,"sticky"),n=this;e.length||(this.wasWrapped=!0),this.$container=e.length?e:t(this.options.container).wrapInner(this.$element),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":i}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,t(window).one("load.zf.sticky",function(){n.containerHeight="none"==n.$element.css("display")?0:n.$element[0].getBoundingClientRect().height,n.$container.css("height",n.containerHeight),n.elemHeight=n.containerHeight,""!==n.options.anchor?n.$anchor=t("#"+n.options.anchor):n._parsePoints(),n._setSizes(function(){var t=window.pageYOffset;n._calc(!1,t),n.isStuck||n._removeSticky(!(t>=n.topPoint))}),n._events(i.split("-").reverse().join("-"))})}},{key:"_parsePoints",value:function(){for(var e=""==this.options.topAnchor?1:this.options.topAnchor,i=""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor,n=[e,i],s={},o=0,a=n.length;o<a&&n[o];o++){var r;if("number"==typeof n[o])r=n[o];else{var l=n[o].split(":"),u=t("#"+l[0]);r=u.offset().top,l[1]&&"bottom"===l[1].toLowerCase()&&(r+=u[0].getBoundingClientRect().height)}s[o]=r}this.points=s}},{key:"_events",value:function(e){var i=this,n=this.scrollListener="scroll.zf."+e;this.isOn||(this.canStick&&(this.isOn=!0,t(window).off(n).on(n,function(t){0===i.scrollCount?(i.scrollCount=i.options.checkEvery,i._setSizes(function(){i._calc(!1,window.pageYOffset)})):(i.scrollCount--,i._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,s){i._setSizes(function(){i._calc(!1),i.canStick?i.isOn||i._events(e):i.isOn&&i._pauseListeners(n)})}))}},{key:"_pauseListeners",value:function(e){this.isOn=!1,t(window).off(e),this.$element.trigger("pause.zf.sticky")}},{key:"_calc",value:function(t,e){return t&&this._setSizes(),this.canStick?(e||(e=window.pageYOffset),void(e>=this.topPoint?e<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0))):(this.isStuck&&this._removeSticky(!0),!1)}},{key:"_setSticky",value:function(){var t=this,e=this.options.stickTo,i="top"===e?"marginTop":"marginBottom",n="top"===e?"bottom":"top",s={};s[i]=this.options[i]+"em",s[e]=0,s[n]="auto",this.isStuck=!0,this.$element.removeClass("is-anchored is-at-"+n).addClass("is-stuck is-at-"+e).css(s).trigger("sticky.zf.stuckto:"+e),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){t._setSizes()})}},{key:"_removeSticky",value:function(t){var e=this.options.stickTo,i="top"===e,n={},s=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,o=i?"marginTop":"marginBottom",a=t?"top":"bottom";n[o]=0,n.bottom="auto",t?n.top=0:n.top=s,this.isStuck=!1,this.$element.removeClass("is-stuck is-at-"+e).addClass("is-anchored is-at-"+a).css(n).trigger("sticky.zf.unstuckfrom:"+a)}},{key:"_setSizes",value:function(t){this.canStick=Foundation.MediaQuery.is(this.options.stickyOn),this.canStick||t&&"function"==typeof t&&t();var e=this.$container[0].getBoundingClientRect().width,i=window.getComputedStyle(this.$container[0]),n=parseInt(i["padding-left"],10),s=parseInt(i["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":e-n-s+"px"});var o=this.$element[0].getBoundingClientRect().height||this.containerHeight;if("none"==this.$element.css("display")&&(o=0),this.containerHeight=o,this.$container.css({height:o}),this.elemHeight=o,!this.isStuck&&this.$element.hasClass("is-at-bottom")){var a=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",a)}this._setBreakPoints(o,function(){t&&"function"==typeof t&&t()})}},{key:"_setBreakPoints",value:function(t,i){if(!this.canStick){if(!i||"function"!=typeof i)return!1;i()}var n=e(this.options.marginTop),s=e(this.options.marginBottom),o=this.points?this.points[0]:this.$anchor.offset().top,a=this.points?this.points[1]:o+this.anchorHeight,r=window.innerHeight;"top"===this.options.stickTo?(o-=n,a-=t+n):"bottom"===this.options.stickTo&&(o-=r-(t+s),a-=r-s),this.topPoint=o,this.bottomPoint=a,i&&"function"==typeof i&&i()}},{key:"destroy",value:function(){this._removeSticky(!0),this.$element.removeClass(this.options.stickyClass+" is-anchored is-at-top").css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),t(window).off(this.scrollListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""}),Foundation.unregisterPlugin(this)}}]),i}();i.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",checkEvery:-1},Foundation.plugin(i,"Sticky")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Tabs"),Foundation.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}return _createClass(e,[{key:"_init",value:function(){var e=this;if(this.$element.attr({role:"tablist"}),this.$tabTitles=this.$element.find("."+this.options.linkClass),this.$tabContent=t('[data-tabs-content="'+this.$element[0].id+'"]'),this.$tabTitles.each(function(){var i=t(this),n=i.find("a"),s=i.hasClass(""+e.options.linkActiveClass),o=n[0].hash.slice(1),a=n[0].id?n[0].id:o+"-label",r=t("#"+o);if(i.attr({role:"presentation"}),n.attr({role:"tab","aria-controls":o,"aria-selected":s,id:a}),r.attr({role:"tabpanel","aria-hidden":!s,"aria-labelledby":a}),s&&e.options.autoFocus&&t(window).load(function(){t("html, body").animate({scrollTop:i.offset().top},e.options.deepLinkSmudgeDelay,function(){n.focus()})}),e.options.deepLink){var l=window.location.hash;if(l.length){var n=i.find('[href="'+l+'"]');n.length&&(e.selectTab(t(l)),e.options.deepLinkSmudge&&t(window).load(function(){var n=i.offset();t("html, body").animate({scrollTop:n.top},e.options.deepLinkSmudgeDelay)}),i.trigger("deeplink.zf.tabs",[n,t(l)]))}}}),this.options.matchHeight){var i=this.$tabContent.find("img");i.length?Foundation.onImagesLoaded(i,this._setHeight.bind(this)):this._setHeight()}this._events()}},{key:"_events",value:function(){this._addKeyHandler(),this._addClickHandler(),this._setHeightMqHandler=null,this.options.matchHeight&&(this._setHeightMqHandler=this._setHeight.bind(this),t(window).on("changed.zf.mediaquery",this._setHeightMqHandler))}},{key:"_addClickHandler",value:function(){var e=this;this.$element.off("click.zf.tabs").on("click.zf.tabs","."+this.options.linkClass,function(i){i.preventDefault(),i.stopPropagation(),e._handleTabChange(t(this))})}},{key:"_addKeyHandler",value:function(){var e=this;this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(i){if(9!==i.which){var n,s,o=t(this),a=o.parent("ul").children("li");a.each(function(i){if(t(this).is(o))return void(e.options.wrapOnKeys?(n=0===i?a.last():a.eq(i-1),s=i===a.length-1?a.first():a.eq(i+1)):(n=a.eq(Math.max(0,i-1)),s=a.eq(Math.min(i+1,a.length-1))))}),Foundation.Keyboard.handleKey(i,"Tabs",{open:function(){o.find('[role="tab"]').focus(),e._handleTabChange(o)},previous:function(){n.find('[role="tab"]').focus(),e._handleTabChange(n)},next:function(){s.find('[role="tab"]').focus(),e._handleTabChange(s)},handled:function(){i.stopPropagation(),i.preventDefault()}})}})}},{key:"_handleTabChange",value:function(t){if(t.hasClass(""+this.options.linkActiveClass))return void(this.options.activeCollapse&&(this._collapseTab(t),this.$element.trigger("collapse.zf.tabs",[t])));var e=this.$element.find("."+this.options.linkClass+"."+this.options.linkActiveClass),i=t.find('[role="tab"]'),n=i[0].hash,s=this.$tabContent.find(n);if(this._collapseTab(e),this._openTab(t),this.options.deepLink){var o=t.find("a").attr("href");this.options.updateHistory?history.pushState({},"",o):history.replaceState({},"",o)}this.$element.trigger("change.zf.tabs",[t,s]),s.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_openTab",value:function(t){var e=t.find('[role="tab"]'),i=e[0].hash,n=this.$tabContent.find(i);t.addClass(""+this.options.linkActiveClass),e.attr({"aria-selected":"true"}),n.addClass(""+this.options.panelActiveClass).attr({"aria-hidden":"false"})}},{key:"_collapseTab",value:function(e){var i=e.removeClass(""+this.options.linkActiveClass).find('[role="tab"]').attr({"aria-selected":"false"});t("#"+i.attr("aria-controls")).removeClass(""+this.options.panelActiveClass).attr({"aria-hidden":"true"})}},{key:"selectTab",value:function(t){var e;e="object"==typeof t?t[0].id:t,e.indexOf("#")<0&&(e="#"+e);var i=this.$tabTitles.find('[href="'+e+'"]').parent("."+this.options.linkClass);this._handleTabChange(i)}},{key:"_setHeight",value:function(){var e=0;this.$tabContent.find("."+this.options.panelClass).css("height","").each(function(){var i=t(this),n=i.hasClass(""+this.options.panelActiveClass);n||i.css({visibility:"hidden",display:"block"});var s=this.getBoundingClientRect().height;n||i.css({visibility:"",display:""}),e=s>e?s:e}).css("height",e+"px")}},{key:"destroy",value:function(){this.$element.find("."+this.options.linkClass).off(".zf.tabs").hide().end().find("."+this.options.panelClass).hide(),this.options.matchHeight&&null!=this._setHeightMqHandler&&t(window).off("changed.zf.mediaquery",this._setHeightMqHandler),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={deepLink:!1,deepLinkSmudge:!1,deepLinkSmudgeDelay:300,updateHistory:!1,autoFocus:!1,wrapOnKeys:!0,matchHeight:!1,activeCollapse:!1,linkClass:"tabs-title",linkActiveClass:"is-active",panelClass:"tabs-panel",panelActiveClass:"is-active"},Foundation.plugin(e,"Tabs")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,i.data(),n),this.className="",this._init(),this._events(),Foundation.registerPlugin(this,"Toggler")}return _createClass(e,[{key:"_init",value:function(){var e;this.options.animate?(e=this.options.animate.split(" "),this.animationIn=e[0],this.animationOut=e[1]||null):(e=this.$element.data("toggler"),this.className="."===e[0]?e.slice(1):e);var i=this.$element[0].id;t('[data-open="'+i+'"], [data-close="'+i+'"], [data-toggle="'+i+'"]').attr("aria-controls",i),this.$element.attr("aria-expanded",!this.$element.is(":hidden"))}},{key:"_events",value:function(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}},{key:"toggle",value:function(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function(){this.$element.toggleClass(this.className);var t=this.$element.hasClass(this.className);t?this.$element.trigger("on.zf.toggler"):this.$element.trigger("off.zf.toggler"),this._updateARIA(t),this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_toggleAnimate",value:function(){var t=this;this.$element.is(":hidden")?Foundation.Motion.animateIn(this.$element,this.animationIn,function(){t._updateARIA(!0),this.trigger("on.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")}):Foundation.Motion.animateOut(this.$element,this.animationOut,function(){t._updateARIA(!1),this.trigger("off.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")})}},{key:"_updateARIA",value:function(t){this.$element.attr("aria-expanded",!!t)}},{key:"destroy",value:function(){this.$element.off(".zf.toggler"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={animate:!1},Foundation.plugin(e,"Toggler")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this.isActive=!1,this.isClick=!1,this._init(),Foundation.registerPlugin(this,"Tooltip")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("aria-describedby")||Foundation.GetYoDigits(6,"tooltip");this.options.positionClass=this.options.positionClass||this._getPositionClass(this.$element),this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?t(this.options.template):this._buildTemplate(e),this.options.allowHtml?this.template.appendTo(document.body).html(this.options.tipText).hide():this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":e,"data-yeti-box":e,"data-toggle":e,"data-resize":e}).addClass(this.options.triggerClass),this.usedPositions=[],this.counter=4,this.classChanged=!1,this._events()}},{key:"_getPositionClass",value:function(t){if(!t)return"";var e=t[0].className.match(/\b(top|left|right)\b/g);return e=e?e[0]:""}},{key:"_buildTemplate",value:function(e){var i=(this.options.tooltipClass+" "+this.options.positionClass+" "+this.options.templateClasses).trim(),n=t("<div></div>").addClass(i).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:e});return n}},{key:"_reposition",value:function(t){this.usedPositions.push(t?t:"bottom"),!t&&this.usedPositions.indexOf("top")<0?this.template.addClass("top"):"top"===t&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):"left"===t&&this.usedPositions.indexOf("right")<0?this.template.removeClass(t).addClass("right"):"right"===t&&this.usedPositions.indexOf("left")<0?this.template.removeClass(t).addClass("left"):!t&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.template.addClass("left"):"top"===t&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.template.removeClass(t).addClass("left"):"left"===t&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):"right"===t&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):this.template.removeClass(t),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){var t=this._getPositionClass(this.template),e=Foundation.Box.GetDimensions(this.template),i=Foundation.Box.GetDimensions(this.$element),n="left"===t?"left":"right"===t?"left":"top",s="top"===n?"height":"width";"height"===s?this.options.vOffset:this.options.hOffset;if(e.width>=e.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.template))return this.template.offset(Foundation.Box.GetOffsets(this.template,this.$element,"center bottom",this.options.vOffset,this.options.hOffset,!0)).css({width:i.windowDims.width-2*this.options.hOffset,height:"auto"}),!1;for(this.template.offset(Foundation.Box.GetOffsets(this.template,this.$element,"center "+(t||"bottom"),this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.template)&&this.counter;)this._reposition(t),this._setPosition()}},{key:"show",value:function(){if("all"!==this.options.showOn&&!Foundation.MediaQuery.is(this.options.showOn))return!1;var t=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),t.isActive=!0,this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){}),this.$element.trigger("show.zf.tooltip")}},{key:"hide",value:function(){var t=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){t.isActive=!1,t.isClick=!1,t.classChanged&&(t.template.removeClass(t._getPositionClass(t.template)).addClass(t.options.positionClass),t.usedPositions=[],t.counter=4,t.classChanged=!1)}),this.$element.trigger("hide.zf.tooltip")}},{key:"_events",value:function(){var t=this,e=(this.template,!1);this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(e){t.isActive||(t.timeout=setTimeout(function(){t.show()},t.options.hoverDelay))}).on("mouseleave.zf.tooltip",function(i){clearTimeout(t.timeout),(!e||t.isClick&&!t.options.clickOpen)&&t.hide()}),this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick||(t.isClick=!0,!t.options.disableHover&&t.$element.attr("tabindex")||t.isActive||t.show())}):this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick=!0}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(e){t.isActive?t.hide():t.show()}),this.$element.on({"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(i){return e=!0,t.isClick?(t.options.clickOpen||(e=!1),!1):void t.show()}).on("focusout.zf.tooltip",function(i){e=!1,t.isClick=!1,t.hide()}).on("resizeme.zf.trigger",function(){t.isActive&&t._setPosition()})}},{key:"toggle",value:function(){this.isActive?this.hide():this.show()}},{key:"destroy",value:function(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeClass("has-tip top right left").removeAttr("aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),this.template.remove(),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={disableForTouch:!1,hoverDelay:200,fadeInDuration:150,fadeOutDuration:150,disableHover:!1,templateClasses:"",tooltipClass:"tooltip",triggerClass:"has-tip",showOn:"small",template:"",tipText:"",touchCloseText:"Tap to close.",clickOpen:!0,positionClass:"",vOffset:10,hOffset:12,allowHtml:!1},Foundation.plugin(e,"Tooltip")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=t(i),this.options=t.extend({},this.$element.data(),n),this.rules=this.$element.data("responsive-accordion-tabs"),this.currentMq=null,this.currentPlugin=null,this.$element.attr("id")||this.$element.attr("id",Foundation.GetYoDigits(6,"responsiveaccordiontabs")),this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveAccordionTabs")}return _createClass(e,[{key:"_init",value:function(){if("string"==typeof this.rules){for(var e={},n=this.rules.split(" "),s=0;s<n.length;s++){var o=n[s].split("-"),a=o.length>1?o[0]:"small",r=o.length>1?o[1]:o[0];null!==i[r]&&(e[a]=i[r])}this.rules=e}this._getAllOptions(),t.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_getAllOptions",value:function(){var e=this;e.allOptions={};for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];try{var o=t("<ul></ul>"),a=new s.plugin(o,e.options);for(var r in a.options)if(a.options.hasOwnProperty(r)&&"zfPlugin"!==r){var l=a.options[r];e.allOptions[r]=l}a.destroy()}catch(t){}}}},{key:"_events",value:function(){var e=this;t(window).on("changed.zf.mediaquery",function(){e._checkMediaQueries()})}},{key:"_checkMediaQueries",value:function(){var e,n=this;t.each(this.rules,function(t){Foundation.MediaQuery.atLeast(t)&&(e=t)}),e&&(this.currentPlugin instanceof this.rules[e].plugin||(t.each(i,function(t,e){n.$element.removeClass(e.cssClass)}),this.$element.addClass(this.rules[e].cssClass),this.currentPlugin&&(!this.currentPlugin.$element.data("zfPlugin")&&this.storezfData&&this.currentPlugin.$element.data("zfPlugin",this.storezfData),this.currentPlugin.destroy()),this._handleMarkup(this.rules[e].cssClass),this.currentPlugin=new this.rules[e].plugin(this.$element,{}),this.storezfData=this.currentPlugin.$element.data("zfPlugin")))}},{key:"_handleMarkup",value:function(e){var i=this,n="accordion",s=t("[data-tabs-content="+this.$element.attr("id")+"]");if(s.length&&(n="tabs"),n!==e){var o=i.allOptions.linkClass?i.allOptions.linkClass:"tabs-title",a=i.allOptions.panelClass?i.allOptions.panelClass:"tabs-panel";this.$element.removeAttr("role");var r=this.$element.children("."+o+",[data-accordion-item]").removeClass(o).removeClass("accordion-item").removeAttr("data-accordion-item"),l=r.children("a").removeClass("accordion-title");if("tabs"===n?(s=s.children("."+a).removeClass(a).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby"),s.children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected")):s=r.children("[data-tab-content]").removeClass("accordion-content"),s.css({display:"",visibility:""}),r.css({display:"",visibility:""}),"accordion"===e)s.each(function(e,n){t(n).appendTo(r.get(e)).addClass("accordion-content").attr("data-tab-content","").removeClass("is-active").css({height:""}),t("[data-tabs-content="+i.$element.attr("id")+"]").after('<div id="tabs-placeholder-'+i.$element.attr("id")+'"></div>').remove(),r.addClass("accordion-item").attr("data-accordion-item",""),l.addClass("accordion-title")});else if("tabs"===e){var u=t("[data-tabs-content="+i.$element.attr("id")+"]"),d=t("#tabs-placeholder-"+i.$element.attr("id"));d.length?(u=t('<div class="tabs-content"></div>').insertAfter(d).attr("data-tabs-content",i.$element.attr("id")),d.remove()):u=t('<div class="tabs-content"></div>').insertAfter(i.$element).attr("data-tabs-content",i.$element.attr("id")),s.each(function(e,i){var n=t(i).appendTo(u).addClass(a),s=l.get(e).hash.slice(1),o=t(i).attr("id")||Foundation.GetYoDigits(6,"accordion");s!==o&&(""!==s?t(i).attr("id",s):(s=o,t(i).attr("id",s),t(l.get(e)).attr("href",t(l.get(e)).attr("href").replace("#","")+"#"+s)));var d=t(r.get(e)).hasClass("is-active");d&&n.addClass("is-active")}),r.addClass(o)}}}},{key:"destroy",value:function(){this.currentPlugin&&this.currentPlugin.destroy(),t(window).off(".zf.ResponsiveAccordionTabs"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={};var i={tabs:{cssClass:"tabs",plugin:Foundation._plugins.tabs||null},accordion:{cssClass:"accordion",plugin:Foundation._plugins.accordion||null}};Foundation.plugin(e,"ResponsiveAccordionTabs")}(jQuery);
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
 * @version    4.0.0
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
    var layout = $(event.currentTarget).data('grid-switch-layout');
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

    _.each(layouts, _.bind(function(layout) {
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
        .error(_.bind(this._renderFailed, this));
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
 * Cartalyst Quickstart
 * Copyright 2017 Cartalyst LLC. All Rights Reserved.
 *
 * Provides helpers for various sections of the application.
 *
 */

var Quickstart;

;(function (window, document, $, undefined) {
    'use strict';

    Quickstart = Quickstart || {
        App: {},
        Cache: {},
    };

    // Cache common selectors
    Quickstart.Cache.$win  = $(window);
    Quickstart.Cache.$body = $(document.body);

    // Initialize functions
    Quickstart.App.init = function () {
        Quickstart.App
            .foundation()
            .listeners()
            .wrapCodeBlocks()
            .initHighlightJs()
            .initClipboard()
            .addClasses()
        ;
    };

    // Add Listeners
	Quickstart.App.listeners = function()
	{
        Quickstart.Cache.$body
			.on('mouseover', '.js-quickstart-preview:not(code .js-quickstart-preview)', Quickstart.App.previewAttributes)
		;

		return this;
	};

    // Initialize Foundation 6
    Quickstart.App.foundation = function ()
    {
        Quickstart.Cache.$body.foundation();

        return this;
    }

    // Show preview of data-grid attributes from element on hover.
    Quickstart.App.previewAttributes = function (event) {

        var target = $(event.target);
        var tag = target.closest('.js-quickstart-preview').prop('tagName').toLowerCase();
        var attributes = target.closest('.js-quickstart-preview').data();

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
    Quickstart.App.wrapCodeBlocks = function () {
        $('.tutorial__article h5').each(function () {

            var el = $(this);
            console.log(el);

            $(this)
                .addClass('example__header')
                .next('p')
                .addClass('example__block')
                .wrapInner('<pre></pre>')
            ;

            $(this).next().addBack().wrapAll('<div class="example"></div>');
        });

        // Add Actions
        $('.example').each(function () {
            var el = $(this);

            var slug = Quickstart.App.slugify(el.children('.example__header').html());

            $(this).append('<nav class="example__actions"></nav>');

            // Add the copy to clipboard button
            el
                .find('.example__actions')
                .append('<button class="mdl-button mdl-js-button mdl-button--icon" data-copy-text data-clipboard-target="#'+slug+'"><i class="material-icons">content_cut</i></button>')
            ;

            el.find('.example__block > pre > code').attr('id', slug);
        });

        return this;
    };

    // Syntax highlighting for code blocks.
    Quickstart.App.initHighlightJs = function () {

        hljs.initHighlightingOnLoad();

        return this;
    };

    // Readability for examples, add framework, app specific classes here.
    Quickstart.App.addClasses = function () {
        if ($('[data-example]').length) {

            // What example is being displayed
            var type = $('[data-example]').data('example');

            switch(type) {
                case 'table':

                    // Filters
                    // $('.filters > button').addClass('mdl-button mdl-js-button mdl-button--icon');
                    // $('.filters > ul').addClass('mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect');
                    // $('.filters > ul li').addClass('mdl-menu__item js-quickstart-preview');

                    // Layouts
                    //$('[data-grid-switch-layout]').addClass('mdl-button mdl-js-button mdl-button--icon js-quickstart-preview');

                    // Search Form
                    // $('.search form > div').addClass('mdl-textfield mdl-js-textfield');
                    // $('.search form > div input').addClass('mdl-textfield__input');
                    // $('.search form > div label').addClass('mdl-textfield__label');

                    // Table
                    //$('table').addClass('mdl-data-table');
                    $('th').addClass('js-quickstart-preview');

                    // Applied filters
                    // $('[data-grid-layout="filters"]').on('dg:layout_rendered', function() {
                    //     $(this).find('button').addClass('mdl-button mdl-js-button mdl-js-ripple-effect js-quickstart-preview');
                    // });

                    // Pagination
                    $('[data-grid-layout="pagination"]').on('dg:layout_rendered', function() {
                        $(this).find('button').addClass('js-quickstart-preview');
                    });

                    break;
                case 'list':

                    // Group Filters
                    $('[data-grid-group] > button').addClass('js-quickstart-preview');

                    break;
                default:
                    // Default
                ;
            }
        };

        return this;
    };

    // Initializes the Clipboard.js
    Quickstart.App.initClipboard = function () {
        var clipboard = new Clipboard('[data-copy-text]');

        clipboard.on('success', function (e) {
            e.clearSelection();

            // Show success notice
            $('.example__actions').prepend('<span class="action__message">Copied!</span>')

            $('.action__message').fadeOut(2500, function () {
                $(this).remove();
            });
        });

        clipboard.on('error', function (e) {
            // Show fallback tooltip
            $('.example__actions').prepend('<span class="action__message">'+Quickstart.App.fallbackMessage()+'</span>')

            $('.action__message').fadeOut(4500, function () {
                $(this).remove();
            });
        });

        return this;
    };

    // Slugifies the given string
    Quickstart.App.slugify = function (str) {
        if (str === undefined) return;

        return str
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .toLowerCase()
            .replace(/\s/g,'-')
        ;
    };

    Quickstart.App.fallbackMessage = function () {
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

    // Job done, lets run
    Quickstart.App.init();
    
})(window, document, jQuery);
