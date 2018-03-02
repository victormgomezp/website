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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_cakeCharts__ = __webpack_require__(133);
__webpack_require__(127);










console.log(WPAS_APP);
/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  __WEBPACK_IMPORTED_MODULE_7__lib_cakeCharts__["a" /* PieChart */].createPie(".pieID.legend", ".pieID.pie");
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

var loadVideo = function(videoURL){
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
WPAS_APP.loadVideo = loadVideo;


/**
 * CALENDAR
**/

if(WPAS_APP.view.slug === 'calendar' || WPAS_APP.view.slug === 'calendario'){
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL21hcmtldGluZy1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL2Nha2VDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9za2V0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQjtBQUNFO0FBQ0o7O0FBRWpCO0FBQ0E7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLDZCQUE2Qjs7QUFFckQ7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHVCQUF1Qjs7QUFFL0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEscUNBQXFDOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsNEJBQTRCOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUMsRzs7Ozs7OztBQ3RuQkQ7QUFDQTs7O0FBR0E7QUFDQSxDQUFDOztBQUVELHdCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vc3R5bGVzL2luZGV4LnNjc3MnKTtcblxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC91dGlsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJy4vcGFnZXMvYWxsLmpzJztcbmltcG9ydCAnLi9jb21tb24vbWFya2V0aW5nLWV2ZW50cy5qcyc7XG5pbXBvcnQge01ha2VTdGlja3l9IGZyb20gJy4vY29tbW9uL3N0aWNreS10b2dnbGUuanMnO1xuaW1wb3J0IHtTbWFydEZpbHRlcnN9IGZyb20gJy4vY29tbW9uL3NtYXJ0LWZpbHRlcnMuanMnO1xuaW1wb3J0IHtQaWVDaGFydH0gZnJvbSBcIi4vbGliL2Nha2VDaGFydHNcIjtcblxuY29uc29sZS5sb2coV1BBU19BUFApO1xuLyoqXG4gKiBIT01FXG4qKi9cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2hvbWUnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2luaWNpbycpe1xuICBcbiAgUGllQ2hhcnQuY3JlYXRlUGllKFwiLnBpZUlELmxlZ2VuZFwiLCBcIi5waWVJRC5waWVcIik7XG4gIGxvYWRWaWRlbygnL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L2Fzc2V0cy92aWRlby9ob21lLWRhcmsubXA0Jyk7XG4gIFxufVxuXG4vKipcbiAqIFRIRSBQUk9HUkFNXG4qKi9cblxuaWYoWydwYWdlLXRoZS1wcm9ncmFtJywnc2luZ2xlLWZ1bGwtc3RhY2snLCdzaW5nbGUtd2ViLWRldmVsb3BtZW50J10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSE9LTEgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAndmVuZXp1ZWxhJyl7XG4gIFxuICB2YXIgbWF4U3RpY2tQb3NpdGlvbiA9ICQoJyNwcmljaW5nJykub2Zmc2V0KCkudG9wIC0gMjA7XG4gIE1ha2VTdGlja3kuaW5pdCgnW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdJywgbWF4U3RpY2tQb3NpdGlvbik7XG4gIFxuICBcbiAgdmFyIFRoZVByb2dyYW0gPSByZXF1aXJlKCcuL3BhZ2VzL3Byb2dyYW0uanMnKS5kZWZhdWx0O1xuICBUaGVQcm9ncmFtLmluaXQoKTtcbiAgXG59XG5cblxuXG5cbi8qKlxuICogUFJJQ0lOR1xuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByaWNpbmcnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByZWNpbycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL3ByaWNpbmcubXA0Jyk7XG4gIFxuICB2YXIgU2xpZGVyID0gcmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIik7XG4gIHZhciBteVNsaWRlciA9IG5ldyBTbGlkZXIoJyNwcmljaW5nLXNsaWRlcicpO1xuICAvL3ZhciBzbGlkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNpbmctc2xpZGVyJyk7XG4gIG15U2xpZGVyLm9uKCdzbGlkZVN0b3AnLCBmdW5jdGlvbihuZXdWYWx1ZSl7XG4gICAgXG4gICAgdmFyIG1lc3NhZ2UgPSAndWtub3duJztcbiAgICBzd2l0Y2gobmV3VmFsdWUpXG4gICAge1xuICAgICAgY2FzZSAwOiBtZXNzYWdlID0gJyQxMDAwIGRlcG9zaXQgKyAkODUzIC8gbW9udGgnOyBicmVhaztcbiAgICAgIGNhc2UgMTogbWVzc2FnZSA9ICckMTAwMCBkZXBvc2l0ICsgJDQ0NSAvIG1vbnRoJzsgYnJlYWs7XG4gICAgICBjYXNlIDM6IG1lc3NhZ2UgPSAnJDEwMDAgZGVwb3NpdCArICQyNDAgLyBtb250aCc7IGJyZWFrO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtbGFiZWwnKS5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRcdFxuXHRcdHZhciBwYXltZW50UGxhbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5bWVudC1wbGFuJyk7XG5cdFx0Ly9wYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXllbGxvd1wiKTtcblx0XHRwYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LmFkZChcImdsb3dcIik7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHQgIC8vcGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJiZy15ZWxsb3dcIik7XG5cdFx0XHRwYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImdsb3dcIik7XG5cdFx0fSwgMjAwKTtcbiAgICBcbiAgfSk7XG4gIFxuICByZXF1aXJlKCcuL3BhZ2VzL3ByaWNpbmcuanMnKTtcblxufVxuXG52YXIgbG9hZFZpZGVvID0gZnVuY3Rpb24odmlkZW9VUkwpe1xuICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICB2aWRlby5zcmMgPSB2aWRlb1VSTDtcbiAgdmlkZW8uYXV0b1BsYXkgPSB0cnVlO1xuICB2aWRlby5sb29wID0gdHJ1ZTtcbiAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICB2aWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby1iYWNrZ3JvdW5kJyk7XG4gIHZhciBzID0gZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHZpZGVvLCBzKTtcbiAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsZnVuY3Rpb24oKXtcbiAgICB2aWRlby5wbGF5KCk7XG4gIH0pO1xufVxuV1BBU19BUFAubG9hZFZpZGVvID0gbG9hZFZpZGVvO1xuXG5cbi8qKlxuICogQ0FMRU5EQVJcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdjYWxlbmRhcicgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAnY2FsZW5kYXJpbycpe1xuICBcbiAgU21hcnRGaWx0ZXJzLmluaXQoe1xuICAgIGxvYWRpbmdBbmltYXRpb246ICcuY291cnNlcyAubG9hZGluZy1hbmltYXRpb24nLFxuICAgIHJlc3VsdHNDb250YWluZXI6ICcuY291cnNlcyAubGlzdC1ncm91cCcsXG4gICAgZmlsdGVyRHJvcGRvd246ICcuZHJvcGRvd24tbWVudSBhJyxcbiAgICBmaWx0ZXJzOiBbXG4gICAgICB7IGJ1dHRvbjogJyNsb2NhdGlvblNlbGVjdG9yJywgdXJsS2V5OiAnbCcsIG9wdGlvbnM6ICcubG9jYXRpb24tb3B0aW9uJyB9LFxuICAgICAgeyBidXR0b246ICcjbGFuZ1NlbGVjdG9yJywgdXJsS2V5OiAnbGFuZycsIG9wdGlvbnM6ICcubGFuZy1vcHRpb24nfSxcbiAgICAgIHsgYnV0dG9uOiAnI3R5cGVTZWxlY3RvcicsIHVybEtleTogJ3R5cGUnLCBvcHRpb25zOiAnLnR5cGUtb3B0aW9uJ31cbiAgICBdXG4gIH0pO1xuICBcbiAgTWFrZVN0aWNreS5pbml0KCdbZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl0nLCA0MDAwKTtcbiAgICBcbn1cblxuLyoqXG4gKiBMT0NBVElPTlxuKiovXG5cbmlmKFsnc2luZ2xlLWxvY2F0aW9uJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSAhPSAtMSl7XG4gIHJlcXVpcmUoJy4vcGFnZXMvbG9jYXRpb24uanMnKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvc3R5bGVzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL3ZhciBuZXdzbGV0dGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1uZXdzbGV0dGVyIGZvcm0nKTtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cbiAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgaWYoZnJvbVRvcD4xMDApICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIGVsc2UgJCgnLmZvb3Rlci1iYXInKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG59KTtcblxuXG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybU5ld3NsZXR0ZXIgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtTmV3c2xldHRlci5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIFxuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICduZXdzbGV0dGVyX3NpZ251cCcsXG4gICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybU5ld3NsZXR0ZXIuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBmb3JtTmV3c2xldHRlci5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KHAzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG59KTtcblxuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1TeWxsYWJ1cyA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGZpcnN0TmFtZUZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICB2YXIgZmlyc3ROYW1lID0gZmlyc3ROYW1lRmllbGQudmFsKCk7XG4gICBcbiAgIGlmKGVtYWlsID09ICcnIHx8IGZpcnN0TmFtZSA9PScnKVxuICAge1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCdXZSBuZWVkIHlvdXIgZW1haWwgYW5kIGZpcnN0IG5hbWUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgfVxuICAgZWxzZXtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICdkb3dubG9hZF9zeWxsYWJ1cycsXG4gICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybVN5bGxhYnVzLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICQoJyNzeWxsYWJ1c01vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQocDMpO1xuICAgICAgfVxuICAgfSk7XG4gICB9IFxuICAgXG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2dldF91cGNvbWluZ19ldmVudCdcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSkgcHJvbXB0VXBjb21pbmdFdmVudChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSB1cGNvbWluZyBldmVudDogXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG59KTtcblxuZnVuY3Rpb24gcHJvbXB0VXBjb21pbmdFdmVudChldmVudCl7XG4gICBcbiAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3BTdGF0ZScpICE9ICdzaG93bicpe1xuICAgICAgZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLmRlbGF5KDIwMDApLmZhZGVJbigpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BvcFN0YXRlJywnc2hvd24nKTtcbiAgICAgICQoJyN1cGNvbWluZ0V2ZW50JykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcHV0IHlvdXIgZGVmYXVsdCBldmVudCBoZXJlXG4gICAgICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgIH1cbn1cblxuZnVuY3Rpb24gZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI3VwY29taW5nRXZlbnQnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXknKS5odG1sKGV2ZW50LmRheSk7XG4gICBtb2RhbC5maW5kKCcubW9udGgnKS5odG1sKGV2ZW50Lm1vbnRoKTtcbiAgIG1vZGFsLmZpbmQoJy55ZWFyJykuaHRtbChldmVudC55ZWFyKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LXRpdGxlJykuaHRtbChldmVudC5wb3N0X3RpdGxlKTtcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXRhaWxzJykuaHRtbChldmVudC5ldmVudF9zdGFydF90aW1lICsgXCIgXCIgKyBldmVudC5ldmVudF9lbmRfdGltZSArICcgYXQgPHNwYW4gY2xhc3M9XCJpbW9vbiBpY29uLWxvY2F0aW9uXCI+PC9zcGFuPiAnICsgZXZlbnQuYWRkcmVzcyk7Ly8zOjMwcG0gLSBhdCBTdGFydGh1YiwgRG93bnRvd24gTWlhbWlcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXNjcmlwdGlvbicpLmh0bWwoZXZlbnQucG9zdF9jb250ZW50KTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC50aWNrZXRfdXJsKTtcbiAgIFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIG9uUGFnZVZpZXcodXJsQ29udGFpbnMsIGNhbGxiYWNrKXtcbiAgICAvL1BhZ2UgdmlldyA9IGFwcGx5LXRoYW5rLXlvdVxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKHVybENvbnRhaW5zKSA+IC0xKSB7XG4gICAgICAgIC8vQ29kZSBnb2VzIGhlcmVcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9ICBcbn1cbmZ1bmN0aW9uIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoZXZlbnROYW1lKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgZGF0YUxheWVyLnB1c2goeydldmVudCc6IGV2ZW50TmFtZX0pO1xuICAgICAgICBjb25zb2xlLmxvZygnRXZlbnQgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDogJytldmVudE5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGNvbnNvbGUubG9nKCdFdmVudCBub3QgYmVpbmcgc2VudCB0byBUYWdNYW5hZ2VyOiAnK2V2ZW50TmFtZSk7XG59XG5mdW5jdGlvbiBzYXZlRGF0YVZhcmlhYmxlKGluZGV4LCB2YWx1ZSl7XG4gICAgaWYodHlwZW9mIGRhdGFMYXllciAhPSAndW5kZWZpbmVkJykgZGF0YUxheWVyLnB1c2goe2luZGV4OiB2YWx1ZX0pO1xuICAgIGVsc2UgY29uc29sZS5sb2coJ0ltcG9zaWJsZSB0byB3cml0ZSAnK2luZGV4Kycgb24gZGF0YUxheWVyJyk7XG4gICAgXG4gICAgXG4gICAgaWYodHlwZW9mIFdQQVNfQVBQID09ICd1bmRlZmluZWQnKSBXUEFTX0FQUCA9IHt9O1xuICAgIGlmKHR5cGVvZiBXUEFTX0FQUC5kYXRhTGF5ZXIgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQLmRhdGFMYXllciA9IHt9O1xuICAgIFdQQVNfQVBQLmRhdGFMYXllcltpbmRleF0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGFjX2V2ZW50KGV2ZW50S2V5LCBldmVudE5hbWUsIHVzZXJFbWFpbCl7XG5cbiAgLy8gd2hhdCB3ZSBkbyBoZXJlLCBpcyBsb2cgYSBzdWNjZXNzZnVsIGV2ZW50IHRvIHRoZSBjb25zb2xlXG4gIC8vIG9yIGNhdGNoIGFueSBlcnJvcnMgd2UgaGF2ZVxuICB2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgIFxuICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGVkIGhhbGZ3YXkgc2Nyb2xsIGV2ZW50XCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHlvdXIgQWN0aXZlQ2FtcGFpZ24gaWQuIFlvdSBjYW4gZ2V0IHRoaXMgZnJvbSB5b3VyIEFDIHNldHRpbmdzIFxuICB2YXIgYWN0aWQgPSBcImRiMTVhMzI2NGZiMmFiZjE5OTk2ZmE0ODg3MzAzOTc1N2Q1MzQ1NDRcIjsgXG5cbiAgdmFyIHZpc2l0ID0ge1xuICAgIGVtYWlsOiB1c2VyRW1haWwgLy8gdGhlIHVzZXIncyBlbWFpbCBhZGRyZXNzXG4gIH07XG5cbiAgLy8gZ2V0IHRoZSB1cmwgb2YgdGhlIHBhZ2UgYW5kIHNlbmQgaXQgYXMgZXZlbnQgZGF0YVxuICB2YXIgZXZlbnREYXRhID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgLy8gYnVpbGQgdGhlIGV2ZW50U3RyaW5nIGJhc2VkIG9uIHRoZSB2YXJpYWJsZXMgeW91IGp1c3QgZWRpdGVkIGFib3ZlIOKYnVxuICB2YXIgZXZlbnRTdHJpbmcgPSBcImFjdGlkPVwiICsgYWN0aWQgXG4gICAgICAgICAgICAgICAgICAgICsgXCIma2V5PVwiICsgZXZlbnRLZXkgXG4gICAgICAgICAgICAgICAgICAgICsgXCImZXZlbnQ9XCIgKyBldmVudE5hbWUgXG4gICAgICAgICAgICAgICAgICAgICsgXCImdmlzaXQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmlzaXQpIFxuICAgICAgICAgICAgICAgICAgICArIFwiJmV2ZW50ZGF0YVwiICsgZXZlbnREYXRhO1xuXG4gIC8vIHNlbmQgdGhlIGV2ZW50IHRvIHRoZSBBY3RpdmVDYW1wYWlnbiBBUEkgd2l0aCBvdXIgZXZlbnQgdmFsdWVzXG4gIHhodHRwLm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly90cmFja2NtcC5uZXQvZXZlbnRcIiwgdHJ1ZSk7XG4gIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gIFxuICBpZihldmVudEtleSE9JycgJiYgZXZlbnROYW1lIT0nJyAmJiB1c2VyRW1haWwhPScnKSB4aHR0cC5zZW5kKGV2ZW50U3RyaW5nKTtcbiAgZWxzZXtcbiAgICAgIGlmKGV2ZW50S2V5PT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgZXZlbnRLZXknLGV2ZW50S2V5KTtcbiAgICAgIGlmKGV2ZW50TmFtZT09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIGV2ZW50TmFtZScsZXZlbnROYW1lKTtcbiAgICAgIGlmKHVzZXJFbWFpbD09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIHVzZXJFbWFpbCcsdXNlckVtYWlsKTtcbiAgfVxufVxuXG4vKipcbiAqIFRhZ21hbmdlciBldmVudHNcbiAqKi9cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7IFxuICAgIFxuICAgIHZhciBlbWFpbElucHV0ID0gJChldmVudC50YXJnZXQpLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICAgaWYoZW1haWxJbnB1dC5sZW5ndGg+MCkgc2F2ZURhdGFWYXJpYWJsZSgndXNlckVtYWlsJyxlbWFpbElucHV0WzBdLnZhbHVlKTtcbiAgICBcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzeWxsYWJ1c19kb3dubG9hZCcpOyBcbn0pO1xuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ25ld3NsZXR0ZXJfc2lnbnVwJyk7IFxufSk7XG4kKCcuYXBwbHktYnRuJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpeyB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdhcHBsaWNhdGlvbl9yZW5kZXJlZCcpOyB9KTtcbm9uUGFnZVZpZXcoXCIvYXBwbHktdGhhbmsteW91XCIsZnVuY3Rpb24oKXtcbiAgICAvL0NvZGUgZ29lcyBoZXJlXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnc3R1ZGVudF9hcHBsaWNhdGlvbicpOyBcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL21hcmtldGluZy1ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIE1ha2VTdGlja3kgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgcGx1Z2luID0ge307XG4gICAgLy9bZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl1cbiAgICBwbHVnaW4uaW5pdCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBtYXhTdGlja1Bvc2l0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gRmluZCBhbGwgZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIiBlbGVtZW50c1xuICAgICAgICAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzdGlja3kgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBzdGlja3lXcmFwcGVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnc3RpY2t5LXdyYXBwZXInKTsgLy8gaW5zZXJ0IGhpZGRlbiBlbGVtZW50IHRvIG1haW50YWluIGFjdHVhbCB0b3Agb2Zmc2V0IG9uIHBhZ2VcbiAgICAgICAgICBzdGlja3kuYmVmb3JlKHN0aWNreVdyYXBwZXIpO1xuICAgICAgICAgIHN0aWNreS5hZGRDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gU2Nyb2xsICYgcmVzaXplIGV2ZW50c1xuICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsLnN0aWNreS1vbnNjcm9sbCByZXNpemUuc3RpY2t5LW9uc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCAkKHRoaXMpLCBtYXhTdGlja1Bvc2l0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBPbiBwYWdlIGxvYWRcbiAgICAgICAgICBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCAkKHdpbmRvdyksIG1heFN0aWNrUG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHN0aWNreVRvZ2dsZShzdGlja3ksIHN0aWNreVdyYXBwZXIsIHNjcm9sbEVsZW1lbnQsIG1heFN0aWNrUG9zaXRpb24pIHtcbiAgICAgICAgICB2YXIgc3RpY2t5SGVpZ2h0ID0gc3RpY2t5Lm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgdmFyIHN0aWNreVdpZHRoID0gc3RpY2t5Lm91dGVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gc3RpY2t5V3JhcHBlci5vZmZzZXQoKTtcbiAgICAgICAgICB2YXIgc3RpY2t5VG9wID0gb2Zmc2V0LnRvcDtcbiAgICAgICAgICB2YXIgc3RpY2t5TGVmdCA9IG9mZnNldC5sZWZ0O1xuICAgIFxuICAgICAgICAgIHZhciB3aW5kb3dTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgaWYgKHdpbmRvd1Njcm9sbFBvc2l0aW9uID49IHN0aWNreVRvcCl7XG4gICAgICAgICAgICBpZih3aW5kb3dTY3JvbGxQb3NpdGlvbiA8IG1heFN0aWNrUG9zaXRpb24pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0aWNreVdyYXBwZXIuaGVpZ2h0KHN0aWNreUhlaWdodCk7XG4gICAgICAgICAgICAgIHN0aWNreS5hZGRDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5LnJlbW92ZUNsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd3aWR0aCcsc3RpY2t5V2lkdGgrJ3B4Jyk7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLHN0aWNreUxlZnQrJ3B4Jyk7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ3RvcCcsJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RpY2t5LnJlbW92ZUNsYXNzKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3lXcmFwcGVyLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ3RvcCcsKG1heFN0aWNrUG9zaXRpb24tNjY1KSsncHgnKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnbGVmdCcsJzE1cHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLCcwJyk7XG4gICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLCcwJyk7XG4gICAgICAgICAgICBzdGlja3lXcmFwcGVyLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBwbHVnaW47XG4gICAgXG59KSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBTbWFydEZpbHRlcnMgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgcGx1Z2luID0ge307XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgZmlsdGVyczogW10sXG4gICAgICAgIGZpbHRlckRyb3Bkb3duOiAnJyxcbiAgICAgICAgbG9hZGluZ0FuaW1hdGlvbjogJycsXG4gICAgICAgIHJlc3VsdHNDb250YWluZXI6ICcnLFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBwbHVnaW4uaW5pdCA9IGZ1bmN0aW9uKHNldHRpbmdzKXtcbiAgICAgICAgJC5leHRlbmQoIGNvbmZpZywgc2V0dGluZ3MgKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcgdGhlIFNtYXJ0RmlsdGVycycpO1xuICAgICAgICBcbiAgICAgICAgdmFyIHVybFZhcnMgPSBnZXRVcmxWYXJzKCk7XG4gICAgICAgIHNldEZpbHRlcnNEZWZhdWx0U3RhdGVzKHVybFZhcnMpO1xuICAgICAgICBcbiAgICAgICAgJChjb25maWcuZmlsdGVyRHJvcGRvd24pLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXsgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uaHRtbCgkKHRoaXMpLmh0bWwoKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICQodGhpcykuZGF0YSgndmFsdWUnKTtcbiAgICAgICAgICAgIGlmKHZhbHVlICE9ICdhbGwnKSB1cmxWYXJzW2J1dHRvbi5kYXRhKCdrZXknKV0gPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAvL2Vsc2UgdXJsVmFycyA9IHVuc2V0QXJyYXkodXJsVmFycyxidXR0b24uZGF0YSgna2V5JykpO1xuICAgICAgICAgICAgZWxzZSBkZWxldGUgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKGNvbmZpZy5sb2FkaW5nQW5pbWF0aW9uKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgICAgJChjb25maWcucmVzdWx0c0NvbnRhaW5lcikuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc2hvdycpOy8vaGlkZSB0aGUgZHJvcGRvd24gYWZ0ZXIgY2xpY2tlZFxuICAgICAgICAgICAgLy92YXIgcGFyZW50RHJvcGRvd24gPSBhdXgucGFyZW50KCk7XG4gICAgICAgICAgICAvL3BhcmVudERyb3Bkb3duWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZ2V0QmFzZVVSTCgpICsgJz8nICsgc2VyaWFsaXplKHVybFZhcnMgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyc0RlZmF1bHRTdGF0ZXModXJsVmFycyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIGZpbHRlciB2YWx1ZXMnLCB1cmxWYXJzKTtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZy5maWx0ZXJzLmZvckVhY2goZnVuY3Rpb24oZmlsdGVyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlci51cmxLZXkpO1xuICAgICAgICAgICAgaWYoZmlsdGVyLnVybEtleSBpbiB1cmxWYXJzKSAkKGZpbHRlci5idXR0b24pLmh0bWwoJChmaWx0ZXIub3B0aW9ucysnW2RhdGEtdmFsdWU9XCInK3VybFZhcnNbZmlsdGVyLnVybEtleV0rJ1wiXScpLmh0bWwoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRCYXNlVVJMKCl7XG4gICAgICAgIHZhciBiYXNlVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHZhciBwaWVjZXMgPSBiYXNlVVJMLnNwbGl0KCc/Jyk7XG4gICAgICAgIGlmKHBpZWNlcy5sZW5ndGg+MSkgYmFzZVVSTCA9IHBpZWNlc1swXTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBiYXNlVVJMO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRVcmxWYXJzKCl7XG4gICAgICBcbiAgICAgICAgdmFyIHZhcnMgPSBbXSwgaGFzaDtcbiAgICAgICAgdmFyIGhhc2hlcyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJz8nKSArIDEpLnNwbGl0KCcmJyk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhhc2ggPSBoYXNoZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIHZhcnMucHVzaChoYXNoWzBdKTtcbiAgICAgICAgICAgIHZhcnNbaGFzaFswXV0gPSBoYXNoWzFdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkZWxldGUgdmFyc1snMCddO1xuICAgICAgICBkZWxldGUgdmFyc1tnZXRCYXNlVVJMKCldO1xuICAgICAgICBkZWxldGUgdmFyc1snJ107XG4gIFxuICAgICAgICByZXR1cm4gdmFycztcbiAgICBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICAgICAgICB2YXIgc3RyID0gW107XG4gICAgICAgIGZvcih2YXIgcCBpbiBvYmopXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGx1Z2luO1xuICAgIFxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0IHZhciBQaWVDaGFydCA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgIHZhciB0aGVwdWJsaWMgPSB7fTtcblxuICAgIHRoZXB1YmxpYy5jcmVhdGVQaWUgPSBmdW5jdGlvbihkYXRhRWxlbWVudCwgcGllRWxlbWVudCkge1xuICAgICAgdmFyIGxpc3REYXRhID0gW107XG4gICAgICAkKGRhdGFFbGVtZW50K1wiIHNwYW5cIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGlzdERhdGEucHVzaChOdW1iZXIoJCh0aGlzKS5odG1sKCkpKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGxpc3RUb3RhbCA9IDA7XG4gICAgICBmb3IodmFyIGk9MDsgaTxsaXN0RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0VG90YWwgKz0gbGlzdERhdGFbaV07XG4gICAgICB9XG4gICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgIHZhciBjb2xvciA9IFtcbiAgICAgICAgXCJjb3JuZmxvd2VyYmx1ZVwiLCBcbiAgICAgICAgXCJvbGl2ZWRyYWJcIiwgXG4gICAgICAgIFwib3JhbmdlXCIsIFxuICAgICAgICBcInRvbWF0b1wiLCBcbiAgICAgICAgXCJjcmltc29uXCIsIFxuICAgICAgICBcInB1cnBsZVwiLCBcbiAgICAgICAgXCJ0dXJxdW9pc2VcIiwgXG4gICAgICAgIFwiZm9yZXN0Z3JlZW5cIiwgXG4gICAgICAgIFwibmF2eVwiLCBcbiAgICAgICAgXCJncmF5XCJcbiAgICAgIF07XG4gICAgICBmb3IodmFyIGk9MDsgaTxsaXN0RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc2l6ZSA9IHNsaWNlU2l6ZShsaXN0RGF0YVtpXSwgbGlzdFRvdGFsKTtcbiAgICAgICAgaXRlcmF0ZVNsaWNlcyhzaXplLCBwaWVFbGVtZW50LCBvZmZzZXQsIGksIDAsIGNvbG9yW2ldKTtcbiAgICAgICAgJChkYXRhRWxlbWVudCtcIiBsaTpudGgtY2hpbGQoXCIrKGkrMSkrXCIpXCIpLmNzcyhcImJvcmRlci1jb2xvclwiLCBjb2xvcltpXSk7XG4gICAgICAgIG9mZnNldCArPSBzaXplO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNsaWNlU2l6ZShkYXRhTnVtLCBkYXRhVG90YWwpIHtcbiAgICAgIHJldHVybiAoZGF0YU51bSAvIGRhdGFUb3RhbCkgKiAzNjA7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFNsaWNlKHNsaWNlU2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBzbGljZUlELCBjb2xvcikge1xuICAgICAgJChwaWVFbGVtZW50KS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSdzbGljZSBcIitzbGljZUlEK1wiJz48c3Bhbj48L3NwYW4+PC9kaXY+XCIpO1xuICAgICAgdmFyIG9mZnNldCA9IG9mZnNldCAtIDE7XG4gICAgICB2YXIgc2l6ZVJvdGF0aW9uID0gLTE3OSArIHNsaWNlU2l6ZTtcbiAgICAgICQoXCIuXCIrc2xpY2VJRCkuY3NzKHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJyb3RhdGUoXCIrb2Zmc2V0K1wiZGVnKSB0cmFuc2xhdGUzZCgwLDAsMClcIlxuICAgICAgfSk7XG4gICAgICAkKFwiLlwiK3NsaWNlSUQrXCIgc3BhblwiKS5jc3Moe1xuICAgICAgICBcInRyYW5zZm9ybVwiICAgICAgIDogXCJyb3RhdGUoXCIrc2l6ZVJvdGF0aW9uK1wiZGVnKSB0cmFuc2xhdGUzZCgwLDAsMClcIixcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IGNvbG9yXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXRlcmF0ZVNsaWNlcyhzbGljZVNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgZGF0YUNvdW50LCBzbGljZUNvdW50LCBjb2xvcikge1xuICAgICAgdmFyIHNsaWNlSUQgPSBcInNcIitkYXRhQ291bnQrXCItXCIrc2xpY2VDb3VudDtcbiAgICAgIHZhciBtYXhTaXplID0gMTc5O1xuICAgICAgaWYoc2xpY2VTaXplPD1tYXhTaXplKSB7XG4gICAgICAgIGFkZFNsaWNlKHNsaWNlU2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBzbGljZUlELCBjb2xvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRTbGljZShtYXhTaXplLCBwaWVFbGVtZW50LCBvZmZzZXQsIHNsaWNlSUQsIGNvbG9yKTtcbiAgICAgICAgaXRlcmF0ZVNsaWNlcyhzbGljZVNpemUtbWF4U2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0K21heFNpemUsIGRhdGFDb3VudCwgc2xpY2VDb3VudCsxLCBjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGVwdWJsaWM7XG59KSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9jYWtlQ2hhcnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFRoZVByb2dyYW0gPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgdGhlc2NvcGUgPSB7fTtcbiAgICAvLyBDYWNoZSBzZWxlY3RvcnNcbiAgICB2YXIgdG9wTWVudSA9ICQoXCIucHJvZ3JhbS1tZW51XCIpLFxuICAgICAgICB0b3BNZW51SGVpZ2h0ID0gdG9wTWVudS5vdXRlckhlaWdodCgpKzE1LFxuICAgICAgICAvLyBBbGwgbGlzdCBpdGVtc1xuICAgICAgICBtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCJhW2hyZWYqPScjJ11cIiksXG4gICAgICAgIC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXG4gICAgICAgIHNjcm9sbEl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgIHZhciBpdGVtID0gJCgkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgdGhlc2NvcGUuaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvLyBCaW5kIHRvIHNjcm9sbFxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKSt0b3BNZW51SGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cbiAgICAgICAgICAgdmFyIGN1ciA9IHNjcm9sbEl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgICAgIGlmICgkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3ApXG4gICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAgICAgICBjdXIgPSBjdXJbY3VyLmxlbmd0aC0xXTtcbiAgICAgICAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xuICAgICAgICAgICAvLyBTZXQvcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICBtZW51SXRlbXNcbiAgICAgICAgICAgICAucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAuZW5kKCkuZmlsdGVyKFwiW2hyZWY9JyNcIitpZCtcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoZXNjb3BlO1xuICAgIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlUHJvZ3JhbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcm9ncmFtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiICAgIGZ1bmN0aW9uIFBhcnRpY2xlKCB4LCB5LCByYWRpdXMgKSB7XG4gICAgXHR0aGlzLmluaXQoIHgsIHksIHJhZGl1cyApO1xuICAgIH1cbiAgICBcbiAgICBQYXJ0aWNsZS5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgXHRpbml0OiBmdW5jdGlvbiggeCwgeSwgcmFkaXVzICkge1xuICAgIFxuICAgIFx0XHR0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICBcbiAgICBcdFx0dGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTA7XG4gICAgXHRcdHRoaXMud2FuZGVyID0gMC4xNTtcbiAgICBcdFx0dGhpcy50aGV0YSA9IHJhbmRvbSggVFdPX1BJICk7XG4gICAgXHRcdHRoaXMuZHJhZyA9IDAuOTI7XG4gICAgXHRcdHRoaXMuY29sb3IgPSAnI2ZmZic7XG4gICAgXG4gICAgXHRcdHRoaXMueCA9IHggfHwgMC4wO1xuICAgIFx0XHR0aGlzLnkgPSB5IHx8IDAuMDtcbiAgICBcbiAgICBcdFx0dGhpcy52eCA9IDAuMDtcbiAgICBcdFx0dGhpcy52eSA9IDAuMDtcbiAgICBcdH0sXG4gICAgXG4gICAgXHRtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBcdFx0dGhpcy54ICs9IHRoaXMudng7XG4gICAgXHRcdHRoaXMueSArPSB0aGlzLnZ5O1xuICAgIFxuICAgIFx0XHR0aGlzLnZ4ICo9IHRoaXMuZHJhZztcbiAgICBcdFx0dGhpcy52eSAqPSB0aGlzLmRyYWc7XG4gICAgXG4gICAgXHRcdHRoaXMudGhldGEgKz0gcmFuZG9tKCAtMC41LCAwLjUgKSAqIHRoaXMud2FuZGVyO1xuICAgIFx0XHR0aGlzLnZ4ICs9IHNpbiggdGhpcy50aGV0YSApICogMC4xO1xuICAgIFx0XHR0aGlzLnZ5ICs9IGNvcyggdGhpcy50aGV0YSApICogMC4xO1xuICAgIFxuICAgIFx0XHR0aGlzLnJhZGl1cyAqPSAwLjk2O1xuICAgIFx0XHR0aGlzLmFsaXZlID0gdGhpcy5yYWRpdXMgPiAwLjU7XG4gICAgXHR9LFxuICAgIFxuICAgIFx0ZHJhdzogZnVuY3Rpb24oIGN0eCApIHtcbiAgICBcbiAgICBcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuICAgIFx0XHRjdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIFRXT19QSSApO1xuICAgIFx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBcdFx0Y3R4LmZpbGwoKTtcbiAgICBcdH1cbiAgICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUGFydGljbGVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIHZhciBNQVhfUEFSVElDTEVTID0gMjgwO1xuICB2YXIgQ09MT1VSUyA9IFsgJyM2OUQyRTcnLCAnI0E3REJEOCcsICcjRTBFNENDJywgJyNGMzg2MzAnLCAnI0ZBNjkwMCcsICcjRkY0RTUwJywgJyNGOUQ0MjMnIF07XG4gIFxuICB2YXIgcGFydGljbGVzID0gW107XG4gIHZhciBwb29sID0gW107XG4gIFxuICB2YXIgU2tldGNoID0gcmVxdWlyZShcIi4uL2xpYi9za2V0Y2hcIik7XG4gIHZhciBjYW52YXNCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjYmctc2tldGNoJyApO1xuICBjYW52YXNCZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB2YXIgcHJpY2luZ1NrZXRjaCA9IFNrZXRjaC5jcmVhdGUoe1xuICBcdGNvbnRhaW5lcjogY2FudmFzQmdcbiAgfSk7XG4gIFxuICBwcmljaW5nU2tldGNoLnNldHVwID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdC8vIFNldCBvZmYgc29tZSBpbml0aWFsIHBhcnRpY2xlcy5cbiAgXHR2YXIgaSwgeCwgeTtcbiAgXG4gIFx0Zm9yICggaSA9IDA7IGkgPCAyMDsgaSsrICkge1xuICBcdFx0eCA9ICggcHJpY2luZ1NrZXRjaC53aWR0aCAqIDAuNSApICsgcmFuZG9tKCAtMTAwLCAxMDAgKTtcbiAgXHRcdHkgPSAoIHByaWNpbmdTa2V0Y2guaGVpZ2h0ICogMC41ICkgKyByYW5kb20oIC0xMDAsIDEwMCApO1xuICBcdFx0cHJpY2luZ1NrZXRjaC5zcGF3biggeCwgeSApO1xuICBcdH1cbiAgfTtcbiAgXG4gIHByaWNpbmdTa2V0Y2guc3Bhd24gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgXG4gIFx0aWYgKCBwYXJ0aWNsZXMubGVuZ3RoID49IE1BWF9QQVJUSUNMRVMgKVxuICBcdFx0cG9vbC5wdXNoKCBwYXJ0aWNsZXMuc2hpZnQoKSApO1xuICBcbiAgXHR2YXIgcGFydGljbGUgPSBwb29sLmxlbmd0aCA/IHBvb2wucG9wKCkgOiBuZXcgUGFydGljbGUoKTtcbiAgXHRwYXJ0aWNsZS5pbml0KCB4LCB5LCByYW5kb20oIDUsIDQwICkgKTtcbiAgXG4gIFx0cGFydGljbGUud2FuZGVyID0gcmFuZG9tKCAwLjUsIDIuMCApO1xuICBcdHBhcnRpY2xlLmNvbG9yID0gcmFuZG9tKCBDT0xPVVJTICk7XG4gIFx0cGFydGljbGUuZHJhZyA9IHJhbmRvbSggMC45LCAwLjk5ICk7XG4gIFxuICBcdHZhciB0aGV0YSA9IHJhbmRvbSggVFdPX1BJICk7XG4gIFx0dmFyIGZvcmNlID0gcmFuZG9tKCAyLCA4ICk7XG4gIFxuICBcdHBhcnRpY2xlLnZ4ID0gc2luKCB0aGV0YSApICogZm9yY2U7XG4gIFx0cGFydGljbGUudnkgPSBjb3MoIHRoZXRhICkgKiBmb3JjZTtcbiAgXG4gIFx0cGFydGljbGVzLnB1c2goIHBhcnRpY2xlICk7XG4gIH1cbiAgXG4gIHByaWNpbmdTa2V0Y2gudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdHZhciBpLCBwYXJ0aWNsZTtcbiAgXG4gIFx0Zm9yICggaSA9IHBhcnRpY2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcbiAgXG4gIFx0XHRwYXJ0aWNsZSA9IHBhcnRpY2xlc1tpXTtcbiAgXG4gIFx0XHRpZiAoIHBhcnRpY2xlLmFsaXZlICkgcGFydGljbGUubW92ZSgpO1xuICBcdFx0ZWxzZSBwb29sLnB1c2goIHBhcnRpY2xlcy5zcGxpY2UoIGksIDEgKVswXSApO1xuICBcdH1cbiAgfTtcbiAgXG4gIHByaWNpbmdTa2V0Y2guZHJhdyA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHRwcmljaW5nU2tldGNoLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiAgPSAnbGlnaHRlcic7XG4gIFx0XG4gIFx0Zm9yICggdmFyIGkgPSBwYXJ0aWNsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG4gIFx0XHRwYXJ0aWNsZXNbaV0uZHJhdyggcHJpY2luZ1NrZXRjaCApO1xuICBcdH1cbiAgfTtcbiAgXG4gIHByaWNpbmdTa2V0Y2gubW91c2Vtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdHZhciBwYXJ0aWNsZSwgdGhldGEsIGZvcmNlLCB0b3VjaCwgbWF4LCBpLCBqLCBuO1xuICBcbiAgXHRmb3IgKCBpID0gMCwgbiA9IHByaWNpbmdTa2V0Y2gudG91Y2hlcy5sZW5ndGg7IGkgPCBuOyBpKysgKSB7XG4gIFxuICBcdFx0dG91Y2ggPSBwcmljaW5nU2tldGNoLnRvdWNoZXNbaV0sIG1heCA9IHJhbmRvbSggMSwgNCApO1xuICBcdFx0Zm9yICggaiA9IDA7IGogPCBtYXg7IGorKyApIHByaWNpbmdTa2V0Y2guc3Bhd24oIHRvdWNoLngsIHRvdWNoLnkgKTtcbiAgXHR9XG4gIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvcHJpY2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogQ29weXJpZ2h0IChDKSAyMDEzIEp1c3RpbiBXaW5kbGUsIGh0dHA6Ly9zb3Vsd2lyZS5jby51ayAqL1xuXG4oZnVuY3Rpb24gKCByb290LCBmYWN0b3J5ICkge1xuXG4gIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuXG4gICAgLy8gQ29tbW9uSlMgbGlrZVxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290LCByb290LmRvY3VtZW50KTtcblxuICB9IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG5cbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFjdG9yeSggcm9vdCwgcm9vdC5kb2N1bWVudCApOyB9KTtcblxuICB9IGVsc2Uge1xuXG4gICAgLy8gQnJvd3NlciBnbG9iYWxcbiAgICByb290LlNrZXRjaCA9IGZhY3RvcnkoIHJvb3QsIHJvb3QuZG9jdW1lbnQgKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24gKCB3aW5kb3csIGRvY3VtZW50ICkge1xuXG5cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQ29uZmlnXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciBNQVRIX1BST1BTID0gJ0UgTE4xMCBMTjIgTE9HMkUgTE9HMTBFIFBJIFNRUlQxXzIgU1FSVDIgYWJzIGFjb3MgYXNpbiBhdGFuIGNlaWwgY29zIGV4cCBmbG9vciBsb2cgcm91bmQgc2luIHNxcnQgdGFuIGF0YW4yIHBvdyBtYXggbWluJy5zcGxpdCggJyAnICk7XG4gIHZhciBIQVNfU0tFVENIID0gJ19faGFzU2tldGNoJztcbiAgdmFyIE0gPSBNYXRoO1xuXG4gIHZhciBDQU5WQVMgPSAnY2FudmFzJztcbiAgdmFyIFdFQkdMID0gJ3dlYmdsJztcbiAgdmFyIERPTSA9ICdkb20nO1xuXG4gIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICB2YXIgaW5zdGFuY2VzID0gW107XG5cbiAgdmFyIGRlZmF1bHRzID0ge1xuXG4gICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICBhdXRvc3RhcnQ6IHRydWUsXG4gICAgYXV0b2NsZWFyOiB0cnVlLFxuICAgIGF1dG9wYXVzZTogdHJ1ZSxcbiAgICBjb250YWluZXI6IGRvYy5ib2R5LFxuICAgIGludGVydmFsOiAxLFxuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgcmV0aW5hOiBmYWxzZSxcbiAgICB0eXBlOiBDQU5WQVNcbiAgfTtcblxuICB2YXIga2V5TWFwID0ge1xuXG4gICAgIDg6ICdCQUNLU1BBQ0UnLFxuICAgICA5OiAnVEFCJyxcbiAgICAxMzogJ0VOVEVSJyxcbiAgICAxNjogJ1NISUZUJyxcbiAgICAyNzogJ0VTQ0FQRScsXG4gICAgMzI6ICdTUEFDRScsXG4gICAgMzc6ICdMRUZUJyxcbiAgICAzODogJ1VQJyxcbiAgICAzOTogJ1JJR0hUJyxcbiAgICA0MDogJ0RPV04nXG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgVXRpbGl0aWVzXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIGZ1bmN0aW9uIGlzQXJyYXkoIG9iamVjdCApIHtcblxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIG9iamVjdCApID09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOdW1iZXIoIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdudW1iZXInO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdHJpbmcoIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdzdHJpbmcnO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5TmFtZSggY29kZSApIHtcblxuICAgIHJldHVybiBrZXlNYXBbIGNvZGUgXSB8fCBTdHJpbmcuZnJvbUNoYXJDb2RlKCBjb2RlICk7XG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmQoIHRhcmdldCwgc291cmNlLCBvdmVyd3JpdGUgKSB7XG5cbiAgICBmb3IgKCB2YXIga2V5IGluIHNvdXJjZSApXG5cbiAgICAgIGlmICggb3ZlcndyaXRlIHx8ICEoIGtleSBpbiB0YXJnZXQgKSApXG5cbiAgICAgICAgdGFyZ2V0WyBrZXkgXSA9IHNvdXJjZVsga2V5IF07XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJveHkoIG1ldGhvZCwgY29udGV4dCApIHtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcblxuICAgICAgbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBhcmd1bWVudHMgKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmUoIHRhcmdldCApIHtcblxuICAgIHZhciBvYmplY3QgPSB7fTtcblxuICAgIGZvciAoIHZhciBrZXkgaW4gdGFyZ2V0ICkge1xuICAgICAgXG4gICAgICBpZiAoIGtleSA9PT0gJ3dlYmtpdE1vdmVtZW50WCcgfHwga2V5ID09PSAnd2Via2l0TW92ZW1lbnRZJyApXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoIGlzRnVuY3Rpb24oIHRhcmdldFsga2V5IF0gKSApXG5cbiAgICAgICAgb2JqZWN0WyBrZXkgXSA9IHByb3h5KCB0YXJnZXRbIGtleSBdLCB0YXJnZXQgKTtcblxuICAgICAgZWxzZVxuXG4gICAgICAgIG9iamVjdFsga2V5IF0gPSB0YXJnZXRbIGtleSBdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBDb25zdHJ1Y3RvclxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICBmdW5jdGlvbiBjb25zdHJ1Y3RvciggY29udGV4dCApIHtcblxuICAgIHZhciByZXF1ZXN0LCBoYW5kbGVyLCB0YXJnZXQsIHBhcmVudCwgYm91bmRzLCBpbmRleCwgc3VmZml4LCBjbG9jaywgbm9kZSwgY29weSwgdHlwZSwga2V5LCB2YWwsIG1pbiwgbWF4LCB3LCBoO1xuXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHZhciB0b3VjaGVzID0gW107XG4gICAgdmFyIHJlc2l6ZWQgPSBmYWxzZTtcbiAgICB2YXIgc2V0dXAgPSBmYWxzZTtcbiAgICB2YXIgcmF0aW8gPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIHZhciBpc0RpdiA9IGNvbnRleHQudHlwZSA9PSBET007XG4gICAgdmFyIGlzMkQgPSBjb250ZXh0LnR5cGUgPT0gQ0FOVkFTO1xuXG4gICAgdmFyIG1vdXNlID0ge1xuICAgICAgeDogIDAuMCwgeTogIDAuMCxcbiAgICAgIG94OiAwLjAsIG95OiAwLjAsXG4gICAgICBkeDogMC4wLCBkeTogMC4wXG4gICAgfTtcblxuICAgIHZhciBldmVudE1hcCA9IFtcblxuICAgICAgY29udGV4dC5ldmVudFRhcmdldCB8fCBjb250ZXh0LmVsZW1lbnQsXG5cbiAgICAgICAgcG9pbnRlciwgJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2V1cCcsICd0b3VjaGVuZCcsXG4gICAgICAgIHBvaW50ZXIsICdjbGljaycsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW91dCcsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW92ZXInLFxuXG4gICAgICBkb2MsXG5cbiAgICAgICAga2V5cHJlc3MsICdrZXlkb3duJywgJ2tleXVwJyxcblxuICAgICAgd2luLFxuXG4gICAgICAgIGFjdGl2ZSwgJ2ZvY3VzJywgJ2JsdXInLFxuICAgICAgICByZXNpemUsICdyZXNpemUnXG4gICAgXTtcblxuICAgIHZhciBrZXlzID0ge307IGZvciAoIGtleSBpbiBrZXlNYXAgKSBrZXlzWyBrZXlNYXBbIGtleSBdIF0gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIoIG1ldGhvZCApIHtcblxuICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBtZXRob2QgKSApXG5cbiAgICAgICAgbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXS5zcGxpY2UuY2FsbCggYXJndW1lbnRzLCAxICkgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kKCBvbiApIHtcblxuICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50TWFwLmxlbmd0aDsgaW5kZXgrKyApIHtcblxuICAgICAgICBub2RlID0gZXZlbnRNYXBbIGluZGV4IF07XG5cbiAgICAgICAgaWYgKCBpc1N0cmluZyggbm9kZSApIClcblxuICAgICAgICAgIHRhcmdldFsgKCBvbiA/ICdhZGQnIDogJ3JlbW92ZScgKSArICdFdmVudExpc3RlbmVyJyBdLmNhbGwoIHRhcmdldCwgbm9kZSwgaGFuZGxlciwgZmFsc2UgKTtcblxuICAgICAgICBlbHNlIGlmICggaXNGdW5jdGlvbiggbm9kZSApIClcblxuICAgICAgICAgIGhhbmRsZXIgPSBub2RlO1xuXG4gICAgICAgIGVsc2UgdGFyZ2V0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cbiAgICAgIGNBRiggcmVxdWVzdCApO1xuICAgICAgcmVxdWVzdCA9IHJBRiggdXBkYXRlICk7XG5cbiAgICAgIGlmICggIXNldHVwICkge1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQuc2V0dXAgKTtcbiAgICAgICAgc2V0dXAgPSBpc0Z1bmN0aW9uKCBjb250ZXh0LnNldHVwICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggIXJlc2l6ZWQgKSB7XG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQucmVzaXplICk7XG4gICAgICAgIHJlc2l6ZWQgPSBpc0Z1bmN0aW9uKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGNvbnRleHQucnVubmluZyAmJiAhY291bnRlciApIHtcblxuICAgICAgICBjb250ZXh0LmR0ID0gKCBjbG9jayA9ICtuZXcgRGF0ZSgpICkgLSBjb250ZXh0Lm5vdztcbiAgICAgICAgY29udGV4dC5taWxsaXMgKz0gY29udGV4dC5kdDtcbiAgICAgICAgY29udGV4dC5ub3cgPSBjbG9jaztcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnVwZGF0ZSApO1xuXG4gICAgICAgIC8vIFByZSBkcmF3XG5cbiAgICAgICAgaWYgKCBpczJEICkge1xuXG4gICAgICAgICAgaWYgKCBjb250ZXh0LnJldGluYSApIHtcblxuICAgICAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmF1dG9jbGVhcikge1xuICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKCByYXRpbywgcmF0aW8gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIGNvbnRleHQuYXV0b2NsZWFyIClcblxuICAgICAgICAgICAgY29udGV4dC5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhd1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQuZHJhdyApO1xuXG4gICAgICAgIC8vIFBvc3QgZHJhd1xuXG4gICAgICAgIGlmICggaXMyRCAmJiBjb250ZXh0LnJldGluYSApXG5cbiAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH1cblxuICAgICAgY291bnRlciA9ICsrY291bnRlciAlIGNvbnRleHQuaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuXG4gICAgICB0YXJnZXQgPSBpc0RpdiA/IGNvbnRleHQuc3R5bGUgOiBjb250ZXh0LmNhbnZhcztcbiAgICAgIHN1ZmZpeCA9IGlzRGl2ID8gJ3B4JyA6ICcnO1xuXG4gICAgICB3ID0gY29udGV4dC53aWR0aDtcbiAgICAgIGggPSBjb250ZXh0LmhlaWdodDtcblxuICAgICAgaWYgKCBjb250ZXh0LmZ1bGxzY3JlZW4gKSB7XG5cbiAgICAgICAgaCA9IGNvbnRleHQuaGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICAgICAgICB3ID0gY29udGV4dC53aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGNvbnRleHQucmV0aW5hICYmIGlzMkQgJiYgcmF0aW8gKSB7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcblxuICAgICAgICB3ICo9IHJhdGlvO1xuICAgICAgICBoICo9IHJhdGlvO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHRhcmdldC5oZWlnaHQgIT09IGggKVxuXG4gICAgICAgIHRhcmdldC5oZWlnaHQgPSBoICsgc3VmZml4O1xuXG4gICAgICBpZiAoIHRhcmdldC53aWR0aCAhPT0gdyApXG5cbiAgICAgICAgdGFyZ2V0LndpZHRoID0gdyArIHN1ZmZpeDtcblxuICAgICAgaWYgKCBpczJEICYmICFjb250ZXh0LmF1dG9jbGVhciAmJiBjb250ZXh0LnJldGluYSApXG5cbiAgICAgICAgY29udGV4dC5zY2FsZSggcmF0aW8sIHJhdGlvICk7XG5cbiAgICAgIGlmICggc2V0dXAgKSB0cmlnZ2VyKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsaWduKCB0b3VjaCwgdGFyZ2V0ICkge1xuXG4gICAgICBib3VuZHMgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHRvdWNoLnggPSB0b3VjaC5wYWdlWCAtIGJvdW5kcy5sZWZ0IC0gKHdpbi5zY3JvbGxYIHx8IHdpbi5wYWdlWE9mZnNldCk7XG4gICAgICB0b3VjaC55ID0gdG91Y2gucGFnZVkgLSBib3VuZHMudG9wIC0gKHdpbi5zY3JvbGxZIHx8IHdpbi5wYWdlWU9mZnNldCk7XG5cbiAgICAgIHJldHVybiB0b3VjaDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdWdtZW50KCB0b3VjaCwgdGFyZ2V0ICkge1xuXG4gICAgICBhbGlnbiggdG91Y2gsIGNvbnRleHQuZWxlbWVudCApO1xuXG4gICAgICB0YXJnZXQgPSB0YXJnZXQgfHwge307XG5cbiAgICAgIHRhcmdldC5veCA9IHRhcmdldC54IHx8IHRvdWNoLng7XG4gICAgICB0YXJnZXQub3kgPSB0YXJnZXQueSB8fCB0b3VjaC55O1xuXG4gICAgICB0YXJnZXQueCA9IHRvdWNoLng7XG4gICAgICB0YXJnZXQueSA9IHRvdWNoLnk7XG5cbiAgICAgIHRhcmdldC5keCA9IHRhcmdldC54IC0gdGFyZ2V0Lm94O1xuICAgICAgdGFyZ2V0LmR5ID0gdGFyZ2V0LnkgLSB0YXJnZXQub3k7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2VzcyggZXZlbnQgKSB7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvcHkgPSBjbG9uZSggZXZlbnQgKTtcbiAgICAgIGNvcHkub3JpZ2luYWxFdmVudCA9IGV2ZW50O1xuXG4gICAgICBpZiAoIGNvcHkudG91Y2hlcyApIHtcblxuICAgICAgICB0b3VjaGVzLmxlbmd0aCA9IGNvcHkudG91Y2hlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGNvcHkudG91Y2hlcy5sZW5ndGg7IGluZGV4KysgKVxuXG4gICAgICAgICAgdG91Y2hlc1sgaW5kZXggXSA9IGF1Z21lbnQoIGNvcHkudG91Y2hlc1sgaW5kZXggXSwgdG91Y2hlc1sgaW5kZXggXSApO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRvdWNoZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdG91Y2hlc1swXSA9IGF1Z21lbnQoIGNvcHksIG1vdXNlICk7XG4gICAgICB9XG5cbiAgICAgIGV4dGVuZCggbW91c2UsIHRvdWNoZXNbMF0sIHRydWUgKTtcblxuICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9pbnRlciggZXZlbnQgKSB7XG5cbiAgICAgIGV2ZW50ID0gcHJvY2VzcyggZXZlbnQgKTtcblxuICAgICAgbWluID0gKCBtYXggPSBldmVudE1hcC5pbmRleE9mKCB0eXBlID0gZXZlbnQudHlwZSApICkgLSAxO1xuXG4gICAgICBjb250ZXh0LmRyYWdnaW5nID1cblxuICAgICAgICAvZG93bnxzdGFydC8udGVzdCggdHlwZSApID8gdHJ1ZSA6XG5cbiAgICAgICAgL3VwfGVuZC8udGVzdCggdHlwZSApID8gZmFsc2UgOlxuXG4gICAgICAgIGNvbnRleHQuZHJhZ2dpbmc7XG5cbiAgICAgIHdoaWxlKCBtaW4gKVxuXG4gICAgICAgIGlzU3RyaW5nKCBldmVudE1hcFsgbWluIF0gKSA/XG5cbiAgICAgICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudE1hcFsgbWluLS0gXSBdLCBldmVudCApIDpcblxuICAgICAgICBpc1N0cmluZyggZXZlbnRNYXBbIG1heCBdICkgP1xuXG4gICAgICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnRNYXBbIG1heCsrIF0gXSwgZXZlbnQgKSA6XG5cbiAgICAgICAgbWluID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlwcmVzcyggZXZlbnQgKSB7XG5cbiAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICB2YWwgPSBldmVudC50eXBlID09ICdrZXl1cCc7XG4gICAgICBrZXlzWyBrZXkgXSA9IGtleXNbIGtleU5hbWUoIGtleSApIF0gPSAhdmFsO1xuXG4gICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudC50eXBlIF0sIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZlKCBldmVudCApIHtcblxuICAgICAgaWYgKCBjb250ZXh0LmF1dG9wYXVzZSApXG5cbiAgICAgICAgKCBldmVudC50eXBlID09ICdibHVyJyA/IHN0b3AgOiBzdGFydCApKCk7XG5cbiAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50LnR5cGUgXSwgZXZlbnQgKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgQVBJXG5cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgICAgY29udGV4dC5ub3cgPSArbmV3IERhdGUoKTtcbiAgICAgIGNvbnRleHQucnVubmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcblxuICAgICAgY29udGV4dC5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuXG4gICAgICAoIGNvbnRleHQucnVubmluZyA/IHN0b3AgOiBzdGFydCApKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG5cbiAgICAgIGlmICggaXMyRCApXG5cbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoIDAsIDAsIGNvbnRleHQud2lkdGggKiByYXRpbywgY29udGV4dC5oZWlnaHQgKiByYXRpbyApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cbiAgICAgIHBhcmVudCA9IGNvbnRleHQuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgaW5kZXggPSBpbnN0YW5jZXMuaW5kZXhPZiggY29udGV4dCApO1xuXG4gICAgICBpZiAoIHBhcmVudCApIHBhcmVudC5yZW1vdmVDaGlsZCggY29udGV4dC5lbGVtZW50ICk7XG4gICAgICBpZiAoIH5pbmRleCApIGluc3RhbmNlcy5zcGxpY2UoIGluZGV4LCAxICk7XG5cbiAgICAgIGJpbmQoIGZhbHNlICk7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuXG4gICAgZXh0ZW5kKCBjb250ZXh0LCB7XG5cbiAgICAgIHRvdWNoZXM6IHRvdWNoZXMsXG4gICAgICBtb3VzZTogbW91c2UsXG4gICAgICBrZXlzOiBrZXlzLFxuXG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgIG1pbGxpczogMCxcbiAgICAgIG5vdzogTmFOLFxuICAgICAgZHQ6IE5hTixcblxuICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgIHRvZ2dsZTogdG9nZ2xlLFxuICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgc3RvcDogc3RvcFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2VzLnB1c2goIGNvbnRleHQgKTtcblxuICAgIHJldHVybiAoIGNvbnRleHQuYXV0b3N0YXJ0ICYmIHN0YXJ0KCksIGJpbmQoIHRydWUgKSwgcmVzaXplKCksIHVwZGF0ZSgpLCBjb250ZXh0ICk7XG4gIH1cblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBHbG9iYWwgQVBJXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciBlbGVtZW50LCBjb250ZXh0LCBTa2V0Y2ggPSB7XG5cbiAgICBDQU5WQVM6IENBTlZBUyxcbiAgICBXRUJfR0w6IFdFQkdMLFxuICAgIFdFQkdMOiBXRUJHTCxcbiAgICBET006IERPTSxcblxuICAgIGluc3RhbmNlczogaW5zdGFuY2VzLFxuXG4gICAgaW5zdGFsbDogZnVuY3Rpb24oIGNvbnRleHQgKSB7XG5cbiAgICAgIGlmICggIWNvbnRleHRbIEhBU19TS0VUQ0ggXSApIHtcblxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBNQVRIX1BST1BTLmxlbmd0aDsgaSsrIClcblxuICAgICAgICAgIGNvbnRleHRbIE1BVEhfUFJPUFNbaV0gXSA9IE1bIE1BVEhfUFJPUFNbaV0gXTtcblxuICAgICAgICBleHRlbmQoIGNvbnRleHQsIHtcblxuICAgICAgICAgIFRXT19QSTogTS5QSSAqIDIsXG4gICAgICAgICAgSEFMRl9QSTogTS5QSSAvIDIsXG4gICAgICAgICAgUVVBUlRFUl9QSTogTS5QSSAvIDQsXG5cbiAgICAgICAgICByYW5kb206IGZ1bmN0aW9uKCBtaW4sIG1heCApIHtcblxuICAgICAgICAgICAgaWYgKCBpc0FycmF5KCBtaW4gKSApXG5cbiAgICAgICAgICAgICAgcmV0dXJuIG1pblsgfn4oIE0ucmFuZG9tKCkgKiBtaW4ubGVuZ3RoICkgXTtcblxuICAgICAgICAgICAgaWYgKCAhaXNOdW1iZXIoIG1heCApIClcblxuICAgICAgICAgICAgICBtYXggPSBtaW4gfHwgMSwgbWluID0gMDtcblxuICAgICAgICAgICAgcmV0dXJuIG1pbiArIE0ucmFuZG9tKCkgKiAoIG1heCAtIG1pbiApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBsZXJwOiBmdW5jdGlvbiggbWluLCBtYXgsIGFtb3VudCApIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1pbiArIGFtb3VudCAqICggbWF4IC0gbWluICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1hcDogZnVuY3Rpb24oIG51bSwgbWluQSwgbWF4QSwgbWluQiwgbWF4QiApIHtcblxuICAgICAgICAgICAgcmV0dXJuICggbnVtIC0gbWluQSApIC8gKCBtYXhBIC0gbWluQSApICogKCBtYXhCIC0gbWluQiApICsgbWluQjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRleHRbIEhBU19TS0VUQ0ggXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoIG9wdGlvbnMgfHwge30sIGRlZmF1bHRzICk7XG5cbiAgICAgIGlmICggb3B0aW9ucy5nbG9iYWxzICkgU2tldGNoLmluc3RhbGwoIHNlbGYgKTtcblxuICAgICAgZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCB8fCBkb2MuY3JlYXRlRWxlbWVudCggb3B0aW9ucy50eXBlID09PSBET00gPyAnZGl2JyA6ICdjYW52YXMnICk7XG5cbiAgICAgIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHN3aXRjaCggb3B0aW9ucy50eXBlICkge1xuXG4gICAgICAgICAgY2FzZSBDQU5WQVM6XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldENvbnRleHQoICcyZCcsIG9wdGlvbnMgKTtcblxuICAgICAgICAgIGNhc2UgV0VCR0w6XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldENvbnRleHQoICd3ZWJnbCcsIG9wdGlvbnMgKSB8fCBlbGVtZW50LmdldENvbnRleHQoICdleHBlcmltZW50YWwtd2ViZ2wnLCBvcHRpb25zICk7XG5cbiAgICAgICAgICBjYXNlIERPTTpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2FudmFzID0gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICB9KSgpO1xuXG4gICAgICAoIG9wdGlvbnMuY29udGFpbmVyIHx8IGRvYy5ib2R5ICkuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcblxuICAgICAgcmV0dXJuIFNrZXRjaC5hdWdtZW50KCBjb250ZXh0LCBvcHRpb25zICk7XG4gICAgfSxcblxuICAgIGF1Z21lbnQ6IGZ1bmN0aW9uKCBjb250ZXh0LCBvcHRpb25zICkge1xuXG4gICAgICBvcHRpb25zID0gZXh0ZW5kKCBvcHRpb25zIHx8IHt9LCBkZWZhdWx0cyApO1xuXG4gICAgICBvcHRpb25zLmVsZW1lbnQgPSBjb250ZXh0LmNhbnZhcyB8fCBjb250ZXh0O1xuICAgICAgb3B0aW9ucy5lbGVtZW50LmNsYXNzTmFtZSArPSAnIHNrZXRjaCc7XG5cbiAgICAgIGV4dGVuZCggY29udGV4dCwgb3B0aW9ucywgdHJ1ZSApO1xuXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IoIGNvbnRleHQgKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgU2hpbXNcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIHZlbmRvcnMgPSBbICdtcycsICdtb3onLCAnd2Via2l0JywgJ28nIF07XG4gIHZhciBzY29wZSA9IHNlbGY7XG4gIHZhciB0aGVuID0gMDtcblxuICB2YXIgYSA9ICdBbmltYXRpb25GcmFtZSc7XG4gIHZhciBiID0gJ3JlcXVlc3QnICsgYTtcbiAgdmFyIGMgPSAnY2FuY2VsJyArIGE7XG5cbiAgdmFyIHJBRiA9IHNjb3BlWyBiIF07XG4gIHZhciBjQUYgPSBzY29wZVsgYyBdO1xuXG4gIGZvciAoIHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICFyQUY7IGkrKyApIHtcblxuICAgIHJBRiA9IHNjb3BlWyB2ZW5kb3JzWyBpIF0gKyAnUmVxdWVzdCcgKyBhIF07XG4gICAgY0FGID0gc2NvcGVbIHZlbmRvcnNbIGkgXSArICdDYW5jZWwnICsgYSBdO1xuICB9XG5cbiAgc2NvcGVbIGIgXSA9IHJBRiA9IHJBRiB8fCBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cbiAgICB2YXIgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIGR0ID0gTS5tYXgoIDAsIDE2IC0gKCBub3cgLSB0aGVuICkgKTtcbiAgICB2YXIgaWQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIGNhbGxiYWNrKCBub3cgKyBkdCApO1xuICAgIH0sIGR0ICk7XG5cbiAgICB0aGVuID0gbm93ICsgZHQ7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIHNjb3BlWyBjIF0gPSBjQUYgPSBjQUYgfHwgZnVuY3Rpb24oIGlkICkge1xuICAgIGNsZWFyVGltZW91dCggaWQgKTtcbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBPdXRwdXRcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgcmV0dXJuIFNrZXRjaDtcblxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9za2V0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTG9jYXRpb25WaWV3ID0gKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNjb3BlID0ge307XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIHNjb3BlO1xufSkoKTtcblxuTG9jYXRpb25WaWV3LmFjdGl2YXRlKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvbG9jYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9