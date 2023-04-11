var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=V42U5OPW70HHJKNC';

// request.get({
//     url: url,
//     json: true,
//     headers: { 'User-Agent': 'request' }
// }, (err, res, data) => {
//     if (err) {
//         console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//         console.log('Status:', res.statusCode);
//     } else {
//         // data is successfully parsed as a JSON object:
//         console.log(data);
//     }
// });

// const actions = [
//     {
//       name: 'Randomize',
//       handler(chart) {
//         chart.data.datasets.forEach(dataset => {
//           dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
//         });
//         chart.update();
//       }
//     },
//   ];
//   // </block:actions>

//   // <block:setup:1>
//   const DATA_COUNT = 7;
//   const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//   const labels = Utils.months({count: 7});
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: Utils.numbers(NUMBER_CFG),
//         borderColor: Utils.CHART_COLORS.red,
//         backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//         yAxisID: 'y',
//       },
//       {
//         label: 'Dataset 2',
//         data: Utils.numbers(NUMBER_CFG),
//         borderColor: Utils.CHART_COLORS.blue,
//         backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//         yAxisID: 'y1',
//       }
//     ]
//   };
//   // </block:setup>

//   // <block:config:0>
//   const config = {
//     type: 'line',
//     data: data,
//     options: {
//       responsive: true,
//       interaction: {
//         mode: 'index',
//         intersect: false,
//       },
//       stacked: false,
//       plugins: {
//         title: {
//           display: true,
//           text: 'Chart.js Line Chart - Multi Axis'
//         }
//       },
//       scales: {
//         y: {
//           type: 'linear',
//           display: true,
//           position: 'left',
//         },
//         y1: {
//           type: 'linear',
//           display: true,
//           position: 'right',

//           // grid line settings
//           grid: {
//             drawOnChartArea: false, // only want the grid lines for one axis to show up
//           },
//         },
//       }
//     },
//   };

const width = 1000;   // define width and height of canvas 
const height = 1000;
const chartCallback = (ChartJS) => {
    console.log('chart built')
};
// const canvasRenderService = new CanvasRenderService(width, height, chartCallback);

var xLabels = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM']

const createImage = async () => {
    const configuration = {
        type: 'line',   // for line chart
        data: {
            labels: [0, 150, 300, 450, 600, 750, 900, 1050, 1200, 1350, 1500],
            datasets: [{
                label: "sample 1",
                data: [100, 43],
                fill: false,
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1,
                xAxisID: 'xAxis1' //define top or bottm axis ,modifies on scale
            },
            {
                label: "sample 2",
                data: [72, 83],
                fill: false,
                borderColor: ['rgba(265, 99, 132, 1)'],
                borderWidth: 1,
                xAxisID: 'xAxis1'
            },
            {
                label: "sample3",
                data: [30, 56],
                fill: false,
                borderColor: ['rgba(235, 99, 122, 1)'],
                borderWidth: 1,
                xAxisID: 'xAxis1'
            }
            ],

        },
        options: {
            scales: {
                xAxes: [
                    {
                        id: 'xAxis1',
                        position: 'bottom',
                        type: "category",

                    },
                    {
                        id: 'xAxis2',
                        position: 'top',
                        type: "category",
                        ticks: {
                            callback: function (value, index, values) {
                                return xLabels[index];  // gives points of top x axis 
                            }
                        },
                    }],
                yAxes: [{
                    display: true,
                    ticks: {
                        max: 200,
                        stepSize: 10, //defines y axis step scale
                    }
                }]
                ,
            }
        }
    }
}

module.exports = { createImage }
