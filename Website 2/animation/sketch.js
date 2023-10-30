var cw = window.innerWidth;
var ch = window.innerHeight; 

function setup() {
  canvas = createCanvas(cw,ch);
  background(0);
  shapes = [];
  desk = loadImage('deskoutline1.png');
  light = loadImage('deskoutline2.png');
  sw = (cw / desk.width) * desk.width;
  sh = (ch / desk.height) * desk.height;
  randLights();
  setInterval(randLights, 10000);
}

function displayLight() {
    x = random(0, cw);
    y = random(0, ch);
    w = random(250, 500);
    newShape = new Shape(x, y, x, y, w, 100);
    shapes.push(newShape);
  
    x = random(0, cw);
    y = random(0, ch);
    w = random(250, 500);
    newShape = new Shape(x, y, x, y, w, 100);
    shapes.push(newShape);
}

function clearLights() {
  clearInterval(displaying);
}

function randLights() {
  displaying = setInterval(displayLight, 200);
  setTimeout(clearLights, 2000);
}

class Shape{
    constructor(x, y, px, py, weight, a){
      this.x = x;
      this.y = y;
      this.px = px;
      this.py = py;
      this.a = a;
      this.weight = weight / 2;
    }
  
    show(){
      if (this.weight >= 200) {
        this.weight = 200;
        stroke(230, 255, 253, this.a);
      } else if (this.weight > 100) {
        stroke(174, 226, 255, this.a);
      } else if (this.weight > 50) {
        stroke(172, 188, 255, this.a);
      } else {
        stroke(183, 153, 255, this.a);
      }
      this.a = this.a - 4;
      //stroke(255, 186, 134, this.a);
      strokeWeight(this.weight);
      if (this.a > 10){
        line(this.x, this.y, this.px, this.py);
      }
  }
}

function draw() {
    var cw = window.innerWidth;
    var ch = window.innerHeight; 
    imageMode(CENTER);
    background("#272829");
	var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    newShape = new Shape(mouseX, mouseY, pmouseX, pmouseY, weight * 5, 100);
    shapes.push(newShape);
  
    for (let i = 0; i < shapes.length; i++) {
      currShape = shapes[i];
      currShape.show();
    }
  desk.resize(sw, 0);
  y = ch - (desk.height / 2);
  image(desk, cw / 2, y, desk.width, desk.height);
  
  light.resize(sw, 0);
  y2 = light.height / 2;
  image(light, cw / 2, y2, light.width, light.height);
  
  fill(172, 188, 255, 90);
  noStroke();
  textSize(14);
  text('Move your cursor to light up the room.', 10, ch - 10);
    
}
