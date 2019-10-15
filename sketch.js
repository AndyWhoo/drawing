//let noiseOffset = 0.0;
//let strokeWidth = 10;



function setup() {
  createCanvas(400, 400);

  background(0, 0, 0);
  //fill(0, 45, 250);

}

function draw() {
  //strokeWeight(strokeWidth);
  //noiseOffset += 0.5;
  //strokeWidth = noise(noiseOffset) * 30;
  if (mouseIsPressed) {
    //strokeWeight(10);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);

    stroke(map(mouseX, 0, 0, 255, 0, true), map(mouseX, 100, 600, 400, 400, true))
    strokeWeight(170);

    line(mouseX * 5, mouseY,  pmouseX * 5, pmouseY);

    line(height - mouseX, width - mouseY, height - pmouseX, width - pmouseY);

    stroke(255);




  }

}

function keyTyped() {

  //console.log(`key ${key} is being typed`)

  if (key === 's') {
    saveCanvas('fileName', 'png')
  }

  if (key === 'd') {
    background(0, 0, 0);
  }
  return false;

}
