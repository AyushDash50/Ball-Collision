var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(400, 400, 120, 100); 
  fixedrect.shapeColor = "green";
  movingrect = createSprite(200, 200, 100, 80);
  movingrect.shapeColor = "green";
}

function draw() {
  background("lightgreen"); 
  movingrect.x = World.mouseX; 
  movingrect.y = World.mouseY;
   console.log(movingrect.x ); 
   console.log(fixedrect.x );
    console.log(movingrect.x - fixedrect.x); 
    if( movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
      fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && 
      movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 && 
      fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 ) 

      { movingrect.shapeColor = "red"; } 
      else {
         movingrect.shapeColor = "green"; 
        } drawSprites();
}