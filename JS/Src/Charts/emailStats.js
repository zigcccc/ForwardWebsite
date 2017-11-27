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
      label: labels,
      data: cleanValues,
      backgroundColor: [
        '#0E76BC',
        '#242D3C',
        '#84DBFF'
      ],
      borderColor: [
        '#0E76BC',
        '#242D3C',
        '#84DBFF'
      ],
      borderWidth: 2
    }]
  }

  let chart = new Chart(context, {
    type: 'doughnut',
    data: myData,
    options: {
      legend: {
        display: false,
        position: 'bottom'
      }
    }
  })
  return chart
}

export default statEmailChart