import Parser from './routes/parser';
import checkLang from './utils/lang';

class App {
  constructor() {
    this.#initialization();
    this.renderPage();
  }

  #initialization() {
    checkLang();
  }

  async renderPage() {
    const rootElement = document.querySelector('main');
    const parser = new Parser(rootElement);

    const page = await parser.checkIfPageExists({
      notFound: '/not-found',
      excludePagesWhenAuthenticated: ['/login', '/register', '/add-story/guest'],
      redirectPageWhenNotAuthenticated: '/login',
    });

    await parser.definePage(page);
  }
}

export default App;
