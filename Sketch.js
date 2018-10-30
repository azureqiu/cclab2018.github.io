 //var colnum;
var s;
var scl = 20;
var food;


function setup(){
    createCanvas(600,600);
    s = new monkey();
    frameRate(10);
    pickLocation();
     background(51);
}

function pickLocation(){
    var col = width/scl;
    var row = height/scl;
    food = createVector(floor(random(col)),floor(random(row)));
    food.mult(scl);
    

}

//function pick() {
  //colnum = int(random(pickcolor.length));
//}


function draw(){
    
   // background(51);
    s.update();
    s.show();
    
    var PickColor = [color(255, 0, 0), color(0, 0, 255), color(255, 221, 0)];
    
    fill(PickColor[int(random(0, PickColor.length))]);
    //fill(0,0,255);
    rect(food.x, food.y,scl-1,scl-1);
    
    if(s.eat(food)){
        pickLocation();
    }
    

}


function keyPressed(){
    if(keyCode === 87){
        s.dir(0,-1);
    }
    if(keyCode === 83){
        s.dir(0,1);
    }
    if(keyCode === 65){
        s.dir(-1,0);
    }
    if(keyCode === 68){
        s.dir(1,0);
    }
    
}

