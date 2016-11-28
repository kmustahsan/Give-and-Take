import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../helpers/start-mirage';

moduleForComponent('user', 'Integration | Component | user', {
  integration: true,
  setup() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {

  const model = server.createList('user', 12);

  this.set('model', model);
  this.render(hbs`{{users user=model}}`);

  assert.equal(model.length, 12);

});