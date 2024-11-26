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

  sliders.forEach((slider) => {
    /** @type {Swiper} */
    let swiper;

    initSlider(slider);

    MIN_WIDTH_768_PX.addEventListener("change", (event) => {
      swiper?.destroy();

      initSlider(slider);
    });

    /** @param {HTMLDivElement} slider */
    function initSlider(slider) {
      setTimeout(() => {
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
              const { prevEl, nextEl } = navigation;
              const { matches } = MIN_WIDTH_768_PX;

              if (!matches) {
                prevEl.classList.add("swiper-button-disabled");
              }

              setClassToSlider(swiper);
              activateNextButton(swiper);
            },
            resize: setClassToSlider,
          },
          slidesPerView: "auto",
          spaceBetween: 8,
          allowTouchMove: false,
        });
      });
    }
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

  /** @param {Swiper} swiper */
  function setClassToSlider(swiper) {
    const { el, wrapperEl } = swiper;
    const { width: elWidth } = el.getBoundingClientRect();
    const { scrollWidth: wrapperWidth } = wrapperEl;

    el.classList.toggle("purpose-slider--layer", elWidth < wrapperWidth);
  }

  /** @param {Swiper} swiper */
  function activateNextButton(swiper) {
    setTimeout(() => {
      const { navigation } = swiper;

      if (navigation) {
        const { nextEl } = navigation;

        const isNextElActive = [...sliders].some(
          /** @param {HTMLDivElement} slider */
          (slider) => {
            /** @type {Swiper} */
            const { swiper } = slider;

            if (swiper) {
              const { el, wrapperEl } = swiper;
              const { width: elWidth } = el.getBoundingClientRect();
              const { scrollWidth: wrapperWidth } = wrapperEl;

              if (elWidth < wrapperWidth) {
                return true;
              }
            }

            return false;
          });

        if (isNextElActive) {
          nextEl.classList.remove("swiper-button-disabled");
        }
      }
    });
  }
}
