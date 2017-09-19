require('../styles/index.scss');

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import './pages/all.js';
import {PieChart} from "./vendor/cakeCharts";


/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home'){
  
  PieChart.createPie(".pieID.legend", ".pieID.pie");
  loadVideo('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  
}

/**
 * THE PROGRAM
**/

if(WPAS_APP.view.slug === 'the-program'){
  
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
  
  require('./pages/program.js');
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing'){
  
  loadVideo('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  var Slider = require("bootstrap-slider");
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
  
  require('./pages/pricing.js');

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


if(WPAS_APP.view.slug === 'calendar'){
  
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