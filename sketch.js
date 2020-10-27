var fixedRect, movingRect;

var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -3 ; 

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  gameObject1 = createSprite(200,100,50,50);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(400,100,50,50);
  gameObject2.shapeColor = "blue";

  gameObject3 = createSprite(600,100,50,50);
  gameObject3.shapeColor = "red";
  gameObject3.velocityY = 3

  gameObject4 = createSprite(800,100,50,50);
  gameObject4.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  //gameObject1.x = World.mouseX;
  //gameObject1.y = World.mouseY;

  /*if(isTouching(gameObject1,fixedRect))
  {
    gameObject1.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    gameObject1.shapeColor = "blue";
    fixedRect.shapeColor = "green";
  }*/
 bounceOff(gameObject3,fixedRect); 
  drawSprites();
}

function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
    {
      return true;
    }
  else 
  {
    return false;
  }
}

function bounceOff(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX*(-1);
      object2.velocityX = object2.velocityX*(-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }
}