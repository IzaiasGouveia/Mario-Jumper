const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const audio = new Audio ('./assets/audio.mp3')
const death = new Audio ('./assets/death')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
    audio.play()
}

const loop = setInterval(() => {

    console.log(loop)

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(pipePosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        death.play()

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginleft = '50px'


    }
    
}, 10);
document.addEventListener('click', jump);
document.addEventListener('keydown', jump);