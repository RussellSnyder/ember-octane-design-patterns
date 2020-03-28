import Component from '@ember/component';
import { inject as service } from '@ember/service';
import data from "design-patterns/helpers/global-data"

export default Component.extend({
  router: service(),

  currentSection: null,
  data,

  actions: {
    updateCurrentlySelectedSection(newSection) {
      this.set("currentSection", newSection)
    }
  },

  didInsertElement() {
    const { currentRouteName } = this.router;
    if (currentRouteName && currentRouteName !== "index") {
      const routeParts = currentRouteName.split(".")
      this.set('currentSection', routeParts[0])
    }
  }
});
