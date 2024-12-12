/** @type {HTMLDivElement} */
const carpetHeroImage = document.querySelector(".carpet-hero__image");

if (carpetHeroImage) {
  window.addEventListener("load", () => {
    carpetHeroImage.classList.add("carpet-hero__image--loaded");
  });
}
