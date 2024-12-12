import Swiper from "swiper";
import { Grid, Keyboard, Pagination, } from "swiper/modules";

/** @type {NodeListOf<HTMLDivElement>} */
const modelColorsBlocks = document.querySelectorAll(".model-colors");

modelColorsBlocks.forEach((modelColors) => {
  if (modelColors) {
    const pagination = modelColors.querySelector(".slider-pagination");

    const swiper = new Swiper(modelColors, {
      modules: [Grid, Keyboard, Pagination,],
      grid: false,
      keyboard: {
        enabled: true,
        pageUpDown: false,
      },
      pagination: {
        clickable: true,
        el: pagination,
        enabled: true,
      },
      on: {
        resize: (swiper) => {
          const { params } = swiper;

          params.spaceBetween = Math.min(40, 16 + 24 * ((innerWidth - 375) / 925));
        },
      },
      breakpoints: {
        "500.1": {
          grid: false,
          slidesPerView: 2,
        },
        "768.1": {
          grid: {
            fill: "column",
            rows: 2,
          },
          slidesPerView: 2,
        },
      },
      slidesPerView: 1.168965517,
      spaceBetween: Math.min(40, 16 + 24 * ((innerWidth - 375) / 925)),
    });
  }
});
