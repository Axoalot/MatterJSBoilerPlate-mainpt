
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane
var cube
var square
var circle
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options = {
		isStatic:true
	}

	var cube_options = {
		isStatic:false,
		restitution:0.3,
		frictionAir:1,
		density:10,
		friction:2
	}

	var circle_options = {
		isStatic:false,
		restitution:1,
		frictionAir:0.01,
		density:10,
		friction:2
	}

	var square_options = {
		isStatic:false,
		restitution:0.3,
		frictionAir:0.1,
		density:10,
		friction:2
	}


	plane = Bodies.rectangle(width/2,height-20,width,20,plane_options)
	World.add(world,plane)
	
	cube = Bodies.rectangle(700,100,100,100,cube_options)
	World.add(world,cube)

	circle = Bodies.circle(500,100,50,circle_options)
	World.add(world,circle)

	square = Bodies.rectangle(300,100,200,100,square_options)
	World.add(world,square)

	Engine.run(engine);
  
}


function draw() {
	ellipseMode(RADIUS)
	rectMode(CENTER);
  background("#8c2767");
  
  rect(plane.position.x,plane.position.y,width,20)
 rect(cube.position.x,cube.position.y,100,100)
 ellipse(circle.position.x,circle.position.y,50,50)
 rect(square.position.x,square.position.y,200,100)
}



