function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(3);
  stroke(100, 100, 100);
  noFill();
  frameRate(0.25); //number of times to repeat
  background(225,225,225);
}

function draw() {
  clear();
  var rColor = 25;
  var gColor = 50;
  var bColor = 150;
  
  var margin = 20;
  
  translate(margin,margin);
  
  var width = innerWidth-2*margin;
  var height = innerWidth-2*margin;
  var shift = 15; //pixels can be shifted x to the left or the right
  var space = random(-1, -7);
  var numSquares = 10;
  var sideLen = width/numSquares;
  var area = numSquares * numSquares;
  
  for(var y=0; y<height; y=y+sideLen){
    for(var x=0; x<width; x=x+sideLen){
      fill(random(0, 0), random(150, 0), random(100, 200), (200, 100));
      quad(x + space + random(-shift, shift),y + space + random(-shift, shift), x + sideLen - space + random(-shift, shift),y + space + random(-shift, shift), x+sideLen -space + random(-shift, shift),y-space + sideLen + random(-shift, shift), x + space + random(-shift, shift),y - space + sideLen + random(-shift, shift));
    }
  }
  
  //noLoop();
}