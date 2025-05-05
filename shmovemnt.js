

var IntroActive = false;
var ProgramActive = false;
var TeachActive = false;
var gameActive = false;
var mouseX = 0;
var mouseY = 0;

var progVisible = true;
var teachVisible = true;
var studentVisible = true;
var doomVisible = true;

document.addEventListener('mousemove', function(event) {
    console.log('Mouse X:', event.clientX, 'Mouse Y:', event.clientY);
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function moveIntroStart() {
  IntroActive = true;
}
function moveIntroEnd() {
  IntroActive = false;
}

function moveProgramStart() {
  ProgramActive = true;
}
function moveProgramEnd() {
  ProgramActive = false;
}

function moveTeachStart() {
  TeachActive = true;
}
function moveTeachEnd() {
  TeachActive = false;
}
function moveGameStart() {
  gameActive = true;
}
function moveGameEnd() {
  gameActive = false;
}

/*
function clearAll(){
    var prog = document.getElementsByClassName('prog');
    if (progVisible == true){
      for (const element of prog) {
        element.classList.toggle('hidden');
      }
      progVisible = false;
    }
    if (teachVisible == true){
      var prog1 = document.getElementsByClassName('teach');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      teachVisible = false;
    }
    if (studentVisible == true){
      var prog1 = document.getElementsByClassName('student');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      studentVisible = false;
    }
    if (doomVisible == true) {
      var prog1 = document.getElementsByClassName('doom');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      doomVisible = false;
    }
}

function changeData(input){
  alert(input);
  if (String(input) == "Programmer"){
    var prog = document.getElementsByClassName('prog');
    if (progVisible == false){
      for (const element of prog) {
        element.classList.toggle('hidden');
      }
      progVisible = true;
    }
    if (teachVisible == true){
      var prog1 = document.getElementsByClassName('teach');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      teachVisible = false;
    }
    if (studentVisible == true){
      var prog1 = document.getElementsByClassName('student');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      studentVisible = false;
    }
    if (doomVisible == true) {
      var prog1 = document.getElementsByClassName('doom');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      doomVisible = false;
    }
  }
  else if (String(input) == "Socials"){
    var prog = document.getElementsByClassName('teach');
    for (const element of prog) {
      element.classList.toggle('hidden');
    }
    teachVisible = true;
    if (progVisible == true){
      var prog1 = document.getElementsByClassName('prog');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      progVisible = false;
    }
    if (studentVisible == true){
      var prog1 = document.getElementsByClassName('student');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      studentVisible = false;
    }
    if (doomVisible == true) {
      var prog1 = document.getElementsByClassName('doom');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      doomVisible = false;
    }
  }
  else if (String(input) == "About Me"){
    var prog = document.getElementsByClassName('student');
    for (const element of prog) {
      element.classList.toggle('hidden');
    }
    studentVisible = true;
    if (teachVisible == true){
      var prog1 = document.getElementsByClassName('teach');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      teachVisible = false;
    }
    if (progVisible == true){
      var prog1 = document.getElementsByClassName('prog');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      progVisible = false;
    }
    if (doomVisible == true) {
      var prog1 = document.getElementsByClassName('doom');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      doomVisible = false;
    }
  }
  else {
    var prog = document.getElementsByClassName('doom');
    for (const element of prog) {
      element.classList.toggle('hidden');
    }
    doomVisible = true;
    if (teachVisible == false){
      var prog1 = document.getElementsByClassName('teach');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      teachVisible = true;
    }
    if (studentVisible == false){
      var prog1 = document.getElementsByClassName('student');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      studentVisible = true;
    }
    if (progVisible == false) {
      var prog1 = document.getElementsByClassName('prog');
      for (const element of prog1) {
        element.classList.toggle('hidden');
      }
      progVisible = true;
    }
  }
}
*/

var allmoveIntro = false;
var allmoveprogram = false;
var allmovegame = false;
var allmoveTeach = false;
var addZ = 1;

//clearAll();
window.requestAnimationFrame(gameLoop);

function gameLoop() {
    console.log(IntroActive);
    console.log(mouseY);
    var intro = document.getElementById('introduction');
    if (IntroActive === true){
      intro.style.left = (mouseX-125)+'px';
      intro.style.top = (mouseY-40)+'px';
      if (allmoveIntro == false){
        intro.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = true;
        allmoveprogram = false;
        allmovegame = false;
        allmoveTeach = false;
      }
    }

    var program = document.getElementById('programmer');

    if (ProgramActive === true){
      program.style.left = (mouseX-125)+'px';
      program.style.top = (mouseY-40)+'px';
      if (allmoveprogram == false){
        program.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = false;
        allmoveprogram = true;
        allmovegame = false;
        allmoveTeach = false;
      }
    }

    var teach = document.getElementById('teacher');

    if (TeachActive === true){
      teach.style.left = (mouseX-125)+'px';
      teach.style.top = (mouseY-40)+'px';
      if (allmoveTeach == false){
        teach.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = false;
        allmoveprogram = false;
        allmovegame = false;
        allmoveTeach = true;
      }
    }

    var game = document.getElementById('game');

    if (gameActive === true){
      game.style.left = (mouseX-125)+'px';
      game.style.top = (mouseY-40)+'px';
      if (allmovegame == false){
        game.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = false;
        allmoveprogram = false;
        allmovegame = true;
        allmoveTeach = false;
      }
    }


    window.requestAnimationFrame(gameLoop);
}
