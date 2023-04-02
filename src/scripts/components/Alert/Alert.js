import { html } from 'lit';
import LitWithoutShadowDom from '../LitWithoutShadowDom/LitWithoutShadowDom';

class Alert extends LitWithoutShadowDom {
  static get properties() {
    return {
      message: {
        type: String,
      },
      classes: {
        type: String,
      },
    };
  }

  render() {
    return html`
      <div class="px-0 alert position-relative ${this.classes} mt-3" role="alert">
        <span class="position-absolute rounded-3 top-0"></span>
        <div class="px-2 d-flex justify-content-between align-items-center">
          <p class="mb-0">${this.message}</p>
          <button
            type="button"
            class="btn-close ml-auto"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    `;
  }
}

customElements.define('app-alert', Alert);
