import Component from '@ember/component';
import { computed } from '@ember/object';
import { or } from '@ember/object/computed';

export default Component.extend({
  tagName: 'th',
  classNames: 'sortable-table__header-cell',

  click() {
    this.get('on-click')(this.get('field'))
  },

  isAscending: computed('activeSortBy', 'field', function() {
    return this.get('activeSortBy') === this.get('field');
  }),

  isDescending: computed('activeSortBy', 'field', function() {
    return this.get('activeSortBy') === `${this.get('field')}:desc`;
  }),

  isActive: or('isAscending', 'isDescending')
});
