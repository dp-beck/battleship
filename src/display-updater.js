const { mainGameLoop } = require("./game-logic");
// YOU KNOW MAYBE THIS SHOULD BE IN INDEX AFTER ALL!!

// When this function is called, the screen should display the current state of the
// game.

// TO DO: Delete existing boards

// Render a board
function updateBoard(player) {
    const board = document.createElement("div");
    // NOTE: NEED TO DEFINE BOARD STYLE IN CSS
    board.classList.add("boardStyle");
    document.querySelector("body").append(board);
    player.gameboard.board.forEach((position) => {
        const square = document.createElement("div");
        board.prepend(square);
        if (player.isComputer) {
            if (!position.firedUpon) {
                square.addEventListener("click", () => {
                    mainGameLoop(player1, player2, position.coordinate); // GOTTA FIGURE OUT HOW TO MAKE SURE IT PASSES THE RIGHT VALUE
                });
            }
        } else {

        };
        
    });
}

function updateDisplay(message) {
    
 
    /* Render Human Player Board -- shows positions of all ships,
        shows where the computer has fired
        shows ships that have been hit    
    */

    /* Render Computer Player Board -- Makes spots that have not been fired upon selectable for firing
        shows where you have fired
        shows where you have hit
        shows if a full ship has been sunk
    */

    /* Message Board -- Shows current message about state of play
        e.g., "Place your ships" OR "Player 1 (Human) sunk Player 2's Battleship"
        OR "Player 2 fires on E4 --- MISS" OR "Player 1 fires on E6 --- HIT"
    */
}

module.exports = updateDisplay;