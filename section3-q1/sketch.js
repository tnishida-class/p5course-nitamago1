// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);

  if(KeyIsDown(...)){
    count = (count + 1) % cycle;
  }
  else{
    count = (count + 1) % cycle;
  }
  // BLANK[1]

  if(count < 50){
    ellipse(width / 2, height / 2, count );
  }
  else {
    ellipse(width / 2, height / 2, 100 - count );
  }

  if(mouseIsPressed){
    count = count + 5
  }

  //function draw(){
  //background(160, 192, 255);
  //for(let i = 0; i < 10; i++){
  //ellipse(width * i / 10, height * (10 - i) / 10, 20);
}
//text("center!", width * 0.5, height * 0.5);
}







//function setup(){
  //createCanvas(windowWidth, windowHeight);
  //x = width / 2;
  //y = height / 2;
  //vx = 8;
  //vy = 8;
}

//function draw(){
  //background(160, 192, 255);
  //ellipse(x, y, 20, 20);
  //x += vx;
  //y += vy;

  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
//  vy = constrain(vy + g, -vyMax, vyMax);

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
//  if(x < 0 || x > width){ vx = -1 * vx; }
  //if(y > height){ vy = -1 * vy; }
  //x = constrain(x, 0, width);
  //y = constrain(y, 0, height);
}

//function windowResized(){
//  resizeCanvas(windowWidth, windowHeight);
}
