
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var datetime;
var bg = ("bgIMG.jpg")
var gameState="PLAY";
function preload(){
	getTime()
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(390,150,360,40)

	bobObject1 = new Bob(250,500,35);
	bobObject2 = new Bob(320,500,35);
	bobObject3 = new Bob(390,500,35);
	bobObject4 = new Bob(460,500,35);
	bobObject5 = new Bob(530,500,35);

	rope1 = new Rope(bobObject1.body, roof.body, -35*4,0);
	rope2 = new Rope(bobObject2.body, roof.body, -35*2,0);
	rope3 = new Rope(bobObject3.body, roof.body, -35*0,0);
	rope4 = new Rope(bobObject4.body, roof.body, -35*-2,0);
	rope5 = new Rope(bobObject5.body, roof.body, -35*-4,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(bg){
    background(bg);
}
Engine.update(engine);

  drawSprites();
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bobObject1.body, {x: mouseX , y: mouseY});
	}
}
//function keyPressed(){
	//if(keyCode === LEFT_ARROW){
		//Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000})
	//}
	//if(keyCode === RIGHT_ARROW){
	//Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:1000,y:-1000})
	//}
//}
async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
     var dt = responseJSON.datetime;
    console.log(responseJSON)
    console.log(dt)
    var hour = dt.slice(11,13)
    console.log(hour)
    if(hour<=6 && hour>=18){
        bg="bgIMG.jpg"
    }
    bg = loadImage(bg)
    
}