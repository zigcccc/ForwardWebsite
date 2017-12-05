import 'owl.carousel'
const frontCarousel = function (carousel, interval) {
  const options = {
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplayHoverPause: false,
    autoplay: true,
    lazyload: true,
    autoplayTimeout: interval
  }
  carousel.owlCarousel(options)
}

export default frontCarousel