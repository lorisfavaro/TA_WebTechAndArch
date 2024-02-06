class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <link rel="stylesheet" href="../css/styles.css">
          <header id="header-comp">
            <nav>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </header>
        `;
  }
}

customElements.define('header-comp', Header);