import { html } from 'lit';
import LitWithoutShadowDom from '../../components/LitWithoutShadowDom/LitWithoutShadowDom';

class Dashboard extends LitWithoutShadowDom {
  render() {
    return html`
      <h1>Dashboard</h1>
      <p>Dashboard page</p>
    `;
  }
}

export default Dashboard;
