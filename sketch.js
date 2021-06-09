
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var log1,log2,log3  ;
var ground,ground2,ground3,ground4;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 750);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,730,1600,20);
	ground2 = new Ground(10,375,20,730);
	ground3= new Ground(1590,375,20,730);
	ground4 = new Ground(800,10,1600,20);
	log1=new Bin(1280,710,120,20);
	log2=new Bin(1350,650,20,150);
	log3=new Bin(1230,650,20,150);
	ball=new Ball(80,450);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ball.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:110,y:-90});
	}
	if (keyCode=== LEFT_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:-110,y:-90});
	}
}

