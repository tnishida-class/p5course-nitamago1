let x, y;
let angle = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width *9 / 10;
  y = height / 10;
  angleMode(DEGREES);
}

function draw(){
  background(160, 192, 255);
  if(y<height*2/5){fill(160,192,255)}
  else{fill(255,222,173)}
  rect(0,0,windowWidth+50,windowHeight+50);
  fill(255, 10, 0);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 3; }
  if(keyIsDown(RIGHT_ARROW)){ x += 3; }
  if(keyIsDown(UP_ARROW)){ y -= 3; }
  if(keyIsDown(DOWN_ARROW)){ y += 3; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }
  if(x-25 > width) {x = -25;}
  if(x+25 < 0) {x= width+25;}
  if(y-25 > height) {y = -25;}
  if(y+25 < 0) {y = height+25;}
  fill(255);
  ellipse(width /3, height /4, 300,50);
  fill(255)
  ellipse(width*4 /5, height /2, 200,45)
  fill(0,0,128);
  ellipse(width / 2, height *5.9, height*10);
  angle += 0.7;
  push();
  translate(width / 2, height *5.9);
  rotate(angle);
  fill(255,200,0);
  strokeWeight(2);
  stroke(200, 0, 0);
  drawa(0, -height *5.0, 50);
  pop();
}

function drawa(ox,oy,r) {
  push();
  translate(ox, oy);

  beginShape();
  for (let theta = 0; theta < 360; theta++) {
    let x = r * cos(theta) - r * pow(sin(theta), 2) / sqrt(2);
    let y = r * cos(theta) * sin(theta);

    vertex(x, y);
}
 endShape(CLOSE);

 pop();
}

//function mouseClicked(){

//}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let scores = [];
for(let i = 0; i < 10; i++){
 scores.push(random(0, 3));
}

//if (scores [] = 0){
//   background(160, 192, 255)
//}

//if (scores [] = 1){
//   background(255, 222, 173)
//}

//if (scores [] = 2){
//  background(211)
//}
//if (scores [] = 3){
//  background(150)
//}

//console.log( random );



//if console.log( random ) = 1,
