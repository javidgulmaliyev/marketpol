class DialogButton extends HTMLElement {
  /** @type {HTMLButtonElement} */
  button;
  /** @type {string} */
  id;
  /** @type {HTMLDialogElement} */
  dialog;
  /** @type {AbortController} */
  abortController;

  constructor() {
    super();
  }

  connectedCallback() {
    this.button = this.querySelector('button[data-dialog-id]');

    if (this.button) {
      this.id = this.button.dataset.dialogId;
      this.dialog = document.getElementById(this.id);

      if (this.dialog) {
        this.abortController = new AbortController();

        this.button.addEventListener('click', () => {
          this.dialog.showModal();
        }, { signal: this.abortController.signal });
      }
    }
  }

  disconnectedCallback() {
    this.abortController?.abort();

    this.button = undefined;
    this.id = undefined;
    this.dialog = undefined;
    this.abortController = undefined;
  }
}

customElements.define('dialog-button', DialogButton);

class DialogElement extends HTMLElement {
  /** @type {HTMLDialogElement} */
  dialog;
  /** @type {HTMLDivElement} */
  inner;
  /** @type {HTMLButtonElement} */
  closeButton;
  /** @type {AbortController} */
  abortController;

  constructor() {
    super();
  }

  connectedCallback() {
    this.dialog = this.querySelector('dialog');

    if (this.dialog) {
      this.inner = this.dialog.querySelector('[data-dialog="inner"]');
      this.closeButton = this.dialog.querySelector('[data-dialog="close"]');
      this.abortController = new AbortController();

      this.dialog.addEventListener('click', (event) => {
        /** @type {{target: HTMLElement}} */
        const { target } = event;

        if (!target.closest('[data-dialog="inner"]')) {
          this.dialog.close();
        }
      }, { signal: this.abortController.signal });

      this.closeButton?.addEventListener('click', () => {
        this.dialog.close();
      }, { signal: this.abortController.signal });
    }
  }

  disconnectedCallback() {
    this.abortController?.abort();

    this.dialog = undefined;
    this.inner = undefined;
    this.closeButton = undefined;
    this.abortController = undefined;
  }
}

customElements.define('dialog-element', DialogElement);
