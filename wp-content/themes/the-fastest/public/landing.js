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
            $('#syllabusModal .locations').html(['<option value="select">Select a location</option>'].concat(locations.map(function(l){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvYWxsLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9sYW5kaW5nLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvbGFuZGluZy5zY3NzPzAxYTYiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsSTs7QUFFQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEk7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDZEQUE2RDtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxxRDtBQUNBO0FBQ0EsSTs7QUFFQSxDQUFDOztBQUVEOztBQUVBLHlCQUF5QixtQkFBTyxDQUFDLENBQTJCO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0dBQWtHOzs7QUFHbEcsdUJBQXVCO0FBQ3ZCLDhEQUE4RDtBQUM5RCwyR0FBMkc7QUFDM0c7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7O0FDOVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTyxDQUFDLEdBQXdCOztBQUVSO0FBQ2M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDaEJBLHlDOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsYUFBYTtBQUNyRTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDOztBQUVBO0FBQ0E7O0FBRUEsZ0Q7QUFDQSxDQUFDO0FBQ0QsK0M7O0FBRUE7QUFDQTs7QUFFQSxnRDtBQUNBLENBQUM7QUFDRCxzQ0FBc0MsZ0RBQWdELEVBQUU7QUFDeEY7QUFDQTtBQUNBLGtEO0FBQ0EsQ0FBQztBQUNELHFEO0FBQ0E7QUFDQSx1RDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7OztBQzdGRDtBQUFBO0FBQWU7QUFDZixlQUFlLG1CQUFPLENBQUMsRUFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxLQUFLO0FBQ0wsR0FBRztBQUNILEMiLCJmaWxlIjoibGFuZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdmFyIG5ld3NsZXR0ZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLW5ld3NsZXR0ZXIgZm9ybScpO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICBpZihmcm9tVG9wPjEwMCkgJCgnLmZvb3Rlci1iYXInKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgZWxzZSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbn0pO1xuXG5cbiQoJy5uZXdzbGV0dGVyLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtTmV3c2xldHRlciA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1OZXdzbGV0dGVyLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgXG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ25ld3NsZXR0ZXJfc2lnbnVwJyxcbiAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmb3JtTmV3c2xldHRlci5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGZvcm1OZXdzbGV0dGVyLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQoXCJUaGVyZSBoYXMgYmVlbiBhbiBlcnJvciBzaWduaW5nIHlvdSB1cFwiKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgXG59KTtcblxuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1TeWxsYWJ1cyA9ICQodGhpcyk7XG4gICB2YXIgYnV0dG9uID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2J1dHRvbicpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBmaXJzdE5hbWVGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPXRleHRdJyk7XG4gICB2YXIgbG9jYXRpb25GaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCcubG9jYXRpb25zJyk7XG4gICB2YXIgbG9jYXRpb24gPSBsb2NhdGlvbkZpZWxkLnZhbCgpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIHZhciBmaXJzdE5hbWUgPSBmaXJzdE5hbWVGaWVsZC52YWwoKTtcbiAgIFxuICAgaWYoZW1haWwgPT0gJycgfHwgZmlyc3ROYW1lID09JycpXG4gICB7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJ1dlIG5lZWQgeW91ciBlbWFpbCBhbmQgZmlyc3QgbmFtZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICB9XG4gICBlbHNlIGlmKGxvY2F0aW9uPT0nJyB8fCBsb2NhdGlvbj09J3NlbGVjdCcpXG4gICB7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJ1BsZWFzZSBzZWxlY3QgYSBMb2NhdGlvbicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICB9XG4gICBlbHNle1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCcnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICBidXR0b24uaHRtbChcIkxvYWRpbmcuLi5cIik7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2Rvd25sb2FkX3N5bGxhYnVzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAodHlwZW9mIFdQQVNfQVBQLnRlbXBsYXRlID09ICdzdHJpbmcnKSA/IFdQQVNfQVBQLnRlbXBsYXRlLnJlcGxhY2UoJ3NpbmdsZS0nLCcnKSA6ICdub25lJyxcbiAgICAgICAgICAgIHVybDogV1BBU19BUFAudXJsLFxuICAgICAgICAgICAgdXRtX2xvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZVxuICAgICAgICAgfSxcbiAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5odG1sKFwiRG93bmxvYWRcIik7XG4gICAgICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZm9ybVN5bGxhYnVzLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICQoJyNzeWxsYWJ1c01vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVsc2UgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0sXG4gICAgICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoXCJEb3dubG9hZFwiKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3Igc2lnbmluZyB5b3UgdXBcIik7XG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH0gXG4gICBcbn0pO1xuXG4kKCcubW9yZS1pbmZvLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtU3lsbGFidXMgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBmaXJzdE5hbWVGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPXRleHRdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgdmFyIGZpcnN0TmFtZSA9IGZpcnN0TmFtZUZpZWxkLnZhbCgpO1xuICAgXG4gICBpZihlbWFpbCA9PSAnJyB8fCBmaXJzdE5hbWUgPT0nJylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnV2UgbmVlZCB5b3VyIGVtYWlsIGFuZCBmaXJzdCBuYW1lJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvd3AtanNvbi80Zy92MS9hcHBseS9yZXF1ZXN0X2luZm8nLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgdXJsOiBXUEFTX0FQUC51cmwsXG4gICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKSBmb3JtU3lsbGFidXMuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgZWxzZSBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChcIlRoZXJlIGhhcyBiZWVuIGFuIGVycm9yIHNpZ25pbmcgeW91IHVwXCIpO1xuICAgICAgfVxuICAgfSk7XG4gICB9IFxuICAgXG59KTtcblxuKGZ1bmN0aW9uIGxvYWRBbGVydHMoKXtcbiAgIHZhciBkaXNtaXNzZWRBbGVydHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlzbWlzc2VkX2FsZXJ0cycpO1xuICAgXG4gICBpZihkaXNtaXNzZWRBbGVydHMpIGRpc21pc3NlZEFsZXJ0cyA9IGRpc21pc3NlZEFsZXJ0cy5zcGxpdChcIixcIik7XG4gICBlbHNlIGRpc21pc3NlZEFsZXJ0cyA9IFtdO1xuICAgXG4gICB2YXIgYWxsQWxlcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJ0LWRpc21pc3NpYmxlJyk7XG4gICBhbGxBbGVydHMuZm9yRWFjaChmdW5jdGlvbihhKXtcbiAgICAgIGlmKGRpc21pc3NlZEFsZXJ0cy5pbmRleE9mKGEuaWQpID09IC0xKXtcbiAgICAgICAgIHZhciBhbGVydFRvRGlzbWlzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK2EuaWQpO1xuICAgICAgICAgYWxlcnRUb0Rpc21pc3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH1cbiAgIH0pO1xuICAgdmFyIGNsb3NlQWxlcnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEtZGlzbWlzcz1hbGVydF0nKTtcbiAgIGNsb3NlQWxlcnRCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oYnRuKXtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgIFx0Y29uc29sZS5sb2codGhpcy5wYXJlbnROb2RlKTtcbiAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnBhcmVudE5vZGUuaWQgPT0gJ3VuZGVmaW5lZCcpIFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWW91IG5lZWQgdG8gc3BlY2lmeSBhbiBpZCBmb3IgYWxsIHRoZSBkaXNtaXNhYmxlIGFsZXJ0cycpO1xuICAgICAgXHRkaXNtaXNzZWRBbGVydHMucHVzaCh0aGlzLnBhcmVudE5vZGUuaWQpO1xuICAgICAgXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzbWlzc2VkX2FsZXJ0cycsZGlzbWlzc2VkQWxlcnRzLmpvaW4oJywnKSk7XG4gICAgICBcdHRoaXMucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcbiAgIH0pO1xufSkoKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2dldF91cGNvbWluZ19ldmVudCdcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSkgcHJvbXB0VXBjb21pbmdFdmVudChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSB1cGNvbWluZyBldmVudDogXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2dldF91cGNvbWluZ19ldmVudCcsXG4gICAgICAgICB0eXBlOiAnaW50cm9fdG9fY29kaW5nJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBmaWxsVXBjb21pbmdJbnRyb1RvQ29kaW5nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxuICAgLy9sb2FkIGxvY2F0aW9uc1xuICAgJC5hamF4KHtcbiAgICAgIHVybDogJy93cC1qc29uLzRnL3YxL2xvY2F0aW9ucz9sYW5nPScrV1BBU19BUFAubGFuZyxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24obG9jYXRpb25zKXtcbiAgICAgICAgIGlmKGxvY2F0aW9ucylcbiAgICAgICAgIHtcbiAgICAgICAgICAgICQoJyNzeWxsYWJ1c01vZGFsIC5sb2NhdGlvbnMnKS5odG1sKFsnPG9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPlNlbGVjdCBhIGxvY2F0aW9uPC9vcHRpb24+J10uY29uY2F0KGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24obCl7XG4gICAgICAgICAgICAgICByZXR1cm4gJzxvcHRpb24gdmFsdWU9XCInK2xbJ2FjX2xvY2F0aW9uX3NsdWcnXSsnXCI+JytsWydwb3N0X3RpdGxlJ10rJzwvb3B0aW9uPic7XG4gICAgICAgICAgICB9KSkuam9pbignJykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL21hcmsgZGVmYXVsdCBsb2NhdGlvblxuICAgICAgICAgICAgaWYodHlwZW9mIFdQQVNfQVBQICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICBpZih0eXBlb2YgV1BBU19BUFAuY2l0eV9zbHVnICE9PSAndW5kZWZpbmVkJyAmJiBXUEFTX0FQUC5jaXR5X3NsdWcgIT09ICcnKSBjb25zb2xlLmxvZyhcIklnbm9yaW5nIHVzZXIgbG9jYXRpb24gYmVjYXVzZSBoZSBzcGVjaWZpZWQgYSBkaWZmZXJlbnQgb25lXCIpO1xuICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgV1BBU19BUFAubGF0aXR1ZGUgIT09ICd1bmRlZmluZWQnICYmIFdQQVNfQVBQLmxhdGl0dWRlICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0ID0gY2xvc2VzdExvY2F0aW9uKHsgbGF0aXR1ZGU6IFdQQVNfQVBQLmxhdGl0dWRlLCBsb25naXR1ZGU6IFdQQVNfQVBQLmxvbmdpdHVkZSB9LCBsb2NhdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgJCgnLmNpdGllcy5kcm9wZG93bi1zZWxlY3RvciBidXR0b24gc3BhbicpLmh0bWwoY2xvc2VzdC5wb3N0X3RpdGxlKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSBhY2FkZW15IGxvY2F0aW9ucyBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxuICAgc2V0dXBQcmljZUNhbGN1bGF0b3IoKTtcbiAgIFxuICAgJChcIi5kcm9wZG93bi10b2dnbGVcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS50b2dnbGVDbGFzcyhcInNob3dcIik7XG4gICB9KTtcbiAgIFxuICAgdmFyIG1hc3RlcldoaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc3RoZWFkLXdoaXRlJyk7XG4gICBpZih0eXBlb2YgbWFzdGVyV2hpdGUgIT0gJ3VuZGVmaW5lZCcgJiYgbWFzdGVyV2hpdGUpe1xuICAgICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTsgXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnaW52ZXJ0ZWQnKTtcbiAgIH0gXG4gICBcbn0pO1xuXG5mdW5jdGlvbiBzZXR1cFByaWNlQ2FsY3VsYXRvcigpe1xuICAgXG4gICB2YXIgUHJpY2VDYWxjdWxhdG9yID0gcmVxdWlyZSgnLi4vbGliL3ByaWNlQ2FsY3VsYXRvci5qcycpLmRlZmF1bHQ7XG4gICBjb25zdCBzbGlkZXJzID0gJCgnLnByaWNpbmctc2xpZGVyJyk7XG4gICBcbiAgIGlmKHNsaWRlcnMubGVuZ3RoID09PSAwKSBjb25zb2xlLmxvZygnVGhlcmUgaXMgbm8gc2xpZGVyIHRvIGxvYWQnKTtcbiAgIGVsc2V7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICAgdXJsOiAnL3dwLWpzb24vNGcvdjEvcHJpY2VzJyxcbiAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocHJpY2VzKXtcbiAgICAgICAgICAgIGlmKHByaWNlcyAmJiB0eXBlb2YgcHJpY2VzLmRhdGEgIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBwcmljZXMgPSBwcmljZXMuZGF0YTtcbiAgICAgICAgICAgICAgIHNsaWRlcnMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzbGlkZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBzbGlkZXIuZGF0YSgnbG9jYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdXJzZSA9IHNsaWRlci5kYXRhKCdjb3Vyc2UnKTtcbiAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBwcmljZXNbY291cnNlXSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHByaWNlc1tjb3Vyc2VdW2xvY2F0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIGNvbnNvbGUuZXJyb3IoJ1ByaWNlIG5vdCBmb3VuZCBmb3IgJytjb3Vyc2UrJyBhdCAnK2xvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgIHJlbmRlckxvY2F0aW9uUHJpY2VzKHNsaWRlciwgcHJpY2VzW2NvdXJzZV1bbG9jYXRpb25dKTtcbiAgICAgICAgICAgICAgICAgICAgIFByaWNlQ2FsY3VsYXRvcihzbGlkZXJzLCBwcmljZXNbY291cnNlXVtsb2NhdGlvbl0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBjb3Vyc2UgcHJpY2VzXCIpO1xuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9LFxuICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgYWNhZGVteSBwcmljZXMgXCIrcDMpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvY2F0aW9uUHJpY2VzKHNsaWRlciwgcHJpY2VzKXtcbiAgIGNvbnN0IHByaWNpbmdDb21wb25lbnQgPSBzbGlkZXIuY2xvc2VzdCgnLnByaWNpbmctY29tcG9uZW50Jyk7XG4gICBpZih0eXBlb2YgcHJpY2VzID09PSAndW5kZWZpbmVkJyl7XG4gICAgICBsZXQgY29udGVudCA9ICc8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+JztcbiAgICAgICAgIGNvbnRlbnQgKz0gJzxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYmxvY2sgY2FyZC1wcmltYXJ5IGNhcmQtaW52ZXJzZSBiZy15ZWxsb3cgbWItMyBwLTQgdGV4dC1jZW50ZXJcIj4nO1xuICAgICAgICAgICAgY29udGVudCArPSAnUHJpY2VzIGhhdmUgbm90IGJlZW4gZGVmaW5lZCB5ZXQnO1xuICAgICAgICAgY29udGVudCArPSAnPC9kaXY+JztcbiAgICAgIGNvbnRlbnQgKz0gJzwvZGl2Pic7XG4gICAgICBwcmljaW5nQ29tcG9uZW50Lmh0bWwoY29udGVudCk7XG4gICB9XG4gICBlbHNle1xuICAgICAgcHJpY2luZ0NvbXBvbmVudC5maW5kKCdbZGF0YS1jb25jZXB0PVwidXBmcm9udFwiXScpLmh0bWwocHJpY2VzWyd1cGZyb250J10pO1xuICAgICAgcHJpY2luZ0NvbXBvbmVudC5maW5kKCdbZGF0YS1jb25jZXB0PVwibW9udGhseVwiXScpLmh0bWwocHJpY2VzWydmaW5hbmNlZCddWzBdKTtcbiAgICAgIFxuICAgfVxufVxuXG5mdW5jdGlvbiBwcm9tcHRVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIFxuICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BvcFN0YXRlJykgIT0gJ3Nob3duJyl7XG4gICAgICBmaWxsVXBjb21pbmdFdmVudChldmVudCk7XG4gICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikuZGVsYXkoMjAwMCkuZmFkZUluKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9wU3RhdGUnLCdzaG93bicpO1xuICAgICAgJCgnI3VwY29taW5nRXZlbnQnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBwdXQgeW91ciBkZWZhdWx0IGV2ZW50IGhlcmVcbiAgICAgICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgfVxufVxuXG5mdW5jdGlvbiBmaWxsVXBjb21pbmdJbnRyb1RvQ29kaW5nKGV2ZW50KXtcbiAgIHZhciBtb2RhbCA9ICQoJyNmcmVlQ29kaW5nSW50cm9Nb2RhbCcpO1xuICAgbW9kYWwuZmluZCgnLmRhdGUnKS5odG1sKGV2ZW50LmRheSsnICcrZXZlbnQubW9udGgrJyAnK2V2ZW50LnllYXIpO1xuICAgbW9kYWwuZmluZCgnLmxvY2F0aW9uJykuaHRtbChldmVudC5hZGRyZXNzKTtcbiAgIG1vZGFsLmZpbmQoJy5idG4tZGFuZ2VyJykuYXR0cignaHJlZicsZXZlbnQudXJsKTtcbiAgIFxufVxuZnVuY3Rpb24gZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpe1xuICAgdmFyIG1vZGFsID0gJCgnI3VwY29taW5nRXZlbnQnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXknKS5odG1sKGV2ZW50LmRheSk7XG4gICBtb2RhbC5maW5kKCcubW9udGgnKS5odG1sKGV2ZW50Lm1vbnRoKTtcbiAgIG1vZGFsLmZpbmQoJy55ZWFyJykuaHRtbChldmVudC55ZWFyKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LXRpdGxlJykuaHRtbChldmVudC5uYW1lKTtcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC1kZXRhaWxzJykuaHRtbCgnPHNwYW4gY2xhc3M9XCJpbW9vbiBpY29uLWxvY2F0aW9uXCI+PC9zcGFuPicgKyBldmVudC5hZGRyZXNzKTsvLzM6MzBwbSAtIGF0IFN0YXJ0aHViLCBEb3dudG93biBNaWFtaVxuICAgXG4gICBcbiAgIHZhciBtYXhMZW5ndGggPSAzNTA7IC8vIG1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gZXh0cmFjdFxuICAgdmFyIHRyaW1tZWRTdHJpbmcgPSBldmVudC5kZXNjcmlwdGlvbi5zdWJzdHIoMCwgbWF4TGVuZ3RoKTsvL3RyaW0gdGhlIHN0cmluZyB0byB0aGUgbWF4aW11bSBsZW5ndGhcbiAgIHRyaW1tZWRTdHJpbmcgPSB0cmltbWVkU3RyaW5nLnN1YnN0cigwLCBNYXRoLm1pbih0cmltbWVkU3RyaW5nLmxlbmd0aCwgdHJpbW1lZFN0cmluZy5sYXN0SW5kZXhPZihcIi5cIikpKTsvL3JlLXRyaW0gaWYgd2UgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSB3b3JkXG4gICBtb2RhbC5maW5kKCcuZXZlbnQtZGVzY3JpcHRpb24nKS5odG1sKHRyaW1tZWRTdHJpbmcrJy4nKTtcbiAgIFxuICAgbW9kYWwuZmluZCgnLmJ0bi1kYW5nZXInKS5hdHRyKCdocmVmJyxldmVudC51cmwpO1xuICAgXG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3RMb2NhdGlvbih0YXJnZXRMb2NhdGlvbiwgbG9jYXRpb25EYXRhKSB7XG4gICAgZnVuY3Rpb24gdmVjdG9yRGlzdGFuY2UoZHgsIGR5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2F0aW9uRGlzdGFuY2UobG9jYXRpb24xLCBsb2NhdGlvbjIpIHtcbiAgICAgICAgdmFyIGR4ID0gbG9jYXRpb24xLmxhdGl0dWRlIC0gbG9jYXRpb24yLmxhdGl0dWRlLFxuICAgICAgICAgICAgZHkgPSBsb2NhdGlvbjEubG9uZ2l0dWRlIC0gbG9jYXRpb24yLmxvbmdpdHVkZTtcblxuICAgICAgICByZXR1cm4gdmVjdG9yRGlzdGFuY2UoZHgsIGR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYXRpb25EYXRhLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJyKSB7XG4gICAgICAgIHZhciBwcmV2RGlzdGFuY2UgPSBsb2NhdGlvbkRpc3RhbmNlKHRhcmdldExvY2F0aW9uICwgcHJldiksXG4gICAgICAgICAgICBjdXJyRGlzdGFuY2UgPSBsb2NhdGlvbkRpc3RhbmNlKHRhcmdldExvY2F0aW9uICwgY3Vycik7XG4gICAgICAgIHJldHVybiAocHJldkRpc3RhbmNlIDwgY3VyckRpc3RhbmNlKSA/IHByZXYgOiBjdXJyO1xuICAgIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuLi9zdHlsZXMvbGFuZGluZy5zY3NzJyk7XG5cbmltcG9ydCAnLi9wYWdlcy9hbGwuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzJztcblxudmFyIGJlaW5nRGlzcGxheWVkID0gZmFsc2U7XG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RpY2t5TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxsLXRvLWFjdGlvbi1uYXZcIik7XG4gICAgaWYgKCFiZWluZ0Rpc3BsYXllZCAmJiB0aGlzLnNjcm9sbFkgPiAyNTApIHtcbiAgICAgICAgYmVpbmdEaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgICBzdGlja3lOYXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChiZWluZ0Rpc3BsYXllZCAmJiB0aGlzLnNjcm9sbFkgPD0gMjUwKSB7XG4gICAgICAgIGJlaW5nRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICAgIHN0aWNreU5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9sYW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvbGFuZGluZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZnVuY3Rpb24gb25QYWdlVmlldyh1cmxDb250YWlucywgY2FsbGJhY2spe1xuICAgIC8vUGFnZSB2aWV3ID0gYXBwbHktdGhhbmsteW91XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YodXJsQ29udGFpbnMpID4gLTEpIHtcbiAgICAgICAgLy9Db2RlIGdvZXMgaGVyZVxuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH0gIFxufVxuZnVuY3Rpb24gdHJpZ2dlclRhZ01hbmFnZXJFdmVudChldmVudE5hbWUpe1xuICAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogZXZlbnROYW1lfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkOiAnK2V2ZW50TmFtZSk7XG4gICAgfVxuICAgIGVsc2UgY29uc29sZS5sb2coJ0V2ZW50IG5vdCBiZWluZyBzZW50IHRvIFRhZ01hbmFnZXI6ICcrZXZlbnROYW1lKTtcbn1cbmZ1bmN0aW9uIHNhdmVEYXRhVmFyaWFibGUoaW5kZXgsIHZhbHVlKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKSBkYXRhTGF5ZXIucHVzaCh7aW5kZXg6IHZhbHVlfSk7XG4gICAgZWxzZSBjb25zb2xlLmxvZygnSW1wb3NpYmxlIHRvIHdyaXRlICcraW5kZXgrJyBvbiBkYXRhTGF5ZXInKTtcbiAgICBcbiAgICBcbiAgICBpZih0eXBlb2YgV1BBU19BUFAgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQID0ge307XG4gICAgaWYodHlwZW9mIFdQQVNfQVBQLmRhdGFMYXllciA9PSAndW5kZWZpbmVkJykgV1BBU19BUFAuZGF0YUxheWVyID0ge307XG4gICAgV1BBU19BUFAuZGF0YUxheWVyW2luZGV4XSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gYWNfZXZlbnQoZXZlbnRLZXksIGV2ZW50TmFtZSwgdXNlckVtYWlsKXtcblxuICAvLyB3aGF0IHdlIGRvIGhlcmUsIGlzIGxvZyBhIHN1Y2Nlc3NmdWwgZXZlbnQgdG8gdGhlIGNvbnNvbGVcbiAgLy8gb3IgY2F0Y2ggYW55IGVycm9ycyB3ZSBoYXZlXG4gIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgXG4gIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkZWQgaGFsZndheSBzY3JvbGwgZXZlbnRcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8geW91ciBBY3RpdmVDYW1wYWlnbiBpZC4gWW91IGNhbiBnZXQgdGhpcyBmcm9tIHlvdXIgQUMgc2V0dGluZ3MgXG4gIHZhciBhY3RpZCA9IFwiZGIxNWEzMjY0ZmIyYWJmMTk5OTZmYTQ4ODczMDM5NzU3ZDUzNDU0NFwiOyBcblxuICB2YXIgdmlzaXQgPSB7XG4gICAgZW1haWw6IHVzZXJFbWFpbCAvLyB0aGUgdXNlcidzIGVtYWlsIGFkZHJlc3NcbiAgfTtcblxuICAvLyBnZXQgdGhlIHVybCBvZiB0aGUgcGFnZSBhbmQgc2VuZCBpdCBhcyBldmVudCBkYXRhXG4gIHZhciBldmVudERhdGEgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAvLyBidWlsZCB0aGUgZXZlbnRTdHJpbmcgYmFzZWQgb24gdGhlIHZhcmlhYmxlcyB5b3UganVzdCBlZGl0ZWQgYWJvdmUg4pidXG4gIHZhciBldmVudFN0cmluZyA9IFwiYWN0aWQ9XCIgKyBhY3RpZCBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZrZXk9XCIgKyBldmVudEtleSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZldmVudD1cIiArIGV2ZW50TmFtZSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZ2aXNpdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2aXNpdCkgXG4gICAgICAgICAgICAgICAgICAgICsgXCImZXZlbnRkYXRhXCIgKyBldmVudERhdGE7XG5cbiAgLy8gc2VuZCB0aGUgZXZlbnQgdG8gdGhlIEFjdGl2ZUNhbXBhaWduIEFQSSB3aXRoIG91ciBldmVudCB2YWx1ZXNcbiAgeGh0dHAub3BlbihcIlBPU1RcIiwgXCJodHRwczovL3RyYWNrY21wLm5ldC9ldmVudFwiLCB0cnVlKTtcbiAgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgXG4gIGlmKGV2ZW50S2V5IT0nJyAmJiBldmVudE5hbWUhPScnICYmIHVzZXJFbWFpbCE9JycpIHhodHRwLnNlbmQoZXZlbnRTdHJpbmcpO1xuICBlbHNle1xuICAgICAgaWYoZXZlbnRLZXk9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCBldmVudEtleScsZXZlbnRLZXkpO1xuICAgICAgaWYoZXZlbnROYW1lPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgZXZlbnROYW1lJyxldmVudE5hbWUpO1xuICAgICAgaWYodXNlckVtYWlsPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgdXNlckVtYWlsJyx1c2VyRW1haWwpO1xuICB9XG59XG5cbi8qKlxuICogVGFnbWFuZ2VyIGV2ZW50c1xuICoqL1xuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ3N5bGxhYnVzX2Rvd25sb2FkJyk7IFxufSk7XG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBcbiAgICB2YXIgZW1haWxJbnB1dCA9ICQoZXZlbnQudGFyZ2V0KS5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgIGlmKGVtYWlsSW5wdXQubGVuZ3RoPjApIHNhdmVEYXRhVmFyaWFibGUoJ3VzZXJFbWFpbCcsZW1haWxJbnB1dFswXS52YWx1ZSk7XG4gICAgXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnbmV3c2xldHRlcl9zaWdudXAnKTsgXG59KTtcbiQoJy5hcHBseS1idG4nKS5jbGljayhmdW5jdGlvbihldmVudCl7IHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ2FwcGxpY2F0aW9uX3JlbmRlcmVkJyk7IH0pO1xub25QYWdlVmlldyhcIi9hcHBseS10aGFuay15b3VcIixmdW5jdGlvbigpe1xuICAgIC8vQ29kZSBnb2VzIGhlcmVcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzdHVkZW50X2FwcGxpY2F0aW9uJyk7IFxufSk7XG4kKCcjZmluYW5jaW5nX2d1aWRlX2Rvd25sb2FkJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ2ZpbmFuY2luZ19ndWlkZV9kb3dubG9hZCcpOyBcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGV2ZW50LnRhcmdldC5ocmVmO1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNpbmdDYWxjdWxhdG9yKHNsaWRlcnMsIG1lc3NhZ2VzKXtcbiAgdmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xuICBtZXNzYWdlcyA9IG1lc3NhZ2VzWydmaW5hbmNlZCddO1xuICBzbGlkZXJzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgIGNvbnN0IGh0bWxTbGlkZXIgPSB0aGlzO1xuICAgIGNvbnN0IHByaWNpbmdDb21wb25lbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5wcmljaW5nLWNvbXBvbmVudCcpO1xuICAgIHZhciBteVNsaWRlciA9IG5ldyBTbGlkZXIoaHRtbFNsaWRlcik7XG4gICAgbXlTbGlkZXIub24oJ3NsaWRlU3RvcCcsIGZ1bmN0aW9uKGNsaWNrZWRJbmRleCl7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhtZXNzYWdlcylbY2xpY2tlZEluZGV4XTtcbiAgICAgIGlmKHR5cGVvZiBtZXNzYWdlc1trZXldICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgaWYodHlwZW9mKG1lc3NhZ2VzW2tleV0ubW9udGhseSkgPT0gJ3N0cmluZycpIHByaWNpbmdDb21wb25lbnQuZmluZCgnLnByaWNlLWxhYmVsJykuaHRtbChtZXNzYWdlc1trZXldLm1vbnRobHkpO1xuICAgICAgICBpZih0eXBlb2YobWVzc2FnZXNba2V5XS5tZXNzYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHByaWNpbmdDb21wb25lbnQuZmluZCgnLmZpbmFuY2luZy1kZXRhaWxzJykuaHRtbChtZXNzYWdlc1trZXldLm1lc3NhZ2VbV1BBU19BUFAubGFuZ10pO1xuICAgICAgICBpZih0eXBlb2YobWVzc2FnZXNba2V5XS5sb2dvKSA9PSAnc3RyaW5nJyl7XG4gICAgICAgICAgdmFyIGxvZ29FbG0gPSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5maW5hbmNpbmctbG9nbycpO1xuICAgICAgICAgIGxvZ29FbG0uYXR0cignc3JjJyxtZXNzYWdlc1trZXldLmxvZ28pO1xuICAgICAgICB9XG4gICAgICB9XG4gIFx0XHRcbiAgXHRcdHZhciBwYXltZW50UGxhbkNhcmQgPSBwcmljaW5nQ29tcG9uZW50LmZpbmQoJy5wYXltZW50LXBsYW4nKTtcbiAgXHRcdHBheW1lbnRQbGFuQ2FyZC5hZGRDbGFzcyhcImdsb3dcIik7XG4gIFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICBcdFx0XHRwYXltZW50UGxhbkNhcmQucmVtb3ZlQ2xhc3MoXCJnbG93XCIpO1xuICBcdFx0fSwgMjAwKTtcbiAgICAgIFxuICAgIH0pO1xuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvcHJpY2VDYWxjdWxhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiXSwic291cmNlUm9vdCI6IiJ9