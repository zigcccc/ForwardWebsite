const headerOpacity = function (header) {
  window.addEventListener('scroll', (e) => {
    let offset = window.pageYOffset
    console.log(offset)
    if (offset > 0) {
      header.classList.add('small')
    } else {
      header.classList.remove('small')
    }
    if (offset <= 75) {
      header.style.backgroundColor = 'rgba(22,22,22,0)'.replace(/[^,]+(?=\))/, offset / 100)
    }
    else {
      header.style.backgroundColor = 'rgba(22,22,22,0)'.replace(/[^,]+(?=\))/, '0.75')
    }
  })
}

export default headerOpacity