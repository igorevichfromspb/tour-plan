const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button--next",
    prevEl: ".swiper-button--prev",
  },
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: false,
  // },
  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: false,
  // },
  // effect: "coverflow",
});

const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
