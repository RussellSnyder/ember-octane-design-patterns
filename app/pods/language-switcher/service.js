import Service from '@ember/service';
import config from 'ember-octane-design-patterns/config/environment';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { lookupByFactoryType } from 'ember-intl/hydrate';
import { tracked } from '@glimmer/tracking';
const { modulePrefix } = config;

export default class LanguageSwitcherService extends Service {
  @service intl;

  @tracked
  activeLocale = this.intl.locale[0];

  @tracked
  locales = lookupByFactoryType('translations', modulePrefix).map(moduleName => moduleName.split('/').pop());

  selections = this.locales.map(locale => ({
    value: locale,
    active: this.activeLocale ? this.activeLocale.indexOf(locale) > -1 : false
  }))

  @action
  changeLocale(locale) {
    this.intl.setLocale(locale);
  }
}
