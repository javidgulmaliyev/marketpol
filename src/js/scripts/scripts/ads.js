class ExamplesButton extends HTMLElement {
  /** @type {HTMLButtonElement} */
  button;
  /** @type {AbortController} */
  abortController;

  constructor() {
    super();
  }

  connectedCallback() {
    this.button = this.querySelector('.examples-header__button');

    if (this.button) {
      this.abortController = new AbortController();

      this.button.addEventListener('click', () => {
        this.button.classList.toggle('examples-header__button--active');
      }, { signal: this.abortController.signal });

      document.addEventListener('click', (event) => {
        /** @type {{target: HTMLElement}} */
        const { target } = event;

        if (!target.closest('.examples-header__button') && !target.closest('.examples-advertiser')) {
          this.button.classList.remove('examples-header__button--active');
        }
      }, { signal: this.abortController.signal });

      document.addEventListener('keydown', (event) => {
        const { key } = event;

        if (key === 'Escape') {
          this.button.classList.remove('examples-header__button--active');
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

customElements.define('examples-button', ExamplesButton);
