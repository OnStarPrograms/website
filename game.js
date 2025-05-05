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

var candleSprite = [new Image(), new Image(), new Image()];
candleSprite1 = 'https://onstarprograms.github.io/website/data/C300-1.png'; 
candleSprite2 = 'https://onstarprograms.github.io/website/data/C300-2.png'; 
candleSprite3 = 'https://onstarprograms.github.io/website/data/C300-3.png'; 
candleSprite[0].src = candleSprite1;
candleSprite[1].src = candleSprite2;
candleSprite[2].src = candleSprite3;

var hand = new Image();


let timer = 0;
setInterval(() => {
  timer++;
}, 300);


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
  constructor(context){
    this.drawable = context;
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

      
    }
    else {

      
      
      this.drawable.beginPath();
      this.drawable.moveTo(width/2-10, height/2-20); // Move to the starting point (bottom-left corner)
      this.drawable.lineTo(width/2+10, height/2-20); // Draw the bottom base
      this.drawable.lineTo(width/2+10, height/2-30);  // Draw the right side
      this.drawable.lineTo(width/2-10, height/2-30);   // Draw the top base
      this.drawable.closePath();    // Close the path (draw the left side)

      this.drawable.stroke(); // Draw the outline of the trapezoid

      this.drawable.fillStyle = 'rgba(245,245,82,100)';
      this.drawable.fill();    }
  }
}

class Player{
  #hand = ['fire', 'sword', 'flag', 'health'];
  #secondaryHand = [];
  #scary = true;
  #defend;
  #attack;
  #health = 10;
  #selection = 0;
  constructor(context){
    this.drawable = context;
  }

  get health(){
    return this.#health;
  }
  
  loseHealth(amount){
    this.#health-=amount;
  }

  gainHealth(amount){
    this.#health+=amount;
  }
  
  giveCard(card){
    this.#hand.push(card);
  }

  select(card){
      this.#selection = card;
  }

  makeScaryHand(){
    this.#secondaryHand = this.#hand;
    this.#hand = ['tower'];
    this.#scary = true;
  }

  drawHand(){
    var posX = 10;
    var posY = height-40;
    let prevPos = posY;
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
      if (this.#selection == index){
        prevPos = posY;
        posY-=10;
      }
      
      
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
      posX+=40;
      


    } 
    
  }
  
}

var myTable = new Table(ctx);
var myPlayer = new Player(ctx);

function doom(){
    myTable.draw();
    myPlayer.drawHand();
//gameloop

    window.requestAnimationFrame(doom);
}


window.requestAnimationFrame(doom);
