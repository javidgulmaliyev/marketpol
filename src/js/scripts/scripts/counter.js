/** @type {NodeListOf<HTMLDivElement>} */
const counters = document.querySelectorAll("[data-counter]");

counters.forEach((counter) => {
  /** @type {HTMLInputElement} */
  const input = counter.querySelector("[data-input]");
  /** @type {HTMLButtonElement} */
  const plus = counter.querySelector("[data-plus]");
  /** @type {HTMLButtonElement} */
  const minus = counter.querySelector("[data-minus]");

  if (input && plus && minus) {
    input.addEventListener("focus", () => {
      const { value } = input;

      input.value = parseFloat(value);
      input.type = "number";
    });

    input.addEventListener("blur", () => {
      const { value, unit } = setNewValue(input);

      input.type = "text";
      input.value = unit ? `${value} ${unit}` : value;
    });

    plus.addEventListener("click", () => {
      counterAction(input, "plus");
    });

    minus.addEventListener("click", () => {
      counterAction(input, "minus");
    });
  }
});

/**
 * @param {HTMLInputElement} input
 * @param {"plus" | "minus"} action
 */
function counterAction(input, action) {
  const { value, unit } = setNewValue(input, action);

  input.value = unit ? `${value} ${unit}` : value;

  input.dispatchEvent(new Event("change", {
    bubbles: true
  }));
}

/**
 * @param {HTMLInputElement} input
 * @param {"plus" | "minus"} [action]
 * @return {{ value: number, unit: string }}
 */
function setNewValue(input, action) {
  const { dataset } = input;
  const { unit } = dataset;

  /** @type {{ value: number, min: number, max: number, step: number }} */
  let { value, min, max, step } = input;

  value = parseFloat(value);
  min = +min;
  max = +max;
  step = +step;

  const decimal = !Number.isInteger(step);

  if (decimal) {
    step *= 10;
    value *= 10;
  }

  if (action) {
    if (action === "plus") value += step;
    if (action === "minus") value -= step;
  }

  if (decimal) value /= 10;
  if (!Number.isInteger(value)) value = parseFloat(value.toFixed(1));
  if (value > max) value = max;
  if (value < min) value = min;

  return { value, unit };
}
