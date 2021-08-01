var sea_img, sea, ship1, ship, ship2_, ship2;
function preload(){
  sea_img = loadImage("sea.png");
  ship1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  ship2_ = loadAnimation("ship-1.png", "ship-2.png");
}

function setup(){
  createCanvas(400,400);
  
  //create the sea
  sea = createSprite(200,150, 40,50);
  sea.addImage("sea_img", sea_img);
  sea.scale = 0.4;
  sea.velocityX = -3;

  //create the ship
  ship = createSprite(100,200,50,50);
  ship.addAnimation("ship1", ship1);
  ship.scale = 0.3;

  //create a background ship
  ship2 = createSprite(300,200,50,50);
  ship2.addAnimation("ship2_", ship2_);
  ship2.scale = 0.1;



}

function draw() {
  background("blue");

   //resetting background
   if(sea.x<0){
    sea.x = 600;
  }
  drawSprites();
 
}