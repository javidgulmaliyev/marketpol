const filterButton = document.querySelector(".filter-button");

if (filterButton) {
  const filter = document.querySelector(".catalog-filter");

  filterButton.addEventListener("click", () => {
    filter.classList.toggle("catalog-filter--active");
  });

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
