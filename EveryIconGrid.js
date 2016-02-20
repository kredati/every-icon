var EveryIconGrid = function(x, y, pixelSize) {
  this.position = new p5.Vector(x, y);
  this.pixelSize = pixelSize;
  this.incept = new Date('January 14, 1997 21:00:00').getTime();
};

EveryIconGrid.prototype = {

  pixels: [],

  initialize: function() {
    while (this.pixels.length < 1024) this.pixels.push(this.getNextPixel());
    this.displayPixels(this.allPixels);
  },

  update: function() {
    this.currentFrame = this.getCurrentFrame();
  },

  display: function() {
    this.composeCurrentFrame(this.currentFrame);
    this.displayPixels(this.pixelsInFrame)
  },

  displayPixels: function(displayFunction) {
    push();
    translate(this.position.x, this.position.y);
    displayFunction.call(this);
    pop();
  },

  pixelsInFrame: function() {
    for (var i = 0; i < this.currentFrame.length; ++i) {
      this.pixels[i].display();
      this.pixels[i].reset();
    }
  },

  allPixels: function() {
    this.pixels.forEach(function initialDisplay (pixel) {
      pixel.display();
    });
  },

  getNextPixel: function() {
    var nextCoordinates = this.getRowAndColumn(this.pixels.length);
    return new BlinkingPixel(nextCoordinates.column * this.pixelSize, nextCoordinates.row * this.pixelSize, this.pixelSize);
  },

  getRowAndColumn: function(pixelIndex) {
    return {
      row: Math.floor(pixelIndex / 32),
      column: pixelIndex % 32
    };
  },

  getCurrentFrame: function() {
    return Math.floor((Date.now() - this.incept) / 10).toString(2);
  },

  composeCurrentFrame: function(binaryFrameNumber) {
    var binaryArray = binaryFrameNumber.split('').reverse();
    binaryArray.forEach(function (binary, index) {
      if (binary === '1') this.pixels[index].turnOn();
    }, this);
  },

};
