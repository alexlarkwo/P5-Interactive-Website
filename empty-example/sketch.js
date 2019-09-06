var  cleanup = true;

var swap;
var swap_x = 420;
var swap_y = 195;

var l_s;
var l_s_x = 820;
var l_s_y = 350;

var medium;
var medium_x = 920;
var medium_y = 500;

var mediu;
var mediu_x = 485;
var mediu_y = 150;

var small;
var small_x = 890;
var small_y = 200;

var s_m;
var s_m_x = 790;
var s_m_y = 60;

var s_;
var s__x = 50;
var s__y = 120;

var medium_small;
var medium_small_x = 250;
var medium_small_y = 250;

var clickCount = 0;
var imageClickCount = 0;

var soundsplash;

var cnv;
var x;
var y;

function preload(){
  //loading Images
  soundsplash = loadSound("sounds/splash_01.mp3")
  backgroundWater = loadImage("images/waterbackground.jpg");
  l_s_splash = loadImage("assets/l_s_splash.png");
  largesplash = loadImage ("assets/largesplash.png");
  med_splash = loadImage ("assets/med_splash.png");
  medi_splash = loadImage ("assets/medi_splash.png");
  medisplash = loadImage ("assets/medisplash.png");
  mediu_splash = loadImage ("assets/mediu_splash.png");
  medium_splash = loadImage ("assets/medium_splash.png");
  mediusplash = loadImage ("assets/mediusplash.png");
  medsplash = loadImage ("assets/medsplash.png");
  s_m_splash = loadImage ("assets/s_m_splash.png");
  s_splash = loadImage ("assets/s_splash.png");
  sm_splash = loadImage ("assets/sm_splash.png");
  sma_splash = loadImage ("assets/sma_splash.png");
  small_splash = loadImage ("assets/small_splash.png");
  smaller_splash = loadImage ("assets/smaller_splash.png");

  splashone = loadImage ("assets/splashone.png");
  splashonescaled = loadImage ("assets/splashonescaled.png");
  splashtwo = loadImage ("assets/splashtwo.png");
  splashthree = loadImage ("assets/splashthree.png");

  waterbackground = loadImage ("images/waterbackground.jpg");
  threeddroplet = loadImage ("images/threeddroplet.png");

}

function setup() {
createCanvas(windowWidth,768);
// var x = (windowWidth -width+1500) / 2;
// var y = (windowHeight -height+850) / 2;
//cnv.position(x, y);


}

function draw() {
  console.log(imageClickCount);
image(backgroundWater,0,0);

if(imageClickCount >= 1){
  image(splashone,swap_x+100, swap_y+125);
  image(splashone,swap_x+30, swap_y+405);
}else{
  image(largesplash,swap_x,swap_y);
  image(sm_splash,swap_x+180,swap_y-135);
}

if(imageClickCount >= 2){
  image(splashthree,l_s_x - 420,l_s_y - 335);
} else {
  image(l_s_splash,l_s_x,l_s_y);
}

if(imageClickCount >= 3){
  image(splashtwo,medium_small_x-50,medium_small_y+190);
  image(splashone,medium_small_x-100,medium_small_y-50);
} else {
  image(med_splash,medium_small_x,medium_small_y+280);
  image(medi_splash,medium_small_x,medium_small_y);
  image(medium_splash,medium_small_x+100,medium_small_y-150);
  image(small_splash,medium_small_x-160,medium_small_y+170);
}

if(imageClickCount >= 4){
  image(splashonescaled,medium_x-220,medium_y+50);
}else{
  image(medisplash,medium_x,medium_y)
  image(smaller_splash,medium_x - 590,medium_y - 320)
}

if(imageClickCount >= 5){
  image(splashthree,medium_x-100,medium_y-150);
} else {
  image(mediu_splash,mediu_x,mediu_y)

}

if(imageClickCount >= 6){
  image(splashonescaled,small_x-180,small_y-20);
}else{
  image(sma_splash,small_x,small_y)
}

if(imageClickCount >= 7){
  image(splashone,s_m_x+40,s_m_y-55);
}else{
  image(mediusplash,s_m_x,s_m_y)
  image(medsplash,s_m_x+160,s_m_y+10)
  image(s_m_splash,s_m_x+100,s_m_y+65)
}

if(imageClickCount >= 8){
  image(splashone,s__x,s__y-115);
}else{
  image(s_splash,s__x,s__y)
}
}

//could used a click counter instead of true or false

function mouseClicked(){
  if(mouseClicked) {
    soundsplash.play()
  } else {
    soundsplash.stop()
  }
clickCount = clickCount + 1;

if(mouseX > swap_x - 100 && mouseX < swap_x + 100){
  if(mouseY > swap_y - 100 && mouseY < swap_y +100) {
    imageClickCount = imageClickCount +1 ;
  }
}

if(mouseX > l_s_x -150 && mouseX < l_s_x +150){
  if(mouseY > l_s_y -150 && mouseY < l_s_y +150){
    imageClickCount = imageClickCount +1 ;
  }
}

if(mouseX > medium_x - 190 && mouseX < medium_x + 190){
  if(mouseY > medium_y -190 && mouseY < medium_y + 190 ){
    imageClickCount = imageClickCount +1 ;
  }
}

if(mouseX > mediu_x - 140 && mouseX < mediu_x + 140){
  if(mouseY > mediu_y -140 && mouseY < mediu_y + 140 ){
    imageClickCount = imageClickCount +1 ;
  }
}

if(mouseX > small_x - 170 && mouseX < small_x + 170){
  if(mouseY > small_y -170 && mouseY < small_y + 170 ){
    imageClickCount = imageClickCount +1 ;
  }
}

if(mouseX > s_m_x - 160 && mouseX < s_m_x + 160){
  if(mouseY > s_m_y -160 && mouseY < s_m_y + 160 ){
    imageClickCount = imageClickCount +1 ;
  }
}

if(mouseX > s__x -195 && mouseX < s__x + 195){
  if(mouseY > s__y -195 && mouseY < s__y + 195 ){
    imageClickCount = imageClickCount +1 ;
  }
}

  swap = !swap;
  l_s = !l_s;
  medium = !medium;
  mediu = !mediu;
  small = !small;
  s_m = !s_m;
  s_ = !s_;
  medium_small = !medium_small;
}
