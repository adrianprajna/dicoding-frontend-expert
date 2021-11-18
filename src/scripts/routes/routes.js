import Home from '../views/pages/home/home';
import Detail from '../views/pages/detail/detail';
import Favorite from '../views/pages/favorite/favorite';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorites': Favorite,
};

export default routes;
