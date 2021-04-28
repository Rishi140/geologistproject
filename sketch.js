const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var tree,star,iron;

function setup(){
 var canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;

plane = new Plane(600,height,1200,20)
hammer = new Hammer(10,100);

tree=new Stone(700,320,70,70);
star=new Rubber(410,550,40);

iron = new Iron(230,350);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

plane.display();
hammer.display();
tree.display();
star.display();
iron.display(); 
}