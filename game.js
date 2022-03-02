class Game {
    constructor (player1, player2, gameType) {
        this.player1 = player1;
        this.player2 = player2;
        this.gameType = gameType;
        this.board = {};
    }
    checkWinCondition() {
        //A way to check the Game’s board data for win conditions
        //A way to detect when a game is a draw (no one has won)
    }
    resetBoard() {
        //A way to reset the Game’s board to begin a new game.
    }
}