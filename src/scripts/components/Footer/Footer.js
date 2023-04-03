import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class Footer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      .footer-description {
        padding: 0.5rem;
      }

      p {
        text-align: center;
        color: #ffff;
        font-weight: 700;
      }

      a {
        text-decoration: none;
        color: #d19292;
      }
    `;
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="footer-description">
        <p>${msg('Developed by')}: Mochamad Rizky Cahya Diputra</p>
        <p>
          ${msg('Contact me:')}
          <a href="mailto:moch.rizky.cahya@gmail.com">moch.rizky.cahya@gmail.com</a>
        </p>
      </div>
    `;
  }
}

customElements.define('footer-app', Footer);
