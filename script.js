// const gameBoard = (function createBoard () {
//     const board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//     function createBoard() {
//         for (let i = 0; i < board.length; i++) {
//             console.log(board[i]);
//             const gameContainer = document.querySelector('.game-container');
//             const gameDiv = document.createElement('div');
//             gameDiv.classList = 'cells';
//             gameDiv.textContent = `${board[i]}`;
//             gameContainer.appendChild(gameDiv);
//         }
//     }
//     createBoard(board);
//     return { 
//         board,
//         createBoard: createBoard 
//     };
// })();

// const players = function () {
//     function Player (player, symbol) {
//         return  {
//             player: player,
//             symbol: symbol
//         }
//     }
//     const player1 = Player('player 1', ()=> 'X');
//     const player2 = Player('player 2', ()=> 'O');
//     return { player1, player2 };
// };

// const { player1, player2 } = players(); 

// const player1moves = [];

// function player1move (board, player1) {
//     const moveListener = document.querySelectorAll('.cells')


//     moveListener.forEach((cells, i) => {
//         cells.addEventListener('click', () => {
//             console.log('position at ' + `${board[i]}` + ' clicked' );
//             player1moves.push(board[i]);
//             const gameContainer = document.querySelector('.game-container');
//             gameContainer.textContent = "";
//             board[i] = player1.symbol();
//             gameBoard.createBoard(gameBoard.board);
//             player1move(gameBoard.board, player1);
//             console.log(player1moves);
//             checkWin(player1moves);   
//         })
//     })
// }

// player1move(gameBoard.board, player1);

// function checkWin(player1moves) {
//     const winningMoves = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
    
//     // Check if every element in player1moves is present in winningMoves
//     const isWinner = winningMoves.some(combination =>
//         combination.every(move => player1moves.includes(move))
//     );

//     if (isWinner) {
//         console.log('we have a winner');
//     } else {
//         console.log('game still in progress');
//     }
// }
