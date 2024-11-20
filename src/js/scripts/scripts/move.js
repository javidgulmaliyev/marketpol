import { Move } from "../../modules/move.js";

/** @type {HTMLDivElement} */
const headerLogoMain = document.querySelector(".header-logo");
/** @type {HTMLDivElement} */
const headerLogoContainer = document.querySelector(".header-top__logo");

if (headerLogoMain && headerLogoContainer) {
  const move = new Move({
    breakpoint: 992,
    destinationSelector: ".header-top__logo",
    targetSelector: ".header-logo",
  });
}

/** @type {HTMLUListElement} */
const headerSpoilersMain = document.querySelector(".header-spoilers");
/** @type {HTMLDivElement} */
const headerSpoilersContainer = document.querySelector(".catalog-nav__spoilers");

if (headerSpoilersMain && headerSpoilersContainer) {
  const move = new Move({
    breakpoint: 992,
    destinationSelector: ".catalog-nav__spoilers",
    targetSelector: ".header-spoilers",
  });
}

/** @type {HTMLUListElement} */
const productSpoilersMain = document.querySelector(".product-spoilers");
/** @type {HTMLDivElement} */
const productSpoilersContainer = document.querySelector(".info__spoilers");

if (productSpoilersMain && productSpoilersContainer) {
  const move = new Move({
    destinationSelector: ".info__spoilers",
    targetSelector: ".product-spoilers",
  });
}

/** @type {HTMLDivElement} */
const productHeaderMain = document.querySelector(".product-header");
/** @type {HTMLDivElement} */
const productHeaderContainer = document.querySelector(".product__header");

if (productHeaderMain && productHeaderContainer) {
  const move = new Move({
    destinationSelector: ".product__header",
    targetSelector: ".product-header",
  });
}
