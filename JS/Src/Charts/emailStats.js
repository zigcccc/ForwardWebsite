import Chart from 'chart.js'

const statEmailChart = function(context){
  let type = context.dataset.type
  let labels = context.dataset.labels.split(', ')
  let values = context.dataset.values.split(', ')
  let cleanValues = []
  for (let value of values) {
    cleanValues.push(parseInt(value))
  }

  let myData = {
    labels: labels,
    datasets: [{
      label: 'Letos',
      data: [cleanValues[1], 100 - cleanValues[1]],
      backgroundColor: [
        '#0e76bc',
        'rgba(0,0,0,0)'
      ],
      borderColor: 'rgba(0,0,0,0)'
    },
    {
      label: 'Lansko leto',
      data: [cleanValues[0], 100 - cleanValues[0]],
      backgroundColor: [
        '#f5f5f5',
        'rgba(0,0,0,0)'
      ],
      borderColor: 'rgba(0,0,0,0)'
    }]
  }

  let chart = new Chart(context, {
    type: 'doughnut',
    data: myData,
    options: {
      legend: {
        display: false,
        position: 'bottom'
      },
      tooltips: {enabled: false},
      hover: {mode: null},
      cutoutPercentage: 25
    }
  })
  return chart
}

export default statEmailChart