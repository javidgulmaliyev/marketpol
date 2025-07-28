/** @type {NodeListOf<HTMLButtonElement>} */
const filterMoreButtons = document.querySelectorAll('.filter-more');

filterMoreButtons.forEach((button) => {
  const { dataset } = button;
  const { showText = 'Показать ещё', hideText = 'Скрыть', } = dataset;
  /** @type {HTMLSpanElement} */
  const textElement = button.querySelector('.filter-more__text');

  button.addEventListener('click', () => {
    button.classList.toggle('filter-more--active');

    if (textElement) {
      textElement.textContent = button.classList.contains('filter-more--active') ? hideText : showText;
    }
  });
});
