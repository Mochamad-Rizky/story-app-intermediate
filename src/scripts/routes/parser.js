import pages from './routes';
import Route from '../utils/route';

class Parser {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.route = Route.getRouteWithoutHash(window.location.href).pathname;
  }

  async checkIfPageExists({ notFound }) {
    return pages[this.route] || pages[notFound];
  }

  async definePage(page) {
    const component = await page.component();
    // eslint-disable-next-line no-unused-expressions
    !customElements.get(page.is) && customElements.define(page.is, component);

    this.renderPage(page.is);
  }

  renderPage(nameOfPage) {
    this.rootElement.innerHTML = `<${nameOfPage} class="d-block"></${nameOfPage}>`;
  }
}

export default Parser;
