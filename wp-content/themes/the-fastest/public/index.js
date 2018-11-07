webpackJsonp([0],{

/***/ 10:
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typography__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typography_theme_doelger__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typography_theme_doelger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_typography_theme_doelger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_collapse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_js_dist_carousel__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_js_dist_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bootstrap_js_dist_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_js_dist_tooltip__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_js_dist_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap_js_dist_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_js_dist_tab__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_js_dist_tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bootstrap_js_dist_tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_all_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__pages_all_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_marketing_events_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_marketing_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__common_marketing_events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_sticky_toggle_js__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_smart_filters_js__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_responsive_video__ = __webpack_require__(143);
/* global WPAS_APP, $ */
__webpack_require__(133);



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
  
  var fireworks = __webpack_require__(4);
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
  
  //script for the slider calculator
  var PriceCalculator = __webpack_require__(5).default;
  const PRICES = __webpack_require__(144).default;
  
  if(WPAS_APP.view.template == 'single-full-stack-part-time') 
    PriceCalculator('#pricing',PRICES['full-stack-part-time']);
    
  else if (WPAS_APP.view.template ==  'single-full-stack') 
    PriceCalculator('#pricing',PRICES['full-stack-full-time']);
  
  //animation for the program
  var TheProgram = __webpack_require__(145).default;
  TheProgram.init();
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  Object(__WEBPACK_IMPORTED_MODULE_11__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  //script for the slider calculator
  var priceCalculator = __webpack_require__(5);
  
  var fireworks = __webpack_require__(4);
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
  __webpack_require__(146);
}

/**
 * PARTNERS
**/

if(WPAS_APP.view.slug === 'partners' || WPAS_APP.view.slug === 'socios'){
  
  jQuery('[data-toggle="tooltip"]').tooltip();
  Object(__WEBPACK_IMPORTED_MODULE_11__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/office.mp4',{overlay: 'black'});
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(1)))

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var n,o,i=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(n,o){for(var i,a,u=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(n),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))e.call(i,l)&&(u[l]=i[l]);if(t){a=t(i);for(var f=0;f<a.length;f++)r.call(i,a[f])&&(u[a[f]]=i[a[f]])}}return u},a=function(t,e){e||(e=[0,""]),t=String(t);var r=parseFloat(t,10);return e[0]=r,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},u=function(t){return a(t)[0]},c=function(t){return null==t&&(t=t),function(e,r,n,o){null==n&&(n=t),null==o&&(o=n);var i=a(e)[1];if(i===r)return e;var c=u(e);if("px"!==i)if("em"===i)c=u(e)*u(n);else if("rem"===i)c=u(e)*u(t);else{if("ex"!==i)return e;c=u(e)*u(n)*2}var l=c;if("px"!==r)if("em"===r)l=c/u(o);else if("rem"===r)l=c/u(t);else{if("ex"!==r)return e;l=c/u(o)/2}return parseFloat(l.toFixed(5))+r}},l=a,f=function(t){return l(t)[1]},s=function(t){return l(t)[0]},p={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},v=function(t,e){var r,n=c(e.baseFontSize),o=s(n(t,"px")),i=s(e.baseLineHeightInPx),a=s(n(e.minLinePadding,"px"));return(r=e.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(r+=e.roundToNearestHalfLine?.5:1),r},h=function(t){var e=c(t.baseFontSize);return function(r,n,o){null==r&&(r=1),null==n&&(n=t.baseFontSize),null==o&&(o=0);var i=r*s(t.baseLineHeightInPx)-o+"px",a=e(i,t.rhythmUnit,n);return"px"===f(a)&&(a=Math.floor(s(a))+f(a)),parseFloat(s(a).toFixed(5))+f(a)}},d="[object Number]",b=Object.prototype.toString;n=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&b.call(t)==d},o={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4};function g(t){return!isNaN(parseFloat(t))&&isFinite(t)}var y=function(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!g(e))throw new Error("Hue is not a number");if(!g(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var n=0;if(0!==e){n=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var o=0;return r?(o=t/100,t="100%,"):(o=(100-t)/100,t="0%,"),"hsla("+e+","+n+"%,"+t+o+")"},m="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function j(t,e){return t(e={exports:{}},e.exports),e.exports}var _="object"==typeof m&&m&&m.Object===Object&&m,w="object"==typeof self&&self&&self.Object===Object&&self,O=_||w||Function("return this")(),S=O.Symbol,x=Object.prototype,z=x.hasOwnProperty,F=x.toString,k=S?S.toStringTag:void 0;var A=function(t){var e=z.call(t,k),r=t[k];try{t[k]=void 0;var n=!0}catch(t){}var o=F.call(t);return n&&(e?t[k]=r:delete t[k]),o},L=Object.prototype.toString;var P=function(t){return L.call(t)},B="[object Null]",T="[object Undefined]",M=S?S.toStringTag:void 0;var E=function(t){return null==t?void 0===t?T:B:M&&M in Object(t)?A(t):P(t)};var H=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},N="[object AsyncFunction]",W="[object Function]",I="[object GeneratorFunction]",C="[object Proxy]";var R,$=function(t){if(!H(t))return!1;var e=E(t);return e==W||e==I||e==N||e==C},U=O["__core-js_shared__"],D=(R=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var q=function(t){return!!D&&D in t},V=Function.prototype.toString;var J=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,G=Function.prototype,K=Object.prototype,Y=RegExp("^"+G.toString.call(K.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!H(t)||q(t))&&($(t)?Y:Z).test(J(t))};var X=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var r=X(t,e);return Q(r)?r:void 0},et=function(){try{var t=tt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var rt=function(t,e,r){"__proto__"==e&&et?et(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};var nt=function(t,e){return t===e||t!=t&&e!=e},ot=Object.prototype.hasOwnProperty;var it=function(t,e,r){var n=t[e];ot.call(t,e)&&nt(n,r)&&(void 0!==r||e in t)||rt(t,e,r)},at=Array.isArray;var ut=function(t){return null!=t&&"object"==typeof t},ct="[object Symbol]";var lt=function(t){return"symbol"==typeof t||ut(t)&&E(t)==ct},ft=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,st=/^\w*$/;var pt=function(t,e){if(at(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!lt(t))||st.test(t)||!ft.test(t)||null!=e&&t in Object(e)},vt=tt(Object,"create");var ht=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt="__lodash_hash_undefined__",bt=Object.prototype.hasOwnProperty;var gt=function(t){var e=this.__data__;if(vt){var r=e[t];return r===dt?void 0:r}return bt.call(e,t)?e[t]:void 0},yt=Object.prototype.hasOwnProperty;var mt=function(t){var e=this.__data__;return vt?void 0!==e[t]:yt.call(e,t)},jt="__lodash_hash_undefined__";var _t=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=vt&&void 0===e?jt:e,this};function wt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}wt.prototype.clear=function(){this.__data__=vt?vt(null):{},this.size=0},wt.prototype.delete=ht,wt.prototype.get=gt,wt.prototype.has=mt,wt.prototype.set=_t;var Ot=wt;var St=function(t,e){for(var r=t.length;r--;)if(nt(t[r][0],e))return r;return-1},xt=Array.prototype.splice;var zt=function(t){var e=this.__data__,r=St(e,t);return!(r<0||(r==e.length-1?e.pop():xt.call(e,r,1),--this.size,0))};var Ft=function(t){var e=this.__data__,r=St(e,t);return r<0?void 0:e[r][1]};var kt=function(t){return St(this.__data__,t)>-1};var At=function(t,e){var r=this.__data__,n=St(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Lt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Lt.prototype.clear=function(){this.__data__=[],this.size=0},Lt.prototype.delete=zt,Lt.prototype.get=Ft,Lt.prototype.has=kt,Lt.prototype.set=At;var Pt=Lt,Bt=tt(O,"Map");var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Mt=function(t,e){var r=t.__data__;return Tt(e)?r["string"==typeof e?"string":"hash"]:r.map};var Et=function(t){var e=Mt(this,t).delete(t);return this.size-=e?1:0,e};var Ht=function(t){return Mt(this,t).get(t)};var Nt=function(t){return Mt(this,t).has(t)};var Wt=function(t,e){var r=Mt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function It(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}It.prototype.clear=function(){this.size=0,this.__data__={hash:new Ot,map:new(Bt||Pt),string:new Ot}},It.prototype.delete=Et,It.prototype.get=Ht,It.prototype.has=Nt,It.prototype.set=Wt;var Ct=It,Rt="Expected a function";function $t(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(Rt);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new($t.Cache||Ct),r}$t.Cache=Ct;var Ut=$t,Dt=500;var qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vt=/\\(\\)?/g,Jt=function(t){var e=Ut(t,function(t){return r.size===Dt&&r.clear(),t}),r=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(qt,function(t,r,n,o){e.push(n?o.replace(Vt,"$1"):r||t)}),e});var Zt=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},Gt=1/0,Kt=S?S.prototype:void 0,Yt=Kt?Kt.toString:void 0;var Qt=function t(e){if("string"==typeof e)return e;if(at(e))return Zt(e,t)+"";if(lt(e))return Yt?Yt.call(e):"";var r=e+"";return"0"==r&&1/e==-Gt?"-0":r};var Xt=function(t){return null==t?"":Qt(t)};var te=function(t,e){return at(t)?t:pt(t,e)?[t]:Jt(Xt(t))},ee=9007199254740991,re=/^(?:0|[1-9]\d*)$/;var ne=function(t,e){var r=typeof t;return!!(e=null==e?ee:e)&&("number"==r||"symbol"!=r&&re.test(t))&&t>-1&&t%1==0&&t<e},oe=1/0;var ie=function(t){if("string"==typeof t||lt(t))return t;var e=t+"";return"0"==e&&1/t==-oe?"-0":e};var ae=function(t,e,r,n){if(!H(t))return t;for(var o=-1,i=(e=te(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=ie(e[o]),l=r;if(o!=a){var f=u[c];void 0===(l=n?n(f,c,u):void 0)&&(l=H(f)?f:ne(e[o+1])?[]:{})}it(u,c,l),u=u[c]}return t};var ue=function(t,e,r){return null==t?t:ae(t,e,r)};var ce=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var le=function(t){return function(e,r,n){for(var o=-1,i=Object(e),a=n(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===r(i[c],c,i))break}return e}}();var fe=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},se="[object Arguments]";var pe=function(t){return ut(t)&&E(t)==se},ve=Object.prototype,he=ve.hasOwnProperty,de=ve.propertyIsEnumerable,be=pe(function(){return arguments}())?pe:function(t){return ut(t)&&he.call(t,"callee")&&!de.call(t,"callee")};var ge=function(){return!1},ye=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?O.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||ge}),me=9007199254740991;var je=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=me},_e={};_e["[object Float32Array]"]=_e["[object Float64Array]"]=_e["[object Int8Array]"]=_e["[object Int16Array]"]=_e["[object Int32Array]"]=_e["[object Uint8Array]"]=_e["[object Uint8ClampedArray]"]=_e["[object Uint16Array]"]=_e["[object Uint32Array]"]=!0,_e["[object Arguments]"]=_e["[object Array]"]=_e["[object ArrayBuffer]"]=_e["[object Boolean]"]=_e["[object DataView]"]=_e["[object Date]"]=_e["[object Error]"]=_e["[object Function]"]=_e["[object Map]"]=_e["[object Number]"]=_e["[object Object]"]=_e["[object RegExp]"]=_e["[object Set]"]=_e["[object String]"]=_e["[object WeakMap]"]=!1;var we=function(t){return ut(t)&&je(t.length)&&!!_e[E(t)]};var Oe=function(t){return function(e){return t(e)}},Se=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&_.process,i=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),xe=Se&&Se.isTypedArray,ze=xe?Oe(xe):we,Fe=Object.prototype.hasOwnProperty;var ke=function(t,e){var r=at(t),n=!r&&be(t),o=!r&&!n&&ye(t),i=!r&&!n&&!o&&ze(t),a=r||n||o||i,u=a?fe(t.length,String):[],c=u.length;for(var l in t)!e&&!Fe.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ne(l,c))||u.push(l);return u},Ae=Object.prototype;var Le=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ae)};var Pe=function(t,e){return function(r){return t(e(r))}},Be=Pe(Object.keys,Object),Te=Object.prototype.hasOwnProperty;var Me=function(t){if(!Le(t))return Be(t);var e=[];for(var r in Object(t))Te.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Ee=function(t){return null!=t&&je(t.length)&&!$(t)};var He=function(t){return Ee(t)?ke(t):Me(t)};var Ne=function(t,e){return function(r,n){if(null==r)return r;if(!Ee(r))return t(r,n);for(var o=r.length,i=e?o:-1,a=Object(r);(e?i--:++i<o)&&!1!==n(a[i],i,a););return r}}(function(t,e){return t&&le(t,e,He)});var We=function(t){return t};var Ie=function(t){return"function"==typeof t?t:We};var Ce=function(t,e){return(at(t)?ce:Ne)(t,Ie(e))},Re="[object Number]";var $e=function(t){return"number"==typeof t||ut(t)&&E(t)==Re},Ue="[object String]";var De=function(t){return"string"==typeof t||!at(t)&&ut(t)&&E(t)==Ue};var qe=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var Ve=function(t){return this.__data__.get(t)};var Je=function(t){return this.__data__.has(t)},Ze=200;var Ge=function(t,e){var r=this.__data__;if(r instanceof Pt){var n=r.__data__;if(!Bt||n.length<Ze-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Ct(n)}return r.set(t,e),this.size=r.size,this};function Ke(t){var e=this.__data__=new Pt(t);this.size=e.size}Ke.prototype.clear=function(){this.__data__=new Pt,this.size=0},Ke.prototype.delete=qe,Ke.prototype.get=Ve,Ke.prototype.has=Je,Ke.prototype.set=Ge;var Ye=Ke;var Qe=function(t,e,r){(void 0===r||nt(t[e],r))&&(void 0!==r||e in t)||rt(t,e,r)},Xe=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?O.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}}),tr=O.Uint8Array;var er=function(t){var e=new t.constructor(t.byteLength);return new tr(e).set(new tr(t)),e};var rr=function(t,e){var r=e?er(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var nr=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e},or=Object.create,ir=function(){function t(){}return function(e){if(!H(e))return{};if(or)return or(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),ar=Pe(Object.getPrototypeOf,Object);var ur=function(t){return"function"!=typeof t.constructor||Le(t)?{}:ir(ar(t))};var cr=function(t){return ut(t)&&Ee(t)},lr="[object Object]",fr=Function.prototype,sr=Object.prototype,pr=fr.toString,vr=sr.hasOwnProperty,hr=pr.call(Object);var dr=function(t){if(!ut(t)||E(t)!=lr)return!1;var e=ar(t);if(null===e)return!0;var r=vr.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&pr.call(r)==hr};var br=function(t,e){return"__proto__"==e?void 0:t[e]};var gr=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=n?n(r[u],t[u],u,r,t):void 0;void 0===c&&(c=t[u]),o?rt(r,u,c):it(r,u,c)}return r};var yr=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},mr=Object.prototype.hasOwnProperty;var jr=function(t){if(!H(t))return yr(t);var e=Le(t),r=[];for(var n in t)("constructor"!=n||!e&&mr.call(t,n))&&r.push(n);return r};var _r=function(t){return Ee(t)?ke(t,!0):jr(t)};var wr=function(t){return gr(t,_r(t))};var Or=function(t,e,r,n,o,i,a){var u=br(t,r),c=br(e,r),l=a.get(c);if(l)Qe(t,r,l);else{var f=i?i(u,c,r+"",t,e,a):void 0,s=void 0===f;if(s){var p=at(c),v=!p&&ye(c),h=!p&&!v&&ze(c);f=c,p||v||h?at(u)?f=u:cr(u)?f=nr(u):v?(s=!1,f=Xe(c,!0)):h?(s=!1,f=rr(c,!0)):f=[]:dr(c)||be(c)?(f=u,be(u)?f=wr(u):(!H(u)||n&&$(u))&&(f=ur(c))):s=!1}s&&(a.set(c,f),o(f,c,n,i,a),a.delete(c)),Qe(t,r,f)}};var Sr=function t(e,r,n,o,i){e!==r&&le(r,function(a,u){if(H(a))i||(i=new Ye),Or(e,r,u,n,t,o,i);else{var c=o?o(br(e,u),a,u+"",e,r,i):void 0;void 0===c&&(c=a),Qe(e,u,c)}},_r)};var xr=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},zr=Math.max;var Fr=function(t,e,r){return e=zr(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=zr(n.length-e,0),a=Array(i);++o<i;)a[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=r(a),xr(t,this,u)}};var kr=function(t){return function(){return t}},Ar=800,Lr=16,Pr=Date.now;var Br=function(t){var e=0,r=0;return function(){var n=Pr(),o=Lr-(n-r);if(r=n,o>0){if(++e>=Ar)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(et?function(t,e){return et(t,"toString",{configurable:!0,enumerable:!1,value:kr(e),writable:!0})}:We);var Tr=function(t,e){return Br(Fr(t,e,We),t+"")};var Mr=function(t,e,r){if(!H(r))return!1;var n=typeof e;return!!("number"==n?Ee(r)&&ne(e,r.length):"string"==n&&e in r)&&nt(r[e],t)};var Er=function(t){return Tr(function(e,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,a=o>2?r[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&Mr(r[0],r[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var u=r[n];u&&t(e,u,n,i)}return e})}(function(t,e,r){Sr(t,e,r)});var Hr=function(t,e,r,n){var o=-1,i=null==t?0:t.length;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r},Nr="__lodash_hash_undefined__";var Wr=function(t){return this.__data__.has(t)};function Ir(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new Ct;++e<r;)this.add(t[e])}Ir.prototype.add=Ir.prototype.push=function(t){return this.__data__.set(t,Nr),this},Ir.prototype.has=Wr;var Cr=Ir;var Rr=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1};var $r=function(t,e){return t.has(e)},Ur=1,Dr=2;var qr=function(t,e,r,n,o,i){var a=r&Ur,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var f=-1,s=!0,p=r&Dr?new Cr:void 0;for(i.set(t,e),i.set(e,t);++f<u;){var v=t[f],h=e[f];if(n)var d=a?n(h,v,f,e,t,i):n(v,h,f,t,e,i);if(void 0!==d){if(d)continue;s=!1;break}if(p){if(!Rr(e,function(t,e){if(!$r(p,e)&&(v===t||o(v,t,r,n,i)))return p.push(e)})){s=!1;break}}else if(v!==h&&!o(v,h,r,n,i)){s=!1;break}}return i.delete(t),i.delete(e),s};var Vr=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r};var Jr=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r},Zr=1,Gr=2,Kr="[object Boolean]",Yr="[object Date]",Qr="[object Error]",Xr="[object Map]",tn="[object Number]",en="[object RegExp]",rn="[object Set]",nn="[object String]",on="[object Symbol]",an="[object ArrayBuffer]",un="[object DataView]",cn=S?S.prototype:void 0,ln=cn?cn.valueOf:void 0;var fn=function(t,e,r,n,o,i,a){switch(r){case un:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case an:return!(t.byteLength!=e.byteLength||!i(new tr(t),new tr(e)));case Kr:case Yr:case tn:return nt(+t,+e);case Qr:return t.name==e.name&&t.message==e.message;case en:case nn:return t==e+"";case Xr:var u=Vr;case rn:if(u||(u=Jr),t.size!=e.size&&!(n&Zr))return!1;var c=a.get(t);if(c)return c==e;n|=Gr,a.set(t,e);var l=qr(u(t),u(e),n,o,i,a);return a.delete(t),l;case on:if(ln)return ln.call(t)==ln.call(e)}return!1};var sn=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t};var pn=function(t,e,r){var n=e(t);return at(t)?n:sn(n,r(t))};var vn=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i};var hn=Object.prototype.propertyIsEnumerable,dn=Object.getOwnPropertySymbols,bn=dn?function(t){return null==t?[]:(t=Object(t),vn(dn(t),function(e){return hn.call(t,e)}))}:function(){return[]};var gn=function(t){return pn(t,He,bn)},yn=1,mn=Object.prototype.hasOwnProperty;var jn=function(t,e,r,n,o,i){var a=r&yn,u=gn(t),c=u.length;if(c!=gn(e).length&&!a)return!1;for(var l=c;l--;){var f=u[l];if(!(a?f in e:mn.call(e,f)))return!1}var s=i.get(t);if(s&&i.get(e))return s==e;var p=!0;i.set(t,e),i.set(e,t);for(var v=a;++l<c;){var h=t[f=u[l]],d=e[f];if(n)var b=a?n(d,h,f,e,t,i):n(h,d,f,t,e,i);if(!(void 0===b?h===d||o(h,d,r,n,i):b)){p=!1;break}v||(v="constructor"==f)}if(p&&!v){var g=t.constructor,y=e.constructor;g!=y&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y)&&(p=!1)}return i.delete(t),i.delete(e),p},_n=tt(O,"DataView"),wn=tt(O,"Promise"),On=tt(O,"Set"),Sn=tt(O,"WeakMap"),xn=J(_n),zn=J(Bt),Fn=J(wn),kn=J(On),An=J(Sn),Ln=E;(_n&&"[object DataView]"!=Ln(new _n(new ArrayBuffer(1)))||Bt&&"[object Map]"!=Ln(new Bt)||wn&&"[object Promise]"!=Ln(wn.resolve())||On&&"[object Set]"!=Ln(new On)||Sn&&"[object WeakMap]"!=Ln(new Sn))&&(Ln=function(t){var e=E(t),r="[object Object]"==e?t.constructor:void 0,n=r?J(r):"";if(n)switch(n){case xn:return"[object DataView]";case zn:return"[object Map]";case Fn:return"[object Promise]";case kn:return"[object Set]";case An:return"[object WeakMap]"}return e});var Pn=Ln,Bn=1,Tn="[object Arguments]",Mn="[object Array]",En="[object Object]",Hn=Object.prototype.hasOwnProperty;var Nn=function(t,e,r,n,o,i){var a=at(t),u=at(e),c=a?Mn:Pn(t),l=u?Mn:Pn(e),f=(c=c==Tn?En:c)==En,s=(l=l==Tn?En:l)==En,p=c==l;if(p&&ye(t)){if(!ye(e))return!1;a=!0,f=!1}if(p&&!f)return i||(i=new Ye),a||ze(t)?qr(t,e,r,n,o,i):fn(t,e,c,r,n,o,i);if(!(r&Bn)){var v=f&&Hn.call(t,"__wrapped__"),h=s&&Hn.call(e,"__wrapped__");if(v||h){var d=v?t.value():t,b=h?e.value():e;return i||(i=new Ye),o(d,b,r,n,i)}}return!!p&&(i||(i=new Ye),jn(t,e,r,n,o,i))};var Wn=function t(e,r,n,o,i){return e===r||(null==e||null==r||!ut(e)&&!ut(r)?e!=e&&r!=r:Nn(e,r,n,o,t,i))},In=1,Cn=2;var Rn=function(t,e,r,n){var o=r.length,i=o,a=!n;if(null==t)return!i;for(t=Object(t);o--;){var u=r[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=r[o])[0],l=t[c],f=u[1];if(a&&u[2]){if(void 0===l&&!(c in t))return!1}else{var s=new Ye;if(n)var p=n(l,f,c,t,e,s);if(!(void 0===p?Wn(f,l,In|Cn,n,s):p))return!1}}return!0};var $n=function(t){return t==t&&!H(t)};var Un=function(t){for(var e=He(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,$n(o)]}return e};var Dn=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}};var qn=function(t){var e=Un(t);return 1==e.length&&e[0][2]?Dn(e[0][0],e[0][1]):function(r){return r===t||Rn(r,t,e)}};var Vn=function(t,e){for(var r=0,n=(e=te(e,t)).length;null!=t&&r<n;)t=t[ie(e[r++])];return r&&r==n?t:void 0};var Jn=function(t,e,r){var n=null==t?void 0:Vn(t,e);return void 0===n?r:n};var Zn=function(t,e){return null!=t&&e in Object(t)};var Gn=function(t,e,r){for(var n=-1,o=(e=te(e,t)).length,i=!1;++n<o;){var a=ie(e[n]);if(!(i=null!=t&&r(t,a)))break;t=t[a]}return i||++n!=o?i:!!(o=null==t?0:t.length)&&je(o)&&ne(a,o)&&(at(t)||be(t))};var Kn=function(t,e){return null!=t&&Gn(t,e,Zn)},Yn=1,Qn=2;var Xn=function(t,e){return pt(t)&&$n(e)?Dn(ie(t),e):function(r){var n=Jn(r,t);return void 0===n&&n===e?Kn(r,t):Wn(e,n,Yn|Qn)}};var to=function(t){return function(e){return null==e?void 0:e[t]}};var eo=function(t){return function(e){return Vn(e,t)}};var ro=function(t){return pt(t)?to(ie(t)):eo(t)};var no=function(t){return"function"==typeof t?t:null==t?We:"object"==typeof t?at(t)?Xn(t[0],t[1]):qn(t):ro(t)};var oo=function(t,e,r,n,o){return o(t,function(t,o,i){r=n?(n=!1,t):e(r,t,o,i)}),r};var io=function(t,e,r){var n=at(t)?Hr:oo,o=arguments.length<3;return n(t,no(e,4),r,o,Ne)},ao=function(t,e,r){var n;return void 0===t&&(t={}),n=at(e)?e:[e],Ce(n,function(e){Ce(r,function(r,n){ue(t,e+"."+n,r)})}),t},uo=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system"],co=function(t){return-1!==uo.indexOf(t)?t:"'"+t+"'"};var lo,fo=j(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default="html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}"}),so=(lo=fo)&&lo.__esModule&&Object.prototype.hasOwnProperty.call(lo,"default")?lo.default:lo,po=function(t){return io(t,function(t,e,r){return t+=r+"{",Ce(e,function(e,r){if(H(e)){var n={};n[r]=e,t+=po(n)}else{var o=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/([a-z\d])([A-Z])/g,"$1"+(e=void 0===e?"_":e)+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}(r,"-")+":"+e+";";["Webkit","ms","Moz","O"].forEach(function(t){r.slice(0,t.length)===t&&(o="-"+o)}),t+=o}}),t+="}"},"")};module.exports=function(t){var e,r,a,u,l=i({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),d=(e=l,r=JSON.parse(JSON.stringify(p)),a=Object.assign({},r,e),u=c(a.baseFontSize),f(a.baseLineHeight)?(s(u(a.baseFontSize,"px")),a.baseLineHeightInPx=u(a.baseLineHeight,"px")):a.baseLineHeightInPx=s(a.baseFontSize)*a.baseLineHeight+"px",{rhythm:h(a),establishBaseline:function(){return c((t=a).baseFontSize),{fontSize:s(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return v(t,a)},adjustFontSizeTo:function(t,e,r){return null==e&&(e="auto"),function(t,e,r,n){null==r&&(r=n.baseFontSize),"%"===f(t)&&(t=s(n.baseFontSize)*(s(t)/100)+"px");var o=c(n.baseFontSize);t=o(t,"px",r=o(r,"px"));var i=h(n);return"auto"===e&&(e=v(t,n)),{fontSize:o(t,n.rhythmUnit,r),lineHeight:i(e,r)}}(t,e,r,a)}});return d.scale=function(t){var e=parseInt(l.baseFontSize,10),r=function(t,e){var r;return null==t&&(t=0),null==e&&(e="golden"),r=n(e)?e:null!=o[e]?o[e]:o.golden,Math.pow(r,t)}(t,l.scaleRatio)*e+"px";return d.adjustFontSizeTo(r)},Object.assign({},{options:l},d,{createStyles:function(){return this.toString()},toJSON:function(){return function(t,e){var r={},n=t.establishBaseline();r=ao(r,"html",{font:n.fontSize+"/"+n.lineHeight+" "+e.bodyFontFamily.map(co).join(","),boxSizing:"border-box",overflowY:"scroll"}),r=ao(r,["*","*:before","*:after"],{boxSizing:"inherit"}),r=ao(r,"body",{color:e.bodyColor,fontFamily:e.bodyFontFamily.map(co).join(","),fontWeight:e.bodyWeight,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"'}),r=ao(r,"img",{maxWidth:"100%"});var o="";o=$e(e.blockMarginBottom)?t.rhythm(e.blockMarginBottom):De(e.blockMarginBottom)?e.blockMarginBottom:t.rhythm(1),r=ao(r,["h1","h2","h3","h4","h5","h6","hgroup","ul","ol","dl","dd","p","figure","pre","table","fieldset","blockquote","form","noscript","iframe","img","hr","address"],{marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:o}),r=ao(r,"blockquote",{marginRight:t.rhythm(1),marginBottom:o,marginLeft:t.rhythm(1)}),r=ao(r,["b","strong","dt","th"],{fontWeight:e.boldWeight}),r=ao(r,"hr",{background:y(80),border:"none",height:"1px",marginBottom:"calc("+o+" - 1px)"}),r=ao(r,["ol","ul"],{listStylePosition:"outside",listStyleImage:"none",marginLeft:t.rhythm(1)}),r=ao(r,"li",{marginBottom:"calc("+o+" / 2)"}),r=ao(r,["ol li","ul li"],{paddingLeft:0}),r=ao(r,["li > ol","li > ul"],{marginLeft:t.rhythm(1),marginBottom:"calc("+o+" / 2)",marginTop:"calc("+o+" / 2)"}),r=ao(r,["blockquote *:last-child","li *:last-child","p *:last-child"],{marginBottom:0}),r=ao(r,["li > p"],{marginBottom:"calc("+o+" / 2)"}),r=ao(r,["code","kbd","pre","samp"],Object.assign({},t.adjustFontSizeTo("85%"))),(r=ao(r,["abbr","acronym"],{borderBottom:"1px dotted "+y(50),cursor:"help"}))["abbr[title]"]={borderBottom:"1px dotted "+y(50),cursor:"help",textDecoration:"none"},r=ao(r,["table"],Object.assign({},t.adjustFontSizeTo(e.baseFontSize),{borderCollapse:"collapse",width:"100%"})),r=ao(r,["thead"],{textAlign:"left"}),r=ao(r,["td,th"],{textAlign:"left",borderBottom:"1px solid "+y(88),fontFeatureSettings:'"tnum"',MozFontFeatureSettings:'"tnum"',msFontFeatureSettings:'"tnum"',WebkitFontFeatureSettings:'"tnum"',paddingLeft:t.rhythm(2/3),paddingRight:t.rhythm(2/3),paddingTop:t.rhythm(.5),paddingBottom:"calc("+t.rhythm(.5)+" - 1px)"}),r=ao(r,"th:first-child,td:first-child",{paddingLeft:0}),r=ao(r,"th:last-child,td:last-child",{paddingRight:0}),r=ao(r,["h1","h2","h3","h4","h5","h6"],{color:e.headerColor,fontFamily:e.headerFontFamily.map(co).join(","),fontWeight:e.headerWeight,textRendering:"optimizeLegibility"});var i=t.scale(1),a=t.scale(.6),u=t.scale(.4),c=t.scale(0),l=t.scale(-.2),f=t.scale(-.3);return Ce([i,a,u,c,l,f],function(t,n){r=ue(r,"h"+(n+1)+".fontSize",t.fontSize),r=ue(r,"h"+(n+1)+".lineHeight",e.headerLineHeight)}),at(e.plugins)&&(r=io(e.plugins,function(r,n){return Er(r,n(t,e,r))},r)),e.overrideStyles&&$(e.overrideStyles)&&(r=Er(r,e.overrideStyles(t,e,r))),e.overrideThemeStyles&&$(e.overrideThemeStyles)&&(r=Er(r,e.overrideThemeStyles(t,e,r))),r}(d,l)},toString:function(){return function(t,e,r){var n=po(r);return e.includeNormalize&&(n=""+so+n),n}(0,l,this.toJSON())},injectStyles:function(){if("undefined"!=typeof document)if(document.getElementById("typography.js"))document.getElementById("typography.js").innerHTML=this.toString();else{var t=document.createElement("style");t.id="typography.js",t.innerHTML=this.toString(),document.head.appendChild(t)}}})};
//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _grayPercentage = __webpack_require__(137);

var _grayPercentage2 = _interopRequireDefault(_grayPercentage);

var _typographyBreakpointConstants = __webpack_require__(138);

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

/***/ 137:
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

/***/ 138:
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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, Popper, Util) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($) {

  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

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
    fallbackPlacement: '(string|array)'
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
    fallbackPlacement: 'flip'
  };

  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
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
  var Tooltip = function () {
    function Tooltip(element, config) {
      _classCallCheck(this, Tooltip);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null;

      // protected
      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    }

    // getters

    // public

    Tooltip.prototype.enable = function enable() {
      this._isEnabled = true;
    };

    Tooltip.prototype.disable = function disable() {
      this._isEnabled = false;
    };

    Tooltip.prototype.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    Tooltip.prototype.toggle = function toggle(event) {
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

    Tooltip.prototype.dispose = function dispose() {
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

    Tooltip.prototype.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);

        var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

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

        var container = this.config.container === false ? document.body : $(this.config.container);

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
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this._handlePopperPlacementChange(data);
          }
        });

        $(tip).addClass(ClassName.SHOW);

        // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
          $('body').children().on('mouseover', null, $.noop);
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

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    Tooltip.prototype.hide = function hide(callback) {
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

      $(tip).removeClass(ClassName.SHOW);

      // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        $('body').children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    Tooltip.prototype.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // protected

    Tooltip.prototype.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    Tooltip.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
    };

    Tooltip.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Tooltip.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    };

    Tooltip.prototype.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;
      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
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

    Tooltip.prototype.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    };

    // private

    Tooltip.prototype._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    Tooltip.prototype._setListeners = function _setListeners() {
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

        $(_this3.element).closest('.modal').on('hide.bs.modal', function () {
          return _this3.hide();
        });
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    Tooltip.prototype._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));
      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    Tooltip.prototype._enter = function _enter(event, context) {
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

    Tooltip.prototype._leave = function _leave(event, context) {
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

    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    Tooltip.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (config.title && typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (config.content && typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
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

    Tooltip.prototype._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();
      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    Tooltip.prototype._fixTransition = function _fixTransition() {
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
    };

    // static

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
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
}(jQuery); /* global Popper */
//# sourceMappingURL=tooltip.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(13)["default"], __webpack_require__(2)))

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, Util) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
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
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Tab = function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    // getters

    // public

    Tab.prototype.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target = void 0;
      var previous = void 0;
      var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        previous = $.makeArray($(listElement).find(Selector.ACTIVE));
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
        target = $(selector)[0];
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

    Tab.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Tab.prototype._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var active = $(container).find(Selector.ACTIVE)[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, isTransitioning, callback);
      };

      if (active && isTransitioning) {
        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      if (active) {
        $(active).removeClass(ClassName.SHOW);
      }
    };

    Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE);

        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        active.setAttribute('aria-expanded', false);
      }

      $(element).addClass(ClassName.ACTIVE);
      element.setAttribute('aria-expanded', true);

      if (isTransitioning) {
        Util.reflow(element);
        $(element).addClass(ClassName.SHOW);
      } else {
        $(element).removeClass(ClassName.FADE);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    };

    // static

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: 'VERSION',
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
}(jQuery);
//# sourceMappingURL=tab.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),

/***/ 141:
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 142:
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 143:
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    "full-stack-full-time": [
        {
            price: '$1000 deposit + $1,364 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
        },
        {
            price: '$1000 deposit + $710 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
        },
        {
            price: '$1000 deposit + $384 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
        }
    ],
    "full-stack-part-time": [
        {
            price: '$1000 deposit + $853 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
        },
        {
            price: '$1000 deposit + $445 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
        },
        {
            price: '$1000 deposit + $240 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
        },
        {
            price: '$198 / month (No deposit)',
            details: 'Apply to Skillsfund and get 36 month financing, pay <strong>only $198 per month</strong> and with no deposit to start.',
            logo: '/assets/img/skillsfund.png',
            applyText: 'Apply to financing',
            applyURL: 'http://4geeksacademy.skills.fund'
        },
        {
            price: '$135 / month (No deposit)',
            details: 'Apply to Skillsfund and get 60 month financing, pay <strong>only $135 every month</strong> and with no deposit to start.',
            logo: '/assets/img/skillsfund.png',
            applyText: 'Apply to financing',
            applyURL: 'http://4geeksacademy.skills.fund'
        }
    ]
});

/***/ }),

/***/ 145:
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

var LocationView = (function(){
    var scope = {};
    
    
    return scope;
})();

LocationView.activate();

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

  // ----------------------------------------
  // Particles
  // ----------------------------------------
var Sketch = __webpack_require__(10);
  
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

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = PricingCalculator;
function PricingCalculator(sectionId, messages){
  
  var Slider = __webpack_require__(11);
  var mySlider = new Slider(sectionId+' .pricing-slider');
  mySlider.on('slideStop', function(newValue){
    if(typeof messages[newValue] != 'undefined'){
      if(typeof(messages[newValue].price) == 'string') document.querySelector('#price-label').innerHTML = messages[newValue].price;
      if(typeof(messages[newValue].details) == 'string') document.querySelector('#financing-details').innerHTML = messages[newValue].details;
      if(typeof(messages[newValue].logo) == 'string'){
        var logoElm = document.querySelector(sectionId+' .financing-logo');
        var templateURL = logoElm.getAttribute('data-templateurl');
        logoElm.src = templateURL + messages[newValue].logo;
      }
      
      var applyBtn = document.querySelector(sectionId+' .financing-btn');
      applyBtn.innerHTML = messages[newValue].applyText;
      if(messages[newValue].applyURL){
        applyBtn.href = messages[newValue].applyURL;
      }else{
        var defaultURL = applyBtn.getAttribute('data-applylink');
        applyBtn.href = defaultURL;
      }
    }
		
		var paymentPlanCard = document.querySelector(sectionId+' .payment-plan');
		paymentPlanCard.classList.add("glow");
		window.setTimeout(function(){
			paymentPlanCard.classList.remove("glow");
		}, 200);
    
  });
}

/***/ }),

/***/ 8:
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
         alert(p3);
      }
   });
   
});

$('.syllabus-download').submit(function(event){
   
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
      url: WPAS_APP.ajax_url,
      dataType: 'JSON',
      method: 'POST',
      data: {
         action: 'download_syllabus',
         template: (typeof WPAS_APP.template == 'string') ? WPAS_APP.template.replace('single-','') : 'none',
         url: WPAS_APP.url,
         email: email,
         first_name: firstName
      },
      success: function(response){
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
         alert(p3);
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
   
   var masterWhite = document.querySelector('.masthead-white');
   if(typeof masterWhite != 'undefined' && masterWhite){
      var navbar = document.querySelector('.navbar'); 
      navbar.classList.add('inverted');
   } 
});

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 9:
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[130]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL3NrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R5cG9ncmFwaHkvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwb2dyYXBoeS10aGVtZS1kb2VsZ2VyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYXktcGVyY2VudGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwb2dyYXBoeS1icmVha3BvaW50LWNvbnN0YW50cy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC90b29sdGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC90YWIuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3Jlc3BvbnNpdmUtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9wcmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvZmlyZXdvcmtzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBLHdCQUF3Qix1Q0FBdUMsRUFBRTs7QUFFakUsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLHlCQUF5Qjs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsNkJBQTZCOztBQUVyRDs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsdUJBQXVCOztBQUUvQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxxQ0FBcUM7O0FBRXJDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQiw0QkFBNEI7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RuQkQ7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21CO0FBQ0U7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdFQUF3RTtBQUMvRSxPQUFPLGtFQUFrRTtBQUN6RSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsK0lBQXNFLGlCQUFpQjtBQUN2RixDOzs7Ozs7OztBQzVIQSx5Qzs7Ozs7OztBQ0FBLDJKQUE2RyxxQkFBcUIsSUFBSSwyQkFBMkIsd0JBQXdCLDZEQUE2RCxZQUFZLEtBQUssS0FBSyxvQ0FBb0MsZ0VBQWdFLFlBQVksb0JBQW9CLFNBQVMsMkRBQTJELE9BQU8sdURBQXVELGNBQWMsU0FBUyxVQUFVLCtCQUErQiwwQkFBMEIscUdBQXFHLGlCQUFpQixRQUFRLG1CQUFtQixLQUFLLDZEQUE2RCxNQUFNLE9BQU8sWUFBWSxXQUFXLHVDQUF1QyxTQUFTLGlCQUFpQiwwQkFBMEIsdUJBQXVCLHlEQUF5RCxlQUFlLGVBQWUsZUFBZSx3Q0FBd0MsOEJBQThCLGNBQWMsa0JBQWtCLFdBQVcsb0NBQW9DLDhCQUE4QixLQUFLLHFCQUFxQixjQUFjLFFBQVEsaUNBQWlDLDJCQUEyQixLQUFLLHFCQUFxQixXQUFXLG1DQUFtQyxtQkFBbUIsZUFBZSxlQUFlLGVBQWUsSUFBSSx1S0FBdUssaUJBQWlCLGlHQUFpRyxtSEFBbUgsZUFBZSx3QkFBd0IsdUJBQXVCLDBEQUEwRCw2REFBNkQsK0VBQStFLGlEQUFpRCxjQUFjLHNDQUFzQyw4QkFBOEIsa0JBQWtCLElBQUksMlVBQTJVLGNBQWMseUNBQXlDLHNCQUFzQiwySUFBMkksc0RBQXNELDBCQUEwQixRQUFRLFVBQVUsZ0RBQWdELFFBQVEsa0ZBQWtGLHdHQUF3RyxnQkFBZ0IsWUFBWSxXQUFXLHNCQUFzQixxT0FBcU8sa0JBQWtCLHlCQUF5QixJQUFJLFlBQVksU0FBUyxVQUFVLGdCQUFnQixtQ0FBbUMsNkJBQTZCLGtCQUFrQixpQkFBaUIsbUVBQW1FLGtCQUFrQiwyREFBMkQsa0JBQWtCLGVBQWUsNkNBQTZDLG9HQUFvRyxvQkFBb0Isa0JBQWtCLFdBQVcsOEJBQThCLHFHQUFxRyxrQkFBa0Isa0JBQWtCLCtCQUErQixrQkFBa0IsWUFBWSxJQUFJLGlCQUFpQixVQUFVLElBQUksWUFBWSxXQUFXLFNBQVMsaUpBQWlKLDRGQUE0RixrQkFBa0IsNkNBQTZDLG9CQUFvQiw0QkFBNEIscUJBQXFCLGFBQWEscUJBQXFCLGVBQWUsSUFBSSxrQ0FBa0MsV0FBVyxNQUFNLElBQUksV0FBVyxHQUFHLHVCQUF1QiwyQkFBMkIsa0RBQWtELFVBQVUscUJBQXFCLHlCQUF5QixvQ0FBb0MsdUJBQXVCLFdBQVcsdURBQXVELGtCQUFrQixtQkFBbUIsbUNBQW1DLHNCQUFzQixtQkFBbUIsMENBQTBDLGtFQUFrRSxxQkFBcUIsa0JBQWtCLGVBQWUsbUhBQW1ILHdCQUF3QixtQkFBbUIsMkNBQTJDLDBCQUEwQixtRUFBbUUsbUJBQW1CLG9CQUFvQixPQUFPLFdBQVcsdUJBQXVCLGdDQUFnQyxvQ0FBb0MsbUJBQW1CLG9CQUFvQixxQ0FBcUMsZ0NBQWdDLHFCQUFxQixvQkFBb0IsaUVBQWlFLGVBQWUsOEJBQThCLGlCQUFpQixNQUFNLEVBQUUsV0FBVyxxQkFBcUIsOEJBQThCLDRCQUE0QixhQUFhLG9GQUFvRixVQUFVLHFCQUFxQixtQkFBbUIsSUFBSSwyQkFBMkIsU0FBUywyQkFBMkIsbUJBQW1CLDhCQUE4QixvRUFBb0UsbUJBQW1CLDhCQUE4QiwyQkFBMkIsbUJBQW1CLCtCQUErQixxQkFBcUIsOEJBQThCLHVEQUF1RCxlQUFlLDhCQUE4QixpQkFBaUIsTUFBTSxFQUFFLFdBQVcscUJBQXFCLDhCQUE4Qiw2QkFBNkIsb0ZBQW9GLHlCQUF5QixtQkFBbUIsZUFBZSxvRkFBb0YscUJBQXFCLGlCQUFpQiwwREFBMEQsbUJBQW1CLDJCQUEyQiwyQkFBMkIsbUJBQW1CLDBCQUEwQixtQkFBbUIsMEJBQTBCLHFCQUFxQiwwQkFBMEIsaURBQWlELGVBQWUsOEJBQThCLGlCQUFpQixNQUFNLEVBQUUsV0FBVyxxQkFBcUIsOEJBQThCLDJCQUEyQiwyQ0FBMkMsb0ZBQW9GLG1DQUFtQyxpQkFBaUIsK0VBQStFLGlCQUFpQixtREFBbUQsNEJBQTRCLHNCQUFzQixnQ0FBZ0MsbUNBQW1DLFlBQVksaUJBQWlCLHVJQUF1SSx1QkFBdUIsZ0NBQWdDLFlBQVksU0FBUyxhQUFhLFNBQVMsdUVBQXVFLGtDQUFrQyxJQUFJLEVBQUUscUJBQXFCLDZDQUE2QyxNQUFNLGtCQUFrQixTQUFTLHlEQUF5RCxxQkFBcUIsK0JBQStCLDJCQUEyQixpQ0FBaUMsV0FBVywrQkFBK0IsbUJBQW1CLHlCQUF5QixxQkFBcUIscUNBQXFDLDJDQUEyQyxxQkFBcUIsZUFBZSxvRkFBb0YsUUFBUSxtQkFBbUIsc0NBQXNDLFdBQVcsK0JBQStCLHlCQUF5QixrQkFBa0IsNENBQTRDLGVBQWUsRUFBRSxtQkFBbUIsU0FBUyxXQUFXLDBEQUEwRCxFQUFFLGlCQUFpQixVQUFVLHVCQUF1Qiw0QkFBNEIscUJBQXFCLGtDQUFrQyx3QkFBd0IsRUFBRSxVQUFVLG1CQUFtQix1QkFBdUIsMkNBQTJDLElBQUksRUFBRSxpQkFBaUIsMEJBQTBCLFVBQVUsR0FBRyxxQkFBcUIsd0JBQXdCLE1BQU0sV0FBVyxTQUFTLHlCQUF5QixtQkFBbUIsdUJBQXVCLHNGQUFzRixpQkFBaUIsbUJBQW1CLHlEQUF5RCxrQkFBa0IsU0FBUyxvQkFBb0Isa0ZBQWtGLG9DQUFvQyxzQkFBc0IsbUJBQW1CLDhDQUE4QyxPQUFPLDBrQkFBMGtCLG1CQUFtQix3Q0FBd0MsbUJBQW1CLG1CQUFtQixhQUFhLG9CQUFvQiwwRkFBMEYsSUFBSSw0Q0FBNEMsMENBQTBDLFdBQVcsR0FBRyxZQUFZLDRFQUE0RSxxQkFBcUIsK0dBQStHLDBKQUEwSixTQUFTLHFCQUFxQixtQkFBbUIsdUJBQXVCLG9EQUFvRCxxQkFBcUIsbUJBQW1CLGdCQUFnQiw4REFBOEQsbUJBQW1CLHVCQUF1QixTQUFTLGlFQUFpRSxVQUFVLG1CQUFtQixxQ0FBcUMsbUJBQW1CLDBCQUEwQixxQkFBcUIscUJBQXFCLG9CQUFvQix3QkFBd0Isd0NBQXdDLGdDQUFnQyxFQUFFLFVBQVUsZUFBZSxxQkFBcUIsRUFBRSxtQkFBbUIsVUFBVSxtQkFBbUIsaUNBQWlDLHFCQUFxQiw2QkFBNkIsc0JBQXNCLG1CQUFtQiwwQ0FBMEMsc0JBQXNCLG1CQUFtQixtREFBbUQsbUJBQW1CLGtDQUFrQywyQkFBMkIsbUJBQW1CLDZCQUE2QixtQkFBbUIsNEJBQTRCLFFBQVEscUJBQXFCLG9CQUFvQixvQkFBb0IsaUJBQWlCLG1FQUFtRSwwQkFBMEIseUNBQXlDLGVBQWUsOEJBQThCLGlCQUFpQiw4QkFBOEIsaUNBQWlDLG9GQUFvRixVQUFVLHVCQUF1QiwwREFBMEQsb0JBQW9CLDJHQUEyRyx3QkFBd0Isc0JBQXNCLDZDQUE2QyxvQkFBb0Isa0JBQWtCLG1CQUFtQixzQ0FBc0MsbUNBQW1DLHFCQUFxQiw4QkFBOEIsbURBQW1ELHFCQUFxQixvQkFBb0Isb0JBQW9CLE1BQU0sV0FBVyxTQUFTLGdDQUFnQyxjQUFjLG1CQUFtQixrQkFBa0IsbUJBQW1CLGNBQWMsWUFBWSw2QkFBNkIsdUNBQXVDLG1CQUFtQixnREFBZ0QsWUFBWSxtQkFBbUIsb0JBQW9CLHVIQUF1SCxtQkFBbUIsNkJBQTZCLFlBQVkscUJBQXFCLDhDQUE4Qyw0REFBNEQscUJBQXFCLGtDQUFrQyx5QkFBeUIsU0FBUyxRQUFRLEVBQUUsd0JBQXdCLE1BQU0sRUFBRSx5Q0FBeUMsMkNBQTJDLFVBQVUsbUJBQW1CLFNBQVMsNENBQTRDLFNBQVMsb0NBQW9DLG1CQUFtQixzQkFBc0IsaUJBQWlCLCtEQUErRCxVQUFVLG1CQUFtQiw2QkFBNkIsbUJBQW1CLG9CQUFvQiwrQkFBK0IsbUNBQW1DLGVBQWUsS0FBSyw4Q0FBOEMsTUFBTSx3Q0FBd0MsbUpBQW1KLHFEQUFxRCw2QkFBNkIsMEJBQTBCLHdDQUF3QyxLQUFLLHVDQUF1Qyw2QkFBNkIsTUFBTSx1QkFBdUIsaUJBQWlCLHdCQUF3Qiw2QkFBNkIsa0NBQWtDLHVDQUF1QyxvQkFBb0IsYUFBYSx1QkFBdUIsa0RBQWtELHVEQUF1RCxNQUFNLGFBQWEsS0FBSyxxQkFBcUIsTUFBTSxXQUFXLGdDQUFnQyxtQkFBbUIsa0JBQWtCLFVBQVUsMEJBQTBCLG1CQUFtQixZQUFZLGtCQUFrQixzQkFBc0IsWUFBWSwrQkFBK0IsU0FBUyxrQ0FBa0Msa0JBQWtCLHdCQUF3QixzREFBc0QsRUFBRSxLQUFLLHFCQUFxQiw0QkFBNEIsdUJBQXVCLGtCQUFrQixlQUFlLDZFQUE2RSxtQkFBbUIsd0JBQXdCLDBEQUEwRCwyR0FBMkcsTUFBTSxFQUFFLFdBQVcsY0FBYyxTQUFTLEVBQUUsaUJBQWlCLFVBQVUsRUFBRSx5QkFBeUIsOEJBQThCLHFCQUFxQixNQUFNLGlCQUFpQixTQUFTLGdDQUFnQyxtQkFBbUIsNkJBQTZCLGVBQWUsOEJBQThCLHlCQUF5QixNQUFNLGdCQUFnQiwrQ0FBK0Msb0NBQW9DLHFCQUFxQixVQUFVLHFCQUFxQixrQ0FBa0MsTUFBTSx5QkFBeUIsVUFBVSxxQkFBcUIsZ0JBQWdCLFdBQVcsNkJBQTZCLGlDQUFpQyw0QkFBNEIsZUFBZSwyQkFBMkIsbUNBQW1DLDBCQUEwQixNQUFNLEVBQUUsa0JBQWtCLDJDQUEyQyxlQUFlLGNBQWMsS0FBSyxNQUFNLE1BQU0sdUJBQXVCLG9EQUFvRCxHQUFHLEtBQUssT0FBTyw4QkFBOEIsS0FBSyxPQUFPLGtDQUFrQyxtQkFBbUIseUJBQXlCLCtCQUErQixhQUFhLEtBQUssbUJBQW1CLHlCQUF5Qiw2QkFBNkIsU0FBUyxJQUFJLGlTQUFpUywrQkFBK0IsVUFBVSwyRUFBMkUsc0JBQXNCLHFFQUFxRSx5Q0FBeUMsb0RBQW9ELCtCQUErQixpQkFBaUIsc0RBQXNELGVBQWUsaUJBQWlCLGlCQUFpQiw0QkFBNEIscUJBQXFCLDRDQUE0QyxVQUFVLHFCQUFxQixtQ0FBbUMsTUFBTSxhQUFhLFVBQVUsdUJBQXVCLFdBQVcsMkJBQTJCLHFCQUFxQiwyQ0FBMkMsTUFBTSxFQUFFLFdBQVcscUJBQXFCLFVBQVUsK0ZBQStGLG9EQUFvRCxvQkFBb0IsR0FBRyxZQUFZLFVBQVUsbUJBQW1CLG1CQUFtQix5Q0FBeUMsNkJBQTZCLDhCQUE4QixnQ0FBZ0MsWUFBWSxJQUFJLEVBQUUsV0FBVyxxQ0FBcUMsZUFBZSwyQkFBMkIsU0FBUyxzQkFBc0IsWUFBWSxNQUFNLEVBQUUsdUJBQXVCLDJDQUEyQyx3Q0FBd0MsS0FBSyxNQUFNLHdCQUF3QixVQUFVLG9DQUFvQyxrSUFBa0ksaUNBQWlDLDRIQUE0SCx5TkFBeU4sbUVBQW1FLGVBQWUsa0NBQWtDLDZCQUE2QixpQ0FBaUMsNkJBQTZCLGlDQUFpQyxTQUFTLEVBQUUsbUhBQW1ILDZCQUE2QiwrRkFBK0YsYUFBYSxtQkFBbUIsVUFBVSx5RUFBeUUsWUFBWSxnRUFBZ0UsU0FBUyxvQ0FBb0MsbUNBQW1DLDRDQUE0Qyw2QkFBNkIsNEVBQTRFLFdBQVcseUJBQXlCLHdCQUF3QixvQkFBb0IsZ0JBQWdCLElBQUksRUFBRSxXQUFXLCtDQUErQyxLQUFLLE1BQU0sRUFBRSxnQ0FBZ0MsWUFBWSxrQ0FBa0MsS0FBSyxhQUFhLDBCQUEwQiwrQ0FBK0MsVUFBVSxtQkFBbUIsb0JBQW9CLG1CQUFtQiwyQkFBMkIsSUFBSSxFQUFFLGtCQUFrQixpQkFBaUIsVUFBVSxxQkFBcUIsbUJBQW1CLHlEQUF5RCxtQkFBbUIsWUFBWSw0REFBNEQsMEJBQTBCLHFCQUFxQixpQ0FBaUMsYUFBYSxpQkFBaUIseUJBQXlCLHVCQUF1Qiw2QkFBNkIsdUJBQXVCLHFCQUFxQixnQ0FBZ0MsdUJBQXVCLHVDQUF1QyxNQUFNLEVBQUUsZUFBZSw4QkFBOEIsT0FBTyw2RUFBNkUscUJBQXFCLDJCQUEyQixXQUFXLHFCQUFxQiw0Q0FBNEMsY0FBYyxpREFBaUQsbUJBQW1CLG1CQUFtQiw2QkFBNkIsbUJBQW1CLG1CQUFtQixpQkFBaUIsbUJBQW1CLDhCQUE4QixtQkFBbUIsNEZBQTRGLDJCQUEyQiwyQkFBMkIsd0JBQXdCLEtBQUssdUJBQXVCLHVDQUF1QywyQkFBMkIsb0JBQW9CLE1BQU0sd0JBQXdCLGlDQUFpQyxtQkFBbUIsZ0JBQWdCLEVBQUUsSUFBSSw4R0FBOEcsc0NBQXNDLDBCQUEwQixzQ0FBc0MsU0FBUyxrQkFBa0IsdUJBQXVCLDBCQUEwQiw4QkFBOEIsS0FBSyxTQUFTLG9GQUFvRixjQUFjLDRCQUE0QixxQkFBcUIsc0JBQXNCLGFBQWEsU0FBUyxTQUFTLHdCQUF3QixrQkFBa0IsYUFBYSxFQUFFLDZCQUE2QixxQ0FBcUMsaUJBQWlCLGdCQUFnQixZQUFZLG1CQUFtQiwwQkFBMEIsaUNBQWlDLFNBQVMsb0JBQW9CLG1CQUFtQixJQUFJLGtCQUFrQixHQUFHLGNBQWMsZUFBZSxLQUFLLHNCQUFzQixXQUFXLE1BQU0sY0FBYyxRQUFRLGNBQWMsY0FBYyxrQkFBa0Isd0JBQXdCLElBQUksY0FBYyxJQUFJLFVBQVUsSUFBSSxrQkFBa0IsZUFBZSxnQkFBZ0Isa0JBQWtCLGdDQUFnQyxjQUFjLE9BQU8sZ0JBQWdCLEdBQUcsdUJBQXVCLFNBQVMsaUJBQWlCLHNDQUFzQyxhQUFhLFNBQVMsU0FBUyxnQkFBZ0IsYUFBYSxpQkFBaUIsY0FBYyxvQkFBb0IscURBQXFELDBCQUEwQix3SEFBd0gsa0JBQWtCLFVBQVUsNEdBQTRHLDhCQUE4QixTQUFTLHdCQUF3QixhQUFhLDJCQUEyQixPQUFPLHNCQUFzQixjQUFjLGNBQWMsZUFBZSxVQUFVLG1CQUFtQixTQUFTLGNBQWMsNkJBQTZCLHNCQUFzQixVQUFVLGtGQUFrRixZQUFZLGNBQWMsNkJBQTZCLG9CQUFvQixxRkFBcUYsd0JBQXdCLDRCQUE0QixjQUFjLFlBQVksNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUsNkdBQTZHLDRCQUE0QixjQUFjLHFCQUFxQixTQUFTLFNBQVMsZ0JBQWdCLEtBQUssb0JBQW9CLCtEQUErRCxtSUFBbUksZ0JBQWdCLEVBQUUsOENBQThDLG1DQUFtQyxRQUFRLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixrQkFBa0IsRUFBRSxtYkFBbWIsNkRBQTZELHNMQUFzTCx5Q0FBeUMsOEJBQThCLDhFQUE4RSxNQUFNLDhCQUE4QixjQUFjLGtDQUFrQyw2Q0FBNkMsOEVBQThFLHdCQUF3Qix3QkFBd0IsV0FBVyw4QkFBOEIsZ0RBQWdELFdBQVcsRUFBRSwyQkFBMkIsa0RBQWtELE1BQU0sNEZBQTRGLHdCQUF3Qiw2QkFBNkIsaUJBQWlCLEVBQUUsVUFBVSxJQUFJLHdCQUF3Qix1QkFBdUIsbUJBQW1CLHFCQUFxQixRQUFRLHlCQUF5QixlQUFlLGtIQUFrSCxxQ0FBcUMsb0JBQW9CLGlCQUFpQixrV0FBa1csZ0JBQWdCLGdCQUFnQixFQUFFLFNBQVMsd1JBQXdSLGdIQUFnSCx1QkFBdUIsOERBQThELG1DQUFtQyx3QkFBd0IsZUFBZSw2RUFBNkUsc0JBQXNCLHlFQUF5RSxlQUFlLCtCQUErQiw0QkFBNEIsY0FBYyxnQ0FBZ0Msa0ZBQWtGLHlFQUF5RSxlQUFlLHFCQUFxQiwrQkFBK0IscURBQXFELHlEQUF5RCwrQ0FBK0MsbUJBQW1CLHFFQUFxRSxrQ0FBa0MscUNBQXFDLHVDQUF1QyxxQkFBcUIsaUJBQWlCLG9CQUFvQiwwU0FBMFMsMENBQTBDLGNBQWMsd0NBQXdDLGVBQWUsMENBQTBDLGlJQUFpSSxFQUFFLHdGQUF3RixzQ0FBc0MsNEZBQTRGLCtDQUErQyxzQkFBc0Isd0tBQXdLLE1BQU0scUJBQXFCLHVCQUF1QixZQUFZLHlDQUF5QyxvQkFBb0IseUJBQXlCLCtJQUErSSxLQUFLLHNDQUFzQyxnRkFBZ0Y7QUFDNzU4Qjs7Ozs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RiwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0tBQWdLO0FBQ2hLO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLHdCOzs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3pEQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGOzs7Ozs7O0FDckJBLGdLQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUSxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLFNBQVM7QUFDVixtQzs7Ozs7Ozs7QUN0cUJBLG9GQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJC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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxHQUFHO0FBQ0gsQzs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSixDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEk7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLHFEO0FBQ0E7QUFDQSxJO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0dBQWtHOzs7QUFHbEcsdUJBQXVCO0FBQ3ZCLDhEQUE4RDtBQUM5RCwyR0FBMkc7QUFDM0c7O0FBRUE7O0FBRUEsQzs7Ozs7Ozs7QUMvTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsYUFBYTtBQUNyRTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDOztBQUVBO0FBQ0E7O0FBRUEsZ0Q7QUFDQSxDQUFDO0FBQ0QsK0M7O0FBRUE7QUFDQTs7QUFFQSxnRDtBQUNBLENBQUM7QUFDRCxzQ0FBc0MsZ0RBQWdELEVBQUU7QUFDeEY7QUFDQTtBQUNBLGtEO0FBQ0EsQ0FBQztBQUNELHFEO0FBQ0E7QUFDQSx1RDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIENvcHlyaWdodCAoQykgMjAxMyBKdXN0aW4gV2luZGxlLCBodHRwOi8vc291bHdpcmUuY28udWsgKi9cblxuKGZ1bmN0aW9uICggcm9vdCwgZmFjdG9yeSApIHtcblxuICBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcblxuICAgIC8vIENvbW1vbkpTIGxpa2VcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCwgcm9vdC5kb2N1bWVudCk7XG5cbiAgfSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuXG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhY3RvcnkoIHJvb3QsIHJvb3QuZG9jdW1lbnQgKTsgfSk7XG5cbiAgfSBlbHNlIHtcblxuICAgIC8vIEJyb3dzZXIgZ2xvYmFsXG4gICAgcm9vdC5Ta2V0Y2ggPSBmYWN0b3J5KCByb290LCByb290LmRvY3VtZW50ICk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uICggd2luZG93LCBkb2N1bWVudCApIHtcblxuXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIENvbmZpZ1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgTUFUSF9QUk9QUyA9ICdFIExOMTAgTE4yIExPRzJFIExPRzEwRSBQSSBTUVJUMV8yIFNRUlQyIGFicyBhY29zIGFzaW4gYXRhbiBjZWlsIGNvcyBleHAgZmxvb3IgbG9nIHJvdW5kIHNpbiBzcXJ0IHRhbiBhdGFuMiBwb3cgbWF4IG1pbicuc3BsaXQoICcgJyApO1xuICB2YXIgSEFTX1NLRVRDSCA9ICdfX2hhc1NrZXRjaCc7XG4gIHZhciBNID0gTWF0aDtcblxuICB2YXIgQ0FOVkFTID0gJ2NhbnZhcyc7XG4gIHZhciBXRUJHTCA9ICd3ZWJnbCc7XG4gIHZhciBET00gPSAnZG9tJztcblxuICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgdmFyIGluc3RhbmNlcyA9IFtdO1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcblxuICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgYXV0b3N0YXJ0OiB0cnVlLFxuICAgIGF1dG9jbGVhcjogdHJ1ZSxcbiAgICBhdXRvcGF1c2U6IHRydWUsXG4gICAgY29udGFpbmVyOiBkb2MuYm9keSxcbiAgICBpbnRlcnZhbDogMSxcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIHJldGluYTogZmFsc2UsXG4gICAgdHlwZTogQ0FOVkFTXG4gIH07XG5cbiAgdmFyIGtleU1hcCA9IHtcblxuICAgICA4OiAnQkFDS1NQQUNFJyxcbiAgICAgOTogJ1RBQicsXG4gICAgMTM6ICdFTlRFUicsXG4gICAgMTY6ICdTSElGVCcsXG4gICAgMjc6ICdFU0NBUEUnLFxuICAgIDMyOiAnU1BBQ0UnLFxuICAgIDM3OiAnTEVGVCcsXG4gICAgMzg6ICdVUCcsXG4gICAgMzk6ICdSSUdIVCcsXG4gICAgNDA6ICdET1dOJ1xuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFV0aWxpdGllc1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICBmdW5jdGlvbiBpc0FycmF5KCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBvYmplY3QgKSA9PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnbnVtYmVyJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3RyaW5nKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnc3RyaW5nJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleU5hbWUoIGNvZGUgKSB7XG5cbiAgICByZXR1cm4ga2V5TWFwWyBjb2RlIF0gfHwgU3RyaW5nLmZyb21DaGFyQ29kZSggY29kZSApO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKCB0YXJnZXQsIHNvdXJjZSwgb3ZlcndyaXRlICkge1xuXG4gICAgZm9yICggdmFyIGtleSBpbiBzb3VyY2UgKVxuXG4gICAgICBpZiAoIG92ZXJ3cml0ZSB8fCAhKCBrZXkgaW4gdGFyZ2V0ICkgKVxuXG4gICAgICAgIHRhcmdldFsga2V5IF0gPSBzb3VyY2VbIGtleSBdO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5KCBtZXRob2QsIGNvbnRleHQgKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG5cbiAgICAgIG1ldGhvZC5hcHBseSggY29udGV4dCwgYXJndW1lbnRzICk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lKCB0YXJnZXQgKSB7XG5cbiAgICB2YXIgb2JqZWN0ID0ge307XG5cbiAgICBmb3IgKCB2YXIga2V5IGluIHRhcmdldCApIHtcbiAgICAgIFxuICAgICAgaWYgKCBrZXkgPT09ICd3ZWJraXRNb3ZlbWVudFgnIHx8IGtleSA9PT0gJ3dlYmtpdE1vdmVtZW50WScgKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKCBpc0Z1bmN0aW9uKCB0YXJnZXRbIGtleSBdICkgKVxuXG4gICAgICAgIG9iamVjdFsga2V5IF0gPSBwcm94eSggdGFyZ2V0WyBrZXkgXSwgdGFyZ2V0ICk7XG5cbiAgICAgIGVsc2VcblxuICAgICAgICBvYmplY3RbIGtleSBdID0gdGFyZ2V0WyBrZXkgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQ29uc3RydWN0b3JcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgZnVuY3Rpb24gY29uc3RydWN0b3IoIGNvbnRleHQgKSB7XG5cbiAgICB2YXIgcmVxdWVzdCwgaGFuZGxlciwgdGFyZ2V0LCBwYXJlbnQsIGJvdW5kcywgaW5kZXgsIHN1ZmZpeCwgY2xvY2ssIG5vZGUsIGNvcHksIHR5cGUsIGtleSwgdmFsLCBtaW4sIG1heCwgdywgaDtcblxuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgdG91Y2hlcyA9IFtdO1xuICAgIHZhciByZXNpemVkID0gZmFsc2U7XG4gICAgdmFyIHNldHVwID0gZmFsc2U7XG4gICAgdmFyIHJhdGlvID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICB2YXIgaXNEaXYgPSBjb250ZXh0LnR5cGUgPT0gRE9NO1xuICAgIHZhciBpczJEID0gY29udGV4dC50eXBlID09IENBTlZBUztcblxuICAgIHZhciBtb3VzZSA9IHtcbiAgICAgIHg6ICAwLjAsIHk6ICAwLjAsXG4gICAgICBveDogMC4wLCBveTogMC4wLFxuICAgICAgZHg6IDAuMCwgZHk6IDAuMFxuICAgIH07XG5cbiAgICB2YXIgZXZlbnRNYXAgPSBbXG5cbiAgICAgIGNvbnRleHQuZXZlbnRUYXJnZXQgfHwgY29udGV4dC5lbGVtZW50LFxuXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZWRvd24nLCAndG91Y2hzdGFydCcsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW1vdmUnLCAndG91Y2htb3ZlJyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNldXAnLCAndG91Y2hlbmQnLFxuICAgICAgICBwb2ludGVyLCAnY2xpY2snLFxuICAgICAgICBwb2ludGVyLCAnbW91c2VvdXQnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2VvdmVyJyxcblxuICAgICAgZG9jLFxuXG4gICAgICAgIGtleXByZXNzLCAna2V5ZG93bicsICdrZXl1cCcsXG5cbiAgICAgIHdpbixcblxuICAgICAgICBhY3RpdmUsICdmb2N1cycsICdibHVyJyxcbiAgICAgICAgcmVzaXplLCAncmVzaXplJ1xuICAgIF07XG5cbiAgICB2YXIga2V5cyA9IHt9OyBmb3IgKCBrZXkgaW4ga2V5TWFwICkga2V5c1sga2V5TWFwWyBrZXkgXSBdID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyKCBtZXRob2QgKSB7XG5cbiAgICAgIGlmICggaXNGdW5jdGlvbiggbWV0aG9kICkgKVxuXG4gICAgICAgIG1ldGhvZC5hcHBseSggY29udGV4dCwgW10uc3BsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZCggb24gKSB7XG5cbiAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBldmVudE1hcC5sZW5ndGg7IGluZGV4KysgKSB7XG5cbiAgICAgICAgbm9kZSA9IGV2ZW50TWFwWyBpbmRleCBdO1xuXG4gICAgICAgIGlmICggaXNTdHJpbmcoIG5vZGUgKSApXG5cbiAgICAgICAgICB0YXJnZXRbICggb24gPyAnYWRkJyA6ICdyZW1vdmUnICkgKyAnRXZlbnRMaXN0ZW5lcicgXS5jYWxsKCB0YXJnZXQsIG5vZGUsIGhhbmRsZXIsIGZhbHNlICk7XG5cbiAgICAgICAgZWxzZSBpZiAoIGlzRnVuY3Rpb24oIG5vZGUgKSApXG5cbiAgICAgICAgICBoYW5kbGVyID0gbm9kZTtcblxuICAgICAgICBlbHNlIHRhcmdldCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgICBjQUYoIHJlcXVlc3QgKTtcbiAgICAgIHJlcXVlc3QgPSByQUYoIHVwZGF0ZSApO1xuXG4gICAgICBpZiAoICFzZXR1cCApIHtcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnNldHVwICk7XG4gICAgICAgIHNldHVwID0gaXNGdW5jdGlvbiggY29udGV4dC5zZXR1cCApO1xuICAgICAgfVxuXG4gICAgICBpZiAoICFyZXNpemVkICkge1xuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgICAgICByZXNpemVkID0gaXNGdW5jdGlvbiggY29udGV4dC5yZXNpemUgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBjb250ZXh0LnJ1bm5pbmcgJiYgIWNvdW50ZXIgKSB7XG5cbiAgICAgICAgY29udGV4dC5kdCA9ICggY2xvY2sgPSArbmV3IERhdGUoKSApIC0gY29udGV4dC5ub3c7XG4gICAgICAgIGNvbnRleHQubWlsbGlzICs9IGNvbnRleHQuZHQ7XG4gICAgICAgIGNvbnRleHQubm93ID0gY2xvY2s7XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC51cGRhdGUgKTtcblxuICAgICAgICAvLyBQcmUgZHJhd1xuXG4gICAgICAgIGlmICggaXMyRCApIHtcblxuICAgICAgICAgIGlmICggY29udGV4dC5yZXRpbmEgKSB7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY29udGV4dC5hdXRvY2xlYXIpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5zY2FsZSggcmF0aW8sIHJhdGlvICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCBjb250ZXh0LmF1dG9jbGVhciApXG5cbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXdcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LmRyYXcgKTtcblxuICAgICAgICAvLyBQb3N0IGRyYXdcblxuICAgICAgICBpZiAoIGlzMkQgJiYgY29udGV4dC5yZXRpbmEgKVxuXG4gICAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ZXIgPSArK2NvdW50ZXIgJSBjb250ZXh0LmludGVydmFsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcblxuICAgICAgdGFyZ2V0ID0gaXNEaXYgPyBjb250ZXh0LnN0eWxlIDogY29udGV4dC5jYW52YXM7XG4gICAgICBzdWZmaXggPSBpc0RpdiA/ICdweCcgOiAnJztcblxuICAgICAgdyA9IGNvbnRleHQud2lkdGg7XG4gICAgICBoID0gY29udGV4dC5oZWlnaHQ7XG5cbiAgICAgIGlmICggY29udGV4dC5mdWxsc2NyZWVuICkge1xuXG4gICAgICAgIGggPSBjb250ZXh0LmhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgICAgICAgdyA9IGNvbnRleHQud2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCBjb250ZXh0LnJldGluYSAmJiBpczJEICYmIHJhdGlvICkge1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gdyArICdweCc7XG5cbiAgICAgICAgdyAqPSByYXRpbztcbiAgICAgICAgaCAqPSByYXRpbztcbiAgICAgIH1cblxuICAgICAgaWYgKCB0YXJnZXQuaGVpZ2h0ICE9PSBoIClcblxuICAgICAgICB0YXJnZXQuaGVpZ2h0ID0gaCArIHN1ZmZpeDtcblxuICAgICAgaWYgKCB0YXJnZXQud2lkdGggIT09IHcgKVxuXG4gICAgICAgIHRhcmdldC53aWR0aCA9IHcgKyBzdWZmaXg7XG5cbiAgICAgIGlmICggaXMyRCAmJiAhY29udGV4dC5hdXRvY2xlYXIgJiYgY29udGV4dC5yZXRpbmEgKVxuXG4gICAgICAgIGNvbnRleHQuc2NhbGUoIHJhdGlvLCByYXRpbyApO1xuXG4gICAgICBpZiAoIHNldHVwICkgdHJpZ2dlciggY29udGV4dC5yZXNpemUgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGlnbiggdG91Y2gsIHRhcmdldCApIHtcblxuICAgICAgYm91bmRzID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB0b3VjaC54ID0gdG91Y2gucGFnZVggLSBib3VuZHMubGVmdCAtICh3aW4uc2Nyb2xsWCB8fCB3aW4ucGFnZVhPZmZzZXQpO1xuICAgICAgdG91Y2gueSA9IHRvdWNoLnBhZ2VZIC0gYm91bmRzLnRvcCAtICh3aW4uc2Nyb2xsWSB8fCB3aW4ucGFnZVlPZmZzZXQpO1xuXG4gICAgICByZXR1cm4gdG91Y2g7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXVnbWVudCggdG91Y2gsIHRhcmdldCApIHtcblxuICAgICAgYWxpZ24oIHRvdWNoLCBjb250ZXh0LmVsZW1lbnQgKTtcblxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9O1xuXG4gICAgICB0YXJnZXQub3ggPSB0YXJnZXQueCB8fCB0b3VjaC54O1xuICAgICAgdGFyZ2V0Lm95ID0gdGFyZ2V0LnkgfHwgdG91Y2gueTtcblxuICAgICAgdGFyZ2V0LnggPSB0b3VjaC54O1xuICAgICAgdGFyZ2V0LnkgPSB0b3VjaC55O1xuXG4gICAgICB0YXJnZXQuZHggPSB0YXJnZXQueCAtIHRhcmdldC5veDtcbiAgICAgIHRhcmdldC5keSA9IHRhcmdldC55IC0gdGFyZ2V0Lm95O1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3MoIGV2ZW50ICkge1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb3B5ID0gY2xvbmUoIGV2ZW50ICk7XG4gICAgICBjb3B5Lm9yaWdpbmFsRXZlbnQgPSBldmVudDtcblxuICAgICAgaWYgKCBjb3B5LnRvdWNoZXMgKSB7XG5cbiAgICAgICAgdG91Y2hlcy5sZW5ndGggPSBjb3B5LnRvdWNoZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBjb3B5LnRvdWNoZXMubGVuZ3RoOyBpbmRleCsrIClcblxuICAgICAgICAgIHRvdWNoZXNbIGluZGV4IF0gPSBhdWdtZW50KCBjb3B5LnRvdWNoZXNbIGluZGV4IF0sIHRvdWNoZXNbIGluZGV4IF0gKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0b3VjaGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRvdWNoZXNbMF0gPSBhdWdtZW50KCBjb3B5LCBtb3VzZSApO1xuICAgICAgfVxuXG4gICAgICBleHRlbmQoIG1vdXNlLCB0b3VjaGVzWzBdLCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvaW50ZXIoIGV2ZW50ICkge1xuXG4gICAgICBldmVudCA9IHByb2Nlc3MoIGV2ZW50ICk7XG5cbiAgICAgIG1pbiA9ICggbWF4ID0gZXZlbnRNYXAuaW5kZXhPZiggdHlwZSA9IGV2ZW50LnR5cGUgKSApIC0gMTtcblxuICAgICAgY29udGV4dC5kcmFnZ2luZyA9XG5cbiAgICAgICAgL2Rvd258c3RhcnQvLnRlc3QoIHR5cGUgKSA/IHRydWUgOlxuXG4gICAgICAgIC91cHxlbmQvLnRlc3QoIHR5cGUgKSA/IGZhbHNlIDpcblxuICAgICAgICBjb250ZXh0LmRyYWdnaW5nO1xuXG4gICAgICB3aGlsZSggbWluIClcblxuICAgICAgICBpc1N0cmluZyggZXZlbnRNYXBbIG1pbiBdICkgP1xuXG4gICAgICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnRNYXBbIG1pbi0tIF0gXSwgZXZlbnQgKSA6XG5cbiAgICAgICAgaXNTdHJpbmcoIGV2ZW50TWFwWyBtYXggXSApID9cblxuICAgICAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50TWFwWyBtYXgrKyBdIF0sIGV2ZW50ICkgOlxuXG4gICAgICAgIG1pbiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5cHJlc3MoIGV2ZW50ICkge1xuXG4gICAgICBrZXkgPSBldmVudC5rZXlDb2RlO1xuICAgICAgdmFsID0gZXZlbnQudHlwZSA9PSAna2V5dXAnO1xuICAgICAga2V5c1sga2V5IF0gPSBrZXlzWyBrZXlOYW1lKCBrZXkgKSBdID0gIXZhbDtcblxuICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnQudHlwZSBdLCBldmVudCApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2ZSggZXZlbnQgKSB7XG5cbiAgICAgIGlmICggY29udGV4dC5hdXRvcGF1c2UgKVxuXG4gICAgICAgICggZXZlbnQudHlwZSA9PSAnYmx1cicgPyBzdG9wIDogc3RhcnQgKSgpO1xuXG4gICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudC50eXBlIF0sIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIEFQSVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgICAgIGNvbnRleHQubm93ID0gK25ldyBEYXRlKCk7XG4gICAgICBjb250ZXh0LnJ1bm5pbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG5cbiAgICAgIGNvbnRleHQucnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblxuICAgICAgKCBjb250ZXh0LnJ1bm5pbmcgPyBzdG9wIDogc3RhcnQgKSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuXG4gICAgICBpZiAoIGlzMkQgKVxuXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjb250ZXh0LndpZHRoICogcmF0aW8sIGNvbnRleHQuaGVpZ2h0ICogcmF0aW8gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuXG4gICAgICBwYXJlbnQgPSBjb250ZXh0LmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGluZGV4ID0gaW5zdGFuY2VzLmluZGV4T2YoIGNvbnRleHQgKTtcblxuICAgICAgaWYgKCBwYXJlbnQgKSBwYXJlbnQucmVtb3ZlQ2hpbGQoIGNvbnRleHQuZWxlbWVudCApO1xuICAgICAgaWYgKCB+aW5kZXggKSBpbnN0YW5jZXMuc3BsaWNlKCBpbmRleCwgMSApO1xuXG4gICAgICBiaW5kKCBmYWxzZSApO1xuICAgICAgc3RvcCgpO1xuICAgIH1cblxuICAgIGV4dGVuZCggY29udGV4dCwge1xuXG4gICAgICB0b3VjaGVzOiB0b3VjaGVzLFxuICAgICAgbW91c2U6IG1vdXNlLFxuICAgICAga2V5czoga2V5cyxcblxuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICBtaWxsaXM6IDAsXG4gICAgICBub3c6IE5hTixcbiAgICAgIGR0OiBOYU4sXG5cbiAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICB0b2dnbGU6IHRvZ2dsZSxcbiAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIHN0b3A6IHN0b3BcbiAgICB9KTtcblxuICAgIGluc3RhbmNlcy5wdXNoKCBjb250ZXh0ICk7XG5cbiAgICByZXR1cm4gKCBjb250ZXh0LmF1dG9zdGFydCAmJiBzdGFydCgpLCBiaW5kKCB0cnVlICksIHJlc2l6ZSgpLCB1cGRhdGUoKSwgY29udGV4dCApO1xuICB9XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgR2xvYmFsIEFQSVxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgZWxlbWVudCwgY29udGV4dCwgU2tldGNoID0ge1xuXG4gICAgQ0FOVkFTOiBDQU5WQVMsXG4gICAgV0VCX0dMOiBXRUJHTCxcbiAgICBXRUJHTDogV0VCR0wsXG4gICAgRE9NOiBET00sXG5cbiAgICBpbnN0YW5jZXM6IGluc3RhbmNlcyxcblxuICAgIGluc3RhbGw6IGZ1bmN0aW9uKCBjb250ZXh0ICkge1xuXG4gICAgICBpZiAoICFjb250ZXh0WyBIQVNfU0tFVENIIF0gKSB7XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgTUFUSF9QUk9QUy5sZW5ndGg7IGkrKyApXG5cbiAgICAgICAgICBjb250ZXh0WyBNQVRIX1BST1BTW2ldIF0gPSBNWyBNQVRIX1BST1BTW2ldIF07XG5cbiAgICAgICAgZXh0ZW5kKCBjb250ZXh0LCB7XG5cbiAgICAgICAgICBUV09fUEk6IE0uUEkgKiAyLFxuICAgICAgICAgIEhBTEZfUEk6IE0uUEkgLyAyLFxuICAgICAgICAgIFFVQVJURVJfUEk6IE0uUEkgLyA0LFxuXG4gICAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiggbWluLCBtYXggKSB7XG5cbiAgICAgICAgICAgIGlmICggaXNBcnJheSggbWluICkgKVxuXG4gICAgICAgICAgICAgIHJldHVybiBtaW5bIH5+KCBNLnJhbmRvbSgpICogbWluLmxlbmd0aCApIF07XG5cbiAgICAgICAgICAgIGlmICggIWlzTnVtYmVyKCBtYXggKSApXG5cbiAgICAgICAgICAgICAgbWF4ID0gbWluIHx8IDEsIG1pbiA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBtaW4gKyBNLnJhbmRvbSgpICogKCBtYXggLSBtaW4gKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbGVycDogZnVuY3Rpb24oIG1pbiwgbWF4LCBhbW91bnQgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtaW4gKyBhbW91bnQgKiAoIG1heCAtIG1pbiApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtYXA6IGZ1bmN0aW9uKCBudW0sIG1pbkEsIG1heEEsIG1pbkIsIG1heEIgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoIG51bSAtIG1pbkEgKSAvICggbWF4QSAtIG1pbkEgKSAqICggbWF4QiAtIG1pbkIgKSArIG1pbkI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZXh0WyBIQVNfU0tFVENIIF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG4gICAgICBvcHRpb25zID0gZXh0ZW5kKCBvcHRpb25zIHx8IHt9LCBkZWZhdWx0cyApO1xuXG4gICAgICBpZiAoIG9wdGlvbnMuZ2xvYmFscyApIFNrZXRjaC5pbnN0YWxsKCBzZWxmICk7XG5cbiAgICAgIGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQgfHwgZG9jLmNyZWF0ZUVsZW1lbnQoIG9wdGlvbnMudHlwZSA9PT0gRE9NID8gJ2RpdicgOiAnY2FudmFzJyApO1xuXG4gICAgICBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IChmdW5jdGlvbigpIHtcblxuICAgICAgICBzd2l0Y2goIG9wdGlvbnMudHlwZSApIHtcblxuICAgICAgICAgIGNhc2UgQ0FOVkFTOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRDb250ZXh0KCAnMmQnLCBvcHRpb25zICk7XG5cbiAgICAgICAgICBjYXNlIFdFQkdMOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRDb250ZXh0KCAnd2ViZ2wnLCBvcHRpb25zICkgfHwgZWxlbWVudC5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJywgb3B0aW9ucyApO1xuXG4gICAgICAgICAgY2FzZSBET006XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNhbnZhcyA9IGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgfSkoKTtcblxuICAgICAgKCBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2MuYm9keSApLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XG5cbiAgICAgIHJldHVybiBTa2V0Y2guYXVnbWVudCggY29udGV4dCwgb3B0aW9ucyApO1xuICAgIH0sXG5cbiAgICBhdWdtZW50OiBmdW5jdGlvbiggY29udGV4dCwgb3B0aW9ucyApIHtcblxuICAgICAgb3B0aW9ucyA9IGV4dGVuZCggb3B0aW9ucyB8fCB7fSwgZGVmYXVsdHMgKTtcblxuICAgICAgb3B0aW9ucy5lbGVtZW50ID0gY29udGV4dC5jYW52YXMgfHwgY29udGV4dDtcbiAgICAgIG9wdGlvbnMuZWxlbWVudC5jbGFzc05hbWUgKz0gJyBza2V0Y2gnO1xuXG4gICAgICBleHRlbmQoIGNvbnRleHQsIG9wdGlvbnMsIHRydWUgKTtcblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yKCBjb250ZXh0ICk7XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFNoaW1zXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciB2ZW5kb3JzID0gWyAnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJyBdO1xuICB2YXIgc2NvcGUgPSBzZWxmO1xuICB2YXIgdGhlbiA9IDA7XG5cbiAgdmFyIGEgPSAnQW5pbWF0aW9uRnJhbWUnO1xuICB2YXIgYiA9ICdyZXF1ZXN0JyArIGE7XG4gIHZhciBjID0gJ2NhbmNlbCcgKyBhO1xuXG4gIHZhciByQUYgPSBzY29wZVsgYiBdO1xuICB2YXIgY0FGID0gc2NvcGVbIGMgXTtcblxuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhckFGOyBpKysgKSB7XG5cbiAgICByQUYgPSBzY29wZVsgdmVuZG9yc1sgaSBdICsgJ1JlcXVlc3QnICsgYSBdO1xuICAgIGNBRiA9IHNjb3BlWyB2ZW5kb3JzWyBpIF0gKyAnQ2FuY2VsJyArIGEgXTtcbiAgfVxuXG4gIHNjb3BlWyBiIF0gPSByQUYgPSByQUYgfHwgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXG4gICAgdmFyIG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBkdCA9IE0ubWF4KCAwLCAxNiAtICggbm93IC0gdGhlbiApICk7XG4gICAgdmFyIGlkID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBjYWxsYmFjayggbm93ICsgZHQgKTtcbiAgICB9LCBkdCApO1xuXG4gICAgdGhlbiA9IG5vdyArIGR0O1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBzY29wZVsgYyBdID0gY0FGID0gY0FGIHx8IGZ1bmN0aW9uKCBpZCApIHtcbiAgICBjbGVhclRpbWVvdXQoIGlkICk7XG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgT3V0cHV0XG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHJldHVybiBTa2V0Y2g7XG5cbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvc2tldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGdsb2JhbCBXUEFTX0FQUCwgJCAqL1xucmVxdWlyZSgnLi4vc3R5bGVzL2luZGV4LnNjc3MnKTtcblxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAndHlwb2dyYXBoeSc7XG5pbXBvcnQgZG9lbGdlclRoZW1lIGZyb20gJ3R5cG9ncmFwaHktdGhlbWUtZG9lbGdlcic7XG5jb25zdCB0eXBvZ3JhcGh5ID0gbmV3IFR5cG9ncmFwaHkoZG9lbGdlclRoZW1lKTtcbnR5cG9ncmFwaHkuaW5qZWN0U3R5bGVzKCk7XG5cbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdXRpbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90b29sdGlwJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcbmltcG9ydCAnLi9wYWdlcy9hbGwuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzJztcbmltcG9ydCB7TWFrZVN0aWNreX0gZnJvbSAnLi9jb21tb24vc3RpY2t5LXRvZ2dsZS5qcyc7XG5pbXBvcnQge1NtYXJ0RmlsdGVyc30gZnJvbSAnLi9jb21tb24vc21hcnQtZmlsdGVycy5qcyc7XG5pbXBvcnQgbG9hZFZpZGVvIGZyb20gXCIuL2NvbW1vbi9yZXNwb25zaXZlLXZpZGVvXCI7XG5cbmNvbnNvbGUubG9nKFdQQVNfQVBQKTtcbldQQVNfQVBQLmxvYWRWaWRlbyA9IGxvYWRWaWRlbztcbi8qKlxuICogSE9NRVxuKiovXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdob21lJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdpbmljaW8nKXtcbiAgXG4gIC8vbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL2hvbWUtZGFyay5tcDQnKTtcbiAgalF1ZXJ5KCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICAkKCcudmFsdWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICBcdHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XG4gIFx0JCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3dpZHRoJywgdGV4dCk7XG4gIH0pO1xuICAkKCcuYmxvY2snKS50b29sdGlwKCk7XG4gIFxuICB2YXIgZmlyZXdvcmtzID0gcmVxdWlyZSgnLi9saWIvZmlyZXdvcmtzLmpzJyk7XG4gIHZhciBjYW52YXNCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubWFzdGhlYWQnICk7XG4gIGZpcmV3b3JrcyhjYW52YXNCZyk7XG59XG5cbi8qKlxuICogVEhFIFBST0dSQU1cbioqL1xuXG5pZihbJ3BhZ2UtdGhlLXByb2dyYW0nLCdzaW5nbGUtZnVsbC1zdGFjay1wYXJ0LXRpbWUnLCdzaW5nbGUtZnVsbC1zdGFjaycsJ3NpbmdsZS13ZWItZGV2ZWxvcG1lbnQnLCdzaW5nbGUtY29kaW5nLWludHJvJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSE9IC0xKXtcbiAgXG4gIHZhciBiYXJCcmVha3BvaW50ID0gJCgnI2Jhci1icmVha3BvaW50Jyk7XG4gIGlmKCFiYXJCcmVha3BvaW50KSB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIGJyZWF0aGVwb2ludCBlc3RhYmxpc2hlZCBmb3IgdGhlIGJhcicpO1xuICBcbiAgdmFyIG1heFN0aWNrUG9zaXRpb24gPSBiYXJCcmVha3BvaW50Lm9mZnNldCgpLnRvcDtcbiAgTWFrZVN0aWNreS5pbml0KCdbZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl0nLCBtYXhTdGlja1Bvc2l0aW9uLCAyMCk7XG4gIFxuICAvL3NjcmlwdCBmb3IgdGhlIHNsaWRlciBjYWxjdWxhdG9yXG4gIHZhciBQcmljZUNhbGN1bGF0b3IgPSByZXF1aXJlKCcuL2xpYi9wcmljZUNhbGN1bGF0b3IuanMnKS5kZWZhdWx0O1xuICBjb25zdCBQUklDRVMgPSByZXF1aXJlKCcuL2NvbW1vbi9wcmljZXMuanMnKS5kZWZhdWx0O1xuICBcbiAgaWYoV1BBU19BUFAudmlldy50ZW1wbGF0ZSA9PSAnc2luZ2xlLWZ1bGwtc3RhY2stcGFydC10aW1lJykgXG4gICAgUHJpY2VDYWxjdWxhdG9yKCcjcHJpY2luZycsUFJJQ0VTWydmdWxsLXN0YWNrLXBhcnQtdGltZSddKTtcbiAgICBcbiAgZWxzZSBpZiAoV1BBU19BUFAudmlldy50ZW1wbGF0ZSA9PSAgJ3NpbmdsZS1mdWxsLXN0YWNrJykgXG4gICAgUHJpY2VDYWxjdWxhdG9yKCcjcHJpY2luZycsUFJJQ0VTWydmdWxsLXN0YWNrLWZ1bGwtdGltZSddKTtcbiAgXG4gIC8vYW5pbWF0aW9uIGZvciB0aGUgcHJvZ3JhbVxuICB2YXIgVGhlUHJvZ3JhbSA9IHJlcXVpcmUoJy4vcGFnZXMvcHJvZ3JhbS5qcycpLmRlZmF1bHQ7XG4gIFRoZVByb2dyYW0uaW5pdCgpO1xuICBcbn1cblxuXG5cblxuLyoqXG4gKiBQUklDSU5HXG4qKi9cblxuaWYoV1BBU19BUFAudmlldy5zbHVnID09PSAncHJpY2luZycgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAncHJlY2lvJyl7XG4gIFxuICBsb2FkVmlkZW8oJy93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9hc3NldHMvdmlkZW8vcHJpY2luZy5tcDQnKTtcbiAgXG4gIC8vc2NyaXB0IGZvciB0aGUgc2xpZGVyIGNhbGN1bGF0b3JcbiAgdmFyIHByaWNlQ2FsY3VsYXRvciA9IHJlcXVpcmUoJy4vbGliL3ByaWNlQ2FsY3VsYXRvci5qcycpO1xuICBcbiAgdmFyIGZpcmV3b3JrcyA9IHJlcXVpcmUoJy4vbGliL2ZpcmV3b3Jrcy5qcycpO1xuICB2YXIgY2FudmFzQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2JnLXNrZXRjaCcgKTtcbiAgZmlyZXdvcmtzKGNhbnZhc0JnKTtcblxufVxuXG4vKipcbiAqIENBTEVOREFSXG4qKi9cblxuaWYoV1BBU19BUFAudmlldy5zbHVnID09PSAnY2FsZW5kYXInIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2NhbGVuZGFyaW8nKXtcblxuICBTbWFydEZpbHRlcnMuaW5pdCh7XG4gICAgbG9hZGluZ0FuaW1hdGlvbjogJy5jb3Vyc2VzIC5sb2FkaW5nLWFuaW1hdGlvbicsXG4gICAgcmVzdWx0c0NvbnRhaW5lcjogJy5jb3Vyc2VzIC5saXN0LWdyb3VwJyxcbiAgICBmaWx0ZXJEcm9wZG93bjogJy5kcm9wZG93bi1maWx0ZXIgYScsXG4gICAgZmlsdGVyczogW1xuICAgICAgeyBidXR0b246ICcjbG9jYXRpb25TZWxlY3RvcicsIHVybEtleTogJ2wnLCBvcHRpb25zOiAnLmxvY2F0aW9uLW9wdGlvbicgfSxcbiAgICAgIHsgYnV0dG9uOiAnI2xhbmdTZWxlY3RvcicsIHVybEtleTogJ2xhbmcnLCBvcHRpb25zOiAnLmxhbmctb3B0aW9uJ30sXG4gICAgICB7IGJ1dHRvbjogJyN0eXBlU2VsZWN0b3InLCB1cmxLZXk6ICd0eXBlJywgb3B0aW9uczogJy50eXBlLW9wdGlvbid9XG4gICAgXVxuICB9KTtcbiAgXG4gIE1ha2VTdGlja3kuaW5pdCgnW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdJywgNDAwMCk7XG4gICAgXG59XG5cbi8qKlxuICogTE9DQVRJT05cbioqL1xuXG5pZihbJ3NpbmdsZS1sb2NhdGlvbiddLmluZGV4T2YoV1BBU19BUFAudmlldy50ZW1wbGF0ZSkgIT0gLTEpe1xuICByZXF1aXJlKCcuL3BhZ2VzL2xvY2F0aW9uLmpzJyk7XG59XG5cbi8qKlxuICogUEFSVE5FUlNcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdwYXJ0bmVycycgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAnc29jaW9zJyl7XG4gIFxuICBqUXVlcnkoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gIGxvYWRWaWRlbygnL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L2Fzc2V0cy92aWRlby9vZmZpY2UubXA0Jyx7b3ZlcmxheTogJ2JsYWNrJ30pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0PU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LHI9T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTt2YXIgbixvLGk9ZnVuY3Rpb24oKXt0cnl7aWYoIU9iamVjdC5hc3NpZ24pcmV0dXJuITE7dmFyIHQ9bmV3IFN0cmluZyhcImFiY1wiKTtpZih0WzVdPVwiZGVcIixcIjVcIj09PU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpWzBdKXJldHVybiExO2Zvcih2YXIgZT17fSxyPTA7cjwxMDtyKyspZVtcIl9cIitTdHJpbmcuZnJvbUNoYXJDb2RlKHIpXT1yO2lmKFwiMDEyMzQ1Njc4OVwiIT09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfSkuam9pbihcIlwiKSlyZXR1cm4hMTt2YXIgbj17fTtyZXR1cm5cImFiY2RlZmdoaWprbG1ub3BxcnN0XCIuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbih0KXtuW3RdPXR9KSxcImFiY2RlZmdoaWprbG1ub3BxcnN0XCI9PT1PYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LG4pKS5qb2luKFwiXCIpfWNhdGNoKHQpe3JldHVybiExfX0oKT9PYmplY3QuYXNzaWduOmZ1bmN0aW9uKG4sbyl7Zm9yKHZhciBpLGEsdT1mdW5jdGlvbih0KXtpZihudWxsPT09dHx8dm9pZCAwPT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWRcIik7cmV0dXJuIE9iamVjdCh0KX0obiksYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspe2Zvcih2YXIgbCBpbiBpPU9iamVjdChhcmd1bWVudHNbY10pKWUuY2FsbChpLGwpJiYodVtsXT1pW2xdKTtpZih0KXthPXQoaSk7Zm9yKHZhciBmPTA7ZjxhLmxlbmd0aDtmKyspci5jYWxsKGksYVtmXSkmJih1W2FbZl1dPWlbYVtmXV0pfX1yZXR1cm4gdX0sYT1mdW5jdGlvbih0LGUpe2V8fChlPVswLFwiXCJdKSx0PVN0cmluZyh0KTt2YXIgcj1wYXJzZUZsb2F0KHQsMTApO3JldHVybiBlWzBdPXIsZVsxXT10Lm1hdGNoKC9bXFxkLlxcLVxcK10qXFxzKiguKikvKVsxXXx8XCJcIixlfSx1PWZ1bmN0aW9uKHQpe3JldHVybiBhKHQpWzBdfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10JiYodD10KSxmdW5jdGlvbihlLHIsbixvKXtudWxsPT1uJiYobj10KSxudWxsPT1vJiYobz1uKTt2YXIgaT1hKGUpWzFdO2lmKGk9PT1yKXJldHVybiBlO3ZhciBjPXUoZSk7aWYoXCJweFwiIT09aSlpZihcImVtXCI9PT1pKWM9dShlKSp1KG4pO2Vsc2UgaWYoXCJyZW1cIj09PWkpYz11KGUpKnUodCk7ZWxzZXtpZihcImV4XCIhPT1pKXJldHVybiBlO2M9dShlKSp1KG4pKjJ9dmFyIGw9YztpZihcInB4XCIhPT1yKWlmKFwiZW1cIj09PXIpbD1jL3Uobyk7ZWxzZSBpZihcInJlbVwiPT09cilsPWMvdSh0KTtlbHNle2lmKFwiZXhcIiE9PXIpcmV0dXJuIGU7bD1jL3UobykvMn1yZXR1cm4gcGFyc2VGbG9hdChsLnRvRml4ZWQoNSkpK3J9fSxsPWEsZj1mdW5jdGlvbih0KXtyZXR1cm4gbCh0KVsxXX0scz1mdW5jdGlvbih0KXtyZXR1cm4gbCh0KVswXX0scD17YmFzZUZvbnRTaXplOlwiMTZweFwiLGJhc2VMaW5lSGVpZ2h0OjEuNSxyaHl0aG1Vbml0OlwicmVtXCIsZGVmYXVsdFJoeXRobUJvcmRlcldpZHRoOlwiMXB4XCIsZGVmYXVsdFJoeXRobUJvcmRlclN0eWxlOlwic29saWRcIixyb3VuZFRvTmVhcmVzdEhhbGZMaW5lOiEwLG1pbkxpbmVQYWRkaW5nOlwiMnB4XCJ9LHY9ZnVuY3Rpb24odCxlKXt2YXIgcixuPWMoZS5iYXNlRm9udFNpemUpLG89cyhuKHQsXCJweFwiKSksaT1zKGUuYmFzZUxpbmVIZWlnaHRJblB4KSxhPXMobihlLm1pbkxpbmVQYWRkaW5nLFwicHhcIikpO3JldHVybihyPWUucm91bmRUb05lYXJlc3RIYWxmTGluZT9NYXRoLmNlaWwoMipvL2kpLzI6TWF0aC5jZWlsKG8vaSkpKmktbzwyKmEmJihyKz1lLnJvdW5kVG9OZWFyZXN0SGFsZkxpbmU/LjU6MSkscn0saD1mdW5jdGlvbih0KXt2YXIgZT1jKHQuYmFzZUZvbnRTaXplKTtyZXR1cm4gZnVuY3Rpb24ocixuLG8pe251bGw9PXImJihyPTEpLG51bGw9PW4mJihuPXQuYmFzZUZvbnRTaXplKSxudWxsPT1vJiYobz0wKTt2YXIgaT1yKnModC5iYXNlTGluZUhlaWdodEluUHgpLW8rXCJweFwiLGE9ZShpLHQucmh5dGhtVW5pdCxuKTtyZXR1cm5cInB4XCI9PT1mKGEpJiYoYT1NYXRoLmZsb29yKHMoYSkpK2YoYSkpLHBhcnNlRmxvYXQocyhhKS50b0ZpeGVkKDUpKStmKGEpfX0sZD1cIltvYmplY3QgTnVtYmVyXVwiLGI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztuPWZ1bmN0aW9uKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0fHxmdW5jdGlvbih0KXtyZXR1cm4hIXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0fSh0KSYmYi5jYWxsKHQpPT1kfSxvPXtcIm1pbm9yIHNlY29uZFwiOjE2LzE1LFwibWFqb3Igc2Vjb25kXCI6OS84LFwibWlub3IgdGhpcmRcIjoxLjIsXCJtYWpvciB0aGlyZFwiOjQvMyxcImRpbWluaXNoZWQgZm91cnRoXCI6TWF0aC5zcXJ0KDIpLFwicGVyZmVjdCBmaWZ0aFwiOjEuNSxcIm1pbm9yIHNpeHRoXCI6MS42LGdvbGRlbjoxLjYxODAzMzk4ODc1LHBoaToxLjYxODAzMzk4ODc1LFwibWFqb3Igc2l4dGhcIjo1LzMsXCJtaW5vciBzZXZlbnRoXCI6MTYvOSxcIm1ham9yIHNldmVudGhcIjoxNS84LG9jdGF2ZToyLFwibWFqb3IgdGVudGhcIjoyLjUsXCJtYWpvciBlbGV2ZW50aFwiOjgvMyxcIm1ham9yIHR3ZWxmdGhcIjozLFwiZG91YmxlIG9jdGF2ZVwiOjR9O2Z1bmN0aW9uIGcodCl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQodCkpJiZpc0Zpbml0ZSh0KX12YXIgeT1mdW5jdGlvbih0LGUscil7aWYodm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09ciYmKHI9ITEpLFwiY29vbFwiPT09ZT9lPTIzNzpcInNsYXRlXCI9PT1lP2U9MTIyOlwid2FybVwiPT09ZSYmKGU9NjkpLCFnKGUpKXRocm93IG5ldyBFcnJvcihcIkh1ZSBpcyBub3QgYSBudW1iZXJcIik7aWYoIWcodCkpdGhyb3cgbmV3IEVycm9yKFwiTGlnaHRuZXNzIGlzIG5vdCBhIG51bWJlclwiKTt0PjEwMCYmKHQ9MTAwKSx0PDAmJih0PTApO3ZhciBuPTA7aWYoMCE9PWUpe249MTkuOTI5NzgrLS4zNjUxNzU5KnQrLjAwMTczNzIxNCpNYXRoLnBvdyh0LDIpfXZhciBvPTA7cmV0dXJuIHI/KG89dC8xMDAsdD1cIjEwMCUsXCIpOihvPSgxMDAtdCkvMTAwLHQ9XCIwJSxcIiksXCJoc2xhKFwiK2UrXCIsXCIrbitcIiUsXCIrdCtvK1wiKVwifSxtPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6e307ZnVuY3Rpb24gaih0LGUpe3JldHVybiB0KGU9e2V4cG9ydHM6e319LGUuZXhwb3J0cyksZS5leHBvcnRzfXZhciBfPVwib2JqZWN0XCI9PXR5cGVvZiBtJiZtJiZtLk9iamVjdD09PU9iamVjdCYmbSx3PVwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixPPV98fHd8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxTPU8uU3ltYm9sLHg9T2JqZWN0LnByb3RvdHlwZSx6PXguaGFzT3duUHJvcGVydHksRj14LnRvU3RyaW5nLGs9Uz9TLnRvU3RyaW5nVGFnOnZvaWQgMDt2YXIgQT1mdW5jdGlvbih0KXt2YXIgZT16LmNhbGwodCxrKSxyPXRba107dHJ5e3Rba109dm9pZCAwO3ZhciBuPSEwfWNhdGNoKHQpe312YXIgbz1GLmNhbGwodCk7cmV0dXJuIG4mJihlP3Rba109cjpkZWxldGUgdFtrXSksb30sTD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO3ZhciBQPWZ1bmN0aW9uKHQpe3JldHVybiBMLmNhbGwodCl9LEI9XCJbb2JqZWN0IE51bGxdXCIsVD1cIltvYmplY3QgVW5kZWZpbmVkXVwiLE09Uz9TLnRvU3RyaW5nVGFnOnZvaWQgMDt2YXIgRT1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD92b2lkIDA9PT10P1Q6QjpNJiZNIGluIE9iamVjdCh0KT9BKHQpOlAodCl9O3ZhciBIPWZ1bmN0aW9uKHQpe3ZhciBlPXR5cGVvZiB0O3JldHVybiBudWxsIT10JiYoXCJvYmplY3RcIj09ZXx8XCJmdW5jdGlvblwiPT1lKX0sTj1cIltvYmplY3QgQXN5bmNGdW5jdGlvbl1cIixXPVwiW29iamVjdCBGdW5jdGlvbl1cIixJPVwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIixDPVwiW29iamVjdCBQcm94eV1cIjt2YXIgUiwkPWZ1bmN0aW9uKHQpe2lmKCFIKHQpKXJldHVybiExO3ZhciBlPUUodCk7cmV0dXJuIGU9PVd8fGU9PUl8fGU9PU58fGU9PUN9LFU9T1tcIl9fY29yZS1qc19zaGFyZWRfX1wiXSxEPShSPS9bXi5dKyQvLmV4ZWMoVSYmVS5rZXlzJiZVLmtleXMuSUVfUFJPVE98fFwiXCIpKT9cIlN5bWJvbChzcmMpXzEuXCIrUjpcIlwiO3ZhciBxPWZ1bmN0aW9uKHQpe3JldHVybiEhRCYmRCBpbiB0fSxWPUZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZzt2YXIgSj1mdW5jdGlvbih0KXtpZihudWxsIT10KXt0cnl7cmV0dXJuIFYuY2FsbCh0KX1jYXRjaCh0KXt9dHJ5e3JldHVybiB0K1wiXCJ9Y2F0Y2godCl7fX1yZXR1cm5cIlwifSxaPS9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC8sRz1GdW5jdGlvbi5wcm90b3R5cGUsSz1PYmplY3QucHJvdG90eXBlLFk9UmVnRXhwKFwiXlwiK0cudG9TdHJpbmcuY2FsbChLLmhhc093blByb3BlcnR5KS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpO3ZhciBRPWZ1bmN0aW9uKHQpe3JldHVybiEoIUgodCl8fHEodCkpJiYoJCh0KT9ZOlopLnRlc3QoSih0KSl9O3ZhciBYPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGw9PXQ/dm9pZCAwOnRbZV19O3ZhciB0dD1mdW5jdGlvbih0LGUpe3ZhciByPVgodCxlKTtyZXR1cm4gUShyKT9yOnZvaWQgMH0sZXQ9ZnVuY3Rpb24oKXt0cnl7dmFyIHQ9dHQoT2JqZWN0LFwiZGVmaW5lUHJvcGVydHlcIik7cmV0dXJuIHQoe30sXCJcIix7fSksdH1jYXRjaCh0KXt9fSgpO3ZhciBydD1mdW5jdGlvbih0LGUscil7XCJfX3Byb3RvX19cIj09ZSYmZXQ/ZXQodCxlLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpyLHdyaXRhYmxlOiEwfSk6dFtlXT1yfTt2YXIgbnQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdD09PWV8fHQhPXQmJmUhPWV9LG90PU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIGl0PWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj10W2VdO290LmNhbGwodCxlKSYmbnQobixyKSYmKHZvaWQgMCE9PXJ8fGUgaW4gdCl8fHJ0KHQsZSxyKX0sYXQ9QXJyYXkuaXNBcnJheTt2YXIgdXQ9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0fSxjdD1cIltvYmplY3QgU3ltYm9sXVwiO3ZhciBsdD1mdW5jdGlvbih0KXtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdHx8dXQodCkmJkUodCk9PWN0fSxmdD0vXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLHN0PS9eXFx3KiQvO3ZhciBwdD1mdW5jdGlvbih0LGUpe2lmKGF0KHQpKXJldHVybiExO3ZhciByPXR5cGVvZiB0O3JldHVybiEoXCJudW1iZXJcIiE9ciYmXCJzeW1ib2xcIiE9ciYmXCJib29sZWFuXCIhPXImJm51bGwhPXQmJiFsdCh0KSl8fHN0LnRlc3QodCl8fCFmdC50ZXN0KHQpfHxudWxsIT1lJiZ0IGluIE9iamVjdChlKX0sdnQ9dHQoT2JqZWN0LFwiY3JlYXRlXCIpO3ZhciBodD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmhhcyh0KSYmZGVsZXRlIHRoaXMuX19kYXRhX19bdF07cmV0dXJuIHRoaXMuc2l6ZS09ZT8xOjAsZX0sZHQ9XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCIsYnQ9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgZ3Q9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXztpZih2dCl7dmFyIHI9ZVt0XTtyZXR1cm4gcj09PWR0P3ZvaWQgMDpyfXJldHVybiBidC5jYWxsKGUsdCk/ZVt0XTp2b2lkIDB9LHl0PU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIG10PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHZ0P3ZvaWQgMCE9PWVbdF06eXQuY2FsbChlLHQpfSxqdD1cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIjt2YXIgX3Q9ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLl9fZGF0YV9fO3JldHVybiB0aGlzLnNpemUrPXRoaXMuaGFzKHQpPzA6MSxyW3RdPXZ0JiZ2b2lkIDA9PT1lP2p0OmUsdGhpc307ZnVuY3Rpb24gd3QodCl7dmFyIGU9LTEscj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8cjspe3ZhciBuPXRbZV07dGhpcy5zZXQoblswXSxuWzFdKX19d3QucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz12dD92dChudWxsKTp7fSx0aGlzLnNpemU9MH0sd3QucHJvdG90eXBlLmRlbGV0ZT1odCx3dC5wcm90b3R5cGUuZ2V0PWd0LHd0LnByb3RvdHlwZS5oYXM9bXQsd3QucHJvdG90eXBlLnNldD1fdDt2YXIgT3Q9d3Q7dmFyIFN0PWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPXQubGVuZ3RoO3ItLTspaWYobnQodFtyXVswXSxlKSlyZXR1cm4gcjtyZXR1cm4tMX0seHQ9QXJyYXkucHJvdG90eXBlLnNwbGljZTt2YXIgenQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXyxyPVN0KGUsdCk7cmV0dXJuIShyPDB8fChyPT1lLmxlbmd0aC0xP2UucG9wKCk6eHQuY2FsbChlLHIsMSksLS10aGlzLnNpemUsMCkpfTt2YXIgRnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fX2RhdGFfXyxyPVN0KGUsdCk7cmV0dXJuIHI8MD92b2lkIDA6ZVtyXVsxXX07dmFyIGt0PWZ1bmN0aW9uKHQpe3JldHVybiBTdCh0aGlzLl9fZGF0YV9fLHQpPi0xfTt2YXIgQXQ9ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzLl9fZGF0YV9fLG49U3Qocix0KTtyZXR1cm4gbjwwPygrK3RoaXMuc2l6ZSxyLnB1c2goW3QsZV0pKTpyW25dWzFdPWUsdGhpc307ZnVuY3Rpb24gTHQodCl7dmFyIGU9LTEscj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8cjspe3ZhciBuPXRbZV07dGhpcy5zZXQoblswXSxuWzFdKX19THQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz1bXSx0aGlzLnNpemU9MH0sTHQucHJvdG90eXBlLmRlbGV0ZT16dCxMdC5wcm90b3R5cGUuZ2V0PUZ0LEx0LnByb3RvdHlwZS5oYXM9a3QsTHQucHJvdG90eXBlLnNldD1BdDt2YXIgUHQ9THQsQnQ9dHQoTyxcIk1hcFwiKTt2YXIgVHQ9ZnVuY3Rpb24odCl7dmFyIGU9dHlwZW9mIHQ7cmV0dXJuXCJzdHJpbmdcIj09ZXx8XCJudW1iZXJcIj09ZXx8XCJzeW1ib2xcIj09ZXx8XCJib29sZWFuXCI9PWU/XCJfX3Byb3RvX19cIiE9PXQ6bnVsbD09PXR9O3ZhciBNdD1mdW5jdGlvbih0LGUpe3ZhciByPXQuX19kYXRhX187cmV0dXJuIFR0KGUpP3JbXCJzdHJpbmdcIj09dHlwZW9mIGU/XCJzdHJpbmdcIjpcImhhc2hcIl06ci5tYXB9O3ZhciBFdD1mdW5jdGlvbih0KXt2YXIgZT1NdCh0aGlzLHQpLmRlbGV0ZSh0KTtyZXR1cm4gdGhpcy5zaXplLT1lPzE6MCxlfTt2YXIgSHQ9ZnVuY3Rpb24odCl7cmV0dXJuIE10KHRoaXMsdCkuZ2V0KHQpfTt2YXIgTnQ9ZnVuY3Rpb24odCl7cmV0dXJuIE10KHRoaXMsdCkuaGFzKHQpfTt2YXIgV3Q9ZnVuY3Rpb24odCxlKXt2YXIgcj1NdCh0aGlzLHQpLG49ci5zaXplO3JldHVybiByLnNldCh0LGUpLHRoaXMuc2l6ZSs9ci5zaXplPT1uPzA6MSx0aGlzfTtmdW5jdGlvbiBJdCh0KXt2YXIgZT0tMSxyPW51bGw9PXQ/MDp0Lmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrZTxyOyl7dmFyIG49dFtlXTt0aGlzLnNldChuWzBdLG5bMV0pfX1JdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnNpemU9MCx0aGlzLl9fZGF0YV9fPXtoYXNoOm5ldyBPdCxtYXA6bmV3KEJ0fHxQdCksc3RyaW5nOm5ldyBPdH19LEl0LnByb3RvdHlwZS5kZWxldGU9RXQsSXQucHJvdG90eXBlLmdldD1IdCxJdC5wcm90b3R5cGUuaGFzPU50LEl0LnByb3RvdHlwZS5zZXQ9V3Q7dmFyIEN0PUl0LFJ0PVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiO2Z1bmN0aW9uICR0KHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8bnVsbCE9ZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKFJ0KTt2YXIgcj1mdW5jdGlvbigpe3ZhciBuPWFyZ3VtZW50cyxvPWU/ZS5hcHBseSh0aGlzLG4pOm5bMF0saT1yLmNhY2hlO2lmKGkuaGFzKG8pKXJldHVybiBpLmdldChvKTt2YXIgYT10LmFwcGx5KHRoaXMsbik7cmV0dXJuIHIuY2FjaGU9aS5zZXQobyxhKXx8aSxhfTtyZXR1cm4gci5jYWNoZT1uZXcoJHQuQ2FjaGV8fEN0KSxyfSR0LkNhY2hlPUN0O3ZhciBVdD0kdCxEdD01MDA7dmFyIHF0PS9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZyxWdD0vXFxcXChcXFxcKT8vZyxKdD1mdW5jdGlvbih0KXt2YXIgZT1VdCh0LGZ1bmN0aW9uKHQpe3JldHVybiByLnNpemU9PT1EdCYmci5jbGVhcigpLHR9KSxyPWUuY2FjaGU7cmV0dXJuIGV9KGZ1bmN0aW9uKHQpe3ZhciBlPVtdO3JldHVybiA0Nj09PXQuY2hhckNvZGVBdCgwKSYmZS5wdXNoKFwiXCIpLHQucmVwbGFjZShxdCxmdW5jdGlvbih0LHIsbixvKXtlLnB1c2gobj9vLnJlcGxhY2UoVnQsXCIkMVwiKTpyfHx0KX0pLGV9KTt2YXIgWnQ9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9LTEsbj1udWxsPT10PzA6dC5sZW5ndGgsbz1BcnJheShuKTsrK3I8bjspb1tyXT1lKHRbcl0scix0KTtyZXR1cm4gb30sR3Q9MS8wLEt0PVM/Uy5wcm90b3R5cGU6dm9pZCAwLFl0PUt0P0t0LnRvU3RyaW5nOnZvaWQgMDt2YXIgUXQ9ZnVuY3Rpb24gdChlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihhdChlKSlyZXR1cm4gWnQoZSx0KStcIlwiO2lmKGx0KGUpKXJldHVybiBZdD9ZdC5jYWxsKGUpOlwiXCI7dmFyIHI9ZStcIlwiO3JldHVyblwiMFwiPT1yJiYxL2U9PS1HdD9cIi0wXCI6cn07dmFyIFh0PWZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P1wiXCI6UXQodCl9O3ZhciB0ZT1mdW5jdGlvbih0LGUpe3JldHVybiBhdCh0KT90OnB0KHQsZSk/W3RdOkp0KFh0KHQpKX0sZWU9OTAwNzE5OTI1NDc0MDk5MSxyZT0vXig/OjB8WzEtOV1cXGQqKSQvO3ZhciBuZT1mdW5jdGlvbih0LGUpe3ZhciByPXR5cGVvZiB0O3JldHVybiEhKGU9bnVsbD09ZT9lZTplKSYmKFwibnVtYmVyXCI9PXJ8fFwic3ltYm9sXCIhPXImJnJlLnRlc3QodCkpJiZ0Pi0xJiZ0JTE9PTAmJnQ8ZX0sb2U9MS8wO3ZhciBpZT1mdW5jdGlvbih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdHx8bHQodCkpcmV0dXJuIHQ7dmFyIGU9dCtcIlwiO3JldHVyblwiMFwiPT1lJiYxL3Q9PS1vZT9cIi0wXCI6ZX07dmFyIGFlPWZ1bmN0aW9uKHQsZSxyLG4pe2lmKCFIKHQpKXJldHVybiB0O2Zvcih2YXIgbz0tMSxpPShlPXRlKGUsdCkpLmxlbmd0aCxhPWktMSx1PXQ7bnVsbCE9dSYmKytvPGk7KXt2YXIgYz1pZShlW29dKSxsPXI7aWYobyE9YSl7dmFyIGY9dVtjXTt2b2lkIDA9PT0obD1uP24oZixjLHUpOnZvaWQgMCkmJihsPUgoZik/ZjpuZShlW28rMV0pP1tdOnt9KX1pdCh1LGMsbCksdT11W2NdfXJldHVybiB0fTt2YXIgdWU9ZnVuY3Rpb24odCxlLHIpe3JldHVybiBudWxsPT10P3Q6YWUodCxlLHIpfTt2YXIgY2U9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9LTEsbj1udWxsPT10PzA6dC5sZW5ndGg7KytyPG4mJiExIT09ZSh0W3JdLHIsdCk7KTtyZXR1cm4gdH07dmFyIGxlPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIsbil7Zm9yKHZhciBvPS0xLGk9T2JqZWN0KGUpLGE9bihlKSx1PWEubGVuZ3RoO3UtLTspe3ZhciBjPWFbdD91Oisrb107aWYoITE9PT1yKGlbY10sYyxpKSlicmVha31yZXR1cm4gZX19KCk7dmFyIGZlPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPS0xLG49QXJyYXkodCk7KytyPHQ7KW5bcl09ZShyKTtyZXR1cm4gbn0sc2U9XCJbb2JqZWN0IEFyZ3VtZW50c11cIjt2YXIgcGU9ZnVuY3Rpb24odCl7cmV0dXJuIHV0KHQpJiZFKHQpPT1zZX0sdmU9T2JqZWN0LnByb3RvdHlwZSxoZT12ZS5oYXNPd25Qcm9wZXJ0eSxkZT12ZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxiZT1wZShmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpP3BlOmZ1bmN0aW9uKHQpe3JldHVybiB1dCh0KSYmaGUuY2FsbCh0LFwiY2FsbGVlXCIpJiYhZGUuY2FsbCh0LFwiY2FsbGVlXCIpfTt2YXIgZ2U9ZnVuY3Rpb24oKXtyZXR1cm4hMX0seWU9aihmdW5jdGlvbih0LGUpe3ZhciByPWUmJiFlLm5vZGVUeXBlJiZlLG49ciYmdCYmIXQubm9kZVR5cGUmJnQsbz1uJiZuLmV4cG9ydHM9PT1yP08uQnVmZmVyOnZvaWQgMDt0LmV4cG9ydHM9KG8/by5pc0J1ZmZlcjp2b2lkIDApfHxnZX0pLG1lPTkwMDcxOTkyNTQ3NDA5OTE7dmFyIGplPWZ1bmN0aW9uKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0Pi0xJiZ0JTE9PTAmJnQ8PW1lfSxfZT17fTtfZVtcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiXT1fZVtcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT1fZVtcIltvYmplY3QgSW50OEFycmF5XVwiXT1fZVtcIltvYmplY3QgSW50MTZBcnJheV1cIl09X2VbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPV9lW1wiW29iamVjdCBVaW50OEFycmF5XVwiXT1fZVtcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCJdPV9lW1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09X2VbXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiXT0hMCxfZVtcIltvYmplY3QgQXJndW1lbnRzXVwiXT1fZVtcIltvYmplY3QgQXJyYXldXCJdPV9lW1wiW29iamVjdCBBcnJheUJ1ZmZlcl1cIl09X2VbXCJbb2JqZWN0IEJvb2xlYW5dXCJdPV9lW1wiW29iamVjdCBEYXRhVmlld11cIl09X2VbXCJbb2JqZWN0IERhdGVdXCJdPV9lW1wiW29iamVjdCBFcnJvcl1cIl09X2VbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT1fZVtcIltvYmplY3QgTWFwXVwiXT1fZVtcIltvYmplY3QgTnVtYmVyXVwiXT1fZVtcIltvYmplY3QgT2JqZWN0XVwiXT1fZVtcIltvYmplY3QgUmVnRXhwXVwiXT1fZVtcIltvYmplY3QgU2V0XVwiXT1fZVtcIltvYmplY3QgU3RyaW5nXVwiXT1fZVtcIltvYmplY3QgV2Vha01hcF1cIl09ITE7dmFyIHdlPWZ1bmN0aW9uKHQpe3JldHVybiB1dCh0KSYmamUodC5sZW5ndGgpJiYhIV9lW0UodCldfTt2YXIgT2U9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0KGUpfX0sU2U9aihmdW5jdGlvbih0LGUpe3ZhciByPWUmJiFlLm5vZGVUeXBlJiZlLG49ciYmdCYmIXQubm9kZVR5cGUmJnQsbz1uJiZuLmV4cG9ydHM9PT1yJiZfLnByb2Nlc3MsaT1mdW5jdGlvbigpe3RyeXt2YXIgdD1uJiZuLnJlcXVpcmUmJm4ucmVxdWlyZShcInV0aWxcIikudHlwZXM7cmV0dXJuIHR8fG8mJm8uYmluZGluZyYmby5iaW5kaW5nKFwidXRpbFwiKX1jYXRjaCh0KXt9fSgpO3QuZXhwb3J0cz1pfSkseGU9U2UmJlNlLmlzVHlwZWRBcnJheSx6ZT14ZT9PZSh4ZSk6d2UsRmU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIga2U9ZnVuY3Rpb24odCxlKXt2YXIgcj1hdCh0KSxuPSFyJiZiZSh0KSxvPSFyJiYhbiYmeWUodCksaT0hciYmIW4mJiFvJiZ6ZSh0KSxhPXJ8fG58fG98fGksdT1hP2ZlKHQubGVuZ3RoLFN0cmluZyk6W10sYz11Lmxlbmd0aDtmb3IodmFyIGwgaW4gdCkhZSYmIUZlLmNhbGwodCxsKXx8YSYmKFwibGVuZ3RoXCI9PWx8fG8mJihcIm9mZnNldFwiPT1sfHxcInBhcmVudFwiPT1sKXx8aSYmKFwiYnVmZmVyXCI9PWx8fFwiYnl0ZUxlbmd0aFwiPT1sfHxcImJ5dGVPZmZzZXRcIj09bCl8fG5lKGwsYykpfHx1LnB1c2gobCk7cmV0dXJuIHV9LEFlPU9iamVjdC5wcm90b3R5cGU7dmFyIExlPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuY29uc3RydWN0b3I7cmV0dXJuIHQ9PT0oXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5wcm90b3R5cGV8fEFlKX07dmFyIFBlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiB0KGUocikpfX0sQmU9UGUoT2JqZWN0LmtleXMsT2JqZWN0KSxUZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBNZT1mdW5jdGlvbih0KXtpZighTGUodCkpcmV0dXJuIEJlKHQpO3ZhciBlPVtdO2Zvcih2YXIgciBpbiBPYmplY3QodCkpVGUuY2FsbCh0LHIpJiZcImNvbnN0cnVjdG9yXCIhPXImJmUucHVzaChyKTtyZXR1cm4gZX07dmFyIEVlPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZqZSh0Lmxlbmd0aCkmJiEkKHQpfTt2YXIgSGU9ZnVuY3Rpb24odCl7cmV0dXJuIEVlKHQpP2tlKHQpOk1lKHQpfTt2YXIgTmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24ocixuKXtpZihudWxsPT1yKXJldHVybiByO2lmKCFFZShyKSlyZXR1cm4gdChyLG4pO2Zvcih2YXIgbz1yLmxlbmd0aCxpPWU/bzotMSxhPU9iamVjdChyKTsoZT9pLS06KytpPG8pJiYhMSE9PW4oYVtpXSxpLGEpOyk7cmV0dXJuIHJ9fShmdW5jdGlvbih0LGUpe3JldHVybiB0JiZsZSh0LGUsSGUpfSk7dmFyIFdlPWZ1bmN0aW9uKHQpe3JldHVybiB0fTt2YXIgSWU9ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90OldlfTt2YXIgQ2U9ZnVuY3Rpb24odCxlKXtyZXR1cm4oYXQodCk/Y2U6TmUpKHQsSWUoZSkpfSxSZT1cIltvYmplY3QgTnVtYmVyXVwiO3ZhciAkZT1mdW5jdGlvbih0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdHx8dXQodCkmJkUodCk9PVJlfSxVZT1cIltvYmplY3QgU3RyaW5nXVwiO3ZhciBEZT1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdHx8IWF0KHQpJiZ1dCh0KSYmRSh0KT09VWV9O3ZhciBxZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLl9fZGF0YV9fLHI9ZS5kZWxldGUodCk7cmV0dXJuIHRoaXMuc2l6ZT1lLnNpemUscn07dmFyIFZlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmdldCh0KX07dmFyIEplPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh0KX0sWmU9MjAwO3ZhciBHZT1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXMuX19kYXRhX187aWYociBpbnN0YW5jZW9mIFB0KXt2YXIgbj1yLl9fZGF0YV9fO2lmKCFCdHx8bi5sZW5ndGg8WmUtMSlyZXR1cm4gbi5wdXNoKFt0LGVdKSx0aGlzLnNpemU9KytyLnNpemUsdGhpcztyPXRoaXMuX19kYXRhX189bmV3IEN0KG4pfXJldHVybiByLnNldCh0LGUpLHRoaXMuc2l6ZT1yLnNpemUsdGhpc307ZnVuY3Rpb24gS2UodCl7dmFyIGU9dGhpcy5fX2RhdGFfXz1uZXcgUHQodCk7dGhpcy5zaXplPWUuc2l6ZX1LZS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPW5ldyBQdCx0aGlzLnNpemU9MH0sS2UucHJvdG90eXBlLmRlbGV0ZT1xZSxLZS5wcm90b3R5cGUuZ2V0PVZlLEtlLnByb3RvdHlwZS5oYXM9SmUsS2UucHJvdG90eXBlLnNldD1HZTt2YXIgWWU9S2U7dmFyIFFlPWZ1bmN0aW9uKHQsZSxyKXsodm9pZCAwPT09cnx8bnQodFtlXSxyKSkmJih2b2lkIDAhPT1yfHxlIGluIHQpfHxydCh0LGUscil9LFhlPWooZnVuY3Rpb24odCxlKXt2YXIgcj1lJiYhZS5ub2RlVHlwZSYmZSxuPXImJnQmJiF0Lm5vZGVUeXBlJiZ0LG89biYmbi5leHBvcnRzPT09cj9PLkJ1ZmZlcjp2b2lkIDAsaT1vP28uYWxsb2NVbnNhZmU6dm9pZCAwO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2lmKGUpcmV0dXJuIHQuc2xpY2UoKTt2YXIgcj10Lmxlbmd0aCxuPWk/aShyKTpuZXcgdC5jb25zdHJ1Y3RvcihyKTtyZXR1cm4gdC5jb3B5KG4pLG59fSksdHI9Ty5VaW50OEFycmF5O3ZhciBlcj1mdW5jdGlvbih0KXt2YXIgZT1uZXcgdC5jb25zdHJ1Y3Rvcih0LmJ5dGVMZW5ndGgpO3JldHVybiBuZXcgdHIoZSkuc2V0KG5ldyB0cih0KSksZX07dmFyIHJyPWZ1bmN0aW9uKHQsZSl7dmFyIHI9ZT9lcih0LmJ1ZmZlcik6dC5idWZmZXI7cmV0dXJuIG5ldyB0LmNvbnN0cnVjdG9yKHIsdC5ieXRlT2Zmc2V0LHQubGVuZ3RoKX07dmFyIG5yPWZ1bmN0aW9uKHQsZSl7dmFyIHI9LTEsbj10Lmxlbmd0aDtmb3IoZXx8KGU9QXJyYXkobikpOysrcjxuOyllW3JdPXRbcl07cmV0dXJuIGV9LG9yPU9iamVjdC5jcmVhdGUsaXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiBmdW5jdGlvbihlKXtpZighSChlKSlyZXR1cm57fTtpZihvcilyZXR1cm4gb3IoZSk7dC5wcm90b3R5cGU9ZTt2YXIgcj1uZXcgdDtyZXR1cm4gdC5wcm90b3R5cGU9dm9pZCAwLHJ9fSgpLGFyPVBlKE9iamVjdC5nZXRQcm90b3R5cGVPZixPYmplY3QpO3ZhciB1cj1mdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiB0LmNvbnN0cnVjdG9yfHxMZSh0KT97fTppcihhcih0KSl9O3ZhciBjcj1mdW5jdGlvbih0KXtyZXR1cm4gdXQodCkmJkVlKHQpfSxscj1cIltvYmplY3QgT2JqZWN0XVwiLGZyPUZ1bmN0aW9uLnByb3RvdHlwZSxzcj1PYmplY3QucHJvdG90eXBlLHByPWZyLnRvU3RyaW5nLHZyPXNyLmhhc093blByb3BlcnR5LGhyPXByLmNhbGwoT2JqZWN0KTt2YXIgZHI9ZnVuY3Rpb24odCl7aWYoIXV0KHQpfHxFKHQpIT1scilyZXR1cm4hMTt2YXIgZT1hcih0KTtpZihudWxsPT09ZSlyZXR1cm4hMDt2YXIgcj12ci5jYWxsKGUsXCJjb25zdHJ1Y3RvclwiKSYmZS5jb25zdHJ1Y3RvcjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZyIGluc3RhbmNlb2YgciYmcHIuY2FsbChyKT09aHJ9O3ZhciBicj1mdW5jdGlvbih0LGUpe3JldHVyblwiX19wcm90b19fXCI9PWU/dm9pZCAwOnRbZV19O3ZhciBncj1mdW5jdGlvbih0LGUscixuKXt2YXIgbz0hcjtyfHwocj17fSk7Zm9yKHZhciBpPS0xLGE9ZS5sZW5ndGg7KytpPGE7KXt2YXIgdT1lW2ldLGM9bj9uKHJbdV0sdFt1XSx1LHIsdCk6dm9pZCAwO3ZvaWQgMD09PWMmJihjPXRbdV0pLG8/cnQocix1LGMpOml0KHIsdSxjKX1yZXR1cm4gcn07dmFyIHlyPWZ1bmN0aW9uKHQpe3ZhciBlPVtdO2lmKG51bGwhPXQpZm9yKHZhciByIGluIE9iamVjdCh0KSllLnB1c2gocik7cmV0dXJuIGV9LG1yPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIGpyPWZ1bmN0aW9uKHQpe2lmKCFIKHQpKXJldHVybiB5cih0KTt2YXIgZT1MZSh0KSxyPVtdO2Zvcih2YXIgbiBpbiB0KShcImNvbnN0cnVjdG9yXCIhPW58fCFlJiZtci5jYWxsKHQsbikpJiZyLnB1c2gobik7cmV0dXJuIHJ9O3ZhciBfcj1mdW5jdGlvbih0KXtyZXR1cm4gRWUodCk/a2UodCwhMCk6anIodCl9O3ZhciB3cj1mdW5jdGlvbih0KXtyZXR1cm4gZ3IodCxfcih0KSl9O3ZhciBPcj1mdW5jdGlvbih0LGUscixuLG8saSxhKXt2YXIgdT1icih0LHIpLGM9YnIoZSxyKSxsPWEuZ2V0KGMpO2lmKGwpUWUodCxyLGwpO2Vsc2V7dmFyIGY9aT9pKHUsYyxyK1wiXCIsdCxlLGEpOnZvaWQgMCxzPXZvaWQgMD09PWY7aWYocyl7dmFyIHA9YXQoYyksdj0hcCYmeWUoYyksaD0hcCYmIXYmJnplKGMpO2Y9YyxwfHx2fHxoP2F0KHUpP2Y9dTpjcih1KT9mPW5yKHUpOnY/KHM9ITEsZj1YZShjLCEwKSk6aD8ocz0hMSxmPXJyKGMsITApKTpmPVtdOmRyKGMpfHxiZShjKT8oZj11LGJlKHUpP2Y9d3IodSk6KCFIKHUpfHxuJiYkKHUpKSYmKGY9dXIoYykpKTpzPSExfXMmJihhLnNldChjLGYpLG8oZixjLG4saSxhKSxhLmRlbGV0ZShjKSksUWUodCxyLGYpfX07dmFyIFNyPWZ1bmN0aW9uIHQoZSxyLG4sbyxpKXtlIT09ciYmbGUocixmdW5jdGlvbihhLHUpe2lmKEgoYSkpaXx8KGk9bmV3IFllKSxPcihlLHIsdSxuLHQsbyxpKTtlbHNle3ZhciBjPW8/byhicihlLHUpLGEsdStcIlwiLGUscixpKTp2b2lkIDA7dm9pZCAwPT09YyYmKGM9YSksUWUoZSx1LGMpfX0sX3IpfTt2YXIgeHI9ZnVuY3Rpb24odCxlLHIpe3N3aXRjaChyLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0LmNhbGwoZSk7Y2FzZSAxOnJldHVybiB0LmNhbGwoZSxyWzBdKTtjYXNlIDI6cmV0dXJuIHQuY2FsbChlLHJbMF0sclsxXSk7Y2FzZSAzOnJldHVybiB0LmNhbGwoZSxyWzBdLHJbMV0sclsyXSl9cmV0dXJuIHQuYXBwbHkoZSxyKX0senI9TWF0aC5tYXg7dmFyIEZyPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gZT16cih2b2lkIDA9PT1lP3QubGVuZ3RoLTE6ZSwwKSxmdW5jdGlvbigpe2Zvcih2YXIgbj1hcmd1bWVudHMsbz0tMSxpPXpyKG4ubGVuZ3RoLWUsMCksYT1BcnJheShpKTsrK288aTspYVtvXT1uW2Urb107bz0tMTtmb3IodmFyIHU9QXJyYXkoZSsxKTsrK288ZTspdVtvXT1uW29dO3JldHVybiB1W2VdPXIoYSkseHIodCx0aGlzLHUpfX07dmFyIGtyPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0fX0sQXI9ODAwLExyPTE2LFByPURhdGUubm93O3ZhciBCcj1mdW5jdGlvbih0KXt2YXIgZT0wLHI9MDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1QcigpLG89THItKG4tcik7aWYocj1uLG8+MCl7aWYoKytlPj1BcilyZXR1cm4gYXJndW1lbnRzWzBdfWVsc2UgZT0wO3JldHVybiB0LmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpfX0oZXQ/ZnVuY3Rpb24odCxlKXtyZXR1cm4gZXQodCxcInRvU3RyaW5nXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOmtyKGUpLHdyaXRhYmxlOiEwfSl9OldlKTt2YXIgVHI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gQnIoRnIodCxlLFdlKSx0K1wiXCIpfTt2YXIgTXI9ZnVuY3Rpb24odCxlLHIpe2lmKCFIKHIpKXJldHVybiExO3ZhciBuPXR5cGVvZiBlO3JldHVybiEhKFwibnVtYmVyXCI9PW4/RWUocikmJm5lKGUsci5sZW5ndGgpOlwic3RyaW5nXCI9PW4mJmUgaW4gcikmJm50KHJbZV0sdCl9O3ZhciBFcj1mdW5jdGlvbih0KXtyZXR1cm4gVHIoZnVuY3Rpb24oZSxyKXt2YXIgbj0tMSxvPXIubGVuZ3RoLGk9bz4xP3Jbby0xXTp2b2lkIDAsYT1vPjI/clsyXTp2b2lkIDA7Zm9yKGk9dC5sZW5ndGg+MyYmXCJmdW5jdGlvblwiPT10eXBlb2YgaT8oby0tLGkpOnZvaWQgMCxhJiZNcihyWzBdLHJbMV0sYSkmJihpPW88Mz92b2lkIDA6aSxvPTEpLGU9T2JqZWN0KGUpOysrbjxvOyl7dmFyIHU9cltuXTt1JiZ0KGUsdSxuLGkpfXJldHVybiBlfSl9KGZ1bmN0aW9uKHQsZSxyKXtTcih0LGUscil9KTt2YXIgSHI9ZnVuY3Rpb24odCxlLHIsbil7dmFyIG89LTEsaT1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKG4mJmkmJihyPXRbKytvXSk7KytvPGk7KXI9ZShyLHRbb10sbyx0KTtyZXR1cm4gcn0sTnI9XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCI7dmFyIFdyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh0KX07ZnVuY3Rpb24gSXIodCl7dmFyIGU9LTEscj1udWxsPT10PzA6dC5sZW5ndGg7Zm9yKHRoaXMuX19kYXRhX189bmV3IEN0OysrZTxyOyl0aGlzLmFkZCh0W2VdKX1Jci5wcm90b3R5cGUuYWRkPUlyLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9fZGF0YV9fLnNldCh0LE5yKSx0aGlzfSxJci5wcm90b3R5cGUuaGFzPVdyO3ZhciBDcj1Jcjt2YXIgUnI9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9LTEsbj1udWxsPT10PzA6dC5sZW5ndGg7KytyPG47KWlmKGUodFtyXSxyLHQpKXJldHVybiEwO3JldHVybiExfTt2YXIgJHI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5oYXMoZSl9LFVyPTEsRHI9Mjt2YXIgcXI9ZnVuY3Rpb24odCxlLHIsbixvLGkpe3ZhciBhPXImVXIsdT10Lmxlbmd0aCxjPWUubGVuZ3RoO2lmKHUhPWMmJiEoYSYmYz51KSlyZXR1cm4hMTt2YXIgbD1pLmdldCh0KTtpZihsJiZpLmdldChlKSlyZXR1cm4gbD09ZTt2YXIgZj0tMSxzPSEwLHA9ciZEcj9uZXcgQ3I6dm9pZCAwO2ZvcihpLnNldCh0LGUpLGkuc2V0KGUsdCk7KytmPHU7KXt2YXIgdj10W2ZdLGg9ZVtmXTtpZihuKXZhciBkPWE/bihoLHYsZixlLHQsaSk6bih2LGgsZix0LGUsaSk7aWYodm9pZCAwIT09ZCl7aWYoZCljb250aW51ZTtzPSExO2JyZWFrfWlmKHApe2lmKCFScihlLGZ1bmN0aW9uKHQsZSl7aWYoISRyKHAsZSkmJih2PT09dHx8byh2LHQscixuLGkpKSlyZXR1cm4gcC5wdXNoKGUpfSkpe3M9ITE7YnJlYWt9fWVsc2UgaWYodiE9PWgmJiFvKHYsaCxyLG4saSkpe3M9ITE7YnJlYWt9fXJldHVybiBpLmRlbGV0ZSh0KSxpLmRlbGV0ZShlKSxzfTt2YXIgVnI9ZnVuY3Rpb24odCl7dmFyIGU9LTEscj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCxuKXtyWysrZV09W24sdF19KSxyfTt2YXIgSnI9ZnVuY3Rpb24odCl7dmFyIGU9LTEscj1BcnJheSh0LnNpemUpO3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24odCl7clsrK2VdPXR9KSxyfSxacj0xLEdyPTIsS3I9XCJbb2JqZWN0IEJvb2xlYW5dXCIsWXI9XCJbb2JqZWN0IERhdGVdXCIsUXI9XCJbb2JqZWN0IEVycm9yXVwiLFhyPVwiW29iamVjdCBNYXBdXCIsdG49XCJbb2JqZWN0IE51bWJlcl1cIixlbj1cIltvYmplY3QgUmVnRXhwXVwiLHJuPVwiW29iamVjdCBTZXRdXCIsbm49XCJbb2JqZWN0IFN0cmluZ11cIixvbj1cIltvYmplY3QgU3ltYm9sXVwiLGFuPVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIix1bj1cIltvYmplY3QgRGF0YVZpZXddXCIsY249Uz9TLnByb3RvdHlwZTp2b2lkIDAsbG49Y24/Y24udmFsdWVPZjp2b2lkIDA7dmFyIGZuPWZ1bmN0aW9uKHQsZSxyLG4sbyxpLGEpe3N3aXRjaChyKXtjYXNlIHVuOmlmKHQuYnl0ZUxlbmd0aCE9ZS5ieXRlTGVuZ3RofHx0LmJ5dGVPZmZzZXQhPWUuYnl0ZU9mZnNldClyZXR1cm4hMTt0PXQuYnVmZmVyLGU9ZS5idWZmZXI7Y2FzZSBhbjpyZXR1cm4hKHQuYnl0ZUxlbmd0aCE9ZS5ieXRlTGVuZ3RofHwhaShuZXcgdHIodCksbmV3IHRyKGUpKSk7Y2FzZSBLcjpjYXNlIFlyOmNhc2UgdG46cmV0dXJuIG50KCt0LCtlKTtjYXNlIFFyOnJldHVybiB0Lm5hbWU9PWUubmFtZSYmdC5tZXNzYWdlPT1lLm1lc3NhZ2U7Y2FzZSBlbjpjYXNlIG5uOnJldHVybiB0PT1lK1wiXCI7Y2FzZSBYcjp2YXIgdT1WcjtjYXNlIHJuOmlmKHV8fCh1PUpyKSx0LnNpemUhPWUuc2l6ZSYmIShuJlpyKSlyZXR1cm4hMTt2YXIgYz1hLmdldCh0KTtpZihjKXJldHVybiBjPT1lO258PUdyLGEuc2V0KHQsZSk7dmFyIGw9cXIodSh0KSx1KGUpLG4sbyxpLGEpO3JldHVybiBhLmRlbGV0ZSh0KSxsO2Nhc2Ugb246aWYobG4pcmV0dXJuIGxuLmNhbGwodCk9PWxuLmNhbGwoZSl9cmV0dXJuITF9O3ZhciBzbj1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj0tMSxuPWUubGVuZ3RoLG89dC5sZW5ndGg7KytyPG47KXRbbytyXT1lW3JdO3JldHVybiB0fTt2YXIgcG49ZnVuY3Rpb24odCxlLHIpe3ZhciBuPWUodCk7cmV0dXJuIGF0KHQpP246c24obixyKHQpKX07dmFyIHZuPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPS0xLG49bnVsbD09dD8wOnQubGVuZ3RoLG89MCxpPVtdOysrcjxuOyl7dmFyIGE9dFtyXTtlKGEscix0KSYmKGlbbysrXT1hKX1yZXR1cm4gaX07dmFyIGhuPU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUsZG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxibj1kbj9mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dD9bXToodD1PYmplY3QodCksdm4oZG4odCksZnVuY3Rpb24oZSl7cmV0dXJuIGhuLmNhbGwodCxlKX0pKX06ZnVuY3Rpb24oKXtyZXR1cm5bXX07dmFyIGduPWZ1bmN0aW9uKHQpe3JldHVybiBwbih0LEhlLGJuKX0seW49MSxtbj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBqbj1mdW5jdGlvbih0LGUscixuLG8saSl7dmFyIGE9ciZ5bix1PWduKHQpLGM9dS5sZW5ndGg7aWYoYyE9Z24oZSkubGVuZ3RoJiYhYSlyZXR1cm4hMTtmb3IodmFyIGw9YztsLS07KXt2YXIgZj11W2xdO2lmKCEoYT9mIGluIGU6bW4uY2FsbChlLGYpKSlyZXR1cm4hMX12YXIgcz1pLmdldCh0KTtpZihzJiZpLmdldChlKSlyZXR1cm4gcz09ZTt2YXIgcD0hMDtpLnNldCh0LGUpLGkuc2V0KGUsdCk7Zm9yKHZhciB2PWE7KytsPGM7KXt2YXIgaD10W2Y9dVtsXV0sZD1lW2ZdO2lmKG4pdmFyIGI9YT9uKGQsaCxmLGUsdCxpKTpuKGgsZCxmLHQsZSxpKTtpZighKHZvaWQgMD09PWI/aD09PWR8fG8oaCxkLHIsbixpKTpiKSl7cD0hMTticmVha312fHwodj1cImNvbnN0cnVjdG9yXCI9PWYpfWlmKHAmJiF2KXt2YXIgZz10LmNvbnN0cnVjdG9yLHk9ZS5jb25zdHJ1Y3RvcjtnIT15JiZcImNvbnN0cnVjdG9yXCJpbiB0JiZcImNvbnN0cnVjdG9yXCJpbiBlJiYhKFwiZnVuY3Rpb25cIj09dHlwZW9mIGcmJmcgaW5zdGFuY2VvZiBnJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB5JiZ5IGluc3RhbmNlb2YgeSkmJihwPSExKX1yZXR1cm4gaS5kZWxldGUodCksaS5kZWxldGUoZSkscH0sX249dHQoTyxcIkRhdGFWaWV3XCIpLHduPXR0KE8sXCJQcm9taXNlXCIpLE9uPXR0KE8sXCJTZXRcIiksU249dHQoTyxcIldlYWtNYXBcIikseG49Sihfbiksem49SihCdCksRm49Sih3biksa249SihPbiksQW49SihTbiksTG49RTsoX24mJlwiW29iamVjdCBEYXRhVmlld11cIiE9TG4obmV3IF9uKG5ldyBBcnJheUJ1ZmZlcigxKSkpfHxCdCYmXCJbb2JqZWN0IE1hcF1cIiE9TG4obmV3IEJ0KXx8d24mJlwiW29iamVjdCBQcm9taXNlXVwiIT1Mbih3bi5yZXNvbHZlKCkpfHxPbiYmXCJbb2JqZWN0IFNldF1cIiE9TG4obmV3IE9uKXx8U24mJlwiW29iamVjdCBXZWFrTWFwXVwiIT1MbihuZXcgU24pKSYmKExuPWZ1bmN0aW9uKHQpe3ZhciBlPUUodCkscj1cIltvYmplY3QgT2JqZWN0XVwiPT1lP3QuY29uc3RydWN0b3I6dm9pZCAwLG49cj9KKHIpOlwiXCI7aWYobilzd2l0Y2gobil7Y2FzZSB4bjpyZXR1cm5cIltvYmplY3QgRGF0YVZpZXddXCI7Y2FzZSB6bjpyZXR1cm5cIltvYmplY3QgTWFwXVwiO2Nhc2UgRm46cmV0dXJuXCJbb2JqZWN0IFByb21pc2VdXCI7Y2FzZSBrbjpyZXR1cm5cIltvYmplY3QgU2V0XVwiO2Nhc2UgQW46cmV0dXJuXCJbb2JqZWN0IFdlYWtNYXBdXCJ9cmV0dXJuIGV9KTt2YXIgUG49TG4sQm49MSxUbj1cIltvYmplY3QgQXJndW1lbnRzXVwiLE1uPVwiW29iamVjdCBBcnJheV1cIixFbj1cIltvYmplY3QgT2JqZWN0XVwiLEhuPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIE5uPWZ1bmN0aW9uKHQsZSxyLG4sbyxpKXt2YXIgYT1hdCh0KSx1PWF0KGUpLGM9YT9NbjpQbih0KSxsPXU/TW46UG4oZSksZj0oYz1jPT1Ubj9FbjpjKT09RW4scz0obD1sPT1Ubj9FbjpsKT09RW4scD1jPT1sO2lmKHAmJnllKHQpKXtpZigheWUoZSkpcmV0dXJuITE7YT0hMCxmPSExfWlmKHAmJiFmKXJldHVybiBpfHwoaT1uZXcgWWUpLGF8fHplKHQpP3FyKHQsZSxyLG4sbyxpKTpmbih0LGUsYyxyLG4sbyxpKTtpZighKHImQm4pKXt2YXIgdj1mJiZIbi5jYWxsKHQsXCJfX3dyYXBwZWRfX1wiKSxoPXMmJkhuLmNhbGwoZSxcIl9fd3JhcHBlZF9fXCIpO2lmKHZ8fGgpe3ZhciBkPXY/dC52YWx1ZSgpOnQsYj1oP2UudmFsdWUoKTplO3JldHVybiBpfHwoaT1uZXcgWWUpLG8oZCxiLHIsbixpKX19cmV0dXJuISFwJiYoaXx8KGk9bmV3IFllKSxqbih0LGUscixuLG8saSkpfTt2YXIgV249ZnVuY3Rpb24gdChlLHIsbixvLGkpe3JldHVybiBlPT09cnx8KG51bGw9PWV8fG51bGw9PXJ8fCF1dChlKSYmIXV0KHIpP2UhPWUmJnIhPXI6Tm4oZSxyLG4sbyx0LGkpKX0sSW49MSxDbj0yO3ZhciBSbj1mdW5jdGlvbih0LGUscixuKXt2YXIgbz1yLmxlbmd0aCxpPW8sYT0hbjtpZihudWxsPT10KXJldHVybiFpO2Zvcih0PU9iamVjdCh0KTtvLS07KXt2YXIgdT1yW29dO2lmKGEmJnVbMl0/dVsxXSE9PXRbdVswXV06ISh1WzBdaW4gdCkpcmV0dXJuITF9Zm9yKDsrK288aTspe3ZhciBjPSh1PXJbb10pWzBdLGw9dFtjXSxmPXVbMV07aWYoYSYmdVsyXSl7aWYodm9pZCAwPT09bCYmIShjIGluIHQpKXJldHVybiExfWVsc2V7dmFyIHM9bmV3IFllO2lmKG4pdmFyIHA9bihsLGYsYyx0LGUscyk7aWYoISh2b2lkIDA9PT1wP1duKGYsbCxJbnxDbixuLHMpOnApKXJldHVybiExfX1yZXR1cm4hMH07dmFyICRuPWZ1bmN0aW9uKHQpe3JldHVybiB0PT10JiYhSCh0KX07dmFyIFVuPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1IZSh0KSxyPWUubGVuZ3RoO3ItLTspe3ZhciBuPWVbcl0sbz10W25dO2Vbcl09W24sbywkbihvKV19cmV0dXJuIGV9O3ZhciBEbj1mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gbnVsbCE9ciYmclt0XT09PWUmJih2b2lkIDAhPT1lfHx0IGluIE9iamVjdChyKSl9fTt2YXIgcW49ZnVuY3Rpb24odCl7dmFyIGU9VW4odCk7cmV0dXJuIDE9PWUubGVuZ3RoJiZlWzBdWzJdP0RuKGVbMF1bMF0sZVswXVsxXSk6ZnVuY3Rpb24ocil7cmV0dXJuIHI9PT10fHxSbihyLHQsZSl9fTt2YXIgVm49ZnVuY3Rpb24odCxlKXtmb3IodmFyIHI9MCxuPShlPXRlKGUsdCkpLmxlbmd0aDtudWxsIT10JiZyPG47KXQ9dFtpZShlW3IrK10pXTtyZXR1cm4gciYmcj09bj90OnZvaWQgMH07dmFyIEpuPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1udWxsPT10P3ZvaWQgMDpWbih0LGUpO3JldHVybiB2b2lkIDA9PT1uP3I6bn07dmFyIFpuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGwhPXQmJmUgaW4gT2JqZWN0KHQpfTt2YXIgR249ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgbj0tMSxvPShlPXRlKGUsdCkpLmxlbmd0aCxpPSExOysrbjxvOyl7dmFyIGE9aWUoZVtuXSk7aWYoIShpPW51bGwhPXQmJnIodCxhKSkpYnJlYWs7dD10W2FdfXJldHVybiBpfHwrK24hPW8/aTohIShvPW51bGw9PXQ/MDp0Lmxlbmd0aCkmJmplKG8pJiZuZShhLG8pJiYoYXQodCl8fGJlKHQpKX07dmFyIEtuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGwhPXQmJkduKHQsZSxabil9LFluPTEsUW49Mjt2YXIgWG49ZnVuY3Rpb24odCxlKXtyZXR1cm4gcHQodCkmJiRuKGUpP0RuKGllKHQpLGUpOmZ1bmN0aW9uKHIpe3ZhciBuPUpuKHIsdCk7cmV0dXJuIHZvaWQgMD09PW4mJm49PT1lP0tuKHIsdCk6V24oZSxuLFlufFFuKX19O3ZhciB0bz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/dm9pZCAwOmVbdF19fTt2YXIgZW89ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBWbihlLHQpfX07dmFyIHJvPWZ1bmN0aW9uKHQpe3JldHVybiBwdCh0KT90byhpZSh0KSk6ZW8odCl9O3ZhciBubz1mdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6bnVsbD09dD9XZTpcIm9iamVjdFwiPT10eXBlb2YgdD9hdCh0KT9Ybih0WzBdLHRbMV0pOnFuKHQpOnJvKHQpfTt2YXIgb289ZnVuY3Rpb24odCxlLHIsbixvKXtyZXR1cm4gbyh0LGZ1bmN0aW9uKHQsbyxpKXtyPW4/KG49ITEsdCk6ZShyLHQsbyxpKX0pLHJ9O3ZhciBpbz1mdW5jdGlvbih0LGUscil7dmFyIG49YXQodCk/SHI6b28sbz1hcmd1bWVudHMubGVuZ3RoPDM7cmV0dXJuIG4odCxubyhlLDQpLHIsbyxOZSl9LGFvPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbjtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9e30pLG49YXQoZSk/ZTpbZV0sQ2UobixmdW5jdGlvbihlKXtDZShyLGZ1bmN0aW9uKHIsbil7dWUodCxlK1wiLlwiK24scil9KX0pLHR9LHVvPVtcImluaGVyaXRcIixcImRlZmF1bHRcIixcInNlcmlmXCIsXCJzYW5zLXNlcmlmXCIsXCJtb25vc3BhY2VcIixcImZhbnRhc3lcIixcImN1cnNpdmVcIixcIi1hcHBsZS1zeXN0ZW1cIl0sY289ZnVuY3Rpb24odCl7cmV0dXJuLTEhPT11by5pbmRleE9mKHQpP3Q6XCInXCIrdCtcIidcIn07dmFyIGxvLGZvPWooZnVuY3Rpb24odCxlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmRlZmF1bHQ9XCJodG1se2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1ib2R5e21hcmdpbjowfWFydGljbGUsYXNpZGUsZGV0YWlscyxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLG1haW4sbWVudSxuYXYsc2VjdGlvbixzdW1tYXJ5e2Rpc3BsYXk6YmxvY2t9YXVkaW8sY2FudmFzLHByb2dyZXNzLHZpZGVve2Rpc3BsYXk6aW5saW5lLWJsb2NrfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9cHJvZ3Jlc3N7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9W2hpZGRlbl0sdGVtcGxhdGV7ZGlzcGxheTpub25lfWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOm9iamVjdHN9YTphY3RpdmUsYTpob3ZlcntvdXRsaW5lLXdpZHRoOjB9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbTpub25lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWR9YixzdHJvbmd7Zm9udC13ZWlnaHQ6aW5oZXJpdDtmb250LXdlaWdodDpib2xkZXJ9ZGZue2ZvbnQtc3R5bGU6aXRhbGljfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOi42N2VtIDB9bWFya3tiYWNrZ3JvdW5kLWNvbG9yOiNmZjA7Y29sb3I6IzAwMH1zbWFsbHtmb250LXNpemU6ODAlfXN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXN1Yntib3R0b206LS4yNWVtfXN1cHt0b3A6LS41ZW19aW1ne2JvcmRlci1zdHlsZTpub25lfXN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn1jb2RlLGtiZCxwcmUsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19ZmlndXJle21hcmdpbjoxZW0gNDBweH1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250OmluaGVyaXQ7bWFyZ2luOjB9b3B0Z3JvdXB7Zm9udC13ZWlnaHQ6NzAwfWJ1dHRvbixpbnB1dHtvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1bdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b24saHRtbCBbdHlwZT1idXR0b25dey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259W3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyLXN0eWxlOm5vbmU7cGFkZGluZzowfVt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3JpbmcsYnV0dG9uOi1tb3otZm9jdXNyaW5ne291dGxpbmU6MXB4IGRvdHRlZCBCdXR0b25UZXh0fWZpZWxkc2V0e2JvcmRlcjoxcHggc29saWQgc2lsdmVyO21hcmdpbjowIDJweDtwYWRkaW5nOi4zNWVtIC42MjVlbSAuNzVlbX1sZWdlbmR7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTp0YWJsZTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjA7d2hpdGUtc3BhY2U6bm9ybWFsfXRleHRhcmVhe292ZXJmbG93OmF1dG99W3R5cGU9Y2hlY2tib3hdLFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOmluaGVyaXQ7b3BhY2l0eTouNTR9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2ZvbnQ6aW5oZXJpdH1cIn0pLHNvPShsbz1mbykmJmxvLl9fZXNNb2R1bGUmJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsbyxcImRlZmF1bHRcIik/bG8uZGVmYXVsdDpsbyxwbz1mdW5jdGlvbih0KXtyZXR1cm4gaW8odCxmdW5jdGlvbih0LGUscil7cmV0dXJuIHQrPXIrXCJ7XCIsQ2UoZSxmdW5jdGlvbihlLHIpe2lmKEgoZSkpe3ZhciBuPXt9O25bcl09ZSx0Kz1wbyhuKX1lbHNle3ZhciBvPWZ1bmN0aW9uKHQsZSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgc3RyaW5nXCIpO3JldHVybiB0LnJlcGxhY2UoLyhbYS16XFxkXSkoW0EtWl0pL2csXCIkMVwiKyhlPXZvaWQgMD09PWU/XCJfXCI6ZSkrXCIkMlwiKS5yZXBsYWNlKC8oW0EtWl0rKShbQS1aXVthLXpcXGRdKykvZyxcIiQxXCIrZStcIiQyXCIpLnRvTG93ZXJDYXNlKCl9KHIsXCItXCIpK1wiOlwiK2UrXCI7XCI7W1wiV2Via2l0XCIsXCJtc1wiLFwiTW96XCIsXCJPXCJdLmZvckVhY2goZnVuY3Rpb24odCl7ci5zbGljZSgwLHQubGVuZ3RoKT09PXQmJihvPVwiLVwiK28pfSksdCs9b319KSx0Kz1cIn1cIn0sXCJcIil9O21vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlLHIsYSx1LGw9aSh7fSx7YmFzZUZvbnRTaXplOlwiMTZweFwiLGJhc2VMaW5lSGVpZ2h0OjEuNDUsaGVhZGVyTGluZUhlaWdodDoxLjEsc2NhbGVSYXRpbzoyLGdvb2dsZUZvbnRzOltdLGhlYWRlckZvbnRGYW1pbHk6W1wiLWFwcGxlLXN5c3RlbVwiLFwiQmxpbmtNYWNTeXN0ZW1Gb250XCIsXCJTZWdvZSBVSVwiLFwiUm9ib3RvXCIsXCJPeHlnZW5cIixcIlVidW50dVwiLFwiQ2FudGFyZWxsXCIsXCJGaXJhIFNhbnNcIixcIkRyb2lkIFNhbnNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJzYW5zLXNlcmlmXCJdLGJvZHlGb250RmFtaWx5OltcImdlb3JnaWFcIixcInNlcmlmXCJdLGhlYWRlckNvbG9yOlwiaW5oZXJpdFwiLGJvZHlDb2xvcjpcImhzbGEoMCwwJSwwJSwwLjgpXCIsaGVhZGVyV2VpZ2h0OlwiYm9sZFwiLGJvZHlXZWlnaHQ6XCJub3JtYWxcIixib2xkV2VpZ2h0OlwiYm9sZFwiLGluY2x1ZGVOb3JtYWxpemU6ITAsYmxvY2tNYXJnaW5Cb3R0b206MX0sdCksZD0oZT1sLHI9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwKSksYT1PYmplY3QuYXNzaWduKHt9LHIsZSksdT1jKGEuYmFzZUZvbnRTaXplKSxmKGEuYmFzZUxpbmVIZWlnaHQpPyhzKHUoYS5iYXNlRm9udFNpemUsXCJweFwiKSksYS5iYXNlTGluZUhlaWdodEluUHg9dShhLmJhc2VMaW5lSGVpZ2h0LFwicHhcIikpOmEuYmFzZUxpbmVIZWlnaHRJblB4PXMoYS5iYXNlRm9udFNpemUpKmEuYmFzZUxpbmVIZWlnaHQrXCJweFwiLHtyaHl0aG06aChhKSxlc3RhYmxpc2hCYXNlbGluZTpmdW5jdGlvbigpe3JldHVybiBjKCh0PWEpLmJhc2VGb250U2l6ZSkse2ZvbnRTaXplOnModC5iYXNlRm9udFNpemUpLzE2KjEwMCtcIiVcIixsaW5lSGVpZ2h0OnQuYmFzZUxpbmVIZWlnaHQudG9TdHJpbmcoKX07dmFyIHR9LGxpbmVzRm9yRm9udFNpemU6ZnVuY3Rpb24odCl7cmV0dXJuIHYodCxhKX0sYWRqdXN0Rm9udFNpemVUbzpmdW5jdGlvbih0LGUscil7cmV0dXJuIG51bGw9PWUmJihlPVwiYXV0b1wiKSxmdW5jdGlvbih0LGUscixuKXtudWxsPT1yJiYocj1uLmJhc2VGb250U2l6ZSksXCIlXCI9PT1mKHQpJiYodD1zKG4uYmFzZUZvbnRTaXplKSoocyh0KS8xMDApK1wicHhcIik7dmFyIG89YyhuLmJhc2VGb250U2l6ZSk7dD1vKHQsXCJweFwiLHI9byhyLFwicHhcIikpO3ZhciBpPWgobik7cmV0dXJuXCJhdXRvXCI9PT1lJiYoZT12KHQsbikpLHtmb250U2l6ZTpvKHQsbi5yaHl0aG1Vbml0LHIpLGxpbmVIZWlnaHQ6aShlLHIpfX0odCxlLHIsYSl9fSk7cmV0dXJuIGQuc2NhbGU9ZnVuY3Rpb24odCl7dmFyIGU9cGFyc2VJbnQobC5iYXNlRm9udFNpemUsMTApLHI9ZnVuY3Rpb24odCxlKXt2YXIgcjtyZXR1cm4gbnVsbD09dCYmKHQ9MCksbnVsbD09ZSYmKGU9XCJnb2xkZW5cIikscj1uKGUpP2U6bnVsbCE9b1tlXT9vW2VdOm8uZ29sZGVuLE1hdGgucG93KHIsdCl9KHQsbC5zY2FsZVJhdGlvKSplK1wicHhcIjtyZXR1cm4gZC5hZGp1c3RGb250U2l6ZVRvKHIpfSxPYmplY3QuYXNzaWduKHt9LHtvcHRpb25zOmx9LGQse2NyZWF0ZVN0eWxlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnRvU3RyaW5nKCl9LHRvSlNPTjpmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0LGUpe3ZhciByPXt9LG49dC5lc3RhYmxpc2hCYXNlbGluZSgpO3I9YW8ocixcImh0bWxcIix7Zm9udDpuLmZvbnRTaXplK1wiL1wiK24ubGluZUhlaWdodCtcIiBcIitlLmJvZHlGb250RmFtaWx5Lm1hcChjbykuam9pbihcIixcIiksYm94U2l6aW5nOlwiYm9yZGVyLWJveFwiLG92ZXJmbG93WTpcInNjcm9sbFwifSkscj1hbyhyLFtcIipcIixcIio6YmVmb3JlXCIsXCIqOmFmdGVyXCJdLHtib3hTaXppbmc6XCJpbmhlcml0XCJ9KSxyPWFvKHIsXCJib2R5XCIse2NvbG9yOmUuYm9keUNvbG9yLGZvbnRGYW1pbHk6ZS5ib2R5Rm9udEZhbWlseS5tYXAoY28pLmpvaW4oXCIsXCIpLGZvbnRXZWlnaHQ6ZS5ib2R5V2VpZ2h0LHdvcmRXcmFwOlwiYnJlYWstd29yZFwiLGZvbnRLZXJuaW5nOlwibm9ybWFsXCIsTW96Rm9udEZlYXR1cmVTZXR0aW5nczonXCJrZXJuXCIsIFwibGlnYVwiLCBcImNsaWdcIiwgXCJjYWx0XCInLG1zRm9udEZlYXR1cmVTZXR0aW5nczonXCJrZXJuXCIsIFwibGlnYVwiLCBcImNsaWdcIiwgXCJjYWx0XCInLFdlYmtpdEZvbnRGZWF0dXJlU2V0dGluZ3M6J1wia2VyblwiLCBcImxpZ2FcIiwgXCJjbGlnXCIsIFwiY2FsdFwiJyxmb250RmVhdHVyZVNldHRpbmdzOidcImtlcm5cIiwgXCJsaWdhXCIsIFwiY2xpZ1wiLCBcImNhbHRcIid9KSxyPWFvKHIsXCJpbWdcIix7bWF4V2lkdGg6XCIxMDAlXCJ9KTt2YXIgbz1cIlwiO289JGUoZS5ibG9ja01hcmdpbkJvdHRvbSk/dC5yaHl0aG0oZS5ibG9ja01hcmdpbkJvdHRvbSk6RGUoZS5ibG9ja01hcmdpbkJvdHRvbSk/ZS5ibG9ja01hcmdpbkJvdHRvbTp0LnJoeXRobSgxKSxyPWFvKHIsW1wiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiLFwiaGdyb3VwXCIsXCJ1bFwiLFwib2xcIixcImRsXCIsXCJkZFwiLFwicFwiLFwiZmlndXJlXCIsXCJwcmVcIixcInRhYmxlXCIsXCJmaWVsZHNldFwiLFwiYmxvY2txdW90ZVwiLFwiZm9ybVwiLFwibm9zY3JpcHRcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJoclwiLFwiYWRkcmVzc1wiXSx7bWFyZ2luTGVmdDowLG1hcmdpblJpZ2h0OjAsbWFyZ2luVG9wOjAscGFkZGluZ0JvdHRvbTowLHBhZGRpbmdMZWZ0OjAscGFkZGluZ1JpZ2h0OjAscGFkZGluZ1RvcDowLG1hcmdpbkJvdHRvbTpvfSkscj1hbyhyLFwiYmxvY2txdW90ZVwiLHttYXJnaW5SaWdodDp0LnJoeXRobSgxKSxtYXJnaW5Cb3R0b206byxtYXJnaW5MZWZ0OnQucmh5dGhtKDEpfSkscj1hbyhyLFtcImJcIixcInN0cm9uZ1wiLFwiZHRcIixcInRoXCJdLHtmb250V2VpZ2h0OmUuYm9sZFdlaWdodH0pLHI9YW8ocixcImhyXCIse2JhY2tncm91bmQ6eSg4MCksYm9yZGVyOlwibm9uZVwiLGhlaWdodDpcIjFweFwiLG1hcmdpbkJvdHRvbTpcImNhbGMoXCIrbytcIiAtIDFweClcIn0pLHI9YW8ocixbXCJvbFwiLFwidWxcIl0se2xpc3RTdHlsZVBvc2l0aW9uOlwib3V0c2lkZVwiLGxpc3RTdHlsZUltYWdlOlwibm9uZVwiLG1hcmdpbkxlZnQ6dC5yaHl0aG0oMSl9KSxyPWFvKHIsXCJsaVwiLHttYXJnaW5Cb3R0b206XCJjYWxjKFwiK28rXCIgLyAyKVwifSkscj1hbyhyLFtcIm9sIGxpXCIsXCJ1bCBsaVwiXSx7cGFkZGluZ0xlZnQ6MH0pLHI9YW8ocixbXCJsaSA+IG9sXCIsXCJsaSA+IHVsXCJdLHttYXJnaW5MZWZ0OnQucmh5dGhtKDEpLG1hcmdpbkJvdHRvbTpcImNhbGMoXCIrbytcIiAvIDIpXCIsbWFyZ2luVG9wOlwiY2FsYyhcIitvK1wiIC8gMilcIn0pLHI9YW8ocixbXCJibG9ja3F1b3RlICo6bGFzdC1jaGlsZFwiLFwibGkgKjpsYXN0LWNoaWxkXCIsXCJwICo6bGFzdC1jaGlsZFwiXSx7bWFyZ2luQm90dG9tOjB9KSxyPWFvKHIsW1wibGkgPiBwXCJdLHttYXJnaW5Cb3R0b206XCJjYWxjKFwiK28rXCIgLyAyKVwifSkscj1hbyhyLFtcImNvZGVcIixcImtiZFwiLFwicHJlXCIsXCJzYW1wXCJdLE9iamVjdC5hc3NpZ24oe30sdC5hZGp1c3RGb250U2l6ZVRvKFwiODUlXCIpKSksKHI9YW8ocixbXCJhYmJyXCIsXCJhY3JvbnltXCJdLHtib3JkZXJCb3R0b206XCIxcHggZG90dGVkIFwiK3koNTApLGN1cnNvcjpcImhlbHBcIn0pKVtcImFiYnJbdGl0bGVdXCJdPXtib3JkZXJCb3R0b206XCIxcHggZG90dGVkIFwiK3koNTApLGN1cnNvcjpcImhlbHBcIix0ZXh0RGVjb3JhdGlvbjpcIm5vbmVcIn0scj1hbyhyLFtcInRhYmxlXCJdLE9iamVjdC5hc3NpZ24oe30sdC5hZGp1c3RGb250U2l6ZVRvKGUuYmFzZUZvbnRTaXplKSx7Ym9yZGVyQ29sbGFwc2U6XCJjb2xsYXBzZVwiLHdpZHRoOlwiMTAwJVwifSkpLHI9YW8ocixbXCJ0aGVhZFwiXSx7dGV4dEFsaWduOlwibGVmdFwifSkscj1hbyhyLFtcInRkLHRoXCJdLHt0ZXh0QWxpZ246XCJsZWZ0XCIsYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkIFwiK3koODgpLGZvbnRGZWF0dXJlU2V0dGluZ3M6J1widG51bVwiJyxNb3pGb250RmVhdHVyZVNldHRpbmdzOidcInRudW1cIicsbXNGb250RmVhdHVyZVNldHRpbmdzOidcInRudW1cIicsV2Via2l0Rm9udEZlYXR1cmVTZXR0aW5nczonXCJ0bnVtXCInLHBhZGRpbmdMZWZ0OnQucmh5dGhtKDIvMykscGFkZGluZ1JpZ2h0OnQucmh5dGhtKDIvMykscGFkZGluZ1RvcDp0LnJoeXRobSguNSkscGFkZGluZ0JvdHRvbTpcImNhbGMoXCIrdC5yaHl0aG0oLjUpK1wiIC0gMXB4KVwifSkscj1hbyhyLFwidGg6Zmlyc3QtY2hpbGQsdGQ6Zmlyc3QtY2hpbGRcIix7cGFkZGluZ0xlZnQ6MH0pLHI9YW8ocixcInRoOmxhc3QtY2hpbGQsdGQ6bGFzdC1jaGlsZFwiLHtwYWRkaW5nUmlnaHQ6MH0pLHI9YW8ocixbXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCJdLHtjb2xvcjplLmhlYWRlckNvbG9yLGZvbnRGYW1pbHk6ZS5oZWFkZXJGb250RmFtaWx5Lm1hcChjbykuam9pbihcIixcIiksZm9udFdlaWdodDplLmhlYWRlcldlaWdodCx0ZXh0UmVuZGVyaW5nOlwib3B0aW1pemVMZWdpYmlsaXR5XCJ9KTt2YXIgaT10LnNjYWxlKDEpLGE9dC5zY2FsZSguNiksdT10LnNjYWxlKC40KSxjPXQuc2NhbGUoMCksbD10LnNjYWxlKC0uMiksZj10LnNjYWxlKC0uMyk7cmV0dXJuIENlKFtpLGEsdSxjLGwsZl0sZnVuY3Rpb24odCxuKXtyPXVlKHIsXCJoXCIrKG4rMSkrXCIuZm9udFNpemVcIix0LmZvbnRTaXplKSxyPXVlKHIsXCJoXCIrKG4rMSkrXCIubGluZUhlaWdodFwiLGUuaGVhZGVyTGluZUhlaWdodCl9KSxhdChlLnBsdWdpbnMpJiYocj1pbyhlLnBsdWdpbnMsZnVuY3Rpb24ocixuKXtyZXR1cm4gRXIocixuKHQsZSxyKSl9LHIpKSxlLm92ZXJyaWRlU3R5bGVzJiYkKGUub3ZlcnJpZGVTdHlsZXMpJiYocj1FcihyLGUub3ZlcnJpZGVTdHlsZXModCxlLHIpKSksZS5vdmVycmlkZVRoZW1lU3R5bGVzJiYkKGUub3ZlcnJpZGVUaGVtZVN0eWxlcykmJihyPUVyKHIsZS5vdmVycmlkZVRoZW1lU3R5bGVzKHQsZSxyKSkpLHJ9KGQsbCl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1wbyhyKTtyZXR1cm4gZS5pbmNsdWRlTm9ybWFsaXplJiYobj1cIlwiK3NvK24pLG59KDAsbCx0aGlzLnRvSlNPTigpKX0saW5qZWN0U3R5bGVzOmZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KWlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwb2dyYXBoeS5qc1wiKSlkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cG9ncmFwaHkuanNcIikuaW5uZXJIVE1MPXRoaXMudG9TdHJpbmcoKTtlbHNle3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTt0LmlkPVwidHlwb2dyYXBoeS5qc1wiLHQuaW5uZXJIVE1MPXRoaXMudG9TdHJpbmcoKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHQpfX19KX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3R5cG9ncmFwaHkvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9ncmF5UGVyY2VudGFnZSA9IHJlcXVpcmUoJ2dyYXktcGVyY2VudGFnZScpO1xuXG52YXIgX2dyYXlQZXJjZW50YWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyYXlQZXJjZW50YWdlKTtcblxudmFyIF90eXBvZ3JhcGh5QnJlYWtwb2ludENvbnN0YW50cyA9IHJlcXVpcmUoJ3R5cG9ncmFwaHktYnJlYWtwb2ludC1jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHRoZW1lID0ge1xuICB0aXRsZTogJ0RvZWxnZXInLFxuICBiYXNlRm9udFNpemU6ICcxN3B4JyxcbiAgYmFzZUxpbmVIZWlnaHQ6IDEuNDUsXG4gIGJsb2NrTWFyZ2luQm90dG9tOiAwLjgsXG4gIGdvb2dsZUZvbnRzOiBbe1xuICAgIG5hbWU6ICdBcnZvJyxcbiAgICBzdHlsZXM6IFsnNzAwJ11cbiAgfSwge1xuICAgIG5hbWU6ICdDYWJpbicsXG4gICAgc3R5bGVzOiBbJzQwMCcsICc0MDBpJywgJzcwMCddXG4gIH1dLFxuICBoZWFkZXJGb250RmFtaWx5OiBbJ0Fydm8nLCAnc2Fucy1zZXJpZiddLFxuICBib2R5Rm9udEZhbWlseTogWydDYWJpbicsICdzZXJpZiddLFxuICBoZWFkZXJDb2xvcjogJ2hzbGEoMCwwJSwwJSwwLjkpJyxcbiAgYm9keUNvbG9yOiAnaHNsYSgwLDAlLDAlLDAuOCknLFxuICBoZWFkZXJXZWlnaHQ6ICc3MDAnLFxuICBib2R5V2VpZ2h0OiA0MDAsXG4gIGJvbGRXZWlnaHQ6IDcwMCxcbiAgb3ZlcnJpZGVTdHlsZXM6IGZ1bmN0aW9uIG92ZXJyaWRlU3R5bGVzKF9yZWYsIG9wdGlvbnMpIHtcbiAgICB2YXIgYWRqdXN0Rm9udFNpemVUbyA9IF9yZWYuYWRqdXN0Rm9udFNpemVUbyxcbiAgICAgICAgc2NhbGUgPSBfcmVmLnNjYWxlLFxuICAgICAgICByaHl0aG0gPSBfcmVmLnJoeXRobTtcblxuICAgIHZhciBsaW5rQ29sb3IgPSAnI2ZmNDgzYic7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICBhOiB7XG4gICAgICAgIGNvbG9yOiBsaW5rQ29sb3IsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgIHRleHRTaGFkb3c6ICcuMDNlbSAwICNmZmYsLS4wM2VtIDAgI2ZmZiwwIC4wM2VtICNmZmYsMCAtLjAzZW0gI2ZmZiwuMDZlbSAwICNmZmYsLS4wNmVtIDAgI2ZmZiwuMDllbSAwICNmZmYsLS4wOWVtIDAgI2ZmZiwuMTJlbSAwICNmZmYsLS4xMmVtIDAgI2ZmZiwuMTVlbSAwICNmZmYsLS4xNWVtIDAgI2ZmZicsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSAxcHgsICcgKyBsaW5rQ29sb3IgKyAnIDFweCwgJyArIGxpbmtDb2xvciArICcgMnB4LCByZ2JhKDAsIDAsIDAsIDApIDJweCknIH0sXG4gICAgICAnYTpob3ZlcixhOmFjdGl2ZSc6IHtcbiAgICAgICAgdGV4dFNoYWRvdzogJ25vbmUnLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICdoMSxoMixoMyxoNCxoNSxoNic6IHtcbiAgICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgICBtYXJnaW5Ub3A6IHJoeXRobSgxLjUpLFxuICAgICAgICBtYXJnaW5Cb3R0b206IHJoeXRobSgwLjUpXG4gICAgICB9LFxuICAgICAgLy8gQmxvY2txdW90ZSBzdHlsZXMuXG4gICAgICBibG9ja3F1b3RlOiBfZXh0ZW5kcyh7fSwgc2NhbGUoMSAvIDUpLCB7XG4gICAgICAgIGJvcmRlckxlZnQ6IHJoeXRobSg2IC8gMTYpICsgJyBzb2xpZCAnICsgbGlua0NvbG9yLFxuICAgICAgICBjb2xvcjogKDAsIF9ncmF5UGVyY2VudGFnZTIuZGVmYXVsdCkoMzUpLFxuICAgICAgICBwYWRkaW5nTGVmdDogcmh5dGhtKDEwIC8gMTYpLFxuICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgICBtYXJnaW5SaWdodDogMFxuICAgICAgfSksXG4gICAgICAnYmxvY2txdW90ZSA+IDpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDBcbiAgICAgIH0sXG4gICAgICAnYmxvY2txdW90ZSBjaXRlJzogX2V4dGVuZHMoe30sIGFkanVzdEZvbnRTaXplVG8ob3B0aW9ucy5iYXNlRm9udFNpemUpLCB7XG4gICAgICAgIGNvbG9yOiBvcHRpb25zLmJvZHlDb2xvcixcbiAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICAgICAgZm9udFdlaWdodDogb3B0aW9ucy5ib2R5V2VpZ2h0XG4gICAgICB9KSxcbiAgICAgICdibG9ja3F1b3RlIGNpdGU6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiAnXCLigJQgXCInXG4gICAgICB9XG4gICAgfSwgX3R5cG9ncmFwaHlCcmVha3BvaW50Q29uc3RhbnRzLk1PQklMRV9NRURJQV9RVUVSWSwge1xuICAgICAgYmxvY2txdW90ZToge1xuICAgICAgICBib3JkZXJMZWZ0OiByaHl0aG0oMyAvIDE2KSArICcgc29saWQgJyArIGxpbmtDb2xvcixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHJoeXRobSg5IC8gMTYpLFxuICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICBtYXJnaW5MZWZ0OiByaHl0aG0oLTMgLyA0KSxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdGhlbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdHlwb2dyYXBoeS10aGVtZS1kb2VsZ2VyL2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBpc051bWVyaWMobikge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlnaHRuZXNzLCBodWUsIGRhcmtCYWNrZ3JvdW5kKSB7XG4gIGlmICh0eXBlb2YgaHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaHVlID0gMDtcbiAgfVxuICBpZiAodHlwZW9mIGRhcmtCYWNrZ3JvdW5kID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZGFya0JhY2tncm91bmQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgbmFtZWQgaHVlcyBpbnRvIG51bWVyaWMgbGlnaHRuZXNzIHZhbHVlLlxuICBpZiAoaHVlID09PSBcImNvb2xcIikge1xuICAgIGh1ZSA9IDIzNztcbiAgfVxuICBlbHNlIGlmIChodWUgPT09IFwic2xhdGVcIikge1xuICAgIGh1ZSA9IDEyMjtcbiAgfVxuICBlbHNlIGlmIChodWUgPT09IFwid2FybVwiKSB7XG4gICAgaHVlID0gNjk7XG4gIH1cblxuICBpZiAoIWlzTnVtZXJpYyhodWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSHVlIGlzIG5vdCBhIG51bWJlclwiKTtcbiAgfVxuXG4gIGlmICghaXNOdW1lcmljKGxpZ2h0bmVzcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJMaWdodG5lc3MgaXMgbm90IGEgbnVtYmVyXCIpO1xuICB9XG5cbiAgaWYgKGxpZ2h0bmVzcyA+IDEwMCkge1xuICAgIGxpZ2h0bmVzcyA9IDEwMDtcbiAgfVxuICBpZiAobGlnaHRuZXNzIDwgMCkge1xuICAgIGxpZ2h0bmVzcyA9IDA7XG4gIH1cblxuICB2YXIgc2F0dXJhdGlvbiA9IDA7XG4gIGlmIChodWUgIT09IDApIHtcbiAgICB2YXIgYSA9IDE5LjkyOTc4O1xuICAgIHZhciBiID0gLTAuMzY1MTc1OTtcbiAgICB2YXIgYyA9IDAuMDAxNzM3MjE0O1xuICAgIHNhdHVyYXRpb24gPSBhICsgYiAqIGxpZ2h0bmVzcyArIGMgKiBNYXRoLnBvdyhsaWdodG5lc3MsIDIpO1xuICB9XG5cbiAgdmFyIG9wYWNpdHkgPSAwXG4gIGlmIChkYXJrQmFja2dyb3VuZCkge1xuICAgIG9wYWNpdHkgPSBsaWdodG5lc3MgLyAxMDBcbiAgICBsaWdodG5lc3MgPSAnMTAwJSwnXG4gIH0gZWxzZSB7XG4gICAgb3BhY2l0eSA9ICgxMDAgLSBsaWdodG5lc3MpIC8gMTAwXG4gICAgbGlnaHRuZXNzID0gJzAlLCdcbiAgfVxuXG4gIHJldHVybiBcImhzbGEoXCIgKyBodWUgKyBcIixcIiArIHNhdHVyYXRpb24gKyBcIiUsXCIgKyBsaWdodG5lc3MgKyBvcGFjaXR5ICsgXCIpXCI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ3JheS1wZXJjZW50YWdlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIExBUkdFUl9ESVNQTEFZX1dJRFRIID0gZXhwb3J0cy5MQVJHRVJfRElTUExBWV9XSURUSCA9ICcxNjAwcHgnO1xudmFyIExBUkdFX0RJU1BMQVlfV0lEVEggPSBleHBvcnRzLkxBUkdFX0RJU1BMQVlfV0lEVEggPSAnMTI4MHB4JztcbnZhciBERUZBVUxUX1dJRFRIID0gZXhwb3J0cy5ERUZBVUxUX1dJRFRIID0gJzk4MHB4JztcbnZhciBUQUJMRVRfV0lEVEggPSBleHBvcnRzLlRBQkxFVF9XSURUSCA9ICc3NjhweCc7XG52YXIgTU9CSUxFX1dJRFRIID0gZXhwb3J0cy5NT0JJTEVfV0lEVEggPSAnNDgwcHgnO1xuXG52YXIgTEFSR0VSX0RJU1BMQVlfTUVESUFfUVVFUlkgPSBleHBvcnRzLkxBUkdFUl9ESVNQTEFZX01FRElBX1FVRVJZID0gJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNjAwcHgpJztcbnZhciBMQVJHRV9ESVNQTEFZX01FRElBX1FVRVJZID0gZXhwb3J0cy5MQVJHRV9ESVNQTEFZX01FRElBX1FVRVJZID0gJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpJztcbnZhciBERUZBVUxUX01FRElBX1FVRVJZID0gZXhwb3J0cy5ERUZBVUxUX01FRElBX1FVRVJZID0gJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5ODBweCknO1xudmFyIFRBQkxFVF9NRURJQV9RVUVSWSA9IGV4cG9ydHMuVEFCTEVUX01FRElBX1FVRVJZID0gJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCknO1xudmFyIE1PQklMRV9NRURJQV9RVUVSWSA9IGV4cG9ydHMuTU9CSUxFX01FRElBX1FVRVJZID0gJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCknO1xuXG52YXIgTUlOX0xBUkdFUl9ESVNQTEFZX01FRElBX1FVRVJZID0gZXhwb3J0cy5NSU5fTEFSR0VSX0RJU1BMQVlfTUVESUFfUVVFUlkgPSAnQG1lZGlhIChtaW4td2lkdGg6MTYwMHB4KSc7XG52YXIgTUlOX0xBUkdFX0RJU1BMQVlfTUVESUFfUVVFUlkgPSBleHBvcnRzLk1JTl9MQVJHRV9ESVNQTEFZX01FRElBX1FVRVJZID0gJ0BtZWRpYSAobWluLXdpZHRoOjEyODBweCknO1xudmFyIE1JTl9ERUZBVUxUX01FRElBX1FVRVJZID0gZXhwb3J0cy5NSU5fREVGQVVMVF9NRURJQV9RVUVSWSA9ICdAbWVkaWEgKG1pbi13aWR0aDo5ODBweCknO1xudmFyIE1JTl9UQUJMRVRfTUVESUFfUVVFUlkgPSBleHBvcnRzLk1JTl9UQUJMRVRfTUVESUFfUVVFUlkgPSAnQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpJztcbnZhciBNSU5fTU9CSUxFX01FRElBX1FVRVJZID0gZXhwb3J0cy5NSU5fTU9CSUxFX01FRElBX1FVRVJZID0gJ0BtZWRpYSAobWluLXdpZHRoOjQ4MHB4KSc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdHlwb2dyYXBoeS1icmVha3BvaW50LWNvbnN0YW50cy9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1iZXRhKTogdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIFRvb2x0aXAgPSBmdW5jdGlvbiAoJCkge1xuXG4gIC8qKlxuICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAqL1xuICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcCB0b29sdGlwcyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpO1xuICB9XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBOQU1FID0gJ3Rvb2x0aXAnO1xuICB2YXIgVkVSU0lPTiA9ICc0LjAuMC1iZXRhJztcbiAgdmFyIERBVEFfS0VZID0gJ2JzLnRvb2x0aXAnO1xuICB2YXIgRVZFTlRfS0VZID0gJy4nICsgREFUQV9LRVk7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcbiAgdmFyIENMQVNTX1BSRUZJWCA9ICdicy10b29sdGlwJztcbiAgdmFyIEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBDTEFTU19QUkVGSVggKyAnXFxcXFMrJywgJ2cnKTtcblxuICB2YXIgRGVmYXVsdFR5cGUgPSB7XG4gICAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gICAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICAgIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlcjogJ3N0cmluZycsXG4gICAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGh0bWw6ICdib29sZWFuJyxcbiAgICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBvZmZzZXQ6ICcobnVtYmVyfHN0cmluZyknLFxuICAgIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICcoc3RyaW5nfGFycmF5KSdcbiAgfTtcblxuICB2YXIgQXR0YWNobWVudE1hcCA9IHtcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgVE9QOiAndG9wJyxcbiAgICBSSUdIVDogJ3JpZ2h0JyxcbiAgICBCT1RUT006ICdib3R0b20nLFxuICAgIExFRlQ6ICdsZWZ0J1xuICB9O1xuXG4gIHZhciBEZWZhdWx0ID0ge1xuICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICsgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRlbGF5OiAwLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiBmYWxzZSxcbiAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIG9mZnNldDogMCxcbiAgICBjb250YWluZXI6IGZhbHNlLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50OiAnZmxpcCdcbiAgfTtcblxuICB2YXIgSG92ZXJTdGF0ZSA9IHtcbiAgICBTSE9XOiAnc2hvdycsXG4gICAgT1VUOiAnb3V0J1xuICB9O1xuXG4gIHZhciBFdmVudCA9IHtcbiAgICBISURFOiAnaGlkZScgKyBFVkVOVF9LRVksXG4gICAgSElEREVOOiAnaGlkZGVuJyArIEVWRU5UX0tFWSxcbiAgICBTSE9XOiAnc2hvdycgKyBFVkVOVF9LRVksXG4gICAgU0hPV046ICdzaG93bicgKyBFVkVOVF9LRVksXG4gICAgSU5TRVJURUQ6ICdpbnNlcnRlZCcgKyBFVkVOVF9LRVksXG4gICAgQ0xJQ0s6ICdjbGljaycgKyBFVkVOVF9LRVksXG4gICAgRk9DVVNJTjogJ2ZvY3VzaW4nICsgRVZFTlRfS0VZLFxuICAgIEZPQ1VTT1VUOiAnZm9jdXNvdXQnICsgRVZFTlRfS0VZLFxuICAgIE1PVVNFRU5URVI6ICdtb3VzZWVudGVyJyArIEVWRU5UX0tFWSxcbiAgICBNT1VTRUxFQVZFOiAnbW91c2VsZWF2ZScgKyBFVkVOVF9LRVlcbiAgfTtcblxuICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgIEZBREU6ICdmYWRlJyxcbiAgICBTSE9XOiAnc2hvdydcbiAgfTtcblxuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgVE9PTFRJUDogJy50b29sdGlwJyxcbiAgICBUT09MVElQX0lOTkVSOiAnLnRvb2x0aXAtaW5uZXInLFxuICAgIEFSUk9XOiAnLmFycm93J1xuICB9O1xuXG4gIHZhciBUcmlnZ2VyID0ge1xuICAgIEhPVkVSOiAnaG92ZXInLFxuICAgIEZPQ1VTOiAnZm9jdXMnLFxuICAgIENMSUNLOiAnY2xpY2snLFxuICAgIE1BTlVBTDogJ21hbnVhbCdcblxuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuICB2YXIgVG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb29sdGlwKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvb2x0aXApO1xuXG4gICAgICAvLyBwcml2YXRlXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fdGltZW91dCA9IDA7XG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gJyc7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge307XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuXG4gICAgICAvLyBwcm90ZWN0ZWRcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy50aXAgPSBudWxsO1xuXG4gICAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLnRvZ2dsZUVuYWJsZWQgPSBmdW5jdGlvbiB0b2dnbGVFbmFibGVkKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZDtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuICAgICAgICB2YXIgY29udGV4dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrO1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKTtcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub2ZmKCdoaWRlLmJzLm1vZGFsJyk7XG5cbiAgICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNFbmFibGVkID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLmNvbmZpZyA9IG51bGw7XG4gICAgICB0aGlzLnRpcCA9IG51bGw7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKTtcbiAgICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcblxuICAgICAgICB2YXIgaXNJblRoZURvbSA9ICQuY29udGFpbnModGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICAgIHZhciB0aXBJZCA9IFV0aWwuZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSk7XG5cbiAgICAgICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZCk7XG5cbiAgICAgICAgdGhpcy5zZXRDb250ZW50KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuRkFERSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMuY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnBsYWNlbWVudDtcblxuICAgICAgICB2YXIgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KTtcbiAgICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCk7XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogJCh0aGlzLmNvbmZpZy5jb250YWluZXIpO1xuXG4gICAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpO1xuXG4gICAgICAgIGlmICghJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAgICQodGlwKS5hcHBlbmRUbyhjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRCk7XG5cbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcih0aGlzLmVsZW1lbnQsIHRpcCwge1xuICAgICAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICBvZmZzZXQ6IHRoaXMuY29uZmlnLm9mZnNldFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZsaXA6IHtcbiAgICAgICAgICAgICAgYmVoYXZpb3I6IHRoaXMuY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgICAgZWxlbWVudDogU2VsZWN0b3IuQVJST1dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZShkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5vcmlnaW5hbFBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgX3RoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShkYXRhKSB7XG4gICAgICAgICAgICBfdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKTtcblxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgJCgnYm9keScpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuX2ZpeFRyYW5zaXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHByZXZIb3ZlclN0YXRlID0gX3RoaXMuX2hvdmVyU3RhdGU7XG4gICAgICAgICAgX3RoaXMuX2hvdmVyU3RhdGUgPSBudWxsO1xuXG4gICAgICAgICAgJChfdGhpcy5lbGVtZW50KS50cmlnZ2VyKF90aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKTtcblxuICAgICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICAgIF90aGlzLl9sZWF2ZShudWxsLCBfdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICAgICQodGhpcy50aXApLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoVG9vbHRpcC5fVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gaGlkZShjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSk7XG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5faG92ZXJTdGF0ZSAhPT0gSG92ZXJTdGF0ZS5TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMi5fY2xlYW5UaXBDbGFzcygpO1xuICAgICAgICBfdGhpczIuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgICAgJChfdGhpczIuZWxlbWVudCkudHJpZ2dlcihfdGhpczIuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKTtcbiAgICAgICAgaWYgKF90aGlzMi5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMyLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG5cbiAgICAgIC8vIGlmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKCdib2R5JykuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5DTElDS10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5GT0NVU10gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZTtcblxuICAgICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiYgJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG5cbiAgICAgICAgJCh0aXApLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gJyc7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHByb3RlY3RlZFxuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuaXNXaXRoQ29udGVudCA9IGZ1bmN0aW9uIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5hZGRBdHRhY2htZW50Q2xhc3MgPSBmdW5jdGlvbiBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoQ0xBU1NfUFJFRklYICsgJy0nICsgYXR0YWNobWVudCk7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmdldFRpcEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRUaXBFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF07XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiBzZXRDb250ZW50KCkge1xuICAgICAgdmFyICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKTtcbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLlRPT0xUSVBfSU5ORVIpLCB0aGlzLmdldFRpdGxlKCkpO1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSArICcgJyArIENsYXNzTmFtZS5TSE9XKTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuc2V0RWxlbWVudENvbnRlbnQgPSBmdW5jdGlvbiBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbmZpZy5odG1sO1xuICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY29udGVudCkpID09PSAnb2JqZWN0JyAmJiAoY29udGVudC5ub2RlVHlwZSB8fCBjb250ZW50LmpxdWVyeSkpIHtcbiAgICAgICAgLy8gY29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICAgIGlmIChodG1sKSB7XG4gICAgICAgICAgaWYgKCEkKGNvbnRlbnQpLnBhcmVudCgpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKS5hcHBlbmQoY29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRlbGVtZW50LnRleHQoJChjb250ZW50KS50ZXh0KCkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbWVudFtodG1sID8gJ2h0bWwnIDogJ3RleHQnXShjb250ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTtcblxuICAgIC8vIHByaXZhdGVcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9nZXRBdHRhY2htZW50ID0gZnVuY3Rpb24gX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV07XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9zZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKTtcblxuICAgICAgdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICQoX3RoaXMzLmVsZW1lbnQpLm9uKF90aGlzMy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSywgX3RoaXMzLmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLnRvZ2dsZShldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVHJpZ2dlci5NQU5VQUwpIHtcbiAgICAgICAgICB2YXIgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRyaWdnZXIuSE9WRVIgPyBfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUiA6IF90aGlzMy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOO1xuICAgICAgICAgIHZhciBldmVudE91dCA9IHRyaWdnZXIgPT09IFRyaWdnZXIuSE9WRVIgPyBfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRSA6IF90aGlzMy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU09VVDtcblxuICAgICAgICAgICQoX3RoaXMzLmVsZW1lbnQpLm9uKGV2ZW50SW4sIF90aGlzMy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fZW50ZXIoZXZlbnQpO1xuICAgICAgICAgIH0pLm9uKGV2ZW50T3V0LCBfdGhpczMuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX2xlYXZlKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoX3RoaXMzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSAkLmV4dGVuZCh7fSwgdGhpcy5jb25maWcsIHtcbiAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maXhUaXRsZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fZml4VGl0bGUgPSBmdW5jdGlvbiBfZml4VGl0bGUoKSB7XG4gICAgICB2YXIgdGl0bGVUeXBlID0gX3R5cGVvZih0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJykpO1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fZW50ZXIgPSBmdW5jdGlvbiBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcblxuICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgkKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1c7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpO1xuXG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICAgIGNvbnRleHQuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2xlYXZlID0gZnVuY3Rpb24gX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG5cbiAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJdID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG5cbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLk9VVDtcblxuICAgICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2lzV2l0aEFjdGl2ZVRyaWdnZXIgPSBmdW5jdGlvbiBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIGZvciAodmFyIHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LCAkKHRoaXMuZWxlbWVudCkuZGF0YSgpLCBjb25maWcpO1xuXG4gICAgICBpZiAoY29uZmlnLmRlbGF5ICYmIHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcudGl0bGUgJiYgdHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuY29udGVudCAmJiB0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2dldERlbGVnYXRlQ29uZmlnID0gZnVuY3Rpb24gX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgICAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gICAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29uZmlnW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9jbGVhblRpcENsYXNzID0gZnVuY3Rpb24gX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgICB2YXIgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpO1xuICAgICAgdmFyIHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWCk7XG4gICAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSA9IGZ1bmN0aW9uIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSkge1xuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpO1xuICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChkYXRhLnBsYWNlbWVudCkpO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fZml4VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIF9maXhUcmFuc2l0aW9uKCkge1xuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdmFyIGluaXRDb25maWdBbmltYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRpb247XG4gICAgICBpZiAodGlwLmdldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkZBREUpO1xuICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gaW5pdENvbmZpZ0FuaW1hdGlvbjtcbiAgICB9O1xuXG4gICAgLy8gc3RhdGljXG5cbiAgICBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcbiAgICAgICAgdmFyIF9jb25maWcgPSAodHlwZW9mIGNvbmZpZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY29uZmlnKSkgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbWV0aG9kIG5hbWVkIFwiJyArIGNvbmZpZyArICdcIicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUb29sdGlwLCBudWxsLCBbe1xuICAgICAga2V5OiAnVkVSU0lPTicsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnRGVmYXVsdCcsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnTkFNRScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIE5BTUU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnREFUQV9LRVknLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEQVRBX0tFWTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdFdmVudCcsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ0VWRU5UX0tFWScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEVWRU5UX0tFWTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdEZWZhdWx0VHlwZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHRUeXBlO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUb29sdGlwO1xuICB9KCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gPSBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb29sdGlwO1xuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwO1xufShqUXVlcnkpOyAvKiBnbG9iYWwgUG9wcGVyICovXG4vLyMgc291cmNlTWFwcGluZ1VSTD10b29sdGlwLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAuanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1iZXRhKTogdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgVGFiID0gZnVuY3Rpb24gKCQpIHtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAndGFiJztcbiAgdmFyIFZFUlNJT04gPSAnNC4wLjAtYmV0YSc7XG4gIHZhciBEQVRBX0tFWSA9ICdicy50YWInO1xuICB2YXIgRVZFTlRfS0VZID0gJy4nICsgREFUQV9LRVk7XG4gIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gIHZhciBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuXG4gIHZhciBFdmVudCA9IHtcbiAgICBISURFOiAnaGlkZScgKyBFVkVOVF9LRVksXG4gICAgSElEREVOOiAnaGlkZGVuJyArIEVWRU5UX0tFWSxcbiAgICBTSE9XOiAnc2hvdycgKyBFVkVOVF9LRVksXG4gICAgU0hPV046ICdzaG93bicgKyBFVkVOVF9LRVksXG4gICAgQ0xJQ0tfREFUQV9BUEk6ICdjbGljaycgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgfTtcblxuICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgIERST1BET1dOX01FTlU6ICdkcm9wZG93bi1tZW51JyxcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIERJU0FCTEVEOiAnZGlzYWJsZWQnLFxuICAgIEZBREU6ICdmYWRlJyxcbiAgICBTSE9XOiAnc2hvdydcbiAgfTtcblxuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgRFJPUERPV046ICcuZHJvcGRvd24nLFxuICAgIE5BVl9MSVNUX0dST1VQOiAnLm5hdiwgLmxpc3QtZ3JvdXAnLFxuICAgIEFDVElWRTogJy5hY3RpdmUnLFxuICAgIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJyxcbiAgICBEUk9QRE9XTl9UT0dHTEU6ICcuZHJvcGRvd24tdG9nZ2xlJyxcbiAgICBEUk9QRE9XTl9BQ1RJVkVfQ0hJTEQ6ICc+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG5cbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcbiAgdmFyIFRhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYWIoZWxlbWVudCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhYik7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIGdldHRlcnNcblxuICAgIC8vIHB1YmxpY1xuXG4gICAgVGFiLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiYgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXQgPSB2b2lkIDA7XG4gICAgICB2YXIgcHJldmlvdXMgPSB2b2lkIDA7XG4gICAgICB2YXIgbGlzdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApWzBdO1xuICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICBpZiAobGlzdEVsZW1lbnQpIHtcbiAgICAgICAgcHJldmlvdXMgPSAkLm1ha2VBcnJheSgkKGxpc3RFbGVtZW50KS5maW5kKFNlbGVjdG9yLkFDVElWRSkpO1xuICAgICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZUV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl9lbGVtZW50LCBsaXN0RWxlbWVudCk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICB2YXIgaGlkZGVuRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJRERFTiwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IF90aGlzLl9lbGVtZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZGVuRXZlbnQpO1xuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBUYWIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBwcml2YXRlXG5cbiAgICBUYWIucHJvdG90eXBlLl9hY3RpdmF0ZSA9IGZ1bmN0aW9uIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGFjdGl2ZSA9ICQoY29udGFpbmVyKS5maW5kKFNlbGVjdG9yLkFDVElWRSlbMF07XG4gICAgICB2YXIgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiBhY3RpdmUgJiYgJChhY3RpdmUpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGlzVHJhbnNpdGlvbmluZywgY2FsbGJhY2spO1xuICAgICAgfTtcblxuICAgICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgJChhY3RpdmUpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRhYi5wcm90b3R5cGUuX3RyYW5zaXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBpc1RyYW5zaXRpb25pbmcsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcblxuICAgICAgICB2YXIgZHJvcGRvd25DaGlsZCA9ICQoYWN0aXZlLnBhcmVudE5vZGUpLmZpbmQoU2VsZWN0b3IuRFJPUERPV05fQUNUSVZFX0NISUxEKVswXTtcblxuICAgICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAgICQoZHJvcGRvd25DaGlsZCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgICAgaWYgKGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgICBVdGlsLnJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiAkKGVsZW1lbnQucGFyZW50Tm9kZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX01FTlUpKSB7XG5cbiAgICAgICAgdmFyIGRyb3Bkb3duRWxlbWVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChTZWxlY3Rvci5EUk9QRE9XTilbMF07XG4gICAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgICAkKGRyb3Bkb3duRWxlbWVudCkuZmluZChTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHN0YXRpY1xuXG4gICAgVGFiLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gJHRoaXMuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUYWIodGhpcyk7XG4gICAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gbWV0aG9kIG5hbWVkIFwiJyArIGNvbmZpZyArICdcIicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhUYWIsIG51bGwsIFt7XG4gICAgICBrZXk6ICdWRVJTSU9OJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGFiO1xuICB9KCk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3Nob3cnKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gPSBUYWIuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRhYjtcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgcmV0dXJuIFRhYi5falF1ZXJ5SW50ZXJmYWNlO1xuICB9O1xuXG4gIHJldHVybiBUYWI7XG59KGpRdWVyeSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YWIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvdGFiLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBNYWtlU3RpY2t5ID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIC8vW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZWxlY3RvciwgbWF4U3RpY2tQb3NpdGlvbiwgbWFyZ2luVG9wKVxuICAgIHtcbiAgICAgICAgaWYodHlwZW9mIG1hcmdpblRvcCA9PSAndW5kZWZpbmVkJykgbWFyZ2luVG9wID0gMDtcbiAgICAgICAgLy8gRmluZCBhbGwgZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIiBlbGVtZW50c1xuICAgICAgICAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzdGlja3kgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBzdGlja3lXcmFwcGVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnc3RpY2t5LXdyYXBwZXInKTsgLy8gaW5zZXJ0IGhpZGRlbiBlbGVtZW50IHRvIG1haW50YWluIGFjdHVhbCB0b3Agb2Zmc2V0IG9uIHBhZ2VcbiAgICAgICAgICBzdGlja3kuYmVmb3JlKHN0aWNreVdyYXBwZXIpO1xuICAgICAgICAgIHN0aWNreS5hZGRDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gU2Nyb2xsICYgcmVzaXplIGV2ZW50c1xuICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsLnN0aWNreS1vbnNjcm9sbCByZXNpemUuc3RpY2t5LW9uc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCAkKHRoaXMpLCBtYXhTdGlja1Bvc2l0aW9uLCBtYXJnaW5Ub3ApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIE9uIHBhZ2UgbG9hZFxuICAgICAgICAgIHN0aWNreVRvZ2dsZShzdGlja3ksIHN0aWNreVdyYXBwZXIsICQod2luZG93KSwgbWF4U3RpY2tQb3NpdGlvbiwgbWFyZ2luVG9wKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCBzY3JvbGxFbGVtZW50LCBtYXhTdGlja1Bvc2l0aW9uLCBtYXJnaW5Ub3ApIHtcbiAgICAgICAgICB2YXIgc3RpY2t5SGVpZ2h0ID0gc3RpY2t5Lm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgdmFyIHN0aWNreVdpZHRoID0gc3RpY2t5Lm91dGVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gc3RpY2t5V3JhcHBlci5vZmZzZXQoKTtcbiAgICAgICAgICB2YXIgc3RpY2t5VG9wID0gb2Zmc2V0LnRvcDtcbiAgICAgICAgICB2YXIgc3RpY2t5TGVmdCA9IG9mZnNldC5sZWZ0O1xuICAgIFxuICAgICAgICAgIHZhciB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIndpblBvcy0+XCIrd2luZG93U2Nyb2xsUG9zaXRpb24rIFwiIHNUb3AtPlwiK3N0aWNreVRvcCtcIiBtYXgtPlwiK21heFN0aWNrUG9zaXRpb24gKTtcbiAgICAgICAgICBpZiAod2luZG93U2Nyb2xsUG9zaXRpb24gPj0gc3RpY2t5VG9wKXtcbiAgICAgICAgICAgIGlmKHdpbmRvd1Njcm9sbFBvc2l0aW9uIDwgbWF4U3RpY2tQb3NpdGlvbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoc3RpY2t5SGVpZ2h0KTtcbiAgICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ3dpZHRoJyxzdGlja3lXaWR0aCsncHgnKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnbGVmdCcsc3RpY2t5TGVmdCsncHgnKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJyxtYXJnaW5Ub3ArJ3B4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLChtYXhTdGlja1Bvc2l0aW9uLXN0aWNreVRvcCkrJ3B4Jyk7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLCcxNXB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gcGx1Z2luO1xuICAgIFxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc3RpY2t5LXRvZ2dsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgU21hcnRGaWx0ZXJzID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICBmaWx0ZXJEcm9wZG93bjogJycsXG4gICAgICAgIGxvYWRpbmdBbmltYXRpb246ICcnLFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyOiAnJyxcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZXR0aW5ncyl7XG4gICAgICAgICQuZXh0ZW5kKCBjb25maWcsIHNldHRpbmdzICk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIHRoZSBTbWFydEZpbHRlcnMnKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB1cmxWYXJzID0gZ2V0VXJsVmFycygpO1xuICAgICAgICBzZXRGaWx0ZXJzRGVmYXVsdFN0YXRlcyh1cmxWYXJzKTtcbiAgICAgICAgXG4gICAgICAgICQoY29uZmlnLmZpbHRlckRyb3Bkb3duKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7ICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoJCh0aGlzKS5odG1sKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICBpZih2YWx1ZSAhPSAnYWxsJykgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgLy9lbHNlIHVybFZhcnMgPSB1bnNldEFycmF5KHVybFZhcnMsYnV0dG9uLmRhdGEoJ2tleScpKTtcbiAgICAgICAgICAgIGVsc2UgZGVsZXRlIHVybFZhcnNbYnV0dG9uLmRhdGEoJ2tleScpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJChjb25maWcubG9hZGluZ0FuaW1hdGlvbikuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgICQoY29uZmlnLnJlc3VsdHNDb250YWluZXIpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKTsvL2hpZGUgdGhlIGRyb3Bkb3duIGFmdGVyIGNsaWNrZWRcbiAgICAgICAgICAgIC8vdmFyIHBhcmVudERyb3Bkb3duID0gYXV4LnBhcmVudCgpO1xuICAgICAgICAgICAgLy9wYXJlbnREcm9wZG93blswXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldEJhc2VVUkwoKSArICc/JyArIHNlcmlhbGl6ZSh1cmxWYXJzICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldEZpbHRlcnNEZWZhdWx0U3RhdGVzKHVybFZhcnMpe1xuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyBmaWx0ZXIgdmFsdWVzJywgdXJsVmFycyk7XG4gICAgICAgIFxuICAgICAgICBjb25maWcuZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXIudXJsS2V5KTtcbiAgICAgICAgICAgIGlmKGZpbHRlci51cmxLZXkgaW4gdXJsVmFycykgJChmaWx0ZXIuYnV0dG9uKS5odG1sKCQoZmlsdGVyLm9wdGlvbnMrJ1tkYXRhLXZhbHVlPVwiJyt1cmxWYXJzW2ZpbHRlci51cmxLZXldKydcIl0nKS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0QmFzZVVSTCgpe1xuICAgICAgICB2YXIgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcGllY2VzID0gYmFzZVVSTC5zcGxpdCgnPycpO1xuICAgICAgICBpZihwaWVjZXMubGVuZ3RoPjEpIGJhc2VVUkwgPSBwaWVjZXNbMF07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYmFzZVVSTDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VXJsVmFycygpe1xuICAgICAgXG4gICAgICAgIHZhciB2YXJzID0gW10sIGhhc2g7XG4gICAgICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICB2YXJzLnB1c2goaGFzaFswXSk7XG4gICAgICAgICAgICB2YXJzW2hhc2hbMF1dID0gaGFzaFsxXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHZhcnNbJzAnXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbZ2V0QmFzZVVSTCgpXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbJyddO1xuICBcbiAgICAgICAgcmV0dXJuIHZhcnM7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgICAgICAgdmFyIHN0ciA9IFtdO1xuICAgICAgICBmb3IodmFyIHAgaW4gb2JqKVxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgICBcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3NtYXJ0LWZpbHRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbG9hZFZpZGVvID0gZnVuY3Rpb24odmlkZW9VUkwsIHNldHRpbmdzKXtcbiAgaWYodHlwZW9mIHNldHRpbmdzID09ICd1bmRlZmluZWQnKSBzZXR0aW5ncyA9IHt9O1xuICB2YXIgcyA9IGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgXG4gIHZhciB2aWRlb1ZpZXdwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZpZGVvVmlld3BvcnQuaWQgPSBcInZpZGVvLXZpZXdwb3J0XCI7XG4gIHZpZGVvVmlld3BvcnQuY2xhc3NMaXN0LmFkZCgndmlkZW8tdmlld3BvcnQnKTtcbiAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh2aWRlb1ZpZXdwb3J0LCBzKTtcbiAgXG4gIHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gIHZpZGVvLnNyYyA9IHZpZGVvVVJMOyB2aWRlby5hdXRvUGxheSA9IHRydWU7IHZpZGVvLmxvb3AgPSB0cnVlOyB2aWRlby5tdXRlZCA9IHRydWU7IFxuICB2aWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby1iYWNrZ3JvdW5kJyk7XG4gIHZpZGVvVmlld3BvcnQuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICBcbiAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsZnVuY3Rpb24oKXsgdmlkZW8ucGxheSgpOyB9KTtcbiAgdmFyIHZpZF93X29yaWcgPSBwYXJzZUludCgkKHdpbmRvdykud2lkdGgoKSk7XG4gIHZhciB2aWRfaF9vcmlnID0gcGFyc2VJbnQoJCh2aWRlbykuaGVpZ2h0KCkpO1xuICB2YXIgbWluX3cgPSA0MDA7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgc291cmNlVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICB2YXIgc291cmNlVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICAgIC8vaWYodmlkX3dfb3JpZyA8PSAwIHx8IHZpZF93X29yaWcgPT0gSW5maW5pdHkpIHZpZF93X29yaWcgPSBwYXJzZUludCgkKHZpZGVvKS53aWR0aCgpKTtcbiAgICAgIC8vaWYodmlkX2hfb3JpZyA8PSAwIHx8IHZpZF9oX29yaWcgPT0gSW5maW5pdHkpIHZpZF9oX29yaWcgPSBwYXJzZUludCgkKHZpZGVvKS5oZWlnaHQoKSk7XG4gICAgICB2YXIgYWRkZWRQYWRkaW5nID0gMTAwO1xuICAgICAgdmFyIHRhcmdldF93aXRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICB2YXIgdGFyZ2V0X2hlaWdoID0gJCgnLm1hc3RoZWFkJykuaGVpZ2h0KCkgKyAkKCduYXYubmF2YmFyJykuaGVpZ2h0KCkgKyBwYXJzZUludCgkKCcubWFzdGhlYWQnKS5jc3MoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUludCgkKCduYXYubmF2YmFyJykuY3NzKCdtYXJnaW4tdG9wJykpICsgYWRkZWRQYWRkaW5nO1xuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS53aWR0aCh0YXJnZXRfd2l0aCk7XG4gICAgICAkKHZpZGVvVmlld3BvcnQpLmhlaWdodChuZXdWaWV3SGVpZ2h0KTtcbiAgXG4gICAgICB2YXIgc2NhbGVfaCA9IHRhcmdldF93aXRoIC8gdmlkX3dfb3JpZztcbiAgICAgIHZhciBzY2FsZV92ID0gdGFyZ2V0X2hlaWdoIC8gdmlkX2hfb3JpZztcbiAgICAgIHZhciBzY2FsZSA9IHNjYWxlX2ggPiBzY2FsZV92ID8gc2NhbGVfaCA6IHNjYWxlX3Y7XG4gIFxuICAgICAgXG4gICAgICBpZiAoc2NhbGUgKiB2aWRfd19vcmlnIDwgbWluX3cpIHNjYWxlID0gbWluX3cgLyB2aWRfd19vcmlnO1xuICAgICAgXG4gICAgICB2YXIgbmV3Vmlld1dpZHRoID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICAgICAgdmFyIG5ld1ZpZXdIZWlnaHQgPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICBcbiAgICAgIC8vaWYgdGhlIG5ldyB3aWR0aCBkb2VzIG5vdCBjb3ZlciB0aGUgZW50aXJlIHNjcmVlbiB3aWR0aFxuICAgICAgaWYgKG5ld1ZpZXdXaWR0aCA8IHNvdXJjZVZpZGVvV2lkdGgpIHNjYWxlID0gc291cmNlVmlkZW9XaWR0aCAvIHZpZF93X29yaWc7XG4gICAgICBpZiAobmV3Vmlld0hlaWdodCA8IHNvdXJjZVZpZGVvSGVpZ2h0ICYmIHNjYWxlIDwgKHNvdXJjZVZpZGVvSGVpZ2h0IC8gdmlkX2hfb3JpZykpIHNjYWxlID0gc291cmNlVmlkZW9IZWlnaHQgLyB2aWRfaF9vcmlnO1xuICAgICAgXG4gICAgICBuZXdWaWV3V2lkdGggPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICBuZXdWaWV3SGVpZ2h0ID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICBcbiAgICAgICQodmlkZW8pLndpZHRoKG5ld1ZpZXdXaWR0aCk7XG4gICAgICAkKHZpZGVvKS5oZWlnaHQobmV3Vmlld0hlaWdodCk7XG4gIFxuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS5zY3JvbGxMZWZ0KChuZXdWaWV3V2lkdGggLSB0YXJnZXRfd2l0aCkgLyAyKTtcbiAgICAgICQodmlkZW9WaWV3cG9ydCkuc2Nyb2xsVG9wKChuZXdWaWV3SGVpZ2h0IC0gdGFyZ2V0X2hlaWdoKSAvIDIpO1xuICB9KTtcbiAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICBcbiAgaWYodHlwZW9mIHNldHRpbmdzLm92ZXJsYXkgIT0gJ3VuZGVmaW5lZCcpe1xuICAgIFxuICAgIHZhciBvdmVybGF5ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYWJzb2x1dGVcIjtcbiAgICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5vdmVybGF5O1xuICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eSA9IFwiMC40XCI7XG4gICAgb3ZlcmxheS5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcbiAgICBvdmVybGF5LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBvdmVybGF5LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG92ZXJsYXkuc3R5bGUuekluZGV4ID0gXCItMVwiO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUob3ZlcmxheSwgcyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRWaWRlbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vcmVzcG9uc2l2ZS12aWRlby5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImZ1bGwtc3RhY2stZnVsbC10aW1lXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJpY2U6ICckMTAwMCBkZXBvc2l0ICsgJDEsMzY0IC8gbW9udGgnLFxuICAgICAgICAgICAgZGV0YWlsczogJ1RoYW5rcyB0byBvdXIgcGFydG5lcnNoaXAgd2l0aCBRdW90YW5kYSB3ZSBoYXZlIG1hbmFnZWQgdG8gY3JlYXRlIHRoZSBtb3N0IGZsZXhpYmxlIHBsYWNlbWVudCBwbGFuIGluIHRvd24nLFxuICAgICAgICAgICAgbG9nbzogJy9hc3NldHMvaW1nL3F1b3RhbmRhLnBuZycsXG4gICAgICAgICAgICBhcHBseVRleHQ6ICdBcHBseSBub3cnLFxuICAgICAgICAgICAgYXBwbHlVUkw6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByaWNlOiAnJDEwMDAgZGVwb3NpdCArICQ3MTAgLyBtb250aCcsXG4gICAgICAgICAgICBkZXRhaWxzOiAnVGhhbmtzIHRvIG91ciBwYXJ0bmVyc2hpcCB3aXRoIFF1b3RhbmRhIHdlIGhhdmUgbWFuYWdlZCB0byBjcmVhdGUgdGhlIG1vc3QgZmxleGlibGUgcGxhY2VtZW50IHBsYW4gaW4gdG93bicsXG4gICAgICAgICAgICBsb2dvOiAnL2Fzc2V0cy9pbWcvcXVvdGFuZGEucG5nJyxcbiAgICAgICAgICAgIGFwcGx5VGV4dDogJ0FwcGx5IG5vdycsXG4gICAgICAgICAgICBhcHBseVVSTDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJpY2U6ICckMTAwMCBkZXBvc2l0ICsgJDM4NCAvIG1vbnRoJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICdUaGFua3MgdG8gb3VyIHBhcnRuZXJzaGlwIHdpdGggUXVvdGFuZGEgd2UgaGF2ZSBtYW5hZ2VkIHRvIGNyZWF0ZSB0aGUgbW9zdCBmbGV4aWJsZSBwbGFjZW1lbnQgcGxhbiBpbiB0b3duJyxcbiAgICAgICAgICAgIGxvZ286ICcvYXNzZXRzL2ltZy9xdW90YW5kYS5wbmcnLFxuICAgICAgICAgICAgYXBwbHlUZXh0OiAnQXBwbHkgbm93JyxcbiAgICAgICAgICAgIGFwcGx5VVJMOiBmYWxzZVxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImZ1bGwtc3RhY2stcGFydC10aW1lXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJpY2U6ICckMTAwMCBkZXBvc2l0ICsgJDg1MyAvIG1vbnRoJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICdUaGFua3MgdG8gb3VyIHBhcnRuZXJzaGlwIHdpdGggUXVvdGFuZGEgd2UgaGF2ZSBtYW5hZ2VkIHRvIGNyZWF0ZSB0aGUgbW9zdCBmbGV4aWJsZSBwbGFjZW1lbnQgcGxhbiBpbiB0b3duJyxcbiAgICAgICAgICAgIGxvZ286ICcvYXNzZXRzL2ltZy9xdW90YW5kYS5wbmcnLFxuICAgICAgICAgICAgYXBwbHlUZXh0OiAnQXBwbHkgbm93JyxcbiAgICAgICAgICAgIGFwcGx5VVJMOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcmljZTogJyQxMDAwIGRlcG9zaXQgKyAkNDQ1IC8gbW9udGgnLFxuICAgICAgICAgICAgZGV0YWlsczogJ1RoYW5rcyB0byBvdXIgcGFydG5lcnNoaXAgd2l0aCBRdW90YW5kYSB3ZSBoYXZlIG1hbmFnZWQgdG8gY3JlYXRlIHRoZSBtb3N0IGZsZXhpYmxlIHBsYWNlbWVudCBwbGFuIGluIHRvd24nLFxuICAgICAgICAgICAgbG9nbzogJy9hc3NldHMvaW1nL3F1b3RhbmRhLnBuZycsXG4gICAgICAgICAgICBhcHBseVRleHQ6ICdBcHBseSBub3cnLFxuICAgICAgICAgICAgYXBwbHlVUkw6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByaWNlOiAnJDEwMDAgZGVwb3NpdCArICQyNDAgLyBtb250aCcsXG4gICAgICAgICAgICBkZXRhaWxzOiAnVGhhbmtzIHRvIG91ciBwYXJ0bmVyc2hpcCB3aXRoIFF1b3RhbmRhIHdlIGhhdmUgbWFuYWdlZCB0byBjcmVhdGUgdGhlIG1vc3QgZmxleGlibGUgcGxhY2VtZW50IHBsYW4gaW4gdG93bicsXG4gICAgICAgICAgICBsb2dvOiAnL2Fzc2V0cy9pbWcvcXVvdGFuZGEucG5nJyxcbiAgICAgICAgICAgIGFwcGx5VGV4dDogJ0FwcGx5IG5vdycsXG4gICAgICAgICAgICBhcHBseVVSTDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJpY2U6ICckMTk4IC8gbW9udGggKE5vIGRlcG9zaXQpJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICdBcHBseSB0byBTa2lsbHNmdW5kIGFuZCBnZXQgMzYgbW9udGggZmluYW5jaW5nLCBwYXkgPHN0cm9uZz5vbmx5ICQxOTggcGVyIG1vbnRoPC9zdHJvbmc+IGFuZCB3aXRoIG5vIGRlcG9zaXQgdG8gc3RhcnQuJyxcbiAgICAgICAgICAgIGxvZ286ICcvYXNzZXRzL2ltZy9za2lsbHNmdW5kLnBuZycsXG4gICAgICAgICAgICBhcHBseVRleHQ6ICdBcHBseSB0byBmaW5hbmNpbmcnLFxuICAgICAgICAgICAgYXBwbHlVUkw6ICdodHRwOi8vNGdlZWtzYWNhZGVteS5za2lsbHMuZnVuZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJpY2U6ICckMTM1IC8gbW9udGggKE5vIGRlcG9zaXQpJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICdBcHBseSB0byBTa2lsbHNmdW5kIGFuZCBnZXQgNjAgbW9udGggZmluYW5jaW5nLCBwYXkgPHN0cm9uZz5vbmx5ICQxMzUgZXZlcnkgbW9udGg8L3N0cm9uZz4gYW5kIHdpdGggbm8gZGVwb3NpdCB0byBzdGFydC4nLFxuICAgICAgICAgICAgbG9nbzogJy9hc3NldHMvaW1nL3NraWxsc2Z1bmQucG5nJyxcbiAgICAgICAgICAgIGFwcGx5VGV4dDogJ0FwcGx5IHRvIGZpbmFuY2luZycsXG4gICAgICAgICAgICBhcHBseVVSTDogJ2h0dHA6Ly80Z2Vla3NhY2FkZW15LnNraWxscy5mdW5kJ1xuICAgICAgICB9XG4gICAgXVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vcHJpY2VzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFRoZVByb2dyYW0gPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgdGhlc2NvcGUgPSB7fTtcbiAgICAvLyBDYWNoZSBzZWxlY3RvcnNcbiAgICB2YXIgdG9wTWVudSA9ICQoXCIucHJvZ3JhbS1tZW51XCIpLFxuICAgICAgICB0b3BNZW51SGVpZ2h0ID0gdG9wTWVudS5vdXRlckhlaWdodCgpKzE1LFxuICAgICAgICAvLyBBbGwgbGlzdCBpdGVtc1xuICAgICAgICBtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCJhW2hyZWYqPScjJ11cIiksXG4gICAgICAgIC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXG4gICAgICAgIHNjcm9sbEl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgIHZhciBpdGVtID0gJCgkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgdGhlc2NvcGUuaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvLyBCaW5kIHRvIHNjcm9sbFxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKSt0b3BNZW51SGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cbiAgICAgICAgICAgdmFyIGN1ciA9IHNjcm9sbEl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgICAgIGlmICgkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3ApXG4gICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAgICAgICBjdXIgPSBjdXJbY3VyLmxlbmd0aC0xXTtcbiAgICAgICAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xuICAgICAgICAgICAvLyBTZXQvcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICBtZW51SXRlbXNcbiAgICAgICAgICAgICAucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAuZW5kKCkuZmlsdGVyKFwiW2hyZWY9JyNcIitpZCtcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoZXNjb3BlO1xuICAgIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlUHJvZ3JhbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcm9ncmFtLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExvY2F0aW9uVmlldyA9IChmdW5jdGlvbigpe1xuICAgIHZhciBzY29wZSA9IHt9O1xuICAgIFxuICAgIFxuICAgIHJldHVybiBzY29wZTtcbn0pKCk7XG5cbkxvY2F0aW9uVmlldy5hY3RpdmF0ZSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBhcnRpY2xlc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgU2tldGNoID0gcmVxdWlyZShcIi4vc2tldGNoXCIpO1xuICBcbmZ1bmN0aW9uIFBhcnRpY2xlKCB4LCB5LCByYWRpdXMgKSB7XG5cdHRoaXMuaW5pdCggeCwgeSwgcmFkaXVzICk7XG59XG5QYXJ0aWNsZS5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgXHRpbml0OiBmdW5jdGlvbiggeCwgeSwgcmFkaXVzICkge1xuICAgIFxuICAgIFx0XHR0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICBcbiAgICBcdFx0dGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTA7XG4gICAgXHRcdHRoaXMud2FuZGVyID0gMC4xNTtcbiAgICBcdFx0dGhpcy50aGV0YSA9IHJhbmRvbSggVFdPX1BJICk7XG4gICAgXHRcdHRoaXMuZHJhZyA9IDAuOTI7XG4gICAgXHRcdHRoaXMuY29sb3IgPSAnI2ZmZic7XG4gICAgXG4gICAgXHRcdHRoaXMueCA9IHggfHwgMC4wO1xuICAgIFx0XHR0aGlzLnkgPSB5IHx8IDAuMDtcbiAgICBcbiAgICBcdFx0dGhpcy52eCA9IDAuMDtcbiAgICBcdFx0dGhpcy52eSA9IDAuMDtcbiAgICBcdH0sXG4gICAgXG4gICAgXHRtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBcdFx0dGhpcy54ICs9IHRoaXMudng7XG4gICAgXHRcdHRoaXMueSArPSB0aGlzLnZ5O1xuICAgIFxuICAgIFx0XHR0aGlzLnZ4ICo9IHRoaXMuZHJhZztcbiAgICBcdFx0dGhpcy52eSAqPSB0aGlzLmRyYWc7XG4gICAgXG4gICAgXHRcdHRoaXMudGhldGEgKz0gcmFuZG9tKCAtMC41LCAwLjUgKSAqIHRoaXMud2FuZGVyO1xuICAgIFx0XHR0aGlzLnZ4ICs9IHNpbiggdGhpcy50aGV0YSApICogMC4xO1xuICAgIFx0XHR0aGlzLnZ5ICs9IGNvcyggdGhpcy50aGV0YSApICogMC4xO1xuICAgIFxuICAgIFx0XHR0aGlzLnJhZGl1cyAqPSAwLjk2O1xuICAgIFx0XHR0aGlzLmFsaXZlID0gdGhpcy5yYWRpdXMgPiAwLjU7XG4gICAgXHR9LFxuICAgIFxuICAgIFx0ZHJhdzogZnVuY3Rpb24oIGN0eCApIHtcbiAgICBcbiAgICBcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuICAgIFx0XHRjdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIFRXT19QSSApO1xuICAgIFx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBcdFx0Y3R4LmZpbGwoKTtcbiAgICBcdH1cbiAgICB9O1xuICBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29udGFpbmVyKXtcbiAgdmFyIE1BWF9QQVJUSUNMRVMgPSAyODA7XG4gIHZhciBDT0xPVVJTID0gWyAnIzY5RDJFNycsICcjQTdEQkQ4JywgJyNFMEU0Q0MnLCAnI0YzODYzMCcsICcjRkE2OTAwJywgJyNGRjRFNTAnLCAnI0Y5RDQyMycgXTtcbiAgdmFyIHBhcnRpY2xlcyA9IFtdO1xuICB2YXIgcG9vbCA9IFtdO1xuICBcbiAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHZhciBmaXJld29ya3NTa2V0Y2ggPSBTa2V0Y2guY3JlYXRlKHsgY29udGFpbmVyOiBjb250YWluZXIgfSk7XG4gIGZpcmV3b3Jrc1NrZXRjaC5zZXR1cCA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHQvLyBTZXQgb2ZmIHNvbWUgaW5pdGlhbCBwYXJ0aWNsZXMuXG4gIFx0dmFyIGksIHgsIHk7XG4gIFxuICBcdGZvciAoIGkgPSAwOyBpIDwgMjA7IGkrKyApIHtcbiAgXHRcdHggPSAoIGZpcmV3b3Jrc1NrZXRjaC53aWR0aCAqIDAuNSApICsgcmFuZG9tKCAtMTAwLCAxMDAgKTtcbiAgXHRcdHkgPSAoIGZpcmV3b3Jrc1NrZXRjaC5oZWlnaHQgKiAwLjUgKSArIHJhbmRvbSggLTEwMCwgMTAwICk7XG4gIFx0XHRmaXJld29ya3NTa2V0Y2guc3Bhd24oIHgsIHkgKTtcbiAgXHR9XG4gIH07XG4gIGZpcmV3b3Jrc1NrZXRjaC5zcGF3biA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICBcbiAgXHRpZiAoIHBhcnRpY2xlcy5sZW5ndGggPj0gTUFYX1BBUlRJQ0xFUyApXG4gIFx0XHRwb29sLnB1c2goIHBhcnRpY2xlcy5zaGlmdCgpICk7XG4gIFxuICBcdHZhciBwYXJ0aWNsZSA9IHBvb2wubGVuZ3RoID8gcG9vbC5wb3AoKSA6IG5ldyBQYXJ0aWNsZSgpO1xuICBcdHBhcnRpY2xlLmluaXQoIHgsIHksIHJhbmRvbSggNSwgNDAgKSApO1xuICBcbiAgXHRwYXJ0aWNsZS53YW5kZXIgPSByYW5kb20oIDAuNSwgMi4wICk7XG4gIFx0cGFydGljbGUuY29sb3IgPSByYW5kb20oIENPTE9VUlMgKTtcbiAgXHRwYXJ0aWNsZS5kcmFnID0gcmFuZG9tKCAwLjksIDAuOTkgKTtcbiAgXG4gIFx0dmFyIHRoZXRhID0gcmFuZG9tKCBUV09fUEkgKTtcbiAgXHR2YXIgZm9yY2UgPSByYW5kb20oIDIsIDggKTtcbiAgXG4gIFx0cGFydGljbGUudnggPSBzaW4oIHRoZXRhICkgKiBmb3JjZTtcbiAgXHRwYXJ0aWNsZS52eSA9IGNvcyggdGhldGEgKSAqIGZvcmNlO1xuICBcbiAgXHRwYXJ0aWNsZXMucHVzaCggcGFydGljbGUgKTtcbiAgfVxuICBmaXJld29ya3NTa2V0Y2gudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdHZhciBpLCBwYXJ0aWNsZTtcbiAgXG4gIFx0Zm9yICggaSA9IHBhcnRpY2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcbiAgXG4gIFx0XHRwYXJ0aWNsZSA9IHBhcnRpY2xlc1tpXTtcbiAgXG4gIFx0XHRpZiAoIHBhcnRpY2xlLmFsaXZlICkgcGFydGljbGUubW92ZSgpO1xuICBcdFx0ZWxzZSBwb29sLnB1c2goIHBhcnRpY2xlcy5zcGxpY2UoIGksIDEgKVswXSApO1xuICBcdH1cbiAgfTtcbiAgZmlyZXdvcmtzU2tldGNoLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0ZmlyZXdvcmtzU2tldGNoLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiAgPSAnbGlnaHRlcic7XG4gIFx0XG4gIFx0Zm9yICggdmFyIGkgPSBwYXJ0aWNsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG4gIFx0XHRwYXJ0aWNsZXNbaV0uZHJhdyggZmlyZXdvcmtzU2tldGNoICk7XG4gIFx0fVxuICB9O1xuICBmaXJld29ya3NTa2V0Y2gubW91c2Vtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIFx0dmFyIHBhcnRpY2xlLCB0aGV0YSwgZm9yY2UsIHRvdWNoLCBtYXgsIGksIGosIG47XG4gICAgICBcbiAgICAgIFx0Zm9yICggaSA9IDAsIG4gPSBmaXJld29ya3NTa2V0Y2gudG91Y2hlcy5sZW5ndGg7IGkgPCBuOyBpKysgKSB7XG4gICAgICBcbiAgICAgIFx0XHR0b3VjaCA9IGZpcmV3b3Jrc1NrZXRjaC50b3VjaGVzW2ldLCBtYXggPSByYW5kb20oIDEsIDQgKTtcbiAgICAgIFx0XHRmb3IgKCBqID0gMDsgaiA8IG1heDsgaisrICkgZmlyZXdvcmtzU2tldGNoLnNwYXduKCB0b3VjaC54LCB0b3VjaC55ICk7XG4gICAgICBcdH1cbiAgICAgIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL2ZpcmV3b3Jrcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNpbmdDYWxjdWxhdG9yKHNlY3Rpb25JZCwgbWVzc2FnZXMpe1xuICBcbiAgdmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xuICB2YXIgbXlTbGlkZXIgPSBuZXcgU2xpZGVyKHNlY3Rpb25JZCsnIC5wcmljaW5nLXNsaWRlcicpO1xuICBteVNsaWRlci5vbignc2xpZGVTdG9wJywgZnVuY3Rpb24obmV3VmFsdWUpe1xuICAgIGlmKHR5cGVvZiBtZXNzYWdlc1tuZXdWYWx1ZV0gIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW25ld1ZhbHVlXS5wcmljZSkgPT0gJ3N0cmluZycpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljZS1sYWJlbCcpLmlubmVySFRNTCA9IG1lc3NhZ2VzW25ld1ZhbHVlXS5wcmljZTtcbiAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1tuZXdWYWx1ZV0uZGV0YWlscykgPT0gJ3N0cmluZycpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5hbmNpbmctZGV0YWlscycpLmlubmVySFRNTCA9IG1lc3NhZ2VzW25ld1ZhbHVlXS5kZXRhaWxzO1xuICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW25ld1ZhbHVlXS5sb2dvKSA9PSAnc3RyaW5nJyl7XG4gICAgICAgIHZhciBsb2dvRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWN0aW9uSWQrJyAuZmluYW5jaW5nLWxvZ28nKTtcbiAgICAgICAgdmFyIHRlbXBsYXRlVVJMID0gbG9nb0VsbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGV1cmwnKTtcbiAgICAgICAgbG9nb0VsbS5zcmMgPSB0ZW1wbGF0ZVVSTCArIG1lc3NhZ2VzW25ld1ZhbHVlXS5sb2dvO1xuICAgICAgfVxuICAgICAgXG4gICAgICB2YXIgYXBwbHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25JZCsnIC5maW5hbmNpbmctYnRuJyk7XG4gICAgICBhcHBseUJ0bi5pbm5lckhUTUwgPSBtZXNzYWdlc1tuZXdWYWx1ZV0uYXBwbHlUZXh0O1xuICAgICAgaWYobWVzc2FnZXNbbmV3VmFsdWVdLmFwcGx5VVJMKXtcbiAgICAgICAgYXBwbHlCdG4uaHJlZiA9IG1lc3NhZ2VzW25ld1ZhbHVlXS5hcHBseVVSTDtcbiAgICAgIH1lbHNle1xuICAgICAgICB2YXIgZGVmYXVsdFVSTCA9IGFwcGx5QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hcHBseWxpbmsnKTtcbiAgICAgICAgYXBwbHlCdG4uaHJlZiA9IGRlZmF1bHRVUkw7XG4gICAgICB9XG4gICAgfVxuXHRcdFxuXHRcdHZhciBwYXltZW50UGxhbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25JZCsnIC5wYXltZW50LXBsYW4nKTtcblx0XHRwYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LmFkZChcImdsb3dcIik7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdHBheW1lbnRQbGFuQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiZ2xvd1wiKTtcblx0XHR9LCAyMDApO1xuICAgIFxuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy92YXIgbmV3c2xldHRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtbmV3c2xldHRlciBmb3JtJyk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgIGlmKGZyb21Ub3A+MTAwKSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICBlbHNlICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xufSk7XG5cblxuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1OZXdzbGV0dGVyID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybU5ld3NsZXR0ZXIuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICBcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnbmV3c2xldHRlcl9zaWdudXAnLFxuICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1OZXdzbGV0dGVyLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybU5ld3NsZXR0ZXIuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxufSk7XG5cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtU3lsbGFidXMgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBmaXJzdE5hbWVGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPXRleHRdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgdmFyIGZpcnN0TmFtZSA9IGZpcnN0TmFtZUZpZWxkLnZhbCgpO1xuICAgXG4gICBpZihlbWFpbCA9PSAnJyB8fCBmaXJzdE5hbWUgPT0nJylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnV2UgbmVlZCB5b3VyIGVtYWlsIGFuZCBmaXJzdCBuYW1lJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZG93bmxvYWRfc3lsbGFidXMnLFxuICAgICAgICAgdGVtcGxhdGU6ICh0eXBlb2YgV1BBU19BUFAudGVtcGxhdGUgPT0gJ3N0cmluZycpID8gV1BBU19BUFAudGVtcGxhdGUucmVwbGFjZSgnc2luZ2xlLScsJycpIDogJ25vbmUnLFxuICAgICAgICAgdXJsOiBXUEFTX0FQUC51cmwsXG4gICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybVN5bGxhYnVzLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICQoJyNzeWxsYWJ1c01vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQocDMpO1xuICAgICAgfVxuICAgfSk7XG4gICB9IFxuICAgXG59KTtcblxuKGZ1bmN0aW9uIGxvYWRBbGVydHMoKXtcbiAgIHZhciBkaXNtaXNzZWRBbGVydHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlzbWlzc2VkX2FsZXJ0cycpO1xuICAgXG4gICBpZihkaXNtaXNzZWRBbGVydHMpIGRpc21pc3NlZEFsZXJ0cyA9IGRpc21pc3NlZEFsZXJ0cy5zcGxpdChcIixcIik7XG4gICBlbHNlIGRpc21pc3NlZEFsZXJ0cyA9IFtdO1xuICAgXG4gICB2YXIgYWxsQWxlcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJ0LWRpc21pc3NpYmxlJyk7XG4gICBhbGxBbGVydHMuZm9yRWFjaChmdW5jdGlvbihhKXtcbiAgICAgIGlmKGRpc21pc3NlZEFsZXJ0cy5pbmRleE9mKGEuaWQpID09IC0xKXtcbiAgICAgICAgIHZhciBhbGVydFRvRGlzbWlzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK2EuaWQpO1xuICAgICAgICAgYWxlcnRUb0Rpc21pc3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgIH0pO1xuICAgdmFyIGNsb3NlQWxlcnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEtZGlzbWlzcz1hbGVydF0nKTtcbiAgIGNsb3NlQWxlcnRCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oYnRuKXtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgIFx0Y29uc29sZS5sb2codGhpcy5wYXJlbnROb2RlKTtcbiAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnBhcmVudE5vZGUuaWQgPT0gJ3VuZGVmaW5lZCcpIFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWW91IG5lZWQgdG8gc3BlY2lmeSBhbiBpZCBmb3IgYWxsIHRoZSBkaXNtaXNhYmxlIGFsZXJ0cycpO1xuICAgICAgXHRkaXNtaXNzZWRBbGVydHMucHVzaCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgICAgXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzbWlzc2VkX2FsZXJ0cycsZGlzbWlzc2VkQWxlcnRzLmpvaW4oJywnKSk7XG4gICAgICBcdHRoaXMucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcbiAgIH0pO1xufSkoKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2dldF91cGNvbWluZ19ldmVudCdcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSkgcHJvbXB0VXBjb21pbmdFdmVudChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSB1cGNvbWluZyBldmVudDogXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2dldF91cGNvbWluZ19ldmVudCcsXG4gICAgICAgICB0eXBlOiAnaW50cm9fdG9fY29kaW5nJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBmaWxsVXBjb21pbmdJbnRyb1RvQ29kaW5nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxuICAgdmFyIG1hc3RlcldoaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc3RoZWFkLXdoaXRlJyk7XG4gICBpZih0eXBlb2YgbWFzdGVyV2hpdGUgIT0gJ3VuZGVmaW5lZCcgJiYgbWFzdGVyV2hpdGUpe1xuICAgICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTsgXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnaW52ZXJ0ZWQnKTtcbiAgIH0gXG59KTtcblxuZnVuY3Rpb24gcHJvbXB0VXBjb21pbmdFdmVudChldmVudCl7XG4gICBcbiAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3BTdGF0ZScpICE9ICdzaG93bicpe1xuICAgICAgZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLmRlbGF5KDIwMDApLmZhZGVJbigpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BvcFN0YXRlJywnc2hvd24nKTtcbiAgICAgICQoJyN1cGNvbWluZ0V2ZW50JykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcHV0IHlvdXIgZGVmYXVsdCBldmVudCBoZXJlXG4gICAgICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgIH1cbn1cblxuZnVuY3Rpb24gZmlsbFVwY29taW5nSW50cm9Ub0NvZGluZyhldmVudCl7XG4gICB2YXIgbW9kYWwgPSAkKCcjZnJlZUNvZGluZ0ludHJvTW9kYWwnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXRlJykuaHRtbChldmVudC5kYXkrJyAnK2V2ZW50Lm1vbnRoKycgJytldmVudC55ZWFyKTtcbiAgIG1vZGFsLmZpbmQoJy5sb2NhdGlvbicpLmh0bWwoZXZlbnQuYWRkcmVzcyk7XG4gICBtb2RhbC5maW5kKCcuYnRuLWRhbmdlcicpLmF0dHIoJ2hyZWYnLGV2ZW50LnVybCk7XG4gICBcbn1cbmZ1bmN0aW9uIGZpbGxVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIHZhciBtb2RhbCA9ICQoJyN1cGNvbWluZ0V2ZW50Jyk7XG4gICBtb2RhbC5maW5kKCcuZGF5JykuaHRtbChldmVudC5kYXkpO1xuICAgbW9kYWwuZmluZCgnLm1vbnRoJykuaHRtbChldmVudC5tb250aCk7XG4gICBtb2RhbC5maW5kKCcueWVhcicpLmh0bWwoZXZlbnQueWVhcik7XG4gICBcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC10aXRsZScpLmh0bWwoZXZlbnQubmFtZSk7XG4gICBtb2RhbC5maW5kKCcuZXZlbnQtZGV0YWlscycpLmh0bWwoJzxzcGFuIGNsYXNzPVwiaW1vb24gaWNvbi1sb2NhdGlvblwiPjwvc3Bhbj4nICsgZXZlbnQuYWRkcmVzcyk7Ly8zOjMwcG0gLSBhdCBTdGFydGh1YiwgRG93bnRvd24gTWlhbWlcbiAgIFxuICAgXG4gICB2YXIgbWF4TGVuZ3RoID0gMzUwOyAvLyBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIGV4dHJhY3RcbiAgIHZhciB0cmltbWVkU3RyaW5nID0gZXZlbnQuZGVzY3JpcHRpb24uc3Vic3RyKDAsIG1heExlbmd0aCk7Ly90cmltIHRoZSBzdHJpbmcgdG8gdGhlIG1heGltdW0gbGVuZ3RoXG4gICB0cmltbWVkU3RyaW5nID0gdHJpbW1lZFN0cmluZy5zdWJzdHIoMCwgTWF0aC5taW4odHJpbW1lZFN0cmluZy5sZW5ndGgsIHRyaW1tZWRTdHJpbmcubGFzdEluZGV4T2YoXCIuXCIpKSk7Ly9yZS10cmltIGlmIHdlIGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgd29yZFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRlc2NyaXB0aW9uJykuaHRtbCh0cmltbWVkU3RyaW5nKycuJyk7XG4gICBcbiAgIG1vZGFsLmZpbmQoJy5idG4tZGFuZ2VyJykuYXR0cignaHJlZicsZXZlbnQudXJsKTtcbiAgIFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsImZ1bmN0aW9uIG9uUGFnZVZpZXcodXJsQ29udGFpbnMsIGNhbGxiYWNrKXtcbiAgICAvL1BhZ2UgdmlldyA9IGFwcGx5LXRoYW5rLXlvdVxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKHVybENvbnRhaW5zKSA+IC0xKSB7XG4gICAgICAgIC8vQ29kZSBnb2VzIGhlcmVcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9ICBcbn1cbmZ1bmN0aW9uIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoZXZlbnROYW1lKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgZGF0YUxheWVyLnB1c2goeydldmVudCc6IGV2ZW50TmFtZX0pO1xuICAgICAgICBjb25zb2xlLmxvZygnRXZlbnQgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDogJytldmVudE5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGNvbnNvbGUubG9nKCdFdmVudCBub3QgYmVpbmcgc2VudCB0byBUYWdNYW5hZ2VyOiAnK2V2ZW50TmFtZSk7XG59XG5mdW5jdGlvbiBzYXZlRGF0YVZhcmlhYmxlKGluZGV4LCB2YWx1ZSl7XG4gICAgaWYodHlwZW9mIGRhdGFMYXllciAhPSAndW5kZWZpbmVkJykgZGF0YUxheWVyLnB1c2goe2luZGV4OiB2YWx1ZX0pO1xuICAgIGVsc2UgY29uc29sZS5sb2coJ0ltcG9zaWJsZSB0byB3cml0ZSAnK2luZGV4Kycgb24gZGF0YUxheWVyJyk7XG4gICAgXG4gICAgXG4gICAgaWYodHlwZW9mIFdQQVNfQVBQID09ICd1bmRlZmluZWQnKSBXUEFTX0FQUCA9IHt9O1xuICAgIGlmKHR5cGVvZiBXUEFTX0FQUC5kYXRhTGF5ZXIgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQLmRhdGFMYXllciA9IHt9O1xuICAgIFdQQVNfQVBQLmRhdGFMYXllcltpbmRleF0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGFjX2V2ZW50KGV2ZW50S2V5LCBldmVudE5hbWUsIHVzZXJFbWFpbCl7XG5cbiAgLy8gd2hhdCB3ZSBkbyBoZXJlLCBpcyBsb2cgYSBzdWNjZXNzZnVsIGV2ZW50IHRvIHRoZSBjb25zb2xlXG4gIC8vIG9yIGNhdGNoIGFueSBlcnJvcnMgd2UgaGF2ZVxuICB2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgIFxuICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGVkIGhhbGZ3YXkgc2Nyb2xsIGV2ZW50XCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHlvdXIgQWN0aXZlQ2FtcGFpZ24gaWQuIFlvdSBjYW4gZ2V0IHRoaXMgZnJvbSB5b3VyIEFDIHNldHRpbmdzIFxuICB2YXIgYWN0aWQgPSBcImRiMTVhMzI2NGZiMmFiZjE5OTk2ZmE0ODg3MzAzOTc1N2Q1MzQ1NDRcIjsgXG5cbiAgdmFyIHZpc2l0ID0ge1xuICAgIGVtYWlsOiB1c2VyRW1haWwgLy8gdGhlIHVzZXIncyBlbWFpbCBhZGRyZXNzXG4gIH07XG5cbiAgLy8gZ2V0IHRoZSB1cmwgb2YgdGhlIHBhZ2UgYW5kIHNlbmQgaXQgYXMgZXZlbnQgZGF0YVxuICB2YXIgZXZlbnREYXRhID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgLy8gYnVpbGQgdGhlIGV2ZW50U3RyaW5nIGJhc2VkIG9uIHRoZSB2YXJpYWJsZXMgeW91IGp1c3QgZWRpdGVkIGFib3ZlIOKYnVxuICB2YXIgZXZlbnRTdHJpbmcgPSBcImFjdGlkPVwiICsgYWN0aWQgXG4gICAgICAgICAgICAgICAgICAgICsgXCIma2V5PVwiICsgZXZlbnRLZXkgXG4gICAgICAgICAgICAgICAgICAgICsgXCImZXZlbnQ9XCIgKyBldmVudE5hbWUgXG4gICAgICAgICAgICAgICAgICAgICsgXCImdmlzaXQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmlzaXQpIFxuICAgICAgICAgICAgICAgICAgICArIFwiJmV2ZW50ZGF0YVwiICsgZXZlbnREYXRhO1xuXG4gIC8vIHNlbmQgdGhlIGV2ZW50IHRvIHRoZSBBY3RpdmVDYW1wYWlnbiBBUEkgd2l0aCBvdXIgZXZlbnQgdmFsdWVzXG4gIHhodHRwLm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly90cmFja2NtcC5uZXQvZXZlbnRcIiwgdHJ1ZSk7XG4gIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gIFxuICBpZihldmVudEtleSE9JycgJiYgZXZlbnROYW1lIT0nJyAmJiB1c2VyRW1haWwhPScnKSB4aHR0cC5zZW5kKGV2ZW50U3RyaW5nKTtcbiAgZWxzZXtcbiAgICAgIGlmKGV2ZW50S2V5PT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgZXZlbnRLZXknLGV2ZW50S2V5KTtcbiAgICAgIGlmKGV2ZW50TmFtZT09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIGV2ZW50TmFtZScsZXZlbnROYW1lKTtcbiAgICAgIGlmKHVzZXJFbWFpbD09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIHVzZXJFbWFpbCcsdXNlckVtYWlsKTtcbiAgfVxufVxuXG4vKipcbiAqIFRhZ21hbmdlciBldmVudHNcbiAqKi9cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7IFxuICAgIFxuICAgIHZhciBlbWFpbElucHV0ID0gJChldmVudC50YXJnZXQpLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICAgaWYoZW1haWxJbnB1dC5sZW5ndGg+MCkgc2F2ZURhdGFWYXJpYWJsZSgndXNlckVtYWlsJyxlbWFpbElucHV0WzBdLnZhbHVlKTtcbiAgICBcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzeWxsYWJ1c19kb3dubG9hZCcpOyBcbn0pO1xuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ25ld3NsZXR0ZXJfc2lnbnVwJyk7IFxufSk7XG4kKCcuYXBwbHktYnRuJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpeyB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdhcHBsaWNhdGlvbl9yZW5kZXJlZCcpOyB9KTtcbm9uUGFnZVZpZXcoXCIvYXBwbHktdGhhbmsteW91XCIsZnVuY3Rpb24oKXtcbiAgICAvL0NvZGUgZ29lcyBoZXJlXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnc3R1ZGVudF9hcHBsaWNhdGlvbicpOyBcbn0pO1xuJCgnI2ZpbmFuY2luZ19ndWlkZV9kb3dubG9hZCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdmaW5hbmNpbmdfZ3VpZGVfZG93bmxvYWQnKTsgXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBldmVudC50YXJnZXQuaHJlZjtcbiAgICByZXR1cm4gZmFsc2U7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vbWFya2V0aW5nLWV2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiJdLCJzb3VyY2VSb290IjoiIn0=