let noiseOffset = 0.0;
let strokeWidth = 5

function setup() {
  createCanvas(600, 600);

  background(203, 100, 130);
}

function draw() {
  background(203, 100, 130);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;

  if (mouseIsPressed) {
    stroke(map(mouseX, 100, 600, 45, 200, true), map(mouseX, 34, 600, 220, 200, true))
    line(width - mouseX, mouseY,width - pmouseX,  pmouseY);
    line(width - mouseX, mouseY, pmouseX,  pmouseY);


  }

}

function keyTyped() {

  //console.log(`key ${key} is being typed`)

  if (key === 's') {
    saveCanvas('fileName', 'png')
  }
  return false;

}
