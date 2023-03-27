import pages from './routes';

class Parser {
  constructor(rootElement) {
    this._rootElement = rootElement;
  }

  getRoute() {
    return window.location.hash.slice(1) || '/';
  }

  async checkIfPageExists({ route, notFound }) {
    return pages[route] || pages[notFound];
  }

  async definePage(page) {
    const component = await page.component();
    // eslint-disable-next-line no-unused-expressions
    !customElements.get(page.is) && customElements.define(page.is, component);

    this.renderPage(page.is);
  }

  renderPage(nameOfPage) {
    this._rootElement.innerHTML = `<${nameOfPage}></${nameOfPage}>`;
  }
}

export default Parser;
