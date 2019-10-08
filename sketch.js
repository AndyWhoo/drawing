function setup() {
  createCanvas(600, 600);

  background(203, 100, 130);
  strokeWeight(4);
}

function draw() {

  if (mouseIsPressed) {
    stroke(map(mouseX, 100, 600, 45, 200, true), map(mouseX, 34, 600, 220, 200, true))
    line(width - mouseX, width - mouseY, width - pmouseX, pmouseY);

  }

}

function keyTyped() {

  //console.log(`key ${key} is being typed`)

  if (key === 's') {
saveCanvas('fileName', 'png')
  }
return false;

}
