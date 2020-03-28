import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  percentage: computed('completed', 'total', function() {
    return this.completed/this.total * 100
  })
});
