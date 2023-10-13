let img;
let leafX = 0;
let numLeaf = 4;
let space = 0;
let v = 18;

let originalV = 10;



function preload(){
  img = loadImage('Leaf.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0.5);
  noFill();
}

function draw() {
  background(255);
  translate(width/2,height/2);
  for (let i = 0; i < 10; i++) {
    let r = randomGaussian(0, width / 4);
    arc(0, -height / 4, r, r, random(0, 360), random(0, 360));
  }
  
  let t = 255;
  // background(255, 10);
translate(-width/2,-height/2);
for(let i = 0; i < numLeaf; i++){
  let currentLeafX = leafX + i * 600;
  image(img,currentLeafX,height-700,600,700);
  if(currentLeafX > width){
   leafX -= 600;
  }
}
leafX += v;

if(mouseIsPressed){
  v = max(v - 0.1, 0);  // 减小v，但确保它不小于0
  } else {
    v = lerp(v, originalV, 0.1);  // 当鼠标没有被按下时，使v慢慢增加回到其原始值
  }
}



