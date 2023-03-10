import { createGameboard } from './gameboard-factory';

function getRandomAttackCoordinate(player) {
    let position = player.gameboard.board[Math.floor(Math.random() * 100)];
    while (position.firedUpon) {
        position = player.gameboard.board[Math.floor(Math.random() * 100)];
    };
    return position.coordinate;
}

// TO DO: Implement a more intelligent AI coordinate choosing function
// that will attempt to fire close to hits it has already made. Rather than
// just completely random

export default function createPlayer(name, isComputer) {
    const gameboard = createGameboard();
    return {
        name,
        isComputer,
        gameboard,
        humanLaunchAttack(opponent, coordinate) {
            opponent.gameboard.receiveAttack(coordinate);
        },
        computerLaunchAttack(opponent) {
            const positionFired = getRandomAttackCoordinate(opponent);
            opponent.gameboard.receiveAttack(positionFired);
            return positionFired;
        },
        randomlyPlaceAllShips (ships = []) {
            ships.forEach((ship) => {
                this.gameboard.placeShip(ship.name, ship.length, this.gameboard.generateRandomShipCoordinatesNoOverlap(ship.length));
            })
       
        },
    };
}
