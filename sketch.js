let img;
let leafX = 0;
let numLeaf = 4;
let space = 0;



function preload(){
  img = loadImage('Leaf.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  translate(width/2,height/2);
//   for(let i = 0;i<10;i++){
//     r = randomGaussian(0,width/4)
//     arc(0,-height/4,r,r,random(0,360),random(0,360))
// }
translate(-width/2,-height/2);
for(let i = 0; i < numLeaf; i++){
  let currentLeafX = leafX + i * 700;
  image(img,currentLeafX,height-700,700,700);
  if(currentLeafX > width){
   leafX -= 700;
  }
}
leafX += 5;
}


