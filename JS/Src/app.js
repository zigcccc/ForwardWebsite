import {
  hideSideMenu,
  handleInputClick,
  hideEmptyParagraphs,
  handleSwitchClick,
} from './PageInteractions'

import { statEmailChart } from './Charts'



$(document).ready(() => {
  const sideMenu = document.querySelector('#LeftMenu')
  const inputs = document.querySelectorAll('.special-form .form-control')
  const paragraphs = document.querySelectorAll('p')

  const ponudbaCards = document.querySelectorAll('.storitevbox')

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

  if(typeof(ponudbaCards) != undefined && ponudbaCards != null){
    handleSwitchClick(ponudbaCards)
  }

  for(let chart of charts){
    if(typeof(chart) != undefined && chart != null){
      statEmailChart(chart)
    }
  }


  // if(typeof(emailStatChart) != undefined && emailStatChart != null){
  //   statEmailChart(emailStatChart)
  //   statEmailChart(emailStatChart2)
  // }
})