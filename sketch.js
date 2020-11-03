
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ground

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,400,1200,20)
	//Create the Bodies Here.
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	dustBin = new DustBin(400,660,200,30)
	ball = new Ball(200,200,40)
	Engine.run(engine);
  
}


function draw() {
	background(255);
  rectMode(CENTER);
  dustBin.display()
  ball.display();
  drawSprites();
 
}



