
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeImage, tree;
var mangoes = [];
var boyImage, boy;


function preload() {
	treeImage = loadImage("tree.png");
	stoneImage = loadImage("stone.png");
	mangoImage = loadImage("mango.png");
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(600, 300);
	tree.addImage(treeImage);
	tree.scale = 0.3;

	boy = createSprite(200, 430);
	boy.addImage(boyImage);
	boy.scale = 0.1;


	//Create the Bodies Here.
	ground = new Ground(400, 500, 800, 50);

	stone = new Stone(200, 450);


	for (i = 0; i < 7; i++) {
		mangoes.push(new Mango(Math.random() * 220 + 500, Math.random() * 100 + 150));
	}

	constraint = new Constraint(stone.body, { x: 150, y: 350 });




	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	ground.display();

	drawSprites();

	stone.display();

	for (const mango of mangoes) {
		mango.display();
	}

	for (const mango of mangoes) {
		detectcollision(stone, mango);
	}
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
	constraint.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		constraint.attach(stone.body);
	}
}

function detectcollision(lstone, lmango) {
	var mangoBodyPosition = lmango.body.position
	var stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <= lmango.radius + lstone.radius) {
		Matter.Body.setStatic(lmango.body, false);
	}
}
