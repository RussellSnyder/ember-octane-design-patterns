import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  tagName: "",

  updateActiveItems: task(function*(items, duration = 200) {
    if (isEmpty(items)) {
      yield timeout(duration);
    }

    this.set('activeItems', items)
  }).restartable(),

  init() {
    this._super(...arguments);

    this.activeItems = this.activeItems || [];
  },

  setActiveItems(...items) {
    this.updateActiveItems.perform(items)
  },

  clearActiveItems(duration) {
    this.updateActiveItems.perform([], duration)
  },

  actions: {
    setActiveItems(...items) {
      this.setActiveItems(...items)
    },
    clearActiveItems(duration) {
      this.clearActiveItems(duration);
    }
  }
});
