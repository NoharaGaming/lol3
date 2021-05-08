const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
   backgroundImg = loadImage("sprites/bg1.png")
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(450,300,250,10);
    platform = new Ground(800, 285, 200, 10);

box1 = new Box(450,270,30,30)
box2 = new Box(417,270,30,30)
box3 = new Box(483,270,30,30)
box4 = new Box(434,240,30,30)
box5 = new Box(466,240,30,30)
box6  = new Box(450,210,30,30)

box7 = new Box(800,255,30,30)
box8 = new Box(769,255,30,30)
box9 = new Box(831,255,30,30)
box10 = new Box(784,225,30,30)
box11 = new Box(816,225,30,30)
box12= new Box(800,195,30,30)

    bird = new Bird(40,40);
box90 = new Ground(40,50,5,5)
Slingshot = new SlingShot(bird.body,{x:200, y:100});

}

function draw(){
   
           background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("black")
        
    
    Engine.update(engine);
    //strokeWeight(4);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();

    box10.display();

    box11.display();

    box12.display();
    
    ground.display();
  bird.display();
    platform.display();
    //log6.display();
    Slingshot.display();    
    
}
function mouseDragged(){
    bird.body.position.x=mouseX;
    bird.body.position.y=mouseY;
}
function mouseReleased(){
    Slingshot.fly()
    }
    async function getTime(){
        var time = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
        var time2 = await time.json();
        
        var hour = time2.datetime.slice(11,13)   
        console.log(hour)
        if (hour > 06 && hour < 18){
            bg = "sprites/bg.png"
            
          
        }else{
            bg = "sprites/bg2.jpg"
              
        }
        background(backgroundImg);

    }
 



