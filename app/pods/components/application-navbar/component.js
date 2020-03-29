import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationNavbar extends Component {
  @service router;

  @tracked completed;

  currentSection = null

  @action
  updateCurrentlySelectedSection(newSection) {
    this.currentSection = newSection
  }

  constructor(owner, args) {
    super(owner, args);

    const { currentRouteName } = this.router;

    if (currentRouteName && currentRouteName !== "index") {
      const routeParts = currentRouteName.split(".")
      this.currentSection = routeParts[0]
    }
  }
}
