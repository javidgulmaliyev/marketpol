/** @type {NodeListOf<HTMLDivElement>} */
const tabs = document.querySelectorAll("[data-tabs]");

tabs.forEach((tabsBlock) => {
  /** @type {NodeListOf<HTMLButtonElement>} */
  const tabButtons = tabsBlock.querySelectorAll("[data-tab]");
  /** @type {NodeListOf<HTMLDivElement>} */
  const tabPanels = tabsBlock.querySelectorAll("[data-panel]");

  if (tabButtons.length === tabPanels.length) {
    tabButtons.forEach((tabButton) => {
      const { dataset } = tabButton;
      const { tab } = dataset;

      tabButton.addEventListener("click", () => {
        tabButtons.forEach((tabButton) => {
          tabButton.classList.toggle("active", tabButton.dataset.tab === tab);
        });
        tabPanels.forEach((tabPanel) => {
          tabPanel.toggleAttribute("hidden", tabPanel.dataset.panel !== tab);
        });
      });
    });
  }
});
