import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

/** @type {NodeListOf<HTMLDivElement>} */
const similarSliders = document.querySelectorAll(".similar-slider");

similarSliders.forEach((similarSlider) => {
  const swiper = new Swiper(similarSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "360.1": {
        slidesPerView: 1.4375,
        spaceBetween: 10,
      },
      "550.1": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "768.1": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "1024.1": {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      "1300.1": {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    slidesPerView: 1,
    spaceBetween: 10,
    rewind: true,
  });
});
