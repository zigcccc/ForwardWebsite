import switchChange from './SwitchChange'

const handleSwitchClick = function (cards) {
  cards = Array.from(cards)
  for (let card of cards) {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('toggle')) {
        switchChange(e.target)
      }
    })
  }
}

export default handleSwitchClick