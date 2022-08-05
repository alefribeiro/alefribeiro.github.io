const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const scoreDiv = document.querySelector(".scoreDiv");
const screenOver = document.querySelector(".screenOver");
const pScreenOver = document.querySelector(".screenOver p");
const widthSecreen = window.screen.width;
const start = document.querySelector('.start')

let score = 0;
let gameOver = "win";

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

function theEnd(gameOver) {
  if (gameOver === "gameOver") {
    screenOver.classList.remove("invisible");
    pScreenOver.innerHTML = `Pontuação ${score.toFixed(0)}`;
  }
}

function restart() {
  document.location.reload(true);
}

function addInvisible() {

  const loop = setInterval(() => {

    start.classList.add("invisible")
    pipe.classList.remove('invisible')
    pipe.style.animation = "pipe-animation 1.5s infinite linear"

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

    if (widthSecreen > 540) {
      if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        gameOver = "gameOver";
        theEnd(gameOver);

        clearInterval(loop);
      } else if (gameOver === "win") {
        score += 0.5;
        scoreDiv.innerHTML = `Pontuação ${score.toFixed(0)}`;
      }
    } else {
      if (pipePosition <= 70 && pipePosition > 0 && marioPosition < 40) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/game-over.png";
        mario.style.width = "40px";
        mario.style.marginLeft = "25px";

        gameOver = "gameOver";
        theEnd(gameOver);

        clearInterval(loop);
      } else if (gameOver === "win") {
        score += 0.5;
        scoreDiv.innerHTML = `Pontuação ${score.toFixed(0)}`;
      }
    }
  }, 10);

  document.addEventListener("keydown", jump);
  document.addEventListener("touchstart", jump);
}


