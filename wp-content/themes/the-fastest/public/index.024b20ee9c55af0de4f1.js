webpackJsonp([0],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_cakeCharts__ = __webpack_require__(125);
__webpack_require__(122);






/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home'){
  
  __WEBPACK_IMPORTED_MODULE_2__vendor_cakeCharts__["a" /* PieChart */].createPie(".pieID.legend", ".pieID.pie");
  
}

/**
 * THE PROGRAM
**/

if(WPAS_APP.view.slug === 'the-program')
{
  $(document).ready(function() {
    // Custom 
    var stickyToggle = function(sticky, stickyWrapper, scrollElement, finalScrollOffsetElement=null) {
      var stickyHeight = sticky.outerHeight();
      var stickyWidth = sticky.outerWidth();
      var offset = stickyWrapper.offset();
      var stickyTop = offset.top;
      var stickyLeft = offset.left;
      var maxStickPosition = 3680;
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
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing')
{
  var Slider = __webpack_require__(4);
  var mySlider = new Slider('#pricing-slider');
  //var sliderElement = document.querySelector('#pricing-slider');
  mySlider.on('slideStop', function(newValue){
    
    var message = 'uknown';
    switch(newValue)
    {
      case 0: message = '$1000 deposit + $867 / month'; break;
      case 1: message = '$1000 deposit + $459 / month'; break;
      case 3: message = '$1000 deposit + $259 / month'; break;
    }
    document.querySelector('#price-label').innerHTML = message;
    
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChart; });

var PieChart = (function(){
    
    var thepublic = {};

    thepublic.createPie = function(dataElement, pieElement) {
      var listData = [];
      $(dataElement+" span").each(function() {
        listData.push(Number($(this).html()));
      });
      var listTotal = 0;
      for(var i=0; i<listData.length; i++) {
        listTotal += listData[i];
      }
      var offset = 0;
      var color = [
        "cornflowerblue", 
        "olivedrab", 
        "orange", 
        "tomato", 
        "crimson", 
        "purple", 
        "turquoise", 
        "forestgreen", 
        "navy", 
        "gray"
      ];
      for(var i=0; i<listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        iterateSlices(size, pieElement, offset, i, 0, color[i]);
        $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
        offset += size;
      }
    }

    function sliceSize(dataNum, dataTotal) {
      return (dataNum / dataTotal) * 360;
    }
    
    function addSlice(sliceSize, pieElement, offset, sliceID, color) {
      $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
      var offset = offset - 1;
      var sizeRotation = -179 + sliceSize;
      $("."+sliceID).css({
        "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
      });
      $("."+sliceID+" span").css({
        "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
        "background-color": color
      });
    }
    
    function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
      var sliceID = "s"+dataCount+"-"+sliceCount;
      var maxSize = 179;
      if(sliceSize<=maxSize) {
        addSlice(sliceSize, pieElement, offset, sliceID, color);
      } else {
        addSlice(maxSize, pieElement, offset, sliceID, color);
        iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
      }
    }
    
    return thepublic;
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ })

},[121]);