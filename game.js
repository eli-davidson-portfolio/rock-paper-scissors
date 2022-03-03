class Game {
    constructor () {
        this.player1 = new Player('human', 'token', 0);
        this.player2 = new Player('computer', 'token', 0);
        this.classic = ['Rock', 'Paper', 'Scissors'];
        this.advanced = ['Rock','Spock', 'Paper', 'Lizard', 'Scissors'];
    }

    setGameType(type) {
        this.type = type || '';
        this.reset();
    }

    play(userMove) {
        this.player1.takeTurn(userMove);
        this.player2.takeTurn();
        this.sortBoard();
        this.checkWinCondition();
        console.log(this.winner);
        this.reset();
    }

    sortBoard () {
        for (; this.getMoveIndex('player1') != Math.floor(this.board.length / 2);) {
            this.board.unshift(this.board.pop());
        }
    }

    checkWinCondition() {
        if (this.getMoveIndex('player1') > this.getMoveIndex('player2')) {
            this.winner = `${this.player1.move} beats ${this.player2.move}, ${this.player1.win()}!!!`;
        } else if (this.getMoveIndex('player1') < this.getMoveIndex('player2')) {
            this.winner = `${this.player2.move} beats ${this.player1.move}, ${this.player2.win()}.`;
        } 
    }

    getMoveIndex(player) {
        return this.board.indexOf(this[player].move)
    }

    reset() {
        this.board = [];
        if (this.type) {
            this.board = Array.from(this[this.type]);
        }
        render()
        this.winner = `It's a tie...`
    }
}