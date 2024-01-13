// Global

let boardArray = ["", "", "", "", "", "", "", "", ""];
const gameContainer = document.querySelector('.game-container')

let playersTurn = true;

let gameWinner = "";

const gameResult = document.querySelector('.game-result');

player1wins = 0;
player2wins = 0;

// 

function createGameBoard () {

    for (let i = 0; i < boardArray.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'cells';
        cell.textContent = boardArray[i];
        gameContainer.appendChild(cell);
    }


    const clickEvent = document.querySelectorAll('.cells');

    clickEvent.forEach((cell, i) => {
        cell.addEventListener('click', () => {
            if (cell.textContent == "") {
                console.log('empty div');
                if (playersTurn == true) {
                    console.log("true");
                    cell.textContent = 'X';
                    player1moves.push(i);
                    boardArray[i] = 'X';
                    console.log(boardArray);
                    console.log(player1moves);
                    winCheckP1();
                    checkDraw();
                    return playersTurn = !playersTurn;
                } else {
                    console.log("false");
                    cell.textContent = 'O';
                    player2moves.push(i);
                    boardArray[i] = 'O';
                    console.log(boardArray);
                    console.log(player2moves);
                    winCheckP2();
                    checkDraw();
                    return playersTurn = !playersTurn;
                }
            } else {
                console.log("not empty div");
                return;
            }
        });
});

    
}

createGameBoard();

const players = function () {
    function player(name, symbol) {
        return {
            name: name,
            symbol: symbol
        }
    }

    const player1 = player("Player 1", () => "X");
    const player2 = player("Player 2", () => "O");
    console.log( { player1, player2 } )

    return {
        player1,
        player2
    }
}

const {player1 , player2} = players();

//Array logs each players move to check with winning combinations

let player1moves = [];
let player2moves = [];


const displayWinner = document.querySelector('.display-winner');

const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function winCheckP1() {
    const isWinner = winningMoves.some(combination =>
        combination.every(move => player1moves.includes(move))
    );

    if (isWinner) {
        console.log(`${player1.name} wins!`);
        gameWinner = "Player 1";
        player1wins += 1;

        const player1score = document.querySelector('.player1score');
        player1score.textContent = player1wins;

        modalUpdate()
    }
}

function winCheckP2() {
    const isWinner = winningMoves.some(combination =>
        combination.every(move => player2moves.includes(move))
    );
    
    if (isWinner) {
        console.log(`${player2.name} wins!`);
        gameWinner = "Player 2";
        player2wins += 1;

        const player2score = document.querySelector('.player2score');
        player2score.textContent = player2wins;

        modalUpdate()
    }
}

function checkDraw() {
    const isDraw = boardArray.flat().every(cell => cell !== "");
    
    if (isDraw) {
        console.log("It's a draw!");
        modalUpdate()
    }
}

function modalUpdate() {
    const winningMessage = document.createElement('h2');
    winningMessage.className = "winning-message";
    gameResult.setAttribute('style', 'width: 300px; height: 300px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 30px; text-align: center;');
    
    if (gameWinner !="") {
        winningMessage.textContent = `${gameWinner} Wins`;
    } else {
        winningMessage.textContent = "The game was a draw"
    }

    const replayButton = document.createElement('button');
    replayButton.textContent = "Play Again";

    replayButton.addEventListener('click', () => {
        resetGame();
    })

    gameResult.appendChild(winningMessage);
    gameResult.appendChild(replayButton);
    gameResult.showModal();
}

function resetGame() {
    boardArray = ["", "", "", "", "", "", "", "", ""];
    player1moves = [];
    player2moves = [];
    gameWinner = "";
    playersTurn = true;
    gameContainer.textContent = "";
    gameResult.textContent = "";
    gameResult.setAttribute('style', 'display: none');
    gameResult.close();
    createGameBoard();
}

