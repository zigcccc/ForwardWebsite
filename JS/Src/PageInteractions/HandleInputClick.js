function inputClick () {
  const inputs = document.querySelectorAll('.form-control');
  Array.from(inputs, (input, i) => {
    input.addEventListener('focusin', (event) => {
      let label = event.path[1].children[0];
      label.classList.add('is-focused')
    })
    input.addEventListener('focusout', (event) => {
      let label = event.path[1].children[0];
      label.classList.remove('is-focused')
    })
  })
}

export default inputClick;