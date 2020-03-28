import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | language-switcher', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:language-switcher');
    assert.ok(service);
  });
});
