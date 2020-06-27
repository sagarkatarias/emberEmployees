import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Input />`);

    assert.ok(this.element.querySelector('input[type="text"]'));
    assert.ok(this.element.querySelector('button[type="button"]'));
  });
});
