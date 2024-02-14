class Section extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="socials-comp">
              
            </section>
          `;
    }
}

customElements.define('socials-comp', Section);