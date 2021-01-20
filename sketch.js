var fixedRect, movingRect;

function setup() {
  createCanvas(800,600);
  fixedRect = createSprite(400, 110, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400, 300,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  movingRect.velocityY = -1;
  fixedRect.velocityY = 1;
}

function draw() {
  background("black");  

 /* if(isTouching(movingRect,fixedRect))
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green"; 
  }*/
bounceOff(movingRect,fixedRect);

  drawSprites();
}

