class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <link rel="stylesheet" href="../css/styles.css">
          <footer id="footer-comp">
            <nav>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="work.html">Work</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </footer>
        `;
  }
}

customElements.define('footer-comp', Footer);