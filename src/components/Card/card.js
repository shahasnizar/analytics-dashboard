class MyCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .card { padding: 1rem; border: 1px solid #ccc; border-radius: 8px; }
        @media(min-width:1024px) {
        .card { padding: 1.35rem 1.5rem; }
        }
      </style>
      <div class="card">
        <slot name="title"></slot>
        <slot name="content"></slot>
        <slot name="difference"></slot>
      </div>
    `;
  }
}

customElements.define("my-card", MyCard);
