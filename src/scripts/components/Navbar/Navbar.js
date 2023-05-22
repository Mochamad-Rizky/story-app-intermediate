import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../LitWithoutShadowDom/LitWithoutShadowDom';
import '../UI/Button/Button';
import checkAuthUser from '../../utils/checkAuthUser';
import Token from '../../utils/token';

class AppBar extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    const lang = localStorage.getItem('lang');

    return html`
      <nav class="navbar bg-nikel py-3 shadow rounded-bottom navbar-expand-lg">
        <div class="container-fluid container">
          <div class="navbar-brand d-flex align-items-center">
            <span class="ms-3 text-white">Story App</span>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item d-flex align-items-center">
                <locale-picker class="d-block m-0"></locale-picker>
              </li>
              ${checkAuthUser() &&
              html`
                <li class="nav-item">
                  <app-button
                    class="nav-link"
                    renderType="link"
                    link="/#/dashboard?lang=${lang}"
                    defaultRoute="/"
                  >
                    ${msg('Dashboard')}
                  </app-button>
                </li>
                <li class="nav-item">
                  <app-button class="nav-link" renderType="link" link="/#/add-story?lang=${lang}">
                    ${msg('Add Story')}
                  </app-button>
                </li>
                <li class="nav-item">
                  <app-button renderType="button" event="click" @clickButton=${this.#onLogout}>
                    ${msg('Logout')}
                  </app-button>
                </li>
              `}
              ${!checkAuthUser() &&
              html` <li class="nav-item">
                <app-button class="nav-link" renderType="link" link="/#/login?lang=${lang}">
                  ${msg('Login')}
                </app-button>
              </li>`}
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    document.addEventListener('updateNavbar', () => {
      this.requestUpdate();
    });
  }

  #onLogout() {
    Token.delete();
    this.#redirectToRoot();
  }

  #redirectToRoot() {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('hashchange'));
  }
}

customElements.define('app-bar', AppBar);
