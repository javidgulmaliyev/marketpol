import Swiper from "swiper";
import { Keyboard, Navigation, } from "swiper/modules";
import { Move } from "../../../modules/move.js";

/** @type {HTMLDivElement} */
const purposes = document.querySelector(".product-purposes");
/** @type {NodeListOf<HTMLDivElement>} */
const sliders = purposes?.querySelectorAll(".purpose-slider");

if (purposes && sliders.length) {
  const MIN_WIDTH_768_PX = matchMedia("(min-width: 768.1px)");
  /** @type {NodeListOf<HTMLDivElement>} */
  const purposeItems = purposes.querySelectorAll("[data-purpose]");
  const prev = purposes.querySelector(".purposes-arrows__button--prev");
  const next = purposes.querySelector(".purposes-arrows__button--next");

  /** @type {Swiper} */
  let swiper;

  sliders.forEach((slider) => {
    initSlider(slider);

    MIN_WIDTH_768_PX.addEventListener("change", (event) => {
      swiper?.destroy();

      initSlider(slider);
    });
  });

  purposeItems.forEach((purposeItem) => {
    const { dataset } = purposeItem;
    const { purpose } = dataset;
    const placeholder = document.querySelector(`[data-placeholder=\"${purpose}\"]`);

    if (placeholder) {
      const move = new Move({
        destinationSelector: `[data-placeholder=\"${purpose}\"]`,
        targetSelector: `[data-purpose=\"${purpose}\"]`,
      });
    }
  });

  /** @param {HTMLDivElement} slider */
  function initSlider(slider) {
    swiper = new Swiper(slider, {
      modules: [Keyboard, Navigation,],
      keyboard: {
        enabled: true,
        pageUpDown: false,
      },
      navigation: {
        enabled: true,
        nextEl: next,
        prevEl: prev,
      },
      on: {
        init: (swiper) => {
          const { navigation } = swiper;
          const { prevEl } = navigation;
          const { matches } = MIN_WIDTH_768_PX;

          if (!matches) {
            prevEl.classList.add("swiper-button-disabled");
          }
        },
      },
      slidesPerView: "auto",
      spaceBetween: 8,
      allowTouchMove: false,
    });
  }
}
