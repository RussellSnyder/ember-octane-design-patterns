import Component from '@ember/component';

export default Component.extend({
  isShowingExplanation: false,
  hideText: null, // passed in
  showText: null, // passed in

  actions: {
    toggleExplanation: function() {
      this.toggleProperty('isShowingExplanation')
    }
  }
});
