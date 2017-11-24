import {
  hideSideMenu,
  handleInputClick,
  hideEmptyParagraphs,
} from './PageInteractions'

import { statEmailChart } from './Charts'



$(document).ready(() => {
  const sideMenu = document.querySelector('#LeftMenu');
  const inputs = document.querySelectorAll('.special-form .form-control');
  const paragraphs = document.querySelectorAll('p');
  const emailStatChart = document.getElementById('statEmail');

  if(sideMenu){
    hideSideMenu(sideMenu)
  }
  if(typeof(paragraphs) != undefined && paragraphs != null){
    hideEmptyParagraphs(paragraphs)
  }
  if (typeof(inputs) != undefined && inputs != null) {
    handleInputClick(inputs)
  }
  if(typeof(emailStatChart) != undefined && emailStatChart != null){
    statEmailChart(emailStatChart)
  }
})