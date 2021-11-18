import html from './review.html';
import scss from './review.scss';
import componentTemplateFactory from '../../../utils/componentTemplateFactory';

const template = componentTemplateFactory(html, scss);

class ReviewCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    const reviewName = this.shadowRoot.querySelector('.review-content__name');
    const reviewDescription = this.shadowRoot.querySelector('.review-content__description');
    const reviewDate = this.shadowRoot.querySelector('.review-content__date');

    reviewName.innerHTML = this._review.name;
    reviewDescription.innerHTML = this._review.review;
    reviewDate.innerHTML = this._review.date;
  }
}

customElements.define('review-card', ReviewCard);
