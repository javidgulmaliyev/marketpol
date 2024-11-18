/** @type {HTMLButtonElement} */
const burgerButton = document.querySelector(".catalog-button");
/** @type {HTMLButtonElement} */
const closeButton = document.querySelector(".header-catalog__close");

if (burgerButton && closeButton) {
  closeButton.addEventListener("click", () => {
    burgerButton.click();
  });
}
