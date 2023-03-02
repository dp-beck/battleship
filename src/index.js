// import "./style.css";

const createPlayer = require("./player-factory");
const { startGame, mainGameLoop } = require('./game-logic');

// Create Players
const player1 = createPlayer("Human", false);
const player2 = createPlayer("Computer", true);

// Initialize Message Board
const messageBoard = document.getElementById("messageBoard");

// add event listener for start button
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    startButton.remove();
    document.getElementById("gameDescription").remove();
    startGame (player1, player2);
});

// When this function is called, the screen should display the current state of the
// game.

// Delete existing boards
function deleteBoards() {
    const boards = document.querySelectorAll(".boardStyle");
    boards.forEach(element => element.remove());
}

// Render a board
function updateBoard (player) {
    const board = document.createElement("div");
    // NOTE: NEED TO DEFINE BOARD STYLE IN CSS
    board.classList.add("boardStyle");
    document.querySelector("body").append(board);
    player.gameboard.board.forEach((position) => {
        const square = document.createElement("div");
        square.classList.add("squareStyle");
        board.prepend(square);
        if (player.isComputer) {
            if (!position.firedUpon) {
                square.addEventListener("click", () => {
                    mainGameLoop(player1, player2, position.coordinate);                
                });
            };
            if (position.containsShip !== null && position.firedUpon) {
                square.classList.add("hitShipStyle");
            };
            if (position.containsShip === null && position.firedUpon) {
                square.innerText = "X";
            };
        } else {
            if (position.containsShip !== null && !position.firedUpon) {
                square.classList.add("unhitShipStyle");
            };
            if (position.containsShip !== null && position.firedUpon) {
                square.classList.add("hitShipStyle");
            };
            if (position.containsShip === null && position.firedUpon) {
                square.innerText = "X";
            };
        };
        if (player.gameboard.ships.find(element => element.name === position.containsShip).isSunk()) {
            player.gameboard.board.forEach((element) => {
                if (element.containsShip === position.containsShip) {
                    square.classList.add("shipSunkStyle");
                };
            })
        };
    });
}

// TO DO: Message Board
function updateMessageBoard (message) {
    messageBoard.innerText += `\n ${message}`;
};

function updateDisplay(message) {
    deleteBoards();
    updateBoard(player1);
    updateBoard(player2);
    updateMessageBoard(message);
}

module.exports = updateDisplay;