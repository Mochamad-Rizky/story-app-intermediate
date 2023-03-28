import { LitElement, html, css } from 'lit';

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

  render() {
    return html`
      <div class="footer-description">
        <p>Developed by, Mochamad Rizky Cahya Diputra</p>
        <p>
          Contact me: <a href="mailto:moch.rizky.cahya@gmail.com">moch.rizky.cahya@gmail.com</a>
        </p>
      </div>
    `;
  }
}

customElements.define('footer-app', Footer);
