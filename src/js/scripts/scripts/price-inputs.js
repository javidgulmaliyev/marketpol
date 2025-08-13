/** @type {NodeListOf<HTMLDivElement>} */
const priceInputBlocks = document.querySelectorAll('.filter-fieldset__price');

priceInputBlocks.forEach((block) => {
  const { dataset } = block;
  /** @type {HTMLInputElement} */
  const input = block.querySelector('.filter-fieldset__input');

  if (input) {
    updateDataValue();

    input.addEventListener('input', updateDataValue);
    input.addEventListener('change', updateDataValue);
    input.addEventListener('focus', updateDataValue);
    input.addEventListener('blur', updateDataValue);

    function updateDataValue() {
      const { value } = input;

      if (value !== '') {
        dataset.price = value;
      } else {
        dataset.price = 'empty';
      }
    }
  }
});
