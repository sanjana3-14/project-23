var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	boxPosition = width/2 - 100 
	boxY = 610 
	redBoxLeftSide = createSprite(boxPosition, boxY, 20, 100 ) 
	redBoxRightSide = createSprite(boxPosition + 200, boxY, 20, 100) 
	redBoxBottomSide = createSprite(boxPosition+100, boxY + 40, 200, 20) 
	redBoxLeftSide.shapeColor = "red" 
	redBoxRightSide.shapeColor = "red" 
	redBoxBottomSide.shapeColor = "red"
	redBoxBottomBody = Bodies.rectangle (boxPosition + 200, boxY + 40, 200, 40, {isStatic: true})

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {restitution:1,isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
  }
}



