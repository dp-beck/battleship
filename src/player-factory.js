const createGameboard = require('./gameboard-factory');

function getRandomCoordinate(player) {
    // pick random coordinate
    const position = player.gameboard.board[Math.floor(Math.random() * 100)];
    if (position.firedUpon) {
        getRandomCoordinate(player);
    };
    return position.coordinate;
}

// TO DO: Implement a more intelligent AI coordinate choosing function
// that will attempt to fire close to hits it has already made. Rather than
// just completely random

export default function createPlayer(name, isComputer) {
    const gameboard = createGameboard ();
    return {
        name,
        isComputer,
        gameboard,
        launchAttack(opponent, coordinate = getRandomCoordinate(opponent)) {
            opponent.gameboard.receiveAttack(coordinate);
        },
    };
}

module.exports = createPlayer;