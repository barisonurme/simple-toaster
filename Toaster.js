export default class Toast {
  #toastElem;

  constructor(options) {
    this.#toastElem = document.createElement("div");
    this.#toastElem.classList.add("toaster");
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  set text(value) {
    setTimeout(() => {
      this.remove();
    }, 3000);
    setTimeout(() => {
      this.#toastElem.classList.add("entered");
    }, 50);

    // Create Toaster Container if not exists
    const container =
      document.querySelector(".toaster-container") || createContainer();
    this.#toastElem.textContent = value;
    container.append(this.#toastElem);
  }

  remove() {
    const container = this.#toastElem.parentElement;
    this.#toastElem.classList.remove("entered");

    this.#toastElem.classList.add("exited");
    setTimeout(() => {
      this.#toastElem.remove();
      if (container.hasChildNodes()) return;
      container.remove();
    }, 1500);
  }
}

function createContainer() {
  const container = document.createElement("div");
  container.classList.add("toaster-container");
  container.setAttribute("id", "toasterContainer");
  document.body.append(container);
  return container;
}
