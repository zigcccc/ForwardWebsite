const handleSVG = (images) => {
  images = Array.from(images)
  for (let image of images) {
    let imageURL = image.src
    $.get(imageURL, (data) => {
      let svg = data.activeElement
      if (svg !== undefined && svg !== null) {
        svg.classList.add('fwd-arrow-icon')
        image.replaceWith(svg)
      }
    }, 'xml')
  }
}

export default handleSVG