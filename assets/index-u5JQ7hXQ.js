var Dy=r=>{throw TypeError(r)};var Jp=(r,e,t)=>e.has(r)||Dy("Cannot "+t);var St=(r,e,t)=>(Jp(r,e,"read from private field"),t?t.call(r):e.get(r)),Zn=(r,e,t)=>e.has(r)?Dy("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Xn=(r,e,t,i)=>(Jp(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t),vn=(r,e,t)=>(Jp(r,e,"access private method"),t);function WT(r,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in r)){const l=Object.getOwnPropertyDescriptor(i,s);l&&Object.defineProperty(r,s,l.get?l:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function wM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $p={exports:{}},Cc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy;function qT(){if(Uy)return Cc;Uy=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:r,type:i,key:u,ref:s!==void 0?s:null,props:l}}return Cc.Fragment=e,Cc.jsx=t,Cc.jsxs=t,Cc}var Ny;function YT(){return Ny||(Ny=1,$p.exports=qT()),$p.exports}var L=YT(),em={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly;function ZT(){if(Ly)return ht;Ly=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function x(F,ie,Me){this.props=F,this.context=ie,this.refs=S,this.updater=Me||T}x.prototype.isReactComponent={},x.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function D(){}D.prototype=x.prototype;function R(F,ie,Me){this.props=F,this.context=ie,this.refs=S,this.updater=Me||T}var A=R.prototype=new D;A.constructor=R,M(A,x.prototype),A.isPureReactComponent=!0;var O=Array.isArray;function P(){}var z={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function w(F,ie,Me){var Ee=Me.ref;return{$$typeof:r,type:F,key:ie,ref:Ee!==void 0?Ee:null,props:Me}}function U(F,ie){return w(F.type,ie,F.props)}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function Q(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Me){return ie[Me]})}var ne=/\/+/g;function re(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?Q(""+F.key):ie.toString(36)}function de(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(P,P):(F.status="pending",F.then(function(ie){F.status==="pending"&&(F.status="fulfilled",F.value=ie)},function(ie){F.status==="pending"&&(F.status="rejected",F.reason=ie)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function B(F,ie,Me,Ee,De){var oe=typeof F;(oe==="undefined"||oe==="boolean")&&(F=null);var me=!1;if(F===null)me=!0;else switch(oe){case"bigint":case"string":case"number":me=!0;break;case"object":switch(F.$$typeof){case r:case e:me=!0;break;case m:return me=F._init,B(me(F._payload),ie,Me,Ee,De)}}if(me)return De=De(F),me=Ee===""?"."+re(F,0):Ee,O(De)?(Me="",me!=null&&(Me=me.replace(ne,"$&/")+"/"),B(De,ie,Me,"",function(We){return We})):De!=null&&(V(De)&&(De=U(De,Me+(De.key==null||F&&F.key===De.key?"":(""+De.key).replace(ne,"$&/")+"/")+me)),ie.push(De)),1;me=0;var Le=Ee===""?".":Ee+":";if(O(F))for(var Ve=0;Ve<F.length;Ve++)Ee=F[Ve],oe=Le+re(Ee,Ve),me+=B(Ee,ie,Me,oe,De);else if(Ve=y(F),typeof Ve=="function")for(F=Ve.call(F),Ve=0;!(Ee=F.next()).done;)Ee=Ee.value,oe=Le+re(Ee,Ve++),me+=B(Ee,ie,Me,oe,De);else if(oe==="object"){if(typeof F.then=="function")return B(de(F),ie,Me,Ee,De);throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return me}function Z(F,ie,Me){if(F==null)return F;var Ee=[],De=0;return B(F,Ee,"","",function(oe){return ie.call(Me,oe,De++)}),Ee}function W(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Me){(F._status===0||F._status===-1)&&(F._status=1,F._result=Me)},function(Me){(F._status===0||F._status===-1)&&(F._status=2,F._result=Me)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var ye=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},be={map:Z,forEach:function(F,ie,Me){Z(F,function(){ie.apply(this,arguments)},Me)},count:function(F){var ie=0;return Z(F,function(){ie++}),ie},toArray:function(F){return Z(F,function(ie){return ie})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ht.Activity=_,ht.Children=be,ht.Component=x,ht.Fragment=t,ht.Profiler=s,ht.PureComponent=R,ht.StrictMode=i,ht.Suspense=d,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ht.__COMPILER_RUNTIME={__proto__:null,c:function(F){return z.H.useMemoCache(F)}},ht.cache=function(F){return function(){return F.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(F,ie,Me){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Ee=M({},F.props),De=F.key;if(ie!=null)for(oe in ie.key!==void 0&&(De=""+ie.key),ie)!H.call(ie,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&ie.ref===void 0||(Ee[oe]=ie[oe]);var oe=arguments.length-2;if(oe===1)Ee.children=Me;else if(1<oe){for(var me=Array(oe),Le=0;Le<oe;Le++)me[Le]=arguments[Le+2];Ee.children=me}return w(F.type,De,Ee)},ht.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:l,_context:F},F},ht.createElement=function(F,ie,Me){var Ee,De={},oe=null;if(ie!=null)for(Ee in ie.key!==void 0&&(oe=""+ie.key),ie)H.call(ie,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(De[Ee]=ie[Ee]);var me=arguments.length-2;if(me===1)De.children=Me;else if(1<me){for(var Le=Array(me),Ve=0;Ve<me;Ve++)Le[Ve]=arguments[Ve+2];De.children=Le}if(F&&F.defaultProps)for(Ee in me=F.defaultProps,me)De[Ee]===void 0&&(De[Ee]=me[Ee]);return w(F,oe,De)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(F){return{$$typeof:f,render:F}},ht.isValidElement=V,ht.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:W}},ht.memo=function(F,ie){return{$$typeof:h,type:F,compare:ie===void 0?null:ie}},ht.startTransition=function(F){var ie=z.T,Me={};z.T=Me;try{var Ee=F(),De=z.S;De!==null&&De(Me,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(P,ye)}catch(oe){ye(oe)}finally{ie!==null&&Me.types!==null&&(ie.types=Me.types),z.T=ie}},ht.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ht.use=function(F){return z.H.use(F)},ht.useActionState=function(F,ie,Me){return z.H.useActionState(F,ie,Me)},ht.useCallback=function(F,ie){return z.H.useCallback(F,ie)},ht.useContext=function(F){return z.H.useContext(F)},ht.useDebugValue=function(){},ht.useDeferredValue=function(F,ie){return z.H.useDeferredValue(F,ie)},ht.useEffect=function(F,ie){return z.H.useEffect(F,ie)},ht.useEffectEvent=function(F){return z.H.useEffectEvent(F)},ht.useId=function(){return z.H.useId()},ht.useImperativeHandle=function(F,ie,Me){return z.H.useImperativeHandle(F,ie,Me)},ht.useInsertionEffect=function(F,ie){return z.H.useInsertionEffect(F,ie)},ht.useLayoutEffect=function(F,ie){return z.H.useLayoutEffect(F,ie)},ht.useMemo=function(F,ie){return z.H.useMemo(F,ie)},ht.useOptimistic=function(F,ie){return z.H.useOptimistic(F,ie)},ht.useReducer=function(F,ie,Me){return z.H.useReducer(F,ie,Me)},ht.useRef=function(F){return z.H.useRef(F)},ht.useState=function(F){return z.H.useState(F)},ht.useSyncExternalStore=function(F,ie,Me){return z.H.useSyncExternalStore(F,ie,Me)},ht.useTransition=function(){return z.H.useTransition()},ht.version="19.2.0",ht}var Oy;function u_(){return Oy||(Oy=1,em.exports=ZT()),em.exports}var Oe=u_();const f_=wM(Oe),KT=WT({__proto__:null,default:f_},[Oe]);var tm={exports:{}},Dc={},nm={exports:{}},im={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py;function QT(){return Py||(Py=1,(function(r){function e(B,Z){var W=B.length;B.push(Z);e:for(;0<W;){var ye=W-1>>>1,be=B[ye];if(0<s(be,Z))B[ye]=Z,B[W]=be,W=ye;else break e}}function t(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var Z=B[0],W=B.pop();if(W!==Z){B[0]=W;e:for(var ye=0,be=B.length,F=be>>>1;ye<F;){var ie=2*(ye+1)-1,Me=B[ie],Ee=ie+1,De=B[Ee];if(0>s(Me,W))Ee<be&&0>s(De,Me)?(B[ye]=De,B[Ee]=W,ye=Ee):(B[ye]=Me,B[ie]=W,ye=ie);else if(Ee<be&&0>s(De,W))B[ye]=De,B[Ee]=W,ye=Ee;else break e}}return Z}function s(B,Z){var W=B.sortIndex-Z.sortIndex;return W!==0?W:B.id-Z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,_=null,v=3,y=!1,T=!1,M=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var Z=t(h);Z!==null;){if(Z.callback===null)i(h);else if(Z.startTime<=B)i(h),Z.sortIndex=Z.expirationTime,e(d,Z);else break;Z=t(h)}}function O(B){if(M=!1,A(B),!T)if(t(d)!==null)T=!0,P||(P=!0,Q());else{var Z=t(h);Z!==null&&de(O,Z.startTime-B)}}var P=!1,z=-1,H=5,w=-1;function U(){return S?!0:!(r.unstable_now()-w<H)}function V(){if(S=!1,P){var B=r.unstable_now();w=B;var Z=!0;try{e:{T=!1,M&&(M=!1,D(z),z=-1),y=!0;var W=v;try{t:{for(A(B),_=t(d);_!==null&&!(_.expirationTime>B&&U());){var ye=_.callback;if(typeof ye=="function"){_.callback=null,v=_.priorityLevel;var be=ye(_.expirationTime<=B);if(B=r.unstable_now(),typeof be=="function"){_.callback=be,A(B),Z=!0;break t}_===t(d)&&i(d),A(B)}else i(d);_=t(d)}if(_!==null)Z=!0;else{var F=t(h);F!==null&&de(O,F.startTime-B),Z=!1}}break e}finally{_=null,v=W,y=!1}Z=void 0}}finally{Z?Q():P=!1}}}var Q;if(typeof R=="function")Q=function(){R(V)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=V,Q=function(){re.postMessage(null)}}else Q=function(){x(V,0)};function de(B,Z){z=x(function(){B(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var W=v;v=Z;try{return B()}finally{v=W}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=v;v=B;try{return Z()}finally{v=W}},r.unstable_scheduleCallback=function(B,Z,W){var ye=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ye+W:ye):W=ye,B){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=W+be,B={id:m++,callback:Z,priorityLevel:B,startTime:W,expirationTime:be,sortIndex:-1},W>ye?(B.sortIndex=W,e(h,B),t(d)===null&&B===t(h)&&(M?(D(z),z=-1):M=!0,de(O,W-ye))):(B.sortIndex=be,e(d,B),T||y||(T=!0,P||(P=!0,Q()))),B},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(B){var Z=v;return function(){var W=v;v=Z;try{return B.apply(this,arguments)}finally{v=W}}}})(im)),im}var zy;function JT(){return zy||(zy=1,nm.exports=QT()),nm.exports}var am={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy;function $T(){if(Iy)return Kn;Iy=1;var r=u_();function e(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,h,m){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:_==null?null:""+_,children:d,containerInfo:h,implementation:m}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Kn.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(d,h,null,m)},Kn.flushSync=function(d){var h=u.T,m=i.p;try{if(u.T=null,i.p=2,d)return d()}finally{u.T=h,i.p=m,i.d.f()}},Kn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(d,h))},Kn.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},Kn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?i.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):m==="script"&&i.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Kn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);i.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(d)},Kn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin);i.d.L(d,m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Kn.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);i.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(d)},Kn.requestFormReset=function(d){i.d.r(d)},Kn.unstable_batchedUpdates=function(d,h){return d(h)},Kn.useFormState=function(d,h,m){return u.H.useFormState(d,h,m)},Kn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Kn.version="19.2.0",Kn}var By;function RM(){if(By)return am.exports;By=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),am.exports=$T(),am.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy;function eA(){if(Fy)return Dc;Fy=1;var r=JT(),e=u_(),t=RM();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function f(n){if(n.tag===31){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(i(188))}function h(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,c=a;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){o=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return d(p),n;if(g===c)return d(p),a;g=g.sibling}throw Error(i(188))}if(o.return!==c.return)o=p,c=g;else{for(var E=!1,C=p.child;C;){if(C===o){E=!0,o=p,c=g;break}if(C===c){E=!0,c=p,o=g;break}C=C.sibling}if(!E){for(C=g.child;C;){if(C===o){E=!0,o=g,c=p;break}if(C===c){E=!0,c=g,o=p;break}C=C.sibling}if(!E)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function m(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=m(n),a!==null)return a;n=n.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),R=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Symbol.for("react.client.reference");function re(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ne?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList";case w:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case T:return"Portal";case R:return n.displayName||"Context";case D:return(n._context.displayName||"Context")+".Consumer";case A:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return a=n.displayName||null,a!==null?a:re(n.type)||"Memo";case H:a=n._payload,n=n._init;try{return re(n(a))}catch{}}return null}var de=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ye=[],be=-1;function F(n){return{current:n}}function ie(n){0>be||(n.current=ye[be],ye[be]=null,be--)}function Me(n,a){be++,ye[be]=n.current,n.current=a}var Ee=F(null),De=F(null),oe=F(null),me=F(null);function Le(n,a){switch(Me(oe,a),Me(De,n),Me(Ee,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?$x(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=$x(a),n=ey(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ie(Ee),Me(Ee,n)}function Ve(){ie(Ee),ie(De),ie(oe)}function We(n){n.memoizedState!==null&&Me(me,n);var a=Ee.current,o=ey(a,n.type);a!==o&&(Me(De,n),Me(Ee,o))}function lt(n){De.current===n&&(ie(Ee),ie(De)),me.current===n&&(ie(me),Tc._currentValue=W)}var Ht,G;function Mt(n){if(Ht===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);Ht=a&&a[1]||"",G=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ht+n+G}var at=!1;function et(n,a){if(!n||at)return"";at=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(pe){var ce=pe}Reflect.construct(n,[],xe)}else{try{xe.call()}catch(pe){ce=pe}n.call(xe.prototype)}}else{try{throw Error()}catch(pe){ce=pe}(xe=n())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(pe){if(pe&&ce&&typeof pe.stack=="string")return[pe.stack,ce.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),E=g[0],C=g[1];if(E&&C){var X=E.split(`
`),le=C.split(`
`);for(p=c=0;c<X.length&&!X[c].includes("DetermineComponentFrameRoot");)c++;for(;p<le.length&&!le[p].includes("DetermineComponentFrameRoot");)p++;if(c===X.length||p===le.length)for(c=X.length-1,p=le.length-1;1<=c&&0<=p&&X[c]!==le[p];)p--;for(;1<=c&&0<=p;c--,p--)if(X[c]!==le[p]){if(c!==1||p!==1)do if(c--,p--,0>p||X[c]!==le[p]){var ge=`
`+X[c].replace(" at new "," at ");return n.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",n.displayName)),ge}while(1<=c&&0<=p);break}}}finally{at=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Mt(o):""}function K(n,a){switch(n.tag){case 26:case 27:case 5:return Mt(n.type);case 16:return Mt("Lazy");case 13:return n.child!==a&&a!==null?Mt("Suspense Fallback"):Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 15:return et(n.type,!1);case 11:return et(n.type.render,!1);case 1:return et(n.type,!0);case 31:return Mt("Activity");default:return""}}function xt(n){try{var a="",o=null;do a+=K(n,o),o=n,n=n.return;while(n);return a}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var je=Object.prototype.hasOwnProperty,ot=r.unstable_scheduleCallback,Gt=r.unstable_cancelCallback,Bt=r.unstable_shouldYield,I=r.unstable_requestPaint,b=r.unstable_now,k=r.unstable_getCurrentPriorityLevel,te=r.unstable_ImmediatePriority,ue=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,Ue=r.unstable_LowPriority,Re=r.unstable_IdlePriority,ke=r.log,He=r.unstable_setDisableYieldValue,Ae=null,Ce=null;function $e(n){if(typeof ke=="function"&&He(n),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Ae,n)}catch{}}var Be=Math.clz32?Math.clz32:q,Pe=Math.log,ft=Math.LN2;function q(n){return n>>>=0,n===0?32:31-(Pe(n)/ft|0)|0}var we=256,Ne=262144,Xe=4194304;function Te(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ve(n,a,o){var c=n.pendingLanes;if(c===0)return 0;var p=0,g=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var C=c&134217727;return C!==0?(c=C&~g,c!==0?p=Te(c):(E&=C,E!==0?p=Te(E):o||(o=C&~n,o!==0&&(p=Te(o))))):(C=c&~g,C!==0?p=Te(C):E!==0?p=Te(E):o||(o=c&~n,o!==0&&(p=Te(o)))),p===0?0:a!==0&&a!==p&&(a&g)===0&&(g=p&-p,o=a&-a,g>=o||g===32&&(o&4194048)!==0)?a:p}function qe(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function ut(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var n=Xe;return Xe<<=1,(Xe&62914560)===0&&(Xe=4194304),n}function Fe(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function Qe(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function dt(n,a,o,c,p,g){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var C=n.entanglements,X=n.expirationTimes,le=n.hiddenUpdates;for(o=E&~o;0<o;){var ge=31-Be(o),xe=1<<ge;C[ge]=0,X[ge]=-1;var ce=le[ge];if(ce!==null)for(le[ge]=null,ge=0;ge<ce.length;ge++){var pe=ce[ge];pe!==null&&(pe.lane&=-536870913)}o&=~xe}c!==0&&sn(n,c,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(E&~a))}function sn(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-Be(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|o&261930}function on(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var c=31-Be(o),p=1<<c;p&a|n[c]&a&&(n[c]|=a),o&=~p}}function ti(n,a){var o=a&-a;return o=(o&42)!==0?1:va(o),(o&(n.suspendedLanes|a))!==0?0:o}function va(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function so(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function cs(){var n=Z.p;return n!==0?n:(n=window.event,n===void 0?32:by(n.type))}function Hl(n,a){var o=Z.p;try{return Z.p=n,a()}finally{Z.p=o}}var Ei=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Ei,Bn="__reactProps$"+Ei,pr="__reactContainer$"+Ei,Gl="__reactEvents$"+Ei,Wh="__reactListeners$"+Ei,qh="__reactHandles$"+Ei,yu="__reactResources$"+Ei,us="__reactMarker$"+Ei;function N(n){delete n[Sn],delete n[Bn],delete n[Gl],delete n[Wh],delete n[qh]}function J(n){var a=n[Sn];if(a)return a;for(var o=n.parentNode;o;){if(a=o[pr]||o[Sn]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=oy(n);n!==null;){if(o=n[Sn])return o;n=oy(n)}return a}n=o,o=n.parentNode}return null}function fe(n){if(n=n[Sn]||n[pr]){var a=n.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return n}return null}function he(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function ee(n){var a=n[yu];return a||(a=n[yu]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Se(n){n[us]=!0}var ze=new Set,Ze={};function Ge(n,a){tt(n,a),tt(n+"Capture",a)}function tt(n,a){for(Ze[n]=a,n=0;n<a.length;n++)ze.add(a[n])}var ct=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},yt={};function Vt(n){return je.call(yt,n)?!0:je.call(nt,n)?!1:ct.test(n)?yt[n]=!0:(nt[n]=!0,!1)}function Qt(n,a,o){if(Vt(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function kt(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function bt(n,a,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+c)}}function Ke(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nn(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Nt(n,a,o){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,a);if(!n.hasOwnProperty(a)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,g=c.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return p.call(this)},set:function(E){o=""+E,g.call(this,E)}}),Object.defineProperty(n,a,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Fn(n){if(!n._valueTracker){var a=nn(n)?"checked":"value";n._valueTracker=Nt(n,a,""+n[a])}}function Pa(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),c="";return n&&(c=nn(n)?n.checked?"true":"false":n.value),n=c,n!==o?(a.setValue(n),!0):!1}function On(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var fs=/[\n"\\]/g;function wt(n){return n.replace(fs,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Yn(n,a,o,c,p,g,E,C){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),a!=null?E==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Ke(a)):n.value!==""+Ke(a)&&(n.value=""+Ke(a)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),a!=null?Dn(n,E,Ke(a)):o!=null?Dn(n,E,Ke(o)):c!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?n.name=""+Ke(C):n.removeAttribute("name")}function ni(n,a,o,c,p,g,E,C){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||a!=null)){Fn(n);return}o=o!=null?""+Ke(o):"",a=a!=null?""+Ke(a):o,C||a===n.value||(n.value=a),n.defaultValue=a}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=C?n.checked:!!c,n.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E),Fn(n)}function Dn(n,a,o){a==="number"&&On(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function mn(n,a,o,c){if(n=n.options,a){a={};for(var p=0;p<o.length;p++)a["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=a.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Ke(o),a=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}a!==null||n[p].disabled||(a=n[p])}a!==null&&(a.selected=!0)}}function oo(n,a,o){if(a!=null&&(a=""+Ke(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+Ke(o):""}function xa(n,a,o,c){if(a==null){if(c!=null){if(o!=null)throw Error(i(92));if(de(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),a=o}o=Ke(a),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c),Fn(n)}function lo(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var G1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function K_(n,a,o){var c=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,o):typeof o!="number"||o===0||G1.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function Q_(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in a)c=a[p],a.hasOwnProperty(p)&&o[p]!==c&&K_(n,p,c)}else for(var g in a)a.hasOwnProperty(g)&&K_(n,g,a[g])}function Yh(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Su(n){return k1.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function za(){}var Zh=null;function Kh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var co=null,uo=null;function J_(n){var a=fe(n);if(a&&(n=a.stateNode)){var o=n[Bn]||null;e:switch(n=a.stateNode,a.type){case"input":if(Yn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+wt(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var c=o[a];if(c!==n&&c.form===n.form){var p=c[Bn]||null;if(!p)throw Error(i(90));Yn(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(a=0;a<o.length;a++)c=o[a],c.form===n.form&&Pa(c)}break e;case"textarea":oo(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&mn(n,!!o.multiple,a,!1)}}}var Qh=!1;function $_(n,a,o){if(Qh)return n(a,o);Qh=!0;try{var c=n(a);return c}finally{if(Qh=!1,(co!==null||uo!==null)&&(cf(),co&&(a=co,n=uo,uo=co=null,J_(a),n)))for(a=0;a<n.length;a++)J_(n[a])}}function Vl(n,a){var o=n.stateNode;if(o===null)return null;var c=o[Bn]||null;if(c===null)return null;o=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var Ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jh=!1;if(Ia)try{var kl={};Object.defineProperty(kl,"passive",{get:function(){Jh=!0}}),window.addEventListener("test",kl,kl),window.removeEventListener("test",kl,kl)}catch{Jh=!1}var mr=null,$h=null,Mu=null;function e0(){if(Mu)return Mu;var n,a=$h,o=a.length,c,p="value"in mr?mr.value:mr.textContent,g=p.length;for(n=0;n<o&&a[n]===p[n];n++);var E=o-n;for(c=1;c<=E&&a[o-c]===p[g-c];c++);return Mu=p.slice(n,1<c?1-c:void 0)}function bu(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Eu(){return!0}function t0(){return!1}function hi(n){function a(o,c,p,g,E){this._reactName=o,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(o=n[C],this[C]=o?o(g):g[C]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Eu:t0,this.isPropagationStopped=t0,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Eu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Eu)},persist:function(){},isPersistent:Eu}),a}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=hi(hs),Xl=_({},hs,{view:0,detail:0}),X1=hi(Xl),ed,td,jl,Au=_({},Xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jl&&(jl&&n.type==="mousemove"?(ed=n.screenX-jl.screenX,td=n.screenY-jl.screenY):td=ed=0,jl=n),ed)},movementY:function(n){return"movementY"in n?n.movementY:td}}),n0=hi(Au),j1=_({},Au,{dataTransfer:0}),W1=hi(j1),q1=_({},Xl,{relatedTarget:0}),nd=hi(q1),Y1=_({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Z1=hi(Y1),K1=_({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Q1=hi(K1),J1=_({},hs,{data:0}),i0=hi(J1),$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nE(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=tE[n])?!!a[n]:!1}function id(){return nE}var iE=_({},Xl,{key:function(n){if(n.key){var a=$1[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=bu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?eE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(n){return n.type==="keypress"?bu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),aE=hi(iE),rE=_({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a0=hi(rE),sE=_({},Xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),oE=hi(sE),lE=_({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),cE=hi(lE),uE=_({},Au,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=hi(uE),hE=_({},hs,{newState:0,oldState:0}),dE=hi(hE),pE=[9,13,27,32],ad=Ia&&"CompositionEvent"in window,Wl=null;Ia&&"documentMode"in document&&(Wl=document.documentMode);var mE=Ia&&"TextEvent"in window&&!Wl,r0=Ia&&(!ad||Wl&&8<Wl&&11>=Wl),s0=" ",o0=!1;function l0(n,a){switch(n){case"keyup":return pE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fo=!1;function gE(n,a){switch(n){case"compositionend":return c0(a);case"keypress":return a.which!==32?null:(o0=!0,s0);case"textInput":return n=a.data,n===s0&&o0?null:n;default:return null}}function _E(n,a){if(fo)return n==="compositionend"||!ad&&l0(n,a)?(n=e0(),Mu=$h=mr=null,fo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return r0&&a.locale!=="ko"?null:a.data;default:return null}}var vE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function u0(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!vE[n.type]:a==="textarea"}function f0(n,a,o,c){co?uo?uo.push(c):uo=[c]:co=c,a=gf(a,"onChange"),0<a.length&&(o=new Tu("onChange","change",null,o,c),n.push({event:o,listeners:a}))}var ql=null,Yl=null;function xE(n){qx(n,0)}function wu(n){var a=he(n);if(Pa(a))return n}function h0(n,a){if(n==="change")return a}var d0=!1;if(Ia){var rd;if(Ia){var sd="oninput"in document;if(!sd){var p0=document.createElement("div");p0.setAttribute("oninput","return;"),sd=typeof p0.oninput=="function"}rd=sd}else rd=!1;d0=rd&&(!document.documentMode||9<document.documentMode)}function m0(){ql&&(ql.detachEvent("onpropertychange",g0),Yl=ql=null)}function g0(n){if(n.propertyName==="value"&&wu(Yl)){var a=[];f0(a,Yl,n,Kh(n)),$_(xE,a)}}function yE(n,a,o){n==="focusin"?(m0(),ql=a,Yl=o,ql.attachEvent("onpropertychange",g0)):n==="focusout"&&m0()}function SE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wu(Yl)}function ME(n,a){if(n==="click")return wu(a)}function bE(n,a){if(n==="input"||n==="change")return wu(a)}function EE(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Ti=typeof Object.is=="function"?Object.is:EE;function Zl(n,a){if(Ti(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),c=Object.keys(a);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var p=o[c];if(!je.call(a,p)||!Ti(n[p],a[p]))return!1}return!0}function _0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function v0(n,a){var o=_0(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=a&&c>=a)return{node:o,offset:a-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=_0(o)}}function x0(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?x0(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function y0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=On(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=On(n.document)}return a}function od(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var TE=Ia&&"documentMode"in document&&11>=document.documentMode,ho=null,ld=null,Kl=null,cd=!1;function S0(n,a,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;cd||ho==null||ho!==On(c)||(c=ho,"selectionStart"in c&&od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Kl&&Zl(Kl,c)||(Kl=c,c=gf(ld,"onSelect"),0<c.length&&(a=new Tu("onSelect","select",null,a,o),n.push({event:a,listeners:c}),a.target=ho)))}function ds(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var po={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},ud={},M0={};Ia&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function ps(n){if(ud[n])return ud[n];if(!po[n])return n;var a=po[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in M0)return ud[n]=a[o];return n}var b0=ps("animationend"),E0=ps("animationiteration"),T0=ps("animationstart"),AE=ps("transitionrun"),wE=ps("transitionstart"),RE=ps("transitioncancel"),A0=ps("transitionend"),w0=new Map,fd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fd.push("scrollEnd");function oa(n,a){w0.set(n,a),Ge(a,[n])}var Ru=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Xi=[],mo=0,hd=0;function Cu(){for(var n=mo,a=hd=mo=0;a<n;){var o=Xi[a];Xi[a++]=null;var c=Xi[a];Xi[a++]=null;var p=Xi[a];Xi[a++]=null;var g=Xi[a];if(Xi[a++]=null,c!==null&&p!==null){var E=c.pending;E===null?p.next=p:(p.next=E.next,E.next=p),c.pending=p}g!==0&&R0(o,p,g)}}function Du(n,a,o,c){Xi[mo++]=n,Xi[mo++]=a,Xi[mo++]=o,Xi[mo++]=c,hd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function dd(n,a,o,c){return Du(n,a,o,c),Uu(n)}function ms(n,a){return Du(n,null,null,a),Uu(n)}function R0(n,a,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var p=!1,g=n.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,p&&a!==null&&(p=31-Be(o),n=g.hiddenUpdates,c=n[p],c===null?n[p]=[a]:c.push(a),a.lane=o|536870912),g):null}function Uu(n){if(50<vc)throw vc=0,Mp=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var go={};function CE(n,a,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,a,o,c){return new CE(n,a,o,c)}function pd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ba(n,a){var o=n.alternate;return o===null?(o=Ai(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function C0(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Nu(n,a,o,c,p,g){var E=0;if(c=n,typeof n=="function")pd(n)&&(E=1);else if(typeof n=="string")E=OT(n,o,Ee.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case w:return n=Ai(31,o,a,p),n.elementType=w,n.lanes=g,n;case M:return gs(o.children,p,g,a);case S:E=8,p|=24;break;case x:return n=Ai(12,o,a,p|2),n.elementType=x,n.lanes=g,n;case O:return n=Ai(13,o,a,p),n.elementType=O,n.lanes=g,n;case P:return n=Ai(19,o,a,p),n.elementType=P,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case D:E=9;break e;case A:E=11;break e;case z:E=14;break e;case H:E=16,c=null;break e}E=29,o=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=Ai(E,o,a,p),a.elementType=n,a.type=c,a.lanes=g,a}function gs(n,a,o,c){return n=Ai(7,n,c,a),n.lanes=o,n}function md(n,a,o){return n=Ai(6,n,null,a),n.lanes=o,n}function D0(n){var a=Ai(18,null,null,0);return a.stateNode=n,a}function gd(n,a,o){return a=Ai(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var U0=new WeakMap;function ji(n,a){if(typeof n=="object"&&n!==null){var o=U0.get(n);return o!==void 0?o:(a={value:n,source:a,stack:xt(a)},U0.set(n,a),a)}return{value:n,source:a,stack:xt(a)}}var _o=[],vo=0,Lu=null,Ql=0,Wi=[],qi=0,gr=null,ya=1,Sa="";function Fa(n,a){_o[vo++]=Ql,_o[vo++]=Lu,Lu=n,Ql=a}function N0(n,a,o){Wi[qi++]=ya,Wi[qi++]=Sa,Wi[qi++]=gr,gr=n;var c=ya;n=Sa;var p=32-Be(c)-1;c&=~(1<<p),o+=1;var g=32-Be(a)+p;if(30<g){var E=p-p%5;g=(c&(1<<E)-1).toString(32),c>>=E,p-=E,ya=1<<32-Be(a)+p|o<<p|c,Sa=g+n}else ya=1<<g|o<<p|c,Sa=n}function _d(n){n.return!==null&&(Fa(n,1),N0(n,1,0))}function vd(n){for(;n===Lu;)Lu=_o[--vo],_o[vo]=null,Ql=_o[--vo],_o[vo]=null;for(;n===gr;)gr=Wi[--qi],Wi[qi]=null,Sa=Wi[--qi],Wi[qi]=null,ya=Wi[--qi],Wi[qi]=null}function L0(n,a){Wi[qi++]=ya,Wi[qi++]=Sa,Wi[qi++]=gr,ya=a.id,Sa=a.overflow,gr=n}var Hn=null,an=null,Dt=!1,_r=null,Yi=!1,xd=Error(i(519));function vr(n){var a=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jl(ji(a,n)),xd}function O0(n){var a=n.stateNode,o=n.type,c=n.memoizedProps;switch(a[Sn]=n,a[Bn]=c,o){case"dialog":Tt("cancel",a),Tt("close",a);break;case"iframe":case"object":case"embed":Tt("load",a);break;case"video":case"audio":for(o=0;o<yc.length;o++)Tt(yc[o],a);break;case"source":Tt("error",a);break;case"img":case"image":case"link":Tt("error",a),Tt("load",a);break;case"details":Tt("toggle",a);break;case"input":Tt("invalid",a),ni(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Tt("invalid",a);break;case"textarea":Tt("invalid",a),xa(a,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||c.suppressHydrationWarning===!0||Qx(a.textContent,o)?(c.popover!=null&&(Tt("beforetoggle",a),Tt("toggle",a)),c.onScroll!=null&&Tt("scroll",a),c.onScrollEnd!=null&&Tt("scrollend",a),c.onClick!=null&&(a.onclick=za),a=!0):a=!1,a||vr(n,!0)}function P0(n){for(Hn=n.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:Yi=!1;return;case 27:case 3:Yi=!0;return;default:Hn=Hn.return}}function xo(n){if(n!==Hn)return!1;if(!Dt)return P0(n),Dt=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Ip(n.type,n.memoizedProps)),o=!o),o&&an&&vr(n),P0(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));an=sy(n)}else if(a===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));an=sy(n)}else a===27?(a=an,Nr(n.type)?(n=Vp,Vp=null,an=n):an=a):an=Hn?Ki(n.stateNode.nextSibling):null;return!0}function _s(){an=Hn=null,Dt=!1}function yd(){var n=_r;return n!==null&&(gi===null?gi=n:gi.push.apply(gi,n),_r=null),n}function Jl(n){_r===null?_r=[n]:_r.push(n)}var Sd=F(null),vs=null,Ha=null;function xr(n,a,o){Me(Sd,a._currentValue),a._currentValue=o}function Ga(n){n._currentValue=Sd.current,ie(Sd)}function Md(n,a,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===o)break;n=n.return}}function bd(n,a,o,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var E=p.child;g=g.firstContext;e:for(;g!==null;){var C=g;g=p;for(var X=0;X<a.length;X++)if(C.context===a[X]){g.lanes|=o,C=g.alternate,C!==null&&(C.lanes|=o),Md(g.return,o,n),c||(E=null);break e}g=C.next}}else if(p.tag===18){if(E=p.return,E===null)throw Error(i(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),Md(E,o,n),E=null}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===n){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}}function yo(n,a,o,c){n=null;for(var p=a,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var E=p.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var C=p.type;Ti(p.pendingProps.value,E.value)||(n!==null?n.push(C):n=[C])}}else if(p===me.current){if(E=p.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(Tc):n=[Tc])}p=p.return}n!==null&&bd(a,n,o,c),a.flags|=262144}function Ou(n){for(n=n.firstContext;n!==null;){if(!Ti(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function xs(n){vs=n,Ha=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Gn(n){return z0(vs,n)}function Pu(n,a){return vs===null&&xs(n),z0(n,a)}function z0(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},Ha===null){if(n===null)throw Error(i(308));Ha=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Ha=Ha.next=a;return o}var DE=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},UE=r.unstable_scheduleCallback,NE=r.unstable_NormalPriority,Mn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ed(){return{controller:new DE,data:new Map,refCount:0}}function $l(n){n.refCount--,n.refCount===0&&UE(NE,function(){n.controller.abort()})}var ec=null,Td=0,So=0,Mo=null;function LE(n,a){if(ec===null){var o=ec=[];Td=0,So=Rp(),Mo={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Td++,a.then(I0,I0),a}function I0(){if(--Td===0&&ec!==null){Mo!==null&&(Mo.status="fulfilled");var n=ec;ec=null,So=0,Mo=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function OE(n,a){var o=[],c={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var p=0;p<o.length;p++)(0,o[p])(a)},function(p){for(c.status="rejected",c.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),c}var B0=B.S;B.S=function(n,a){Sx=b(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&LE(n,a),B0!==null&&B0(n,a)};var ys=F(null);function Ad(){var n=ys.current;return n!==null?n:Jt.pooledCache}function zu(n,a){a===null?Me(ys,ys.current):Me(ys,a.pool)}function F0(){var n=Ad();return n===null?null:{parent:Mn._currentValue,pool:n}}var bo=Error(i(460)),wd=Error(i(474)),Iu=Error(i(542)),Bu={then:function(){}};function H0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function G0(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then(za,za),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,k0(n),n;default:if(typeof a.status=="string")a.then(za,za);else{if(n=Jt,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var p=a;p.status="fulfilled",p.value=c}},function(c){if(a.status==="pending"){var p=a;p.status="rejected",p.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,k0(n),n}throw Ms=a,bo}}function Ss(n){try{var a=n._init;return a(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ms=o,bo):o}}var Ms=null;function V0(){if(Ms===null)throw Error(i(459));var n=Ms;return Ms=null,n}function k0(n){if(n===bo||n===Iu)throw Error(i(483))}var Eo=null,tc=0;function Fu(n){var a=tc;return tc+=1,Eo===null&&(Eo=[]),G0(Eo,n,a)}function nc(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function Hu(n,a){throw a.$$typeof===v?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function X0(n){function a($,j){if(n){var se=$.deletions;se===null?($.deletions=[j],$.flags|=16):se.push(j)}}function o($,j){if(!n)return null;for(;j!==null;)a($,j),j=j.sibling;return null}function c($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function p($,j){return $=Ba($,j),$.index=0,$.sibling=null,$}function g($,j,se){return $.index=se,n?(se=$.alternate,se!==null?(se=se.index,se<j?($.flags|=67108866,j):se):($.flags|=67108866,j)):($.flags|=1048576,j)}function E($){return n&&$.alternate===null&&($.flags|=67108866),$}function C($,j,se,_e){return j===null||j.tag!==6?(j=md(se,$.mode,_e),j.return=$,j):(j=p(j,se),j.return=$,j)}function X($,j,se,_e){var it=se.type;return it===M?ge($,j,se.props.children,_e,se.key):j!==null&&(j.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===H&&Ss(it)===j.type)?(j=p(j,se.props),nc(j,se),j.return=$,j):(j=Nu(se.type,se.key,se.props,null,$.mode,_e),nc(j,se),j.return=$,j)}function le($,j,se,_e){return j===null||j.tag!==4||j.stateNode.containerInfo!==se.containerInfo||j.stateNode.implementation!==se.implementation?(j=gd(se,$.mode,_e),j.return=$,j):(j=p(j,se.children||[]),j.return=$,j)}function ge($,j,se,_e,it){return j===null||j.tag!==7?(j=gs(se,$.mode,_e,it),j.return=$,j):(j=p(j,se),j.return=$,j)}function xe($,j,se){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=md(""+j,$.mode,se),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return se=Nu(j.type,j.key,j.props,null,$.mode,se),nc(se,j),se.return=$,se;case T:return j=gd(j,$.mode,se),j.return=$,j;case H:return j=Ss(j),xe($,j,se)}if(de(j)||Q(j))return j=gs(j,$.mode,se,null),j.return=$,j;if(typeof j.then=="function")return xe($,Fu(j),se);if(j.$$typeof===R)return xe($,Pu($,j),se);Hu($,j)}return null}function ce($,j,se,_e){var it=j!==null?j.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return it!==null?null:C($,j,""+se,_e);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case y:return se.key===it?X($,j,se,_e):null;case T:return se.key===it?le($,j,se,_e):null;case H:return se=Ss(se),ce($,j,se,_e)}if(de(se)||Q(se))return it!==null?null:ge($,j,se,_e,null);if(typeof se.then=="function")return ce($,j,Fu(se),_e);if(se.$$typeof===R)return ce($,j,Pu($,se),_e);Hu($,se)}return null}function pe($,j,se,_e,it){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return $=$.get(se)||null,C(j,$,""+_e,it);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case y:return $=$.get(_e.key===null?se:_e.key)||null,X(j,$,_e,it);case T:return $=$.get(_e.key===null?se:_e.key)||null,le(j,$,_e,it);case H:return _e=Ss(_e),pe($,j,se,_e,it)}if(de(_e)||Q(_e))return $=$.get(se)||null,ge(j,$,_e,it,null);if(typeof _e.then=="function")return pe($,j,se,Fu(_e),it);if(_e.$$typeof===R)return pe($,j,se,Pu(j,_e),it);Hu(j,_e)}return null}function Ye($,j,se,_e){for(var it=null,Pt=null,Je=j,gt=j=0,Ct=null;Je!==null&&gt<se.length;gt++){Je.index>gt?(Ct=Je,Je=null):Ct=Je.sibling;var zt=ce($,Je,se[gt],_e);if(zt===null){Je===null&&(Je=Ct);break}n&&Je&&zt.alternate===null&&a($,Je),j=g(zt,j,gt),Pt===null?it=zt:Pt.sibling=zt,Pt=zt,Je=Ct}if(gt===se.length)return o($,Je),Dt&&Fa($,gt),it;if(Je===null){for(;gt<se.length;gt++)Je=xe($,se[gt],_e),Je!==null&&(j=g(Je,j,gt),Pt===null?it=Je:Pt.sibling=Je,Pt=Je);return Dt&&Fa($,gt),it}for(Je=c(Je);gt<se.length;gt++)Ct=pe(Je,$,gt,se[gt],_e),Ct!==null&&(n&&Ct.alternate!==null&&Je.delete(Ct.key===null?gt:Ct.key),j=g(Ct,j,gt),Pt===null?it=Ct:Pt.sibling=Ct,Pt=Ct);return n&&Je.forEach(function(Ir){return a($,Ir)}),Dt&&Fa($,gt),it}function st($,j,se,_e){if(se==null)throw Error(i(151));for(var it=null,Pt=null,Je=j,gt=j=0,Ct=null,zt=se.next();Je!==null&&!zt.done;gt++,zt=se.next()){Je.index>gt?(Ct=Je,Je=null):Ct=Je.sibling;var Ir=ce($,Je,zt.value,_e);if(Ir===null){Je===null&&(Je=Ct);break}n&&Je&&Ir.alternate===null&&a($,Je),j=g(Ir,j,gt),Pt===null?it=Ir:Pt.sibling=Ir,Pt=Ir,Je=Ct}if(zt.done)return o($,Je),Dt&&Fa($,gt),it;if(Je===null){for(;!zt.done;gt++,zt=se.next())zt=xe($,zt.value,_e),zt!==null&&(j=g(zt,j,gt),Pt===null?it=zt:Pt.sibling=zt,Pt=zt);return Dt&&Fa($,gt),it}for(Je=c(Je);!zt.done;gt++,zt=se.next())zt=pe(Je,$,gt,zt.value,_e),zt!==null&&(n&&zt.alternate!==null&&Je.delete(zt.key===null?gt:zt.key),j=g(zt,j,gt),Pt===null?it=zt:Pt.sibling=zt,Pt=zt);return n&&Je.forEach(function(jT){return a($,jT)}),Dt&&Fa($,gt),it}function Zt($,j,se,_e){if(typeof se=="object"&&se!==null&&se.type===M&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case y:e:{for(var it=se.key;j!==null;){if(j.key===it){if(it=se.type,it===M){if(j.tag===7){o($,j.sibling),_e=p(j,se.props.children),_e.return=$,$=_e;break e}}else if(j.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===H&&Ss(it)===j.type){o($,j.sibling),_e=p(j,se.props),nc(_e,se),_e.return=$,$=_e;break e}o($,j);break}else a($,j);j=j.sibling}se.type===M?(_e=gs(se.props.children,$.mode,_e,se.key),_e.return=$,$=_e):(_e=Nu(se.type,se.key,se.props,null,$.mode,_e),nc(_e,se),_e.return=$,$=_e)}return E($);case T:e:{for(it=se.key;j!==null;){if(j.key===it)if(j.tag===4&&j.stateNode.containerInfo===se.containerInfo&&j.stateNode.implementation===se.implementation){o($,j.sibling),_e=p(j,se.children||[]),_e.return=$,$=_e;break e}else{o($,j);break}else a($,j);j=j.sibling}_e=gd(se,$.mode,_e),_e.return=$,$=_e}return E($);case H:return se=Ss(se),Zt($,j,se,_e)}if(de(se))return Ye($,j,se,_e);if(Q(se)){if(it=Q(se),typeof it!="function")throw Error(i(150));return se=it.call(se),st($,j,se,_e)}if(typeof se.then=="function")return Zt($,j,Fu(se),_e);if(se.$$typeof===R)return Zt($,j,Pu($,se),_e);Hu($,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,j!==null&&j.tag===6?(o($,j.sibling),_e=p(j,se),_e.return=$,$=_e):(o($,j),_e=md(se,$.mode,_e),_e.return=$,$=_e),E($)):o($,j)}return function($,j,se,_e){try{tc=0;var it=Zt($,j,se,_e);return Eo=null,it}catch(Je){if(Je===bo||Je===Iu)throw Je;var Pt=Ai(29,Je,null,$.mode);return Pt.lanes=_e,Pt.return=$,Pt}finally{}}}var bs=X0(!0),j0=X0(!1),yr=!1;function Rd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cd(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Sr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Mr(n,a,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ft&2)!==0){var p=c.pending;return p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a,a=Uu(n),R0(n,null,o),a}return Du(n,c,a,o),Uu(n)}function ic(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,on(n,o)}}function Dd(n,a){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?p=g=a:g=g.next=a}else p=g=a;o={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var Ud=!1;function ac(){if(Ud){var n=Mo;if(n!==null)throw n}}function rc(n,a,o,c){Ud=!1;var p=n.updateQueue;yr=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var X=C,le=X.next;X.next=null,E===null?g=le:E.next=le,E=X;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,C=ge.lastBaseUpdate,C!==E&&(C===null?ge.firstBaseUpdate=le:C.next=le,ge.lastBaseUpdate=X))}if(g!==null){var xe=p.baseState;E=0,ge=le=X=null,C=g;do{var ce=C.lane&-536870913,pe=ce!==C.lane;if(pe?(Rt&ce)===ce:(c&ce)===ce){ce!==0&&ce===So&&(Ud=!0),ge!==null&&(ge=ge.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ye=n,st=C;ce=a;var Zt=o;switch(st.tag){case 1:if(Ye=st.payload,typeof Ye=="function"){xe=Ye.call(Zt,xe,ce);break e}xe=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=st.payload,ce=typeof Ye=="function"?Ye.call(Zt,xe,ce):Ye,ce==null)break e;xe=_({},xe,ce);break e;case 2:yr=!0}}ce=C.callback,ce!==null&&(n.flags|=64,pe&&(n.flags|=8192),pe=p.callbacks,pe===null?p.callbacks=[ce]:pe.push(ce))}else pe={lane:ce,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ge===null?(le=ge=pe,X=xe):ge=ge.next=pe,E|=ce;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;pe=C,C=pe.next,pe.next=null,p.lastBaseUpdate=pe,p.shared.pending=null}}while(!0);ge===null&&(X=xe),p.baseState=X,p.firstBaseUpdate=le,p.lastBaseUpdate=ge,g===null&&(p.shared.lanes=0),wr|=E,n.lanes=E,n.memoizedState=xe}}function W0(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function q0(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)W0(o[n],a)}var To=F(null),Gu=F(0);function Y0(n,a){n=Ka,Me(Gu,n),Me(To,a),Ka=n|a.baseLanes}function Nd(){Me(Gu,Ka),Me(To,To.current)}function Ld(){Ka=Gu.current,ie(To),ie(Gu)}var wi=F(null),Zi=null;function br(n){var a=n.alternate;Me(gn,gn.current&1),Me(wi,n),Zi===null&&(a===null||To.current!==null||a.memoizedState!==null)&&(Zi=n)}function Od(n){Me(gn,gn.current),Me(wi,n),Zi===null&&(Zi=n)}function Z0(n){n.tag===22?(Me(gn,gn.current),Me(wi,n),Zi===null&&(Zi=n)):Er()}function Er(){Me(gn,gn.current),Me(wi,wi.current)}function Ri(n){ie(wi),Zi===n&&(Zi=null),ie(gn)}var gn=F(0);function Vu(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Hp(o)||Gp(o)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Va=0,pt=null,qt=null,bn=null,ku=!1,Ao=!1,Es=!1,Xu=0,sc=0,wo=null,PE=0;function hn(){throw Error(i(321))}function Pd(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!Ti(n[o],a[o]))return!1;return!0}function zd(n,a,o,c,p,g){return Va=g,pt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=n===null||n.memoizedState===null?Nv:Qd,Es=!1,g=o(c,p),Es=!1,Ao&&(g=Q0(a,o,c,p)),K0(n),g}function K0(n){B.H=cc;var a=qt!==null&&qt.next!==null;if(Va=0,bn=qt=pt=null,ku=!1,sc=0,wo=null,a)throw Error(i(300));n===null||En||(n=n.dependencies,n!==null&&Ou(n)&&(En=!0))}function Q0(n,a,o,c){pt=n;var p=0;do{if(Ao&&(wo=null),sc=0,Ao=!1,25<=p)throw Error(i(301));if(p+=1,bn=qt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=Lv,g=a(o,c)}while(Ao);return g}function zE(){var n=B.H,a=n.useState()[0];return a=typeof a.then=="function"?oc(a):a,n=n.useState()[0],(qt!==null?qt.memoizedState:null)!==n&&(pt.flags|=1024),a}function Id(){var n=Xu!==0;return Xu=0,n}function Bd(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function Fd(n){if(ku){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ku=!1}Va=0,bn=qt=pt=null,Ao=!1,sc=Xu=0,wo=null}function ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?pt.memoizedState=bn=n:bn=bn.next=n,bn}function _n(){if(qt===null){var n=pt.alternate;n=n!==null?n.memoizedState:null}else n=qt.next;var a=bn===null?pt.memoizedState:bn.next;if(a!==null)bn=a,qt=n;else{if(n===null)throw pt.alternate===null?Error(i(467)):Error(i(310));qt=n,n={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},bn===null?pt.memoizedState=bn=n:bn=bn.next=n}return bn}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oc(n){var a=sc;return sc+=1,wo===null&&(wo=[]),n=G0(wo,n,a),a=pt,(bn===null?a.memoizedState:bn.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?Nv:Qd),n}function Wu(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return oc(n);if(n.$$typeof===R)return Gn(n)}throw Error(i(438,String(n)))}function Hd(n){var a=null,o=pt.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var c=pt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(p){return p.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=ju(),pt.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),c=0;c<n;c++)o[c]=U;return a.index++,o}function ka(n,a){return typeof a=="function"?a(n):a}function qu(n){var a=_n();return Gd(a,qt,n)}function Gd(n,a,o){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var p=n.baseQueue,g=c.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}a.baseQueue=p=g,c.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{a=p.next;var C=E=null,X=null,le=a,ge=!1;do{var xe=le.lane&-536870913;if(xe!==le.lane?(Rt&xe)===xe:(Va&xe)===xe){var ce=le.revertLane;if(ce===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),xe===So&&(ge=!0);else if((Va&ce)===ce){le=le.next,ce===So&&(ge=!0);continue}else xe={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},X===null?(C=X=xe,E=g):X=X.next=xe,pt.lanes|=ce,wr|=ce;xe=le.action,Es&&o(g,xe),g=le.hasEagerState?le.eagerState:o(g,xe)}else ce={lane:xe,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},X===null?(C=X=ce,E=g):X=X.next=ce,pt.lanes|=xe,wr|=xe;le=le.next}while(le!==null&&le!==a);if(X===null?E=g:X.next=C,!Ti(g,n.memoizedState)&&(En=!0,ge&&(o=Mo,o!==null)))throw o;n.memoizedState=g,n.baseState=E,n.baseQueue=X,c.lastRenderedState=g}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Vd(n){var a=_n(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var c=o.dispatch,p=o.pending,g=a.memoizedState;if(p!==null){o.pending=null;var E=p=p.next;do g=n(g,E.action),E=E.next;while(E!==p);Ti(g,a.memoizedState)||(En=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),o.lastRenderedState=g}return[g,c]}function J0(n,a,o){var c=pt,p=_n(),g=Dt;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=a();var E=!Ti((qt||p).memoizedState,o);if(E&&(p.memoizedState=o,En=!0),p=p.queue,jd(tv.bind(null,c,p,n),[n]),p.getSnapshot!==a||E||bn!==null&&bn.memoizedState.tag&1){if(c.flags|=2048,Ro(9,{destroy:void 0},ev.bind(null,c,p,o,a),null),Jt===null)throw Error(i(349));g||(Va&127)!==0||$0(c,a,o)}return o}function $0(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=pt.updateQueue,a===null?(a=ju(),pt.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function ev(n,a,o,c){a.value=o,a.getSnapshot=c,nv(a)&&iv(n)}function tv(n,a,o){return o(function(){nv(a)&&iv(n)})}function nv(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!Ti(n,o)}catch{return!0}}function iv(n){var a=ms(n,2);a!==null&&_i(a,n,2)}function kd(n){var a=ii();if(typeof n=="function"){var o=n;if(n=o(),Es){$e(!0);try{o()}finally{$e(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},a}function av(n,a,o,c){return n.baseState=o,Gd(n,qt,typeof c=="function"?c:ka)}function IE(n,a,o,c,p){if(Ku(n))throw Error(i(485));if(n=a.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};B.T!==null?o(!0):g.isTransition=!1,c(g),o=a.pending,o===null?(g.next=a.pending=g,rv(a,g)):(g.next=o.next,a.pending=o.next=g)}}function rv(n,a){var o=a.action,c=a.payload,p=n.state;if(a.isTransition){var g=B.T,E={};B.T=E;try{var C=o(p,c),X=B.S;X!==null&&X(E,C),sv(n,a,C)}catch(le){Xd(n,a,le)}finally{g!==null&&E.types!==null&&(g.types=E.types),B.T=g}}else try{g=o(p,c),sv(n,a,g)}catch(le){Xd(n,a,le)}}function sv(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){ov(n,a,c)},function(c){return Xd(n,a,c)}):ov(n,a,o)}function ov(n,a,o){a.status="fulfilled",a.value=o,lv(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,rv(n,o)))}function Xd(n,a,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=o,lv(a),a=a.next;while(a!==c)}n.action=null}function lv(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function cv(n,a){return a}function uv(n,a){if(Dt){var o=Jt.formState;if(o!==null){e:{var c=pt;if(Dt){if(an){t:{for(var p=an,g=Yi;p.nodeType!==8;){if(!g){p=null;break t}if(p=Ki(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){an=Ki(p.nextSibling),c=p.data==="F!";break e}}vr(c)}c=!1}c&&(a=o[0])}}return o=ii(),o.memoizedState=o.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cv,lastRenderedState:a},o.queue=c,o=Cv.bind(null,pt,c),c.dispatch=o,c=kd(!1),g=Kd.bind(null,pt,!1,c.queue),c=ii(),p={state:a,dispatch:null,action:n,pending:null},c.queue=p,o=IE.bind(null,pt,p,g,o),p.dispatch=o,c.memoizedState=n,[a,o,!1]}function fv(n){var a=_n();return hv(a,qt,n)}function hv(n,a,o){if(a=Gd(n,a,cv)[0],n=qu(ka)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=oc(a)}catch(E){throw E===bo?Iu:E}else c=a;a=_n();var p=a.queue,g=p.dispatch;return o!==a.memoizedState&&(pt.flags|=2048,Ro(9,{destroy:void 0},BE.bind(null,p,o),null)),[c,g,n]}function BE(n,a){n.action=a}function dv(n){var a=_n(),o=qt;if(o!==null)return hv(a,o,n);_n(),a=a.memoizedState,o=_n();var c=o.queue.dispatch;return o.memoizedState=n,[a,c,!1]}function Ro(n,a,o,c){return n={tag:n,create:o,deps:c,inst:a,next:null},a=pt.updateQueue,a===null&&(a=ju(),pt.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,a.lastEffect=n),n}function pv(){return _n().memoizedState}function Yu(n,a,o,c){var p=ii();pt.flags|=n,p.memoizedState=Ro(1|a,{destroy:void 0},o,c===void 0?null:c)}function Zu(n,a,o,c){var p=_n();c=c===void 0?null:c;var g=p.memoizedState.inst;qt!==null&&c!==null&&Pd(c,qt.memoizedState.deps)?p.memoizedState=Ro(a,g,o,c):(pt.flags|=n,p.memoizedState=Ro(1|a,g,o,c))}function mv(n,a){Yu(8390656,8,n,a)}function jd(n,a){Zu(2048,8,n,a)}function FE(n){pt.flags|=4;var a=pt.updateQueue;if(a===null)a=ju(),pt.updateQueue=a,a.events=[n];else{var o=a.events;o===null?a.events=[n]:o.push(n)}}function gv(n){var a=_n().memoizedState;return FE({ref:a,nextImpl:n}),function(){if((Ft&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}function _v(n,a){return Zu(4,2,n,a)}function vv(n,a){return Zu(4,4,n,a)}function xv(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function yv(n,a,o){o=o!=null?o.concat([n]):null,Zu(4,4,xv.bind(null,a,n),o)}function Wd(){}function Sv(n,a){var o=_n();a=a===void 0?null:a;var c=o.memoizedState;return a!==null&&Pd(a,c[1])?c[0]:(o.memoizedState=[n,a],n)}function Mv(n,a){var o=_n();a=a===void 0?null:a;var c=o.memoizedState;if(a!==null&&Pd(a,c[1]))return c[0];if(c=n(),Es){$e(!0);try{n()}finally{$e(!1)}}return o.memoizedState=[c,a],c}function qd(n,a,o){return o===void 0||(Va&1073741824)!==0&&(Rt&261930)===0?n.memoizedState=a:(n.memoizedState=o,n=bx(),pt.lanes|=n,wr|=n,o)}function bv(n,a,o,c){return Ti(o,a)?o:To.current!==null?(n=qd(n,o,c),Ti(n,a)||(En=!0),n):(Va&42)===0||(Va&1073741824)!==0&&(Rt&261930)===0?(En=!0,n.memoizedState=o):(n=bx(),pt.lanes|=n,wr|=n,a)}function Ev(n,a,o,c,p){var g=Z.p;Z.p=g!==0&&8>g?g:8;var E=B.T,C={};B.T=C,Kd(n,!1,a,o);try{var X=p(),le=B.S;if(le!==null&&le(C,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var ge=OE(X,c);lc(n,a,ge,Ui(n))}else lc(n,a,c,Ui(n))}catch(xe){lc(n,a,{then:function(){},status:"rejected",reason:xe},Ui())}finally{Z.p=g,E!==null&&C.types!==null&&(E.types=C.types),B.T=E}}function HE(){}function Yd(n,a,o,c){if(n.tag!==5)throw Error(i(476));var p=Tv(n).queue;Ev(n,p,a,W,o===null?HE:function(){return Av(n),o(c)})}function Tv(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:W},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Av(n){var a=Tv(n);a.next===null&&(a=n.alternate.memoizedState),lc(n,a.next.queue,{},Ui())}function Zd(){return Gn(Tc)}function wv(){return _n().memoizedState}function Rv(){return _n().memoizedState}function GE(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=Ui();n=Sr(o);var c=Mr(a,n,o);c!==null&&(_i(c,a,o),ic(c,a,o)),a={cache:Ed()},n.payload=a;return}a=a.return}}function VE(n,a,o){var c=Ui();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ku(n)?Dv(a,o):(o=dd(n,a,o,c),o!==null&&(_i(o,n,c),Uv(o,a,c)))}function Cv(n,a,o){var c=Ui();lc(n,a,o,c)}function lc(n,a,o,c){var p={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ku(n))Dv(a,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var E=a.lastRenderedState,C=g(E,o);if(p.hasEagerState=!0,p.eagerState=C,Ti(C,E))return Du(n,a,p,0),Jt===null&&Cu(),!1}catch{}finally{}if(o=dd(n,a,p,c),o!==null)return _i(o,n,c),Uv(o,a,c),!0}return!1}function Kd(n,a,o,c){if(c={lane:2,revertLane:Rp(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Ku(n)){if(a)throw Error(i(479))}else a=dd(n,o,c,2),a!==null&&_i(a,n,2)}function Ku(n){var a=n.alternate;return n===pt||a!==null&&a===pt}function Dv(n,a){Ao=ku=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function Uv(n,a,o){if((o&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,on(n,o)}}var cc={readContext:Gn,use:Wu,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};cc.useEffectEvent=hn;var Nv={readContext:Gn,use:Wu,useCallback:function(n,a){return ii().memoizedState=[n,a===void 0?null:a],n},useContext:Gn,useEffect:mv,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,Yu(4194308,4,xv.bind(null,a,n),o)},useLayoutEffect:function(n,a){return Yu(4194308,4,n,a)},useInsertionEffect:function(n,a){Yu(4,2,n,a)},useMemo:function(n,a){var o=ii();a=a===void 0?null:a;var c=n();if(Es){$e(!0);try{n()}finally{$e(!1)}}return o.memoizedState=[c,a],c},useReducer:function(n,a,o){var c=ii();if(o!==void 0){var p=o(a);if(Es){$e(!0);try{o(a)}finally{$e(!1)}}}else p=a;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=VE.bind(null,pt,n),[c.memoizedState,n]},useRef:function(n){var a=ii();return n={current:n},a.memoizedState=n},useState:function(n){n=kd(n);var a=n.queue,o=Cv.bind(null,pt,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:Wd,useDeferredValue:function(n,a){var o=ii();return qd(o,n,a)},useTransition:function(){var n=kd(!1);return n=Ev.bind(null,pt,n.queue,!0,!1),ii().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var c=pt,p=ii();if(Dt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),Jt===null)throw Error(i(349));(Rt&127)!==0||$0(c,a,o)}p.memoizedState=o;var g={value:o,getSnapshot:a};return p.queue=g,mv(tv.bind(null,c,g,n),[n]),c.flags|=2048,Ro(9,{destroy:void 0},ev.bind(null,c,g,o,a),null),o},useId:function(){var n=ii(),a=Jt.identifierPrefix;if(Dt){var o=Sa,c=ya;o=(c&~(1<<32-Be(c)-1)).toString(32)+o,a="_"+a+"R_"+o,o=Xu++,0<o&&(a+="H"+o.toString(32)),a+="_"}else o=PE++,a="_"+a+"r_"+o.toString(32)+"_";return n.memoizedState=a},useHostTransitionStatus:Zd,useFormState:uv,useActionState:uv,useOptimistic:function(n){var a=ii();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=Kd.bind(null,pt,!0,o),o.dispatch=a,[n,a]},useMemoCache:Hd,useCacheRefresh:function(){return ii().memoizedState=GE.bind(null,pt)},useEffectEvent:function(n){var a=ii(),o={impl:n};return a.memoizedState=o,function(){if((Ft&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},Qd={readContext:Gn,use:Wu,useCallback:Sv,useContext:Gn,useEffect:jd,useImperativeHandle:yv,useInsertionEffect:_v,useLayoutEffect:vv,useMemo:Mv,useReducer:qu,useRef:pv,useState:function(){return qu(ka)},useDebugValue:Wd,useDeferredValue:function(n,a){var o=_n();return bv(o,qt.memoizedState,n,a)},useTransition:function(){var n=qu(ka)[0],a=_n().memoizedState;return[typeof n=="boolean"?n:oc(n),a]},useSyncExternalStore:J0,useId:wv,useHostTransitionStatus:Zd,useFormState:fv,useActionState:fv,useOptimistic:function(n,a){var o=_n();return av(o,qt,n,a)},useMemoCache:Hd,useCacheRefresh:Rv};Qd.useEffectEvent=gv;var Lv={readContext:Gn,use:Wu,useCallback:Sv,useContext:Gn,useEffect:jd,useImperativeHandle:yv,useInsertionEffect:_v,useLayoutEffect:vv,useMemo:Mv,useReducer:Vd,useRef:pv,useState:function(){return Vd(ka)},useDebugValue:Wd,useDeferredValue:function(n,a){var o=_n();return qt===null?qd(o,n,a):bv(o,qt.memoizedState,n,a)},useTransition:function(){var n=Vd(ka)[0],a=_n().memoizedState;return[typeof n=="boolean"?n:oc(n),a]},useSyncExternalStore:J0,useId:wv,useHostTransitionStatus:Zd,useFormState:dv,useActionState:dv,useOptimistic:function(n,a){var o=_n();return qt!==null?av(o,qt,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Hd,useCacheRefresh:Rv};Lv.useEffectEvent=gv;function Jd(n,a,o,c){a=n.memoizedState,o=o(c,a),o=o==null?a:_({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var $d={enqueueSetState:function(n,a,o){n=n._reactInternals;var c=Ui(),p=Sr(c);p.payload=a,o!=null&&(p.callback=o),a=Mr(n,p,c),a!==null&&(_i(a,n,c),ic(a,n,c))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var c=Ui(),p=Sr(c);p.tag=1,p.payload=a,o!=null&&(p.callback=o),a=Mr(n,p,c),a!==null&&(_i(a,n,c),ic(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=Ui(),c=Sr(o);c.tag=2,a!=null&&(c.callback=a),a=Mr(n,c,o),a!==null&&(_i(a,n,o),ic(a,n,o))}};function Ov(n,a,o,c,p,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):a.prototype&&a.prototype.isPureReactComponent?!Zl(o,c)||!Zl(p,g):!0}function Pv(n,a,o,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,c),a.state!==n&&$d.enqueueReplaceState(a,a.state,null)}function Ts(n,a){var o=a;if("ref"in a){o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}if(n=n.defaultProps){o===a&&(o=_({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}function zv(n){Ru(n)}function Iv(n){console.error(n)}function Bv(n){Ru(n)}function Qu(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function Fv(n,a,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function ep(n,a,o){return o=Sr(o),o.tag=3,o.payload={element:null},o.callback=function(){Qu(n,a)},o}function Hv(n){return n=Sr(n),n.tag=3,n}function Gv(n,a,o,c){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=c.value;n.payload=function(){return p(g)},n.callback=function(){Fv(a,o,c)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){Fv(a,o,c),typeof p!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var C=c.stack;this.componentDidCatch(c.value,{componentStack:C!==null?C:""})})}function kE(n,a,o,c,p){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=o.alternate,a!==null&&yo(a,o,p,!0),o=wi.current,o!==null){switch(o.tag){case 31:case 13:return Zi===null?uf():o.alternate===null&&dn===0&&(dn=3),o.flags&=-257,o.flags|=65536,o.lanes=p,c===Bu?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([c]):a.add(c),Tp(n,c,p)),!1;case 22:return o.flags|=65536,c===Bu?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([c]):o.add(c)),Tp(n,c,p)),!1}throw Error(i(435,o.tag))}return Tp(n,c,p),uf(),!1}if(Dt)return a=wi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=p,c!==xd&&(n=Error(i(422),{cause:c}),Jl(ji(n,o)))):(c!==xd&&(a=Error(i(423),{cause:c}),Jl(ji(a,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=ji(c,o),p=ep(n.stateNode,c,p),Dd(n,p),dn!==4&&(dn=2)),!1;var g=Error(i(520),{cause:c});if(g=ji(g,o),_c===null?_c=[g]:_c.push(g),dn!==4&&(dn=2),a===null)return!0;c=ji(c,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=ep(o.stateNode,c,n),Dd(o,n),!1;case 1:if(a=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Rr===null||!Rr.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=Hv(p),Gv(p,n,o,c),Dd(o,p),!1}o=o.return}while(o!==null);return!1}var tp=Error(i(461)),En=!1;function Vn(n,a,o,c){a.child=n===null?j0(a,null,o,c):bs(a,n.child,o,c)}function Vv(n,a,o,c,p){o=o.render;var g=a.ref;if("ref"in c){var E={};for(var C in c)C!=="ref"&&(E[C]=c[C])}else E=c;return xs(a),c=zd(n,a,o,E,g,p),C=Id(),n!==null&&!En?(Bd(n,a,p),Xa(n,a,p)):(Dt&&C&&_d(a),a.flags|=1,Vn(n,a,c,p),a.child)}function kv(n,a,o,c,p){if(n===null){var g=o.type;return typeof g=="function"&&!pd(g)&&g.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=g,Xv(n,a,g,c,p)):(n=Nu(o.type,null,c,a,a.mode,p),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!cp(n,p)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:Zl,o(E,c)&&n.ref===a.ref)return Xa(n,a,p)}return a.flags|=1,n=Ba(g,c),n.ref=a.ref,n.return=a,a.child=n}function Xv(n,a,o,c,p){if(n!==null){var g=n.memoizedProps;if(Zl(g,c)&&n.ref===a.ref)if(En=!1,a.pendingProps=c=g,cp(n,p))(n.flags&131072)!==0&&(En=!0);else return a.lanes=n.lanes,Xa(n,a,p)}return np(n,a,o,c,p)}function jv(n,a,o,c){var p=c.children,g=n!==null?n.memoizedState:null;if(n===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((a.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,n!==null){for(c=a.child=n.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~g}else c=0,a.child=null;return Wv(n,a,g,o,c)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&zu(a,g!==null?g.cachePool:null),g!==null?Y0(a,g):Nd(),Z0(a);else return c=a.lanes=536870912,Wv(n,a,g!==null?g.baseLanes|o:o,o,c)}else g!==null?(zu(a,g.cachePool),Y0(a,g),Er(),a.memoizedState=null):(n!==null&&zu(a,null),Nd(),Er());return Vn(n,a,p,o),a.child}function uc(n,a){return n!==null&&n.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Wv(n,a,o,c,p){var g=Ad();return g=g===null?null:{parent:Mn._currentValue,pool:g},a.memoizedState={baseLanes:o,cachePool:g},n!==null&&zu(a,null),Nd(),Z0(a),n!==null&&yo(n,a,c,!0),a.childLanes=p,null}function Ju(n,a){return a=ef({mode:a.mode,children:a.children},n.mode),a.ref=n.ref,n.child=a,a.return=n,a}function qv(n,a,o){return bs(a,n.child,null,o),n=Ju(a,a.pendingProps),n.flags|=2,Ri(a),a.memoizedState=null,n}function XE(n,a,o){var c=a.pendingProps,p=(a.flags&128)!==0;if(a.flags&=-129,n===null){if(Dt){if(c.mode==="hidden")return n=Ju(a,c),a.lanes=536870912,uc(null,n);if(Od(a),(n=an)?(n=ry(n,Yi),n=n!==null&&n.data==="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:gr!==null?{id:ya,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},o=D0(n),o.return=a,a.child=o,Hn=a,an=null)):n=null,n===null)throw vr(a);return a.lanes=536870912,null}return Ju(a,c)}var g=n.memoizedState;if(g!==null){var E=g.dehydrated;if(Od(a),p)if(a.flags&256)a.flags&=-257,a=qv(n,a,o);else if(a.memoizedState!==null)a.child=n.child,a.flags|=128,a=null;else throw Error(i(558));else if(En||yo(n,a,o,!1),p=(o&n.childLanes)!==0,En||p){if(c=Jt,c!==null&&(E=ti(c,o),E!==0&&E!==g.retryLane))throw g.retryLane=E,ms(n,E),_i(c,n,E),tp;uf(),a=qv(n,a,o)}else n=g.treeContext,an=Ki(E.nextSibling),Hn=a,Dt=!0,_r=null,Yi=!1,n!==null&&L0(a,n),a=Ju(a,c),a.flags|=4096;return a}return n=Ba(n.child,{mode:c.mode,children:c.children}),n.ref=a.ref,a.child=n,n.return=a,n}function $u(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function np(n,a,o,c,p){return xs(a),o=zd(n,a,o,c,void 0,p),c=Id(),n!==null&&!En?(Bd(n,a,p),Xa(n,a,p)):(Dt&&c&&_d(a),a.flags|=1,Vn(n,a,o,p),a.child)}function Yv(n,a,o,c,p,g){return xs(a),a.updateQueue=null,o=Q0(a,c,o,p),K0(n),c=Id(),n!==null&&!En?(Bd(n,a,g),Xa(n,a,g)):(Dt&&c&&_d(a),a.flags|=1,Vn(n,a,o,g),a.child)}function Zv(n,a,o,c,p){if(xs(a),a.stateNode===null){var g=go,E=o.contextType;typeof E=="object"&&E!==null&&(g=Gn(E)),g=new o(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=$d,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},Rd(a),E=o.contextType,g.context=typeof E=="object"&&E!==null?Gn(E):go,g.state=a.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Jd(a,o,E,c),g.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&$d.enqueueReplaceState(g,g.state,null),rc(a,c,g,p),ac(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){g=a.stateNode;var C=a.memoizedProps,X=Ts(o,C);g.props=X;var le=g.context,ge=o.contextType;E=go,typeof ge=="object"&&ge!==null&&(E=Gn(ge));var xe=o.getDerivedStateFromProps;ge=typeof xe=="function"||typeof g.getSnapshotBeforeUpdate=="function",C=a.pendingProps!==C,ge||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(C||le!==E)&&Pv(a,g,c,E),yr=!1;var ce=a.memoizedState;g.state=ce,rc(a,c,g,p),ac(),le=a.memoizedState,C||ce!==le||yr?(typeof xe=="function"&&(Jd(a,o,xe,c),le=a.memoizedState),(X=yr||Ov(a,o,X,c,ce,le,E))?(ge||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=le),g.props=c,g.state=le,g.context=E,c=X):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,Cd(n,a),E=a.memoizedProps,ge=Ts(o,E),g.props=ge,xe=a.pendingProps,ce=g.context,le=o.contextType,X=go,typeof le=="object"&&le!==null&&(X=Gn(le)),C=o.getDerivedStateFromProps,(le=typeof C=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==xe||ce!==X)&&Pv(a,g,c,X),yr=!1,ce=a.memoizedState,g.state=ce,rc(a,c,g,p),ac();var pe=a.memoizedState;E!==xe||ce!==pe||yr||n!==null&&n.dependencies!==null&&Ou(n.dependencies)?(typeof C=="function"&&(Jd(a,o,C,c),pe=a.memoizedState),(ge=yr||Ov(a,o,ge,c,ce,pe,X)||n!==null&&n.dependencies!==null&&Ou(n.dependencies))?(le||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,pe,X),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,pe,X)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&ce===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ce===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=pe),g.props=c,g.state=pe,g.context=X,c=ge):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&ce===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ce===n.memoizedState||(a.flags|=1024),c=!1)}return g=c,$u(n,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&c?(a.child=bs(a,n.child,null,p),a.child=bs(a,null,o,p)):Vn(n,a,o,p),a.memoizedState=g.state,n=a.child):n=Xa(n,a,p),n}function Kv(n,a,o,c){return _s(),a.flags|=256,Vn(n,a,o,c),a.child}var ip={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ap(n){return{baseLanes:n,cachePool:F0()}}function rp(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=Di),n}function Qv(n,a,o){var c=a.pendingProps,p=!1,g=(a.flags&128)!==0,E;if((E=g)||(E=n!==null&&n.memoizedState===null?!1:(gn.current&2)!==0),E&&(p=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,n===null){if(Dt){if(p?br(a):Er(),(n=an)?(n=ry(n,Yi),n=n!==null&&n.data!=="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:gr!==null?{id:ya,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},o=D0(n),o.return=a,a.child=o,Hn=a,an=null)):n=null,n===null)throw vr(a);return Gp(n)?a.lanes=32:a.lanes=536870912,null}var C=c.children;return c=c.fallback,p?(Er(),p=a.mode,C=ef({mode:"hidden",children:C},p),c=gs(c,p,o,null),C.return=a,c.return=a,C.sibling=c,a.child=C,c=a.child,c.memoizedState=ap(o),c.childLanes=rp(n,E,o),a.memoizedState=ip,uc(null,c)):(br(a),sp(a,C))}var X=n.memoizedState;if(X!==null&&(C=X.dehydrated,C!==null)){if(g)a.flags&256?(br(a),a.flags&=-257,a=op(n,a,o)):a.memoizedState!==null?(Er(),a.child=n.child,a.flags|=128,a=null):(Er(),C=c.fallback,p=a.mode,c=ef({mode:"visible",children:c.children},p),C=gs(C,p,o,null),C.flags|=2,c.return=a,C.return=a,c.sibling=C,a.child=c,bs(a,n.child,null,o),c=a.child,c.memoizedState=ap(o),c.childLanes=rp(n,E,o),a.memoizedState=ip,a=uc(null,c));else if(br(a),Gp(C)){if(E=C.nextSibling&&C.nextSibling.dataset,E)var le=E.dgst;E=le,c=Error(i(419)),c.stack="",c.digest=E,Jl({value:c,source:null,stack:null}),a=op(n,a,o)}else if(En||yo(n,a,o,!1),E=(o&n.childLanes)!==0,En||E){if(E=Jt,E!==null&&(c=ti(E,o),c!==0&&c!==X.retryLane))throw X.retryLane=c,ms(n,c),_i(E,n,c),tp;Hp(C)||uf(),a=op(n,a,o)}else Hp(C)?(a.flags|=192,a.child=n.child,a=null):(n=X.treeContext,an=Ki(C.nextSibling),Hn=a,Dt=!0,_r=null,Yi=!1,n!==null&&L0(a,n),a=sp(a,c.children),a.flags|=4096);return a}return p?(Er(),C=c.fallback,p=a.mode,X=n.child,le=X.sibling,c=Ba(X,{mode:"hidden",children:c.children}),c.subtreeFlags=X.subtreeFlags&65011712,le!==null?C=Ba(le,C):(C=gs(C,p,o,null),C.flags|=2),C.return=a,c.return=a,c.sibling=C,a.child=c,uc(null,c),c=a.child,C=n.child.memoizedState,C===null?C=ap(o):(p=C.cachePool,p!==null?(X=Mn._currentValue,p=p.parent!==X?{parent:X,pool:X}:p):p=F0(),C={baseLanes:C.baseLanes|o,cachePool:p}),c.memoizedState=C,c.childLanes=rp(n,E,o),a.memoizedState=ip,uc(n.child,c)):(br(a),o=n.child,n=o.sibling,o=Ba(o,{mode:"visible",children:c.children}),o.return=a,o.sibling=null,n!==null&&(E=a.deletions,E===null?(a.deletions=[n],a.flags|=16):E.push(n)),a.child=o,a.memoizedState=null,o)}function sp(n,a){return a=ef({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function ef(n,a){return n=Ai(22,n,null,a),n.lanes=0,n}function op(n,a,o){return bs(a,n.child,null,o),n=sp(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Jv(n,a,o){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Md(n.return,a,o)}function lp(n,a,o,c,p,g){var E=n.memoizedState;E===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:p,treeForkCount:g}:(E.isBackwards=a,E.rendering=null,E.renderingStartTime=0,E.last=c,E.tail=o,E.tailMode=p,E.treeForkCount=g)}function $v(n,a,o){var c=a.pendingProps,p=c.revealOrder,g=c.tail;c=c.children;var E=gn.current,C=(E&2)!==0;if(C?(E=E&1|2,a.flags|=128):E&=1,Me(gn,E),Vn(n,a,c,o),c=Dt?Ql:0,!C&&n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jv(n,o,a);else if(n.tag===19)Jv(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(o=a.child,p=null;o!==null;)n=o.alternate,n!==null&&Vu(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=a.child,a.child=null):(p=o.sibling,o.sibling=null),lp(a,!1,p,o,g,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=a.child,a.child=null;p!==null;){if(n=p.alternate,n!==null&&Vu(n)===null){a.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}lp(a,!0,o,null,g,c);break;case"together":lp(a,!1,null,null,void 0,c);break;default:a.memoizedState=null}return a.child}function Xa(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),wr|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(yo(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=Ba(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=Ba(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function cp(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Ou(n)))}function jE(n,a,o){switch(a.tag){case 3:Le(a,a.stateNode.containerInfo),xr(a,Mn,n.memoizedState.cache),_s();break;case 27:case 5:We(a);break;case 4:Le(a,a.stateNode.containerInfo);break;case 10:xr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Od(a),null;break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(br(a),a.flags|=128,null):(o&a.child.childLanes)!==0?Qv(n,a,o):(br(a),n=Xa(n,a,o),n!==null?n.sibling:null);br(a);break;case 19:var p=(n.flags&128)!==0;if(c=(o&a.childLanes)!==0,c||(yo(n,a,o,!1),c=(o&a.childLanes)!==0),p){if(c)return $v(n,a,o);a.flags|=128}if(p=a.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Me(gn,gn.current),c)break;return null;case 22:return a.lanes=0,jv(n,a,o,a.pendingProps);case 24:xr(a,Mn,n.memoizedState.cache)}return Xa(n,a,o)}function ex(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)En=!0;else{if(!cp(n,o)&&(a.flags&128)===0)return En=!1,jE(n,a,o);En=(n.flags&131072)!==0}else En=!1,Dt&&(a.flags&1048576)!==0&&N0(a,Ql,a.index);switch(a.lanes=0,a.tag){case 16:e:{var c=a.pendingProps;if(n=Ss(a.elementType),a.type=n,typeof n=="function")pd(n)?(c=Ts(n,c),a.tag=1,a=Zv(null,a,n,c,o)):(a.tag=0,a=np(null,a,n,c,o));else{if(n!=null){var p=n.$$typeof;if(p===A){a.tag=11,a=Vv(null,a,n,c,o);break e}else if(p===z){a.tag=14,a=kv(null,a,n,c,o);break e}}throw a=re(n)||n,Error(i(306,a,""))}}return a;case 0:return np(n,a,a.type,a.pendingProps,o);case 1:return c=a.type,p=Ts(c,a.pendingProps),Zv(n,a,c,p,o);case 3:e:{if(Le(a,a.stateNode.containerInfo),n===null)throw Error(i(387));c=a.pendingProps;var g=a.memoizedState;p=g.element,Cd(n,a),rc(a,c,null,o);var E=a.memoizedState;if(c=E.cache,xr(a,Mn,c),c!==g.cache&&bd(a,[Mn],o,!0),ac(),c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=Kv(n,a,c,o);break e}else if(c!==p){p=ji(Error(i(424)),a),Jl(p),a=Kv(n,a,c,o);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(an=Ki(n.firstChild),Hn=a,Dt=!0,_r=null,Yi=!0,o=j0(a,null,c,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(_s(),c===p){a=Xa(n,a,o);break e}Vn(n,a,c,o)}a=a.child}return a;case 26:return $u(n,a),n===null?(o=fy(a.type,null,a.pendingProps,null))?a.memoizedState=o:Dt||(o=a.type,n=a.pendingProps,c=_f(oe.current).createElement(o),c[Sn]=a,c[Bn]=n,kn(c,o,n),Se(c),a.stateNode=c):a.memoizedState=fy(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return We(a),n===null&&Dt&&(c=a.stateNode=ly(a.type,a.pendingProps,oe.current),Hn=a,Yi=!0,p=an,Nr(a.type)?(Vp=p,an=Ki(c.firstChild)):an=p),Vn(n,a,a.pendingProps.children,o),$u(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Dt&&((p=c=an)&&(c=ST(c,a.type,a.pendingProps,Yi),c!==null?(a.stateNode=c,Hn=a,an=Ki(c.firstChild),Yi=!1,p=!0):p=!1),p||vr(a)),We(a),p=a.type,g=a.pendingProps,E=n!==null?n.memoizedProps:null,c=g.children,Ip(p,g)?c=null:E!==null&&Ip(p,E)&&(a.flags|=32),a.memoizedState!==null&&(p=zd(n,a,zE,null,null,o),Tc._currentValue=p),$u(n,a),Vn(n,a,c,o),a.child;case 6:return n===null&&Dt&&((n=o=an)&&(o=MT(o,a.pendingProps,Yi),o!==null?(a.stateNode=o,Hn=a,an=null,n=!0):n=!1),n||vr(a)),null;case 13:return Qv(n,a,o);case 4:return Le(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=bs(a,null,c,o):Vn(n,a,c,o),a.child;case 11:return Vv(n,a,a.type,a.pendingProps,o);case 7:return Vn(n,a,a.pendingProps,o),a.child;case 8:return Vn(n,a,a.pendingProps.children,o),a.child;case 12:return Vn(n,a,a.pendingProps.children,o),a.child;case 10:return c=a.pendingProps,xr(a,a.type,c.value),Vn(n,a,c.children,o),a.child;case 9:return p=a.type._context,c=a.pendingProps.children,xs(a),p=Gn(p),c=c(p),a.flags|=1,Vn(n,a,c,o),a.child;case 14:return kv(n,a,a.type,a.pendingProps,o);case 15:return Xv(n,a,a.type,a.pendingProps,o);case 19:return $v(n,a,o);case 31:return XE(n,a,o);case 22:return jv(n,a,o,a.pendingProps);case 24:return xs(a),c=Gn(Mn),n===null?(p=Ad(),p===null&&(p=Jt,g=Ed(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),a.memoizedState={parent:c,cache:p},Rd(a),xr(a,Mn,p)):((n.lanes&o)!==0&&(Cd(n,a),rc(a,null,null,o),ac()),p=n.memoizedState,g=a.memoizedState,p.parent!==c?(p={parent:c,cache:c},a.memoizedState=p,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=p),xr(a,Mn,c)):(c=g.cache,xr(a,Mn,c),c!==p.cache&&bd(a,[Mn],o,!0))),Vn(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function ja(n){n.flags|=4}function up(n,a,o,c,p){if((a=(n.mode&32)!==0)&&(a=!1),a){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(wx())n.flags|=8192;else throw Ms=Bu,wd}else n.flags&=-16777217}function tx(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!gy(a))if(wx())n.flags|=8192;else throw Ms=Bu,wd}function tf(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Ot():536870912,n.lanes|=a,No|=a)}function fc(n,a){if(!Dt)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function rn(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(a)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=o,a}function WE(n,a,o){var c=a.pendingProps;switch(vd(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(a),null;case 1:return rn(a),null;case 3:return o=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Ga(Mn),Ve(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(xo(a)?ja(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,yd())),rn(a),null;case 26:var p=a.type,g=a.memoizedState;return n===null?(ja(a),g!==null?(rn(a),tx(a,g)):(rn(a),up(a,p,null,c,o))):g?g!==n.memoizedState?(ja(a),rn(a),tx(a,g)):(rn(a),a.flags&=-16777217):(n=n.memoizedProps,n!==c&&ja(a),rn(a),up(a,p,n,c,o)),null;case 27:if(lt(a),o=oe.current,p=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&ja(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return rn(a),null}n=Ee.current,xo(a)?O0(a):(n=ly(p,c,o),a.stateNode=n,ja(a))}return rn(a),null;case 5:if(lt(a),p=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&ja(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return rn(a),null}if(g=Ee.current,xo(a))O0(a);else{var E=_f(oe.current);switch(g){case 1:g=E.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:g=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":g=E.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":g=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":g=E.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof c.is=="string"?E.createElement("select",{is:c.is}):E.createElement("select"),c.multiple?g.multiple=!0:c.size&&(g.size=c.size);break;default:g=typeof c.is=="string"?E.createElement(p,{is:c.is}):E.createElement(p)}}g[Sn]=a,g[Bn]=c;e:for(E=a.child;E!==null;){if(E.tag===5||E.tag===6)g.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===a)break e;for(;E.sibling===null;){if(E.return===null||E.return===a)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}a.stateNode=g;e:switch(kn(g,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&ja(a)}}return rn(a),up(a,a.type,n===null?null:n.memoizedProps,a.pendingProps,o),null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&ja(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=oe.current,xo(a)){if(n=a.stateNode,o=a.memoizedProps,c=null,p=Hn,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[Sn]=a,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||Qx(n.nodeValue,o)),n||vr(a,!0)}else n=_f(n).createTextNode(c),n[Sn]=a,a.stateNode=n}return rn(a),null;case 31:if(o=a.memoizedState,n===null||n.memoizedState!==null){if(c=xo(a),o!==null){if(n===null){if(!c)throw Error(i(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[Sn]=a}else _s(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rn(a),n=!1}else o=yd(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return a.flags&256?(Ri(a),a):(Ri(a),null);if((a.flags&128)!==0)throw Error(i(558))}return rn(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=xo(a),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=a.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Sn]=a}else _s(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rn(a),p=!1}else p=yd(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return a.flags&256?(Ri(a),a):(Ri(a),null)}return Ri(a),(a.flags&128)!==0?(a.lanes=o,a):(o=c!==null,n=n!==null&&n.memoizedState!==null,o&&(c=a.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),g=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==p&&(c.flags|=2048)),o!==n&&o&&(a.child.flags|=8192),tf(a,a.updateQueue),rn(a),null);case 4:return Ve(),n===null&&Np(a.stateNode.containerInfo),rn(a),null;case 10:return Ga(a.type),rn(a),null;case 19:if(ie(gn),c=a.memoizedState,c===null)return rn(a),null;if(p=(a.flags&128)!==0,g=c.rendering,g===null)if(p)fc(c,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=Vu(n),g!==null){for(a.flags|=128,fc(c,!1),n=g.updateQueue,a.updateQueue=n,tf(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)C0(o,n),o=o.sibling;return Me(gn,gn.current&1|2),Dt&&Fa(a,c.treeForkCount),a.child}n=n.sibling}c.tail!==null&&b()>of&&(a.flags|=128,p=!0,fc(c,!1),a.lanes=4194304)}else{if(!p)if(n=Vu(g),n!==null){if(a.flags|=128,p=!0,n=n.updateQueue,a.updateQueue=n,tf(a,n),fc(c,!0),c.tail===null&&c.tailMode==="hidden"&&!g.alternate&&!Dt)return rn(a),null}else 2*b()-c.renderingStartTime>of&&o!==536870912&&(a.flags|=128,p=!0,fc(c,!1),a.lanes=4194304);c.isBackwards?(g.sibling=a.child,a.child=g):(n=c.last,n!==null?n.sibling=g:a.child=g,c.last=g)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=b(),n.sibling=null,o=gn.current,Me(gn,p?o&1|2:o&1),Dt&&Fa(a,c.treeForkCount),n):(rn(a),null);case 22:case 23:return Ri(a),Ld(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(o&536870912)!==0&&(a.flags&128)===0&&(rn(a),a.subtreeFlags&6&&(a.flags|=8192)):rn(a),o=a.updateQueue,o!==null&&tf(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048),n!==null&&ie(ys),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Ga(Mn),rn(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function qE(n,a){switch(vd(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Ga(Mn),Ve(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return lt(a),null;case 31:if(a.memoizedState!==null){if(Ri(a),a.alternate===null)throw Error(i(340));_s()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 13:if(Ri(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));_s()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return ie(gn),null;case 4:return Ve(),null;case 10:return Ga(a.type),null;case 22:case 23:return Ri(a),Ld(),n!==null&&ie(ys),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Ga(Mn),null;case 25:return null;default:return null}}function nx(n,a){switch(vd(a),a.tag){case 3:Ga(Mn),Ve();break;case 26:case 27:case 5:lt(a);break;case 4:Ve();break;case 31:a.memoizedState!==null&&Ri(a);break;case 13:Ri(a);break;case 19:ie(gn);break;case 10:Ga(a.type);break;case 22:case 23:Ri(a),Ld(),n!==null&&ie(ys);break;case 24:Ga(Mn)}}function hc(n,a){try{var o=a.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var p=c.next;o=p;do{if((o.tag&n)===n){c=void 0;var g=o.create,E=o.inst;c=g(),E.destroy=c}o=o.next}while(o!==p)}}catch(C){jt(a,a.return,C)}}function Tr(n,a,o){try{var c=a.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var g=p.next;c=g;do{if((c.tag&n)===n){var E=c.inst,C=E.destroy;if(C!==void 0){E.destroy=void 0,p=a;var X=o,le=C;try{le()}catch(ge){jt(p,X,ge)}}}c=c.next}while(c!==g)}}catch(ge){jt(a,a.return,ge)}}function ix(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{q0(a,o)}catch(c){jt(n,n.return,c)}}}function ax(n,a,o){o.props=Ts(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){jt(n,a,c)}}function dc(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(p){jt(n,a,p)}}function Ma(n,a){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(p){jt(n,a,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){jt(n,a,p)}else o.current=null}function rx(n){var a=n.type,o=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(p){jt(n,n.return,p)}}function fp(n,a,o){try{var c=n.stateNode;mT(c,n.type,o,a),c[Bn]=a}catch(p){jt(n,n.return,p)}}function sx(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Nr(n.type)||n.tag===4}function hp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Nr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dp(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=za));else if(c!==4&&(c===27&&Nr(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for(dp(n,a,o),n=n.sibling;n!==null;)dp(n,a,o),n=n.sibling}function nf(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(c!==4&&(c===27&&Nr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(nf(n,a,o),n=n.sibling;n!==null;)nf(n,a,o),n=n.sibling}function ox(n){var a=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,p=a.attributes;p.length;)a.removeAttributeNode(p[0]);kn(a,c,o),a[Sn]=n,a[Bn]=o}catch(g){jt(n,n.return,g)}}var Wa=!1,Tn=!1,pp=!1,lx=typeof WeakSet=="function"?WeakSet:Set,Pn=null;function YE(n,a){if(n=n.containerInfo,Pp=Ef,n=y0(n),od(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,C=-1,X=-1,le=0,ge=0,xe=n,ce=null;t:for(;;){for(var pe;xe!==o||p!==0&&xe.nodeType!==3||(C=E+p),xe!==g||c!==0&&xe.nodeType!==3||(X=E+c),xe.nodeType===3&&(E+=xe.nodeValue.length),(pe=xe.firstChild)!==null;)ce=xe,xe=pe;for(;;){if(xe===n)break t;if(ce===o&&++le===p&&(C=E),ce===g&&++ge===c&&(X=E),(pe=xe.nextSibling)!==null)break;xe=ce,ce=xe.parentNode}xe=pe}o=C===-1||X===-1?null:{start:C,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(zp={focusedElem:n,selectionRange:o},Ef=!1,Pn=a;Pn!==null;)if(a=Pn,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Pn=n;else for(;Pn!==null;){switch(a=Pn,g=a.alternate,n=a.flags,a.tag){case 0:if((n&4)!==0&&(n=a.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)p=n[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=a,p=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var Ye=Ts(o.type,p);n=c.getSnapshotBeforeUpdate(Ye,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(st){jt(o,o.return,st)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)Fp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Fp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Pn=n;break}Pn=a.return}}function cx(n,a,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Ya(n,o),c&4&&hc(5,o);break;case 1:if(Ya(n,o),c&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(E){jt(o,o.return,E)}else{var p=Ts(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(p,a,n.__reactInternalSnapshotBeforeUpdate)}catch(E){jt(o,o.return,E)}}c&64&&ix(o),c&512&&dc(o,o.return);break;case 3:if(Ya(n,o),c&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{q0(n,a)}catch(E){jt(o,o.return,E)}}break;case 27:a===null&&c&4&&ox(o);case 26:case 5:Ya(n,o),a===null&&c&4&&rx(o),c&512&&dc(o,o.return);break;case 12:Ya(n,o);break;case 31:Ya(n,o),c&4&&hx(n,o);break;case 13:Ya(n,o),c&4&&dx(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=iT.bind(null,o),bT(n,o))));break;case 22:if(c=o.memoizedState!==null||Wa,!c){a=a!==null&&a.memoizedState!==null||Tn,p=Wa;var g=Tn;Wa=c,(Tn=a)&&!g?Za(n,o,(o.subtreeFlags&8772)!==0):Ya(n,o),Wa=p,Tn=g}break;case 30:break;default:Ya(n,o)}}function ux(n){var a=n.alternate;a!==null&&(n.alternate=null,ux(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&N(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ln=null,di=!1;function qa(n,a,o){for(o=o.child;o!==null;)fx(n,a,o),o=o.sibling}function fx(n,a,o){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Ae,o)}catch{}switch(o.tag){case 26:Tn||Ma(o,a),qa(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Tn||Ma(o,a);var c=ln,p=di;Nr(o.type)&&(ln=o.stateNode,di=!1),qa(n,a,o),Mc(o.stateNode),ln=c,di=p;break;case 5:Tn||Ma(o,a);case 6:if(c=ln,p=di,ln=null,qa(n,a,o),ln=c,di=p,ln!==null)if(di)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(o.stateNode)}catch(g){jt(o,a,g)}else try{ln.removeChild(o.stateNode)}catch(g){jt(o,a,g)}break;case 18:ln!==null&&(di?(n=ln,iy(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Ho(n)):iy(ln,o.stateNode));break;case 4:c=ln,p=di,ln=o.stateNode.containerInfo,di=!0,qa(n,a,o),ln=c,di=p;break;case 0:case 11:case 14:case 15:Tr(2,o,a),Tn||Tr(4,o,a),qa(n,a,o);break;case 1:Tn||(Ma(o,a),c=o.stateNode,typeof c.componentWillUnmount=="function"&&ax(o,a,c)),qa(n,a,o);break;case 21:qa(n,a,o);break;case 22:Tn=(c=Tn)||o.memoizedState!==null,qa(n,a,o),Tn=c;break;default:qa(n,a,o)}}function hx(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Ho(n)}catch(o){jt(a,a.return,o)}}}function dx(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ho(n)}catch(o){jt(a,a.return,o)}}function ZE(n){switch(n.tag){case 31:case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new lx),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new lx),a;default:throw Error(i(435,n.tag))}}function af(n,a){var o=ZE(n);a.forEach(function(c){if(!o.has(c)){o.add(c);var p=aT.bind(null,n,c);c.then(p,p)}})}function pi(n,a){var o=a.deletions;if(o!==null)for(var c=0;c<o.length;c++){var p=o[c],g=n,E=a,C=E;e:for(;C!==null;){switch(C.tag){case 27:if(Nr(C.type)){ln=C.stateNode,di=!1;break e}break;case 5:ln=C.stateNode,di=!1;break e;case 3:case 4:ln=C.stateNode.containerInfo,di=!0;break e}C=C.return}if(ln===null)throw Error(i(160));fx(g,E,p),ln=null,di=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)px(a,n),a=a.sibling}var la=null;function px(n,a){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:pi(a,n),mi(n),c&4&&(Tr(3,n,n.return),hc(3,n),Tr(5,n,n.return));break;case 1:pi(a,n),mi(n),c&512&&(Tn||o===null||Ma(o,o.return)),c&64&&Wa&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var p=la;if(pi(a,n),mi(n),c&512&&(Tn||o===null||Ma(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){e:{c=n.type,o=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":g=p.getElementsByTagName("title")[0],(!g||g[us]||g[Sn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(c),p.head.insertBefore(g,p.querySelector("head > title"))),kn(g,c,o),g[Sn]=n,Se(g),c=g;break e;case"link":var E=py("link","href",p).get(c+(o.href||""));if(E){for(var C=0;C<E.length;C++)if(g=E[C],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(C,1);break t}}g=p.createElement(c),kn(g,c,o),p.head.appendChild(g);break;case"meta":if(E=py("meta","content",p).get(c+(o.content||""))){for(C=0;C<E.length;C++)if(g=E[C],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(C,1);break t}}g=p.createElement(c),kn(g,c,o),p.head.appendChild(g);break;default:throw Error(i(468,c))}g[Sn]=n,Se(g),c=g}n.stateNode=c}else my(p,n.type,n.stateNode);else n.stateNode=dy(p,c,n.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?my(p,n.type,n.stateNode):dy(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&fp(n,n.memoizedProps,o.memoizedProps)}break;case 27:pi(a,n),mi(n),c&512&&(Tn||o===null||Ma(o,o.return)),o!==null&&c&4&&fp(n,n.memoizedProps,o.memoizedProps);break;case 5:if(pi(a,n),mi(n),c&512&&(Tn||o===null||Ma(o,o.return)),n.flags&32){p=n.stateNode;try{lo(p,"")}catch(Ye){jt(n,n.return,Ye)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,fp(n,p,o!==null?o.memoizedProps:p)),c&1024&&(pp=!0);break;case 6:if(pi(a,n),mi(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch(Ye){jt(n,n.return,Ye)}}break;case 3:if(yf=null,p=la,la=vf(a.containerInfo),pi(a,n),la=p,mi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Ho(a.containerInfo)}catch(Ye){jt(n,n.return,Ye)}pp&&(pp=!1,mx(n));break;case 4:c=la,la=vf(n.stateNode.containerInfo),pi(a,n),mi(n),la=c;break;case 12:pi(a,n),mi(n);break;case 31:pi(a,n),mi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,af(n,c)));break;case 13:pi(a,n),mi(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(sf=b()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,af(n,c)));break;case 22:p=n.memoizedState!==null;var X=o!==null&&o.memoizedState!==null,le=Wa,ge=Tn;if(Wa=le||p,Tn=ge||X,pi(a,n),Tn=ge,Wa=le,mi(n),c&8192)e:for(a=n.stateNode,a._visibility=p?a._visibility&-2:a._visibility|1,p&&(o===null||X||Wa||Tn||As(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){X=o=a;try{if(g=X.stateNode,p)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{C=X.stateNode;var xe=X.memoizedProps.style,ce=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;C.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Ye){jt(X,X.return,Ye)}}}else if(a.tag===6){if(o===null){X=a;try{X.stateNode.nodeValue=p?"":X.memoizedProps}catch(Ye){jt(X,X.return,Ye)}}}else if(a.tag===18){if(o===null){X=a;try{var pe=X.stateNode;p?ay(pe,!0):ay(X.stateNode,!1)}catch(Ye){jt(X,X.return,Ye)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,af(n,o))));break;case 19:pi(a,n),mi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,af(n,c)));break;case 30:break;case 21:break;default:pi(a,n),mi(n)}}function mi(n){var a=n.flags;if(a&2){try{for(var o,c=n.return;c!==null;){if(sx(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var p=o.stateNode,g=hp(n);nf(n,g,p);break;case 5:var E=o.stateNode;o.flags&32&&(lo(E,""),o.flags&=-33);var C=hp(n);nf(n,C,E);break;case 3:case 4:var X=o.stateNode.containerInfo,le=hp(n);dp(n,le,X);break;default:throw Error(i(161))}}catch(ge){jt(n,n.return,ge)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function mx(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;mx(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Ya(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)cx(n,a.alternate,a),a=a.sibling}function As(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Tr(4,a,a.return),As(a);break;case 1:Ma(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&ax(a,a.return,o),As(a);break;case 27:Mc(a.stateNode);case 26:case 5:Ma(a,a.return),As(a);break;case 22:a.memoizedState===null&&As(a);break;case 30:As(a);break;default:As(a)}n=n.sibling}}function Za(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,p=n,g=a,E=g.flags;switch(g.tag){case 0:case 11:case 15:Za(p,g,o),hc(4,g);break;case 1:if(Za(p,g,o),c=g,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(le){jt(c,c.return,le)}if(c=g,p=c.updateQueue,p!==null){var C=c.stateNode;try{var X=p.shared.hiddenCallbacks;if(X!==null)for(p.shared.hiddenCallbacks=null,p=0;p<X.length;p++)W0(X[p],C)}catch(le){jt(c,c.return,le)}}o&&E&64&&ix(g),dc(g,g.return);break;case 27:ox(g);case 26:case 5:Za(p,g,o),o&&c===null&&E&4&&rx(g),dc(g,g.return);break;case 12:Za(p,g,o);break;case 31:Za(p,g,o),o&&E&4&&hx(p,g);break;case 13:Za(p,g,o),o&&E&4&&dx(p,g);break;case 22:g.memoizedState===null&&Za(p,g,o),dc(g,g.return);break;case 30:break;default:Za(p,g,o)}a=a.sibling}}function mp(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&$l(o))}function gp(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&$l(n))}function ca(n,a,o,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)gx(n,a,o,c),a=a.sibling}function gx(n,a,o,c){var p=a.flags;switch(a.tag){case 0:case 11:case 15:ca(n,a,o,c),p&2048&&hc(9,a);break;case 1:ca(n,a,o,c);break;case 3:ca(n,a,o,c),p&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&$l(n)));break;case 12:if(p&2048){ca(n,a,o,c),n=a.stateNode;try{var g=a.memoizedProps,E=g.id,C=g.onPostCommit;typeof C=="function"&&C(E,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(X){jt(a,a.return,X)}}else ca(n,a,o,c);break;case 31:ca(n,a,o,c);break;case 13:ca(n,a,o,c);break;case 23:break;case 22:g=a.stateNode,E=a.alternate,a.memoizedState!==null?g._visibility&2?ca(n,a,o,c):pc(n,a):g._visibility&2?ca(n,a,o,c):(g._visibility|=2,Co(n,a,o,c,(a.subtreeFlags&10256)!==0||!1)),p&2048&&mp(E,a);break;case 24:ca(n,a,o,c),p&2048&&gp(a.alternate,a);break;default:ca(n,a,o,c)}}function Co(n,a,o,c,p){for(p=p&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var g=n,E=a,C=o,X=c,le=E.flags;switch(E.tag){case 0:case 11:case 15:Co(g,E,C,X,p),hc(8,E);break;case 23:break;case 22:var ge=E.stateNode;E.memoizedState!==null?ge._visibility&2?Co(g,E,C,X,p):pc(g,E):(ge._visibility|=2,Co(g,E,C,X,p)),p&&le&2048&&mp(E.alternate,E);break;case 24:Co(g,E,C,X,p),p&&le&2048&&gp(E.alternate,E);break;default:Co(g,E,C,X,p)}a=a.sibling}}function pc(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,c=a,p=c.flags;switch(c.tag){case 22:pc(o,c),p&2048&&mp(c.alternate,c);break;case 24:pc(o,c),p&2048&&gp(c.alternate,c);break;default:pc(o,c)}a=a.sibling}}var mc=8192;function Do(n,a,o){if(n.subtreeFlags&mc)for(n=n.child;n!==null;)_x(n,a,o),n=n.sibling}function _x(n,a,o){switch(n.tag){case 26:Do(n,a,o),n.flags&mc&&n.memoizedState!==null&&PT(o,la,n.memoizedState,n.memoizedProps);break;case 5:Do(n,a,o);break;case 3:case 4:var c=la;la=vf(n.stateNode.containerInfo),Do(n,a,o),la=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=mc,mc=16777216,Do(n,a,o),mc=c):Do(n,a,o));break;default:Do(n,a,o)}}function vx(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function gc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Pn=c,yx(c,n)}vx(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xx(n),n=n.sibling}function xx(n){switch(n.tag){case 0:case 11:case 15:gc(n),n.flags&2048&&Tr(9,n,n.return);break;case 3:gc(n);break;case 12:gc(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,rf(n)):gc(n);break;default:gc(n)}}function rf(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Pn=c,yx(c,n)}vx(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Tr(8,a,a.return),rf(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,rf(a));break;default:rf(a)}n=n.sibling}}function yx(n,a){for(;Pn!==null;){var o=Pn;switch(o.tag){case 0:case 11:case 15:Tr(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:$l(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Pn=c;else e:for(o=n;Pn!==null;){c=Pn;var p=c.sibling,g=c.return;if(ux(c),c===o){Pn=null;break e}if(p!==null){p.return=g,Pn=p;break e}Pn=g}}}var KE={getCacheForType:function(n){var a=Gn(Mn),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o},cacheSignal:function(){return Gn(Mn).controller.signal}},QE=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Jt=null,Et=null,Rt=0,Xt=0,Ci=null,Ar=!1,Uo=!1,_p=!1,Ka=0,dn=0,wr=0,ws=0,vp=0,Di=0,No=0,_c=null,gi=null,xp=!1,sf=0,Sx=0,of=1/0,lf=null,Rr=null,Un=0,Cr=null,Lo=null,Qa=0,yp=0,Sp=null,Mx=null,vc=0,Mp=null;function Ui(){return(Ft&2)!==0&&Rt!==0?Rt&-Rt:B.T!==null?Rp():cs()}function bx(){if(Di===0)if((Rt&536870912)===0||Dt){var n=Ne;Ne<<=1,(Ne&3932160)===0&&(Ne=262144),Di=n}else Di=536870912;return n=wi.current,n!==null&&(n.flags|=32),Di}function _i(n,a,o){(n===Jt&&(Xt===2||Xt===9)||n.cancelPendingCommit!==null)&&(Oo(n,0),Dr(n,Rt,Di,!1)),Qe(n,o),((Ft&2)===0||n!==Jt)&&(n===Jt&&((Ft&2)===0&&(ws|=o),dn===4&&Dr(n,Rt,Di,!1)),ba(n))}function Ex(n,a,o){if((Ft&6)!==0)throw Error(i(327));var c=!o&&(a&127)===0&&(a&n.expiredLanes)===0||qe(n,a),p=c?eT(n,a):Ep(n,a,!0),g=c;do{if(p===0){Uo&&!c&&Dr(n,a,0,!1);break}else{if(o=n.current.alternate,g&&!JE(o)){p=Ep(n,a,!1),g=!1;continue}if(p===2){if(g=a,n.errorRecoveryDisabledLanes&g)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;e:{var C=n;p=_c;var X=C.current.memoizedState.isDehydrated;if(X&&(Oo(C,E).flags|=256),E=Ep(C,E,!1),E!==2){if(_p&&!X){C.errorRecoveryDisabledLanes|=g,ws|=g,p=4;break e}g=gi,gi=p,g!==null&&(gi===null?gi=g:gi.push.apply(gi,g))}p=E}if(g=!1,p!==2)continue}}if(p===1){Oo(n,0),Dr(n,a,0,!0);break}e:{switch(c=n,g=p,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:Dr(c,a,Di,!Ar);break e;case 2:gi=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(p=sf+300-b(),10<p)){if(Dr(c,a,Di,!Ar),ve(c,0,!0)!==0)break e;Qa=a,c.timeoutHandle=ty(Tx.bind(null,c,o,gi,lf,xp,a,Di,ws,No,Ar,g,"Throttled",-0,0),p);break e}Tx(c,o,gi,lf,xp,a,Di,ws,No,Ar,g,null,-0,0)}}break}while(!0);ba(n)}function Tx(n,a,o,c,p,g,E,C,X,le,ge,xe,ce,pe){if(n.timeoutHandle=-1,xe=a.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:za},_x(a,g,xe);var Ye=(g&62914560)===g?sf-b():(g&4194048)===g?Sx-b():0;if(Ye=zT(xe,Ye),Ye!==null){Qa=g,n.cancelPendingCommit=Ye(Lx.bind(null,n,a,g,o,c,p,E,C,X,ge,xe,null,ce,pe)),Dr(n,g,E,!le);return}}Lx(n,a,g,o,c,p,E,C,X)}function JE(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var p=o[c],g=p.getSnapshot;p=p.value;try{if(!Ti(g(),p))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Dr(n,a,o,c){a&=~vp,a&=~ws,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var p=a;0<p;){var g=31-Be(p),E=1<<g;c[g]=-1,p&=~E}o!==0&&sn(n,o,a)}function cf(){return(Ft&6)===0?(xc(0),!1):!0}function bp(){if(Et!==null){if(Xt===0)var n=Et.return;else n=Et,Ha=vs=null,Fd(n),Eo=null,tc=0,n=Et;for(;n!==null;)nx(n.alternate,n),n=n.return;Et=null}}function Oo(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,vT(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Qa=0,bp(),Jt=n,Et=o=Ba(n.current,null),Rt=a,Xt=0,Ci=null,Ar=!1,Uo=qe(n,a),_p=!1,No=Di=vp=ws=wr=dn=0,gi=_c=null,xp=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var p=31-Be(c),g=1<<p;a|=n[p],c&=~g}return Ka=a,Cu(),o}function Ax(n,a){pt=null,B.H=cc,a===bo||a===Iu?(a=V0(),Xt=3):a===wd?(a=V0(),Xt=4):Xt=a===tp?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ci=a,Et===null&&(dn=1,Qu(n,ji(a,n.current)))}function wx(){var n=wi.current;return n===null?!0:(Rt&4194048)===Rt?Zi===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?n===Zi:!1}function Rx(){var n=B.H;return B.H=cc,n===null?cc:n}function Cx(){var n=B.A;return B.A=KE,n}function uf(){dn=4,Ar||(Rt&4194048)!==Rt&&wi.current!==null||(Uo=!0),(wr&134217727)===0&&(ws&134217727)===0||Jt===null||Dr(Jt,Rt,Di,!1)}function Ep(n,a,o){var c=Ft;Ft|=2;var p=Rx(),g=Cx();(Jt!==n||Rt!==a)&&(lf=null,Oo(n,a)),a=!1;var E=dn;e:do try{if(Xt!==0&&Et!==null){var C=Et,X=Ci;switch(Xt){case 8:bp(),E=6;break e;case 3:case 2:case 9:case 6:wi.current===null&&(a=!0);var le=Xt;if(Xt=0,Ci=null,Po(n,C,X,le),o&&Uo){E=0;break e}break;default:le=Xt,Xt=0,Ci=null,Po(n,C,X,le)}}$E(),E=dn;break}catch(ge){Ax(n,ge)}while(!0);return a&&n.shellSuspendCounter++,Ha=vs=null,Ft=c,B.H=p,B.A=g,Et===null&&(Jt=null,Rt=0,Cu()),E}function $E(){for(;Et!==null;)Dx(Et)}function eT(n,a){var o=Ft;Ft|=2;var c=Rx(),p=Cx();Jt!==n||Rt!==a?(lf=null,of=b()+500,Oo(n,a)):Uo=qe(n,a);e:do try{if(Xt!==0&&Et!==null){a=Et;var g=Ci;t:switch(Xt){case 1:Xt=0,Ci=null,Po(n,a,g,1);break;case 2:case 9:if(H0(g)){Xt=0,Ci=null,Ux(a);break}a=function(){Xt!==2&&Xt!==9||Jt!==n||(Xt=7),ba(n)},g.then(a,a);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:H0(g)?(Xt=0,Ci=null,Ux(a)):(Xt=0,Ci=null,Po(n,a,g,7));break;case 5:var E=null;switch(Et.tag){case 26:E=Et.memoizedState;case 5:case 27:var C=Et;if(E?gy(E):C.stateNode.complete){Xt=0,Ci=null;var X=C.sibling;if(X!==null)Et=X;else{var le=C.return;le!==null?(Et=le,ff(le)):Et=null}break t}}Xt=0,Ci=null,Po(n,a,g,5);break;case 6:Xt=0,Ci=null,Po(n,a,g,6);break;case 8:bp(),dn=6;break e;default:throw Error(i(462))}}tT();break}catch(ge){Ax(n,ge)}while(!0);return Ha=vs=null,B.H=c,B.A=p,Ft=o,Et!==null?0:(Jt=null,Rt=0,Cu(),dn)}function tT(){for(;Et!==null&&!Bt();)Dx(Et)}function Dx(n){var a=ex(n.alternate,n,Ka);n.memoizedProps=n.pendingProps,a===null?ff(n):Et=a}function Ux(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=Yv(o,a,a.pendingProps,a.type,void 0,Rt);break;case 11:a=Yv(o,a,a.pendingProps,a.type.render,a.ref,Rt);break;case 5:Fd(a);default:nx(o,a),a=Et=C0(a,Ka),a=ex(o,a,Ka)}n.memoizedProps=n.pendingProps,a===null?ff(n):Et=a}function Po(n,a,o,c){Ha=vs=null,Fd(a),Eo=null,tc=0;var p=a.return;try{if(kE(n,p,a,o,Rt)){dn=1,Qu(n,ji(o,n.current)),Et=null;return}}catch(g){if(p!==null)throw Et=p,g;dn=1,Qu(n,ji(o,n.current)),Et=null;return}a.flags&32768?(Dt||c===1?n=!0:Uo||(Rt&536870912)!==0?n=!1:(Ar=n=!0,(c===2||c===9||c===3||c===6)&&(c=wi.current,c!==null&&c.tag===13&&(c.flags|=16384))),Nx(a,n)):ff(a)}function ff(n){var a=n;do{if((a.flags&32768)!==0){Nx(a,Ar);return}n=a.return;var o=WE(a.alternate,a,Ka);if(o!==null){Et=o;return}if(a=a.sibling,a!==null){Et=a;return}Et=a=n}while(a!==null);dn===0&&(dn=5)}function Nx(n,a){do{var o=qE(n.alternate,n);if(o!==null){o.flags&=32767,Et=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){Et=n;return}Et=n=o}while(n!==null);dn=6,Et=null}function Lx(n,a,o,c,p,g,E,C,X){n.cancelPendingCommit=null;do hf();while(Un!==0);if((Ft&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=hd,dt(n,o,g,E,C,X),n===Jt&&(Et=Jt=null,Rt=0),Lo=a,Cr=n,Qa=o,yp=g,Sp=p,Mx=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,rT(ae,function(){return Bx(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,p=Z.p,Z.p=2,E=Ft,Ft|=4;try{YE(n,a,o)}finally{Ft=E,Z.p=p,B.T=c}}Un=1,Ox(),Px(),zx()}}function Ox(){if(Un===1){Un=0;var n=Cr,a=Lo,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=B.T,B.T=null;var c=Z.p;Z.p=2;var p=Ft;Ft|=4;try{px(a,n);var g=zp,E=y0(n.containerInfo),C=g.focusedElem,X=g.selectionRange;if(E!==C&&C&&C.ownerDocument&&x0(C.ownerDocument.documentElement,C)){if(X!==null&&od(C)){var le=X.start,ge=X.end;if(ge===void 0&&(ge=le),"selectionStart"in C)C.selectionStart=le,C.selectionEnd=Math.min(ge,C.value.length);else{var xe=C.ownerDocument||document,ce=xe&&xe.defaultView||window;if(ce.getSelection){var pe=ce.getSelection(),Ye=C.textContent.length,st=Math.min(X.start,Ye),Zt=X.end===void 0?st:Math.min(X.end,Ye);!pe.extend&&st>Zt&&(E=Zt,Zt=st,st=E);var $=v0(C,st),j=v0(C,Zt);if($&&j&&(pe.rangeCount!==1||pe.anchorNode!==$.node||pe.anchorOffset!==$.offset||pe.focusNode!==j.node||pe.focusOffset!==j.offset)){var se=xe.createRange();se.setStart($.node,$.offset),pe.removeAllRanges(),st>Zt?(pe.addRange(se),pe.extend(j.node,j.offset)):(se.setEnd(j.node,j.offset),pe.addRange(se))}}}}for(xe=[],pe=C;pe=pe.parentNode;)pe.nodeType===1&&xe.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<xe.length;C++){var _e=xe[C];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Ef=!!Pp,zp=Pp=null}finally{Ft=p,Z.p=c,B.T=o}}n.current=a,Un=2}}function Px(){if(Un===2){Un=0;var n=Cr,a=Lo,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=B.T,B.T=null;var c=Z.p;Z.p=2;var p=Ft;Ft|=4;try{cx(n,a.alternate,a)}finally{Ft=p,Z.p=c,B.T=o}}Un=3}}function zx(){if(Un===4||Un===3){Un=0,I();var n=Cr,a=Lo,o=Qa,c=Mx;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Un=5:(Un=0,Lo=Cr=null,Ix(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(Rr=null),so(o),a=a.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Ae,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=B.T,p=Z.p,Z.p=2,B.T=null;try{for(var g=n.onRecoverableError,E=0;E<c.length;E++){var C=c[E];g(C.value,{componentStack:C.stack})}}finally{B.T=a,Z.p=p}}(Qa&3)!==0&&hf(),ba(n),p=n.pendingLanes,(o&261930)!==0&&(p&42)!==0?n===Mp?vc++:(vc=0,Mp=n):vc=0,xc(0)}}function Ix(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,$l(a)))}function hf(){return Ox(),Px(),zx(),Bx()}function Bx(){if(Un!==5)return!1;var n=Cr,a=yp;yp=0;var o=so(Qa),c=B.T,p=Z.p;try{Z.p=32>o?32:o,B.T=null,o=Sp,Sp=null;var g=Cr,E=Qa;if(Un=0,Lo=Cr=null,Qa=0,(Ft&6)!==0)throw Error(i(331));var C=Ft;if(Ft|=4,xx(g.current),gx(g,g.current,E,o),Ft=C,xc(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Ae,g)}catch{}return!0}finally{Z.p=p,B.T=c,Ix(n,a)}}function Fx(n,a,o){a=ji(o,a),a=ep(n.stateNode,a,2),n=Mr(n,a,2),n!==null&&(Qe(n,2),ba(n))}function jt(n,a,o){if(n.tag===3)Fx(n,n,o);else for(;a!==null;){if(a.tag===3){Fx(a,n,o);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Rr===null||!Rr.has(c))){n=ji(o,n),o=Hv(2),c=Mr(a,o,2),c!==null&&(Gv(o,c,a,n),Qe(c,2),ba(c));break}}a=a.return}}function Tp(n,a,o){var c=n.pingCache;if(c===null){c=n.pingCache=new QE;var p=new Set;c.set(a,p)}else p=c.get(a),p===void 0&&(p=new Set,c.set(a,p));p.has(o)||(_p=!0,p.add(o),n=nT.bind(null,n,a,o),a.then(n,n))}function nT(n,a,o){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Jt===n&&(Rt&o)===o&&(dn===4||dn===3&&(Rt&62914560)===Rt&&300>b()-sf?(Ft&2)===0&&Oo(n,0):vp|=o,No===Rt&&(No=0)),ba(n)}function Hx(n,a){a===0&&(a=Ot()),n=ms(n,a),n!==null&&(Qe(n,a),ba(n))}function iT(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),Hx(n,o)}function aT(n,a){var o=0;switch(n.tag){case 31:case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),Hx(n,o)}function rT(n,a){return ot(n,a)}var df=null,zo=null,Ap=!1,pf=!1,wp=!1,Ur=0;function ba(n){n!==zo&&n.next===null&&(zo===null?df=zo=n:zo=zo.next=n),pf=!0,Ap||(Ap=!0,oT())}function xc(n,a){if(!wp&&pf){wp=!0;do for(var o=!1,c=df;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var g=0;else{var E=c.suspendedLanes,C=c.pingedLanes;g=(1<<31-Be(42|n)+1)-1,g&=p&~(E&~C),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,Xx(c,g))}else g=Rt,g=ve(c,c===Jt?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||qe(c,g)||(o=!0,Xx(c,g));c=c.next}while(o);wp=!1}}function sT(){Gx()}function Gx(){pf=Ap=!1;var n=0;Ur!==0&&_T()&&(n=Ur);for(var a=b(),o=null,c=df;c!==null;){var p=c.next,g=Vx(c,a);g===0?(c.next=null,o===null?df=p:o.next=p,p===null&&(zo=o)):(o=c,(n!==0||(g&3)!==0)&&(pf=!0)),c=p}Un!==0&&Un!==5||xc(n),Ur!==0&&(Ur=0)}function Vx(n,a){for(var o=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var E=31-Be(g),C=1<<E,X=p[E];X===-1?((C&o)===0||(C&c)!==0)&&(p[E]=ut(C,a)):X<=a&&(n.expiredLanes|=C),g&=~C}if(a=Jt,o=Rt,o=ve(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===a&&(Xt===2||Xt===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Gt(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||qe(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(c!==null&&Gt(c),so(o)){case 2:case 8:o=ue;break;case 32:o=ae;break;case 268435456:o=Re;break;default:o=ae}return c=kx.bind(null,n),o=ot(o,c),n.callbackPriority=a,n.callbackNode=o,a}return c!==null&&c!==null&&Gt(c),n.callbackPriority=2,n.callbackNode=null,2}function kx(n,a){if(Un!==0&&Un!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(hf()&&n.callbackNode!==o)return null;var c=Rt;return c=ve(n,n===Jt?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(Ex(n,c,a),Vx(n,b()),n.callbackNode!=null&&n.callbackNode===o?kx.bind(null,n):null)}function Xx(n,a){if(hf())return null;Ex(n,a,!0)}function oT(){xT(function(){(Ft&6)!==0?ot(te,sT):Gx()})}function Rp(){if(Ur===0){var n=So;n===0&&(n=we,we<<=1,(we&261888)===0&&(we=256)),Ur=n}return Ur}function jx(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Su(""+n)}function Wx(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function lT(n,a,o,c,p){if(a==="submit"&&o&&o.stateNode===p){var g=jx((p[Bn]||null).action),E=c.submitter;E&&(a=(a=E[Bn]||null)?jx(a.formAction):E.getAttribute("formAction"),a!==null&&(g=a,E=null));var C=new Tu("action","action",null,c,p);n.push({event:C,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ur!==0){var X=E?Wx(p,E):new FormData(p);Yd(o,{pending:!0,data:X,method:p.method,action:g},null,X)}}else typeof g=="function"&&(C.preventDefault(),X=E?Wx(p,E):new FormData(p),Yd(o,{pending:!0,data:X,method:p.method,action:g},g,X))},currentTarget:p}]})}}for(var Cp=0;Cp<fd.length;Cp++){var Dp=fd[Cp],cT=Dp.toLowerCase(),uT=Dp[0].toUpperCase()+Dp.slice(1);oa(cT,"on"+uT)}oa(b0,"onAnimationEnd"),oa(E0,"onAnimationIteration"),oa(T0,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(AE,"onTransitionRun"),oa(wE,"onTransitionStart"),oa(RE,"onTransitionCancel"),oa(A0,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),Ge("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ge("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ge("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ge("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ge("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ge("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yc));function qx(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],p=c.event;c=c.listeners;e:{var g=void 0;if(a)for(var E=c.length-1;0<=E;E--){var C=c[E],X=C.instance,le=C.currentTarget;if(C=C.listener,X!==g&&p.isPropagationStopped())break e;g=C,p.currentTarget=le;try{g(p)}catch(ge){Ru(ge)}p.currentTarget=null,g=X}else for(E=0;E<c.length;E++){if(C=c[E],X=C.instance,le=C.currentTarget,C=C.listener,X!==g&&p.isPropagationStopped())break e;g=C,p.currentTarget=le;try{g(p)}catch(ge){Ru(ge)}p.currentTarget=null,g=X}}}}function Tt(n,a){var o=a[Gl];o===void 0&&(o=a[Gl]=new Set);var c=n+"__bubble";o.has(c)||(Yx(a,n,2,!1),o.add(c))}function Up(n,a,o){var c=0;a&&(c|=4),Yx(o,n,c,a)}var mf="_reactListening"+Math.random().toString(36).slice(2);function Np(n){if(!n[mf]){n[mf]=!0,ze.forEach(function(o){o!=="selectionchange"&&(fT.has(o)||Up(o,!1,n),Up(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[mf]||(a[mf]=!0,Up("selectionchange",!1,a))}}function Yx(n,a,o,c){switch(by(a)){case 2:var p=FT;break;case 8:p=HT;break;default:p=qp}o=p.bind(null,a,o,n),p=void 0,!Jh||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(a,o,{capture:!0,passive:p}):n.addEventListener(a,o,!0):p!==void 0?n.addEventListener(a,o,{passive:p}):n.addEventListener(a,o,!1)}function Lp(n,a,o,c,p){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var C=c.stateNode.containerInfo;if(C===p)break;if(E===4)for(E=c.return;E!==null;){var X=E.tag;if((X===3||X===4)&&E.stateNode.containerInfo===p)return;E=E.return}for(;C!==null;){if(E=J(C),E===null)return;if(X=E.tag,X===5||X===6||X===26||X===27){c=g=E;continue e}C=C.parentNode}}c=c.return}$_(function(){var le=g,ge=Kh(o),xe=[];e:{var ce=w0.get(n);if(ce!==void 0){var pe=Tu,Ye=n;switch(n){case"keypress":if(bu(o)===0)break e;case"keydown":case"keyup":pe=aE;break;case"focusin":Ye="focus",pe=nd;break;case"focusout":Ye="blur",pe=nd;break;case"beforeblur":case"afterblur":pe=nd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=n0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=W1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=oE;break;case b0:case E0:case T0:pe=Z1;break;case A0:pe=cE;break;case"scroll":case"scrollend":pe=X1;break;case"wheel":pe=fE;break;case"copy":case"cut":case"paste":pe=Q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=a0;break;case"toggle":case"beforetoggle":pe=dE}var st=(a&4)!==0,Zt=!st&&(n==="scroll"||n==="scrollend"),$=st?ce!==null?ce+"Capture":null:ce;st=[];for(var j=le,se;j!==null;){var _e=j;if(se=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||se===null||$===null||(_e=Vl(j,$),_e!=null&&st.push(Sc(j,_e,se))),Zt)break;j=j.return}0<st.length&&(ce=new pe(ce,Ye,null,o,ge),xe.push({event:ce,listeners:st}))}}if((a&7)===0){e:{if(ce=n==="mouseover"||n==="pointerover",pe=n==="mouseout"||n==="pointerout",ce&&o!==Zh&&(Ye=o.relatedTarget||o.fromElement)&&(J(Ye)||Ye[pr]))break e;if((pe||ce)&&(ce=ge.window===ge?ge:(ce=ge.ownerDocument)?ce.defaultView||ce.parentWindow:window,pe?(Ye=o.relatedTarget||o.toElement,pe=le,Ye=Ye?J(Ye):null,Ye!==null&&(Zt=l(Ye),st=Ye.tag,Ye!==Zt||st!==5&&st!==27&&st!==6)&&(Ye=null)):(pe=null,Ye=le),pe!==Ye)){if(st=n0,_e="onMouseLeave",$="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(st=a0,_e="onPointerLeave",$="onPointerEnter",j="pointer"),Zt=pe==null?ce:he(pe),se=Ye==null?ce:he(Ye),ce=new st(_e,j+"leave",pe,o,ge),ce.target=Zt,ce.relatedTarget=se,_e=null,J(ge)===le&&(st=new st($,j+"enter",Ye,o,ge),st.target=se,st.relatedTarget=Zt,_e=st),Zt=_e,pe&&Ye)t:{for(st=hT,$=pe,j=Ye,se=0,_e=$;_e;_e=st(_e))se++;_e=0;for(var it=j;it;it=st(it))_e++;for(;0<se-_e;)$=st($),se--;for(;0<_e-se;)j=st(j),_e--;for(;se--;){if($===j||j!==null&&$===j.alternate){st=$;break t}$=st($),j=st(j)}st=null}else st=null;pe!==null&&Zx(xe,ce,pe,st,!1),Ye!==null&&Zt!==null&&Zx(xe,Zt,Ye,st,!0)}}e:{if(ce=le?he(le):window,pe=ce.nodeName&&ce.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ce.type==="file")var Pt=h0;else if(u0(ce))if(d0)Pt=bE;else{Pt=SE;var Je=yE}else pe=ce.nodeName,!pe||pe.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?le&&Yh(le.elementType)&&(Pt=h0):Pt=ME;if(Pt&&(Pt=Pt(n,le))){f0(xe,Pt,o,ge);break e}Je&&Je(n,ce,le),n==="focusout"&&le&&ce.type==="number"&&le.memoizedProps.value!=null&&Dn(ce,"number",ce.value)}switch(Je=le?he(le):window,n){case"focusin":(u0(Je)||Je.contentEditable==="true")&&(ho=Je,ld=le,Kl=null);break;case"focusout":Kl=ld=ho=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,S0(xe,o,ge);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":S0(xe,o,ge)}var gt;if(ad)e:{switch(n){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else fo?l0(n,o)&&(Ct="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ct="onCompositionStart");Ct&&(r0&&o.locale!=="ko"&&(fo||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&fo&&(gt=e0()):(mr=ge,$h="value"in mr?mr.value:mr.textContent,fo=!0)),Je=gf(le,Ct),0<Je.length&&(Ct=new i0(Ct,n,null,o,ge),xe.push({event:Ct,listeners:Je}),gt?Ct.data=gt:(gt=c0(o),gt!==null&&(Ct.data=gt)))),(gt=mE?gE(n,o):_E(n,o))&&(Ct=gf(le,"onBeforeInput"),0<Ct.length&&(Je=new i0("onBeforeInput","beforeinput",null,o,ge),xe.push({event:Je,listeners:Ct}),Je.data=gt)),lT(xe,n,le,o,ge)}qx(xe,a)})}function Sc(n,a,o){return{instance:n,listener:a,currentTarget:o}}function gf(n,a){for(var o=a+"Capture",c=[];n!==null;){var p=n,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Vl(n,o),p!=null&&c.unshift(Sc(n,p,g)),p=Vl(n,a),p!=null&&c.push(Sc(n,p,g))),n.tag===3)return c;n=n.return}return[]}function hT(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Zx(n,a,o,c,p){for(var g=a._reactName,E=[];o!==null&&o!==c;){var C=o,X=C.alternate,le=C.stateNode;if(C=C.tag,X!==null&&X===c)break;C!==5&&C!==26&&C!==27||le===null||(X=le,p?(le=Vl(o,g),le!=null&&E.unshift(Sc(o,le,X))):p||(le=Vl(o,g),le!=null&&E.push(Sc(o,le,X)))),o=o.return}E.length!==0&&n.push({event:a,listeners:E})}var dT=/\r\n?/g,pT=/\u0000|\uFFFD/g;function Kx(n){return(typeof n=="string"?n:""+n).replace(dT,`
`).replace(pT,"")}function Qx(n,a){return a=Kx(a),Kx(n)===a}function Yt(n,a,o,c,p,g){switch(o){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||lo(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&lo(n,""+c);break;case"className":kt(n,"class",c);break;case"tabIndex":kt(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(n,o,c);break;case"style":Q_(n,c,g);break;case"data":if(a!=="object"){kt(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Su(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(a!=="input"&&Yt(n,a,"name",p.name,p,null),Yt(n,a,"formEncType",p.formEncType,p,null),Yt(n,a,"formMethod",p.formMethod,p,null),Yt(n,a,"formTarget",p.formTarget,p,null)):(Yt(n,a,"encType",p.encType,p,null),Yt(n,a,"method",p.method,p,null),Yt(n,a,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Su(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=za);break;case"onScroll":c!=null&&Tt("scroll",n);break;case"onScrollEnd":c!=null&&Tt("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=Su(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":Tt("beforetoggle",n),Tt("toggle",n),Qt(n,"popover",c);break;case"xlinkActuate":bt(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":bt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":bt(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":bt(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":bt(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":bt(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":bt(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":bt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":bt(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Qt(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=V1.get(o)||o,Qt(n,o,c))}}function Op(n,a,o,c,p,g){switch(o){case"style":Q_(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof c=="string"?lo(n,c):(typeof c=="number"||typeof c=="bigint")&&lo(n,""+c);break;case"onScroll":c!=null&&Tt("scroll",n);break;case"onScrollEnd":c!=null&&Tt("scrollend",n);break;case"onClick":c!=null&&(n.onclick=za);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ze.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),a=o.slice(2,p?o.length-7:void 0),g=n[Bn]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(a,g,p),typeof c=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,c,p);break e}o in n?n[o]=c:c===!0?n.setAttribute(o,""):Qt(n,o,c)}}}function kn(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",n),Tt("load",n);var c=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Yt(n,a,g,E,o,null)}}p&&Yt(n,a,"srcSet",o.srcSet,o,null),c&&Yt(n,a,"src",o.src,o,null);return;case"input":Tt("invalid",n);var C=g=E=p=null,X=null,le=null;for(c in o)if(o.hasOwnProperty(c)){var ge=o[c];if(ge!=null)switch(c){case"name":p=ge;break;case"type":E=ge;break;case"checked":X=ge;break;case"defaultChecked":le=ge;break;case"value":g=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(i(137,a));break;default:Yt(n,a,c,ge,o,null)}}ni(n,g,C,X,le,E,p,!1);return;case"select":Tt("invalid",n),c=E=g=null;for(p in o)if(o.hasOwnProperty(p)&&(C=o[p],C!=null))switch(p){case"value":g=C;break;case"defaultValue":E=C;break;case"multiple":c=C;default:Yt(n,a,p,C,o,null)}a=g,o=E,n.multiple=!!c,a!=null?mn(n,!!c,a,!1):o!=null&&mn(n,!!c,o,!0);return;case"textarea":Tt("invalid",n),g=p=c=null;for(E in o)if(o.hasOwnProperty(E)&&(C=o[E],C!=null))switch(E){case"value":c=C;break;case"defaultValue":p=C;break;case"children":g=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(i(91));break;default:Yt(n,a,E,C,o,null)}xa(n,c,p,g);return;case"option":for(X in o)if(o.hasOwnProperty(X)&&(c=o[X],c!=null))switch(X){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Yt(n,a,X,c,o,null)}return;case"dialog":Tt("beforetoggle",n),Tt("toggle",n),Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":Tt("load",n);break;case"video":case"audio":for(c=0;c<yc.length;c++)Tt(yc[c],n);break;case"image":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"embed":case"source":case"link":Tt("error",n),Tt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in o)if(o.hasOwnProperty(le)&&(c=o[le],c!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Yt(n,a,le,c,o,null)}return;default:if(Yh(a)){for(ge in o)o.hasOwnProperty(ge)&&(c=o[ge],c!==void 0&&Op(n,a,ge,c,o,void 0));return}}for(C in o)o.hasOwnProperty(C)&&(c=o[C],c!=null&&Yt(n,a,C,c,o,null))}function mT(n,a,o,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,E=null,C=null,X=null,le=null,ge=null;for(pe in o){var xe=o[pe];if(o.hasOwnProperty(pe)&&xe!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":X=xe;default:c.hasOwnProperty(pe)||Yt(n,a,pe,null,c,xe)}}for(var ce in c){var pe=c[ce];if(xe=o[ce],c.hasOwnProperty(ce)&&(pe!=null||xe!=null))switch(ce){case"type":g=pe;break;case"name":p=pe;break;case"checked":le=pe;break;case"defaultChecked":ge=pe;break;case"value":E=pe;break;case"defaultValue":C=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(i(137,a));break;default:pe!==xe&&Yt(n,a,ce,pe,c,xe)}}Yn(n,E,C,X,le,ge,g,p);return;case"select":pe=E=C=ce=null;for(g in o)if(X=o[g],o.hasOwnProperty(g)&&X!=null)switch(g){case"value":break;case"multiple":pe=X;default:c.hasOwnProperty(g)||Yt(n,a,g,null,c,X)}for(p in c)if(g=c[p],X=o[p],c.hasOwnProperty(p)&&(g!=null||X!=null))switch(p){case"value":ce=g;break;case"defaultValue":C=g;break;case"multiple":E=g;default:g!==X&&Yt(n,a,p,g,c,X)}a=C,o=E,c=pe,ce!=null?mn(n,!!o,ce,!1):!!c!=!!o&&(a!=null?mn(n,!!o,a,!0):mn(n,!!o,o?[]:"",!1));return;case"textarea":pe=ce=null;for(C in o)if(p=o[C],o.hasOwnProperty(C)&&p!=null&&!c.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Yt(n,a,C,null,c,p)}for(E in c)if(p=c[E],g=o[E],c.hasOwnProperty(E)&&(p!=null||g!=null))switch(E){case"value":ce=p;break;case"defaultValue":pe=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(i(91));break;default:p!==g&&Yt(n,a,E,p,c,g)}oo(n,ce,pe);return;case"option":for(var Ye in o)if(ce=o[Ye],o.hasOwnProperty(Ye)&&ce!=null&&!c.hasOwnProperty(Ye))switch(Ye){case"selected":n.selected=!1;break;default:Yt(n,a,Ye,null,c,ce)}for(X in c)if(ce=c[X],pe=o[X],c.hasOwnProperty(X)&&ce!==pe&&(ce!=null||pe!=null))switch(X){case"selected":n.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Yt(n,a,X,ce,c,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in o)ce=o[st],o.hasOwnProperty(st)&&ce!=null&&!c.hasOwnProperty(st)&&Yt(n,a,st,null,c,ce);for(le in c)if(ce=c[le],pe=o[le],c.hasOwnProperty(le)&&ce!==pe&&(ce!=null||pe!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(i(137,a));break;default:Yt(n,a,le,ce,c,pe)}return;default:if(Yh(a)){for(var Zt in o)ce=o[Zt],o.hasOwnProperty(Zt)&&ce!==void 0&&!c.hasOwnProperty(Zt)&&Op(n,a,Zt,void 0,c,ce);for(ge in c)ce=c[ge],pe=o[ge],!c.hasOwnProperty(ge)||ce===pe||ce===void 0&&pe===void 0||Op(n,a,ge,ce,c,pe);return}}for(var $ in o)ce=o[$],o.hasOwnProperty($)&&ce!=null&&!c.hasOwnProperty($)&&Yt(n,a,$,null,c,ce);for(xe in c)ce=c[xe],pe=o[xe],!c.hasOwnProperty(xe)||ce===pe||ce==null&&pe==null||Yt(n,a,xe,ce,c,pe)}function Jx(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gT(){if(typeof performance.getEntriesByType=="function"){for(var n=0,a=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var p=o[c],g=p.transferSize,E=p.initiatorType,C=p.duration;if(g&&C&&Jx(E)){for(E=0,C=p.responseEnd,c+=1;c<o.length;c++){var X=o[c],le=X.startTime;if(le>C)break;var ge=X.transferSize,xe=X.initiatorType;ge&&Jx(xe)&&(X=X.responseEnd,E+=ge*(X<C?1:(C-le)/(X-le)))}if(--c,a+=8*(g+E)/(p.duration/1e3),n++,10<n)break}}if(0<n)return a/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Pp=null,zp=null;function _f(n){return n.nodeType===9?n:n.ownerDocument}function $x(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ey(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Ip(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Bp=null;function _T(){var n=window.event;return n&&n.type==="popstate"?n===Bp?!1:(Bp=n,!0):(Bp=null,!1)}var ty=typeof setTimeout=="function"?setTimeout:void 0,vT=typeof clearTimeout=="function"?clearTimeout:void 0,ny=typeof Promise=="function"?Promise:void 0,xT=typeof queueMicrotask=="function"?queueMicrotask:typeof ny<"u"?function(n){return ny.resolve(null).then(n).catch(yT)}:ty;function yT(n){setTimeout(function(){throw n})}function Nr(n){return n==="head"}function iy(n,a){var o=a,c=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(c===0){n.removeChild(p),Ho(a);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")Mc(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,Mc(o);for(var g=o.firstChild;g;){var E=g.nextSibling,C=g.nodeName;g[us]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=E}}else o==="body"&&Mc(n.ownerDocument.body);o=p}while(o);Ho(a)}function ay(n,a){var o=n;n=0;do{var c=o.nextSibling;if(o.nodeType===1?a?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(a?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=c}while(o)}function Fp(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Fp(o),N(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function ST(n,a,o,c){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[us])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=Ki(n.nextSibling),n===null)break}return null}function MT(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Ki(n.nextSibling),n===null))return null;return n}function ry(n,a){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Ki(n.nextSibling),n===null))return null;return n}function Hp(n){return n.data==="$?"||n.data==="$~"}function Gp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function bT(n,a){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=a;else if(n.data!=="$?"||o.readyState!=="loading")a();else{var c=function(){a(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Ki(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return n}var Vp=null;function sy(n){n=n.nextSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(a===0)return Ki(n.nextSibling);a--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||a++}n=n.nextSibling}return null}function oy(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(a===0)return n;a--}else o!=="/$"&&o!=="/&"||a++}n=n.previousSibling}return null}function ly(n,a,o){switch(a=_f(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function Mc(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);N(n)}var Qi=new Map,cy=new Set;function vf(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ja=Z.d;Z.d={f:ET,r:TT,D:AT,C:wT,L:RT,m:CT,X:UT,S:DT,M:NT};function ET(){var n=Ja.f(),a=cf();return n||a}function TT(n){var a=fe(n);a!==null&&a.tag===5&&a.type==="form"?Av(a):Ja.r(n)}var Io=typeof document>"u"?null:document;function uy(n,a,o){var c=Io;if(c&&typeof a=="string"&&a){var p=wt(a);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),cy.has(p)||(cy.add(p),n={rel:n,crossOrigin:o,href:a},c.querySelector(p)===null&&(a=c.createElement("link"),kn(a,"link",n),Se(a),c.head.appendChild(a)))}}function AT(n){Ja.D(n),uy("dns-prefetch",n,null)}function wT(n,a){Ja.C(n,a),uy("preconnect",n,a)}function RT(n,a,o){Ja.L(n,a,o);var c=Io;if(c&&n&&a){var p='link[rel="preload"][as="'+wt(a)+'"]';a==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+wt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+wt(o.imageSizes)+'"]')):p+='[href="'+wt(n)+'"]';var g=p;switch(a){case"style":g=Bo(n);break;case"script":g=Fo(n)}Qi.has(g)||(n=_({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),Qi.set(g,n),c.querySelector(p)!==null||a==="style"&&c.querySelector(bc(g))||a==="script"&&c.querySelector(Ec(g))||(a=c.createElement("link"),kn(a,"link",n),Se(a),c.head.appendChild(a)))}}function CT(n,a){Ja.m(n,a);var o=Io;if(o&&n){var c=a&&typeof a.as=="string"?a.as:"script",p='link[rel="modulepreload"][as="'+wt(c)+'"][href="'+wt(n)+'"]',g=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Fo(n)}if(!Qi.has(g)&&(n=_({rel:"modulepreload",href:n},a),Qi.set(g,n),o.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ec(g)))return}c=o.createElement("link"),kn(c,"link",n),Se(c),o.head.appendChild(c)}}}function DT(n,a,o){Ja.S(n,a,o);var c=Io;if(c&&n){var p=ee(c).hoistableStyles,g=Bo(n);a=a||"default";var E=p.get(g);if(!E){var C={loading:0,preload:null};if(E=c.querySelector(bc(g)))C.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":a},o),(o=Qi.get(g))&&kp(n,o);var X=E=c.createElement("link");Se(X),kn(X,"link",n),X._p=new Promise(function(le,ge){X.onload=le,X.onerror=ge}),X.addEventListener("load",function(){C.loading|=1}),X.addEventListener("error",function(){C.loading|=2}),C.loading|=4,xf(E,a,c)}E={type:"stylesheet",instance:E,count:1,state:C},p.set(g,E)}}}function UT(n,a){Ja.X(n,a);var o=Io;if(o&&n){var c=ee(o).hoistableScripts,p=Fo(n),g=c.get(p);g||(g=o.querySelector(Ec(p)),g||(n=_({src:n,async:!0},a),(a=Qi.get(p))&&Xp(n,a),g=o.createElement("script"),Se(g),kn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function NT(n,a){Ja.M(n,a);var o=Io;if(o&&n){var c=ee(o).hoistableScripts,p=Fo(n),g=c.get(p);g||(g=o.querySelector(Ec(p)),g||(n=_({src:n,async:!0,type:"module"},a),(a=Qi.get(p))&&Xp(n,a),g=o.createElement("script"),Se(g),kn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function fy(n,a,o,c){var p=(p=oe.current)?vf(p):null;if(!p)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=Bo(o.href),o=ee(p).hoistableStyles,c=o.get(a),c||(c={type:"style",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Bo(o.href);var g=ee(p).hoistableStyles,E=g.get(n);if(E||(p=p.ownerDocument||p,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,E),(g=p.querySelector(bc(n)))&&!g._p&&(E.instance=g,E.state.loading=5),Qi.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Qi.set(n,o),g||LT(p,n,o,E.state))),a&&c===null)throw Error(i(528,""));return E}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Fo(o),o=ee(p).hoistableScripts,c=o.get(a),c||(c={type:"script",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Bo(n){return'href="'+wt(n)+'"'}function bc(n){return'link[rel="stylesheet"]['+n+"]"}function hy(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function LT(n,a,o,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),kn(a,"link",o),Se(a),n.head.appendChild(a))}function Fo(n){return'[src="'+wt(n)+'"]'}function Ec(n){return"script[async]"+n}function dy(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+wt(o.href)+'"]');if(c)return a.instance=c,Se(c),c;var p=_({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),Se(c),kn(c,"style",p),xf(c,o.precedence,n),a.instance=c;case"stylesheet":p=Bo(o.href);var g=n.querySelector(bc(p));if(g)return a.state.loading|=4,a.instance=g,Se(g),g;c=hy(o),(p=Qi.get(p))&&kp(c,p),g=(n.ownerDocument||n).createElement("link"),Se(g);var E=g;return E._p=new Promise(function(C,X){E.onload=C,E.onerror=X}),kn(g,"link",c),a.state.loading|=4,xf(g,o.precedence,n),a.instance=g;case"script":return g=Fo(o.src),(p=n.querySelector(Ec(g)))?(a.instance=p,Se(p),p):(c=o,(p=Qi.get(g))&&(c=_({},o),Xp(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),Se(p),kn(p,"link",c),n.head.appendChild(p),a.instance=p);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,xf(c,o.precedence,n));return a.instance}function xf(n,a,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,g=p,E=0;E<c.length;E++){var C=c[E];if(C.dataset.precedence===a)g=C;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function kp(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Xp(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var yf=null;function py(n,a,o){if(yf===null){var c=new Map,p=yf=new Map;p.set(o,c)}else p=yf,c=p.get(o),c||(c=new Map,p.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var g=o[p];if(!(g[us]||g[Sn]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(a)||"";E=n+E;var C=c.get(E);C?C.push(g):c.set(E,[g])}}return c}function my(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function OT(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function gy(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function PT(n,a,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=Bo(c.href),g=a.querySelector(bc(p));if(g){a=g._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(n.count++,n=Sf.bind(n),a.then(n,n)),o.state.loading|=4,o.instance=g,Se(g);return}g=a.ownerDocument||a,c=hy(c),(p=Qi.get(p))&&kp(c,p),g=g.createElement("link"),Se(g);var E=g;E._p=new Promise(function(C,X){E.onload=C,E.onerror=X}),kn(g,"link",c),o.instance=g}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,a),(a=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=Sf.bind(n),a.addEventListener("load",o),a.addEventListener("error",o))}}var jp=0;function zT(n,a){return n.stylesheets&&n.count===0&&bf(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var c=setTimeout(function(){if(n.stylesheets&&bf(n,n.stylesheets),n.unsuspend){var g=n.unsuspend;n.unsuspend=null,g()}},6e4+a);0<n.imgBytes&&jp===0&&(jp=62500*gT());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&bf(n,n.stylesheets),n.unsuspend)){var g=n.unsuspend;n.unsuspend=null,g()}},(n.imgBytes>jp?50:800)+a);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function Sf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Mf=null;function bf(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Mf=new Map,a.forEach(IT,n),Mf=null,Sf.call(n))}function IT(n,a){if(!(a.state.loading&4)){var o=Mf.get(n);if(o)var c=o.get(null);else{o=new Map,Mf.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var E=p[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),c=E)}c&&o.set(null,c)}p=a.instance,E=p.getAttribute("data-precedence"),g=o.get(E)||c,g===c&&o.set(null,p),o.set(E,p),this.count++,c=Sf.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),a.state.loading|=4}}var Tc={$$typeof:R,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function BT(n,a,o,c,p,g,E,C,X){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fe(0),this.hiddenUpdates=Fe(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function _y(n,a,o,c,p,g,E,C,X,le,ge,xe){return n=new BT(n,a,o,E,X,le,ge,xe,C),a=1,g===!0&&(a|=24),g=Ai(3,null,null,a),n.current=g,g.stateNode=n,a=Ed(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:a},Rd(g),n}function vy(n){return n?(n=go,n):go}function xy(n,a,o,c,p,g){p=vy(p),c.context===null?c.context=p:c.pendingContext=p,c=Sr(a),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=Mr(n,c,a),o!==null&&(_i(o,n,a),ic(o,n,a))}function yy(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function Wp(n,a){yy(n,a),(n=n.alternate)&&yy(n,a)}function Sy(n){if(n.tag===13||n.tag===31){var a=ms(n,67108864);a!==null&&_i(a,n,67108864),Wp(n,67108864)}}function My(n){if(n.tag===13||n.tag===31){var a=Ui();a=va(a);var o=ms(n,a);o!==null&&_i(o,n,a),Wp(n,a)}}var Ef=!0;function FT(n,a,o,c){var p=B.T;B.T=null;var g=Z.p;try{Z.p=2,qp(n,a,o,c)}finally{Z.p=g,B.T=p}}function HT(n,a,o,c){var p=B.T;B.T=null;var g=Z.p;try{Z.p=8,qp(n,a,o,c)}finally{Z.p=g,B.T=p}}function qp(n,a,o,c){if(Ef){var p=Yp(c);if(p===null)Lp(n,a,c,Tf,o),Ey(n,c);else if(VT(p,n,a,o,c))c.stopPropagation();else if(Ey(n,c),a&4&&-1<GT.indexOf(n)){for(;p!==null;){var g=fe(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=Te(g.pendingLanes);if(E!==0){var C=g;for(C.pendingLanes|=2,C.entangledLanes|=2;E;){var X=1<<31-Be(E);C.entanglements[1]|=X,E&=~X}ba(g),(Ft&6)===0&&(of=b()+500,xc(0))}}break;case 31:case 13:C=ms(g,2),C!==null&&_i(C,g,2),cf(),Wp(g,2)}if(g=Yp(c),g===null&&Lp(n,a,c,Tf,o),g===p)break;p=g}p!==null&&c.stopPropagation()}else Lp(n,a,c,null,o)}}function Yp(n){return n=Kh(n),Zp(n)}var Tf=null;function Zp(n){if(Tf=null,n=J(n),n!==null){var a=l(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=u(a),n!==null)return n;n=null}else if(o===31){if(n=f(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Tf=n,null}function by(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case te:return 2;case ue:return 8;case ae:case Ue:return 32;case Re:return 268435456;default:return 32}default:return 32}}var Kp=!1,Lr=null,Or=null,Pr=null,Ac=new Map,wc=new Map,zr=[],GT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ey(n,a){switch(n){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Ac.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":wc.delete(a.pointerId)}}function Rc(n,a,o,c,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},a!==null&&(a=fe(a),a!==null&&Sy(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,p!==null&&a.indexOf(p)===-1&&a.push(p),n)}function VT(n,a,o,c,p){switch(a){case"focusin":return Lr=Rc(Lr,n,a,o,c,p),!0;case"dragenter":return Or=Rc(Or,n,a,o,c,p),!0;case"mouseover":return Pr=Rc(Pr,n,a,o,c,p),!0;case"pointerover":var g=p.pointerId;return Ac.set(g,Rc(Ac.get(g)||null,n,a,o,c,p)),!0;case"gotpointercapture":return g=p.pointerId,wc.set(g,Rc(wc.get(g)||null,n,a,o,c,p)),!0}return!1}function Ty(n){var a=J(n.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=u(o),a!==null){n.blockedOn=a,Hl(n.priority,function(){My(o)});return}}else if(a===31){if(a=f(o),a!==null){n.blockedOn=a,Hl(n.priority,function(){My(o)});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Af(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=Yp(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Zh=c,o.target.dispatchEvent(c),Zh=null}else return a=fe(o),a!==null&&Sy(a),n.blockedOn=o,!1;a.shift()}return!0}function Ay(n,a,o){Af(n)&&o.delete(a)}function kT(){Kp=!1,Lr!==null&&Af(Lr)&&(Lr=null),Or!==null&&Af(Or)&&(Or=null),Pr!==null&&Af(Pr)&&(Pr=null),Ac.forEach(Ay),wc.forEach(Ay)}function wf(n,a){n.blockedOn===a&&(n.blockedOn=null,Kp||(Kp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,kT)))}var Rf=null;function wy(n){Rf!==n&&(Rf=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rf===n&&(Rf=null);for(var a=0;a<n.length;a+=3){var o=n[a],c=n[a+1],p=n[a+2];if(typeof c!="function"){if(Zp(c||o)===null)continue;break}var g=fe(o);g!==null&&(n.splice(a,3),a-=3,Yd(g,{pending:!0,data:p,method:o.method,action:c},c,p))}}))}function Ho(n){function a(X){return wf(X,n)}Lr!==null&&wf(Lr,n),Or!==null&&wf(Or,n),Pr!==null&&wf(Pr,n),Ac.forEach(a),wc.forEach(a);for(var o=0;o<zr.length;o++){var c=zr[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<zr.length&&(o=zr[0],o.blockedOn===null);)Ty(o),o.blockedOn===null&&zr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var p=o[c],g=o[c+1],E=p[Bn]||null;if(typeof g=="function")E||wy(o);else if(E){var C=null;if(g&&g.hasAttribute("formAction")){if(p=g,E=g[Bn]||null)C=E.formAction;else if(Zp(p)!==null)continue}else C=E.action;typeof C=="function"?o[c+1]=C:(o.splice(c,3),c-=3),wy(o)}}}function Ry(){function n(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(E){return p=E})},focusReset:"manual",scroll:"manual"})}function a(){p!==null&&(p(),p=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),p!==null&&(p(),p=null)}}}function Qp(n){this._internalRoot=n}Cf.prototype.render=Qp.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,c=Ui();xy(o,c,n,a,null,null)},Cf.prototype.unmount=Qp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;xy(n.current,2,null,n,null,null),cf(),a[pr]=null}};function Cf(n){this._internalRoot=n}Cf.prototype.unstable_scheduleHydration=function(n){if(n){var a=cs();n={blockedOn:null,target:n,priority:a};for(var o=0;o<zr.length&&a!==0&&a<zr[o].priority;o++);zr.splice(o,0,n),o===0&&Ty(n)}};var Cy=e.version;if(Cy!=="19.2.0")throw Error(i(527,Cy,"19.2.0"));Z.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=h(a),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var XT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Df=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Df.isDisabled&&Df.supportsFiber)try{Ae=Df.inject(XT),Ce=Df}catch{}}return Dc.createRoot=function(n,a){if(!s(n))throw Error(i(299));var o=!1,c="",p=zv,g=Iv,E=Bv;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),a=_y(n,1,!1,null,null,o,c,null,p,g,E,Ry),n[pr]=a.current,Np(n),new Qp(a)},Dc.hydrateRoot=function(n,a,o){if(!s(n))throw Error(i(299));var c=!1,p="",g=zv,E=Iv,C=Bv,X=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(C=o.onRecoverableError),o.formState!==void 0&&(X=o.formState)),a=_y(n,1,!0,a,o??null,c,p,X,g,E,C,Ry),a.context=vy(null),o=a.current,c=Ui(),c=va(c),p=Sr(c),p.callback=null,Mr(o,p,c),o=c,a.current.lanes=o,Qe(a,o),ba(a),n[pr]=a.current,Np(n),new Cf(a)},Dc.version="19.2.0",Dc}var Hy;function tA(){if(Hy)return tm.exports;Hy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),tm.exports=eA(),tm.exports}var nA=tA();const iA=wM(nA);RM();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},eu.apply(this,arguments)}var qr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(qr||(qr={}));const Gy="popstate";function aA(r){r===void 0&&(r={});function e(s,l){let{pathname:u="/",search:f="",hash:d=""}=eo(s.location.hash.substr(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Zm("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(s,l){let u=s.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let d=s.location.href,h=d.indexOf("#");f=h===-1?d:d.slice(0,h)}return f+"#"+(typeof l=="string"?l:_h(l))}function i(s,l){h_(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return sA(e,t,i,r)}function Cn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function h_(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rA(){return Math.random().toString(36).substr(2,8)}function Vy(r,e){return{usr:r.state,key:r.key,idx:e}}function Zm(r,e,t,i){return t===void 0&&(t=null),eu({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?eo(e):e,{state:t,key:e&&e.key||i||rA()})}function _h(r){let{pathname:e="/",search:t="",hash:i=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function eo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substr(i),r=r.substr(0,i)),r&&(e.pathname=r)}return e}function sA(r,e,t,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:l=!1}=i,u=s.history,f=qr.Pop,d=null,h=m();h==null&&(h=0,u.replaceState(eu({},u.state,{idx:h}),""));function m(){return(u.state||{idx:null}).idx}function _(){f=qr.Pop;let S=m(),x=S==null?null:S-h;h=S,d&&d({action:f,location:M.location,delta:x})}function v(S,x){f=qr.Push;let D=Zm(M.location,S,x);t&&t(D,S),h=m()+1;let R=Vy(D,h),A=M.createHref(D);try{u.pushState(R,"",A)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;s.location.assign(A)}l&&d&&d({action:f,location:M.location,delta:1})}function y(S,x){f=qr.Replace;let D=Zm(M.location,S,x);t&&t(D,S),h=m();let R=Vy(D,h),A=M.createHref(D);u.replaceState(R,"",A),l&&d&&d({action:f,location:M.location,delta:0})}function T(S){let x=s.location.origin!=="null"?s.location.origin:s.location.href,D=typeof S=="string"?S:_h(S);return D=D.replace(/ $/,"%20"),Cn(x,"No window.location.(origin|href) available to create URL for href: "+D),new URL(D,x)}let M={get action(){return f},get location(){return r(s,u)},listen(S){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(Gy,_),d=S,()=>{s.removeEventListener(Gy,_),d=null}},createHref(S){return e(s,S)},createURL:T,encodeLocation(S){let x=T(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:y,go(S){return u.go(S)}};return M}var ky;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(ky||(ky={}));function oA(r,e,t){return t===void 0&&(t="/"),lA(r,e,t)}function lA(r,e,t,i){let s=typeof e=="string"?eo(e):e,l=d_(s.pathname||"/",t);if(l==null)return null;let u=CM(r);cA(u);let f=null;for(let d=0;f==null&&d<u.length;++d){let h=SA(l);f=vA(u[d],h)}return f}function CM(r,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let s=(l,u,f)=>{let d={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};d.relativePath.startsWith("/")&&(Cn(d.relativePath.startsWith(i),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(i.length));let h=$r([i,d.relativePath]),m=t.concat(d);l.children&&l.children.length>0&&(Cn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),CM(l.children,e,m,h)),!(l.path==null&&!l.index)&&e.push({path:h,score:gA(h,l.index),routesMeta:m})};return r.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))s(l,u);else for(let d of DM(l.path))s(l,u,d)}),e}function DM(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let u=DM(i.join("/")),f=[];return f.push(...u.map(d=>d===""?l:[l,d].join("/"))),s&&f.push(...u),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function cA(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:_A(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const uA=/^:[\w-]+$/,fA=3,hA=2,dA=1,pA=10,mA=-2,Xy=r=>r==="*";function gA(r,e){let t=r.split("/"),i=t.length;return t.some(Xy)&&(i+=mA),e&&(i+=hA),t.filter(s=>!Xy(s)).reduce((s,l)=>s+(uA.test(l)?fA:l===""?dA:pA),i)}function _A(r,e){return r.length===e.length&&r.slice(0,-1).every((i,s)=>i===e[s])?r[r.length-1]-e[e.length-1]:0}function vA(r,e,t){let{routesMeta:i}=r,s={},l="/",u=[];for(let f=0;f<i.length;++f){let d=i[f],h=f===i.length-1,m=l==="/"?e:e.slice(l.length)||"/",_=xA({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},m),v=d.route;if(!_)return null;Object.assign(s,_.params),u.push({params:s,pathname:$r([l,_.pathname]),pathnameBase:TA($r([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=$r([l,_.pathnameBase]))}return u}function xA(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=yA(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let l=s[0],u=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:i.reduce((h,m,_)=>{let{paramName:v,isOptional:y}=m;if(v==="*"){let M=f[_]||"";u=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const T=f[_];return y&&!T?h[v]=void 0:h[v]=(T||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:r}}function yA(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),h_(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let i=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,d)=>(i.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(i.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function SA(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return h_(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function d_(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}function MA(r,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:s=""}=typeof r=="string"?eo(r):r;return{pathname:t?t.startsWith("/")?t:bA(t,e):e,search:AA(i),hash:wA(s)}}function bA(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function rm(r,e,t,i){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function EA(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function UM(r,e){let t=EA(r);return e?t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function NM(r,e,t,i){i===void 0&&(i=!1);let s;typeof r=="string"?s=eo(r):(s=eu({},r),Cn(!s.pathname||!s.pathname.includes("?"),rm("?","pathname","search",s)),Cn(!s.pathname||!s.pathname.includes("#"),rm("#","pathname","hash",s)),Cn(!s.search||!s.search.includes("#"),rm("#","search","hash",s)));let l=r===""||s.pathname==="",u=l?"/":s.pathname,f;if(u==null)f=t;else{let _=e.length-1;if(!i&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),_-=1;s.pathname=v.join("/")}f=_>=0?e[_]:"/"}let d=MA(s,f),h=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||m)&&(d.pathname+="/"),d}const $r=r=>r.join("/").replace(/\/\/+/g,"/"),TA=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),AA=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,wA=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function RA(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const LM=["post","put","patch","delete"];new Set(LM);const CA=["get",...LM];new Set(CA);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},tu.apply(this,arguments)}const p_=Oe.createContext(null),DA=Oe.createContext(null),to=Oe.createContext(null),zh=Oe.createContext(null),no=Oe.createContext({outlet:null,matches:[],isDataRoute:!1}),OM=Oe.createContext(null);function UA(r,e){let{relative:t}=e===void 0?{}:e;mu()||Cn(!1);let{basename:i,navigator:s}=Oe.useContext(to),{hash:l,pathname:u,search:f}=zM(r,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:$r([i,u])),s.createHref({pathname:d,search:f,hash:l})}function mu(){return Oe.useContext(zh)!=null}function gu(){return mu()||Cn(!1),Oe.useContext(zh).location}function PM(r){Oe.useContext(to).static||Oe.useLayoutEffect(r)}function NA(){let{isDataRoute:r}=Oe.useContext(no);return r?jA():LA()}function LA(){mu()||Cn(!1);let r=Oe.useContext(p_),{basename:e,future:t,navigator:i}=Oe.useContext(to),{matches:s}=Oe.useContext(no),{pathname:l}=gu(),u=JSON.stringify(UM(s,t.v7_relativeSplatPath)),f=Oe.useRef(!1);return PM(()=>{f.current=!0}),Oe.useCallback(function(h,m){if(m===void 0&&(m={}),!f.current)return;if(typeof h=="number"){i.go(h);return}let _=NM(h,JSON.parse(u),l,m.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:$r([e,_.pathname])),(m.replace?i.replace:i.push)(_,m.state,m)},[e,i,u,l,r])}function zM(r,e){let{relative:t}=e===void 0?{}:e,{future:i}=Oe.useContext(to),{matches:s}=Oe.useContext(no),{pathname:l}=gu(),u=JSON.stringify(UM(s,i.v7_relativeSplatPath));return Oe.useMemo(()=>NM(r,JSON.parse(u),l,t==="path"),[r,u,l,t])}function OA(r,e){return PA(r,e)}function PA(r,e,t,i){mu()||Cn(!1);let{navigator:s}=Oe.useContext(to),{matches:l}=Oe.useContext(no),u=l[l.length-1],f=u?u.params:{};u&&u.pathname;let d=u?u.pathnameBase:"/";u&&u.route;let h=gu(),m;if(e){var _;let S=typeof e=="string"?eo(e):e;d==="/"||(_=S.pathname)!=null&&_.startsWith(d)||Cn(!1),m=S}else m=h;let v=m.pathname||"/",y=v;if(d!=="/"){let S=d.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=oA(r,{pathname:y}),M=HA(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},f,S.params),pathname:$r([d,s.encodeLocation?s.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?d:$r([d,s.encodeLocation?s.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,t,i);return e&&M?Oe.createElement(zh.Provider,{value:{location:tu({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:qr.Pop}},M):M}function zA(){let r=XA(),e=RA(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Oe.createElement(Oe.Fragment,null,Oe.createElement("h2",null,"Unexpected Application Error!"),Oe.createElement("h3",{style:{fontStyle:"italic"}},e),t?Oe.createElement("pre",{style:s},t):null,null)}const IA=Oe.createElement(zA,null);class BA extends Oe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Oe.createElement(no.Provider,{value:this.props.routeContext},Oe.createElement(OM.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FA(r){let{routeContext:e,match:t,children:i}=r,s=Oe.useContext(p_);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),Oe.createElement(no.Provider,{value:e},i)}function HA(r,e,t,i){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let u=r,f=(s=t)==null?void 0:s.errors;if(f!=null){let m=u.findIndex(_=>_.route.id&&(f==null?void 0:f[_.route.id])!==void 0);m>=0||Cn(!1),u=u.slice(0,Math.min(u.length,m+1))}let d=!1,h=-1;if(t&&i&&i.v7_partialHydration)for(let m=0;m<u.length;m++){let _=u[m];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=m),_.route.id){let{loaderData:v,errors:y}=t,T=_.route.loader&&v[_.route.id]===void 0&&(!y||y[_.route.id]===void 0);if(_.route.lazy||T){d=!0,h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}return u.reduceRight((m,_,v)=>{let y,T=!1,M=null,S=null;t&&(y=f&&_.route.id?f[_.route.id]:void 0,M=_.route.errorElement||IA,d&&(h<0&&v===0?(WA("route-fallback"),T=!0,S=null):h===v&&(T=!0,S=_.route.hydrateFallbackElement||null)));let x=e.concat(u.slice(0,v+1)),D=()=>{let R;return y?R=M:T?R=S:_.route.Component?R=Oe.createElement(_.route.Component,null):_.route.element?R=_.route.element:R=m,Oe.createElement(FA,{match:_,routeContext:{outlet:m,matches:x,isDataRoute:t!=null},children:R})};return t&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?Oe.createElement(BA,{location:t.location,revalidation:t.revalidation,component:M,error:y,children:D(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):D()},null)}var IM=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(IM||{}),BM=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(BM||{});function GA(r){let e=Oe.useContext(p_);return e||Cn(!1),e}function VA(r){let e=Oe.useContext(DA);return e||Cn(!1),e}function kA(r){let e=Oe.useContext(no);return e||Cn(!1),e}function FM(r){let e=kA(),t=e.matches[e.matches.length-1];return t.route.id||Cn(!1),t.route.id}function XA(){var r;let e=Oe.useContext(OM),t=VA(),i=FM();return e!==void 0?e:(r=t.errors)==null?void 0:r[i]}function jA(){let{router:r}=GA(IM.UseNavigateStable),e=FM(BM.UseNavigateStable),t=Oe.useRef(!1);return PM(()=>{t.current=!0}),Oe.useCallback(function(s,l){l===void 0&&(l={}),t.current&&(typeof s=="number"?r.navigate(s):r.navigate(s,tu({fromRouteId:e},l)))},[r,e])}const jy={};function WA(r,e,t){jy[r]||(jy[r]=!0)}function qA(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Gc(r){Cn(!1)}function YA(r){let{basename:e="/",children:t=null,location:i,navigationType:s=qr.Pop,navigator:l,static:u=!1,future:f}=r;mu()&&Cn(!1);let d=e.replace(/^\/*/,"/"),h=Oe.useMemo(()=>({basename:d,navigator:l,static:u,future:tu({v7_relativeSplatPath:!1},f)}),[d,f,l,u]);typeof i=="string"&&(i=eo(i));let{pathname:m="/",search:_="",hash:v="",state:y=null,key:T="default"}=i,M=Oe.useMemo(()=>{let S=d_(m,d);return S==null?null:{location:{pathname:S,search:_,hash:v,state:y,key:T},navigationType:s}},[d,m,_,v,y,T,s]);return M==null?null:Oe.createElement(to.Provider,{value:h},Oe.createElement(zh.Provider,{children:t,value:M}))}function ZA(r){let{children:e,location:t}=r;return OA(Km(e),t)}new Promise(()=>{});function Km(r,e){e===void 0&&(e=[]);let t=[];return Oe.Children.forEach(r,(i,s)=>{if(!Oe.isValidElement(i))return;let l=[...e,s];if(i.type===Oe.Fragment){t.push.apply(t,Km(i.props.children,l));return}i.type!==Gc&&Cn(!1),!i.props.index||!i.props.children||Cn(!1);let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Km(i.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qm(){return Qm=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},Qm.apply(this,arguments)}function KA(r,e){if(r==null)return{};var t={},i=Object.keys(r),s,l;for(l=0;l<i.length;l++)s=i[l],!(e.indexOf(s)>=0)&&(t[s]=r[s]);return t}function QA(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function JA(r,e){return r.button===0&&(!e||e==="_self")&&!QA(r)}const $A=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ew="6";try{window.__reactRouterVersion=ew}catch{}const tw="startTransition",Wy=KT[tw];function nw(r){let{basename:e,children:t,future:i,window:s}=r,l=Oe.useRef();l.current==null&&(l.current=aA({window:s,v5Compat:!0}));let u=l.current,[f,d]=Oe.useState({action:u.action,location:u.location}),{v7_startTransition:h}=i||{},m=Oe.useCallback(_=>{h&&Wy?Wy(()=>d(_)):d(_)},[d,h]);return Oe.useLayoutEffect(()=>u.listen(m),[u,m]),Oe.useEffect(()=>qA(i),[i]),Oe.createElement(YA,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:u,future:i})}const iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sm=Oe.forwardRef(function(e,t){let{onClick:i,relative:s,reloadDocument:l,replace:u,state:f,target:d,to:h,preventScrollReset:m,viewTransition:_}=e,v=KA(e,$A),{basename:y}=Oe.useContext(to),T,M=!1;if(typeof h=="string"&&aw.test(h)&&(T=h,iw))try{let R=new URL(window.location.href),A=h.startsWith("//")?new URL(R.protocol+h):new URL(h),O=d_(A.pathname,y);A.origin===R.origin&&O!=null?h=O+A.search+A.hash:M=!0}catch{}let S=UA(h,{relative:s}),x=rw(h,{replace:u,state:f,target:d,preventScrollReset:m,relative:s,viewTransition:_});function D(R){i&&i(R),R.defaultPrevented||x(R)}return Oe.createElement("a",Qm({},v,{href:T||S,onClick:M||l?i:D,ref:t,target:d}))});var qy;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(qy||(qy={}));var Yy;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Yy||(Yy={}));function rw(r,e){let{target:t,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:f}=e===void 0?{}:e,d=NA(),h=gu(),m=zM(r,{relative:u});return Oe.useCallback(_=>{if(JA(_,t)){_.preventDefault();let v=i!==void 0?i:_h(h)===_h(m);d(r,{replace:v,state:s,preventScrollReset:l,relative:u,viewTransition:f})}},[h,d,m,i,s,t,r,l,u,f])}const sw=r=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",...r,children:L.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),ow=r=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[L.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),L.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),L.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),lw=r=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r,children:[L.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),L.jsx("polyline",{points:"22,6 12,13 2,6"})]}),HM=r=>L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",...r,children:L.jsx("path",{d:"M12.83,6.34L12,5.5l-0.83,0.84L12,7.17L12.83,6.34M12,2L8.5,5.5L4,1v3.5L1,8l3.5,4.5L1,16l3.5,3.5L4,23l4.5-3.5L12,23 l3.5-3.5L20,23l-0.5-3.5L23,16l-3.5-3.5L23,8l-3.5-4.5L20,1L15.5,5.5L12,2z"})}),cw=()=>{const[r,e]=Oe.useState(!1),[t,i]=Oe.useState(!1),s=[{href:"/menu",label:"Menu"},{href:"/about",label:"About"},{href:"/services",label:"Services"},{href:"#testimonials",label:"Testimonials"},{href:"#contact",label:"Contact"}],l=gu(),u=()=>{window.scrollY>50?i(!0):i(!1)};Oe.useEffect(()=>(window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}),[]);const f=(d,h)=>{var m;d.preventDefault(),l.pathname==="/"?(m=document.querySelector(h))==null||m.scrollIntoView({behavior:"smooth"}):window.location.href="/"+h,e(!1)};return L.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"bg-slate-900/80 shadow-md backdrop-blur-sm":"bg-transparent"}`,children:[L.jsxs("div",{className:"container mx-auto px-6 py-4 flex justify-between items-center",children:[L.jsxs(sm,{to:"/",className:"flex items-center space-x-2 text-xl font-medium text-neutral-100",children:[L.jsx(HM,{className:"h-8 w-auto text-amber-400"}),L.jsx("span",{className:"font-serif",children:"Deniz Sezer"})]}),L.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[s.map(d=>d.href.startsWith("#")?L.jsx("a",{href:d.href,onClick:h=>f(h,d.href),className:"text-neutral-300 hover:text-amber-400 transition-colors duration-300",children:d.label},d.href):L.jsx(sm,{to:d.href,className:"text-neutral-300 hover:text-amber-400 transition-colors duration-300",children:d.label},d.href)),L.jsx("a",{href:"#contact",onClick:d=>f(d,"#contact"),className:"bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-500 transition-colors duration-300 text-sm font-semibold",children:"Book an Experience"})]}),L.jsx("div",{className:"md:hidden",children:L.jsx("button",{onClick:()=>e(!r),className:"text-neutral-200 focus:outline-none",children:L.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:L.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:r?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})})]}),r&&L.jsx("div",{className:"md:hidden bg-slate-900/95 shadow-xl",children:L.jsxs("nav",{className:"flex flex-col items-center space-y-4 py-4",children:[s.map(d=>d.href.startsWith("#")?L.jsx("a",{href:d.href,onClick:h=>f(h,d.href),className:"text-neutral-300 hover:text-amber-400 transition-colors duration-300",children:d.label},d.href):L.jsx(sm,{to:d.href,onClick:()=>e(!1),className:"text-neutral-300 hover:text-amber-400 transition-colors duration-300",children:d.label},d.href)),L.jsx("a",{href:"#contact",onClick:d=>f(d,"#contact"),className:"bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-colors duration-300 font-semibold",children:"Book an Experience"})]})})]})},uw=()=>{const r=e=>{var t;e.preventDefault(),(t=document.querySelector("#contact"))==null||t.scrollIntoView({behavior:"smooth"})};return L.jsxs("section",{id:"home",className:"h-screen min-h-[700px] flex items-center justify-center text-center relative overflow-hidden bg-black",children:[L.jsx("img",{src:"./imggallery/146036331_2570005219790657_2835741437971567938_n.jpg",alt:"Chef background",className:"absolute inset-0 w-full h-full object-cover opacity-30"}),L.jsxs("div",{className:"relative z-10 text-white p-6 animate-fadeUp max-w-5xl",children:[L.jsx("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4 tracking-tight",children:"Deniz Sezer — Michelin-Trained Chef"}),L.jsx("p",{className:"text-xl md:text-2xl font-light mb-6 opacity-90",children:"Intimate, multi-course private dining and bespoke culinary experiences."}),L.jsx("p",{className:"max-w-2xl mx-auto text-base md:text-lg text-neutral-200 mb-8",children:"Chef Deniz blends Anatolian roots with haute cuisine techniques to craft memorable evenings for exclusive guests."}),L.jsx("a",{href:"#contact",onClick:r,className:"inline-block bg-amber-600 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg",children:"Inquire About Private Dining"})]}),L.jsx("style",{children:`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeUp { animation: fadeUp 1s ease-out both; }
      `})]})},fw=()=>L.jsx("section",{id:"about",className:"py-16 md:py-24 bg-slate-900/80 backdrop-blur-sm",children:L.jsx("div",{className:"container mx-auto px-6",children:L.jsxs("div",{className:"grid md:grid-cols-5 gap-10 items-center",children:[L.jsx("div",{className:"md:col-span-2",children:L.jsxs("div",{className:"relative",children:[L.jsx("img",{src:"./imggallery/340490753_536729521725498_7803232779063458043_n.jpg",alt:"Chef Deniz Sezer",className:"rounded-lg shadow-2xl w-full h-auto object-cover"}),L.jsxs("div",{className:"absolute -bottom-3 -right-3 bg-amber-600 text-white text-xs sm:text-sm font-bold p-3 rounded-full shadow-lg",children:["MICHELIN",L.jsx("br",{}),"EXPERIENCE"]})]})}),L.jsxs("div",{className:"md:col-span-3",children:[L.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-100 mb-4",children:"Meet Chef Deniz Sezer"}),L.jsx("p",{className:"text-base md:text-lg text-neutral-300 mb-4 leading-relaxed",children:"Born in Izmir, Turkey, Chef Deniz Sezer merges Anatolian tradition with Michelin-trained technique to create private dining experiences that are intimate, theatrical, and meticulously crafted."}),L.jsx("p",{className:"text-base md:text-lg text-neutral-300 mb-4 leading-relaxed",children:"With extensive experience in Michelin-starred kitchens and private celebrity engagements — including a five-day private residency for Karim Benzema in Miami — Chef Deniz offers bespoke multi-course menus priced between $1,500 and $5,000 per evening, depending on customization."}),L.jsx("p",{className:"text-base md:text-lg text-neutral-300 mb-6 leading-relaxed",children:"Each event is curated with seasonal ingredients, refined techniques, and a personal narrative that elevates every course."}),L.jsxs("div",{className:"border-l-4 border-amber-500 pl-4",children:[L.jsx("p",{className:"font-semibold text-neutral-100 italic",children:'"My philosophy is simple: use the finest ingredients to create food that is both beautiful and deeply satisfying. Food should tell a story."'}),L.jsx("p",{className:"text-sm text-neutral-400 mt-1",children:"- Deniz Sezer"})]})]})]})})}),om=["./imggallery/denizsezeridea.jpeg","./imggallery/316119619_6422508417765998_6768193420321574199_n.jpg","./imggallery/324544066_152195107605724_1918904625421334616_n.jpg","./imggallery/340490753_536729521725498_7803232779063458043_n.jpg","./imggallery/299622273_867508887542151_6159437778816378211_n.jpg","./imggallery/310038471_641913360867435_675961683670589393_n.jpg","./imggallery/313873528_1866452180360149_4966383405849033872_n.jpg","./imggallery/351088026_944585160151459_2706183776673791694_n.jpg"],hw=()=>{const[r,e]=Oe.useState(null);return L.jsx("section",{id:"gallery",className:"py-16 bg-slate-900/80",children:L.jsxs("div",{className:"container mx-auto px-6",children:[L.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-neutral-100 mb-6",children:"Gallery"}),L.jsx("p",{className:"text-neutral-300 mb-8 max-w-2xl",children:"A curated selection of moments from private dinners, pop-ups and exclusive events."}),L.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:om.map((t,i)=>L.jsxs("button",{onClick:()=>e(i),className:"relative overflow-hidden rounded-lg shadow-lg group focus:outline-none","aria-label":`Open image ${i+1}`,children:[L.jsx("img",{src:t,alt:`Gallery ${i+1}`,className:"w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105",loading:"lazy"}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4",children:L.jsx("div",{className:"text-sm text-neutral-100",children:"Chef Deniz Sezer"})})]},t))}),r!==null&&L.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4",children:L.jsx("div",{className:"max-w-4xl w-full",children:L.jsxs("div",{className:"relative bg-slate-900 rounded-lg overflow-hidden",children:[L.jsx("button",{onClick:()=>e(null),className:"absolute top-3 right-3 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70",children:"✕"}),L.jsx("img",{src:om[r],alt:`Large ${r+1}`,className:"w-full h-[70vh] object-contain bg-black"}),L.jsx("div",{className:"p-4 border-t border-slate-700 bg-slate-900/90 text-neutral-300",children:L.jsxs("div",{className:"flex justify-between items-center",children:[L.jsxs("div",{children:[L.jsx("div",{className:"font-semibold text-neutral-100",children:"Private Dining — Chef Deniz Sezer"}),L.jsx("div",{className:"text-sm",children:"Exclusive evenings, curated menus, unforgettable flavors."})]}),L.jsxs("div",{className:"text-sm text-neutral-400",children:["Image ",r+1," of ",om.length]})]})})]})})})]})})},dw=()=>L.jsx("div",{className:"flex justify-center mb-4 text-amber-400",children:[...Array(5)].map((r,e)=>L.jsx(sw,{className:"w-5 h-5"},e))}),pw=({quote:r,author:e,role:t})=>L.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-md p-8 rounded-lg shadow-lg border border-slate-700/50 flex flex-col items-center text-center",children:[L.jsx(dw,{}),L.jsxs("p",{className:"text-neutral-300 italic mb-6",children:['"',r,'"']}),L.jsx("div",{className:"font-semibold text-neutral-100",children:e}),L.jsx("div",{className:"text-sm text-neutral-400",children:t})]}),mw=()=>{const r=[{quote:"Absolutely fantastic! The attention to detail and customer service exceeded my expectations every single time. A truly world-class experience.",author:"Jane Smith",role:"Private Event Host"},{quote:"The Anatolian Table transformed our event with exquisite dishes and impeccable service. Chef Deniz's expertise truly shines through in every bite.",author:"Emily Carter",role:"Corporate Client"},{quote:"This service transformed my experience! Highly recommend for anyone looking for quality and professionalism. Worth every penny.",author:"John Doe",role:"Family Dinner"}];return L.jsx("section",{id:"testimonials",className:"py-20 sm:py-32 bg-slate-900/80 backdrop-blur-sm",children:L.jsxs("div",{className:"container mx-auto px-6 text-center",children:[L.jsx("h2",{className:"text-4xl lg:text-5xl font-serif text-neutral-100 mb-4",children:"Rated 5 Stars by Customers"}),L.jsx("p",{className:"text-lg text-neutral-300 max-w-3xl mx-auto mb-16",children:"Don't just take our word for it. Here's what our valued clients have to say about their experience."}),L.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:r.map((e,t)=>L.jsx(pw,{...e},t))})]})})},gw=()=>{const[r,e]=Oe.useState({name:"",email:"",phone:"",message:""}),[t,i]=Oe.useState(!1),s=u=>{e({...r,[u.target.name]:u.target.value})},l=u=>{u.preventDefault(),console.log("Form submitted:",r),i(!0)};return L.jsx("section",{id:"contact",className:"py-20 sm:py-32",children:L.jsx("div",{className:"container mx-auto px-6 relative",children:L.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[L.jsxs("div",{className:"text-white",children:[L.jsx("h2",{className:"text-4xl lg:text-6xl font-serif mb-4",children:"Elevate Your Dining"}),L.jsx("p",{className:"text-xl text-neutral-200 leading-relaxed",children:"Ready to transform your next event into an unforgettable culinary journey? Bespoke menus crafted with artistry and exceptional flavors await you. Reach out to begin planning your experience in the San Francisco Bay Area."})]}),L.jsx("div",{className:"bg-slate-800/60 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-slate-700",children:t?L.jsxs("div",{className:"text-center py-10",children:[L.jsx("h3",{className:"text-2xl font-serif text-neutral-100 mb-2",children:"Thank You!"}),L.jsx("p",{className:"text-neutral-300",children:"Your request has been received. We will be in touch shortly."})]}):L.jsxs("form",{onSubmit:l,className:"space-y-6",children:[L.jsxs("div",{children:[L.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-neutral-300",children:"Your First Name"}),L.jsx("input",{type:"text",name:"name",id:"name",required:!0,value:r.name,onChange:s,className:"mt-1 block w-full bg-slate-700/50 text-neutral-100 px-4 py-3 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500",placeholder:"Enter your first name"})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-neutral-300",children:"Your Email Address*"}),L.jsx("input",{type:"email",name:"email",id:"email",required:!0,value:r.email,onChange:s,className:"mt-1 block w-full bg-slate-700/50 text-neutral-100 px-4 py-3 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500",placeholder:"Enter your email address"})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-neutral-300",children:"Phone number*"}),L.jsx("input",{type:"tel",name:"phone",id:"phone",required:!0,value:r.phone,onChange:s,className:"mt-1 block w-full bg-slate-700/50 text-neutral-100 px-4 py-3 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500",placeholder:"Enter your phone number"})]}),L.jsxs("div",{children:[L.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-neutral-300",children:"Your Message*"}),L.jsx("textarea",{name:"message",id:"message",rows:4,required:!0,value:r.message,onChange:s,className:"mt-1 block w-full bg-slate-700/50 text-neutral-100 px-4 py-3 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500",placeholder:"Tell us about your event..."})]}),L.jsx("div",{children:L.jsx("button",{type:"submit",className:"w-full bg-amber-600 text-white font-bold py-3 px-6 rounded-md hover:bg-amber-500 transition-colors duration-300 text-lg",children:"Submit Your Request"})})]})})]})})})},_w=()=>L.jsx("footer",{className:"bg-slate-950/80 text-neutral-300",children:L.jsxs("div",{className:"container mx-auto px-6 py-12",children:[L.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center text-center md:text-left",children:[L.jsxs("div",{className:"mb-6 md:mb-0",children:[L.jsxs("a",{href:"#home",className:"flex items-center justify-center md:justify-start space-x-2 text-xl font-medium text-white mb-4",children:[L.jsx(HM,{className:"h-8 w-auto text-amber-500"}),L.jsx("span",{className:"font-serif",children:"Deniz Sezer | Culinary Artistry"})]}),L.jsx("p",{className:"text-neutral-400",children:"Exquisite Dining Experiences."})]}),L.jsxs("div",{className:"flex flex-col items-center md:items-end",children:[L.jsxs("div",{className:"flex space-x-4 mb-4",children:[L.jsx("a",{href:"mailto:info@denizsezer.com",className:"text-neutral-400 hover:text-amber-500 transition-colors duration-300",children:L.jsx(lw,{className:"w-6 h-6"})}),L.jsx("a",{href:"#",className:"text-neutral-400 hover:text-amber-500 transition-colors duration-300",children:L.jsx(ow,{className:"w-6 h-6"})})]}),L.jsx("a",{href:"mailto:info@denizsezer.com",className:"hover:text-amber-500 transition-colors duration-300 text-neutral-300",children:"info@denizsezer.com"})]})]}),L.jsx("div",{className:"mt-8 border-t border-slate-700 pt-6 text-center text-sm text-neutral-500",children:L.jsxs("p",{children:["© ",new Date().getFullYear()," Deniz Sezer. All Rights Reserved."]})})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const m_="180",vw=0,Zy=1,xw=2,GM=1,yw=2,ar=3,as=0,ui=1,lr=2,es=0,hl=1,Jm=2,Ky=3,Qy=4,Sw=5,Fs=100,Mw=101,bw=102,Ew=103,Tw=104,Aw=200,ww=201,Rw=202,Cw=203,$m=204,eg=205,Dw=206,Uw=207,Nw=208,Lw=209,Ow=210,Pw=211,zw=212,Iw=213,Bw=214,tg=0,ng=1,ig=2,bl=3,ag=4,rg=5,sg=6,og=7,g_=0,Fw=1,Hw=2,ts=0,Gw=1,Vw=2,kw=3,VM=4,Xw=5,jw=6,Ww=7,kM=300,El=301,Tl=302,lg=303,cg=304,Ih=306,ug=1e3,ma=1001,fg=1002,Hi=1003,qw=1004,Uf=1005,vi=1006,lm=1007,Gs=1008,Ua=1009,XM=1010,jM=1011,nu=1012,__=1013,Js=1014,ga=1015,Ol=1016,v_=1017,x_=1018,iu=1020,WM=35902,qM=35899,YM=1021,ZM=1022,ta=1023,au=1026,ru=1027,y_=1028,S_=1029,KM=1030,M_=1031,b_=1033,oh=33776,lh=33777,ch=33778,uh=33779,hg=35840,dg=35841,pg=35842,mg=35843,gg=36196,_g=37492,vg=37496,xg=37808,yg=37809,Sg=37810,Mg=37811,bg=37812,Eg=37813,Tg=37814,Ag=37815,wg=37816,Rg=37817,Cg=37818,Dg=37819,Ug=37820,Ng=37821,Lg=36492,Og=36494,Pg=36495,zg=36283,Ig=36284,Bg=36285,Fg=36286,Yw=3200,Zw=3201,E_=0,Kw=1,jr="",Oi="srgb",Al="srgb-linear",vh="linear",Kt="srgb",Go=7680,Jy=519,Qw=512,Jw=513,$w=514,QM=515,e2=516,t2=517,n2=518,i2=519,$y=35044,eS="300 es",wa=2e3,xh=2001;class Pl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tS=1234567;const jc=Math.PI/180,su=180/Math.PI;function zl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[t&63|128]+Qn[t>>8&255]+"-"+Qn[t>>16&255]+Qn[t>>24&255]+Qn[i&255]+Qn[i>>8&255]+Qn[i>>16&255]+Qn[i>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function T_(r,e){return(r%e+e)%e}function a2(r,e,t,i,s){return i+(r-e)*(s-i)/(t-e)}function r2(r,e,t){return r!==e?(t-r)/(e-r):0}function Wc(r,e,t){return(1-t)*r+t*e}function s2(r,e,t,i){return Wc(r,e,1-Math.exp(-t*i))}function o2(r,e=1){return e-Math.abs(T_(r,e*2)-e)}function l2(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function c2(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function u2(r,e){return r+Math.floor(Math.random()*(e-r+1))}function f2(r,e){return r+Math.random()*(e-r)}function h2(r){return r*(.5-Math.random())}function d2(r){r!==void 0&&(tS=r);let e=tS+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p2(r){return r*jc}function m2(r){return r*su}function g2(r){return(r&r-1)===0&&r!==0}function _2(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function v2(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function x2(r,e,t,i,s){const l=Math.cos,u=Math.sin,f=l(t/2),d=u(t/2),h=l((e+i)/2),m=u((e+i)/2),_=l((e-i)/2),v=u((e-i)/2),y=l((i-e)/2),T=u((i-e)/2);switch(s){case"XYX":r.set(f*m,d*_,d*v,f*h);break;case"YZY":r.set(d*v,f*m,d*_,f*h);break;case"ZXZ":r.set(d*_,d*v,f*m,f*h);break;case"XZX":r.set(f*m,d*T,d*y,f*h);break;case"YXY":r.set(d*y,f*m,d*T,f*h);break;case"ZYZ":r.set(d*T,d*y,f*m,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const sl={DEG2RAD:jc,RAD2DEG:su,generateUUID:zl,clamp:At,euclideanModulo:T_,mapLinear:a2,inverseLerp:r2,lerp:Wc,damp:s2,pingpong:o2,smoothstep:l2,smootherstep:c2,randInt:u2,randFloat:f2,randFloatSpread:h2,seededRandom:d2,degToRad:p2,radToDeg:m2,isPowerOfTwo:g2,ceilPowerOfTwo:_2,floorPowerOfTwo:v2,setQuaternionFromProperEuler:x2,normalize:ri,denormalize:rl};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*i-u*s+e.x,this.y=l*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _u{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,l,u,f){let d=i[s+0],h=i[s+1],m=i[s+2],_=i[s+3];const v=l[u+0],y=l[u+1],T=l[u+2],M=l[u+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(f===1){e[t+0]=v,e[t+1]=y,e[t+2]=T,e[t+3]=M;return}if(_!==M||d!==v||h!==y||m!==T){let S=1-f;const x=d*v+h*y+m*T+_*M,D=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const O=Math.sqrt(R),P=Math.atan2(O,x*D);S=Math.sin(S*P)/O,f=Math.sin(f*P)/O}const A=f*D;if(d=d*S+v*A,h=h*S+y*A,m=m*S+T*A,_=_*S+M*A,S===1-f){const O=1/Math.sqrt(d*d+h*h+m*m+_*_);d*=O,h*=O,m*=O,_*=O}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,l,u){const f=i[s],d=i[s+1],h=i[s+2],m=i[s+3],_=l[u],v=l[u+1],y=l[u+2],T=l[u+3];return e[t]=f*T+m*_+d*y-h*v,e[t+1]=d*T+m*v+h*_-f*y,e[t+2]=h*T+m*y+f*v-d*_,e[t+3]=m*T-f*_-d*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(i/2),m=f(s/2),_=f(l/2),v=d(i/2),y=d(s/2),T=d(l/2);switch(u){case"XYZ":this._x=v*m*_+h*y*T,this._y=h*y*_-v*m*T,this._z=h*m*T+v*y*_,this._w=h*m*_-v*y*T;break;case"YXZ":this._x=v*m*_+h*y*T,this._y=h*y*_-v*m*T,this._z=h*m*T-v*y*_,this._w=h*m*_+v*y*T;break;case"ZXY":this._x=v*m*_-h*y*T,this._y=h*y*_+v*m*T,this._z=h*m*T+v*y*_,this._w=h*m*_-v*y*T;break;case"ZYX":this._x=v*m*_-h*y*T,this._y=h*y*_+v*m*T,this._z=h*m*T-v*y*_,this._w=h*m*_+v*y*T;break;case"YZX":this._x=v*m*_+h*y*T,this._y=h*y*_+v*m*T,this._z=h*m*T-v*y*_,this._w=h*m*_-v*y*T;break;case"XZY":this._x=v*m*_-h*y*T,this._y=h*y*_-v*m*T,this._z=h*m*T+v*y*_,this._w=h*m*_+v*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],_=t[10],v=i+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-d)*y,this._y=(l-h)*y,this._z=(u-s)*y}else if(i>f&&i>_){const y=2*Math.sqrt(1+i-f-_);this._w=(m-d)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(l+h)/y}else if(f>_){const y=2*Math.sqrt(1+f-i-_);this._w=(l-h)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+_-i-f);this._w=(u-s)/y,this._x=(l+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=i*m+u*f+s*h-l*d,this._y=s*m+u*d+l*f-i*h,this._z=l*m+u*h+i*d-s*f,this._w=u*m-i*f-s*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,l=this._z,u=this._w;let f=u*e._w+i*e._x+s*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=i,this._y=s,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),_=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=s*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nS.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nS.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*s,this.y=l[1]*t+l[4]*i+l[7]*s,this.z=l[2]*t+l[5]*i+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*i+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*i+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*s-f*i),m=2*(f*t-l*s),_=2*(l*i-u*t);return this.x=t+d*h+u*_-f*m,this.y=i+d*m+f*h-l*_,this.z=s+d*_+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*s,this.y=l[1]*t+l[5]*i+l[9]*s,this.z=l[2]*t+l[6]*i+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=s*d-l*f,this.y=l*u-i*d,this.z=i*f-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cm.copy(this).projectOnVector(e),this.sub(cm)}reflect(e){return this.sub(cm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cm=new Y,nS=new _u;class vt{constructor(e,t,i,s,l,u,f,d,h){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,u,f,d,h)}set(e,t,i,s,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=i,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,u=i[0],f=i[3],d=i[6],h=i[1],m=i[4],_=i[7],v=i[2],y=i[5],T=i[8],M=s[0],S=s[3],x=s[6],D=s[1],R=s[4],A=s[7],O=s[2],P=s[5],z=s[8];return l[0]=u*M+f*D+d*O,l[3]=u*S+f*R+d*P,l[6]=u*x+f*A+d*z,l[1]=h*M+m*D+_*O,l[4]=h*S+m*R+_*P,l[7]=h*x+m*A+_*z,l[2]=v*M+y*D+T*O,l[5]=v*S+y*R+T*P,l[8]=v*x+y*A+T*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-i*l*m+i*f*d+s*l*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],_=m*u-f*h,v=f*d-m*l,y=h*l-u*d,T=t*_+i*v+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=_*M,e[1]=(s*h-m*i)*M,e[2]=(f*i-s*u)*M,e[3]=v*M,e[4]=(m*t-s*d)*M,e[5]=(s*l-f*t)*M,e[6]=y*M,e[7]=(i*d-h*t)*M,e[8]=(u*t-i*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(i*d,i*h,-i*(d*u+h*f)+u+e,-s*h,s*d,-s*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(um.makeScale(e,t)),this}rotate(e){return this.premultiply(um.makeRotation(-e)),this}translate(e,t){return this.premultiply(um.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const um=new vt;function JM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yh(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function y2(){const r=yh("canvas");return r.style.display="block",r}const iS={};function ou(r){r in iS||(iS[r]=!0,console.warn(r))}function S2(r,e,t){return new Promise(function(i,s){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const aS=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rS=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M2(){const r={enabled:!0,workingColorSpace:Al,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Kt&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Kt&&(s.r=dl(s.r),s.g=dl(s.g),s.b=dl(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jr?vh:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return ou("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return ou("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Al]:{primaries:e,whitePoint:i,transfer:vh,toXYZ:aS,fromXYZ:rS,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:e,whitePoint:i,transfer:Kt,toXYZ:aS,fromXYZ:rS,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),r}const It=M2();function ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function dl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vo;class b2{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vo===void 0&&(Vo=yh("canvas")),Vo.width=e.width,Vo.height=e.height;const s=Vo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=ur(l[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E2=0;class A_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E2++}),this.uuid=zl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(fm(s[u].image)):l.push(fm(s[u]))}else l=fm(s);i.url=l}return t||(e.images[this.uuid]=i),i}}function fm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?b2.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T2=0;const hm=new Y;class fi extends Pl{constructor(e=fi.DEFAULT_IMAGE,t=fi.DEFAULT_MAPPING,i=ma,s=ma,l=vi,u=Gs,f=ta,d=Ua,h=fi.DEFAULT_ANISOTROPY,m=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=zl(),this.name="",this.source=new A_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hm).x}get height(){return this.source.getSize(hm).y}get depth(){return this.source.getSize(hm).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ug:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case fg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ug:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case fg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=kM;fi.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,l;const d=e.elements,h=d[0],m=d[4],_=d[8],v=d[1],y=d[5],T=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(m-v)<.01&&Math.abs(_-M)<.01&&Math.abs(T-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+M)<.1&&Math.abs(T+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,A=(y+1)/2,O=(x+1)/2,P=(m+v)/4,z=(_+M)/4,H=(T+S)/4;return R>A&&R>O?R<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(R),s=P/i,l=z/i):A>O?A<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(A),i=P/s,l=H/s):O<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(O),i=z/l,s=H/l),this.set(i,s,l,t),this}let D=Math.sqrt((S-T)*(S-T)+(_-M)*(_-M)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(S-T)/D,this.y=(_-M)/D,this.z=(v-m)/D,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A2 extends Pl{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const s={width:e,height:t,depth:i.depth},l=new fi(s);this.textures=[];const u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new A_(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends A2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $M extends fi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w2 extends fi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class io{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ua.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ua.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ua.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ua):ua.fromBufferAttribute(l,u),ua.applyMatrix4(e.matrixWorld),this.expandByPoint(ua);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nf.copy(i.boundingBox)),Nf.applyMatrix4(e.matrixWorld),this.union(Nf)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ua),ua.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uc),Lf.subVectors(this.max,Uc),ko.subVectors(e.a,Uc),Xo.subVectors(e.b,Uc),jo.subVectors(e.c,Uc),Br.subVectors(Xo,ko),Fr.subVectors(jo,Xo),Rs.subVectors(ko,jo);let t=[0,-Br.z,Br.y,0,-Fr.z,Fr.y,0,-Rs.z,Rs.y,Br.z,0,-Br.x,Fr.z,0,-Fr.x,Rs.z,0,-Rs.x,-Br.y,Br.x,0,-Fr.y,Fr.x,0,-Rs.y,Rs.x,0];return!dm(t,ko,Xo,jo,Lf)||(t=[1,0,0,0,1,0,0,0,1],!dm(t,ko,Xo,jo,Lf))?!1:(Of.crossVectors(Br,Fr),t=[Of.x,Of.y,Of.z],dm(t,ko,Xo,jo,Lf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ua).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ua).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $a=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ua=new Y,Nf=new io,ko=new Y,Xo=new Y,jo=new Y,Br=new Y,Fr=new Y,Rs=new Y,Uc=new Y,Lf=new Y,Of=new Y,Cs=new Y;function dm(r,e,t,i,s){for(let l=0,u=r.length-3;l<=u;l+=3){Cs.fromArray(r,l);const f=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),d=e.dot(Cs),h=t.dot(Cs),m=i.dot(Cs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const R2=new io,Nc=new Y,pm=new Y;class Il{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):R2.setFromPoints(e).getCenter(i);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nc.subVectors(e,this.center);const t=Nc.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Nc,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nc.copy(e.center).add(pm)),this.expandByPoint(Nc.copy(e.center).sub(pm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const er=new Y,mm=new Y,Pf=new Y,Hr=new Y,gm=new Y,zf=new Y,_m=new Y;class w_{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){mm.copy(e).add(t).multiplyScalar(.5),Pf.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(mm);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Pf),f=Hr.dot(this.direction),d=-Hr.dot(Pf),h=Hr.lengthSq(),m=Math.abs(1-u*u);let _,v,y,T;if(m>0)if(_=u*d-f,v=u*f-d,T=l*m,_>=0)if(v>=-T)if(v<=T){const M=1/m;_*=M,v*=M,y=_*(_+u*v+2*f)+v*(u*_+v+2*d)+h}else v=l,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*d)+h;else v=-l,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*d)+h;else v<=-T?(_=Math.max(0,-(-u*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),y=-_*_+v*(v+2*d)+h):v<=T?(_=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+h):(_=Math.max(0,-(u*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),y=-_*_+v*(v+2*d)+h);else v=u>0?-l:l,_=Math.max(0,-(u*v+f)),y=-_*_+v*(v+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(mm).addScaledVector(Pf,v),y}intersectSphere(e,t){er.subVectors(e.center,this.origin);const i=er.dot(this.direction),s=er.dot(er)-i*i,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),i>u||l>s||((l>i||isNaN(i))&&(i=l),(u<s||isNaN(s))&&(s=u),_>=0?(f=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),i>d||f>s)||((f>i||i!==i)&&(i=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,i,s,l){gm.subVectors(t,e),zf.subVectors(i,e),_m.crossVectors(gm,zf);let u=this.direction.dot(_m),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Hr.subVectors(this.origin,e);const d=f*this.direction.dot(zf.crossVectors(Hr,zf));if(d<0)return null;const h=f*this.direction.dot(gm.cross(Hr));if(h<0||d+h>u)return null;const m=-f*Hr.dot(_m);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,i,s,l,u,f,d,h,m,_,v,y,T,M,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,u,f,d,h,m,_,v,y,T,M,S)}set(e,t,i,s,l,u,f,d,h,m,_,v,y,T,M,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=l,x[5]=u,x[9]=f,x[13]=d,x[2]=h,x[6]=m,x[10]=_,x[14]=v,x[3]=y,x[7]=T,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Wo.setFromMatrixColumn(e,0).length(),l=1/Wo.setFromMatrixColumn(e,1).length(),u=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,l=e.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*m,y=u*_,T=f*m,M=f*_;t[0]=d*m,t[4]=-d*_,t[8]=h,t[1]=y+T*h,t[5]=v-M*h,t[9]=-f*d,t[2]=M-v*h,t[6]=T+y*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,y=d*_,T=h*m,M=h*_;t[0]=v+M*f,t[4]=T*f-y,t[8]=u*h,t[1]=u*_,t[5]=u*m,t[9]=-f,t[2]=y*f-T,t[6]=M+v*f,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,y=d*_,T=h*m,M=h*_;t[0]=v-M*f,t[4]=-u*_,t[8]=T+y*f,t[1]=y+T*f,t[5]=u*m,t[9]=M-v*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,y=u*_,T=f*m,M=f*_;t[0]=d*m,t[4]=T*h-y,t[8]=v*h+M,t[1]=d*_,t[5]=M*h+v,t[9]=y*h-T,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,y=u*h,T=f*d,M=f*h;t[0]=d*m,t[4]=M-v*_,t[8]=T*_+y,t[1]=_,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=y*_+T,t[10]=v-M*_}else if(e.order==="XZY"){const v=u*d,y=u*h,T=f*d,M=f*h;t[0]=d*m,t[4]=-_,t[8]=h*m,t[1]=v*_+M,t[5]=u*m,t[9]=y*_-T,t[2]=T*_-y,t[6]=f*m,t[10]=M*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C2,e,D2)}lookAt(e,t,i){const s=this.elements;return Ni.subVectors(e,t),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),Gr.crossVectors(i,Ni),Gr.lengthSq()===0&&(Math.abs(i.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),Gr.crossVectors(i,Ni)),Gr.normalize(),If.crossVectors(Ni,Gr),s[0]=Gr.x,s[4]=If.x,s[8]=Ni.x,s[1]=Gr.y,s[5]=If.y,s[9]=Ni.y,s[2]=Gr.z,s[6]=If.z,s[10]=Ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,u=i[0],f=i[4],d=i[8],h=i[12],m=i[1],_=i[5],v=i[9],y=i[13],T=i[2],M=i[6],S=i[10],x=i[14],D=i[3],R=i[7],A=i[11],O=i[15],P=s[0],z=s[4],H=s[8],w=s[12],U=s[1],V=s[5],Q=s[9],ne=s[13],re=s[2],de=s[6],B=s[10],Z=s[14],W=s[3],ye=s[7],be=s[11],F=s[15];return l[0]=u*P+f*U+d*re+h*W,l[4]=u*z+f*V+d*de+h*ye,l[8]=u*H+f*Q+d*B+h*be,l[12]=u*w+f*ne+d*Z+h*F,l[1]=m*P+_*U+v*re+y*W,l[5]=m*z+_*V+v*de+y*ye,l[9]=m*H+_*Q+v*B+y*be,l[13]=m*w+_*ne+v*Z+y*F,l[2]=T*P+M*U+S*re+x*W,l[6]=T*z+M*V+S*de+x*ye,l[10]=T*H+M*Q+S*B+x*be,l[14]=T*w+M*ne+S*Z+x*F,l[3]=D*P+R*U+A*re+O*W,l[7]=D*z+R*V+A*de+O*ye,l[11]=D*H+R*Q+A*B+O*be,l[15]=D*w+R*ne+A*Z+O*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],_=e[6],v=e[10],y=e[14],T=e[3],M=e[7],S=e[11],x=e[15];return T*(+l*d*_-s*h*_-l*f*v+i*h*v+s*f*y-i*d*y)+M*(+t*d*y-t*h*v+l*u*v-s*u*y+s*h*m-l*d*m)+S*(+t*h*_-t*f*y-l*u*_+i*u*y+l*f*m-i*h*m)+x*(-s*f*m-t*d*_+t*f*v+s*u*_-i*u*v+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],_=e[9],v=e[10],y=e[11],T=e[12],M=e[13],S=e[14],x=e[15],D=_*S*h-M*v*h+M*d*y-f*S*y-_*d*x+f*v*x,R=T*v*h-m*S*h-T*d*y+u*S*y+m*d*x-u*v*x,A=m*M*h-T*_*h+T*f*y-u*M*y-m*f*x+u*_*x,O=T*_*d-m*M*d-T*f*v+u*M*v+m*f*S-u*_*S,P=t*D+i*R+s*A+l*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=D*z,e[1]=(M*v*l-_*S*l-M*s*y+i*S*y+_*s*x-i*v*x)*z,e[2]=(f*S*l-M*d*l+M*s*h-i*S*h-f*s*x+i*d*x)*z,e[3]=(_*d*l-f*v*l-_*s*h+i*v*h+f*s*y-i*d*y)*z,e[4]=R*z,e[5]=(m*S*l-T*v*l+T*s*y-t*S*y-m*s*x+t*v*x)*z,e[6]=(T*d*l-u*S*l-T*s*h+t*S*h+u*s*x-t*d*x)*z,e[7]=(u*v*l-m*d*l+m*s*h-t*v*h-u*s*y+t*d*y)*z,e[8]=A*z,e[9]=(T*_*l-m*M*l-T*i*y+t*M*y+m*i*x-t*_*x)*z,e[10]=(u*M*l-T*f*l+T*i*h-t*M*h-u*i*x+t*f*x)*z,e[11]=(m*f*l-u*_*l-m*i*h+t*_*h+u*i*y-t*f*y)*z,e[12]=O*z,e[13]=(m*M*s-T*_*s+T*i*v-t*M*v-m*i*S+t*_*S)*z,e[14]=(T*f*s-u*M*s-T*i*d+t*M*d+u*i*S-t*f*S)*z,e[15]=(u*_*s-m*f*s+m*i*d-t*_*d-u*i*v+t*f*v)*z,this}scale(e){const t=this.elements,i=e.x,s=e.y,l=e.z;return t[0]*=i,t[4]*=s,t[8]*=l,t[1]*=i,t[5]*=s,t[9]*=l,t[2]*=i,t[6]*=s,t[10]*=l,t[3]*=i,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),l=1-i,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+i,h*f-s*d,h*d+s*f,0,h*f+s*d,m*f+i,m*d-s*u,0,h*d-s*f,m*d+s*u,l*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,l,u){return this.set(1,i,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,_=f+f,v=l*h,y=l*m,T=l*_,M=u*m,S=u*_,x=f*_,D=d*h,R=d*m,A=d*_,O=i.x,P=i.y,z=i.z;return s[0]=(1-(M+x))*O,s[1]=(y+A)*O,s[2]=(T-R)*O,s[3]=0,s[4]=(y-A)*P,s[5]=(1-(v+x))*P,s[6]=(S+D)*P,s[7]=0,s[8]=(T+R)*z,s[9]=(S-D)*z,s[10]=(1-(v+M))*z,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let l=Wo.set(s[0],s[1],s[2]).length();const u=Wo.set(s[4],s[5],s[6]).length(),f=Wo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],fa.copy(this);const h=1/l,m=1/u,_=1/f;return fa.elements[0]*=h,fa.elements[1]*=h,fa.elements[2]*=h,fa.elements[4]*=m,fa.elements[5]*=m,fa.elements[6]*=m,fa.elements[8]*=_,fa.elements[9]*=_,fa.elements[10]*=_,t.setFromRotationMatrix(fa),i.x=l,i.y=u,i.z=f,this}makePerspective(e,t,i,s,l,u,f=wa,d=!1){const h=this.elements,m=2*l/(t-e),_=2*l/(i-s),v=(t+e)/(t-e),y=(i+s)/(i-s);let T,M;if(d)T=l/(u-l),M=u*l/(u-l);else if(f===wa)T=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===xh)T=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,l,u,f=wa,d=!1){const h=this.elements,m=2/(t-e),_=2/(i-s),v=-(t+e)/(t-e),y=-(i+s)/(i-s);let T,M;if(d)T=1/(u-l),M=u/(u-l);else if(f===wa)T=-2/(u-l),M=-(u+l)/(u-l);else if(f===xh)T=-1/(u-l),M=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=T,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wo=new Y,fa=new tn,C2=new Y(0,0,0),D2=new Y(1,1,1),Gr=new Y,If=new Y,Ni=new Y,sS=new tn,oS=new _u;class _a{constructor(e=0,t=0,i=0,s=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,l=s[0],u=s[4],f=s[8],d=s[1],h=s[5],m=s[9],_=s[2],v=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sS,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oS.setFromEuler(this),this.setFromQuaternion(oS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class R_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U2=0;const lS=new Y,qo=new _u,tr=new tn,Bf=new Y,Lc=new Y,N2=new Y,L2=new _u,cS=new Y(1,0,0),uS=new Y(0,1,0),fS=new Y(0,0,1),hS={type:"added"},O2={type:"removed"},Yo={type:"childadded",child:null},vm={type:"childremoved",child:null};class Wn extends Pl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U2++}),this.uuid=zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new Y,t=new _a,i=new _u,s=new Y(1,1,1);function l(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new vt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(cS,e)}rotateY(e){return this.rotateOnAxis(uS,e)}rotateZ(e){return this.rotateOnAxis(fS,e)}translateOnAxis(e,t){return lS.copy(e).applyQuaternion(this.quaternion),this.position.add(lS.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cS,e)}translateY(e){return this.translateOnAxis(uS,e)}translateZ(e){return this.translateOnAxis(fS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bf.copy(e):Bf.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Lc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Lc,Bf,this.up):tr.lookAt(Bf,Lc,this.up),this.quaternion.setFromRotationMatrix(tr),s&&(tr.extractRotation(s.matrixWorld),qo.setFromRotationMatrix(tr),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hS),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O2),vm.child=e,this.dispatchEvent(vm),vm.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hS),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lc,e,N2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lc,L2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const _=d[h];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),_=u(e.shapes),v=u(e.skeletons),y=u(e.animations),T=u(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),T.length>0&&(i.nodes=T)}return i.object=s,i;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wn.DEFAULT_UP=new Y(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ha=new Y,nr=new Y,xm=new Y,ir=new Y,Zo=new Y,Ko=new Y,dS=new Y,ym=new Y,Sm=new Y,Mm=new Y,bm=new Wt,Em=new Wt,Tm=new Wt;class pa{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ha.subVectors(e,t),s.cross(ha);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,i,s,l){ha.subVectors(s,t),nr.subVectors(i,t),xm.subVectors(e,t);const u=ha.dot(ha),f=ha.dot(nr),d=ha.dot(xm),h=nr.dot(nr),m=nr.dot(xm),_=u*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,y=(h*d-f*m)*v,T=(u*m-f*d)*v;return l.set(1-y-T,T,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,s,l,u,f,d){return this.getBarycoord(e,t,i,s,ir)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ir.x),d.addScaledVector(u,ir.y),d.addScaledVector(f,ir.z),d)}static getInterpolatedAttribute(e,t,i,s,l,u){return bm.setScalar(0),Em.setScalar(0),Tm.setScalar(0),bm.fromBufferAttribute(e,t),Em.fromBufferAttribute(e,i),Tm.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(bm,l.x),u.addScaledVector(Em,l.y),u.addScaledVector(Tm,l.z),u}static isFrontFacing(e,t,i,s){return ha.subVectors(i,t),nr.subVectors(e,t),ha.cross(nr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ha.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),ha.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pa.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,l){return pa.getInterpolation(e,this.a,this.b,this.c,t,i,s,l)}containsPoint(e){return pa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,l=this.c;let u,f;Zo.subVectors(s,i),Ko.subVectors(l,i),ym.subVectors(e,i);const d=Zo.dot(ym),h=Ko.dot(ym);if(d<=0&&h<=0)return t.copy(i);Sm.subVectors(e,s);const m=Zo.dot(Sm),_=Ko.dot(Sm);if(m>=0&&_<=m)return t.copy(s);const v=d*_-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(i).addScaledVector(Zo,u);Mm.subVectors(e,l);const y=Zo.dot(Mm),T=Ko.dot(Mm);if(T>=0&&y<=T)return t.copy(l);const M=y*h-d*T;if(M<=0&&h>=0&&T<=0)return f=h/(h-T),t.copy(i).addScaledVector(Ko,f);const S=m*T-y*_;if(S<=0&&_-m>=0&&y-T>=0)return dS.subVectors(l,s),f=(_-m)/(_-m+(y-T)),t.copy(s).addScaledVector(dS,f);const x=1/(S+M+v);return u=M*x,f=v*x,t.copy(i).addScaledVector(Zo,u).addScaledVector(Ko,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Ff={h:0,s:0,l:0};function Am(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=It.workingColorSpace){if(e=T_(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,u=2*i-l;this.r=Am(u,l,e+1/3),this.g=Am(u,l,e),this.b=Am(u,l,e-1/3)}return It.colorSpaceToWorking(this,s),this}setStyle(e,t=Oi){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oi){const i=eb[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=dl(e.r),this.g=dl(e.g),this.b=dl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oi){return It.workingToColorSpace(Jn.copy(this),e),Math.round(At(Jn.r*255,0,255))*65536+Math.round(At(Jn.g*255,0,255))*256+Math.round(At(Jn.b*255,0,255))}getHexString(e=Oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Jn.copy(this),t);const i=Jn.r,s=Jn.g,l=Jn.b,u=Math.max(i,s,l),f=Math.min(i,s,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const _=u-f;switch(h=m<=.5?_/(u+f):_/(2-u-f),u){case i:d=(s-l)/_+(s<l?6:0);break;case s:d=(l-i)/_+2;break;case l:d=(i-s)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Jn.copy(this),t),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=Oi){It.workingToColorSpace(Jn.copy(this),e);const t=Jn.r,i=Jn.g,s=Jn.b;return e!==Oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Ff);const i=Wc(Vr.h,Ff.h,t),s=Wc(Vr.s,Ff.s,t),l=Wc(Vr.l,Ff.l,t);return this.setHSL(i,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*s,this.g=l[1]*t+l[4]*i+l[7]*s,this.b=l[2]*t+l[5]*i+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new mt;mt.NAMES=eb;let P2=0;class ao extends Pl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=zl(),this.name="",this.type="Material",this.blending=hl,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$m,this.blendDst=eg,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hl&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$m&&(i.blendSrc=this.blendSrc),this.blendDst!==eg&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tb extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=new Y,Hf=new rt;let z2=0;class ra{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$y,this.updateRanges=[],this.gpuType=ga,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hf.fromBufferAttribute(this,t),Hf.applyMatrix3(e),this.setXY(t,Hf.x,Hf.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rl(t,this.array)),t}setX(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rl(t,this.array)),t}setY(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rl(t,this.array)),t}setW(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),i=ri(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),i=ri(i,this.array),s=ri(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,l){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$y&&(e.usage=this.usage),e}}class nb extends ra{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ib extends ra{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sa extends ra{constructor(e,t,i){super(new Float32Array(e),t,i)}}let I2=0;const Ji=new tn,wm=new Wn,Qo=new Y,Li=new io,Oc=new io,zn=new Y;class Oa extends Pl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I2++}),this.uuid=zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(JM(e)?ib:nb)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new vt().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ji.makeRotationFromQuaternion(e),this.applyMatrix4(Ji),this}rotateX(e){return Ji.makeRotationX(e),this.applyMatrix4(Ji),this}rotateY(e){return Ji.makeRotationY(e),this.applyMatrix4(Ji),this}rotateZ(e){return Ji.makeRotationZ(e),this.applyMatrix4(Ji),this}translate(e,t,i){return Ji.makeTranslation(e,t,i),this.applyMatrix4(Ji),this}scale(e,t,i){return Ji.makeScale(e,t,i),this.applyMatrix4(Ji),this}lookAt(e){return wm.lookAt(e),wm.updateMatrix(),this.applyMatrix4(wm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new sa(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const l=t[i];Li.setFromBufferAttribute(l),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Oc.setFromBufferAttribute(f),this.morphTargetsRelative?(zn.addVectors(Li.min,Oc.min),Li.expandByPoint(zn),zn.addVectors(Li.max,Oc.max),Li.expandByPoint(zn)):(Li.expandByPoint(Oc.min),Li.expandByPoint(Oc.max))}Li.getCenter(i);let s=0;for(let l=0,u=e.count;l<u;l++)zn.fromBufferAttribute(e,l),s=Math.max(s,i.distanceToSquared(zn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)zn.fromBufferAttribute(f,h),d&&(Qo.fromBufferAttribute(e,h),zn.add(Qo)),s=Math.max(s,i.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ra(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let H=0;H<i.count;H++)f[H]=new Y,d[H]=new Y;const h=new Y,m=new Y,_=new Y,v=new rt,y=new rt,T=new rt,M=new Y,S=new Y;function x(H,w,U){h.fromBufferAttribute(i,H),m.fromBufferAttribute(i,w),_.fromBufferAttribute(i,U),v.fromBufferAttribute(l,H),y.fromBufferAttribute(l,w),T.fromBufferAttribute(l,U),m.sub(h),_.sub(h),y.sub(v),T.sub(v);const V=1/(y.x*T.y-T.x*y.y);isFinite(V)&&(M.copy(m).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(m,-T.x).multiplyScalar(V),f[H].add(M),f[w].add(M),f[U].add(M),d[H].add(S),d[w].add(S),d[U].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let H=0,w=D.length;H<w;++H){const U=D[H],V=U.start,Q=U.count;for(let ne=V,re=V+Q;ne<re;ne+=3)x(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const R=new Y,A=new Y,O=new Y,P=new Y;function z(H){O.fromBufferAttribute(s,H),P.copy(O);const w=f[H];R.copy(w),R.sub(O.multiplyScalar(O.dot(w))).normalize(),A.crossVectors(P,w);const V=A.dot(d[H])<0?-1:1;u.setXYZW(H,R.x,R.y,R.z,V)}for(let H=0,w=D.length;H<w;++H){const U=D[H],V=U.start,Q=U.count;for(let ne=V,re=V+Q;ne<re;ne+=3)z(e.getX(ne+0)),z(e.getX(ne+1)),z(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ra(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const s=new Y,l=new Y,u=new Y,f=new Y,d=new Y,h=new Y,m=new Y,_=new Y;if(e)for(let v=0,y=e.count;v<y;v+=3){const T=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,T),l.fromBufferAttribute(t,M),u.fromBufferAttribute(t,S),m.subVectors(u,l),_.subVectors(s,l),m.cross(_),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),f.add(m),d.add(m),h.add(m),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)s.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),_.subVectors(s,l),m.cross(_),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zn.fromBufferAttribute(e,t),zn.normalize(),e.setXYZ(t,zn.x,zn.y,zn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,_=f.normalized,v=new h.constructor(d.length*m);let y=0,T=0;for(let M=0,S=d.length;M<S;M++){f.isInterleavedBufferAttribute?y=d[M]*f.data.stride+f.offset:y=d[M]*m;for(let x=0;x<m;x++)v[T++]=h[y++]}return new ra(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oa,i=this.index.array,s=this.attributes;for(const f in s){const d=s[f],h=e(d,i);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,_=h.length;m<_;m++){const v=h[m],y=e(v,i);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];m.push(y.toJSON(e.data))}m.length>0&&(s[d]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],_=l[h];for(let v=0,y=_.length;v<y;v++)m.push(_[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pS=new tn,Ds=new w_,Gf=new Il,mS=new Y,Vf=new Y,kf=new Y,Xf=new Y,Rm=new Y,jf=new Y,gS=new Y,Wf=new Y;class yn extends Wn{constructor(e=new Oa,t=new tb){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){jf.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],_=l[d];m!==0&&(Rm.fromBufferAttribute(_,e),u?jf.addScaledVector(Rm,m):jf.addScaledVector(Rm.sub(t),m))}t.add(jf)}return t}raycast(e,t){const i=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gf.copy(i.boundingSphere),Gf.applyMatrix4(l),Ds.copy(e.ray).recast(e.near),!(Gf.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Gf,mS)===null||Ds.origin.distanceToSquared(mS)>(e.far-e.near)**2))&&(pS.copy(l).invert(),Ds.copy(e.ray).applyMatrix4(pS),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let s;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,M=v.length;T<M;T++){const S=v[T],x=u[S.materialIndex],D=Math.max(S.start,y.start),R=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=D,O=R;A<O;A+=3){const P=f.getX(A),z=f.getX(A+1),H=f.getX(A+2);s=qf(this,x,e,i,h,m,_,P,z,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=T,x=M;S<x;S+=3){const D=f.getX(S),R=f.getX(S+1),A=f.getX(S+2);s=qf(this,u,e,i,h,m,_,D,R,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let T=0,M=v.length;T<M;T++){const S=v[T],x=u[S.materialIndex],D=Math.max(S.start,y.start),R=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let A=D,O=R;A<O;A+=3){const P=A,z=A+1,H=A+2;s=qf(this,x,e,i,h,m,_,P,z,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=T,x=M;S<x;S+=3){const D=S,R=S+1,A=S+2;s=qf(this,u,e,i,h,m,_,D,R,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function B2(r,e,t,i,s,l,u,f){let d;if(e.side===ui?d=i.intersectTriangle(u,l,s,!0,f):d=i.intersectTriangle(s,l,u,e.side===as,f),d===null)return null;Wf.copy(f),Wf.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Wf);return h<t.near||h>t.far?null:{distance:h,point:Wf.clone(),object:r}}function qf(r,e,t,i,s,l,u,f,d,h){r.getVertexPosition(f,Vf),r.getVertexPosition(d,kf),r.getVertexPosition(h,Xf);const m=B2(r,e,t,i,Vf,kf,Xf,gS);if(m){const _=new Y;pa.getBarycoord(gS,Vf,kf,Xf,_),s&&(m.uv=pa.getInterpolatedAttribute(s,f,d,h,_,new rt)),l&&(m.uv1=pa.getInterpolatedAttribute(l,f,d,h,_,new rt)),u&&(m.normal=pa.getInterpolatedAttribute(u,f,d,h,_,new Y),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new Y,materialIndex:0};pa.getNormal(Vf,kf,Xf,v.normal),m.face=v,m.barycoord=_}return m}class Bl extends Oa{constructor(e=1,t=1,i=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],_=[];let v=0,y=0;T("z","y","x",-1,-1,i,t,e,u,l,0),T("z","y","x",1,-1,i,t,-e,u,l,1),T("x","z","y",1,1,e,i,t,s,u,2),T("x","z","y",1,-1,e,i,-t,s,u,3),T("x","y","z",1,-1,e,t,i,s,l,4),T("x","y","z",-1,-1,e,t,-i,s,l,5),this.setIndex(d),this.setAttribute("position",new sa(h,3)),this.setAttribute("normal",new sa(m,3)),this.setAttribute("uv",new sa(_,2));function T(M,S,x,D,R,A,O,P,z,H,w){const U=A/z,V=O/H,Q=A/2,ne=O/2,re=P/2,de=z+1,B=H+1;let Z=0,W=0;const ye=new Y;for(let be=0;be<B;be++){const F=be*V-ne;for(let ie=0;ie<de;ie++){const Me=ie*U-Q;ye[M]=Me*D,ye[S]=F*R,ye[x]=re,h.push(ye.x,ye.y,ye.z),ye[M]=0,ye[S]=0,ye[x]=P>0?1:-1,m.push(ye.x,ye.y,ye.z),_.push(ie/z),_.push(1-be/H),Z+=1}}for(let be=0;be<H;be++)for(let F=0;F<z;F++){const ie=v+F+de*be,Me=v+F+de*(be+1),Ee=v+(F+1)+de*(be+1),De=v+(F+1)+de*be;d.push(ie,Me,De),d.push(Me,Ee,De),W+=6}f.addGroup(y,W,w),y+=W,v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wl(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function oi(r){const e={};for(let t=0;t<r.length;t++){const i=wl(r[t]);for(const s in i)e[s]=i[s]}return e}function F2(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ab(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const H2={clone:wl,merge:oi};var G2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G2,this.fragmentShader=V2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wl(e.uniforms),this.uniformsGroups=F2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sh extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=wa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kr=new Y,_S=new rt,vS=new rt;class zi extends Sh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=su*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return su*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,_S,vS),t.subVectors(vS,_S)}setViewOffset(e,t,i,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jo=-90,$o=1;class k2 extends Wn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zi(Jo,$o,e,t);s.layers=this.layers,this.add(s);const l=new zi(Jo,$o,e,t);l.layers=this.layers,this.add(l);const u=new zi(Jo,$o,e,t);u.layers=this.layers,this.add(u);const f=new zi(Jo,$o,e,t);f.layers=this.layers,this.add(f);const d=new zi(Jo,$o,e,t);d.layers=this.layers,this.add(d);const h=new zi(Jo,$o,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===wa)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===xh)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,l),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,f),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(_,v,y),e.xr.enabled=T,i.texture.needsPMREMUpdate=!0}}class rb extends fi{constructor(e=[],t=El,i,s,l,u,f,d,h,m){super(e,t,i,s,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X2 extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new rb(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Bl(5,5,5),l=new fr({name:"CubemapFromEquirect",uniforms:wl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ui,blending:es});l.uniforms.tEquirect.value=t;const u=new yn(s,l),f=t.minFilter;return t.minFilter===Gs&&(t.minFilter=vi),new k2(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(l)}}class Yf extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j2={type:"move"};class Cm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),x=this._getHandJoint(h,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=m.position.distanceTo(_.position),y=.02,T=.005;h.inputState.pinching&&v>y+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(j2)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yf;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Mh extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sb extends fi{constructor(e=null,t=1,i=1,s,l,u,f,d,h=Hi,m=Hi,_,v){super(null,u,f,d,h,m,s,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xS extends ra{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const el=new tn,yS=new tn,Zf=[],SS=new io,W2=new tn,Pc=new yn,zc=new Il;class ob extends yn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xS(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,W2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new io),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,el),SS.copy(e.boundingBox).applyMatrix4(el),this.boundingBox.union(SS)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Il),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,el),zc.copy(e.boundingSphere).applyMatrix4(el),this.boundingSphere.union(zc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,l=i.length+1,u=e*l+1;for(let f=0;f<i.length;f++)i[f]=s[u+f]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Pc.geometry=this.geometry,Pc.material=this.material,Pc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zc.copy(this.boundingSphere),zc.applyMatrix4(i),e.ray.intersectsSphere(zc)!==!1))for(let l=0;l<s;l++){this.getMatrixAt(l,el),yS.multiplyMatrices(i,el),Pc.matrixWorld=yS,Pc.raycast(e,Zf);for(let u=0,f=Zf.length;u<f;u++){const d=Zf[u];d.instanceId=l,d.object=this,t.push(d)}Zf.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xS(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new sb(new Float32Array(s*this.count),s,this.count,y_,ga));const l=this.morphTexture.source.data.data;let u=0;for(let h=0;h<i.length;h++)u+=i[h];const f=this.geometry.morphTargetsRelative?1:1-u,d=s*e;l[d]=f,l.set(i,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dm=new Y,q2=new Y,Y2=new vt;class Xr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Dm.subVectors(i,t).cross(q2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Dm),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Y2.getNormalMatrix(e),s=this.coplanarPoint(Dm).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new Il,Z2=new rt(.5,.5),Kf=new Y;class C_{constructor(e=new Xr,t=new Xr,i=new Xr,s=new Xr,l=new Xr,u=new Xr){this.planes=[e,t,i,s,l,u]}set(e,t,i,s,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wa,i=!1){const s=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],_=l[5],v=l[6],y=l[7],T=l[8],M=l[9],S=l[10],x=l[11],D=l[12],R=l[13],A=l[14],O=l[15];if(s[0].setComponents(h-u,y-m,x-T,O-D).normalize(),s[1].setComponents(h+u,y+m,x+T,O+D).normalize(),s[2].setComponents(h+f,y+_,x+M,O+R).normalize(),s[3].setComponents(h-f,y-_,x-M,O-R).normalize(),i)s[4].setComponents(d,v,S,A).normalize(),s[5].setComponents(h-d,y-v,x-S,O-A).normalize();else if(s[4].setComponents(h-d,y-v,x-S,O-A).normalize(),t===wa)s[5].setComponents(h+d,y+v,x+S,O+A).normalize();else if(t===xh)s[5].setComponents(d,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);const t=Z2.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Kf.x=s.normal.x>0?e.max.x:e.min.x,Kf.y=s.normal.y>0?e.max.y:e.min.y,Kf.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class K2 extends ao{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bh=new Y,Eh=new Y,MS=new tn,Ic=new w_,Qf=new Il,Um=new Y,bS=new Y;class Q2 extends Wn{constructor(e=new Oa,t=new K2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,l=t.count;s<l;s++)bh.fromBufferAttribute(t,s-1),Eh.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=bh.distanceTo(Eh);e.setAttribute("lineDistance",new sa(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qf.copy(i.boundingSphere),Qf.applyMatrix4(s),Qf.radius+=l,e.ray.intersectsSphere(Qf)===!1)return;MS.copy(s).invert(),Ic.copy(e.ray).applyMatrix4(MS);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=i.index,v=i.attributes.position;if(m!==null){const y=Math.max(0,u.start),T=Math.min(m.count,u.start+u.count);for(let M=y,S=T-1;M<S;M+=h){const x=m.getX(M),D=m.getX(M+1),R=Jf(this,e,Ic,d,x,D,M);R&&t.push(R)}if(this.isLineLoop){const M=m.getX(T-1),S=m.getX(y),x=Jf(this,e,Ic,d,M,S,T-1);x&&t.push(x)}}else{const y=Math.max(0,u.start),T=Math.min(v.count,u.start+u.count);for(let M=y,S=T-1;M<S;M+=h){const x=Jf(this,e,Ic,d,M,M+1,M);x&&t.push(x)}if(this.isLineLoop){const M=Jf(this,e,Ic,d,T-1,y,T-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Jf(r,e,t,i,s,l,u){const f=r.geometry.attributes.position;if(bh.fromBufferAttribute(f,s),Eh.fromBufferAttribute(f,l),t.distanceSqToSegment(bh,Eh,Um,bS)>i)return;Um.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Um);if(!(h<e.near||h>e.far))return{distance:h,point:bS.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const ES=new Y,TS=new Y;class J2 extends Q2{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,l=t.count;s<l;s+=2)ES.fromBufferAttribute(t,s),TS.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ES.distanceTo(TS);e.setAttribute("lineDistance",new sa(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lb extends fi{constructor(e,t,i=Js,s,l,u,f=Hi,d=Hi,h,m=au,_=1){if(m!==au&&m!==ru)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,s,l,u,f,d,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new A_(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cb extends fi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qs extends Oa{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const l=e/2,u=t/2,f=Math.floor(i),d=Math.floor(s),h=f+1,m=d+1,_=e/f,v=t/d,y=[],T=[],M=[],S=[];for(let x=0;x<m;x++){const D=x*v-u;for(let R=0;R<h;R++){const A=R*_-l;T.push(A,-D,0),M.push(0,0,1),S.push(R/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<f;D++){const R=D+h*x,A=D+h*(x+1),O=D+1+h*(x+1),P=D+1+h*x;y.push(R,A,P),y.push(A,O,P)}this.setIndex(y),this.setAttribute("position",new sa(T,3)),this.setAttribute("normal",new sa(M,3)),this.setAttribute("uv",new sa(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class D_ extends Oa{constructor(e=1,t=32,i=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(u+f,Math.PI);let h=0;const m=[],_=new Y,v=new Y,y=[],T=[],M=[],S=[];for(let x=0;x<=i;x++){const D=[],R=x/i;let A=0;x===0&&u===0?A=.5/t:x===i&&d===Math.PI&&(A=-.5/t);for(let O=0;O<=t;O++){const P=O/t;_.x=-e*Math.cos(s+P*l)*Math.sin(u+R*f),_.y=e*Math.cos(u+R*f),_.z=e*Math.sin(s+P*l)*Math.sin(u+R*f),T.push(_.x,_.y,_.z),v.copy(_).normalize(),M.push(v.x,v.y,v.z),S.push(P+A,1-R),D.push(h++)}m.push(D)}for(let x=0;x<i;x++)for(let D=0;D<t;D++){const R=m[x][D+1],A=m[x][D],O=m[x+1][D],P=m[x+1][D+1];(x!==0||u>0)&&y.push(R,A,P),(x!==i-1||d<Math.PI)&&y.push(A,O,P)}this.setIndex(y),this.setAttribute("position",new sa(T,3)),this.setAttribute("normal",new sa(M,3)),this.setAttribute("uv",new sa(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new D_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $f extends fr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hg extends ao{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=E_,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $2 extends Hg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class eR extends ao{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=E_,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tR extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nR extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ub extends Wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Nm=new tn,AS=new Y,wS=new Y;class iR{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Ua,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new C_,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;AS.setFromMatrixPosition(e.matrixWorld),t.position.copy(AS),wS.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wS),t.updateMatrixWorld(),Nm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nm,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const RS=new tn,Bc=new Y,Lm=new Y;class aR extends iR{constructor(){super(new zi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),Bc.setFromMatrixPosition(e.matrixWorld),i.position.copy(Bc),Lm.copy(i.position),Lm.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Lm),i.updateMatrixWorld(),s.makeTranslation(-Bc.x,-Bc.y,-Bc.z),RS.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(RS,i.coordinateSystem,i.reversedDepth)}}class fb extends ub{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new aR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rR extends Sh{constructor(e=-1,t=1,i=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-e,u=i+e,f=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sR extends ub{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oR extends zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const CS=new tn;class lR{constructor(e,t,i=0,s=1/0){this.ray=new w_(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new R_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return CS.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(CS),this}intersectObject(e,t=!0,i=[]){return Gg(e,this,i,t),i.sort(DS),i}intersectObjects(e,t=!0,i=[]){for(let s=0,l=e.length;s<l;s++)Gg(e[s],this,i,t);return i.sort(DS),i}}function DS(r,e){return r.distance-e.distance}function Gg(r,e,t,i){let s=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const l=r.children;for(let u=0,f=l.length;u<f;u++)Gg(l[u],e,t,!0)}}function US(r,e,t,i){const s=cR(i);switch(t){case YM:return r*e;case y_:return r*e/s.components*s.byteLength;case S_:return r*e/s.components*s.byteLength;case KM:return r*e*2/s.components*s.byteLength;case M_:return r*e*2/s.components*s.byteLength;case ZM:return r*e*3/s.components*s.byteLength;case ta:return r*e*4/s.components*s.byteLength;case b_:return r*e*4/s.components*s.byteLength;case oh:case lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ch:case uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dg:case mg:return Math.max(r,16)*Math.max(e,8)/4;case hg:case pg:return Math.max(r,8)*Math.max(e,8)/2;case gg:case _g:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vg:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xg:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yg:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sg:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mg:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bg:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Eg:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Tg:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ag:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case wg:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Rg:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Cg:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dg:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ug:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ng:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Lg:case Og:case Pg:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zg:case Ig:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bg:case Fg:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cR(r){switch(r){case Ua:case XM:return{byteLength:1,components:1};case nu:case jM:case Ol:return{byteLength:2,components:1};case v_:case x_:return{byteLength:2,components:4};case Js:case __:case ga:return{byteLength:4,components:1};case WM:case qM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:m_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=m_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function db(){let r=null,e=!1,t=null,i=null;function s(l,u){t(l,u),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function uR(r){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,_=h.byteLength,v=r.createBuffer();r.bindBuffer(d,v),r.bufferData(d,h,m),f.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,d,h){const m=d.array,_=d.updateRanges;if(r.bindBuffer(h,f),_.length===0)r.bufferSubData(h,0,m);else{_.sort((y,T)=>y.start-T.start);let v=0;for(let y=1;y<_.length;y++){const T=_[v],M=_[y];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++v,_[v]=M)}_.length=v+1;for(let y=0,T=_.length;y<T;y++){const M=_[y];r.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:s,remove:l,update:u}}var fR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_R=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ER=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GR="gl_FragColor = linearToOutputTexel( gl_FragColor );",VR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$R=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_C=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$C=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_D=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ED=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ND=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ID=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:fR,alphahash_pars_fragment:hR,alphamap_fragment:dR,alphamap_pars_fragment:pR,alphatest_fragment:mR,alphatest_pars_fragment:gR,aomap_fragment:_R,aomap_pars_fragment:vR,batching_pars_vertex:xR,batching_vertex:yR,begin_vertex:SR,beginnormal_vertex:MR,bsdfs:bR,iridescence_fragment:ER,bumpmap_pars_fragment:TR,clipping_planes_fragment:AR,clipping_planes_pars_fragment:wR,clipping_planes_pars_vertex:RR,clipping_planes_vertex:CR,color_fragment:DR,color_pars_fragment:UR,color_pars_vertex:NR,color_vertex:LR,common:OR,cube_uv_reflection_fragment:PR,defaultnormal_vertex:zR,displacementmap_pars_vertex:IR,displacementmap_vertex:BR,emissivemap_fragment:FR,emissivemap_pars_fragment:HR,colorspace_fragment:GR,colorspace_pars_fragment:VR,envmap_fragment:kR,envmap_common_pars_fragment:XR,envmap_pars_fragment:jR,envmap_pars_vertex:WR,envmap_physical_pars_fragment:iC,envmap_vertex:qR,fog_vertex:YR,fog_pars_vertex:ZR,fog_fragment:KR,fog_pars_fragment:QR,gradientmap_pars_fragment:JR,lightmap_pars_fragment:$R,lights_lambert_fragment:eC,lights_lambert_pars_fragment:tC,lights_pars_begin:nC,lights_toon_fragment:aC,lights_toon_pars_fragment:rC,lights_phong_fragment:sC,lights_phong_pars_fragment:oC,lights_physical_fragment:lC,lights_physical_pars_fragment:cC,lights_fragment_begin:uC,lights_fragment_maps:fC,lights_fragment_end:hC,logdepthbuf_fragment:dC,logdepthbuf_pars_fragment:pC,logdepthbuf_pars_vertex:mC,logdepthbuf_vertex:gC,map_fragment:_C,map_pars_fragment:vC,map_particle_fragment:xC,map_particle_pars_fragment:yC,metalnessmap_fragment:SC,metalnessmap_pars_fragment:MC,morphinstance_vertex:bC,morphcolor_vertex:EC,morphnormal_vertex:TC,morphtarget_pars_vertex:AC,morphtarget_vertex:wC,normal_fragment_begin:RC,normal_fragment_maps:CC,normal_pars_fragment:DC,normal_pars_vertex:UC,normal_vertex:NC,normalmap_pars_fragment:LC,clearcoat_normal_fragment_begin:OC,clearcoat_normal_fragment_maps:PC,clearcoat_pars_fragment:zC,iridescence_pars_fragment:IC,opaque_fragment:BC,packing:FC,premultiplied_alpha_fragment:HC,project_vertex:GC,dithering_fragment:VC,dithering_pars_fragment:kC,roughnessmap_fragment:XC,roughnessmap_pars_fragment:jC,shadowmap_pars_fragment:WC,shadowmap_pars_vertex:qC,shadowmap_vertex:YC,shadowmask_pars_fragment:ZC,skinbase_vertex:KC,skinning_pars_vertex:QC,skinning_vertex:JC,skinnormal_vertex:$C,specularmap_fragment:eD,specularmap_pars_fragment:tD,tonemapping_fragment:nD,tonemapping_pars_fragment:iD,transmission_fragment:aD,transmission_pars_fragment:rD,uv_pars_fragment:sD,uv_pars_vertex:oD,uv_vertex:lD,worldpos_vertex:cD,background_vert:uD,background_frag:fD,backgroundCube_vert:hD,backgroundCube_frag:dD,cube_vert:pD,cube_frag:mD,depth_vert:gD,depth_frag:_D,distanceRGBA_vert:vD,distanceRGBA_frag:xD,equirect_vert:yD,equirect_frag:SD,linedashed_vert:MD,linedashed_frag:bD,meshbasic_vert:ED,meshbasic_frag:TD,meshlambert_vert:AD,meshlambert_frag:wD,meshmatcap_vert:RD,meshmatcap_frag:CD,meshnormal_vert:DD,meshnormal_frag:UD,meshphong_vert:ND,meshphong_frag:LD,meshphysical_vert:OD,meshphysical_frag:PD,meshtoon_vert:zD,meshtoon_frag:ID,points_vert:BD,points_frag:FD,shadow_vert:HD,shadow_frag:GD,sprite_vert:VD,sprite_frag:kD},Ie={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ta={basic:{uniforms:oi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:oi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:oi([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:oi([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:oi([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:oi([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:oi([Ie.points,Ie.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:oi([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:oi([Ie.common,Ie.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:oi([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:oi([Ie.sprite,Ie.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:oi([Ie.common,Ie.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:oi([Ie.lights,Ie.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ta.physical={uniforms:oi([Ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const eh={r:0,b:0,g:0},Ns=new _a,XD=new tn;function jD(r,e,t,i,s,l,u){const f=new mt(0);let d=l===!0?0:1,h,m,_=null,v=0,y=null;function T(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function M(R){let A=!1;const O=T(R);O===null?x(f,d):O&&O.isColor&&(x(O,1),A=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(R,A){const O=T(A);O&&(O.isCubeTexture||O.mapping===Ih)?(m===void 0&&(m=new yn(new Bl(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:wl(Ta.backgroundCube.uniforms),vertexShader:Ta.backgroundCube.vertexShader,fragmentShader:Ta.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,z,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Ns.copy(A.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(XD.makeRotationFromEuler(Ns)),m.material.toneMapped=It.getTransfer(O.colorSpace)!==Kt,(_!==O||v!==O.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,_=O,v=O.version,y=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(h===void 0&&(h=new yn(new qs(2,2),new fr({name:"BackgroundMaterial",uniforms:wl(Ta.background.uniforms),vertexShader:Ta.background.vertexShader,fragmentShader:Ta.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=O,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=It.getTransfer(O.colorSpace)!==Kt,O.matrixAutoUpdate===!0&&O.updateMatrix(),h.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||v!==O.version||y!==r.toneMapping)&&(h.material.needsUpdate=!0,_=O,v=O.version,y=r.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,A){R.getRGB(eh,ab(r)),i.buffers.color.setClear(eh.r,eh.g,eh.b,A,u)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,A=1){f.set(R),d=A,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,x(f,d)},render:M,addToRenderList:S,dispose:D}}function WD(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=v(null);let l=s,u=!1;function f(U,V,Q,ne,re){let de=!1;const B=_(ne,Q,V);l!==B&&(l=B,h(l.object)),de=y(U,ne,Q,re),de&&T(U,ne,Q,re),re!==null&&e.update(re,r.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,A(U,V,Q,ne),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function d(){return r.createVertexArray()}function h(U){return r.bindVertexArray(U)}function m(U){return r.deleteVertexArray(U)}function _(U,V,Q){const ne=Q.wireframe===!0;let re=i[U.id];re===void 0&&(re={},i[U.id]=re);let de=re[V.id];de===void 0&&(de={},re[V.id]=de);let B=de[ne];return B===void 0&&(B=v(d()),de[ne]=B),B}function v(U){const V=[],Q=[],ne=[];for(let re=0;re<t;re++)V[re]=0,Q[re]=0,ne[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:ne,object:U,attributes:{},index:null}}function y(U,V,Q,ne){const re=l.attributes,de=V.attributes;let B=0;const Z=Q.getAttributes();for(const W in Z)if(Z[W].location>=0){const be=re[W];let F=de[W];if(F===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(F=U.instanceColor)),be===void 0||be.attribute!==F||F&&be.data!==F.data)return!0;B++}return l.attributesNum!==B||l.index!==ne}function T(U,V,Q,ne){const re={},de=V.attributes;let B=0;const Z=Q.getAttributes();for(const W in Z)if(Z[W].location>=0){let be=de[W];be===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(be=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(be=U.instanceColor));const F={};F.attribute=be,be&&be.data&&(F.data=be.data),re[W]=F,B++}l.attributes=re,l.attributesNum=B,l.index=ne}function M(){const U=l.newAttributes;for(let V=0,Q=U.length;V<Q;V++)U[V]=0}function S(U){x(U,0)}function x(U,V){const Q=l.newAttributes,ne=l.enabledAttributes,re=l.attributeDivisors;Q[U]=1,ne[U]===0&&(r.enableVertexAttribArray(U),ne[U]=1),re[U]!==V&&(r.vertexAttribDivisor(U,V),re[U]=V)}function D(){const U=l.newAttributes,V=l.enabledAttributes;for(let Q=0,ne=V.length;Q<ne;Q++)V[Q]!==U[Q]&&(r.disableVertexAttribArray(Q),V[Q]=0)}function R(U,V,Q,ne,re,de,B){B===!0?r.vertexAttribIPointer(U,V,Q,re,de):r.vertexAttribPointer(U,V,Q,ne,re,de)}function A(U,V,Q,ne){M();const re=ne.attributes,de=Q.getAttributes(),B=V.defaultAttributeValues;for(const Z in de){const W=de[Z];if(W.location>=0){let ye=re[Z];if(ye===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(ye=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(ye=U.instanceColor)),ye!==void 0){const be=ye.normalized,F=ye.itemSize,ie=e.get(ye);if(ie===void 0)continue;const Me=ie.buffer,Ee=ie.type,De=ie.bytesPerElement,oe=Ee===r.INT||Ee===r.UNSIGNED_INT||ye.gpuType===__;if(ye.isInterleavedBufferAttribute){const me=ye.data,Le=me.stride,Ve=ye.offset;if(me.isInstancedInterleavedBuffer){for(let We=0;We<W.locationSize;We++)x(W.location+We,me.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let We=0;We<W.locationSize;We++)S(W.location+We);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let We=0;We<W.locationSize;We++)R(W.location+We,F/W.locationSize,Ee,be,Le*De,(Ve+F/W.locationSize*We)*De,oe)}else{if(ye.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)x(W.location+me,ye.meshPerAttribute);U.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let me=0;me<W.locationSize;me++)S(W.location+me);r.bindBuffer(r.ARRAY_BUFFER,Me);for(let me=0;me<W.locationSize;me++)R(W.location+me,F/W.locationSize,Ee,be,F*De,F/W.locationSize*me*De,oe)}}else if(B!==void 0){const be=B[Z];if(be!==void 0)switch(be.length){case 2:r.vertexAttrib2fv(W.location,be);break;case 3:r.vertexAttrib3fv(W.location,be);break;case 4:r.vertexAttrib4fv(W.location,be);break;default:r.vertexAttrib1fv(W.location,be)}}}}D()}function O(){H();for(const U in i){const V=i[U];for(const Q in V){const ne=V[Q];for(const re in ne)m(ne[re].object),delete ne[re];delete V[Q]}delete i[U]}}function P(U){if(i[U.id]===void 0)return;const V=i[U.id];for(const Q in V){const ne=V[Q];for(const re in ne)m(ne[re].object),delete ne[re];delete V[Q]}delete i[U.id]}function z(U){for(const V in i){const Q=i[V];if(Q[U.id]===void 0)continue;const ne=Q[U.id];for(const re in ne)m(ne[re].object),delete ne[re];delete Q[U.id]}}function H(){w(),u=!0,l!==s&&(l=s,h(l.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:H,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:M,enableAttribute:S,disableUnusedAttributes:D}}function qD(r,e,t){let i;function s(h){i=h}function l(h,m){r.drawArrays(i,h,m),t.update(m,i,1)}function u(h,m,_){_!==0&&(r.drawArraysInstanced(i,h,m,_),t.update(m,i,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,_);let y=0;for(let T=0;T<_;T++)y+=m[T];t.update(y,i,1)}function d(h,m,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<h.length;T++)u(h[T],m[T],v[T]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,m,0,v,0,_);let T=0;for(let M=0;M<_;M++)T+=m[M]*v[M];t.update(T,i,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function YD(r,e,t,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(z){return!(z!==ta&&i.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const H=z===Ol&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ua&&i.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ga&&!H)}function d(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),R=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:A,vertexTextures:O,maxSamples:P}}function ZD(r){const e=this;let t=null,i=0,s=!1,l=!1;const u=new Xr,f=new vt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||i!==0||s;return s=v,i=_.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,y){const T=_.clippingPlanes,M=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!s||T===null||T.length===0||l&&!S)l?m(null):h();else{const D=l?0:i,R=D*4;let A=x.clippingState||null;d.value=A,A=m(T,v,R,y);for(let O=0;O!==R;++O)A[O]=t[O];x.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,v,y,T){const M=_!==null?_.length:0;let S=null;if(M!==0){if(S=d.value,T!==!0||S===null){const x=y+M*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let R=0,A=y;R!==M;++R,A+=4)u.copy(_[R]).applyMatrix4(D,f),u.normal.toArray(S,A),S[A+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function KD(r){let e=new WeakMap;function t(u,f){return f===lg?u.mapping=El:f===cg&&(u.mapping=Tl),u}function i(u){if(u&&u.isTexture){const f=u.mapping;if(f===lg||f===cg)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new X2(d.height);return h.fromEquirectangularTexture(r,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const f=u.target;f.removeEventListener("dispose",s);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const ol=4,NS=[.125,.215,.35,.446,.526,.582],Hs=20,Om=new rR,LS=new mt;let Pm=null,zm=0,Im=0,Bm=!1;const zs=(1+Math.sqrt(5))/2,tl=1/zs,OS=[new Y(-zs,tl,0),new Y(zs,tl,0),new Y(-tl,0,zs),new Y(tl,0,zs),new Y(0,zs,-tl),new Y(0,zs,tl),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],QD=new Y;class Vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,l={}){const{size:u=256,position:f=QD}=l;Pm=this._renderer.getRenderTarget(),zm=this._renderer.getActiveCubeFace(),Im=this._renderer.getActiveMipmapLevel(),Bm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=IS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pm,zm,Im),this._renderer.xr.enabled=Bm,e.scissorTest=!1,th(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===El||e.mapping===Tl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pm=this._renderer.getRenderTarget(),zm=this._renderer.getActiveCubeFace(),Im=this._renderer.getActiveMipmapLevel(),Bm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Ol,format:ta,colorSpace:Al,depthBuffer:!1},s=PS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=PS(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JD(l)),this._blurMaterial=$D(l,e,t)}return s}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,Om)}_sceneToCubeUV(e,t,i,s,l){const d=new zi(90,1,t,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(LS),_.toneMapping=ts,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null));const M=new tb({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),S=new yn(new Bl,M);let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(LS),x=!0);for(let R=0;R<6;R++){const A=R%3;A===0?(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[R],l.y,l.z)):A===1?(d.up.set(0,0,h[R]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[R],l.z)):(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[R]));const O=this._cubeSize;th(s,A*O,R>2?O:0,O,O),_.setRenderTarget(s),x&&_.render(S,d),_.render(e,d)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=D}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===El||e.mapping===Tl;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=IS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zS());const l=s?this._cubemapMaterial:this._equirectMaterial,u=new yn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;th(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,Om)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=OS[(s-l-1)%OS.length];this._blur(e,l-1,l,u,f)}t.autoClear=i}_blur(e,t,i,s,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",l),this._halfBlur(u,e,i,i,s,"longitudinal",l)}_halfBlur(e,t,i,s,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new yn(this._lodPlanes[s],h),v=h.uniforms,y=this._sizeLods[i]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Hs-1),M=l/T,S=isFinite(l)?1+Math.floor(m*M):Hs;S>Hs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Hs}`);const x=[];let D=0;for(let z=0;z<Hs;++z){const H=z/M,w=Math.exp(-H*H/2);x.push(w),z===0?D+=w:z<S&&(D+=2*w)}for(let z=0;z<x.length;z++)x[z]=x[z]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:R}=this;v.dTheta.value=T,v.mipInt.value=R-i;const A=this._sizeLods[s],O=3*A*(s>R-ol?s-R+ol:0),P=4*(this._cubeSize-A);th(t,O,P,3*A,2*A),d.setRenderTarget(t),d.render(_,Om)}}function JD(r){const e=[],t=[],i=[];let s=r;const l=r-ol+1+NS.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);t.push(f);let d=1/f;u>r-ol?d=NS[u-r+ol-1]:u===0&&(d=0),i.push(d);const h=1/(f-2),m=-h,_=1+h,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,T=6,M=3,S=2,x=1,D=new Float32Array(M*T*y),R=new Float32Array(S*T*y),A=new Float32Array(x*T*y);for(let P=0;P<y;P++){const z=P%3*2/3-1,H=P>2?0:-1,w=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];D.set(w,M*T*P),R.set(v,S*T*P);const U=[P,P,P,P,P,P];A.set(U,x*T*P)}const O=new Oa;O.setAttribute("position",new ra(D,M)),O.setAttribute("uv",new ra(R,S)),O.setAttribute("faceIndex",new ra(A,x)),e.push(O),s>ol&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function PS(r,e,t){const i=new rs(r,e,t);return i.texture.mapping=Ih,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function th(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function $D(r,e,t){const i=new Float32Array(Hs),s=new Y(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:U_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function zS(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:U_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function IS(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:U_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function U_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e3(r){let e=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const d=f.mapping,h=d===lg||d===cg,m=d===El||d===Tl;if(h||m){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Vg(r)),_=h?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return h&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new Vg(r)),_=h?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function s(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function t3(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ou("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function n3(r,e,t,i){const s={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",u),delete s[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return s[v.id]===!0||(v.addEventListener("dispose",u),s[v.id]=!0,t.memory.geometries++),v}function d(_){const v=_.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER)}function h(_){const v=[],y=_.index,T=_.attributes.position;let M=0;if(y!==null){const D=y.array;M=y.version;for(let R=0,A=D.length;R<A;R+=3){const O=D[R+0],P=D[R+1],z=D[R+2];v.push(O,P,P,z,z,O)}}else if(T!==void 0){const D=T.array;M=T.version;for(let R=0,A=D.length/3-1;R<A;R+=3){const O=R+0,P=R+1,z=R+2;v.push(O,P,P,z,z,O)}}else return;const S=new(JM(v)?ib:nb)(v,1);S.version=M;const x=l.get(_);x&&e.remove(x),l.set(_,S)}function m(_){const v=l.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:m}}function i3(r,e,t){let i;function s(v){i=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,y){r.drawElements(i,y,l,v*u),t.update(y,i,1)}function h(v,y,T){T!==0&&(r.drawElementsInstanced(i,y,l,v*u,T),t.update(y,i,T))}function m(v,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,l,v,0,T);let S=0;for(let x=0;x<T;x++)S+=y[x];t.update(S,i,1)}function _(v,y,T,M){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/u,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,l,v,0,M,0,T);let x=0;for(let D=0;D<T;D++)x+=y[D]*M[D];t.update(x,i,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function a3(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r3(r,e,t){const i=new WeakMap,s=new Wt;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=i.get(f);if(v===void 0||v.count!==_){let w=function(){z.dispose(),i.delete(f),f.removeEventListener("dispose",w)};v!==void 0&&v.texture.dispose();const y=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let R=0;y===!0&&(R=1),T===!0&&(R=2),M===!0&&(R=3);let A=f.attributes.position.count*R,O=1;A>e.maxTextureSize&&(O=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*O*4*_),z=new $M(P,A,O,_);z.type=ga,z.needsUpdate=!0;const H=R*4;for(let U=0;U<_;U++){const V=S[U],Q=x[U],ne=D[U],re=A*O*4*U;for(let de=0;de<V.count;de++){const B=de*H;y===!0&&(s.fromBufferAttribute(V,de),P[re+B+0]=s.x,P[re+B+1]=s.y,P[re+B+2]=s.z,P[re+B+3]=0),T===!0&&(s.fromBufferAttribute(Q,de),P[re+B+4]=s.x,P[re+B+5]=s.y,P[re+B+6]=s.z,P[re+B+7]=0),M===!0&&(s.fromBufferAttribute(ne,de),P[re+B+8]=s.x,P[re+B+9]=s.y,P[re+B+10]=s.z,P[re+B+11]=ne.itemSize===4?s.w:1)}}v={count:_,texture:z,size:new rt(A,O)},i.set(f,v),f.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let y=0;for(let M=0;M<h.length;M++)y+=h[M];const T=f.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",h)}d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function s3(r,e,t,i){let s=new WeakMap;function l(d){const h=i.render.frame,m=d.geometry,_=e.get(d,m);if(s.get(_)!==h&&(e.update(_),s.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==h&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==h&&(v.update(),s.set(v,h))}return _}function u(){s=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const pb=new fi,BS=new lb(1,1),mb=new $M,gb=new w2,_b=new rb,FS=[],HS=[],GS=new Float32Array(16),VS=new Float32Array(9),kS=new Float32Array(4);function Fl(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let l=FS[s];if(l===void 0&&(l=new Float32Array(s),FS[s]=l),e!==0){i.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function Nn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Ln(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Bh(r,e){let t=HS[e];t===void 0&&(t=new Int32Array(e),HS[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function o3(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function l3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;r.uniform2fv(this.addr,e),Ln(t,e)}}function c3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;r.uniform3fv(this.addr,e),Ln(t,e)}}function u3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;r.uniform4fv(this.addr,e),Ln(t,e)}}function f3(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(Nn(t,i))return;kS.set(i),r.uniformMatrix2fv(this.addr,!1,kS),Ln(t,i)}}function h3(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(Nn(t,i))return;VS.set(i),r.uniformMatrix3fv(this.addr,!1,VS),Ln(t,i)}}function d3(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(Nn(t,i))return;GS.set(i),r.uniformMatrix4fv(this.addr,!1,GS),Ln(t,i)}}function p3(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function m3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;r.uniform2iv(this.addr,e),Ln(t,e)}}function g3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;r.uniform3iv(this.addr,e),Ln(t,e)}}function _3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;r.uniform4iv(this.addr,e),Ln(t,e)}}function v3(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function x3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;r.uniform2uiv(this.addr,e),Ln(t,e)}}function y3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;r.uniform3uiv(this.addr,e),Ln(t,e)}}function S3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;r.uniform4uiv(this.addr,e),Ln(t,e)}}function M3(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let l;this.type===r.SAMPLER_2D_SHADOW?(BS.compareFunction=QM,l=BS):l=pb,t.setTexture2D(e||l,s)}function b3(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gb,s)}function E3(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_b,s)}function T3(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mb,s)}function A3(r){switch(r){case 5126:return o3;case 35664:return l3;case 35665:return c3;case 35666:return u3;case 35674:return f3;case 35675:return h3;case 35676:return d3;case 5124:case 35670:return p3;case 35667:case 35671:return m3;case 35668:case 35672:return g3;case 35669:case 35673:return _3;case 5125:return v3;case 36294:return x3;case 36295:return y3;case 36296:return S3;case 35678:case 36198:case 36298:case 36306:case 35682:return M3;case 35679:case 36299:case 36307:return b3;case 35680:case 36300:case 36308:case 36293:return E3;case 36289:case 36303:case 36311:case 36292:return T3}}function w3(r,e){r.uniform1fv(this.addr,e)}function R3(r,e){const t=Fl(e,this.size,2);r.uniform2fv(this.addr,t)}function C3(r,e){const t=Fl(e,this.size,3);r.uniform3fv(this.addr,t)}function D3(r,e){const t=Fl(e,this.size,4);r.uniform4fv(this.addr,t)}function U3(r,e){const t=Fl(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function N3(r,e){const t=Fl(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function L3(r,e){const t=Fl(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function O3(r,e){r.uniform1iv(this.addr,e)}function P3(r,e){r.uniform2iv(this.addr,e)}function z3(r,e){r.uniform3iv(this.addr,e)}function I3(r,e){r.uniform4iv(this.addr,e)}function B3(r,e){r.uniform1uiv(this.addr,e)}function F3(r,e){r.uniform2uiv(this.addr,e)}function H3(r,e){r.uniform3uiv(this.addr,e)}function G3(r,e){r.uniform4uiv(this.addr,e)}function V3(r,e,t){const i=this.cache,s=e.length,l=Bh(t,s);Nn(i,l)||(r.uniform1iv(this.addr,l),Ln(i,l));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||pb,l[u])}function k3(r,e,t){const i=this.cache,s=e.length,l=Bh(t,s);Nn(i,l)||(r.uniform1iv(this.addr,l),Ln(i,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||gb,l[u])}function X3(r,e,t){const i=this.cache,s=e.length,l=Bh(t,s);Nn(i,l)||(r.uniform1iv(this.addr,l),Ln(i,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||_b,l[u])}function j3(r,e,t){const i=this.cache,s=e.length,l=Bh(t,s);Nn(i,l)||(r.uniform1iv(this.addr,l),Ln(i,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||mb,l[u])}function W3(r){switch(r){case 5126:return w3;case 35664:return R3;case 35665:return C3;case 35666:return D3;case 35674:return U3;case 35675:return N3;case 35676:return L3;case 5124:case 35670:return O3;case 35667:case 35671:return P3;case 35668:case 35672:return z3;case 35669:case 35673:return I3;case 5125:return B3;case 36294:return F3;case 36295:return H3;case 36296:return G3;case 35678:case 36198:case 36298:case 36306:case 35682:return V3;case 35679:case 36299:case 36307:return k3;case 35680:case 36300:case 36308:case 36293:return X3;case 36289:case 36303:case 36311:case 36292:return j3}}class q3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=A3(t.type)}}class Y3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W3(t.type)}}class Z3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(e,t[f.id],i)}}}const Fm=/(\w+)(\])?(\[|\.)?/g;function XS(r,e){r.seq.push(e),r.map[e.id]=e}function K3(r,e,t){const i=r.name,s=i.length;for(Fm.lastIndex=0;;){const l=Fm.exec(i),u=Fm.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===s){XS(t,h===void 0?new q3(f,r,e):new Y3(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new Z3(f),XS(t,_)),t=_}}}class fh{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=e.getActiveUniform(t,s),u=e.getUniformLocation(t,l.name);K3(l,u,this)}}setValue(e,t,i,s){const l=this.map[t];l!==void 0&&l.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function jS(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Q3=37297;let J3=0;function $3(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const f=u+1;i.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return i.join(`
`)}const WS=new vt;function eU(r){It._getMatrix(WS,It.workingColorSpace,r);const e=`mat3( ${WS.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(r)){case vh:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qS(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+$3(r.getShaderSource(e),f)}else return l}function tU(r,e){const t=eU(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nU(r,e){let t;switch(e){case Gw:t="Linear";break;case Vw:t="Reinhard";break;case kw:t="Cineon";break;case VM:t="ACESFilmic";break;case jw:t="AgX";break;case Ww:t="Neutral";break;case Xw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nh=new Y;function iU(){It.getLuminanceCoefficients(nh);const r=nh.x.toFixed(4),e=nh.y.toFixed(4),t=nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aU(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vc).join(`
`)}function rU(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sU(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const l=r.getActiveAttrib(e,s),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function Vc(r){return r!==""}function YS(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ZS(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oU=/^[ \t]*#include +<([\w\d./]+)>/gm;function kg(r){return r.replace(oU,cU)}const lU=new Map;function cU(r,e){let t=_t[e];if(t===void 0){const i=lU.get(e);if(i!==void 0)t=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kg(t)}const uU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function KS(r){return r.replace(uU,fU)}function fU(r,e,t,i){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function QS(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hU(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===GM?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===yw?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ar&&(e="SHADOWMAP_TYPE_VSM"),e}function dU(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case El:case Tl:e="ENVMAP_TYPE_CUBE";break;case Ih:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pU(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Tl:e="ENVMAP_MODE_REFRACTION";break}return e}function mU(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case g_:e="ENVMAP_BLENDING_MULTIPLY";break;case Fw:e="ENVMAP_BLENDING_MIX";break;case Hw:e="ENVMAP_BLENDING_ADD";break}return e}function gU(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function _U(r,e,t,i){const s=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=hU(t),h=dU(t),m=pU(t),_=mU(t),v=gU(t),y=aU(t),T=rU(l),M=s.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Vc).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Vc).join(`
`),x.length>0&&(x+=`
`)):(S=[QS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vc).join(`
`),x=[QS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?_t.tonemapping_pars_fragment:"",t.toneMapping!==ts?nU("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,tU("linearToOutputTexel",t.outputColorSpace),iU(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vc).join(`
`)),u=kg(u),u=YS(u,t),u=ZS(u,t),f=kg(f),f=YS(f,t),f=ZS(f,t),u=KS(u),f=KS(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===eS?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=D+S+u,A=D+x+f,O=jS(s,s.VERTEX_SHADER,R),P=jS(s,s.FRAGMENT_SHADER,A);s.attachShader(M,O),s.attachShader(M,P),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function z(V){if(r.debug.checkShaderErrors){const Q=s.getProgramInfoLog(M)||"",ne=s.getShaderInfoLog(O)||"",re=s.getShaderInfoLog(P)||"",de=Q.trim(),B=ne.trim(),Z=re.trim();let W=!0,ye=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,O,P);else{const be=qS(s,O,"vertex"),F=qS(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+de+`
`+be+`
`+F)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(B===""||Z==="")&&(ye=!1);ye&&(V.diagnostics={runnable:W,programLog:de,vertexShader:{log:B,prefix:S},fragmentShader:{log:Z,prefix:x}})}s.deleteShader(O),s.deleteShader(P),H=new fh(s,M),w=sU(s,M)}let H;this.getUniforms=function(){return H===void 0&&z(this),H};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(M,Q3)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J3++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let vU=0;class xU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yU(e),t.set(e,i)),i}}class yU{constructor(e){this.id=vU++,this.code=e,this.usedTimes=0}}function SU(r,e,t,i,s,l,u){const f=new R_,d=new xU,h=new Set,m=[],_=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function S(w,U,V,Q,ne){const re=Q.fog,de=ne.geometry,B=w.isMeshStandardMaterial?Q.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),W=Z&&Z.mapping===Ih?Z.image.height:null,ye=T[w.type];w.precision!==null&&(y=s.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const be=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=be!==void 0?be.length:0;let ie=0;de.morphAttributes.position!==void 0&&(ie=1),de.morphAttributes.normal!==void 0&&(ie=2),de.morphAttributes.color!==void 0&&(ie=3);let Me,Ee,De,oe;if(ye){const Fe=Ta[ye];Me=Fe.vertexShader,Ee=Fe.fragmentShader}else Me=w.vertexShader,Ee=w.fragmentShader,d.update(w),De=d.getVertexShaderID(w),oe=d.getFragmentShaderID(w);const me=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),Ve=ne.isInstancedMesh===!0,We=ne.isBatchedMesh===!0,lt=!!w.map,Ht=!!w.matcap,G=!!Z,Mt=!!w.aoMap,at=!!w.lightMap,et=!!w.bumpMap,K=!!w.normalMap,xt=!!w.displacementMap,je=!!w.emissiveMap,ot=!!w.metalnessMap,Gt=!!w.roughnessMap,Bt=w.anisotropy>0,I=w.clearcoat>0,b=w.dispersion>0,k=w.iridescence>0,te=w.sheen>0,ue=w.transmission>0,ae=Bt&&!!w.anisotropyMap,Ue=I&&!!w.clearcoatMap,Re=I&&!!w.clearcoatNormalMap,ke=I&&!!w.clearcoatRoughnessMap,He=k&&!!w.iridescenceMap,Ae=k&&!!w.iridescenceThicknessMap,Ce=te&&!!w.sheenColorMap,$e=te&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Pe=!!w.specularColorMap,ft=!!w.specularIntensityMap,q=ue&&!!w.transmissionMap,we=ue&&!!w.thicknessMap,Ne=!!w.gradientMap,Xe=!!w.alphaMap,Te=w.alphaTest>0,ve=!!w.alphaHash,qe=!!w.extensions;let ut=ts;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ut=r.toneMapping);const Ot={shaderID:ye,shaderType:w.type,shaderName:w.name,vertexShader:Me,fragmentShader:Ee,defines:w.defines,customVertexShaderID:De,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:We,batchingColor:We&&ne._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&ne.instanceColor!==null,instancingMorph:Ve&&ne.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Al,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:Ht,envMap:G,envMapMode:G&&Z.mapping,envMapCubeUVHeight:W,aoMap:Mt,lightMap:at,bumpMap:et,normalMap:K,displacementMap:v&&xt,emissiveMap:je,normalMapObjectSpace:K&&w.normalMapType===Kw,normalMapTangentSpace:K&&w.normalMapType===E_,metalnessMap:ot,roughnessMap:Gt,anisotropy:Bt,anisotropyMap:ae,clearcoat:I,clearcoatMap:Ue,clearcoatNormalMap:Re,clearcoatRoughnessMap:ke,dispersion:b,iridescence:k,iridescenceMap:He,iridescenceThicknessMap:Ae,sheen:te,sheenColorMap:Ce,sheenRoughnessMap:$e,specularMap:Be,specularColorMap:Pe,specularIntensityMap:ft,transmission:ue,transmissionMap:q,thicknessMap:we,gradientMap:Ne,opaque:w.transparent===!1&&w.blending===hl&&w.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Te,alphaHash:ve,combine:w.combine,mapUv:lt&&M(w.map.channel),aoMapUv:Mt&&M(w.aoMap.channel),lightMapUv:at&&M(w.lightMap.channel),bumpMapUv:et&&M(w.bumpMap.channel),normalMapUv:K&&M(w.normalMap.channel),displacementMapUv:xt&&M(w.displacementMap.channel),emissiveMapUv:je&&M(w.emissiveMap.channel),metalnessMapUv:ot&&M(w.metalnessMap.channel),roughnessMapUv:Gt&&M(w.roughnessMap.channel),anisotropyMapUv:ae&&M(w.anisotropyMap.channel),clearcoatMapUv:Ue&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Re&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:$e&&M(w.sheenRoughnessMap.channel),specularMapUv:Be&&M(w.specularMap.channel),specularColorMapUv:Pe&&M(w.specularColorMap.channel),specularIntensityMapUv:ft&&M(w.specularIntensityMap.channel),transmissionMapUv:q&&M(w.transmissionMap.channel),thicknessMapUv:we&&M(w.thicknessMap.channel),alphaMapUv:Xe&&M(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(K||Bt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!de.attributes.uv&&(lt||Xe),fog:!!re,useFog:w.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Le,skinning:ne.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&It.getTransfer(w.map.colorSpace)===Kt,decodeVideoTextureEmissive:je&&w.emissiveMap.isVideoTexture===!0&&It.getTransfer(w.emissiveMap.colorSpace)===Kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===lr,flipSided:w.side===ui,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&w.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=h.has(1),Ot.vertexUv2s=h.has(2),Ot.vertexUv3s=h.has(3),h.clear(),Ot}function x(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)U.push(V),U.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(D(U,w),R(U,w),U.push(r.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function D(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function R(w,U){f.disableAll(),U.supportsVertexTextures&&f.enable(0),U.instancing&&f.enable(1),U.instancingColor&&f.enable(2),U.instancingMorph&&f.enable(3),U.matcap&&f.enable(4),U.envMap&&f.enable(5),U.normalMapObjectSpace&&f.enable(6),U.normalMapTangentSpace&&f.enable(7),U.clearcoat&&f.enable(8),U.iridescence&&f.enable(9),U.alphaTest&&f.enable(10),U.vertexColors&&f.enable(11),U.vertexAlphas&&f.enable(12),U.vertexUv1s&&f.enable(13),U.vertexUv2s&&f.enable(14),U.vertexUv3s&&f.enable(15),U.vertexTangents&&f.enable(16),U.anisotropy&&f.enable(17),U.alphaHash&&f.enable(18),U.batching&&f.enable(19),U.dispersion&&f.enable(20),U.batchingColor&&f.enable(21),U.gradientMap&&f.enable(22),w.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),w.push(f.mask)}function A(w){const U=T[w.type];let V;if(U){const Q=Ta[U];V=H2.clone(Q.uniforms)}else V=w.uniforms;return V}function O(w,U){let V;for(let Q=0,ne=m.length;Q<ne;Q++){const re=m[Q];if(re.cacheKey===U){V=re,++V.usedTimes;break}}return V===void 0&&(V=new _U(r,U,w,l),m.push(V)),V}function P(w){if(--w.usedTimes===0){const U=m.indexOf(w);m[U]=m[m.length-1],m.pop(),w.destroy()}}function z(w){d.remove(w)}function H(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:O,releaseProgram:P,releaseShaderCache:z,programs:m,dispose:H}}function MU(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function i(u){r.delete(u)}function s(u,f,d){r.get(u)[f]=d}function l(){r=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:l}}function bU(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function JS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $S(){const r=[];let e=0;const t=[],i=[],s=[];function l(){e=0,t.length=0,i.length=0,s.length=0}function u(_,v,y,T,M,S){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:T,renderOrder:_.renderOrder,z:M,group:S},r[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=T,x.renderOrder=_.renderOrder,x.z=M,x.group=S),e++,x}function f(_,v,y,T,M,S){const x=u(_,v,y,T,M,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function d(_,v,y,T,M,S){const x=u(_,v,y,T,M,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(_,v){t.length>1&&t.sort(_||bU),i.length>1&&i.sort(v||JS),s.length>1&&s.sort(v||JS)}function m(){for(let _=e,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:l,push:f,unshift:d,finish:m,sort:h}}function EU(){let r=new WeakMap;function e(i,s){const l=r.get(i);let u;return l===void 0?(u=new $S,r.set(i,[u])):s>=l.length?(u=new $S,l.push(u)):u=l[s],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function TU(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new mt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function AU(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let wU=0;function RU(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function CU(r){const e=new TU,t=AU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const s=new Y,l=new tn,u=new tn;function f(h){let m=0,_=0,v=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let y=0,T=0,M=0,S=0,x=0,D=0,R=0,A=0,O=0,P=0,z=0;h.sort(RU);for(let w=0,U=h.length;w<U;w++){const V=h[w],Q=V.color,ne=V.intensity,re=V.distance,de=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=Q.r*ne,_+=Q.g*ne,v+=Q.b*ne;else if(V.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(V.sh.coefficients[B],ne);z++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,W=t.get(V);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.directionalShadow[y]=W,i.directionalShadowMap[y]=de,i.directionalShadowMatrix[y]=V.shadow.matrix,D++}i.directional[y]=B,y++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(Q).multiplyScalar(ne),B.distance=re,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,i.spot[M]=B;const Z=V.shadow;if(V.map&&(i.spotLightMap[O]=V.map,O++,Z.updateMatrices(V),V.castShadow&&P++),i.spotLightMatrix[M]=Z.matrix,V.castShadow){const W=t.get(V);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=de,A++}M++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(Q).multiplyScalar(ne),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),i.rectArea[S]=B,S++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const Z=V.shadow,W=t.get(V);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,i.pointShadow[T]=W,i.pointShadowMap[T]=de,i.pointShadowMatrix[T]=V.shadow.matrix,R++}i.point[T]=B,T++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(ne),B.groundColor.copy(V.groundColor).multiplyScalar(ne),i.hemi[x]=B,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=v;const H=i.hash;(H.directionalLength!==y||H.pointLength!==T||H.spotLength!==M||H.rectAreaLength!==S||H.hemiLength!==x||H.numDirectionalShadows!==D||H.numPointShadows!==R||H.numSpotShadows!==A||H.numSpotMaps!==O||H.numLightProbes!==z)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=T,i.hemi.length=x,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=z,H.directionalLength=y,H.pointLength=T,H.spotLength=M,H.rectAreaLength=S,H.hemiLength=x,H.numDirectionalShadows=D,H.numPointShadows=R,H.numSpotShadows=A,H.numSpotMaps=O,H.numLightProbes=z,i.version=wU++)}function d(h,m){let _=0,v=0,y=0,T=0,M=0;const S=m.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const R=h[x];if(R.isDirectionalLight){const A=i.directional[_];A.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),_++}else if(R.isSpotLight){const A=i.spot[y];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),y++}else if(R.isRectAreaLight){const A=i.rectArea[T];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),T++}else if(R.isPointLight){const A=i.point[v];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(S),v++}else if(R.isHemisphereLight){const A=i.hemi[M];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(S),M++}}}return{setup:f,setupView:d,state:i}}function eM(r){const e=new CU(r),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function u(m){i.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function DU(r){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let f;return u===void 0?(f=new eM(r),e.set(s,[f])):l>=u.length?(f=new eM(r),u.push(f)):f=u[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const UU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LU(r,e,t){let i=new C_;const s=new rt,l=new rt,u=new Wt,f=new tR({depthPacking:Zw}),d=new nR,h={},m=t.maxTextureSize,_={[as]:ui,[ui]:as,[lr]:lr},v=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:UU,fragmentShader:NU}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new Oa;T.setAttribute("position",new ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new yn(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=GM;let x=this.type;this.render=function(P,z,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const w=r.getRenderTarget(),U=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(es),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ne=x!==ar&&this.type===ar,re=x===ar&&this.type!==ar;for(let de=0,B=P.length;de<B;de++){const Z=P[de],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ye=W.getFrameExtents();if(s.multiply(ye),l.copy(W.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/ye.x),s.x=l.x*ye.x,W.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/ye.y),s.y=l.y*ye.y,W.mapSize.y=l.y)),W.map===null||ne===!0||re===!0){const F=this.type!==ar?{minFilter:Hi,magFilter:Hi}:{};W.map!==null&&W.map.dispose(),W.map=new rs(s.x,s.y,F),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const be=W.getViewportCount();for(let F=0;F<be;F++){const ie=W.getViewport(F);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),Q.viewport(u),W.updateMatrices(Z,F),i=W.getFrustum(),A(z,H,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===ar&&D(W,H),W.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(w,U,V)};function D(P,z){const H=e.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new rs(s.x,s.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(z,null,H,v,M,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(z,null,H,y,M,null)}function R(P,z,H,w){let U=null;const V=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)U=V;else if(U=H.isPointLight===!0?d:f,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=U.uuid,ne=z.uuid;let re=h[Q];re===void 0&&(re={},h[Q]=re);let de=re[ne];de===void 0&&(de=U.clone(),re[ne]=de,z.addEventListener("dispose",O)),U=de}if(U.visible=z.visible,U.wireframe=z.wireframe,w===ar?U.side=z.shadowSide!==null?z.shadowSide:z.side:U.side=z.shadowSide!==null?z.shadowSide:_[z.side],U.alphaMap=z.alphaMap,U.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,U.map=z.map,U.clipShadows=z.clipShadows,U.clippingPlanes=z.clippingPlanes,U.clipIntersection=z.clipIntersection,U.displacementMap=z.displacementMap,U.displacementScale=z.displacementScale,U.displacementBias=z.displacementBias,U.wireframeLinewidth=z.wireframeLinewidth,U.linewidth=z.linewidth,H.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const Q=r.properties.get(U);Q.light=H}return U}function A(P,z,H,w,U){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&U===ar)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);const ne=e.update(P),re=P.material;if(Array.isArray(re)){const de=ne.groups;for(let B=0,Z=de.length;B<Z;B++){const W=de[B],ye=re[W.materialIndex];if(ye&&ye.visible){const be=R(P,ye,w,U);P.onBeforeShadow(r,P,z,H,ne,be,W),r.renderBufferDirect(H,null,ne,be,P,W),P.onAfterShadow(r,P,z,H,ne,be,W)}}}else if(re.visible){const de=R(P,re,w,U);P.onBeforeShadow(r,P,z,H,ne,de,null),r.renderBufferDirect(H,null,ne,de,P,null),P.onAfterShadow(r,P,z,H,ne,de,null)}}const Q=P.children;for(let ne=0,re=Q.length;ne<re;ne++)A(Q[ne],z,H,w,U)}function O(P){P.target.removeEventListener("dispose",O);for(const H in h){const w=h[H],U=P.target.uuid;U in w&&(w[U].dispose(),delete w[U])}}}const OU={[tg]:ng,[ig]:sg,[ag]:og,[bl]:rg,[ng]:tg,[sg]:ig,[og]:ag,[rg]:bl};function PU(r,e){function t(){let q=!1;const we=new Wt;let Ne=null;const Xe=new Wt(0,0,0,0);return{setMask:function(Te){Ne!==Te&&!q&&(r.colorMask(Te,Te,Te,Te),Ne=Te)},setLocked:function(Te){q=Te},setClear:function(Te,ve,qe,ut,Ot){Ot===!0&&(Te*=ut,ve*=ut,qe*=ut),we.set(Te,ve,qe,ut),Xe.equals(we)===!1&&(r.clearColor(Te,ve,qe,ut),Xe.copy(we))},reset:function(){q=!1,Ne=null,Xe.set(-1,0,0,0)}}}function i(){let q=!1,we=!1,Ne=null,Xe=null,Te=null;return{setReversed:function(ve){if(we!==ve){const qe=e.get("EXT_clip_control");ve?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),we=ve;const ut=Te;Te=null,this.setClear(ut)}},getReversed:function(){return we},setTest:function(ve){ve?me(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(ve){Ne!==ve&&!q&&(r.depthMask(ve),Ne=ve)},setFunc:function(ve){if(we&&(ve=OU[ve]),Xe!==ve){switch(ve){case tg:r.depthFunc(r.NEVER);break;case ng:r.depthFunc(r.ALWAYS);break;case ig:r.depthFunc(r.LESS);break;case bl:r.depthFunc(r.LEQUAL);break;case ag:r.depthFunc(r.EQUAL);break;case rg:r.depthFunc(r.GEQUAL);break;case sg:r.depthFunc(r.GREATER);break;case og:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Xe=ve}},setLocked:function(ve){q=ve},setClear:function(ve){Te!==ve&&(we&&(ve=1-ve),r.clearDepth(ve),Te=ve)},reset:function(){q=!1,Ne=null,Xe=null,Te=null,we=!1}}}function s(){let q=!1,we=null,Ne=null,Xe=null,Te=null,ve=null,qe=null,ut=null,Ot=null;return{setTest:function(Fe){q||(Fe?me(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(Fe){we!==Fe&&!q&&(r.stencilMask(Fe),we=Fe)},setFunc:function(Fe,Qe,dt){(Ne!==Fe||Xe!==Qe||Te!==dt)&&(r.stencilFunc(Fe,Qe,dt),Ne=Fe,Xe=Qe,Te=dt)},setOp:function(Fe,Qe,dt){(ve!==Fe||qe!==Qe||ut!==dt)&&(r.stencilOp(Fe,Qe,dt),ve=Fe,qe=Qe,ut=dt)},setLocked:function(Fe){q=Fe},setClear:function(Fe){Ot!==Fe&&(r.clearStencil(Fe),Ot=Fe)},reset:function(){q=!1,we=null,Ne=null,Xe=null,Te=null,ve=null,qe=null,ut=null,Ot=null}}}const l=new t,u=new i,f=new s,d=new WeakMap,h=new WeakMap;let m={},_={},v=new WeakMap,y=[],T=null,M=!1,S=null,x=null,D=null,R=null,A=null,O=null,P=null,z=new mt(0,0,0),H=0,w=!1,U=null,V=null,Q=null,ne=null,re=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Z>=2);let ye=null,be={};const F=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Me=new Wt().fromArray(F),Ee=new Wt().fromArray(ie);function De(q,we,Ne,Xe){const Te=new Uint8Array(4),ve=r.createTexture();r.bindTexture(q,ve),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<Ne;qe++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Xe,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(we+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return ve}const oe={};oe[r.TEXTURE_2D]=De(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=De(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=De(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=De(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),me(r.DEPTH_TEST),u.setFunc(bl),et(!1),K(Zy),me(r.CULL_FACE),Mt(es);function me(q){m[q]!==!0&&(r.enable(q),m[q]=!0)}function Le(q){m[q]!==!1&&(r.disable(q),m[q]=!1)}function Ve(q,we){return _[q]!==we?(r.bindFramebuffer(q,we),_[q]=we,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=we),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=we),!0):!1}function We(q,we){let Ne=y,Xe=!1;if(q){Ne=v.get(we),Ne===void 0&&(Ne=[],v.set(we,Ne));const Te=q.textures;if(Ne.length!==Te.length||Ne[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,qe=Te.length;ve<qe;ve++)Ne[ve]=r.COLOR_ATTACHMENT0+ve;Ne.length=Te.length,Xe=!0}}else Ne[0]!==r.BACK&&(Ne[0]=r.BACK,Xe=!0);Xe&&r.drawBuffers(Ne)}function lt(q){return T!==q?(r.useProgram(q),T=q,!0):!1}const Ht={[Fs]:r.FUNC_ADD,[Mw]:r.FUNC_SUBTRACT,[bw]:r.FUNC_REVERSE_SUBTRACT};Ht[Ew]=r.MIN,Ht[Tw]=r.MAX;const G={[Aw]:r.ZERO,[ww]:r.ONE,[Rw]:r.SRC_COLOR,[$m]:r.SRC_ALPHA,[Ow]:r.SRC_ALPHA_SATURATE,[Nw]:r.DST_COLOR,[Dw]:r.DST_ALPHA,[Cw]:r.ONE_MINUS_SRC_COLOR,[eg]:r.ONE_MINUS_SRC_ALPHA,[Lw]:r.ONE_MINUS_DST_COLOR,[Uw]:r.ONE_MINUS_DST_ALPHA,[Pw]:r.CONSTANT_COLOR,[zw]:r.ONE_MINUS_CONSTANT_COLOR,[Iw]:r.CONSTANT_ALPHA,[Bw]:r.ONE_MINUS_CONSTANT_ALPHA};function Mt(q,we,Ne,Xe,Te,ve,qe,ut,Ot,Fe){if(q===es){M===!0&&(Le(r.BLEND),M=!1);return}if(M===!1&&(me(r.BLEND),M=!0),q!==Sw){if(q!==S||Fe!==w){if((x!==Fs||A!==Fs)&&(r.blendEquation(r.FUNC_ADD),x=Fs,A=Fs),Fe)switch(q){case hl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jm:r.blendFunc(r.ONE,r.ONE);break;case Ky:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qy:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case hl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ky:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}D=null,R=null,O=null,P=null,z.set(0,0,0),H=0,S=q,w=Fe}return}Te=Te||we,ve=ve||Ne,qe=qe||Xe,(we!==x||Te!==A)&&(r.blendEquationSeparate(Ht[we],Ht[Te]),x=we,A=Te),(Ne!==D||Xe!==R||ve!==O||qe!==P)&&(r.blendFuncSeparate(G[Ne],G[Xe],G[ve],G[qe]),D=Ne,R=Xe,O=ve,P=qe),(ut.equals(z)===!1||Ot!==H)&&(r.blendColor(ut.r,ut.g,ut.b,Ot),z.copy(ut),H=Ot),S=q,w=!1}function at(q,we){q.side===lr?Le(r.CULL_FACE):me(r.CULL_FACE);let Ne=q.side===ui;we&&(Ne=!Ne),et(Ne),q.blending===hl&&q.transparent===!1?Mt(es):Mt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const Xe=q.stencilWrite;f.setTest(Xe),Xe&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),je(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function et(q){U!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),U=q)}function K(q){q!==vw?(me(r.CULL_FACE),q!==V&&(q===Zy?r.cullFace(r.BACK):q===xw?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),V=q}function xt(q){q!==Q&&(B&&r.lineWidth(q),Q=q)}function je(q,we,Ne){q?(me(r.POLYGON_OFFSET_FILL),(ne!==we||re!==Ne)&&(r.polygonOffset(we,Ne),ne=we,re=Ne)):Le(r.POLYGON_OFFSET_FILL)}function ot(q){q?me(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function Gt(q){q===void 0&&(q=r.TEXTURE0+de-1),ye!==q&&(r.activeTexture(q),ye=q)}function Bt(q,we,Ne){Ne===void 0&&(ye===null?Ne=r.TEXTURE0+de-1:Ne=ye);let Xe=be[Ne];Xe===void 0&&(Xe={type:void 0,texture:void 0},be[Ne]=Xe),(Xe.type!==q||Xe.texture!==we)&&(ye!==Ne&&(r.activeTexture(Ne),ye=Ne),r.bindTexture(q,we||oe[q]),Xe.type=q,Xe.texture=we)}function I(){const q=be[ye];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{r.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ue(){try{r.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Re(){try{r.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ke(){try{r.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function He(){try{r.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{r.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ce(q){Me.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),Me.copy(q))}function $e(q){Ee.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Ee.copy(q))}function Be(q,we){let Ne=h.get(we);Ne===void 0&&(Ne=new WeakMap,h.set(we,Ne));let Xe=Ne.get(q);Xe===void 0&&(Xe=r.getUniformBlockIndex(we,q.name),Ne.set(q,Xe))}function Pe(q,we){const Xe=h.get(we).get(q);d.get(we)!==Xe&&(r.uniformBlockBinding(we,Xe,q.__bindingPointIndex),d.set(we,Xe))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},ye=null,be={},_={},v=new WeakMap,y=[],T=null,M=!1,S=null,x=null,D=null,R=null,A=null,O=null,P=null,z=new mt(0,0,0),H=0,w=!1,U=null,V=null,Q=null,ne=null,re=null,Me.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:me,disable:Le,bindFramebuffer:Ve,drawBuffers:We,useProgram:lt,setBlending:Mt,setMaterial:at,setFlipSided:et,setCullFace:K,setLineWidth:xt,setPolygonOffset:je,setScissorTest:ot,activeTexture:Gt,bindTexture:Bt,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:k,texImage2D:He,texImage3D:Ae,updateUBOMapping:Be,uniformBlockBinding:Pe,texStorage2D:Re,texStorage3D:ke,texSubImage2D:te,texSubImage3D:ue,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ue,scissor:Ce,viewport:$e,reset:ft}}function zU(r,e,t,i,s,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new rt,m=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,b){return y?new OffscreenCanvas(I,b):yh("canvas")}function M(I,b,k){let te=1;const ue=Bt(I);if((ue.width>k||ue.height>k)&&(te=k/Math.max(ue.width,ue.height)),te<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ae=Math.floor(te*ue.width),Ue=Math.floor(te*ue.height);_===void 0&&(_=T(ae,Ue));const Re=b?T(ae,Ue):_;return Re.width=ae,Re.height=Ue,Re.getContext("2d").drawImage(I,0,0,ae,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ae+"x"+Ue+")."),Re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),I;return I}function S(I){return I.generateMipmaps}function x(I){r.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(I,b,k,te,ue=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=b;if(b===r.RED&&(k===r.FLOAT&&(ae=r.R32F),k===r.HALF_FLOAT&&(ae=r.R16F),k===r.UNSIGNED_BYTE&&(ae=r.R8)),b===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(ae=r.R8UI),k===r.UNSIGNED_SHORT&&(ae=r.R16UI),k===r.UNSIGNED_INT&&(ae=r.R32UI),k===r.BYTE&&(ae=r.R8I),k===r.SHORT&&(ae=r.R16I),k===r.INT&&(ae=r.R32I)),b===r.RG&&(k===r.FLOAT&&(ae=r.RG32F),k===r.HALF_FLOAT&&(ae=r.RG16F),k===r.UNSIGNED_BYTE&&(ae=r.RG8)),b===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(ae=r.RG8UI),k===r.UNSIGNED_SHORT&&(ae=r.RG16UI),k===r.UNSIGNED_INT&&(ae=r.RG32UI),k===r.BYTE&&(ae=r.RG8I),k===r.SHORT&&(ae=r.RG16I),k===r.INT&&(ae=r.RG32I)),b===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),k===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),k===r.UNSIGNED_INT&&(ae=r.RGB32UI),k===r.BYTE&&(ae=r.RGB8I),k===r.SHORT&&(ae=r.RGB16I),k===r.INT&&(ae=r.RGB32I)),b===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),k===r.UNSIGNED_INT&&(ae=r.RGBA32UI),k===r.BYTE&&(ae=r.RGBA8I),k===r.SHORT&&(ae=r.RGBA16I),k===r.INT&&(ae=r.RGBA32I)),b===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(ae=r.R11F_G11F_B10F)),b===r.RGBA){const Ue=ue?vh:It.getTransfer(te);k===r.FLOAT&&(ae=r.RGBA32F),k===r.HALF_FLOAT&&(ae=r.RGBA16F),k===r.UNSIGNED_BYTE&&(ae=Ue===Kt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function A(I,b){let k;return I?b===null||b===Js||b===iu?k=r.DEPTH24_STENCIL8:b===ga?k=r.DEPTH32F_STENCIL8:b===nu&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Js||b===iu?k=r.DEPTH_COMPONENT24:b===ga?k=r.DEPTH_COMPONENT32F:b===nu&&(k=r.DEPTH_COMPONENT16),k}function O(I,b){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Hi&&I.minFilter!==vi?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function P(I){const b=I.target;b.removeEventListener("dispose",P),H(b),b.isVideoTexture&&m.delete(b)}function z(I){const b=I.target;b.removeEventListener("dispose",z),U(b)}function H(I){const b=i.get(I);if(b.__webglInit===void 0)return;const k=I.source,te=v.get(k);if(te){const ue=te[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&w(I),Object.keys(te).length===0&&v.delete(k)}i.remove(I)}function w(I){const b=i.get(I);r.deleteTexture(b.__webglTexture);const k=I.source,te=v.get(k);delete te[b.__cacheKey],u.memory.textures--}function U(I){const b=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let ue=0;ue<b.__webglFramebuffer[te].length;ue++)r.deleteFramebuffer(b.__webglFramebuffer[te][ue]);else r.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)r.deleteFramebuffer(b.__webglFramebuffer[te]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=I.textures;for(let te=0,ue=k.length;te<ue;te++){const ae=i.get(k[te]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),u.memory.textures--),i.remove(k[te])}i.remove(I)}let V=0;function Q(){V=0}function ne(){const I=V;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),V+=1,I}function re(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function de(I,b){const k=i.get(I);if(I.isVideoTexture&&ot(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){const te=I.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,I,b);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+b)}function B(I,b){const k=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){oe(k,I,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+b)}function Z(I,b){const k=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){oe(k,I,b);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+b)}function W(I,b){const k=i.get(I);if(I.version>0&&k.__version!==I.version){me(k,I,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+b)}const ye={[ug]:r.REPEAT,[ma]:r.CLAMP_TO_EDGE,[fg]:r.MIRRORED_REPEAT},be={[Hi]:r.NEAREST,[qw]:r.NEAREST_MIPMAP_NEAREST,[Uf]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[lm]:r.LINEAR_MIPMAP_NEAREST,[Gs]:r.LINEAR_MIPMAP_LINEAR},F={[Qw]:r.NEVER,[i2]:r.ALWAYS,[Jw]:r.LESS,[QM]:r.LEQUAL,[$w]:r.EQUAL,[n2]:r.GEQUAL,[e2]:r.GREATER,[t2]:r.NOTEQUAL};function ie(I,b){if(b.type===ga&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===vi||b.magFilter===lm||b.magFilter===Uf||b.magFilter===Gs||b.minFilter===vi||b.minFilter===lm||b.minFilter===Uf||b.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,ye[b.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,ye[b.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,ye[b.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,be[b.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,F[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Hi||b.minFilter!==Uf&&b.minFilter!==Gs||b.type===ga&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Me(I,b){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",P));const te=b.source;let ue=v.get(te);ue===void 0&&(ue={},v.set(te,ue));const ae=re(b);if(ae!==I.__cacheKey){ue[ae]===void 0&&(ue[ae]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,k=!0),ue[ae].usedTimes++;const Ue=ue[I.__cacheKey];Ue!==void 0&&(ue[I.__cacheKey].usedTimes--,Ue.usedTimes===0&&w(b)),I.__cacheKey=ae,I.__webglTexture=ue[ae].texture}return k}function Ee(I,b,k){return Math.floor(Math.floor(I/k)/b)}function De(I,b,k,te){const ae=I.updateRanges;if(ae.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,k,te,b.data);else{ae.sort((Ae,Ce)=>Ae.start-Ce.start);let Ue=0;for(let Ae=1;Ae<ae.length;Ae++){const Ce=ae[Ue],$e=ae[Ae],Be=Ce.start+Ce.count,Pe=Ee($e.start,b.width,4),ft=Ee(Ce.start,b.width,4);$e.start<=Be+1&&Pe===ft&&Ee($e.start+$e.count-1,b.width,4)===Pe?Ce.count=Math.max(Ce.count,$e.start+$e.count-Ce.start):(++Ue,ae[Ue]=$e)}ae.length=Ue+1;const Re=r.getParameter(r.UNPACK_ROW_LENGTH),ke=r.getParameter(r.UNPACK_SKIP_PIXELS),He=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ae=0,Ce=ae.length;Ae<Ce;Ae++){const $e=ae[Ae],Be=Math.floor($e.start/4),Pe=Math.ceil($e.count/4),ft=Be%b.width,q=Math.floor(Be/b.width),we=Pe,Ne=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),t.texSubImage2D(r.TEXTURE_2D,0,ft,q,we,Ne,k,te,b.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Re),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,He)}}function oe(I,b,k){let te=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=r.TEXTURE_3D);const ue=Me(I,b),ae=b.source;t.bindTexture(te,I.__webglTexture,r.TEXTURE0+k);const Ue=i.get(ae);if(ae.version!==Ue.__version||ue===!0){t.activeTexture(r.TEXTURE0+k);const Re=It.getPrimaries(It.workingColorSpace),ke=b.colorSpace===jr?null:It.getPrimaries(b.colorSpace),He=b.colorSpace===jr||Re===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Ae=M(b.image,!1,s.maxTextureSize);Ae=Gt(b,Ae);const Ce=l.convert(b.format,b.colorSpace),$e=l.convert(b.type);let Be=R(b.internalFormat,Ce,$e,b.colorSpace,b.isVideoTexture);ie(te,b);let Pe;const ft=b.mipmaps,q=b.isVideoTexture!==!0,we=Ue.__version===void 0||ue===!0,Ne=ae.dataReady,Xe=O(b,Ae);if(b.isDepthTexture)Be=A(b.format===ru,b.type),we&&(q?t.texStorage2D(r.TEXTURE_2D,1,Be,Ae.width,Ae.height):t.texImage2D(r.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,Ce,$e,null));else if(b.isDataTexture)if(ft.length>0){q&&we&&t.texStorage2D(r.TEXTURE_2D,Xe,Be,ft[0].width,ft[0].height);for(let Te=0,ve=ft.length;Te<ve;Te++)Pe=ft[Te],q?Ne&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ce,$e,Pe.data):t.texImage2D(r.TEXTURE_2D,Te,Be,Pe.width,Pe.height,0,Ce,$e,Pe.data);b.generateMipmaps=!1}else q?(we&&t.texStorage2D(r.TEXTURE_2D,Xe,Be,Ae.width,Ae.height),Ne&&De(b,Ae,Ce,$e)):t.texImage2D(r.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,Ce,$e,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Xe,Be,ft[0].width,ft[0].height,Ae.depth);for(let Te=0,ve=ft.length;Te<ve;Te++)if(Pe=ft[Te],b.format!==ta)if(Ce!==null)if(q){if(Ne)if(b.layerUpdates.size>0){const qe=US(Pe.width,Pe.height,b.format,b.type);for(const ut of b.layerUpdates){const Ot=Pe.data.subarray(ut*qe/Pe.data.BYTES_PER_ELEMENT,(ut+1)*qe/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,ut,Pe.width,Pe.height,1,Ce,Ot)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ae.depth,Ce,Pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,Be,Pe.width,Pe.height,Ae.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ne&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Ae.depth,Ce,$e,Pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Te,Be,Pe.width,Pe.height,Ae.depth,0,Ce,$e,Pe.data)}else{q&&we&&t.texStorage2D(r.TEXTURE_2D,Xe,Be,ft[0].width,ft[0].height);for(let Te=0,ve=ft.length;Te<ve;Te++)Pe=ft[Te],b.format!==ta?Ce!==null?q?Ne&&t.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(r.TEXTURE_2D,Te,Be,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ne&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,Ce,$e,Pe.data):t.texImage2D(r.TEXTURE_2D,Te,Be,Pe.width,Pe.height,0,Ce,$e,Pe.data)}else if(b.isDataArrayTexture)if(q){if(we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Xe,Be,Ae.width,Ae.height,Ae.depth),Ne)if(b.layerUpdates.size>0){const Te=US(Ae.width,Ae.height,b.format,b.type);for(const ve of b.layerUpdates){const qe=Ae.data.subarray(ve*Te/Ae.data.BYTES_PER_ELEMENT,(ve+1)*Te/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,Ce,$e,qe)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,$e,Ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,Ae.width,Ae.height,Ae.depth,0,Ce,$e,Ae.data);else if(b.isData3DTexture)q?(we&&t.texStorage3D(r.TEXTURE_3D,Xe,Be,Ae.width,Ae.height,Ae.depth),Ne&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,$e,Ae.data)):t.texImage3D(r.TEXTURE_3D,0,Be,Ae.width,Ae.height,Ae.depth,0,Ce,$e,Ae.data);else if(b.isFramebufferTexture){if(we)if(q)t.texStorage2D(r.TEXTURE_2D,Xe,Be,Ae.width,Ae.height);else{let Te=Ae.width,ve=Ae.height;for(let qe=0;qe<Xe;qe++)t.texImage2D(r.TEXTURE_2D,qe,Be,Te,ve,0,Ce,$e,null),Te>>=1,ve>>=1}}else if(ft.length>0){if(q&&we){const Te=Bt(ft[0]);t.texStorage2D(r.TEXTURE_2D,Xe,Be,Te.width,Te.height)}for(let Te=0,ve=ft.length;Te<ve;Te++)Pe=ft[Te],q?Ne&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ce,$e,Pe):t.texImage2D(r.TEXTURE_2D,Te,Be,Ce,$e,Pe);b.generateMipmaps=!1}else if(q){if(we){const Te=Bt(Ae);t.texStorage2D(r.TEXTURE_2D,Xe,Be,Te.width,Te.height)}Ne&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,$e,Ae)}else t.texImage2D(r.TEXTURE_2D,0,Be,Ce,$e,Ae);S(b)&&x(te),Ue.__version=ae.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function me(I,b,k){if(b.image.length!==6)return;const te=Me(I,b),ue=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+k);const ae=i.get(ue);if(ue.version!==ae.__version||te===!0){t.activeTexture(r.TEXTURE0+k);const Ue=It.getPrimaries(It.workingColorSpace),Re=b.colorSpace===jr?null:It.getPrimaries(b.colorSpace),ke=b.colorSpace===jr||Ue===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const He=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let ve=0;ve<6;ve++)!He&&!Ae?Ce[ve]=M(b.image[ve],!0,s.maxCubemapSize):Ce[ve]=Ae?b.image[ve].image:b.image[ve],Ce[ve]=Gt(b,Ce[ve]);const $e=Ce[0],Be=l.convert(b.format,b.colorSpace),Pe=l.convert(b.type),ft=R(b.internalFormat,Be,Pe,b.colorSpace),q=b.isVideoTexture!==!0,we=ae.__version===void 0||te===!0,Ne=ue.dataReady;let Xe=O(b,$e);ie(r.TEXTURE_CUBE_MAP,b);let Te;if(He){q&&we&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Xe,ft,$e.width,$e.height);for(let ve=0;ve<6;ve++){Te=Ce[ve].mipmaps;for(let qe=0;qe<Te.length;qe++){const ut=Te[qe];b.format!==ta?Be!==null?q?Ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,ut.width,ut.height,Be,ut.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,ft,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,0,0,ut.width,ut.height,Be,Pe,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe,ft,ut.width,ut.height,0,Be,Pe,ut.data)}}}else{if(Te=b.mipmaps,q&&we){Te.length>0&&Xe++;const ve=Bt(Ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Xe,ft,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){q?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ce[ve].width,Ce[ve].height,Be,Pe,Ce[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,Ce[ve].width,Ce[ve].height,0,Be,Pe,Ce[ve].data);for(let qe=0;qe<Te.length;qe++){const Ot=Te[qe].image[ve].image;q?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,Ot.width,Ot.height,Be,Pe,Ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,ft,Ot.width,Ot.height,0,Be,Pe,Ot.data)}}else{q?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Be,Pe,Ce[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,Be,Pe,Ce[ve]);for(let qe=0;qe<Te.length;qe++){const ut=Te[qe];q?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,0,0,Be,Pe,ut.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,qe+1,ft,Be,Pe,ut.image[ve])}}}S(b)&&x(r.TEXTURE_CUBE_MAP),ae.__version=ue.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Le(I,b,k,te,ue,ae){const Ue=l.convert(k.format,k.colorSpace),Re=l.convert(k.type),ke=R(k.internalFormat,Ue,Re,k.colorSpace),He=i.get(b),Ae=i.get(k);if(Ae.__renderTarget=b,!He.__hasExternalTextures){const Ce=Math.max(1,b.width>>ae),$e=Math.max(1,b.height>>ae);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,ae,ke,Ce,$e,b.depth,0,Ue,Re,null):t.texImage2D(ue,ae,ke,Ce,$e,0,Ue,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),je(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ue,Ae.__webglTexture,0,xt(b)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ue,Ae.__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(I,b,k){if(r.bindRenderbuffer(r.RENDERBUFFER,I),b.depthBuffer){const te=b.depthTexture,ue=te&&te.isDepthTexture?te.type:null,ae=A(b.stencilBuffer,ue),Ue=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=xt(b);je(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,ae,b.width,b.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ae,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ae,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,I)}else{const te=b.textures;for(let ue=0;ue<te.length;ue++){const ae=te[ue],Ue=l.convert(ae.format,ae.colorSpace),Re=l.convert(ae.type),ke=R(ae.internalFormat,Ue,Re,ae.colorSpace),He=xt(b);k&&je(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,ke,b.width,b.height):je(b)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,ke,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ke,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(b.depthTexture);te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de(b.depthTexture,0);const ue=te.__webglTexture,ae=xt(b);if(b.depthTexture.format===au)je(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ue,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ue,0);else if(b.depthTexture.format===ru)je(b)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ue,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function lt(I){const b=i.get(I),k=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const te=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){const ue=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",ue)};te.addEventListener("dispose",ue),b.__depthDisposeCallback=ue}b.__boundDepthTexture=te}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const te=I.texture.mipmaps;te&&te.length>0?We(b.__webglFramebuffer[0],I):We(b.__webglFramebuffer,I)}else if(k){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=r.createRenderbuffer(),Ve(b.__webglDepthbuffer[te],I,!1);else{const ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,ae)}}else{const te=I.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ve(b.__webglDepthbuffer,I,!1);else{const ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,ae)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(I,b,k){const te=i.get(I);b!==void 0&&Le(te.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&lt(I)}function G(I){const b=I.texture,k=i.get(I),te=i.get(b);I.addEventListener("dispose",z);const ue=I.textures,ae=I.isWebGLCubeRenderTarget===!0,Ue=ue.length>1;if(Ue||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=b.version,u.memory.textures++),ae){k.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[Re]=[];for(let ke=0;ke<b.mipmaps.length;ke++)k.__webglFramebuffer[Re][ke]=r.createFramebuffer()}else k.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)k.__webglFramebuffer[Re]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let Re=0,ke=ue.length;Re<ke;Re++){const He=i.get(ue[Re]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),u.memory.textures++)}if(I.samples>0&&je(I)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Re=0;Re<ue.length;Re++){const ke=ue[Re];k.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[Re]);const He=l.convert(ke.format,ke.colorSpace),Ae=l.convert(ke.type),Ce=R(ke.internalFormat,He,Ae,ke.colorSpace,I.isXRRenderTarget===!0),$e=xt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ce,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,k.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(k.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),ie(r.TEXTURE_CUBE_MAP,b);for(let Re=0;Re<6;Re++)if(b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Le(k.__webglFramebuffer[Re][ke],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ke);else Le(k.__webglFramebuffer[Re],I,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(b)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Re=0,ke=ue.length;Re<ke;Re++){const He=ue[Re],Ae=i.get(He);let Ce=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Ae.__webglTexture),ie(Ce,He),Le(k.__webglFramebuffer,I,He,r.COLOR_ATTACHMENT0+Re,Ce,0),S(He)&&x(Ce)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,te.__webglTexture),ie(Re,b),b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)Le(k.__webglFramebuffer[ke],I,b,r.COLOR_ATTACHMENT0,Re,ke);else Le(k.__webglFramebuffer,I,b,r.COLOR_ATTACHMENT0,Re,0);S(b)&&x(Re),t.unbindTexture()}I.depthBuffer&&lt(I)}function Mt(I){const b=I.textures;for(let k=0,te=b.length;k<te;k++){const ue=b[k];if(S(ue)){const ae=D(I),Ue=i.get(ue).__webglTexture;t.bindTexture(ae,Ue),x(ae),t.unbindTexture()}}}const at=[],et=[];function K(I){if(I.samples>0){if(je(I)===!1){const b=I.textures,k=I.width,te=I.height;let ue=r.COLOR_BUFFER_BIT;const ae=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=i.get(I),Re=b.length>1;if(Re)for(let He=0;He<b.length;He++)t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const ke=I.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let He=0;He<b.length;He++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[He]);const Ae=i.get(b[He]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,k,te,0,0,k,te,ue,r.NEAREST),d===!0&&(at.length=0,et.length=0,at.push(r.COLOR_ATTACHMENT0+He),I.depthBuffer&&I.resolveDepthBuffer===!1&&(at.push(ae),et.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,et)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let He=0;He<b.length;He++){t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[He]);const Ae=i.get(b[He]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,Ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const b=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function xt(I){return Math.min(s.maxSamples,I.samples)}function je(I){const b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ot(I){const b=u.render.frame;m.get(I)!==b&&(m.set(I,b),I.update())}function Gt(I,b){const k=I.colorSpace,te=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==Al&&k!==jr&&(It.getTransfer(k)===Kt?(te!==ta||ue!==Ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function Bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=ne,this.resetTextureUnits=Q,this.setTexture2D=de,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Ht,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=je}function IU(r,e){function t(i,s=jr){let l;const u=It.getTransfer(s);if(i===Ua)return r.UNSIGNED_BYTE;if(i===v_)return r.UNSIGNED_SHORT_4_4_4_4;if(i===x_)return r.UNSIGNED_SHORT_5_5_5_1;if(i===WM)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===qM)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===XM)return r.BYTE;if(i===jM)return r.SHORT;if(i===nu)return r.UNSIGNED_SHORT;if(i===__)return r.INT;if(i===Js)return r.UNSIGNED_INT;if(i===ga)return r.FLOAT;if(i===Ol)return r.HALF_FLOAT;if(i===YM)return r.ALPHA;if(i===ZM)return r.RGB;if(i===ta)return r.RGBA;if(i===au)return r.DEPTH_COMPONENT;if(i===ru)return r.DEPTH_STENCIL;if(i===y_)return r.RED;if(i===S_)return r.RED_INTEGER;if(i===KM)return r.RG;if(i===M_)return r.RG_INTEGER;if(i===b_)return r.RGBA_INTEGER;if(i===oh||i===lh||i===ch||i===uh)if(u===Kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===oh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ch)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===oh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ch)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hg||i===dg||i===pg||i===mg)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===hg)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dg)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pg)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mg)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gg||i===_g||i===vg)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===gg||i===_g)return u===Kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===vg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xg||i===yg||i===Sg||i===Mg||i===bg||i===Eg||i===Tg||i===Ag||i===wg||i===Rg||i===Cg||i===Dg||i===Ug||i===Ng)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===xg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Eg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ag)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dg)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ug)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ng)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lg||i===Og||i===Pg)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Lg)return u===Kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Og)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pg)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zg||i===Ig||i===Bg||i===Fg)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===zg)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Ig)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fg)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===iu?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const BU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new cb(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fr({vertexShader:BU,fragmentShader:FU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GU extends Pl{constructor(e,t){super();const i=this;let s=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,_=null,v=null,y=null,T=null;const M=typeof XRWebGLBinding<"u",S=new HU,x={},D=t.getContextAttributes();let R=null,A=null;const O=[],P=[],z=new rt;let H=null;const w=new zi;w.viewport=new Wt;const U=new zi;U.viewport=new Wt;const V=[w,U],Q=new oR;let ne=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let me=O[oe];return me===void 0&&(me=new Cm,O[oe]=me),me.getTargetRaySpace()},this.getControllerGrip=function(oe){let me=O[oe];return me===void 0&&(me=new Cm,O[oe]=me),me.getGripSpace()},this.getHand=function(oe){let me=O[oe];return me===void 0&&(me=new Cm,O[oe]=me),me.getHandSpace()};function de(oe){const me=P.indexOf(oe.inputSource);if(me===-1)return;const Le=O[me];Le!==void 0&&(Le.update(oe.inputSource,oe.frame,h||u),Le.dispatchEvent({type:oe.type,data:oe.inputSource}))}function B(){s.removeEventListener("select",de),s.removeEventListener("selectstart",de),s.removeEventListener("selectend",de),s.removeEventListener("squeeze",de),s.removeEventListener("squeezestart",de),s.removeEventListener("squeezeend",de),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let oe=0;oe<O.length;oe++){const me=P[oe];me!==null&&(P[oe]=null,O[oe].disconnect(me))}ne=null,re=null,S.reset();for(const oe in x)delete x[oe];e.setRenderTarget(R),y=null,v=null,_=null,s=null,A=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(H),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",de),s.addEventListener("selectstart",de),s.addEventListener("selectend",de),s.addEventListener("squeeze",de),s.addEventListener("squeezestart",de),s.addEventListener("squeezeend",de),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),D.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(z),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Ve=null,We=null;D.depth&&(We=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=D.stencil?ru:au,Ve=D.stencil?iu:Js);const lt={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(lt),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new rs(v.textureWidth,v.textureHeight,{format:ta,type:Ua,depthTexture:new lb(v.textureWidth,v.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Le={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new rs(y.framebufferWidth,y.framebufferHeight,{format:ta,type:Ua,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(f),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Z(oe){for(let me=0;me<oe.removed.length;me++){const Le=oe.removed[me],Ve=P.indexOf(Le);Ve>=0&&(P[Ve]=null,O[Ve].disconnect(Le))}for(let me=0;me<oe.added.length;me++){const Le=oe.added[me];let Ve=P.indexOf(Le);if(Ve===-1){for(let lt=0;lt<O.length;lt++)if(lt>=P.length){P.push(Le),Ve=lt;break}else if(P[lt]===null){P[lt]=Le,Ve=lt;break}if(Ve===-1)break}const We=O[Ve];We&&We.connect(Le)}}const W=new Y,ye=new Y;function be(oe,me,Le){W.setFromMatrixPosition(me.matrixWorld),ye.setFromMatrixPosition(Le.matrixWorld);const Ve=W.distanceTo(ye),We=me.projectionMatrix.elements,lt=Le.projectionMatrix.elements,Ht=We[14]/(We[10]-1),G=We[14]/(We[10]+1),Mt=(We[9]+1)/We[5],at=(We[9]-1)/We[5],et=(We[8]-1)/We[0],K=(lt[8]+1)/lt[0],xt=Ht*et,je=Ht*K,ot=Ve/(-et+K),Gt=ot*-et;if(me.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Gt),oe.translateZ(ot),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),We[10]===-1)oe.projectionMatrix.copy(me.projectionMatrix),oe.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Bt=Ht+ot,I=G+ot,b=xt-Gt,k=je+(Ve-Gt),te=Mt*G/I*Bt,ue=at*G/I*Bt;oe.projectionMatrix.makePerspective(b,k,te,ue,Bt,I),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function F(oe,me){me===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(me.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let me=oe.near,Le=oe.far;S.texture!==null&&(S.depthNear>0&&(me=S.depthNear),S.depthFar>0&&(Le=S.depthFar)),Q.near=U.near=w.near=me,Q.far=U.far=w.far=Le,(ne!==Q.near||re!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ne=Q.near,re=Q.far),Q.layers.mask=oe.layers.mask|6,w.layers.mask=Q.layers.mask&3,U.layers.mask=Q.layers.mask&5;const Ve=oe.parent,We=Q.cameras;F(Q,Ve);for(let lt=0;lt<We.length;lt++)F(We[lt],Ve);We.length===2?be(Q,w,U):Q.projectionMatrix.copy(w.projectionMatrix),ie(oe,Q,Ve)};function ie(oe,me,Le){Le===null?oe.matrix.copy(me.matrixWorld):(oe.matrix.copy(Le.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(me.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(me.projectionMatrix),oe.projectionMatrixInverse.copy(me.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=su*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(oe){d=oe,v!==null&&(v.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(oe){return x[oe]};let Me=null;function Ee(oe,me){if(m=me.getViewerPose(h||u),T=me,m!==null){const Le=m.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let Ve=!1;Le.length!==Q.cameras.length&&(Q.cameras.length=0,Ve=!0);for(let G=0;G<Le.length;G++){const Mt=Le[G];let at=null;if(y!==null)at=y.getViewport(Mt);else{const K=_.getViewSubImage(v,Mt);at=K.viewport,G===0&&(e.setRenderTargetTextures(A,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(A))}let et=V[G];et===void 0&&(et=new zi,et.layers.enable(G),et.viewport=new Wt,V[G]=et),et.matrix.fromArray(Mt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Mt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(at.x,at.y,at.width,at.height),G===0&&(Q.matrix.copy(et.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ve===!0&&Q.cameras.push(et)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){_=i.getBinding();const G=_.getDepthInformation(Le[0]);G&&G.isValid&&G.texture&&S.init(G,s.renderState)}if(We&&We.includes("camera-access")&&M){e.state.unbindTexture(),_=i.getBinding();for(let G=0;G<Le.length;G++){const Mt=Le[G].camera;if(Mt){let at=x[Mt];at||(at=new cb,x[Mt]=at);const et=_.getCameraImage(Mt);at.sourceTexture=et}}}}for(let Le=0;Le<O.length;Le++){const Ve=P[Le],We=O[Le];Ve!==null&&We!==void 0&&We.update(Ve,me,h||u)}Me&&Me(oe,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),T=null}const De=new db;De.setAnimationLoop(Ee),this.setAnimationLoop=function(oe){Me=oe},this.dispose=function(){}}}const Ls=new _a,VU=new tn;function kU(r,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,ab(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,D,R,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),_(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(l(S,x),T(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,D,R):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ui&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ui&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),R=D.envMap,A=D.envMapRotation;R&&(S.envMap.value=R,Ls.copy(A),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),S.envMapRotation.value.setFromMatrix4(VU.makeRotationFromEuler(Ls)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,D,R){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=R*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ui&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function XU(r,e,t,i){let s={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,R){const A=R.program;i.uniformBlockBinding(D,A)}function h(D,R){let A=s[D.id];A===void 0&&(T(D),A=m(D),s[D.id]=A,D.addEventListener("dispose",S));const O=R.program;i.updateUBOMapping(D,O);const P=e.render.frame;l[D.id]!==P&&(v(D),l[D.id]=P)}function m(D){const R=_();D.__bindingPointIndex=R;const A=r.createBuffer(),O=D.__size,P=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,O,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,A),A}function _(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const R=s[D.id],A=D.uniforms,O=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let P=0,z=A.length;P<z;P++){const H=Array.isArray(A[P])?A[P]:[A[P]];for(let w=0,U=H.length;w<U;w++){const V=H[w];if(y(V,P,w,O)===!0){const Q=V.__offset,ne=Array.isArray(V.value)?V.value:[V.value];let re=0;for(let de=0;de<ne.length;de++){const B=ne[de],Z=M(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,Q+re,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,re),re+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(D,R,A,O){const P=D.value,z=R+"_"+A;if(O[z]===void 0)return typeof P=="number"||typeof P=="boolean"?O[z]=P:O[z]=P.clone(),!0;{const H=O[z];if(typeof P=="number"||typeof P=="boolean"){if(H!==P)return O[z]=P,!0}else if(H.equals(P)===!1)return H.copy(P),!0}return!1}function T(D){const R=D.uniforms;let A=0;const O=16;for(let z=0,H=R.length;z<H;z++){const w=Array.isArray(R[z])?R[z]:[R[z]];for(let U=0,V=w.length;U<V;U++){const Q=w[U],ne=Array.isArray(Q.value)?Q.value:[Q.value];for(let re=0,de=ne.length;re<de;re++){const B=ne[re],Z=M(B),W=A%O,ye=W%Z.boundary,be=W+ye;A+=ye,be!==0&&O-be<Z.storage&&(A+=O-be),Q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=Z.storage}}}const P=A%O;return P>0&&(A+=O-P),D.__size=A,D.__cache={},this}function M(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function S(D){const R=D.target;R.removeEventListener("dispose",S);const A=u.indexOf(R.__bindingPointIndex);u.splice(A,1),r.deleteBuffer(s[R.id]),delete s[R.id],delete l[R.id]}function x(){for(const D in s)r.deleteBuffer(s[D]);u=[],s={},l={}}return{bind:d,update:h,dispose:x}}class vb{constructor(e={}){const{canvas:t=y2(),context:i=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const T=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const D=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let O=!1;this._outputColorSpace=Oi;let P=0,z=0,H=null,w=-1,U=null;const V=new Wt,Q=new Wt;let ne=null;const re=new mt(0);let de=0,B=t.width,Z=t.height,W=1,ye=null,be=null;const F=new Wt(0,0,B,Z),ie=new Wt(0,0,B,Z);let Me=!1;const Ee=new C_;let De=!1,oe=!1;const me=new tn,Le=new Y,Ve=new Wt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ht(){return H===null?W:1}let G=i;function Mt(N,J){return t.getContext(N,J)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${m_}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Te,!1),G===null){const J="webgl2";if(G=Mt(J,N),G===null)throw Mt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let at,et,K,xt,je,ot,Gt,Bt,I,b,k,te,ue,ae,Ue,Re,ke,He,Ae,Ce,$e,Be,Pe,ft;function q(){at=new t3(G),at.init(),Be=new IU(G,at),et=new YD(G,at,e,Be),K=new PU(G,at),et.reversedDepthBuffer&&v&&K.buffers.depth.setReversed(!0),xt=new a3(G),je=new MU,ot=new zU(G,at,K,je,et,Be,xt),Gt=new KD(A),Bt=new e3(A),I=new uR(G),Pe=new WD(G,I),b=new n3(G,I,xt,Pe),k=new s3(G,b,I,xt),Ae=new r3(G,et,ot),Re=new ZD(je),te=new SU(A,Gt,Bt,at,et,Pe,Re),ue=new kU(A,je),ae=new EU,Ue=new DU(at),He=new jD(A,Gt,Bt,K,k,y,d),ke=new LU(A,k,et),ft=new XU(G,xt,et,K),Ce=new qD(G,at,xt),$e=new i3(G,at,xt),xt.programs=te.programs,A.capabilities=et,A.extensions=at,A.properties=je,A.renderLists=ae,A.shadowMap=ke,A.state=K,A.info=xt}q();const we=new GU(A,G);this.xr=we,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const N=at.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=at.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(N){N!==void 0&&(W=N,this.setSize(B,Z,!1))},this.getSize=function(N){return N.set(B,Z)},this.setSize=function(N,J,fe=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=N,Z=J,t.width=Math.floor(N*W),t.height=Math.floor(J*W),fe===!0&&(t.style.width=N+"px",t.style.height=J+"px"),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(B*W,Z*W).floor()},this.setDrawingBufferSize=function(N,J,fe){B=N,Z=J,W=fe,t.width=Math.floor(N*fe),t.height=Math.floor(J*fe),this.setViewport(0,0,N,J)},this.getCurrentViewport=function(N){return N.copy(V)},this.getViewport=function(N){return N.copy(F)},this.setViewport=function(N,J,fe,he){N.isVector4?F.set(N.x,N.y,N.z,N.w):F.set(N,J,fe,he),K.viewport(V.copy(F).multiplyScalar(W).round())},this.getScissor=function(N){return N.copy(ie)},this.setScissor=function(N,J,fe,he){N.isVector4?ie.set(N.x,N.y,N.z,N.w):ie.set(N,J,fe,he),K.scissor(Q.copy(ie).multiplyScalar(W).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(N){K.setScissorTest(Me=N)},this.setOpaqueSort=function(N){ye=N},this.setTransparentSort=function(N){be=N},this.getClearColor=function(N){return N.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,fe=!0){let he=0;if(N){let ee=!1;if(H!==null){const Se=H.texture.format;ee=Se===b_||Se===M_||Se===S_}if(ee){const Se=H.texture.type,ze=Se===Ua||Se===Js||Se===nu||Se===iu||Se===v_||Se===x_,Ze=He.getClearColor(),Ge=He.getClearAlpha(),tt=Ze.r,ct=Ze.g,nt=Ze.b;ze?(T[0]=tt,T[1]=ct,T[2]=nt,T[3]=Ge,G.clearBufferuiv(G.COLOR,0,T)):(M[0]=tt,M[1]=ct,M[2]=nt,M[3]=Ge,G.clearBufferiv(G.COLOR,0,M))}else he|=G.COLOR_BUFFER_BIT}J&&(he|=G.DEPTH_BUFFER_BIT),fe&&(he|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),He.dispose(),ae.dispose(),Ue.dispose(),je.dispose(),Gt.dispose(),Bt.dispose(),k.dispose(),Pe.dispose(),ft.dispose(),te.dispose(),we.dispose(),we.removeEventListener("sessionstart",dt),we.removeEventListener("sessionend",sn),on.stop()};function Ne(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const N=xt.autoReset,J=ke.enabled,fe=ke.autoUpdate,he=ke.needsUpdate,ee=ke.type;q(),xt.autoReset=N,ke.enabled=J,ke.autoUpdate=fe,ke.needsUpdate=he,ke.type=ee}function Te(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ve(N){const J=N.target;J.removeEventListener("dispose",ve),qe(J)}function qe(N){ut(N),je.remove(N)}function ut(N){const J=je.get(N).programs;J!==void 0&&(J.forEach(function(fe){te.releaseProgram(fe)}),N.isShaderMaterial&&te.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,fe,he,ee,Se){J===null&&(J=We);const ze=ee.isMesh&&ee.matrixWorld.determinant()<0,Ze=pr(N,J,fe,he,ee);K.setMaterial(he,ze);let Ge=fe.index,tt=1;if(he.wireframe===!0){if(Ge=b.getWireframeAttribute(fe),Ge===void 0)return;tt=2}const ct=fe.drawRange,nt=fe.attributes.position;let yt=ct.start*tt,Vt=(ct.start+ct.count)*tt;Se!==null&&(yt=Math.max(yt,Se.start*tt),Vt=Math.min(Vt,(Se.start+Se.count)*tt)),Ge!==null?(yt=Math.max(yt,0),Vt=Math.min(Vt,Ge.count)):nt!=null&&(yt=Math.max(yt,0),Vt=Math.min(Vt,nt.count));const Qt=Vt-yt;if(Qt<0||Qt===1/0)return;Pe.setup(ee,he,Ze,fe,Ge);let kt,bt=Ce;if(Ge!==null&&(kt=I.get(Ge),bt=$e,bt.setIndex(kt)),ee.isMesh)he.wireframe===!0?(K.setLineWidth(he.wireframeLinewidth*Ht()),bt.setMode(G.LINES)):bt.setMode(G.TRIANGLES);else if(ee.isLine){let Ke=he.linewidth;Ke===void 0&&(Ke=1),K.setLineWidth(Ke*Ht()),ee.isLineSegments?bt.setMode(G.LINES):ee.isLineLoop?bt.setMode(G.LINE_LOOP):bt.setMode(G.LINE_STRIP)}else ee.isPoints?bt.setMode(G.POINTS):ee.isSprite&&bt.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)ou("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Ke=ee._multiDrawStarts,nn=ee._multiDrawCounts,Nt=ee._multiDrawCount,Fn=Ge?I.get(Ge).bytesPerElement:1,Pa=je.get(he).currentProgram.getUniforms();for(let On=0;On<Nt;On++)Pa.setValue(G,"_gl_DrawID",On),bt.render(Ke[On]/Fn,nn[On])}else if(ee.isInstancedMesh)bt.renderInstances(yt,Qt,ee.count);else if(fe.isInstancedBufferGeometry){const Ke=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,nn=Math.min(fe.instanceCount,Ke);bt.renderInstances(yt,Qt,nn)}else bt.render(yt,Qt)};function Ot(N,J,fe){N.transparent===!0&&N.side===lr&&N.forceSinglePass===!1?(N.side=ui,N.needsUpdate=!0,Ei(N,J,fe),N.side=as,N.needsUpdate=!0,Ei(N,J,fe),N.side=lr):Ei(N,J,fe)}this.compile=function(N,J,fe=null){fe===null&&(fe=N),x=Ue.get(fe),x.init(J),R.push(x),fe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(x.pushLight(ee),ee.castShadow&&x.pushShadow(ee))}),N!==fe&&N.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(x.pushLight(ee),ee.castShadow&&x.pushShadow(ee))}),x.setupLights();const he=new Set;return N.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Se=ee.material;if(Se)if(Array.isArray(Se))for(let ze=0;ze<Se.length;ze++){const Ze=Se[ze];Ot(Ze,fe,ee),he.add(Ze)}else Ot(Se,fe,ee),he.add(Se)}),x=R.pop(),he},this.compileAsync=function(N,J,fe=null){const he=this.compile(N,J,fe);return new Promise(ee=>{function Se(){if(he.forEach(function(ze){je.get(ze).currentProgram.isReady()&&he.delete(ze)}),he.size===0){ee(N);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Fe=null;function Qe(N){Fe&&Fe(N)}function dt(){on.stop()}function sn(){on.start()}const on=new db;on.setAnimationLoop(Qe),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(N){Fe=N,we.setAnimationLoop(N),N===null?on.stop():on.start()},we.addEventListener("sessionstart",dt),we.addEventListener("sessionend",sn),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(J),J=we.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,J,H),x=Ue.get(N,R.length),x.init(J),R.push(x),me.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Ee.setFromProjectionMatrix(me,wa,J.reversedDepth),oe=this.localClippingEnabled,De=Re.init(this.clippingPlanes,oe),S=ae.get(N,D.length),S.init(),D.push(S),we.enabled===!0&&we.isPresenting===!0){const Se=A.xr.getDepthSensingMesh();Se!==null&&ti(Se,J,-1/0,A.sortObjects)}ti(N,J,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ye,be),lt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,lt&&He.addToRenderList(S,N),this.info.render.frame++,De===!0&&Re.beginShadows();const fe=x.state.shadowsArray;ke.render(fe,N,J),De===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=S.opaque,ee=S.transmissive;if(x.setupLights(),J.isArrayCamera){const Se=J.cameras;if(ee.length>0)for(let ze=0,Ze=Se.length;ze<Ze;ze++){const Ge=Se[ze];so(he,ee,N,Ge)}lt&&He.render(N);for(let ze=0,Ze=Se.length;ze<Ze;ze++){const Ge=Se[ze];va(S,N,Ge,Ge.viewport)}}else ee.length>0&&so(he,ee,N,J),lt&&He.render(N),va(S,N,J);H!==null&&z===0&&(ot.updateMultisampleRenderTarget(H),ot.updateRenderTargetMipmap(H)),N.isScene===!0&&N.onAfterRender(A,N,J),Pe.resetDefaultState(),w=-1,U=null,R.pop(),R.length>0?(x=R[R.length-1],De===!0&&Re.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function ti(N,J,fe,he){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)fe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ee.intersectsSprite(N)){he&&Ve.setFromMatrixPosition(N.matrixWorld).applyMatrix4(me);const ze=k.update(N),Ze=N.material;Ze.visible&&S.push(N,ze,Ze,fe,Ve.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ee.intersectsObject(N))){const ze=k.update(N),Ze=N.material;if(he&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ve.copy(N.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ve.copy(ze.boundingSphere.center)),Ve.applyMatrix4(N.matrixWorld).applyMatrix4(me)),Array.isArray(Ze)){const Ge=ze.groups;for(let tt=0,ct=Ge.length;tt<ct;tt++){const nt=Ge[tt],yt=Ze[nt.materialIndex];yt&&yt.visible&&S.push(N,ze,yt,fe,Ve.z,nt)}}else Ze.visible&&S.push(N,ze,Ze,fe,Ve.z,null)}}const Se=N.children;for(let ze=0,Ze=Se.length;ze<Ze;ze++)ti(Se[ze],J,fe,he)}function va(N,J,fe,he){const ee=N.opaque,Se=N.transmissive,ze=N.transparent;x.setupLightsView(fe),De===!0&&Re.setGlobalState(A.clippingPlanes,fe),he&&K.viewport(V.copy(he)),ee.length>0&&cs(ee,J,fe),Se.length>0&&cs(Se,J,fe),ze.length>0&&cs(ze,J,fe),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function so(N,J,fe,he){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[he.id]===void 0&&(x.state.transmissionRenderTarget[he.id]=new rs(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Ol:Ua,minFilter:Gs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Se=x.state.transmissionRenderTarget[he.id],ze=he.viewport||V;Se.setSize(ze.z*A.transmissionResolutionScale,ze.w*A.transmissionResolutionScale);const Ze=A.getRenderTarget(),Ge=A.getActiveCubeFace(),tt=A.getActiveMipmapLevel();A.setRenderTarget(Se),A.getClearColor(re),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),lt&&He.render(fe);const ct=A.toneMapping;A.toneMapping=ts;const nt=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),x.setupLightsView(he),De===!0&&Re.setGlobalState(A.clippingPlanes,he),cs(N,fe,he),ot.updateMultisampleRenderTarget(Se),ot.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Vt=0,Qt=J.length;Vt<Qt;Vt++){const kt=J[Vt],bt=kt.object,Ke=kt.geometry,nn=kt.material,Nt=kt.group;if(nn.side===lr&&bt.layers.test(he.layers)){const Fn=nn.side;nn.side=ui,nn.needsUpdate=!0,Hl(bt,fe,he,Ke,nn,Nt),nn.side=Fn,nn.needsUpdate=!0,yt=!0}}yt===!0&&(ot.updateMultisampleRenderTarget(Se),ot.updateRenderTargetMipmap(Se))}A.setRenderTarget(Ze,Ge,tt),A.setClearColor(re,de),nt!==void 0&&(he.viewport=nt),A.toneMapping=ct}function cs(N,J,fe){const he=J.isScene===!0?J.overrideMaterial:null;for(let ee=0,Se=N.length;ee<Se;ee++){const ze=N[ee],Ze=ze.object,Ge=ze.geometry,tt=ze.group;let ct=ze.material;ct.allowOverride===!0&&he!==null&&(ct=he),Ze.layers.test(fe.layers)&&Hl(Ze,J,fe,Ge,ct,tt)}}function Hl(N,J,fe,he,ee,Se){N.onBeforeRender(A,J,fe,he,ee,Se),N.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ee.onBeforeRender(A,J,fe,he,N,Se),ee.transparent===!0&&ee.side===lr&&ee.forceSinglePass===!1?(ee.side=ui,ee.needsUpdate=!0,A.renderBufferDirect(fe,J,he,ee,N,Se),ee.side=as,ee.needsUpdate=!0,A.renderBufferDirect(fe,J,he,ee,N,Se),ee.side=lr):A.renderBufferDirect(fe,J,he,ee,N,Se),N.onAfterRender(A,J,fe,he,ee,Se)}function Ei(N,J,fe){J.isScene!==!0&&(J=We);const he=je.get(N),ee=x.state.lights,Se=x.state.shadowsArray,ze=ee.state.version,Ze=te.getParameters(N,ee.state,Se,J,fe),Ge=te.getProgramCacheKey(Ze);let tt=he.programs;he.environment=N.isMeshStandardMaterial?J.environment:null,he.fog=J.fog,he.envMap=(N.isMeshStandardMaterial?Bt:Gt).get(N.envMap||he.environment),he.envMapRotation=he.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",ve),tt=new Map,he.programs=tt);let ct=tt.get(Ge);if(ct!==void 0){if(he.currentProgram===ct&&he.lightsStateVersion===ze)return Bn(N,Ze),ct}else Ze.uniforms=te.getUniforms(N),N.onBeforeCompile(Ze,A),ct=te.acquireProgram(Ze,Ge),tt.set(Ge,ct),he.uniforms=Ze.uniforms;const nt=he.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(nt.clippingPlanes=Re.uniform),Bn(N,Ze),he.needsLights=Wh(N),he.lightsStateVersion=ze,he.needsLights&&(nt.ambientLightColor.value=ee.state.ambient,nt.lightProbe.value=ee.state.probe,nt.directionalLights.value=ee.state.directional,nt.directionalLightShadows.value=ee.state.directionalShadow,nt.spotLights.value=ee.state.spot,nt.spotLightShadows.value=ee.state.spotShadow,nt.rectAreaLights.value=ee.state.rectArea,nt.ltc_1.value=ee.state.rectAreaLTC1,nt.ltc_2.value=ee.state.rectAreaLTC2,nt.pointLights.value=ee.state.point,nt.pointLightShadows.value=ee.state.pointShadow,nt.hemisphereLights.value=ee.state.hemi,nt.directionalShadowMap.value=ee.state.directionalShadowMap,nt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,nt.spotShadowMap.value=ee.state.spotShadowMap,nt.spotLightMatrix.value=ee.state.spotLightMatrix,nt.spotLightMap.value=ee.state.spotLightMap,nt.pointShadowMap.value=ee.state.pointShadowMap,nt.pointShadowMatrix.value=ee.state.pointShadowMatrix),he.currentProgram=ct,he.uniformsList=null,ct}function Sn(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=fh.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function Bn(N,J){const fe=je.get(N);fe.outputColorSpace=J.outputColorSpace,fe.batching=J.batching,fe.batchingColor=J.batchingColor,fe.instancing=J.instancing,fe.instancingColor=J.instancingColor,fe.instancingMorph=J.instancingMorph,fe.skinning=J.skinning,fe.morphTargets=J.morphTargets,fe.morphNormals=J.morphNormals,fe.morphColors=J.morphColors,fe.morphTargetsCount=J.morphTargetsCount,fe.numClippingPlanes=J.numClippingPlanes,fe.numIntersection=J.numClipIntersection,fe.vertexAlphas=J.vertexAlphas,fe.vertexTangents=J.vertexTangents,fe.toneMapping=J.toneMapping}function pr(N,J,fe,he,ee){J.isScene!==!0&&(J=We),ot.resetTextureUnits();const Se=J.fog,ze=he.isMeshStandardMaterial?J.environment:null,Ze=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Al,Ge=(he.isMeshStandardMaterial?Bt:Gt).get(he.envMap||ze),tt=he.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ct=!!fe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),nt=!!fe.morphAttributes.position,yt=!!fe.morphAttributes.normal,Vt=!!fe.morphAttributes.color;let Qt=ts;he.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Qt=A.toneMapping);const kt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,bt=kt!==void 0?kt.length:0,Ke=je.get(he),nn=x.state.lights;if(De===!0&&(oe===!0||N!==U)){const Dn=N===U&&he.id===w;Re.setState(he,N,Dn)}let Nt=!1;he.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==nn.state.version||Ke.outputColorSpace!==Ze||ee.isBatchedMesh&&Ke.batching===!1||!ee.isBatchedMesh&&Ke.batching===!0||ee.isBatchedMesh&&Ke.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ke.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ke.instancing===!1||!ee.isInstancedMesh&&Ke.instancing===!0||ee.isSkinnedMesh&&Ke.skinning===!1||!ee.isSkinnedMesh&&Ke.skinning===!0||ee.isInstancedMesh&&Ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ke.instancingMorph===!1&&ee.morphTexture!==null||Ke.envMap!==Ge||he.fog===!0&&Ke.fog!==Se||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Re.numPlanes||Ke.numIntersection!==Re.numIntersection)||Ke.vertexAlphas!==tt||Ke.vertexTangents!==ct||Ke.morphTargets!==nt||Ke.morphNormals!==yt||Ke.morphColors!==Vt||Ke.toneMapping!==Qt||Ke.morphTargetsCount!==bt)&&(Nt=!0):(Nt=!0,Ke.__version=he.version);let Fn=Ke.currentProgram;Nt===!0&&(Fn=Ei(he,J,ee));let Pa=!1,On=!1,fs=!1;const wt=Fn.getUniforms(),Yn=Ke.uniforms;if(K.useProgram(Fn.program)&&(Pa=!0,On=!0,fs=!0),he.id!==w&&(w=he.id,On=!0),Pa||U!==N){K.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),wt.setValue(G,"projectionMatrix",N.projectionMatrix),wt.setValue(G,"viewMatrix",N.matrixWorldInverse);const mn=wt.map.cameraPosition;mn!==void 0&&mn.setValue(G,Le.setFromMatrixPosition(N.matrixWorld)),et.logarithmicDepthBuffer&&wt.setValue(G,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&wt.setValue(G,"isOrthographic",N.isOrthographicCamera===!0),U!==N&&(U=N,On=!0,fs=!0)}if(ee.isSkinnedMesh){wt.setOptional(G,ee,"bindMatrix"),wt.setOptional(G,ee,"bindMatrixInverse");const Dn=ee.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),wt.setValue(G,"boneTexture",Dn.boneTexture,ot))}ee.isBatchedMesh&&(wt.setOptional(G,ee,"batchingTexture"),wt.setValue(G,"batchingTexture",ee._matricesTexture,ot),wt.setOptional(G,ee,"batchingIdTexture"),wt.setValue(G,"batchingIdTexture",ee._indirectTexture,ot),wt.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&wt.setValue(G,"batchingColorTexture",ee._colorsTexture,ot));const ni=fe.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Ae.update(ee,fe,Fn),(On||Ke.receiveShadow!==ee.receiveShadow)&&(Ke.receiveShadow=ee.receiveShadow,wt.setValue(G,"receiveShadow",ee.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Yn.envMap.value=Ge,Yn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&J.environment!==null&&(Yn.envMapIntensity.value=J.environmentIntensity),On&&(wt.setValue(G,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&Gl(Yn,fs),Se&&he.fog===!0&&ue.refreshFogUniforms(Yn,Se),ue.refreshMaterialUniforms(Yn,he,W,Z,x.state.transmissionRenderTarget[N.id]),fh.upload(G,Sn(Ke),Yn,ot)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(fh.upload(G,Sn(Ke),Yn,ot),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&wt.setValue(G,"center",ee.center),wt.setValue(G,"modelViewMatrix",ee.modelViewMatrix),wt.setValue(G,"normalMatrix",ee.normalMatrix),wt.setValue(G,"modelMatrix",ee.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Dn=he.uniformsGroups;for(let mn=0,oo=Dn.length;mn<oo;mn++){const xa=Dn[mn];ft.update(xa,Fn),ft.bind(xa,Fn)}}return Fn}function Gl(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function Wh(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(N,J,fe){const he=je.get(N);he.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),je.get(N.texture).__webglTexture=J,je.get(N.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:fe,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){const fe=je.get(N);fe.__webglFramebuffer=J,fe.__useDefaultFramebuffer=J===void 0};const qh=G.createFramebuffer();this.setRenderTarget=function(N,J=0,fe=0){H=N,P=J,z=fe;let he=!0,ee=null,Se=!1,ze=!1;if(N){const Ge=je.get(N);if(Ge.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(G.FRAMEBUFFER,null),he=!1;else if(Ge.__webglFramebuffer===void 0)ot.setupRenderTarget(N);else if(Ge.__hasExternalTextures)ot.rebindTextures(N,je.get(N.texture).__webglTexture,je.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const nt=N.depthTexture;if(Ge.__boundDepthTexture!==nt){if(nt!==null&&je.has(nt)&&(N.width!==nt.image.width||N.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(N)}}const tt=N.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(ze=!0);const ct=je.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ct[J])?ee=ct[J][fe]:ee=ct[J],Se=!0):N.samples>0&&ot.useMultisampledRTT(N)===!1?ee=je.get(N).__webglMultisampledFramebuffer:Array.isArray(ct)?ee=ct[fe]:ee=ct,V.copy(N.viewport),Q.copy(N.scissor),ne=N.scissorTest}else V.copy(F).multiplyScalar(W).floor(),Q.copy(ie).multiplyScalar(W).floor(),ne=Me;if(fe!==0&&(ee=qh),K.bindFramebuffer(G.FRAMEBUFFER,ee)&&he&&K.drawBuffers(N,ee),K.viewport(V),K.scissor(Q),K.setScissorTest(ne),Se){const Ge=je.get(N.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ge.__webglTexture,fe)}else if(ze){const Ge=J;for(let tt=0;tt<N.textures.length;tt++){const ct=je.get(N.textures[tt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+tt,ct.__webglTexture,fe,Ge)}}else if(N!==null&&fe!==0){const Ge=je.get(N.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ge.__webglTexture,fe)}w=-1},this.readRenderTargetPixels=function(N,J,fe,he,ee,Se,ze,Ze=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=je.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){K.bindFramebuffer(G.FRAMEBUFFER,Ge);try{const tt=N.textures[Ze],ct=tt.format,nt=tt.type;if(!et.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-he&&fe>=0&&fe<=N.height-ee&&(N.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ze),G.readPixels(J,fe,he,ee,Be.convert(ct),Be.convert(nt),Se))}finally{const tt=H!==null?je.get(H).__webglFramebuffer:null;K.bindFramebuffer(G.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(N,J,fe,he,ee,Se,ze,Ze=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=je.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge)if(J>=0&&J<=N.width-he&&fe>=0&&fe<=N.height-ee){K.bindFramebuffer(G.FRAMEBUFFER,Ge);const tt=N.textures[Ze],ct=tt.format,nt=tt.type;if(!et.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,yt),G.bufferData(G.PIXEL_PACK_BUFFER,Se.byteLength,G.STREAM_READ),N.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ze),G.readPixels(J,fe,he,ee,Be.convert(ct),Be.convert(nt),0);const Vt=H!==null?je.get(H).__webglFramebuffer:null;K.bindFramebuffer(G.FRAMEBUFFER,Vt);const Qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await S2(G,Qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,yt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Se),G.deleteBuffer(yt),G.deleteSync(Qt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,fe=0){const he=Math.pow(2,-fe),ee=Math.floor(N.image.width*he),Se=Math.floor(N.image.height*he),ze=J!==null?J.x:0,Ze=J!==null?J.y:0;ot.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,fe,0,0,ze,Ze,ee,Se),K.unbindTexture()};const yu=G.createFramebuffer(),us=G.createFramebuffer();this.copyTextureToTexture=function(N,J,fe=null,he=null,ee=0,Se=null){Se===null&&(ee!==0?(ou("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=ee,ee=0):Se=0);let ze,Ze,Ge,tt,ct,nt,yt,Vt,Qt;const kt=N.isCompressedTexture?N.mipmaps[Se]:N.image;if(fe!==null)ze=fe.max.x-fe.min.x,Ze=fe.max.y-fe.min.y,Ge=fe.isBox3?fe.max.z-fe.min.z:1,tt=fe.min.x,ct=fe.min.y,nt=fe.isBox3?fe.min.z:0;else{const ni=Math.pow(2,-ee);ze=Math.floor(kt.width*ni),Ze=Math.floor(kt.height*ni),N.isDataArrayTexture?Ge=kt.depth:N.isData3DTexture?Ge=Math.floor(kt.depth*ni):Ge=1,tt=0,ct=0,nt=0}he!==null?(yt=he.x,Vt=he.y,Qt=he.z):(yt=0,Vt=0,Qt=0);const bt=Be.convert(J.format),Ke=Be.convert(J.type);let nn;J.isData3DTexture?(ot.setTexture3D(J,0),nn=G.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ot.setTexture2DArray(J,0),nn=G.TEXTURE_2D_ARRAY):(ot.setTexture2D(J,0),nn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment);const Nt=G.getParameter(G.UNPACK_ROW_LENGTH),Fn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Pa=G.getParameter(G.UNPACK_SKIP_PIXELS),On=G.getParameter(G.UNPACK_SKIP_ROWS),fs=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,kt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,kt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,tt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ct),G.pixelStorei(G.UNPACK_SKIP_IMAGES,nt);const wt=N.isDataArrayTexture||N.isData3DTexture,Yn=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const ni=je.get(N),Dn=je.get(J),mn=je.get(ni.__renderTarget),oo=je.get(Dn.__renderTarget);K.bindFramebuffer(G.READ_FRAMEBUFFER,mn.__webglFramebuffer),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,oo.__webglFramebuffer);for(let xa=0;xa<Ge;xa++)wt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(N).__webglTexture,ee,nt+xa),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(J).__webglTexture,Se,Qt+xa)),G.blitFramebuffer(tt,ct,ze,Ze,yt,Vt,ze,Ze,G.DEPTH_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||N.isRenderTargetTexture||je.has(N)){const ni=je.get(N),Dn=je.get(J);K.bindFramebuffer(G.READ_FRAMEBUFFER,yu),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,us);for(let mn=0;mn<Ge;mn++)wt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ni.__webglTexture,ee,nt+mn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ni.__webglTexture,ee),Yn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dn.__webglTexture,Se,Qt+mn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dn.__webglTexture,Se),ee!==0?G.blitFramebuffer(tt,ct,ze,Ze,yt,Vt,ze,Ze,G.COLOR_BUFFER_BIT,G.NEAREST):Yn?G.copyTexSubImage3D(nn,Se,yt,Vt,Qt+mn,tt,ct,ze,Ze):G.copyTexSubImage2D(nn,Se,yt,Vt,tt,ct,ze,Ze);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Yn?N.isDataTexture||N.isData3DTexture?G.texSubImage3D(nn,Se,yt,Vt,Qt,ze,Ze,Ge,bt,Ke,kt.data):J.isCompressedArrayTexture?G.compressedTexSubImage3D(nn,Se,yt,Vt,Qt,ze,Ze,Ge,bt,kt.data):G.texSubImage3D(nn,Se,yt,Vt,Qt,ze,Ze,Ge,bt,Ke,kt):N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Se,yt,Vt,ze,Ze,bt,Ke,kt.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Se,yt,Vt,kt.width,kt.height,bt,kt.data):G.texSubImage2D(G.TEXTURE_2D,Se,yt,Vt,ze,Ze,bt,Ke,kt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Nt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Fn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Pa),G.pixelStorei(G.UNPACK_SKIP_ROWS,On),G.pixelStorei(G.UNPACK_SKIP_IMAGES,fs),Se===0&&J.generateMipmaps&&G.generateMipmap(nn),K.unbindTexture()},this.initRenderTarget=function(N){je.get(N).__webglFramebuffer===void 0&&ot.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ot.setTextureCube(N,0):N.isData3DTexture?ot.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ot.setTexture2DArray(N,0):ot.setTexture2D(N,0),K.unbindTexture()},this.resetState=function(){P=0,z=0,H=null,K.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const jU=["#5227FF","#FF9FFC","#B19EEF"];function WU({mouseForce:r=20,cursorSize:e=100,isViscous:t=!1,viscous:i=30,iterationsViscous:s=32,iterationsPoisson:l=32,dt:u=.014,BFECC:f=!0,resolution:d=.5,isBounce:h=!1,colors:m=jU,style:_={},className:v="",autoDemo:y=!0,autoSpeed:T=.5,autoIntensity:M=2.2,takeoverDuration:S=.25,autoResumeDelay:x=1e3,autoRampDuration:D=.6}){const R=Oe.useRef(null),A=Oe.useRef(null),O=Oe.useRef(null),P=Oe.useRef(null),z=Oe.useRef(null),H=Oe.useRef(!0),w=Oe.useRef(null);return Oe.useEffect(()=>{if(!R.current)return;function U(I){let b;Array.isArray(I)&&I.length>0?b=I.length===1?[I[0],I[0]]:I:b=["#ffffff","#ffffff"];const k=b.length,te=new Uint8Array(k*4);for(let ae=0;ae<k;ae++){const Ue=new mt(b[ae]);te[ae*4+0]=Math.round(Ue.r*255),te[ae*4+1]=Math.round(Ue.g*255),te[ae*4+2]=Math.round(Ue.b*255),te[ae*4+3]=255}const ue=new sb(te,k,1,ta);return ue.magFilter=vi,ue.minFilter=vi,ue.wrapS=ma,ue.wrapT=ma,ue.generateMipmaps=!1,ue.needsUpdate=!0,ue}const V=U(m),Q=new Wt(0,0,0,0);class ne{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(b){this.container=b,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new vb({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new mt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height);const k=this.renderer.domElement;k.style.width="100%",k.style.height="100%",k.style.display="block",this.clock=new hb,this.clock.start()}resize(){if(!this.container)return;const b=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(b.width)),this.height=Math.max(1,Math.floor(b.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const re=new ne;class de{constructor(){this.mouseMoved=!1,this.coords=new rt,this.coords_old=new rt,this.diff=new rt,this.timer=null,this.container=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new rt,this.takeoverTo=new rt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this)}init(b){this.container=b,b.addEventListener("mousemove",this._onMouseMove),b.addEventListener("touchstart",this._onTouchStart,{passive:!0}),b.addEventListener("touchmove",this._onTouchMove,{passive:!0}),b.addEventListener("mouseenter",this._onMouseEnter),b.addEventListener("mouseleave",this._onMouseLeave),b.addEventListener("touchend",this._onTouchEnd)}dispose(){const b=this.container;b&&(b.removeEventListener("mousemove",this._onMouseMove),b.removeEventListener("touchstart",this._onTouchStart),b.removeEventListener("touchmove",this._onTouchMove),b.removeEventListener("mouseenter",this._onMouseEnter),b.removeEventListener("mouseleave",this._onMouseLeave),b.removeEventListener("touchend",this._onTouchEnd))}setCoords(b,k){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const te=this.container.getBoundingClientRect(),ue=(b-te.left)/te.width,ae=(k-te.top)/te.height;this.coords.set(ue*2-1,-(ae*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(b,k){this.coords.set(b,k),this.mouseMoved=!0}onDocumentMouseMove(b){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const k=this.container.getBoundingClientRect(),te=(b.clientX-k.left)/k.width,ue=(b.clientY-k.top)/k.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(te*2-1,-(ue*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(b.clientX,b.clientY),this.hasUserControl=!0}onDocumentTouchStart(b){if(b.touches.length===1){const k=b.touches[0];this.onInteract&&this.onInteract(),this.setCoords(k.pageX,k.pageY),this.hasUserControl=!0}}onDocumentTouchMove(b){if(b.touches.length===1){const k=b.touches[0];this.onInteract&&this.onInteract(),this.setCoords(k.pageX,k.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const b=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(b>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const k=b*b*(3-2*b);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,k)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const B=new de;class Z{constructor(b,k,te){this.active=!1,this.current=new rt(0,0),this.target=new rt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new rt,this.mouse=b,this.manager=k,this.enabled=te.enabled,this.speed=te.speed,this.resumeDelay=te.resumeDelay||3e3,this.rampDurationMs=(te.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const b=Math.random;this.target.set((b()*2-1)*(1-this.margin),(b()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const b=performance.now();if(b-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=b,this.activationTime=b),!this.active)return;this.mouse.isAutoActive=!0;let te=(b-this.lastTime)/1e3;this.lastTime=b,te>.2&&(te=.016);const ue=this._tmpDir.subVectors(this.target,this.current),ae=ue.length();if(ae<.01){this.pickNewTarget();return}ue.normalize();let Ue=1;if(this.rampDurationMs>0){const He=Math.min(1,(b-this.activationTime)/this.rampDurationMs);Ue=He*He*(3-2*He)}const Re=this.speed*te*Ue,ke=Math.min(Re,ae);this.current.addScaledVector(ue,ke),this.mouse.setNormalized(this.current.x,this.current.y)}}const W=`
	attribute vec3 position;
	uniform vec2 px;
	uniform vec2 boundarySpace;
	varying vec2 uv;
	precision highp float;
	void main(){
	vec3 pos = position;
	vec2 scale = 1.0 - boundarySpace * 2.0;
	pos.xy = pos.xy * scale;
	uv = vec2(0.5)+(pos.xy)*0.5;
	gl_Position = vec4(pos, 1.0);
}
`,ye=`
	attribute vec3 position;
	uniform vec2 px;
	precision highp float;
	varying vec2 uv;
	void main(){
	vec3 pos = position;
	uv = 0.5 + pos.xy * 0.5;
	vec2 n = sign(pos.xy);
	pos.xy = abs(pos.xy) - px * 1.0;
	pos.xy *= n;
	gl_Position = vec4(pos, 1.0);
}
`,be=`
		precision highp float;
		attribute vec3 position;
		attribute vec2 uv;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 pos = position.xy * scale * 2.0 * px + center;
		vUv = uv;
		gl_Position = vec4(pos, 0.0, 1.0);
}
`,F=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform bool isBFECC;
		uniform vec2 fboSize;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
		if(isBFECC == false){
				vec2 vel = texture2D(velocity, uv).xy;
				vec2 uv2 = uv - vel * dt * ratio;
				vec2 newVel = texture2D(velocity, uv2).xy;
				gl_FragColor = vec4(newVel, 0.0, 0.0);
		} else {
				vec2 spot_new = uv;
				vec2 vel_old = texture2D(velocity, uv).xy;
				vec2 spot_old = spot_new - vel_old * dt * ratio;
				vec2 vel_new1 = texture2D(velocity, spot_old).xy;
				vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
				vec2 error = spot_new2 - spot_new;
				vec2 spot_new3 = spot_new - error / 2.0;
				vec2 vel_2 = texture2D(velocity, spot_new3).xy;
				vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
				vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
				gl_FragColor = vec4(newVel2, 0.0, 0.0);
		}
}
`,ie=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D palette;
		uniform vec4 bgColor;
		varying vec2 uv;
		void main(){
		vec2 vel = texture2D(velocity, uv).xy;
		float lenv = clamp(length(vel), 0.0, 1.0);
		vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
		vec3 outRGB = mix(bgColor.rgb, c, lenv);
		float outA = mix(bgColor.a, 1.0, lenv);
		gl_FragColor = vec4(outRGB, outA);
}
`,Me=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
		float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
		float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
		float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
		float divergence = (x1 - x0 + y1 - y0) / 2.0;
		gl_FragColor = vec4(divergence / dt);
}
`,Ee=`
		precision highp float;
		uniform vec2 force;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 circle = (vUv - 0.5) * 2.0;
		float d = 1.0 - min(length(circle), 1.0);
		d *= d;
		gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,De=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D divergence;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
		float div = texture2D(divergence, uv).r;
		float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
		gl_FragColor = vec4(newP);
}
`,oe=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D velocity;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		float step = 1.0;
		float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
		vec2 v = texture2D(velocity, uv).xy;
		vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
		v = v - gradP * dt;
		gl_FragColor = vec4(v, 0.0, 1.0);
}
`,me=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D velocity_new;
		uniform float v;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		vec2 old = texture2D(velocity, uv).xy;
		vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
		vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
		vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
		vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
		vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
		newv /= 4.0 * (1.0 + v * dt);
		gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Le{constructor(b){var k;this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null,this.props=b||{},this.uniforms=(k=this.props.material)==null?void 0:k.uniforms}init(...b){this.scene=new Mh,this.camera=new Sh,this.uniforms&&(this.material=new $f(this.props.material),this.geometry=new qs(2,2),this.plane=new yn(this.geometry,this.material),this.scene.add(this.plane))}update(...b){!re.renderer||!this.scene||!this.camera||(re.renderer.setRenderTarget(this.props.output||null),re.renderer.render(this.scene,this.camera),re.renderer.setRenderTarget(null))}}class Ve extends Le{constructor(b){super({material:{vertexShader:W,fragmentShader:F,uniforms:{boundarySpace:{value:b.cellScale},px:{value:b.cellScale},fboSize:{value:b.fboSize},velocity:{value:b.src.texture},dt:{value:b.dt},isBFECC:{value:!0}}},output:b.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const b=new Oa,k=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);b.setAttribute("position",new ra(k,3));const te=new $f({vertexShader:ye,fragmentShader:F,uniforms:this.uniforms});this.line=new J2(b,te),this.scene.add(this.line)}update(...b){const{dt:k,isBounce:te,BFECC:ue}=b[0]||{};this.uniforms&&(typeof k=="number"&&(this.uniforms.dt.value=k),typeof te=="boolean"&&(this.line.visible=te),typeof ue=="boolean"&&(this.uniforms.isBFECC.value=ue),super.update())}}class We extends Le{constructor(b){super({output:b.dst}),this.init(b)}init(b){super.init();const k=new qs(1,1),te=new $f({vertexShader:be,fragmentShader:Ee,blending:Jm,depthWrite:!1,uniforms:{px:{value:b.cellScale},force:{value:new rt(0,0)},center:{value:new rt(0,0)},scale:{value:new rt(b.cursor_size,b.cursor_size)}}});this.mouse=new yn(k,te),this.scene.add(this.mouse)}update(...b){const k=b[0]||{},te=B.diff.x/2*(k.mouse_force||0),ue=B.diff.y/2*(k.mouse_force||0),ae=k.cellScale||{x:1,y:1},Ue=k.cursor_size||0,Re=Ue*ae.x,ke=Ue*ae.y,He=Math.min(Math.max(B.coords.x,-1+Re+ae.x*2),1-Re-ae.x*2),Ae=Math.min(Math.max(B.coords.y,-1+ke+ae.y*2),1-ke-ae.y*2),Ce=this.mouse.material.uniforms;Ce.force.value.set(te,ue),Ce.center.value.set(He,Ae),Ce.scale.value.set(Ue,Ue),super.update()}}class lt extends Le{constructor(b){super({material:{vertexShader:W,fragmentShader:me,uniforms:{boundarySpace:{value:b.boundarySpace},velocity:{value:b.src.texture},velocity_new:{value:b.dst_.texture},v:{value:b.viscous},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst,output0:b.dst_,output1:b.dst}),this.init()}update(...b){const{viscous:k,iterations:te,dt:ue}=b[0]||{};if(!this.uniforms)return;let ae,Ue;typeof k=="number"&&(this.uniforms.v.value=k);const Re=te??0;for(let ke=0;ke<Re;ke++)ke%2===0?(ae=this.props.output0,Ue=this.props.output1):(ae=this.props.output1,Ue=this.props.output0),this.uniforms.velocity_new.value=ae.texture,this.props.output=Ue,typeof ue=="number"&&(this.uniforms.dt.value=ue),super.update();return Ue}}class Ht extends Le{constructor(b){super({material:{vertexShader:W,fragmentShader:Me,uniforms:{boundarySpace:{value:b.boundarySpace},velocity:{value:b.src.texture},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst}),this.init()}update(...b){const{vel:k}=b[0]||{};this.uniforms&&k&&(this.uniforms.velocity.value=k.texture),super.update()}}class G extends Le{constructor(b){super({material:{vertexShader:W,fragmentShader:De,uniforms:{boundarySpace:{value:b.boundarySpace},pressure:{value:b.dst_.texture},divergence:{value:b.src.texture},px:{value:b.cellScale}}},output:b.dst,output0:b.dst_,output1:b.dst}),this.init()}update(...b){const{iterations:k}=b[0]||{};let te,ue;const ae=k??0;for(let Ue=0;Ue<ae;Ue++)Ue%2===0?(te=this.props.output0,ue=this.props.output1):(te=this.props.output1,ue=this.props.output0),this.uniforms&&(this.uniforms.pressure.value=te.texture),this.props.output=ue,super.update();return ue}}class Mt extends Le{constructor(b){super({material:{vertexShader:W,fragmentShader:oe,uniforms:{boundarySpace:{value:b.boundarySpace},pressure:{value:b.src_p.texture},velocity:{value:b.src_v.texture},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst}),this.init()}update(...b){const{vel:k,pressure:te}=b[0]||{};this.uniforms&&k&&te&&(this.uniforms.velocity.value=k.texture,this.uniforms.pressure.value=te.texture),super.update()}}class at{constructor(b){this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new rt,this.cellScale=new rt,this.boundarySpace=new rt,this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...b},this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ol:ga}createAllFBO(){const k={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:vi,magFilter:vi,wrapS:ma,wrapT:ma};for(const te in this.fbos)this.fbos[te]=new rs(this.fboSize.x,this.fboSize.y,k)}createShaderPass(){this.advection=new Ve({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new We({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new lt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Ht({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new G({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Mt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const b=Math.max(1,Math.round(this.options.resolution*re.width)),k=Math.max(1,Math.round(this.options.resolution*re.height));this.cellScale.set(1/b,1/k),this.fboSize.set(b,k)}resize(){this.calcSize();for(const b in this.fbos)this.fbos[b].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let b=this.fbos.vel_1;this.options.isViscous&&(b=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:b});const k=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:b,pressure:k})}}class et{constructor(){this.simulation=new at,this.scene=new Mh,this.camera=new Sh,this.output=new yn(new qs(2,2),new $f({vertexShader:W,fragmentShader:ie,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new rt},palette:{value:V},bgColor:{value:Q}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){re.renderer&&(re.renderer.setRenderTarget(null),re.renderer.render(this.scene,this.camera))}update(){this.simulation.update(),this.render()}}class K{constructor(b){this.lastUserInteraction=performance.now(),this.running=!1,this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),this.props=b,re.init(b.$wrapper),B.init(b.$wrapper),B.autoIntensity=b.autoIntensity,B.takeoverDuration=b.takeoverDuration,B.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Z(B,this,{enabled:b.autoDemo,speed:b.autoSpeed,resumeDelay:b.autoResumeDelay,rampDuration:b.autoRampDuration}),this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():H.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){re.renderer&&(this.props.$wrapper.prepend(re.renderer.domElement),this.output=new et)}resize(){re.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),B.update(),re.update(),this.output.update()}loop(){this.running&&(this.render(),P.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,P.current&&(cancelAnimationFrame(P.current),P.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),B.dispose(),re.renderer){const b=re.renderer.domElement;b&&b.parentNode&&b.parentNode.removeChild(b),re.renderer.dispose()}}catch{}}}const xt=R.current;xt.style.position=xt.style.position||"relative",xt.style.overflow=xt.style.overflow||"hidden";const je=new K({$wrapper:xt,autoDemo:y,autoSpeed:T,autoIntensity:M,takeoverDuration:S,autoResumeDelay:x,autoRampDuration:D});A.current=je,(()=>{var k;if(!A.current)return;const I=(k=A.current.output)==null?void 0:k.simulation;if(!I)return;const b=I.options.resolution;Object.assign(I.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:s,iterations_poisson:l,dt:u,BFECC:f,resolution:d,isBounce:h}),d!==b&&I.resize()})(),je.start();const Gt=new IntersectionObserver(I=>{const b=I[0],k=b.isIntersecting&&b.intersectionRatio>0;H.current=k,A.current&&(k&&!document.hidden?A.current.start():A.current.pause())},{threshold:[0,.01,.1]});Gt.observe(xt),z.current=Gt;const Bt=new ResizeObserver(()=>{A.current&&(w.current&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{A.current&&A.current.resize()}))});return Bt.observe(xt),O.current=Bt,()=>{if(P.current&&cancelAnimationFrame(P.current),O.current)try{O.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}A.current&&A.current.dispose(),A.current=null}},[f,e,u,h,t,l,s,r,d,i,m,y,T,M,S,x,D]),Oe.useEffect(()=>{var ne;const U=A.current;if(!U)return;const V=(ne=U.output)==null?void 0:ne.simulation;if(!V)return;const Q=V.options.resolution;Object.assign(V.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:s,iterations_poisson:l,dt:u,BFECC:f,resolution:d,isBounce:h}),U.autoDriver&&(U.autoDriver.enabled=y,U.autoDriver.speed=T,U.autoDriver.resumeDelay=x,U.autoDriver.rampDurationMs=D*1e3,U.autoDriver.mouse&&(U.autoDriver.mouse.autoIntensity=M,U.autoDriver.mouse.takeoverDuration=S)),d!==Q&&V.resize()},[r,e,t,i,s,l,u,f,d,h,y,T,M,S,x,D]),L.jsx("div",{ref:R,className:`liquid-ether-container ${v||""}`,style:_})}const qU=`

Welcome to The 
Anatolian Table
 The Anatolian Table offers bespoke private chef and catering 
services tailored to your unique needs. Whether you’re 
planning an intimate dinner, a grand celebration, or an 
unforgettable culinary experience, I’m here to bring your 
vision to life with exceptional food and impeccable service.
We create stress-free, gourmet dining experiences in the comfort of your home. 
From menu design and ingredient sourcing to cooking and cleanup, every detail is 
handled with care. We specialize in diverse dietary preferences, including gluten-
free, vegetarian, and allergy-friendly options, ensuring a meal that everyone can 
enjoy.
 Why Choose The Anatolian Table?
Flexible Pricing: Tailored options to suit various budgets without
compromising on quality.
Customized Menus: Each menu is uniquely crafted to reflect your
tastes, dietary needs, and the occasion.
Professional Staff: Skilled servers and bartenders are available to
elevate your event with seamless service.
10/8/25, 3:55 AMPrivate Chef and Catering Services | The Anatolian Table
https://www.theanatoliantable.com/private-chef-and-catering-services1/8

BOOK NOW
Private Chef 
Services
Led by Michelin-trained Chef Deniz Sezer, The Anatolian Table offers bespoke 
private chef services with custom menus tailored to your tastes and dietary 
needs. We handle all cooking, service, and cleanup, using premium, locally 
sourced ingredients. Enjoy a seamless, gourmet experience in your home.
Personalized Themes:  From  elegant  sit-down  dinners  to  themed
buffets, we’ll create an unforgettable experience.
Create an unforgettable 
evening with a 5-course 
fine dining experience, 
expertly crafted by 
Michelin-trained Chef 
Deniz Sezer. Tailored to 
your tastes, the evening 
includes a bouquet of red 
roses, French 
champagne, and full 
post-dinner cleanup.
ourse Modern Fine Dining Exp
mantic Dinner with a Private C
Create an unforgettable 
evening with a 5-course 
fine dining experience, 
expertly crafted by 
Michelin-trained Chef 
Deniz Sezer. Tailored to 
your tastes, the evening 
includes a bouquet of red 
roses, French 
champagne, and full 
post-dinner cleanup.
Choice/ Premium Dining Exper
Experience a curated 7-
course degustation 
featuring our chef's 
signature dishes. This 
fine-dining experience 
showcases a range of 
innovative flavors, each 
course designed to 
reflect your tastes and 
preferences. Min 4 People
10/8/25, 3:55 AMPrivate Chef and Catering Services | The Anatolian Table
https://www.theanatoliantable.com/private-chef-and-catering-services2/8

Include: Private 
Chef, all 
ingredients, 
shopping, cooking, 
service & clean-up
Include: Private 
Chef, all 
ingredients, 
shopping, cooking, 
service & clean-up
Private Chef, all 
ingredients, 
shopping, cooking, 
service & clean-up
mily Style Share Plates Experien
Share an unforgettable 
meal with seven gourmet 
dishes served family-
style. Customizable to 
your tastes or a surprise, 
this casual buffet-style 
experience lets guests 
enjoy a variety of 
delicious dishes crafted 
by your personal chef.
Include: Private Chef, 
all ingredients, 
shopping, cooking, 
service & clean-up
Blindfolded Dinner
Dine in the Dark | 5-
Course Meal
Embark on a sensory 
adventure with a 5-
course blindfolded meal, 
guided by your chef. 
Enjoy two canapés and 
five exquisite courses, 
exploring flavors and 
textures without sight. 
The menu is tailored to 
your preferences, with 
locally sourced, hand-
selected ingredients.
IInclude: Private 
Chef,your very own 
blindfolds, all 
ingredients, shopping, 
10/8/25, 3:55 AMPrivate Chef and Catering Services | The Anatolian Table
https://www.theanatoliantable.com/private-chef-and-catering-services3/8

Events & 
Caterings Services
At The Anatolian Table Events and Catering, we provide exceptional dining experiences 
for any occasion, from intimate gatherings to large events. Whether it’s a wedding, 
business meeting, or celebration, we manage every detail—from menu creation and 
ingredient sourcing to preparation and cleanup. Our gourmet meals accommodate all 
dietary preferences, including gluten-free, vegetarian, and allergy-friendly options. Let us 
make your event stress-free and unforgettable with exquisite cuisine and seamless service.
xecutive Half-Day Buffet Servic
Impress clients and 
guests with a gourmet 
half-day menu crafted by 
your chef. Enjoy coffee, 
tea, fresh juice, two 
varieties of savory finger 
foods, one substantial 
savory item, and two 
dessert options. Choose 
from a variety of cuisines 
or themes, with all 
ingredients locally 
sourced and hand-
selected for top quality. 
Minimum 30 guests. 
Includes five substantial 
food items per person 
Full-Day Buffet Serviceedding & Events Catering Serv
Impress clients and 
guests with an all-day 
gourmet menu, featuring 
coffee, tea, fresh juice, 
four varieties of savory 
finger foods, two 
substantial meals, and 
four dessert options. 
Carefully crafted by our 
chefs, with all 
ingredients hand-
selected and locally 
sourced for top quality. 
Choose from a variety of 
cuisines or themes to suit 
your event.
cooking, service & 
clean-up
Impress your guests with 
a gourmet half-day 
menu, crafted by Chef 
Deniz Sezer. Enjoy coffee, 
tea, fresh juice, savory 
finger foods, a 
substantial item, and 
dessert options. Choose 
from various cuisines, 
with all ingredients 
locally sourced for top 
quality.
This package includes a 
private chef, shopping, 
cooking, service, and 
10/8/25, 3:55 AMPrivate Chef and Catering Services | The Anatolian Table
https://www.theanatoliantable.com/private-chef-and-catering-services4/8

Join Michelin-trained Chef Deniz Sezer for an unforgettable fine dining cooking class and 
learn to prepare a gourmet 2-course meal. This hands-on experience includes two chef-
prepared canapés to enjoy during the class, followed by a sit-down meal where you can savor 
your creations. Choose your favorite dishes or let Chef Deniz design a class tailored to your 
tastes and preferences.
What’s included:
Two canapés to enjoy during the class.
Expert guidance, tips, and recipes to cook like a private chef.
Hands-on practice to prepare one entrée or dessert and one main course.
All premium ingredients, hand-selected and locally sourced.
Chef Deniz Sezer traveling to your location.
Complete setup, cooking, service, and cleanup.
Perfect for small gatherings, team-building events, or a unique culinary experience, this class 
brings the expertise of The Anatolian Table to the comfort of your home. Enjoy a stress-free, 
gourmet adventure tailored to your tastes and dietary needs, including gluten-free, 
vegetarian, and allergy-friendly options
Private Chef 
Cooking Class with 
Chef Deniz Sezer
and bottomless 
beverages.
Include: Private Chef, 
all ingredients, 
shopping, cooking, 
service & clean-up
Include: Private Chef, 
all ingredients, 
shopping, cooking, 
service & clean-up
clean-up. Perfect for 
weddings and private 
events, we’ll make your 
day unforgettable.
Minimum 50 guests. 
Includes five substantial 
food items per person 
and bottomless beverages.
Include: Private Chef, 
all ingredients, 
shopping, cooking, 
service & clean-up
10/8/25, 3:55 AMPrivate Chef and Catering Services | The Anatolian Table
https://www.theanatoliantable.com/private-chef-and-catering-services5/8

Information
Culinary Artistry
Explore our exquisite dishes crafted 
with passion and precision.
10/8/25, 3:55 AMPrivate Chef and Catering Services | The Anatolian Table
https://www.theanatoliantable.com/private-chef-and-catering-services6/8

Our 
Locations
The Anatolian Tables offers exceptional 
private chef services and catering across 
various locations, bringing culinary 
artistry to your doorstep.
Locations
1751 Liberty St
1751 Liberty St, El Cerrito, CA 94530
Directions
View larger map
Map data ©2025 Google
Report a map error
1751 liberty st, El Cerrito CA
Hours
Mon-Sun 
Your First Name
Your Email Address*
Enter your first name
Enter your email addr
Elevate 
Your 
Dining 
Bespoke menus crafted with 
culinary artistry and exceptional 
flavors await you.
10/8/25, 3:55 AMPrivate Chef and Catering Services | The Anatolian Table
https://www.theanatoliantable.com/private-chef-and-catering-services7/8

CONTACT
info@anatoliant
ables.com
Phone number*
Your Message*
Your phone number
Type your message 
here
Submit Your Request
Experien
ce
Explore
10/8/25, 3:55 AMPrivate Chef and Catering Services | The Anatolian Table
https://www.theanatoliantable.com/private-chef-and-catering-services8/8`,Fh=r=>r.replace(/\s+/g," ").trim(),ll=Fh(qU),vu=(r,e)=>{const t=ll.indexOf(r);if(t===-1)return"";const i=e?ll.indexOf(e,t+r.length):ll.length;return Fh(ll.substring(t+r.length,i>=0?i:void 0))};vu("Welcome to The","Why Choose The Anatolian Table?");vu("Why Choose The Anatolian Table?","BOOK NOW");const YU=vu("Private Chef Services","Events & ");vu("Events &","Join Michelin-trained Chef Deniz Sezer");vu("Join Michelin-trained Chef Deniz Sezer","Information");const ZU=(()=>{const r=ll.match(/Locations\s*(.*?)Hours/);return r?Fh(r[1]):""})();(()=>{const r=ll.match(/CONTACT\s*([\s\S]*?)Experien/);return r?Fh(r[1]):""})();const Xg={privateChefSection:YU,locations:ZU},KU="modulepreload",QU=function(r){return"/teiraculinaria/"+r},tM={},JU=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),d=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));s=u(t.map(h=>{if(h=QU(h),h in tM)return;tM[h]=!0;const m=h.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${_}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":KU,m||(v.as="script"),v.crossOrigin="",v.href=h,d&&v.setAttribute("nonce",d),document.head.appendChild(v),m)return new Promise((y,T)=>{v.addEventListener("load",y),v.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return s.then(u=>{for(const f of u||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})},$U=f_.lazy(()=>JU(()=>import("./LightRays-D9dQcHFZ.js"),[])),eN=()=>{const[r,e]=Oe.useState(!1);return Oe.useEffect(()=>{const t=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=typeof window<"u"?window.innerWidth<768:!1;e(!t&&!i)},[]),r},tN=()=>{const r=eN();return L.jsxs("div",{className:"menu-rays-wrap","aria-hidden":!0,children:[r?L.jsx(Oe.Suspense,{fallback:null,children:L.jsx($U,{raysOrigin:"top-center",raysColor:"#f6d2a8",raysSpeed:1.1,lightSpread:.85,rayLength:1.15,followMouse:!0,mouseInfluence:.05,noiseAmount:.05,distortion:.02,className:"menu-rays"})}):L.jsx("div",{className:"menu-bg-fallback"}),L.jsx("div",{className:"menu-bg-overlay"})]})},nN=[{key:"signature",title:"Chef's Choice / Premium",desc:"An elegant, multi-course tasting that highlights seasonal ingredients and refined techniques. Perfect for intimate dinners or special celebrations.",img:"./imggallery/312832450_183603154242544_3364490850470574658_n.jpg"},{key:"tasting",title:"Modern Tasting Menu",desc:"A curated 6–7 course degustation showcasing the chef’s signature dishes and inventive flavor pairings. Minimum group size advised for full experience.",img:"./imggallery/310038471_641913360867435_675961683670589393_n.jpg"},{key:"family",title:"Family Style / Share Plates",desc:"Relaxed communal dining with a selection of savory plates meant to be shared — approachable, delicious, and customizable.",img:"./imggallery/299622273_867508887542151_6159437778816378211_n.jpg"},{key:"blindfold",title:"Blindfolded Dinner (Dine in the Dark)",desc:"A sensory-focused 5-course experience guided by the chef — taste and texture take center stage in an unforgettable tasting.",img:"./imggallery/316119619_6422508417765998_6768193420321574199_n.jpg"},{key:"catering",title:"Events & Catering Menus",desc:"Full-service catering packages for corporate events, weddings, and large gatherings — thoughtfully sourced and executed to your needs.",img:"./imggallery/324544066_152195107605724_1918904625421334616_n.jpg"},{key:"special",title:"Seasonal Specials & Add-ons",desc:"Limited-time offerings and curated add-ons like sommelier pairing, on-site service staff, and decorative plating themes.",img:"./imggallery/denizsezeridea.jpeg"}],iN=()=>L.jsxs("main",{className:"min-h-screen bg-slate-900 text-neutral-100 relative",children:[L.jsx(tN,{}),L.jsx("section",{className:"pt-28 pb-10",children:L.jsx("div",{className:"container mx-auto px-6 menu-hero-content",style:{minHeight:380},children:L.jsxs("div",{className:"flex flex-col justify-center items-center text-center py-10",children:[L.jsx("h1",{className:"text-5xl md:text-6xl font-serif text-white drop-shadow-lg mb-4",children:"Menu Options"}),L.jsx("p",{className:"text-lg md:text-xl text-amber-100/90 max-w-3xl",children:"Explore bespoke menus crafted for private dining, events, and memorable culinary experiences."}),L.jsx("p",{className:"mt-4 text-sm text-amber-200/80 max-w-2xl",children:Xg.privateChefSection?Xg.privateChefSection.split(".").slice(0,2).join(". ")+".":""})]})})}),L.jsx("section",{className:"py-12",children:L.jsx("div",{className:"container mx-auto px-6",children:L.jsx("div",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-3",children:nN.map(r=>L.jsxs("article",{className:"bg-slate-50/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden flex flex-col border border-white/10",children:[L.jsx("div",{className:"h-48 sm:h-56 md:h-44 lg:h-48 overflow-hidden",children:L.jsx("img",{src:r.img,alt:r.title,className:"w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"})}),L.jsxs("div",{className:"p-6 flex-1 flex flex-col",children:[L.jsx("h3",{className:"text-2xl font-serif text-slate-900 mb-2",children:r.title}),L.jsx("p",{className:"text-slate-700 flex-1",children:r.desc}),L.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[L.jsx("a",{href:"#contact",className:"inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-500",children:"Inquire"}),L.jsxs("span",{className:"text-sm text-slate-600",children:["Starting from ",L.jsx("strong",{children:"$1,500"})]})]})]})]},r.key))})})}),L.jsx("section",{className:"py-16",children:L.jsx("div",{className:"container mx-auto px-6",children:L.jsxs("div",{className:"bg-emerald-900/90 backdrop-blur-sm text-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10",children:[L.jsxs("div",{children:[L.jsx("h4",{className:"text-3xl font-serif mb-2",children:"Reserve Your Event"}),L.jsx("p",{className:"text-slate-100 max-w-2xl",children:"Experience bespoke culinary creations by Chef Deniz Sezer. We handle menu design, sourcing, service and cleanup so you can enjoy the event."})]}),L.jsx("div",{children:L.jsx("a",{href:"#contact",className:"bg-amber-500 text-white px-6 py-3 rounded-full font-semibold",children:"Reserve"})})]})})})]});class aN extends Mh{constructor(){super();const e=new Bl;e.deleteAttribute("uv");const t=new Hg({side:ui}),i=new Hg,s=new fb(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const l=new yn(e,t);l.position.set(-.757,13.219,.717),l.scale.set(31.713,28.305,28.591),this.add(l);const u=new ob(e,i,6),f=new Wn;f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-.195,0),f.scale.set(2.328,7.905,4.651),f.updateMatrix(),u.setMatrixAt(0,f.matrix),f.position.set(-5.607,-.754,-.758),f.rotation.set(0,.994,0),f.scale.set(1.97,1.534,3.955),f.updateMatrix(),u.setMatrixAt(1,f.matrix),f.position.set(6.167,.857,7.803),f.rotation.set(0,.561,0),f.scale.set(3.927,6.285,3.687),f.updateMatrix(),u.setMatrixAt(2,f.matrix),f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),f.updateMatrix(),u.setMatrixAt(3,f.matrix),f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),f.updateMatrix(),u.setMatrixAt(4,f.matrix),f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),f.updateMatrix(),u.setMatrixAt(5,f.matrix),this.add(u);const d=new yn(e,nl(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const h=new yn(e,nl(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);const m=new yn(e,nl(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const _=new yn(e,nl(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const v=new yn(e,nl(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const y=new yn(e,nl(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function nl(r){return new eR({color:0,emissive:16777215,emissiveIntensity:r})}function rN(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function sN(r,e,t){return e&&rN(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn,hh,Ii,Yr,Zr,pl,xb,Is,qc,yb,cr,da,Sb,Mb=function(){return jn||typeof window<"u"&&(jn=window.gsap)&&jn.registerPlugin&&jn},bb=1,cl=[],ea=[],Yc=[],Zc=Date.now,jg=function(e,t){return t},oN=function(){var e=qc.core,t=e.bridge||{},i=e._scrollers,s=e._proxies;i.push.apply(i,ea),s.push.apply(s,Yc),ea=i,Yc=s,jg=function(u,f){return t[u](f)}},lN=function(e,t){return~Yc.indexOf(e)&&Yc[Yc.indexOf(e)+1][t]},Kc=function(e){return!!~yb.indexOf(e)},si=function(e,t,i,s,l){return e.addEventListener(t,i,{passive:s!==!1,capture:!!l})},ai=function(e,t,i,s){return e.removeEventListener(t,i,!!s)},ih="scrollLeft",ah="scrollTop",Wg=function(){return cr&&cr.isPressed||ea.cache++},Th=function(e,t){var i=function s(l){if(l||l===0){bb&&(Ii.history.scrollRestoration="manual");var u=cr&&cr.isPressed;l=s.v=Math.round(l)||(cr&&cr.iOS?1:0),e(l),s.cacheID=ea.cache,u&&jg("ss",l)}else(t||ea.cache!==s.cacheID||jg("ref"))&&(s.cacheID=ea.cache,s.v=e());return s.v+s.offset};return i.offset=0,e&&i},Ah={s:ih,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Th(function(r){return arguments.length?Ii.scrollTo(r,Hh.sc()):Ii.pageXOffset||Yr[ih]||Zr[ih]||pl[ih]||0})},Hh={s:ah,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ah,sc:Th(function(r){return arguments.length?Ii.scrollTo(Ah.sc(),r):Ii.pageYOffset||Yr[ah]||Zr[ah]||pl[ah]||0})},cN=function(e,t){return(t&&t._ctx&&t._ctx.selector||jn.utils.toArray)(e)[0]||(typeof e=="string"&&jn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uN=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},nM=function(e,t){var i=t.s,s=t.sc;Kc(e)&&(e=Yr.scrollingElement||Zr);var l=ea.indexOf(e),u=s===Hh.sc?1:2;!~l&&(l=ea.push(e)-1),ea[l+u]||si(e,"scroll",Wg);var f=ea[l+u],d=f||(ea[l+u]=Th(lN(e,i),!0)||(Kc(e)?s:Th(function(h){return arguments.length?e[i]=h:e[i]})));return d.target=e,f||(d.smooth=jn.getProperty(e,"scrollBehavior")==="smooth"),d},iM=function(e,t,i){var s=e,l=e,u=Zc(),f=u,d=t,h=Math.max(500,d*3),m=function(T,M){var S=Zc();M||S-u>d?(l=s,s=T,f=u,u=S):s+=T},_=function(){l=s=0,f=u=0},v=function(T){var M=f,S=l,x=Zc();return(T||T===0)&&T!==s&&m(T),u===f||x-f>h?0:(s+S)/(x-M)*1e3};return{update:m,reset:_,getVelocity:v}},Fc=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},aM=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Eb=function(){qc=jn.core.globals().ScrollTrigger,qc&&qc.core&&oN()},Tb=function(e){return jn=e||Mb(),!hh&&jn&&typeof document<"u"&&document.body&&(Ii=window,Yr=document,Zr=Yr.documentElement,pl=Yr.body,yb=[Ii,Yr,Zr,pl],jn.utils.clamp,Sb=jn.core.context||function(){},Is="onpointerenter"in pl?"pointer":"mouse",xb=Na.isTouch=Ii.matchMedia&&Ii.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,da=Na.eventTypes=("ontouchstart"in Zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bb=0},500),Eb(),hh=1),hh};Ah.op=Hh;ea.cache=0;var Na=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(i){hh||Tb(jn)||console.warn("Please gsap.registerPlugin(Observer)"),qc||Eb();var s=i.tolerance,l=i.dragMinimum,u=i.type,f=i.target,d=i.lineHeight,h=i.debounce,m=i.preventDefault,_=i.onStop,v=i.onStopDelay,y=i.ignore,T=i.wheelSpeed,M=i.event,S=i.onDragStart,x=i.onDragEnd,D=i.onDrag,R=i.onPress,A=i.onRelease,O=i.onRight,P=i.onLeft,z=i.onUp,H=i.onDown,w=i.onChangeX,U=i.onChangeY,V=i.onChange,Q=i.onToggleX,ne=i.onToggleY,re=i.onHover,de=i.onHoverEnd,B=i.onMove,Z=i.ignoreCheck,W=i.isNormalizer,ye=i.onGestureStart,be=i.onGestureEnd,F=i.onWheel,ie=i.onEnable,Me=i.onDisable,Ee=i.onClick,De=i.scrollSpeed,oe=i.capture,me=i.allowClicks,Le=i.lockAxis,Ve=i.onLockAxis;this.target=f=cN(f)||Zr,this.vars=i,y&&(y=jn.utils.toArray(y)),s=s||1e-9,l=l||0,T=T||1,De=De||1,u=u||"wheel,touch,pointer",h=h!==!1,d||(d=parseFloat(Ii.getComputedStyle(pl).lineHeight)||22);var We,lt,Ht,G,Mt,at,et,K=this,xt=0,je=0,ot=i.passive||!m&&i.passive!==!1,Gt=nM(f,Ah),Bt=nM(f,Hh),I=Gt(),b=Bt(),k=~u.indexOf("touch")&&!~u.indexOf("pointer")&&da[0]==="pointerdown",te=Kc(f),ue=f.ownerDocument||Yr,ae=[0,0,0],Ue=[0,0,0],Re=0,ke=function(){return Re=Zc()},He=function(Qe,dt){return(K.event=Qe)&&y&&uN(Qe.target,y)||dt&&k&&Qe.pointerType!=="touch"||Z&&Z(Qe,dt)},Ae=function(){K._vx.reset(),K._vy.reset(),lt.pause(),_&&_(K)},Ce=function(){var Qe=K.deltaX=aM(ae),dt=K.deltaY=aM(Ue),sn=Math.abs(Qe)>=s,on=Math.abs(dt)>=s;V&&(sn||on)&&V(K,Qe,dt,ae,Ue),sn&&(O&&K.deltaX>0&&O(K),P&&K.deltaX<0&&P(K),w&&w(K),Q&&K.deltaX<0!=xt<0&&Q(K),xt=K.deltaX,ae[0]=ae[1]=ae[2]=0),on&&(H&&K.deltaY>0&&H(K),z&&K.deltaY<0&&z(K),U&&U(K),ne&&K.deltaY<0!=je<0&&ne(K),je=K.deltaY,Ue[0]=Ue[1]=Ue[2]=0),(G||Ht)&&(B&&B(K),Ht&&(S&&Ht===1&&S(K),D&&D(K),Ht=0),G=!1),at&&!(at=!1)&&Ve&&Ve(K),Mt&&(F(K),Mt=!1),We=0},$e=function(Qe,dt,sn){ae[sn]+=Qe,Ue[sn]+=dt,K._vx.update(Qe),K._vy.update(dt),h?We||(We=requestAnimationFrame(Ce)):Ce()},Be=function(Qe,dt){Le&&!et&&(K.axis=et=Math.abs(Qe)>Math.abs(dt)?"x":"y",at=!0),et!=="y"&&(ae[2]+=Qe,K._vx.update(Qe,!0)),et!=="x"&&(Ue[2]+=dt,K._vy.update(dt,!0)),h?We||(We=requestAnimationFrame(Ce)):Ce()},Pe=function(Qe){if(!He(Qe,1)){Qe=Fc(Qe,m);var dt=Qe.clientX,sn=Qe.clientY,on=dt-K.x,ti=sn-K.y,va=K.isDragging;K.x=dt,K.y=sn,(va||(on||ti)&&(Math.abs(K.startX-dt)>=l||Math.abs(K.startY-sn)>=l))&&(Ht=va?2:1,va||(K.isDragging=!0),Be(on,ti))}},ft=K.onPress=function(Fe){He(Fe,1)||Fe&&Fe.button||(K.axis=et=null,lt.pause(),K.isPressed=!0,Fe=Fc(Fe),xt=je=0,K.startX=K.x=Fe.clientX,K.startY=K.y=Fe.clientY,K._vx.reset(),K._vy.reset(),si(W?f:ue,da[1],Pe,ot,!0),K.deltaX=K.deltaY=0,R&&R(K))},q=K.onRelease=function(Fe){if(!He(Fe,1)){ai(W?f:ue,da[1],Pe,!0);var Qe=!isNaN(K.y-K.startY),dt=K.isDragging,sn=dt&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),on=Fc(Fe);!sn&&Qe&&(K._vx.reset(),K._vy.reset(),m&&me&&jn.delayedCall(.08,function(){if(Zc()-Re>300&&!Fe.defaultPrevented){if(Fe.target.click)Fe.target.click();else if(ue.createEvent){var ti=ue.createEvent("MouseEvents");ti.initMouseEvent("click",!0,!0,Ii,1,on.screenX,on.screenY,on.clientX,on.clientY,!1,!1,!1,!1,0,null),Fe.target.dispatchEvent(ti)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,_&&dt&&!W&&lt.restart(!0),Ht&&Ce(),x&&dt&&x(K),A&&A(K,sn)}},we=function(Qe){return Qe.touches&&Qe.touches.length>1&&(K.isGesturing=!0)&&ye(Qe,K.isDragging)},Ne=function(){return(K.isGesturing=!1)||be(K)},Xe=function(Qe){if(!He(Qe)){var dt=Gt(),sn=Bt();$e((dt-I)*De,(sn-b)*De,1),I=dt,b=sn,_&&lt.restart(!0)}},Te=function(Qe){if(!He(Qe)){Qe=Fc(Qe,m),F&&(Mt=!0);var dt=(Qe.deltaMode===1?d:Qe.deltaMode===2?Ii.innerHeight:1)*T;$e(Qe.deltaX*dt,Qe.deltaY*dt,0),_&&!W&&lt.restart(!0)}},ve=function(Qe){if(!He(Qe)){var dt=Qe.clientX,sn=Qe.clientY,on=dt-K.x,ti=sn-K.y;K.x=dt,K.y=sn,G=!0,_&&lt.restart(!0),(on||ti)&&Be(on,ti)}},qe=function(Qe){K.event=Qe,re(K)},ut=function(Qe){K.event=Qe,de(K)},Ot=function(Qe){return He(Qe)||Fc(Qe,m)&&Ee(K)};lt=K._dc=jn.delayedCall(v||.25,Ae).pause(),K.deltaX=K.deltaY=0,K._vx=iM(0,50),K._vy=iM(0,50),K.scrollX=Gt,K.scrollY=Bt,K.isDragging=K.isGesturing=K.isPressed=!1,Sb(this),K.enable=function(Fe){return K.isEnabled||(si(te?ue:f,"scroll",Wg),u.indexOf("scroll")>=0&&si(te?ue:f,"scroll",Xe,ot,oe),u.indexOf("wheel")>=0&&si(f,"wheel",Te,ot,oe),(u.indexOf("touch")>=0&&xb||u.indexOf("pointer")>=0)&&(si(f,da[0],ft,ot,oe),si(ue,da[2],q),si(ue,da[3],q),me&&si(f,"click",ke,!0,!0),Ee&&si(f,"click",Ot),ye&&si(ue,"gesturestart",we),be&&si(ue,"gestureend",Ne),re&&si(f,Is+"enter",qe),de&&si(f,Is+"leave",ut),B&&si(f,Is+"move",ve)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=G=Ht=!1,K._vx.reset(),K._vy.reset(),I=Gt(),b=Bt(),Fe&&Fe.type&&ft(Fe),ie&&ie(K)),K},K.disable=function(){K.isEnabled&&(cl.filter(function(Fe){return Fe!==K&&Kc(Fe.target)}).length||ai(te?ue:f,"scroll",Wg),K.isPressed&&(K._vx.reset(),K._vy.reset(),ai(W?f:ue,da[1],Pe,!0)),ai(te?ue:f,"scroll",Xe,oe),ai(f,"wheel",Te,oe),ai(f,da[0],ft,oe),ai(ue,da[2],q),ai(ue,da[3],q),ai(f,"click",ke,!0),ai(f,"click",Ot),ai(ue,"gesturestart",we),ai(ue,"gestureend",Ne),ai(f,Is+"enter",qe),ai(f,Is+"leave",ut),ai(f,Is+"move",ve),K.isEnabled=K.isPressed=K.isDragging=!1,Me&&Me(K))},K.kill=K.revert=function(){K.disable();var Fe=cl.indexOf(K);Fe>=0&&cl.splice(Fe,1),cr===K&&(cr=0)},cl.push(K),W&&Kc(f)&&(cr=K),K.enable(M)},sN(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Na.version="3.13.0";Na.create=function(r){return new Na(r)};Na.register=Tb;Na.getAll=function(){return cl.slice()};Na.getById=function(r){return cl.filter(function(e){return e.vars.id===r})[0]};Mb()&&jn.registerPlugin(Na);function rr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ab(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Rl={duration:.5,overwrite:!1,delay:0},N_,qn,cn,na=1e8,en=1/na,qg=Math.PI*2,fN=qg/4,hN=0,wb=Math.sqrt,dN=Math.cos,pN=Math.sin,In=function(e){return typeof e=="string"},pn=function(e){return typeof e=="function"},hr=function(e){return typeof e=="number"},L_=function(e){return typeof e>"u"},La=function(e){return typeof e=="object"},xi=function(e){return e!==!1},O_=function(){return typeof window<"u"},rh=function(e){return pn(e)||In(e)},Rb=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ei=Array.isArray,Yg=/(?:-?\.?\d|\.)+/gi,Cb=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ul=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hm=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Db=/[+-]=-?[.\d]+/,Ub=/[^,'"\[\]\s]+/gi,mN=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,un,Ea,Zg,P_,Vi={},wh={},Nb,Lb=function(e){return(wh=Cl(e,Vi))&&bi},z_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},lu=function(e,t){return!t&&console.warn(e)},Ob=function(e,t){return e&&(Vi[e]=t)&&wh&&(wh[e]=t)||Vi},cu=function(){return 0},gN={suppressEvents:!0,isStart:!0,kill:!1},dh={suppressEvents:!0,kill:!1},_N={suppressEvents:!0},I_={},ns=[],Kg={},Pb,Pi={},Gm={},rM=30,ph=[],B_="",F_=function(e){var t=e[0],i,s;if(La(t)||pn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=ph.length;s--&&!ph[s].targetTest(t););i=ph[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new r1(e[s],i)))||e.splice(s,1);return e},Ys=function(e){return e._gsap||F_(ia(e))[0]._gsap},zb=function(e,t,i){return(i=e[t])&&pn(i)?e[t]():L_(i)&&e.getAttribute&&e.getAttribute(t)||i},yi=function(e,t){return(e=e.split(",")).forEach(t)||e},xn=function(e){return Math.round(e*1e5)/1e5||0},Rn=function(e){return Math.round(e*1e7)/1e7||0},ml=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},vN=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Rh=function(){var e=ns.length,t=ns.slice(0),i,s;for(Kg={},ns.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},H_=function(e){return!!(e._initted||e._startAt||e.add)},Ib=function(e,t,i,s){ns.length&&!qn&&Rh(),e.render(t,i,!!(qn&&t<0&&H_(e))),ns.length&&!qn&&Rh()},Bb=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ub).length<2?t:In(e)?e.trim():e},Fb=function(e){return e},ki=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},xN=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},Cl=function(e,t){for(var i in t)e[i]=t[i];return e},sM=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=La(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Ch=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},Qc=function(e){var t=e.parent||un,i=e.keyframes?xN(ei(e.keyframes)):ki;if(xi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},yN=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},Hb=function(e,t,i,s,l){var u=e[s],f;if(l)for(f=t[l];u&&u[l]>f;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},Gh=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var l=t._prev,u=t._next;l?l._next=u:e[i]===t&&(e[i]=u),u?u._prev=l:e[s]===t&&(e[s]=l),t._next=t._prev=t.parent=null},ss=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},SN=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qg=function(e,t,i,s){return e._startAt&&(qn?e._startAt.revert(dh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},MN=function r(e){return!e||e._ts&&r(e.parent)},oM=function(e){return e._repeat?Dl(e._tTime,e=e.duration()+e._rDelay)*e:0},Dl=function(e,t){var i=Math.floor(e=Rn(e/t));return e&&i===e?i-1:i},Dh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vh=function(e){return e._end=Rn(e._start+(e._tDur/Math.abs(e._ts||e._rts||en)||0))},kh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Rn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vh(e),i._dirty||Zs(i,e)),e},Gb=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Dh(e.rawTime(),t),(!t._dur||xu(0,t.totalDuration(),i)-t._tTime>en)&&t.render(i,!0)),Zs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-en}},Aa=function(e,t,i,s){return t.parent&&ss(t),t._start=Rn((hr(i)?i:i||e!==un?$i(e,i,t):e._time)+t._delay),t._end=Rn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hb(e,t,"_first","_last",e._sort?"_start":0),Jg(t)||(e._recent=t),s||Gb(e,t),e._ts<0&&kh(e,e._tTime),e},Vb=function(e,t){return(Vi.ScrollTrigger||z_("scrollTrigger",t))&&Vi.ScrollTrigger.create(t,e)},kb=function(e,t,i,s,l){if(V_(e,t,l),!e._initted)return 1;if(!i&&e._pt&&!qn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pb!==Bi.frame)return ns.push(e),e._lazy=[l,s],1},bN=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Jg=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},EN=function(e,t,i,s){var l=e.ratio,u=t<0||!t&&(!e._start&&bN(e)&&!(!e._initted&&Jg(e))||(e._ts<0||e._dp._ts<0)&&!Jg(e))?0:1,f=e._rDelay,d=0,h,m,_;if(f&&e._repeat&&(d=xu(0,e._tDur,t),m=Dl(d,f),e._yoyo&&m&1&&(u=1-u),m!==Dl(e._tTime,f)&&(l=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==l||qn||s||e._zTime===en||!t&&e._zTime){if(!e._initted&&kb(e,t,s,i,d))return;for(_=e._zTime,e._zTime=t||(i?en:0),i||(i=t&&!_),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&Qg(e,t,i,!0),e._onUpdate&&!i&&Fi(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&Fi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&ss(e,1),!i&&!qn&&(Fi(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TN=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Ul=function(e,t,i,s){var l=e._repeat,u=Rn(t)||0,f=e._tTime/e._tDur;return f&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=l?l<0?1e10:Rn(u*(l+1)+e._rDelay*l):u,f>0&&!s&&kh(e,e._tTime=e._tDur*f),e.parent&&Vh(e),i||Zs(e.parent,e),e},lM=function(e){return e instanceof ci?Zs(e):Ul(e,e._dur)},AN={_start:0,endTime:cu,totalDuration:cu},$i=function r(e,t,i){var s=e.labels,l=e._recent||AN,u=e.duration()>=na?l.endTime(!1):e._dur,f,d,h;return In(t)&&(isNaN(t)||t in s)?(d=t.charAt(0),h=t.substr(-1)==="%",f=t.indexOf("="),d==="<"||d===">"?(f>=0&&(t=t.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(f<0?l:i).totalDuration()/100:1)):f<0?(t in s||(s[t]=u),s[t]):(d=parseFloat(t.charAt(f-1)+t.substr(f+1)),h&&i&&(d=d/100*(ei(i)?i[0]:i).totalDuration()),f>1?r(e,t.substr(0,f-1),i)+d:u+d)):t==null?u:+t},Jc=function(e,t,i){var s=hr(t[1]),l=(s?2:1)+(e<2?0:1),u=t[l],f,d;if(s&&(u.duration=t[1]),u.parent=i,e){for(f=u,d=i;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=xi(d.vars.inherit)&&d.parent;u.immediateRender=xi(f.immediateRender),e<2?u.runBackwards=1:u.startAt=t[l-1]}return new wn(t[0],u,t[l+1])},ls=function(e,t){return e||e===0?t(e):t},xu=function(e,t,i){return i<e?e:i>t?t:i},$n=function(e,t){return!In(e)||!(t=mN.exec(e))?"":t[1]},wN=function(e,t,i){return ls(i,function(s){return xu(e,t,s)})},$g=[].slice,Xb=function(e,t){return e&&La(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&La(e[0]))&&!e.nodeType&&e!==Ea},RN=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var l;return In(s)&&!t||Xb(s,1)?(l=i).push.apply(l,ia(s)):i.push(s)})||i},ia=function(e,t,i){return cn&&!t&&cn.selector?cn.selector(e):In(e)&&!i&&(Zg||!Nl())?$g.call((t||P_).querySelectorAll(e),0):ei(e)?RN(e,i):Xb(e)?$g.call(e,0):e?[e]:[]},e_=function(e){return e=ia(e)[0]||lu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ia(t,i.querySelectorAll?i:i===e?lu("Invalid scope")||P_.createElement("div"):e)}},jb=function(e){return e.sort(function(){return .5-Math.random()})},Wb=function(e){if(pn(e))return e;var t=La(e)?e:{each:e},i=Ks(t.ease),s=t.from||0,l=parseFloat(t.base)||0,u={},f=s>0&&s<1,d=isNaN(s)||f,h=t.axis,m=s,_=s;return In(s)?m=_={center:.5,edges:.5,end:1}[s]||0:!f&&d&&(m=s[0],_=s[1]),function(v,y,T){var M=(T||t).length,S=u[M],x,D,R,A,O,P,z,H,w;if(!S){if(w=t.grid==="auto"?0:(t.grid||[1,na])[1],!w){for(z=-na;z<(z=T[w++].getBoundingClientRect().left)&&w<M;);w<M&&w--}for(S=u[M]=[],x=d?Math.min(w,M)*m-.5:s%w,D=w===na?0:d?M*_/w-.5:s/w|0,z=0,H=na,P=0;P<M;P++)R=P%w-x,A=D-(P/w|0),S[P]=O=h?Math.abs(h==="y"?A:R):wb(R*R+A*A),O>z&&(z=O),O<H&&(H=O);s==="random"&&jb(S),S.max=z-H,S.min=H,S.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(w>M?M-1:h?h==="y"?M/w:w:Math.max(w,M/w))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=$n(t.amount||t.each)||0,i=i&&M<0?n1(i):i}return M=(S[v]-S.min)/S.max||0,Rn(S.b+(i?i(M):M)*S.v)+S.u}},t_=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Rn(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(hr(i)?0:$n(i))}},qb=function(e,t){var i=ei(e),s,l;return!i&&La(e)&&(s=i=e.radius||na,e.values?(e=ia(e.values),(l=!hr(e[0]))&&(s*=s)):e=t_(e.increment)),ls(t,i?pn(e)?function(u){return l=e(u),Math.abs(l-u)<=s?l:u}:function(u){for(var f=parseFloat(l?u.x:u),d=parseFloat(l?u.y:0),h=na,m=0,_=e.length,v,y;_--;)l?(v=e[_].x-f,y=e[_].y-d,v=v*v+y*y):v=Math.abs(e[_]-f),v<h&&(h=v,m=_);return m=!s||h<=s?e[m]:u,l||m===u||hr(u)?m:m+$n(u)}:t_(e))},Yb=function(e,t,i,s){return ls(ei(e)?!t:i===!0?!!(i=0):!s,function(){return ei(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},CN=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(l,u){return u(l)},s)}},DN=function(e,t){return function(i){return e(parseFloat(i))+(t||$n(i))}},UN=function(e,t,i){return Kb(e,t,0,1,i)},Zb=function(e,t,i){return ls(i,function(s){return e[~~t(s)]})},NN=function r(e,t,i){var s=t-e;return ei(e)?Zb(e,r(0,e.length),t):ls(i,function(l){return(s+(l-e)%s)%s+e})},LN=function r(e,t,i){var s=t-e,l=s*2;return ei(e)?Zb(e,r(0,e.length-1),t):ls(i,function(u){return u=(l+(u-e)%l)%l||0,e+(u>s?l-u:u)})},uu=function(e){for(var t=0,i="",s,l,u,f;~(s=e.indexOf("random(",t));)u=e.indexOf(")",s),f=e.charAt(s+7)==="[",l=e.substr(s+7,u-s-7).match(f?Ub:Yg),i+=e.substr(t,s-t)+Yb(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),t=u+1;return i+e.substr(t,e.length-t)},Kb=function(e,t,i,s,l){var u=t-e,f=s-i;return ls(l,function(d){return i+((d-e)/u*f||0)})},ON=function r(e,t,i,s){var l=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!l){var u=In(e),f={},d,h,m,_,v;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(ei(e)&&!ei(t)){for(m=[],_=e.length,v=_-2,h=1;h<_;h++)m.push(r(e[h-1],e[h]));_--,l=function(T){T*=_;var M=Math.min(v,~~T);return m[M](T-M)},i=t}else s||(e=Cl(ei(e)?[]:{},e));if(!m){for(d in t)G_.call(f,e,d,"get",t[d]);l=function(T){return j_(T,f)||(u?e.p:e)}}}return ls(i,l)},cM=function(e,t,i){var s=e.labels,l=na,u,f,d;for(u in s)f=s[u]-t,f<0==!!i&&f&&l>(f=Math.abs(f))&&(d=u,l=f);return d},Fi=function(e,t,i){var s=e.vars,l=s[t],u=cn,f=e._ctx,d,h,m;if(l)return d=s[t+"Params"],h=s.callbackScope||e,i&&ns.length&&Rh(),f&&(cn=f),m=d?l.apply(h,d):l.call(h),cn=u,m},kc=function(e){return ss(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qn),e.progress()<1&&Fi(e,"onInterrupt"),e},fl,Qb=[],Jb=function(e){if(e)if(e=!e.name&&e.default||e,O_()||e.headless){var t=e.name,i=pn(e),s=t&&!i&&e.init?function(){this._props=[]}:e,l={init:cu,render:j_,add:G_,kill:KN,modifier:ZN,rawVars:0},u={targetTest:0,get:0,getSetter:X_,aliases:{},register:0};if(Nl(),e!==s){if(Pi[t])return;ki(s,ki(Ch(e,l),u)),Cl(s.prototype,Cl(l,Ch(e,u))),Pi[s.prop=t]=s,e.targetTest&&(ph.push(s),I_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ob(t,s),e.register&&e.register(bi,s,Si)}else Qb.push(e)},$t=255,Xc={aqua:[0,$t,$t],lime:[0,$t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$t],navy:[0,0,128],white:[$t,$t,$t],olive:[128,128,0],yellow:[$t,$t,0],orange:[$t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$t,0,0],pink:[$t,192,203],cyan:[0,$t,$t],transparent:[$t,$t,$t,0]},Vm=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*$t+.5|0},$b=function(e,t,i){var s=e?hr(e)?[e>>16,e>>8&$t,e&$t]:0:Xc.black,l,u,f,d,h,m,_,v,y,T;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xc[e])s=Xc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),u=e.charAt(2),f=e.charAt(3),e="#"+l+l+u+u+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&$t,s&$t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&$t,e&$t]}else if(e.substr(0,3)==="hsl"){if(s=T=e.match(Yg),!t)d=+s[0]%360/360,h=+s[1]/100,m=+s[2]/100,u=m<=.5?m*(h+1):m+h-m*h,l=m*2-u,s.length>3&&(s[3]*=1),s[0]=Vm(d+1/3,l,u),s[1]=Vm(d,l,u),s[2]=Vm(d-1/3,l,u);else if(~e.indexOf("="))return s=e.match(Cb),i&&s.length<4&&(s[3]=1),s}else s=e.match(Yg)||Xc.transparent;s=s.map(Number)}return t&&!T&&(l=s[0]/$t,u=s[1]/$t,f=s[2]/$t,_=Math.max(l,u,f),v=Math.min(l,u,f),m=(_+v)/2,_===v?d=h=0:(y=_-v,h=m>.5?y/(2-_-v):y/(_+v),d=_===l?(u-f)/y+(u<f?6:0):_===u?(f-l)/y+2:(l-u)/y+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(m*100+.5)),i&&s.length<4&&(s[3]=1),s},e1=function(e){var t=[],i=[],s=-1;return e.split(is).forEach(function(l){var u=l.match(ul)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},uM=function(e,t,i){var s="",l=(e+s).match(is),u=t?"hsla(":"rgba(",f=0,d,h,m,_;if(!l)return e;if(l=l.map(function(v){return(v=$b(v,t,1))&&u+(t?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(m=e1(e),d=i.c,d.join(s)!==m.c.join(s)))for(h=e.replace(is,"1").split(ul),_=h.length-1;f<_;f++)s+=h[f]+(~d.indexOf(f)?l.shift()||u+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!h)for(h=e.split(is),_=h.length-1;f<_;f++)s+=h[f]+l[f];return s+h[_]},is=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xc)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),PN=/hsl[a]?\(/,t1=function(e){var t=e.join(" "),i;if(is.lastIndex=0,is.test(t))return i=PN.test(t),e[1]=uM(e[1],i),e[0]=uM(e[0],i,e1(e[1])),!0},fu,Bi=(function(){var r=Date.now,e=500,t=33,i=r(),s=i,l=1e3/240,u=l,f=[],d,h,m,_,v,y,T=function M(S){var x=r()-s,D=S===!0,R,A,O,P;if((x>e||x<0)&&(i+=x-t),s+=x,O=s-i,R=O-u,(R>0||D)&&(P=++_.frame,v=O-_.time*1e3,_.time=O=O/1e3,u+=R+(R>=l?4:l-R),A=1),D||(d=h(M)),A)for(y=0;y<f.length;y++)f[y](O,v,P,S)};return _={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){Nb&&(!Zg&&O_()&&(Ea=Zg=window,P_=Ea.document||{},Vi.gsap=bi,(Ea.gsapVersions||(Ea.gsapVersions=[])).push(bi.version),Lb(wh||Ea.GreenSockGlobals||!Ea.gsap&&Ea||{}),Qb.forEach(Jb)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&_.sleep(),h=m||function(S){return setTimeout(S,u-_.time*1e3+1|0)},fu=1,T(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),fu=0,h=cu},lagSmoothing:function(S,x){e=S||1/0,t=Math.min(x||33,e)},fps:function(S){l=1e3/(S||240),u=_.time*1e3+l},add:function(S,x,D){var R=x?function(A,O,P,z){S(A,O,P,z),_.remove(R)}:S;return _.remove(S),f[D?"unshift":"push"](R),Nl(),R},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},_})(),Nl=function(){return!fu&&Bi.wake()},Ut={},zN=/^[\d.\-M][\d.\-,\s]/,IN=/["']/g,BN=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],l=1,u=i.length,f,d,h;l<u;l++)d=i[l],f=l!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,f),t[s]=isNaN(h)?h.replace(IN,"").trim():+h,s=d.substr(f+1).trim();return t},FN=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},HN=function(e){var t=(e+"").split("("),i=Ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[BN(t[1])]:FN(e).split(",").map(Bb)):Ut._CE&&zN.test(e)?Ut._CE("",e):i},n1=function(e){return function(t){return 1-e(1-t)}},i1=function r(e,t){for(var i=e._first,s;i;)i instanceof ci?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},Ks=function(e,t){return e&&(pn(e)?e:Ut[e]||HN(e))||t},ro=function(e,t,i,s){i===void 0&&(i=function(d){return 1-t(1-d)}),s===void 0&&(s=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var l={easeIn:t,easeOut:i,easeInOut:s},u;return yi(e,function(f){Ut[f]=Vi[f]=l,Ut[u=f.toLowerCase()]=i;for(var d in l)Ut[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Ut[f+"."+d]=l[d]}),l},a1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},km=function r(e,t,i){var s=t>=1?t:1,l=(i||(e?.3:.45))/(t<1?t:1),u=l/qg*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*pN((m-u)*l)+1},d=e==="out"?f:e==="in"?function(h){return 1-f(1-h)}:a1(f);return l=qg/l,d.config=function(h,m){return r(e,h,m)},d},Xm=function r(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(l){return 1-i(1-l)}:a1(i);return s.config=function(l){return r(e,l)},s};yi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ro(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ut.Linear.easeNone=Ut.none=Ut.Linear.easeIn;ro("Elastic",km("in"),km("out"),km());(function(r,e){var t=1/e,i=2*t,s=2.5*t,l=function(f){return f<t?r*f*f:f<i?r*Math.pow(f-1.5/e,2)+.75:f<s?r*(f-=2.25/e)*f+.9375:r*Math.pow(f-2.625/e,2)+.984375};ro("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);ro("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ro("Circ",function(r){return-(wb(1-r*r)-1)});ro("Sine",function(r){return r===1?1:-dN(r*fN)+1});ro("Back",Xm("in"),Xm("out"),Xm());Ut.SteppedEase=Ut.steps=Vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),l=t?1:0,u=1-en;return function(f){return((s*xu(0,u,f)|0)+l)*i}}};Rl.ease=Ut["quad.out"];yi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return B_+=r+","+r+"Params,"});var r1=function(e,t){this.id=hN++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zb,this.set=t?t.getSetter:X_},hu=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ul(this,+t.duration,1,1),this.data=t.data,cn&&(this._ctx=cn,cn.data.push(this)),fu||Bi.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ul(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(Nl(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(kh(this,i),!l._dp||l.parent||Gb(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Aa(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===en||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ib(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+oM(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+oM(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,s):this._repeat?Dl(this._tTime,l)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-en?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Dh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-en?0:this._rts,this.totalTime(xu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),Vh(this),SN(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Nl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==en&&(this._tTime-=en)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Aa(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(xi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dh(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=_N);var s=qn;return qn=i,H_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),qn=s,this},e.globalTime=function(i){for(var s=this,l=arguments.length?i:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,lM(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,lM(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime($i(this,i),xi(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,xi(s)),this._dur||(this._zTime=-en),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-en:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-en,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=s&&l<this.endTime(!0)-en)},e.eventCallback=function(i,s,l){var u=this.vars;return arguments.length>1?(s?(u[i]=s,l&&(u[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this;return new Promise(function(l){var u=pn(i)?i:Fb,f=function(){var h=s.then;s.then=null,pn(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=h),l(u),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},e.kill=function(){kc(this)},r})();ki(hu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-en,_prom:0,_ps:!1,_rts:1});var ci=(function(r){Ab(e,r);function e(i,s){var l;return i===void 0&&(i={}),l=r.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=xi(i.sortChildren),un&&Aa(i.parent||un,rr(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&Vb(rr(l),i.scrollTrigger),l}var t=e.prototype;return t.to=function(s,l,u){return Jc(0,arguments,this),this},t.from=function(s,l,u){return Jc(1,arguments,this),this},t.fromTo=function(s,l,u,f){return Jc(2,arguments,this),this},t.set=function(s,l,u){return l.duration=0,l.parent=this,Qc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new wn(s,l,$i(this,u),1),this},t.call=function(s,l,u){return Aa(this,wn.delayedCall(0,s,l),u)},t.staggerTo=function(s,l,u,f,d,h,m){return u.duration=l,u.stagger=u.stagger||f,u.onComplete=h,u.onCompleteParams=m,u.parent=this,new wn(s,u,$i(this,d)),this},t.staggerFrom=function(s,l,u,f,d,h,m){return u.runBackwards=1,Qc(u).immediateRender=xi(u.immediateRender),this.staggerTo(s,l,u,f,d,h,m)},t.staggerFromTo=function(s,l,u,f,d,h,m,_){return f.startAt=u,Qc(f).immediateRender=xi(f.immediateRender),this.staggerTo(s,l,f,d,h,m,_)},t.render=function(s,l,u){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=s<=0?0:Rn(s),_=this._zTime<0!=s<0&&(this._initted||!h),v,y,T,M,S,x,D,R,A,O,P,z;if(this!==un&&m>d&&s>=0&&(m=d),m!==this._tTime||u||_){if(f!==this._time&&h&&(m+=this._time-f,s+=this._time-f),v=m,A=this._start,R=this._ts,x=!R,_&&(h||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,S=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,u);if(v=Rn(m%S),m===d?(M=this._repeat,v=h):(O=Rn(m/S),M=~~O,M&&M===O&&(v=h,M--),v>h&&(v=h)),O=Dl(this._tTime,S),!f&&this._tTime&&O!==M&&this._tTime-O*S-this._dur<=0&&(O=M),P&&M&1&&(v=h-v,z=1),M!==O&&!this._lock){var H=P&&O&1,w=H===(P&&M&1);if(M<O&&(H=!H),f=H?0:m%h?h:m,this._lock=1,this.render(f||(z?0:Rn(M*S)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Fi(this,"onRepeat"),this.vars.repeatRefresh&&!z&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,w&&(this._lock=2,f=H?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!z&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;i1(this,z)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=TN(this,Rn(f),Rn(v)),D&&(m-=v-(v=D._start))),this._tTime=m,this._time=v,this._act=!R,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&!l&&!O&&(Fi(this,"onStart"),this._tTime!==m))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(T=y._next,(y._act||v>=y._start)&&y._ts&&D!==y){if(y.parent!==this)return this.render(s,l,u);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,u),v!==this._time||!this._ts&&!x){D=0,T&&(m+=this._zTime=-en);break}}y=T}else{y=this._last;for(var U=s<0?s:v;y;){if(T=y._prev,(y._act||U<=y._end)&&y._ts&&D!==y){if(y.parent!==this)return this.render(s,l,u);if(y.render(y._ts>0?(U-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(U-y._start)*y._ts,l,u||qn&&H_(y)),v!==this._time||!this._ts&&!x){D=0,T&&(m+=this._zTime=U?-en:en);break}}y=T}}if(D&&!l&&(this.pause(),D.render(v>=f?0:-en)._zTime=v>=f?1:-1,this._ts))return this._start=A,Vh(this),this.render(s,l,u);this._onUpdate&&!l&&Fi(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(A===this._start||Math.abs(R)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(m===d&&this._ts>0||!m&&this._ts<0)&&ss(this,1),!l&&!(s<0&&!f)&&(m||f||!d)&&(Fi(this,m===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,l){var u=this;if(hr(l)||(l=$i(this,l,s)),!(s instanceof hu)){if(ei(s))return s.forEach(function(f){return u.add(f,l)}),this;if(In(s))return this.addLabel(s,l);if(pn(s))s=wn.delayedCall(0,s);else return this}return this!==s?Aa(this,s,l):this},t.getChildren=function(s,l,u,f){s===void 0&&(s=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),f===void 0&&(f=-na);for(var d=[],h=this._first;h;)h._start>=f&&(h instanceof wn?l&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,l,u)))),h=h._next;return d},t.getById=function(s){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===s)return l[u]},t.remove=function(s){return In(s)?this.removeLabel(s):pn(s)?this.killTweensOf(s):(s.parent===this&&Gh(this,s),s===this._recent&&(this._recent=this._last),Zs(this))},t.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rn(Bi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},t.addLabel=function(s,l){return this.labels[s]=$i(this,l),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,l,u){var f=wn.delayedCall(0,l||cu,u);return f.data="isPause",this._hasPause=1,Aa(this,f,$i(this,s))},t.removePause=function(s){var l=this._first;for(s=$i(this,s);l;)l._start===s&&l.data==="isPause"&&ss(l),l=l._next},t.killTweensOf=function(s,l,u){for(var f=this.getTweensOf(s,u),d=f.length;d--;)Kr!==f[d]&&f[d].kill(s,l);return this},t.getTweensOf=function(s,l){for(var u=[],f=ia(s),d=this._first,h=hr(l),m;d;)d instanceof wn?vN(d._targets,f)&&(h?(!Kr||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&u.push(d):(m=d.getTweensOf(f,l)).length&&u.push.apply(u,m),d=d._next;return u},t.tweenTo=function(s,l){l=l||{};var u=this,f=$i(u,s),d=l,h=d.startAt,m=d.onStart,_=d.onStartParams,v=d.immediateRender,y,T=wn.to(u,ki({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:u._time))/u.timeScale())||en,onStart:function(){if(u.pause(),!y){var S=l.duration||Math.abs((f-(h&&"time"in h?h.time:u._time))/u.timeScale());T._dur!==S&&Ul(T,S,0,1).render(T._time,!0,!0),y=1}m&&m.apply(T,_||[])}},l));return v?T.render(0):T},t.tweenFromTo=function(s,l,u){return this.tweenTo(l,ki({startAt:{time:$i(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),cM(this,$i(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),cM(this,$i(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+en)},t.shiftChildren=function(s,l,u){u===void 0&&(u=0);for(var f=this._first,d=this.labels,h;f;)f._start>=u&&(f._start+=s,f._end+=s),f=f._next;if(l)for(h in d)d[h]>=u&&(d[h]+=s);return Zs(this)},t.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Zs(this)},t.totalDuration=function(s){var l=0,u=this,f=u._last,d=na,h,m,_;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(_=u.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&u._sort&&f._ts&&!u._lock?(u._lock=1,Aa(u,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!_&&!u._dp||_&&_.smoothChildTiming)&&(u._start+=m/u._ts,u._time-=m,u._tTime-=m),u.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=h;Ul(u,u===un&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(un._ts&&(Ib(un,Dh(s,un)),Pb=Bi.frame),Bi.frame>=rM){rM+=Gi.autoSleep||120;var l=un._first;if((!l||!l._ts)&&Gi.autoSleep&&Bi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Bi.sleep()}}},e})(hu);ki(ci.prototype,{_lock:0,_hasPause:0,_forcing:0});var GN=function(e,t,i,s,l,u,f){var d=new Si(this._pt,e,t,0,1,f1,null,l),h=0,m=0,_,v,y,T,M,S,x,D;for(d.b=i,d.e=s,i+="",s+="",(x=~s.indexOf("random("))&&(s=uu(s)),u&&(D=[i,s],u(D,e,t),i=D[0],s=D[1]),v=i.match(Hm)||[];_=Hm.exec(s);)T=_[0],M=s.substring(h,_.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),T!==v[m++]&&(S=parseFloat(v[m-1])||0,d._pt={_next:d._pt,p:M||m===1?M:",",s:S,c:T.charAt(1)==="="?ml(S,T)-S:parseFloat(T)-S,m:y&&y<4?Math.round:0},h=Hm.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=f,(Db.test(s)||x)&&(d.e=0),this._pt=d,d},G_=function(e,t,i,s,l,u,f,d,h,m){pn(s)&&(s=s(l||0,e,u));var _=e[t],v=i!=="get"?i:pn(_)?h?e[t.indexOf("set")||!pn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,y=pn(_)?h?WN:c1:k_,T;if(In(s)&&(~s.indexOf("random(")&&(s=uu(s)),s.charAt(1)==="="&&(T=ml(v,s)+($n(v)||0),(T||T===0)&&(s=T))),!m||v!==s||n_)return!isNaN(v*s)&&s!==""?(T=new Si(this._pt,e,t,+v||0,s-(v||0),typeof _=="boolean"?YN:u1,0,y),h&&(T.fp=h),f&&T.modifier(f,this,e),this._pt=T):(!_&&!(t in e)&&z_(t,s),GN.call(this,e,t,v,s,y,d||Gi.stringFilter,h))},VN=function(e,t,i,s,l){if(pn(e)&&(e=$c(e,l,t,i,s)),!La(e)||e.style&&e.nodeType||ei(e)||Rb(e))return In(e)?$c(e,l,t,i,s):e;var u={},f;for(f in e)u[f]=$c(e[f],l,t,i,s);return u},s1=function(e,t,i,s,l,u){var f,d,h,m;if(Pi[e]&&(f=new Pi[e]).init(l,f.rawVars?t[e]:VN(t[e],s,l,u,i),i,s,u)!==!1&&(i._pt=d=new Si(i._pt,l,e,0,1,f.render,f,0,f.priority),i!==fl))for(h=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=d;return f},Kr,n_,V_=function r(e,t,i){var s=e.vars,l=s.ease,u=s.startAt,f=s.immediateRender,d=s.lazy,h=s.onUpdate,m=s.runBackwards,_=s.yoyoEase,v=s.keyframes,y=s.autoRevert,T=e._dur,M=e._startAt,S=e._targets,x=e.parent,D=x&&x.data==="nested"?x.vars.targets:S,R=e._overwrite==="auto"&&!N_,A=e.timeline,O,P,z,H,w,U,V,Q,ne,re,de,B,Z;if(A&&(!v||!l)&&(l="none"),e._ease=Ks(l,Rl.ease),e._yEase=_?n1(Ks(_===!0?l:_,Rl.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!A&&!!s.runBackwards,!A||v&&!s.stagger){if(Q=S[0]?Ys(S[0]).harness:0,B=Q&&s[Q.prop],O=Ch(s,I_),M&&(M._zTime<0&&M.progress(1),t<0&&m&&f&&!y?M.render(-1,!0):M.revert(m&&T?dh:gN),M._lazy=0),u){if(ss(e._startAt=wn.set(S,ki({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&xi(d),startAt:null,delay:0,onUpdate:h&&function(){return Fi(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qn||!f&&!y)&&e._startAt.revert(dh),f&&T&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(m&&T&&!M){if(t&&(f=!1),z=ki({overwrite:!1,data:"isFromStart",lazy:f&&!M&&xi(d),immediateRender:f,stagger:0,parent:x},O),B&&(z[Q.prop]=B),ss(e._startAt=wn.set(S,z)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qn?e._startAt.revert(dh):e._startAt.render(-1,!0)),e._zTime=t,!f)r(e._startAt,en,en);else if(!t)return}for(e._pt=e._ptCache=0,d=T&&xi(d)||d&&!T,P=0;P<S.length;P++){if(w=S[P],V=w._gsap||F_(S)[P]._gsap,e._ptLookup[P]=re={},Kg[V.id]&&ns.length&&Rh(),de=D===S?P:D.indexOf(w),Q&&(ne=new Q).init(w,B||O,e,de,D)!==!1&&(e._pt=H=new Si(e._pt,w,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(W){re[W]=H}),ne.priority&&(U=1)),!Q||B)for(z in O)Pi[z]&&(ne=s1(z,O,e,de,w,D))?ne.priority&&(U=1):re[z]=H=G_.call(e,w,z,"get",O[z],de,D,0,s.stringFilter);e._op&&e._op[P]&&e.kill(w,e._op[P]),R&&e._pt&&(Kr=e,un.killTweensOf(w,re,e.globalTime(t)),Z=!e.parent,Kr=0),e._pt&&d&&(Kg[V.id]=1)}U&&h1(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Z,v&&t<=0&&A.render(na,!0,!0)},kN=function(e,t,i,s,l,u,f,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],m,_,v,y;if(!h)for(h=e._ptCache[t]=[],v=e._ptLookup,y=e._targets.length;y--;){if(m=v[y][t],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==t&&m.fp!==t;)m=m._next;if(!m)return n_=1,e.vars[t]="+=0",V_(e,f),n_=0,d?lu(t+" not eligible for reset"):1;h.push(m)}for(y=h.length;y--;)_=h[y],m=_._pt||_,m.s=(s||s===0)&&!l?s:m.s+(s||0)+u*m.c,m.c=i-m.s,_.e&&(_.e=xn(i)+$n(_.e)),_.b&&(_.b=m.s+$n(_.b))},XN=function(e,t){var i=e[0]?Ys(e[0]).harness:0,s=i&&i.aliases,l,u,f,d;if(!s)return t;l=Cl({},t);for(u in s)if(u in l)for(d=s[u].split(","),f=d.length;f--;)l[d[f]]=l[u];return l},jN=function(e,t,i,s){var l=t.ease||s||"power1.inOut",u,f;if(ei(t))f=i[e]||(i[e]=[]),t.forEach(function(d,h){return f.push({t:h/(t.length-1)*100,v:d,e:l})});else for(u in t)f=i[u]||(i[u]=[]),u==="ease"||f.push({t:parseFloat(e),v:t[u],e:l})},$c=function(e,t,i,s,l){return pn(e)?e.call(t,i,s,l):In(e)&&~e.indexOf("random(")?uu(e):e},o1=B_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",l1={};yi(o1+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return l1[r]=1});var wn=(function(r){Ab(e,r);function e(i,s,l,u){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=r.call(this,u?s:Qc(s))||this;var d=f.vars,h=d.duration,m=d.delay,_=d.immediateRender,v=d.stagger,y=d.overwrite,T=d.keyframes,M=d.defaults,S=d.scrollTrigger,x=d.yoyoEase,D=s.parent||un,R=(ei(i)||Rb(i)?hr(i[0]):"length"in s)?[i]:ia(i),A,O,P,z,H,w,U,V;if(f._targets=R.length?F_(R):lu("GSAP target "+i+" not found. https://gsap.com",!Gi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,T||v||rh(h)||rh(m)){if(s=f.vars,A=f.timeline=new ci({data:"nested",defaults:M||{},targets:D&&D.data==="nested"?D.vars.targets:R}),A.kill(),A.parent=A._dp=rr(f),A._start=0,v||rh(h)||rh(m)){if(z=R.length,U=v&&Wb(v),La(v))for(H in v)~o1.indexOf(H)&&(V||(V={}),V[H]=v[H]);for(O=0;O<z;O++)P=Ch(s,l1),P.stagger=0,x&&(P.yoyoEase=x),V&&Cl(P,V),w=R[O],P.duration=+$c(h,rr(f),O,w,R),P.delay=(+$c(m,rr(f),O,w,R)||0)-f._delay,!v&&z===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),A.to(w,P,U?U(O,w,R):0),A._ease=Ut.none;A.duration()?h=m=0:f.timeline=0}else if(T){Qc(ki(A.vars.defaults,{ease:"none"})),A._ease=Ks(T.ease||s.ease||"none");var Q=0,ne,re,de;if(ei(T))T.forEach(function(B){return A.to(R,B,">")}),A.duration();else{P={};for(H in T)H==="ease"||H==="easeEach"||jN(H,T[H],P,T.easeEach);for(H in P)for(ne=P[H].sort(function(B,Z){return B.t-Z.t}),Q=0,O=0;O<ne.length;O++)re=ne[O],de={ease:re.e,duration:(re.t-(O?ne[O-1].t:0))/100*h},de[H]=re.v,A.to(R,de,Q),Q+=de.duration;A.duration()<h&&A.to({},{duration:h-A.duration()})}}h||f.duration(h=A.duration())}else f.timeline=0;return y===!0&&!N_&&(Kr=rr(f),un.killTweensOf(R),Kr=0),Aa(D,rr(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(_||!h&&!T&&f._start===Rn(D._time)&&xi(_)&&MN(rr(f))&&D.data!=="nested")&&(f._tTime=-en,f.render(Math.max(0,-m)||0)),S&&Vb(rr(f),S),f}var t=e.prototype;return t.render=function(s,l,u){var f=this._time,d=this._tDur,h=this._dur,m=s<0,_=s>d-en&&!m?d:s<en?0:s,v,y,T,M,S,x,D,R,A;if(!h)EN(this,s,l,u);else if(_!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=_,R=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+s,l,u);if(v=Rn(_%M),_===d?(T=this._repeat,v=h):(S=Rn(_/M),T=~~S,T&&T===S?(v=h,T--):v>h&&(v=h)),x=this._yoyo&&T&1,x&&(A=this._yEase,v=h-v),S=Dl(this._tTime,M),v===f&&!u&&this._initted&&T===S)return this._tTime=_,this;T!==S&&(R&&this._yEase&&i1(R,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=u=1,this.render(Rn(M*T),!0).invalidate()._lock=0))}if(!this._initted){if(kb(this,m?s:v,u,l,_))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&T!==S))return this;if(h!==this._dur)return this.render(s,l,u)}if(this._tTime=_,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=D=(A||this._ease)(v/h),this._from&&(this.ratio=D=1-D),!f&&_&&!l&&!S&&(Fi(this,"onStart"),this._tTime!==_))return this;for(y=this._pt;y;)y.r(D,y.d),y=y._next;R&&R.render(s<0?s:R._dur*R._ease(v/this._dur),l,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&Qg(this,s,l,u),Fi(this,"onUpdate")),this._repeat&&T!==S&&this.vars.onRepeat&&!l&&this.parent&&Fi(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(m&&!this._onUpdate&&Qg(this,s,!0,!0),(s||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&ss(this,1),!l&&!(m&&!f)&&(_||f||x)&&(Fi(this,_===d?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,l,u,f,d){fu||Bi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||V_(this,h),m=this._ease(h/this._dur),kN(this,s,l,u,f,m,h,d)?this.resetTo(s,l,u,f,1):(kh(this,0),this.parent||Hb(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?kc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!qn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Kr&&Kr.vars.overwrite!==!0)._first||kc(this),this.parent&&u!==this.timeline.totalDuration()&&Ul(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,d=s?ia(s):f,h=this._ptLookup,m=this._pt,_,v,y,T,M,S,x;if((!l||l==="all")&&yN(f,d))return l==="all"&&(this._pt=0),kc(this);for(_=this._op=this._op||[],l!=="all"&&(In(l)&&(M={},yi(l,function(D){return M[D]=1}),l=M),l=XN(f,l)),x=f.length;x--;)if(~d.indexOf(f[x])){v=h[x],l==="all"?(_[x]=l,T=v,y={}):(y=_[x]=_[x]||{},T=l);for(M in T)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Gh(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&m&&kc(this),this},e.to=function(s,l){return new e(s,l,arguments[2])},e.from=function(s,l){return Jc(1,arguments)},e.delayedCall=function(s,l,u,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},e.fromTo=function(s,l,u){return Jc(2,arguments)},e.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(s,l)},e.killTweensOf=function(s,l,u){return un.killTweensOf(s,l,u)},e})(hu);ki(wn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yi("staggerTo,staggerFrom,staggerFromTo",function(r){wn[r]=function(){var e=new ci,t=$g.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var k_=function(e,t,i){return e[t]=i},c1=function(e,t,i){return e[t](i)},WN=function(e,t,i,s){return e[t](s.fp,i)},qN=function(e,t,i){return e.setAttribute(t,i)},X_=function(e,t){return pn(e[t])?c1:L_(e[t])&&e.setAttribute?qN:k_},u1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},YN=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},f1=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},j_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ZN=function(e,t,i,s){for(var l=this._pt,u;l;)u=l._next,l.p===s&&l.modifier(e,t,i),l=u},KN=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Gh(this,t,"_pt"):t.dep||(i=1),t=s;return!i},QN=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},h1=function(e){for(var t=e._pt,i,s,l,u;t;){for(i=t._next,s=l;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:l=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=l},Si=(function(){function r(t,i,s,l,u,f,d,h,m){this.t=i,this.s=l,this.c=u,this.p=s,this.r=f||u1,this.d=d||this,this.set=h||k_,this.pr=m||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,s,l){this.mSet=this.mSet||this.set,this.set=QN,this.m=i,this.mt=l,this.tween=s},r})();yi(B_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return I_[r]=1});Vi.TweenMax=Vi.TweenLite=wn;Vi.TimelineLite=Vi.TimelineMax=ci;un=new ci({sortChildren:!1,defaults:Rl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gi.stringFilter=t1;var Qs=[],mh={},JN=[],fM=0,$N=0,jm=function(e){return(mh[e]||JN).map(function(t){return t()})},i_=function(){var e=Date.now(),t=[];e-fM>2&&(jm("matchMediaInit"),Qs.forEach(function(i){var s=i.queries,l=i.conditions,u,f,d,h;for(f in s)u=Ea.matchMedia(s[f]).matches,u&&(d=1),u!==l[f]&&(l[f]=u,h=1);h&&(i.revert(),d&&t.push(i))}),jm("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),fM=e,jm("matchMedia"))},d1=(function(){function r(t,i){this.selector=i&&e_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=$N++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,s,l){pn(i)&&(l=s,s=i,i=pn);var u=this,f=function(){var h=cn,m=u.selector,_;return h&&h!==u&&h.data.push(u),l&&(u.selector=e_(l)),cn=u,_=s.apply(u,arguments),pn(_)&&u._r.push(_),cn=h,u.selector=m,u.isReverted=!1,_};return u.last=f,i===pn?f(u,function(d){return u.add(null,d)}):i?u[i]=f:f},e.ignore=function(i){var s=cn;cn=null,i(this),cn=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof r?i.push.apply(i,s.getTweens()):s instanceof wn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var l=this;if(i?(function(){for(var f=l.getTweens(),d=l.data.length,h;d--;)h=l.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,_){return _.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),d=l.data.length;d--;)h=l.data[d],h instanceof ci?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof wn)&&h.revert&&h.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var u=Qs.length;u--;)Qs[u].id===this.id&&Qs.splice(u,1)},e.revert=function(i){this.kill(i||{})},r})(),eL=(function(){function r(t){this.contexts=[],this.scope=t,cn&&cn.data.push(this)}var e=r.prototype;return e.add=function(i,s,l){La(i)||(i={matches:i});var u=new d1(0,l||this.scope),f=u.conditions={},d,h,m;cn&&!u.selector&&(u.selector=cn.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?m=1:(d=Ea.matchMedia(i[h]),d&&(Qs.indexOf(u)<0&&Qs.push(u),(f[h]=d.matches)&&(m=1),d.addListener?d.addListener(i_):d.addEventListener("change",i_)));return m&&s(u,function(_){return u.add(null,_)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},r})(),Uh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return Jb(s)})},timeline:function(e){return new ci(e)},getTweensOf:function(e,t){return un.getTweensOf(e,t)},getProperty:function(e,t,i,s){In(e)&&(e=ia(e)[0]);var l=Ys(e||{}).get,u=i?Fb:Bb;return i==="native"&&(i=""),e&&(t?u((Pi[t]&&Pi[t].get||l)(e,t,i,s)):function(f,d,h){return u((Pi[f]&&Pi[f].get||l)(e,f,d,h))})},quickSetter:function(e,t,i){if(e=ia(e),e.length>1){var s=e.map(function(m){return bi.quickSetter(m,t,i)}),l=s.length;return function(m){for(var _=l;_--;)s[_](m)}}e=e[0]||{};var u=Pi[t],f=Ys(e),d=f.harness&&(f.harness.aliases||{})[t]||t,h=u?function(m){var _=new u;fl._pt=0,_.init(e,i?m+i:m,fl,0,[e]),_.render(1,_),fl._pt&&j_(1,fl)}:f.set(e,d);return u?h:function(m){return h(e,d,i?m+i:m,f,1)}},quickTo:function(e,t,i){var s,l=bi.to(e,ki((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,m){return l.resetTo(t,d,h,m)};return u.tween=l,u},isTweening:function(e){return un.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ks(e.ease,Rl.ease)),sM(Rl,e||{})},config:function(e){return sM(Gi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,l=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Pi[f]&&!Vi[f]&&lu(t+" effect requires "+f+" plugin.")}),Gm[t]=function(f,d,h){return i(ia(f),ki(d||{},l),h)},u&&(ci.prototype[t]=function(f,d,h){return this.add(Gm[t](f,La(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){Ut[e]=Ks(t)},parseEase:function(e,t){return arguments.length?Ks(e,t):Ut},getById:function(e){return un.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ci(e),s,l;for(i.smoothChildTiming=xi(e.smoothChildTiming),un.remove(i),i._dp=0,i._time=i._tTime=un._time,s=un._first;s;)l=s._next,(t||!(!s._dur&&s instanceof wn&&s.vars.onComplete===s._targets[0]))&&Aa(i,s,s._start-s._delay),s=l;return Aa(un,i,0),i},context:function(e,t){return e?new d1(e,t):cn},matchMedia:function(e){return new eL(e)},matchMediaRefresh:function(){return Qs.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||i_()},addEventListener:function(e,t){var i=mh[e]||(mh[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=mh[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:NN,wrapYoyo:LN,distribute:Wb,random:Yb,snap:qb,normalize:UN,getUnit:$n,clamp:wN,splitColor:$b,toArray:ia,selector:e_,mapRange:Kb,pipe:CN,unitize:DN,interpolate:ON,shuffle:jb},install:Lb,effects:Gm,ticker:Bi,updateRoot:ci.updateRoot,plugins:Pi,globalTimeline:un,core:{PropTween:Si,globals:Ob,Tween:wn,Timeline:ci,Animation:hu,getCache:Ys,_removeLinkedListItem:Gh,reverting:function(){return qn},context:function(e){return e&&cn&&(cn.data.push(e),e._ctx=cn),cn},suppressOverwrites:function(e){return N_=e}}};yi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Uh[r]=wn[r]});Bi.add(ci.updateRoot);fl=Uh.to({},{duration:0});var tL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},nL=function(e,t){var i=e._targets,s,l,u;for(s in t)for(l=i.length;l--;)u=e._ptLookup[l][s],u&&(u=u.d)&&(u._pt&&(u=tL(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[l],s))},Wm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,l,u){u._onInit=function(f){var d,h;if(In(l)&&(d={},yi(l,function(m){return d[m]=1}),l=d),t){d={};for(h in l)d[h]=t(l[h]);l=d}nL(f,l)}}}},bi=Uh.registerPlugin({name:"attr",init:function(e,t,i,s,l){var u,f,d;this.tween=i;for(u in t)d=e.getAttribute(u)||"",f=this.add(e,"setAttribute",(d||0)+"",t[u],s,l,0,0,u),f.op=u,f.b=d,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)qn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Wm("roundProps",t_),Wm("modifiers"),Wm("snap",qb))||Uh;wn.version=ci.version=bi.version="3.13.0";Nb=1;O_()&&Nl();Ut.Power0;Ut.Power1;Ut.Power2;Ut.Power3;Ut.Power4;Ut.Linear;Ut.Quad;Ut.Cubic;Ut.Quart;Ut.Quint;Ut.Strong;Ut.Elastic;Ut.Back;Ut.SteppedEase;Ut.Bounce;Ut.Sine;Ut.Expo;Ut.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hM,Qr,gl,W_,Vs,dM,q_,iL=function(){return typeof window<"u"},dr={},Bs=180/Math.PI,_l=Math.PI/180,il=Math.atan2,pM=1e8,Y_=/([A-Z])/g,aL=/(left|right|width|margin|padding|x)/i,rL=/[\s,\(]\S/,Ra={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},a_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},p1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},m1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cL=function(e,t,i){return e.style[t]=i},uL=function(e,t,i){return e.style.setProperty(t,i)},fL=function(e,t,i){return e._gsap[t]=i},hL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},dL=function(e,t,i,s,l){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(l,u)},pL=function(e,t,i,s,l){var u=e._gsap;u[t]=i,u.renderTransform(l,u)},fn="transform",Mi=fn+"Origin",mL=function r(e,t){var i=this,s=this.target,l=s.style,u=s._gsap;if(e in dr&&l){if(this.tfm=this.tfm||{},e!=="transform")e=Ra[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return i.tfm[f]=sr(s,f)}):this.tfm[e]=u.x?u[e]:sr(s,e),e===Mi&&(this.tfm.zOrigin=u.zOrigin);else return Ra.transform.split(",").forEach(function(f){return r.call(i,f,t)});if(this.props.indexOf(fn)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Mi,t,"")),e=fn}(l||t)&&this.props.push(e,t,l[e])},g1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gL=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,l,u;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?t[e[l]](e[l+2]):t[e[l]]=e[l+2]:e[l+2]?i[e[l]]=e[l+2]:i.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(Y_,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),l=q_(),(!l||!l.isStart)&&!i[fn]&&(g1(i),s.zOrigin&&i[Mi]&&(i[Mi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},_1=function(e,t){var i={target:e,props:[],revert:gL,save:mL};return e._gsap||bi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},v1,r_=function(e,t){var i=Qr.createElementNS?Qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qr.createElement(e);return i&&i.style?i:Qr.createElement(e)},aa=function r(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Y_,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&r(e,Ll(t)||t,1)||""},mM="O,Moz,ms,Ms,Webkit".split(","),Ll=function(e,t,i){var s=t||Vs,l=s.style,u=5;if(e in l&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(mM[u]+e in l););return u<0?null:(u===3?"ms":u>=0?mM[u]:"")+e},s_=function(){iL()&&window.document&&(hM=window,Qr=hM.document,gl=Qr.documentElement,Vs=r_("div")||{style:{}},r_("div"),fn=Ll(fn),Mi=fn+"Origin",Vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",v1=!!Ll("perspective"),q_=bi.core.reverting,W_=1)},gM=function(e){var t=e.ownerSVGElement,i=r_("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),l;s.style.display="block",i.appendChild(s),gl.appendChild(i);try{l=s.getBBox()}catch{}return i.removeChild(s),gl.removeChild(i),l},_M=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},x1=function(e){var t,i;try{t=e.getBBox()}catch{t=gM(e),i=1}return t&&(t.width||t.height)||i||(t=gM(e)),t&&!t.width&&!t.x&&!t.y?{x:+_M(e,["x","cx","x1"])||0,y:+_M(e,["y","cy","y1"])||0,width:0,height:0}:t},y1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&x1(e))},$s=function(e,t){if(t){var i=e.style,s;t in dr&&t!==Mi&&(t=fn),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(Y_,"-$1").toLowerCase())):i.removeAttribute(t)}},Jr=function(e,t,i,s,l,u){var f=new Si(e._pt,t,i,0,1,u?m1:p1);return e._pt=f,f.b=s,f.e=l,e._props.push(i),f},vM={deg:1,rad:1,turn:1},_L={grid:1,flex:1},os=function r(e,t,i,s){var l=parseFloat(i)||0,u=(i+"").trim().substr((l+"").length)||"px",f=Vs.style,d=aL.test(t),h=e.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(d?"Width":"Height"),_=100,v=s==="px",y=s==="%",T,M,S,x;if(s===u||!l||vM[s]||vM[u])return l;if(u!=="px"&&!v&&(l=r(e,t,i,"px")),x=e.getCTM&&y1(e),(y||u==="%")&&(dr[t]||~t.indexOf("adius")))return T=x?e.getBBox()[d?"width":"height"]:e[m],xn(y?l/T*_:l/100*T);if(f[d?"width":"height"]=_+(v?u:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Qr||!M.appendChild)&&(M=Qr.body),S=M._gsap,S&&y&&S.width&&d&&S.time===Bi.time&&!S.uncache)return xn(l/S.width*_);if(y&&(t==="height"||t==="width")){var D=e.style[t];e.style[t]=_+s,T=e[m],D?e.style[t]=D:$s(e,t)}else(y||u==="%")&&!_L[aa(M,"display")]&&(f.position=aa(e,"position")),M===e&&(f.position="static"),M.appendChild(Vs),T=Vs[m],M.removeChild(Vs),f.position="absolute";return d&&y&&(S=Ys(M),S.time=Bi.time,S.width=M[m]),xn(v?T*l/_:T&&l?_/T*l:0)},sr=function(e,t,i,s){var l;return W_||s_(),t in Ra&&t!=="transform"&&(t=Ra[t],~t.indexOf(",")&&(t=t.split(",")[0])),dr[t]&&t!=="transform"?(l=pu(e,s),l=t!=="transformOrigin"?l[t]:l.svg?l.origin:Lh(aa(e,Mi))+" "+l.zOrigin+"px"):(l=e.style[t],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Nh[t]&&Nh[t](e,t,i)||aa(e,t)||zb(e,t)||(t==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?os(e,t,l,i)+i:l},vL=function(e,t,i,s){if(!i||i==="none"){var l=Ll(t,e,1),u=l&&aa(e,l,1);u&&u!==i?(t=l,i=u):t==="borderColor"&&(i=aa(e,"borderTopColor"))}var f=new Si(this._pt,e.style,t,0,1,f1),d=0,h=0,m,_,v,y,T,M,S,x,D,R,A,O;if(f.b=i,f.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=aa(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=aa(e,t)||s,M?e.style[t]=M:$s(e,t)),m=[i,s],t1(m),i=m[0],s=m[1],v=i.match(ul)||[],O=s.match(ul)||[],O.length){for(;_=ul.exec(s);)S=_[0],D=s.substring(d,_.index),T?T=(T+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(T=1),S!==(M=v[h++]||"")&&(y=parseFloat(M)||0,A=M.substr((y+"").length),S.charAt(1)==="="&&(S=ml(y,S)+A),x=parseFloat(S),R=S.substr((x+"").length),d=ul.lastIndex-R.length,R||(R=R||Gi.units[t]||A,d===s.length&&(s+=R,f.e+=R)),A!==R&&(y=os(e,t,M,R)||0),f._pt={_next:f._pt,p:D||h===1?D:",",s:y,c:x-y,m:T&&T<4||t==="zIndex"?Math.round:0});f.c=d<s.length?s.substring(d,s.length):""}else f.r=t==="display"&&s==="none"?m1:p1;return Db.test(s)&&(f.e=0),this._pt=f,f},xM={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xL=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=xM[i]||i,t[1]=xM[s]||s,t.join(" ")},yL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,l=t.u,u=i._gsap,f,d,h;if(l==="all"||l===!0)s.cssText="",d=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],dr[f]&&(d=1,f=f==="transformOrigin"?Mi:fn),$s(i,f);d&&($s(i,fn),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",pu(i,1),u.uncache=1,g1(s)))}},Nh={clearProps:function(e,t,i,s,l){if(l.data!=="isFromStart"){var u=e._pt=new Si(e._pt,t,i,0,0,yL);return u.u=s,u.pr=-10,u.tween=l,e._props.push(i),1}}},du=[1,0,0,1,0,0],S1={},M1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yM=function(e){var t=aa(e,fn);return M1(t)?du:t.substr(7).match(Cb).map(xn)},Z_=function(e,t){var i=e._gsap||Ys(e),s=e.style,l=yM(e),u,f,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?du:l):(l===du&&!e.offsetParent&&e!==gl&&!i.svg&&(d=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,f=e.nextElementSibling,gl.appendChild(e)),l=yM(e),d?s.display=d:$s(e,"display"),h&&(f?u.insertBefore(e,f):u?u.appendChild(e):gl.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},o_=function(e,t,i,s,l,u){var f=e._gsap,d=l||Z_(e,!0),h=f.xOrigin||0,m=f.yOrigin||0,_=f.xOffset||0,v=f.yOffset||0,y=d[0],T=d[1],M=d[2],S=d[3],x=d[4],D=d[5],R=t.split(" "),A=parseFloat(R[0])||0,O=parseFloat(R[1])||0,P,z,H,w;i?d!==du&&(z=y*S-T*M)&&(H=A*(S/z)+O*(-M/z)+(M*D-S*x)/z,w=A*(-T/z)+O*(y/z)-(y*D-T*x)/z,A=H,O=w):(P=x1(e),A=P.x+(~R[0].indexOf("%")?A/100*P.width:A),O=P.y+(~(R[1]||R[0]).indexOf("%")?O/100*P.height:O)),s||s!==!1&&f.smooth?(x=A-h,D=O-m,f.xOffset=_+(x*y+D*M)-x,f.yOffset=v+(x*T+D*S)-D):f.xOffset=f.yOffset=0,f.xOrigin=A,f.yOrigin=O,f.smooth=!!s,f.origin=t,f.originIsAbsolute=!!i,e.style[Mi]="0px 0px",u&&(Jr(u,f,"xOrigin",h,A),Jr(u,f,"yOrigin",m,O),Jr(u,f,"xOffset",_,f.xOffset),Jr(u,f,"yOffset",v,f.yOffset)),e.setAttribute("data-svg-origin",A+" "+O)},pu=function(e,t){var i=e._gsap||new r1(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,l=i.scaleX<0,u="px",f="deg",d=getComputedStyle(e),h=aa(e,Mi)||"0",m,_,v,y,T,M,S,x,D,R,A,O,P,z,H,w,U,V,Q,ne,re,de,B,Z,W,ye,be,F,ie,Me,Ee,De;return m=_=v=M=S=x=D=R=A=0,y=T=1,i.svg=!!(e.getCTM&&y1(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[fn]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[fn]!=="none"?d[fn]:"")),s.scale=s.rotate=s.translate="none"),z=Z_(e,i.svg),i.svg&&(i.uncache?(W=e.getBBox(),h=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),o_(e,Z||h,!!Z||i.originIsAbsolute,i.smooth!==!1,z)),O=i.xOrigin||0,P=i.yOrigin||0,z!==du&&(V=z[0],Q=z[1],ne=z[2],re=z[3],m=de=z[4],_=B=z[5],z.length===6?(y=Math.sqrt(V*V+Q*Q),T=Math.sqrt(re*re+ne*ne),M=V||Q?il(Q,V)*Bs:0,D=ne||re?il(ne,re)*Bs+M:0,D&&(T*=Math.abs(Math.cos(D*_l))),i.svg&&(m-=O-(O*V+P*ne),_-=P-(O*Q+P*re))):(De=z[6],Me=z[7],be=z[8],F=z[9],ie=z[10],Ee=z[11],m=z[12],_=z[13],v=z[14],H=il(De,ie),S=H*Bs,H&&(w=Math.cos(-H),U=Math.sin(-H),Z=de*w+be*U,W=B*w+F*U,ye=De*w+ie*U,be=de*-U+be*w,F=B*-U+F*w,ie=De*-U+ie*w,Ee=Me*-U+Ee*w,de=Z,B=W,De=ye),H=il(-ne,ie),x=H*Bs,H&&(w=Math.cos(-H),U=Math.sin(-H),Z=V*w-be*U,W=Q*w-F*U,ye=ne*w-ie*U,Ee=re*U+Ee*w,V=Z,Q=W,ne=ye),H=il(Q,V),M=H*Bs,H&&(w=Math.cos(H),U=Math.sin(H),Z=V*w+Q*U,W=de*w+B*U,Q=Q*w-V*U,B=B*w-de*U,V=Z,de=W),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=xn(Math.sqrt(V*V+Q*Q+ne*ne)),T=xn(Math.sqrt(B*B+De*De)),H=il(de,B),D=Math.abs(H)>2e-4?H*Bs:0,A=Ee?1/(Ee<0?-Ee:Ee):0),i.svg&&(Z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!M1(aa(e,fn)),Z&&e.setAttribute("transform",Z))),Math.abs(D)>90&&Math.abs(D)<270&&(l?(y*=-1,D+=M<=0?180:-180,M+=M<=0?180:-180):(T*=-1,D+=D<=0?180:-180)),t=t||i.uncache,i.x=m-((i.xPercent=m&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-m)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=_-((i.yPercent=_&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=v+u,i.scaleX=xn(y),i.scaleY=xn(T),i.rotation=xn(M)+f,i.rotationX=xn(S)+f,i.rotationY=xn(x)+f,i.skewX=D+f,i.skewY=R+f,i.transformPerspective=A+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[Mi]=Lh(h)),i.xOffset=i.yOffset=0,i.force3D=Gi.force3D,i.renderTransform=i.svg?ML:v1?b1:SL,i.uncache=0,i},Lh=function(e){return(e=e.split(" "))[0]+" "+e[1]},qm=function(e,t,i){var s=$n(t);return xn(parseFloat(t)+parseFloat(os(e,"x",i+"px",s)))+s},SL=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,b1(e,t)},Os="0deg",Hc="0px",Ps=") ",b1=function(e,t){var i=t||this,s=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.z,h=i.rotation,m=i.rotationY,_=i.rotationX,v=i.skewX,y=i.skewY,T=i.scaleX,M=i.scaleY,S=i.transformPerspective,x=i.force3D,D=i.target,R=i.zOrigin,A="",O=x==="auto"&&e&&e!==1||x===!0;if(R&&(_!==Os||m!==Os)){var P=parseFloat(m)*_l,z=Math.sin(P),H=Math.cos(P),w;P=parseFloat(_)*_l,w=Math.cos(P),u=qm(D,u,z*w*-R),f=qm(D,f,-Math.sin(P)*-R),d=qm(D,d,H*w*-R+R)}S!==Hc&&(A+="perspective("+S+Ps),(s||l)&&(A+="translate("+s+"%, "+l+"%) "),(O||u!==Hc||f!==Hc||d!==Hc)&&(A+=d!==Hc||O?"translate3d("+u+", "+f+", "+d+") ":"translate("+u+", "+f+Ps),h!==Os&&(A+="rotate("+h+Ps),m!==Os&&(A+="rotateY("+m+Ps),_!==Os&&(A+="rotateX("+_+Ps),(v!==Os||y!==Os)&&(A+="skew("+v+", "+y+Ps),(T!==1||M!==1)&&(A+="scale("+T+", "+M+Ps),D.style[fn]=A||"translate(0, 0)"},ML=function(e,t){var i=t||this,s=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.rotation,h=i.skewX,m=i.skewY,_=i.scaleX,v=i.scaleY,y=i.target,T=i.xOrigin,M=i.yOrigin,S=i.xOffset,x=i.yOffset,D=i.forceCSS,R=parseFloat(u),A=parseFloat(f),O,P,z,H,w;d=parseFloat(d),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,d+=m),d||h?(d*=_l,h*=_l,O=Math.cos(d)*_,P=Math.sin(d)*_,z=Math.sin(d-h)*-v,H=Math.cos(d-h)*v,h&&(m*=_l,w=Math.tan(h-m),w=Math.sqrt(1+w*w),z*=w,H*=w,m&&(w=Math.tan(m),w=Math.sqrt(1+w*w),O*=w,P*=w)),O=xn(O),P=xn(P),z=xn(z),H=xn(H)):(O=_,H=v,P=z=0),(R&&!~(u+"").indexOf("px")||A&&!~(f+"").indexOf("px"))&&(R=os(y,"x",u,"px"),A=os(y,"y",f,"px")),(T||M||S||x)&&(R=xn(R+T-(T*O+M*z)+S),A=xn(A+M-(T*P+M*H)+x)),(s||l)&&(w=y.getBBox(),R=xn(R+s/100*w.width),A=xn(A+l/100*w.height)),w="matrix("+O+","+P+","+z+","+H+","+R+","+A+")",y.setAttribute("transform",w),D&&(y.style[fn]=w)},bL=function(e,t,i,s,l){var u=360,f=In(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?Bs:1),h=d-s,m=s+h+"deg",_,v;return f&&(_=l.split("_")[1],_==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),_==="cw"&&h<0?h=(h+u*pM)%u-~~(h/u)*u:_==="ccw"&&h>0&&(h=(h-u*pM)%u-~~(h/u)*u)),e._pt=v=new Si(e._pt,t,i,s,h,sL),v.e=m,v.u="deg",e._props.push(i),v},SM=function(e,t){for(var i in t)e[i]=t[i];return e},EL=function(e,t,i){var s=SM({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=i.style,f,d,h,m,_,v,y,T;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[fn]=t,f=pu(i,1),$s(i,fn),i.setAttribute("transform",h)):(h=getComputedStyle(i)[fn],u[fn]=t,f=pu(i,1),u[fn]=h);for(d in dr)h=s[d],m=f[d],h!==m&&l.indexOf(d)<0&&(y=$n(h),T=$n(m),_=y!==T?os(i,d,h,T):parseFloat(h),v=parseFloat(m),e._pt=new Si(e._pt,f,d,_,v-_,a_),e._pt.u=T||0,e._props.push(d));SM(f,s)};yi("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",s="Bottom",l="Left",u=(e<3?[t,i,s,l]:[t+l,t+i,s+i,s+l]).map(function(f){return e<2?r+f:"border"+f+r});Nh[e>1?"border"+r:r]=function(f,d,h,m,_){var v,y;if(arguments.length<4)return v=u.map(function(T){return sr(f,T,h)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(m+"").split(" "),y={},u.forEach(function(T,M){return y[T]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,y,_)}});var E1={name:"css",register:s_,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,l){var u=this._props,f=e.style,d=i.vars.startAt,h,m,_,v,y,T,M,S,x,D,R,A,O,P,z,H;W_||s_(),this.styles=this.styles||_1(e),H=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(m=t[M],!(Pi[M]&&s1(M,t,i,s,e,l)))){if(y=typeof m,T=Nh[M],y==="function"&&(m=m.call(i,s,e,l),y=typeof m),y==="string"&&~m.indexOf("random(")&&(m=uu(m)),T)T(this,e,M,m,i)&&(z=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),m+="",is.lastIndex=0,is.test(h)||(S=$n(h),x=$n(m)),x?S!==x&&(h=os(e,M,h,x)+x):S&&(m+=S),this.add(f,"setProperty",h,m,s,l,0,0,M),u.push(M),H.push(M,0,f[M]);else if(y!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(i,s,e,l):d[M],In(h)&&~h.indexOf("random(")&&(h=uu(h)),$n(h+"")||h==="auto"||(h+=Gi.units[M]||$n(sr(e,M))||""),(h+"").charAt(1)==="="&&(h=sr(e,M))):h=sr(e,M),v=parseFloat(h),D=y==="string"&&m.charAt(1)==="="&&m.substr(0,2),D&&(m=m.substr(2)),_=parseFloat(m),M in Ra&&(M==="autoAlpha"&&(v===1&&sr(e,"visibility")==="hidden"&&_&&(v=0),H.push("visibility",0,f.visibility),Jr(this,f,"visibility",v?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=Ra[M],~M.indexOf(",")&&(M=M.split(",")[0]))),R=M in dr,R){if(this.styles.save(M),y==="string"&&m.substring(0,6)==="var(--"&&(m=aa(e,m.substring(4,m.indexOf(")"))),_=parseFloat(m)),A||(O=e._gsap,O.renderTransform&&!t.parseTransform||pu(e,t.parseTransform),P=t.smoothOrigin!==!1&&O.smooth,A=this._pt=new Si(this._pt,f,fn,0,1,O.renderTransform,O,0,-1),A.dep=1),M==="scale")this._pt=new Si(this._pt,O,"scaleY",O.scaleY,(D?ml(O.scaleY,D+_):_)-O.scaleY||0,a_),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){H.push(Mi,0,f[Mi]),m=xL(m),O.svg?o_(e,m,0,P,0,this):(x=parseFloat(m.split(" ")[2])||0,x!==O.zOrigin&&Jr(this,O,"zOrigin",O.zOrigin,x),Jr(this,f,M,Lh(h),Lh(m)));continue}else if(M==="svgOrigin"){o_(e,m,1,P,0,this);continue}else if(M in S1){bL(this,O,M,v,D?ml(v,D+m):m);continue}else if(M==="smoothOrigin"){Jr(this,O,"smooth",O.smooth,m);continue}else if(M==="force3D"){O[M]=m;continue}else if(M==="transform"){EL(this,m,e);continue}}else M in f||(M=Ll(M)||M);if(R||(_||_===0)&&(v||v===0)&&!rL.test(m)&&M in f)S=(h+"").substr((v+"").length),_||(_=0),x=$n(m)||(M in Gi.units?Gi.units[M]:S),S!==x&&(v=os(e,M,h,x)),this._pt=new Si(this._pt,R?O:f,M,v,(D?ml(v,D+_):_)-v,!R&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?lL:a_),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=oL);else if(M in f)vL.call(this,e,M,h,D?D+m:m);else if(M in e)this.add(e,M,h||e[M],D?D+m:m,s,l);else if(M!=="parseTransform"){z_(M,m);continue}R||(M in f?H.push(M,0,f[M]):typeof e[M]=="function"?H.push(M,2,e[M]()):H.push(M,1,h||e[M])),u.push(M)}}z&&h1(this)},render:function(e,t){if(t.tween._time||!q_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:sr,aliases:Ra,getSetter:function(e,t,i){var s=Ra[t];return s&&s.indexOf(",")<0&&(t=s),t in dr&&t!==Mi&&(e._gsap.x||sr(e,"x"))?i&&dM===i?t==="scale"?hL:fL:(dM=i||{})&&(t==="scale"?dL:pL):e.style&&!L_(e.style[t])?cL:~t.indexOf("-")?uL:X_(e,t)},core:{_removeProperty:$s,_getMatrix:Z_}};bi.utils.checkPrefix=Ll;bi.core.getStyleSaver=_1;(function(r,e,t,i){var s=yi(r+","+e+","+t,function(l){dr[l]=1});yi(e,function(l){Gi.units[l]="deg",S1[l]=1}),Ra[s[13]]=r+","+e,yi(i,function(l){var u=l.split(":");Ra[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gi.units[r]="px"});bi.registerPlugin(E1);var T1=bi.registerPlugin(E1)||bi;T1.core.Tween;T1.registerPlugin(Na);var li,ks,vl,xl,yl,Sl,Xs,or,js,Wr,Ws,Ml,Lt,A1,w1,R1,C1,D1,U1,l_,N1,L1,O1,c_,gh,P1,z1;class TL{constructor(e){Zn(this,Lt);Zn(this,li);Zn(this,ks);Zn(this,vl);Zn(this,xl);Zn(this,yl);Zn(this,Sl);Zn(this,Xs);Zn(this,or);Zn(this,js);Zn(this,Wr);Zn(this,Ws);Zn(this,Ml);Xn(this,Sl,0),Xn(this,Xs,new hb),Xn(this,or,{elapsed:0,delta:0}),Xn(this,js,!1),Xn(this,Wr,!1),Xn(this,Ws,vn(this,Lt,D1).bind(this)),Xn(this,Ml,vn(this,Lt,O1).bind(this)),this.size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0},this.render=vn(this,Lt,P1).bind(this),this.onBeforeRender=()=>{},this.onAfterRender=()=>{},this.onAfterResize=()=>{},this.isDisposed=!1,Xn(this,li,{...e}),vn(this,Lt,A1).call(this),vn(this,Lt,w1).call(this),vn(this,Lt,R1).call(this),this.resize(),vn(this,Lt,C1).call(this)}resize(){let e,t;St(this,li).size instanceof Object?(e=St(this,li).size.width,t=St(this,li).size.height):St(this,li).size==="parent"&&this.canvas.parentNode?(e=this.canvas.parentNode.offsetWidth,t=this.canvas.parentNode.offsetHeight):(e=window.innerWidth,t=window.innerHeight),this.size.width=e,this.size.height=t,this.size.ratio=e/t,vn(this,Lt,U1).call(this),vn(this,Lt,N1).call(this),this.onAfterResize(this.size)}updateWorldSize(){if(this.camera.isPerspectiveCamera){const e=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(e/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else if(this.camera.isOrthographicCamera){const e=this.camera;this.size.wHeight=e.top-e.bottom,this.size.wWidth=e.right-e.left}}get postprocessing(){return St(this,ks)}set postprocessing(e){Xn(this,ks,e),this.render=e.render.bind(e)}clear(){this.scene.traverse(e=>{e.isMesh&&typeof e.material=="object"&&e.material!==null&&(Object.keys(e.material).forEach(t=>{const i=e.material[t];i&&typeof i=="object"&&typeof i.dispose=="function"&&i.dispose()}),e.material.dispose(),e.geometry.dispose())}),this.scene.clear()}dispose(){var e;vn(this,Lt,z1).call(this),vn(this,Lt,gh).call(this),this.clear(),(e=St(this,ks))==null||e.dispose(),this.renderer.dispose(),this.isDisposed=!0}}li=new WeakMap,ks=new WeakMap,vl=new WeakMap,xl=new WeakMap,yl=new WeakMap,Sl=new WeakMap,Xs=new WeakMap,or=new WeakMap,js=new WeakMap,Wr=new WeakMap,Ws=new WeakMap,Ml=new WeakMap,Lt=new WeakSet,A1=function(){this.camera=new zi,this.cameraFov=this.camera.fov},w1=function(){this.scene=new Mh},R1=function(){if(St(this,li).canvas)this.canvas=St(this,li).canvas;else if(St(this,li).id){const t=document.getElementById(St(this,li).id);t instanceof HTMLCanvasElement?this.canvas=t:console.error("Three: Missing canvas or id parameter")}else console.error("Three: Missing canvas or id parameter");this.canvas.style.display="block";const e={canvas:this.canvas,powerPreference:"high-performance",...St(this,li).rendererOptions??{}};this.renderer=new vb(e),this.renderer.outputColorSpace=Oi},C1=function(){St(this,li).size instanceof Object||(window.addEventListener("resize",St(this,Ws)),St(this,li).size==="parent"&&this.canvas.parentNode&&(Xn(this,vl,new ResizeObserver(St(this,Ws))),St(this,vl).observe(this.canvas.parentNode))),Xn(this,xl,new IntersectionObserver(vn(this,Lt,L1).bind(this),{root:null,rootMargin:"0px",threshold:0})),St(this,xl).observe(this.canvas),document.addEventListener("visibilitychange",St(this,Ml))},D1=function(){St(this,yl)&&clearTimeout(St(this,yl)),Xn(this,yl,window.setTimeout(this.resize.bind(this),100))},U1=function(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?vn(this,Lt,l_).call(this,this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?vn(this,Lt,l_).call(this,this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()},l_=function(e){const i=Math.tan(sl.degToRad(this.cameraFov/2))/(this.camera.aspect/e);this.camera.fov=2*sl.radToDeg(Math.atan(i))},N1=function(){var t;this.renderer.setSize(this.size.width,this.size.height),(t=St(this,ks))==null||t.setSize(this.size.width,this.size.height);let e=window.devicePixelRatio;this.maxPixelRatio&&e>this.maxPixelRatio?e=this.maxPixelRatio:this.minPixelRatio&&e<this.minPixelRatio&&(e=this.minPixelRatio),this.renderer.setPixelRatio(e),this.size.pixelRatio=e},L1=function(e){Xn(this,js,e[0].isIntersecting),St(this,js)?vn(this,Lt,c_).call(this):vn(this,Lt,gh).call(this)},O1=function(){St(this,js)&&(document.hidden?vn(this,Lt,gh).call(this):vn(this,Lt,c_).call(this))},c_=function(){if(St(this,Wr))return;const e=()=>{Xn(this,Sl,requestAnimationFrame(e)),St(this,or).delta=St(this,Xs).getDelta(),St(this,or).elapsed+=St(this,or).delta,this.onBeforeRender(St(this,or)),this.render(),this.onAfterRender(St(this,or))};Xn(this,Wr,!0),St(this,Xs).start(),e()},gh=function(){St(this,Wr)&&(cancelAnimationFrame(St(this,Sl)),Xn(this,Wr,!1),St(this,Xs).stop())},P1=function(){this.renderer.render(this.scene,this.camera)},z1=function(){var e,t;window.removeEventListener("resize",St(this,Ws)),(e=St(this,vl))==null||e.disconnect(),(t=St(this,xl))==null||t.disconnect(),document.removeEventListener("visibilitychange",St(this,Ml))};var Oh,I1;class AL{constructor(e){Zn(this,Oh);this.center=new Y,this.config=e,this.positionData=new Float32Array(3*e.count).fill(0),this.velocityData=new Float32Array(3*e.count).fill(0),this.sizeData=new Float32Array(e.count).fill(1),this.center=new Y,vn(this,Oh,I1).call(this),this.setSizes()}setSizes(){const{config:e,sizeData:t}=this;t[0]=e.size0;for(let i=1;i<e.count;i++)t[i]=sl.randFloat(e.minSize,e.maxSize)}update(e){const{config:t,center:i,positionData:s,sizeData:l,velocityData:u}=this;let f=0;t.controlSphere0&&(f=1,new Y().fromArray(s,0).lerp(i,.1).toArray(s,0),new Y(0,0,0).toArray(u,0));for(let d=f;d<t.count;d++){const h=3*d,m=new Y().fromArray(s,h),_=new Y().fromArray(u,h);_.y-=e.delta*t.gravity*l[d],_.multiplyScalar(t.friction),_.clampLength(0,t.maxVelocity),m.add(_),m.toArray(s,h),_.toArray(u,h)}for(let d=f;d<t.count;d++){const h=3*d,m=new Y().fromArray(s,h),_=new Y().fromArray(u,h),v=l[d];for(let T=d+1;T<t.count;T++){const M=3*T,S=new Y().fromArray(s,M),x=new Y().fromArray(u,M),D=new Y().copy(S).sub(m),R=D.length(),A=v+l[T];if(R<A){const O=A-R,P=D.normalize().multiplyScalar(.5*O),z=P.clone().multiplyScalar(Math.max(_.length(),1));m.sub(P),_.sub(z),m.toArray(s,h),_.toArray(u,h),S.add(P),x.add(P.clone().multiplyScalar(Math.max(x.length(),1))),S.toArray(s,M),x.toArray(u,M)}}if(t.controlSphere0){const T=new Y().copy(new Y().fromArray(s,0)).sub(m),M=T.length(),S=v+l[0];if(M<S){const x=T.normalize().multiplyScalar(S-M),D=x.clone().multiplyScalar(Math.max(_.length(),2));m.sub(x),_.sub(D)}}Math.abs(m.x)+v>t.maxX&&(m.x=Math.sign(m.x)*(t.maxX-v),_.x=-_.x*t.wallBounce),t.gravity===0?Math.abs(m.y)+v>t.maxY&&(m.y=Math.sign(m.y)*(t.maxY-v),_.y=-_.y*t.wallBounce):m.y-v<-t.maxY&&(m.y=-t.maxY+v,_.y=-_.y*t.wallBounce);const y=Math.max(t.maxZ,t.maxSize);Math.abs(m.z)+v>y&&(m.z=Math.sign(m.z)*(t.maxZ-v),_.z=-_.z*t.wallBounce),m.toArray(s,h),_.toArray(u,h)}}}Oh=new WeakSet,I1=function(){const{config:e,positionData:t}=this;this.center.toArray(t,0);for(let i=1;i<e.count;i++){const s=3*i;t[s]=sl.randFloatSpread(2*e.maxX),t[s+1]=sl.randFloatSpread(2*e.maxY),t[s+2]=sl.randFloatSpread(2*e.maxZ)}};class wL extends $2{constructor(e){super(e),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines={USE_UV:""},this.onBeforeCompile=t=>{Object.assign(t.uniforms,this.uniforms),t.fragmentShader=`
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
        `+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("void main() {",`
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
        `);const i=_t.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",i),this.onBeforeCompile2&&this.onBeforeCompile2(t)}}}const B1={count:200,colors:[8138002,16096779,16770229],ambientColor:725536,ambientIntensity:.9,lightIntensity:140,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1.2,size0:1,gravity:.5,friction:.98,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0},al=new Wn;let Ym=!1;const Ca=new rt,Da=new Map;function RL(r){const e={position:new rt,nPosition:new rt,hover:!1,touching:!1,onEnter:()=>{},onMove:()=>{},onClick:()=>{},onLeave:()=>{},...r};return Da.has(r.domElement)||(Da.set(r.domElement,e),Ym||(document.body.addEventListener("pointermove",MM),document.body.addEventListener("pointerleave",AM),document.body.addEventListener("click",TM),document.body.addEventListener("touchstart",bM,{passive:!1}),document.body.addEventListener("touchmove",EM,{passive:!1}),document.body.addEventListener("touchend",sh,{passive:!1}),document.body.addEventListener("touchcancel",sh,{passive:!1}),Ym=!0)),e.dispose=()=>{Da.delete(r.domElement),Da.size===0&&(document.body.removeEventListener("pointermove",MM),document.body.removeEventListener("pointerleave",AM),document.body.removeEventListener("click",TM),document.body.removeEventListener("touchstart",bM),document.body.removeEventListener("touchmove",EM),document.body.removeEventListener("touchend",sh),document.body.removeEventListener("touchcancel",sh),Ym=!1)},e}function MM(r){Ca.set(r.clientX,r.clientY),CL()}function CL(){for(const[r,e]of Da){const t=r.getBoundingClientRect();jh(t)?(Xh(e,t),e.hover||(e.hover=!0,e.onEnter(e)),e.onMove(e)):e.hover&&!e.touching&&(e.hover=!1,e.onLeave(e))}}function bM(r){if(r.touches.length>0){r.preventDefault(),Ca.set(r.touches[0].clientX,r.touches[0].clientY);for(const[e,t]of Da){const i=e.getBoundingClientRect();jh(i)&&(t.touching=!0,Xh(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t))}}}function EM(r){if(r.touches.length>0){r.preventDefault(),Ca.set(r.touches[0].clientX,r.touches[0].clientY);for(const[e,t]of Da){const i=e.getBoundingClientRect();Xh(t,i),jh(i)?(t.hover||(t.hover=!0,t.touching=!0,t.onEnter(t)),t.onMove(t)):t.hover&&t.touching&&t.onMove(t)}}}function sh(){for(const[,r]of Da)r.touching&&(r.touching=!1,r.hover&&(r.hover=!1,r.onLeave(r)))}function TM(r){Ca.set(r.clientX,r.clientY);for(const[e,t]of Da){const i=e.getBoundingClientRect();Xh(t,i),jh(i)&&t.onClick(t)}}function AM(){for(const r of Da.values())r.hover&&(r.hover=!1,r.onLeave(r))}function Xh(r,e){r.position.set(Ca.x-e.left,Ca.y-e.top),r.nPosition.set(r.position.x/e.width*2-1,-r.position.y/e.height*2+1)}function jh(r){return Ca.x>=r.left&&Ca.x<=r.left+r.width&&Ca.y>=r.top&&Ca.y<=r.top+r.height}new Y;new Y;new Y;new Y;new Y;new Y;new Y;new Y;new Y;new Y;var Ph,F1;class DL extends ob{constructor(t,i={}){const s={...B1,...i},l=new aN,f=new Vg(t).fromScene(l).texture,d=new D_,h=new wL({envMap:f,...s.materialParams});h.envMapRotation.x=-Math.PI/2;super(d,h,s.count);Zn(this,Ph);this.config=s,this.physics=new AL(s),vn(this,Ph,F1).call(this),this.setColors(s.colors)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(s){let l=s,u=[];return l.forEach(f=>{u.push(new mt(f))}),{setColors:f=>{l=f,u=[],l.forEach(d=>{u.push(new mt(d))})},getColorAt:(f,d=new mt)=>{const m=Math.max(0,Math.min(1,f))*(l.length-1),_=Math.floor(m),v=u[_];if(_>=l.length-1)return v.clone();const y=m-_,T=u[_+1];return d.r=v.r+y*(T.r-v.r),d.g=v.g+y*(T.g-v.g),d.b=v.b+y*(T.b-v.b),d}}})(t);for(let s=0;s<this.count;s++)this.setColorAt(s,i.getColorAt(s/this.count)),s===0&&this.light.color.copy(i.getColorAt(s/this.count));if(!this.instanceColor)return;this.instanceColor.needsUpdate=!0}}update(t){this.physics.update(t);for(let i=0;i<this.count;i++)al.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?al.scale.setScalar(0):al.scale.setScalar(this.physics.sizeData[i]),al.updateMatrix(),this.setMatrixAt(i,al.matrix),i===0&&this.light.position.copy(al.position);this.instanceMatrix.needsUpdate=!0}}Ph=new WeakSet,F1=function(){this.ambientLight=new sR(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new fb(this.config.colors[0],this.config.lightIntensity),this.add(this.light)};function UL(r,e={}){const t=new TL({canvas:r,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let i;t.renderer.toneMapping=VM,t.camera.position.set(0,0,20),t.camera.lookAt(0,0,0),t.cameraMaxAspect=1.5,t.resize(),h(e);const s=new lR,l=new Xr(new Y(0,0,1),0),u=new Y;let f=!1;r.style.touchAction="none",r.style.userSelect="none",r.style.webkitUserSelect="none";const d=RL({domElement:r,onMove(){s.setFromCamera(d.nPosition,t.camera),t.camera.getWorldDirection(l.normal),s.ray.intersectPlane(l,u),i.physics.center.copy(u),i.config.controlSphere0=!0},onLeave(){i.config.controlSphere0=!1}});function h(m){i&&(t.clear(),t.scene.remove(i)),i=new DL(t.renderer,{...B1,...m}),t.scene.add(i)}return t.onBeforeRender=m=>{f||i.update(m)},t.onAfterResize=m=>{i.config.maxX=m.wWidth/2,i.config.maxY=m.wHeight/2},{three:t,get spheres(){return i},setCount(m){h({...i.config,count:m})},togglePause(){f=!f},dispose(){var m;(m=d.dispose)==null||m.call(d),t.dispose()}}}const NL=({className:r="",followCursor:e=!0,...t})=>{const i=Oe.useRef(null),s=Oe.useRef(null);return Oe.useEffect(()=>{const l=i.current;if(l)return s.current=UL(l,{followCursor:e,...t}),()=>{s.current&&s.current.dispose()}},[]),L.jsx("canvas",{className:r,ref:i,style:{width:"100%",height:"100%"}})},LL=()=>L.jsxs("main",{className:"min-h-screen bg-slate-950 text-slate-100",children:[L.jsxs("section",{className:"relative h-[58vh] min-h-[420px] w-full overflow-hidden",children:[L.jsx("video",{className:"absolute inset-0 w-full h-full object-cover",src:"./imggallery/Video by chefdenizsezer [DLWUUKQReM0].mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:"./imggallery/340490753_536729521725498_7803232779063458043_n.jpg"}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/55 to-slate-950/80"}),L.jsx("div",{className:"relative z-10 container mx-auto px-6 h-full flex items-center",children:L.jsxs("div",{className:"max-w-3xl",children:[L.jsx("h1",{className:"text-5xl md:text-6xl font-serif text-white drop-shadow mb-3",children:"The Anatolian Table"}),L.jsx("p",{className:"text-amber-200 text-lg md:text-xl",children:"Michelin-starred craft, Anatolian soul. Private dining and bespoke events by Chef Deniz Sezer."})]})})]}),L.jsx("section",{className:"-mt-10 md:-mt-12 relative z-10",children:L.jsx("div",{className:"container mx-auto px-6",children:L.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6",children:[L.jsxs("div",{className:"rounded-xl bg-slate-900/70 ring-1 ring-white/5 p-6",children:[L.jsxs("div",{className:"text-3xl md:text-4xl font-semibold text-amber-300",children:["10+",L.jsx("span",{className:"text-base md:text-lg align-top ml-1 text-slate-300",children:"years"})]}),L.jsx("div",{className:"text-slate-400 mt-1",children:"of fine-dining experience"})]}),L.jsxs("div",{className:"rounded-xl bg-slate-900/70 ring-1 ring-white/5 p-6",children:[L.jsxs("div",{className:"text-3xl md:text-4xl font-semibold text-amber-300",children:["150+",L.jsx("span",{className:"text-base md:text-lg align-top ml-1 text-slate-300",children:"events"})]}),L.jsx("div",{className:"text-slate-400 mt-1",children:"private dinners & celebrations"})]}),L.jsxs("div",{className:"rounded-xl bg-slate-900/70 ring-1 ring-white/5 p-6",children:[L.jsxs("div",{className:"text-3xl md:text-4xl font-semibold text-amber-300",children:["12",L.jsx("span",{className:"text-base md:text-lg align-top ml-1 text-slate-300",children:"cities"})]}),L.jsx("div",{className:"text-slate-400 mt-1",children:"served across TR, EU, and US"})]})]})})}),L.jsx("section",{className:"py-16 md:py-24",children:L.jsxs("div",{className:"container mx-auto px-6 grid md:grid-cols-2 gap-12",children:[L.jsxs("div",{children:[L.jsx("h2",{className:"text-4xl md:text-5xl font-serif mb-6 text-white",children:"Our mission"}),L.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["At ",L.jsx("em",{children:"The Anatolian Table"}),", our mission is to unite people through unforgettable culinary experiences that celebrate both tradition and innovation. We craft personalized menus with the finest seasonal ingredients and global influences, honoring diverse culinary traditions."]}),L.jsx("p",{className:"text-slate-300 leading-relaxed mt-4",children:"Every course is designed to spark conversation, joy, and connection — creating lasting memories around the table."})]}),L.jsxs("div",{children:[L.jsx("h2",{className:"text-4xl md:text-5xl font-serif mb-6 text-white",children:"Our vision"}),L.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Our vision is to transform dining into an art form — blending culinary creativity with personalized service. We bring Michelin-starred expertise to intimate settings, elevating each gathering into an extraordinary occasion."}),L.jsx("p",{className:"text-slate-300 leading-relaxed mt-4",children:"By merging bold Turkish flavors with modern technique, we craft moments that resonate beyond the plate."})]})]})}),L.jsxs("section",{className:"relative",style:{minHeight:320},children:[L.jsx("div",{className:"absolute inset-0",children:L.jsx(NL,{count:160,gravity:.5,friction:.98,wallBounce:.95,followCursor:!0,colors:[8138002,16096779,16770229],ambientColor:1120295,ambientIntensity:.9,lightIntensity:140})}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/80 to-slate-950"}),L.jsxs("div",{className:"relative container mx-auto px-6 py-16",children:[L.jsx("h3",{className:"text-3xl md:text-4xl font-serif text-white",children:"Elevate your experience"}),L.jsx("p",{className:"text-slate-300 max-w-3xl mt-3",children:"Bespoke menus, refined service and immersive dining crafted for private residences, celebrations and executive events."})]})]}),L.jsxs("section",{className:"relative mt-6",children:[L.jsx("img",{src:"./imggallery/340490753_536729521725498_7803232779063458043_n.jpg",alt:"Chef Deniz Sezer",className:"w-full h-[520px] object-cover"}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"}),L.jsx("div",{className:"absolute bottom-0 left-0 right-0",children:L.jsxs("div",{className:"container mx-auto px-6 pb-10",children:[L.jsx("h3",{className:"text-3xl md:text-4xl font-serif text-white",children:"Deniz Sezer — Founder / Chef"}),L.jsx("p",{className:"text-slate-200 leading-relaxed mt-2 max-w-4xl",children:"Deniz grew up in Tire, Izmir. His culinary path spans Michelin-starred restaurants across Turkey, Europe and the United States. Today he brings that craft to the Bay Area as a private chef, blending Anatolian roots with modern technique. Every experience is tailored — from seasonal tasting menus to immersive, themed events — with sourcing, service and cleanup handled end-to-end."})]})})]})]}),OL=[{key:"modern-fine-dining",title:"3 to 5‑Course Modern Fine Dining",badge:"Popular",img:"./imggallery/299220748_486389583312196_2918701892607691025_n.jpg",blurb:"An unforgettable evening crafted to your tastes — seasonal ingredients, refined techniques and elegant plating.",includes:["Private Chef Deniz Sezer","All ingredients & shopping","On‑site cooking, service & cleanup"]},{key:"romantic-dinner",title:"Romantic Dinner with a Private Chef",img:"./imggallery/351088026_944585160151459_2706183776673791694_n.jpg",blurb:"A 5‑course fine‑dining experience tailored for two. Celebrate with a bouquet of red roses and chilled French champagne.",includes:["Private Chef, bespoke 5‑course menu","Bouquet of red roses & French champagne","Full post‑dinner cleanup"]},{key:"chefs-choice",title:"Chef's Choice / Premium Degustation",img:"./imggallery/318235503_536005258138307_7765495500139449825_n.jpg",blurb:"A curated 7‑course dégustation spotlighting signature dishes and inventive pairings. Designed around your preferences.",includes:["Seasonal tasting progression","Ingredient sourcing & menu design","Service staff available on request"]},{key:"family-style",title:"Family Style Share Plates",img:"./imggallery/299622273_867508887542151_6159437778816378211_n.jpg",blurb:"Seven gourmet dishes served family‑style. A convivial, customizable feast with something for every guest.",includes:["Private chef & all ingredients","Share‑plate menu tailored to you","Service & cleanup included"]},{key:"blindfolded",title:"Blindfolded Dinner — Dine in the Dark",img:"./imggallery/316119619_6422508417765998_6768193420321574199_n.jpg",blurb:"A sensory 5‑course journey guided by your chef. Explore textures and flavors without sight — unforgettable.",includes:["Custom 5‑course tasting","Your own blindfolds provided","Shopping, cooking, service & cleanup"]}],PL=["Bespoke menu design tailored to preferences & dietary needs","Premium, locally‑sourced ingredients","On‑site cooking and professional service","Full cleanup — seamless and stress‑free"],zL=[{t:"Inquire",d:"Share your date, location, guest count and any ideas. We’ll quickly confirm availability."},{t:"Design",d:"Collaborative menu design around your tastes, seasonality and any dietary notes."},{t:"Experience",d:"We arrive prepared, cook on‑site and host a polished, relaxed service."},{t:"Wrap‑up",d:"We handle cleanup so your kitchen is spotless when we leave."}],IL=()=>L.jsxs("main",{className:"min-h-screen bg-slate-950 text-slate-100 pt-20 md:pt-24",children:[L.jsx("section",{className:"relative w-full overflow-hidden",children:L.jsxs("div",{className:"relative min-h-[420px] md:h-[54vh]",children:[L.jsx("img",{src:"./imggallery/denizsezeridea.jpeg",alt:"Private Chef Services",className:"absolute inset-0 w-full h-full object-cover"}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950"}),L.jsx("div",{className:"relative z-10 container mx-auto px-6 h-full flex items-end pb-10 pt-20 md:pt-0",children:L.jsxs("div",{className:"max-w-3xl",children:[L.jsx("p",{className:"uppercase tracking-widest text-amber-300/90 text-xs md:text-sm",children:"The Anatolian Table"}),L.jsx("h1",{className:"text-4xl md:text-6xl font-serif text-white drop-shadow",children:"Private Chef Services"}),L.jsx("p",{className:"mt-3 text-amber-100 text-base md:text-xl max-w-2xl",children:"Bespoke private chef experiences tailored to your tastes — Michelin‑trained craft with Anatolian soul."})]})})]})}),L.jsx("section",{className:"py-12 md:py-16",children:L.jsx("div",{className:"container mx-auto px-6",children:L.jsx("div",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-3",children:OL.map(e=>L.jsxs("article",{className:"group bg-slate-900/80 ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-xl",children:[L.jsxs("div",{className:"relative h-48 sm:h-56",children:[L.jsx("img",{src:e.img,alt:e.title,className:"w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"}),e.badge&&L.jsx("span",{className:"absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full",children:e.badge}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent"})]}),L.jsxs("div",{className:"p-6 flex flex-col gap-4",children:[L.jsx("h3",{className:"text-2xl font-serif text-white",children:e.title}),L.jsx("p",{className:"text-slate-300 leading-relaxed",children:e.blurb}),L.jsx("ul",{className:"mt-1 grid gap-2 leading-relaxed",children:e.includes.map(t=>L.jsxs("li",{className:"text-slate-300 flex items-start gap-2",children:[L.jsx("span",{className:"mt-2 h-1.5 w-1.5 rounded-full bg-amber-400"}),L.jsx("span",{children:t})]},t))}),L.jsxs("div",{className:"pt-2 flex items-center justify-between",children:[L.jsx("a",{href:"/#contact",className:"inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-400",children:"Inquire"}),L.jsx("span",{className:"text-sm text-slate-400",children:"Custom‑priced • Minimums apply"})]})]})]},e.key))})})}),L.jsx("section",{className:"pb-10 md:pb-16",children:L.jsxs("div",{className:"container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center",children:[L.jsxs("div",{children:[L.jsx("h2",{className:"text-3xl md:text-4xl font-serif text-white",children:"What’s always included"}),L.jsx("p",{className:"text-slate-300 mt-3 max-w-prose",children:"Michelin‑trained technique with Anatolian warmth. We handle every detail so you can simply enjoy the evening."})]}),L.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:PL.map(e=>L.jsxs("li",{className:"flex items-start gap-3 bg-slate-900/70 ring-1 ring-white/5 rounded-xl p-4",children:[L.jsx("span",{className:"mt-0.5 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0"}),L.jsx("span",{className:"text-slate-300",children:e})]},e))})]})}),L.jsx("section",{className:"pb-12 md:pb-16",children:L.jsx("div",{className:"container mx-auto px-6",children:L.jsxs("div",{className:"rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 md:p-8",children:[L.jsx("h3",{className:"text-2xl md:text-3xl font-serif text-white",children:"How it works"}),L.jsx("div",{className:"mt-6 grid gap-6 md:grid-cols-4",children:zL.map((e,t)=>L.jsxs("div",{className:"flex flex-col gap-1",children:[L.jsxs("div",{className:"flex items-center gap-3 text-amber-300",children:[L.jsx("span",{className:"h-8 w-8 rounded-full bg-amber-500/10 ring-1 ring-amber-400/40 flex items-center justify-center text-sm font-semibold text-amber-300",children:t+1}),L.jsx("h4",{className:"text-lg font-semibold text-white",children:e.t})]}),L.jsx("p",{className:"text-slate-300 pl-11",children:e.d})]},e.t))})]})})}),L.jsx("section",{className:"pb-20",children:L.jsxs("div",{className:"container mx-auto px-6 grid md:grid-cols-3 gap-6",children:[L.jsxs("div",{className:"md:col-span-2 rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 md:p-8",children:[L.jsx("h3",{className:"text-2xl font-semibold text-white",children:"FAQs"}),L.jsxs("div",{className:"mt-4 grid gap-4",children:[L.jsxs("div",{children:[L.jsx("p",{className:"text-white font-medium",children:"How far in advance should we book?"}),L.jsx("p",{className:"text-slate-300",children:"Most events are booked 2–8 weeks ahead. For special dates, inquire early."})]}),L.jsxs("div",{children:[L.jsx("p",{className:"text-white font-medium",children:"Can you accommodate dietary needs?"}),L.jsx("p",{className:"text-slate-300",children:"Absolutely — menus are tailored to allergies and preferences."})]}),L.jsxs("div",{children:[L.jsx("p",{className:"text-white font-medium",children:"Do you bring tableware?"}),L.jsx("p",{className:"text-slate-300",children:"We can advise and coordinate rentals if needed; premium serveware add‑ons available."})]})]})]}),L.jsxs("div",{className:"rounded-2xl bg-slate-900 ring-1 ring-white/10 p-6 md:p-8 flex flex-col gap-3",children:[L.jsx("h4",{className:"text-xl font-semibold text-white",children:"Service area"}),L.jsx("p",{className:"text-slate-300",children:Xg.locations||"San Francisco Bay Area and beyond by arrangement."}),L.jsx("div",{className:"h-px bg-white/10 my-2"}),L.jsx("h4",{className:"text-xl font-semibold text-white",children:"Pricing"}),L.jsxs("p",{className:"text-slate-300",children:["Custom menus typically range from ",L.jsx("span",{className:"text-amber-300 font-medium",children:"$1,500"})," to",L.jsx("span",{className:"text-amber-300 font-medium",children:" $5,000"})," per evening depending on guest count and ingredients."]})]})]})}),L.jsx("section",{className:"pb-24",children:L.jsx("div",{className:"container mx-auto px-6",children:L.jsxs("div",{className:"bg-emerald-900/90 backdrop-blur-sm text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl ring-1 ring-white/10",children:[L.jsxs("div",{children:[L.jsx("h4",{className:"text-3xl font-serif mb-2",children:"Ready to plan your evening?"}),L.jsx("p",{className:"text-slate-100 max-w-2xl",children:"Share a few details and we’ll tailor a bespoke proposal — menu, logistics and timeline handled for you."})]}),L.jsx("div",{children:L.jsx("a",{href:"/#contact",className:"bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-400",children:"Inquire now"})})]})})})]}),BL=()=>L.jsx(nw,{children:L.jsxs("div",{className:"bg-slate-900 text-neutral-200 antialiased relative",children:[L.jsx(WU,{colors:["#a16207","#1e293b","#020617"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0}}),L.jsxs("div",{className:"relative z-10",children:[L.jsx(cw,{}),L.jsx("main",{children:L.jsxs(ZA,{children:[L.jsx(Gc,{path:"/",element:L.jsxs(L.Fragment,{children:[L.jsx(uw,{}),L.jsx(fw,{}),L.jsx(hw,{}),L.jsx(mw,{}),L.jsx(gw,{})]})}),L.jsx(Gc,{path:"/menu",element:L.jsx(iN,{})}),L.jsx(Gc,{path:"/about",element:L.jsx(LL,{})}),L.jsx(Gc,{path:"/services",element:L.jsx(IL,{})})]})}),L.jsx(_w,{})]})]})}),H1=document.getElementById("root");if(!H1)throw new Error("Could not find root element to mount to");const FL=iA.createRoot(H1);FL.render(L.jsx(f_.StrictMode,{children:L.jsx(BL,{})}));export{L as j,Oe as r};
