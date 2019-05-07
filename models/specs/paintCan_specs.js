const assert = require('assert');
const PaintCan = require('../paintCan.js');

describe('PaintCan', function () {

  let paintCan;

  beforeEach(function () {
    paintCan = new PaintCan(2)
  });

  it('should have bit of paint', function () {

    const actual = paintCan.paintCapacity;
    assert.strictEqual(actual, 2);
  })

  it('should be able to check if it is empty', function () {
    const actual = paintCan.isItEmpty;
    assert.strictEqual(actual, 'Not Empty');
  })

  it('should be able to empty itself of paint', function () {
      paintCan.empty()
      const actual = paintCan.isItEmpty;
      assert.strictEqual(actual, 'Empty');
  })










});
