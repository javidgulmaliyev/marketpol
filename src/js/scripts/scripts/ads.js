class AdsButton extends HTMLElement {
  /** @type {HTMLButtonElement} */
  button;
  /** @type {AbortController} */
  abortController;

  constructor() {
    super();
  }

  connectedCallback() {
    this.button = this.querySelector('.ads-header__button');

    if (this.button) {
      this.abortController = new AbortController();

      this.button.addEventListener('click', () => {
        this.button.classList.toggle('ads-header__button--active');
      }, { signal: this.abortController.signal });

      document.addEventListener('click', (event) => {
        /** @type {{target: HTMLElement}} */
        const { target } = event;

        if (!target.closest('.ads-header__button') && !target.closest('.ads-advertiser')) {
          this.button.classList.remove('ads-header__button--active');
        }
      }, { signal: this.abortController.signal });

      document.addEventListener('keydown', (event) => {
        const { key } = event;

        if (key === 'Escape') {
          this.button.classList.remove('ads-header__button--active');
        }
      }, { signal: this.abortController.signal });
    }
  }

  disconnectedCallback() {
    this.abortController?.abort();

    this.button = undefined;
    this.abortController = undefined;
  }
}

customElements.define('ads-button', AdsButton);
