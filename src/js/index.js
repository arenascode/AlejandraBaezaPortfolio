const carouselItems = document.querySelectorAll('.carousel-item')
const sliderImgs = document.querySelectorAll('[data-name="imgSlider"]')

// -----Animation on img inside Main Slider--------

function handleSlideTransition(e) {
  const currentSlide = e.target
  const img = currentSlide.querySelector('[data-name="imgSlider"]');
  console.log(img);
  sliderImgs.forEach((slider) => {
    slider.classList.remove('zoomTransition')
  })
  
  img.classList.add('zoomTransition')
}

carouselItems.forEach(slide =>
  slide.addEventListener('transitionend', handleSlideTransition)
)
document.addEventListener('DOMContentLoaded', handleSlideTransition)