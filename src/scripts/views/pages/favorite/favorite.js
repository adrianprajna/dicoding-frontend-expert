import '../../components/hero/hero';
import favoriteHtml from './favorite.html';
import '../../../../styles/favorite/favorite.scss';
import FavoriteMovieIdb from '../../../data/favoriterestaurant-idb';
import { createListTemplate } from '../../templates/template-creator';
import Image from '../../../../public/images/placeholders/placeholder-favorite.jpg';

const Detail = {
  render() {
    return favoriteHtml;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const restaurants = await FavoriteMovieIdb.getAllRestaurants();
    if (!restaurants || restaurants === undefined || restaurants.length === 0) {
      this._renderNoData();
      return;
    }
    const restaurantContent = document.querySelector('.favorite-restaurants');
    const restaurantList = createListTemplate({ data: restaurants, title: 'Your Favorite Restaurants' });
    restaurantContent.appendChild(restaurantList);
  },

  _renderNoData() {
    const restaurantContent = document.querySelector('.favorite-restaurants');
    restaurantContent.innerHTML = `
      <section class="no-favorite-restaurant">
        <img src=${Image} alt="placeholder favorite">
        <h2 class="favorite-restaurant__not__found">There are no favorite restaurant!</h2>
      </section>
    `;
  },
};

export default Detail;
