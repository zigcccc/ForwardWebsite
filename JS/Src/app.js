import {
  hideSideMenu,
  handleInputClick,
  hideEmptyParagraphs,
  handleSwitchClick,
  hideEmptyTitles,
  truncateParagraphs,
  clickableNewsCard,
  handleEmptyBanner,
  headerOpacity,
  mobileMenuClick
} from './PageInteractions'

import { statEmailChart } from './Charts'

import { frontCarousel } from './Carousel'



$(document).ready(() => {
  const sideMenu = document.querySelector('#LeftMenu')
  const inputs = document.querySelectorAll('.special-form .form-control')
  const paragraphs = document.querySelectorAll('p')
  const titles = document.querySelectorAll('h2')
  const mainBanner = document.querySelector('.mainbanner')
  const pageHeader = document.querySelector('header')

  const headerParagraphs = document.querySelectorAll('.carousel-text')

  const menuIcon = document.querySelector('.mobile_cart_menu')
  const mainPage = document.querySelector('#menu-open-overlay');

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

  if(typeof(headerParagraphs) != undefined && headerParagraphs != null) {
    let windowWidth = window.innerWidth
    if(windowWidth <= 768){
      truncateParagraphs(headerParagraphs, 210)
    }
  }


  if(typeof(mainBanner) != undefined && mainBanner != null) {
    handleEmptyBanner(mainBanner)
  }

  if(typeof(menuIcon) != undefined && menuIcon != undefined) {
    mobileMenuClick(menuIcon, mainPage)
  }

  if(typeof(pageHeader) != undefined && pageHeader != null) {
    headerOpacity(pageHeader)
  }

  if(typeof(frontPageCarousel) != undefined && frontPageCarousel != null) {
    //             Element           Timeout
    frontCarousel(frontPageCarousel, 7500)
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