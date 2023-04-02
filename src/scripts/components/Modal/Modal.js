import { html } from 'lit';
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
    };
  }

  render() {
    return html`
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog-centered modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${this.name}</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img src=${this.image} alt=${this.name} class="img-fluid rounded mt-2" />
              <span class="text-secondary fs-6 mt-2 d-block">${convertDate(this.createdAt)}</span>
              <p class="card-text mt-2">${this.description}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-app', Modal);
