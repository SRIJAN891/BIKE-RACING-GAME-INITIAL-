const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var forest,snow,desert
var fimg,simg,dimg,s_bike,d_bike,f_bike

var snow1, desert1, forest1
var gameState=0;
var score=0

function preload() {
    fimg= loadImage("forest.jpg");
    dimg= loadImage("desert.jpg");
    simg= loadImage("snow.jpg");
    s_bike=loadImage("snow_bike.png")
    f_bike=loadImage("forest_biker.png")
     d_bike=loadImage("desert_biker.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    
   forest=createSprite(300,160)
   forest.addImage(fimg)
   forest.scale=0.3
    desert=createSprite(width-300,160)
   desert.addImage(dimg)
   desert.scale=0.8
    snow=createSprite(width/2,height/2+170)
   snow.addImage(simg)
   snow.scale=1

}

function draw(){
   
       background("black");

    textSize(35) 
    fill ("yellow")     
    text("Score" + score,250,200)
   
    drawSprites()
if(mousePressedOver(forest) ){
    gameState = 1
    desert.x = 5000
    snow.x = 5000
//     forest.destroy()
//  desert.destroy()
//  snow.destroy()
//  if( gameState === 1)
//       desert.destroy()
//  snow.destroy()
 f_func();
 if(keyDown("RIGHT_ARROW")){
     move()
    }
 
 
 
 console.log("Forest")
}
else if(mousePressedOver(desert)){
       gameState = 2
    
 if(gameState===2){
 d_func();
  snow.x=5000
   forest.x=5000
 
 console.log("Desert")
}
}
else if(mousePressedOver(snow)){
       gameState = 3
    
 if(gameState===3){
 s_func();
  desert.x=5000
  forest.x=5000
 
 console.log("Snow")
 }
}

}
