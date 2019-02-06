webpackJsonp([1],{

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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_all_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_all_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_marketing_events_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_marketing_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_marketing_events_js__);
__webpack_require__(174);




var beingDisplayed = false;
window.onscroll = function() {
    var stickyNav = document.querySelector(".call-to-action-nav");
    if (!beingDisplayed && this.scrollY > 250) {
        beingDisplayed = true;
        stickyNav.style.display = "flex";
    }
    else if (beingDisplayed && this.scrollY <= 250) {
        beingDisplayed = false;
        stickyNav.style.display = "none";
    }
};

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

},[173]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvYWxsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9sYW5kaW5nLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvbGFuZGluZy5zY3NzPzAxYTYiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtB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QUNBLHdEQUF3RCxhQUFhO0FBQ3JFOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0M7O0FBRUE7QUFDQTs7QUFFQSxnRDtBQUNBLENBQUM7QUFDRCwrQzs7QUFFQTtBQUNBOztBQUVBLGdEO0FBQ0EsQ0FBQztBQUNELHNDQUFzQyxnREFBZ0QsRUFBRTtBQUN4RjtBQUNBO0FBQ0Esa0Q7QUFDQSxDQUFDO0FBQ0QscUQ7QUFDQTtBQUNBLHVEO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7O0FDN0ZEO0FBQUE7QUFBZTtBQUNmLGVBQWUsbUJBQU8sQ0FBQyxFQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQyIsImZpbGUiOiJsYW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy92YXIgbmV3c2xldHRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtbmV3c2xldHRlciBmb3JtJyk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgIGlmKGZyb21Ub3A+MTAwKSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICBlbHNlICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xufSk7XG5cblxuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1OZXdzbGV0dGVyID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybU5ld3NsZXR0ZXIuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICBcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnbmV3c2xldHRlcl9zaWdudXAnLFxuICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1OZXdzbGV0dGVyLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybU5ld3NsZXR0ZXIuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChcIlRoZXJlIGhhcyBiZWVuIGFuIGVycm9yIHNpZ25pbmcgeW91IHVwXCIpO1xuICAgICAgfVxuICAgfSk7XG4gICBcbn0pO1xuXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybVN5bGxhYnVzID0gJCh0aGlzKTtcbiAgIHZhciBidXR0b24gPSBmb3JtU3lsbGFidXMuZmluZCgnYnV0dG9uJyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGZpcnN0TmFtZUZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgIHZhciBsb2NhdGlvbkZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJy5sb2NhdGlvbnMnKTtcbiAgIHZhciBsb2NhdGlvbiA9IGxvY2F0aW9uRmllbGQudmFsKCk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgdmFyIGZpcnN0TmFtZSA9IGZpcnN0TmFtZUZpZWxkLnZhbCgpO1xuICAgXG4gICBpZihlbWFpbCA9PSAnJyB8fCBmaXJzdE5hbWUgPT0nJylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnV2UgbmVlZCB5b3VyIGVtYWlsIGFuZCBmaXJzdCBuYW1lJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2UgaWYobG9jYXRpb249PScnIHx8IGxvY2F0aW9uPT0nc2VsZWN0JylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnUGxlYXNlIHNlbGVjdCBhIExvY2F0aW9uJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgIGJ1dHRvbi5odG1sKFwiTG9hZGluZy4uLlwiKTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWN0aW9uOiAnZG93bmxvYWRfc3lsbGFidXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICh0eXBlb2YgV1BBU19BUFAudGVtcGxhdGUgPT0gJ3N0cmluZycpID8gV1BBU19BUFAudGVtcGxhdGUucmVwbGFjZSgnc2luZ2xlLScsJycpIDogJ25vbmUnLFxuICAgICAgICAgICAgdXJsOiBXUEFTX0FQUC51cmwsXG4gICAgICAgICAgICB1dG1fbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lXG4gICAgICAgICB9LFxuICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoXCJEb3dubG9hZFwiKTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBmb3JtU3lsbGFidXMuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgJCgnI3N5bGxhYnVzTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgfSwyMDAwKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSxcbiAgICAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICBidXR0b24uaHRtbChcIkRvd25sb2FkXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCJUaGVyZSBoYXMgYmVlbiBhbiBlcnJvciBzaWduaW5nIHlvdSB1cFwiKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfSBcbiAgIFxufSk7XG5cbiQoJy5tb3JlLWluZm8tc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1TeWxsYWJ1cyA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGZpcnN0TmFtZUZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICB2YXIgZmlyc3ROYW1lID0gZmlyc3ROYW1lRmllbGQudmFsKCk7XG4gICBcbiAgIGlmKGVtYWlsID09ICcnIHx8IGZpcnN0TmFtZSA9PScnKVxuICAge1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCdXZSBuZWVkIHlvdXIgZW1haWwgYW5kIGZpcnN0IG5hbWUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgfVxuICAgZWxzZXtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgJC5hamF4KHtcbiAgICAgIHVybDogJy93cC1qc29uLzRnL3YxL2FwcGx5L3JlcXVlc3RfaW5mbycsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICB1cmw6IFdQQVNfQVBQLnVybCxcbiAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApIGZvcm1TeWxsYWJ1cy5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICBlbHNlIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3Igc2lnbmluZyB5b3UgdXBcIik7XG4gICAgICB9XG4gICB9KTtcbiAgIH0gXG4gICBcbn0pO1xuXG4oZnVuY3Rpb24gbG9hZEFsZXJ0cygpe1xuICAgdmFyIGRpc21pc3NlZEFsZXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkaXNtaXNzZWRfYWxlcnRzJyk7XG4gICBcbiAgIGlmKGRpc21pc3NlZEFsZXJ0cykgZGlzbWlzc2VkQWxlcnRzID0gZGlzbWlzc2VkQWxlcnRzLnNwbGl0KFwiLFwiKTtcbiAgIGVsc2UgZGlzbWlzc2VkQWxlcnRzID0gW107XG4gICBcbiAgIHZhciBhbGxBbGVydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtZGlzbWlzc2libGUnKTtcbiAgIGFsbEFsZXJ0cy5mb3JFYWNoKGZ1bmN0aW9uKGEpe1xuICAgICAgaWYoZGlzbWlzc2VkQWxlcnRzLmluZGV4T2YoYS5pZCkgPT0gLTEpe1xuICAgICAgICAgdmFyIGFsZXJ0VG9EaXNtaXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrYS5pZCk7XG4gICAgICAgICBhbGVydFRvRGlzbWlzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgfSk7XG4gICB2YXIgY2xvc2VBbGVydEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1kaXNtaXNzPWFsZXJ0XScpO1xuICAgY2xvc2VBbGVydEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihidG4pe1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgXHRjb25zb2xlLmxvZyh0aGlzLnBhcmVudE5vZGUpO1xuICAgICAgICAgaWYodHlwZW9mIHRoaXMucGFyZW50Tm9kZS5pZCA9PSAndW5kZWZpbmVkJykgXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGFuIGlkIGZvciBhbGwgdGhlIGRpc21pc2FibGUgYWxlcnRzJyk7XG4gICAgICBcdGRpc21pc3NlZEFsZXJ0cy5wdXNoKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gICAgICBcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkaXNtaXNzZWRfYWxlcnRzJyxkaXNtaXNzZWRBbGVydHMuam9pbignLCcpKTtcbiAgICAgIFx0dGhpcy5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgfSk7XG59KSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50J1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBwcm9tcHRVcGNvbWluZ0V2ZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50JyxcbiAgICAgICAgIHR5cGU6ICdpbnRyb190b19jb2RpbmcnXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpIGZpbGxVcGNvbWluZ0ludHJvVG9Db2RpbmcocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgdXBjb21pbmcgZXZlbnQ6IFwiK3AzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG4gICAvL2xvYWQgbG9jYXRpb25zXG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3dwLWpzb24vNGcvdjEvbG9jYXRpb25zP2xhbmc9JytXUEFTX0FQUC5sYW5nLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihsb2NhdGlvbnMpe1xuICAgICAgICAgaWYobG9jYXRpb25zKVxuICAgICAgICAge1xuICAgICAgICAgICAgJCgnI3N5bGxhYnVzTW9kYWwgLmxvY2F0aW9ucywgLnN5bGxhYnVzLWRvd25sb2FkIC5sb2NhdGlvbnMnKS5odG1sKFsnPG9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdCBhIGxvY2F0aW9uPC9vcHRpb24+J10uY29uY2F0KGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obCl7XG4gICAgICAgICAgICAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCInK2xbJ2FjX2xvY2F0aW9uX3NsdWcnXSsnXCI+JytsWydwb3N0X3RpdGxlJ10rJzwvb3B0aW9uPic7XG4gICAgICAgICAgICB9KSkuam9pbignJykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL21hcmsgZGVmYXVsdCBsb2NhdGlvblxuICAgICAgICAgICAgaWYodHlwZW9mIFdQQVNfQVBQICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICBpZih0eXBlb2YgV1BBU19BUFAuY2l0eV9zbHVnICE9PSAndW5kZWZpbmVkJyAmJiBXUEFTX0FQUC5jaXR5X3NsdWcgIT09ICcnKSBjb25zb2xlLmxvZyhcIklnbm9yaW5nIHVzZXIgbG9jYXRpb24gYmVjYXVzZSBoZSBzcGVjaWZpZWQgYSBkaWZmZXJlbnQgb25lXCIpO1xuICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgV1BBU19BUFAubGF0aXR1ZGUgIT09ICd1bmRlZmluZWQnICYmIFdQQVNfQVBQLmxhdGl0dWRlICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0ID0gY2xvc2VzdExvY2F0aW9uKHsgbGF0aXR1ZGU6IFdQQVNfQVBQLmxhdGl0dWRlLCBsb25naXR1ZGU6IFdQQVNfQVBQLmxvbmdpdHVkZSB9LCBsb2NhdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgJCgnLmNpdGllcy5kcm9wZG93bi1zZWxlY3RvciBidXR0b24gc3BhbicpLmh0bWwoY2xvc2VzdC5wb3N0X3RpdGxlKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSBhY2FkZW15IGxvY2F0aW9ucyBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxuICAgc2V0dXBQcmljZUNhbGN1bGF0b3IoKTtcbiAgIFxuICAgJChcIi5kcm9wZG93bi10b2dnbGVcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS50b2dnbGVDbGFzcyhcInNob3dcIik7XG4gICB9KTtcbiAgIFxuICAgdmFyIG1hc3RlcldoaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc3RoZWFkLXdoaXRlJyk7XG4gICBpZih0eXBlb2YgbWFzdGVyV2hpdGUgIT0gJ3VuZGVmaW5lZCcgJiYgbWFzdGVyV2hpdGUpe1xuICAgICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTsgXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnaW52ZXJ0ZWQnKTtcbiAgIH0gXG4gICBcbiAgIHN5bmNEYXRhTGF5ZXIoKTtcbn0pO1xuXG5mdW5jdGlvbiBzZXR1cFByaWNlQ2FsY3VsYXRvcigpe1xuICAgXG4gICB2YXIgUHJpY2VDYWxjdWxhdG9yID0gcmVxdWlyZSgnLi4vbGliL3ByaWNlQ2FsY3VsYXRvci5qcycpLmRlZmF1bHQ7XG4gICBjb25zdCBzbGlkZXJzID0gJCgnLnByaWNpbmctc2xpZGVyJyk7XG4gICBcbiAgIGlmKHNsaWRlcnMubGVuZ3RoID09PSAwKSBjb25zb2xlLmxvZygnVGhlcmUgaXMgbm8gc2xpZGVyIHRvIGxvYWQnKTtcbiAgIGVsc2V7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICAgdXJsOiAnL3dwLWpzb24vNGcvdjEvcHJpY2VzJyxcbiAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocHJpY2VzKXtcbiAgICAgICAgICAgIGlmKHByaWNlcyAmJiB0eXBlb2YgcHJpY2VzLmRhdGEgIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBwcmljZXMgPSBwcmljZXMuZGF0YTtcbiAgICAgICAgICAgICAgIHNsaWRlcnMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzbGlkZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBzbGlkZXIuZGF0YSgnbG9jYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdXJzZSA9IHNsaWRlci5kYXRhKCdjb3Vyc2UnKTtcbiAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBwcmljZXNbY291cnNlXSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHByaWNlc1tjb3Vyc2VdW2xvY2F0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIGNvbnNvbGUuZXJyb3IoJ1ByaWNlIG5vdCBmb3VuZCBmb3IgJytjb3Vyc2UrJyBhdCAnK2xvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHJlbmRlckxvY2F0aW9uUHJpY2VzKHNsaWRlciwgcHJpY2VzW2NvdXJzZV1bbG9jYXRpb25dKTtcbiAgICAgICAgICAgICAgICAgICAgIFByaWNlQ2FsY3VsYXRvcihzbGlkZXJzLCBwcmljZXNbY291cnNlXVtsb2NhdGlvbl0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBjb3Vyc2UgcHJpY2VzXCIpO1xuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9LFxuICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgYWNhZGVteSBwcmljZXMgXCIrcDMpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2F0aW9uUHJpY2VzKHNsaWRlciwgcHJpY2VzKXtcbiAgIGNvbnN0IHByaWNpbmdDb21wb25lbnQgPSBzbGlkZXIuY2xvc2VzdCgnLnByaWNpbmctY29tcG9uZW50Jyk7XG4gICBpZih0eXBlb2YgcHJpY2VzID09PSAndW5kZWZpbmVkJyl7XG4gICAgICBsZXQgY29udGVudCA9ICc8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+JztcbiAgICAgICAgIGNvbnRlbnQgKz0gJzxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYmxvY2sgY2FyZC1wcmltYXJ5IGNhcmQtaW52ZXJzZSBiZy15ZWxsb3cgbWItMyBwLTQgdGV4dC1jZW50ZXJcIj4nO1xuICAgICAgICAgICAgY29udGVudCArPSAnUHJpY2VzIGhhdmUgbm90IGJlZW4gZGVmaW5lZCB5ZXQnO1xuICAgICAgICAgY29udGVudCArPSAnPC9kaXY+JztcbiAgICAgIGNvbnRlbnQgKz0gJzwvZGl2Pic7XG4gICAgICBwcmljaW5nQ29tcG9uZW50Lmh0bWwoY29udGVudCk7XG4gICB9XG4gICBlbHNle1xuICAgICAgcHJpY2luZ0NvbXBvbmVudC5maW5kKCdbZGF0YS1jb25jZXB0PVwidXBmcm9udFwiXScpLmh0bWwocHJpY2VzWyd1cGZyb250J10pO1xuICAgICAgcHJpY2luZ0NvbXBvbmVudC5maW5kKCdbZGF0YS1jb25jZXB0PVwibW9udGhseVwiXScpLmh0bWwocHJpY2VzWydmaW5hbmNlZCddWzBdKTtcbiAgICAgIFxuICAgfVxufVxuXG5mdW5jdGlvbiBwcm9tcHRVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIFxuICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BvcFN0YXRlJykgIT0gJ3Nob3duJyl7XG4gICAgICBmaWxsVXBjb21pbmdFdmVudChldmVudCk7XG4gICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikuZGVsYXkoMjAwMCkuZmFkZUluKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9wU3RhdGUnLCdzaG93bicpO1xuICAgICAgJCgnI3VwY29taW5nRXZlbnQnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBwdXQgeW91ciBkZWZhdWx0IGV2ZW50IGhlcmVcbiAgICAgICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgfVxufVxuXG5mdW5jdGlvbiBmaWxsVXBjb21pbmdJbnRyb1RvQ29kaW5nKGV2ZW50KXtcbiAgIHZhciBtb2RhbCA9ICQoJyNmcmVlQ29kaW5nSW50cm9Nb2RhbCcpO1xuICAgbW9kYWwuZmluZCgnLmRhdGUnKS5odG1sKGV2ZW50LmRheSsnICcrZXZlbnQubW9udGgrJyAnK2V2ZW50LnllYXIpO1xuICAgbW9kYWwuZmluZCgnLmxvY2F0aW9uJykuaHRtbChldmVudC5hZGRyZXNzKTtcbiAgIG1vZGFsLmZpbmQoJy5idG4tZGFuZ2VyJykuYXR0cignaHJlZicsZXZlbnQudXJsKTtcbiAgIFxufVxuZnVuY3Rpb24gZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI3VwY29taW5nRXZlbnQnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXknKS5odG1sKGV2ZW50LmRheSk7XG4gICBtb2RhbC5maW5kKCcubW9udGgnKS5odG1sKGV2ZW50Lm1vbnRoKTtcbiAgIG1vZGFsLmZpbmQoJy55ZWFyJykuaHRtbChldmVudC55ZWFyKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LXRpdGxlJykuaHRtbChldmVudC5uYW1lKTtcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXRhaWxzJykuaHRtbCgnPHNwYW4gY2xhc3M9XCJpbW9vbiBpY29uLWxvY2F0aW9uXCI+PC9zcGFuPicgKyBldmVudC5hZGRyZXNzKTsvLzM6MzBwbSAtIGF0IFN0YXJ0aHViLCBEb3dudG93biBNaWFtaVxuICAgXG4gICBcbiAgIHZhciBtYXhMZW5ndGggPSAzNTA7IC8vIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gZXh0cmFjdFxuICAgdmFyIHRyaW1tZWRTdHJpbmcgPSBldmVudC5kZXNjcmlwdGlvbi5zdWJzdHIoMCwgbWF4TGVuZ3RoKTsvL3RyaW0gdGhlIHN0cmluZyB0byB0aGUgbWF4aW11bSBsZW5ndGhcbiAgIHRyaW1tZWRTdHJpbmcgPSB0cmltbWVkU3RyaW5nLnN1YnN0cigwLCBNYXRoLm1pbih0cmltbWVkU3RyaW5nLmxlbmd0aCwgdHJpbW1lZFN0cmluZy5sYXN0SW5kZXhPZihcIi5cIikpKTsvL3JlLXRyaW0gaWYgd2UgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSB3b3JkXG4gICBtb2RhbC5maW5kKCcuZXZlbnQtZGVzY3JpcHRpb24nKS5odG1sKHRyaW1tZWRTdHJpbmcrJy4nKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC51cmwpO1xuICAgXG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3RMb2NhdGlvbih0YXJnZXRMb2NhdGlvbiwgbG9jYXRpb25EYXRhKSB7XG4gICAgZnVuY3Rpb24gdmVjdG9yRGlzdGFuY2UoZHgsIGR5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2F0aW9uRGlzdGFuY2UobG9jYXRpb24xLCBsb2NhdGlvbjIpIHtcbiAgICAgICAgdmFyIGR4ID0gbG9jYXRpb24xLmxhdGl0dWRlIC0gbG9jYXRpb24yLmxhdGl0dWRlLFxuICAgICAgICAgICAgZHkgPSBsb2NhdGlvbjEubG9uZ2l0dWRlIC0gbG9jYXRpb24yLmxvbmdpdHVkZTtcblxuICAgICAgICByZXR1cm4gdmVjdG9yRGlzdGFuY2UoZHgsIGR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYXRpb25EYXRhLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJyKSB7XG4gICAgICAgIHZhciBwcmV2RGlzdGFuY2UgPSBsb2NhdGlvbkRpc3RhbmNlKHRhcmdldExvY2F0aW9uICwgcHJldiksXG4gICAgICAgICAgICBjdXJyRGlzdGFuY2UgPSBsb2NhdGlvbkRpc3RhbmNlKHRhcmdldExvY2F0aW9uICwgY3Vycik7XG4gICAgICAgIHJldHVybiAocHJldkRpc3RhbmNlIDwgY3VyckRpc3RhbmNlKSA/IHByZXYgOiBjdXJyO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzeW5jRGF0YUxheWVyKCl7XG4gICBcbiAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgaWYodHlwZW9mIFdQQVNfQVBQICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICBkYXRhTGF5ZXIucHVzaCh7IGNpdHk6IFdQQVNfQVBQLmNpdHkgfSk7XG4gICAgICAgICBkYXRhTGF5ZXIucHVzaCh7IGNpdHlfc2x1ZzogV1BBU19BUFAuY2l0eV9zbHVnIH0pO1xuICAgICAgICAgZGF0YUxheWVyLnB1c2goeyBjb3VudHJ5X25hbWU6IFdQQVNfQVBQLmNvdW50cnlfbmFtZSB9KTtcbiAgICAgICAgIGRhdGFMYXllci5wdXNoKHsgbGFuZzogV1BBU19BUFAubGFuZyB9KTtcbiAgICAgICAgIGRhdGFMYXllci5wdXNoKHsgY2l0eTogV1BBU19BUFAuY2l0eSB9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgfSBcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwicmVxdWlyZSgnLi4vc3R5bGVzL2xhbmRpbmcuc2NzcycpO1xuXG5pbXBvcnQgJy4vcGFnZXMvYWxsLmpzJztcbmltcG9ydCAnLi9jb21tb24vbWFya2V0aW5nLWV2ZW50cy5qcyc7XG5cbnZhciBiZWluZ0Rpc3BsYXllZCA9IGZhbHNlO1xud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0aWNreU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsbC10by1hY3Rpb24tbmF2XCIpO1xuICAgIGlmICghYmVpbmdEaXNwbGF5ZWQgJiYgdGhpcy5zY3JvbGxZID4gMjUwKSB7XG4gICAgICAgIGJlaW5nRGlzcGxheWVkID0gdHJ1ZTtcbiAgICAgICAgc3RpY2t5TmF2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYmVpbmdEaXNwbGF5ZWQgJiYgdGhpcy5zY3JvbGxZIDw9IDI1MCkge1xuICAgICAgICBiZWluZ0Rpc3BsYXllZCA9IGZhbHNlO1xuICAgICAgICBzdGlja3lOYXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGFuZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvc3R5bGVzL2xhbmRpbmcuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImZ1bmN0aW9uIG9uUGFnZVZpZXcodXJsQ29udGFpbnMsIGNhbGxiYWNrKXtcbiAgICAvL1BhZ2UgdmlldyA9IGFwcGx5LXRoYW5rLXlvdVxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKHVybENvbnRhaW5zKSA+IC0xKSB7XG4gICAgICAgIC8vQ29kZSBnb2VzIGhlcmVcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9ICBcbn1cbmZ1bmN0aW9uIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoZXZlbnROYW1lKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgZGF0YUxheWVyLnB1c2goeydldmVudCc6IGV2ZW50TmFtZX0pO1xuICAgICAgICBjb25zb2xlLmxvZygnRXZlbnQgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDogJytldmVudE5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGNvbnNvbGUubG9nKCdFdmVudCBub3QgYmVpbmcgc2VudCB0byBUYWdNYW5hZ2VyOiAnK2V2ZW50TmFtZSk7XG59XG5mdW5jdGlvbiBzYXZlRGF0YVZhcmlhYmxlKGluZGV4LCB2YWx1ZSl7XG4gICAgaWYodHlwZW9mIGRhdGFMYXllciAhPSAndW5kZWZpbmVkJykgZGF0YUxheWVyLnB1c2goe2luZGV4OiB2YWx1ZX0pO1xuICAgIGVsc2UgY29uc29sZS5sb2coJ0ltcG9zaWJsZSB0byB3cml0ZSAnK2luZGV4Kycgb24gZGF0YUxheWVyJyk7XG4gICAgXG4gICAgXG4gICAgaWYodHlwZW9mIFdQQVNfQVBQID09ICd1bmRlZmluZWQnKSBXUEFTX0FQUCA9IHt9O1xuICAgIGlmKHR5cGVvZiBXUEFTX0FQUC5kYXRhTGF5ZXIgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQLmRhdGFMYXllciA9IHt9O1xuICAgIFdQQVNfQVBQLmRhdGFMYXllcltpbmRleF0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGFjX2V2ZW50KGV2ZW50S2V5LCBldmVudE5hbWUsIHVzZXJFbWFpbCl7XG5cbiAgLy8gd2hhdCB3ZSBkbyBoZXJlLCBpcyBsb2cgYSBzdWNjZXNzZnVsIGV2ZW50IHRvIHRoZSBjb25zb2xlXG4gIC8vIG9yIGNhdGNoIGFueSBlcnJvcnMgd2UgaGF2ZVxuICB2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgIFxuICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGVkIGhhbGZ3YXkgc2Nyb2xsIGV2ZW50XCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHlvdXIgQWN0aXZlQ2FtcGFpZ24gaWQuIFlvdSBjYW4gZ2V0IHRoaXMgZnJvbSB5b3VyIEFDIHNldHRpbmdzIFxuICB2YXIgYWN0aWQgPSBcImRiMTVhMzI2NGZiMmFiZjE5OTk2ZmE0ODg3MzAzOTc1N2Q1MzQ1NDRcIjsgXG5cbiAgdmFyIHZpc2l0ID0ge1xuICAgIGVtYWlsOiB1c2VyRW1haWwgLy8gdGhlIHVzZXIncyBlbWFpbCBhZGRyZXNzXG4gIH07XG5cbiAgLy8gZ2V0IHRoZSB1cmwgb2YgdGhlIHBhZ2UgYW5kIHNlbmQgaXQgYXMgZXZlbnQgZGF0YVxuICB2YXIgZXZlbnREYXRhID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgLy8gYnVpbGQgdGhlIGV2ZW50U3RyaW5nIGJhc2VkIG9uIHRoZSB2YXJpYWJsZXMgeW91IGp1c3QgZWRpdGVkIGFib3ZlIOKYnVxuICB2YXIgZXZlbnRTdHJpbmcgPSBcImFjdGlkPVwiICsgYWN0aWQgXG4gICAgICAgICAgICAgICAgICAgICsgXCIma2V5PVwiICsgZXZlbnRLZXkgXG4gICAgICAgICAgICAgICAgICAgICsgXCImZXZlbnQ9XCIgKyBldmVudE5hbWUgXG4gICAgICAgICAgICAgICAgICAgICsgXCImdmlzaXQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmlzaXQpIFxuICAgICAgICAgICAgICAgICAgICArIFwiJmV2ZW50ZGF0YVwiICsgZXZlbnREYXRhO1xuXG4gIC8vIHNlbmQgdGhlIGV2ZW50IHRvIHRoZSBBY3RpdmVDYW1wYWlnbiBBUEkgd2l0aCBvdXIgZXZlbnQgdmFsdWVzXG4gIHhodHRwLm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly90cmFja2NtcC5uZXQvZXZlbnRcIiwgdHJ1ZSk7XG4gIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gIFxuICBpZihldmVudEtleSE9JycgJiYgZXZlbnROYW1lIT0nJyAmJiB1c2VyRW1haWwhPScnKSB4aHR0cC5zZW5kKGV2ZW50U3RyaW5nKTtcbiAgZWxzZXtcbiAgICAgIGlmKGV2ZW50S2V5PT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgZXZlbnRLZXknLGV2ZW50S2V5KTtcbiAgICAgIGlmKGV2ZW50TmFtZT09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIGV2ZW50TmFtZScsZXZlbnROYW1lKTtcbiAgICAgIGlmKHVzZXJFbWFpbD09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIHVzZXJFbWFpbCcsdXNlckVtYWlsKTtcbiAgfVxufVxuXG4vKipcbiAqIFRhZ21hbmdlciBldmVudHNcbiAqKi9cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7IFxuICAgIFxuICAgIHZhciBlbWFpbElucHV0ID0gJChldmVudC50YXJnZXQpLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICAgaWYoZW1haWxJbnB1dC5sZW5ndGg+MCkgc2F2ZURhdGFWYXJpYWJsZSgndXNlckVtYWlsJyxlbWFpbElucHV0WzBdLnZhbHVlKTtcbiAgICBcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzeWxsYWJ1c19kb3dubG9hZCcpOyBcbn0pO1xuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ25ld3NsZXR0ZXJfc2lnbnVwJyk7IFxufSk7XG4kKCcuYXBwbHktYnRuJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpeyB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdhcHBsaWNhdGlvbl9yZW5kZXJlZCcpOyB9KTtcbm9uUGFnZVZpZXcoXCIvYXBwbHktdGhhbmsteW91XCIsZnVuY3Rpb24oKXtcbiAgICAvL0NvZGUgZ29lcyBoZXJlXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnc3R1ZGVudF9hcHBsaWNhdGlvbicpOyBcbn0pO1xuJCgnI2ZpbmFuY2luZ19ndWlkZV9kb3dubG9hZCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdmaW5hbmNpbmdfZ3VpZGVfZG93bmxvYWQnKTsgXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBldmVudC50YXJnZXQuaHJlZjtcbiAgICByZXR1cm4gZmFsc2U7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vbWFya2V0aW5nLWV2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljaW5nQ2FsY3VsYXRvcihzbGlkZXJzLCBtZXNzYWdlcyl7XG4gIHZhciBTbGlkZXIgPSByZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKTtcbiAgbWVzc2FnZXMgPSBtZXNzYWdlc1snZmluYW5jZWQnXTtcbiAgc2xpZGVycy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICBjb25zdCBodG1sU2xpZGVyID0gdGhpcztcbiAgICBjb25zdCBwcmljaW5nQ29tcG9uZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcucHJpY2luZy1jb21wb25lbnQnKTtcbiAgICB2YXIgbXlTbGlkZXIgPSBuZXcgU2xpZGVyKGh0bWxTbGlkZXIpO1xuICAgIG15U2xpZGVyLm9uKCdzbGlkZVN0b3AnLCBmdW5jdGlvbihjbGlja2VkSW5kZXgpe1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMobWVzc2FnZXMpW2NsaWNrZWRJbmRleF07XG4gICAgICBpZih0eXBlb2YgbWVzc2FnZXNba2V5XSAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLm1vbnRobHkpID09ICdzdHJpbmcnKSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5wcmljZS1sYWJlbCcpLmh0bWwobWVzc2FnZXNba2V5XS5tb250aGx5KTtcbiAgICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW2tleV0ubWVzc2FnZSkgIT09ICd1bmRlZmluZWQnKSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5maW5hbmNpbmctZGV0YWlscycpLmh0bWwobWVzc2FnZXNba2V5XS5tZXNzYWdlW1dQQVNfQVBQLmxhbmddKTtcbiAgICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW2tleV0ubG9nbykgPT0gJ3N0cmluZycpe1xuICAgICAgICAgIHZhciBsb2dvRWxtID0gcHJpY2luZ0NvbXBvbmVudC5maW5kKCcuZmluYW5jaW5nLWxvZ28nKTtcbiAgICAgICAgICBsb2dvRWxtLmF0dHIoJ3NyYycsbWVzc2FnZXNba2V5XS5sb2dvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcdFx0XG4gIFx0XHR2YXIgcGF5bWVudFBsYW5DYXJkID0gcHJpY2luZ0NvbXBvbmVudC5maW5kKCcucGF5bWVudC1wbGFuJyk7XG4gIFx0XHRwYXltZW50UGxhbkNhcmQuYWRkQ2xhc3MoXCJnbG93XCIpO1xuICBcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgXHRcdFx0cGF5bWVudFBsYW5DYXJkLnJlbW92ZUNsYXNzKFwiZ2xvd1wiKTtcbiAgXHRcdH0sIDIwMCk7XG4gICAgICBcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL3ByaWNlQ2FsY3VsYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIl0sInNvdXJjZVJvb3QiOiIifQ==