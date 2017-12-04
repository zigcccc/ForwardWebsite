const clickableNewsCard = function (cards) {
  for (let card of cards) {
    let pageURL = ''
    let cardURL = card.innerHTML.match(/href="(.*?)"/)[1]
    card.addEventListener('click', () => {
      document.location.href = cardURL
    })
  }
}

export default clickableNewsCard