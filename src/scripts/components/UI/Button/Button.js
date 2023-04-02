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
      event: {
        type: String,
      },
      disabled: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.renderType = 'link';
    this.type = 'submit';
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

      :host([renderType='button']) button {
        margin-top: 0.5rem;
        cursor: pointer;
        font-family: inherit;
        font-size: 1.2rem;
        border: none;
      }

      .btn:disabled {
        background-color: rgb(63, 116, 170, 0.5);
        cursor: not-allowed !important;
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

  firstUpdated(_changedProperties) {
    if (this.event && this.renderType === 'button') {
      const element = this.shadowRoot.querySelector(this.renderType);
      if (this.event === 'click') {
        element.addEventListener(this.event, (event) => {
          this.#dispatchClickEvent(event);
        });
      }
    }
    super.firstUpdated(_changedProperties);
  }

  #checkRenderType() {
    return this.renderType === 'button';
  }

  #renderButton() {
    return html`
      <button class="btn" ?disabled=${this.disabled}>
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

  #dispatchClickEvent(event) {
    const clickEvent = new CustomEvent('clickButton', {
      detail: {
        event,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(clickEvent);
  }
}

customElements.define('app-button', Button);
