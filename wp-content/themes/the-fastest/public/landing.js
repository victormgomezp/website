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
   markDefaultLocation();
   
   setupPriceCalculator();
   
   var masterWhite = document.querySelector('.masthead-white');
   if(typeof masterWhite != 'undefined' && masterWhite){
      var navbar = document.querySelector('.navbar'); 
      navbar.classList.add('inverted');
   } 
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

function markDefaultLocation(){
   if(typeof WPAS_APP !== 'undefined'){
      if(typeof WPAS_APP.city_slug !== 'undefined' && WPAS_APP.city_slug !== '') console.log("Ignoring user location because he specified a different one");
      else if(typeof WPAS_APP.latitude !== 'undefined' && WPAS_APP.latitude !== '') markLocationFromLatLong();
   }
}

function markLocationFromLatLong(){
   $.ajax({
      url: '/wp-json/4g/v1/locations',
      dataType: 'JSON',
      method: 'GET',
      success: function(locations){
         console.log("Welelele.");
         if(locations)
         {
            const closest = closestLocation({ latitude: WPAS_APP.latitude, longitude: WPAS_APP.longitude }, locations);
            console.log(closest);
            $('.cities.dropdown-selector button span').html(closest.post_title);
         }
      },
      error: function(p1,p2,p3){
         console.log("Error getting the academy locations "+p3);
      }
   });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvYWxsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9sYW5kaW5nLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvbGFuZGluZy5zY3NzPzAxYTYiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUk7QUFDSixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxRDtBQUNBO0FBQ0EsSTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEseUJBQXlCLG1CQUFPLENBQUMsQ0FBMkI7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2REFBNkQ7QUFDMUc7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtHQUFrRzs7O0FBR2xHLHVCQUF1QjtBQUN2Qiw4REFBOEQ7QUFDOUQsMkdBQTJHO0FBQzNHOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEM7Ozs7Ozs7OztBQzVWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQU8sQ0FBQyxHQUF3Qjs7QUFFUjtBQUNjOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ2hCQSx5Qzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQzs7QUFFQTtBQUNBOztBQUVBLGdEO0FBQ0EsQ0FBQztBQUNELCtDOztBQUVBO0FBQ0E7O0FBRUEsZ0Q7QUFDQSxDQUFDO0FBQ0Qsc0NBQXNDLGdEQUFnRCxFQUFFO0FBQ3hGO0FBQ0E7QUFDQSxrRDtBQUNBLENBQUM7QUFDRCxxRDtBQUNBO0FBQ0EsdUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7QUM3RkQ7QUFBQTtBQUFlO0FBQ2YsZUFBZSxtQkFBTyxDQUFDLEVBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsS0FBSztBQUNMLEdBQUc7QUFDSCxDIiwiZmlsZSI6ImxhbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3ZhciBuZXdzbGV0dGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbC1uZXdzbGV0dGVyIGZvcm0nKTtcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cbiAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgaWYoZnJvbVRvcD4xMDApICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIGVsc2UgJCgnLmZvb3Rlci1iYXInKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG59KTtcblxuXG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybU5ld3NsZXR0ZXIgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtTmV3c2xldHRlci5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIFxuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICduZXdzbGV0dGVyX3NpZ251cCcsXG4gICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybU5ld3NsZXR0ZXIuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBmb3JtTmV3c2xldHRlci5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3Igc2lnbmluZyB5b3UgdXBcIik7XG4gICAgICB9XG4gICB9KTtcbiAgIFxufSk7XG5cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtU3lsbGFidXMgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBmaXJzdE5hbWVGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPXRleHRdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgdmFyIGZpcnN0TmFtZSA9IGZpcnN0TmFtZUZpZWxkLnZhbCgpO1xuICAgXG4gICBpZihlbWFpbCA9PSAnJyB8fCBmaXJzdE5hbWUgPT0nJylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnV2UgbmVlZCB5b3VyIGVtYWlsIGFuZCBmaXJzdCBuYW1lJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZG93bmxvYWRfc3lsbGFidXMnLFxuICAgICAgICAgdGVtcGxhdGU6ICh0eXBlb2YgV1BBU19BUFAudGVtcGxhdGUgPT0gJ3N0cmluZycpID8gV1BBU19BUFAudGVtcGxhdGUucmVwbGFjZSgnc2luZ2xlLScsJycpIDogJ25vbmUnLFxuICAgICAgICAgdXJsOiBXUEFTX0FQUC51cmwsXG4gICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZm9ybVN5bGxhYnVzLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICQoJyNzeWxsYWJ1c01vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQoXCJUaGVyZSBoYXMgYmVlbiBhbiBlcnJvciBzaWduaW5nIHlvdSB1cFwiKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgfSBcbiAgIFxufSk7XG5cbiQoJy5tb3JlLWluZm8tc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1TeWxsYWJ1cyA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgdmFyIGZpcnN0TmFtZUZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICB2YXIgZmlyc3ROYW1lID0gZmlyc3ROYW1lRmllbGQudmFsKCk7XG4gICBcbiAgIGlmKGVtYWlsID09ICcnIHx8IGZpcnN0TmFtZSA9PScnKVxuICAge1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCdXZSBuZWVkIHlvdXIgZW1haWwgYW5kIGZpcnN0IG5hbWUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgfVxuICAgZWxzZXtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgJC5hamF4KHtcbiAgICAgIHVybDogJy93cC1qc29uLzRnL3YxL2FwcGx5L3JlcXVlc3RfaW5mbycsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICB1cmw6IFdQQVNfQVBQLnVybCxcbiAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApIGZvcm1TeWxsYWJ1cy5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICBlbHNlIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3Igc2lnbmluZyB5b3UgdXBcIik7XG4gICAgICB9XG4gICB9KTtcbiAgIH0gXG4gICBcbn0pO1xuXG4oZnVuY3Rpb24gbG9hZEFsZXJ0cygpe1xuICAgdmFyIGRpc21pc3NlZEFsZXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkaXNtaXNzZWRfYWxlcnRzJyk7XG4gICBcbiAgIGlmKGRpc21pc3NlZEFsZXJ0cykgZGlzbWlzc2VkQWxlcnRzID0gZGlzbWlzc2VkQWxlcnRzLnNwbGl0KFwiLFwiKTtcbiAgIGVsc2UgZGlzbWlzc2VkQWxlcnRzID0gW107XG4gICBcbiAgIHZhciBhbGxBbGVydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtZGlzbWlzc2libGUnKTtcbiAgIGFsbEFsZXJ0cy5mb3JFYWNoKGZ1bmN0aW9uKGEpe1xuICAgICAgaWYoZGlzbWlzc2VkQWxlcnRzLmluZGV4T2YoYS5pZCkgPT0gLTEpe1xuICAgICAgICAgdmFyIGFsZXJ0VG9EaXNtaXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrYS5pZCk7XG4gICAgICAgICBhbGVydFRvRGlzbWlzcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgfSk7XG4gICB2YXIgY2xvc2VBbGVydEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1kaXNtaXNzPWFsZXJ0XScpO1xuICAgY2xvc2VBbGVydEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihidG4pe1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgXHRjb25zb2xlLmxvZyh0aGlzLnBhcmVudE5vZGUpO1xuICAgICAgICAgaWYodHlwZW9mIHRoaXMucGFyZW50Tm9kZS5pZCA9PSAndW5kZWZpbmVkJykgXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGFuIGlkIGZvciBhbGwgdGhlIGRpc21pc2FibGUgYWxlcnRzJyk7XG4gICAgICBcdGRpc21pc3NlZEFsZXJ0cy5wdXNoKHRoaXMucGFyZW50Tm9kZS5pZCk7XG4gICAgICBcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkaXNtaXNzZWRfYWxlcnRzJyxkaXNtaXNzZWRBbGVydHMuam9pbignLCcpKTtcbiAgICAgIFx0dGhpcy5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgfSk7XG59KSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50J1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBwcm9tcHRVcGNvbWluZ0V2ZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50JyxcbiAgICAgICAgIHR5cGU6ICdpbnRyb190b19jb2RpbmcnXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpIGZpbGxVcGNvbWluZ0ludHJvVG9Db2RpbmcocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgdXBjb21pbmcgZXZlbnQ6IFwiK3AzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgbWFya0RlZmF1bHRMb2NhdGlvbigpO1xuICAgXG4gICBzZXR1cFByaWNlQ2FsY3VsYXRvcigpO1xuICAgXG4gICB2YXIgbWFzdGVyV2hpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzdGhlYWQtd2hpdGUnKTtcbiAgIGlmKHR5cGVvZiBtYXN0ZXJXaGl0ZSAhPSAndW5kZWZpbmVkJyAmJiBtYXN0ZXJXaGl0ZSl7XG4gICAgICB2YXIgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpOyBcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCdpbnZlcnRlZCcpO1xuICAgfSBcbn0pO1xuXG5mdW5jdGlvbiBzZXR1cFByaWNlQ2FsY3VsYXRvcigpe1xuICAgXG4gICB2YXIgUHJpY2VDYWxjdWxhdG9yID0gcmVxdWlyZSgnLi4vbGliL3ByaWNlQ2FsY3VsYXRvci5qcycpLmRlZmF1bHQ7XG4gICBjb25zdCBzbGlkZXJzID0gJCgnLnByaWNpbmctc2xpZGVyJyk7XG4gICBcbiAgIGlmKHNsaWRlcnMubGVuZ3RoID09PSAwKSBjb25zb2xlLmxvZygnVGhlcmUgaXMgbm8gc2xpZGVyIHRvIGxvYWQnKTtcbiAgIGVsc2V7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICAgdXJsOiAnL3dwLWpzb24vNGcvdjEvcHJpY2VzJyxcbiAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocHJpY2VzKXtcbiAgICAgICAgICAgIGlmKHByaWNlcyAmJiB0eXBlb2YgcHJpY2VzLmRhdGEgIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBwcmljZXMgPSBwcmljZXMuZGF0YTtcbiAgICAgICAgICAgICAgIHNsaWRlcnMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzbGlkZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBzbGlkZXIuZGF0YSgnbG9jYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdXJzZSA9IHNsaWRlci5kYXRhKCdjb3Vyc2UnKTtcbiAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBwcmljZXNbY291cnNlXSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHByaWNlc1tjb3Vyc2VdW2xvY2F0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIGNvbnNvbGUuZXJyb3IoJ1ByaWNlIG5vdCBmb3VuZCBmb3IgJytjb3Vyc2UrJyBhdCAnK2xvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHJlbmRlckxvY2F0aW9uUHJpY2VzKHNsaWRlciwgcHJpY2VzW2NvdXJzZV1bbG9jYXRpb25dKTtcbiAgICAgICAgICAgICAgICAgICAgIFByaWNlQ2FsY3VsYXRvcihzbGlkZXJzLCBwcmljZXNbY291cnNlXVtsb2NhdGlvbl0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBjb3Vyc2UgcHJpY2VzXCIpO1xuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9LFxuICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgYWNhZGVteSBwcmljZXMgXCIrcDMpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2F0aW9uUHJpY2VzKHNsaWRlciwgcHJpY2VzKXtcbiAgIGNvbnN0IHByaWNpbmdDb21wb25lbnQgPSBzbGlkZXIuY2xvc2VzdCgnLnByaWNpbmctY29tcG9uZW50Jyk7XG4gICBpZih0eXBlb2YgcHJpY2VzID09PSAndW5kZWZpbmVkJyl7XG4gICAgICBsZXQgY29udGVudCA9ICc8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+JztcbiAgICAgICAgIGNvbnRlbnQgKz0gJzxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYmxvY2sgY2FyZC1wcmltYXJ5IGNhcmQtaW52ZXJzZSBiZy15ZWxsb3cgbWItMyBwLTQgdGV4dC1jZW50ZXJcIj4nO1xuICAgICAgICAgICAgY29udGVudCArPSAnUHJpY2VzIGhhdmUgbm90IGJlZW4gZGVmaW5lZCB5ZXQnO1xuICAgICAgICAgY29udGVudCArPSAnPC9kaXY+JztcbiAgICAgIGNvbnRlbnQgKz0gJzwvZGl2Pic7XG4gICAgICBwcmljaW5nQ29tcG9uZW50Lmh0bWwoY29udGVudCk7XG4gICB9XG4gICBlbHNle1xuICAgICAgcHJpY2luZ0NvbXBvbmVudC5maW5kKCdbZGF0YS1jb25jZXB0PVwidXBmcm9udFwiXScpLmh0bWwocHJpY2VzWyd1cGZyb250J10pO1xuICAgICAgcHJpY2luZ0NvbXBvbmVudC5maW5kKCdbZGF0YS1jb25jZXB0PVwibW9udGhseVwiXScpLmh0bWwocHJpY2VzWydmaW5hbmNlZCddWzBdKTtcbiAgICAgIFxuICAgfVxufVxuXG5mdW5jdGlvbiBwcm9tcHRVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIFxuICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BvcFN0YXRlJykgIT0gJ3Nob3duJyl7XG4gICAgICBmaWxsVXBjb21pbmdFdmVudChldmVudCk7XG4gICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikuZGVsYXkoMjAwMCkuZmFkZUluKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9wU3RhdGUnLCdzaG93bicpO1xuICAgICAgJCgnI3VwY29taW5nRXZlbnQnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBwdXQgeW91ciBkZWZhdWx0IGV2ZW50IGhlcmVcbiAgICAgICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgfVxufVxuXG5mdW5jdGlvbiBtYXJrRGVmYXVsdExvY2F0aW9uKCl7XG4gICBpZih0eXBlb2YgV1BBU19BUFAgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgIGlmKHR5cGVvZiBXUEFTX0FQUC5jaXR5X3NsdWcgIT09ICd1bmRlZmluZWQnICYmIFdQQVNfQVBQLmNpdHlfc2x1ZyAhPT0gJycpIGNvbnNvbGUubG9nKFwiSWdub3JpbmcgdXNlciBsb2NhdGlvbiBiZWNhdXNlIGhlIHNwZWNpZmllZCBhIGRpZmZlcmVudCBvbmVcIik7XG4gICAgICBlbHNlIGlmKHR5cGVvZiBXUEFTX0FQUC5sYXRpdHVkZSAhPT0gJ3VuZGVmaW5lZCcgJiYgV1BBU19BUFAubGF0aXR1ZGUgIT09ICcnKSBtYXJrTG9jYXRpb25Gcm9tTGF0TG9uZygpO1xuICAgfVxufVxuXG5mdW5jdGlvbiBtYXJrTG9jYXRpb25Gcm9tTGF0TG9uZygpe1xuICAgJC5hamF4KHtcbiAgICAgIHVybDogJy93cC1qc29uLzRnL3YxL2xvY2F0aW9ucycsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGxvY2F0aW9ucyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIldlbGVsZWxlLlwiKTtcbiAgICAgICAgIGlmKGxvY2F0aW9ucylcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3QgPSBjbG9zZXN0TG9jYXRpb24oeyBsYXRpdHVkZTogV1BBU19BUFAubGF0aXR1ZGUsIGxvbmdpdHVkZTogV1BBU19BUFAubG9uZ2l0dWRlIH0sIGxvY2F0aW9ucyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjbG9zZXN0KTtcbiAgICAgICAgICAgICQoJy5jaXRpZXMuZHJvcGRvd24tc2VsZWN0b3IgYnV0dG9uIHNwYW4nKS5odG1sKGNsb3Nlc3QucG9zdF90aXRsZSk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgYWNhZGVteSBsb2NhdGlvbnMgXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbGxVcGNvbWluZ0ludHJvVG9Db2RpbmcoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI2ZyZWVDb2RpbmdJbnRyb01vZGFsJyk7XG4gICBtb2RhbC5maW5kKCcuZGF0ZScpLmh0bWwoZXZlbnQuZGF5KycgJytldmVudC5tb250aCsnICcrZXZlbnQueWVhcik7XG4gICBtb2RhbC5maW5kKCcubG9jYXRpb24nKS5odG1sKGV2ZW50LmFkZHJlc3MpO1xuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC51cmwpO1xuICAgXG59XG5mdW5jdGlvbiBmaWxsVXBjb21pbmdFdmVudChldmVudCl7XG4gICB2YXIgbW9kYWwgPSAkKCcjdXBjb21pbmdFdmVudCcpO1xuICAgbW9kYWwuZmluZCgnLmRheScpLmh0bWwoZXZlbnQuZGF5KTtcbiAgIG1vZGFsLmZpbmQoJy5tb250aCcpLmh0bWwoZXZlbnQubW9udGgpO1xuICAgbW9kYWwuZmluZCgnLnllYXInKS5odG1sKGV2ZW50LnllYXIpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuZXZlbnQtdGl0bGUnKS5odG1sKGV2ZW50Lm5hbWUpO1xuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRldGFpbHMnKS5odG1sKCc8c3BhbiBjbGFzcz1cImltb29uIGljb24tbG9jYXRpb25cIj48L3NwYW4+JyArIGV2ZW50LmFkZHJlc3MpOy8vMzozMHBtIC0gYXQgU3RhcnRodWIsIERvd250b3duIE1pYW1pXG4gICBcbiAgIFxuICAgdmFyIG1heExlbmd0aCA9IDM1MDsgLy8gbWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byBleHRyYWN0XG4gICB2YXIgdHJpbW1lZFN0cmluZyA9IGV2ZW50LmRlc2NyaXB0aW9uLnN1YnN0cigwLCBtYXhMZW5ndGgpOy8vdHJpbSB0aGUgc3RyaW5nIHRvIHRoZSBtYXhpbXVtIGxlbmd0aFxuICAgdHJpbW1lZFN0cmluZyA9IHRyaW1tZWRTdHJpbmcuc3Vic3RyKDAsIE1hdGgubWluKHRyaW1tZWRTdHJpbmcubGVuZ3RoLCB0cmltbWVkU3RyaW5nLmxhc3RJbmRleE9mKFwiLlwiKSkpOy8vcmUtdHJpbSBpZiB3ZSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHdvcmRcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXNjcmlwdGlvbicpLmh0bWwodHJpbW1lZFN0cmluZysnLicpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuYnRuLWRhbmdlcicpLmF0dHIoJ2hyZWYnLGV2ZW50LnVybCk7XG4gICBcbn1cblxuZnVuY3Rpb24gY2xvc2VzdExvY2F0aW9uKHRhcmdldExvY2F0aW9uLCBsb2NhdGlvbkRhdGEpIHtcbiAgICBmdW5jdGlvbiB2ZWN0b3JEaXN0YW5jZShkeCwgZHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYXRpb25EaXN0YW5jZShsb2NhdGlvbjEsIGxvY2F0aW9uMikge1xuICAgICAgICB2YXIgZHggPSBsb2NhdGlvbjEubGF0aXR1ZGUgLSBsb2NhdGlvbjIubGF0aXR1ZGUsXG4gICAgICAgICAgICBkeSA9IGxvY2F0aW9uMS5sb25naXR1ZGUgLSBsb2NhdGlvbjIubG9uZ2l0dWRlO1xuXG4gICAgICAgIHJldHVybiB2ZWN0b3JEaXN0YW5jZShkeCwgZHkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvbkRhdGEucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnIpIHtcbiAgICAgICAgdmFyIHByZXZEaXN0YW5jZSA9IGxvY2F0aW9uRGlzdGFuY2UodGFyZ2V0TG9jYXRpb24gLCBwcmV2KSxcbiAgICAgICAgICAgIGN1cnJEaXN0YW5jZSA9IGxvY2F0aW9uRGlzdGFuY2UodGFyZ2V0TG9jYXRpb24gLCBjdXJyKTtcbiAgICAgICAgcmV0dXJuIChwcmV2RGlzdGFuY2UgPCBjdXJyRGlzdGFuY2UpID8gcHJldiA6IGN1cnI7XG4gICAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInJlcXVpcmUoJy4uL3N0eWxlcy9sYW5kaW5nLnNjc3MnKTtcblxuaW1wb3J0ICcuL3BhZ2VzL2FsbC5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL21hcmtldGluZy1ldmVudHMuanMnO1xuXG52YXIgYmVpbmdEaXNwbGF5ZWQgPSBmYWxzZTtcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGlja3lOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbGwtdG8tYWN0aW9uLW5hdlwiKTtcbiAgICBpZiAoIWJlaW5nRGlzcGxheWVkICYmIHRoaXMuc2Nyb2xsWSA+IDI1MCkge1xuICAgICAgICBiZWluZ0Rpc3BsYXllZCA9IHRydWU7XG4gICAgICAgIHN0aWNreU5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGJlaW5nRGlzcGxheWVkICYmIHRoaXMuc2Nyb2xsWSA8PSAyNTApIHtcbiAgICAgICAgYmVpbmdEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgc3RpY2t5TmF2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xhbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9sYW5kaW5nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJmdW5jdGlvbiBvblBhZ2VWaWV3KHVybENvbnRhaW5zLCBjYWxsYmFjayl7XG4gICAgLy9QYWdlIHZpZXcgPSBhcHBseS10aGFuay15b3VcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZih1cmxDb250YWlucykgPiAtMSkge1xuICAgICAgICAvL0NvZGUgZ29lcyBoZXJlXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSAgXG59XG5mdW5jdGlvbiB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KGV2ZW50TmFtZSl7XG4gICAgaWYodHlwZW9mIGRhdGFMYXllciAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGRhdGFMYXllci5wdXNoKHsnZXZlbnQnOiBldmVudE5hbWV9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0V2ZW50IHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ6ICcrZXZlbnROYW1lKTtcbiAgICB9XG4gICAgZWxzZSBjb25zb2xlLmxvZygnRXZlbnQgbm90IGJlaW5nIHNlbnQgdG8gVGFnTWFuYWdlcjogJytldmVudE5hbWUpO1xufVxuZnVuY3Rpb24gc2F2ZURhdGFWYXJpYWJsZShpbmRleCwgdmFsdWUpe1xuICAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpIGRhdGFMYXllci5wdXNoKHtpbmRleDogdmFsdWV9KTtcbiAgICBlbHNlIGNvbnNvbGUubG9nKCdJbXBvc2libGUgdG8gd3JpdGUgJytpbmRleCsnIG9uIGRhdGFMYXllcicpO1xuICAgIFxuICAgIFxuICAgIGlmKHR5cGVvZiBXUEFTX0FQUCA9PSAndW5kZWZpbmVkJykgV1BBU19BUFAgPSB7fTtcbiAgICBpZih0eXBlb2YgV1BBU19BUFAuZGF0YUxheWVyID09ICd1bmRlZmluZWQnKSBXUEFTX0FQUC5kYXRhTGF5ZXIgPSB7fTtcbiAgICBXUEFTX0FQUC5kYXRhTGF5ZXJbaW5kZXhdID0gdmFsdWU7XG59XG5mdW5jdGlvbiBhY19ldmVudChldmVudEtleSwgZXZlbnROYW1lLCB1c2VyRW1haWwpe1xuXG4gIC8vIHdoYXQgd2UgZG8gaGVyZSwgaXMgbG9nIGEgc3VjY2Vzc2Z1bCBldmVudCB0byB0aGUgY29uc29sZVxuICAvLyBvciBjYXRjaCBhbnkgZXJyb3JzIHdlIGhhdmVcbiAgdmFyIHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7ICBcbiAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coXCJSZWNvcmRlZCBoYWxmd2F5IHNjcm9sbCBldmVudFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgIH1cbiAgfTtcblxuICAvLyB5b3VyIEFjdGl2ZUNhbXBhaWduIGlkLiBZb3UgY2FuIGdldCB0aGlzIGZyb20geW91ciBBQyBzZXR0aW5ncyBcbiAgdmFyIGFjdGlkID0gXCJkYjE1YTMyNjRmYjJhYmYxOTk5NmZhNDg4NzMwMzk3NTdkNTM0NTQ0XCI7IFxuXG4gIHZhciB2aXNpdCA9IHtcbiAgICBlbWFpbDogdXNlckVtYWlsIC8vIHRoZSB1c2VyJ3MgZW1haWwgYWRkcmVzc1xuICB9O1xuXG4gIC8vIGdldCB0aGUgdXJsIG9mIHRoZSBwYWdlIGFuZCBzZW5kIGl0IGFzIGV2ZW50IGRhdGFcbiAgdmFyIGV2ZW50RGF0YSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gIC8vIGJ1aWxkIHRoZSBldmVudFN0cmluZyBiYXNlZCBvbiB0aGUgdmFyaWFibGVzIHlvdSBqdXN0IGVkaXRlZCBhYm92ZSDimJ1cbiAgdmFyIGV2ZW50U3RyaW5nID0gXCJhY3RpZD1cIiArIGFjdGlkIFxuICAgICAgICAgICAgICAgICAgICArIFwiJmtleT1cIiArIGV2ZW50S2V5IFxuICAgICAgICAgICAgICAgICAgICArIFwiJmV2ZW50PVwiICsgZXZlbnROYW1lIFxuICAgICAgICAgICAgICAgICAgICArIFwiJnZpc2l0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZpc2l0KSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZldmVudGRhdGFcIiArIGV2ZW50RGF0YTtcblxuICAvLyBzZW5kIHRoZSBldmVudCB0byB0aGUgQWN0aXZlQ2FtcGFpZ24gQVBJIHdpdGggb3VyIGV2ZW50IHZhbHVlc1xuICB4aHR0cC5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vdHJhY2tjbXAubmV0L2V2ZW50XCIsIHRydWUpO1xuICB4aHR0cC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICBcbiAgaWYoZXZlbnRLZXkhPScnICYmIGV2ZW50TmFtZSE9JycgJiYgdXNlckVtYWlsIT0nJykgeGh0dHAuc2VuZChldmVudFN0cmluZyk7XG4gIGVsc2V7XG4gICAgICBpZihldmVudEtleT09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIGV2ZW50S2V5JyxldmVudEtleSk7XG4gICAgICBpZihldmVudE5hbWU9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCBldmVudE5hbWUnLGV2ZW50TmFtZSk7XG4gICAgICBpZih1c2VyRW1haWw9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCB1c2VyRW1haWwnLHVzZXJFbWFpbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUYWdtYW5nZXIgZXZlbnRzXG4gKiovXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBcbiAgICB2YXIgZW1haWxJbnB1dCA9ICQoZXZlbnQudGFyZ2V0KS5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgIGlmKGVtYWlsSW5wdXQubGVuZ3RoPjApIHNhdmVEYXRhVmFyaWFibGUoJ3VzZXJFbWFpbCcsZW1haWxJbnB1dFswXS52YWx1ZSk7XG4gICAgXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnc3lsbGFidXNfZG93bmxvYWQnKTsgXG59KTtcbiQoJy5uZXdzbGV0dGVyLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7IFxuICAgIFxuICAgIHZhciBlbWFpbElucHV0ID0gJChldmVudC50YXJnZXQpLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICAgaWYoZW1haWxJbnB1dC5sZW5ndGg+MCkgc2F2ZURhdGFWYXJpYWJsZSgndXNlckVtYWlsJyxlbWFpbElucHV0WzBdLnZhbHVlKTtcbiAgICBcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCduZXdzbGV0dGVyX3NpZ251cCcpOyBcbn0pO1xuJCgnLmFwcGx5LWJ0bicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXsgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnYXBwbGljYXRpb25fcmVuZGVyZWQnKTsgfSk7XG5vblBhZ2VWaWV3KFwiL2FwcGx5LXRoYW5rLXlvdVwiLGZ1bmN0aW9uKCl7XG4gICAgLy9Db2RlIGdvZXMgaGVyZVxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ3N0dWRlbnRfYXBwbGljYXRpb24nKTsgXG59KTtcbiQoJyNmaW5hbmNpbmdfZ3VpZGVfZG93bmxvYWQnKS5jbGljayhmdW5jdGlvbihldmVudCl7IFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnZmluYW5jaW5nX2d1aWRlX2Rvd25sb2FkJyk7IFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZXZlbnQudGFyZ2V0LmhyZWY7XG4gICAgcmV0dXJuIGZhbHNlO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL21hcmtldGluZy1ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2luZ0NhbGN1bGF0b3Ioc2xpZGVycywgbWVzc2FnZXMpe1xuICB2YXIgU2xpZGVyID0gcmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIik7XG4gIG1lc3NhZ2VzID0gbWVzc2FnZXNbJ2ZpbmFuY2VkJ107XG4gIHNsaWRlcnMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgY29uc3QgaHRtbFNsaWRlciA9IHRoaXM7XG4gICAgY29uc3QgcHJpY2luZ0NvbXBvbmVudCA9ICQodGhpcykuY2xvc2VzdCgnLnByaWNpbmctY29tcG9uZW50Jyk7XG4gICAgdmFyIG15U2xpZGVyID0gbmV3IFNsaWRlcihodG1sU2xpZGVyKTtcbiAgICBteVNsaWRlci5vbignc2xpZGVTdG9wJywgZnVuY3Rpb24oY2xpY2tlZEluZGV4KXtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG1lc3NhZ2VzKVtjbGlja2VkSW5kZXhdO1xuICAgICAgaWYodHlwZW9mIG1lc3NhZ2VzW2tleV0gIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBpZih0eXBlb2YobWVzc2FnZXNba2V5XS5tb250aGx5KSA9PSAnc3RyaW5nJykgcHJpY2luZ0NvbXBvbmVudC5maW5kKCcucHJpY2UtbGFiZWwnKS5odG1sKG1lc3NhZ2VzW2tleV0ubW9udGhseSk7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLm1lc3NhZ2UpICE9PSAndW5kZWZpbmVkJykgcHJpY2luZ0NvbXBvbmVudC5maW5kKCcuZmluYW5jaW5nLWRldGFpbHMnKS5odG1sKG1lc3NhZ2VzW2tleV0ubWVzc2FnZVtXUEFTX0FQUC5sYW5nXSk7XG4gICAgICAgIGlmKHR5cGVvZihtZXNzYWdlc1trZXldLmxvZ28pID09ICdzdHJpbmcnKXtcbiAgICAgICAgICB2YXIgbG9nb0VsbSA9IHByaWNpbmdDb21wb25lbnQuZmluZCgnLmZpbmFuY2luZy1sb2dvJyk7XG4gICAgICAgICAgbG9nb0VsbS5hdHRyKCdzcmMnLG1lc3NhZ2VzW2tleV0ubG9nbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXHRcdFxuICBcdFx0dmFyIHBheW1lbnRQbGFuQ2FyZCA9IHByaWNpbmdDb21wb25lbnQuZmluZCgnLnBheW1lbnQtcGxhbicpO1xuICBcdFx0cGF5bWVudFBsYW5DYXJkLmFkZENsYXNzKFwiZ2xvd1wiKTtcbiAgXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIFx0XHRcdHBheW1lbnRQbGFuQ2FyZC5yZW1vdmVDbGFzcyhcImdsb3dcIik7XG4gIFx0XHR9LCAyMDApO1xuICAgICAgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9wcmljZUNhbGN1bGF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=