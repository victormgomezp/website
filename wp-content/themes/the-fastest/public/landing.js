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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvYWxsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9sYW5kaW5nLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvbGFuZGluZy5zY3NzPzAxYTYiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtB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QUNBLHdEQUF3RCxhQUFhO0FBQ3JFOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0M7O0FBRUE7QUFDQTs7QUFFQSxnRDtBQUNBLENBQUM7QUFDRCwrQzs7QUFFQTtBQUNBOztBQUVBLGdEO0FBQ0EsQ0FBQztBQUNELHNDQUFzQyxnREFBZ0QsRUFBRTtBQUN4Rix5Q0FBeUMsK0NBQStDLEVBQUUsRTtBQUMxRiw2Q0FBNkMsK0NBQStDLEVBQUUsRTtBQUM5RixxRDtBQUNBO0FBQ0EsdUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7QUMzRkQ7QUFBQTtBQUFlO0FBQ2YsZUFBZSxtQkFBTyxDQUFDLEVBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsS0FBSztBQUNMLEdBQUc7QUFDSCxDIiwiZmlsZSI6ImxhbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3ZhciBuZXdzbGV0dGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1uZXdzbGV0dGVyIGZvcm0nKTtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cbiAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgaWYoZnJvbVRvcD4xMDApICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIGVsc2UgJCgnLmZvb3Rlci1iYXInKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG59KTtcblxuXG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybU5ld3NsZXR0ZXIgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtTmV3c2xldHRlci5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIFxuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICduZXdzbGV0dGVyX3NpZ251cCcsXG4gICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybU5ld3NsZXR0ZXIuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBmb3JtTmV3c2xldHRlci5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3Igc2lnbmluZyB5b3UgdXBcIik7XG4gICAgICB9XG4gICB9KTtcbiAgIFxufSk7XG5cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtU3lsbGFidXMgPSAkKHRoaXMpO1xuICAgdmFyIGJ1dHRvbiA9IGZvcm1TeWxsYWJ1cy5maW5kKCdidXR0b24nKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICB2YXIgZmlyc3ROYW1lRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT10ZXh0XScpO1xuICAgdmFyIGxvY2F0aW9uRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnLmxvY2F0aW9ucycpO1xuICAgdmFyIGxvY2F0aW9uID0gbG9jYXRpb25GaWVsZC52YWwoKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICB2YXIgZmlyc3ROYW1lID0gZmlyc3ROYW1lRmllbGQudmFsKCk7XG4gICBcbiAgIGlmKGVtYWlsID09ICcnIHx8IGZpcnN0TmFtZSA9PScnKVxuICAge1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCdXZSBuZWVkIHlvdXIgZW1haWwgYW5kIGZpcnN0IG5hbWUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgfVxuICAgZWxzZSBpZihsb2NhdGlvbj09JycgfHwgbG9jYXRpb249PSdzZWxlY3QnKVxuICAge1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCdQbGVhc2Ugc2VsZWN0IGEgTG9jYXRpb24nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgfVxuICAgZWxzZXtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgYnV0dG9uLmh0bWwoXCJMb2FkaW5nLi4uXCIpO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhY3Rpb246ICdkb3dubG9hZF9zeWxsYWJ1cycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogKHR5cGVvZiBXUEFTX0FQUC50ZW1wbGF0ZSA9PSAnc3RyaW5nJykgPyBXUEFTX0FQUC50ZW1wbGF0ZS5yZXBsYWNlKCdzaW5nbGUtJywnJykgOiAnbm9uZScsXG4gICAgICAgICAgICB1cmw6IFdQQVNfQVBQLnVybCxcbiAgICAgICAgICAgIHV0bV9sb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWVcbiAgICAgICAgIH0sXG4gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICBidXR0b24uaHRtbChcIkRvd25sb2FkXCIpO1xuICAgICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGZvcm1TeWxsYWJ1cy5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAkKCcjc3lsbGFidXNNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICB9LDIwMDApXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBlbHNlIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9LFxuICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5odG1sKFwiRG93bmxvYWRcIik7XG4gICAgICAgICAgICBhbGVydChcIlRoZXJlIGhhcyBiZWVuIGFuIGVycm9yIHNpZ25pbmcgeW91IHVwXCIpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9IFxuICAgXG59KTtcblxuJCgnLm1vcmUtaW5mby1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybVN5bGxhYnVzID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICB2YXIgZmlyc3ROYW1lRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT10ZXh0XScpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIHZhciBmaXJzdE5hbWUgPSBmaXJzdE5hbWVGaWVsZC52YWwoKTtcbiAgIFxuICAgaWYoZW1haWwgPT0gJycgfHwgZmlyc3ROYW1lID09JycpXG4gICB7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJ1dlIG5lZWQgeW91ciBlbWFpbCBhbmQgZmlyc3QgbmFtZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICB9XG4gICBlbHNle1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCcnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3dwLWpzb24vNGcvdjEvYXBwbHkvcmVxdWVzdF9pbmZvJyxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIHVybDogV1BBU19BUFAudXJsLFxuICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMCkgZm9ybVN5bGxhYnVzLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgIGVsc2UgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQoXCJUaGVyZSBoYXMgYmVlbiBhbiBlcnJvciBzaWduaW5nIHlvdSB1cFwiKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgfSBcbiAgIFxufSk7XG5cbihmdW5jdGlvbiBsb2FkQWxlcnRzKCl7XG4gICB2YXIgZGlzbWlzc2VkQWxlcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rpc21pc3NlZF9hbGVydHMnKTtcbiAgIFxuICAgaWYoZGlzbWlzc2VkQWxlcnRzKSBkaXNtaXNzZWRBbGVydHMgPSBkaXNtaXNzZWRBbGVydHMuc3BsaXQoXCIsXCIpO1xuICAgZWxzZSBkaXNtaXNzZWRBbGVydHMgPSBbXTtcbiAgIFxuICAgdmFyIGFsbEFsZXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGVydC1kaXNtaXNzaWJsZScpO1xuICAgYWxsQWxlcnRzLmZvckVhY2goZnVuY3Rpb24oYSl7XG4gICAgICBpZihkaXNtaXNzZWRBbGVydHMuaW5kZXhPZihhLmlkKSA9PSAtMSl7XG4gICAgICAgICB2YXIgYWxlcnRUb0Rpc21pc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJythLmlkKTtcbiAgICAgICAgIGFsZXJ0VG9EaXNtaXNzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9XG4gICB9KTtcbiAgIHZhciBjbG9zZUFsZXJ0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltkYXRhLWRpc21pc3M9YWxlcnRdJyk7XG4gICBjbG9zZUFsZXJ0QnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKGJ0bil7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICBcdGNvbnNvbGUubG9nKHRoaXMucGFyZW50Tm9kZSk7XG4gICAgICAgICBpZih0eXBlb2YgdGhpcy5wYXJlbnROb2RlLmlkID09ICd1bmRlZmluZWQnKSBcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBuZWVkIHRvIHNwZWNpZnkgYW4gaWQgZm9yIGFsbCB0aGUgZGlzbWlzYWJsZSBhbGVydHMnKTtcbiAgICAgIFx0ZGlzbWlzc2VkQWxlcnRzLnB1c2godGhpcy5wYXJlbnROb2RlLmlkKTtcbiAgICAgIFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rpc21pc3NlZF9hbGVydHMnLGRpc21pc3NlZEFsZXJ0cy5qb2luKCcsJykpO1xuICAgICAgXHR0aGlzLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSk7XG4gICB9KTtcbn0pKCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICdnZXRfdXBjb21pbmdfZXZlbnQnXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpIHByb21wdFVwY29taW5nRXZlbnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgdXBjb21pbmcgZXZlbnQ6IFwiK3AzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICdnZXRfdXBjb21pbmdfZXZlbnQnLFxuICAgICAgICAgdHlwZTogJ2ludHJvX3RvX2NvZGluZydcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSkgZmlsbFVwY29taW5nSW50cm9Ub0NvZGluZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSB1cGNvbWluZyBldmVudDogXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG4gICBcbiAgIC8vbG9hZCBsb2NhdGlvbnNcbiAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvd3AtanNvbi80Zy92MS9sb2NhdGlvbnM/bGFuZz0nK1dQQVNfQVBQLmxhbmcsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGxvY2F0aW9ucyl7XG4gICAgICAgICBpZihsb2NhdGlvbnMpXG4gICAgICAgICB7XG4gICAgICAgICAgICAkKCcjc3lsbGFidXNNb2RhbCAubG9jYXRpb25zLCAuc3lsbGFidXMtZG93bmxvYWQgLmxvY2F0aW9ucycpLmh0bWwoWyc8b3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+U2VsZWN0IGEgbG9jYXRpb248L29wdGlvbj4nXS5jb25jYXQobG9jYXRpb25zLm1hcChmdW5jdGlvbihsKXtcbiAgICAgICAgICAgICAgIHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIicrbFsnYWNfbG9jYXRpb25fc2x1ZyddKydcIj4nK2xbJ3Bvc3RfdGl0bGUnXSsnPC9vcHRpb24+JztcbiAgICAgICAgICAgIH0pKS5qb2luKCcnKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vbWFyayBkZWZhdWx0IGxvY2F0aW9uXG4gICAgICAgICAgICBpZih0eXBlb2YgV1BBU19BUFAgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgIGlmKHR5cGVvZiBXUEFTX0FQUC5jaXR5X3NsdWcgIT09ICd1bmRlZmluZWQnICYmIFdQQVNfQVBQLmNpdHlfc2x1ZyAhPT0gJycpIGNvbnNvbGUubG9nKFwiSWdub3JpbmcgdXNlciBsb2NhdGlvbiBiZWNhdXNlIGhlIHNwZWNpZmllZCBhIGRpZmZlcmVudCBvbmVcIik7XG4gICAgICAgICAgICAgICBlbHNlIGlmKHR5cGVvZiBXUEFTX0FQUC5sYXRpdHVkZSAhPT0gJ3VuZGVmaW5lZCcgJiYgV1BBU19BUFAubGF0aXR1ZGUgIT09ICcnKXtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3QgPSBjbG9zZXN0TG9jYXRpb24oeyBsYXRpdHVkZTogV1BBU19BUFAubGF0aXR1ZGUsIGxvbmdpdHVkZTogV1BBU19BUFAubG9uZ2l0dWRlIH0sIGxvY2F0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAkKCcuY2l0aWVzLmRyb3Bkb3duLXNlbGVjdG9yIGJ1dHRvbiBzcGFuJykuaHRtbChjbG9zZXN0LnBvc3RfdGl0bGUpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIGFjYWRlbXkgbG9jYXRpb25zIFwiK3AzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG4gICBzZXR1cFByaWNlQ2FsY3VsYXRvcigpO1xuICAgXG4gICAkKFwiLmRyb3Bkb3duLXRvZ2dsZVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgJCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcbiAgIH0pO1xuICAgXG4gICB2YXIgbWFzdGVyV2hpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzdGhlYWQtd2hpdGUnKTtcbiAgIGlmKHR5cGVvZiBtYXN0ZXJXaGl0ZSAhPSAndW5kZWZpbmVkJyAmJiBtYXN0ZXJXaGl0ZSl7XG4gICAgICB2YXIgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpOyBcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCdpbnZlcnRlZCcpO1xuICAgfSBcbiAgIFxuICAgc3luY0RhdGFMYXllcigpO1xufSk7XG5cbmZ1bmN0aW9uIHNldHVwUHJpY2VDYWxjdWxhdG9yKCl7XG4gICBcbiAgIHZhciBQcmljZUNhbGN1bGF0b3IgPSByZXF1aXJlKCcuLi9saWIvcHJpY2VDYWxjdWxhdG9yLmpzJykuZGVmYXVsdDtcbiAgIGNvbnN0IHNsaWRlcnMgPSAkKCcucHJpY2luZy1zbGlkZXInKTtcbiAgIFxuICAgaWYoc2xpZGVycy5sZW5ndGggPT09IDApIGNvbnNvbGUubG9nKCdUaGVyZSBpcyBubyBzbGlkZXIgdG8gbG9hZCcpO1xuICAgZWxzZXtcbiAgICAgICQuYWpheCh7XG4gICAgICAgICB1cmw6ICcvd3AtanNvbi80Zy92MS9wcmljZXMnLFxuICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihwcmljZXMpe1xuICAgICAgICAgICAgaWYocHJpY2VzICYmIHR5cGVvZiBwcmljZXMuZGF0YSAhPSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIHByaWNlcyA9IHByaWNlcy5kYXRhO1xuICAgICAgICAgICAgICAgc2xpZGVycy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNsaWRlciA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHNsaWRlci5kYXRhKCdsb2NhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY291cnNlID0gc2xpZGVyLmRhdGEoJ2NvdXJzZScpO1xuICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHByaWNlc1tjb3Vyc2VdICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgcHJpY2VzW2NvdXJzZV1bbG9jYXRpb25dID09PSAndW5kZWZpbmVkJykgY29uc29sZS5lcnJvcignUHJpY2Ugbm90IGZvdW5kIGZvciAnK2NvdXJzZSsnIGF0ICcrbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgcmVuZGVyTG9jYXRpb25QcmljZXMoc2xpZGVyLCBwcmljZXNbY291cnNlXVtsb2NhdGlvbl0pO1xuICAgICAgICAgICAgICAgICAgICAgUHJpY2VDYWxjdWxhdG9yKHNsaWRlcnMsIHByaWNlc1tjb3Vyc2VdW2xvY2F0aW9uXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGNvdXJzZSBwcmljZXNcIik7XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0sXG4gICAgICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSBhY2FkZW15IHByaWNlcyBcIitwMyk7XG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTG9jYXRpb25QcmljZXMoc2xpZGVyLCBwcmljZXMpe1xuICAgY29uc3QgcHJpY2luZ0NvbXBvbmVudCA9IHNsaWRlci5jbG9zZXN0KCcucHJpY2luZy1jb21wb25lbnQnKTtcbiAgIGlmKHR5cGVvZiBwcmljZXMgPT09ICd1bmRlZmluZWQnKXtcbiAgICAgIGxldCBjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj4nO1xuICAgICAgICAgY29udGVudCArPSAnPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ibG9jayBjYXJkLXByaW1hcnkgY2FyZC1pbnZlcnNlIGJnLXllbGxvdyBtYi0zIHAtNCB0ZXh0LWNlbnRlclwiPic7XG4gICAgICAgICAgICBjb250ZW50ICs9ICdQcmljZXMgaGF2ZSBub3QgYmVlbiBkZWZpbmVkIHlldCc7XG4gICAgICAgICBjb250ZW50ICs9ICc8L2Rpdj4nO1xuICAgICAgY29udGVudCArPSAnPC9kaXY+JztcbiAgICAgIHByaWNpbmdDb21wb25lbnQuaHRtbChjb250ZW50KTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBwcmljaW5nQ29tcG9uZW50LmZpbmQoJ1tkYXRhLWNvbmNlcHQ9XCJ1cGZyb250XCJdJykuaHRtbChwcmljZXNbJ3VwZnJvbnQnXSk7XG4gICAgICBwcmljaW5nQ29tcG9uZW50LmZpbmQoJ1tkYXRhLWNvbmNlcHQ9XCJtb250aGx5XCJdJykuaHRtbChwcmljZXNbJ2ZpbmFuY2VkJ11bMF0pO1xuICAgICAgXG4gICB9XG59XG5cbmZ1bmN0aW9uIHByb21wdFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgXG4gICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9wU3RhdGUnKSAhPSAnc2hvd24nKXtcbiAgICAgIGZpbGxVcGNvbWluZ0V2ZW50KGV2ZW50KTtcbiAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5kZWxheSgyMDAwKS5mYWRlSW4oKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3BTdGF0ZScsJ3Nob3duJyk7XG4gICAgICAkKCcjdXBjb21pbmdFdmVudCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHB1dCB5b3VyIGRlZmF1bHQgZXZlbnQgaGVyZVxuICAgICAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuXG4gICB9XG59XG5cbmZ1bmN0aW9uIGZpbGxVcGNvbWluZ0ludHJvVG9Db2RpbmcoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI2ZyZWVDb2RpbmdJbnRyb01vZGFsJyk7XG4gICBtb2RhbC5maW5kKCcuZGF0ZScpLmh0bWwoZXZlbnQuZGF5KycgJytldmVudC5tb250aCsnICcrZXZlbnQueWVhcik7XG4gICBtb2RhbC5maW5kKCcubG9jYXRpb24nKS5odG1sKGV2ZW50LmFkZHJlc3MpO1xuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC51cmwpO1xuICAgXG59XG5mdW5jdGlvbiBmaWxsVXBjb21pbmdFdmVudChldmVudCl7XG4gICB2YXIgbW9kYWwgPSAkKCcjdXBjb21pbmdFdmVudCcpO1xuICAgbW9kYWwuZmluZCgnLmRheScpLmh0bWwoZXZlbnQuZGF5KTtcbiAgIG1vZGFsLmZpbmQoJy5tb250aCcpLmh0bWwoZXZlbnQubW9udGgpO1xuICAgbW9kYWwuZmluZCgnLnllYXInKS5odG1sKGV2ZW50LnllYXIpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuZXZlbnQtdGl0bGUnKS5odG1sKGV2ZW50Lm5hbWUpO1xuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRldGFpbHMnKS5odG1sKCc8c3BhbiBjbGFzcz1cImltb29uIGljb24tbG9jYXRpb25cIj48L3NwYW4+JyArIGV2ZW50LmFkZHJlc3MpOy8vMzozMHBtIC0gYXQgU3RhcnRodWIsIERvd250b3duIE1pYW1pXG4gICBcbiAgIFxuICAgdmFyIG1heExlbmd0aCA9IDM1MDsgLy8gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byBleHRyYWN0XG4gICB2YXIgdHJpbW1lZFN0cmluZyA9IGV2ZW50LmRlc2NyaXB0aW9uLnN1YnN0cigwLCBtYXhMZW5ndGgpOy8vdHJpbSB0aGUgc3RyaW5nIHRvIHRoZSBtYXhpbXVtIGxlbmd0aFxuICAgdHJpbW1lZFN0cmluZyA9IHRyaW1tZWRTdHJpbmcuc3Vic3RyKDAsIE1hdGgubWluKHRyaW1tZWRTdHJpbmcubGVuZ3RoLCB0cmltbWVkU3RyaW5nLmxhc3RJbmRleE9mKFwiLlwiKSkpOy8vcmUtdHJpbSBpZiB3ZSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHdvcmRcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXNjcmlwdGlvbicpLmh0bWwodHJpbW1lZFN0cmluZysnLicpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuYnRuLWRhbmdlcicpLmF0dHIoJ2hyZWYnLGV2ZW50LnVybCk7XG4gICBcbn1cblxuZnVuY3Rpb24gY2xvc2VzdExvY2F0aW9uKHRhcmdldExvY2F0aW9uLCBsb2NhdGlvbkRhdGEpIHtcbiAgICBmdW5jdGlvbiB2ZWN0b3JEaXN0YW5jZShkeCwgZHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYXRpb25EaXN0YW5jZShsb2NhdGlvbjEsIGxvY2F0aW9uMikge1xuICAgICAgICB2YXIgZHggPSBsb2NhdGlvbjEubGF0aXR1ZGUgLSBsb2NhdGlvbjIubGF0aXR1ZGUsXG4gICAgICAgICAgICBkeSA9IGxvY2F0aW9uMS5sb25naXR1ZGUgLSBsb2NhdGlvbjIubG9uZ2l0dWRlO1xuXG4gICAgICAgIHJldHVybiB2ZWN0b3JEaXN0YW5jZShkeCwgZHkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvbkRhdGEucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnIpIHtcbiAgICAgICAgdmFyIHByZXZEaXN0YW5jZSA9IGxvY2F0aW9uRGlzdGFuY2UodGFyZ2V0TG9jYXRpb24gLCBwcmV2KSxcbiAgICAgICAgICAgIGN1cnJEaXN0YW5jZSA9IGxvY2F0aW9uRGlzdGFuY2UodGFyZ2V0TG9jYXRpb24gLCBjdXJyKTtcbiAgICAgICAgcmV0dXJuIChwcmV2RGlzdGFuY2UgPCBjdXJyRGlzdGFuY2UpID8gcHJldiA6IGN1cnI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHN5bmNEYXRhTGF5ZXIoKXtcbiAgIFxuICAgaWYodHlwZW9mIGRhdGFMYXllciAhPSAndW5kZWZpbmVkJyl7XG4gICAgICBpZih0eXBlb2YgV1BBU19BUFAgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgIGRhdGFMYXllci5wdXNoKHsgY2l0eTogV1BBU19BUFAuY2l0eSB9KTtcbiAgICAgICAgIGRhdGFMYXllci5wdXNoKHsgY2l0eV9zbHVnOiBXUEFTX0FQUC5jaXR5X3NsdWcgfSk7XG4gICAgICAgICBkYXRhTGF5ZXIucHVzaCh7IGNvdW50cnlfbmFtZTogV1BBU19BUFAuY291bnRyeV9uYW1lIH0pO1xuICAgICAgICAgZGF0YUxheWVyLnB1c2goeyBsYW5nOiBXUEFTX0FQUC5sYW5nIH0pO1xuICAgICAgICAgZGF0YUxheWVyLnB1c2goeyBjaXR5OiBXUEFTX0FQUC5jaXR5IH0pO1xuICAgICAgfVxuICAgICAgXG4gICB9IFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuLi9zdHlsZXMvbGFuZGluZy5zY3NzJyk7XG5cbmltcG9ydCAnLi9wYWdlcy9hbGwuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzJztcblxudmFyIGJlaW5nRGlzcGxheWVkID0gZmFsc2U7XG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RpY2t5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxsLXRvLWFjdGlvbi1uYXZcIik7XG4gICAgaWYgKCFiZWluZ0Rpc3BsYXllZCAmJiB0aGlzLnNjcm9sbFkgPiAyNTApIHtcbiAgICAgICAgYmVpbmdEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICBzdGlja3lOYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChiZWluZ0Rpc3BsYXllZCAmJiB0aGlzLnNjcm9sbFkgPD0gMjUwKSB7XG4gICAgICAgIGJlaW5nRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICAgIHN0aWNreU5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9sYW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvbGFuZGluZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZnVuY3Rpb24gb25QYWdlVmlldyh1cmxDb250YWlucywgY2FsbGJhY2spe1xuICAgIC8vUGFnZSB2aWV3ID0gYXBwbHktdGhhbmsteW91XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YodXJsQ29udGFpbnMpID4gLTEpIHtcbiAgICAgICAgLy9Db2RlIGdvZXMgaGVyZVxuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH0gIFxufVxuZnVuY3Rpb24gdHJpZ2dlclRhZ01hbmFnZXJFdmVudChldmVudE5hbWUpe1xuICAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogZXZlbnROYW1lfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkOiAnK2V2ZW50TmFtZSk7XG4gICAgfVxuICAgIGVsc2UgY29uc29sZS5sb2coJ0V2ZW50IG5vdCBiZWluZyBzZW50IHRvIFRhZ01hbmFnZXI6ICcrZXZlbnROYW1lKTtcbn1cbmZ1bmN0aW9uIHNhdmVEYXRhVmFyaWFibGUoaW5kZXgsIHZhbHVlKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKSBkYXRhTGF5ZXIucHVzaCh7aW5kZXg6IHZhbHVlfSk7XG4gICAgZWxzZSBjb25zb2xlLmxvZygnSW1wb3NpYmxlIHRvIHdyaXRlICcraW5kZXgrJyBvbiBkYXRhTGF5ZXInKTtcbiAgICBcbiAgICBcbiAgICBpZih0eXBlb2YgV1BBU19BUFAgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQID0ge307XG4gICAgaWYodHlwZW9mIFdQQVNfQVBQLmRhdGFMYXllciA9PSAndW5kZWZpbmVkJykgV1BBU19BUFAuZGF0YUxheWVyID0ge307XG4gICAgV1BBU19BUFAuZGF0YUxheWVyW2luZGV4XSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gYWNfZXZlbnQoZXZlbnRLZXksIGV2ZW50TmFtZSwgdXNlckVtYWlsKXtcblxuICAvLyB3aGF0IHdlIGRvIGhlcmUsIGlzIGxvZyBhIHN1Y2Nlc3NmdWwgZXZlbnQgdG8gdGhlIGNvbnNvbGVcbiAgLy8gb3IgY2F0Y2ggYW55IGVycm9ycyB3ZSBoYXZlXG4gIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgXG4gIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkZWQgaGFsZndheSBzY3JvbGwgZXZlbnRcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8geW91ciBBY3RpdmVDYW1wYWlnbiBpZC4gWW91IGNhbiBnZXQgdGhpcyBmcm9tIHlvdXIgQUMgc2V0dGluZ3MgXG4gIHZhciBhY3RpZCA9IFwiZGIxNWEzMjY0ZmIyYWJmMTk5OTZmYTQ4ODczMDM5NzU3ZDUzNDU0NFwiOyBcblxuICB2YXIgdmlzaXQgPSB7XG4gICAgZW1haWw6IHVzZXJFbWFpbCAvLyB0aGUgdXNlcidzIGVtYWlsIGFkZHJlc3NcbiAgfTtcblxuICAvLyBnZXQgdGhlIHVybCBvZiB0aGUgcGFnZSBhbmQgc2VuZCBpdCBhcyBldmVudCBkYXRhXG4gIHZhciBldmVudERhdGEgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAvLyBidWlsZCB0aGUgZXZlbnRTdHJpbmcgYmFzZWQgb24gdGhlIHZhcmlhYmxlcyB5b3UganVzdCBlZGl0ZWQgYWJvdmUg4pidXG4gIHZhciBldmVudFN0cmluZyA9IFwiYWN0aWQ9XCIgKyBhY3RpZCBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZrZXk9XCIgKyBldmVudEtleSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZldmVudD1cIiArIGV2ZW50TmFtZSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZ2aXNpdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2aXNpdCkgXG4gICAgICAgICAgICAgICAgICAgICsgXCImZXZlbnRkYXRhXCIgKyBldmVudERhdGE7XG5cbiAgLy8gc2VuZCB0aGUgZXZlbnQgdG8gdGhlIEFjdGl2ZUNhbXBhaWduIEFQSSB3aXRoIG91ciBldmVudCB2YWx1ZXNcbiAgeGh0dHAub3BlbihcIlBPU1RcIiwgXCJodHRwczovL3RyYWNrY21wLm5ldC9ldmVudFwiLCB0cnVlKTtcbiAgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgXG4gIGlmKGV2ZW50S2V5IT0nJyAmJiBldmVudE5hbWUhPScnICYmIHVzZXJFbWFpbCE9JycpIHhodHRwLnNlbmQoZXZlbnRTdHJpbmcpO1xuICBlbHNle1xuICAgICAgaWYoZXZlbnRLZXk9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCBldmVudEtleScsZXZlbnRLZXkpO1xuICAgICAgaWYoZXZlbnROYW1lPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgZXZlbnROYW1lJyxldmVudE5hbWUpO1xuICAgICAgaWYodXNlckVtYWlsPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgdXNlckVtYWlsJyx1c2VyRW1haWwpO1xuICB9XG59XG5cbi8qKlxuICogVGFnbWFuZ2VyIGV2ZW50c1xuICoqL1xuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ3N5bGxhYnVzX2Rvd25sb2FkJyk7IFxufSk7XG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBcbiAgICB2YXIgZW1haWxJbnB1dCA9ICQoZXZlbnQudGFyZ2V0KS5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgIGlmKGVtYWlsSW5wdXQubGVuZ3RoPjApIHNhdmVEYXRhVmFyaWFibGUoJ3VzZXJFbWFpbCcsZW1haWxJbnB1dFswXS52YWx1ZSk7XG4gICAgXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnbmV3c2xldHRlcl9zaWdudXAnKTsgXG59KTtcbiQoJy5hcHBseS1idG4nKS5jbGljayhmdW5jdGlvbihldmVudCl7IHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ2FwcGxpY2F0aW9uX3JlbmRlcmVkJyk7IH0pO1xub25QYWdlVmlldyhcIi90aGFuay15b3UvYXBwbHlcIixmdW5jdGlvbigpeyB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzdHVkZW50X2FwcGxpY2F0aW9uJyk7IH0pOyBcbm9uUGFnZVZpZXcoXCIvdGhhbmsteW91L21vcmUtaW5mb1wiLGZ1bmN0aW9uKCl7IHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ21vcmVfaW5mb19yZXF1ZXN0ZWQnKTsgfSk7IFxuJCgnI2ZpbmFuY2luZ19ndWlkZV9kb3dubG9hZCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdmaW5hbmNpbmdfZ3VpZGVfZG93bmxvYWQnKTsgXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBldmVudC50YXJnZXQuaHJlZjtcbiAgICByZXR1cm4gZmFsc2U7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vbWFya2V0aW5nLWV2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljaW5nQ2FsY3VsYXRvcihzbGlkZXJzLCBtZXNzYWdlcyl7XG4gIHZhciBTbGlkZXIgPSByZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKTtcbiAgbWVzc2FnZXMgPSBtZXNzYWdlc1snZmluYW5jZWQnXTtcbiAgc2xpZGVycy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICBjb25zdCBodG1sU2xpZGVyID0gdGhpcztcbiAgICBjb25zdCBwcmljaW5nQ29tcG9uZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcucHJpY2luZy1jb21wb25lbnQnKTtcbiAgICB2YXIgbXlTbGlkZXIgPSBuZXcgU2xpZGVyKGh0bWxTbGlkZXIpO1xuICAgIG15U2xpZGVyLm9uKCdzbGlkZVN0b3AnLCBmdW5jdGlvbihjbGlja2VkSW5kZXgpe1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMobWVzc2FnZXMpW2NsaWNrZWRJbmRleF07XG4gICAgICBpZih0eXBlb2YgbWVzc2FnZXNba2V5XSAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLm1vbnRobHkpID09ICdzdHJpbmcnKSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5wcmljZS1sYWJlbCcpLmh0bWwobWVzc2FnZXNba2V5XS5tb250aGx5KTtcbiAgICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW2tleV0ubWVzc2FnZSkgIT09ICd1bmRlZmluZWQnKSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5maW5hbmNpbmctZGV0YWlscycpLmh0bWwobWVzc2FnZXNba2V5XS5tZXNzYWdlW1dQQVNfQVBQLmxhbmddKTtcbiAgICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW2tleV0ubG9nbykgPT0gJ3N0cmluZycpe1xuICAgICAgICAgIHZhciBsb2dvRWxtID0gcHJpY2luZ0NvbXBvbmVudC5maW5kKCcuZmluYW5jaW5nLWxvZ28nKTtcbiAgICAgICAgICBsb2dvRWxtLmF0dHIoJ3NyYycsbWVzc2FnZXNba2V5XS5sb2dvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcdFx0XG4gIFx0XHR2YXIgcGF5bWVudFBsYW5DYXJkID0gcHJpY2luZ0NvbXBvbmVudC5maW5kKCcucGF5bWVudC1wbGFuJyk7XG4gIFx0XHRwYXltZW50UGxhbkNhcmQuYWRkQ2xhc3MoXCJnbG93XCIpO1xuICBcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgXHRcdFx0cGF5bWVudFBsYW5DYXJkLnJlbW92ZUNsYXNzKFwiZ2xvd1wiKTtcbiAgXHRcdH0sIDIwMCk7XG4gICAgICBcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL3ByaWNlQ2FsY3VsYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIl0sInNvdXJjZVJvb3QiOiIifQ==