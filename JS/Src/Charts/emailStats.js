import Chart from 'chart.js'

const statEmailChart = function(context){
  let myData = {
    labels: ['Mailchimp', 'SqualaMail', 'ContactForm7'],
    datasets: [{
      label: 'Število Email kampanj',
      data: [30, 20, 10],
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