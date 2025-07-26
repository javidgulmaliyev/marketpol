import Swiper from "swiper";
import { Keyboard, Navigation, Pagination, } from "swiper/modules";

/** @type {HTMLDivElement} */
const clientsSlider = document.querySelector(".clients-slider");

if (clientsSlider) {
  const pagination = clientsSlider.querySelector(".slider-pagination");
  const prev = clientsSlider.querySelector(".slider-arrows__button--prev");
  const next = clientsSlider.querySelector(".slider-arrows__button--next");

  const swiper = new Swiper(clientsSlider, {
    modules: [Keyboard, Navigation, Pagination,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: next,
      prevEl: prev,
    },
    pagination: {
      clickable: true,
      el: pagination,
      enabled: true,
    },
    breakpoints: {
      "550.1": {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      "768.1": {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      "992.1": {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    slidesPerView: 2.825,
    spaceBetween: 8,
  });
}
