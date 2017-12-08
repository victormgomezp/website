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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_sticky_toggle_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_smart_filters_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vendor_cakeCharts__ = __webpack_require__(133);
__webpack_require__(127);










console.log(WPAS_APP);
/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  __WEBPACK_IMPORTED_MODULE_7__vendor_cakeCharts__["a" /* PieChart */].createPie(".pieID.legend", ".pieID.pie");
  loadVideo('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  
}

/**
 * THE PROGRAM
**/

if(['page-the-program','single-full-stack','single-web-development'].indexOf(WPAS_APP.view.template)!=-1 || WPAS_APP.view.slug === 'venezuela'){
  
  var maxStickPosition = $('#pricing').offset().top - 20;
  __WEBPACK_IMPORTED_MODULE_5__common_sticky_toggle_js__["a" /* MakeSticky */].init('[data-toggle="sticky-onscroll"]', maxStickPosition);
  
  
  var TheProgram = __webpack_require__(134).default;
  TheProgram.init();
  
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
  
  __webpack_require__(135);

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


/**
 * CALENDAR
**/

if(WPAS_APP.view.slug === 'calendar' || WPAS_APP.view.slug === 'calendario'){
  
  console.log('Setting up the view');
  __WEBPACK_IMPORTED_MODULE_6__common_smart_filters_js__["a" /* SmartFilters */].init({
    loadingAnimation: '.courses .loading-animation',
    resultsContainer: '.courses .list-group',
    filterDropdown: '.dropdown-menu a',
    filters: [
      { button: '#locationSelector', urlKey: 'l', options: '.location-option' },
      { button: '#langSelector', urlKey: 'lang', options: '.lang-option'},
      { button: '#typeSelector', urlKey: 'type', options: '.type-option'}
    ]
  });
  
  __WEBPACK_IMPORTED_MODULE_5__common_sticky_toggle_js__["a" /* MakeSticky */].init('[data-toggle="sticky-onscroll"]', 4000);
    
}

/**
 * LOCATION
**/

if(['single-location'].indexOf(WPAS_APP.view.template) != -1){
  __webpack_require__(137);
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
         email: email,
         first_name: firstName,
         utm_url: WPAS_APP.url,
         utm_language: (WPAS_APP.lang || 'undefined'),
         utm_country: (WPAS_APP.country || 'undefined')
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
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeSticky; });
var MakeSticky = (function(){
    
    var plugin = {};
    //[data-toggle="sticky-onscroll"]
    plugin.init = function(selector, maxStickPosition)
    {
        // Find all data-toggle="sticky-onscroll" elements
        $(selector).each(function() {
          var sticky = $(this);
          var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
          sticky.before(stickyWrapper);
          sticky.addClass('sticky');
          
          // Scroll & resize events
          $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
            stickyToggle(sticky, stickyWrapper, $(this), maxStickPosition);
          });
          
          // On page load
          stickyToggle(sticky, stickyWrapper, $(window), maxStickPosition);
        });
        
    }
    
    function stickyToggle(sticky, stickyWrapper, scrollElement, maxStickPosition) {
          var stickyHeight = sticky.outerHeight();
          var stickyWidth = sticky.outerWidth();
          var offset = stickyWrapper.offset();
          var stickyTop = offset.top;
          var stickyLeft = offset.left;
    
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
    
    return plugin;
    
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 132:
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

/***/ 133:
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

/***/ 134:
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

/***/ 135:
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
  
  var Sketch = __webpack_require__(136);
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

/***/ 136:
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

/***/ 137:
/***/ (function(module, exports) {

var LocationView = (function(){
    var scope = {};
    
    
    return scope;
})();

LocationView.activate();

/***/ })

},[124]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL21hcmtldGluZy1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvdmVuZG9yL2Nha2VDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3ZlbmRvci9za2V0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQjtBQUNFO0FBQ0o7O0FBRWpC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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUVsQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQix5QkFBeUI7O0FBRS9DOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLDZCQUE2Qjs7QUFFckQ7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHVCQUF1Qjs7QUFFL0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEscUNBQXFDOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsNEJBQTRCOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUMsRzs7Ozs7OztBQ3RuQkQ7QUFDQTs7O0FBR0E7QUFDQSxDQUFDOztBQUVELHdCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vc3R5bGVzL2luZGV4LnNjc3MnKTtcblxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC91dGlsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJy4vcGFnZXMvYWxsLmpzJztcbmltcG9ydCAnLi9jb21tb24vbWFya2V0aW5nLWV2ZW50cy5qcyc7XG5pbXBvcnQge01ha2VTdGlja3l9IGZyb20gJy4vY29tbW9uL3N0aWNreS10b2dnbGUuanMnO1xuaW1wb3J0IHtTbWFydEZpbHRlcnN9IGZyb20gJy4vY29tbW9uL3NtYXJ0LWZpbHRlcnMuanMnO1xuaW1wb3J0IHtQaWVDaGFydH0gZnJvbSBcIi4vdmVuZG9yL2Nha2VDaGFydHNcIjtcblxuY29uc29sZS5sb2coV1BBU19BUFApO1xuLyoqXG4gKiBIT01FXG4qKi9cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2hvbWUnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2luaWNpbycpe1xuICBcbiAgUGllQ2hhcnQuY3JlYXRlUGllKFwiLnBpZUlELmxlZ2VuZFwiLCBcIi5waWVJRC5waWVcIik7XG4gIGxvYWRWaWRlbygnL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L2Fzc2V0cy92aWRlby9ob21lLWRhcmsubXA0Jyk7XG4gIFxufVxuXG4vKipcbiAqIFRIRSBQUk9HUkFNXG4qKi9cblxuaWYoWydwYWdlLXRoZS1wcm9ncmFtJywnc2luZ2xlLWZ1bGwtc3RhY2snLCdzaW5nbGUtd2ViLWRldmVsb3BtZW50J10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSE9LTEgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAndmVuZXp1ZWxhJyl7XG4gIFxuICB2YXIgbWF4U3RpY2tQb3NpdGlvbiA9ICQoJyNwcmljaW5nJykub2Zmc2V0KCkudG9wIC0gMjA7XG4gIE1ha2VTdGlja3kuaW5pdCgnW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdJywgbWF4U3RpY2tQb3NpdGlvbik7XG4gIFxuICBcbiAgdmFyIFRoZVByb2dyYW0gPSByZXF1aXJlKCcuL3BhZ2VzL3Byb2dyYW0uanMnKS5kZWZhdWx0O1xuICBUaGVQcm9ncmFtLmluaXQoKTtcbiAgXG59XG5cblxuXG5cbi8qKlxuICogUFJJQ0lOR1xuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByaWNpbmcnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByZWNpbycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL3ByaWNpbmcubXA0Jyk7XG4gIFxuICB2YXIgU2xpZGVyID0gcmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIik7XG4gIHZhciBteVNsaWRlciA9IG5ldyBTbGlkZXIoJyNwcmljaW5nLXNsaWRlcicpO1xuICAvL3ZhciBzbGlkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNpbmctc2xpZGVyJyk7XG4gIG15U2xpZGVyLm9uKCdzbGlkZVN0b3AnLCBmdW5jdGlvbihuZXdWYWx1ZSl7XG4gICAgXG4gICAgdmFyIG1lc3NhZ2UgPSAndWtub3duJztcbiAgICBzd2l0Y2gobmV3VmFsdWUpXG4gICAge1xuICAgICAgY2FzZSAwOiBtZXNzYWdlID0gJyQxMDAwIGRlcG9zaXQgKyAkODUzIC8gbW9udGgnOyBicmVhaztcbiAgICAgIGNhc2UgMTogbWVzc2FnZSA9ICckMTAwMCBkZXBvc2l0ICsgJDQ0NSAvIG1vbnRoJzsgYnJlYWs7XG4gICAgICBjYXNlIDM6IG1lc3NhZ2UgPSAnJDEwMDAgZGVwb3NpdCArICQyNDAgLyBtb250aCc7IGJyZWFrO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtbGFiZWwnKS5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRcdFxuXHRcdHZhciBwYXltZW50UGxhbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5bWVudC1wbGFuJyk7XG5cdFx0Ly9wYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXllbGxvd1wiKTtcblx0XHRwYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LmFkZChcImdsb3dcIik7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHQgIC8vcGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJiZy15ZWxsb3dcIik7XG5cdFx0XHRwYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImdsb3dcIik7XG5cdFx0fSwgMjAwKTtcbiAgICBcbiAgfSk7XG4gIFxuICByZXF1aXJlKCcuL3BhZ2VzL3ByaWNpbmcuanMnKTtcblxufVxuXG5mdW5jdGlvbiBsb2FkVmlkZW8odmlkZW9VUkwpe1xuICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICB2aWRlby5zcmMgPSB2aWRlb1VSTDtcbiAgdmlkZW8uYXV0b1BsYXkgPSB0cnVlO1xuICB2aWRlby5sb29wID0gdHJ1ZTtcbiAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICB2aWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby1iYWNrZ3JvdW5kJyk7XG4gIHZhciBzID0gZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHZpZGVvLCBzKTtcbiAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsZnVuY3Rpb24oKXtcbiAgICB2aWRlby5wbGF5KCk7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogQ0FMRU5EQVJcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdjYWxlbmRhcicgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAnY2FsZW5kYXJpbycpe1xuICBcbiAgY29uc29sZS5sb2coJ1NldHRpbmcgdXAgdGhlIHZpZXcnKTtcbiAgU21hcnRGaWx0ZXJzLmluaXQoe1xuICAgIGxvYWRpbmdBbmltYXRpb246ICcuY291cnNlcyAubG9hZGluZy1hbmltYXRpb24nLFxuICAgIHJlc3VsdHNDb250YWluZXI6ICcuY291cnNlcyAubGlzdC1ncm91cCcsXG4gICAgZmlsdGVyRHJvcGRvd246ICcuZHJvcGRvd24tbWVudSBhJyxcbiAgICBmaWx0ZXJzOiBbXG4gICAgICB7IGJ1dHRvbjogJyNsb2NhdGlvblNlbGVjdG9yJywgdXJsS2V5OiAnbCcsIG9wdGlvbnM6ICcubG9jYXRpb24tb3B0aW9uJyB9LFxuICAgICAgeyBidXR0b246ICcjbGFuZ1NlbGVjdG9yJywgdXJsS2V5OiAnbGFuZycsIG9wdGlvbnM6ICcubGFuZy1vcHRpb24nfSxcbiAgICAgIHsgYnV0dG9uOiAnI3R5cGVTZWxlY3RvcicsIHVybEtleTogJ3R5cGUnLCBvcHRpb25zOiAnLnR5cGUtb3B0aW9uJ31cbiAgICBdXG4gIH0pO1xuICBcbiAgTWFrZVN0aWNreS5pbml0KCdbZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl0nLCA0MDAwKTtcbiAgICBcbn1cblxuLyoqXG4gKiBMT0NBVElPTlxuKiovXG5cbmlmKFsnc2luZ2xlLWxvY2F0aW9uJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSAhPSAtMSl7XG4gIHJlcXVpcmUoJy4vcGFnZXMvbG9jYXRpb24uanMnKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvc3R5bGVzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL3ZhciBuZXdzbGV0dGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1uZXdzbGV0dGVyIGZvcm0nKTtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cbiAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgaWYoZnJvbVRvcD4xMDApICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIGVsc2UgJCgnLmZvb3Rlci1iYXInKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG59KTtcblxuXG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybU5ld3NsZXR0ZXIgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtTmV3c2xldHRlci5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIFxuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICduZXdzbGV0dGVyX3NpZ251cCcsXG4gICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybU5ld3NsZXR0ZXIuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBmb3JtTmV3c2xldHRlci5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KHAzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG59KTtcblxuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1TeWxsYWJ1cyA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGZpcnN0TmFtZUZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICB2YXIgZmlyc3ROYW1lID0gZmlyc3ROYW1lRmllbGQudmFsKCk7XG4gICBcbiAgIGlmKGVtYWlsID09ICcnIHx8IGZpcnN0TmFtZSA9PScnKVxuICAge1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCdXZSBuZWVkIHlvdXIgZW1haWwgYW5kIGZpcnN0IG5hbWUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgfVxuICAgZWxzZXtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICdkb3dubG9hZF9zeWxsYWJ1cycsXG4gICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgICB1dG1fdXJsOiBXUEFTX0FQUC51cmwsXG4gICAgICAgICB1dG1fbGFuZ3VhZ2U6IChXUEFTX0FQUC5sYW5nIHx8ICd1bmRlZmluZWQnKSxcbiAgICAgICAgIHV0bV9jb3VudHJ5OiAoV1BBU19BUFAuY291bnRyeSB8fCAndW5kZWZpbmVkJylcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybVN5bGxhYnVzLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICQoJyNzeWxsYWJ1c01vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQocDMpO1xuICAgICAgfVxuICAgfSk7XG4gICB9IFxuICAgXG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2dldF91cGNvbWluZ19ldmVudCdcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSkgcHJvbXB0VXBjb21pbmdFdmVudChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSB1cGNvbWluZyBldmVudDogXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG59KTtcblxuZnVuY3Rpb24gcHJvbXB0VXBjb21pbmdFdmVudChldmVudCl7XG4gICBcbiAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3BTdGF0ZScpICE9ICdzaG93bicpe1xuICAgICAgZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLmRlbGF5KDIwMDApLmZhZGVJbigpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BvcFN0YXRlJywnc2hvd24nKTtcbiAgICAgICQoJyN1cGNvbWluZ0V2ZW50JykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcHV0IHlvdXIgZGVmYXVsdCBldmVudCBoZXJlXG4gICAgICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgIH1cbn1cblxuZnVuY3Rpb24gZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI3VwY29taW5nRXZlbnQnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXknKS5odG1sKGV2ZW50LmRheSk7XG4gICBtb2RhbC5maW5kKCcubW9udGgnKS5odG1sKGV2ZW50Lm1vbnRoKTtcbiAgIG1vZGFsLmZpbmQoJy55ZWFyJykuaHRtbChldmVudC55ZWFyKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LXRpdGxlJykuaHRtbChldmVudC5wb3N0X3RpdGxlKTtcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXRhaWxzJykuaHRtbChldmVudC5ldmVudF9zdGFydF90aW1lICsgXCIgXCIgKyBldmVudC5ldmVudF9lbmRfdGltZSArICcgYXQgPHNwYW4gY2xhc3M9XCJpbW9vbiBpY29uLWxvY2F0aW9uXCI+PC9zcGFuPiAnICsgZXZlbnQuYWRkcmVzcyk7Ly8zOjMwcG0gLSBhdCBTdGFydGh1YiwgRG93bnRvd24gTWlhbWlcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXNjcmlwdGlvbicpLmh0bWwoZXZlbnQucG9zdF9jb250ZW50KTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC50aWNrZXRfdXJsKTtcbiAgIFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBUYWdtYW5nZXIgZXZlbnRzXG4gKiovXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgIGNvbnNvbGUubG9nKCdzeWxsYWJ1cyByZXF1ZXN0ZWQnKTtcbiAgICBkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogJ3N5bGxhYnVzX2Rvd25sb2FkJ30pO1xufSk7XG5cbiQoJy5uZXdzbGV0dGVyLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICAgZGF0YUxheWVyLnB1c2goeydldmVudCc6ICduZXdzbGV0dGVyX3NpZ251cCd9KTtcbiAgICBjb25zb2xlLmxvZygnbmV3bGV0dGVyIHJlcXVlc3RlZCcpO1xufSk7XG5cbiQoJy5hcHBseS1idG4nKS5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgZGF0YUxheWVyLnB1c2goeydldmVudCc6ICdhcHBsaWNhdGlvbl9yZW5kZXJlZCd9KTtcbiAgICBjb25zb2xlLmxvZygnYXBwbGljYXRpb25fcmVuZGVyZWQnKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBNYWtlU3RpY2t5ID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIC8vW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZWxlY3RvciwgbWF4U3RpY2tQb3NpdGlvbilcbiAgICB7XG4gICAgICAgIC8vIEZpbmQgYWxsIGRhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCIgZWxlbWVudHNcbiAgICAgICAgJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgc3RpY2t5ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgc3RpY2t5V3JhcHBlciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3N0aWNreS13cmFwcGVyJyk7IC8vIGluc2VydCBoaWRkZW4gZWxlbWVudCB0byBtYWludGFpbiBhY3R1YWwgdG9wIG9mZnNldCBvbiBwYWdlXG4gICAgICAgICAgc3RpY2t5LmJlZm9yZShzdGlja3lXcmFwcGVyKTtcbiAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNjcm9sbCAmIHJlc2l6ZSBldmVudHNcbiAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5zdGlja3ktb25zY3JvbGwgcmVzaXplLnN0aWNreS1vbnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh0aGlzKSwgbWF4U3RpY2tQb3NpdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gT24gcGFnZSBsb2FkXG4gICAgICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh3aW5kb3cpLCBtYXhTdGlja1Bvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCBzY3JvbGxFbGVtZW50LCBtYXhTdGlja1Bvc2l0aW9uKSB7XG4gICAgICAgICAgdmFyIHN0aWNreUhlaWdodCA9IHN0aWNreS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgIHZhciBzdGlja3lXaWR0aCA9IHN0aWNreS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IHN0aWNreVdyYXBwZXIub2Zmc2V0KCk7XG4gICAgICAgICAgdmFyIHN0aWNreVRvcCA9IG9mZnNldC50b3A7XG4gICAgICAgICAgdmFyIHN0aWNreUxlZnQgPSBvZmZzZXQubGVmdDtcbiAgICBcbiAgICAgICAgICB2YXIgd2luZG93U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpO1xuICAgICAgICAgIGlmICh3aW5kb3dTY3JvbGxQb3NpdGlvbiA+PSBzdGlja3lUb3Ape1xuICAgICAgICAgICAgaWYod2luZG93U2Nyb2xsUG9zaXRpb24gPCBtYXhTdGlja1Bvc2l0aW9uKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGlja3lXcmFwcGVyLmhlaWdodChzdGlja3lIZWlnaHQpO1xuICAgICAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnd2lkdGgnLHN0aWNreVdpZHRoKydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JyxzdGlja3lMZWZ0KydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLChtYXhTdGlja1Bvc2l0aW9uLTY2NSkrJ3B4Jyk7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLCcxNXB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gcGx1Z2luO1xuICAgIFxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc3RpY2t5LXRvZ2dsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgU21hcnRGaWx0ZXJzID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICBmaWx0ZXJEcm9wZG93bjogJycsXG4gICAgICAgIGxvYWRpbmdBbmltYXRpb246ICcnLFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyOiAnJyxcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZXR0aW5ncyl7XG4gICAgICAgICQuZXh0ZW5kKCBjb25maWcsIHNldHRpbmdzICk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIHRoZSBTbWFydEZpbHRlcnMnKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB1cmxWYXJzID0gZ2V0VXJsVmFycygpO1xuICAgICAgICBzZXRGaWx0ZXJzRGVmYXVsdFN0YXRlcyh1cmxWYXJzKTtcbiAgICAgICAgXG4gICAgICAgICQoY29uZmlnLmZpbHRlckRyb3Bkb3duKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7ICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoJCh0aGlzKS5odG1sKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICBpZih2YWx1ZSAhPSAnYWxsJykgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgLy9lbHNlIHVybFZhcnMgPSB1bnNldEFycmF5KHVybFZhcnMsYnV0dG9uLmRhdGEoJ2tleScpKTtcbiAgICAgICAgICAgIGVsc2UgZGVsZXRlIHVybFZhcnNbYnV0dG9uLmRhdGEoJ2tleScpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJChjb25maWcubG9hZGluZ0FuaW1hdGlvbikuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgICQoY29uZmlnLnJlc3VsdHNDb250YWluZXIpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKTsvL2hpZGUgdGhlIGRyb3Bkb3duIGFmdGVyIGNsaWNrZWRcbiAgICAgICAgICAgIC8vdmFyIHBhcmVudERyb3Bkb3duID0gYXV4LnBhcmVudCgpO1xuICAgICAgICAgICAgLy9wYXJlbnREcm9wZG93blswXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldEJhc2VVUkwoKSArICc/JyArIHNlcmlhbGl6ZSh1cmxWYXJzICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldEZpbHRlcnNEZWZhdWx0U3RhdGVzKHVybFZhcnMpe1xuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyBmaWx0ZXIgdmFsdWVzJywgdXJsVmFycyk7XG4gICAgICAgIFxuICAgICAgICBjb25maWcuZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXIudXJsS2V5KTtcbiAgICAgICAgICAgIGlmKGZpbHRlci51cmxLZXkgaW4gdXJsVmFycykgJChmaWx0ZXIuYnV0dG9uKS5odG1sKCQoZmlsdGVyLm9wdGlvbnMrJ1tkYXRhLXZhbHVlPVwiJyt1cmxWYXJzW2ZpbHRlci51cmxLZXldKydcIl0nKS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0QmFzZVVSTCgpe1xuICAgICAgICB2YXIgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcGllY2VzID0gYmFzZVVSTC5zcGxpdCgnPycpO1xuICAgICAgICBpZihwaWVjZXMubGVuZ3RoPjEpIGJhc2VVUkwgPSBwaWVjZXNbMF07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYmFzZVVSTDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VXJsVmFycygpe1xuICAgICAgXG4gICAgICAgIHZhciB2YXJzID0gW10sIGhhc2g7XG4gICAgICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICB2YXJzLnB1c2goaGFzaFswXSk7XG4gICAgICAgICAgICB2YXJzW2hhc2hbMF1dID0gaGFzaFsxXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHZhcnNbJzAnXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbZ2V0QmFzZVVSTCgpXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbJyddO1xuICBcbiAgICAgICAgcmV0dXJuIHZhcnM7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgICAgICAgdmFyIHN0ciA9IFtdO1xuICAgICAgICBmb3IodmFyIHAgaW4gb2JqKVxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgICBcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3NtYXJ0LWZpbHRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmV4cG9ydCB2YXIgUGllQ2hhcnQgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgdGhlcHVibGljID0ge307XG5cbiAgICB0aGVwdWJsaWMuY3JlYXRlUGllID0gZnVuY3Rpb24oZGF0YUVsZW1lbnQsIHBpZUVsZW1lbnQpIHtcbiAgICAgIHZhciBsaXN0RGF0YSA9IFtdO1xuICAgICAgJChkYXRhRWxlbWVudCtcIiBzcGFuXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpc3REYXRhLnB1c2goTnVtYmVyKCQodGhpcykuaHRtbCgpKSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBsaXN0VG90YWwgPSAwO1xuICAgICAgZm9yKHZhciBpPTA7IGk8bGlzdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdFRvdGFsICs9IGxpc3REYXRhW2ldO1xuICAgICAgfVxuICAgICAgdmFyIG9mZnNldCA9IDA7XG4gICAgICB2YXIgY29sb3IgPSBbXG4gICAgICAgIFwiY29ybmZsb3dlcmJsdWVcIiwgXG4gICAgICAgIFwib2xpdmVkcmFiXCIsIFxuICAgICAgICBcIm9yYW5nZVwiLCBcbiAgICAgICAgXCJ0b21hdG9cIiwgXG4gICAgICAgIFwiY3JpbXNvblwiLCBcbiAgICAgICAgXCJwdXJwbGVcIiwgXG4gICAgICAgIFwidHVycXVvaXNlXCIsIFxuICAgICAgICBcImZvcmVzdGdyZWVuXCIsIFxuICAgICAgICBcIm5hdnlcIiwgXG4gICAgICAgIFwiZ3JheVwiXG4gICAgICBdO1xuICAgICAgZm9yKHZhciBpPTA7IGk8bGlzdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNpemUgPSBzbGljZVNpemUobGlzdERhdGFbaV0sIGxpc3RUb3RhbCk7XG4gICAgICAgIGl0ZXJhdGVTbGljZXMoc2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBpLCAwLCBjb2xvcltpXSk7XG4gICAgICAgICQoZGF0YUVsZW1lbnQrXCIgbGk6bnRoLWNoaWxkKFwiKyhpKzEpK1wiKVwiKS5jc3MoXCJib3JkZXItY29sb3JcIiwgY29sb3JbaV0pO1xuICAgICAgICBvZmZzZXQgKz0gc2l6ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzbGljZVNpemUoZGF0YU51bSwgZGF0YVRvdGFsKSB7XG4gICAgICByZXR1cm4gKGRhdGFOdW0gLyBkYXRhVG90YWwpICogMzYwO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRTbGljZShzbGljZVNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgc2xpY2VJRCwgY29sb3IpIHtcbiAgICAgICQocGllRWxlbWVudCkuYXBwZW5kKFwiPGRpdiBjbGFzcz0nc2xpY2UgXCIrc2xpY2VJRCtcIic+PHNwYW4+PC9zcGFuPjwvZGl2PlwiKTtcbiAgICAgIHZhciBvZmZzZXQgPSBvZmZzZXQgLSAxO1xuICAgICAgdmFyIHNpemVSb3RhdGlvbiA9IC0xNzkgKyBzbGljZVNpemU7XG4gICAgICAkKFwiLlwiK3NsaWNlSUQpLmNzcyh7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwicm90YXRlKFwiK29mZnNldCtcImRlZykgdHJhbnNsYXRlM2QoMCwwLDApXCJcbiAgICAgIH0pO1xuICAgICAgJChcIi5cIitzbGljZUlEK1wiIHNwYW5cIikuY3NzKHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIiAgICAgICA6IFwicm90YXRlKFwiK3NpemVSb3RhdGlvbitcImRlZykgdHJhbnNsYXRlM2QoMCwwLDApXCIsXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBjb2xvclxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVTbGljZXMoc2xpY2VTaXplLCBwaWVFbGVtZW50LCBvZmZzZXQsIGRhdGFDb3VudCwgc2xpY2VDb3VudCwgY29sb3IpIHtcbiAgICAgIHZhciBzbGljZUlEID0gXCJzXCIrZGF0YUNvdW50K1wiLVwiK3NsaWNlQ291bnQ7XG4gICAgICB2YXIgbWF4U2l6ZSA9IDE3OTtcbiAgICAgIGlmKHNsaWNlU2l6ZTw9bWF4U2l6ZSkge1xuICAgICAgICBhZGRTbGljZShzbGljZVNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgc2xpY2VJRCwgY29sb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkU2xpY2UobWF4U2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBzbGljZUlELCBjb2xvcik7XG4gICAgICAgIGl0ZXJhdGVTbGljZXMoc2xpY2VTaXplLW1heFNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCttYXhTaXplLCBkYXRhQ291bnQsIHNsaWNlQ291bnQrMSwgY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhlcHVibGljO1xufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy92ZW5kb3IvY2FrZUNoYXJ0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBUaGVQcm9ncmFtID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHRoZXNjb3BlID0ge307XG4gICAgLy8gQ2FjaGUgc2VsZWN0b3JzXG4gICAgdmFyIHRvcE1lbnUgPSAkKFwiLnByb2dyYW0tbWVudVwiKSxcbiAgICAgICAgdG9wTWVudUhlaWdodCA9IHRvcE1lbnUub3V0ZXJIZWlnaHQoKSsxNSxcbiAgICAgICAgLy8gQWxsIGxpc3QgaXRlbXNcbiAgICAgICAgbWVudUl0ZW1zID0gdG9wTWVudS5maW5kKFwiYVtocmVmKj0nIyddXCIpLFxuICAgICAgICAvLyBBbmNob3JzIGNvcnJlc3BvbmRpbmcgdG8gbWVudSBpdGVtc1xuICAgICAgICBzY3JvbGxJdGVtcyA9IG1lbnVJdGVtcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgaXRlbSA9ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSk7XG4gICAgICAgICAgaWYgKGl0ZW0ubGVuZ3RoKSB7IHJldHVybiBpdGVtOyB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHRoZXNjb3BlLmluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgLy8gQmluZCB0byBzY3JvbGxcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgICAgICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICAgICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkrdG9wTWVudUhlaWdodDtcbiAgICAgICAgXG4gICAgICAgICAgIC8vIEdldCBpZCBvZiBjdXJyZW50IHNjcm9sbCBpdGVtXG4gICAgICAgICAgIHZhciBjdXIgPSBzY3JvbGxJdGVtcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBpZiAoJCh0aGlzKS5vZmZzZXQoKS50b3AgPCBmcm9tVG9wKVxuICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICAvLyBHZXQgdGhlIGlkIG9mIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgICAgICAgY3VyID0gY3VyW2N1ci5sZW5ndGgtMV07XG4gICAgICAgICAgIHZhciBpZCA9IGN1ciAmJiBjdXIubGVuZ3RoID8gY3VyWzBdLmlkIDogXCJcIjtcbiAgICAgICAgICAgLy8gU2V0L3JlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgbWVudUl0ZW1zXG4gICAgICAgICAgICAgLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgLmVuZCgpLmZpbHRlcihcIltocmVmPScjXCIraWQrXCInXVwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGVzY29wZTtcbiAgICBcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRoZVByb2dyYW07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvcHJvZ3JhbS5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiAgICBmdW5jdGlvbiBQYXJ0aWNsZSggeCwgeSwgcmFkaXVzICkge1xuICAgIFx0dGhpcy5pbml0KCB4LCB5LCByYWRpdXMgKTtcbiAgICB9XG4gICAgXG4gICAgUGFydGljbGUucHJvdG90eXBlID0ge1xuICAgIFxuICAgIFx0aW5pdDogZnVuY3Rpb24oIHgsIHksIHJhZGl1cyApIHtcbiAgICBcbiAgICBcdFx0dGhpcy5hbGl2ZSA9IHRydWU7XG4gICAgXG4gICAgXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwO1xuICAgIFx0XHR0aGlzLndhbmRlciA9IDAuMTU7XG4gICAgXHRcdHRoaXMudGhldGEgPSByYW5kb20oIFRXT19QSSApO1xuICAgIFx0XHR0aGlzLmRyYWcgPSAwLjkyO1xuICAgIFx0XHR0aGlzLmNvbG9yID0gJyNmZmYnO1xuICAgIFxuICAgIFx0XHR0aGlzLnggPSB4IHx8IDAuMDtcbiAgICBcdFx0dGhpcy55ID0geSB8fCAwLjA7XG4gICAgXG4gICAgXHRcdHRoaXMudnggPSAwLjA7XG4gICAgXHRcdHRoaXMudnkgPSAwLjA7XG4gICAgXHR9LFxuICAgIFxuICAgIFx0bW92ZTogZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgXHRcdHRoaXMueCArPSB0aGlzLnZ4O1xuICAgIFx0XHR0aGlzLnkgKz0gdGhpcy52eTtcbiAgICBcbiAgICBcdFx0dGhpcy52eCAqPSB0aGlzLmRyYWc7XG4gICAgXHRcdHRoaXMudnkgKj0gdGhpcy5kcmFnO1xuICAgIFxuICAgIFx0XHR0aGlzLnRoZXRhICs9IHJhbmRvbSggLTAuNSwgMC41ICkgKiB0aGlzLndhbmRlcjtcbiAgICBcdFx0dGhpcy52eCArPSBzaW4oIHRoaXMudGhldGEgKSAqIDAuMTtcbiAgICBcdFx0dGhpcy52eSArPSBjb3MoIHRoaXMudGhldGEgKSAqIDAuMTtcbiAgICBcbiAgICBcdFx0dGhpcy5yYWRpdXMgKj0gMC45NjtcbiAgICBcdFx0dGhpcy5hbGl2ZSA9IHRoaXMucmFkaXVzID4gMC41O1xuICAgIFx0fSxcbiAgICBcbiAgICBcdGRyYXc6IGZ1bmN0aW9uKCBjdHggKSB7XG4gICAgXG4gICAgXHRcdGN0eC5iZWdpblBhdGgoKTtcbiAgICBcdFx0Y3R4LmFyYyggdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBUV09fUEkgKTtcbiAgICBcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgXHRcdGN0eC5maWxsKCk7XG4gICAgXHR9XG4gICAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBhcnRpY2xlc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICB2YXIgTUFYX1BBUlRJQ0xFUyA9IDI4MDtcbiAgdmFyIENPTE9VUlMgPSBbICcjNjlEMkU3JywgJyNBN0RCRDgnLCAnI0UwRTRDQycsICcjRjM4NjMwJywgJyNGQTY5MDAnLCAnI0ZGNEU1MCcsICcjRjlENDIzJyBdO1xuICBcbiAgdmFyIHBhcnRpY2xlcyA9IFtdO1xuICB2YXIgcG9vbCA9IFtdO1xuICBcbiAgdmFyIFNrZXRjaCA9IHJlcXVpcmUoXCIuLi92ZW5kb3Ivc2tldGNoXCIpO1xuICB2YXIgY2FudmFzQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2JnLXNrZXRjaCcgKTtcbiAgY2FudmFzQmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgdmFyIHByaWNpbmdTa2V0Y2ggPSBTa2V0Y2guY3JlYXRlKHtcbiAgXHRjb250YWluZXI6IGNhbnZhc0JnXG4gIH0pO1xuICBcbiAgcHJpY2luZ1NrZXRjaC5zZXR1cCA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHQvLyBTZXQgb2ZmIHNvbWUgaW5pdGlhbCBwYXJ0aWNsZXMuXG4gIFx0dmFyIGksIHgsIHk7XG4gIFxuICBcdGZvciAoIGkgPSAwOyBpIDwgMjA7IGkrKyApIHtcbiAgXHRcdHggPSAoIHByaWNpbmdTa2V0Y2gud2lkdGggKiAwLjUgKSArIHJhbmRvbSggLTEwMCwgMTAwICk7XG4gIFx0XHR5ID0gKCBwcmljaW5nU2tldGNoLmhlaWdodCAqIDAuNSApICsgcmFuZG9tKCAtMTAwLCAxMDAgKTtcbiAgXHRcdHByaWNpbmdTa2V0Y2guc3Bhd24oIHgsIHkgKTtcbiAgXHR9XG4gIH07XG4gIFxuICBwcmljaW5nU2tldGNoLnNwYXduID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIFxuICBcdGlmICggcGFydGljbGVzLmxlbmd0aCA+PSBNQVhfUEFSVElDTEVTIClcbiAgXHRcdHBvb2wucHVzaCggcGFydGljbGVzLnNoaWZ0KCkgKTtcbiAgXG4gIFx0dmFyIHBhcnRpY2xlID0gcG9vbC5sZW5ndGggPyBwb29sLnBvcCgpIDogbmV3IFBhcnRpY2xlKCk7XG4gIFx0cGFydGljbGUuaW5pdCggeCwgeSwgcmFuZG9tKCA1LCA0MCApICk7XG4gIFxuICBcdHBhcnRpY2xlLndhbmRlciA9IHJhbmRvbSggMC41LCAyLjAgKTtcbiAgXHRwYXJ0aWNsZS5jb2xvciA9IHJhbmRvbSggQ09MT1VSUyApO1xuICBcdHBhcnRpY2xlLmRyYWcgPSByYW5kb20oIDAuOSwgMC45OSApO1xuICBcbiAgXHR2YXIgdGhldGEgPSByYW5kb20oIFRXT19QSSApO1xuICBcdHZhciBmb3JjZSA9IHJhbmRvbSggMiwgOCApO1xuICBcbiAgXHRwYXJ0aWNsZS52eCA9IHNpbiggdGhldGEgKSAqIGZvcmNlO1xuICBcdHBhcnRpY2xlLnZ5ID0gY29zKCB0aGV0YSApICogZm9yY2U7XG4gIFxuICBcdHBhcnRpY2xlcy5wdXNoKCBwYXJ0aWNsZSApO1xuICB9XG4gIFxuICBwcmljaW5nU2tldGNoLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHR2YXIgaSwgcGFydGljbGU7XG4gIFxuICBcdGZvciAoIGkgPSBwYXJ0aWNsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG4gIFxuICBcdFx0cGFydGljbGUgPSBwYXJ0aWNsZXNbaV07XG4gIFxuICBcdFx0aWYgKCBwYXJ0aWNsZS5hbGl2ZSApIHBhcnRpY2xlLm1vdmUoKTtcbiAgXHRcdGVsc2UgcG9vbC5wdXNoKCBwYXJ0aWNsZXMuc3BsaWNlKCBpLCAxIClbMF0gKTtcbiAgXHR9XG4gIH07XG4gIFxuICBwcmljaW5nU2tldGNoLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0cHJpY2luZ1NrZXRjaC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gID0gJ2xpZ2h0ZXInO1xuICBcdFxuICBcdGZvciAoIHZhciBpID0gcGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuICBcdFx0cGFydGljbGVzW2ldLmRyYXcoIHByaWNpbmdTa2V0Y2ggKTtcbiAgXHR9XG4gIH07XG4gIFxuICBwcmljaW5nU2tldGNoLm1vdXNlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHR2YXIgcGFydGljbGUsIHRoZXRhLCBmb3JjZSwgdG91Y2gsIG1heCwgaSwgaiwgbjtcbiAgXG4gIFx0Zm9yICggaSA9IDAsIG4gPSBwcmljaW5nU2tldGNoLnRvdWNoZXMubGVuZ3RoOyBpIDwgbjsgaSsrICkge1xuICBcbiAgXHRcdHRvdWNoID0gcHJpY2luZ1NrZXRjaC50b3VjaGVzW2ldLCBtYXggPSByYW5kb20oIDEsIDQgKTtcbiAgXHRcdGZvciAoIGogPSAwOyBqIDwgbWF4OyBqKysgKSBwcmljaW5nU2tldGNoLnNwYXduKCB0b3VjaC54LCB0b3VjaC55ICk7XG4gIFx0fVxuICB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3ByaWNpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIENvcHlyaWdodCAoQykgMjAxMyBKdXN0aW4gV2luZGxlLCBodHRwOi8vc291bHdpcmUuY28udWsgKi9cblxuKGZ1bmN0aW9uICggcm9vdCwgZmFjdG9yeSApIHtcblxuICBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcblxuICAgIC8vIENvbW1vbkpTIGxpa2VcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCwgcm9vdC5kb2N1bWVudCk7XG5cbiAgfSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuXG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhY3RvcnkoIHJvb3QsIHJvb3QuZG9jdW1lbnQgKTsgfSk7XG5cbiAgfSBlbHNlIHtcblxuICAgIC8vIEJyb3dzZXIgZ2xvYmFsXG4gICAgcm9vdC5Ta2V0Y2ggPSBmYWN0b3J5KCByb290LCByb290LmRvY3VtZW50ICk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uICggd2luZG93LCBkb2N1bWVudCApIHtcblxuXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIENvbmZpZ1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgTUFUSF9QUk9QUyA9ICdFIExOMTAgTE4yIExPRzJFIExPRzEwRSBQSSBTUVJUMV8yIFNRUlQyIGFicyBhY29zIGFzaW4gYXRhbiBjZWlsIGNvcyBleHAgZmxvb3IgbG9nIHJvdW5kIHNpbiBzcXJ0IHRhbiBhdGFuMiBwb3cgbWF4IG1pbicuc3BsaXQoICcgJyApO1xuICB2YXIgSEFTX1NLRVRDSCA9ICdfX2hhc1NrZXRjaCc7XG4gIHZhciBNID0gTWF0aDtcblxuICB2YXIgQ0FOVkFTID0gJ2NhbnZhcyc7XG4gIHZhciBXRUJHTCA9ICd3ZWJnbCc7XG4gIHZhciBET00gPSAnZG9tJztcblxuICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgdmFyIGluc3RhbmNlcyA9IFtdO1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcblxuICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgYXV0b3N0YXJ0OiB0cnVlLFxuICAgIGF1dG9jbGVhcjogdHJ1ZSxcbiAgICBhdXRvcGF1c2U6IHRydWUsXG4gICAgY29udGFpbmVyOiBkb2MuYm9keSxcbiAgICBpbnRlcnZhbDogMSxcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIHJldGluYTogZmFsc2UsXG4gICAgdHlwZTogQ0FOVkFTXG4gIH07XG5cbiAgdmFyIGtleU1hcCA9IHtcblxuICAgICA4OiAnQkFDS1NQQUNFJyxcbiAgICAgOTogJ1RBQicsXG4gICAgMTM6ICdFTlRFUicsXG4gICAgMTY6ICdTSElGVCcsXG4gICAgMjc6ICdFU0NBUEUnLFxuICAgIDMyOiAnU1BBQ0UnLFxuICAgIDM3OiAnTEVGVCcsXG4gICAgMzg6ICdVUCcsXG4gICAgMzk6ICdSSUdIVCcsXG4gICAgNDA6ICdET1dOJ1xuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFV0aWxpdGllc1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICBmdW5jdGlvbiBpc0FycmF5KCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBvYmplY3QgKSA9PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnbnVtYmVyJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3RyaW5nKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnc3RyaW5nJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleU5hbWUoIGNvZGUgKSB7XG5cbiAgICByZXR1cm4ga2V5TWFwWyBjb2RlIF0gfHwgU3RyaW5nLmZyb21DaGFyQ29kZSggY29kZSApO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKCB0YXJnZXQsIHNvdXJjZSwgb3ZlcndyaXRlICkge1xuXG4gICAgZm9yICggdmFyIGtleSBpbiBzb3VyY2UgKVxuXG4gICAgICBpZiAoIG92ZXJ3cml0ZSB8fCAhKCBrZXkgaW4gdGFyZ2V0ICkgKVxuXG4gICAgICAgIHRhcmdldFsga2V5IF0gPSBzb3VyY2VbIGtleSBdO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5KCBtZXRob2QsIGNvbnRleHQgKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG5cbiAgICAgIG1ldGhvZC5hcHBseSggY29udGV4dCwgYXJndW1lbnRzICk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lKCB0YXJnZXQgKSB7XG5cbiAgICB2YXIgb2JqZWN0ID0ge307XG5cbiAgICBmb3IgKCB2YXIga2V5IGluIHRhcmdldCApIHtcbiAgICAgIFxuICAgICAgaWYgKCBrZXkgPT09ICd3ZWJraXRNb3ZlbWVudFgnIHx8IGtleSA9PT0gJ3dlYmtpdE1vdmVtZW50WScgKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKCBpc0Z1bmN0aW9uKCB0YXJnZXRbIGtleSBdICkgKVxuXG4gICAgICAgIG9iamVjdFsga2V5IF0gPSBwcm94eSggdGFyZ2V0WyBrZXkgXSwgdGFyZ2V0ICk7XG5cbiAgICAgIGVsc2VcblxuICAgICAgICBvYmplY3RbIGtleSBdID0gdGFyZ2V0WyBrZXkgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQ29uc3RydWN0b3JcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgZnVuY3Rpb24gY29uc3RydWN0b3IoIGNvbnRleHQgKSB7XG5cbiAgICB2YXIgcmVxdWVzdCwgaGFuZGxlciwgdGFyZ2V0LCBwYXJlbnQsIGJvdW5kcywgaW5kZXgsIHN1ZmZpeCwgY2xvY2ssIG5vZGUsIGNvcHksIHR5cGUsIGtleSwgdmFsLCBtaW4sIG1heCwgdywgaDtcblxuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgdG91Y2hlcyA9IFtdO1xuICAgIHZhciByZXNpemVkID0gZmFsc2U7XG4gICAgdmFyIHNldHVwID0gZmFsc2U7XG4gICAgdmFyIHJhdGlvID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICB2YXIgaXNEaXYgPSBjb250ZXh0LnR5cGUgPT0gRE9NO1xuICAgIHZhciBpczJEID0gY29udGV4dC50eXBlID09IENBTlZBUztcblxuICAgIHZhciBtb3VzZSA9IHtcbiAgICAgIHg6ICAwLjAsIHk6ICAwLjAsXG4gICAgICBveDogMC4wLCBveTogMC4wLFxuICAgICAgZHg6IDAuMCwgZHk6IDAuMFxuICAgIH07XG5cbiAgICB2YXIgZXZlbnRNYXAgPSBbXG5cbiAgICAgIGNvbnRleHQuZXZlbnRUYXJnZXQgfHwgY29udGV4dC5lbGVtZW50LFxuXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZWRvd24nLCAndG91Y2hzdGFydCcsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW1vdmUnLCAndG91Y2htb3ZlJyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNldXAnLCAndG91Y2hlbmQnLFxuICAgICAgICBwb2ludGVyLCAnY2xpY2snLFxuICAgICAgICBwb2ludGVyLCAnbW91c2VvdXQnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2VvdmVyJyxcblxuICAgICAgZG9jLFxuXG4gICAgICAgIGtleXByZXNzLCAna2V5ZG93bicsICdrZXl1cCcsXG5cbiAgICAgIHdpbixcblxuICAgICAgICBhY3RpdmUsICdmb2N1cycsICdibHVyJyxcbiAgICAgICAgcmVzaXplLCAncmVzaXplJ1xuICAgIF07XG5cbiAgICB2YXIga2V5cyA9IHt9OyBmb3IgKCBrZXkgaW4ga2V5TWFwICkga2V5c1sga2V5TWFwWyBrZXkgXSBdID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyKCBtZXRob2QgKSB7XG5cbiAgICAgIGlmICggaXNGdW5jdGlvbiggbWV0aG9kICkgKVxuXG4gICAgICAgIG1ldGhvZC5hcHBseSggY29udGV4dCwgW10uc3BsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZCggb24gKSB7XG5cbiAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBldmVudE1hcC5sZW5ndGg7IGluZGV4KysgKSB7XG5cbiAgICAgICAgbm9kZSA9IGV2ZW50TWFwWyBpbmRleCBdO1xuXG4gICAgICAgIGlmICggaXNTdHJpbmcoIG5vZGUgKSApXG5cbiAgICAgICAgICB0YXJnZXRbICggb24gPyAnYWRkJyA6ICdyZW1vdmUnICkgKyAnRXZlbnRMaXN0ZW5lcicgXS5jYWxsKCB0YXJnZXQsIG5vZGUsIGhhbmRsZXIsIGZhbHNlICk7XG5cbiAgICAgICAgZWxzZSBpZiAoIGlzRnVuY3Rpb24oIG5vZGUgKSApXG5cbiAgICAgICAgICBoYW5kbGVyID0gbm9kZTtcblxuICAgICAgICBlbHNlIHRhcmdldCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgICBjQUYoIHJlcXVlc3QgKTtcbiAgICAgIHJlcXVlc3QgPSByQUYoIHVwZGF0ZSApO1xuXG4gICAgICBpZiAoICFzZXR1cCApIHtcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnNldHVwICk7XG4gICAgICAgIHNldHVwID0gaXNGdW5jdGlvbiggY29udGV4dC5zZXR1cCApO1xuICAgICAgfVxuXG4gICAgICBpZiAoICFyZXNpemVkICkge1xuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgICAgICByZXNpemVkID0gaXNGdW5jdGlvbiggY29udGV4dC5yZXNpemUgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBjb250ZXh0LnJ1bm5pbmcgJiYgIWNvdW50ZXIgKSB7XG5cbiAgICAgICAgY29udGV4dC5kdCA9ICggY2xvY2sgPSArbmV3IERhdGUoKSApIC0gY29udGV4dC5ub3c7XG4gICAgICAgIGNvbnRleHQubWlsbGlzICs9IGNvbnRleHQuZHQ7XG4gICAgICAgIGNvbnRleHQubm93ID0gY2xvY2s7XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC51cGRhdGUgKTtcblxuICAgICAgICAvLyBQcmUgZHJhd1xuXG4gICAgICAgIGlmICggaXMyRCApIHtcblxuICAgICAgICAgIGlmICggY29udGV4dC5yZXRpbmEgKSB7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY29udGV4dC5hdXRvY2xlYXIpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5zY2FsZSggcmF0aW8sIHJhdGlvICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCBjb250ZXh0LmF1dG9jbGVhciApXG5cbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXdcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LmRyYXcgKTtcblxuICAgICAgICAvLyBQb3N0IGRyYXdcblxuICAgICAgICBpZiAoIGlzMkQgJiYgY29udGV4dC5yZXRpbmEgKVxuXG4gICAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ZXIgPSArK2NvdW50ZXIgJSBjb250ZXh0LmludGVydmFsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcblxuICAgICAgdGFyZ2V0ID0gaXNEaXYgPyBjb250ZXh0LnN0eWxlIDogY29udGV4dC5jYW52YXM7XG4gICAgICBzdWZmaXggPSBpc0RpdiA/ICdweCcgOiAnJztcblxuICAgICAgdyA9IGNvbnRleHQud2lkdGg7XG4gICAgICBoID0gY29udGV4dC5oZWlnaHQ7XG5cbiAgICAgIGlmICggY29udGV4dC5mdWxsc2NyZWVuICkge1xuXG4gICAgICAgIGggPSBjb250ZXh0LmhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgICAgICAgdyA9IGNvbnRleHQud2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCBjb250ZXh0LnJldGluYSAmJiBpczJEICYmIHJhdGlvICkge1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gdyArICdweCc7XG5cbiAgICAgICAgdyAqPSByYXRpbztcbiAgICAgICAgaCAqPSByYXRpbztcbiAgICAgIH1cblxuICAgICAgaWYgKCB0YXJnZXQuaGVpZ2h0ICE9PSBoIClcblxuICAgICAgICB0YXJnZXQuaGVpZ2h0ID0gaCArIHN1ZmZpeDtcblxuICAgICAgaWYgKCB0YXJnZXQud2lkdGggIT09IHcgKVxuXG4gICAgICAgIHRhcmdldC53aWR0aCA9IHcgKyBzdWZmaXg7XG5cbiAgICAgIGlmICggaXMyRCAmJiAhY29udGV4dC5hdXRvY2xlYXIgJiYgY29udGV4dC5yZXRpbmEgKVxuXG4gICAgICAgIGNvbnRleHQuc2NhbGUoIHJhdGlvLCByYXRpbyApO1xuXG4gICAgICBpZiAoIHNldHVwICkgdHJpZ2dlciggY29udGV4dC5yZXNpemUgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGlnbiggdG91Y2gsIHRhcmdldCApIHtcblxuICAgICAgYm91bmRzID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB0b3VjaC54ID0gdG91Y2gucGFnZVggLSBib3VuZHMubGVmdCAtICh3aW4uc2Nyb2xsWCB8fCB3aW4ucGFnZVhPZmZzZXQpO1xuICAgICAgdG91Y2gueSA9IHRvdWNoLnBhZ2VZIC0gYm91bmRzLnRvcCAtICh3aW4uc2Nyb2xsWSB8fCB3aW4ucGFnZVlPZmZzZXQpO1xuXG4gICAgICByZXR1cm4gdG91Y2g7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXVnbWVudCggdG91Y2gsIHRhcmdldCApIHtcblxuICAgICAgYWxpZ24oIHRvdWNoLCBjb250ZXh0LmVsZW1lbnQgKTtcblxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9O1xuXG4gICAgICB0YXJnZXQub3ggPSB0YXJnZXQueCB8fCB0b3VjaC54O1xuICAgICAgdGFyZ2V0Lm95ID0gdGFyZ2V0LnkgfHwgdG91Y2gueTtcblxuICAgICAgdGFyZ2V0LnggPSB0b3VjaC54O1xuICAgICAgdGFyZ2V0LnkgPSB0b3VjaC55O1xuXG4gICAgICB0YXJnZXQuZHggPSB0YXJnZXQueCAtIHRhcmdldC5veDtcbiAgICAgIHRhcmdldC5keSA9IHRhcmdldC55IC0gdGFyZ2V0Lm95O1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3MoIGV2ZW50ICkge1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb3B5ID0gY2xvbmUoIGV2ZW50ICk7XG4gICAgICBjb3B5Lm9yaWdpbmFsRXZlbnQgPSBldmVudDtcblxuICAgICAgaWYgKCBjb3B5LnRvdWNoZXMgKSB7XG5cbiAgICAgICAgdG91Y2hlcy5sZW5ndGggPSBjb3B5LnRvdWNoZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBjb3B5LnRvdWNoZXMubGVuZ3RoOyBpbmRleCsrIClcblxuICAgICAgICAgIHRvdWNoZXNbIGluZGV4IF0gPSBhdWdtZW50KCBjb3B5LnRvdWNoZXNbIGluZGV4IF0sIHRvdWNoZXNbIGluZGV4IF0gKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0b3VjaGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRvdWNoZXNbMF0gPSBhdWdtZW50KCBjb3B5LCBtb3VzZSApO1xuICAgICAgfVxuXG4gICAgICBleHRlbmQoIG1vdXNlLCB0b3VjaGVzWzBdLCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvaW50ZXIoIGV2ZW50ICkge1xuXG4gICAgICBldmVudCA9IHByb2Nlc3MoIGV2ZW50ICk7XG5cbiAgICAgIG1pbiA9ICggbWF4ID0gZXZlbnRNYXAuaW5kZXhPZiggdHlwZSA9IGV2ZW50LnR5cGUgKSApIC0gMTtcblxuICAgICAgY29udGV4dC5kcmFnZ2luZyA9XG5cbiAgICAgICAgL2Rvd258c3RhcnQvLnRlc3QoIHR5cGUgKSA/IHRydWUgOlxuXG4gICAgICAgIC91cHxlbmQvLnRlc3QoIHR5cGUgKSA/IGZhbHNlIDpcblxuICAgICAgICBjb250ZXh0LmRyYWdnaW5nO1xuXG4gICAgICB3aGlsZSggbWluIClcblxuICAgICAgICBpc1N0cmluZyggZXZlbnRNYXBbIG1pbiBdICkgP1xuXG4gICAgICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnRNYXBbIG1pbi0tIF0gXSwgZXZlbnQgKSA6XG5cbiAgICAgICAgaXNTdHJpbmcoIGV2ZW50TWFwWyBtYXggXSApID9cblxuICAgICAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50TWFwWyBtYXgrKyBdIF0sIGV2ZW50ICkgOlxuXG4gICAgICAgIG1pbiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5cHJlc3MoIGV2ZW50ICkge1xuXG4gICAgICBrZXkgPSBldmVudC5rZXlDb2RlO1xuICAgICAgdmFsID0gZXZlbnQudHlwZSA9PSAna2V5dXAnO1xuICAgICAga2V5c1sga2V5IF0gPSBrZXlzWyBrZXlOYW1lKCBrZXkgKSBdID0gIXZhbDtcblxuICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnQudHlwZSBdLCBldmVudCApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2ZSggZXZlbnQgKSB7XG5cbiAgICAgIGlmICggY29udGV4dC5hdXRvcGF1c2UgKVxuXG4gICAgICAgICggZXZlbnQudHlwZSA9PSAnYmx1cicgPyBzdG9wIDogc3RhcnQgKSgpO1xuXG4gICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudC50eXBlIF0sIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIEFQSVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgICAgIGNvbnRleHQubm93ID0gK25ldyBEYXRlKCk7XG4gICAgICBjb250ZXh0LnJ1bm5pbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG5cbiAgICAgIGNvbnRleHQucnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblxuICAgICAgKCBjb250ZXh0LnJ1bm5pbmcgPyBzdG9wIDogc3RhcnQgKSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuXG4gICAgICBpZiAoIGlzMkQgKVxuXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjb250ZXh0LndpZHRoICogcmF0aW8sIGNvbnRleHQuaGVpZ2h0ICogcmF0aW8gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuXG4gICAgICBwYXJlbnQgPSBjb250ZXh0LmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGluZGV4ID0gaW5zdGFuY2VzLmluZGV4T2YoIGNvbnRleHQgKTtcblxuICAgICAgaWYgKCBwYXJlbnQgKSBwYXJlbnQucmVtb3ZlQ2hpbGQoIGNvbnRleHQuZWxlbWVudCApO1xuICAgICAgaWYgKCB+aW5kZXggKSBpbnN0YW5jZXMuc3BsaWNlKCBpbmRleCwgMSApO1xuXG4gICAgICBiaW5kKCBmYWxzZSApO1xuICAgICAgc3RvcCgpO1xuICAgIH1cblxuICAgIGV4dGVuZCggY29udGV4dCwge1xuXG4gICAgICB0b3VjaGVzOiB0b3VjaGVzLFxuICAgICAgbW91c2U6IG1vdXNlLFxuICAgICAga2V5czoga2V5cyxcblxuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICBtaWxsaXM6IDAsXG4gICAgICBub3c6IE5hTixcbiAgICAgIGR0OiBOYU4sXG5cbiAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICB0b2dnbGU6IHRvZ2dsZSxcbiAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIHN0b3A6IHN0b3BcbiAgICB9KTtcblxuICAgIGluc3RhbmNlcy5wdXNoKCBjb250ZXh0ICk7XG5cbiAgICByZXR1cm4gKCBjb250ZXh0LmF1dG9zdGFydCAmJiBzdGFydCgpLCBiaW5kKCB0cnVlICksIHJlc2l6ZSgpLCB1cGRhdGUoKSwgY29udGV4dCApO1xuICB9XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgR2xvYmFsIEFQSVxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgZWxlbWVudCwgY29udGV4dCwgU2tldGNoID0ge1xuXG4gICAgQ0FOVkFTOiBDQU5WQVMsXG4gICAgV0VCX0dMOiBXRUJHTCxcbiAgICBXRUJHTDogV0VCR0wsXG4gICAgRE9NOiBET00sXG5cbiAgICBpbnN0YW5jZXM6IGluc3RhbmNlcyxcblxuICAgIGluc3RhbGw6IGZ1bmN0aW9uKCBjb250ZXh0ICkge1xuXG4gICAgICBpZiAoICFjb250ZXh0WyBIQVNfU0tFVENIIF0gKSB7XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgTUFUSF9QUk9QUy5sZW5ndGg7IGkrKyApXG5cbiAgICAgICAgICBjb250ZXh0WyBNQVRIX1BST1BTW2ldIF0gPSBNWyBNQVRIX1BST1BTW2ldIF07XG5cbiAgICAgICAgZXh0ZW5kKCBjb250ZXh0LCB7XG5cbiAgICAgICAgICBUV09fUEk6IE0uUEkgKiAyLFxuICAgICAgICAgIEhBTEZfUEk6IE0uUEkgLyAyLFxuICAgICAgICAgIFFVQVJURVJfUEk6IE0uUEkgLyA0LFxuXG4gICAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiggbWluLCBtYXggKSB7XG5cbiAgICAgICAgICAgIGlmICggaXNBcnJheSggbWluICkgKVxuXG4gICAgICAgICAgICAgIHJldHVybiBtaW5bIH5+KCBNLnJhbmRvbSgpICogbWluLmxlbmd0aCApIF07XG5cbiAgICAgICAgICAgIGlmICggIWlzTnVtYmVyKCBtYXggKSApXG5cbiAgICAgICAgICAgICAgbWF4ID0gbWluIHx8IDEsIG1pbiA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBtaW4gKyBNLnJhbmRvbSgpICogKCBtYXggLSBtaW4gKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbGVycDogZnVuY3Rpb24oIG1pbiwgbWF4LCBhbW91bnQgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtaW4gKyBhbW91bnQgKiAoIG1heCAtIG1pbiApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtYXA6IGZ1bmN0aW9uKCBudW0sIG1pbkEsIG1heEEsIG1pbkIsIG1heEIgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoIG51bSAtIG1pbkEgKSAvICggbWF4QSAtIG1pbkEgKSAqICggbWF4QiAtIG1pbkIgKSArIG1pbkI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZXh0WyBIQVNfU0tFVENIIF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG4gICAgICBvcHRpb25zID0gZXh0ZW5kKCBvcHRpb25zIHx8IHt9LCBkZWZhdWx0cyApO1xuXG4gICAgICBpZiAoIG9wdGlvbnMuZ2xvYmFscyApIFNrZXRjaC5pbnN0YWxsKCBzZWxmICk7XG5cbiAgICAgIGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQgfHwgZG9jLmNyZWF0ZUVsZW1lbnQoIG9wdGlvbnMudHlwZSA9PT0gRE9NID8gJ2RpdicgOiAnY2FudmFzJyApO1xuXG4gICAgICBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IChmdW5jdGlvbigpIHtcblxuICAgICAgICBzd2l0Y2goIG9wdGlvbnMudHlwZSApIHtcblxuICAgICAgICAgIGNhc2UgQ0FOVkFTOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRDb250ZXh0KCAnMmQnLCBvcHRpb25zICk7XG5cbiAgICAgICAgICBjYXNlIFdFQkdMOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRDb250ZXh0KCAnd2ViZ2wnLCBvcHRpb25zICkgfHwgZWxlbWVudC5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJywgb3B0aW9ucyApO1xuXG4gICAgICAgICAgY2FzZSBET006XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNhbnZhcyA9IGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgfSkoKTtcblxuICAgICAgKCBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2MuYm9keSApLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XG5cbiAgICAgIHJldHVybiBTa2V0Y2guYXVnbWVudCggY29udGV4dCwgb3B0aW9ucyApO1xuICAgIH0sXG5cbiAgICBhdWdtZW50OiBmdW5jdGlvbiggY29udGV4dCwgb3B0aW9ucyApIHtcblxuICAgICAgb3B0aW9ucyA9IGV4dGVuZCggb3B0aW9ucyB8fCB7fSwgZGVmYXVsdHMgKTtcblxuICAgICAgb3B0aW9ucy5lbGVtZW50ID0gY29udGV4dC5jYW52YXMgfHwgY29udGV4dDtcbiAgICAgIG9wdGlvbnMuZWxlbWVudC5jbGFzc05hbWUgKz0gJyBza2V0Y2gnO1xuXG4gICAgICBleHRlbmQoIGNvbnRleHQsIG9wdGlvbnMsIHRydWUgKTtcblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yKCBjb250ZXh0ICk7XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFNoaW1zXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciB2ZW5kb3JzID0gWyAnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJyBdO1xuICB2YXIgc2NvcGUgPSBzZWxmO1xuICB2YXIgdGhlbiA9IDA7XG5cbiAgdmFyIGEgPSAnQW5pbWF0aW9uRnJhbWUnO1xuICB2YXIgYiA9ICdyZXF1ZXN0JyArIGE7XG4gIHZhciBjID0gJ2NhbmNlbCcgKyBhO1xuXG4gIHZhciByQUYgPSBzY29wZVsgYiBdO1xuICB2YXIgY0FGID0gc2NvcGVbIGMgXTtcblxuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhckFGOyBpKysgKSB7XG5cbiAgICByQUYgPSBzY29wZVsgdmVuZG9yc1sgaSBdICsgJ1JlcXVlc3QnICsgYSBdO1xuICAgIGNBRiA9IHNjb3BlWyB2ZW5kb3JzWyBpIF0gKyAnQ2FuY2VsJyArIGEgXTtcbiAgfVxuXG4gIHNjb3BlWyBiIF0gPSByQUYgPSByQUYgfHwgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXG4gICAgdmFyIG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBkdCA9IE0ubWF4KCAwLCAxNiAtICggbm93IC0gdGhlbiApICk7XG4gICAgdmFyIGlkID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBjYWxsYmFjayggbm93ICsgZHQgKTtcbiAgICB9LCBkdCApO1xuXG4gICAgdGhlbiA9IG5vdyArIGR0O1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBzY29wZVsgYyBdID0gY0FGID0gY0FGIHx8IGZ1bmN0aW9uKCBpZCApIHtcbiAgICBjbGVhclRpbWVvdXQoIGlkICk7XG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgT3V0cHV0XG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHJldHVybiBTa2V0Y2g7XG5cbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy92ZW5kb3Ivc2tldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExvY2F0aW9uVmlldyA9IChmdW5jdGlvbigpe1xuICAgIHZhciBzY29wZSA9IHt9O1xuICAgIFxuICAgIFxuICAgIHJldHVybiBzY29wZTtcbn0pKCk7XG5cbkxvY2F0aW9uVmlldy5hY3RpdmF0ZSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==