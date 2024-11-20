/** @type {HTMLDivElement} */
const productId = document.querySelector(".product-id");
/** @type {HTMLDivElement} */
const productIdText = productId?.querySelector(".product-id__text");
/** @type {HTMLButtonElement} */
const productIdCopyButton = productId?.querySelector(".product-id__button");

if (productIdText && productIdCopyButton) {
  const productIdValue = productIdText.textContent;

  if (productIdValue) {
    productIdCopyButton.addEventListener("click", () => {
      if (!productId.classList.contains("product-id--copied")) {
        navigator.clipboard.writeText(productIdValue);
        productId.classList.add("product-id--copied");

        setTimeout(() => {
          productId.classList.remove("product-id--copied");
        }, 1000);
      }
    });
  }
}
