 var hr,mn,sc
var scAngle

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second()
}

function draw() {
  background(255,255,255);  
  drawSprites();
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  
  rotate(scAngle);
  stroke(48,5,5);
  strokeWeight(25);
  line(0,0,100,0);

}