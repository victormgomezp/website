  var Slider = require("bootstrap-slider");
  var mySlider = new Slider('#pricing-slider');
  //var sliderElement = document.querySelector('#pricing-slider');
  mySlider.on('slideStop', function(newValue){
    var message = null;
    switch(newValue)
    {
      case 0: 
          message = {
            price: '$1000 deposit + $853 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
          }
      break;
      case 1:
          message = {
            price: '$1000 deposit + $445 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
          }
      break;
      case 2: 
          message = {
            price: '$1000 deposit + $240 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
          }
      break;
      case 3: 
          message = {
            price: '$198 / month (No deposit)',
            details: 'Apply to Skillsfund and get 36 month financing, pay <strong>only $198 per month</strong> and with no deposit to start.',
            logo: '/assets/img/skillsfund.png',
            applyText: 'Apply to financing',
            applyURL: 'http://4geeksacademy.skills.fund'
          }
      break;
      case 4: 
          message = {
            price: '$135 / month (No deposit)',
            details: 'Apply to Skillsfund and get 60 month financing, pay <strong>only $135 every month</strong> and with no deposit to start.',
            logo: '/assets/img/skillsfund.png',
            applyText: 'Apply to financing',
            applyURL: 'http://4geeksacademy.skills.fund'
          }
      break;
    }
    if(message){
      if(typeof(message.price) == 'string') document.querySelector('#price-label').innerHTML = message.price;
      if(typeof(message.details) == 'string') document.querySelector('#financing-details').innerHTML = message.details;
      if(typeof(message.logo) == 'string'){
        var logoElm = document.querySelector('#financing-logo');
        var templateURL = logoElm.getAttribute('data-templateurl');
        logoElm.src = templateURL + message.logo;
      }
      
      var applyBtn = document.querySelector('#financing-btn');
      applyBtn.innerHTML = message.applyText;
      if(message.applyURL){
        applyBtn.href = message.applyURL;
      }else{
        var defaultURL = applyBtn.getAttribute('data-applylink');
        applyBtn.href = defaultURL;
      }
    }
		
		var paymentPlanCard = document.querySelector('.payment-plan');
		//paymentPlanCard.classList.remove("bg-yellow");
		paymentPlanCard.classList.add("glow");
		window.setTimeout(function(){
		  //paymentPlanCard.classList.add("bg-yellow");
			paymentPlanCard.classList.remove("glow");
		}, 200);
    
  });