var drawing = [];
var pen = [];

function setup(){
    var canvas = createCanvas(500,500);
    canvas.mousePressed(start);
}

function draw(){
    background("yellow");

    if(mouseIsPressed){
        var mouseLocation = {
            x:mouseX,
            y:mouseY
          }
        pen.push(mouseLocation);
    }
    
    noFill();
    stroke("red");
    strokeWeight(3);
    for(var i=0; i<drawing.length;i++){
        var path =drawing[i];
        beginShape();
        for(var p=0;p<path.length;p++){
          vertex(path[p].x,path[p].y);
        }
        endShape();
      }
   
}

function start(){
    pen=[];
    drawing.push(pen);
}


