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
    var form = document.querySelector('.apply-to-4geeks-form');
    if(typeof form !== 'undefined') form.scrollIntoView();
    else alert('The form to apply seems to be missing');
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
   
   syncDataLayer();
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

function syncDataLayer(){
   
   if(typeof dataLayer != 'undefined'){
      if(typeof WPAS_APP !== 'undefined'){
         dataLayer.push({ city: WPAS_APP.city });
         dataLayer.push({ city_slug: WPAS_APP.city_slug });
         dataLayer.push({ country_name: WPAS_APP.country_name });
         dataLayer.push({ lang: WPAS_APP.lang });
         dataLayer.push({ city: WPAS_APP.city });
      }
      
   } 
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
onPageView("/thank-you/apply",function(){ triggerTagManagerEvent('student_application'); }); 
onPageView("/thank-you/more-info",function(){ triggerTagManagerEvent('more_info_requested'); }); 
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