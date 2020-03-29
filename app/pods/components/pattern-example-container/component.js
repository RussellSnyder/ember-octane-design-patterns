import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  t_ns_example: computed('t_ns', 'example', function() {
    return `${this.t_ns}.examples.${this.example}.`
  })
});