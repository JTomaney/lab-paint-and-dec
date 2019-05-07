const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){

  let room;

  beforeEach(function() {
    room = new Room(12)
  })

  it('should have an area', function() {

    const actual = room.area;
    assert.strictEqual(actual, 12)
  });

  it('should start unpainted', function() {

    const actual = room.isItPainted;
    assert.strictEqual(actual, "not painted")
  });

  it('can be painted', function () {

    room.bePainted()
    const actual = room.isItPainted;
    assert.strictEqual(actual, "Painted")
  })






});
