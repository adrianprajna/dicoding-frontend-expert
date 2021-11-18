import html from './article-list.html';
import scss from './article-list.scss';
import '../../skeleton/skeleton';
import componentTemplateFactory from '../../../../utils/componentTemplateFactory';

const template = componentTemplateFactory(html, scss);

class ArticleList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._articleContainer = this.shadowRoot.querySelector('.articles');
    this._renderLoading();
  }

  set articles(articles) {
    this._articles = articles;
    this.render();
  }

  set title(title) {
    this._title = title;
  }

  render() {
    const articleTitle = this.shadowRoot.querySelector('.article__section__title');
    this._articleContainer.innerHTML = '';
    this._articles.forEach((article) => {
      const articleItem = document.createElement('article-card');
      articleItem.article = article;
      this._articleContainer.appendChild(articleItem);
    });
    articleTitle.innerHTML = this._title;
  }

  _renderLoading() {
    let skeletons = '';
    for (let i = 0; i < 9; i += 1) {
      skeletons += '<skeleton-card></skeleton-card>';
    }

    this._articleContainer.innerHTML = skeletons;
  }
}

customElements.define('article-list', ArticleList);
