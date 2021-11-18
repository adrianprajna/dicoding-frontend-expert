import RestaurantData from '../data/restaurant-data';

const ReviewButtonInitiator = {
  async _addReview(review) {
    const response = await RestaurantData.addReview(review);
    return response;
  },
};

export default ReviewButtonInitiator;
