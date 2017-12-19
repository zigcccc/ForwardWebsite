import switchChange from './SwitchChange'

const handleSwitchClick = function (cards) {
  for (let card of cards) {
    card.addEventListener('click', (e) => {
      console.log(e.target)
      if (e.target.classList.contains('toggle')) {
        switchChange(e.target)
      }
    })
  }
}

export default handleSwitchClick