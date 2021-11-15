import html from './footer.html';
import scss from './footer.scss';
import componentTemplateFactory from '../../../utils/componentTemplateFactory';

const template = componentTemplateFactory(html, scss);

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-footer', AppFooter);
