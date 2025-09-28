imageMode(CENTER);           
var x1 = -10;   
var x2 = 685;  
var img = getImage("https://st2.depositphotos.com/5479200/11768/v/380/depositphotos_117682464-stock-illustration-desert-game-background.jpg");
var img2 = getImage("https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?cs=srgb&dl=pexels-francesco-ungaro-998653.jpg&fm=jpg");
var img3 = getImage("https://elements-resized.envatousercontent.com/elements-video-cover-images/files/9aa5c292-63f5-4c31-a0b6-b9a2f51fcd14/inline_image_preview.jpg?w=1200&h=630&cf_fit=crop&q=85&format=jpeg&s=b72ce99392dcc9c2b81b1e37dc79d6450b084190b69804151a632ba7d37a165d");//background image in the game
var characterChoice = function(chooseCharacter, x, y){ 
var drawAvatar1 = function(avatarObject){ 
  var ratio = avatarObject.h/100     
    stroke(0,0,0);   
   fill(245, 200, 140); // Skin color
    ellipse(avatarObject.x+(ratio*37), avatarObject.y+(ratio*75), (ratio*20), (ratio*30)); // Left ear
   ellipse(avatarObject.x+(ratio*113), avatarObject.y+(ratio*75), (ratio*20), (ratio*30)); // Right ear
 
    // Draw head
    fill(245, 200, 140); // Skin color
    ellipse(avatarObject.x+(75*ratio), avatarObject.y+(75*ratio), 80*ratio, 100*ratio); // Head
 
  //eyebrows
  line(avatarObject.x+(51*ratio),avatarObject.y+(61*ratio),avatarObject.x+(68*ratio),avatarObject.y+(62*ratio));
  line(avatarObject.x+(82*ratio),avatarObject.y+(62*ratio),avatarObject.x+(99*ratio),avatarObject.y+(61*ratio));
  line(avatarObject.x+(51*ratio),avatarObject.y+(61*ratio),avatarObject.x+(45*ratio),avatarObject.y+(64*ratio));
   line(avatarObject.x+(99*ratio),avatarObject.y+(61*ratio),avatarObject.x+(106*ratio),avatarObject.y+(63*ratio));
  
// Draw eyes
    fill(255);  // White of the eye
    ellipse(avatarObject.x+(60*ratio), avatarObject.y+(69*ratio), 17*ratio, 9*ratio); // Left eye
    ellipse(avatarObject.x+(90*ratio), avatarObject.y+(69*ratio), 17*ratio, 9*ratio); // Right eye
    fill(0);  // Pupil
    ellipse(avatarObject.x+(60*ratio), avatarObject.y+(69*ratio), 5*ratio, 5*ratio); // Left pupil
    ellipse(avatarObject.x+(90*ratio), avatarObject.y+(69*ratio), 5*ratio, 5*ratio); // Right pupil
  
  stroke(0);
  fill(255, 220, 200); //left eyelid
  arc(avatarObject.x+(60*ratio), avatarObject.y+(67*ratio), 17*ratio, 6*ratio, PI, TWO_PI);
  
  stroke(0);
  fill(255, 220, 200); //right eyelid
  arc(avatarObject.x+(90*ratio), avatarObject.y+(67*ratio), 17*ratio, 6*ratio, PI, TWO_PI);

    // Draw nose
    stroke(0);
  fill(255,220,200);
  triangle(avatarObject.x+(75*ratio),avatarObject.y+(80*ratio),avatarObject.x+(73*ratio),avatarObject.y+(92*ratio),avatarObject.x+(87*ratio),avatarObject.y+(90*ratio));

      stroke(0);
    noFill();
    bezier(avatarObject.x+(60*ratio), avatarObject.y+(100*ratio), avatarObject.x+(61*ratio), avatarObject.y+(107*ratio), avatarObject.x+(100*ratio), avatarObject.y+(104*ratio), avatarObject.x+(95*ratio),avatarObject.y+(100*ratio)); // Bézier smile
 
  //hair 
  line(avatarObject.x+(30*ratio),avatarObject.y+(70*ratio),avatarObject.x+(42*ratio),avatarObject.y+(50*ratio));
  line(avatarObject.x+(33*ratio),avatarObject.y+(70*ratio),avatarObject.x+(42*ratio),avatarObject.y+(50*ratio));
  line(avatarObject.x+(121*ratio),avatarObject.y+(69*ratio),avatarObject.x+(108*ratio),avatarObject.y+(50*ratio));
line(avatarObject.x+(122*ratio),avatarObject.y+(68*ratio),avatarObject.x+(111*ratio),avatarObject.y+(52*ratio));  

    // Draw trucker hat
  fill(0, 0, 0); // Black hat
    arc(avatarObject.x+(75*ratio), avatarObject.y+(45*ratio), 68*ratio, 66*ratio, PI, TWO_PI); // Top part of hat
  
  fill(255,204,0);
  arc(avatarObject.x+(75*ratio), avatarObject.y+(39*ratio), 53*ratio, 49*ratio, PI, TWO_PI); // yellow front panel
   
  fill(255, 204, 0); // Red initials
    textSize(7*ratio);
    text("ZACATLAN", avatarObject.x+(57*ratio), avatarObject.y+(31*ratio));
    
    fill(0); // Hat brim
  arc(avatarObject.x+(75*ratio), avatarObject.y+(50*ratio), 81*ratio, 25*ratio, PI, TWO_PI);
   // rect(52, 39, 80, 10); // Brim of the hat

    // Draw shirt
    fill(avatarObject.shirtColor); //shirt
    rect(avatarObject.x+(ratio*35), avatarObject.y+(120*ratio), 80*ratio, 30*ratio); // Body of the shirt
    triangle(avatarObject.x+(35*ratio), avatarObject.y+(130*ratio), avatarObject.x+(115*ratio), avatarObject.y+(120*ratio), avatarObject.x+(75*ratio), avatarObject.y+(150*ratio)); // Bottom part of the shirt

    // Draw initials
    if (avatarObject.initials){
  fill(255, 255, 255); // Red initials
    textSize(16*ratio);
    text("AL", avatarObject.x+(87*ratio), avatarObject.y+(140*ratio));
    }
  // Your initials on the shirt
   }

var drawAvatar = function(avatar) {   
    var x = avatar.x;
    var y = avatar.y;
    var H = avatar.h;
    var shirtColor = avatar.shirtColor;
    var initials = avatar.initials; 

  //neck 
    var drawNeck = function() {
        fill(140, 50, 50);
        rect(194 * H + x, 117 * H + y, 11 * H, 13 * H); 
    }; 
    drawNeck();

  //legs
    var drawLeg = function() {
        line(190 * H + x, 180 * H + y, 190 * H + x, 230 * H + y);//left
        line(210 * H + x, 180 * H + y, 210 * H + x, 230 * H + y);//right
    };
    drawLeg();

  //arms
    var drawArms = function() {
        line(185 * H + x, 135 * H + y, 160 * H + x, 180 * H + y);//left
        line(216 * H + x, 135 * H + y, 240 * H + x, 180 * H + y);//right
    };
    drawArms();

  //pants
    var drawPants = function() {
        fill(165, 5, 15);
        rect(200 * H + x, 170 * H + y, 15 * H, 20 * H);//left
        rect(184 * H + x, 170 * H + y, 15 * H, 20 * H);//right
    };
    drawPants();

  //torso
    var drawTorso = function() {
        fill(shirtColor);
        ellipse(200 * H + x, 153 * H + y, 40 * H, 55 * H);
    };
    drawTorso(); 
 
  //shoulders
    var drawShoulders = function() {
        triangle(200 * H + x, 97 * H + y, 195 * H + x, 105 * H + y, 205 * H + x, 105 * H + y);// nose

        fill(0, 0, 0);
        ellipse(187 * H + x, 97 * H + y, 3 * H, 3 * H);//left pupil
        ellipse(211 * H + x, 97 * H + y, 3 * H, 3 * H);//right pupil
        noFill();
        stroke(110, 20, 20);
        fill(225, 25, 105);
        ellipse(200 * H + x, 116 * H + y, 16 * H, 5 * H); //mouth
        line(192 * H + x, 116 * H + y, 207 * H + x, 116 * H + y); //lips

        fill(150, 50, 50);
        ellipse(219 * H + x, 98 * H + y, 2 * H, 14 * H);//left ear
        ellipse(179 * H + x, 98 * H + y, 2 * H, 14 * H);//right ear
    };
    drawFace();

    var drawCollar = function() {
        noStroke();
        triangle(194 * H + x, 125 * H + y, 200 * H + x, 135 * H + y, 205 * H + x, 125 * H + y);
        if (initials) {
            fill(50, 50, 170);
            textSize(12 * H);
            text("T.S", 200 * H + x, 160 * H + y);
        }
    };
    drawCollar();

    var drawHat = function() {

    this.x = x;
    this.y = y;
    this.height = height;
  } 
  draw() {
    fill(0, 100, 200);
    rect(this.x, this.y, this.width, this.height, 5);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.label, this.x + this.width / 2, this.y + this.height / 2);
  }
  
  isClicked(mouseX, mouseY) {
    return mouseX > this.x && mouseX < this.x + this.width &&
           mouseY > this.y && mouseY < this.y + this.height;
  }
}
//buttons
var resetGame = function() { 
};



var buttonY =240;
var buttonWidth = 100;
/*game states: 
0 = Start screen
1 = game screen
2 = Lose screen
3 = help screen
4 = choose character
var chooseCharacter = 0; // Initialize with no character
mousePressed = function() {
    // Character selection logic
    if (gameState === 4) { // Assuming gameState 4 is for character selection
        for (var i = 0; i < charX.length; i++) {
            if (mouseX >= charX[i] && mouseX <= charX[i] + charWidth[i] &&
                mouseY >= charY[i] && mouseY <= charY[i] + charHeight[i]) {
                chooseCharacter = i + 1; // Sets chooseCharacter based on the box selected
               // println(chooseCharacter);
              gameState = 1; // Transition to game state
              player = new Bird(chooseCharacter); 
            }
        }
    } else if (gameState === 0) {
        if (startButton.isClicked(mouseX, mouseY)) {
            gameState = 4; // Transition to character selection
        } else if (helpButton.isClicked(mouseX, mouseY)) {
            gameState = 3; // Transition to help screen
        }
    } else if (gameState === 2) {
        if (replayButton.isClicked(mouseX, mouseY)) {
            resetGame(); //transition to home screen
        }
    } else if (gameState === 3) {
        if (continueButton.isClicked(mouseX, mouseY)) {
            gameState = 0; // Return to main menu
        }
    }
};

var resetGame = function() {
    player = new Bird(chooseCharacter); // Pass the chosen character
    pipes = [];
    gameState = 0;
};
//game character avatar properties

var player = new Bird();
  frameRate(f);
    image(img2, 110, 200, 750, 400); 
    textAlign(CENTER, CENTER);
    fill(170,110,10);
    text("Cactus Jump", width/2, 110); 
    text("made by Timmy and Alan", width/2, 20 + 140);
    
    // Draw start and help buttons
    startButton.draw();
    helpButton.draw();
    
    fill(255);//high score logic

    // Grass animation
    for (var m = 0; m < 60; m++) {
        drawGrassBlades(2 - grassX + (m * 11), 401, 10, 24, 1);
    }
    grassX += 2;
    if (grassX > 170) {
        grassX = 0;
    }
    
    // Cloud animation
    for (var m = 0; m < 15; m++) {
        drawCloud(10 - cloudX + (m * 60), 100, 0.5); // reduced scale
    }
    cloudX += 3;
    if (cloudX > 58) { // screen width + a bit more
        cloudX = 0;
    }
    
    text("High Score: " + currentHighScore, width / 2, height / 2 + 100);
    textSize(20);
    textSize(15);
    noStroke();
    // sand animation
    textFont("fantasy");
    for (var i = 0; i < xPositions.length; i++) {
        fill(colors[i]);
    textSize(50);
        ellipse(xPositions[i], yPositions[i], 10, 10);
    //home screen
  if (gameState === 0) {
background(247, 221, 162, 255);
        xPositions[i] += -5;
var f = 100;   
// Drawing the avatar and applying gravity 
        if (xPositions[i] < 0) {
var draw = function () {
            xPositions[i] = 400;
class Bird {
    constructor(chooseCharacter) { 
}
}
        this.x = 100; //default x position
        } 

    return false; // No collision
        this.score = 0; // holds game score
    }  
    //  game logic
        }
    }
        this.isJumping = false; //var for jump logic
  image(img, x1, 200, 750, 400);
    //animated background image
    image(img, x2, 200, 750, 400);
} //game screen
        this.chooseCharacter = chooseCharacter; //determinse the character

        if (chooseCharacter === 1) {
            this.y = 250;  //  adjustment for char 1
  else if (gameState === 1) {

        } else if (chooseCharacter === 2) {
        if (birdY + birdHeight > height - this.bottom - 40 && birdY < height - this.bottom) {
            return true;

    // Right arm collision
    x1 -= 5;  
   x2 -= 5;
 
    if (birdX + birdWidth > this.x + this.w && birdX < this.x + this.w + 10) {
            this.y = 230;  //  adjustment for char 2
        } else {
            this.y = 300;
    if (x1 <= -750) {
        x1 = x2 + 750;
        }

    }
    if (x2 <= -750) {
        x2 = x1 + 750;
        }
    }
        this.jumpStartY = this.y;
//determines when to run jump logic
};

    }  
  //players score on game screen
            return true;


  fill(0, 0, 0);
  textSize(20);
class Pipe {
    if (birdX + birdWidth > this.x - 10 && birdX < this.x) {
        if (birdY + birdHeight > height - this.bottom - 40 && birdY < height - this.bottom) {

  textAlign(CENTER);
  text("Score = " + player.score, 50, 20);
    // Left arm collision
  constructor() {
    this.bottom = 75; // Set the bottom to a fixed value of 75
        }
    }
    this.w = 20; // Width of the cactus

    this.speed = 5;
    if(this.score === 5){
    player.down();
    player.draw();
  // Handle input for jumping
    }
        if (birdY + birdHeight > height - this.bottom) {
            return true; // Collision detected with pipe body
  } 
    if (keyIsPressed && key === ' ') {
      player.up();
    }
     player.down()  
  player.draw();

  // Creates new pipes every 100 frames
  if (frameCount % 100 === 0) {
    pipes.push(new Pipe());
    f++ ;
    player.score++ 
  }
    
//draws pipes on game screen
 for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].draw();
    pipes[i].update();

    // Use both bird.x and bird.y to check collision
    if (pipes[i].checkCollision(player.x, player.y)) {
        gameState = 2;  // Change state to lose if a collision is detected
    }
}
 
    } 
  //you loose screen
     if (gameState === 2) {
        // show the "you lose" message
       image(img3, 160, 200, 750, 400); 
       textSize(40);
        textAlign(CENTER, CENTER);
        fill(255, 0, 0);
        text("You Lose!", width/2, height/2);
      textSize(15)
      text ("score: " + player.score, width/2, 30+height/2)
       // Draw replay the button
        fill(0, 100, 200);
     replayButton.draw();
    } 
  var newScore = player.score  
  if (newScore > currentHighScore){currentHighScore = newScore}

    //help screen
else if (gameState === 3 ){
  //show the how to play screen
//stroke(0,0,0); 
background(247, 221, 162, 255);
textSize(30);
    textAlign(CENTER,CENTER);
    fill(0);
    text("HOW TO PLAY", width/2, 80);
      textSize(15);
     text ("1. Hit space to jump", width/2,120) 
     text ("2. Avoid Obstacles", width/2,150)  
    text ("3. Difficulty increases every 10 points", width/2,180) 
    textSize(20); 
  fill(17, 120, 236) 
   continueButton.draw();
for (var m = 0; m < 60; m++) {
        drawGrassBlades(2-grassX + (m * 11), 401, 10, 24, 1);
    }
    grassX += 2;
    if (grassX > 170) {
        grassX = 0;
    }
     //cloud animation
    for (var m = 0; m < 15; m++) {
        drawCloud(10-cloudX + (m * 60), 100, 0.5); // reduced scale
    } 
    
    cloudX += 3;
    
    if (cloudX > 58) { // screen width + a bit more
        cloudX = 0;
    }
     noStroke();
     //stars
    for (var i = 0; i < xPositions.length; i++) {
          fill(colors[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        xPositions[i] += -5;
      if (xPositions[i]< 0) {xPositions[i]= 400} 
    }  
}
//choose your character screen
 else if(gameState === 4){
 background(247, 221, 162, 255);
  textSize(30);
    textAlign(CENTER,CENTER);
    fill(0,0,0);
    text("Choose Your Character", width/2, 80);
  
    for (var i = 0; i < charX.length; i++) {
      fill(0, 0, 0);
        rect(charX[i], charY[i], charWidth[i], charHeight[i]);
       characterChoice(2, charX[0] + 55, charY[0] + -37);
    // Draw character 2
    characterChoice(1, charX[1] + -115, charY[1] + 9);
      //draw character 3
      characterChoice(3, charX[1] + -67, charY[1] + 174);
      //draw character 4
        characterChoice(4, charX[1] + 55, charY[1] + 170);  
    }
    

// characterChoice(1); 
// characterChoice(2);  
  
for (var m = 0; m < 60; m++) {
        drawGrassBlades(2-grassX + (m * 11), 401, 10, 24, 1);
    }
    grassX += 2;
    if (grassX > 170) {
        grassX = 0;
    }
     //cloud animation
    for (var m = 0; m < 15; m++) {
        drawCloud(10-cloudX + (m * 60), 100, 0.5); // reduced scale
    }
    
    cloudX += 3;
    
    if (cloudX > 58) { // screen width + a bit more
        cloudX = 0;
    }
     noStroke();
     //stars 
    for (var i = 0; i < xPositions.length; i++) {
          fill(colors[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        xPositions[i] += -5;
      if (xPositions[i]< 0) {xPositions[i]= 400} 
    }  
}
};   

    fill(34, 139, 34);
    noStroke(); 

    if (birdX + birdWidth > this.x && birdX < this.x + this.w) {
    // Main body
        birdWidth = 30;  // Default width

    // Collision check
    rect(this.x, height - this.bottom, this.w, -this.bottom);

    }
    // Left arm
    rect(this.x - 10, height - this.bottom - 40, 10, 20);
        birdHeight = 30; // Default height

    } else {
    // Right arm
    rect(this.x + this.w, height - this.bottom - 40, 10, 20);

    // Top of the cactus
    ellipse(this.x + this.w / 2, height - this.bottom, this.w, 10);
        birdHeight = 60; // Adjust height for character 2
  }
        birdWidth = 40;  // Adjust width for character 2

  update() {
    this.x -= this.speed; // Move the cactus to the left
  }
  //determin if you hit cactus
checkCollision(birdX, birdY) {
    var birdWidth; 
    var birdHeight;

    } else if (chooseCharacter === 2) {  // Customize for character 2
    if (chooseCharacter === 1) {  // Customize for character 1
        birdWidth = 60;  // Adjust width for character 1
        birdHeight = 90; // Adjust height for character 1
  draw() { 
      this.speed === currentSpeed; 
    this.x = width;

var pipes = [];
    player.up();
  }
keyPressed = function() {
  if (key === ' ') {
        }
    }
}

            this.y = 10;
        }
        if (this.y < 10) {
    draw() { //spawns character
        var maxHeight = height - 95;
        if (this.y > maxHeight) {
            this.y = maxHeight;
        }
        characterChoice(this.chooseCharacter, this.x, this.y);
        //println("Drawing character with y position: " + this.y);

    }
        this.jumpPeakY = this.y - 130;

            }
        //println("Initial y position set to: " + this.y);
                this.y += 3;
    }
            if (this.y < this.jumpStartY) {
//jump logic
        } else {
    up() {
        if (!this.isJumping && this.y === this.jumpStartY) {
            }
            this.isJumping = true;
        }
                this.isJumping = false;
    }
            } else {
                this.y -= 3;
            if (this.y > this.jumpPeakY) {
        if (this.isJumping) {

    down() {
*/
var buttonHeight = 40; 
// Button parameters
var buttonX = 150;
    pipes = [];
    gameState = 0;
    player = new Bird();
stroke(0,0,0)  
// reset game
  colors.push(color(227, 161, 82, 255));  
}
   yPositions.push(round(random(30,370)))
var startButton = new Button(width / 2 - 140, height / 2 + 40, 100, 40, "Start");
var helpButton = new Button(width / 2 + 40, height / 2 + 40, 100, 40, "Help");
for (i=1; i<=numDrops; i++){
  xPositions.push(round(random(1,390)))
}
//stars
var continueButton = new Button(width / 2 - 50, height / 2 + 40, 100, 40, "Back");
var replayButton = new Button(150, 240, 100, 40, "Home");
// variables for characters 
    noStroke();
    ellipse(x - 20,-93 + y + 10, 50 * scale, 40 * scale);  
    ellipse(x + 15,-93 + y + 10, 50 * scale, 40 * scale);   
    fill(255); // white color for the cloud
var charX = [80, 200, 80, 200];
function drawCloud(x, y, scale) {
    ellipse(x, -93+y + 15, 55 * scale, 30 * scale); 
var charY = [120, 120, 240, 240];
    ellipse(x, -91+y, 60 * scale, 34 * scale); 
var charWidth = [100, 100, 100, 100];

//  cloud
} 
var charHeight = [100, 100, 100, 100];

//  grass
    }
        triangle(bladeX, y, bladeX + bladeWidth / 2, y - height, bladeX + bladeWidth, y);
        var bladeX = x + i * bladeWidth;
function drawGrassBlades(x, y, width, height, bladeCount) {
    fill(34, 139, 34); 
    var bladeWidth = width / bladeCount;    
    for (var i = 0; i < bladeCount; i++) {
    fill(255);
//logic for bottons
    this.label = label;
    this.width = width;
class Button {
  constructor(x, y, width, height, label) {
//information for buttons
var numDrops = 25; //determines num of sand
 var currentHighScore = 0; //high score feature
var yPositions = []; //y postiton of the drops
var colors = [] //determintes the color fo the sand
var cloudX = 0;
var xPositions = []; //x position of the drops
        fill(225, 25, 105);
        stroke(215, 15, 95);
var gameState=0; // used to determine splash screen
var grassX = 0; //used to hold grass x positon value
// var STATE_HELP = 3;
 // determines what character is chosen
        ellipse(200 * H + x, 87 * H + y, 75 * H, 10 * H);
// var STATE_GAME = 1;
// var STATE_LOSE = 2;
        rect(179 * H + x, 69 * H + y, 41 * H, 18 * H);
};//contains information about characters
// var STATE_SPLASH = 0;
    };
    drawHat();
};
        image(getImage("avatars/mr-pants"), avatarMrPants.x, avatarMrPants.y, avatarMrPants.h, avatarMrPants.h);
    }  


if (chooseCharacter === 2){
            y: y
        };
            h: 60,
            x: x,
            y: y
  var avatar = {
  h: 0.55,
    } else if (chooseCharacter === 4) { // New character "mr-pants"
        var avatarMrPants = {
            x: x,
  x: x,
  y: y,
            h: 60,
        image(getImage("avatars/marcimus"), avatarMarcimus.x, avatarMarcimus.y, avatarMarcimus.h, avatarMarcimus.h);
  shirtColor: color(0, 102, 204),
        };
        var avatarMarcimus = {
  initials: true
  else if (chooseCharacter === 3) { 
};

drawAvatar(avatar); 
}  
}
else if (chooseCharacter === 1) {

drawAvatar1(avatar1);
};
  initials: true
  x: x,
  shirtColor: color(0, 102, 204),
  y: y,
  h: 50,
  var avatar1 = {

