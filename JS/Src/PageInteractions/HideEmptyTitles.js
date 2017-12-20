const hideEmptyTitles = function (titles) {
  titles = Array.from(titles)
  for (let title of titles) {
    title.removeAttribute('style')
    let cond = title.innerText.length > 1 ? true : false;
    if(!cond && title.innerHTML == '&nbsp;'){
      title.style.display = 'none';
    }
  }
}

export default hideEmptyTitles