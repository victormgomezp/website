/* global WPAS_APP, $ */
require('../styles/index.scss');

import Typography from 'typography';
import doelgerTheme from 'typography-theme-doelger';
const typography = new Typography(doelgerTheme);
typography.injectStyles();

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/tab';
import './pages/all.js';
import './common/marketing-events.js';
import {MakeSticky} from './common/sticky-toggle.js';
import {SmartFilters} from './common/smart-filters.js';
import loadVideo from "./common/responsive-video";

console.log(WPAS_APP);
WPAS_APP.loadVideo = loadVideo;
/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  //loadVideo('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  jQuery('[data-toggle="tooltip"]').tooltip();
  $('.value').each(function() {
  	var text = $(this).text();
  	$(this).parent().css('width', text);
  });
  $('.block').tooltip();
  
  var fireworks = require('./lib/fireworks.js');
  var canvasBg = document.querySelector( '.masthead' );
  fireworks(canvasBg);
}

/**
 * THE PROGRAM
**/

if(['page-the-program','single-full-stack-part-time','single-full-stack','single-web-development','single-coding-intro'].indexOf(WPAS_APP.view.template)!= -1){
  
  var barBreakpoint = $('#bar-breakpoint');
  if(!barBreakpoint) throw new Error('There is no breathepoint established for the bar');
  
  var maxStickPosition = barBreakpoint.offset().top;
  MakeSticky.init('[data-toggle="sticky-onscroll"]', maxStickPosition, 20);
  
  //animation for the program
  var TheProgram = require('./pages/program.js').default;
  TheProgram.init();
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  loadVideo('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  var fireworks = require('./lib/fireworks.js');
  var canvasBg = document.querySelector( '#bg-sketch' );
  fireworks(canvasBg);

}

/**
 * CALENDAR
**/

if(WPAS_APP.view.slug === 'calendar' || WPAS_APP.view.slug === 'calendario'){

  SmartFilters.init({
    loadingAnimation: '.courses .loading-animation',
    resultsContainer: '.courses .list-group',
    filterDropdown: '.dropdown-filter a',
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
  
  jQuery('[data-toggle="tooltip"]').tooltip();
  loadVideo('/wp-content/themes/the-fastest/assets/video/office.mp4',{overlay: 'black'});
}

/**
 * JOBS
**/

if(['job'].indexOf(WPAS_APP.view.slug) != -1){
  jQuery('.job-apply').click(function(e){
    document.querySelector("form").scrollIntoView();
    e.preventDefault();
    return false;
  });
}