const Engine=Matter.Engine,
const World=Matter.World,
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


 var engine, world,bodies;
var stand,block1,block2,block3;




function setup() {
  createCanvas(1000,400);

 stand =new Ground(1000, 20, 50, 20);
 block1=new Box(330,235,30,40);

}



function draw() {
  background(255,255,255); 
  
  stand.display();

  drawSprites();
}