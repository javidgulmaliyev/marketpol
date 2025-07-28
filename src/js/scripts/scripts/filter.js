const filter = document.querySelector(".catalog-filter");
const filterButton = document.querySelector(".filter-button");

if (filter && filterButton) {
  const filterCloseButton = filter.querySelector(".filter-header__close");

  filterButton.addEventListener("click", () => {
    filter.classList.toggle("catalog-filter--active");
  });

  if (filterCloseButton) {
    filterCloseButton.addEventListener("click", () => {
      filter.classList.remove("catalog-filter--active");
    });
  }

  document.addEventListener("click", (event) => {
    /** @type {{target: HTMLElement}} */
    const { target } = event;

    if (!target.closest(".filter-button") && !target.closest(".catalog-filter")) {
      filter.classList.remove("catalog-filter--active");
    }
  });

  document.addEventListener("keydown", (event) => {
    const { key } = event;

    if (key === "Escape") {
      filter.classList.remove("catalog-filter--active");
    }
  });
}
