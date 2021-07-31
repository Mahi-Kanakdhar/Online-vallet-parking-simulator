canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_width="100";
car_height="100";

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_y=310;
car_x=10;

function add() {
	background_img= new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;

    greencar_img= new Image();
    greencar_img.onload=uploadgreencar;
    greencar_img.src=greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
ctx.drawImage(greencar_img,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",anyarrowkeypressed);
function anyarrowkeypressed(e){
    ASCII_code=e.keyCode;
    console.log("ASCII code for the key pressed is "+ASCII_code);
    if(ASCII_code=="38"){
        console.log("Up key is pressed.");
        up();
    }
    if(ASCII_code=="39"){
        console.log("Right key is pressed.");
       right();
    }
    if(ASCII_code=="40"){
        console.log("Down key is pressed.");
        down();
    }
    if(ASCII_code=="37"){
        console.log("Left key is pressed.");
        left();
    }
}
function up(){
    if(car_y>70){
    car_y -= 10;
    console.log("(up arrow) Current y coordinate of the green car is "+car_y);
    uploadBackground();
    uploadgreencar();
    loosedornotchecker();
    }
}
function down(){
    if(car_y<330){
    car_y += 10;
    console.log("(down arrow) Current y coordinate of the green car is "+car_y);
    uploadBackground();
    uploadgreencar();
    loosedornotchecker();
    }
}
function left(){
    if(car_x>0){
    car_x -= 10;
    console.log("(left arrow) Current x coordinate of the green car is "+car_x);
    uploadBackground();
    uploadgreencar();
    loosedornotchecker();
    }
}
function right(){
    if(car_x<600){
    car_x += 10;
    console.log("(right arrow) Current x coordinate of the green car is "+car_x);
    uploadBackground();
    uploadgreencar();
    loosedornotchecker();
    }
}
function loosedornotchecker(){
    if(car_y==70||car_y==330||car_x==0||car_x==600){
    document.getElementById("loose_or_win").innerHTML="You loose."
    console.log("You loose!!");
    }
    if(car_y==150 & car_x==360){
    document.getElementById("loose_or_win").innerHTML="Hurray you won the game!!!."
    console.log("You won!!");
    }
    if(car_x==10 & car_y==250){
    document.getElementById("loose_or_win").innerHTML="You loose."
    console.log("You loose!!");
    }
    if(car_x==120 & car_y==250){
        document.getElementById("loose_or_win").innerHTML="You loose."
        console.log("You loose!!");
        }
    if(car_x==240 & car_y==240){
        document.getElementById("loose_or_win").innerHTML="You loose."
        console.log("You loose!!");
        }
    if(car_x==480 & car_y==230){
        document.getElementById("loose_or_win").innerHTML="You loose."
        console.log("You loose!!");
        }
    if(car_x==590 & car_y==140){
        document.getElementById("loose_or_win").innerHTML="That's the wrong parking lot."
        console.log("That's the wrong parking lot.");
        }
}