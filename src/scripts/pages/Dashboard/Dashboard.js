import { html } from 'lit';
import api from '../../utils/api';
import LitWithoutShadowDom from '../../components/LitWithoutShadowDom/LitWithoutShadowDom';
import renderSkeletonUICard from '../../utils/renderSkeletonUICard';

import '../../components/StoryCardItem/StoryCardItem';
import '../../components/Error/Error';

class Dashboard extends LitWithoutShadowDom {
  static get properties() {
    return {
      data: {
        type: Object,
      },
      isLoading: {
        type: Boolean,
      },
      isError: {
        type: Object,
      },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.#fetchData();
  }

  async #fetchData() {
    try {
      this.isLoading = true;
      const { listStory } = await api.getStories();
      this.data = listStory;
    } catch (error) {
      this.isError = {
        status: true,
        message: error.message,
      };
    } finally {
      this.isLoading = null;
    }
  }

  render() {
    return html`
      <div class="p-4 h-auto">
        <h2 class="text-white">List Story</h2>
        <div class="row position-relative d-flex align-items-center justify-content-center">
          ${this.data &&
          !this.isLoading &&
          this.data?.map(
            ({ id, name, description, photoUrl, createdAt }) => html`
              <story-card-item
                class="col-lg-4 col-md-6"
                id=${id}
                name=${name}
                description=${description}
                image=${photoUrl}
                createdAt=${createdAt}
              />
            `,
          )}
          ${this.isLoading && renderSkeletonUICard(6)}
          ${this.isError?.status &&
          html`<error-app class="mt-5" message=${this.isError.message}></error-app>`}
        </div>
      </div>
    `;
  }
}

export default Dashboard;
