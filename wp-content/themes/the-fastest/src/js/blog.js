require('../styles/blog.scss');

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  loadVideo('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  //script for the slider calculator
  var priceCalculator = require('./lib/priceCalculator.js');
  
  var fireworks = require('./lib/fireworks.js');
  var canvasBg = document.querySelector( '#bg-sketch' );
  fireworks(canvasBg);

}