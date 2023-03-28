import { html } from 'lit';
import LitWithoutShadowDom from '../LitWithoutShadowDom/LitWithoutShadowDom';
import '../UI/Button/Button';

class AppBar extends LitWithoutShadowDom {
  render() {
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
              <li class="nav-item">
                <app-button class="nav-link" renderType="link" link="/#/dashboard" defaultRoute="/">
                  Dashboard
                </app-button>
              </li>
              <li class="nav-item">
                <app-button class="nav-link" renderType="link" link="/#/add-story">
                  Add Story
                </app-button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
