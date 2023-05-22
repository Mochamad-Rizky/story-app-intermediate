import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../LitWithoutShadowDom/LitWithoutShadowDom';
import convertDate from '../../utils/convertDate';

class Modal extends LitWithoutShadowDom {
  static get properties() {
    return {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      image: {
        type: String,
      },
      createdAt: {
        type: String,
      },
      isError: {
        type: String,
      },
      isLoading: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    this.isLoading = !this.isLoading ? null : this.isLoading;

    console.log(this.isLoading);
    return html`
      <div
        class="modal fade"
        id="storyCardModal"
        tabindex="-1"
        aria-labelledby="storyCardModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog-centered modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="storyCardModalLabel">
                ${this.isLoading ? 'Loading...' : this.name}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              ${this.isError &&
              html`<div class="alert alert-danger text-center">${this.isError}</div>`}
              ${this.isLoading && html`<h2 class="text-center">Loading...</h2>`}
              ${!this.isLoading
                ? html` <img
                      src=${this.image}
                      alt=${this.name}
                      class="img-fluid mx-auto d-block rounded mt-2"
                    />
                    <span class="text-secondary fs-6 mt-2 d-block"
                      >${convertDate(this.createdAt)}</span
                    >
                    <p class="card-text mt-2">${this.description}</p>`
                : null}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                ${msg('Close')}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-app', Modal);
