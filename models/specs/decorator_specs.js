const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paintCan.js');
const Room = require('../room.js');

  describe('Decorator', function () {

    let decorator;

    beforeEach(function () {
      decorator = new Decorator
      paintCan = new PaintCan(2)
      paintCan2 = new PaintCan(1)
      room = new Room(12)
    })

    it('should start with an empty paint stock', function () {

      const actual = decorator.paintStock;
      assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a can of paint to the stock', function () {

      decorator.addPaintCan(paintCan);
      const actual = decorator.paintStock;
      assert.deepStrictEqual(actual, [paintCan]);
    });

    it('should be able to calculate the total liters of paint it has in stock', function () {

      decorator.addPaintCan(paintCan)
      decorator.addPaintCan(paintCan2)
      const actual = decorator.calculateStock();
      assert.strictEqual(actual, 3 )
    });

    it('sould be able to calculate if it has enough paint to paint a room', function () {

      decorator.addPaintCan(paintCan)
      decorator.addPaintCan(paintCan2)
      const actual = decorator.enoughPaintForRoom(room);
      assert.strictEqual(actual, "Not Enough")
    });





  })
