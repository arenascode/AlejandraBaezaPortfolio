const carouselItems = document.querySelectorAll('.carousel-item')
console.log(carouselItems);
const sliderImgs = document.querySelectorAll('[data-name="imgSlider"]')
console.log(sliderImgs);

function handleSlideTransition(e) {
  const currentSlide = e.target
  const img = currentSlide.querySelector('[data-name="imgSlider"]');

  sliderImgs.forEach((slider) => {
    slider.classList.remove('zoomTransition')
  })
  
  img.classList.add('zoomTransition')
}

carouselItems.forEach(slide =>
  slide.addEventListener('transitionend', handleSlideTransition)
)
