function preload(){

}

function setup(){
canvas = createCanvas(500, 300);
canvas.position(250, 300);
video = createCapture(VIDEO);
video.hide();

tint_colour = "";
} 

function draw(){
image(video, 0, 0, 500, 300);
tint(tint_colour);
}

function filter_apply(){
    tint_colour = document.getElementById("colour").value;
}

function take_snapshot(){
    save("your_pic.png");
}