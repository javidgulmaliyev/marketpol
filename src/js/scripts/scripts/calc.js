/** @type {NodeListOf<HTMLDivElement>} */
const calcBlocks = document.querySelectorAll("[data-calc]");

calcBlocks.forEach((calcBlock) => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const inputs = calcBlock.querySelectorAll("[data-input]");
  /** @type {HTMLDivElement} */
  const output = calcBlock.querySelector("[data-output]");

  if (inputs.length && output) {
    const { dataset: outputDataset } = output;
    const { unit: outputUnit } = outputDataset;

    calc();
    calcBlock.addEventListener("calc", calc);

    function calc() {
      /** @type {number} */
      const result = [...inputs].reduce(
        /**
         * @param {number} accumulator
         * @param {HTMLInputElement} input
         * @return {number}
         */
        (accumulator, input) => {
          let { value } = input;

          value = parseFloat(value);

          return accumulator * value;
        }, 1
      );

      const text = outputUnit ? `${result} ${outputUnit.trim()}` : result;

      output.textContent = text;
    }
  }
});
