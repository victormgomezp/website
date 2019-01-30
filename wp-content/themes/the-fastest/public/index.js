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

/**
 * JOBS
**/

if(['job'].indexOf(WPAS_APP.view.slug) != -1){
  jQuery('.job-apply').click(function(e){
    document.querySelector("form").scrollIntoView();
    e.preventDefault();
    return false;
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL2ZpcmV3b3Jrcy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cG9ncmFwaHkvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwb2dyYXBoeS10aGVtZS1kb2VsZ2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXktcGVyY2VudGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwb2dyYXBoeS1icmVha3BvaW50LWNvbnN0YW50cy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC90b29sdGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3Jlc3BvbnNpdmUtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvc2tldGNoLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLEVBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RDs7QUFFQTtBQUNBOztBQUVBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtDQUFrQyxRQUFROztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixzR0FBc0c7O0FBRXJJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRDs7Ozs7Ozs7QUN4dUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsNEJBQTRCLG1CQUFPLENBQUMsQ0FBUSxHQUFHLG1CQUFPLENBQUMsQ0FBVztBQUNoSTtBQUNBO0FBQ0EsQ0FBQywyQkFBMkI7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FB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QWU7QUFDZixlQUFlLG1CQUFPLENBQUMsRUFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxLQUFLO0FBQ0wsR0FBRztBQUNILEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUGFydGljbGVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBTa2V0Y2ggPSByZXF1aXJlKFwiLi9za2V0Y2hcIik7XG4gIFxuZnVuY3Rpb24gUGFydGljbGUoIHgsIHksIHJhZGl1cyApIHtcblx0dGhpcy5pbml0KCB4LCB5LCByYWRpdXMgKTtcbn1cblBhcnRpY2xlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICBcdGluaXQ6IGZ1bmN0aW9uKCB4LCB5LCByYWRpdXMgKSB7XG4gICAgXG4gICAgXHRcdHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIFxuICAgIFx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDtcbiAgICBcdFx0dGhpcy53YW5kZXIgPSAwLjE1O1xuICAgIFx0XHR0aGlzLnRoZXRhID0gcmFuZG9tKCBUV09fUEkgKTtcbiAgICBcdFx0dGhpcy5kcmFnID0gMC45MjtcbiAgICBcdFx0dGhpcy5jb2xvciA9ICcjZmZmJztcbiAgICBcbiAgICBcdFx0dGhpcy54ID0geCB8fCAwLjA7XG4gICAgXHRcdHRoaXMueSA9IHkgfHwgMC4wO1xuICAgIFxuICAgIFx0XHR0aGlzLnZ4ID0gMC4wO1xuICAgIFx0XHR0aGlzLnZ5ID0gMC4wO1xuICAgIFx0fSxcbiAgICBcbiAgICBcdG1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIFx0XHR0aGlzLnggKz0gdGhpcy52eDtcbiAgICBcdFx0dGhpcy55ICs9IHRoaXMudnk7XG4gICAgXG4gICAgXHRcdHRoaXMudnggKj0gdGhpcy5kcmFnO1xuICAgIFx0XHR0aGlzLnZ5ICo9IHRoaXMuZHJhZztcbiAgICBcbiAgICBcdFx0dGhpcy50aGV0YSArPSByYW5kb20oIC0wLjUsIDAuNSApICogdGhpcy53YW5kZXI7XG4gICAgXHRcdHRoaXMudnggKz0gc2luKCB0aGlzLnRoZXRhICkgKiAwLjE7XG4gICAgXHRcdHRoaXMudnkgKz0gY29zKCB0aGlzLnRoZXRhICkgKiAwLjE7XG4gICAgXG4gICAgXHRcdHRoaXMucmFkaXVzICo9IDAuOTY7XG4gICAgXHRcdHRoaXMuYWxpdmUgPSB0aGlzLnJhZGl1cyA+IDAuNTtcbiAgICBcdH0sXG4gICAgXG4gICAgXHRkcmF3OiBmdW5jdGlvbiggY3R4ICkge1xuICAgIFxuICAgIFx0XHRjdHguYmVnaW5QYXRoKCk7XG4gICAgXHRcdGN0eC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgVFdPX1BJICk7XG4gICAgXHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIFx0XHRjdHguZmlsbCgpO1xuICAgIFx0fVxuICAgIH07XG4gIFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb250YWluZXIpe1xuICB2YXIgTUFYX1BBUlRJQ0xFUyA9IDI4MDtcbiAgdmFyIENPTE9VUlMgPSBbICcjNjlEMkU3JywgJyNBN0RCRDgnLCAnI0UwRTRDQycsICcjRjM4NjMwJywgJyNGQTY5MDAnLCAnI0ZGNEU1MCcsICcjRjlENDIzJyBdO1xuICB2YXIgcGFydGljbGVzID0gW107XG4gIHZhciBwb29sID0gW107XG4gIFxuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgdmFyIGZpcmV3b3Jrc1NrZXRjaCA9IFNrZXRjaC5jcmVhdGUoeyBjb250YWluZXI6IGNvbnRhaW5lciB9KTtcbiAgZmlyZXdvcmtzU2tldGNoLnNldHVwID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdC8vIFNldCBvZmYgc29tZSBpbml0aWFsIHBhcnRpY2xlcy5cbiAgXHR2YXIgaSwgeCwgeTtcbiAgXG4gIFx0Zm9yICggaSA9IDA7IGkgPCAyMDsgaSsrICkge1xuICBcdFx0eCA9ICggZmlyZXdvcmtzU2tldGNoLndpZHRoICogMC41ICkgKyByYW5kb20oIC0xMDAsIDEwMCApO1xuICBcdFx0eSA9ICggZmlyZXdvcmtzU2tldGNoLmhlaWdodCAqIDAuNSApICsgcmFuZG9tKCAtMTAwLCAxMDAgKTtcbiAgXHRcdGZpcmV3b3Jrc1NrZXRjaC5zcGF3biggeCwgeSApO1xuICBcdH1cbiAgfTtcbiAgZmlyZXdvcmtzU2tldGNoLnNwYXduID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIFxuICBcdGlmICggcGFydGljbGVzLmxlbmd0aCA+PSBNQVhfUEFSVElDTEVTIClcbiAgXHRcdHBvb2wucHVzaCggcGFydGljbGVzLnNoaWZ0KCkgKTtcbiAgXG4gIFx0dmFyIHBhcnRpY2xlID0gcG9vbC5sZW5ndGggPyBwb29sLnBvcCgpIDogbmV3IFBhcnRpY2xlKCk7XG4gIFx0cGFydGljbGUuaW5pdCggeCwgeSwgcmFuZG9tKCA1LCA0MCApICk7XG4gIFxuICBcdHBhcnRpY2xlLndhbmRlciA9IHJhbmRvbSggMC41LCAyLjAgKTtcbiAgXHRwYXJ0aWNsZS5jb2xvciA9IHJhbmRvbSggQ09MT1VSUyApO1xuICBcdHBhcnRpY2xlLmRyYWcgPSByYW5kb20oIDAuOSwgMC45OSApO1xuICBcbiAgXHR2YXIgdGhldGEgPSByYW5kb20oIFRXT19QSSApO1xuICBcdHZhciBmb3JjZSA9IHJhbmRvbSggMiwgOCApO1xuICBcbiAgXHRwYXJ0aWNsZS52eCA9IHNpbiggdGhldGEgKSAqIGZvcmNlO1xuICBcdHBhcnRpY2xlLnZ5ID0gY29zKCB0aGV0YSApICogZm9yY2U7XG4gIFxuICBcdHBhcnRpY2xlcy5wdXNoKCBwYXJ0aWNsZSApO1xuICB9XG4gIGZpcmV3b3Jrc1NrZXRjaC51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0dmFyIGksIHBhcnRpY2xlO1xuICBcbiAgXHRmb3IgKCBpID0gcGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuICBcbiAgXHRcdHBhcnRpY2xlID0gcGFydGljbGVzW2ldO1xuICBcbiAgXHRcdGlmICggcGFydGljbGUuYWxpdmUgKSBwYXJ0aWNsZS5tb3ZlKCk7XG4gIFx0XHRlbHNlIHBvb2wucHVzaCggcGFydGljbGVzLnNwbGljZSggaSwgMSApWzBdICk7XG4gIFx0fVxuICB9O1xuICBmaXJld29ya3NTa2V0Y2guZHJhdyA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHRmaXJld29ya3NTa2V0Y2guZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uICA9ICdsaWdodGVyJztcbiAgXHRcbiAgXHRmb3IgKCB2YXIgaSA9IHBhcnRpY2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcbiAgXHRcdHBhcnRpY2xlc1tpXS5kcmF3KCBmaXJld29ya3NTa2V0Y2ggKTtcbiAgXHR9XG4gIH07XG4gIGZpcmV3b3Jrc1NrZXRjaC5tb3VzZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIFxuICAgICAgXHR2YXIgcGFydGljbGUsIHRoZXRhLCBmb3JjZSwgdG91Y2gsIG1heCwgaSwgaiwgbjtcbiAgICAgIFxuICAgICAgXHRmb3IgKCBpID0gMCwgbiA9IGZpcmV3b3Jrc1NrZXRjaC50b3VjaGVzLmxlbmd0aDsgaSA8IG47IGkrKyApIHtcbiAgICAgIFxuICAgICAgXHRcdHRvdWNoID0gZmlyZXdvcmtzU2tldGNoLnRvdWNoZXNbaV0sIG1heCA9IHJhbmRvbSggMSwgNCApO1xuICAgICAgXHRcdGZvciAoIGogPSAwOyBqIDwgbWF4OyBqKysgKSBmaXJld29ya3NTa2V0Y2guc3Bhd24oIHRvdWNoLngsIHRvdWNoLnkgKTtcbiAgICAgIFx0fVxuICAgICAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvZmlyZXdvcmtzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qIGdsb2JhbCBXUEFTX0FQUCwgJCAqL1xucmVxdWlyZSgnLi4vc3R5bGVzL2luZGV4LnNjc3MnKTtcblxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAndHlwb2dyYXBoeSc7XG5pbXBvcnQgZG9lbGdlclRoZW1lIGZyb20gJ3R5cG9ncmFwaHktdGhlbWUtZG9lbGdlcic7XG5jb25zdCB0eXBvZ3JhcGh5ID0gbmV3IFR5cG9ncmFwaHkoZG9lbGdlclRoZW1lKTtcbnR5cG9ncmFwaHkuaW5qZWN0U3R5bGVzKCk7XG5cbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdXRpbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90b29sdGlwJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcbmltcG9ydCAnLi9wYWdlcy9hbGwuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzJztcbmltcG9ydCB7TWFrZVN0aWNreX0gZnJvbSAnLi9jb21tb24vc3RpY2t5LXRvZ2dsZS5qcyc7XG5pbXBvcnQge1NtYXJ0RmlsdGVyc30gZnJvbSAnLi9jb21tb24vc21hcnQtZmlsdGVycy5qcyc7XG5pbXBvcnQgbG9hZFZpZGVvIGZyb20gXCIuL2NvbW1vbi9yZXNwb25zaXZlLXZpZGVvXCI7XG5cbmNvbnNvbGUubG9nKFdQQVNfQVBQKTtcbldQQVNfQVBQLmxvYWRWaWRlbyA9IGxvYWRWaWRlbztcbi8qKlxuICogSE9NRVxuKiovXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdob21lJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdpbmljaW8nKXtcbiAgXG4gIC8vbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL2hvbWUtZGFyay5tcDQnKTtcbiAgalF1ZXJ5KCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICAkKCcudmFsdWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICBcdHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XG4gIFx0JCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3dpZHRoJywgdGV4dCk7XG4gIH0pO1xuICAkKCcuYmxvY2snKS50b29sdGlwKCk7XG4gIFxuICB2YXIgZmlyZXdvcmtzID0gcmVxdWlyZSgnLi9saWIvZmlyZXdvcmtzLmpzJyk7XG4gIHZhciBjYW52YXNCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubWFzdGhlYWQnICk7XG4gIGZpcmV3b3JrcyhjYW52YXNCZyk7XG59XG5cbi8qKlxuICogVEhFIFBST0dSQU1cbioqL1xuXG5pZihbJ3BhZ2UtdGhlLXByb2dyYW0nLCdzaW5nbGUtZnVsbC1zdGFjay1wYXJ0LXRpbWUnLCdzaW5nbGUtZnVsbC1zdGFjaycsJ3NpbmdsZS13ZWItZGV2ZWxvcG1lbnQnLCdzaW5nbGUtY29kaW5nLWludHJvJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSE9IC0xKXtcbiAgXG4gIHZhciBiYXJCcmVha3BvaW50ID0gJCgnI2Jhci1icmVha3BvaW50Jyk7XG4gIGlmKCFiYXJCcmVha3BvaW50KSB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIGJyZWF0aGVwb2ludCBlc3RhYmxpc2hlZCBmb3IgdGhlIGJhcicpO1xuICBcbiAgdmFyIG1heFN0aWNrUG9zaXRpb24gPSBiYXJCcmVha3BvaW50Lm9mZnNldCgpLnRvcDtcbiAgTWFrZVN0aWNreS5pbml0KCdbZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl0nLCBtYXhTdGlja1Bvc2l0aW9uLCAyMCk7XG4gIFxuICAvL2FuaW1hdGlvbiBmb3IgdGhlIHByb2dyYW1cbiAgdmFyIFRoZVByb2dyYW0gPSByZXF1aXJlKCcuL3BhZ2VzL3Byb2dyYW0uanMnKS5kZWZhdWx0O1xuICBUaGVQcm9ncmFtLmluaXQoKTtcbiAgXG59XG5cblxuXG5cbi8qKlxuICogUFJJQ0lOR1xuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByaWNpbmcnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByZWNpbycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL3ByaWNpbmcubXA0Jyk7XG4gIFxuICB2YXIgZmlyZXdvcmtzID0gcmVxdWlyZSgnLi9saWIvZmlyZXdvcmtzLmpzJyk7XG4gIHZhciBjYW52YXNCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjYmctc2tldGNoJyApO1xuICBmaXJld29ya3MoY2FudmFzQmcpO1xuXG59XG5cbi8qKlxuICogQ0FMRU5EQVJcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdjYWxlbmRhcicgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAnY2FsZW5kYXJpbycpe1xuXG4gIFNtYXJ0RmlsdGVycy5pbml0KHtcbiAgICBsb2FkaW5nQW5pbWF0aW9uOiAnLmNvdXJzZXMgLmxvYWRpbmctYW5pbWF0aW9uJyxcbiAgICByZXN1bHRzQ29udGFpbmVyOiAnLmNvdXJzZXMgLmxpc3QtZ3JvdXAnLFxuICAgIGZpbHRlckRyb3Bkb3duOiAnLmRyb3Bkb3duLWZpbHRlciBhJyxcbiAgICBmaWx0ZXJzOiBbXG4gICAgICB7IGJ1dHRvbjogJyNsb2NhdGlvblNlbGVjdG9yJywgdXJsS2V5OiAnbCcsIG9wdGlvbnM6ICcubG9jYXRpb24tb3B0aW9uJyB9LFxuICAgICAgeyBidXR0b246ICcjbGFuZ1NlbGVjdG9yJywgdXJsS2V5OiAnbGFuZycsIG9wdGlvbnM6ICcubGFuZy1vcHRpb24nfSxcbiAgICAgIHsgYnV0dG9uOiAnI3R5cGVTZWxlY3RvcicsIHVybEtleTogJ3R5cGUnLCBvcHRpb25zOiAnLnR5cGUtb3B0aW9uJ31cbiAgICBdXG4gIH0pO1xuICBcbiAgTWFrZVN0aWNreS5pbml0KCdbZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl0nLCA0MDAwKTtcbiAgICBcbn1cblxuLyoqXG4gKiBMT0NBVElPTlxuKiovXG5cbmlmKFsnc2luZ2xlLWxvY2F0aW9uJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSAhPSAtMSl7XG4gIHJlcXVpcmUoJy4vcGFnZXMvbG9jYXRpb24uanMnKTtcbn1cblxuLyoqXG4gKiBQQVJUTkVSU1xuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3BhcnRuZXJzJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdzb2Npb3MnKXtcbiAgXG4gIGpRdWVyeSgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL29mZmljZS5tcDQnLHtvdmVybGF5OiAnYmxhY2snfSk7XG59XG5cbi8qKlxuICogSk9CU1xuKiovXG5cbmlmKFsnam9iJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnNsdWcpICE9IC0xKXtcbiAgalF1ZXJ5KCcuam9iLWFwcGx5JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvc3R5bGVzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdD1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxyPU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7dmFyIG4sbyxpPWZ1bmN0aW9uKCl7dHJ5e2lmKCFPYmplY3QuYXNzaWduKXJldHVybiExO3ZhciB0PW5ldyBTdHJpbmcoXCJhYmNcIik7aWYodFs1XT1cImRlXCIsXCI1XCI9PT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KVswXSlyZXR1cm4hMTtmb3IodmFyIGU9e30scj0wO3I8MTA7cisrKWVbXCJfXCIrU3RyaW5nLmZyb21DaGFyQ29kZShyKV09cjtpZihcIjAxMjM0NTY3ODlcIiE9PU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0pLmpvaW4oXCJcIikpcmV0dXJuITE7dmFyIG49e307cmV0dXJuXCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24odCl7blt0XT10fSksXCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiPT09T2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSxuKSkuam9pbihcIlwiKX1jYXRjaCh0KXtyZXR1cm4hMX19KCk/T2JqZWN0LmFzc2lnbjpmdW5jdGlvbihuLG8pe2Zvcih2YXIgaSxhLHU9ZnVuY3Rpb24odCl7aWYobnVsbD09PXR8fHZvaWQgMD09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkXCIpO3JldHVybiBPYmplY3QodCl9KG4pLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKXtmb3IodmFyIGwgaW4gaT1PYmplY3QoYXJndW1lbnRzW2NdKSllLmNhbGwoaSxsKSYmKHVbbF09aVtsXSk7aWYodCl7YT10KGkpO2Zvcih2YXIgZj0wO2Y8YS5sZW5ndGg7ZisrKXIuY2FsbChpLGFbZl0pJiYodVthW2ZdXT1pW2FbZl1dKX19cmV0dXJuIHV9LGE9ZnVuY3Rpb24odCxlKXtlfHwoZT1bMCxcIlwiXSksdD1TdHJpbmcodCk7dmFyIHI9cGFyc2VGbG9hdCh0LDEwKTtyZXR1cm4gZVswXT1yLGVbMV09dC5tYXRjaCgvW1xcZC5cXC1cXCtdKlxccyooLiopLylbMV18fFwiXCIsZX0sdT1mdW5jdGlvbih0KXtyZXR1cm4gYSh0KVswXX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dCYmKHQ9dCksZnVuY3Rpb24oZSxyLG4sbyl7bnVsbD09biYmKG49dCksbnVsbD09byYmKG89bik7dmFyIGk9YShlKVsxXTtpZihpPT09cilyZXR1cm4gZTt2YXIgYz11KGUpO2lmKFwicHhcIiE9PWkpaWYoXCJlbVwiPT09aSljPXUoZSkqdShuKTtlbHNlIGlmKFwicmVtXCI9PT1pKWM9dShlKSp1KHQpO2Vsc2V7aWYoXCJleFwiIT09aSlyZXR1cm4gZTtjPXUoZSkqdShuKSoyfXZhciBsPWM7aWYoXCJweFwiIT09cilpZihcImVtXCI9PT1yKWw9Yy91KG8pO2Vsc2UgaWYoXCJyZW1cIj09PXIpbD1jL3UodCk7ZWxzZXtpZihcImV4XCIhPT1yKXJldHVybiBlO2w9Yy91KG8pLzJ9cmV0dXJuIHBhcnNlRmxvYXQobC50b0ZpeGVkKDUpKStyfX0sbD1hLGY9ZnVuY3Rpb24odCl7cmV0dXJuIGwodClbMV19LHM9ZnVuY3Rpb24odCl7cmV0dXJuIGwodClbMF19LHA9e2Jhc2VGb250U2l6ZTpcIjE2cHhcIixiYXNlTGluZUhlaWdodDoxLjUscmh5dGhtVW5pdDpcInJlbVwiLGRlZmF1bHRSaHl0aG1Cb3JkZXJXaWR0aDpcIjFweFwiLGRlZmF1bHRSaHl0aG1Cb3JkZXJTdHlsZTpcInNvbGlkXCIscm91bmRUb05lYXJlc3RIYWxmTGluZTohMCxtaW5MaW5lUGFkZGluZzpcIjJweFwifSx2PWZ1bmN0aW9uKHQsZSl7dmFyIHIsbj1jKGUuYmFzZUZvbnRTaXplKSxvPXMobih0LFwicHhcIikpLGk9cyhlLmJhc2VMaW5lSGVpZ2h0SW5QeCksYT1zKG4oZS5taW5MaW5lUGFkZGluZyxcInB4XCIpKTtyZXR1cm4ocj1lLnJvdW5kVG9OZWFyZXN0SGFsZkxpbmU/TWF0aC5jZWlsKDIqby9pKS8yOk1hdGguY2VpbChvL2kpKSppLW88MiphJiYocis9ZS5yb3VuZFRvTmVhcmVzdEhhbGZMaW5lPy41OjEpLHJ9LGg9ZnVuY3Rpb24odCl7dmFyIGU9Yyh0LmJhc2VGb250U2l6ZSk7cmV0dXJuIGZ1bmN0aW9uKHIsbixvKXtudWxsPT1yJiYocj0xKSxudWxsPT1uJiYobj10LmJhc2VGb250U2l6ZSksbnVsbD09byYmKG89MCk7dmFyIGk9cipzKHQuYmFzZUxpbmVIZWlnaHRJblB4KS1vK1wicHhcIixhPWUoaSx0LnJoeXRobVVuaXQsbik7cmV0dXJuXCJweFwiPT09ZihhKSYmKGE9TWF0aC5mbG9vcihzKGEpKStmKGEpKSxwYXJzZUZsb2F0KHMoYSkudG9GaXhlZCg1KSkrZihhKX19LGQ9XCJbb2JqZWN0IE51bWJlcl1cIixiPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7bj1mdW5jdGlvbih0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdHx8ZnVuY3Rpb24odCl7cmV0dXJuISF0JiZcIm9iamVjdFwiPT10eXBlb2YgdH0odCkmJmIuY2FsbCh0KT09ZH0sbz17XCJtaW5vciBzZWNvbmRcIjoxNi8xNSxcIm1ham9yIHNlY29uZFwiOjkvOCxcIm1pbm9yIHRoaXJkXCI6MS4yLFwibWFqb3IgdGhpcmRcIjo0LzMsXCJkaW1pbmlzaGVkIGZvdXJ0aFwiOk1hdGguc3FydCgyKSxcInBlcmZlY3QgZmlmdGhcIjoxLjUsXCJtaW5vciBzaXh0aFwiOjEuNixnb2xkZW46MS42MTgwMzM5ODg3NSxwaGk6MS42MTgwMzM5ODg3NSxcIm1ham9yIHNpeHRoXCI6NS8zLFwibWlub3Igc2V2ZW50aFwiOjE2LzksXCJtYWpvciBzZXZlbnRoXCI6MTUvOCxvY3RhdmU6MixcIm1ham9yIHRlbnRoXCI6Mi41LFwibWFqb3IgZWxldmVudGhcIjo4LzMsXCJtYWpvciB0d2VsZnRoXCI6MyxcImRvdWJsZSBvY3RhdmVcIjo0fTtmdW5jdGlvbiBnKHQpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KHQpKSYmaXNGaW5pdGUodCl9dmFyIHk9ZnVuY3Rpb24odCxlLHIpe2lmKHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PXImJihyPSExKSxcImNvb2xcIj09PWU/ZT0yMzc6XCJzbGF0ZVwiPT09ZT9lPTEyMjpcIndhcm1cIj09PWUmJihlPTY5KSwhZyhlKSl0aHJvdyBuZXcgRXJyb3IoXCJIdWUgaXMgbm90IGEgbnVtYmVyXCIpO2lmKCFnKHQpKXRocm93IG5ldyBFcnJvcihcIkxpZ2h0bmVzcyBpcyBub3QgYSBudW1iZXJcIik7dD4xMDAmJih0PTEwMCksdDwwJiYodD0wKTt2YXIgbj0wO2lmKDAhPT1lKXtuPTE5LjkyOTc4Ky0uMzY1MTc1OSp0Ky4wMDE3MzcyMTQqTWF0aC5wb3codCwyKX12YXIgbz0wO3JldHVybiByPyhvPXQvMTAwLHQ9XCIxMDAlLFwiKToobz0oMTAwLXQpLzEwMCx0PVwiMCUsXCIpLFwiaHNsYShcIitlK1wiLFwiK24rXCIlLFwiK3QrbytcIilcIn0sbT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnt9O2Z1bmN0aW9uIGoodCxlKXtyZXR1cm4gdChlPXtleHBvcnRzOnt9fSxlLmV4cG9ydHMpLGUuZXhwb3J0c312YXIgXz1cIm9iamVjdFwiPT10eXBlb2YgbSYmbSYmbS5PYmplY3Q9PT1PYmplY3QmJm0sdz1cIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsTz1ffHx3fHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksUz1PLlN5bWJvbCx4PU9iamVjdC5wcm90b3R5cGUsej14Lmhhc093blByb3BlcnR5LEY9eC50b1N0cmluZyxrPVM/Uy50b1N0cmluZ1RhZzp2b2lkIDA7dmFyIEE9ZnVuY3Rpb24odCl7dmFyIGU9ei5jYWxsKHQsaykscj10W2tdO3RyeXt0W2tdPXZvaWQgMDt2YXIgbj0hMH1jYXRjaCh0KXt9dmFyIG89Ri5jYWxsKHQpO3JldHVybiBuJiYoZT90W2tdPXI6ZGVsZXRlIHRba10pLG99LEw9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgUD1mdW5jdGlvbih0KXtyZXR1cm4gTC5jYWxsKHQpfSxCPVwiW29iamVjdCBOdWxsXVwiLFQ9XCJbb2JqZWN0IFVuZGVmaW5lZF1cIixNPVM/Uy50b1N0cmluZ1RhZzp2b2lkIDA7dmFyIEU9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/dm9pZCAwPT09dD9UOkI6TSYmTSBpbiBPYmplY3QodCk/QSh0KTpQKHQpfTt2YXIgSD1mdW5jdGlvbih0KXt2YXIgZT10eXBlb2YgdDtyZXR1cm4gbnVsbCE9dCYmKFwib2JqZWN0XCI9PWV8fFwiZnVuY3Rpb25cIj09ZSl9LE49XCJbb2JqZWN0IEFzeW5jRnVuY3Rpb25dXCIsVz1cIltvYmplY3QgRnVuY3Rpb25dXCIsST1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsQz1cIltvYmplY3QgUHJveHldXCI7dmFyIFIsJD1mdW5jdGlvbih0KXtpZighSCh0KSlyZXR1cm4hMTt2YXIgZT1FKHQpO3JldHVybiBlPT1XfHxlPT1JfHxlPT1OfHxlPT1DfSxVPU9bXCJfX2NvcmUtanNfc2hhcmVkX19cIl0sRD0oUj0vW14uXSskLy5leGVjKFUmJlUua2V5cyYmVS5rZXlzLklFX1BST1RPfHxcIlwiKSk/XCJTeW1ib2woc3JjKV8xLlwiK1I6XCJcIjt2YXIgcT1mdW5jdGlvbih0KXtyZXR1cm4hIUQmJkQgaW4gdH0sVj1GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7dmFyIEo9ZnVuY3Rpb24odCl7aWYobnVsbCE9dCl7dHJ5e3JldHVybiBWLmNhbGwodCl9Y2F0Y2godCl7fXRyeXtyZXR1cm4gdCtcIlwifWNhdGNoKHQpe319cmV0dXJuXCJcIn0sWj0vXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvLEc9RnVuY3Rpb24ucHJvdG90eXBlLEs9T2JqZWN0LnByb3RvdHlwZSxZPVJlZ0V4cChcIl5cIitHLnRvU3RyaW5nLmNhbGwoSy5oYXNPd25Qcm9wZXJ0eSkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csXCJcXFxcJCZcIikucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZyxcIiQxLio/XCIpK1wiJFwiKTt2YXIgUT1mdW5jdGlvbih0KXtyZXR1cm4hKCFIKHQpfHxxKHQpKSYmKCQodCk/WTpaKS50ZXN0KEoodCkpfTt2YXIgWD1mdW5jdGlvbih0LGUpe3JldHVybiBudWxsPT10P3ZvaWQgMDp0W2VdfTt2YXIgdHQ9ZnVuY3Rpb24odCxlKXt2YXIgcj1YKHQsZSk7cmV0dXJuIFEocik/cjp2b2lkIDB9LGV0PWZ1bmN0aW9uKCl7dHJ5e3ZhciB0PXR0KE9iamVjdCxcImRlZmluZVByb3BlcnR5XCIpO3JldHVybiB0KHt9LFwiXCIse30pLHR9Y2F0Y2godCl7fX0oKTt2YXIgcnQ9ZnVuY3Rpb24odCxlLHIpe1wiX19wcm90b19fXCI9PWUmJmV0P2V0KHQsZSx7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsdmFsdWU6cix3cml0YWJsZTohMH0pOnRbZV09cn07dmFyIG50PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9PT1lfHx0IT10JiZlIT1lfSxvdD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBpdD1mdW5jdGlvbih0LGUscil7dmFyIG49dFtlXTtvdC5jYWxsKHQsZSkmJm50KG4scikmJih2b2lkIDAhPT1yfHxlIGluIHQpfHxydCh0LGUscil9LGF0PUFycmF5LmlzQXJyYXk7dmFyIHV0PWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZcIm9iamVjdFwiPT10eXBlb2YgdH0sY3Q9XCJbb2JqZWN0IFN5bWJvbF1cIjt2YXIgbHQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR8fHV0KHQpJiZFKHQpPT1jdH0sZnQ9L1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxzdD0vXlxcdyokLzt2YXIgcHQ9ZnVuY3Rpb24odCxlKXtpZihhdCh0KSlyZXR1cm4hMTt2YXIgcj10eXBlb2YgdDtyZXR1cm4hKFwibnVtYmVyXCIhPXImJlwic3ltYm9sXCIhPXImJlwiYm9vbGVhblwiIT1yJiZudWxsIT10JiYhbHQodCkpfHxzdC50ZXN0KHQpfHwhZnQudGVzdCh0KXx8bnVsbCE9ZSYmdCBpbiBPYmplY3QoZSl9LHZ0PXR0KE9iamVjdCxcImNyZWF0ZVwiKTt2YXIgaHQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5oYXModCkmJmRlbGV0ZSB0aGlzLl9fZGF0YV9fW3RdO3JldHVybiB0aGlzLnNpemUtPWU/MTowLGV9LGR0PVwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiLGJ0PU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIGd0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187aWYodnQpe3ZhciByPWVbdF07cmV0dXJuIHI9PT1kdD92b2lkIDA6cn1yZXR1cm4gYnQuY2FsbChlLHQpP2VbdF06dm9pZCAwfSx5dD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBtdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiB2dD92b2lkIDAhPT1lW3RdOnl0LmNhbGwoZSx0KX0sanQ9XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCI7dmFyIF90PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5fX2RhdGFfXztyZXR1cm4gdGhpcy5zaXplKz10aGlzLmhhcyh0KT8wOjEsclt0XT12dCYmdm9pZCAwPT09ZT9qdDplLHRoaXN9O2Z1bmN0aW9uIHd0KHQpe3ZhciBlPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPHI7KXt2YXIgbj10W2VdO3RoaXMuc2V0KG5bMF0sblsxXSl9fXd0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189dnQ/dnQobnVsbCk6e30sdGhpcy5zaXplPTB9LHd0LnByb3RvdHlwZS5kZWxldGU9aHQsd3QucHJvdG90eXBlLmdldD1ndCx3dC5wcm90b3R5cGUuaGFzPW10LHd0LnByb3RvdHlwZS5zZXQ9X3Q7dmFyIE90PXd0O3ZhciBTdD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj10Lmxlbmd0aDtyLS07KWlmKG50KHRbcl1bMF0sZSkpcmV0dXJuIHI7cmV0dXJuLTF9LHh0PUFycmF5LnByb3RvdHlwZS5zcGxpY2U7dmFyIHp0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX18scj1TdChlLHQpO3JldHVybiEocjwwfHwocj09ZS5sZW5ndGgtMT9lLnBvcCgpOnh0LmNhbGwoZSxyLDEpLC0tdGhpcy5zaXplLDApKX07dmFyIEZ0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX18scj1TdChlLHQpO3JldHVybiByPDA/dm9pZCAwOmVbcl1bMV19O3ZhciBrdD1mdW5jdGlvbih0KXtyZXR1cm4gU3QodGhpcy5fX2RhdGFfXyx0KT4tMX07dmFyIEF0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcy5fX2RhdGFfXyxuPVN0KHIsdCk7cmV0dXJuIG48MD8oKyt0aGlzLnNpemUsci5wdXNoKFt0LGVdKSk6cltuXVsxXT1lLHRoaXN9O2Z1bmN0aW9uIEx0KHQpe3ZhciBlPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPHI7KXt2YXIgbj10W2VdO3RoaXMuc2V0KG5bMF0sblsxXSl9fUx0LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189W10sdGhpcy5zaXplPTB9LEx0LnByb3RvdHlwZS5kZWxldGU9enQsTHQucHJvdG90eXBlLmdldD1GdCxMdC5wcm90b3R5cGUuaGFzPWt0LEx0LnByb3RvdHlwZS5zZXQ9QXQ7dmFyIFB0PUx0LEJ0PXR0KE8sXCJNYXBcIik7dmFyIFR0PWZ1bmN0aW9uKHQpe3ZhciBlPXR5cGVvZiB0O3JldHVyblwic3RyaW5nXCI9PWV8fFwibnVtYmVyXCI9PWV8fFwic3ltYm9sXCI9PWV8fFwiYm9vbGVhblwiPT1lP1wiX19wcm90b19fXCIhPT10Om51bGw9PT10fTt2YXIgTXQ9ZnVuY3Rpb24odCxlKXt2YXIgcj10Ll9fZGF0YV9fO3JldHVybiBUdChlKT9yW1wic3RyaW5nXCI9PXR5cGVvZiBlP1wic3RyaW5nXCI6XCJoYXNoXCJdOnIubWFwfTt2YXIgRXQ9ZnVuY3Rpb24odCl7dmFyIGU9TXQodGhpcyx0KS5kZWxldGUodCk7cmV0dXJuIHRoaXMuc2l6ZS09ZT8xOjAsZX07dmFyIEh0PWZ1bmN0aW9uKHQpe3JldHVybiBNdCh0aGlzLHQpLmdldCh0KX07dmFyIE50PWZ1bmN0aW9uKHQpe3JldHVybiBNdCh0aGlzLHQpLmhhcyh0KX07dmFyIFd0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9TXQodGhpcyx0KSxuPXIuc2l6ZTtyZXR1cm4gci5zZXQodCxlKSx0aGlzLnNpemUrPXIuc2l6ZT09bj8wOjEsdGhpc307ZnVuY3Rpb24gSXQodCl7dmFyIGU9LTEscj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8cjspe3ZhciBuPXRbZV07dGhpcy5zZXQoblswXSxuWzFdKX19SXQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgT3QsbWFwOm5ldyhCdHx8UHQpLHN0cmluZzpuZXcgT3R9fSxJdC5wcm90b3R5cGUuZGVsZXRlPUV0LEl0LnByb3RvdHlwZS5nZXQ9SHQsSXQucHJvdG90eXBlLmhhcz1OdCxJdC5wcm90b3R5cGUuc2V0PVd0O3ZhciBDdD1JdCxSdD1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIjtmdW5jdGlvbiAkdCh0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fG51bGwhPWUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihSdCk7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHMsbz1lP2UuYXBwbHkodGhpcyxuKTpuWzBdLGk9ci5jYWNoZTtpZihpLmhhcyhvKSlyZXR1cm4gaS5nZXQobyk7dmFyIGE9dC5hcHBseSh0aGlzLG4pO3JldHVybiByLmNhY2hlPWkuc2V0KG8sYSl8fGksYX07cmV0dXJuIHIuY2FjaGU9bmV3KCR0LkNhY2hlfHxDdCkscn0kdC5DYWNoZT1DdDt2YXIgVXQ9JHQsRHQ9NTAwO3ZhciBxdD0vW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2csVnQ9L1xcXFwoXFxcXCk/L2csSnQ9ZnVuY3Rpb24odCl7dmFyIGU9VXQodCxmdW5jdGlvbih0KXtyZXR1cm4gci5zaXplPT09RHQmJnIuY2xlYXIoKSx0fSkscj1lLmNhY2hlO3JldHVybiBlfShmdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gNDY9PT10LmNoYXJDb2RlQXQoMCkmJmUucHVzaChcIlwiKSx0LnJlcGxhY2UocXQsZnVuY3Rpb24odCxyLG4sbyl7ZS5wdXNoKG4/by5yZXBsYWNlKFZ0LFwiJDFcIik6cnx8dCl9KSxlfSk7dmFyIFp0PWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoLG89QXJyYXkobik7KytyPG47KW9bcl09ZSh0W3JdLHIsdCk7cmV0dXJuIG99LEd0PTEvMCxLdD1TP1MucHJvdG90eXBlOnZvaWQgMCxZdD1LdD9LdC50b1N0cmluZzp2b2lkIDA7dmFyIFF0PWZ1bmN0aW9uIHQoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoYXQoZSkpcmV0dXJuIFp0KGUsdCkrXCJcIjtpZihsdChlKSlyZXR1cm4gWXQ/WXQuY2FsbChlKTpcIlwiO3ZhciByPWUrXCJcIjtyZXR1cm5cIjBcIj09ciYmMS9lPT0tR3Q/XCItMFwiOnJ9O3ZhciBYdD1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9cIlwiOlF0KHQpfTt2YXIgdGU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gYXQodCk/dDpwdCh0LGUpP1t0XTpKdChYdCh0KSl9LGVlPTkwMDcxOTkyNTQ3NDA5OTEscmU9L14oPzowfFsxLTldXFxkKikkLzt2YXIgbmU9ZnVuY3Rpb24odCxlKXt2YXIgcj10eXBlb2YgdDtyZXR1cm4hIShlPW51bGw9PWU/ZWU6ZSkmJihcIm51bWJlclwiPT1yfHxcInN5bWJvbFwiIT1yJiZyZS50ZXN0KHQpKSYmdD4tMSYmdCUxPT0wJiZ0PGV9LG9lPTEvMDt2YXIgaWU9ZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHR8fGx0KHQpKXJldHVybiB0O3ZhciBlPXQrXCJcIjtyZXR1cm5cIjBcIj09ZSYmMS90PT0tb2U/XCItMFwiOmV9O3ZhciBhZT1mdW5jdGlvbih0LGUscixuKXtpZighSCh0KSlyZXR1cm4gdDtmb3IodmFyIG89LTEsaT0oZT10ZShlLHQpKS5sZW5ndGgsYT1pLTEsdT10O251bGwhPXUmJisrbzxpOyl7dmFyIGM9aWUoZVtvXSksbD1yO2lmKG8hPWEpe3ZhciBmPXVbY107dm9pZCAwPT09KGw9bj9uKGYsYyx1KTp2b2lkIDApJiYobD1IKGYpP2Y6bmUoZVtvKzFdKT9bXTp7fSl9aXQodSxjLGwpLHU9dVtjXX1yZXR1cm4gdH07dmFyIHVlPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gbnVsbD09dD90OmFlKHQsZSxyKX07dmFyIGNlPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoOysrcjxuJiYhMSE9PWUodFtyXSxyLHQpOyk7cmV0dXJuIHR9O3ZhciBsZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyLG4pe2Zvcih2YXIgbz0tMSxpPU9iamVjdChlKSxhPW4oZSksdT1hLmxlbmd0aDt1LS07KXt2YXIgYz1hW3Q/dTorK29dO2lmKCExPT09cihpW2NdLGMsaSkpYnJlYWt9cmV0dXJuIGV9fSgpO3ZhciBmZT1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj0tMSxuPUFycmF5KHQpOysrcjx0OyluW3JdPWUocik7cmV0dXJuIG59LHNlPVwiW29iamVjdCBBcmd1bWVudHNdXCI7dmFyIHBlPWZ1bmN0aW9uKHQpe3JldHVybiB1dCh0KSYmRSh0KT09c2V9LHZlPU9iamVjdC5wcm90b3R5cGUsaGU9dmUuaGFzT3duUHJvcGVydHksZGU9dmUucHJvcGVydHlJc0VudW1lcmFibGUsYmU9cGUoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzfSgpKT9wZTpmdW5jdGlvbih0KXtyZXR1cm4gdXQodCkmJmhlLmNhbGwodCxcImNhbGxlZVwiKSYmIWRlLmNhbGwodCxcImNhbGxlZVwiKX07dmFyIGdlPWZ1bmN0aW9uKCl7cmV0dXJuITF9LHllPWooZnVuY3Rpb24odCxlKXt2YXIgcj1lJiYhZS5ub2RlVHlwZSYmZSxuPXImJnQmJiF0Lm5vZGVUeXBlJiZ0LG89biYmbi5leHBvcnRzPT09cj9PLkJ1ZmZlcjp2b2lkIDA7dC5leHBvcnRzPShvP28uaXNCdWZmZXI6dm9pZCAwKXx8Z2V9KSxtZT05MDA3MTk5MjU0NzQwOTkxO3ZhciBqZT1mdW5jdGlvbih0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdCYmdD4tMSYmdCUxPT0wJiZ0PD1tZX0sX2U9e307X2VbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09X2VbXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09X2VbXCJbb2JqZWN0IEludDhBcnJheV1cIl09X2VbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPV9lW1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1fZVtcIltvYmplY3QgVWludDhBcnJheV1cIl09X2VbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1fZVtcIltvYmplY3QgVWludDE2QXJyYXldXCJdPV9lW1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09ITAsX2VbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09X2VbXCJbb2JqZWN0IEFycmF5XVwiXT1fZVtcIltvYmplY3QgQXJyYXlCdWZmZXJdXCJdPV9lW1wiW29iamVjdCBCb29sZWFuXVwiXT1fZVtcIltvYmplY3QgRGF0YVZpZXddXCJdPV9lW1wiW29iamVjdCBEYXRlXVwiXT1fZVtcIltvYmplY3QgRXJyb3JdXCJdPV9lW1wiW29iamVjdCBGdW5jdGlvbl1cIl09X2VbXCJbb2JqZWN0IE1hcF1cIl09X2VbXCJbb2JqZWN0IE51bWJlcl1cIl09X2VbXCJbb2JqZWN0IE9iamVjdF1cIl09X2VbXCJbb2JqZWN0IFJlZ0V4cF1cIl09X2VbXCJbb2JqZWN0IFNldF1cIl09X2VbXCJbb2JqZWN0IFN0cmluZ11cIl09X2VbXCJbb2JqZWN0IFdlYWtNYXBdXCJdPSExO3ZhciB3ZT1mdW5jdGlvbih0KXtyZXR1cm4gdXQodCkmJmplKHQubGVuZ3RoKSYmISFfZVtFKHQpXX07dmFyIE9lPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdChlKX19LFNlPWooZnVuY3Rpb24odCxlKXt2YXIgcj1lJiYhZS5ub2RlVHlwZSYmZSxuPXImJnQmJiF0Lm5vZGVUeXBlJiZ0LG89biYmbi5leHBvcnRzPT09ciYmXy5wcm9jZXNzLGk9ZnVuY3Rpb24oKXt0cnl7dmFyIHQ9biYmbi5yZXF1aXJlJiZuLnJlcXVpcmUoXCJ1dGlsXCIpLnR5cGVzO3JldHVybiB0fHxvJiZvLmJpbmRpbmcmJm8uYmluZGluZyhcInV0aWxcIil9Y2F0Y2godCl7fX0oKTt0LmV4cG9ydHM9aX0pLHhlPVNlJiZTZS5pc1R5cGVkQXJyYXksemU9eGU/T2UoeGUpOndlLEZlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIGtlPWZ1bmN0aW9uKHQsZSl7dmFyIHI9YXQodCksbj0hciYmYmUodCksbz0hciYmIW4mJnllKHQpLGk9IXImJiFuJiYhbyYmemUodCksYT1yfHxufHxvfHxpLHU9YT9mZSh0Lmxlbmd0aCxTdHJpbmcpOltdLGM9dS5sZW5ndGg7Zm9yKHZhciBsIGluIHQpIWUmJiFGZS5jYWxsKHQsbCl8fGEmJihcImxlbmd0aFwiPT1sfHxvJiYoXCJvZmZzZXRcIj09bHx8XCJwYXJlbnRcIj09bCl8fGkmJihcImJ1ZmZlclwiPT1sfHxcImJ5dGVMZW5ndGhcIj09bHx8XCJieXRlT2Zmc2V0XCI9PWwpfHxuZShsLGMpKXx8dS5wdXNoKGwpO3JldHVybiB1fSxBZT1PYmplY3QucHJvdG90eXBlO3ZhciBMZT1mdW5jdGlvbih0KXt2YXIgZT10JiZ0LmNvbnN0cnVjdG9yO3JldHVybiB0PT09KFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUucHJvdG90eXBlfHxBZSl9O3ZhciBQZT1mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gdChlKHIpKX19LEJlPVBlKE9iamVjdC5rZXlzLE9iamVjdCksVGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgTWU9ZnVuY3Rpb24odCl7aWYoIUxlKHQpKXJldHVybiBCZSh0KTt2YXIgZT1bXTtmb3IodmFyIHIgaW4gT2JqZWN0KHQpKVRlLmNhbGwodCxyKSYmXCJjb25zdHJ1Y3RvclwiIT1yJiZlLnB1c2gocik7cmV0dXJuIGV9O3ZhciBFZT1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9dCYmamUodC5sZW5ndGgpJiYhJCh0KX07dmFyIEhlPWZ1bmN0aW9uKHQpe3JldHVybiBFZSh0KT9rZSh0KTpNZSh0KX07dmFyIE5lPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsbil7aWYobnVsbD09cilyZXR1cm4gcjtpZighRWUocikpcmV0dXJuIHQocixuKTtmb3IodmFyIG89ci5sZW5ndGgsaT1lP286LTEsYT1PYmplY3Qocik7KGU/aS0tOisraTxvKSYmITEhPT1uKGFbaV0saSxhKTspO3JldHVybiByfX0oZnVuY3Rpb24odCxlKXtyZXR1cm4gdCYmbGUodCxlLEhlKX0pO3ZhciBXZT1mdW5jdGlvbih0KXtyZXR1cm4gdH07dmFyIEllPWZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpXZX07dmFyIENlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKGF0KHQpP2NlOk5lKSh0LEllKGUpKX0sUmU9XCJbb2JqZWN0IE51bWJlcl1cIjt2YXIgJGU9ZnVuY3Rpb24odCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHR8fHV0KHQpJiZFKHQpPT1SZX0sVWU9XCJbb2JqZWN0IFN0cmluZ11cIjt2YXIgRGU9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR8fCFhdCh0KSYmdXQodCkmJkUodCk9PVVlfTt2YXIgcWU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXyxyPWUuZGVsZXRlKHQpO3JldHVybiB0aGlzLnNpemU9ZS5zaXplLHJ9O3ZhciBWZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQodCl9O3ZhciBKZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModCl9LFplPTIwMDt2YXIgR2U9ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLl9fZGF0YV9fO2lmKHIgaW5zdGFuY2VvZiBQdCl7dmFyIG49ci5fX2RhdGFfXztpZighQnR8fG4ubGVuZ3RoPFplLTEpcmV0dXJuIG4ucHVzaChbdCxlXSksdGhpcy5zaXplPSsrci5zaXplLHRoaXM7cj10aGlzLl9fZGF0YV9fPW5ldyBDdChuKX1yZXR1cm4gci5zZXQodCxlKSx0aGlzLnNpemU9ci5zaXplLHRoaXN9O2Z1bmN0aW9uIEtlKHQpe3ZhciBlPXRoaXMuX19kYXRhX189bmV3IFB0KHQpO3RoaXMuc2l6ZT1lLnNpemV9S2UucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1uZXcgUHQsdGhpcy5zaXplPTB9LEtlLnByb3RvdHlwZS5kZWxldGU9cWUsS2UucHJvdG90eXBlLmdldD1WZSxLZS5wcm90b3R5cGUuaGFzPUplLEtlLnByb3RvdHlwZS5zZXQ9R2U7dmFyIFllPUtlO3ZhciBRZT1mdW5jdGlvbih0LGUscil7KHZvaWQgMD09PXJ8fG50KHRbZV0scikpJiYodm9pZCAwIT09cnx8ZSBpbiB0KXx8cnQodCxlLHIpfSxYZT1qKGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZSYmIWUubm9kZVR5cGUmJmUsbj1yJiZ0JiYhdC5ub2RlVHlwZSYmdCxvPW4mJm4uZXhwb3J0cz09PXI/Ty5CdWZmZXI6dm9pZCAwLGk9bz9vLmFsbG9jVW5zYWZlOnZvaWQgMDt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtpZihlKXJldHVybiB0LnNsaWNlKCk7dmFyIHI9dC5sZW5ndGgsbj1pP2kocik6bmV3IHQuY29uc3RydWN0b3Iocik7cmV0dXJuIHQuY29weShuKSxufX0pLHRyPU8uVWludDhBcnJheTt2YXIgZXI9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IHQuY29uc3RydWN0b3IodC5ieXRlTGVuZ3RoKTtyZXR1cm4gbmV3IHRyKGUpLnNldChuZXcgdHIodCkpLGV9O3ZhciBycj1mdW5jdGlvbih0LGUpe3ZhciByPWU/ZXIodC5idWZmZXIpOnQuYnVmZmVyO3JldHVybiBuZXcgdC5jb25zdHJ1Y3RvcihyLHQuYnl0ZU9mZnNldCx0Lmxlbmd0aCl9O3ZhciBucj1mdW5jdGlvbih0LGUpe3ZhciByPS0xLG49dC5sZW5ndGg7Zm9yKGV8fChlPUFycmF5KG4pKTsrK3I8bjspZVtyXT10W3JdO3JldHVybiBlfSxvcj1PYmplY3QuY3JlYXRlLGlyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gZnVuY3Rpb24oZSl7aWYoIUgoZSkpcmV0dXJue307aWYob3IpcmV0dXJuIG9yKGUpO3QucHJvdG90eXBlPWU7dmFyIHI9bmV3IHQ7cmV0dXJuIHQucHJvdG90eXBlPXZvaWQgMCxyfX0oKSxhcj1QZShPYmplY3QuZ2V0UHJvdG90eXBlT2YsT2JqZWN0KTt2YXIgdXI9ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2YgdC5jb25zdHJ1Y3Rvcnx8TGUodCk/e306aXIoYXIodCkpfTt2YXIgY3I9ZnVuY3Rpb24odCl7cmV0dXJuIHV0KHQpJiZFZSh0KX0sbHI9XCJbb2JqZWN0IE9iamVjdF1cIixmcj1GdW5jdGlvbi5wcm90b3R5cGUsc3I9T2JqZWN0LnByb3RvdHlwZSxwcj1mci50b1N0cmluZyx2cj1zci5oYXNPd25Qcm9wZXJ0eSxocj1wci5jYWxsKE9iamVjdCk7dmFyIGRyPWZ1bmN0aW9uKHQpe2lmKCF1dCh0KXx8RSh0KSE9bHIpcmV0dXJuITE7dmFyIGU9YXIodCk7aWYobnVsbD09PWUpcmV0dXJuITA7dmFyIHI9dnIuY2FsbChlLFwiY29uc3RydWN0b3JcIikmJmUuY29uc3RydWN0b3I7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgciYmciBpbnN0YW5jZW9mIHImJnByLmNhbGwocik9PWhyfTt2YXIgYnI9ZnVuY3Rpb24odCxlKXtyZXR1cm5cIl9fcHJvdG9fX1wiPT1lP3ZvaWQgMDp0W2VdfTt2YXIgZ3I9ZnVuY3Rpb24odCxlLHIsbil7dmFyIG89IXI7cnx8KHI9e30pO2Zvcih2YXIgaT0tMSxhPWUubGVuZ3RoOysraTxhOyl7dmFyIHU9ZVtpXSxjPW4/bihyW3VdLHRbdV0sdSxyLHQpOnZvaWQgMDt2b2lkIDA9PT1jJiYoYz10W3VdKSxvP3J0KHIsdSxjKTppdChyLHUsYyl9cmV0dXJuIHJ9O3ZhciB5cj1mdW5jdGlvbih0KXt2YXIgZT1bXTtpZihudWxsIT10KWZvcih2YXIgciBpbiBPYmplY3QodCkpZS5wdXNoKHIpO3JldHVybiBlfSxtcj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBqcj1mdW5jdGlvbih0KXtpZighSCh0KSlyZXR1cm4geXIodCk7dmFyIGU9TGUodCkscj1bXTtmb3IodmFyIG4gaW4gdCkoXCJjb25zdHJ1Y3RvclwiIT1ufHwhZSYmbXIuY2FsbCh0LG4pKSYmci5wdXNoKG4pO3JldHVybiByfTt2YXIgX3I9ZnVuY3Rpb24odCl7cmV0dXJuIEVlKHQpP2tlKHQsITApOmpyKHQpfTt2YXIgd3I9ZnVuY3Rpb24odCl7cmV0dXJuIGdyKHQsX3IodCkpfTt2YXIgT3I9ZnVuY3Rpb24odCxlLHIsbixvLGksYSl7dmFyIHU9YnIodCxyKSxjPWJyKGUsciksbD1hLmdldChjKTtpZihsKVFlKHQscixsKTtlbHNle3ZhciBmPWk/aSh1LGMscitcIlwiLHQsZSxhKTp2b2lkIDAscz12b2lkIDA9PT1mO2lmKHMpe3ZhciBwPWF0KGMpLHY9IXAmJnllKGMpLGg9IXAmJiF2JiZ6ZShjKTtmPWMscHx8dnx8aD9hdCh1KT9mPXU6Y3IodSk/Zj1ucih1KTp2PyhzPSExLGY9WGUoYywhMCkpOmg/KHM9ITEsZj1ycihjLCEwKSk6Zj1bXTpkcihjKXx8YmUoYyk/KGY9dSxiZSh1KT9mPXdyKHUpOighSCh1KXx8biYmJCh1KSkmJihmPXVyKGMpKSk6cz0hMX1zJiYoYS5zZXQoYyxmKSxvKGYsYyxuLGksYSksYS5kZWxldGUoYykpLFFlKHQscixmKX19O3ZhciBTcj1mdW5jdGlvbiB0KGUscixuLG8saSl7ZSE9PXImJmxlKHIsZnVuY3Rpb24oYSx1KXtpZihIKGEpKWl8fChpPW5ldyBZZSksT3IoZSxyLHUsbix0LG8saSk7ZWxzZXt2YXIgYz1vP28oYnIoZSx1KSxhLHUrXCJcIixlLHIsaSk6dm9pZCAwO3ZvaWQgMD09PWMmJihjPWEpLFFlKGUsdSxjKX19LF9yKX07dmFyIHhyPWZ1bmN0aW9uKHQsZSxyKXtzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdC5jYWxsKGUpO2Nhc2UgMTpyZXR1cm4gdC5jYWxsKGUsclswXSk7Y2FzZSAyOnJldHVybiB0LmNhbGwoZSxyWzBdLHJbMV0pO2Nhc2UgMzpyZXR1cm4gdC5jYWxsKGUsclswXSxyWzFdLHJbMl0pfXJldHVybiB0LmFwcGx5KGUscil9LHpyPU1hdGgubWF4O3ZhciBGcj1mdW5jdGlvbih0LGUscil7cmV0dXJuIGU9enIodm9pZCAwPT09ZT90Lmxlbmd0aC0xOmUsMCksZnVuY3Rpb24oKXtmb3IodmFyIG49YXJndW1lbnRzLG89LTEsaT16cihuLmxlbmd0aC1lLDApLGE9QXJyYXkoaSk7KytvPGk7KWFbb109bltlK29dO289LTE7Zm9yKHZhciB1PUFycmF5KGUrMSk7KytvPGU7KXVbb109bltvXTtyZXR1cm4gdVtlXT1yKGEpLHhyKHQsdGhpcyx1KX19O3ZhciBrcj1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdH19LEFyPTgwMCxMcj0xNixQcj1EYXRlLm5vdzt2YXIgQnI9ZnVuY3Rpb24odCl7dmFyIGU9MCxyPTA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49UHIoKSxvPUxyLShuLXIpO2lmKHI9bixvPjApe2lmKCsrZT49QXIpcmV0dXJuIGFyZ3VtZW50c1swXX1lbHNlIGU9MDtyZXR1cm4gdC5hcHBseSh2b2lkIDAsYXJndW1lbnRzKX19KGV0P2Z1bmN0aW9uKHQsZSl7cmV0dXJuIGV0KHQsXCJ0b1N0cmluZ1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSx2YWx1ZTprcihlKSx3cml0YWJsZTohMH0pfTpXZSk7dmFyIFRyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIEJyKEZyKHQsZSxXZSksdCtcIlwiKX07dmFyIE1yPWZ1bmN0aW9uKHQsZSxyKXtpZighSChyKSlyZXR1cm4hMTt2YXIgbj10eXBlb2YgZTtyZXR1cm4hIShcIm51bWJlclwiPT1uP0VlKHIpJiZuZShlLHIubGVuZ3RoKTpcInN0cmluZ1wiPT1uJiZlIGluIHIpJiZudChyW2VdLHQpfTt2YXIgRXI9ZnVuY3Rpb24odCl7cmV0dXJuIFRyKGZ1bmN0aW9uKGUscil7dmFyIG49LTEsbz1yLmxlbmd0aCxpPW8+MT9yW28tMV06dm9pZCAwLGE9bz4yP3JbMl06dm9pZCAwO2ZvcihpPXQubGVuZ3RoPjMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGk/KG8tLSxpKTp2b2lkIDAsYSYmTXIoclswXSxyWzFdLGEpJiYoaT1vPDM/dm9pZCAwOmksbz0xKSxlPU9iamVjdChlKTsrK248bzspe3ZhciB1PXJbbl07dSYmdChlLHUsbixpKX1yZXR1cm4gZX0pfShmdW5jdGlvbih0LGUscil7U3IodCxlLHIpfSk7dmFyIEhyPWZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBvPS0xLGk9bnVsbD09dD8wOnQubGVuZ3RoO2ZvcihuJiZpJiYocj10Wysrb10pOysrbzxpOylyPWUocix0W29dLG8sdCk7cmV0dXJuIHJ9LE5yPVwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiO3ZhciBXcj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModCl9O2Z1bmN0aW9uIElyKHQpe3ZhciBlPS0xLHI9bnVsbD09dD8wOnQubGVuZ3RoO2Zvcih0aGlzLl9fZGF0YV9fPW5ldyBDdDsrK2U8cjspdGhpcy5hZGQodFtlXSl9SXIucHJvdG90eXBlLmFkZD1Jci5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5zZXQodCxOciksdGhpc30sSXIucHJvdG90eXBlLmhhcz1Xcjt2YXIgQ3I9SXI7dmFyIFJyPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoOysrcjxuOylpZihlKHRbcl0scix0KSlyZXR1cm4hMDtyZXR1cm4hMX07dmFyICRyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuaGFzKGUpfSxVcj0xLERyPTI7dmFyIHFyPWZ1bmN0aW9uKHQsZSxyLG4sbyxpKXt2YXIgYT1yJlVyLHU9dC5sZW5ndGgsYz1lLmxlbmd0aDtpZih1IT1jJiYhKGEmJmM+dSkpcmV0dXJuITE7dmFyIGw9aS5nZXQodCk7aWYobCYmaS5nZXQoZSkpcmV0dXJuIGw9PWU7dmFyIGY9LTEscz0hMCxwPXImRHI/bmV3IENyOnZvaWQgMDtmb3IoaS5zZXQodCxlKSxpLnNldChlLHQpOysrZjx1Oyl7dmFyIHY9dFtmXSxoPWVbZl07aWYobil2YXIgZD1hP24oaCx2LGYsZSx0LGkpOm4odixoLGYsdCxlLGkpO2lmKHZvaWQgMCE9PWQpe2lmKGQpY29udGludWU7cz0hMTticmVha31pZihwKXtpZighUnIoZSxmdW5jdGlvbih0LGUpe2lmKCEkcihwLGUpJiYodj09PXR8fG8odix0LHIsbixpKSkpcmV0dXJuIHAucHVzaChlKX0pKXtzPSExO2JyZWFrfX1lbHNlIGlmKHYhPT1oJiYhbyh2LGgscixuLGkpKXtzPSExO2JyZWFrfX1yZXR1cm4gaS5kZWxldGUodCksaS5kZWxldGUoZSksc307dmFyIFZyPWZ1bmN0aW9uKHQpe3ZhciBlPS0xLHI9QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7clsrK2VdPVtuLHRdfSkscn07dmFyIEpyPWZ1bmN0aW9uKHQpe3ZhciBlPS0xLHI9QXJyYXkodC5zaXplKTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JbKytlXT10fSkscn0sWnI9MSxHcj0yLEtyPVwiW29iamVjdCBCb29sZWFuXVwiLFlyPVwiW29iamVjdCBEYXRlXVwiLFFyPVwiW29iamVjdCBFcnJvcl1cIixYcj1cIltvYmplY3QgTWFwXVwiLHRuPVwiW29iamVjdCBOdW1iZXJdXCIsZW49XCJbb2JqZWN0IFJlZ0V4cF1cIixybj1cIltvYmplY3QgU2V0XVwiLG5uPVwiW29iamVjdCBTdHJpbmddXCIsb249XCJbb2JqZWN0IFN5bWJvbF1cIixhbj1cIltvYmplY3QgQXJyYXlCdWZmZXJdXCIsdW49XCJbb2JqZWN0IERhdGFWaWV3XVwiLGNuPVM/Uy5wcm90b3R5cGU6dm9pZCAwLGxuPWNuP2NuLnZhbHVlT2Y6dm9pZCAwO3ZhciBmbj1mdW5jdGlvbih0LGUscixuLG8saSxhKXtzd2l0Y2gocil7Y2FzZSB1bjppZih0LmJ5dGVMZW5ndGghPWUuYnl0ZUxlbmd0aHx8dC5ieXRlT2Zmc2V0IT1lLmJ5dGVPZmZzZXQpcmV0dXJuITE7dD10LmJ1ZmZlcixlPWUuYnVmZmVyO2Nhc2UgYW46cmV0dXJuISh0LmJ5dGVMZW5ndGghPWUuYnl0ZUxlbmd0aHx8IWkobmV3IHRyKHQpLG5ldyB0cihlKSkpO2Nhc2UgS3I6Y2FzZSBZcjpjYXNlIHRuOnJldHVybiBudCgrdCwrZSk7Y2FzZSBRcjpyZXR1cm4gdC5uYW1lPT1lLm5hbWUmJnQubWVzc2FnZT09ZS5tZXNzYWdlO2Nhc2UgZW46Y2FzZSBubjpyZXR1cm4gdD09ZStcIlwiO2Nhc2UgWHI6dmFyIHU9VnI7Y2FzZSBybjppZih1fHwodT1KciksdC5zaXplIT1lLnNpemUmJiEobiZacikpcmV0dXJuITE7dmFyIGM9YS5nZXQodCk7aWYoYylyZXR1cm4gYz09ZTtufD1HcixhLnNldCh0LGUpO3ZhciBsPXFyKHUodCksdShlKSxuLG8saSxhKTtyZXR1cm4gYS5kZWxldGUodCksbDtjYXNlIG9uOmlmKGxuKXJldHVybiBsbi5jYWxsKHQpPT1sbi5jYWxsKGUpfXJldHVybiExfTt2YXIgc249ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9LTEsbj1lLmxlbmd0aCxvPXQubGVuZ3RoOysrcjxuOyl0W28rcl09ZVtyXTtyZXR1cm4gdH07dmFyIHBuPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1lKHQpO3JldHVybiBhdCh0KT9uOnNuKG4scih0KSl9O3ZhciB2bj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj0tMSxuPW51bGw9PXQ/MDp0Lmxlbmd0aCxvPTAsaT1bXTsrK3I8bjspe3ZhciBhPXRbcl07ZShhLHIsdCkmJihpW28rK109YSl9cmV0dXJuIGl9O3ZhciBobj1PYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLGRuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsYm49ZG4/ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/W106KHQ9T2JqZWN0KHQpLHZuKGRuKHQpLGZ1bmN0aW9uKGUpe3JldHVybiBobi5jYWxsKHQsZSl9KSl9OmZ1bmN0aW9uKCl7cmV0dXJuW119O3ZhciBnbj1mdW5jdGlvbih0KXtyZXR1cm4gcG4odCxIZSxibil9LHluPTEsbW49T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgam49ZnVuY3Rpb24odCxlLHIsbixvLGkpe3ZhciBhPXImeW4sdT1nbih0KSxjPXUubGVuZ3RoO2lmKGMhPWduKGUpLmxlbmd0aCYmIWEpcmV0dXJuITE7Zm9yKHZhciBsPWM7bC0tOyl7dmFyIGY9dVtsXTtpZighKGE/ZiBpbiBlOm1uLmNhbGwoZSxmKSkpcmV0dXJuITF9dmFyIHM9aS5nZXQodCk7aWYocyYmaS5nZXQoZSkpcmV0dXJuIHM9PWU7dmFyIHA9ITA7aS5zZXQodCxlKSxpLnNldChlLHQpO2Zvcih2YXIgdj1hOysrbDxjOyl7dmFyIGg9dFtmPXVbbF1dLGQ9ZVtmXTtpZihuKXZhciBiPWE/bihkLGgsZixlLHQsaSk6bihoLGQsZix0LGUsaSk7aWYoISh2b2lkIDA9PT1iP2g9PT1kfHxvKGgsZCxyLG4saSk6Yikpe3A9ITE7YnJlYWt9dnx8KHY9XCJjb25zdHJ1Y3RvclwiPT1mKX1pZihwJiYhdil7dmFyIGc9dC5jb25zdHJ1Y3Rvcix5PWUuY29uc3RydWN0b3I7ZyE9eSYmXCJjb25zdHJ1Y3RvclwiaW4gdCYmXCJjb25zdHJ1Y3RvclwiaW4gZSYmIShcImZ1bmN0aW9uXCI9PXR5cGVvZiBnJiZnIGluc3RhbmNlb2YgZyYmXCJmdW5jdGlvblwiPT10eXBlb2YgeSYmeSBpbnN0YW5jZW9mIHkpJiYocD0hMSl9cmV0dXJuIGkuZGVsZXRlKHQpLGkuZGVsZXRlKGUpLHB9LF9uPXR0KE8sXCJEYXRhVmlld1wiKSx3bj10dChPLFwiUHJvbWlzZVwiKSxPbj10dChPLFwiU2V0XCIpLFNuPXR0KE8sXCJXZWFrTWFwXCIpLHhuPUooX24pLHpuPUooQnQpLEZuPUood24pLGtuPUooT24pLEFuPUooU24pLExuPUU7KF9uJiZcIltvYmplY3QgRGF0YVZpZXddXCIhPUxuKG5ldyBfbihuZXcgQXJyYXlCdWZmZXIoMSkpKXx8QnQmJlwiW29iamVjdCBNYXBdXCIhPUxuKG5ldyBCdCl8fHduJiZcIltvYmplY3QgUHJvbWlzZV1cIiE9TG4od24ucmVzb2x2ZSgpKXx8T24mJlwiW29iamVjdCBTZXRdXCIhPUxuKG5ldyBPbil8fFNuJiZcIltvYmplY3QgV2Vha01hcF1cIiE9TG4obmV3IFNuKSkmJihMbj1mdW5jdGlvbih0KXt2YXIgZT1FKHQpLHI9XCJbb2JqZWN0IE9iamVjdF1cIj09ZT90LmNvbnN0cnVjdG9yOnZvaWQgMCxuPXI/SihyKTpcIlwiO2lmKG4pc3dpdGNoKG4pe2Nhc2UgeG46cmV0dXJuXCJbb2JqZWN0IERhdGFWaWV3XVwiO2Nhc2Ugem46cmV0dXJuXCJbb2JqZWN0IE1hcF1cIjtjYXNlIEZuOnJldHVyblwiW29iamVjdCBQcm9taXNlXVwiO2Nhc2Uga246cmV0dXJuXCJbb2JqZWN0IFNldF1cIjtjYXNlIEFuOnJldHVyblwiW29iamVjdCBXZWFrTWFwXVwifXJldHVybiBlfSk7dmFyIFBuPUxuLEJuPTEsVG49XCJbb2JqZWN0IEFyZ3VtZW50c11cIixNbj1cIltvYmplY3QgQXJyYXldXCIsRW49XCJbb2JqZWN0IE9iamVjdF1cIixIbj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBObj1mdW5jdGlvbih0LGUscixuLG8saSl7dmFyIGE9YXQodCksdT1hdChlKSxjPWE/TW46UG4odCksbD11P01uOlBuKGUpLGY9KGM9Yz09VG4/RW46Yyk9PUVuLHM9KGw9bD09VG4/RW46bCk9PUVuLHA9Yz09bDtpZihwJiZ5ZSh0KSl7aWYoIXllKGUpKXJldHVybiExO2E9ITAsZj0hMX1pZihwJiYhZilyZXR1cm4gaXx8KGk9bmV3IFllKSxhfHx6ZSh0KT9xcih0LGUscixuLG8saSk6Zm4odCxlLGMscixuLG8saSk7aWYoIShyJkJuKSl7dmFyIHY9ZiYmSG4uY2FsbCh0LFwiX193cmFwcGVkX19cIiksaD1zJiZIbi5jYWxsKGUsXCJfX3dyYXBwZWRfX1wiKTtpZih2fHxoKXt2YXIgZD12P3QudmFsdWUoKTp0LGI9aD9lLnZhbHVlKCk6ZTtyZXR1cm4gaXx8KGk9bmV3IFllKSxvKGQsYixyLG4saSl9fXJldHVybiEhcCYmKGl8fChpPW5ldyBZZSksam4odCxlLHIsbixvLGkpKX07dmFyIFduPWZ1bmN0aW9uIHQoZSxyLG4sbyxpKXtyZXR1cm4gZT09PXJ8fChudWxsPT1lfHxudWxsPT1yfHwhdXQoZSkmJiF1dChyKT9lIT1lJiZyIT1yOk5uKGUscixuLG8sdCxpKSl9LEluPTEsQ249Mjt2YXIgUm49ZnVuY3Rpb24odCxlLHIsbil7dmFyIG89ci5sZW5ndGgsaT1vLGE9IW47aWYobnVsbD09dClyZXR1cm4haTtmb3IodD1PYmplY3QodCk7by0tOyl7dmFyIHU9cltvXTtpZihhJiZ1WzJdP3VbMV0hPT10W3VbMF1dOiEodVswXWluIHQpKXJldHVybiExfWZvcig7KytvPGk7KXt2YXIgYz0odT1yW29dKVswXSxsPXRbY10sZj11WzFdO2lmKGEmJnVbMl0pe2lmKHZvaWQgMD09PWwmJiEoYyBpbiB0KSlyZXR1cm4hMX1lbHNle3ZhciBzPW5ldyBZZTtpZihuKXZhciBwPW4obCxmLGMsdCxlLHMpO2lmKCEodm9pZCAwPT09cD9XbihmLGwsSW58Q24sbixzKTpwKSlyZXR1cm4hMX19cmV0dXJuITB9O3ZhciAkbj1mdW5jdGlvbih0KXtyZXR1cm4gdD09dCYmIUgodCl9O3ZhciBVbj1mdW5jdGlvbih0KXtmb3IodmFyIGU9SGUodCkscj1lLmxlbmd0aDtyLS07KXt2YXIgbj1lW3JdLG89dFtuXTtlW3JdPVtuLG8sJG4obyldfXJldHVybiBlfTt2YXIgRG49ZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIG51bGwhPXImJnJbdF09PT1lJiYodm9pZCAwIT09ZXx8dCBpbiBPYmplY3QocikpfX07dmFyIHFuPWZ1bmN0aW9uKHQpe3ZhciBlPVVuKHQpO3JldHVybiAxPT1lLmxlbmd0aCYmZVswXVsyXT9EbihlWzBdWzBdLGVbMF1bMV0pOmZ1bmN0aW9uKHIpe3JldHVybiByPT09dHx8Um4ocix0LGUpfX07dmFyIFZuPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPTAsbj0oZT10ZShlLHQpKS5sZW5ndGg7bnVsbCE9dCYmcjxuOyl0PXRbaWUoZVtyKytdKV07cmV0dXJuIHImJnI9PW4/dDp2b2lkIDB9O3ZhciBKbj1mdW5jdGlvbih0LGUscil7dmFyIG49bnVsbD09dD92b2lkIDA6Vm4odCxlKTtyZXR1cm4gdm9pZCAwPT09bj9yOm59O3ZhciBabj1mdW5jdGlvbih0LGUpe3JldHVybiBudWxsIT10JiZlIGluIE9iamVjdCh0KX07dmFyIEduPWZ1bmN0aW9uKHQsZSxyKXtmb3IodmFyIG49LTEsbz0oZT10ZShlLHQpKS5sZW5ndGgsaT0hMTsrK248bzspe3ZhciBhPWllKGVbbl0pO2lmKCEoaT1udWxsIT10JiZyKHQsYSkpKWJyZWFrO3Q9dFthXX1yZXR1cm4gaXx8KytuIT1vP2k6ISEobz1udWxsPT10PzA6dC5sZW5ndGgpJiZqZShvKSYmbmUoYSxvKSYmKGF0KHQpfHxiZSh0KSl9O3ZhciBLbj1mdW5jdGlvbih0LGUpe3JldHVybiBudWxsIT10JiZHbih0LGUsWm4pfSxZbj0xLFFuPTI7dmFyIFhuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHB0KHQpJiYkbihlKT9EbihpZSh0KSxlKTpmdW5jdGlvbihyKXt2YXIgbj1KbihyLHQpO3JldHVybiB2b2lkIDA9PT1uJiZuPT09ZT9LbihyLHQpOlduKGUsbixZbnxRbil9fTt2YXIgdG89ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3ZvaWQgMDplW3RdfX07dmFyIGVvPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gVm4oZSx0KX19O3ZhciBybz1mdW5jdGlvbih0KXtyZXR1cm4gcHQodCk/dG8oaWUodCkpOmVvKHQpfTt2YXIgbm89ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGw9PXQ/V2U6XCJvYmplY3RcIj09dHlwZW9mIHQ/YXQodCk/WG4odFswXSx0WzFdKTpxbih0KTpybyh0KX07dmFyIG9vPWZ1bmN0aW9uKHQsZSxyLG4sbyl7cmV0dXJuIG8odCxmdW5jdGlvbih0LG8saSl7cj1uPyhuPSExLHQpOmUocix0LG8saSl9KSxyfTt2YXIgaW89ZnVuY3Rpb24odCxlLHIpe3ZhciBuPWF0KHQpP0hyOm9vLG89YXJndW1lbnRzLmxlbmd0aDwzO3JldHVybiBuKHQsbm8oZSw0KSxyLG8sTmUpfSxhbz1mdW5jdGlvbih0LGUscil7dmFyIG47cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSxuPWF0KGUpP2U6W2VdLENlKG4sZnVuY3Rpb24oZSl7Q2UocixmdW5jdGlvbihyLG4pe3VlKHQsZStcIi5cIituLHIpfSl9KSx0fSx1bz1bXCJpbmhlcml0XCIsXCJkZWZhdWx0XCIsXCJzZXJpZlwiLFwic2Fucy1zZXJpZlwiLFwibW9ub3NwYWNlXCIsXCJmYW50YXN5XCIsXCJjdXJzaXZlXCIsXCItYXBwbGUtc3lzdGVtXCJdLGNvPWZ1bmN0aW9uKHQpe3JldHVybi0xIT09dW8uaW5kZXhPZih0KT90OlwiJ1wiK3QrXCInXCJ9O3ZhciBsbyxmbz1qKGZ1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5kZWZhdWx0PVwiaHRtbHtmb250LWZhbWlseTpzYW5zLXNlcmlmOy1tcy10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9Ym9keXttYXJnaW46MH1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixtYWluLG1lbnUsbmF2LHNlY3Rpb24sc3VtbWFyeXtkaXNwbGF5OmJsb2NrfWF1ZGlvLGNhbnZhcyxwcm9ncmVzcyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9ja31hdWRpbzpub3QoW2NvbnRyb2xzXSl7ZGlzcGxheTpub25lO2hlaWdodDowfXByb2dyZXNze3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfVtoaWRkZW5dLHRlbXBsYXRle2Rpc3BsYXk6bm9uZX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDpvYmplY3RzfWE6YWN0aXZlLGE6aG92ZXJ7b3V0bGluZS13aWR0aDowfWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206bm9uZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmluaGVyaXQ7Zm9udC13ZWlnaHQ6Ym9sZGVyfWRmbntmb250LXN0eWxlOml0YWxpY31oMXtmb250LXNpemU6MmVtO21hcmdpbjouNjdlbSAwfW1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmYwO2NvbG9yOiMwMDB9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWltZ3tib3JkZXItc3R5bGU6bm9uZX1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59Y29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWZpZ3VyZXttYXJnaW46MWVtIDQwcHh9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7Zm9udDppbmhlcml0O21hcmdpbjowfW9wdGdyb3Vwe2ZvbnQtd2VpZ2h0OjcwMH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uLGh0bWwgW3R5cGU9YnV0dG9uXXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlci1zdHlsZTpub25lO3BhZGRpbmc6MH1bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLGJ1dHRvbjotbW96LWZvY3VzcmluZ3tvdXRsaW5lOjFweCBkb3R0ZWQgQnV0dG9uVGV4dH1maWVsZHNldHtib3JkZXI6MXB4IHNvbGlkIHNpbHZlcjttYXJnaW46MCAycHg7cGFkZGluZzouMzVlbSAuNjI1ZW0gLjc1ZW19bGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjppbmhlcml0O29wYWNpdHk6LjU0fTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtmb250OmluaGVyaXR9XCJ9KSxzbz0obG89Zm8pJiZsby5fX2VzTW9kdWxlJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobG8sXCJkZWZhdWx0XCIpP2xvLmRlZmF1bHQ6bG8scG89ZnVuY3Rpb24odCl7cmV0dXJuIGlvKHQsZnVuY3Rpb24odCxlLHIpe3JldHVybiB0Kz1yK1wie1wiLENlKGUsZnVuY3Rpb24oZSxyKXtpZihIKGUpKXt2YXIgbj17fTtuW3JdPWUsdCs9cG8obil9ZWxzZXt2YXIgbz1mdW5jdGlvbih0LGUpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhIHN0cmluZ1wiKTtyZXR1cm4gdC5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLFwiJDFcIisoZT12b2lkIDA9PT1lP1wiX1wiOmUpK1wiJDJcIikucmVwbGFjZSgvKFtBLVpdKykoW0EtWl1bYS16XFxkXSspL2csXCIkMVwiK2UrXCIkMlwiKS50b0xvd2VyQ2FzZSgpfShyLFwiLVwiKStcIjpcIitlK1wiO1wiO1tcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3Iuc2xpY2UoMCx0Lmxlbmd0aCk9PT10JiYobz1cIi1cIitvKX0pLHQrPW99fSksdCs9XCJ9XCJ9LFwiXCIpfTttb2R1bGUuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZSxyLGEsdSxsPWkoe30se2Jhc2VGb250U2l6ZTpcIjE2cHhcIixiYXNlTGluZUhlaWdodDoxLjQ1LGhlYWRlckxpbmVIZWlnaHQ6MS4xLHNjYWxlUmF0aW86Mixnb29nbGVGb250czpbXSxoZWFkZXJGb250RmFtaWx5OltcIi1hcHBsZS1zeXN0ZW1cIixcIkJsaW5rTWFjU3lzdGVtRm9udFwiLFwiU2Vnb2UgVUlcIixcIlJvYm90b1wiLFwiT3h5Z2VuXCIsXCJVYnVudHVcIixcIkNhbnRhcmVsbFwiLFwiRmlyYSBTYW5zXCIsXCJEcm9pZCBTYW5zXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLFwic2Fucy1zZXJpZlwiXSxib2R5Rm9udEZhbWlseTpbXCJnZW9yZ2lhXCIsXCJzZXJpZlwiXSxoZWFkZXJDb2xvcjpcImluaGVyaXRcIixib2R5Q29sb3I6XCJoc2xhKDAsMCUsMCUsMC44KVwiLGhlYWRlcldlaWdodDpcImJvbGRcIixib2R5V2VpZ2h0Olwibm9ybWFsXCIsYm9sZFdlaWdodDpcImJvbGRcIixpbmNsdWRlTm9ybWFsaXplOiEwLGJsb2NrTWFyZ2luQm90dG9tOjF9LHQpLGQ9KGU9bCxyPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocCkpLGE9T2JqZWN0LmFzc2lnbih7fSxyLGUpLHU9YyhhLmJhc2VGb250U2l6ZSksZihhLmJhc2VMaW5lSGVpZ2h0KT8ocyh1KGEuYmFzZUZvbnRTaXplLFwicHhcIikpLGEuYmFzZUxpbmVIZWlnaHRJblB4PXUoYS5iYXNlTGluZUhlaWdodCxcInB4XCIpKTphLmJhc2VMaW5lSGVpZ2h0SW5QeD1zKGEuYmFzZUZvbnRTaXplKSphLmJhc2VMaW5lSGVpZ2h0K1wicHhcIix7cmh5dGhtOmgoYSksZXN0YWJsaXNoQmFzZWxpbmU6ZnVuY3Rpb24oKXtyZXR1cm4gYygodD1hKS5iYXNlRm9udFNpemUpLHtmb250U2l6ZTpzKHQuYmFzZUZvbnRTaXplKS8xNioxMDArXCIlXCIsbGluZUhlaWdodDp0LmJhc2VMaW5lSGVpZ2h0LnRvU3RyaW5nKCl9O3ZhciB0fSxsaW5lc0ZvckZvbnRTaXplOmZ1bmN0aW9uKHQpe3JldHVybiB2KHQsYSl9LGFkanVzdEZvbnRTaXplVG86ZnVuY3Rpb24odCxlLHIpe3JldHVybiBudWxsPT1lJiYoZT1cImF1dG9cIiksZnVuY3Rpb24odCxlLHIsbil7bnVsbD09ciYmKHI9bi5iYXNlRm9udFNpemUpLFwiJVwiPT09Zih0KSYmKHQ9cyhuLmJhc2VGb250U2l6ZSkqKHModCkvMTAwKStcInB4XCIpO3ZhciBvPWMobi5iYXNlRm9udFNpemUpO3Q9byh0LFwicHhcIixyPW8ocixcInB4XCIpKTt2YXIgaT1oKG4pO3JldHVyblwiYXV0b1wiPT09ZSYmKGU9dih0LG4pKSx7Zm9udFNpemU6byh0LG4ucmh5dGhtVW5pdCxyKSxsaW5lSGVpZ2h0OmkoZSxyKX19KHQsZSxyLGEpfX0pO3JldHVybiBkLnNjYWxlPWZ1bmN0aW9uKHQpe3ZhciBlPXBhcnNlSW50KGwuYmFzZUZvbnRTaXplLDEwKSxyPWZ1bmN0aW9uKHQsZSl7dmFyIHI7cmV0dXJuIG51bGw9PXQmJih0PTApLG51bGw9PWUmJihlPVwiZ29sZGVuXCIpLHI9bihlKT9lOm51bGwhPW9bZV0/b1tlXTpvLmdvbGRlbixNYXRoLnBvdyhyLHQpfSh0LGwuc2NhbGVSYXRpbykqZStcInB4XCI7cmV0dXJuIGQuYWRqdXN0Rm9udFNpemVUbyhyKX0sT2JqZWN0LmFzc2lnbih7fSx7b3B0aW9uczpsfSxkLHtjcmVhdGVTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b1N0cmluZygpfSx0b0pTT046ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCxlKXt2YXIgcj17fSxuPXQuZXN0YWJsaXNoQmFzZWxpbmUoKTtyPWFvKHIsXCJodG1sXCIse2ZvbnQ6bi5mb250U2l6ZStcIi9cIituLmxpbmVIZWlnaHQrXCIgXCIrZS5ib2R5Rm9udEZhbWlseS5tYXAoY28pLmpvaW4oXCIsXCIpLGJveFNpemluZzpcImJvcmRlci1ib3hcIixvdmVyZmxvd1k6XCJzY3JvbGxcIn0pLHI9YW8ocixbXCIqXCIsXCIqOmJlZm9yZVwiLFwiKjphZnRlclwiXSx7Ym94U2l6aW5nOlwiaW5oZXJpdFwifSkscj1hbyhyLFwiYm9keVwiLHtjb2xvcjplLmJvZHlDb2xvcixmb250RmFtaWx5OmUuYm9keUZvbnRGYW1pbHkubWFwKGNvKS5qb2luKFwiLFwiKSxmb250V2VpZ2h0OmUuYm9keVdlaWdodCx3b3JkV3JhcDpcImJyZWFrLXdvcmRcIixmb250S2VybmluZzpcIm5vcm1hbFwiLE1vekZvbnRGZWF0dXJlU2V0dGluZ3M6J1wia2VyblwiLCBcImxpZ2FcIiwgXCJjbGlnXCIsIFwiY2FsdFwiJyxtc0ZvbnRGZWF0dXJlU2V0dGluZ3M6J1wia2VyblwiLCBcImxpZ2FcIiwgXCJjbGlnXCIsIFwiY2FsdFwiJyxXZWJraXRGb250RmVhdHVyZVNldHRpbmdzOidcImtlcm5cIiwgXCJsaWdhXCIsIFwiY2xpZ1wiLCBcImNhbHRcIicsZm9udEZlYXR1cmVTZXR0aW5nczonXCJrZXJuXCIsIFwibGlnYVwiLCBcImNsaWdcIiwgXCJjYWx0XCInfSkscj1hbyhyLFwiaW1nXCIse21heFdpZHRoOlwiMTAwJVwifSk7dmFyIG89XCJcIjtvPSRlKGUuYmxvY2tNYXJnaW5Cb3R0b20pP3Qucmh5dGhtKGUuYmxvY2tNYXJnaW5Cb3R0b20pOkRlKGUuYmxvY2tNYXJnaW5Cb3R0b20pP2UuYmxvY2tNYXJnaW5Cb3R0b206dC5yaHl0aG0oMSkscj1hbyhyLFtcImgxXCIsXCJoMlwiLFwiaDNcIixcImg0XCIsXCJoNVwiLFwiaDZcIixcImhncm91cFwiLFwidWxcIixcIm9sXCIsXCJkbFwiLFwiZGRcIixcInBcIixcImZpZ3VyZVwiLFwicHJlXCIsXCJ0YWJsZVwiLFwiZmllbGRzZXRcIixcImJsb2NrcXVvdGVcIixcImZvcm1cIixcIm5vc2NyaXB0XCIsXCJpZnJhbWVcIixcImltZ1wiLFwiaHJcIixcImFkZHJlc3NcIl0se21hcmdpbkxlZnQ6MCxtYXJnaW5SaWdodDowLG1hcmdpblRvcDowLHBhZGRpbmdCb3R0b206MCxwYWRkaW5nTGVmdDowLHBhZGRpbmdSaWdodDowLHBhZGRpbmdUb3A6MCxtYXJnaW5Cb3R0b206b30pLHI9YW8ocixcImJsb2NrcXVvdGVcIix7bWFyZ2luUmlnaHQ6dC5yaHl0aG0oMSksbWFyZ2luQm90dG9tOm8sbWFyZ2luTGVmdDp0LnJoeXRobSgxKX0pLHI9YW8ocixbXCJiXCIsXCJzdHJvbmdcIixcImR0XCIsXCJ0aFwiXSx7Zm9udFdlaWdodDplLmJvbGRXZWlnaHR9KSxyPWFvKHIsXCJoclwiLHtiYWNrZ3JvdW5kOnkoODApLGJvcmRlcjpcIm5vbmVcIixoZWlnaHQ6XCIxcHhcIixtYXJnaW5Cb3R0b206XCJjYWxjKFwiK28rXCIgLSAxcHgpXCJ9KSxyPWFvKHIsW1wib2xcIixcInVsXCJdLHtsaXN0U3R5bGVQb3NpdGlvbjpcIm91dHNpZGVcIixsaXN0U3R5bGVJbWFnZTpcIm5vbmVcIixtYXJnaW5MZWZ0OnQucmh5dGhtKDEpfSkscj1hbyhyLFwibGlcIix7bWFyZ2luQm90dG9tOlwiY2FsYyhcIitvK1wiIC8gMilcIn0pLHI9YW8ocixbXCJvbCBsaVwiLFwidWwgbGlcIl0se3BhZGRpbmdMZWZ0OjB9KSxyPWFvKHIsW1wibGkgPiBvbFwiLFwibGkgPiB1bFwiXSx7bWFyZ2luTGVmdDp0LnJoeXRobSgxKSxtYXJnaW5Cb3R0b206XCJjYWxjKFwiK28rXCIgLyAyKVwiLG1hcmdpblRvcDpcImNhbGMoXCIrbytcIiAvIDIpXCJ9KSxyPWFvKHIsW1wiYmxvY2txdW90ZSAqOmxhc3QtY2hpbGRcIixcImxpICo6bGFzdC1jaGlsZFwiLFwicCAqOmxhc3QtY2hpbGRcIl0se21hcmdpbkJvdHRvbTowfSkscj1hbyhyLFtcImxpID4gcFwiXSx7bWFyZ2luQm90dG9tOlwiY2FsYyhcIitvK1wiIC8gMilcIn0pLHI9YW8ocixbXCJjb2RlXCIsXCJrYmRcIixcInByZVwiLFwic2FtcFwiXSxPYmplY3QuYXNzaWduKHt9LHQuYWRqdXN0Rm9udFNpemVUbyhcIjg1JVwiKSkpLChyPWFvKHIsW1wiYWJiclwiLFwiYWNyb255bVwiXSx7Ym9yZGVyQm90dG9tOlwiMXB4IGRvdHRlZCBcIit5KDUwKSxjdXJzb3I6XCJoZWxwXCJ9KSlbXCJhYmJyW3RpdGxlXVwiXT17Ym9yZGVyQm90dG9tOlwiMXB4IGRvdHRlZCBcIit5KDUwKSxjdXJzb3I6XCJoZWxwXCIsdGV4dERlY29yYXRpb246XCJub25lXCJ9LHI9YW8ocixbXCJ0YWJsZVwiXSxPYmplY3QuYXNzaWduKHt9LHQuYWRqdXN0Rm9udFNpemVUbyhlLmJhc2VGb250U2l6ZSkse2JvcmRlckNvbGxhcHNlOlwiY29sbGFwc2VcIix3aWR0aDpcIjEwMCVcIn0pKSxyPWFvKHIsW1widGhlYWRcIl0se3RleHRBbGlnbjpcImxlZnRcIn0pLHI9YW8ocixbXCJ0ZCx0aFwiXSx7dGV4dEFsaWduOlwibGVmdFwiLGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCBcIit5KDg4KSxmb250RmVhdHVyZVNldHRpbmdzOidcInRudW1cIicsTW96Rm9udEZlYXR1cmVTZXR0aW5nczonXCJ0bnVtXCInLG1zRm9udEZlYXR1cmVTZXR0aW5nczonXCJ0bnVtXCInLFdlYmtpdEZvbnRGZWF0dXJlU2V0dGluZ3M6J1widG51bVwiJyxwYWRkaW5nTGVmdDp0LnJoeXRobSgyLzMpLHBhZGRpbmdSaWdodDp0LnJoeXRobSgyLzMpLHBhZGRpbmdUb3A6dC5yaHl0aG0oLjUpLHBhZGRpbmdCb3R0b206XCJjYWxjKFwiK3Qucmh5dGhtKC41KStcIiAtIDFweClcIn0pLHI9YW8ocixcInRoOmZpcnN0LWNoaWxkLHRkOmZpcnN0LWNoaWxkXCIse3BhZGRpbmdMZWZ0OjB9KSxyPWFvKHIsXCJ0aDpsYXN0LWNoaWxkLHRkOmxhc3QtY2hpbGRcIix7cGFkZGluZ1JpZ2h0OjB9KSxyPWFvKHIsW1wiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiXSx7Y29sb3I6ZS5oZWFkZXJDb2xvcixmb250RmFtaWx5OmUuaGVhZGVyRm9udEZhbWlseS5tYXAoY28pLmpvaW4oXCIsXCIpLGZvbnRXZWlnaHQ6ZS5oZWFkZXJXZWlnaHQsdGV4dFJlbmRlcmluZzpcIm9wdGltaXplTGVnaWJpbGl0eVwifSk7dmFyIGk9dC5zY2FsZSgxKSxhPXQuc2NhbGUoLjYpLHU9dC5zY2FsZSguNCksYz10LnNjYWxlKDApLGw9dC5zY2FsZSgtLjIpLGY9dC5zY2FsZSgtLjMpO3JldHVybiBDZShbaSxhLHUsYyxsLGZdLGZ1bmN0aW9uKHQsbil7cj11ZShyLFwiaFwiKyhuKzEpK1wiLmZvbnRTaXplXCIsdC5mb250U2l6ZSkscj11ZShyLFwiaFwiKyhuKzEpK1wiLmxpbmVIZWlnaHRcIixlLmhlYWRlckxpbmVIZWlnaHQpfSksYXQoZS5wbHVnaW5zKSYmKHI9aW8oZS5wbHVnaW5zLGZ1bmN0aW9uKHIsbil7cmV0dXJuIEVyKHIsbih0LGUscikpfSxyKSksZS5vdmVycmlkZVN0eWxlcyYmJChlLm92ZXJyaWRlU3R5bGVzKSYmKHI9RXIocixlLm92ZXJyaWRlU3R5bGVzKHQsZSxyKSkpLGUub3ZlcnJpZGVUaGVtZVN0eWxlcyYmJChlLm92ZXJyaWRlVGhlbWVTdHlsZXMpJiYocj1FcihyLGUub3ZlcnJpZGVUaGVtZVN0eWxlcyh0LGUscikpKSxyfShkLGwpfSx0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0LGUscil7dmFyIG49cG8ocik7cmV0dXJuIGUuaW5jbHVkZU5vcm1hbGl6ZSYmKG49XCJcIitzbytuKSxufSgwLGwsdGhpcy50b0pTT04oKSl9LGluamVjdFN0eWxlczpmdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudClpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cG9ncmFwaHkuanNcIikpZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBvZ3JhcGh5LmpzXCIpLmlubmVySFRNTD10aGlzLnRvU3RyaW5nKCk7ZWxzZXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7dC5pZD1cInR5cG9ncmFwaHkuanNcIix0LmlubmVySFRNTD10aGlzLnRvU3RyaW5nKCksZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0KX19fSl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90eXBvZ3JhcGh5L2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZ3JheVBlcmNlbnRhZ2UgPSByZXF1aXJlKCdncmF5LXBlcmNlbnRhZ2UnKTtcblxudmFyIF9ncmF5UGVyY2VudGFnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmF5UGVyY2VudGFnZSk7XG5cbnZhciBfdHlwb2dyYXBoeUJyZWFrcG9pbnRDb25zdGFudHMgPSByZXF1aXJlKCd0eXBvZ3JhcGh5LWJyZWFrcG9pbnQtY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciB0aGVtZSA9IHtcbiAgdGl0bGU6ICdEb2VsZ2VyJyxcbiAgYmFzZUZvbnRTaXplOiAnMTdweCcsXG4gIGJhc2VMaW5lSGVpZ2h0OiAxLjQ1LFxuICBibG9ja01hcmdpbkJvdHRvbTogMC44LFxuICBnb29nbGVGb250czogW3tcbiAgICBuYW1lOiAnQXJ2bycsXG4gICAgc3R5bGVzOiBbJzcwMCddXG4gIH0sIHtcbiAgICBuYW1lOiAnQ2FiaW4nLFxuICAgIHN0eWxlczogWyc0MDAnLCAnNDAwaScsICc3MDAnXVxuICB9XSxcbiAgaGVhZGVyRm9udEZhbWlseTogWydBcnZvJywgJ3NhbnMtc2VyaWYnXSxcbiAgYm9keUZvbnRGYW1pbHk6IFsnQ2FiaW4nLCAnc2VyaWYnXSxcbiAgaGVhZGVyQ29sb3I6ICdoc2xhKDAsMCUsMCUsMC45KScsXG4gIGJvZHlDb2xvcjogJ2hzbGEoMCwwJSwwJSwwLjgpJyxcbiAgaGVhZGVyV2VpZ2h0OiAnNzAwJyxcbiAgYm9keVdlaWdodDogNDAwLFxuICBib2xkV2VpZ2h0OiA3MDAsXG4gIG92ZXJyaWRlU3R5bGVzOiBmdW5jdGlvbiBvdmVycmlkZVN0eWxlcyhfcmVmLCBvcHRpb25zKSB7XG4gICAgdmFyIGFkanVzdEZvbnRTaXplVG8gPSBfcmVmLmFkanVzdEZvbnRTaXplVG8sXG4gICAgICAgIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgICAgcmh5dGhtID0gX3JlZi5yaHl0aG07XG5cbiAgICB2YXIgbGlua0NvbG9yID0gJyNmZjQ4M2InO1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgYToge1xuICAgICAgICBjb2xvcjogbGlua0NvbG9yLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICB0ZXh0U2hhZG93OiAnLjAzZW0gMCAjZmZmLC0uMDNlbSAwICNmZmYsMCAuMDNlbSAjZmZmLDAgLS4wM2VtICNmZmYsLjA2ZW0gMCAjZmZmLC0uMDZlbSAwICNmZmYsLjA5ZW0gMCAjZmZmLC0uMDllbSAwICNmZmYsLjEyZW0gMCAjZmZmLC0uMTJlbSAwICNmZmYsLjE1ZW0gMCAjZmZmLC0uMTVlbSAwICNmZmYnLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMCkgMXB4LCAnICsgbGlua0NvbG9yICsgJyAxcHgsICcgKyBsaW5rQ29sb3IgKyAnIDJweCwgcmdiYSgwLCAwLCAwLCAwKSAycHgpJyB9LFxuICAgICAgJ2E6aG92ZXIsYTphY3RpdmUnOiB7XG4gICAgICAgIHRleHRTaGFkb3c6ICdub25lJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnaDEsaDIsaDMsaDQsaDUsaDYnOiB7XG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgICAgbWFyZ2luVG9wOiByaHl0aG0oMS41KSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiByaHl0aG0oMC41KVxuICAgICAgfSxcbiAgICAgIC8vIEJsb2NrcXVvdGUgc3R5bGVzLlxuICAgICAgYmxvY2txdW90ZTogX2V4dGVuZHMoe30sIHNjYWxlKDEgLyA1KSwge1xuICAgICAgICBib3JkZXJMZWZ0OiByaHl0aG0oNiAvIDE2KSArICcgc29saWQgJyArIGxpbmtDb2xvcixcbiAgICAgICAgY29sb3I6ICgwLCBfZ3JheVBlcmNlbnRhZ2UyLmRlZmF1bHQpKDM1KSxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHJoeXRobSgxMCAvIDE2KSxcbiAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDBcbiAgICAgIH0pLFxuICAgICAgJ2Jsb2NrcXVvdGUgPiA6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgICB9LFxuICAgICAgJ2Jsb2NrcXVvdGUgY2l0ZSc6IF9leHRlbmRzKHt9LCBhZGp1c3RGb250U2l6ZVRvKG9wdGlvbnMuYmFzZUZvbnRTaXplKSwge1xuICAgICAgICBjb2xvcjogb3B0aW9ucy5ib2R5Q29sb3IsXG4gICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IG9wdGlvbnMuYm9keVdlaWdodFxuICAgICAgfSksXG4gICAgICAnYmxvY2txdW90ZSBjaXRlOmJlZm9yZSc6IHtcbiAgICAgICAgY29udGVudDogJ1wi4oCUIFwiJ1xuICAgICAgfVxuICAgIH0sIF90eXBvZ3JhcGh5QnJlYWtwb2ludENvbnN0YW50cy5NT0JJTEVfTUVESUFfUVVFUlksIHtcbiAgICAgIGJsb2NrcXVvdGU6IHtcbiAgICAgICAgYm9yZGVyTGVmdDogcmh5dGhtKDMgLyAxNikgKyAnIHNvbGlkICcgKyBsaW5rQ29sb3IsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiByaHl0aG0oOSAvIDE2KSxcbiAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgbWFyZ2luTGVmdDogcmh5dGhtKC0zIC8gNCksXG4gICAgICAgIG1hcmdpblJpZ2h0OiAwXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRoZW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3R5cG9ncmFwaHktdGhlbWUtZG9lbGdlci9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpZ2h0bmVzcywgaHVlLCBkYXJrQmFja2dyb3VuZCkge1xuICBpZiAodHlwZW9mIGh1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGh1ZSA9IDA7XG4gIH1cbiAgaWYgKHR5cGVvZiBkYXJrQmFja2dyb3VuZCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGRhcmtCYWNrZ3JvdW5kID0gZmFsc2U7XG4gIH1cblxuICAvLyBDb252ZXJ0IG5hbWVkIGh1ZXMgaW50byBudW1lcmljIGxpZ2h0bmVzcyB2YWx1ZS5cbiAgaWYgKGh1ZSA9PT0gXCJjb29sXCIpIHtcbiAgICBodWUgPSAyMzc7XG4gIH1cbiAgZWxzZSBpZiAoaHVlID09PSBcInNsYXRlXCIpIHtcbiAgICBodWUgPSAxMjI7XG4gIH1cbiAgZWxzZSBpZiAoaHVlID09PSBcIndhcm1cIikge1xuICAgIGh1ZSA9IDY5O1xuICB9XG5cbiAgaWYgKCFpc051bWVyaWMoaHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkh1ZSBpcyBub3QgYSBudW1iZXJcIik7XG4gIH1cblxuICBpZiAoIWlzTnVtZXJpYyhsaWdodG5lc3MpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTGlnaHRuZXNzIGlzIG5vdCBhIG51bWJlclwiKTtcbiAgfVxuXG4gIGlmIChsaWdodG5lc3MgPiAxMDApIHtcbiAgICBsaWdodG5lc3MgPSAxMDA7XG4gIH1cbiAgaWYgKGxpZ2h0bmVzcyA8IDApIHtcbiAgICBsaWdodG5lc3MgPSAwO1xuICB9XG5cbiAgdmFyIHNhdHVyYXRpb24gPSAwO1xuICBpZiAoaHVlICE9PSAwKSB7XG4gICAgdmFyIGEgPSAxOS45Mjk3ODtcbiAgICB2YXIgYiA9IC0wLjM2NTE3NTk7XG4gICAgdmFyIGMgPSAwLjAwMTczNzIxNDtcbiAgICBzYXR1cmF0aW9uID0gYSArIGIgKiBsaWdodG5lc3MgKyBjICogTWF0aC5wb3cobGlnaHRuZXNzLCAyKTtcbiAgfVxuXG4gIHZhciBvcGFjaXR5ID0gMFxuICBpZiAoZGFya0JhY2tncm91bmQpIHtcbiAgICBvcGFjaXR5ID0gbGlnaHRuZXNzIC8gMTAwXG4gICAgbGlnaHRuZXNzID0gJzEwMCUsJ1xuICB9IGVsc2Uge1xuICAgIG9wYWNpdHkgPSAoMTAwIC0gbGlnaHRuZXNzKSAvIDEwMFxuICAgIGxpZ2h0bmVzcyA9ICcwJSwnXG4gIH1cblxuICByZXR1cm4gXCJoc2xhKFwiICsgaHVlICsgXCIsXCIgKyBzYXR1cmF0aW9uICsgXCIlLFwiICsgbGlnaHRuZXNzICsgb3BhY2l0eSArIFwiKVwiO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dyYXktcGVyY2VudGFnZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBMQVJHRVJfRElTUExBWV9XSURUSCA9IGV4cG9ydHMuTEFSR0VSX0RJU1BMQVlfV0lEVEggPSAnMTYwMHB4JztcbnZhciBMQVJHRV9ESVNQTEFZX1dJRFRIID0gZXhwb3J0cy5MQVJHRV9ESVNQTEFZX1dJRFRIID0gJzEyODBweCc7XG52YXIgREVGQVVMVF9XSURUSCA9IGV4cG9ydHMuREVGQVVMVF9XSURUSCA9ICc5ODBweCc7XG52YXIgVEFCTEVUX1dJRFRIID0gZXhwb3J0cy5UQUJMRVRfV0lEVEggPSAnNzY4cHgnO1xudmFyIE1PQklMRV9XSURUSCA9IGV4cG9ydHMuTU9CSUxFX1dJRFRIID0gJzQ4MHB4JztcblxudmFyIExBUkdFUl9ESVNQTEFZX01FRElBX1FVRVJZID0gZXhwb3J0cy5MQVJHRVJfRElTUExBWV9NRURJQV9RVUVSWSA9ICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTYwMHB4KSc7XG52YXIgTEFSR0VfRElTUExBWV9NRURJQV9RVUVSWSA9IGV4cG9ydHMuTEFSR0VfRElTUExBWV9NRURJQV9RVUVSWSA9ICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSc7XG52YXIgREVGQVVMVF9NRURJQV9RVUVSWSA9IGV4cG9ydHMuREVGQVVMVF9NRURJQV9RVUVSWSA9ICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTgwcHgpJztcbnZhciBUQUJMRVRfTUVESUFfUVVFUlkgPSBleHBvcnRzLlRBQkxFVF9NRURJQV9RVUVSWSA9ICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpJztcbnZhciBNT0JJTEVfTUVESUFfUVVFUlkgPSBleHBvcnRzLk1PQklMRV9NRURJQV9RVUVSWSA9ICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpJztcblxudmFyIE1JTl9MQVJHRVJfRElTUExBWV9NRURJQV9RVUVSWSA9IGV4cG9ydHMuTUlOX0xBUkdFUl9ESVNQTEFZX01FRElBX1FVRVJZID0gJ0BtZWRpYSAobWluLXdpZHRoOjE2MDBweCknO1xudmFyIE1JTl9MQVJHRV9ESVNQTEFZX01FRElBX1FVRVJZID0gZXhwb3J0cy5NSU5fTEFSR0VfRElTUExBWV9NRURJQV9RVUVSWSA9ICdAbWVkaWEgKG1pbi13aWR0aDoxMjgwcHgpJztcbnZhciBNSU5fREVGQVVMVF9NRURJQV9RVUVSWSA9IGV4cG9ydHMuTUlOX0RFRkFVTFRfTUVESUFfUVVFUlkgPSAnQG1lZGlhIChtaW4td2lkdGg6OTgwcHgpJztcbnZhciBNSU5fVEFCTEVUX01FRElBX1FVRVJZID0gZXhwb3J0cy5NSU5fVEFCTEVUX01FRElBX1FVRVJZID0gJ0BtZWRpYSAobWluLXdpZHRoOjc2OHB4KSc7XG52YXIgTUlOX01PQklMRV9NRURJQV9RVUVSWSA9IGV4cG9ydHMuTUlOX01PQklMRV9NRURJQV9RVUVSWSA9ICdAbWVkaWEgKG1pbi13aWR0aDo0ODBweCknO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3R5cG9ncmFwaHktYnJlYWtwb2ludC1jb25zdGFudHMvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICAqIEJvb3RzdHJhcCB0b29sdGlwLmpzIHY0LjIuMSAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgKiBDb3B5cmlnaHQgMjAxMS0yMDE4IFRoZSBCb290c3RyYXAgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2dyYXBocy9jb250cmlidXRvcnMpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgncG9wcGVyLmpzJyksIHJlcXVpcmUoJy4vdXRpbC5qcycpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2pxdWVyeScsICdwb3BwZXIuanMnLCAnLi91dGlsLmpzJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbC5Ub29sdGlwID0gZmFjdG9yeShnbG9iYWwualF1ZXJ5LGdsb2JhbC5Qb3BwZXIsZ2xvYmFsLlV0aWwpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgkLFBvcHBlcixVdGlsKSB7ICd1c2Ugc3RyaWN0JztcblxuICAkID0gJCAmJiAkLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyAkWydkZWZhdWx0J10gOiAkO1xuICBQb3BwZXIgPSBQb3BwZXIgJiYgUG9wcGVyLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBQb3BwZXJbJ2RlZmF1bHQnXSA6IFBvcHBlcjtcbiAgVXRpbCA9IFV0aWwgJiYgVXRpbC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gVXRpbFsnZGVmYXVsdCddIDogVXRpbDtcblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAndG9vbHRpcCc7XG4gIHZhciBWRVJTSU9OID0gJzQuMi4xJztcbiAgdmFyIERBVEFfS0VZID0gJ2JzLnRvb2x0aXAnO1xuICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gIHZhciBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCc7XG4gIHZhciBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBDTEFTU19QUkVGSVggKyBcIlxcXFxTK1wiLCAnZycpO1xuICB2YXIgRGVmYXVsdFR5cGUgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICAgIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlcjogJ3N0cmluZycsXG4gICAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGh0bWw6ICdib29sZWFuJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBvZmZzZXQ6ICcobnVtYmVyfHN0cmluZyknLFxuICAgIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICcoc3RyaW5nfGFycmF5KScsXG4gICAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuICB9O1xuICB2YXIgQXR0YWNobWVudE1hcCA9IHtcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgVE9QOiAndG9wJyxcbiAgICBSSUdIVDogJ3JpZ2h0JyxcbiAgICBCT1RUT006ICdib3R0b20nLFxuICAgIExFRlQ6ICdsZWZ0J1xuICB9O1xuICB2YXIgRGVmYXVsdCA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZWxheTogMCxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICBvZmZzZXQ6IDAsXG4gICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICBmYWxsYmFja1BsYWNlbWVudDogJ2ZsaXAnLFxuICAgIGJvdW5kYXJ5OiAnc2Nyb2xsUGFyZW50J1xuICB9O1xuICB2YXIgSG92ZXJTdGF0ZSA9IHtcbiAgICBTSE9XOiAnc2hvdycsXG4gICAgT1VUOiAnb3V0J1xuICB9O1xuICB2YXIgRXZlbnQgPSB7XG4gICAgSElERTogXCJoaWRlXCIgKyBFVkVOVF9LRVksXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZLFxuICAgIFNIT1c6IFwic2hvd1wiICsgRVZFTlRfS0VZLFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVksXG4gICAgSU5TRVJURUQ6IFwiaW5zZXJ0ZWRcIiArIEVWRU5UX0tFWSxcbiAgICBDTElDSzogXCJjbGlja1wiICsgRVZFTlRfS0VZLFxuICAgIEZPQ1VTSU46IFwiZm9jdXNpblwiICsgRVZFTlRfS0VZLFxuICAgIEZPQ1VTT1VUOiBcImZvY3Vzb3V0XCIgKyBFVkVOVF9LRVksXG4gICAgTU9VU0VFTlRFUjogXCJtb3VzZWVudGVyXCIgKyBFVkVOVF9LRVksXG4gICAgTU9VU0VMRUFWRTogXCJtb3VzZWxlYXZlXCIgKyBFVkVOVF9LRVlcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gIH07XG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBUT09MVElQOiAnLnRvb2x0aXAnLFxuICAgIFRPT0xUSVBfSU5ORVI6ICcudG9vbHRpcC1pbm5lcicsXG4gICAgQVJST1c6ICcuYXJyb3cnXG4gIH07XG4gIHZhciBUcmlnZ2VyID0ge1xuICAgIEhPVkVSOiAnaG92ZXInLFxuICAgIEZPQ1VTOiAnZm9jdXMnLFxuICAgIENMSUNLOiAnY2xpY2snLFxuICAgIE1BTlVBTDogJ21hbnVhbCdcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgVG9vbHRpcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvb2x0aXAoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcvKScpO1xuICAgICAgfSAvLyBwcml2YXRlXG5cblxuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSAwO1xuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9O1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDsgLy8gUHJvdGVjdGVkXG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy50aXAgPSBudWxsO1xuXG4gICAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IFRvb2x0aXAucHJvdG90eXBlO1xuXG4gICAgLy8gUHVibGljXG4gICAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNhYmxlID0gZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfcHJvdG8udG9nZ2xlRW5hYmxlZCA9IGZ1bmN0aW9uIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkO1xuICAgIH07XG5cbiAgICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2s7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcyk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtcbiAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnKTtcblxuICAgICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAgICQodGhpcy50aXApLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy50aXAgPSBudWxsO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpO1xuXG4gICAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gVXRpbC5maW5kU2hhZG93Um9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB2YXIgaXNJblRoZURvbSA9ICQuY29udGFpbnMoc2hhZG93Um9vdCAhPT0gbnVsbCA/IHNoYWRvd1Jvb3QgOiB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgICAgdmFyIHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKTtcbiAgICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZCk7XG4gICAgICAgIHRoaXMuc2V0Q29udGVudCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkZBREUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudCkgOiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQ7XG5cbiAgICAgICAgdmFyIGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudCk7XG5cbiAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCk7XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2dldENvbnRhaW5lcigpO1xuXG4gICAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpO1xuXG4gICAgICAgIGlmICghJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAgICQodGlwKS5hcHBlbmRUbyhjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRCk7XG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIodGhpcy5lbGVtZW50LCB0aXAsIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLmNvbmZpZy5vZmZzZXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFycm93OiB7XG4gICAgICAgICAgICAgIGVsZW1lbnQ6IFNlbGVjdG9yLkFSUk9XXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLmNvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLm9yaWdpbmFsUGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVyk7IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG5cbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5fZml4VHJhbnNpdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwcmV2SG92ZXJTdGF0ZSA9IF90aGlzLl9ob3ZlclN0YXRlO1xuICAgICAgICAgIF90aGlzLl9ob3ZlclN0YXRlID0gbnVsbDtcbiAgICAgICAgICAkKF90aGlzLmVsZW1lbnQpLnRyaWdnZXIoX3RoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pO1xuXG4gICAgICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgICAgX3RoaXMuX2xlYXZlKG51bGwsIF90aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMudGlwKTtcbiAgICAgICAgICAkKHRoaXMudGlwKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5faG92ZXJTdGF0ZSAhPT0gSG92ZXJTdGF0ZS5TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMi5fY2xlYW5UaXBDbGFzcygpO1xuXG4gICAgICAgIF90aGlzMi5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpO1xuXG4gICAgICAgICQoX3RoaXMyLmVsZW1lbnQpLnRyaWdnZXIoX3RoaXMyLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTik7XG5cbiAgICAgICAgaWYgKF90aGlzMi5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMyLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVyk7IC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5DTElDS10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5GT0NVU10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZTtcblxuICAgICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aXApO1xuICAgICAgICAkKHRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnO1xuICAgIH07XG5cbiAgICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9OyAvLyBQcm90ZWN0ZWRcblxuXG4gICAgX3Byb3RvLmlzV2l0aENvbnRlbnQgPSBmdW5jdGlvbiBpc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmFkZEF0dGFjaG1lbnRDbGFzcyA9IGZ1bmN0aW9uIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgICAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhDTEFTU19QUkVGSVggKyBcIi1cIiArIGF0dGFjaG1lbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGlwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMudGlwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoKSB7XG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCQodGlwLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuVE9PTFRJUF9JTk5FUikpLCB0aGlzLmdldFRpdGxlKCkpO1xuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFICsgXCIgXCIgKyBDbGFzc05hbWUuU0hPVyk7XG4gICAgfTtcblxuICAgIF9wcm90by5zZXRFbGVtZW50Q29udGVudCA9IGZ1bmN0aW9uIHNldEVsZW1lbnRDb250ZW50KCRlbGVtZW50LCBjb250ZW50KSB7XG4gICAgICB2YXIgaHRtbCA9IHRoaXMuY29uZmlnLmh0bWw7XG5cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgKGNvbnRlbnQubm9kZVR5cGUgfHwgY29udGVudC5qcXVlcnkpKSB7XG4gICAgICAgIC8vIENvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgICBpZiAoaHRtbCkge1xuICAgICAgICAgIGlmICghJChjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWxlbWVudC50ZXh0KCQoY29udGVudCkudGV4dCgpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnRbaHRtbCA/ICdodG1sJyA6ICd0ZXh0J10oY29udGVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5nZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICAgICAgdmFyIHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpO1xuXG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLmVsZW1lbnQpIDogdGhpcy5jb25maWcudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9OyAvLyBQcml2YXRlXG5cblxuICAgIF9wcm90by5fZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gX2dldENvbnRhaW5lcigpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5jb25maWcuY29udGFpbmVyKSkge1xuICAgICAgICByZXR1cm4gJCh0aGlzLmNvbmZpZy5jb250YWluZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChkb2N1bWVudCkuZmluZCh0aGlzLmNvbmZpZy5jb250YWluZXIpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldEF0dGFjaG1lbnQgPSBmdW5jdGlvbiBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKTtcbiAgICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAkKF90aGlzMy5lbGVtZW50KS5vbihfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssIF90aGlzMy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy50b2dnbGUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRyaWdnZXIuTUFOVUFMKSB7XG4gICAgICAgICAgdmFyIGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOiBfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTjtcbiAgICAgICAgICB2YXIgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOiBfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVQ7XG4gICAgICAgICAgJChfdGhpczMuZWxlbWVudCkub24oZXZlbnRJbiwgX3RoaXMzLmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl9lbnRlcihldmVudCk7XG4gICAgICAgICAgfSkub24oZXZlbnRPdXQsIF90aGlzMy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fbGVhdmUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMy5lbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXMzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZml4VGl0bGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9maXhUaXRsZSA9IGZ1bmN0aW9uIF9maXhUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpO1xuXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCB0aXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZW50ZXIgPSBmdW5jdGlvbiBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUl0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJChjb250ZXh0LmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KTtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1c7XG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2xlYXZlID0gZnVuY3Rpb24gX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpO1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgY29udGV4dC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2lzV2l0aEFjdGl2ZVRyaWdnZXIgPSBmdW5jdGlvbiBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIGZvciAodmFyIHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LCAkKHRoaXMuZWxlbWVudCkuZGF0YSgpLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0RGVsZWdhdGVDb25maWcgPSBmdW5jdGlvbiBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jbGVhblRpcENsYXNzID0gZnVuY3Rpb24gX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgICB2YXIgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpO1xuICAgICAgdmFyIHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWCk7XG5cbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGgpIHtcbiAgICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlID0gZnVuY3Rpb24gX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgICB2YXIgcG9wcGVySW5zdGFuY2UgPSBwb3BwZXJEYXRhLmluc3RhbmNlO1xuICAgICAgdGhpcy50aXAgPSBwb3BwZXJJbnN0YW5jZS5wb3BwZXI7XG5cbiAgICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKTtcblxuICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChwb3BwZXJEYXRhLnBsYWNlbWVudCkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2ZpeFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfZml4VHJhbnNpdGlvbigpIHtcbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHZhciBpbml0Q29uZmlnQW5pbWF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0aW9uO1xuXG4gICAgICBpZiAodGlwLmdldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSk7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uO1xuICAgIH07IC8vIFN0YXRpY1xuXG5cbiAgICBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFRvb2x0aXAsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIk5BTUVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gTkFNRTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiREFUQV9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gREFUQV9LRVk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkV2ZW50XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJFVkVOVF9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRVZFTlRfS0VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG9vbHRpcDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkLmZuW05BTUVdID0gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9vbHRpcDtcblxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9vbHRpcC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAuanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgKiBCb290c3RyYXAgdGFiLmpzIHY0LjIuMSAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgKiBDb3B5cmlnaHQgMjAxMS0yMDE4IFRoZSBCb290c3RyYXAgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2dyYXBocy9jb250cmlidXRvcnMpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgnLi91dGlsLmpzJykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnanF1ZXJ5JywgJy4vdXRpbC5qcyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwuVGFiID0gZmFjdG9yeShnbG9iYWwualF1ZXJ5LGdsb2JhbC5VdGlsKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoJCxVdGlsKSB7ICd1c2Ugc3RyaWN0JztcblxuICAkID0gJCAmJiAkLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyAkWydkZWZhdWx0J10gOiAkO1xuICBVdGlsID0gVXRpbCAmJiBVdGlsLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBVdGlsWydkZWZhdWx0J10gOiBVdGlsO1xuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSA9ICd0YWInO1xuICB2YXIgVkVSU0lPTiA9ICc0LjIuMSc7XG4gIHZhciBEQVRBX0tFWSA9ICdicy50YWInO1xuICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgdmFyIERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgdmFyIEV2ZW50ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZLFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZLFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBEUk9QRE9XTl9NRU5VOiAnZHJvcGRvd24tbWVudScsXG4gICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICBESVNBQkxFRDogJ2Rpc2FibGVkJyxcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gIH07XG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBEUk9QRE9XTjogJy5kcm9wZG93bicsXG4gICAgTkFWX0xJU1RfR1JPVVA6ICcubmF2LCAubGlzdC1ncm91cCcsXG4gICAgQUNUSVZFOiAnLmFjdGl2ZScsXG4gICAgQUNUSVZFX1VMOiAnPiBsaSA+IC5hY3RpdmUnLFxuICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJyxcbiAgICBEUk9QRE9XTl9UT0dHTEU6ICcuZHJvcGRvd24tdG9nZ2xlJyxcbiAgICBEUk9QRE9XTl9BQ1RJVkVfQ0hJTEQ6ICc+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIFRhYiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhYihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IFRhYi5wcm90b3R5cGU7XG5cbiAgICAvLyBQdWJsaWNcbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0O1xuICAgICAgdmFyIHByZXZpb3VzO1xuICAgICAgdmFyIGxpc3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yLk5BVl9MSVNUX0dST1VQKVswXTtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcblxuICAgICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICAgIHZhciBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNlbGVjdG9yLkFDVElWRV9VTCA6IFNlbGVjdG9yLkFDVElWRTtcbiAgICAgICAgcHJldmlvdXMgPSAkLm1ha2VBcnJheSgkKGxpc3RFbGVtZW50KS5maW5kKGl0ZW1TZWxlY3RvcikpO1xuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pO1xuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVywge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGVFdmVudCk7XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fZWxlbWVudCwgbGlzdEVsZW1lbnQpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgdmFyIGhpZGRlbkV2ZW50ID0gJC5FdmVudChFdmVudC5ISURERU4sIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBfdGhpcy5fZWxlbWVudFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgICAgfSk7XG4gICAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZGVuRXZlbnQpO1xuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgfTsgLy8gUHJpdmF0ZVxuXG5cbiAgICBfcHJvdG8uX2FjdGl2YXRlID0gZnVuY3Rpb24gX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgYWN0aXZlRWxlbWVudHMgPSBjb250YWluZXIgJiYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBjb250YWluZXIubm9kZU5hbWUgPT09ICdPTCcpID8gJChjb250YWluZXIpLmZpbmQoU2VsZWN0b3IuQUNUSVZFX1VMKSA6ICQoY29udGFpbmVyKS5jaGlsZHJlbihTZWxlY3Rvci5BQ1RJVkUpO1xuICAgICAgdmFyIGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdO1xuICAgICAgdmFyIGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIGFjdGl2ZSAmJiAkKGFjdGl2ZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5fdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spO1xuICAgICAgfTtcblxuICAgICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlKTtcbiAgICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3RyYW5zaXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAkKGFjdGl2ZSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgIHZhciBkcm9wZG93bkNoaWxkID0gJChhY3RpdmUucGFyZW50Tm9kZSkuZmluZChTZWxlY3Rvci5EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQpWzBdO1xuXG4gICAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgICAgJChkcm9wZG93bkNoaWxkKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuXG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgVXRpbC5yZWZsb3coZWxlbWVudCk7XG4gICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKTtcblxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiAkKGVsZW1lbnQucGFyZW50Tm9kZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX01FTlUpKSB7XG4gICAgICAgIHZhciBkcm9wZG93bkVsZW1lbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuRFJPUERPV04pWzBdO1xuXG4gICAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgZHJvcGRvd25Ub2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkcm9wZG93bkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpKTtcbiAgICAgICAgICAkKGRyb3Bkb3duVG9nZ2xlTGlzdCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9OyAvLyBTdGF0aWNcblxuXG4gICAgVGFiLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gJHRoaXMuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUYWIodGhpcyk7XG4gICAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFRhYiwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRhYjtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3Nob3cnKTtcbiAgfSk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gVGFiLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUYWI7XG5cbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgcmV0dXJuIFRhYi5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIHJldHVybiBUYWI7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YWIuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC90YWIuanNcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIE1ha2VTdGlja3kgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgcGx1Z2luID0ge307XG4gICAgLy9bZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl1cbiAgICBwbHVnaW4uaW5pdCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBtYXhTdGlja1Bvc2l0aW9uLCBtYXJnaW5Ub3ApXG4gICAge1xuICAgICAgICBpZih0eXBlb2YgbWFyZ2luVG9wID09ICd1bmRlZmluZWQnKSBtYXJnaW5Ub3AgPSAwO1xuICAgICAgICAvLyBGaW5kIGFsbCBkYXRhLXRvZ2dsZT1cInN0aWNreS1vbnNjcm9sbFwiIGVsZW1lbnRzXG4gICAgICAgICQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHN0aWNreSA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIHN0aWNreVdyYXBwZXIgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdzdGlja3ktd3JhcHBlcicpOyAvLyBpbnNlcnQgaGlkZGVuIGVsZW1lbnQgdG8gbWFpbnRhaW4gYWN0dWFsIHRvcCBvZmZzZXQgb24gcGFnZVxuICAgICAgICAgIHN0aWNreS5iZWZvcmUoc3RpY2t5V3JhcHBlcik7XG4gICAgICAgICAgc3RpY2t5LmFkZENsYXNzKCdzdGlja3knKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBTY3JvbGwgJiByZXNpemUgZXZlbnRzXG4gICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwuc3RpY2t5LW9uc2Nyb2xsIHJlc2l6ZS5zdGlja3ktb25zY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN0aWNreVRvZ2dsZShzdGlja3ksIHN0aWNreVdyYXBwZXIsICQodGhpcyksIG1heFN0aWNrUG9zaXRpb24sIG1hcmdpblRvcCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gT24gcGFnZSBsb2FkXG4gICAgICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh3aW5kb3cpLCBtYXhTdGlja1Bvc2l0aW9uLCBtYXJnaW5Ub3ApO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHN0aWNreVRvZ2dsZShzdGlja3ksIHN0aWNreVdyYXBwZXIsIHNjcm9sbEVsZW1lbnQsIG1heFN0aWNrUG9zaXRpb24sIG1hcmdpblRvcCkge1xuICAgICAgICAgIHZhciBzdGlja3lIZWlnaHQgPSBzdGlja3kub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICB2YXIgc3RpY2t5V2lkdGggPSBzdGlja3kub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBvZmZzZXQgPSBzdGlja3lXcmFwcGVyLm9mZnNldCgpO1xuICAgICAgICAgIHZhciBzdGlja3lUb3AgPSBvZmZzZXQudG9wO1xuICAgICAgICAgIHZhciBzdGlja3lMZWZ0ID0gb2Zmc2V0LmxlZnQ7XG4gICAgXG4gICAgICAgICAgdmFyIHdpbmRvd1Njcm9sbFBvc2l0aW9uID0gc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid2luUG9zLT5cIit3aW5kb3dTY3JvbGxQb3NpdGlvbisgXCIgc1RvcC0+XCIrc3RpY2t5VG9wK1wiIG1heC0+XCIrbWF4U3RpY2tQb3NpdGlvbiApO1xuICAgICAgICAgIGlmICh3aW5kb3dTY3JvbGxQb3NpdGlvbiA+PSBzdGlja3lUb3Ape1xuICAgICAgICAgICAgaWYod2luZG93U2Nyb2xsUG9zaXRpb24gPCBtYXhTdGlja1Bvc2l0aW9uKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGlja3lXcmFwcGVyLmhlaWdodChzdGlja3lIZWlnaHQpO1xuICAgICAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnd2lkdGgnLHN0aWNreVdpZHRoKydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JyxzdGlja3lMZWZ0KydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLG1hcmdpblRvcCsncHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RpY2t5LnJlbW92ZUNsYXNzKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ3RvcCcsKG1heFN0aWNrUG9zaXRpb24tc3RpY2t5VG9wKSsncHgnKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnbGVmdCcsJzE1cHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLCcwJyk7XG4gICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLCcwJyk7XG4gICAgICAgICAgICBzdGlja3lXcmFwcGVyLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBwbHVnaW47XG4gICAgXG59KSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBTbWFydEZpbHRlcnMgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgcGx1Z2luID0ge307XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgZmlsdGVyczogW10sXG4gICAgICAgIGZpbHRlckRyb3Bkb3duOiAnJyxcbiAgICAgICAgbG9hZGluZ0FuaW1hdGlvbjogJycsXG4gICAgICAgIHJlc3VsdHNDb250YWluZXI6ICcnLFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBwbHVnaW4uaW5pdCA9IGZ1bmN0aW9uKHNldHRpbmdzKXtcbiAgICAgICAgJC5leHRlbmQoIGNvbmZpZywgc2V0dGluZ3MgKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcgdGhlIFNtYXJ0RmlsdGVycycpO1xuICAgICAgICBcbiAgICAgICAgdmFyIHVybFZhcnMgPSBnZXRVcmxWYXJzKCk7XG4gICAgICAgIHNldEZpbHRlcnNEZWZhdWx0U3RhdGVzKHVybFZhcnMpO1xuICAgICAgICBcbiAgICAgICAgJChjb25maWcuZmlsdGVyRHJvcGRvd24pLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXsgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uaHRtbCgkKHRoaXMpLmh0bWwoKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICQodGhpcykuZGF0YSgndmFsdWUnKTtcbiAgICAgICAgICAgIGlmKHZhbHVlICE9ICdhbGwnKSB1cmxWYXJzW2J1dHRvbi5kYXRhKCdrZXknKV0gPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAvL2Vsc2UgdXJsVmFycyA9IHVuc2V0QXJyYXkodXJsVmFycyxidXR0b24uZGF0YSgna2V5JykpO1xuICAgICAgICAgICAgZWxzZSBkZWxldGUgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKGNvbmZpZy5sb2FkaW5nQW5pbWF0aW9uKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgICAgJChjb25maWcucmVzdWx0c0NvbnRhaW5lcikuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc2hvdycpOy8vaGlkZSB0aGUgZHJvcGRvd24gYWZ0ZXIgY2xpY2tlZFxuICAgICAgICAgICAgLy92YXIgcGFyZW50RHJvcGRvd24gPSBhdXgucGFyZW50KCk7XG4gICAgICAgICAgICAvL3BhcmVudERyb3Bkb3duWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZ2V0QmFzZVVSTCgpICsgJz8nICsgc2VyaWFsaXplKHVybFZhcnMgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyc0RlZmF1bHRTdGF0ZXModXJsVmFycyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIGZpbHRlciB2YWx1ZXMnLCB1cmxWYXJzKTtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZy5maWx0ZXJzLmZvckVhY2goZnVuY3Rpb24oZmlsdGVyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlci51cmxLZXkpO1xuICAgICAgICAgICAgaWYoZmlsdGVyLnVybEtleSBpbiB1cmxWYXJzKSAkKGZpbHRlci5idXR0b24pLmh0bWwoJChmaWx0ZXIub3B0aW9ucysnW2RhdGEtdmFsdWU9XCInK3VybFZhcnNbZmlsdGVyLnVybEtleV0rJ1wiXScpLmh0bWwoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRCYXNlVVJMKCl7XG4gICAgICAgIHZhciBiYXNlVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHZhciBwaWVjZXMgPSBiYXNlVVJMLnNwbGl0KCc/Jyk7XG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGg+MSkgYmFzZVVSTCA9IHBpZWNlc1swXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBiYXNlVVJMO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRVcmxWYXJzKCl7XG4gICAgICBcbiAgICAgICAgdmFyIHZhcnMgPSBbXSwgaGFzaDtcbiAgICAgICAgdmFyIGhhc2hlcyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJz8nKSArIDEpLnNwbGl0KCcmJyk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhhc2ggPSBoYXNoZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIHZhcnMucHVzaChoYXNoWzBdKTtcbiAgICAgICAgICAgIHZhcnNbaGFzaFswXV0gPSBoYXNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkZWxldGUgdmFyc1snMCddO1xuICAgICAgICBkZWxldGUgdmFyc1tnZXRCYXNlVVJMKCldO1xuICAgICAgICBkZWxldGUgdmFyc1snJ107XG4gIFxuICAgICAgICByZXR1cm4gdmFycztcbiAgICBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICAgICAgICB2YXIgc3RyID0gW107XG4gICAgICAgIGZvcih2YXIgcCBpbiBvYmopXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGx1Z2luO1xuICAgIFxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qc1xuLy8gbW9kdWxlIGlkID0gMTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsb2FkVmlkZW8gPSBmdW5jdGlvbih2aWRlb1VSTCwgc2V0dGluZ3Mpe1xuICBpZih0eXBlb2Ygc2V0dGluZ3MgPT0gJ3VuZGVmaW5lZCcpIHNldHRpbmdzID0ge307XG4gIHZhciBzID0gZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICBcbiAgdmFyIHZpZGVvVmlld3BvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmlkZW9WaWV3cG9ydC5pZCA9IFwidmlkZW8tdmlld3BvcnRcIjtcbiAgdmlkZW9WaWV3cG9ydC5jbGFzc0xpc3QuYWRkKCd2aWRlby12aWV3cG9ydCcpO1xuICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHZpZGVvVmlld3BvcnQsIHMpO1xuICBcbiAgdmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgdmlkZW8uc3JjID0gdmlkZW9VUkw7IHZpZGVvLmF1dG9QbGF5ID0gdHJ1ZTsgdmlkZW8ubG9vcCA9IHRydWU7IHZpZGVvLm11dGVkID0gdHJ1ZTsgXG4gIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLWJhY2tncm91bmQnKTtcbiAgdmlkZW9WaWV3cG9ydC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gIFxuICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJyxmdW5jdGlvbigpeyB2aWRlby5wbGF5KCk7IH0pO1xuICB2YXIgdmlkX3dfb3JpZyA9IHBhcnNlSW50KCQod2luZG93KS53aWR0aCgpKTtcbiAgdmFyIHZpZF9oX29yaWcgPSBwYXJzZUludCgkKHZpZGVvKS5oZWlnaHQoKSk7XG4gIHZhciBtaW5fdyA9IDQwMDtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsZnVuY3Rpb24oKXtcbiAgICAgIHZhciBzb3VyY2VWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICAgIHZhciBzb3VyY2VWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgICAgLy9pZih2aWRfd19vcmlnIDw9IDAgfHwgdmlkX3dfb3JpZyA9PSBJbmZpbml0eSkgdmlkX3dfb3JpZyA9IHBhcnNlSW50KCQodmlkZW8pLndpZHRoKCkpO1xuICAgICAgLy9pZih2aWRfaF9vcmlnIDw9IDAgfHwgdmlkX2hfb3JpZyA9PSBJbmZpbml0eSkgdmlkX2hfb3JpZyA9IHBhcnNlSW50KCQodmlkZW8pLmhlaWdodCgpKTtcbiAgICAgIHZhciBhZGRlZFBhZGRpbmcgPSAxMDA7XG4gICAgICB2YXIgdGFyZ2V0X3dpdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgIHZhciB0YXJnZXRfaGVpZ2ggPSAkKCcubWFzdGhlYWQnKS5oZWlnaHQoKSArICQoJ25hdi5uYXZiYXInKS5oZWlnaHQoKSArIHBhcnNlSW50KCQoJy5tYXN0aGVhZCcpLmNzcygnbWFyZ2luLXRvcCcpKSArIHBhcnNlSW50KCQoJ25hdi5uYXZiYXInKS5jc3MoJ21hcmdpbi10b3AnKSkgKyBhZGRlZFBhZGRpbmc7XG4gICAgICAkKHZpZGVvVmlld3BvcnQpLndpZHRoKHRhcmdldF93aXRoKTtcbiAgICAgICQodmlkZW9WaWV3cG9ydCkuaGVpZ2h0KG5ld1ZpZXdIZWlnaHQpO1xuICBcbiAgICAgIHZhciBzY2FsZV9oID0gdGFyZ2V0X3dpdGggLyB2aWRfd19vcmlnO1xuICAgICAgdmFyIHNjYWxlX3YgPSB0YXJnZXRfaGVpZ2ggLyB2aWRfaF9vcmlnO1xuICAgICAgdmFyIHNjYWxlID0gc2NhbGVfaCA+IHNjYWxlX3YgPyBzY2FsZV9oIDogc2NhbGVfdjtcbiAgXG4gICAgICBcbiAgICAgIGlmIChzY2FsZSAqIHZpZF93X29yaWcgPCBtaW5fdykgc2NhbGUgPSBtaW5fdyAvIHZpZF93X29yaWc7XG4gICAgICBcbiAgICAgIHZhciBuZXdWaWV3V2lkdGggPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICB2YXIgbmV3Vmlld0hlaWdodCA9IHNjYWxlICogdmlkX3dfb3JpZztcbiAgICAgIFxuICAgICAgLy9pZiB0aGUgbmV3IHdpZHRoIGRvZXMgbm90IGNvdmVyIHRoZSBlbnRpcmUgc2NyZWVuIHdpZHRoXG4gICAgICBpZiAobmV3Vmlld1dpZHRoIDwgc291cmNlVmlkZW9XaWR0aCkgc2NhbGUgPSBzb3VyY2VWaWRlb1dpZHRoIC8gdmlkX3dfb3JpZztcbiAgICAgIGlmIChuZXdWaWV3SGVpZ2h0IDwgc291cmNlVmlkZW9IZWlnaHQgJiYgc2NhbGUgPCAoc291cmNlVmlkZW9IZWlnaHQgLyB2aWRfaF9vcmlnKSkgc2NhbGUgPSBzb3VyY2VWaWRlb0hlaWdodCAvIHZpZF9oX29yaWc7XG4gICAgICBcbiAgICAgIG5ld1ZpZXdXaWR0aCA9IHNjYWxlICogdmlkX3dfb3JpZztcbiAgICAgIG5ld1ZpZXdIZWlnaHQgPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gIFxuICAgICAgJCh2aWRlbykud2lkdGgobmV3Vmlld1dpZHRoKTtcbiAgICAgICQodmlkZW8pLmhlaWdodChuZXdWaWV3SGVpZ2h0KTtcbiAgXG4gICAgICAkKHZpZGVvVmlld3BvcnQpLnNjcm9sbExlZnQoKG5ld1ZpZXdXaWR0aCAtIHRhcmdldF93aXRoKSAvIDIpO1xuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS5zY3JvbGxUb3AoKG5ld1ZpZXdIZWlnaHQgLSB0YXJnZXRfaGVpZ2gpIC8gMik7XG4gIH0pO1xuICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gIFxuICBpZih0eXBlb2Ygc2V0dGluZ3Mub3ZlcmxheSAhPSAndW5kZWZpbmVkJyl7XG4gICAgXG4gICAgdmFyIG92ZXJsYXkgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJhYnNvbHV0ZVwiO1xuICAgIG92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLm92ZXJsYXk7XG4gICAgb3ZlcmxheS5zdHlsZS5vcGFjaXR5ID0gXCIwLjRcIjtcbiAgICBvdmVybGF5LnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICAgIG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIG92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgb3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIi0xXCI7XG4gICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvdmVybGF5LCBzKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbG9hZFZpZGVvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9yZXNwb25zaXZlLXZpZGVvLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFRoZVByb2dyYW0gPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgdGhlc2NvcGUgPSB7fTtcbiAgICAvLyBDYWNoZSBzZWxlY3RvcnNcbiAgICB2YXIgdG9wTWVudSA9ICQoXCIucHJvZ3JhbS1tZW51XCIpLFxuICAgICAgICB0b3BNZW51SGVpZ2h0ID0gdG9wTWVudS5vdXRlckhlaWdodCgpKzE1LFxuICAgICAgICAvLyBBbGwgbGlzdCBpdGVtc1xuICAgICAgICBtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCJhW2hyZWYqPScjJ11cIiksXG4gICAgICAgIC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXG4gICAgICAgIHNjcm9sbEl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgIHZhciBpdGVtID0gJCgkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgdGhlc2NvcGUuaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvLyBCaW5kIHRvIHNjcm9sbFxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKSt0b3BNZW51SGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cbiAgICAgICAgICAgdmFyIGN1ciA9IHNjcm9sbEl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgICAgIGlmICgkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3ApXG4gICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAgICAgICBjdXIgPSBjdXJbY3VyLmxlbmd0aC0xXTtcbiAgICAgICAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xuICAgICAgICAgICAvLyBTZXQvcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICBtZW51SXRlbXNcbiAgICAgICAgICAgICAucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAuZW5kKCkuZmlsdGVyKFwiW2hyZWY9JyNcIitpZCtcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoZXNjb3BlO1xuICAgIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlUHJvZ3JhbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcm9ncmFtLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExvY2F0aW9uVmlldyA9IChmdW5jdGlvbigpe1xuICAgIHZhciBzY29wZSA9IHt9O1xuICAgIFxuICAgIFxuICAgIHJldHVybiBzY29wZTtcbn0pKCk7XG5cbkxvY2F0aW9uVmlldy5hY3RpdmF0ZSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy92YXIgbmV3c2xldHRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtbmV3c2xldHRlciBmb3JtJyk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgIGlmKGZyb21Ub3A+MTAwKSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICBlbHNlICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xufSk7XG5cblxuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1OZXdzbGV0dGVyID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybU5ld3NsZXR0ZXIuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICBcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnbmV3c2xldHRlcl9zaWdudXAnLFxuICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1OZXdzbGV0dGVyLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybU5ld3NsZXR0ZXIuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChcIlRoZXJlIGhhcyBiZWVuIGFuIGVycm9yIHNpZ25pbmcgeW91IHVwXCIpO1xuICAgICAgfVxuICAgfSk7XG4gICBcbn0pO1xuXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybVN5bGxhYnVzID0gJCh0aGlzKTtcbiAgIHZhciBidXR0b24gPSBmb3JtU3lsbGFidXMuZmluZCgnYnV0dG9uJyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGZpcnN0TmFtZUZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgIHZhciBsb2NhdGlvbkZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJy5sb2NhdGlvbnMnKTtcbiAgIHZhciBsb2NhdGlvbiA9IGxvY2F0aW9uRmllbGQudmFsKCk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgdmFyIGZpcnN0TmFtZSA9IGZpcnN0TmFtZUZpZWxkLnZhbCgpO1xuICAgXG4gICBpZihlbWFpbCA9PSAnJyB8fCBmaXJzdE5hbWUgPT0nJylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnV2UgbmVlZCB5b3VyIGVtYWlsIGFuZCBmaXJzdCBuYW1lJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2UgaWYobG9jYXRpb249PScnIHx8IGxvY2F0aW9uPT0nc2VsZWN0JylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnUGxlYXNlIHNlbGVjdCBhIExvY2F0aW9uJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgIGJ1dHRvbi5odG1sKFwiTG9hZGluZy4uLlwiKTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWN0aW9uOiAnZG93bmxvYWRfc3lsbGFidXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICh0eXBlb2YgV1BBU19BUFAudGVtcGxhdGUgPT0gJ3N0cmluZycpID8gV1BBU19BUFAudGVtcGxhdGUucmVwbGFjZSgnc2luZ2xlLScsJycpIDogJ25vbmUnLFxuICAgICAgICAgICAgdXJsOiBXUEFTX0FQUC51cmwsXG4gICAgICAgICAgICB1dG1fbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lXG4gICAgICAgICB9LFxuICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoXCJEb3dubG9hZFwiKTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBmb3JtU3lsbGFidXMuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgJCgnI3N5bGxhYnVzTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgfSwyMDAwKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSxcbiAgICAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICBidXR0b24uaHRtbChcIkRvd25sb2FkXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCJUaGVyZSBoYXMgYmVlbiBhbiBlcnJvciBzaWduaW5nIHlvdSB1cFwiKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfSBcbiAgIFxufSk7XG5cbiQoJy5tb3JlLWluZm8tc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1TeWxsYWJ1cyA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGZpcnN0TmFtZUZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICB2YXIgZmlyc3ROYW1lID0gZmlyc3ROYW1lRmllbGQudmFsKCk7XG4gICBcbiAgIGlmKGVtYWlsID09ICcnIHx8IGZpcnN0TmFtZSA9PScnKVxuICAge1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCdXZSBuZWVkIHlvdXIgZW1haWwgYW5kIGZpcnN0IG5hbWUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgfVxuICAgZWxzZXtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgJC5hamF4KHtcbiAgICAgIHVybDogJy93cC1qc29uLzRnL3YxL2FwcGx5L3JlcXVlc3RfaW5mbycsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICB1cmw6IFdQQVNfQVBQLnVybCxcbiAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApIGZvcm1TeWxsYWJ1cy5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICBlbHNlIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3Igc2lnbmluZyB5b3UgdXBcIik7XG4gICAgICB9XG4gICB9KTtcbiAgIH0gXG4gICBcbn0pO1xuXG4oZnVuY3Rpb24gbG9hZEFsZXJ0cygpe1xuICAgdmFyIGRpc21pc3NlZEFsZXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkaXNtaXNzZWRfYWxlcnRzJyk7XG4gICBcbiAgIGlmKGRpc21pc3NlZEFsZXJ0cykgZGlzbWlzc2VkQWxlcnRzID0gZGlzbWlzc2VkQWxlcnRzLnNwbGl0KFwiLFwiKTtcbiAgIGVsc2UgZGlzbWlzc2VkQWxlcnRzID0gW107XG4gICBcbiAgIHZhciBhbGxBbGVydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtZGlzbWlzc2libGUnKTtcbiAgIGFsbEFsZXJ0cy5mb3JFYWNoKGZ1bmN0aW9uKGEpe1xuICAgICAgaWYoZGlzbWlzc2VkQWxlcnRzLmluZGV4T2YoYS5pZCkgPT0gLTEpe1xuICAgICAgICAgdmFyIGFsZXJ0VG9EaXNtaXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrYS5pZCk7XG4gICAgICAgICBhbGVydFRvRGlzbWlzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgfSk7XG4gICB2YXIgY2xvc2VBbGVydEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1kaXNtaXNzPWFsZXJ0XScpO1xuICAgY2xvc2VBbGVydEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihidG4pe1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgXHRjb25zb2xlLmxvZyh0aGlzLnBhcmVudE5vZGUpO1xuICAgICAgICAgaWYodHlwZW9mIHRoaXMucGFyZW50Tm9kZS5pZCA9PSAndW5kZWZpbmVkJykgXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGFuIGlkIGZvciBhbGwgdGhlIGRpc21pc2FibGUgYWxlcnRzJyk7XG4gICAgICBcdGRpc21pc3NlZEFsZXJ0cy5wdXNoKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gICAgICBcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkaXNtaXNzZWRfYWxlcnRzJyxkaXNtaXNzZWRBbGVydHMuam9pbignLCcpKTtcbiAgICAgIFx0dGhpcy5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgfSk7XG59KSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50J1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBwcm9tcHRVcGNvbWluZ0V2ZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50JyxcbiAgICAgICAgIHR5cGU6ICdpbnRyb190b19jb2RpbmcnXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpIGZpbGxVcGNvbWluZ0ludHJvVG9Db2RpbmcocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgdXBjb21pbmcgZXZlbnQ6IFwiK3AzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG4gICAvL2xvYWQgbG9jYXRpb25zXG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3dwLWpzb24vNGcvdjEvbG9jYXRpb25zP2xhbmc9JytXUEFTX0FQUC5sYW5nLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihsb2NhdGlvbnMpe1xuICAgICAgICAgaWYobG9jYXRpb25zKVxuICAgICAgICAge1xuICAgICAgICAgICAgJCgnI3N5bGxhYnVzTW9kYWwgLmxvY2F0aW9ucywgLnN5bGxhYnVzLWRvd25sb2FkIC5sb2NhdGlvbnMnKS5odG1sKFsnPG9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdCBhIGxvY2F0aW9uPC9vcHRpb24+J10uY29uY2F0KGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obCl7XG4gICAgICAgICAgICAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCInK2xbJ2FjX2xvY2F0aW9uX3NsdWcnXSsnXCI+JytsWydwb3N0X3RpdGxlJ10rJzwvb3B0aW9uPic7XG4gICAgICAgICAgICB9KSkuam9pbignJykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL21hcmsgZGVmYXVsdCBsb2NhdGlvblxuICAgICAgICAgICAgaWYodHlwZW9mIFdQQVNfQVBQICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICBpZih0eXBlb2YgV1BBU19BUFAuY2l0eV9zbHVnICE9PSAndW5kZWZpbmVkJyAmJiBXUEFTX0FQUC5jaXR5X3NsdWcgIT09ICcnKSBjb25zb2xlLmxvZyhcIklnbm9yaW5nIHVzZXIgbG9jYXRpb24gYmVjYXVzZSBoZSBzcGVjaWZpZWQgYSBkaWZmZXJlbnQgb25lXCIpO1xuICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgV1BBU19BUFAubGF0aXR1ZGUgIT09ICd1bmRlZmluZWQnICYmIFdQQVNfQVBQLmxhdGl0dWRlICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0ID0gY2xvc2VzdExvY2F0aW9uKHsgbGF0aXR1ZGU6IFdQQVNfQVBQLmxhdGl0dWRlLCBsb25naXR1ZGU6IFdQQVNfQVBQLmxvbmdpdHVkZSB9LCBsb2NhdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgJCgnLmNpdGllcy5kcm9wZG93bi1zZWxlY3RvciBidXR0b24gc3BhbicpLmh0bWwoY2xvc2VzdC5wb3N0X3RpdGxlKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSBhY2FkZW15IGxvY2F0aW9ucyBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxuICAgc2V0dXBQcmljZUNhbGN1bGF0b3IoKTtcbiAgIFxuICAgJChcIi5kcm9wZG93bi10b2dnbGVcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS50b2dnbGVDbGFzcyhcInNob3dcIik7XG4gICB9KTtcbiAgIFxuICAgdmFyIG1hc3RlcldoaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc3RoZWFkLXdoaXRlJyk7XG4gICBpZih0eXBlb2YgbWFzdGVyV2hpdGUgIT0gJ3VuZGVmaW5lZCcgJiYgbWFzdGVyV2hpdGUpe1xuICAgICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTsgXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnaW52ZXJ0ZWQnKTtcbiAgIH0gXG4gICBcbn0pO1xuXG5mdW5jdGlvbiBzZXR1cFByaWNlQ2FsY3VsYXRvcigpe1xuICAgXG4gICB2YXIgUHJpY2VDYWxjdWxhdG9yID0gcmVxdWlyZSgnLi4vbGliL3ByaWNlQ2FsY3VsYXRvci5qcycpLmRlZmF1bHQ7XG4gICBjb25zdCBzbGlkZXJzID0gJCgnLnByaWNpbmctc2xpZGVyJyk7XG4gICBcbiAgIGlmKHNsaWRlcnMubGVuZ3RoID09PSAwKSBjb25zb2xlLmxvZygnVGhlcmUgaXMgbm8gc2xpZGVyIHRvIGxvYWQnKTtcbiAgIGVsc2V7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICAgdXJsOiAnL3dwLWpzb24vNGcvdjEvcHJpY2VzJyxcbiAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocHJpY2VzKXtcbiAgICAgICAgICAgIGlmKHByaWNlcyAmJiB0eXBlb2YgcHJpY2VzLmRhdGEgIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBwcmljZXMgPSBwcmljZXMuZGF0YTtcbiAgICAgICAgICAgICAgIHNsaWRlcnMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzbGlkZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBzbGlkZXIuZGF0YSgnbG9jYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdXJzZSA9IHNsaWRlci5kYXRhKCdjb3Vyc2UnKTtcbiAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBwcmljZXNbY291cnNlXSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHByaWNlc1tjb3Vyc2VdW2xvY2F0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIGNvbnNvbGUuZXJyb3IoJ1ByaWNlIG5vdCBmb3VuZCBmb3IgJytjb3Vyc2UrJyBhdCAnK2xvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHJlbmRlckxvY2F0aW9uUHJpY2VzKHNsaWRlciwgcHJpY2VzW2NvdXJzZV1bbG9jYXRpb25dKTtcbiAgICAgICAgICAgICAgICAgICAgIFByaWNlQ2FsY3VsYXRvcihzbGlkZXJzLCBwcmljZXNbY291cnNlXVtsb2NhdGlvbl0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBjb3Vyc2UgcHJpY2VzXCIpO1xuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9LFxuICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgYWNhZGVteSBwcmljZXMgXCIrcDMpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2F0aW9uUHJpY2VzKHNsaWRlciwgcHJpY2VzKXtcbiAgIGNvbnN0IHByaWNpbmdDb21wb25lbnQgPSBzbGlkZXIuY2xvc2VzdCgnLnByaWNpbmctY29tcG9uZW50Jyk7XG4gICBpZih0eXBlb2YgcHJpY2VzID09PSAndW5kZWZpbmVkJyl7XG4gICAgICBsZXQgY29udGVudCA9ICc8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+JztcbiAgICAgICAgIGNvbnRlbnQgKz0gJzxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYmxvY2sgY2FyZC1wcmltYXJ5IGNhcmQtaW52ZXJzZSBiZy15ZWxsb3cgbWItMyBwLTQgdGV4dC1jZW50ZXJcIj4nO1xuICAgICAgICAgICAgY29udGVudCArPSAnUHJpY2VzIGhhdmUgbm90IGJlZW4gZGVmaW5lZCB5ZXQnO1xuICAgICAgICAgY29udGVudCArPSAnPC9kaXY+JztcbiAgICAgIGNvbnRlbnQgKz0gJzwvZGl2Pic7XG4gICAgICBwcmljaW5nQ29tcG9uZW50Lmh0bWwoY29udGVudCk7XG4gICB9XG4gICBlbHNle1xuICAgICAgcHJpY2luZ0NvbXBvbmVudC5maW5kKCdbZGF0YS1jb25jZXB0PVwidXBmcm9udFwiXScpLmh0bWwocHJpY2VzWyd1cGZyb250J10pO1xuICAgICAgcHJpY2luZ0NvbXBvbmVudC5maW5kKCdbZGF0YS1jb25jZXB0PVwibW9udGhseVwiXScpLmh0bWwocHJpY2VzWydmaW5hbmNlZCddWzBdKTtcbiAgICAgIFxuICAgfVxufVxuXG5mdW5jdGlvbiBwcm9tcHRVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIFxuICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BvcFN0YXRlJykgIT0gJ3Nob3duJyl7XG4gICAgICBmaWxsVXBjb21pbmdFdmVudChldmVudCk7XG4gICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikuZGVsYXkoMjAwMCkuZmFkZUluKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9wU3RhdGUnLCdzaG93bicpO1xuICAgICAgJCgnI3VwY29taW5nRXZlbnQnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBwdXQgeW91ciBkZWZhdWx0IGV2ZW50IGhlcmVcbiAgICAgICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgfVxufVxuXG5mdW5jdGlvbiBmaWxsVXBjb21pbmdJbnRyb1RvQ29kaW5nKGV2ZW50KXtcbiAgIHZhciBtb2RhbCA9ICQoJyNmcmVlQ29kaW5nSW50cm9Nb2RhbCcpO1xuICAgbW9kYWwuZmluZCgnLmRhdGUnKS5odG1sKGV2ZW50LmRheSsnICcrZXZlbnQubW9udGgrJyAnK2V2ZW50LnllYXIpO1xuICAgbW9kYWwuZmluZCgnLmxvY2F0aW9uJykuaHRtbChldmVudC5hZGRyZXNzKTtcbiAgIG1vZGFsLmZpbmQoJy5idG4tZGFuZ2VyJykuYXR0cignaHJlZicsZXZlbnQudXJsKTtcbiAgIFxufVxuZnVuY3Rpb24gZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI3VwY29taW5nRXZlbnQnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXknKS5odG1sKGV2ZW50LmRheSk7XG4gICBtb2RhbC5maW5kKCcubW9udGgnKS5odG1sKGV2ZW50Lm1vbnRoKTtcbiAgIG1vZGFsLmZpbmQoJy55ZWFyJykuaHRtbChldmVudC55ZWFyKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LXRpdGxlJykuaHRtbChldmVudC5uYW1lKTtcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXRhaWxzJykuaHRtbCgnPHNwYW4gY2xhc3M9XCJpbW9vbiBpY29uLWxvY2F0aW9uXCI+PC9zcGFuPicgKyBldmVudC5hZGRyZXNzKTsvLzM6MzBwbSAtIGF0IFN0YXJ0aHViLCBEb3dudG93biBNaWFtaVxuICAgXG4gICBcbiAgIHZhciBtYXhMZW5ndGggPSAzNTA7IC8vIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gZXh0cmFjdFxuICAgdmFyIHRyaW1tZWRTdHJpbmcgPSBldmVudC5kZXNjcmlwdGlvbi5zdWJzdHIoMCwgbWF4TGVuZ3RoKTsvL3RyaW0gdGhlIHN0cmluZyB0byB0aGUgbWF4aW11bSBsZW5ndGhcbiAgIHRyaW1tZWRTdHJpbmcgPSB0cmltbWVkU3RyaW5nLnN1YnN0cigwLCBNYXRoLm1pbih0cmltbWVkU3RyaW5nLmxlbmd0aCwgdHJpbW1lZFN0cmluZy5sYXN0SW5kZXhPZihcIi5cIikpKTsvL3JlLXRyaW0gaWYgd2UgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSB3b3JkXG4gICBtb2RhbC5maW5kKCcuZXZlbnQtZGVzY3JpcHRpb24nKS5odG1sKHRyaW1tZWRTdHJpbmcrJy4nKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC51cmwpO1xuICAgXG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3RMb2NhdGlvbih0YXJnZXRMb2NhdGlvbiwgbG9jYXRpb25EYXRhKSB7XG4gICAgZnVuY3Rpb24gdmVjdG9yRGlzdGFuY2UoZHgsIGR5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2F0aW9uRGlzdGFuY2UobG9jYXRpb24xLCBsb2NhdGlvbjIpIHtcbiAgICAgICAgdmFyIGR4ID0gbG9jYXRpb24xLmxhdGl0dWRlIC0gbG9jYXRpb24yLmxhdGl0dWRlLFxuICAgICAgICAgICAgZHkgPSBsb2NhdGlvbjEubG9uZ2l0dWRlIC0gbG9jYXRpb24yLmxvbmdpdHVkZTtcblxuICAgICAgICByZXR1cm4gdmVjdG9yRGlzdGFuY2UoZHgsIGR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYXRpb25EYXRhLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJyKSB7XG4gICAgICAgIHZhciBwcmV2RGlzdGFuY2UgPSBsb2NhdGlvbkRpc3RhbmNlKHRhcmdldExvY2F0aW9uICwgcHJldiksXG4gICAgICAgICAgICBjdXJyRGlzdGFuY2UgPSBsb2NhdGlvbkRpc3RhbmNlKHRhcmdldExvY2F0aW9uICwgY3Vycik7XG4gICAgICAgIHJldHVybiAocHJldkRpc3RhbmNlIDwgY3VyckRpc3RhbmNlKSA/IHByZXYgOiBjdXJyO1xuICAgIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJmdW5jdGlvbiBvblBhZ2VWaWV3KHVybENvbnRhaW5zLCBjYWxsYmFjayl7XG4gICAgLy9QYWdlIHZpZXcgPSBhcHBseS10aGFuay15b3VcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZih1cmxDb250YWlucykgPiAtMSkge1xuICAgICAgICAvL0NvZGUgZ29lcyBoZXJlXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSAgXG59XG5mdW5jdGlvbiB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KGV2ZW50TmFtZSl7XG4gICAgaWYodHlwZW9mIGRhdGFMYXllciAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiBldmVudE5hbWV9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0V2ZW50IHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ6ICcrZXZlbnROYW1lKTtcbiAgICB9XG4gICAgZWxzZSBjb25zb2xlLmxvZygnRXZlbnQgbm90IGJlaW5nIHNlbnQgdG8gVGFnTWFuYWdlcjogJytldmVudE5hbWUpO1xufVxuZnVuY3Rpb24gc2F2ZURhdGFWYXJpYWJsZShpbmRleCwgdmFsdWUpe1xuICAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpIGRhdGFMYXllci5wdXNoKHtpbmRleDogdmFsdWV9KTtcbiAgICBlbHNlIGNvbnNvbGUubG9nKCdJbXBvc2libGUgdG8gd3JpdGUgJytpbmRleCsnIG9uIGRhdGFMYXllcicpO1xuICAgIFxuICAgIFxuICAgIGlmKHR5cGVvZiBXUEFTX0FQUCA9PSAndW5kZWZpbmVkJykgV1BBU19BUFAgPSB7fTtcbiAgICBpZih0eXBlb2YgV1BBU19BUFAuZGF0YUxheWVyID09ICd1bmRlZmluZWQnKSBXUEFTX0FQUC5kYXRhTGF5ZXIgPSB7fTtcbiAgICBXUEFTX0FQUC5kYXRhTGF5ZXJbaW5kZXhdID0gdmFsdWU7XG59XG5mdW5jdGlvbiBhY19ldmVudChldmVudEtleSwgZXZlbnROYW1lLCB1c2VyRW1haWwpe1xuXG4gIC8vIHdoYXQgd2UgZG8gaGVyZSwgaXMgbG9nIGEgc3VjY2Vzc2Z1bCBldmVudCB0byB0aGUgY29uc29sZVxuICAvLyBvciBjYXRjaCBhbnkgZXJyb3JzIHdlIGhhdmVcbiAgdmFyIHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICBcbiAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRlZCBoYWxmd2F5IHNjcm9sbCBldmVudFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgIH1cbiAgfTtcblxuICAvLyB5b3VyIEFjdGl2ZUNhbXBhaWduIGlkLiBZb3UgY2FuIGdldCB0aGlzIGZyb20geW91ciBBQyBzZXR0aW5ncyBcbiAgdmFyIGFjdGlkID0gXCJkYjE1YTMyNjRmYjJhYmYxOTk5NmZhNDg4NzMwMzk3NTdkNTM0NTQ0XCI7IFxuXG4gIHZhciB2aXNpdCA9IHtcbiAgICBlbWFpbDogdXNlckVtYWlsIC8vIHRoZSB1c2VyJ3MgZW1haWwgYWRkcmVzc1xuICB9O1xuXG4gIC8vIGdldCB0aGUgdXJsIG9mIHRoZSBwYWdlIGFuZCBzZW5kIGl0IGFzIGV2ZW50IGRhdGFcbiAgdmFyIGV2ZW50RGF0YSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gIC8vIGJ1aWxkIHRoZSBldmVudFN0cmluZyBiYXNlZCBvbiB0aGUgdmFyaWFibGVzIHlvdSBqdXN0IGVkaXRlZCBhYm92ZSDimJ1cbiAgdmFyIGV2ZW50U3RyaW5nID0gXCJhY3RpZD1cIiArIGFjdGlkIFxuICAgICAgICAgICAgICAgICAgICArIFwiJmtleT1cIiArIGV2ZW50S2V5IFxuICAgICAgICAgICAgICAgICAgICArIFwiJmV2ZW50PVwiICsgZXZlbnROYW1lIFxuICAgICAgICAgICAgICAgICAgICArIFwiJnZpc2l0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZpc2l0KSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZldmVudGRhdGFcIiArIGV2ZW50RGF0YTtcblxuICAvLyBzZW5kIHRoZSBldmVudCB0byB0aGUgQWN0aXZlQ2FtcGFpZ24gQVBJIHdpdGggb3VyIGV2ZW50IHZhbHVlc1xuICB4aHR0cC5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vdHJhY2tjbXAubmV0L2V2ZW50XCIsIHRydWUpO1xuICB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICBcbiAgaWYoZXZlbnRLZXkhPScnICYmIGV2ZW50TmFtZSE9JycgJiYgdXNlckVtYWlsIT0nJykgeGh0dHAuc2VuZChldmVudFN0cmluZyk7XG4gIGVsc2V7XG4gICAgICBpZihldmVudEtleT09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIGV2ZW50S2V5JyxldmVudEtleSk7XG4gICAgICBpZihldmVudE5hbWU9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCBldmVudE5hbWUnLGV2ZW50TmFtZSk7XG4gICAgICBpZih1c2VyRW1haWw9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCB1c2VyRW1haWwnLHVzZXJFbWFpbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUYWdtYW5nZXIgZXZlbnRzXG4gKiovXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBcbiAgICB2YXIgZW1haWxJbnB1dCA9ICQoZXZlbnQudGFyZ2V0KS5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgIGlmKGVtYWlsSW5wdXQubGVuZ3RoPjApIHNhdmVEYXRhVmFyaWFibGUoJ3VzZXJFbWFpbCcsZW1haWxJbnB1dFswXS52YWx1ZSk7XG4gICAgXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnc3lsbGFidXNfZG93bmxvYWQnKTsgXG59KTtcbiQoJy5uZXdzbGV0dGVyLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7IFxuICAgIFxuICAgIHZhciBlbWFpbElucHV0ID0gJChldmVudC50YXJnZXQpLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICAgaWYoZW1haWxJbnB1dC5sZW5ndGg+MCkgc2F2ZURhdGFWYXJpYWJsZSgndXNlckVtYWlsJyxlbWFpbElucHV0WzBdLnZhbHVlKTtcbiAgICBcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCduZXdzbGV0dGVyX3NpZ251cCcpOyBcbn0pO1xuJCgnLmFwcGx5LWJ0bicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXsgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnYXBwbGljYXRpb25fcmVuZGVyZWQnKTsgfSk7XG5vblBhZ2VWaWV3KFwiL2FwcGx5LXRoYW5rLXlvdVwiLGZ1bmN0aW9uKCl7XG4gICAgLy9Db2RlIGdvZXMgaGVyZVxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ3N0dWRlbnRfYXBwbGljYXRpb24nKTsgXG59KTtcbiQoJyNmaW5hbmNpbmdfZ3VpZGVfZG93bmxvYWQnKS5jbGljayhmdW5jdGlvbihldmVudCl7IFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnZmluYW5jaW5nX2d1aWRlX2Rvd25sb2FkJyk7IFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZXZlbnQudGFyZ2V0LmhyZWY7XG4gICAgcmV0dXJuIGZhbHNlO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL21hcmtldGluZy1ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG4vKiBDb3B5cmlnaHQgKEMpIDIwMTMgSnVzdGluIFdpbmRsZSwgaHR0cDovL3NvdWx3aXJlLmNvLnVrICovXG5cbihmdW5jdGlvbiAoIHJvb3QsIGZhY3RvcnkgKSB7XG5cbiAgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAvLyBDb21tb25KUyBsaWtlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QsIHJvb3QuZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcblxuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZnVuY3Rpb24oKSB7IHJldHVybiBmYWN0b3J5KCByb290LCByb290LmRvY3VtZW50ICk7IH0pO1xuXG4gIH0gZWxzZSB7XG5cbiAgICAvLyBCcm93c2VyIGdsb2JhbFxuICAgIHJvb3QuU2tldGNoID0gZmFjdG9yeSggcm9vdCwgcm9vdC5kb2N1bWVudCApO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiAoIHdpbmRvdywgZG9jdW1lbnQgKSB7XG5cblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBDb25maWdcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIE1BVEhfUFJPUFMgPSAnRSBMTjEwIExOMiBMT0cyRSBMT0cxMEUgUEkgU1FSVDFfMiBTUVJUMiBhYnMgYWNvcyBhc2luIGF0YW4gY2VpbCBjb3MgZXhwIGZsb29yIGxvZyByb3VuZCBzaW4gc3FydCB0YW4gYXRhbjIgcG93IG1heCBtaW4nLnNwbGl0KCAnICcgKTtcbiAgdmFyIEhBU19TS0VUQ0ggPSAnX19oYXNTa2V0Y2gnO1xuICB2YXIgTSA9IE1hdGg7XG5cbiAgdmFyIENBTlZBUyA9ICdjYW52YXMnO1xuICB2YXIgV0VCR0wgPSAnd2ViZ2wnO1xuICB2YXIgRE9NID0gJ2RvbSc7XG5cbiAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIHZhciBpbnN0YW5jZXMgPSBbXTtcblxuICB2YXIgZGVmYXVsdHMgPSB7XG5cbiAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgIGF1dG9zdGFydDogdHJ1ZSxcbiAgICBhdXRvY2xlYXI6IHRydWUsXG4gICAgYXV0b3BhdXNlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogZG9jLmJvZHksXG4gICAgaW50ZXJ2YWw6IDEsXG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICByZXRpbmE6IGZhbHNlLFxuICAgIHR5cGU6IENBTlZBU1xuICB9O1xuXG4gIHZhciBrZXlNYXAgPSB7XG5cbiAgICAgODogJ0JBQ0tTUEFDRScsXG4gICAgIDk6ICdUQUInLFxuICAgIDEzOiAnRU5URVInLFxuICAgIDE2OiAnU0hJRlQnLFxuICAgIDI3OiAnRVNDQVBFJyxcbiAgICAzMjogJ1NQQUNFJyxcbiAgICAzNzogJ0xFRlQnLFxuICAgIDM4OiAnVVAnLFxuICAgIDM5OiAnUklHSFQnLFxuICAgIDQwOiAnRE9XTidcbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBVdGlsaXRpZXNcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgZnVuY3Rpb24gaXNBcnJheSggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggb2JqZWN0ICkgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdmdW5jdGlvbic7XG4gIH1cblxuICBmdW5jdGlvbiBpc051bWJlciggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ251bWJlcic7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cmluZyggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ3N0cmluZyc7XG4gIH1cblxuICBmdW5jdGlvbiBrZXlOYW1lKCBjb2RlICkge1xuXG4gICAgcmV0dXJuIGtleU1hcFsgY29kZSBdIHx8IFN0cmluZy5mcm9tQ2hhckNvZGUoIGNvZGUgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dGVuZCggdGFyZ2V0LCBzb3VyY2UsIG92ZXJ3cml0ZSApIHtcblxuICAgIGZvciAoIHZhciBrZXkgaW4gc291cmNlIClcblxuICAgICAgaWYgKCBvdmVyd3JpdGUgfHwgISgga2V5IGluIHRhcmdldCApIClcblxuICAgICAgICB0YXJnZXRbIGtleSBdID0gc291cmNlWyBrZXkgXTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eSggbWV0aG9kLCBjb250ZXh0ICkge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXG4gICAgICBtZXRob2QuYXBwbHkoIGNvbnRleHQsIGFyZ3VtZW50cyApO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZSggdGFyZ2V0ICkge1xuXG4gICAgdmFyIG9iamVjdCA9IHt9O1xuXG4gICAgZm9yICggdmFyIGtleSBpbiB0YXJnZXQgKSB7XG4gICAgICBcbiAgICAgIGlmICgga2V5ID09PSAnd2Via2l0TW92ZW1lbnRYJyB8fCBrZXkgPT09ICd3ZWJraXRNb3ZlbWVudFknIClcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmICggaXNGdW5jdGlvbiggdGFyZ2V0WyBrZXkgXSApIClcblxuICAgICAgICBvYmplY3RbIGtleSBdID0gcHJveHkoIHRhcmdldFsga2V5IF0sIHRhcmdldCApO1xuXG4gICAgICBlbHNlXG5cbiAgICAgICAgb2JqZWN0WyBrZXkgXSA9IHRhcmdldFsga2V5IF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIENvbnN0cnVjdG9yXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCBjb250ZXh0ICkge1xuXG4gICAgdmFyIHJlcXVlc3QsIGhhbmRsZXIsIHRhcmdldCwgcGFyZW50LCBib3VuZHMsIGluZGV4LCBzdWZmaXgsIGNsb2NrLCBub2RlLCBjb3B5LCB0eXBlLCBrZXksIHZhbCwgbWluLCBtYXgsIHcsIGg7XG5cbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIHRvdWNoZXMgPSBbXTtcbiAgICB2YXIgcmVzaXplZCA9IGZhbHNlO1xuICAgIHZhciBzZXR1cCA9IGZhbHNlO1xuICAgIHZhciByYXRpbyA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgdmFyIGlzRGl2ID0gY29udGV4dC50eXBlID09IERPTTtcbiAgICB2YXIgaXMyRCA9IGNvbnRleHQudHlwZSA9PSBDQU5WQVM7XG5cbiAgICB2YXIgbW91c2UgPSB7XG4gICAgICB4OiAgMC4wLCB5OiAgMC4wLFxuICAgICAgb3g6IDAuMCwgb3k6IDAuMCxcbiAgICAgIGR4OiAwLjAsIGR5OiAwLjBcbiAgICB9O1xuXG4gICAgdmFyIGV2ZW50TWFwID0gW1xuXG4gICAgICBjb250ZXh0LmV2ZW50VGFyZ2V0IHx8IGNvbnRleHQuZWxlbWVudCxcblxuICAgICAgICBwb2ludGVyLCAnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2Vtb3ZlJywgJ3RvdWNobW92ZScsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZXVwJywgJ3RvdWNoZW5kJyxcbiAgICAgICAgcG9pbnRlciwgJ2NsaWNrJyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlb3V0JyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlb3ZlcicsXG5cbiAgICAgIGRvYyxcblxuICAgICAgICBrZXlwcmVzcywgJ2tleWRvd24nLCAna2V5dXAnLFxuXG4gICAgICB3aW4sXG5cbiAgICAgICAgYWN0aXZlLCAnZm9jdXMnLCAnYmx1cicsXG4gICAgICAgIHJlc2l6ZSwgJ3Jlc2l6ZSdcbiAgICBdO1xuXG4gICAgdmFyIGtleXMgPSB7fTsgZm9yICgga2V5IGluIGtleU1hcCApIGtleXNbIGtleU1hcFsga2V5IF0gXSA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciggbWV0aG9kICkge1xuXG4gICAgICBpZiAoIGlzRnVuY3Rpb24oIG1ldGhvZCApIClcblxuICAgICAgICBtZXRob2QuYXBwbHkoIGNvbnRleHQsIFtdLnNwbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmQoIG9uICkge1xuXG4gICAgICBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRNYXAubGVuZ3RoOyBpbmRleCsrICkge1xuXG4gICAgICAgIG5vZGUgPSBldmVudE1hcFsgaW5kZXggXTtcblxuICAgICAgICBpZiAoIGlzU3RyaW5nKCBub2RlICkgKVxuXG4gICAgICAgICAgdGFyZ2V0WyAoIG9uID8gJ2FkZCcgOiAncmVtb3ZlJyApICsgJ0V2ZW50TGlzdGVuZXInIF0uY2FsbCggdGFyZ2V0LCBub2RlLCBoYW5kbGVyLCBmYWxzZSApO1xuXG4gICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKCBub2RlICkgKVxuXG4gICAgICAgICAgaGFuZGxlciA9IG5vZGU7XG5cbiAgICAgICAgZWxzZSB0YXJnZXQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuICAgICAgY0FGKCByZXF1ZXN0ICk7XG4gICAgICByZXF1ZXN0ID0gckFGKCB1cGRhdGUgKTtcblxuICAgICAgaWYgKCAhc2V0dXAgKSB7XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5zZXR1cCApO1xuICAgICAgICBzZXR1cCA9IGlzRnVuY3Rpb24oIGNvbnRleHQuc2V0dXAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCAhcmVzaXplZCApIHtcbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5yZXNpemUgKTtcbiAgICAgICAgcmVzaXplZCA9IGlzRnVuY3Rpb24oIGNvbnRleHQucmVzaXplICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggY29udGV4dC5ydW5uaW5nICYmICFjb3VudGVyICkge1xuXG4gICAgICAgIGNvbnRleHQuZHQgPSAoIGNsb2NrID0gK25ldyBEYXRlKCkgKSAtIGNvbnRleHQubm93O1xuICAgICAgICBjb250ZXh0Lm1pbGxpcyArPSBjb250ZXh0LmR0O1xuICAgICAgICBjb250ZXh0Lm5vdyA9IGNsb2NrO1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQudXBkYXRlICk7XG5cbiAgICAgICAgLy8gUHJlIGRyYXdcblxuICAgICAgICBpZiAoIGlzMkQgKSB7XG5cbiAgICAgICAgICBpZiAoIGNvbnRleHQucmV0aW5hICkge1xuXG4gICAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvbnRleHQuYXV0b2NsZWFyKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoIHJhdGlvLCByYXRpbyApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICggY29udGV4dC5hdXRvY2xlYXIgKVxuXG4gICAgICAgICAgICBjb250ZXh0LmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEcmF3XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5kcmF3ICk7XG5cbiAgICAgICAgLy8gUG9zdCBkcmF3XG5cbiAgICAgICAgaWYgKCBpczJEICYmIGNvbnRleHQucmV0aW5hIClcblxuICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuXG4gICAgICBjb3VudGVyID0gKytjb3VudGVyICUgY29udGV4dC5pbnRlcnZhbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemUoKSB7XG5cbiAgICAgIHRhcmdldCA9IGlzRGl2ID8gY29udGV4dC5zdHlsZSA6IGNvbnRleHQuY2FudmFzO1xuICAgICAgc3VmZml4ID0gaXNEaXYgPyAncHgnIDogJyc7XG5cbiAgICAgIHcgPSBjb250ZXh0LndpZHRoO1xuICAgICAgaCA9IGNvbnRleHQuaGVpZ2h0O1xuXG4gICAgICBpZiAoIGNvbnRleHQuZnVsbHNjcmVlbiApIHtcblxuICAgICAgICBoID0gY29udGV4dC5oZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gICAgICAgIHcgPSBjb250ZXh0LndpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICggY29udGV4dC5yZXRpbmEgJiYgaXMyRCAmJiByYXRpbyApIHtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG4gICAgICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuXG4gICAgICAgIHcgKj0gcmF0aW87XG4gICAgICAgIGggKj0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIGlmICggdGFyZ2V0LmhlaWdodCAhPT0gaCApXG5cbiAgICAgICAgdGFyZ2V0LmhlaWdodCA9IGggKyBzdWZmaXg7XG5cbiAgICAgIGlmICggdGFyZ2V0LndpZHRoICE9PSB3IClcblxuICAgICAgICB0YXJnZXQud2lkdGggPSB3ICsgc3VmZml4O1xuXG4gICAgICBpZiAoIGlzMkQgJiYgIWNvbnRleHQuYXV0b2NsZWFyICYmIGNvbnRleHQucmV0aW5hIClcblxuICAgICAgICBjb250ZXh0LnNjYWxlKCByYXRpbywgcmF0aW8gKTtcblxuICAgICAgaWYgKCBzZXR1cCApIHRyaWdnZXIoIGNvbnRleHQucmVzaXplICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxpZ24oIHRvdWNoLCB0YXJnZXQgKSB7XG5cbiAgICAgIGJvdW5kcyA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgdG91Y2gueCA9IHRvdWNoLnBhZ2VYIC0gYm91bmRzLmxlZnQgLSAod2luLnNjcm9sbFggfHwgd2luLnBhZ2VYT2Zmc2V0KTtcbiAgICAgIHRvdWNoLnkgPSB0b3VjaC5wYWdlWSAtIGJvdW5kcy50b3AgLSAod2luLnNjcm9sbFkgfHwgd2luLnBhZ2VZT2Zmc2V0KTtcblxuICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF1Z21lbnQoIHRvdWNoLCB0YXJnZXQgKSB7XG5cbiAgICAgIGFsaWduKCB0b3VjaCwgY29udGV4dC5lbGVtZW50ICk7XG5cbiAgICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcblxuICAgICAgdGFyZ2V0Lm94ID0gdGFyZ2V0LnggfHwgdG91Y2gueDtcbiAgICAgIHRhcmdldC5veSA9IHRhcmdldC55IHx8IHRvdWNoLnk7XG5cbiAgICAgIHRhcmdldC54ID0gdG91Y2gueDtcbiAgICAgIHRhcmdldC55ID0gdG91Y2gueTtcblxuICAgICAgdGFyZ2V0LmR4ID0gdGFyZ2V0LnggLSB0YXJnZXQub3g7XG4gICAgICB0YXJnZXQuZHkgPSB0YXJnZXQueSAtIHRhcmdldC5veTtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzKCBldmVudCApIHtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29weSA9IGNsb25lKCBldmVudCApO1xuICAgICAgY29weS5vcmlnaW5hbEV2ZW50ID0gZXZlbnQ7XG5cbiAgICAgIGlmICggY29weS50b3VjaGVzICkge1xuXG4gICAgICAgIHRvdWNoZXMubGVuZ3RoID0gY29weS50b3VjaGVzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgY29weS50b3VjaGVzLmxlbmd0aDsgaW5kZXgrKyApXG5cbiAgICAgICAgICB0b3VjaGVzWyBpbmRleCBdID0gYXVnbWVudCggY29weS50b3VjaGVzWyBpbmRleCBdLCB0b3VjaGVzWyBpbmRleCBdICk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdG91Y2hlcy5sZW5ndGggPSAwO1xuICAgICAgICB0b3VjaGVzWzBdID0gYXVnbWVudCggY29weSwgbW91c2UgKTtcbiAgICAgIH1cblxuICAgICAgZXh0ZW5kKCBtb3VzZSwgdG91Y2hlc1swXSwgdHJ1ZSApO1xuXG4gICAgICByZXR1cm4gY29weTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb2ludGVyKCBldmVudCApIHtcblxuICAgICAgZXZlbnQgPSBwcm9jZXNzKCBldmVudCApO1xuXG4gICAgICBtaW4gPSAoIG1heCA9IGV2ZW50TWFwLmluZGV4T2YoIHR5cGUgPSBldmVudC50eXBlICkgKSAtIDE7XG5cbiAgICAgIGNvbnRleHQuZHJhZ2dpbmcgPVxuXG4gICAgICAgIC9kb3dufHN0YXJ0Ly50ZXN0KCB0eXBlICkgPyB0cnVlIDpcblxuICAgICAgICAvdXB8ZW5kLy50ZXN0KCB0eXBlICkgPyBmYWxzZSA6XG5cbiAgICAgICAgY29udGV4dC5kcmFnZ2luZztcblxuICAgICAgd2hpbGUoIG1pbiApXG5cbiAgICAgICAgaXNTdHJpbmcoIGV2ZW50TWFwWyBtaW4gXSApID9cblxuICAgICAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50TWFwWyBtaW4tLSBdIF0sIGV2ZW50ICkgOlxuXG4gICAgICAgIGlzU3RyaW5nKCBldmVudE1hcFsgbWF4IF0gKSA/XG5cbiAgICAgICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudE1hcFsgbWF4KysgXSBdLCBldmVudCApIDpcblxuICAgICAgICBtaW4gPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleXByZXNzKCBldmVudCApIHtcblxuICAgICAga2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICAgIHZhbCA9IGV2ZW50LnR5cGUgPT0gJ2tleXVwJztcbiAgICAgIGtleXNbIGtleSBdID0ga2V5c1sga2V5TmFtZSgga2V5ICkgXSA9ICF2YWw7XG5cbiAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50LnR5cGUgXSwgZXZlbnQgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmUoIGV2ZW50ICkge1xuXG4gICAgICBpZiAoIGNvbnRleHQuYXV0b3BhdXNlIClcblxuICAgICAgICAoIGV2ZW50LnR5cGUgPT0gJ2JsdXInID8gc3RvcCA6IHN0YXJ0ICkoKTtcblxuICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnQudHlwZSBdLCBldmVudCApO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBBUElcblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gICAgICBjb250ZXh0Lm5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgICAgY29udGV4dC5ydW5uaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuXG4gICAgICBjb250ZXh0LnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cbiAgICAgICggY29udGV4dC5ydW5uaW5nID8gc3RvcCA6IHN0YXJ0ICkoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcblxuICAgICAgaWYgKCBpczJEIClcblxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCggMCwgMCwgY29udGV4dC53aWR0aCAqIHJhdGlvLCBjb250ZXh0LmhlaWdodCAqIHJhdGlvICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcblxuICAgICAgcGFyZW50ID0gY29udGV4dC5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBpbmRleCA9IGluc3RhbmNlcy5pbmRleE9mKCBjb250ZXh0ICk7XG5cbiAgICAgIGlmICggcGFyZW50ICkgcGFyZW50LnJlbW92ZUNoaWxkKCBjb250ZXh0LmVsZW1lbnQgKTtcbiAgICAgIGlmICggfmluZGV4ICkgaW5zdGFuY2VzLnNwbGljZSggaW5kZXgsIDEgKTtcblxuICAgICAgYmluZCggZmFsc2UgKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG5cbiAgICBleHRlbmQoIGNvbnRleHQsIHtcblxuICAgICAgdG91Y2hlczogdG91Y2hlcyxcbiAgICAgIG1vdXNlOiBtb3VzZSxcbiAgICAgIGtleXM6IGtleXMsXG5cbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgbWlsbGlzOiAwLFxuICAgICAgbm93OiBOYU4sXG4gICAgICBkdDogTmFOLFxuXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgICBjbGVhcjogY2xlYXIsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBzdG9wOiBzdG9wXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZXMucHVzaCggY29udGV4dCApO1xuXG4gICAgcmV0dXJuICggY29udGV4dC5hdXRvc3RhcnQgJiYgc3RhcnQoKSwgYmluZCggdHJ1ZSApLCByZXNpemUoKSwgdXBkYXRlKCksIGNvbnRleHQgKTtcbiAgfVxuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIEdsb2JhbCBBUElcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIGVsZW1lbnQsIGNvbnRleHQsIFNrZXRjaCA9IHtcblxuICAgIENBTlZBUzogQ0FOVkFTLFxuICAgIFdFQl9HTDogV0VCR0wsXG4gICAgV0VCR0w6IFdFQkdMLFxuICAgIERPTTogRE9NLFxuXG4gICAgaW5zdGFuY2VzOiBpbnN0YW5jZXMsXG5cbiAgICBpbnN0YWxsOiBmdW5jdGlvbiggY29udGV4dCApIHtcblxuICAgICAgaWYgKCAhY29udGV4dFsgSEFTX1NLRVRDSCBdICkge1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IE1BVEhfUFJPUFMubGVuZ3RoOyBpKysgKVxuXG4gICAgICAgICAgY29udGV4dFsgTUFUSF9QUk9QU1tpXSBdID0gTVsgTUFUSF9QUk9QU1tpXSBdO1xuXG4gICAgICAgIGV4dGVuZCggY29udGV4dCwge1xuXG4gICAgICAgICAgVFdPX1BJOiBNLlBJICogMixcbiAgICAgICAgICBIQUxGX1BJOiBNLlBJIC8gMixcbiAgICAgICAgICBRVUFSVEVSX1BJOiBNLlBJIC8gNCxcblxuICAgICAgICAgIHJhbmRvbTogZnVuY3Rpb24oIG1pbiwgbWF4ICkge1xuXG4gICAgICAgICAgICBpZiAoIGlzQXJyYXkoIG1pbiApIClcblxuICAgICAgICAgICAgICByZXR1cm4gbWluWyB+figgTS5yYW5kb20oKSAqIG1pbi5sZW5ndGggKSBdO1xuXG4gICAgICAgICAgICBpZiAoICFpc051bWJlciggbWF4ICkgKVxuXG4gICAgICAgICAgICAgIG1heCA9IG1pbiB8fCAxLCBtaW4gPSAwO1xuXG4gICAgICAgICAgICByZXR1cm4gbWluICsgTS5yYW5kb20oKSAqICggbWF4IC0gbWluICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGxlcnA6IGZ1bmN0aW9uKCBtaW4sIG1heCwgYW1vdW50ICkge1xuXG4gICAgICAgICAgICByZXR1cm4gbWluICsgYW1vdW50ICogKCBtYXggLSBtaW4gKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbWFwOiBmdW5jdGlvbiggbnVtLCBtaW5BLCBtYXhBLCBtaW5CLCBtYXhCICkge1xuXG4gICAgICAgICAgICByZXR1cm4gKCBudW0gLSBtaW5BICkgLyAoIG1heEEgLSBtaW5BICkgKiAoIG1heEIgLSBtaW5CICkgKyBtaW5CO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGV4dFsgSEFTX1NLRVRDSCBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuICAgICAgb3B0aW9ucyA9IGV4dGVuZCggb3B0aW9ucyB8fCB7fSwgZGVmYXVsdHMgKTtcblxuICAgICAgaWYgKCBvcHRpb25zLmdsb2JhbHMgKSBTa2V0Y2guaW5zdGFsbCggc2VsZiApO1xuXG4gICAgICBlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50IHx8IGRvYy5jcmVhdGVFbGVtZW50KCBvcHRpb25zLnR5cGUgPT09IERPTSA/ICdkaXYnIDogJ2NhbnZhcycgKTtcblxuICAgICAgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgc3dpdGNoKCBvcHRpb25zLnR5cGUgKSB7XG5cbiAgICAgICAgICBjYXNlIENBTlZBUzpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29udGV4dCggJzJkJywgb3B0aW9ucyApO1xuXG4gICAgICAgICAgY2FzZSBXRUJHTDpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29udGV4dCggJ3dlYmdsJywgb3B0aW9ucyApIHx8IGVsZW1lbnQuZ2V0Q29udGV4dCggJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIG9wdGlvbnMgKTtcblxuICAgICAgICAgIGNhc2UgRE9NOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jYW52YXMgPSBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgIH0pKCk7XG5cbiAgICAgICggb3B0aW9ucy5jb250YWluZXIgfHwgZG9jLmJvZHkgKS5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG4gICAgICByZXR1cm4gU2tldGNoLmF1Z21lbnQoIGNvbnRleHQsIG9wdGlvbnMgKTtcbiAgICB9LFxuXG4gICAgYXVnbWVudDogZnVuY3Rpb24oIGNvbnRleHQsIG9wdGlvbnMgKSB7XG5cbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoIG9wdGlvbnMgfHwge30sIGRlZmF1bHRzICk7XG5cbiAgICAgIG9wdGlvbnMuZWxlbWVudCA9IGNvbnRleHQuY2FudmFzIHx8IGNvbnRleHQ7XG4gICAgICBvcHRpb25zLmVsZW1lbnQuY2xhc3NOYW1lICs9ICcgc2tldGNoJztcblxuICAgICAgZXh0ZW5kKCBjb250ZXh0LCBvcHRpb25zLCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RvciggY29udGV4dCApO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBTaGltc1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgdmVuZG9ycyA9IFsgJ21zJywgJ21veicsICd3ZWJraXQnLCAnbycgXTtcbiAgdmFyIHNjb3BlID0gc2VsZjtcbiAgdmFyIHRoZW4gPSAwO1xuXG4gIHZhciBhID0gJ0FuaW1hdGlvbkZyYW1lJztcbiAgdmFyIGIgPSAncmVxdWVzdCcgKyBhO1xuICB2YXIgYyA9ICdjYW5jZWwnICsgYTtcblxuICB2YXIgckFGID0gc2NvcGVbIGIgXTtcbiAgdmFyIGNBRiA9IHNjb3BlWyBjIF07XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXJBRjsgaSsrICkge1xuXG4gICAgckFGID0gc2NvcGVbIHZlbmRvcnNbIGkgXSArICdSZXF1ZXN0JyArIGEgXTtcbiAgICBjQUYgPSBzY29wZVsgdmVuZG9yc1sgaSBdICsgJ0NhbmNlbCcgKyBhIF07XG4gIH1cblxuICBzY29wZVsgYiBdID0gckFGID0gckFGIHx8IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcblxuICAgIHZhciBub3cgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgZHQgPSBNLm1heCggMCwgMTYgLSAoIG5vdyAtIHRoZW4gKSApO1xuICAgIHZhciBpZCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgY2FsbGJhY2soIG5vdyArIGR0ICk7XG4gICAgfSwgZHQgKTtcblxuICAgIHRoZW4gPSBub3cgKyBkdDtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgc2NvcGVbIGMgXSA9IGNBRiA9IGNBRiB8fCBmdW5jdGlvbiggaWQgKSB7XG4gICAgY2xlYXJUaW1lb3V0KCBpZCApO1xuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIE91dHB1dFxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICByZXR1cm4gU2tldGNoO1xuXG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL3NrZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljaW5nQ2FsY3VsYXRvcihzbGlkZXJzLCBtZXNzYWdlcyl7XG4gIHZhciBTbGlkZXIgPSByZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKTtcbiAgbWVzc2FnZXMgPSBtZXNzYWdlc1snZmluYW5jZWQnXTtcbiAgc2xpZGVycy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICBjb25zdCBodG1sU2xpZGVyID0gdGhpcztcbiAgICBjb25zdCBwcmljaW5nQ29tcG9uZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcucHJpY2luZy1jb21wb25lbnQnKTtcbiAgICB2YXIgbXlTbGlkZXIgPSBuZXcgU2xpZGVyKGh0bWxTbGlkZXIpO1xuICAgIG15U2xpZGVyLm9uKCdzbGlkZVN0b3AnLCBmdW5jdGlvbihjbGlja2VkSW5kZXgpe1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMobWVzc2FnZXMpW2NsaWNrZWRJbmRleF07XG4gICAgICBpZih0eXBlb2YgbWVzc2FnZXNba2V5XSAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLm1vbnRobHkpID09ICdzdHJpbmcnKSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5wcmljZS1sYWJlbCcpLmh0bWwobWVzc2FnZXNba2V5XS5tb250aGx5KTtcbiAgICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW2tleV0ubWVzc2FnZSkgIT09ICd1bmRlZmluZWQnKSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5maW5hbmNpbmctZGV0YWlscycpLmh0bWwobWVzc2FnZXNba2V5XS5tZXNzYWdlW1dQQVNfQVBQLmxhbmddKTtcbiAgICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW2tleV0ubG9nbykgPT0gJ3N0cmluZycpe1xuICAgICAgICAgIHZhciBsb2dvRWxtID0gcHJpY2luZ0NvbXBvbmVudC5maW5kKCcuZmluYW5jaW5nLWxvZ28nKTtcbiAgICAgICAgICBsb2dvRWxtLmF0dHIoJ3NyYycsbWVzc2FnZXNba2V5XS5sb2dvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcdFx0XG4gIFx0XHR2YXIgcGF5bWVudFBsYW5DYXJkID0gcHJpY2luZ0NvbXBvbmVudC5maW5kKCcucGF5bWVudC1wbGFuJyk7XG4gIFx0XHRwYXltZW50UGxhbkNhcmQuYWRkQ2xhc3MoXCJnbG93XCIpO1xuICBcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgXHRcdFx0cGF5bWVudFBsYW5DYXJkLnJlbW92ZUNsYXNzKFwiZ2xvd1wiKTtcbiAgXHRcdH0sIDIwMCk7XG4gICAgICBcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL3ByaWNlQ2FsY3VsYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIl0sInNvdXJjZVJvb3QiOiIifQ==