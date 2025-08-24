let currentPlayer = "X";
let arr = Array(9).fill("");
let gameOver = false; // flag to stop clicks after game ends

function showWinner(message) {
    const winnerDiv = document.getElementById("winnerMessage");
    const resultText = winnerDiv.querySelector(".result");
    const playAgainBtn = document.getElementById("playAgainBtn");

    resultText.innerText = message;
    winnerDiv.style.display = "block"; // make it visible
    gameOver = true; // stop further moves

    playAgainBtn.onclick = () => {
        // reset everything
        arr = Array(9).fill("");
        currentPlayer = "X";
        gameOver = false;

        document.querySelectorAll(".col").forEach(col => {
            col.innerText = "";
        });

        winnerDiv.style.display = "none"; // hide again
    };
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let index of winningCombinations) {
        let check = (arr[index[0]] === arr[index[1]]) && 
                    (arr[index[1]] === arr[index[2]]) && 
                    (arr[index[2]] !== "");
        if (check) {
            showWinner("Winner is: " + arr[index[0]]);
            return arr[index[0]];
        }
    }

    if (!arr.includes("")) {
        showWinner("It's a Draw!");
        return "Draw";
    }

    return null; // No winner yet
}

function handleClick(ele) {
    if (gameOver) return; // prevent clicks after winner
    let id = Number(ele.id);
    if (arr[id] !== "") return; // already filled

    arr[id] = currentPlayer;
    ele.innerText = currentPlayer;

    if (currentPlayer === "X") {
        ele.classList.add("x");
    } else {
        ele.classList.add("o");
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkWinner();
}