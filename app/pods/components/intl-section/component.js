import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  t_ns_section: computed('t_ns', 'section', function() {
    return `${this.t_ns}.${this.section}.`
  })
});
