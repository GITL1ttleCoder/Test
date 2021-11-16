
function setup() {
  createCanvas(1000,1000);
  var Tales = createSprite(500,500,20,20);
Tales.shapeColor ="red";
}

function draw() 
{


  background(30);

if(keyIsDown(RIGHT_ARROW)){
  Tales.position.x = Tales.position.x +2;
}

if(keyIsDown(LEFT_ARROW)){
  Tales.position.x = Tales.position.x -2;
}

drawSprites();
}




