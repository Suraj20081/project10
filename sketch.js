var ship
var sea
function preload(){
seaImg = loadImage("sea.png");

shipImg1 = loadAnimation(ship_1.png)
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
  sea.addImage(seaImg)
 if(sea.x < 0){
   sea.x = sea.width/2;
 }
}