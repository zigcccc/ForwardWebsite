const hideEmptyParagraphs = function (paragraphs) {
  paragraphs = Array.from(paragraphs)
  for (let paragraph of paragraphs) {
    let cond = paragraph.innerText.length > 1 ? true : false;
    if(!cond && paragraph.innerHTML == '&nbsp;'){
      paragraph.style.display = 'none';
    }
  }
}

export default hideEmptyParagraphs