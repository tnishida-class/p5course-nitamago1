// チェッカー

function setup(){
  createCanvas(500, 500);
  let size = width / 8;
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
      if((i+j) % 2 == 0){
        fill(200);
        noStroke();
      }
      else{
        fill(255);
        noStroke();
      }

      rect(size * i, size * j, size, size);

      if((i+j) % 2 == 0 && j < 3 ){
         fill(255,0,0);
         noStroke();
         ellipse(size * i + size / 2,  size * j + size / 2, size * 2/3);
        }
      else if((i+j) % 2 == 0 && j > 4){
         fill(1);
         noStroke();
         ellipse(size * i + size / 2,  size * j + size / 2, size * 2/3);
        }

    }
    }
}
