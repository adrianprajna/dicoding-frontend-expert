import html from './menu.html';
import scss from './menu.scss';
import componentTemplateFactory from '../../../utils/componentTemplateFactory';

const template = componentTemplateFactory(html, scss);

class Menu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    const menuName = this.shadowRoot.querySelector('.menu__name');
    menuName.innerHTML = this._menu.name;
  }
}

customElements.define('restaurant-menu', Menu);
