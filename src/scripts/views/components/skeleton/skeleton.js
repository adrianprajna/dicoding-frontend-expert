import html from './skeleton.html';
import scss from '../article/article-card/article-card.scss';
import componentTemplateFactory from '../../../utils/componentTemplateFactory';

const template = componentTemplateFactory(html, scss);

class SkeletonCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('skeleton-card', SkeletonCard);
