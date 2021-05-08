class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,20,20);
 
}
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("Pink");
    rect(pos.x, pos.y, this.width, this.height);
  }   
}
