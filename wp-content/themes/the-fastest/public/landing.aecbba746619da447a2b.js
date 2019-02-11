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