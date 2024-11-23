const productImages = document.querySelector(".product-slider");
const imagesShowButton = document.querySelector(".product__button");

if (productImages && imagesShowButton) {
  imagesShowButton.addEventListener("click", () => {
    productImages.classList.add("product-slider--show");

    imagesShowButton.remove();
  });
}
