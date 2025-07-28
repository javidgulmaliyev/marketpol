/** @type {HTMLFormElement} */
const filterForm = document.querySelector('.filter-form');
/** @type {HTMLButtonElement} */
const submitButton = document.querySelector('.filter-form__button');

if (filterForm && submitButton) {
  const firstValue = getInputsValueString();

  filterForm.addEventListener('change', () => {
    const currentValue = getInputsValueString();

    submitButton.disabled = firstValue === currentValue;
  });

  function getInputsValueString() {
    const inputs = filterForm.querySelectorAll('input');

    return Array.from(inputs).map((input) => {
      const { name, type, } = input;

      return `${name}=${input[type === 'checkbox' ? 'checked' : 'value']}`;
    }).join('\n&');
  }
}
