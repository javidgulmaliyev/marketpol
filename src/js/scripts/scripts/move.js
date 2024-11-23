import { Move } from "../../modules/move.js";

/** @type {HTMLFormElement} */
const searchFormMain = document.querySelector(".search-form");
/** @type {HTMLDivElement} */
const searchFormContainer = document.querySelector(".header-main__actions");

if (searchFormMain && searchFormContainer) {
  const move = new Move({
    breakpoint: 992,
    destinationSelector: ".header-main__actions",
    targetSelector: ".search-form",
    index: "first",
  });
}

/** @type {HTMLDivElement} */
const cartLinkMain = document.querySelector(".header-cart");
/** @type {HTMLDivElement} */
const cartLinkContainer = document.querySelector(".header-main__actions");

if (cartLinkMain && cartLinkContainer) {
  const move = new Move({
    breakpoint: 992,
    destinationSelector: ".header-main__actions",
    targetSelector: ".header-cart",
  });
}

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
const headerSpoilersContainer = document.querySelector(".header-catalog__nav");

if (headerSpoilersMain && headerSpoilersContainer) {
  const move = new Move({
    breakpoint: 992,
    destinationSelector: ".header-catalog__nav",
    targetSelector: ".header-spoilers",
    index: "first",
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
