/** @type {HTMLButtonElement} */
const sortOpenButton = document.querySelector('.actions-form__button');
// /** @type {HTMLSelectElement} */
// const select = document.querySelector('.actions-form__select');
/** @type {HTMLDivElement} */
const customSelect = document.querySelector('.custom-select');

if (sortOpenButton /* && select */ && customSelect) {
  /** @type {HTMLButtonElement} */
  const customSelectCloseButton = customSelect.querySelector('.custom-select__close');
  // /** @type {HTMLDivElement} */
  // const customSelectOptionsBlock = customSelect.querySelector('.custom-select__options');

  sortOpenButton.addEventListener('click', () => {
    sortOpenButton.classList.toggle('actions-form__button--active');
  });

  if (customSelectCloseButton) {
    customSelectCloseButton.addEventListener('click', () => {
      sortOpenButton.classList.remove('actions-form__button--active');
    });
  }

  document.addEventListener('click', (event) => {
    /** @type {{target: HTMLElement}} */
    const { target } = event;

    if (!target.closest('.actions-form__button') && !target.closest('.custom-select')) {
      sortOpenButton.classList.remove('actions-form__button--active');
    }
  });

  document.addEventListener('keydown', (event) => {
    const { key } = event;

    if (key === 'Escape') {
      sortOpenButton.classList.remove('actions-form__button--active');
    }
  });

  // if (customSelectOptionsBlock) {
  //   const customSelectOptionsMap = {};

  //   Array.from(select.options).forEach((option) => {
  //     const { selected, value, textContent, } = option;
  //     const button = document.createElement('button');

  //     button.classList.add('custom-select__option');
  //     button.classList.toggle('custom-select__option--selected', selected);
  //     button.type = 'button';
  //     button.dataset.option = value;
  //     button.textContent = textContent;

  //     customSelectOptionsBlock.append(button);
  //     customSelectOptionsMap[value] = button;

  //     if (selected) {
  //       customSelectOptionsMap.selected = button;
  //     }

  //     button.addEventListener('click', () => {
  //       select.value = value;
  //       select.dispatchEvent(new Event('change'), { bubbles: true });
  //       sortOpenButton.classList.remove('actions-form__button--active');
  //     });
  //   });

  //   select.addEventListener('change', () => {
  //     const { value } = select;

  //     customSelectOptionsMap.selected?.classList.remove('custom-select__option--selected');

  //     if (customSelectOptionsMap[value]) {
  //       customSelectOptionsMap.selected = customSelectOptionsMap[value];
  //       customSelectOptionsMap.selected.classList.add('custom-select__option--selected');
  //     }
  //   });
  // }
}
