/** @type {HTMLElement} */
const headerNav = document.querySelector(".header-nav");
/** @type {HTMLButtonElement} */
const burgerButton = document.querySelector(".burger-button");

if (headerNav && burgerButton) {
  burgerButton.addEventListener("click", () => {
    headerNav.classList.toggle("header-top__nav--show");
  });
}
