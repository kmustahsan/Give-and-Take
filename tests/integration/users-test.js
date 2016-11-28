import { moduleForComponent, test } from 'ember-qunit';
import startMirage from '../helpers/start-mirage';

moduleForComponent('user', 'Integration | Component | user', {
  integration: true,
  setup() {
    startMirage(this.container);
  }
});

test('User DB is correctly seeded', function(assert) {

  const model = server.createList('user', 12);

  this.set('model', model);

  assert.equal(model.length, 12);

});

test('User attributes are not null', function(assert) {

  const model = server.createList('user', 12);

  this.set('model', model);

  assert.equal(model.length, 12);
  assert.equal(model.firstObject.first_name, null);

});