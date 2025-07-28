const adsButton = document.querySelector('.ads-header__button');

if (adsButton) {
  adsButton.addEventListener('click', () => {
    adsButton.classList.toggle('ads-header__button--active');
  });

  document.addEventListener('click', (event) => {
    /** @type {{target: HTMLElement}} */
    const { target } = event;

    if (!target.closest('.ads-header__button') && !target.closest('.ads-advertiser')) {
      adsButton.classList.remove('ads-header__button--active');
    }
  });

  document.addEventListener('keydown', (event) => {
    const { key } = event;

    if (key === 'Escape') {
      adsButton.classList.remove('ads-header__button--active');
    }
  });
}
