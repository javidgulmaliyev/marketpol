import IMask from 'imask';

/** @type {NodeListOf<HTMLInputElement>} */
const priceInputs = document.querySelectorAll('.filter-fieldset__prices .filter-fieldset__input');

priceInputs.forEach((priceInput) => {
  const { dataset } = priceInput;
  const { prefix, suffix, } = dataset;
  const input = priceInput.previousElementSibling;

  const mask = IMask(priceInput, {
    mask: `${prefix} PRICE ${suffix}`,
    blocks: {
      PRICE: {
        mask: /^[1-9]\d*$/,
      },
    },
  });

  priceInput.addEventListener('focus', (event) => {
    const { unmaskedValue } = mask;

    if (!unmaskedValue) {
      mask.value = `${prefix} PRICE ${suffix}`;
    }
  });

  priceInput.addEventListener('blur', updatePriceInput);

  priceInput.addEventListener('input', updatePriceInput);

  function updatePriceInput() {
    const { unmaskedValue } = mask;

    if (unmaskedValue === '') {
      mask.value = '';
    } else {
      mask.value = `${prefix} ${unmaskedValue} ${suffix}`;
    }

    if (input) {
      input.value = unmaskedValue;
    }
  }

  updatePriceInput();
});
