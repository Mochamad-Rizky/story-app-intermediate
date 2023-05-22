import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../LitWithoutShadowDom/LitWithoutShadowDom';
import convertDate from '../../utils/convertDate';

import '../Modal/Modal';
import api from '../../utils/api';

class StoryCardItem extends LitWithoutShadowDom {
  static get properties() {
    return {
      id: {
        type: String,
        reflect: true,
      },
      name: {
        type: String,
        reflect: true,
      },
      description: {
        type: String,
        reflect: true,
      },
      image: {
        type: String,
        reflect: true,
      },
      createdAt: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <article class="p-2 my-2 card__container">
        <div class="card">
          <img
            src=${this.image}
            class="card-img-top pe-none"
            alt="${this.name} story"
            width="200px"
            height="200px"
          />
          <div class="card-body">
            <span class="text-secondary fs-6">${convertDate(this.createdAt)}</span>
            <h5 class="card-title text-white fw-bold">${this.name}</h5>
            <p class="card-text text-white">${this.description}</p>
            <button
              class="btn btn-primary"
              @click=${this.#setShowModal}
              data-bs-toggle="modal"
              data-bs-target="#storyCardModal"
            >
              ${msg('Detail')}
            </button>
          </div>
        </div>
      </article>
    `;
  }

  async #setShowModal() {
    const modalElement = document.querySelector('modal-app');

    try {
      modalElement.setAttribute('isLoading', 'true');
      const response = await api.getDetailStory(this.id);
      const { id, name, description, photoUrl, createdAt } = response.story;

      modalElement.setAttribute('id', id);
      modalElement.setAttribute('name', name);
      modalElement.setAttribute('description', description);
      modalElement.setAttribute('image', photoUrl);
      modalElement.setAttribute('createdAt', createdAt);
    } catch (error) {
      const {
        data: { message },
      } = JSON.parse(error.message);

      modalElement.setAttribute('isError', message);
    } finally {
      modalElement.setAttribute('isLoading', '');
    }
  }
}

customElements.define('story-card-item', StoryCardItem);
