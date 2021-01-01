var car,wall;
var invisibleline;
var def,speed,weight;




function setup() {
  createCanvas(800,300);

  car=createSprite(500,200,15,15);

  wall=createSprite(700,200,10,height/7);
 
  speed=random(20,40)
  weight=random(30,40);
  
  invisibleline=createSprite(710,200,10,height/7)
  invisibleline.visible=false;

  def=(0.5*weight*speed*speed)/22500

}

function draw() {
  background("black");

  car.collide(wall);

  car.velocityX = speed;

  if(def>100)
  {
      car.shapeColor="green";
  }

  if(def>100 && def<180)
  {
      car.shapeColor="yellow";
  }

  drawSprites();

  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    &&car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
     return true;
    }
    else {
     return false;
    }
  }