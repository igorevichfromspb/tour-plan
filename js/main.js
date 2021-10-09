$(document).ready(function () {
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

  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    let modalOverley = $(".modal__overley");
    let modalDialog = $(".modal__dialog");
    modalOverley.addClass("modal__overley--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    let modalOverley = $(".modal__overley");
    let modalDialog = $(".modal__dialog");
    modalOverley.removeClass("modal__overley--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обработка форм
  $(".modal__form").validate({
    errorClass: "form-1",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "The name must be at least 2 letters long",
      },
      email: {
        required: "We need your email to contact you",
        email: "Еmail must be in the format of name@domain.com",
      },
      phone: {
        required: "Phone number required",
        minlength: "Please enter at least 11 characters",
      },
    },
  });
  $(".newsletter__subscribe").validate({
    errorClass: "form-2",
    messages: {
      email: {
        required: "We need your email to contact you",
        email: "Еmail must be in the format of name@domain.com",
      },
    },
  });
  $(".footer__form").validate({
    errorClass: "form-3",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "The name must be at least 2 letters long",
      },
      phone: {
        required: "Phone number required",
        minlength: "Please enter at least 11 characters",
      },
    },
  });
  $(".phone").mask("+7 (000) 000-0000");
  AOS.init();
});
