'use strict';


const ctx = document.getElementById('myChart'); // ctx === canvas element
// 1st arg - canvas element,
// 2nd arg - object ->


let chartObj = {
  type: 'bar',
  data: {
    labels: ['Cat', 'Dog', 'Bird', 'Piggies', 'Hedgehog', 'Hamster'],
    datasets: [{
      label: 'Level of cuteness',
      data: [30, 30, 15, 25, 12, 3],
      borderWidth: 5,
      backgroundColor: 'pink',
      borderColor: 'pink'
    },
    {
      label: 'Level of cuddliness',
      data: [30, 30, 15, 25, 12, 3],
      borderWidth: 5,
      backgroundColor: 'black',
      borderColor: 'black'
    }
  ]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
}

new Chart(ctx, chartObj);
