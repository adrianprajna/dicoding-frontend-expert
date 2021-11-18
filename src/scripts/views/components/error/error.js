import html from './error.html';
import scss from './error.scss';
import componentTemplateFactory from '../../../utils/componentTemplateFactory';

const template = componentTemplateFactory(html, scss);

class Error extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('error-page', Error);
