//Create object of snake
let snake;
let resolution = 20;//with resolution we change the size of the snake and the food
let food;
let w;
let h;


function setup() {
  createCanvas(400, 400);
  //400/10 = 40
  w= floor(width/resolution);
  h= floor(width/resolution);
  
  frameRate(5);
  
  snake = new Snake();
  
  //create a piece of food
  foodLocation();
}

//Food Function
function foodLocation(){
  let x = floor(random(w));//raqndom between 0-40
  let y = floor(random(h));
  console.log('X: ');
  console.log(x);
  console.log('W: ');
  console.log(w);
  food = createVector(x, y);
}

//Function of p5js
function keyPressed(){
  /*switch(keyCode){
      
  }*/
 if(keyCode=== LEFT_ARROW){
   snake.setDir(-1,0);
 }else if(keyCode=== RIGHT_ARROW){
	snake.setDir(1,0);
 }
	else if(keyCode=== DOWN_ARROW){
	snake.setDir(0,1);
 }
  else if(keyCode=== UP_ARROW){
	snake.setDir(0,-1);
 }else if(key == ' '){
   snake.grow();
   //test function to confirm if the snake dies when some part of his body 
//is in contact with other part
 }
}




function draw() {
  scale(resolution);
  background(220);
  if(snake.eatFood(food)){
    //new piece of food
    foodLocation();
  }
  //Update snake state
  snake.update();
  //Show the snake
  snake.show();
  
  
  if(snake.endGame()){
    print('END GAME');
    background(255,0,0);
    noLoop();
  }
  
  noStroke();
  fill(255,0,0);
  rect(food.x, food.y, 1,1);
}