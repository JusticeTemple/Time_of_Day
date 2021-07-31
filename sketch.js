const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1100,800);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if  (backgroundImg)
background(backgroundImg)

    Engine.update(engine);
textSize(50)
fill("yellow")
    // write code to display time in correct format here
    if (hour>=12){
        text("Time: " + hour%12 + "pm", 50,100);
    }
    else if(hour == 0){
        text("Time: 12am ", 50,100);
    }
    else{
        text("Time: " + hour%12 + "am", 50,100);
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API
var response  = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
var datetime = responseJSON.datetime;
hour = datetime.slice(11,13);

if(hour > 0 && hour < 18){
    bg = "sunrise5.png"
}

else{
    bg = "sunset12.png"
}

backgroundImg = loadImage(bg)
}
