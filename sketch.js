const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[]
var plinkos=[]
var divisions=[]
  
function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(240,height,480,20);
  division1= new Division(100,800,20,600)
  division2= new Division(200,800,20,600)
  division3= new Division(300,800,20,600)
  division4= new Division(400,800,20,600)
  division5= new Division(10,800,20,600)
plinko1=new Plinko(100,150,10)
plinko2=new Plinko(155,150,10)
plinko3=new Plinko(220,150,10)
plinko4=new Plinko(50,150,10)
plinko5=new Plinko( 280,150,10)
plinko6=new Plinko( 350,150,10)
plinko7=new Plinko( 11,150,10)
plinko8=new Plinko( 10,240,10)
plinko9=new Plinko( 50,240,10)
plinko10=new Plinko( 150,240,10)
plinko11=new Plinko( 50,240,10)
plinko12=new Plinko( 100,240,10)
plinko13=new Plinko( 220,240,10)
plinko14=new Plinko( 280,240,10)
plinko15=new Plinko( 350,240,10)
plinko16=new Plinko( 350,240,10)
plinko17=new Plinko( 10,340,10)
plinko18=new Plinko( 50,340,10)
plinko19=new Plinko( 100,340,10)
plinko20=new Plinko( 220,340,10)
plinko21=new Plinko( 150,340,10)
plinko22=new Plinko( 280,340,10)
plinko23=new Plinko( 280,340,10)
plinko24=new Plinko( 350,340,10)
plinko25=new Plinko( 420,150,10)
plinko26=new Plinko( 420,240,10)
plinko27=new Plinko( 420,340,10)
particles=new Particle(100,200,11)

}







function draw() {
  background("green");  

Engine.update(engine)
ground1.display();
division1.display();
division2.display();
division3.display();
division4.display();
division5.display()
plinko1.display()
plinko2.display()
plinko3.display()
plinko4.display()
plinko5.display()
plinko6.display()
plinko7.display()
plinko8.display()
plinko9.display()
plinko10.display()
plinko11.display()
plinko12.display()
plinko13.display()
plinko14.display()
plinko15.display()
plinko16.display()
plinko17.display()
plinko18.display()
plinko19.display()
plinko20.display()
plinko21.display()
plinko22.display()
plinko23.display()
plinko24.display()
plinko25.display()
plinko26.display()
plinko27.display()
particles.display()
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}


  drawSprites();
}