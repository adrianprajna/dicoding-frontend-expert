const assert = require('assert');
const { getFirstRestaurant } = require('./helpers/getFirstRestaurant');
const { getLastReview } = require('./helpers/getLastReview');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('should perform correctly when giving a review', async ({ I }) => {
  I.seeElement('article-list');
  const restaurant = await getFirstRestaurant(I);
  I.amOnPage(restaurant.url);

  I.seeElement('#name');
  I.seeElement('#review');
  I.seeElement('.btn__submit');

  I.fillField('#name', 'Adrian');
  I.fillField('#review', 'Restaurantnya bagus sekali!');
  I.click('.btn__submit');

  const reviewerName = await getLastReview(I);
  console.log(reviewerName);
  assert.strictEqual(reviewerName, 'Adrian');
});
