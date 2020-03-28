import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'table',
  classNames: ['table', 'sortable-table'],

  activeSortBy: '',
  dataSorting: computed('activeSortBy', function() {
    return [ this.get('activeSortBy') ];
  }),

  sortedData: computed.sort('data', 'dataSorting'),

  actions: {
    sort(field) {
      if (field === this.get('activeSortBy')) {
        this.set('activeSortBy', `${field}:desc`);
      } else {
        this.set('activeSortBy', field);
      }
    }
  }
});

