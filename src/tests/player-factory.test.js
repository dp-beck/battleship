import createPlayer from '../player-factory';

const player1 = createPlayer('Player 1', false);
const player2 = createPlayer('Player 2', true);

test('player object is initialized correctly', () => {
    expect(player1.name).toBe('Player 1');
    expect(player1.isComputer).toBe(false);
    expect(player1.gameboard.board[0].coordinate).toBe('A1');
});

test('human player fires correctly', () => {
    player1.humanLaunchAttack(player2, 'A1');
    expect(player2.gameboard.board[0].firedUpon).toBe(true);
});

test('computer player fires randomly within the board', () => {
    player2.computerLaunchAttack(player1);
    expect(player1.gameboard.board.find(element => element.firedUpon)).not.toBe(undefined);
});
