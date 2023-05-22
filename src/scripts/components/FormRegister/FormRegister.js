import { html } from 'lit';
import LitWithoutShadowDom from '../LitWithoutShadowDom/LitWithoutShadowDom';
import '../UI/Input/Input';
import '../UI/Button/Button';
import '../Alert/Alert';
import api from '../../utils/api';
import { updateWhenLocaleChanges, msg } from '@lit/localize';

class FormRegister extends LitWithoutShadowDom {
  static get properties() {
    return {
      isLoading: {
        type: Boolean,
      },
      showAlert: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <h1 class="text-white text-center">${msg('Register')}</h1>
      <form
        novalidate
        id="form-login"
        class="needs-validations col-12 col-md-8 col-lg-6"
        @submit=${this.#onSubmitForm}
      >
        <input-form
          id="name"
          label=${msg('Name')}
          type="text"
          value=""
          event="change"
          placeholder=${msg('Enter name')}
          @getValue=${this.#onInputValue.bind(this, 'nameInput')}
          validFeedback=${msg('Name is valid')}
          invalidFeedback=${msg('Name is invalid')}
        >
        </input-form>
        <input-form
          id="email"
          label=${msg('Email')}
          type="email"
          value=""
          event="change"
          placeholder=${msg('Enter email')}
          @getValue=${this.#onInputValue.bind(this, 'emailInput')}
          validFeedback=${msg('Email is valid')}
          invalidFeedback=${msg('Email is invalid')}
        >
        </input-form>
        <input-form
          id="password"
          label=${msg('Password')}
          type="password"
          value=""
          event="change"
          placeholder=${msg('Enter password')}
          minLength="8"
          @getValue=${this.#onInputValue.bind(this, 'passwordInput')}
          validFeedback=${msg('Password is valid')}
          invalidFeedback=${msg('Password must be at least 8 characters long')}
        >
        </input-form>
        <p class="mt-3 text-white">
          ${msg('Already have an account')}? <a href="/#/login">${msg('Login')}</a>
        </p>
        <app-button
          ?disabled=${this.isLoading}
          @clickButton=${this.#onSubmitForm}
          renderType="button"
          event="click"
        >
          ${this.isLoading ? 'Loading...' : msg('Register')}
        </app-button>
      </form>
      ${this.showAlert?.status &&
      html`
        <app-alert classes=${this.showAlert.class} message=${this.showAlert.message}></app-alert>
      `}
    `;
  }

  async #onSubmitForm(event) {
    const form = document.getElementById('form-login');

    if (!form.checkValidity()) {
      event.preventDefault();
      form.classList.add('was-validated');
      return;
    }

    try {
      this.isLoading = true;

      const response = await api.register({
        name: this['nameInput'],
        email: this['emailInput'],
        password: this['passwordInput'],
      });

      this.showAlert = {
        status: true,
        message: `${response.message}, ${msg('you are redirect to login page')}`,
        class: 'alert-success',
      };

      this.#removeAlert();
      this.#navigateToRoot();
    } catch (error) {
      const {
        data: { message },
      } = JSON.parse(error.message);

      this.showAlert = {
        status: true,
        message,
        class: 'alert-danger',
      };
      this.#removeAlert();
    } finally {
      this.isLoading = false;
    }
  }

  #onInputValue(inputType, event) {
    this[inputType] = event.detail.value;
  }

  #removeAlert() {
    const timeToRemoveAlert = 2500;

    this.#setTimeoutCallback(() => {
      this.showAlert = {
        status: false,
        message: '',
        class: '',
      };
    }, timeToRemoveAlert);
  }

  #navigateToRoot() {
    const timeToNavigate = 2500;

    this.#setTimeoutCallback(() => {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('hashchange'));
    }, timeToNavigate);
  }

  #setTimeoutCallback(callback, timeInSecond) {
    setTimeout(() => {
      callback();
    }, timeInSecond);
  }
}

customElements.define('form-register', FormRegister);
