const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;






function setup() {
  createCanvas(800,400);


  engine = Engine.create();
    world = engine.world;

    ground1=new Ground(400,360,100,40)
    Engine.update(engine);
}

function draw() {
  background(255,255,255);
 
  
  ground1.display();

  drawSprites();
}