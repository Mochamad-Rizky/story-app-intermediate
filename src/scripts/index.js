import App from './app';
import ActiveLinkInitiator from './utils/activeLinkInitiator';

import '../styles/main.scss';
// components
import './components/Navbar/Navbar';

const app = new App();
const activeLinkInitiator = new ActiveLinkInitiator();

let links;
window.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();
  links = document.querySelectorAll('a.nav-link');
  activeLinkInitiator.update(links);
});
window.addEventListener('hashchange', async () => {
  await app.renderPage();
  activeLinkInitiator.update(links);
});

// TODO: shadow DOM "footer" component
// TODO: shadow DOM "navLinks" component
