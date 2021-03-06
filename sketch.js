const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img, ground;
function preload(){
polygon_img=loadImage("Hero.jpg");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(400,400,1000,15);
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
  
  block1 = new BlockRed(300,275,30,40);
  block2 = new BlockRed(330,275,30,40);
  block3 = new BlockRed(360,275,30,40);
  block4 = new BlockRed(390,275,30,40);
  block5 = new BlockRed(420,275,30,40);
  block6 = new BlockRed(450,275,30,40);
  block7 = new BlockRed(480,275,30,40);
 
  block8 = new BlockRed(330,235,30,40);
  block9 = new BlockRed(360,235,30,40);
  block10 = new BlockRed(390,235,30,40);
  block11 = new BlockRed(420,235,30,40);
  block12 = new BlockRed(450,235,30,40);

  block13 = new BlockRed(360,195,30,40);
  block14 = new BlockRed(390,195,30,40);
  block15 = new BlockRed(420,195,30,40);
  
  block16 = new BlockRed(390,155,30,40);

  blocks1 = new BlockWhite(640,175,30,40);
  blocks2 = new BlockWhite(670,175,30,40);
  blocks3 = new BlockWhite(700,175,30,40);
  blocks4 = new BlockWhite(730,175,30,40);
  blocks5 = new BlockWhite(760,175,30,40);
  //level two
  blocks6 = new BlockWhite(670,135,30,40);
  blocks7 = new BlockWhite(700,135,30,40);
  blocks8 = new BlockWhite(730,135,30,40);
  //top
  blocks9 = new BlockWhite(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});
  
}
function draw() {
  background("White"); 
  
  strokeWeight(5);
  stroke("Black") ;
  textSize(25);
  text("Hit All of Them & You Win!",400,50);
  
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  /** 
  textSize(20);
  fill("black");
  text("Thrash",100,350);
  textSize(20);
  fill("black");
  text("Thrash",200,350);
  textSize(20);
  fill("black");
  text("Thrash",300,350);
  textSize(20);
  fill("Black");
  text("Thrash",400,350);
  textSize(20);
  fill("Black");
  text("Thrash",500,350);
  textSize(20);
  fill("Black");
  text("Thrash",600,350);
  textSize(20);
  fill("Black");
  text("Thrash",700,350);
  textSize(20);
  fill("Black");
  text("Thrash",800,350);
**/

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if (keyCode===32){
    slingShot.attach(this.ball);
  }
}

function done(){
if (Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9,Block10,Block11,Block12,Block13,Block14,Block15,Block16,Blocks1,Blocks2,Blocks3,Blocks4,Blocks5,Blocks6,Blocks7,Blocks8,Blocks9===Visibility-5)
strokeWeight(5)
text("YOU WIN!",450,200)
stroke("Black")
}

/*strokeWeight(5);
  text("Hit The Invisible Enemies With The Super Hero!",200,100);
  stroke("Black");
*/