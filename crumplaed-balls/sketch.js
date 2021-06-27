
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,paperObj;

function setup() {
	createCanvas(2000, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(900,650);
	paperObj=new paper(300,250,70)
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);
  groundObject.display();
  dustbinObj.display();
  paperObj.display();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145})
	}
}

