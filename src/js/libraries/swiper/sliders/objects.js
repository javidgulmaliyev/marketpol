import Swiper from "swiper";
import { Keyboard, Navigation, Pagination, } from "swiper/modules";

/** @type {HTMLDivElement} */
const objectsSlider = document.querySelector(".objects-slider");

if (objectsSlider) {
  const pagination = objectsSlider.querySelector(".slider-pagination");
  const prev = objectsSlider.querySelector(".slider-arrows__button--prev");
  const next = objectsSlider.querySelector(".slider-arrows__button--next");

  const swiper = new Swiper(objectsSlider, {
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
      "620.1": {
        slidesPerView: "auto",
      },
    },
    slidesPerView: 1,
    spaceBetween: 40,
  });
}
