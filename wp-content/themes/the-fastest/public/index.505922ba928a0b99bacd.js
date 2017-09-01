webpackJsonp([1],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webcharts__ = __webpack_require__(125);
__webpack_require__(123);






__WEBPACK_IMPORTED_MODULE_2__webcharts__["a" /* CakeChart */].init({
    selector: '.pie-chart'
});

__webpack_require__(174)("./" + WPAS_APP.wpas_controller.toLowerCase()).then(Controller => {
    var c = new Controller.default();
    c.init();
}, function(error) {
  alert(error.name + ': ' + error.message);
});

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CakeChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);


var CakeChart = (function(){
    
    var thepublic = {};
    //var ctx = null;
    var pieCtx = null;
    
    thepublic.init = function(options){
        
        //ctx = document.getElementById("myChart");
        pieCtx = document.querySelector(options.selector);
        
        thepublic.draw();
    }
    
    thepublic.draw = function() {
    
      var pieData = {
        labels: [
          "Ruby jobs",
          "PHP jobs",
          "Javascript jobs"
      ],
      datasets: [
          {
              data: [51, 681, 1348],
              backgroundColor: [
                  "#dc3545",
                  "#ffa500",
                  "#4286f4"
              ],
              hoverBackgroundColor: [
                  "#dc3545",
                  "#ffa500",
                  "#4286f4"
              ]
          }]
      };
        var myPieChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js___default.a(pieCtx,{
            type: 'pie',
            responsive: true,
            maintainAspectRatio: false,
            data: pieData,
            options:{
                legend: {
                    position: 'bottom',
                    display: true,
                    labels: {
                        fontSize: 20
                    }
                }
            }
        });
    }
    
    
    return thepublic;
})();


/*
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});*/


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home": [
		121,
		0
	],
	"./home.js": [
		121,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ })

},[122]);