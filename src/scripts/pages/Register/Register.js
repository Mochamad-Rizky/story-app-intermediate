import { updateWhenLocaleChanges } from '@lit/localize';
import { html } from 'lit';
import LitWithoutShadowDom from '../../components/LitWithoutShadowDom/LitWithoutShadowDom';
import '../../components/FormRegister/FormRegister';

class Register extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html` <form-register class="row flex-column align-items-center"></form-register> `;
  }
}

export default Register;
