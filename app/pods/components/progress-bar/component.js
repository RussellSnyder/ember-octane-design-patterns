import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  widthStyle: computed('percentComplete', function() {
    return htmlSafe(`width:${this.percentComplete}%`)
  })
});
