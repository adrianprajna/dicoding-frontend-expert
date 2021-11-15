import 'regenerator-runtime';
import '../styles/main.scss';
import './views/components/app-bar/app-bar';
import './views/components/footer/footer';
import App from './views/App';

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
