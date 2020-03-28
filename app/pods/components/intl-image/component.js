import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',
  intl: service(),

  src: computed('t_ns', 'image', function() {
    return `${this.t_ns}${this.image}.src`
  }),

  alt: computed('t_ns', 'image', function() {
    return `${this.t_ns}${this.image}.alt`
  }),

  caption: computed('t_ns', 'image', function() {
    const t_key = `${this.t_ns}${this.image}.caption`;

    if (!this.intl.exists(t_key)) {
      return null
    }

    return t_key
  })
});
