import { updateWhenLocaleChanges } from '@lit/localize';
import { html } from 'lit';
import LitWithoutShadowDom from '../../components/LitWithoutShadowDom/LitWithoutShadowDom';
import '../../components/FormLogin/FormLogin';

class Login extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html` <form-login class="row flex-column align-items-center"></form-login> `;
  }
}

export default Login;
