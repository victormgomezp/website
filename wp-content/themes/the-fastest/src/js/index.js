require('../styles/index.scss');

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';

import {CakeChart} from "./webcharts";

CakeChart.init({
    selector: '.pie-chart'
});
/*
System.import('./pages/' + WPAS_APP.wpas_controller.toLowerCase()).then(Controller => {
    var c = new Controller.default();
    c.init();
}, function(error) {
  alert(error.name + ': ' + error.message);
});
*/