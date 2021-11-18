import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantData {
  static async getAll() {
    const response = await fetch(API_ENDPOINT.restaurants);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.restaurant(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(review) {
    const options = {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(API_ENDPOINT.review, options);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantData;
