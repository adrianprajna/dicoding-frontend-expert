const assert = require('assert');
const { getFirstRestaurant } = require('./helpers/getFirstRestaurant');

const home = '/';
const urlFavorite = '/#/favorites';

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage(urlFavorite);
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('.favorite-restaurants');
  I.see('There are no favorite restaurant!', '.favorite-restaurant__not__found');
});

Scenario('like and dislike one restaurant', async ({ I }) => {
  I.see('There are no favorite restaurant!', '.favorite-restaurant__not__found');
  I.amOnPage(home);

  // dikarenakan saya tidak bisa memakai function locate seperti biasanya karena menggunakan shadow dom
  // maka saya menggunakan cara lain
  I.seeElement('article-list');
  const restaurant = await getFirstRestaurant(I);
  I.amOnPage(restaurant.url);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage(urlFavorite);
  I.seeElement('article-list');

  const favoriteRestaurant = await getFirstRestaurant(I);
  assert.strictEqual(restaurant.name, favoriteRestaurant.name);

  // proses batal menyukai restorant
  I.amOnPage(favoriteRestaurant.url);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage(urlFavorite);
  I.dontSeeElement('article-list');
  I.see('There are no favorite restaurant!', '.favorite-restaurant__not__found');
});
