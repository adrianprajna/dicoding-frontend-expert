import CONFIG from './config';

const API_ENDPOINT = {
  restaurants: `${CONFIG.BASE_URL}/list`,
  restaurantImage: `${CONFIG.BASE_URL}/images/medium`,
};

export default API_ENDPOINT;
