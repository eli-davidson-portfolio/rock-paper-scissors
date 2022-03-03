class Game {
    constructor () {
        this.player1 = new Player('human', 'token', 0);
        this.player2 = new Player('computer', 'token', 0);
        this.type = '';
        this.classic = ['Rock', 'Paper', 'Scissors'];
        this.advanced = ['Rock','Spock', 'Paper', 'Lizard', 'Scissors'];
        resetBoard();
    }

    setGameType(type) {
        this.type = type;
        this.resetBoard();
    }

    checkWinCondition(move) {
        this.player1.takeTurn(move);
        this.player2.takeTurn();
        for (; this.board.indexOf(this.player1.move) != Math.floor(this.board.length / 2);) {
            this.board.unshift(this.board.pop());
        }
        if (this.board.indexOf(this.player1.move) > this.board.indexOf(this.player2.move)) {
            this.player1.win();
        } else if (this.board.indexOf(this.player1.move) < this.board.indexOf(this.player2.move)) {
            this.player2.win();
        } else {
            console.log("it's a tie")
        } 
        this.resetBoard()
    }

    resetBoard() {
        this.board = this[this.type] || []
        render()
    }
}