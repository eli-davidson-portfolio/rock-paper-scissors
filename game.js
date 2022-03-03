class Game {
    constructor (player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.type = '';
        this.classic = ['Rock', 'Paper', 'Scissors'];
        this.advanced = ['Rock','Spock', 'Paper', 'Lizard', 'Scissors'];
        this.board = [];
    }
    checkWinCondition() {
        this.player2.takeTurn();
        for (; this.board.indexOf(this.player1.move) === Math.ceil(this.board.length / 2);) {
            this.board.unshift(this.board.pop());
        }
        if (this.board.indexOf(this.player1.move) > this.board.indexOf(this.player2.move)) {
            this.player1.win();
        } else if (this.board.indexOf(this.player1.move) < this.board.indexOf(this.player2.move)) {
            this.player2.win();
        } else {
            console.log("it's a tie")
        } 
        render();
    }


    resetBoard() {
        this.board = this[this.type] || []
    }
}