var waterbackground;

var clickCount = 0;
var ellipseClickCount = 0;

var ellipse_x = 350;
var ellipse_y = 350;

var  cleanup = true;

var magic;

var splashes = ["splashone","splashonescaled","splashtwo","splashthree"]

function preload(){

  //loading Images
  backgroundWater = loadImage("images/waterbackground.jpg");

magic = loadSound("sounds/magic_01.mp3")

  splashone = loadImage ("assets/splashone.png");
  splashonescaled = loadImage ("assets/splashonescaled.png");
  splashtwo = loadImage ("assets/splashtwo.png");
  splashthree = loadImage ("assets/splashthree.png");

  waterbackground = loadImage ("images/waterbackground.jpg");

}

function setup() {
createCanvas(windowWidth,780);
magic.loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
image(backgroundWater,0,0);
  image(splashone,520,320);
  image(splashone,450,600);
  image(splashthree,400,15);
  image(splashtwo,200,450);
  image(splashone,150,200);
  image(splashonescaled,700,550);
  image(splashone,450,600);
  image(splashthree,820,350);
  image(splashonescaled,710,180);
  image(splashone,830,5);
  image(splashone,50,5);

  // if(magic.isPlaying()){
  //    magic.pause()
  //  } else {
  //    magic.play()
  //  }

if(mouseIsPressed){

  if(cleanup == true){
      noStroke();
      fill(180,203,235);
      ellipse(mouseX,mouseY,150,150);
      tint(100,10)

 }


}
//attempt to add click counter to transparency
  // function mouseClicked(){
  //   clickCount = clickCount + 1;
  //
  //   if(mouseX > ellipse_x-25 && mouseX < ellipse_x+25){
  //     if(mouseY > ellipse_y - 25 && mouseY < ellipse_y+25){
  //              tint(225,126)
  //       ellipseClickCount = ellipseClickCount +1;
  //     }
  //   }
  // }


  }
// makes cooler fade doesn't look too great as it changes the background
  // if (cleanup == true){
  //   noStroke();
  //   fill(180,203,235);
  //   ellipse(mouseX,mouseY,150,150);
  //     tint(100, 10);
  //     if(clickCount >= 6){
  //       tint(225,126)
  //     }



// }
