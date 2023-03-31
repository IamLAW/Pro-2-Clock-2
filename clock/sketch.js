
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  angleMode(DEGREES);

}

function draw() {
  translate(0, 0);
  scale(1, 1);
  let hr = hour();
  let mn = minute();
  let sc = second();


  stroke(255);
  fill(map(mouseX, 0, width, 150, 255), 155, 200);
  let end1 = map(sc, 0, 60, 0, 360);
  arc(mouseX, mouseY, 160, 160, -90, end1);


  fill(map(mouseX, 0, width, 150, 255), 200, 255);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(mouseX, mouseY, 130, 130, -90, end2);


  fill(map(mouseX, 0, width, 255, 150), 230, 30);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(mouseX, mouseY, 100, 100, -90, end3);

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW)
    clear();
}

