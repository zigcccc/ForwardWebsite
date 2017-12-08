const mobileMenuClick = function (icon, body) {
  icon.addEventListener('click', (e) => {
    if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open')
    }
    else {
      body.classList.add('menu-open')
    }
  })
}

export default mobileMenuClick