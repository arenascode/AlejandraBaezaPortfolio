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

// -----Modal Menu Mobile ----

const mobileMenu = document.getElementById("mobileMenu_modal");
console.log(mobileMenu);
const hamburguerBtn = document.getElementById("menuModalBtn");
console.log(hamburguerBtn);
const closeModalBtn = document.getElementById("closeModalBtn");
console.log(closeModalBtn);

function openModalMenu() {
  mobileMenu.style.display = "block";
  setTimeout(() => {
    mobileMenu.style.opacity = 1;
  }, 10);
}

function closeModalMenu() {
  mobileMenu.style.opacity = 0;
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 500);
}

window.onclick = function (e) {
  if (e.target === mobileMenu) {
    mobileMenu.style.opacity = 0;
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 500);
  }
};

hamburguerBtn.addEventListener("click", openModalMenu);

closeModalBtn.addEventListener("click", closeModalMenu);