var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600, 400);

  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = (80, 80, 80);

  bullet = createSprite(50, 200, 25, 5);
  bullet.shapeColor = "white";

  speed = random(223, 321);
  weight = random(30, 52);
}

function draw() {
  bullet.velocityX = speed;

  background("black");
  if (hascollided(bullet, wall)) {
    bullet.velocityX = 0;

    damage =
      (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
  }

  if (damage>10) 
  {
  
    wall.shapeColor=color(255,0,0);

  }


  if (damage<10) 
  {
  
    wall.shapeColor=color(0,255,0);

  }

  drawSprites();
}

function hascollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  } else {
    return false;
  }
}
