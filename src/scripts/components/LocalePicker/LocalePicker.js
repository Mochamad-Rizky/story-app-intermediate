import { html } from 'lit';
import { updateWhenLocaleChanges } from '@lit/localize';
import { allLocales } from '../../../generated/locale-codes';
import { getLocale, localeNames, setLocaleFromUrl } from '../../utils/localization';
import LitWithoutShadowDom from '../LitWithoutShadowDom/LitWithoutShadowDom';
import Route from '../../utils/route';

class LocalePicker extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
    setLocaleFromUrl();
  }

  render() {
    return html`
      <select class="form-select w-auto mx-auto" @change=${this.#localeChanged}>
        ${allLocales.map(
          (locale) => html`
            <option value=${locale} ?selected=${locale === getLocale()}>
              ${localeNames[locale]}
            </option>
          `,
        )}
      </select>
    `;
  }

  #localeChanged(event) {
    const newLocale = event.target.value;
    localStorage.setItem('lang', newLocale);

    if (newLocale !== getLocale()) {
      this.#setLocale(newLocale);
      setLocaleFromUrl();
    }
  }

  #setLocale(newLocale) {
    const urlWithoutHash = Route.getRouteWithoutHash(window.location.href);
    const urlWithHash = Route.getRouteWithHash(window.location.href);
    urlWithoutHash.searchParams.set('lang', newLocale);

    const historyPushState = `${urlWithHash.origin}/${urlWithHash.hash.split('?')[0]}${
      urlWithoutHash.search
    }`;
    window.history.pushState(null, '', historyPushState);
  }
}

customElements.define('locale-picker', LocalePicker);
