import Chart from 'chart.js';

export var CakeChart = (function(){
    
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
        var myPieChart = new Chart(pieCtx,{
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
