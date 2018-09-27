class Snake{
  
  constructor(){
    this.body=[];
    //createVector(X pos, Y pos) the first snake location
    this.body[0] = createVector(0,0);
    this.xdir=0;//controll the movement--> more units more speed
    this.ydir=0;
  }
  
  setDir(x,y){
    this.xdir = x;
    this.ydir = y;
  }
  
  update(){
    /*
    //Its equal to array.copy()
    let head = createVector();
    head.x = this.body[this.body.length-1].x;
    head.y = this.body[this.body.length-1].y;
    */
    let head = this.body[this.body.length-1].copy();
    console.log('HEAD' + head);
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
    
    //this.body[0].x += this.xdir;
    //this.body[0].y += this.ydir;
  }
  
  show(){
    for(let i=0; i< this.body.length; i++){
    //Create snake--> create rectangule
    	fill(0);
    	noStroke();
    	rect(this.body[i].x, this.body[i].y, 1,1);
    }
  }
  
  grow(){
    print('GROW');
  	//this.body.push(createVector(this.xdir,this.ydir));
    
    //Copy the actual position
    let head = this.body[this.body.length-1].copy();
    this.body.push(head);
    
  }
  
  eatFood(pos){
    //let x = this.body[0].x;
    //let y = this.body[0].y;
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    
    if(pos.x == x && pos.y==y){
      print("FOOD EATEN");
      this.grow();
      return true;
    }
    return false;
  }
  
  endGame(){    
    //position of the head
    let head = this.body[this.body.length-1].copy(); 
    let x = head.x;
    let y = head.y;
    /*
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;*/
    
    //check if the snake is out of the rectangle
    if(x> w-1 || x <0 || y > h-1 || y < 0){
      return true;
    }
    
    //we need to check if the head intersect with other positions??
    for(let i =0 ; i< this.body.length-1; i++){
      let partBody = this.body[i];
      if(partBody.x == x && partBody.y == y){
        return true;
      }      
    }
    return false;
  }
}