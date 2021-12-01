// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0,0,255);
  noStroke();
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 100 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    star(x, y, 10);
  }
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
 function setup(){
   createCanvas(300,100);
   background(200);
   fill(0);
   crossmark(10,10,90,90);
   //line(10,10,90,90);
   //line(90,10,10,90);
 }

 function crossmark(x1,y1,x2,y2){
   line(x1,y1,x2,y2);
   line(x2,y1,x1,y2);
 }

 function ngmark(cx,cy,r){
   push();
   noFill();
   strokeWeight(r*0.1);
   let d =sqrt(r*r/8)
 }
