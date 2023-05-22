import { html } from 'lit';
import LitWithoutShadowDom from '../../components/LitWithoutShadowDom/LitWithoutShadowDom';
import '../../components/AddStory/AddStory';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class AddStoryAsGuest extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <h1 class="text-white text-center">${msg('Guest Mode')}</h1>
      <form-app guestMode class="bg-nikel d-block px-5 py-4 rounded"></form-app>
    `;
  }
}

export default AddStoryAsGuest;
