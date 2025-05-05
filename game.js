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

var position = spritePositionToImagePosition(2, 2);

function doom(){
    ctx.fillStyle = 'rgba(0,0,0,100)';
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = 'rgba(104,71,45,100)';
    ctx.fillRect(20,0,width-40,height);
    ctx.fillStyle = 'rgba(204,0,0,100)';
    ctx.fillRect(20,20,width-40,height-40);
    ctx.fillStyle = 'rgba(255,255,255,100)';
    ctx.fillRect(width-100,0,width,60);
    ctx.drawImage(
        image,
        position.x,
        position.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        0,
        0,
        (SPRITE_WIDTH+90)/3,
        SPRITE_HEIGHT/3
    );
    window.requestAnimationFrame(doom);
}


window.requestAnimationFrame(doom);
