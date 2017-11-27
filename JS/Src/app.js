import {
  hideSideMenu,
  handleInputClick,
  hideEmptyParagraphs,
} from './PageInteractions'

import { statEmailChart } from './Charts'



$(document).ready(() => {
  const sideMenu = document.querySelector('#LeftMenu')
  const inputs = document.querySelectorAll('.special-form .form-control')
  const paragraphs = document.querySelectorAll('p')

  const charts = document.querySelectorAll('.stats-chart')

  const emailStatChart = document.getElementById('statEmail')
  const emailStatChart2 = document.getElementById('statEmail2')

  if(sideMenu){
    hideSideMenu(sideMenu)
  }
  if(typeof(paragraphs) != undefined && paragraphs != null){
    hideEmptyParagraphs(paragraphs)
  }
  if (typeof(inputs) != undefined && inputs != null) {
    handleInputClick(inputs)
  }

  for(let chart of charts){
    console.log(chart)
    if(typeof(chart) != undefined && chart != null){
      statEmailChart(chart)
    }
  }


  // if(typeof(emailStatChart) != undefined && emailStatChart != null){
  //   statEmailChart(emailStatChart)
  //   statEmailChart(emailStatChart2)
  // }
})