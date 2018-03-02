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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_responsive_video__ = __webpack_require__(134);
__webpack_require__(127);











console.log(WPAS_APP);
WPAS_APP.loadVideo = __WEBPACK_IMPORTED_MODULE_8__common_responsive_video__["a" /* default */];
/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  __WEBPACK_IMPORTED_MODULE_7__lib_cakeCharts__["a" /* PieChart */].createPie(".pieID.legend", ".pieID.pie");
  Object(__WEBPACK_IMPORTED_MODULE_8__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  
}

/**
 * THE PROGRAM
**/

if(['page-the-program','single-full-stack','single-web-development'].indexOf(WPAS_APP.view.template)!=-1 || WPAS_APP.view.slug === 'venezuela'){
  
  var maxStickPosition = $('#pricing').offset().top - 20;
  __WEBPACK_IMPORTED_MODULE_5__common_sticky_toggle_js__["a" /* MakeSticky */].init('[data-toggle="sticky-onscroll"]', maxStickPosition);
  
  
  var TheProgram = __webpack_require__(135).default;
  TheProgram.init();
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  Object(__WEBPACK_IMPORTED_MODULE_8__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
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
  
  __webpack_require__(136);

}

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
  __webpack_require__(138);
}

/**
 * PARTNERS
**/

if(WPAS_APP.view.slug === 'partners' || WPAS_APP.view.slug === 'socios'){
  
  Object(__WEBPACK_IMPORTED_MODULE_8__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/office.mp4',{overlay: 'black'});
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
/* WEBPACK VAR INJECTION */(function($) {var loadVideo = function(videoURL, settings={}){
  var s = document.body.firstChild;
  
  var videoViewport = document.createElement('div');
  videoViewport.id = "video-viewport";
  videoViewport.classList.add('video-viewport');
  s.parentNode.insertBefore(videoViewport, s);
  
  var video = document.createElement('video');
  video.src = videoURL; video.autoPlay = true; video.loop = true; video.muted = true; 
  video.classList.add('video-background');
  videoViewport.appendChild(video);
  
  video.addEventListener('loadeddata',() => video.play());
  var vid_w_orig = parseInt($(window).width());
  var vid_h_orig = parseInt($(video).height());
  var min_w = 400;
  window.addEventListener('resize',() => {
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
  
  if(typeof settings.overlay != 'undefined')
  {
    var overlay  = document.createElement('div');
    overlay.style.display = "absolute";
    overlay.style.background = settings.overlay;
    overlay.style.opacity = "0.3";
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

/***/ 135:
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

/***/ 136:
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
  
  var Sketch = __webpack_require__(137);
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

/***/ 137:
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

/***/ 138:
/***/ (function(module, exports) {

var LocationView = (function(){
    var scope = {};
    
    
    return scope;
})();

LocationView.activate();

/***/ })

},[124]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL21hcmtldGluZy1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL2Nha2VDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9yZXNwb25zaXZlLXZpZGVvLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcm9ncmFtLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcmljaW5nLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvc2tldGNoLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9sb2NhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3Qix1QkFBdUI7O0FBRS9DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLHFDQUFxQzs7QUFFckM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxPQUFPOztBQUVQOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLDRCQUE0Qjs7QUFFOUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxDQUFDLEc7Ozs7Ozs7QUN0bkJEO0FBQ0E7OztBQUdBO0FBQ0EsQ0FBQzs7QUFFRCx3QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4uL3N0eWxlcy9pbmRleC5zY3NzJyk7XG5cbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdXRpbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICcuL3BhZ2VzL2FsbC5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL21hcmtldGluZy1ldmVudHMuanMnO1xuaW1wb3J0IHtNYWtlU3RpY2t5fSBmcm9tICcuL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzJztcbmltcG9ydCB7U21hcnRGaWx0ZXJzfSBmcm9tICcuL2NvbW1vbi9zbWFydC1maWx0ZXJzLmpzJztcbmltcG9ydCB7UGllQ2hhcnR9IGZyb20gXCIuL2xpYi9jYWtlQ2hhcnRzXCI7XG5pbXBvcnQgbG9hZFZpZGVvIGZyb20gXCIuL2NvbW1vbi9yZXNwb25zaXZlLXZpZGVvXCI7XG5cbmNvbnNvbGUubG9nKFdQQVNfQVBQKTtcbldQQVNfQVBQLmxvYWRWaWRlbyA9IGxvYWRWaWRlbztcbi8qKlxuICogSE9NRVxuKiovXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdob21lJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdpbmljaW8nKXtcbiAgXG4gIFBpZUNoYXJ0LmNyZWF0ZVBpZShcIi5waWVJRC5sZWdlbmRcIiwgXCIucGllSUQucGllXCIpO1xuICBsb2FkVmlkZW8oJy93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9hc3NldHMvdmlkZW8vaG9tZS1kYXJrLm1wNCcpO1xuICBcbn1cblxuLyoqXG4gKiBUSEUgUFJPR1JBTVxuKiovXG5cbmlmKFsncGFnZS10aGUtcHJvZ3JhbScsJ3NpbmdsZS1mdWxsLXN0YWNrJywnc2luZ2xlLXdlYi1kZXZlbG9wbWVudCddLmluZGV4T2YoV1BBU19BUFAudmlldy50ZW1wbGF0ZSkhPS0xIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ZlbmV6dWVsYScpe1xuICBcbiAgdmFyIG1heFN0aWNrUG9zaXRpb24gPSAkKCcjcHJpY2luZycpLm9mZnNldCgpLnRvcCAtIDIwO1xuICBNYWtlU3RpY2t5LmluaXQoJ1tkYXRhLXRvZ2dsZT1cInN0aWNreS1vbnNjcm9sbFwiXScsIG1heFN0aWNrUG9zaXRpb24pO1xuICBcbiAgXG4gIHZhciBUaGVQcm9ncmFtID0gcmVxdWlyZSgnLi9wYWdlcy9wcm9ncmFtLmpzJykuZGVmYXVsdDtcbiAgVGhlUHJvZ3JhbS5pbml0KCk7XG4gIFxufVxuXG5cblxuXG4vKipcbiAqIFBSSUNJTkdcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdwcmljaW5nJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdwcmVjaW8nKXtcbiAgXG4gIGxvYWRWaWRlbygnL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L2Fzc2V0cy92aWRlby9wcmljaW5nLm1wNCcpO1xuICBcbiAgdmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xuICB2YXIgbXlTbGlkZXIgPSBuZXcgU2xpZGVyKCcjcHJpY2luZy1zbGlkZXInKTtcbiAgLy92YXIgc2xpZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljaW5nLXNsaWRlcicpO1xuICBteVNsaWRlci5vbignc2xpZGVTdG9wJywgZnVuY3Rpb24obmV3VmFsdWUpe1xuICAgIFxuICAgIHZhciBtZXNzYWdlID0gJ3Vrbm93bic7XG4gICAgc3dpdGNoKG5ld1ZhbHVlKVxuICAgIHtcbiAgICAgIGNhc2UgMDogbWVzc2FnZSA9ICckMTAwMCBkZXBvc2l0ICsgJDg1MyAvIG1vbnRoJzsgYnJlYWs7XG4gICAgICBjYXNlIDE6IG1lc3NhZ2UgPSAnJDEwMDAgZGVwb3NpdCArICQ0NDUgLyBtb250aCc7IGJyZWFrO1xuICAgICAgY2FzZSAzOiBtZXNzYWdlID0gJyQxMDAwIGRlcG9zaXQgKyAkMjQwIC8gbW9udGgnOyBicmVhaztcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLWxhYmVsJykuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0XHRcblx0XHR2YXIgcGF5bWVudFBsYW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheW1lbnQtcGxhbicpO1xuXHRcdC8vcGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy15ZWxsb3dcIik7XG5cdFx0cGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJnbG93XCIpO1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0ICAvL3BheW1lbnRQbGFuQ2FyZC5jbGFzc0xpc3QuYWRkKFwiYmcteWVsbG93XCIpO1xuXHRcdFx0cGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJnbG93XCIpO1xuXHRcdH0sIDIwMCk7XG4gICAgXG4gIH0pO1xuICBcbiAgcmVxdWlyZSgnLi9wYWdlcy9wcmljaW5nLmpzJyk7XG5cbn1cblxuLyoqXG4gKiBDQUxFTkRBUlxuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2NhbGVuZGFyJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdjYWxlbmRhcmlvJyl7XG4gIFxuICBTbWFydEZpbHRlcnMuaW5pdCh7XG4gICAgbG9hZGluZ0FuaW1hdGlvbjogJy5jb3Vyc2VzIC5sb2FkaW5nLWFuaW1hdGlvbicsXG4gICAgcmVzdWx0c0NvbnRhaW5lcjogJy5jb3Vyc2VzIC5saXN0LWdyb3VwJyxcbiAgICBmaWx0ZXJEcm9wZG93bjogJy5kcm9wZG93bi1tZW51IGEnLFxuICAgIGZpbHRlcnM6IFtcbiAgICAgIHsgYnV0dG9uOiAnI2xvY2F0aW9uU2VsZWN0b3InLCB1cmxLZXk6ICdsJywgb3B0aW9uczogJy5sb2NhdGlvbi1vcHRpb24nIH0sXG4gICAgICB7IGJ1dHRvbjogJyNsYW5nU2VsZWN0b3InLCB1cmxLZXk6ICdsYW5nJywgb3B0aW9uczogJy5sYW5nLW9wdGlvbid9LFxuICAgICAgeyBidXR0b246ICcjdHlwZVNlbGVjdG9yJywgdXJsS2V5OiAndHlwZScsIG9wdGlvbnM6ICcudHlwZS1vcHRpb24nfVxuICAgIF1cbiAgfSk7XG4gIFxuICBNYWtlU3RpY2t5LmluaXQoJ1tkYXRhLXRvZ2dsZT1cInN0aWNreS1vbnNjcm9sbFwiXScsIDQwMDApO1xuICAgIFxufVxuXG4vKipcbiAqIExPQ0FUSU9OXG4qKi9cblxuaWYoWydzaW5nbGUtbG9jYXRpb24nXS5pbmRleE9mKFdQQVNfQVBQLnZpZXcudGVtcGxhdGUpICE9IC0xKXtcbiAgcmVxdWlyZSgnLi9wYWdlcy9sb2NhdGlvbi5qcycpO1xufVxuXG4vKipcbiAqIFBBUlRORVJTXG4qKi9cblxuaWYoV1BBU19BUFAudmlldy5zbHVnID09PSAncGFydG5lcnMnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3NvY2lvcycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL29mZmljZS5tcDQnLHtvdmVybGF5OiAnYmxhY2snfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy92YXIgbmV3c2xldHRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtbmV3c2xldHRlciBmb3JtJyk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgIGlmKGZyb21Ub3A+MTAwKSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICBlbHNlICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xufSk7XG5cblxuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1OZXdzbGV0dGVyID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybU5ld3NsZXR0ZXIuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICBcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnbmV3c2xldHRlcl9zaWdudXAnLFxuICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1OZXdzbGV0dGVyLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybU5ld3NsZXR0ZXIuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxufSk7XG5cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtU3lsbGFidXMgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBmaXJzdE5hbWVGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPXRleHRdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgdmFyIGZpcnN0TmFtZSA9IGZpcnN0TmFtZUZpZWxkLnZhbCgpO1xuICAgXG4gICBpZihlbWFpbCA9PSAnJyB8fCBmaXJzdE5hbWUgPT0nJylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnV2UgbmVlZCB5b3VyIGVtYWlsIGFuZCBmaXJzdCBuYW1lJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZG93bmxvYWRfc3lsbGFidXMnLFxuICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1TeWxsYWJ1cy5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAkKCcjc3lsbGFidXNNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICB9LDIwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KHAzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgfSBcbiAgIFxufSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICdnZXRfdXBjb21pbmdfZXZlbnQnXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpIHByb21wdFVwY29taW5nRXZlbnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgdXBjb21pbmcgZXZlbnQ6IFwiK3AzKTtcbiAgICAgIH1cbiAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIHByb21wdFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgXG4gICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9wU3RhdGUnKSAhPSAnc2hvd24nKXtcbiAgICAgIGZpbGxVcGNvbWluZ0V2ZW50KGV2ZW50KTtcbiAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5kZWxheSgyMDAwKS5mYWRlSW4oKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3BTdGF0ZScsJ3Nob3duJyk7XG4gICAgICAkKCcjdXBjb21pbmdFdmVudCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHB1dCB5b3VyIGRlZmF1bHQgZXZlbnQgaGVyZVxuICAgICAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuXG4gICB9XG59XG5cbmZ1bmN0aW9uIGZpbGxVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIHZhciBtb2RhbCA9ICQoJyN1cGNvbWluZ0V2ZW50Jyk7XG4gICBtb2RhbC5maW5kKCcuZGF5JykuaHRtbChldmVudC5kYXkpO1xuICAgbW9kYWwuZmluZCgnLm1vbnRoJykuaHRtbChldmVudC5tb250aCk7XG4gICBtb2RhbC5maW5kKCcueWVhcicpLmh0bWwoZXZlbnQueWVhcik7XG4gICBcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC10aXRsZScpLmh0bWwoZXZlbnQucG9zdF90aXRsZSk7XG4gICBtb2RhbC5maW5kKCcuZXZlbnQtZGV0YWlscycpLmh0bWwoZXZlbnQuZXZlbnRfc3RhcnRfdGltZSArIFwiIFwiICsgZXZlbnQuZXZlbnRfZW5kX3RpbWUgKyAnIGF0IDxzcGFuIGNsYXNzPVwiaW1vb24gaWNvbi1sb2NhdGlvblwiPjwvc3Bhbj4gJyArIGV2ZW50LmFkZHJlc3MpOy8vMzozMHBtIC0gYXQgU3RhcnRodWIsIERvd250b3duIE1pYW1pXG4gICBtb2RhbC5maW5kKCcuZXZlbnQtZGVzY3JpcHRpb24nKS5odG1sKGV2ZW50LnBvc3RfY29udGVudCk7XG4gICBcbiAgIG1vZGFsLmZpbmQoJy5idG4tZGFuZ2VyJykuYXR0cignaHJlZicsZXZlbnQudGlja2V0X3VybCk7XG4gICBcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBvblBhZ2VWaWV3KHVybENvbnRhaW5zLCBjYWxsYmFjayl7XG4gICAgLy9QYWdlIHZpZXcgPSBhcHBseS10aGFuay15b3VcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZih1cmxDb250YWlucykgPiAtMSkge1xuICAgICAgICAvL0NvZGUgZ29lcyBoZXJlXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSAgXG59XG5mdW5jdGlvbiB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KGV2ZW50TmFtZSl7XG4gICAgaWYodHlwZW9mIGRhdGFMYXllciAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiBldmVudE5hbWV9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0V2ZW50IHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ6ICcrZXZlbnROYW1lKTtcbiAgICB9XG4gICAgZWxzZSBjb25zb2xlLmxvZygnRXZlbnQgbm90IGJlaW5nIHNlbnQgdG8gVGFnTWFuYWdlcjogJytldmVudE5hbWUpO1xufVxuZnVuY3Rpb24gc2F2ZURhdGFWYXJpYWJsZShpbmRleCwgdmFsdWUpe1xuICAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpIGRhdGFMYXllci5wdXNoKHtpbmRleDogdmFsdWV9KTtcbiAgICBlbHNlIGNvbnNvbGUubG9nKCdJbXBvc2libGUgdG8gd3JpdGUgJytpbmRleCsnIG9uIGRhdGFMYXllcicpO1xuICAgIFxuICAgIFxuICAgIGlmKHR5cGVvZiBXUEFTX0FQUCA9PSAndW5kZWZpbmVkJykgV1BBU19BUFAgPSB7fTtcbiAgICBpZih0eXBlb2YgV1BBU19BUFAuZGF0YUxheWVyID09ICd1bmRlZmluZWQnKSBXUEFTX0FQUC5kYXRhTGF5ZXIgPSB7fTtcbiAgICBXUEFTX0FQUC5kYXRhTGF5ZXJbaW5kZXhdID0gdmFsdWU7XG59XG5mdW5jdGlvbiBhY19ldmVudChldmVudEtleSwgZXZlbnROYW1lLCB1c2VyRW1haWwpe1xuXG4gIC8vIHdoYXQgd2UgZG8gaGVyZSwgaXMgbG9nIGEgc3VjY2Vzc2Z1bCBldmVudCB0byB0aGUgY29uc29sZVxuICAvLyBvciBjYXRjaCBhbnkgZXJyb3JzIHdlIGhhdmVcbiAgdmFyIHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICBcbiAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRlZCBoYWxmd2F5IHNjcm9sbCBldmVudFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgIH1cbiAgfTtcblxuICAvLyB5b3VyIEFjdGl2ZUNhbXBhaWduIGlkLiBZb3UgY2FuIGdldCB0aGlzIGZyb20geW91ciBBQyBzZXR0aW5ncyBcbiAgdmFyIGFjdGlkID0gXCJkYjE1YTMyNjRmYjJhYmYxOTk5NmZhNDg4NzMwMzk3NTdkNTM0NTQ0XCI7IFxuXG4gIHZhciB2aXNpdCA9IHtcbiAgICBlbWFpbDogdXNlckVtYWlsIC8vIHRoZSB1c2VyJ3MgZW1haWwgYWRkcmVzc1xuICB9O1xuXG4gIC8vIGdldCB0aGUgdXJsIG9mIHRoZSBwYWdlIGFuZCBzZW5kIGl0IGFzIGV2ZW50IGRhdGFcbiAgdmFyIGV2ZW50RGF0YSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gIC8vIGJ1aWxkIHRoZSBldmVudFN0cmluZyBiYXNlZCBvbiB0aGUgdmFyaWFibGVzIHlvdSBqdXN0IGVkaXRlZCBhYm92ZSDimJ1cbiAgdmFyIGV2ZW50U3RyaW5nID0gXCJhY3RpZD1cIiArIGFjdGlkIFxuICAgICAgICAgICAgICAgICAgICArIFwiJmtleT1cIiArIGV2ZW50S2V5IFxuICAgICAgICAgICAgICAgICAgICArIFwiJmV2ZW50PVwiICsgZXZlbnROYW1lIFxuICAgICAgICAgICAgICAgICAgICArIFwiJnZpc2l0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZpc2l0KSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZldmVudGRhdGFcIiArIGV2ZW50RGF0YTtcblxuICAvLyBzZW5kIHRoZSBldmVudCB0byB0aGUgQWN0aXZlQ2FtcGFpZ24gQVBJIHdpdGggb3VyIGV2ZW50IHZhbHVlc1xuICB4aHR0cC5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vdHJhY2tjbXAubmV0L2V2ZW50XCIsIHRydWUpO1xuICB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICBcbiAgaWYoZXZlbnRLZXkhPScnICYmIGV2ZW50TmFtZSE9JycgJiYgdXNlckVtYWlsIT0nJykgeGh0dHAuc2VuZChldmVudFN0cmluZyk7XG4gIGVsc2V7XG4gICAgICBpZihldmVudEtleT09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIGV2ZW50S2V5JyxldmVudEtleSk7XG4gICAgICBpZihldmVudE5hbWU9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCBldmVudE5hbWUnLGV2ZW50TmFtZSk7XG4gICAgICBpZih1c2VyRW1haWw9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCB1c2VyRW1haWwnLHVzZXJFbWFpbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUYWdtYW5nZXIgZXZlbnRzXG4gKiovXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBcbiAgICB2YXIgZW1haWxJbnB1dCA9ICQoZXZlbnQudGFyZ2V0KS5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgIGlmKGVtYWlsSW5wdXQubGVuZ3RoPjApIHNhdmVEYXRhVmFyaWFibGUoJ3VzZXJFbWFpbCcsZW1haWxJbnB1dFswXS52YWx1ZSk7XG4gICAgXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnc3lsbGFidXNfZG93bmxvYWQnKTsgXG59KTtcbiQoJy5uZXdzbGV0dGVyLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7IFxuICAgIFxuICAgIHZhciBlbWFpbElucHV0ID0gJChldmVudC50YXJnZXQpLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICAgaWYoZW1haWxJbnB1dC5sZW5ndGg+MCkgc2F2ZURhdGFWYXJpYWJsZSgndXNlckVtYWlsJyxlbWFpbElucHV0WzBdLnZhbHVlKTtcbiAgICBcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCduZXdzbGV0dGVyX3NpZ251cCcpOyBcbn0pO1xuJCgnLmFwcGx5LWJ0bicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXsgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnYXBwbGljYXRpb25fcmVuZGVyZWQnKTsgfSk7XG5vblBhZ2VWaWV3KFwiL2FwcGx5LXRoYW5rLXlvdVwiLGZ1bmN0aW9uKCl7XG4gICAgLy9Db2RlIGdvZXMgaGVyZVxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ3N0dWRlbnRfYXBwbGljYXRpb24nKTsgXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBNYWtlU3RpY2t5ID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIC8vW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZWxlY3RvciwgbWF4U3RpY2tQb3NpdGlvbilcbiAgICB7XG4gICAgICAgIC8vIEZpbmQgYWxsIGRhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCIgZWxlbWVudHNcbiAgICAgICAgJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgc3RpY2t5ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgc3RpY2t5V3JhcHBlciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3N0aWNreS13cmFwcGVyJyk7IC8vIGluc2VydCBoaWRkZW4gZWxlbWVudCB0byBtYWludGFpbiBhY3R1YWwgdG9wIG9mZnNldCBvbiBwYWdlXG4gICAgICAgICAgc3RpY2t5LmJlZm9yZShzdGlja3lXcmFwcGVyKTtcbiAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNjcm9sbCAmIHJlc2l6ZSBldmVudHNcbiAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5zdGlja3ktb25zY3JvbGwgcmVzaXplLnN0aWNreS1vbnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh0aGlzKSwgbWF4U3RpY2tQb3NpdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gT24gcGFnZSBsb2FkXG4gICAgICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh3aW5kb3cpLCBtYXhTdGlja1Bvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCBzY3JvbGxFbGVtZW50LCBtYXhTdGlja1Bvc2l0aW9uKSB7XG4gICAgICAgICAgdmFyIHN0aWNreUhlaWdodCA9IHN0aWNreS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgIHZhciBzdGlja3lXaWR0aCA9IHN0aWNreS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IHN0aWNreVdyYXBwZXIub2Zmc2V0KCk7XG4gICAgICAgICAgdmFyIHN0aWNreVRvcCA9IG9mZnNldC50b3A7XG4gICAgICAgICAgdmFyIHN0aWNreUxlZnQgPSBvZmZzZXQubGVmdDtcbiAgICBcbiAgICAgICAgICB2YXIgd2luZG93U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpO1xuICAgICAgICAgIGlmICh3aW5kb3dTY3JvbGxQb3NpdGlvbiA+PSBzdGlja3lUb3Ape1xuICAgICAgICAgICAgaWYod2luZG93U2Nyb2xsUG9zaXRpb24gPCBtYXhTdGlja1Bvc2l0aW9uKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGlja3lXcmFwcGVyLmhlaWdodChzdGlja3lIZWlnaHQpO1xuICAgICAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnd2lkdGgnLHN0aWNreVdpZHRoKydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JyxzdGlja3lMZWZ0KydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLChtYXhTdGlja1Bvc2l0aW9uLTY2NSkrJ3B4Jyk7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLCcxNXB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gcGx1Z2luO1xuICAgIFxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc3RpY2t5LXRvZ2dsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgU21hcnRGaWx0ZXJzID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICBmaWx0ZXJEcm9wZG93bjogJycsXG4gICAgICAgIGxvYWRpbmdBbmltYXRpb246ICcnLFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyOiAnJyxcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZXR0aW5ncyl7XG4gICAgICAgICQuZXh0ZW5kKCBjb25maWcsIHNldHRpbmdzICk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIHRoZSBTbWFydEZpbHRlcnMnKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB1cmxWYXJzID0gZ2V0VXJsVmFycygpO1xuICAgICAgICBzZXRGaWx0ZXJzRGVmYXVsdFN0YXRlcyh1cmxWYXJzKTtcbiAgICAgICAgXG4gICAgICAgICQoY29uZmlnLmZpbHRlckRyb3Bkb3duKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7ICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoJCh0aGlzKS5odG1sKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICBpZih2YWx1ZSAhPSAnYWxsJykgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgLy9lbHNlIHVybFZhcnMgPSB1bnNldEFycmF5KHVybFZhcnMsYnV0dG9uLmRhdGEoJ2tleScpKTtcbiAgICAgICAgICAgIGVsc2UgZGVsZXRlIHVybFZhcnNbYnV0dG9uLmRhdGEoJ2tleScpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJChjb25maWcubG9hZGluZ0FuaW1hdGlvbikuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgICQoY29uZmlnLnJlc3VsdHNDb250YWluZXIpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKTsvL2hpZGUgdGhlIGRyb3Bkb3duIGFmdGVyIGNsaWNrZWRcbiAgICAgICAgICAgIC8vdmFyIHBhcmVudERyb3Bkb3duID0gYXV4LnBhcmVudCgpO1xuICAgICAgICAgICAgLy9wYXJlbnREcm9wZG93blswXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldEJhc2VVUkwoKSArICc/JyArIHNlcmlhbGl6ZSh1cmxWYXJzICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldEZpbHRlcnNEZWZhdWx0U3RhdGVzKHVybFZhcnMpe1xuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyBmaWx0ZXIgdmFsdWVzJywgdXJsVmFycyk7XG4gICAgICAgIFxuICAgICAgICBjb25maWcuZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXIudXJsS2V5KTtcbiAgICAgICAgICAgIGlmKGZpbHRlci51cmxLZXkgaW4gdXJsVmFycykgJChmaWx0ZXIuYnV0dG9uKS5odG1sKCQoZmlsdGVyLm9wdGlvbnMrJ1tkYXRhLXZhbHVlPVwiJyt1cmxWYXJzW2ZpbHRlci51cmxLZXldKydcIl0nKS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0QmFzZVVSTCgpe1xuICAgICAgICB2YXIgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcGllY2VzID0gYmFzZVVSTC5zcGxpdCgnPycpO1xuICAgICAgICBpZihwaWVjZXMubGVuZ3RoPjEpIGJhc2VVUkwgPSBwaWVjZXNbMF07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYmFzZVVSTDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VXJsVmFycygpe1xuICAgICAgXG4gICAgICAgIHZhciB2YXJzID0gW10sIGhhc2g7XG4gICAgICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICB2YXJzLnB1c2goaGFzaFswXSk7XG4gICAgICAgICAgICB2YXJzW2hhc2hbMF1dID0gaGFzaFsxXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHZhcnNbJzAnXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbZ2V0QmFzZVVSTCgpXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbJyddO1xuICBcbiAgICAgICAgcmV0dXJuIHZhcnM7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgICAgICAgdmFyIHN0ciA9IFtdO1xuICAgICAgICBmb3IodmFyIHAgaW4gb2JqKVxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgICBcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3NtYXJ0LWZpbHRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmV4cG9ydCB2YXIgUGllQ2hhcnQgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgdGhlcHVibGljID0ge307XG5cbiAgICB0aGVwdWJsaWMuY3JlYXRlUGllID0gZnVuY3Rpb24oZGF0YUVsZW1lbnQsIHBpZUVsZW1lbnQpIHtcbiAgICAgIHZhciBsaXN0RGF0YSA9IFtdO1xuICAgICAgJChkYXRhRWxlbWVudCtcIiBzcGFuXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpc3REYXRhLnB1c2goTnVtYmVyKCQodGhpcykuaHRtbCgpKSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBsaXN0VG90YWwgPSAwO1xuICAgICAgZm9yKHZhciBpPTA7IGk8bGlzdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdFRvdGFsICs9IGxpc3REYXRhW2ldO1xuICAgICAgfVxuICAgICAgdmFyIG9mZnNldCA9IDA7XG4gICAgICB2YXIgY29sb3IgPSBbXG4gICAgICAgIFwiY29ybmZsb3dlcmJsdWVcIiwgXG4gICAgICAgIFwib2xpdmVkcmFiXCIsIFxuICAgICAgICBcIm9yYW5nZVwiLCBcbiAgICAgICAgXCJ0b21hdG9cIiwgXG4gICAgICAgIFwiY3JpbXNvblwiLCBcbiAgICAgICAgXCJwdXJwbGVcIiwgXG4gICAgICAgIFwidHVycXVvaXNlXCIsIFxuICAgICAgICBcImZvcmVzdGdyZWVuXCIsIFxuICAgICAgICBcIm5hdnlcIiwgXG4gICAgICAgIFwiZ3JheVwiXG4gICAgICBdO1xuICAgICAgZm9yKHZhciBpPTA7IGk8bGlzdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNpemUgPSBzbGljZVNpemUobGlzdERhdGFbaV0sIGxpc3RUb3RhbCk7XG4gICAgICAgIGl0ZXJhdGVTbGljZXMoc2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBpLCAwLCBjb2xvcltpXSk7XG4gICAgICAgICQoZGF0YUVsZW1lbnQrXCIgbGk6bnRoLWNoaWxkKFwiKyhpKzEpK1wiKVwiKS5jc3MoXCJib3JkZXItY29sb3JcIiwgY29sb3JbaV0pO1xuICAgICAgICBvZmZzZXQgKz0gc2l6ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzbGljZVNpemUoZGF0YU51bSwgZGF0YVRvdGFsKSB7XG4gICAgICByZXR1cm4gKGRhdGFOdW0gLyBkYXRhVG90YWwpICogMzYwO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRTbGljZShzbGljZVNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgc2xpY2VJRCwgY29sb3IpIHtcbiAgICAgICQocGllRWxlbWVudCkuYXBwZW5kKFwiPGRpdiBjbGFzcz0nc2xpY2UgXCIrc2xpY2VJRCtcIic+PHNwYW4+PC9zcGFuPjwvZGl2PlwiKTtcbiAgICAgIHZhciBvZmZzZXQgPSBvZmZzZXQgLSAxO1xuICAgICAgdmFyIHNpemVSb3RhdGlvbiA9IC0xNzkgKyBzbGljZVNpemU7XG4gICAgICAkKFwiLlwiK3NsaWNlSUQpLmNzcyh7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwicm90YXRlKFwiK29mZnNldCtcImRlZykgdHJhbnNsYXRlM2QoMCwwLDApXCJcbiAgICAgIH0pO1xuICAgICAgJChcIi5cIitzbGljZUlEK1wiIHNwYW5cIikuY3NzKHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIiAgICAgICA6IFwicm90YXRlKFwiK3NpemVSb3RhdGlvbitcImRlZykgdHJhbnNsYXRlM2QoMCwwLDApXCIsXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBjb2xvclxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVTbGljZXMoc2xpY2VTaXplLCBwaWVFbGVtZW50LCBvZmZzZXQsIGRhdGFDb3VudCwgc2xpY2VDb3VudCwgY29sb3IpIHtcbiAgICAgIHZhciBzbGljZUlEID0gXCJzXCIrZGF0YUNvdW50K1wiLVwiK3NsaWNlQ291bnQ7XG4gICAgICB2YXIgbWF4U2l6ZSA9IDE3OTtcbiAgICAgIGlmKHNsaWNlU2l6ZTw9bWF4U2l6ZSkge1xuICAgICAgICBhZGRTbGljZShzbGljZVNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgc2xpY2VJRCwgY29sb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkU2xpY2UobWF4U2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBzbGljZUlELCBjb2xvcik7XG4gICAgICAgIGl0ZXJhdGVTbGljZXMoc2xpY2VTaXplLW1heFNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCttYXhTaXplLCBkYXRhQ291bnQsIHNsaWNlQ291bnQrMSwgY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhlcHVibGljO1xufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvY2FrZUNoYXJ0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsb2FkVmlkZW8gPSBmdW5jdGlvbih2aWRlb1VSTCwgc2V0dGluZ3M9e30pe1xuICB2YXIgcyA9IGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgXG4gIHZhciB2aWRlb1ZpZXdwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZpZGVvVmlld3BvcnQuaWQgPSBcInZpZGVvLXZpZXdwb3J0XCI7XG4gIHZpZGVvVmlld3BvcnQuY2xhc3NMaXN0LmFkZCgndmlkZW8tdmlld3BvcnQnKTtcbiAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh2aWRlb1ZpZXdwb3J0LCBzKTtcbiAgXG4gIHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gIHZpZGVvLnNyYyA9IHZpZGVvVVJMOyB2aWRlby5hdXRvUGxheSA9IHRydWU7IHZpZGVvLmxvb3AgPSB0cnVlOyB2aWRlby5tdXRlZCA9IHRydWU7IFxuICB2aWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby1iYWNrZ3JvdW5kJyk7XG4gIHZpZGVvVmlld3BvcnQuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICBcbiAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsKCkgPT4gdmlkZW8ucGxheSgpKTtcbiAgdmFyIHZpZF93X29yaWcgPSBwYXJzZUludCgkKHdpbmRvdykud2lkdGgoKSk7XG4gIHZhciB2aWRfaF9vcmlnID0gcGFyc2VJbnQoJCh2aWRlbykuaGVpZ2h0KCkpO1xuICB2YXIgbWluX3cgPSA0MDA7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpID0+IHtcbiAgICAgIHZhciBzb3VyY2VWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICAgIHZhciBzb3VyY2VWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgICAgLy9pZih2aWRfd19vcmlnIDw9IDAgfHwgdmlkX3dfb3JpZyA9PSBJbmZpbml0eSkgdmlkX3dfb3JpZyA9IHBhcnNlSW50KCQodmlkZW8pLndpZHRoKCkpO1xuICAgICAgLy9pZih2aWRfaF9vcmlnIDw9IDAgfHwgdmlkX2hfb3JpZyA9PSBJbmZpbml0eSkgdmlkX2hfb3JpZyA9IHBhcnNlSW50KCQodmlkZW8pLmhlaWdodCgpKTtcbiAgICAgIHZhciBhZGRlZFBhZGRpbmcgPSAxMDA7XG4gICAgICB2YXIgdGFyZ2V0X3dpdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgIHZhciB0YXJnZXRfaGVpZ2ggPSAkKCcubWFzdGhlYWQnKS5oZWlnaHQoKSArICQoJ25hdi5uYXZiYXInKS5oZWlnaHQoKSArIHBhcnNlSW50KCQoJy5tYXN0aGVhZCcpLmNzcygnbWFyZ2luLXRvcCcpKSArIHBhcnNlSW50KCQoJ25hdi5uYXZiYXInKS5jc3MoJ21hcmdpbi10b3AnKSkgKyBhZGRlZFBhZGRpbmc7XG4gICAgICAkKHZpZGVvVmlld3BvcnQpLndpZHRoKHRhcmdldF93aXRoKTtcbiAgICAgICQodmlkZW9WaWV3cG9ydCkuaGVpZ2h0KG5ld1ZpZXdIZWlnaHQpO1xuICBcbiAgICAgIHZhciBzY2FsZV9oID0gdGFyZ2V0X3dpdGggLyB2aWRfd19vcmlnO1xuICAgICAgdmFyIHNjYWxlX3YgPSB0YXJnZXRfaGVpZ2ggLyB2aWRfaF9vcmlnO1xuICAgICAgdmFyIHNjYWxlID0gc2NhbGVfaCA+IHNjYWxlX3YgPyBzY2FsZV9oIDogc2NhbGVfdjtcbiAgXG4gICAgICBpZiAoc2NhbGUgKiB2aWRfd19vcmlnIDwgbWluX3cpIHNjYWxlID0gbWluX3cgLyB2aWRfd19vcmlnO1xuICAgICAgXG4gICAgICB2YXIgbmV3Vmlld1dpZHRoID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICAgICAgdmFyIG5ld1ZpZXdIZWlnaHQgPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICBcbiAgICAgIC8vaWYgdGhlIG5ldyB3aWR0aCBkb2VzIG5vdCBjb3ZlciB0aGUgZW50aXJlIHNjcmVlbiB3aWR0aFxuICAgICAgaWYgKG5ld1ZpZXdXaWR0aCA8IHNvdXJjZVZpZGVvV2lkdGgpIHNjYWxlID0gc291cmNlVmlkZW9XaWR0aCAvIHZpZF93X29yaWc7XG4gICAgICBpZiAobmV3Vmlld0hlaWdodCA8IHNvdXJjZVZpZGVvSGVpZ2h0ICYmIHNjYWxlIDwgKHNvdXJjZVZpZGVvSGVpZ2h0IC8gdmlkX2hfb3JpZykpIHNjYWxlID0gc291cmNlVmlkZW9IZWlnaHQgLyB2aWRfaF9vcmlnO1xuICAgICAgXG4gICAgICBuZXdWaWV3V2lkdGggPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICBuZXdWaWV3SGVpZ2h0ID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICBcbiAgICAgICQodmlkZW8pLndpZHRoKG5ld1ZpZXdXaWR0aCk7XG4gICAgICAkKHZpZGVvKS5oZWlnaHQobmV3Vmlld0hlaWdodCk7XG4gIFxuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS5zY3JvbGxMZWZ0KChuZXdWaWV3V2lkdGggLSB0YXJnZXRfd2l0aCkgLyAyKTtcbiAgICAgICQodmlkZW9WaWV3cG9ydCkuc2Nyb2xsVG9wKChuZXdWaWV3SGVpZ2h0IC0gdGFyZ2V0X2hlaWdoKSAvIDIpO1xuICB9KTtcbiAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICBcbiAgaWYodHlwZW9mIHNldHRpbmdzLm92ZXJsYXkgIT0gJ3VuZGVmaW5lZCcpXG4gIHtcbiAgICB2YXIgb3ZlcmxheSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImFic29sdXRlXCI7XG4gICAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gc2V0dGluZ3Mub3ZlcmxheTtcbiAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHkgPSBcIjAuM1wiO1xuICAgIG92ZXJsYXkuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XG4gICAgb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgb3ZlcmxheS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBvdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiLTFcIjtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG92ZXJsYXksIHMpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkVmlkZW87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3Jlc3BvbnNpdmUtdmlkZW8uanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgVGhlUHJvZ3JhbSA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgIHZhciB0aGVzY29wZSA9IHt9O1xuICAgIC8vIENhY2hlIHNlbGVjdG9yc1xuICAgIHZhciB0b3BNZW51ID0gJChcIi5wcm9ncmFtLW1lbnVcIiksXG4gICAgICAgIHRvcE1lbnVIZWlnaHQgPSB0b3BNZW51Lm91dGVySGVpZ2h0KCkrMTUsXG4gICAgICAgIC8vIEFsbCBsaXN0IGl0ZW1zXG4gICAgICAgIG1lbnVJdGVtcyA9IHRvcE1lbnUuZmluZChcImFbaHJlZio9JyMnXVwiKSxcbiAgICAgICAgLy8gQW5jaG9ycyBjb3JyZXNwb25kaW5nIHRvIG1lbnUgaXRlbXNcbiAgICAgICAgc2Nyb2xsSXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgdmFyIGl0ZW0gPSAkKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgICAgICAgIGlmIChpdGVtLmxlbmd0aCkgeyByZXR1cm4gaXRlbTsgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICB0aGVzY29wZS5pbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vIEJpbmQgdG8gc2Nyb2xsXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpK3RvcE1lbnVIZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICAgICAvLyBHZXQgaWQgb2YgY3VycmVudCBzY3JvbGwgaXRlbVxuICAgICAgICAgICB2YXIgY3VyID0gc2Nyb2xsSXRlbXMubWFwKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcbiAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgICAgICAgIGN1ciA9IGN1cltjdXIubGVuZ3RoLTFdO1xuICAgICAgICAgICB2YXIgaWQgPSBjdXIgJiYgY3VyLmxlbmd0aCA/IGN1clswXS5pZCA6IFwiXCI7XG4gICAgICAgICAgIC8vIFNldC9yZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgIG1lbnVJdGVtc1xuICAgICAgICAgICAgIC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAgICAgIC5lbmQoKS5maWx0ZXIoXCJbaHJlZj0nI1wiK2lkK1wiJ11cIikucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhlc2NvcGU7XG4gICAgXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUaGVQcm9ncmFtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIgICAgZnVuY3Rpb24gUGFydGljbGUoIHgsIHksIHJhZGl1cyApIHtcbiAgICBcdHRoaXMuaW5pdCggeCwgeSwgcmFkaXVzICk7XG4gICAgfVxuICAgIFxuICAgIFBhcnRpY2xlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICBcdGluaXQ6IGZ1bmN0aW9uKCB4LCB5LCByYWRpdXMgKSB7XG4gICAgXG4gICAgXHRcdHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIFxuICAgIFx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDtcbiAgICBcdFx0dGhpcy53YW5kZXIgPSAwLjE1O1xuICAgIFx0XHR0aGlzLnRoZXRhID0gcmFuZG9tKCBUV09fUEkgKTtcbiAgICBcdFx0dGhpcy5kcmFnID0gMC45MjtcbiAgICBcdFx0dGhpcy5jb2xvciA9ICcjZmZmJztcbiAgICBcbiAgICBcdFx0dGhpcy54ID0geCB8fCAwLjA7XG4gICAgXHRcdHRoaXMueSA9IHkgfHwgMC4wO1xuICAgIFxuICAgIFx0XHR0aGlzLnZ4ID0gMC4wO1xuICAgIFx0XHR0aGlzLnZ5ID0gMC4wO1xuICAgIFx0fSxcbiAgICBcbiAgICBcdG1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIFx0XHR0aGlzLnggKz0gdGhpcy52eDtcbiAgICBcdFx0dGhpcy55ICs9IHRoaXMudnk7XG4gICAgXG4gICAgXHRcdHRoaXMudnggKj0gdGhpcy5kcmFnO1xuICAgIFx0XHR0aGlzLnZ5ICo9IHRoaXMuZHJhZztcbiAgICBcbiAgICBcdFx0dGhpcy50aGV0YSArPSByYW5kb20oIC0wLjUsIDAuNSApICogdGhpcy53YW5kZXI7XG4gICAgXHRcdHRoaXMudnggKz0gc2luKCB0aGlzLnRoZXRhICkgKiAwLjE7XG4gICAgXHRcdHRoaXMudnkgKz0gY29zKCB0aGlzLnRoZXRhICkgKiAwLjE7XG4gICAgXG4gICAgXHRcdHRoaXMucmFkaXVzICo9IDAuOTY7XG4gICAgXHRcdHRoaXMuYWxpdmUgPSB0aGlzLnJhZGl1cyA+IDAuNTtcbiAgICBcdH0sXG4gICAgXG4gICAgXHRkcmF3OiBmdW5jdGlvbiggY3R4ICkge1xuICAgIFxuICAgIFx0XHRjdHguYmVnaW5QYXRoKCk7XG4gICAgXHRcdGN0eC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgVFdPX1BJICk7XG4gICAgXHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIFx0XHRjdHguZmlsbCgpO1xuICAgIFx0fVxuICAgIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQYXJ0aWNsZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBcbiAgdmFyIE1BWF9QQVJUSUNMRVMgPSAyODA7XG4gIHZhciBDT0xPVVJTID0gWyAnIzY5RDJFNycsICcjQTdEQkQ4JywgJyNFMEU0Q0MnLCAnI0YzODYzMCcsICcjRkE2OTAwJywgJyNGRjRFNTAnLCAnI0Y5RDQyMycgXTtcbiAgXG4gIHZhciBwYXJ0aWNsZXMgPSBbXTtcbiAgdmFyIHBvb2wgPSBbXTtcbiAgXG4gIHZhciBTa2V0Y2ggPSByZXF1aXJlKFwiLi4vbGliL3NrZXRjaFwiKTtcbiAgdmFyIGNhbnZhc0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNiZy1za2V0Y2gnICk7XG4gIGNhbnZhc0JnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHZhciBwcmljaW5nU2tldGNoID0gU2tldGNoLmNyZWF0ZSh7XG4gIFx0Y29udGFpbmVyOiBjYW52YXNCZ1xuICB9KTtcbiAgXG4gIHByaWNpbmdTa2V0Y2guc2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0Ly8gU2V0IG9mZiBzb21lIGluaXRpYWwgcGFydGljbGVzLlxuICBcdHZhciBpLCB4LCB5O1xuICBcbiAgXHRmb3IgKCBpID0gMDsgaSA8IDIwOyBpKysgKSB7XG4gIFx0XHR4ID0gKCBwcmljaW5nU2tldGNoLndpZHRoICogMC41ICkgKyByYW5kb20oIC0xMDAsIDEwMCApO1xuICBcdFx0eSA9ICggcHJpY2luZ1NrZXRjaC5oZWlnaHQgKiAwLjUgKSArIHJhbmRvbSggLTEwMCwgMTAwICk7XG4gIFx0XHRwcmljaW5nU2tldGNoLnNwYXduKCB4LCB5ICk7XG4gIFx0fVxuICB9O1xuICBcbiAgcHJpY2luZ1NrZXRjaC5zcGF3biA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICBcbiAgXHRpZiAoIHBhcnRpY2xlcy5sZW5ndGggPj0gTUFYX1BBUlRJQ0xFUyApXG4gIFx0XHRwb29sLnB1c2goIHBhcnRpY2xlcy5zaGlmdCgpICk7XG4gIFxuICBcdHZhciBwYXJ0aWNsZSA9IHBvb2wubGVuZ3RoID8gcG9vbC5wb3AoKSA6IG5ldyBQYXJ0aWNsZSgpO1xuICBcdHBhcnRpY2xlLmluaXQoIHgsIHksIHJhbmRvbSggNSwgNDAgKSApO1xuICBcbiAgXHRwYXJ0aWNsZS53YW5kZXIgPSByYW5kb20oIDAuNSwgMi4wICk7XG4gIFx0cGFydGljbGUuY29sb3IgPSByYW5kb20oIENPTE9VUlMgKTtcbiAgXHRwYXJ0aWNsZS5kcmFnID0gcmFuZG9tKCAwLjksIDAuOTkgKTtcbiAgXG4gIFx0dmFyIHRoZXRhID0gcmFuZG9tKCBUV09fUEkgKTtcbiAgXHR2YXIgZm9yY2UgPSByYW5kb20oIDIsIDggKTtcbiAgXG4gIFx0cGFydGljbGUudnggPSBzaW4oIHRoZXRhICkgKiBmb3JjZTtcbiAgXHRwYXJ0aWNsZS52eSA9IGNvcyggdGhldGEgKSAqIGZvcmNlO1xuICBcbiAgXHRwYXJ0aWNsZXMucHVzaCggcGFydGljbGUgKTtcbiAgfVxuICBcbiAgcHJpY2luZ1NrZXRjaC51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0dmFyIGksIHBhcnRpY2xlO1xuICBcbiAgXHRmb3IgKCBpID0gcGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuICBcbiAgXHRcdHBhcnRpY2xlID0gcGFydGljbGVzW2ldO1xuICBcbiAgXHRcdGlmICggcGFydGljbGUuYWxpdmUgKSBwYXJ0aWNsZS5tb3ZlKCk7XG4gIFx0XHRlbHNlIHBvb2wucHVzaCggcGFydGljbGVzLnNwbGljZSggaSwgMSApWzBdICk7XG4gIFx0fVxuICB9O1xuICBcbiAgcHJpY2luZ1NrZXRjaC5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdHByaWNpbmdTa2V0Y2guZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uICA9ICdsaWdodGVyJztcbiAgXHRcbiAgXHRmb3IgKCB2YXIgaSA9IHBhcnRpY2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcbiAgXHRcdHBhcnRpY2xlc1tpXS5kcmF3KCBwcmljaW5nU2tldGNoICk7XG4gIFx0fVxuICB9O1xuICBcbiAgcHJpY2luZ1NrZXRjaC5tb3VzZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0dmFyIHBhcnRpY2xlLCB0aGV0YSwgZm9yY2UsIHRvdWNoLCBtYXgsIGksIGosIG47XG4gIFxuICBcdGZvciAoIGkgPSAwLCBuID0gcHJpY2luZ1NrZXRjaC50b3VjaGVzLmxlbmd0aDsgaSA8IG47IGkrKyApIHtcbiAgXG4gIFx0XHR0b3VjaCA9IHByaWNpbmdTa2V0Y2gudG91Y2hlc1tpXSwgbWF4ID0gcmFuZG9tKCAxLCA0ICk7XG4gIFx0XHRmb3IgKCBqID0gMDsgaiA8IG1heDsgaisrICkgcHJpY2luZ1NrZXRjaC5zcGF3biggdG91Y2gueCwgdG91Y2gueSApO1xuICBcdH1cbiAgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcmljaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBDb3B5cmlnaHQgKEMpIDIwMTMgSnVzdGluIFdpbmRsZSwgaHR0cDovL3NvdWx3aXJlLmNvLnVrICovXG5cbihmdW5jdGlvbiAoIHJvb3QsIGZhY3RvcnkgKSB7XG5cbiAgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAvLyBDb21tb25KUyBsaWtlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QsIHJvb3QuZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcblxuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZnVuY3Rpb24oKSB7IHJldHVybiBmYWN0b3J5KCByb290LCByb290LmRvY3VtZW50ICk7IH0pO1xuXG4gIH0gZWxzZSB7XG5cbiAgICAvLyBCcm93c2VyIGdsb2JhbFxuICAgIHJvb3QuU2tldGNoID0gZmFjdG9yeSggcm9vdCwgcm9vdC5kb2N1bWVudCApO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiAoIHdpbmRvdywgZG9jdW1lbnQgKSB7XG5cblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBDb25maWdcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIE1BVEhfUFJPUFMgPSAnRSBMTjEwIExOMiBMT0cyRSBMT0cxMEUgUEkgU1FSVDFfMiBTUVJUMiBhYnMgYWNvcyBhc2luIGF0YW4gY2VpbCBjb3MgZXhwIGZsb29yIGxvZyByb3VuZCBzaW4gc3FydCB0YW4gYXRhbjIgcG93IG1heCBtaW4nLnNwbGl0KCAnICcgKTtcbiAgdmFyIEhBU19TS0VUQ0ggPSAnX19oYXNTa2V0Y2gnO1xuICB2YXIgTSA9IE1hdGg7XG5cbiAgdmFyIENBTlZBUyA9ICdjYW52YXMnO1xuICB2YXIgV0VCR0wgPSAnd2ViZ2wnO1xuICB2YXIgRE9NID0gJ2RvbSc7XG5cbiAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIHZhciBpbnN0YW5jZXMgPSBbXTtcblxuICB2YXIgZGVmYXVsdHMgPSB7XG5cbiAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgIGF1dG9zdGFydDogdHJ1ZSxcbiAgICBhdXRvY2xlYXI6IHRydWUsXG4gICAgYXV0b3BhdXNlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogZG9jLmJvZHksXG4gICAgaW50ZXJ2YWw6IDEsXG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICByZXRpbmE6IGZhbHNlLFxuICAgIHR5cGU6IENBTlZBU1xuICB9O1xuXG4gIHZhciBrZXlNYXAgPSB7XG5cbiAgICAgODogJ0JBQ0tTUEFDRScsXG4gICAgIDk6ICdUQUInLFxuICAgIDEzOiAnRU5URVInLFxuICAgIDE2OiAnU0hJRlQnLFxuICAgIDI3OiAnRVNDQVBFJyxcbiAgICAzMjogJ1NQQUNFJyxcbiAgICAzNzogJ0xFRlQnLFxuICAgIDM4OiAnVVAnLFxuICAgIDM5OiAnUklHSFQnLFxuICAgIDQwOiAnRE9XTidcbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBVdGlsaXRpZXNcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgZnVuY3Rpb24gaXNBcnJheSggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggb2JqZWN0ICkgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdmdW5jdGlvbic7XG4gIH1cblxuICBmdW5jdGlvbiBpc051bWJlciggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ251bWJlcic7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cmluZyggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ3N0cmluZyc7XG4gIH1cblxuICBmdW5jdGlvbiBrZXlOYW1lKCBjb2RlICkge1xuXG4gICAgcmV0dXJuIGtleU1hcFsgY29kZSBdIHx8IFN0cmluZy5mcm9tQ2hhckNvZGUoIGNvZGUgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dGVuZCggdGFyZ2V0LCBzb3VyY2UsIG92ZXJ3cml0ZSApIHtcblxuICAgIGZvciAoIHZhciBrZXkgaW4gc291cmNlIClcblxuICAgICAgaWYgKCBvdmVyd3JpdGUgfHwgISgga2V5IGluIHRhcmdldCApIClcblxuICAgICAgICB0YXJnZXRbIGtleSBdID0gc291cmNlWyBrZXkgXTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eSggbWV0aG9kLCBjb250ZXh0ICkge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXG4gICAgICBtZXRob2QuYXBwbHkoIGNvbnRleHQsIGFyZ3VtZW50cyApO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZSggdGFyZ2V0ICkge1xuXG4gICAgdmFyIG9iamVjdCA9IHt9O1xuXG4gICAgZm9yICggdmFyIGtleSBpbiB0YXJnZXQgKSB7XG4gICAgICBcbiAgICAgIGlmICgga2V5ID09PSAnd2Via2l0TW92ZW1lbnRYJyB8fCBrZXkgPT09ICd3ZWJraXRNb3ZlbWVudFknIClcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmICggaXNGdW5jdGlvbiggdGFyZ2V0WyBrZXkgXSApIClcblxuICAgICAgICBvYmplY3RbIGtleSBdID0gcHJveHkoIHRhcmdldFsga2V5IF0sIHRhcmdldCApO1xuXG4gICAgICBlbHNlXG5cbiAgICAgICAgb2JqZWN0WyBrZXkgXSA9IHRhcmdldFsga2V5IF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIENvbnN0cnVjdG9yXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCBjb250ZXh0ICkge1xuXG4gICAgdmFyIHJlcXVlc3QsIGhhbmRsZXIsIHRhcmdldCwgcGFyZW50LCBib3VuZHMsIGluZGV4LCBzdWZmaXgsIGNsb2NrLCBub2RlLCBjb3B5LCB0eXBlLCBrZXksIHZhbCwgbWluLCBtYXgsIHcsIGg7XG5cbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIHRvdWNoZXMgPSBbXTtcbiAgICB2YXIgcmVzaXplZCA9IGZhbHNlO1xuICAgIHZhciBzZXR1cCA9IGZhbHNlO1xuICAgIHZhciByYXRpbyA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgdmFyIGlzRGl2ID0gY29udGV4dC50eXBlID09IERPTTtcbiAgICB2YXIgaXMyRCA9IGNvbnRleHQudHlwZSA9PSBDQU5WQVM7XG5cbiAgICB2YXIgbW91c2UgPSB7XG4gICAgICB4OiAgMC4wLCB5OiAgMC4wLFxuICAgICAgb3g6IDAuMCwgb3k6IDAuMCxcbiAgICAgIGR4OiAwLjAsIGR5OiAwLjBcbiAgICB9O1xuXG4gICAgdmFyIGV2ZW50TWFwID0gW1xuXG4gICAgICBjb250ZXh0LmV2ZW50VGFyZ2V0IHx8IGNvbnRleHQuZWxlbWVudCxcblxuICAgICAgICBwb2ludGVyLCAnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2Vtb3ZlJywgJ3RvdWNobW92ZScsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZXVwJywgJ3RvdWNoZW5kJyxcbiAgICAgICAgcG9pbnRlciwgJ2NsaWNrJyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlb3V0JyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlb3ZlcicsXG5cbiAgICAgIGRvYyxcblxuICAgICAgICBrZXlwcmVzcywgJ2tleWRvd24nLCAna2V5dXAnLFxuXG4gICAgICB3aW4sXG5cbiAgICAgICAgYWN0aXZlLCAnZm9jdXMnLCAnYmx1cicsXG4gICAgICAgIHJlc2l6ZSwgJ3Jlc2l6ZSdcbiAgICBdO1xuXG4gICAgdmFyIGtleXMgPSB7fTsgZm9yICgga2V5IGluIGtleU1hcCApIGtleXNbIGtleU1hcFsga2V5IF0gXSA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciggbWV0aG9kICkge1xuXG4gICAgICBpZiAoIGlzRnVuY3Rpb24oIG1ldGhvZCApIClcblxuICAgICAgICBtZXRob2QuYXBwbHkoIGNvbnRleHQsIFtdLnNwbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmQoIG9uICkge1xuXG4gICAgICBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRNYXAubGVuZ3RoOyBpbmRleCsrICkge1xuXG4gICAgICAgIG5vZGUgPSBldmVudE1hcFsgaW5kZXggXTtcblxuICAgICAgICBpZiAoIGlzU3RyaW5nKCBub2RlICkgKVxuXG4gICAgICAgICAgdGFyZ2V0WyAoIG9uID8gJ2FkZCcgOiAncmVtb3ZlJyApICsgJ0V2ZW50TGlzdGVuZXInIF0uY2FsbCggdGFyZ2V0LCBub2RlLCBoYW5kbGVyLCBmYWxzZSApO1xuXG4gICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKCBub2RlICkgKVxuXG4gICAgICAgICAgaGFuZGxlciA9IG5vZGU7XG5cbiAgICAgICAgZWxzZSB0YXJnZXQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuICAgICAgY0FGKCByZXF1ZXN0ICk7XG4gICAgICByZXF1ZXN0ID0gckFGKCB1cGRhdGUgKTtcblxuICAgICAgaWYgKCAhc2V0dXAgKSB7XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5zZXR1cCApO1xuICAgICAgICBzZXR1cCA9IGlzRnVuY3Rpb24oIGNvbnRleHQuc2V0dXAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCAhcmVzaXplZCApIHtcbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5yZXNpemUgKTtcbiAgICAgICAgcmVzaXplZCA9IGlzRnVuY3Rpb24oIGNvbnRleHQucmVzaXplICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggY29udGV4dC5ydW5uaW5nICYmICFjb3VudGVyICkge1xuXG4gICAgICAgIGNvbnRleHQuZHQgPSAoIGNsb2NrID0gK25ldyBEYXRlKCkgKSAtIGNvbnRleHQubm93O1xuICAgICAgICBjb250ZXh0Lm1pbGxpcyArPSBjb250ZXh0LmR0O1xuICAgICAgICBjb250ZXh0Lm5vdyA9IGNsb2NrO1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQudXBkYXRlICk7XG5cbiAgICAgICAgLy8gUHJlIGRyYXdcblxuICAgICAgICBpZiAoIGlzMkQgKSB7XG5cbiAgICAgICAgICBpZiAoIGNvbnRleHQucmV0aW5hICkge1xuXG4gICAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvbnRleHQuYXV0b2NsZWFyKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoIHJhdGlvLCByYXRpbyApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICggY29udGV4dC5hdXRvY2xlYXIgKVxuXG4gICAgICAgICAgICBjb250ZXh0LmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEcmF3XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5kcmF3ICk7XG5cbiAgICAgICAgLy8gUG9zdCBkcmF3XG5cbiAgICAgICAgaWYgKCBpczJEICYmIGNvbnRleHQucmV0aW5hIClcblxuICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuXG4gICAgICBjb3VudGVyID0gKytjb3VudGVyICUgY29udGV4dC5pbnRlcnZhbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemUoKSB7XG5cbiAgICAgIHRhcmdldCA9IGlzRGl2ID8gY29udGV4dC5zdHlsZSA6IGNvbnRleHQuY2FudmFzO1xuICAgICAgc3VmZml4ID0gaXNEaXYgPyAncHgnIDogJyc7XG5cbiAgICAgIHcgPSBjb250ZXh0LndpZHRoO1xuICAgICAgaCA9IGNvbnRleHQuaGVpZ2h0O1xuXG4gICAgICBpZiAoIGNvbnRleHQuZnVsbHNjcmVlbiApIHtcblxuICAgICAgICBoID0gY29udGV4dC5oZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gICAgICAgIHcgPSBjb250ZXh0LndpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICggY29udGV4dC5yZXRpbmEgJiYgaXMyRCAmJiByYXRpbyApIHtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG4gICAgICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuXG4gICAgICAgIHcgKj0gcmF0aW87XG4gICAgICAgIGggKj0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIGlmICggdGFyZ2V0LmhlaWdodCAhPT0gaCApXG5cbiAgICAgICAgdGFyZ2V0LmhlaWdodCA9IGggKyBzdWZmaXg7XG5cbiAgICAgIGlmICggdGFyZ2V0LndpZHRoICE9PSB3IClcblxuICAgICAgICB0YXJnZXQud2lkdGggPSB3ICsgc3VmZml4O1xuXG4gICAgICBpZiAoIGlzMkQgJiYgIWNvbnRleHQuYXV0b2NsZWFyICYmIGNvbnRleHQucmV0aW5hIClcblxuICAgICAgICBjb250ZXh0LnNjYWxlKCByYXRpbywgcmF0aW8gKTtcblxuICAgICAgaWYgKCBzZXR1cCApIHRyaWdnZXIoIGNvbnRleHQucmVzaXplICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxpZ24oIHRvdWNoLCB0YXJnZXQgKSB7XG5cbiAgICAgIGJvdW5kcyA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgdG91Y2gueCA9IHRvdWNoLnBhZ2VYIC0gYm91bmRzLmxlZnQgLSAod2luLnNjcm9sbFggfHwgd2luLnBhZ2VYT2Zmc2V0KTtcbiAgICAgIHRvdWNoLnkgPSB0b3VjaC5wYWdlWSAtIGJvdW5kcy50b3AgLSAod2luLnNjcm9sbFkgfHwgd2luLnBhZ2VZT2Zmc2V0KTtcblxuICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF1Z21lbnQoIHRvdWNoLCB0YXJnZXQgKSB7XG5cbiAgICAgIGFsaWduKCB0b3VjaCwgY29udGV4dC5lbGVtZW50ICk7XG5cbiAgICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcblxuICAgICAgdGFyZ2V0Lm94ID0gdGFyZ2V0LnggfHwgdG91Y2gueDtcbiAgICAgIHRhcmdldC5veSA9IHRhcmdldC55IHx8IHRvdWNoLnk7XG5cbiAgICAgIHRhcmdldC54ID0gdG91Y2gueDtcbiAgICAgIHRhcmdldC55ID0gdG91Y2gueTtcblxuICAgICAgdGFyZ2V0LmR4ID0gdGFyZ2V0LnggLSB0YXJnZXQub3g7XG4gICAgICB0YXJnZXQuZHkgPSB0YXJnZXQueSAtIHRhcmdldC5veTtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzKCBldmVudCApIHtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29weSA9IGNsb25lKCBldmVudCApO1xuICAgICAgY29weS5vcmlnaW5hbEV2ZW50ID0gZXZlbnQ7XG5cbiAgICAgIGlmICggY29weS50b3VjaGVzICkge1xuXG4gICAgICAgIHRvdWNoZXMubGVuZ3RoID0gY29weS50b3VjaGVzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgY29weS50b3VjaGVzLmxlbmd0aDsgaW5kZXgrKyApXG5cbiAgICAgICAgICB0b3VjaGVzWyBpbmRleCBdID0gYXVnbWVudCggY29weS50b3VjaGVzWyBpbmRleCBdLCB0b3VjaGVzWyBpbmRleCBdICk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdG91Y2hlcy5sZW5ndGggPSAwO1xuICAgICAgICB0b3VjaGVzWzBdID0gYXVnbWVudCggY29weSwgbW91c2UgKTtcbiAgICAgIH1cblxuICAgICAgZXh0ZW5kKCBtb3VzZSwgdG91Y2hlc1swXSwgdHJ1ZSApO1xuXG4gICAgICByZXR1cm4gY29weTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb2ludGVyKCBldmVudCApIHtcblxuICAgICAgZXZlbnQgPSBwcm9jZXNzKCBldmVudCApO1xuXG4gICAgICBtaW4gPSAoIG1heCA9IGV2ZW50TWFwLmluZGV4T2YoIHR5cGUgPSBldmVudC50eXBlICkgKSAtIDE7XG5cbiAgICAgIGNvbnRleHQuZHJhZ2dpbmcgPVxuXG4gICAgICAgIC9kb3dufHN0YXJ0Ly50ZXN0KCB0eXBlICkgPyB0cnVlIDpcblxuICAgICAgICAvdXB8ZW5kLy50ZXN0KCB0eXBlICkgPyBmYWxzZSA6XG5cbiAgICAgICAgY29udGV4dC5kcmFnZ2luZztcblxuICAgICAgd2hpbGUoIG1pbiApXG5cbiAgICAgICAgaXNTdHJpbmcoIGV2ZW50TWFwWyBtaW4gXSApID9cblxuICAgICAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50TWFwWyBtaW4tLSBdIF0sIGV2ZW50ICkgOlxuXG4gICAgICAgIGlzU3RyaW5nKCBldmVudE1hcFsgbWF4IF0gKSA/XG5cbiAgICAgICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudE1hcFsgbWF4KysgXSBdLCBldmVudCApIDpcblxuICAgICAgICBtaW4gPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleXByZXNzKCBldmVudCApIHtcblxuICAgICAga2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICAgIHZhbCA9IGV2ZW50LnR5cGUgPT0gJ2tleXVwJztcbiAgICAgIGtleXNbIGtleSBdID0ga2V5c1sga2V5TmFtZSgga2V5ICkgXSA9ICF2YWw7XG5cbiAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50LnR5cGUgXSwgZXZlbnQgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmUoIGV2ZW50ICkge1xuXG4gICAgICBpZiAoIGNvbnRleHQuYXV0b3BhdXNlIClcblxuICAgICAgICAoIGV2ZW50LnR5cGUgPT0gJ2JsdXInID8gc3RvcCA6IHN0YXJ0ICkoKTtcblxuICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnQudHlwZSBdLCBldmVudCApO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBBUElcblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gICAgICBjb250ZXh0Lm5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgICAgY29udGV4dC5ydW5uaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuXG4gICAgICBjb250ZXh0LnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cbiAgICAgICggY29udGV4dC5ydW5uaW5nID8gc3RvcCA6IHN0YXJ0ICkoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcblxuICAgICAgaWYgKCBpczJEIClcblxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCggMCwgMCwgY29udGV4dC53aWR0aCAqIHJhdGlvLCBjb250ZXh0LmhlaWdodCAqIHJhdGlvICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcblxuICAgICAgcGFyZW50ID0gY29udGV4dC5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBpbmRleCA9IGluc3RhbmNlcy5pbmRleE9mKCBjb250ZXh0ICk7XG5cbiAgICAgIGlmICggcGFyZW50ICkgcGFyZW50LnJlbW92ZUNoaWxkKCBjb250ZXh0LmVsZW1lbnQgKTtcbiAgICAgIGlmICggfmluZGV4ICkgaW5zdGFuY2VzLnNwbGljZSggaW5kZXgsIDEgKTtcblxuICAgICAgYmluZCggZmFsc2UgKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG5cbiAgICBleHRlbmQoIGNvbnRleHQsIHtcblxuICAgICAgdG91Y2hlczogdG91Y2hlcyxcbiAgICAgIG1vdXNlOiBtb3VzZSxcbiAgICAgIGtleXM6IGtleXMsXG5cbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgbWlsbGlzOiAwLFxuICAgICAgbm93OiBOYU4sXG4gICAgICBkdDogTmFOLFxuXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgICBjbGVhcjogY2xlYXIsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBzdG9wOiBzdG9wXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZXMucHVzaCggY29udGV4dCApO1xuXG4gICAgcmV0dXJuICggY29udGV4dC5hdXRvc3RhcnQgJiYgc3RhcnQoKSwgYmluZCggdHJ1ZSApLCByZXNpemUoKSwgdXBkYXRlKCksIGNvbnRleHQgKTtcbiAgfVxuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIEdsb2JhbCBBUElcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIGVsZW1lbnQsIGNvbnRleHQsIFNrZXRjaCA9IHtcblxuICAgIENBTlZBUzogQ0FOVkFTLFxuICAgIFdFQl9HTDogV0VCR0wsXG4gICAgV0VCR0w6IFdFQkdMLFxuICAgIERPTTogRE9NLFxuXG4gICAgaW5zdGFuY2VzOiBpbnN0YW5jZXMsXG5cbiAgICBpbnN0YWxsOiBmdW5jdGlvbiggY29udGV4dCApIHtcblxuICAgICAgaWYgKCAhY29udGV4dFsgSEFTX1NLRVRDSCBdICkge1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IE1BVEhfUFJPUFMubGVuZ3RoOyBpKysgKVxuXG4gICAgICAgICAgY29udGV4dFsgTUFUSF9QUk9QU1tpXSBdID0gTVsgTUFUSF9QUk9QU1tpXSBdO1xuXG4gICAgICAgIGV4dGVuZCggY29udGV4dCwge1xuXG4gICAgICAgICAgVFdPX1BJOiBNLlBJICogMixcbiAgICAgICAgICBIQUxGX1BJOiBNLlBJIC8gMixcbiAgICAgICAgICBRVUFSVEVSX1BJOiBNLlBJIC8gNCxcblxuICAgICAgICAgIHJhbmRvbTogZnVuY3Rpb24oIG1pbiwgbWF4ICkge1xuXG4gICAgICAgICAgICBpZiAoIGlzQXJyYXkoIG1pbiApIClcblxuICAgICAgICAgICAgICByZXR1cm4gbWluWyB+figgTS5yYW5kb20oKSAqIG1pbi5sZW5ndGggKSBdO1xuXG4gICAgICAgICAgICBpZiAoICFpc051bWJlciggbWF4ICkgKVxuXG4gICAgICAgICAgICAgIG1heCA9IG1pbiB8fCAxLCBtaW4gPSAwO1xuXG4gICAgICAgICAgICByZXR1cm4gbWluICsgTS5yYW5kb20oKSAqICggbWF4IC0gbWluICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGxlcnA6IGZ1bmN0aW9uKCBtaW4sIG1heCwgYW1vdW50ICkge1xuXG4gICAgICAgICAgICByZXR1cm4gbWluICsgYW1vdW50ICogKCBtYXggLSBtaW4gKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbWFwOiBmdW5jdGlvbiggbnVtLCBtaW5BLCBtYXhBLCBtaW5CLCBtYXhCICkge1xuXG4gICAgICAgICAgICByZXR1cm4gKCBudW0gLSBtaW5BICkgLyAoIG1heEEgLSBtaW5BICkgKiAoIG1heEIgLSBtaW5CICkgKyBtaW5CO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGV4dFsgSEFTX1NLRVRDSCBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuICAgICAgb3B0aW9ucyA9IGV4dGVuZCggb3B0aW9ucyB8fCB7fSwgZGVmYXVsdHMgKTtcblxuICAgICAgaWYgKCBvcHRpb25zLmdsb2JhbHMgKSBTa2V0Y2guaW5zdGFsbCggc2VsZiApO1xuXG4gICAgICBlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50IHx8IGRvYy5jcmVhdGVFbGVtZW50KCBvcHRpb25zLnR5cGUgPT09IERPTSA/ICdkaXYnIDogJ2NhbnZhcycgKTtcblxuICAgICAgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgc3dpdGNoKCBvcHRpb25zLnR5cGUgKSB7XG5cbiAgICAgICAgICBjYXNlIENBTlZBUzpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29udGV4dCggJzJkJywgb3B0aW9ucyApO1xuXG4gICAgICAgICAgY2FzZSBXRUJHTDpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29udGV4dCggJ3dlYmdsJywgb3B0aW9ucyApIHx8IGVsZW1lbnQuZ2V0Q29udGV4dCggJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIG9wdGlvbnMgKTtcblxuICAgICAgICAgIGNhc2UgRE9NOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jYW52YXMgPSBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgIH0pKCk7XG5cbiAgICAgICggb3B0aW9ucy5jb250YWluZXIgfHwgZG9jLmJvZHkgKS5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG4gICAgICByZXR1cm4gU2tldGNoLmF1Z21lbnQoIGNvbnRleHQsIG9wdGlvbnMgKTtcbiAgICB9LFxuXG4gICAgYXVnbWVudDogZnVuY3Rpb24oIGNvbnRleHQsIG9wdGlvbnMgKSB7XG5cbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoIG9wdGlvbnMgfHwge30sIGRlZmF1bHRzICk7XG5cbiAgICAgIG9wdGlvbnMuZWxlbWVudCA9IGNvbnRleHQuY2FudmFzIHx8IGNvbnRleHQ7XG4gICAgICBvcHRpb25zLmVsZW1lbnQuY2xhc3NOYW1lICs9ICcgc2tldGNoJztcblxuICAgICAgZXh0ZW5kKCBjb250ZXh0LCBvcHRpb25zLCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RvciggY29udGV4dCApO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBTaGltc1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgdmVuZG9ycyA9IFsgJ21zJywgJ21veicsICd3ZWJraXQnLCAnbycgXTtcbiAgdmFyIHNjb3BlID0gc2VsZjtcbiAgdmFyIHRoZW4gPSAwO1xuXG4gIHZhciBhID0gJ0FuaW1hdGlvbkZyYW1lJztcbiAgdmFyIGIgPSAncmVxdWVzdCcgKyBhO1xuICB2YXIgYyA9ICdjYW5jZWwnICsgYTtcblxuICB2YXIgckFGID0gc2NvcGVbIGIgXTtcbiAgdmFyIGNBRiA9IHNjb3BlWyBjIF07XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXJBRjsgaSsrICkge1xuXG4gICAgckFGID0gc2NvcGVbIHZlbmRvcnNbIGkgXSArICdSZXF1ZXN0JyArIGEgXTtcbiAgICBjQUYgPSBzY29wZVsgdmVuZG9yc1sgaSBdICsgJ0NhbmNlbCcgKyBhIF07XG4gIH1cblxuICBzY29wZVsgYiBdID0gckFGID0gckFGIHx8IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcblxuICAgIHZhciBub3cgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgZHQgPSBNLm1heCggMCwgMTYgLSAoIG5vdyAtIHRoZW4gKSApO1xuICAgIHZhciBpZCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgY2FsbGJhY2soIG5vdyArIGR0ICk7XG4gICAgfSwgZHQgKTtcblxuICAgIHRoZW4gPSBub3cgKyBkdDtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgc2NvcGVbIGMgXSA9IGNBRiA9IGNBRiB8fCBmdW5jdGlvbiggaWQgKSB7XG4gICAgY2xlYXJUaW1lb3V0KCBpZCApO1xuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIE91dHB1dFxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICByZXR1cm4gU2tldGNoO1xuXG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL3NrZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMb2NhdGlvblZpZXcgPSAoZnVuY3Rpb24oKXtcbiAgICB2YXIgc2NvcGUgPSB7fTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gc2NvcGU7XG59KSgpO1xuXG5Mb2NhdGlvblZpZXcuYWN0aXZhdGUoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9sb2NhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=