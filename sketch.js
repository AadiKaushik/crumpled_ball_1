
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

 ball1 = new Ball (200,200,20);

box1 = new Box (1000,610,20,150);
box2 = new Box (1090,660,150,20);
box3 = new Box (1170,610,20,150);


 ground1 = new Ground(600,680,1200,20) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ball1.display();
box1.display();
box2.display();
box3.display();
 ground1.display();
 keyPresssed();
 drawSprites();
 console.log()
}

function keyPresssed()
{
	if(keyCode===UP_ARROW)
	{
		Body.applyForce(ball1.body,ball1.body.position,{
			x:10,
			y:-19})
	}
	if(keyCode===DOWN_ARROW)
	
	{
		Body.applyForce(ball1.body,ball1.body.position,{
			x:1,
			y:10
		})
	}
}
