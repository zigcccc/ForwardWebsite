const inputClick = function (inputs) {
  for (let input of inputs) {
    input.addEventListener('focusin', (event) => {
      let label = event.target.parentNode.children[0]
      label.classList.add('is-focused')
    })
    input.addEventListener('focusout', (event) => {
      let label = event.target.parentNode.children[0]
      label.classList.remove('is-focused')
    })
  }
}

export default inputClick;