const Room = function (area) {
  this.area = area;
  this.isItPainted = "not painted";
}

Room.prototype.bePainted = function () {
  this.isItPainted = "Painted"
};

module.exports = Room
