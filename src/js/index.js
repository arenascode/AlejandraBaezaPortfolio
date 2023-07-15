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

// -----Modal Menu Mobile ----//

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

// ----Animations of statistics About Me Section ----//
// Statistics Container 
const statisticsContainer = document.querySelector('.aboutMe_statistics')
// --microSeriesQty
const microSeriesQty = document.querySelector('.microSeries_quantity')
const microSeriesQty_To = parseInt(microSeriesQty.dataset.to)
const microSeriesQty_From = parseInt(microSeriesQty.dataset.from)
// -- theatrePlaysQty
const theatrePlaysQty = document.querySelector('.theatrePlays_quantity')
const theatrePlaysQty_To = parseInt(theatrePlaysQty.dataset.to);
const theatrePlaysQty_From = parseInt(theatrePlaysQty.dataset.from);
//ShortFimlsQty
const shortFilmsQty = document.querySelector(".shortFilms_quantity");
const shortFilmsQty_To = parseInt(shortFilmsQty.dataset.to);
const shortFilmsQty_From = parseInt(shortFilmsQty.dataset.from);


// Microseries Count
function displayCountMicroSeries(currentCount) {
  microSeriesQty.innerHTML = currentCount;

  if (currentCount < microSeriesQty_To) {
    setTimeout(() => {
      displayCountMicroSeries(currentCount + 1);
    }, 200);
  }
}

//TheatrePlays Count
function displayCountTheatrePlays(currentCount) {
  theatrePlaysQty.innerHTML = currentCount;
  
  if (currentCount < theatrePlaysQty_To) {
    setTimeout(() => {
      displayCountTheatrePlays(currentCount + 1)
    }, 200);
  }
}

//ShortFIlms Count 
function displayCountShortFilms(currentCount) {
  shortFilmsQty.innerHTML = currentCount
  
  if (currentCount < shortFilmsQty_To) {
    setTimeout(() => {
    displayCountShortFilms(currentCount + 1)
  }, 200);
  }
}

let previousScrollPosition = window.scrollY
let hasBeenActivated = false;

function handleStatistics() {
  const currentScrollPosition = window.scrollY;
  const elementRect = statisticsContainer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  
  if (
    !hasBeenActivated &&
    ((currentScrollPosition > previousScrollPosition &&
      elementRect.top < viewportHeight) ||
      (currentScrollPosition < previousScrollPosition &&
        elementRect.bottom > 0))
  ) {
    displayCountMicroSeries(microSeriesQty_From);
    displayCountTheatrePlays(theatrePlaysQty_From);
    displayCountShortFilms(shortFilmsQty_From);

    hasBeenActivated = true;
  }

  if (
    hasBeenActivated &&
    ((currentScrollPosition > previousScrollPosition &&
      elementRect.top >= viewportHeight) ||
      (currentScrollPosition < previousScrollPosition &&
        elementRect.bottom <= 0))
  ) {
    hasBeenActivated = false;
  }
  previousScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleStatistics)

// ----- Show Video Introduction----- //

const reelModalContainer = document.querySelector('.video_modalContainer')
const reelModalContent = document.querySelector('.video_modalContent')
const openVideoModalBtn = document.querySelector('.player_iconPlay');
const closeModalVideoBtn = document.getElementById('closeModalVideoBtn')
const videoIframe = document.querySelector('iframe')

// --- To Open modal ---

function showVideoModal() {
  reelModalContainer.style.display = 'flex'
  setTimeout(() => {
    reelModalContainer.style.opacity = 1;
  }, 10);
  document.body.style.overflow = 'hidden'
}
// ---To close Modal with close Bttn ---

// To stop video when close the modal

function closeVideoModal() {
    reelModalContainer.style.opacity = 0;
    setTimeout(() => {
      reelModalContainer.style.display = "none";
    }, 500);
  document.body.style.overflow = "auto";
}


openVideoModalBtn.addEventListener('click', showVideoModal)
reelModalContent.addEventListener('click', closeVideoModal)
closeModalVideoBtn.addEventListener('click', closeVideoModal)
