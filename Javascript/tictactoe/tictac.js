function Player(id, name) {
    this.id = id;
    this.name = name;
}

const player1 = new Player("X", "playerX");
const player2 = new Player("O", "playerY");

let currentTurn = player1.id; // this is X for now
let gameOver = false;

const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

console.log(winningConditions.length);
console.log(winningConditions);
console.log(winningConditions[1]);
console.log(typeof winningConditions);


function updateBoard(tileNr) {
    document.getElementById(tileNr).innerText = currentTurn;

    for (let i = 0; i < winningConditions.length; i++) {
            
        if (document.getElementById(winningConditions[i][0]).innerText === currentTurn &&
            document.getElementById(winningConditions[i][1]).innerText === currentTurn &&
            document.getElementById(winningConditions[i][2]).innerText === currentTurn) {
            gameOver = true;

            currentTurn === player1.id ? document.getElementById("winner").innerText = `Winner: ${player1.name}` :
                document.getElementById("winner").innerText = `Winner: ${player2.name}`;

        }
    }

    if (currentTurn === player1.id) {
        currentTurn = player2.id;
        document.getElementById("names").innerText = `Whose turn: ${player2.name}`;
    } else {
        currentTurn = player1.id;
        document.getElementById("names").innerText = `Whose turn: ${player1.name}`;
    }
}

function resetBoard() {
    
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i).innerText = " ";
        }

        document.getElementById("names").innerText = "Whose turn: ";
        document.getElementById("winner").innerText = "Winner: ";
        currentTurn = player1.id;
        gameOver = false;
    
}



