import Component from '@ember/component';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency'
import { later } from '@ember/runloop';

export default Component.extend({
  user: null, //passed in
  saveConfirmationTextVisible: false,

  whatWillChange: computed('user.{firstName,lastName,password,hasDirtyAttributes}', function() {
    const changedObject = this.user.changedAttributes()
    if (Object.keys(changedObject).length < 1) {
      return false
    }

    // for readability in the template
    let formattedObject = {};
    Object.keys(changedObject).forEach(change => {
      const values = changedObject[change];
      formattedObject[change] = `from ${values[0]} to ${values[1]}`
    })
    return formattedObject
  }),

  isSubmitDisabled: computed('user.hasDirtyAttributes', function() {
    const dataUnchanged = !this.user.hasDirtyAttributes;
    const isSaving = this.saveUser.isRunning;

    return dataUnchanged || isSaving
  }),

  saveUser: task(function *() {
    const res = yield this.user.save()
    this.set('user', res)
    this.showSaveConfirmation()
  }).drop(),

  actions: {
    saveUser: function() {
      this.get('saveUser').perform();
    }
  },

  showSaveConfirmation: function() {
    this.set('saveConfirmationTextVisible', true)
    const that = this;
    later(this, function() {
      that.set('saveConfirmationTextVisible', false)
    }, 3000);
  }
});
