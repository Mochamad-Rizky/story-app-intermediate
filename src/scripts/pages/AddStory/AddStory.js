import { html } from 'lit';
import LitWithoutShadowDom from '../../components/LitWithoutShadowDom/LitWithoutShadowDom';
import '../../components/Form/Form';

class AddStory extends LitWithoutShadowDom {
  render() {
    return html` <form-app class="bg-nikel d-block px-5 py-4 rounded"></form-app> `;
  }
}

export default AddStory;
