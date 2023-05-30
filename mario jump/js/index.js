const mario=document.querySelector(".mario");
const pipe=document.querySelector(".pipe");

const remove=()=>{
    mario.classList.remove("jump");
};

const gameover=()=>{
    const pipePosition=pipe.offsetLeft;
    const marioPosition=+window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 80){
        pipe.style.animation="none";
        pipe.style.left=`${pipePosition}px`

        mario.style.animation="none";
        mario.style.bottom=`${marioPosition}px`

        mario.src = "img/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        clearInterval("loop")
    }
}

const jump=()=>{
    mario.classList.add("jump");
    setTimeout(remove, 500);
};

const loop=setInterval(gameover, 10)

document.addEventListener("keydown",(evt)=>{
    jump();
});