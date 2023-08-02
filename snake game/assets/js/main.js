const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const audio = new Audio('./assets/audio.mp3');
const size = 30;
const snake = [
    { x: 270, y: 240 },
    { x: 300, y: 240 },
    { x: 330, y: 240 },
    { x: 360, y: 240 },
    { x: 390, y: 240 }
]

const randonNumber = (max, min) => {
    return Math.round(Math.random() * (max - min) + min);
}

const randonPosition = () => {
    const number = randonNumber(0, canvas.width - size);
    return Math.round(number / 30) * 30;
}

const randonColor = () => {
    const red = randonNumber(0, 255);
    const green = randonNumber(0, 255);
    const blue = randonNumber(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

const food = {
    x: randonPosition(),
    y: randonPosition(),
    color: randonColor()
}

let direction, loopId = '';

const drawFood = () => {

    const { x, y, color } = food

    ctx.shadowColor = color;
    ctx.shadowBlur = 6;
    ctx.fillStyle = food.color;
    ctx.fillRect(food.x, food.y, size, size);
    ctx.shadowBlur = 0;
}

const drawStyle = () => {
    ctx.fillStyle = '#ddd';

    snake.forEach((position, index) => {

        if (index == snake.length - 1) {
            ctx.fillStyle = 'white';
        }

        ctx.fillRect(position.x, position.y, size, size);
    })
}

const moveSnake = () => {
    if (!direction) return;

    const head = snake[snake.length - 1];

    if (direction == 'right') {
        snake.push({ x: head.x + size, y: head.y })
    }

    if (direction == 'left') {
        snake.push({ x: head.x - size, y: head.y })
    }

    if (direction == 'down') {
        snake.push({ x: head.x, y: head.y + size })
    }

    if (direction == 'up') {
        snake.push({ x: head.x, y: head.y - size })
    }

    snake.shift();
}

const drawGrid = () => {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#191919";

    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath();
        ctx.lineTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineTo(0, i);
        ctx.lineTo(600, i);
        ctx.stroke();
    }
}

const checkEat = () => {
    const head = snake[snake.length - 1];

    if (head.x == food.x && head.y == food.y) {
        snake.push(head);
        audio.play();

        let x = randonPosition();
        let y = randonPosition();

        while (snake.find((position) => position.x == x && position.y == y)) {
            x = randonPosition();
            y = randonPosition();
        }

        food.x = x;
        food.y = y;
        food.color = randonColor();
    }
}

const checkCollision = () => {
    const head = snake[snake.length - 1];
    const canvasLimit = canvas.width - size;
    const neckIndex = snake.length - 2

    const wallCollision = head.x < 0 || head.x > 570 || head.y < 0 || head.y > 570;

    const selfCollision = snake.find((position, index)=>{
        return index < neckIndex && position.x == head.x && position.y == head.y
    })

    if (wallCollision || selfCollision) {
        gameOver();
    }
}

const gameOver = () => {
    direction = undefined
}

const gameLoop = () => {
    clearInterval(loopId);
    ctx.clearRect(0, 0, 600, 600);
    drawGrid();
    drawFood();
    drawStyle();
    moveSnake();
    checkEat();
    checkCollision();

    loopId = setTimeout(() => {
        gameLoop();
    }, 100)
}

gameLoop();

document.addEventListener("keydown", ({ key }) => {
    if (key == "ArrowUp" | key == "w" | key == "W" && direction != "down") {
        direction = "up";
    }

    if (key == "ArrowDown" | key == "s" | key == "S" && direction != "up") {
        direction = "down";
    }

    if (key == "ArrowRight" | key == "d" | key == "D" && direction != "left") {
        direction = "right";
    }

    if (key == "ArrowLeft" | key == "a" | key == "A" && direction != "right") {
        direction = "left";
    }
})
