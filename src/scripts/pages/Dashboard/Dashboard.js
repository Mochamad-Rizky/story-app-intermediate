import { html } from 'lit';
import LitWithoutShadowDom from '../../components/LitWithoutShadowDom/LitWithoutShadowDom';

class Dashboard extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="p-3">
        <div class="p-1 shadow border border-1 rounded-1">
          <h6>Dashboard</h1>
          <p>Dashboard page</p>
        </div>
      </div>
    `;
  }
}

export default Dashboard;
