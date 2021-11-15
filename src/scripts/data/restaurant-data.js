import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantData {
  static async getAll() {
    const response = await fetch(API_ENDPOINT.restaurants);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantData;
