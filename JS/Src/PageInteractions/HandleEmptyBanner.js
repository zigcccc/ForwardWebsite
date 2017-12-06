const handleEmptyBanner = function (banner) {
  if(!banner.innerHTML){
    let title = document.querySelector('h1');
    title.parentNode.removeChild(title)
    let bannerTamplate = `
      <div class="subpage-banner">
        <img alt="${title.innerText}" src="/media/blog_novice.jpg" />
        <div class="subpage-banner-content">
          <h1 class="banner-title">${title.innerText}</h1>
        </div>
      </div>
    `
    banner.innerHTML = bannerTamplate
  }
}

export default handleEmptyBanner