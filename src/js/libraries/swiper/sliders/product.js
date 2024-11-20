import Swiper from "swiper";
import { Keyboard, Pagination, } from "swiper/modules";

/** @type {HTMLDivElement} */
const productSlider = document.querySelector(".product-slider");
/** @type {HTMLDivElement} */
const productSliderWrapper = productSlider?.querySelector(".product-slider__wrapper");
/** @type {HTMLDivElement} */
const productSliderSlides = productSliderWrapper?.querySelectorAll(".product-slider__slide");

if (productSlider && productSliderWrapper && productSliderSlides.length) {
  const MIN_WIDTH_992_PX = matchMedia("(min-width: 992.1px)");
  const { matches } = MIN_WIDTH_992_PX;
  const pagination = productSlider.querySelector(".slider-pagination");

  /** @type {Swiper} */
  let swiper;

  if (!matches) initSlider();

  MIN_WIDTH_992_PX.addEventListener("change", (event) => {
    const { matches } = event;

    matches ? destroySlider() : initSlider();
  });

  function initSlider() {
    productSlider.classList.add("swiper");
    productSliderWrapper.classList.add("swiper-wrapper");

    productSliderSlides.forEach((slide) => {
      slide.classList.add("swiper-slide");
    });

    swiper = new Swiper(productSlider, {
      modules: [Keyboard, Pagination,],
      keyboard: {
        enabled: true,
        pageUpDown: false,
      },
      pagination: {
        clickable: true,
        el: pagination,
        enabled: true,
      },
      breakpoints: {
        "550.1": {
          slidesPerView: 2,
        },
        "768.1": {
          slidesPerView: 1,
        },
      },
      slidesPerView: 1,
      spaceBetween: 20,
      rewind: true,
    });
  }

  function destroySlider() {
    swiper?.destroy();

    productSlider.classList.remove("swiper");
    productSliderWrapper.classList.remove("swiper-wrapper");

    productSliderSlides.forEach((slide) => {
      slide.classList.remove("swiper-slide");
    });
  }
}
