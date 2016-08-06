import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { assertHide, assertShow } from '../../../helpers/sync/assert-visibility';
import hbs from 'htmlbars-inline-precompile';

const { run } = Ember;

moduleForComponent('popover-on-element', 'Integration | Option | event', {
  integration: true
});

test('Popover toggles with hover', function(assert) {

  // assert.expect(3);

  this.render(hbs`{{popover-on-element}}`);

  assertHide(assert, this);

  run(() => {
    this.$().trigger('mouseover');
  });

  assertShow(assert, this);

  run(() => {
    this.$().trigger('mouseleave');
  });

  assertHide(assert, this);

});

test('Popover toggles with click', function(assert) {

  // assert.expect(3);

  this.render(hbs`{{popover-on-element event='click'}}`);

  assertHide(assert, this);

  run(() => {
    this.$().click();
  });

  assertShow(assert, this);

  run(this, () => {
    this.$().click();
  });

  assertHide(assert, this);

});

test('Popover toggles with focus', function(assert) {

  // assert.expect(3);

  this.render(hbs`{{popover-on-element event='focus'}}`);

  assertHide(assert, this);

  run(() => {
    this.$().trigger('focus');
  });

  assertShow(assert, this);

  run(this, () => {
    this.$().trigger('blur');
  });

  assertHide(assert, this);

});

test('Popover does not show with none', function(assert) {

  // assert.expect(4);

  this.render(hbs`{{tooltip-on-component event='none'}}`);

  assertHide(assert, this);

  /* Check focus */

  run(() => {
    this.$().trigger('focus');
  });

  assertHide(assert, this);

  /* Check hover */

  run(this, () => {
    this.$().trigger('mouseover');
  });

  assertHide(assert, this);

  /* Check click */

  run(this, () => {
    this.$().click();
  });

  assertHide(assert, this);

});
