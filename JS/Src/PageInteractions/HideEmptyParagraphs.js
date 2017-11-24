const hideEmptyParagraphs = function (paragraphs) {
  Array.from(paragraphs, (paragraph, i) => {
    let cond = paragraph.innerText.length > 1 ? true : false;
    if(!cond && paragraph.innerHTML == '&nbsp;'){
      paragraph.style.display = 'none';
    }
  })
}

export default hideEmptyParagraphs