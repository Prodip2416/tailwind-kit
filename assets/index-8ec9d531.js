(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(l){if(l.ep)return;l.ep=!0;const n=r(l);fetch(l.href,n)}})();function Jm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ex={exports:{}},qi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh=Symbol.for("react.transitional.element"),ch=Symbol.for("react.fragment");function tx(e,t,r){var s=null;if(r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),"key"in t){r={};for(var l in t)l!=="key"&&(r[l]=t[l])}else r=t;return t=r.ref,{$$typeof:dh,type:e,key:s,ref:t!==void 0?t:null,props:r}}qi.Fragment=ch;qi.jsx=tx;qi.jsxs=tx;ex.exports=qi;var a=ex.exports,ax={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc=Symbol.for("react.transitional.element"),uh=Symbol.for("react.portal"),mh=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),gh=Symbol.for("react.consumer"),fh=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),bh=Symbol.for("react.suspense"),vh=Symbol.for("react.memo"),rx=Symbol.for("react.lazy"),Au=Symbol.iterator;function yh(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var sx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lx=Object.assign,nx={};function Ss(e,t,r){this.props=e,this.context=t,this.refs=nx,this.updater=r||sx}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ss.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ix(){}ix.prototype=Ss.prototype;function bc(e,t,r){this.props=e,this.context=t,this.refs=nx,this.updater=r||sx}var vc=bc.prototype=new ix;vc.constructor=bc;lx(vc,Ss.prototype);vc.isPureReactComponent=!0;var Lu=Array.isArray,xe={H:null,A:null,T:null,S:null,V:null},ox=Object.prototype.hasOwnProperty;function yc(e,t,r,s,l,n){return r=n.ref,{$$typeof:hc,type:e,key:t,ref:r!==void 0?r:null,props:n}}function kh(e,t){return yc(e.type,t,void 0,void 0,void 0,e.props)}function kc(e){return typeof e=="object"&&e!==null&&e.$$typeof===hc}function wh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ou=/\/+/g;function ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wh(""+e.key):t.toString(36)}function Bu(){}function jh(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Bu,Bu):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function qr(e,t,r,s,l){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(n){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hc:case uh:i=!0;break;case rx:return i=e._init,qr(i(e._payload),t,r,s,l)}}if(i)return l=l(e),i=s===""?"."+ho(e,0):s,Lu(l)?(r="",i!=null&&(r=i.replace(Ou,"$&/")+"/"),qr(l,t,r,"",function(c){return c})):l!=null&&(kc(l)&&(l=kh(l,r+(l.key==null||e&&e.key===l.key?"":(""+l.key).replace(Ou,"$&/")+"/")+i)),t.push(l)),1;i=0;var o=s===""?".":s+":";if(Lu(e))for(var d=0;d<e.length;d++)s=e[d],n=o+ho(s,d),i+=qr(s,t,r,n,l);else if(d=yh(e),typeof d=="function")for(e=d.call(e),d=0;!(s=e.next()).done;)s=s.value,n=o+ho(s,d++),i+=qr(s,t,r,n,l);else if(n==="object"){if(typeof e.then=="function")return qr(jh(e),t,r,s,l);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function gn(e,t,r){if(e==null)return e;var s=[],l=0;return qr(e,s,"","",function(n){return t.call(r,n,l++)}),s}function Nh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Hu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ch(){}F.Children={map:gn,forEach:function(e,t,r){gn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return gn(e,function(){t++}),t},toArray:function(e){return gn(e,function(t){return t})||[]},only:function(e){if(!kc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Ss;F.Fragment=mh;F.Profiler=ph;F.PureComponent=bc;F.StrictMode=xh;F.Suspense=bh;F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xe;F.__COMPILER_RUNTIME={__proto__:null,c:function(e){return xe.H.useMemoCache(e)}};F.cache=function(e){return function(){return e.apply(null,arguments)}};F.cloneElement=function(e,t,r){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var s=lx({},e.props),l=e.key,n=void 0;if(t!=null)for(i in t.ref!==void 0&&(n=void 0),t.key!==void 0&&(l=""+t.key),t)!ox.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(s[i]=t[i]);var i=arguments.length-2;if(i===1)s.children=r;else if(1<i){for(var o=Array(i),d=0;d<i;d++)o[d]=arguments[d+2];s.children=o}return yc(e.type,l,void 0,void 0,n,s)};F.createContext=function(e){return e={$$typeof:fh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:gh,_context:e},e};F.createElement=function(e,t,r){var s,l={},n=null;if(t!=null)for(s in t.key!==void 0&&(n=""+t.key),t)ox.call(t,s)&&s!=="key"&&s!=="__self"&&s!=="__source"&&(l[s]=t[s]);var i=arguments.length-2;if(i===1)l.children=r;else if(1<i){for(var o=Array(i),d=0;d<i;d++)o[d]=arguments[d+2];l.children=o}if(e&&e.defaultProps)for(s in i=e.defaultProps,i)l[s]===void 0&&(l[s]=i[s]);return yc(e,n,void 0,void 0,null,l)};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:hh,render:e}};F.isValidElement=kc;F.lazy=function(e){return{$$typeof:rx,_payload:{_status:-1,_result:e},_init:Nh}};F.memo=function(e,t){return{$$typeof:vh,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=xe.T,r={};xe.T=r;try{var s=e(),l=xe.S;l!==null&&l(r,s),typeof s=="object"&&s!==null&&typeof s.then=="function"&&s.then(Ch,Hu)}catch(n){Hu(n)}finally{xe.T=t}};F.unstable_useCacheRefresh=function(){return xe.H.useCacheRefresh()};F.use=function(e){return xe.H.use(e)};F.useActionState=function(e,t,r){return xe.H.useActionState(e,t,r)};F.useCallback=function(e,t){return xe.H.useCallback(e,t)};F.useContext=function(e){return xe.H.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e,t){return xe.H.useDeferredValue(e,t)};F.useEffect=function(e,t,r){var s=xe.H;if(typeof r=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return s.useEffect(e,t)};F.useId=function(){return xe.H.useId()};F.useImperativeHandle=function(e,t,r){return xe.H.useImperativeHandle(e,t,r)};F.useInsertionEffect=function(e,t){return xe.H.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return xe.H.useLayoutEffect(e,t)};F.useMemo=function(e,t){return xe.H.useMemo(e,t)};F.useOptimistic=function(e,t){return xe.H.useOptimistic(e,t)};F.useReducer=function(e,t,r){return xe.H.useReducer(e,t,r)};F.useRef=function(e){return xe.H.useRef(e)};F.useState=function(e){return xe.H.useState(e)};F.useSyncExternalStore=function(e,t,r){return xe.H.useSyncExternalStore(e,t,r)};F.useTransition=function(){return xe.H.useTransition()};F.version="19.1.1";ax.exports=F;var p=ax.exports;const ce=Jm(p);var dx={exports:{}},Fi={},cx={exports:{}},ux={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,A){var B=R.length;R.push(A);e:for(;0<B;){var _=B-1>>>1,K=R[_];if(0<l(K,A))R[_]=A,R[B]=K,B=_;else break e}}function r(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var A=R[0],B=R.pop();if(B!==A){R[0]=B;e:for(var _=0,K=R.length,Ee=K>>>1;_<Ee;){var Q=2*(_+1)-1,ie=R[Q],oe=Q+1,Ge=R[oe];if(0>l(ie,B))oe<K&&0>l(Ge,ie)?(R[_]=Ge,R[oe]=B,_=oe):(R[_]=ie,R[Q]=B,_=Q);else if(oe<K&&0>l(Ge,B))R[_]=Ge,R[oe]=B,_=oe;else break e}}return A}function l(R,A){var B=R.sortIndex-A.sortIndex;return B!==0?B:R.id-A.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var n=performance;e.unstable_now=function(){return n.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var d=[],c=[],u=1,m=null,x=3,b=!1,j=!1,k=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;function v(R){for(var A=r(c);A!==null;){if(A.callback===null)s(c);else if(A.startTime<=R)s(c),A.sortIndex=A.expirationTime,t(d,A);else break;A=r(c)}}function w(R){if(k=!1,v(R),!j)if(r(d)!==null)j=!0,D||(D=!0,O());else{var A=r(c);A!==null&&E(w,A.startTime-R)}}var D=!1,N=-1,C=5,S=-1;function T(){return y?!0:!(e.unstable_now()-S<C)}function z(){if(y=!1,D){var R=e.unstable_now();S=R;var A=!0;try{e:{j=!1,k&&(k=!1,h(N),N=-1),b=!0;var B=x;try{t:{for(v(R),m=r(d);m!==null&&!(m.expirationTime>R&&T());){var _=m.callback;if(typeof _=="function"){m.callback=null,x=m.priorityLevel;var K=_(m.expirationTime<=R);if(R=e.unstable_now(),typeof K=="function"){m.callback=K,v(R),A=!0;break t}m===r(d)&&s(d),v(R)}else s(d);m=r(d)}if(m!==null)A=!0;else{var Ee=r(c);Ee!==null&&E(w,Ee.startTime-R),A=!1}}break e}finally{m=null,x=B,b=!1}A=void 0}}finally{A?O():D=!1}}}var O;if(typeof f=="function")O=function(){f(z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,H=$.port2;$.port1.onmessage=z,O=function(){H.postMessage(null)}}else O=function(){g(z,0)};function E(R,A){N=g(function(){R(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_next=function(R){switch(x){case 1:case 2:case 3:var A=3;break;default:A=x}var B=x;x=A;try{return R()}finally{x=B}},e.unstable_requestPaint=function(){y=!0},e.unstable_runWithPriority=function(R,A){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=x;x=R;try{return A()}finally{x=B}},e.unstable_scheduleCallback=function(R,A,B){var _=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?_+B:_):B=_,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=B+K,R={id:u++,callback:A,priorityLevel:R,startTime:B,expirationTime:K,sortIndex:-1},B>_?(R.sortIndex=B,t(c,R),r(d)===null&&R===r(c)&&(k?(h(N),N=-1):k=!0,E(w,B-_))):(R.sortIndex=K,t(d,R),j||b||(j=!0,D||(D=!0,O()))),R},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(R){var A=x;return function(){var B=x;x=A;try{return R.apply(this,arguments)}finally{x=B}}}})(ux);cx.exports=ux;var Sh=cx.exports,mx={exports:{}},Xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh=p;function xx(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ma(){}var Ye={d:{f:Ma,r:function(){throw Error(xx(522))},D:Ma,C:Ma,L:Ma,m:Ma,X:Ma,S:Ma,M:Ma},p:0,findDOMNode:null},Th=Symbol.for("react.portal");function Rh(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Th,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}var sl=Dh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Vi(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ye;Xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(xx(299));return Rh(e,t,null,r)};Xe.flushSync=function(e){var t=sl.T,r=Ye.p;try{if(sl.T=null,Ye.p=2,e)return e()}finally{sl.T=t,Ye.p=r,Ye.d.f()}};Xe.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ye.d.C(e,t))};Xe.prefetchDNS=function(e){typeof e=="string"&&Ye.d.D(e)};Xe.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var r=t.as,s=Vi(r,t.crossOrigin),l=typeof t.integrity=="string"?t.integrity:void 0,n=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;r==="style"?Ye.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:s,integrity:l,fetchPriority:n}):r==="script"&&Ye.d.X(e,{crossOrigin:s,integrity:l,fetchPriority:n,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Xe.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var r=Vi(t.as,t.crossOrigin);Ye.d.M(e,{crossOrigin:r,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ye.d.M(e)};Xe.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var r=t.as,s=Vi(r,t.crossOrigin);Ye.d.L(e,r,{crossOrigin:s,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Xe.preloadModule=function(e,t){if(typeof e=="string")if(t){var r=Vi(t.as,t.crossOrigin);Ye.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:r,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ye.d.m(e)};Xe.requestFormReset=function(e){Ye.d.r(e)};Xe.unstable_batchedUpdates=function(e,t){return e(t)};Xe.useFormState=function(e,t,r){return sl.H.useFormState(e,t,r)};Xe.useFormStatus=function(){return sl.H.useHostTransitionStatus()};Xe.version="19.1.1";function px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(px)}catch(e){console.error(e)}}px(),mx.exports=Xe;var Gr=mx.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=Sh,gx=p,Mh=Gr;function M(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function hx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $u(e){if(ql(e)!==e)throw Error(M(188))}function Eh(e){var t=e.alternate;if(!t){if(t=ql(e),t===null)throw Error(M(188));return t!==e?null:e}for(var r=e,s=t;;){var l=r.return;if(l===null)break;var n=l.alternate;if(n===null){if(s=l.return,s!==null){r=s;continue}break}if(l.child===n.child){for(n=l.child;n;){if(n===r)return $u(l),e;if(n===s)return $u(l),t;n=n.sibling}throw Error(M(188))}if(r.return!==s.return)r=l,s=n;else{for(var i=!1,o=l.child;o;){if(o===r){i=!0,r=l,s=n;break}if(o===s){i=!0,s=l,r=n;break}o=o.sibling}if(!i){for(o=n.child;o;){if(o===r){i=!0,r=n,s=l;break}if(o===s){i=!0,s=n,r=l;break}o=o.sibling}if(!i)throw Error(M(189))}}if(r.alternate!==s)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?e:t}function bx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=bx(e),t!==null)return t;e=e.sibling}return null}var ue=Object.assign,zh=Symbol.for("react.element"),fn=Symbol.for("react.transitional.element"),el=Symbol.for("react.portal"),Pr=Symbol.for("react.fragment"),vx=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),Ah=Symbol.for("react.provider"),yx=Symbol.for("react.consumer"),ca=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),jc=Symbol.for("react.memo"),La=Symbol.for("react.lazy"),gd=Symbol.for("react.activity"),Lh=Symbol.for("react.memo_cache_sentinel"),_u=Symbol.iterator;function Vs(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var Oh=Symbol.for("react.client.reference");function fd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oh?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pr:return"Fragment";case md:return"Profiler";case vx:return"StrictMode";case xd:return"Suspense";case pd:return"SuspenseList";case gd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case el:return"Portal";case ca:return(e.displayName||"Context")+".Provider";case yx:return(e._context.displayName||"Context")+".Consumer";case wc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jc:return t=e.displayName||null,t!==null?t:fd(e.type)||"Memo";case La:t=e._payload,e=e._init;try{return fd(e(t))}catch{}}return null}var tl=Array.isArray,q=gx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=Mh.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mr={pending:!1,data:null,method:null,action:null},hd=[],Yr=-1;function Qt(e){return{current:e}}function Be(e){0>Yr||(e.current=hd[Yr],hd[Yr]=null,Yr--)}function pe(e,t){Yr++,hd[Yr]=e.current,e.current=t}var Pt=Qt(null),wl=Qt(null),Ga=Qt(null),ti=Qt(null);function ai(e,t){switch(pe(Ga,t),pe(wl,e),pe(Pt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?I0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=I0(t),e=Hg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Be(Pt),pe(Pt,e)}function xs(){Be(Pt),Be(wl),Be(Ga)}function bd(e){e.memoizedState!==null&&pe(ti,e);var t=Pt.current,r=Hg(t,e.type);t!==r&&(pe(wl,e),pe(Pt,r))}function ri(e){wl.current===e&&(Be(Pt),Be(wl)),ti.current===e&&(Be(ti),zl._currentValue=mr)}var vd=Object.prototype.hasOwnProperty,Nc=Me.unstable_scheduleCallback,bo=Me.unstable_cancelCallback,Bh=Me.unstable_shouldYield,Hh=Me.unstable_requestPaint,Yt=Me.unstable_now,$h=Me.unstable_getCurrentPriorityLevel,kx=Me.unstable_ImmediatePriority,wx=Me.unstable_UserBlockingPriority,si=Me.unstable_NormalPriority,_h=Me.unstable_LowPriority,jx=Me.unstable_IdlePriority,Uh=Me.log,qh=Me.unstable_setDisableYieldValue,Fl=null,ct=null;function qa(e){if(typeof Uh=="function"&&qh(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Fl,e)}catch{}}var ut=Math.clz32?Math.clz32:Ih,Fh=Math.log,Vh=Math.LN2;function Ih(e){return e>>>=0,e===0?32:31-(Fh(e)/Vh|0)|0}var hn=256,bn=4194304;function or(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ii(e,t,r){var s=e.pendingLanes;if(s===0)return 0;var l=0,n=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=s&134217727;return o!==0?(s=o&~n,s!==0?l=or(s):(i&=o,i!==0?l=or(i):r||(r=o&~e,r!==0&&(l=or(r))))):(o=s&~n,o!==0?l=or(o):i!==0?l=or(i):r||(r=s&~e,r!==0&&(l=or(r)))),l===0?0:t!==0&&t!==l&&!(t&n)&&(n=l&-l,r=t&-t,n>=r||n===32&&(r&4194048)!==0)?t:l}function Vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nx(){var e=hn;return hn<<=1,!(hn&4194048)&&(hn=256),e}function Cx(){var e=bn;return bn<<=1,!(bn&62914560)&&(bn=4194304),e}function vo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ph(e,t,r,s,l,n){var i=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var o=e.entanglements,d=e.expirationTimes,c=e.hiddenUpdates;for(r=i&~r;0<r;){var u=31-ut(r),m=1<<u;o[u]=0,d[u]=-1;var x=c[u];if(x!==null)for(c[u]=null,u=0;u<x.length;u++){var b=x[u];b!==null&&(b.lane&=-536870913)}r&=~m}s!==0&&Sx(e,s,0),n!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=n&~(i&~t))}function Sx(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-ut(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|r&4194090}function Dx(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-ut(r),l=1<<s;l&t|e[s]&t&&(e[s]|=t),r&=~l}}function Cc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sc(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Tx(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Yg(e.type))}function Yh(e,t){var r=J.p;try{return J.p=e,t()}finally{J.p=r}}var ar=Math.random().toString(36).slice(2),Ve="__reactFiber$"+ar,et="__reactProps$"+ar,Ds="__reactContainer$"+ar,yd="__reactEvents$"+ar,Xh="__reactListeners$"+ar,Kh="__reactHandles$"+ar,Uu="__reactResources$"+ar,Gl="__reactMarker$"+ar;function Dc(e){delete e[Ve],delete e[et],delete e[yd],delete e[Xh],delete e[Kh]}function Xr(e){var t=e[Ve];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ds]||r[Ve]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Y0(e);e!==null;){if(r=e[Ve])return r;e=Y0(e)}return t}e=r,r=e.parentNode}return null}function Ts(e){if(e=e[Ve]||e[Ds]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(M(33))}function ss(e){var t=e[Uu];return t||(t=e[Uu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[Gl]=!0}var Rx=new Set,Mx={};function jr(e,t){ps(e,t),ps(e+"Capture",t)}function ps(e,t){for(Mx[e]=t,e=0;e<t.length;e++)Rx.add(t[e])}var Qh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qu={},Fu={};function Zh(e){return vd.call(Fu,e)?!0:vd.call(qu,e)?!1:Qh.test(e)?Fu[e]=!0:(qu[e]=!0,!1)}function _n(e,t,r){if(Zh(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function vn(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function na(e,t,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+s)}}var yo,Vu;function Fr(e){if(yo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);yo=t&&t[1]||"",Vu=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yo+e+Vu}var ko=!1;function wo(e,t){if(!e||ko)return"";ko=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(b){var x=b}Reflect.construct(e,[],m)}else{try{m.call()}catch(b){x=b}e.call(m.prototype)}}else{try{throw Error()}catch(b){x=b}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(b){if(b&&x&&typeof b.stack=="string")return[b.stack,x.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=s.DetermineComponentFrameRoot(),i=n[0],o=n[1];if(i&&o){var d=i.split(`
`),c=o.split(`
`);for(l=s=0;s<d.length&&!d[s].includes("DetermineComponentFrameRoot");)s++;for(;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;if(s===d.length||l===c.length)for(s=d.length-1,l=c.length-1;1<=s&&0<=l&&d[s]!==c[l];)l--;for(;1<=s&&0<=l;s--,l--)if(d[s]!==c[l]){if(s!==1||l!==1)do if(s--,l--,0>l||d[s]!==c[l]){var u=`
`+d[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{ko=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Fr(r):""}function Wh(e){switch(e.tag){case 26:case 27:case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 15:return wo(e.type,!1);case 11:return wo(e.type.render,!1);case 1:return wo(e.type,!0);case 31:return Fr("Activity");default:return""}}function Iu(e){try{var t="";do t+=Wh(e),e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ex(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jh(e){var t=Ex(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,n=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){s=""+i,n.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=Jh(e))}function zx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=Ex(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var eb=/[\n"\\]/g;function Nt(e){return e.replace(eb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kd(e,t,r,s,l,n,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kt(t)):e.value!==""+kt(t)&&(e.value=""+kt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?wd(e,i,kt(t)):r!=null?wd(e,i,kt(r)):s!=null&&e.removeAttribute("value"),l==null&&n!=null&&(e.defaultChecked=!!n),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+kt(o):e.removeAttribute("name")}function Ax(e,t,r,s,l,n,i,o){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||t!=null))return;r=r!=null?""+kt(r):"",t=t!=null?""+kt(t):r,o||t===e.value||(e.value=t),e.defaultValue=t}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=o?e.checked:!!s,e.defaultChecked=!!s,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i)}function wd(e,t,r){t==="number"&&ni(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ls(e,t,r,s){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&s&&(e[r].defaultSelected=!0)}else{for(r=""+kt(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Lx(e,t,r){if(t!=null&&(t=""+kt(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+kt(r):""}function Ox(e,t,r,s){if(t==null){if(s!=null){if(r!=null)throw Error(M(92));if(tl(s)){if(1<s.length)throw Error(M(93));s=s[0]}r=s}r==null&&(r=""),t=r}r=kt(t),e.defaultValue=r,s=e.textContent,s===r&&s!==""&&s!==null&&(e.value=s)}function gs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var tb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gu(e,t,r){var s=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,r):typeof r!="number"||r===0||tb.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function Bx(e,t,r){if(t!=null&&typeof t!="object")throw Error(M(62));if(e=e.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var l in t)s=t[l],t.hasOwnProperty(l)&&r[l]!==s&&Gu(e,l,s)}else for(var n in t)t.hasOwnProperty(n)&&Gu(e,n,t[n])}function Tc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ab=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(e){return rb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var jd=null;function Rc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kr=null,ns=null;function Pu(e){var t=Ts(e);if(t&&(e=t.stateNode)){var r=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(kd(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var l=s[et]||null;if(!l)throw Error(M(90));kd(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<r.length;t++)s=r[t],s.form===e.form&&zx(s)}break e;case"textarea":Lx(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&ls(e,!!r.multiple,t,!1)}}}var jo=!1;function Hx(e,t,r){if(jo)return e(t,r);jo=!0;try{var s=e(t);return s}finally{if(jo=!1,(Kr!==null||ns!==null)&&(eo(),Kr&&(t=Kr,e=ns,ns=Kr=null,Pu(t),e)))for(t=0;t<e.length;t++)Pu(e[t])}}function jl(e,t){var r=e.stateNode;if(r===null)return null;var s=r[et]||null;if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(M(231,t,typeof r));return r}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nd=!1;if(va)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Nd=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Nd=!1}var Fa=null,Mc=null,qn=null;function $x(){if(qn)return qn;var e,t=Mc,r=t.length,s,l="value"in Fa?Fa.value:Fa.textContent,n=l.length;for(e=0;e<r&&t[e]===l[e];e++);var i=r-e;for(s=1;s<=i&&t[r-s]===l[n-s];s++);return qn=l.slice(e,1<s?1-s:void 0)}function Fn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yn(){return!0}function Yu(){return!1}function tt(e){function t(r,s,l,n,i){this._reactName=r,this._targetInst=l,this.type=s,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(n):n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?yn:Yu,this.isPropagationStopped=Yu,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=tt(Nr),Pl=ue({},Nr,{view:0,detail:0}),sb=tt(Pl),No,Co,Gs,Pi=ue({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(No=e.screenX-Gs.screenX,Co=e.screenY-Gs.screenY):Co=No=0,Gs=e),No)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),Xu=tt(Pi),lb=ue({},Pi,{dataTransfer:0}),nb=tt(lb),ib=ue({},Pl,{relatedTarget:0}),So=tt(ib),ob=ue({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),db=tt(ob),cb=ue({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ub=tt(cb),mb=ue({},Nr,{data:0}),Ku=tt(mb),xb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gb[e])?!!t[e]:!1}function Ec(){return fb}var hb=ue({},Pl,{key:function(e){if(e.key){var t=xb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bb=tt(hb),vb=ue({},Pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qu=tt(vb),yb=ue({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),kb=tt(yb),wb=ue({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jb=tt(wb),Nb=ue({},Pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cb=tt(Nb),Sb=ue({},Nr,{newState:0,oldState:0}),Db=tt(Sb),Tb=[9,13,27,32],zc=va&&"CompositionEvent"in window,ll=null;va&&"documentMode"in document&&(ll=document.documentMode);var Rb=va&&"TextEvent"in window&&!ll,_x=va&&(!zc||ll&&8<ll&&11>=ll),Zu=String.fromCharCode(32),Wu=!1;function Ux(e,t){switch(e){case"keyup":return Tb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function Mb(e,t){switch(e){case"compositionend":return qx(t);case"keypress":return t.which!==32?null:(Wu=!0,Zu);case"textInput":return e=t.data,e===Zu&&Wu?null:e;default:return null}}function Eb(e,t){if(Qr)return e==="compositionend"||!zc&&Ux(e,t)?(e=$x(),qn=Mc=Fa=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _x&&t.locale!=="ko"?null:t.data;default:return null}}var zb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zb[e.type]:t==="textarea"}function Fx(e,t,r,s){Kr?ns?ns.push(s):ns=[s]:Kr=s,t=Ni(t,"onChange"),0<t.length&&(r=new Gi("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var nl=null,Nl=null;function Ab(e){Lg(e,0)}function Yi(e){var t=al(e);if(zx(t))return e}function e0(e,t){if(e==="change")return t}var Vx=!1;if(va){var Do;if(va){var To="oninput"in document;if(!To){var t0=document.createElement("div");t0.setAttribute("oninput","return;"),To=typeof t0.oninput=="function"}Do=To}else Do=!1;Vx=Do&&(!document.documentMode||9<document.documentMode)}function a0(){nl&&(nl.detachEvent("onpropertychange",Ix),Nl=nl=null)}function Ix(e){if(e.propertyName==="value"&&Yi(Nl)){var t=[];Fx(t,Nl,e,Rc(e)),Hx(Ab,t)}}function Lb(e,t,r){e==="focusin"?(a0(),nl=t,Nl=r,nl.attachEvent("onpropertychange",Ix)):e==="focusout"&&a0()}function Ob(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Nl)}function Bb(e,t){if(e==="click")return Yi(t)}function Hb(e,t){if(e==="input"||e==="change")return Yi(t)}function $b(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:$b;function Cl(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var l=r[s];if(!vd.call(t,l)||!pt(e[l],t[l]))return!1}return!0}function r0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function s0(e,t){var r=r0(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=r0(r)}}function Gx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Px(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ni(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ni(e.document)}return t}function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _b=va&&"documentMode"in document&&11>=document.documentMode,Zr=null,Cd=null,il=null,Sd=!1;function l0(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Sd||Zr==null||Zr!==ni(s)||(s=Zr,"selectionStart"in s&&Ac(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),il&&Cl(il,s)||(il=s,s=Ni(Cd,"onSelect"),0<s.length&&(t=new Gi("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Zr)))}function lr(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Wr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},Ro={},Yx={};va&&(Yx=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Cr(e){if(Ro[e])return Ro[e];if(!Wr[e])return e;var t=Wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Yx)return Ro[e]=t[r];return e}var Xx=Cr("animationend"),Kx=Cr("animationiteration"),Qx=Cr("animationstart"),Ub=Cr("transitionrun"),qb=Cr("transitionstart"),Fb=Cr("transitioncancel"),Zx=Cr("transitionend"),Wx=new Map,Dd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dd.push("scrollEnd");function $t(e,t){Wx.set(e,t),jr(t,[e])}var n0=new WeakMap;function Ct(e,t){if(typeof e=="object"&&e!==null){var r=n0.get(e);return r!==void 0?r:(t={value:e,source:t,stack:Iu(t)},n0.set(e,t),t)}return{value:e,source:t,stack:Iu(t)}}var vt=[],Jr=0,Lc=0;function Xi(){for(var e=Jr,t=Lc=Jr=0;t<e;){var r=vt[t];vt[t++]=null;var s=vt[t];vt[t++]=null;var l=vt[t];vt[t++]=null;var n=vt[t];if(vt[t++]=null,s!==null&&l!==null){var i=s.pending;i===null?l.next=l:(l.next=i.next,i.next=l),s.pending=l}n!==0&&Jx(r,l,n)}}function Ki(e,t,r,s){vt[Jr++]=e,vt[Jr++]=t,vt[Jr++]=r,vt[Jr++]=s,Lc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Oc(e,t,r,s){return Ki(e,t,r,s),ii(e)}function Rs(e,t){return Ki(e,null,null,t),ii(e)}function Jx(e,t,r){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r);for(var l=!1,n=e.return;n!==null;)n.childLanes|=r,s=n.alternate,s!==null&&(s.childLanes|=r),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(l=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,l&&t!==null&&(l=31-ut(r),e=n.hiddenUpdates,s=e[l],s===null?e[l]=[t]:s.push(t),t.lane=r|536870912),n):null}function ii(e){if(50<hl)throw hl=0,Xd=null,Error(M(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var es={};function Vb(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,r,s){return new Vb(e,t,r,s)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,t){var r=e.alternate;return r===null?(r=dt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function ep(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vn(e,t,r,s,l,n){var i=0;if(s=e,typeof e=="function")Bc(e)&&(i=1);else if(typeof e=="string")i=Gv(e,r,Pt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case gd:return e=dt(31,r,t,l),e.elementType=gd,e.lanes=n,e;case Pr:return xr(r.children,l,n,t);case vx:i=8,l|=24;break;case md:return e=dt(12,r,t,l|2),e.elementType=md,e.lanes=n,e;case xd:return e=dt(13,r,t,l),e.elementType=xd,e.lanes=n,e;case pd:return e=dt(19,r,t,l),e.elementType=pd,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ah:case ca:i=10;break e;case yx:i=9;break e;case wc:i=11;break e;case jc:i=14;break e;case La:i=16,s=null;break e}i=29,r=Error(M(130,e===null?"null":typeof e,"")),s=null}return t=dt(i,r,t,l),t.elementType=e,t.type=s,t.lanes=n,t}function xr(e,t,r,s){return e=dt(7,e,s,t),e.lanes=r,e}function Mo(e,t,r){return e=dt(6,e,null,t),e.lanes=r,e}function Eo(e,t,r){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ts=[],as=0,oi=null,di=0,wt=[],jt=0,pr=null,ua=1,ma="";function dr(e,t){ts[as++]=di,ts[as++]=oi,oi=e,di=t}function tp(e,t,r){wt[jt++]=ua,wt[jt++]=ma,wt[jt++]=pr,pr=e;var s=ua;e=ma;var l=32-ut(s)-1;s&=~(1<<l),r+=1;var n=32-ut(t)+l;if(30<n){var i=l-l%5;n=(s&(1<<i)-1).toString(32),s>>=i,l-=i,ua=1<<32-ut(t)+l|r<<l|s,ma=n+e}else ua=1<<n|r<<l|s,ma=e}function Hc(e){e.return!==null&&(dr(e,1),tp(e,1,0))}function $c(e){for(;e===oi;)oi=ts[--as],ts[as]=null,di=ts[--as],ts[as]=null;for(;e===pr;)pr=wt[--jt],wt[jt]=null,ma=wt[--jt],wt[jt]=null,ua=wt[--jt],wt[jt]=null}var Pe=null,ye=null,W=!1,gr=null,It=!1,Td=Error(M(519));function vr(e){var t=Error(M(418,""));throw Sl(Ct(t,e)),Td}function i0(e){var t=e.stateNode,r=e.type,s=e.memoizedProps;switch(t[Ve]=e,t[et]=s,r){case"dialog":I("cancel",t),I("close",t);break;case"iframe":case"object":case"embed":I("load",t);break;case"video":case"audio":for(r=0;r<Rl.length;r++)I(Rl[r],t);break;case"source":I("error",t);break;case"img":case"image":case"link":I("error",t),I("load",t);break;case"details":I("toggle",t);break;case"input":I("invalid",t),Ax(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),li(t);break;case"select":I("invalid",t);break;case"textarea":I("invalid",t),Ox(t,s.value,s.defaultValue,s.children),li(t)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||s.suppressHydrationWarning===!0||Bg(t.textContent,r)?(s.popover!=null&&(I("beforetoggle",t),I("toggle",t)),s.onScroll!=null&&I("scroll",t),s.onScrollEnd!=null&&I("scrollend",t),s.onClick!=null&&(t.onclick=ro),t=!0):t=!1,t||vr(e)}function o0(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 13:It=!1;return;case 27:case 3:It=!0;return;default:Pe=Pe.return}}function Ps(e){if(e!==Pe)return!1;if(!W)return o0(e),W=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||ec(e.type,e.memoizedProps)),r=!r),r&&ye&&vr(e),o0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(t===0){ye=Lt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++;e=e.nextSibling}ye=null}}else t===27?(t=ye,rr(e.type)?(e=rc,rc=null,ye=e):ye=t):ye=Pe?Lt(e.stateNode.nextSibling):null;return!0}function Yl(){ye=Pe=null,W=!1}function d0(){var e=gr;return e!==null&&(Je===null?Je=e:Je.push.apply(Je,e),gr=null),e}function Sl(e){gr===null?gr=[e]:gr.push(e)}var Rd=Qt(null),Sr=null,xa=null;function Ha(e,t,r){pe(Rd,t._currentValue),t._currentValue=r}function ha(e){e._currentValue=Rd.current,Be(Rd)}function Md(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Ed(e,t,r,s){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var n=l.dependencies;if(n!==null){var i=l.child;n=n.firstContext;e:for(;n!==null;){var o=n;n=l;for(var d=0;d<t.length;d++)if(o.context===t[d]){n.lanes|=r,o=n.alternate,o!==null&&(o.lanes|=r),Md(n.return,r,e),s||(i=null);break e}n=o.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error(M(341));i.lanes|=r,n=i.alternate,n!==null&&(n.lanes|=r),Md(i,r,e),i=null}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===e){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function Xl(e,t,r,s){e=null;for(var l=t,n=!1;l!==null;){if(!n){if(l.flags&524288)n=!0;else if(l.flags&262144)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error(M(387));if(i=i.memoizedProps,i!==null){var o=l.type;pt(l.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(l===ti.current){if(i=l.alternate,i===null)throw Error(M(387));i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(zl):e=[zl])}l=l.return}e!==null&&Ed(t,e,r,s),t.flags|=262144}function ci(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yr(e){Sr=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return ap(Sr,e)}function kn(e,t){return Sr===null&&yr(e),ap(e,t)}function ap(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},xa===null){if(e===null)throw Error(M(308));xa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xa=xa.next=t;return r}var Ib=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},Gb=Me.unstable_scheduleCallback,Pb=Me.unstable_NormalPriority,De={$$typeof:ca,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _c(){return{controller:new Ib,data:new Map,refCount:0}}function Kl(e){e.refCount--,e.refCount===0&&Gb(Pb,function(){e.controller.abort()})}var ol=null,zd=0,fs=0,is=null;function Yb(e,t){if(ol===null){var r=ol=[];zd=0,fs=ou(),is={status:"pending",value:void 0,then:function(s){r.push(s)}}}return zd++,t.then(c0,c0),t}function c0(){if(--zd===0&&ol!==null){is!==null&&(is.status="fulfilled");var e=ol;ol=null,fs=0,is=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xb(e,t){var r=[],s={status:"pending",value:null,reason:null,then:function(l){r.push(l)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var l=0;l<r.length;l++)(0,r[l])(t)},function(l){for(s.status="rejected",s.reason=l,l=0;l<r.length;l++)(0,r[l])(void 0)}),s}var u0=q.S;q.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Yb(e,t),u0!==null&&u0(e,t)};var fr=Qt(null);function Uc(){var e=fr.current;return e!==null?e:ne.pooledCache}function In(e,t){t===null?pe(fr,fr.current):pe(fr,t.pool)}function rp(){var e=Uc();return e===null?null:{parent:De._currentValue,pool:e}}var Ql=Error(M(460)),sp=Error(M(474)),Qi=Error(M(542)),Ad={then:function(){}};function m0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wn(){}function lp(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(wn,wn),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,p0(e),e;default:if(typeof t.status=="string")t.then(wn,wn);else{if(e=ne,e!==null&&100<e.shellSuspendCounter)throw Error(M(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=s}},function(s){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,p0(e),e}throw dl=t,Ql}}var dl=null;function x0(){if(dl===null)throw Error(M(459));var e=dl;return dl=null,e}function p0(e){if(e===Ql||e===Qi)throw Error(M(483))}var Oa=!1;function qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ld(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,te&2){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,t=ii(e),Jx(e,null,r),t}return Ki(e,s,t,r),ii(e)}function cl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Dx(e,r)}}function zo(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var l=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var i={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?l=n=i:n=n.next=i,r=r.next}while(r!==null);n===null?l=n=t:n=n.next=t}else l=n=t;r={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:n,shared:s.shared,callbacks:s.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var Od=!1;function ul(){if(Od){var e=is;if(e!==null)throw e}}function ml(e,t,r,s){Od=!1;var l=e.updateQueue;Oa=!1;var n=l.firstBaseUpdate,i=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var d=o,c=d.next;d.next=null,i===null?n=c:i.next=c,i=d;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==i&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=d))}if(n!==null){var m=l.baseState;i=0,u=c=d=null,o=n;do{var x=o.lane&-536870913,b=x!==o.lane;if(b?(Y&x)===x:(s&x)===x){x!==0&&x===fs&&(Od=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var j=e,k=o;x=t;var y=r;switch(k.tag){case 1:if(j=k.payload,typeof j=="function"){m=j.call(y,m,x);break e}m=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=k.payload,x=typeof j=="function"?j.call(y,m,x):j,x==null)break e;m=ue({},m,x);break e;case 2:Oa=!0}}x=o.callback,x!==null&&(e.flags|=64,b&&(e.flags|=8192),b=l.callbacks,b===null?l.callbacks=[x]:b.push(x))}else b={lane:x,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=b,d=m):u=u.next=b,i|=x;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;b=o,o=b.next,b.next=null,l.lastBaseUpdate=b,l.shared.pending=null}}while(1);u===null&&(d=m),l.baseState=d,l.firstBaseUpdate=c,l.lastBaseUpdate=u,n===null&&(l.shared.lanes=0),tr|=i,e.lanes=i,e.memoizedState=m}}function np(e,t){if(typeof e!="function")throw Error(M(191,e));e.call(t)}function ip(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)np(r[e],t)}var hs=Qt(null),ui=Qt(0);function g0(e,t){e=wa,pe(ui,e),pe(hs,t),wa=e|t.baseLanes}function Bd(){pe(ui,wa),pe(hs,hs.current)}function Fc(){wa=ui.current,Be(hs),Be(ui)}var Ja=0,V=null,re=null,Ce=null,mi=!1,os=!1,kr=!1,xi=0,Dl=0,ds=null,Kb=0;function we(){throw Error(M(321))}function Vc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!pt(e[r],t[r]))return!1;return!0}function Ic(e,t,r,s,l,n){return Ja=n,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?$p:_p,kr=!1,n=r(s,l),kr=!1,os&&(n=dp(t,r,s,l)),op(e),n}function op(e){q.H=pi;var t=re!==null&&re.next!==null;if(Ja=0,Ce=re=V=null,mi=!1,Dl=0,ds=null,t)throw Error(M(300));e===null||Oe||(e=e.dependencies,e!==null&&ci(e)&&(Oe=!0))}function dp(e,t,r,s){V=e;var l=0;do{if(os&&(ds=null),Dl=0,os=!1,25<=l)throw Error(M(301));if(l+=1,Ce=re=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}q.H=av,n=t(r,s)}while(os);return n}function Qb(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?Zl(t):t,e=e.useState()[0],(re!==null?re.memoizedState:null)!==e&&(V.flags|=1024),t}function Gc(){var e=xi!==0;return xi=0,e}function Pc(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Yc(e){if(mi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mi=!1}Ja=0,Ce=re=V=null,os=!1,Dl=xi=0,ds=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?V.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function Se(){if(re===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=Ce===null?V.memoizedState:Ce.next;if(t!==null)Ce=t,re=e;else{if(e===null)throw V.alternate===null?Error(M(467)):Error(M(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},Ce===null?V.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zl(e){var t=Dl;return Dl+=1,ds===null&&(ds=[]),e=lp(ds,e,t),t=V,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?$p:_p),e}function Zi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zl(e);if(e.$$typeof===ca)return Ie(e)}throw Error(M(438,String(e)))}function Kc(e){var t=null,r=V.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var s=V.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=Xc(),V.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),s=0;s<e;s++)r[s]=Lh;return t.index++,r}function ya(e,t){return typeof t=="function"?t(e):t}function Gn(e){var t=Se();return Qc(t,re,e)}function Qc(e,t,r){var s=e.queue;if(s===null)throw Error(M(311));s.lastRenderedReducer=r;var l=e.baseQueue,n=s.pending;if(n!==null){if(l!==null){var i=l.next;l.next=n.next,n.next=i}t.baseQueue=l=n,s.pending=null}if(n=e.baseState,l===null)e.memoizedState=n;else{t=l.next;var o=i=null,d=null,c=t,u=!1;do{var m=c.lane&-536870913;if(m!==c.lane?(Y&m)===m:(Ja&m)===m){var x=c.revertLane;if(x===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),m===fs&&(u=!0);else if((Ja&x)===x){c=c.next,x===fs&&(u=!0);continue}else m={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},d===null?(o=d=m,i=n):d=d.next=m,V.lanes|=x,tr|=x;m=c.action,kr&&r(n,m),n=c.hasEagerState?c.eagerState:r(n,m)}else x={lane:m,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},d===null?(o=d=x,i=n):d=d.next=x,V.lanes|=m,tr|=m;c=c.next}while(c!==null&&c!==t);if(d===null?i=n:d.next=o,!pt(n,e.memoizedState)&&(Oe=!0,u&&(r=is,r!==null)))throw r;e.memoizedState=n,e.baseState=i,e.baseQueue=d,s.lastRenderedState=n}return l===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Ao(e){var t=Se(),r=t.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=e;var s=r.dispatch,l=r.pending,n=t.memoizedState;if(l!==null){r.pending=null;var i=l=l.next;do n=e(n,i.action),i=i.next;while(i!==l);pt(n,t.memoizedState)||(Oe=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),r.lastRenderedState=n}return[n,s]}function cp(e,t,r){var s=V,l=Se(),n=W;if(n){if(r===void 0)throw Error(M(407));r=r()}else r=t();var i=!pt((re||l).memoizedState,r);i&&(l.memoizedState=r,Oe=!0),l=l.queue;var o=xp.bind(null,s,l,e);if(Wl(2048,8,o,[e]),l.getSnapshot!==t||i||Ce!==null&&Ce.memoizedState.tag&1){if(s.flags|=2048,bs(9,Wi(),mp.bind(null,s,l,r,t),null),ne===null)throw Error(M(349));n||Ja&124||up(s,t,r)}return r}function up(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=V.updateQueue,t===null?(t=Xc(),V.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function mp(e,t,r,s){t.value=r,t.getSnapshot=s,pp(t)&&gp(e)}function xp(e,t,r){return r(function(){pp(t)&&gp(e)})}function pp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!pt(e,r)}catch{return!0}}function gp(e){var t=Rs(e,2);t!==null&&xt(t,e,2)}function Hd(e){var t=Ze();if(typeof e=="function"){var r=e;if(e=r(),kr){qa(!0);try{r()}finally{qa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},t}function fp(e,t,r,s){return e.baseState=r,Qc(e,re,typeof s=="function"?s:ya)}function Zb(e,t,r,s,l){if(Ji(e))throw Error(M(485));if(e=t.action,e!==null){var n={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};q.T!==null?r(!0):n.isTransition=!1,s(n),r=t.pending,r===null?(n.next=t.pending=n,hp(t,n)):(n.next=r.next,t.pending=r.next=n)}}function hp(e,t){var r=t.action,s=t.payload,l=e.state;if(t.isTransition){var n=q.T,i={};q.T=i;try{var o=r(l,s),d=q.S;d!==null&&d(i,o),f0(e,t,o)}catch(c){$d(e,t,c)}finally{q.T=n}}else try{n=r(l,s),f0(e,t,n)}catch(c){$d(e,t,c)}}function f0(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){h0(e,t,s)},function(s){return $d(e,t,s)}):h0(e,t,r)}function h0(e,t,r){t.status="fulfilled",t.value=r,bp(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,hp(e,r)))}function $d(e,t,r){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=r,bp(t),t=t.next;while(t!==s)}e.action=null}function bp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vp(e,t){return t}function b0(e,t){if(W){var r=ne.formState;if(r!==null){e:{var s=V;if(W){if(ye){t:{for(var l=ye,n=It;l.nodeType!==8;){if(!n){l=null;break t}if(l=Lt(l.nextSibling),l===null){l=null;break t}}n=l.data,l=n==="F!"||n==="F"?l:null}if(l){ye=Lt(l.nextSibling),s=l.data==="F!";break e}}vr(s)}s=!1}s&&(t=r[0])}}return r=Ze(),r.memoizedState=r.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vp,lastRenderedState:t},r.queue=s,r=Op.bind(null,V,s),s.dispatch=r,s=Hd(!1),n=eu.bind(null,V,!1,s.queue),s=Ze(),l={state:t,dispatch:null,action:e,pending:null},s.queue=l,r=Zb.bind(null,V,l,n,r),l.dispatch=r,s.memoizedState=e,[t,r,!1]}function v0(e){var t=Se();return yp(t,re,e)}function yp(e,t,r){if(t=Qc(e,t,vp)[0],e=Gn(ya)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Zl(t)}catch(i){throw i===Ql?Qi:i}else s=t;t=Se();var l=t.queue,n=l.dispatch;return r!==t.memoizedState&&(V.flags|=2048,bs(9,Wi(),Wb.bind(null,l,r),null)),[s,n,e]}function Wb(e,t){e.action=t}function y0(e){var t=Se(),r=re;if(r!==null)return yp(t,r,e);Se(),t=t.memoizedState,r=Se();var s=r.queue.dispatch;return r.memoizedState=e,[t,s,!1]}function bs(e,t,r,s){return e={tag:e,create:r,deps:s,inst:t,next:null},t=V.updateQueue,t===null&&(t=Xc(),V.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e),e}function Wi(){return{destroy:void 0,resource:void 0}}function kp(){return Se().memoizedState}function Pn(e,t,r,s){var l=Ze();s=s===void 0?null:s,V.flags|=e,l.memoizedState=bs(1|t,Wi(),r,s)}function Wl(e,t,r,s){var l=Se();s=s===void 0?null:s;var n=l.memoizedState.inst;re!==null&&s!==null&&Vc(s,re.memoizedState.deps)?l.memoizedState=bs(t,n,r,s):(V.flags|=e,l.memoizedState=bs(1|t,n,r,s))}function k0(e,t){Pn(8390656,8,e,t)}function wp(e,t){Wl(2048,8,e,t)}function jp(e,t){return Wl(4,2,e,t)}function Np(e,t){return Wl(4,4,e,t)}function Cp(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sp(e,t,r){r=r!=null?r.concat([e]):null,Wl(4,4,Cp.bind(null,t,e),r)}function Zc(){}function Dp(e,t){var r=Se();t=t===void 0?null:t;var s=r.memoizedState;return t!==null&&Vc(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Tp(e,t){var r=Se();t=t===void 0?null:t;var s=r.memoizedState;if(t!==null&&Vc(t,s[1]))return s[0];if(s=e(),kr){qa(!0);try{e()}finally{qa(!1)}}return r.memoizedState=[s,t],s}function Wc(e,t,r){return r===void 0||Ja&1073741824?e.memoizedState=t:(e.memoizedState=r,e=bg(),V.lanes|=e,tr|=e,r)}function Rp(e,t,r,s){return pt(r,t)?r:hs.current!==null?(e=Wc(e,r,s),pt(e,t)||(Oe=!0),e):Ja&42?(e=bg(),V.lanes|=e,tr|=e,t):(Oe=!0,e.memoizedState=r)}function Mp(e,t,r,s,l){var n=J.p;J.p=n!==0&&8>n?n:8;var i=q.T,o={};q.T=o,eu(e,!1,t,r);try{var d=l(),c=q.S;if(c!==null&&c(o,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=Xb(d,s);xl(e,t,u,mt(e))}else xl(e,t,s,mt(e))}catch(m){xl(e,t,{then:function(){},status:"rejected",reason:m},mt())}finally{J.p=n,q.T=i}}function Jb(){}function _d(e,t,r,s){if(e.tag!==5)throw Error(M(476));var l=Ep(e).queue;Mp(e,l,t,mr,r===null?Jb:function(){return zp(e),r(s)})}function Ep(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:mr,baseState:mr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:mr},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function zp(e){var t=Ep(e).next.queue;xl(e,t,{},mt())}function Jc(){return Ie(zl)}function Ap(){return Se().memoizedState}function Lp(){return Se().memoizedState}function ev(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=mt();e=Pa(r);var s=Ya(t,e,r);s!==null&&(xt(s,t,r),cl(s,t,r)),t={cache:_c()},e.payload=t;return}t=t.return}}function tv(e,t,r){var s=mt();r={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Ji(e)?Bp(t,r):(r=Oc(e,t,r,s),r!==null&&(xt(r,e,s),Hp(r,t,s)))}function Op(e,t,r){var s=mt();xl(e,t,r,s)}function xl(e,t,r,s){var l={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ji(e))Bp(t,l);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var i=t.lastRenderedState,o=n(i,r);if(l.hasEagerState=!0,l.eagerState=o,pt(o,i))return Ki(e,t,l,0),ne===null&&Xi(),!1}catch{}finally{}if(r=Oc(e,t,l,s),r!==null)return xt(r,e,s),Hp(r,t,s),!0}return!1}function eu(e,t,r,s){if(s={lane:2,revertLane:ou(),action:s,hasEagerState:!1,eagerState:null,next:null},Ji(e)){if(t)throw Error(M(479))}else t=Oc(e,r,s,2),t!==null&&xt(t,e,2)}function Ji(e){var t=e.alternate;return e===V||t!==null&&t===V}function Bp(e,t){os=mi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Hp(e,t,r){if(r&4194048){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,Dx(e,r)}}var pi={readContext:Ie,use:Zi,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we},$p={readContext:Ie,use:Zi,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:k0,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,Pn(4194308,4,Cp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Pn(4194308,4,e,t)},useInsertionEffect:function(e,t){Pn(4,2,e,t)},useMemo:function(e,t){var r=Ze();t=t===void 0?null:t;var s=e();if(kr){qa(!0);try{e()}finally{qa(!1)}}return r.memoizedState=[s,t],s},useReducer:function(e,t,r){var s=Ze();if(r!==void 0){var l=r(t);if(kr){qa(!0);try{r(t)}finally{qa(!1)}}}else l=t;return s.memoizedState=s.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},s.queue=e,e=e.dispatch=tv.bind(null,V,e),[s.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:function(e){e=Hd(e);var t=e.queue,r=Op.bind(null,V,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Zc,useDeferredValue:function(e,t){var r=Ze();return Wc(r,e,t)},useTransition:function(){var e=Hd(!1);return e=Mp.bind(null,V,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var s=V,l=Ze();if(W){if(r===void 0)throw Error(M(407));r=r()}else{if(r=t(),ne===null)throw Error(M(349));Y&124||up(s,t,r)}l.memoizedState=r;var n={value:r,getSnapshot:t};return l.queue=n,k0(xp.bind(null,s,n,e),[e]),s.flags|=2048,bs(9,Wi(),mp.bind(null,s,n,r,t),null),r},useId:function(){var e=Ze(),t=ne.identifierPrefix;if(W){var r=ma,s=ua;r=(s&~(1<<32-ut(s)-1)).toString(32)+r,t="«"+t+"R"+r,r=xi++,0<r&&(t+="H"+r.toString(32)),t+="»"}else r=Kb++,t="«"+t+"r"+r.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Jc,useFormState:b0,useActionState:b0,useOptimistic:function(e){var t=Ze();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=eu.bind(null,V,!0,r),r.dispatch=t,[e,t]},useMemoCache:Kc,useCacheRefresh:function(){return Ze().memoizedState=ev.bind(null,V)}},_p={readContext:Ie,use:Zi,useCallback:Dp,useContext:Ie,useEffect:wp,useImperativeHandle:Sp,useInsertionEffect:jp,useLayoutEffect:Np,useMemo:Tp,useReducer:Gn,useRef:kp,useState:function(){return Gn(ya)},useDebugValue:Zc,useDeferredValue:function(e,t){var r=Se();return Rp(r,re.memoizedState,e,t)},useTransition:function(){var e=Gn(ya)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:Zl(e),t]},useSyncExternalStore:cp,useId:Ap,useHostTransitionStatus:Jc,useFormState:v0,useActionState:v0,useOptimistic:function(e,t){var r=Se();return fp(r,re,e,t)},useMemoCache:Kc,useCacheRefresh:Lp},av={readContext:Ie,use:Zi,useCallback:Dp,useContext:Ie,useEffect:wp,useImperativeHandle:Sp,useInsertionEffect:jp,useLayoutEffect:Np,useMemo:Tp,useReducer:Ao,useRef:kp,useState:function(){return Ao(ya)},useDebugValue:Zc,useDeferredValue:function(e,t){var r=Se();return re===null?Wc(r,e,t):Rp(r,re.memoizedState,e,t)},useTransition:function(){var e=Ao(ya)[0],t=Se().memoizedState;return[typeof e=="boolean"?e:Zl(e),t]},useSyncExternalStore:cp,useId:Ap,useHostTransitionStatus:Jc,useFormState:y0,useActionState:y0,useOptimistic:function(e,t){var r=Se();return re!==null?fp(r,re,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Kc,useCacheRefresh:Lp},cs=null,Tl=0;function jn(e){var t=Tl;return Tl+=1,cs===null&&(cs=[]),lp(cs,e,t)}function Ys(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nn(e,t){throw t.$$typeof===zh?Error(M(525)):(e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function w0(e){var t=e._init;return t(e._payload)}function Up(e){function t(g,h){if(e){var f=g.deletions;f===null?(g.deletions=[h],g.flags|=16):f.push(h)}}function r(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function s(g){for(var h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function l(g,h){return g=fa(g,h),g.index=0,g.sibling=null,g}function n(g,h,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<h?(g.flags|=67108866,h):f):(g.flags|=67108866,h)):(g.flags|=1048576,h)}function i(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function o(g,h,f,v){return h===null||h.tag!==6?(h=Mo(f,g.mode,v),h.return=g,h):(h=l(h,f),h.return=g,h)}function d(g,h,f,v){var w=f.type;return w===Pr?u(g,h,f.props.children,v,f.key):h!==null&&(h.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===La&&w0(w)===h.type)?(h=l(h,f.props),Ys(h,f),h.return=g,h):(h=Vn(f.type,f.key,f.props,null,g.mode,v),Ys(h,f),h.return=g,h)}function c(g,h,f,v){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=Eo(f,g.mode,v),h.return=g,h):(h=l(h,f.children||[]),h.return=g,h)}function u(g,h,f,v,w){return h===null||h.tag!==7?(h=xr(f,g.mode,v,w),h.return=g,h):(h=l(h,f),h.return=g,h)}function m(g,h,f){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Mo(""+h,g.mode,f),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fn:return f=Vn(h.type,h.key,h.props,null,g.mode,f),Ys(f,h),f.return=g,f;case el:return h=Eo(h,g.mode,f),h.return=g,h;case La:var v=h._init;return h=v(h._payload),m(g,h,f)}if(tl(h)||Vs(h))return h=xr(h,g.mode,f,null),h.return=g,h;if(typeof h.then=="function")return m(g,jn(h),f);if(h.$$typeof===ca)return m(g,kn(g,h),f);Nn(g,h)}return null}function x(g,h,f,v){var w=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return w!==null?null:o(g,h,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fn:return f.key===w?d(g,h,f,v):null;case el:return f.key===w?c(g,h,f,v):null;case La:return w=f._init,f=w(f._payload),x(g,h,f,v)}if(tl(f)||Vs(f))return w!==null?null:u(g,h,f,v,null);if(typeof f.then=="function")return x(g,h,jn(f),v);if(f.$$typeof===ca)return x(g,h,kn(g,f),v);Nn(g,f)}return null}function b(g,h,f,v,w){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return g=g.get(f)||null,o(h,g,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fn:return g=g.get(v.key===null?f:v.key)||null,d(h,g,v,w);case el:return g=g.get(v.key===null?f:v.key)||null,c(h,g,v,w);case La:var D=v._init;return v=D(v._payload),b(g,h,f,v,w)}if(tl(v)||Vs(v))return g=g.get(f)||null,u(h,g,v,w,null);if(typeof v.then=="function")return b(g,h,f,jn(v),w);if(v.$$typeof===ca)return b(g,h,f,kn(h,v),w);Nn(h,v)}return null}function j(g,h,f,v){for(var w=null,D=null,N=h,C=h=0,S=null;N!==null&&C<f.length;C++){N.index>C?(S=N,N=null):S=N.sibling;var T=x(g,N,f[C],v);if(T===null){N===null&&(N=S);break}e&&N&&T.alternate===null&&t(g,N),h=n(T,h,C),D===null?w=T:D.sibling=T,D=T,N=S}if(C===f.length)return r(g,N),W&&dr(g,C),w;if(N===null){for(;C<f.length;C++)N=m(g,f[C],v),N!==null&&(h=n(N,h,C),D===null?w=N:D.sibling=N,D=N);return W&&dr(g,C),w}for(N=s(N);C<f.length;C++)S=b(N,g,C,f[C],v),S!==null&&(e&&S.alternate!==null&&N.delete(S.key===null?C:S.key),h=n(S,h,C),D===null?w=S:D.sibling=S,D=S);return e&&N.forEach(function(z){return t(g,z)}),W&&dr(g,C),w}function k(g,h,f,v){if(f==null)throw Error(M(151));for(var w=null,D=null,N=h,C=h=0,S=null,T=f.next();N!==null&&!T.done;C++,T=f.next()){N.index>C?(S=N,N=null):S=N.sibling;var z=x(g,N,T.value,v);if(z===null){N===null&&(N=S);break}e&&N&&z.alternate===null&&t(g,N),h=n(z,h,C),D===null?w=z:D.sibling=z,D=z,N=S}if(T.done)return r(g,N),W&&dr(g,C),w;if(N===null){for(;!T.done;C++,T=f.next())T=m(g,T.value,v),T!==null&&(h=n(T,h,C),D===null?w=T:D.sibling=T,D=T);return W&&dr(g,C),w}for(N=s(N);!T.done;C++,T=f.next())T=b(N,g,C,T.value,v),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?C:T.key),h=n(T,h,C),D===null?w=T:D.sibling=T,D=T);return e&&N.forEach(function(O){return t(g,O)}),W&&dr(g,C),w}function y(g,h,f,v){if(typeof f=="object"&&f!==null&&f.type===Pr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case fn:e:{for(var w=f.key;h!==null;){if(h.key===w){if(w=f.type,w===Pr){if(h.tag===7){r(g,h.sibling),v=l(h,f.props.children),v.return=g,g=v;break e}}else if(h.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===La&&w0(w)===h.type){r(g,h.sibling),v=l(h,f.props),Ys(v,f),v.return=g,g=v;break e}r(g,h);break}else t(g,h);h=h.sibling}f.type===Pr?(v=xr(f.props.children,g.mode,v,f.key),v.return=g,g=v):(v=Vn(f.type,f.key,f.props,null,g.mode,v),Ys(v,f),v.return=g,g=v)}return i(g);case el:e:{for(w=f.key;h!==null;){if(h.key===w)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){r(g,h.sibling),v=l(h,f.children||[]),v.return=g,g=v;break e}else{r(g,h);break}else t(g,h);h=h.sibling}v=Eo(f,g.mode,v),v.return=g,g=v}return i(g);case La:return w=f._init,f=w(f._payload),y(g,h,f,v)}if(tl(f))return j(g,h,f,v);if(Vs(f)){if(w=Vs(f),typeof w!="function")throw Error(M(150));return f=w.call(f),k(g,h,f,v)}if(typeof f.then=="function")return y(g,h,jn(f),v);if(f.$$typeof===ca)return y(g,h,kn(g,f),v);Nn(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,h!==null&&h.tag===6?(r(g,h.sibling),v=l(h,f),v.return=g,g=v):(r(g,h),v=Mo(f,g.mode,v),v.return=g,g=v),i(g)):r(g,h)}return function(g,h,f,v){try{Tl=0;var w=y(g,h,f,v);return cs=null,w}catch(N){if(N===Ql||N===Qi)throw N;var D=dt(29,N,null,g.mode);return D.lanes=v,D.return=g,D}finally{}}}var vs=Up(!0),qp=Up(!1),Dt=Qt(null),Xt=null;function $a(e){var t=e.alternate;pe(Re,Re.current&1),pe(Dt,e),Xt===null&&(t===null||hs.current!==null||t.memoizedState!==null)&&(Xt=e)}function Fp(e){if(e.tag===22){if(pe(Re,Re.current),pe(Dt,e),Xt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Xt=e)}}else _a()}function _a(){pe(Re,Re.current),pe(Dt,Dt.current)}function pa(e){Be(Dt),Xt===e&&(Xt=null),Be(Re)}var Re=Qt(0);function gi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||ac(r)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Lo(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:ue({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ud={enqueueSetState:function(e,t,r){e=e._reactInternals;var s=mt(),l=Pa(s);l.payload=t,r!=null&&(l.callback=r),t=Ya(e,l,s),t!==null&&(xt(t,e,s),cl(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=mt(),l=Pa(s);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Ya(e,l,s),t!==null&&(xt(t,e,s),cl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=mt(),s=Pa(r);s.tag=2,t!=null&&(s.callback=t),t=Ya(e,s,r),t!==null&&(xt(t,e,r),cl(t,e,r))}};function j0(e,t,r,s,l,n,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,n,i):t.prototype&&t.prototype.isPureReactComponent?!Cl(r,s)||!Cl(l,n):!0}function N0(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Ud.enqueueReplaceState(t,t.state,null)}function wr(e,t){var r=t;if("ref"in t){r={};for(var s in t)s!=="ref"&&(r[s]=t[s])}if(e=e.defaultProps){r===t&&(r=ue({},r));for(var l in e)r[l]===void 0&&(r[l]=e[l])}return r}var fi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vp(e){fi(e)}function Ip(e){console.error(e)}function Gp(e){fi(e)}function hi(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function C0(e,t,r){try{var s=e.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function qd(e,t,r){return r=Pa(r),r.tag=3,r.payload={element:null},r.callback=function(){hi(e,t)},r}function Pp(e){return e=Pa(e),e.tag=3,e}function Yp(e,t,r,s){var l=r.type.getDerivedStateFromError;if(typeof l=="function"){var n=s.value;e.payload=function(){return l(n)},e.callback=function(){C0(t,r,s)}}var i=r.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){C0(t,r,s),typeof l!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var o=s.stack;this.componentDidCatch(s.value,{componentStack:o!==null?o:""})})}function rv(e,t,r,s,l){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=r.alternate,t!==null&&Xl(t,r,l,!0),r=Dt.current,r!==null){switch(r.tag){case 13:return Xt===null?Kd():r.alternate===null&&ke===0&&(ke=3),r.flags&=-257,r.flags|=65536,r.lanes=l,s===Ad?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([s]):t.add(s),Go(e,s,l)),!1;case 22:return r.flags|=65536,s===Ad?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([s]):r.add(s)),Go(e,s,l)),!1}throw Error(M(435,r.tag))}return Go(e,s,l),Kd(),!1}if(W)return t=Dt.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=l,s!==Td&&(e=Error(M(422),{cause:s}),Sl(Ct(e,r)))):(s!==Td&&(t=Error(M(423),{cause:s}),Sl(Ct(t,r))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,s=Ct(s,r),l=qd(e.stateNode,s,l),zo(e,l),ke!==4&&(ke=2)),!1;var n=Error(M(520),{cause:s});if(n=Ct(n,r),fl===null?fl=[n]:fl.push(n),ke!==4&&(ke=2),t===null)return!0;s=Ct(s,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=l&-l,r.lanes|=e,e=qd(r.stateNode,s,e),zo(r,e),!1;case 1:if(t=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Xa===null||!Xa.has(n))))return r.flags|=65536,l&=-l,r.lanes|=l,l=Pp(l),Yp(l,e,r,s),zo(r,l),!1}r=r.return}while(r!==null);return!1}var Xp=Error(M(461)),Oe=!1;function _e(e,t,r,s){t.child=e===null?qp(t,null,r,s):vs(t,e.child,r,s)}function S0(e,t,r,s,l){r=r.render;var n=t.ref;if("ref"in s){var i={};for(var o in s)o!=="ref"&&(i[o]=s[o])}else i=s;return yr(t),s=Ic(e,t,r,i,n,l),o=Gc(),e!==null&&!Oe?(Pc(e,t,l),ka(e,t,l)):(W&&o&&Hc(t),t.flags|=1,_e(e,t,s,l),t.child)}function D0(e,t,r,s,l){if(e===null){var n=r.type;return typeof n=="function"&&!Bc(n)&&n.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=n,Kp(e,t,n,s,l)):(e=Vn(r.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!tu(e,l)){var i=n.memoizedProps;if(r=r.compare,r=r!==null?r:Cl,r(i,s)&&e.ref===t.ref)return ka(e,t,l)}return t.flags|=1,e=fa(n,s),e.ref=t.ref,e.return=t,t.child=e}function Kp(e,t,r,s,l){if(e!==null){var n=e.memoizedProps;if(Cl(n,s)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=s=n,tu(e,l))e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,ka(e,t,l)}return Fd(e,t,r,s,l)}function Qp(e,t,r){var s=t.pendingProps,l=s.children,n=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if(t.flags&128){if(s=n!==null?n.baseLanes|r:r,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;t.childLanes=n&~s}else t.childLanes=0,t.child=null;return T0(e,t,s,r)}if(r&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&In(t,n!==null?n.cachePool:null),n!==null?g0(t,n):Bd(),Fp(t);else return t.lanes=t.childLanes=536870912,T0(e,t,n!==null?n.baseLanes|r:r,r)}else n!==null?(In(t,n.cachePool),g0(t,n),_a(),t.memoizedState=null):(e!==null&&In(t,null),Bd(),_a());return _e(e,t,l,r),t.child}function T0(e,t,r,s){var l=Uc();return l=l===null?null:{parent:De._currentValue,pool:l},t.memoizedState={baseLanes:r,cachePool:l},e!==null&&In(t,null),Bd(),Fp(t),e!==null&&Xl(e,t,s,!0),null}function Yn(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(M(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function Fd(e,t,r,s,l){return yr(t),r=Ic(e,t,r,s,void 0,l),s=Gc(),e!==null&&!Oe?(Pc(e,t,l),ka(e,t,l)):(W&&s&&Hc(t),t.flags|=1,_e(e,t,r,l),t.child)}function R0(e,t,r,s,l,n){return yr(t),t.updateQueue=null,r=dp(t,s,r,l),op(e),s=Gc(),e!==null&&!Oe?(Pc(e,t,n),ka(e,t,n)):(W&&s&&Hc(t),t.flags|=1,_e(e,t,r,n),t.child)}function M0(e,t,r,s,l){if(yr(t),t.stateNode===null){var n=es,i=r.contextType;typeof i=="object"&&i!==null&&(n=Ie(i)),n=new r(s,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ud,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=s,n.state=t.memoizedState,n.refs={},qc(t),i=r.contextType,n.context=typeof i=="object"&&i!==null?Ie(i):es,n.state=t.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(Lo(t,r,i,s),n.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&Ud.enqueueReplaceState(n,n.state,null),ml(t,s,n,l),ul(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){n=t.stateNode;var o=t.memoizedProps,d=wr(r,o);n.props=d;var c=n.context,u=r.contextType;i=es,typeof u=="object"&&u!==null&&(i=Ie(u));var m=r.getDerivedStateFromProps;u=typeof m=="function"||typeof n.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o||c!==i)&&N0(t,n,s,i),Oa=!1;var x=t.memoizedState;n.state=x,ml(t,s,n,l),ul(),c=t.memoizedState,o||x!==c||Oa?(typeof m=="function"&&(Lo(t,r,m,s),c=t.memoizedState),(d=Oa||j0(t,r,d,s,x,c,i))?(u||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),n.props=s,n.state=c,n.context=i,s=d):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{n=t.stateNode,Ld(e,t),i=t.memoizedProps,u=wr(r,i),n.props=u,m=t.pendingProps,x=n.context,c=r.contextType,d=es,typeof c=="object"&&c!==null&&(d=Ie(c)),o=r.getDerivedStateFromProps,(c=typeof o=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==m||x!==d)&&N0(t,n,s,d),Oa=!1,x=t.memoizedState,n.state=x,ml(t,s,n,l),ul();var b=t.memoizedState;i!==m||x!==b||Oa||e!==null&&e.dependencies!==null&&ci(e.dependencies)?(typeof o=="function"&&(Lo(t,r,o,s),b=t.memoizedState),(u=Oa||j0(t,r,u,s,x,b,d)||e!==null&&e.dependencies!==null&&ci(e.dependencies))?(c||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(s,b,d),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(s,b,d)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=b),n.props=s,n.state=b,n.context=d,s=u):(typeof n.componentDidUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),s=!1)}return n=s,Yn(e,t),s=(t.flags&128)!==0,n||s?(n=t.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&s?(t.child=vs(t,e.child,null,l),t.child=vs(t,null,r,l)):_e(e,t,r,l),t.memoizedState=n.state,e=t.child):e=ka(e,t,l),e}function E0(e,t,r,s){return Yl(),t.flags|=256,_e(e,t,r,s),t.child}var Oo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bo(e){return{baseLanes:e,cachePool:rp()}}function Ho(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=St),e}function Zp(e,t,r){var s=t.pendingProps,l=!1,n=(t.flags&128)!==0,i;if((i=n)||(i=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),i&&(l=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(W){if(l?$a(t):_a(),W){var o=ye,d;if(d=o){e:{for(d=o,o=It;d.nodeType!==8;){if(!o){o=null;break e}if(d=Lt(d.nextSibling),d===null){o=null;break e}}o=d}o!==null?(t.memoizedState={dehydrated:o,treeContext:pr!==null?{id:ua,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},d=dt(18,null,null,0),d.stateNode=o,d.return=t,t.child=d,Pe=t,ye=null,d=!0):d=!1}d||vr(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return ac(o)?t.lanes=32:t.lanes=536870912,null;pa(t)}return o=s.children,s=s.fallback,l?(_a(),l=t.mode,o=bi({mode:"hidden",children:o},l),s=xr(s,l,r,null),o.return=t,s.return=t,o.sibling=s,t.child=o,l=t.child,l.memoizedState=Bo(r),l.childLanes=Ho(e,i,r),t.memoizedState=Oo,s):($a(t),Vd(t,o))}if(d=e.memoizedState,d!==null&&(o=d.dehydrated,o!==null)){if(n)t.flags&256?($a(t),t.flags&=-257,t=$o(e,t,r)):t.memoizedState!==null?(_a(),t.child=e.child,t.flags|=128,t=null):(_a(),l=s.fallback,o=t.mode,s=bi({mode:"visible",children:s.children},o),l=xr(l,o,r,null),l.flags|=2,s.return=t,l.return=t,s.sibling=l,t.child=s,vs(t,e.child,null,r),s=t.child,s.memoizedState=Bo(r),s.childLanes=Ho(e,i,r),t.memoizedState=Oo,t=l);else if($a(t),ac(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var c=i.dgst;i=c,s=Error(M(419)),s.stack="",s.digest=i,Sl({value:s,source:null,stack:null}),t=$o(e,t,r)}else if(Oe||Xl(e,t,r,!1),i=(r&e.childLanes)!==0,Oe||i){if(i=ne,i!==null&&(s=r&-r,s=s&42?1:Cc(s),s=s&(i.suspendedLanes|r)?0:s,s!==0&&s!==d.retryLane))throw d.retryLane=s,Rs(e,s),xt(i,e,s),Xp;o.data==="$?"||Kd(),t=$o(e,t,r)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,ye=Lt(o.nextSibling),Pe=t,W=!0,gr=null,It=!1,e!==null&&(wt[jt++]=ua,wt[jt++]=ma,wt[jt++]=pr,ua=e.id,ma=e.overflow,pr=t),t=Vd(t,s.children),t.flags|=4096);return t}return l?(_a(),l=s.fallback,o=t.mode,d=e.child,c=d.sibling,s=fa(d,{mode:"hidden",children:s.children}),s.subtreeFlags=d.subtreeFlags&65011712,c!==null?l=fa(c,l):(l=xr(l,o,r,null),l.flags|=2),l.return=t,s.return=t,s.sibling=l,t.child=s,s=l,l=t.child,o=e.child.memoizedState,o===null?o=Bo(r):(d=o.cachePool,d!==null?(c=De._currentValue,d=d.parent!==c?{parent:c,pool:c}:d):d=rp(),o={baseLanes:o.baseLanes|r,cachePool:d}),l.memoizedState=o,l.childLanes=Ho(e,i,r),t.memoizedState=Oo,s):($a(t),r=e.child,e=r.sibling,r=fa(r,{mode:"visible",children:s.children}),r.return=t,r.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=r,t.memoizedState=null,r)}function Vd(e,t){return t=bi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function bi(e,t){return e=dt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function $o(e,t,r){return vs(t,e.child,null,r),e=Vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function z0(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Md(e.return,t,r)}function _o(e,t,r,s,l){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:l}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=s,n.tail=r,n.tailMode=l)}function Wp(e,t,r){var s=t.pendingProps,l=s.revealOrder,n=s.tail;if(_e(e,t,s.children,r),s=Re.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&z0(e,r,t);else if(e.tag===19)z0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(pe(Re,s),l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&gi(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),_o(t,!1,l,r,n);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&gi(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}_o(t,!0,r,null,n);break;case"together":_o(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ka(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(r&t.childLanes))if(e!==null){if(Xl(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,r=fa(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=fa(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function tu(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&ci(e)))}function sv(e,t,r){switch(t.tag){case 3:ai(t,t.stateNode.containerInfo),Ha(t,De,e.memoizedState.cache),Yl();break;case 27:case 5:bd(t);break;case 4:ai(t,t.stateNode.containerInfo);break;case 10:Ha(t,t.type,t.memoizedProps.value);break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?($a(t),t.flags|=128,null):r&t.child.childLanes?Zp(e,t,r):($a(t),e=ka(e,t,r),e!==null?e.sibling:null);$a(t);break;case 19:var l=(e.flags&128)!==0;if(s=(r&t.childLanes)!==0,s||(Xl(e,t,r,!1),s=(r&t.childLanes)!==0),l){if(s)return Wp(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),pe(Re,Re.current),s)break;return null;case 22:case 23:return t.lanes=0,Qp(e,t,r);case 24:Ha(t,De,e.memoizedState.cache)}return ka(e,t,r)}function Jp(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)Oe=!0;else{if(!tu(e,r)&&!(t.flags&128))return Oe=!1,sv(e,t,r);Oe=!!(e.flags&131072)}else Oe=!1,W&&t.flags&1048576&&tp(t,di,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var s=t.elementType,l=s._init;if(s=l(s._payload),t.type=s,typeof s=="function")Bc(s)?(e=wr(s,e),t.tag=1,t=M0(null,t,s,e,r)):(t.tag=0,t=Fd(null,t,s,e,r));else{if(s!=null){if(l=s.$$typeof,l===wc){t.tag=11,t=S0(null,t,s,e,r);break e}else if(l===jc){t.tag=14,t=D0(null,t,s,e,r);break e}}throw t=fd(s)||s,Error(M(306,t,""))}}return t;case 0:return Fd(e,t,t.type,t.pendingProps,r);case 1:return s=t.type,l=wr(s,t.pendingProps),M0(e,t,s,l,r);case 3:e:{if(ai(t,t.stateNode.containerInfo),e===null)throw Error(M(387));s=t.pendingProps;var n=t.memoizedState;l=n.element,Ld(e,t),ml(t,s,null,r);var i=t.memoizedState;if(s=i.cache,Ha(t,De,s),s!==n.cache&&Ed(t,[De],r,!0),ul(),s=i.element,n.isDehydrated)if(n={element:s,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=E0(e,t,s,r);break e}else if(s!==l){l=Ct(Error(M(424)),t),Sl(l),t=E0(e,t,s,r);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=Lt(e.firstChild),Pe=t,W=!0,gr=null,It=!0,r=qp(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Yl(),s===l){t=ka(e,t,r);break e}_e(e,t,s,r)}t=t.child}return t;case 26:return Yn(e,t),e===null?(r=K0(t.type,null,t.pendingProps,null))?t.memoizedState=r:W||(r=t.type,e=t.pendingProps,s=Ci(Ga.current).createElement(r),s[Ve]=t,s[et]=e,qe(s,r,e),Le(s),t.stateNode=s):t.memoizedState=K0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return bd(t),e===null&&W&&(s=t.stateNode=_g(t.type,t.pendingProps,Ga.current),Pe=t,It=!0,l=ye,rr(t.type)?(rc=l,ye=Lt(s.firstChild)):ye=l),_e(e,t,t.pendingProps.children,r),Yn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&W&&((l=s=ye)&&(s=zv(s,t.type,t.pendingProps,It),s!==null?(t.stateNode=s,Pe=t,ye=Lt(s.firstChild),It=!1,l=!0):l=!1),l||vr(t)),bd(t),l=t.type,n=t.pendingProps,i=e!==null?e.memoizedProps:null,s=n.children,ec(l,n)?s=null:i!==null&&ec(l,i)&&(t.flags|=32),t.memoizedState!==null&&(l=Ic(e,t,Qb,null,null,r),zl._currentValue=l),Yn(e,t),_e(e,t,s,r),t.child;case 6:return e===null&&W&&((e=r=ye)&&(r=Av(r,t.pendingProps,It),r!==null?(t.stateNode=r,Pe=t,ye=null,e=!0):e=!1),e||vr(t)),null;case 13:return Zp(e,t,r);case 4:return ai(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=vs(t,null,s,r):_e(e,t,s,r),t.child;case 11:return S0(e,t,t.type,t.pendingProps,r);case 7:return _e(e,t,t.pendingProps,r),t.child;case 8:return _e(e,t,t.pendingProps.children,r),t.child;case 12:return _e(e,t,t.pendingProps.children,r),t.child;case 10:return s=t.pendingProps,Ha(t,t.type,s.value),_e(e,t,s.children,r),t.child;case 9:return l=t.type._context,s=t.pendingProps.children,yr(t),l=Ie(l),s=s(l),t.flags|=1,_e(e,t,s,r),t.child;case 14:return D0(e,t,t.type,t.pendingProps,r);case 15:return Kp(e,t,t.type,t.pendingProps,r);case 19:return Wp(e,t,r);case 31:return s=t.pendingProps,r=t.mode,s={mode:s.mode,children:s.children},e===null?(r=bi(s,r),r.ref=t.ref,t.child=r,r.return=t,t=r):(r=fa(e.child,s),r.ref=t.ref,t.child=r,r.return=t,t=r),t;case 22:return Qp(e,t,r);case 24:return yr(t),s=Ie(De),e===null?(l=Uc(),l===null&&(l=ne,n=_c(),l.pooledCache=n,n.refCount++,n!==null&&(l.pooledCacheLanes|=r),l=n),t.memoizedState={parent:s,cache:l},qc(t),Ha(t,De,l)):(e.lanes&r&&(Ld(e,t),ml(t,null,null,r),ul()),l=e.memoizedState,n=t.memoizedState,l.parent!==s?(l={parent:s,cache:s},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ha(t,De,s)):(s=n.cache,Ha(t,De,s),s!==l.cache&&Ed(t,[De],r,!0))),_e(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(M(156,t.tag))}function ia(e){e.flags|=4}function A0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Fg(t)){if(t=Dt.current,t!==null&&((Y&4194048)===Y?Xt!==null:(Y&62914560)!==Y&&!(Y&536870912)||t!==Xt))throw dl=Ad,sp;e.flags|=8192}}function Cn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Cx():536870912,e.lanes|=t,ys|=t)}function Xs(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags&65011712,s|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function lv(e,t,r){var s=t.pendingProps;switch($c(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ge(t),null;case 3:return r=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),ha(De),xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ps(t)?ia(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,d0())),ge(t),null;case 26:return r=t.memoizedState,e===null?(ia(t),r!==null?(ge(t),A0(t,r)):(ge(t),t.flags&=-16777217)):r?r!==e.memoizedState?(ia(t),ge(t),A0(t,r)):(ge(t),t.flags&=-16777217):(e.memoizedProps!==s&&ia(t),ge(t),t.flags&=-16777217),null;case 27:ri(t),r=Ga.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==s&&ia(t);else{if(!s){if(t.stateNode===null)throw Error(M(166));return ge(t),null}e=Pt.current,Ps(t)?i0(t):(e=_g(l,s,r),t.stateNode=e,ia(t))}return ge(t),null;case 5:if(ri(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&ia(t);else{if(!s){if(t.stateNode===null)throw Error(M(166));return ge(t),null}if(e=Pt.current,Ps(t))i0(t);else{switch(l=Ci(Ga.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?l.createElement("select",{is:s.is}):l.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?l.createElement(r,{is:s.is}):l.createElement(r)}}e[Ve]=t,e[et]=s;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(qe(e,r,s),r){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ia(t)}}return ge(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&ia(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(M(166));if(e=Ga.current,Ps(t)){if(e=t.stateNode,r=t.memoizedProps,s=null,l=Pe,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||Bg(e.nodeValue,r)),e||vr(t)}else e=Ci(e).createTextNode(s),e[Ve]=t,t.stateNode=e}return ge(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ps(t),s!==null&&s.dehydrated!==null){if(e===null){if(!l)throw Error(M(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(M(317));l[Ve]=t}else Yl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),l=!1}else l=d0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(pa(t),t):(pa(t),null)}if(pa(t),t.flags&128)return t.lanes=r,t;if(r=s!==null,e=e!==null&&e.memoizedState!==null,r){s=t.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool);var n=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==l&&(s.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),Cn(t,t.updateQueue),ge(t),null;case 4:return xs(),e===null&&du(t.stateNode.containerInfo),ge(t),null;case 10:return ha(t.type),ge(t),null;case 19:if(Be(Re),l=t.memoizedState,l===null)return ge(t),null;if(s=(t.flags&128)!==0,n=l.rendering,n===null)if(s)Xs(l,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(n=gi(e),n!==null){for(t.flags|=128,Xs(l,!1),e=n.updateQueue,t.updateQueue=e,Cn(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)ep(r,e),r=r.sibling;return pe(Re,Re.current&1|2),t.child}e=e.sibling}l.tail!==null&&Yt()>yi&&(t.flags|=128,s=!0,Xs(l,!1),t.lanes=4194304)}else{if(!s)if(e=gi(n),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Cn(t,e),Xs(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!W)return ge(t),null}else 2*Yt()-l.renderingStartTime>yi&&r!==536870912&&(t.flags|=128,s=!0,Xs(l,!1),t.lanes=4194304);l.isBackwards?(n.sibling=t.child,t.child=n):(e=l.last,e!==null?e.sibling=n:t.child=n,l.last=n)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Yt(),t.sibling=null,e=Re.current,pe(Re,s?e&1|2:e&1),t):(ge(t),null);case 22:case 23:return pa(t),Fc(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?r&536870912&&!(t.flags&128)&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),r=t.updateQueue,r!==null&&Cn(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==r&&(t.flags|=2048),e!==null&&Be(fr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ha(De),ge(t),null;case 25:return null;case 30:return null}throw Error(M(156,t.tag))}function nv(e,t){switch($c(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ha(De),xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ri(t),null;case 13:if(pa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Yl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Be(Re),null;case 4:return xs(),null;case 10:return ha(t.type),null;case 22:case 23:return pa(t),Fc(),e!==null&&Be(fr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ha(De),null;case 25:return null;default:return null}}function eg(e,t){switch($c(t),t.tag){case 3:ha(De),xs();break;case 26:case 27:case 5:ri(t);break;case 4:xs();break;case 13:pa(t);break;case 19:Be(Re);break;case 10:ha(t.type);break;case 22:case 23:pa(t),Fc(),e!==null&&Be(fr);break;case 24:ha(De)}}function Jl(e,t){try{var r=t.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var l=s.next;r=l;do{if((r.tag&e)===e){s=void 0;var n=r.create,i=r.inst;s=n(),i.destroy=s}r=r.next}while(r!==l)}}catch(o){le(t,t.return,o)}}function er(e,t,r){try{var s=t.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var n=l.next;s=n;do{if((s.tag&e)===e){var i=s.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,l=t;var d=r,c=o;try{c()}catch(u){le(l,d,u)}}}s=s.next}while(s!==n)}}catch(u){le(t,t.return,u)}}function tg(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{ip(t,r)}catch(s){le(e,e.return,s)}}}function ag(e,t,r){r.props=wr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(s){le(e,t,s)}}function pl(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof r=="function"?e.refCleanup=r(s):r.current=s}}catch(l){le(e,t,l)}}function Gt(e,t){var r=e.ref,s=e.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(l){le(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(l){le(e,t,l)}else r.current=null}function rg(e){var t=e.type,r=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break e;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(l){le(e,e.return,l)}}function Uo(e,t,r){try{var s=e.stateNode;Dv(s,e.type,r,t),s[et]=t}catch(l){le(e,e.return,l)}}function sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rr(e.type)||e.tag===4}function qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Id(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ro));else if(s!==4&&(s===27&&rr(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(Id(e,t,r),e=e.sibling;e!==null;)Id(e,t,r),e=e.sibling}function vi(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(s===27&&rr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(vi(e,t,r),e=e.sibling;e!==null;)vi(e,t,r),e=e.sibling}function lg(e){var t=e.stateNode,r=e.memoizedProps;try{for(var s=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);qe(t,s,r),t[Ve]=e,t[et]=r}catch(n){le(e,e.return,n)}}var da=!1,je=!1,Fo=!1,L0=typeof WeakSet=="function"?WeakSet:Set,ze=null;function iv(e,t){if(e=e.containerInfo,Wd=Ri,e=Px(e),Ac(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var l=s.anchorOffset,n=s.focusNode;s=s.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break e}var i=0,o=-1,d=-1,c=0,u=0,m=e,x=null;t:for(;;){for(var b;m!==r||l!==0&&m.nodeType!==3||(o=i+l),m!==n||s!==0&&m.nodeType!==3||(d=i+s),m.nodeType===3&&(i+=m.nodeValue.length),(b=m.firstChild)!==null;)x=m,m=b;for(;;){if(m===e)break t;if(x===r&&++c===l&&(o=i),x===n&&++u===s&&(d=i),(b=m.nextSibling)!==null)break;m=x,x=m.parentNode}m=b}r=o===-1||d===-1?null:{start:o,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Jd={focusedElem:e,selectionRange:r},Ri=!1,ze=t;ze!==null;)if(t=ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ze=e;else for(;ze!==null;){switch(t=ze,n=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&n!==null){e=void 0,r=t,l=n.memoizedProps,n=n.memoizedState,s=r.stateNode;try{var j=wr(r.type,l,r.elementType===r.type);e=s.getSnapshotBeforeUpdate(j,n),s.__reactInternalSnapshotBeforeUpdate=e}catch(k){le(r,r.return,k)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)tc(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":tc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(M(163))}if(e=t.sibling,e!==null){e.return=t.return,ze=e;break}ze=t.return}}function ng(e,t,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:Ea(e,r),s&4&&Jl(5,r);break;case 1:if(Ea(e,r),s&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(i){le(r,r.return,i)}else{var l=wr(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){le(r,r.return,i)}}s&64&&tg(r),s&512&&pl(r,r.return);break;case 3:if(Ea(e,r),s&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{ip(e,t)}catch(i){le(r,r.return,i)}}break;case 27:t===null&&s&4&&lg(r);case 26:case 5:Ea(e,r),t===null&&s&4&&rg(r),s&512&&pl(r,r.return);break;case 12:Ea(e,r);break;case 13:Ea(e,r),s&4&&dg(e,r),s&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=fv.bind(null,r),Lv(e,r))));break;case 22:if(s=r.memoizedState!==null||da,!s){t=t!==null&&t.memoizedState!==null||je,l=da;var n=je;da=s,(je=t)&&!n?Aa(e,r,(r.subtreeFlags&8772)!==0):Ea(e,r),da=l,je=n}break;case 30:break;default:Ea(e,r)}}function ig(e){var t=e.alternate;t!==null&&(e.alternate=null,ig(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Dc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var me=null,We=!1;function oa(e,t,r){for(r=r.child;r!==null;)og(e,t,r),r=r.sibling}function og(e,t,r){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Fl,r)}catch{}switch(r.tag){case 26:je||Gt(r,t),oa(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:je||Gt(r,t);var s=me,l=We;rr(r.type)&&(me=r.stateNode,We=!1),oa(e,t,r),bl(r.stateNode),me=s,We=l;break;case 5:je||Gt(r,t);case 6:if(s=me,l=We,me=null,oa(e,t,r),me=s,We=l,me!==null)if(We)try{(me.nodeType===9?me.body:me.nodeName==="HTML"?me.ownerDocument.body:me).removeChild(r.stateNode)}catch(n){le(r,t,n)}else try{me.removeChild(r.stateNode)}catch(n){le(r,t,n)}break;case 18:me!==null&&(We?(e=me,P0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Ol(e)):P0(me,r.stateNode));break;case 4:s=me,l=We,me=r.stateNode.containerInfo,We=!0,oa(e,t,r),me=s,We=l;break;case 0:case 11:case 14:case 15:je||er(2,r,t),je||er(4,r,t),oa(e,t,r);break;case 1:je||(Gt(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"&&ag(r,t,s)),oa(e,t,r);break;case 21:oa(e,t,r);break;case 22:je=(s=je)||r.memoizedState!==null,oa(e,t,r),je=s;break;default:oa(e,t,r)}}function dg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ol(e)}catch(r){le(t,t.return,r)}}function ov(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new L0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new L0),t;default:throw Error(M(435,e.tag))}}function Vo(e,t){var r=ov(e);t.forEach(function(s){var l=hv.bind(null,e,s);r.has(s)||(r.add(s),s.then(l,l))})}function nt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var l=r[s],n=e,i=t,o=i;e:for(;o!==null;){switch(o.tag){case 27:if(rr(o.type)){me=o.stateNode,We=!1;break e}break;case 5:me=o.stateNode,We=!1;break e;case 3:case 4:me=o.stateNode.containerInfo,We=!0;break e}o=o.return}if(me===null)throw Error(M(160));og(n,i,l),me=null,We=!1,n=l.alternate,n!==null&&(n.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)cg(t,e),t=t.sibling}var zt=null;function cg(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),it(e),s&4&&(er(3,e,e.return),Jl(3,e),er(5,e,e.return));break;case 1:nt(t,e),it(e),s&512&&(je||r===null||Gt(r,r.return)),s&64&&da&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var l=zt;if(nt(t,e),it(e),s&512&&(je||r===null||Gt(r,r.return)),s&4){var n=r!==null?r.memoizedState:null;if(s=e.memoizedState,r===null)if(s===null)if(e.stateNode===null){e:{s=e.type,r=e.memoizedProps,l=l.ownerDocument||l;t:switch(s){case"title":n=l.getElementsByTagName("title")[0],(!n||n[Gl]||n[Ve]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=l.createElement(s),l.head.insertBefore(n,l.querySelector("head > title"))),qe(n,s,r),n[Ve]=e,Le(n),s=n;break e;case"link":var i=Z0("link","href",l).get(s+(r.href||""));if(i){for(var o=0;o<i.length;o++)if(n=i[o],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){i.splice(o,1);break t}}n=l.createElement(s),qe(n,s,r),l.head.appendChild(n);break;case"meta":if(i=Z0("meta","content",l).get(s+(r.content||""))){for(o=0;o<i.length;o++)if(n=i[o],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){i.splice(o,1);break t}}n=l.createElement(s),qe(n,s,r),l.head.appendChild(n);break;default:throw Error(M(468,s))}n[Ve]=e,Le(n),s=n}e.stateNode=s}else W0(l,e.type,e.stateNode);else e.stateNode=Q0(l,s,e.memoizedProps);else n!==s?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,s===null?W0(l,e.type,e.stateNode):Q0(l,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Uo(e,e.memoizedProps,r.memoizedProps)}break;case 27:nt(t,e),it(e),s&512&&(je||r===null||Gt(r,r.return)),r!==null&&s&4&&Uo(e,e.memoizedProps,r.memoizedProps);break;case 5:if(nt(t,e),it(e),s&512&&(je||r===null||Gt(r,r.return)),e.flags&32){l=e.stateNode;try{gs(l,"")}catch(b){le(e,e.return,b)}}s&4&&e.stateNode!=null&&(l=e.memoizedProps,Uo(e,l,r!==null?r.memoizedProps:l)),s&1024&&(Fo=!0);break;case 6:if(nt(t,e),it(e),s&4){if(e.stateNode===null)throw Error(M(162));s=e.memoizedProps,r=e.stateNode;try{r.nodeValue=s}catch(b){le(e,e.return,b)}}break;case 3:if(Qn=null,l=zt,zt=Si(t.containerInfo),nt(t,e),zt=l,it(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Ol(t.containerInfo)}catch(b){le(e,e.return,b)}Fo&&(Fo=!1,ug(e));break;case 4:s=zt,zt=Si(e.stateNode.containerInfo),nt(t,e),it(e),zt=s;break;case 12:nt(t,e),it(e);break;case 13:nt(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(nu=Yt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Vo(e,s)));break;case 22:l=e.memoizedState!==null;var d=r!==null&&r.memoizedState!==null,c=da,u=je;if(da=c||l,je=u||d,nt(t,e),je=u,da=c,it(e),s&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(r===null||d||da||je||cr(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){d=r=t;try{if(n=d.stateNode,l)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=d.stateNode;var m=d.memoizedProps.style,x=m!=null&&m.hasOwnProperty("display")?m.display:null;o.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(b){le(d,d.return,b)}}}else if(t.tag===6){if(r===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(b){le(d,d.return,b)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,Vo(e,r))));break;case 19:nt(t,e),it(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Vo(e,s)));break;case 30:break;case 21:break;default:nt(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var r,s=e.return;s!==null;){if(sg(s)){r=s;break}s=s.return}if(r==null)throw Error(M(160));switch(r.tag){case 27:var l=r.stateNode,n=qo(e);vi(e,n,l);break;case 5:var i=r.stateNode;r.flags&32&&(gs(i,""),r.flags&=-33);var o=qo(e);vi(e,o,i);break;case 3:case 4:var d=r.stateNode.containerInfo,c=qo(e);Id(e,c,d);break;default:throw Error(M(161))}}catch(u){le(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ug(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ng(e,t.alternate,t),t=t.sibling}function cr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:er(4,t,t.return),cr(t);break;case 1:Gt(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&ag(t,t.return,r),cr(t);break;case 27:bl(t.stateNode);case 26:case 5:Gt(t,t.return),cr(t);break;case 22:t.memoizedState===null&&cr(t);break;case 30:cr(t);break;default:cr(t)}e=e.sibling}}function Aa(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,l=e,n=t,i=n.flags;switch(n.tag){case 0:case 11:case 15:Aa(l,n,r),Jl(4,n);break;case 1:if(Aa(l,n,r),s=n,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(c){le(s,s.return,c)}if(s=n,l=s.updateQueue,l!==null){var o=s.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)np(d[l],o)}catch(c){le(s,s.return,c)}}r&&i&64&&tg(n),pl(n,n.return);break;case 27:lg(n);case 26:case 5:Aa(l,n,r),r&&s===null&&i&4&&rg(n),pl(n,n.return);break;case 12:Aa(l,n,r);break;case 13:Aa(l,n,r),r&&i&4&&dg(l,n);break;case 22:n.memoizedState===null&&Aa(l,n,r),pl(n,n.return);break;case 30:break;default:Aa(l,n,r)}t=t.sibling}}function au(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Kl(r))}function ru(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e))}function Ft(e,t,r,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mg(e,t,r,s),t=t.sibling}function mg(e,t,r,s){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(e,t,r,s),l&2048&&Jl(9,t);break;case 1:Ft(e,t,r,s);break;case 3:Ft(e,t,r,s),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kl(e)));break;case 12:if(l&2048){Ft(e,t,r,s),e=t.stateNode;try{var n=t.memoizedProps,i=n.id,o=n.onPostCommit;typeof o=="function"&&o(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){le(t,t.return,d)}}else Ft(e,t,r,s);break;case 13:Ft(e,t,r,s);break;case 23:break;case 22:n=t.stateNode,i=t.alternate,t.memoizedState!==null?n._visibility&2?Ft(e,t,r,s):gl(e,t):n._visibility&2?Ft(e,t,r,s):(n._visibility|=2,Vr(e,t,r,s,(t.subtreeFlags&10256)!==0)),l&2048&&au(i,t);break;case 24:Ft(e,t,r,s),l&2048&&ru(t.alternate,t);break;default:Ft(e,t,r,s)}}function Vr(e,t,r,s,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var n=e,i=t,o=r,d=s,c=i.flags;switch(i.tag){case 0:case 11:case 15:Vr(n,i,o,d,l),Jl(8,i);break;case 23:break;case 22:var u=i.stateNode;i.memoizedState!==null?u._visibility&2?Vr(n,i,o,d,l):gl(n,i):(u._visibility|=2,Vr(n,i,o,d,l)),l&&c&2048&&au(i.alternate,i);break;case 24:Vr(n,i,o,d,l),l&&c&2048&&ru(i.alternate,i);break;default:Vr(n,i,o,d,l)}t=t.sibling}}function gl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,s=t,l=s.flags;switch(s.tag){case 22:gl(r,s),l&2048&&au(s.alternate,s);break;case 24:gl(r,s),l&2048&&ru(s.alternate,s);break;default:gl(r,s)}t=t.sibling}}var rl=8192;function Br(e){if(e.subtreeFlags&rl)for(e=e.child;e!==null;)xg(e),e=e.sibling}function xg(e){switch(e.tag){case 26:Br(e),e.flags&rl&&e.memoizedState!==null&&Yv(zt,e.memoizedState,e.memoizedProps);break;case 5:Br(e);break;case 3:case 4:var t=zt;zt=Si(e.stateNode.containerInfo),Br(e),zt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=rl,rl=16777216,Br(e),rl=t):Br(e));break;default:Br(e)}}function pg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ks(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];ze=s,fg(s,e)}pg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 0:case 11:case 15:Ks(e),e.flags&2048&&er(9,e,e.return);break;case 3:Ks(e);break;case 12:Ks(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xn(e)):Ks(e);break;default:Ks(e)}}function Xn(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];ze=s,fg(s,e)}pg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:er(8,t,t.return),Xn(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,Xn(t));break;default:Xn(t)}e=e.sibling}}function fg(e,t){for(;ze!==null;){var r=ze;switch(r.tag){case 0:case 11:case 15:er(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Kl(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,ze=s;else e:for(r=e;ze!==null;){s=ze;var l=s.sibling,n=s.return;if(ig(s),s===r){ze=null;break e}if(l!==null){l.return=n,ze=l;break e}ze=n}}}var dv={getCacheForType:function(e){var t=Ie(De),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r}},cv=typeof WeakMap=="function"?WeakMap:Map,te=0,ne=null,G=null,Y=0,ee=0,ot=null,Va=!1,Ms=!1,su=!1,wa=0,ke=0,tr=0,hr=0,lu=0,St=0,ys=0,fl=null,Je=null,Gd=!1,nu=0,yi=1/0,ki=null,Xa=null,Ue=0,Ka=null,ks=null,us=0,Pd=0,Yd=null,hg=null,hl=0,Xd=null;function mt(){if(te&2&&Y!==0)return Y&-Y;if(q.T!==null){var e=fs;return e!==0?e:ou()}return Tx()}function bg(){St===0&&(St=!(Y&536870912)||W?Nx():536870912);var e=Dt.current;return e!==null&&(e.flags|=32),St}function xt(e,t,r){(e===ne&&(ee===2||ee===9)||e.cancelPendingCommit!==null)&&(ws(e,0),Ia(e,Y,St,!1)),Il(e,r),(!(te&2)||e!==ne)&&(e===ne&&(!(te&2)&&(hr|=r),ke===4&&Ia(e,Y,St,!1)),Zt(e))}function vg(e,t,r){if(te&6)throw Error(M(327));var s=!r&&(t&124)===0&&(t&e.expiredLanes)===0||Vl(e,t),l=s?xv(e,t):Io(e,t,!0),n=s;do{if(l===0){Ms&&!s&&Ia(e,t,0,!1);break}else{if(r=e.current.alternate,n&&!uv(r)){l=Io(e,t,!1),n=!1;continue}if(l===2){if(n=t,e.errorRecoveryDisabledLanes&n)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var o=e;l=fl;var d=o.current.memoizedState.isDehydrated;if(d&&(ws(o,i).flags|=256),i=Io(o,i,!1),i!==2){if(su&&!d){o.errorRecoveryDisabledLanes|=n,hr|=n,l=4;break e}n=Je,Je=l,n!==null&&(Je===null?Je=n:Je.push.apply(Je,n))}l=i}if(n=!1,l!==2)continue}}if(l===1){ws(e,0),Ia(e,t,0,!0);break}e:{switch(s=e,n=l,n){case 0:case 1:throw Error(M(345));case 4:if((t&4194048)!==t)break;case 6:Ia(s,t,St,!Va);break e;case 2:Je=null;break;case 3:case 5:break;default:throw Error(M(329))}if((t&62914560)===t&&(l=nu+300-Yt(),10<l)){if(Ia(s,t,St,!Va),Ii(s,0,!0)!==0)break e;s.timeoutHandle=$g(O0.bind(null,s,r,Je,ki,Gd,t,St,hr,ys,Va,n,2,-0,0),l);break e}O0(s,r,Je,ki,Gd,t,St,hr,ys,Va,n,0,-0,0)}}break}while(1);Zt(e)}function O0(e,t,r,s,l,n,i,o,d,c,u,m,x,b){if(e.timeoutHandle=-1,m=t.subtreeFlags,(m&8192||(m&16785408)===16785408)&&(El={stylesheets:null,count:0,unsuspend:Pv},xg(t),m=Xv(),m!==null)){e.cancelPendingCommit=m(H0.bind(null,e,t,n,r,s,l,i,o,d,u,1,x,b)),Ia(e,n,i,!c);return}H0(e,t,n,r,s,l,i,o,d)}function uv(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var l=r[s],n=l.getSnapshot;l=l.value;try{if(!pt(n(),l))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ia(e,t,r,s){t&=~lu,t&=~hr,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var l=t;0<l;){var n=31-ut(l),i=1<<n;s[n]=-1,l&=~i}r!==0&&Sx(e,r,t)}function eo(){return te&6?!0:(en(0,!1),!1)}function iu(){if(G!==null){if(ee===0)var e=G.return;else e=G,xa=Sr=null,Yc(e),cs=null,Tl=0,e=G;for(;e!==null;)eg(e.alternate,e),e=e.return;G=null}}function ws(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Rv(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),iu(),ne=e,G=r=fa(e.current,null),Y=t,ee=0,ot=null,Va=!1,Ms=Vl(e,t),su=!1,ys=St=lu=hr=tr=ke=0,Je=fl=null,Gd=!1,t&8&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var l=31-ut(s),n=1<<l;t|=e[l],s&=~n}return wa=t,Xi(),r}function yg(e,t){V=null,q.H=pi,t===Ql||t===Qi?(t=x0(),ee=3):t===sp?(t=x0(),ee=4):ee=t===Xp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,G===null&&(ke=1,hi(e,Ct(t,e.current)))}function kg(){var e=q.H;return q.H=pi,e===null?pi:e}function wg(){var e=q.A;return q.A=dv,e}function Kd(){ke=4,Va||(Y&4194048)!==Y&&Dt.current!==null||(Ms=!0),!(tr&134217727)&&!(hr&134217727)||ne===null||Ia(ne,Y,St,!1)}function Io(e,t,r){var s=te;te|=2;var l=kg(),n=wg();(ne!==e||Y!==t)&&(ki=null,ws(e,t)),t=!1;var i=ke;e:do try{if(ee!==0&&G!==null){var o=G,d=ot;switch(ee){case 8:iu(),i=6;break e;case 3:case 2:case 9:case 6:Dt.current===null&&(t=!0);var c=ee;if(ee=0,ot=null,rs(e,o,d,c),r&&Ms){i=0;break e}break;default:c=ee,ee=0,ot=null,rs(e,o,d,c)}}mv(),i=ke;break}catch(u){yg(e,u)}while(1);return t&&e.shellSuspendCounter++,xa=Sr=null,te=s,q.H=l,q.A=n,G===null&&(ne=null,Y=0,Xi()),i}function mv(){for(;G!==null;)jg(G)}function xv(e,t){var r=te;te|=2;var s=kg(),l=wg();ne!==e||Y!==t?(ki=null,yi=Yt()+500,ws(e,t)):Ms=Vl(e,t);e:do try{if(ee!==0&&G!==null){t=G;var n=ot;t:switch(ee){case 1:ee=0,ot=null,rs(e,t,n,1);break;case 2:case 9:if(m0(n)){ee=0,ot=null,B0(t);break}t=function(){ee!==2&&ee!==9||ne!==e||(ee=7),Zt(e)},n.then(t,t);break e;case 3:ee=7;break e;case 4:ee=5;break e;case 7:m0(n)?(ee=0,ot=null,B0(t)):(ee=0,ot=null,rs(e,t,n,7));break;case 5:var i=null;switch(G.tag){case 26:i=G.memoizedState;case 5:case 27:var o=G;if(!i||Fg(i)){ee=0,ot=null;var d=o.sibling;if(d!==null)G=d;else{var c=o.return;c!==null?(G=c,to(c)):G=null}break t}}ee=0,ot=null,rs(e,t,n,5);break;case 6:ee=0,ot=null,rs(e,t,n,6);break;case 8:iu(),ke=6;break e;default:throw Error(M(462))}}pv();break}catch(u){yg(e,u)}while(1);return xa=Sr=null,q.H=s,q.A=l,te=r,G!==null?0:(ne=null,Y=0,Xi(),ke)}function pv(){for(;G!==null&&!Bh();)jg(G)}function jg(e){var t=Jp(e.alternate,e,wa);e.memoizedProps=e.pendingProps,t===null?to(e):G=t}function B0(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=R0(r,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=R0(r,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Yc(t);default:eg(r,t),t=G=ep(t,wa),t=Jp(r,t,wa)}e.memoizedProps=e.pendingProps,t===null?to(e):G=t}function rs(e,t,r,s){xa=Sr=null,Yc(t),cs=null,Tl=0;var l=t.return;try{if(rv(e,l,t,r,Y)){ke=1,hi(e,Ct(r,e.current)),G=null;return}}catch(n){if(l!==null)throw G=l,n;ke=1,hi(e,Ct(r,e.current)),G=null;return}t.flags&32768?(W||s===1?e=!0:Ms||Y&536870912?e=!1:(Va=e=!0,(s===2||s===9||s===3||s===6)&&(s=Dt.current,s!==null&&s.tag===13&&(s.flags|=16384))),Ng(t,e)):to(t)}function to(e){var t=e;do{if(t.flags&32768){Ng(t,Va);return}e=t.return;var r=lv(t.alternate,t,wa);if(r!==null){G=r;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);ke===0&&(ke=5)}function Ng(e,t){do{var r=nv(e.alternate,e);if(r!==null){r.flags&=32767,G=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=r}while(e!==null);ke=6,G=null}function H0(e,t,r,s,l,n,i,o,d){e.cancelPendingCommit=null;do ao();while(Ue!==0);if(te&6)throw Error(M(327));if(t!==null){if(t===e.current)throw Error(M(177));if(n=t.lanes|t.childLanes,n|=Lc,Ph(e,r,n,i,o,d),e===ne&&(G=ne=null,Y=0),ks=t,Ka=e,us=r,Pd=n,Yd=l,hg=s,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,bv(si,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,t.subtreeFlags&13878||s){s=q.T,q.T=null,l=J.p,J.p=2,i=te,te|=4;try{iv(e,t,r)}finally{te=i,J.p=l,q.T=s}}Ue=1,Cg(),Sg(),Dg()}}function Cg(){if(Ue===1){Ue=0;var e=Ka,t=ks,r=(t.flags&13878)!==0;if(t.subtreeFlags&13878||r){r=q.T,q.T=null;var s=J.p;J.p=2;var l=te;te|=4;try{cg(t,e);var n=Jd,i=Px(e.containerInfo),o=n.focusedElem,d=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Gx(o.ownerDocument.documentElement,o)){if(d!==null&&Ac(o)){var c=d.start,u=d.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var m=o.ownerDocument||document,x=m&&m.defaultView||window;if(x.getSelection){var b=x.getSelection(),j=o.textContent.length,k=Math.min(d.start,j),y=d.end===void 0?k:Math.min(d.end,j);!b.extend&&k>y&&(i=y,y=k,k=i);var g=s0(o,k),h=s0(o,y);if(g&&h&&(b.rangeCount!==1||b.anchorNode!==g.node||b.anchorOffset!==g.offset||b.focusNode!==h.node||b.focusOffset!==h.offset)){var f=m.createRange();f.setStart(g.node,g.offset),b.removeAllRanges(),k>y?(b.addRange(f),b.extend(h.node,h.offset)):(f.setEnd(h.node,h.offset),b.addRange(f))}}}}for(m=[],b=o;b=b.parentNode;)b.nodeType===1&&m.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<m.length;o++){var v=m[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Ri=!!Wd,Jd=Wd=null}finally{te=l,J.p=s,q.T=r}}e.current=t,Ue=2}}function Sg(){if(Ue===2){Ue=0;var e=Ka,t=ks,r=(t.flags&8772)!==0;if(t.subtreeFlags&8772||r){r=q.T,q.T=null;var s=J.p;J.p=2;var l=te;te|=4;try{ng(e,t.alternate,t)}finally{te=l,J.p=s,q.T=r}}Ue=3}}function Dg(){if(Ue===4||Ue===3){Ue=0,Hh();var e=Ka,t=ks,r=us,s=hg;t.subtreeFlags&10256||t.flags&10256?Ue=5:(Ue=0,ks=Ka=null,Tg(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Xa=null),Sc(r),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=q.T,l=J.p,J.p=2,q.T=null;try{for(var n=e.onRecoverableError,i=0;i<s.length;i++){var o=s[i];n(o.value,{componentStack:o.stack})}}finally{q.T=t,J.p=l}}us&3&&ao(),Zt(e),l=e.pendingLanes,r&4194090&&l&42?e===Xd?hl++:(hl=0,Xd=e):hl=0,en(0,!1)}}function Tg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Kl(t)))}function ao(e){return Cg(),Sg(),Dg(),Rg()}function Rg(){if(Ue!==5)return!1;var e=Ka,t=Pd;Pd=0;var r=Sc(us),s=q.T,l=J.p;try{J.p=32>r?32:r,q.T=null,r=Yd,Yd=null;var n=Ka,i=us;if(Ue=0,ks=Ka=null,us=0,te&6)throw Error(M(331));var o=te;if(te|=4,gg(n.current),mg(n,n.current,i,r),te=o,en(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Fl,n)}catch{}return!0}finally{J.p=l,q.T=s,Tg(e,t)}}function $0(e,t,r){t=Ct(r,t),t=qd(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(Il(e,2),Zt(e))}function le(e,t,r){if(e.tag===3)$0(e,e,r);else for(;t!==null;){if(t.tag===3){$0(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Xa===null||!Xa.has(s))){e=Ct(r,e),r=Pp(2),s=Ya(t,r,2),s!==null&&(Yp(r,s,t,e),Il(s,2),Zt(s));break}}t=t.return}}function Go(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new cv;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(r)||(su=!0,l.add(r),e=gv.bind(null,e,t,r),t.then(e,e))}function gv(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ne===e&&(Y&r)===r&&(ke===4||ke===3&&(Y&62914560)===Y&&300>Yt()-nu?!(te&2)&&ws(e,0):lu|=r,ys===Y&&(ys=0)),Zt(e)}function Mg(e,t){t===0&&(t=Cx()),e=Rs(e,t),e!==null&&(Il(e,t),Zt(e))}function fv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Mg(e,r)}function hv(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(M(314))}s!==null&&s.delete(t),Mg(e,r)}function bv(e,t){return Nc(e,t)}var wi=null,Ir=null,Qd=!1,ji=!1,Po=!1,br=0;function Zt(e){e!==Ir&&e.next===null&&(Ir===null?wi=Ir=e:Ir=Ir.next=e),ji=!0,Qd||(Qd=!0,yv())}function en(e,t){if(!Po&&ji){Po=!0;do for(var r=!1,s=wi;s!==null;){if(!t)if(e!==0){var l=s.pendingLanes;if(l===0)var n=0;else{var i=s.suspendedLanes,o=s.pingedLanes;n=(1<<31-ut(42|e)+1)-1,n&=l&~(i&~o),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,_0(s,n))}else n=Y,n=Ii(s,s===ne?n:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),!(n&3)||Vl(s,n)||(r=!0,_0(s,n));s=s.next}while(r);Po=!1}}function vv(){Eg()}function Eg(){ji=Qd=!1;var e=0;br!==0&&(Tv()&&(e=br),br=0);for(var t=Yt(),r=null,s=wi;s!==null;){var l=s.next,n=zg(s,t);n===0?(s.next=null,r===null?wi=l:r.next=l,l===null&&(Ir=r)):(r=s,(e!==0||n&3)&&(ji=!0)),s=l}en(e,!1)}function zg(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var i=31-ut(n),o=1<<i,d=l[i];d===-1?(!(o&r)||o&s)&&(l[i]=Gh(o,t)):d<=t&&(e.expiredLanes|=o),n&=~o}if(t=ne,r=Y,r=Ii(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,r===0||e===t&&(ee===2||ee===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&bo(s),e.callbackNode=null,e.callbackPriority=0;if(!(r&3)||Vl(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(s!==null&&bo(s),Sc(r)){case 2:case 8:r=wx;break;case 32:r=si;break;case 268435456:r=jx;break;default:r=si}return s=Ag.bind(null,e),r=Nc(r,s),e.callbackPriority=t,e.callbackNode=r,t}return s!==null&&s!==null&&bo(s),e.callbackPriority=2,e.callbackNode=null,2}function Ag(e,t){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(ao()&&e.callbackNode!==r)return null;var s=Y;return s=Ii(e,e===ne?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(vg(e,s,t),zg(e,Yt()),e.callbackNode!=null&&e.callbackNode===r?Ag.bind(null,e):null)}function _0(e,t){if(ao())return null;vg(e,t,!0)}function yv(){Mv(function(){te&6?Nc(kx,vv):Eg()})}function ou(){return br===0&&(br=Nx()),br}function U0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Un(""+e)}function q0(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function kv(e,t,r,s,l){if(t==="submit"&&r&&r.stateNode===l){var n=U0((l[et]||null).action),i=s.submitter;i&&(t=(t=i[et]||null)?U0(t.formAction):i.getAttribute("formAction"),t!==null&&(n=t,i=null));var o=new Gi("action","action",null,s,l);e.push({event:o,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(br!==0){var d=i?q0(l,i):new FormData(l);_d(r,{pending:!0,data:d,method:l.method,action:n},null,d)}}else typeof n=="function"&&(o.preventDefault(),d=i?q0(l,i):new FormData(l),_d(r,{pending:!0,data:d,method:l.method,action:n},n,d))},currentTarget:l}]})}}for(var Yo=0;Yo<Dd.length;Yo++){var Xo=Dd[Yo],wv=Xo.toLowerCase(),jv=Xo[0].toUpperCase()+Xo.slice(1);$t(wv,"on"+jv)}$t(Xx,"onAnimationEnd");$t(Kx,"onAnimationIteration");$t(Qx,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(Ub,"onTransitionRun");$t(qb,"onTransitionStart");$t(Fb,"onTransitionCancel");$t(Zx,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function Lg(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],l=s.event;s=s.listeners;e:{var n=void 0;if(t)for(var i=s.length-1;0<=i;i--){var o=s[i],d=o.instance,c=o.currentTarget;if(o=o.listener,d!==n&&l.isPropagationStopped())break e;n=o,l.currentTarget=c;try{n(l)}catch(u){fi(u)}l.currentTarget=null,n=d}else for(i=0;i<s.length;i++){if(o=s[i],d=o.instance,c=o.currentTarget,o=o.listener,d!==n&&l.isPropagationStopped())break e;n=o,l.currentTarget=c;try{n(l)}catch(u){fi(u)}l.currentTarget=null,n=d}}}}function I(e,t){var r=t[yd];r===void 0&&(r=t[yd]=new Set);var s=e+"__bubble";r.has(s)||(Og(t,e,2,!1),r.add(s))}function Ko(e,t,r){var s=0;t&&(s|=4),Og(r,e,s,t)}var Sn="_reactListening"+Math.random().toString(36).slice(2);function du(e){if(!e[Sn]){e[Sn]=!0,Rx.forEach(function(r){r!=="selectionchange"&&(Nv.has(r)||Ko(r,!1,e),Ko(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sn]||(t[Sn]=!0,Ko("selectionchange",!1,t))}}function Og(e,t,r,s){switch(Yg(t)){case 2:var l=Zv;break;case 8:l=Wv;break;default:l=xu}r=l.bind(null,t,r,e),l=void 0,!Nd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Qo(e,t,r,s,l){var n=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var o=s.stateNode.containerInfo;if(o===l)break;if(i===4)for(i=s.return;i!==null;){var d=i.tag;if((d===3||d===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;o!==null;){if(i=Xr(o),i===null)return;if(d=i.tag,d===5||d===6||d===26||d===27){s=n=i;continue e}o=o.parentNode}}s=s.return}Hx(function(){var c=n,u=Rc(r),m=[];e:{var x=Wx.get(e);if(x!==void 0){var b=Gi,j=e;switch(e){case"keypress":if(Fn(r)===0)break e;case"keydown":case"keyup":b=bb;break;case"focusin":j="focus",b=So;break;case"focusout":j="blur",b=So;break;case"beforeblur":case"afterblur":b=So;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=nb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=kb;break;case Xx:case Kx:case Qx:b=db;break;case Zx:b=jb;break;case"scroll":case"scrollend":b=sb;break;case"wheel":b=Cb;break;case"copy":case"cut":case"paste":b=ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Qu;break;case"toggle":case"beforetoggle":b=Db}var k=(t&4)!==0,y=!k&&(e==="scroll"||e==="scrollend"),g=k?x!==null?x+"Capture":null:x;k=[];for(var h=c,f;h!==null;){var v=h;if(f=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||f===null||g===null||(v=jl(h,g),v!=null&&k.push(Ml(h,v,f))),y)break;h=h.return}0<k.length&&(x=new b(x,j,null,r,u),m.push({event:x,listeners:k}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",x&&r!==jd&&(j=r.relatedTarget||r.fromElement)&&(Xr(j)||j[Ds]))break e;if((b||x)&&(x=u.window===u?u:(x=u.ownerDocument)?x.defaultView||x.parentWindow:window,b?(j=r.relatedTarget||r.toElement,b=c,j=j?Xr(j):null,j!==null&&(y=ql(j),k=j.tag,j!==y||k!==5&&k!==27&&k!==6)&&(j=null)):(b=null,j=c),b!==j)){if(k=Xu,v="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(k=Qu,v="onPointerLeave",g="onPointerEnter",h="pointer"),y=b==null?x:al(b),f=j==null?x:al(j),x=new k(v,h+"leave",b,r,u),x.target=y,x.relatedTarget=f,v=null,Xr(u)===c&&(k=new k(g,h+"enter",j,r,u),k.target=f,k.relatedTarget=y,v=k),y=v,b&&j)t:{for(k=b,g=j,h=0,f=k;f;f=Hr(f))h++;for(f=0,v=g;v;v=Hr(v))f++;for(;0<h-f;)k=Hr(k),h--;for(;0<f-h;)g=Hr(g),f--;for(;h--;){if(k===g||g!==null&&k===g.alternate)break t;k=Hr(k),g=Hr(g)}k=null}else k=null;b!==null&&F0(m,x,b,k,!1),j!==null&&y!==null&&F0(m,y,j,k,!0)}}e:{if(x=c?al(c):window,b=x.nodeName&&x.nodeName.toLowerCase(),b==="select"||b==="input"&&x.type==="file")var w=e0;else if(Ju(x))if(Vx)w=Hb;else{w=Ob;var D=Lb}else b=x.nodeName,!b||b.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?c&&Tc(c.elementType)&&(w=e0):w=Bb;if(w&&(w=w(e,c))){Fx(m,w,r,u);break e}D&&D(e,x,c),e==="focusout"&&c&&x.type==="number"&&c.memoizedProps.value!=null&&wd(x,"number",x.value)}switch(D=c?al(c):window,e){case"focusin":(Ju(D)||D.contentEditable==="true")&&(Zr=D,Cd=c,il=null);break;case"focusout":il=Cd=Zr=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,l0(m,r,u);break;case"selectionchange":if(_b)break;case"keydown":case"keyup":l0(m,r,u)}var N;if(zc)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Qr?Ux(e,r)&&(C="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(_x&&r.locale!=="ko"&&(Qr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Qr&&(N=$x()):(Fa=u,Mc="value"in Fa?Fa.value:Fa.textContent,Qr=!0)),D=Ni(c,C),0<D.length&&(C=new Ku(C,e,null,r,u),m.push({event:C,listeners:D}),N?C.data=N:(N=qx(r),N!==null&&(C.data=N)))),(N=Rb?Mb(e,r):Eb(e,r))&&(C=Ni(c,"onBeforeInput"),0<C.length&&(D=new Ku("onBeforeInput","beforeinput",null,r,u),m.push({event:D,listeners:C}),D.data=N)),kv(m,e,c,r,u)}Lg(m,t)})}function Ml(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ni(e,t){for(var r=t+"Capture",s=[];e!==null;){var l=e,n=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||n===null||(l=jl(e,r),l!=null&&s.unshift(Ml(e,l,n)),l=jl(e,t),l!=null&&s.push(Ml(e,l,n))),e.tag===3)return s;e=e.return}return[]}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,t,r,s,l){for(var n=t._reactName,i=[];r!==null&&r!==s;){var o=r,d=o.alternate,c=o.stateNode;if(o=o.tag,d!==null&&d===s)break;o!==5&&o!==26&&o!==27||c===null||(d=c,l?(c=jl(r,n),c!=null&&i.unshift(Ml(r,c,d))):l||(c=jl(r,n),c!=null&&i.push(Ml(r,c,d)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Cv=/\r\n?/g,Sv=/\u0000|\uFFFD/g;function V0(e){return(typeof e=="string"?e:""+e).replace(Cv,`
`).replace(Sv,"")}function Bg(e,t){return t=V0(t),V0(e)===t}function ro(){}function ae(e,t,r,s,l,n){switch(r){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||gs(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&gs(e,""+s);break;case"className":vn(e,"class",s);break;case"tabIndex":vn(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":vn(e,r,s);break;case"style":Bx(e,s,n);break;case"data":if(t!=="object"){vn(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Un(""+s),e.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(t!=="input"&&ae(e,t,"name",l.name,l,null),ae(e,t,"formEncType",l.formEncType,l,null),ae(e,t,"formMethod",l.formMethod,l,null),ae(e,t,"formTarget",l.formTarget,l,null)):(ae(e,t,"encType",l.encType,l,null),ae(e,t,"method",l.method,l,null),ae(e,t,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Un(""+s),e.setAttribute(r,s);break;case"onClick":s!=null&&(e.onclick=ro);break;case"onScroll":s!=null&&I("scroll",e);break;case"onScrollEnd":s!=null&&I("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(M(61));if(r=s.__html,r!=null){if(l.children!=null)throw Error(M(60));e.innerHTML=r}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}r=Un(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""+s):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":s===!0?e.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,s):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(r,s):e.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(r):e.setAttribute(r,s);break;case"popover":I("beforetoggle",e),I("toggle",e),_n(e,"popover",s);break;case"xlinkActuate":na(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":na(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":na(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":na(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":na(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":na(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":na(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":_n(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ab.get(r)||r,_n(e,r,s))}}function Zd(e,t,r,s,l,n){switch(r){case"style":Bx(e,s,n);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(M(61));if(r=s.__html,r!=null){if(l.children!=null)throw Error(M(60));e.innerHTML=r}}break;case"children":typeof s=="string"?gs(e,s):(typeof s=="number"||typeof s=="bigint")&&gs(e,""+s);break;case"onScroll":s!=null&&I("scroll",e);break;case"onScrollEnd":s!=null&&I("scrollend",e);break;case"onClick":s!=null&&(e.onclick=ro);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mx.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(l=r.endsWith("Capture"),t=r.slice(2,l?r.length-7:void 0),n=e[et]||null,n=n!=null?n[r]:null,typeof n=="function"&&e.removeEventListener(t,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,s,l);break e}r in e?e[r]=s:s===!0?e.setAttribute(r,""):_n(e,r,s)}}}function qe(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":I("error",e),I("load",e);var s=!1,l=!1,n;for(n in r)if(r.hasOwnProperty(n)){var i=r[n];if(i!=null)switch(n){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(M(137,t));default:ae(e,t,n,i,r,null)}}l&&ae(e,t,"srcSet",r.srcSet,r,null),s&&ae(e,t,"src",r.src,r,null);return;case"input":I("invalid",e);var o=n=i=l=null,d=null,c=null;for(s in r)if(r.hasOwnProperty(s)){var u=r[s];if(u!=null)switch(s){case"name":l=u;break;case"type":i=u;break;case"checked":d=u;break;case"defaultChecked":c=u;break;case"value":n=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(M(137,t));break;default:ae(e,t,s,u,r,null)}}Ax(e,n,o,d,c,i,l,!1),li(e);return;case"select":I("invalid",e),s=i=n=null;for(l in r)if(r.hasOwnProperty(l)&&(o=r[l],o!=null))switch(l){case"value":n=o;break;case"defaultValue":i=o;break;case"multiple":s=o;default:ae(e,t,l,o,r,null)}t=n,r=i,e.multiple=!!s,t!=null?ls(e,!!s,t,!1):r!=null&&ls(e,!!s,r,!0);return;case"textarea":I("invalid",e),n=l=s=null;for(i in r)if(r.hasOwnProperty(i)&&(o=r[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":l=o;break;case"children":n=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(M(91));break;default:ae(e,t,i,o,r,null)}Ox(e,s,l,n),li(e);return;case"option":for(d in r)if(r.hasOwnProperty(d)&&(s=r[d],s!=null))switch(d){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ae(e,t,d,s,r,null)}return;case"dialog":I("beforetoggle",e),I("toggle",e),I("cancel",e),I("close",e);break;case"iframe":case"object":I("load",e);break;case"video":case"audio":for(s=0;s<Rl.length;s++)I(Rl[s],e);break;case"image":I("error",e),I("load",e);break;case"details":I("toggle",e);break;case"embed":case"source":case"link":I("error",e),I("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in r)if(r.hasOwnProperty(c)&&(s=r[c],s!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(M(137,t));default:ae(e,t,c,s,r,null)}return;default:if(Tc(t)){for(u in r)r.hasOwnProperty(u)&&(s=r[u],s!==void 0&&Zd(e,t,u,s,r,void 0));return}}for(o in r)r.hasOwnProperty(o)&&(s=r[o],s!=null&&ae(e,t,o,s,r,null))}function Dv(e,t,r,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,n=null,i=null,o=null,d=null,c=null,u=null;for(b in r){var m=r[b];if(r.hasOwnProperty(b)&&m!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":d=m;default:s.hasOwnProperty(b)||ae(e,t,b,null,s,m)}}for(var x in s){var b=s[x];if(m=r[x],s.hasOwnProperty(x)&&(b!=null||m!=null))switch(x){case"type":n=b;break;case"name":l=b;break;case"checked":c=b;break;case"defaultChecked":u=b;break;case"value":i=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(M(137,t));break;default:b!==m&&ae(e,t,x,b,s,m)}}kd(e,i,o,d,c,u,n,l);return;case"select":b=i=o=x=null;for(n in r)if(d=r[n],r.hasOwnProperty(n)&&d!=null)switch(n){case"value":break;case"multiple":b=d;default:s.hasOwnProperty(n)||ae(e,t,n,null,s,d)}for(l in s)if(n=s[l],d=r[l],s.hasOwnProperty(l)&&(n!=null||d!=null))switch(l){case"value":x=n;break;case"defaultValue":o=n;break;case"multiple":i=n;default:n!==d&&ae(e,t,l,n,s,d)}t=o,r=i,s=b,x!=null?ls(e,!!r,x,!1):!!s!=!!r&&(t!=null?ls(e,!!r,t,!0):ls(e,!!r,r?[]:"",!1));return;case"textarea":b=x=null;for(o in r)if(l=r[o],r.hasOwnProperty(o)&&l!=null&&!s.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ae(e,t,o,null,s,l)}for(i in s)if(l=s[i],n=r[i],s.hasOwnProperty(i)&&(l!=null||n!=null))switch(i){case"value":x=l;break;case"defaultValue":b=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(M(91));break;default:l!==n&&ae(e,t,i,l,s,n)}Lx(e,x,b);return;case"option":for(var j in r)if(x=r[j],r.hasOwnProperty(j)&&x!=null&&!s.hasOwnProperty(j))switch(j){case"selected":e.selected=!1;break;default:ae(e,t,j,null,s,x)}for(d in s)if(x=s[d],b=r[d],s.hasOwnProperty(d)&&x!==b&&(x!=null||b!=null))switch(d){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:ae(e,t,d,x,s,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var k in r)x=r[k],r.hasOwnProperty(k)&&x!=null&&!s.hasOwnProperty(k)&&ae(e,t,k,null,s,x);for(c in s)if(x=s[c],b=r[c],s.hasOwnProperty(c)&&x!==b&&(x!=null||b!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(M(137,t));break;default:ae(e,t,c,x,s,b)}return;default:if(Tc(t)){for(var y in r)x=r[y],r.hasOwnProperty(y)&&x!==void 0&&!s.hasOwnProperty(y)&&Zd(e,t,y,void 0,s,x);for(u in s)x=s[u],b=r[u],!s.hasOwnProperty(u)||x===b||x===void 0&&b===void 0||Zd(e,t,u,x,s,b);return}}for(var g in r)x=r[g],r.hasOwnProperty(g)&&x!=null&&!s.hasOwnProperty(g)&&ae(e,t,g,null,s,x);for(m in s)x=s[m],b=r[m],!s.hasOwnProperty(m)||x===b||x==null&&b==null||ae(e,t,m,x,s,b)}var Wd=null,Jd=null;function Ci(e){return e.nodeType===9?e:e.ownerDocument}function I0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=null;function Tv(){var e=window.event;return e&&e.type==="popstate"?e===Zo?!1:(Zo=e,!0):(Zo=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,G0=typeof Promise=="function"?Promise:void 0,Mv=typeof queueMicrotask=="function"?queueMicrotask:typeof G0<"u"?function(e){return G0.resolve(null).then(e).catch(Ev)}:$g;function Ev(e){setTimeout(function(){throw e})}function rr(e){return e==="head"}function P0(e,t){var r=t,s=0,l=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(0<s&&8>s){r=s;var i=e.ownerDocument;if(r&1&&bl(i.documentElement),r&2&&bl(i.body),r&4)for(r=i.head,bl(r),i=r.firstChild;i;){var o=i.nextSibling,d=i.nodeName;i[Gl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||r.removeChild(i),i=o}}if(l===0){e.removeChild(n),Ol(t);return}l--}else r==="$"||r==="$?"||r==="$!"?l++:s=r.charCodeAt(0)-48;else s=0;r=n}while(r);Ol(t)}function tc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":tc(r),Dc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function zv(e,t,r,s){for(;e.nodeType===1;){var l=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Gl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function Av(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Lt(e.nextSibling),e===null))return null;return e}function ac(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Lv(e,t){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")t();else{var s=function(){t(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var rc=null;function Y0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}function _g(e,t,r){switch(t=Ci(r),e){case"html":if(e=t.documentElement,!e)throw Error(M(452));return e;case"head":if(e=t.head,!e)throw Error(M(453));return e;case"body":if(e=t.body,!e)throw Error(M(454));return e;default:throw Error(M(451))}}function bl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Dc(e)}var Tt=new Map,X0=new Set;function Si(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Na=J.d;J.d={f:Ov,r:Bv,D:Hv,C:$v,L:_v,m:Uv,X:Fv,S:qv,M:Vv};function Ov(){var e=Na.f(),t=eo();return e||t}function Bv(e){var t=Ts(e);t!==null&&t.tag===5&&t.type==="form"?zp(t):Na.r(e)}var Es=typeof document>"u"?null:document;function Ug(e,t,r){var s=Es;if(s&&typeof t=="string"&&t){var l=Nt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof r=="string"&&(l+='[crossorigin="'+r+'"]'),X0.has(l)||(X0.add(l),e={rel:e,crossOrigin:r,href:t},s.querySelector(l)===null&&(t=s.createElement("link"),qe(t,"link",e),Le(t),s.head.appendChild(t)))}}function Hv(e){Na.D(e),Ug("dns-prefetch",e,null)}function $v(e,t){Na.C(e,t),Ug("preconnect",e,t)}function _v(e,t,r){Na.L(e,t,r);var s=Es;if(s&&e&&t){var l='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&r&&r.imageSrcSet?(l+='[imagesrcset="'+Nt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(l+='[imagesizes="'+Nt(r.imageSizes)+'"]')):l+='[href="'+Nt(e)+'"]';var n=l;switch(t){case"style":n=js(e);break;case"script":n=zs(e)}Tt.has(n)||(e=ue({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),Tt.set(n,e),s.querySelector(l)!==null||t==="style"&&s.querySelector(tn(n))||t==="script"&&s.querySelector(an(n))||(t=s.createElement("link"),qe(t,"link",e),Le(t),s.head.appendChild(t)))}}function Uv(e,t){Na.m(e,t);var r=Es;if(r&&e){var s=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Nt(s)+'"][href="'+Nt(e)+'"]',n=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=zs(e)}if(!Tt.has(n)&&(e=ue({rel:"modulepreload",href:e},t),Tt.set(n,e),r.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(an(n)))return}s=r.createElement("link"),qe(s,"link",e),Le(s),r.head.appendChild(s)}}}function qv(e,t,r){Na.S(e,t,r);var s=Es;if(s&&e){var l=ss(s).hoistableStyles,n=js(e);t=t||"default";var i=l.get(n);if(!i){var o={loading:0,preload:null};if(i=s.querySelector(tn(n)))o.loading=5;else{e=ue({rel:"stylesheet",href:e,"data-precedence":t},r),(r=Tt.get(n))&&cu(e,r);var d=i=s.createElement("link");Le(d),qe(d,"link",e),d._p=new Promise(function(c,u){d.onload=c,d.onerror=u}),d.addEventListener("load",function(){o.loading|=1}),d.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Kn(i,t,s)}i={type:"stylesheet",instance:i,count:1,state:o},l.set(n,i)}}}function Fv(e,t){Na.X(e,t);var r=Es;if(r&&e){var s=ss(r).hoistableScripts,l=zs(e),n=s.get(l);n||(n=r.querySelector(an(l)),n||(e=ue({src:e,async:!0},t),(t=Tt.get(l))&&uu(e,t),n=r.createElement("script"),Le(n),qe(n,"link",e),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},s.set(l,n))}}function Vv(e,t){Na.M(e,t);var r=Es;if(r&&e){var s=ss(r).hoistableScripts,l=zs(e),n=s.get(l);n||(n=r.querySelector(an(l)),n||(e=ue({src:e,async:!0,type:"module"},t),(t=Tt.get(l))&&uu(e,t),n=r.createElement("script"),Le(n),qe(n,"link",e),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},s.set(l,n))}}function K0(e,t,r,s){var l=(l=Ga.current)?Si(l):null;if(!l)throw Error(M(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=js(r.href),r=ss(l).hoistableStyles,s=r.get(t),s||(s={type:"style",instance:null,count:0,state:null},r.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=js(r.href);var n=ss(l).hoistableStyles,i=n.get(e);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,i),(n=l.querySelector(tn(e)))&&!n._p&&(i.instance=n,i.state.loading=5),Tt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Tt.set(e,r),n||Iv(l,e,r,i.state))),t&&s===null)throw Error(M(528,""));return i}if(t&&s!==null)throw Error(M(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zs(r),r=ss(l).hoistableScripts,s=r.get(t),s||(s={type:"script",instance:null,count:0,state:null},r.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(M(444,e))}}function js(e){return'href="'+Nt(e)+'"'}function tn(e){return'link[rel="stylesheet"]['+e+"]"}function qg(e){return ue({},e,{"data-precedence":e.precedence,precedence:null})}function Iv(e,t,r,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),qe(t,"link",r),Le(t),e.head.appendChild(t))}function zs(e){return'[src="'+Nt(e)+'"]'}function an(e){return"script[async]"+e}function Q0(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Nt(r.href)+'"]');if(s)return t.instance=s,Le(s),s;var l=ue({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Le(s),qe(s,"style",l),Kn(s,r.precedence,e),t.instance=s;case"stylesheet":l=js(r.href);var n=e.querySelector(tn(l));if(n)return t.state.loading|=4,t.instance=n,Le(n),n;s=qg(r),(l=Tt.get(l))&&cu(s,l),n=(e.ownerDocument||e).createElement("link"),Le(n);var i=n;return i._p=new Promise(function(o,d){i.onload=o,i.onerror=d}),qe(n,"link",s),t.state.loading|=4,Kn(n,r.precedence,e),t.instance=n;case"script":return n=zs(r.src),(l=e.querySelector(an(n)))?(t.instance=l,Le(l),l):(s=r,(l=Tt.get(n))&&(s=ue({},r),uu(s,l)),e=e.ownerDocument||e,l=e.createElement("script"),Le(l),qe(l,"link",s),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(M(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(s=t.instance,t.state.loading|=4,Kn(s,r.precedence,e));return t.instance}function Kn(e,t,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,n=l,i=0;i<s.length;i++){var o=s[i];if(o.dataset.precedence===t)n=o;else if(n!==l)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function cu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qn=null;function Z0(e,t,r){if(Qn===null){var s=new Map,l=Qn=new Map;l.set(r,s)}else l=Qn,s=l.get(r),s||(s=new Map,l.set(r,s));if(s.has(e))return s;for(s.set(e,null),r=r.getElementsByTagName(e),l=0;l<r.length;l++){var n=r[l];if(!(n[Gl]||n[Ve]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(t)||"";i=e+i;var o=s.get(i);o?o.push(n):s.set(i,[n])}}return s}function W0(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function Gv(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fg(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var El=null;function Pv(){}function Yv(e,t,r){if(El===null)throw Error(M(475));var s=El;if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var l=js(r.href),n=e.querySelector(tn(l));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Di.bind(s),e.then(s,s)),t.state.loading|=4,t.instance=n,Le(n);return}n=e.ownerDocument||e,r=qg(r),(l=Tt.get(l))&&cu(r,l),n=n.createElement("link"),Le(n);var i=n;i._p=new Promise(function(o,d){i.onload=o,i.onerror=d}),qe(n,"link",r),t.instance=n}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(s.count++,t=Di.bind(s),e.addEventListener("load",t),e.addEventListener("error",t))}}function Xv(){if(El===null)throw Error(M(475));var e=El;return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Di(){if(this.count--,this.count===0){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ti=null;function sc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ti=new Map,t.forEach(Kv,e),Ti=null,Di.call(e))}function Kv(e,t){if(!(t.state.loading&4)){var r=Ti.get(e);if(r)var s=r.get(null);else{r=new Map,Ti.set(e,r);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<l.length;n++){var i=l[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(r.set(i.dataset.precedence,i),s=i)}s&&r.set(null,s)}l=t.instance,i=l.getAttribute("data-precedence"),n=r.get(i)||s,n===s&&r.set(null,l),r.set(i,l),this.count++,s=Di.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),n?n.parentNode.insertBefore(l,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var zl={$$typeof:ca,Provider:null,Consumer:null,_currentValue:mr,_currentValue2:mr,_threadCount:0};function Qv(e,t,r,s,l,n,i,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.hiddenUpdates=vo(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Vg(e,t,r,s,l,n,i,o,d,c,u,m){return e=new Qv(e,t,r,i,o,d,c,m),t=1,n===!0&&(t|=24),n=dt(3,null,null,t),e.current=n,n.stateNode=e,t=_c(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:s,isDehydrated:r,cache:t},qc(n),e}function Ig(e){return e?(e=es,e):es}function Gg(e,t,r,s,l,n){l=Ig(l),s.context===null?s.context=l:s.pendingContext=l,s=Pa(t),s.payload={element:r},n=n===void 0?null:n,n!==null&&(s.callback=n),r=Ya(e,s,t),r!==null&&(xt(r,e,t),cl(r,e,t))}function J0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function mu(e,t){J0(e,t),(e=e.alternate)&&J0(e,t)}function Pg(e){if(e.tag===13){var t=Rs(e,67108864);t!==null&&xt(t,e,67108864),mu(e,67108864)}}var Ri=!0;function Zv(e,t,r,s){var l=q.T;q.T=null;var n=J.p;try{J.p=2,xu(e,t,r,s)}finally{J.p=n,q.T=l}}function Wv(e,t,r,s){var l=q.T;q.T=null;var n=J.p;try{J.p=8,xu(e,t,r,s)}finally{J.p=n,q.T=l}}function xu(e,t,r,s){if(Ri){var l=lc(s);if(l===null)Qo(e,t,s,Mi,r),em(e,s);else if(ey(l,e,t,r,s))s.stopPropagation();else if(em(e,s),t&4&&-1<Jv.indexOf(e)){for(;l!==null;){var n=Ts(l);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=or(n.pendingLanes);if(i!==0){var o=n;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var d=1<<31-ut(i);o.entanglements[1]|=d,i&=~d}Zt(n),!(te&6)&&(yi=Yt()+500,en(0,!1))}}break;case 13:o=Rs(n,2),o!==null&&xt(o,n,2),eo(),mu(n,2)}if(n=lc(s),n===null&&Qo(e,t,s,Mi,r),n===l)break;l=n}l!==null&&s.stopPropagation()}else Qo(e,t,s,null,r)}}function lc(e){return e=Rc(e),pu(e)}var Mi=null;function pu(e){if(Mi=null,e=Xr(e),e!==null){var t=ql(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=hx(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Mi=e,null}function Yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($h()){case kx:return 2;case wx:return 8;case si:case _h:return 32;case jx:return 268435456;default:return 32}default:return 32}}var nc=!1,Qa=null,Za=null,Wa=null,Al=new Map,Ll=new Map,Ua=[],Jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function em(e,t){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(t.pointerId)}}function Qs(e,t,r,s,l,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:n,targetContainers:[l]},t!==null&&(t=Ts(t),t!==null&&Pg(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ey(e,t,r,s,l){switch(t){case"focusin":return Qa=Qs(Qa,e,t,r,s,l),!0;case"dragenter":return Za=Qs(Za,e,t,r,s,l),!0;case"mouseover":return Wa=Qs(Wa,e,t,r,s,l),!0;case"pointerover":var n=l.pointerId;return Al.set(n,Qs(Al.get(n)||null,e,t,r,s,l)),!0;case"gotpointercapture":return n=l.pointerId,Ll.set(n,Qs(Ll.get(n)||null,e,t,r,s,l)),!0}return!1}function Xg(e){var t=Xr(e.target);if(t!==null){var r=ql(t);if(r!==null){if(t=r.tag,t===13){if(t=hx(r),t!==null){e.blockedOn=t,Yh(e.priority,function(){if(r.tag===13){var s=mt();s=Cc(s);var l=Rs(r,s);l!==null&&xt(l,r,s),mu(r,s)}});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=lc(e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);jd=s,r.target.dispatchEvent(s),jd=null}else return t=Ts(r),t!==null&&Pg(t),e.blockedOn=r,!1;t.shift()}return!0}function tm(e,t,r){Zn(e)&&r.delete(t)}function ty(){nc=!1,Qa!==null&&Zn(Qa)&&(Qa=null),Za!==null&&Zn(Za)&&(Za=null),Wa!==null&&Zn(Wa)&&(Wa=null),Al.forEach(tm),Ll.forEach(tm)}function Dn(e,t){e.blockedOn===t&&(e.blockedOn=null,nc||(nc=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,ty)))}var Tn=null;function am(e){Tn!==e&&(Tn=e,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,function(){Tn===e&&(Tn=null);for(var t=0;t<e.length;t+=3){var r=e[t],s=e[t+1],l=e[t+2];if(typeof s!="function"){if(pu(s||r)===null)continue;break}var n=Ts(r);n!==null&&(e.splice(t,3),t-=3,_d(n,{pending:!0,data:l,method:r.method,action:s},s,l))}}))}function Ol(e){function t(d){return Dn(d,e)}Qa!==null&&Dn(Qa,e),Za!==null&&Dn(Za,e),Wa!==null&&Dn(Wa,e),Al.forEach(t),Ll.forEach(t);for(var r=0;r<Ua.length;r++){var s=Ua[r];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ua.length&&(r=Ua[0],r.blockedOn===null);)Xg(r),r.blockedOn===null&&Ua.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var l=r[s],n=r[s+1],i=l[et]||null;if(typeof n=="function")i||am(r);else if(i){var o=null;if(n&&n.hasAttribute("formAction")){if(l=n,i=n[et]||null)o=i.formAction;else if(pu(l)!==null)continue}else o=i.action;typeof o=="function"?r[s+1]=o:(r.splice(s,3),s-=3),am(r)}}}function gu(e){this._internalRoot=e}so.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));var r=t.current,s=mt();Gg(r,s,e,t,null,null)};so.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gg(e.current,2,null,e,null,null),eo(),t[Ds]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tx();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ua.length&&t!==0&&t<Ua[r].priority;r++);Ua.splice(r,0,e),r===0&&Xg(e)}};var rm=gx.version;if(rm!=="19.1.1")throw Error(M(527,rm,"19.1.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Eh(t),e=e!==null?bx(e):null,e=e===null?null:e.stateNode,e};var ay={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rn.isDisabled&&Rn.supportsFiber)try{Fl=Rn.inject(ay),ct=Rn}catch{}}Fi.createRoot=function(e,t){if(!fx(e))throw Error(M(299));var r=!1,s="",l=Vp,n=Ip,i=Gp,o=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=Vg(e,1,!1,null,null,r,s,l,n,i,o,null),e[Ds]=t.current,du(e),new gu(t)};Fi.hydrateRoot=function(e,t,r){if(!fx(e))throw Error(M(299));var s=!1,l="",n=Vp,i=Ip,o=Gp,d=null,c=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(i=r.onCaughtError),r.onRecoverableError!==void 0&&(o=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(d=r.unstable_transitionCallbacks),r.formState!==void 0&&(c=r.formState)),t=Vg(e,1,!0,t,r??null,s,l,n,i,o,d,c),t.context=Ig(null),r=t.current,s=mt(),s=Cc(s),l=Pa(s),l.callback=null,Ya(r,l,s),r=s,t.current.lanes=r,Il(t,r),Zt(t),e[Ds]=t.current,du(e),new so(t)};Fi.version="19.1.1";function Kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kg)}catch(e){console.error(e)}}Kg(),dx.exports=Fi;var ry=dx.exports;const sy="modulepreload",ly=function(e){return"/tailwind-kit/"+e},sm={},ny=function(t,r,s){if(!r||r.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=ly(n),n in sm)return;sm[n]=!0;const i=n.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(!!s)for(let u=l.length-1;u>=0;u--){const m=l[u];if(m.href===n&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${o}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":sy,i||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),i)return new Promise((u,m)=>{c.addEventListener("load",u),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})};var lm="popstate";function iy(e={}){function t(s,l){let{pathname:n,search:i,hash:o}=s.location;return ic("",{pathname:n,search:i,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(s,l){return typeof l=="string"?l:Bl(l)}return dy(t,r,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Kt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function oy(){return Math.random().toString(36).substring(2,10)}function nm(e,t){return{usr:e.state,key:e.key,idx:t}}function ic(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?As(t):t,state:r,key:t&&t.key||s||oy()}}function Bl({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function As(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function dy(e,t,r,s={}){let{window:l=document.defaultView,v5Compat:n=!1}=s,i=l.history,o="POP",d=null,c=u();c==null&&(c=0,i.replaceState({...i.state,idx:c},""));function u(){return(i.state||{idx:null}).idx}function m(){o="POP";let y=u(),g=y==null?null:y-c;c=y,d&&d({action:o,location:k.location,delta:g})}function x(y,g){o="PUSH";let h=ic(k.location,y,g);r&&r(h,y),c=u()+1;let f=nm(h,c),v=k.createHref(h);try{i.pushState(f,"",v)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;l.location.assign(v)}n&&d&&d({action:o,location:k.location,delta:1})}function b(y,g){o="REPLACE";let h=ic(k.location,y,g);r&&r(h,y),c=u();let f=nm(h,c),v=k.createHref(h);i.replaceState(f,"",v),n&&d&&d({action:o,location:k.location,delta:0})}function j(y){return cy(y)}let k={get action(){return o},get location(){return e(l,i)},listen(y){if(d)throw new Error("A history only accepts one active listener");return l.addEventListener(lm,m),d=y,()=>{l.removeEventListener(lm,m),d=null}},createHref(y){return t(l,y)},createURL:j,encodeLocation(y){let g=j(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:x,replace:b,go(y){return i.go(y)}};return k}function cy(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),he(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Bl(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Qg(e,t,r="/"){return uy(e,t,r,!1)}function uy(e,t,r,s){let l=typeof t=="string"?As(t):t,n=ja(l.pathname||"/",r);if(n==null)return null;let i=Zg(e);my(i);let o=null;for(let d=0;o==null&&d<i.length;++d){let c=jy(n);o=ky(i[d],c,s)}return o}function Zg(e,t=[],r=[],s="",l=!1){let n=(i,o,d=l,c)=>{let u={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};if(u.relativePath.startsWith("/")){if(!u.relativePath.startsWith(s)&&d)return;he(u.relativePath.startsWith(s),`Absolute route path "${u.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(s.length)}let m=ba([s,u.relativePath]),x=r.concat(u);i.children&&i.children.length>0&&(he(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Zg(i.children,t,x,m,d)),!(i.path==null&&!i.index)&&t.push({path:m,score:vy(m,i.index),routesMeta:x})};return e.forEach((i,o)=>{var d;if(i.path===""||!((d=i.path)!=null&&d.includes("?")))n(i,o);else for(let c of Wg(i.path))n(i,o,!0,c)}),t}function Wg(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,l=r.endsWith("?"),n=r.replace(/\?$/,"");if(s.length===0)return l?[n,""]:[n];let i=Wg(s.join("/")),o=[];return o.push(...i.map(d=>d===""?n:[n,d].join("/"))),l&&o.push(...i),o.map(d=>e.startsWith("/")&&d===""?"/":d)}function my(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:yy(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var xy=/^:[\w-]+$/,py=3,gy=2,fy=1,hy=10,by=-2,im=e=>e==="*";function vy(e,t){let r=e.split("/"),s=r.length;return r.some(im)&&(s+=by),t&&(s+=gy),r.filter(l=>!im(l)).reduce((l,n)=>l+(xy.test(n)?py:n===""?fy:hy),s)}function yy(e,t){return e.length===t.length&&e.slice(0,-1).every((s,l)=>s===t[l])?e[e.length-1]-t[t.length-1]:0}function ky(e,t,r=!1){let{routesMeta:s}=e,l={},n="/",i=[];for(let o=0;o<s.length;++o){let d=s[o],c=o===s.length-1,u=n==="/"?t:t.slice(n.length)||"/",m=Ei({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},u),x=d.route;if(!m&&c&&r&&!s[s.length-1].route.index&&(m=Ei({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},u)),!m)return null;Object.assign(l,m.params),i.push({params:l,pathname:ba([n,m.pathname]),pathnameBase:Dy(ba([n,m.pathnameBase])),route:x}),m.pathnameBase!=="/"&&(n=ba([n,m.pathnameBase]))}return i}function Ei(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=wy(e.path,e.caseSensitive,e.end),l=t.match(r);if(!l)return null;let n=l[0],i=n.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:s.reduce((c,{paramName:u,isOptional:m},x)=>{if(u==="*"){let j=o[x]||"";i=n.slice(0,n.length-j.length).replace(/(.)\/+$/,"$1")}const b=o[x];return m&&!b?c[u]=void 0:c[u]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:n,pathnameBase:i,pattern:e}}function wy(e,t=!1,r=!0){Kt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,o,d)=>(s.push({paramName:o,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(s.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function jy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Kt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ja(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function Ny(e,t="/"){let{pathname:r,search:s="",hash:l=""}=typeof e=="string"?As(e):e;return{pathname:r?r.startsWith("/")?r:Cy(r,t):t,search:Ty(s),hash:Ry(l)}}function Cy(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Wo(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sy(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Jg(e){let t=Sy(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function ef(e,t,r,s=!1){let l;typeof e=="string"?l=As(e):(l={...e},he(!l.pathname||!l.pathname.includes("?"),Wo("?","pathname","search",l)),he(!l.pathname||!l.pathname.includes("#"),Wo("#","pathname","hash",l)),he(!l.search||!l.search.includes("#"),Wo("#","search","hash",l)));let n=e===""||l.pathname==="",i=n?"/":l.pathname,o;if(i==null)o=r;else{let m=t.length-1;if(!s&&i.startsWith("..")){let x=i.split("/");for(;x[0]==="..";)x.shift(),m-=1;l.pathname=x.join("/")}o=m>=0?t[m]:"/"}let d=Ny(l,o),c=i&&i!=="/"&&i.endsWith("/"),u=(n||i===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||u)&&(d.pathname+="/"),d}var ba=e=>e.join("/").replace(/\/\/+/g,"/"),Dy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ty=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ry=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function My(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var tf=["POST","PUT","PATCH","DELETE"];new Set(tf);var Ey=["GET",...tf];new Set(Ey);var Ls=p.createContext(null);Ls.displayName="DataRouter";var lo=p.createContext(null);lo.displayName="DataRouterState";p.createContext(!1);var af=p.createContext({isTransitioning:!1});af.displayName="ViewTransition";var zy=p.createContext(new Map);zy.displayName="Fetchers";var Ay=p.createContext(null);Ay.displayName="Await";var Wt=p.createContext(null);Wt.displayName="Navigation";var rn=p.createContext(null);rn.displayName="Location";var Ca=p.createContext({outlet:null,matches:[],isDataRoute:!1});Ca.displayName="Route";var fu=p.createContext(null);fu.displayName="RouteError";function Ly(e,{relative:t}={}){he(sn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=p.useContext(Wt),{hash:l,pathname:n,search:i}=ln(e,{relative:t}),o=n;return r!=="/"&&(o=n==="/"?r:ba([r,n])),s.createHref({pathname:o,search:i,hash:l})}function sn(){return p.useContext(rn)!=null}function Rt(){return he(sn(),"useLocation() may be used only in the context of a <Router> component."),p.useContext(rn).location}var rf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sf(e){p.useContext(Wt).static||p.useLayoutEffect(e)}function lf(){let{isDataRoute:e}=p.useContext(Ca);return e?Yy():Oy()}function Oy(){he(sn(),"useNavigate() may be used only in the context of a <Router> component.");let e=p.useContext(Ls),{basename:t,navigator:r}=p.useContext(Wt),{matches:s}=p.useContext(Ca),{pathname:l}=Rt(),n=JSON.stringify(Jg(s)),i=p.useRef(!1);return sf(()=>{i.current=!0}),p.useCallback((d,c={})=>{if(Kt(i.current,rf),!i.current)return;if(typeof d=="number"){r.go(d);return}let u=ef(d,JSON.parse(n),l,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:ba([t,u.pathname])),(c.replace?r.replace:r.push)(u,c.state,c)},[t,r,n,l,e])}p.createContext(null);function ln(e,{relative:t}={}){let{matches:r}=p.useContext(Ca),{pathname:s}=Rt(),l=JSON.stringify(Jg(r));return p.useMemo(()=>ef(e,JSON.parse(l),s,t==="path"),[e,l,s,t])}function By(e,t){return nf(e,t)}function nf(e,t,r,s,l){var h;he(sn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=p.useContext(Wt),{matches:i}=p.useContext(Ca),o=i[i.length-1],d=o?o.params:{},c=o?o.pathname:"/",u=o?o.pathnameBase:"/",m=o&&o.route;{let f=m&&m.path||"";of(c,!m||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let x=Rt(),b;if(t){let f=typeof t=="string"?As(t):t;he(u==="/"||((h=f.pathname)==null?void 0:h.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${f.pathname}" was given in the \`location\` prop.`),b=f}else b=x;let j=b.pathname||"/",k=j;if(u!=="/"){let f=u.replace(/^\//,"").split("/");k="/"+j.replace(/^\//,"").split("/").slice(f.length).join("/")}let y=Qg(e,{pathname:k});Kt(m||y!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Kt(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=qy(y&&y.map(f=>Object.assign({},f,{params:Object.assign({},d,f.params),pathname:ba([u,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:ba([u,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),i,r,s,l);return t&&g?p.createElement(rn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},g):g}function Hy(){let e=Py(),t=My(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},n={padding:"2px 4px",backgroundColor:s},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=p.createElement(p.Fragment,null,p.createElement("p",null,"💿 Hey developer 👋"),p.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",p.createElement("code",{style:n},"ErrorBoundary")," or"," ",p.createElement("code",{style:n},"errorElement")," prop on your route.")),p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},t),r?p.createElement("pre",{style:l},r):null,i)}var $y=p.createElement(Hy,null),_y=class extends p.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?p.createElement(Ca.Provider,{value:this.props.routeContext},p.createElement(fu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Uy({routeContext:e,match:t,children:r}){let s=p.useContext(Ls);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),p.createElement(Ca.Provider,{value:e},r)}function qy(e,t=[],r=null,s=null,l=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,i=r==null?void 0:r.errors;if(i!=null){let c=n.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);he(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),n=n.slice(0,Math.min(n.length,c+1))}let o=!1,d=-1;if(r)for(let c=0;c<n.length;c++){let u=n[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=c),u.route.id){let{loaderData:m,errors:x}=r,b=u.route.loader&&!m.hasOwnProperty(u.route.id)&&(!x||x[u.route.id]===void 0);if(u.route.lazy||b){o=!0,d>=0?n=n.slice(0,d+1):n=[n[0]];break}}}return n.reduceRight((c,u,m)=>{let x,b=!1,j=null,k=null;r&&(x=i&&u.route.id?i[u.route.id]:void 0,j=u.route.errorElement||$y,o&&(d<0&&m===0?(of("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,k=null):d===m&&(b=!0,k=u.route.hydrateFallbackElement||null)));let y=t.concat(n.slice(0,m+1)),g=()=>{let h;return x?h=j:b?h=k:u.route.Component?h=p.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=c,p.createElement(Uy,{match:u,routeContext:{outlet:c,matches:y,isDataRoute:r!=null},children:h})};return r&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?p.createElement(_y,{location:r.location,revalidation:r.revalidation,component:j,error:x,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:s}):g()},null)}function hu(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fy(e){let t=p.useContext(Ls);return he(t,hu(e)),t}function Vy(e){let t=p.useContext(lo);return he(t,hu(e)),t}function Iy(e){let t=p.useContext(Ca);return he(t,hu(e)),t}function bu(e){let t=Iy(e),r=t.matches[t.matches.length-1];return he(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Gy(){return bu("useRouteId")}function Py(){var s;let e=p.useContext(fu),t=Vy("useRouteError"),r=bu("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function Yy(){let{router:e}=Fy("useNavigate"),t=bu("useNavigate"),r=p.useRef(!1);return sf(()=>{r.current=!0}),p.useCallback(async(l,n={})=>{Kt(r.current,rf),r.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:t,...n}))},[e,t])}var om={};function of(e,t,r){!t&&!om[e]&&(om[e]=!0,Kt(!1,r))}p.memo(Xy);function Xy({routes:e,future:t,state:r,unstable_onError:s}){return nf(e,void 0,r,s,t)}function Z(e){he(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ky({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:l,static:n=!1}){he(!sn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),o=p.useMemo(()=>({basename:i,navigator:l,static:n,future:{}}),[i,l,n]);typeof r=="string"&&(r=As(r));let{pathname:d="/",search:c="",hash:u="",state:m=null,key:x="default"}=r,b=p.useMemo(()=>{let j=ja(d,i);return j==null?null:{location:{pathname:j,search:c,hash:u,state:m,key:x},navigationType:s}},[i,d,c,u,m,x,s]);return Kt(b!=null,`<Router basename="${i}"> is not able to match the URL "${d}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:p.createElement(Wt.Provider,{value:o},p.createElement(rn.Provider,{children:t,value:b}))}function Qy({children:e,location:t}){return By(oc(e),t)}function oc(e,t=[]){let r=[];return p.Children.forEach(e,(s,l)=>{if(!p.isValidElement(s))return;let n=[...t,l];if(s.type===p.Fragment){r.push.apply(r,oc(s.props.children,n));return}he(s.type===Z,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),he(!s.props.index||!s.props.children,"An index route cannot have child routes.");let i={id:s.props.id||n.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(i.children=oc(s.props.children,n)),r.push(i)}),r}var Wn="get",Jn="application/x-www-form-urlencoded";function no(e){return e!=null&&typeof e.tagName=="string"}function Zy(e){return no(e)&&e.tagName.toLowerCase()==="button"}function Wy(e){return no(e)&&e.tagName.toLowerCase()==="form"}function Jy(e){return no(e)&&e.tagName.toLowerCase()==="input"}function e1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function t1(e,t){return e.button===0&&(!t||t==="_self")&&!e1(e)}var Mn=null;function a1(){if(Mn===null)try{new FormData(document.createElement("form"),0),Mn=!1}catch{Mn=!0}return Mn}var r1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jo(e){return e!=null&&!r1.has(e)?(Kt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jn}"`),null):e}function s1(e,t){let r,s,l,n,i;if(Wy(e)){let o=e.getAttribute("action");s=o?ja(o,t):null,r=e.getAttribute("method")||Wn,l=Jo(e.getAttribute("enctype"))||Jn,n=new FormData(e)}else if(Zy(e)||Jy(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||o.getAttribute("action");if(s=d?ja(d,t):null,r=e.getAttribute("formmethod")||o.getAttribute("method")||Wn,l=Jo(e.getAttribute("formenctype"))||Jo(o.getAttribute("enctype"))||Jn,n=new FormData(o,e),!a1()){let{name:c,type:u,value:m}=e;if(u==="image"){let x=c?`${c}.`:"";n.append(`${x}x`,"0"),n.append(`${x}y`,"0")}else c&&n.append(c,m)}}else{if(no(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Wn,s=null,l=Jn,i=e}return n&&l==="text/plain"&&(i=n,n=void 0),{action:s,method:r.toLowerCase(),encType:l,formData:n,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vu(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function l1(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&ja(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function n1(e,t){if(e.id in t)return t[e.id];try{let r=await ny(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function i1(e){return e!=null&&typeof e.page=="string"}function o1(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function d1(e,t,r){let s=await Promise.all(e.map(async l=>{let n=t.routes[l.route.id];if(n){let i=await n1(n,r);return i.links?i.links():[]}return[]}));return x1(s.flat(1).filter(o1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function dm(e,t,r,s,l,n){let i=(d,c)=>r[c]?d.route.id!==r[c].route.id:!0,o=(d,c)=>{var u;return r[c].pathname!==d.pathname||((u=r[c].route.path)==null?void 0:u.endsWith("*"))&&r[c].params["*"]!==d.params["*"]};return n==="assets"?t.filter((d,c)=>i(d,c)||o(d,c)):n==="data"?t.filter((d,c)=>{var m;let u=s.routes[d.route.id];if(!u||!u.hasLoader)return!1;if(i(d,c)||o(d,c))return!0;if(d.route.shouldRevalidate){let x=d.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((m=r[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function c1(e,t,{includeHydrateFallback:r}={}){return u1(e.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let n=[l.module];return l.clientActionModule&&(n=n.concat(l.clientActionModule)),l.clientLoaderModule&&(n=n.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(n=n.concat(l.hydrateFallbackModule)),l.imports&&(n=n.concat(l.imports)),n}).flat(1))}function u1(e){return[...new Set(e)]}function m1(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function x1(e,t){let r=new Set,s=new Set(t);return e.reduce((l,n)=>{if(t&&!i1(n)&&n.as==="script"&&n.href&&s.has(n.href))return l;let o=JSON.stringify(m1(n));return r.has(o)||(r.add(o),l.push({key:o,link:n})),l},[])}function df(){let e=p.useContext(Ls);return vu(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function p1(){let e=p.useContext(lo);return vu(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var yu=p.createContext(void 0);yu.displayName="FrameworkContext";function cf(){let e=p.useContext(yu);return vu(e,"You must render this element inside a <HydratedRouter> element"),e}function g1(e,t){let r=p.useContext(yu),[s,l]=p.useState(!1),[n,i]=p.useState(!1),{onFocus:o,onBlur:d,onMouseEnter:c,onMouseLeave:u,onTouchStart:m}=t,x=p.useRef(null);p.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let k=g=>{g.forEach(h=>{i(h.isIntersecting)})},y=new IntersectionObserver(k,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[e]),p.useEffect(()=>{if(s){let k=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(k)}}},[s]);let b=()=>{l(!0)},j=()=>{l(!1),i(!1)};return r?e!=="intent"?[n,x,{}]:[n,x,{onFocus:Zs(o,b),onBlur:Zs(d,j),onMouseEnter:Zs(c,b),onMouseLeave:Zs(u,j),onTouchStart:Zs(m,b)}]:[!1,x,{}]}function Zs(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function f1({page:e,...t}){let{router:r}=df(),s=p.useMemo(()=>Qg(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?p.createElement(b1,{page:e,matches:s,...t}):null}function h1(e){let{manifest:t,routeModules:r}=cf(),[s,l]=p.useState([]);return p.useEffect(()=>{let n=!1;return d1(e,t,r).then(i=>{n||l(i)}),()=>{n=!0}},[e,t,r]),s}function b1({page:e,matches:t,...r}){let s=Rt(),{manifest:l,routeModules:n}=cf(),{basename:i}=df(),{loaderData:o,matches:d}=p1(),c=p.useMemo(()=>dm(e,t,d,l,s,"data"),[e,t,d,l,s]),u=p.useMemo(()=>dm(e,t,d,l,s,"assets"),[e,t,d,l,s]),m=p.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let j=new Set,k=!1;if(t.forEach(g=>{var f;let h=l.routes[g.route.id];!h||!h.hasLoader||(!c.some(v=>v.route.id===g.route.id)&&g.route.id in o&&((f=n[g.route.id])!=null&&f.shouldRevalidate)||h.hasClientLoader?k=!0:j.add(g.route.id))}),j.size===0)return[];let y=l1(e,i,"data");return k&&j.size>0&&y.searchParams.set("_routes",t.filter(g=>j.has(g.route.id)).map(g=>g.route.id).join(",")),[y.pathname+y.search]},[i,o,s,l,c,t,e,n]),x=p.useMemo(()=>c1(u,l),[u,l]),b=h1(u);return p.createElement(p.Fragment,null,m.map(j=>p.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...r})),x.map(j=>p.createElement("link",{key:j,rel:"modulepreload",href:j,...r})),b.map(({key:j,link:k})=>p.createElement("link",{key:j,nonce:r.nonce,...k})))}function v1(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var uf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{uf&&(window.__reactRouterVersion="7.9.1")}catch{}function y1({basename:e,children:t,window:r}){let s=p.useRef();s.current==null&&(s.current=iy({window:r,v5Compat:!0}));let l=s.current,[n,i]=p.useState({action:l.action,location:l.location}),o=p.useCallback(d=>{p.startTransition(()=>i(d))},[i]);return p.useLayoutEffect(()=>l.listen(o),[l,o]),p.createElement(Ky,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:l})}var mf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ga=p.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:l,reloadDocument:n,replace:i,state:o,target:d,to:c,preventScrollReset:u,viewTransition:m,...x},b){let{basename:j}=p.useContext(Wt),k=typeof c=="string"&&mf.test(c),y,g=!1;if(typeof c=="string"&&k&&(y=c,uf))try{let S=new URL(window.location.href),T=c.startsWith("//")?new URL(S.protocol+c):new URL(c),z=ja(T.pathname,j);T.origin===S.origin&&z!=null?c=z+T.search+T.hash:g=!0}catch{Kt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=Ly(c,{relative:l}),[f,v,w]=g1(s,x),D=N1(c,{replace:i,state:o,target:d,preventScrollReset:u,relative:l,viewTransition:m});function N(S){t&&t(S),S.defaultPrevented||D(S)}let C=p.createElement("a",{...x,...w,href:y||h,onClick:g||n?t:N,ref:v1(b,v),target:d,"data-discover":!k&&r==="render"?"true":void 0});return f&&!k?p.createElement(p.Fragment,null,C,p.createElement(f1,{page:h})):C});ga.displayName="Link";var k1=p.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:l=!1,style:n,to:i,viewTransition:o,children:d,...c},u){let m=ln(i,{relative:c.relative}),x=Rt(),b=p.useContext(lo),{navigator:j,basename:k}=p.useContext(Wt),y=b!=null&&R1(m)&&o===!0,g=j.encodeLocation?j.encodeLocation(m).pathname:m.pathname,h=x.pathname,f=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;r||(h=h.toLowerCase(),f=f?f.toLowerCase():null,g=g.toLowerCase()),f&&k&&(f=ja(f,k)||f);const v=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let w=h===g||!l&&h.startsWith(g)&&h.charAt(v)==="/",D=f!=null&&(f===g||!l&&f.startsWith(g)&&f.charAt(g.length)==="/"),N={isActive:w,isPending:D,isTransitioning:y},C=w?t:void 0,S;typeof s=="function"?S=s(N):S=[s,w?"active":null,D?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let T=typeof n=="function"?n(N):n;return p.createElement(ga,{...c,"aria-current":C,className:S,ref:u,style:T,to:i,viewTransition:o},typeof d=="function"?d(N):d)});k1.displayName="NavLink";var w1=p.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:l,state:n,method:i=Wn,action:o,onSubmit:d,relative:c,preventScrollReset:u,viewTransition:m,...x},b)=>{let j=D1(),k=T1(o,{relative:c}),y=i.toLowerCase()==="get"?"get":"post",g=typeof o=="string"&&mf.test(o),h=f=>{if(d&&d(f),f.defaultPrevented)return;f.preventDefault();let v=f.nativeEvent.submitter,w=(v==null?void 0:v.getAttribute("formmethod"))||i;j(v||f.currentTarget,{fetcherKey:t,method:w,navigate:r,replace:l,state:n,relative:c,preventScrollReset:u,viewTransition:m})};return p.createElement("form",{ref:b,method:y,action:k,onSubmit:s?d:h,...x,"data-discover":!g&&e==="render"?"true":void 0})});w1.displayName="Form";function j1(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xf(e){let t=p.useContext(Ls);return he(t,j1(e)),t}function N1(e,{target:t,replace:r,state:s,preventScrollReset:l,relative:n,viewTransition:i}={}){let o=lf(),d=Rt(),c=ln(e,{relative:n});return p.useCallback(u=>{if(t1(u,t)){u.preventDefault();let m=r!==void 0?r:Bl(d)===Bl(c);o(e,{replace:m,state:s,preventScrollReset:l,relative:n,viewTransition:i})}},[d,o,c,r,s,t,e,l,n,i])}var C1=0,S1=()=>`__${String(++C1)}__`;function D1(){let{router:e}=xf("useSubmit"),{basename:t}=p.useContext(Wt),r=Gy();return p.useCallback(async(s,l={})=>{let{action:n,method:i,encType:o,formData:d,body:c}=s1(s,t);if(l.navigate===!1){let u=l.fetcherKey||S1();await e.fetch(u,r,l.action||n,{preventScrollReset:l.preventScrollReset,formData:d,body:c,formMethod:l.method||i,formEncType:l.encType||o,flushSync:l.flushSync})}else await e.navigate(l.action||n,{preventScrollReset:l.preventScrollReset,formData:d,body:c,formMethod:l.method||i,formEncType:l.encType||o,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,t,r])}function T1(e,{relative:t}={}){let{basename:r}=p.useContext(Wt),s=p.useContext(Ca);he(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),n={...ln(e||".",{relative:t})},i=Rt();if(e==null){n.search=i.search;let o=new URLSearchParams(n.search),d=o.getAll("index");if(d.some(u=>u==="")){o.delete("index"),d.filter(m=>m).forEach(m=>o.append("index",m));let u=o.toString();n.search=u?`?${u}`:""}}return(!e||e===".")&&l.route.index&&(n.search=n.search?n.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(n.pathname=n.pathname==="/"?r:ba([r,n.pathname])),Bl(n)}function R1(e,{relative:t}={}){let r=p.useContext(af);he(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=xf("useViewTransitionState"),l=ln(e,{relative:t});if(!r.isTransitioning)return!1;let n=ja(r.currentLocation.pathname,s)||r.currentLocation.pathname,i=ja(r.nextLocation.pathname,s)||r.nextLocation.pathname;return Ei(l.pathname,i)!=null||Ei(l.pathname,n)!=null}const pf=p.createContext(),M1=()=>{const e=p.useContext(pf);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},E1=({children:e})=>{const[t,r]=p.useState(()=>localStorage.getItem("theme")||"light");p.useEffect(()=>{const l=window.document.documentElement;l.classList.remove("light","dark"),l.classList.add(t),localStorage.setItem("theme",t)},[t]);const s=()=>{r(l=>l==="light"?"dark":"light")};return a.jsx(pf.Provider,{value:{theme:t,toggleTheme:s},children:e})},gf=p.createContext(),ff=()=>{const e=p.useContext(gf);if(!e)throw new Error("useSidebar must be used within a SidebarProvider");return e},z1=({children:e})=>{const[t,r]=p.useState(!1),s=()=>{r(!t)};return a.jsx(gf.Provider,{value:{isCollapsed:t,setIsCollapsed:r,toggleSidebar:s},children:e})},A1=()=>{const{theme:e,toggleTheme:t}=M1(),[r,s]=p.useState(!1);return a.jsx("nav",{className:"bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-slate-700/50 sticky top-0 z-50",children:a.jsx("div",{className:"px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between items-center h-16",children:[a.jsx(ga,{to:"/",className:"flex items-center space-x-3 group hover:opacity-80 transition-opacity duration-200"}),a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("button",{onClick:t,className:"relative p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 group","aria-label":`Switch to ${e==="light"?"dark":"light"} mode`,children:a.jsx("div",{className:"w-5 h-5 transform transition-transform duration-500 group-hover:rotate-180",children:e==="light"?a.jsx("svg",{className:"w-5 h-5 text-gray-600 dark:text-blue-200 group-hover:text-orange-500 transition-colors duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}):a.jsx("svg",{className:"w-5 h-5 text-gray-600 dark:text-blue-200 group-hover:text-yellow-500 transition-colors duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})}),a.jsx("div",{className:"relative",children:a.jsxs("button",{className:"flex items-center space-x-2 p-2 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors",children:[a.jsx("div",{className:"w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center",children:a.jsx("span",{className:"text-white text-xs font-semibold",children:"U"})}),a.jsx("svg",{className:"w-4 h-4 text-gray-600 dark:text-blue-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})}),a.jsx("button",{onClick:()=>s(!r),className:"lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors",children:a.jsx("svg",{className:"h-5 w-5 text-gray-600 dark:text-blue-200",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r?a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]})})})},hf=()=>{const{isCollapsed:e,toggleSidebar:t}=ff(),[r,s]=p.useState(new Set(["inputs","feedback","dragdrop"])),l=Rt(),n=lf(),i=[{id:"inputs",name:"Inputs",icon:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),href:"/inputs",components:[{name:"Text Input",href:"/inputs#text"},{name:"Email Input",href:"/inputs#email"},{name:"Password Input",href:"/inputs#password"},{name:"Number Input",href:"/inputs#number"},{name:"Textarea",href:"/inputs#textarea"},{name:"Select Dropdown",href:"/inputs#select"},{name:"Checkbox",href:"/inputs#checkbox"},{name:"Radio Buttons",href:"/inputs#radio"},{name:"Range Slider",href:"/inputs#range"},{name:"Date Input",href:"/inputs#date"},{name:"Time Input",href:"/inputs#time"},{name:"File Upload",href:"/inputs#file"},{name:"Date Range Picker",href:"/inputs#dateRange"},{name:"Rate Input",href:"/inputs#rate"},{name:"Switch Input",href:"/inputs#switch"},{name:"Tree Select",href:"/inputs#treeSelect"}]},{id:"notifications",name:"Notifications",icon:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-5 5v-5zM4.5 5.653c0-.856.917-1.398 1.667-.986l7.8 4.2a1.125 1.125 0 010 1.971l-7.8 4.2c-.75.404-1.667-.13-1.667-.986V5.653z"})}),href:"/notifications",components:[{name:"Alert",href:"/notifications#alert"},{name:"Toast",href:"/notifications#toast"},{name:"Modal",href:"/notifications#modal"},{name:"Popover",href:"/notifications#popover"},{name:"Tooltip",href:"/notifications#tooltip"},{name:"Loading",href:"/notifications#loading"},{name:"Progress",href:"/notifications#progress"}]},{id:"data-display",name:"Data Display",icon:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),href:"/data-display",components:[{name:"Table",href:"/data-display#table"},{name:"Card",href:"/data-display#card"},{name:"List",href:"/data-display#list"},{name:"Grid",href:"/data-display#grid"},{name:"Chart",href:"/data-display#chart"},{name:"Stat",href:"/data-display#stat"},{name:"Timeline",href:"/data-display#timeline"},{name:"Avatar",href:"/data-display#avatar"}]},{id:"forms",name:"Forms",icon:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),href:"/forms",components:[{name:"Validation Form",href:"/forms/validation"},{name:"Wizard Form",href:"/forms/wizard"},{name:"Multi-Step Form",href:"/forms/multistep"},{name:"Search Form",href:"/forms/search"},{name:"Filter Form",href:"/forms/filter"}]},{id:"navigation",name:"Navigation",icon:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),href:"/navigation",components:[{name:"Navbar",href:"/navigation/navbar"},{name:"Breadcrumb",href:"/navigation/breadcrumb"},{name:"Pagination",href:"/navigation/pagination"},{name:"Tabs",href:"/navigation/tabs"},{name:"Menu",href:"/navigation/menu"}]},{id:"layout",name:"Layout",icon:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"})}),href:"/layout",components:[{name:"Header",href:"/layout/header"},{name:"Footer",href:"/layout/footer"},{name:"Sidebar",href:"/layout/sidebar"},{name:"Grid",href:"/layout/grid"},{name:"Container",href:"/layout/container"},{name:"Card",href:"/layout/card"}]},{id:"feedback",name:"Feedback",icon:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),href:"/feedback",components:[{name:"Alert",href:"/feedback/alert"},{name:"Toast",href:"/feedback/toast"},{name:"Modal",href:"/feedback/modal"},{name:"Popover",href:"/feedback/popover"},{name:"Tooltip",href:"/feedback/tooltip"},{name:"Badge",href:"/feedback/badge"}]},{id:"dragdrop",name:"Drag & Drop",icon:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})}),href:"/dragdrop",components:[{name:"Sortable List",href:"/dragdrop#sortable-list"},{name:"Drag & Drop Cards",href:"/dragdrop#drag-drop-cards"},{name:"File Drop Zone",href:"/dragdrop#file-drop-zone"},{name:"Kanban Board",href:"/dragdrop#kanban-board"}]}],o=u=>{s(m=>{const x=new Set;return m.has(u)||x.add(u),x})},d=u=>{n(u.href),u.components.length>0&&o(u.id)},c=u=>l.pathname===u.href||u.id==="forms"&&l.pathname.startsWith("/forms/")||u.id==="navigation"&&l.pathname.startsWith("/navigation/")||u.id==="layout"&&l.pathname.startsWith("/layout/")||u.id==="feedback"&&l.pathname.startsWith("/feedback/")||u.id==="dragdrop"&&l.pathname.startsWith("/dragdrop");return a.jsxs("div",{className:`bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 z-30 shadow-xl ${e?"w-16":"w-64"}`,children:[a.jsx("div",{className:"p-4 border-b border-gray-200 dark:border-slate-700 flex-shrink-0",children:a.jsxs("div",{className:"flex items-center justify-between",children:[!e&&a.jsx(ga,{to:"/",className:"flex items-center space-x-3",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center",children:a.jsx("span",{className:"text-white font-bold text-sm",children:"TK"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-bold text-gray-900 dark:text-blue-100",children:"TailwindKit"}),a.jsx("p",{className:"text-xs text-gray-500 dark:text-blue-300",children:"UI Components"})]})]})}),a.jsx("button",{onClick:t,className:"p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors",children:a.jsx("svg",{className:"w-4 h-4 text-gray-600 dark:text-blue-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})})})]})}),a.jsxs("nav",{className:"flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full relative",children:[a.jsx("div",{className:"absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white dark:from-slate-900 to-transparent pointer-events-none z-10"}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none z-10"}),i.map(u=>a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>d(u),className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${c(u)?"bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 border-l-4 border-blue-500 dark:border-blue-400":"text-gray-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-800"}`,children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("span",{className:`${e?"mx-auto":""}`,children:u.icon}),!e&&a.jsx("span",{children:u.name})]}),!e&&a.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${r.has(u.id)?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]}),!e&&r.has(u.id)&&a.jsx("div",{className:"ml-6 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-slate-700 pl-3",children:u.components.map((m,x)=>a.jsx(ga,{to:m.href,className:`block px-3 py-1.5 text-xs rounded-md transition-colors ${l.pathname+l.hash===m.href||m.href.includes("#")&&l.pathname===m.href.split("#")[0]&&l.hash==="#"+m.href.split("#")[1]?"bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 font-semibold border-l-2 border-blue-500 dark:border-blue-400":"text-gray-600 dark:text-blue-300 hover:text-gray-900 dark:hover:text-blue-100 hover:bg-gray-50 dark:hover:bg-slate-800"}`,children:m.name},x))})]},u.id))]}),a.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-slate-700 flex-shrink-0",children:!e&&a.jsxs("div",{className:"text-xs text-gray-500 dark:text-blue-300 text-center",children:[a.jsx("p",{children:"Built with React & Tailwind CSS"}),a.jsx("p",{className:"mt-1",children:"v1.0.0"})]})})]})},L1=()=>{const e=[{label:"Components",value:"80+",icon:"🧩"},{label:"Categories",value:"8",icon:"📁"},{label:"Examples",value:"200+",icon:"💡"},{label:"Dependencies",value:"0",icon:"⚡"}],t=[{icon:"⚡",title:"Lightning Fast",description:"Built with Vite for instant HMR and optimized builds",color:"blue"},{icon:"🎨",title:"Beautiful Design",description:"Crafted with Tailwind CSS for stunning, responsive designs",color:"green"},{icon:"🌙",title:"Dark Mode",description:"Built-in dark/light theme with smooth transitions",color:"purple"},{icon:"♿",title:"Accessible",description:"WCAG compliant components with keyboard navigation",color:"orange"},{icon:"📱",title:"Responsive",description:"Mobile-first design that works on all devices",color:"pink"},{icon:"🖱️",title:"Interactive",description:"Advanced drag & drop, forms, and interactive components",color:"indigo"}],r=[{name:"Data Display",description:"Tables, cards, charts, and data visualization",icon:"📊",href:"/data-display",count:"12 components"},{name:"Feedback",description:"Alerts, modals, toasts, and user notifications",icon:"💬",href:"/feedback",count:"6 components"},{name:"Forms",description:"Inputs, validation, wizards, and form controls",icon:"📝",href:"/forms",count:"5 components"},{name:"Inputs",description:"Text fields, checkboxes, selects, and input controls",icon:"⌨️",href:"/inputs",count:"16 components"},{name:"Layout",description:"Containers, headers, footers, and layout components",icon:"🏗️",href:"/layout",count:"5 components"},{name:"Navigation",description:"Menus, breadcrumbs, pagination, and navigation",icon:"🧭",href:"/navigation",count:"5 components"},{name:"Drag & Drop",description:"Sortable lists, kanban boards, and file uploads",icon:"🖱️",href:"/dragdrop",count:"4 components"},{name:"Notifications",description:"Alerts, loading states, and notification systems",icon:"🔔",href:"/notifications",count:"7 components"}],s=l=>{const n={blue:"bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",green:"bg-green-100 dark:bg-emerald-900/30 text-green-600 dark:text-emerald-400",purple:"bg-purple-100 dark:bg-violet-900/30 text-purple-600 dark:text-violet-400",orange:"bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",pink:"bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",indigo:"bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"};return n[l]||n.blue};return a.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors",children:[a.jsx("div",{className:"relative overflow-hidden",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"flex justify-center mb-8",children:a.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg",children:a.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"})})})}),a.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-gray-900 dark:text-blue-100 mb-6",children:"TailwindKit"}),a.jsx("p",{className:"text-xl md:text-2xl text-gray-600 dark:text-blue-200 mb-4",children:"Modern UI Component Library"}),a.jsx("p",{className:"text-lg text-gray-500 dark:text-blue-300 max-w-3xl mx-auto mb-12",children:"A comprehensive collection of 80+ beautiful, responsive UI components built with React and Tailwind CSS. Copy-paste ready components for modern web applications."}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:[a.jsxs(ga,{to:"/data-display",className:"inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Explore Components"]}),a.jsxs(ga,{to:"/dragdrop",className:"inline-flex items-center px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-blue-100 font-semibold rounded-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700 transition-all duration-200 transform hover:scale-105",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),"Try Drag & Drop"]})]}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto",children:e.map((l,n)=>a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-3xl mb-2",children:l.icon}),a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100",children:l.value}),a.jsx("div",{className:"text-sm text-gray-500 dark:text-blue-300",children:l.label})]},n))})]})})}),a.jsx("div",{className:"py-16 bg-white dark:bg-slate-800",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 dark:text-blue-100 mb-4",children:"Why Choose TailwindKit?"}),a.jsx("p",{className:"text-lg text-gray-600 dark:text-blue-200 max-w-2xl mx-auto",children:"Built with modern web technologies and best practices for the best developer experience"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((l,n)=>a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105",children:[a.jsx("div",{className:`w-12 h-12 ${s(l.color)} rounded-lg flex items-center justify-center mb-4`,children:a.jsx("span",{className:"text-2xl",children:l.icon})}),a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-blue-100 mb-2",children:l.title}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:l.description})]},n))})]})}),a.jsx("div",{className:"py-16 bg-gray-50 dark:bg-slate-900",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 dark:text-blue-100 mb-4",children:"Component Categories"}),a.jsx("p",{className:"text-lg text-gray-600 dark:text-blue-200 max-w-2xl mx-auto",children:"Explore our comprehensive collection of UI components organized by functionality"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:r.map((l,n)=>a.jsx(ga,{to:l.href,className:"group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-200 dark:border-slate-700",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-4xl mb-4 group-hover:scale-110 transition-transform duration-200",children:l.icon}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors",children:l.name}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200 mb-3",children:l.description}),a.jsx("div",{className:"text-xs text-blue-600 dark:text-blue-400 font-medium",children:l.count})]})},n))})]})}),a.jsx("div",{className:"py-16 bg-white dark:bg-slate-800",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-16",children:[a.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 dark:text-blue-100 mb-4",children:"Built with Modern Technologies"}),a.jsx("p",{className:"text-lg text-gray-600 dark:text-blue-200 max-w-2xl mx-auto",children:"Powered by the latest web technologies for optimal performance and developer experience"})]}),a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[a.jsxs("div",{className:"text-center group",children:[a.jsx("div",{className:"w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200",children:a.jsx("svg",{className:"w-8 h-8 text-blue-600 dark:text-blue-400",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"})})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2",children:"React 19"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200",children:"Modern React with hooks"})]}),a.jsxs("div",{className:"text-center group",children:[a.jsx("div",{className:"w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200",children:a.jsx("svg",{className:"w-8 h-8 text-cyan-600 dark:text-cyan-400",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"})})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2",children:"Tailwind CSS"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200",children:"Utility-first CSS framework"})]}),a.jsxs("div",{className:"text-center group",children:[a.jsx("div",{className:"w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200",children:a.jsx("svg",{className:"w-8 h-8 text-purple-600 dark:text-purple-400",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"})})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2",children:"Vite"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200",children:"Lightning-fast build tool"})]}),a.jsxs("div",{className:"text-center group",children:[a.jsx("div",{className:"w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200",children:a.jsx("svg",{className:"w-8 h-8 text-green-600 dark:text-green-400",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13H6v-2h12v2z"})})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2",children:"TypeScript Ready"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200",children:"Type-safe development"})]})]})]})}),a.jsx("div",{className:"py-16 bg-gradient-to-r from-blue-600 to-purple-600",children:a.jsxs("div",{className:"max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",children:[a.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"Ready to Build Amazing UIs?"}),a.jsx("p",{className:"text-xl text-blue-100 mb-8",children:"Start building with our comprehensive component library today"}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[a.jsxs(ga,{to:"/data-display",className:"inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Get Started"]}),a.jsxs("a",{href:"https://github.com/your-username/tailwind-kit-github",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"View on GitHub"]})]})]})})]})},cm=[{id:"text",name:"Text Input",description:"Basic text input field"},{id:"email",name:"Email Input",description:"Email input with validation"},{id:"password",name:"Password Input",description:"Password input field"},{id:"number",name:"Number Input",description:"Number input field"},{id:"textarea",name:"Textarea",description:"Multi-line text input"},{id:"select",name:"Select Dropdown",description:"Dropdown selection"},{id:"checkbox",name:"Checkbox",description:"Checkbox input"},{id:"radio",name:"Radio Buttons",description:"Radio button group"},{id:"range",name:"Range Slider",description:"Range slider input"},{id:"date",name:"Date Input",description:"Date picker input"},{id:"time",name:"Time Input",description:"Time picker input"},{id:"file",name:"File Upload",description:"File upload input"},{id:"dateRange",name:"Date Range Picker",description:"Date range selection"},{id:"rate",name:"Rate Input",description:"Star rating input"},{id:"switch",name:"Switch Input",description:"Toggle switch input"},{id:"treeSelect",name:"Tree Select",description:"Hierarchical selection"}],O1=({value:e,onChange:t,name:r,placeholder:s="Select date..."})=>{const[l,n]=p.useState(!1),[i,o]=p.useState(e?new Date(e+"T00:00:00"):null),[d,c]=p.useState(i||new Date),[u,m]=p.useState(null),x=p.useRef(null),b=["January","February","March","April","May","June","July","August","September","October","November","December"],j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];p.useEffect(()=>{if(e){const N=new Date(e+"T00:00:00");o(N),c(N)}else o(null)},[e]),p.useEffect(()=>{const N=C=>{x.current&&!x.current.contains(C.target)&&n(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]);const k=N=>{const C=N.getFullYear(),S=N.getMonth(),T=new Date(C,S,1),O=new Date(C,S+1,0).getDate(),$=T.getDay(),H=[];for(let E=0;E<$;E++)H.push(null);for(let E=1;E<=O;E++)H.push(new Date(C,S,E));return H},y=N=>{if(N){o(N);const C=N.getFullYear(),S=String(N.getMonth()+1).padStart(2,"0"),T=String(N.getDate()).padStart(2,"0"),z=`${C}-${S}-${T}`;t({target:{name:r,value:z}}),n(!1)}},g=N=>{c(C=>{const S=new Date(C);return S.setMonth(C.getMonth()+N),S})},h=N=>{if(!N)return!1;const C=new Date;return N.toDateString()===C.toDateString()},f=N=>!N||!i?!1:N.toDateString()===i.toDateString(),v=N=>!N||!u?!1:N.toDateString()===u.toDateString(),w=()=>i?i.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):s,D=k(d);return a.jsxs("div",{className:"relative",ref:x,children:[a.jsxs("div",{className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm cursor-pointer min-w-0 bg-white dark:bg-slate-700",onClick:()=>n(!l),children:[a.jsx("span",{className:i?"text-gray-900 dark:text-blue-100":"text-gray-500 dark:text-slate-400",children:w()}),a.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",children:a.jsx("svg",{className:"w-4 h-4 text-gray-500 dark:text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})})]}),l&&a.jsxs("div",{className:"absolute top-full left-0 mt-1 w-80 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-xl z-50 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("button",{onClick:()=>g(-1),className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors",children:a.jsx("svg",{className:"w-4 h-4 text-gray-600 dark:text-blue-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),a.jsxs("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:[b[d.getMonth()]," ",d.getFullYear()]}),a.jsx("button",{onClick:()=>g(1),className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors",children:a.jsx("svg",{className:"w-4 h-4 text-gray-600 dark:text-blue-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),a.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:j.map(N=>a.jsx("div",{className:"text-center text-xs font-medium text-gray-500 dark:text-blue-300 py-2",children:N},N))}),a.jsx("div",{className:"grid grid-cols-7 gap-1",children:D.map((N,C)=>a.jsx("button",{onClick:()=>y(N),onMouseEnter:()=>m(N),onMouseLeave:()=>m(null),className:`
                  h-8 w-8 text-sm rounded-lg transition-all duration-200 flex items-center justify-center
                  ${N?f(N)?"bg-blue-600 text-white shadow-lg transform scale-105":h(N)?"bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold":v(N)?"bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-blue-100":"text-gray-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-700":"cursor-default"}
                `,disabled:!N,children:N&&N.getDate()},C))}),a.jsxs("div",{className:"flex justify-between mt-4 pt-3 border-t border-gray-200 dark:border-slate-600",children:[a.jsx("button",{onClick:()=>{y(new Date)},className:"px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors",children:"Today"}),a.jsx("button",{onClick:()=>{o(null),t({target:{name:r,value:""}}),n(!1)},className:"px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors",children:"Clear"})]})]})]})},B1=({value:e,onChange:t,name:r,placeholder:s="Select date range..."})=>{const[l,n]=p.useState(!1),[i,o]=p.useState(e!=null&&e.start?new Date(e.start+"T00:00:00"):null),[d,c]=p.useState(e!=null&&e.end?new Date(e.end+"T00:00:00"):null),[u,m]=p.useState(i||new Date),[x,b]=p.useState(null),[j,k]=p.useState(!1),y=p.useRef(null),g=["January","February","March","April","May","June","July","August","September","October","November","December"],h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];p.useEffect(()=>{e!=null&&e.start&&(o(new Date(e.start+"T00:00:00")),m(new Date(e.start+"T00:00:00"))),e!=null&&e.end&&c(new Date(e.end+"T00:00:00"))},[e]),p.useEffect(()=>{const E=R=>{y.current&&!y.current.contains(R.target)&&(n(!1),k(!1))};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[]);const f=E=>{const R=E.getFullYear(),A=E.getMonth(),B=new Date(R,A,1),K=new Date(R,A+1,0).getDate(),Ee=B.getDay(),Q=[];for(let ie=0;ie<Ee;ie++)Q.push(null);for(let ie=1;ie<=K;ie++)Q.push(new Date(R,A,ie));return Q},v=E=>{if(E){if(!i||i&&d)o(E),c(null),k(!0);else if(j){E<i?(c(i),o(E)):c(E),k(!1),n(!1);const R=w(i),A=w(E<i?i:E);t({target:{name:r,value:{start:E<i?R:w(i),end:E<i?R:A}}})}}},w=E=>{const R=E.getFullYear(),A=String(E.getMonth()+1).padStart(2,"0"),B=String(E.getDate()).padStart(2,"0");return`${R}-${A}-${B}`},D=E=>{m(R=>{const A=new Date(R);return A.setMonth(R.getMonth()+E),A})},N=E=>{if(!E)return!1;const R=new Date;return E.toDateString()===R.toDateString()},C=E=>!E||!i?!1:E.toDateString()===i.toDateString(),S=E=>!E||!d?!1:E.toDateString()===d.toDateString(),T=E=>!E||!i||!d?!1:E>i&&E<d,z=E=>!E||!x?!1:E.toDateString()===x.toDateString(),O=()=>!i&&!d?s:i&&!d?`${i.toLocaleDateString("en-US",{month:"short",day:"numeric"})} - Select end date`:i&&d?`${i.toLocaleDateString("en-US",{month:"short",day:"numeric"})} - ${d.toLocaleDateString("en-US",{month:"short",day:"numeric"})}`:s,$=()=>{o(null),c(null),k(!1),t({target:{name:r,value:{start:"",end:""}}}),n(!1)},H=f(u);return a.jsxs("div",{className:"relative",ref:y,children:[a.jsxs("div",{className:"w-full px-3 py-2 pr-10 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm cursor-pointer min-w-0 bg-white dark:bg-slate-700",onClick:()=>n(!l),children:[a.jsx("span",{className:i||d?"text-gray-900 dark:text-blue-100":"text-gray-500 dark:text-slate-400",children:O()}),a.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",children:a.jsx("svg",{className:"w-4 h-4 text-gray-500 dark:text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})})]}),l&&a.jsxs("div",{className:"absolute top-full left-0 mt-1 w-80 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-xl z-50 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("button",{onClick:()=>D(-1),className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors",children:a.jsx("svg",{className:"w-4 h-4 text-gray-600 dark:text-blue-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),a.jsxs("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:[g[u.getMonth()]," ",u.getFullYear()]}),a.jsx("button",{onClick:()=>D(1),className:"p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors",children:a.jsx("svg",{className:"w-4 h-4 text-gray-600 dark:text-blue-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),a.jsx("div",{className:"mb-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md",children:a.jsx("p",{className:"text-xs text-blue-800 dark:text-blue-200",children:i?d?"Range selected":"Select end date":"Select start date"})}),a.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:h.map(E=>a.jsx("div",{className:"text-center text-xs font-medium text-gray-500 dark:text-blue-300 py-2",children:E},E))}),a.jsx("div",{className:"grid grid-cols-7 gap-1",children:H.map((E,R)=>a.jsxs("button",{onClick:()=>v(E),onMouseEnter:()=>b(E),onMouseLeave:()=>b(null),className:`
                  h-8 w-8 text-sm rounded-lg transition-all duration-200 flex items-center justify-center relative
                  ${E?C(E)||S(E)?"bg-blue-600 text-white shadow-lg transform scale-105 font-semibold":T(E)?"bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":N(E)?"bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-blue-100 font-semibold":z(E)?"bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-blue-100":"text-gray-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-700":"cursor-default"}
                `,disabled:!E,children:[E&&E.getDate(),E&&T(E)&&a.jsx("div",{className:"absolute inset-0 flex items-center",children:a.jsx("div",{className:"w-full h-0.5 bg-blue-300 dark:bg-blue-400"})})]},R))}),a.jsxs("div",{className:"flex justify-between mt-4 pt-3 border-t border-gray-200 dark:border-slate-600",children:[a.jsx("button",{onClick:()=>{const E=new Date,R=new Date(E);R.setDate(R.getDate()+1),o(E),c(R),k(!1),t({target:{name:r,value:{start:w(E),end:w(R)}}}),n(!1)},className:"px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors",children:"Today + 1"}),a.jsx("button",{onClick:$,className:"px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors",children:"Clear"})]})]})]})},At=({value:e,onChange:t,name:r,max:s=5,size:l="md",allowHalf:n=!1,disabled:i=!1})=>{const[o,d]=p.useState(0),[c,u]=p.useState(e||0),m=g=>{if(i)return;const h=g===c?0:g;u(h),t({target:{name:r,value:h}})},x=g=>{i||d(g)},b=()=>{i||d(0)},j=()=>{switch(l){case"xs":return"w-3 h-3";case"sm":return"w-5 h-5";case"md":return"w-6 h-6";case"lg":return"w-8 h-8";case"xl":return"w-12 h-12";case"2xl":return"w-16 h-16";default:return"w-6 h-6"}},k=()=>{switch(l){case"xs":return"text-xs";case"sm":return"text-sm";case"md":return"text-sm";case"lg":return"text-lg";case"xl":return"text-xl";case"2xl":return"text-2xl";default:return"text-sm"}},y=g=>{const h=o||c,f=g<=h,v=n&&g===Math.ceil(h)&&h%1!==0;return a.jsx("button",{type:"button",onClick:()=>m(g),onMouseEnter:()=>x(g),onMouseLeave:b,disabled:i,className:`${j()} transition-all duration-200 ${i?"cursor-not-allowed opacity-50":"cursor-pointer hover:scale-125 active:scale-95"}`,children:a.jsxs("svg",{className:`${j()} ${f?"text-yellow-400 dark:text-yellow-500":"text-gray-300 dark:text-gray-600"} transition-colors duration-200`,fill:"currentColor",viewBox:"0 0 20 20",children:[v?a.jsx("defs",{children:a.jsxs("linearGradient",{id:`half-${g}`,children:[a.jsx("stop",{offset:"50%",stopColor:"currentColor"}),a.jsx("stop",{offset:"50%",stopColor:"transparent"})]})}):null,a.jsx("path",{fill:v?`url(#half-${g})`:"currentColor",d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]})},g)};return a.jsxs("div",{className:"flex items-center space-x-2",children:[Array.from({length:s},(g,h)=>y(h+1)),c>0&&a.jsxs("span",{className:`ml-3 ${k()} text-gray-600 dark:text-blue-200 font-medium`,children:[c," / ",s]})]})},H1=({value:e,onChange:t,name:r,size:s="md",color:l="blue",disabled:n=!1,label:i="",description:o=""})=>{const[d,c]=p.useState(e||!1),u=()=>{if(n)return;const k=!d;c(k),t({target:{name:r,value:k,type:"checkbox"}})},m=()=>{switch(s){case"sm":return{container:"w-8 h-4",thumb:"w-3 h-3",translate:"translate-x-4"};case"lg":return{container:"w-14 h-7",thumb:"w-6 h-6",translate:"translate-x-7"};default:return{container:"w-11 h-6",thumb:"w-5 h-5",translate:"translate-x-5"}}},x=()=>{switch(l){case"green":return{on:"bg-green-500 dark:bg-green-600",off:"bg-gray-200 dark:bg-gray-700"};case"red":return{on:"bg-red-500 dark:bg-red-600",off:"bg-gray-200 dark:bg-gray-700"};case"purple":return{on:"bg-purple-500 dark:bg-purple-600",off:"bg-gray-200 dark:bg-gray-700"};case"yellow":return{on:"bg-yellow-500 dark:bg-yellow-600",off:"bg-gray-200 dark:bg-gray-700"};default:return{on:"bg-blue-500 dark:bg-blue-600",off:"bg-gray-200 dark:bg-gray-700"}}},b=m(),j=x();return a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("button",{type:"button",onClick:u,disabled:n,className:`
          ${b.container}
          ${d?j.on:j.off}
          ${n?"opacity-50 cursor-not-allowed":"cursor-pointer"}
          relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800
        `,role:"switch","aria-checked":d,"aria-disabled":n,children:a.jsx("span",{className:`
            ${b.thumb}
            ${d?b.translate:"translate-x-0.5"}
            pointer-events-none inline-block transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out
          `})}),(i||o)&&a.jsxs("div",{className:"flex flex-col",children:[i&&a.jsx("label",{className:`text-sm font-medium text-gray-700 dark:text-blue-200 ${n?"opacity-50":""}`,children:i}),o&&a.jsx("span",{className:`text-xs text-gray-500 dark:text-blue-300 ${n?"opacity-50":""}`,children:o})]})]})},$1=({value:e,onChange:t,name:r,placeholder:s="Select options...",options:l=[],multiple:n=!1,searchable:i=!0,disabled:o=!1})=>{const[d,c]=p.useState(!1),[u,m]=p.useState(""),[x,b]=p.useState(e||[]),[j,k]=p.useState(new Set),y=p.useRef(null);p.useEffect(()=>{const S=T=>{y.current&&!y.current.contains(T.target)&&(c(!1),m(""))};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]);const g=S=>{const T=new Set(j);T.has(S)?T.delete(S):T.add(S),k(T)},h=S=>{if(o)return;let T;n?x.includes(S.value)?T=x.filter(z=>z!==S.value):T=[...x,S.value]:(T=[S.value],c(!1)),b(T),t({target:{name:r,value:n?T:T[0]}})},f=S=>S.children&&S.children.length>0,v=(S,T)=>T?S.filter(z=>{const O=z.label.toLowerCase().includes(T.toLowerCase()),$=f(z)&&v(z.children,T).length>0;return O||$}):S,w=(S,T=0)=>{const z=S.children&&S.children.length>0,O=j.has(S.id),$=x.includes(S.value),H=T*20;return a.jsxs("div",{children:[a.jsxs("div",{className:`
            flex items-center px-3 py-2 text-sm cursor-pointer transition-colors
            ${$?"bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300":"hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-blue-200"}
            ${o?"opacity-50 cursor-not-allowed":""}
          `,style:{paddingLeft:`${H+12}px`},onClick:()=>{z?g(S.id):h(S)},children:[z&&a.jsx("div",{className:"mr-2 flex-shrink-0",children:a.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${O?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),n&&!z&&a.jsx("div",{className:"mr-2 flex-shrink-0",children:a.jsx("input",{type:"checkbox",checked:$,onChange:()=>h(S),className:"w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"})}),!n&&!z&&a.jsx("div",{className:"mr-2 flex-shrink-0",children:a.jsx("input",{type:"radio",checked:$,onChange:()=>h(S),className:"w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"})}),a.jsx("span",{className:"flex-1 truncate",children:S.label})]}),z&&O&&a.jsx("div",{children:S.children.map(E=>w(E,T+1))})]},S.id)},D=()=>{if(x.length===0)return s;if(n){if(x.length===1){const S=N(l,x[0]);return S?S.label:x[0]}return`${x.length} items selected`}else{const S=N(l,x[0]);return S?S.label:x[0]}},N=(S,T)=>{for(const z of S){if(z.value===T)return z;if(z.children){const O=N(z.children,T);if(O)return O}}return null},C=v(l,u);return a.jsxs("div",{className:"relative",ref:y,children:[a.jsxs("div",{className:`
          w-full px-3 py-2 pr-10 border border-gray-300 dark:border-slate-600 rounded-md 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm 
          ${o?"opacity-50 cursor-not-allowed":"cursor-pointer"}
          min-w-0 bg-white dark:bg-slate-700
        `,onClick:()=>!o&&c(!d),children:[a.jsx("span",{className:x.length>0?"text-gray-900 dark:text-blue-100":"text-gray-500 dark:text-slate-400",children:D()}),a.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",children:a.jsx("svg",{className:`w-4 h-4 text-gray-500 dark:text-slate-400 transition-transform duration-200 ${d?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),d&&a.jsxs("div",{className:"absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto",children:[i&&a.jsx("div",{className:"p-2 border-b border-gray-200 dark:border-slate-600",children:a.jsx("input",{type:"text",placeholder:"Search options...",value:u,onChange:S=>m(S.target.value),className:"w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100"})}),a.jsx("div",{className:"py-1",children:C.length>0?C.map(S=>w(S)):a.jsx("div",{className:"px-3 py-2 text-sm text-gray-500 dark:text-blue-300",children:"No options found"})})]})]})},ed=({id:e,name:t,value:r,label:s,checked:l,onChange:n,disabled:i=!1,className:o="",labelClassName:d="",...c})=>{const u=m=>{m.preventDefault(),m.stopPropagation(),!i&&n&&n({target:{value:r,name:t}})};return a.jsxs("div",{className:`flex items-center ${o}`,children:[a.jsx("input",{type:"radio",id:e,name:t,value:r,checked:l,onChange:n,disabled:i,className:"sr-only",...c}),a.jsxs("div",{onClick:u,className:`flex items-center cursor-pointer select-none w-full p-2 rounded-md transition-colors duration-200 ${i?"cursor-not-allowed opacity-50":"hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600"} ${d}`,children:[a.jsx("div",{className:`
          w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-200 flex-shrink-0
          ${l?"border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-500":"border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-gray-400 dark:hover:border-slate-500"}
          ${i?"border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800":""}
        `,children:l&&a.jsx("div",{className:"w-2 h-2 rounded-full bg-white"})}),a.jsx("span",{className:`text-sm font-medium flex-1 ${l?"text-gray-900 dark:text-blue-100":"text-gray-700 dark:text-blue-200"} ${i?"text-gray-400 dark:text-slate-500":""}`,children:s})]})]})},td=({id:e,name:t,value:r,label:s,checked:l,onChange:n,disabled:i=!1,className:o="",labelClassName:d="",indeterminate:c=!1,...u})=>{const m=x=>{x.preventDefault(),x.stopPropagation(),!i&&n&&n({target:{name:t,value:r,checked:!l,type:"checkbox"}})};return a.jsxs("div",{className:`flex items-center ${o}`,children:[a.jsx("input",{type:"checkbox",id:e,name:t,value:r,checked:l,disabled:i,ref:x=>{x&&(x.indeterminate=c)},className:"sr-only",...u}),a.jsxs("div",{onClick:m,className:`flex items-center cursor-pointer select-none w-full p-2 rounded-md transition-colors duration-200 ${i?"cursor-not-allowed opacity-50":"hover:bg-gray-50 dark:hover:bg-slate-700 active:bg-gray-100 dark:active:bg-slate-600"} ${d}`,children:[a.jsxs("div",{className:`
          w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200 flex-shrink-0
          ${l||c?"border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-500":"border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-gray-400 dark:hover:border-slate-500"}
          ${i?"border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800":""}
        `,children:[l&&!c&&a.jsx("svg",{className:"w-3 h-3 text-white",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),c&&!l&&a.jsx("svg",{className:"w-3 h-3 text-white",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})]}),a.jsx("span",{className:`text-sm font-medium flex-1 ${l?"text-gray-900 dark:text-blue-100":"text-gray-700 dark:text-blue-200"} ${i?"text-gray-400 dark:text-slate-500":""}`,children:s})]})]})},_1=({componentId:e,formData:t,handleInputChange:r})=>{const[s,l]=p.useState(null),n=o=>{const d=o.target.files[0];d&&(l(URL.createObjectURL(d)),r(o))},i=[{id:"tech",value:"technology",label:"Technology",children:[{id:"web",value:"web-dev",label:"Web Development"},{id:"mobile",value:"mobile-dev",label:"Mobile Development"},{id:"ai",value:"ai-ml",label:"AI & Machine Learning"}]},{id:"design",value:"design",label:"Design",children:[{id:"ui",value:"ui-design",label:"UI Design"},{id:"ux",value:"ux-design",label:"UX Design"},{id:"graphic",value:"graphic-design",label:"Graphic Design"}]}];switch(e){case"text":return a.jsx("input",{type:"text",name:"text",value:t.text,onChange:r,placeholder:"Enter text here...",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"});case"email":return a.jsx("input",{type:"email",name:"email",value:t.email,onChange:r,placeholder:"Enter email address...",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"});case"password":return a.jsx("input",{type:"password",name:"password",value:t.password,onChange:r,placeholder:"Enter password...",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"});case"number":return a.jsx("input",{type:"number",name:"number",value:t.number,onChange:r,placeholder:"Enter number...",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"});case"textarea":return a.jsx("textarea",{name:"textarea",value:t.textarea,onChange:r,placeholder:"Enter your message...",rows:4,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0 resize-none"});case"select":return a.jsxs("select",{name:"select",value:t.select,onChange:r,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm min-w-0 appearance-none cursor-pointer",children:[a.jsx("option",{value:"",children:"Select an option..."}),a.jsx("option",{value:"option1",children:"Option 1"}),a.jsx("option",{value:"option2",children:"Option 2"}),a.jsx("option",{value:"option3",children:"Option 3"})]});case"checkbox":return a.jsxs("div",{className:"space-y-3",children:[a.jsx(td,{id:"checkbox-demo",name:"checkbox",label:"Accept terms and conditions",checked:t.checkbox,onChange:r}),a.jsx(td,{id:"checkbox-newsletter",name:"newsletter",label:"Subscribe to newsletter",checked:t.newsletter||!1,onChange:r}),a.jsx(td,{id:"checkbox-marketing",name:"marketing",label:"Receive marketing emails",checked:t.marketing||!1,onChange:r})]});case"radio":return a.jsxs("div",{className:"space-y-3",children:[a.jsx(ed,{id:"radio-option1",name:"radio",value:"option1",label:"Option 1",checked:t.radio==="option1",onChange:r}),a.jsx(ed,{id:"radio-option2",name:"radio",value:"option2",label:"Option 2",checked:t.radio==="option2",onChange:r}),a.jsx(ed,{id:"radio-option3",name:"radio",value:"option3",label:"Option 3",checked:t.radio==="option3",onChange:r})]});case"range":return a.jsxs("div",{className:"space-y-2",children:[a.jsx("input",{type:"range",name:"range",min:"0",max:"100",value:t.range,onChange:r,className:"w-full h-2 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer slider",style:{background:`linear-gradient(to right, #3b82f6 0%, #3b82f6 ${t.range}%, #e5e7eb ${t.range}%, #e5e7eb 100%)`}}),a.jsxs("div",{className:"text-sm text-gray-600 dark:text-blue-300 text-center",children:["Value: ",t.range]})]});case"date":return a.jsx(O1,{name:"date",value:t.date,onChange:r,placeholder:"Select a date..."});case"time":return a.jsx("input",{type:"time",name:"time",value:t.time,onChange:r,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm min-w-0"});case"file":return a.jsxs("div",{className:"space-y-2",children:[a.jsx("input",{type:"file",name:"file",onChange:n,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm min-w-0 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-300 dark:hover:file:bg-blue-800"}),s&&a.jsx("div",{className:"mt-2",children:a.jsx("img",{src:s,alt:"Preview",className:"w-20 h-20 object-cover rounded-md border border-gray-200 dark:border-slate-600"})})]});case"dateRange":return a.jsx(B1,{name:"dateRange",value:t.dateRange,onChange:r,placeholder:"Select date range..."});case"rate":return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Star Rating - Large Size"}),a.jsx(At,{name:"rate",value:t.rate,onChange:r,max:5,size:"xl",allowHalf:!1,showText:!0,text:["Terrible","Bad","OK","Good","Excellent"]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Star Rating - Extra Large Size"}),a.jsx(At,{name:"rate2",value:t.rate2||0,onChange:r,max:5,size:"xl",allowHalf:!0,showText:!0,text:["Poor","Fair","Good","Very Good","Excellent"]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Star Rating - Different Sizes"}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx("span",{className:"text-sm text-gray-600 dark:text-blue-300 w-16",children:"Small:"}),a.jsx(At,{name:"rate3",value:t.rate3||0,onChange:r,max:5,size:"sm",allowHalf:!1})]}),a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx("span",{className:"text-sm text-gray-600 dark:text-blue-300 w-16",children:"Medium:"}),a.jsx(At,{name:"rate4",value:t.rate4||0,onChange:r,max:5,size:"md",allowHalf:!1})]}),a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx("span",{className:"text-sm text-gray-600 dark:text-blue-300 w-16",children:"Large:"}),a.jsx(At,{name:"rate5",value:t.rate5||0,onChange:r,max:5,size:"lg",allowHalf:!1})]})]})]})]});case"switch":return a.jsx(H1,{name:"switch",value:t.switch,onChange:r,size:"md",color:"blue",label:"Enable notifications",description:"Receive updates about your account"});case"treeSelect":return a.jsx($1,{name:"treeSelect",value:t.treeSelect,onChange:r,placeholder:"Select categories...",multiple:!0,searchable:!0,options:i});default:return a.jsx("div",{children:"Component not found"})}},um=e=>{if(!e)return"";const t=e.id;switch(t){case"date":return`// Complete CustomDatePicker Component - Copy & Paste Ready
import { useState, useRef, useEffect } from 'react';

const CustomDatePicker = ({
  value,
  onChange,
  name,
  placeholder = 'Select date...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    value ? new Date(value + 'T00:00:00') : null
  );
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  const [hoveredDate, setHoveredDate] = useState(null);
  const calendarRef = useRef(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    if (value) {
      const date = new Date(value + 'T00:00:00');
      setSelectedDate(date);
      setCurrentMonth(date);
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const handleDateSelect = (date) => {
    if (date) {
      setSelectedDate(date);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = \`\${year}-\${month}-\${day}\`;
      onChange({ target: { name, value: formattedDate } });
      setIsOpen(false);
    }
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isHovered = (date) => {
    if (!date || !hoveredDate) return false;
    return date.toDateString() === hoveredDate.toDateString();
  };

  const formatDisplayDate = () => {
    if (!selectedDate) return placeholder;
    return selectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const daysInMonth = getDaysInMonth(currentMonth);

  return (
    <div className="relative" ref={calendarRef}>
      <div
        className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm cursor-pointer min-w-0 bg-white dark:bg-slate-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={
            selectedDate
              ? 'text-gray-900 dark:text-blue-100'
              : 'text-gray-500 dark:text-slate-400'
          }
        >
          {formatDisplayDate()}
        </span>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-xl z-50 p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4 text-gray-600 dark:text-blue-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>

            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4 text-gray-600 dark:text-blue-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {days.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-gray-500 dark:text-blue-300 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {daysInMonth.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                onMouseEnter={() => setHoveredDate(date)}
                onMouseLeave={() => setHoveredDate(null)}
                className={\`
                  h-8 w-8 text-sm rounded-lg transition-all duration-200 flex items-center justify-center
                  \${
                    !date
                      ? 'cursor-default'
                      : isSelected(date)
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : isToday(date)
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold'
                      : isHovered(date)
                      ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-blue-100'
                      : 'text-gray-700 dark:text-blue-200 hover:bg-gray-100 dark:hover:bg-slate-700'
                  }
                \`}
                disabled={!date}
              >
                {date && date.getDate()}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-4 pt-3 border-t border-gray-200 dark:border-slate-600">
            <button
              onClick={() => {
                const today = new Date();
                handleDateSelect(today);
              }}
              className="px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
            >
              Today
            </button>
            <button
              onClick={() => {
                setSelectedDate(null);
                onChange({ target: { name, value: '' } });
                setIsOpen(false);
              }}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DateInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <CustomDatePicker
      name="date"
      value={value}
      onChange={handleChange}
      placeholder="Select a date..."
    />
  );
};

export default DateInput;`;case"text":return`// Text Input Component - Copy & Paste Ready
import { useState } from 'react';

const TextInput = ({ value, onChange, name, placeholder = 'Enter text...' }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"
    />
  );
};

const TextInputExample = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <TextInput
      name="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter text here..."
    />
  );
};

export default TextInputExample;`;case"email":return`// Email Input Component - Copy & Paste Ready
import { useState } from 'react';

const EmailInput = ({ value, onChange, name, placeholder = 'Enter email...' }) => {
  return (
    <input
      type="email"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0"
    />
  );
};

const EmailInputExample = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <EmailInput
      name="email"
      value={value}
      onChange={handleChange}
      placeholder="Enter email address..."
    />
  );
};

export default EmailInputExample;`;default:return`// ${e.name} Component - Copy & Paste Ready
import { useState } from 'react';

const ${e.name.replace(/\s+/g,"")} = ({ value, onChange, name }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="${e.description}"
        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm"
      />
    </div>
  );
};

const ${e.name.replace(/\s+/g,"")}Example = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <${e.name.replace(/\s+/g,"")}
      name="${t}"
      value={value}
      onChange={handleChange}
    />
  );
};

export default ${e.name.replace(/\s+/g,"")}Example;`}},U1=()=>{const[e,t]=p.useState(null),[r,s]=p.useState(!1),l=Rt(),[n,i]=p.useState({text:"",email:"",password:"",number:"",textarea:"",select:"",checkbox:!1,newsletter:!1,marketing:!1,radio:"",range:50,date:"",time:"",file:null,dateRange:{start:"",end:""},rate:0,switch:!1,treeSelect:[]});p.useEffect(()=>{const d=l.hash.substring(1);if(d){const c=cm.find(u=>u.id===d);c&&t(c)}else t(cm[0])},[l.hash]);const o=d=>{const{name:c,value:u,type:m,checked:x}=d.target;i(b=>({...b,[c]:m==="checkbox"?x:u}))};return a.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors",children:a.jsx("div",{className:"max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-3 h-full",children:a.jsxs("div",{className:"flex gap-4 h-full",children:[a.jsx("div",{className:"w-2/5 min-w-0 flex flex-col",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-3",children:e?e.name:"Select a Component"}),e?a.jsxs("div",{className:"space-y-3 flex-1 min-h-0",children:[a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Preview"}),a.jsx(_1,{componentId:e.id,formData:n,handleInputChange:o})]}),a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Current Value"}),a.jsx("div",{className:"relative",children:e.id==="checkbox"?a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"text-sm text-gray-600 dark:text-blue-300",children:[a.jsxs("div",{className:"flex items-center justify-between py-1",children:[a.jsx("span",{children:"Accept terms and conditions:"}),a.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${n.checkbox?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`,children:n.checkbox?"✓ Checked":"☐ Unchecked"})]}),a.jsxs("div",{className:"flex items-center justify-between py-1",children:[a.jsx("span",{children:"Subscribe to newsletter:"}),a.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${n.newsletter?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`,children:n.newsletter?"✓ Checked":"☐ Unchecked"})]}),a.jsxs("div",{className:"flex items-center justify-between py-1",children:[a.jsx("span",{children:"Receive marketing emails:"}),a.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${n.marketing?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`,children:n.marketing?"✓ Checked":"☐ Unchecked"})]})]}),a.jsxs("details",{className:"mt-2",children:[a.jsx("summary",{className:"text-xs text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300",children:"Show JSON"}),a.jsx("pre",{className:"text-xs text-gray-800 dark:text-gray-200 font-mono bg-gray-900 dark:bg-slate-900 p-2 rounded-lg border border-gray-700 dark:border-slate-600 overflow-x-auto mt-2",children:a.jsx("code",{className:"text-green-400 dark:text-green-300",children:JSON.stringify({checkbox:n.checkbox,newsletter:n.newsletter,marketing:n.marketing},null,2)})})]})]}):a.jsx("pre",{className:"text-xs text-gray-800 dark:text-gray-200 font-mono bg-gray-900 dark:bg-slate-900 p-2 rounded-lg border border-gray-700 dark:border-slate-600 overflow-x-auto",children:a.jsx("code",{className:"text-green-400 dark:text-green-300",children:JSON.stringify(n[e.id],null,2)})})})]})]}):a.jsx("div",{className:"text-center py-12 flex-1 flex items-center justify-center",children:a.jsxs("div",{children:[a.jsx("div",{className:"w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4",children:a.jsx("svg",{className:"w-8 h-8 text-gray-400 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-2",children:"No Component Selected"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200",children:"Choose a component from the sidebar to see its preview and details."})]})})]})}),a.jsx("div",{className:"w-3/5 min-w-0 flex flex-col",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full min-h-[300px]",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-3 flex-shrink-0",children:"Code Example"}),e?a.jsxs("div",{className:"flex flex-col space-y-3 flex-1 min-h-0",children:[a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex flex-col h-[300px]",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2 flex-shrink-0",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200",children:"Component Code"}),a.jsx("button",{onClick:()=>{navigator.clipboard.writeText(um(e)),s(!0),setTimeout(()=>s(!1),2e3)},className:`flex items-center space-x-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${r?"text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20":"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"}`,children:r?a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:"Copied!"})]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-4 3H9m10 0a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2h3"})}),a.jsx("span",{children:"Copy"})]})})]}),a.jsxs("div",{className:"relative flex-1 min-h-0 bg-gray-900 dark:bg-slate-900 rounded-lg border border-gray-700 dark:border-slate-600 overflow-hidden",children:[a.jsx("div",{className:"absolute top-2 right-2 z-10",children:a.jsxs("div",{className:"flex space-x-1",children:[a.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})}),a.jsx("div",{className:"h-full overflow-auto p-3",children:a.jsx("pre",{className:"text-xs text-gray-100 dark:text-gray-300 font-mono leading-relaxed whitespace-pre-wrap",children:a.jsx("code",{children:um(e)})})})]})]}),a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex-shrink-0",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Usage Instructions"}),a.jsxs("div",{className:"text-sm text-gray-600 dark:text-blue-300 space-y-1",children:[a.jsx("p",{children:"• Click and interact with the component on the left"}),a.jsx("p",{children:"• Copy the code example above to use in your project"}),a.jsx("p",{children:"• All components are fully responsive and support dark mode"})]})]})]}):a.jsx("div",{className:"text-center py-12 flex-1 flex items-center justify-center",children:a.jsxs("div",{children:[a.jsx("div",{className:"w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4",children:a.jsx("svg",{className:"w-8 h-8 text-gray-400 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-2",children:"No Code to Display"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200",children:"Select a component to see its code example and usage instructions."})]})})]})})]})})})},mm=[{id:"alert",name:"Alert",description:"Alert messages for important information"},{id:"toast",name:"Toast",description:"Temporary notification messages"},{id:"modal",name:"Modal",description:"Overlay dialog for user interaction"},{id:"popover",name:"Popover",description:"Floating content container"},{id:"tooltip",name:"Tooltip",description:"Contextual help text on hover"},{id:"loading",name:"Loading",description:"Loading indicators and spinners"},{id:"progress",name:"Progress",description:"Progress bars and circular progress"}],En=({type:e="info",title:t,message:r,dismissible:s=!0,onDismiss:l,className:n=""})=>{const[i,o]=p.useState(!0),d=()=>{o(!1),l&&l()};if(!i)return null;const c={success:{container:"bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",icon:"text-green-400",title:"text-green-800 dark:text-green-200",message:"text-green-700 dark:text-green-300",iconPath:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},error:{container:"bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",icon:"text-red-400",title:"text-red-800 dark:text-red-200",message:"text-red-700 dark:text-red-300",iconPath:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},warning:{container:"bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",icon:"text-yellow-400",title:"text-yellow-800 dark:text-yellow-200",message:"text-yellow-700 dark:text-yellow-300",iconPath:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"},info:{container:"bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",icon:"text-blue-400",title:"text-blue-800 dark:text-blue-200",message:"text-blue-700 dark:text-blue-300",iconPath:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}},u=c[e]||c.info;return a.jsx("div",{className:`rounded-lg border p-4 ${u.container} ${n}`,role:"alert",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:`h-5 w-5 ${u.icon}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:u.iconPath})})}),a.jsxs("div",{className:"ml-3 flex-1",children:[t&&a.jsx("h3",{className:`text-sm font-medium ${u.title}`,children:t}),r&&a.jsx("div",{className:`mt-1 text-sm ${u.message}`,children:a.jsx("p",{children:r})})]}),s&&a.jsx("div",{className:"ml-auto pl-3",children:a.jsx("div",{className:"-mx-1.5 -my-1.5",children:a.jsxs("button",{type:"button",onClick:d,className:`inline-flex rounded-md p-1.5 ${u.icon} hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-gray-600`,children:[a.jsx("span",{className:"sr-only",children:"Dismiss"}),a.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})})})]})})},zn=({type:e="info",title:t,message:r,duration:s=5e3,position:l="top-right",onClose:n,className:i=""})=>{const[o,d]=p.useState(!0),[c,u]=p.useState(!1);p.useEffect(()=>{if(s>0){const y=setTimeout(()=>{m()},s);return()=>clearTimeout(y)}},[s]);const m=()=>{u(!0),setTimeout(()=>{d(!1),n&&n()},300)};if(!o)return null;const x={success:{container:"bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",icon:"text-green-400",title:"text-green-800 dark:text-green-200",message:"text-green-700 dark:text-green-300",iconPath:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},error:{container:"bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",icon:"text-red-400",title:"text-red-800 dark:text-red-200",message:"text-red-700 dark:text-red-300",iconPath:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},warning:{container:"bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",icon:"text-yellow-400",title:"text-yellow-800 dark:text-yellow-200",message:"text-yellow-700 dark:text-yellow-300",iconPath:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"},info:{container:"bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",icon:"text-blue-400",title:"text-blue-800 dark:text-blue-200",message:"text-blue-700 dark:text-blue-300",iconPath:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}},b={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4","top-center":"top-4 left-1/2 transform -translate-x-1/2","bottom-center":"bottom-4 left-1/2 transform -translate-x-1/2"},j=x[e]||x.info,k=b[l]||b["top-right"];return a.jsx("div",{className:`fixed z-[60] max-w-sm w-full ${k} ${i}`,role:"alert",children:a.jsx("div",{className:`rounded-lg border p-4 shadow-lg transition-all duration-300 ${c?"opacity-0 transform scale-95 translate-y-2":"opacity-100 transform scale-100 translate-y-0"} ${j.container}`,children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:`h-5 w-5 ${j.icon}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:j.iconPath})})}),a.jsxs("div",{className:"ml-3 flex-1",children:[t&&a.jsx("h3",{className:`text-sm font-medium ${j.title}`,children:t}),r&&a.jsx("div",{className:`mt-1 text-sm ${j.message}`,children:a.jsx("p",{children:r})})]}),a.jsx("div",{className:"ml-auto pl-3",children:a.jsx("div",{className:"-mx-1.5 -my-1.5",children:a.jsxs("button",{type:"button",onClick:m,className:`inline-flex rounded-md p-1.5 ${j.icon} hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-gray-600`,children:[a.jsx("span",{className:"sr-only",children:"Dismiss"}),a.jsx("svg",{className:"h-3 w-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})})})]})})})},q1=({isOpen:e,onClose:t,title:r,children:s,size:l="md",showCloseButton:n=!0,closeOnOverlayClick:i=!0,className:o=""})=>{const[d,c]=p.useState(!1);p.useEffect(()=>(e?(c(!0),document.body.style.overflow="hidden"):document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),p.useEffect(()=>{const x=b=>{b.key==="Escape"&&e&&t()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e,t]);const u=x=>{x.target===x.currentTarget&&i&&t()},m={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl",full:"max-w-full mx-4"};return e?a.jsx("div",{className:`fixed inset-0 z-50 overflow-y-auto ${o}`,"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:a.jsxs("div",{className:"flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",children:[a.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true",onClick:u}),a.jsxs("div",{className:`relative inline-block transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:align-middle ${m[l]}`,children:[r&&a.jsxs("div",{className:"flex items-center justify-between border-b border-gray-200 dark:border-slate-700 px-6 py-4",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100",id:"modal-title",children:r}),n&&a.jsxs("button",{type:"button",onClick:t,className:"rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}),a.jsx("div",{className:"px-6 py-4",children:s}),a.jsxs("div",{className:"flex justify-end space-x-3 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 px-6 py-4",children:[a.jsx("button",{type:"button",onClick:t,className:"rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Cancel"}),a.jsx("button",{type:"button",onClick:t,className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Confirm"})]})]})]})}):null},xm=({trigger:e,children:t,title:r,placement:s="bottom",triggerType:l="click",className:n=""})=>{const[i,o]=p.useState(!1),[d,c]=p.useState({top:0,left:0}),u=p.useRef(null),m=p.useRef(null);p.useEffect(()=>{var k;if(i&&u.current){const y=u.current.getBoundingClientRect(),g=(k=m.current)==null?void 0:k.getBoundingClientRect();let h=0,f=0;switch(s){case"top":h=y.top-((g==null?void 0:g.height)||0)-8,f=y.left+y.width/2-((g==null?void 0:g.width)||0)/2;break;case"bottom":h=y.bottom+8,f=y.left+y.width/2-((g==null?void 0:g.width)||0)/2;break;case"left":h=y.top+y.height/2-((g==null?void 0:g.height)||0)/2,f=y.left-((g==null?void 0:g.width)||0)-8;break;case"right":h=y.top+y.height/2-((g==null?void 0:g.height)||0)/2,f=y.right+8;break;default:h=y.bottom+8,f=y.left+y.width/2-((g==null?void 0:g.width)||0)/2}const v=window.innerWidth,w=window.innerHeight;f<8&&(f=8),f+((g==null?void 0:g.width)||0)>v-8&&(f=v-((g==null?void 0:g.width)||0)-8),h<8&&(h=8),h+((g==null?void 0:g.height)||0)>w-8&&(h=w-((g==null?void 0:g.height)||0)-8),c({top:h,left:f})}},[i,s]),p.useEffect(()=>{const k=y=>{m.current&&!m.current.contains(y.target)&&u.current&&!u.current.contains(y.target)&&o(!1)};return i&&document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[i]);const x=()=>{l==="click"&&o(!i)},b=()=>{l==="hover"&&o(!0)},j=()=>{l==="hover"&&o(!1)};return a.jsxs("div",{className:`relative inline-block ${n}`,children:[a.jsx("div",{ref:u,onClick:x,onMouseEnter:b,onMouseLeave:j,className:"cursor-pointer",children:e}),i&&a.jsxs("div",{ref:m,className:"fixed z-50 w-64 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg",style:{top:`${d.top}px`,left:`${d.left}px`},children:[r&&a.jsx("div",{className:"border-b border-gray-200 dark:border-slate-700 px-4 py-3",children:a.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-blue-100",children:r})}),a.jsx("div",{className:"p-4",children:t})]})]})},Ws=({children:e,content:t,placement:r="top",delay:s=200,className:l=""})=>{const[n,i]=p.useState(!1),[o,d]=p.useState({top:0,left:0}),c=p.useRef(null),u=p.useRef(null),m=p.useRef(null);p.useEffect(()=>{var j;if(n&&c.current){const k=c.current.getBoundingClientRect(),y=(j=u.current)==null?void 0:j.getBoundingClientRect();let g=0,h=0;switch(r){case"top":g=k.top-((y==null?void 0:y.height)||0)-8,h=k.left+k.width/2-((y==null?void 0:y.width)||0)/2;break;case"bottom":g=k.bottom+8,h=k.left+k.width/2-((y==null?void 0:y.width)||0)/2;break;case"left":g=k.top+k.height/2-((y==null?void 0:y.height)||0)/2,h=k.left-((y==null?void 0:y.width)||0)-8;break;case"right":g=k.top+k.height/2-((y==null?void 0:y.height)||0)/2,h=k.right+8;break;default:g=k.top-((y==null?void 0:y.height)||0)-8,h=k.left+k.width/2-((y==null?void 0:y.width)||0)/2}const f=window.innerWidth,v=window.innerHeight;h<8&&(h=8),h+((y==null?void 0:y.width)||0)>f-8&&(h=f-((y==null?void 0:y.width)||0)-8),g<8&&(g=8),g+((y==null?void 0:y.height)||0)>v-8&&(g=v-((y==null?void 0:y.height)||0)-8),d({top:g,left:h})}},[n,r]);const x=()=>{m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{i(!0)},s)},b=()=>{m.current&&clearTimeout(m.current),i(!1)};return p.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]),a.jsxs("div",{className:`relative inline-block ${l}`,children:[a.jsx("div",{ref:c,onMouseEnter:x,onMouseLeave:b,className:"cursor-pointer",children:e}),n&&a.jsxs("div",{ref:u,className:"fixed z-50 max-w-xs rounded-lg bg-gray-900 dark:bg-slate-700 px-3 py-2 text-sm text-white shadow-lg",style:{top:`${o.top}px`,left:`${o.left}px`},children:[t,a.jsx("div",{className:`absolute w-2 h-2 bg-gray-900 dark:bg-slate-700 transform rotate-45 ${r==="top"?"top-full left-1/2 -translate-x-1/2 -translate-y-1":r==="bottom"?"bottom-full left-1/2 -translate-x-1/2 translate-y-1":r==="left"?"left-full top-1/2 -translate-y-1/2 -translate-x-1":"right-full top-1/2 -translate-y-1/2 translate-x-1"}`})]})]})},za=({type:e="spinner",size:t="md",color:r="blue",text:s="Loading...",overlay:l=!1,className:n=""})=>{const[i,o]=p.useState("");p.useEffect(()=>{if(e==="dots"){const f=setInterval(()=>{o(v=>v==="..."?"":v+".")},500);return()=>clearInterval(f)}},[e]);const d={sm:"w-4 h-4",md:"w-8 h-8",lg:"w-12 h-12",xl:"w-16 h-16"},c={blue:"text-blue-600 dark:text-blue-400",green:"text-green-600 dark:text-green-400",red:"text-red-600 dark:text-red-400",yellow:"text-yellow-600 dark:text-yellow-400",purple:"text-purple-600 dark:text-purple-400",gray:"text-gray-600 dark:text-gray-400"},u={sm:"w-4 h-4",md:"w-8 h-8",lg:"w-12 h-12",xl:"w-16 h-16"},m={sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl"},x=()=>a.jsx("div",{className:`animate-spin ${u[t]} ${c[r]}`,children:a.jsx("svg",{className:"w-full h-full",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),b=()=>a.jsxs("div",{className:`${m[t]} ${c[r]} font-mono`,children:[s,i]}),j=()=>a.jsx("div",{className:"flex space-x-1",children:[0,1,2].map(f=>a.jsx("div",{className:`${d[t]} bg-current rounded-full animate-pulse`,style:{animationDelay:`${f*.2}s`,animationDuration:"1s"}},f))}),k=()=>a.jsx("div",{className:"flex space-x-1 items-end",children:[0,1,2,3,4].map(f=>a.jsx("div",{className:"w-1 bg-current rounded-full animate-pulse",style:{height:`${12+f*4}px`,animationDelay:`${f*.1}s`,animationDuration:"1.2s"}},f))}),y=()=>a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"}),a.jsx("div",{className:"h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4 animate-pulse"}),a.jsx("div",{className:"h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/2 animate-pulse"})]}),g=()=>{switch(e){case"spinner":return x();case"dots":return b();case"pulse":return j();case"bars":return k();case"skeleton":return y();default:return x()}},h=a.jsxs("div",{className:`flex flex-col items-center justify-center space-y-2 ${n}`,children:[a.jsx("div",{className:c[r],children:g()}),s&&e!=="dots"&&a.jsx("div",{className:`${m[t]} ${c[r]}`,children:s})]});return l?a.jsx("div",{className:"fixed inset-0 bg-white dark:bg-slate-900 bg-opacity-75 dark:bg-opacity-75 flex items-center justify-center z-50",children:a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:h})}):h},$r=({value:e=0,max:t=100,size:r="md",color:s="blue",showLabel:l=!0,showPercentage:n=!0,animated:i=!1,striped:o=!1,label:d="",className:c=""})=>{const[u,m]=p.useState(0);p.useEffect(()=>{if(i){const g=setTimeout(()=>{m(e)},100);return()=>clearTimeout(g)}else m(e)},[e,i]);const x=Math.min(Math.max(u/t*100,0),100),b={sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4"},j={blue:"bg-blue-600 dark:bg-blue-500",green:"bg-green-600 dark:bg-green-500",red:"bg-red-600 dark:bg-red-500",yellow:"bg-yellow-600 dark:bg-yellow-500",purple:"bg-purple-600 dark:bg-purple-500",gray:"bg-gray-600 dark:bg-gray-500"},k={sm:"text-xs",md:"text-sm",lg:"text-base",xl:"text-lg"},y=()=>o?"bg-gradient-to-r from-transparent via-white to-transparent bg-[length:20px_20px] animate-pulse":"";return a.jsxs("div",{className:`w-full ${c}`,children:[l&&(d||n)&&a.jsxs("div",{className:"flex justify-between items-center mb-2",children:[d&&a.jsx("span",{className:`${k[r]} font-medium text-gray-700 dark:text-blue-200`,children:d}),n&&a.jsxs("span",{className:`${k[r]} font-medium text-gray-600 dark:text-blue-300`,children:[Math.round(x),"%"]})]}),a.jsx("div",{className:`w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden ${b[r]}`,children:a.jsx("div",{className:`h-full transition-all duration-300 ease-out ${j[s]} ${y()}`,style:{width:`${x}%`,transition:i?"width 0.5s ease-out":"none"}})}),!n&&a.jsxs("div",{className:"flex justify-between items-center mt-1",children:[a.jsx("span",{className:`${k[r]} text-gray-600 dark:text-blue-300`,children:u}),a.jsx("span",{className:`${k[r]} text-gray-500 dark:text-blue-400`,children:t})]})]})},An=({value:e=0,max:t=100,size:r="md",color:s="blue",showPercentage:l=!0,animated:n=!1,strokeWidth:i=4,className:o=""})=>{const[d,c]=p.useState(0);p.useEffect(()=>{if(n){const g=setTimeout(()=>{c(e)},100);return()=>clearTimeout(g)}else c(e)},[e,n]);const u=Math.min(Math.max(d/t*100,0),100),m=r==="sm"?20:r==="md"?30:r==="lg"?40:50,x=2*Math.PI*m,b=x-u/100*x,j={sm:"w-12 h-12",md:"w-16 h-16",lg:"w-24 h-24",xl:"w-32 h-32"},k={blue:"stroke-blue-600 dark:stroke-blue-500",green:"stroke-green-600 dark:stroke-green-500",red:"stroke-red-600 dark:stroke-red-500",yellow:"stroke-yellow-600 dark:stroke-yellow-500",purple:"stroke-purple-600 dark:stroke-purple-500",gray:"stroke-gray-600 dark:stroke-gray-500"},y={sm:"text-xs",md:"text-sm",lg:"text-base",xl:"text-lg"};return a.jsxs("div",{className:`relative inline-flex items-center justify-center ${j[r]} ${o}`,children:[a.jsxs("svg",{className:"transform -rotate-90",width:m*2+i*2,height:m*2+i*2,children:[a.jsx("circle",{cx:m+i/2,cy:m+i/2,r:m,stroke:"currentColor",strokeWidth:i,fill:"none",className:"text-gray-200 dark:text-slate-700"}),a.jsx("circle",{cx:m+i/2,cy:m+i/2,r:m,stroke:"currentColor",strokeWidth:i,fill:"none",strokeDasharray:x,strokeDashoffset:b,strokeLinecap:"round",className:`transition-all duration-300 ease-out ${k[s]}`,style:{transition:n?"stroke-dashoffset 0.5s ease-out":"none"}})]}),l&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsxs("span",{className:`${y[r]} font-medium text-gray-700 dark:text-blue-200`,children:[Math.round(u),"%"]})})]})},F1=({componentId:e,formData:t,handleInputChange:r})=>{const[s,l]=p.useState(!1),[n,i]=p.useState(!1),[o,d]=p.useState(!1),[c,u]=p.useState(!1),[m,x]=p.useState(!1);switch(e){case"alert":return a.jsxs("div",{className:"space-y-4",children:[a.jsx(En,{type:"success",title:"Success!",message:"Your action was completed successfully.",dismissible:!0}),a.jsx(En,{type:"error",title:"Error",message:"Something went wrong. Please try again.",dismissible:!0}),a.jsx(En,{type:"warning",title:"Warning",message:"Please review your input before proceeding.",dismissible:!0}),a.jsx(En,{type:"info",title:"Information",message:"Here's some helpful information for you.",dismissible:!0})]});case"toast":return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx("button",{onClick:()=>{i(!0),setTimeout(()=>i(!1),3e3)},className:"px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors",children:"Show Success Toast"}),a.jsx("button",{onClick:()=>{d(!0),setTimeout(()=>d(!1),3e3)},className:"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors",children:"Show Error Toast"}),a.jsx("button",{onClick:()=>{u(!0),setTimeout(()=>u(!1),3e3)},className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Show Info Toast"}),a.jsx("button",{onClick:()=>{x(!0),setTimeout(()=>x(!1),3e3)},className:"px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors",children:"Show Warning Toast"})]}),n&&a.jsx(zn,{type:"success",title:"Success!",message:"Your action was completed successfully.",duration:3e3,position:"top-right",onClose:()=>i(!1)}),o&&a.jsx(zn,{type:"error",title:"Error",message:"Something went wrong. Please try again.",duration:3e3,position:"top-right",onClose:()=>d(!1)}),c&&a.jsx(zn,{type:"info",title:"Information",message:"Here's some useful information for you.",duration:3e3,position:"top-right",onClose:()=>u(!1)}),m&&a.jsx(zn,{type:"warning",title:"Warning",message:"Please check your input before proceeding.",duration:3e3,position:"top-right",onClose:()=>x(!1)})]});case"modal":return a.jsxs("div",{className:"space-y-4",children:[a.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Open Modal"}),s&&a.jsx(q1,{isOpen:s,onClose:()=>l(!1),title:"Example Modal",size:"md",children:a.jsxs("div",{className:"space-y-4",children:[a.jsx("p",{className:"text-gray-600 dark:text-blue-300",children:"This is an example modal dialog. You can put any content here."}),a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 p-4 rounded-lg",children:[a.jsx("h4",{className:"font-medium text-gray-900 dark:text-blue-100 mb-2",children:"Modal Content"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-300",children:"This modal demonstrates how to display important information or collect user input in a focused interface."})]})]})})]});case"popover":return a.jsx("div",{className:"space-y-4",children:a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(xm,{trigger:a.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors",children:"Click Popover"}),title:"Popover Title",placement:"bottom",triggerType:"click",children:a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-300",children:"This is a popover that appears on click."}),a.jsx("button",{className:"w-full px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors",children:"Action Button"})]})}),a.jsx(xm,{trigger:a.jsx("button",{className:"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",children:"Hover Popover"}),title:"Hover Popover",placement:"top",triggerType:"hover",children:a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-300",children:"This popover appears on hover."}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-blue-400",children:"Hover to see this content"})]})})]})});case"tooltip":return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(Ws,{content:"This is a tooltip on the top",placement:"top",children:a.jsx("button",{className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",children:"Top Tooltip"})}),a.jsx(Ws,{content:"This is a tooltip on the bottom",placement:"bottom",children:a.jsx("button",{className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",children:"Bottom Tooltip"})}),a.jsx(Ws,{content:"This is a tooltip on the left",placement:"left",children:a.jsx("button",{className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",children:"Left Tooltip"})}),a.jsx(Ws,{content:"This is a tooltip on the right",placement:"right",children:a.jsx("button",{className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",children:"Right Tooltip"})})]}),a.jsx("div",{className:"mt-6",children:a.jsx(Ws,{content:"Hover over this text to see a tooltip",children:a.jsx("span",{className:"text-blue-600 dark:text-blue-400 cursor-pointer underline",children:"Hover over this text"})})})]});case"loading":return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Spinner Loading"}),a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(za,{type:"spinner",size:"sm",color:"blue",text:"Small"}),a.jsx(za,{type:"spinner",size:"md",color:"green",text:"Medium"}),a.jsx(za,{type:"spinner",size:"lg",color:"purple",text:"Large"})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Dots Loading"}),a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(za,{type:"dots",size:"sm",color:"blue",text:"Loading"}),a.jsx(za,{type:"dots",size:"md",color:"red",text:"Processing"})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Pulse Loading"}),a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(za,{type:"pulse",size:"sm",color:"yellow",text:"Pulse"}),a.jsx(za,{type:"bars",size:"md",color:"purple",text:"Bars"})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Skeleton Loading"}),a.jsx(za,{type:"skeleton",size:"md",color:"gray",text:""})]})]});case"progress":return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Linear Progress"}),a.jsxs("div",{className:"space-y-3",children:[a.jsx($r,{value:25,color:"blue",label:"Basic Progress"}),a.jsx($r,{value:50,color:"green",label:"Half Complete"}),a.jsx($r,{value:75,color:"purple",label:"Almost Done"}),a.jsx($r,{value:100,color:"red",label:"Complete"})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Circular Progress"}),a.jsxs("div",{className:"flex space-x-6",children:[a.jsx(An,{value:25,size:"sm",color:"blue"}),a.jsx(An,{value:50,size:"md",color:"green"}),a.jsx(An,{value:75,size:"lg",color:"purple"}),a.jsx(An,{value:100,size:"xl",color:"red"})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Animated Progress"}),a.jsxs("div",{className:"space-y-3",children:[a.jsx($r,{value:60,color:"blue",animated:!0,striped:!0,label:"Animated Striped"}),a.jsx($r,{value:80,color:"green",animated:!0,label:"Animated Progress"})]})]})]});default:return a.jsx("div",{children:"Component not found"})}},pm=e=>{if(!e)return"";switch(e.id){case"alert":return`// Complete Alert Component - Copy & Paste Ready
import { useState } from 'react';

const Alert = ({
  type = 'info',
  title,
  message,
  dismissible = true,
  onDismiss,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!isVisible) return null;

  const typeStyles = {
    success: {
      container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      icon: 'text-green-400',
      title: 'text-green-800 dark:text-green-200',
      message: 'text-green-700 dark:text-green-300',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    error: {
      container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      icon: 'text-red-400',
      title: 'text-red-800 dark:text-red-200',
      message: 'text-red-700 dark:text-red-300',
      iconPath: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    warning: {
      container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
      icon: 'text-yellow-400',
      title: 'text-yellow-800 dark:text-yellow-200',
      message: 'text-yellow-700 dark:text-yellow-300',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
    },
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      icon: 'text-blue-400',
      title: 'text-blue-800 dark:text-blue-200',
      message: 'text-blue-700 dark:text-blue-300',
      iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  };

  const styles = typeStyles[type] || typeStyles.info;

  return (
    <div
      className={\`rounded-lg border p-4 \${styles.container} \${className}\`}
      role="alert"
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className={\`h-5 w-5 \${styles.icon}\`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={styles.iconPath}
            />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={\`text-sm font-medium \${styles.title}\`}>{title}</h3>
          )}
          {message && (
            <div className={\`mt-1 text-sm \${styles.message}\`}>
              <p>{message}</p>
            </div>
          )}
        </div>
        {dismissible && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={handleDismiss}
                className={\`inline-flex rounded-md p-1.5 \${styles.icon} hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-gray-600\`}
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AlertExample = () => {
  return (
    <div className="space-y-4">
      <Alert
        type="success"
        title="Success!"
        message="Your action was completed successfully."
        dismissible={true}
      />
      <Alert
        type="error"
        title="Error"
        message="Something went wrong. Please try again."
        dismissible={true}
      />
    </div>
  );
};

export default AlertExample;`;case"toast":return`// Complete Toast Component - Copy & Paste Ready
import { useState, useEffect } from 'react';

const Toast = ({
  type = 'info',
  title,
  message,
  duration = 5000,
  position = 'top-right',
  onClose,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  if (!isVisible) return null;

  const typeStyles = {
    success: {
      container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      icon: 'text-green-400',
      title: 'text-green-800 dark:text-green-200',
      message: 'text-green-700 dark:text-green-300',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    error: {
      container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      icon: 'text-red-400',
      title: 'text-red-800 dark:text-red-200',
      message: 'text-red-700 dark:text-red-300',
      iconPath: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    warning: {
      container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
      icon: 'text-yellow-400',
      title: 'text-yellow-800 dark:text-yellow-200',
      message: 'text-yellow-700 dark:text-yellow-300',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z',
    },
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      icon: 'text-blue-400',
      title: 'text-blue-800 dark:text-blue-200',
      message: 'text-blue-700 dark:text-blue-300',
      iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  };

  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };

  const styles = typeStyles[type] || typeStyles.info;
  const positionClass = positionStyles[position] || positionStyles['top-right'];

  return (
    <div
      className={\`fixed z-50 max-w-sm w-full \${positionClass} \${className}\`}
      role="alert"
    >
      <div
        className={\`rounded-lg border p-4 shadow-lg transition-all duration-300 \${
          isExiting
            ? 'opacity-0 transform scale-95 translate-y-2'
            : 'opacity-100 transform scale-100 translate-y-0'
        } \${styles.container}\`}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className={\`h-5 w-5 \${styles.icon}\`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={styles.iconPath}
              />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            {title && (
              <h3 className={\`text-sm font-medium \${styles.title}\`}>{title}</h3>
            )}
            {message && (
              <div className={\`mt-1 text-sm \${styles.message}\`}>
                <p>{message}</p>
              </div>
            )}
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={handleClose}
                className={\`inline-flex rounded-md p-1.5 \${styles.icon} hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-gray-600\`}
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToastExample = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowToast(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Show Toast
      </button>
      {showToast && (
        <Toast
          type="success"
          title="Success!"
          message="Your action was completed successfully."
          duration={3000}
          position="top-right"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ToastExample;`;case"modal":return`// Complete Modal Component - Copy & Paste Ready
import { useState, useEffect } from 'react';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  const sizeStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4',
  };

  if (!isOpen) return null;

  return (
    <div
      className={\`fixed inset-0 z-50 overflow-y-auto \${className}\`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={handleOverlayClick}
        ></div>

        {/* Modal panel */}
        <div
          className={\`relative inline-block transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:align-middle \${sizeStyles[size]}\`}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-700 px-6 py-4">
              <h3
                className="text-lg font-medium text-gray-900 dark:text-blue-100"
                id="modal-title"
              >
                {title}
              </h3>
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className="px-6 py-4">
            {children}
          </div>

          {/* Footer */}
          <div className="flex justify-end space-x-3 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Open Modal
      </button>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Example Modal"
          size="md"
        >
          <p className="text-gray-600 dark:text-blue-300">
            This is an example modal dialog. You can put any content here.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default ModalExample;`;case"popover":return`// Complete Popover Component - Copy & Paste Ready
import { useState, useRef, useEffect } from 'react';

const Popover = ({
  trigger,
  children,
  title,
  placement = 'bottom',
  triggerType = 'click',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current?.getBoundingClientRect();
      
      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = triggerRect.top - (popoverRect?.height || 0) - 8;
          left = triggerRect.left + triggerRect.width / 2 - (popoverRect?.width || 0) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + triggerRect.width / 2 - (popoverRect?.width || 0) / 2;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - (popoverRect?.height || 0) / 2;
          left = triggerRect.left - (popoverRect?.width || 0) - 8;
          break;
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - (popoverRect?.height || 0) / 2;
          left = triggerRect.right + 8;
          break;
        default:
          top = triggerRect.bottom + 8;
          left = triggerRect.left + triggerRect.width / 2 - (popoverRect?.width || 0) / 2;
      }

      // Keep popover within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      if (left < 8) left = 8;
      if (left + (popoverRect?.width || 0) > viewportWidth - 8) {
        left = viewportWidth - (popoverRect?.width || 0) - 8;
      }
      if (top < 8) top = 8;
      if (top + (popoverRect?.height || 0) > viewportHeight - 8) {
        top = viewportHeight - (popoverRect?.height || 0) - 8;
      }

      setPosition({ top, left });
    }
  }, [isOpen, placement]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    if (triggerType === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleTriggerHover = () => {
    if (triggerType === 'hover') {
      setIsOpen(true);
    }
  };

  const handleTriggerLeave = () => {
    if (triggerType === 'hover') {
      setIsOpen(false);
    }
  };

  return (
    <div className={\`relative inline-block \${className}\`}>
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        onMouseEnter={handleTriggerHover}
        onMouseLeave={handleTriggerLeave}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={popoverRef}
          className="fixed z-50 w-64 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg"
          style={{
            top: \`\${position.top}px\`,
            left: \`\${position.left}px\`,
          }}
        >
          {title && (
            <div className="border-b border-gray-200 dark:border-slate-700 px-4 py-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-blue-100">
                {title}
              </h3>
            </div>
          )}
          <div className="p-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const PopoverExample = () => {
  return (
    <Popover
      trigger={
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
          Click Popover
        </button>
      }
      title="Popover Title"
      placement="bottom"
      triggerType="click"
    >
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-blue-300">
          This is a popover that appears on click.
        </p>
        <button className="w-full px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
          Action Button
        </button>
      </div>
    </Popover>
  );
};

export default PopoverExample;`;case"tooltip":return`// Complete Tooltip Component - Copy & Paste Ready
import { useState, useRef, useEffect } from 'react';

const Tooltip = ({
  children,
  content,
  placement = 'top',
  delay = 200,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current?.getBoundingClientRect();
      
      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = triggerRect.top - (tooltipRect?.height || 0) - 8;
          left = triggerRect.left + triggerRect.width / 2 - (tooltipRect?.width || 0) / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + triggerRect.width / 2 - (tooltipRect?.width || 0) / 2;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - (tooltipRect?.height || 0) / 2;
          left = triggerRect.left - (tooltipRect?.width || 0) - 8;
          break;
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - (tooltipRect?.height || 0) / 2;
          left = triggerRect.right + 8;
          break;
        default:
          top = triggerRect.top - (tooltipRect?.height || 0) - 8;
          left = triggerRect.left + triggerRect.width / 2 - (tooltipRect?.width || 0) / 2;
      }

      // Keep tooltip within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      if (left < 8) left = 8;
      if (left + (tooltipRect?.width || 0) > viewportWidth - 8) {
        left = viewportWidth - (tooltipRect?.width || 0) - 8;
      }
      if (top < 8) top = 8;
      if (top + (tooltipRect?.height || 0) > viewportHeight - 8) {
        top = viewportHeight - (tooltipRect?.height || 0) - 8;
      }

      setPosition({ top, left });
    }
  }, [isVisible, placement]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={\`relative inline-block \${className}\`}>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer"
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 max-w-xs rounded-lg bg-gray-900 dark:bg-slate-700 px-3 py-2 text-sm text-white shadow-lg"
          style={{
            top: \`\${position.top}px\`,
            left: \`\${position.left}px\`,
          }}
        >
          {content}
          {/* Arrow */}
          <div
            className={\`absolute w-2 h-2 bg-gray-900 dark:bg-slate-700 transform rotate-45 \${
              placement === 'top'
                ? 'top-full left-1/2 -translate-x-1/2 -translate-y-1'
                : placement === 'bottom'
                ? 'bottom-full left-1/2 -translate-x-1/2 translate-y-1'
                : placement === 'left'
                ? 'left-full top-1/2 -translate-y-1/2 -translate-x-1'
                : 'right-full top-1/2 -translate-y-1/2 translate-x-1'
            }\`}
          />
        </div>
      )}
    </div>
  );
};

const TooltipExample = () => {
  return (
    <Tooltip content="This is a tooltip" placement="top">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
        Hover for Tooltip
      </button>
    </Tooltip>
  );
};

export default TooltipExample;`;case"loading":return`// Complete Loading Component - Copy & Paste Ready
import { useState, useEffect } from 'react';

const Loading = ({
  type = 'spinner',
  size = 'md',
  color = 'blue',
  text = 'Loading...',
  overlay = false,
  className = '',
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (type === 'dots') {
      const interval = setInterval(() => {
        setDots((prev) => (prev === '...' ? '' : prev + '.'));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [type]);

  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorStyles = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    red: 'text-red-600 dark:text-red-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
    purple: 'text-purple-600 dark:text-purple-400',
    gray: 'text-gray-600 dark:text-gray-400',
  };

  const spinnerSizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const renderSpinner = () => (
    <div className={\`animate-spin \${spinnerSizes[size]} \${colorStyles[color]}\`}>
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </div>
  );

  const renderDots = () => (
    <div className={\`\${textSizes[size]} \${colorStyles[color]} font-mono\`}>
      {text}{dots}
    </div>
  );

  const renderPulse = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={\`\${sizeStyles[size]} bg-current rounded-full animate-pulse\`}
          style={{
            animationDelay: \`\${i * 0.2}s\`,
            animationDuration: '1s',
          }}
        />
      ))}
    </div>
  );

  const renderBars = () => (
    <div className="flex space-x-1 items-end">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={\`w-1 bg-current rounded-full animate-pulse\`}
          style={{
            height: \`\${12 + i * 4}px\`,
            animationDelay: \`\${i * 0.1}s\`,
            animationDuration: '1.2s',
          }}
        />
      ))}
    </div>
  );


  const renderContent = () => {
    switch (type) {
      case 'spinner':
        return renderSpinner();
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'bars':
        return renderBars();
      default:
        return renderSpinner();
    }
  };

  const content = (
    <div className={\`flex flex-col items-center justify-center space-y-2 \${className}\`}>
      <div className={colorStyles[color]}>
        {renderContent()}
      </div>
      {text && type !== 'dots' && (
        <div className={\`\${textSizes[size]} \${colorStyles[color]}\`}>
          {text}
        </div>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-slate-900 bg-opacity-75 dark:bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

const LoadingExample = () => {
  return (
    <div className="space-y-4">
      <Loading type="spinner" size="md" color="blue" text="Loading..." />
      <Loading type="dots" size="md" color="green" text="Processing" />
      <Loading type="pulse" size="md" color="purple" text="Working" />
    </div>
  );
};

export default LoadingExample;`;case"progress":return`// Complete Progress Component - Copy & Paste Ready
import { useState, useEffect } from 'react';

const Progress = ({
  value = 0,
  max = 100,
  size = 'md',
  color = 'blue',
  showLabel = true,
  showPercentage = true,
  animated = false,
  striped = false,
  label = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const percentage = Math.min(Math.max((displayValue / max) * 100, 0), 100);

  const sizeStyles = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  };

  const colorStyles = {
    blue: 'bg-blue-600 dark:bg-blue-500',
    green: 'bg-green-600 dark:bg-green-500',
    red: 'bg-red-600 dark:bg-red-500',
    yellow: 'bg-yellow-600 dark:bg-yellow-500',
    purple: 'bg-purple-600 dark:bg-purple-500',
    gray: 'bg-gray-600 dark:bg-gray-500',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  const getStripedClass = () => {
    if (striped) {
      return 'bg-gradient-to-r from-transparent via-white to-transparent bg-[length:20px_20px] animate-pulse';
    }
    return '';
  };

  return (
    <div className={\`w-full \${className}\`}>
      {/* Label */}
      {showLabel && (label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className={\`\${textSizes[size]} font-medium text-gray-700 dark:text-blue-200\`}>
              {label}
            </span>
          )}
          {showPercentage && (
            <span className={\`\${textSizes[size]} font-medium text-gray-600 dark:text-blue-300\`}>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      {/* Progress Bar */}
      <div className={\`w-full bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden \${sizeStyles[size]}\`}>
        <div
          className={\`h-full transition-all duration-300 ease-out \${colorStyles[color]} \${getStripedClass()}\`}
          style={{
            width: \`\${percentage}%\`,
            transition: animated ? 'width 0.5s ease-out' : 'none',
          }}
        />
      </div>

      {/* Value Display */}
      {!showPercentage && (
        <div className="flex justify-between items-center mt-1">
          <span className={\`\${textSizes[size]} text-gray-600 dark:text-blue-300\`}>
            {displayValue}
          </span>
          <span className={\`\${textSizes[size]} text-gray-500 dark:text-blue-400\`}>
            {max}
          </span>
        </div>
      )}
    </div>
  );
};

// Circular Progress Component
export const CircularProgress = ({
  value = 0,
  max = 100,
  size = 'md',
  color = 'blue',
  showPercentage = true,
  animated = false,
  strokeWidth = 4,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const percentage = Math.min(Math.max((displayValue / max) * 100, 0), 100);
  const radius = size === 'sm' ? 20 : size === 'md' ? 30 : size === 'lg' ? 40 : 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const sizeStyles = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  const colorStyles = {
    blue: 'stroke-blue-600 dark:stroke-blue-500',
    green: 'stroke-green-600 dark:stroke-green-500',
    red: 'stroke-red-600 dark:stroke-red-500',
    yellow: 'stroke-yellow-600 dark:stroke-yellow-500',
    purple: 'stroke-purple-600 dark:stroke-purple-500',
    gray: 'stroke-gray-600 dark:stroke-gray-500',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  return (
    <div className={\`relative inline-flex items-center justify-center \${sizeStyles[size]} \${className}\`}>
      <svg
        className="transform -rotate-90"
        width={radius * 2 + strokeWidth * 2}
        height={radius * 2 + strokeWidth * 2}
      >
        {/* Background circle */}
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200 dark:text-slate-700"
        />
        {/* Progress circle */}
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={\`transition-all duration-300 ease-out \${colorStyles[color]}\`}
          style={{
            transition: animated ? 'stroke-dashoffset 0.5s ease-out' : 'none',
          }}
        />
      </svg>
      
      {/* Percentage text */}
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={\`\${textSizes[size]} font-medium text-gray-700 dark:text-blue-200\`}>
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
};

const ProgressExample = () => {
  return (
    <div className="space-y-4">
      <Progress value={50} color="blue" label="Basic Progress" />
      <CircularProgress value={75} size="md" color="green" />
    </div>
  );
};

export default ProgressExample;`;default:return`// ${e.name} Component - Copy & Paste Ready
import { useState } from 'react';

const ${e.name.replace(/\s+/g,"")} = ({ content }) => {
  return (
    <div className="w-full">
      <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
        <p className="text-gray-600 dark:text-blue-300">
          ${e.description}
        </p>
      </div>
    </div>
  );
};

const ${e.name.replace(/\s+/g,"")}Example = () => {
  return (
    <${e.name.replace(/\s+/g,"")}
      content="${e.description}"
    />
  );
};

export default ${e.name.replace(/\s+/g,"")}Example;`}},V1=()=>{const[e,t]=p.useState(null),[r,s]=p.useState(!1),l=Rt(),[n,i]=p.useState({alert:{type:"info",title:"",message:""},toast:{type:"info",title:"",message:""},modal:{title:"",content:""},popover:{title:"",content:""},tooltip:{content:"",placement:"top"}});p.useEffect(()=>{const d=l.hash.substring(1);if(d){const c=mm.find(u=>u.id===d);c&&t(c)}else t(mm[0])},[l.hash]);const o=d=>{const{name:c,value:u,type:m,checked:x}=d.target;i(b=>({...b,[c]:m==="checkbox"?x:u}))};return a.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors",children:a.jsx("div",{className:"max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-3 h-full",children:a.jsxs("div",{className:"flex gap-4 h-full",children:[a.jsx("div",{className:"w-2/5 min-w-0 flex flex-col",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-3",children:e?e.name:"Select a Component"}),e?a.jsxs("div",{className:"space-y-3 flex-1 min-h-0",children:[a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Preview"}),a.jsx(F1,{componentId:e.id,formData:n,handleInputChange:o})]}),a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Current Value"}),a.jsx("div",{className:"relative",children:a.jsx("pre",{className:"text-xs text-gray-800 dark:text-gray-200 font-mono bg-gray-900 dark:bg-slate-900 p-2 rounded-lg border border-gray-700 dark:border-slate-600 overflow-x-auto",children:a.jsx("code",{className:"text-green-400 dark:text-green-300",children:JSON.stringify(n[e.id],null,2)})})})]})]}):a.jsx("div",{className:"text-center py-12 flex-1 flex items-center justify-center",children:a.jsxs("div",{children:[a.jsx("div",{className:"w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4",children:a.jsx("svg",{className:"w-8 h-8 text-gray-400 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-2",children:"No Component Selected"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200",children:"Choose a component from the sidebar to see its preview and details."})]})})]})}),a.jsx("div",{className:"w-3/5 min-w-0 flex flex-col",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full min-h-[300px]",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-3 flex-shrink-0",children:"Code Example"}),e?a.jsxs("div",{className:"flex flex-col space-y-3 flex-1 min-h-0",children:[a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex flex-col h-[300px]",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2 flex-shrink-0",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200",children:"Component Code"}),a.jsx("button",{onClick:()=>{navigator.clipboard.writeText(pm(e)),s(!0),setTimeout(()=>s(!1),2e3)},className:`flex items-center space-x-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${r?"text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20":"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"}`,children:r?a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:"Copied!"})]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-4 3H9m10 0a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2h3"})}),a.jsx("span",{children:"Copy"})]})})]}),a.jsxs("div",{className:"relative flex-1 min-h-0 bg-gray-900 dark:bg-slate-900 rounded-lg border border-gray-700 dark:border-slate-600 overflow-hidden",children:[a.jsx("div",{className:"absolute top-2 right-2 z-10",children:a.jsxs("div",{className:"flex space-x-1",children:[a.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})}),a.jsx("div",{className:"h-full overflow-auto p-3",children:a.jsx("pre",{className:"text-xs text-gray-100 dark:text-gray-300 font-mono leading-relaxed whitespace-pre-wrap",children:a.jsx("code",{children:pm(e)})})})]})]}),a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex-shrink-0",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Usage Instructions"}),a.jsxs("div",{className:"text-sm text-gray-600 dark:text-blue-300 space-y-1",children:[a.jsx("p",{children:"• Click and interact with the component on the left"}),a.jsx("p",{children:"• Copy the code example above to use in your project"}),a.jsx("p",{children:"• All components are fully responsive and support dark mode"})]})]})]}):a.jsx("div",{className:"text-center py-12 flex-1 flex items-center justify-center",children:a.jsxs("div",{children:[a.jsx("div",{className:"w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4",children:a.jsx("svg",{className:"w-8 h-8 text-gray-400 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-2",children:"No Code to Display"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200",children:"Select a component to see its code example and usage instructions."})]})})]})})]})})})},I1=({data:e=[],columns:t=[],sortable:r=!0,filterable:s=!0,pagination:l=!0,pageSize:n=10,striped:i=!1,hoverable:o=!0,className:d=""})=>{const[c,u]=p.useState({key:null,direction:"asc"}),[m,x]=p.useState(1),[b,j]=p.useState({}),k=e.length>0?e:[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"Inactive"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Moderator",status:"Active"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"User",status:"Active"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"Inactive"}],y=t.length>0?t:[{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0}],g=C=>{if(!r)return;let S="asc";c.key===C&&c.direction==="asc"&&(S="desc"),u({key:C,direction:S})},h=(C,S)=>{j(T=>({...T,[C]:S})),x(1)},f=()=>c.key?[...k].sort((C,S)=>{const T=C[c.key],z=S[c.key];return T<z?c.direction==="asc"?-1:1:T>z?c.direction==="asc"?1:-1:0}):k,v=()=>f().filter(S=>Object.entries(b).every(([T,z])=>{var O;return z?(O=S[T])==null?void 0:O.toString().toLowerCase().includes(z.toLowerCase()):!0})),w=()=>{const C=v();if(!l)return C;const S=(m-1)*n;return C.slice(S,S+n)},D=Math.ceil(v().length/n),N=C=>{const S="px-2 py-1 text-xs font-medium rounded-full";switch(C){case"Active":return`${S} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;case"Inactive":return`${S} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`;default:return`${S} bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200`}};return a.jsxs("div",{className:`w-full ${d}`,children:[s&&a.jsx("div",{className:"mb-4 flex flex-wrap gap-2",children:y.map(C=>a.jsx("input",{type:"text",placeholder:`Filter ${C.label}...`,value:b[C.key]||"",onChange:S=>h(C.key,S.target.value),className:"px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100"},C.key))}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-slate-700",children:[a.jsx("thead",{className:"bg-gray-50 dark:bg-slate-800",children:a.jsx("tr",{children:y.map(C=>a.jsx("th",{className:`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-300 uppercase tracking-wider ${C.sortable&&r?"cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700":""}`,onClick:()=>C.sortable&&g(C.key),children:a.jsxs("div",{className:"flex items-center space-x-1",children:[a.jsx("span",{children:C.label}),C.sortable&&r&&a.jsxs("div",{className:"flex flex-col",children:[a.jsx("svg",{className:`w-3 h-3 ${c.key===C.key&&c.direction==="asc"?"text-blue-600 dark:text-blue-400":"text-gray-400"}`,fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})}),a.jsx("svg",{className:`w-3 h-3 ${c.key===C.key&&c.direction==="desc"?"text-blue-600 dark:text-blue-400":"text-gray-400"}`,fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"})})]})]})},C.key))})}),a.jsx("tbody",{className:`bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700 ${i?"divide-y divide-gray-200 dark:divide-slate-700":""}`,children:w().map((C,S)=>a.jsx("tr",{className:`${o?"hover:bg-gray-50 dark:hover:bg-slate-800":""} ${i&&S%2===0?"bg-gray-50 dark:bg-slate-800":""}`,children:y.map(T=>a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-blue-100",children:T.key==="status"?a.jsx("span",{className:N(C[T.key]),children:C[T.key]}):C[T.key]},T.key))},C.id||S))})]})}),l&&D>1&&a.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[a.jsxs("div",{className:"text-sm text-gray-700 dark:text-blue-200",children:["Showing ",(m-1)*n+1," to"," ",Math.min(m*n,v().length)," of"," ",v().length," results"]}),a.jsxs("div",{className:"flex space-x-1",children:[a.jsx("button",{onClick:()=>x(C=>Math.max(C-1,1)),disabled:m===1,className:"px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-slate-800",children:"Previous"}),Array.from({length:D},(C,S)=>S+1).map(C=>a.jsx("button",{onClick:()=>x(C),className:`px-3 py-1 text-sm border rounded-md ${m===C?"bg-blue-600 text-white border-blue-600":"border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800"}`,children:C},C)),a.jsx("button",{onClick:()=>x(C=>Math.min(C+1,D)),disabled:m===D,className:"px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-slate-800",children:"Next"})]})]})]})},Js=({title:e,subtitle:t,children:r,image:s,imageAlt:l,actions:n,variant:i="default",size:o="md",shadow:d="md",rounded:c="lg",className:u="",...m})=>{const x=()=>{switch(i){case"outlined":return"border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800";case"filled":return"bg-gray-50 dark:bg-slate-800";case"elevated":return"bg-white dark:bg-slate-800 shadow-xl";default:return"bg-white dark:bg-slate-800"}},b=()=>{switch(o){case"sm":return"p-4";case"lg":return"p-8";case"xl":return"p-10";default:return"p-6"}},j=()=>{switch(d){case"none":return"";case"sm":return"shadow-sm";case"lg":return"shadow-lg";case"xl":return"shadow-xl";case"2xl":return"shadow-2xl";default:return"shadow-md"}},k=()=>{switch(c){case"none":return"";case"sm":return"rounded-sm";case"md":return"rounded-md";case"lg":return"rounded-lg";case"xl":return"rounded-xl";case"2xl":return"rounded-2xl";case"full":return"rounded-full";default:return"rounded-lg"}};return a.jsxs("div",{className:`${x()} ${j()} ${k()} ${u}`,...m,children:[s&&a.jsxs("div",{className:"mb-4",children:[a.jsx("img",{src:s,alt:l||e||"Card image",className:"w-full h-48 object-cover rounded-t-lg",onError:y=>{y.target.style.display="none",y.target.nextSibling.style.display="flex"}}),a.jsx("div",{className:"w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-t-lg flex items-center justify-center text-gray-500 dark:text-gray-400",style:{display:"none"},children:a.jsxs("div",{className:"text-center",children:[a.jsx("svg",{className:"w-12 h-12 mx-auto mb-2",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})}),a.jsx("p",{className:"text-sm",children:"Image"})]})})]}),(e||t)&&a.jsxs("div",{className:"mb-4",children:[e&&a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-1",children:e}),t&&a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-300",children:t})]}),a.jsx("div",{className:`${b()}`,children:r}),n&&a.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200 dark:border-slate-700",children:a.jsx("div",{className:"flex justify-end space-x-2",children:n})})]})},G1=({children:e,className:t="",...r})=>a.jsx("div",{className:`space-y-4 ${t}`,...r,children:e}),P1=({children:e,columns:t=3,className:r="",...s})=>{const l=()=>{switch(t){case 1:return"grid-cols-1";case 2:return"grid-cols-1 md:grid-cols-2";case 3:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-3";case 4:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-4";case 5:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";case 6:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6";default:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}};return a.jsx("div",{className:`grid ${l()} gap-6 ${r}`,...s,children:e})},Y1=({items:e=[],variant:t="default",size:r="md",dividers:s=!0,hoverable:l=!0,className:n="",...i})=>{const o=()=>{switch(t){case"outlined":return"border border-gray-200 dark:border-slate-700 rounded-lg";case"filled":return"bg-gray-50 dark:bg-slate-800 rounded-lg";case"elevated":return"bg-white dark:bg-slate-800 shadow-md rounded-lg";default:return"bg-white dark:bg-slate-800 rounded-lg"}},d=()=>{switch(r){case"sm":return"py-1";case"lg":return"py-2";case"xl":return"py-3";default:return"py-1"}},c=()=>`flex items-center justify-between px-4 ${l?"hover:bg-gray-50 dark:hover:bg-slate-700":""} ${s?"border-b border-gray-200 dark:border-slate-700 last:border-b-0":""} ${d()}`;return a.jsx("div",{className:`${o()} ${n}`,...i,children:e.map((u,m)=>a.jsx("div",{className:c(),children:u.content},u.id||m))})},gm=({children:e,leftIcon:t,rightIcon:r,primary:s,secondary:l,avatar:n,actions:i,variant:o="default",size:d="md",className:c="",...u})=>{const m=()=>{switch(d){case"sm":return"py-2 px-3";case"lg":return"py-4 px-6";case"xl":return"py-5 px-8";default:return"py-3 px-4"}},x=()=>{switch(o){case"outlined":return"border border-gray-200 dark:border-slate-700 rounded-lg mb-2 last:mb-0";case"filled":return"bg-gray-50 dark:bg-slate-800 rounded-lg mb-2 last:mb-0";case"elevated":return"bg-white dark:bg-slate-800 shadow-sm rounded-lg mb-2 last:mb-0";default:return"hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg"}};return a.jsxs("div",{className:`flex items-center ${m()} ${x()} ${c}`,...u,children:[t&&a.jsx("div",{className:"flex-shrink-0 mr-3",children:t}),n&&a.jsx("div",{className:"flex-shrink-0 mr-3",children:n}),a.jsxs("div",{className:"flex-1 min-w-0",children:[s&&a.jsx("div",{className:"text-sm font-medium text-gray-900 dark:text-blue-100 truncate",children:s}),l&&a.jsx("div",{className:"text-sm text-gray-500 dark:text-blue-300 truncate",children:l}),e]}),r&&a.jsx("div",{className:"flex-shrink-0 ml-3",children:r}),i&&a.jsx("div",{className:"flex-shrink-0 ml-3",children:i})]})},X1=({children:e,className:t="",...r})=>a.jsx("div",{className:`space-y-1 ${t}`,...r,children:e}),K1=({children:e,columns:t=3,gap:r="md",responsive:s=!0,className:l="",...n})=>{const i=()=>{switch(r){case"none":return"gap-0";case"sm":return"gap-2";case"md":return"gap-4";case"lg":return"gap-6";case"xl":return"gap-8";default:return"gap-4"}},o=()=>{if(!s)return`grid-cols-${t}`;switch(t){case 1:return"grid-cols-1";case 2:return"grid-cols-1 sm:grid-cols-2";case 3:return"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";case 4:return"grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";case 5:return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";case 6:return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6";case 12:return"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12";default:return"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}};return a.jsx("div",{className:`grid ${o()} ${i()} ${l}`,...n,children:e})},ad=({children:e,span:t=1,start:r="auto",end:s="auto",className:l="",...n})=>{const i=()=>t==="full"?"col-span-full":t==="auto"?"col-auto":`col-span-${t}`,o=()=>r==="auto"?"":`col-start-${r}`,d=()=>s==="auto"?"":`col-end-${s}`;return a.jsx("div",{className:`${i()} ${o()} ${d()} ${l}`,...n,children:e})},Q1=({children:e,direction:t="row",wrap:r=!0,justify:s="start",align:l="start",gap:n="md",className:i="",...o})=>{const d=()=>{switch(t){case"column":return"flex-col";case"column-reverse":return"flex-col-reverse";case"row-reverse":return"flex-row-reverse";default:return"flex-row"}},c=()=>{switch(r){case!1:return"flex-nowrap";case"wrap-reverse":return"flex-wrap-reverse";default:return"flex-wrap"}},u=()=>{switch(s){case"center":return"justify-center";case"end":return"justify-end";case"between":return"justify-between";case"around":return"justify-around";case"evenly":return"justify-evenly";default:return"justify-start"}},m=()=>{switch(l){case"center":return"items-center";case"end":return"items-end";case"baseline":return"items-baseline";case"stretch":return"items-stretch";default:return"items-start"}},x=()=>{switch(n){case"none":return"gap-0";case"sm":return"gap-2";case"md":return"gap-4";case"lg":return"gap-6";case"xl":return"gap-8";default:return"gap-4"}};return a.jsx("div",{className:`flex ${d()} ${c()} ${u()} ${m()} ${x()} ${i}`,...o,children:e})},rd=({children:e,grow:t=!1,shrink:r=!0,basis:s="auto",className:l="",...n})=>{const i=()=>t===!0?"flex-grow":t===!1?"flex-grow-0":`flex-grow-${t}`,o=()=>r===!0?"flex-shrink":r===!1?"flex-shrink-0":`flex-shrink-${r}`,d=()=>s==="auto"?"flex-basis-auto":s==="full"?"flex-basis-full":`flex-basis-${s}`;return a.jsx("div",{className:`${i()} ${o()} ${d()} ${l}`,...n,children:e})},fm=({type:e="bar",data:t=[],width:r=400,height:s=300,title:l,subtitle:n,showLegend:i=!0,showGrid:o=!0,showAxes:d=!0,colors:c=["#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6"],className:u="",...m})=>{const x=t.length>0?t:[{label:"Jan",value:65},{label:"Feb",value:59},{label:"Mar",value:80},{label:"Apr",value:81},{label:"May",value:56},{label:"Jun",value:55}],b=Math.max(...x.map(D=>D.value)),j=Math.min(...x.map(D=>D.value)),k=b-j,y=()=>a.jsx("div",{className:"flex items-end justify-between h-full space-x-1",children:x.map((D,N)=>{const C=D.value/b*100;return a.jsxs("div",{className:"flex flex-col items-center flex-1",children:[a.jsx("div",{className:"w-full bg-blue-500 dark:bg-blue-400 rounded-t",style:{height:`${C}%`}}),a.jsx("div",{className:"text-xs text-gray-600 dark:text-blue-300 mt-1",children:D.label})]},N)})}),g=()=>a.jsx("div",{className:"relative h-full",children:a.jsxs("svg",{width:"100%",height:"100%",className:"overflow-visible",children:[a.jsx("polyline",{fill:"none",stroke:"#3B82F6",strokeWidth:"2",points:x.map((D,N)=>{const C=N/(x.length-1)*100,S=100-(D.value-j)/k*100;return`${C},${S}`}).join(" ")}),x.map((D,N)=>{const C=N/(x.length-1)*100,S=100-(D.value-j)/k*100;return a.jsx("circle",{cx:C,cy:S,r:"3",fill:"#3B82F6"},N)})]})}),h=()=>{let D=0;const N=80,C=50,S=50;return a.jsx("div",{className:"flex items-center justify-center h-full",children:a.jsx("svg",{width:"200",height:"200",viewBox:"0 0 100 100",className:"transform -rotate-90",children:x.map((T,z)=>{const O=T.value/x.reduce((Ee,Q)=>Ee+Q.value,0)*100,$=D/100*360,H=(D+O)/100*360,E=C+N*Math.cos($*Math.PI/180),R=S+N*Math.sin($*Math.PI/180),A=C+N*Math.cos(H*Math.PI/180),B=S+N*Math.sin(H*Math.PI/180),_=O>50?1:0,K=[`M ${C} ${S}`,`L ${E} ${R}`,`A ${N} ${N} 0 ${_} 1 ${A} ${B}`,"Z"].join(" ");return D+=O,a.jsx("path",{d:K,fill:c[z%c.length],stroke:"white",strokeWidth:"1"},z)})})})},f=()=>{let D=0;const N=60,C=30,S=50,T=50;return a.jsx("div",{className:"flex items-center justify-center h-full",children:a.jsx("svg",{width:"200",height:"200",viewBox:"0 0 100 100",className:"transform -rotate-90",children:x.map((z,O)=>{const $=z.value/x.reduce((be,Jt)=>be+Jt.value,0)*100,H=D/100*360,E=(D+$)/100*360,R=S+N*Math.cos(H*Math.PI/180),A=T+N*Math.sin(H*Math.PI/180),B=S+N*Math.cos(E*Math.PI/180),_=T+N*Math.sin(E*Math.PI/180),K=S+C*Math.cos(H*Math.PI/180),Ee=T+C*Math.sin(H*Math.PI/180),Q=S+C*Math.cos(E*Math.PI/180),ie=T+C*Math.sin(E*Math.PI/180),oe=$>50?1:0,Ge=[`M ${R} ${A}`,`A ${N} ${N} 0 ${oe} 1 ${B} ${_}`,`L ${Q} ${ie}`,`A ${C} ${C} 0 ${oe} 0 ${K} ${Ee}`,"Z"].join(" ");return D+=$,a.jsx("path",{d:Ge,fill:c[O%c.length],stroke:"white",strokeWidth:"1"},O)})})})},v=()=>a.jsx("div",{className:"relative h-full",children:a.jsxs("svg",{width:"100%",height:"100%",className:"overflow-visible",children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"areaGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[a.jsx("stop",{offset:"0%",stopColor:"#3B82F6",stopOpacity:"0.8"}),a.jsx("stop",{offset:"100%",stopColor:"#3B82F6",stopOpacity:"0.1"})]})}),a.jsx("path",{fill:"url(#areaGradient)",d:`M 0,100 ${x.map((D,N)=>{const C=N/(x.length-1)*100,S=100-(D.value-j)/k*100;return`L ${C},${S}`}).join(" ")} L 100,100 Z`}),a.jsx("polyline",{fill:"none",stroke:"#3B82F6",strokeWidth:"2",points:x.map((D,N)=>{const C=N/(x.length-1)*100,S=100-(D.value-j)/k*100;return`${C},${S}`}).join(" ")})]})}),w=()=>{switch(e){case"line":return g();case"pie":return h();case"doughnut":return f();case"area":return v();default:return y()}};return a.jsxs("div",{className:`bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 ${u}`,...m,children:[(l||n)&&a.jsxs("div",{className:"mb-4",children:[l&&a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:l}),n&&a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-300",children:n})]}),a.jsxs("div",{className:"relative",style:{width:r,height:s},children:[o&&a.jsx("div",{className:"absolute inset-0 opacity-20",children:a.jsx("svg",{width:"100%",height:"100%",className:"overflow-visible",children:Array.from({length:5},(D,N)=>a.jsx("line",{x1:"0",y1:`${N/4*100}%`,x2:"100%",y2:`${N/4*100}%`,stroke:"#E5E7EB",strokeWidth:"1"},N))})}),w()]}),i&&(e==="pie"||e==="doughnut")&&a.jsx("div",{className:"mt-4 flex flex-wrap justify-center space-x-4",children:x.map((D,N)=>a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:c[N%c.length]}}),a.jsx("span",{className:"text-sm text-gray-600 dark:text-blue-300",children:D.label})]},N))})]})},Ln=({title:e,value:t,change:r,changeType:s="neutral",icon:l,trend:n,description:i,size:o="md",variant:d="default",className:c="",...u})=>{const m=()=>{switch(o){case"sm":return"p-4";case"lg":return"p-8";case"xl":return"p-10";default:return"p-6"}},x=()=>{switch(d){case"outlined":return"border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800";case"filled":return"bg-gray-50 dark:bg-slate-800";case"elevated":return"bg-white dark:bg-slate-800 shadow-lg";default:return"bg-white dark:bg-slate-800 shadow-sm"}},b=()=>{switch(s){case"positive":return"text-green-600 dark:text-green-400";case"negative":return"text-red-600 dark:text-red-400";case"neutral":return"text-gray-600 dark:text-blue-300";default:return"text-gray-600 dark:text-blue-300"}},j=()=>{if(!n)return null;switch(n){case"up":return a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})});case"down":return a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"})});case"stable":return a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})});default:return null}};return a.jsx("div",{className:`${x()} rounded-lg ${m()} ${c}`,...u,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"text-sm font-medium text-gray-600 dark:text-blue-300 truncate",children:e}),a.jsxs("div",{className:"flex items-baseline",children:[a.jsx("p",{className:"text-2xl font-semibold text-gray-900 dark:text-blue-100",children:t}),r&&a.jsxs("div",{className:`ml-2 flex items-baseline text-sm font-medium ${b()}`,children:[j(),a.jsx("span",{className:"ml-1",children:r})]})]}),i&&a.jsx("p",{className:"text-sm text-gray-500 dark:text-blue-400 mt-1",children:i})]}),l&&a.jsx("div",{className:"flex-shrink-0 ml-4",children:a.jsx("div",{className:"w-8 h-8 text-gray-400 dark:text-blue-400",children:l})})]})})},Z1=({children:e,columns:t=4,gap:r="md",className:s="",...l})=>{const n=()=>{switch(t){case 1:return"grid-cols-1";case 2:return"grid-cols-1 md:grid-cols-2";case 3:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-3";case 4:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-4";case 5:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";case 6:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6";default:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}},i=()=>{switch(r){case"none":return"gap-0";case"sm":return"gap-2";case"md":return"gap-4";case"lg":return"gap-6";case"xl":return"gap-8";default:return"gap-4"}};return a.jsx("div",{className:`grid ${n()} ${i()} ${s}`,...l,children:e})},hm=({items:e=[],orientation:t="vertical",size:r="md",variant:s="default",className:l="",...n})=>{const i=()=>{switch(t){case"horizontal":return"flex flex-row overflow-x-auto";default:return"flex flex-col"}},o=()=>{switch(r){case"xs":return"space-y-2";case"sm":return"space-y-3";case"md":return"space-y-4";case"lg":return"space-y-6";case"xl":return"space-y-8";case"2xl":return"space-y-10";default:return"space-y-4"}},d=()=>{switch(s){case"outlined":return"border border-gray-200 dark:border-slate-700 rounded-lg p-4";case"filled":return"bg-gray-50 dark:bg-slate-800 rounded-lg p-4";case"elevated":return"bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4";default:return"bg-white dark:bg-slate-800 shadow-sm rounded-lg p-4"}};return a.jsx("div",{className:`${d()} ${l}`,...n,children:a.jsx("div",{className:`${i()} ${o()}`,children:e.map((c,u)=>a.jsx(W1,{...c,isLast:u===e.length-1,orientation:t,size:r},c.id||u))})})},W1=({title:e,description:t,time:r,icon:s,color:l="blue",status:n="completed",isLast:i=!1,orientation:o="vertical",size:d="md",className:c="",...u})=>{const m=()=>{switch(n){case"completed":return"bg-green-500 text-white";case"current":return"bg-blue-500 text-white";case"pending":return"bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300";case"error":return"bg-red-500 text-white";default:return"bg-blue-500 text-white"}},x=()=>{switch(d){case"xs":return"w-4 h-4 text-xs";case"sm":return"w-6 h-6 text-xs";case"md":return"w-8 h-8 text-sm";case"lg":return"w-10 h-10 text-lg";case"xl":return"w-14 h-14 text-xl";case"2xl":return"w-16 h-16 text-2xl";default:return"w-8 h-8 text-sm"}},b=()=>i?"hidden":o==="horizontal"?"w-8 h-0.5 bg-gray-200 dark:bg-slate-700":"w-0.5 h-8 bg-gray-200 dark:bg-slate-700";return a.jsxs("div",{className:`flex ${o==="horizontal"?"flex-col items-center":"flex-row"} ${c}`,...u,children:[a.jsxs("div",{className:`flex ${o==="horizontal"?"flex-col items-center":"flex-row"} ${o==="horizontal"?"space-y-2":"space-x-4"}`,children:[a.jsx("div",{className:`flex-shrink-0 ${x()} rounded-full flex items-center justify-center ${m()}`,children:s||a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),a.jsxs("div",{className:`flex-1 ${o==="horizontal"?"text-center":""}`,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h3",{className:`font-semibold text-gray-900 dark:text-blue-100 ${d==="xl"||d==="2xl"?"text-lg":d==="lg"?"text-base":"text-sm"}`,children:e}),r&&a.jsx("span",{className:`text-gray-500 dark:text-blue-400 ${d==="xl"||d==="2xl"?"text-sm":"text-xs"}`,children:r})]}),t&&a.jsx("p",{className:`mt-2 text-gray-600 dark:text-blue-300 ${d==="xl"||d==="2xl"?"text-base":"text-sm"}`,children:t})]})]}),!i&&a.jsx("div",{className:`flex-shrink-0 ${b()}`})]})},Qe=({src:e,alt:t,name:r,size:s="md",shape:l="circle",status:n,statusColor:i="green",icon:o,color:d="blue",className:c="",...u})=>{const m=()=>{switch(s){case"xs":return"w-6 h-6 text-xs";case"sm":return"w-8 h-8 text-sm";case"md":return"w-10 h-10 text-base";case"lg":return"w-12 h-12 text-lg";case"xl":return"w-16 h-16 text-xl";case"2xl":return"w-20 h-20 text-2xl";default:return"w-10 h-10 text-base"}},x=()=>{switch(l){case"square":return"rounded-md";case"rounded":return"rounded-lg";case"circle":return"rounded-full";default:return"rounded-full"}},b=()=>{switch(d){case"blue":return"bg-blue-500 text-white";case"green":return"bg-green-500 text-white";case"red":return"bg-red-500 text-white";case"yellow":return"bg-yellow-500 text-white";case"purple":return"bg-purple-500 text-white";case"pink":return"bg-pink-500 text-white";case"indigo":return"bg-indigo-500 text-white";case"gray":return"bg-gray-500 text-white";default:return"bg-blue-500 text-white"}},j=()=>{switch(i){case"green":return"bg-green-500";case"red":return"bg-red-500";case"yellow":return"bg-yellow-500";case"blue":return"bg-blue-500";case"gray":return"bg-gray-500";default:return"bg-green-500"}},k=g=>g?g.split(" ").map(h=>h.charAt(0)).join("").toUpperCase().slice(0,2):"",y=()=>{switch(s){case"xs":return"w-2 h-2";case"sm":return"w-2.5 h-2.5";case"md":return"w-3 h-3";case"lg":return"w-3.5 h-3.5";case"xl":return"w-4 h-4";case"2xl":return"w-5 h-5";default:return"w-3 h-3"}};return a.jsxs("div",{className:`relative inline-block ${c}`,...u,children:[a.jsx("div",{className:`${m()} ${x()} flex items-center justify-center overflow-hidden ${b()}`,children:e?a.jsx("img",{src:e,alt:t||r||"Avatar",className:"w-full h-full object-cover"}):o?a.jsx("div",{className:"flex items-center justify-center",children:o}):a.jsx("span",{className:"font-medium",children:k(r)})}),n&&a.jsx("div",{className:`absolute bottom-0 right-0 ${y()} ${j()} rounded-full border-2 border-white dark:border-slate-800`})]})},J1=({children:e,max:t=3,size:r="md",spacing:s="sm",className:l="",...n})=>{const i=()=>{switch(s){case"none":return"-space-x-0";case"sm":return"-space-x-1";case"md":return"-space-x-2";case"lg":return"-space-x-3";case"xl":return"-space-x-4";default:return"-space-x-1"}},o=()=>{switch(r){case"xs":return"w-6 h-6 text-xs";case"sm":return"w-8 h-8 text-sm";case"md":return"w-10 h-10 text-base";case"lg":return"w-12 h-12 text-lg";case"xl":return"w-16 h-16 text-xl";case"2xl":return"w-20 h-20 text-2xl";default:return"w-10 h-10 text-base"}},d=ce.Children.toArray(e),c=d.slice(0,t),u=d.length-t;return a.jsxs("div",{className:`flex ${i()} ${l}`,...n,children:[c.map((m,x)=>a.jsx("div",{className:"relative",children:m},x)),u>0&&a.jsxs("div",{className:`${o()} rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-600 dark:text-blue-300 font-medium`,children:["+",u]})]})},e2=({componentId:e,formData:t,handleInputChange:r})=>{switch(e){case"table":return a.jsx("div",{className:"space-y-6",children:a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Basic Table"}),a.jsx(I1,{data:[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"Inactive"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Moderator",status:"Active"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"User",status:"Active"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"Inactive"}],columns:[{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0}],sortable:!0,filterable:!0,pagination:!0,striped:!0,hoverable:!0})]})});case"card":return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Basic Cards"}),a.jsxs(G1,{children:[a.jsx(Js,{title:"Card Title",subtitle:"Card subtitle",image:"https://picsum.photos/300/200?random=1",imageAlt:"Card image",actions:a.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700",children:"Action"}),children:a.jsx("p",{className:"text-gray-600 dark:text-blue-300",children:"This is a basic card with title, subtitle, image, and content."})}),a.jsx(Js,{title:"Another Card",subtitle:"With different content",variant:"outlined",image:"https://picsum.photos/300/200?random=2",imageAlt:"Another card image",children:a.jsx("p",{className:"text-gray-600 dark:text-blue-300",children:"This card has an outlined variant with an image."})})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Card Grid"}),a.jsxs(P1,{columns:3,children:[a.jsx(Js,{title:"Grid Card 1",size:"sm",image:"https://picsum.photos/200/150?random=3",imageAlt:"Grid card 1",children:a.jsx("p",{className:"text-gray-600 dark:text-blue-300",children:"Content 1"})}),a.jsx(Js,{title:"Grid Card 2",size:"sm",image:"https://picsum.photos/200/150?random=4",imageAlt:"Grid card 2",children:a.jsx("p",{className:"text-gray-600 dark:text-blue-300",children:"Content 2"})}),a.jsx(Js,{title:"Grid Card 3",size:"sm",image:"https://picsum.photos/200/150?random=5",imageAlt:"Grid card 3",children:a.jsx("p",{className:"text-gray-600 dark:text-blue-300",children:"Content 3"})})]})]})]});case"list":return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Basic List"}),a.jsx(Y1,{items:[{id:1,content:"List item 1"},{id:2,content:"List item 2"},{id:3,content:"List item 3"}],variant:"outlined",dividers:!0,hoverable:!0})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"List Items with Icons"}),a.jsxs(X1,{children:[a.jsx(gm,{primary:"John Doe",secondary:"john@example.com",leftIcon:a.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),rightIcon:a.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})}),a.jsx(gm,{primary:"Jane Smith",secondary:"jane@example.com",leftIcon:a.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),rightIcon:a.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})]})]});case"grid":return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Basic Grid"}),a.jsxs(K1,{columns:3,gap:"md",children:[a.jsx(ad,{className:"bg-blue-100 dark:bg-blue-900 p-4 rounded-lg",children:a.jsx("p",{className:"text-blue-800 dark:text-blue-200",children:"Grid Item 1"})}),a.jsx(ad,{className:"bg-green-100 dark:bg-green-900 p-4 rounded-lg",children:a.jsx("p",{className:"text-green-800 dark:text-green-200",children:"Grid Item 2"})}),a.jsx(ad,{className:"bg-purple-100 dark:bg-purple-900 p-4 rounded-lg",children:a.jsx("p",{className:"text-purple-800 dark:text-purple-200",children:"Grid Item 3"})})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Flex Grid"}),a.jsxs(Q1,{direction:"row",wrap:!0,justify:"between",align:"center",gap:"md",children:[a.jsx(rd,{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:a.jsx("p",{className:"text-gray-800 dark:text-gray-200",children:"Flex Item 1"})}),a.jsx(rd,{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:a.jsx("p",{className:"text-gray-800 dark:text-gray-200",children:"Flex Item 2"})}),a.jsx(rd,{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg",children:a.jsx("p",{className:"text-gray-800 dark:text-gray-200",children:"Flex Item 3"})})]})]})]});case"chart":return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Bar Chart"}),a.jsx(fm,{type:"bar",title:"Monthly Sales",subtitle:"Sales data for the last 6 months",data:[{label:"Jan",value:65},{label:"Feb",value:59},{label:"Mar",value:80},{label:"Apr",value:81},{label:"May",value:56},{label:"Jun",value:55}],width:400,height:200})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Pie Chart"}),a.jsx(fm,{type:"pie",title:"Market Share",data:[{label:"Desktop",value:40},{label:"Mobile",value:35},{label:"Tablet",value:25}],width:300,height:200})]})]});case"stat":return a.jsx("div",{className:"space-y-6",children:a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Stat Cards"}),a.jsxs(Z1,{columns:4,children:[a.jsx(Ln,{title:"Total Users",value:"12,345",change:"+12%",changeType:"positive",trend:"up",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsx(Ln,{title:"Revenue",value:"$45,678",change:"+8%",changeType:"positive",trend:"up",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"})})}),a.jsx(Ln,{title:"Orders",value:"1,234",change:"-3%",changeType:"negative",trend:"down",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15v-3a2 2 0 114 0v3H8z",clipRule:"evenodd"})})}),a.jsx(Ln,{title:"Conversion",value:"3.2%",change:"0%",changeType:"neutral",trend:"stable",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})})]})]})});case"timeline":return a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Large Timeline - Enhanced Visibility"}),a.jsx(hm,{size:"xl",variant:"elevated",items:[{id:1,title:"Project Started",description:"Initial project setup and planning phase with team coordination",time:"2 hours ago",status:"completed",color:"green",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})},{id:2,title:"Design Phase",description:"Creating comprehensive wireframes and interactive mockups",time:"1 hour ago",status:"current",color:"blue",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"})})},{id:3,title:"Development",description:"Building the core application with modern technologies",time:"In progress",status:"pending",color:"gray",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",clipRule:"evenodd"})})},{id:4,title:"Testing & QA",description:"Comprehensive quality assurance and user acceptance testing",time:"Pending",status:"pending",color:"gray",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}]})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Horizontal Timeline - Different Sizes"}),a.jsx("div",{className:"space-y-4",children:a.jsxs("div",{children:[a.jsx("h5",{className:"text-sm font-medium text-gray-600 dark:text-blue-300 mb-2",children:"Large Size"}),a.jsx(hm,{orientation:"horizontal",size:"lg",variant:"outlined",items:[{id:1,title:"Step 1",description:"Planning",time:"Done",status:"completed",color:"green"},{id:2,title:"Step 2",description:"Design",time:"Current",status:"current",color:"blue"},{id:3,title:"Step 3",description:"Build",time:"Next",status:"pending",color:"gray"}]})]})})]})]});case"avatar":return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Avatar Sizes"}),a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx(Qe,{name:"John Doe",size:"xs"}),a.jsx(Qe,{name:"Jane Smith",size:"sm"}),a.jsx(Qe,{name:"Bob Johnson",size:"md"}),a.jsx(Qe,{name:"Alice Brown",size:"lg"}),a.jsx(Qe,{name:"Charlie Wilson",size:"xl"})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Avatar with Status"}),a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx(Qe,{name:"John Doe",status:"online",statusColor:"green"}),a.jsx(Qe,{name:"Jane Smith",status:"away",statusColor:"yellow"}),a.jsx(Qe,{name:"Bob Johnson",status:"busy",statusColor:"red"}),a.jsx(Qe,{name:"Alice Brown",status:"offline",statusColor:"gray"})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Avatar Group"}),a.jsxs(J1,{max:3,children:[a.jsx(Qe,{name:"John Doe"}),a.jsx(Qe,{name:"Jane Smith"}),a.jsx(Qe,{name:"Bob Johnson"}),a.jsx(Qe,{name:"Alice Brown"}),a.jsx(Qe,{name:"Charlie Wilson"})]})]})]});case"rating":return a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Star Rating - Extra Large Size"}),a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-700 rounded-lg",children:a.jsx(At,{name:"rating1",value:t.rating1||0,onChange:r,max:5,size:"2xl",allowHalf:!1,showText:!0,text:["Poor","Fair","Good","Very Good","Excellent"]})})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Star Rating - Different Sizes"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-slate-700 rounded-lg",children:[a.jsx("h5",{className:"text-sm font-medium text-gray-600 dark:text-blue-300 mb-3",children:"Extra Large (2XL)"}),a.jsx(At,{name:"rating2",value:t.rating2||0,onChange:r,max:5,size:"2xl",allowHalf:!0})]}),a.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-slate-700 rounded-lg",children:[a.jsx("h5",{className:"text-sm font-medium text-gray-600 dark:text-blue-300 mb-3",children:"Extra Large (XL)"}),a.jsx(At,{name:"rating3",value:t.rating3||0,onChange:r,max:5,size:"xl",allowHalf:!1})]}),a.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-slate-700 rounded-lg",children:[a.jsx("h5",{className:"text-sm font-medium text-gray-600 dark:text-blue-300 mb-3",children:"Large (L)"}),a.jsx(At,{name:"rating4",value:t.rating4||0,onChange:r,max:5,size:"lg",allowHalf:!1})]})]})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Star Rating - With Labels"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-slate-700 rounded-lg",children:[a.jsx("h5",{className:"text-sm font-medium text-gray-600 dark:text-blue-300 mb-3",children:"Product Rating"}),a.jsx(At,{name:"rating5",value:t.rating5||0,onChange:r,max:5,size:"xl",allowHalf:!0,showText:!0,text:["Terrible","Bad","OK","Good","Excellent"]})]}),a.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-slate-700 rounded-lg",children:[a.jsx("h5",{className:"text-sm font-medium text-gray-600 dark:text-blue-300 mb-3",children:"Service Rating"}),a.jsx(At,{name:"rating6",value:t.rating6||0,onChange:r,max:5,size:"xl",allowHalf:!1,showText:!0,text:["Poor","Fair","Good","Very Good","Excellent"]})]})]})]})]});default:return a.jsx("div",{children:"Component not found"})}},sd=[{id:"table",name:"Table",description:"Data tables with sorting, filtering, and pagination"},{id:"card",name:"Card",description:"Content cards with headers, body, and actions"},{id:"list",name:"List",description:"Vertical and horizontal lists with various layouts"},{id:"grid",name:"Grid",description:"Responsive grid layouts for content organization"},{id:"chart",name:"Chart",description:"Data visualization charts and graphs"},{id:"stat",name:"Stat",description:"Statistics cards and metrics display"},{id:"timeline",name:"Timeline",description:"Event timelines and progress indicators"},{id:"avatar",name:"Avatar",description:"User avatars with various sizes and states"},{id:"rating",name:"Star Rating",description:"Interactive star rating components with various sizes and styles"}],bm=e=>{switch(e.id){case"table":return`// Complete Table Component - Copy & Paste Ready
import React, { useState } from 'react';

const Table = ({
  data = [],
  columns = [],
  sortable = true,
  filterable = true,
  pagination = true,
  pageSize = 10,
  striped = false,
  hoverable = true,
  className = '',
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});

  const handleSort = (key) => {
    if (!sortable) return;
    
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const getSortedData = () => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const getFilteredData = () => {
    const sortedData = getSortedData();
    return sortedData.filter(row => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return row[key]?.toString().toLowerCase().includes(value.toLowerCase());
      });
    });
  };

  const getPaginatedData = () => {
    const filteredData = getFilteredData();
    if (!pagination) return filteredData;

    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  };

  const totalPages = Math.ceil(getFilteredData().length / pageSize);

  return (
    <div className={\`w-full \${className}\`}>
      {/* Filters */}
      {filterable && (
        <div className="mb-4 flex flex-wrap gap-2">
          {columns.map(column => (
            <input
              key={column.key}
              type="text"
              placeholder={\`Filter \${column.label}...\`}
              value={filters[column.key] || ''}
              onChange={(e) => handleFilter(column.key, e.target.value)}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100"
            />
          ))}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className="bg-gray-50 dark:bg-slate-800">
            <tr>
              {columns.map(column => (
                <th
                  key={column.key}
                  className={\`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-300 uppercase tracking-wider \${
                    column.sortable && sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700' : ''
                  }\`}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {column.sortable && sortable && (
                      <div className="flex flex-col">
                        <svg className={\`w-3 h-3 \${
                          sortConfig.key === column.key && sortConfig.direction === 'asc'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-400'
                        }\`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={\`bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700 \${
            striped ? 'divide-y divide-gray-200 dark:divide-slate-700' : ''
          }\`}>
            {getPaginatedData().map((row, index) => (
              <tr
                key={row.id || index}
                className={\`\${
                  hoverable ? 'hover:bg-gray-50 dark:hover:bg-slate-800' : ''
                } \${
                  striped && index % 2 === 0 ? 'bg-gray-50 dark:bg-slate-800' : ''
                }\`}
              >
                {columns.map(column => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-blue-100">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700 dark:text-blue-200">
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, getFilteredData().length)} of {getFilteredData().length} results
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={\`px-3 py-1 text-sm border rounded-md \${
                  currentPage === page
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800'
                }\`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 dark:border-slate-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;`;case"card":return`// Complete Card Component - Copy & Paste Ready
import React from 'react';

const Card = ({
  title,
  subtitle,
  children,
  image,
  imageAlt,
  actions,
  variant = 'default',
  size = 'md',
  shadow = 'md',
  rounded = 'lg',
  className = '',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800';
      case 'filled':
        return 'bg-gray-50 dark:bg-slate-800';
      case 'elevated':
        return 'bg-white dark:bg-slate-800 shadow-xl';
      default:
        return 'bg-white dark:bg-slate-800';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-8';
      case 'xl':
        return 'p-10';
      default:
        return 'p-6';
    }
  };

  const getShadowClasses = () => {
    switch (shadow) {
      case 'none':
        return '';
      case 'sm':
        return 'shadow-sm';
      case 'lg':
        return 'shadow-lg';
      case 'xl':
        return 'shadow-xl';
      case '2xl':
        return 'shadow-2xl';
      default:
        return 'shadow-md';
    }
  };

  const getRoundedClasses = () => {
    switch (rounded) {
      case 'none':
        return '';
      case 'sm':
        return 'rounded-sm';
      case 'md':
        return 'rounded-md';
      case 'lg':
        return 'rounded-lg';
      case 'xl':
        return 'rounded-xl';
      case '2xl':
        return 'rounded-2xl';
      case 'full':
        return 'rounded-full';
      default:
        return 'rounded-lg';
    }
  };

  return (
    <div
      className={\`\${getVariantClasses()} \${getShadowClasses()} \${getRoundedClasses()} \${className}\`}
      {...props}
    >
      {/* Image */}
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt={imageAlt || title || 'Card image'}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
      )}

      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100 mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-blue-300">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className={\`\${getSizeClasses()}\`}>
        {children}
      </div>

      {/* Actions */}
      {actions && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
          <div className="flex justify-end space-x-2">
            {actions}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;`;case"list":return`// Complete List Component - Copy & Paste Ready
import React from 'react';

const List = ({
  items = [],
  variant = 'default',
  size = 'md',
  dividers = true,
  hoverable = true,
  className = '',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-200 dark:border-slate-700 rounded-lg';
      case 'filled':
        return 'bg-gray-50 dark:bg-slate-800 rounded-lg';
      case 'elevated':
        return 'bg-white dark:bg-slate-800 shadow-md rounded-lg';
      default:
        return 'bg-white dark:bg-slate-800 rounded-lg';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-1';
      case 'lg':
        return 'py-2';
      case 'xl':
        return 'py-3';
      default:
        return 'py-1';
    }
  };

  const getItemClasses = () => {
    const baseClasses = 'flex items-center justify-between px-4';
    const hoverClasses = hoverable ? 'hover:bg-gray-50 dark:hover:bg-slate-700' : '';
    const dividerClasses = dividers ? 'border-b border-gray-200 dark:border-slate-700 last:border-b-0' : '';
    
    return \`\${baseClasses} \${hoverClasses} \${dividerClasses} \${getSizeClasses()}\`;
  };

  return (
    <div className={\`\${getVariantClasses()} \${className}\`} {...props}>
      {items.map((item, index) => (
        <div key={item.id || index} className={getItemClasses()}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default List;`;case"grid":return`// Complete Grid Component - Copy & Paste Ready
import React from 'react';

const Grid = ({
  children,
  columns = 3,
  gap = 'md',
  responsive = true,
  className = '',
  ...props
}) => {
  const getGapClasses = () => {
    switch (gap) {
      case 'none':
        return 'gap-0';
      case 'sm':
        return 'gap-2';
      case 'md':
        return 'gap-4';
      case 'lg':
        return 'gap-6';
      case 'xl':
        return 'gap-8';
      default:
        return 'gap-4';
    }
  };

  const getGridClasses = () => {
    if (!responsive) {
      return \`grid-cols-\${columns}\`;
    }

    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 5:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
      case 6:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
      case 12:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12';
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className={\`grid \${getGridClasses()} \${getGapClasses()} \${className}\`} {...props}>
      {children}
    </div>
  );
};

export default Grid;`;case"chart":return`// Complete Chart Component - Copy & Paste Ready
import React from 'react';

const Chart = ({
  type = 'bar',
  data = [],
  width = 400,
  height = 300,
  title,
  subtitle,
  showLegend = true,
  showGrid = true,
  showAxes = true,
  colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
  className = '',
  ...props
}) => {
  const maxValue = Math.max(...data.map(item => item.value));
  const minValue = Math.min(...data.map(item => item.value));
  const range = maxValue - minValue;

  const renderBarChart = () => (
    <div className="flex items-end justify-between h-full space-x-1">
      {data.map((item, index) => {
        const height = (item.value / maxValue) * 100;
        return (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full bg-blue-500 dark:bg-blue-400 rounded-t"
              style={{ height: \`\${height}%\` }}
            />
            <div className="text-xs text-gray-600 dark:text-blue-300 mt-1">
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderLineChart = () => (
    <div className="relative h-full">
      <svg width="100%" height="100%" className="overflow-visible">
        <polyline
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          points={data.map((item, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = 100 - ((item.value - minValue) / range) * 100;
            return \`\${x},\${y}\`;
          }).join(' ')}
        />
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - ((item.value - minValue) / range) * 100;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="3"
              fill="#3B82F6"
            />
          );
        })}
      </svg>
    </div>
  );

  const renderChart = () => {
    switch (type) {
      case 'line':
        return renderLineChart();
      default:
        return renderBarChart();
    }
  };

  return (
    <div className={\`bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 \${className}\`} {...props}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-blue-300">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="relative" style={{ width, height }}>
        {renderChart()}
      </div>
    </div>
  );
};

export default Chart;`;case"stat":return`// Complete Stat Component - Copy & Paste Ready
import React from 'react';

const Stat = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  trend,
  description,
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-8';
      case 'xl':
        return 'p-10';
      default:
        return 'p-6';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800';
      case 'filled':
        return 'bg-gray-50 dark:bg-slate-800';
      case 'elevated':
        return 'bg-white dark:bg-slate-800 shadow-lg';
      default:
        return 'bg-white dark:bg-slate-800 shadow-sm';
    }
  };

  const getChangeClasses = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600 dark:text-green-400';
      case 'negative':
        return 'text-red-600 dark:text-red-400';
      case 'neutral':
        return 'text-gray-600 dark:text-blue-300';
      default:
        return 'text-gray-600 dark:text-blue-300';
    }
  };

  return (
    <div className={\`\${getVariantClasses()} rounded-lg \${getSizeClasses()} \${className}\`} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-blue-300 truncate">
            {title}
          </p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-blue-100">
              {value}
            </p>
            {change && (
              <div className={\`ml-2 flex items-baseline text-sm font-medium \${getChangeClasses()}\`}>
                <span className="ml-1">{change}</span>
              </div>
            )}
          </div>
          {description && (
            <p className="text-sm text-gray-500 dark:text-blue-400 mt-1">
              {description}
            </p>
          )}
        </div>
        {icon && (
          <div className="flex-shrink-0 ml-4">
            <div className="w-8 h-8 text-gray-400 dark:text-blue-400">
              {icon}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stat;`;case"timeline":return`// Complete Timeline Component - Copy & Paste Ready
import React from 'react';

const Timeline = ({
  items = [],
  orientation = 'vertical',
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}) => {
  const getOrientationClasses = () => {
    switch (orientation) {
      case 'horizontal':
        return 'flex flex-row overflow-x-auto';
      default:
        return 'flex flex-col';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'space-y-3';
      case 'lg':
        return 'space-y-6';
      case 'xl':
        return 'space-y-8';
      default:
        return 'space-y-4';
    }
  };

  return (
    <div className={\`bg-white dark:bg-slate-800 shadow-sm rounded-lg p-4 \${className}\`} {...props}>
      <div className={\`\${getOrientationClasses()} \${getSizeClasses()}\`}>
        {items.map((item, index) => (
          <div key={item.id || index} className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-medium">
              {item.icon || (index + 1)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900 dark:text-blue-100">
                  {item.title}
                </h3>
                {item.time && (
                  <span className="text-xs text-gray-500 dark:text-blue-400">
                    {item.time}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="mt-1 text-sm text-gray-600 dark:text-blue-300">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;`;case"avatar":return`// Complete Avatar Component - Copy & Paste Ready
import React from 'react';

const Avatar = ({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  status,
  statusColor = 'green',
  icon,
  color = 'blue',
  className = '',
  ...props
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'w-6 h-6 text-xs';
      case 'sm':
        return 'w-8 h-8 text-sm';
      case 'md':
        return 'w-10 h-10 text-base';
      case 'lg':
        return 'w-12 h-12 text-lg';
      case 'xl':
        return 'w-16 h-16 text-xl';
      case '2xl':
        return 'w-20 h-20 text-2xl';
      default:
        return 'w-10 h-10 text-base';
    }
  };

  const getShapeClasses = () => {
    switch (shape) {
      case 'square':
        return 'rounded-md';
      case 'rounded':
        return 'rounded-lg';
      case 'circle':
        return 'rounded-full';
      default:
        return 'rounded-full';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500 text-white';
      case 'green':
        return 'bg-green-500 text-white';
      case 'red':
        return 'bg-red-500 text-white';
      case 'yellow':
        return 'bg-yellow-500 text-white';
      case 'purple':
        return 'bg-purple-500 text-white';
      case 'pink':
        return 'bg-pink-500 text-white';
      case 'indigo':
        return 'bg-indigo-500 text-white';
      case 'gray':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={\`relative inline-block \${className}\`} {...props}>
      <div className={\`\${getSizeClasses()} \${getShapeClasses()} flex items-center justify-center overflow-hidden \${getColorClasses()}\`}>
        {src ? (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="w-full h-full object-cover"
          />
        ) : icon ? (
          <div className="flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <span className="font-medium">
            {getInitials(name)}
          </span>
        )}
      </div>

      {/* Status Indicator */}
      {status && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800" />
      )}
    </div>
  );
};

export default Avatar;`;default:return`// ${e.name} Component - Copy & Paste Ready
import React from 'react';

const ${e.name.replace(/\s+/g,"")} = ({ content }) => {
  return (
    <div className="w-full">
      <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
        <p className="text-gray-600 dark:text-blue-300">
          ${e.description}
        </p>
      </div>
    </div>
  );
};

const ${e.name.replace(/\s+/g,"")}Example = () => {
  return (
    <${e.name.replace(/\s+/g,"")}
      content="${e.description}"
    />
  );
};

export default ${e.name.replace(/\s+/g,"")}Example;`}},t2=()=>{const e=Rt(),[t,r]=p.useState(null),[s,l]=p.useState({}),[n,i]=p.useState(!1);p.useEffect(()=>{const d=e.hash.substring(1),c=sd.find(u=>u.id===d);c?r(c):sd.length>0&&r(sd[0])},[e.hash]),p.useEffect(()=>{if(n){const d=setTimeout(()=>i(!1),2e3);return()=>clearTimeout(d)}},[n]);const o=d=>{const{name:c,value:u,type:m,checked:x}=d.target;l(b=>({...b,[c]:m==="checkbox"?x:u}))};return t?a.jsx("div",{className:"flex-1 p-4 sm:p-6 lg:p-8 overflow-auto",children:a.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 h-full",children:[a.jsx("div",{className:"flex-1 lg:w-2/5 bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col justify-between min-h-[300px]",children:a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-blue-100 mb-4",children:t.name}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200 mb-6",children:t.description}),a.jsx("div",{className:"space-y-4",children:a.jsx(e2,{componentId:t.id,formData:s,handleInputChange:o})})]})}),a.jsx("div",{className:"w-3/5 min-w-0 flex flex-col",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full min-h-[300px]",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-3 flex-shrink-0",children:"Code Example"}),a.jsxs("div",{className:"flex flex-col space-y-3 flex-1 min-h-0",children:[a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex flex-col h-[300px]",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2 flex-shrink-0",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200",children:"Component Code"}),a.jsx("button",{onClick:()=>{navigator.clipboard.writeText(bm(t)),i(!0),setTimeout(()=>i(!1),2e3)},className:`flex items-center space-x-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${n?"text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20":"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"}`,children:n?a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:"Copied!"})]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-4 3H9m10 0a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2h3"})}),a.jsx("span",{children:"Copy"})]})})]}),a.jsxs("div",{className:"relative flex-1 min-h-0 bg-gray-900 dark:bg-slate-900 rounded-lg border border-gray-700 dark:border-slate-600 overflow-hidden",children:[a.jsx("div",{className:"absolute top-2 right-2 z-10",children:a.jsxs("div",{className:"flex space-x-1",children:[a.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})}),a.jsx("div",{className:"h-full overflow-auto p-3",children:a.jsx("pre",{className:"text-xs text-gray-100 dark:text-gray-300 font-mono leading-relaxed whitespace-pre-wrap",children:a.jsx("code",{children:bm(t)})})})]})]}),a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex-shrink-0",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Usage Instructions"}),a.jsxs("div",{className:"text-sm text-gray-600 dark:text-blue-300 space-y-1",children:[a.jsx("p",{children:"• Click and interact with the component on the left"}),a.jsx("p",{children:"• Copy the code above to use in your project"}),a.jsx("p",{children:"• All components are copy-paste ready"})]})]})]})]})})]})}):a.jsx("div",{className:"flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400",children:"Select a data display component from the sidebar."})},vm=[{id:"validation",name:"Validation Form",description:"A comprehensive form with real-time validation and error handling",category:"forms",type:"validation",features:["Real-time validation","Error handling","Form validation rules","Input validation","Custom error messages"],tags:["validation","form","error-handling","input-validation"],code:"ValidationForm",preview:"validation-form-preview",complexity:"intermediate",lastUpdated:"2024-01-20"},{id:"wizard",name:"Wizard Form",description:"Multi-step form with guided navigation and progress tracking",category:"forms",type:"wizard",features:["Multi-step navigation","Progress tracking","Step validation","Guided flow","Step indicators"],tags:["wizard","multi-step","navigation","progress","guided"],code:"Wizard",preview:"wizard-form-preview",complexity:"advanced",lastUpdated:"2024-01-20"},{id:"multistep",name:"Multi-Step Form",description:"Step-by-step form with flexible navigation and completion tracking",category:"forms",type:"multistep",features:["Flexible step navigation","Step completion tracking","Form data persistence","Step validation","Progress indicators"],tags:["multi-step","form","navigation","progress","flexible"],code:"MultiStepForm",preview:"multistep-form-preview",complexity:"advanced",lastUpdated:"2024-01-20"},{id:"search",name:"Search Form",description:"Advanced search form with filters and real-time results",category:"forms",type:"search",features:["Advanced search","Filter options","Real-time results","Sort functionality","Search suggestions"],tags:["search","filter","real-time","advanced","results"],code:"SearchForm",preview:"search-form-preview",complexity:"intermediate",lastUpdated:"2024-01-20"},{id:"filter",name:"Filter Form",description:"Comprehensive filtering form with multiple criteria and live results",category:"forms",type:"filter",features:["Multiple filter criteria","Live filtering","Filter combinations","Clear filters","Filter persistence"],tags:["filter","criteria","live","multiple","comprehensive"],code:"FilterForm",preview:"filter-form-preview",complexity:"intermediate",lastUpdated:"2024-01-20"}],ym=()=>{const[e,t]=p.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phone:"",website:"",age:"",bio:"",terms:!1,newsletter:!1}),[r,s]=p.useState({}),[l,n]=p.useState({}),[i,o]=p.useState(!1),[d,c]=p.useState(!1),u=(f,v)=>{let w="";switch(f){case"firstName":case"lastName":v.trim()?v.trim().length<2&&(w=`${f==="firstName"?"First":"Last"} name must be at least 2 characters`):w=`${f==="firstName"?"First":"Last"} name is required`;break;case"email":v.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||(w="Please enter a valid email address"):w="Email is required";break;case"password":v?v.length<8?w="Password must be at least 8 characters":/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(v)||(w="Password must contain uppercase, lowercase, and number"):w="Password is required";break;case"confirmPassword":v?v!==e.password&&(w="Passwords do not match"):w="Please confirm your password";break;case"phone":v&&!/^[\+]?[1-9][\d]{0,15}$/.test(v.replace(/[\s\-\(\)]/g,""))&&(w="Please enter a valid phone number");break;case"website":v&&!/^https?:\/\/.+/.test(v)&&(w="Please enter a valid URL (http:// or https://)");break;case"age":v&&(isNaN(v)||v<13||v>120)&&(w="Please enter a valid age (13-120)");break;case"bio":v&&v.length>500&&(w="Bio must be less than 500 characters");break;case"terms":v||(w="You must accept the terms and conditions");break}return w},m=f=>{const{name:v,value:w,type:D,checked:N}=f.target,C=D==="checkbox"?N:w;t(S=>({...S,[v]:C})),r[v]&&s(S=>({...S,[v]:""}))},x=f=>{const{name:v,value:w,type:D,checked:N}=f.target,C=D==="checkbox"?N:w;n(T=>({...T,[v]:!0}));const S=u(v,C);s(T=>({...T,[v]:S}))},b=f=>{f.preventDefault();const v=Object.keys(e).reduce((D,N)=>(D[N]=!0,D),{});n(v);const w={};Object.keys(e).forEach(D=>{const N=u(D,e[D]);N&&(w[D]=N)}),s(w),Object.keys(w).length===0&&(console.log("Form submitted:",e),alert("Form submitted successfully!"))},j=({name:f,label:v,type:w="text",placeholder:D,required:N=!1,...C})=>a.jsxs("div",{className:"space-y-1",children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200",children:[v,N&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),a.jsx("input",{type:w,name:f,value:e[f],onChange:m,onBlur:x,placeholder:D,className:`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0 ${r[f]&&l[f]?"border-red-500 dark:border-red-400":"border-gray-300 dark:border-slate-600"}`,...C}),r[f]&&l[f]&&a.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:r[f]})]}),k=({name:f,label:v,placeholder:w,required:D=!1,...N})=>a.jsxs("div",{className:"space-y-1",children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200",children:[v,D&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),a.jsx("textarea",{name:f,value:e[f],onChange:m,onBlur:x,placeholder:w,className:`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm min-w-0 resize-none ${r[f]&&l[f]?"border-red-500 dark:border-red-400":"border-gray-300 dark:border-slate-600"}`,...N}),r[f]&&l[f]&&a.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:r[f]})]}),y=({name:f,label:v,description:w,required:D=!1})=>a.jsxs("div",{className:"space-y-1",children:[a.jsxs("div",{className:"flex items-start space-x-2",children:[a.jsx("input",{type:"checkbox",name:f,checked:e[f],onChange:m,onBlur:x,className:`mt-1 w-4 h-4 text-blue-600 bg-white border rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 ${r[f]&&l[f]?"border-red-500 dark:border-red-400":"border-gray-300 dark:border-slate-600"}`}),a.jsxs("div",{className:"flex-1",children:[a.jsxs("label",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:[v,D&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),w&&a.jsx("p",{className:"text-xs text-gray-500 dark:text-blue-300 mt-1",children:w})]})]}),r[f]&&l[f]&&a.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:r[f]})]}),g=()=>`import { useState } from 'react';

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    website: '',
    age: '',
    bio: '',
    terms: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          error = \`\${name === 'firstName' ? 'First' : 'Last'} name is required\`;
        } else if (value.trim().length < 2) {
          error = \`\${
            name === 'firstName' ? 'First' : 'Last'
          } name must be at least 2 characters\`;
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(value)) {
          error = 'Password must contain uppercase, lowercase, and number';
        }
        break;

      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;

      case 'phone':
        if (
          value &&
          !/^[\\+]?[1-9][\\d]{0,15}$/.test(value.replace(/[\\s\\-\\(\\)]/g, ''))
        ) {
          error = 'Please enter a valid phone number';
        }
        break;

      case 'website':
        if (value && !/^https?:\\/\\/.+/.test(value)) {
          error = 'Please enter a valid URL (http:// or https://)';
        }
        break;

      case 'age':
        if (value && (isNaN(value) || value < 13 || value > 120)) {
          error = 'Please enter a valid age (13-120)';
        }
        break;

      case 'bio':
        if (value && value.length > 500) {
          error = 'Bio must be less than 500 characters';
        }
        break;

      case 'terms':
        if (!value) {
          error = 'You must accept the terms and conditions';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, fieldValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
            Validation Form
          </h2>
          <p className="text-gray-600 dark:text-blue-200">
            A comprehensive form with real-time validation and error handling
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields implementation */}
        </form>
      </div>
    </div>
  );
};

export default ValidationForm;`,h=async()=>{try{await navigator.clipboard.writeText(g()),c(!0),setTimeout(()=>c(!1),2e3)}catch(f){console.error("Failed to copy: ",f)}};return a.jsx("div",{className:"max-w-2xl mx-auto p-6",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:[a.jsx("div",{className:"mb-6",children:a.jsxs("div",{className:"flex justify-between items-center mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:"Validation Form"}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:"A comprehensive form with real-time validation and error handling"})]}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>o(!i),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors",children:i?"Hide Code":"Show Code"}),a.jsx("button",{onClick:h,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${d?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:d?"Copied!":"Copy Code"})]})]})}),i?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:g()})})}):a.jsxs("form",{onSubmit:b,className:"space-y-6",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx(j,{name:"firstName",label:"First Name",placeholder:"Enter your first name",required:!0}),a.jsx(j,{name:"lastName",label:"Last Name",placeholder:"Enter your last name",required:!0})]}),a.jsx(j,{name:"email",label:"Email Address",type:"email",placeholder:"Enter your email",required:!0}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx(j,{name:"password",label:"Password",type:"password",placeholder:"Create a password",required:!0}),a.jsx(j,{name:"confirmPassword",label:"Confirm Password",type:"password",placeholder:"Confirm your password",required:!0})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx(j,{name:"phone",label:"Phone Number",type:"tel",placeholder:"Enter your phone number"}),a.jsx(j,{name:"age",label:"Age",type:"number",placeholder:"Enter your age",min:"13",max:"120"})]}),a.jsx(j,{name:"website",label:"Website",type:"url",placeholder:"https://your-website.com"}),a.jsx(k,{name:"bio",label:"Bio",placeholder:"Tell us about yourself...",rows:4}),a.jsxs("div",{className:"space-y-4",children:[a.jsx(y,{name:"terms",label:"I agree to the Terms and Conditions",description:"You must accept our terms to continue",required:!0}),a.jsx(y,{name:"newsletter",label:"Subscribe to newsletter",description:"Get updates about new features and products"})]}),a.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[a.jsx("button",{type:"button",onClick:()=>{t({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phone:"",website:"",age:"",bio:"",terms:!1,newsletter:!1}),s({}),n({})},className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-200 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors",children:"Reset"}),a.jsx("button",{type:"submit",className:"px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800",children:"Submit Form"})]})]})]})})},a2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),[i,o]=p.useState({firstName:"",lastName:"",email:"",phone:"",street:"",city:"",state:"",zipCode:"",country:"",newsletter:!1,notifications:!0,theme:"light",language:"en",terms:!1}),d=[{id:"personal",title:"Personal Information",description:"Tell us about yourself"},{id:"address",title:"Address Information",description:"Where are you located?"},{id:"preferences",title:"Preferences",description:"Customize your experience"},{id:"review",title:"Review",description:"Confirm your information"}],c=()=>{e<d.length-1&&t(e+1)},u=()=>{e>0&&t(e-1)},m=y=>{const{name:g,value:h,type:f,checked:v}=y.target;o(w=>({...w,[g]:f==="checkbox"?v:h}))},x=y=>{y.preventDefault(),console.log("Form submitted:",i),alert("Form submitted successfully!")},b=()=>{switch(e){case 0:return a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4",children:"Personal Information"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"First Name"}),a.jsx("input",{type:"text",name:"firstName",value:i.firstName,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"Last Name"}),a.jsx("input",{type:"text",name:"lastName",value:i.lastName,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"Email"}),a.jsx("input",{type:"email",name:"email",value:i.email,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"Phone"}),a.jsx("input",{type:"tel",name:"phone",value:i.phone,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100"})]})]})]});case 1:return a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4",children:"Address Information"}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"Street Address"}),a.jsx("input",{type:"text",name:"street",value:i.street,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100",required:!0})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"City"}),a.jsx("input",{type:"text",name:"city",value:i.city,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"State"}),a.jsx("input",{type:"text",name:"state",value:i.state,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"ZIP Code"}),a.jsx("input",{type:"text",name:"zipCode",value:i.zipCode,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100",required:!0})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"Country"}),a.jsxs("select",{name:"country",value:i.country,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100",required:!0,children:[a.jsx("option",{value:"",children:"Select Country"}),a.jsx("option",{value:"US",children:"United States"}),a.jsx("option",{value:"CA",children:"Canada"}),a.jsx("option",{value:"UK",children:"United Kingdom"}),a.jsx("option",{value:"AU",children:"Australia"}),a.jsx("option",{value:"DE",children:"Germany"}),a.jsx("option",{value:"FR",children:"France"}),a.jsx("option",{value:"JP",children:"Japan"})]})]})]});case 2:return a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4",children:"Preferences"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"Theme"}),a.jsxs("div",{className:"flex space-x-4",children:[a.jsxs("label",{className:"flex items-center",children:[a.jsx("input",{type:"radio",name:"theme",value:"light",checked:i.theme==="light",onChange:m,className:"mr-2"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-blue-200",children:"Light"})]}),a.jsxs("label",{className:"flex items-center",children:[a.jsx("input",{type:"radio",name:"theme",value:"dark",checked:i.theme==="dark",onChange:m,className:"mr-2"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-blue-200",children:"Dark"})]})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"Language"}),a.jsxs("select",{name:"language",value:i.language,onChange:m,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100",children:[a.jsx("option",{value:"en",children:"English"}),a.jsx("option",{value:"es",children:"Spanish"}),a.jsx("option",{value:"fr",children:"French"}),a.jsx("option",{value:"de",children:"German"}),a.jsx("option",{value:"ja",children:"Japanese"})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("label",{className:"flex items-center",children:[a.jsx("input",{type:"checkbox",name:"newsletter",checked:i.newsletter,onChange:m,className:"mr-2"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-blue-200",children:"Subscribe to newsletter"})]}),a.jsxs("label",{className:"flex items-center",children:[a.jsx("input",{type:"checkbox",name:"notifications",checked:i.notifications,onChange:m,className:"mr-2"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-blue-200",children:"Enable notifications"})]})]})]})]});case 3:return a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4",children:"Review Your Information"}),a.jsx("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-3",children:a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-blue-300",children:"Name:"}),a.jsxs("p",{className:"text-gray-900 dark:text-blue-100",children:[i.firstName," ",i.lastName]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-blue-300",children:"Email:"}),a.jsx("p",{className:"text-gray-900 dark:text-blue-100",children:i.email})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-blue-300",children:"Phone:"}),a.jsx("p",{className:"text-gray-900 dark:text-blue-100",children:i.phone||"Not provided"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-blue-300",children:"Address:"}),a.jsxs("p",{className:"text-gray-900 dark:text-blue-100",children:[i.street,", ",i.city,", ",i.state," ",i.zipCode]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-blue-300",children:"Country:"}),a.jsx("p",{className:"text-gray-900 dark:text-blue-100",children:i.country})]}),a.jsxs("div",{children:[a.jsx("span",{className:"text-sm font-medium text-gray-500 dark:text-blue-300",children:"Theme:"}),a.jsx("p",{className:"text-gray-900 dark:text-blue-100 capitalize",children:i.theme})]})]})}),a.jsxs("div",{className:"flex items-center",children:[a.jsx("input",{type:"checkbox",name:"terms",checked:i.terms,onChange:m,className:"mr-2",required:!0}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-blue-200",children:"I agree to the terms and conditions"})]})]});default:return null}},j=()=>`import React, { useState } from 'react';

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    newsletter: false,
    notifications: true,
    theme: 'light',
    language: 'en',
    terms: false,
  });

  const steps = [
    { id: 'personal', title: 'Personal Information', description: 'Tell us about yourself' },
    { id: 'address', title: 'Address Information', description: 'Where are you located?' },
    { id: 'preferences', title: 'Preferences', description: 'Customize your experience' },
    { id: 'review', title: 'Review', description: 'Confirm your information' },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
            Multi-Step Wizard
          </h2>
          <p className="text-gray-600 dark:text-blue-200">
            Complete the form step by step with our guided wizard
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium \${index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-300'}\`}
                  >
                    {index + 1}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className="text-sm font-medium text-gray-900 dark:text-blue-100">
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-blue-300">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden sm:block w-24 h-0.5 bg-gray-200 dark:bg-slate-600 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            {renderStepContent()}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-4 py-2 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {currentStep === steps.length - 1 ? (
              <button
                type="submit"
                disabled={!formData.terms}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md transition-colors"
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Wizard;`,k=async()=>{try{await navigator.clipboard.writeText(j()),n(!0),setTimeout(()=>n(!1),2e3)}catch(y){console.error("Failed to copy: ",y)}};return a.jsx("div",{className:"max-w-4xl mx-auto p-6",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:[a.jsx("div",{className:"mb-8",children:a.jsxs("div",{className:"flex justify-between items-center mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:"Multi-Step Wizard"}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:"Complete the form step by step with our guided wizard"})]}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:k,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]})}),r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:j()})})}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mb-8",children:a.jsx("div",{className:"flex items-center justify-between",children:d.map((y,g)=>a.jsxs("div",{className:"flex items-center",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${g<=e?"bg-blue-600 text-white":"bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-300"}`,children:g+1}),a.jsxs("div",{className:"ml-3 hidden sm:block",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-blue-100",children:y.title}),a.jsx("p",{className:"text-xs text-gray-500 dark:text-blue-300",children:y.description})]})]}),g<d.length-1&&a.jsx("div",{className:"hidden sm:block w-24 h-0.5 bg-gray-200 dark:bg-slate-600 mx-4"})]},y.id))})}),a.jsxs("form",{onSubmit:x,children:[a.jsx("div",{className:"mb-8",children:b()}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("button",{type:"button",onClick:u,disabled:e===0,className:"px-4 py-2 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed",children:"Previous"}),e===d.length-1?a.jsx("button",{type:"submit",disabled:!i.terms,className:"px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md transition-colors",children:"Submit"}):a.jsx("button",{type:"button",onClick:c,className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors",children:"Next"})]})]})]})]})})},r2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),[i,o]=p.useState({name:"",email:"",phone:"",company:"",position:"",industry:"",companySize:"",projectType:"",budget:"",timeline:"",description:"",experience:"",requirements:"",preferences:""}),d=[{title:"Basic Information",fields:["name","email","phone"]},{title:"Company Information",fields:["company","position","industry","companySize"]},{title:"Project Details",fields:["projectType","budget","timeline","description"]},{title:"Additional Information",fields:["experience","requirements","preferences"]}],c=h=>{const{name:f,value:v}=h.target;o(w=>({...w,[f]:v}))},u=()=>{e<d.length-1&&t(e+1)},m=()=>{e>0&&t(e-1)},x=h=>{t(h)},b=h=>{h.preventDefault(),console.log("Multi-step form submitted:",i),alert("Multi-step form submitted successfully!")},j=h=>d[h].fields.every(f=>i[f]&&i[f].trim()!==""),k=()=>{switch(e){case 0:return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4",children:"Basic Information"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200 mb-6",children:"Let's start with some basic information about you."})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Full Name *"}),a.jsx("input",{type:"text",name:"name",value:i.name,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter your full name",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Email Address *"}),a.jsx("input",{type:"email",name:"email",value:i.email,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter your email address",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Phone Number"}),a.jsx("input",{type:"tel",name:"phone",value:i.phone,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter your phone number"})]})]})]});case 1:return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4",children:"Company Information"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200 mb-6",children:"Tell us about your company and role."})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Company Name *"}),a.jsx("input",{type:"text",name:"company",value:i.company,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter your company name",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Your Position *"}),a.jsx("input",{type:"text",name:"position",value:i.position,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter your job title",required:!0})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Industry *"}),a.jsxs("select",{name:"industry",value:i.industry,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",required:!0,children:[a.jsx("option",{value:"",children:"Select industry"}),a.jsx("option",{value:"technology",children:"Technology"}),a.jsx("option",{value:"healthcare",children:"Healthcare"}),a.jsx("option",{value:"finance",children:"Finance"}),a.jsx("option",{value:"education",children:"Education"}),a.jsx("option",{value:"retail",children:"Retail"}),a.jsx("option",{value:"manufacturing",children:"Manufacturing"}),a.jsx("option",{value:"other",children:"Other"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Company Size *"}),a.jsxs("select",{name:"companySize",value:i.companySize,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",required:!0,children:[a.jsx("option",{value:"",children:"Select size"}),a.jsx("option",{value:"1-10",children:"1-10 employees"}),a.jsx("option",{value:"11-50",children:"11-50 employees"}),a.jsx("option",{value:"51-200",children:"51-200 employees"}),a.jsx("option",{value:"201-1000",children:"201-1000 employees"}),a.jsx("option",{value:"1000+",children:"1000+ employees"})]})]})]})]})]});case 2:return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4",children:"Project Details"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200 mb-6",children:"Tell us about your project requirements."})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Project Type *"}),a.jsxs("select",{name:"projectType",value:i.projectType,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",required:!0,children:[a.jsx("option",{value:"",children:"Select project type"}),a.jsx("option",{value:"web-development",children:"Web Development"}),a.jsx("option",{value:"mobile-app",children:"Mobile App"}),a.jsx("option",{value:"e-commerce",children:"E-commerce"}),a.jsx("option",{value:"api-development",children:"API Development"}),a.jsx("option",{value:"data-analysis",children:"Data Analysis"}),a.jsx("option",{value:"consulting",children:"Consulting"}),a.jsx("option",{value:"other",children:"Other"})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Budget Range *"}),a.jsxs("select",{name:"budget",value:i.budget,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",required:!0,children:[a.jsx("option",{value:"",children:"Select budget"}),a.jsx("option",{value:"under-5k",children:"Under $5,000"}),a.jsx("option",{value:"5k-10k",children:"$5,000 - $10,000"}),a.jsx("option",{value:"10k-25k",children:"$10,000 - $25,000"}),a.jsx("option",{value:"25k-50k",children:"$25,000 - $50,000"}),a.jsx("option",{value:"50k-100k",children:"$50,000 - $100,000"}),a.jsx("option",{value:"100k+",children:"$100,000+"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Timeline *"}),a.jsxs("select",{name:"timeline",value:i.timeline,onChange:c,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",required:!0,children:[a.jsx("option",{value:"",children:"Select timeline"}),a.jsx("option",{value:"1-month",children:"1 month"}),a.jsx("option",{value:"2-3-months",children:"2-3 months"}),a.jsx("option",{value:"3-6-months",children:"3-6 months"}),a.jsx("option",{value:"6-12-months",children:"6-12 months"}),a.jsx("option",{value:"12+months",children:"12+ months"})]})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Project Description *"}),a.jsx("textarea",{name:"description",value:i.description,onChange:c,rows:4,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm resize-none",placeholder:"Describe your project in detail...",required:!0})]})]})]});case 3:return a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4",children:"Additional Information"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200 mb-6",children:"Any additional details that might help us understand your needs."})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Previous Experience"}),a.jsx("textarea",{name:"experience",value:i.experience,onChange:c,rows:3,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm resize-none",placeholder:"Tell us about your previous experience with similar projects..."})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Specific Requirements"}),a.jsx("textarea",{name:"requirements",value:i.requirements,onChange:c,rows:3,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm resize-none",placeholder:"Any specific technical requirements or constraints..."})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Preferences"}),a.jsx("textarea",{name:"preferences",value:i.preferences,onChange:c,rows:3,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm resize-none",placeholder:"Any preferences for technology stack, design style, etc..."})]})]})]});default:return null}},y=()=>`import { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: '',
    email: '',
    phone: '',
    // Step 2: Company Info
    companyName: '',
    industry: '',
    companySize: '',
    // Step 3: Project Details
    projectType: '',
    budget: '',
    timeline: '',
    // Step 4: Additional Info
    message: '',
    newsletter: false,
    terms: false,
  });

  const steps = [
    { id: 'basic', title: 'Basic Information', description: 'Tell us about yourself' },
    { id: 'company', title: 'Company Information', description: 'About your company' },
    { id: 'project', title: 'Project Details', description: 'Describe your project' },
    { id: 'additional', title: 'Additional Information', description: 'Any other details' },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Multi-step form completed successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
            Multi-Step Form
          </h2>
          <p className="text-gray-600 dark:text-blue-200">
            Complete your project request in multiple steps
          </p>
        </div>
        {/* Multi-step form implementation */}
      </div>
    </div>
  );
};

export default MultiStepForm;`,g=async()=>{try{await navigator.clipboard.writeText(y()),n(!0),setTimeout(()=>n(!1),2e3)}catch(h){console.error("Failed to copy: ",h)}};return a.jsx("div",{className:"max-w-4xl mx-auto p-6",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:[a.jsx("div",{className:"mb-8",children:a.jsxs("div",{className:"flex justify-between items-center mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:"Multi-Step Form"}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:"Complete your project request in multiple steps"})]}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:g,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]})}),r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:y()})})}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mb-8",children:a.jsx("div",{className:"flex items-center justify-between",children:d.map((h,f)=>a.jsxs("div",{className:"flex items-center",children:[a.jsx("button",{onClick:()=>x(f),className:`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${f===e?"bg-blue-600 border-blue-600 text-white":f<e?"bg-green-500 border-green-500 text-white":"bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-slate-400"}`,children:f<e?a.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}):a.jsx("span",{className:"text-sm font-medium",children:f+1})}),a.jsxs("div",{className:"ml-3 hidden sm:block",children:[a.jsx("p",{className:`text-sm font-medium ${f===e?"text-blue-600 dark:text-blue-400":f<e?"text-green-600 dark:text-green-400":"text-gray-500 dark:text-slate-400"}`,children:h.title}),a.jsx("p",{className:"text-xs text-gray-500 dark:text-slate-400",children:j(f)?"Complete":"Incomplete"})]}),f<d.length-1&&a.jsx("div",{className:`hidden sm:block w-16 h-0.5 mx-4 ${f<e?"bg-green-500":"bg-gray-300 dark:bg-slate-600"}`})]},f))})}),a.jsxs("form",{onSubmit:b,children:[a.jsx("div",{className:"mb-8",children:k()}),a.jsxs("div",{className:"flex justify-between pt-6 border-t border-gray-200 dark:border-slate-600",children:[a.jsx("button",{type:"button",onClick:m,disabled:e===0,className:`px-4 py-2 text-sm font-medium rounded-md transition-colors ${e===0?"text-gray-400 dark:text-slate-500 cursor-not-allowed":"text-gray-700 dark:text-blue-200 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600"}`,children:"Previous"}),a.jsx("div",{className:"flex space-x-3",children:e===d.length-1?a.jsx("button",{type:"submit",className:"px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors",children:"Submit Request"}):a.jsx("button",{type:"button",onClick:u,className:"px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors",children:"Next Step"})})]})]})]})]})})},s2=()=>{const[e,t]=p.useState(""),[r,s]=p.useState("all"),[l,n]=p.useState(!1),[i,o]=p.useState(!1),[d,c]=p.useState({category:"",dateRange:"",sortBy:"relevance",priceRange:"",rating:""}),[u,m]=p.useState([]),[x,b]=p.useState(!1),[j,k]=p.useState(!1),y=[{id:1,title:"React Development Course",description:"Learn React from basics to advanced concepts",category:"education",price:99,rating:4.8,date:"2024-01-15",type:"course"},{id:2,title:"JavaScript Best Practices",description:"Essential JavaScript patterns and practices",category:"education",price:49,rating:4.6,date:"2024-01-10",type:"book"},{id:3,title:"Web Design Tools",description:"Professional web design software and tools",category:"tools",price:199,rating:4.9,date:"2024-01-20",type:"software"},{id:4,title:"CSS Grid Layout Guide",description:"Complete guide to CSS Grid layout system",category:"education",price:29,rating:4.7,date:"2024-01-05",type:"tutorial"},{id:5,title:"Node.js Backend Development",description:"Build scalable backend applications with Node.js",category:"education",price:149,rating:4.5,date:"2024-01-12",type:"course"}],g=N=>{N.preventDefault(),b(!0),setTimeout(()=>{let C=y;if(e.trim()&&(C=C.filter(S=>S.title.toLowerCase().includes(e.toLowerCase())||S.description.toLowerCase().includes(e.toLowerCase()))),r!=="all"&&(C=C.filter(S=>S.type===r)),d.category&&(C=C.filter(S=>S.category===d.category)),d.priceRange){const[S,T]=d.priceRange.split("-").map(Number);C=C.filter(z=>T?z.price>=S&&z.price<=T:z.price>=S)}switch(d.rating&&(C=C.filter(S=>S.rating>=parseFloat(d.rating))),d.sortBy){case"price-low":C.sort((S,T)=>S.price-T.price);break;case"price-high":C.sort((S,T)=>T.price-S.price);break;case"rating":C.sort((S,T)=>T.rating-S.rating);break;case"date":C.sort((S,T)=>new Date(T.date)-new Date(S.date));break}m(C),b(!1)},1e3)},h=(N,C)=>{c(S=>({...S,[N]:C}))},f=()=>{c({category:"",dateRange:"",sortBy:"relevance",priceRange:"",rating:""}),t(""),m([])},v=N=>{switch(N){case"course":return a.jsx("svg",{className:"w-5 h-5 text-blue-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})});case"book":return a.jsx("svg",{className:"w-5 h-5 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})});case"software":return a.jsx("svg",{className:"w-5 h-5 text-purple-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})});case"tutorial":return a.jsx("svg",{className:"w-5 h-5 text-orange-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})});default:return a.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}},w=()=>`import { useState, useEffect } from 'react';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('all');
  const [filters, setFilters] = useState({
    category: '',
    dateRange: '',
    sortBy: 'relevance',
    priceRange: '',
    rating: '',
  });
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search implementation
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
            Advanced Search Form
          </h2>
          <p className="text-gray-600 dark:text-blue-200">
            Search and filter through content with advanced options
          </p>
        </div>
        {/* Search form implementation */}
      </div>
    </div>
  );
};

export default SearchForm;`,D=async()=>{try{await navigator.clipboard.writeText(w()),o(!0),setTimeout(()=>o(!1),2e3)}catch(N){console.error("Failed to copy: ",N)}};return a.jsx("div",{className:"max-w-6xl mx-auto p-6",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:[a.jsx("div",{className:"mb-8",children:a.jsxs("div",{className:"flex justify-between items-center mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:"Advanced Search Form"}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:"Search and filter through content with advanced options"})]}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>n(!l),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors",children:l?"Hide Code":"Show Code"}),a.jsx("button",{onClick:D,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${i?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:i?"Copied!":"Copy Code"})]})]})}),l?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:w()})})}):a.jsxs(a.Fragment,{children:[a.jsxs("form",{onSubmit:g,className:"mb-8",children:[a.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 mb-4",children:[a.jsx("div",{className:"flex-1",children:a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",value:e,onChange:N=>t(N.target.value),placeholder:"Search for courses, books, tools...",className:"w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 dark:placeholder-slate-400 transition-colors text-sm"}),a.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:a.jsx("svg",{className:"w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("select",{value:r,onChange:N=>s(N.target.value),className:"px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",children:[a.jsx("option",{value:"all",children:"All Types"}),a.jsx("option",{value:"course",children:"Courses"}),a.jsx("option",{value:"book",children:"Books"}),a.jsx("option",{value:"software",children:"Software"}),a.jsx("option",{value:"tutorial",children:"Tutorials"})]}),a.jsx("button",{type:"button",onClick:()=>k(!j),className:"px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-gray-700 dark:text-blue-200",children:"Filters"}),a.jsx("button",{type:"submit",disabled:x,className:"px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors text-sm font-medium",children:x?"Searching...":"Search"})]})]}),j&&a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-4",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Category"}),a.jsxs("select",{value:d.category,onChange:N=>h("category",N.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm",children:[a.jsx("option",{value:"",children:"All Categories"}),a.jsx("option",{value:"education",children:"Education"}),a.jsx("option",{value:"tools",children:"Tools"}),a.jsx("option",{value:"design",children:"Design"}),a.jsx("option",{value:"development",children:"Development"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Price Range"}),a.jsxs("select",{value:d.priceRange,onChange:N=>h("priceRange",N.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm",children:[a.jsx("option",{value:"",children:"Any Price"}),a.jsx("option",{value:"0-25",children:"Under $25"}),a.jsx("option",{value:"25-50",children:"$25 - $50"}),a.jsx("option",{value:"50-100",children:"$50 - $100"}),a.jsx("option",{value:"100-200",children:"$100 - $200"}),a.jsx("option",{value:"200-999",children:"$200+"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Minimum Rating"}),a.jsxs("select",{value:d.rating,onChange:N=>h("rating",N.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm",children:[a.jsx("option",{value:"",children:"Any Rating"}),a.jsx("option",{value:"4.5",children:"4.5+ Stars"}),a.jsx("option",{value:"4.0",children:"4.0+ Stars"}),a.jsx("option",{value:"3.5",children:"3.5+ Stars"}),a.jsx("option",{value:"3.0",children:"3.0+ Stars"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Sort By"}),a.jsxs("select",{value:d.sortBy,onChange:N=>h("sortBy",N.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm",children:[a.jsx("option",{value:"relevance",children:"Relevance"}),a.jsx("option",{value:"price-low",children:"Price: Low to High"}),a.jsx("option",{value:"price-high",children:"Price: High to Low"}),a.jsx("option",{value:"rating",children:"Highest Rated"}),a.jsx("option",{value:"date",children:"Newest First"})]})]})]}),a.jsx("div",{className:"flex justify-end",children:a.jsx("button",{type:"button",onClick:f,className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors",children:"Clear All Filters"})})]})]}),u.length>0&&a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"flex justify-between items-center",children:a.jsxs("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:["Search Results (",u.length,")"]})}),a.jsx("div",{className:"grid gap-4",children:u.map(N=>a.jsx("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors",children:a.jsxs("div",{className:"flex items-start space-x-4",children:[a.jsx("div",{className:"flex-shrink-0",children:v(N.type)}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 truncate",children:N.title}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("svg",{className:"w-4 h-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),a.jsx("span",{className:"ml-1 text-sm text-gray-600 dark:text-blue-300",children:N.rating})]}),a.jsxs("span",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:["$",N.price]})]})]}),a.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-blue-200",children:N.description}),a.jsxs("div",{className:"mt-2 flex items-center space-x-4 text-xs text-gray-500 dark:text-slate-400",children:[a.jsx("span",{className:"capitalize",children:N.type}),a.jsx("span",{className:"capitalize",children:N.category}),a.jsx("span",{children:new Date(N.date).toLocaleDateString()})]})]})]})},N.id))})]}),u.length===0&&!x&&a.jsxs("div",{className:"text-center py-12",children:[a.jsx("svg",{className:"w-12 h-12 text-gray-400 mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-2",children:"No results found"}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:"Try adjusting your search terms or filters"})]}),x&&a.jsxs("div",{className:"text-center py-12",children:[a.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"}),a.jsx("p",{className:"mt-2 text-gray-600 dark:text-blue-200",children:"Searching..."})]})]})]})})},l2=()=>{const[e,t]=p.useState(!1),[r,s]=p.useState(!1),[l,n]=p.useState({category:[],priceRange:{min:"",max:""},brand:[],rating:"",availability:"",features:[],color:[],size:[],material:[],condition:"",sortBy:"relevance"}),[i,o]=p.useState([]),[d,c]=p.useState(!1),u=[{id:1,name:"Wireless Bluetooth Headphones",category:"electronics",brand:"TechSound",price:89.99,rating:4.5,availability:"in-stock",features:["noise-cancelling","wireless","long-battery"],color:["black","white"],size:"one-size",material:"plastic",condition:"new"},{id:2,name:"Organic Cotton T-Shirt",category:"clothing",brand:"EcoWear",price:24.99,rating:4.2,availability:"in-stock",features:["organic","sustainable"],color:["white","blue","green"],size:"medium",material:"cotton",condition:"new"},{id:3,name:"Stainless Steel Water Bottle",category:"accessories",brand:"HydroMax",price:19.99,rating:4.7,availability:"limited",features:["insulated","leak-proof","bpa-free"],color:["silver","black"],size:"large",material:"stainless-steel",condition:"new"},{id:4,name:"Gaming Mechanical Keyboard",category:"electronics",brand:"GameTech",price:149.99,rating:4.8,availability:"in-stock",features:["rgb-lighting","mechanical-switches","programmable"],color:["black"],size:"full-size",material:"plastic",condition:"new"},{id:5,name:"Vintage Leather Jacket",category:"clothing",brand:"RetroStyle",price:199.99,rating:4.3,availability:"out-of-stock",features:["vintage","genuine-leather"],color:["brown","black"],size:"large",material:"leather",condition:"used"}],m={category:[{value:"electronics",label:"Electronics"},{value:"clothing",label:"Clothing"},{value:"accessories",label:"Accessories"},{value:"home",label:"Home & Garden"},{value:"sports",label:"Sports & Outdoors"}],brand:[{value:"TechSound",label:"TechSound"},{value:"EcoWear",label:"EcoWear"},{value:"HydroMax",label:"HydroMax"},{value:"GameTech",label:"GameTech"},{value:"RetroStyle",label:"RetroStyle"}],features:[{value:"noise-cancelling",label:"Noise Cancelling"},{value:"wireless",label:"Wireless"},{value:"long-battery",label:"Long Battery"},{value:"organic",label:"Organic"},{value:"sustainable",label:"Sustainable"},{value:"insulated",label:"Insulated"},{value:"leak-proof",label:"Leak Proof"},{value:"bpa-free",label:"BPA Free"},{value:"rgb-lighting",label:"RGB Lighting"},{value:"mechanical-switches",label:"Mechanical Switches"},{value:"programmable",label:"Programmable"},{value:"vintage",label:"Vintage"},{value:"genuine-leather",label:"Genuine Leather"}],color:[{value:"black",label:"Black"},{value:"white",label:"White"},{value:"blue",label:"Blue"},{value:"green",label:"Green"},{value:"silver",label:"Silver"},{value:"brown",label:"Brown"}],size:[{value:"one-size",label:"One Size"},{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"},{value:"full-size",label:"Full Size"}],material:[{value:"plastic",label:"Plastic"},{value:"cotton",label:"Cotton"},{value:"stainless-steel",label:"Stainless Steel"},{value:"leather",label:"Leather"},{value:"wood",label:"Wood"}],condition:[{value:"new",label:"New"},{value:"used",label:"Used"},{value:"refurbished",label:"Refurbished"}],availability:[{value:"in-stock",label:"In Stock"},{value:"limited",label:"Limited Stock"},{value:"out-of-stock",label:"Out of Stock"}],rating:[{value:"4.5",label:"4.5+ Stars"},{value:"4.0",label:"4.0+ Stars"},{value:"3.5",label:"3.5+ Stars"},{value:"3.0",label:"3.0+ Stars"}],sortBy:[{value:"relevance",label:"Relevance"},{value:"price-low",label:"Price: Low to High"},{value:"price-high",label:"Price: High to Low"},{value:"rating",label:"Highest Rated"},{value:"name",label:"Name A-Z"}]},x=(v,w)=>{n(D=>Array.isArray(D[v])?{...D,[v]:D[v].includes(w)?D[v].filter(N=>N!==w):[...D[v],w]}:v==="priceRange"?{...D,priceRange:{...D.priceRange,...w}}:{...D,[v]:w})},b=()=>{c(!0),setTimeout(()=>{let v=[...u];switch(l.category.length>0&&(v=v.filter(w=>l.category.includes(w.category))),l.brand.length>0&&(v=v.filter(w=>l.brand.includes(w.brand))),(l.priceRange.min||l.priceRange.max)&&(v=v.filter(w=>{const D=w.price,N=l.priceRange.min?parseFloat(l.priceRange.min):0,C=l.priceRange.max?parseFloat(l.priceRange.max):1/0;return D>=N&&D<=C})),l.rating&&(v=v.filter(w=>w.rating>=parseFloat(l.rating))),l.availability&&(v=v.filter(w=>w.availability===l.availability)),l.features.length>0&&(v=v.filter(w=>l.features.some(D=>w.features.includes(D)))),l.color.length>0&&(v=v.filter(w=>l.color.some(D=>w.color.includes(D)))),l.size.length>0&&(v=v.filter(w=>l.size.includes(w.size))),l.material.length>0&&(v=v.filter(w=>l.material.includes(w.material))),l.condition&&(v=v.filter(w=>w.condition===l.condition)),l.sortBy){case"price-low":v.sort((w,D)=>w.price-D.price);break;case"price-high":v.sort((w,D)=>D.price-w.price);break;case"rating":v.sort((w,D)=>D.rating-w.rating);break;case"name":v.sort((w,D)=>w.name.localeCompare(D.name));break}o(v),c(!1)},500)},j=()=>{n({category:[],priceRange:{min:"",max:""},brand:[],rating:"",availability:"",features:[],color:[],size:[],material:[],condition:"",sortBy:"relevance"}),o([])},k=()=>{let v=0;return Object.entries(l).forEach(([w,D])=>{w==="priceRange"?(D.min||D.max)&&v++:Array.isArray(D)?D.length>0&&v++:D&&D!=="relevance"&&v++}),v},y=({title:v,options:w,filterType:D,selectedValues:N})=>a.jsxs("div",{className:"space-y-2",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-900 dark:text-blue-100",children:v}),a.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto",children:w.map(C=>a.jsxs("label",{className:"flex items-center space-x-2",children:[a.jsx("input",{type:"checkbox",checked:N.includes(C.value),onChange:()=>x(D,C.value),className:"w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-blue-200",children:C.label})]},C.value))})]}),g=({title:v,options:w,filterType:D,value:N})=>a.jsxs("div",{className:"space-y-2",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-900 dark:text-blue-100",children:v}),a.jsx("select",{value:N,onChange:C=>x(D,C.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",children:w.map(C=>a.jsx("option",{value:C.value,children:C.label},C.value))})]}),h=()=>`import { useState, useEffect } from 'react';

const FilterForm = () => {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: { min: '', max: '' },
    brand: [],
    rating: '',
    availability: '',
    features: [],
    sortBy: 'name',
  });
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = (filterType, value) => {
    // Filter change implementation
  };

  const clearFilters = () => {
    // Clear filters implementation
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2">
            Advanced Filter Form
          </h2>
          <p className="text-gray-600 dark:text-blue-200">
            Filter products with multiple criteria and see results in real-time
          </p>
        </div>
        {/* Filter form implementation */}
      </div>
    </div>
  );
};

export default FilterForm;`,f=async()=>{try{await navigator.clipboard.writeText(h()),s(!0),setTimeout(()=>s(!1),2e3)}catch(v){console.error("Failed to copy: ",v)}};return a.jsx("div",{className:"max-w-7xl mx-auto p-6",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:[a.jsx("div",{className:"mb-8",children:a.jsxs("div",{className:"flex justify-between items-center mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:"Advanced Filter Form"}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:"Filter products with multiple criteria and see results in real-time"})]}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>t(!e),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors",children:e?"Hide Code":"Show Code"}),a.jsx("button",{onClick:f,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${r?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:r?"Copied!":"Copy Code"})]})]})}),e?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:h()})})}):a.jsx(a.Fragment,{children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[a.jsx("div",{className:"lg:col-span-1",children:a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-6",children:[a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:"Filters"}),a.jsxs("span",{className:"text-sm text-gray-500 dark:text-slate-400",children:[k()," active"]})]}),a.jsx(y,{title:"Category",options:m.category,filterType:"category",selectedValues:l.category}),a.jsx(y,{title:"Brand",options:m.brand,filterType:"brand",selectedValues:l.brand}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-900 dark:text-blue-100",children:"Price Range"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("input",{type:"number",placeholder:"Min",value:l.priceRange.min,onChange:v=>x("priceRange",{min:v.target.value}),className:"px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm"}),a.jsx("input",{type:"number",placeholder:"Max",value:l.priceRange.max,onChange:v=>x("priceRange",{max:v.target.value}),className:"px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-blue-100 transition-colors text-sm"})]})]}),a.jsx(g,{title:"Rating",options:m.rating,filterType:"rating",value:l.rating}),a.jsx(g,{title:"Availability",options:m.availability,filterType:"availability",value:l.availability}),a.jsx(y,{title:"Features",options:m.features,filterType:"features",selectedValues:l.features}),a.jsx(y,{title:"Color",options:m.color,filterType:"color",selectedValues:l.color}),a.jsx(y,{title:"Size",options:m.size,filterType:"size",selectedValues:l.size}),a.jsx(y,{title:"Material",options:m.material,filterType:"material",selectedValues:l.material}),a.jsx(g,{title:"Condition",options:m.condition,filterType:"condition",value:l.condition}),a.jsxs("div",{className:"pt-4 border-t border-gray-200 dark:border-slate-600 space-y-2",children:[a.jsx("button",{onClick:b,disabled:d,className:"w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md transition-colors text-sm font-medium",children:d?"Applying...":"Apply Filters"}),a.jsx("button",{onClick:j,className:"w-full px-4 py-2 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors text-sm font-medium",children:"Clear All"})]})]})}),a.jsxs("div",{className:"lg:col-span-3",children:[a.jsxs("div",{className:"flex justify-between items-center mb-4",children:[a.jsxs("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:["Results (",i.length,")"]}),a.jsx(g,{title:"Sort By",options:m.sortBy,filterType:"sortBy",value:l.sortBy})]}),d?a.jsxs("div",{className:"text-center py-12",children:[a.jsx("div",{className:"inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"}),a.jsx("p",{className:"mt-2 text-gray-600 dark:text-blue-200",children:"Filtering..."})]}):i.length>0?a.jsx("div",{className:"grid gap-4",children:i.map(v=>a.jsx("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors",children:a.jsxs("div",{className:"flex justify-between items-start",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("h4",{className:"text-lg font-medium text-gray-900 dark:text-blue-100",children:v.name}),a.jsxs("p",{className:"text-sm text-gray-600 dark:text-blue-200 capitalize",children:[v.brand," • ",v.category]}),a.jsxs("div",{className:"flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-slate-400",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("svg",{className:"w-4 h-4 text-yellow-400 mr-1",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),v.rating]}),a.jsx("span",{className:"capitalize",children:v.condition}),a.jsx("span",{className:"capitalize",children:v.availability.replace("-"," ")})]}),a.jsxs("div",{className:"flex flex-wrap gap-1 mt-2",children:[v.features.slice(0,3).map(w=>a.jsx("span",{className:"px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full",children:w.replace("-"," ")},w)),v.features.length>3&&a.jsxs("span",{className:"px-2 py-1 bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-slate-300 text-xs rounded-full",children:["+",v.features.length-3," more"]})]})]}),a.jsxs("div",{className:"text-right",children:[a.jsxs("div",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100",children:["$",v.price]}),a.jsx("button",{className:"mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium",children:"Add to Cart"})]})]})},v.id))}):a.jsxs("div",{className:"text-center py-12",children:[a.jsx("svg",{className:"w-12 h-12 text-gray-400 mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-2",children:"No items found"}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:"Try adjusting your filters to see more results"})]})]})]})})]})})},km=({componentId:e,formData:t,handleFormChange:r})=>{p.useState(e||"validation");const s=()=>{switch(e){case"validation":return a.jsx(ym,{});case"wizard":return a.jsx(a2,{});case"multistep":return a.jsx(r2,{});case"search":return a.jsx(s2,{});case"filter":return a.jsx(l2,{});default:return a.jsx(ym,{})}},l=n=>{switch(n){case"validation":return a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("div",{className:"w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center",children:a.jsx("svg",{className:"w-4 h-4 text-blue-600 dark:text-blue-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:"Validation Form"})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"First Name *"}),a.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter your first name"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Email Address *"}),a.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter your email"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Password *"}),a.jsx("input",{type:"password",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Create a password"})]}),a.jsx("button",{className:"w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm font-medium",children:"Submit Form"})]})]})});case"wizard":return a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("div",{className:"w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center",children:a.jsx("svg",{className:"w-4 h-4 text-purple-600 dark:text-purple-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:"Wizard Form"})]}),a.jsx("div",{className:"flex items-center justify-between mb-4",children:[1,2,3,4].map(i=>a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:`w-8 h-8 rounded-full border-2 flex items-center justify-center ${i===1?"bg-blue-600 border-blue-600 text-white":"bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-slate-400"}`,children:i}),i<4&&a.jsx("div",{className:"w-8 h-0.5 bg-gray-300 dark:bg-slate-600 mx-2"})]},i))}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Full Name *"}),a.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter your full name"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Email Address *"}),a.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter your email"})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("button",{className:"px-4 py-2 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors text-sm",children:"Previous"}),a.jsx("button",{className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm",children:"Next"})]})]})]})});case"multistep":return a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("div",{className:"w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center",children:a.jsx("svg",{className:"w-4 h-4 text-green-600 dark:text-green-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 10h16M4 14h16M4 18h16"})})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:"Multi-Step Form"})]}),a.jsx("div",{className:"flex items-center justify-between mb-4",children:["Basic Info","Company","Project","Review"].map((i,o)=>a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:`w-8 h-8 rounded-full border-2 flex items-center justify-center ${o===0?"bg-green-500 border-green-500 text-white":"bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-slate-400"}`,children:o===0?a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}):o+1}),o<3&&a.jsx("div",{className:"w-8 h-0.5 bg-gray-300 dark:bg-slate-600 mx-2"})]},i))}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Project Name *"}),a.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter project name"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Company *"}),a.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Enter company name"})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("button",{className:"px-4 py-2 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors text-sm",children:"Previous"}),a.jsx("button",{className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm",children:"Next Step"})]})]})]})});case"search":return a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("div",{className:"w-6 h-6 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center",children:a.jsx("svg",{className:"w-4 h-4 text-orange-600 dark:text-orange-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:"Search Form"})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",className:"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",placeholder:"Search for courses, books, tools..."}),a.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:a.jsx("svg",{className:"w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("select",{className:"px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-blue-100 transition-colors text-sm",children:[a.jsx("option",{children:"All Types"}),a.jsx("option",{children:"Courses"}),a.jsx("option",{children:"Books"}),a.jsx("option",{children:"Software"})]}),a.jsx("button",{className:"px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-sm",children:"Filters"}),a.jsx("button",{className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm",children:"Search"})]}),a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-md p-3",children:[a.jsxs("div",{className:"text-sm text-gray-600 dark:text-blue-200",children:[a.jsx("strong",{children:"React Development Course"})," - Learn React from basics to advanced concepts"]}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400 mt-1",children:"Education • $99 • 4.8 stars"})]})]})]})});case"filter":return a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-600 p-4",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("div",{className:"w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center",children:a.jsx("svg",{className:"w-4 h-4 text-indigo-600 dark:text-indigo-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"})})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:"Filter Form"})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Category"}),a.jsxs("div",{className:"space-y-1",children:[a.jsxs("label",{className:"flex items-center space-x-2",children:[a.jsx("input",{type:"checkbox",className:"w-4 h-4 text-blue-600 rounded"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-blue-200",children:"Electronics"})]}),a.jsxs("label",{className:"flex items-center space-x-2",children:[a.jsx("input",{type:"checkbox",className:"w-4 h-4 text-blue-600 rounded"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-blue-200",children:"Clothing"})]})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-blue-200",children:"Price Range"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("input",{type:"number",placeholder:"Min",className:"px-2 py-1 border border-gray-300 dark:border-slate-600 rounded text-sm"}),a.jsx("input",{type:"number",placeholder:"Max",className:"px-2 py-1 border border-gray-300 dark:border-slate-600 rounded text-sm"})]})]})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("button",{className:"px-3 py-1 text-gray-600 dark:text-blue-300 hover:text-gray-800 dark:hover:text-blue-100 transition-colors text-sm",children:"Clear All"}),a.jsx("button",{className:"px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm",children:"Apply Filters"})]})]})});default:return a.jsx("div",{children:"Form component not found"})}};return t&&t.preview?l(e):a.jsx("div",{className:"w-full",children:s()})},_r=({formType:e})=>{const t=r=>{switch(r){case"beginner":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";case"intermediate":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";case"advanced":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}};return a.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:a.jsx("div",{className:"space-y-8",children:e?(()=>{const r=vm.find(s=>s.id===e);return r?a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:a.jsxs("div",{className:"mb-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:r.name}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:r.description})]}),a.jsx("div",{className:"flex items-center space-x-2",children:a.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full ${t(r.complexity)}`,children:r.complexity})})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Features"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:r.features.map((s,l)=>a.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600 dark:text-blue-200",children:[a.jsx("svg",{className:"w-4 h-4 text-green-500 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:s})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Live Demo"}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:a.jsx(km,{componentId:r.id,formData:{}})})]})]})}):a.jsx("div",{children:"Form component not found"})})():vm.map(r=>a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:a.jsxs("div",{className:"mb-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:r.name}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:r.description})]}),a.jsx("div",{className:"flex items-center space-x-2",children:a.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full ${t(r.complexity)}`,children:r.complexity})})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Features"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:r.features.map((s,l)=>a.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600 dark:text-blue-200",children:[a.jsx("svg",{className:"w-4 h-4 text-green-500 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:s})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Live Demo"}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:a.jsx(km,{componentId:r.id,formData:{}})})]})]})},r.id))})})})},wm=[{id:"navbar",name:"Navbar",description:"Responsive navigation bar with mobile menu and brand logo",complexity:"intermediate",features:["Responsive design","Mobile hamburger menu","Brand logo integration","Active state indicators","Dark mode support","Smooth transitions"],category:"navigation"},{id:"breadcrumb",name:"Breadcrumb",description:"Navigation breadcrumb component for showing current page location",complexity:"beginner",features:["Hierarchical navigation","Current page indicator","Clickable links","Accessibility support","Clean separator design","Dark mode compatible"],category:"navigation"},{id:"pagination",name:"Pagination",description:"Complete pagination component with page numbers and navigation controls",complexity:"intermediate",features:["Page number display","Previous/Next buttons","Results counter","Responsive design","Disabled states","Customizable styling"],category:"navigation"},{id:"tabs",name:"Tabs",description:"Interactive tab component for organizing content into sections",complexity:"beginner",features:["Active tab highlighting","Smooth transitions","Content switching","Keyboard navigation","Accessible design","Customizable content"],category:"navigation"},{id:"menu",name:"Menu",description:"Dropdown menu component with icons and interactive options",complexity:"intermediate",features:["Dropdown functionality","Icon integration","Click outside to close","Hover effects","Selection feedback","Responsive positioning"],category:"navigation"}],n2=()=>{p.useState(!1);const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),i=[{name:"Default Navbar",component:a.jsx("nav",{className:"bg-white dark:bg-slate-800 shadow-lg",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between h-16",children:[a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"flex-shrink-0 flex items-center",children:[a.jsx("div",{className:"h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center",children:a.jsx("span",{className:"text-white font-bold text-sm",children:"TK"})}),a.jsx("span",{className:"ml-2 text-xl font-bold text-gray-900 dark:text-white",children:"TailwindKit"})]}),a.jsxs("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[a.jsx("a",{href:"#",className:"border-blue-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",children:"Home"}),a.jsx("a",{href:"#",className:"border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",children:"About"}),a.jsx("a",{href:"#",className:"border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",children:"Services"}),a.jsx("a",{href:"#",className:"border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",children:"Contact"})]})]}),a.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:a.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors",children:"Get Started"})})]})})})},{name:"Centered Navbar",component:a.jsx("nav",{className:"bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"flex justify-center h-16",children:a.jsxs("div",{className:"flex items-center space-x-8",children:[a.jsx("a",{href:"#",className:"text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Home"}),a.jsx("a",{href:"#",className:"text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Products"}),a.jsx("div",{className:"flex items-center",children:a.jsx("div",{className:"h-10 w-10 bg-white rounded-full flex items-center justify-center",children:a.jsx("span",{className:"text-purple-600 font-bold text-lg",children:"TK"})})}),a.jsx("a",{href:"#",className:"text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"About"}),a.jsx("a",{href:"#",className:"text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Contact"})]})})})})},{name:"Minimal Navbar",component:a.jsx("nav",{className:"bg-transparent border-b border-gray-200 dark:border-slate-700",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between items-center h-16",children:[a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Logo"})}),a.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"Work"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"About"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"Blog"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"Contact"})]}),a.jsx("div",{className:"md:hidden",children:a.jsx("button",{className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",children:a.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]})})})}],o=()=>{const c=i[e];return c.name==="Default Navbar"?`import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TK</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                TailwindKit
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="border-blue-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </a>
              <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Services
              </a>
              <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;`:c.name==="Centered Navbar"?`import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Products
            </a>
            <div className="flex items-center">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">TK</span>
              </div>
            </div>
            <a href="#" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-white hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;`:`import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Logo</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
              Work
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;`},d=async()=>{try{await navigator.clipboard.writeText(o()),n(!0),setTimeout(()=>n(!1),2e3)}catch(c){console.error("Failed to copy: ",c)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:i.map((c,u)=>a.jsx("button",{onClick:()=>t(u),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===u?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:c.name},u))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:i[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:d,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:o()})})}):i[e].component})]})},i2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),i=[{name:"Default Breadcrumb",component:a.jsx("nav",{className:"flex","aria-label":"Breadcrumb",children:a.jsx("ol",{className:"flex items-center space-x-4",children:[{name:"Home",href:"#",current:!1},{name:"Components",href:"#",current:!1},{name:"Navigation",href:"#",current:!1},{name:"Breadcrumb",href:"#",current:!0}].map((c,u)=>a.jsx("li",{children:a.jsxs("div",{className:"flex items-center",children:[u!==0&&a.jsx("svg",{className:"flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:a.jsx("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),a.jsx("a",{href:c.href,className:`ml-4 text-sm font-medium ${c.current?"text-gray-500 dark:text-gray-400":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`,"aria-current":c.current?"page":void 0,children:c.name})]})},c.name))})})},{name:"Icon Breadcrumb",component:a.jsx("nav",{className:"flex","aria-label":"Breadcrumb",children:a.jsx("ol",{className:"flex items-center space-x-2",children:[{name:"Home",href:"#",current:!1,icon:"🏠"},{name:"Products",href:"#",current:!1,icon:"📦"},{name:"Electronics",href:"#",current:!1,icon:"📱"},{name:"Smartphones",href:"#",current:!0,icon:"📱"}].map((c,u)=>a.jsx("li",{children:a.jsxs("div",{className:"flex items-center",children:[u!==0&&a.jsx("svg",{className:"flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 mx-2",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:a.jsx("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),a.jsxs("a",{href:c.href,className:`flex items-center text-sm font-medium ${c.current?"text-gray-500 dark:text-gray-400":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`,"aria-current":c.current?"page":void 0,children:[a.jsx("span",{className:"mr-1",children:c.icon}),c.name]})]})},c.name))})})},{name:"Styled Breadcrumb",component:a.jsx("nav",{className:"flex bg-gray-50 dark:bg-slate-800 rounded-lg p-4","aria-label":"Breadcrumb",children:a.jsx("ol",{className:"flex items-center space-x-2",children:[{name:"Dashboard",href:"#",current:!1},{name:"Projects",href:"#",current:!1},{name:"Project Alpha",href:"#",current:!0}].map((c,u)=>a.jsx("li",{children:a.jsxs("div",{className:"flex items-center",children:[u!==0&&a.jsx("svg",{className:"flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 mx-3",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:a.jsx("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),a.jsx("a",{href:c.href,className:`px-3 py-1 rounded-md text-sm font-medium transition-colors ${c.current?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white"}`,"aria-current":c.current?"page":void 0,children:c.name})]})},c.name))})})}],o=()=>{const c=i[e];return c.name==="Default Breadcrumb"?`import React from 'react';

const Breadcrumb = () => {
  const breadcrumbs = [
    { name: 'Home', href: '#', current: false },
    { name: 'Components', href: '#', current: false },
    { name: 'Navigation', href: '#', current: false },
    { name: 'Breadcrumb', href: '#', current: true },
  ];

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {breadcrumbs.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index !== 0 && (
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              <a
                href={item.href}
                className={\`ml-4 text-sm font-medium \${
                  item.current
                    ? 'text-gray-500 dark:text-gray-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }\`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`:c.name==="Icon Breadcrumb"?`import React from 'react';

const Breadcrumb = () => {
  const breadcrumbs = [
    { name: 'Home', href: '#', current: false, icon: '🏠' },
    { name: 'Products', href: '#', current: false, icon: '📦' },
    { name: 'Electronics', href: '#', current: false, icon: '📱' },
    { name: 'Smartphones', href: '#', current: true, icon: '📱' },
  ];

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index !== 0 && (
                <svg
                  className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              <a
                href={item.href}
                className={\`flex items-center text-sm font-medium \${
                  item.current
                    ? 'text-gray-500 dark:text-gray-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }\`}
                aria-current={item.current ? 'page' : undefined}
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`:`import React from 'react';

const Breadcrumb = () => {
  const breadcrumbs = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Alpha', href: '#', current: true },
  ];

  return (
    <nav className="flex bg-gray-50 dark:bg-slate-800 rounded-lg p-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index !== 0 && (
                <svg
                  className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              <a
                href={item.href}
                className={\`px-3 py-1 rounded-md text-sm font-medium transition-colors \${
                  item.current
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white'
                }\`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`},d=async()=>{try{await navigator.clipboard.writeText(o()),n(!0),setTimeout(()=>n(!1),2e3)}catch(c){console.error("Failed to copy: ",c)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:i.map((c,u)=>a.jsx("button",{onClick:()=>t(u),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===u?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:c.name},u))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:i[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:d,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:o()})})}):a.jsx("div",{className:"p-4",children:i[e].component})})]})},o2=()=>{const[e,t]=p.useState(1),[r,s]=p.useState(0),[l,n]=p.useState(!1),[i,o]=p.useState(!1),d=10,c=j=>{j>=1&&j<=d&&t(j)},u=()=>{const j=[],k=Math.max(1,e-2),y=Math.min(d,e+2);for(let g=k;g<=y;g++)j.push(a.jsx("button",{onClick:()=>c(g),className:`relative inline-flex items-center px-4 py-2 text-sm font-medium ${g===e?"z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-600 dark:text-blue-200":"bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"} border`,children:g},g));return j},m=[{name:"Default Pagination",component:a.jsxs("div",{className:"bg-white dark:bg-slate-800 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-slate-700 sm:px-6",children:[a.jsxs("div",{className:"flex-1 flex justify-between sm:hidden",children:[a.jsx("button",{onClick:()=>c(e-1),disabled:e===1,className:"relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Previous"}),a.jsx("button",{onClick:()=>c(e+1),disabled:e===d,className:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Next"})]}),a.jsxs("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[a.jsx("div",{children:a.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Showing"," ",a.jsx("span",{className:"font-medium",children:(e-1)*10+1})," ","to"," ",a.jsx("span",{className:"font-medium",children:Math.min(e*10,d*10)})," ","of ",a.jsx("span",{className:"font-medium",children:d*10})," ","results"]})}),a.jsx("div",{children:a.jsxs("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:[a.jsxs("button",{onClick:()=>c(e-1),disabled:e===1,className:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed",children:[a.jsx("span",{className:"sr-only",children:"Previous"}),a.jsx("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]}),u(),a.jsxs("button",{onClick:()=>c(e+1),disabled:e===d,className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed",children:[a.jsx("span",{className:"sr-only",children:"Next"}),a.jsx("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})})]})]})},{name:"Simple Pagination",component:a.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[a.jsx("button",{onClick:()=>c(e-1),disabled:e===1,className:"px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"← Previous"}),a.jsxs("span",{className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300",children:["Page ",e," of ",d]}),a.jsx("button",{onClick:()=>c(e+1),disabled:e===d,className:"px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed",children:"Next →"})]})},{name:"Compact Pagination",component:a.jsxs("div",{className:"flex items-center justify-between bg-gray-50 dark:bg-slate-800 px-4 py-3 rounded-lg",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("button",{onClick:()=>c(e-1),disabled:e===1,className:"p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",children:a.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),a.jsx("div",{className:"flex space-x-1",children:[e-1,e,e+1].map(j=>j<1||j>d?null:a.jsx("button",{onClick:()=>c(j),className:`w-8 h-8 text-sm font-medium rounded ${j===e?"bg-blue-600 text-white":"text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"}`,children:j},j))}),a.jsx("button",{onClick:()=>c(e+1),disabled:e===d,className:"p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",children:a.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),a.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:[e," / ",d]})]})}],x=()=>{const j=m[r];return j.name==="Default Pagination"?`import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={\`relative inline-flex items-center px-4 py-2 text-sm font-medium \${
            i === currentPage
              ? 'z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-600 dark:text-blue-200'
              : 'bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
          } border\`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="bg-white dark:bg-slate-800 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-slate-700 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Showing <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to{' '}
            <span className="font-medium">
              {Math.min(currentPage * 10, totalPages * 10)}
            </span>{' '}
            of <span className="font-medium">{totalPages * 10}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;`:j.name==="Simple Pagination"?`import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ← Previous
      </button>
      <span className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;`:`import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 dark:bg-slate-800 px-4 py-3 rounded-lg">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex space-x-1">
          {[currentPage - 1, currentPage, currentPage + 1].map((page) => {
            if (page < 1 || page > totalPages) return null;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={\`w-8 h-8 text-sm font-medium rounded \${
                  page === currentPage
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                }\`}
              >
                {page}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {currentPage} / {totalPages}
      </div>
    </div>
  );
};

export default Pagination;`},b=async()=>{try{await navigator.clipboard.writeText(x()),o(!0),setTimeout(()=>o(!1),2e3)}catch(j){console.error("Failed to copy: ",j)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:m.map((j,k)=>a.jsx("button",{onClick:()=>s(k),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${r===k?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:j.name},k))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:m[r].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>n(!l),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:l?"Hide Code":"Show Code"}),a.jsx("button",{onClick:b,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${i?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:i?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:l?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:x()})})}):m[r].component})]})},d2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(0),[l,n]=p.useState(!1),[i,o]=p.useState(!1),d=[{id:0,name:"Overview",content:"This is the overview content. Here you can see a summary of all the important information."},{id:1,name:"Details",content:"This is the details content. Here you can find more specific information about the topic."},{id:2,name:"Settings",content:"This is the settings content. Here you can configure various options and preferences."},{id:3,name:"Analytics",content:"This is the analytics content. Here you can view charts, graphs, and statistical data."}],c=[{name:"Default Tabs",component:a.jsxs("div",{className:"w-full",children:[a.jsx("div",{className:"border-b border-gray-200 dark:border-slate-700",children:a.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:d.map(x=>a.jsx("button",{onClick:()=>t(x.id),className:`py-2 px-1 border-b-2 font-medium text-sm ${e===x.id?"border-blue-500 text-blue-600 dark:text-blue-400":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-slate-600"}`,children:x.name},x.id))})}),a.jsx("div",{className:"mt-6",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:d[e].name}),a.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:d[e].content})]})})]})},{name:"Pill Tabs",component:a.jsxs("div",{className:"w-full",children:[a.jsx("div",{className:"flex space-x-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-lg",children:d.map(x=>a.jsx("button",{onClick:()=>t(x.id),className:`px-4 py-2 text-sm font-medium rounded-md transition-colors ${e===x.id?"bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`,children:x.name},x.id))}),a.jsx("div",{className:"mt-6",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:d[e].name}),a.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:d[e].content})]})})]})},{name:"Vertical Tabs",component:a.jsxs("div",{className:"w-full flex",children:[a.jsx("div",{className:"w-48 border-r border-gray-200 dark:border-slate-700 pr-4",children:a.jsx("nav",{className:"space-y-1","aria-label":"Tabs",children:d.map(x=>a.jsx("button",{onClick:()=>t(x.id),className:`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${e===x.id?"bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"}`,children:x.name},x.id))})}),a.jsx("div",{className:"flex-1 ml-6",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:d[e].name}),a.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:d[e].content})]})})]})}],u=()=>{const x=c[r];return x.name==="Default Tabs"?`import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'Overview', content: 'This is the overview content.' },
    { id: 1, name: 'Details', content: 'This is the details content.' },
    { id: 2, name: 'Settings', content: 'This is the settings content.' },
    { id: 3, name: 'Analytics', content: 'This is the analytics content.' },
  ];

  return (
    <div className="w-full">
      <div className="border-b border-gray-200 dark:border-slate-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`py-2 px-1 border-b-2 font-medium text-sm \${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-slate-600'
              }\`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {tabs[activeTab].name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;`:x.name==="Pill Tabs"?`import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'Overview', content: 'This is the overview content.' },
    { id: 1, name: 'Details', content: 'This is the details content.' },
    { id: 2, name: 'Settings', content: 'This is the settings content.' },
    { id: 3, name: 'Analytics', content: 'This is the analytics content.' },
  ];

  return (
    <div className="w-full">
      <div className="flex space-x-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`px-4 py-2 text-sm font-medium rounded-md transition-colors \${
              activeTab === tab.id
                ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }\`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {tabs[activeTab].name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;`:`import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'Overview', content: 'This is the overview content.' },
    { id: 1, name: 'Details', content: 'This is the details content.' },
    { id: 2, name: 'Settings', content: 'This is the settings content.' },
    { id: 3, name: 'Analytics', content: 'This is the analytics content.' },
  ];

  return (
    <div className="w-full flex">
      <div className="w-48 border-r border-gray-200 dark:border-slate-700 pr-4">
        <nav className="space-y-1" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors \${
                activeTab === tab.id
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
              }\`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 ml-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {tabs[activeTab].name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;`},m=async()=>{try{await navigator.clipboard.writeText(u()),o(!0),setTimeout(()=>o(!1),2e3)}catch(x){console.error("Failed to copy: ",x)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:c.map((x,b)=>a.jsx("button",{onClick:()=>s(b),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${r===b?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:x.name},b))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:c[r].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>n(!l),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:l?"Hide Code":"Show Code"}),a.jsx("button",{onClick:m,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${i?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:i?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:l?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:u()})})}):a.jsx("div",{className:"p-4",children:c[r].component})})]})},c2=()=>{const[e,t]=p.useState(!1),[r,s]=p.useState(""),[l,n]=p.useState(0),[i,o]=p.useState(!1),[d,c]=p.useState(!1),u=[{id:"profile",name:"Profile",icon:"👤"},{id:"settings",name:"Settings",icon:"⚙️"},{id:"billing",name:"Billing",icon:"💳"},{id:"team",name:"Team",icon:"👥"},{id:"help",name:"Help & Support",icon:"❓"},{id:"logout",name:"Sign out",icon:"🚪"}],m=k=>{s(k.name),t(!1)},x=[{name:"Default Menu",component:a.jsxs("div",{className:"relative inline-block text-left",children:[a.jsx("div",{children:a.jsxs("button",{type:"button",onClick:()=>t(!e),className:"bg-white dark:bg-slate-800 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[r||"Options",a.jsx("svg",{className:"-mr-1 ml-2 h-5 w-5 inline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})}),e&&a.jsx("div",{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50",children:a.jsx("div",{className:"py-1",role:"menu","aria-orientation":"vertical",children:u.map(k=>a.jsxs("button",{onClick:()=>m(k),className:`${k.id==="logout"?"text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20":"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"} group flex items-center px-4 py-2 text-sm w-full text-left`,role:"menuitem",children:[a.jsx("span",{className:"mr-3 text-lg",children:k.icon}),k.name]},k.id))})}),e&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>t(!1)})]})},{name:"Button Menu",component:a.jsxs("div",{className:"relative inline-block text-left",children:[a.jsx("div",{children:a.jsxs("button",{type:"button",onClick:()=>t(!e),className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[a.jsx("span",{className:"mr-2",children:"👤"}),"User Menu",a.jsx("svg",{className:"-mr-1 ml-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})}),e&&a.jsx("div",{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50",children:a.jsxs("div",{className:"py-1",role:"menu","aria-orientation":"vertical",children:[u.slice(0,4).map(k=>a.jsxs("button",{onClick:()=>m(k),className:"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 group flex items-center px-4 py-2 text-sm w-full text-left",role:"menuitem",children:[a.jsx("span",{className:"mr-3 text-lg",children:k.icon}),k.name]},k.id)),a.jsx("div",{className:"border-t border-gray-100 dark:border-slate-700 my-1"}),a.jsxs("button",{onClick:()=>m(u[5]),className:"text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 group flex items-center px-4 py-2 text-sm w-full text-left",role:"menuitem",children:[a.jsx("span",{className:"mr-3 text-lg",children:"🚪"}),"Sign out"]})]})}),e&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>t(!1)})]})},{name:"Minimal Menu",component:a.jsxs("div",{className:"relative inline-block text-left",children:[a.jsx("div",{children:a.jsx("button",{type:"button",onClick:()=>t(!e),className:"flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",children:a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})})})}),e&&a.jsx("div",{className:"origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50",children:a.jsx("div",{className:"py-1",role:"menu","aria-orientation":"vertical",children:u.slice(0,3).map(k=>a.jsx("button",{onClick:()=>m(k),className:"text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 group flex items-center px-3 py-2 text-sm w-full text-left",role:"menuitem",children:k.name},k.id))})}),e&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>t(!1)})]})}],b=()=>{const k=x[l];return k.name==="Default Menu"?`import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const menuItems = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'team', name: 'Team', icon: '👥' },
    { id: 'help', name: 'Help & Support', icon: '❓' },
    { id: 'logout', name: 'Sign out', icon: '🚪' },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item.name);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white dark:bg-slate-800 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {selectedItem || 'Options'}
          <svg className="-mr-1 ml-2 h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={\`\${
                  item.id === 'logout'
                    ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                } group flex items-center px-4 py-2 text-sm w-full text-left\`}
                role="menuitem"
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Menu;`:k.name==="Button Menu"?`import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const menuItems = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'billing', name: 'Billing', icon: '💳' },
    { id: 'team', name: 'Team', icon: '👥' },
    { id: 'logout', name: 'Sign out', icon: '🚪' },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item.name);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span className="mr-2">👤</span>
          User Menu
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {menuItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 group flex items-center px-4 py-2 text-sm w-full text-left"
                role="menuitem"
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </button>
            ))}
            <div className="border-t border-gray-100 dark:border-slate-700 my-1"></div>
            <button
              onClick={() => handleItemClick(menuItems[4])}
              className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 group flex items-center px-4 py-2 text-sm w-full text-left"
              role="menuitem"
            >
              <span className="mr-3 text-lg">🚪</span>
              Sign out
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Menu;`:`import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const menuItems = [
    { id: 'profile', name: 'Profile' },
    { id: 'settings', name: 'Settings' },
    { id: 'billing', name: 'Billing' },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item.name);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 group flex items-center px-3 py-2 text-sm w-full text-left"
                role="menuitem"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Menu;`},j=async()=>{try{await navigator.clipboard.writeText(b()),c(!0),setTimeout(()=>c(!1),2e3)}catch(k){console.error("Failed to copy: ",k)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:x.map((k,y)=>a.jsx("button",{onClick:()=>n(y),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${l===y?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:k.name},y))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:x[l].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>o(!i),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:i?"Hide Code":"Show Code"}),a.jsx("button",{onClick:j,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${d?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:d?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:i?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:b()})})}):a.jsx("div",{className:"p-4",children:x[l].component})}),r&&a.jsx("div",{className:"mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:a.jsxs("p",{className:"text-sm text-blue-800 dark:text-blue-200",children:["You selected: ",a.jsx("span",{className:"font-medium",children:r})]})})]})},jm=({componentId:e,navigationData:t})=>{const r=()=>{switch(e){case"navbar":return a.jsx(n2,{});case"breadcrumb":return a.jsx(i2,{});case"pagination":return a.jsx(o2,{});case"tabs":return a.jsx(d2,{});case"menu":return a.jsx(c2,{});default:return a.jsx("div",{children:"Navigation component not found"})}};return a.jsx("div",{className:"w-full",children:r()})},Ur=({navigationType:e})=>{const t=r=>{switch(r){case"beginner":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";case"intermediate":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";case"advanced":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}};return a.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:a.jsx("div",{className:"space-y-8",children:e?(()=>{const r=wm.find(s=>s.id===e);return r?a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:a.jsxs("div",{className:"mb-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:r.name}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:r.description})]}),a.jsx("div",{className:"flex items-center space-x-2",children:a.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full ${t(r.complexity)}`,children:r.complexity})})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Features"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:r.features.map((s,l)=>a.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600 dark:text-blue-200",children:[a.jsx("svg",{className:"w-4 h-4 text-green-500 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:s})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Live Demo"}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:a.jsx("div",{className:"p-4",children:a.jsx(jm,{componentId:r.id,navigationData:{}})})})]})]})}):a.jsx("div",{children:"Navigation component not found"})})():wm.map(r=>a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:a.jsxs("div",{className:"mb-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:r.name}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:r.description})]}),a.jsx("div",{className:"flex items-center space-x-2",children:a.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full ${t(r.complexity)}`,children:r.complexity})})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Features"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:r.features.map((s,l)=>a.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600 dark:text-blue-200",children:[a.jsx("svg",{className:"w-4 h-4 text-green-500 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:s})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Live Demo"}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:a.jsx("div",{className:"p-4",children:a.jsx(jm,{componentId:r.id,navigationData:{}})})})]})]})},r.id))})})})},u2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),i=[{name:"Default Header",component:a.jsx("header",{className:"bg-white dark:bg-slate-800 shadow-lg",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between items-center h-16",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center",children:a.jsx("span",{className:"text-white font-bold text-sm",children:"TK"})}),a.jsx("span",{className:"ml-2 text-xl font-bold text-gray-900 dark:text-white",children:"TailwindKit"})]}),a.jsxs("nav",{className:"hidden md:flex space-x-8",children:[a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Home"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"About"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Services"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Contact"})]}),a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx("button",{className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Sign In"}),a.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors",children:"Get Started"})]})]})})})},{name:"Centered Header",component:a.jsx("header",{className:"bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"flex justify-center items-center h-20",children:a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2",children:a.jsx("span",{className:"text-purple-600 font-bold text-xl",children:"TK"})}),a.jsx("h1",{className:"text-2xl font-bold text-white",children:"TailwindKit"}),a.jsx("p",{className:"text-purple-100 text-sm",children:"Beautiful UI Components"})]})})})})},{name:"Minimal Header",component:a.jsx("header",{className:"bg-transparent border-b border-gray-200 dark:border-slate-700",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between items-center h-16",children:[a.jsx("div",{className:"flex items-center",children:a.jsx("span",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Logo"})}),a.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"Work"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"About"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"Blog"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors",children:"Contact"})]}),a.jsx("div",{className:"md:hidden",children:a.jsx("button",{className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",children:a.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]})})})}],o=()=>{const c=i[e];return c.name==="Default Header"?`import React from 'react';

const Header = () => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TK</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              TailwindKit
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Services
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;`:c.name==="Centered Header"?`import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="text-center">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-purple-600 font-bold text-xl">TK</span>
            </div>
            <h1 className="text-2xl font-bold text-white">TailwindKit</h1>
            <p className="text-purple-100 text-sm">Beautiful UI Components</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;`:`import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Logo
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
              Work
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;`},d=async()=>{try{await navigator.clipboard.writeText(o()),n(!0),setTimeout(()=>n(!1),2e3)}catch(c){console.error("Failed to copy: ",c)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:i.map((c,u)=>a.jsx("button",{onClick:()=>t(u),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===u?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:c.name},u))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:i[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:d,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:o()})})}):i[e].component})]})},m2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),i=[{name:"Default Footer",component:a.jsx("footer",{className:"bg-gray-900 dark:bg-slate-900",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[a.jsxs("div",{className:"col-span-1 md:col-span-2",children:[a.jsxs("div",{className:"flex items-center mb-4",children:[a.jsx("div",{className:"h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center",children:a.jsx("span",{className:"text-white font-bold text-sm",children:"TK"})}),a.jsx("span",{className:"ml-2 text-xl font-bold text-white",children:"TailwindKit"})]}),a.jsx("p",{className:"text-gray-400 text-sm max-w-md",children:"Beautiful UI components built with React and Tailwind CSS. Copy, paste, and customize to your heart's content."}),a.jsxs("div",{className:"flex space-x-4 mt-6",children:[a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors",children:a.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors",children:a.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"})})}),a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors",children:a.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-white font-semibold mb-4",children:"Product"}),a.jsxs("ul",{className:"space-y-2",children:[a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Features"})}),a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Pricing"})}),a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Documentation"})}),a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Changelog"})})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-white font-semibold mb-4",children:"Company"}),a.jsxs("ul",{className:"space-y-2",children:[a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"About"})}),a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Blog"})}),a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Careers"})}),a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Contact"})})]})]})]}),a.jsxs("div",{className:"border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center",children:[a.jsx("p",{className:"text-gray-400 text-sm",children:"© 2024 TailwindKit. All rights reserved."}),a.jsxs("div",{className:"flex space-x-6 mt-4 md:mt-0",children:[a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Privacy Policy"}),a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Terms of Service"}),a.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Cookie Policy"})]})]})]})})},{name:"Simple Footer",component:a.jsx("footer",{className:"bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:a.jsxs("div",{className:"text-center",children:[a.jsxs("div",{className:"flex items-center justify-center mb-4",children:[a.jsx("div",{className:"h-6 w-6 bg-blue-600 rounded flex items-center justify-center",children:a.jsx("span",{className:"text-white font-bold text-xs",children:"TK"})}),a.jsx("span",{className:"ml-2 text-lg font-semibold text-gray-900 dark:text-white",children:"TailwindKit"})]}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-4",children:"Beautiful UI components for modern web applications"}),a.jsx("p",{className:"text-gray-500 dark:text-gray-500 text-xs",children:"© 2024 TailwindKit. All rights reserved."})]})})})},{name:"Minimal Footer",component:a.jsx("footer",{className:"bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:a.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[a.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"© 2024 Your Company. All rights reserved."}),a.jsxs("div",{className:"flex space-x-6 mt-4 md:mt-0",children:[a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors",children:"Privacy"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors",children:"Terms"}),a.jsx("a",{href:"#",className:"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors",children:"Contact"})]})]})})})}],o=()=>{const c=i[e];return c.name==="Default Footer"?`import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TK</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">
                TailwindKit
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Beautiful UI components built with React and Tailwind CSS. 
              Copy, paste, and customize to your heart's content.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social links */}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TailwindKit. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`:c.name==="Simple Footer"?`import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-6 w-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">TK</span>
            </div>
            <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
              TailwindKit
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Beautiful UI components for modern web applications
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            © 2024 TailwindKit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`:`import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 Your Company. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`},d=async()=>{try{await navigator.clipboard.writeText(o()),n(!0),setTimeout(()=>n(!1),2e3)}catch(c){console.error("Failed to copy: ",c)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:i.map((c,u)=>a.jsx("button",{onClick:()=>t(u),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===u?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:c.name},u))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:i[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:d,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:o()})})}):i[e].component})]})},x2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),i=[{name:"Default Grid",component:a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-900",children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Card 1"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"This is a sample card with some content."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Card 2"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Another card with different content."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Card 3"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Third card in the grid layout."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Card 4"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Fourth card with more content."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Card 5"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Fifth card in the grid."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Card 6"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Last card in the grid layout."})]})]})})},{name:"Masonry Grid",component:a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-900",children:a.jsxs("div",{className:"columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Short Card"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"This is a short card."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Medium Card"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"This is a medium length card with more content to demonstrate the masonry layout effect."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Long Card"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"This is a longer card with much more content to show how the masonry layout distributes items of different heights across columns. It demonstrates the Pinterest-style layout where items are placed in the shortest available column."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Another Short"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Short content."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Very Long Card"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"This is a very long card with extensive content to really demonstrate the masonry layout. It shows how different sized content blocks can be arranged in a visually appealing way without leaving large gaps. The masonry layout is perfect for displaying content of varying heights in an organized manner."})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Final Card"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Last card in the masonry grid."})]})]})})},{name:"Responsive Grid",component:a.jsxs("div",{className:"p-6 bg-gray-50 dark:bg-slate-900",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4",children:[a.jsxs("div",{className:"bg-blue-500 text-white p-4 rounded-lg text-center",children:[a.jsx("div",{className:"text-2xl font-bold",children:"1"}),a.jsx("div",{className:"text-sm",children:"Mobile"})]}),a.jsxs("div",{className:"bg-green-500 text-white p-4 rounded-lg text-center",children:[a.jsx("div",{className:"text-2xl font-bold",children:"2"}),a.jsx("div",{className:"text-sm",children:"Small"})]}),a.jsxs("div",{className:"bg-purple-500 text-white p-4 rounded-lg text-center",children:[a.jsx("div",{className:"text-2xl font-bold",children:"3"}),a.jsx("div",{className:"text-sm",children:"Medium"})]}),a.jsxs("div",{className:"bg-red-500 text-white p-4 rounded-lg text-center",children:[a.jsx("div",{className:"text-2xl font-bold",children:"4"}),a.jsx("div",{className:"text-sm",children:"Large"})]}),a.jsxs("div",{className:"bg-yellow-500 text-white p-4 rounded-lg text-center",children:[a.jsx("div",{className:"text-2xl font-bold",children:"5"}),a.jsx("div",{className:"text-sm",children:"XL"})]}),a.jsxs("div",{className:"bg-pink-500 text-white p-4 rounded-lg text-center",children:[a.jsx("div",{className:"text-2xl font-bold",children:"6"}),a.jsx("div",{className:"text-sm",children:"2XL"})]})]}),a.jsx("div",{className:"mt-6 text-center",children:a.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Resize the window to see the responsive behavior"})})]})}],o=()=>{const c=i[e];return c.name==="Default Grid"?`import React from 'react';

const Grid = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card 1</h3>
          <p className="text-gray-600 dark:text-gray-400">This is a sample card with some content.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card 2</h3>
          <p className="text-gray-600 dark:text-gray-400">Another card with different content.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card 3</h3>
          <p className="text-gray-600 dark:text-gray-400">Third card in the grid layout.</p>
        </div>
        {/* More cards */}
      </div>
    </div>
  );
};

export default Grid;`:c.name==="Masonry Grid"?`import React from 'react';

const Grid = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Short Card</h3>
          <p className="text-gray-600 dark:text-gray-400">This is a short card.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md break-inside-avoid">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Medium Card</h3>
          <p className="text-gray-600 dark:text-gray-400">This is a medium length card with more content.</p>
        </div>
        {/* More cards with varying heights */}
      </div>
    </div>
  );
};

export default Grid;`:`import React from 'react';

const Grid = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">1</div>
          <div className="text-sm">Mobile</div>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">2</div>
          <div className="text-sm">Small</div>
        </div>
        {/* More responsive items */}
      </div>
    </div>
  );
};

export default Grid;`},d=async()=>{try{await navigator.clipboard.writeText(o()),n(!0),setTimeout(()=>n(!1),2e3)}catch(c){console.error("Failed to copy: ",c)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:i.map((c,u)=>a.jsx("button",{onClick:()=>t(u),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===u?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:c.name},u))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:i[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:d,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:o()})})}):i[e].component})]})},p2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),i=[{name:"Default Container",component:a.jsx("div",{className:"bg-gray-50 dark:bg-slate-900 min-h-screen",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:"Welcome to TailwindKit"}),a.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 mb-8",children:"Beautiful UI components built with React and Tailwind CSS"}),a.jsxs("div",{className:"flex justify-center space-x-4",children:[a.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors",children:"Get Started"}),a.jsx("button",{className:"border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors",children:"Learn More"})]})]})})})},{name:"Narrow Container",component:a.jsx("div",{className:"bg-gray-50 dark:bg-slate-900 min-h-screen",children:a.jsx("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8",children:[a.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-6",children:"Article Title"}),a.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none",children:[a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"This is a narrow container perfect for articles, blog posts, or focused content. It provides a comfortable reading width and maintains good typography."}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"The container is responsive and will adapt to different screen sizes while maintaining the optimal reading experience."}),a.jsx("blockquote",{className:"border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300",children:'"A narrow container helps improve readability and focus on content."'})]})]})})})},{name:"Wide Container",component:a.jsx("div",{className:"bg-gray-50 dark:bg-slate-900 min-h-screen",children:a.jsx("div",{className:"max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[a.jsxs("div",{className:"lg:col-span-2",children:[a.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-6",children:"Dashboard Overview"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Total Users"}),a.jsx("p",{className:"text-3xl font-bold text-blue-600 dark:text-blue-400",children:"12,345"})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"Revenue"}),a.jsx("p",{className:"text-3xl font-bold text-green-600 dark:text-green-400",children:"$45,678"})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Recent Activity"}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),a.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"New user registered"})]}),a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),a.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Payment received"})]}),a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),a.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"System update completed"})]})]})]})]}),a.jsx("div",{className:"lg:col-span-1",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Quick Actions"}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("button",{className:"w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Add New User"}),a.jsx("button",{className:"w-full border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors",children:"Generate Report"}),a.jsx("button",{className:"w-full border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors",children:"Settings"})]})]})})]})})})}],o=()=>{const c=i[e];return c.name==="Default Container"?`import React from 'react';

const Container = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to TailwindKit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Beautiful UI components built with React and Tailwind CSS
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;`:c.name==="Narrow Container"?`import React from 'react';

const Container = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Article Title
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This is a narrow container perfect for articles, blog posts, or focused content.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300">
              "A narrow container helps improve readability and focus on content."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;`:`import React from 'react';

const Container = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Dashboard Overview
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">12,345</p>
              </div>
              {/* More dashboard items */}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              {/* Action buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;`},d=async()=>{try{await navigator.clipboard.writeText(o()),n(!0),setTimeout(()=>n(!1),2e3)}catch(c){console.error("Failed to copy: ",c)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:i.map((c,u)=>a.jsx("button",{onClick:()=>t(u),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===u?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:c.name},u))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:i[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:d,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:o()})})}):i[e].component})]})},g2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),i=[{name:"Default Card",component:a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-900",children:a.jsxs("div",{className:"max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden",children:[a.jsx("div",{className:"h-48 bg-gradient-to-br from-blue-500 to-purple-600"}),a.jsxs("div",{className:"p-6",children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Beautiful Card"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"This is a sample card with a gradient background and some content. Perfect for showcasing products or features."}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("span",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"$99"}),a.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Buy Now"})]})]})]})})},{name:"Profile Card",component:a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-900",children:a.jsxs("div",{className:"max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden",children:[a.jsx("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 h-24"}),a.jsxs("div",{className:"px-6 pb-6",children:[a.jsx("div",{className:"flex justify-center -mt-8",children:a.jsx("div",{className:"h-16 w-16 bg-white dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center",children:a.jsx("div",{className:"h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center",children:a.jsx("span",{className:"text-white font-bold text-lg",children:"JD"})})})}),a.jsxs("div",{className:"text-center mt-4",children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"John Doe"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Software Developer"}),a.jsx("p",{className:"text-gray-500 dark:text-gray-500 text-xs mt-2",children:"San Francisco, CA"})]}),a.jsxs("div",{className:"flex justify-center space-x-4 mt-6",children:[a.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors",children:"Follow"}),a.jsx("button",{className:"border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors",children:"Message"})]})]})]})})},{name:"Stats Card",component:a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-900",children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",children:[a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-md p-6",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"p-3 bg-blue-100 dark:bg-blue-900 rounded-lg",children:a.jsx("svg",{className:"h-6 w-6 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"})})}),a.jsxs("div",{className:"ml-4",children:[a.jsx("p",{className:"text-sm font-medium text-gray-600 dark:text-gray-400",children:"Total Users"}),a.jsx("p",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:"12,345"})]})]})}),a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-md p-6",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"p-3 bg-green-100 dark:bg-green-900 rounded-lg",children:a.jsx("svg",{className:"h-6 w-6 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})}),a.jsxs("div",{className:"ml-4",children:[a.jsx("p",{className:"text-sm font-medium text-gray-600 dark:text-gray-400",children:"Revenue"}),a.jsx("p",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:"$45,678"})]})]})}),a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-md p-6",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("div",{className:"p-3 bg-purple-100 dark:bg-purple-900 rounded-lg",children:a.jsx("svg",{className:"h-6 w-6 text-purple-600 dark:text-purple-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})}),a.jsxs("div",{className:"ml-4",children:[a.jsx("p",{className:"text-sm font-medium text-gray-600 dark:text-gray-400",children:"Orders"}),a.jsx("p",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:"1,234"})]})]})})]})})}],o=()=>{const c=i[e];return c.name==="Default Card"?`import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Beautiful Card
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a sample card with a gradient background and some content. 
          Perfect for showcasing products or features.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">$99</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;`:c.name==="Profile Card"?`import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-24"></div>
      <div className="px-6 pb-6">
        <div className="flex justify-center -mt-8">
          <div className="h-16 w-16 bg-white dark:bg-slate-800 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center">
            <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">JD</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            John Doe
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Software Developer
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            San Francisco, CA
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
            Follow
          </button>
          <button className="border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;`:`import React from 'react';

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">12,345</p>
          </div>
        </div>
      </div>
      {/* More stat cards */}
    </div>
  );
};

export default Card;`},d=async()=>{try{await navigator.clipboard.writeText(o()),n(!0),setTimeout(()=>n(!1),2e3)}catch(c){console.error("Failed to copy: ",c)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:i.map((c,u)=>a.jsx("button",{onClick:()=>t(u),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===u?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:c.name},u))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:i[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:d,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:o()})})}):i[e].component})]})},bf=({layoutType:e})=>{const t=r=>{switch(r){case"header":return a.jsx(u2,{});case"footer":return a.jsx(m2,{});case"sidebar":return a.jsx(hf,{});case"grid":return a.jsx(x2,{});case"container":return a.jsx(p2,{});case"card":return a.jsx(g2,{});default:return a.jsx("div",{children:"Layout component not found"})}};return a.jsx("div",{className:"space-y-6",children:t(e)})},f2=({layoutType:e})=>e?a.jsx(bf,{layoutType:e}):a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:"Layout Components"}),a.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400",children:"Beautiful layout components for structuring your application"})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow",children:[a.jsx("div",{className:"text-4xl mb-4",children:"📋"}),a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Header"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Navigation headers and top bars for your application"}),a.jsxs("div",{className:"space-y-2 text-sm text-gray-500 dark:text-gray-500",children:[a.jsx("div",{children:"• Default Header"}),a.jsx("div",{children:"• Centered Header"}),a.jsx("div",{children:"• Minimal Header"})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow",children:[a.jsx("div",{className:"text-4xl mb-4",children:"🦶"}),a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Footer"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Page footers and bottom sections with links and information"}),a.jsxs("div",{className:"space-y-2 text-sm text-gray-500 dark:text-gray-500",children:[a.jsx("div",{children:"• Default Footer"}),a.jsx("div",{children:"• Simple Footer"}),a.jsx("div",{children:"• Minimal Footer"})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow",children:[a.jsx("div",{className:"text-4xl mb-4",children:"📱"}),a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Sidebar"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Navigation sidebars and panels for organizing content"}),a.jsxs("div",{className:"space-y-2 text-sm text-gray-500 dark:text-gray-500",children:[a.jsx("div",{children:"• Default Sidebar"}),a.jsx("div",{children:"• Collapsible Sidebar"}),a.jsx("div",{children:"• Minimal Sidebar"})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow",children:[a.jsx("div",{className:"text-4xl mb-4",children:"🔲"}),a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Grid"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Grid layouts and responsive containers for organizing content"}),a.jsxs("div",{className:"space-y-2 text-sm text-gray-500 dark:text-gray-500",children:[a.jsx("div",{children:"• Default Grid"}),a.jsx("div",{children:"• Masonry Grid"}),a.jsx("div",{children:"• Responsive Grid"})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow",children:[a.jsx("div",{className:"text-4xl mb-4",children:"📦"}),a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Container"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Content containers and wrappers for different layouts"}),a.jsxs("div",{className:"space-y-2 text-sm text-gray-500 dark:text-gray-500",children:[a.jsx("div",{children:"• Default Container"}),a.jsx("div",{children:"• Narrow Container"}),a.jsx("div",{children:"• Wide Container"})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow",children:[a.jsx("div",{className:"text-4xl mb-4",children:"🃏"}),a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-2",children:"Card"}),a.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Card components and content blocks for displaying information"}),a.jsxs("div",{className:"space-y-2 text-sm text-gray-500 dark:text-gray-500",children:[a.jsx("div",{children:"• Default Card"}),a.jsx("div",{children:"• Profile Card"}),a.jsx("div",{children:"• Stats Card"})]})]})]})]}),h2=[{id:"header",name:"Header",description:"Navigation headers and top bars",category:"layout",href:"/layout/header",icon:"📋",complexity:"beginner",features:["Responsive design","Dark mode support","Mobile-friendly","Customizable styling","Accessibility features"],examples:[{name:"Default Header",description:"Standard navigation header with logo and menu"},{name:"Centered Header",description:"Centered header with prominent branding"},{name:"Minimal Header",description:"Clean, minimal header design"}]},{id:"footer",name:"Footer",description:"Page footers and bottom sections",category:"layout",href:"/layout/footer",icon:"🦶",complexity:"beginner",features:["Responsive design","Social media links","Contact information","Copyright notices","Multiple column layouts"],examples:[{name:"Default Footer",description:"Comprehensive footer with links and social media"},{name:"Simple Footer",description:"Clean, simple footer design"},{name:"Minimal Footer",description:"Minimal footer with essential links"}]},{id:"sidebar",name:"Sidebar",description:"Navigation sidebars and panels",category:"layout",href:"/layout/sidebar",icon:"📱",complexity:"intermediate",features:["Collapsible design","Responsive behavior","Navigation menus","User profile sections","Customizable width"],examples:[{name:"Default Sidebar",description:"Standard sidebar with navigation menu"},{name:"Collapsible Sidebar",description:"Sidebar that expands on hover"},{name:"Minimal Sidebar",description:"Clean, minimal sidebar design"}]},{id:"grid",name:"Grid",description:"Grid layouts and responsive containers",category:"layout",href:"/layout/grid",icon:"🔲",complexity:"intermediate",features:["Responsive breakpoints","Flexible column system","Auto-sizing columns","Gap controls","Nested grids"],examples:[{name:"Default Grid",description:"Standard responsive grid layout"},{name:"Masonry Grid",description:"Pinterest-style masonry layout"},{name:"Responsive Grid",description:"Fully responsive grid system"}]},{id:"container",name:"Container",description:"Content containers and wrappers",category:"layout",href:"/layout/container",icon:"📦",complexity:"beginner",features:["Responsive width","Centered content","Padding controls","Max-width constraints","Flexible sizing"],examples:[{name:"Default Container",description:"Standard content container"},{name:"Narrow Container",description:"Narrow container for articles and text"},{name:"Wide Container",description:"Wide container for dashboards"}]},{id:"card",name:"Card",description:"Card components and content blocks",category:"layout",href:"/layout/card",icon:"🃏",complexity:"beginner",features:["Flexible content areas","Image support","Action buttons","Hover effects","Multiple variants"],examples:[{name:"Default Card",description:"Standard card with image and content"},{name:"Profile Card",description:"User profile card design"},{name:"Stats Card",description:"Statistics and metrics cards"}]}],nr=({layoutType:e})=>{const t=r=>{switch(r){case"beginner":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";case"intermediate":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";case"advanced":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}};if(e){const r=h2.find(s=>s.id===e);return r?a.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:a.jsxs("div",{className:"mb-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:r.name}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:r.description})]}),a.jsx("div",{className:"flex items-center space-x-2",children:a.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full ${t(r.complexity)}`,children:r.complexity})})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Features"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:r.features.map((s,l)=>a.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600 dark:text-blue-200",children:[a.jsx("svg",{className:"w-4 h-4 text-green-500 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:s})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Live Demo"}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:a.jsx("div",{className:"p-4",children:a.jsx(bf,{layoutType:e})})})]})]})})})}):a.jsx("div",{children:"Layout component not found"})}return a.jsx(f2,{layoutType:e})},b2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),i=[{name:"Default Alert",component:a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-5 w-5 text-blue-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}),a.jsxs("div",{className:"ml-3",children:[a.jsx("h3",{className:"text-sm font-medium text-blue-800 dark:text-blue-200",children:"Information"}),a.jsx("div",{className:"mt-2 text-sm text-blue-700 dark:text-blue-300",children:a.jsx("p",{children:"This is an informational alert message. It provides useful information to the user."})})]})]})}),a.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-5 w-5 text-green-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),a.jsxs("div",{className:"ml-3",children:[a.jsx("h3",{className:"text-sm font-medium text-green-800 dark:text-green-200",children:"Success"}),a.jsx("div",{className:"mt-2 text-sm text-green-700 dark:text-green-300",children:a.jsx("p",{children:"Your action was completed successfully!"})})]})]})}),a.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),a.jsxs("div",{className:"ml-3",children:[a.jsx("h3",{className:"text-sm font-medium text-yellow-800 dark:text-yellow-200",children:"Warning"}),a.jsx("div",{className:"mt-2 text-sm text-yellow-700 dark:text-yellow-300",children:a.jsx("p",{children:"Please review your input before proceeding."})})]})]})}),a.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-5 w-5 text-red-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),a.jsxs("div",{className:"ml-3",children:[a.jsx("h3",{className:"text-sm font-medium text-red-800 dark:text-red-200",children:"Error"}),a.jsx("div",{className:"mt-2 text-sm text-red-700 dark:text-red-300",children:a.jsx("p",{children:"Something went wrong. Please try again."})})]})]})})]})},{name:"Dismissible Alert",component:a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-5 w-5 text-blue-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}),a.jsxs("div",{className:"ml-3 flex-1",children:[a.jsx("h3",{className:"text-sm font-medium text-blue-800 dark:text-blue-200",children:"Dismissible Alert"}),a.jsx("div",{className:"mt-2 text-sm text-blue-700 dark:text-blue-300",children:a.jsx("p",{children:"This alert can be dismissed by clicking the close button."})})]}),a.jsx("div",{className:"ml-auto pl-3",children:a.jsx("div",{className:"-mx-1.5 -my-1.5",children:a.jsxs("button",{className:"inline-flex bg-blue-50 dark:bg-blue-900/20 rounded-md p-1.5 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 dark:focus:ring-offset-blue-900/20 focus:ring-blue-600",children:[a.jsx("span",{className:"sr-only",children:"Dismiss"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})})]})}),a.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-5 w-5 text-green-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),a.jsxs("div",{className:"ml-3 flex-1",children:[a.jsx("h3",{className:"text-sm font-medium text-green-800 dark:text-green-200",children:"Success with Action"}),a.jsx("div",{className:"mt-2 text-sm text-green-700 dark:text-green-300",children:a.jsx("p",{children:"Your changes have been saved successfully."})}),a.jsx("div",{className:"mt-4",children:a.jsx("div",{className:"-mx-2 -my-1.5 flex",children:a.jsx("button",{className:"bg-green-50 dark:bg-green-900/20 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 dark:focus:ring-offset-green-900/20 focus:ring-green-600",children:"Undo"})})})]}),a.jsx("div",{className:"ml-auto pl-3",children:a.jsx("div",{className:"-mx-1.5 -my-1.5",children:a.jsxs("button",{className:"inline-flex bg-green-50 dark:bg-green-900/20 rounded-md p-1.5 text-green-500 hover:bg-green-100 dark:hover:bg-green-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 dark:focus:ring-offset-green-900/20 focus:ring-green-600",children:[a.jsx("span",{className:"sr-only",children:"Dismiss"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})})]})})]})},{name:"Banner Alert",component:a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-5 w-5 text-indigo-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}),a.jsx("div",{className:"ml-3",children:a.jsxs("p",{className:"text-sm text-indigo-700 dark:text-indigo-300",children:[a.jsx("strong",{className:"font-medium",children:"New feature available!"})," ","Check out our latest updates and improvements."]})})]})}),a.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-5 w-5 text-amber-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),a.jsx("div",{className:"ml-3",children:a.jsxs("p",{className:"text-sm text-amber-700 dark:text-amber-300",children:[a.jsx("strong",{className:"font-medium",children:"Maintenance scheduled"})," ","for tonight at 11 PM EST. Expected downtime: 2 hours."]})})]})}),a.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4",children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-5 w-5 text-red-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),a.jsx("div",{className:"ml-3",children:a.jsxs("p",{className:"text-sm text-red-700 dark:text-red-300",children:[a.jsx("strong",{className:"font-medium",children:"Service unavailable"})," ","We're experiencing technical difficulties. Please try again later."]})})]})})]})}],o=()=>{const c=i[e];return c.name==="Default Alert"?`import React from 'react';

const Alert = () => {
  return (
    <div className="space-y-4">
      {/* Information Alert */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Information
            </h3>
            <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
              <p>This is an informational alert message.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Alert */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
              Success
            </h3>
            <div className="mt-2 text-sm text-green-700 dark:text-green-300">
              <p>Your action was completed successfully!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;`:c.name==="Dismissible Alert"?`import React, { useState } from 'react';

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
            Dismissible Alert
          </h3>
          <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            <p>This alert can be dismissed by clicking the close button.</p>
          </div>
        </div>
        <div className="ml-auto pl-3">
          <button 
            onClick={() => setIsVisible(false)}
            className="inline-flex bg-blue-50 dark:bg-blue-900/20 rounded-md p-1.5 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 dark:focus:ring-offset-blue-900/20 focus:ring-blue-600"
          >
            <span className="sr-only">Dismiss</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;`:`import React from 'react';

const Alert = () => {
  return (
    <div className="space-y-4">
      {/* Banner Alert */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              <strong className="font-medium">New feature available!</strong> Check out our latest updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;`},d=async()=>{try{await navigator.clipboard.writeText(o()),n(!0),setTimeout(()=>n(!1),2e3)}catch(c){console.error("Failed to copy: ",c)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:i.map((c,u)=>a.jsx("button",{onClick:()=>t(u),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===u?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:c.name},u))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:i[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:d,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:o()})})}):i[e].component})]})},v2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),[i,o]=p.useState(!1),[d,c]=p.useState(!1),[u,m]=p.useState(!1),[x,b]=p.useState(!1),j=[{name:"Interactive Toast",component:a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"flex flex-wrap gap-3",children:[a.jsx("button",{onClick:()=>{o(!0),setTimeout(()=>o(!1),3e3)},className:"px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors",children:"Show Success Toast"}),a.jsx("button",{onClick:()=>{c(!0),setTimeout(()=>c(!1),3e3)},className:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors",children:"Show Error Toast"}),a.jsx("button",{onClick:()=>{m(!0),setTimeout(()=>m(!1),3e3)},className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",children:"Show Info Toast"}),a.jsx("button",{onClick:()=>{b(!0),setTimeout(()=>b(!1),3e3)},className:"px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors",children:"Show Warning Toast"})]}),i&&a.jsx("div",{className:"fixed top-4 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden animate-in slide-in-from-right",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-6 w-6 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Success!"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Your changes have been saved."})]}),a.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:a.jsxs("button",{onClick:()=>o(!1),className:"bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})}),d&&a.jsx("div",{className:"fixed top-4 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden animate-in slide-in-from-right",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-6 w-6 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Error"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Something went wrong. Please try again."})]}),a.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:a.jsxs("button",{onClick:()=>c(!1),className:"bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})}),u&&a.jsx("div",{className:"fixed top-4 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden animate-in slide-in-from-right",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-6 w-6 text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Information"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Here's some useful information for you."})]}),a.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:a.jsxs("button",{onClick:()=>m(!1),className:"bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})}),x&&a.jsx("div",{className:"fixed top-4 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden animate-in slide-in-from-right",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-6 w-6 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),a.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Warning"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Please check your input before proceeding."})]}),a.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:a.jsxs("button",{onClick:()=>b(!1),className:"bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})})]})},{name:"Toast with Action",component:a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"fixed top-4 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-6 w-6 text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"New message"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"You have 3 new messages from your team."}),a.jsxs("div",{className:"mt-3 flex space-x-2",children:[a.jsx("button",{className:"bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"View"}),a.jsx("button",{className:"bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:"Dismiss"})]})]}),a.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:a.jsxs("button",{className:"bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})}),a.jsx("div",{className:"fixed top-32 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-6 w-6 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),a.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Warning"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Your session will expire in 5 minutes."}),a.jsxs("div",{className:"mt-3 flex space-x-2",children:[a.jsx("button",{className:"bg-yellow-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Extend"}),a.jsx("button",{className:"bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:"Logout"})]})]}),a.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:a.jsxs("button",{className:"bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})})]})},{name:"Toast Stack",component:a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"fixed top-4 right-4 max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-6 w-6 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"File uploaded"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"document.pdf has been uploaded successfully."})]}),a.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:a.jsxs("button",{className:"bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})}),a.jsx("div",{className:"fixed top-20 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-6 w-6 text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Processing"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Your request is being processed..."})]}),a.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:a.jsxs("button",{className:"bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})}),a.jsx("div",{className:"fixed top-36 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("svg",{className:"h-6 w-6 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Failed"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Unable to save changes. Please try again."})]}),a.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:a.jsxs("button",{className:"bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[a.jsx("span",{className:"sr-only",children:"Close"}),a.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})})]})}],k=()=>{const g=j[e];return g.name==="Default Toast"?`import React from 'react';

const Toast = () => {
  return (
    <div className="fixed top-4 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Success!
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Your changes have been saved.
            </p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button className="bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;`:g.name==="Toast with Action"?`import React from 'react';

const Toast = () => {
  return (
    <div className="fixed top-4 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              New message
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              You have 3 new messages from your team.
            </p>
            <div className="mt-3 flex space-x-2">
              <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                View
              </button>
              <button className="bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Dismiss
              </button>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button className="bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;`:`import React from 'react';

const Toast = () => {
  return (
    <div className="space-y-4">
      {/* Toast 1 */}
      <div className="fixed top-4 right-4 max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                File uploaded
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                document.pdf has been uploaded successfully.
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button className="bg-white dark:bg-slate-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Close</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast 2 */}
      <div className="fixed top-20 right-4 z-[60] max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all">
        {/* Similar structure */}
      </div>
    </div>
  );
};

export default Toast;`},y=async()=>{try{await navigator.clipboard.writeText(k()),n(!0),setTimeout(()=>n(!1),2e3)}catch(g){console.error("Failed to copy: ",g)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:j.map((g,h)=>a.jsx("button",{onClick:()=>t(h),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===h?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:g.name},h))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:j[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:y,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:k()})})}):j[e].component})]})},y2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),[i,o]=p.useState(!1),d=[{name:"Default Modal",component:a.jsxs("div",{className:"space-y-4",children:[a.jsx("button",{onClick:()=>o(!0),className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Open Modal"}),i&&a.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:a.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[a.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>o(!1)}),a.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen",children:"​"}),a.jsxs("div",{className:"inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:a.jsxs("div",{className:"sm:flex sm:items-start",children:[a.jsx("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 sm:mx-0 sm:h-10 sm:w-10",children:a.jsx("svg",{className:"h-6 w-6 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),a.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[a.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900 dark:text-white",children:"Deactivate account"}),a.jsx("div",{className:"mt-2",children:a.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."})})]})]})}),a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[a.jsx("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>o(!1),children:"Deactivate"}),a.jsx("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-slate-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>o(!1),children:"Cancel"})]})]})]})})]})},{name:"Form Modal",component:a.jsxs("div",{className:"space-y-4",children:[a.jsx("button",{onClick:()=>o(!0),className:"bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Add New Item"}),i&&a.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:a.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[a.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>o(!1)}),a.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen",children:"​"}),a.jsx("div",{className:"inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:a.jsxs("form",{children:[a.jsx("div",{className:"bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6",children:a.jsx("div",{className:"sm:flex sm:items-start",children:a.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:text-left w-full",children:[a.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4",children:"Add New Item"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Name"}),a.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white",placeholder:"Enter item name"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Description"}),a.jsx("textarea",{rows:3,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white",placeholder:"Enter description"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Category"}),a.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white",children:[a.jsx("option",{children:"Select category"}),a.jsx("option",{children:"Electronics"}),a.jsx("option",{children:"Clothing"}),a.jsx("option",{children:"Books"}),a.jsx("option",{children:"Other"})]})]})]})]})})}),a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[a.jsx("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>o(!1),children:"Save"}),a.jsx("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-slate-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>o(!1),children:"Cancel"})]})]})})]})})]})},{name:"Large Modal",component:a.jsxs("div",{className:"space-y-4",children:[a.jsx("button",{onClick:()=>o(!0),className:"bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Open Large Modal"}),i&&a.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:a.jsxs("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[a.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:()=>o(!1)}),a.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen",children:"​"}),a.jsxs("div",{className:"inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6",children:a.jsx("div",{className:"sm:flex sm:items-start",children:a.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:text-left w-full",children:[a.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4",children:"Project Details"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Project Name"}),a.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white",placeholder:"Enter project name"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Description"}),a.jsx("textarea",{rows:4,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white",placeholder:"Enter project description"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Start Date"}),a.jsx("input",{type:"date",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Team Members"}),a.jsxs("select",{multiple:!0,className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white",children:[a.jsx("option",{children:"John Doe"}),a.jsx("option",{children:"Jane Smith"}),a.jsx("option",{children:"Mike Johnson"}),a.jsx("option",{children:"Sarah Wilson"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Priority"}),a.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white",children:[a.jsx("option",{children:"Low"}),a.jsx("option",{children:"Medium"}),a.jsx("option",{children:"High"}),a.jsx("option",{children:"Critical"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Budget"}),a.jsx("input",{type:"number",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white",placeholder:"Enter budget"})]})]})]})]})})}),a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[a.jsx("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>o(!1),children:"Create Project"}),a.jsx("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-slate-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:()=>o(!1),children:"Cancel"})]})]})]})})]})}],c=()=>{const m=d[e];return m.name==="Default Modal"?`import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Open Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsOpen(false)}></div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Deactivate account
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Are you sure you want to deactivate your account?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-slate-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;`:m.name==="Form Modal"?`import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Add New Item
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsOpen(false)}></div>
            
            <div className="inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form>
                <div className="bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                    Add New Item
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                        placeholder="Enter item name"
                      />
                    </div>
                    {/* More form fields */}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-slate-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;`:`import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Open Large Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsOpen(false)}></div>
            
            <div className="inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Form content */}
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Create Project
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-slate-600 shadow-sm px-4 py-2 bg-white dark:bg-slate-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;`},u=async()=>{try{await navigator.clipboard.writeText(c()),n(!0),setTimeout(()=>n(!1),2e3)}catch(m){console.error("Failed to copy: ",m)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:d.map((m,x)=>a.jsx("button",{onClick:()=>t(x),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===x?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:m.name},x))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:d[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:u,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:c()})})}):d[e].component})]})},k2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),[i,o]=p.useState(!1),[d,c]=p.useState(!1),[u,m]=p.useState(!1),x=p.useRef(null),b=p.useRef(null),j=p.useRef(null);p.useEffect(()=>{const h=f=>{x.current&&!x.current.contains(f.target)&&o(!1),b.current&&!b.current.contains(f.target)&&c(!1),j.current&&!j.current.contains(f.target)&&m(!1)};return(i||d||u)&&document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[i,d,u]);const k=[{name:"Default Popover",component:a.jsx("div",{className:"space-y-4",children:a.jsxs("div",{className:"relative inline-block text-left",ref:x,children:[a.jsxs("button",{onClick:()=>o(!i),className:"bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:["Options",a.jsx("svg",{className:"-mr-1 ml-2 h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),i&&a.jsx("div",{className:"absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:a.jsxs("div",{className:"py-1",children:[a.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700",children:"Account settings"}),a.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700",children:"Support"}),a.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700",children:"License"}),a.jsx("div",{className:"border-t border-gray-100 dark:border-slate-700"}),a.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700",children:"Sign out"})]})})]})})},{name:"Card Popover",component:a.jsx("div",{className:"space-y-4",children:a.jsxs("div",{className:"relative inline-block text-left",ref:b,children:[a.jsx("button",{onClick:()=>c(!d),className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Show Details"}),d&&a.jsx("div",{className:"absolute left-0 z-50 mt-2 w-80 origin-top-left rounded-lg bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none",children:a.jsx("div",{className:"p-4",children:a.jsxs("div",{className:"flex items-start",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx("div",{className:"h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center",children:a.jsx("svg",{className:"h-6 w-6 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})}),a.jsxs("div",{className:"ml-3 flex-1",children:[a.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-white",children:"Project Alpha"}),a.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"A comprehensive project management solution with advanced features and integrations."}),a.jsxs("div",{className:"mt-3 flex space-x-2",children:[a.jsx("button",{className:"bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"View Project"}),a.jsx("button",{className:"bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:"Edit"})]})]})]})})})]})})},{name:"Form Popover",component:a.jsx("div",{className:"space-y-4",children:a.jsxs("div",{className:"relative inline-block text-left",ref:j,children:[a.jsx("button",{onClick:()=>m(!u),className:"bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Quick Add"}),u&&a.jsx("div",{className:"absolute right-0 z-50 mt-2 w-72 origin-top-right rounded-lg bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none",children:a.jsxs("div",{className:"p-4",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"Quick Add Item"}),a.jsxs("form",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Name"}),a.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white text-sm",placeholder:"Enter item name"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Category"}),a.jsxs("select",{className:"w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white text-sm",children:[a.jsx("option",{children:"Select category"}),a.jsx("option",{children:"Work"}),a.jsx("option",{children:"Personal"}),a.jsx("option",{children:"Shopping"}),a.jsx("option",{children:"Other"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Priority"}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsxs("label",{className:"flex items-center",children:[a.jsx("input",{type:"radio",name:"priority",value:"low",className:"mr-2"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Low"})]}),a.jsxs("label",{className:"flex items-center",children:[a.jsx("input",{type:"radio",name:"priority",value:"medium",className:"mr-2"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Medium"})]}),a.jsxs("label",{className:"flex items-center",children:[a.jsx("input",{type:"radio",name:"priority",value:"high",className:"mr-2"}),a.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"High"})]})]})]}),a.jsxs("div",{className:"flex justify-end space-x-2 pt-4",children:[a.jsx("button",{type:"button",onClick:()=>m(!1),className:"px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors",children:"Cancel"}),a.jsx("button",{type:"submit",onClick:()=>m(!1),className:"px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Add Item"})]})]})]})})]})})}],y=()=>{const h=k[e];return h.name==="Default Popover"?`import React, { useState } from 'react';

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Options
        <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a href="#" className="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700">
              Account settings
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700">
              Support
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700">
              License
            </a>
            <div className="border-t border-gray-100 dark:border-slate-700"></div>
            <a href="#" className="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700">
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;`:h.name==="Card Popover"?`import React, { useState } from 'react';

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Show Details
      </button>

      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-80 origin-top-left rounded-lg bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  Project Alpha
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  A comprehensive project management solution.
                </p>
                <div className="mt-3 flex space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    View Project
                  </button>
                  <button className="bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;`:`import React, { useState } from 'react';

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Quick Add
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-lg bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Quick Add Item
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white text-sm"
                  placeholder="Enter item name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white text-sm">
                  <option>Select category</option>
                  <option>Work</option>
                  <option>Personal</option>
                  <option>Shopping</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;`},g=async()=>{try{await navigator.clipboard.writeText(y()),n(!0),setTimeout(()=>n(!1),2e3)}catch(h){console.error("Failed to copy: ",h)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:k.map((h,f)=>a.jsx("button",{onClick:()=>t(f),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===f?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:h.name},f))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:k[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:g,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:y()})})}):k[e].component})]})},w2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),[i,o]=p.useState(!1),d=[{name:"Default Tooltip",component:a.jsx("div",{className:"space-y-8",children:a.jsxs("div",{className:"flex justify-center space-x-8",children:[a.jsxs("div",{className:"relative group inline-block",children:[a.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Hover me"}),a.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[60]",children:["This is a tooltip",a.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"})]})]}),a.jsxs("div",{className:"relative group inline-block",children:[a.jsx("button",{className:"bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Top tooltip"}),a.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-green-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-[60]",children:["Tooltip on top",a.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-green-600"})]})]}),a.jsxs("div",{className:"relative group inline-block",children:[a.jsx("button",{className:"bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Right tooltip"}),a.jsxs("div",{className:"absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-red-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-[60]",children:["Tooltip on right",a.jsx("div",{className:"absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-red-600"})]})]})]})})},{name:"Interactive Tooltip",component:a.jsx("div",{className:"space-y-8",children:a.jsxs("div",{className:"flex justify-center space-x-8",children:[a.jsxs("div",{className:"relative group inline-block",children:[a.jsx("button",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Interactive"}),i&&a.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-[60]",children:["Click to interact",a.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-purple-600"})]})]}),a.jsxs("div",{className:"relative group inline-block",children:[a.jsx("button",{className:"bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors",children:"With Icon"}),a.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap flex items-center z-[60]",children:[a.jsx("svg",{className:"w-4 h-4 mr-1",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),"Information",a.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-indigo-600"})]})]}),a.jsxs("div",{className:"relative group inline-block",children:[a.jsx("button",{className:"bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Long text"}),a.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-yellow-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none max-w-xs text-center z-[60]",children:["This is a longer tooltip message that demonstrates how tooltips handle multiple lines of text",a.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-yellow-600"})]})]})]})})},{name:"Custom Tooltip",component:a.jsx("div",{className:"space-y-8",children:a.jsxs("div",{className:"flex justify-center space-x-8",children:[a.jsxs("div",{className:"relative group inline-block",children:[a.jsx("button",{className:"bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Custom Style"}),a.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-gray-800 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl z-[60]",children:[a.jsx("div",{className:"font-semibold",children:"Custom Tooltip"}),a.jsx("div",{className:"text-xs opacity-75",children:"With custom styling"}),a.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"})]})]}),a.jsxs("div",{className:"relative group inline-block",children:[a.jsx("button",{className:"bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Animated"}),a.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap group-hover:scale-105 z-[60]",children:["Smooth animation",a.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-pink-600"})]})]}),a.jsxs("div",{className:"relative group inline-block",children:[a.jsx("button",{className:"bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors",children:"Multi-line"}),a.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none max-w-xs text-center z-[60]",children:[a.jsx("div",{className:"font-semibold",children:"Multi-line Tooltip"}),a.jsx("div",{className:"text-xs mt-1",children:"This tooltip can handle multiple lines of text and different formatting"}),a.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-teal-600"})]})]})]})})}],c=()=>{const m=d[e];return m.name==="Default Tooltip"?`import React from 'react';

const Tooltip = () => {
  return (
    <div className="flex justify-center space-x-8">
      {/* Top Tooltip */}
      <div className="relative group">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Hover me
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          This is a tooltip
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
        </div>
      </div>

      {/* Right Tooltip */}
      <div className="relative group">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
          Right tooltip
        </button>
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-red-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Tooltip on right
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;`:m.name==="Interactive Tooltip"?`import React, { useState } from 'react';

const Tooltip = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center space-x-8">
      {/* Interactive Tooltip */}
      <div className="relative group">
        <button 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Interactive
        </button>
        {isHovered && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Click to interact
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-purple-600"></div>
          </div>
        )}
      </div>

      {/* Tooltip with Icon */}
      <div className="relative group">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
          With Icon
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Information
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-indigo-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;`:`import React from 'react';

const Tooltip = () => {
  return (
    <div className="flex justify-center space-x-8">
      {/* Custom Styled Tooltip */}
      <div className="relative group">
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
          Custom Style
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          <div className="font-semibold">Custom Tooltip</div>
          <div className="text-xs opacity-75">With custom styling</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-gray-200"></div>
        </div>
      </div>

      {/* Animated Tooltip */}
      <div className="relative group">
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors">
          Animated
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap group-hover:scale-105">
          Smooth animation
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-pink-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;`},u=async()=>{try{await navigator.clipboard.writeText(c()),n(!0),setTimeout(()=>n(!1),2e3)}catch(m){console.error("Failed to copy: ",m)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:d.map((m,x)=>a.jsx("button",{onClick:()=>t(x),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===x?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:m.name},x))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:d[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:u,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:c()})})}):d[e].component})]})},j2=()=>{const[e,t]=p.useState(0),[r,s]=p.useState(!1),[l,n]=p.useState(!1),i=[{name:"Default Badge",component:a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Color Variants"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 shadow-sm",children:"Blue"}),a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 shadow-sm",children:"Green"}),a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 shadow-sm",children:"Yellow"}),a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 shadow-sm",children:"Red"}),a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 shadow-sm",children:"Purple"}),a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 shadow-sm",children:"Gray"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Border Radius"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 shadow-sm",children:"Rounded"}),a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 shadow-sm",children:"Large radius"}),a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-none text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 shadow-sm",children:"No radius"})]})]})]})},{name:"Badge with Icons",component:a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Status Badges"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 shadow-sm",children:[a.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"Success"]}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 shadow-sm",children:[a.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),"Error"]}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 shadow-sm",children:[a.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),"Warning"]}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 shadow-sm",children:[a.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),"Info"]})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Action Badges"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 shadow-sm",children:[a.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Completed"]}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 shadow-sm",children:[a.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),"Pending"]}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 shadow-sm",children:[a.jsx("svg",{className:"w-4 h-4 mr-1.5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),"Favorite"]})]})]})]})},{name:"Badge with Count",component:a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Notification Badges"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[a.jsxs("div",{className:"relative",children:[a.jsx("button",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg shadow-sm",children:"Notifications"}),a.jsx("span",{className:"absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full min-w-[20px] h-5",children:"3"})]}),a.jsxs("div",{className:"relative",children:[a.jsx("button",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg shadow-sm",children:"Messages"}),a.jsx("span",{className:"absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full min-w-[20px] h-5",children:"12"})]}),a.jsxs("div",{className:"relative",children:[a.jsx("button",{className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg shadow-sm",children:"Cart"}),a.jsx("span",{className:"absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded-full min-w-[20px] h-5",children:"99+"})]})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Badges with Count"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 shadow-sm",children:["New",a.jsx("span",{className:"ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200 rounded-full",children:"5"})]}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 shadow-sm",children:["Active",a.jsx("span",{className:"ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-green-800 bg-green-200 dark:bg-green-800 dark:text-green-200 rounded-full",children:"42"})]}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 shadow-sm",children:["Premium",a.jsx("span",{className:"ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-purple-800 bg-purple-200 dark:bg-purple-800 dark:text-purple-200 rounded-full",children:"∞"})]})]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Status Indicators"}),a.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Status:"}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 shadow-sm",children:[a.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full mr-2"}),"Online"]})]}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Status:"}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 shadow-sm",children:[a.jsx("span",{className:"w-2 h-2 bg-red-400 rounded-full mr-2"}),"Offline"]})]}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"Status:"}),a.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 shadow-sm",children:[a.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full mr-2"}),"Away"]})]})]})]})]})}],o=()=>{const c=i[e];return c.name==="Default Badge"?`import React from 'react';

const Badge = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Basic Badges */}
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        Blue
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
        Green
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
        Yellow
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
        Red
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
        Purple
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        Gray
      </span>

      {/* Different Border Radius */}
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        Rounded
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
        Large radius
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-none text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
        No radius
      </span>
    </div>
  );
};

export default Badge;`:c.name==="Badge with Icons"?`import React from 'react';

const Badge = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Status Badges with Icons */}
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Success
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        Error
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        Warning
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        Info
      </span>
    </div>
  );
};

export default Badge;`:`import React from 'react';

const Badge = () => {
  return (
    <div className="space-y-6">
      {/* Notification Badges */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative">
          <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg">
            Notifications
          </button>
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            3
          </span>
        </div>

        <div className="relative">
          <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg">
            Messages
          </button>
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-600 rounded-full">
            12
          </span>
        </div>
      </div>

      {/* Badges with Count */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          New
          <span className="ml-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200 rounded-full">
            5
          </span>
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          Active
          <span className="ml-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-green-800 bg-green-200 dark:bg-green-800 dark:text-green-200 rounded-full">
            42
          </span>
        </span>
      </div>

      {/* Status Indicators */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">Status:</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
            Online
          </span>
        </div>
      </div>
    </div>
  );
};

export default Badge;`},d=async()=>{try{await navigator.clipboard.writeText(o()),n(!0),setTimeout(()=>n(!1),2e3)}catch(c){console.error("Failed to copy: ",c)}};return a.jsxs("div",{className:"space-y-6",children:[a.jsx("div",{className:"flex space-x-2 mb-4",children:i.map((c,u)=>a.jsx("button",{onClick:()=>t(u),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${e===u?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,children:c.name},u))}),a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:i[e].name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{onClick:()=>s(!r),className:"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors",children:r?"Hide Code":"Show Code"}),a.jsx("button",{onClick:d,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${l?"text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900":"text-white bg-blue-600 hover:bg-blue-700"}`,children:l?"Copied!":"Copy Code"})]})]}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg",children:r?a.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 overflow-x-auto",children:a.jsx("pre",{className:"text-sm",children:a.jsx("code",{children:o()})})}):a.jsx("div",{className:"p-6",children:i[e].component})})]})},N2=({feedbackType:e})=>{const t=()=>{switch(e){case"alert":return a.jsx(b2,{});case"toast":return a.jsx(v2,{});case"modal":return a.jsx(y2,{});case"popover":return a.jsx(k2,{});case"tooltip":return a.jsx(w2,{});case"badge":return a.jsx(j2,{});default:return a.jsxs("div",{className:"text-red-500",children:["Component not found for type: ",e]})}};return a.jsx("div",{className:"p-6",children:t()})},Nm=[{id:"alert",name:"Alert",description:"Alert components for displaying important messages and notifications",category:"feedback",href:"/feedback/alert",icon:"⚠️",complexity:"beginner",features:["Multiple alert types","Dismissible alerts","Action buttons","Icon support","Color variants","Accessibility features"],examples:[{name:"Default Alert",description:"Basic alert with different types and colors"},{name:"Dismissible Alert",description:"Alert with close button and action buttons"},{name:"Banner Alert",description:"Banner-style alerts with left border accent"}]},{id:"toast",name:"Toast",description:"Toast notifications for temporary messages and feedback",category:"feedback",href:"/feedback/toast",icon:"🍞",complexity:"intermediate",features:["Auto-dismiss timers","Position control","Stack management","Action buttons","Animation effects","Custom styling"],examples:[{name:"Default Toast",description:"Basic toast notifications with different states"},{name:"Toast with Action",description:"Toast with action buttons and interactive elements"},{name:"Toast Stack",description:"Multiple toasts stacked for better organization"}]},{id:"modal",name:"Modal",description:"Modal dialogs for overlays and focused interactions",category:"feedback",href:"/feedback/modal",icon:"🪟",complexity:"intermediate",features:["Backdrop overlay","Focus management","Escape key handling","Size variants","Animation transitions","Accessibility support"],examples:[{name:"Default Modal",description:"Basic modal with confirmation dialog"},{name:"Form Modal",description:"Modal containing forms for data input"},{name:"Large Modal",description:"Large modal for complex content and layouts"}]},{id:"popover",name:"Popover",description:"Popover components for contextual information and actions",category:"feedback",href:"/feedback/popover",icon:"💬",complexity:"intermediate",features:["Position control","Trigger management","Content flexibility","Arrow indicators","Click outside handling","Keyboard navigation"],examples:[{name:"Default Popover",description:"Basic popover with menu items and actions"},{name:"Card Popover",description:"Popover with card-style content and rich information"},{name:"Form Popover",description:"Popover containing forms for quick data entry"}]},{id:"tooltip",name:"Tooltip",description:"Tooltip components for helpful hints and additional information",category:"feedback",href:"/feedback/tooltip",icon:"💡",complexity:"beginner",features:["Position variants","Hover triggers","Delay controls","Arrow indicators","Custom content","Accessibility support"],examples:[{name:"Default Tooltip",description:"Basic tooltips with different positions and styles"},{name:"Interactive Tooltip",description:"Interactive tooltips with hover states and icons"},{name:"Custom Tooltip",description:"Custom styled tooltips with animations and effects"}]},{id:"badge",name:"Badge",description:"Badge components for labels, status indicators, and counts",category:"feedback",href:"/feedback/badge",icon:"🏷️",complexity:"beginner",features:["Color variants","Size options","Icon support","Count indicators","Status states","Custom styling"],examples:[{name:"Default Badge",description:"Basic badges with different colors and shapes"},{name:"Badge with Icons",description:"Badges with icons for better visual communication"},{name:"Badge with Count",description:"Badges with count indicators and notification numbers"}]}],ir=({feedbackType:e})=>{const t=r=>{switch(r){case"beginner":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";case"intermediate":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";case"advanced":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}};if(e){const r=Nm.find(s=>s.id===e);return r?a.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:a.jsxs("div",{className:"mb-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:r.name}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:r.description})]}),a.jsx("div",{className:"flex items-center space-x-2",children:a.jsx("span",{className:`px-3 py-1 text-sm font-medium rounded-full ${t(r.complexity)}`,children:r.complexity})})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Features"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:r.features.map((s,l)=>a.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-600 dark:text-blue-200",children:[a.jsx("svg",{className:"w-4 h-4 text-green-500 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:s})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-blue-100 mb-3",children:"Live Demo"}),a.jsx("div",{className:"border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden",children:a.jsx("div",{className:"p-4",children:a.jsx(N2,{feedbackType:e})})})]})]})})})}):a.jsx("div",{children:"Feedback component not found"})}return a.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:a.jsx("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6",children:a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"flex items-center justify-between mb-4",children:a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-2",children:"Feedback Components"}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200",children:"Interactive components for user feedback, notifications, and alerts"})]})}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Nm.map(r=>a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-lg p-4 hover:shadow-md transition-shadow",children:[a.jsxs("div",{className:"flex items-center space-x-3 mb-3",children:[a.jsx("span",{className:"text-2xl",children:r.icon}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:r.name}),a.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${t(r.complexity)}`,children:r.complexity})]})]}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-200 mb-3",children:r.description}),a.jsxs("div",{className:"flex flex-wrap gap-1 mb-3",children:[r.features.slice(0,3).map((s,l)=>a.jsx("span",{className:"px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md",children:s},l)),r.features.length>3&&a.jsxs("span",{className:"px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-md",children:["+",r.features.length-3," more"]})]}),a.jsxs("a",{href:r.href,className:"inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium",children:["View Component",a.jsx("svg",{className:"w-4 h-4 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]},r.id))})]})})})})};function C2(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return p.useMemo(()=>s=>{t.forEach(l=>l(s))},t)}const io=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Os(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function ku(e){return"nodeType"in e}function Ke(e){var t,r;return e?Os(e)?e:ku(e)&&(t=(r=e.ownerDocument)==null?void 0:r.defaultView)!=null?t:window:window}function wu(e){const{Document:t}=Ke(e);return e instanceof t}function nn(e){return Os(e)?!1:e instanceof Ke(e).HTMLElement}function vf(e){return e instanceof Ke(e).SVGElement}function Bs(e){return e?Os(e)?e.document:ku(e)?wu(e)?e:nn(e)||vf(e)?e.ownerDocument:document:document:document}const Ot=io?p.useLayoutEffect:p.useEffect;function oo(e){const t=p.useRef(e);return Ot(()=>{t.current=e}),p.useCallback(function(){for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return t.current==null?void 0:t.current(...s)},[])}function S2(){const e=p.useRef(null),t=p.useCallback((s,l)=>{e.current=setInterval(s,l)},[]),r=p.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,r]}function Hl(e,t){t===void 0&&(t=[e]);const r=p.useRef(e);return Ot(()=>{r.current!==e&&(r.current=e)},t),r}function on(e,t){const r=p.useRef();return p.useMemo(()=>{const s=e(r.current);return r.current=s,s},[...t])}function zi(e){const t=oo(e),r=p.useRef(null),s=p.useCallback(l=>{l!==r.current&&(t==null||t(l,r.current)),r.current=l},[]);return[r,s]}function Ai(e){const t=p.useRef();return p.useEffect(()=>{t.current=e},[e]),t.current}let ld={};function dn(e,t){return p.useMemo(()=>{if(t)return t;const r=ld[e]==null?0:ld[e]+1;return ld[e]=r,e+"-"+r},[e,t])}function yf(e){return function(t){for(var r=arguments.length,s=new Array(r>1?r-1:0),l=1;l<r;l++)s[l-1]=arguments[l];return s.reduce((n,i)=>{const o=Object.entries(i);for(const[d,c]of o){const u=n[d];u!=null&&(n[d]=u+e*c)}return n},{...t})}}const ms=yf(1),$l=yf(-1);function D2(e){return"clientX"in e&&"clientY"in e}function co(e){if(!e)return!1;const{KeyboardEvent:t}=Ke(e.target);return t&&e instanceof t}function T2(e){if(!e)return!1;const{TouchEvent:t}=Ke(e.target);return t&&e instanceof t}function Li(e){if(T2(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return D2(e)?{x:e.clientX,y:e.clientY}:null}const Bt=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Bt.Translate.toString(e),Bt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:s}=e;return t+" "+r+"ms "+s}}}),Cm="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function R2(e){return e.matches(Cm)?e:e.querySelector(Cm)}const M2={display:"none"};function E2(e){let{id:t,value:r}=e;return ce.createElement("div",{id:t,style:M2},r)}function z2(e){let{id:t,announcement:r,ariaLiveType:s="assertive"}=e;const l={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ce.createElement("div",{id:t,style:l,role:"status","aria-live":s,"aria-atomic":!0},r)}function A2(){const[e,t]=p.useState("");return{announce:p.useCallback(s=>{s!=null&&t(s)},[]),announcement:e}}const kf=p.createContext(null);function L2(e){const t=p.useContext(kf);p.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function O2(){const[e]=p.useState(()=>new Set),t=p.useCallback(s=>(e.add(s),()=>e.delete(s)),[e]);return[p.useCallback(s=>{let{type:l,event:n}=s;e.forEach(i=>{var o;return(o=i[l])==null?void 0:o.call(i,n)})},[e]),t]}const B2={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},H2={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function $2(e){let{announcements:t=H2,container:r,hiddenTextDescribedById:s,screenReaderInstructions:l=B2}=e;const{announce:n,announcement:i}=A2(),o=dn("DndLiveRegion"),[d,c]=p.useState(!1);if(p.useEffect(()=>{c(!0)},[]),L2(p.useMemo(()=>({onDragStart(m){let{active:x}=m;n(t.onDragStart({active:x}))},onDragMove(m){let{active:x,over:b}=m;t.onDragMove&&n(t.onDragMove({active:x,over:b}))},onDragOver(m){let{active:x,over:b}=m;n(t.onDragOver({active:x,over:b}))},onDragEnd(m){let{active:x,over:b}=m;n(t.onDragEnd({active:x,over:b}))},onDragCancel(m){let{active:x,over:b}=m;n(t.onDragCancel({active:x,over:b}))}}),[n,t])),!d)return null;const u=ce.createElement(ce.Fragment,null,ce.createElement(E2,{id:s,value:l.draggable}),ce.createElement(z2,{id:o,announcement:i}));return r?Gr.createPortal(u,r):u}var Te;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Te||(Te={}));function Oi(){}function Ns(e,t){return p.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function ju(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return p.useMemo(()=>[...t].filter(s=>s!=null),[...t])}const Ht=Object.freeze({x:0,y:0});function wf(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function _2(e,t){const r=Li(e);if(!r)return"0 0";const s={x:(r.x-t.left)/t.width*100,y:(r.y-t.top)/t.height*100};return s.x+"% "+s.y+"%"}function jf(e,t){let{data:{value:r}}=e,{data:{value:s}}=t;return r-s}function U2(e,t){let{data:{value:r}}=e,{data:{value:s}}=t;return s-r}function Sm(e){let{left:t,top:r,height:s,width:l}=e;return[{x:t,y:r},{x:t+l,y:r},{x:t,y:r+s},{x:t+l,y:r+s}]}function Nf(e,t){if(!e||e.length===0)return null;const[r]=e;return t?r[t]:r}function Dm(e,t,r){return t===void 0&&(t=e.left),r===void 0&&(r=e.top),{x:t+e.width*.5,y:r+e.height*.5}}const Nu=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:s}=e;const l=Dm(t,t.left,t.top),n=[];for(const i of s){const{id:o}=i,d=r.get(o);if(d){const c=wf(Dm(d),l);n.push({id:o,data:{droppableContainer:i,value:c}})}}return n.sort(jf)},q2=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:s}=e;const l=Sm(t),n=[];for(const i of s){const{id:o}=i,d=r.get(o);if(d){const c=Sm(d),u=l.reduce((x,b,j)=>x+wf(c[j],b),0),m=Number((u/4).toFixed(4));n.push({id:o,data:{droppableContainer:i,value:m}})}}return n.sort(jf)};function F2(e,t){const r=Math.max(t.top,e.top),s=Math.max(t.left,e.left),l=Math.min(t.left+t.width,e.left+e.width),n=Math.min(t.top+t.height,e.top+e.height),i=l-s,o=n-r;if(s<l&&r<n){const d=t.width*t.height,c=e.width*e.height,u=i*o,m=u/(d+c-u);return Number(m.toFixed(4))}return 0}const V2=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:s}=e;const l=[];for(const n of s){const{id:i}=n,o=r.get(i);if(o){const d=F2(o,t);d>0&&l.push({id:i,data:{droppableContainer:n,value:d}})}}return l.sort(U2)};function I2(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}function Cf(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ht}function G2(e){return function(r){for(var s=arguments.length,l=new Array(s>1?s-1:0),n=1;n<s;n++)l[n-1]=arguments[n];return l.reduce((i,o)=>({...i,top:i.top+e*o.y,bottom:i.bottom+e*o.y,left:i.left+e*o.x,right:i.right+e*o.x}),{...r})}}const P2=G2(1);function Sf(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Y2(e,t,r){const s=Sf(t);if(!s)return e;const{scaleX:l,scaleY:n,x:i,y:o}=s,d=e.left-i-(1-l)*parseFloat(r),c=e.top-o-(1-n)*parseFloat(r.slice(r.indexOf(" ")+1)),u=l?e.width/l:e.width,m=n?e.height/n:e.height;return{width:u,height:m,top:c,right:d+u,bottom:c+m,left:d}}const X2={ignoreTransform:!1};function Hs(e,t){t===void 0&&(t=X2);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:c,transformOrigin:u}=Ke(e).getComputedStyle(e);c&&(r=Y2(r,c,u))}const{top:s,left:l,width:n,height:i,bottom:o,right:d}=r;return{top:s,left:l,width:n,height:i,bottom:o,right:d}}function Tm(e){return Hs(e,{ignoreTransform:!0})}function K2(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}function Q2(e,t){return t===void 0&&(t=Ke(e).getComputedStyle(e)),t.position==="fixed"}function Z2(e,t){t===void 0&&(t=Ke(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(l=>{const n=t[l];return typeof n=="string"?r.test(n):!1})}function uo(e,t){const r=[];function s(l){if(t!=null&&r.length>=t||!l)return r;if(wu(l)&&l.scrollingElement!=null&&!r.includes(l.scrollingElement))return r.push(l.scrollingElement),r;if(!nn(l)||vf(l)||r.includes(l))return r;const n=Ke(e).getComputedStyle(l);return l!==e&&Z2(l,n)&&r.push(l),Q2(l,n)?r:s(l.parentNode)}return e?s(e):r}function Df(e){const[t]=uo(e,1);return t??null}function nd(e){return!io||!e?null:Os(e)?e:ku(e)?wu(e)||e===Bs(e).scrollingElement?window:nn(e)?e:null:null}function Tf(e){return Os(e)?e.scrollX:e.scrollLeft}function Rf(e){return Os(e)?e.scrollY:e.scrollTop}function dc(e){return{x:Tf(e),y:Rf(e)}}var Ae;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Ae||(Ae={}));function Mf(e){return!io||!e?!1:e===document.scrollingElement}function Ef(e){const t={x:0,y:0},r=Mf(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},s={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height},l=e.scrollTop<=t.y,n=e.scrollLeft<=t.x,i=e.scrollTop>=s.y,o=e.scrollLeft>=s.x;return{isTop:l,isLeft:n,isBottom:i,isRight:o,maxScroll:s,minScroll:t}}const W2={x:.2,y:.2};function J2(e,t,r,s,l){let{top:n,left:i,right:o,bottom:d}=r;s===void 0&&(s=10),l===void 0&&(l=W2);const{isTop:c,isBottom:u,isLeft:m,isRight:x}=Ef(e),b={x:0,y:0},j={x:0,y:0},k={height:t.height*l.y,width:t.width*l.x};return!c&&n<=t.top+k.height?(b.y=Ae.Backward,j.y=s*Math.abs((t.top+k.height-n)/k.height)):!u&&d>=t.bottom-k.height&&(b.y=Ae.Forward,j.y=s*Math.abs((t.bottom-k.height-d)/k.height)),!x&&o>=t.right-k.width?(b.x=Ae.Forward,j.x=s*Math.abs((t.right-k.width-o)/k.width)):!m&&i<=t.left+k.width&&(b.x=Ae.Backward,j.x=s*Math.abs((t.left+k.width-i)/k.width)),{direction:b,speed:j}}function ek(e){if(e===document.scrollingElement){const{innerWidth:n,innerHeight:i}=window;return{top:0,left:0,right:n,bottom:i,width:n,height:i}}const{top:t,left:r,right:s,bottom:l}=e.getBoundingClientRect();return{top:t,left:r,right:s,bottom:l,width:e.clientWidth,height:e.clientHeight}}function zf(e){return e.reduce((t,r)=>ms(t,dc(r)),Ht)}function tk(e){return e.reduce((t,r)=>t+Tf(r),0)}function ak(e){return e.reduce((t,r)=>t+Rf(r),0)}function Af(e,t){if(t===void 0&&(t=Hs),!e)return;const{top:r,left:s,bottom:l,right:n}=t(e);Df(e)&&(l<=0||n<=0||r>=window.innerHeight||s>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const rk=[["x",["left","right"],tk],["y",["top","bottom"],ak]];class Cu{constructor(t,r){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const s=uo(r),l=zf(s);this.rect={...t},this.width=t.width,this.height=t.height;for(const[n,i,o]of rk)for(const d of i)Object.defineProperty(this,d,{get:()=>{const c=o(s),u=l[n]-c;return this.rect[d]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class vl{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(r=>{var s;return(s=this.target)==null?void 0:s.removeEventListener(...r)})},this.target=t}add(t,r,s){var l;(l=this.target)==null||l.addEventListener(t,r,s),this.listeners.push([t,r,s])}}function sk(e){const{EventTarget:t}=Ke(e);return e instanceof t?e:Bs(e)}function id(e,t){const r=Math.abs(e.x),s=Math.abs(e.y);return typeof t=="number"?Math.sqrt(r**2+s**2)>t:"x"in t&&"y"in t?r>t.x&&s>t.y:"x"in t?r>t.x:"y"in t?s>t.y:!1}var yt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(yt||(yt={}));function Rm(e){e.preventDefault()}function lk(e){e.stopPropagation()}var P;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(P||(P={}));const Lf={start:[P.Space,P.Enter],cancel:[P.Esc],end:[P.Space,P.Enter,P.Tab]},nk=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case P.Right:return{...r,x:r.x+25};case P.Left:return{...r,x:r.x-25};case P.Down:return{...r,y:r.y+25};case P.Up:return{...r,y:r.y-25}}};class cn{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:r}}=t;this.props=t,this.listeners=new vl(Bs(r)),this.windowListeners=new vl(Ke(r)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(yt.Resize,this.handleCancel),this.windowListeners.add(yt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(yt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:r}=this.props,s=t.node.current;s&&Af(s),r(Ht)}handleKeyDown(t){if(co(t)){const{active:r,context:s,options:l}=this.props,{keyboardCodes:n=Lf,coordinateGetter:i=nk,scrollBehavior:o="smooth"}=l,{code:d}=t;if(n.end.includes(d)){this.handleEnd(t);return}if(n.cancel.includes(d)){this.handleCancel(t);return}const{collisionRect:c}=s.current,u=c?{x:c.left,y:c.top}:Ht;this.referenceCoordinates||(this.referenceCoordinates=u);const m=i(t,{active:r,context:s.current,currentCoordinates:u});if(m){const x=$l(m,u),b={x:0,y:0},{scrollableAncestors:j}=s.current;for(const k of j){const y=t.code,{isTop:g,isRight:h,isLeft:f,isBottom:v,maxScroll:w,minScroll:D}=Ef(k),N=ek(k),C={x:Math.min(y===P.Right?N.right-N.width/2:N.right,Math.max(y===P.Right?N.left:N.left+N.width/2,m.x)),y:Math.min(y===P.Down?N.bottom-N.height/2:N.bottom,Math.max(y===P.Down?N.top:N.top+N.height/2,m.y))},S=y===P.Right&&!h||y===P.Left&&!f,T=y===P.Down&&!v||y===P.Up&&!g;if(S&&C.x!==m.x){const z=k.scrollLeft+x.x,O=y===P.Right&&z<=w.x||y===P.Left&&z>=D.x;if(O&&!x.y){k.scrollTo({left:z,behavior:o});return}O?b.x=k.scrollLeft-z:b.x=y===P.Right?k.scrollLeft-w.x:k.scrollLeft-D.x,b.x&&k.scrollBy({left:-b.x,behavior:o});break}else if(T&&C.y!==m.y){const z=k.scrollTop+x.y,O=y===P.Down&&z<=w.y||y===P.Up&&z>=D.y;if(O&&!x.x){k.scrollTo({top:z,behavior:o});return}O?b.y=k.scrollTop-z:b.y=y===P.Down?k.scrollTop-w.y:k.scrollTop-D.y,b.y&&k.scrollBy({top:-b.y,behavior:o});break}}this.handleMove(t,ms($l(m,this.referenceCoordinates),b))}}}handleMove(t,r){const{onMove:s}=this.props;t.preventDefault(),s(r)}handleEnd(t){const{onEnd:r}=this.props;t.preventDefault(),this.detach(),r()}handleCancel(t){const{onCancel:r}=this.props;t.preventDefault(),this.detach(),r()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}cn.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:s=Lf,onActivation:l}=t,{active:n}=r;const{code:i}=e.nativeEvent;if(s.start.includes(i)){const o=n.activatorNode.current;return o&&e.target!==o?!1:(e.preventDefault(),l==null||l({event:e.nativeEvent}),!0)}return!1}}];function Mm(e){return!!(e&&"distance"in e)}function Em(e){return!!(e&&"delay"in e)}class Su{constructor(t,r,s){var l;s===void 0&&(s=sk(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=r;const{event:n}=t,{target:i}=n;this.props=t,this.events=r,this.document=Bs(i),this.documentListeners=new vl(this.document),this.listeners=new vl(s),this.windowListeners=new vl(Ke(i)),this.initialCoordinates=(l=Li(n))!=null?l:Ht,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:r,bypassActivationConstraint:s}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(yt.Resize,this.handleCancel),this.windowListeners.add(yt.DragStart,Rm),this.windowListeners.add(yt.VisibilityChange,this.handleCancel),this.windowListeners.add(yt.ContextMenu,Rm),this.documentListeners.add(yt.Keydown,this.handleKeydown),r){if(s!=null&&s({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Em(r)){this.timeoutId=setTimeout(this.handleStart,r.delay),this.handlePending(r);return}if(Mm(r)){this.handlePending(r);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,r){const{active:s,onPending:l}=this.props;l(s,t,this.initialCoordinates,r)}handleStart(){const{initialCoordinates:t}=this,{onStart:r}=this.props;t&&(this.activated=!0,this.documentListeners.add(yt.Click,lk,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(yt.SelectionChange,this.removeTextSelection),r(t))}handleMove(t){var r;const{activated:s,initialCoordinates:l,props:n}=this,{onMove:i,options:{activationConstraint:o}}=n;if(!l)return;const d=(r=Li(t))!=null?r:Ht,c=$l(l,d);if(!s&&o){if(Mm(o)){if(o.tolerance!=null&&id(c,o.tolerance))return this.handleCancel();if(id(c,o.distance))return this.handleStart()}if(Em(o)&&id(c,o.tolerance))return this.handleCancel();this.handlePending(o,c);return}t.cancelable&&t.preventDefault(),i(d)}handleEnd(){const{onAbort:t,onEnd:r}=this.props;this.detach(),this.activated||t(this.props.active),r()}handleCancel(){const{onAbort:t,onCancel:r}=this.props;this.detach(),this.activated||t(this.props.active),r()}handleKeydown(t){t.code===P.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const ik={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class un extends Su{constructor(t){const{event:r}=t,s=Bs(r.target);super(t,ik,s)}}un.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:s}=t;return!r.isPrimary||r.button!==0?!1:(s==null||s({event:r}),!0)}}];const ok={move:{name:"mousemove"},end:{name:"mouseup"}};var cc;(function(e){e[e.RightClick=2]="RightClick"})(cc||(cc={}));class dk extends Su{constructor(t){super(t,ok,Bs(t.event.target))}}dk.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:s}=t;return r.button===cc.RightClick?!1:(s==null||s({event:r}),!0)}}];const od={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class ck extends Su{constructor(t){super(t,od)}static setup(){return window.addEventListener(od.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(od.move.name,t)};function t(){}}}ck.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:s}=t;const{touches:l}=r;return l.length>1?!1:(s==null||s({event:r}),!0)}}];var yl;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(yl||(yl={}));var Bi;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Bi||(Bi={}));function uk(e){let{acceleration:t,activator:r=yl.Pointer,canScroll:s,draggingRect:l,enabled:n,interval:i=5,order:o=Bi.TreeOrder,pointerCoordinates:d,scrollableAncestors:c,scrollableAncestorRects:u,delta:m,threshold:x}=e;const b=xk({delta:m,disabled:!n}),[j,k]=S2(),y=p.useRef({x:0,y:0}),g=p.useRef({x:0,y:0}),h=p.useMemo(()=>{switch(r){case yl.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case yl.DraggableRect:return l}},[r,l,d]),f=p.useRef(null),v=p.useCallback(()=>{const D=f.current;if(!D)return;const N=y.current.x*g.current.x,C=y.current.y*g.current.y;D.scrollBy(N,C)},[]),w=p.useMemo(()=>o===Bi.TreeOrder?[...c].reverse():c,[o,c]);p.useEffect(()=>{if(!n||!c.length||!h){k();return}for(const D of w){if((s==null?void 0:s(D))===!1)continue;const N=c.indexOf(D),C=u[N];if(!C)continue;const{direction:S,speed:T}=J2(D,C,h,t,x);for(const z of["x","y"])b[z][S[z]]||(T[z]=0,S[z]=0);if(T.x>0||T.y>0){k(),f.current=D,j(v,i),y.current=T,g.current=S;return}}y.current={x:0,y:0},g.current={x:0,y:0},k()},[t,v,s,k,n,i,JSON.stringify(h),JSON.stringify(b),j,c,w,u,JSON.stringify(x)])}const mk={x:{[Ae.Backward]:!1,[Ae.Forward]:!1},y:{[Ae.Backward]:!1,[Ae.Forward]:!1}};function xk(e){let{delta:t,disabled:r}=e;const s=Ai(t);return on(l=>{if(r||!s||!l)return mk;const n={x:Math.sign(t.x-s.x),y:Math.sign(t.y-s.y)};return{x:{[Ae.Backward]:l.x[Ae.Backward]||n.x===-1,[Ae.Forward]:l.x[Ae.Forward]||n.x===1},y:{[Ae.Backward]:l.y[Ae.Backward]||n.y===-1,[Ae.Forward]:l.y[Ae.Forward]||n.y===1}}},[r,t,s])}function pk(e,t){const r=t!=null?e.get(t):void 0,s=r?r.node.current:null;return on(l=>{var n;return t==null?null:(n=s??l)!=null?n:null},[s,t])}function gk(e,t){return p.useMemo(()=>e.reduce((r,s)=>{const{sensor:l}=s,n=l.activators.map(i=>({eventName:i.eventName,handler:t(i.handler,s)}));return[...r,...n]},[]),[e,t])}var _l;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(_l||(_l={}));var uc;(function(e){e.Optimized="optimized"})(uc||(uc={}));const zm=new Map;function fk(e,t){let{dragging:r,dependencies:s,config:l}=t;const[n,i]=p.useState(null),{frequency:o,measure:d,strategy:c}=l,u=p.useRef(e),m=y(),x=Hl(m),b=p.useCallback(function(g){g===void 0&&(g=[]),!x.current&&i(h=>h===null?g:h.concat(g.filter(f=>!h.includes(f))))},[x]),j=p.useRef(null),k=on(g=>{if(m&&!r)return zm;if(!g||g===zm||u.current!==e||n!=null){const h=new Map;for(let f of e){if(!f)continue;if(n&&n.length>0&&!n.includes(f.id)&&f.rect.current){h.set(f.id,f.rect.current);continue}const v=f.node.current,w=v?new Cu(d(v),v):null;f.rect.current=w,w&&h.set(f.id,w)}return h}return g},[e,n,r,m,d]);return p.useEffect(()=>{u.current=e},[e]),p.useEffect(()=>{m||b()},[r,m]),p.useEffect(()=>{n&&n.length>0&&i(null)},[JSON.stringify(n)]),p.useEffect(()=>{m||typeof o!="number"||j.current!==null||(j.current=setTimeout(()=>{b(),j.current=null},o))},[o,m,b,...s]),{droppableRects:k,measureDroppableContainers:b,measuringScheduled:n!=null};function y(){switch(c){case _l.Always:return!1;case _l.BeforeDragging:return r;default:return!r}}}function Du(e,t){return on(r=>e?r||(typeof t=="function"?t(e):e):null,[t,e])}function hk(e,t){return Du(e,t)}function bk(e){let{callback:t,disabled:r}=e;const s=oo(t),l=p.useMemo(()=>{if(r||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:n}=window;return new n(s)},[s,r]);return p.useEffect(()=>()=>l==null?void 0:l.disconnect(),[l]),l}function mo(e){let{callback:t,disabled:r}=e;const s=oo(t),l=p.useMemo(()=>{if(r||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:n}=window;return new n(s)},[r]);return p.useEffect(()=>()=>l==null?void 0:l.disconnect(),[l]),l}function vk(e){return new Cu(Hs(e),e)}function Am(e,t,r){t===void 0&&(t=vk);const[s,l]=p.useState(null);function n(){l(d=>{if(!e)return null;if(e.isConnected===!1){var c;return(c=d??r)!=null?c:null}const u=t(e);return JSON.stringify(d)===JSON.stringify(u)?d:u})}const i=bk({callback(d){if(e)for(const c of d){const{type:u,target:m}=c;if(u==="childList"&&m instanceof HTMLElement&&m.contains(e)){n();break}}}}),o=mo({callback:n});return Ot(()=>{n(),e?(o==null||o.observe(e),i==null||i.observe(document.body,{childList:!0,subtree:!0})):(o==null||o.disconnect(),i==null||i.disconnect())},[e]),s}function yk(e){const t=Du(e);return Cf(e,t)}const Lm=[];function kk(e){const t=p.useRef(e),r=on(s=>e?s&&s!==Lm&&e&&t.current&&e.parentNode===t.current.parentNode?s:uo(e):Lm,[e]);return p.useEffect(()=>{t.current=e},[e]),r}function wk(e){const[t,r]=p.useState(null),s=p.useRef(e),l=p.useCallback(n=>{const i=nd(n.target);i&&r(o=>o?(o.set(i,dc(i)),new Map(o)):null)},[]);return p.useEffect(()=>{const n=s.current;if(e!==n){i(n);const o=e.map(d=>{const c=nd(d);return c?(c.addEventListener("scroll",l,{passive:!0}),[c,dc(c)]):null}).filter(d=>d!=null);r(o.length?new Map(o):null),s.current=e}return()=>{i(e),i(n)};function i(o){o.forEach(d=>{const c=nd(d);c==null||c.removeEventListener("scroll",l)})}},[l,e]),p.useMemo(()=>e.length?t?Array.from(t.values()).reduce((n,i)=>ms(n,i),Ht):zf(e):Ht,[e,t])}function Om(e,t){t===void 0&&(t=[]);const r=p.useRef(null);return p.useEffect(()=>{r.current=null},t),p.useEffect(()=>{const s=e!==Ht;s&&!r.current&&(r.current=e),!s&&r.current&&(r.current=null)},[e]),r.current?$l(e,r.current):Ht}function jk(e){p.useEffect(()=>{if(!io)return;const t=e.map(r=>{let{sensor:s}=r;return s.setup==null?void 0:s.setup()});return()=>{for(const r of t)r==null||r()}},e.map(t=>{let{sensor:r}=t;return r}))}function Nk(e,t){return p.useMemo(()=>e.reduce((r,s)=>{let{eventName:l,handler:n}=s;return r[l]=i=>{n(i,t)},r},{}),[e,t])}function Of(e){return p.useMemo(()=>e?K2(e):null,[e])}const Bm=[];function Ck(e,t){t===void 0&&(t=Hs);const[r]=e,s=Of(r?Ke(r):null),[l,n]=p.useState(Bm);function i(){n(()=>e.length?e.map(d=>Mf(d)?s:new Cu(t(d),d)):Bm)}const o=mo({callback:i});return Ot(()=>{o==null||o.disconnect(),i(),e.forEach(d=>o==null?void 0:o.observe(d))},[e]),l}function Bf(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return nn(t)?t:e}function Sk(e){let{measure:t}=e;const[r,s]=p.useState(null),l=p.useCallback(c=>{for(const{target:u}of c)if(nn(u)){s(m=>{const x=t(u);return m?{...m,width:x.width,height:x.height}:x});break}},[t]),n=mo({callback:l}),i=p.useCallback(c=>{const u=Bf(c);n==null||n.disconnect(),u&&(n==null||n.observe(u)),s(u?t(u):null)},[t,n]),[o,d]=zi(i);return p.useMemo(()=>({nodeRef:o,rect:r,setRef:d}),[r,o,d])}const Dk=[{sensor:un,options:{}},{sensor:cn,options:{}}],Tk={current:{}},ei={draggable:{measure:Tm},droppable:{measure:Tm,strategy:_l.WhileDragging,frequency:uc.Optimized},dragOverlay:{measure:Hs}};class kl extends Map{get(t){var r;return t!=null&&(r=super.get(t))!=null?r:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:r}=t;return!r})}getNodeFor(t){var r,s;return(r=(s=this.get(t))==null?void 0:s.node.current)!=null?r:void 0}}const Rk={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new kl,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Oi},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ei,measureDroppableContainers:Oi,windowRect:null,measuringScheduled:!1},Hf={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Oi,draggableNodes:new Map,over:null,measureDroppableContainers:Oi},mn=p.createContext(Hf),$f=p.createContext(Rk);function Mk(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new kl}}}function Ek(e,t){switch(t.type){case Te.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Te.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Te.DragEnd:case Te.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Te.RegisterDroppable:{const{element:r}=t,{id:s}=r,l=new kl(e.droppable.containers);return l.set(s,r),{...e,droppable:{...e.droppable,containers:l}}}case Te.SetDroppableDisabled:{const{id:r,key:s,disabled:l}=t,n=e.droppable.containers.get(r);if(!n||s!==n.key)return e;const i=new kl(e.droppable.containers);return i.set(r,{...n,disabled:l}),{...e,droppable:{...e.droppable,containers:i}}}case Te.UnregisterDroppable:{const{id:r,key:s}=t,l=e.droppable.containers.get(r);if(!l||s!==l.key)return e;const n=new kl(e.droppable.containers);return n.delete(r),{...e,droppable:{...e.droppable,containers:n}}}default:return e}}function zk(e){let{disabled:t}=e;const{active:r,activatorEvent:s,draggableNodes:l}=p.useContext(mn),n=Ai(s),i=Ai(r==null?void 0:r.id);return p.useEffect(()=>{if(!t&&!s&&n&&i!=null){if(!co(n)||document.activeElement===n.target)return;const o=l.get(i);if(!o)return;const{activatorNode:d,node:c}=o;if(!d.current&&!c.current)return;requestAnimationFrame(()=>{for(const u of[d.current,c.current]){if(!u)continue;const m=R2(u);if(m){m.focus();break}}})}},[s,t,l,i,n]),null}function _f(e,t){let{transform:r,...s}=t;return e!=null&&e.length?e.reduce((l,n)=>n({transform:l,...s}),r):r}function Ak(e){return p.useMemo(()=>({draggable:{...ei.draggable,...e==null?void 0:e.draggable},droppable:{...ei.droppable,...e==null?void 0:e.droppable},dragOverlay:{...ei.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function Lk(e){let{activeNode:t,measure:r,initialRect:s,config:l=!0}=e;const n=p.useRef(!1),{x:i,y:o}=typeof l=="boolean"?{x:l,y:l}:l;Ot(()=>{if(!i&&!o||!t){n.current=!1;return}if(n.current||!s)return;const c=t==null?void 0:t.node.current;if(!c||c.isConnected===!1)return;const u=r(c),m=Cf(u,s);if(i||(m.x=0),o||(m.y=0),n.current=!0,Math.abs(m.x)>0||Math.abs(m.y)>0){const x=Df(c);x&&x.scrollBy({top:m.y,left:m.x})}},[t,i,o,s,r])}const xo=p.createContext({...Ht,scaleX:1,scaleY:1});var Ba;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Ba||(Ba={}));const Tu=p.memo(function(t){var r,s,l,n;let{id:i,accessibility:o,autoScroll:d=!0,children:c,sensors:u=Dk,collisionDetection:m=V2,measuring:x,modifiers:b,...j}=t;const k=p.useReducer(Ek,void 0,Mk),[y,g]=k,[h,f]=O2(),[v,w]=p.useState(Ba.Uninitialized),D=v===Ba.Initialized,{draggable:{active:N,nodes:C,translate:S},droppable:{containers:T}}=y,z=N!=null?C.get(N):null,O=p.useRef({initial:null,translated:null}),$=p.useMemo(()=>{var Fe;return N!=null?{id:N,data:(Fe=z==null?void 0:z.data)!=null?Fe:Tk,rect:O}:null},[N,z]),H=p.useRef(null),[E,R]=p.useState(null),[A,B]=p.useState(null),_=Hl(j,Object.values(j)),K=dn("DndDescribedBy",i),Ee=p.useMemo(()=>T.getEnabled(),[T]),Q=Ak(x),{droppableRects:ie,measureDroppableContainers:oe,measuringScheduled:Ge}=fk(Ee,{dragging:D,dependencies:[S.x,S.y],config:Q.droppable}),be=pk(C,N),Jt=p.useMemo(()=>A?Li(A):null,[A]),Mt=oh(),gt=hk(be,Q.draggable.measure);Lk({activeNode:N!=null?C.get(N):null,config:Mt.layoutShiftCompensation,initialRect:gt,measure:Q.draggable.measure});const X=Am(be,Q.draggable.measure,gt),_t=Am(be?be.parentElement:null),He=p.useRef({activatorEvent:null,active:null,activeNode:be,collisionRect:null,collisions:null,droppableRects:ie,draggableNodes:C,draggingNode:null,draggingNodeRect:null,droppableContainers:T,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ea=T.getNodeFor((r=He.current.over)==null?void 0:r.id),ft=Sk({measure:Q.dragOverlay.measure}),ta=(s=ft.nodeRef.current)!=null?s:be,aa=D?(l=ft.rect)!=null?l:X:null,ra=!!(ft.nodeRef.current&&ft.rect),Tr=yk(ra?null:X),Sa=Of(ta?Ke(ta):null),at=kk(D?ea??be:null),Rr=Ck(at),Mr=_f(b,{transform:{x:S.x-Tr.x,y:S.y-Tr.y,scaleX:1,scaleY:1},activatorEvent:A,active:$,activeNodeRect:X,containerNodeRect:_t,draggingNodeRect:aa,over:He.current.over,overlayNodeRect:ft.rect,scrollableAncestors:at,scrollableAncestorRects:Rr,windowRect:Sa}),pn=Jt?ms(Jt,S):null,L=wk(at),U=Om(L),ve=Om(L,[X]),de=ms(Mr,U),Ne=aa?P2(aa,Mr):null,Et=$&&Ne?m({active:$,collisionRect:Ne,droppableRects:ie,droppableContainers:Ee,pointerCoordinates:pn}):null,sa=Nf(Et,"id"),[ht,Er]=p.useState(null),$s=ra?Mr:ms(Mr,ve),zr=I2($s,(n=ht==null?void 0:ht.rect)!=null?n:null,X),sr=p.useRef(null),Ar=p.useCallback((Fe,rt)=>{let{sensor:st,options:Da}=rt;if(H.current==null)return;const bt=C.get(H.current);if(!bt)return;const lt=Fe.nativeEvent,Ut=new st({active:H.current,activeNode:bt,event:lt,options:Da,context:He,onAbort($e){if(!C.get($e))return;const{onDragAbort:qt}=_.current,la={id:$e};qt==null||qt(la),h({type:"onDragAbort",event:la})},onPending($e,Ta,qt,la){if(!C.get($e))return;const{onDragPending:qs}=_.current,Ra={id:$e,constraint:Ta,initialCoordinates:qt,offset:la};qs==null||qs(Ra),h({type:"onDragPending",event:Ra})},onStart($e){const Ta=H.current;if(Ta==null)return;const qt=C.get(Ta);if(!qt)return;const{onDragStart:la}=_.current,Us={activatorEvent:lt,active:{id:Ta,data:qt.data,rect:O}};Gr.unstable_batchedUpdates(()=>{la==null||la(Us),w(Ba.Initializing),g({type:Te.DragStart,initialCoordinates:$e,active:Ta}),h({type:"onDragStart",event:Us}),R(sr.current),B(lt)})},onMove($e){g({type:Te.DragMove,coordinates:$e})},onEnd:Or(Te.DragEnd),onCancel:Or(Te.DragCancel)});sr.current=Ut;function Or($e){return async function(){const{active:qt,collisions:la,over:Us,scrollAdjustedTranslate:qs}=He.current;let Ra=null;if(qt&&qs){const{cancelDrop:Fs}=_.current;Ra={activatorEvent:lt,active:qt,collisions:la,delta:qs,over:Us},$e===Te.DragEnd&&typeof Fs=="function"&&await Promise.resolve(Fs(Ra))&&($e=Te.DragCancel)}H.current=null,Gr.unstable_batchedUpdates(()=>{g({type:$e}),w(Ba.Uninitialized),Er(null),R(null),B(null),sr.current=null;const Fs=$e===Te.DragEnd?"onDragEnd":"onDragCancel";if(Ra){const fo=_.current[Fs];fo==null||fo(Ra),h({type:Fs,event:Ra})}})}}},[C]),_s=p.useCallback((Fe,rt)=>(st,Da)=>{const bt=st.nativeEvent,lt=C.get(Da);if(H.current!==null||!lt||bt.dndKit||bt.defaultPrevented)return;const Ut={active:lt};Fe(st,rt.options,Ut)===!0&&(bt.dndKit={capturedBy:rt.sensor},H.current=Da,Ar(st,rt))},[C,Ar]),Lr=gk(u,_s);jk(u),Ot(()=>{X&&v===Ba.Initializing&&w(Ba.Initialized)},[X,v]),p.useEffect(()=>{const{onDragMove:Fe}=_.current,{active:rt,activatorEvent:st,collisions:Da,over:bt}=He.current;if(!rt||!st)return;const lt={active:rt,activatorEvent:st,collisions:Da,delta:{x:de.x,y:de.y},over:bt};Gr.unstable_batchedUpdates(()=>{Fe==null||Fe(lt),h({type:"onDragMove",event:lt})})},[de.x,de.y]),p.useEffect(()=>{const{active:Fe,activatorEvent:rt,collisions:st,droppableContainers:Da,scrollAdjustedTranslate:bt}=He.current;if(!Fe||H.current==null||!rt||!bt)return;const{onDragOver:lt}=_.current,Ut=Da.get(sa),Or=Ut&&Ut.rect.current?{id:Ut.id,rect:Ut.rect.current,data:Ut.data,disabled:Ut.disabled}:null,$e={active:Fe,activatorEvent:rt,collisions:st,delta:{x:bt.x,y:bt.y},over:Or};Gr.unstable_batchedUpdates(()=>{Er(Or),lt==null||lt($e),h({type:"onDragOver",event:$e})})},[sa]),Ot(()=>{He.current={activatorEvent:A,active:$,activeNode:be,collisionRect:Ne,collisions:Et,droppableRects:ie,draggableNodes:C,draggingNode:ta,draggingNodeRect:aa,droppableContainers:T,over:ht,scrollableAncestors:at,scrollAdjustedTranslate:de},O.current={initial:aa,translated:Ne}},[$,be,Et,Ne,C,ta,aa,ie,T,ht,at,de]),uk({...Mt,delta:S,draggingRect:Ne,pointerCoordinates:pn,scrollableAncestors:at,scrollableAncestorRects:Rr});const go=p.useMemo(()=>({active:$,activeNode:be,activeNodeRect:X,activatorEvent:A,collisions:Et,containerNodeRect:_t,dragOverlay:ft,draggableNodes:C,droppableContainers:T,droppableRects:ie,over:ht,measureDroppableContainers:oe,scrollableAncestors:at,scrollableAncestorRects:Rr,measuringConfiguration:Q,measuringScheduled:Ge,windowRect:Sa}),[$,be,X,A,Et,_t,ft,C,T,ie,ht,oe,at,Rr,Q,Ge,Sa]),ih=p.useMemo(()=>({activatorEvent:A,activators:Lr,active:$,activeNodeRect:X,ariaDescribedById:{draggable:K},dispatch:g,draggableNodes:C,over:ht,measureDroppableContainers:oe}),[A,Lr,$,X,g,K,C,ht,oe]);return ce.createElement(kf.Provider,{value:f},ce.createElement(mn.Provider,{value:ih},ce.createElement($f.Provider,{value:go},ce.createElement(xo.Provider,{value:zr},c)),ce.createElement(zk,{disabled:(o==null?void 0:o.restoreFocus)===!1})),ce.createElement($2,{...o,hiddenTextDescribedById:K}));function oh(){const Fe=(E==null?void 0:E.autoScrollEnabled)===!1,rt=typeof d=="object"?d.enabled===!1:d===!1,st=D&&!Fe&&!rt;return typeof d=="object"?{...d,enabled:st}:{enabled:st}}}),Ok=p.createContext(null),Hm="button",Bk="Draggable";function Hk(e){let{id:t,data:r,disabled:s=!1,attributes:l}=e;const n=dn(Bk),{activators:i,activatorEvent:o,active:d,activeNodeRect:c,ariaDescribedById:u,draggableNodes:m,over:x}=p.useContext(mn),{role:b=Hm,roleDescription:j="draggable",tabIndex:k=0}=l??{},y=(d==null?void 0:d.id)===t,g=p.useContext(y?xo:Ok),[h,f]=zi(),[v,w]=zi(),D=Nk(i,t),N=Hl(r);Ot(()=>(m.set(t,{id:t,key:n,node:h,activatorNode:v,data:N}),()=>{const S=m.get(t);S&&S.key===n&&m.delete(t)}),[m,t]);const C=p.useMemo(()=>({role:b,tabIndex:k,"aria-disabled":s,"aria-pressed":y&&b===Hm?!0:void 0,"aria-roledescription":j,"aria-describedby":u.draggable}),[s,b,k,y,j,u.draggable]);return{active:d,activatorEvent:o,activeNodeRect:c,attributes:C,isDragging:y,listeners:s?void 0:D,node:h,over:x,setNodeRef:f,setActivatorNodeRef:w,transform:g}}function Uf(){return p.useContext($f)}const $k="Droppable",_k={timeout:25};function Uk(e){let{data:t,disabled:r=!1,id:s,resizeObserverConfig:l}=e;const n=dn($k),{active:i,dispatch:o,over:d,measureDroppableContainers:c}=p.useContext(mn),u=p.useRef({disabled:r}),m=p.useRef(!1),x=p.useRef(null),b=p.useRef(null),{disabled:j,updateMeasurementsFor:k,timeout:y}={..._k,...l},g=Hl(k??s),h=p.useCallback(()=>{if(!m.current){m.current=!0;return}b.current!=null&&clearTimeout(b.current),b.current=setTimeout(()=>{c(Array.isArray(g.current)?g.current:[g.current]),b.current=null},y)},[y]),f=mo({callback:h,disabled:j||!i}),v=p.useCallback((C,S)=>{f&&(S&&(f.unobserve(S),m.current=!1),C&&f.observe(C))},[f]),[w,D]=zi(v),N=Hl(t);return p.useEffect(()=>{!f||!w.current||(f.disconnect(),m.current=!1,f.observe(w.current))},[w,f]),p.useEffect(()=>(o({type:Te.RegisterDroppable,element:{id:s,key:n,disabled:r,node:w,rect:x,data:N}}),()=>o({type:Te.UnregisterDroppable,key:n,id:s})),[s]),p.useEffect(()=>{r!==u.current.disabled&&(o({type:Te.SetDroppableDisabled,id:s,key:n,disabled:r}),u.current.disabled=r)},[s,n,r,o]),{active:i,rect:x,isOver:(d==null?void 0:d.id)===s,node:w,over:d,setNodeRef:D}}function qk(e){let{animation:t,children:r}=e;const[s,l]=p.useState(null),[n,i]=p.useState(null),o=Ai(r);return!r&&!s&&o&&l(o),Ot(()=>{if(!n)return;const d=s==null?void 0:s.key,c=s==null?void 0:s.props.id;if(d==null||c==null){l(null);return}Promise.resolve(t(c,n)).then(()=>{l(null)})},[t,s,n]),ce.createElement(ce.Fragment,null,r,s?p.cloneElement(s,{ref:i}):null)}const Fk={x:0,y:0,scaleX:1,scaleY:1};function Vk(e){let{children:t}=e;return ce.createElement(mn.Provider,{value:Hf},ce.createElement(xo.Provider,{value:Fk},t))}const Ik={position:"fixed",touchAction:"none"},Gk=e=>co(e)?"transform 250ms ease":void 0,Pk=p.forwardRef((e,t)=>{let{as:r,activatorEvent:s,adjustScale:l,children:n,className:i,rect:o,style:d,transform:c,transition:u=Gk}=e;if(!o)return null;const m=l?c:{...c,scaleX:1,scaleY:1},x={...Ik,width:o.width,height:o.height,top:o.top,left:o.left,transform:Bt.Transform.toString(m),transformOrigin:l&&s?_2(s,o):void 0,transition:typeof u=="function"?u(s):u,...d};return ce.createElement(r,{className:i,style:x,ref:t},n)}),Yk=e=>t=>{let{active:r,dragOverlay:s}=t;const l={},{styles:n,className:i}=e;if(n!=null&&n.active)for(const[o,d]of Object.entries(n.active))d!==void 0&&(l[o]=r.node.style.getPropertyValue(o),r.node.style.setProperty(o,d));if(n!=null&&n.dragOverlay)for(const[o,d]of Object.entries(n.dragOverlay))d!==void 0&&s.node.style.setProperty(o,d);return i!=null&&i.active&&r.node.classList.add(i.active),i!=null&&i.dragOverlay&&s.node.classList.add(i.dragOverlay),function(){for(const[d,c]of Object.entries(l))r.node.style.setProperty(d,c);i!=null&&i.active&&r.node.classList.remove(i.active)}},Xk=e=>{let{transform:{initial:t,final:r}}=e;return[{transform:Bt.Transform.toString(t)},{transform:Bt.Transform.toString(r)}]},Kk={duration:250,easing:"ease",keyframes:Xk,sideEffects:Yk({styles:{active:{opacity:"0"}}})};function Qk(e){let{config:t,draggableNodes:r,droppableContainers:s,measuringConfiguration:l}=e;return oo((n,i)=>{if(t===null)return;const o=r.get(n);if(!o)return;const d=o.node.current;if(!d)return;const c=Bf(i);if(!c)return;const{transform:u}=Ke(i).getComputedStyle(i),m=Sf(u);if(!m)return;const x=typeof t=="function"?t:Zk(t);return Af(d,l.draggable.measure),x({active:{id:n,data:o.data,node:d,rect:l.draggable.measure(d)},draggableNodes:r,dragOverlay:{node:i,rect:l.dragOverlay.measure(c)},droppableContainers:s,measuringConfiguration:l,transform:m})})}function Zk(e){const{duration:t,easing:r,sideEffects:s,keyframes:l}={...Kk,...e};return n=>{let{active:i,dragOverlay:o,transform:d,...c}=n;if(!t)return;const u={x:o.rect.left-i.rect.left,y:o.rect.top-i.rect.top},m={scaleX:d.scaleX!==1?i.rect.width*d.scaleX/o.rect.width:1,scaleY:d.scaleY!==1?i.rect.height*d.scaleY/o.rect.height:1},x={x:d.x-u.x,y:d.y-u.y,...m},b=l({...c,active:i,dragOverlay:o,transform:{initial:d,final:x}}),[j]=b,k=b[b.length-1];if(JSON.stringify(j)===JSON.stringify(k))return;const y=s==null?void 0:s({active:i,dragOverlay:o,...c}),g=o.node.animate(b,{duration:t,easing:r,fill:"forwards"});return new Promise(h=>{g.onfinish=()=>{y==null||y(),h()}})}}let $m=0;function Wk(e){return p.useMemo(()=>{if(e!=null)return $m++,$m},[e])}const qf=ce.memo(e=>{let{adjustScale:t=!1,children:r,dropAnimation:s,style:l,transition:n,modifiers:i,wrapperElement:o="div",className:d,zIndex:c=999}=e;const{activatorEvent:u,active:m,activeNodeRect:x,containerNodeRect:b,draggableNodes:j,droppableContainers:k,dragOverlay:y,over:g,measuringConfiguration:h,scrollableAncestors:f,scrollableAncestorRects:v,windowRect:w}=Uf(),D=p.useContext(xo),N=Wk(m==null?void 0:m.id),C=_f(i,{activatorEvent:u,active:m,activeNodeRect:x,containerNodeRect:b,draggingNodeRect:y.rect,over:g,overlayNodeRect:y.rect,scrollableAncestors:f,scrollableAncestorRects:v,transform:D,windowRect:w}),S=Du(x),T=Qk({config:s,draggableNodes:j,droppableContainers:k,measuringConfiguration:h}),z=S?y.setRef:void 0;return ce.createElement(Vk,null,ce.createElement(qk,{animation:T},m&&N?ce.createElement(Pk,{key:N,id:m.id,ref:z,as:o,activatorEvent:u,adjustScale:t,className:d,transition:n,rect:S,style:{zIndex:c,...l},transform:C},r):null))});function xn(e,t,r){const s=e.slice();return s.splice(r<0?s.length+r:r,0,s.splice(t,1)[0]),s}function Jk(e,t){return e.reduce((r,s,l)=>{const n=t.get(s);return n&&(r[l]=n),r},Array(e.length))}function On(e){return e!==null&&e>=0}function ew(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function tw(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const Ru=e=>{let{rects:t,activeIndex:r,overIndex:s,index:l}=e;const n=xn(t,s,r),i=t[l],o=n[l];return!o||!i?null:{x:o.left-i.left,y:o.top-i.top,scaleX:o.width/i.width,scaleY:o.height/i.height}},Bn={scaleX:1,scaleY:1},Ff=e=>{var t;let{activeIndex:r,activeNodeRect:s,index:l,rects:n,overIndex:i}=e;const o=(t=n[r])!=null?t:s;if(!o)return null;if(l===r){const c=n[i];return c?{x:0,y:r<i?c.top+c.height-(o.top+o.height):c.top-o.top,...Bn}:null}const d=aw(n,l,r);return l>r&&l<=i?{x:0,y:-o.height-d,...Bn}:l<r&&l>=i?{x:0,y:o.height+d,...Bn}:{x:0,y:0,...Bn}};function aw(e,t,r){const s=e[t],l=e[t-1],n=e[t+1];return s?r<t?l?s.top-(l.top+l.height):n?n.top-(s.top+s.height):0:n?n.top-(s.top+s.height):l?s.top-(l.top+l.height):0:0}const Vf="Sortable",If=ce.createContext({activeIndex:-1,containerId:Vf,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ru,disabled:{draggable:!1,droppable:!1}});function Mu(e){let{children:t,id:r,items:s,strategy:l=Ru,disabled:n=!1}=e;const{active:i,dragOverlay:o,droppableRects:d,over:c,measureDroppableContainers:u}=Uf(),m=dn(Vf,r),x=o.rect!==null,b=p.useMemo(()=>s.map(D=>typeof D=="object"&&"id"in D?D.id:D),[s]),j=i!=null,k=i?b.indexOf(i.id):-1,y=c?b.indexOf(c.id):-1,g=p.useRef(b),h=!ew(b,g.current),f=y!==-1&&k===-1||h,v=tw(n);Ot(()=>{h&&j&&u(b)},[h,b,j,u]),p.useEffect(()=>{g.current=b},[b]);const w=p.useMemo(()=>({activeIndex:k,containerId:m,disabled:v,disableTransforms:f,items:b,overIndex:y,useDragOverlay:x,sortedRects:Jk(b,d),strategy:l}),[k,m,v.draggable,v.droppable,f,b,y,d,x,l]);return ce.createElement(If.Provider,{value:w},t)}const rw=e=>{let{id:t,items:r,activeIndex:s,overIndex:l}=e;return xn(r,s,l).indexOf(t)},sw=e=>{let{containerId:t,isSorting:r,wasDragging:s,index:l,items:n,newIndex:i,previousItems:o,previousContainerId:d,transition:c}=e;return!c||!s||o!==n&&l===i?!1:r?!0:i!==l&&t===d},lw={duration:200,easing:"ease"},Gf="transform",nw=Bt.Transition.toString({property:Gf,duration:0,easing:"linear"}),iw={roleDescription:"sortable"};function ow(e){let{disabled:t,index:r,node:s,rect:l}=e;const[n,i]=p.useState(null),o=p.useRef(r);return Ot(()=>{if(!t&&r!==o.current&&s.current){const d=l.current;if(d){const c=Hs(s.current,{ignoreTransform:!0}),u={x:d.left-c.left,y:d.top-c.top,scaleX:d.width/c.width,scaleY:d.height/c.height};(u.x||u.y)&&i(u)}}r!==o.current&&(o.current=r)},[t,r,s,l]),p.useEffect(()=>{n&&i(null)},[n]),n}function po(e){let{animateLayoutChanges:t=sw,attributes:r,disabled:s,data:l,getNewIndex:n=rw,id:i,strategy:o,resizeObserverConfig:d,transition:c=lw}=e;const{items:u,containerId:m,activeIndex:x,disabled:b,disableTransforms:j,sortedRects:k,overIndex:y,useDragOverlay:g,strategy:h}=p.useContext(If),f=dw(s,b),v=u.indexOf(i),w=p.useMemo(()=>({sortable:{containerId:m,index:v,items:u},...l}),[m,l,v,u]),D=p.useMemo(()=>u.slice(u.indexOf(i)),[u,i]),{rect:N,node:C,isOver:S,setNodeRef:T}=Uk({id:i,data:w,disabled:f.droppable,resizeObserverConfig:{updateMeasurementsFor:D,...d}}),{active:z,activatorEvent:O,activeNodeRect:$,attributes:H,setNodeRef:E,listeners:R,isDragging:A,over:B,setActivatorNodeRef:_,transform:K}=Hk({id:i,data:w,attributes:{...iw,...r},disabled:f.draggable}),Ee=C2(T,E),Q=!!z,ie=Q&&!j&&On(x)&&On(y),oe=!g&&A,Ge=oe&&ie?K:null,Jt=ie?Ge??(o??h)({rects:k,activeNodeRect:$,activeIndex:x,overIndex:y,index:v}):null,Mt=On(x)&&On(y)?n({id:i,items:u,activeIndex:x,overIndex:y}):v,gt=z==null?void 0:z.id,X=p.useRef({activeId:gt,items:u,newIndex:Mt,containerId:m}),_t=u!==X.current.items,He=t({active:z,containerId:m,isDragging:A,isSorting:Q,id:i,index:v,items:u,newIndex:X.current.newIndex,previousItems:X.current.items,previousContainerId:X.current.containerId,transition:c,wasDragging:X.current.activeId!=null}),ea=ow({disabled:!He,index:v,node:C,rect:N});return p.useEffect(()=>{Q&&X.current.newIndex!==Mt&&(X.current.newIndex=Mt),m!==X.current.containerId&&(X.current.containerId=m),u!==X.current.items&&(X.current.items=u)},[Q,Mt,m,u]),p.useEffect(()=>{if(gt===X.current.activeId)return;if(gt!=null&&X.current.activeId==null){X.current.activeId=gt;return}const ta=setTimeout(()=>{X.current.activeId=gt},50);return()=>clearTimeout(ta)},[gt]),{active:z,activeIndex:x,attributes:H,data:w,rect:N,index:v,newIndex:Mt,items:u,isOver:S,isSorting:Q,isDragging:A,listeners:R,node:C,overIndex:y,over:B,setNodeRef:Ee,setActivatorNodeRef:_,setDroppableNodeRef:T,setDraggableNodeRef:E,transform:ea??Jt,transition:ft()};function ft(){if(ea||_t&&X.current.newIndex===v)return nw;if(!(oe&&!co(O)||!c)&&(Q||He))return Bt.Transition.toString({...c,property:Gf})}}function dw(e,t){var r,s;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(r=e==null?void 0:e.draggable)!=null?r:t.draggable,droppable:(s=e==null?void 0:e.droppable)!=null?s:t.droppable}}function Hi(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const cw=[P.Down,P.Right,P.Up,P.Left],Eu=(e,t)=>{let{context:{active:r,collisionRect:s,droppableRects:l,droppableContainers:n,over:i,scrollableAncestors:o}}=t;if(cw.includes(e.code)){if(e.preventDefault(),!r||!s)return;const d=[];n.getEnabled().forEach(m=>{if(!m||m!=null&&m.disabled)return;const x=l.get(m.id);if(x)switch(e.code){case P.Down:s.top<x.top&&d.push(m);break;case P.Up:s.top>x.top&&d.push(m);break;case P.Left:s.left>x.left&&d.push(m);break;case P.Right:s.left<x.left&&d.push(m);break}});const c=q2({active:r,collisionRect:s,droppableRects:l,droppableContainers:d,pointerCoordinates:null});let u=Nf(c,"id");if(u===(i==null?void 0:i.id)&&c.length>1&&(u=c[1].id),u!=null){const m=n.get(r.id),x=n.get(u),b=x?l.get(x.id):null,j=x==null?void 0:x.node.current;if(j&&b&&m&&x){const y=uo(j).some((D,N)=>o[N]!==D),g=Pf(m,x),h=uw(m,x),f=y||!g?{x:0,y:0}:{x:h?s.width-b.width:0,y:h?s.height-b.height:0},v={x:b.left,y:b.top};return f.x&&f.y?v:$l(v,f)}}}};function Pf(e,t){return!Hi(e)||!Hi(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function uw(e,t){return!Hi(e)||!Hi(t)||!Pf(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const mw=({id:e,children:t,className:r=""})=>{const{attributes:s,listeners:l,setNodeRef:n,transform:i,transition:o,isDragging:d}=po({id:e}),c={transform:Bt.Transform.toString(i),transition:o,opacity:d?.5:1};return a.jsx("div",{ref:n,style:c,className:`${r} ${d?"shadow-lg":""}`,...s,...l,children:t})},_m=({items:e=[],onReorder:t,className:r="",itemClassName:s="",children:l})=>{const[n,i]=p.useState(e),o=ju(Ns(un),Ns(cn,{coordinateGetter:Eu})),d=c=>{const{active:u,over:m}=c;u.id!==m.id&&i(x=>{const b=x.findIndex(y=>y.id===u.id),j=x.findIndex(y=>y.id===m.id),k=xn(x,b,j);return t&&t(k),k})};return a.jsx(Tu,{sensors:o,collisionDetection:Nu,onDragEnd:d,children:a.jsx(Mu,{items:n.map(c=>c.id),strategy:Ff,children:a.jsx("div",{className:r,children:n.map(c=>a.jsx(mw,{id:c.id,className:s,children:l?l(c):a.jsx("div",{className:"p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"}),a.jsx("span",{className:"text-gray-900 dark:text-blue-100 font-medium",children:c.content||c.name||c.title})]})})},c.id))})})})},xw=({id:e,children:t,className:r=""})=>{const{attributes:s,listeners:l,setNodeRef:n,transform:i,transition:o,isDragging:d}=po({id:e}),c={transform:Bt.Transform.toString(i),transition:o,opacity:d?.5:1};return a.jsx("div",{ref:n,style:c,className:`${r} ${d?"shadow-2xl scale-105":""}`,...s,...l,children:t})},pw=({items:e=[],onReorder:t,className:r="",cardClassName:s="",columns:l=3,children:n})=>{const[i,o]=p.useState(e),[d,c]=p.useState(null),u=ju(Ns(un),Ns(cn,{coordinateGetter:Eu})),m=j=>{c(j.active.id)},x=j=>{const{active:k,over:y}=j;c(null),k.id!==y.id&&o(g=>{const h=g.findIndex(w=>w.id===k.id),f=g.findIndex(w=>w.id===y.id),v=xn(g,h,f);return t&&t(v),v})},b=i.find(j=>j.id===d);return a.jsxs(Tu,{sensors:u,collisionDetection:Nu,onDragStart:m,onDragEnd:x,children:[a.jsx(Mu,{items:i.map(j=>j.id),strategy:Ru,children:a.jsx("div",{className:`grid gap-4 ${r}`,style:{gridTemplateColumns:`repeat(${l}, 1fr)`},children:i.map(j=>a.jsx(xw,{id:j.id,className:s,children:n?n(j):a.jsxs("div",{className:"p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:j.title||j.name}),a.jsx("div",{className:"w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"})]}),a.jsx("p",{className:"text-gray-600 dark:text-blue-300 text-sm",children:j.description||j.content}),j.status&&a.jsx("div",{className:"mt-3",children:a.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${j.status==="completed"?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":j.status==="in-progress"?"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200":"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`,children:j.status})})]})},j.id))})}),a.jsx(qf,{children:b?a.jsxs("div",{className:"p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-2xl opacity-90",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100",children:b.title||b.name}),a.jsx("div",{className:"w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"})]}),a.jsx("p",{className:"text-gray-600 dark:text-blue-300 text-sm",children:b.description||b.content})]}):null})]})};var Yf={exports:{}},gw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fw=gw,hw=fw;function Xf(){}function Kf(){}Kf.resetWarningCache=Xf;var bw=function(){function e(s,l,n,i,o,d){if(d!==hw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Kf,resetWarningCache:Xf};return r.PropTypes=r,r};Yf.exports=bw();var vw=Yf.exports;const se=Jm(vw);function Dr(e,t,r,s){function l(n){return n instanceof r?n:new r(function(i){i(n)})}return new(r||(r=Promise))(function(n,i){function o(u){try{c(s.next(u))}catch(m){i(m)}}function d(u){try{c(s.throw(u))}catch(m){i(m)}}function c(u){u.done?n(u.value):l(u.value).then(o,d)}c((s=s.apply(e,t||[])).next())})}const yw=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function Cs(e,t,r){const s=kw(e),{webkitRelativePath:l}=e,n=typeof t=="string"?t:typeof l=="string"&&l.length>0?l:`./${e.name}`;return typeof s.path!="string"&&Um(s,"path",n),r!==void 0&&Object.defineProperty(s,"handle",{value:r,writable:!1,configurable:!1,enumerable:!0}),Um(s,"relativePath",n),s}function kw(e){const{name:t}=e;if(t&&t.lastIndexOf(".")!==-1&&!e.type){const s=t.split(".").pop().toLowerCase(),l=yw.get(s);l&&Object.defineProperty(e,"type",{value:l,writable:!1,configurable:!1,enumerable:!0})}return e}function Um(e,t,r){Object.defineProperty(e,t,{value:r,writable:!1,configurable:!1,enumerable:!0})}const ww=[".DS_Store","Thumbs.db"];function jw(e){return Dr(this,void 0,void 0,function*(){return $i(e)&&Nw(e.dataTransfer)?Tw(e.dataTransfer,e.type):Cw(e)?Sw(e):Array.isArray(e)&&e.every(t=>"getFile"in t&&typeof t.getFile=="function")?Dw(e):[]})}function Nw(e){return $i(e)}function Cw(e){return $i(e)&&$i(e.target)}function $i(e){return typeof e=="object"&&e!==null}function Sw(e){return mc(e.target.files).map(t=>Cs(t))}function Dw(e){return Dr(this,void 0,void 0,function*(){return(yield Promise.all(e.map(r=>r.getFile()))).map(r=>Cs(r))})}function Tw(e,t){return Dr(this,void 0,void 0,function*(){if(e.items){const r=mc(e.items).filter(l=>l.kind==="file");if(t!=="drop")return r;const s=yield Promise.all(r.map(Rw));return qm(Qf(s))}return qm(mc(e.files).map(r=>Cs(r)))})}function qm(e){return e.filter(t=>ww.indexOf(t.name)===-1)}function mc(e){if(e===null)return[];const t=[];for(let r=0;r<e.length;r++){const s=e[r];t.push(s)}return t}function Rw(e){if(typeof e.webkitGetAsEntry!="function")return Fm(e);const t=e.webkitGetAsEntry();return t&&t.isDirectory?Zf(t):Fm(e,t)}function Qf(e){return e.reduce((t,r)=>[...t,...Array.isArray(r)?Qf(r):[r]],[])}function Fm(e,t){return Dr(this,void 0,void 0,function*(){var r;if(globalThis.isSecureContext&&typeof e.getAsFileSystemHandle=="function"){const n=yield e.getAsFileSystemHandle();if(n===null)throw new Error(`${e} is not a File`);if(n!==void 0){const i=yield n.getFile();return i.handle=n,Cs(i)}}const s=e.getAsFile();if(!s)throw new Error(`${e} is not a File`);return Cs(s,(r=t==null?void 0:t.fullPath)!==null&&r!==void 0?r:void 0)})}function Mw(e){return Dr(this,void 0,void 0,function*(){return e.isDirectory?Zf(e):Ew(e)})}function Zf(e){const t=e.createReader();return new Promise((r,s)=>{const l=[];function n(){t.readEntries(i=>Dr(this,void 0,void 0,function*(){if(i.length){const o=Promise.all(i.map(Mw));l.push(o),n()}else try{const o=yield Promise.all(l);r(o)}catch(o){s(o)}}),i=>{s(i)})}n()})}function Ew(e){return Dr(this,void 0,void 0,function*(){return new Promise((t,r)=>{e.file(s=>{const l=Cs(s,e.fullPath);t(l)},s=>{r(s)})})})}var dd=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(",");if(r.length===0)return!0;var s=e.name||"",l=(e.type||"").toLowerCase(),n=l.replace(/\/.*$/,"");return r.some(function(i){var o=i.trim().toLowerCase();return o.charAt(0)==="."?s.toLowerCase().endsWith(o):o.endsWith("/*")?n===o.replace(/\/.*$/,""):l===o})}return!0};function Vm(e){return Lw(e)||Aw(e)||Jf(e)||zw()}function zw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Aw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lw(e){if(Array.isArray(e))return xc(e)}function Im(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,s)}return r}function Gm(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Im(Object(r),!0).forEach(function(s){Wf(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Im(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function Wf(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ul(e,t){return Hw(e)||Bw(e,t)||Jf(e,t)||Ow()}function Ow(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jf(e,t){if(e){if(typeof e=="string")return xc(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xc(e,t)}}function xc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}function Bw(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var s=[],l=!0,n=!1,i,o;try{for(r=r.call(e);!(l=(i=r.next()).done)&&(s.push(i.value),!(t&&s.length===t));l=!0);}catch(d){n=!0,o=d}finally{try{!l&&r.return!=null&&r.return()}finally{if(n)throw o}}return s}}function Hw(e){if(Array.isArray(e))return e}var $w=typeof dd=="function"?dd:dd.default,_w="file-invalid-type",Uw="file-too-large",qw="file-too-small",Fw="too-many-files",Vw=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=t.split(","),s=r.length>1?"one of ".concat(r.join(", ")):r[0];return{code:_w,message:"File type must be ".concat(s)}},Pm=function(t){return{code:Uw,message:"File is larger than ".concat(t," ").concat(t===1?"byte":"bytes")}},Ym=function(t){return{code:qw,message:"File is smaller than ".concat(t," ").concat(t===1?"byte":"bytes")}},Iw={code:Fw,message:"Too many files"};function eh(e,t){var r=e.type==="application/x-moz-file"||$w(e,t);return[r,r?null:Vw(t)]}function th(e,t,r){if(ur(e.size))if(ur(t)&&ur(r)){if(e.size>r)return[!1,Pm(r)];if(e.size<t)return[!1,Ym(t)]}else{if(ur(t)&&e.size<t)return[!1,Ym(t)];if(ur(r)&&e.size>r)return[!1,Pm(r)]}return[!0,null]}function ur(e){return e!=null}function Gw(e){var t=e.files,r=e.accept,s=e.minSize,l=e.maxSize,n=e.multiple,i=e.maxFiles,o=e.validator;return!n&&t.length>1||n&&i>=1&&t.length>i?!1:t.every(function(d){var c=eh(d,r),u=Ul(c,1),m=u[0],x=th(d,s,l),b=Ul(x,1),j=b[0],k=o?o(d):null;return m&&j&&!k})}function _i(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function Hn(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(t){return t==="Files"||t==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Xm(e){e.preventDefault()}function Pw(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Yw(e){return e.indexOf("Edge/")!==-1}function Xw(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Pw(e)||Yw(e)}function Vt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){for(var l=arguments.length,n=new Array(l>1?l-1:0),i=1;i<l;i++)n[i-1]=arguments[i];return t.some(function(o){return!_i(s)&&o&&o.apply(void 0,[s].concat(n)),_i(s)})}}function Kw(){return"showOpenFilePicker"in window}function Qw(e){if(ur(e)){var t=Object.entries(e).filter(function(r){var s=Ul(r,2),l=s[0],n=s[1],i=!0;return ah(l)||(console.warn('Skipped "'.concat(l,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),(!Array.isArray(n)||!n.every(rh))&&(console.warn('Skipped "'.concat(l,'" because an invalid file extension was provided.')),i=!1),i}).reduce(function(r,s){var l=Ul(s,2),n=l[0],i=l[1];return Gm(Gm({},r),{},Wf({},n,i))},{});return[{description:"Files",accept:t}]}return e}function Zw(e){if(ur(e))return Object.entries(e).reduce(function(t,r){var s=Ul(r,2),l=s[0],n=s[1];return[].concat(Vm(t),[l],Vm(n))},[]).filter(function(t){return ah(t)||rh(t)}).join(",")}function Ww(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Jw(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function ah(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||e==="application/*"||/\w+\/[-+.\w]+/g.test(e)}function rh(e){return/^.*\.[\w]+$/.test(e)}var e4=["children"],t4=["open"],a4=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],r4=["refKey","onChange","onClick"];function s4(e){return i4(e)||n4(e)||sh(e)||l4()}function l4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function i4(e){if(Array.isArray(e))return pc(e)}function cd(e,t){return c4(e)||d4(e,t)||sh(e,t)||o4()}function o4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sh(e,t){if(e){if(typeof e=="string")return pc(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return pc(e,t)}}function pc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}function d4(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var s=[],l=!0,n=!1,i,o;try{for(r=r.call(e);!(l=(i=r.next()).done)&&(s.push(i.value),!(t&&s.length===t));l=!0);}catch(d){n=!0,o=d}finally{try{!l&&r.return!=null&&r.return()}finally{if(n)throw o}}return s}}function c4(e){if(Array.isArray(e))return e}function Km(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,s)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Km(Object(r),!0).forEach(function(s){gc(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Km(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function gc(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ui(e,t){if(e==null)return{};var r=u4(e,t),s,l;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)s=n[l],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function u4(e,t){if(e==null)return{};var r={},s=Object.keys(e),l,n;for(n=0;n<s.length;n++)l=s[n],!(t.indexOf(l)>=0)&&(r[l]=e[l]);return r}var zu=p.forwardRef(function(e,t){var r=e.children,s=Ui(e,e4),l=nh(s),n=l.open,i=Ui(l,t4);return p.useImperativeHandle(t,function(){return{open:n}},[n]),ce.createElement(p.Fragment,null,r(fe(fe({},i),{},{open:n})))});zu.displayName="Dropzone";var lh={disabled:!1,getFilesFromEvent:jw,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};zu.defaultProps=lh;zu.propTypes={children:se.func,accept:se.objectOf(se.arrayOf(se.string)),multiple:se.bool,preventDropOnDocument:se.bool,noClick:se.bool,noKeyboard:se.bool,noDrag:se.bool,noDragEventsBubbling:se.bool,minSize:se.number,maxSize:se.number,maxFiles:se.number,disabled:se.bool,getFilesFromEvent:se.func,onFileDialogCancel:se.func,onFileDialogOpen:se.func,useFsAccessApi:se.bool,autoFocus:se.bool,onDragEnter:se.func,onDragLeave:se.func,onDragOver:se.func,onDrop:se.func,onDropAccepted:se.func,onDropRejected:se.func,onError:se.func,validator:se.func};var fc={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function nh(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=fe(fe({},lh),e),r=t.accept,s=t.disabled,l=t.getFilesFromEvent,n=t.maxSize,i=t.minSize,o=t.multiple,d=t.maxFiles,c=t.onDragEnter,u=t.onDragLeave,m=t.onDragOver,x=t.onDrop,b=t.onDropAccepted,j=t.onDropRejected,k=t.onFileDialogCancel,y=t.onFileDialogOpen,g=t.useFsAccessApi,h=t.autoFocus,f=t.preventDropOnDocument,v=t.noClick,w=t.noKeyboard,D=t.noDrag,N=t.noDragEventsBubbling,C=t.onError,S=t.validator,T=p.useMemo(function(){return Zw(r)},[r]),z=p.useMemo(function(){return Qw(r)},[r]),O=p.useMemo(function(){return typeof y=="function"?y:Qm},[y]),$=p.useMemo(function(){return typeof k=="function"?k:Qm},[k]),H=p.useRef(null),E=p.useRef(null),R=p.useReducer(m4,fc),A=cd(R,2),B=A[0],_=A[1],K=B.isFocused,Ee=B.isFileDialogActive,Q=p.useRef(typeof window<"u"&&window.isSecureContext&&g&&Kw()),ie=function(){!Q.current&&Ee&&setTimeout(function(){if(E.current){var U=E.current.files;U.length||(_({type:"closeDialog"}),$())}},300)};p.useEffect(function(){return window.addEventListener("focus",ie,!1),function(){window.removeEventListener("focus",ie,!1)}},[E,Ee,$,Q]);var oe=p.useRef([]),Ge=function(U){H.current&&H.current.contains(U.target)||(U.preventDefault(),oe.current=[])};p.useEffect(function(){return f&&(document.addEventListener("dragover",Xm,!1),document.addEventListener("drop",Ge,!1)),function(){f&&(document.removeEventListener("dragover",Xm),document.removeEventListener("drop",Ge))}},[H,f]),p.useEffect(function(){return!s&&h&&H.current&&H.current.focus(),function(){}},[H,h,s]);var be=p.useCallback(function(L){C?C(L):console.error(L)},[C]),Jt=p.useCallback(function(L){L.preventDefault(),L.persist(),at(L),oe.current=[].concat(s4(oe.current),[L.target]),Hn(L)&&Promise.resolve(l(L)).then(function(U){if(!(_i(L)&&!N)){var ve=U.length,de=ve>0&&Gw({files:U,accept:T,minSize:i,maxSize:n,multiple:o,maxFiles:d,validator:S}),Ne=ve>0&&!de;_({isDragAccept:de,isDragReject:Ne,isDragActive:!0,type:"setDraggedFiles"}),c&&c(L)}}).catch(function(U){return be(U)})},[l,c,be,N,T,i,n,o,d,S]),Mt=p.useCallback(function(L){L.preventDefault(),L.persist(),at(L);var U=Hn(L);if(U&&L.dataTransfer)try{L.dataTransfer.dropEffect="copy"}catch{}return U&&m&&m(L),!1},[m,N]),gt=p.useCallback(function(L){L.preventDefault(),L.persist(),at(L);var U=oe.current.filter(function(de){return H.current&&H.current.contains(de)}),ve=U.indexOf(L.target);ve!==-1&&U.splice(ve,1),oe.current=U,!(U.length>0)&&(_({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Hn(L)&&u&&u(L))},[H,u,N]),X=p.useCallback(function(L,U){var ve=[],de=[];L.forEach(function(Ne){var Et=eh(Ne,T),sa=cd(Et,2),ht=sa[0],Er=sa[1],$s=th(Ne,i,n),zr=cd($s,2),sr=zr[0],Ar=zr[1],_s=S?S(Ne):null;if(ht&&sr&&!_s)ve.push(Ne);else{var Lr=[Er,Ar];_s&&(Lr=Lr.concat(_s)),de.push({file:Ne,errors:Lr.filter(function(go){return go})})}}),(!o&&ve.length>1||o&&d>=1&&ve.length>d)&&(ve.forEach(function(Ne){de.push({file:Ne,errors:[Iw]})}),ve.splice(0)),_({acceptedFiles:ve,fileRejections:de,isDragReject:de.length>0,type:"setFiles"}),x&&x(ve,de,U),de.length>0&&j&&j(de,U),ve.length>0&&b&&b(ve,U)},[_,o,T,i,n,d,x,b,j,S]),_t=p.useCallback(function(L){L.preventDefault(),L.persist(),at(L),oe.current=[],Hn(L)&&Promise.resolve(l(L)).then(function(U){_i(L)&&!N||X(U,L)}).catch(function(U){return be(U)}),_({type:"reset"})},[l,X,be,N]),He=p.useCallback(function(){if(Q.current){_({type:"openDialog"}),O();var L={multiple:o,types:z};window.showOpenFilePicker(L).then(function(U){return l(U)}).then(function(U){X(U,null),_({type:"closeDialog"})}).catch(function(U){Ww(U)?($(U),_({type:"closeDialog"})):Jw(U)?(Q.current=!1,E.current?(E.current.value=null,E.current.click()):be(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):be(U)});return}E.current&&(_({type:"openDialog"}),O(),E.current.value=null,E.current.click())},[_,O,$,g,X,be,z,o]),ea=p.useCallback(function(L){!H.current||!H.current.isEqualNode(L.target)||(L.key===" "||L.key==="Enter"||L.keyCode===32||L.keyCode===13)&&(L.preventDefault(),He())},[H,He]),ft=p.useCallback(function(){_({type:"focus"})},[]),ta=p.useCallback(function(){_({type:"blur"})},[]),aa=p.useCallback(function(){v||(Xw()?setTimeout(He,0):He())},[v,He]),ra=function(U){return s?null:U},Tr=function(U){return w?null:ra(U)},Sa=function(U){return D?null:ra(U)},at=function(U){N&&U.stopPropagation()},Rr=p.useMemo(function(){return function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},U=L.refKey,ve=U===void 0?"ref":U,de=L.role,Ne=L.onKeyDown,Et=L.onFocus,sa=L.onBlur,ht=L.onClick,Er=L.onDragEnter,$s=L.onDragOver,zr=L.onDragLeave,sr=L.onDrop,Ar=Ui(L,a4);return fe(fe(gc({onKeyDown:Tr(Vt(Ne,ea)),onFocus:Tr(Vt(Et,ft)),onBlur:Tr(Vt(sa,ta)),onClick:ra(Vt(ht,aa)),onDragEnter:Sa(Vt(Er,Jt)),onDragOver:Sa(Vt($s,Mt)),onDragLeave:Sa(Vt(zr,gt)),onDrop:Sa(Vt(sr,_t)),role:typeof de=="string"&&de!==""?de:"presentation"},ve,H),!s&&!w?{tabIndex:0}:{}),Ar)}},[H,ea,ft,ta,aa,Jt,Mt,gt,_t,w,D,s]),Mr=p.useCallback(function(L){L.stopPropagation()},[]),pn=p.useMemo(function(){return function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},U=L.refKey,ve=U===void 0?"ref":U,de=L.onChange,Ne=L.onClick,Et=Ui(L,r4),sa=gc({accept:T,multiple:o,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:ra(Vt(de,_t)),onClick:ra(Vt(Ne,Mr)),tabIndex:-1},ve,E);return fe(fe({},sa),Et)}},[E,r,o,_t,s]);return fe(fe({},B),{},{isFocused:K&&!s,getRootProps:Rr,getInputProps:pn,rootRef:H,inputRef:E,open:ra(He)})}function m4(e,t){switch(t.type){case"focus":return fe(fe({},e),{},{isFocused:!0});case"blur":return fe(fe({},e),{},{isFocused:!1});case"openDialog":return fe(fe({},fc),{},{isFileDialogActive:!0});case"closeDialog":return fe(fe({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return fe(fe({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return fe(fe({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections,isDragReject:t.isDragReject});case"reset":return fe({},fc);default:return e}}function Qm(){}const Zm=({onFilesAccepted:e,accept:t={"image/*":[".jpeg",".jpg",".png",".gif",".webp"],"application/pdf":[".pdf"],"text/*":[".txt",".md"]},maxFiles:r=10,maxSize:s=10*1024*1024,className:l="",children:n})=>{const[i,o]=p.useState([]),[d,c]=p.useState(!1),u=p.useCallback((f,v)=>{o(f),e&&e(f,v)},[e]),{getRootProps:m,getInputProps:x,isDragAccept:b,isDragReject:j,fileRejections:k}=nh({onDrop:u,accept:t,maxFiles:r,maxSize:s,onDragEnter:()=>c(!0),onDragLeave:()=>c(!1)}),y=f=>{const v=i.filter((w,D)=>D!==f);o(v)},g=f=>{if(f===0)return"0 Bytes";const v=1024,w=["Bytes","KB","MB","GB"],D=Math.floor(Math.log(f)/Math.log(v));return parseFloat((f/Math.pow(v,D)).toFixed(2))+" "+w[D]},h=f=>f.type.startsWith("image/")?a.jsx("svg",{className:"w-8 h-8 text-blue-500",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})}):f.type==="application/pdf"?a.jsx("svg",{className:"w-8 h-8 text-red-500",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})}):a.jsx("svg",{className:"w-8 h-8 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",clipRule:"evenodd"})});return a.jsxs("div",{className:`w-full ${l}`,children:[a.jsxs("div",{...m(),className:`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200
          ${b||d?"border-green-400 bg-green-50 dark:bg-green-900/20":j?"border-red-400 bg-red-50 dark:bg-red-900/20":"border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800"}
          hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20
        `,children:[a.jsx("input",{...x()}),n||a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"mx-auto w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center",children:a.jsx("svg",{className:"w-8 h-8 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-lg font-medium text-gray-900 dark:text-blue-100",children:d?"Drop files here":"Drag & drop files here"}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-300",children:"or click to select files"}),a.jsxs("p",{className:"text-xs text-gray-500 dark:text-slate-400 mt-2",children:["Supports: Images, PDFs, Text files (max ",g(s),")"]})]})]})]}),k.length>0&&a.jsxs("div",{className:"mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg",children:[a.jsx("h4",{className:"text-sm font-medium text-red-800 dark:text-red-200 mb-2",children:"Some files were rejected:"}),a.jsx("ul",{className:"text-sm text-red-700 dark:text-red-300 space-y-1",children:k.map(({file:f,errors:v})=>a.jsxs("li",{children:[f.name,": ",v.map(w=>w.message).join(", ")]},f.name))})]}),i.length>0&&a.jsxs("div",{className:"mt-6",children:[a.jsxs("h4",{className:"text-sm font-medium text-gray-900 dark:text-blue-100 mb-3",children:["Selected Files (",i.length,")"]}),a.jsx("div",{className:"space-y-2",children:i.map((f,v)=>a.jsxs("div",{className:"flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[h(f),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-blue-100",children:f.name}),a.jsx("p",{className:"text-xs text-gray-500 dark:text-slate-400",children:g(f.size)})]})]}),a.jsx("button",{onClick:()=>y(v),className:"text-gray-400 hover:text-red-500 transition-colors",children:a.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]},v))})]})]})},x4=({id:e,children:t,className:r=""})=>{const{attributes:s,listeners:l,setNodeRef:n,transform:i,transition:o,isDragging:d}=po({id:e}),c={transform:Bt.Transform.toString(i),transition:o,opacity:d?.5:1};return a.jsx("div",{ref:n,style:c,className:`${r} ${d?"shadow-lg":""}`,...s,...l,children:t})},p4=({id:e,children:t,className:r=""})=>{const{attributes:s,listeners:l,setNodeRef:n,transform:i,transition:o,isDragging:d}=po({id:e}),c={transform:Bt.Transform.toString(i),transition:o,opacity:d?.5:1};return a.jsx("div",{ref:n,style:c,className:`${r} ${d?"shadow-lg":""}`,...s,...l,children:t})},g4=({columns:e=[],onReorder:t,className:r="",columnClassName:s="",itemClassName:l="",children:n,showStats:i=!0,showProgress:o=!0})=>{const[d,c]=p.useState(e),[u,m]=p.useState(null),x=ju(Ns(un),Ns(cn,{coordinateGetter:Eu})),b=v=>{m(v.active.id)},j=v=>{const{active:w,over:D}=v;if(!D)return;const N=w.id,C=D.id,S=d.find(z=>z.items.some(O=>O.id===N)),T=d.find(z=>z.items.some(O=>O.id===C)||z.id===C);!S||!T||S.id!==T.id&&c(z=>{const O=S.items,$=T.items,H=O.findIndex(A=>A.id===N),E=$.findIndex(A=>A.id===C);let R;return C in $?R=E:R=$.length,z.map(A=>A.id===S.id?{...A,items:A.items.filter(B=>B.id!==N)}:A.id===T.id?{...A,items:[...A.items.slice(0,R),O[H],...A.items.slice(R)]}:A)})},k=v=>{const{active:w,over:D}=v;if(m(null),!D)return;const N=w.id,C=D.id,S=d.find(z=>z.items.some(O=>O.id===N)),T=d.find(z=>z.items.some(O=>O.id===C)||z.id===C);if(!(!S||!T))if(S.id===T.id){const z=S.items.findIndex($=>$.id===N),O=S.items.findIndex($=>$.id===C);z!==O&&c($=>{const H=$.map(E=>E.id===S.id?{...E,items:xn(E.items,z,O)}:E);return t&&t(H),H})}else{const z=S.items.findIndex(H=>H.id===N),O=T.items.findIndex(H=>H.id===C);let $;C in T.items?$=O:$=T.items.length,c(H=>{const E=H.map(R=>R.id===S.id?{...R,items:R.items.filter(A=>A.id!==N)}:R.id===T.id?{...R,items:[...R.items.slice(0,$),S.items[z],...R.items.slice($)]}:R);return t&&t(E),E})}},y=d.flatMap(v=>v.items).find(v=>v.id===u),g=v=>{switch(v){case"high":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-200 dark:border-red-700";case"medium":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700";case"low":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-700";default:return"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-600"}},h=v=>{switch(v){case"completed":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";case"in-progress":return"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";case"pending":return"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}},f=v=>{if(!v)return"";const w=new Date(v);return w.toLocaleDateString("en-US",{month:"short",day:"numeric",year:w.getFullYear()!==new Date().getFullYear()?"numeric":void 0})};return a.jsxs(Tu,{sensors:x,collisionDetection:Nu,onDragStart:b,onDragOver:j,onDragEnd:k,children:[a.jsx("div",{className:`flex gap-6 overflow-x-auto ${r}`,children:d.map(v=>a.jsx(p4,{id:v.id,className:`flex-1 min-w-[320px] max-w-[400px] ${s}`,children:a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-800 rounded-xl p-4 min-h-[700px] shadow-sm border border-gray-200 dark:border-slate-700 w-full",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:`w-3 h-3 rounded-full ${v.color||"bg-blue-500"}`}),a.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-blue-100",children:v.title})]}),a.jsxs("div",{className:"flex items-center space-x-2",children:[i&&a.jsxs("div",{className:"text-right",children:[a.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100",children:v.items.length}),a.jsx("div",{className:"text-xs text-gray-500 dark:text-slate-400",children:"tasks"})]}),a.jsx("div",{className:"w-8 h-8 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center",children:a.jsx("svg",{className:"w-4 h-4 text-gray-500 dark:text-slate-400",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})})]})]}),a.jsx(Mu,{items:v.items.map(w=>w.id),strategy:Ff,children:a.jsx("div",{className:"space-y-4",children:v.items.map(w=>a.jsx(x4,{id:w.id,className:l,children:n?n(w):a.jsxs("div",{className:"group p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-grab active:cursor-grabbing hover:scale-[1.01] w-full",children:[a.jsxs("div",{className:"flex items-start justify-between mb-3",children:[a.jsxs("div",{className:"flex-1 min-w-0 pr-2",children:[a.jsx("h4",{className:"text-base font-semibold text-gray-900 dark:text-blue-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors line-clamp-2 break-words",children:w.title||w.name}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-300 leading-relaxed line-clamp-3 break-words",children:w.description||w.content})]}),a.jsxs("div",{className:"flex flex-col items-end space-y-1 flex-shrink-0",children:[w.priority&&a.jsx("span",{className:`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${g(w.priority)} whitespace-nowrap`,children:w.priority}),w.status&&a.jsx("span",{className:`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${h(w.status)} whitespace-nowrap`,children:w.status})]})]}),o&&w.progress!==void 0&&a.jsxs("div",{className:"mb-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500 dark:text-slate-400 mb-2",children:[a.jsx("span",{children:"Progress"}),a.jsxs("span",{children:[w.progress,"%"]})]}),a.jsx("div",{className:"w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2",children:a.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:{width:`${w.progress}%`}})})]}),a.jsx("div",{className:"pt-3 border-t border-gray-100 dark:border-slate-600",children:a.jsxs("div",{className:"flex flex-col space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"flex items-center space-x-2 min-w-0 flex-1",children:w.assignee&&a.jsxs("div",{className:"flex items-center space-x-2 min-w-0",children:[a.jsx("div",{className:"w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0",children:w.assignee.charAt(0).toUpperCase()}),a.jsx("span",{className:"text-xs text-gray-600 dark:text-blue-300 truncate",children:w.assignee})]})}),w.dueDate&&a.jsxs("div",{className:"flex items-center space-x-1 text-xs text-gray-500 dark:text-slate-400 flex-shrink-0",children:[a.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),a.jsx("span",{className:"whitespace-nowrap",children:f(w.dueDate)})]})]}),w.tags&&w.tags.length>0&&a.jsxs("div",{className:"flex items-center space-x-1 flex-wrap",children:[w.tags.slice(0,3).map((D,N)=>a.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 dark:bg-slate-600 dark:text-gray-300 whitespace-nowrap",children:D},N)),w.tags.length>3&&a.jsxs("span",{className:"text-xs text-gray-500 dark:text-slate-400 whitespace-nowrap",children:["+",w.tags.length-3]})]})]})})]})},w.id))})})]})},v.id))}),a.jsx(qf,{children:y?a.jsxs("div",{className:"p-6 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl shadow-2xl opacity-95 transform rotate-2",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-2",children:y.title||y.name}),a.jsx("p",{className:"text-sm text-gray-600 dark:text-blue-300",children:y.description||y.content})]}):null})]})},Wm=({componentId:e,formData:t,handleInputChange:r})=>{const[s,l]=p.useState([{id:"1",content:"First item"},{id:"2",content:"Second item"},{id:"3",content:"Third item"},{id:"4",content:"Fourth item"},{id:"5",content:"Fifth item"}]),[n,i]=p.useState([{id:"1",content:"Design user interface",status:"completed"},{id:"2",content:"Implement authentication",status:"in-progress"},{id:"3",content:"Write unit tests",status:"pending"},{id:"4",content:"Deploy to production",status:"pending"}]),[o,d]=p.useState([{id:"1",title:"Website Redesign",description:"Complete UI overhaul",status:"in-progress"},{id:"2",title:"Mobile App",description:"iOS and Android development",status:"pending"},{id:"3",title:"API Integration",description:"Third-party service integration",status:"completed"},{id:"4",title:"Database Migration",description:"Move to new database system",status:"in-progress"},{id:"5",title:"Performance Optimization",description:"Improve loading times",status:"pending"},{id:"6",title:"Security Audit",description:"Review and fix security issues",status:"pending"}]),[c,u]=p.useState([{id:"todo",title:"To Do",color:"bg-red-500",items:[{id:"1",title:"Research competitors",description:"Analyze market landscape and identify key players in the industry",priority:"high",status:"pending",assignee:"John Doe",dueDate:"2024-01-15",progress:0,tags:["research","analysis"]},{id:"2",title:"Create wireframes",description:"Design user flow and create interactive mockups",priority:"medium",status:"pending",assignee:"Jane Smith",dueDate:"2024-01-20",progress:0,tags:["design","ux"]},{id:"3",title:"Setup development environment",description:"Configure tools and development workflow",priority:"low",status:"pending",assignee:"Mike Johnson",dueDate:"2024-01-10",progress:0,tags:["setup","devops"]}]},{id:"in-progress",title:"In Progress",color:"bg-yellow-500",items:[{id:"4",title:"Develop API",description:"Backend development with RESTful endpoints",priority:"high",status:"in-progress",assignee:"Sarah Wilson",dueDate:"2024-01-25",progress:65,tags:["backend","api"]},{id:"5",title:"Design UI",description:"Frontend design with modern components",priority:"medium",status:"in-progress",assignee:"Alex Brown",dueDate:"2024-01-22",progress:40,tags:["frontend","ui"]}]},{id:"review",title:"Review",color:"bg-blue-500",items:[{id:"6",title:"Code review",description:"Review pull requests and ensure code quality",priority:"medium",status:"in-progress",assignee:"David Lee",dueDate:"2024-01-18",progress:80,tags:["review","quality"]},{id:"7",title:"Security audit",description:"Perform security assessment and vulnerability testing",priority:"high",status:"in-progress",assignee:"Emma Davis",dueDate:"2024-01-30",progress:30,tags:["security","audit"]}]},{id:"done",title:"Done",color:"bg-green-500",items:[{id:"8",title:"Setup project",description:"Initial project setup and configuration",priority:"low",status:"completed",assignee:"Tom Wilson",dueDate:"2024-01-05",progress:100,tags:["setup","configuration"]},{id:"9",title:"Database design",description:"Design and implement database schema",priority:"medium",status:"completed",assignee:"Lisa Chen",dueDate:"2024-01-12",progress:100,tags:["database","schema"]}]}]),m=(x,b)=>{x.length>0,b.length>0};switch(e){case"sortable-list":return a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Basic Sortable List"}),a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-700 rounded-lg",children:a.jsx(_m,{items:s,onReorder:l,className:"space-y-3",itemClassName:"p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing"})})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Task List with Status"}),a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-700 rounded-lg",children:a.jsx(_m,{items:n,onReorder:i,className:"space-y-3",itemClassName:"p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing",children:x=>a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"}),a.jsx("span",{className:"text-gray-900 dark:text-blue-100 font-medium",children:x.content})]}),a.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${x.status==="completed"?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":x.status==="in-progress"?"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200":"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`,children:x.status})]})})})]})]});case"drag-drop-cards":return a.jsx("div",{className:"space-y-8",children:a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Project Cards - Drag to Reorder"}),a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-700 rounded-lg",children:a.jsx(pw,{items:o,onReorder:d,columns:3,className:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3",cardClassName:"p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing"})})]})});case"file-drop-zone":return a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Image Upload Zone"}),a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-700 rounded-lg",children:a.jsx(Zm,{accept:{"image/*":[".jpeg",".jpg",".png",".gif",".webp"]},maxFiles:5,maxSize:5*1024*1024,onFilesAccepted:m})})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-gray-800 dark:text-blue-100",children:"Document Upload Zone"}),a.jsx("div",{className:"p-6 bg-gray-50 dark:bg-slate-700 rounded-lg",children:a.jsx(Zm,{accept:{"application/pdf":[".pdf"],"text/*":[".txt",".md"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"]},maxFiles:10,maxSize:10*1024*1024,onFilesAccepted:m})})]})]});case"kanban-board":return a.jsx("div",{className:"w-full",children:a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-blue-100",children:"Project Management Board"}),a.jsx("div",{className:"w-full bg-gray-50 dark:bg-slate-700 rounded-xl p-4 overflow-x-auto",children:a.jsx(g4,{columns:c,onReorder:u,className:"flex gap-6 min-w-max",columnClassName:"flex-1 min-w-0",itemClassName:"",showStats:!0,showProgress:!0})})]})});default:return a.jsx("div",{children:"Component not found"})}},$n=e=>{switch(e.id){case"sortable-list":return`// Complete Sortable List Component - Copy & Paste Ready
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ id, children, className = '' }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={\`\${className} \${isDragging ? 'shadow-lg' : ''}\`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const SortableList = ({
  items = [],
  onReorder,
  className = '',
  itemClassName = '',
  children,
}) => {
  const [localItems, setLocalItems] = useState(items);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLocalItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        if (onReorder) onReorder(newItems);
        return newItems;
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={localItems.map(item => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className={className}>
          {localItems.map((item) => (
            <SortableItem
              key={item.id}
              id={item.id}
              className={itemClassName}
            >
              {children ? children(item) : (
                <div className="p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-blue-100 font-medium">
                      {item.content || item.name || item.title}
                    </span>
                  </div>
                </div>
              )}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default SortableList;`;case"drag-drop-cards":return`// Complete Drag & Drop Cards Component - Copy & Paste Ready
import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableCard = ({ id, children, className = '' }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={\`\${className} \${isDragging ? 'shadow-2xl scale-105' : ''}\`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const DragDropCard = ({
  items = [],
  onReorder,
  className = '',
  cardClassName = '',
  columns = 3,
  children,
}) => {
  const [localItems, setLocalItems] = useState(items);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (active.id !== over.id) {
      setLocalItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        if (onReorder) onReorder(newItems);
        return newItems;
      });
    }
  };

  const activeItem = localItems.find(item => item.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={localItems.map(item => item.id)}
        strategy={rectSortingStrategy}
      >
        <div className={\`grid gap-4 \${className}\`} style={{ gridTemplateColumns: \`repeat(\${columns}, 1fr)\` }}>
          {localItems.map((item) => (
            <SortableCard
              key={item.id}
              id={item.id}
              className={cardClassName}
            >
              {children ? children(item) : (
                <div className="p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                      {item.title || item.name}
                    </h3>
                    <div className="w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 dark:text-blue-300 text-sm">
                    {item.description || item.content}
                  </p>
                  {item.status && (
                    <div className="mt-3">
                      <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${
                        item.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : item.status === 'in-progress'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }\`}>
                        {item.status}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </SortableCard>
          ))}
        </div>
      </SortableContext>
      <DragOverlay>
        {activeItem ? (
          <div className="p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-2xl opacity-90">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                {activeItem.title || activeItem.name}
              </h3>
              <div className="w-2 h-2 bg-gray-400 dark:bg-slate-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 dark:text-blue-300 text-sm">
              {activeItem.description || activeItem.content}
            </p>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DragDropCard;`;case"file-drop-zone":return`// Complete File Drop Zone Component - Copy & Paste Ready
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropZone = ({
  onFilesAccepted,
  accept = {
    'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
    'application/pdf': ['.pdf'],
    'text/*': ['.txt', '.md'],
  },
  maxFiles = 10,
  maxSize = 10 * 1024 * 1024, // 10MB
  className = '',
  children,
}) => {
  const [files, setFiles] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setFiles(acceptedFiles);
    if (onFilesAccepted) {
      onFilesAccepted(acceptedFiles, rejectedFiles);
    }
  }, [onFilesAccepted]);

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={\`w-full \${className}\`}>
      <div
        {...getRootProps()}
        className={\`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200
          \${isDragAccept || isDragActive
            ? 'border-green-400 bg-green-50 dark:bg-green-900/20'
            : isDragReject
            ? 'border-red-400 bg-red-50 dark:bg-red-900/20'
            : 'border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800'
          }
          hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20
        \`}
      >
        <input {...getInputProps()} />
        {children || (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900 dark:text-blue-100">
                {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
              </p>
              <p className="text-sm text-gray-600 dark:text-blue-300">
                or click to select files
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
                Supports: Images, PDFs, Text files (max {formatFileSize(maxSize)})
              </p>
            </div>
          </div>
        )}
      </div>

      {fileRejections.length > 0 && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
            Some files were rejected:
          </h4>
          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
            {fileRejections.map(({ file, errors }) => (
              <li key={file.name}>
                {file.name}: {errors.map(e => e.message).join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-blue-100 mb-3">
            Selected Files ({files.length})
          </h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-slate-700 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-blue-100">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDropZone;`;case"kanban-board":return`// Complete Kanban Board Component - Copy & Paste Ready
import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ id, children, className = '' }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={\`\${className} \${isDragging ? 'shadow-lg' : ''}\`}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

const KanbanBoard = ({
  columns = [],
  onReorder,
  className = '',
  columnClassName = '',
  itemClassName = '',
  children,
}) => {
  const [localColumns, setLocalColumns] = useState(columns);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeContainer = localColumns.find(col => 
      col.items.some(item => item.id === activeId)
    );
    const overContainer = localColumns.find(col => 
      col.items.some(item => item.id === overId) || col.id === overId
    );

    if (!activeContainer || !overContainer) return;
    if (activeContainer.id === overContainer.id) return;

    setLocalColumns(columns => {
      const activeItems = activeContainer.items;
      const overItems = overContainer.items;

      const activeIndex = activeItems.findIndex(item => item.id === activeId);
      const overIndex = overItems.findIndex(item => item.id === overId);

      let newIndex;
      if (overId in overItems) {
        newIndex = overIndex;
      } else {
        newIndex = overItems.length;
      }

      return columns.map(column => {
        if (column.id === activeContainer.id) {
          return {
            ...column,
            items: column.items.filter(item => item.id !== activeId)
          };
        } else if (column.id === overContainer.id) {
          return {
            ...column,
            items: [
              ...column.items.slice(0, newIndex),
              activeItems[activeIndex],
              ...column.items.slice(newIndex)
            ]
          };
        }
        return column;
      });
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeContainer = localColumns.find(col => 
      col.items.some(item => item.id === activeId)
    );
    const overContainer = localColumns.find(col => 
      col.items.some(item => item.id === overId) || col.id === overId
    );

    if (!activeContainer || !overContainer) return;

    if (activeContainer.id === overContainer.id) {
      const activeIndex = activeContainer.items.findIndex(item => item.id === activeId);
      const overIndex = activeContainer.items.findIndex(item => item.id === overId);

      if (activeIndex !== overIndex) {
        setLocalColumns(columns => {
          const newColumns = columns.map(column => {
            if (column.id === activeContainer.id) {
              return {
                ...column,
                items: arrayMove(column.items, activeIndex, overIndex)
              };
            }
            return column;
          });
          if (onReorder) onReorder(newColumns);
          return newColumns;
        });
      }
    } else {
      const activeIndex = activeContainer.items.findIndex(item => item.id === activeId);
      const overIndex = overContainer.items.findIndex(item => item.id === overId);

      let newIndex;
      if (overId in overContainer.items) {
        newIndex = overIndex;
      } else {
        newIndex = overContainer.items.length;
      }

      setLocalColumns(columns => {
        const newColumns = columns.map(column => {
          if (column.id === activeContainer.id) {
            return {
              ...column,
              items: column.items.filter(item => item.id !== activeId)
            };
          } else if (column.id === overContainer.id) {
            return {
              ...column,
              items: [
                ...column.items.slice(0, newIndex),
                activeContainer.items[activeIndex],
                ...column.items.slice(newIndex)
              ]
            };
          }
          return column;
        });
        if (onReorder) onReorder(newColumns);
        return newColumns;
      });
    }
  };

  const activeItem = localColumns
    .flatMap(col => col.items)
    .find(item => item.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className={\`flex gap-6 \${className}\`}>
        {localColumns.map((column) => (
          <div
            key={column.id}
            className={\`flex-1 \${columnClassName}\`}
          >
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 min-h-[400px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-100">
                  {column.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-slate-400 bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded-full">
                  {column.items.length}
                </span>
              </div>
              <SortableContext
                items={column.items.map(item => item.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-3">
                  {column.items.map((item) => (
                    <SortableItem
                      key={item.id}
                      id={item.id}
                      className={itemClassName}
                    >
                      {children ? children(item) : (
                        <div className="p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                          <h4 className="font-medium text-gray-900 dark:text-blue-100 mb-2">
                            {item.title || item.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-blue-300 mb-3">
                            {item.description || item.content}
                          </p>
                          {item.priority && (
                            <span className={\`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium \${
                              item.priority === 'high'
                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                : item.priority === 'medium'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            }\`}>
                              {item.priority}
                            </span>
                          )}
                        </div>
                      )}
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </div>
          </div>
        ))}
      </div>
      <DragOverlay>
        {activeItem ? (
          <div className="p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg shadow-lg opacity-90">
            <h4 className="font-medium text-gray-900 dark:text-blue-100 mb-2">
              {activeItem.title || activeItem.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-blue-300">
              {activeItem.description || activeItem.content}
            </p>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;`;default:return"// Component not found"}},ud=[{id:"sortable-list",name:"Sortable List",description:"Drag and drop list items to reorder them",category:"dragdrop",href:"/dragdrop#sortable-list",icon:"📋",complexity:"intermediate",features:["Vertical reordering","Keyboard navigation","Touch support","Smooth animations","Accessibility compliant"],examples:[{name:"Basic Sortable List",component:"SortableList",props:{items:[{id:"1",content:"First item"},{id:"2",content:"Second item"},{id:"3",content:"Third item"},{id:"4",content:"Fourth item"},{id:"5",content:"Fifth item"}]}},{name:"Task List",component:"SortableList",props:{items:[{id:"1",content:"Design user interface",status:"completed"},{id:"2",content:"Implement authentication",status:"in-progress"},{id:"3",content:"Write unit tests",status:"pending"},{id:"4",content:"Deploy to production",status:"pending"}]}}]},{id:"drag-drop-cards",name:"Drag & Drop Cards",description:"Drag and drop cards in a grid layout",category:"dragdrop",href:"/dragdrop#drag-drop-cards",icon:"🃏",complexity:"intermediate",features:["Grid layout support","Drag overlay","Responsive design","Custom card content","Smooth animations"],examples:[{name:"Project Cards",component:"DragDropCard",props:{items:[{id:"1",title:"Website Redesign",description:"Complete UI overhaul",status:"in-progress"},{id:"2",title:"Mobile App",description:"iOS and Android development",status:"pending"},{id:"3",title:"API Integration",description:"Third-party service integration",status:"completed"},{id:"4",title:"Database Migration",description:"Move to new database system",status:"in-progress"},{id:"5",title:"Performance Optimization",description:"Improve loading times",status:"pending"},{id:"6",title:"Security Audit",description:"Review and fix security issues",status:"pending"}],columns:3}}]},{id:"file-drop-zone",name:"File Drop Zone",description:"Drag and drop files with preview and validation",category:"dragdrop",href:"/dragdrop#file-drop-zone",icon:"📁",complexity:"advanced",features:["File type validation","Size limits","Multiple file support","Preview functionality","Error handling"],examples:[{name:"Image Upload",component:"FileDropZone",props:{accept:{"image/*":[".jpeg",".jpg",".png",".gif",".webp"]},maxFiles:5,maxSize:5*1024*1024}},{name:"Document Upload",component:"FileDropZone",props:{accept:{"application/pdf":[".pdf"],"text/*":[".txt",".md"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"]},maxFiles:10,maxSize:10*1024*1024}}]},{id:"kanban-board",name:"Kanban Board",description:"Drag and drop items between columns",category:"dragdrop",href:"/dragdrop#kanban-board",icon:"📊",complexity:"advanced",features:["Multi-column support","Cross-column dragging","Column reordering","Item status tracking","Priority indicators"],examples:[{name:"Project Management",component:"KanbanBoard",props:{columns:[{id:"todo",title:"To Do",items:[{id:"1",title:"Research competitors",description:"Analyze market landscape",priority:"high"},{id:"2",title:"Create wireframes",description:"Design user flow",priority:"medium"}]},{id:"in-progress",title:"In Progress",items:[{id:"3",title:"Develop API",description:"Backend development",priority:"high"},{id:"4",title:"Design UI",description:"Frontend design",priority:"medium"}]},{id:"review",title:"Review",items:[{id:"5",title:"Code review",description:"Review pull requests",priority:"low"}]},{id:"done",title:"Done",items:[{id:"6",title:"Setup project",description:"Initial project setup",priority:"low"}]}]}}]}],f4=()=>{const e=Rt(),[t,r]=p.useState(null),[s,l]=p.useState({}),[n,i]=p.useState(!1);p.useEffect(()=>{const d=e.hash.substring(1),c=ud.find(u=>u.id===d);c?r(c):ud.length>0&&r(ud[0])},[e.hash]),p.useEffect(()=>{if(n){const d=setTimeout(()=>i(!1),2e3);return()=>clearTimeout(d)}},[n]);const o=d=>{const{name:c,value:u,type:m,checked:x}=d.target;l(b=>({...b,[c]:m==="checkbox"?x:u}))};return t?a.jsx("div",{className:"flex-1 p-2 sm:p-4 lg:p-6 overflow-auto",children:t.id==="kanban-board"?a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"w-full bg-white dark:bg-slate-800 rounded-lg shadow-md p-4",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-4",children:t.name}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200 mb-6 text-lg",children:t.description}),a.jsx("div",{className:"space-y-6",children:a.jsx(Wm,{componentId:t.id,formData:s,handleInputChange:o})})]}),a.jsxs("div",{className:"w-full bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-4",children:"Code Example"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600",children:[a.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-gray-200 dark:border-slate-600",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200",children:"Component Code"}),a.jsx("button",{onClick:()=>{navigator.clipboard.writeText($n(t)),i(!0),setTimeout(()=>i(!1),2e3)},className:`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${n?"text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20":"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"}`,children:n?a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:"Copied!"})]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-4 3H9m10 0a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2h3"})}),a.jsx("span",{children:"Copy Code"})]})})]}),a.jsxs("div",{className:"relative bg-gray-900 dark:bg-slate-900 rounded-b-lg overflow-hidden",children:[a.jsx("div",{className:"absolute top-3 right-3 z-10",children:a.jsxs("div",{className:"flex space-x-1",children:[a.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"})]})}),a.jsx("div",{className:"max-h-96 overflow-auto p-4",children:a.jsx("pre",{className:"text-sm text-gray-100 dark:text-gray-300 font-mono leading-relaxed whitespace-pre-wrap",children:a.jsx("code",{children:$n(t)})})})]})]}),a.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-2",children:"Usage Instructions"}),a.jsxs("div",{className:"text-sm text-gray-600 dark:text-blue-300 space-y-2",children:[a.jsx("p",{children:"• Drag and drop items between columns to change their status"}),a.jsx("p",{children:"• Reorder items within columns by dragging vertically"}),a.jsx("p",{children:"• Copy the code above to use in your project"}),a.jsx("p",{children:"• All components support keyboard navigation"}),a.jsx("p",{children:"• Built with @dnd-kit for accessibility"})]})]})]})]})]}):a.jsxs("div",{className:"flex flex-col xl:flex-row gap-4 h-full",children:[a.jsx("div",{className:"flex-1 xl:w-4/5 bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex flex-col min-h-[600px]",children:a.jsxs("div",{className:"flex-1",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-blue-100 mb-4",children:t.name}),a.jsx("p",{className:"text-gray-600 dark:text-blue-200 mb-6 text-lg",children:t.description}),a.jsx("div",{className:"space-y-6 flex-1",children:a.jsx(Wm,{componentId:t.id,formData:s,handleInputChange:o})})]})}),a.jsx("div",{className:"w-full xl:w-1/5 min-w-0 flex flex-col",children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 p-4 flex flex-col h-full min-h-[300px]",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-blue-100 mb-3 flex-shrink-0",children:"Code Example"}),a.jsxs("div",{className:"flex flex-col space-y-3 flex-1 min-h-0",children:[a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex flex-col h-[150px]",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2 flex-shrink-0",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200",children:"Component Code"}),a.jsx("button",{onClick:()=>{navigator.clipboard.writeText($n(t)),i(!0),setTimeout(()=>i(!1),2e3)},className:`flex items-center space-x-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${n?"text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20":"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"}`,children:n?a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),a.jsx("span",{children:"Copied!"})]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-4 3H9m10 0a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2h3"})}),a.jsx("span",{children:"Copy"})]})})]}),a.jsxs("div",{className:"relative flex-1 min-h-0 bg-gray-900 dark:bg-slate-900 rounded-lg border border-gray-700 dark:border-slate-600 overflow-hidden",children:[a.jsx("div",{className:"absolute top-2 right-2 z-10",children:a.jsxs("div",{className:"flex space-x-1",children:[a.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]})}),a.jsx("div",{className:"h-full overflow-auto p-3",children:a.jsx("pre",{className:"text-xs text-gray-100 dark:text-gray-300 font-mono leading-relaxed whitespace-pre-wrap",children:a.jsx("code",{children:$n(t)})})})]})]}),a.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 flex-shrink-0",children:[a.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-blue-200 mb-1",children:"Usage Instructions"}),a.jsxs("div",{className:"text-sm text-gray-600 dark:text-blue-300 space-y-1",children:[a.jsx("p",{children:"• Drag and drop items to reorder them"}),a.jsx("p",{children:"• Copy the code above to use in your project"}),a.jsx("p",{children:"• All components support keyboard navigation"}),a.jsx("p",{children:"• Built with @dnd-kit for accessibility"})]})]})]})]})})]})}):a.jsx("div",{className:"flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400",children:"Select a drag & drop component from the sidebar."})},h4=()=>{const{isCollapsed:e}=ff();return a.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors",children:[a.jsx("div",{className:"fixed left-0 top-0 z-30",children:a.jsx(hf,{})}),a.jsxs("div",{className:`flex flex-col min-h-screen transition-all duration-300 ${e?"ml-16":"ml-64"}`,children:[a.jsx(A1,{}),a.jsx("main",{className:"flex-1 overflow-auto",children:a.jsxs(Qy,{children:[a.jsx(Z,{path:"/",element:a.jsx(L1,{})}),a.jsx(Z,{path:"/inputs",element:a.jsx(U1,{})}),a.jsx(Z,{path:"/notifications",element:a.jsx(V1,{})}),a.jsx(Z,{path:"/data-display",element:a.jsx(t2,{})}),a.jsx(Z,{path:"/forms",element:a.jsx(_r,{})}),a.jsx(Z,{path:"/forms/validation",element:a.jsx(_r,{formType:"validation"})}),a.jsx(Z,{path:"/forms/wizard",element:a.jsx(_r,{formType:"wizard"})}),a.jsx(Z,{path:"/forms/multistep",element:a.jsx(_r,{formType:"multistep"})}),a.jsx(Z,{path:"/forms/search",element:a.jsx(_r,{formType:"search"})}),a.jsx(Z,{path:"/forms/filter",element:a.jsx(_r,{formType:"filter"})}),a.jsx(Z,{path:"/navigation",element:a.jsx(Ur,{})}),a.jsx(Z,{path:"/navigation/navbar",element:a.jsx(Ur,{navigationType:"navbar"})}),a.jsx(Z,{path:"/navigation/breadcrumb",element:a.jsx(Ur,{navigationType:"breadcrumb"})}),a.jsx(Z,{path:"/navigation/pagination",element:a.jsx(Ur,{navigationType:"pagination"})}),a.jsx(Z,{path:"/navigation/tabs",element:a.jsx(Ur,{navigationType:"tabs"})}),a.jsx(Z,{path:"/navigation/menu",element:a.jsx(Ur,{navigationType:"menu"})}),a.jsx(Z,{path:"/layout",element:a.jsx(nr,{})}),a.jsx(Z,{path:"/layout/header",element:a.jsx(nr,{layoutType:"header"})}),a.jsx(Z,{path:"/layout/footer",element:a.jsx(nr,{layoutType:"footer"})}),a.jsx(Z,{path:"/layout/sidebar",element:a.jsx(nr,{layoutType:"sidebar"})}),a.jsx(Z,{path:"/layout/grid",element:a.jsx(nr,{layoutType:"grid"})}),a.jsx(Z,{path:"/layout/container",element:a.jsx(nr,{layoutType:"container"})}),a.jsx(Z,{path:"/layout/card",element:a.jsx(nr,{layoutType:"card"})}),a.jsx(Z,{path:"/feedback",element:a.jsx(ir,{})}),a.jsx(Z,{path:"/feedback/alert",element:a.jsx(ir,{feedbackType:"alert"})}),a.jsx(Z,{path:"/feedback/toast",element:a.jsx(ir,{feedbackType:"toast"})}),a.jsx(Z,{path:"/feedback/modal",element:a.jsx(ir,{feedbackType:"modal"})}),a.jsx(Z,{path:"/feedback/popover",element:a.jsx(ir,{feedbackType:"popover"})}),a.jsx(Z,{path:"/feedback/tooltip",element:a.jsx(ir,{feedbackType:"tooltip"})}),a.jsx(Z,{path:"/feedback/badge",element:a.jsx(ir,{feedbackType:"badge"})}),a.jsx(Z,{path:"/dragdrop",element:a.jsx(f4,{})})]})})]})]})};function b4(){return a.jsx(E1,{children:a.jsx(z1,{children:a.jsx(y1,{children:a.jsx(h4,{})})})})}ry.createRoot(document.getElementById("root")).render(a.jsx(p.StrictMode,{children:a.jsx(b4,{})}));
