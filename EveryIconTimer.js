var EveryIconTimer = function() {
  this.now = new Date();
};

EveryIconTimer.prototype = {

  init: new Date('January 14, 1997 21:00:00'),

  initialize: function() {},

  update: function() {},

  display: function() {},

  currentFrame: function() {
    return Math.floor((Date.now() - this.init.getTime()) / 10);
  }

};
