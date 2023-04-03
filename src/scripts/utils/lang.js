import Route from './route';

const checkLang = (url) => {
  const urlWithHash = Route.getRouteWithHash(window.location.href);
  const urlWithoutHash = Route.getRouteWithoutHash(window.location.href);

  let getLang = localStorage.getItem('lang');

  if (!getLang) {
    localStorage.setItem('lang', 'en');
    getLang = 'en';
  }

  if (!urlWithoutHash.searchParams.get('lang')) {
    urlWithoutHash.searchParams.set('lang', getLang);
    window.history.pushState({}, '', `${urlWithHash.hash}${urlWithoutHash.search}`);
  }
};

export default checkLang;
