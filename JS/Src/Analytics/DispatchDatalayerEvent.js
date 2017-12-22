const dispatchDatalayerEvent = (elem, event) => {
  let href = elem.href
  dataLayer.push({
    event: event,
    clickedElement: href
  })
}

export default dispatchDatalayerEvent