import html from './app-bar.html';
import scss from './app-bar.scss';
import componentTemplateFactory from '../../../utils/componentTemplateFactory';
import DrawerInitiator from '../../../utils/drawer-initiator';

const template = componentTemplateFactory(html, scss);

class AppBar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._init();
  }

  _init() {
    const navDrawer = this.shadowRoot.querySelector('.drawer');
    const openDrawerButton = this.shadowRoot.querySelector('.hamburger__button');
    const closeDrawerButton = this.shadowRoot.querySelector('.close__button');
    const navLinks = this.shadowRoot.querySelectorAll('.nav-link');

    DrawerInitiator.init({
      drawer: navDrawer, openDrawerButton, closeDrawerButton, navLinks,
    });
  }
}

customElements.define('app-bar', AppBar);
