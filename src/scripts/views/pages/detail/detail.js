import '../../components/hero/hero';
import detailHtml from './detail.html';
import '../../../../styles/detail/detail.scss';
import { createMenusTemplate, createReviewsTemplate } from '../../templates/template-creator';
import UrlParser from '../../../routes/url-parser';
import RestaurantData from '../../../data/restaurant-data';
import API_ENDPOINT from '../../../globals/api-endpoint';
import ReviewButtonInitiator from '../../../utils/review-button-initiator';
import LikeButtonPresenter from '../../../utils/like-button-presenter';
import '../../components/error/error';
import FavoriteRestaurantIdb from '../../../data/favoriterestaurant-idb';

const Detail = {
  render() {
    return detailHtml;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.getDetail(url.id);
    if (!restaurant || restaurant === undefined) {
      this._renderNoData();
      return;
    }
    this._setRestaurantData(restaurant);
    this._setRestaurantCategory(restaurant);
    this._renderFoods(restaurant);
    this._renderDrinks(restaurant);
    this._renderCustomerReviews(restaurant);
    this._initReviewButton(restaurant);
    this._initLikeButton(restaurant);
  },

  _renderFoods({ menus }) {
    const foodContent = document.querySelector('#food-menu');
    const foodList = createMenusTemplate(menus.foods);
    foodContent.appendChild(foodList);
  },

  _renderDrinks({ menus }) {
    const drinkContent = document.querySelector('#drink-menu');
    const drinkList = createMenusTemplate(menus.drinks);
    drinkContent.appendChild(drinkList);
  },

  _setRestaurantData(restaurant) {
    const restaurantImage = document.querySelector('.restaurant-detail__image');
    const restaurantName = document.querySelector('.restaurant-detail__name');
    const restaurantAddress = document.querySelector('.restaurant-detail__address');
    const restaurantCity = document.querySelector('.restaurant-detail__city');
    const restaurantDescription = document.querySelector('.restaurant-detail__description');

    restaurantImage.src = `${API_ENDPOINT.restaurantImage('large')}/${restaurant.pictureId}`;
    restaurantName.innerHTML = restaurant.name;
    restaurantAddress.innerHTML = `${restaurant.address},`;
    restaurantCity.innerHTML = restaurant.city;
    restaurantDescription.innerHTML = restaurant.description;
  },

  _setRestaurantCategory({ categories }) {
    const categoryContainer = document.querySelector('.restaurant-detail__categories');
    categories.forEach((category) => {
      const categoryElement = document.createElement('span');
      categoryElement.innerHTML = category.name;
      categoryContainer.appendChild(categoryElement);
    });
  },

  _renderCustomerReviews({ customerReviews }) {
    const reviewContent = document.querySelector('.customer-reviews');
    reviewContent.innerHTML = '';
    const reviewList = createReviewsTemplate(customerReviews);
    reviewContent.appendChild(reviewList);
  },

  _initReviewButton(restaurant) {
    const reviewButton = document.querySelector('.btn__submit');
    reviewButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const review = {
        id: restaurant.id,
        name: document.querySelector('#name').value,
        review: document.querySelector('#review').value,
      };
      const response = await ReviewButtonInitiator._addReview(review);
      this._renderCustomerReviews(response);
      this._clearValue();
    });
  },

  _clearValue() {
    document.querySelector('#name').value = '';
    document.querySelector('#review').value = '';
  },

  _initLikeButton(restaurant) {
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  },

  _renderNoData() {
    const container = document.querySelector('.container');
    container.innerHTML = '<error-page><error-page>';
  },
};

export default Detail;
