var bob1,bob2,bob3,bob4,bob5;
var packageBody,roof;
var rp1,rp2,rp3,rp4,rp5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	bob1=new Bob(400,500);
	bob2=new Bob(200,500);
	bob3=new Bob(600,500);
	bob4=new Bob(300,500);
	bob5=new Bob(500,500);
	roof=new Roof(400,100,600,50);
	rp1=new Chain(bob1.body, roof.body, 0, 0);
	rp2=new Chain(bob2.body, roof.body, -200, 0);
	rp3=new Chain(bob3.body, roof.body, 200, 0);
	rp4=new Chain(bob4.body, roof.body, -100, 0);
	rp5=new Chain(bob5.body, roof.body, 100, 0);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240,240,240);
  hit();
  rp1.display();
  rp2.display();
  rp3.display();
  rp4.display();
  rp5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  drawSprites();


 
}

function hit(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-10,y:0});
		//Matter.Body.applyForce(bob2.body,bob2.body.position,{x:0,y:0});
	}
}



