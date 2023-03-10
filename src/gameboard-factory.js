import createShip from './ship-factory';

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

// returns an array of legal coordinates the size of the ship length
function generateRandomShipCoordinates (length) {
    const randomShipCoordinates = [];
    const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const horizontalOrVertical = Math.floor(Math.random() * 2);
    if (horizontalOrVertical === 0) { // horizontal placement
        const startingLetterIndex = Math.floor(Math.random() * 10);        
        const startingNumber = Math.floor(Math.random() * (11-length)) + 1;
        for (let i = 0; i < length; i+=1) {
            randomShipCoordinates.push(possibleLetters[startingLetterIndex] + (startingNumber + i));
        };
    } else { // vertical placement
        const startingLetterIndex = Math.floor(Math.random() * (11-length));
        const startingNumber = Math.floor(Math.random() * 10 + 1);
        for (let i = 0; i < length; i+= 1) {
            randomShipCoordinates.push(possibleLetters[startingLetterIndex + i] + startingNumber);
        };
    };
    
    return randomShipCoordinates;
}

// returns true if overlap
function testForOverlap (board, coordinates = []) {
    return coordinates.some(element1 => board.find(element2 => element2.coordinate === element1).containsShip !== null);
}

function createGameboard () {
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
        generateRandomShipCoordinatesNoOverlap (length) {
            let coordinates = generateRandomShipCoordinates(length);
            while (testForOverlap(this.board, coordinates)) {
                coordinates = generateRandomShipCoordinates(length);
            };
            return coordinates;
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

export { testForOverlap , createGameboard};