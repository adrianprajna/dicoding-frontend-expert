import html from './article-other.html';
import scss from '../article/article-card/article-card.scss';
import componentTemplateFactory from '../../../utils/componentTemplateFactory';
import truncate from '../../../utils/string-truncate';

const template = componentTemplateFactory(html, scss);

class ArticleOther extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  set article(article) {
    this._article = article;
    this.render();
  }

  render() {
    const articleImage = this.shadowRoot.querySelector('.article-item__thumbnail');
    const articleName = this.shadowRoot.querySelector('.article-item__title');
    const articleDescription = this.shadowRoot.querySelector('.article-item__description');

    articleImage.src = this._article.pictureId;
    articleName.innerHTML = `<a href="#">${this._article.name}</a>`;
    articleDescription.innerHTML = truncate(this._article.description);
  }
}

customElements.define('article-other', ArticleOther);
