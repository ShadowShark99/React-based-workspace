(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();function wf(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var sl={exports:{}},xi={},al={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function Mm(){if(Td)return X;Td=1;var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),I=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),L=Symbol.iterator;function z(w){return w===null||typeof w!="object"?null:(w=L&&w[L]||w["@@iterator"],typeof w=="function"?w:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,q={};function Q(w,k,K){this.props=w,this.context=k,this.refs=q,this.updater=K||V}Q.prototype.isReactComponent={},Q.prototype.setState=function(w,k){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,k,"setState")},Q.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function me(){}me.prototype=Q.prototype;function ge(w,k,K){this.props=w,this.context=k,this.refs=q,this.updater=K||V}var xe=ge.prototype=new me;xe.constructor=ge,ie(xe,Q.prototype),xe.isPureReactComponent=!0;var _e=Array.isArray,be=Object.prototype.hasOwnProperty,Se={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function Le(w,k,K){var Y,Z={},J=null,se=null;if(k!=null)for(Y in k.ref!==void 0&&(se=k.ref),k.key!==void 0&&(J=""+k.key),k)be.call(k,Y)&&!ve.hasOwnProperty(Y)&&(Z[Y]=k[Y]);var te=arguments.length-2;if(te===1)Z.children=K;else if(1<te){for(var le=Array(te),$e=0;$e<te;$e++)le[$e]=arguments[$e+2];Z.children=le}if(w&&w.defaultProps)for(Y in te=w.defaultProps,te)Z[Y]===void 0&&(Z[Y]=te[Y]);return{$$typeof:o,type:w,key:J,ref:se,props:Z,_owner:Se.current}}function Xe(w,k){return{$$typeof:o,type:w.type,key:k,ref:w.ref,props:w.props,_owner:w._owner}}function Je(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function Et(w){var k={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(K){return k[K]})}var at=/\/+/g;function Ge(w,k){return typeof w=="object"&&w!==null&&w.key!=null?Et(""+w.key):k.toString(36)}function Ze(w,k,K,Y,Z){var J=typeof w;(J==="undefined"||J==="boolean")&&(w=null);var se=!1;if(w===null)se=!0;else switch(J){case"string":case"number":se=!0;break;case"object":switch(w.$$typeof){case o:case n:se=!0}}if(se)return se=w,Z=Z(se),w=Y===""?"."+Ge(se,0):Y,_e(Z)?(K="",w!=null&&(K=w.replace(at,"$&/")+"/"),Ze(Z,k,K,"",function($e){return $e})):Z!=null&&(Je(Z)&&(Z=Xe(Z,K+(!Z.key||se&&se.key===Z.key?"":(""+Z.key).replace(at,"$&/")+"/")+w)),k.push(Z)),1;if(se=0,Y=Y===""?".":Y+":",_e(w))for(var te=0;te<w.length;te++){J=w[te];var le=Y+Ge(J,te);se+=Ze(J,k,K,le,Z)}else if(le=z(w),typeof le=="function")for(w=le.call(w),te=0;!(J=w.next()).done;)J=J.value,le=Y+Ge(J,te++),se+=Ze(J,k,K,le,Z);else if(J==="object")throw k=String(w),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return se}function De(w,k,K){if(w==null)return w;var Y=[],Z=0;return Ze(w,Y,"","",function(J){return k.call(K,J,Z++)}),Y}function Me(w){if(w._status===-1){var k=w._result;k=k(),k.then(function(K){(w._status===0||w._status===-1)&&(w._status=1,w._result=K)},function(K){(w._status===0||w._status===-1)&&(w._status=2,w._result=K)}),w._status===-1&&(w._status=0,w._result=k)}if(w._status===1)return w._result.default;throw w._result}var fe={current:null},N={transition:null},b={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:N,ReactCurrentOwner:Se};function D(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:De,forEach:function(w,k,K){De(w,function(){k.apply(this,arguments)},K)},count:function(w){var k=0;return De(w,function(){k++}),k},toArray:function(w){return De(w,function(k){return k})||[]},only:function(w){if(!Je(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},X.Component=Q,X.Fragment=i,X.Profiler=c,X.PureComponent=ge,X.StrictMode=l,X.Suspense=m,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b,X.act=D,X.cloneElement=function(w,k,K){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var Y=ie({},w.props),Z=w.key,J=w.ref,se=w._owner;if(k!=null){if(k.ref!==void 0&&(J=k.ref,se=Se.current),k.key!==void 0&&(Z=""+k.key),w.type&&w.type.defaultProps)var te=w.type.defaultProps;for(le in k)be.call(k,le)&&!ve.hasOwnProperty(le)&&(Y[le]=k[le]===void 0&&te!==void 0?te[le]:k[le])}var le=arguments.length-2;if(le===1)Y.children=K;else if(1<le){te=Array(le);for(var $e=0;$e<le;$e++)te[$e]=arguments[$e+2];Y.children=te}return{$$typeof:o,type:w.type,key:Z,ref:J,props:Y,_owner:se}},X.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:d,_context:w},w.Consumer=w},X.createElement=Le,X.createFactory=function(w){var k=Le.bind(null,w);return k.type=w,k},X.createRef=function(){return{current:null}},X.forwardRef=function(w){return{$$typeof:v,render:w}},X.isValidElement=Je,X.lazy=function(w){return{$$typeof:O,_payload:{_status:-1,_result:w},_init:Me}},X.memo=function(w,k){return{$$typeof:I,type:w,compare:k===void 0?null:k}},X.startTransition=function(w){var k=N.transition;N.transition={};try{w()}finally{N.transition=k}},X.unstable_act=D,X.useCallback=function(w,k){return fe.current.useCallback(w,k)},X.useContext=function(w){return fe.current.useContext(w)},X.useDebugValue=function(){},X.useDeferredValue=function(w){return fe.current.useDeferredValue(w)},X.useEffect=function(w,k){return fe.current.useEffect(w,k)},X.useId=function(){return fe.current.useId()},X.useImperativeHandle=function(w,k,K){return fe.current.useImperativeHandle(w,k,K)},X.useInsertionEffect=function(w,k){return fe.current.useInsertionEffect(w,k)},X.useLayoutEffect=function(w,k){return fe.current.useLayoutEffect(w,k)},X.useMemo=function(w,k){return fe.current.useMemo(w,k)},X.useReducer=function(w,k,K){return fe.current.useReducer(w,k,K)},X.useRef=function(w){return fe.current.useRef(w)},X.useState=function(w){return fe.current.useState(w)},X.useSyncExternalStore=function(w,k,K){return fe.current.useSyncExternalStore(w,k,K)},X.useTransition=function(){return fe.current.useTransition()},X.version="18.3.1",X}var Cd;function Nl(){return Cd||(Cd=1,al.exports=Mm()),al.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function Um(){if(Pd)return xi;Pd=1;var o=Nl(),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(v,m,I){var O,L={},z=null,V=null;I!==void 0&&(z=""+I),m.key!==void 0&&(z=""+m.key),m.ref!==void 0&&(V=m.ref);for(O in m)l.call(m,O)&&!d.hasOwnProperty(O)&&(L[O]=m[O]);if(v&&v.defaultProps)for(O in m=v.defaultProps,m)L[O]===void 0&&(L[O]=m[O]);return{$$typeof:n,type:v,key:z,ref:V,props:L,_owner:c.current}}return xi.Fragment=i,xi.jsx=h,xi.jsxs=h,xi}var Rd;function Fm(){return Rd||(Rd=1,sl.exports=Um()),sl.exports}var A=Fm(),re=Nl();const Jt=wf(re);var ns={},ll={exports:{}},ot={},ul={exports:{}},cl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function jm(){return Ad||(Ad=1,function(o){function n(N,b){var D=N.length;N.push(b);e:for(;0<D;){var w=D-1>>>1,k=N[w];if(0<c(k,b))N[w]=b,N[D]=k,D=w;else break e}}function i(N){return N.length===0?null:N[0]}function l(N){if(N.length===0)return null;var b=N[0],D=N.pop();if(D!==b){N[0]=D;e:for(var w=0,k=N.length,K=k>>>1;w<K;){var Y=2*(w+1)-1,Z=N[Y],J=Y+1,se=N[J];if(0>c(Z,D))J<k&&0>c(se,Z)?(N[w]=se,N[J]=D,w=J):(N[w]=Z,N[Y]=D,w=Y);else if(J<k&&0>c(se,D))N[w]=se,N[J]=D,w=J;else break e}}return b}function c(N,b){var D=N.sortIndex-b.sortIndex;return D!==0?D:N.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var h=Date,v=h.now();o.unstable_now=function(){return h.now()-v}}var m=[],I=[],O=1,L=null,z=3,V=!1,ie=!1,q=!1,Q=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function xe(N){for(var b=i(I);b!==null;){if(b.callback===null)l(I);else if(b.startTime<=N)l(I),b.sortIndex=b.expirationTime,n(m,b);else break;b=i(I)}}function _e(N){if(q=!1,xe(N),!ie)if(i(m)!==null)ie=!0,Me(be);else{var b=i(I);b!==null&&fe(_e,b.startTime-N)}}function be(N,b){ie=!1,q&&(q=!1,me(Le),Le=-1),V=!0;var D=z;try{for(xe(b),L=i(m);L!==null&&(!(L.expirationTime>b)||N&&!Et());){var w=L.callback;if(typeof w=="function"){L.callback=null,z=L.priorityLevel;var k=w(L.expirationTime<=b);b=o.unstable_now(),typeof k=="function"?L.callback=k:L===i(m)&&l(m),xe(b)}else l(m);L=i(m)}if(L!==null)var K=!0;else{var Y=i(I);Y!==null&&fe(_e,Y.startTime-b),K=!1}return K}finally{L=null,z=D,V=!1}}var Se=!1,ve=null,Le=-1,Xe=5,Je=-1;function Et(){return!(o.unstable_now()-Je<Xe)}function at(){if(ve!==null){var N=o.unstable_now();Je=N;var b=!0;try{b=ve(!0,N)}finally{b?Ge():(Se=!1,ve=null)}}else Se=!1}var Ge;if(typeof ge=="function")Ge=function(){ge(at)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,De=Ze.port2;Ze.port1.onmessage=at,Ge=function(){De.postMessage(null)}}else Ge=function(){Q(at,0)};function Me(N){ve=N,Se||(Se=!0,Ge())}function fe(N,b){Le=Q(function(){N(o.unstable_now())},b)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_continueExecution=function(){ie||V||(ie=!0,Me(be))},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xe=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_getFirstCallbackNode=function(){return i(m)},o.unstable_next=function(N){switch(z){case 1:case 2:case 3:var b=3;break;default:b=z}var D=z;z=b;try{return N()}finally{z=D}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(N,b){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var D=z;z=N;try{return b()}finally{z=D}},o.unstable_scheduleCallback=function(N,b,D){var w=o.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?w+D:w):D=w,N){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=D+k,N={id:O++,callback:b,priorityLevel:N,startTime:D,expirationTime:k,sortIndex:-1},D>w?(N.sortIndex=D,n(I,N),i(m)===null&&N===i(I)&&(q?(me(Le),Le=-1):q=!0,fe(_e,D-w))):(N.sortIndex=k,n(m,N),ie||V||(ie=!0,Me(be))),N},o.unstable_shouldYield=Et,o.unstable_wrapCallback=function(N){var b=z;return function(){var D=z;z=b;try{return N.apply(this,arguments)}finally{z=D}}}}(cl)),cl}var Nd;function zm(){return Nd||(Nd=1,ul.exports=jm()),ul.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function bm(){if(Od)return ot;Od=1;var o=Nl(),n=zm();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function d(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(c[e]=t,e=0;e<t.length;e++)l.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O={},L={};function z(e){return m.call(L,e)?!0:m.call(O,e)?!1:I.test(e)?L[e]=!0:(O[e]=!0,!1)}function V(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ie(e,t,r,s){if(t===null||typeof t>"u"||V(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function q(e,t,r,s,a,u,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=f}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ge(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(me,ge);Q[t]=new q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(me,ge);Q[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(me,ge);Q[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function xe(e,t,r,s){var a=Q.hasOwnProperty(t)?Q[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ie(t,r,a,s)&&(r=null),s||a===null?z(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var _e=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,be=Symbol.for("react.element"),Se=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Le=Symbol.for("react.strict_mode"),Xe=Symbol.for("react.profiler"),Je=Symbol.for("react.provider"),Et=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),N=Symbol.iterator;function b(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,w;function k(e){if(w===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var K=!1;function Y(e,t){if(!e||K)return"";K=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var s=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){s=E}e.call(t.prototype)}else{try{throw Error()}catch(E){s=E}e()}}catch(E){if(E&&s&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),u=s.stack.split(`
`),f=a.length-1,p=u.length-1;1<=f&&0<=p&&a[f]!==u[p];)p--;for(;1<=f&&0<=p;f--,p--)if(a[f]!==u[p]){if(f!==1||p!==1)do if(f--,p--,0>p||a[f]!==u[p]){var g=`
`+a[f].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=f&&0<=p);break}}}finally{K=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?k(e):""}function Z(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case Se:return"Portal";case Xe:return"Profiler";case Le:return"StrictMode";case Ge:return"Suspense";case Ze:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Et:return(e.displayName||"Context")+".Consumer";case Je:return(e._context.displayName||"Context")+".Provider";case at:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}function se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(t);case 8:return t===Le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $e(e){var t=le(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(f){s=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(f){s=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=$e(e))}function Vr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=le(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ln(e,t){var r=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Hr(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=te(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lt(e,t){t=t.checked,t!=null&&xe(e,"checked",t,!1)}function fr(e,t){lt(e,t);var r=te(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ue(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ue(e,t.type,te(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mt(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ue(e,t,r){(t!=="number"||dr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ut=Array.isArray;function Bt(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+te(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function hr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Be(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(i(92));if(ut(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:te(r)}}function un(e,t){var r=te(t.value),s=te(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function bn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function It(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $n(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?It(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cn,Ki=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cn=cn||document.createElement("div"),cn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ss=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){Ss.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Gi(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Wr(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Gi(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var Es=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kr(e,t){if(t){if(Es[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function pr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gr=null;function qr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qr=null,he=null,G=null;function Fe(e){if(e=vi(e)){if(typeof Qr!="function")throw Error(i(280));var t=e.stateNode;t&&(t=vo(t),Qr(e.stateNode,e.type,t))}}function Ie(e){he?G?G.push(e):G=[e]:he=e}function Ot(){if(he){var e=he,t=G;if(G=he=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function dn(e,t){return e(t)}function Kl(){}var Is=!1;function Gl(e,t,r){if(Is)return e(t,r);Is=!0;try{return dn(e,t,r)}finally{Is=!1,(he!==null||G!==null)&&(Kl(),Ot())}}function Yr(e,t){var r=e.stateNode;if(r===null)return null;var s=vo(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(i(231,t,typeof r));return r}var ks=!1;if(v)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ks=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ks=!1}function $h(e,t,r,s,a,u,f,p,g){var E=Array.prototype.slice.call(arguments,3);try{t.apply(r,E)}catch(C){this.onError(C)}}var Jr=!1,qi=null,Qi=!1,Ts=null,Bh={onError:function(e){Jr=!0,qi=e}};function Vh(e,t,r,s,a,u,f,p,g){Jr=!1,qi=null,$h.apply(Bh,arguments)}function Hh(e,t,r,s,a,u,f,p,g){if(Vh.apply(this,arguments),Jr){if(Jr){var E=qi;Jr=!1,qi=null}else throw Error(i(198));Qi||(Qi=!0,Ts=E)}}function Vn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ql(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ql(e){if(Vn(e)!==e)throw Error(i(188))}function Wh(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var u=a.alternate;if(u===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===r)return Ql(a),e;if(u===s)return Ql(a),t;u=u.sibling}throw Error(i(188))}if(r.return!==s.return)r=a,s=u;else{for(var f=!1,p=a.child;p;){if(p===r){f=!0,r=a,s=u;break}if(p===s){f=!0,s=a,r=u;break}p=p.sibling}if(!f){for(p=u.child;p;){if(p===r){f=!0,r=u,s=a;break}if(p===s){f=!0,s=u,r=a;break}p=p.sibling}if(!f)throw Error(i(189))}}if(r.alternate!==s)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?e:t}function Yl(e){return e=Wh(e),e!==null?Xl(e):null}function Xl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xl(e);if(t!==null)return t;e=e.sibling}return null}var Jl=n.unstable_scheduleCallback,Zl=n.unstable_cancelCallback,Kh=n.unstable_shouldYield,Gh=n.unstable_requestPaint,ke=n.unstable_now,qh=n.unstable_getCurrentPriorityLevel,Cs=n.unstable_ImmediatePriority,eu=n.unstable_UserBlockingPriority,Yi=n.unstable_NormalPriority,Qh=n.unstable_LowPriority,tu=n.unstable_IdlePriority,Xi=null,xt=null;function Yh(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Zh,Xh=Math.log,Jh=Math.LN2;function Zh(e){return e>>>=0,e===0?32:31-(Xh(e)/Jh|0)|0}var Ji=64,Zi=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,u=e.pingedLanes,f=r&268435455;if(f!==0){var p=f&~a;p!==0?s=Zr(p):(u&=f,u!==0&&(s=Zr(u)))}else f=r&~a,f!==0?s=Zr(f):u!==0&&(s=Zr(u));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,u=t&-t,a>=u||a===16&&(u&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-kt(t),a=1<<r,s|=e[r],t&=~a;return s}function ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tp(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes;0<u;){var f=31-kt(u),p=1<<f,g=a[f];g===-1?(!(p&r)||p&s)&&(a[f]=ep(p,t)):g<=t&&(e.expiredLanes|=p),u&=~p}}function Ps(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=Ji;return Ji<<=1,!(Ji&4194240)&&(Ji=64),e}function Rs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ei(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=r}function np(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-kt(r),u=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~u}}function As(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-kt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var oe=0;function ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iu,Ns,ou,su,au,Os=!1,to=[],fn=null,hn=null,pn=null,ti=new Map,ni=new Map,mn=[],rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(t.pointerId)}}function ri(e,t,r,s,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:u,targetContainers:[a]},t!==null&&(t=vi(t),t!==null&&Ns(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ip(e,t,r,s,a){switch(t){case"focusin":return fn=ri(fn,e,t,r,s,a),!0;case"dragenter":return hn=ri(hn,e,t,r,s,a),!0;case"mouseover":return pn=ri(pn,e,t,r,s,a),!0;case"pointerover":var u=a.pointerId;return ti.set(u,ri(ti.get(u)||null,e,t,r,s,a)),!0;case"gotpointercapture":return u=a.pointerId,ni.set(u,ri(ni.get(u)||null,e,t,r,s,a)),!0}return!1}function uu(e){var t=Hn(e.target);if(t!==null){var r=Vn(t);if(r!==null){if(t=r.tag,t===13){if(t=ql(r),t!==null){e.blockedOn=t,au(e.priority,function(){ou(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ls(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Gr=s,r.target.dispatchEvent(s),Gr=null}else return t=vi(r),t!==null&&Ns(t),e.blockedOn=r,!1;t.shift()}return!0}function cu(e,t,r){no(e)&&r.delete(t)}function op(){Os=!1,fn!==null&&no(fn)&&(fn=null),hn!==null&&no(hn)&&(hn=null),pn!==null&&no(pn)&&(pn=null),ti.forEach(cu),ni.forEach(cu)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Os||(Os=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,op)))}function oi(e){function t(a){return ii(a,e)}if(0<to.length){ii(to[0],e);for(var r=1;r<to.length;r++){var s=to[r];s.blockedOn===e&&(s.blockedOn=null)}}for(fn!==null&&ii(fn,e),hn!==null&&ii(hn,e),pn!==null&&ii(pn,e),ti.forEach(t),ni.forEach(t),r=0;r<mn.length;r++)s=mn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<mn.length&&(r=mn[0],r.blockedOn===null);)uu(r),r.blockedOn===null&&mn.shift()}var mr=_e.ReactCurrentBatchConfig,ro=!0;function sp(e,t,r,s){var a=oe,u=mr.transition;mr.transition=null;try{oe=1,xs(e,t,r,s)}finally{oe=a,mr.transition=u}}function ap(e,t,r,s){var a=oe,u=mr.transition;mr.transition=null;try{oe=4,xs(e,t,r,s)}finally{oe=a,mr.transition=u}}function xs(e,t,r,s){if(ro){var a=Ls(e,t,r,s);if(a===null)Ys(e,t,s,io,r),lu(e,s);else if(ip(a,e,t,r,s))s.stopPropagation();else if(lu(e,s),t&4&&-1<rp.indexOf(e)){for(;a!==null;){var u=vi(a);if(u!==null&&iu(u),u=Ls(e,t,r,s),u===null&&Ys(e,t,s,io,r),u===a)break;a=u}a!==null&&s.stopPropagation()}else Ys(e,t,s,null,r)}}var io=null;function Ls(e,t,r,s){if(io=null,e=qr(s),e=Hn(e),e!==null)if(t=Vn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ql(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qh()){case Cs:return 1;case eu:return 4;case Yi:case Qh:return 16;case tu:return 536870912;default:return 16}default:return 16}}var gn=null,Ds=null,oo=null;function fu(){if(oo)return oo;var e,t=Ds,r=t.length,s,a="value"in gn?gn.value:gn.textContent,u=a.length;for(e=0;e<r&&t[e]===a[e];e++);var f=r-e;for(s=1;s<=f&&t[r-s]===a[u-s];s++);return oo=a.slice(e,1<s?1-s:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function hu(){return!1}function ct(e){function t(r,s,a,u,f){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(u):u[p]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ao:hu,this.isPropagationStopped=hu,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ms=ct(gr),si=D({},gr,{view:0,detail:0}),lp=ct(si),Us,Fs,ai,lo=D({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(Us=e.screenX-ai.screenX,Fs=e.screenY-ai.screenY):Fs=Us=0,ai=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:Fs}}),pu=ct(lo),up=D({},lo,{dataTransfer:0}),cp=ct(up),dp=D({},si,{relatedTarget:0}),js=ct(dp),fp=D({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),hp=ct(fp),pp=D({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mp=ct(pp),gp=D({},gr,{data:0}),mu=ct(gp),vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wp[e])?!!t[e]:!1}function zs(){return _p}var Sp=D({},si,{key:function(e){if(e.key){var t=vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ep=ct(Sp),Ip=D({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=ct(Ip),kp=D({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),Tp=ct(kp),Cp=D({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pp=ct(Cp),Rp=D({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ap=ct(Rp),Np=[9,13,27,32],bs=v&&"CompositionEvent"in window,li=null;v&&"documentMode"in document&&(li=document.documentMode);var Op=v&&"TextEvent"in window&&!li,vu=v&&(!bs||li&&8<li&&11>=li),yu=" ",wu=!1;function _u(e,t){switch(e){case"keyup":return Np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function xp(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(wu=!0,yu);case"textInput":return e=t.data,e===yu&&wu?null:e;default:return null}}function Lp(e,t){if(vr)return e==="compositionend"||!bs&&_u(e,t)?(e=fu(),oo=Ds=gn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vu&&t.locale!=="ko"?null:t.data;default:return null}}var Dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dp[e.type]:t==="textarea"}function Iu(e,t,r,s){Ie(s),t=po(t,"onChange"),0<t.length&&(r=new Ms("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var ui=null,ci=null;function Mp(e){$u(e,0)}function uo(e){var t=Er(e);if(Vr(t))return e}function Up(e,t){if(e==="change")return t}var ku=!1;if(v){var $s;if(v){var Bs="oninput"in document;if(!Bs){var Tu=document.createElement("div");Tu.setAttribute("oninput","return;"),Bs=typeof Tu.oninput=="function"}$s=Bs}else $s=!1;ku=$s&&(!document.documentMode||9<document.documentMode)}function Cu(){ui&&(ui.detachEvent("onpropertychange",Pu),ci=ui=null)}function Pu(e){if(e.propertyName==="value"&&uo(ci)){var t=[];Iu(t,ci,e,qr(e)),Gl(Mp,t)}}function Fp(e,t,r){e==="focusin"?(Cu(),ui=t,ci=r,ui.attachEvent("onpropertychange",Pu)):e==="focusout"&&Cu()}function jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uo(ci)}function zp(e,t){if(e==="click")return uo(t)}function bp(e,t){if(e==="input"||e==="change")return uo(t)}function $p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:$p;function di(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!m.call(t,a)||!Tt(e[a],t[a]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var r=Ru(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ru(r)}}function Nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=dr();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=dr(e.document)}return t}function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bp(e){var t=Ou(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Nu(r.ownerDocument.documentElement,r)){if(s!==null&&Vs(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,u=Math.min(s.start,a);s=s.end===void 0?u:Math.min(s.end,a),!e.extend&&u>s&&(a=s,s=u,u=a),a=Au(r,u);var f=Au(r,s);a&&f&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),u>s?(e.addRange(t),e.extend(f.node,f.offset)):(t.setEnd(f.node,f.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vp=v&&"documentMode"in document&&11>=document.documentMode,yr=null,Hs=null,fi=null,Ws=!1;function xu(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ws||yr==null||yr!==dr(s)||(s=yr,"selectionStart"in s&&Vs(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),fi&&di(fi,s)||(fi=s,s=po(Hs,"onSelect"),0<s.length&&(t=new Ms("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=yr)))}function co(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var wr={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Ks={},Lu={};v&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function fo(e){if(Ks[e])return Ks[e];if(!wr[e])return e;var t=wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Lu)return Ks[e]=t[r];return e}var Du=fo("animationend"),Mu=fo("animationiteration"),Uu=fo("animationstart"),Fu=fo("transitionend"),ju=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){ju.set(e,t),d(t,[e])}for(var Gs=0;Gs<zu.length;Gs++){var qs=zu[Gs],Hp=qs.toLowerCase(),Wp=qs[0].toUpperCase()+qs.slice(1);vn(Hp,"on"+Wp)}vn(Du,"onAnimationEnd"),vn(Mu,"onAnimationIteration"),vn(Uu,"onAnimationStart"),vn("dblclick","onDoubleClick"),vn("focusin","onFocus"),vn("focusout","onBlur"),vn(Fu,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function bu(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Hh(s,t,void 0,e),e.currentTarget=null}function $u(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var u=void 0;if(t)for(var f=s.length-1;0<=f;f--){var p=s[f],g=p.instance,E=p.currentTarget;if(p=p.listener,g!==u&&a.isPropagationStopped())break e;bu(a,p,E),u=g}else for(f=0;f<s.length;f++){if(p=s[f],g=p.instance,E=p.currentTarget,p=p.listener,g!==u&&a.isPropagationStopped())break e;bu(a,p,E),u=g}}}if(Qi)throw e=Ts,Qi=!1,Ts=null,e}function ce(e,t){var r=t[na];r===void 0&&(r=t[na]=new Set);var s=e+"__bubble";r.has(s)||(Bu(t,e,2,!1),r.add(s))}function Qs(e,t,r){var s=0;t&&(s|=4),Bu(r,e,s,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[ho]){e[ho]=!0,l.forEach(function(r){r!=="selectionchange"&&(Kp.has(r)||Qs(r,!1,e),Qs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,Qs("selectionchange",!1,t))}}function Bu(e,t,r,s){switch(du(t)){case 1:var a=sp;break;case 4:a=ap;break;default:a=xs}r=a.bind(null,t,r,e),a=void 0,!ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ys(e,t,r,s,a){var u=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var f=s.tag;if(f===3||f===4){var p=s.stateNode.containerInfo;if(p===a||p.nodeType===8&&p.parentNode===a)break;if(f===4)for(f=s.return;f!==null;){var g=f.tag;if((g===3||g===4)&&(g=f.stateNode.containerInfo,g===a||g.nodeType===8&&g.parentNode===a))return;f=f.return}for(;p!==null;){if(f=Hn(p),f===null)return;if(g=f.tag,g===5||g===6){s=u=f;continue e}p=p.parentNode}}s=s.return}Gl(function(){var E=u,C=qr(r),P=[];e:{var T=ju.get(e);if(T!==void 0){var x=Ms,U=e;switch(e){case"keypress":if(so(r)===0)break e;case"keydown":case"keyup":x=Ep;break;case"focusin":U="focus",x=js;break;case"focusout":U="blur",x=js;break;case"beforeblur":case"afterblur":x=js;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Tp;break;case Du:case Mu:case Uu:x=hp;break;case Fu:x=Pp;break;case"scroll":x=lp;break;case"wheel":x=Ap;break;case"copy":case"cut":case"paste":x=mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=gu}var F=(t&4)!==0,Te=!F&&e==="scroll",_=F?T!==null?T+"Capture":null:T;F=[];for(var y=E,S;y!==null;){S=y;var R=S.stateNode;if(S.tag===5&&R!==null&&(S=R,_!==null&&(R=Yr(y,_),R!=null&&F.push(mi(y,R,S)))),Te)break;y=y.return}0<F.length&&(T=new x(T,U,null,r,C),P.push({event:T,listeners:F}))}}if(!(t&7)){e:{if(T=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",T&&r!==Gr&&(U=r.relatedTarget||r.fromElement)&&(Hn(U)||U[Ht]))break e;if((x||T)&&(T=C.window===C?C:(T=C.ownerDocument)?T.defaultView||T.parentWindow:window,x?(U=r.relatedTarget||r.toElement,x=E,U=U?Hn(U):null,U!==null&&(Te=Vn(U),U!==Te||U.tag!==5&&U.tag!==6)&&(U=null)):(x=null,U=E),x!==U)){if(F=pu,R="onMouseLeave",_="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(F=gu,R="onPointerLeave",_="onPointerEnter",y="pointer"),Te=x==null?T:Er(x),S=U==null?T:Er(U),T=new F(R,y+"leave",x,r,C),T.target=Te,T.relatedTarget=S,R=null,Hn(C)===E&&(F=new F(_,y+"enter",U,r,C),F.target=S,F.relatedTarget=Te,R=F),Te=R,x&&U)t:{for(F=x,_=U,y=0,S=F;S;S=_r(S))y++;for(S=0,R=_;R;R=_r(R))S++;for(;0<y-S;)F=_r(F),y--;for(;0<S-y;)_=_r(_),S--;for(;y--;){if(F===_||_!==null&&F===_.alternate)break t;F=_r(F),_=_r(_)}F=null}else F=null;x!==null&&Vu(P,T,x,F,!1),U!==null&&Te!==null&&Vu(P,Te,U,F,!0)}}e:{if(T=E?Er(E):window,x=T.nodeName&&T.nodeName.toLowerCase(),x==="select"||x==="input"&&T.type==="file")var j=Up;else if(Eu(T))if(ku)j=bp;else{j=jp;var $=Fp}else(x=T.nodeName)&&x.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(j=zp);if(j&&(j=j(e,E))){Iu(P,j,r,C);break e}$&&$(e,T,E),e==="focusout"&&($=T._wrapperState)&&$.controlled&&T.type==="number"&&Ue(T,"number",T.value)}switch($=E?Er(E):window,e){case"focusin":(Eu($)||$.contentEditable==="true")&&(yr=$,Hs=E,fi=null);break;case"focusout":fi=Hs=yr=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,xu(P,r,C);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":xu(P,r,C)}var B;if(bs)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else vr?_u(e,r)&&(H="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(H="onCompositionStart");H&&(vu&&r.locale!=="ko"&&(vr||H!=="onCompositionStart"?H==="onCompositionEnd"&&vr&&(B=fu()):(gn=C,Ds="value"in gn?gn.value:gn.textContent,vr=!0)),$=po(E,H),0<$.length&&(H=new mu(H,e,null,r,C),P.push({event:H,listeners:$}),B?H.data=B:(B=Su(r),B!==null&&(H.data=B)))),(B=Op?xp(e,r):Lp(e,r))&&(E=po(E,"onBeforeInput"),0<E.length&&(C=new mu("onBeforeInput","beforeinput",null,r,C),P.push({event:C,listeners:E}),C.data=B))}$u(P,t)})}function mi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function po(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,u=a.stateNode;a.tag===5&&u!==null&&(a=u,u=Yr(e,r),u!=null&&s.unshift(mi(e,u,a)),u=Yr(e,t),u!=null&&s.push(mi(e,u,a))),e=e.return}return s}function _r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,t,r,s,a){for(var u=t._reactName,f=[];r!==null&&r!==s;){var p=r,g=p.alternate,E=p.stateNode;if(g!==null&&g===s)break;p.tag===5&&E!==null&&(p=E,a?(g=Yr(r,u),g!=null&&f.unshift(mi(r,g,p))):a||(g=Yr(r,u),g!=null&&f.push(mi(r,g,p)))),r=r.return}f.length!==0&&e.push({event:t,listeners:f})}var Gp=/\r\n?/g,qp=/\u0000|\uFFFD/g;function Hu(e){return(typeof e=="string"?e:""+e).replace(Gp,`
`).replace(qp,"")}function mo(e,t,r){if(t=Hu(t),Hu(e)!==t&&r)throw Error(i(425))}function go(){}var Xs=null,Js=null;function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ea=typeof setTimeout=="function"?setTimeout:void 0,Qp=typeof clearTimeout=="function"?clearTimeout:void 0,Wu=typeof Promise=="function"?Promise:void 0,Yp=typeof queueMicrotask=="function"?queueMicrotask:typeof Wu<"u"?function(e){return Wu.resolve(null).then(e).catch(Xp)}:ea;function Xp(e){setTimeout(function(){throw e})}function ta(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),oi(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);oi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Sr,gi="__reactProps$"+Sr,Ht="__reactContainer$"+Sr,na="__reactEvents$"+Sr,Jp="__reactListeners$"+Sr,Zp="__reactHandles$"+Sr;function Hn(e){var t=e[Lt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ht]||r[Lt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ku(e);e!==null;){if(r=e[Lt])return r;e=Ku(e)}return t}e=r,r=e.parentNode}return null}function vi(e){return e=e[Lt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function vo(e){return e[gi]||null}var ra=[],Ir=-1;function wn(e){return{current:e}}function de(e){0>Ir||(e.current=ra[Ir],ra[Ir]=null,Ir--)}function ue(e,t){Ir++,ra[Ir]=e.current,e.current=t}var _n={},Ve=wn(_n),et=wn(!1),Wn=_n;function kr(e,t){var r=e.type.contextTypes;if(!r)return _n;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},u;for(u in r)a[u]=t[u];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function tt(e){return e=e.childContextTypes,e!=null}function yo(){de(et),de(Ve)}function Gu(e,t,r){if(Ve.current!==_n)throw Error(i(168));ue(Ve,t),ue(et,r)}function qu(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(i(108,se(e)||"Unknown",a));return D({},r,s)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,Wn=Ve.current,ue(Ve,e),ue(et,et.current),!0}function Qu(e,t,r){var s=e.stateNode;if(!s)throw Error(i(169));r?(e=qu(e,t,Wn),s.__reactInternalMemoizedMergedChildContext=e,de(et),de(Ve),ue(Ve,e)):de(et),ue(et,r)}var Wt=null,_o=!1,ia=!1;function Yu(e){Wt===null?Wt=[e]:Wt.push(e)}function em(e){_o=!0,Yu(e)}function Sn(){if(!ia&&Wt!==null){ia=!0;var e=0,t=oe;try{var r=Wt;for(oe=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Wt=null,_o=!1}catch(a){throw Wt!==null&&(Wt=Wt.slice(e+1)),Jl(Cs,Sn),a}finally{oe=t,ia=!1}}return null}var Tr=[],Cr=0,So=null,Eo=0,gt=[],vt=0,Kn=null,Kt=1,Gt="";function Gn(e,t){Tr[Cr++]=Eo,Tr[Cr++]=So,So=e,Eo=t}function Xu(e,t,r){gt[vt++]=Kt,gt[vt++]=Gt,gt[vt++]=Kn,Kn=e;var s=Kt;e=Gt;var a=32-kt(s)-1;s&=~(1<<a),r+=1;var u=32-kt(t)+a;if(30<u){var f=a-a%5;u=(s&(1<<f)-1).toString(32),s>>=f,a-=f,Kt=1<<32-kt(t)+a|r<<a|s,Gt=u+e}else Kt=1<<u|r<<a|s,Gt=e}function oa(e){e.return!==null&&(Gn(e,1),Xu(e,1,0))}function sa(e){for(;e===So;)So=Tr[--Cr],Tr[Cr]=null,Eo=Tr[--Cr],Tr[Cr]=null;for(;e===Kn;)Kn=gt[--vt],gt[vt]=null,Gt=gt[--vt],gt[vt]=null,Kt=gt[--vt],gt[vt]=null}var dt=null,ft=null,pe=!1,Ct=null;function Ju(e,t){var r=St(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Zu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ft=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Kn!==null?{id:Kt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=St(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dt=e,ft=null,!0):!1;default:return!1}}function aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function la(e){if(pe){var t=ft;if(t){var r=t;if(!Zu(e,t)){if(aa(e))throw Error(i(418));t=yn(r.nextSibling);var s=dt;t&&Zu(e,t)?Ju(s,r):(e.flags=e.flags&-4097|2,pe=!1,dt=e)}}else{if(aa(e))throw Error(i(418));e.flags=e.flags&-4097|2,pe=!1,dt=e}}}function ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Io(e){if(e!==dt)return!1;if(!pe)return ec(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zs(e.type,e.memoizedProps)),t&&(t=ft)){if(aa(e))throw tc(),Error(i(418));for(;t;)Ju(e,t),t=yn(t.nextSibling)}if(ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ft=yn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=dt?yn(e.stateNode.nextSibling):null;return!0}function tc(){for(var e=ft;e;)e=yn(e.nextSibling)}function Pr(){ft=dt=null,pe=!1}function ua(e){Ct===null?Ct=[e]:Ct.push(e)}var tm=_e.ReactCurrentBatchConfig;function yi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var s=r.stateNode}if(!s)throw Error(i(147,e));var a=s,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(f){var p=a.refs;f===null?delete p[u]:p[u]=f},t._stringRef=u,t)}if(typeof e!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nc(e){var t=e._init;return t(e._payload)}function rc(e){function t(_,y){if(e){var S=_.deletions;S===null?(_.deletions=[y],_.flags|=16):S.push(y)}}function r(_,y){if(!e)return null;for(;y!==null;)t(_,y),y=y.sibling;return null}function s(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function a(_,y){return _=An(_,y),_.index=0,_.sibling=null,_}function u(_,y,S){return _.index=S,e?(S=_.alternate,S!==null?(S=S.index,S<y?(_.flags|=2,y):S):(_.flags|=2,y)):(_.flags|=1048576,y)}function f(_){return e&&_.alternate===null&&(_.flags|=2),_}function p(_,y,S,R){return y===null||y.tag!==6?(y=el(S,_.mode,R),y.return=_,y):(y=a(y,S),y.return=_,y)}function g(_,y,S,R){var j=S.type;return j===ve?C(_,y,S.props.children,R,S.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Me&&nc(j)===y.type)?(R=a(y,S.props),R.ref=yi(_,y,S),R.return=_,R):(R=qo(S.type,S.key,S.props,null,_.mode,R),R.ref=yi(_,y,S),R.return=_,R)}function E(_,y,S,R){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=tl(S,_.mode,R),y.return=_,y):(y=a(y,S.children||[]),y.return=_,y)}function C(_,y,S,R,j){return y===null||y.tag!==7?(y=tr(S,_.mode,R,j),y.return=_,y):(y=a(y,S),y.return=_,y)}function P(_,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=el(""+y,_.mode,S),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case be:return S=qo(y.type,y.key,y.props,null,_.mode,S),S.ref=yi(_,null,y),S.return=_,S;case Se:return y=tl(y,_.mode,S),y.return=_,y;case Me:var R=y._init;return P(_,R(y._payload),S)}if(ut(y)||b(y))return y=tr(y,_.mode,S,null),y.return=_,y;ko(_,y)}return null}function T(_,y,S,R){var j=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:p(_,y,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case be:return S.key===j?g(_,y,S,R):null;case Se:return S.key===j?E(_,y,S,R):null;case Me:return j=S._init,T(_,y,j(S._payload),R)}if(ut(S)||b(S))return j!==null?null:C(_,y,S,R,null);ko(_,S)}return null}function x(_,y,S,R,j){if(typeof R=="string"&&R!==""||typeof R=="number")return _=_.get(S)||null,p(y,_,""+R,j);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case be:return _=_.get(R.key===null?S:R.key)||null,g(y,_,R,j);case Se:return _=_.get(R.key===null?S:R.key)||null,E(y,_,R,j);case Me:var $=R._init;return x(_,y,S,$(R._payload),j)}if(ut(R)||b(R))return _=_.get(S)||null,C(y,_,R,j,null);ko(y,R)}return null}function U(_,y,S,R){for(var j=null,$=null,B=y,H=y=0,Oe=null;B!==null&&H<S.length;H++){B.index>H?(Oe=B,B=null):Oe=B.sibling;var ne=T(_,B,S[H],R);if(ne===null){B===null&&(B=Oe);break}e&&B&&ne.alternate===null&&t(_,B),y=u(ne,y,H),$===null?j=ne:$.sibling=ne,$=ne,B=Oe}if(H===S.length)return r(_,B),pe&&Gn(_,H),j;if(B===null){for(;H<S.length;H++)B=P(_,S[H],R),B!==null&&(y=u(B,y,H),$===null?j=B:$.sibling=B,$=B);return pe&&Gn(_,H),j}for(B=s(_,B);H<S.length;H++)Oe=x(B,_,H,S[H],R),Oe!==null&&(e&&Oe.alternate!==null&&B.delete(Oe.key===null?H:Oe.key),y=u(Oe,y,H),$===null?j=Oe:$.sibling=Oe,$=Oe);return e&&B.forEach(function(Nn){return t(_,Nn)}),pe&&Gn(_,H),j}function F(_,y,S,R){var j=b(S);if(typeof j!="function")throw Error(i(150));if(S=j.call(S),S==null)throw Error(i(151));for(var $=j=null,B=y,H=y=0,Oe=null,ne=S.next();B!==null&&!ne.done;H++,ne=S.next()){B.index>H?(Oe=B,B=null):Oe=B.sibling;var Nn=T(_,B,ne.value,R);if(Nn===null){B===null&&(B=Oe);break}e&&B&&Nn.alternate===null&&t(_,B),y=u(Nn,y,H),$===null?j=Nn:$.sibling=Nn,$=Nn,B=Oe}if(ne.done)return r(_,B),pe&&Gn(_,H),j;if(B===null){for(;!ne.done;H++,ne=S.next())ne=P(_,ne.value,R),ne!==null&&(y=u(ne,y,H),$===null?j=ne:$.sibling=ne,$=ne);return pe&&Gn(_,H),j}for(B=s(_,B);!ne.done;H++,ne=S.next())ne=x(B,_,H,ne.value,R),ne!==null&&(e&&ne.alternate!==null&&B.delete(ne.key===null?H:ne.key),y=u(ne,y,H),$===null?j=ne:$.sibling=ne,$=ne);return e&&B.forEach(function(Dm){return t(_,Dm)}),pe&&Gn(_,H),j}function Te(_,y,S,R){if(typeof S=="object"&&S!==null&&S.type===ve&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case be:e:{for(var j=S.key,$=y;$!==null;){if($.key===j){if(j=S.type,j===ve){if($.tag===7){r(_,$.sibling),y=a($,S.props.children),y.return=_,_=y;break e}}else if($.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Me&&nc(j)===$.type){r(_,$.sibling),y=a($,S.props),y.ref=yi(_,$,S),y.return=_,_=y;break e}r(_,$);break}else t(_,$);$=$.sibling}S.type===ve?(y=tr(S.props.children,_.mode,R,S.key),y.return=_,_=y):(R=qo(S.type,S.key,S.props,null,_.mode,R),R.ref=yi(_,y,S),R.return=_,_=R)}return f(_);case Se:e:{for($=S.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){r(_,y.sibling),y=a(y,S.children||[]),y.return=_,_=y;break e}else{r(_,y);break}else t(_,y);y=y.sibling}y=tl(S,_.mode,R),y.return=_,_=y}return f(_);case Me:return $=S._init,Te(_,y,$(S._payload),R)}if(ut(S))return U(_,y,S,R);if(b(S))return F(_,y,S,R);ko(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(r(_,y.sibling),y=a(y,S),y.return=_,_=y):(r(_,y),y=el(S,_.mode,R),y.return=_,_=y),f(_)):r(_,y)}return Te}var Rr=rc(!0),ic=rc(!1),To=wn(null),Co=null,Ar=null,ca=null;function da(){ca=Ar=Co=null}function fa(e){var t=To.current;de(To),e._currentValue=t}function ha(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Nr(e,t){Co=e,ca=Ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(ca!==e)if(e={context:e,memoizedValue:t,next:null},Ar===null){if(Co===null)throw Error(i(308));Ar=e,Co.dependencies={lanes:0,firstContext:e}}else Ar=Ar.next=e;return t}var qn=null;function pa(e){qn===null?qn=[e]:qn.push(e)}function oc(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,pa(t)):(r.next=a.next,a.next=r),t.interleaved=r,qt(e,s)}function qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var En=!1;function ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ee&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,qt(e,r)}return a=s.interleaved,a===null?(t.next=t,pa(s)):(t.next=a.next,a.next=t),s.interleaved=t,qt(e,r)}function Po(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,As(e,r)}}function ac(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var f={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};u===null?a=u=f:u=u.next=f,r=r.next}while(r!==null);u===null?a=u=t:u=u.next=t}else a=u=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ro(e,t,r,s){var a=e.updateQueue;En=!1;var u=a.firstBaseUpdate,f=a.lastBaseUpdate,p=a.shared.pending;if(p!==null){a.shared.pending=null;var g=p,E=g.next;g.next=null,f===null?u=E:f.next=E,f=g;var C=e.alternate;C!==null&&(C=C.updateQueue,p=C.lastBaseUpdate,p!==f&&(p===null?C.firstBaseUpdate=E:p.next=E,C.lastBaseUpdate=g))}if(u!==null){var P=a.baseState;f=0,C=E=g=null,p=u;do{var T=p.lane,x=p.eventTime;if((s&T)===T){C!==null&&(C=C.next={eventTime:x,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var U=e,F=p;switch(T=t,x=r,F.tag){case 1:if(U=F.payload,typeof U=="function"){P=U.call(x,P,T);break e}P=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=F.payload,T=typeof U=="function"?U.call(x,P,T):U,T==null)break e;P=D({},P,T);break e;case 2:En=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,T=a.effects,T===null?a.effects=[p]:T.push(p))}else x={eventTime:x,lane:T,tag:p.tag,payload:p.payload,callback:p.callback,next:null},C===null?(E=C=x,g=P):C=C.next=x,f|=T;if(p=p.next,p===null){if(p=a.shared.pending,p===null)break;T=p,p=T.next,T.next=null,a.lastBaseUpdate=T,a.shared.pending=null}}while(!0);if(C===null&&(g=P),a.baseState=g,a.firstBaseUpdate=E,a.lastBaseUpdate=C,t=a.shared.interleaved,t!==null){a=t;do f|=a.lane,a=a.next;while(a!==t)}else u===null&&(a.shared.lanes=0);Xn|=f,e.lanes=f,e.memoizedState=P}}function lc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(i(191,a));a.call(s)}}}var wi={},Dt=wn(wi),_i=wn(wi),Si=wn(wi);function Qn(e){if(e===wi)throw Error(i(174));return e}function ga(e,t){switch(ue(Si,t),ue(_i,e),ue(Dt,wi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$n(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$n(t,e)}de(Dt),ue(Dt,t)}function Or(){de(Dt),de(_i),de(Si)}function uc(e){Qn(Si.current);var t=Qn(Dt.current),r=$n(t,e.type);t!==r&&(ue(_i,e),ue(Dt,r))}function va(e){_i.current===e&&(de(Dt),de(_i))}var ye=wn(0);function Ao(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function wa(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var No=_e.ReactCurrentDispatcher,_a=_e.ReactCurrentBatchConfig,Yn=0,we=null,Pe=null,Ae=null,Oo=!1,Ei=!1,Ii=0,nm=0;function He(){throw Error(i(321))}function Sa(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Tt(e[r],t[r]))return!1;return!0}function Ea(e,t,r,s,a,u){if(Yn=u,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?sm:am,e=r(s,a),Ei){u=0;do{if(Ei=!1,Ii=0,25<=u)throw Error(i(301));u+=1,Ae=Pe=null,t.updateQueue=null,No.current=lm,e=r(s,a)}while(Ei)}if(No.current=Do,t=Pe!==null&&Pe.next!==null,Yn=0,Ae=Pe=we=null,Oo=!1,t)throw Error(i(300));return e}function Ia(){var e=Ii!==0;return Ii=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?we.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function wt(){if(Pe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Ae===null?we.memoizedState:Ae.next;if(t!==null)Ae=t,Pe=e;else{if(e===null)throw Error(i(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ae===null?we.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function ki(e,t){return typeof t=="function"?t(e):t}function ka(e){var t=wt(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var s=Pe,a=s.baseQueue,u=r.pending;if(u!==null){if(a!==null){var f=a.next;a.next=u.next,u.next=f}s.baseQueue=a=u,r.pending=null}if(a!==null){u=a.next,s=s.baseState;var p=f=null,g=null,E=u;do{var C=E.lane;if((Yn&C)===C)g!==null&&(g=g.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),s=E.hasEagerState?E.eagerState:e(s,E.action);else{var P={lane:C,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};g===null?(p=g=P,f=s):g=g.next=P,we.lanes|=C,Xn|=C}E=E.next}while(E!==null&&E!==u);g===null?f=s:g.next=p,Tt(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseState=f,t.baseQueue=g,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do u=a.lane,we.lanes|=u,Xn|=u,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ta(e){var t=wt(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,u=t.memoizedState;if(a!==null){r.pending=null;var f=a=a.next;do u=e(u,f.action),f=f.next;while(f!==a);Tt(u,t.memoizedState)||(nt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),r.lastRenderedState=u}return[u,s]}function cc(){}function dc(e,t){var r=we,s=wt(),a=t(),u=!Tt(s.memoizedState,a);if(u&&(s.memoizedState=a,nt=!0),s=s.queue,Ca(pc.bind(null,r,s,e),[e]),s.getSnapshot!==t||u||Ae!==null&&Ae.memoizedState.tag&1){if(r.flags|=2048,Ti(9,hc.bind(null,r,s,a,t),void 0,null),Ne===null)throw Error(i(349));Yn&30||fc(r,t,a)}return a}function fc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function hc(e,t,r,s){t.value=r,t.getSnapshot=s,mc(t)&&gc(e)}function pc(e,t,r){return r(function(){mc(t)&&gc(e)})}function mc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Tt(e,r)}catch{return!0}}function gc(e){var t=qt(e,1);t!==null&&Nt(t,e,1,-1)}function vc(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},t.queue=e,e=e.dispatch=om.bind(null,we,e),[t.memoizedState,e]}function Ti(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function yc(){return wt().memoizedState}function xo(e,t,r,s){var a=Mt();we.flags|=e,a.memoizedState=Ti(1|t,r,void 0,s===void 0?null:s)}function Lo(e,t,r,s){var a=wt();s=s===void 0?null:s;var u=void 0;if(Pe!==null){var f=Pe.memoizedState;if(u=f.destroy,s!==null&&Sa(s,f.deps)){a.memoizedState=Ti(t,r,u,s);return}}we.flags|=e,a.memoizedState=Ti(1|t,r,u,s)}function wc(e,t){return xo(8390656,8,e,t)}function Ca(e,t){return Lo(2048,8,e,t)}function _c(e,t){return Lo(4,2,e,t)}function Sc(e,t){return Lo(4,4,e,t)}function Ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ic(e,t,r){return r=r!=null?r.concat([e]):null,Lo(4,4,Ec.bind(null,t,e),r)}function Pa(){}function kc(e,t){var r=wt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Sa(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function Tc(e,t){var r=wt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Sa(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Cc(e,t,r){return Yn&21?(Tt(r,t)||(r=nu(),we.lanes|=r,Xn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=r)}function rm(e,t){var r=oe;oe=r!==0&&4>r?r:4,e(!0);var s=_a.transition;_a.transition={};try{e(!1),t()}finally{oe=r,_a.transition=s}}function Pc(){return wt().memoizedState}function im(e,t,r){var s=Pn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Rc(e))Ac(t,r);else if(r=oc(e,t,r,s),r!==null){var a=Qe();Nt(r,e,s,a),Nc(r,t,s)}}function om(e,t,r){var s=Pn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Rc(e))Ac(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,p=u(f,r);if(a.hasEagerState=!0,a.eagerState=p,Tt(p,f)){var g=t.interleaved;g===null?(a.next=a,pa(t)):(a.next=g.next,g.next=a),t.interleaved=a;return}}catch{}finally{}r=oc(e,t,a,s),r!==null&&(a=Qe(),Nt(r,e,s,a),Nc(r,t,s))}}function Rc(e){var t=e.alternate;return e===we||t!==null&&t===we}function Ac(e,t){Ei=Oo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Nc(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,As(e,r)}}var Do={readContext:yt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},sm={readContext:yt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:wc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,xo(4194308,4,Ec.bind(null,t,e),r)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return xo(4,2,e,t)},useMemo:function(e,t){var r=Mt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Mt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=im.bind(null,we,e),[s.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:vc,useDebugValue:Pa,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=vc(!1),t=e[0];return e=rm.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=we,a=Mt();if(pe){if(r===void 0)throw Error(i(407));r=r()}else{if(r=t(),Ne===null)throw Error(i(349));Yn&30||fc(s,t,r)}a.memoizedState=r;var u={value:r,getSnapshot:t};return a.queue=u,wc(pc.bind(null,s,u,e),[e]),s.flags|=2048,Ti(9,hc.bind(null,s,u,r,t),void 0,null),r},useId:function(){var e=Mt(),t=Ne.identifierPrefix;if(pe){var r=Gt,s=Kt;r=(s&~(1<<32-kt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ii++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=nm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},am={readContext:yt,useCallback:kc,useContext:yt,useEffect:Ca,useImperativeHandle:Ic,useInsertionEffect:_c,useLayoutEffect:Sc,useMemo:Tc,useReducer:ka,useRef:yc,useState:function(){return ka(ki)},useDebugValue:Pa,useDeferredValue:function(e){var t=wt();return Cc(t,Pe.memoizedState,e)},useTransition:function(){var e=ka(ki)[0],t=wt().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:Pc,unstable_isNewReconciler:!1},lm={readContext:yt,useCallback:kc,useContext:yt,useEffect:Ca,useImperativeHandle:Ic,useInsertionEffect:_c,useLayoutEffect:Sc,useMemo:Tc,useReducer:Ta,useRef:yc,useState:function(){return Ta(ki)},useDebugValue:Pa,useDeferredValue:function(e){var t=wt();return Pe===null?t.memoizedState=e:Cc(t,Pe.memoizedState,e)},useTransition:function(){var e=Ta(ki)[0],t=wt().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:Pc,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=D({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ra(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:D({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Mo={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Qe(),a=Pn(e),u=Qt(s,a);u.payload=t,r!=null&&(u.callback=r),t=In(e,u,a),t!==null&&(Nt(t,e,a,s),Po(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Qe(),a=Pn(e),u=Qt(s,a);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=In(e,u,a),t!==null&&(Nt(t,e,a,s),Po(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Qe(),s=Pn(e),a=Qt(r,s);a.tag=2,t!=null&&(a.callback=t),t=In(e,a,s),t!==null&&(Nt(t,e,s,r),Po(t,e,s))}};function Oc(e,t,r,s,a,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,f):t.prototype&&t.prototype.isPureReactComponent?!di(r,s)||!di(a,u):!0}function xc(e,t,r){var s=!1,a=_n,u=t.contextType;return typeof u=="object"&&u!==null?u=yt(u):(a=tt(t)?Wn:Ve.current,s=t.contextTypes,u=(s=s!=null)?kr(e,a):_n),t=new t(r,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=u),t}function Lc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function Aa(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ma(e);var u=t.contextType;typeof u=="object"&&u!==null?a.context=yt(u):(u=tt(t)?Wn:Ve.current,a.context=kr(e,u)),a.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Ra(e,t,u,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Mo.enqueueReplaceState(a,a.state,null),Ro(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t){try{var r="",s=t;do r+=Z(s),s=s.return;while(s);var a=r}catch(u){a=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:a,digest:null}}function Na(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var um=typeof WeakMap=="function"?WeakMap:Map;function Dc(e,t,r){r=Qt(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Bo||(Bo=!0,Ka=s),Oa(e,t)},r}function Mc(e,t,r){r=Qt(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Oa(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(r.callback=function(){Oa(e,t),typeof s!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var f=t.stack;this.componentDidCatch(t.value,{componentStack:f!==null?f:""})}),r}function Uc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new um;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=Im.bind(null,e,t,r),t.then(e,e))}function Fc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jc(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Qt(-1,1),t.tag=2,In(r,t,1))),r.lanes|=1),e)}var cm=_e.ReactCurrentOwner,nt=!1;function qe(e,t,r,s){t.child=e===null?ic(t,null,r,s):Rr(t,e.child,r,s)}function zc(e,t,r,s,a){r=r.render;var u=t.ref;return Nr(t,a),s=Ea(e,t,r,s,u,a),r=Ia(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(pe&&r&&oa(t),t.flags|=1,qe(e,t,s,a),t.child)}function bc(e,t,r,s,a){if(e===null){var u=r.type;return typeof u=="function"&&!Za(u)&&u.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=u,$c(e,t,u,s,a)):(e=qo(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!(e.lanes&a)){var f=u.memoizedProps;if(r=r.compare,r=r!==null?r:di,r(f,s)&&e.ref===t.ref)return Yt(e,t,a)}return t.flags|=1,e=An(u,s),e.ref=t.ref,e.return=t,t.child=e}function $c(e,t,r,s,a){if(e!==null){var u=e.memoizedProps;if(di(u,s)&&e.ref===t.ref)if(nt=!1,t.pendingProps=s=u,(e.lanes&a)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,Yt(e,t,a)}return xa(e,t,r,s,a)}function Bc(e,t,r){var s=t.pendingProps,a=s.children,u=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Dr,ht),ht|=r;else{if(!(r&1073741824))return e=u!==null?u.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Dr,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=u!==null?u.baseLanes:r,ue(Dr,ht),ht|=s}else u!==null?(s=u.baseLanes|r,t.memoizedState=null):s=r,ue(Dr,ht),ht|=s;return qe(e,t,a,r),t.child}function Vc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function xa(e,t,r,s,a){var u=tt(r)?Wn:Ve.current;return u=kr(t,u),Nr(t,a),r=Ea(e,t,r,s,u,a),s=Ia(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(pe&&s&&oa(t),t.flags|=1,qe(e,t,r,a),t.child)}function Hc(e,t,r,s,a){if(tt(r)){var u=!0;wo(t)}else u=!1;if(Nr(t,a),t.stateNode===null)Fo(e,t),xc(t,r,s),Aa(t,r,s,a),s=!0;else if(e===null){var f=t.stateNode,p=t.memoizedProps;f.props=p;var g=f.context,E=r.contextType;typeof E=="object"&&E!==null?E=yt(E):(E=tt(r)?Wn:Ve.current,E=kr(t,E));var C=r.getDerivedStateFromProps,P=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function";P||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==s||g!==E)&&Lc(t,f,s,E),En=!1;var T=t.memoizedState;f.state=T,Ro(t,s,f,a),g=t.memoizedState,p!==s||T!==g||et.current||En?(typeof C=="function"&&(Ra(t,r,C,s),g=t.memoizedState),(p=En||Oc(t,r,p,s,T,g,E))?(P||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=g),f.props=s,f.state=g,f.context=E,s=p):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{f=t.stateNode,sc(e,t),p=t.memoizedProps,E=t.type===t.elementType?p:Pt(t.type,p),f.props=E,P=t.pendingProps,T=f.context,g=r.contextType,typeof g=="object"&&g!==null?g=yt(g):(g=tt(r)?Wn:Ve.current,g=kr(t,g));var x=r.getDerivedStateFromProps;(C=typeof x=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==P||T!==g)&&Lc(t,f,s,g),En=!1,T=t.memoizedState,f.state=T,Ro(t,s,f,a);var U=t.memoizedState;p!==P||T!==U||et.current||En?(typeof x=="function"&&(Ra(t,r,x,s),U=t.memoizedState),(E=En||Oc(t,r,E,s,T,U,g)||!1)?(C||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,U,g),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,U,g)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=U),f.props=s,f.state=U,f.context=g,s=E):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),s=!1)}return La(e,t,r,s,u,a)}function La(e,t,r,s,a,u){Vc(e,t);var f=(t.flags&128)!==0;if(!s&&!f)return a&&Qu(t,r,!1),Yt(e,t,u);s=t.stateNode,cm.current=t;var p=f&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&f?(t.child=Rr(t,e.child,null,u),t.child=Rr(t,null,p,u)):qe(e,t,p,u),t.memoizedState=s.state,a&&Qu(t,r,!0),t.child}function Wc(e){var t=e.stateNode;t.pendingContext?Gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gu(e,t.context,!1),ga(e,t.containerInfo)}function Kc(e,t,r,s,a){return Pr(),ua(a),t.flags|=256,qe(e,t,r,s),t.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function Ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gc(e,t,r){var s=t.pendingProps,a=ye.current,u=!1,f=(t.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(a&2)!==0),p?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ue(ye,a&1),e===null)return la(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(f=s.children,e=s.fallback,u?(s=t.mode,u=t.child,f={mode:"hidden",children:f},!(s&1)&&u!==null?(u.childLanes=0,u.pendingProps=f):u=Qo(f,s,0,null),e=tr(e,s,r,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Ma(r),t.memoizedState=Da,e):Ua(t,f));if(a=e.memoizedState,a!==null&&(p=a.dehydrated,p!==null))return dm(e,t,f,s,p,a,r);if(u){u=s.fallback,f=t.mode,a=e.child,p=a.sibling;var g={mode:"hidden",children:s.children};return!(f&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=g,t.deletions=null):(s=An(a,g),s.subtreeFlags=a.subtreeFlags&14680064),p!==null?u=An(p,u):(u=tr(u,f,r,null),u.flags|=2),u.return=t,s.return=t,s.sibling=u,t.child=s,s=u,u=t.child,f=e.child.memoizedState,f=f===null?Ma(r):{baseLanes:f.baseLanes|r,cachePool:null,transitions:f.transitions},u.memoizedState=f,u.childLanes=e.childLanes&~r,t.memoizedState=Da,s}return u=e.child,e=u.sibling,s=An(u,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Ua(e,t){return t=Qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Uo(e,t,r,s){return s!==null&&ua(s),Rr(t,e.child,null,r),e=Ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dm(e,t,r,s,a,u,f){if(r)return t.flags&256?(t.flags&=-257,s=Na(Error(i(422))),Uo(e,t,f,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=s.fallback,a=t.mode,s=Qo({mode:"visible",children:s.children},a,0,null),u=tr(u,a,f,null),u.flags|=2,s.return=t,u.return=t,s.sibling=u,t.child=s,t.mode&1&&Rr(t,e.child,null,f),t.child.memoizedState=Ma(f),t.memoizedState=Da,u);if(!(t.mode&1))return Uo(e,t,f,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var p=s.dgst;return s=p,u=Error(i(419)),s=Na(u,s,void 0),Uo(e,t,f,s)}if(p=(f&e.childLanes)!==0,nt||p){if(s=Ne,s!==null){switch(f&-f){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|f)?0:a,a!==0&&a!==u.retryLane&&(u.retryLane=a,qt(e,a),Nt(s,e,a,-1))}return Ja(),s=Na(Error(i(421))),Uo(e,t,f,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=km.bind(null,e),a._reactRetry=t,null):(e=u.treeContext,ft=yn(a.nextSibling),dt=t,pe=!0,Ct=null,e!==null&&(gt[vt++]=Kt,gt[vt++]=Gt,gt[vt++]=Kn,Kt=e.id,Gt=e.overflow,Kn=t),t=Ua(t,s.children),t.flags|=4096,t)}function qc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),ha(e.return,t,r)}function Fa(e,t,r,s,a){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=s,u.tail=r,u.tailMode=a)}function Qc(e,t,r){var s=t.pendingProps,a=s.revealOrder,u=s.tail;if(qe(e,t,s.children,r),s=ye.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qc(e,r,t);else if(e.tag===19)qc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ue(ye,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ao(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Fa(t,!1,a,r,u);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ao(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Fa(t,!0,r,null,u);break;case"together":Fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,r=An(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=An(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function fm(e,t,r){switch(t.tag){case 3:Wc(t),Pr();break;case 5:uc(t);break;case 1:tt(t.type)&&wo(t);break;case 4:ga(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;ue(To,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(ue(ye,ye.current&1),t.flags|=128,null):r&t.child.childLanes?Gc(e,t,r):(ue(ye,ye.current&1),e=Yt(e,t,r),e!==null?e.sibling:null);ue(ye,ye.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Qc(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ue(ye,ye.current),s)break;return null;case 22:case 23:return t.lanes=0,Bc(e,t,r)}return Yt(e,t,r)}var Yc,ja,Xc,Jc;Yc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ja=function(){},Xc=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,Qn(Dt.current);var u=null;switch(r){case"input":a=ln(e,a),s=ln(e,s),u=[];break;case"select":a=D({},a,{value:void 0}),s=D({},s,{value:void 0}),u=[];break;case"textarea":a=hr(e,a),s=hr(e,s),u=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=go)}Kr(r,s);var f;r=null;for(E in a)if(!s.hasOwnProperty(E)&&a.hasOwnProperty(E)&&a[E]!=null)if(E==="style"){var p=a[E];for(f in p)p.hasOwnProperty(f)&&(r||(r={}),r[f]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(c.hasOwnProperty(E)?u||(u=[]):(u=u||[]).push(E,null));for(E in s){var g=s[E];if(p=a!=null?a[E]:void 0,s.hasOwnProperty(E)&&g!==p&&(g!=null||p!=null))if(E==="style")if(p){for(f in p)!p.hasOwnProperty(f)||g&&g.hasOwnProperty(f)||(r||(r={}),r[f]="");for(f in g)g.hasOwnProperty(f)&&p[f]!==g[f]&&(r||(r={}),r[f]=g[f])}else r||(u||(u=[]),u.push(E,r)),r=g;else E==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(u=u||[]).push(E,g)):E==="children"?typeof g!="string"&&typeof g!="number"||(u=u||[]).push(E,""+g):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(c.hasOwnProperty(E)?(g!=null&&E==="onScroll"&&ce("scroll",e),u||p===g||(u=[])):(u=u||[]).push(E,g))}r&&(u=u||[]).push("style",r);var E=u;(t.updateQueue=E)&&(t.flags|=4)}},Jc=function(e,t,r,s){r!==s&&(t.flags|=4)};function Ci(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function hm(e,t,r){var s=t.pendingProps;switch(sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return tt(t.type)&&yo(),We(t),null;case 3:return s=t.stateNode,Or(),de(et),de(Ve),wa(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ct!==null&&(Qa(Ct),Ct=null))),ja(e,t),We(t),null;case 5:va(t);var a=Qn(Si.current);if(r=t.type,e!==null&&t.stateNode!=null)Xc(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(i(166));return We(t),null}if(e=Qn(Dt.current),Io(t)){s=t.stateNode,r=t.type;var u=t.memoizedProps;switch(s[Lt]=t,s[gi]=u,e=(t.mode&1)!==0,r){case"dialog":ce("cancel",s),ce("close",s);break;case"iframe":case"object":case"embed":ce("load",s);break;case"video":case"audio":for(a=0;a<hi.length;a++)ce(hi[a],s);break;case"source":ce("error",s);break;case"img":case"image":case"link":ce("error",s),ce("load",s);break;case"details":ce("toggle",s);break;case"input":Hr(s,u),ce("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!u.multiple},ce("invalid",s);break;case"textarea":Be(s,u),ce("invalid",s)}Kr(r,u),a=null;for(var f in u)if(u.hasOwnProperty(f)){var p=u[f];f==="children"?typeof p=="string"?s.textContent!==p&&(u.suppressHydrationWarning!==!0&&mo(s.textContent,p,e),a=["children",p]):typeof p=="number"&&s.textContent!==""+p&&(u.suppressHydrationWarning!==!0&&mo(s.textContent,p,e),a=["children",""+p]):c.hasOwnProperty(f)&&p!=null&&f==="onScroll"&&ce("scroll",s)}switch(r){case"input":cr(s),mt(s,u,!0);break;case"textarea":cr(s),bn(s);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(s.onclick=go)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{f=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=It(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=f.createElement(r,{is:s.is}):(e=f.createElement(r),r==="select"&&(f=e,s.multiple?f.multiple=!0:s.size&&(f.size=s.size))):e=f.createElementNS(e,r),e[Lt]=t,e[gi]=s,Yc(e,t,!1,!1),t.stateNode=e;e:{switch(f=pr(r,s),r){case"dialog":ce("cancel",e),ce("close",e),a=s;break;case"iframe":case"object":case"embed":ce("load",e),a=s;break;case"video":case"audio":for(a=0;a<hi.length;a++)ce(hi[a],e);a=s;break;case"source":ce("error",e),a=s;break;case"img":case"image":case"link":ce("error",e),ce("load",e),a=s;break;case"details":ce("toggle",e),a=s;break;case"input":Hr(e,s),a=ln(e,s),ce("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=D({},s,{value:void 0}),ce("invalid",e);break;case"textarea":Be(e,s),a=hr(e,s),ce("invalid",e);break;default:a=s}Kr(r,a),p=a;for(u in p)if(p.hasOwnProperty(u)){var g=p[u];u==="style"?Wr(e,g):u==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Ki(e,g)):u==="children"?typeof g=="string"?(r!=="textarea"||g!=="")&&Vt(e,g):typeof g=="number"&&Vt(e,""+g):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?g!=null&&u==="onScroll"&&ce("scroll",e):g!=null&&xe(e,u,g,f))}switch(r){case"input":cr(e),mt(e,s,!1);break;case"textarea":cr(e),bn(e);break;case"option":s.value!=null&&e.setAttribute("value",""+te(s.value));break;case"select":e.multiple=!!s.multiple,u=s.value,u!=null?Bt(e,!!s.multiple,u,!1):s.defaultValue!=null&&Bt(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=go)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Jc(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(i(166));if(r=Qn(Si.current),Qn(Dt.current),Io(t)){if(s=t.stateNode,r=t.memoizedProps,s[Lt]=t,(u=s.nodeValue!==r)&&(e=dt,e!==null))switch(e.tag){case 3:mo(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(s.nodeValue,r,(e.mode&1)!==0)}u&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Lt]=t,t.stateNode=s}return We(t),null;case 13:if(de(ye),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&ft!==null&&t.mode&1&&!(t.flags&128))tc(),Pr(),t.flags|=98560,u=!1;else if(u=Io(t),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(i(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(i(317));u[Lt]=t}else Pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),u=!1}else Ct!==null&&(Qa(Ct),Ct=null),u=!0;if(!u)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Re===0&&(Re=3):Ja())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Or(),ja(e,t),e===null&&pi(t.stateNode.containerInfo),We(t),null;case 10:return fa(t.type._context),We(t),null;case 17:return tt(t.type)&&yo(),We(t),null;case 19:if(de(ye),u=t.memoizedState,u===null)return We(t),null;if(s=(t.flags&128)!==0,f=u.rendering,f===null)if(s)Ci(u,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(f=Ao(e),f!==null){for(t.flags|=128,Ci(u,!1),s=f.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)u=r,e=s,u.flags&=14680066,f=u.alternate,f===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=f.childLanes,u.lanes=f.lanes,u.child=f.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=f.memoizedProps,u.memoizedState=f.memoizedState,u.updateQueue=f.updateQueue,u.type=f.type,e=f.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ue(ye,ye.current&1|2),t.child}e=e.sibling}u.tail!==null&&ke()>Mr&&(t.flags|=128,s=!0,Ci(u,!1),t.lanes=4194304)}else{if(!s)if(e=Ao(f),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ci(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!pe)return We(t),null}else 2*ke()-u.renderingStartTime>Mr&&r!==1073741824&&(t.flags|=128,s=!0,Ci(u,!1),t.lanes=4194304);u.isBackwards?(f.sibling=t.child,t.child=f):(r=u.last,r!==null?r.sibling=f:t.child=f,u.last=f)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=ke(),t.sibling=null,r=ye.current,ue(ye,s?r&1|2:r&1),t):(We(t),null);case 22:case 23:return Xa(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?ht&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function pm(e,t){switch(sa(t),t.tag){case 1:return tt(t.type)&&yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),de(et),de(Ve),wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return va(t),null;case 13:if(de(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ye),null;case 4:return Or(),null;case 10:return fa(t.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var jo=!1,Ke=!1,mm=typeof WeakSet=="function"?WeakSet:Set,M=null;function Lr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ee(e,t,s)}else r.current=null}function za(e,t,r){try{r()}catch(s){Ee(e,t,s)}}var Zc=!1;function gm(e,t){if(Xs=ro,e=Ou(),Vs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var f=0,p=-1,g=-1,E=0,C=0,P=e,T=null;t:for(;;){for(var x;P!==r||a!==0&&P.nodeType!==3||(p=f+a),P!==u||s!==0&&P.nodeType!==3||(g=f+s),P.nodeType===3&&(f+=P.nodeValue.length),(x=P.firstChild)!==null;)T=P,P=x;for(;;){if(P===e)break t;if(T===r&&++E===a&&(p=f),T===u&&++C===s&&(g=f),(x=P.nextSibling)!==null)break;P=T,T=P.parentNode}P=x}r=p===-1||g===-1?null:{start:p,end:g}}else r=null}r=r||{start:0,end:0}}else r=null;for(Js={focusedElem:e,selectionRange:r},ro=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var U=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var F=U.memoizedProps,Te=U.memoizedState,_=t.stateNode,y=_.getSnapshotBeforeUpdate(t.elementType===t.type?F:Pt(t.type,F),Te);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(R){Ee(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return U=Zc,Zc=!1,U}function Pi(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var u=a.destroy;a.destroy=void 0,u!==void 0&&za(t,r,u)}a=a.next}while(a!==s)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function ba(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function ed(e){var t=e.alternate;t!==null&&(e.alternate=null,ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[gi],delete t[na],delete t[Jp],delete t[Zp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function td(e){return e.tag===5||e.tag===3||e.tag===4}function nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $a(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=go));else if(s!==4&&(e=e.child,e!==null))for($a(e,t,r),e=e.sibling;e!==null;)$a(e,t,r),e=e.sibling}function Ba(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ba(e,t,r),e=e.sibling;e!==null;)Ba(e,t,r),e=e.sibling}var je=null,Rt=!1;function kn(e,t,r){for(r=r.child;r!==null;)rd(e,t,r),r=r.sibling}function rd(e,t,r){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Xi,r)}catch{}switch(r.tag){case 5:Ke||Lr(r,t);case 6:var s=je,a=Rt;je=null,kn(e,t,r),je=s,Rt=a,je!==null&&(Rt?(e=je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):je.removeChild(r.stateNode));break;case 18:je!==null&&(Rt?(e=je,r=r.stateNode,e.nodeType===8?ta(e.parentNode,r):e.nodeType===1&&ta(e,r),oi(e)):ta(je,r.stateNode));break;case 4:s=je,a=Rt,je=r.stateNode.containerInfo,Rt=!0,kn(e,t,r),je=s,Rt=a;break;case 0:case 11:case 14:case 15:if(!Ke&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var u=a,f=u.destroy;u=u.tag,f!==void 0&&(u&2||u&4)&&za(r,t,f),a=a.next}while(a!==s)}kn(e,t,r);break;case 1:if(!Ke&&(Lr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(p){Ee(r,t,p)}kn(e,t,r);break;case 21:kn(e,t,r);break;case 22:r.mode&1?(Ke=(s=Ke)||r.memoizedState!==null,kn(e,t,r),Ke=s):kn(e,t,r);break;default:kn(e,t,r)}}function id(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new mm),t.forEach(function(s){var a=Tm.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function At(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var u=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 5:je=p.stateNode,Rt=!1;break e;case 3:je=p.stateNode.containerInfo,Rt=!0;break e;case 4:je=p.stateNode.containerInfo,Rt=!0;break e}p=p.return}if(je===null)throw Error(i(160));rd(u,f,a),je=null,Rt=!1;var g=a.alternate;g!==null&&(g.return=null),a.return=null}catch(E){Ee(a,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)od(t,e),t=t.sibling}function od(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Ut(e),s&4){try{Pi(3,e,e.return),zo(3,e)}catch(F){Ee(e,e.return,F)}try{Pi(5,e,e.return)}catch(F){Ee(e,e.return,F)}}break;case 1:At(t,e),Ut(e),s&512&&r!==null&&Lr(r,r.return);break;case 5:if(At(t,e),Ut(e),s&512&&r!==null&&Lr(r,r.return),e.flags&32){var a=e.stateNode;try{Vt(a,"")}catch(F){Ee(e,e.return,F)}}if(s&4&&(a=e.stateNode,a!=null)){var u=e.memoizedProps,f=r!==null?r.memoizedProps:u,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&u.type==="radio"&&u.name!=null&&lt(a,u),pr(p,f);var E=pr(p,u);for(f=0;f<g.length;f+=2){var C=g[f],P=g[f+1];C==="style"?Wr(a,P):C==="dangerouslySetInnerHTML"?Ki(a,P):C==="children"?Vt(a,P):xe(a,C,P,E)}switch(p){case"input":fr(a,u);break;case"textarea":un(a,u);break;case"select":var T=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!u.multiple;var x=u.value;x!=null?Bt(a,!!u.multiple,x,!1):T!==!!u.multiple&&(u.defaultValue!=null?Bt(a,!!u.multiple,u.defaultValue,!0):Bt(a,!!u.multiple,u.multiple?[]:"",!1))}a[gi]=u}catch(F){Ee(e,e.return,F)}}break;case 6:if(At(t,e),Ut(e),s&4){if(e.stateNode===null)throw Error(i(162));a=e.stateNode,u=e.memoizedProps;try{a.nodeValue=u}catch(F){Ee(e,e.return,F)}}break;case 3:if(At(t,e),Ut(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(F){Ee(e,e.return,F)}break;case 4:At(t,e),Ut(e);break;case 13:At(t,e),Ut(e),a=e.child,a.flags&8192&&(u=a.memoizedState!==null,a.stateNode.isHidden=u,!u||a.alternate!==null&&a.alternate.memoizedState!==null||(Wa=ke())),s&4&&id(e);break;case 22:if(C=r!==null&&r.memoizedState!==null,e.mode&1?(Ke=(E=Ke)||C,At(t,e),Ke=E):At(t,e),Ut(e),s&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!C&&e.mode&1)for(M=e,C=e.child;C!==null;){for(P=M=C;M!==null;){switch(T=M,x=T.child,T.tag){case 0:case 11:case 14:case 15:Pi(4,T,T.return);break;case 1:Lr(T,T.return);var U=T.stateNode;if(typeof U.componentWillUnmount=="function"){s=T,r=T.return;try{t=s,U.props=t.memoizedProps,U.state=t.memoizedState,U.componentWillUnmount()}catch(F){Ee(s,r,F)}}break;case 5:Lr(T,T.return);break;case 22:if(T.memoizedState!==null){ld(P);continue}}x!==null?(x.return=T,M=x):ld(P)}C=C.sibling}e:for(C=null,P=e;;){if(P.tag===5){if(C===null){C=P;try{a=P.stateNode,E?(u=a.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(p=P.stateNode,g=P.memoizedProps.style,f=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=Gi("display",f))}catch(F){Ee(e,e.return,F)}}}else if(P.tag===6){if(C===null)try{P.stateNode.nodeValue=E?"":P.memoizedProps}catch(F){Ee(e,e.return,F)}}else if((P.tag!==22&&P.tag!==23||P.memoizedState===null||P===e)&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===e)break e;for(;P.sibling===null;){if(P.return===null||P.return===e)break e;C===P&&(C=null),P=P.return}C===P&&(C=null),P.sibling.return=P.return,P=P.sibling}}break;case 19:At(t,e),Ut(e),s&4&&id(e);break;case 21:break;default:At(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(td(r)){var s=r;break e}r=r.return}throw Error(i(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Vt(a,""),s.flags&=-33);var u=nd(e);Ba(e,u,a);break;case 3:case 4:var f=s.stateNode.containerInfo,p=nd(e);$a(e,p,f);break;default:throw Error(i(161))}}catch(g){Ee(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e,t,r){M=e,sd(e)}function sd(e,t,r){for(var s=(e.mode&1)!==0;M!==null;){var a=M,u=a.child;if(a.tag===22&&s){var f=a.memoizedState!==null||jo;if(!f){var p=a.alternate,g=p!==null&&p.memoizedState!==null||Ke;p=jo;var E=Ke;if(jo=f,(Ke=g)&&!E)for(M=a;M!==null;)f=M,g=f.child,f.tag===22&&f.memoizedState!==null?ud(a):g!==null?(g.return=f,M=g):ud(a);for(;u!==null;)M=u,sd(u),u=u.sibling;M=a,jo=p,Ke=E}ad(e)}else a.subtreeFlags&8772&&u!==null?(u.return=a,M=u):ad(e)}}function ad(e){for(;M!==null;){var t=M;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ke||zo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Ke)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Pt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&lc(t,u,s);break;case 3:var f=t.updateQueue;if(f!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}lc(t,f,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&r.focus();break;case"img":g.src&&(r.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var C=E.memoizedState;if(C!==null){var P=C.dehydrated;P!==null&&oi(P)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ke||t.flags&512&&ba(t)}catch(T){Ee(t,t.return,T)}}if(t===e){M=null;break}if(r=t.sibling,r!==null){r.return=t.return,M=r;break}M=t.return}}function ld(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var r=t.sibling;if(r!==null){r.return=t.return,M=r;break}M=t.return}}function ud(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{zo(4,t)}catch(g){Ee(t,r,g)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(g){Ee(t,a,g)}}var u=t.return;try{ba(t)}catch(g){Ee(t,u,g)}break;case 5:var f=t.return;try{ba(t)}catch(g){Ee(t,f,g)}}}catch(g){Ee(t,t.return,g)}if(t===e){M=null;break}var p=t.sibling;if(p!==null){p.return=t.return,M=p;break}M=t.return}}var ym=Math.ceil,bo=_e.ReactCurrentDispatcher,Va=_e.ReactCurrentOwner,_t=_e.ReactCurrentBatchConfig,ee=0,Ne=null,Ce=null,ze=0,ht=0,Dr=wn(0),Re=0,Ri=null,Xn=0,$o=0,Ha=0,Ai=null,rt=null,Wa=0,Mr=1/0,Xt=null,Bo=!1,Ka=null,Tn=null,Vo=!1,Cn=null,Ho=0,Ni=0,Ga=null,Wo=-1,Ko=0;function Qe(){return ee&6?ke():Wo!==-1?Wo:Wo=ke()}function Pn(e){return e.mode&1?ee&2&&ze!==0?ze&-ze:tm.transition!==null?(Ko===0&&(Ko=nu()),Ko):(e=oe,e!==0||(e=window.event,e=e===void 0?16:du(e.type)),e):1}function Nt(e,t,r,s){if(50<Ni)throw Ni=0,Ga=null,Error(i(185));ei(e,r,s),(!(ee&2)||e!==Ne)&&(e===Ne&&(!(ee&2)&&($o|=r),Re===4&&Rn(e,ze)),it(e,s),r===1&&ee===0&&!(t.mode&1)&&(Mr=ke()+500,_o&&Sn()))}function it(e,t){var r=e.callbackNode;tp(e,t);var s=eo(e,e===Ne?ze:0);if(s===0)r!==null&&Zl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Zl(r),t===1)e.tag===0?em(dd.bind(null,e)):Yu(dd.bind(null,e)),Yp(function(){!(ee&6)&&Sn()}),r=null;else{switch(ru(s)){case 1:r=Cs;break;case 4:r=eu;break;case 16:r=Yi;break;case 536870912:r=tu;break;default:r=Yi}r=wd(r,cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function cd(e,t){if(Wo=-1,Ko=0,ee&6)throw Error(i(327));var r=e.callbackNode;if(Ur()&&e.callbackNode!==r)return null;var s=eo(e,e===Ne?ze:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Go(e,s);else{t=s;var a=ee;ee|=2;var u=hd();(Ne!==e||ze!==t)&&(Xt=null,Mr=ke()+500,Zn(e,t));do try{Sm();break}catch(p){fd(e,p)}while(!0);da(),bo.current=u,ee=a,Ce!==null?t=0:(Ne=null,ze=0,t=Re)}if(t!==0){if(t===2&&(a=Ps(e),a!==0&&(s=a,t=qa(e,a))),t===1)throw r=Ri,Zn(e,0),Rn(e,s),it(e,ke()),r;if(t===6)Rn(e,s);else{if(a=e.current.alternate,!(s&30)&&!wm(a)&&(t=Go(e,s),t===2&&(u=Ps(e),u!==0&&(s=u,t=qa(e,u))),t===1))throw r=Ri,Zn(e,0),Rn(e,s),it(e,ke()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(i(345));case 2:er(e,rt,Xt);break;case 3:if(Rn(e,s),(s&130023424)===s&&(t=Wa+500-ke(),10<t)){if(eo(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Qe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ea(er.bind(null,e,rt,Xt),t);break}er(e,rt,Xt);break;case 4:if(Rn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var f=31-kt(s);u=1<<f,f=t[f],f>a&&(a=f),s&=~u}if(s=a,s=ke()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*ym(s/1960))-s,10<s){e.timeoutHandle=ea(er.bind(null,e,rt,Xt),s);break}er(e,rt,Xt);break;case 5:er(e,rt,Xt);break;default:throw Error(i(329))}}}return it(e,ke()),e.callbackNode===r?cd.bind(null,e):null}function qa(e,t){var r=Ai;return e.current.memoizedState.isDehydrated&&(Zn(e,t).flags|=256),e=Go(e,t),e!==2&&(t=rt,rt=r,t!==null&&Qa(t)),e}function Qa(e){rt===null?rt=e:rt.push.apply(rt,e)}function wm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],u=a.getSnapshot;a=a.value;try{if(!Tt(u(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t){for(t&=~Ha,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-kt(t),s=1<<r;e[r]=-1,t&=~s}}function dd(e){if(ee&6)throw Error(i(327));Ur();var t=eo(e,0);if(!(t&1))return it(e,ke()),null;var r=Go(e,t);if(e.tag!==0&&r===2){var s=Ps(e);s!==0&&(t=s,r=qa(e,s))}if(r===1)throw r=Ri,Zn(e,0),Rn(e,t),it(e,ke()),r;if(r===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,rt,Xt),it(e,ke()),null}function Ya(e,t){var r=ee;ee|=1;try{return e(t)}finally{ee=r,ee===0&&(Mr=ke()+500,_o&&Sn())}}function Jn(e){Cn!==null&&Cn.tag===0&&!(ee&6)&&Ur();var t=ee;ee|=1;var r=_t.transition,s=oe;try{if(_t.transition=null,oe=1,e)return e()}finally{oe=s,_t.transition=r,ee=t,!(ee&6)&&Sn()}}function Xa(){ht=Dr.current,de(Dr)}function Zn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Qp(r)),Ce!==null)for(r=Ce.return;r!==null;){var s=r;switch(sa(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&yo();break;case 3:Or(),de(et),de(Ve),wa();break;case 5:va(s);break;case 4:Or();break;case 13:de(ye);break;case 19:de(ye);break;case 10:fa(s.type._context);break;case 22:case 23:Xa()}r=r.return}if(Ne=e,Ce=e=An(e.current,null),ze=ht=t,Re=0,Ri=null,Ha=$o=Xn=0,rt=Ai=null,qn!==null){for(t=0;t<qn.length;t++)if(r=qn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,u=r.pending;if(u!==null){var f=u.next;u.next=a,s.next=f}r.pending=s}qn=null}return e}function fd(e,t){do{var r=Ce;try{if(da(),No.current=Do,Oo){for(var s=we.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Oo=!1}if(Yn=0,Ae=Pe=we=null,Ei=!1,Ii=0,Va.current=null,r===null||r.return===null){Re=1,Ri=t,Ce=null;break}e:{var u=e,f=r.return,p=r,g=t;if(t=ze,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var E=g,C=p,P=C.tag;if(!(C.mode&1)&&(P===0||P===11||P===15)){var T=C.alternate;T?(C.updateQueue=T.updateQueue,C.memoizedState=T.memoizedState,C.lanes=T.lanes):(C.updateQueue=null,C.memoizedState=null)}var x=Fc(f);if(x!==null){x.flags&=-257,jc(x,f,p,u,t),x.mode&1&&Uc(u,E,t),t=x,g=E;var U=t.updateQueue;if(U===null){var F=new Set;F.add(g),t.updateQueue=F}else U.add(g);break e}else{if(!(t&1)){Uc(u,E,t),Ja();break e}g=Error(i(426))}}else if(pe&&p.mode&1){var Te=Fc(f);if(Te!==null){!(Te.flags&65536)&&(Te.flags|=256),jc(Te,f,p,u,t),ua(xr(g,p));break e}}u=g=xr(g,p),Re!==4&&(Re=2),Ai===null?Ai=[u]:Ai.push(u),u=f;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var _=Dc(u,g,t);ac(u,_);break e;case 1:p=g;var y=u.type,S=u.stateNode;if(!(u.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Tn===null||!Tn.has(S)))){u.flags|=65536,t&=-t,u.lanes|=t;var R=Mc(u,p,t);ac(u,R);break e}}u=u.return}while(u!==null)}md(r)}catch(j){t=j,Ce===r&&r!==null&&(Ce=r=r.return);continue}break}while(!0)}function hd(){var e=bo.current;return bo.current=Do,e===null?Do:e}function Ja(){(Re===0||Re===3||Re===2)&&(Re=4),Ne===null||!(Xn&268435455)&&!($o&268435455)||Rn(Ne,ze)}function Go(e,t){var r=ee;ee|=2;var s=hd();(Ne!==e||ze!==t)&&(Xt=null,Zn(e,t));do try{_m();break}catch(a){fd(e,a)}while(!0);if(da(),ee=r,bo.current=s,Ce!==null)throw Error(i(261));return Ne=null,ze=0,Re}function _m(){for(;Ce!==null;)pd(Ce)}function Sm(){for(;Ce!==null&&!Kh();)pd(Ce)}function pd(e){var t=yd(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?md(e):Ce=t,Va.current=null}function md(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=pm(r,t),r!==null){r.flags&=32767,Ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ce=null;return}}else if(r=hm(r,t,ht),r!==null){Ce=r;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Re===0&&(Re=5)}function er(e,t,r){var s=oe,a=_t.transition;try{_t.transition=null,oe=1,Em(e,t,r,s)}finally{_t.transition=a,oe=s}return null}function Em(e,t,r,s){do Ur();while(Cn!==null);if(ee&6)throw Error(i(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var u=r.lanes|r.childLanes;if(np(e,u),e===Ne&&(Ce=Ne=null,ze=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Vo||(Vo=!0,wd(Yi,function(){return Ur(),null})),u=(r.flags&15990)!==0,r.subtreeFlags&15990||u){u=_t.transition,_t.transition=null;var f=oe;oe=1;var p=ee;ee|=4,Va.current=null,gm(e,r),od(r,e),Bp(Js),ro=!!Xs,Js=Xs=null,e.current=r,vm(r),Gh(),ee=p,oe=f,_t.transition=u}else e.current=r;if(Vo&&(Vo=!1,Cn=e,Ho=a),u=e.pendingLanes,u===0&&(Tn=null),Yh(r.stateNode),it(e,ke()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(Bo)throw Bo=!1,e=Ka,Ka=null,e;return Ho&1&&e.tag!==0&&Ur(),u=e.pendingLanes,u&1?e===Ga?Ni++:(Ni=0,Ga=e):Ni=0,Sn(),null}function Ur(){if(Cn!==null){var e=ru(Ho),t=_t.transition,r=oe;try{if(_t.transition=null,oe=16>e?16:e,Cn===null)var s=!1;else{if(e=Cn,Cn=null,Ho=0,ee&6)throw Error(i(331));var a=ee;for(ee|=4,M=e.current;M!==null;){var u=M,f=u.child;if(M.flags&16){var p=u.deletions;if(p!==null){for(var g=0;g<p.length;g++){var E=p[g];for(M=E;M!==null;){var C=M;switch(C.tag){case 0:case 11:case 15:Pi(8,C,u)}var P=C.child;if(P!==null)P.return=C,M=P;else for(;M!==null;){C=M;var T=C.sibling,x=C.return;if(ed(C),C===E){M=null;break}if(T!==null){T.return=x,M=T;break}M=x}}}var U=u.alternate;if(U!==null){var F=U.child;if(F!==null){U.child=null;do{var Te=F.sibling;F.sibling=null,F=Te}while(F!==null)}}M=u}}if(u.subtreeFlags&2064&&f!==null)f.return=u,M=f;else e:for(;M!==null;){if(u=M,u.flags&2048)switch(u.tag){case 0:case 11:case 15:Pi(9,u,u.return)}var _=u.sibling;if(_!==null){_.return=u.return,M=_;break e}M=u.return}}var y=e.current;for(M=y;M!==null;){f=M;var S=f.child;if(f.subtreeFlags&2064&&S!==null)S.return=f,M=S;else e:for(f=y;M!==null;){if(p=M,p.flags&2048)try{switch(p.tag){case 0:case 11:case 15:zo(9,p)}}catch(j){Ee(p,p.return,j)}if(p===f){M=null;break e}var R=p.sibling;if(R!==null){R.return=p.return,M=R;break e}M=p.return}}if(ee=a,Sn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Xi,e)}catch{}s=!0}return s}finally{oe=r,_t.transition=t}}return!1}function gd(e,t,r){t=xr(r,t),t=Dc(e,t,1),e=In(e,t,1),t=Qe(),e!==null&&(ei(e,1,t),it(e,t))}function Ee(e,t,r){if(e.tag===3)gd(e,e,r);else for(;t!==null;){if(t.tag===3){gd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Tn===null||!Tn.has(s))){e=xr(r,e),e=Mc(t,e,1),t=In(t,e,1),e=Qe(),t!==null&&(ei(t,1,e),it(t,e));break}}t=t.return}}function Im(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&r,Ne===e&&(ze&r)===r&&(Re===4||Re===3&&(ze&130023424)===ze&&500>ke()-Wa?Zn(e,0):Ha|=r),it(e,t)}function vd(e,t){t===0&&(e.mode&1?(t=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):t=1);var r=Qe();e=qt(e,t),e!==null&&(ei(e,t,r),it(e,r))}function km(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),vd(e,r)}function Tm(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(t),vd(e,r)}var yd;yd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)nt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return nt=!1,fm(e,t,r);nt=!!(e.flags&131072)}else nt=!1,pe&&t.flags&1048576&&Xu(t,Eo,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Fo(e,t),e=t.pendingProps;var a=kr(t,Ve.current);Nr(t,r),a=Ea(null,t,s,e,a,r);var u=Ia();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(s)?(u=!0,wo(t)):u=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ma(t),a.updater=Mo,t.stateNode=a,a._reactInternals=t,Aa(t,s,e,r),t=La(null,t,s,!0,u,r)):(t.tag=0,pe&&u&&oa(t),qe(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Fo(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Pm(s),e=Pt(s,e),a){case 0:t=xa(null,t,s,e,r);break e;case 1:t=Hc(null,t,s,e,r);break e;case 11:t=zc(null,t,s,e,r);break e;case 14:t=bc(null,t,s,Pt(s.type,e),r);break e}throw Error(i(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Pt(s,a),xa(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Pt(s,a),Hc(e,t,s,a,r);case 3:e:{if(Wc(t),e===null)throw Error(i(387));s=t.pendingProps,u=t.memoizedState,a=u.element,sc(e,t),Ro(t,s,null,r);var f=t.memoizedState;if(s=f.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){a=xr(Error(i(423)),t),t=Kc(e,t,s,r,a);break e}else if(s!==a){a=xr(Error(i(424)),t),t=Kc(e,t,s,r,a);break e}else for(ft=yn(t.stateNode.containerInfo.firstChild),dt=t,pe=!0,Ct=null,r=ic(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pr(),s===a){t=Yt(e,t,r);break e}qe(e,t,s,r)}t=t.child}return t;case 5:return uc(t),e===null&&la(t),s=t.type,a=t.pendingProps,u=e!==null?e.memoizedProps:null,f=a.children,Zs(s,a)?f=null:u!==null&&Zs(s,u)&&(t.flags|=32),Vc(e,t),qe(e,t,f,r),t.child;case 6:return e===null&&la(t),null;case 13:return Gc(e,t,r);case 4:return ga(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Rr(t,null,s,r):qe(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Pt(s,a),zc(e,t,s,a,r);case 7:return qe(e,t,t.pendingProps,r),t.child;case 8:return qe(e,t,t.pendingProps.children,r),t.child;case 12:return qe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,u=t.memoizedProps,f=a.value,ue(To,s._currentValue),s._currentValue=f,u!==null)if(Tt(u.value,f)){if(u.children===a.children&&!et.current){t=Yt(e,t,r);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var p=u.dependencies;if(p!==null){f=u.child;for(var g=p.firstContext;g!==null;){if(g.context===s){if(u.tag===1){g=Qt(-1,r&-r),g.tag=2;var E=u.updateQueue;if(E!==null){E=E.shared;var C=E.pending;C===null?g.next=g:(g.next=C.next,C.next=g),E.pending=g}}u.lanes|=r,g=u.alternate,g!==null&&(g.lanes|=r),ha(u.return,r,t),p.lanes|=r;break}g=g.next}}else if(u.tag===10)f=u.type===t.type?null:u.child;else if(u.tag===18){if(f=u.return,f===null)throw Error(i(341));f.lanes|=r,p=f.alternate,p!==null&&(p.lanes|=r),ha(f,r,t),f=u.sibling}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===t){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}qe(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Nr(t,r),a=yt(a),s=s(a),t.flags|=1,qe(e,t,s,r),t.child;case 14:return s=t.type,a=Pt(s,t.pendingProps),a=Pt(s.type,a),bc(e,t,s,a,r);case 15:return $c(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Pt(s,a),Fo(e,t),t.tag=1,tt(s)?(e=!0,wo(t)):e=!1,Nr(t,r),xc(t,s,a),Aa(t,s,a,r),La(null,t,s,!0,e,r);case 19:return Qc(e,t,r);case 22:return Bc(e,t,r)}throw Error(i(156,t.tag))};function wd(e,t){return Jl(e,t)}function Cm(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,r,s){return new Cm(e,t,r,s)}function Za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pm(e){if(typeof e=="function")return Za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===at)return 11;if(e===De)return 14}return 2}function An(e,t){var r=e.alternate;return r===null?(r=St(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function qo(e,t,r,s,a,u){var f=2;if(s=e,typeof e=="function")Za(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case ve:return tr(r.children,a,u,t);case Le:f=8,a|=8;break;case Xe:return e=St(12,r,t,a|2),e.elementType=Xe,e.lanes=u,e;case Ge:return e=St(13,r,t,a),e.elementType=Ge,e.lanes=u,e;case Ze:return e=St(19,r,t,a),e.elementType=Ze,e.lanes=u,e;case fe:return Qo(r,a,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Je:f=10;break e;case Et:f=9;break e;case at:f=11;break e;case De:f=14;break e;case Me:f=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=St(f,r,t,a),t.elementType=e,t.type=s,t.lanes=u,t}function tr(e,t,r,s){return e=St(7,e,s,t),e.lanes=r,e}function Qo(e,t,r,s){return e=St(22,e,s,t),e.elementType=fe,e.lanes=r,e.stateNode={isHidden:!1},e}function el(e,t,r){return e=St(6,e,null,t),e.lanes=r,e}function tl(e,t,r){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rm(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rs(0),this.expirationTimes=Rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rs(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function nl(e,t,r,s,a,u,f,p,g){return e=new Rm(e,t,r,p,g),t===1?(t=1,u===!0&&(t|=8)):t=0,u=St(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ma(u),e}function Am(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function _d(e){if(!e)return _n;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var r=e.type;if(tt(r))return qu(e,r,t)}return t}function Sd(e,t,r,s,a,u,f,p,g){return e=nl(r,s,!0,e,a,u,f,p,g),e.context=_d(null),r=e.current,s=Qe(),a=Pn(r),u=Qt(s,a),u.callback=t??null,In(r,u,a),e.current.lanes=a,ei(e,a,s),it(e,s),e}function Yo(e,t,r,s){var a=t.current,u=Qe(),f=Pn(a);return r=_d(r),t.context===null?t.context=r:t.pendingContext=r,t=Qt(u,f),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=In(a,t,f),e!==null&&(Nt(e,a,f,u),Po(e,a,f)),f}function Xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ed(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function rl(e,t){Ed(e,t),(e=e.alternate)&&Ed(e,t)}function Nm(){return null}var Id=typeof reportError=="function"?reportError:function(e){console.error(e)};function il(e){this._internalRoot=e}Jo.prototype.render=il.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));Yo(e,t,null,null)},Jo.prototype.unmount=il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Yo(null,e,null,null)}),t[Ht]=null}};function Jo(e){this._internalRoot=e}Jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=su();e={blockedOn:null,target:e,priority:t};for(var r=0;r<mn.length&&t!==0&&t<mn[r].priority;r++);mn.splice(r,0,e),r===0&&uu(e)}};function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kd(){}function Om(e,t,r,s,a){if(a){if(typeof s=="function"){var u=s;s=function(){var E=Xo(f);u.call(E)}}var f=Sd(t,s,e,0,null,!1,!1,"",kd);return e._reactRootContainer=f,e[Ht]=f.current,pi(e.nodeType===8?e.parentNode:e),Jn(),f}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var p=s;s=function(){var E=Xo(g);p.call(E)}}var g=nl(e,0,!1,null,null,!1,!1,"",kd);return e._reactRootContainer=g,e[Ht]=g.current,pi(e.nodeType===8?e.parentNode:e),Jn(function(){Yo(t,g,r,s)}),g}function es(e,t,r,s,a){var u=r._reactRootContainer;if(u){var f=u;if(typeof a=="function"){var p=a;a=function(){var g=Xo(f);p.call(g)}}Yo(t,f,e,a)}else f=Om(r,t,e,a,s);return Xo(f)}iu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Zr(t.pendingLanes);r!==0&&(As(t,r|1),it(t,ke()),!(ee&6)&&(Mr=ke()+500,Sn()))}break;case 13:Jn(function(){var s=qt(e,1);if(s!==null){var a=Qe();Nt(s,e,1,a)}}),rl(e,1)}},Ns=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var r=Qe();Nt(t,e,134217728,r)}rl(e,134217728)}},ou=function(e){if(e.tag===13){var t=Pn(e),r=qt(e,t);if(r!==null){var s=Qe();Nt(r,e,t,s)}rl(e,t)}},su=function(){return oe},au=function(e,t){var r=oe;try{return oe=e,t()}finally{oe=r}},Qr=function(e,t,r){switch(t){case"input":if(fr(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=vo(s);if(!a)throw Error(i(90));Vr(s),fr(s,a)}}}break;case"textarea":un(e,r);break;case"select":t=r.value,t!=null&&Bt(e,!!r.multiple,t,!1)}},dn=Ya,Kl=Jn;var xm={usingClientEntryPoint:!1,Events:[vi,Er,vo,Ie,Ot,Ya]},Oi={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lm={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yl(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||Nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Xi=ts.inject(Lm),xt=ts}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xm,ot.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ol(t))throw Error(i(200));return Am(e,t,null,r)},ot.createRoot=function(e,t){if(!ol(e))throw Error(i(299));var r=!1,s="",a=Id;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nl(e,1,!1,null,null,r,!1,s,a),e[Ht]=t.current,pi(e.nodeType===8?e.parentNode:e),new il(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Yl(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return Jn(e)},ot.hydrate=function(e,t,r){if(!Zo(t))throw Error(i(200));return es(null,e,t,!0,r)},ot.hydrateRoot=function(e,t,r){if(!ol(e))throw Error(i(405));var s=r!=null&&r.hydratedSources||null,a=!1,u="",f=Id;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),t=Sd(t,null,e,1,r??null,a,!1,u,f),e[Ht]=t.current,pi(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Jo(t)},ot.render=function(e,t,r){if(!Zo(t))throw Error(i(200));return es(null,e,t,!1,r)},ot.unmountComponentAtNode=function(e){if(!Zo(e))throw Error(i(40));return e._reactRootContainer?(Jn(function(){es(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1},ot.unstable_batchedUpdates=Ya,ot.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Zo(r))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return es(e,t,r,!1,s)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var xd;function _f(){if(xd)return ll.exports;xd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),ll.exports=bm(),ll.exports}var Ld;function $m(){if(Ld)return ns;Ld=1;var o=_f();return ns.createRoot=o.createRoot,ns.hydrateRoot=o.hydrateRoot,ns}var Bm=$m(),Vm=_f();const Hm=wf(Vm);function Di(){return Di=Object.assign||function(o){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(o[l]=i[l])}return o},Di.apply(this,arguments)}var Wm=function(n,i){i===void 0&&(i=!0),re.useEffect(function(){if(i){var l=function(d){d.key==="Escape"&&n(d)};return document.addEventListener("keyup",l),function(){i&&document.removeEventListener("keyup",l)}}},[n,i])},Km=function(n,i){i===void 0&&(i=!0),re.useEffect(function(){if(i){var l=function(){n()};return window.addEventListener("resize",l),function(){i&&window.removeEventListener("resize",l)}}},[n,i])},Gm=function(n,i,l){l===void 0&&(l=!0),re.useEffect(function(){if(l){var c=function(h){var v=Array.isArray(n)?n:[n],m=!1;v.forEach(function(I){if(!I.current||I.current.contains(h.target)){m=!0;return}}),h.stopPropagation(),m||i(h)};return document.addEventListener("mousedown",c),document.addEventListener("touchstart",c),function(){l&&(document.removeEventListener("mousedown",c),document.removeEventListener("touchstart",c))}}},[n,i,l])},qm=function(n,i){i===void 0&&(i=!0),re.useEffect(function(){if(i){var l=function(d){if(d.keyCode===9){var h,v=n==null||(h=n.current)===null||h===void 0?void 0:h.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),m=Array.prototype.slice.call(v);if(m.length===1){d.preventDefault();return}var I=m[0],O=m[m.length-1];d.shiftKey&&document.activeElement===I?(d.preventDefault(),O.focus()):document.activeElement===O&&(d.preventDefault(),I.focus())}};return document.addEventListener("keydown",l),function(){i&&document.removeEventListener("keydown",l)}}},[n,i])},Qm=typeof window<"u"?re.useLayoutEffect:re.useEffect,Li={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},Ym=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],Xm=function(n,i,l,c,d){var h=d.offsetX,v=d.offsetY,m=c?8:0,I=l.split(" "),O=n.top+n.height/2,L=n.left+n.width/2,z=i.height,V=i.width,ie=O-z/2,q=L-V/2,Q="",me="0%",ge="0%";switch(I[0]){case"top":ie-=z/2+n.height/2+m,Q="rotate(180deg)  translateX(50%)",me="100%",ge="50%";break;case"bottom":ie+=z/2+n.height/2+m,Q="rotate(0deg) translateY(-100%) translateX(-50%)",ge="50%";break;case"left":q-=V/2+n.width/2+m,Q=" rotate(90deg)  translateY(50%) translateX(-25%)",ge="100%",me="50%";break;case"right":q+=V/2+n.width/2+m,Q="rotate(-90deg)  translateY(-150%) translateX(25%)",me="50%";break}switch(I[1]){case"top":ie=n.top,me=n.height/2+"px";break;case"bottom":ie=n.top-z+n.height,me=z-n.height/2+"px";break;case"left":q=n.left,ge=n.width/2+"px";break;case"right":q=n.left-V+n.width,ge=V-n.width/2+"px";break}return ie=I[0]==="top"?ie-v:ie+v,q=I[0]==="left"?q-h:q+h,{top:ie,left:q,transform:Q,arrowLeft:ge,arrowTop:me}},Jm=function(n){var i={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if(typeof n=="string"){var l=document.querySelector(n);l!==null&&(i=l.getBoundingClientRect())}return i},Zm=function(n,i,l,c,d,h){var v=d.offsetX,m=d.offsetY,I={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},O=0,L=Jm(h),z=Array.isArray(l)?l:[l];for((h||Array.isArray(l))&&(z=[].concat(z,Ym));O<z.length;){I=Xm(n,i,z[O],c,{offsetX:v,offsetY:m});var V={top:I.top,left:I.left,width:i.width,height:i.height};if(V.top<=L.top||V.left<=L.left||V.top+V.height>=L.top+L.height||V.left+V.width>=L.left+L.width)O++;else break}return I},eg=0,tg=function(){var n=document.getElementById("popup-root");return n===null&&(n=document.createElement("div"),n.setAttribute("id","popup-root"),document.body.appendChild(n)),n},ng=re.forwardRef(function(o,n){var i=o.trigger,l=i===void 0?null:i,c=o.onOpen,d=c===void 0?function(){}:c,h=o.onClose,v=h===void 0?function(){}:h,m=o.defaultOpen,I=m===void 0?!1:m,O=o.open,L=O===void 0?void 0:O,z=o.disabled,V=z===void 0?!1:z,ie=o.nested,q=ie===void 0?!1:ie,Q=o.closeOnDocumentClick,me=Q===void 0?!0:Q,ge=o.repositionOnResize,xe=ge===void 0?!0:ge,_e=o.closeOnEscape,be=_e===void 0?!0:_e,Se=o.on,ve=Se===void 0?["click"]:Se,Le=o.contentStyle,Xe=Le===void 0?{}:Le,Je=o.arrowStyle,Et=Je===void 0?{}:Je,at=o.overlayStyle,Ge=at===void 0?{}:at,Ze=o.className,De=Ze===void 0?"":Ze,Me=o.position,fe=Me===void 0?"bottom center":Me,N=o.modal,b=N===void 0?!1:N,D=o.lockScroll,w=D===void 0?!1:D,k=o.arrow,K=k===void 0?!0:k,Y=o.offsetX,Z=Y===void 0?0:Y,J=o.offsetY,se=J===void 0?0:J,te=o.mouseEnterDelay,le=te===void 0?100:te,$e=o.mouseLeaveDelay,cr=$e===void 0?100:$e,Vr=o.keepTooltipInside,dr=Vr===void 0?!1:Vr,ln=o.children,Hr=re.useState(L||I),lt=Hr[0],fr=Hr[1],mt=re.useRef(null),Ue=re.useRef(null),ut=re.useRef(null),Bt=re.useRef(null),hr=re.useRef("popup-"+ ++eg),Be=b?!0:!l,un=re.useRef(0);Qm(function(){return lt?(Bt.current=document.activeElement,Wr(),Gi(),Bn()):Ss(),function(){clearTimeout(un.current)}},[lt]),re.useEffect(function(){typeof L=="boolean"&&(L?bn():It())},[L,V]);var bn=function(G){lt||V||(fr(!0),setTimeout(function(){return d(G)},0))},It=function(G){var Fe;!lt||V||(fr(!1),Be&&((Fe=Bt.current)===null||Fe===void 0||Fe.focus()),setTimeout(function(){return v(G)},0))},$n=function(G){G==null||G.stopPropagation(),lt?It(G):bn(G)},cn=function(G){clearTimeout(un.current),un.current=setTimeout(function(){return bn(G)},le)},Ki=function(G){G==null||G.preventDefault(),$n()},Vt=function(G){clearTimeout(un.current),un.current=setTimeout(function(){return It(G)},cr)},Bn=function(){Be&&w&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},Ss=function(){Be&&w&&(document.getElementsByTagName("body")[0].style.overflow="auto")},Gi=function(){var G,Fe=Ue==null||(G=Ue.current)===null||G===void 0?void 0:G.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),Ie=Array.prototype.slice.call(Fe)[0];Ie==null||Ie.focus()};re.useImperativeHandle(n,function(){return{open:function(){bn()},close:function(){It()},toggle:function(){$n()}}});var Wr=function(){if(!(Be||!lt)&&!(!(mt!=null&&mt.current)||!(mt!=null&&mt.current)||!(Ue!=null&&Ue.current))){var G=mt.current.getBoundingClientRect(),Fe=Ue.current.getBoundingClientRect(),Ie=Zm(G,Fe,fe,K,{offsetX:Z,offsetY:se},dr);if(Ue.current.style.top=Ie.top+window.scrollY+"px",Ue.current.style.left=Ie.left+window.scrollX+"px",K&&ut.current){var Ot,dn;ut.current.style.transform=Ie.transform,ut.current.style.setProperty("-ms-transform",Ie.transform),ut.current.style.setProperty("-webkit-transform",Ie.transform),ut.current.style.top=((Ot=Et.top)===null||Ot===void 0?void 0:Ot.toString())||Ie.arrowTop,ut.current.style.left=((dn=Et.left)===null||dn===void 0?void 0:dn.toString())||Ie.arrowLeft}}};Wm(It,be),qm(Ue,lt&&Be),Km(Wr,xe),Gm(l?[Ue,mt]:[Ue],It,me&&!q);var Es=function(){for(var G={key:"T",ref:mt,"aria-describedby":hr.current},Fe=Array.isArray(ve)?ve:[ve],Ie=0,Ot=Fe.length;Ie<Ot;Ie++)switch(Fe[Ie]){case"click":G.onClick=$n;break;case"right-click":G.onContextMenu=Ki;break;case"hover":G.onMouseEnter=cn,G.onMouseLeave=Vt;break;case"focus":G.onFocus=cn,G.onBlur=Vt;break}if(typeof l=="function"){var dn=l(lt);return!!l&&Jt.cloneElement(dn,G)}return!!l&&Jt.cloneElement(l,G)},Kr=function(){var G=Be?Li.popupContent.modal:Li.popupContent.tooltip,Fe={className:"popup-content "+(De!==""?De.split(" ").map(function(Ie){return Ie+"-content"}).join(" "):""),style:Di({},G,Xe,{pointerEvents:"auto"}),ref:Ue,onClick:function(Ot){Ot.stopPropagation()}};return!b&&ve.indexOf("hover")>=0&&(Fe.onMouseEnter=cn,Fe.onMouseLeave=Vt),Fe},pr=function(){return Jt.createElement("div",Object.assign({},Kr(),{key:"C",role:Be?"dialog":"tooltip",id:hr.current}),K&&!Be&&Jt.createElement("div",{ref:ut,style:Li.popupArrow},Jt.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(De!==""?De.split(" ").map(function(G){return G+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:Di({position:"absolute"},Et)},Jt.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),ln&&typeof ln=="function"?ln(It,lt):ln)},Gr=!(ve.indexOf("hover")>=0),qr=Be?Li.overlay.modal:Li.overlay.tooltip,Qr=[Gr&&Jt.createElement("div",{key:"O","data-testid":"overlay","data-popup":Be?"modal":"tooltip",className:"popup-overlay "+(De!==""?De.split(" ").map(function(he){return he+"-overlay"}).join(" "):""),style:Di({},qr,Ge,{pointerEvents:me&&q||Be?"auto":"none"}),onClick:me&&q?It:void 0,tabIndex:-1},Be&&pr()),!Be&&pr()];return Jt.createElement(Jt.Fragment,null,Es(),lt&&Hm.createPortal(Qr,tg()))});const rg=({onSub:o})=>A.jsx("button",{type:"submit",onClick:o,children:" Add Site "}),ig=({onAddSite:o})=>{const[n,i]=re.useState(""),[l,c]=re.useState("");return A.jsx(A.Fragment,{children:A.jsx("div",{children:A.jsx(ng,{trigger:A.jsx("button",{className:"button",children:" Add Sites "}),position:"right center",children:A.jsxs("div",{children:[A.jsx("h3",{children:" Add Sites "}),A.jsx("label",{children:" Site Name: "}),A.jsx("input",{type:"text",name:"siteName",onChange:d=>i(d.target.value)}),A.jsx("label",{children:" Site URL: "}),A.jsx("input",{type:"text",name:"siteURL",onChange:d=>c(d.target.value)}),A.jsx(rg,{onSub:()=>o(d=>[...d,[n,l]])})]})})})})};var Dd={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Sf=function(o){const n=[];let i=0;for(let l=0;l<o.length;l++){let c=o.charCodeAt(l);c<128?n[i++]=c:c<2048?(n[i++]=c>>6|192,n[i++]=c&63|128):(c&64512)===55296&&l+1<o.length&&(o.charCodeAt(l+1)&64512)===56320?(c=65536+((c&1023)<<10)+(o.charCodeAt(++l)&1023),n[i++]=c>>18|240,n[i++]=c>>12&63|128,n[i++]=c>>6&63|128,n[i++]=c&63|128):(n[i++]=c>>12|224,n[i++]=c>>6&63|128,n[i++]=c&63|128)}return n},og=function(o){const n=[];let i=0,l=0;for(;i<o.length;){const c=o[i++];if(c<128)n[l++]=String.fromCharCode(c);else if(c>191&&c<224){const d=o[i++];n[l++]=String.fromCharCode((c&31)<<6|d&63)}else if(c>239&&c<365){const d=o[i++],h=o[i++],v=o[i++],m=((c&7)<<18|(d&63)<<12|(h&63)<<6|v&63)-65536;n[l++]=String.fromCharCode(55296+(m>>10)),n[l++]=String.fromCharCode(56320+(m&1023))}else{const d=o[i++],h=o[i++];n[l++]=String.fromCharCode((c&15)<<12|(d&63)<<6|h&63)}}return n.join("")},Ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(o,n){if(!Array.isArray(o))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let c=0;c<o.length;c+=3){const d=o[c],h=c+1<o.length,v=h?o[c+1]:0,m=c+2<o.length,I=m?o[c+2]:0,O=d>>2,L=(d&3)<<4|v>>4;let z=(v&15)<<2|I>>6,V=I&63;m||(V=64,h||(z=64)),l.push(i[O],i[L],i[z],i[V])}return l.join("")},encodeString(o,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(o):this.encodeByteArray(Sf(o),n)},decodeString(o,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(o):og(this.decodeStringToByteArray(o,n))},decodeStringToByteArray(o,n){this.init_();const i=n?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let c=0;c<o.length;){const d=i[o.charAt(c++)],v=c<o.length?i[o.charAt(c)]:0;++c;const I=c<o.length?i[o.charAt(c)]:64;++c;const L=c<o.length?i[o.charAt(c)]:64;if(++c,d==null||v==null||I==null||L==null)throw new sg;const z=d<<2|v>>4;if(l.push(z),I!==64){const V=v<<4&240|I>>2;if(l.push(V),L!==64){const ie=I<<6&192|L;l.push(ie)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let o=0;o<this.ENCODED_VALS.length;o++)this.byteToCharMap_[o]=this.ENCODED_VALS.charAt(o),this.charToByteMap_[this.byteToCharMap_[o]]=o,this.byteToCharMapWebSafe_[o]=this.ENCODED_VALS_WEBSAFE.charAt(o),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[o]]=o,o>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(o)]=o,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(o)]=o)}}};class sg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ag=function(o){const n=Sf(o);return Ef.encodeByteArray(n,!0)},If=function(o){return ag(o).replace(/\./g,"")},kf=function(o){try{return Ef.decodeString(o,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function lg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const ug=()=>lg().__FIREBASE_DEFAULTS__,cg=()=>{if(typeof process>"u"||typeof Dd>"u")return;const o=Dd.__FIREBASE_DEFAULTS__;if(o)return JSON.parse(o)},dg=()=>{if(typeof document>"u")return;let o;try{o=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=o&&kf(o[1]);return n&&JSON.parse(n)},Ol=()=>{try{return ug()||cg()||dg()}catch(o){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${o}`);return}},fg=o=>{var n,i;return(i=(n=Ol())===null||n===void 0?void 0:n.emulatorHosts)===null||i===void 0?void 0:i[o]},Tf=()=>{var o;return(o=Ol())===null||o===void 0?void 0:o.config},Cf=o=>{var n;return(n=Ol())===null||n===void 0?void 0:n[`_${o}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,i)=>{this.resolve=n,this.reject=i})}wrapCallback(n){return(i,l)=>{i?this.reject(i):this.resolve(l),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(i):n(i,l))}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function mg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pf(){const o=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof o=="object"&&o.id!==void 0}function gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vg(){const o=Ye();return o.indexOf("MSIE ")>=0||o.indexOf("Trident/")>=0}function Rf(){try{return typeof indexedDB=="object"}catch{return!1}}function Af(){return new Promise((o,n)=>{try{let i=!0;const l="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(l);c.onsuccess=()=>{c.result.close(),i||self.indexedDB.deleteDatabase(l),o(!0)},c.onupgradeneeded=()=>{i=!1},c.onerror=()=>{var d;n(((d=c.error)===null||d===void 0?void 0:d.message)||"")}}catch(i){n(i)}})}function yg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wg="FirebaseError";class $t extends Error{constructor(n,i,l){super(i),this.code=n,this.customData=l,this.name=wg,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(n,i,l){this.service=n,this.serviceName=i,this.errors=l}create(n,...i){const l=i[0]||{},c=`${this.service}/${n}`,d=this.errors[n],h=d?_g(d,l):"Error",v=`${this.serviceName}: ${h} (${c}).`;return new $t(c,v,l)}}function _g(o,n){return o.replace(Sg,(i,l)=>{const c=n[l];return c!=null?String(c):`<${l}?>`})}const Sg=/\{\$([^}]+)}/g;function Eg(o){for(const n in o)if(Object.prototype.hasOwnProperty.call(o,n))return!1;return!0}function Fi(o,n){if(o===n)return!0;const i=Object.keys(o),l=Object.keys(n);for(const c of i){if(!l.includes(c))return!1;const d=o[c],h=n[c];if(Md(d)&&Md(h)){if(!Fi(d,h))return!1}else if(d!==h)return!1}for(const c of l)if(!i.includes(c))return!1;return!0}function Md(o){return o!==null&&typeof o=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function bi(o){const n=[];for(const[i,l]of Object.entries(o))Array.isArray(l)?l.forEach(c=>{n.push(encodeURIComponent(i)+"="+encodeURIComponent(c))}):n.push(encodeURIComponent(i)+"="+encodeURIComponent(l));return n.length?"&"+n.join("&"):""}function Ig(o,n){const i=new kg(o,n);return i.subscribe.bind(i)}class kg{constructor(n,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{n(this)}).catch(l=>{this.error(l)})}next(n){this.forEachObserver(i=>{i.next(n)})}error(n){this.forEachObserver(i=>{i.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,i,l){let c;if(n===void 0&&i===void 0&&l===void 0)throw new Error("Missing Observer.");Tg(n,["next","error","complete"])?c=n:c={next:n,error:i,complete:l},c.next===void 0&&(c.next=dl),c.error===void 0&&(c.error=dl),c.complete===void 0&&(c.complete=dl);const d=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?c.error(this.finalError):c.complete()}catch{}}),this.observers.push(c),d}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,n)}sendOne(n,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{i(this.observers[n])}catch(l){typeof console<"u"&&console.error&&console.error(l)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tg(o,n){if(typeof o!="object"||o===null)return!1;for(const i of n)if(i in o&&typeof o[i]=="function")return!0;return!1}function dl(){}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Cg=1e3,Pg=2,Rg=4*60*60*1e3,Ag=.5;function Ud(o,n=Cg,i=Pg){const l=n*Math.pow(i,o),c=Math.round(Ag*l*(Math.random()-.5)*2);return Math.min(Rg,l+c)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function zn(o){return o&&o._delegate?o._delegate:o}class bt{constructor(n,i,l){this.name=n,this.instanceFactory=i,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ng{constructor(n,i){this.name=n,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const i=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(i)){const l=new hg;if(this.instancesDeferred.set(i,l),this.isInitialized(i)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:i});c&&l.resolve(c)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(n){var i;const l=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),c=(i=n==null?void 0:n.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(l)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:l})}catch(d){if(c)return null;throw d}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(xg(n))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[i,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);try{const d=this.getOrInitializeService({instanceIdentifier:c});l.resolve(d)}catch{}}}}clearInstance(n=nr){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...n.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=nr){return this.instances.has(n)}getOptions(n=nr){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:i={}}=n,l=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:l,options:i});for(const[d,h]of this.instancesDeferred.entries()){const v=this.normalizeInstanceIdentifier(d);l===v&&h.resolve(c)}return c}onInit(n,i){var l;const c=this.normalizeInstanceIdentifier(i),d=(l=this.onInitCallbacks.get(c))!==null&&l!==void 0?l:new Set;d.add(n),this.onInitCallbacks.set(c,d);const h=this.instances.get(c);return h&&n(h,c),()=>{d.delete(n)}}invokeOnInitCallbacks(n,i){const l=this.onInitCallbacks.get(i);if(l)for(const c of l)try{c(n,i)}catch{}}getOrInitializeService({instanceIdentifier:n,options:i={}}){let l=this.instances.get(n);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:Og(n),options:i}),this.instances.set(n,l),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(l,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,l)}catch{}return l||null}normalizeInstanceIdentifier(n=nr){return this.component?this.component.multipleInstances?n:nr:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Og(o){return o===nr?void 0:o}function xg(o){return o.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Lg{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const i=this.getProvider(n.name);if(i.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);i.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const i=new Ng(n,this);return this.providers.set(n,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var ae;(function(o){o[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT"})(ae||(ae={}));const Dg={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Mg=ae.INFO,Ug={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Fg=(o,n,...i)=>{if(n<o.logLevel)return;const l=new Date().toISOString(),c=Ug[n];if(c)console[c](`[${l}]  ${o.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class xl{constructor(n){this.name=n,this._logLevel=Mg,this._logHandler=Fg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in ae))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?Dg[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...n),this._logHandler(this,ae.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...n),this._logHandler(this,ae.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...n),this._logHandler(this,ae.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...n),this._logHandler(this,ae.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...n),this._logHandler(this,ae.ERROR,...n)}}const jg=(o,n)=>n.some(i=>o instanceof i);let Fd,jd;function zg(){return Fd||(Fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bg(){return jd||(jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nf=new WeakMap,Sl=new WeakMap,Of=new WeakMap,fl=new WeakMap,Ll=new WeakMap;function $g(o){const n=new Promise((i,l)=>{const c=()=>{o.removeEventListener("success",d),o.removeEventListener("error",h)},d=()=>{i(Un(o.result)),c()},h=()=>{l(o.error),c()};o.addEventListener("success",d),o.addEventListener("error",h)});return n.then(i=>{i instanceof IDBCursor&&Nf.set(i,o)}).catch(()=>{}),Ll.set(n,o),n}function Bg(o){if(Sl.has(o))return;const n=new Promise((i,l)=>{const c=()=>{o.removeEventListener("complete",d),o.removeEventListener("error",h),o.removeEventListener("abort",h)},d=()=>{i(),c()},h=()=>{l(o.error||new DOMException("AbortError","AbortError")),c()};o.addEventListener("complete",d),o.addEventListener("error",h),o.addEventListener("abort",h)});Sl.set(o,n)}let El={get(o,n,i){if(o instanceof IDBTransaction){if(n==="done")return Sl.get(o);if(n==="objectStoreNames")return o.objectStoreNames||Of.get(o);if(n==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Un(o[n])},set(o,n,i){return o[n]=i,!0},has(o,n){return o instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in o}};function Vg(o){El=o(El)}function Hg(o){return o===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...i){const l=o.call(hl(this),n,...i);return Of.set(l,n.sort?n.sort():[n]),Un(l)}:bg().includes(o)?function(...n){return o.apply(hl(this),n),Un(Nf.get(this))}:function(...n){return Un(o.apply(hl(this),n))}}function Wg(o){return typeof o=="function"?Hg(o):(o instanceof IDBTransaction&&Bg(o),jg(o,zg())?new Proxy(o,El):o)}function Un(o){if(o instanceof IDBRequest)return $g(o);if(fl.has(o))return fl.get(o);const n=Wg(o);return n!==o&&(fl.set(o,n),Ll.set(n,o)),n}const hl=o=>Ll.get(o);function xf(o,n,{blocked:i,upgrade:l,blocking:c,terminated:d}={}){const h=indexedDB.open(o,n),v=Un(h);return l&&h.addEventListener("upgradeneeded",m=>{l(Un(h.result),m.oldVersion,m.newVersion,Un(h.transaction),m)}),i&&h.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),v.then(m=>{d&&m.addEventListener("close",()=>d()),c&&m.addEventListener("versionchange",I=>c(I.oldVersion,I.newVersion,I))}).catch(()=>{}),v}const Kg=["get","getKey","getAll","getAllKeys","count"],Gg=["put","add","delete","clear"],pl=new Map;function zd(o,n){if(!(o instanceof IDBDatabase&&!(n in o)&&typeof n=="string"))return;if(pl.get(n))return pl.get(n);const i=n.replace(/FromIndex$/,""),l=n!==i,c=Gg.includes(i);if(!(i in(l?IDBIndex:IDBObjectStore).prototype)||!(c||Kg.includes(i)))return;const d=async function(h,...v){const m=this.transaction(h,c?"readwrite":"readonly");let I=m.store;return l&&(I=I.index(v.shift())),(await Promise.all([I[i](...v),c&&m.done]))[0]};return pl.set(n,d),d}Vg(o=>({...o,get:(n,i,l)=>zd(n,i)||o.get(n,i,l),has:(n,i)=>!!zd(n,i)||o.has(n,i)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class qg{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Qg(i)){const l=i.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(i=>i).join(" ")}}function Qg(o){const n=o.getComponent();return(n==null?void 0:n.type)==="VERSION"}const Il="@firebase/app",bd="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const rn=new xl("@firebase/app"),Yg="@firebase/app-compat",Xg="@firebase/analytics-compat",Jg="@firebase/analytics",Zg="@firebase/app-check-compat",ev="@firebase/app-check",tv="@firebase/auth",nv="@firebase/auth-compat",rv="@firebase/database",iv="@firebase/data-connect",ov="@firebase/database-compat",sv="@firebase/functions",av="@firebase/functions-compat",lv="@firebase/installations",uv="@firebase/installations-compat",cv="@firebase/messaging",dv="@firebase/messaging-compat",fv="@firebase/performance",hv="@firebase/performance-compat",pv="@firebase/remote-config",mv="@firebase/remote-config-compat",gv="@firebase/storage",vv="@firebase/storage-compat",yv="@firebase/firestore",wv="@firebase/vertexai",_v="@firebase/firestore-compat",Sv="firebase",Ev="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const kl="[DEFAULT]",Iv={[Il]:"fire-core",[Yg]:"fire-core-compat",[Jg]:"fire-analytics",[Xg]:"fire-analytics-compat",[ev]:"fire-app-check",[Zg]:"fire-app-check-compat",[tv]:"fire-auth",[nv]:"fire-auth-compat",[rv]:"fire-rtdb",[iv]:"fire-data-connect",[ov]:"fire-rtdb-compat",[sv]:"fire-fn",[av]:"fire-fn-compat",[lv]:"fire-iid",[uv]:"fire-iid-compat",[cv]:"fire-fcm",[dv]:"fire-fcm-compat",[fv]:"fire-perf",[hv]:"fire-perf-compat",[pv]:"fire-rc",[mv]:"fire-rc-compat",[gv]:"fire-gcs",[vv]:"fire-gcs-compat",[yv]:"fire-fst",[_v]:"fire-fst-compat",[wv]:"fire-vertex","fire-js":"fire-js",[Sv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ls=new Map,kv=new Map,Tl=new Map;function $d(o,n){try{o.container.addComponent(n)}catch(i){rn.debug(`Component ${n.name} failed to register with FirebaseApp ${o.name}`,i)}}function on(o){const n=o.name;if(Tl.has(n))return rn.debug(`There were multiple attempts to register component ${n}.`),!1;Tl.set(n,o);for(const i of ls.values())$d(i,o);for(const i of kv.values())$d(i,o);return!0}function $r(o,n){const i=o.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),o.container.getProvider(n)}function Zt(o){return o.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Tv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new lr("app","Firebase",Tv);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Cv{constructor(n,i,l){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const $i=Ev;function Lf(o,n={}){let i=o;typeof n!="object"&&(n={name:n});const l=Object.assign({name:kl,automaticDataCollectionEnabled:!1},n),c=l.name;if(typeof c!="string"||!c)throw Fn.create("bad-app-name",{appName:String(c)});if(i||(i=Tf()),!i)throw Fn.create("no-options");const d=ls.get(c);if(d){if(Fi(i,d.options)&&Fi(l,d.config))return d;throw Fn.create("duplicate-app",{appName:c})}const h=new Lg(c);for(const m of Tl.values())h.addComponent(m);const v=new Cv(i,l,h);return ls.set(c,v),v}function Df(o=kl){const n=ls.get(o);if(!n&&o===kl&&Tf())return Lf();if(!n)throw Fn.create("no-app",{appName:o});return n}function Ft(o,n,i){var l;let c=(l=Iv[o])!==null&&l!==void 0?l:o;i&&(c+=`-${i}`);const d=c.match(/\s|\//),h=n.match(/\s|\//);if(d||h){const v=[`Unable to register library "${c}" with version "${n}":`];d&&v.push(`library name "${c}" contains illegal characters (whitespace or "/")`),d&&h&&v.push("and"),h&&v.push(`version name "${n}" contains illegal characters (whitespace or "/")`),rn.warn(v.join(" "));return}on(new bt(`${c}-version`,()=>({library:c,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Pv="firebase-heartbeat-database",Rv=1,ji="firebase-heartbeat-store";let ml=null;function Mf(){return ml||(ml=xf(Pv,Rv,{upgrade:(o,n)=>{switch(n){case 0:try{o.createObjectStore(ji)}catch(i){console.warn(i)}}}}).catch(o=>{throw Fn.create("idb-open",{originalErrorMessage:o.message})})),ml}async function Av(o){try{const i=(await Mf()).transaction(ji),l=await i.objectStore(ji).get(Uf(o));return await i.done,l}catch(n){if(n instanceof $t)rn.warn(n.message);else{const i=Fn.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});rn.warn(i.message)}}}async function Bd(o,n){try{const l=(await Mf()).transaction(ji,"readwrite");await l.objectStore(ji).put(n,Uf(o)),await l.done}catch(i){if(i instanceof $t)rn.warn(i.message);else{const l=Fn.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});rn.warn(l.message)}}}function Uf(o){return`${o.name}!${o.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Nv=1024,Ov=30*24*60*60*1e3;class xv{constructor(n){this.container=n,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Dv(i),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){var n,i;try{const c=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),d=Vd();return((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===d||this._heartbeatsCache.heartbeats.some(h=>h.date===d)?void 0:(this._heartbeatsCache.heartbeats.push({date:d,agent:c}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const v=new Date(h.date).valueOf();return Date.now()-v<=Ov}),this._storage.overwrite(this._heartbeatsCache))}catch(l){rn.warn(l)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Vd(),{heartbeatsToSend:l,unsentEntries:c}=Lv(this._heartbeatsCache.heartbeats),d=If(JSON.stringify({version:2,heartbeats:l}));return this._heartbeatsCache.lastSentHeartbeatDate=i,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}catch(i){return rn.warn(i),""}}}function Vd(){return new Date().toISOString().substring(0,10)}function Lv(o,n=Nv){const i=[];let l=o.slice();for(const c of o){const d=i.find(h=>h.agent===c.agent);if(d){if(d.dates.push(c.date),Hd(i)>n){d.dates.pop();break}}else if(i.push({agent:c.agent,dates:[c.date]}),Hd(i)>n){i.pop();break}l=l.slice(1)}return{heartbeatsToSend:i,unsentEntries:l}}class Dv{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rf()?Af().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Av(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){var i;if(await this._canUseIndexedDBPromise){const c=await this.read();return Bd(this.app,{lastSentHeartbeatDate:(i=n.lastSentHeartbeatDate)!==null&&i!==void 0?i:c.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var i;if(await this._canUseIndexedDBPromise){const c=await this.read();return Bd(this.app,{lastSentHeartbeatDate:(i=n.lastSentHeartbeatDate)!==null&&i!==void 0?i:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...n.heartbeats]})}else return}}function Hd(o){return If(JSON.stringify({version:2,heartbeats:o})).length}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Mv(o){on(new bt("platform-logger",n=>new qg(n),"PRIVATE")),on(new bt("heartbeat",n=>new xv(n),"PRIVATE")),Ft(Il,bd,o),Ft(Il,bd,"esm2017"),Ft("fire-js","")}Mv("");var Uv="firebase",Fv="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */Ft(Uv,Fv,"app");const Ff="@firebase/installations",Dl="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const jf=1e4,zf=`w:${Dl}`,bf="FIS_v2",jv="https://firebaseinstallations.googleapis.com/v1",zv=60*60*1e3,bv="installations",$v="Installations";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Bv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ir=new lr(bv,$v,Bv);function $f(o){return o instanceof $t&&o.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Bf({projectId:o}){return`${jv}/projects/${o}/installations`}function Vf(o){return{token:o.token,requestStatus:2,expiresIn:Hv(o.expiresIn),creationTime:Date.now()}}async function Hf(o,n){const l=(await n.json()).error;return ir.create("request-failed",{requestName:o,serverCode:l.code,serverMessage:l.message,serverStatus:l.status})}function Wf({apiKey:o}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":o})}function Vv(o,{refreshToken:n}){const i=Wf(o);return i.append("Authorization",Wv(n)),i}async function Kf(o){const n=await o();return n.status>=500&&n.status<600?o():n}function Hv(o){return Number(o.replace("s","000"))}function Wv(o){return`${bf} ${o}`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Kv({appConfig:o,heartbeatServiceProvider:n},{fid:i}){const l=Bf(o),c=Wf(o),d=n.getImmediate({optional:!0});if(d){const I=await d.getHeartbeatsHeader();I&&c.append("x-firebase-client",I)}const h={fid:i,authVersion:bf,appId:o.appId,sdkVersion:zf},v={method:"POST",headers:c,body:JSON.stringify(h)},m=await Kf(()=>fetch(l,v));if(m.ok){const I=await m.json();return{fid:I.fid||i,registrationStatus:2,refreshToken:I.refreshToken,authToken:Vf(I.authToken)}}else throw await Hf("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Gf(o){return new Promise(n=>{setTimeout(n,o)})}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Gv(o){return btoa(String.fromCharCode(...o)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const qv=/^[cdef][\w-]{21}$/,Cl="";function Qv(){try{const o=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(o),o[0]=112+o[0]%16;const i=Yv(o);return qv.test(i)?i:Cl}catch{return Cl}}function Yv(o){return Gv(o).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function gs(o){return`${o.appName}!${o.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const qf=new Map;function Qf(o,n){const i=gs(o);Yf(i,n),Xv(i,n)}function Yf(o,n){const i=qf.get(o);if(i)for(const l of i)l(n)}function Xv(o,n){const i=Jv();i&&i.postMessage({key:o,fid:n}),Zv()}let rr=null;function Jv(){return!rr&&"BroadcastChannel"in self&&(rr=new BroadcastChannel("[Firebase] FID Change"),rr.onmessage=o=>{Yf(o.data.key,o.data.fid)}),rr}function Zv(){qf.size===0&&rr&&(rr.close(),rr=null)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ey="firebase-installations-database",ty=1,or="firebase-installations-store";let gl=null;function Ml(){return gl||(gl=xf(ey,ty,{upgrade:(o,n)=>{switch(n){case 0:o.createObjectStore(or)}}})),gl}async function us(o,n){const i=gs(o),c=(await Ml()).transaction(or,"readwrite"),d=c.objectStore(or),h=await d.get(i);return await d.put(n,i),await c.done,(!h||h.fid!==n.fid)&&Qf(o,n.fid),n}async function Xf(o){const n=gs(o),l=(await Ml()).transaction(or,"readwrite");await l.objectStore(or).delete(n),await l.done}async function vs(o,n){const i=gs(o),c=(await Ml()).transaction(or,"readwrite"),d=c.objectStore(or),h=await d.get(i),v=n(h);return v===void 0?await d.delete(i):await d.put(v,i),await c.done,v&&(!h||h.fid!==v.fid)&&Qf(o,v.fid),v}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Ul(o){let n;const i=await vs(o.appConfig,l=>{const c=ny(l),d=ry(o,c);return n=d.registrationPromise,d.installationEntry});return i.fid===Cl?{installationEntry:await n}:{installationEntry:i,registrationPromise:n}}function ny(o){const n=o||{fid:Qv(),registrationStatus:0};return Jf(n)}function ry(o,n){if(n.registrationStatus===0){if(!navigator.onLine){const c=Promise.reject(ir.create("app-offline"));return{installationEntry:n,registrationPromise:c}}const i={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},l=iy(o,i);return{installationEntry:i,registrationPromise:l}}else return n.registrationStatus===1?{installationEntry:n,registrationPromise:oy(o)}:{installationEntry:n}}async function iy(o,n){try{const i=await Kv(o,n);return us(o.appConfig,i)}catch(i){throw $f(i)&&i.customData.serverCode===409?await Xf(o.appConfig):await us(o.appConfig,{fid:n.fid,registrationStatus:0}),i}}async function oy(o){let n=await Wd(o.appConfig);for(;n.registrationStatus===1;)await Gf(100),n=await Wd(o.appConfig);if(n.registrationStatus===0){const{installationEntry:i,registrationPromise:l}=await Ul(o);return l||i}return n}function Wd(o){return vs(o,n=>{if(!n)throw ir.create("installation-not-found");return Jf(n)})}function Jf(o){return sy(o)?{fid:o.fid,registrationStatus:0}:o}function sy(o){return o.registrationStatus===1&&o.registrationTime+jf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function ay({appConfig:o,heartbeatServiceProvider:n},i){const l=ly(o,i),c=Vv(o,i),d=n.getImmediate({optional:!0});if(d){const I=await d.getHeartbeatsHeader();I&&c.append("x-firebase-client",I)}const h={installation:{sdkVersion:zf,appId:o.appId}},v={method:"POST",headers:c,body:JSON.stringify(h)},m=await Kf(()=>fetch(l,v));if(m.ok){const I=await m.json();return Vf(I)}else throw await Hf("Generate Auth Token",m)}function ly(o,{fid:n}){return`${Bf(o)}/${n}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Fl(o,n=!1){let i;const l=await vs(o.appConfig,d=>{if(!Zf(d))throw ir.create("not-registered");const h=d.authToken;if(!n&&dy(h))return d;if(h.requestStatus===1)return i=uy(o,n),d;{if(!navigator.onLine)throw ir.create("app-offline");const v=hy(d);return i=cy(o,v),v}});return i?await i:l.authToken}async function uy(o,n){let i=await Kd(o.appConfig);for(;i.authToken.requestStatus===1;)await Gf(100),i=await Kd(o.appConfig);const l=i.authToken;return l.requestStatus===0?Fl(o,n):l}function Kd(o){return vs(o,n=>{if(!Zf(n))throw ir.create("not-registered");const i=n.authToken;return py(i)?Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}):n})}async function cy(o,n){try{const i=await ay(o,n),l=Object.assign(Object.assign({},n),{authToken:i});return await us(o.appConfig,l),i}catch(i){if($f(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await Xf(o.appConfig);else{const l=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}});await us(o.appConfig,l)}throw i}}function Zf(o){return o!==void 0&&o.registrationStatus===2}function dy(o){return o.requestStatus===2&&!fy(o)}function fy(o){const n=Date.now();return n<o.creationTime||o.creationTime+o.expiresIn<n+zv}function hy(o){const n={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},o),{authToken:n})}function py(o){return o.requestStatus===1&&o.requestTime+jf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function my(o){const n=o,{installationEntry:i,registrationPromise:l}=await Ul(n);return l?l.catch(console.error):Fl(n).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function gy(o,n=!1){const i=o;return await vy(i),(await Fl(i,n)).token}async function vy(o){const{registrationPromise:n}=await Ul(o);n&&await n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function yy(o){if(!o||!o.options)throw vl("App Configuration");if(!o.name)throw vl("App Name");const n=["projectId","apiKey","appId"];for(const i of n)if(!o.options[i])throw vl(i);return{appName:o.name,projectId:o.options.projectId,apiKey:o.options.apiKey,appId:o.options.appId}}function vl(o){return ir.create("missing-app-config-values",{valueName:o})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const eh="installations",wy="installations-internal",_y=o=>{const n=o.getProvider("app").getImmediate(),i=yy(n),l=$r(n,"heartbeat");return{app:n,appConfig:i,heartbeatServiceProvider:l,_delete:()=>Promise.resolve()}},Sy=o=>{const n=o.getProvider("app").getImmediate(),i=$r(n,eh).getImmediate();return{getId:()=>my(i),getToken:c=>gy(i,c)}};function Ey(){on(new bt(eh,_y,"PUBLIC")),on(new bt(wy,Sy,"PRIVATE"))}Ey();Ft(Ff,Dl);Ft(Ff,Dl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
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
 */const cs="analytics",Iy="firebase_id",ky="origin",Ty=60*1e3,Cy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const st=new xl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Py={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pt=new lr("analytics","Analytics",Py);/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Ry(o){if(!o.startsWith(jl)){const n=pt.create("invalid-gtag-resource",{gtagURL:o});return st.warn(n.message),""}return o}function th(o){return Promise.all(o.map(n=>n.catch(i=>i)))}function Ay(o,n){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(o,n)),i}function Ny(o,n){const i=Ay("firebase-js-sdk-policy",{createScriptURL:Ry}),l=document.createElement("script"),c=`${jl}?l=${o}&id=${n}`;l.src=i?i==null?void 0:i.createScriptURL(c):c,l.async=!0,document.head.appendChild(l)}function Oy(o){let n=[];return Array.isArray(window[o])?n=window[o]:window[o]=n,n}async function xy(o,n,i,l,c,d){const h=l[c];try{if(h)await n[h];else{const m=(await th(i)).find(I=>I.measurementId===c);m&&await n[m.appId]}}catch(v){st.error(v)}o("config",c,d)}async function Ly(o,n,i,l,c){try{let d=[];if(c&&c.send_to){let h=c.send_to;Array.isArray(h)||(h=[h]);const v=await th(i);for(const m of h){const I=v.find(L=>L.measurementId===m),O=I&&n[I.appId];if(O)d.push(O);else{d=[];break}}}d.length===0&&(d=Object.values(n)),await Promise.all(d),o("event",l,c||{})}catch(d){st.error(d)}}function Dy(o,n,i,l){async function c(d,...h){try{if(d==="event"){const[v,m]=h;await Ly(o,n,i,v,m)}else if(d==="config"){const[v,m]=h;await xy(o,n,i,l,v,m)}else if(d==="consent"){const[v,m]=h;o("consent",v,m)}else if(d==="get"){const[v,m,I]=h;o("get",v,m,I)}else if(d==="set"){const[v]=h;o("set",v)}else o(d,...h)}catch(v){st.error(v)}}return c}function My(o,n,i,l,c){let d=function(...h){window[l].push(arguments)};return window[c]&&typeof window[c]=="function"&&(d=window[c]),window[c]=Dy(d,o,n,i),{gtagCore:d,wrappedGtag:window[c]}}function Uy(o){const n=window.document.getElementsByTagName("script");for(const i of Object.values(n))if(i.src&&i.src.includes(jl)&&i.src.includes(o))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Fy=30,jy=1e3;class zy{constructor(n={},i=jy){this.throttleMetadata=n,this.intervalMillis=i}getThrottleMetadata(n){return this.throttleMetadata[n]}setThrottleMetadata(n,i){this.throttleMetadata[n]=i}deleteThrottleMetadata(n){delete this.throttleMetadata[n]}}const nh=new zy;function by(o){return new Headers({Accept:"application/json","x-goog-api-key":o})}async function $y(o){var n;const{appId:i,apiKey:l}=o,c={method:"GET",headers:by(l)},d=Cy.replace("{app-id}",i),h=await fetch(d,c);if(h.status!==200&&h.status!==304){let v="";try{const m=await h.json();!((n=m.error)===null||n===void 0)&&n.message&&(v=m.error.message)}catch{}throw pt.create("config-fetch-failed",{httpStatus:h.status,responseMessage:v})}return h.json()}async function By(o,n=nh,i){const{appId:l,apiKey:c,measurementId:d}=o.options;if(!l)throw pt.create("no-app-id");if(!c){if(d)return{measurementId:d,appId:l};throw pt.create("no-api-key")}const h=n.getThrottleMetadata(l)||{backoffCount:0,throttleEndTimeMillis:Date.now()},v=new Wy;return setTimeout(async()=>{v.abort()},Ty),rh({appId:l,apiKey:c,measurementId:d},h,v,n)}async function rh(o,{throttleEndTimeMillis:n,backoffCount:i},l,c=nh){var d;const{appId:h,measurementId:v}=o;try{await Vy(l,n)}catch(m){if(v)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${v} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:h,measurementId:v};throw m}try{const m=await $y(o);return c.deleteThrottleMetadata(h),m}catch(m){const I=m;if(!Hy(I)){if(c.deleteThrottleMetadata(h),v)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${v} provided in the "measurementId" field in the local Firebase config. [${I==null?void 0:I.message}]`),{appId:h,measurementId:v};throw m}const O=Number((d=I==null?void 0:I.customData)===null||d===void 0?void 0:d.httpStatus)===503?Ud(i,c.intervalMillis,Fy):Ud(i,c.intervalMillis),L={throttleEndTimeMillis:Date.now()+O,backoffCount:i+1};return c.setThrottleMetadata(h,L),st.debug(`Calling attemptFetch again in ${O} millis`),rh(o,L,l,c)}}function Vy(o,n){return new Promise((i,l)=>{const c=Math.max(n-Date.now(),0),d=setTimeout(i,c);o.addEventListener(()=>{clearTimeout(d),l(pt.create("fetch-throttle",{throttleEndTimeMillis:n}))})})}function Hy(o){if(!(o instanceof $t)||!o.customData)return!1;const n=Number(o.customData.httpStatus);return n===429||n===500||n===503||n===504}class Wy{constructor(){this.listeners=[]}addEventListener(n){this.listeners.push(n)}abort(){this.listeners.forEach(n=>n())}}async function Ky(o,n,i,l,c){if(c&&c.global){o("event",i,l);return}else{const d=await n,h=Object.assign(Object.assign({},l),{send_to:d});o("event",i,h)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Gy(){if(Rf())try{await Af()}catch(o){return st.warn(pt.create("indexeddb-unavailable",{errorInfo:o==null?void 0:o.toString()}).message),!1}else return st.warn(pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qy(o,n,i,l,c,d,h){var v;const m=By(o);m.then(V=>{i[V.measurementId]=V.appId,o.options.measurementId&&V.measurementId!==o.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${o.options.measurementId}) does not match the measurement ID fetched from the server (${V.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(V=>st.error(V)),n.push(m);const I=Gy().then(V=>{if(V)return l.getId()}),[O,L]=await Promise.all([m,I]);Uy(d)||Ny(d,O.measurementId),c("js",new Date);const z=(v=h==null?void 0:h.config)!==null&&v!==void 0?v:{};return z[ky]="firebase",z.update=!0,L!=null&&(z[Iy]=L),c("config",O.measurementId,z),O.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Qy{constructor(n){this.app=n}_delete(){return delete Mi[this.app.options.appId],Promise.resolve()}}let Mi={},Gd=[];const qd={};let yl="dataLayer",Yy="gtag",Qd,ih,Yd=!1;function Xy(){const o=[];if(Pf()&&o.push("This is a browser extension environment."),yg()||o.push("Cookies are not available."),o.length>0){const n=o.map((l,c)=>`(${c+1}) ${l}`).join(" "),i=pt.create("invalid-analytics-context",{errorInfo:n});st.warn(i.message)}}function Jy(o,n,i){Xy();const l=o.options.appId;if(!l)throw pt.create("no-app-id");if(!o.options.apiKey)if(o.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${o.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pt.create("no-api-key");if(Mi[l]!=null)throw pt.create("already-exists",{id:l});if(!Yd){Oy(yl);const{wrappedGtag:d,gtagCore:h}=My(Mi,Gd,qd,yl,Yy);ih=d,Qd=h,Yd=!0}return Mi[l]=qy(o,Gd,qd,n,Qd,yl,i),new Qy(o)}function Zy(o=Df()){o=zn(o);const n=$r(o,cs);return n.isInitialized()?n.getImmediate():e0(o)}function e0(o,n={}){const i=$r(o,cs);if(i.isInitialized()){const c=i.getImmediate();if(Fi(n,i.getOptions()))return c;throw pt.create("already-initialized")}return i.initialize({options:n})}function t0(o,n,i,l){o=zn(o),Ky(ih,Mi[o.app.options.appId],n,i,l).catch(c=>st.error(c))}const Xd="@firebase/analytics",Jd="0.10.10";function n0(){on(new bt(cs,(n,{options:i})=>{const l=n.getProvider("app").getImmediate(),c=n.getProvider("installations-internal").getImmediate();return Jy(l,c,i)},"PUBLIC")),on(new bt("analytics-internal",o,"PRIVATE")),Ft(Xd,Jd),Ft(Xd,Jd,"esm2017");function o(n){try{const i=n.getProvider(cs).getImmediate();return{logEvent:(l,c,d)=>t0(i,l,c,d)}}catch(i){throw pt.create("interop-component-reg-failed",{reason:i})}}}n0();function zl(o,n){var i={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&n.indexOf(l)<0&&(i[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(o);c<l.length;c++)n.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(o,l[c])&&(i[l[c]]=o[l[c]]);return i}function oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const r0=oh,sh=new lr("auth","Firebase",oh());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ds=new xl("@firebase/auth");function i0(o,...n){ds.logLevel<=ae.WARN&&ds.warn(`Auth (${$i}): ${o}`,...n)}function is(o,...n){ds.logLevel<=ae.ERROR&&ds.error(`Auth (${$i}): ${o}`,...n)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sn(o,...n){throw bl(o,...n)}function jt(o,...n){return bl(o,...n)}function ah(o,n,i){const l=Object.assign(Object.assign({},r0()),{[n]:i});return new lr("auth","Firebase",l).create(n,{appName:o.name})}function jn(o){return ah(o,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bl(o,...n){if(typeof o!="string"){const i=n[0],l=[...n.slice(1)];return l[0]&&(l[0].appName=o.name),o._errorFactory.create(i,...l)}return sh.create(o,...n)}function W(o,n,...i){if(!o)throw bl(n,...i)}function en(o){const n="INTERNAL ASSERTION FAILED: "+o;throw is(n),new Error(n)}function an(o,n){o||en(n)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Pl(){var o;return typeof self<"u"&&((o=self.location)===null||o===void 0?void 0:o.href)||""}function o0(){return Zd()==="http:"||Zd()==="https:"}function Zd(){var o;return typeof self<"u"&&((o=self.location)===null||o===void 0?void 0:o.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function s0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o0()||Pf()||"connection"in navigator)?navigator.onLine:!0}function a0(){if(typeof navigator>"u")return null;const o=navigator;return o.languages&&o.languages[0]||o.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Bi{constructor(n,i){this.shortDelay=n,this.longDelay=i,an(i>n,"Short delay should be less than long delay!"),this.isMobile=pg()||gg()}get(){return s0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function $l(o,n){an(o.emulator,"Emulator should always be set here");const{url:i}=o.emulator;return n?`${i}${n.startsWith("/")?n.slice(1):n}`:i}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class lh{static initialize(n,i,l){this.fetchImpl=n,i&&(this.headersImpl=i),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const l0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const u0=new Bi(3e4,6e4);function Vi(o,n){return o.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:o.tenantId}):n}async function ur(o,n,i,l,c={}){return uh(o,c,async()=>{let d={},h={};l&&(n==="GET"?h=l:d={body:JSON.stringify(l)});const v=bi(Object.assign({key:o.config.apiKey},h)).slice(1),m=await o._getAdditionalHeaders();m["Content-Type"]="application/json",o.languageCode&&(m["X-Firebase-Locale"]=o.languageCode);const I=Object.assign({method:n,headers:m},d);return mg()||(I.referrerPolicy="no-referrer"),lh.fetch()(dh(o,o.config.apiHost,i,v),I)})}async function uh(o,n,i){o._canInitEmulator=!1;const l=Object.assign(Object.assign({},l0),n);try{const c=new d0(o),d=await Promise.race([i(),c.promise]);c.clearNetworkTimeout();const h=await d.json();if("needConfirmation"in h)throw rs(o,"account-exists-with-different-credential",h);if(d.ok&&!("errorMessage"in h))return h;{const v=d.ok?h.errorMessage:h.error.message,[m,I]=v.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw rs(o,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw rs(o,"email-already-in-use",h);if(m==="USER_DISABLED")throw rs(o,"user-disabled",h);const O=l[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw ah(o,O,I);sn(o,O)}}catch(c){if(c instanceof $t)throw c;sn(o,"network-request-failed",{message:String(c)})}}async function ch(o,n,i,l,c={}){const d=await ur(o,n,i,l,c);return"mfaPendingCredential"in d&&sn(o,"multi-factor-auth-required",{_serverResponse:d}),d}function dh(o,n,i,l){const c=`${n}${i}?${l}`;return o.config.emulator?$l(o.config,c):`${o.config.apiScheme}://${c}`}function c0(o){switch(o){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class d0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((i,l)=>{this.timer=setTimeout(()=>l(jt(this.auth,"network-request-failed")),u0.get())})}}function rs(o,n,i){const l={appName:o.name};i.email&&(l.email=i.email),i.phoneNumber&&(l.phoneNumber=i.phoneNumber);const c=jt(o,n,l);return c.customData._tokenResponse=i,c}function ef(o){return o!==void 0&&o.enterprise!==void 0}class f0{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],n.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===n)return c0(i.enforcementState);return null}isProviderEnabled(n){return this.getProviderEnforcementState(n)==="ENFORCE"||this.getProviderEnforcementState(n)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function h0(o,n){return ur(o,"GET","/v2/recaptchaConfig",Vi(o,n))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function p0(o,n){return ur(o,"POST","/v1/accounts:delete",n)}async function fh(o,n){return ur(o,"POST","/v1/accounts:lookup",n)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ui(o){if(o)try{const n=new Date(Number(o));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function m0(o,n=!1){const i=zn(o),l=await i.getIdToken(n),c=Bl(l);W(c&&c.exp&&c.auth_time&&c.iat,i.auth,"internal-error");const d=typeof c.firebase=="object"?c.firebase:void 0,h=d==null?void 0:d.sign_in_provider;return{claims:c,token:l,authTime:Ui(wl(c.auth_time)),issuedAtTime:Ui(wl(c.iat)),expirationTime:Ui(wl(c.exp)),signInProvider:h||null,signInSecondFactor:(d==null?void 0:d.sign_in_second_factor)||null}}function wl(o){return Number(o)*1e3}function Bl(o){const[n,i,l]=o.split(".");if(n===void 0||i===void 0||l===void 0)return is("JWT malformed, contained fewer than 3 sections"),null;try{const c=kf(i);return c?JSON.parse(c):(is("Failed to decode base64 JWT payload"),null)}catch(c){return is("Caught error parsing JWT payload as JSON",c==null?void 0:c.toString()),null}}function tf(o){const n=Bl(o);return W(n,"internal-error"),W(typeof n.exp<"u","internal-error"),W(typeof n.iat<"u","internal-error"),Number(n.exp)-Number(n.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function zi(o,n,i=!1){if(i)return n;try{return await n}catch(l){throw l instanceof $t&&g0(l)&&o.auth.currentUser===o&&await o.auth.signOut(),l}}function g0({code:o}){return o==="auth/user-disabled"||o==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class v0{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){var i;if(n){const l=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),l}else{this.errorBackoff=3e4;const c=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,c)}}schedule(n=!1){if(!this.isRunning)return;const i=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){(n==null?void 0:n.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Rl{constructor(n,i){this.createdAt=n,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function fs(o){var n;const i=o.auth,l=await o.getIdToken(),c=await zi(o,fh(i,{idToken:l}));W(c==null?void 0:c.users.length,i,"internal-error");const d=c.users[0];o._notifyReloadListener(d);const h=!((n=d.providerUserInfo)===null||n===void 0)&&n.length?hh(d.providerUserInfo):[],v=w0(o.providerData,h),m=o.isAnonymous,I=!(o.email&&d.passwordHash)&&!(v!=null&&v.length),O=m?I:!1,L={uid:d.localId,displayName:d.displayName||null,photoURL:d.photoUrl||null,email:d.email||null,emailVerified:d.emailVerified||!1,phoneNumber:d.phoneNumber||null,tenantId:d.tenantId||null,providerData:v,metadata:new Rl(d.createdAt,d.lastLoginAt),isAnonymous:O};Object.assign(o,L)}async function y0(o){const n=zn(o);await fs(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function w0(o,n){return[...o.filter(l=>!n.some(c=>c.providerId===l.providerId)),...n]}function hh(o){return o.map(n=>{var{providerId:i}=n,l=zl(n,["providerId"]);return{providerId:i,uid:l.rawId||"",displayName:l.displayName||null,email:l.email||null,phoneNumber:l.phoneNumber||null,photoURL:l.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function _0(o,n){const i=await uh(o,{},async()=>{const l=bi({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:c,apiKey:d}=o.config,h=dh(o,c,"/v1/token",`key=${d}`),v=await o._getAdditionalHeaders();return v["Content-Type"]="application/x-www-form-urlencoded",lh.fetch()(h,{method:"POST",headers:v,body:l})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function S0(o,n){return ur(o,"POST","/v2/accounts:revokeToken",Vi(o,n))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){W(n.idToken,"internal-error"),W(typeof n.idToken<"u","internal-error"),W(typeof n.refreshToken<"u","internal-error");const i="expiresIn"in n&&typeof n.expiresIn<"u"?Number(n.expiresIn):tf(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,i)}updateFromIdToken(n){W(n.length!==0,"internal-error");const i=tf(n);this.updateTokensAndExpiration(n,null,i)}async getToken(n,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,n,"user-token-expired"),this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(n,i){const{accessToken:l,refreshToken:c,expiresIn:d}=await _0(n,i);this.updateTokensAndExpiration(l,c,Number(d))}updateTokensAndExpiration(n,i,l){this.refreshToken=i||null,this.accessToken=n||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(n,i){const{refreshToken:l,accessToken:c,expirationTime:d}=i,h=new jr;return l&&(W(typeof l=="string","internal-error",{appName:n}),h.refreshToken=l),c&&(W(typeof c=="string","internal-error",{appName:n}),h.accessToken=c),d&&(W(typeof d=="number","internal-error",{appName:n}),h.expirationTime=d),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function On(o,n){W(typeof o=="string"||typeof o>"u","internal-error",{appName:n})}class tn{constructor(n){var{uid:i,auth:l,stsTokenManager:c}=n,d=zl(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=l,this.stsTokenManager=c,this.accessToken=c.accessToken,this.displayName=d.displayName||null,this.email=d.email||null,this.emailVerified=d.emailVerified||!1,this.phoneNumber=d.phoneNumber||null,this.photoURL=d.photoURL||null,this.isAnonymous=d.isAnonymous||!1,this.tenantId=d.tenantId||null,this.providerData=d.providerData?[...d.providerData]:[],this.metadata=new Rl(d.createdAt||void 0,d.lastLoginAt||void 0)}async getIdToken(n){const i=await zi(this,this.stsTokenManager.getToken(this.auth,n));return W(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(n){return m0(this,n)}reload(){return y0(this)}_assign(n){this!==n&&(W(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(i=>Object.assign({},i)),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){const i=new tn(Object.assign(Object.assign({},this),{auth:n,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(n){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,i=!1){let l=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),l=!0),i&&await fs(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(jn(this.auth));const n=await this.getIdToken();return await zi(this,p0(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>Object.assign({},n)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,i){var l,c,d,h,v,m,I,O;const L=(l=i.displayName)!==null&&l!==void 0?l:void 0,z=(c=i.email)!==null&&c!==void 0?c:void 0,V=(d=i.phoneNumber)!==null&&d!==void 0?d:void 0,ie=(h=i.photoURL)!==null&&h!==void 0?h:void 0,q=(v=i.tenantId)!==null&&v!==void 0?v:void 0,Q=(m=i._redirectEventId)!==null&&m!==void 0?m:void 0,me=(I=i.createdAt)!==null&&I!==void 0?I:void 0,ge=(O=i.lastLoginAt)!==null&&O!==void 0?O:void 0,{uid:xe,emailVerified:_e,isAnonymous:be,providerData:Se,stsTokenManager:ve}=i;W(xe&&ve,n,"internal-error");const Le=jr.fromJSON(this.name,ve);W(typeof xe=="string",n,"internal-error"),On(L,n.name),On(z,n.name),W(typeof _e=="boolean",n,"internal-error"),W(typeof be=="boolean",n,"internal-error"),On(V,n.name),On(ie,n.name),On(q,n.name),On(Q,n.name),On(me,n.name),On(ge,n.name);const Xe=new tn({uid:xe,auth:n,email:z,emailVerified:_e,displayName:L,isAnonymous:be,photoURL:ie,phoneNumber:V,tenantId:q,stsTokenManager:Le,createdAt:me,lastLoginAt:ge});return Se&&Array.isArray(Se)&&(Xe.providerData=Se.map(Je=>Object.assign({},Je))),Q&&(Xe._redirectEventId=Q),Xe}static async _fromIdTokenResponse(n,i,l=!1){const c=new jr;c.updateFromServerResponse(i);const d=new tn({uid:i.localId,auth:n,stsTokenManager:c,isAnonymous:l});return await fs(d),d}static async _fromGetAccountInfoResponse(n,i,l){const c=i.users[0];W(c.localId!==void 0,"internal-error");const d=c.providerUserInfo!==void 0?hh(c.providerUserInfo):[],h=!(c.email&&c.passwordHash)&&!(d!=null&&d.length),v=new jr;v.updateFromIdToken(l);const m=new tn({uid:c.localId,auth:n,stsTokenManager:v,isAnonymous:h}),I={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:d,metadata:new Rl(c.createdAt,c.lastLoginAt),isAnonymous:!(c.email&&c.passwordHash)&&!(d!=null&&d.length)};return Object.assign(m,I),m}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const nf=new Map;function nn(o){an(o instanceof Function,"Expected a class definition");let n=nf.get(o);return n?(an(n instanceof o,"Instance stored in cache mismatched with class"),n):(n=new o,nf.set(o,n),n)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ph{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,i){this.storage[n]=i}async _get(n){const i=this.storage[n];return i===void 0?null:i}async _remove(n){delete this.storage[n]}_addListener(n,i){}_removeListener(n,i){}}ph.type="NONE";const rf=ph;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function os(o,n,i){return`firebase:${o}:${n}:${i}`}class zr{constructor(n,i,l){this.persistence=n,this.auth=i,this.userKey=l;const{config:c,name:d}=this.auth;this.fullUserKey=os(this.userKey,c.apiKey,d),this.fullPersistenceKey=os("persistence",c.apiKey,d),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);return n?tn._fromJSON(this.auth,n):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,i,l="authUser"){if(!i.length)return new zr(nn(rf),n,l);const c=(await Promise.all(i.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let d=c[0]||nn(rf);const h=os(l,n.config.apiKey,n.name);let v=null;for(const I of i)try{const O=await I._get(h);if(O){const L=tn._fromJSON(n,O);I!==d&&(v=L),d=I;break}}catch{}const m=c.filter(I=>I._shouldAllowMigration);return!d._shouldAllowMigration||!m.length?new zr(d,n,l):(d=m[0],v&&await d._set(h,v.toJSON()),await Promise.all(i.map(async I=>{if(I!==d)try{await I._remove(h)}catch{}})),new zr(d,n,l))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function of(o){const n=o.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(yh(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(mh(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(_h(n))return"Blackberry";if(Sh(n))return"Webos";if(gh(n))return"Safari";if((n.includes("chrome/")||vh(n))&&!n.includes("edge/"))return"Chrome";if(wh(n))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=o.match(i);if((l==null?void 0:l.length)===2)return l[1]}return"Other"}function mh(o=Ye()){return/firefox\//i.test(o)}function gh(o=Ye()){const n=o.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function vh(o=Ye()){return/crios\//i.test(o)}function yh(o=Ye()){return/iemobile/i.test(o)}function wh(o=Ye()){return/android/i.test(o)}function _h(o=Ye()){return/blackberry/i.test(o)}function Sh(o=Ye()){return/webos/i.test(o)}function Vl(o=Ye()){return/iphone|ipad|ipod/i.test(o)||/macintosh/i.test(o)&&/mobile/i.test(o)}function E0(o=Ye()){var n;return Vl(o)&&!!(!((n=window.navigator)===null||n===void 0)&&n.standalone)}function I0(){return vg()&&document.documentMode===10}function Eh(o=Ye()){return Vl(o)||wh(o)||Sh(o)||_h(o)||/windows phone/i.test(o)||yh(o)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ih(o,n=[]){let i;switch(o){case"Browser":i=of(Ye());break;case"Worker":i=`${of(Ye())}-${o}`;break;default:i=o}const l=n.length?n.join(","):"FirebaseCore-web";return`${i}/JsCore/${$i}/${l}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class k0{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,i){const l=d=>new Promise((h,v)=>{try{const m=n(d);h(m)}catch(m){v(m)}});l.onAbort=i,this.queue.push(l);const c=this.queue.length-1;return()=>{this.queue[c]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const i=[];try{for(const l of this.queue)await l(n),l.onAbort&&i.push(l.onAbort)}catch(l){i.reverse();for(const c of i)try{c()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:l==null?void 0:l.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function T0(o,n={}){return ur(o,"GET","/v2/passwordPolicy",Vi(o,n))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const C0=6;class P0{constructor(n){var i,l,c,d;const h=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:C0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(c=(l=n.allowedNonAlphanumericCharacters)===null||l===void 0?void 0:l.join(""))!==null&&c!==void 0?c:"",this.forceUpgradeOnSignin=(d=n.forceUpgradeOnSignin)!==null&&d!==void 0?d:!1,this.schemaVersion=n.schemaVersion}validatePassword(n){var i,l,c,d,h,v;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,m),this.validatePasswordCharacterOptions(n,m),m.isValid&&(m.isValid=(i=m.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(l=m.meetsMaxPasswordLength)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsLowercaseLetter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsUppercaseLetter)!==null&&d!==void 0?d:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(v=m.containsNonAlphanumericCharacter)!==null&&v!==void 0?v:!0),m}validatePasswordLengthOptions(n,i){const l=this.customStrengthOptions.minPasswordLength,c=this.customStrengthOptions.maxPasswordLength;l&&(i.meetsMinPasswordLength=n.length>=l),c&&(i.meetsMaxPasswordLength=n.length<=c)}validatePasswordCharacterOptions(n,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let l;for(let c=0;c<n.length;c++)l=n.charAt(c),this.updatePasswordCharacterOptionsStatuses(i,l>="a"&&l<="z",l>="A"&&l<="Z",l>="0"&&l<="9",this.allowedNonAlphanumericCharacters.includes(l))}updatePasswordCharacterOptionsStatuses(n,i,l,c,d){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=l)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=c)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=d))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class R0{constructor(n,i,l,c){this.app=n,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=l,this.config=c,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sf(this),this.idTokenSubscription=new sf(this),this.beforeStateQueue=new k0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=c.sdkClientVersion}_initializeWithPersistence(n,i){return i&&(this._popupRedirectResolver=nn(i)),this._initializationPromise=this.queue(async()=>{var l,c;if(!this._deleted&&(this.persistenceManager=await zr.create(this,n),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUserFromIdToken(n){try{const i=await fh(this,{idToken:n}),l=await tn._fromGetAccountInfoResponse(this,i,n);await this.directlySetCurrentUser(l)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(n){var i;if(Zt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(v=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(v,v))}):this.directlySetCurrentUser(null)}const l=await this.assertedPersistence.getCurrentUser();let c=l,d=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,v=c==null?void 0:c._redirectEventId,m=await this.tryRedirectSignIn(n);(!h||h===v)&&(m!=null&&m.user)&&(c=m.user,d=!0)}if(!c)return this.directlySetCurrentUser(null);if(!c._redirectEventId){if(d)try{await this.beforeStateQueue.runMiddleware(c)}catch(h){c=l,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return c?this.reloadAndSetCurrentUserOrClear(c):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===c._redirectEventId?this.directlySetCurrentUser(c):this.reloadAndSetCurrentUserOrClear(c)}async tryRedirectSignIn(n){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(n){try{await fs(n)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=a0()}async _delete(){this._deleted=!0}async updateCurrentUser(n){if(Zt(this.app))return Promise.reject(jn(this));const i=n?zn(n):null;return i&&W(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(n,i=!1){if(!this._deleted)return n&&W(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(n){return Zt(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(n))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(n)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const n=await T0(this),i=new P0(n);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(n){this._errorFactory=new lr("auth","Firebase",n())}onAuthStateChanged(n,i,l){return this.registerStateListener(this.authStateSubscription,n,i,l)}beforeAuthStateChanged(n,i){return this.beforeStateQueue.pushCallback(n,i)}onIdTokenChanged(n,i,l){return this.registerStateListener(this.idTokenSubscription,n,i,l)}authStateReady(){return new Promise((n,i)=>{if(this.currentUser)n();else{const l=this.onAuthStateChanged(()=>{l(),n()},i)}})}async revokeAccessToken(n){if(this.currentUser){const i=await this.currentUser.getIdToken(),l={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:i};this.tenantId!=null&&(l.tenantId=this.tenantId),await S0(this,l)}}toJSON(){var n;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(n=this._currentUser)===null||n===void 0?void 0:n.toJSON()}}async _setRedirectUser(n,i){const l=await this.getOrInitRedirectPersistenceManager(i);return n===null?l.removeCurrentUser():l.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const i=n&&nn(n)||this._popupRedirectResolver;W(i,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[nn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){var i,l;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===n?this._currentUser:((l=this.redirectUser)===null||l===void 0?void 0:l._redirectEventId)===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const l=(i=(n=this.currentUser)===null||n===void 0?void 0:n.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==l&&(this.lastNotifiedUid=l,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,i,l,c){if(this._deleted)return()=>{};const d=typeof i=="function"?i:i.next.bind(i);let h=!1;const v=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(v,this,"internal-error"),v.then(()=>{h||d(this.currentUser)}),typeof i=="function"){const m=n.addObserver(i,l,c);return()=>{h=!0,m()}}else{const m=n.addObserver(i);return()=>{h=!0,m()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=Ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const l=await((n=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getHeartbeatsHeader());l&&(i["X-Firebase-Client"]=l);const c=await this._getAppCheckToken();return c&&(i["X-Firebase-AppCheck"]=c),i}async _getAppCheckToken(){var n;const i=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getToken());return i!=null&&i.error&&i0(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Br(o){return zn(o)}class sf{constructor(n){this.auth=n,this.observer=null,this.addObserver=Ig(i=>this.observer=i)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let ys={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A0(o){ys=o}function kh(o){return ys.loadJS(o)}function N0(){return ys.recaptchaEnterpriseScript}function O0(){return ys.gapiScript}function x0(o){return`__${o}${Math.floor(Math.random()*1e6)}`}class L0{constructor(){this.enterprise=new D0}ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}class D0{ready(n){n()}execute(n,i){return Promise.resolve("token")}render(n,i){return""}}const M0="recaptcha-enterprise",Th="NO_RECAPTCHA";class U0{constructor(n){this.type=M0,this.auth=Br(n)}async verify(n="verify",i=!1){async function l(d){if(!i){if(d.tenantId==null&&d._agentRecaptchaConfig!=null)return d._agentRecaptchaConfig.siteKey;if(d.tenantId!=null&&d._tenantRecaptchaConfigs[d.tenantId]!==void 0)return d._tenantRecaptchaConfigs[d.tenantId].siteKey}return new Promise(async(h,v)=>{h0(d,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)v(new Error("recaptcha Enterprise site key undefined"));else{const I=new f0(m);return d.tenantId==null?d._agentRecaptchaConfig=I:d._tenantRecaptchaConfigs[d.tenantId]=I,h(I.siteKey)}}).catch(m=>{v(m)})})}function c(d,h,v){const m=window.grecaptcha;ef(m)?m.enterprise.ready(()=>{m.enterprise.execute(d,{action:n}).then(I=>{h(I)}).catch(()=>{h(Th)})}):v(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new L0().execute("siteKey",{action:"verify"}):new Promise((d,h)=>{l(this.auth).then(v=>{if(!i&&ef(window.grecaptcha))c(v,d,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=N0();m.length!==0&&(m+=v),kh(m).then(()=>{c(v,d,h)}).catch(I=>{h(I)})}}).catch(v=>{h(v)})})}}async function af(o,n,i,l=!1,c=!1){const d=new U0(o);let h;if(c)h=Th;else try{h=await d.verify(i)}catch{h=await d.verify(i,!0)}const v=Object.assign({},n);return l?Object.assign(v,{captchaResp:h}):Object.assign(v,{captchaResponse:h}),Object.assign(v,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(v,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),v}async function F0(o,n,i,l,c){var d;if(!((d=o._getRecaptchaConfig())===null||d===void 0)&&d.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await af(o,n,i,i==="getOobCode");return l(o,h)}else return l(o,n).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const v=await af(o,n,i,i==="getOobCode");return l(o,v)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function j0(o,n){const i=$r(o,"auth");if(i.isInitialized()){const c=i.getImmediate(),d=i.getOptions();if(Fi(d,n??{}))return c;sn(c,"already-initialized")}return i.initialize({options:n})}function z0(o,n){const i=(n==null?void 0:n.persistence)||[],l=(Array.isArray(i)?i:[i]).map(nn);n!=null&&n.errorMap&&o._updateErrorMap(n.errorMap),o._initializeWithPersistence(l,n==null?void 0:n.popupRedirectResolver)}function b0(o,n,i){const l=Br(o);W(l._canInitEmulator,l,"emulator-config-failed"),W(/^https?:\/\//.test(n),l,"invalid-emulator-scheme");const c=!1,d=Ch(n),{host:h,port:v}=$0(n),m=v===null?"":`:${v}`;l.config.emulator={url:`${d}//${h}${m}/`},l.settings.appVerificationDisabledForTesting=!0,l.emulatorConfig=Object.freeze({host:h,port:v,protocol:d.replace(":",""),options:Object.freeze({disableWarnings:c})}),B0()}function Ch(o){const n=o.indexOf(":");return n<0?"":o.substr(0,n+1)}function $0(o){const n=Ch(o),i=/(\/\/)?([^?#/]+)/.exec(o.substr(n.length));if(!i)return{host:"",port:null};const l=i[2].split("@").pop()||"",c=/^(\[[^\]]+\])(:|$)/.exec(l);if(c){const d=c[1];return{host:d,port:lf(l.substr(d.length+1))}}else{const[d,h]=l.split(":");return{host:d,port:lf(h)}}}function lf(o){if(!o)return null;const n=Number(o);return isNaN(n)?null:n}function B0(){function o(){const n=document.createElement("p"),i=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",o):o())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ph{constructor(n,i){this.providerId=n,this.signInMethod=i}toJSON(){return en("not implemented")}_getIdTokenResponse(n){return en("not implemented")}_linkToIdToken(n,i){return en("not implemented")}_getReauthenticationResolver(n){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function br(o,n){return ch(o,"POST","/v1/accounts:signInWithIdp",Vi(o,n))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const V0="http://localhost";class sr extends Ph{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const i=new sr(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(i.idToken=n.idToken),n.accessToken&&(i.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(i.nonce=n.nonce),n.pendingToken&&(i.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(i.accessToken=n.oauthToken,i.secret=n.oauthTokenSecret):sn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const i=typeof n=="string"?JSON.parse(n):n,{providerId:l,signInMethod:c}=i,d=zl(i,["providerId","signInMethod"]);if(!l||!c)return null;const h=new sr(l,c);return h.idToken=d.idToken||void 0,h.accessToken=d.accessToken||void 0,h.secret=d.secret,h.nonce=d.nonce,h.pendingToken=d.pendingToken||null,h}_getIdTokenResponse(n){const i=this.buildRequest();return br(n,i)}_linkToIdToken(n,i){const l=this.buildRequest();return l.idToken=i,br(n,l)}_getReauthenticationResolver(n){const i=this.buildRequest();return i.autoCreate=!1,br(n,i)}buildRequest(){const n={requestUri:V0,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),n.postBody=bi(i)}return n}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Rh{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Hi extends Rh{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class xn extends Hi{constructor(){super("facebook.com")}static credential(n){return sr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return xn.credentialFromTaggedObject(n)}static credentialFromError(n){return xn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return xn.credential(n.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ln extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(n,i){return sr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:i})}static credentialFromResult(n){return Ln.credentialFromTaggedObject(n)}static credentialFromError(n){return Ln.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:i,oauthAccessToken:l}=n;if(!i&&!l)return null;try{return Ln.credential(i,l)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Dn extends Hi{constructor(){super("github.com")}static credential(n){return sr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return Dn.credentialFromTaggedObject(n)}static credentialFromError(n){return Dn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return Dn.credential(n.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Mn extends Hi{constructor(){super("twitter.com")}static credential(n,i){return sr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:i})}static credentialFromResult(n){return Mn.credentialFromTaggedObject(n)}static credentialFromError(n){return Mn.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:i,oauthTokenSecret:l}=n;if(!i||!l)return null;try{return Mn.credential(i,l)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function H0(o,n){return ch(o,"POST","/v1/accounts:signUp",Vi(o,n))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ar{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,i,l,c=!1){const d=await tn._fromIdTokenResponse(n,l,c),h=uf(l);return new ar({user:d,providerId:h,_tokenResponse:l,operationType:i})}static async _forOperation(n,i,l){await n._updateTokensIfNecessary(l,!0);const c=uf(l);return new ar({user:n,providerId:c,_tokenResponse:l,operationType:i})}}function uf(o){return o.providerId?o.providerId:"phoneNumber"in o?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class hs extends $t{constructor(n,i,l,c){var d;super(i.code,i.message),this.operationType=l,this.user=c,Object.setPrototypeOf(this,hs.prototype),this.customData={appName:n.name,tenantId:(d=n.tenantId)!==null&&d!==void 0?d:void 0,_serverResponse:i.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(n,i,l,c){return new hs(n,i,l,c)}}function Ah(o,n,i,l){return(n==="reauthenticate"?i._getReauthenticationResolver(o):i._getIdTokenResponse(o)).catch(d=>{throw d.code==="auth/multi-factor-auth-required"?hs._fromErrorAndOperation(o,d,n,l):d})}async function W0(o,n,i=!1){const l=await zi(o,n._linkToIdToken(o.auth,await o.getIdToken()),i);return ar._forOperation(o,"link",l)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function K0(o,n,i=!1){const{auth:l}=o;if(Zt(l.app))return Promise.reject(jn(l));const c="reauthenticate";try{const d=await zi(o,Ah(l,c,n,o),i);W(d.idToken,l,"internal-error");const h=Bl(d.idToken);W(h,l,"internal-error");const{sub:v}=h;return W(o.uid===v,l,"user-mismatch"),ar._forOperation(o,c,d)}catch(d){throw(d==null?void 0:d.code)==="auth/user-not-found"&&sn(l,"user-mismatch"),d}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function G0(o,n,i=!1){if(Zt(o.app))return Promise.reject(jn(o));const l="signIn",c=await Ah(o,l,n),d=await ar._fromIdTokenResponse(o,l,c);return i||await o._updateCurrentUser(d.user),d}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function q0(o){const n=Br(o);n._getPasswordPolicyInternal()&&await n._updatePasswordPolicy()}async function Q0(o,n,i){if(Zt(o.app))return Promise.reject(jn(o));const l=Br(o),h=await F0(l,{returnSecureToken:!0,email:n,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",H0).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&q0(o),m}),v=await ar._fromIdTokenResponse(l,"signIn",h);return await l._updateCurrentUser(v.user),v}function Y0(o,n,i,l){return zn(o).onIdTokenChanged(n,i,l)}function X0(o,n,i){return zn(o).beforeAuthStateChanged(n,i)}const ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Nh{constructor(n,i){this.storageRetriever=n,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(ps,"1"),this.storage.removeItem(ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,i){return this.storage.setItem(n,JSON.stringify(i)),Promise.resolve()}_get(n){const i=this.storage.getItem(n);return Promise.resolve(i?JSON.parse(i):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const J0=1e3,Z0=10;class Oh extends Nh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,i)=>this.onStorageEvent(n,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eh(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const i of Object.keys(this.listeners)){const l=this.storage.getItem(i),c=this.localCache[i];l!==c&&n(i,c,l)}}onStorageEvent(n,i=!1){if(!n.key){this.forAllChangedKeys((h,v,m)=>{this.notifyListeners(h,m)});return}const l=n.key;i?this.detachListener():this.stopPolling();const c=()=>{const h=this.storage.getItem(l);!i&&this.localCache[l]===h||this.notifyListeners(l,h)},d=this.storage.getItem(l);I0()&&d!==n.newValue&&n.newValue!==n.oldValue?setTimeout(c,Z0):c()}notifyListeners(n,i){this.localCache[n]=i;const l=this.listeners[n];if(l)for(const c of Array.from(l))c(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,i,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:i,newValue:l}),!0)})},J0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,i){await super._set(n,i),this.localCache[n]=JSON.stringify(i)}async _get(n){const i=await super._get(n);return this.localCache[n]=JSON.stringify(i),i}async _remove(n){await super._remove(n),delete this.localCache[n]}}Oh.type="LOCAL";const ew=Oh;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class xh extends Nh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,i){}_removeListener(n,i){}}xh.type="SESSION";const Lh=xh;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function tw(o){return Promise.all(o.map(async n=>{try{return{fulfilled:!0,value:await n}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ws{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const i=this.receivers.find(c=>c.isListeningto(n));if(i)return i;const l=new ws(n);return this.receivers.push(l),l}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const i=n,{eventId:l,eventType:c,data:d}=i.data,h=this.handlersMap[c];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:l,eventType:c});const v=Array.from(h).map(async I=>I(i.origin,d)),m=await tw(v);i.ports[0].postMessage({status:"done",eventId:l,eventType:c,response:m})}_subscribe(n,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(i)}_unsubscribe(n,i){this.handlersMap[n]&&i&&this.handlersMap[n].delete(i),(!i||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ws.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Hl(o="",n=10){let i="";for(let l=0;l<n;l++)i+=Math.floor(Math.random()*10);return o+i}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class nw{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,i,l=50){const c=typeof MessageChannel<"u"?new MessageChannel:null;if(!c)throw new Error("connection_unavailable");let d,h;return new Promise((v,m)=>{const I=Hl("",20);c.port1.start();const O=setTimeout(()=>{m(new Error("unsupported_event"))},l);h={messageChannel:c,onMessage(L){const z=L;if(z.data.eventId===I)switch(z.data.status){case"ack":clearTimeout(O),d=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(d),v(z.data.response);break;default:clearTimeout(O),clearTimeout(d),m(new Error("invalid_response"));break}}},this.handlers.add(h),c.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:n,eventId:I,data:i},[c.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function zt(){return window}function rw(o){zt().location.href=o}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Dh(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function iw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ow(){var o;return((o=navigator==null?void 0:navigator.serviceWorker)===null||o===void 0?void 0:o.controller)||null}function sw(){return Dh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Mh="firebaseLocalStorageDb",aw=1,ms="firebaseLocalStorage",Uh="fbase_key";class Wi{constructor(n){this.request=n}toPromise(){return new Promise((n,i)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function _s(o,n){return o.transaction([ms],n?"readwrite":"readonly").objectStore(ms)}function lw(){const o=indexedDB.deleteDatabase(Mh);return new Wi(o).toPromise()}function Al(){const o=indexedDB.open(Mh,aw);return new Promise((n,i)=>{o.addEventListener("error",()=>{i(o.error)}),o.addEventListener("upgradeneeded",()=>{const l=o.result;try{l.createObjectStore(ms,{keyPath:Uh})}catch(c){i(c)}}),o.addEventListener("success",async()=>{const l=o.result;l.objectStoreNames.contains(ms)?n(l):(l.close(),await lw(),n(await Al()))})})}async function cf(o,n,i){const l=_s(o,!0).put({[Uh]:n,value:i});return new Wi(l).toPromise()}async function uw(o,n){const i=_s(o,!1).get(n),l=await new Wi(i).toPromise();return l===void 0?null:l.value}function df(o,n){const i=_s(o,!0).delete(n);return new Wi(i).toPromise()}const cw=800,dw=3;class Fh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Al(),this.db)}async _withRetries(n){let i=0;for(;;)try{const l=await this._openDb();return await n(l)}catch(l){if(i++>dw)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ws._getInstance(sw()),this.receiver._subscribe("keyChanged",async(n,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(n,i)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await iw(),!this.activeServiceWorker)return;this.sender=new nw(this.activeServiceWorker);const l=await this.sender._send("ping",{},800);l&&!((n=l[0])===null||n===void 0)&&n.fulfilled&&!((i=l[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||ow()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await Al();return await cf(n,ps,"1"),await df(n,ps),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,i){return this._withPendingWrite(async()=>(await this._withRetries(l=>cf(l,n,i)),this.localCache[n]=i,this.notifyServiceWorker(n)))}async _get(n){const i=await this._withRetries(l=>uw(l,n));return this.localCache[n]=i,i}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(i=>df(i,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(c=>{const d=_s(c,!1).getAll();return new Wi(d).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const i=[],l=new Set;if(n.length!==0)for(const{fbase_key:c,value:d}of n)l.add(c),JSON.stringify(this.localCache[c])!==JSON.stringify(d)&&(this.notifyListeners(c,d),i.push(c));for(const c of Object.keys(this.localCache))this.localCache[c]&&!l.has(c)&&(this.notifyListeners(c,null),i.push(c));return i}notifyListeners(n,i){this.localCache[n]=i;const l=this.listeners[n];if(l)for(const c of Array.from(l))c(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(i)}_removeListener(n,i){this.listeners[n]&&(this.listeners[n].delete(i),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fh.type="LOCAL";const fw=Fh;new Bi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function hw(o,n){return n?nn(n):(W(o._popupRedirectResolver,o,"argument-error"),o._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Wl extends Ph{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return br(n,this._buildIdpRequest())}_linkToIdToken(n,i){return br(n,this._buildIdpRequest(i))}_getReauthenticationResolver(n){return br(n,this._buildIdpRequest())}_buildIdpRequest(n){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(i.idToken=n),i}}function pw(o){return G0(o.auth,new Wl(o),o.bypassAuthState)}function mw(o){const{auth:n,user:i}=o;return W(i,n,"internal-error"),K0(i,new Wl(o),o.bypassAuthState)}async function gw(o){const{auth:n,user:i}=o;return W(i,n,"internal-error"),W0(i,new Wl(o),o.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class jh{constructor(n,i,l,c,d=!1){this.auth=n,this.resolver=l,this.user=c,this.bypassAuthState=d,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(n,i)=>{this.pendingPromise={resolve:n,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(n){const{urlResponse:i,sessionId:l,postBody:c,tenantId:d,error:h,type:v}=n;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:i,sessionId:l,tenantId:d||void 0,postBody:c||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(v)(m))}catch(I){this.reject(I)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return pw;case"linkViaPopup":case"linkViaRedirect":return gw;case"reauthViaPopup":case"reauthViaRedirect":return mw;default:sn(this.auth,"internal-error")}}resolve(n){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const vw=new Bi(2e3,1e4);class Fr extends jh{constructor(n,i,l,c,d){super(n,i,c,d),this.provider=l,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return W(n,this.auth,"internal-error"),n}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const n=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var n;return((n=this.authWindow)===null||n===void 0?void 0:n.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const n=()=>{var i,l;if(!((l=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||l===void 0)&&l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(n,vw.get())};n()}}Fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const yw="pendingRedirect",ss=new Map;class ww extends jh{constructor(n,i,l=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,l),this.eventId=null}async execute(){let n=ss.get(this.auth._key());if(!n){try{const l=await _w(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(l)}catch(i){n=()=>Promise.reject(i)}ss.set(this.auth._key(),n)}return this.bypassAuthState||ss.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const i=await this.auth._redirectUserForId(n.eventId);if(i)return this.user=i,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _w(o,n){const i=Iw(n),l=Ew(o);if(!await l._isAvailable())return!1;const c=await l._get(i)==="true";return await l._remove(i),c}function Sw(o,n){ss.set(o._key(),n)}function Ew(o){return nn(o._redirectPersistence)}function Iw(o){return os(yw,o.config.apiKey,o.name)}async function kw(o,n,i=!1){if(Zt(o.app))return Promise.reject(jn(o));const l=Br(o),c=hw(l,n),h=await new ww(l,c,i).execute();return h&&!i&&(delete h.user._redirectEventId,await l._persistUserIfCurrent(h.user),await l._setRedirectUser(null,n)),h}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Tw=10*60*1e3;class Cw{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let i=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(n,l)&&(i=!0,this.sendToConsumer(n,l),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!Pw(n)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=n,i=!0)),i}sendToConsumer(n,i){var l;if(n.error&&!zh(n)){const c=((l=n.error.code)===null||l===void 0?void 0:l.split("auth/")[1])||"internal-error";i.onError(jt(this.auth,c))}else i.onAuthEvent(n)}isEventForConsumer(n,i){const l=i.eventId===null||!!n.eventId&&n.eventId===i.eventId;return i.filter.includes(n.type)&&l}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=Tw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ff(n))}saveEventToCache(n){this.cachedEventUids.add(ff(n)),this.lastProcessedEventTime=Date.now()}}function ff(o){return[o.type,o.eventId,o.sessionId,o.tenantId].filter(n=>n).join("-")}function zh({type:o,error:n}){return o==="unknown"&&(n==null?void 0:n.code)==="auth/no-auth-event"}function Pw(o){switch(o.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zh(o);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Rw(o,n={}){return ur(o,"GET","/v1/projects",n)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Aw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nw=/^https?/;async function Ow(o){if(o.config.emulator)return;const{authorizedDomains:n}=await Rw(o);for(const i of n)try{if(xw(i))return}catch{}sn(o,"unauthorized-domain")}function xw(o){const n=Pl(),{protocol:i,hostname:l}=new URL(n);if(o.startsWith("chrome-extension://")){const h=new URL(o);return h.hostname===""&&l===""?i==="chrome-extension:"&&o.replace("chrome-extension://","")===n.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===l}if(!Nw.test(i))return!1;if(Aw.test(o))return l===o;const c=o.replace(/\./g,"\\.");return new RegExp("^(.+\\."+c+"|"+c+")$","i").test(l)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Lw=new Bi(3e4,6e4);function hf(){const o=zt().___jsl;if(o!=null&&o.H){for(const n of Object.keys(o.H))if(o.H[n].r=o.H[n].r||[],o.H[n].L=o.H[n].L||[],o.H[n].r=[...o.H[n].L],o.CP)for(let i=0;i<o.CP.length;i++)o.CP[i]=null}}function Dw(o){return new Promise((n,i)=>{var l,c,d;function h(){hf(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{hf(),i(jt(o,"network-request-failed"))},timeout:Lw.get()})}if(!((c=(l=zt().gapi)===null||l===void 0?void 0:l.iframes)===null||c===void 0)&&c.Iframe)n(gapi.iframes.getContext());else if(!((d=zt().gapi)===null||d===void 0)&&d.load)h();else{const v=x0("iframefcb");return zt()[v]=()=>{gapi.load?h():i(jt(o,"network-request-failed"))},kh(`${O0()}?onload=${v}`).catch(m=>i(m))}}).catch(n=>{throw as=null,n})}let as=null;function Mw(o){return as=as||Dw(o),as}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Uw=new Bi(5e3,15e3),Fw="__/auth/iframe",jw="emulator/auth/iframe",zw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $w(o){const n=o.config;W(n.authDomain,o,"auth-domain-config-required");const i=n.emulator?$l(n,jw):`https://${o.config.authDomain}/${Fw}`,l={apiKey:n.apiKey,appName:o.name,v:$i},c=bw.get(o.config.apiHost);c&&(l.eid=c);const d=o._getFrameworks();return d.length&&(l.fw=d.join(",")),`${i}?${bi(l).slice(1)}`}async function Bw(o){const n=await Mw(o),i=zt().gapi;return W(i,o,"internal-error"),n.open({where:document.body,url:$w(o),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zw,dontclear:!0},l=>new Promise(async(c,d)=>{await l.restyle({setHideOnLeave:!1});const h=jt(o,"network-request-failed"),v=zt().setTimeout(()=>{d(h)},Uw.get());function m(){zt().clearTimeout(v),c(l)}l.ping(m).then(m,()=>{d(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Vw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hw=500,Ww=600,Kw="_blank",Gw="http://localhost";class pf{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qw(o,n,i,l=Hw,c=Ww){const d=Math.max((window.screen.availHeight-c)/2,0).toString(),h=Math.max((window.screen.availWidth-l)/2,0).toString();let v="";const m=Object.assign(Object.assign({},Vw),{width:l.toString(),height:c.toString(),top:d,left:h}),I=Ye().toLowerCase();i&&(v=vh(I)?Kw:i),mh(I)&&(n=n||Gw,m.scrollbars="yes");const O=Object.entries(m).reduce((z,[V,ie])=>`${z}${V}=${ie},`,"");if(E0(I)&&v!=="_self")return Qw(n||"",v),new pf(null);const L=window.open(n||"",v,O);W(L,o,"popup-blocked");try{L.focus()}catch{}return new pf(L)}function Qw(o,n){const i=document.createElement("a");i.href=o,i.target=n;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(l)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Yw="__/auth/handler",Xw="emulator/auth/handler",Jw=encodeURIComponent("fac");async function mf(o,n,i,l,c,d){W(o.config.authDomain,o,"auth-domain-config-required"),W(o.config.apiKey,o,"invalid-api-key");const h={apiKey:o.config.apiKey,appName:o.name,authType:i,redirectUrl:l,v:$i,eventId:c};if(n instanceof Rh){n.setDefaultLanguage(o.languageCode),h.providerId=n.providerId||"",Eg(n.getCustomParameters())||(h.customParameters=JSON.stringify(n.getCustomParameters()));for(const[O,L]of Object.entries({}))h[O]=L}if(n instanceof Hi){const O=n.getScopes().filter(L=>L!=="");O.length>0&&(h.scopes=O.join(","))}o.tenantId&&(h.tid=o.tenantId);const v=h;for(const O of Object.keys(v))v[O]===void 0&&delete v[O];const m=await o._getAppCheckToken(),I=m?`#${Jw}=${encodeURIComponent(m)}`:"";return`${Zw(o)}?${bi(v).slice(1)}${I}`}function Zw({config:o}){return o.emulator?$l(o,Xw):`https://${o.authDomain}/${Yw}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const _l="webStorageSupport";class e_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lh,this._completeRedirectFn=kw,this._overrideRedirectResult=Sw}async _openPopup(n,i,l,c){var d;an((d=this.eventManagers[n._key()])===null||d===void 0?void 0:d.manager,"_initialize() not called before _openPopup()");const h=await mf(n,i,l,Pl(),c);return qw(n,h,Hl())}async _openRedirect(n,i,l,c){await this._originValidation(n);const d=await mf(n,i,l,Pl(),c);return rw(d),new Promise(()=>{})}_initialize(n){const i=n._key();if(this.eventManagers[i]){const{manager:c,promise:d}=this.eventManagers[i];return c?Promise.resolve(c):(an(d,"If manager is not set, promise should be"),d)}const l=this.initAndGetManager(n);return this.eventManagers[i]={promise:l},l.catch(()=>{delete this.eventManagers[i]}),l}async initAndGetManager(n){const i=await Bw(n),l=new Cw(n);return i.register("authEvent",c=>(W(c==null?void 0:c.authEvent,n,"invalid-auth-event"),{status:l.onEvent(c.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:l},this.iframes[n._key()]=i,l}_isIframeWebStorageSupported(n,i){this.iframes[n._key()].send(_l,{type:_l},c=>{var d;const h=(d=c==null?void 0:c[0])===null||d===void 0?void 0:d[_l];h!==void 0&&i(!!h),sn(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const i=n._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=Ow(n)),this.originValidationPromises[i]}get _shouldInitProactively(){return Eh()||gh()||Vl()}}const t_=e_;var gf="@firebase/auth",vf="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class n_{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){var n;return this.assertAuthConfigured(),((n=this.auth.currentUser)===null||n===void 0?void 0:n.uid)||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const i=this.auth.onIdTokenChanged(l=>{n((l==null?void 0:l.stsTokenManager.accessToken)||null)});this.internalListeners.set(n,i),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const i=this.internalListeners.get(n);i&&(this.internalListeners.delete(n),i(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function r_(o){switch(o){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i_(o){on(new bt("auth",(n,{options:i})=>{const l=n.getProvider("app").getImmediate(),c=n.getProvider("heartbeat"),d=n.getProvider("app-check-internal"),{apiKey:h,authDomain:v}=l.options;W(h&&!h.includes(":"),"invalid-api-key",{appName:l.name});const m={apiKey:h,authDomain:v,clientPlatform:o,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ih(o)},I=new R0(l,c,d,m);return z0(I,i),I},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,i,l)=>{n.getProvider("auth-internal").initialize()})),on(new bt("auth-internal",n=>{const i=Br(n.getProvider("auth").getImmediate());return(l=>new n_(l))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(gf,vf,r_(o)),Ft(gf,vf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const o_=5*60,s_=Cf("authIdTokenMaxAge")||o_;let yf=null;const a_=o=>async n=>{const i=n&&await n.getIdTokenResult(),l=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(l&&l>s_)return;const c=i==null?void 0:i.token;yf!==c&&(yf=c,await fetch(o,{method:c?"POST":"DELETE",headers:c?{Authorization:`Bearer ${c}`}:{}}))};function l_(o=Df()){const n=$r(o,"auth");if(n.isInitialized())return n.getImmediate();const i=j0(o,{popupRedirectResolver:t_,persistence:[fw,ew,Lh]}),l=Cf("authTokenSyncURL");if(l&&typeof isSecureContext=="boolean"&&isSecureContext){const d=new URL(l,location.origin);if(location.origin===d.origin){const h=a_(d.toString());X0(i,h,()=>h(i.currentUser)),Y0(i,v=>h(v))}}const c=fg("auth");return c&&b0(i,`http://${c}`),i}function u_(){var o,n;return(n=(o=document.getElementsByTagName("head"))===null||o===void 0?void 0:o[0])!==null&&n!==void 0?n:document}A0({loadJS(o){return new Promise((n,i)=>{const l=document.createElement("script");l.setAttribute("src",o),l.onload=n,l.onerror=c=>{const d=jt("internal-error");d.customData=c,i(d)},l.type="text/javascript",l.charset="UTF-8",u_().appendChild(l)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i_("Browser");const c_={apiKey:"AIzaSyBEI_vKnrQ66-VoHohGPi4U1F-q-cHQFDw",authDomain:"workspace-b3d1b.firebaseapp.com",projectId:"workspace-b3d1b",storageBucket:"workspace-b3d1b.firebasestorage.app",messagingSenderId:"759647057245",appId:"1:759647057245:web:f7019d2323a099d72ea4b4",measurementId:"G-0DZXK466MV"},bh=Lf(c_);Zy(bh);const d_=l_(bh),f_=()=>{const[o,n]=re.useState(""),[i,l]=re.useState(""),c=async()=>{await Q0(d_,o,i)};return A.jsxs("div",{children:[A.jsx("input",{placeholder:"Email...",onChange:d=>n(d.target.value)}),A.jsx("input",{placeholder:"Password...",onChange:d=>l(d.target.value)}),A.jsx("button",{onClick:c,children:"Sign in"})]})},h_=()=>A.jsxs("div",{className:"title",children:[A.jsx("strong",{children:"Username"}),"WorkSpace"]}),p_=({children:o,url:n})=>A.jsx("form",{target:"_blank",action:n,children:A.jsx("button",{className:"btn btn-primary",children:o})}),m_=({siteL:o})=>A.jsxs("div",{children:[A.jsx("h1",{children:"Website List"}),A.jsx("div",{className:"web-list",children:o.map((n,i)=>A.jsx(p_,{url:n[1],children:n[0]},i))})]}),g_=({tdList:o,setList:n})=>A.jsx("div",{className:"tdListDiv",children:A.jsx("ul",{className:"list-group",children:o.map((i,l)=>A.jsx("li",{className:"list-group-item",children:A.jsxs("div",{className:"todo-item",children:[A.jsx("input",{type:"checkbox"}),i,A.jsx("button",{className:"btn-close",onClick:()=>n(o.filter((c,d)=>d!==l))})]})},l))})}),v_=({onItemChange:o,onAdd:n,addTD:i,tdList:l})=>A.jsxs(A.Fragment,{children:[A.jsx("label",{children:"Add to List: "}),A.jsx("input",{type:"text",onChange:c=>o(c.target.value),value:i}),A.jsx("button",{type:"submit",onClick:()=>{i!==""&&n([...l,i]),o("")},children:" Add item "})]}),y_=()=>{const[o,n]=re.useState(["wake up","eat food","play MC","sleep"]),[i,l]=re.useState("");return A.jsx(A.Fragment,{children:A.jsxs("div",{className:"todo-column",children:[A.jsx("div",{className:"tdTitle",children:"To-do/schedule"}),A.jsx(g_,{tdList:o,setList:n}),A.jsx(v_,{onItemChange:l,onAdd:n,addTD:i,tdList:o})]})})},w_=({setPM:o,pMode:n})=>A.jsxs("div",{children:[n===0?A.jsx("button",{onClick:()=>o(0),type:"button",className:"btn btn-secondary",children:"Pomodoro"}):A.jsx("button",{onClick:()=>o(0),type:"button",className:"btn btn-danger",children:"Pomodoro"}),n===1?A.jsx("button",{onClick:()=>o(1),type:"button",className:"btn btn-secondary",children:"Short Break"}):A.jsx("button",{onClick:()=>o(1),type:"button",className:"btn btn-danger",children:"Short Break"}),n===2?A.jsx("button",{onClick:()=>o(2),type:"button",className:"btn btn-secondary",children:"Long Break"}):A.jsx("button",{onClick:()=>o(2),type:"button",className:"btn btn-danger",children:"Long Break"})]});function __({paused:o}){const[n,i]=re.useState(1);re.useEffect(()=>{if(n<=0||o)return;const c=setTimeout(()=>{i(n-1)},1e3);return()=>clearTimeout(c)},[n,o]);function l(c){i(c)}return{secondsLeft:n,start:l}}const S_=({pMode:o,paused:n,cycle:i,setCycle:l,setPMode:c,setPaused:d})=>{const{secondsLeft:h,start:v}=__({paused:n});re.useEffect(()=>{d(!0),console.log("Pomodoro mounted");let I=900;return o===0?I=1800:o===1&&(I=300),v(I),()=>{o!==0&&l(i+1),v(1)}},[o]),re.useEffect(()=>(h<=0&&(c(o===0?i%4===0?2:1:0),v(1)),()=>{}),[o,h]);const m=h%60<10;return A.jsx(A.Fragment,{children:A.jsxs("div",{className:"curr-time",children:[Math.floor(h/60),":",m&&0,h%60]})})},E_=({setP:o,p:n})=>A.jsx("div",{children:A.jsxs("button",{onClick:()=>{o(!n)},type:"button",className:"btn btn-primary pause-button",children:[n?"Start":"Pause",A.jsx("div",{className:"pause-button-tooltip",children:"Spacebar - Pause"})]})}),I_=()=>{const[o,n]=re.useState(0),[i,l]=re.useState(!1),[c,d]=re.useState(1);return A.jsxs("div",{children:[A.jsx(w_,{setPM:n,pMode:o}),A.jsx(S_,{pMode:o,paused:i,cycle:c,setCycle:d,setPMode:n,setPaused:l}),A.jsx(E_,{setP:l,p:i}),A.jsxs("div",{children:["#",c]}),A.jsx("div",{children:"Time to focus!"})]})},k_=()=>A.jsx("button",{type:"button",className:"btn btn-secondary",children:"Sign In"}),T_=()=>{const[o,n]=re.useState([["How To React","https://react.dev/learn/thinking-in-react"]]);return A.jsx(A.Fragment,{children:A.jsxs("div",{children:[A.jsxs("div",{className:"header",children:[A.jsx(h_,{}),A.jsx(k_,{})]}),A.jsx(f_,{}),A.jsxs("div",{className:"workin",children:[A.jsx(y_,{}),A.jsx("div",{className:"pomobox",children:A.jsx(I_,{})})]}),A.jsx(ig,{onAddSite:n}),A.jsx(m_,{siteL:o})]})})};Bm.createRoot(document.getElementById("root")).render(A.jsx(re.StrictMode,{children:A.jsx(T_,{})}));
