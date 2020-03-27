import Route from '@ember/routing/route';
import data from "ember-octane-design-patterns/helpers/global-data"

export default Route.extend({
  model() {
    return data
  },


});
