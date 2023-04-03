import { css, html, LitElement } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import '../../components/Error/Error';

class NotFound extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 2rem;
        background-color: #212529;
        border-radius: 1rem;
      }

      h2 {
        color: white;
        text-align: center;
      }
    `;
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html` <h2>${msg('Page not found')}</h2> `;
  }
}

export default NotFound;
