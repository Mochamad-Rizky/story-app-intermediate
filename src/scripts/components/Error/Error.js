import { css, html, LitElement } from 'lit';

class Error extends LitElement {
  static get properties() {
    return {
      message: {
        type: String,
      },
      errorType: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 2rem;
        background-color: #212529;
        border-radius: 1rem;
      }

      h2 {
        color: #ffff;
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <h2>${this.message}</h2>
      <slot></slot>
    `;
  }
}

customElements.define('error-app', Error);
