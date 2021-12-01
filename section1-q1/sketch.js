// 練習問題：神戸市のマーク
function setup(){
  createCanvas(500, 500);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke("green");
  arc(100 + 26, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 26, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  fill(blue);
  noStroke();
  ellipse(300, 100, 100, 100);
  fill(255);
  ellipse(296, 96, 95, 95);
  fill(green);
  ellipse(295,95,90,90);
  fill(255)
  ellipse(293,99,85,85);

  fill(100)
  textSize(20);
  textFont("serif");
  text("KOBE", 260, 92);

  fill(100)
  textSize(10);
  textFont("serif");
  text("UNIVERSITY", 270, 110);

  fill(red);
  ellipse(252, 105, 30, 30 );
  fill(255);
  ellipse(252, 105, 20, 20 );

}
