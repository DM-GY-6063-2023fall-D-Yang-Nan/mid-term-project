let img;
let leafX = 0;
let numLeaf = 6;
let space = 0;
let v = 18;

let originalV = 10;

//sky
let startColorTop;
let endColorTop;
let startColorBottom;
let endColorBottom;



function preload(){
  img = loadImage('2222.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke('LightSalmon');
  strokeWeight(1);
  noFill();

  //sky
  startColorTop = color(189, 231, 242);      // 给定的RGB颜色
  endColorTop = color(12, 26, 53);            // 给定的RGB颜色
  startColorBottom = color(255, 255, 255);   // 白色
  endColorBottom = color(31, 74, 109);  


 
}

function draw() {
  // background(255);

  //sky
  let currentHour = hour();
  
  // 如果当前时间在中午12点到晚上12点之间
  if (currentHour >= 12 && currentHour <= 24) {
    // 计算插值的量
    let lerpAmount = map(currentHour, 12, 24, 0, 1);
    let currentColorTop = lerpColor(startColorTop, endColorTop, lerpAmount);
    let currentColorBottom = lerpColor(startColorBottom, endColorBottom, lerpAmount);
    drawGradient(currentColorTop, currentColorBottom);
  } else {
    drawGradient(startColorTop, startColorBottom);
  }

//sun
  stroke('LemonChiffon');
  strokeWeight(1);
  noFill();
  translate(width/2,height/2);
  for (let i = 0; i < 10; i++) {
    let r = randomGaussian(0, width / 4);
    arc(0, -height / 4, r, r, random(0, 360), random(0, 360));
  }
  
  let t = 255;
  // background(255, 10);

  //leaf
translate(-width/2,-height/2);
for(let i = 0; i < numLeaf; i++){
  let currentLeafX = leafX + i * 550;
  image(img,currentLeafX,height-750,600,700);
  if(currentLeafX > width){
   leafX -= 550;
  }
}
leafX += v;

if(mouseIsPressed){
  v = max(v - 0.1, 0);  // 减小v，但确保它不小于0
  } else {
    v = lerp(v, originalV, 0.1);  // 当鼠标没有被按下时，使v慢慢增加回到其原始值
  }

//window
noFill();
stroke(0);
strokeWeight(100);
rect(0,0,width,height,100);
strokeWeight(10);
rect(80,80,width-150,height-150,60);

// strokeWeight(3);
// noStroke();
// fill(0);
// rect(width/2,80,5,height-150);


TEXT
textSize(20);
textAlign(CENTER, CENTER);
fill(255);
// stroke(0);
strokeWeight(2);
text("MousePressed", 200, 150);

}



function drawGradient(c1, c2) {
  for (let y = 0; y <= height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}