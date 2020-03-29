import config from '../../config/environment';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service intl;
  @service themeSwitcher;
  @service languageSwitcher;

  @action
  handleLanguageSwitch(e) {
    const newLang = e.target.value;
    this.languageSwitcher.changeLocale(newLang);
    this.themeSwitcher.updateButtonText()
  }
}