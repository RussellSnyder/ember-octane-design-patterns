import Component from '@ember/component';
import { computed } from '@ember/object';

const slideWidthPercent = 62.5;

export default Component.extend({
  classNames: 'carousel',

  slideSize: computed('photos.length', function() {
    return this.photos.length
  }),

  photos: null, // passed in
  currentSlideIndex: 0,

  updateCurrentSlideIndex: function(direction = 0) {
    let newSlideIndex;    
    if (direction < 0 && this.currentSlideIndex === 0) {
      newSlideIndex = this.photos.length - 1;
    } else if (direction > 0 && this.currentSlideIndex >= this.photos.length - 1) {
      newSlideIndex = 0;
    } else {
      newSlideIndex = this.currentSlideIndex + direction
    }
    this.set('currentSlideIndex', newSlideIndex);
  },

  actions: {
    move(direction) {
      this.updateCurrentSlideIndex(direction);
    }
  },

  // UI Stuff
  currentSlideDisplay: computed('currentSlideIndex', function() {
    return this.currentSlideIndex + 1
  }),
  
  transform: computed('currentSlideIndex', function() {
    return `translate(-${slideWidthPercent * this.currentSlideIndex}%)`;
  })

});