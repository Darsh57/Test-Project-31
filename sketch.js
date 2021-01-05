const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;

    for(var k = 0; k <= width; k = k + 80){
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }
  
    for(var j = 75; j <= width; j = j + 50){
      plinkos.push(new Plinko(k, 75));
    }
  
    for(var j = 50; j <= width-10; j = j + 50){
      plinkos.push(new Plinko(k, 175));
    }

    ground = new Ground(400, 795, 800, 10);

    
}

function draw() {
  background(0);  
  Engine.update(engine);

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount%90 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  ground.display();
  drawSprites();
}