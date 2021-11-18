import '../components/article/article-list/article-list';
import '../components/article/article-card/article-card';
import '../components/menu/menu';
import '../components/review/review';

const createListTemplate = ({ data, title }) => {
  const articleList = document.createElement('article-list');
  articleList.title = title;
  articleList.articles = data;
  return articleList;
};

const createMenusTemplate = (menus) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('menu-list');
  wrapper.innerHTML = '';
  menus.forEach((menu) => {
    const menuElement = document.createElement('restaurant-menu');
    menuElement.menu = menu;
    wrapper.appendChild(menuElement);
  });
  return wrapper;
};

const createReviewsTemplate = (reviews) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('review-list');
  wrapper.innerHTML = '';
  reviews.forEach((review) => {
    const reviewElement = document.createElement('review-card');
    reviewElement.review = review;
    wrapper.appendChild(reviewElement);
  });
  return wrapper;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createListTemplate, createMenusTemplate, createReviewsTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};
