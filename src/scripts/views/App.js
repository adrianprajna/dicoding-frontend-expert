import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import SkipContent from '../utils/skip-content';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = page.render();
    await page.afterRender();
    SkipContent.init();
  }
}

export default App;
