import { html } from 'lit';
import LitWithoutShadowDom from '../../LitWithoutShadowDom/LitWithoutShadowDom';

class PlaceHolderStory extends LitWithoutShadowDom {
  render() {
    return html`
      <article class="p-2 my-2">
        <div class="card" aria-hidden="true">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6 bg-white"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7 bg-white"></span>
              <span class="placeholder col-4 bg-white"></span>
              <span class="placeholder col-4 bg-white"></span>
              <span class="placeholder col-6 bg-white"></span>
              <span class="placeholder col-8 bg-white"></span>
            </p>
            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('place-holder-story', PlaceHolderStory);
