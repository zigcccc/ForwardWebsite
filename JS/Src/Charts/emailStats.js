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
    labels: ['Mailchimp', 'SqualaMail', 'ContactForm7'],
    datasets: [{
      label: labels,
      data: cleanValues,
      backgroundColor: [
        '#84DBFF',
        '#0E76BC',
        '#242D3C'
      ],
      borderColor: [
        '#84DBFF',
        '#0E76BC',
        '#242D3C'
      ],
      borderWidth: 2
    }]
  }

  let chart = new Chart(context, {
    type: 'doughnut',
    data: myData,
  })
  return chart
}

export default statEmailChart