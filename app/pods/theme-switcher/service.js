import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

const THEMES = {
  SOLARIZED_LIGHT: 'solarized-light',
  SOLARIZED_DARK: 'solarized-dark'
}

const getThemeTranslation = (intl, theme) => {
  return intl.t(`theme.${theme.replace(/-/g, '_')}`)
}
const setThemeClassNameOnBody = (newTheme) => {
  const classList = document.body.classList;

  const newThemeClassName = `theme-${newTheme}`

  // remove old class name if on DOM
  Object.values(THEMES).forEach((value) => {
    let className = `theme-${value}`
    if (classList.contains(className)) {
      classList.remove(className) 
    }
  })

  classList.add(newThemeClassName)
}

const getNextTheme = (currentTheme) => currentTheme === THEMES.SOLARIZED_DARK ? THEMES.SOLARIZED_LIGHT : THEMES.SOLARIZED_DARK

export default class ThemeSwitcherService extends Service {
  @service intl;

  @tracked
  activeLocale = this.intl.locale[0];

  currentTheme = THEMES.SOLARIZED_DARK;

  @tracked
  newColorSchemeDisplay = getThemeTranslation(this.intl, THEMES.SOLARIZED_DARK)

  @action 
  updateButtonText() {
    this.newColorSchemeDisplay = getThemeTranslation(this.intl, THEMES.SOLARIZED_DARK)
  }

  @action
  toggleColorScheme() {
    const nextTheme = this.currentTheme;
    this.currentTheme = getNextTheme(this.currentTheme)

    this.newColorSchemeDisplay = getThemeTranslation(this.intl, nextTheme);
    setThemeClassNameOnBody(this.currentTheme)
  }
}
