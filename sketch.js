var grid;

setup = function () {
  createCanvas(600, 600);
  background(255);
  grid = new EveryIconGrid(50, 50, 12);
  grid.initialize();
};

draw = function () {
  grid.update();
  grid.display();
};
