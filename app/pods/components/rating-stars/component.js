import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  rating: 4.5, // passed in

  roundedDownRating: computed('rating', function() {
    return Math.floor(this.rating);
  }),

  wholeStars: computed('roundedDownRating', function() {
    if (this.roundedDownRating < 0) {
      return new Array(0);
    }
    return new Array(this.roundedDownRating);
  }),

  hasHalfStar: computed('roundedDownRating', function() {
    if (this.roundedDownRating <= 0) {
      return false;
    }
    return (this.rating - this.roundedDownRating) >= 0.5;
  })
});
