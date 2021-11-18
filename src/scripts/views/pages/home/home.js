import '../../components/hero/hero';
import homeHtml from './home.html';
import RestaurantData from '../../../data/restaurant-data';
import { createListTemplate } from '../../templates/template-creator';

const Home = {
  render() {
    return homeHtml;
  },

  async afterRender() {
    await this._renderRestaurant();
  },

  async _renderRestaurant() {
    const restaurants = await RestaurantData.getAll();
    console.log(restaurants);
    const restaurantContent = document.querySelector('#restaurant-content');
    const restaurantList = createListTemplate({ data: restaurants, title: 'Explore Restaurant' });
    restaurantContent.appendChild(restaurantList);
  },
};

export default Home;
