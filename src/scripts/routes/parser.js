import pages from './routes';
import Route from '../utils/route';
import checkAuthUser from '../utils/checkAuthUser';
import checkLang from '../utils/lang';

class Parser {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.route = Route.getRouteWithoutHash(window.location.href).pathname;
  }

  async checkIfPageExists({
    notFound,
    excludePagesWhenAuthenticated,
    redirectPageWhenNotAuthenticated,
  }) {
    const authUserStatus = checkAuthUser();

    if (authUserStatus && excludePagesWhenAuthenticated.includes(this.route)) {
      return pages[notFound];
    }

    if (!authUserStatus && !excludePagesWhenAuthenticated.includes(this.route)) {
      window.history.pushState({}, {}, `/#${redirectPageWhenNotAuthenticated}`);
      checkLang();
      return pages[redirectPageWhenNotAuthenticated];
    }

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
