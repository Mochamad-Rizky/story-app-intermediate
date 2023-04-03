import Parser from './routes/parser';

class App {
  constructor() {
    this.renderPage();
  }

  async renderPage() {
    const rootElement = document.querySelector('main');
    const parser = new Parser(rootElement);

    const page = await parser.checkIfPageExists({
      notFound: '/not-found',
    });

    await parser.definePage(page);
  }
}

export default App;
