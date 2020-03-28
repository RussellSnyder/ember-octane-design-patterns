import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | abstract-route-intl', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:abstract-route-intl');
    assert.ok(route);
  });
});
