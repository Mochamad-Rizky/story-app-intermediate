import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '../../generated/locale-codes';
import Route from './route';

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  async loadLocale(locale) {
    return import(`../../generated/locales/${locale}.js`);
  },
});

export const setLocaleFromUrl = async () => {
  const url = window.location.href;
  const locale = Route.getRouteWithoutHash(url).searchParams.get('lang');
  await setLocale(locale);
};

export const localeNames = {
  en: 'English',
  id: 'Indonesia',
};
