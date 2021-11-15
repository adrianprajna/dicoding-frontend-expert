// import TheMovieDbSource from '../../data/themoviedb-source';
import '../components/hero/hero';
import foodData from '../../data/food-data';
import drinkData from '../../data/drink-data';
import RestaurantData from '../../data/restaurant-data';
import createListTemplate from '../../utils/list-template-creator';

const Home = {
  render() {
    return `
        <app-hero></app-hero>
            
        <section class="content" id="restaurant-content">
            
        </section>

        <section class="content" id="food-content">

        </section>

        <section class="content" id="drink-content">

        </section> 
    `;
  },

  async afterRender() {
    await this._renderRestaurant();
    // this._renderFoods();
    // this._renderDrinks();
  },

  async _renderRestaurant() {
    const restaurants = await RestaurantData.getAll();
    const restaurantContent = document.querySelector('#restaurant-content');
    const restaurantList = createListTemplate({ data: restaurants, title: 'Explore Restaurant', card: 'article-card' });
    restaurantContent.appendChild(restaurantList);
  },

  _renderFoods() {
    const foodContent = document.querySelector('#food-content');
    const foodList = createListTemplate({ data: foodData, title: 'Discover Trending Foods', card: 'article-other' });
    foodContent.appendChild(foodList);
  },

  _renderDrinks() {
    const drinkContent = document.querySelector('#drink-content');
    const drinkList = createListTemplate({ data: drinkData, title: 'Discover Trending Drinks', card: 'article-other' });
    drinkContent.appendChild(drinkList);
  },
};

export default Home;
