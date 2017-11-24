import {
  hideSideMenu,
  handleInputClick
} from './PageInteractions'
//import Chart from 'chart.js'

//const MyChart = new Chart()

function hideEmptyParagraphs () {
  const paragraphs = document.querySelectorAll('p');
  Array.from(paragraphs, (paragraph, i) => {
    let cond = paragraph.innerText.length > 1 ? true : false;
    if(!cond && paragraph.innerHTML == '&nbsp;'){
      paragraph.style.display = 'none';
    }
  })
}

$(document).ready(() => {
  const sideMenu = document.querySelector('#LeftMenu');
  if(sideMenu){
    hideSideMenu(sideMenu)
  }
  hideEmptyParagraphs();
  handleInputClick;
})