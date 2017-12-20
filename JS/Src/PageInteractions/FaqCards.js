const faqCards = (cards) => {
  cards = Array.from(cards)
  for (let card of cards) {
    card.addEventListener('click', (e) => {
      let cond = card.classList.contains('open')
      let siblings = card.parentNode.children
      if (cond) {
        card.classList.remove('open')
      }
      else {
        for (let sibling of siblings) {
          if (sibling.classList.contains('open')) {
            sibling.classList.remove('open')
          }
        }
        card.classList.add('open')
      }
    })
  }
}

export default faqCards