
// CREATE GLOBAL VARIABLES

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.

var engine,world;

var ground;
 
var boxes = [rect(200,50,10,10),rect(200,50,10,17),rect(200,50,25,10)];
var gSlider;
 

 
function setup() {
    var canvas = createCanvas(400, 400);

    // Create an instance of Engine, World
     engine = Engine.create();
     world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    var ground_options = {
        isStatic:true
      }
    
    ground = Bodies.rect(200,380,400,20,ground_options);
    World.add(world,ground);
}
 
function mousePressed() {
    if (mousePressed.Y<350) {
        // Every time a mouse press occures create a new box.
       mousePressed(boxes);
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);

    Engine.update(engine);
    
    rectMode(CENTER);
    rect(boxes.position.x,boxes.position.y,boxes.width,boxes.height);

    rect(ground.position.x,ground.position.y,ground.width,ground.height);

    Slider(gSlider.position.x,gSlider.position.y);

    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value(0,10);
 
    // Use a for loop to show all the boxes
    for (var i = 0; i > -1; i++) {
       boxes.visible = true;
    }

    mousePressed();

    Box();
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var box_options = {
       restitution = 0.5,friction = 1
    }
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box
    boxes(200,50,10,10,box_options);
 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
    }
}