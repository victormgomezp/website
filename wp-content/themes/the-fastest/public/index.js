webpackJsonp([0],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

  // ----------------------------------------
  // Particles
  // ----------------------------------------
var Sketch = __webpack_require__(19);
  
function Particle( x, y, radius ) {
	this.init( x, y, radius );
}
Particle.prototype = {
    
    	init: function( x, y, radius ) {
    
    		this.alive = true;
    
    		this.radius = radius || 10;
    		this.wander = 0.15;
    		this.theta = random( TWO_PI );
    		this.drag = 0.92;
    		this.color = '#fff';
    
    		this.x = x || 0.0;
    		this.y = y || 0.0;
    
    		this.vx = 0.0;
    		this.vy = 0.0;
    	},
    
    	move: function() {
    
    		this.x += this.vx;
    		this.y += this.vy;
    
    		this.vx *= this.drag;
    		this.vy *= this.drag;
    
    		this.theta += random( -0.5, 0.5 ) * this.wander;
    		this.vx += sin( this.theta ) * 0.1;
    		this.vy += cos( this.theta ) * 0.1;
    
    		this.radius *= 0.96;
    		this.alive = this.radius > 0.5;
    	},
    
    	draw: function( ctx ) {
    
    		ctx.beginPath();
    		ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
    		ctx.fillStyle = this.color;
    		ctx.fill();
    	}
    };
  
module.exports = function(container){
  var MAX_PARTICLES = 280;
  var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
  var particles = [];
  var pool = [];
  
  container.style.display = "block";
  var fireworksSketch = Sketch.create({ container: container });
  fireworksSketch.setup = function() {
  
  	// Set off some initial particles.
  	var i, x, y;
  
  	for ( i = 0; i < 20; i++ ) {
  		x = ( fireworksSketch.width * 0.5 ) + random( -100, 100 );
  		y = ( fireworksSketch.height * 0.5 ) + random( -100, 100 );
  		fireworksSketch.spawn( x, y );
  	}
  };
  fireworksSketch.spawn = function( x, y ) {
  
  	if ( particles.length >= MAX_PARTICLES )
  		pool.push( particles.shift() );
  
  	var particle = pool.length ? pool.pop() : new Particle();
  	particle.init( x, y, random( 5, 40 ) );
  
  	particle.wander = random( 0.5, 2.0 );
  	particle.color = random( COLOURS );
  	particle.drag = random( 0.9, 0.99 );
  
  	var theta = random( TWO_PI );
  	var force = random( 2, 8 );
  
  	particle.vx = sin( theta ) * force;
  	particle.vy = cos( theta ) * force;
  
  	particles.push( particle );
  }
  fireworksSketch.update = function() {
  
  	var i, particle;
  
  	for ( i = particles.length - 1; i >= 0; i-- ) {
  
  		particle = particles[i];
  
  		if ( particle.alive ) particle.move();
  		else pool.push( particles.splice( i, 1 )[0] );
  	}
  };
  fireworksSketch.draw = function() {
  
  	fireworksSketch.globalCompositeOperation  = 'lighter';
  	
  	for ( var i = particles.length - 1; i >= 0; i-- ) {
  		particles[i].draw( fireworksSketch );
  	}
  };
  fireworksSketch.mousemove = function() {
      
      	var particle, theta, force, touch, max, i, j, n;
      
      	for ( i = 0, n = fireworksSketch.touches.length; i < n; i++ ) {
      
      		touch = fireworksSketch.touches[i], max = random( 1, 4 );
      		for ( j = 0; j < max; j++ ) fireworksSketch.spawn( touch.x, touch.y );
      	}
      };
}

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typography__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typography_theme_doelger__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typography_theme_doelger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_typography_theme_doelger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_collapse__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_js_dist_carousel__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_js_dist_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bootstrap_js_dist_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_js_dist_tooltip__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_js_dist_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap_js_dist_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_js_dist_tab__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_js_dist_tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bootstrap_js_dist_tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_all_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__pages_all_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_marketing_events_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_marketing_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__common_marketing_events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_sticky_toggle_js__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_smart_filters_js__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_responsive_video__ = __webpack_require__(166);
/* global WPAS_APP, $ */
__webpack_require__(156);



const typography = new __WEBPACK_IMPORTED_MODULE_0_typography___default.a(__WEBPACK_IMPORTED_MODULE_1_typography_theme_doelger___default.a);
typography.injectStyles();












console.log(WPAS_APP);
WPAS_APP.loadVideo = __WEBPACK_IMPORTED_MODULE_11__common_responsive_video__["a" /* default */];
/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  //loadVideo('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  jQuery('[data-toggle="tooltip"]').tooltip();
  $('.value').each(function() {
  	var text = $(this).text();
  	$(this).parent().css('width', text);
  });
  $('.block').tooltip();
  
  var fireworks = __webpack_require__(14);
  var canvasBg = document.querySelector( '.masthead' );
  fireworks(canvasBg);
}

/**
 * THE PROGRAM
**/

if(['page-the-program','single-full-stack-part-time','single-full-stack','single-web-development','single-coding-intro'].indexOf(WPAS_APP.view.template)!= -1){
  
  var barBreakpoint = $('#bar-breakpoint');
  if(!barBreakpoint) throw new Error('There is no breathepoint established for the bar');
  
  var maxStickPosition = barBreakpoint.offset().top;
  __WEBPACK_IMPORTED_MODULE_9__common_sticky_toggle_js__["a" /* MakeSticky */].init('[data-toggle="sticky-onscroll"]', maxStickPosition, 20);
  
  //animation for the program
  var TheProgram = __webpack_require__(167).default;
  TheProgram.init();
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  Object(__WEBPACK_IMPORTED_MODULE_11__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  var fireworks = __webpack_require__(14);
  var canvasBg = document.querySelector( '#bg-sketch' );
  fireworks(canvasBg);

}

/**
 * CALENDAR
**/

if(WPAS_APP.view.slug === 'calendar' || WPAS_APP.view.slug === 'calendario'){

  __WEBPACK_IMPORTED_MODULE_10__common_smart_filters_js__["a" /* SmartFilters */].init({
    loadingAnimation: '.courses .loading-animation',
    resultsContainer: '.courses .list-group',
    filterDropdown: '.dropdown-filter a',
    filters: [
      { button: '#locationSelector', urlKey: 'l', options: '.location-option' },
      { button: '#langSelector', urlKey: 'lang', options: '.lang-option'},
      { button: '#typeSelector', urlKey: 'type', options: '.type-option'}
    ]
  });
  
  __WEBPACK_IMPORTED_MODULE_9__common_sticky_toggle_js__["a" /* MakeSticky */].init('[data-toggle="sticky-onscroll"]', 4000);
    
}

/**
 * LOCATION
**/

if(['single-location'].indexOf(WPAS_APP.view.template) != -1){
  __webpack_require__(168);
}

/**
 * PARTNERS
**/

if(WPAS_APP.view.slug === 'partners' || WPAS_APP.view.slug === 'socios'){
  
  jQuery('[data-toggle="tooltip"]').tooltip();
  Object(__WEBPACK_IMPORTED_MODULE_11__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/office.mp4',{overlay: 'black'});
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3), __webpack_require__(3)))

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var n,o,i=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(n,o){for(var i,a,u=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(n),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))e.call(i,l)&&(u[l]=i[l]);if(t){a=t(i);for(var f=0;f<a.length;f++)r.call(i,a[f])&&(u[a[f]]=i[a[f]])}}return u},a=function(t,e){e||(e=[0,""]),t=String(t);var r=parseFloat(t,10);return e[0]=r,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},u=function(t){return a(t)[0]},c=function(t){return null==t&&(t=t),function(e,r,n,o){null==n&&(n=t),null==o&&(o=n);var i=a(e)[1];if(i===r)return e;var c=u(e);if("px"!==i)if("em"===i)c=u(e)*u(n);else if("rem"===i)c=u(e)*u(t);else{if("ex"!==i)return e;c=u(e)*u(n)*2}var l=c;if("px"!==r)if("em"===r)l=c/u(o);else if("rem"===r)l=c/u(t);else{if("ex"!==r)return e;l=c/u(o)/2}return parseFloat(l.toFixed(5))+r}},l=a,f=function(t){return l(t)[1]},s=function(t){return l(t)[0]},p={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},v=function(t,e){var r,n=c(e.baseFontSize),o=s(n(t,"px")),i=s(e.baseLineHeightInPx),a=s(n(e.minLinePadding,"px"));return(r=e.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(r+=e.roundToNearestHalfLine?.5:1),r},h=function(t){var e=c(t.baseFontSize);return function(r,n,o){null==r&&(r=1),null==n&&(n=t.baseFontSize),null==o&&(o=0);var i=r*s(t.baseLineHeightInPx)-o+"px",a=e(i,t.rhythmUnit,n);return"px"===f(a)&&(a=Math.floor(s(a))+f(a)),parseFloat(s(a).toFixed(5))+f(a)}},d="[object Number]",b=Object.prototype.toString;n=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&b.call(t)==d},o={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4};function g(t){return!isNaN(parseFloat(t))&&isFinite(t)}var y=function(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!g(e))throw new Error("Hue is not a number");if(!g(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var n=0;if(0!==e){n=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var o=0;return r?(o=t/100,t="100%,"):(o=(100-t)/100,t="0%,"),"hsla("+e+","+n+"%,"+t+o+")"},m="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function j(t,e){return t(e={exports:{}},e.exports),e.exports}var _="object"==typeof m&&m&&m.Object===Object&&m,w="object"==typeof self&&self&&self.Object===Object&&self,O=_||w||Function("return this")(),S=O.Symbol,x=Object.prototype,z=x.hasOwnProperty,F=x.toString,k=S?S.toStringTag:void 0;var A=function(t){var e=z.call(t,k),r=t[k];try{t[k]=void 0;var n=!0}catch(t){}var o=F.call(t);return n&&(e?t[k]=r:delete t[k]),o},L=Object.prototype.toString;var P=function(t){return L.call(t)},B="[object Null]",T="[object Undefined]",M=S?S.toStringTag:void 0;var E=function(t){return null==t?void 0===t?T:B:M&&M in Object(t)?A(t):P(t)};var H=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},N="[object AsyncFunction]",W="[object Function]",I="[object GeneratorFunction]",C="[object Proxy]";var R,$=function(t){if(!H(t))return!1;var e=E(t);return e==W||e==I||e==N||e==C},U=O["__core-js_shared__"],D=(R=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var q=function(t){return!!D&&D in t},V=Function.prototype.toString;var J=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,G=Function.prototype,K=Object.prototype,Y=RegExp("^"+G.toString.call(K.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!H(t)||q(t))&&($(t)?Y:Z).test(J(t))};var X=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var r=X(t,e);return Q(r)?r:void 0},et=function(){try{var t=tt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var rt=function(t,e,r){"__proto__"==e&&et?et(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};var nt=function(t,e){return t===e||t!=t&&e!=e},ot=Object.prototype.hasOwnProperty;var it=function(t,e,r){var n=t[e];ot.call(t,e)&&nt(n,r)&&(void 0!==r||e in t)||rt(t,e,r)},at=Array.isArray;var ut=function(t){return null!=t&&"object"==typeof t},ct="[object Symbol]";var lt=function(t){return"symbol"==typeof t||ut(t)&&E(t)==ct},ft=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,st=/^\w*$/;var pt=function(t,e){if(at(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!lt(t))||st.test(t)||!ft.test(t)||null!=e&&t in Object(e)},vt=tt(Object,"create");var ht=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt="__lodash_hash_undefined__",bt=Object.prototype.hasOwnProperty;var gt=function(t){var e=this.__data__;if(vt){var r=e[t];return r===dt?void 0:r}return bt.call(e,t)?e[t]:void 0},yt=Object.prototype.hasOwnProperty;var mt=function(t){var e=this.__data__;return vt?void 0!==e[t]:yt.call(e,t)},jt="__lodash_hash_undefined__";var _t=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=vt&&void 0===e?jt:e,this};function wt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}wt.prototype.clear=function(){this.__data__=vt?vt(null):{},this.size=0},wt.prototype.delete=ht,wt.prototype.get=gt,wt.prototype.has=mt,wt.prototype.set=_t;var Ot=wt;var St=function(t,e){for(var r=t.length;r--;)if(nt(t[r][0],e))return r;return-1},xt=Array.prototype.splice;var zt=function(t){var e=this.__data__,r=St(e,t);return!(r<0||(r==e.length-1?e.pop():xt.call(e,r,1),--this.size,0))};var Ft=function(t){var e=this.__data__,r=St(e,t);return r<0?void 0:e[r][1]};var kt=function(t){return St(this.__data__,t)>-1};var At=function(t,e){var r=this.__data__,n=St(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Lt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Lt.prototype.clear=function(){this.__data__=[],this.size=0},Lt.prototype.delete=zt,Lt.prototype.get=Ft,Lt.prototype.has=kt,Lt.prototype.set=At;var Pt=Lt,Bt=tt(O,"Map");var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Mt=function(t,e){var r=t.__data__;return Tt(e)?r["string"==typeof e?"string":"hash"]:r.map};var Et=function(t){var e=Mt(this,t).delete(t);return this.size-=e?1:0,e};var Ht=function(t){return Mt(this,t).get(t)};var Nt=function(t){return Mt(this,t).has(t)};var Wt=function(t,e){var r=Mt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function It(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}It.prototype.clear=function(){this.size=0,this.__data__={hash:new Ot,map:new(Bt||Pt),string:new Ot}},It.prototype.delete=Et,It.prototype.get=Ht,It.prototype.has=Nt,It.prototype.set=Wt;var Ct=It,Rt="Expected a function";function $t(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(Rt);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new($t.Cache||Ct),r}$t.Cache=Ct;var Ut=$t,Dt=500;var qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vt=/\\(\\)?/g,Jt=function(t){var e=Ut(t,function(t){return r.size===Dt&&r.clear(),t}),r=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(qt,function(t,r,n,o){e.push(n?o.replace(Vt,"$1"):r||t)}),e});var Zt=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},Gt=1/0,Kt=S?S.prototype:void 0,Yt=Kt?Kt.toString:void 0;var Qt=function t(e){if("string"==typeof e)return e;if(at(e))return Zt(e,t)+"";if(lt(e))return Yt?Yt.call(e):"";var r=e+"";return"0"==r&&1/e==-Gt?"-0":r};var Xt=function(t){return null==t?"":Qt(t)};var te=function(t,e){return at(t)?t:pt(t,e)?[t]:Jt(Xt(t))},ee=9007199254740991,re=/^(?:0|[1-9]\d*)$/;var ne=function(t,e){var r=typeof t;return!!(e=null==e?ee:e)&&("number"==r||"symbol"!=r&&re.test(t))&&t>-1&&t%1==0&&t<e},oe=1/0;var ie=function(t){if("string"==typeof t||lt(t))return t;var e=t+"";return"0"==e&&1/t==-oe?"-0":e};var ae=function(t,e,r,n){if(!H(t))return t;for(var o=-1,i=(e=te(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=ie(e[o]),l=r;if(o!=a){var f=u[c];void 0===(l=n?n(f,c,u):void 0)&&(l=H(f)?f:ne(e[o+1])?[]:{})}it(u,c,l),u=u[c]}return t};var ue=function(t,e,r){return null==t?t:ae(t,e,r)};var ce=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var le=function(t){return function(e,r,n){for(var o=-1,i=Object(e),a=n(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===r(i[c],c,i))break}return e}}();var fe=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},se="[object Arguments]";var pe=function(t){return ut(t)&&E(t)==se},ve=Object.prototype,he=ve.hasOwnProperty,de=ve.propertyIsEnumerable,be=pe(function(){return arguments}())?pe:function(t){return ut(t)&&he.call(t,"callee")&&!de.call(t,"callee")};var ge=function(){return!1},ye=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?O.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||ge}),me=9007199254740991;var je=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=me},_e={};_e["[object Float32Array]"]=_e["[object Float64Array]"]=_e["[object Int8Array]"]=_e["[object Int16Array]"]=_e["[object Int32Array]"]=_e["[object Uint8Array]"]=_e["[object Uint8ClampedArray]"]=_e["[object Uint16Array]"]=_e["[object Uint32Array]"]=!0,_e["[object Arguments]"]=_e["[object Array]"]=_e["[object ArrayBuffer]"]=_e["[object Boolean]"]=_e["[object DataView]"]=_e["[object Date]"]=_e["[object Error]"]=_e["[object Function]"]=_e["[object Map]"]=_e["[object Number]"]=_e["[object Object]"]=_e["[object RegExp]"]=_e["[object Set]"]=_e["[object String]"]=_e["[object WeakMap]"]=!1;var we=function(t){return ut(t)&&je(t.length)&&!!_e[E(t)]};var Oe=function(t){return function(e){return t(e)}},Se=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&_.process,i=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),xe=Se&&Se.isTypedArray,ze=xe?Oe(xe):we,Fe=Object.prototype.hasOwnProperty;var ke=function(t,e){var r=at(t),n=!r&&be(t),o=!r&&!n&&ye(t),i=!r&&!n&&!o&&ze(t),a=r||n||o||i,u=a?fe(t.length,String):[],c=u.length;for(var l in t)!e&&!Fe.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ne(l,c))||u.push(l);return u},Ae=Object.prototype;var Le=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ae)};var Pe=function(t,e){return function(r){return t(e(r))}},Be=Pe(Object.keys,Object),Te=Object.prototype.hasOwnProperty;var Me=function(t){if(!Le(t))return Be(t);var e=[];for(var r in Object(t))Te.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Ee=function(t){return null!=t&&je(t.length)&&!$(t)};var He=function(t){return Ee(t)?ke(t):Me(t)};var Ne=function(t,e){return function(r,n){if(null==r)return r;if(!Ee(r))return t(r,n);for(var o=r.length,i=e?o:-1,a=Object(r);(e?i--:++i<o)&&!1!==n(a[i],i,a););return r}}(function(t,e){return t&&le(t,e,He)});var We=function(t){return t};var Ie=function(t){return"function"==typeof t?t:We};var Ce=function(t,e){return(at(t)?ce:Ne)(t,Ie(e))},Re="[object Number]";var $e=function(t){return"number"==typeof t||ut(t)&&E(t)==Re},Ue="[object String]";var De=function(t){return"string"==typeof t||!at(t)&&ut(t)&&E(t)==Ue};var qe=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var Ve=function(t){return this.__data__.get(t)};var Je=function(t){return this.__data__.has(t)},Ze=200;var Ge=function(t,e){var r=this.__data__;if(r instanceof Pt){var n=r.__data__;if(!Bt||n.length<Ze-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ct(n)}return r.set(t,e),this.size=r.size,this};function Ke(t){var e=this.__data__=new Pt(t);this.size=e.size}Ke.prototype.clear=function(){this.__data__=new Pt,this.size=0},Ke.prototype.delete=qe,Ke.prototype.get=Ve,Ke.prototype.has=Je,Ke.prototype.set=Ge;var Ye=Ke;var Qe=function(t,e,r){(void 0===r||nt(t[e],r))&&(void 0!==r||e in t)||rt(t,e,r)},Xe=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?O.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}}),tr=O.Uint8Array;var er=function(t){var e=new t.constructor(t.byteLength);return new tr(e).set(new tr(t)),e};var rr=function(t,e){var r=e?er(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var nr=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e},or=Object.create,ir=function(){function t(){}return function(e){if(!H(e))return{};if(or)return or(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),ar=Pe(Object.getPrototypeOf,Object);var ur=function(t){return"function"!=typeof t.constructor||Le(t)?{}:ir(ar(t))};var cr=function(t){return ut(t)&&Ee(t)},lr="[object Object]",fr=Function.prototype,sr=Object.prototype,pr=fr.toString,vr=sr.hasOwnProperty,hr=pr.call(Object);var dr=function(t){if(!ut(t)||E(t)!=lr)return!1;var e=ar(t);if(null===e)return!0;var r=vr.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&pr.call(r)==hr};var br=function(t,e){return"__proto__"==e?void 0:t[e]};var gr=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=n?n(r[u],t[u],u,r,t):void 0;void 0===c&&(c=t[u]),o?rt(r,u,c):it(r,u,c)}return r};var yr=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},mr=Object.prototype.hasOwnProperty;var jr=function(t){if(!H(t))return yr(t);var e=Le(t),r=[];for(var n in t)("constructor"!=n||!e&&mr.call(t,n))&&r.push(n);return r};var _r=function(t){return Ee(t)?ke(t,!0):jr(t)};var wr=function(t){return gr(t,_r(t))};var Or=function(t,e,r,n,o,i,a){var u=br(t,r),c=br(e,r),l=a.get(c);if(l)Qe(t,r,l);else{var f=i?i(u,c,r+"",t,e,a):void 0,s=void 0===f;if(s){var p=at(c),v=!p&&ye(c),h=!p&&!v&&ze(c);f=c,p||v||h?at(u)?f=u:cr(u)?f=nr(u):v?(s=!1,f=Xe(c,!0)):h?(s=!1,f=rr(c,!0)):f=[]:dr(c)||be(c)?(f=u,be(u)?f=wr(u):(!H(u)||n&&$(u))&&(f=ur(c))):s=!1}s&&(a.set(c,f),o(f,c,n,i,a),a.delete(c)),Qe(t,r,f)}};var Sr=function t(e,r,n,o,i){e!==r&&le(r,function(a,u){if(H(a))i||(i=new Ye),Or(e,r,u,n,t,o,i);else{var c=o?o(br(e,u),a,u+"",e,r,i):void 0;void 0===c&&(c=a),Qe(e,u,c)}},_r)};var xr=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},zr=Math.max;var Fr=function(t,e,r){return e=zr(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=zr(n.length-e,0),a=Array(i);++o<i;)a[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=r(a),xr(t,this,u)}};var kr=function(t){return function(){return t}},Ar=800,Lr=16,Pr=Date.now;var Br=function(t){var e=0,r=0;return function(){var n=Pr(),o=Lr-(n-r);if(r=n,o>0){if(++e>=Ar)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(et?function(t,e){return et(t,"toString",{configurable:!0,enumerable:!1,value:kr(e),writable:!0})}:We);var Tr=function(t,e){return Br(Fr(t,e,We),t+"")};var Mr=function(t,e,r){if(!H(r))return!1;var n=typeof e;return!!("number"==n?Ee(r)&&ne(e,r.length):"string"==n&&e in r)&&nt(r[e],t)};var Er=function(t){return Tr(function(e,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,a=o>2?r[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&Mr(r[0],r[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var u=r[n];u&&t(e,u,n,i)}return e})}(function(t,e,r){Sr(t,e,r)});var Hr=function(t,e,r,n){var o=-1,i=null==t?0:t.length;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r},Nr="__lodash_hash_undefined__";var Wr=function(t){return this.__data__.has(t)};function Ir(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new Ct;++e<r;)this.add(t[e])}Ir.prototype.add=Ir.prototype.push=function(t){return this.__data__.set(t,Nr),this},Ir.prototype.has=Wr;var Cr=Ir;var Rr=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1};var $r=function(t,e){return t.has(e)},Ur=1,Dr=2;var qr=function(t,e,r,n,o,i){var a=r&Ur,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var f=-1,s=!0,p=r&Dr?new Cr:void 0;for(i.set(t,e),i.set(e,t);++f<u;){var v=t[f],h=e[f];if(n)var d=a?n(h,v,f,e,t,i):n(v,h,f,t,e,i);if(void 0!==d){if(d)continue;s=!1;break}if(p){if(!Rr(e,function(t,e){if(!$r(p,e)&&(v===t||o(v,t,r,n,i)))return p.push(e)})){s=!1;break}}else if(v!==h&&!o(v,h,r,n,i)){s=!1;break}}return i.delete(t),i.delete(e),s};var Vr=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r};var Jr=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r},Zr=1,Gr=2,Kr="[object Boolean]",Yr="[object Date]",Qr="[object Error]",Xr="[object Map]",tn="[object Number]",en="[object RegExp]",rn="[object Set]",nn="[object String]",on="[object Symbol]",an="[object ArrayBuffer]",un="[object DataView]",cn=S?S.prototype:void 0,ln=cn?cn.valueOf:void 0;var fn=function(t,e,r,n,o,i,a){switch(r){case un:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case an:return!(t.byteLength!=e.byteLength||!i(new tr(t),new tr(e)));case Kr:case Yr:case tn:return nt(+t,+e);case Qr:return t.name==e.name&&t.message==e.message;case en:case nn:return t==e+"";case Xr:var u=Vr;case rn:if(u||(u=Jr),t.size!=e.size&&!(n&Zr))return!1;var c=a.get(t);if(c)return c==e;n|=Gr,a.set(t,e);var l=qr(u(t),u(e),n,o,i,a);return a.delete(t),l;case on:if(ln)return ln.call(t)==ln.call(e)}return!1};var sn=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t};var pn=function(t,e,r){var n=e(t);return at(t)?n:sn(n,r(t))};var vn=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i};var hn=Object.prototype.propertyIsEnumerable,dn=Object.getOwnPropertySymbols,bn=dn?function(t){return null==t?[]:(t=Object(t),vn(dn(t),function(e){return hn.call(t,e)}))}:function(){return[]};var gn=function(t){return pn(t,He,bn)},yn=1,mn=Object.prototype.hasOwnProperty;var jn=function(t,e,r,n,o,i){var a=r&yn,u=gn(t),c=u.length;if(c!=gn(e).length&&!a)return!1;for(var l=c;l--;){var f=u[l];if(!(a?f in e:mn.call(e,f)))return!1}var s=i.get(t);if(s&&i.get(e))return s==e;var p=!0;i.set(t,e),i.set(e,t);for(var v=a;++l<c;){var h=t[f=u[l]],d=e[f];if(n)var b=a?n(d,h,f,e,t,i):n(h,d,f,t,e,i);if(!(void 0===b?h===d||o(h,d,r,n,i):b)){p=!1;break}v||(v="constructor"==f)}if(p&&!v){var g=t.constructor,y=e.constructor;g!=y&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y)&&(p=!1)}return i.delete(t),i.delete(e),p},_n=tt(O,"DataView"),wn=tt(O,"Promise"),On=tt(O,"Set"),Sn=tt(O,"WeakMap"),xn=J(_n),zn=J(Bt),Fn=J(wn),kn=J(On),An=J(Sn),Ln=E;(_n&&"[object DataView]"!=Ln(new _n(new ArrayBuffer(1)))||Bt&&"[object Map]"!=Ln(new Bt)||wn&&"[object Promise]"!=Ln(wn.resolve())||On&&"[object Set]"!=Ln(new On)||Sn&&"[object WeakMap]"!=Ln(new Sn))&&(Ln=function(t){var e=E(t),r="[object Object]"==e?t.constructor:void 0,n=r?J(r):"";if(n)switch(n){case xn:return"[object DataView]";case zn:return"[object Map]";case Fn:return"[object Promise]";case kn:return"[object Set]";case An:return"[object WeakMap]"}return e});var Pn=Ln,Bn=1,Tn="[object Arguments]",Mn="[object Array]",En="[object Object]",Hn=Object.prototype.hasOwnProperty;var Nn=function(t,e,r,n,o,i){var a=at(t),u=at(e),c=a?Mn:Pn(t),l=u?Mn:Pn(e),f=(c=c==Tn?En:c)==En,s=(l=l==Tn?En:l)==En,p=c==l;if(p&&ye(t)){if(!ye(e))return!1;a=!0,f=!1}if(p&&!f)return i||(i=new Ye),a||ze(t)?qr(t,e,r,n,o,i):fn(t,e,c,r,n,o,i);if(!(r&Bn)){var v=f&&Hn.call(t,"__wrapped__"),h=s&&Hn.call(e,"__wrapped__");if(v||h){var d=v?t.value():t,b=h?e.value():e;return i||(i=new Ye),o(d,b,r,n,i)}}return!!p&&(i||(i=new Ye),jn(t,e,r,n,o,i))};var Wn=function t(e,r,n,o,i){return e===r||(null==e||null==r||!ut(e)&&!ut(r)?e!=e&&r!=r:Nn(e,r,n,o,t,i))},In=1,Cn=2;var Rn=function(t,e,r,n){var o=r.length,i=o,a=!n;if(null==t)return!i;for(t=Object(t);o--;){var u=r[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=r[o])[0],l=t[c],f=u[1];if(a&&u[2]){if(void 0===l&&!(c in t))return!1}else{var s=new Ye;if(n)var p=n(l,f,c,t,e,s);if(!(void 0===p?Wn(f,l,In|Cn,n,s):p))return!1}}return!0};var $n=function(t){return t==t&&!H(t)};var Un=function(t){for(var e=He(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,$n(o)]}return e};var Dn=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}};var qn=function(t){var e=Un(t);return 1==e.length&&e[0][2]?Dn(e[0][0],e[0][1]):function(r){return r===t||Rn(r,t,e)}};var Vn=function(t,e){for(var r=0,n=(e=te(e,t)).length;null!=t&&r<n;)t=t[ie(e[r++])];return r&&r==n?t:void 0};var Jn=function(t,e,r){var n=null==t?void 0:Vn(t,e);return void 0===n?r:n};var Zn=function(t,e){return null!=t&&e in Object(t)};var Gn=function(t,e,r){for(var n=-1,o=(e=te(e,t)).length,i=!1;++n<o;){var a=ie(e[n]);if(!(i=null!=t&&r(t,a)))break;t=t[a]}return i||++n!=o?i:!!(o=null==t?0:t.length)&&je(o)&&ne(a,o)&&(at(t)||be(t))};var Kn=function(t,e){return null!=t&&Gn(t,e,Zn)},Yn=1,Qn=2;var Xn=function(t,e){return pt(t)&&$n(e)?Dn(ie(t),e):function(r){var n=Jn(r,t);return void 0===n&&n===e?Kn(r,t):Wn(e,n,Yn|Qn)}};var to=function(t){return function(e){return null==e?void 0:e[t]}};var eo=function(t){return function(e){return Vn(e,t)}};var ro=function(t){return pt(t)?to(ie(t)):eo(t)};var no=function(t){return"function"==typeof t?t:null==t?We:"object"==typeof t?at(t)?Xn(t[0],t[1]):qn(t):ro(t)};var oo=function(t,e,r,n,o){return o(t,function(t,o,i){r=n?(n=!1,t):e(r,t,o,i)}),r};var io=function(t,e,r){var n=at(t)?Hr:oo,o=arguments.length<3;return n(t,no(e,4),r,o,Ne)},ao=function(t,e,r){var n;return void 0===t&&(t={}),n=at(e)?e:[e],Ce(n,function(e){Ce(r,function(r,n){ue(t,e+"."+n,r)})}),t},uo=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system"],co=function(t){return-1!==uo.indexOf(t)?t:"'"+t+"'"};var lo,fo=j(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default="html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}"}),so=(lo=fo)&&lo.__esModule&&Object.prototype.hasOwnProperty.call(lo,"default")?lo.default:lo,po=function(t){return io(t,function(t,e,r){return t+=r+"{",Ce(e,function(e,r){if(H(e)){var n={};n[r]=e,t+=po(n)}else{var o=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/([a-z\d])([A-Z])/g,"$1"+(e=void 0===e?"_":e)+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}(r,"-")+":"+e+";";["Webkit","ms","Moz","O"].forEach(function(t){r.slice(0,t.length)===t&&(o="-"+o)}),t+=o}}),t+="}"},"")};module.exports=function(t){var e,r,a,u,l=i({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),d=(e=l,r=JSON.parse(JSON.stringify(p)),a=Object.assign({},r,e),u=c(a.baseFontSize),f(a.baseLineHeight)?(s(u(a.baseFontSize,"px")),a.baseLineHeightInPx=u(a.baseLineHeight,"px")):a.baseLineHeightInPx=s(a.baseFontSize)*a.baseLineHeight+"px",{rhythm:h(a),establishBaseline:function(){return c((t=a).baseFontSize),{fontSize:s(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return v(t,a)},adjustFontSizeTo:function(t,e,r){return null==e&&(e="auto"),function(t,e,r,n){null==r&&(r=n.baseFontSize),"%"===f(t)&&(t=s(n.baseFontSize)*(s(t)/100)+"px");var o=c(n.baseFontSize);t=o(t,"px",r=o(r,"px"));var i=h(n);return"auto"===e&&(e=v(t,n)),{fontSize:o(t,n.rhythmUnit,r),lineHeight:i(e,r)}}(t,e,r,a)}});return d.scale=function(t){var e=parseInt(l.baseFontSize,10),r=function(t,e){var r;return null==t&&(t=0),null==e&&(e="golden"),r=n(e)?e:null!=o[e]?o[e]:o.golden,Math.pow(r,t)}(t,l.scaleRatio)*e+"px";return d.adjustFontSizeTo(r)},Object.assign({},{options:l},d,{createStyles:function(){return this.toString()},toJSON:function(){return function(t,e){var r={},n=t.establishBaseline();r=ao(r,"html",{font:n.fontSize+"/"+n.lineHeight+" "+e.bodyFontFamily.map(co).join(","),boxSizing:"border-box",overflowY:"scroll"}),r=ao(r,["*","*:before","*:after"],{boxSizing:"inherit"}),r=ao(r,"body",{color:e.bodyColor,fontFamily:e.bodyFontFamily.map(co).join(","),fontWeight:e.bodyWeight,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"'}),r=ao(r,"img",{maxWidth:"100%"});var o="";o=$e(e.blockMarginBottom)?t.rhythm(e.blockMarginBottom):De(e.blockMarginBottom)?e.blockMarginBottom:t.rhythm(1),r=ao(r,["h1","h2","h3","h4","h5","h6","hgroup","ul","ol","dl","dd","p","figure","pre","table","fieldset","blockquote","form","noscript","iframe","img","hr","address"],{marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:o}),r=ao(r,"blockquote",{marginRight:t.rhythm(1),marginBottom:o,marginLeft:t.rhythm(1)}),r=ao(r,["b","strong","dt","th"],{fontWeight:e.boldWeight}),r=ao(r,"hr",{background:y(80),border:"none",height:"1px",marginBottom:"calc("+o+" - 1px)"}),r=ao(r,["ol","ul"],{listStylePosition:"outside",listStyleImage:"none",marginLeft:t.rhythm(1)}),r=ao(r,"li",{marginBottom:"calc("+o+" / 2)"}),r=ao(r,["ol li","ul li"],{paddingLeft:0}),r=ao(r,["li > ol","li > ul"],{marginLeft:t.rhythm(1),marginBottom:"calc("+o+" / 2)",marginTop:"calc("+o+" / 2)"}),r=ao(r,["blockquote *:last-child","li *:last-child","p *:last-child"],{marginBottom:0}),r=ao(r,["li > p"],{marginBottom:"calc("+o+" / 2)"}),r=ao(r,["code","kbd","pre","samp"],Object.assign({},t.adjustFontSizeTo("85%"))),(r=ao(r,["abbr","acronym"],{borderBottom:"1px dotted "+y(50),cursor:"help"}))["abbr[title]"]={borderBottom:"1px dotted "+y(50),cursor:"help",textDecoration:"none"},r=ao(r,["table"],Object.assign({},t.adjustFontSizeTo(e.baseFontSize),{borderCollapse:"collapse",width:"100%"})),r=ao(r,["thead"],{textAlign:"left"}),r=ao(r,["td,th"],{textAlign:"left",borderBottom:"1px solid "+y(88),fontFeatureSettings:'"tnum"',MozFontFeatureSettings:'"tnum"',msFontFeatureSettings:'"tnum"',WebkitFontFeatureSettings:'"tnum"',paddingLeft:t.rhythm(2/3),paddingRight:t.rhythm(2/3),paddingTop:t.rhythm(.5),paddingBottom:"calc("+t.rhythm(.5)+" - 1px)"}),r=ao(r,"th:first-child,td:first-child",{paddingLeft:0}),r=ao(r,"th:last-child,td:last-child",{paddingRight:0}),r=ao(r,["h1","h2","h3","h4","h5","h6"],{color:e.headerColor,fontFamily:e.headerFontFamily.map(co).join(","),fontWeight:e.headerWeight,textRendering:"optimizeLegibility"});var i=t.scale(1),a=t.scale(.6),u=t.scale(.4),c=t.scale(0),l=t.scale(-.2),f=t.scale(-.3);return Ce([i,a,u,c,l,f],function(t,n){r=ue(r,"h"+(n+1)+".fontSize",t.fontSize),r=ue(r,"h"+(n+1)+".lineHeight",e.headerLineHeight)}),at(e.plugins)&&(r=io(e.plugins,function(r,n){return Er(r,n(t,e,r))},r)),e.overrideStyles&&$(e.overrideStyles)&&(r=Er(r,e.overrideStyles(t,e,r))),e.overrideThemeStyles&&$(e.overrideThemeStyles)&&(r=Er(r,e.overrideThemeStyles(t,e,r))),r}(d,l)},toString:function(){return function(t,e,r){var n=po(r);return e.includeNormalize&&(n=""+so+n),n}(0,l,this.toJSON())},injectStyles:function(){if("undefined"!=typeof document)if(document.getElementById("typography.js"))document.getElementById("typography.js").innerHTML=this.toString();else{var t=document.createElement("style");t.id="typography.js",t.innerHTML=this.toString(),document.head.appendChild(t)}}})};
//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _grayPercentage = __webpack_require__(160);

var _grayPercentage2 = _interopRequireDefault(_grayPercentage);

var _typographyBreakpointConstants = __webpack_require__(161);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = {
  title: 'Doelger',
  baseFontSize: '17px',
  baseLineHeight: 1.45,
  blockMarginBottom: 0.8,
  googleFonts: [{
    name: 'Arvo',
    styles: ['700']
  }, {
    name: 'Cabin',
    styles: ['400', '400i', '700']
  }],
  headerFontFamily: ['Arvo', 'sans-serif'],
  bodyFontFamily: ['Cabin', 'serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: '700',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: function overrideStyles(_ref, options) {
    var adjustFontSizeTo = _ref.adjustFontSizeTo,
        scale = _ref.scale,
        rhythm = _ref.rhythm;

    var linkColor = '#ff483b';
    return _defineProperty({
      a: {
        color: linkColor,
        textDecoration: 'none',
        textShadow: '.03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff', // eslint-disable-line
        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ' + linkColor + ' 1px, ' + linkColor + ' 2px, rgba(0, 0, 0, 0) 2px)' },
      'a:hover,a:active': {
        textShadow: 'none',
        backgroundImage: 'none'
      },
      'h1,h2,h3,h4,h5,h6': {
        lineHeight: 1.2,
        marginTop: rhythm(1.5),
        marginBottom: rhythm(0.5)
      },
      // Blockquote styles.
      blockquote: _extends({}, scale(1 / 5), {
        borderLeft: rhythm(6 / 16) + ' solid ' + linkColor,
        color: (0, _grayPercentage2.default)(35),
        paddingLeft: rhythm(10 / 16),
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0
      }),
      'blockquote > :last-child': {
        marginBottom: 0
      },
      'blockquote cite': _extends({}, adjustFontSizeTo(options.baseFontSize), {
        color: options.bodyColor,
        fontStyle: 'normal',
        fontWeight: options.bodyWeight
      }),
      'blockquote cite:before': {
        content: '"— "'
      }
    }, _typographyBreakpointConstants.MOBILE_MEDIA_QUERY, {
      blockquote: {
        borderLeft: rhythm(3 / 16) + ' solid ' + linkColor,
        paddingLeft: rhythm(9 / 16),
        fontStyle: 'italic',
        marginLeft: rhythm(-3 / 4),
        marginRight: 0
      }
    });
  }
};

exports.default = theme;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


module.exports = function(lightness, hue, darkBackground) {
  if (typeof hue === "undefined") {
    hue = 0;
  }
  if (typeof darkBackground === "undefined") {
    darkBackground = false;
  }

  // Convert named hues into numeric lightness value.
  if (hue === "cool") {
    hue = 237;
  }
  else if (hue === "slate") {
    hue = 122;
  }
  else if (hue === "warm") {
    hue = 69;
  }

  if (!isNumeric(hue)) {
    throw new Error("Hue is not a number");
  }

  if (!isNumeric(lightness)) {
    throw new Error("Lightness is not a number");
  }

  if (lightness > 100) {
    lightness = 100;
  }
  if (lightness < 0) {
    lightness = 0;
  }

  var saturation = 0;
  if (hue !== 0) {
    var a = 19.92978;
    var b = -0.3651759;
    var c = 0.001737214;
    saturation = a + b * lightness + c * Math.pow(lightness, 2);
  }

  var opacity = 0
  if (darkBackground) {
    opacity = lightness / 100
    lightness = '100%,'
  } else {
    opacity = (100 - lightness) / 100
    lightness = '0%,'
  }

  return "hsla(" + hue + "," + saturation + "%," + lightness + opacity + ")";
};


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LARGER_DISPLAY_WIDTH = exports.LARGER_DISPLAY_WIDTH = '1600px';
var LARGE_DISPLAY_WIDTH = exports.LARGE_DISPLAY_WIDTH = '1280px';
var DEFAULT_WIDTH = exports.DEFAULT_WIDTH = '980px';
var TABLET_WIDTH = exports.TABLET_WIDTH = '768px';
var MOBILE_WIDTH = exports.MOBILE_WIDTH = '480px';

var LARGER_DISPLAY_MEDIA_QUERY = exports.LARGER_DISPLAY_MEDIA_QUERY = '@media only screen and (max-width:1600px)';
var LARGE_DISPLAY_MEDIA_QUERY = exports.LARGE_DISPLAY_MEDIA_QUERY = '@media only screen and (max-width:1280px)';
var DEFAULT_MEDIA_QUERY = exports.DEFAULT_MEDIA_QUERY = '@media only screen and (max-width:980px)';
var TABLET_MEDIA_QUERY = exports.TABLET_MEDIA_QUERY = '@media only screen and (max-width:768px)';
var MOBILE_MEDIA_QUERY = exports.MOBILE_MEDIA_QUERY = '@media only screen and (max-width:480px)';

var MIN_LARGER_DISPLAY_MEDIA_QUERY = exports.MIN_LARGER_DISPLAY_MEDIA_QUERY = '@media (min-width:1600px)';
var MIN_LARGE_DISPLAY_MEDIA_QUERY = exports.MIN_LARGE_DISPLAY_MEDIA_QUERY = '@media (min-width:1280px)';
var MIN_DEFAULT_MEDIA_QUERY = exports.MIN_DEFAULT_MEDIA_QUERY = '@media (min-width:980px)';
var MIN_TABLET_MEDIA_QUERY = exports.MIN_TABLET_MEDIA_QUERY = '@media (min-width:768px)';
var MIN_MOBILE_MEDIA_QUERY = exports.MIN_MOBILE_MEDIA_QUERY = '@media (min-width:480px)';

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap tooltip.js v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(3), __webpack_require__(21), __webpack_require__(5)) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global.Tooltip = factory(global.jQuery,global.Popper,global.Util));
}(this, (function ($,Popper,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.2.1';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent'
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  };
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this._handlePopperPlacementChange(data);
          }
        });
        $(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // Protected


    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName.FADE + " " + ClassName.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;

      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    }; // Private


    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
            return _this3.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
          $(_this3.element).on(eventIn, _this3.config.selector, function (event) {
            return _this3._enter(event);
          }).on(eventOut, _this3.config.selector, function (event) {
            return _this3._leave(event);
          });
        }
      });
      $(this.element).closest('.modal').on('hide.bs.modal', function () {
        if (_this3.element) {
          _this3.hide();
        }
      });

      if (this.config.selector) {
        this.config = _objectSpread({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, this.constructor.Default, $(this.element).data(), typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    }; // Static


    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;

})));
//# sourceMappingURL=tooltip.js.map


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap tab.js v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(3), __webpack_require__(5)) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Tab = factory(global.jQuery,global.Util));
}(this, (function ($,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.2.1';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // Private


    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector.ACTIVE_UL) : $(container).children(Selector.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);
      $(element).addClass(ClassName.SHOW);

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    }; // Static


    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;

})));
//# sourceMappingURL=tab.js.map


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeSticky; });
var MakeSticky = (function(){
    
    var plugin = {};
    //[data-toggle="sticky-onscroll"]
    plugin.init = function(selector, maxStickPosition, marginTop)
    {
        if(typeof marginTop == 'undefined') marginTop = 0;
        // Find all data-toggle="sticky-onscroll" elements
        $(selector).each(function() {
          var sticky = $(this);
          var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
          sticky.before(stickyWrapper);
          sticky.addClass('sticky');
          
          // Scroll & resize events
          $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
            stickyToggle(sticky, stickyWrapper, $(this), maxStickPosition, marginTop);
          });
          
          // On page load
          stickyToggle(sticky, stickyWrapper, $(window), maxStickPosition, marginTop);
        });
        
    }
    
    function stickyToggle(sticky, stickyWrapper, scrollElement, maxStickPosition, marginTop) {
          var stickyHeight = sticky.outerHeight();
          var stickyWidth = sticky.outerWidth();
          var offset = stickyWrapper.offset();
          var stickyTop = offset.top;
          var stickyLeft = offset.left;
    
          var windowScrollPosition = scrollElement.scrollTop();
          //console.log("winPos->"+windowScrollPosition+ " sTop->"+stickyTop+" max->"+maxStickPosition );
          if (windowScrollPosition >= stickyTop){
            if(windowScrollPosition < maxStickPosition)
            {
              stickyWrapper.height(stickyHeight);
              sticky.addClass("is-sticky");
              sticky.removeClass("fozen-sticky");
              sticky.css('width',stickyWidth+'px');
              sticky.css('left',stickyLeft+'px');
              sticky.css('top',marginTop+'px');
            }
            else
            {
              sticky.removeClass("is-sticky");
              sticky.addClass("fozen-sticky");
              sticky.css('top',(maxStickPosition-stickyTop)+'px');
              sticky.css('left','15px');
            }
          }
          else{
            sticky.removeClass("is-sticky");
            sticky.removeClass("fozen-sticky");
            sticky.css('left','0');
            sticky.css('top','0');
            stickyWrapper.height('auto');
          }
    };
    
    return plugin;
    
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartFilters; });
var SmartFilters = (function(){
    
    var plugin = {};
    var config = {
        filters: [],
        filterDropdown: '',
        loadingAnimation: '',
        resultsContainer: '',
    }
    
    
    plugin.init = function(settings){
        $.extend( config, settings );
        
        console.log('Initializing the SmartFilters');
        
        var urlVars = getUrlVars();
        setFiltersDefaultStates(urlVars);
        
        $(config.filterDropdown).on('click', function(event){  
            
            var button = $(this).parent().parent().children('button');
            button.html($(this).html());
            
            var value = $(this).data('value');
            if(value != 'all') urlVars[button.data('key')] = $(this).data('value');
            //else urlVars = unsetArray(urlVars,button.data('key'));
            else delete urlVars[button.data('key')];
            
            $(config.loadingAnimation).css('display','block');
            $(config.resultsContainer).css('display','none');
            $(this).parent().removeClass('show');//hide the dropdown after clicked
            //var parentDropdown = aux.parent();
            //parentDropdown[0].classList.remove('show');
            window.location.href = getBaseURL() + '?' + serialize(urlVars );
            
            event.preventDefault();
            return false;
          });
    }
    
    function setFiltersDefaultStates(urlVars){
        console.log('Setting filter values', urlVars);
        
        config.filters.forEach(function(filter){
            console.log(filter.urlKey);
            if(filter.urlKey in urlVars) $(filter.button).html($(filter.options+'[data-value="'+urlVars[filter.urlKey]+'"]').html());
        });
    }
    
    function getBaseURL(){
        var baseURL = window.location.href;
        var pieces = baseURL.split('?');
        if(pieces.length>1) baseURL = pieces[0];
        
        return baseURL;
    }
    
    function getUrlVars(){
      
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        
        delete vars['0'];
        delete vars[getBaseURL()];
        delete vars[''];
  
        return vars;
    
    }
    
    function serialize(obj) {
        var str = [];
        for(var p in obj)
            if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    }
    
    return plugin;
    
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {var loadVideo = function(videoURL, settings){
  if(typeof settings == 'undefined') settings = {};
  var s = document.body.firstChild;
  
  var videoViewport = document.createElement('div');
  videoViewport.id = "video-viewport";
  videoViewport.classList.add('video-viewport');
  s.parentNode.insertBefore(videoViewport, s);
  
  var video = document.createElement('video');
  video.src = videoURL; video.autoPlay = true; video.loop = true; video.muted = true; 
  video.classList.add('video-background');
  videoViewport.appendChild(video);
  
  video.addEventListener('loadeddata',function(){ video.play(); });
  var vid_w_orig = parseInt($(window).width());
  var vid_h_orig = parseInt($(video).height());
  var min_w = 400;
  window.addEventListener('resize',function(){
      var sourceVideoWidth = video.videoWidth;
      var sourceVideoHeight = video.videoHeight;
      //if(vid_w_orig <= 0 || vid_w_orig == Infinity) vid_w_orig = parseInt($(video).width());
      //if(vid_h_orig <= 0 || vid_h_orig == Infinity) vid_h_orig = parseInt($(video).height());
      var addedPadding = 100;
      var target_with = $(window).width();
      var target_heigh = $('.masthead').height() + $('nav.navbar').height() + parseInt($('.masthead').css('margin-top')) + parseInt($('nav.navbar').css('margin-top')) + addedPadding;
      $(videoViewport).width(target_with);
      $(videoViewport).height(newViewHeight);
  
      var scale_h = target_with / vid_w_orig;
      var scale_v = target_heigh / vid_h_orig;
      var scale = scale_h > scale_v ? scale_h : scale_v;
  
      
      if (scale * vid_w_orig < min_w) scale = min_w / vid_w_orig;
      
      var newViewWidth = scale * vid_w_orig;
      var newViewHeight = scale * vid_w_orig;
      
      //if the new width does not cover the entire screen width
      if (newViewWidth < sourceVideoWidth) scale = sourceVideoWidth / vid_w_orig;
      if (newViewHeight < sourceVideoHeight && scale < (sourceVideoHeight / vid_h_orig)) scale = sourceVideoHeight / vid_h_orig;
      
      newViewWidth = scale * vid_w_orig;
      newViewHeight = scale * vid_w_orig;
  
      $(video).width(newViewWidth);
      $(video).height(newViewHeight);
  
      $(videoViewport).scrollLeft((newViewWidth - target_with) / 2);
      $(videoViewport).scrollTop((newViewHeight - target_heigh) / 2);
  });
  $(window).trigger('resize');
  
  if(typeof settings.overlay != 'undefined'){
    
    var overlay  = document.createElement('div');
    overlay.style.display = "absolute";
    overlay.style.background = settings.overlay;
    overlay.style.opacity = "0.4";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.position = "absolute";
    overlay.style.zIndex = "-1";
    s.parentNode.insertBefore(overlay, s);
  }
}
/* harmony default export */ __webpack_exports__["a"] = (loadVideo);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {var TheProgram = (function(){
    
    var thescope = {};
    // Cache selectors
    var topMenu = $(".program-menu"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("a[href*='#']"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });
    
    thescope.init = function(){
        
        // Bind to scroll
        $(window).scroll(function(){
           // Get container scroll position
           var fromTop = $(this).scrollTop()+topMenuHeight;
        
           // Get id of current scroll item
           var cur = scrollItems.map(function(){
             if ($(this).offset().top < fromTop)
               return this;
           });
           // Get the id of the current element
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
        });
    }
    
    return thescope;
    
})();

/* harmony default export */ __webpack_exports__["default"] = (TheProgram);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

var LocationView = (function(){
    var scope = {};
    
    
    return scope;
})();

LocationView.activate();

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//var newsletterForm = document.querySelector('.email-newsletter form');

$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop();

   if(fromTop>100) $('.footer-bar').css('display','block');
   else $('.footer-bar').css('display','none');
});


$('.newsletter-signup').submit(function(event){
   
   event.preventDefault();
   
   var formNewsletter = $(this);
   var emailField = formNewsletter.find('input[type=email]');
   var email = emailField.val();
   
   $.ajax({
      url: WPAS_APP.ajax_url,
      dataType: 'JSON',
      method: 'POST',
      data: {
         action: 'newsletter_signup',
         email: email
      },
      success: function(response){
         if(response)
         {
            if(response.code == 200)
            {
               formNewsletter.html('<div class="alert alert-info" role="alert">'+response.data+'</div>');
            }
            else formNewsletter.find('.alert-danger').html(response.msg).css('display','block');
         }
      },
      error: function(p1,p2,p3){
         alert("There has been an error signing you up");
      }
   });
   
});

$('.syllabus-download').submit(function(event){
   
   event.preventDefault();
   
   var formSyllabus = $(this);
   var button = formSyllabus.find('button');
   var emailField = formSyllabus.find('input[type=email]');
   var firstNameField = formSyllabus.find('input[type=text]');
   var locationField = formSyllabus.find('.locations');
   var location = locationField.val();
   var email = emailField.val();
   var firstName = firstNameField.val();
   
   if(email == '' || firstName =='')
   {
      formSyllabus.find('.alert-danger').html('We need your email and first name').css('display','block');
   }
   else if(location=='' || location=='select')
   {
      formSyllabus.find('.alert-danger').html('Please select a Location').css('display','block');
   }
   else{
      formSyllabus.find('.alert-danger').html('').css('display','none');
      button.attr("disabled", "disabled");
      button.html("Loading...");
      $.ajax({
         url: WPAS_APP.ajax_url,
         dataType: 'JSON',
         method: 'POST',
         data: {
            action: 'download_syllabus',
            template: (typeof WPAS_APP.template == 'string') ? WPAS_APP.template.replace('single-','') : 'none',
            url: WPAS_APP.url,
            utm_location: location,
            email: email,
            first_name: firstName
         },
         success: function(response){
            button.attr("disabled", "false");
            button.html("Download");
            if(response)
            {
               if(response.code == 200)
               {
                  formSyllabus.html('<div class="alert alert-info" role="alert">'+response.data+'</div>');
                  setTimeout(function(){
                     $('#syllabusModal').modal('hide');
                  },2000)
               }
               else formSyllabus.find('.alert-danger').html(response.msg).css('display','block');
            }
         },
         error: function(p1,p2,p3){
            button.attr("disabled", "false");
            button.html("Download");
            alert("There has been an error signing you up");
         }
      });
   } 
   
});

$('.more-info-signup').submit(function(event){
   
   event.preventDefault();
   
   var formSyllabus = $(this);
   var emailField = formSyllabus.find('input[type=email]');
   var firstNameField = formSyllabus.find('input[type=text]');
   var email = emailField.val();
   var firstName = firstNameField.val();
   
   if(email == '' || firstName =='')
   {
      formSyllabus.find('.alert-danger').html('We need your email and first name').css('display','block');
   }
   else{
      formSyllabus.find('.alert-danger').html('').css('display','none');
      $.ajax({
      url: '/wp-json/4g/v1/apply/request_info',
      dataType: 'JSON',
      method: 'POST',
      data: {
         url: WPAS_APP.url,
         email: email,
         first_name: firstName
      },
      success: function(response){
         if(response)
         {
            if(response.code == 200) formSyllabus.html('<div class="alert alert-info" role="alert">'+response.data+'</div>');
            else formSyllabus.find('.alert-danger').html(response.msg).css('display','block');
         }
      },
      error: function(p1,p2,p3){
         alert("There has been an error signing you up");
      }
   });
   } 
   
});

(function loadAlerts(){
   var dismissedAlerts = localStorage.getItem('dismissed_alerts');
   
   if(dismissedAlerts) dismissedAlerts = dismissedAlerts.split(",");
   else dismissedAlerts = [];
   
   var allAlerts = document.querySelectorAll('.alert-dismissible');
   allAlerts.forEach(function(a){
      if(dismissedAlerts.indexOf(a.id) == -1){
         var alertToDismiss = document.querySelector('#'+a.id);
         alertToDismiss.style.display = "block";
      }
   });
   var closeAlertButtons = document.querySelectorAll('button[data-dismiss=alert]');
   closeAlertButtons.forEach(function(btn){
      btn.addEventListener("click", function(){
      	console.log(this.parentNode);
         if(typeof this.parentNode.id == 'undefined') 
            console.error('You need to specify an id for all the dismisable alerts');
      	dismissedAlerts.push(this.parentNode.id);
      	localStorage.setItem('dismissed_alerts',dismissedAlerts.join(','));
      	this.parentNode.style.display = "none";
      });
   });
})();

$(document).ready(function() {
   $.ajax({
      url: WPAS_APP.ajax_url,
      dataType: 'JSON',
      method: 'POST',
      data: {
         action: 'get_upcoming_event'
      },
      success: function(response){
         if(response)
         {
            if(response.code == 200)
            {
               if(response.data) promptUpcomingEvent(response.data);
            }
         }
      },
      error: function(p1,p2,p3){
         console.log("Error getting the upcoming event: "+p3);
      }
   });
   $.ajax({
      url: WPAS_APP.ajax_url,
      dataType: 'JSON',
      method: 'POST',
      data: {
         action: 'get_upcoming_event',
         type: 'intro_to_coding'
      },
      success: function(response){
         if(response)
         {
            if(response.code == 200)
            {
               if(response.data) fillUpcomingIntroToCoding(response.data);
            }
         }
      },
      error: function(p1,p2,p3){
         console.log("Error getting the upcoming event: "+p3);
      }
   });
   
   //load locations
   $.ajax({
      url: '/wp-json/4g/v1/locations?lang='+WPAS_APP.lang,
      dataType: 'JSON',
      method: 'GET',
      success: function(locations){
         if(locations)
         {
            $('#syllabusModal .locations, .syllabus-download .locations').html(['<option value="select">Select a location</option>'].concat(locations.map(function(l){
               return '<option value="'+l['ac_location_slug']+'">'+l['post_title']+'</option>';
            })).join(''));
            
            //mark default location
            if(typeof WPAS_APP !== 'undefined'){
               if(typeof WPAS_APP.city_slug !== 'undefined' && WPAS_APP.city_slug !== '') console.log("Ignoring user location because he specified a different one");
               else if(typeof WPAS_APP.latitude !== 'undefined' && WPAS_APP.latitude !== ''){
                  const closest = closestLocation({ latitude: WPAS_APP.latitude, longitude: WPAS_APP.longitude }, locations);
                  $('.cities.dropdown-selector button span').html(closest.post_title);
               }
            }
         }
      },
      error: function(p1,p2,p3){
         console.log("Error getting the academy locations "+p3);
      }
   });
   
   setupPriceCalculator();
   
   $(".dropdown-toggle").click(function(e){
     $(this).find('.dropdown-menu').toggleClass("show");
   });
   
   var masterWhite = document.querySelector('.masthead-white');
   if(typeof masterWhite != 'undefined' && masterWhite){
      var navbar = document.querySelector('.navbar'); 
      navbar.classList.add('inverted');
   } 
   
});

function setupPriceCalculator(){
   
   var PriceCalculator = __webpack_require__(8).default;
   const sliders = $('.pricing-slider');
   
   if(sliders.length === 0) console.log('There is no slider to load');
   else{
      $.ajax({
         url: '/wp-json/4g/v1/prices',
         dataType: 'JSON',
         method: 'GET',
         success: function(prices){
            if(prices && typeof prices.data != 'undefined')
            {
               prices = prices.data;
               sliders.each(function(index){
                  const slider = $(this);
                  const location = slider.data('location');
                  const course = slider.data('course');
                  if(typeof prices[course] !== 'undefined'){
                     if(typeof prices[course][location] === 'undefined') console.error('Price not found for '+course+' at '+location);
                     renderLocationPrices(slider, prices[course][location]);
                     PriceCalculator(sliders, prices[course][location]);
                  }
                  else console.error("Invalid course prices");
               });
            }
         },
         error: function(p1,p2,p3){
            console.log("Error getting the academy prices "+p3);
         }
      });
   }
}

function renderLocationPrices(slider, prices){
   const pricingComponent = slider.closest('.pricing-component');
   if(typeof prices === 'undefined'){
      let content = '<div class="col-md-12">';
         content += '<div class="card card-block card-primary card-inverse bg-yellow mb-3 p-4 text-center">';
            content += 'Prices have not been defined yet';
         content += '</div>';
      content += '</div>';
      pricingComponent.html(content);
   }
   else{
      pricingComponent.find('[data-concept="upfront"]').html(prices['upfront']);
      pricingComponent.find('[data-concept="monthly"]').html(prices['financed'][0]);
      
   }
}

function promptUpcomingEvent(event){
   
   if(localStorage.getItem('popState') != 'shown'){
      fillUpcomingEvent(event);
      $("#upcomingEvent").delay(2000).fadeIn();
      localStorage.setItem('popState','shown');
      $('#upcomingEvent').modal('show');
      $("#upcomingEvent").on("hidden.bs.modal", function () {
          // put your default event here
          $("#upcomingEvent").remove();
      });

   }
}

function fillUpcomingIntroToCoding(event){
   var modal = $('#freeCodingIntroModal');
   modal.find('.date').html(event.day+' '+event.month+' '+event.year);
   modal.find('.location').html(event.address);
   modal.find('.btn-danger').attr('href',event.url);
   
}
function fillUpcomingEvent(event){
   var modal = $('#upcomingEvent');
   modal.find('.day').html(event.day);
   modal.find('.month').html(event.month);
   modal.find('.year').html(event.year);
   
   modal.find('.event-title').html(event.name);
   modal.find('.event-details').html('<span class="imoon icon-location"></span>' + event.address);//3:30pm - at Starthub, Downtown Miami
   
   
   var maxLength = 350; // maximum number of characters to extract
   var trimmedString = event.description.substr(0, maxLength);//trim the string to the maximum length
   trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(".")));//re-trim if we are in the middle of a word
   modal.find('.event-description').html(trimmedString+'.');
   
   modal.find('.btn-danger').attr('href',event.url);
   
}

function closestLocation(targetLocation, locationData) {
    function vectorDistance(dx, dy) {
        return Math.sqrt(dx * dx + dy * dy);
    }

    function locationDistance(location1, location2) {
        var dx = location1.latitude - location2.latitude,
            dy = location1.longitude - location2.longitude;

        return vectorDistance(dx, dy);
    }

    return locationData.reduce(function(prev, curr) {
        var prevDistance = locationDistance(targetLocation , prev),
            currDistance = locationDistance(targetLocation , curr);
        return (prevDistance < currDistance) ? prev : curr;
    });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function onPageView(urlContains, callback){
    //Page view = apply-thank-you
    if (document.location.pathname.indexOf(urlContains) > -1) {
        //Code goes here
        callback();
    }  
}
function triggerTagManagerEvent(eventName){
    if(typeof dataLayer != 'undefined'){
        dataLayer.push({'event': eventName});
        console.log('Event successfully triggered: '+eventName);
    }
    else console.log('Event not being sent to TagManager: '+eventName);
}
function saveDataVariable(index, value){
    if(typeof dataLayer != 'undefined') dataLayer.push({index: value});
    else console.log('Imposible to write '+index+' on dataLayer');
    
    
    if(typeof WPAS_APP == 'undefined') WPAS_APP = {};
    if(typeof WPAS_APP.dataLayer == 'undefined') WPAS_APP.dataLayer = {};
    WPAS_APP.dataLayer[index] = value;
}
function ac_event(eventKey, eventName, userEmail){

  // what we do here, is log a successful event to the console
  // or catch any errors we have
  var xhttp = new XMLHttpRequest();  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Recorded halfway scroll event");
      console.log(this.responseText);
    } else {
      console.log(this.responseText);
    }
  };

  // your ActiveCampaign id. You can get this from your AC settings 
  var actid = "db15a3264fb2abf19996fa48873039757d534544"; 

  var visit = {
    email: userEmail // the user's email address
  };

  // get the url of the page and send it as event data
  var eventData = window.location.href;

  // build the eventString based on the variables you just edited above ☝
  var eventString = "actid=" + actid 
                    + "&key=" + eventKey 
                    + "&event=" + eventName 
                    + "&visit=" + encodeURIComponent(visit) 
                    + "&eventdata" + eventData;

  // send the event to the ActiveCampaign API with our event values
  xhttp.open("POST", "https://trackcmp.net/event", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  if(eventKey!='' && eventName!='' && userEmail!='') xhttp.send(eventString);
  else{
      if(eventKey=='') console.log('Invalid eventKey',eventKey);
      if(eventName=='') console.log('Invalid eventName',eventName);
      if(userEmail=='') console.log('Invalid userEmail',userEmail);
  }
}

/**
 * Tagmanger events
 **/
$('.syllabus-download').submit(function(event){ 
    
    var emailInput = $(event.target).find('input[type=email]');
    if(emailInput.length>0) saveDataVariable('userEmail',emailInput[0].value);
    
    triggerTagManagerEvent('syllabus_download'); 
});
$('.newsletter-signup').submit(function(event){ 
    
    var emailInput = $(event.target).find('input[type=email]');
    if(emailInput.length>0) saveDataVariable('userEmail',emailInput[0].value);
    
    triggerTagManagerEvent('newsletter_signup'); 
});
$('.apply-btn').click(function(event){ triggerTagManagerEvent('application_rendered'); });
onPageView("/apply-thank-you",function(){
    //Code goes here
    triggerTagManagerEvent('student_application'); 
});
$('#financing_guide_download').click(function(event){ 
    event.preventDefault();
    triggerTagManagerEvent('financing_guide_download'); 
    window.location.href = event.target.href;
    return false;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {


/* Copyright (C) 2013 Justin Windle, http://soulwire.co.uk */

(function ( root, factory ) {

  if ( true ) {

    // CommonJS like
    module.exports = factory(root, root.document);

  } else if ( typeof define === 'function' && define.amd ) {

    // AMD
    define( function() { return factory( root, root.document ); });

  } else {

    // Browser global
    root.Sketch = factory( root, root.document );
  }

}( typeof window !== "undefined" ? window : this, function ( window, document ) {


  "use strict";

  /*
  ----------------------------------------------------------------------

    Config

  ----------------------------------------------------------------------
  */

  var MATH_PROPS = 'E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min'.split( ' ' );
  var HAS_SKETCH = '__hasSketch';
  var M = Math;

  var CANVAS = 'canvas';
  var WEBGL = 'webgl';
  var DOM = 'dom';

  var doc = document;
  var win = window;

  var instances = [];

  var defaults = {

    fullscreen: true,
    autostart: true,
    autoclear: true,
    autopause: true,
    container: doc.body,
    interval: 1,
    globals: true,
    retina: false,
    type: CANVAS
  };

  var keyMap = {

     8: 'BACKSPACE',
     9: 'TAB',
    13: 'ENTER',
    16: 'SHIFT',
    27: 'ESCAPE',
    32: 'SPACE',
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN'
  };

  /*
  ----------------------------------------------------------------------

    Utilities

  ----------------------------------------------------------------------
  */

  function isArray( object ) {

    return Object.prototype.toString.call( object ) == '[object Array]';
  }

  function isFunction( object ) {

    return typeof object == 'function';
  }

  function isNumber( object ) {

    return typeof object == 'number';
  }

  function isString( object ) {

    return typeof object == 'string';
  }

  function keyName( code ) {

    return keyMap[ code ] || String.fromCharCode( code );
  }

  function extend( target, source, overwrite ) {

    for ( var key in source )

      if ( overwrite || !( key in target ) )

        target[ key ] = source[ key ];

    return target;
  }

  function proxy( method, context ) {

    return function() {

      method.apply( context, arguments );
    };
  }

  function clone( target ) {

    var object = {};

    for ( var key in target ) {
      
      if ( key === 'webkitMovementX' || key === 'webkitMovementY' )
        continue;

      if ( isFunction( target[ key ] ) )

        object[ key ] = proxy( target[ key ], target );

      else

        object[ key ] = target[ key ];
    }

    return object;
  }

  /*
  ----------------------------------------------------------------------

    Constructor

  ----------------------------------------------------------------------
  */

  function constructor( context ) {

    var request, handler, target, parent, bounds, index, suffix, clock, node, copy, type, key, val, min, max, w, h;

    var counter = 0;
    var touches = [];
    var resized = false;
    var setup = false;
    var ratio = win.devicePixelRatio || 1;
    var isDiv = context.type == DOM;
    var is2D = context.type == CANVAS;

    var mouse = {
      x:  0.0, y:  0.0,
      ox: 0.0, oy: 0.0,
      dx: 0.0, dy: 0.0
    };

    var eventMap = [

      context.eventTarget || context.element,

        pointer, 'mousedown', 'touchstart',
        pointer, 'mousemove', 'touchmove',
        pointer, 'mouseup', 'touchend',
        pointer, 'click',
        pointer, 'mouseout',
        pointer, 'mouseover',

      doc,

        keypress, 'keydown', 'keyup',

      win,

        active, 'focus', 'blur',
        resize, 'resize'
    ];

    var keys = {}; for ( key in keyMap ) keys[ keyMap[ key ] ] = false;

    function trigger( method ) {

      if ( isFunction( method ) )

        method.apply( context, [].splice.call( arguments, 1 ) );
    }

    function bind( on ) {

      for ( index = 0; index < eventMap.length; index++ ) {

        node = eventMap[ index ];

        if ( isString( node ) )

          target[ ( on ? 'add' : 'remove' ) + 'EventListener' ].call( target, node, handler, false );

        else if ( isFunction( node ) )

          handler = node;

        else target = node;
      }
    }

    function update() {

      cAF( request );
      request = rAF( update );

      if ( !setup ) {

        trigger( context.setup );
        setup = isFunction( context.setup );
      }

      if ( !resized ) {
        trigger( context.resize );
        resized = isFunction( context.resize );
      }

      if ( context.running && !counter ) {

        context.dt = ( clock = +new Date() ) - context.now;
        context.millis += context.dt;
        context.now = clock;

        trigger( context.update );

        // Pre draw

        if ( is2D ) {

          if ( context.retina ) {

            context.save();
            
            if (context.autoclear) {
              context.scale( ratio, ratio );
            }
          }

          if ( context.autoclear )

            context.clear();
        }

        // Draw

        trigger( context.draw );

        // Post draw

        if ( is2D && context.retina )

          context.restore();
      }

      counter = ++counter % context.interval;
    }

    function resize() {

      target = isDiv ? context.style : context.canvas;
      suffix = isDiv ? 'px' : '';

      w = context.width;
      h = context.height;

      if ( context.fullscreen ) {

        h = context.height = win.innerHeight;
        w = context.width = win.innerWidth;
      }

      if ( context.retina && is2D && ratio ) {

        target.style.height = h + 'px';
        target.style.width = w + 'px';

        w *= ratio;
        h *= ratio;
      }

      if ( target.height !== h )

        target.height = h + suffix;

      if ( target.width !== w )

        target.width = w + suffix;

      if ( is2D && !context.autoclear && context.retina )

        context.scale( ratio, ratio );

      if ( setup ) trigger( context.resize );
    }

    function align( touch, target ) {

      bounds = target.getBoundingClientRect();

      touch.x = touch.pageX - bounds.left - (win.scrollX || win.pageXOffset);
      touch.y = touch.pageY - bounds.top - (win.scrollY || win.pageYOffset);

      return touch;
    }

    function augment( touch, target ) {

      align( touch, context.element );

      target = target || {};

      target.ox = target.x || touch.x;
      target.oy = target.y || touch.y;

      target.x = touch.x;
      target.y = touch.y;

      target.dx = target.x - target.ox;
      target.dy = target.y - target.oy;

      return target;
    }

    function process( event ) {

      event.preventDefault();

      copy = clone( event );
      copy.originalEvent = event;

      if ( copy.touches ) {

        touches.length = copy.touches.length;

        for ( index = 0; index < copy.touches.length; index++ )

          touches[ index ] = augment( copy.touches[ index ], touches[ index ] );

      } else {

        touches.length = 0;
        touches[0] = augment( copy, mouse );
      }

      extend( mouse, touches[0], true );

      return copy;
    }

    function pointer( event ) {

      event = process( event );

      min = ( max = eventMap.indexOf( type = event.type ) ) - 1;

      context.dragging =

        /down|start/.test( type ) ? true :

        /up|end/.test( type ) ? false :

        context.dragging;

      while( min )

        isString( eventMap[ min ] ) ?

          trigger( context[ eventMap[ min-- ] ], event ) :

        isString( eventMap[ max ] ) ?

          trigger( context[ eventMap[ max++ ] ], event ) :

        min = 0;
    }

    function keypress( event ) {

      key = event.keyCode;
      val = event.type == 'keyup';
      keys[ key ] = keys[ keyName( key ) ] = !val;

      trigger( context[ event.type ], event );
    }

    function active( event ) {

      if ( context.autopause )

        ( event.type == 'blur' ? stop : start )();

      trigger( context[ event.type ], event );
    }

    // Public API

    function start() {

      context.now = +new Date();
      context.running = true;
    }

    function stop() {

      context.running = false;
    }

    function toggle() {

      ( context.running ? stop : start )();
    }

    function clear() {

      if ( is2D )

        context.clearRect( 0, 0, context.width * ratio, context.height * ratio );
    }

    function destroy() {

      parent = context.element.parentNode;
      index = instances.indexOf( context );

      if ( parent ) parent.removeChild( context.element );
      if ( ~index ) instances.splice( index, 1 );

      bind( false );
      stop();
    }

    extend( context, {

      touches: touches,
      mouse: mouse,
      keys: keys,

      dragging: false,
      running: false,
      millis: 0,
      now: NaN,
      dt: NaN,

      destroy: destroy,
      toggle: toggle,
      clear: clear,
      start: start,
      stop: stop
    });

    instances.push( context );

    return ( context.autostart && start(), bind( true ), resize(), update(), context );
  }

  /*
  ----------------------------------------------------------------------

    Global API

  ----------------------------------------------------------------------
  */

  var element, context, Sketch = {

    CANVAS: CANVAS,
    WEB_GL: WEBGL,
    WEBGL: WEBGL,
    DOM: DOM,

    instances: instances,

    install: function( context ) {

      if ( !context[ HAS_SKETCH ] ) {

        for ( var i = 0; i < MATH_PROPS.length; i++ )

          context[ MATH_PROPS[i] ] = M[ MATH_PROPS[i] ];

        extend( context, {

          TWO_PI: M.PI * 2,
          HALF_PI: M.PI / 2,
          QUARTER_PI: M.PI / 4,

          random: function( min, max ) {

            if ( isArray( min ) )

              return min[ ~~( M.random() * min.length ) ];

            if ( !isNumber( max ) )

              max = min || 1, min = 0;

            return min + M.random() * ( max - min );
          },

          lerp: function( min, max, amount ) {

            return min + amount * ( max - min );
          },

          map: function( num, minA, maxA, minB, maxB ) {

            return ( num - minA ) / ( maxA - minA ) * ( maxB - minB ) + minB;
          }
        });

        context[ HAS_SKETCH ] = true;
      }
    },

    create: function( options ) {

      options = extend( options || {}, defaults );

      if ( options.globals ) Sketch.install( self );

      element = options.element = options.element || doc.createElement( options.type === DOM ? 'div' : 'canvas' );

      context = options.context = options.context || (function() {

        switch( options.type ) {

          case CANVAS:

            return element.getContext( '2d', options );

          case WEBGL:

            return element.getContext( 'webgl', options ) || element.getContext( 'experimental-webgl', options );

          case DOM:

            return element.canvas = element;
        }

      })();

      ( options.container || doc.body ).appendChild( element );

      return Sketch.augment( context, options );
    },

    augment: function( context, options ) {

      options = extend( options || {}, defaults );

      options.element = context.canvas || context;
      options.element.className += ' sketch';

      extend( context, options, true );

      return constructor( context );
    }
  };

  /*
  ----------------------------------------------------------------------

    Shims

  ----------------------------------------------------------------------
  */

  var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
  var scope = self;
  var then = 0;

  var a = 'AnimationFrame';
  var b = 'request' + a;
  var c = 'cancel' + a;

  var rAF = scope[ b ];
  var cAF = scope[ c ];

  for ( var i = 0; i < vendors.length && !rAF; i++ ) {

    rAF = scope[ vendors[ i ] + 'Request' + a ];
    cAF = scope[ vendors[ i ] + 'Cancel' + a ];
  }

  scope[ b ] = rAF = rAF || function( callback ) {

    var now = +new Date();
    var dt = M.max( 0, 16 - ( now - then ) );
    var id = setTimeout( function() {
      callback( now + dt );
    }, dt );

    then = now + dt;
    return id;
  };

  scope[ c ] = cAF = cAF || function( id ) {
    clearTimeout( id );
  };

  /*
  ----------------------------------------------------------------------

    Output

  ----------------------------------------------------------------------
  */

  return Sketch;

}));

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["default"] = PricingCalculator;
function PricingCalculator(sliders, messages){
  var Slider = __webpack_require__(13);
  messages = messages['financed'];
  sliders.each(function(index){
    const htmlSlider = this;
    const pricingComponent = $(this).closest('.pricing-component');
    var mySlider = new Slider(htmlSlider);
    mySlider.on('slideStop', function(clickedIndex){
      const key = Object.keys(messages)[clickedIndex];
      if(typeof messages[key] != 'undefined'){
        if(typeof(messages[key].monthly) == 'string') pricingComponent.find('.price-label').html(messages[key].monthly);
        if(typeof(messages[key].message) !== 'undefined') pricingComponent.find('.financing-details').html(messages[key].message[WPAS_APP.lang]);
        if(typeof(messages[key].logo) == 'string'){
          var logoElm = pricingComponent.find('.financing-logo');
          logoElm.attr('src',messages[key].logo);
        }
      }
  		
  		var paymentPlanCard = pricingComponent.find('.payment-plan');
  		paymentPlanCard.addClass("glow");
  		window.setTimeout(function(){
  			paymentPlanCard.removeClass("glow");
  		}, 200);
      
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ })

},[153]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL2ZpcmV3b3Jrcy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cG9ncmFwaHkvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwb2dyYXBoeS10aGVtZS1kb2VsZ2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXktcGVyY2VudGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwb2dyYXBoeS1icmVha3BvaW50LWNvbnN0YW50cy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC90b29sdGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3Jlc3BvbnNpdmUtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvc2tldGNoLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLEVBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RDs7QUFFQTtBQUNBOztBQUVBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtDQUFrQyxRQUFROztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixzR0FBc0c7O0FBRXJJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7Ozs7Ozs7QUN4dUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsNEJBQTRCLG1CQUFPLENBQUMsQ0FBUSxHQUFHLG1CQUFPLENBQUMsQ0FBVztBQUNoSTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxLQUFLO0FBQ0wsR0FBRztBQUNILEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUGFydGljbGVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBTa2V0Y2ggPSByZXF1aXJlKFwiLi9za2V0Y2hcIik7XG4gIFxuZnVuY3Rpb24gUGFydGljbGUoIHgsIHksIHJhZGl1cyApIHtcblx0dGhpcy5pbml0KCB4LCB5LCByYWRpdXMgKTtcbn1cblBhcnRpY2xlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICBcdGluaXQ6IGZ1bmN0aW9uKCB4LCB5LCByYWRpdXMgKSB7XG4gICAgXG4gICAgXHRcdHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIFxuICAgIFx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDtcbiAgICBcdFx0dGhpcy53YW5kZXIgPSAwLjE1O1xuICAgIFx0XHR0aGlzLnRoZXRhID0gcmFuZG9tKCBUV09fUEkgKTtcbiAgICBcdFx0dGhpcy5kcmFnID0gMC45MjtcbiAgICBcdFx0dGhpcy5jb2xvciA9ICcjZmZmJztcbiAgICBcbiAgICBcdFx0dGhpcy54ID0geCB8fCAwLjA7XG4gICAgXHRcdHRoaXMueSA9IHkgfHwgMC4wO1xuICAgIFxuICAgIFx0XHR0aGlzLnZ4ID0gMC4wO1xuICAgIFx0XHR0aGlzLnZ5ID0gMC4wO1xuICAgIFx0fSxcbiAgICBcbiAgICBcdG1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIFx0XHR0aGlzLnggKz0gdGhpcy52eDtcbiAgICBcdFx0dGhpcy55ICs9IHRoaXMudnk7XG4gICAgXG4gICAgXHRcdHRoaXMudnggKj0gdGhpcy5kcmFnO1xuICAgIFx0XHR0aGlzLnZ5ICo9IHRoaXMuZHJhZztcbiAgICBcbiAgICBcdFx0dGhpcy50aGV0YSArPSByYW5kb20oIC0wLjUsIDAuNSApICogdGhpcy53YW5kZXI7XG4gICAgXHRcdHRoaXMudnggKz0gc2luKCB0aGlzLnRoZXRhICkgKiAwLjE7XG4gICAgXHRcdHRoaXMudnkgKz0gY29zKCB0aGlzLnRoZXRhICkgKiAwLjE7XG4gICAgXG4gICAgXHRcdHRoaXMucmFkaXVzICo9IDAuOTY7XG4gICAgXHRcdHRoaXMuYWxpdmUgPSB0aGlzLnJhZGl1cyA+IDAuNTtcbiAgICBcdH0sXG4gICAgXG4gICAgXHRkcmF3OiBmdW5jdGlvbiggY3R4ICkge1xuICAgIFxuICAgIFx0XHRjdHguYmVnaW5QYXRoKCk7XG4gICAgXHRcdGN0eC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgVFdPX1BJICk7XG4gICAgXHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIFx0XHRjdHguZmlsbCgpO1xuICAgIFx0fVxuICAgIH07XG4gIFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb250YWluZXIpe1xuICB2YXIgTUFYX1BBUlRJQ0xFUyA9IDI4MDtcbiAgdmFyIENPTE9VUlMgPSBbICcjNjlEMkU3JywgJyNBN0RCRDgnLCAnI0UwRTRDQycsICcjRjM4NjMwJywgJyNGQTY5MDAnLCAnI0ZGNEU1MCcsICcjRjlENDIzJyBdO1xuICB2YXIgcGFydGljbGVzID0gW107XG4gIHZhciBwb29sID0gW107XG4gIFxuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgdmFyIGZpcmV3b3Jrc1NrZXRjaCA9IFNrZXRjaC5jcmVhdGUoeyBjb250YWluZXI6IGNvbnRhaW5lciB9KTtcbiAgZmlyZXdvcmtzU2tldGNoLnNldHVwID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdC8vIFNldCBvZmYgc29tZSBpbml0aWFsIHBhcnRpY2xlcy5cbiAgXHR2YXIgaSwgeCwgeTtcbiAgXG4gIFx0Zm9yICggaSA9IDA7IGkgPCAyMDsgaSsrICkge1xuICBcdFx0eCA9ICggZmlyZXdvcmtzU2tldGNoLndpZHRoICogMC41ICkgKyByYW5kb20oIC0xMDAsIDEwMCApO1xuICBcdFx0eSA9ICggZmlyZXdvcmtzU2tldGNoLmhlaWdodCAqIDAuNSApICsgcmFuZG9tKCAtMTAwLCAxMDAgKTtcbiAgXHRcdGZpcmV3b3Jrc1NrZXRjaC5zcGF3biggeCwgeSApO1xuICBcdH1cbiAgfTtcbiAgZmlyZXdvcmtzU2tldGNoLnNwYXduID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIFxuICBcdGlmICggcGFydGljbGVzLmxlbmd0aCA+PSBNQVhfUEFSVElDTEVTIClcbiAgXHRcdHBvb2wucHVzaCggcGFydGljbGVzLnNoaWZ0KCkgKTtcbiAgXG4gIFx0dmFyIHBhcnRpY2xlID0gcG9vbC5sZW5ndGggPyBwb29sLnBvcCgpIDogbmV3IFBhcnRpY2xlKCk7XG4gIFx0cGFydGljbGUuaW5pdCggeCwgeSwgcmFuZG9tKCA1LCA0MCApICk7XG4gIFxuICBcdHBhcnRpY2xlLndhbmRlciA9IHJhbmRvbSggMC41LCAyLjAgKTtcbiAgXHRwYXJ0aWNsZS5jb2xvciA9IHJhbmRvbSggQ09MT1VSUyApO1xuICBcdHBhcnRpY2xlLmRyYWcgPSByYW5kb20oIDAuOSwgMC45OSApO1xuICBcbiAgXHR2YXIgdGhldGEgPSByYW5kb20oIFRXT19QSSApO1xuICBcdHZhciBmb3JjZSA9IHJhbmRvbSggMiwgOCApO1xuICBcbiAgXHRwYXJ0aWNsZS52eCA9IHNpbiggdGhldGEgKSAqIGZvcmNlO1xuICBcdHBhcnRpY2xlLnZ5ID0gY29zKCB0aGV0YSApICogZm9yY2U7XG4gIFxuICBcdHBhcnRpY2xlcy5wdXNoKCBwYXJ0aWNsZSApO1xuICB9XG4gIGZpcmV3b3Jrc1NrZXRjaC51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0dmFyIGksIHBhcnRpY2xlO1xuICBcbiAgXHRmb3IgKCBpID0gcGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuICBcbiAgXHRcdHBhcnRpY2xlID0gcGFydGljbGVzW2ldO1xuICBcbiAgXHRcdGlmICggcGFydGljbGUuYWxpdmUgKSBwYXJ0aWNsZS5tb3ZlKCk7XG4gIFx0XHRlbHNlIHBvb2wucHVzaCggcGFydGljbGVzLnNwbGljZSggaSwgMSApWzBdICk7XG4gIFx0fVxuICB9O1xuICBmaXJld29ya3NTa2V0Y2guZHJhdyA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHRmaXJld29ya3NTa2V0Y2guZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uICA9ICdsaWdodGVyJztcbiAgXHRcbiAgXHRmb3IgKCB2YXIgaSA9IHBhcnRpY2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcbiAgXHRcdHBhcnRpY2xlc1tpXS5kcmF3KCBmaXJld29ya3NTa2V0Y2ggKTtcbiAgXHR9XG4gIH07XG4gIGZpcmV3b3Jrc1NrZXRjaC5tb3VzZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIFxuICAgICAgXHR2YXIgcGFydGljbGUsIHRoZXRhLCBmb3JjZSwgdG91Y2gsIG1heCwgaSwgaiwgbjtcbiAgICAgIFxuICAgICAgXHRmb3IgKCBpID0gMCwgbiA9IGZpcmV3b3Jrc1NrZXRjaC50b3VjaGVzLmxlbmd0aDsgaSA8IG47IGkrKyApIHtcbiAgICAgIFxuICAgICAgXHRcdHRvdWNoID0gZmlyZXdvcmtzU2tldGNoLnRvdWNoZXNbaV0sIG1heCA9IHJhbmRvbSggMSwgNCApO1xuICAgICAgXHRcdGZvciAoIGogPSAwOyBqIDwgbWF4OyBqKysgKSBmaXJld29ya3NTa2V0Y2guc3Bhd24oIHRvdWNoLngsIHRvdWNoLnkgKTtcbiAgICAgIFx0fVxuICAgICAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvZmlyZXdvcmtzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qIGdsb2JhbCBXUEFTX0FQUCwgJCAqL1xucmVxdWlyZSgnLi4vc3R5bGVzL2luZGV4LnNjc3MnKTtcblxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAndHlwb2dyYXBoeSc7XG5pbXBvcnQgZG9lbGdlclRoZW1lIGZyb20gJ3R5cG9ncmFwaHktdGhlbWUtZG9lbGdlcic7XG5jb25zdCB0eXBvZ3JhcGh5ID0gbmV3IFR5cG9ncmFwaHkoZG9lbGdlclRoZW1lKTtcbnR5cG9ncmFwaHkuaW5qZWN0U3R5bGVzKCk7XG5cbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdXRpbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90b29sdGlwJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcbmltcG9ydCAnLi9wYWdlcy9hbGwuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzJztcbmltcG9ydCB7TWFrZVN0aWNreX0gZnJvbSAnLi9jb21tb24vc3RpY2t5LXRvZ2dsZS5qcyc7XG5pbXBvcnQge1NtYXJ0RmlsdGVyc30gZnJvbSAnLi9jb21tb24vc21hcnQtZmlsdGVycy5qcyc7XG5pbXBvcnQgbG9hZFZpZGVvIGZyb20gXCIuL2NvbW1vbi9yZXNwb25zaXZlLXZpZGVvXCI7XG5cbmNvbnNvbGUubG9nKFdQQVNfQVBQKTtcbldQQVNfQVBQLmxvYWRWaWRlbyA9IGxvYWRWaWRlbztcbi8qKlxuICogSE9NRVxuKiovXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdob21lJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdpbmljaW8nKXtcbiAgXG4gIC8vbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL2hvbWUtZGFyay5tcDQnKTtcbiAgalF1ZXJ5KCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICAkKCcudmFsdWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICBcdHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XG4gIFx0JCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3dpZHRoJywgdGV4dCk7XG4gIH0pO1xuICAkKCcuYmxvY2snKS50b29sdGlwKCk7XG4gIFxuICB2YXIgZmlyZXdvcmtzID0gcmVxdWlyZSgnLi9saWIvZmlyZXdvcmtzLmpzJyk7XG4gIHZhciBjYW52YXNCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubWFzdGhlYWQnICk7XG4gIGZpcmV3b3JrcyhjYW52YXNCZyk7XG59XG5cbi8qKlxuICogVEhFIFBST0dSQU1cbioqL1xuXG5pZihbJ3BhZ2UtdGhlLXByb2dyYW0nLCdzaW5nbGUtZnVsbC1zdGFjay1wYXJ0LXRpbWUnLCdzaW5nbGUtZnVsbC1zdGFjaycsJ3NpbmdsZS13ZWItZGV2ZWxvcG1lbnQnLCdzaW5nbGUtY29kaW5nLWludHJvJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSE9IC0xKXtcbiAgXG4gIHZhciBiYXJCcmVha3BvaW50ID0gJCgnI2Jhci1icmVha3BvaW50Jyk7XG4gIGlmKCFiYXJCcmVha3BvaW50KSB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIGJyZWF0aGVwb2ludCBlc3RhYmxpc2hlZCBmb3IgdGhlIGJhcicpO1xuICBcbiAgdmFyIG1heFN0aWNrUG9zaXRpb24gPSBiYXJCcmVha3BvaW50Lm9mZnNldCgpLnRvcDtcbiAgTWFrZVN0aWNreS5pbml0KCdbZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl0nLCBtYXhTdGlja1Bvc2l0aW9uLCAyMCk7XG4gIFxuICAvL2FuaW1hdGlvbiBmb3IgdGhlIHByb2dyYW1cbiAgdmFyIFRoZVByb2dyYW0gPSByZXF1aXJlKCcuL3BhZ2VzL3Byb2dyYW0uanMnKS5kZWZhdWx0O1xuICBUaGVQcm9ncmFtLmluaXQoKTtcbiAgXG59XG5cblxuXG5cbi8qKlxuICogUFJJQ0lOR1xuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByaWNpbmcnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByZWNpbycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL3ByaWNpbmcubXA0Jyk7XG4gIFxuICB2YXIgZmlyZXdvcmtzID0gcmVxdWlyZSgnLi9saWIvZmlyZXdvcmtzLmpzJyk7XG4gIHZhciBjYW52YXNCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjYmctc2tldGNoJyApO1xuICBmaXJld29ya3MoY2FudmFzQmcpO1xuXG59XG5cbi8qKlxuICogQ0FMRU5EQVJcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdjYWxlbmRhcicgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAnY2FsZW5kYXJpbycpe1xuXG4gIFNtYXJ0RmlsdGVycy5pbml0KHtcbiAgICBsb2FkaW5nQW5pbWF0aW9uOiAnLmNvdXJzZXMgLmxvYWRpbmctYW5pbWF0aW9uJyxcbiAgICByZXN1bHRzQ29udGFpbmVyOiAnLmNvdXJzZXMgLmxpc3QtZ3JvdXAnLFxuICAgIGZpbHRlckRyb3Bkb3duOiAnLmRyb3Bkb3duLWZpbHRlciBhJyxcbiAgICBmaWx0ZXJzOiBbXG4gICAgICB7IGJ1dHRvbjogJyNsb2NhdGlvblNlbGVjdG9yJywgdXJsS2V5OiAnbCcsIG9wdGlvbnM6ICcubG9jYXRpb24tb3B0aW9uJyB9LFxuICAgICAgeyBidXR0b246ICcjbGFuZ1NlbGVjdG9yJywgdXJsS2V5OiAnbGFuZycsIG9wdGlvbnM6ICcubGFuZy1vcHRpb24nfSxcbiAgICAgIHsgYnV0dG9uOiAnI3R5cGVTZWxlY3RvcicsIHVybEtleTogJ3R5cGUnLCBvcHRpb25zOiAnLnR5cGUtb3B0aW9uJ31cbiAgICBdXG4gIH0pO1xuICBcbiAgTWFrZVN0aWNreS5pbml0KCdbZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl0nLCA0MDAwKTtcbiAgICBcbn1cblxuLyoqXG4gKiBMT0NBVElPTlxuKiovXG5cbmlmKFsnc2luZ2xlLWxvY2F0aW9uJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSAhPSAtMSl7XG4gIHJlcXVpcmUoJy4vcGFnZXMvbG9jYXRpb24uanMnKTtcbn1cblxuLyoqXG4gKiBQQVJUTkVSU1xuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3BhcnRuZXJzJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdzb2Npb3MnKXtcbiAgXG4gIGpRdWVyeSgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL29mZmljZS5tcDQnLHtvdmVybGF5OiAnYmxhY2snfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHQ9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscj1PYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO3ZhciBuLG8saT1mdW5jdGlvbigpe3RyeXtpZighT2JqZWN0LmFzc2lnbilyZXR1cm4hMTt2YXIgdD1uZXcgU3RyaW5nKFwiYWJjXCIpO2lmKHRbNV09XCJkZVwiLFwiNVwiPT09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModClbMF0pcmV0dXJuITE7Zm9yKHZhciBlPXt9LHI9MDtyPDEwO3IrKyllW1wiX1wiK1N0cmluZy5mcm9tQ2hhckNvZGUocildPXI7aWYoXCIwMTIzNDU2Nzg5XCIhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19KS5qb2luKFwiXCIpKXJldHVybiExO3ZhciBuPXt9O3JldHVyblwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe25bdF09dH0pLFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIj09PU9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sbikpLmpvaW4oXCJcIil9Y2F0Y2godCl7cmV0dXJuITF9fSgpP09iamVjdC5hc3NpZ246ZnVuY3Rpb24obixvKXtmb3IodmFyIGksYSx1PWZ1bmN0aW9uKHQpe2lmKG51bGw9PT10fHx2b2lkIDA9PT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gT2JqZWN0KHQpfShuKSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyl7Zm9yKHZhciBsIGluIGk9T2JqZWN0KGFyZ3VtZW50c1tjXSkpZS5jYWxsKGksbCkmJih1W2xdPWlbbF0pO2lmKHQpe2E9dChpKTtmb3IodmFyIGY9MDtmPGEubGVuZ3RoO2YrKylyLmNhbGwoaSxhW2ZdKSYmKHVbYVtmXV09aVthW2ZdXSl9fXJldHVybiB1fSxhPWZ1bmN0aW9uKHQsZSl7ZXx8KGU9WzAsXCJcIl0pLHQ9U3RyaW5nKHQpO3ZhciByPXBhcnNlRmxvYXQodCwxMCk7cmV0dXJuIGVbMF09cixlWzFdPXQubWF0Y2goL1tcXGQuXFwtXFwrXSpcXHMqKC4qKS8pWzFdfHxcIlwiLGV9LHU9ZnVuY3Rpb24odCl7cmV0dXJuIGEodClbMF19LGM9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQmJih0PXQpLGZ1bmN0aW9uKGUscixuLG8pe251bGw9PW4mJihuPXQpLG51bGw9PW8mJihvPW4pO3ZhciBpPWEoZSlbMV07aWYoaT09PXIpcmV0dXJuIGU7dmFyIGM9dShlKTtpZihcInB4XCIhPT1pKWlmKFwiZW1cIj09PWkpYz11KGUpKnUobik7ZWxzZSBpZihcInJlbVwiPT09aSljPXUoZSkqdSh0KTtlbHNle2lmKFwiZXhcIiE9PWkpcmV0dXJuIGU7Yz11KGUpKnUobikqMn12YXIgbD1jO2lmKFwicHhcIiE9PXIpaWYoXCJlbVwiPT09cilsPWMvdShvKTtlbHNlIGlmKFwicmVtXCI9PT1yKWw9Yy91KHQpO2Vsc2V7aWYoXCJleFwiIT09cilyZXR1cm4gZTtsPWMvdShvKS8yfXJldHVybiBwYXJzZUZsb2F0KGwudG9GaXhlZCg1KSkrcn19LGw9YSxmPWZ1bmN0aW9uKHQpe3JldHVybiBsKHQpWzFdfSxzPWZ1bmN0aW9uKHQpe3JldHVybiBsKHQpWzBdfSxwPXtiYXNlRm9udFNpemU6XCIxNnB4XCIsYmFzZUxpbmVIZWlnaHQ6MS41LHJoeXRobVVuaXQ6XCJyZW1cIixkZWZhdWx0Umh5dGhtQm9yZGVyV2lkdGg6XCIxcHhcIixkZWZhdWx0Umh5dGhtQm9yZGVyU3R5bGU6XCJzb2xpZFwiLHJvdW5kVG9OZWFyZXN0SGFsZkxpbmU6ITAsbWluTGluZVBhZGRpbmc6XCIycHhcIn0sdj1mdW5jdGlvbih0LGUpe3ZhciByLG49YyhlLmJhc2VGb250U2l6ZSksbz1zKG4odCxcInB4XCIpKSxpPXMoZS5iYXNlTGluZUhlaWdodEluUHgpLGE9cyhuKGUubWluTGluZVBhZGRpbmcsXCJweFwiKSk7cmV0dXJuKHI9ZS5yb3VuZFRvTmVhcmVzdEhhbGZMaW5lP01hdGguY2VpbCgyKm8vaSkvMjpNYXRoLmNlaWwoby9pKSkqaS1vPDIqYSYmKHIrPWUucm91bmRUb05lYXJlc3RIYWxmTGluZT8uNToxKSxyfSxoPWZ1bmN0aW9uKHQpe3ZhciBlPWModC5iYXNlRm9udFNpemUpO3JldHVybiBmdW5jdGlvbihyLG4sbyl7bnVsbD09ciYmKHI9MSksbnVsbD09biYmKG49dC5iYXNlRm9udFNpemUpLG51bGw9PW8mJihvPTApO3ZhciBpPXIqcyh0LmJhc2VMaW5lSGVpZ2h0SW5QeCktbytcInB4XCIsYT1lKGksdC5yaHl0aG1Vbml0LG4pO3JldHVyblwicHhcIj09PWYoYSkmJihhPU1hdGguZmxvb3IocyhhKSkrZihhKSkscGFyc2VGbG9hdChzKGEpLnRvRml4ZWQoNSkpK2YoYSl9fSxkPVwiW29iamVjdCBOdW1iZXJdXCIsYj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO249ZnVuY3Rpb24odCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHR8fGZ1bmN0aW9uKHQpe3JldHVybiEhdCYmXCJvYmplY3RcIj09dHlwZW9mIHR9KHQpJiZiLmNhbGwodCk9PWR9LG89e1wibWlub3Igc2Vjb25kXCI6MTYvMTUsXCJtYWpvciBzZWNvbmRcIjo5LzgsXCJtaW5vciB0aGlyZFwiOjEuMixcIm1ham9yIHRoaXJkXCI6NC8zLFwiZGltaW5pc2hlZCBmb3VydGhcIjpNYXRoLnNxcnQoMiksXCJwZXJmZWN0IGZpZnRoXCI6MS41LFwibWlub3Igc2l4dGhcIjoxLjYsZ29sZGVuOjEuNjE4MDMzOTg4NzUscGhpOjEuNjE4MDMzOTg4NzUsXCJtYWpvciBzaXh0aFwiOjUvMyxcIm1pbm9yIHNldmVudGhcIjoxNi85LFwibWFqb3Igc2V2ZW50aFwiOjE1Lzgsb2N0YXZlOjIsXCJtYWpvciB0ZW50aFwiOjIuNSxcIm1ham9yIGVsZXZlbnRoXCI6OC8zLFwibWFqb3IgdHdlbGZ0aFwiOjMsXCJkb3VibGUgb2N0YXZlXCI6NH07ZnVuY3Rpb24gZyh0KXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdCh0KSkmJmlzRmluaXRlKHQpfXZhciB5PWZ1bmN0aW9uKHQsZSxyKXtpZih2b2lkIDA9PT1lJiYoZT0wKSx2b2lkIDA9PT1yJiYocj0hMSksXCJjb29sXCI9PT1lP2U9MjM3Olwic2xhdGVcIj09PWU/ZT0xMjI6XCJ3YXJtXCI9PT1lJiYoZT02OSksIWcoZSkpdGhyb3cgbmV3IEVycm9yKFwiSHVlIGlzIG5vdCBhIG51bWJlclwiKTtpZighZyh0KSl0aHJvdyBuZXcgRXJyb3IoXCJMaWdodG5lc3MgaXMgbm90IGEgbnVtYmVyXCIpO3Q+MTAwJiYodD0xMDApLHQ8MCYmKHQ9MCk7dmFyIG49MDtpZigwIT09ZSl7bj0xOS45Mjk3OCstLjM2NTE3NTkqdCsuMDAxNzM3MjE0Kk1hdGgucG93KHQsMil9dmFyIG89MDtyZXR1cm4gcj8obz10LzEwMCx0PVwiMTAwJSxcIik6KG89KDEwMC10KS8xMDAsdD1cIjAlLFwiKSxcImhzbGEoXCIrZStcIixcIituK1wiJSxcIit0K28rXCIpXCJ9LG09XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTtmdW5jdGlvbiBqKHQsZSl7cmV0dXJuIHQoZT17ZXhwb3J0czp7fX0sZS5leHBvcnRzKSxlLmV4cG9ydHN9dmFyIF89XCJvYmplY3RcIj09dHlwZW9mIG0mJm0mJm0uT2JqZWN0PT09T2JqZWN0JiZtLHc9XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLE89X3x8d3x8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLFM9Ty5TeW1ib2wseD1PYmplY3QucHJvdG90eXBlLHo9eC5oYXNPd25Qcm9wZXJ0eSxGPXgudG9TdHJpbmcsaz1TP1MudG9TdHJpbmdUYWc6dm9pZCAwO3ZhciBBPWZ1bmN0aW9uKHQpe3ZhciBlPXouY2FsbCh0LGspLHI9dFtrXTt0cnl7dFtrXT12b2lkIDA7dmFyIG49ITB9Y2F0Y2godCl7fXZhciBvPUYuY2FsbCh0KTtyZXR1cm4gbiYmKGU/dFtrXT1yOmRlbGV0ZSB0W2tdKSxvfSxMPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dmFyIFA9ZnVuY3Rpb24odCl7cmV0dXJuIEwuY2FsbCh0KX0sQj1cIltvYmplY3QgTnVsbF1cIixUPVwiW29iamVjdCBVbmRlZmluZWRdXCIsTT1TP1MudG9TdHJpbmdUYWc6dm9pZCAwO3ZhciBFPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P3ZvaWQgMD09PXQ/VDpCOk0mJk0gaW4gT2JqZWN0KHQpP0EodCk6UCh0KX07dmFyIEg9ZnVuY3Rpb24odCl7dmFyIGU9dHlwZW9mIHQ7cmV0dXJuIG51bGwhPXQmJihcIm9iamVjdFwiPT1lfHxcImZ1bmN0aW9uXCI9PWUpfSxOPVwiW29iamVjdCBBc3luY0Z1bmN0aW9uXVwiLFc9XCJbb2JqZWN0IEZ1bmN0aW9uXVwiLEk9XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiLEM9XCJbb2JqZWN0IFByb3h5XVwiO3ZhciBSLCQ9ZnVuY3Rpb24odCl7aWYoIUgodCkpcmV0dXJuITE7dmFyIGU9RSh0KTtyZXR1cm4gZT09V3x8ZT09SXx8ZT09Tnx8ZT09Q30sVT1PW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLEQ9KFI9L1teLl0rJC8uZXhlYyhVJiZVLmtleXMmJlUua2V5cy5JRV9QUk9UT3x8XCJcIikpP1wiU3ltYm9sKHNyYylfMS5cIitSOlwiXCI7dmFyIHE9ZnVuY3Rpb24odCl7cmV0dXJuISFEJiZEIGluIHR9LFY9RnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO3ZhciBKPWZ1bmN0aW9uKHQpe2lmKG51bGwhPXQpe3RyeXtyZXR1cm4gVi5jYWxsKHQpfWNhdGNoKHQpe310cnl7cmV0dXJuIHQrXCJcIn1jYXRjaCh0KXt9fXJldHVyblwiXCJ9LFo9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxHPUZ1bmN0aW9uLnByb3RvdHlwZSxLPU9iamVjdC5wcm90b3R5cGUsWT1SZWdFeHAoXCJeXCIrRy50b1N0cmluZy5jYWxsKEsuaGFzT3duUHJvcGVydHkpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csXCIkMS4qP1wiKStcIiRcIik7dmFyIFE9ZnVuY3Rpb24odCl7cmV0dXJuISghSCh0KXx8cSh0KSkmJigkKHQpP1k6WikudGVzdChKKHQpKX07dmFyIFg9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbnVsbD09dD92b2lkIDA6dFtlXX07dmFyIHR0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9WCh0LGUpO3JldHVybiBRKHIpP3I6dm9pZCAwfSxldD1mdW5jdGlvbigpe3RyeXt2YXIgdD10dChPYmplY3QsXCJkZWZpbmVQcm9wZXJ0eVwiKTtyZXR1cm4gdCh7fSxcIlwiLHt9KSx0fWNhdGNoKHQpe319KCk7dmFyIHJ0PWZ1bmN0aW9uKHQsZSxyKXtcIl9fcHJvdG9fX1wiPT1lJiZldD9ldCh0LGUse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOnIsd3JpdGFibGU6ITB9KTp0W2VdPXJ9O3ZhciBudD1mdW5jdGlvbih0LGUpe3JldHVybiB0PT09ZXx8dCE9dCYmZSE9ZX0sb3Q9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgaXQ9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPXRbZV07b3QuY2FsbCh0LGUpJiZudChuLHIpJiYodm9pZCAwIT09cnx8ZSBpbiB0KXx8cnQodCxlLHIpfSxhdD1BcnJheS5pc0FycmF5O3ZhciB1dD1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9dCYmXCJvYmplY3RcIj09dHlwZW9mIHR9LGN0PVwiW29iamVjdCBTeW1ib2xdXCI7dmFyIGx0PWZ1bmN0aW9uKHQpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0fHx1dCh0KSYmRSh0KT09Y3R9LGZ0PS9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sc3Q9L15cXHcqJC87dmFyIHB0PWZ1bmN0aW9uKHQsZSl7aWYoYXQodCkpcmV0dXJuITE7dmFyIHI9dHlwZW9mIHQ7cmV0dXJuIShcIm51bWJlclwiIT1yJiZcInN5bWJvbFwiIT1yJiZcImJvb2xlYW5cIiE9ciYmbnVsbCE9dCYmIWx0KHQpKXx8c3QudGVzdCh0KXx8IWZ0LnRlc3QodCl8fG51bGwhPWUmJnQgaW4gT2JqZWN0KGUpfSx2dD10dChPYmplY3QsXCJjcmVhdGVcIik7dmFyIGh0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuaGFzKHQpJiZkZWxldGUgdGhpcy5fX2RhdGFfX1t0XTtyZXR1cm4gdGhpcy5zaXplLT1lPzE6MCxlfSxkdD1cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIixidD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBndD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO2lmKHZ0KXt2YXIgcj1lW3RdO3JldHVybiByPT09ZHQ/dm9pZCAwOnJ9cmV0dXJuIGJ0LmNhbGwoZSx0KT9lW3RdOnZvaWQgMH0seXQ9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgbXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gdnQ/dm9pZCAwIT09ZVt0XTp5dC5jYWxsKGUsdCl9LGp0PVwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiO3ZhciBfdD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX19kYXRhX187cmV0dXJuIHRoaXMuc2l6ZSs9dGhpcy5oYXModCk/MDoxLHJbdF09dnQmJnZvaWQgMD09PWU/anQ6ZSx0aGlzfTtmdW5jdGlvbiB3dCh0KXt2YXIgZT0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxyOyl7dmFyIG49dFtlXTt0aGlzLnNldChuWzBdLG5bMV0pfX13dC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPXZ0P3Z0KG51bGwpOnt9LHRoaXMuc2l6ZT0wfSx3dC5wcm90b3R5cGUuZGVsZXRlPWh0LHd0LnByb3RvdHlwZS5nZXQ9Z3Qsd3QucHJvdG90eXBlLmhhcz1tdCx3dC5wcm90b3R5cGUuc2V0PV90O3ZhciBPdD13dDt2YXIgU3Q9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9dC5sZW5ndGg7ci0tOylpZihudCh0W3JdWzBdLGUpKXJldHVybiByO3JldHVybi0xfSx4dD1BcnJheS5wcm90b3R5cGUuc3BsaWNlO3ZhciB6dD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fLHI9U3QoZSx0KTtyZXR1cm4hKHI8MHx8KHI9PWUubGVuZ3RoLTE/ZS5wb3AoKTp4dC5jYWxsKGUsciwxKSwtLXRoaXMuc2l6ZSwwKSl9O3ZhciBGdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fLHI9U3QoZSx0KTtyZXR1cm4gcjwwP3ZvaWQgMDplW3JdWzFdfTt2YXIga3Q9ZnVuY3Rpb24odCl7cmV0dXJuIFN0KHRoaXMuX19kYXRhX18sdCk+LTF9O3ZhciBBdD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX19kYXRhX18sbj1TdChyLHQpO3JldHVybiBuPDA/KCsrdGhpcy5zaXplLHIucHVzaChbdCxlXSkpOnJbbl1bMV09ZSx0aGlzfTtmdW5jdGlvbiBMdCh0KXt2YXIgZT0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxyOyl7dmFyIG49dFtlXTt0aGlzLnNldChuWzBdLG5bMV0pfX1MdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfSxMdC5wcm90b3R5cGUuZGVsZXRlPXp0LEx0LnByb3RvdHlwZS5nZXQ9RnQsTHQucHJvdG90eXBlLmhhcz1rdCxMdC5wcm90b3R5cGUuc2V0PUF0O3ZhciBQdD1MdCxCdD10dChPLFwiTWFwXCIpO3ZhciBUdD1mdW5jdGlvbih0KXt2YXIgZT10eXBlb2YgdDtyZXR1cm5cInN0cmluZ1wiPT1lfHxcIm51bWJlclwiPT1lfHxcInN5bWJvbFwiPT1lfHxcImJvb2xlYW5cIj09ZT9cIl9fcHJvdG9fX1wiIT09dDpudWxsPT09dH07dmFyIE10PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dC5fX2RhdGFfXztyZXR1cm4gVHQoZSk/cltcInN0cmluZ1wiPT10eXBlb2YgZT9cInN0cmluZ1wiOlwiaGFzaFwiXTpyLm1hcH07dmFyIEV0PWZ1bmN0aW9uKHQpe3ZhciBlPU10KHRoaXMsdCkuZGVsZXRlKHQpO3JldHVybiB0aGlzLnNpemUtPWU/MTowLGV9O3ZhciBIdD1mdW5jdGlvbih0KXtyZXR1cm4gTXQodGhpcyx0KS5nZXQodCl9O3ZhciBOdD1mdW5jdGlvbih0KXtyZXR1cm4gTXQodGhpcyx0KS5oYXModCl9O3ZhciBXdD1mdW5jdGlvbih0LGUpe3ZhciByPU10KHRoaXMsdCksbj1yLnNpemU7cmV0dXJuIHIuc2V0KHQsZSksdGhpcy5zaXplKz1yLnNpemU9PW4/MDoxLHRoaXN9O2Z1bmN0aW9uIEl0KHQpe3ZhciBlPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPHI7KXt2YXIgbj10W2VdO3RoaXMuc2V0KG5bMF0sblsxXSl9fUl0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2l6ZT0wLHRoaXMuX19kYXRhX189e2hhc2g6bmV3IE90LG1hcDpuZXcoQnR8fFB0KSxzdHJpbmc6bmV3IE90fX0sSXQucHJvdG90eXBlLmRlbGV0ZT1FdCxJdC5wcm90b3R5cGUuZ2V0PUh0LEl0LnByb3RvdHlwZS5oYXM9TnQsSXQucHJvdG90eXBlLnNldD1XdDt2YXIgQ3Q9SXQsUnQ9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCI7ZnVuY3Rpb24gJHQodCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHxudWxsIT1lJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoUnQpO3ZhciByPWZ1bmN0aW9uKCl7dmFyIG49YXJndW1lbnRzLG89ZT9lLmFwcGx5KHRoaXMsbik6blswXSxpPXIuY2FjaGU7aWYoaS5oYXMobykpcmV0dXJuIGkuZ2V0KG8pO3ZhciBhPXQuYXBwbHkodGhpcyxuKTtyZXR1cm4gci5jYWNoZT1pLnNldChvLGEpfHxpLGF9O3JldHVybiByLmNhY2hlPW5ldygkdC5DYWNoZXx8Q3QpLHJ9JHQuQ2FjaGU9Q3Q7dmFyIFV0PSR0LER0PTUwMDt2YXIgcXQ9L1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nLFZ0PS9cXFxcKFxcXFwpPy9nLEp0PWZ1bmN0aW9uKHQpe3ZhciBlPVV0KHQsZnVuY3Rpb24odCl7cmV0dXJuIHIuc2l6ZT09PUR0JiZyLmNsZWFyKCksdH0pLHI9ZS5jYWNoZTtyZXR1cm4gZX0oZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIDQ2PT09dC5jaGFyQ29kZUF0KDApJiZlLnB1c2goXCJcIiksdC5yZXBsYWNlKHF0LGZ1bmN0aW9uKHQscixuLG8pe2UucHVzaChuP28ucmVwbGFjZShWdCxcIiQxXCIpOnJ8fHQpfSksZX0pO3ZhciBadD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aCxvPUFycmF5KG4pOysrcjxuOylvW3JdPWUodFtyXSxyLHQpO3JldHVybiBvfSxHdD0xLzAsS3Q9Uz9TLnByb3RvdHlwZTp2b2lkIDAsWXQ9S3Q/S3QudG9TdHJpbmc6dm9pZCAwO3ZhciBRdD1mdW5jdGlvbiB0KGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKGF0KGUpKXJldHVybiBadChlLHQpK1wiXCI7aWYobHQoZSkpcmV0dXJuIFl0P1l0LmNhbGwoZSk6XCJcIjt2YXIgcj1lK1wiXCI7cmV0dXJuXCIwXCI9PXImJjEvZT09LUd0P1wiLTBcIjpyfTt2YXIgWHQ9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/XCJcIjpRdCh0KX07dmFyIHRlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGF0KHQpP3Q6cHQodCxlKT9bdF06SnQoWHQodCkpfSxlZT05MDA3MTk5MjU0NzQwOTkxLHJlPS9eKD86MHxbMS05XVxcZCopJC87dmFyIG5lPWZ1bmN0aW9uKHQsZSl7dmFyIHI9dHlwZW9mIHQ7cmV0dXJuISEoZT1udWxsPT1lP2VlOmUpJiYoXCJudW1iZXJcIj09cnx8XCJzeW1ib2xcIiE9ciYmcmUudGVzdCh0KSkmJnQ+LTEmJnQlMT09MCYmdDxlfSxvZT0xLzA7dmFyIGllPWZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0fHxsdCh0KSlyZXR1cm4gdDt2YXIgZT10K1wiXCI7cmV0dXJuXCIwXCI9PWUmJjEvdD09LW9lP1wiLTBcIjplfTt2YXIgYWU9ZnVuY3Rpb24odCxlLHIsbil7aWYoIUgodCkpcmV0dXJuIHQ7Zm9yKHZhciBvPS0xLGk9KGU9dGUoZSx0KSkubGVuZ3RoLGE9aS0xLHU9dDtudWxsIT11JiYrK288aTspe3ZhciBjPWllKGVbb10pLGw9cjtpZihvIT1hKXt2YXIgZj11W2NdO3ZvaWQgMD09PShsPW4/bihmLGMsdSk6dm9pZCAwKSYmKGw9SChmKT9mOm5lKGVbbysxXSk/W106e30pfWl0KHUsYyxsKSx1PXVbY119cmV0dXJuIHR9O3ZhciB1ZT1mdW5jdGlvbih0LGUscil7cmV0dXJuIG51bGw9PXQ/dDphZSh0LGUscil9O3ZhciBjZT1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aDsrK3I8biYmITEhPT1lKHRbcl0scix0KTspO3JldHVybiB0fTt2YXIgbGU9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscixuKXtmb3IodmFyIG89LTEsaT1PYmplY3QoZSksYT1uKGUpLHU9YS5sZW5ndGg7dS0tOyl7dmFyIGM9YVt0P3U6KytvXTtpZighMT09PXIoaVtjXSxjLGkpKWJyZWFrfXJldHVybiBlfX0oKTt2YXIgZmU9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9LTEsbj1BcnJheSh0KTsrK3I8dDspbltyXT1lKHIpO3JldHVybiBufSxzZT1cIltvYmplY3QgQXJndW1lbnRzXVwiO3ZhciBwZT1mdW5jdGlvbih0KXtyZXR1cm4gdXQodCkmJkUodCk9PXNlfSx2ZT1PYmplY3QucHJvdG90eXBlLGhlPXZlLmhhc093blByb3BlcnR5LGRlPXZlLnByb3BlcnR5SXNFbnVtZXJhYmxlLGJlPXBlKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/cGU6ZnVuY3Rpb24odCl7cmV0dXJuIHV0KHQpJiZoZS5jYWxsKHQsXCJjYWxsZWVcIikmJiFkZS5jYWxsKHQsXCJjYWxsZWVcIil9O3ZhciBnZT1mdW5jdGlvbigpe3JldHVybiExfSx5ZT1qKGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZSYmIWUubm9kZVR5cGUmJmUsbj1yJiZ0JiYhdC5ub2RlVHlwZSYmdCxvPW4mJm4uZXhwb3J0cz09PXI/Ty5CdWZmZXI6dm9pZCAwO3QuZXhwb3J0cz0obz9vLmlzQnVmZmVyOnZvaWQgMCl8fGdlfSksbWU9OTAwNzE5OTI1NDc0MDk5MTt2YXIgamU9ZnVuY3Rpb24odCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+LTEmJnQlMT09MCYmdDw9bWV9LF9lPXt9O19lW1wiW29iamVjdCBGbG9hdDMyQXJyYXldXCJdPV9lW1wiW29iamVjdCBGbG9hdDY0QXJyYXldXCJdPV9lW1wiW29iamVjdCBJbnQ4QXJyYXldXCJdPV9lW1wiW29iamVjdCBJbnQxNkFycmF5XVwiXT1fZVtcIltvYmplY3QgSW50MzJBcnJheV1cIl09X2VbXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCJdPV9lW1wiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIl09X2VbXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiXT1fZVtcIltvYmplY3QgVWludDMyQXJyYXldXCJdPSEwLF9lW1wiW29iamVjdCBBcmd1bWVudHNdXCJdPV9lW1wiW29iamVjdCBBcnJheV1cIl09X2VbXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiXT1fZVtcIltvYmplY3QgQm9vbGVhbl1cIl09X2VbXCJbb2JqZWN0IERhdGFWaWV3XVwiXT1fZVtcIltvYmplY3QgRGF0ZV1cIl09X2VbXCJbb2JqZWN0IEVycm9yXVwiXT1fZVtcIltvYmplY3QgRnVuY3Rpb25dXCJdPV9lW1wiW29iamVjdCBNYXBdXCJdPV9lW1wiW29iamVjdCBOdW1iZXJdXCJdPV9lW1wiW29iamVjdCBPYmplY3RdXCJdPV9lW1wiW29iamVjdCBSZWdFeHBdXCJdPV9lW1wiW29iamVjdCBTZXRdXCJdPV9lW1wiW29iamVjdCBTdHJpbmddXCJdPV9lW1wiW29iamVjdCBXZWFrTWFwXVwiXT0hMTt2YXIgd2U9ZnVuY3Rpb24odCl7cmV0dXJuIHV0KHQpJiZqZSh0Lmxlbmd0aCkmJiEhX2VbRSh0KV19O3ZhciBPZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQoZSl9fSxTZT1qKGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZSYmIWUubm9kZVR5cGUmJmUsbj1yJiZ0JiYhdC5ub2RlVHlwZSYmdCxvPW4mJm4uZXhwb3J0cz09PXImJl8ucHJvY2VzcyxpPWZ1bmN0aW9uKCl7dHJ5e3ZhciB0PW4mJm4ucmVxdWlyZSYmbi5yZXF1aXJlKFwidXRpbFwiKS50eXBlcztyZXR1cm4gdHx8byYmby5iaW5kaW5nJiZvLmJpbmRpbmcoXCJ1dGlsXCIpfWNhdGNoKHQpe319KCk7dC5leHBvcnRzPWl9KSx4ZT1TZSYmU2UuaXNUeXBlZEFycmF5LHplPXhlP09lKHhlKTp3ZSxGZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBrZT1mdW5jdGlvbih0LGUpe3ZhciByPWF0KHQpLG49IXImJmJlKHQpLG89IXImJiFuJiZ5ZSh0KSxpPSFyJiYhbiYmIW8mJnplKHQpLGE9cnx8bnx8b3x8aSx1PWE/ZmUodC5sZW5ndGgsU3RyaW5nKTpbXSxjPXUubGVuZ3RoO2Zvcih2YXIgbCBpbiB0KSFlJiYhRmUuY2FsbCh0LGwpfHxhJiYoXCJsZW5ndGhcIj09bHx8byYmKFwib2Zmc2V0XCI9PWx8fFwicGFyZW50XCI9PWwpfHxpJiYoXCJidWZmZXJcIj09bHx8XCJieXRlTGVuZ3RoXCI9PWx8fFwiYnl0ZU9mZnNldFwiPT1sKXx8bmUobCxjKSl8fHUucHVzaChsKTtyZXR1cm4gdX0sQWU9T2JqZWN0LnByb3RvdHlwZTt2YXIgTGU9ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5jb25zdHJ1Y3RvcjtyZXR1cm4gdD09PShcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLnByb3RvdHlwZXx8QWUpfTt2YXIgUGU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHQoZShyKSl9fSxCZT1QZShPYmplY3Qua2V5cyxPYmplY3QpLFRlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIE1lPWZ1bmN0aW9uKHQpe2lmKCFMZSh0KSlyZXR1cm4gQmUodCk7dmFyIGU9W107Zm9yKHZhciByIGluIE9iamVjdCh0KSlUZS5jYWxsKHQscikmJlwiY29uc3RydWN0b3JcIiE9ciYmZS5wdXNoKHIpO3JldHVybiBlfTt2YXIgRWU9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXQmJmplKHQubGVuZ3RoKSYmISQodCl9O3ZhciBIZT1mdW5jdGlvbih0KXtyZXR1cm4gRWUodCk/a2UodCk6TWUodCl9O3ZhciBOZT1mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihyLG4pe2lmKG51bGw9PXIpcmV0dXJuIHI7aWYoIUVlKHIpKXJldHVybiB0KHIsbik7Zm9yKHZhciBvPXIubGVuZ3RoLGk9ZT9vOi0xLGE9T2JqZWN0KHIpOyhlP2ktLTorK2k8bykmJiExIT09bihhW2ldLGksYSk7KTtyZXR1cm4gcn19KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQmJmxlKHQsZSxIZSl9KTt2YXIgV2U9ZnVuY3Rpb24odCl7cmV0dXJuIHR9O3ZhciBJZT1mdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6V2V9O3ZhciBDZT1mdW5jdGlvbih0LGUpe3JldHVybihhdCh0KT9jZTpOZSkodCxJZShlKSl9LFJlPVwiW29iamVjdCBOdW1iZXJdXCI7dmFyICRlPWZ1bmN0aW9uKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0fHx1dCh0KSYmRSh0KT09UmV9LFVlPVwiW29iamVjdCBTdHJpbmddXCI7dmFyIERlPWZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fHwhYXQodCkmJnV0KHQpJiZFKHQpPT1VZX07dmFyIHFlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX18scj1lLmRlbGV0ZSh0KTtyZXR1cm4gdGhpcy5zaXplPWUuc2l6ZSxyfTt2YXIgVmU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KHQpfTt2YXIgSmU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfSxaZT0yMDA7dmFyIEdlPWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5fX2RhdGFfXztpZihyIGluc3RhbmNlb2YgUHQpe3ZhciBuPXIuX19kYXRhX187aWYoIUJ0fHxuLmxlbmd0aDxaZS0xKXJldHVybiBuLnB1c2goW3QsZV0pLHRoaXMuc2l6ZT0rK3Iuc2l6ZSx0aGlzO3I9dGhpcy5fX2RhdGFfXz1uZXcgQ3Qobil9cmV0dXJuIHIuc2V0KHQsZSksdGhpcy5zaXplPXIuc2l6ZSx0aGlzfTtmdW5jdGlvbiBLZSh0KXt2YXIgZT10aGlzLl9fZGF0YV9fPW5ldyBQdCh0KTt0aGlzLnNpemU9ZS5zaXplfUtlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189bmV3IFB0LHRoaXMuc2l6ZT0wfSxLZS5wcm90b3R5cGUuZGVsZXRlPXFlLEtlLnByb3RvdHlwZS5nZXQ9VmUsS2UucHJvdG90eXBlLmhhcz1KZSxLZS5wcm90b3R5cGUuc2V0PUdlO3ZhciBZZT1LZTt2YXIgUWU9ZnVuY3Rpb24odCxlLHIpeyh2b2lkIDA9PT1yfHxudCh0W2VdLHIpKSYmKHZvaWQgMCE9PXJ8fGUgaW4gdCl8fHJ0KHQsZSxyKX0sWGU9aihmdW5jdGlvbih0LGUpe3ZhciByPWUmJiFlLm5vZGVUeXBlJiZlLG49ciYmdCYmIXQubm9kZVR5cGUmJnQsbz1uJiZuLmV4cG9ydHM9PT1yP08uQnVmZmVyOnZvaWQgMCxpPW8/by5hbGxvY1Vuc2FmZTp2b2lkIDA7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7aWYoZSlyZXR1cm4gdC5zbGljZSgpO3ZhciByPXQubGVuZ3RoLG49aT9pKHIpOm5ldyB0LmNvbnN0cnVjdG9yKHIpO3JldHVybiB0LmNvcHkobiksbn19KSx0cj1PLlVpbnQ4QXJyYXk7dmFyIGVyPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyB0LmNvbnN0cnVjdG9yKHQuYnl0ZUxlbmd0aCk7cmV0dXJuIG5ldyB0cihlKS5zZXQobmV3IHRyKHQpKSxlfTt2YXIgcnI9ZnVuY3Rpb24odCxlKXt2YXIgcj1lP2VyKHQuYnVmZmVyKTp0LmJ1ZmZlcjtyZXR1cm4gbmV3IHQuY29uc3RydWN0b3Iocix0LmJ5dGVPZmZzZXQsdC5sZW5ndGgpfTt2YXIgbnI9ZnVuY3Rpb24odCxlKXt2YXIgcj0tMSxuPXQubGVuZ3RoO2ZvcihlfHwoZT1BcnJheShuKSk7KytyPG47KWVbcl09dFtyXTtyZXR1cm4gZX0sb3I9T2JqZWN0LmNyZWF0ZSxpcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKCFIKGUpKXJldHVybnt9O2lmKG9yKXJldHVybiBvcihlKTt0LnByb3RvdHlwZT1lO3ZhciByPW5ldyB0O3JldHVybiB0LnByb3RvdHlwZT12b2lkIDAscn19KCksYXI9UGUoT2JqZWN0LmdldFByb3RvdHlwZU9mLE9iamVjdCk7dmFyIHVyPWZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb25cIiE9dHlwZW9mIHQuY29uc3RydWN0b3J8fExlKHQpP3t9OmlyKGFyKHQpKX07dmFyIGNyPWZ1bmN0aW9uKHQpe3JldHVybiB1dCh0KSYmRWUodCl9LGxyPVwiW29iamVjdCBPYmplY3RdXCIsZnI9RnVuY3Rpb24ucHJvdG90eXBlLHNyPU9iamVjdC5wcm90b3R5cGUscHI9ZnIudG9TdHJpbmcsdnI9c3IuaGFzT3duUHJvcGVydHksaHI9cHIuY2FsbChPYmplY3QpO3ZhciBkcj1mdW5jdGlvbih0KXtpZighdXQodCl8fEUodCkhPWxyKXJldHVybiExO3ZhciBlPWFyKHQpO2lmKG51bGw9PT1lKXJldHVybiEwO3ZhciByPXZyLmNhbGwoZSxcImNvbnN0cnVjdG9yXCIpJiZlLmNvbnN0cnVjdG9yO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHImJnIgaW5zdGFuY2VvZiByJiZwci5jYWxsKHIpPT1ocn07dmFyIGJyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJfX3Byb3RvX19cIj09ZT92b2lkIDA6dFtlXX07dmFyIGdyPWZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBvPSFyO3J8fChyPXt9KTtmb3IodmFyIGk9LTEsYT1lLmxlbmd0aDsrK2k8YTspe3ZhciB1PWVbaV0sYz1uP24oclt1XSx0W3VdLHUscix0KTp2b2lkIDA7dm9pZCAwPT09YyYmKGM9dFt1XSksbz9ydChyLHUsYyk6aXQocix1LGMpfXJldHVybiByfTt2YXIgeXI9ZnVuY3Rpb24odCl7dmFyIGU9W107aWYobnVsbCE9dClmb3IodmFyIHIgaW4gT2JqZWN0KHQpKWUucHVzaChyKTtyZXR1cm4gZX0sbXI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIganI9ZnVuY3Rpb24odCl7aWYoIUgodCkpcmV0dXJuIHlyKHQpO3ZhciBlPUxlKHQpLHI9W107Zm9yKHZhciBuIGluIHQpKFwiY29uc3RydWN0b3JcIiE9bnx8IWUmJm1yLmNhbGwodCxuKSkmJnIucHVzaChuKTtyZXR1cm4gcn07dmFyIF9yPWZ1bmN0aW9uKHQpe3JldHVybiBFZSh0KT9rZSh0LCEwKTpqcih0KX07dmFyIHdyPWZ1bmN0aW9uKHQpe3JldHVybiBncih0LF9yKHQpKX07dmFyIE9yPWZ1bmN0aW9uKHQsZSxyLG4sbyxpLGEpe3ZhciB1PWJyKHQsciksYz1icihlLHIpLGw9YS5nZXQoYyk7aWYobClRZSh0LHIsbCk7ZWxzZXt2YXIgZj1pP2kodSxjLHIrXCJcIix0LGUsYSk6dm9pZCAwLHM9dm9pZCAwPT09ZjtpZihzKXt2YXIgcD1hdChjKSx2PSFwJiZ5ZShjKSxoPSFwJiYhdiYmemUoYyk7Zj1jLHB8fHZ8fGg/YXQodSk/Zj11OmNyKHUpP2Y9bnIodSk6dj8ocz0hMSxmPVhlKGMsITApKTpoPyhzPSExLGY9cnIoYywhMCkpOmY9W106ZHIoYyl8fGJlKGMpPyhmPXUsYmUodSk/Zj13cih1KTooIUgodSl8fG4mJiQodSkpJiYoZj11cihjKSkpOnM9ITF9cyYmKGEuc2V0KGMsZiksbyhmLGMsbixpLGEpLGEuZGVsZXRlKGMpKSxRZSh0LHIsZil9fTt2YXIgU3I9ZnVuY3Rpb24gdChlLHIsbixvLGkpe2UhPT1yJiZsZShyLGZ1bmN0aW9uKGEsdSl7aWYoSChhKSlpfHwoaT1uZXcgWWUpLE9yKGUscix1LG4sdCxvLGkpO2Vsc2V7dmFyIGM9bz9vKGJyKGUsdSksYSx1K1wiXCIsZSxyLGkpOnZvaWQgMDt2b2lkIDA9PT1jJiYoYz1hKSxRZShlLHUsYyl9fSxfcil9O3ZhciB4cj1mdW5jdGlvbih0LGUscil7c3dpdGNoKHIubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHQuY2FsbChlKTtjYXNlIDE6cmV0dXJuIHQuY2FsbChlLHJbMF0pO2Nhc2UgMjpyZXR1cm4gdC5jYWxsKGUsclswXSxyWzFdKTtjYXNlIDM6cmV0dXJuIHQuY2FsbChlLHJbMF0sclsxXSxyWzJdKX1yZXR1cm4gdC5hcHBseShlLHIpfSx6cj1NYXRoLm1heDt2YXIgRnI9ZnVuY3Rpb24odCxlLHIpe3JldHVybiBlPXpyKHZvaWQgMD09PWU/dC5sZW5ndGgtMTplLDApLGZ1bmN0aW9uKCl7Zm9yKHZhciBuPWFyZ3VtZW50cyxvPS0xLGk9enIobi5sZW5ndGgtZSwwKSxhPUFycmF5KGkpOysrbzxpOylhW29dPW5bZStvXTtvPS0xO2Zvcih2YXIgdT1BcnJheShlKzEpOysrbzxlOyl1W29dPW5bb107cmV0dXJuIHVbZV09cihhKSx4cih0LHRoaXMsdSl9fTt2YXIga3I9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHR9fSxBcj04MDAsTHI9MTYsUHI9RGF0ZS5ub3c7dmFyIEJyPWZ1bmN0aW9uKHQpe3ZhciBlPTAscj0wO3JldHVybiBmdW5jdGlvbigpe3ZhciBuPVByKCksbz1Mci0obi1yKTtpZihyPW4sbz4wKXtpZigrK2U+PUFyKXJldHVybiBhcmd1bWVudHNbMF19ZWxzZSBlPTA7cmV0dXJuIHQuYXBwbHkodm9pZCAwLGFyZ3VtZW50cyl9fShldD9mdW5jdGlvbih0LGUpe3JldHVybiBldCh0LFwidG9TdHJpbmdcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITEsdmFsdWU6a3IoZSksd3JpdGFibGU6ITB9KX06V2UpO3ZhciBUcj1mdW5jdGlvbih0LGUpe3JldHVybiBCcihGcih0LGUsV2UpLHQrXCJcIil9O3ZhciBNcj1mdW5jdGlvbih0LGUscil7aWYoIUgocikpcmV0dXJuITE7dmFyIG49dHlwZW9mIGU7cmV0dXJuISEoXCJudW1iZXJcIj09bj9FZShyKSYmbmUoZSxyLmxlbmd0aCk6XCJzdHJpbmdcIj09biYmZSBpbiByKSYmbnQocltlXSx0KX07dmFyIEVyPWZ1bmN0aW9uKHQpe3JldHVybiBUcihmdW5jdGlvbihlLHIpe3ZhciBuPS0xLG89ci5sZW5ndGgsaT1vPjE/cltvLTFdOnZvaWQgMCxhPW8+Mj9yWzJdOnZvaWQgMDtmb3IoaT10Lmxlbmd0aD4zJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpPyhvLS0saSk6dm9pZCAwLGEmJk1yKHJbMF0sclsxXSxhKSYmKGk9bzwzP3ZvaWQgMDppLG89MSksZT1PYmplY3QoZSk7KytuPG87KXt2YXIgdT1yW25dO3UmJnQoZSx1LG4saSl9cmV0dXJuIGV9KX0oZnVuY3Rpb24odCxlLHIpe1NyKHQsZSxyKX0pO3ZhciBIcj1mdW5jdGlvbih0LGUscixuKXt2YXIgbz0tMSxpPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IobiYmaSYmKHI9dFsrK29dKTsrK288aTspcj1lKHIsdFtvXSxvLHQpO3JldHVybiByfSxOcj1cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIjt2YXIgV3I9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHQpfTtmdW5jdGlvbiBJcih0KXt2YXIgZT0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5fX2RhdGFfXz1uZXcgQ3Q7KytlPHI7KXRoaXMuYWRkKHRbZV0pfUlyLnByb3RvdHlwZS5hZGQ9SXIucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX19kYXRhX18uc2V0KHQsTnIpLHRoaXN9LElyLnByb3RvdHlwZS5oYXM9V3I7dmFyIENyPUlyO3ZhciBScj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aDsrK3I8bjspaWYoZSh0W3JdLHIsdCkpcmV0dXJuITA7cmV0dXJuITF9O3ZhciAkcj1mdW5jdGlvbih0LGUpe3JldHVybiB0LmhhcyhlKX0sVXI9MSxEcj0yO3ZhciBxcj1mdW5jdGlvbih0LGUscixuLG8saSl7dmFyIGE9ciZVcix1PXQubGVuZ3RoLGM9ZS5sZW5ndGg7aWYodSE9YyYmIShhJiZjPnUpKXJldHVybiExO3ZhciBsPWkuZ2V0KHQpO2lmKGwmJmkuZ2V0KGUpKXJldHVybiBsPT1lO3ZhciBmPS0xLHM9ITAscD1yJkRyP25ldyBDcjp2b2lkIDA7Zm9yKGkuc2V0KHQsZSksaS5zZXQoZSx0KTsrK2Y8dTspe3ZhciB2PXRbZl0saD1lW2ZdO2lmKG4pdmFyIGQ9YT9uKGgsdixmLGUsdCxpKTpuKHYsaCxmLHQsZSxpKTtpZih2b2lkIDAhPT1kKXtpZihkKWNvbnRpbnVlO3M9ITE7YnJlYWt9aWYocCl7aWYoIVJyKGUsZnVuY3Rpb24odCxlKXtpZighJHIocCxlKSYmKHY9PT10fHxvKHYsdCxyLG4saSkpKXJldHVybiBwLnB1c2goZSl9KSl7cz0hMTticmVha319ZWxzZSBpZih2IT09aCYmIW8odixoLHIsbixpKSl7cz0hMTticmVha319cmV0dXJuIGkuZGVsZXRlKHQpLGkuZGVsZXRlKGUpLHN9O3ZhciBWcj1mdW5jdGlvbih0KXt2YXIgZT0tMSxyPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0LG4pe3JbKytlXT1bbix0XX0pLHJ9O3ZhciBKcj1mdW5jdGlvbih0KXt2YXIgZT0tMSxyPUFycmF5KHQuc2l6ZSk7cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtyWysrZV09dH0pLHJ9LFpyPTEsR3I9MixLcj1cIltvYmplY3QgQm9vbGVhbl1cIixZcj1cIltvYmplY3QgRGF0ZV1cIixRcj1cIltvYmplY3QgRXJyb3JdXCIsWHI9XCJbb2JqZWN0IE1hcF1cIix0bj1cIltvYmplY3QgTnVtYmVyXVwiLGVuPVwiW29iamVjdCBSZWdFeHBdXCIscm49XCJbb2JqZWN0IFNldF1cIixubj1cIltvYmplY3QgU3RyaW5nXVwiLG9uPVwiW29iamVjdCBTeW1ib2xdXCIsYW49XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiLHVuPVwiW29iamVjdCBEYXRhVmlld11cIixjbj1TP1MucHJvdG90eXBlOnZvaWQgMCxsbj1jbj9jbi52YWx1ZU9mOnZvaWQgMDt2YXIgZm49ZnVuY3Rpb24odCxlLHIsbixvLGksYSl7c3dpdGNoKHIpe2Nhc2UgdW46aWYodC5ieXRlTGVuZ3RoIT1lLmJ5dGVMZW5ndGh8fHQuYnl0ZU9mZnNldCE9ZS5ieXRlT2Zmc2V0KXJldHVybiExO3Q9dC5idWZmZXIsZT1lLmJ1ZmZlcjtjYXNlIGFuOnJldHVybiEodC5ieXRlTGVuZ3RoIT1lLmJ5dGVMZW5ndGh8fCFpKG5ldyB0cih0KSxuZXcgdHIoZSkpKTtjYXNlIEtyOmNhc2UgWXI6Y2FzZSB0bjpyZXR1cm4gbnQoK3QsK2UpO2Nhc2UgUXI6cmV0dXJuIHQubmFtZT09ZS5uYW1lJiZ0Lm1lc3NhZ2U9PWUubWVzc2FnZTtjYXNlIGVuOmNhc2Ugbm46cmV0dXJuIHQ9PWUrXCJcIjtjYXNlIFhyOnZhciB1PVZyO2Nhc2Ugcm46aWYodXx8KHU9SnIpLHQuc2l6ZSE9ZS5zaXplJiYhKG4mWnIpKXJldHVybiExO3ZhciBjPWEuZ2V0KHQpO2lmKGMpcmV0dXJuIGM9PWU7bnw9R3IsYS5zZXQodCxlKTt2YXIgbD1xcih1KHQpLHUoZSksbixvLGksYSk7cmV0dXJuIGEuZGVsZXRlKHQpLGw7Y2FzZSBvbjppZihsbilyZXR1cm4gbG4uY2FsbCh0KT09bG4uY2FsbChlKX1yZXR1cm4hMX07dmFyIHNuPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPS0xLG49ZS5sZW5ndGgsbz10Lmxlbmd0aDsrK3I8bjspdFtvK3JdPWVbcl07cmV0dXJuIHR9O3ZhciBwbj1mdW5jdGlvbih0LGUscil7dmFyIG49ZSh0KTtyZXR1cm4gYXQodCk/bjpzbihuLHIodCkpfTt2YXIgdm49ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9LTEsbj1udWxsPT10PzA6dC5sZW5ndGgsbz0wLGk9W107KytyPG47KXt2YXIgYT10W3JdO2UoYSxyLHQpJiYoaVtvKytdPWEpfXJldHVybiBpfTt2YXIgaG49T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxkbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGJuPWRuP2Z1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P1tdOih0PU9iamVjdCh0KSx2bihkbih0KSxmdW5jdGlvbihlKXtyZXR1cm4gaG4uY2FsbCh0LGUpfSkpfTpmdW5jdGlvbigpe3JldHVybltdfTt2YXIgZ249ZnVuY3Rpb24odCl7cmV0dXJuIHBuKHQsSGUsYm4pfSx5bj0xLG1uPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIGpuPWZ1bmN0aW9uKHQsZSxyLG4sbyxpKXt2YXIgYT1yJnluLHU9Z24odCksYz11Lmxlbmd0aDtpZihjIT1nbihlKS5sZW5ndGgmJiFhKXJldHVybiExO2Zvcih2YXIgbD1jO2wtLTspe3ZhciBmPXVbbF07aWYoIShhP2YgaW4gZTptbi5jYWxsKGUsZikpKXJldHVybiExfXZhciBzPWkuZ2V0KHQpO2lmKHMmJmkuZ2V0KGUpKXJldHVybiBzPT1lO3ZhciBwPSEwO2kuc2V0KHQsZSksaS5zZXQoZSx0KTtmb3IodmFyIHY9YTsrK2w8Yzspe3ZhciBoPXRbZj11W2xdXSxkPWVbZl07aWYobil2YXIgYj1hP24oZCxoLGYsZSx0LGkpOm4oaCxkLGYsdCxlLGkpO2lmKCEodm9pZCAwPT09Yj9oPT09ZHx8byhoLGQscixuLGkpOmIpKXtwPSExO2JyZWFrfXZ8fCh2PVwiY29uc3RydWN0b3JcIj09Zil9aWYocCYmIXYpe3ZhciBnPXQuY29uc3RydWN0b3IseT1lLmNvbnN0cnVjdG9yO2chPXkmJlwiY29uc3RydWN0b3JcImluIHQmJlwiY29uc3RydWN0b3JcImluIGUmJiEoXCJmdW5jdGlvblwiPT10eXBlb2YgZyYmZyBpbnN0YW5jZW9mIGcmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHkmJnkgaW5zdGFuY2VvZiB5KSYmKHA9ITEpfXJldHVybiBpLmRlbGV0ZSh0KSxpLmRlbGV0ZShlKSxwfSxfbj10dChPLFwiRGF0YVZpZXdcIiksd249dHQoTyxcIlByb21pc2VcIiksT249dHQoTyxcIlNldFwiKSxTbj10dChPLFwiV2Vha01hcFwiKSx4bj1KKF9uKSx6bj1KKEJ0KSxGbj1KKHduKSxrbj1KKE9uKSxBbj1KKFNuKSxMbj1FOyhfbiYmXCJbb2JqZWN0IERhdGFWaWV3XVwiIT1MbihuZXcgX24obmV3IEFycmF5QnVmZmVyKDEpKSl8fEJ0JiZcIltvYmplY3QgTWFwXVwiIT1MbihuZXcgQnQpfHx3biYmXCJbb2JqZWN0IFByb21pc2VdXCIhPUxuKHduLnJlc29sdmUoKSl8fE9uJiZcIltvYmplY3QgU2V0XVwiIT1MbihuZXcgT24pfHxTbiYmXCJbb2JqZWN0IFdlYWtNYXBdXCIhPUxuKG5ldyBTbikpJiYoTG49ZnVuY3Rpb24odCl7dmFyIGU9RSh0KSxyPVwiW29iamVjdCBPYmplY3RdXCI9PWU/dC5jb25zdHJ1Y3Rvcjp2b2lkIDAsbj1yP0oocik6XCJcIjtpZihuKXN3aXRjaChuKXtjYXNlIHhuOnJldHVyblwiW29iamVjdCBEYXRhVmlld11cIjtjYXNlIHpuOnJldHVyblwiW29iamVjdCBNYXBdXCI7Y2FzZSBGbjpyZXR1cm5cIltvYmplY3QgUHJvbWlzZV1cIjtjYXNlIGtuOnJldHVyblwiW29iamVjdCBTZXRdXCI7Y2FzZSBBbjpyZXR1cm5cIltvYmplY3QgV2Vha01hcF1cIn1yZXR1cm4gZX0pO3ZhciBQbj1MbixCbj0xLFRuPVwiW29iamVjdCBBcmd1bWVudHNdXCIsTW49XCJbb2JqZWN0IEFycmF5XVwiLEVuPVwiW29iamVjdCBPYmplY3RdXCIsSG49T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgTm49ZnVuY3Rpb24odCxlLHIsbixvLGkpe3ZhciBhPWF0KHQpLHU9YXQoZSksYz1hP01uOlBuKHQpLGw9dT9NbjpQbihlKSxmPShjPWM9PVRuP0VuOmMpPT1FbixzPShsPWw9PVRuP0VuOmwpPT1FbixwPWM9PWw7aWYocCYmeWUodCkpe2lmKCF5ZShlKSlyZXR1cm4hMTthPSEwLGY9ITF9aWYocCYmIWYpcmV0dXJuIGl8fChpPW5ldyBZZSksYXx8emUodCk/cXIodCxlLHIsbixvLGkpOmZuKHQsZSxjLHIsbixvLGkpO2lmKCEociZCbikpe3ZhciB2PWYmJkhuLmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpLGg9cyYmSG4uY2FsbChlLFwiX193cmFwcGVkX19cIik7aWYodnx8aCl7dmFyIGQ9dj90LnZhbHVlKCk6dCxiPWg/ZS52YWx1ZSgpOmU7cmV0dXJuIGl8fChpPW5ldyBZZSksbyhkLGIscixuLGkpfX1yZXR1cm4hIXAmJihpfHwoaT1uZXcgWWUpLGpuKHQsZSxyLG4sbyxpKSl9O3ZhciBXbj1mdW5jdGlvbiB0KGUscixuLG8saSl7cmV0dXJuIGU9PT1yfHwobnVsbD09ZXx8bnVsbD09cnx8IXV0KGUpJiYhdXQocik/ZSE9ZSYmciE9cjpObihlLHIsbixvLHQsaSkpfSxJbj0xLENuPTI7dmFyIFJuPWZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBvPXIubGVuZ3RoLGk9byxhPSFuO2lmKG51bGw9PXQpcmV0dXJuIWk7Zm9yKHQ9T2JqZWN0KHQpO28tLTspe3ZhciB1PXJbb107aWYoYSYmdVsyXT91WzFdIT09dFt1WzBdXTohKHVbMF1pbiB0KSlyZXR1cm4hMX1mb3IoOysrbzxpOyl7dmFyIGM9KHU9cltvXSlbMF0sbD10W2NdLGY9dVsxXTtpZihhJiZ1WzJdKXtpZih2b2lkIDA9PT1sJiYhKGMgaW4gdCkpcmV0dXJuITF9ZWxzZXt2YXIgcz1uZXcgWWU7aWYobil2YXIgcD1uKGwsZixjLHQsZSxzKTtpZighKHZvaWQgMD09PXA/V24oZixsLElufENuLG4scyk6cCkpcmV0dXJuITF9fXJldHVybiEwfTt2YXIgJG49ZnVuY3Rpb24odCl7cmV0dXJuIHQ9PXQmJiFIKHQpfTt2YXIgVW49ZnVuY3Rpb24odCl7Zm9yKHZhciBlPUhlKHQpLHI9ZS5sZW5ndGg7ci0tOyl7dmFyIG49ZVtyXSxvPXRbbl07ZVtyXT1bbixvLCRuKG8pXX1yZXR1cm4gZX07dmFyIERuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBudWxsIT1yJiZyW3RdPT09ZSYmKHZvaWQgMCE9PWV8fHQgaW4gT2JqZWN0KHIpKX19O3ZhciBxbj1mdW5jdGlvbih0KXt2YXIgZT1Vbih0KTtyZXR1cm4gMT09ZS5sZW5ndGgmJmVbMF1bMl0/RG4oZVswXVswXSxlWzBdWzFdKTpmdW5jdGlvbihyKXtyZXR1cm4gcj09PXR8fFJuKHIsdCxlKX19O3ZhciBWbj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj0wLG49KGU9dGUoZSx0KSkubGVuZ3RoO251bGwhPXQmJnI8bjspdD10W2llKGVbcisrXSldO3JldHVybiByJiZyPT1uP3Q6dm9pZCAwfTt2YXIgSm49ZnVuY3Rpb24odCxlLHIpe3ZhciBuPW51bGw9PXQ/dm9pZCAwOlZuKHQsZSk7cmV0dXJuIHZvaWQgMD09PW4/cjpufTt2YXIgWm49ZnVuY3Rpb24odCxlKXtyZXR1cm4gbnVsbCE9dCYmZSBpbiBPYmplY3QodCl9O3ZhciBHbj1mdW5jdGlvbih0LGUscil7Zm9yKHZhciBuPS0xLG89KGU9dGUoZSx0KSkubGVuZ3RoLGk9ITE7KytuPG87KXt2YXIgYT1pZShlW25dKTtpZighKGk9bnVsbCE9dCYmcih0LGEpKSlicmVhazt0PXRbYV19cmV0dXJuIGl8fCsrbiE9bz9pOiEhKG89bnVsbD09dD8wOnQubGVuZ3RoKSYmamUobykmJm5lKGEsbykmJihhdCh0KXx8YmUodCkpfTt2YXIgS249ZnVuY3Rpb24odCxlKXtyZXR1cm4gbnVsbCE9dCYmR24odCxlLFpuKX0sWW49MSxRbj0yO3ZhciBYbj1mdW5jdGlvbih0LGUpe3JldHVybiBwdCh0KSYmJG4oZSk/RG4oaWUodCksZSk6ZnVuY3Rpb24ocil7dmFyIG49Sm4ocix0KTtyZXR1cm4gdm9pZCAwPT09biYmbj09PWU/S24ocix0KTpXbihlLG4sWW58UW4pfX07dmFyIHRvPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT92b2lkIDA6ZVt0XX19O3ZhciBlbz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIFZuKGUsdCl9fTt2YXIgcm89ZnVuY3Rpb24odCl7cmV0dXJuIHB0KHQpP3RvKGllKHQpKTplbyh0KX07dmFyIG5vPWZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsPT10P1dlOlwib2JqZWN0XCI9PXR5cGVvZiB0P2F0KHQpP1huKHRbMF0sdFsxXSk6cW4odCk6cm8odCl9O3ZhciBvbz1mdW5jdGlvbih0LGUscixuLG8pe3JldHVybiBvKHQsZnVuY3Rpb24odCxvLGkpe3I9bj8obj0hMSx0KTplKHIsdCxvLGkpfSkscn07dmFyIGlvPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1hdCh0KT9IcjpvbyxvPWFyZ3VtZW50cy5sZW5ndGg8MztyZXR1cm4gbih0LG5vKGUsNCkscixvLE5lKX0sYW89ZnVuY3Rpb24odCxlLHIpe3ZhciBuO3JldHVybiB2b2lkIDA9PT10JiYodD17fSksbj1hdChlKT9lOltlXSxDZShuLGZ1bmN0aW9uKGUpe0NlKHIsZnVuY3Rpb24ocixuKXt1ZSh0LGUrXCIuXCIrbixyKX0pfSksdH0sdW89W1wiaW5oZXJpdFwiLFwiZGVmYXVsdFwiLFwic2VyaWZcIixcInNhbnMtc2VyaWZcIixcIm1vbm9zcGFjZVwiLFwiZmFudGFzeVwiLFwiY3Vyc2l2ZVwiLFwiLWFwcGxlLXN5c3RlbVwiXSxjbz1mdW5jdGlvbih0KXtyZXR1cm4tMSE9PXVvLmluZGV4T2YodCk/dDpcIidcIit0K1wiJ1wifTt2YXIgbG8sZm89aihmdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZGVmYXVsdD1cImh0bWx7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfWJvZHl7bWFyZ2luOjB9YXJ0aWNsZSxhc2lkZSxkZXRhaWxzLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsbWFpbixtZW51LG5hdixzZWN0aW9uLHN1bW1hcnl7ZGlzcGxheTpibG9ja31hdWRpbyxjYW52YXMscHJvZ3Jlc3MsdmlkZW97ZGlzcGxheTppbmxpbmUtYmxvY2t9YXVkaW86bm90KFtjb250cm9sc10pe2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1baGlkZGVuXSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6b2JqZWN0c31hOmFjdGl2ZSxhOmhvdmVye291dGxpbmUtd2lkdGg6MH1hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOm5vbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDppbmhlcml0O2ZvbnQtd2VpZ2h0OmJvbGRlcn1kZm57Zm9udC1zdHlsZTppdGFsaWN9aDF7Zm9udC1zaXplOjJlbTttYXJnaW46LjY3ZW0gMH1tYXJre2JhY2tncm91bmQtY29sb3I6I2ZmMDtjb2xvcjojMDAwfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1pbWd7Ym9yZGVyLXN0eWxlOm5vbmV9c3ZnOm5vdCg6cm9vdCl7b3ZlcmZsb3c6aGlkZGVufWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1maWd1cmV7bWFyZ2luOjFlbSA0MHB4fWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjA7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQ6aW5oZXJpdDttYXJnaW46MH1vcHRncm91cHtmb250LXdlaWdodDo3MDB9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfVt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbixodG1sIFt0eXBlPWJ1dHRvbl17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9W3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxbdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyxidXR0b246LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7Ym9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7bWFyZ2luOjAgMnB4O3BhZGRpbmc6LjM1ZW0gLjYyNWVtIC43NWVtfWxlZ2VuZHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3JtYWx9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0b31bdHlwZT1jaGVja2JveF0sW3R5cGU9cmFkaW9de2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfVt0eXBlPXNlYXJjaF17LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZDtvdXRsaW5lLW9mZnNldDotMnB4fVt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6aW5oZXJpdDtvcGFjaXR5Oi41NH06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fVwifSksc289KGxvPWZvKSYmbG8uX19lc01vZHVsZSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxvLFwiZGVmYXVsdFwiKT9sby5kZWZhdWx0OmxvLHBvPWZ1bmN0aW9uKHQpe3JldHVybiBpbyh0LGZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gdCs9citcIntcIixDZShlLGZ1bmN0aW9uKGUscil7aWYoSChlKSl7dmFyIG49e307bltyXT1lLHQrPXBvKG4pfWVsc2V7dmFyIG89ZnVuY3Rpb24odCxlKXtpZihcInN0cmluZ1wiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBzdHJpbmdcIik7cmV0dXJuIHQucmVwbGFjZSgvKFthLXpcXGRdKShbQS1aXSkvZyxcIiQxXCIrKGU9dm9pZCAwPT09ZT9cIl9cIjplKStcIiQyXCIpLnJlcGxhY2UoLyhbQS1aXSspKFtBLVpdW2EtelxcZF0rKS9nLFwiJDFcIitlK1wiJDJcIikudG9Mb3dlckNhc2UoKX0ocixcIi1cIikrXCI6XCIrZStcIjtcIjtbXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl0uZm9yRWFjaChmdW5jdGlvbih0KXtyLnNsaWNlKDAsdC5sZW5ndGgpPT09dCYmKG89XCItXCIrbyl9KSx0Kz1vfX0pLHQrPVwifVwifSxcIlwiKX07bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGUscixhLHUsbD1pKHt9LHtiYXNlRm9udFNpemU6XCIxNnB4XCIsYmFzZUxpbmVIZWlnaHQ6MS40NSxoZWFkZXJMaW5lSGVpZ2h0OjEuMSxzY2FsZVJhdGlvOjIsZ29vZ2xlRm9udHM6W10saGVhZGVyRm9udEZhbWlseTpbXCItYXBwbGUtc3lzdGVtXCIsXCJCbGlua01hY1N5c3RlbUZvbnRcIixcIlNlZ29lIFVJXCIsXCJSb2JvdG9cIixcIk94eWdlblwiLFwiVWJ1bnR1XCIsXCJDYW50YXJlbGxcIixcIkZpcmEgU2Fuc1wiLFwiRHJvaWQgU2Fuc1wiLFwiSGVsdmV0aWNhIE5ldWVcIixcInNhbnMtc2VyaWZcIl0sYm9keUZvbnRGYW1pbHk6W1wiZ2VvcmdpYVwiLFwic2VyaWZcIl0saGVhZGVyQ29sb3I6XCJpbmhlcml0XCIsYm9keUNvbG9yOlwiaHNsYSgwLDAlLDAlLDAuOClcIixoZWFkZXJXZWlnaHQ6XCJib2xkXCIsYm9keVdlaWdodDpcIm5vcm1hbFwiLGJvbGRXZWlnaHQ6XCJib2xkXCIsaW5jbHVkZU5vcm1hbGl6ZTohMCxibG9ja01hcmdpbkJvdHRvbToxfSx0KSxkPShlPWwscj1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHApKSxhPU9iamVjdC5hc3NpZ24oe30scixlKSx1PWMoYS5iYXNlRm9udFNpemUpLGYoYS5iYXNlTGluZUhlaWdodCk/KHModShhLmJhc2VGb250U2l6ZSxcInB4XCIpKSxhLmJhc2VMaW5lSGVpZ2h0SW5QeD11KGEuYmFzZUxpbmVIZWlnaHQsXCJweFwiKSk6YS5iYXNlTGluZUhlaWdodEluUHg9cyhhLmJhc2VGb250U2l6ZSkqYS5iYXNlTGluZUhlaWdodCtcInB4XCIse3JoeXRobTpoKGEpLGVzdGFibGlzaEJhc2VsaW5lOmZ1bmN0aW9uKCl7cmV0dXJuIGMoKHQ9YSkuYmFzZUZvbnRTaXplKSx7Zm9udFNpemU6cyh0LmJhc2VGb250U2l6ZSkvMTYqMTAwK1wiJVwiLGxpbmVIZWlnaHQ6dC5iYXNlTGluZUhlaWdodC50b1N0cmluZygpfTt2YXIgdH0sbGluZXNGb3JGb250U2l6ZTpmdW5jdGlvbih0KXtyZXR1cm4gdih0LGEpfSxhZGp1c3RGb250U2l6ZVRvOmZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gbnVsbD09ZSYmKGU9XCJhdXRvXCIpLGZ1bmN0aW9uKHQsZSxyLG4pe251bGw9PXImJihyPW4uYmFzZUZvbnRTaXplKSxcIiVcIj09PWYodCkmJih0PXMobi5iYXNlRm9udFNpemUpKihzKHQpLzEwMCkrXCJweFwiKTt2YXIgbz1jKG4uYmFzZUZvbnRTaXplKTt0PW8odCxcInB4XCIscj1vKHIsXCJweFwiKSk7dmFyIGk9aChuKTtyZXR1cm5cImF1dG9cIj09PWUmJihlPXYodCxuKSkse2ZvbnRTaXplOm8odCxuLnJoeXRobVVuaXQsciksbGluZUhlaWdodDppKGUscil9fSh0LGUscixhKX19KTtyZXR1cm4gZC5zY2FsZT1mdW5jdGlvbih0KXt2YXIgZT1wYXJzZUludChsLmJhc2VGb250U2l6ZSwxMCkscj1mdW5jdGlvbih0LGUpe3ZhciByO3JldHVybiBudWxsPT10JiYodD0wKSxudWxsPT1lJiYoZT1cImdvbGRlblwiKSxyPW4oZSk/ZTpudWxsIT1vW2VdP29bZV06by5nb2xkZW4sTWF0aC5wb3cocix0KX0odCxsLnNjYWxlUmF0aW8pKmUrXCJweFwiO3JldHVybiBkLmFkanVzdEZvbnRTaXplVG8ocil9LE9iamVjdC5hc3NpZ24oe30se29wdGlvbnM6bH0sZCx7Y3JlYXRlU3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9TdHJpbmcoKX0sdG9KU09OOmZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7dmFyIHI9e30sbj10LmVzdGFibGlzaEJhc2VsaW5lKCk7cj1hbyhyLFwiaHRtbFwiLHtmb250Om4uZm9udFNpemUrXCIvXCIrbi5saW5lSGVpZ2h0K1wiIFwiK2UuYm9keUZvbnRGYW1pbHkubWFwKGNvKS5qb2luKFwiLFwiKSxib3hTaXppbmc6XCJib3JkZXItYm94XCIsb3ZlcmZsb3dZOlwic2Nyb2xsXCJ9KSxyPWFvKHIsW1wiKlwiLFwiKjpiZWZvcmVcIixcIio6YWZ0ZXJcIl0se2JveFNpemluZzpcImluaGVyaXRcIn0pLHI9YW8ocixcImJvZHlcIix7Y29sb3I6ZS5ib2R5Q29sb3IsZm9udEZhbWlseTplLmJvZHlGb250RmFtaWx5Lm1hcChjbykuam9pbihcIixcIiksZm9udFdlaWdodDplLmJvZHlXZWlnaHQsd29yZFdyYXA6XCJicmVhay13b3JkXCIsZm9udEtlcm5pbmc6XCJub3JtYWxcIixNb3pGb250RmVhdHVyZVNldHRpbmdzOidcImtlcm5cIiwgXCJsaWdhXCIsIFwiY2xpZ1wiLCBcImNhbHRcIicsbXNGb250RmVhdHVyZVNldHRpbmdzOidcImtlcm5cIiwgXCJsaWdhXCIsIFwiY2xpZ1wiLCBcImNhbHRcIicsV2Via2l0Rm9udEZlYXR1cmVTZXR0aW5nczonXCJrZXJuXCIsIFwibGlnYVwiLCBcImNsaWdcIiwgXCJjYWx0XCInLGZvbnRGZWF0dXJlU2V0dGluZ3M6J1wia2VyblwiLCBcImxpZ2FcIiwgXCJjbGlnXCIsIFwiY2FsdFwiJ30pLHI9YW8ocixcImltZ1wiLHttYXhXaWR0aDpcIjEwMCVcIn0pO3ZhciBvPVwiXCI7bz0kZShlLmJsb2NrTWFyZ2luQm90dG9tKT90LnJoeXRobShlLmJsb2NrTWFyZ2luQm90dG9tKTpEZShlLmJsb2NrTWFyZ2luQm90dG9tKT9lLmJsb2NrTWFyZ2luQm90dG9tOnQucmh5dGhtKDEpLHI9YW8ocixbXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZ3JvdXBcIixcInVsXCIsXCJvbFwiLFwiZGxcIixcImRkXCIsXCJwXCIsXCJmaWd1cmVcIixcInByZVwiLFwidGFibGVcIixcImZpZWxkc2V0XCIsXCJibG9ja3F1b3RlXCIsXCJmb3JtXCIsXCJub3NjcmlwdFwiLFwiaWZyYW1lXCIsXCJpbWdcIixcImhyXCIsXCJhZGRyZXNzXCJdLHttYXJnaW5MZWZ0OjAsbWFyZ2luUmlnaHQ6MCxtYXJnaW5Ub3A6MCxwYWRkaW5nQm90dG9tOjAscGFkZGluZ0xlZnQ6MCxwYWRkaW5nUmlnaHQ6MCxwYWRkaW5nVG9wOjAsbWFyZ2luQm90dG9tOm99KSxyPWFvKHIsXCJibG9ja3F1b3RlXCIse21hcmdpblJpZ2h0OnQucmh5dGhtKDEpLG1hcmdpbkJvdHRvbTpvLG1hcmdpbkxlZnQ6dC5yaHl0aG0oMSl9KSxyPWFvKHIsW1wiYlwiLFwic3Ryb25nXCIsXCJkdFwiLFwidGhcIl0se2ZvbnRXZWlnaHQ6ZS5ib2xkV2VpZ2h0fSkscj1hbyhyLFwiaHJcIix7YmFja2dyb3VuZDp5KDgwKSxib3JkZXI6XCJub25lXCIsaGVpZ2h0OlwiMXB4XCIsbWFyZ2luQm90dG9tOlwiY2FsYyhcIitvK1wiIC0gMXB4KVwifSkscj1hbyhyLFtcIm9sXCIsXCJ1bFwiXSx7bGlzdFN0eWxlUG9zaXRpb246XCJvdXRzaWRlXCIsbGlzdFN0eWxlSW1hZ2U6XCJub25lXCIsbWFyZ2luTGVmdDp0LnJoeXRobSgxKX0pLHI9YW8ocixcImxpXCIse21hcmdpbkJvdHRvbTpcImNhbGMoXCIrbytcIiAvIDIpXCJ9KSxyPWFvKHIsW1wib2wgbGlcIixcInVsIGxpXCJdLHtwYWRkaW5nTGVmdDowfSkscj1hbyhyLFtcImxpID4gb2xcIixcImxpID4gdWxcIl0se21hcmdpbkxlZnQ6dC5yaHl0aG0oMSksbWFyZ2luQm90dG9tOlwiY2FsYyhcIitvK1wiIC8gMilcIixtYXJnaW5Ub3A6XCJjYWxjKFwiK28rXCIgLyAyKVwifSkscj1hbyhyLFtcImJsb2NrcXVvdGUgKjpsYXN0LWNoaWxkXCIsXCJsaSAqOmxhc3QtY2hpbGRcIixcInAgKjpsYXN0LWNoaWxkXCJdLHttYXJnaW5Cb3R0b206MH0pLHI9YW8ocixbXCJsaSA+IHBcIl0se21hcmdpbkJvdHRvbTpcImNhbGMoXCIrbytcIiAvIDIpXCJ9KSxyPWFvKHIsW1wiY29kZVwiLFwia2JkXCIsXCJwcmVcIixcInNhbXBcIl0sT2JqZWN0LmFzc2lnbih7fSx0LmFkanVzdEZvbnRTaXplVG8oXCI4NSVcIikpKSwocj1hbyhyLFtcImFiYnJcIixcImFjcm9ueW1cIl0se2JvcmRlckJvdHRvbTpcIjFweCBkb3R0ZWQgXCIreSg1MCksY3Vyc29yOlwiaGVscFwifSkpW1wiYWJiclt0aXRsZV1cIl09e2JvcmRlckJvdHRvbTpcIjFweCBkb3R0ZWQgXCIreSg1MCksY3Vyc29yOlwiaGVscFwiLHRleHREZWNvcmF0aW9uOlwibm9uZVwifSxyPWFvKHIsW1widGFibGVcIl0sT2JqZWN0LmFzc2lnbih7fSx0LmFkanVzdEZvbnRTaXplVG8oZS5iYXNlRm9udFNpemUpLHtib3JkZXJDb2xsYXBzZTpcImNvbGxhcHNlXCIsd2lkdGg6XCIxMDAlXCJ9KSkscj1hbyhyLFtcInRoZWFkXCJdLHt0ZXh0QWxpZ246XCJsZWZ0XCJ9KSxyPWFvKHIsW1widGQsdGhcIl0se3RleHRBbGlnbjpcImxlZnRcIixib3JkZXJCb3R0b206XCIxcHggc29saWQgXCIreSg4OCksZm9udEZlYXR1cmVTZXR0aW5nczonXCJ0bnVtXCInLE1vekZvbnRGZWF0dXJlU2V0dGluZ3M6J1widG51bVwiJyxtc0ZvbnRGZWF0dXJlU2V0dGluZ3M6J1widG51bVwiJyxXZWJraXRGb250RmVhdHVyZVNldHRpbmdzOidcInRudW1cIicscGFkZGluZ0xlZnQ6dC5yaHl0aG0oMi8zKSxwYWRkaW5nUmlnaHQ6dC5yaHl0aG0oMi8zKSxwYWRkaW5nVG9wOnQucmh5dGhtKC41KSxwYWRkaW5nQm90dG9tOlwiY2FsYyhcIit0LnJoeXRobSguNSkrXCIgLSAxcHgpXCJ9KSxyPWFvKHIsXCJ0aDpmaXJzdC1jaGlsZCx0ZDpmaXJzdC1jaGlsZFwiLHtwYWRkaW5nTGVmdDowfSkscj1hbyhyLFwidGg6bGFzdC1jaGlsZCx0ZDpsYXN0LWNoaWxkXCIse3BhZGRpbmdSaWdodDowfSkscj1hbyhyLFtcImgxXCIsXCJoMlwiLFwiaDNcIixcImg0XCIsXCJoNVwiLFwiaDZcIl0se2NvbG9yOmUuaGVhZGVyQ29sb3IsZm9udEZhbWlseTplLmhlYWRlckZvbnRGYW1pbHkubWFwKGNvKS5qb2luKFwiLFwiKSxmb250V2VpZ2h0OmUuaGVhZGVyV2VpZ2h0LHRleHRSZW5kZXJpbmc6XCJvcHRpbWl6ZUxlZ2liaWxpdHlcIn0pO3ZhciBpPXQuc2NhbGUoMSksYT10LnNjYWxlKC42KSx1PXQuc2NhbGUoLjQpLGM9dC5zY2FsZSgwKSxsPXQuc2NhbGUoLS4yKSxmPXQuc2NhbGUoLS4zKTtyZXR1cm4gQ2UoW2ksYSx1LGMsbCxmXSxmdW5jdGlvbih0LG4pe3I9dWUocixcImhcIisobisxKStcIi5mb250U2l6ZVwiLHQuZm9udFNpemUpLHI9dWUocixcImhcIisobisxKStcIi5saW5lSGVpZ2h0XCIsZS5oZWFkZXJMaW5lSGVpZ2h0KX0pLGF0KGUucGx1Z2lucykmJihyPWlvKGUucGx1Z2lucyxmdW5jdGlvbihyLG4pe3JldHVybiBFcihyLG4odCxlLHIpKX0scikpLGUub3ZlcnJpZGVTdHlsZXMmJiQoZS5vdmVycmlkZVN0eWxlcykmJihyPUVyKHIsZS5vdmVycmlkZVN0eWxlcyh0LGUscikpKSxlLm92ZXJyaWRlVGhlbWVTdHlsZXMmJiQoZS5vdmVycmlkZVRoZW1lU3R5bGVzKSYmKHI9RXIocixlLm92ZXJyaWRlVGhlbWVTdHlsZXModCxlLHIpKSkscn0oZCxsKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCxlLHIpe3ZhciBuPXBvKHIpO3JldHVybiBlLmluY2x1ZGVOb3JtYWxpemUmJihuPVwiXCIrc28rbiksbn0oMCxsLHRoaXMudG9KU09OKCkpfSxpbmplY3RTdHlsZXM6ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBvZ3JhcGh5LmpzXCIpKWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwb2dyYXBoeS5qc1wiKS5pbm5lckhUTUw9dGhpcy50b1N0cmluZygpO2Vsc2V7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3QuaWQ9XCJ0eXBvZ3JhcGh5LmpzXCIsdC5pbm5lckhUTUw9dGhpcy50b1N0cmluZygpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodCl9fX0pfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdHlwb2dyYXBoeS9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2dyYXlQZXJjZW50YWdlID0gcmVxdWlyZSgnZ3JheS1wZXJjZW50YWdlJyk7XG5cbnZhciBfZ3JheVBlcmNlbnRhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JheVBlcmNlbnRhZ2UpO1xuXG52YXIgX3R5cG9ncmFwaHlCcmVha3BvaW50Q29uc3RhbnRzID0gcmVxdWlyZSgndHlwb2dyYXBoeS1icmVha3BvaW50LWNvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgdGhlbWUgPSB7XG4gIHRpdGxlOiAnRG9lbGdlcicsXG4gIGJhc2VGb250U2l6ZTogJzE3cHgnLFxuICBiYXNlTGluZUhlaWdodDogMS40NSxcbiAgYmxvY2tNYXJnaW5Cb3R0b206IDAuOCxcbiAgZ29vZ2xlRm9udHM6IFt7XG4gICAgbmFtZTogJ0Fydm8nLFxuICAgIHN0eWxlczogWyc3MDAnXVxuICB9LCB7XG4gICAgbmFtZTogJ0NhYmluJyxcbiAgICBzdHlsZXM6IFsnNDAwJywgJzQwMGknLCAnNzAwJ11cbiAgfV0sXG4gIGhlYWRlckZvbnRGYW1pbHk6IFsnQXJ2bycsICdzYW5zLXNlcmlmJ10sXG4gIGJvZHlGb250RmFtaWx5OiBbJ0NhYmluJywgJ3NlcmlmJ10sXG4gIGhlYWRlckNvbG9yOiAnaHNsYSgwLDAlLDAlLDAuOSknLFxuICBib2R5Q29sb3I6ICdoc2xhKDAsMCUsMCUsMC44KScsXG4gIGhlYWRlcldlaWdodDogJzcwMCcsXG4gIGJvZHlXZWlnaHQ6IDQwMCxcbiAgYm9sZFdlaWdodDogNzAwLFxuICBvdmVycmlkZVN0eWxlczogZnVuY3Rpb24gb3ZlcnJpZGVTdHlsZXMoX3JlZiwgb3B0aW9ucykge1xuICAgIHZhciBhZGp1c3RGb250U2l6ZVRvID0gX3JlZi5hZGp1c3RGb250U2l6ZVRvLFxuICAgICAgICBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICAgIHJoeXRobSA9IF9yZWYucmh5dGhtO1xuXG4gICAgdmFyIGxpbmtDb2xvciA9ICcjZmY0ODNiJztcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHtcbiAgICAgIGE6IHtcbiAgICAgICAgY29sb3I6IGxpbmtDb2xvcixcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgdGV4dFNoYWRvdzogJy4wM2VtIDAgI2ZmZiwtLjAzZW0gMCAjZmZmLDAgLjAzZW0gI2ZmZiwwIC0uMDNlbSAjZmZmLC4wNmVtIDAgI2ZmZiwtLjA2ZW0gMCAjZmZmLC4wOWVtIDAgI2ZmZiwtLjA5ZW0gMCAjZmZmLC4xMmVtIDAgI2ZmZiwtLjEyZW0gMCAjZmZmLC4xNWVtIDAgI2ZmZiwtLjE1ZW0gMCAjZmZmJywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDApIDFweCwgJyArIGxpbmtDb2xvciArICcgMXB4LCAnICsgbGlua0NvbG9yICsgJyAycHgsIHJnYmEoMCwgMCwgMCwgMCkgMnB4KScgfSxcbiAgICAgICdhOmhvdmVyLGE6YWN0aXZlJzoge1xuICAgICAgICB0ZXh0U2hhZG93OiAnbm9uZScsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJ2gxLGgyLGgzLGg0LGg1LGg2Jzoge1xuICAgICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICAgIG1hcmdpblRvcDogcmh5dGhtKDEuNSksXG4gICAgICAgIG1hcmdpbkJvdHRvbTogcmh5dGhtKDAuNSlcbiAgICAgIH0sXG4gICAgICAvLyBCbG9ja3F1b3RlIHN0eWxlcy5cbiAgICAgIGJsb2NrcXVvdGU6IF9leHRlbmRzKHt9LCBzY2FsZSgxIC8gNSksIHtcbiAgICAgICAgYm9yZGVyTGVmdDogcmh5dGhtKDYgLyAxNikgKyAnIHNvbGlkICcgKyBsaW5rQ29sb3IsXG4gICAgICAgIGNvbG9yOiAoMCwgX2dyYXlQZXJjZW50YWdlMi5kZWZhdWx0KSgzNSksXG4gICAgICAgIHBhZGRpbmdMZWZ0OiByaHl0aG0oMTAgLyAxNiksXG4gICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAwXG4gICAgICB9KSxcbiAgICAgICdibG9ja3F1b3RlID4gOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogMFxuICAgICAgfSxcbiAgICAgICdibG9ja3F1b3RlIGNpdGUnOiBfZXh0ZW5kcyh7fSwgYWRqdXN0Rm9udFNpemVUbyhvcHRpb25zLmJhc2VGb250U2l6ZSksIHtcbiAgICAgICAgY29sb3I6IG9wdGlvbnMuYm9keUNvbG9yLFxuICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgICAgICBmb250V2VpZ2h0OiBvcHRpb25zLmJvZHlXZWlnaHRcbiAgICAgIH0pLFxuICAgICAgJ2Jsb2NrcXVvdGUgY2l0ZTpiZWZvcmUnOiB7XG4gICAgICAgIGNvbnRlbnQ6ICdcIuKAlCBcIidcbiAgICAgIH1cbiAgICB9LCBfdHlwb2dyYXBoeUJyZWFrcG9pbnRDb25zdGFudHMuTU9CSUxFX01FRElBX1FVRVJZLCB7XG4gICAgICBibG9ja3F1b3RlOiB7XG4gICAgICAgIGJvcmRlckxlZnQ6IHJoeXRobSgzIC8gMTYpICsgJyBzb2xpZCAnICsgbGlua0NvbG9yLFxuICAgICAgICBwYWRkaW5nTGVmdDogcmh5dGhtKDkgLyAxNiksXG4gICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgIG1hcmdpbkxlZnQ6IHJoeXRobSgtMyAvIDQpLFxuICAgICAgICBtYXJnaW5SaWdodDogMFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0aGVtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90eXBvZ3JhcGh5LXRoZW1lLWRvZWxnZXIvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaWdodG5lc3MsIGh1ZSwgZGFya0JhY2tncm91bmQpIHtcbiAgaWYgKHR5cGVvZiBodWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBodWUgPSAwO1xuICB9XG4gIGlmICh0eXBlb2YgZGFya0JhY2tncm91bmQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBkYXJrQmFja2dyb3VuZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQ29udmVydCBuYW1lZCBodWVzIGludG8gbnVtZXJpYyBsaWdodG5lc3MgdmFsdWUuXG4gIGlmIChodWUgPT09IFwiY29vbFwiKSB7XG4gICAgaHVlID0gMjM3O1xuICB9XG4gIGVsc2UgaWYgKGh1ZSA9PT0gXCJzbGF0ZVwiKSB7XG4gICAgaHVlID0gMTIyO1xuICB9XG4gIGVsc2UgaWYgKGh1ZSA9PT0gXCJ3YXJtXCIpIHtcbiAgICBodWUgPSA2OTtcbiAgfVxuXG4gIGlmICghaXNOdW1lcmljKGh1ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJIdWUgaXMgbm90IGEgbnVtYmVyXCIpO1xuICB9XG5cbiAgaWYgKCFpc051bWVyaWMobGlnaHRuZXNzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkxpZ2h0bmVzcyBpcyBub3QgYSBudW1iZXJcIik7XG4gIH1cblxuICBpZiAobGlnaHRuZXNzID4gMTAwKSB7XG4gICAgbGlnaHRuZXNzID0gMTAwO1xuICB9XG4gIGlmIChsaWdodG5lc3MgPCAwKSB7XG4gICAgbGlnaHRuZXNzID0gMDtcbiAgfVxuXG4gIHZhciBzYXR1cmF0aW9uID0gMDtcbiAgaWYgKGh1ZSAhPT0gMCkge1xuICAgIHZhciBhID0gMTkuOTI5Nzg7XG4gICAgdmFyIGIgPSAtMC4zNjUxNzU5O1xuICAgIHZhciBjID0gMC4wMDE3MzcyMTQ7XG4gICAgc2F0dXJhdGlvbiA9IGEgKyBiICogbGlnaHRuZXNzICsgYyAqIE1hdGgucG93KGxpZ2h0bmVzcywgMik7XG4gIH1cblxuICB2YXIgb3BhY2l0eSA9IDBcbiAgaWYgKGRhcmtCYWNrZ3JvdW5kKSB7XG4gICAgb3BhY2l0eSA9IGxpZ2h0bmVzcyAvIDEwMFxuICAgIGxpZ2h0bmVzcyA9ICcxMDAlLCdcbiAgfSBlbHNlIHtcbiAgICBvcGFjaXR5ID0gKDEwMCAtIGxpZ2h0bmVzcykgLyAxMDBcbiAgICBsaWdodG5lc3MgPSAnMCUsJ1xuICB9XG5cbiAgcmV0dXJuIFwiaHNsYShcIiArIGh1ZSArIFwiLFwiICsgc2F0dXJhdGlvbiArIFwiJSxcIiArIGxpZ2h0bmVzcyArIG9wYWNpdHkgKyBcIilcIjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ncmF5LXBlcmNlbnRhZ2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgTEFSR0VSX0RJU1BMQVlfV0lEVEggPSBleHBvcnRzLkxBUkdFUl9ESVNQTEFZX1dJRFRIID0gJzE2MDBweCc7XG52YXIgTEFSR0VfRElTUExBWV9XSURUSCA9IGV4cG9ydHMuTEFSR0VfRElTUExBWV9XSURUSCA9ICcxMjgwcHgnO1xudmFyIERFRkFVTFRfV0lEVEggPSBleHBvcnRzLkRFRkFVTFRfV0lEVEggPSAnOTgwcHgnO1xudmFyIFRBQkxFVF9XSURUSCA9IGV4cG9ydHMuVEFCTEVUX1dJRFRIID0gJzc2OHB4JztcbnZhciBNT0JJTEVfV0lEVEggPSBleHBvcnRzLk1PQklMRV9XSURUSCA9ICc0ODBweCc7XG5cbnZhciBMQVJHRVJfRElTUExBWV9NRURJQV9RVUVSWSA9IGV4cG9ydHMuTEFSR0VSX0RJU1BMQVlfTUVESUFfUVVFUlkgPSAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE2MDBweCknO1xudmFyIExBUkdFX0RJU1BMQVlfTUVESUFfUVVFUlkgPSBleHBvcnRzLkxBUkdFX0RJU1BMQVlfTUVESUFfUVVFUlkgPSAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCknO1xudmFyIERFRkFVTFRfTUVESUFfUVVFUlkgPSBleHBvcnRzLkRFRkFVTFRfTUVESUFfUVVFUlkgPSAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk4MHB4KSc7XG52YXIgVEFCTEVUX01FRElBX1FVRVJZID0gZXhwb3J0cy5UQUJMRVRfTUVESUFfUVVFUlkgPSAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSc7XG52YXIgTU9CSUxFX01FRElBX1FVRVJZID0gZXhwb3J0cy5NT0JJTEVfTUVESUFfUVVFUlkgPSAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KSc7XG5cbnZhciBNSU5fTEFSR0VSX0RJU1BMQVlfTUVESUFfUVVFUlkgPSBleHBvcnRzLk1JTl9MQVJHRVJfRElTUExBWV9NRURJQV9RVUVSWSA9ICdAbWVkaWEgKG1pbi13aWR0aDoxNjAwcHgpJztcbnZhciBNSU5fTEFSR0VfRElTUExBWV9NRURJQV9RVUVSWSA9IGV4cG9ydHMuTUlOX0xBUkdFX0RJU1BMQVlfTUVESUFfUVVFUlkgPSAnQG1lZGlhIChtaW4td2lkdGg6MTI4MHB4KSc7XG52YXIgTUlOX0RFRkFVTFRfTUVESUFfUVVFUlkgPSBleHBvcnRzLk1JTl9ERUZBVUxUX01FRElBX1FVRVJZID0gJ0BtZWRpYSAobWluLXdpZHRoOjk4MHB4KSc7XG52YXIgTUlOX1RBQkxFVF9NRURJQV9RVUVSWSA9IGV4cG9ydHMuTUlOX1RBQkxFVF9NRURJQV9RVUVSWSA9ICdAbWVkaWEgKG1pbi13aWR0aDo3NjhweCknO1xudmFyIE1JTl9NT0JJTEVfTUVESUFfUVVFUlkgPSBleHBvcnRzLk1JTl9NT0JJTEVfTUVESUFfUVVFUlkgPSAnQG1lZGlhIChtaW4td2lkdGg6NDgwcHgpJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90eXBvZ3JhcGh5LWJyZWFrcG9pbnQtY29uc3RhbnRzL2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgKiBCb290c3RyYXAgdG9vbHRpcC5qcyB2NC4yLjEgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAxOCBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ3BvcHBlci5qcycpLCByZXF1aXJlKCcuL3V0aWwuanMnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydqcXVlcnknLCAncG9wcGVyLmpzJywgJy4vdXRpbC5qcyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwuVG9vbHRpcCA9IGZhY3RvcnkoZ2xvYmFsLmpRdWVyeSxnbG9iYWwuUG9wcGVyLGdsb2JhbC5VdGlsKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoJCxQb3BwZXIsVXRpbCkgeyAndXNlIHN0cmljdCc7XG5cbiAgJCA9ICQgJiYgJC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gJFsnZGVmYXVsdCddIDogJDtcbiAgUG9wcGVyID0gUG9wcGVyICYmIFBvcHBlci5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gUG9wcGVyWydkZWZhdWx0J10gOiBQb3BwZXI7XG4gIFV0aWwgPSBVdGlsICYmIFV0aWwuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFV0aWxbJ2RlZmF1bHQnXSA6IFV0aWw7XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FID0gJ3Rvb2x0aXAnO1xuICB2YXIgVkVSU0lPTiA9ICc0LjIuMSc7XG4gIHZhciBEQVRBX0tFWSA9ICdicy50b29sdGlwJztcbiAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgQ0xBU1NfUFJFRklYID0gJ2JzLXRvb2x0aXAnO1xuICB2YXIgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgQ0xBU1NfUFJFRklYICsgXCJcXFxcUytcIiwgJ2cnKTtcbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICAgIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICAgIHRyaWdnZXI6ICdzdHJpbmcnLFxuICAgIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgICBodG1sOiAnYm9vbGVhbicsXG4gICAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgb2Zmc2V0OiAnKG51bWJlcnxzdHJpbmcpJyxcbiAgICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50OiAnKHN0cmluZ3xhcnJheSknLFxuICAgIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KSdcbiAgfTtcbiAgdmFyIEF0dGFjaG1lbnRNYXAgPSB7XG4gICAgQVVUTzogJ2F1dG8nLFxuICAgIFRPUDogJ3RvcCcsXG4gICAgUklHSFQ6ICdyaWdodCcsXG4gICAgQk9UVE9NOiAnYm90dG9tJyxcbiAgICBMRUZUOiAnbGVmdCdcbiAgfTtcbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICdmbGlwJyxcbiAgICBib3VuZGFyeTogJ3Njcm9sbFBhcmVudCdcbiAgfTtcbiAgdmFyIEhvdmVyU3RhdGUgPSB7XG4gICAgU0hPVzogJ3Nob3cnLFxuICAgIE9VVDogJ291dCdcbiAgfTtcbiAgdmFyIEV2ZW50ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZLFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZLFxuICAgIElOU0VSVEVEOiBcImluc2VydGVkXCIgKyBFVkVOVF9LRVksXG4gICAgQ0xJQ0s6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSxcbiAgICBGT0NVU0lOOiBcImZvY3VzaW5cIiArIEVWRU5UX0tFWSxcbiAgICBGT0NVU09VVDogXCJmb2N1c291dFwiICsgRVZFTlRfS0VZLFxuICAgIE1PVVNFRU5URVI6IFwibW91c2VlbnRlclwiICsgRVZFTlRfS0VZLFxuICAgIE1PVVNFTEVBVkU6IFwibW91c2VsZWF2ZVwiICsgRVZFTlRfS0VZXG4gIH07XG4gIHZhciBDbGFzc05hbWUgPSB7XG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93J1xuICB9O1xuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgVE9PTFRJUDogJy50b29sdGlwJyxcbiAgICBUT09MVElQX0lOTkVSOiAnLnRvb2x0aXAtaW5uZXInLFxuICAgIEFSUk9XOiAnLmFycm93J1xuICB9O1xuICB2YXIgVHJpZ2dlciA9IHtcbiAgICBIT1ZFUjogJ2hvdmVyJyxcbiAgICBGT0NVUzogJ2ZvY3VzJyxcbiAgICBDTElDSzogJ2NsaWNrJyxcbiAgICBNQU5VQUw6ICdtYW51YWwnXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIFRvb2x0aXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb29sdGlwKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICAgICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKTtcbiAgICAgIH0gLy8gcHJpdmF0ZVxuXG5cbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7IC8vIFByb3RlY3RlZFxuXG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcblxuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBUb29sdGlwLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZUVuYWJsZWQgPSBmdW5jdGlvbiB0b2dnbGVFbmFibGVkKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuICAgICAgICB2YXIgY29udGV4dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrO1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub2ZmKCdoaWRlLmJzLm1vZGFsJyk7XG5cbiAgICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNFbmFibGVkID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKTtcblxuICAgICAgaWYgKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IFV0aWwuZmluZFNoYWRvd1Jvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdmFyIGlzSW5UaGVEb20gPSAkLmNvbnRhaW5zKHNoYWRvd1Jvb3QgIT09IG51bGwgPyBzaGFkb3dSb290IDogdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICAgIHZhciB0aXBJZCA9IFV0aWwuZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSk7XG4gICAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpO1xuICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5GQURFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLmVsZW1lbnQpIDogdGhpcy5jb25maWcucGxhY2VtZW50O1xuXG4gICAgICAgIHZhciBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpO1xuXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9nZXRDb250YWluZXIoKTtcblxuICAgICAgICAkKHRpcCkuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcblxuICAgICAgICBpZiAoISQuY29udGFpbnModGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLnRpcCkpIHtcbiAgICAgICAgICAkKHRpcCkuYXBwZW5kVG8oY29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpO1xuICAgICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHRoaXMuZWxlbWVudCwgdGlwLCB7XG4gICAgICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgIG9mZnNldDogdGhpcy5jb25maWcub2Zmc2V0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgICBiZWhhdmlvcjogdGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgICBlbGVtZW50OiBTZWxlY3Rvci5BUlJPV1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5jb25maWcuYm91bmRhcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZShkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5vcmlnaW5hbFBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgX3RoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpOyAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuX2ZpeFRyYW5zaXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcHJldkhvdmVyU3RhdGUgPSBfdGhpcy5faG92ZXJTdGF0ZTtcbiAgICAgICAgICBfdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgJChfdGhpcy5lbGVtZW50KS50cmlnZ2VyKF90aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKTtcblxuICAgICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICAgIF90aGlzLl9sZWF2ZShudWxsLCBfdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLnRpcCk7XG4gICAgICAgICAgJCh0aGlzLnRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGlmIChfdGhpczIuX2hvdmVyU3RhdGUgIT09IEhvdmVyU3RhdGUuU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuX2NsZWFuVGlwQ2xhc3MoKTtcblxuICAgICAgICBfdGhpczIuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcblxuICAgICAgICAkKF90aGlzMi5lbGVtZW50KS50cmlnZ2VyKF90aGlzMi5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pO1xuXG4gICAgICAgIGlmIChfdGhpczIuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICAgIF90aGlzMi5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudCk7XG5cbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpOyAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuQ0xJQ0tdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuRk9DVVNdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuSE9WRVJdID0gZmFsc2U7XG5cbiAgICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKTtcbiAgICAgICAgJCh0aXApLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICB9O1xuXG4gICAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTsgLy8gUHJvdGVjdGVkXG5cblxuICAgIF9wcm90by5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5hZGRBdHRhY2htZW50Q2xhc3MgPSBmdW5jdGlvbiBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoQ0xBU1NfUFJFRklYICsgXCItXCIgKyBhdHRhY2htZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmdldFRpcEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRUaXBFbGVtZW50KCkge1xuICAgICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXTtcbiAgICAgIHJldHVybiB0aGlzLnRpcDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNldENvbnRlbnQgPSBmdW5jdGlvbiBzZXRDb250ZW50KCkge1xuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkKHRpcC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlRPT0xUSVBfSU5ORVIpKSwgdGhpcy5nZXRUaXRsZSgpKTtcbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSArIFwiIFwiICsgQ2xhc3NOYW1lLlNIT1cpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0RWxlbWVudENvbnRlbnQgPSBmdW5jdGlvbiBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbmZpZy5odG1sO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgICAvLyBDb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgICAgaWYgKGh0bWwpIHtcbiAgICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50W2h0bWwgPyAnaHRtbCcgOiAndGV4dCddKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTsgLy8gUHJpdmF0ZVxuXG5cbiAgICBfcHJvdG8uX2dldENvbnRhaW5lciA9IGZ1bmN0aW9uIF9nZXRDb250YWluZXIoKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICAgIH1cblxuICAgICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuY29uZmlnLmNvbnRhaW5lcikpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcy5jb25maWcuY29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQoZG9jdW1lbnQpLmZpbmQodGhpcy5jb25maWcuY29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRBdHRhY2htZW50ID0gZnVuY3Rpb24gX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV07XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0TGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLmNvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJyk7XG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgJChfdGhpczMuZWxlbWVudCkub24oX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCBfdGhpczMuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMudG9nZ2xlKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICAgIHZhciBldmVudEluID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/IF90aGlzMy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDogX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU47XG4gICAgICAgICAgdmFyIGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/IF90aGlzMy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDogX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUO1xuICAgICAgICAgICQoX3RoaXMzLmVsZW1lbnQpLm9uKGV2ZW50SW4sIF90aGlzMy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fZW50ZXIoZXZlbnQpO1xuICAgICAgICAgIH0pLm9uKGV2ZW50T3V0LCBfdGhpczMuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX2xlYXZlKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczMuZWxlbWVudCkge1xuICAgICAgICAgIF90aGlzMy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLmNvbmZpZywge1xuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpeFRpdGxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZml4VGl0bGUgPSBmdW5jdGlvbiBfZml4VGl0bGUoKSB7XG4gICAgICB2YXIgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2VudGVyID0gZnVuY3Rpb24gX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPVztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICAgIGNvbnRleHQuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9sZWF2ZSA9IGZ1bmN0aW9uIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KTtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLk9VVDtcblxuICAgICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9pc1dpdGhBY3RpdmVUcmlnZ2VyID0gZnVuY3Rpb24gX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgICBmb3IgKHZhciB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCwgJCh0aGlzLmVsZW1lbnQpLmRhdGEoKSwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldERlbGVnYXRlQ29uZmlnID0gZnVuY3Rpb24gX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgICAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gICAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29uZmlnW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2xlYW5UaXBDbGFzcyA9IGZ1bmN0aW9uIF9jbGVhblRpcENsYXNzKCkge1xuICAgICAgdmFyICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKTtcbiAgICAgIHZhciB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpO1xuXG4gICAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoKSB7XG4gICAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSA9IGZ1bmN0aW9uIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UocG9wcGVyRGF0YSkge1xuICAgICAgdmFyIHBvcHBlckluc3RhbmNlID0gcG9wcGVyRGF0YS5pbnN0YW5jZTtcbiAgICAgIHRoaXMudGlwID0gcG9wcGVySW5zdGFuY2UucG9wcGVyO1xuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKCk7XG5cbiAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQocG9wcGVyRGF0YS5wbGFjZW1lbnQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9maXhUcmFuc2l0aW9uID0gZnVuY3Rpb24gX2ZpeFRyYW5zaXRpb24oKSB7XG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB2YXIgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvbjtcblxuICAgICAgaWYgKHRpcC5nZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JykgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkZBREUpO1xuICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gaW5pdENvbmZpZ0FuaW1hdGlvbjtcbiAgICB9OyAvLyBTdGF0aWNcblxuXG4gICAgVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUb29sdGlwLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJOQU1FXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIE5BTUU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRBVEFfS0VZXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERBVEFfS0VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJFdmVudFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFdmVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRVZFTlRfS0VZXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEVWRU5UX0tFWTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFR5cGVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvb2x0aXA7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJC5mbltOQU1FXSA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXA7XG5cbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gVG9vbHRpcDtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvb2x0aXAuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC90b29sdGlwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gICogQm9vdHN0cmFwIHRhYi5qcyB2NC4yLjEgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gICogQ29weXJpZ2h0IDIwMTEtMjAxOCBUaGUgQm9vdHN0cmFwIEF1dGhvcnMgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ncmFwaHMvY29udHJpYnV0b3JzKVxuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJy4vdXRpbC5qcycpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2pxdWVyeScsICcuL3V0aWwuanMnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsLlRhYiA9IGZhY3RvcnkoZ2xvYmFsLmpRdWVyeSxnbG9iYWwuVXRpbCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCQsVXRpbCkgeyAndXNlIHN0cmljdCc7XG5cbiAgJCA9ICQgJiYgJC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gJFsnZGVmYXVsdCddIDogJDtcbiAgVXRpbCA9IFV0aWwgJiYgVXRpbC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gVXRpbFsnZGVmYXVsdCddIDogVXRpbDtcblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAndGFiJztcbiAgdmFyIFZFUlNJT04gPSAnNC4yLjEnO1xuICB2YXIgREFUQV9LRVkgPSAnYnMudGFiJztcbiAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gIHZhciBFdmVudCA9IHtcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSxcbiAgICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVksXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVksXG4gICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSxcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZXG4gIH07XG4gIHZhciBDbGFzc05hbWUgPSB7XG4gICAgRFJPUERPV05fTUVOVTogJ2Ryb3Bkb3duLW1lbnUnLFxuICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93J1xuICB9O1xuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgRFJPUERPV046ICcuZHJvcGRvd24nLFxuICAgIE5BVl9MSVNUX0dST1VQOiAnLm5hdiwgLmxpc3QtZ3JvdXAnLFxuICAgIEFDVElWRTogJy5hY3RpdmUnLFxuICAgIEFDVElWRV9VTDogJz4gbGkgPiAuYWN0aXZlJyxcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtdG9nZ2xlPVwibGlzdFwiXScsXG4gICAgRFJPUERPV05fVE9HR0xFOiAnLmRyb3Bkb3duLXRvZ2dsZScsXG4gICAgRFJPUERPV05fQUNUSVZFX0NISUxEOiAnPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBUYWIgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYWIoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBUYWIucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSkgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhcmdldDtcbiAgICAgIHZhciBwcmV2aW91cztcbiAgICAgIHZhciBsaXN0RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZfTElTVF9HUk9VUClbMF07XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgICB2YXIgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTZWxlY3Rvci5BQ1RJVkVfVUwgOiBTZWxlY3Rvci5BQ1RJVkU7XG4gICAgICAgIHByZXZpb3VzID0gJC5tYWtlQXJyYXkoJChsaXN0RWxlbWVudCkuZmluZChpdGVtU2VsZWN0b3IpKTtcbiAgICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KTtcbiAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRlRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX2VsZW1lbnQsIGxpc3RFbGVtZW50KTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHZhciBoaWRkZW5FdmVudCA9ICQuRXZlbnQoRXZlbnQuSElEREVOLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogX3RoaXMuX2VsZW1lbnRcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICAgIH0pO1xuICAgICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGRlbkV2ZW50KTtcbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0LCB0YXJnZXQucGFyZW50Tm9kZSwgY29tcGxldGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH07IC8vIFByaXZhdGVcblxuXG4gICAgX3Byb3RvLl9hY3RpdmF0ZSA9IGZ1bmN0aW9uIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKSA/ICQoY29udGFpbmVyKS5maW5kKFNlbGVjdG9yLkFDVElWRV9VTCkgOiAkKGNvbnRhaW5lcikuY2hpbGRyZW4oU2VsZWN0b3IuQUNUSVZFKTtcbiAgICAgIHZhciBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXTtcbiAgICAgIHZhciBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiBhY3RpdmUgJiYgJChhY3RpdmUpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZSk7XG4gICAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl90cmFuc2l0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBfdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICB2YXIgZHJvcGRvd25DaGlsZCA9ICQoYWN0aXZlLnBhcmVudE5vZGUpLmZpbmQoU2VsZWN0b3IuRFJPUERPV05fQUNUSVZFX0NISUxEKVswXTtcblxuICAgICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAgICQoZHJvcGRvd25DaGlsZCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcblxuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIFV0aWwucmVmbG93KGVsZW1lbnQpO1xuICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG5cbiAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgJChlbGVtZW50LnBhcmVudE5vZGUpLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgICB2YXIgZHJvcGRvd25FbGVtZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yLkRST1BET1dOKVswXTtcblxuICAgICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGRyb3Bkb3duVG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZHJvcGRvd25FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKSk7XG4gICAgICAgICAgJChkcm9wZG93blRvZ2dsZUxpc3QpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTsgLy8gU3RhdGljXG5cblxuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZGF0YSA9ICR0aGlzLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVGFiKHRoaXMpO1xuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUYWIsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUYWI7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdzaG93Jyk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFRhYi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVGFiO1xuXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBUYWIuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gVGFiO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFiLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvdGFiLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBNYWtlU3RpY2t5ID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIC8vW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZWxlY3RvciwgbWF4U3RpY2tQb3NpdGlvbiwgbWFyZ2luVG9wKVxuICAgIHtcbiAgICAgICAgaWYodHlwZW9mIG1hcmdpblRvcCA9PSAndW5kZWZpbmVkJykgbWFyZ2luVG9wID0gMDtcbiAgICAgICAgLy8gRmluZCBhbGwgZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIiBlbGVtZW50c1xuICAgICAgICAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzdGlja3kgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBzdGlja3lXcmFwcGVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnc3RpY2t5LXdyYXBwZXInKTsgLy8gaW5zZXJ0IGhpZGRlbiBlbGVtZW50IHRvIG1haW50YWluIGFjdHVhbCB0b3Agb2Zmc2V0IG9uIHBhZ2VcbiAgICAgICAgICBzdGlja3kuYmVmb3JlKHN0aWNreVdyYXBwZXIpO1xuICAgICAgICAgIHN0aWNreS5hZGRDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gU2Nyb2xsICYgcmVzaXplIGV2ZW50c1xuICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsLnN0aWNreS1vbnNjcm9sbCByZXNpemUuc3RpY2t5LW9uc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCAkKHRoaXMpLCBtYXhTdGlja1Bvc2l0aW9uLCBtYXJnaW5Ub3ApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIE9uIHBhZ2UgbG9hZFxuICAgICAgICAgIHN0aWNreVRvZ2dsZShzdGlja3ksIHN0aWNreVdyYXBwZXIsICQod2luZG93KSwgbWF4U3RpY2tQb3NpdGlvbiwgbWFyZ2luVG9wKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCBzY3JvbGxFbGVtZW50LCBtYXhTdGlja1Bvc2l0aW9uLCBtYXJnaW5Ub3ApIHtcbiAgICAgICAgICB2YXIgc3RpY2t5SGVpZ2h0ID0gc3RpY2t5Lm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgdmFyIHN0aWNreVdpZHRoID0gc3RpY2t5Lm91dGVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gc3RpY2t5V3JhcHBlci5vZmZzZXQoKTtcbiAgICAgICAgICB2YXIgc3RpY2t5VG9wID0gb2Zmc2V0LnRvcDtcbiAgICAgICAgICB2YXIgc3RpY2t5TGVmdCA9IG9mZnNldC5sZWZ0O1xuICAgIFxuICAgICAgICAgIHZhciB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIndpblBvcy0+XCIrd2luZG93U2Nyb2xsUG9zaXRpb24rIFwiIHNUb3AtPlwiK3N0aWNreVRvcCtcIiBtYXgtPlwiK21heFN0aWNrUG9zaXRpb24gKTtcbiAgICAgICAgICBpZiAod2luZG93U2Nyb2xsUG9zaXRpb24gPj0gc3RpY2t5VG9wKXtcbiAgICAgICAgICAgIGlmKHdpbmRvd1Njcm9sbFBvc2l0aW9uIDwgbWF4U3RpY2tQb3NpdGlvbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoc3RpY2t5SGVpZ2h0KTtcbiAgICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ3dpZHRoJyxzdGlja3lXaWR0aCsncHgnKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnbGVmdCcsc3RpY2t5TGVmdCsncHgnKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJyxtYXJnaW5Ub3ArJ3B4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLChtYXhTdGlja1Bvc2l0aW9uLXN0aWNreVRvcCkrJ3B4Jyk7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLCcxNXB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gcGx1Z2luO1xuICAgIFxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc3RpY2t5LXRvZ2dsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgU21hcnRGaWx0ZXJzID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICBmaWx0ZXJEcm9wZG93bjogJycsXG4gICAgICAgIGxvYWRpbmdBbmltYXRpb246ICcnLFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyOiAnJyxcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZXR0aW5ncyl7XG4gICAgICAgICQuZXh0ZW5kKCBjb25maWcsIHNldHRpbmdzICk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIHRoZSBTbWFydEZpbHRlcnMnKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB1cmxWYXJzID0gZ2V0VXJsVmFycygpO1xuICAgICAgICBzZXRGaWx0ZXJzRGVmYXVsdFN0YXRlcyh1cmxWYXJzKTtcbiAgICAgICAgXG4gICAgICAgICQoY29uZmlnLmZpbHRlckRyb3Bkb3duKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7ICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoJCh0aGlzKS5odG1sKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICBpZih2YWx1ZSAhPSAnYWxsJykgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgLy9lbHNlIHVybFZhcnMgPSB1bnNldEFycmF5KHVybFZhcnMsYnV0dG9uLmRhdGEoJ2tleScpKTtcbiAgICAgICAgICAgIGVsc2UgZGVsZXRlIHVybFZhcnNbYnV0dG9uLmRhdGEoJ2tleScpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJChjb25maWcubG9hZGluZ0FuaW1hdGlvbikuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgICQoY29uZmlnLnJlc3VsdHNDb250YWluZXIpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKTsvL2hpZGUgdGhlIGRyb3Bkb3duIGFmdGVyIGNsaWNrZWRcbiAgICAgICAgICAgIC8vdmFyIHBhcmVudERyb3Bkb3duID0gYXV4LnBhcmVudCgpO1xuICAgICAgICAgICAgLy9wYXJlbnREcm9wZG93blswXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldEJhc2VVUkwoKSArICc/JyArIHNlcmlhbGl6ZSh1cmxWYXJzICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldEZpbHRlcnNEZWZhdWx0U3RhdGVzKHVybFZhcnMpe1xuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyBmaWx0ZXIgdmFsdWVzJywgdXJsVmFycyk7XG4gICAgICAgIFxuICAgICAgICBjb25maWcuZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXIudXJsS2V5KTtcbiAgICAgICAgICAgIGlmKGZpbHRlci51cmxLZXkgaW4gdXJsVmFycykgJChmaWx0ZXIuYnV0dG9uKS5odG1sKCQoZmlsdGVyLm9wdGlvbnMrJ1tkYXRhLXZhbHVlPVwiJyt1cmxWYXJzW2ZpbHRlci51cmxLZXldKydcIl0nKS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0QmFzZVVSTCgpe1xuICAgICAgICB2YXIgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcGllY2VzID0gYmFzZVVSTC5zcGxpdCgnPycpO1xuICAgICAgICBpZihwaWVjZXMubGVuZ3RoPjEpIGJhc2VVUkwgPSBwaWVjZXNbMF07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYmFzZVVSTDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VXJsVmFycygpe1xuICAgICAgXG4gICAgICAgIHZhciB2YXJzID0gW10sIGhhc2g7XG4gICAgICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICB2YXJzLnB1c2goaGFzaFswXSk7XG4gICAgICAgICAgICB2YXJzW2hhc2hbMF1dID0gaGFzaFsxXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHZhcnNbJzAnXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbZ2V0QmFzZVVSTCgpXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbJyddO1xuICBcbiAgICAgICAgcmV0dXJuIHZhcnM7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgICAgICAgdmFyIHN0ciA9IFtdO1xuICAgICAgICBmb3IodmFyIHAgaW4gb2JqKVxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgICBcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3NtYXJ0LWZpbHRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbG9hZFZpZGVvID0gZnVuY3Rpb24odmlkZW9VUkwsIHNldHRpbmdzKXtcbiAgaWYodHlwZW9mIHNldHRpbmdzID09ICd1bmRlZmluZWQnKSBzZXR0aW5ncyA9IHt9O1xuICB2YXIgcyA9IGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgXG4gIHZhciB2aWRlb1ZpZXdwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZpZGVvVmlld3BvcnQuaWQgPSBcInZpZGVvLXZpZXdwb3J0XCI7XG4gIHZpZGVvVmlld3BvcnQuY2xhc3NMaXN0LmFkZCgndmlkZW8tdmlld3BvcnQnKTtcbiAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh2aWRlb1ZpZXdwb3J0LCBzKTtcbiAgXG4gIHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gIHZpZGVvLnNyYyA9IHZpZGVvVVJMOyB2aWRlby5hdXRvUGxheSA9IHRydWU7IHZpZGVvLmxvb3AgPSB0cnVlOyB2aWRlby5tdXRlZCA9IHRydWU7IFxuICB2aWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby1iYWNrZ3JvdW5kJyk7XG4gIHZpZGVvVmlld3BvcnQuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICBcbiAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsZnVuY3Rpb24oKXsgdmlkZW8ucGxheSgpOyB9KTtcbiAgdmFyIHZpZF93X29yaWcgPSBwYXJzZUludCgkKHdpbmRvdykud2lkdGgoKSk7XG4gIHZhciB2aWRfaF9vcmlnID0gcGFyc2VJbnQoJCh2aWRlbykuaGVpZ2h0KCkpO1xuICB2YXIgbWluX3cgPSA0MDA7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgc291cmNlVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICB2YXIgc291cmNlVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICAgIC8vaWYodmlkX3dfb3JpZyA8PSAwIHx8IHZpZF93X29yaWcgPT0gSW5maW5pdHkpIHZpZF93X29yaWcgPSBwYXJzZUludCgkKHZpZGVvKS53aWR0aCgpKTtcbiAgICAgIC8vaWYodmlkX2hfb3JpZyA8PSAwIHx8IHZpZF9oX29yaWcgPT0gSW5maW5pdHkpIHZpZF9oX29yaWcgPSBwYXJzZUludCgkKHZpZGVvKS5oZWlnaHQoKSk7XG4gICAgICB2YXIgYWRkZWRQYWRkaW5nID0gMTAwO1xuICAgICAgdmFyIHRhcmdldF93aXRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICB2YXIgdGFyZ2V0X2hlaWdoID0gJCgnLm1hc3RoZWFkJykuaGVpZ2h0KCkgKyAkKCduYXYubmF2YmFyJykuaGVpZ2h0KCkgKyBwYXJzZUludCgkKCcubWFzdGhlYWQnKS5jc3MoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUludCgkKCduYXYubmF2YmFyJykuY3NzKCdtYXJnaW4tdG9wJykpICsgYWRkZWRQYWRkaW5nO1xuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS53aWR0aCh0YXJnZXRfd2l0aCk7XG4gICAgICAkKHZpZGVvVmlld3BvcnQpLmhlaWdodChuZXdWaWV3SGVpZ2h0KTtcbiAgXG4gICAgICB2YXIgc2NhbGVfaCA9IHRhcmdldF93aXRoIC8gdmlkX3dfb3JpZztcbiAgICAgIHZhciBzY2FsZV92ID0gdGFyZ2V0X2hlaWdoIC8gdmlkX2hfb3JpZztcbiAgICAgIHZhciBzY2FsZSA9IHNjYWxlX2ggPiBzY2FsZV92ID8gc2NhbGVfaCA6IHNjYWxlX3Y7XG4gIFxuICAgICAgXG4gICAgICBpZiAoc2NhbGUgKiB2aWRfd19vcmlnIDwgbWluX3cpIHNjYWxlID0gbWluX3cgLyB2aWRfd19vcmlnO1xuICAgICAgXG4gICAgICB2YXIgbmV3Vmlld1dpZHRoID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICAgICAgdmFyIG5ld1ZpZXdIZWlnaHQgPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICBcbiAgICAgIC8vaWYgdGhlIG5ldyB3aWR0aCBkb2VzIG5vdCBjb3ZlciB0aGUgZW50aXJlIHNjcmVlbiB3aWR0aFxuICAgICAgaWYgKG5ld1ZpZXdXaWR0aCA8IHNvdXJjZVZpZGVvV2lkdGgpIHNjYWxlID0gc291cmNlVmlkZW9XaWR0aCAvIHZpZF93X29yaWc7XG4gICAgICBpZiAobmV3Vmlld0hlaWdodCA8IHNvdXJjZVZpZGVvSGVpZ2h0ICYmIHNjYWxlIDwgKHNvdXJjZVZpZGVvSGVpZ2h0IC8gdmlkX2hfb3JpZykpIHNjYWxlID0gc291cmNlVmlkZW9IZWlnaHQgLyB2aWRfaF9vcmlnO1xuICAgICAgXG4gICAgICBuZXdWaWV3V2lkdGggPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICBuZXdWaWV3SGVpZ2h0ID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICBcbiAgICAgICQodmlkZW8pLndpZHRoKG5ld1ZpZXdXaWR0aCk7XG4gICAgICAkKHZpZGVvKS5oZWlnaHQobmV3Vmlld0hlaWdodCk7XG4gIFxuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS5zY3JvbGxMZWZ0KChuZXdWaWV3V2lkdGggLSB0YXJnZXRfd2l0aCkgLyAyKTtcbiAgICAgICQodmlkZW9WaWV3cG9ydCkuc2Nyb2xsVG9wKChuZXdWaWV3SGVpZ2h0IC0gdGFyZ2V0X2hlaWdoKSAvIDIpO1xuICB9KTtcbiAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICBcbiAgaWYodHlwZW9mIHNldHRpbmdzLm92ZXJsYXkgIT0gJ3VuZGVmaW5lZCcpe1xuICAgIFxuICAgIHZhciBvdmVybGF5ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYWJzb2x1dGVcIjtcbiAgICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5vdmVybGF5O1xuICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eSA9IFwiMC40XCI7XG4gICAgb3ZlcmxheS5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcbiAgICBvdmVybGF5LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBvdmVybGF5LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG92ZXJsYXkuc3R5bGUuekluZGV4ID0gXCItMVwiO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUob3ZlcmxheSwgcyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRWaWRlbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vcmVzcG9uc2l2ZS12aWRlby5qc1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBUaGVQcm9ncmFtID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHRoZXNjb3BlID0ge307XG4gICAgLy8gQ2FjaGUgc2VsZWN0b3JzXG4gICAgdmFyIHRvcE1lbnUgPSAkKFwiLnByb2dyYW0tbWVudVwiKSxcbiAgICAgICAgdG9wTWVudUhlaWdodCA9IHRvcE1lbnUub3V0ZXJIZWlnaHQoKSsxNSxcbiAgICAgICAgLy8gQWxsIGxpc3QgaXRlbXNcbiAgICAgICAgbWVudUl0ZW1zID0gdG9wTWVudS5maW5kKFwiYVtocmVmKj0nIyddXCIpLFxuICAgICAgICAvLyBBbmNob3JzIGNvcnJlc3BvbmRpbmcgdG8gbWVudSBpdGVtc1xuICAgICAgICBzY3JvbGxJdGVtcyA9IG1lbnVJdGVtcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgaXRlbSA9ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSk7XG4gICAgICAgICAgaWYgKGl0ZW0ubGVuZ3RoKSB7IHJldHVybiBpdGVtOyB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHRoZXNjb3BlLmluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgLy8gQmluZCB0byBzY3JvbGxcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgICAgICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICAgICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkrdG9wTWVudUhlaWdodDtcbiAgICAgICAgXG4gICAgICAgICAgIC8vIEdldCBpZCBvZiBjdXJyZW50IHNjcm9sbCBpdGVtXG4gICAgICAgICAgIHZhciBjdXIgPSBzY3JvbGxJdGVtcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBpZiAoJCh0aGlzKS5vZmZzZXQoKS50b3AgPCBmcm9tVG9wKVxuICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICAvLyBHZXQgdGhlIGlkIG9mIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgICAgICAgY3VyID0gY3VyW2N1ci5sZW5ndGgtMV07XG4gICAgICAgICAgIHZhciBpZCA9IGN1ciAmJiBjdXIubGVuZ3RoID8gY3VyWzBdLmlkIDogXCJcIjtcbiAgICAgICAgICAgLy8gU2V0L3JlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgbWVudUl0ZW1zXG4gICAgICAgICAgICAgLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgLmVuZCgpLmZpbHRlcihcIltocmVmPScjXCIraWQrXCInXVwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGVzY29wZTtcbiAgICBcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRoZVByb2dyYW07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvcHJvZ3JhbS5qc1xuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMb2NhdGlvblZpZXcgPSAoZnVuY3Rpb24oKXtcbiAgICB2YXIgc2NvcGUgPSB7fTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gc2NvcGU7XG59KSgpO1xuXG5Mb2NhdGlvblZpZXcuYWN0aXZhdGUoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9sb2NhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vdmFyIG5ld3NsZXR0ZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLW5ld3NsZXR0ZXIgZm9ybScpO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICBpZihmcm9tVG9wPjEwMCkgJCgnLmZvb3Rlci1iYXInKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgZWxzZSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbn0pO1xuXG5cbiQoJy5uZXdzbGV0dGVyLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtTmV3c2xldHRlciA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1OZXdzbGV0dGVyLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgXG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ25ld3NsZXR0ZXJfc2lnbnVwJyxcbiAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmb3JtTmV3c2xldHRlci5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGZvcm1OZXdzbGV0dGVyLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQoXCJUaGVyZSBoYXMgYmVlbiBhbiBlcnJvciBzaWduaW5nIHlvdSB1cFwiKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG59KTtcblxuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1TeWxsYWJ1cyA9ICQodGhpcyk7XG4gICB2YXIgYnV0dG9uID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2J1dHRvbicpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBmaXJzdE5hbWVGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPXRleHRdJyk7XG4gICB2YXIgbG9jYXRpb25GaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCcubG9jYXRpb25zJyk7XG4gICB2YXIgbG9jYXRpb24gPSBsb2NhdGlvbkZpZWxkLnZhbCgpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIHZhciBmaXJzdE5hbWUgPSBmaXJzdE5hbWVGaWVsZC52YWwoKTtcbiAgIFxuICAgaWYoZW1haWwgPT0gJycgfHwgZmlyc3ROYW1lID09JycpXG4gICB7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJ1dlIG5lZWQgeW91ciBlbWFpbCBhbmQgZmlyc3QgbmFtZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICB9XG4gICBlbHNlIGlmKGxvY2F0aW9uPT0nJyB8fCBsb2NhdGlvbj09J3NlbGVjdCcpXG4gICB7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJ1BsZWFzZSBzZWxlY3QgYSBMb2NhdGlvbicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICB9XG4gICBlbHNle1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCcnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICBidXR0b24uaHRtbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2Rvd25sb2FkX3N5bGxhYnVzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAodHlwZW9mIFdQQVNfQVBQLnRlbXBsYXRlID09ICdzdHJpbmcnKSA/IFdQQVNfQVBQLnRlbXBsYXRlLnJlcGxhY2UoJ3NpbmdsZS0nLCcnKSA6ICdub25lJyxcbiAgICAgICAgICAgIHVybDogV1BBU19BUFAudXJsLFxuICAgICAgICAgICAgdXRtX2xvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZVxuICAgICAgICAgfSxcbiAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5odG1sKFwiRG93bmxvYWRcIik7XG4gICAgICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZm9ybVN5bGxhYnVzLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICQoJyNzeWxsYWJ1c01vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVsc2UgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0sXG4gICAgICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoXCJEb3dubG9hZFwiKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3Igc2lnbmluZyB5b3UgdXBcIik7XG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH0gXG4gICBcbn0pO1xuXG4kKCcubW9yZS1pbmZvLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtU3lsbGFidXMgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBmaXJzdE5hbWVGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPXRleHRdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgdmFyIGZpcnN0TmFtZSA9IGZpcnN0TmFtZUZpZWxkLnZhbCgpO1xuICAgXG4gICBpZihlbWFpbCA9PSAnJyB8fCBmaXJzdE5hbWUgPT0nJylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnV2UgbmVlZCB5b3VyIGVtYWlsIGFuZCBmaXJzdCBuYW1lJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvd3AtanNvbi80Zy92MS9hcHBseS9yZXF1ZXN0X2luZm8nLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgdXJsOiBXUEFTX0FQUC51cmwsXG4gICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKSBmb3JtU3lsbGFidXMuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgZWxzZSBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChcIlRoZXJlIGhhcyBiZWVuIGFuIGVycm9yIHNpZ25pbmcgeW91IHVwXCIpO1xuICAgICAgfVxuICAgfSk7XG4gICB9IFxuICAgXG59KTtcblxuKGZ1bmN0aW9uIGxvYWRBbGVydHMoKXtcbiAgIHZhciBkaXNtaXNzZWRBbGVydHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlzbWlzc2VkX2FsZXJ0cycpO1xuICAgXG4gICBpZihkaXNtaXNzZWRBbGVydHMpIGRpc21pc3NlZEFsZXJ0cyA9IGRpc21pc3NlZEFsZXJ0cy5zcGxpdChcIixcIik7XG4gICBlbHNlIGRpc21pc3NlZEFsZXJ0cyA9IFtdO1xuICAgXG4gICB2YXIgYWxsQWxlcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJ0LWRpc21pc3NpYmxlJyk7XG4gICBhbGxBbGVydHMuZm9yRWFjaChmdW5jdGlvbihhKXtcbiAgICAgIGlmKGRpc21pc3NlZEFsZXJ0cy5pbmRleE9mKGEuaWQpID09IC0xKXtcbiAgICAgICAgIHZhciBhbGVydFRvRGlzbWlzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK2EuaWQpO1xuICAgICAgICAgYWxlcnRUb0Rpc21pc3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgIH0pO1xuICAgdmFyIGNsb3NlQWxlcnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEtZGlzbWlzcz1hbGVydF0nKTtcbiAgIGNsb3NlQWxlcnRCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oYnRuKXtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgIFx0Y29uc29sZS5sb2codGhpcy5wYXJlbnROb2RlKTtcbiAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnBhcmVudE5vZGUuaWQgPT0gJ3VuZGVmaW5lZCcpIFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWW91IG5lZWQgdG8gc3BlY2lmeSBhbiBpZCBmb3IgYWxsIHRoZSBkaXNtaXNhYmxlIGFsZXJ0cycpO1xuICAgICAgXHRkaXNtaXNzZWRBbGVydHMucHVzaCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgICAgXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzbWlzc2VkX2FsZXJ0cycsZGlzbWlzc2VkQWxlcnRzLmpvaW4oJywnKSk7XG4gICAgICBcdHRoaXMucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcbiAgIH0pO1xufSkoKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2dldF91cGNvbWluZ19ldmVudCdcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSkgcHJvbXB0VXBjb21pbmdFdmVudChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSB1cGNvbWluZyBldmVudDogXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2dldF91cGNvbWluZ19ldmVudCcsXG4gICAgICAgICB0eXBlOiAnaW50cm9fdG9fY29kaW5nJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBmaWxsVXBjb21pbmdJbnRyb1RvQ29kaW5nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxuICAgLy9sb2FkIGxvY2F0aW9uc1xuICAgJC5hamF4KHtcbiAgICAgIHVybDogJy93cC1qc29uLzRnL3YxL2xvY2F0aW9ucz9sYW5nPScrV1BBU19BUFAubGFuZyxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24obG9jYXRpb25zKXtcbiAgICAgICAgIGlmKGxvY2F0aW9ucylcbiAgICAgICAgIHtcbiAgICAgICAgICAgICQoJyNzeWxsYWJ1c01vZGFsIC5sb2NhdGlvbnMsIC5zeWxsYWJ1cy1kb3dubG9hZCAubG9jYXRpb25zJykuaHRtbChbJzxvcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5TZWxlY3QgYSBsb2NhdGlvbjwvb3B0aW9uPiddLmNvbmNhdChsb2NhdGlvbnMubWFwKGZ1bmN0aW9uKGwpe1xuICAgICAgICAgICAgICAgcmV0dXJuICc8b3B0aW9uIHZhbHVlPVwiJytsWydhY19sb2NhdGlvbl9zbHVnJ10rJ1wiPicrbFsncG9zdF90aXRsZSddKyc8L29wdGlvbj4nO1xuICAgICAgICAgICAgfSkpLmpvaW4oJycpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9tYXJrIGRlZmF1bHQgbG9jYXRpb25cbiAgICAgICAgICAgIGlmKHR5cGVvZiBXUEFTX0FQUCAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgaWYodHlwZW9mIFdQQVNfQVBQLmNpdHlfc2x1ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgV1BBU19BUFAuY2l0eV9zbHVnICE9PSAnJykgY29uc29sZS5sb2coXCJJZ25vcmluZyB1c2VyIGxvY2F0aW9uIGJlY2F1c2UgaGUgc3BlY2lmaWVkIGEgZGlmZmVyZW50IG9uZVwiKTtcbiAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZW9mIFdQQVNfQVBQLmxhdGl0dWRlICE9PSAndW5kZWZpbmVkJyAmJiBXUEFTX0FQUC5sYXRpdHVkZSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdCA9IGNsb3Nlc3RMb2NhdGlvbih7IGxhdGl0dWRlOiBXUEFTX0FQUC5sYXRpdHVkZSwgbG9uZ2l0dWRlOiBXUEFTX0FQUC5sb25naXR1ZGUgfSwgbG9jYXRpb25zKTtcbiAgICAgICAgICAgICAgICAgICQoJy5jaXRpZXMuZHJvcGRvd24tc2VsZWN0b3IgYnV0dG9uIHNwYW4nKS5odG1sKGNsb3Nlc3QucG9zdF90aXRsZSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgYWNhZGVteSBsb2NhdGlvbnMgXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG4gICBcbiAgIHNldHVwUHJpY2VDYWxjdWxhdG9yKCk7XG4gICBcbiAgICQoXCIuZHJvcGRvd24tdG9nZ2xlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51JykudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xuICAgfSk7XG4gICBcbiAgIHZhciBtYXN0ZXJXaGl0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXN0aGVhZC13aGl0ZScpO1xuICAgaWYodHlwZW9mIG1hc3RlcldoaXRlICE9ICd1bmRlZmluZWQnICYmIG1hc3RlcldoaXRlKXtcbiAgICAgIHZhciBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7IFxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ2ludmVydGVkJyk7XG4gICB9IFxuICAgXG59KTtcblxuZnVuY3Rpb24gc2V0dXBQcmljZUNhbGN1bGF0b3IoKXtcbiAgIFxuICAgdmFyIFByaWNlQ2FsY3VsYXRvciA9IHJlcXVpcmUoJy4uL2xpYi9wcmljZUNhbGN1bGF0b3IuanMnKS5kZWZhdWx0O1xuICAgY29uc3Qgc2xpZGVycyA9ICQoJy5wcmljaW5nLXNsaWRlcicpO1xuICAgXG4gICBpZihzbGlkZXJzLmxlbmd0aCA9PT0gMCkgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHNsaWRlciB0byBsb2FkJyk7XG4gICBlbHNle1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgIHVybDogJy93cC1qc29uLzRnL3YxL3ByaWNlcycsXG4gICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHByaWNlcyl7XG4gICAgICAgICAgICBpZihwcmljZXMgJiYgdHlwZW9mIHByaWNlcy5kYXRhICE9ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgcHJpY2VzID0gcHJpY2VzLmRhdGE7XG4gICAgICAgICAgICAgICBzbGlkZXJzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpZGVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gc2xpZGVyLmRhdGEoJ2xvY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb3Vyc2UgPSBzbGlkZXIuZGF0YSgnY291cnNlJyk7XG4gICAgICAgICAgICAgICAgICBpZih0eXBlb2YgcHJpY2VzW2NvdXJzZV0gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBwcmljZXNbY291cnNlXVtsb2NhdGlvbl0gPT09ICd1bmRlZmluZWQnKSBjb25zb2xlLmVycm9yKCdQcmljZSBub3QgZm91bmQgZm9yICcrY291cnNlKycgYXQgJytsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICByZW5kZXJMb2NhdGlvblByaWNlcyhzbGlkZXIsIHByaWNlc1tjb3Vyc2VdW2xvY2F0aW9uXSk7XG4gICAgICAgICAgICAgICAgICAgICBQcmljZUNhbGN1bGF0b3Ioc2xpZGVycywgcHJpY2VzW2NvdXJzZV1bbG9jYXRpb25dKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgY29uc29sZS5lcnJvcihcIkludmFsaWQgY291cnNlIHByaWNlc1wiKTtcbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSxcbiAgICAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIGFjYWRlbXkgcHJpY2VzIFwiK3AzKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJMb2NhdGlvblByaWNlcyhzbGlkZXIsIHByaWNlcyl7XG4gICBjb25zdCBwcmljaW5nQ29tcG9uZW50ID0gc2xpZGVyLmNsb3Nlc3QoJy5wcmljaW5nLWNvbXBvbmVudCcpO1xuICAgaWYodHlwZW9mIHByaWNlcyA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgbGV0IGNvbnRlbnQgPSAnPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPic7XG4gICAgICAgICBjb250ZW50ICs9ICc8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJsb2NrIGNhcmQtcHJpbWFyeSBjYXJkLWludmVyc2UgYmcteWVsbG93IG1iLTMgcC00IHRleHQtY2VudGVyXCI+JztcbiAgICAgICAgICAgIGNvbnRlbnQgKz0gJ1ByaWNlcyBoYXZlIG5vdCBiZWVuIGRlZmluZWQgeWV0JztcbiAgICAgICAgIGNvbnRlbnQgKz0gJzwvZGl2Pic7XG4gICAgICBjb250ZW50ICs9ICc8L2Rpdj4nO1xuICAgICAgcHJpY2luZ0NvbXBvbmVudC5odG1sKGNvbnRlbnQpO1xuICAgfVxuICAgZWxzZXtcbiAgICAgIHByaWNpbmdDb21wb25lbnQuZmluZCgnW2RhdGEtY29uY2VwdD1cInVwZnJvbnRcIl0nKS5odG1sKHByaWNlc1sndXBmcm9udCddKTtcbiAgICAgIHByaWNpbmdDb21wb25lbnQuZmluZCgnW2RhdGEtY29uY2VwdD1cIm1vbnRobHlcIl0nKS5odG1sKHByaWNlc1snZmluYW5jZWQnXVswXSk7XG4gICAgICBcbiAgIH1cbn1cblxuZnVuY3Rpb24gcHJvbXB0VXBjb21pbmdFdmVudChldmVudCl7XG4gICBcbiAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3BTdGF0ZScpICE9ICdzaG93bicpe1xuICAgICAgZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLmRlbGF5KDIwMDApLmZhZGVJbigpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BvcFN0YXRlJywnc2hvd24nKTtcbiAgICAgICQoJyN1cGNvbWluZ0V2ZW50JykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcHV0IHlvdXIgZGVmYXVsdCBldmVudCBoZXJlXG4gICAgICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgIH1cbn1cblxuZnVuY3Rpb24gZmlsbFVwY29taW5nSW50cm9Ub0NvZGluZyhldmVudCl7XG4gICB2YXIgbW9kYWwgPSAkKCcjZnJlZUNvZGluZ0ludHJvTW9kYWwnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXRlJykuaHRtbChldmVudC5kYXkrJyAnK2V2ZW50Lm1vbnRoKycgJytldmVudC55ZWFyKTtcbiAgIG1vZGFsLmZpbmQoJy5sb2NhdGlvbicpLmh0bWwoZXZlbnQuYWRkcmVzcyk7XG4gICBtb2RhbC5maW5kKCcuYnRuLWRhbmdlcicpLmF0dHIoJ2hyZWYnLGV2ZW50LnVybCk7XG4gICBcbn1cbmZ1bmN0aW9uIGZpbGxVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIHZhciBtb2RhbCA9ICQoJyN1cGNvbWluZ0V2ZW50Jyk7XG4gICBtb2RhbC5maW5kKCcuZGF5JykuaHRtbChldmVudC5kYXkpO1xuICAgbW9kYWwuZmluZCgnLm1vbnRoJykuaHRtbChldmVudC5tb250aCk7XG4gICBtb2RhbC5maW5kKCcueWVhcicpLmh0bWwoZXZlbnQueWVhcik7XG4gICBcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC10aXRsZScpLmh0bWwoZXZlbnQubmFtZSk7XG4gICBtb2RhbC5maW5kKCcuZXZlbnQtZGV0YWlscycpLmh0bWwoJzxzcGFuIGNsYXNzPVwiaW1vb24gaWNvbi1sb2NhdGlvblwiPjwvc3Bhbj4nICsgZXZlbnQuYWRkcmVzcyk7Ly8zOjMwcG0gLSBhdCBTdGFydGh1YiwgRG93bnRvd24gTWlhbWlcbiAgIFxuICAgXG4gICB2YXIgbWF4TGVuZ3RoID0gMzUwOyAvLyBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIGV4dHJhY3RcbiAgIHZhciB0cmltbWVkU3RyaW5nID0gZXZlbnQuZGVzY3JpcHRpb24uc3Vic3RyKDAsIG1heExlbmd0aCk7Ly90cmltIHRoZSBzdHJpbmcgdG8gdGhlIG1heGltdW0gbGVuZ3RoXG4gICB0cmltbWVkU3RyaW5nID0gdHJpbW1lZFN0cmluZy5zdWJzdHIoMCwgTWF0aC5taW4odHJpbW1lZFN0cmluZy5sZW5ndGgsIHRyaW1tZWRTdHJpbmcubGFzdEluZGV4T2YoXCIuXCIpKSk7Ly9yZS10cmltIGlmIHdlIGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgd29yZFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRlc2NyaXB0aW9uJykuaHRtbCh0cmltbWVkU3RyaW5nKycuJyk7XG4gICBcbiAgIG1vZGFsLmZpbmQoJy5idG4tZGFuZ2VyJykuYXR0cignaHJlZicsZXZlbnQudXJsKTtcbiAgIFxufVxuXG5mdW5jdGlvbiBjbG9zZXN0TG9jYXRpb24odGFyZ2V0TG9jYXRpb24sIGxvY2F0aW9uRGF0YSkge1xuICAgIGZ1bmN0aW9uIHZlY3RvckRpc3RhbmNlKGR4LCBkeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhdGlvbkRpc3RhbmNlKGxvY2F0aW9uMSwgbG9jYXRpb24yKSB7XG4gICAgICAgIHZhciBkeCA9IGxvY2F0aW9uMS5sYXRpdHVkZSAtIGxvY2F0aW9uMi5sYXRpdHVkZSxcbiAgICAgICAgICAgIGR5ID0gbG9jYXRpb24xLmxvbmdpdHVkZSAtIGxvY2F0aW9uMi5sb25naXR1ZGU7XG5cbiAgICAgICAgcmV0dXJuIHZlY3RvckRpc3RhbmNlKGR4LCBkeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2F0aW9uRGF0YS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3Vycikge1xuICAgICAgICB2YXIgcHJldkRpc3RhbmNlID0gbG9jYXRpb25EaXN0YW5jZSh0YXJnZXRMb2NhdGlvbiAsIHByZXYpLFxuICAgICAgICAgICAgY3VyckRpc3RhbmNlID0gbG9jYXRpb25EaXN0YW5jZSh0YXJnZXRMb2NhdGlvbiAsIGN1cnIpO1xuICAgICAgICByZXR1cm4gKHByZXZEaXN0YW5jZSA8IGN1cnJEaXN0YW5jZSkgPyBwcmV2IDogY3VycjtcbiAgICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZnVuY3Rpb24gb25QYWdlVmlldyh1cmxDb250YWlucywgY2FsbGJhY2spe1xuICAgIC8vUGFnZSB2aWV3ID0gYXBwbHktdGhhbmsteW91XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YodXJsQ29udGFpbnMpID4gLTEpIHtcbiAgICAgICAgLy9Db2RlIGdvZXMgaGVyZVxuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH0gIFxufVxuZnVuY3Rpb24gdHJpZ2dlclRhZ01hbmFnZXJFdmVudChldmVudE5hbWUpe1xuICAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogZXZlbnROYW1lfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkOiAnK2V2ZW50TmFtZSk7XG4gICAgfVxuICAgIGVsc2UgY29uc29sZS5sb2coJ0V2ZW50IG5vdCBiZWluZyBzZW50IHRvIFRhZ01hbmFnZXI6ICcrZXZlbnROYW1lKTtcbn1cbmZ1bmN0aW9uIHNhdmVEYXRhVmFyaWFibGUoaW5kZXgsIHZhbHVlKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKSBkYXRhTGF5ZXIucHVzaCh7aW5kZXg6IHZhbHVlfSk7XG4gICAgZWxzZSBjb25zb2xlLmxvZygnSW1wb3NpYmxlIHRvIHdyaXRlICcraW5kZXgrJyBvbiBkYXRhTGF5ZXInKTtcbiAgICBcbiAgICBcbiAgICBpZih0eXBlb2YgV1BBU19BUFAgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQID0ge307XG4gICAgaWYodHlwZW9mIFdQQVNfQVBQLmRhdGFMYXllciA9PSAndW5kZWZpbmVkJykgV1BBU19BUFAuZGF0YUxheWVyID0ge307XG4gICAgV1BBU19BUFAuZGF0YUxheWVyW2luZGV4XSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gYWNfZXZlbnQoZXZlbnRLZXksIGV2ZW50TmFtZSwgdXNlckVtYWlsKXtcblxuICAvLyB3aGF0IHdlIGRvIGhlcmUsIGlzIGxvZyBhIHN1Y2Nlc3NmdWwgZXZlbnQgdG8gdGhlIGNvbnNvbGVcbiAgLy8gb3IgY2F0Y2ggYW55IGVycm9ycyB3ZSBoYXZlXG4gIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgXG4gIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkZWQgaGFsZndheSBzY3JvbGwgZXZlbnRcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8geW91ciBBY3RpdmVDYW1wYWlnbiBpZC4gWW91IGNhbiBnZXQgdGhpcyBmcm9tIHlvdXIgQUMgc2V0dGluZ3MgXG4gIHZhciBhY3RpZCA9IFwiZGIxNWEzMjY0ZmIyYWJmMTk5OTZmYTQ4ODczMDM5NzU3ZDUzNDU0NFwiOyBcblxuICB2YXIgdmlzaXQgPSB7XG4gICAgZW1haWw6IHVzZXJFbWFpbCAvLyB0aGUgdXNlcidzIGVtYWlsIGFkZHJlc3NcbiAgfTtcblxuICAvLyBnZXQgdGhlIHVybCBvZiB0aGUgcGFnZSBhbmQgc2VuZCBpdCBhcyBldmVudCBkYXRhXG4gIHZhciBldmVudERhdGEgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAvLyBidWlsZCB0aGUgZXZlbnRTdHJpbmcgYmFzZWQgb24gdGhlIHZhcmlhYmxlcyB5b3UganVzdCBlZGl0ZWQgYWJvdmUg4pidXG4gIHZhciBldmVudFN0cmluZyA9IFwiYWN0aWQ9XCIgKyBhY3RpZCBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZrZXk9XCIgKyBldmVudEtleSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZldmVudD1cIiArIGV2ZW50TmFtZSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZ2aXNpdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2aXNpdCkgXG4gICAgICAgICAgICAgICAgICAgICsgXCImZXZlbnRkYXRhXCIgKyBldmVudERhdGE7XG5cbiAgLy8gc2VuZCB0aGUgZXZlbnQgdG8gdGhlIEFjdGl2ZUNhbXBhaWduIEFQSSB3aXRoIG91ciBldmVudCB2YWx1ZXNcbiAgeGh0dHAub3BlbihcIlBPU1RcIiwgXCJodHRwczovL3RyYWNrY21wLm5ldC9ldmVudFwiLCB0cnVlKTtcbiAgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgXG4gIGlmKGV2ZW50S2V5IT0nJyAmJiBldmVudE5hbWUhPScnICYmIHVzZXJFbWFpbCE9JycpIHhodHRwLnNlbmQoZXZlbnRTdHJpbmcpO1xuICBlbHNle1xuICAgICAgaWYoZXZlbnRLZXk9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCBldmVudEtleScsZXZlbnRLZXkpO1xuICAgICAgaWYoZXZlbnROYW1lPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgZXZlbnROYW1lJyxldmVudE5hbWUpO1xuICAgICAgaWYodXNlckVtYWlsPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgdXNlckVtYWlsJyx1c2VyRW1haWwpO1xuICB9XG59XG5cbi8qKlxuICogVGFnbWFuZ2VyIGV2ZW50c1xuICoqL1xuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ3N5bGxhYnVzX2Rvd25sb2FkJyk7IFxufSk7XG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBcbiAgICB2YXIgZW1haWxJbnB1dCA9ICQoZXZlbnQudGFyZ2V0KS5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgIGlmKGVtYWlsSW5wdXQubGVuZ3RoPjApIHNhdmVEYXRhVmFyaWFibGUoJ3VzZXJFbWFpbCcsZW1haWxJbnB1dFswXS52YWx1ZSk7XG4gICAgXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnbmV3c2xldHRlcl9zaWdudXAnKTsgXG59KTtcbiQoJy5hcHBseS1idG4nKS5jbGljayhmdW5jdGlvbihldmVudCl7IHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ2FwcGxpY2F0aW9uX3JlbmRlcmVkJyk7IH0pO1xub25QYWdlVmlldyhcIi9hcHBseS10aGFuay15b3VcIixmdW5jdGlvbigpe1xuICAgIC8vQ29kZSBnb2VzIGhlcmVcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzdHVkZW50X2FwcGxpY2F0aW9uJyk7IFxufSk7XG4kKCcjZmluYW5jaW5nX2d1aWRlX2Rvd25sb2FkJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ2ZpbmFuY2luZ19ndWlkZV9kb3dubG9hZCcpOyBcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGV2ZW50LnRhcmdldC5ocmVmO1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlxuLyogQ29weXJpZ2h0IChDKSAyMDEzIEp1c3RpbiBXaW5kbGUsIGh0dHA6Ly9zb3Vsd2lyZS5jby51ayAqL1xuXG4oZnVuY3Rpb24gKCByb290LCBmYWN0b3J5ICkge1xuXG4gIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuXG4gICAgLy8gQ29tbW9uSlMgbGlrZVxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290LCByb290LmRvY3VtZW50KTtcblxuICB9IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG5cbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFjdG9yeSggcm9vdCwgcm9vdC5kb2N1bWVudCApOyB9KTtcblxuICB9IGVsc2Uge1xuXG4gICAgLy8gQnJvd3NlciBnbG9iYWxcbiAgICByb290LlNrZXRjaCA9IGZhY3RvcnkoIHJvb3QsIHJvb3QuZG9jdW1lbnQgKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24gKCB3aW5kb3csIGRvY3VtZW50ICkge1xuXG5cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQ29uZmlnXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciBNQVRIX1BST1BTID0gJ0UgTE4xMCBMTjIgTE9HMkUgTE9HMTBFIFBJIFNRUlQxXzIgU1FSVDIgYWJzIGFjb3MgYXNpbiBhdGFuIGNlaWwgY29zIGV4cCBmbG9vciBsb2cgcm91bmQgc2luIHNxcnQgdGFuIGF0YW4yIHBvdyBtYXggbWluJy5zcGxpdCggJyAnICk7XG4gIHZhciBIQVNfU0tFVENIID0gJ19faGFzU2tldGNoJztcbiAgdmFyIE0gPSBNYXRoO1xuXG4gIHZhciBDQU5WQVMgPSAnY2FudmFzJztcbiAgdmFyIFdFQkdMID0gJ3dlYmdsJztcbiAgdmFyIERPTSA9ICdkb20nO1xuXG4gIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICB2YXIgaW5zdGFuY2VzID0gW107XG5cbiAgdmFyIGRlZmF1bHRzID0ge1xuXG4gICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICBhdXRvc3RhcnQ6IHRydWUsXG4gICAgYXV0b2NsZWFyOiB0cnVlLFxuICAgIGF1dG9wYXVzZTogdHJ1ZSxcbiAgICBjb250YWluZXI6IGRvYy5ib2R5LFxuICAgIGludGVydmFsOiAxLFxuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgcmV0aW5hOiBmYWxzZSxcbiAgICB0eXBlOiBDQU5WQVNcbiAgfTtcblxuICB2YXIga2V5TWFwID0ge1xuXG4gICAgIDg6ICdCQUNLU1BBQ0UnLFxuICAgICA5OiAnVEFCJyxcbiAgICAxMzogJ0VOVEVSJyxcbiAgICAxNjogJ1NISUZUJyxcbiAgICAyNzogJ0VTQ0FQRScsXG4gICAgMzI6ICdTUEFDRScsXG4gICAgMzc6ICdMRUZUJyxcbiAgICAzODogJ1VQJyxcbiAgICAzOTogJ1JJR0hUJyxcbiAgICA0MDogJ0RPV04nXG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgVXRpbGl0aWVzXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIGZ1bmN0aW9uIGlzQXJyYXkoIG9iamVjdCApIHtcblxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIG9iamVjdCApID09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOdW1iZXIoIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdudW1iZXInO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdHJpbmcoIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdzdHJpbmcnO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5TmFtZSggY29kZSApIHtcblxuICAgIHJldHVybiBrZXlNYXBbIGNvZGUgXSB8fCBTdHJpbmcuZnJvbUNoYXJDb2RlKCBjb2RlICk7XG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmQoIHRhcmdldCwgc291cmNlLCBvdmVyd3JpdGUgKSB7XG5cbiAgICBmb3IgKCB2YXIga2V5IGluIHNvdXJjZSApXG5cbiAgICAgIGlmICggb3ZlcndyaXRlIHx8ICEoIGtleSBpbiB0YXJnZXQgKSApXG5cbiAgICAgICAgdGFyZ2V0WyBrZXkgXSA9IHNvdXJjZVsga2V5IF07XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJveHkoIG1ldGhvZCwgY29udGV4dCApIHtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcblxuICAgICAgbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBhcmd1bWVudHMgKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmUoIHRhcmdldCApIHtcblxuICAgIHZhciBvYmplY3QgPSB7fTtcblxuICAgIGZvciAoIHZhciBrZXkgaW4gdGFyZ2V0ICkge1xuICAgICAgXG4gICAgICBpZiAoIGtleSA9PT0gJ3dlYmtpdE1vdmVtZW50WCcgfHwga2V5ID09PSAnd2Via2l0TW92ZW1lbnRZJyApXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoIGlzRnVuY3Rpb24oIHRhcmdldFsga2V5IF0gKSApXG5cbiAgICAgICAgb2JqZWN0WyBrZXkgXSA9IHByb3h5KCB0YXJnZXRbIGtleSBdLCB0YXJnZXQgKTtcblxuICAgICAgZWxzZVxuXG4gICAgICAgIG9iamVjdFsga2V5IF0gPSB0YXJnZXRbIGtleSBdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBDb25zdHJ1Y3RvclxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICBmdW5jdGlvbiBjb25zdHJ1Y3RvciggY29udGV4dCApIHtcblxuICAgIHZhciByZXF1ZXN0LCBoYW5kbGVyLCB0YXJnZXQsIHBhcmVudCwgYm91bmRzLCBpbmRleCwgc3VmZml4LCBjbG9jaywgbm9kZSwgY29weSwgdHlwZSwga2V5LCB2YWwsIG1pbiwgbWF4LCB3LCBoO1xuXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHZhciB0b3VjaGVzID0gW107XG4gICAgdmFyIHJlc2l6ZWQgPSBmYWxzZTtcbiAgICB2YXIgc2V0dXAgPSBmYWxzZTtcbiAgICB2YXIgcmF0aW8gPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIHZhciBpc0RpdiA9IGNvbnRleHQudHlwZSA9PSBET007XG4gICAgdmFyIGlzMkQgPSBjb250ZXh0LnR5cGUgPT0gQ0FOVkFTO1xuXG4gICAgdmFyIG1vdXNlID0ge1xuICAgICAgeDogIDAuMCwgeTogIDAuMCxcbiAgICAgIG94OiAwLjAsIG95OiAwLjAsXG4gICAgICBkeDogMC4wLCBkeTogMC4wXG4gICAgfTtcblxuICAgIHZhciBldmVudE1hcCA9IFtcblxuICAgICAgY29udGV4dC5ldmVudFRhcmdldCB8fCBjb250ZXh0LmVsZW1lbnQsXG5cbiAgICAgICAgcG9pbnRlciwgJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2V1cCcsICd0b3VjaGVuZCcsXG4gICAgICAgIHBvaW50ZXIsICdjbGljaycsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW91dCcsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW92ZXInLFxuXG4gICAgICBkb2MsXG5cbiAgICAgICAga2V5cHJlc3MsICdrZXlkb3duJywgJ2tleXVwJyxcblxuICAgICAgd2luLFxuXG4gICAgICAgIGFjdGl2ZSwgJ2ZvY3VzJywgJ2JsdXInLFxuICAgICAgICByZXNpemUsICdyZXNpemUnXG4gICAgXTtcblxuICAgIHZhciBrZXlzID0ge307IGZvciAoIGtleSBpbiBrZXlNYXAgKSBrZXlzWyBrZXlNYXBbIGtleSBdIF0gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIoIG1ldGhvZCApIHtcblxuICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBtZXRob2QgKSApXG5cbiAgICAgICAgbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXS5zcGxpY2UuY2FsbCggYXJndW1lbnRzLCAxICkgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kKCBvbiApIHtcblxuICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50TWFwLmxlbmd0aDsgaW5kZXgrKyApIHtcblxuICAgICAgICBub2RlID0gZXZlbnRNYXBbIGluZGV4IF07XG5cbiAgICAgICAgaWYgKCBpc1N0cmluZyggbm9kZSApIClcblxuICAgICAgICAgIHRhcmdldFsgKCBvbiA/ICdhZGQnIDogJ3JlbW92ZScgKSArICdFdmVudExpc3RlbmVyJyBdLmNhbGwoIHRhcmdldCwgbm9kZSwgaGFuZGxlciwgZmFsc2UgKTtcblxuICAgICAgICBlbHNlIGlmICggaXNGdW5jdGlvbiggbm9kZSApIClcblxuICAgICAgICAgIGhhbmRsZXIgPSBub2RlO1xuXG4gICAgICAgIGVsc2UgdGFyZ2V0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cbiAgICAgIGNBRiggcmVxdWVzdCApO1xuICAgICAgcmVxdWVzdCA9IHJBRiggdXBkYXRlICk7XG5cbiAgICAgIGlmICggIXNldHVwICkge1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQuc2V0dXAgKTtcbiAgICAgICAgc2V0dXAgPSBpc0Z1bmN0aW9uKCBjb250ZXh0LnNldHVwICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggIXJlc2l6ZWQgKSB7XG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQucmVzaXplICk7XG4gICAgICAgIHJlc2l6ZWQgPSBpc0Z1bmN0aW9uKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGNvbnRleHQucnVubmluZyAmJiAhY291bnRlciApIHtcblxuICAgICAgICBjb250ZXh0LmR0ID0gKCBjbG9jayA9ICtuZXcgRGF0ZSgpICkgLSBjb250ZXh0Lm5vdztcbiAgICAgICAgY29udGV4dC5taWxsaXMgKz0gY29udGV4dC5kdDtcbiAgICAgICAgY29udGV4dC5ub3cgPSBjbG9jaztcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnVwZGF0ZSApO1xuXG4gICAgICAgIC8vIFByZSBkcmF3XG5cbiAgICAgICAgaWYgKCBpczJEICkge1xuXG4gICAgICAgICAgaWYgKCBjb250ZXh0LnJldGluYSApIHtcblxuICAgICAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmF1dG9jbGVhcikge1xuICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKCByYXRpbywgcmF0aW8gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIGNvbnRleHQuYXV0b2NsZWFyIClcblxuICAgICAgICAgICAgY29udGV4dC5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhd1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQuZHJhdyApO1xuXG4gICAgICAgIC8vIFBvc3QgZHJhd1xuXG4gICAgICAgIGlmICggaXMyRCAmJiBjb250ZXh0LnJldGluYSApXG5cbiAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH1cblxuICAgICAgY291bnRlciA9ICsrY291bnRlciAlIGNvbnRleHQuaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuXG4gICAgICB0YXJnZXQgPSBpc0RpdiA/IGNvbnRleHQuc3R5bGUgOiBjb250ZXh0LmNhbnZhcztcbiAgICAgIHN1ZmZpeCA9IGlzRGl2ID8gJ3B4JyA6ICcnO1xuXG4gICAgICB3ID0gY29udGV4dC53aWR0aDtcbiAgICAgIGggPSBjb250ZXh0LmhlaWdodDtcblxuICAgICAgaWYgKCBjb250ZXh0LmZ1bGxzY3JlZW4gKSB7XG5cbiAgICAgICAgaCA9IGNvbnRleHQuaGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICAgICAgICB3ID0gY29udGV4dC53aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGNvbnRleHQucmV0aW5hICYmIGlzMkQgJiYgcmF0aW8gKSB7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcblxuICAgICAgICB3ICo9IHJhdGlvO1xuICAgICAgICBoICo9IHJhdGlvO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHRhcmdldC5oZWlnaHQgIT09IGggKVxuXG4gICAgICAgIHRhcmdldC5oZWlnaHQgPSBoICsgc3VmZml4O1xuXG4gICAgICBpZiAoIHRhcmdldC53aWR0aCAhPT0gdyApXG5cbiAgICAgICAgdGFyZ2V0LndpZHRoID0gdyArIHN1ZmZpeDtcblxuICAgICAgaWYgKCBpczJEICYmICFjb250ZXh0LmF1dG9jbGVhciAmJiBjb250ZXh0LnJldGluYSApXG5cbiAgICAgICAgY29udGV4dC5zY2FsZSggcmF0aW8sIHJhdGlvICk7XG5cbiAgICAgIGlmICggc2V0dXAgKSB0cmlnZ2VyKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsaWduKCB0b3VjaCwgdGFyZ2V0ICkge1xuXG4gICAgICBib3VuZHMgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHRvdWNoLnggPSB0b3VjaC5wYWdlWCAtIGJvdW5kcy5sZWZ0IC0gKHdpbi5zY3JvbGxYIHx8IHdpbi5wYWdlWE9mZnNldCk7XG4gICAgICB0b3VjaC55ID0gdG91Y2gucGFnZVkgLSBib3VuZHMudG9wIC0gKHdpbi5zY3JvbGxZIHx8IHdpbi5wYWdlWU9mZnNldCk7XG5cbiAgICAgIHJldHVybiB0b3VjaDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdWdtZW50KCB0b3VjaCwgdGFyZ2V0ICkge1xuXG4gICAgICBhbGlnbiggdG91Y2gsIGNvbnRleHQuZWxlbWVudCApO1xuXG4gICAgICB0YXJnZXQgPSB0YXJnZXQgfHwge307XG5cbiAgICAgIHRhcmdldC5veCA9IHRhcmdldC54IHx8IHRvdWNoLng7XG4gICAgICB0YXJnZXQub3kgPSB0YXJnZXQueSB8fCB0b3VjaC55O1xuXG4gICAgICB0YXJnZXQueCA9IHRvdWNoLng7XG4gICAgICB0YXJnZXQueSA9IHRvdWNoLnk7XG5cbiAgICAgIHRhcmdldC5keCA9IHRhcmdldC54IC0gdGFyZ2V0Lm94O1xuICAgICAgdGFyZ2V0LmR5ID0gdGFyZ2V0LnkgLSB0YXJnZXQub3k7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2VzcyggZXZlbnQgKSB7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvcHkgPSBjbG9uZSggZXZlbnQgKTtcbiAgICAgIGNvcHkub3JpZ2luYWxFdmVudCA9IGV2ZW50O1xuXG4gICAgICBpZiAoIGNvcHkudG91Y2hlcyApIHtcblxuICAgICAgICB0b3VjaGVzLmxlbmd0aCA9IGNvcHkudG91Y2hlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGNvcHkudG91Y2hlcy5sZW5ndGg7IGluZGV4KysgKVxuXG4gICAgICAgICAgdG91Y2hlc1sgaW5kZXggXSA9IGF1Z21lbnQoIGNvcHkudG91Y2hlc1sgaW5kZXggXSwgdG91Y2hlc1sgaW5kZXggXSApO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRvdWNoZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdG91Y2hlc1swXSA9IGF1Z21lbnQoIGNvcHksIG1vdXNlICk7XG4gICAgICB9XG5cbiAgICAgIGV4dGVuZCggbW91c2UsIHRvdWNoZXNbMF0sIHRydWUgKTtcblxuICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9pbnRlciggZXZlbnQgKSB7XG5cbiAgICAgIGV2ZW50ID0gcHJvY2VzcyggZXZlbnQgKTtcblxuICAgICAgbWluID0gKCBtYXggPSBldmVudE1hcC5pbmRleE9mKCB0eXBlID0gZXZlbnQudHlwZSApICkgLSAxO1xuXG4gICAgICBjb250ZXh0LmRyYWdnaW5nID1cblxuICAgICAgICAvZG93bnxzdGFydC8udGVzdCggdHlwZSApID8gdHJ1ZSA6XG5cbiAgICAgICAgL3VwfGVuZC8udGVzdCggdHlwZSApID8gZmFsc2UgOlxuXG4gICAgICAgIGNvbnRleHQuZHJhZ2dpbmc7XG5cbiAgICAgIHdoaWxlKCBtaW4gKVxuXG4gICAgICAgIGlzU3RyaW5nKCBldmVudE1hcFsgbWluIF0gKSA/XG5cbiAgICAgICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudE1hcFsgbWluLS0gXSBdLCBldmVudCApIDpcblxuICAgICAgICBpc1N0cmluZyggZXZlbnRNYXBbIG1heCBdICkgP1xuXG4gICAgICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnRNYXBbIG1heCsrIF0gXSwgZXZlbnQgKSA6XG5cbiAgICAgICAgbWluID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlwcmVzcyggZXZlbnQgKSB7XG5cbiAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICB2YWwgPSBldmVudC50eXBlID09ICdrZXl1cCc7XG4gICAgICBrZXlzWyBrZXkgXSA9IGtleXNbIGtleU5hbWUoIGtleSApIF0gPSAhdmFsO1xuXG4gICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudC50eXBlIF0sIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZlKCBldmVudCApIHtcblxuICAgICAgaWYgKCBjb250ZXh0LmF1dG9wYXVzZSApXG5cbiAgICAgICAgKCBldmVudC50eXBlID09ICdibHVyJyA/IHN0b3AgOiBzdGFydCApKCk7XG5cbiAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50LnR5cGUgXSwgZXZlbnQgKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgQVBJXG5cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgICAgY29udGV4dC5ub3cgPSArbmV3IERhdGUoKTtcbiAgICAgIGNvbnRleHQucnVubmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcblxuICAgICAgY29udGV4dC5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuXG4gICAgICAoIGNvbnRleHQucnVubmluZyA/IHN0b3AgOiBzdGFydCApKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG5cbiAgICAgIGlmICggaXMyRCApXG5cbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoIDAsIDAsIGNvbnRleHQud2lkdGggKiByYXRpbywgY29udGV4dC5oZWlnaHQgKiByYXRpbyApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cbiAgICAgIHBhcmVudCA9IGNvbnRleHQuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgaW5kZXggPSBpbnN0YW5jZXMuaW5kZXhPZiggY29udGV4dCApO1xuXG4gICAgICBpZiAoIHBhcmVudCApIHBhcmVudC5yZW1vdmVDaGlsZCggY29udGV4dC5lbGVtZW50ICk7XG4gICAgICBpZiAoIH5pbmRleCApIGluc3RhbmNlcy5zcGxpY2UoIGluZGV4LCAxICk7XG5cbiAgICAgIGJpbmQoIGZhbHNlICk7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuXG4gICAgZXh0ZW5kKCBjb250ZXh0LCB7XG5cbiAgICAgIHRvdWNoZXM6IHRvdWNoZXMsXG4gICAgICBtb3VzZTogbW91c2UsXG4gICAgICBrZXlzOiBrZXlzLFxuXG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgIG1pbGxpczogMCxcbiAgICAgIG5vdzogTmFOLFxuICAgICAgZHQ6IE5hTixcblxuICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgIHRvZ2dsZTogdG9nZ2xlLFxuICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgc3RvcDogc3RvcFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2VzLnB1c2goIGNvbnRleHQgKTtcblxuICAgIHJldHVybiAoIGNvbnRleHQuYXV0b3N0YXJ0ICYmIHN0YXJ0KCksIGJpbmQoIHRydWUgKSwgcmVzaXplKCksIHVwZGF0ZSgpLCBjb250ZXh0ICk7XG4gIH1cblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBHbG9iYWwgQVBJXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciBlbGVtZW50LCBjb250ZXh0LCBTa2V0Y2ggPSB7XG5cbiAgICBDQU5WQVM6IENBTlZBUyxcbiAgICBXRUJfR0w6IFdFQkdMLFxuICAgIFdFQkdMOiBXRUJHTCxcbiAgICBET006IERPTSxcblxuICAgIGluc3RhbmNlczogaW5zdGFuY2VzLFxuXG4gICAgaW5zdGFsbDogZnVuY3Rpb24oIGNvbnRleHQgKSB7XG5cbiAgICAgIGlmICggIWNvbnRleHRbIEhBU19TS0VUQ0ggXSApIHtcblxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBNQVRIX1BST1BTLmxlbmd0aDsgaSsrIClcblxuICAgICAgICAgIGNvbnRleHRbIE1BVEhfUFJPUFNbaV0gXSA9IE1bIE1BVEhfUFJPUFNbaV0gXTtcblxuICAgICAgICBleHRlbmQoIGNvbnRleHQsIHtcblxuICAgICAgICAgIFRXT19QSTogTS5QSSAqIDIsXG4gICAgICAgICAgSEFMRl9QSTogTS5QSSAvIDIsXG4gICAgICAgICAgUVVBUlRFUl9QSTogTS5QSSAvIDQsXG5cbiAgICAgICAgICByYW5kb206IGZ1bmN0aW9uKCBtaW4sIG1heCApIHtcblxuICAgICAgICAgICAgaWYgKCBpc0FycmF5KCBtaW4gKSApXG5cbiAgICAgICAgICAgICAgcmV0dXJuIG1pblsgfn4oIE0ucmFuZG9tKCkgKiBtaW4ubGVuZ3RoICkgXTtcblxuICAgICAgICAgICAgaWYgKCAhaXNOdW1iZXIoIG1heCApIClcblxuICAgICAgICAgICAgICBtYXggPSBtaW4gfHwgMSwgbWluID0gMDtcblxuICAgICAgICAgICAgcmV0dXJuIG1pbiArIE0ucmFuZG9tKCkgKiAoIG1heCAtIG1pbiApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBsZXJwOiBmdW5jdGlvbiggbWluLCBtYXgsIGFtb3VudCApIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1pbiArIGFtb3VudCAqICggbWF4IC0gbWluICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1hcDogZnVuY3Rpb24oIG51bSwgbWluQSwgbWF4QSwgbWluQiwgbWF4QiApIHtcblxuICAgICAgICAgICAgcmV0dXJuICggbnVtIC0gbWluQSApIC8gKCBtYXhBIC0gbWluQSApICogKCBtYXhCIC0gbWluQiApICsgbWluQjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRleHRbIEhBU19TS0VUQ0ggXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoIG9wdGlvbnMgfHwge30sIGRlZmF1bHRzICk7XG5cbiAgICAgIGlmICggb3B0aW9ucy5nbG9iYWxzICkgU2tldGNoLmluc3RhbGwoIHNlbGYgKTtcblxuICAgICAgZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCB8fCBkb2MuY3JlYXRlRWxlbWVudCggb3B0aW9ucy50eXBlID09PSBET00gPyAnZGl2JyA6ICdjYW52YXMnICk7XG5cbiAgICAgIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHN3aXRjaCggb3B0aW9ucy50eXBlICkge1xuXG4gICAgICAgICAgY2FzZSBDQU5WQVM6XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldENvbnRleHQoICcyZCcsIG9wdGlvbnMgKTtcblxuICAgICAgICAgIGNhc2UgV0VCR0w6XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldENvbnRleHQoICd3ZWJnbCcsIG9wdGlvbnMgKSB8fCBlbGVtZW50LmdldENvbnRleHQoICdleHBlcmltZW50YWwtd2ViZ2wnLCBvcHRpb25zICk7XG5cbiAgICAgICAgICBjYXNlIERPTTpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2FudmFzID0gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICB9KSgpO1xuXG4gICAgICAoIG9wdGlvbnMuY29udGFpbmVyIHx8IGRvYy5ib2R5ICkuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcblxuICAgICAgcmV0dXJuIFNrZXRjaC5hdWdtZW50KCBjb250ZXh0LCBvcHRpb25zICk7XG4gICAgfSxcblxuICAgIGF1Z21lbnQ6IGZ1bmN0aW9uKCBjb250ZXh0LCBvcHRpb25zICkge1xuXG4gICAgICBvcHRpb25zID0gZXh0ZW5kKCBvcHRpb25zIHx8IHt9LCBkZWZhdWx0cyApO1xuXG4gICAgICBvcHRpb25zLmVsZW1lbnQgPSBjb250ZXh0LmNhbnZhcyB8fCBjb250ZXh0O1xuICAgICAgb3B0aW9ucy5lbGVtZW50LmNsYXNzTmFtZSArPSAnIHNrZXRjaCc7XG5cbiAgICAgIGV4dGVuZCggY29udGV4dCwgb3B0aW9ucywgdHJ1ZSApO1xuXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IoIGNvbnRleHQgKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgU2hpbXNcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIHZlbmRvcnMgPSBbICdtcycsICdtb3onLCAnd2Via2l0JywgJ28nIF07XG4gIHZhciBzY29wZSA9IHNlbGY7XG4gIHZhciB0aGVuID0gMDtcblxuICB2YXIgYSA9ICdBbmltYXRpb25GcmFtZSc7XG4gIHZhciBiID0gJ3JlcXVlc3QnICsgYTtcbiAgdmFyIGMgPSAnY2FuY2VsJyArIGE7XG5cbiAgdmFyIHJBRiA9IHNjb3BlWyBiIF07XG4gIHZhciBjQUYgPSBzY29wZVsgYyBdO1xuXG4gIGZvciAoIHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICFyQUY7IGkrKyApIHtcblxuICAgIHJBRiA9IHNjb3BlWyB2ZW5kb3JzWyBpIF0gKyAnUmVxdWVzdCcgKyBhIF07XG4gICAgY0FGID0gc2NvcGVbIHZlbmRvcnNbIGkgXSArICdDYW5jZWwnICsgYSBdO1xuICB9XG5cbiAgc2NvcGVbIGIgXSA9IHJBRiA9IHJBRiB8fCBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cbiAgICB2YXIgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIGR0ID0gTS5tYXgoIDAsIDE2IC0gKCBub3cgLSB0aGVuICkgKTtcbiAgICB2YXIgaWQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIGNhbGxiYWNrKCBub3cgKyBkdCApO1xuICAgIH0sIGR0ICk7XG5cbiAgICB0aGVuID0gbm93ICsgZHQ7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIHNjb3BlWyBjIF0gPSBjQUYgPSBjQUYgfHwgZnVuY3Rpb24oIGlkICkge1xuICAgIGNsZWFyVGltZW91dCggaWQgKTtcbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBPdXRwdXRcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgcmV0dXJuIFNrZXRjaDtcblxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9za2V0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2luZ0NhbGN1bGF0b3Ioc2xpZGVycywgbWVzc2FnZXMpe1xuICB2YXIgU2xpZGVyID0gcmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIik7XG4gIG1lc3NhZ2VzID0gbWVzc2FnZXNbJ2ZpbmFuY2VkJ107XG4gIHNsaWRlcnMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgY29uc3QgaHRtbFNsaWRlciA9IHRoaXM7XG4gICAgY29uc3QgcHJpY2luZ0NvbXBvbmVudCA9ICQodGhpcykuY2xvc2VzdCgnLnByaWNpbmctY29tcG9uZW50Jyk7XG4gICAgdmFyIG15U2xpZGVyID0gbmV3IFNsaWRlcihodG1sU2xpZGVyKTtcbiAgICBteVNsaWRlci5vbignc2xpZGVTdG9wJywgZnVuY3Rpb24oY2xpY2tlZEluZGV4KXtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG1lc3NhZ2VzKVtjbGlja2VkSW5kZXhdO1xuICAgICAgaWYodHlwZW9mIG1lc3NhZ2VzW2tleV0gIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBpZih0eXBlb2YobWVzc2FnZXNba2V5XS5tb250aGx5KSA9PSAnc3RyaW5nJykgcHJpY2luZ0NvbXBvbmVudC5maW5kKCcucHJpY2UtbGFiZWwnKS5odG1sKG1lc3NhZ2VzW2tleV0ubW9udGhseSk7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLm1lc3NhZ2UpICE9PSAndW5kZWZpbmVkJykgcHJpY2luZ0NvbXBvbmVudC5maW5kKCcuZmluYW5jaW5nLWRldGFpbHMnKS5odG1sKG1lc3NhZ2VzW2tleV0ubWVzc2FnZVtXUEFTX0FQUC5sYW5nXSk7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLmxvZ28pID09ICdzdHJpbmcnKXtcbiAgICAgICAgICB2YXIgbG9nb0VsbSA9IHByaWNpbmdDb21wb25lbnQuZmluZCgnLmZpbmFuY2luZy1sb2dvJyk7XG4gICAgICAgICAgbG9nb0VsbS5hdHRyKCdzcmMnLG1lc3NhZ2VzW2tleV0ubG9nbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXHRcdFxuICBcdFx0dmFyIHBheW1lbnRQbGFuQ2FyZCA9IHByaWNpbmdDb21wb25lbnQuZmluZCgnLnBheW1lbnQtcGxhbicpO1xuICBcdFx0cGF5bWVudFBsYW5DYXJkLmFkZENsYXNzKFwiZ2xvd1wiKTtcbiAgXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIFx0XHRcdHBheW1lbnRQbGFuQ2FyZC5yZW1vdmVDbGFzcyhcImdsb3dcIik7XG4gIFx0XHR9LCAyMDApO1xuICAgICAgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9wcmljZUNhbGN1bGF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=