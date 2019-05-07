const Decorator = function() {
  this.paintStock = []
}

Decorator.prototype.addPaintCan = function (paintCan) {
  this.paintStock.push(paintCan);
};

Decorator.prototype.calculateStock = function () {
  let result = 0
  for(let paint of this.paintStock) {
    result += paint.paintCapacity;
  }
  return result
};

Decorator.prototype.enoughPaintForRoom = function (room) {
  let result = this.calculateStock();
  if (result < room.area) {
    return "Not Enough"
  };
  return "Enough"
};

module.exports = Decorator
