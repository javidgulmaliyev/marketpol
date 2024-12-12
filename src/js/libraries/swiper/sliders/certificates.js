import Swiper from "swiper";
import { Keyboard, Navigation, Pagination, } from "swiper/modules";

/** @type {HTMLDivElement} */
const rewardsSlider = document.querySelector(".rewards-slider");

if (rewardsSlider) {
  const pagination = rewardsSlider.querySelector(".slider-pagination");
  const prev = rewardsSlider.querySelector(".slider-arrows__button--prev");
  const next = rewardsSlider.querySelector(".slider-arrows__button--next");

  const swiper = new Swiper(rewardsSlider, {
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
        spaceBetween: 16,
      },
      "992.1": {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    slidesPerView: 2.11875,
    spaceBetween: 8,
  });
}
