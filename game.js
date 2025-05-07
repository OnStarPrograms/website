const divCanvas = document.getElementById("body");

const canvas = document.getElementById("doom");
const ctx = canvas.getContext("2d");
let width = canvas.width; // Width of the scene
let height = canvas.height; // Height of the scene
const SPRITE_WIDTH = 90;
const SPRITE_HEIGHT = 110;
const BORDER_WIDTH = 10;
const SPACING_WIDTH = 10;
//var spriteSheetURL = 'https://onstarprograms.github.io/website/data/NewPiskel.png';
// create a new image from the spritesheet
var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;

var secondImage = new Image();
secondImage.src = secondSprite;
secondImage.crossOrigin = true;



var candleSprite = [new Image(), new Image(), new Image()];
let candleSprite1 = 'https://onstarprograms.github.io/website/data/C300-1.png'; 
let candleSprite2 = 'https://onstarprograms.github.io/website/data/C300-2.png'; 
let candleSprite3 = 'https://onstarprograms.github.io/website/data/C300-3.png'; 
candleSprite[0].src = candleSprite1;
candleSprite[1].src = candleSprite2;
candleSprite[2].src = candleSprite3;



var handTapping = [new Image(), new Image(), new Image(), new Image(), new Image()];
 
let hand1 = 'https://onstarprograms.github.io/website/data/frame_0_delay-0.17s.gif'; 
let hand2 = 'https://onstarprograms.github.io/website/data/frame_1_delay-0.17s.gif'; 
let hand3 = 'https://onstarprograms.github.io/website/data/frame_2_delay-0.17s.gif';  
let hand4 = 'https://onstarprograms.github.io/website/data/frame_3_delay-0.17s.gif'; 
let hand5 =  'https://onstarprograms.github.io/website/data/frame_4_delay-0.17s.gif'; 

handTapping[0].src = hand1; 
handTapping[1].src = hand2;
handTapping[2].src = hand3;
handTapping[3].src = hand4;
handTapping[4].src = hand5;


var heartTapping = [new Image(), new Image(), new Image(), new Image(), new Image()];
 
let heart1 = 'https://onstarprograms.github.io/website/data/heart/frame_0_delay-0.2s.gif'; 
let heart2 = 'https://onstarprograms.github.io/website/data/heart/frame_1_delay-0.1s.gif'; 
let heart3 = 'https://onstarprograms.github.io/website/data/heart/frame_2_delay-0.1s.gif';  
let heart4 = 'https://onstarprograms.github.io/website/data/heart/frame_3_delay-0.1s.gif'; 
let heart5 =  'https://onstarprograms.github.io/website/data/heart/frame_4_delay-0.1s.gif'; 

heartTapping[0].src = heart1; 
heartTapping[1].src = heart2;
heartTapping[2].src = heart3;
heartTapping[3].src = heart4;
heartTapping[4].src = heart5;


var CakeTapping = [new Image(), new Image(), new Image(), new Image(), new Image()];
 
let Cake1 = 'https://onstarprograms.github.io/website/data/Cakes/AngleFood_Cake_NO_OUTLINE.png'; 
let Cake2 = 'https://onstarprograms.github.io/website/data/Cakes/Rainbow_Cake_NO_OUTLINE.png'; 
let Cake3 = 'https://onstarprograms.github.io/website/data/Cakes/Funfetti_Cake_NO_OUTLINE.png';  
let Cake4 = 'https://onstarprograms.github.io/website/data/Cakes/Carrot_Cake_NO_OUTLINE.png'; 
let Cake5 =  'https://onstarprograms.github.io/website/data/Cakes/Strawberry_Cake_NO_OUTLINE.png'; 

CakeTapping[0].src = Cake1; 
CakeTapping[1].src = Cake2;
CakeTapping[2].src = Cake3;
CakeTapping[3].src = Cake4;
CakeTapping[4].src = Cake5;




let timer = 0;
setInterval(() => {
  timer++;
}, 300);


const canvas_mouse = document.getElementById('doom');

function getMousePos(canvas_mouse, event) {
  const rect = canvas_mouse.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
let mousePos = {x:0, y:0};

canvas_mouse.addEventListener('mousemove', (event) => {
  mousePos = getMousePos(canvas_mouse, event);
  const message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
  // Update the coordinates somewhere on the page for visualization
  // For example, you can update the text content of a <p> element:
  // document.getElementById("coordinates").textContent = message;
  console.log(message);
});



function spritePositionToImagePosition(row, col) {
    return {
        x: (
            BORDER_WIDTH +
            col * (SPACING_WIDTH + SPRITE_WIDTH)
        ),
        y: (
            BORDER_WIDTH +
            row * (SPACING_WIDTH + SPRITE_HEIGHT)
        )
    }
}

class Table{
  #scary = false;
  #win_1 = false;
  #win_2 = false;
  constructor(context){
    this.drawable = context;
  }

  setScary(){
    this.#scary = true;
  }
  
  setWin_1(){
    this.#scary = true;
    this.#win_1 = true;
  }
  setWin_2(){
    this.#win_2 = true;
  }

  draw(){
    this.drawable.fillStyle = 'rgba(0,0,0,100)';
    this.drawable.fillRect(0,0,width,height);
    if (this.#scary == false){

      this.drawable.beginPath();
      this.drawable.moveTo(0, height); // Move to the starting point (bottom-left corner)
      this.drawable.lineTo(width, height); // Draw the bottom base
      this.drawable.lineTo(width-60, 0);  // Draw the right side
      this.drawable.lineTo(50, 0);   // Draw the top base
      this.drawable.closePath();    // Close the path (draw the left side)

      this.drawable.stroke(); // Draw the outline of the trapezoid

      this.drawable.fillStyle = 'rgba(104,71,45,100)';
      this.drawable.fill();
      
      this.drawable.beginPath();
      this.drawable.moveTo(10, height-30); // Move to the starting point (bottom-left corner)
      this.drawable.lineTo(width-12, height-30); // Draw the bottom base
      this.drawable.lineTo(width-50, 20);  // Draw the right side
      this.drawable.lineTo(40, 20);   // Draw the top base
      this.drawable.closePath();    // Close the path (draw the left side)

      this.drawable.stroke(); // Draw the outline of the trapezoid

      this.drawable.fillStyle = 'rgba(204,0,0,100)';
      this.drawable.fill();
     
      this.drawable.drawImage(
        candleSprite[timer%3],
        0,
        0,
        candleSprite[timer%3].width,
        candleSprite[timer%3].height,
        40,
        0,
        (SPRITE_WIDTH+90)/3,
        SPRITE_HEIGHT/3
    );
         this.drawable.drawImage(
        candleSprite[(timer+1)%3],
        0,
        0,
        candleSprite[timer%3].width,
        candleSprite[timer%3].height,
        width-100,
        height/2-10,
        (SPRITE_WIDTH+90)/3,
        SPRITE_HEIGHT/3
    );
      if (this.#win_2 == true){
        this.drawable.drawImage(
        CakeTapping[(timer)%5],
        0,
        0,
        CakeTapping[0].width,
        CakeTapping[0].height,
        width-100,
        height/2-10,
        (SPRITE_WIDTH+90)/3,
        SPRITE_HEIGHT/3
    );
      }
      
    }
    else if (this.#win_1 == true) {

     this.drawable.drawImage(
        candleSprite[(timer+1)%3],
        0,
        0,
        candleSprite[timer%3].width,
        candleSprite[timer%3].height,
        width/2-30,
        height/2-20,
        (SPRITE_WIDTH+90)/3,
        SPRITE_HEIGHT/3
    ); 

    this.drawable.font = "48px serif";
    this.drawable.fillStyle = "white";
    this.drawable.fillText("The Tower", 10, 50);
    this.drawable.fillText("   will     win", 10, 90);
    }
    
    else {

     this.drawable.drawImage(
        candleSprite[(timer+1)%3],
        0,
        0,
        candleSprite[timer%3].width,
        candleSprite[timer%3].height,
        width/2-30,
        height/2-20,
        (SPRITE_WIDTH+90)/3,
        SPRITE_HEIGHT/3
    ); 

    this.drawable.font = "48px serif";
    this.drawable.fillStyle = "white";
    this.drawable.fillText("The Tower", 10, 50);
    this.drawable.fillText("Calls", 10, 90);
     }
  }
}


class Player{
  #hand = ['fire', 'sword', 'flag', 'health'];
  #used = [false, false, false, false];
  #usedTimer = [0,0,0,0]; //used to set a timeout for used items
  #secondaryHand = [];
  #scary = false;
  #defend = 1;
  #attack = 1;
  #health = 5;
  #selection = 0;
  #block = false;
  constructor(context){
    this.drawable = context;
    this.choice = -1;
  }

  isUsed(accessor){
    return this.#used[accessor];
  }

  attackPower(){
    return this.#attack;
  }

  increasePower(){
    this.#attack += 1;
  }

  increaseDefense(){
    this.#defend += 1;
  }

  deactivate(_index){
    for (let index = 0; index < this.#used.length; index++) {
      const element = this.#usedTimer[index];
      if (element > 0){
        this.#usedTimer[index] = (element+1)%2;
      }
      if (element == 0){
        this.#used[index] = false;
      }
    }
    this.#used[_index] = true;
    if (this.#usedTimer[_index]==0){
      this.#usedTimer[_index]=1;
    }
    console.log(this.#used);
  }
  get health(){
    return this.#health;
  }
  
  loseHealth(amount){
    divCanvas.classList.toggle('shake');
    let timer1 = setTimeout(() => {
      divCanvas.classList.toggle('shake');
      clearTimeout(timer1);
    }, 500);
    let Amount = amount;
    if (this.#block == true)
      Amount -= this.#defend;
    Amount = Math.max(0, Amount);
    //this.#health-=Amount;
    this.#block = false;
  }

  activateBlock(){
    this.#block = true;
  }
  gainHealth(amount){
    this.#health+=amount;
  }
  
  giveCard(card){
    this.#hand.push(card);
  }

  setChoice(){
      this.choice = this.#selection;
  }
  
  choiceAccessor(){
    return this.choice;
  }

  choiceCard(){
    return this.#hand[this.choice];
  }

  makeScaryHand(){
    this.#secondaryHand = this.#hand;
    this.#hand = ['tower'];
    this.#scary = true;
  }
  endScaryHand(){
    this.#hand = [];
  }
  getScary(){
    return this.#scary;
  }
  setScary(){
    this.#scary = true;
  }

  drawHand(){
    var posX = 20;
    var posY = height-40;
    let prevPos = posY;
    this.#selection = -1;
    for (let index = 0; index < this.#hand.length; index++) {
      const element = this.#hand[index];
      if (element == 'sword'){
        var position = spritePositionToImagePosition(this.#scary, 1);
      }
      else if (element == 'flag'){
        var position = spritePositionToImagePosition(this.#scary, 0);
      }
      else if (element == 'fire'){
        var position = spritePositionToImagePosition(this.#scary, 2);
      }
      else if (element == 'health'){
        var position = spritePositionToImagePosition(2, this.#scary);
      }
      else {
        var position = spritePositionToImagePosition(2, 2);
        
      }

      posY = prevPos;
      if (mousePos.x < posX+40 && mousePos.x > posX && (mousePos.y < posY+150 && mousePos.y > posY+50)){
        this.#selection = index;
      }

      if (this.#selection == index){
        prevPos = posY;
        posY-=10;
      }
     
      if (this.choice == index){
        posY = prevPos;
        prevPos = posY;
        posY-=20;

      }
      if (this.#used[index] == false){
        ctx.drawImage(
          image,
          position.x,
          position.y,
          SPRITE_WIDTH,
          SPRITE_HEIGHT,
          posX,
          posY,
          (SPRITE_WIDTH+90)/4,
          SPRITE_HEIGHT/4
        );
      }
      else{
        ctx.drawImage(
          secondImage,
          spritePositionToImagePosition(0,this.#scary+1).x,
          spritePositionToImagePosition(0,this.#scary+1).y,
          SPRITE_WIDTH,
          SPRITE_HEIGHT,
          posX,
          height-40,
          (SPRITE_WIDTH+80)/4,
          SPRITE_HEIGHT/4
        );
      }
      posX+=40;
    } 
  }
  drawHeart(){
    if (this.#health <= 0){
      //call the lose functioon
      myEnemy.setScary();
    }
    if (this.#scary == false){
    this.drawable.drawImage(
        heartTapping[timer%(this.#health)],
        0,
        0,
        heartTapping[0].width,
        heartTapping[0].height,
        width-80,
        height-45,
        (SPRITE_WIDTH+80)/3,
        (SPRITE_HEIGHT-10)/3
    );

    };
  }
}


class Enemy{
  #width_back = 200;
  #state = 'idle';
  #revealed = false;
  #choice;
  #scary = false;
  #takenAction = false;
  #health = 10;
  #favor = 0;
  #skipped = false;
  #damage = 1;
  constructor(context){
    this.drawable = context;
  }


  gainHealth(variables){
    this.#health+=variables;
  }

  drawHand(){
    if (this.#revealed == false){
      ctx.drawImage(
        secondImage,
        spritePositionToImagePosition(0,1).x,
        spritePositionToImagePosition(0,1).y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        width/2+15+200-this.#width_back,
        32,
        (SPRITE_WIDTH+80)/4,
        SPRITE_HEIGHT/4
    );

    }
    if (this.#revealed == true){
      let flag = true;
      const element = this.#choice;
      if (element == 'sword'){
        var position = spritePositionToImagePosition(this.#scary, 1);
        if (this.#takenAction == false){
          let timer2 = setTimeout(() => {
            myPlayer.loseHealth(this.#damage);
            clearTimeout(timer2);

          }, 200);
          this.#takenAction = true;
          let timer3 = setTimeout(() => {
            this.#revealed = false;
            clearTimeout(timer3);
          }, 2000);
        }
      }
      else if (element == 'flag'){
        var position = spritePositionToImagePosition(this.#scary, 0);
        if (this.#takenAction == false){
          let timer2 = setTimeout(() => {
            //Insert Action
            this.#damage+=1;
            clearTimeout(timer2);

          }, 200);
          this.#takenAction = true;
          let timer3 = setTimeout(() => {
            this.#revealed = false;
            clearTimeout(timer3);
          }, 2000);
        }
      }
      else if (element == 'fire'){
        var position = spritePositionToImagePosition(this.#scary, 2);
        if (this.#takenAction == false){
          let timer2 = setTimeout(() => {
            //Insert Action
            this.gainHealth(1);
            clearTimeout(timer2);

          }, 200);
          this.#takenAction = true;
          let timer3 = setTimeout(() => {
            this.#revealed = false;
            clearTimeout(timer3);
          }, 2000);
        }
      }
      else if (element == 'health'){
        var position = spritePositionToImagePosition(2, this.#scary);
        if (this.#takenAction == false){
          let timer2 = setTimeout(() => {
            //insert Action
            this.gainHealth(1);
            clearTimeout(timer2);

          }, 200);
          this.#takenAction = true;
          let timer3 = setTimeout(() => {
            this.#revealed = false;
            clearTimeout(timer3);
          }, 2000);
        }
      }
      else if (element == 'rec_health'){

        if (this.#favor == 5){
          // Good Ending!!!
          myPlayer.makeScaryHand();
          myTable.setWin_2();
          this.#state = 'hold';
        }

        var position = spritePositionToImagePosition(2, 1);
        if (this.#takenAction == false){
          let timer2 = setTimeout(() => {
            //insert Action
            this.#favor+=1;
            clearTimeout(timer2);

          }, 200);
          this.#takenAction = true;
          let timer3 = setTimeout(() => {
            this.#revealed = false;
            clearTimeout(timer3);
          }, 2000);
        }
      }
      else {
        var position = spritePositionToImagePosition(2, 2);
        if (myPlayer.getScary() === true){
          myPlayer.endScaryHand();
        }
        else if (myPlayer.getScary() === false){
          myPlayer.makeScaryHand();
        }
        myTable.setScary();
        this.#state = 'hold';
        this.#width_back=125;

      }
      ctx.drawImage(
        image,
        position.x,
        position.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        width/2+15+200-this.#width_back,
        32,
        (SPRITE_WIDTH+80)/4,
        SPRITE_HEIGHT/4
      );

    }
    if (this.#state == 'idle'){
     this.drawable.drawImage(
        handTapping[timer%5],
        0,
        0,
        handTapping[0].width,
        handTapping[0].height,
        width-this.#width_back,
        -30,
        (SPRITE_WIDTH+90),
        SPRITE_HEIGHT
    );
    }
    if (this.#state == 'hold'){
     this.drawable.drawImage(
        handTapping[4],
        0,
        0,
        handTapping[0].width,
        handTapping[0].height,
        width-this.#width_back,
        -30,
        (SPRITE_WIDTH+90),
        SPRITE_HEIGHT
    );
    }
    if (this.#state == 'damage'){
    this.drawable.drawImage(
        handTapping[0],
        0,
        0,
        handTapping[0].width,
        handTapping[0].height,
        width-this.#width_back,
        -30,
        (SPRITE_WIDTH+90),
        SPRITE_HEIGHT
    );
    } 
  }
  skipTurn(){
    this.#skipped = true;
  }
  
  loseHealth(health){
    this.#health-=health;
    if (this.#health < 0){
      //Bad Ending
      myPlayer.makeScaryHand();
      myTable.setWin_1(); 
      this.#state = 'hold';
      this.#width_back=-200;


    }
    this.#state = 'damage';
    let timer7 = setTimeout(() => {
      this.#state = 'idle';
      clearTimeout(timer7);
    }, 1000);
  }


  setScary(){
     if (myPlayer.getScary() === true){
          myPlayer.endScaryHand();
        }
        else if (myPlayer.getScary() === false){
          myPlayer.makeScaryHand();
        }
        myTable.setScary();
        this.#state = 'hold';
        this.#width_back=125;


  }
  // This is called on button push <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  revealHand(variable, MainPlayer){
    this.#state = 'hold';


    //Immediate player actions
    if (MainPlayer.choiceCard() == 'sword' && variable != 'offense'){
      myPlayer.activateBlock();
    }

    else if (MainPlayer.choiceCard() == 'flag'){
      //flag choice
      if (variable == 'offense'){
        myPlayer.increasePower();
      }
      else{
        myPlayer.increaseDefense();
      }
    }
    else if (MainPlayer.choiceCard() == 'health'){
      //heart choice
      if (variable == 'offense'){
        myEnemy.skipTurn();
      }
      else{
        myPlayer.increaseDefense();
      }
    }
 
      
    let timer4 = setTimeout(() => {
        this.#state = 'idle';
        clearTimeout(timer4);
    }, 3500);
    let timer5 = setTimeout(() => {

        this.#revealed = true;
        this.#skipped = false;
        clearTimeout(timer5);
      

      //Players choice effects on enemy
      let timer8 = setTimeout(() => {
        if (MainPlayer.isUsed(MainPlayer.choiceAccessor()) == false){
          if (MainPlayer.choiceCard() == 'sword'){
            if (variable == 'offense'){
              myEnemy.loseHealth(myPlayer.attackPower());
            }
          }
          else if (MainPlayer.choiceCard() == 'fire'){
            //fire choice
            if (variable == 'offense'){
              myPlayer.loseHealth(1);
            }
            else{
              myPlayer.gainHealth(1);
            }
          }
          
        }
        clearTimeout(timer8);
      }, 500);

    }, 1000);


    //call the AI
    this.#choice = MainPlayer.choiceCard();
    if (this.#skipped == true)
      this.#choice = 'rec_health';   


    let timer6 = setTimeout(() => {
        myPlayer.deactivate(MainPlayer.choiceAccessor());
        clearTimeout(timer6);
    }, 3500);
    this.#takenAction = false;
  }


}


var myTable = new Table(ctx);
var myPlayer = new Player(ctx);
var myEnemy = new Enemy(ctx);

canvas_mouse.addEventListener('click', function(event) {
  myPlayer.setChoice();  
  console.log("player choice is "+myPlayer.choice);
});

function doom(){
    myTable.draw();
    myPlayer.drawHand();
    myEnemy.drawHand();
    myPlayer.drawHeart();
    //gameloop
    

    window.requestAnimationFrame(doom);
}


window.requestAnimationFrame(doom);
