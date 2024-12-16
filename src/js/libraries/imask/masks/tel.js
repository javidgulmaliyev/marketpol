import IMask from "imask";

/** @type {NodeListOf<HTMLInputElement>} */
const telInputs = document.querySelectorAll("[data-tel]");

if (telInputs.length) {
  telInputs.forEach((telInput) => {
    const mask = IMask(telInput, {
      mask: '+{7} (000) 000-00-00',
    });

    telInput.addEventListener("focus", (event) => {
      const { unmaskedValue } = mask;

      if (!unmaskedValue) {
        mask.value = "+7 (___) ___-__-__";
      }
    });

    telInput.addEventListener("blur", (event) => {
      const { unmaskedValue } = mask;

      if (unmaskedValue === "7") {
        mask.value = "";
      }
    });
  });
}
