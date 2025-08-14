class CopyButton extends HTMLElement {
  /** @type {HTMLButtonElement} */
  button;
  /** @type {HTMLSpanElement} */
  success;
  /** @type {string} */
  successMainText;
  /** @type {string} */
  successText;
  /** @type {HTMLSpanElement} */
  span;
  /** @type {string} */
  text;
  /** @type {NodeJS.Timeout} */
  copyTimeout;
  /** @type {NodeJS.Timeout} */
  successTimeout;
  /** @type {AbortController} */
  abortController;

  constructor() {
    super();
  }

  connectedCallback() {
    this.button = this.querySelector('button');
    this.success = this.querySelector('[data-success]');
    this.span = this.querySelector('[data-copy]');

    if (this.success) {
      this.successMainText = this.success.textContent;
      this.successText = this.success.dataset.success;
    }

    if (this.button && this.span) {
      this.text = this.span.textContent;
      this.abortController = new AbortController();

      this.button.addEventListener('click', () => {
        if (!this.button.disabled) {
          navigator.clipboard.writeText(this.text);
          this.button.disabled = true;

          if (this.success) {
            this.success.textContent = this.successText;

            this.successTimeout = setTimeout(() => {
              this.success.textContent = this.successMainText;
            }, 1000);
          }

          this.copyTimeout = setTimeout(() => {
            this.button.disabled = false;
          }, 1000);
        }
      }, { signal: this.abortController.signal });
    }
  }

  disconnectedCallback() {
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }

    if (this.successTimeout) {
      clearTimeout(this.successTimeout);
    }

    this.abortController?.abort();

    this.button = undefined;
    this.success = undefined;
    this.successMainText = undefined;
    this.successText = undefined;
    this.span = undefined;
    this.text = undefined;
    this.copyTimeout = undefined;
    this.successTimeout = undefined;
    this.abortController = undefined;
  }
}

customElements.define('copy-button', CopyButton);
