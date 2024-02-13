class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <footer id="footer-comp">
            <nav class="footerRow">
              <ul>
                <li><a href="episodes.html">Alle Folgen</a></li>
                <li class="linkSeparator">|</li>
                <li><a href="about.html">Über mich</a></li>
                <li class="linkSeparator">|</li>
                <li><a href="contact.html">Kontakt</a></li>
                <li class="linkSeparator">|</li>
                <li><a href="imprint.html">Impressum</a></li>
              </ul>
            </nav>
            <p class="footerRow">&copy; 2024 four wheels. Alle Rechte vorbehalten.</P>
          </footer>
        `;
  }
}

customElements.define('footer-comp', Footer);