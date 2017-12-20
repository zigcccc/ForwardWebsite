const hideSideMenu = function (sideMenu) {
  let cond = sideMenu.innerText == '' ? true : false
  let content = document.querySelector('.mainright')
  if (cond){
    sideMenu.style.display = 'none'
    content.style.width = '100%'
  }
}

export default hideSideMenu