const colorCode = document.getElementById('color-code');
const options = document.getElementById('options-container');
let scoreContainer = document.getElementById('score')
let message = document.getElementById('message');
let rgb = null;
let score = 0;

function generateRandomNumberBetween(min, max) {
    const randomNumber = min + Math.floor(Math.random() * (max - min + 1));
    return randomNumber;
}

function generateRandomColorRGB() {
    const r = generateRandomNumberBetween(0,255);
    const g = generateRandomNumberBetween(0,255);
    const b = generateRandomNumberBetween(0,255);
    return `rgb(${r}, ${g}, ${b})`;
}

function incrementScore() {
    score += 1;
    scoreContainer.innerText = score;
}

function validateResult(color){
    if(color == rgb){
        message.innerText = "Correct Guess";
        incrementScore();
    } else {
        score = 0;
        message.innerText = "Incorrect Answer! Try Again";
    }
    window.localStorage.setItem("score",score);
    startGame();
}

function startGame() {
    score = Number(window.localStorage.getItem("score")) ?? 0;
    scoreContainer.innerText = score;
    options.innerHTML = null;
    rgb = generateRandomColorRGB();
    colorCode.innerText = rgb;
    const ansIndex = generateRandomNumberBetween(0,5);

    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = i === ansIndex ? rgb : generateRandomColorRGB();
        options.append(div);
        div.addEventListener('click', () => {
            validateResult(div.style.backgroundColor);
        })
    }
}

window.addEventListener('load', () => startGame());