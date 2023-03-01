import "./style.css";

const createPlayer = require("./player-factory");
const { startGame } = require('./game-logic');

// 1. Create Players
const player1 = createPlayer("Human", false);
const player2 = createPlayer("Computer", true);

// 2. add event listener for start button
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    startGame (player1, player2)
});