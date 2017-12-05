import {
  hideSideMenu,
  handleInputClick,
  hideEmptyParagraphs,
  handleSwitchClick,
  hideEmptyTitles,
  truncateParagraphs,
  clickableNewsCard
} from './PageInteractions'

import { statEmailChart } from './Charts'

import { frontCarousel } from './Carousel'



$(document).ready(() => {
  const sideMenu = document.querySelector('#LeftMenu')
  const inputs = document.querySelectorAll('.special-form .form-control')
  const paragraphs = document.querySelectorAll('p')
  const titles = document.querySelectorAll('h2')

  const newsCards = document.querySelectorAll('.snovica_box')
  const newsParagraphs = document.querySelectorAll('.snovica_kropis p')

  const ponudbaCards = document.querySelectorAll('.storitevbox')

  const charts = document.querySelectorAll('.stats-chart')

  const emailStatChart = document.getElementById('statEmail')
  const emailStatChart2 = document.getElementById('statEmail2')

  const frontPageCarousel = $('#front-carousel')

  if(sideMenu){
    hideSideMenu(sideMenu)
  }

  if(typeof(frontPageCarousel) != undefined && frontPageCarousel != null) {
    frontCarousel(frontPageCarousel)
  }

  if(typeof(paragraphs) != undefined && paragraphs != null){
    hideEmptyParagraphs(paragraphs)
  }

  if(typeof(newsParagraphs) != undefined && newsParagraphs != null){
    truncateParagraphs(newsParagraphs, 140)
  }

  if(typeof(newsCards) != undefined && newsCards != null){
    clickableNewsCard(newsCards)
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