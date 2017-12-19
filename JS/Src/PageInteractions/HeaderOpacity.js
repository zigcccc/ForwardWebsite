const headerOpacity = function (header) {
  // Handle opacity if page is already scrolled
  let currentOffset = window.pageYOffset
  if (currentOffset > 0) {
    header.classList.add('small')
    if (currentOffset <= 75) {
      header.style.backgroundColor = 'rgba(22,22,22,0)'.replace(/[^,]+(?=\))/, currentOffset / 100)
    }
    else {
      header.style.backgroundColor = 'rgba(22,22,22,0)'.replace(/[^,]+(?=\))/, '0.75')
    }
  }

  window.addEventListener('scroll', (e) => {
    let offset = window.pageYOffset

    // Attach class 'small' if user has scrolled the page
    if (offset > 0) {
      header.classList.add('small')
    } else {
      header.classList.remove('small')
    }

    // Increase the header opacity and stop at 0.75
    if (offset <= 75) {
      header.style.backgroundColor = 'rgba(22,22,22,0)'.replace(/[^,]+(?=\))/, offset / 100)
    } else {
      header.style.backgroundColor = 'rgba(22,22,22,0)'.replace(/[^,]+(?=\))/, '0.75')
    }
  })
}

export default headerOpacity