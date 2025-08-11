class ProductID extends HTMLElement {
  /** @type {HTMLDivElement} */
  text;
  /** @type {HTMLButtonElement} */
  button;
  /** @type {string} */
  value;
  /** @type {NodeJS.Timeout} */
  timeout;
  /** @type {AbortController} */
  abortController;

  constructor() {
    super();
  }

  connectedCallback() {
    this.text = this.querySelector('.product-id__text');
    this.button = this.querySelector('.product-id__button');

    if (this.text && this.button) {
      this.value = this.text.textContent;

      if (this.value) {
        this.abortController = new AbortController();

        this.button.addEventListener('click', () => {
          if (!this.classList.contains('product-id--copied')) {
            navigator.clipboard.writeText(this.value);
            this.classList.add('product-id--copied');

            this.timeout = setTimeout(() => {
              this.classList.remove('product-id--copied');
            }, 1000);
          }
        }, { signal: this.abortController.signal });
      }
    }
  }

  disconnectedCallback() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.abortController?.abort();

    this.text = undefined;
    this.button = undefined;
    this.value = undefined;
    this.timeout = undefined;
    this.abortController = undefined;
  }
}

customElements.define('product-id', ProductID);
