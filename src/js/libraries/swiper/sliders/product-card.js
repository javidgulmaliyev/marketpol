import Swiper from "swiper";
import { Pagination, } from "swiper/modules";

/** @type {NodeListOf<HTMLDivElement>} */
const productCardSliders = document.querySelectorAll(".product-card-slider");

productCardSliders.forEach((productCardSlider) => {
  /** @type {HTMLSpanElement} */
  const pagination = productCardSlider.querySelector(".slider-pagination");

  const swiper = new Swiper(productCardSlider, {
    modules: [Pagination,],
    pagination: {
      clickable: true,
      el: pagination,
      enabled: true,
    },
    spaceBetween: 10,
    nested: true,
  });
});
