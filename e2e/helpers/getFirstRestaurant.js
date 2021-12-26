const getFirstRestaurant = async (I) => {
  const restaurant = await I.executeScript(() => {
    const restaurantList = document.querySelector('article-list');
    const firstRestaurantCard = restaurantList.shadowRoot.querySelector('article-card');
    const restaurantAnchorTag = firstRestaurantCard.shadowRoot.querySelector('.article-item__name');
    const url = restaurantAnchorTag.getAttribute('href');
    const name = restaurantAnchorTag.innerHTML;
    return {
      name,
      url,
    };
  });
  return restaurant;
};

module.exports = { getFirstRestaurant };
