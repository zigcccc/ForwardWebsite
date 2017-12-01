const truncateParagraphs = function (paragraphs, length) {
  for (let paragraph of paragraphs) {
    paragraph.removeAttribute('style')
    let str = paragraph.innerText
    console.log(str.length)
    let truncatedStr = str.substring(0, length)
    if(str.length > 140){
      paragraph.innerText = `${truncatedStr}...`
    }
    if(str.length <= 1 || str == '&nbsp;'){
      paragraph.style.display = 'none'
    }
  }
}

export default truncateParagraphs