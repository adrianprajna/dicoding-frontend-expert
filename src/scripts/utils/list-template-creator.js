import '../views/components/article/article-list/article-list';
import '../views/components/article/article-card/article-card';
import '../views/components/article-other/article-other';

const createListTemplate = ({ data, title, card }) => {
  const articleList = document.createElement('article-list');
  articleList.title = title;
  articleList.card = card;
  articleList.articles = data;
  return articleList;
};

export default createListTemplate;
