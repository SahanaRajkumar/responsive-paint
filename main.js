var mouseEvent="empty";
var last_positionx,last_positiony;
var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="black";

line_of_width=1;


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_of_width=document.getElementById("widthofline").value;

    mouseEvent="mousedown";
}


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    curent_position_of_X=e.clientX-canvas.offsetLeft;
    curent_position_of_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_of_width;
        ctx.moveTo(last_positionx,last_positiony);
        ctx.lineTo(curent_position_of_X,curent_position_of_y);
        ctx.stroke();
    }

last_positionx=curent_position_of_X;
last_positiony=curent_position_of_y;

}
 


canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

    mouseEvent="mouseup";
}


canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

    mouseEvent="mouseleave";
}
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;

if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById ("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
 
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    color=document.getElementById("color").value;
    line_of_width=document.getElementById("widthofline").value;
    last_positionx=e.touches[0].clientX-canvas.offsetLeft;
    last_positiony=e.touches[0].clientY-canvas.offsetTop;
}

 canvas.addEventListener("touchmove",my_touchmove);

 function my_touchmove(e){
     console.log("touchmove");
     currenttouchX=e.touches[0].clientX-canvas.offsetLeft;
     currenttouchY=e.touches[0].clientY-canvas.offsetTop;

     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=line_of_width;
     ctx.moveTo(last_positionx,last_positiony);
     ctx.lineTo(currenttouchX,currenttouchY);
     ctx.stroke();
     last_positionx=currenttouchX;
     last_positiony=currenttouchY;

 }
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}



