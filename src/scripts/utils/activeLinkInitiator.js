import Route from './route';

class ActiveLinkInitiator {
  update(links) {
    const route = Route.getRouteWithoutHash(window.location.href).pathname;
    this.#performAction(links, route);
  }

  #performAction(links, route) {
    links.forEach((link) => {
      const linkRoute = link.getAttribute('href').slice(2).split('?')[0];
      const { defaultRoute } = link.dataset;

      this.#addActiveClass({
        link,
        linkRoute,
        route,
        defaultRoute,
      });
    });
  }

  #addActiveClass({ link, linkRoute, route, defaultRoute }) {
    if (this.#shouldUpdateActiveLink({ linkRoute, route, defaultRoute })) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }

  #shouldUpdateActiveLink({ linkRoute, route, defaultRoute }) {
    return linkRoute === route || defaultRoute === route;
  }
}

export default ActiveLinkInitiator;
