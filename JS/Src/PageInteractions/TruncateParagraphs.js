const truncateParagraphs = function (paragraphs, length) {
  paragraphs = Array.from(paragraphs)
  for (let paragraph of paragraphs) {
    paragraph.removeAttribute('style')
    let str = paragraph.innerText
    let truncatedStr = str.substring(0, length)
    if(str.length > length){
      paragraph.innerText = `${truncatedStr}...`
    }
    if(str.length <= 1 || str == '&nbsp;'){
      paragraph.style.display = 'none'
    }
  }
}

export default truncateParagraphs