import { html } from 'lit';
import LitWithoutShadowDom from '../LitWithoutShadowDom/LitWithoutShadowDom';

class AppBar extends LitWithoutShadowDom {
  render() {
    return html`
      <nav class="navbar navbar-expand-lg container">
        <div class="container-fluid">
          <div class="navbar-brand d-flex align-items-center">
            <h1 class="ms-3">Story App</h1>
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
                <a class="nav-link" data-default-route="/" aria-current="page" href="/#/dashboard"
                  >Dashboard</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#/add-story">Add Story</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
