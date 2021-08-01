const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground= new Ground(200,690,600,10)
   
  fruit=new Fruit(250,350,25)
  rope=new Rope (6,{x:250,y:200})
  Matter.Composite.add(rope.body,fruit)
  fruitconnection = new Link(rope,fruit)
}

function draw() 
{
  background(51);
  Engine.update(engine);
 
  ground.display();
  fruit.display();
  rope.show();

}




