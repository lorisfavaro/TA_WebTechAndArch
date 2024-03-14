class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <header id="header-comp">
            <div class="wrapper">
              <a id="headerLogo" href="./"><img src="../images/logo.webp" alt="four wheels Logo"></img></a>
              <nav>
                <ul class="nav-menu">
                  <li class="nav-item"><a id="headerAllEpisodes" href="episodes.html">Alle Folgen</a></li>
                  <li class="linkSeparator">|</li>
                  <li class="nav-item"><a id="headerAboutMe" href="about.html">Über mich</a></li>
                  <li class="linkSeparator">|</li>
                  <li class="nav-item"><a id="headerContact" href="contact.html">Kontakt</a></li>
                </ul>
                <button class="hamburger">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </button>
              </nav>
            </div>
          </header>
        `;
  }
}

customElements.define('header-comp', Header);