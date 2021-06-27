canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car_image = "th.jpg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.jpg";
car2_x = 10;
car2_y = 100;

background_image = "racetrack.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadcar1() {
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    
    keyPressed = e.keycode;
    console.log(keyPressed);

    if(keyPressed == '38')
     { 
         car1_up(); 
    console.log("up arrow key"); 
}
    if(keyPressed == '40')
     {
          down(); 
          console.log("down"); 
    }
    if(keyPressed == '37')
     {
          left(); 
          console.log("left"); 
    }
    if(keyPressed == '39')
     {
          right(); 
          console.log("right"); }

}

function up() 
{ 
    if(car1_y >=0)
    {
    car1_y = car1_y - 10; 
    console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground();
    uploadrover(); 
    }
} 

    function down()
{
    if(car1_y <=500)
    {
        car1_y = car1_y + 10;
     console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground();
    uploadrover(); 
    } 
}

    function left() 
    { 
    if(car1_x >=0)
    {
        car1_x = car1_x - 10; 
    console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground();
    uploadrover(); 
    } 
}

    function right() 
{
    if(car1_x <=700)
    {
        car1_x = car1_x + 10; 
    console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground();
    uploadrover(); 
    } 
}

if(car1_x > 700) 
{
    console.log("car1 Won");
    document.getElementById('game_staus')
}