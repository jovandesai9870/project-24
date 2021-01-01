const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var box1,box_right,box_left;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	paper=new Paper(100,400,25);
	box1 = new Box(500,685,200,10);
    box_right = new Box(595,637,10,105);
    box_left = new Box(405,637,10,105);

	Engine.run(engine);
  
}


function draw() {

  background(0);

  Engine.update(engine);

  ground.display();
  paper.display();
  box1.display();
  box_right.display();
  box_left.display();
  
  drawSprites();
}
function keyPressed(){
	 if(keyCode === UP_ARROW)
	 {
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
		 
	 }
}



