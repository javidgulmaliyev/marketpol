import { Scrolling } from "../../modules/scrolling.js";

const MIN_WIDTH_992_PX = matchMedia("(min-width: 992.1px)");
const { matches, } = MIN_WIDTH_992_PX;
const { documentElement, } = document;
/** @type {NodeListOf<HTMLButtonElement>} */
const spoilerButtons = document.querySelectorAll(".header-spoilers__button");
/** @type {HTMLButtonElement} */
const burgerButton = document.querySelector("[data-burger=\"button\"]")

if (matches) spoilerCatalogInit(matches);

MIN_WIDTH_992_PX.addEventListener("change", (event) => {
  const { matches } = event;

  if (matches) {
    spoilerCatalogInit(matches);
  } else {
    hideSpoilerCatalog();
    spoilerCatalogInit(matches);
  }
});

/** @param {boolean} mediaQueryMatches */
function spoilerCatalogInit(mediaQueryMatches) {
  spoilerButtons.forEach((spoilerButton) => {
    /** @type {HTMLDivElement} */
    const spoilerItem = spoilerButton.closest(".header-spoilers__item");
    /** @type {HTMLDivElement} */
    const spoilerRegion = spoilerItem?.querySelector(".header-spoilers__region");

    if (mediaQueryMatches) {
      spoilerButton.disabled = false;
      spoilerButton.ariaExpanded = false;
    }

    if (spoilerRegion && mediaQueryMatches) spoilerRegion.hidden = false;

    spoilerButton[mediaQueryMatches ? "addEventListener" : "removeEventListener"]("click", spoilerButtonEventListener);
  });

  document[mediaQueryMatches ? "addEventListener" : "removeEventListener"]("click", documentClickEventListener);
  document[mediaQueryMatches ? "addEventListener" : "removeEventListener"]("keydown", documentKeydownEventListener);
}

/** @this {HTMLButtonElement} */
function spoilerButtonEventListener() {
  /** @type {HTMLDivElement} */
  const spoilerItem = this.closest(".header-spoilers__item");
  /** @type {HTMLDivElement} */
  const spoilerCatalog = spoilerItem?.querySelector(".spoiler-catalog");

  if (spoilerCatalog) {
    if (documentElement.classList.contains("burger-active")) burgerButton?.click();

    if (spoilerCatalog.classList.contains("spoiler-catalog--show")) {
      hideSpoilerCatalog();
    } else {
      hideSpoilerCatalog();
      spoilerCatalog.classList.add("spoiler-catalog--show");
      this.ariaExpanded = true;
      Scrolling.lock();
    }
  }
}

/** @param {MouseEvent} event */
function documentClickEventListener(event) {
  /** @type {{target: HTMLElement}} */
  const { target, } = event;

  if (!target.closest(".header-spoilers__item:has([data-spoiler=\"region\"])")) hideSpoilerCatalog();
}

/** @param {KeyboardEvent} event */
function documentKeydownEventListener(event) {
  const { code, } = event;

  if (code === "Escape") hideSpoilerCatalog();
}

function hideSpoilerCatalog() {
  const { matches, } = MIN_WIDTH_992_PX;
  /** @type {HTMLDivElement} */
  const activeSpoilerCatalog = document.querySelector(".spoiler-catalog--show");
  /** @type {HTMLDivElement} */
  const spoilerItem = activeSpoilerCatalog?.closest(".header-spoilers__item");
  /** @type {HTMLButtonElement} */
  const spoilerButton = spoilerItem?.querySelector(".header-spoilers__button");

  if (spoilerButton) {
    activeSpoilerCatalog.classList.remove("spoiler-catalog--show");

    if (matches) spoilerButton.ariaExpanded = false;

    Scrolling.unlock();
  }
}
