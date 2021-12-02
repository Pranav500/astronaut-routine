var bath, brush, drink, eat, gym, move, sleep;
var iss, astronaut;

function preload() {
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadImage("brush.png");
  drink = loadAnimation("drink.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  move = loadAnimation("move.png","move1.png");
  sleep = loadImage("sleep.png");
  iss = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addImage("sleep",sleep);
  astronaut.addAnimation("gym",gym);
  astronaut.addAnimation("eat",eat);
  astronaut.addAnimation("move",move);
  astronaut.addAnimation("drink",drink);
  astronaut.addAnimation("bath",bath);
  astronaut.addImage("brush",brush);
  astronaut.scale = 0.05;
}

function draw() {
  background(iss);  
  drawSprites();
  text("Up arrow = gym, Down arrow = drink, Left arrow = move, Right arrow = bath, enter = brush, Space bar = eat, Q = sleep", 50,50);

  if(keyDown(UP_ARROW)) {
    astronaut.changeAnimation("gym",gym)
  }
  if(keyDown(LEFT_ARROW)) {
    astronaut.changeAnimation("move",move)
  }
  if(keyDown(RIGHT_ARROW)) {
    astronaut.changeAnimation("bath",bath)
  }
  if(keyDown(DOWN_ARROW)) {
    astronaut.changeAnimation("drink",drink)
  }
  if(keyDown("space")) {
    astronaut.changeAnimation("eat",move)
  }
  if(keyDown("enter")) {
    astronaut.changeImage("brush",brush)
  }
  if(keyDown("q")) {
    astronaut.changeImage("sleep",image)
  }
}