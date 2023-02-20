const createGameboard = require('../gameboard-factory');

// Create object for testing
const board1 = createGameboard();

// Tests for initial board creation
test('the board is created (position is accurate)', () => {
    expect(board1.board[0].coordinate).toBe('A1');
});

test('the board is created (contains ship is null)', () => {
    expect(board1.board[12].containsShip).toBeNull();
});

test('the board is created (firedUpon is false)', () => {
    expect(board1.board[2].firedUpon).toBeFalsy();
});

// Tests for ship placement
board1.placeShip('battleship', 4, ['A1', 'A2', 'A3', 'A4']);
board1.placeShip('submarine', 3, ['B1', 'C1', 'D1']);

test('horizontal: place battleship at coordinates A1,A2,A3,A4', () => {
    expect(board1.board[0].containsShip).toBe('battleship');
    expect(board1.board[1].containsShip).toBe('battleship');
    expect(board1.board[2].containsShip).toBe('battleship');
    expect(board1.board[3].containsShip).toBe('battleship');
    expect(board1.board[4].containsShip).toBeNull();
});

test('vertical: place submarine at coordinates B1, C1, D1', () => {
    expect(board1.board[10].containsShip).toBe('submarine');
    expect(board1.board[20].containsShip).toBe('submarine');
    expect(board1.board[30].containsShip).toBe('submarine');
    expect(board1.board[40].containsShip).toBeNull();
});

// Tests for receiveHit method
board1.receiveAttack('A1');
board1.receiveAttack('A5');

test('successful hit on battleship at A1', () => {
    expect(board1.board[0].firedUpon).toBe(true);
    expect(board1.ships.find(ship => ship.name === 'battleship').numOfHits).toBe(1);
});

test('missed shot recorded in firedUpon at A5', () => {
    expect(board1.board[4].firedUpon).toBe(true);
    expect(board1.board[4].containsShip).toBeNull();
});

// Tests for haveAllShipsSunk method


test('all ships that were placed are sunk', () => {
    board1.receiveAttack('A2');
    board1.receiveAttack('A3');
    board1.receiveAttack('A4');
    board1.receiveAttack('B1');
    board1.receiveAttack('C1');
    board1.receiveAttack('D1');
    expect(board1.haveSunkAllShips()).toBe(true);
});

test('not all ships that were placed are sunk', () => {
    board1.receiveAttack('A3');
    board1.receiveAttack('A4');
    board1.receiveAttack('B1');
    board1.receiveAttack('C1');
    board1.receiveAttack('D1');
    expect(board1.haveSunkAllShips()).toBe(false);
});