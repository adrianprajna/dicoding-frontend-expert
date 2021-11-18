import CONFIG from './config';

const API_ENDPOINT = {
  restaurants: `${CONFIG.BASE_URL}/list`,
  restaurantImage: `${CONFIG.BASE_URL}/images/medium`,
  restaurant: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  review: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
