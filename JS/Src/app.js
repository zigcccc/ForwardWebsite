import {
  hideSideMenu,
  handleInputClick,
  hideEmptyParagraphs,
  handleSwitchClick,
  hideEmptyTitles,
  truncateParagraphs
} from './PageInteractions'

import { statEmailChart } from './Charts'



$(document).ready(() => {
  const sideMenu = document.querySelector('#LeftMenu')
  const inputs = document.querySelectorAll('.special-form .form-control')
  const paragraphs = document.querySelectorAll('p')
  const titles = document.querySelectorAll('h2')

  const newsParagraphs = document.querySelectorAll('.snovica_kropis p')

  const ponudbaCards = document.querySelectorAll('.storitevbox')

  const charts = document.querySelectorAll('.stats-chart')

  const emailStatChart = document.getElementById('statEmail')
  const emailStatChart2 = document.getElementById('statEmail2')

  if(sideMenu){
    hideSideMenu(sideMenu)
  }
  if(typeof(paragraphs) != undefined && paragraphs != null){
    console.log(paragraphs)
    hideEmptyParagraphs(paragraphs)
  }

  if(typeof(newsParagraphs) != undefined && newsParagraphs != null){
    // Truncate paragraphs: elements, length
    truncateParagraphs(newsParagraphs, 140)
  }

  if(typeof(titles) != undefined && titles != null){
    hideEmptyTitles(titles)
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
})