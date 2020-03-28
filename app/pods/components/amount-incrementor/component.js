import Component from '@ember/component';

export default Component.extend({
  amount: 10,
  stepSize: 1, 

  actions: {
    updateAmount(direction) {
      const newAmount = this.amount + (direction * this.stepSize)
      if (this.onAmountIncrement) {
        this.onAmountIncrement(newAmount);
      }
    }
  }
});
