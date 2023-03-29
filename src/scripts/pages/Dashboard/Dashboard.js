import { html } from 'lit';
import api from '../../utils/api';
import LitWithoutShadowDom from '../../components/LitWithoutShadowDom/LitWithoutShadowDom';
import renderSkeletonUICard from '../../utils/renderSkeletonUICard';

import '../../components/StoryCardItem/StoryCardItem';

class Dashboard extends LitWithoutShadowDom {
  static get properties() {
    return {
      data: {
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
      const { listStory } = await api.getStories();
      this.data = listStory;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let storiesDataElement;
    if (this.data) {
      storiesDataElement = html`
        ${this.data.map(
          ({ id, name, description, photoUrl, createdAt }) =>
            html` <story-card-item
              class="col-lg-4 col-md-6"
              id=${id}
              name=${name}
              description=${description}
              image=${photoUrl}
              createdAt=${createdAt}
            />`,
        )}
      `;
    } else {
      storiesDataElement = html` ${renderSkeletonUICard(6)} `;
    }

    return html`
      <div class="p-3">
        <div class="p-1">
          <h2 class="text-white">List Story</h2>
          <div class="row position-relative">${storiesDataElement}</div>
        </div>
      </div>
    `;
  }
}

export default Dashboard;
