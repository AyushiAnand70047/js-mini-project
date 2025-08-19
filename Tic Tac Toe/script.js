let currentPlayer = "X";
let arr = Array(9).fill("");

function playAgain() {
    const btn = document.createElement("button");
    btn.innerText = "Play Again";
    document.body.appendChild(btn);
    btn.addEventListener("click", () => {
        location.reload();
    })
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    for (let index of winningCombinations) {
        let check = (arr[index[0]] === arr[index[1]]) && (arr[index[1]] === arr[index[2]]) && (arr[index[2]] !== "");
        if (check) {
            document.writeln("<h1>Winner is: " + arr[index[0]] + "</h1>");
            playAgain();
            return arr[index[0]];
        }
    }
    if (!arr.includes("")) {
        document.writeln("<h1>It's a Draw!</h1>");
        playAgain();
        return "Draw";
    }
    return null; // No winner yet
}

function handleClick(ele) {
    let id = Number(ele.id);
    if (arr[id] !== "") {
        return;
    }
    arr[id] = currentPlayer;
    ele.innerText = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkWinner();
}

handleClick()