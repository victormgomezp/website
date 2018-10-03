export default function PricingCalculator(sectionId, messages){
  
  var Slider = require("bootstrap-slider");
  var mySlider = new Slider(sectionId+' .pricing-slider');
  mySlider.on('slideStop', function(newValue){
    if(typeof messages[newValue] != 'undefined'){
      if(typeof(messages[newValue].price) == 'string') document.querySelector('#price-label').innerHTML = messages[newValue].price;
      if(typeof(messages[newValue].details) == 'string') document.querySelector('#financing-details').innerHTML = messages[newValue].details;
      if(typeof(messages[newValue].logo) == 'string'){
        var logoElm = document.querySelector(sectionId+' .financing-logo');
        var templateURL = logoElm.getAttribute('data-templateurl');
        logoElm.src = templateURL + messages[newValue].logo;
      }
      
      var applyBtn = document.querySelector(sectionId+' .financing-btn');
      applyBtn.innerHTML = messages[newValue].applyText;
      if(messages[newValue].applyURL){
        applyBtn.href = messages[newValue].applyURL;
      }else{
        var defaultURL = applyBtn.getAttribute('data-applylink');
        applyBtn.href = defaultURL;
      }
    }
		
		var paymentPlanCard = document.querySelector(sectionId+' .payment-plan');
		paymentPlanCard.classList.add("glow");
		window.setTimeout(function(){
			paymentPlanCard.classList.remove("glow");
		}, 200);
    
  });
}