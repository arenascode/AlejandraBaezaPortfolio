// -----Animation on img inside Main Slider--------

const carouselItems = document.querySelectorAll('.carousel-item')
const sliderImgs = document.querySelectorAll('[data-name="imgSlider"]')
const imgCarrousel1 = document.getElementById('imgCarrousel1')

function handleSlideTransition(e) {
  const currentSlide = e.target
  const currentImg = currentSlide.querySelector('[data-name="imgSlider"]');
  sliderImgs.forEach((slider) => {
    slider.classList.toggle('zoomTransition')
  })
  currentImg.classList.add('zoomTransition')
}

carouselItems.forEach(slide =>
  slide.addEventListener('transitionend', handleSlideTransition)
)

window.addEventListener('load', function () {
  imgCarrousel1.classList.add('zoomTransition');
})

// -----Modal Menu Mobile ----

const mobileMenu = document.getElementById("mobileMenu_modal");

const hamburguerBtn = document.getElementById("menuModalBtn");

const closeModalBtn = document.getElementById("closeModalBtn");
;

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

// ----Animations of statistics About Me Section ----
const sinceDate = document.querySelector('.roleFilms_sinceDate')
const sinceDateTo = parseInt(sinceDate.dataset.to)
const sinceDateFrom = parseInt(sinceDate.dataset.from)


function displayCount(currentCount) {
  sinceDate.innerHTML = currentCount;

  if (currentCount < sinceDateTo) {
    setTimeout(() => {
      displayCount(currentCount + 1);
    }, 5);
  }
}
displayCount(sinceDateFrom)