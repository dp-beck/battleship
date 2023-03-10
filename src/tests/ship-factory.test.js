import createShip from '../ship-factory';

const battleship = createShip('battleship', 4);

test('has correct name', () => {    
    expect(battleship.name).toBe('battleship');
});

test('records a hit', () => {
    expect(battleship.hit()).toBe(1);
});

test('records 3 hits', () => {
    battleship.numOfHits = 0;
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(battleship.numOfHits).toBe(3);
});

test('recognizes when not sunk', () => {
    expect(battleship.isSunk()).toBe(false);
});

test('recognizes when sunk', () => {
    battleship.numOfHits = 0;
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(battleship.isSunk()).toBe(true);
});
