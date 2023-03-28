import { LitElement, html, css } from 'lit';

class Button extends LitElement {
  static get properties() {
    return {
      renderType: {
        type: String,
      },
      link: {
        type: String,
        reflect: true,
      },
      defaultRoute: {
        type: String,
        reflect: true,
      },
      outline: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.renderType = 'link';
  }

  static get styles() {
    return css`
      .btn,
      a {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: rgb(63, 116, 170, 1);
        color: white;
        border-radius: 0.5rem;
      }

      a {
        text-decoration: none;
        transition: all 0.3s ease-in-out;
      }

      a.active {
        background-color: rgb(63, 116, 170, 0.7);
        box-shadow: 0 6px 0 0 rgba(255, 255, 255, 0.2);
      }
    `;
  }

  render() {
    if (this.#checkRenderType()) {
      return this.#renderButton();
    }
    return this.#renderLink();
  }

  #checkRenderType() {
    return this.renderType === 'button';
  }

  #renderButton() {
    return html`
      <button class="btn">
        <slot></slot>
      </button>
    `;
  }

  #renderLink() {
    return html`
      <a href=${this.link} class="link" data-default-route=${this.defaultRoute}>
        <slot></slot>
      </a>
    `;
  }
}

customElements.define('app-button', Button);
