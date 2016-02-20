var BlinkingPixel = function(x, y, size) {
  this.position = new p5.Vector(x, y);
  this.size = size;
};

BlinkingPixel.prototype = {

  on: false,

  initialize: function() {},

  update: function() {},

  display: function() {
    stroke(255);
    strokeWeight(1);
    (this.on) ? fill(255) : fill(0);
    rect(this.position.x, this.position.y, this.size, this.size);
  },

  turnOn: function() {
    this.on = true;
  },

  reset: function() {
    this.on = false;
  }

};
