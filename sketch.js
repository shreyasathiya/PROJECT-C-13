var garden,rabbit;
var gardenImg,rabbitImg;
var apples;
var apples_image;
var leaves;
var leaves_image;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apples_image= loadImage("apple.png");
  leaves_image = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  drawSprites();
  createApples();
  createleaves();
}

function createApples(){
 if(frameCount%300==0){
  apples=createSprite(200,100,10,10);
  apples.addImage("apples",apples_image)
  apples.scale=0.1;
  apples.velocityY=2;
  apples.x = Math.round(random(10,390));
  apples.depth=rabbit.depth;
   rabbit.depth=rabbit.depth+1;
 }
}

function createleaves(){
  if(frameCount%87==0){
   leaves=createSprite(200,150,10,10);
   leaves.addImage("leaves",leaves_image)
   leaves.scale=0.1;
   leaves.velocityY=2;
   leaves.x = Math.round(random(10,390));
   leaves.depth=rabbit.depth;
   rabbit.depth=rabbit.depth+1;
  }
 }