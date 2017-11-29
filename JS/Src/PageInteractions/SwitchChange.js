export default function switchChange (switchElem) {
  // Check intial switch state
  switchElem.checked ? switchElem.classList.add('checked') : null

  // Listen to the change event
  switchElem.addEventListener('change', (e) => {
    let checked = e.target.checked
    let parent = e.target.parentElement.parentElement.parentElement
    
    if(checked){
      parent.classList.add('checked')
    }
    else {
      parent.classList.remove('checked')
    }
  })
}