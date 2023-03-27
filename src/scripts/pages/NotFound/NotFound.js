import { html } from 'lit';
import LitWithoutShadowDom from '../../components/LitWithoutShadowDom/LitWithoutShadowDom';

class NotFound extends LitWithoutShadowDom {
  render() {
    return html`
      <h1>Not Found</h1>
      <p>Not Found page</p>
    `;
  }
}

export default NotFound;
