import createPlayer from "./player-factory";

// Will run on click from a Start Button
function initializeGame () {
    // 1. Create Players
    const player1 = createPlayer("Player 1", false);
    const player2 = createPlayer("Player 2", true);

    // 2. Initialize Ship List
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

    // 3. Place ships on the boards randomly
    player1.randomlyPlaceAllShips(ships);
    player2.randomlyPlaceAllShips(ships);
 
    // 4. MAIN GAME LOOP
    while (!(player1.gameBoard.haveSunkAllShips() || player2.gameBoard.haveSunkAllShips())) {
   /* 1. Player Turn
        a. Player picks a place to fire upon
        b. Player fires on that place and opponent's gameboard is updated
        c. Call Display Updater to show change
        d. Check to see if the hit sunk a ship.
        e. If the hit sunk a ship, 
            i. Pass a message declaring which ship was sunk
            ii. Add the image of the sunk ship on the gameboard to show what was sunk.
            iii. Run Display Updater to show new board conditions
        f. Check to see if All Ships are Sunk. If yes,
            i. Loop Breaks and we continue to the end game
            ii. if no, continue loop with next player
    */
    };
    /* TO DO: END GAME
    2. Pass a Message as to who won
    3. Run Display Updater to show End Game
    */
}