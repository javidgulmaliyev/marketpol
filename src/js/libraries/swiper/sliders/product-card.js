import Swiper from 'swiper';
import { Pagination, Mousewheel, } from 'swiper/modules';

class ProductImages extends HTMLElement {
  /** @type {HTMLDivElement} */
  pagination;
  /** @type {Swiper} */
  swiper;

  constructor() {
    super();
  }

  connectedCallback() {
    this.pagination = this.querySelector('.slider-pagination');

    this.swiper = new Swiper(this, {
      modules: [Pagination, Mousewheel,],
      pagination: {
        clickable: true,
        el: this.pagination,
        enabled: true,
      },
      mousewheel: {
        enabled: true,
      },
      spaceBetween: 10,
      nested: true,
    });
  }

  disconnectedCallback() {
    this.pagination = undefined;
    this.swiper?.destroy();
  }
}

customElements.define('product-images', ProductImages);
