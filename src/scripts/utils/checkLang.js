const checkLang = () => {
  const getLang = localStorage.getItem('lang');
  if (getLang === null) {
    localStorage.setItem('lang', 'id');
  }

  if (!window.location.href.includes('?lang')) {
    const url = new URL(window.location.href);
    window.history.pushState({}, '', `${url.hash}?lang=${getLang}`);
  }
};

export default checkLang;
