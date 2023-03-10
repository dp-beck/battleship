// eslint-disable-next-line import/no-cycle
import updateDisplay from './index';

// helper function to enable a delay between turns
// function sleep (milliseconds) {
//    const date = Date.now();
//    let currentDate = null;
//    do {
//      currentDate = Date.now();
//    } while (currentDate - date < milliseconds);
//  }

// Will run on click from a Start Button
function startGame (player1, player2) {
    // 1. Initialize Ship List
    const ships = [
        {
            name: "carrier",
            length: 5,
        },
        {
            name: "battleship",
            length: 4,
        },
        {
            name: "destroyer",
            length: 3,
        },
        {
            name: "submarine",
            length: 3,
        },
        {
            name: "patrol boat",
            length: 2,
        }
    ];

    // 2. Place ships on the boards randomly
    player1.randomlyPlaceAllShips(ships);
    player2.randomlyPlaceAllShips(ships);

    // 3. Initialize Message
    const message = `\n Let's Play!`;
    updateDisplay(message);
}

// human turn
function humanTurn (player, opponent, firePosition) {
    let isGameOver = false;
    let message;
    player.humanLaunchAttack(opponent, firePosition);
    const shipName = opponent.gameboard.board.find(element => element.coordinate === firePosition).containsShip;
    let shipIsSunk = false;
    if (shipName !== null) {
        shipIsSunk = opponent.gameboard.ships.find(element => element.name === shipName).isSunk();
    };
    if (shipIsSunk) {
        message = `\n ${player.name} sank ${opponent.name}'s ${shipName}!!`;
    };
    if (opponent.gameboard.haveSunkAllShips()) {
        message = `\n ${player.name} sank all of ${opponent.name}'s ships. ${player.name} wins!!!`;
        isGameOver = true;
    };
    updateDisplay(message);
    return isGameOver;
}

// computer turn
function computerTurn (player, opponent) {
    let isGameOver = false;
    let message;
    const positionFired = player.computerLaunchAttack(opponent);
    const shipName = opponent.gameboard.board.find(element => element.coordinate === positionFired).containsShip;
    let shipIsSunk = false;
    if (shipName !== null) {
        shipIsSunk = opponent.gameboard.ships.find(element => element.name === shipName).isSunk();
    };
    if (shipIsSunk) {
        message = `\n ${player.name} sank ${opponent.name}'s ${shipName}!!`;
    };
    if (opponent.gameboard.haveSunkAllShips()) {
        message = `\n ${player.name} sank all of ${opponent.name}'s ships. ${player.name} wins!!!`;
        isGameOver = true;
    };
    updateDisplay(message);
    return isGameOver;
}

// END GAME by disabling clicks
function endGame() {
    document.querySelector('body').style['pointer-events'] = "none";
}

// Will run on a mouse click
function mainGameLoop (human, computer, positionClicked) {
    let isGameOver = humanTurn(human, computer, positionClicked);
    if (isGameOver) {
        endGame();
    };
    // sleep(1000);
    isGameOver = computerTurn(computer, human);
    if (isGameOver) {
        endGame();
    };
    // sleep(1000);
}

export {startGame, mainGameLoop};
