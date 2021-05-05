function f_func(){
  // desert.destroy()
  // snow.destroy()
  snow.x = 5000
  
 forest1=createSprite(width/2,height/2)
   forest1.addImage(fimg)
   forest1.scale=1.35
   f_biker=createSprite(100,height-150)
    f_biker.addImage(f_bike)
    f_biker.scale=1.5
    
}
function move(){
 f_biker.velocityX=3
}