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
               if((typeof WPAS_APP.city_slug !== 'undefined' && WPAS_APP.city_slug !== '') || WPAS_APP.view.slug == 'location') console.log("Ignoring user location because he specified a different one");
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

/* WEBPACK VAR INJECTION */(function($) {function triggerTagManagerEvent(eventName){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvYWxsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9sYW5kaW5nLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvbGFuZGluZy5zY3NzPzAxYTYiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDOztBQUVBO0FBQ0E7O0FBRUEsZ0Q7QUFDQSxDQUFDO0FBQ0QsK0M7O0FBRUE7QUFDQTs7QUFFQSxnRDtBQUNBLENBQUM7QUFDRCxzQ0FBc0MsZ0RBQWdELEVBQUU7QUFDeEYscUQ7QUFDQTtBQUNBLHVEO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7O0FDeENEO0FBQUE7QUFBZTtBQUNmLGVBQWUsbUJBQU8sQ0FBQyxFQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQyIsImZpbGUiOiJsYW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy92YXIgbmV3c2xldHRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtbmV3c2xldHRlciBmb3JtJyk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgIGlmKGZyb21Ub3A+MTAwKSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICBlbHNlICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xufSk7XG5cblxuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1OZXdzbGV0dGVyID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybU5ld3NsZXR0ZXIuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICBcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnbmV3c2xldHRlcl9zaWdudXAnLFxuICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1OZXdzbGV0dGVyLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybU5ld3NsZXR0ZXIuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChcIlRoZXJlIGhhcyBiZWVuIGFuIGVycm9yIHNpZ25pbmcgeW91IHVwXCIpO1xuICAgICAgfVxuICAgfSk7XG4gICBcbn0pO1xuXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybVN5bGxhYnVzID0gJCh0aGlzKTtcbiAgIHZhciBidXR0b24gPSBmb3JtU3lsbGFidXMuZmluZCgnYnV0dG9uJyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGZpcnN0TmFtZUZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgIHZhciBsb2NhdGlvbkZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJy5sb2NhdGlvbnMnKTtcbiAgIHZhciBsb2NhdGlvbiA9IGxvY2F0aW9uRmllbGQudmFsKCk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgdmFyIGZpcnN0TmFtZSA9IGZpcnN0TmFtZUZpZWxkLnZhbCgpO1xuICAgXG4gICBpZihlbWFpbCA9PSAnJyB8fCBmaXJzdE5hbWUgPT0nJylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnV2UgbmVlZCB5b3VyIGVtYWlsIGFuZCBmaXJzdCBuYW1lJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2UgaWYobG9jYXRpb249PScnIHx8IGxvY2F0aW9uPT0nc2VsZWN0JylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnUGxlYXNlIHNlbGVjdCBhIExvY2F0aW9uJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgIGJ1dHRvbi5odG1sKFwiTG9hZGluZy4uLlwiKTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWN0aW9uOiAnZG93bmxvYWRfc3lsbGFidXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICh0eXBlb2YgV1BBU19BUFAudGVtcGxhdGUgPT0gJ3N0cmluZycpID8gV1BBU19BUFAudGVtcGxhdGUucmVwbGFjZSgnc2luZ2xlLScsJycpIDogJ25vbmUnLFxuICAgICAgICAgICAgdXJsOiBXUEFTX0FQUC51cmwsXG4gICAgICAgICAgICB1dG1fbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lXG4gICAgICAgICB9LFxuICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoXCJEb3dubG9hZFwiKTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBmb3JtU3lsbGFidXMuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgJCgnI3N5bGxhYnVzTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgfSwyMDAwKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSxcbiAgICAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICBidXR0b24uaHRtbChcIkRvd25sb2FkXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCJUaGVyZSBoYXMgYmVlbiBhbiBlcnJvciBzaWduaW5nIHlvdSB1cFwiKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfSBcbiAgIFxufSk7XG5cbiQoJy5tb3JlLWluZm8tc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1TeWxsYWJ1cyA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGZpcnN0TmFtZUZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICB2YXIgZmlyc3ROYW1lID0gZmlyc3ROYW1lRmllbGQudmFsKCk7XG4gICBcbiAgIGlmKGVtYWlsID09ICcnIHx8IGZpcnN0TmFtZSA9PScnKVxuICAge1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCdXZSBuZWVkIHlvdXIgZW1haWwgYW5kIGZpcnN0IG5hbWUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgfVxuICAgZWxzZXtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgJC5hamF4KHtcbiAgICAgIHVybDogJy93cC1qc29uLzRnL3YxL2FwcGx5L3JlcXVlc3RfaW5mbycsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICB1cmw6IFdQQVNfQVBQLnVybCxcbiAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApIGZvcm1TeWxsYWJ1cy5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICBlbHNlIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3Igc2lnbmluZyB5b3UgdXBcIik7XG4gICAgICB9XG4gICB9KTtcbiAgIH0gXG4gICBcbn0pO1xuXG4oZnVuY3Rpb24gbG9hZEFsZXJ0cygpe1xuICAgdmFyIGRpc21pc3NlZEFsZXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkaXNtaXNzZWRfYWxlcnRzJyk7XG4gICBcbiAgIGlmKGRpc21pc3NlZEFsZXJ0cykgZGlzbWlzc2VkQWxlcnRzID0gZGlzbWlzc2VkQWxlcnRzLnNwbGl0KFwiLFwiKTtcbiAgIGVsc2UgZGlzbWlzc2VkQWxlcnRzID0gW107XG4gICBcbiAgIHZhciBhbGxBbGVydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtZGlzbWlzc2libGUnKTtcbiAgIGFsbEFsZXJ0cy5mb3JFYWNoKGZ1bmN0aW9uKGEpe1xuICAgICAgaWYoZGlzbWlzc2VkQWxlcnRzLmluZGV4T2YoYS5pZCkgPT0gLTEpe1xuICAgICAgICAgdmFyIGFsZXJ0VG9EaXNtaXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrYS5pZCk7XG4gICAgICAgICBhbGVydFRvRGlzbWlzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgfSk7XG4gICB2YXIgY2xvc2VBbGVydEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1kaXNtaXNzPWFsZXJ0XScpO1xuICAgY2xvc2VBbGVydEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihidG4pe1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgXHRjb25zb2xlLmxvZyh0aGlzLnBhcmVudE5vZGUpO1xuICAgICAgICAgaWYodHlwZW9mIHRoaXMucGFyZW50Tm9kZS5pZCA9PSAndW5kZWZpbmVkJykgXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGFuIGlkIGZvciBhbGwgdGhlIGRpc21pc2FibGUgYWxlcnRzJyk7XG4gICAgICBcdGRpc21pc3NlZEFsZXJ0cy5wdXNoKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gICAgICBcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkaXNtaXNzZWRfYWxlcnRzJyxkaXNtaXNzZWRBbGVydHMuam9pbignLCcpKTtcbiAgICAgIFx0dGhpcy5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgfSk7XG59KSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50J1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBwcm9tcHRVcGNvbWluZ0V2ZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50JyxcbiAgICAgICAgIHR5cGU6ICdpbnRyb190b19jb2RpbmcnXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpIGZpbGxVcGNvbWluZ0ludHJvVG9Db2RpbmcocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgdXBjb21pbmcgZXZlbnQ6IFwiK3AzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG4gICAvL2xvYWQgbG9jYXRpb25zXG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3dwLWpzb24vNGcvdjEvbG9jYXRpb25zP2xhbmc9JytXUEFTX0FQUC5sYW5nLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihsb2NhdGlvbnMpe1xuICAgICAgICAgaWYobG9jYXRpb25zKVxuICAgICAgICAge1xuICAgICAgICAgICAgJCgnI3N5bGxhYnVzTW9kYWwgLmxvY2F0aW9ucywgLnN5bGxhYnVzLWRvd25sb2FkIC5sb2NhdGlvbnMnKS5odG1sKFsnPG9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdCBhIGxvY2F0aW9uPC9vcHRpb24+J10uY29uY2F0KGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obCl7XG4gICAgICAgICAgICAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCInK2xbJ2FjX2xvY2F0aW9uX3NsdWcnXSsnXCI+JytsWydwb3N0X3RpdGxlJ10rJzwvb3B0aW9uPic7XG4gICAgICAgICAgICB9KSkuam9pbignJykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL21hcmsgZGVmYXVsdCBsb2NhdGlvblxuICAgICAgICAgICAgaWYodHlwZW9mIFdQQVNfQVBQICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICBpZigodHlwZW9mIFdQQVNfQVBQLmNpdHlfc2x1ZyAhPT0gJ3VuZGVmaW5lZCcgJiYgV1BBU19BUFAuY2l0eV9zbHVnICE9PSAnJykgfHwgV1BBU19BUFAudmlldy5zbHVnID09ICdsb2NhdGlvbicpIGNvbnNvbGUubG9nKFwiSWdub3JpbmcgdXNlciBsb2NhdGlvbiBiZWNhdXNlIGhlIHNwZWNpZmllZCBhIGRpZmZlcmVudCBvbmVcIik7XG4gICAgICAgICAgICAgICBlbHNlIGlmKHR5cGVvZiBXUEFTX0FQUC5sYXRpdHVkZSAhPT0gJ3VuZGVmaW5lZCcgJiYgV1BBU19BUFAubGF0aXR1ZGUgIT09ICcnKXtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3QgPSBjbG9zZXN0TG9jYXRpb24oeyBsYXRpdHVkZTogV1BBU19BUFAubGF0aXR1ZGUsIGxvbmdpdHVkZTogV1BBU19BUFAubG9uZ2l0dWRlIH0sIGxvY2F0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAkKCcuY2l0aWVzLmRyb3Bkb3duLXNlbGVjdG9yIGJ1dHRvbiBzcGFuJykuaHRtbChjbG9zZXN0LnBvc3RfdGl0bGUpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIGFjYWRlbXkgbG9jYXRpb25zIFwiK3AzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG4gICBzZXR1cFByaWNlQ2FsY3VsYXRvcigpO1xuICAgXG4gICAkKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgJCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcbiAgIH0pO1xuICAgXG4gICB2YXIgbWFzdGVyV2hpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzdGhlYWQtd2hpdGUnKTtcbiAgIGlmKHR5cGVvZiBtYXN0ZXJXaGl0ZSAhPSAndW5kZWZpbmVkJyAmJiBtYXN0ZXJXaGl0ZSl7XG4gICAgICB2YXIgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpOyBcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCdpbnZlcnRlZCcpO1xuICAgfSBcbiAgIFxuICAgc3luY0RhdGFMYXllcigpO1xufSk7XG5cbmZ1bmN0aW9uIHNldHVwUHJpY2VDYWxjdWxhdG9yKCl7XG4gICBcbiAgIHZhciBQcmljZUNhbGN1bGF0b3IgPSByZXF1aXJlKCcuLi9saWIvcHJpY2VDYWxjdWxhdG9yLmpzJykuZGVmYXVsdDtcbiAgIGNvbnN0IHNsaWRlcnMgPSAkKCcucHJpY2luZy1zbGlkZXInKTtcbiAgIFxuICAgaWYoc2xpZGVycy5sZW5ndGggPT09IDApIGNvbnNvbGUubG9nKCdUaGVyZSBpcyBubyBzbGlkZXIgdG8gbG9hZCcpO1xuICAgZWxzZXtcbiAgICAgICQuYWpheCh7XG4gICAgICAgICB1cmw6ICcvd3AtanNvbi80Zy92MS9wcmljZXMnLFxuICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihwcmljZXMpe1xuICAgICAgICAgICAgaWYocHJpY2VzICYmIHR5cGVvZiBwcmljZXMuZGF0YSAhPSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIHByaWNlcyA9IHByaWNlcy5kYXRhO1xuICAgICAgICAgICAgICAgc2xpZGVycy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlciA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHNsaWRlci5kYXRhKCdsb2NhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY291cnNlID0gc2xpZGVyLmRhdGEoJ2NvdXJzZScpO1xuICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHByaWNlc1tjb3Vyc2VdICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgcHJpY2VzW2NvdXJzZV1bbG9jYXRpb25dID09PSAndW5kZWZpbmVkJykgY29uc29sZS5lcnJvcignUHJpY2Ugbm90IGZvdW5kIGZvciAnK2NvdXJzZSsnIGF0ICcrbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgcmVuZGVyTG9jYXRpb25QcmljZXMoc2xpZGVyLCBwcmljZXNbY291cnNlXVtsb2NhdGlvbl0pO1xuICAgICAgICAgICAgICAgICAgICAgUHJpY2VDYWxjdWxhdG9yKHNsaWRlcnMsIHByaWNlc1tjb3Vyc2VdW2xvY2F0aW9uXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGNvdXJzZSBwcmljZXNcIik7XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0sXG4gICAgICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSBhY2FkZW15IHByaWNlcyBcIitwMyk7XG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTG9jYXRpb25QcmljZXMoc2xpZGVyLCBwcmljZXMpe1xuICAgY29uc3QgcHJpY2luZ0NvbXBvbmVudCA9IHNsaWRlci5jbG9zZXN0KCcucHJpY2luZy1jb21wb25lbnQnKTtcbiAgIGlmKHR5cGVvZiBwcmljZXMgPT09ICd1bmRlZmluZWQnKXtcbiAgICAgIGxldCBjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj4nO1xuICAgICAgICAgY29udGVudCArPSAnPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ibG9jayBjYXJkLXByaW1hcnkgY2FyZC1pbnZlcnNlIGJnLXllbGxvdyBtYi0zIHAtNCB0ZXh0LWNlbnRlclwiPic7XG4gICAgICAgICAgICBjb250ZW50ICs9ICdQcmljZXMgaGF2ZSBub3QgYmVlbiBkZWZpbmVkIHlldCc7XG4gICAgICAgICBjb250ZW50ICs9ICc8L2Rpdj4nO1xuICAgICAgY29udGVudCArPSAnPC9kaXY+JztcbiAgICAgIHByaWNpbmdDb21wb25lbnQuaHRtbChjb250ZW50KTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBwcmljaW5nQ29tcG9uZW50LmZpbmQoJ1tkYXRhLWNvbmNlcHQ9XCJ1cGZyb250XCJdJykuaHRtbChwcmljZXNbJ3VwZnJvbnQnXSk7XG4gICAgICBwcmljaW5nQ29tcG9uZW50LmZpbmQoJ1tkYXRhLWNvbmNlcHQ9XCJtb250aGx5XCJdJykuaHRtbChwcmljZXNbJ2ZpbmFuY2VkJ11bMF0pO1xuICAgICAgXG4gICB9XG59XG5cbmZ1bmN0aW9uIHByb21wdFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgXG4gICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9wU3RhdGUnKSAhPSAnc2hvd24nKXtcbiAgICAgIGZpbGxVcGNvbWluZ0V2ZW50KGV2ZW50KTtcbiAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5kZWxheSgyMDAwKS5mYWRlSW4oKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3BTdGF0ZScsJ3Nob3duJyk7XG4gICAgICAkKCcjdXBjb21pbmdFdmVudCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHB1dCB5b3VyIGRlZmF1bHQgZXZlbnQgaGVyZVxuICAgICAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuXG4gICB9XG59XG5cbmZ1bmN0aW9uIGZpbGxVcGNvbWluZ0ludHJvVG9Db2RpbmcoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI2ZyZWVDb2RpbmdJbnRyb01vZGFsJyk7XG4gICBtb2RhbC5maW5kKCcuZGF0ZScpLmh0bWwoZXZlbnQuZGF5KycgJytldmVudC5tb250aCsnICcrZXZlbnQueWVhcik7XG4gICBtb2RhbC5maW5kKCcubG9jYXRpb24nKS5odG1sKGV2ZW50LmFkZHJlc3MpO1xuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC51cmwpO1xuICAgXG59XG5mdW5jdGlvbiBmaWxsVXBjb21pbmdFdmVudChldmVudCl7XG4gICB2YXIgbW9kYWwgPSAkKCcjdXBjb21pbmdFdmVudCcpO1xuICAgbW9kYWwuZmluZCgnLmRheScpLmh0bWwoZXZlbnQuZGF5KTtcbiAgIG1vZGFsLmZpbmQoJy5tb250aCcpLmh0bWwoZXZlbnQubW9udGgpO1xuICAgbW9kYWwuZmluZCgnLnllYXInKS5odG1sKGV2ZW50LnllYXIpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuZXZlbnQtdGl0bGUnKS5odG1sKGV2ZW50Lm5hbWUpO1xuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRldGFpbHMnKS5odG1sKCc8c3BhbiBjbGFzcz1cImltb29uIGljb24tbG9jYXRpb25cIj48L3NwYW4+JyArIGV2ZW50LmFkZHJlc3MpOy8vMzozMHBtIC0gYXQgU3RhcnRodWIsIERvd250b3duIE1pYW1pXG4gICBcbiAgIFxuICAgdmFyIG1heExlbmd0aCA9IDM1MDsgLy8gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byBleHRyYWN0XG4gICB2YXIgdHJpbW1lZFN0cmluZyA9IGV2ZW50LmRlc2NyaXB0aW9uLnN1YnN0cigwLCBtYXhMZW5ndGgpOy8vdHJpbSB0aGUgc3RyaW5nIHRvIHRoZSBtYXhpbXVtIGxlbmd0aFxuICAgdHJpbW1lZFN0cmluZyA9IHRyaW1tZWRTdHJpbmcuc3Vic3RyKDAsIE1hdGgubWluKHRyaW1tZWRTdHJpbmcubGVuZ3RoLCB0cmltbWVkU3RyaW5nLmxhc3RJbmRleE9mKFwiLlwiKSkpOy8vcmUtdHJpbSBpZiB3ZSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHdvcmRcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXNjcmlwdGlvbicpLmh0bWwodHJpbW1lZFN0cmluZysnLicpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuYnRuLWRhbmdlcicpLmF0dHIoJ2hyZWYnLGV2ZW50LnVybCk7XG4gICBcbn1cblxuZnVuY3Rpb24gY2xvc2VzdExvY2F0aW9uKHRhcmdldExvY2F0aW9uLCBsb2NhdGlvbkRhdGEpIHtcbiAgICBmdW5jdGlvbiB2ZWN0b3JEaXN0YW5jZShkeCwgZHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYXRpb25EaXN0YW5jZShsb2NhdGlvbjEsIGxvY2F0aW9uMikge1xuICAgICAgICB2YXIgZHggPSBsb2NhdGlvbjEubGF0aXR1ZGUgLSBsb2NhdGlvbjIubGF0aXR1ZGUsXG4gICAgICAgICAgICBkeSA9IGxvY2F0aW9uMS5sb25naXR1ZGUgLSBsb2NhdGlvbjIubG9uZ2l0dWRlO1xuXG4gICAgICAgIHJldHVybiB2ZWN0b3JEaXN0YW5jZShkeCwgZHkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvbkRhdGEucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnIpIHtcbiAgICAgICAgdmFyIHByZXZEaXN0YW5jZSA9IGxvY2F0aW9uRGlzdGFuY2UodGFyZ2V0TG9jYXRpb24gLCBwcmV2KSxcbiAgICAgICAgICAgIGN1cnJEaXN0YW5jZSA9IGxvY2F0aW9uRGlzdGFuY2UodGFyZ2V0TG9jYXRpb24gLCBjdXJyKTtcbiAgICAgICAgcmV0dXJuIChwcmV2RGlzdGFuY2UgPCBjdXJyRGlzdGFuY2UpID8gcHJldiA6IGN1cnI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHN5bmNEYXRhTGF5ZXIoKXtcbiAgIFxuICAgaWYodHlwZW9mIGRhdGFMYXllciAhPSAndW5kZWZpbmVkJyl7XG4gICAgICBpZih0eXBlb2YgV1BBU19BUFAgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgIGRhdGFMYXllci5wdXNoKHsgY2l0eTogV1BBU19BUFAuY2l0eSB9KTtcbiAgICAgICAgIGRhdGFMYXllci5wdXNoKHsgY2l0eV9zbHVnOiBXUEFTX0FQUC5jaXR5X3NsdWcgfSk7XG4gICAgICAgICBkYXRhTGF5ZXIucHVzaCh7IGNvdW50cnlfbmFtZTogV1BBU19BUFAuY291bnRyeV9uYW1lIH0pO1xuICAgICAgICAgZGF0YUxheWVyLnB1c2goeyBsYW5nOiBXUEFTX0FQUC5sYW5nIH0pO1xuICAgICAgICAgZGF0YUxheWVyLnB1c2goeyBjaXR5OiBXUEFTX0FQUC5jaXR5IH0pO1xuICAgICAgfVxuICAgICAgXG4gICB9IFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuLi9zdHlsZXMvbGFuZGluZy5zY3NzJyk7XG5cbmltcG9ydCAnLi9wYWdlcy9hbGwuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzJztcblxudmFyIGJlaW5nRGlzcGxheWVkID0gZmFsc2U7XG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RpY2t5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxsLXRvLWFjdGlvbi1uYXZcIik7XG4gICAgaWYgKCFiZWluZ0Rpc3BsYXllZCAmJiB0aGlzLnNjcm9sbFkgPiAyNTApIHtcbiAgICAgICAgYmVpbmdEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICBzdGlja3lOYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChiZWluZ0Rpc3BsYXllZCAmJiB0aGlzLnNjcm9sbFkgPD0gMjUwKSB7XG4gICAgICAgIGJlaW5nRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICAgIHN0aWNreU5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9sYW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvbGFuZGluZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZnVuY3Rpb24gdHJpZ2dlclRhZ01hbmFnZXJFdmVudChldmVudE5hbWUpe1xuICAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogZXZlbnROYW1lfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkOiAnK2V2ZW50TmFtZSk7XG4gICAgfVxuICAgIGVsc2UgY29uc29sZS5sb2coJ0V2ZW50IG5vdCBiZWluZyBzZW50IHRvIFRhZ01hbmFnZXI6ICcrZXZlbnROYW1lKTtcbn1cbmZ1bmN0aW9uIHNhdmVEYXRhVmFyaWFibGUoaW5kZXgsIHZhbHVlKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKSBkYXRhTGF5ZXIucHVzaCh7aW5kZXg6IHZhbHVlfSk7XG4gICAgZWxzZSBjb25zb2xlLmxvZygnSW1wb3NpYmxlIHRvIHdyaXRlICcraW5kZXgrJyBvbiBkYXRhTGF5ZXInKTtcbiAgICBcbiAgICBcbiAgICBpZih0eXBlb2YgV1BBU19BUFAgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQID0ge307XG4gICAgaWYodHlwZW9mIFdQQVNfQVBQLmRhdGFMYXllciA9PSAndW5kZWZpbmVkJykgV1BBU19BUFAuZGF0YUxheWVyID0ge307XG4gICAgV1BBU19BUFAuZGF0YUxheWVyW2luZGV4XSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIFRhZ21hbmdlciBldmVudHNcbiAqKi9cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7IFxuICAgIFxuICAgIHZhciBlbWFpbElucHV0ID0gJChldmVudC50YXJnZXQpLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICAgaWYoZW1haWxJbnB1dC5sZW5ndGg+MCkgc2F2ZURhdGFWYXJpYWJsZSgndXNlckVtYWlsJyxlbWFpbElucHV0WzBdLnZhbHVlKTtcbiAgICBcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzeWxsYWJ1c19kb3dubG9hZCcpOyBcbn0pO1xuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ25ld3NsZXR0ZXJfc2lnbnVwJyk7IFxufSk7XG4kKCcuYXBwbHktYnRuJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpeyB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdhcHBsaWNhdGlvbl9yZW5kZXJlZCcpOyB9KTtcbiQoJyNmaW5hbmNpbmdfZ3VpZGVfZG93bmxvYWQnKS5jbGljayhmdW5jdGlvbihldmVudCl7IFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnZmluYW5jaW5nX2d1aWRlX2Rvd25sb2FkJyk7IFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZXZlbnQudGFyZ2V0LmhyZWY7XG4gICAgcmV0dXJuIGZhbHNlO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL21hcmtldGluZy1ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2luZ0NhbGN1bGF0b3Ioc2xpZGVycywgbWVzc2FnZXMpe1xuICB2YXIgU2xpZGVyID0gcmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIik7XG4gIG1lc3NhZ2VzID0gbWVzc2FnZXNbJ2ZpbmFuY2VkJ107XG4gIHNsaWRlcnMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgY29uc3QgaHRtbFNsaWRlciA9IHRoaXM7XG4gICAgY29uc3QgcHJpY2luZ0NvbXBvbmVudCA9ICQodGhpcykuY2xvc2VzdCgnLnByaWNpbmctY29tcG9uZW50Jyk7XG4gICAgdmFyIG15U2xpZGVyID0gbmV3IFNsaWRlcihodG1sU2xpZGVyKTtcbiAgICBteVNsaWRlci5vbignc2xpZGVTdG9wJywgZnVuY3Rpb24oY2xpY2tlZEluZGV4KXtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG1lc3NhZ2VzKVtjbGlja2VkSW5kZXhdO1xuICAgICAgaWYodHlwZW9mIG1lc3NhZ2VzW2tleV0gIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBpZih0eXBlb2YobWVzc2FnZXNba2V5XS5tb250aGx5KSA9PSAnc3RyaW5nJykgcHJpY2luZ0NvbXBvbmVudC5maW5kKCcucHJpY2UtbGFiZWwnKS5odG1sKG1lc3NhZ2VzW2tleV0ubW9udGhseSk7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLm1lc3NhZ2UpICE9PSAndW5kZWZpbmVkJykgcHJpY2luZ0NvbXBvbmVudC5maW5kKCcuZmluYW5jaW5nLWRldGFpbHMnKS5odG1sKG1lc3NhZ2VzW2tleV0ubWVzc2FnZVtXUEFTX0FQUC5sYW5nXSk7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLmxvZ28pID09ICdzdHJpbmcnKXtcbiAgICAgICAgICB2YXIgbG9nb0VsbSA9IHByaWNpbmdDb21wb25lbnQuZmluZCgnLmZpbmFuY2luZy1sb2dvJyk7XG4gICAgICAgICAgbG9nb0VsbS5hdHRyKCdzcmMnLG1lc3NhZ2VzW2tleV0ubG9nbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXHRcdFxuICBcdFx0dmFyIHBheW1lbnRQbGFuQ2FyZCA9IHByaWNpbmdDb21wb25lbnQuZmluZCgnLnBheW1lbnQtcGxhbicpO1xuICBcdFx0cGF5bWVudFBsYW5DYXJkLmFkZENsYXNzKFwiZ2xvd1wiKTtcbiAgXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIFx0XHRcdHBheW1lbnRQbGFuQ2FyZC5yZW1vdmVDbGFzcyhcImdsb3dcIik7XG4gIFx0XHR9LCAyMDApO1xuICAgICAgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9wcmljZUNhbGN1bGF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=