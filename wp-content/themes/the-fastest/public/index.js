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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_marketing_events_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_marketing_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__common_marketing_events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vendor_cakeCharts__ = __webpack_require__(131);
__webpack_require__(127);









/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  __WEBPACK_IMPORTED_MODULE_5__vendor_cakeCharts__["a" /* PieChart */].createPie(".pieID.legend", ".pieID.pie");
  loadVideo('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  
}

/**
 * THE PROGRAM
**/

if(WPAS_APP.view.slug === 'the-program' || WPAS_APP.view.slug === 'programa' || WPAS_APP.view.slug === 'venezuela'){
  
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
  
  __webpack_require__(132);
  
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
  
  __webpack_require__(133);

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
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {
/**
 * Tagmanger events
 **/
$('.syllabus-download').submit(function(event){
    console.log('syllabus requested');
    dataLayer.push({'event': 'syllabus_download'});
});

$('.newsletter-signup').submit(function(event){
    dataLayer.push({'event': 'newsletter_signup'});
    console.log('newletter requested');
});

$('.apply-btn').click(function(event){
    dataLayer.push({'event': 'application_rendered'});
    console.log('application_rendered');
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 131:
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

/***/ 132:
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

/***/ 133:
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
  
  var Sketch = __webpack_require__(134);
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

/***/ 134:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL21hcmtldGluZy1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3ZlbmRvci9jYWtlQ2hhcnRzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcm9ncmFtLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcmljaW5nLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy92ZW5kb3Ivc2tldGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUI7OztBQUdqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLHlCQUF5Qjs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsNkJBQTZCOztBQUVyRDs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsdUJBQXVCOztBQUUvQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxxQ0FBcUM7O0FBRXJDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQiw0QkFBNEI7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyxHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vc3R5bGVzL2luZGV4LnNjc3MnKTtcblxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC91dGlsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJy4vcGFnZXMvYWxsLmpzJztcbmltcG9ydCAnLi9jb21tb24vbWFya2V0aW5nLWV2ZW50cy5qcyc7XG5pbXBvcnQge1BpZUNoYXJ0fSBmcm9tIFwiLi92ZW5kb3IvY2FrZUNoYXJ0c1wiO1xuXG5cbi8qKlxuICogSE9NRVxuKiovXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdob21lJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdpbmljaW8nKXtcbiAgXG4gIFBpZUNoYXJ0LmNyZWF0ZVBpZShcIi5waWVJRC5sZWdlbmRcIiwgXCIucGllSUQucGllXCIpO1xuICBsb2FkVmlkZW8oJy93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9hc3NldHMvdmlkZW8vaG9tZS1kYXJrLm1wNCcpO1xuICBcbn1cblxuLyoqXG4gKiBUSEUgUFJPR1JBTVxuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3RoZS1wcm9ncmFtJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdwcm9ncmFtYScgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAndmVuZXp1ZWxhJyl7XG4gIFxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBDdXN0b20gXG4gICAgdmFyIHN0aWNreVRvZ2dsZSA9IGZ1bmN0aW9uKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgc2Nyb2xsRWxlbWVudCkge1xuICAgICAgdmFyIHN0aWNreUhlaWdodCA9IHN0aWNreS5vdXRlckhlaWdodCgpO1xuICAgICAgdmFyIHN0aWNreVdpZHRoID0gc3RpY2t5Lm91dGVyV2lkdGgoKTtcbiAgICAgIHZhciBvZmZzZXQgPSBzdGlja3lXcmFwcGVyLm9mZnNldCgpO1xuICAgICAgdmFyIHN0aWNreVRvcCA9IG9mZnNldC50b3A7XG4gICAgICB2YXIgc3RpY2t5TGVmdCA9IG9mZnNldC5sZWZ0O1xuICAgICAgdmFyIG1heFN0aWNrUG9zaXRpb24gPSAkKCcjcHJpY2luZycpLm9mZnNldCgpLnRvcCAtIDIwO1xuICAgICAgLy92YXIgbWF4U3RpY2tQb3NpdGlvbiA9IDM2ODA7XG4gICAgICB2YXIgd2luZG93U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpO1xuICAgICAgaWYgKHdpbmRvd1Njcm9sbFBvc2l0aW9uID49IHN0aWNreVRvcCl7XG4gICAgICAgIGlmKHdpbmRvd1Njcm9sbFBvc2l0aW9uIDwgbWF4U3RpY2tQb3NpdGlvbilcbiAgICAgICAge1xuICAgICAgICAgIHN0aWNreVdyYXBwZXIuaGVpZ2h0KHN0aWNreUhlaWdodCk7XG4gICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgICBzdGlja3kuY3NzKCd3aWR0aCcsc3RpY2t5V2lkdGgrJ3B4Jyk7XG4gICAgICAgICAgc3RpY2t5LmNzcygnbGVmdCcsc3RpY2t5TGVmdCsncHgnKTtcbiAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLCcwJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgc3RpY2t5LnJlbW92ZUNsYXNzKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgIHN0aWNreVdyYXBwZXIuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgIHN0aWNreS5jc3MoJ3RvcCcsKG1heFN0aWNrUG9zaXRpb24tNjY1KSsncHgnKTtcbiAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JywnMTVweCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgc3RpY2t5LmNzcygnbGVmdCcsJzAnKTtcbiAgICAgICAgc3RpY2t5LmNzcygndG9wJywnMCcpO1xuICAgICAgICBzdGlja3lXcmFwcGVyLmhlaWdodCgnYXV0bycpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy8gRmluZCBhbGwgZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIiBlbGVtZW50c1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInN0aWNreS1vbnNjcm9sbFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc3RpY2t5ID0gJCh0aGlzKTtcbiAgICAgIHZhciBzdGlja3lXcmFwcGVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnc3RpY2t5LXdyYXBwZXInKTsgLy8gaW5zZXJ0IGhpZGRlbiBlbGVtZW50IHRvIG1haW50YWluIGFjdHVhbCB0b3Agb2Zmc2V0IG9uIHBhZ2VcbiAgICAgIHN0aWNreS5iZWZvcmUoc3RpY2t5V3JhcHBlcik7XG4gICAgICBzdGlja3kuYWRkQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgXG4gICAgICAvLyBTY3JvbGwgJiByZXNpemUgZXZlbnRzXG4gICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5zdGlja3ktb25zY3JvbGwgcmVzaXplLnN0aWNreS1vbnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCAkKHRoaXMpKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAvLyBPbiBwYWdlIGxvYWRcbiAgICAgIHN0aWNreVRvZ2dsZShzdGlja3ksIHN0aWNreVdyYXBwZXIsICQod2luZG93KSk7XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgcmVxdWlyZSgnLi9wYWdlcy9wcm9ncmFtLmpzJyk7XG4gIFxufVxuXG5cblxuXG4vKipcbiAqIFBSSUNJTkdcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdwcmljaW5nJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdwcmVjaW8nKXtcbiAgXG4gIGxvYWRWaWRlbygnL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L2Fzc2V0cy92aWRlby9wcmljaW5nLm1wNCcpO1xuICBcbiAgdmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xuICB2YXIgbXlTbGlkZXIgPSBuZXcgU2xpZGVyKCcjcHJpY2luZy1zbGlkZXInKTtcbiAgLy92YXIgc2xpZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljaW5nLXNsaWRlcicpO1xuICBteVNsaWRlci5vbignc2xpZGVTdG9wJywgZnVuY3Rpb24obmV3VmFsdWUpe1xuICAgIFxuICAgIHZhciBtZXNzYWdlID0gJ3Vrbm93bic7XG4gICAgc3dpdGNoKG5ld1ZhbHVlKVxuICAgIHtcbiAgICAgIGNhc2UgMDogbWVzc2FnZSA9ICckMTAwMCBkZXBvc2l0ICsgJDg1MyAvIG1vbnRoJzsgYnJlYWs7XG4gICAgICBjYXNlIDE6IG1lc3NhZ2UgPSAnJDEwMDAgZGVwb3NpdCArICQ0NDUgLyBtb250aCc7IGJyZWFrO1xuICAgICAgY2FzZSAzOiBtZXNzYWdlID0gJyQxMDAwIGRlcG9zaXQgKyAkMjQwIC8gbW9udGgnOyBicmVhaztcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLWxhYmVsJykuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0XHRcblx0XHR2YXIgcGF5bWVudFBsYW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheW1lbnQtcGxhbicpO1xuXHRcdC8vcGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy15ZWxsb3dcIik7XG5cdFx0cGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJnbG93XCIpO1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0ICAvL3BheW1lbnRQbGFuQ2FyZC5jbGFzc0xpc3QuYWRkKFwiYmcteWVsbG93XCIpO1xuXHRcdFx0cGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJnbG93XCIpO1xuXHRcdH0sIDIwMCk7XG4gICAgXG4gIH0pO1xuICBcbiAgcmVxdWlyZSgnLi9wYWdlcy9wcmljaW5nLmpzJyk7XG5cbn1cblxuZnVuY3Rpb24gbG9hZFZpZGVvKHZpZGVvVVJMKXtcbiAgdmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgdmlkZW8uc3JjID0gdmlkZW9VUkw7XG4gIHZpZGVvLmF1dG9QbGF5ID0gdHJ1ZTtcbiAgdmlkZW8ubG9vcCA9IHRydWU7XG4gIHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgdmlkZW8uY2xhc3NMaXN0LmFkZCgndmlkZW8tYmFja2dyb3VuZCcpO1xuICB2YXIgcyA9IGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh2aWRlbywgcyk7XG4gIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLGZ1bmN0aW9uKCl7XG4gICAgdmlkZW8ucGxheSgpO1xuICB9KTtcbn1cblxuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdjYWxlbmRhcicgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAnY2FsZW5kYXJpbycpe1xuICBcbiAgdmFyIGJhc2VVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdmFyIHBpZWNlcyA9IGJhc2VVUkwuc3BsaXQoJz8nKTtcbiAgaWYocGllY2VzLmxlbmd0aD4xKSBiYXNlVVJMID0gcGllY2VzWzBdO1xuICBcbiAgdmFyIHVybFZhcnMgPSBnZXRVcmxWYXJzKCk7XG4gIGRlbGV0ZSB1cmxWYXJzWycwJ107XG4gIGRlbGV0ZSB1cmxWYXJzW2Jhc2VVUkxdO1xuICBkZWxldGUgdXJsVmFyc1snJ107XG4gIGlmKCdsJyBpbiB1cmxWYXJzKSAkKCcjbG9jYXRpb25TZWxlY3RvcicpLmh0bWwoJCgnLmxvY2F0aW9uLW9wdGlvbltkYXRhLXZhbHVlPScrdXJsVmFyc1snbCddKyddJykuaHRtbCgpKTtcbiAgaWYoJ2xhbmcnIGluIHVybFZhcnMpICQoJyNsYW5nU2VsZWN0b3InKS5odG1sKCQoJy5sYW5nLW9wdGlvbltkYXRhLXZhbHVlPScrdXJsVmFyc1snbGFuZyddKyddJykuaHRtbCgpKTtcbiAgaWYoJ3R5cGUnIGluIHVybFZhcnMpICQoJyN0eXBlU2VsZWN0b3InKS5odG1sKCQoJy50eXBlLW9wdGlvbltkYXRhLXZhbHVlPScrdXJsVmFyc1sndHlwZSddKyddJykuaHRtbCgpKTtcbiAgXG4gICQoJy5wYWdlLWNhbGVuZGFyIC5kcm9wZG93bi1tZW51IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7ICBcbiAgICBcbiAgICBcbiAgICB2YXIgYnV0dG9uID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignYnV0dG9uJyk7XG4gICAgYnV0dG9uLmh0bWwoJCh0aGlzKS5odG1sKCkpO1xuICAgIFxuICAgIHZhciB2YWx1ZSA9ICQodGhpcykuZGF0YSgndmFsdWUnKTtcbiAgICBpZih2YWx1ZSAhPSAnYWxsJykgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgIC8vZWxzZSB1cmxWYXJzID0gdW5zZXRBcnJheSh1cmxWYXJzLGJ1dHRvbi5kYXRhKCdrZXknKSk7XG4gICAgZWxzZSBkZWxldGUgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldO1xuICAgIFxuICAgICQoJy5jb3Vyc2VzIC5sb2FkaW5nLWFuaW1hdGlvbicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgJCgnLmNvdXJzZXMgLmxpc3QtZ3JvdXAnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBiYXNlVVJMICsgJz8nICsgc2VyaWFsaXplKHVybFZhcnMgKTtcbiAgICBcbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFVybFZhcnMoKXtcbiAgXG4gICAgdmFyIHZhcnMgPSBbXSwgaGFzaDtcbiAgICB2YXIgaGFzaGVzID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2Uod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignPycpICsgMSkuc3BsaXQoJyYnKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgaGFzaCA9IGhhc2hlc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICB2YXJzLnB1c2goaGFzaFswXSk7XG4gICAgICAgIHZhcnNbaGFzaFswXV0gPSBoYXNoWzFdO1xuICAgIH1cbiAgICByZXR1cm4gdmFycztcbiAgICBcblxufVxuXG52YXIgc2VyaWFsaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciBzdHIgPSBbXTtcbiAgZm9yKHZhciBwIGluIG9iailcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pKTtcbiAgICB9XG4gIHJldHVybiBzdHIuam9pbihcIiZcIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy92YXIgbmV3c2xldHRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtbmV3c2xldHRlciBmb3JtJyk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgIGlmKGZyb21Ub3A+MTAwKSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICBlbHNlICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xufSk7XG5cblxuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1OZXdzbGV0dGVyID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybU5ld3NsZXR0ZXIuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICBcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnbmV3c2xldHRlcl9zaWdudXAnLFxuICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1OZXdzbGV0dGVyLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybU5ld3NsZXR0ZXIuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxufSk7XG5cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtU3lsbGFidXMgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICBcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZG93bmxvYWRfc3lsbGFidXMnLFxuICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1TeWxsYWJ1cy5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAkKCcjc3lsbGFidXNNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICB9LDIwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KHAzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2dldF91cGNvbWluZ19ldmVudCdcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSkgcHJvbXB0VXBjb21pbmdFdmVudChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSB1cGNvbWluZyBldmVudDogXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG59KTtcblxuZnVuY3Rpb24gcHJvbXB0VXBjb21pbmdFdmVudChldmVudCl7XG4gICBcbiAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3BTdGF0ZScpICE9ICdzaG93bicpe1xuICAgICAgZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLmRlbGF5KDIwMDApLmZhZGVJbigpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BvcFN0YXRlJywnc2hvd24nKTtcbiAgICAgICQoJyN1cGNvbWluZ0V2ZW50JykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcHV0IHlvdXIgZGVmYXVsdCBldmVudCBoZXJlXG4gICAgICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgIH1cbn1cblxuZnVuY3Rpb24gZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI3VwY29taW5nRXZlbnQnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXknKS5odG1sKGV2ZW50LmRheSk7XG4gICBtb2RhbC5maW5kKCcubW9udGgnKS5odG1sKGV2ZW50Lm1vbnRoKTtcbiAgIG1vZGFsLmZpbmQoJy55ZWFyJykuaHRtbChldmVudC55ZWFyKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LXRpdGxlJykuaHRtbChldmVudC5wb3N0X3RpdGxlKTtcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXRhaWxzJykuaHRtbChldmVudC5ldmVudF9zdGFydF90aW1lICsgXCIgXCIgKyBldmVudC5ldmVudF9lbmRfdGltZSArICcgYXQgPHNwYW4gY2xhc3M9XCJpbW9vbiBpY29uLWxvY2F0aW9uXCI+PC9zcGFuPiAnICsgZXZlbnQuYWRkcmVzcyk7Ly8zOjMwcG0gLSBhdCBTdGFydGh1YiwgRG93bnRvd24gTWlhbWlcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXNjcmlwdGlvbicpLmh0bWwoZXZlbnQucG9zdF9jb250ZW50KTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC50aWNrZXRfdXJsKTtcbiAgIFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBUYWdtYW5nZXIgZXZlbnRzXG4gKiovXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgIGNvbnNvbGUubG9nKCdzeWxsYWJ1cyByZXF1ZXN0ZWQnKTtcbiAgICBkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ3N5bGxhYnVzX2Rvd25sb2FkJ30pO1xufSk7XG5cbiQoJy5uZXdzbGV0dGVyLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICAgZGF0YUxheWVyLnB1c2goeydldmVudCc6ICduZXdzbGV0dGVyX3NpZ251cCd9KTtcbiAgICBjb25zb2xlLmxvZygnbmV3bGV0dGVyIHJlcXVlc3RlZCcpO1xufSk7XG5cbiQoJy5hcHBseS1idG4nKS5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdhcHBsaWNhdGlvbl9yZW5kZXJlZCd9KTtcbiAgICBjb25zb2xlLmxvZygnYXBwbGljYXRpb25fcmVuZGVyZWQnKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5leHBvcnQgdmFyIFBpZUNoYXJ0ID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHRoZXB1YmxpYyA9IHt9O1xuXG4gICAgdGhlcHVibGljLmNyZWF0ZVBpZSA9IGZ1bmN0aW9uKGRhdGFFbGVtZW50LCBwaWVFbGVtZW50KSB7XG4gICAgICB2YXIgbGlzdERhdGEgPSBbXTtcbiAgICAgICQoZGF0YUVsZW1lbnQrXCIgc3BhblwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBsaXN0RGF0YS5wdXNoKE51bWJlcigkKHRoaXMpLmh0bWwoKSkpO1xuICAgICAgfSk7XG4gICAgICB2YXIgbGlzdFRvdGFsID0gMDtcbiAgICAgIGZvcih2YXIgaT0wOyBpPGxpc3REYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpc3RUb3RhbCArPSBsaXN0RGF0YVtpXTtcbiAgICAgIH1cbiAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgdmFyIGNvbG9yID0gW1xuICAgICAgICBcImNvcm5mbG93ZXJibHVlXCIsIFxuICAgICAgICBcIm9saXZlZHJhYlwiLCBcbiAgICAgICAgXCJvcmFuZ2VcIiwgXG4gICAgICAgIFwidG9tYXRvXCIsIFxuICAgICAgICBcImNyaW1zb25cIiwgXG4gICAgICAgIFwicHVycGxlXCIsIFxuICAgICAgICBcInR1cnF1b2lzZVwiLCBcbiAgICAgICAgXCJmb3Jlc3RncmVlblwiLCBcbiAgICAgICAgXCJuYXZ5XCIsIFxuICAgICAgICBcImdyYXlcIlxuICAgICAgXTtcbiAgICAgIGZvcih2YXIgaT0wOyBpPGxpc3REYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzaXplID0gc2xpY2VTaXplKGxpc3REYXRhW2ldLCBsaXN0VG90YWwpO1xuICAgICAgICBpdGVyYXRlU2xpY2VzKHNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgaSwgMCwgY29sb3JbaV0pO1xuICAgICAgICAkKGRhdGFFbGVtZW50K1wiIGxpOm50aC1jaGlsZChcIisoaSsxKStcIilcIikuY3NzKFwiYm9yZGVyLWNvbG9yXCIsIGNvbG9yW2ldKTtcbiAgICAgICAgb2Zmc2V0ICs9IHNpemU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xpY2VTaXplKGRhdGFOdW0sIGRhdGFUb3RhbCkge1xuICAgICAgcmV0dXJuIChkYXRhTnVtIC8gZGF0YVRvdGFsKSAqIDM2MDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkU2xpY2Uoc2xpY2VTaXplLCBwaWVFbGVtZW50LCBvZmZzZXQsIHNsaWNlSUQsIGNvbG9yKSB7XG4gICAgICAkKHBpZUVsZW1lbnQpLmFwcGVuZChcIjxkaXYgY2xhc3M9J3NsaWNlIFwiK3NsaWNlSUQrXCInPjxzcGFuPjwvc3Bhbj48L2Rpdj5cIik7XG4gICAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0IC0gMTtcbiAgICAgIHZhciBzaXplUm90YXRpb24gPSAtMTc5ICsgc2xpY2VTaXplO1xuICAgICAgJChcIi5cIitzbGljZUlEKS5jc3Moe1xuICAgICAgICBcInRyYW5zZm9ybVwiOiBcInJvdGF0ZShcIitvZmZzZXQrXCJkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKVwiXG4gICAgICB9KTtcbiAgICAgICQoXCIuXCIrc2xpY2VJRCtcIiBzcGFuXCIpLmNzcyh7XG4gICAgICAgIFwidHJhbnNmb3JtXCIgICAgICAgOiBcInJvdGF0ZShcIitzaXplUm90YXRpb24rXCJkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKVwiLFxuICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogY29sb3JcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBpdGVyYXRlU2xpY2VzKHNsaWNlU2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBkYXRhQ291bnQsIHNsaWNlQ291bnQsIGNvbG9yKSB7XG4gICAgICB2YXIgc2xpY2VJRCA9IFwic1wiK2RhdGFDb3VudCtcIi1cIitzbGljZUNvdW50O1xuICAgICAgdmFyIG1heFNpemUgPSAxNzk7XG4gICAgICBpZihzbGljZVNpemU8PW1heFNpemUpIHtcbiAgICAgICAgYWRkU2xpY2Uoc2xpY2VTaXplLCBwaWVFbGVtZW50LCBvZmZzZXQsIHNsaWNlSUQsIGNvbG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFNsaWNlKG1heFNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgc2xpY2VJRCwgY29sb3IpO1xuICAgICAgICBpdGVyYXRlU2xpY2VzKHNsaWNlU2l6ZS1tYXhTaXplLCBwaWVFbGVtZW50LCBvZmZzZXQrbWF4U2l6ZSwgZGF0YUNvdW50LCBzbGljZUNvdW50KzEsIGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoZXB1YmxpYztcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvdmVuZG9yL2Nha2VDaGFydHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8vIENhY2hlIHNlbGVjdG9yc1xudmFyIHRvcE1lbnUgPSAkKFwiLnByb2dyYW0tbWVudVwiKSxcbiAgICB0b3BNZW51SGVpZ2h0ID0gdG9wTWVudS5vdXRlckhlaWdodCgpKzE1LFxuICAgIC8vIEFsbCBsaXN0IGl0ZW1zXG4gICAgbWVudUl0ZW1zID0gdG9wTWVudS5maW5kKFwiYVtocmVmKj0nIyddXCIpLFxuICAgIC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXG4gICAgc2Nyb2xsSXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgaXRlbSA9ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSk7XG4gICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICB9KTtcblxuLy8gQmluZCB0byBzY3JvbGxcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkrdG9wTWVudUhlaWdodDtcblxuICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cbiAgIHZhciBjdXIgPSBzY3JvbGxJdGVtcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcbiAgICAgICByZXR1cm4gdGhpcztcbiAgIH0pO1xuICAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgY3VycmVudCBlbGVtZW50XG4gICBjdXIgPSBjdXJbY3VyLmxlbmd0aC0xXTtcbiAgIHZhciBpZCA9IGN1ciAmJiBjdXIubGVuZ3RoID8gY3VyWzBdLmlkIDogXCJcIjtcbiAgIC8vIFNldC9yZW1vdmUgYWN0aXZlIGNsYXNzXG4gICBtZW51SXRlbXNcbiAgICAgLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgIC5lbmQoKS5maWx0ZXIoXCJbaHJlZj0nI1wiK2lkK1wiJ11cIikucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcm9ncmFtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiICAgIGZ1bmN0aW9uIFBhcnRpY2xlKCB4LCB5LCByYWRpdXMgKSB7XG4gICAgXHR0aGlzLmluaXQoIHgsIHksIHJhZGl1cyApO1xuICAgIH1cbiAgICBcbiAgICBQYXJ0aWNsZS5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgXHRpbml0OiBmdW5jdGlvbiggeCwgeSwgcmFkaXVzICkge1xuICAgIFxuICAgIFx0XHR0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICBcbiAgICBcdFx0dGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTA7XG4gICAgXHRcdHRoaXMud2FuZGVyID0gMC4xNTtcbiAgICBcdFx0dGhpcy50aGV0YSA9IHJhbmRvbSggVFdPX1BJICk7XG4gICAgXHRcdHRoaXMuZHJhZyA9IDAuOTI7XG4gICAgXHRcdHRoaXMuY29sb3IgPSAnI2ZmZic7XG4gICAgXG4gICAgXHRcdHRoaXMueCA9IHggfHwgMC4wO1xuICAgIFx0XHR0aGlzLnkgPSB5IHx8IDAuMDtcbiAgICBcbiAgICBcdFx0dGhpcy52eCA9IDAuMDtcbiAgICBcdFx0dGhpcy52eSA9IDAuMDtcbiAgICBcdH0sXG4gICAgXG4gICAgXHRtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBcdFx0dGhpcy54ICs9IHRoaXMudng7XG4gICAgXHRcdHRoaXMueSArPSB0aGlzLnZ5O1xuICAgIFxuICAgIFx0XHR0aGlzLnZ4ICo9IHRoaXMuZHJhZztcbiAgICBcdFx0dGhpcy52eSAqPSB0aGlzLmRyYWc7XG4gICAgXG4gICAgXHRcdHRoaXMudGhldGEgKz0gcmFuZG9tKCAtMC41LCAwLjUgKSAqIHRoaXMud2FuZGVyO1xuICAgIFx0XHR0aGlzLnZ4ICs9IHNpbiggdGhpcy50aGV0YSApICogMC4xO1xuICAgIFx0XHR0aGlzLnZ5ICs9IGNvcyggdGhpcy50aGV0YSApICogMC4xO1xuICAgIFxuICAgIFx0XHR0aGlzLnJhZGl1cyAqPSAwLjk2O1xuICAgIFx0XHR0aGlzLmFsaXZlID0gdGhpcy5yYWRpdXMgPiAwLjU7XG4gICAgXHR9LFxuICAgIFxuICAgIFx0ZHJhdzogZnVuY3Rpb24oIGN0eCApIHtcbiAgICBcbiAgICBcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuICAgIFx0XHRjdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIFRXT19QSSApO1xuICAgIFx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBcdFx0Y3R4LmZpbGwoKTtcbiAgICBcdH1cbiAgICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUGFydGljbGVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIHZhciBNQVhfUEFSVElDTEVTID0gMjgwO1xuICB2YXIgQ09MT1VSUyA9IFsgJyM2OUQyRTcnLCAnI0E3REJEOCcsICcjRTBFNENDJywgJyNGMzg2MzAnLCAnI0ZBNjkwMCcsICcjRkY0RTUwJywgJyNGOUQ0MjMnIF07XG4gIFxuICB2YXIgcGFydGljbGVzID0gW107XG4gIHZhciBwb29sID0gW107XG4gIFxuICB2YXIgU2tldGNoID0gcmVxdWlyZShcIi4uL3ZlbmRvci9za2V0Y2hcIik7XG4gIHZhciBjYW52YXNCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjYmctc2tldGNoJyApO1xuICBjYW52YXNCZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB2YXIgcHJpY2luZ1NrZXRjaCA9IFNrZXRjaC5jcmVhdGUoe1xuICBcdGNvbnRhaW5lcjogY2FudmFzQmdcbiAgfSk7XG4gIFxuICBwcmljaW5nU2tldGNoLnNldHVwID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdC8vIFNldCBvZmYgc29tZSBpbml0aWFsIHBhcnRpY2xlcy5cbiAgXHR2YXIgaSwgeCwgeTtcbiAgXG4gIFx0Zm9yICggaSA9IDA7IGkgPCAyMDsgaSsrICkge1xuICBcdFx0eCA9ICggcHJpY2luZ1NrZXRjaC53aWR0aCAqIDAuNSApICsgcmFuZG9tKCAtMTAwLCAxMDAgKTtcbiAgXHRcdHkgPSAoIHByaWNpbmdTa2V0Y2guaGVpZ2h0ICogMC41ICkgKyByYW5kb20oIC0xMDAsIDEwMCApO1xuICBcdFx0cHJpY2luZ1NrZXRjaC5zcGF3biggeCwgeSApO1xuICBcdH1cbiAgfTtcbiAgXG4gIHByaWNpbmdTa2V0Y2guc3Bhd24gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgXG4gIFx0aWYgKCBwYXJ0aWNsZXMubGVuZ3RoID49IE1BWF9QQVJUSUNMRVMgKVxuICBcdFx0cG9vbC5wdXNoKCBwYXJ0aWNsZXMuc2hpZnQoKSApO1xuICBcbiAgXHR2YXIgcGFydGljbGUgPSBwb29sLmxlbmd0aCA/IHBvb2wucG9wKCkgOiBuZXcgUGFydGljbGUoKTtcbiAgXHRwYXJ0aWNsZS5pbml0KCB4LCB5LCByYW5kb20oIDUsIDQwICkgKTtcbiAgXG4gIFx0cGFydGljbGUud2FuZGVyID0gcmFuZG9tKCAwLjUsIDIuMCApO1xuICBcdHBhcnRpY2xlLmNvbG9yID0gcmFuZG9tKCBDT0xPVVJTICk7XG4gIFx0cGFydGljbGUuZHJhZyA9IHJhbmRvbSggMC45LCAwLjk5ICk7XG4gIFxuICBcdHZhciB0aGV0YSA9IHJhbmRvbSggVFdPX1BJICk7XG4gIFx0dmFyIGZvcmNlID0gcmFuZG9tKCAyLCA4ICk7XG4gIFxuICBcdHBhcnRpY2xlLnZ4ID0gc2luKCB0aGV0YSApICogZm9yY2U7XG4gIFx0cGFydGljbGUudnkgPSBjb3MoIHRoZXRhICkgKiBmb3JjZTtcbiAgXG4gIFx0cGFydGljbGVzLnB1c2goIHBhcnRpY2xlICk7XG4gIH1cbiAgXG4gIHByaWNpbmdTa2V0Y2gudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdHZhciBpLCBwYXJ0aWNsZTtcbiAgXG4gIFx0Zm9yICggaSA9IHBhcnRpY2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcbiAgXG4gIFx0XHRwYXJ0aWNsZSA9IHBhcnRpY2xlc1tpXTtcbiAgXG4gIFx0XHRpZiAoIHBhcnRpY2xlLmFsaXZlICkgcGFydGljbGUubW92ZSgpO1xuICBcdFx0ZWxzZSBwb29sLnB1c2goIHBhcnRpY2xlcy5zcGxpY2UoIGksIDEgKVswXSApO1xuICBcdH1cbiAgfTtcbiAgXG4gIHByaWNpbmdTa2V0Y2guZHJhdyA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHRwcmljaW5nU2tldGNoLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiAgPSAnbGlnaHRlcic7XG4gIFx0XG4gIFx0Zm9yICggdmFyIGkgPSBwYXJ0aWNsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG4gIFx0XHRwYXJ0aWNsZXNbaV0uZHJhdyggcHJpY2luZ1NrZXRjaCApO1xuICBcdH1cbiAgfTtcbiAgXG4gIHByaWNpbmdTa2V0Y2gubW91c2Vtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdHZhciBwYXJ0aWNsZSwgdGhldGEsIGZvcmNlLCB0b3VjaCwgbWF4LCBpLCBqLCBuO1xuICBcbiAgXHRmb3IgKCBpID0gMCwgbiA9IHByaWNpbmdTa2V0Y2gudG91Y2hlcy5sZW5ndGg7IGkgPCBuOyBpKysgKSB7XG4gIFxuICBcdFx0dG91Y2ggPSBwcmljaW5nU2tldGNoLnRvdWNoZXNbaV0sIG1heCA9IHJhbmRvbSggMSwgNCApO1xuICBcdFx0Zm9yICggaiA9IDA7IGogPCBtYXg7IGorKyApIHByaWNpbmdTa2V0Y2guc3Bhd24oIHRvdWNoLngsIHRvdWNoLnkgKTtcbiAgXHR9XG4gIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvcHJpY2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogQ29weXJpZ2h0IChDKSAyMDEzIEp1c3RpbiBXaW5kbGUsIGh0dHA6Ly9zb3Vsd2lyZS5jby51ayAqL1xuXG4oZnVuY3Rpb24gKCByb290LCBmYWN0b3J5ICkge1xuXG4gIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuXG4gICAgLy8gQ29tbW9uSlMgbGlrZVxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290LCByb290LmRvY3VtZW50KTtcblxuICB9IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG5cbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFjdG9yeSggcm9vdCwgcm9vdC5kb2N1bWVudCApOyB9KTtcblxuICB9IGVsc2Uge1xuXG4gICAgLy8gQnJvd3NlciBnbG9iYWxcbiAgICByb290LlNrZXRjaCA9IGZhY3RvcnkoIHJvb3QsIHJvb3QuZG9jdW1lbnQgKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24gKCB3aW5kb3csIGRvY3VtZW50ICkge1xuXG5cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQ29uZmlnXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciBNQVRIX1BST1BTID0gJ0UgTE4xMCBMTjIgTE9HMkUgTE9HMTBFIFBJIFNRUlQxXzIgU1FSVDIgYWJzIGFjb3MgYXNpbiBhdGFuIGNlaWwgY29zIGV4cCBmbG9vciBsb2cgcm91bmQgc2luIHNxcnQgdGFuIGF0YW4yIHBvdyBtYXggbWluJy5zcGxpdCggJyAnICk7XG4gIHZhciBIQVNfU0tFVENIID0gJ19faGFzU2tldGNoJztcbiAgdmFyIE0gPSBNYXRoO1xuXG4gIHZhciBDQU5WQVMgPSAnY2FudmFzJztcbiAgdmFyIFdFQkdMID0gJ3dlYmdsJztcbiAgdmFyIERPTSA9ICdkb20nO1xuXG4gIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICB2YXIgaW5zdGFuY2VzID0gW107XG5cbiAgdmFyIGRlZmF1bHRzID0ge1xuXG4gICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICBhdXRvc3RhcnQ6IHRydWUsXG4gICAgYXV0b2NsZWFyOiB0cnVlLFxuICAgIGF1dG9wYXVzZTogdHJ1ZSxcbiAgICBjb250YWluZXI6IGRvYy5ib2R5LFxuICAgIGludGVydmFsOiAxLFxuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgcmV0aW5hOiBmYWxzZSxcbiAgICB0eXBlOiBDQU5WQVNcbiAgfTtcblxuICB2YXIga2V5TWFwID0ge1xuXG4gICAgIDg6ICdCQUNLU1BBQ0UnLFxuICAgICA5OiAnVEFCJyxcbiAgICAxMzogJ0VOVEVSJyxcbiAgICAxNjogJ1NISUZUJyxcbiAgICAyNzogJ0VTQ0FQRScsXG4gICAgMzI6ICdTUEFDRScsXG4gICAgMzc6ICdMRUZUJyxcbiAgICAzODogJ1VQJyxcbiAgICAzOTogJ1JJR0hUJyxcbiAgICA0MDogJ0RPV04nXG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgVXRpbGl0aWVzXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIGZ1bmN0aW9uIGlzQXJyYXkoIG9iamVjdCApIHtcblxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIG9iamVjdCApID09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOdW1iZXIoIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdudW1iZXInO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdHJpbmcoIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdzdHJpbmcnO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5TmFtZSggY29kZSApIHtcblxuICAgIHJldHVybiBrZXlNYXBbIGNvZGUgXSB8fCBTdHJpbmcuZnJvbUNoYXJDb2RlKCBjb2RlICk7XG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmQoIHRhcmdldCwgc291cmNlLCBvdmVyd3JpdGUgKSB7XG5cbiAgICBmb3IgKCB2YXIga2V5IGluIHNvdXJjZSApXG5cbiAgICAgIGlmICggb3ZlcndyaXRlIHx8ICEoIGtleSBpbiB0YXJnZXQgKSApXG5cbiAgICAgICAgdGFyZ2V0WyBrZXkgXSA9IHNvdXJjZVsga2V5IF07XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJveHkoIG1ldGhvZCwgY29udGV4dCApIHtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcblxuICAgICAgbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBhcmd1bWVudHMgKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmUoIHRhcmdldCApIHtcblxuICAgIHZhciBvYmplY3QgPSB7fTtcblxuICAgIGZvciAoIHZhciBrZXkgaW4gdGFyZ2V0ICkge1xuICAgICAgXG4gICAgICBpZiAoIGtleSA9PT0gJ3dlYmtpdE1vdmVtZW50WCcgfHwga2V5ID09PSAnd2Via2l0TW92ZW1lbnRZJyApXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoIGlzRnVuY3Rpb24oIHRhcmdldFsga2V5IF0gKSApXG5cbiAgICAgICAgb2JqZWN0WyBrZXkgXSA9IHByb3h5KCB0YXJnZXRbIGtleSBdLCB0YXJnZXQgKTtcblxuICAgICAgZWxzZVxuXG4gICAgICAgIG9iamVjdFsga2V5IF0gPSB0YXJnZXRbIGtleSBdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBDb25zdHJ1Y3RvclxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICBmdW5jdGlvbiBjb25zdHJ1Y3RvciggY29udGV4dCApIHtcblxuICAgIHZhciByZXF1ZXN0LCBoYW5kbGVyLCB0YXJnZXQsIHBhcmVudCwgYm91bmRzLCBpbmRleCwgc3VmZml4LCBjbG9jaywgbm9kZSwgY29weSwgdHlwZSwga2V5LCB2YWwsIG1pbiwgbWF4LCB3LCBoO1xuXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHZhciB0b3VjaGVzID0gW107XG4gICAgdmFyIHJlc2l6ZWQgPSBmYWxzZTtcbiAgICB2YXIgc2V0dXAgPSBmYWxzZTtcbiAgICB2YXIgcmF0aW8gPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIHZhciBpc0RpdiA9IGNvbnRleHQudHlwZSA9PSBET007XG4gICAgdmFyIGlzMkQgPSBjb250ZXh0LnR5cGUgPT0gQ0FOVkFTO1xuXG4gICAgdmFyIG1vdXNlID0ge1xuICAgICAgeDogIDAuMCwgeTogIDAuMCxcbiAgICAgIG94OiAwLjAsIG95OiAwLjAsXG4gICAgICBkeDogMC4wLCBkeTogMC4wXG4gICAgfTtcblxuICAgIHZhciBldmVudE1hcCA9IFtcblxuICAgICAgY29udGV4dC5ldmVudFRhcmdldCB8fCBjb250ZXh0LmVsZW1lbnQsXG5cbiAgICAgICAgcG9pbnRlciwgJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2V1cCcsICd0b3VjaGVuZCcsXG4gICAgICAgIHBvaW50ZXIsICdjbGljaycsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW91dCcsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW92ZXInLFxuXG4gICAgICBkb2MsXG5cbiAgICAgICAga2V5cHJlc3MsICdrZXlkb3duJywgJ2tleXVwJyxcblxuICAgICAgd2luLFxuXG4gICAgICAgIGFjdGl2ZSwgJ2ZvY3VzJywgJ2JsdXInLFxuICAgICAgICByZXNpemUsICdyZXNpemUnXG4gICAgXTtcblxuICAgIHZhciBrZXlzID0ge307IGZvciAoIGtleSBpbiBrZXlNYXAgKSBrZXlzWyBrZXlNYXBbIGtleSBdIF0gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIoIG1ldGhvZCApIHtcblxuICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBtZXRob2QgKSApXG5cbiAgICAgICAgbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXS5zcGxpY2UuY2FsbCggYXJndW1lbnRzLCAxICkgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kKCBvbiApIHtcblxuICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50TWFwLmxlbmd0aDsgaW5kZXgrKyApIHtcblxuICAgICAgICBub2RlID0gZXZlbnRNYXBbIGluZGV4IF07XG5cbiAgICAgICAgaWYgKCBpc1N0cmluZyggbm9kZSApIClcblxuICAgICAgICAgIHRhcmdldFsgKCBvbiA/ICdhZGQnIDogJ3JlbW92ZScgKSArICdFdmVudExpc3RlbmVyJyBdLmNhbGwoIHRhcmdldCwgbm9kZSwgaGFuZGxlciwgZmFsc2UgKTtcblxuICAgICAgICBlbHNlIGlmICggaXNGdW5jdGlvbiggbm9kZSApIClcblxuICAgICAgICAgIGhhbmRsZXIgPSBub2RlO1xuXG4gICAgICAgIGVsc2UgdGFyZ2V0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cbiAgICAgIGNBRiggcmVxdWVzdCApO1xuICAgICAgcmVxdWVzdCA9IHJBRiggdXBkYXRlICk7XG5cbiAgICAgIGlmICggIXNldHVwICkge1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQuc2V0dXAgKTtcbiAgICAgICAgc2V0dXAgPSBpc0Z1bmN0aW9uKCBjb250ZXh0LnNldHVwICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggIXJlc2l6ZWQgKSB7XG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQucmVzaXplICk7XG4gICAgICAgIHJlc2l6ZWQgPSBpc0Z1bmN0aW9uKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGNvbnRleHQucnVubmluZyAmJiAhY291bnRlciApIHtcblxuICAgICAgICBjb250ZXh0LmR0ID0gKCBjbG9jayA9ICtuZXcgRGF0ZSgpICkgLSBjb250ZXh0Lm5vdztcbiAgICAgICAgY29udGV4dC5taWxsaXMgKz0gY29udGV4dC5kdDtcbiAgICAgICAgY29udGV4dC5ub3cgPSBjbG9jaztcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnVwZGF0ZSApO1xuXG4gICAgICAgIC8vIFByZSBkcmF3XG5cbiAgICAgICAgaWYgKCBpczJEICkge1xuXG4gICAgICAgICAgaWYgKCBjb250ZXh0LnJldGluYSApIHtcblxuICAgICAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmF1dG9jbGVhcikge1xuICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKCByYXRpbywgcmF0aW8gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIGNvbnRleHQuYXV0b2NsZWFyIClcblxuICAgICAgICAgICAgY29udGV4dC5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhd1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQuZHJhdyApO1xuXG4gICAgICAgIC8vIFBvc3QgZHJhd1xuXG4gICAgICAgIGlmICggaXMyRCAmJiBjb250ZXh0LnJldGluYSApXG5cbiAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH1cblxuICAgICAgY291bnRlciA9ICsrY291bnRlciAlIGNvbnRleHQuaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuXG4gICAgICB0YXJnZXQgPSBpc0RpdiA/IGNvbnRleHQuc3R5bGUgOiBjb250ZXh0LmNhbnZhcztcbiAgICAgIHN1ZmZpeCA9IGlzRGl2ID8gJ3B4JyA6ICcnO1xuXG4gICAgICB3ID0gY29udGV4dC53aWR0aDtcbiAgICAgIGggPSBjb250ZXh0LmhlaWdodDtcblxuICAgICAgaWYgKCBjb250ZXh0LmZ1bGxzY3JlZW4gKSB7XG5cbiAgICAgICAgaCA9IGNvbnRleHQuaGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICAgICAgICB3ID0gY29udGV4dC53aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGNvbnRleHQucmV0aW5hICYmIGlzMkQgJiYgcmF0aW8gKSB7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcblxuICAgICAgICB3ICo9IHJhdGlvO1xuICAgICAgICBoICo9IHJhdGlvO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHRhcmdldC5oZWlnaHQgIT09IGggKVxuXG4gICAgICAgIHRhcmdldC5oZWlnaHQgPSBoICsgc3VmZml4O1xuXG4gICAgICBpZiAoIHRhcmdldC53aWR0aCAhPT0gdyApXG5cbiAgICAgICAgdGFyZ2V0LndpZHRoID0gdyArIHN1ZmZpeDtcblxuICAgICAgaWYgKCBpczJEICYmICFjb250ZXh0LmF1dG9jbGVhciAmJiBjb250ZXh0LnJldGluYSApXG5cbiAgICAgICAgY29udGV4dC5zY2FsZSggcmF0aW8sIHJhdGlvICk7XG5cbiAgICAgIGlmICggc2V0dXAgKSB0cmlnZ2VyKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsaWduKCB0b3VjaCwgdGFyZ2V0ICkge1xuXG4gICAgICBib3VuZHMgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHRvdWNoLnggPSB0b3VjaC5wYWdlWCAtIGJvdW5kcy5sZWZ0IC0gKHdpbi5zY3JvbGxYIHx8IHdpbi5wYWdlWE9mZnNldCk7XG4gICAgICB0b3VjaC55ID0gdG91Y2gucGFnZVkgLSBib3VuZHMudG9wIC0gKHdpbi5zY3JvbGxZIHx8IHdpbi5wYWdlWU9mZnNldCk7XG5cbiAgICAgIHJldHVybiB0b3VjaDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdWdtZW50KCB0b3VjaCwgdGFyZ2V0ICkge1xuXG4gICAgICBhbGlnbiggdG91Y2gsIGNvbnRleHQuZWxlbWVudCApO1xuXG4gICAgICB0YXJnZXQgPSB0YXJnZXQgfHwge307XG5cbiAgICAgIHRhcmdldC5veCA9IHRhcmdldC54IHx8IHRvdWNoLng7XG4gICAgICB0YXJnZXQub3kgPSB0YXJnZXQueSB8fCB0b3VjaC55O1xuXG4gICAgICB0YXJnZXQueCA9IHRvdWNoLng7XG4gICAgICB0YXJnZXQueSA9IHRvdWNoLnk7XG5cbiAgICAgIHRhcmdldC5keCA9IHRhcmdldC54IC0gdGFyZ2V0Lm94O1xuICAgICAgdGFyZ2V0LmR5ID0gdGFyZ2V0LnkgLSB0YXJnZXQub3k7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2VzcyggZXZlbnQgKSB7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvcHkgPSBjbG9uZSggZXZlbnQgKTtcbiAgICAgIGNvcHkub3JpZ2luYWxFdmVudCA9IGV2ZW50O1xuXG4gICAgICBpZiAoIGNvcHkudG91Y2hlcyApIHtcblxuICAgICAgICB0b3VjaGVzLmxlbmd0aCA9IGNvcHkudG91Y2hlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGNvcHkudG91Y2hlcy5sZW5ndGg7IGluZGV4KysgKVxuXG4gICAgICAgICAgdG91Y2hlc1sgaW5kZXggXSA9IGF1Z21lbnQoIGNvcHkudG91Y2hlc1sgaW5kZXggXSwgdG91Y2hlc1sgaW5kZXggXSApO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRvdWNoZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdG91Y2hlc1swXSA9IGF1Z21lbnQoIGNvcHksIG1vdXNlICk7XG4gICAgICB9XG5cbiAgICAgIGV4dGVuZCggbW91c2UsIHRvdWNoZXNbMF0sIHRydWUgKTtcblxuICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9pbnRlciggZXZlbnQgKSB7XG5cbiAgICAgIGV2ZW50ID0gcHJvY2VzcyggZXZlbnQgKTtcblxuICAgICAgbWluID0gKCBtYXggPSBldmVudE1hcC5pbmRleE9mKCB0eXBlID0gZXZlbnQudHlwZSApICkgLSAxO1xuXG4gICAgICBjb250ZXh0LmRyYWdnaW5nID1cblxuICAgICAgICAvZG93bnxzdGFydC8udGVzdCggdHlwZSApID8gdHJ1ZSA6XG5cbiAgICAgICAgL3VwfGVuZC8udGVzdCggdHlwZSApID8gZmFsc2UgOlxuXG4gICAgICAgIGNvbnRleHQuZHJhZ2dpbmc7XG5cbiAgICAgIHdoaWxlKCBtaW4gKVxuXG4gICAgICAgIGlzU3RyaW5nKCBldmVudE1hcFsgbWluIF0gKSA/XG5cbiAgICAgICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudE1hcFsgbWluLS0gXSBdLCBldmVudCApIDpcblxuICAgICAgICBpc1N0cmluZyggZXZlbnRNYXBbIG1heCBdICkgP1xuXG4gICAgICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnRNYXBbIG1heCsrIF0gXSwgZXZlbnQgKSA6XG5cbiAgICAgICAgbWluID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlwcmVzcyggZXZlbnQgKSB7XG5cbiAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICB2YWwgPSBldmVudC50eXBlID09ICdrZXl1cCc7XG4gICAgICBrZXlzWyBrZXkgXSA9IGtleXNbIGtleU5hbWUoIGtleSApIF0gPSAhdmFsO1xuXG4gICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudC50eXBlIF0sIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZlKCBldmVudCApIHtcblxuICAgICAgaWYgKCBjb250ZXh0LmF1dG9wYXVzZSApXG5cbiAgICAgICAgKCBldmVudC50eXBlID09ICdibHVyJyA/IHN0b3AgOiBzdGFydCApKCk7XG5cbiAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50LnR5cGUgXSwgZXZlbnQgKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgQVBJXG5cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgICAgY29udGV4dC5ub3cgPSArbmV3IERhdGUoKTtcbiAgICAgIGNvbnRleHQucnVubmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcblxuICAgICAgY29udGV4dC5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuXG4gICAgICAoIGNvbnRleHQucnVubmluZyA/IHN0b3AgOiBzdGFydCApKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG5cbiAgICAgIGlmICggaXMyRCApXG5cbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoIDAsIDAsIGNvbnRleHQud2lkdGggKiByYXRpbywgY29udGV4dC5oZWlnaHQgKiByYXRpbyApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cbiAgICAgIHBhcmVudCA9IGNvbnRleHQuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgaW5kZXggPSBpbnN0YW5jZXMuaW5kZXhPZiggY29udGV4dCApO1xuXG4gICAgICBpZiAoIHBhcmVudCApIHBhcmVudC5yZW1vdmVDaGlsZCggY29udGV4dC5lbGVtZW50ICk7XG4gICAgICBpZiAoIH5pbmRleCApIGluc3RhbmNlcy5zcGxpY2UoIGluZGV4LCAxICk7XG5cbiAgICAgIGJpbmQoIGZhbHNlICk7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuXG4gICAgZXh0ZW5kKCBjb250ZXh0LCB7XG5cbiAgICAgIHRvdWNoZXM6IHRvdWNoZXMsXG4gICAgICBtb3VzZTogbW91c2UsXG4gICAgICBrZXlzOiBrZXlzLFxuXG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgIG1pbGxpczogMCxcbiAgICAgIG5vdzogTmFOLFxuICAgICAgZHQ6IE5hTixcblxuICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgIHRvZ2dsZTogdG9nZ2xlLFxuICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgc3RvcDogc3RvcFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2VzLnB1c2goIGNvbnRleHQgKTtcblxuICAgIHJldHVybiAoIGNvbnRleHQuYXV0b3N0YXJ0ICYmIHN0YXJ0KCksIGJpbmQoIHRydWUgKSwgcmVzaXplKCksIHVwZGF0ZSgpLCBjb250ZXh0ICk7XG4gIH1cblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBHbG9iYWwgQVBJXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciBlbGVtZW50LCBjb250ZXh0LCBTa2V0Y2ggPSB7XG5cbiAgICBDQU5WQVM6IENBTlZBUyxcbiAgICBXRUJfR0w6IFdFQkdMLFxuICAgIFdFQkdMOiBXRUJHTCxcbiAgICBET006IERPTSxcblxuICAgIGluc3RhbmNlczogaW5zdGFuY2VzLFxuXG4gICAgaW5zdGFsbDogZnVuY3Rpb24oIGNvbnRleHQgKSB7XG5cbiAgICAgIGlmICggIWNvbnRleHRbIEhBU19TS0VUQ0ggXSApIHtcblxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBNQVRIX1BST1BTLmxlbmd0aDsgaSsrIClcblxuICAgICAgICAgIGNvbnRleHRbIE1BVEhfUFJPUFNbaV0gXSA9IE1bIE1BVEhfUFJPUFNbaV0gXTtcblxuICAgICAgICBleHRlbmQoIGNvbnRleHQsIHtcblxuICAgICAgICAgIFRXT19QSTogTS5QSSAqIDIsXG4gICAgICAgICAgSEFMRl9QSTogTS5QSSAvIDIsXG4gICAgICAgICAgUVVBUlRFUl9QSTogTS5QSSAvIDQsXG5cbiAgICAgICAgICByYW5kb206IGZ1bmN0aW9uKCBtaW4sIG1heCApIHtcblxuICAgICAgICAgICAgaWYgKCBpc0FycmF5KCBtaW4gKSApXG5cbiAgICAgICAgICAgICAgcmV0dXJuIG1pblsgfn4oIE0ucmFuZG9tKCkgKiBtaW4ubGVuZ3RoICkgXTtcblxuICAgICAgICAgICAgaWYgKCAhaXNOdW1iZXIoIG1heCApIClcblxuICAgICAgICAgICAgICBtYXggPSBtaW4gfHwgMSwgbWluID0gMDtcblxuICAgICAgICAgICAgcmV0dXJuIG1pbiArIE0ucmFuZG9tKCkgKiAoIG1heCAtIG1pbiApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBsZXJwOiBmdW5jdGlvbiggbWluLCBtYXgsIGFtb3VudCApIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1pbiArIGFtb3VudCAqICggbWF4IC0gbWluICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1hcDogZnVuY3Rpb24oIG51bSwgbWluQSwgbWF4QSwgbWluQiwgbWF4QiApIHtcblxuICAgICAgICAgICAgcmV0dXJuICggbnVtIC0gbWluQSApIC8gKCBtYXhBIC0gbWluQSApICogKCBtYXhCIC0gbWluQiApICsgbWluQjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRleHRbIEhBU19TS0VUQ0ggXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoIG9wdGlvbnMgfHwge30sIGRlZmF1bHRzICk7XG5cbiAgICAgIGlmICggb3B0aW9ucy5nbG9iYWxzICkgU2tldGNoLmluc3RhbGwoIHNlbGYgKTtcblxuICAgICAgZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCB8fCBkb2MuY3JlYXRlRWxlbWVudCggb3B0aW9ucy50eXBlID09PSBET00gPyAnZGl2JyA6ICdjYW52YXMnICk7XG5cbiAgICAgIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHN3aXRjaCggb3B0aW9ucy50eXBlICkge1xuXG4gICAgICAgICAgY2FzZSBDQU5WQVM6XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldENvbnRleHQoICcyZCcsIG9wdGlvbnMgKTtcblxuICAgICAgICAgIGNhc2UgV0VCR0w6XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldENvbnRleHQoICd3ZWJnbCcsIG9wdGlvbnMgKSB8fCBlbGVtZW50LmdldENvbnRleHQoICdleHBlcmltZW50YWwtd2ViZ2wnLCBvcHRpb25zICk7XG5cbiAgICAgICAgICBjYXNlIERPTTpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2FudmFzID0gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICB9KSgpO1xuXG4gICAgICAoIG9wdGlvbnMuY29udGFpbmVyIHx8IGRvYy5ib2R5ICkuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcblxuICAgICAgcmV0dXJuIFNrZXRjaC5hdWdtZW50KCBjb250ZXh0LCBvcHRpb25zICk7XG4gICAgfSxcblxuICAgIGF1Z21lbnQ6IGZ1bmN0aW9uKCBjb250ZXh0LCBvcHRpb25zICkge1xuXG4gICAgICBvcHRpb25zID0gZXh0ZW5kKCBvcHRpb25zIHx8IHt9LCBkZWZhdWx0cyApO1xuXG4gICAgICBvcHRpb25zLmVsZW1lbnQgPSBjb250ZXh0LmNhbnZhcyB8fCBjb250ZXh0O1xuICAgICAgb3B0aW9ucy5lbGVtZW50LmNsYXNzTmFtZSArPSAnIHNrZXRjaCc7XG5cbiAgICAgIGV4dGVuZCggY29udGV4dCwgb3B0aW9ucywgdHJ1ZSApO1xuXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IoIGNvbnRleHQgKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgU2hpbXNcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIHZlbmRvcnMgPSBbICdtcycsICdtb3onLCAnd2Via2l0JywgJ28nIF07XG4gIHZhciBzY29wZSA9IHNlbGY7XG4gIHZhciB0aGVuID0gMDtcblxuICB2YXIgYSA9ICdBbmltYXRpb25GcmFtZSc7XG4gIHZhciBiID0gJ3JlcXVlc3QnICsgYTtcbiAgdmFyIGMgPSAnY2FuY2VsJyArIGE7XG5cbiAgdmFyIHJBRiA9IHNjb3BlWyBiIF07XG4gIHZhciBjQUYgPSBzY29wZVsgYyBdO1xuXG4gIGZvciAoIHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICFyQUY7IGkrKyApIHtcblxuICAgIHJBRiA9IHNjb3BlWyB2ZW5kb3JzWyBpIF0gKyAnUmVxdWVzdCcgKyBhIF07XG4gICAgY0FGID0gc2NvcGVbIHZlbmRvcnNbIGkgXSArICdDYW5jZWwnICsgYSBdO1xuICB9XG5cbiAgc2NvcGVbIGIgXSA9IHJBRiA9IHJBRiB8fCBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cbiAgICB2YXIgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIGR0ID0gTS5tYXgoIDAsIDE2IC0gKCBub3cgLSB0aGVuICkgKTtcbiAgICB2YXIgaWQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIGNhbGxiYWNrKCBub3cgKyBkdCApO1xuICAgIH0sIGR0ICk7XG5cbiAgICB0aGVuID0gbm93ICsgZHQ7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIHNjb3BlWyBjIF0gPSBjQUYgPSBjQUYgfHwgZnVuY3Rpb24oIGlkICkge1xuICAgIGNsZWFyVGltZW91dCggaWQgKTtcbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBPdXRwdXRcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgcmV0dXJuIFNrZXRjaDtcblxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3ZlbmRvci9za2V0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9