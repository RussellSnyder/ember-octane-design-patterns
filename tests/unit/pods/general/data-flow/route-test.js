import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | general/data-flow', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:general/data-flow');
    assert.ok(route);
  });
});
