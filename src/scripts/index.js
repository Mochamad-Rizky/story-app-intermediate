import App from './app';
import ActiveLinkInitiator from './utils/activeLinkInitiator';

import '../styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// components
import './components/Navbar/Navbar';

const app = new App();
const activeLinkInitiator = new ActiveLinkInitiator();

let links;
window.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();
  links = document.querySelectorAll('app-button[renderType="link"][class="nav-link"]');
  links = Array.from(links).map((link) => link.shadowRoot.querySelector('a'));
  activeLinkInitiator.update(links);
});
window.addEventListener('hashchange', async () => {
  await app.renderPage();
  activeLinkInitiator.update(links);
});
