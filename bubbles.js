function Bubble(x, y){
  this.x=random(0,width);
  this.y=random(0, height);
  this.correctClassification;
  
  if(this.x>this.y){
    this.correctClassification=1;
  }else{
    this.correctClassification=-1;
  }

  this.show =function(){
    stroke(0);
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }
}
