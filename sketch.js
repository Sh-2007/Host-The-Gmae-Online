
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  ground = createSprite(400,390,800,20);
  monkey = createSprite(50,350,30,30);
  monkey.addAnimation("m",monkey_running);
  monkey.scale = 0.1;
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
 background("white");
 ground.velocityX = -3;
 if(ground.x < 200){
   ground.x = ground.width/2;
 }
  if(keyDown("space")){
    monkey.velocityY = -10;
    
  }
  monkey.velocityY = monkey.velocityY+1;
  monkey.collide(ground);
  spawnObstacle();
  spawnBanana();
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
  }
  if(monkey.isTouching(FoodGroup)){
   FoodGroup[0].destroy();
  
  }
 drawSprites();
  
}

function spawnObstacle(){
  if(frameCount%150 === 0){
    obstacle = createSprite(420,370,30,30);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);                   
  }
  
  
}

function spawnBanana(){
  if(frameCount%70 === 0){
    obstacle = createSprite(420,random(150,250),30,30);
    obstacle.addImage(bananaImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.1;
    FoodGroup.add(obstacle);                   
  }
  
  
}




