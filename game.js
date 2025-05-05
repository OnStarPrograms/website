const canvas = document.getElementById("doom");
const ctx = canvas.getContext("2d");
let width = canvas.offsetWidth; // Width of the scene
let height = canvas.offsetHeight; // Height of the scene
var spriteSheetURL = './data/card_sprites.png';
// create a new image from the spritesheet
var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;

function doom(){
    ctx.fillStyle = 'rgba(255,255,255,100)';
    ctx.fillRect(0,0,height,width);
    ctx.font = "30px Arial";
    ctx.strokeText("Insert Card Game", 10, 50);
    ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        canvas.width,
        canvas.height
    );
    window.requestAnimationFrame(doom);
}


window.requestAnimationFrame(doom);
