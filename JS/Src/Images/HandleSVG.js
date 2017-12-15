const handleSVG = (images) => {
  for (let image of images) {
    let imageURL = image.attr.src
    console.log(imageURL)
  }
}

export default handleSVG