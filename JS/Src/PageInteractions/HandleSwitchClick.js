import switchChange from './SwitchChange'

const handleSwitchClick = function (cards) {
  for (let card of cards) {
    let switchElem = card.children[1].children[0].children[0]
    if(typeof(switchElem) != undefined && switchElem != null){
      switchChange(switchElem)
    }
  }
}

export default handleSwitchClick