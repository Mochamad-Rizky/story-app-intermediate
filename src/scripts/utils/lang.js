// const checkLang = () => {
//   const getLang = localStorage.getItem('lang');
//   if (getLang === null) {
//     localStorage.setItem('lang', 'id');
//   }
//
//   if (!window.location.href.includes('?lang')) {
//     const url = new URL(window.location.href);
//     window.history.pushState({}, '', `${url.hash}?lang=${getLang}`);
//   }
// };

const checkLang = (url) => {
  const urlWithHash = new URL(url);
  const urlWithoutHash = new URL(url.split('/#').join(''));
  const getLang = localStorage.getItem('lang');

  if (!getLang) {
    localStorage.setItem('lang', 'id');
  }

  if (!urlWithoutHash.searchParams.get('lang')) {
    urlWithoutHash.searchParams.set('lang', getLang);
    window.history.pushState({}, '', `${urlWithHash.hash}${urlWithoutHash.search}`);
  }
};

export default checkLang;
