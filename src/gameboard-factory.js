const createShip = require('./ship-factory');

function createPosition (letter, number) {
    return {
        coordinate: letter + number.toString(),
        containsShip: null,
        firedUpon: false,
    };
}

function createBoard () {
    const board = [];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    letters.forEach((letter) => {
        for (let i=1; i < 11; i+=1) {
            const position = createPosition(letter, i);
            board.push(position);
        };
    });
    return board;
};

// receiveAttack function

export default function createGameboard () {
    const board = createBoard();
    const ships = [];
    return {
        board,
        ships,
        placeShip (shipName, shipLength, shipCoordinates) {
            ships.push(createShip(shipName, shipLength));
            shipCoordinates.forEach((coordinate) => {
                const position = this.board.find(element => element.coordinate === coordinate);
                position.containsShip = shipName;
            });
        },
        receiveAttack (coordinate) {
            const position = this.board.find(element => element.coordinate === coordinate);
            position.firedUpon = true;
            if (position.containsShip !== null) {
                this.ships.find(ship => ship.name === position.containsShip).hit();
            };
        },
        haveSunkAllShips() {
            if (this.ships.find (element => !element.isSunk())) {
                return false;
            } 
            return true;
        },
    };
}

module.exports = createGameboard;