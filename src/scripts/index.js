import App from './app';
import ActiveLinkInitiator from './utils/activeLinkInitiator';
import checkLang from './utils/lang';
import getLinks from './utils/getLinks';
import { setLocaleFromUrl } from './utils/localization';

import '../styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// components
import './components/Navbar/Navbar';
import './components/Footer/Footer';
import './components/LocalePicker/LocalePicker';

const app = new App();
const activeLinkInitiator = new ActiveLinkInitiator();

window.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();

  const links = getLinks();
  activeLinkInitiator.update(links);

  setLocaleFromUrl();
});

window.addEventListener('hashchange', async () => {
  checkLang();
  document.dispatchEvent(new CustomEvent('updateNavbar'));

  await app.renderPage();

  const links = getLinks();
  activeLinkInitiator.update(links);
});
