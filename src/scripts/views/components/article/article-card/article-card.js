import html from './article-card.html';
import scss from './article-card.scss';
import componentTemplateFactory from '../../../../utils/componentTemplateFactory';
import API_ENDPOINT from '../../../../globals/api-endpoint';
import truncate from '../../../../utils/string-truncate';

const template = componentTemplateFactory(html, scss);

class ArticleCard extends HTMLElement {
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
    this._removeLoading();
    const articleImage = this.shadowRoot.querySelector('.article-item__thumbnail');
    const articleName = this.shadowRoot.querySelector('.article-item__title');
    const articleCity = this.shadowRoot.querySelector('.article-item__city');
    const articleDescription = this.shadowRoot.querySelector('.article-item__description');
    const articleRating = this.shadowRoot.querySelector('.article-item__value');

    articleImage.src = `${API_ENDPOINT.restaurantImage}/${this._article.pictureId}`;
    articleName.innerHTML = `<a href="#">${this._article.name}</a>`;
    articleDescription.innerHTML = truncate(this._article.description);
    articleCity.innerHTML = this._article.city;
    articleRating.innerHTML = this._article.rating;
  }

  _removeLoading() {
    this.shadowRoot.querySelector('.article-item').classList.remove('skeleton');
  }
}

customElements.define('article-card', ArticleCard);