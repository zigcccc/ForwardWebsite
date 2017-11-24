import {
  hideSideMenu,
  handleInputClick,
  hideEmptyParagraphs
} from './PageInteractions'
//import Chart from 'chart.js'

//const MyChart = new Chart()



$(document).ready(() => {
  const sideMenu = document.querySelector('#LeftMenu');
  const inputs = document.querySelectorAll('.special-form .form-control');
  const paragraphs = document.querySelectorAll('p');

  if(sideMenu){
    hideSideMenu(sideMenu)
  }
  if(typeof(paragraphs) != undefined && paragraphs != null){
    hideEmptyParagraphs(paragraphs)
  }
  if (typeof(inputs) != undefined && inputs != null) {
    handleInputClick(inputs)
  } 
})