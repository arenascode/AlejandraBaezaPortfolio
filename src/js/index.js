// -----Animation on img inside Main Slider--------

const carouselItems = document.querySelectorAll(
  '[data-name="carouselItemIntro"]'
);
const sliderImgs = document.querySelectorAll('[data-name="imgSlider"]');
const imgCarrousel1 = document.getElementById("imgCarrousel1");

function handleSlideTransition(e) {
  const currentSlide = e.target;
  const currentImg = currentSlide.querySelector('[data-name="imgSlider"]');
  sliderImgs.forEach((slider) => {
    slider.classList.toggle("zoomTransition");
  });
  currentImg.classList.add("zoomTransition");
}

carouselItems.forEach((slide) =>
  slide.addEventListener("transitionend", handleSlideTransition)
);

window.addEventListener("load", function () {
  imgCarrousel1.classList.add("zoomTransition");
});

// -----Modal Menu Mobile ----//

const mobileMenu = document.getElementById("mobileMenu_modal");

const hamburguerBtn = document.getElementById("menuModalBtn");

const closeModalBtn = document.getElementById("closeModalBtn");
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
const statisticsContainer = document.querySelector(".aboutMe_statistics");
// --microSeriesQty
const microSeriesQty = document.querySelector(".microSeries_quantity");
const microSeriesQty_To = parseInt(microSeriesQty.dataset.to);
const microSeriesQty_From = parseInt(microSeriesQty.dataset.from);
// -- theatrePlaysQty
const theatrePlaysQty = document.querySelector(".theatrePlays_quantity");
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
      displayCountTheatrePlays(currentCount + 1);
    }, 200);
  }
}

//ShortFIlms Count
function displayCountShortFilms(currentCount) {
  shortFilmsQty.innerHTML = currentCount;

  if (currentCount < shortFilmsQty_To) {
    setTimeout(() => {
      displayCountShortFilms(currentCount + 1);
    }, 200);
  }
}

let previousScrollPosition = window.scrollY;
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

window.addEventListener("scroll", handleStatistics);

// ----- Show Video Introduction----- //

const reelModalContainer = document.querySelector(".video_modalContainer");
const reelModalContent = document.querySelector(".video_modalContent");
const openVideoModalBtn = document.querySelector(".playerContent_iconPlay");
const closeModalVideoBtn = document.getElementById("closeModalVideoBtn");
const videoIframe = document.querySelector("iframe");

// --- To Open modal ---

function showVideoModal() {
  reelModalContainer.style.display = "flex";
  setTimeout(() => {
    reelModalContainer.style.opacity = 1;
    player.playVideo();
  }, 200);
  document.body.style.overflow = "hidden";
}
// ---To close Modal with close Bttn ---

// To stop video when close the modal

function closeVideoModal() {
  reelModalContainer.style.opacity = 0;
  setTimeout(() => {
    reelModalContainer.style.display = "none";
    player.stopVideo();
  }, 500);
  document.body.style.overflow = "auto";
}

// -- To manage a YoutubeVideo -- //
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var playerFeaturedFilms;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "yb4ovyv9xqU",
    playerVars: {
      playsinline: 1,
    },
    events: {},
  });

  // player to shortFilm 
  playerFeaturedFilms = new YT.Player("playerFilm", {
    height: "390",
    width: "640",
    videoId: "yb4ovyv9xqU",
    playerVars: {
      playsinline: 1,
    },
    events: {},
  });
}

function stopVideo() {
  console.log(player);
}

openVideoModalBtn.addEventListener("click", showVideoModal);
reelModalContent.addEventListener("click", closeVideoModal);
closeModalVideoBtn.addEventListener("click", closeVideoModal);

// ---- Featured Films Section --- //

const featuredFilmsBtns = document.querySelectorAll(
  ".featuredFilms_buttons button"
);
const videoItems = document.querySelectorAll(".video_item");

window.addEventListener("load", () => {
  // Set default filter to "All" on page load
  applyFilter("all");
});

featuredFilmsBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const filmType = e.target.dataset.filmtype;
    applyFilter(filmType);
  });
});

function applyFilter(filmType) {
  videoItems.forEach((item) => {
    if (filmType === "all" || item.dataset.category === filmType) {
      item.style.display = "flex";
      item.style.width = "60%";
      item.style.margin = "auto";
      setTimeout(() => {
        item.classList.add("visible");
      }, 20);
    } else {
      setTimeout(() => {
        item.classList.remove("visible");
      }, 20);
      item.style.display = "none";
    }
  });
}

// To show each video in a modal

const playBtnFilms = document.querySelectorAll(".iconPlayFeaturedFilms");
const filmsPlayer = document.querySelector(".featuredFilmsPlayer");
const featuredFilmsModal = document.querySelector(
  ".featuredFilmsModalContainer"
);
const featuredFilmsContent = document.querySelector(
  ".featuredFilmsModalContent"
);
const closefeaturedFilmsBtn = document.getElementById("closeFeaturedFilmsBtn");
const videoDescription = document.querySelector(
  ".featuredFilms_videoDescription"
);

function openFeaturedFilmsModal() {
  featuredFilmsModal.style.display = "flex";
  setTimeout(() => {
    featuredFilmsModal.style.opacity = 1;
  }, 200);
  document.body.style.overflow = "hidden";
}

function closefeaturedFilmsModal() {
  featuredFilmsModal.style.opacity = 0;
  playerFeaturedFilms.stopVideo()
  setTimeout(() => {
    featuredFilmsModal.style.display = "none";
  }, 500);
  document.body.style.overflow = "auto";
}

function showFeaturedFilms() {
  const filmType = this.dataset.filmtype;
  switch (filmType) {
    case "microNovela":
      videoDescription.innerHTML = `
      <h3>Amor Ciego</h3>
      <p>MICRO NOVELA</p>
      `;
      setTimeout(() => {
        openFeaturedFilmsModal();
      }, 50);
      break;
    case "shortFilm":
      playerFeaturedFilms.loadVideoById("yb4ovyv9xqU");
      videoDescription.innerHTML = `
      <h3>Obsesiones</h3>
      <p>SHORT FILM</p>`
      setTimeout(() => {
        openFeaturedFilmsModal();
        playerFeaturedFilms.playVideo()
        console.log(`playerShortF ${JSON.stringify(playerFeaturedFilms)}`);
      }, 50);
      break;
    case "musicVideo":
      playerFeaturedFilms.loadVideoById("DESUB4NFWsY")
      videoDescription.innerHTML = `
      <h3>Me Perdiste</h3>
      <p>MUSIC VIDEO</p>`
      setTimeout(() => {
        openFeaturedFilmsModal();
        playerFeaturedFilms.playVideo();
        console.log(`playerShortF ${JSON.stringify(playerFeaturedFilms)}`);
      }, 50);
      break;
  }
}

playBtnFilms.forEach((btnFilm) =>
  btnFilm.addEventListener("click", showFeaturedFilms)
);
closefeaturedFilmsBtn.addEventListener("click", closefeaturedFilmsModal);
featuredFilmsContent.addEventListener("click", closefeaturedFilmsModal);

// ***** SCIPTS FOR MANAGE LAYOUT IN WIDTH> 1200px **** //

const navBarDesktop = document.getElementById('navBarDesktop')
const topOfNav = navBarDesktop.offsetTop
console.log(navBarDesktop);

function fixNav() {
  const offsetTop = window.scrollY;
  if (offsetTop >= topOfNav) {
    document.body.classList.add("fixed-nav");
    document.body.style.paddingTop = navBarDesktop.offsetHEight + "px"
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav")
  }
}

window.addEventListener("scroll", fixNav)