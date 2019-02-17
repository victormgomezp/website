webpackJsonp([2],{

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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__);
__webpack_require__(170);




if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  loadVideo('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  //script for the slider calculator
  var priceCalculator = __webpack_require__(8);
  
  var fireworks = __webpack_require__(14);
  var canvasBg = document.querySelector( '#bg-sketch' );
  fireworks(canvasBg);

}

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

},[169]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL2ZpcmV3b3Jrcy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvc3R5bGVzL2Jsb2cuc2Nzcz82ZmU3Iiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvc2tldGNoLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLEVBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RDs7QUFFQTtBQUNBOztBQUVBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtDQUFrQyxRQUFROztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNDQUFzQyxRQUFR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LG1CQUFPLENBQUMsRUFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxLQUFLO0FBQ0wsR0FBRztBQUNILEMiLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQYXJ0aWNsZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIFNrZXRjaCA9IHJlcXVpcmUoXCIuL3NrZXRjaFwiKTtcbiAgXG5mdW5jdGlvbiBQYXJ0aWNsZSggeCwgeSwgcmFkaXVzICkge1xuXHR0aGlzLmluaXQoIHgsIHksIHJhZGl1cyApO1xufVxuUGFydGljbGUucHJvdG90eXBlID0ge1xuICAgIFxuICAgIFx0aW5pdDogZnVuY3Rpb24oIHgsIHksIHJhZGl1cyApIHtcbiAgICBcbiAgICBcdFx0dGhpcy5hbGl2ZSA9IHRydWU7XG4gICAgXG4gICAgXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwO1xuICAgIFx0XHR0aGlzLndhbmRlciA9IDAuMTU7XG4gICAgXHRcdHRoaXMudGhldGEgPSByYW5kb20oIFRXT19QSSApO1xuICAgIFx0XHR0aGlzLmRyYWcgPSAwLjkyO1xuICAgIFx0XHR0aGlzLmNvbG9yID0gJyNmZmYnO1xuICAgIFxuICAgIFx0XHR0aGlzLnggPSB4IHx8IDAuMDtcbiAgICBcdFx0dGhpcy55ID0geSB8fCAwLjA7XG4gICAgXG4gICAgXHRcdHRoaXMudnggPSAwLjA7XG4gICAgXHRcdHRoaXMudnkgPSAwLjA7XG4gICAgXHR9LFxuICAgIFxuICAgIFx0bW92ZTogZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgXHRcdHRoaXMueCArPSB0aGlzLnZ4O1xuICAgIFx0XHR0aGlzLnkgKz0gdGhpcy52eTtcbiAgICBcbiAgICBcdFx0dGhpcy52eCAqPSB0aGlzLmRyYWc7XG4gICAgXHRcdHRoaXMudnkgKj0gdGhpcy5kcmFnO1xuICAgIFxuICAgIFx0XHR0aGlzLnRoZXRhICs9IHJhbmRvbSggLTAuNSwgMC41ICkgKiB0aGlzLndhbmRlcjtcbiAgICBcdFx0dGhpcy52eCArPSBzaW4oIHRoaXMudGhldGEgKSAqIDAuMTtcbiAgICBcdFx0dGhpcy52eSArPSBjb3MoIHRoaXMudGhldGEgKSAqIDAuMTtcbiAgICBcbiAgICBcdFx0dGhpcy5yYWRpdXMgKj0gMC45NjtcbiAgICBcdFx0dGhpcy5hbGl2ZSA9IHRoaXMucmFkaXVzID4gMC41O1xuICAgIFx0fSxcbiAgICBcbiAgICBcdGRyYXc6IGZ1bmN0aW9uKCBjdHggKSB7XG4gICAgXG4gICAgXHRcdGN0eC5iZWdpblBhdGgoKTtcbiAgICBcdFx0Y3R4LmFyYyggdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBUV09fUEkgKTtcbiAgICBcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgXHRcdGN0eC5maWxsKCk7XG4gICAgXHR9XG4gICAgfTtcbiAgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbnRhaW5lcil7XG4gIHZhciBNQVhfUEFSVElDTEVTID0gMjgwO1xuICB2YXIgQ09MT1VSUyA9IFsgJyM2OUQyRTcnLCAnI0E3REJEOCcsICcjRTBFNENDJywgJyNGMzg2MzAnLCAnI0ZBNjkwMCcsICcjRkY0RTUwJywgJyNGOUQ0MjMnIF07XG4gIHZhciBwYXJ0aWNsZXMgPSBbXTtcbiAgdmFyIHBvb2wgPSBbXTtcbiAgXG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB2YXIgZmlyZXdvcmtzU2tldGNoID0gU2tldGNoLmNyZWF0ZSh7IGNvbnRhaW5lcjogY29udGFpbmVyIH0pO1xuICBmaXJld29ya3NTa2V0Y2guc2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0Ly8gU2V0IG9mZiBzb21lIGluaXRpYWwgcGFydGljbGVzLlxuICBcdHZhciBpLCB4LCB5O1xuICBcbiAgXHRmb3IgKCBpID0gMDsgaSA8IDIwOyBpKysgKSB7XG4gIFx0XHR4ID0gKCBmaXJld29ya3NTa2V0Y2gud2lkdGggKiAwLjUgKSArIHJhbmRvbSggLTEwMCwgMTAwICk7XG4gIFx0XHR5ID0gKCBmaXJld29ya3NTa2V0Y2guaGVpZ2h0ICogMC41ICkgKyByYW5kb20oIC0xMDAsIDEwMCApO1xuICBcdFx0ZmlyZXdvcmtzU2tldGNoLnNwYXduKCB4LCB5ICk7XG4gIFx0fVxuICB9O1xuICBmaXJld29ya3NTa2V0Y2guc3Bhd24gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgXG4gIFx0aWYgKCBwYXJ0aWNsZXMubGVuZ3RoID49IE1BWF9QQVJUSUNMRVMgKVxuICBcdFx0cG9vbC5wdXNoKCBwYXJ0aWNsZXMuc2hpZnQoKSApO1xuICBcbiAgXHR2YXIgcGFydGljbGUgPSBwb29sLmxlbmd0aCA/IHBvb2wucG9wKCkgOiBuZXcgUGFydGljbGUoKTtcbiAgXHRwYXJ0aWNsZS5pbml0KCB4LCB5LCByYW5kb20oIDUsIDQwICkgKTtcbiAgXG4gIFx0cGFydGljbGUud2FuZGVyID0gcmFuZG9tKCAwLjUsIDIuMCApO1xuICBcdHBhcnRpY2xlLmNvbG9yID0gcmFuZG9tKCBDT0xPVVJTICk7XG4gIFx0cGFydGljbGUuZHJhZyA9IHJhbmRvbSggMC45LCAwLjk5ICk7XG4gIFxuICBcdHZhciB0aGV0YSA9IHJhbmRvbSggVFdPX1BJICk7XG4gIFx0dmFyIGZvcmNlID0gcmFuZG9tKCAyLCA4ICk7XG4gIFxuICBcdHBhcnRpY2xlLnZ4ID0gc2luKCB0aGV0YSApICogZm9yY2U7XG4gIFx0cGFydGljbGUudnkgPSBjb3MoIHRoZXRhICkgKiBmb3JjZTtcbiAgXG4gIFx0cGFydGljbGVzLnB1c2goIHBhcnRpY2xlICk7XG4gIH1cbiAgZmlyZXdvcmtzU2tldGNoLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHR2YXIgaSwgcGFydGljbGU7XG4gIFxuICBcdGZvciAoIGkgPSBwYXJ0aWNsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG4gIFxuICBcdFx0cGFydGljbGUgPSBwYXJ0aWNsZXNbaV07XG4gIFxuICBcdFx0aWYgKCBwYXJ0aWNsZS5hbGl2ZSApIHBhcnRpY2xlLm1vdmUoKTtcbiAgXHRcdGVsc2UgcG9vbC5wdXNoKCBwYXJ0aWNsZXMuc3BsaWNlKCBpLCAxIClbMF0gKTtcbiAgXHR9XG4gIH07XG4gIGZpcmV3b3Jrc1NrZXRjaC5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdGZpcmV3b3Jrc1NrZXRjaC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gID0gJ2xpZ2h0ZXInO1xuICBcdFxuICBcdGZvciAoIHZhciBpID0gcGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuICBcdFx0cGFydGljbGVzW2ldLmRyYXcoIGZpcmV3b3Jrc1NrZXRjaCApO1xuICBcdH1cbiAgfTtcbiAgZmlyZXdvcmtzU2tldGNoLm1vdXNlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgICBcdHZhciBwYXJ0aWNsZSwgdGhldGEsIGZvcmNlLCB0b3VjaCwgbWF4LCBpLCBqLCBuO1xuICAgICAgXG4gICAgICBcdGZvciAoIGkgPSAwLCBuID0gZmlyZXdvcmtzU2tldGNoLnRvdWNoZXMubGVuZ3RoOyBpIDwgbjsgaSsrICkge1xuICAgICAgXG4gICAgICBcdFx0dG91Y2ggPSBmaXJld29ya3NTa2V0Y2gudG91Y2hlc1tpXSwgbWF4ID0gcmFuZG9tKCAxLCA0ICk7XG4gICAgICBcdFx0Zm9yICggaiA9IDA7IGogPCBtYXg7IGorKyApIGZpcmV3b3Jrc1NrZXRjaC5zcGF3biggdG91Y2gueCwgdG91Y2gueSApO1xuICAgICAgXHR9XG4gICAgICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9maXJld29ya3MuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwicmVxdWlyZSgnLi4vc3R5bGVzL2Jsb2cuc2NzcycpO1xuXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3V0aWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByaWNpbmcnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByZWNpbycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL3ByaWNpbmcubXA0Jyk7XG4gIFxuICAvL3NjcmlwdCBmb3IgdGhlIHNsaWRlciBjYWxjdWxhdG9yXG4gIHZhciBwcmljZUNhbGN1bGF0b3IgPSByZXF1aXJlKCcuL2xpYi9wcmljZUNhbGN1bGF0b3IuanMnKTtcbiAgXG4gIHZhciBmaXJld29ya3MgPSByZXF1aXJlKCcuL2xpYi9maXJld29ya3MuanMnKTtcbiAgdmFyIGNhbnZhc0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNiZy1za2V0Y2gnICk7XG4gIGZpcmV3b3JrcyhjYW52YXNCZyk7XG5cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9ibG9nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvYmxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG4vKiBDb3B5cmlnaHQgKEMpIDIwMTMgSnVzdGluIFdpbmRsZSwgaHR0cDovL3NvdWx3aXJlLmNvLnVrICovXG5cbihmdW5jdGlvbiAoIHJvb3QsIGZhY3RvcnkgKSB7XG5cbiAgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAvLyBDb21tb25KUyBsaWtlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QsIHJvb3QuZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcblxuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZnVuY3Rpb24oKSB7IHJldHVybiBmYWN0b3J5KCByb290LCByb290LmRvY3VtZW50ICk7IH0pO1xuXG4gIH0gZWxzZSB7XG5cbiAgICAvLyBCcm93c2VyIGdsb2JhbFxuICAgIHJvb3QuU2tldGNoID0gZmFjdG9yeSggcm9vdCwgcm9vdC5kb2N1bWVudCApO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiAoIHdpbmRvdywgZG9jdW1lbnQgKSB7XG5cblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBDb25maWdcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIE1BVEhfUFJPUFMgPSAnRSBMTjEwIExOMiBMT0cyRSBMT0cxMEUgUEkgU1FSVDFfMiBTUVJUMiBhYnMgYWNvcyBhc2luIGF0YW4gY2VpbCBjb3MgZXhwIGZsb29yIGxvZyByb3VuZCBzaW4gc3FydCB0YW4gYXRhbjIgcG93IG1heCBtaW4nLnNwbGl0KCAnICcgKTtcbiAgdmFyIEhBU19TS0VUQ0ggPSAnX19oYXNTa2V0Y2gnO1xuICB2YXIgTSA9IE1hdGg7XG5cbiAgdmFyIENBTlZBUyA9ICdjYW52YXMnO1xuICB2YXIgV0VCR0wgPSAnd2ViZ2wnO1xuICB2YXIgRE9NID0gJ2RvbSc7XG5cbiAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIHZhciBpbnN0YW5jZXMgPSBbXTtcblxuICB2YXIgZGVmYXVsdHMgPSB7XG5cbiAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgIGF1dG9zdGFydDogdHJ1ZSxcbiAgICBhdXRvY2xlYXI6IHRydWUsXG4gICAgYXV0b3BhdXNlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogZG9jLmJvZHksXG4gICAgaW50ZXJ2YWw6IDEsXG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICByZXRpbmE6IGZhbHNlLFxuICAgIHR5cGU6IENBTlZBU1xuICB9O1xuXG4gIHZhciBrZXlNYXAgPSB7XG5cbiAgICAgODogJ0JBQ0tTUEFDRScsXG4gICAgIDk6ICdUQUInLFxuICAgIDEzOiAnRU5URVInLFxuICAgIDE2OiAnU0hJRlQnLFxuICAgIDI3OiAnRVNDQVBFJyxcbiAgICAzMjogJ1NQQUNFJyxcbiAgICAzNzogJ0xFRlQnLFxuICAgIDM4OiAnVVAnLFxuICAgIDM5OiAnUklHSFQnLFxuICAgIDQwOiAnRE9XTidcbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBVdGlsaXRpZXNcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgZnVuY3Rpb24gaXNBcnJheSggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggb2JqZWN0ICkgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdmdW5jdGlvbic7XG4gIH1cblxuICBmdW5jdGlvbiBpc051bWJlciggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ251bWJlcic7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cmluZyggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ3N0cmluZyc7XG4gIH1cblxuICBmdW5jdGlvbiBrZXlOYW1lKCBjb2RlICkge1xuXG4gICAgcmV0dXJuIGtleU1hcFsgY29kZSBdIHx8IFN0cmluZy5mcm9tQ2hhckNvZGUoIGNvZGUgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dGVuZCggdGFyZ2V0LCBzb3VyY2UsIG92ZXJ3cml0ZSApIHtcblxuICAgIGZvciAoIHZhciBrZXkgaW4gc291cmNlIClcblxuICAgICAgaWYgKCBvdmVyd3JpdGUgfHwgISgga2V5IGluIHRhcmdldCApIClcblxuICAgICAgICB0YXJnZXRbIGtleSBdID0gc291cmNlWyBrZXkgXTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eSggbWV0aG9kLCBjb250ZXh0ICkge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXG4gICAgICBtZXRob2QuYXBwbHkoIGNvbnRleHQsIGFyZ3VtZW50cyApO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZSggdGFyZ2V0ICkge1xuXG4gICAgdmFyIG9iamVjdCA9IHt9O1xuXG4gICAgZm9yICggdmFyIGtleSBpbiB0YXJnZXQgKSB7XG4gICAgICBcbiAgICAgIGlmICgga2V5ID09PSAnd2Via2l0TW92ZW1lbnRYJyB8fCBrZXkgPT09ICd3ZWJraXRNb3ZlbWVudFknIClcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmICggaXNGdW5jdGlvbiggdGFyZ2V0WyBrZXkgXSApIClcblxuICAgICAgICBvYmplY3RbIGtleSBdID0gcHJveHkoIHRhcmdldFsga2V5IF0sIHRhcmdldCApO1xuXG4gICAgICBlbHNlXG5cbiAgICAgICAgb2JqZWN0WyBrZXkgXSA9IHRhcmdldFsga2V5IF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIENvbnN0cnVjdG9yXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCBjb250ZXh0ICkge1xuXG4gICAgdmFyIHJlcXVlc3QsIGhhbmRsZXIsIHRhcmdldCwgcGFyZW50LCBib3VuZHMsIGluZGV4LCBzdWZmaXgsIGNsb2NrLCBub2RlLCBjb3B5LCB0eXBlLCBrZXksIHZhbCwgbWluLCBtYXgsIHcsIGg7XG5cbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIHRvdWNoZXMgPSBbXTtcbiAgICB2YXIgcmVzaXplZCA9IGZhbHNlO1xuICAgIHZhciBzZXR1cCA9IGZhbHNlO1xuICAgIHZhciByYXRpbyA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgdmFyIGlzRGl2ID0gY29udGV4dC50eXBlID09IERPTTtcbiAgICB2YXIgaXMyRCA9IGNvbnRleHQudHlwZSA9PSBDQU5WQVM7XG5cbiAgICB2YXIgbW91c2UgPSB7XG4gICAgICB4OiAgMC4wLCB5OiAgMC4wLFxuICAgICAgb3g6IDAuMCwgb3k6IDAuMCxcbiAgICAgIGR4OiAwLjAsIGR5OiAwLjBcbiAgICB9O1xuXG4gICAgdmFyIGV2ZW50TWFwID0gW1xuXG4gICAgICBjb250ZXh0LmV2ZW50VGFyZ2V0IHx8IGNvbnRleHQuZWxlbWVudCxcblxuICAgICAgICBwb2ludGVyLCAnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2Vtb3ZlJywgJ3RvdWNobW92ZScsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZXVwJywgJ3RvdWNoZW5kJyxcbiAgICAgICAgcG9pbnRlciwgJ2NsaWNrJyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlb3V0JyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlb3ZlcicsXG5cbiAgICAgIGRvYyxcblxuICAgICAgICBrZXlwcmVzcywgJ2tleWRvd24nLCAna2V5dXAnLFxuXG4gICAgICB3aW4sXG5cbiAgICAgICAgYWN0aXZlLCAnZm9jdXMnLCAnYmx1cicsXG4gICAgICAgIHJlc2l6ZSwgJ3Jlc2l6ZSdcbiAgICBdO1xuXG4gICAgdmFyIGtleXMgPSB7fTsgZm9yICgga2V5IGluIGtleU1hcCApIGtleXNbIGtleU1hcFsga2V5IF0gXSA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciggbWV0aG9kICkge1xuXG4gICAgICBpZiAoIGlzRnVuY3Rpb24oIG1ldGhvZCApIClcblxuICAgICAgICBtZXRob2QuYXBwbHkoIGNvbnRleHQsIFtdLnNwbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmQoIG9uICkge1xuXG4gICAgICBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRNYXAubGVuZ3RoOyBpbmRleCsrICkge1xuXG4gICAgICAgIG5vZGUgPSBldmVudE1hcFsgaW5kZXggXTtcblxuICAgICAgICBpZiAoIGlzU3RyaW5nKCBub2RlICkgKVxuXG4gICAgICAgICAgdGFyZ2V0WyAoIG9uID8gJ2FkZCcgOiAncmVtb3ZlJyApICsgJ0V2ZW50TGlzdGVuZXInIF0uY2FsbCggdGFyZ2V0LCBub2RlLCBoYW5kbGVyLCBmYWxzZSApO1xuXG4gICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKCBub2RlICkgKVxuXG4gICAgICAgICAgaGFuZGxlciA9IG5vZGU7XG5cbiAgICAgICAgZWxzZSB0YXJnZXQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuICAgICAgY0FGKCByZXF1ZXN0ICk7XG4gICAgICByZXF1ZXN0ID0gckFGKCB1cGRhdGUgKTtcblxuICAgICAgaWYgKCAhc2V0dXAgKSB7XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5zZXR1cCApO1xuICAgICAgICBzZXR1cCA9IGlzRnVuY3Rpb24oIGNvbnRleHQuc2V0dXAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCAhcmVzaXplZCApIHtcbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5yZXNpemUgKTtcbiAgICAgICAgcmVzaXplZCA9IGlzRnVuY3Rpb24oIGNvbnRleHQucmVzaXplICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggY29udGV4dC5ydW5uaW5nICYmICFjb3VudGVyICkge1xuXG4gICAgICAgIGNvbnRleHQuZHQgPSAoIGNsb2NrID0gK25ldyBEYXRlKCkgKSAtIGNvbnRleHQubm93O1xuICAgICAgICBjb250ZXh0Lm1pbGxpcyArPSBjb250ZXh0LmR0O1xuICAgICAgICBjb250ZXh0Lm5vdyA9IGNsb2NrO1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQudXBkYXRlICk7XG5cbiAgICAgICAgLy8gUHJlIGRyYXdcblxuICAgICAgICBpZiAoIGlzMkQgKSB7XG5cbiAgICAgICAgICBpZiAoIGNvbnRleHQucmV0aW5hICkge1xuXG4gICAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvbnRleHQuYXV0b2NsZWFyKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoIHJhdGlvLCByYXRpbyApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICggY29udGV4dC5hdXRvY2xlYXIgKVxuXG4gICAgICAgICAgICBjb250ZXh0LmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEcmF3XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5kcmF3ICk7XG5cbiAgICAgICAgLy8gUG9zdCBkcmF3XG5cbiAgICAgICAgaWYgKCBpczJEICYmIGNvbnRleHQucmV0aW5hIClcblxuICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuXG4gICAgICBjb3VudGVyID0gKytjb3VudGVyICUgY29udGV4dC5pbnRlcnZhbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemUoKSB7XG5cbiAgICAgIHRhcmdldCA9IGlzRGl2ID8gY29udGV4dC5zdHlsZSA6IGNvbnRleHQuY2FudmFzO1xuICAgICAgc3VmZml4ID0gaXNEaXYgPyAncHgnIDogJyc7XG5cbiAgICAgIHcgPSBjb250ZXh0LndpZHRoO1xuICAgICAgaCA9IGNvbnRleHQuaGVpZ2h0O1xuXG4gICAgICBpZiAoIGNvbnRleHQuZnVsbHNjcmVlbiApIHtcblxuICAgICAgICBoID0gY29udGV4dC5oZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gICAgICAgIHcgPSBjb250ZXh0LndpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICggY29udGV4dC5yZXRpbmEgJiYgaXMyRCAmJiByYXRpbyApIHtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG4gICAgICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuXG4gICAgICAgIHcgKj0gcmF0aW87XG4gICAgICAgIGggKj0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIGlmICggdGFyZ2V0LmhlaWdodCAhPT0gaCApXG5cbiAgICAgICAgdGFyZ2V0LmhlaWdodCA9IGggKyBzdWZmaXg7XG5cbiAgICAgIGlmICggdGFyZ2V0LndpZHRoICE9PSB3IClcblxuICAgICAgICB0YXJnZXQud2lkdGggPSB3ICsgc3VmZml4O1xuXG4gICAgICBpZiAoIGlzMkQgJiYgIWNvbnRleHQuYXV0b2NsZWFyICYmIGNvbnRleHQucmV0aW5hIClcblxuICAgICAgICBjb250ZXh0LnNjYWxlKCByYXRpbywgcmF0aW8gKTtcblxuICAgICAgaWYgKCBzZXR1cCApIHRyaWdnZXIoIGNvbnRleHQucmVzaXplICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxpZ24oIHRvdWNoLCB0YXJnZXQgKSB7XG5cbiAgICAgIGJvdW5kcyA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgdG91Y2gueCA9IHRvdWNoLnBhZ2VYIC0gYm91bmRzLmxlZnQgLSAod2luLnNjcm9sbFggfHwgd2luLnBhZ2VYT2Zmc2V0KTtcbiAgICAgIHRvdWNoLnkgPSB0b3VjaC5wYWdlWSAtIGJvdW5kcy50b3AgLSAod2luLnNjcm9sbFkgfHwgd2luLnBhZ2VZT2Zmc2V0KTtcblxuICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF1Z21lbnQoIHRvdWNoLCB0YXJnZXQgKSB7XG5cbiAgICAgIGFsaWduKCB0b3VjaCwgY29udGV4dC5lbGVtZW50ICk7XG5cbiAgICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcblxuICAgICAgdGFyZ2V0Lm94ID0gdGFyZ2V0LnggfHwgdG91Y2gueDtcbiAgICAgIHRhcmdldC5veSA9IHRhcmdldC55IHx8IHRvdWNoLnk7XG5cbiAgICAgIHRhcmdldC54ID0gdG91Y2gueDtcbiAgICAgIHRhcmdldC55ID0gdG91Y2gueTtcblxuICAgICAgdGFyZ2V0LmR4ID0gdGFyZ2V0LnggLSB0YXJnZXQub3g7XG4gICAgICB0YXJnZXQuZHkgPSB0YXJnZXQueSAtIHRhcmdldC5veTtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzKCBldmVudCApIHtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29weSA9IGNsb25lKCBldmVudCApO1xuICAgICAgY29weS5vcmlnaW5hbEV2ZW50ID0gZXZlbnQ7XG5cbiAgICAgIGlmICggY29weS50b3VjaGVzICkge1xuXG4gICAgICAgIHRvdWNoZXMubGVuZ3RoID0gY29weS50b3VjaGVzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgY29weS50b3VjaGVzLmxlbmd0aDsgaW5kZXgrKyApXG5cbiAgICAgICAgICB0b3VjaGVzWyBpbmRleCBdID0gYXVnbWVudCggY29weS50b3VjaGVzWyBpbmRleCBdLCB0b3VjaGVzWyBpbmRleCBdICk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdG91Y2hlcy5sZW5ndGggPSAwO1xuICAgICAgICB0b3VjaGVzWzBdID0gYXVnbWVudCggY29weSwgbW91c2UgKTtcbiAgICAgIH1cblxuICAgICAgZXh0ZW5kKCBtb3VzZSwgdG91Y2hlc1swXSwgdHJ1ZSApO1xuXG4gICAgICByZXR1cm4gY29weTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb2ludGVyKCBldmVudCApIHtcblxuICAgICAgZXZlbnQgPSBwcm9jZXNzKCBldmVudCApO1xuXG4gICAgICBtaW4gPSAoIG1heCA9IGV2ZW50TWFwLmluZGV4T2YoIHR5cGUgPSBldmVudC50eXBlICkgKSAtIDE7XG5cbiAgICAgIGNvbnRleHQuZHJhZ2dpbmcgPVxuXG4gICAgICAgIC9kb3dufHN0YXJ0Ly50ZXN0KCB0eXBlICkgPyB0cnVlIDpcblxuICAgICAgICAvdXB8ZW5kLy50ZXN0KCB0eXBlICkgPyBmYWxzZSA6XG5cbiAgICAgICAgY29udGV4dC5kcmFnZ2luZztcblxuICAgICAgd2hpbGUoIG1pbiApXG5cbiAgICAgICAgaXNTdHJpbmcoIGV2ZW50TWFwWyBtaW4gXSApID9cblxuICAgICAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50TWFwWyBtaW4tLSBdIF0sIGV2ZW50ICkgOlxuXG4gICAgICAgIGlzU3RyaW5nKCBldmVudE1hcFsgbWF4IF0gKSA/XG5cbiAgICAgICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudE1hcFsgbWF4KysgXSBdLCBldmVudCApIDpcblxuICAgICAgICBtaW4gPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleXByZXNzKCBldmVudCApIHtcblxuICAgICAga2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICAgIHZhbCA9IGV2ZW50LnR5cGUgPT0gJ2tleXVwJztcbiAgICAgIGtleXNbIGtleSBdID0ga2V5c1sga2V5TmFtZSgga2V5ICkgXSA9ICF2YWw7XG5cbiAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50LnR5cGUgXSwgZXZlbnQgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmUoIGV2ZW50ICkge1xuXG4gICAgICBpZiAoIGNvbnRleHQuYXV0b3BhdXNlIClcblxuICAgICAgICAoIGV2ZW50LnR5cGUgPT0gJ2JsdXInID8gc3RvcCA6IHN0YXJ0ICkoKTtcblxuICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnQudHlwZSBdLCBldmVudCApO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBBUElcblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gICAgICBjb250ZXh0Lm5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgICAgY29udGV4dC5ydW5uaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuXG4gICAgICBjb250ZXh0LnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cbiAgICAgICggY29udGV4dC5ydW5uaW5nID8gc3RvcCA6IHN0YXJ0ICkoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcblxuICAgICAgaWYgKCBpczJEIClcblxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCggMCwgMCwgY29udGV4dC53aWR0aCAqIHJhdGlvLCBjb250ZXh0LmhlaWdodCAqIHJhdGlvICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcblxuICAgICAgcGFyZW50ID0gY29udGV4dC5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBpbmRleCA9IGluc3RhbmNlcy5pbmRleE9mKCBjb250ZXh0ICk7XG5cbiAgICAgIGlmICggcGFyZW50ICkgcGFyZW50LnJlbW92ZUNoaWxkKCBjb250ZXh0LmVsZW1lbnQgKTtcbiAgICAgIGlmICggfmluZGV4ICkgaW5zdGFuY2VzLnNwbGljZSggaW5kZXgsIDEgKTtcblxuICAgICAgYmluZCggZmFsc2UgKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG5cbiAgICBleHRlbmQoIGNvbnRleHQsIHtcblxuICAgICAgdG91Y2hlczogdG91Y2hlcyxcbiAgICAgIG1vdXNlOiBtb3VzZSxcbiAgICAgIGtleXM6IGtleXMsXG5cbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgbWlsbGlzOiAwLFxuICAgICAgbm93OiBOYU4sXG4gICAgICBkdDogTmFOLFxuXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgICBjbGVhcjogY2xlYXIsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBzdG9wOiBzdG9wXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZXMucHVzaCggY29udGV4dCApO1xuXG4gICAgcmV0dXJuICggY29udGV4dC5hdXRvc3RhcnQgJiYgc3RhcnQoKSwgYmluZCggdHJ1ZSApLCByZXNpemUoKSwgdXBkYXRlKCksIGNvbnRleHQgKTtcbiAgfVxuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIEdsb2JhbCBBUElcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIGVsZW1lbnQsIGNvbnRleHQsIFNrZXRjaCA9IHtcblxuICAgIENBTlZBUzogQ0FOVkFTLFxuICAgIFdFQl9HTDogV0VCR0wsXG4gICAgV0VCR0w6IFdFQkdMLFxuICAgIERPTTogRE9NLFxuXG4gICAgaW5zdGFuY2VzOiBpbnN0YW5jZXMsXG5cbiAgICBpbnN0YWxsOiBmdW5jdGlvbiggY29udGV4dCApIHtcblxuICAgICAgaWYgKCAhY29udGV4dFsgSEFTX1NLRVRDSCBdICkge1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IE1BVEhfUFJPUFMubGVuZ3RoOyBpKysgKVxuXG4gICAgICAgICAgY29udGV4dFsgTUFUSF9QUk9QU1tpXSBdID0gTVsgTUFUSF9QUk9QU1tpXSBdO1xuXG4gICAgICAgIGV4dGVuZCggY29udGV4dCwge1xuXG4gICAgICAgICAgVFdPX1BJOiBNLlBJICogMixcbiAgICAgICAgICBIQUxGX1BJOiBNLlBJIC8gMixcbiAgICAgICAgICBRVUFSVEVSX1BJOiBNLlBJIC8gNCxcblxuICAgICAgICAgIHJhbmRvbTogZnVuY3Rpb24oIG1pbiwgbWF4ICkge1xuXG4gICAgICAgICAgICBpZiAoIGlzQXJyYXkoIG1pbiApIClcblxuICAgICAgICAgICAgICByZXR1cm4gbWluWyB+figgTS5yYW5kb20oKSAqIG1pbi5sZW5ndGggKSBdO1xuXG4gICAgICAgICAgICBpZiAoICFpc051bWJlciggbWF4ICkgKVxuXG4gICAgICAgICAgICAgIG1heCA9IG1pbiB8fCAxLCBtaW4gPSAwO1xuXG4gICAgICAgICAgICByZXR1cm4gbWluICsgTS5yYW5kb20oKSAqICggbWF4IC0gbWluICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGxlcnA6IGZ1bmN0aW9uKCBtaW4sIG1heCwgYW1vdW50ICkge1xuXG4gICAgICAgICAgICByZXR1cm4gbWluICsgYW1vdW50ICogKCBtYXggLSBtaW4gKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbWFwOiBmdW5jdGlvbiggbnVtLCBtaW5BLCBtYXhBLCBtaW5CLCBtYXhCICkge1xuXG4gICAgICAgICAgICByZXR1cm4gKCBudW0gLSBtaW5BICkgLyAoIG1heEEgLSBtaW5BICkgKiAoIG1heEIgLSBtaW5CICkgKyBtaW5CO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGV4dFsgSEFTX1NLRVRDSCBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuICAgICAgb3B0aW9ucyA9IGV4dGVuZCggb3B0aW9ucyB8fCB7fSwgZGVmYXVsdHMgKTtcblxuICAgICAgaWYgKCBvcHRpb25zLmdsb2JhbHMgKSBTa2V0Y2guaW5zdGFsbCggc2VsZiApO1xuXG4gICAgICBlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50IHx8IGRvYy5jcmVhdGVFbGVtZW50KCBvcHRpb25zLnR5cGUgPT09IERPTSA/ICdkaXYnIDogJ2NhbnZhcycgKTtcblxuICAgICAgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgc3dpdGNoKCBvcHRpb25zLnR5cGUgKSB7XG5cbiAgICAgICAgICBjYXNlIENBTlZBUzpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29udGV4dCggJzJkJywgb3B0aW9ucyApO1xuXG4gICAgICAgICAgY2FzZSBXRUJHTDpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29udGV4dCggJ3dlYmdsJywgb3B0aW9ucyApIHx8IGVsZW1lbnQuZ2V0Q29udGV4dCggJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIG9wdGlvbnMgKTtcblxuICAgICAgICAgIGNhc2UgRE9NOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jYW52YXMgPSBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgIH0pKCk7XG5cbiAgICAgICggb3B0aW9ucy5jb250YWluZXIgfHwgZG9jLmJvZHkgKS5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG4gICAgICByZXR1cm4gU2tldGNoLmF1Z21lbnQoIGNvbnRleHQsIG9wdGlvbnMgKTtcbiAgICB9LFxuXG4gICAgYXVnbWVudDogZnVuY3Rpb24oIGNvbnRleHQsIG9wdGlvbnMgKSB7XG5cbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoIG9wdGlvbnMgfHwge30sIGRlZmF1bHRzICk7XG5cbiAgICAgIG9wdGlvbnMuZWxlbWVudCA9IGNvbnRleHQuY2FudmFzIHx8IGNvbnRleHQ7XG4gICAgICBvcHRpb25zLmVsZW1lbnQuY2xhc3NOYW1lICs9ICcgc2tldGNoJztcblxuICAgICAgZXh0ZW5kKCBjb250ZXh0LCBvcHRpb25zLCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RvciggY29udGV4dCApO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBTaGltc1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgdmVuZG9ycyA9IFsgJ21zJywgJ21veicsICd3ZWJraXQnLCAnbycgXTtcbiAgdmFyIHNjb3BlID0gc2VsZjtcbiAgdmFyIHRoZW4gPSAwO1xuXG4gIHZhciBhID0gJ0FuaW1hdGlvbkZyYW1lJztcbiAgdmFyIGIgPSAncmVxdWVzdCcgKyBhO1xuICB2YXIgYyA9ICdjYW5jZWwnICsgYTtcblxuICB2YXIgckFGID0gc2NvcGVbIGIgXTtcbiAgdmFyIGNBRiA9IHNjb3BlWyBjIF07XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXJBRjsgaSsrICkge1xuXG4gICAgckFGID0gc2NvcGVbIHZlbmRvcnNbIGkgXSArICdSZXF1ZXN0JyArIGEgXTtcbiAgICBjQUYgPSBzY29wZVsgdmVuZG9yc1sgaSBdICsgJ0NhbmNlbCcgKyBhIF07XG4gIH1cblxuICBzY29wZVsgYiBdID0gckFGID0gckFGIHx8IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcblxuICAgIHZhciBub3cgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgZHQgPSBNLm1heCggMCwgMTYgLSAoIG5vdyAtIHRoZW4gKSApO1xuICAgIHZhciBpZCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgY2FsbGJhY2soIG5vdyArIGR0ICk7XG4gICAgfSwgZHQgKTtcblxuICAgIHRoZW4gPSBub3cgKyBkdDtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgc2NvcGVbIGMgXSA9IGNBRiA9IGNBRiB8fCBmdW5jdGlvbiggaWQgKSB7XG4gICAgY2xlYXJUaW1lb3V0KCBpZCApO1xuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIE91dHB1dFxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICByZXR1cm4gU2tldGNoO1xuXG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL3NrZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljaW5nQ2FsY3VsYXRvcihzbGlkZXJzLCBtZXNzYWdlcyl7XG4gIHZhciBTbGlkZXIgPSByZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKTtcbiAgbWVzc2FnZXMgPSBtZXNzYWdlc1snZmluYW5jZWQnXTtcbiAgc2xpZGVycy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICBjb25zdCBodG1sU2xpZGVyID0gdGhpcztcbiAgICBjb25zdCBwcmljaW5nQ29tcG9uZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcucHJpY2luZy1jb21wb25lbnQnKTtcbiAgICB2YXIgbXlTbGlkZXIgPSBuZXcgU2xpZGVyKGh0bWxTbGlkZXIpO1xuICAgIG15U2xpZGVyLm9uKCdzbGlkZVN0b3AnLCBmdW5jdGlvbihjbGlja2VkSW5kZXgpe1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMobWVzc2FnZXMpW2NsaWNrZWRJbmRleF07XG4gICAgICBpZih0eXBlb2YgbWVzc2FnZXNba2V5XSAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLm1vbnRobHkpID09ICdzdHJpbmcnKSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5wcmljZS1sYWJlbCcpLmh0bWwobWVzc2FnZXNba2V5XS5tb250aGx5KTtcbiAgICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW2tleV0ubWVzc2FnZSkgIT09ICd1bmRlZmluZWQnKSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5maW5hbmNpbmctZGV0YWlscycpLmh0bWwobWVzc2FnZXNba2V5XS5tZXNzYWdlW1dQQVNfQVBQLmxhbmddKTtcbiAgICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW2tleV0ubG9nbykgPT0gJ3N0cmluZycpe1xuICAgICAgICAgIHZhciBsb2dvRWxtID0gcHJpY2luZ0NvbXBvbmVudC5maW5kKCcuZmluYW5jaW5nLWxvZ28nKTtcbiAgICAgICAgICBsb2dvRWxtLmF0dHIoJ3NyYycsbWVzc2FnZXNba2V5XS5sb2dvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcdFx0XG4gIFx0XHR2YXIgcGF5bWVudFBsYW5DYXJkID0gcHJpY2luZ0NvbXBvbmVudC5maW5kKCcucGF5bWVudC1wbGFuJyk7XG4gIFx0XHRwYXltZW50UGxhbkNhcmQuYWRkQ2xhc3MoXCJnbG93XCIpO1xuICBcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgXHRcdFx0cGF5bWVudFBsYW5DYXJkLnJlbW92ZUNsYXNzKFwiZ2xvd1wiKTtcbiAgXHRcdH0sIDIwMCk7XG4gICAgICBcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL3ByaWNlQ2FsY3VsYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIl0sInNvdXJjZVJvb3QiOiIifQ==