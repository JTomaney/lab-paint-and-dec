const PaintCan = function (paintCapacity) {
  this.paintCapacity = paintCapacity;
  this.isItEmpty = "Not Empty"
}

PaintCan.prototype.empty = function () {
  this.isItEmpty = "Empty"
};

module.exports = PaintCan
