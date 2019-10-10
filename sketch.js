let noiseOffset = 0.0;
let strokeWidth = 3;


function setup() {
  createCanvas(500, 500);

  background(0, 0, 0);
  fill(0,45,250);

}

function draw() {
  strokeWeight(strokeWidth);
 noiseOffset += 0.01;
  strokeWidth = noise(noiseOffset) * 30;
  if (mouseIsPressed) {

  line( mouseX, mouseY, pmouseX, pmouseY);

    stroke(map(mouseX, 50, 200, 45, 0, true), map(mouseX, 100,600 ,200 , 255, true))


    line( height-mouseX,width- mouseY,height- pmouseX, width-pmouseY);

    stroke(200,150,50);




  }

}

function keyTyped() {

  //console.log(`key ${key} is being typed`)

  if (key === 's') {
    saveCanvas('fileName', 'png')
  }
  return false;

}
