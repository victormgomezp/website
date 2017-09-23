webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_carousel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_all_js__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_all_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_cakeCharts__ = __webpack_require__(130);
__webpack_require__(127);








/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  __WEBPACK_IMPORTED_MODULE_4__vendor_cakeCharts__["a" /* PieChart */].createPie(".pieID.legend", ".pieID.pie");
  loadVideo('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  
}

/**
 * THE PROGRAM
**/

if(WPAS_APP.view.slug === 'the-program' || WPAS_APP.view.slug === 'programa'){
  
  $(document).ready(function() {
    // Custom 
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      var stickyWidth = sticky.outerWidth();
      var offset = stickyWrapper.offset();
      var stickyTop = offset.top;
      var stickyLeft = offset.left;
      var maxStickPosition = $('#pricing').offset().top - 20;
      //var maxStickPosition = 3680;
      var windowScrollPosition = scrollElement.scrollTop();
      if (windowScrollPosition >= stickyTop){
        if(windowScrollPosition < maxStickPosition)
        {
          stickyWrapper.height(stickyHeight);
          sticky.addClass("is-sticky");
          sticky.removeClass("fozen-sticky");
          sticky.css('width',stickyWidth+'px');
          sticky.css('left',stickyLeft+'px');
          sticky.css('top','0');
        }
        else
        {
          sticky.removeClass("is-sticky");
          stickyWrapper.height('auto');
          sticky.addClass("fozen-sticky");
          sticky.css('top',(maxStickPosition-665)+'px');
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
    
    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function() {
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');
      
      // Scroll & resize events
      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
        stickyToggle(sticky, stickyWrapper, $(this));
      });
      
      // On page load
      stickyToggle(sticky, stickyWrapper, $(window));
    });
  });
  
  __webpack_require__(131);
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  loadVideo('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  var Slider = __webpack_require__(7);
  var mySlider = new Slider('#pricing-slider');
  //var sliderElement = document.querySelector('#pricing-slider');
  mySlider.on('slideStop', function(newValue){
    
    var message = 'uknown';
    switch(newValue)
    {
      case 0: message = '$1000 deposit + $853 / month'; break;
      case 1: message = '$1000 deposit + $445 / month'; break;
      case 3: message = '$1000 deposit + $240 / month'; break;
    }
    document.querySelector('#price-label').innerHTML = message;
		
		var paymentPlanCard = document.querySelector('.payment-plan');
		//paymentPlanCard.classList.remove("bg-yellow");
		paymentPlanCard.classList.add("glow");
		window.setTimeout(function(){
		  //paymentPlanCard.classList.add("bg-yellow");
			paymentPlanCard.classList.remove("glow");
		}, 200);
    
  });
  
  __webpack_require__(132);

}

function loadVideo(videoURL){
  var video = document.createElement('video');
  video.src = videoURL;
  video.autoPlay = true;
  video.loop = true;
  video.muted = true;
  video.classList.add('video-background');
  var s = document.body.firstChild;
  s.parentNode.insertBefore(video, s);
  video.addEventListener('loadeddata',function(){
    video.play();
  });
}


if(WPAS_APP.view.slug === 'calendar' || WPAS_APP.view.slug === 'calendario'){
  
  var baseURL = window.location.href;
  var pieces = baseURL.split('?');
  if(pieces.length>1) baseURL = pieces[0];
  
  var urlVars = getUrlVars();
  delete urlVars['0'];
  delete urlVars[baseURL];
  delete urlVars[''];
  if('l' in urlVars) $('#locationSelector').html($('.location-option[data-value='+urlVars['l']+']').html());
  if('lang' in urlVars) $('#langSelector').html($('.lang-option[data-value='+urlVars['lang']+']').html());
  if('type' in urlVars) $('#typeSelector').html($('.type-option[data-value='+urlVars['type']+']').html());
  
  $('.page-calendar .dropdown-menu a').on('click', function(event){  
    
    
    var button = $(this).parent().parent().children('button');
    button.html($(this).html());
    
    var value = $(this).data('value');
    if(value != 'all') urlVars[button.data('key')] = $(this).data('value');
    //else urlVars = unsetArray(urlVars,button.data('key'));
    else delete urlVars[button.data('key')];
    
    $('.courses .loading-animation').css('display','block');
    $('.courses .list-group').css('display','none');
    window.location.href = baseURL + '?' + serialize(urlVars );
    
    $(this).parent().parent().classList.remove('show');
    event.preventDefault();
    return false;
  });
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
    return vars;
    

}

var serialize = function(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 129:
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
   var email = emailField.val();
   
   $.ajax({
      url: WPAS_APP.ajax_url,
      dataType: 'JSON',
      method: 'POST',
      data: {
         action: 'download_syllabus',
         email: email
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
   
});

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
});

function promptUpcomingEvent(event){
   
   $(document).ready(function() {
      
      if(localStorage.getItem('popState') != 'shown'){
          fillUpcomingEvent(event);
           $("#upcomingEvent").delay(2000).fadeIn();
           localStorage.setItem('popState','shown');
           $('#upcomingEvent').modal('show');
      }
   });
}

function fillUpcomingEvent(event){
   var modal = $('#upcomingEvent');
   modal.find('.day').html(event.day);
   modal.find('.month').html(event.month);
   modal.find('.year').html(event.year);
   
   modal.find('.event-title').html(event.post_title);
   modal.find('.event-details').html(event.event_start_time + " " + event.event_end_time + ' at <span class="imoon icon-location"></span> ' + event.address);//3:30pm - at Starthub, Downtown Miami
   modal.find('.event-description').html(event.post_content);
   
   modal.find('.btn-danger').attr('href',event.ticket_url);
   
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChart; });

var PieChart = (function(){
    
    var thepublic = {};

    thepublic.createPie = function(dataElement, pieElement) {
      var listData = [];
      $(dataElement+" span").each(function() {
        listData.push(Number($(this).html()));
      });
      var listTotal = 0;
      for(var i=0; i<listData.length; i++) {
        listTotal += listData[i];
      }
      var offset = 0;
      var color = [
        "cornflowerblue", 
        "olivedrab", 
        "orange", 
        "tomato", 
        "crimson", 
        "purple", 
        "turquoise", 
        "forestgreen", 
        "navy", 
        "gray"
      ];
      for(var i=0; i<listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        iterateSlices(size, pieElement, offset, i, 0, color[i]);
        $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
        offset += size;
      }
    }

    function sliceSize(dataNum, dataTotal) {
      return (dataNum / dataTotal) * 360;
    }
    
    function addSlice(sliceSize, pieElement, offset, sliceID, color) {
      $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
      var offset = offset - 1;
      var sizeRotation = -179 + sliceSize;
      $("."+sliceID).css({
        "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
      });
      $("."+sliceID+" span").css({
        "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
        "background-color": color
      });
    }
    
    function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
      var sliceID = "s"+dataCount+"-"+sliceCount;
      var maxSize = 179;
      if(sliceSize<=maxSize) {
        addSlice(sliceSize, pieElement, offset, sliceID, color);
      } else {
        addSlice(maxSize, pieElement, offset, sliceID, color);
        iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
      }
    }
    
    return thepublic;
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

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

  // ----------------------------------------
  // Particles
  // ----------------------------------------
  
  var MAX_PARTICLES = 280;
  var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
  
  var particles = [];
  var pool = [];
  
  var Sketch = __webpack_require__(133);
  var canvasBg = document.querySelector( '#bg-sketch' );
  canvasBg.style.display = "block";
  var pricingSketch = Sketch.create({
  	container: canvasBg
  });
  
  pricingSketch.setup = function() {
  
  	// Set off some initial particles.
  	var i, x, y;
  
  	for ( i = 0; i < 20; i++ ) {
  		x = ( pricingSketch.width * 0.5 ) + random( -100, 100 );
  		y = ( pricingSketch.height * 0.5 ) + random( -100, 100 );
  		pricingSketch.spawn( x, y );
  	}
  };
  
  pricingSketch.spawn = function( x, y ) {
  
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
  
  pricingSketch.update = function() {
  
  	var i, particle;
  
  	for ( i = particles.length - 1; i >= 0; i-- ) {
  
  		particle = particles[i];
  
  		if ( particle.alive ) particle.move();
  		else pool.push( particles.splice( i, 1 )[0] );
  	}
  };
  
  pricingSketch.draw = function() {
  
  	pricingSketch.globalCompositeOperation  = 'lighter';
  	
  	for ( var i = particles.length - 1; i >= 0; i-- ) {
  		particles[i].draw( pricingSketch );
  	}
  };
  
  pricingSketch.mousemove = function() {
  
  	var particle, theta, force, touch, max, i, j, n;
  
  	for ( i = 0, n = pricingSketch.touches.length; i < n; i++ ) {
  
  		touch = pricingSketch.touches[i], max = random( 1, 4 );
  		for ( j = 0; j < max; j++ ) pricingSketch.spawn( touch.x, touch.y );
  	}
  };

/***/ }),

/***/ 133:
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

/***/ })

},[124]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvdmVuZG9yL2Nha2VDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3ZlbmRvci9za2V0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lCOzs7QUFHakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FB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QUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjs7QUFFbEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0IseUJBQXlCOztBQUUvQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3Qiw2QkFBNkI7O0FBRXJEOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3Qix1QkFBdUI7O0FBRS9DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLHFDQUFxQzs7QUFFckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxPQUFPOztBQUVQOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLDRCQUE0Qjs7QUFFOUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxDQUFDLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuLi9zdHlsZXMvaW5kZXguc2NzcycpO1xuXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3V0aWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJztcbmltcG9ydCAnLi9wYWdlcy9hbGwuanMnO1xuaW1wb3J0IHtQaWVDaGFydH0gZnJvbSBcIi4vdmVuZG9yL2Nha2VDaGFydHNcIjtcblxuXG4vKipcbiAqIEhPTUVcbioqL1xuaWYoV1BBU19BUFAudmlldy5zbHVnID09PSAnaG9tZScgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAnaW5pY2lvJyl7XG4gIFxuICBQaWVDaGFydC5jcmVhdGVQaWUoXCIucGllSUQubGVnZW5kXCIsIFwiLnBpZUlELnBpZVwiKTtcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL2hvbWUtZGFyay5tcDQnKTtcbiAgXG59XG5cbi8qKlxuICogVEhFIFBST0dSQU1cbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICd0aGUtcHJvZ3JhbScgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAncHJvZ3JhbWEnKXtcbiAgXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIEN1c3RvbSBcbiAgICB2YXIgc3RpY2t5VG9nZ2xlID0gZnVuY3Rpb24oc3RpY2t5LCBzdGlja3lXcmFwcGVyLCBzY3JvbGxFbGVtZW50KSB7XG4gICAgICB2YXIgc3RpY2t5SGVpZ2h0ID0gc3RpY2t5Lm91dGVySGVpZ2h0KCk7XG4gICAgICB2YXIgc3RpY2t5V2lkdGggPSBzdGlja3kub3V0ZXJXaWR0aCgpO1xuICAgICAgdmFyIG9mZnNldCA9IHN0aWNreVdyYXBwZXIub2Zmc2V0KCk7XG4gICAgICB2YXIgc3RpY2t5VG9wID0gb2Zmc2V0LnRvcDtcbiAgICAgIHZhciBzdGlja3lMZWZ0ID0gb2Zmc2V0LmxlZnQ7XG4gICAgICB2YXIgbWF4U3RpY2tQb3NpdGlvbiA9ICQoJyNwcmljaW5nJykub2Zmc2V0KCkudG9wIC0gMjA7XG4gICAgICAvL3ZhciBtYXhTdGlja1Bvc2l0aW9uID0gMzY4MDtcbiAgICAgIHZhciB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCk7XG4gICAgICBpZiAod2luZG93U2Nyb2xsUG9zaXRpb24gPj0gc3RpY2t5VG9wKXtcbiAgICAgICAgaWYod2luZG93U2Nyb2xsUG9zaXRpb24gPCBtYXhTdGlja1Bvc2l0aW9uKVxuICAgICAgICB7XG4gICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoc3RpY2t5SGVpZ2h0KTtcbiAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgc3RpY2t5LnJlbW92ZUNsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgIHN0aWNreS5jc3MoJ3dpZHRoJyxzdGlja3lXaWR0aCsncHgnKTtcbiAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JyxzdGlja3lMZWZ0KydweCcpO1xuICAgICAgICAgIHN0aWNreS5jc3MoJ3RvcCcsJzAnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgc3RpY2t5LmNzcygndG9wJywobWF4U3RpY2tQb3NpdGlvbi02NjUpKydweCcpO1xuICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLCcxNXB4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgc3RpY2t5LnJlbW92ZUNsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JywnMCcpO1xuICAgICAgICBzdGlja3kuY3NzKCd0b3AnLCcwJyk7XG4gICAgICAgIHN0aWNreVdyYXBwZXIuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvLyBGaW5kIGFsbCBkYXRhLXRvZ2dsZT1cInN0aWNreS1vbnNjcm9sbFwiIGVsZW1lbnRzXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzdGlja3kgPSAkKHRoaXMpO1xuICAgICAgdmFyIHN0aWNreVdyYXBwZXIgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdzdGlja3ktd3JhcHBlcicpOyAvLyBpbnNlcnQgaGlkZGVuIGVsZW1lbnQgdG8gbWFpbnRhaW4gYWN0dWFsIHRvcCBvZmZzZXQgb24gcGFnZVxuICAgICAgc3RpY2t5LmJlZm9yZShzdGlja3lXcmFwcGVyKTtcbiAgICAgIHN0aWNreS5hZGRDbGFzcygnc3RpY2t5Jyk7XG4gICAgICBcbiAgICAgIC8vIFNjcm9sbCAmIHJlc2l6ZSBldmVudHNcbiAgICAgICQod2luZG93KS5vbignc2Nyb2xsLnN0aWNreS1vbnNjcm9sbCByZXNpemUuc3RpY2t5LW9uc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0aWNreVRvZ2dsZShzdGlja3ksIHN0aWNreVdyYXBwZXIsICQodGhpcykpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIE9uIHBhZ2UgbG9hZFxuICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh3aW5kb3cpKTtcbiAgICB9KTtcbiAgfSk7XG4gIFxuICByZXF1aXJlKCcuL3BhZ2VzL3Byb2dyYW0uanMnKTtcbiAgXG59XG5cblxuXG5cbi8qKlxuICogUFJJQ0lOR1xuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByaWNpbmcnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByZWNpbycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL3ByaWNpbmcubXA0Jyk7XG4gIFxuICB2YXIgU2xpZGVyID0gcmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIik7XG4gIHZhciBteVNsaWRlciA9IG5ldyBTbGlkZXIoJyNwcmljaW5nLXNsaWRlcicpO1xuICAvL3ZhciBzbGlkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNpbmctc2xpZGVyJyk7XG4gIG15U2xpZGVyLm9uKCdzbGlkZVN0b3AnLCBmdW5jdGlvbihuZXdWYWx1ZSl7XG4gICAgXG4gICAgdmFyIG1lc3NhZ2UgPSAndWtub3duJztcbiAgICBzd2l0Y2gobmV3VmFsdWUpXG4gICAge1xuICAgICAgY2FzZSAwOiBtZXNzYWdlID0gJyQxMDAwIGRlcG9zaXQgKyAkODUzIC8gbW9udGgnOyBicmVhaztcbiAgICAgIGNhc2UgMTogbWVzc2FnZSA9ICckMTAwMCBkZXBvc2l0ICsgJDQ0NSAvIG1vbnRoJzsgYnJlYWs7XG4gICAgICBjYXNlIDM6IG1lc3NhZ2UgPSAnJDEwMDAgZGVwb3NpdCArICQyNDAgLyBtb250aCc7IGJyZWFrO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtbGFiZWwnKS5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRcdFxuXHRcdHZhciBwYXltZW50UGxhbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5bWVudC1wbGFuJyk7XG5cdFx0Ly9wYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXllbGxvd1wiKTtcblx0XHRwYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LmFkZChcImdsb3dcIik7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHQgIC8vcGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJiZy15ZWxsb3dcIik7XG5cdFx0XHRwYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImdsb3dcIik7XG5cdFx0fSwgMjAwKTtcbiAgICBcbiAgfSk7XG4gIFxuICByZXF1aXJlKCcuL3BhZ2VzL3ByaWNpbmcuanMnKTtcblxufVxuXG5mdW5jdGlvbiBsb2FkVmlkZW8odmlkZW9VUkwpe1xuICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICB2aWRlby5zcmMgPSB2aWRlb1VSTDtcbiAgdmlkZW8uYXV0b1BsYXkgPSB0cnVlO1xuICB2aWRlby5sb29wID0gdHJ1ZTtcbiAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICB2aWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby1iYWNrZ3JvdW5kJyk7XG4gIHZhciBzID0gZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHZpZGVvLCBzKTtcbiAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsZnVuY3Rpb24oKXtcbiAgICB2aWRlby5wbGF5KCk7XG4gIH0pO1xufVxuXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2NhbGVuZGFyJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdjYWxlbmRhcmlvJyl7XG4gIFxuICB2YXIgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICB2YXIgcGllY2VzID0gYmFzZVVSTC5zcGxpdCgnPycpO1xuICBpZihwaWVjZXMubGVuZ3RoPjEpIGJhc2VVUkwgPSBwaWVjZXNbMF07XG4gIFxuICB2YXIgdXJsVmFycyA9IGdldFVybFZhcnMoKTtcbiAgZGVsZXRlIHVybFZhcnNbJzAnXTtcbiAgZGVsZXRlIHVybFZhcnNbYmFzZVVSTF07XG4gIGRlbGV0ZSB1cmxWYXJzWycnXTtcbiAgaWYoJ2wnIGluIHVybFZhcnMpICQoJyNsb2NhdGlvblNlbGVjdG9yJykuaHRtbCgkKCcubG9jYXRpb24tb3B0aW9uW2RhdGEtdmFsdWU9Jyt1cmxWYXJzWydsJ10rJ10nKS5odG1sKCkpO1xuICBpZignbGFuZycgaW4gdXJsVmFycykgJCgnI2xhbmdTZWxlY3RvcicpLmh0bWwoJCgnLmxhbmctb3B0aW9uW2RhdGEtdmFsdWU9Jyt1cmxWYXJzWydsYW5nJ10rJ10nKS5odG1sKCkpO1xuICBpZigndHlwZScgaW4gdXJsVmFycykgJCgnI3R5cGVTZWxlY3RvcicpLmh0bWwoJCgnLnR5cGUtb3B0aW9uW2RhdGEtdmFsdWU9Jyt1cmxWYXJzWyd0eXBlJ10rJ10nKS5odG1sKCkpO1xuICBcbiAgJCgnLnBhZ2UtY2FsZW5kYXIgLmRyb3Bkb3duLW1lbnUgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXsgIFxuICAgIFxuICAgIFxuICAgIHZhciBidXR0b24gPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCdidXR0b24nKTtcbiAgICBidXR0b24uaHRtbCgkKHRoaXMpLmh0bWwoKSk7XG4gICAgXG4gICAgdmFyIHZhbHVlID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgIGlmKHZhbHVlICE9ICdhbGwnKSB1cmxWYXJzW2J1dHRvbi5kYXRhKCdrZXknKV0gPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgLy9lbHNlIHVybFZhcnMgPSB1bnNldEFycmF5KHVybFZhcnMsYnV0dG9uLmRhdGEoJ2tleScpKTtcbiAgICBlbHNlIGRlbGV0ZSB1cmxWYXJzW2J1dHRvbi5kYXRhKCdrZXknKV07XG4gICAgXG4gICAgJCgnLmNvdXJzZXMgLmxvYWRpbmctYW5pbWF0aW9uJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAkKCcuY291cnNlcyAubGlzdC1ncm91cCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhc2VVUkwgKyAnPycgKyBzZXJpYWxpemUodXJsVmFycyApO1xuICAgIFxuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0VXJsVmFycygpe1xuICBcbiAgICB2YXIgdmFycyA9IFtdLCBoYXNoO1xuICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHZhcnMucHVzaChoYXNoWzBdKTtcbiAgICAgICAgdmFyc1toYXNoWzBdXSA9IGhhc2hbMV07XG4gICAgfVxuICAgIHJldHVybiB2YXJzO1xuICAgIFxuXG59XG5cbnZhciBzZXJpYWxpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIHN0ciA9IFtdO1xuICBmb3IodmFyIHAgaW4gb2JqKVxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtwXSkpO1xuICAgIH1cbiAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvc3R5bGVzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL3ZhciBuZXdzbGV0dGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1uZXdzbGV0dGVyIGZvcm0nKTtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cbiAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgaWYoZnJvbVRvcD4xMDApICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIGVsc2UgJCgnLmZvb3Rlci1iYXInKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG59KTtcblxuXG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybU5ld3NsZXR0ZXIgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtTmV3c2xldHRlci5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIFxuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICduZXdzbGV0dGVyX3NpZ251cCcsXG4gICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybU5ld3NsZXR0ZXIuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBmb3JtTmV3c2xldHRlci5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KHAzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG59KTtcblxuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1TeWxsYWJ1cyA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIFxuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICdkb3dubG9hZF9zeWxsYWJ1cycsXG4gICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybVN5bGxhYnVzLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICQoJyNzeWxsYWJ1c01vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQocDMpO1xuICAgICAgfVxuICAgfSk7XG4gICBcbn0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50J1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBwcm9tcHRVcGNvbWluZ0V2ZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBwcm9tcHRVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIFxuICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3BTdGF0ZScpICE9ICdzaG93bicpe1xuICAgICAgICAgIGZpbGxVcGNvbWluZ0V2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLmRlbGF5KDIwMDApLmZhZGVJbigpO1xuICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9wU3RhdGUnLCdzaG93bicpO1xuICAgICAgICAgICAkKCcjdXBjb21pbmdFdmVudCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICB9XG4gICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI3VwY29taW5nRXZlbnQnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXknKS5odG1sKGV2ZW50LmRheSk7XG4gICBtb2RhbC5maW5kKCcubW9udGgnKS5odG1sKGV2ZW50Lm1vbnRoKTtcbiAgIG1vZGFsLmZpbmQoJy55ZWFyJykuaHRtbChldmVudC55ZWFyKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LXRpdGxlJykuaHRtbChldmVudC5wb3N0X3RpdGxlKTtcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXRhaWxzJykuaHRtbChldmVudC5ldmVudF9zdGFydF90aW1lICsgXCIgXCIgKyBldmVudC5ldmVudF9lbmRfdGltZSArICcgYXQgPHNwYW4gY2xhc3M9XCJpbW9vbiBpY29uLWxvY2F0aW9uXCI+PC9zcGFuPiAnICsgZXZlbnQuYWRkcmVzcyk7Ly8zOjMwcG0gLSBhdCBTdGFydGh1YiwgRG93bnRvd24gTWlhbWlcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXNjcmlwdGlvbicpLmh0bWwoZXZlbnQucG9zdF9jb250ZW50KTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC50aWNrZXRfdXJsKTtcbiAgIFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0IHZhciBQaWVDaGFydCA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgIHZhciB0aGVwdWJsaWMgPSB7fTtcblxuICAgIHRoZXB1YmxpYy5jcmVhdGVQaWUgPSBmdW5jdGlvbihkYXRhRWxlbWVudCwgcGllRWxlbWVudCkge1xuICAgICAgdmFyIGxpc3REYXRhID0gW107XG4gICAgICAkKGRhdGFFbGVtZW50K1wiIHNwYW5cIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGlzdERhdGEucHVzaChOdW1iZXIoJCh0aGlzKS5odG1sKCkpKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGxpc3RUb3RhbCA9IDA7XG4gICAgICBmb3IodmFyIGk9MDsgaTxsaXN0RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0VG90YWwgKz0gbGlzdERhdGFbaV07XG4gICAgICB9XG4gICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgIHZhciBjb2xvciA9IFtcbiAgICAgICAgXCJjb3JuZmxvd2VyYmx1ZVwiLCBcbiAgICAgICAgXCJvbGl2ZWRyYWJcIiwgXG4gICAgICAgIFwib3JhbmdlXCIsIFxuICAgICAgICBcInRvbWF0b1wiLCBcbiAgICAgICAgXCJjcmltc29uXCIsIFxuICAgICAgICBcInB1cnBsZVwiLCBcbiAgICAgICAgXCJ0dXJxdW9pc2VcIiwgXG4gICAgICAgIFwiZm9yZXN0Z3JlZW5cIiwgXG4gICAgICAgIFwibmF2eVwiLCBcbiAgICAgICAgXCJncmF5XCJcbiAgICAgIF07XG4gICAgICBmb3IodmFyIGk9MDsgaTxsaXN0RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc2l6ZSA9IHNsaWNlU2l6ZShsaXN0RGF0YVtpXSwgbGlzdFRvdGFsKTtcbiAgICAgICAgaXRlcmF0ZVNsaWNlcyhzaXplLCBwaWVFbGVtZW50LCBvZmZzZXQsIGksIDAsIGNvbG9yW2ldKTtcbiAgICAgICAgJChkYXRhRWxlbWVudCtcIiBsaTpudGgtY2hpbGQoXCIrKGkrMSkrXCIpXCIpLmNzcyhcImJvcmRlci1jb2xvclwiLCBjb2xvcltpXSk7XG4gICAgICAgIG9mZnNldCArPSBzaXplO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNsaWNlU2l6ZShkYXRhTnVtLCBkYXRhVG90YWwpIHtcbiAgICAgIHJldHVybiAoZGF0YU51bSAvIGRhdGFUb3RhbCkgKiAzNjA7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFNsaWNlKHNsaWNlU2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBzbGljZUlELCBjb2xvcikge1xuICAgICAgJChwaWVFbGVtZW50KS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSdzbGljZSBcIitzbGljZUlEK1wiJz48c3Bhbj48L3NwYW4+PC9kaXY+XCIpO1xuICAgICAgdmFyIG9mZnNldCA9IG9mZnNldCAtIDE7XG4gICAgICB2YXIgc2l6ZVJvdGF0aW9uID0gLTE3OSArIHNsaWNlU2l6ZTtcbiAgICAgICQoXCIuXCIrc2xpY2VJRCkuY3NzKHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJyb3RhdGUoXCIrb2Zmc2V0K1wiZGVnKSB0cmFuc2xhdGUzZCgwLDAsMClcIlxuICAgICAgfSk7XG4gICAgICAkKFwiLlwiK3NsaWNlSUQrXCIgc3BhblwiKS5jc3Moe1xuICAgICAgICBcInRyYW5zZm9ybVwiICAgICAgIDogXCJyb3RhdGUoXCIrc2l6ZVJvdGF0aW9uK1wiZGVnKSB0cmFuc2xhdGUzZCgwLDAsMClcIixcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IGNvbG9yXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXRlcmF0ZVNsaWNlcyhzbGljZVNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgZGF0YUNvdW50LCBzbGljZUNvdW50LCBjb2xvcikge1xuICAgICAgdmFyIHNsaWNlSUQgPSBcInNcIitkYXRhQ291bnQrXCItXCIrc2xpY2VDb3VudDtcbiAgICAgIHZhciBtYXhTaXplID0gMTc5O1xuICAgICAgaWYoc2xpY2VTaXplPD1tYXhTaXplKSB7XG4gICAgICAgIGFkZFNsaWNlKHNsaWNlU2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBzbGljZUlELCBjb2xvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRTbGljZShtYXhTaXplLCBwaWVFbGVtZW50LCBvZmZzZXQsIHNsaWNlSUQsIGNvbG9yKTtcbiAgICAgICAgaXRlcmF0ZVNsaWNlcyhzbGljZVNpemUtbWF4U2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0K21heFNpemUsIGRhdGFDb3VudCwgc2xpY2VDb3VudCsxLCBjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGVwdWJsaWM7XG59KSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3ZlbmRvci9jYWtlQ2hhcnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vLyBDYWNoZSBzZWxlY3RvcnNcbnZhciB0b3BNZW51ID0gJChcIi5wcm9ncmFtLW1lbnVcIiksXG4gICAgdG9wTWVudUhlaWdodCA9IHRvcE1lbnUub3V0ZXJIZWlnaHQoKSsxNSxcbiAgICAvLyBBbGwgbGlzdCBpdGVtc1xuICAgIG1lbnVJdGVtcyA9IHRvcE1lbnUuZmluZChcImFbaHJlZio9JyMnXVwiKSxcbiAgICAvLyBBbmNob3JzIGNvcnJlc3BvbmRpbmcgdG8gbWVudSBpdGVtc1xuICAgIHNjcm9sbEl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgdmFyIGl0ZW0gPSAkKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgICAgaWYgKGl0ZW0ubGVuZ3RoKSB7IHJldHVybiBpdGVtOyB9XG4gICAgfSk7XG5cbi8vIEJpbmQgdG8gc2Nyb2xsXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpK3RvcE1lbnVIZWlnaHQ7XG5cbiAgIC8vIEdldCBpZCBvZiBjdXJyZW50IHNjcm9sbCBpdGVtXG4gICB2YXIgY3VyID0gc2Nyb2xsSXRlbXMubWFwKGZ1bmN0aW9uKCl7XG4gICAgIGlmICgkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3ApXG4gICAgICAgcmV0dXJuIHRoaXM7XG4gICB9KTtcbiAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgY3VyID0gY3VyW2N1ci5sZW5ndGgtMV07XG4gICB2YXIgaWQgPSBjdXIgJiYgY3VyLmxlbmd0aCA/IGN1clswXS5pZCA6IFwiXCI7XG4gICAvLyBTZXQvcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgbWVudUl0ZW1zXG4gICAgIC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAuZW5kKCkuZmlsdGVyKFwiW2hyZWY9JyNcIitpZCtcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvcHJvZ3JhbS5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiAgICBmdW5jdGlvbiBQYXJ0aWNsZSggeCwgeSwgcmFkaXVzICkge1xuICAgIFx0dGhpcy5pbml0KCB4LCB5LCByYWRpdXMgKTtcbiAgICB9XG4gICAgXG4gICAgUGFydGljbGUucHJvdG90eXBlID0ge1xuICAgIFxuICAgIFx0aW5pdDogZnVuY3Rpb24oIHgsIHksIHJhZGl1cyApIHtcbiAgICBcbiAgICBcdFx0dGhpcy5hbGl2ZSA9IHRydWU7XG4gICAgXG4gICAgXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwO1xuICAgIFx0XHR0aGlzLndhbmRlciA9IDAuMTU7XG4gICAgXHRcdHRoaXMudGhldGEgPSByYW5kb20oIFRXT19QSSApO1xuICAgIFx0XHR0aGlzLmRyYWcgPSAwLjkyO1xuICAgIFx0XHR0aGlzLmNvbG9yID0gJyNmZmYnO1xuICAgIFxuICAgIFx0XHR0aGlzLnggPSB4IHx8IDAuMDtcbiAgICBcdFx0dGhpcy55ID0geSB8fCAwLjA7XG4gICAgXG4gICAgXHRcdHRoaXMudnggPSAwLjA7XG4gICAgXHRcdHRoaXMudnkgPSAwLjA7XG4gICAgXHR9LFxuICAgIFxuICAgIFx0bW92ZTogZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgXHRcdHRoaXMueCArPSB0aGlzLnZ4O1xuICAgIFx0XHR0aGlzLnkgKz0gdGhpcy52eTtcbiAgICBcbiAgICBcdFx0dGhpcy52eCAqPSB0aGlzLmRyYWc7XG4gICAgXHRcdHRoaXMudnkgKj0gdGhpcy5kcmFnO1xuICAgIFxuICAgIFx0XHR0aGlzLnRoZXRhICs9IHJhbmRvbSggLTAuNSwgMC41ICkgKiB0aGlzLndhbmRlcjtcbiAgICBcdFx0dGhpcy52eCArPSBzaW4oIHRoaXMudGhldGEgKSAqIDAuMTtcbiAgICBcdFx0dGhpcy52eSArPSBjb3MoIHRoaXMudGhldGEgKSAqIDAuMTtcbiAgICBcbiAgICBcdFx0dGhpcy5yYWRpdXMgKj0gMC45NjtcbiAgICBcdFx0dGhpcy5hbGl2ZSA9IHRoaXMucmFkaXVzID4gMC41O1xuICAgIFx0fSxcbiAgICBcbiAgICBcdGRyYXc6IGZ1bmN0aW9uKCBjdHggKSB7XG4gICAgXG4gICAgXHRcdGN0eC5iZWdpblBhdGgoKTtcbiAgICBcdFx0Y3R4LmFyYyggdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBUV09fUEkgKTtcbiAgICBcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgXHRcdGN0eC5maWxsKCk7XG4gICAgXHR9XG4gICAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBhcnRpY2xlc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICB2YXIgTUFYX1BBUlRJQ0xFUyA9IDI4MDtcbiAgdmFyIENPTE9VUlMgPSBbICcjNjlEMkU3JywgJyNBN0RCRDgnLCAnI0UwRTRDQycsICcjRjM4NjMwJywgJyNGQTY5MDAnLCAnI0ZGNEU1MCcsICcjRjlENDIzJyBdO1xuICBcbiAgdmFyIHBhcnRpY2xlcyA9IFtdO1xuICB2YXIgcG9vbCA9IFtdO1xuICBcbiAgdmFyIFNrZXRjaCA9IHJlcXVpcmUoXCIuLi92ZW5kb3Ivc2tldGNoXCIpO1xuICB2YXIgY2FudmFzQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2JnLXNrZXRjaCcgKTtcbiAgY2FudmFzQmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgdmFyIHByaWNpbmdTa2V0Y2ggPSBTa2V0Y2guY3JlYXRlKHtcbiAgXHRjb250YWluZXI6IGNhbnZhc0JnXG4gIH0pO1xuICBcbiAgcHJpY2luZ1NrZXRjaC5zZXR1cCA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHQvLyBTZXQgb2ZmIHNvbWUgaW5pdGlhbCBwYXJ0aWNsZXMuXG4gIFx0dmFyIGksIHgsIHk7XG4gIFxuICBcdGZvciAoIGkgPSAwOyBpIDwgMjA7IGkrKyApIHtcbiAgXHRcdHggPSAoIHByaWNpbmdTa2V0Y2gud2lkdGggKiAwLjUgKSArIHJhbmRvbSggLTEwMCwgMTAwICk7XG4gIFx0XHR5ID0gKCBwcmljaW5nU2tldGNoLmhlaWdodCAqIDAuNSApICsgcmFuZG9tKCAtMTAwLCAxMDAgKTtcbiAgXHRcdHByaWNpbmdTa2V0Y2guc3Bhd24oIHgsIHkgKTtcbiAgXHR9XG4gIH07XG4gIFxuICBwcmljaW5nU2tldGNoLnNwYXduID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIFxuICBcdGlmICggcGFydGljbGVzLmxlbmd0aCA+PSBNQVhfUEFSVElDTEVTIClcbiAgXHRcdHBvb2wucHVzaCggcGFydGljbGVzLnNoaWZ0KCkgKTtcbiAgXG4gIFx0dmFyIHBhcnRpY2xlID0gcG9vbC5sZW5ndGggPyBwb29sLnBvcCgpIDogbmV3IFBhcnRpY2xlKCk7XG4gIFx0cGFydGljbGUuaW5pdCggeCwgeSwgcmFuZG9tKCA1LCA0MCApICk7XG4gIFxuICBcdHBhcnRpY2xlLndhbmRlciA9IHJhbmRvbSggMC41LCAyLjAgKTtcbiAgXHRwYXJ0aWNsZS5jb2xvciA9IHJhbmRvbSggQ09MT1VSUyApO1xuICBcdHBhcnRpY2xlLmRyYWcgPSByYW5kb20oIDAuOSwgMC45OSApO1xuICBcbiAgXHR2YXIgdGhldGEgPSByYW5kb20oIFRXT19QSSApO1xuICBcdHZhciBmb3JjZSA9IHJhbmRvbSggMiwgOCApO1xuICBcbiAgXHRwYXJ0aWNsZS52eCA9IHNpbiggdGhldGEgKSAqIGZvcmNlO1xuICBcdHBhcnRpY2xlLnZ5ID0gY29zKCB0aGV0YSApICogZm9yY2U7XG4gIFxuICBcdHBhcnRpY2xlcy5wdXNoKCBwYXJ0aWNsZSApO1xuICB9XG4gIFxuICBwcmljaW5nU2tldGNoLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHR2YXIgaSwgcGFydGljbGU7XG4gIFxuICBcdGZvciAoIGkgPSBwYXJ0aWNsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG4gIFxuICBcdFx0cGFydGljbGUgPSBwYXJ0aWNsZXNbaV07XG4gIFxuICBcdFx0aWYgKCBwYXJ0aWNsZS5hbGl2ZSApIHBhcnRpY2xlLm1vdmUoKTtcbiAgXHRcdGVsc2UgcG9vbC5wdXNoKCBwYXJ0aWNsZXMuc3BsaWNlKCBpLCAxIClbMF0gKTtcbiAgXHR9XG4gIH07XG4gIFxuICBwcmljaW5nU2tldGNoLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0cHJpY2luZ1NrZXRjaC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gID0gJ2xpZ2h0ZXInO1xuICBcdFxuICBcdGZvciAoIHZhciBpID0gcGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuICBcdFx0cGFydGljbGVzW2ldLmRyYXcoIHByaWNpbmdTa2V0Y2ggKTtcbiAgXHR9XG4gIH07XG4gIFxuICBwcmljaW5nU2tldGNoLm1vdXNlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHR2YXIgcGFydGljbGUsIHRoZXRhLCBmb3JjZSwgdG91Y2gsIG1heCwgaSwgaiwgbjtcbiAgXG4gIFx0Zm9yICggaSA9IDAsIG4gPSBwcmljaW5nU2tldGNoLnRvdWNoZXMubGVuZ3RoOyBpIDwgbjsgaSsrICkge1xuICBcbiAgXHRcdHRvdWNoID0gcHJpY2luZ1NrZXRjaC50b3VjaGVzW2ldLCBtYXggPSByYW5kb20oIDEsIDQgKTtcbiAgXHRcdGZvciAoIGogPSAwOyBqIDwgbWF4OyBqKysgKSBwcmljaW5nU2tldGNoLnNwYXduKCB0b3VjaC54LCB0b3VjaC55ICk7XG4gIFx0fVxuICB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3ByaWNpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIENvcHlyaWdodCAoQykgMjAxMyBKdXN0aW4gV2luZGxlLCBodHRwOi8vc291bHdpcmUuY28udWsgKi9cblxuKGZ1bmN0aW9uICggcm9vdCwgZmFjdG9yeSApIHtcblxuICBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcblxuICAgIC8vIENvbW1vbkpTIGxpa2VcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCwgcm9vdC5kb2N1bWVudCk7XG5cbiAgfSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuXG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhY3RvcnkoIHJvb3QsIHJvb3QuZG9jdW1lbnQgKTsgfSk7XG5cbiAgfSBlbHNlIHtcblxuICAgIC8vIEJyb3dzZXIgZ2xvYmFsXG4gICAgcm9vdC5Ta2V0Y2ggPSBmYWN0b3J5KCByb290LCByb290LmRvY3VtZW50ICk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uICggd2luZG93LCBkb2N1bWVudCApIHtcblxuXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIENvbmZpZ1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgTUFUSF9QUk9QUyA9ICdFIExOMTAgTE4yIExPRzJFIExPRzEwRSBQSSBTUVJUMV8yIFNRUlQyIGFicyBhY29zIGFzaW4gYXRhbiBjZWlsIGNvcyBleHAgZmxvb3IgbG9nIHJvdW5kIHNpbiBzcXJ0IHRhbiBhdGFuMiBwb3cgbWF4IG1pbicuc3BsaXQoICcgJyApO1xuICB2YXIgSEFTX1NLRVRDSCA9ICdfX2hhc1NrZXRjaCc7XG4gIHZhciBNID0gTWF0aDtcblxuICB2YXIgQ0FOVkFTID0gJ2NhbnZhcyc7XG4gIHZhciBXRUJHTCA9ICd3ZWJnbCc7XG4gIHZhciBET00gPSAnZG9tJztcblxuICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgdmFyIGluc3RhbmNlcyA9IFtdO1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcblxuICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgYXV0b3N0YXJ0OiB0cnVlLFxuICAgIGF1dG9jbGVhcjogdHJ1ZSxcbiAgICBhdXRvcGF1c2U6IHRydWUsXG4gICAgY29udGFpbmVyOiBkb2MuYm9keSxcbiAgICBpbnRlcnZhbDogMSxcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIHJldGluYTogZmFsc2UsXG4gICAgdHlwZTogQ0FOVkFTXG4gIH07XG5cbiAgdmFyIGtleU1hcCA9IHtcblxuICAgICA4OiAnQkFDS1NQQUNFJyxcbiAgICAgOTogJ1RBQicsXG4gICAgMTM6ICdFTlRFUicsXG4gICAgMTY6ICdTSElGVCcsXG4gICAgMjc6ICdFU0NBUEUnLFxuICAgIDMyOiAnU1BBQ0UnLFxuICAgIDM3OiAnTEVGVCcsXG4gICAgMzg6ICdVUCcsXG4gICAgMzk6ICdSSUdIVCcsXG4gICAgNDA6ICdET1dOJ1xuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFV0aWxpdGllc1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICBmdW5jdGlvbiBpc0FycmF5KCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBvYmplY3QgKSA9PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnbnVtYmVyJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3RyaW5nKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnc3RyaW5nJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleU5hbWUoIGNvZGUgKSB7XG5cbiAgICByZXR1cm4ga2V5TWFwWyBjb2RlIF0gfHwgU3RyaW5nLmZyb21DaGFyQ29kZSggY29kZSApO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKCB0YXJnZXQsIHNvdXJjZSwgb3ZlcndyaXRlICkge1xuXG4gICAgZm9yICggdmFyIGtleSBpbiBzb3VyY2UgKVxuXG4gICAgICBpZiAoIG92ZXJ3cml0ZSB8fCAhKCBrZXkgaW4gdGFyZ2V0ICkgKVxuXG4gICAgICAgIHRhcmdldFsga2V5IF0gPSBzb3VyY2VbIGtleSBdO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5KCBtZXRob2QsIGNvbnRleHQgKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG5cbiAgICAgIG1ldGhvZC5hcHBseSggY29udGV4dCwgYXJndW1lbnRzICk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lKCB0YXJnZXQgKSB7XG5cbiAgICB2YXIgb2JqZWN0ID0ge307XG5cbiAgICBmb3IgKCB2YXIga2V5IGluIHRhcmdldCApIHtcbiAgICAgIFxuICAgICAgaWYgKCBrZXkgPT09ICd3ZWJraXRNb3ZlbWVudFgnIHx8IGtleSA9PT0gJ3dlYmtpdE1vdmVtZW50WScgKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKCBpc0Z1bmN0aW9uKCB0YXJnZXRbIGtleSBdICkgKVxuXG4gICAgICAgIG9iamVjdFsga2V5IF0gPSBwcm94eSggdGFyZ2V0WyBrZXkgXSwgdGFyZ2V0ICk7XG5cbiAgICAgIGVsc2VcblxuICAgICAgICBvYmplY3RbIGtleSBdID0gdGFyZ2V0WyBrZXkgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQ29uc3RydWN0b3JcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgZnVuY3Rpb24gY29uc3RydWN0b3IoIGNvbnRleHQgKSB7XG5cbiAgICB2YXIgcmVxdWVzdCwgaGFuZGxlciwgdGFyZ2V0LCBwYXJlbnQsIGJvdW5kcywgaW5kZXgsIHN1ZmZpeCwgY2xvY2ssIG5vZGUsIGNvcHksIHR5cGUsIGtleSwgdmFsLCBtaW4sIG1heCwgdywgaDtcblxuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgdG91Y2hlcyA9IFtdO1xuICAgIHZhciByZXNpemVkID0gZmFsc2U7XG4gICAgdmFyIHNldHVwID0gZmFsc2U7XG4gICAgdmFyIHJhdGlvID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICB2YXIgaXNEaXYgPSBjb250ZXh0LnR5cGUgPT0gRE9NO1xuICAgIHZhciBpczJEID0gY29udGV4dC50eXBlID09IENBTlZBUztcblxuICAgIHZhciBtb3VzZSA9IHtcbiAgICAgIHg6ICAwLjAsIHk6ICAwLjAsXG4gICAgICBveDogMC4wLCBveTogMC4wLFxuICAgICAgZHg6IDAuMCwgZHk6IDAuMFxuICAgIH07XG5cbiAgICB2YXIgZXZlbnRNYXAgPSBbXG5cbiAgICAgIGNvbnRleHQuZXZlbnRUYXJnZXQgfHwgY29udGV4dC5lbGVtZW50LFxuXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZWRvd24nLCAndG91Y2hzdGFydCcsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW1vdmUnLCAndG91Y2htb3ZlJyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNldXAnLCAndG91Y2hlbmQnLFxuICAgICAgICBwb2ludGVyLCAnY2xpY2snLFxuICAgICAgICBwb2ludGVyLCAnbW91c2VvdXQnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2VvdmVyJyxcblxuICAgICAgZG9jLFxuXG4gICAgICAgIGtleXByZXNzLCAna2V5ZG93bicsICdrZXl1cCcsXG5cbiAgICAgIHdpbixcblxuICAgICAgICBhY3RpdmUsICdmb2N1cycsICdibHVyJyxcbiAgICAgICAgcmVzaXplLCAncmVzaXplJ1xuICAgIF07XG5cbiAgICB2YXIga2V5cyA9IHt9OyBmb3IgKCBrZXkgaW4ga2V5TWFwICkga2V5c1sga2V5TWFwWyBrZXkgXSBdID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyKCBtZXRob2QgKSB7XG5cbiAgICAgIGlmICggaXNGdW5jdGlvbiggbWV0aG9kICkgKVxuXG4gICAgICAgIG1ldGhvZC5hcHBseSggY29udGV4dCwgW10uc3BsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZCggb24gKSB7XG5cbiAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBldmVudE1hcC5sZW5ndGg7IGluZGV4KysgKSB7XG5cbiAgICAgICAgbm9kZSA9IGV2ZW50TWFwWyBpbmRleCBdO1xuXG4gICAgICAgIGlmICggaXNTdHJpbmcoIG5vZGUgKSApXG5cbiAgICAgICAgICB0YXJnZXRbICggb24gPyAnYWRkJyA6ICdyZW1vdmUnICkgKyAnRXZlbnRMaXN0ZW5lcicgXS5jYWxsKCB0YXJnZXQsIG5vZGUsIGhhbmRsZXIsIGZhbHNlICk7XG5cbiAgICAgICAgZWxzZSBpZiAoIGlzRnVuY3Rpb24oIG5vZGUgKSApXG5cbiAgICAgICAgICBoYW5kbGVyID0gbm9kZTtcblxuICAgICAgICBlbHNlIHRhcmdldCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgICBjQUYoIHJlcXVlc3QgKTtcbiAgICAgIHJlcXVlc3QgPSByQUYoIHVwZGF0ZSApO1xuXG4gICAgICBpZiAoICFzZXR1cCApIHtcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnNldHVwICk7XG4gICAgICAgIHNldHVwID0gaXNGdW5jdGlvbiggY29udGV4dC5zZXR1cCApO1xuICAgICAgfVxuXG4gICAgICBpZiAoICFyZXNpemVkICkge1xuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgICAgICByZXNpemVkID0gaXNGdW5jdGlvbiggY29udGV4dC5yZXNpemUgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBjb250ZXh0LnJ1bm5pbmcgJiYgIWNvdW50ZXIgKSB7XG5cbiAgICAgICAgY29udGV4dC5kdCA9ICggY2xvY2sgPSArbmV3IERhdGUoKSApIC0gY29udGV4dC5ub3c7XG4gICAgICAgIGNvbnRleHQubWlsbGlzICs9IGNvbnRleHQuZHQ7XG4gICAgICAgIGNvbnRleHQubm93ID0gY2xvY2s7XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC51cGRhdGUgKTtcblxuICAgICAgICAvLyBQcmUgZHJhd1xuXG4gICAgICAgIGlmICggaXMyRCApIHtcblxuICAgICAgICAgIGlmICggY29udGV4dC5yZXRpbmEgKSB7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY29udGV4dC5hdXRvY2xlYXIpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5zY2FsZSggcmF0aW8sIHJhdGlvICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCBjb250ZXh0LmF1dG9jbGVhciApXG5cbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXdcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LmRyYXcgKTtcblxuICAgICAgICAvLyBQb3N0IGRyYXdcblxuICAgICAgICBpZiAoIGlzMkQgJiYgY29udGV4dC5yZXRpbmEgKVxuXG4gICAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ZXIgPSArK2NvdW50ZXIgJSBjb250ZXh0LmludGVydmFsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcblxuICAgICAgdGFyZ2V0ID0gaXNEaXYgPyBjb250ZXh0LnN0eWxlIDogY29udGV4dC5jYW52YXM7XG4gICAgICBzdWZmaXggPSBpc0RpdiA/ICdweCcgOiAnJztcblxuICAgICAgdyA9IGNvbnRleHQud2lkdGg7XG4gICAgICBoID0gY29udGV4dC5oZWlnaHQ7XG5cbiAgICAgIGlmICggY29udGV4dC5mdWxsc2NyZWVuICkge1xuXG4gICAgICAgIGggPSBjb250ZXh0LmhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgICAgICAgdyA9IGNvbnRleHQud2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCBjb250ZXh0LnJldGluYSAmJiBpczJEICYmIHJhdGlvICkge1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gdyArICdweCc7XG5cbiAgICAgICAgdyAqPSByYXRpbztcbiAgICAgICAgaCAqPSByYXRpbztcbiAgICAgIH1cblxuICAgICAgaWYgKCB0YXJnZXQuaGVpZ2h0ICE9PSBoIClcblxuICAgICAgICB0YXJnZXQuaGVpZ2h0ID0gaCArIHN1ZmZpeDtcblxuICAgICAgaWYgKCB0YXJnZXQud2lkdGggIT09IHcgKVxuXG4gICAgICAgIHRhcmdldC53aWR0aCA9IHcgKyBzdWZmaXg7XG5cbiAgICAgIGlmICggaXMyRCAmJiAhY29udGV4dC5hdXRvY2xlYXIgJiYgY29udGV4dC5yZXRpbmEgKVxuXG4gICAgICAgIGNvbnRleHQuc2NhbGUoIHJhdGlvLCByYXRpbyApO1xuXG4gICAgICBpZiAoIHNldHVwICkgdHJpZ2dlciggY29udGV4dC5yZXNpemUgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGlnbiggdG91Y2gsIHRhcmdldCApIHtcblxuICAgICAgYm91bmRzID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB0b3VjaC54ID0gdG91Y2gucGFnZVggLSBib3VuZHMubGVmdCAtICh3aW4uc2Nyb2xsWCB8fCB3aW4ucGFnZVhPZmZzZXQpO1xuICAgICAgdG91Y2gueSA9IHRvdWNoLnBhZ2VZIC0gYm91bmRzLnRvcCAtICh3aW4uc2Nyb2xsWSB8fCB3aW4ucGFnZVlPZmZzZXQpO1xuXG4gICAgICByZXR1cm4gdG91Y2g7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXVnbWVudCggdG91Y2gsIHRhcmdldCApIHtcblxuICAgICAgYWxpZ24oIHRvdWNoLCBjb250ZXh0LmVsZW1lbnQgKTtcblxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9O1xuXG4gICAgICB0YXJnZXQub3ggPSB0YXJnZXQueCB8fCB0b3VjaC54O1xuICAgICAgdGFyZ2V0Lm95ID0gdGFyZ2V0LnkgfHwgdG91Y2gueTtcblxuICAgICAgdGFyZ2V0LnggPSB0b3VjaC54O1xuICAgICAgdGFyZ2V0LnkgPSB0b3VjaC55O1xuXG4gICAgICB0YXJnZXQuZHggPSB0YXJnZXQueCAtIHRhcmdldC5veDtcbiAgICAgIHRhcmdldC5keSA9IHRhcmdldC55IC0gdGFyZ2V0Lm95O1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3MoIGV2ZW50ICkge1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb3B5ID0gY2xvbmUoIGV2ZW50ICk7XG4gICAgICBjb3B5Lm9yaWdpbmFsRXZlbnQgPSBldmVudDtcblxuICAgICAgaWYgKCBjb3B5LnRvdWNoZXMgKSB7XG5cbiAgICAgICAgdG91Y2hlcy5sZW5ndGggPSBjb3B5LnRvdWNoZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBjb3B5LnRvdWNoZXMubGVuZ3RoOyBpbmRleCsrIClcblxuICAgICAgICAgIHRvdWNoZXNbIGluZGV4IF0gPSBhdWdtZW50KCBjb3B5LnRvdWNoZXNbIGluZGV4IF0sIHRvdWNoZXNbIGluZGV4IF0gKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0b3VjaGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRvdWNoZXNbMF0gPSBhdWdtZW50KCBjb3B5LCBtb3VzZSApO1xuICAgICAgfVxuXG4gICAgICBleHRlbmQoIG1vdXNlLCB0b3VjaGVzWzBdLCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvaW50ZXIoIGV2ZW50ICkge1xuXG4gICAgICBldmVudCA9IHByb2Nlc3MoIGV2ZW50ICk7XG5cbiAgICAgIG1pbiA9ICggbWF4ID0gZXZlbnRNYXAuaW5kZXhPZiggdHlwZSA9IGV2ZW50LnR5cGUgKSApIC0gMTtcblxuICAgICAgY29udGV4dC5kcmFnZ2luZyA9XG5cbiAgICAgICAgL2Rvd258c3RhcnQvLnRlc3QoIHR5cGUgKSA/IHRydWUgOlxuXG4gICAgICAgIC91cHxlbmQvLnRlc3QoIHR5cGUgKSA/IGZhbHNlIDpcblxuICAgICAgICBjb250ZXh0LmRyYWdnaW5nO1xuXG4gICAgICB3aGlsZSggbWluIClcblxuICAgICAgICBpc1N0cmluZyggZXZlbnRNYXBbIG1pbiBdICkgP1xuXG4gICAgICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnRNYXBbIG1pbi0tIF0gXSwgZXZlbnQgKSA6XG5cbiAgICAgICAgaXNTdHJpbmcoIGV2ZW50TWFwWyBtYXggXSApID9cblxuICAgICAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50TWFwWyBtYXgrKyBdIF0sIGV2ZW50ICkgOlxuXG4gICAgICAgIG1pbiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5cHJlc3MoIGV2ZW50ICkge1xuXG4gICAgICBrZXkgPSBldmVudC5rZXlDb2RlO1xuICAgICAgdmFsID0gZXZlbnQudHlwZSA9PSAna2V5dXAnO1xuICAgICAga2V5c1sga2V5IF0gPSBrZXlzWyBrZXlOYW1lKCBrZXkgKSBdID0gIXZhbDtcblxuICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnQudHlwZSBdLCBldmVudCApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2ZSggZXZlbnQgKSB7XG5cbiAgICAgIGlmICggY29udGV4dC5hdXRvcGF1c2UgKVxuXG4gICAgICAgICggZXZlbnQudHlwZSA9PSAnYmx1cicgPyBzdG9wIDogc3RhcnQgKSgpO1xuXG4gICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudC50eXBlIF0sIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIEFQSVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgICAgIGNvbnRleHQubm93ID0gK25ldyBEYXRlKCk7XG4gICAgICBjb250ZXh0LnJ1bm5pbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG5cbiAgICAgIGNvbnRleHQucnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblxuICAgICAgKCBjb250ZXh0LnJ1bm5pbmcgPyBzdG9wIDogc3RhcnQgKSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuXG4gICAgICBpZiAoIGlzMkQgKVxuXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjb250ZXh0LndpZHRoICogcmF0aW8sIGNvbnRleHQuaGVpZ2h0ICogcmF0aW8gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuXG4gICAgICBwYXJlbnQgPSBjb250ZXh0LmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGluZGV4ID0gaW5zdGFuY2VzLmluZGV4T2YoIGNvbnRleHQgKTtcblxuICAgICAgaWYgKCBwYXJlbnQgKSBwYXJlbnQucmVtb3ZlQ2hpbGQoIGNvbnRleHQuZWxlbWVudCApO1xuICAgICAgaWYgKCB+aW5kZXggKSBpbnN0YW5jZXMuc3BsaWNlKCBpbmRleCwgMSApO1xuXG4gICAgICBiaW5kKCBmYWxzZSApO1xuICAgICAgc3RvcCgpO1xuICAgIH1cblxuICAgIGV4dGVuZCggY29udGV4dCwge1xuXG4gICAgICB0b3VjaGVzOiB0b3VjaGVzLFxuICAgICAgbW91c2U6IG1vdXNlLFxuICAgICAga2V5czoga2V5cyxcblxuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICBtaWxsaXM6IDAsXG4gICAgICBub3c6IE5hTixcbiAgICAgIGR0OiBOYU4sXG5cbiAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICB0b2dnbGU6IHRvZ2dsZSxcbiAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIHN0b3A6IHN0b3BcbiAgICB9KTtcblxuICAgIGluc3RhbmNlcy5wdXNoKCBjb250ZXh0ICk7XG5cbiAgICByZXR1cm4gKCBjb250ZXh0LmF1dG9zdGFydCAmJiBzdGFydCgpLCBiaW5kKCB0cnVlICksIHJlc2l6ZSgpLCB1cGRhdGUoKSwgY29udGV4dCApO1xuICB9XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgR2xvYmFsIEFQSVxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgZWxlbWVudCwgY29udGV4dCwgU2tldGNoID0ge1xuXG4gICAgQ0FOVkFTOiBDQU5WQVMsXG4gICAgV0VCX0dMOiBXRUJHTCxcbiAgICBXRUJHTDogV0VCR0wsXG4gICAgRE9NOiBET00sXG5cbiAgICBpbnN0YW5jZXM6IGluc3RhbmNlcyxcblxuICAgIGluc3RhbGw6IGZ1bmN0aW9uKCBjb250ZXh0ICkge1xuXG4gICAgICBpZiAoICFjb250ZXh0WyBIQVNfU0tFVENIIF0gKSB7XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgTUFUSF9QUk9QUy5sZW5ndGg7IGkrKyApXG5cbiAgICAgICAgICBjb250ZXh0WyBNQVRIX1BST1BTW2ldIF0gPSBNWyBNQVRIX1BST1BTW2ldIF07XG5cbiAgICAgICAgZXh0ZW5kKCBjb250ZXh0LCB7XG5cbiAgICAgICAgICBUV09fUEk6IE0uUEkgKiAyLFxuICAgICAgICAgIEhBTEZfUEk6IE0uUEkgLyAyLFxuICAgICAgICAgIFFVQVJURVJfUEk6IE0uUEkgLyA0LFxuXG4gICAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiggbWluLCBtYXggKSB7XG5cbiAgICAgICAgICAgIGlmICggaXNBcnJheSggbWluICkgKVxuXG4gICAgICAgICAgICAgIHJldHVybiBtaW5bIH5+KCBNLnJhbmRvbSgpICogbWluLmxlbmd0aCApIF07XG5cbiAgICAgICAgICAgIGlmICggIWlzTnVtYmVyKCBtYXggKSApXG5cbiAgICAgICAgICAgICAgbWF4ID0gbWluIHx8IDEsIG1pbiA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBtaW4gKyBNLnJhbmRvbSgpICogKCBtYXggLSBtaW4gKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbGVycDogZnVuY3Rpb24oIG1pbiwgbWF4LCBhbW91bnQgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtaW4gKyBhbW91bnQgKiAoIG1heCAtIG1pbiApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtYXA6IGZ1bmN0aW9uKCBudW0sIG1pbkEsIG1heEEsIG1pbkIsIG1heEIgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoIG51bSAtIG1pbkEgKSAvICggbWF4QSAtIG1pbkEgKSAqICggbWF4QiAtIG1pbkIgKSArIG1pbkI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZXh0WyBIQVNfU0tFVENIIF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG4gICAgICBvcHRpb25zID0gZXh0ZW5kKCBvcHRpb25zIHx8IHt9LCBkZWZhdWx0cyApO1xuXG4gICAgICBpZiAoIG9wdGlvbnMuZ2xvYmFscyApIFNrZXRjaC5pbnN0YWxsKCBzZWxmICk7XG5cbiAgICAgIGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQgfHwgZG9jLmNyZWF0ZUVsZW1lbnQoIG9wdGlvbnMudHlwZSA9PT0gRE9NID8gJ2RpdicgOiAnY2FudmFzJyApO1xuXG4gICAgICBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IChmdW5jdGlvbigpIHtcblxuICAgICAgICBzd2l0Y2goIG9wdGlvbnMudHlwZSApIHtcblxuICAgICAgICAgIGNhc2UgQ0FOVkFTOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRDb250ZXh0KCAnMmQnLCBvcHRpb25zICk7XG5cbiAgICAgICAgICBjYXNlIFdFQkdMOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRDb250ZXh0KCAnd2ViZ2wnLCBvcHRpb25zICkgfHwgZWxlbWVudC5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJywgb3B0aW9ucyApO1xuXG4gICAgICAgICAgY2FzZSBET006XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNhbnZhcyA9IGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgfSkoKTtcblxuICAgICAgKCBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2MuYm9keSApLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XG5cbiAgICAgIHJldHVybiBTa2V0Y2guYXVnbWVudCggY29udGV4dCwgb3B0aW9ucyApO1xuICAgIH0sXG5cbiAgICBhdWdtZW50OiBmdW5jdGlvbiggY29udGV4dCwgb3B0aW9ucyApIHtcblxuICAgICAgb3B0aW9ucyA9IGV4dGVuZCggb3B0aW9ucyB8fCB7fSwgZGVmYXVsdHMgKTtcblxuICAgICAgb3B0aW9ucy5lbGVtZW50ID0gY29udGV4dC5jYW52YXMgfHwgY29udGV4dDtcbiAgICAgIG9wdGlvbnMuZWxlbWVudC5jbGFzc05hbWUgKz0gJyBza2V0Y2gnO1xuXG4gICAgICBleHRlbmQoIGNvbnRleHQsIG9wdGlvbnMsIHRydWUgKTtcblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yKCBjb250ZXh0ICk7XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFNoaW1zXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciB2ZW5kb3JzID0gWyAnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJyBdO1xuICB2YXIgc2NvcGUgPSBzZWxmO1xuICB2YXIgdGhlbiA9IDA7XG5cbiAgdmFyIGEgPSAnQW5pbWF0aW9uRnJhbWUnO1xuICB2YXIgYiA9ICdyZXF1ZXN0JyArIGE7XG4gIHZhciBjID0gJ2NhbmNlbCcgKyBhO1xuXG4gIHZhciByQUYgPSBzY29wZVsgYiBdO1xuICB2YXIgY0FGID0gc2NvcGVbIGMgXTtcblxuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhckFGOyBpKysgKSB7XG5cbiAgICByQUYgPSBzY29wZVsgdmVuZG9yc1sgaSBdICsgJ1JlcXVlc3QnICsgYSBdO1xuICAgIGNBRiA9IHNjb3BlWyB2ZW5kb3JzWyBpIF0gKyAnQ2FuY2VsJyArIGEgXTtcbiAgfVxuXG4gIHNjb3BlWyBiIF0gPSByQUYgPSByQUYgfHwgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXG4gICAgdmFyIG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBkdCA9IE0ubWF4KCAwLCAxNiAtICggbm93IC0gdGhlbiApICk7XG4gICAgdmFyIGlkID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBjYWxsYmFjayggbm93ICsgZHQgKTtcbiAgICB9LCBkdCApO1xuXG4gICAgdGhlbiA9IG5vdyArIGR0O1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBzY29wZVsgYyBdID0gY0FGID0gY0FGIHx8IGZ1bmN0aW9uKCBpZCApIHtcbiAgICBjbGVhclRpbWVvdXQoIGlkICk7XG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgT3V0cHV0XG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHJldHVybiBTa2V0Y2g7XG5cbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy92ZW5kb3Ivc2tldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==