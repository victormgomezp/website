require('../styles/index.scss');

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import './pages/all.js';
import './common/marketing-events.js';
import {MakeSticky} from './common/sticky-toggle.js';
import {SmartFilters} from './common/smart-filters.js';
import {PieChart} from "./lib/cakeCharts";
import loadVideo from "./common/responsive-video";

console.log(WPAS_APP);
WPAS_APP.loadVideo = loadVideo;
/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  PieChart.createPie(".pieID.legend", ".pieID.pie");
  loadVideo('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  
}

/**
 * THE PROGRAM
**/

if(['page-the-program','single-full-stack','single-web-development'].indexOf(WPAS_APP.view.template)!=-1 || WPAS_APP.view.slug === 'venezuela'){
  
  var maxStickPosition = $('#pricing').offset().top - 20;
  MakeSticky.init('[data-toggle="sticky-onscroll"]', maxStickPosition);
  
  
  var TheProgram = require('./pages/program.js').default;
  TheProgram.init();
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
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

/**
 * CALENDAR
**/

if(WPAS_APP.view.slug === 'calendar' || WPAS_APP.view.slug === 'calendario'){
  
  SmartFilters.init({
    loadingAnimation: '.courses .loading-animation',
    resultsContainer: '.courses .list-group',
    filterDropdown: '.dropdown-menu a',
    filters: [
      { button: '#locationSelector', urlKey: 'l', options: '.location-option' },
      { button: '#langSelector', urlKey: 'lang', options: '.lang-option'},
      { button: '#typeSelector', urlKey: 'type', options: '.type-option'}
    ]
  });
  
  MakeSticky.init('[data-toggle="sticky-onscroll"]', 4000);
    
}

/**
 * LOCATION
**/

if(['single-location'].indexOf(WPAS_APP.view.template) != -1){
  require('./pages/location.js');
}

/**
 * PARTNERS
**/

if(WPAS_APP.view.slug === 'partners' || WPAS_APP.view.slug === 'socios'){
  
  loadVideo('/wp-content/themes/the-fastest/assets/video/office.mp4',{overlay: 'black'});
}