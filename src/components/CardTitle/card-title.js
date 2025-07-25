class MyCardTitle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <div class="card-title">
        <slot name="card-title"></slot>
      </div>
    `;
  }
}

customElements.define("card-title", MyCardTitle);
