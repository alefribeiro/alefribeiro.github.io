const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const scoreDiv = document.querySelector('.scoreDiv')
const screenOver = document.querySelector('.screenOver')
const pScreenOver = document.querySelector('.screenOver p')
let score = 0
let gameOver = "win"

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

function theEnd(gameOver){
    if(gameOver === "gameOver"){
        screenOver.classList.remove("invisible")
        pScreenOver.innerHTML = `Score ${score.toFixed(0)}`
    }
}

function addInvisible(){
    document.location.reload(true)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = ('./images/game-over.png')
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameOver ="gameOver"
        theEnd(gameOver)

        clearInterval(loop)

    }else if(gameOver === "win"){
        score += 0.5     
        scoreDiv.innerHTML = `Score ${score.toFixed(0)}`
    }

}, 10)

document.addEventListener('keydown', jump)