class Game {
    constructor () {
        this.player1 = new Player('human');
        this.player2 = new Player();

    }

    setType() {
        if (this.type === 'classic') {
            this.type = 'advanced'
        } else {
            this.type = 'classic'
        }
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

    setBoard () {
        var boardHTML = '';
        console.log(this.board)
        for (var i = 0; i < this.board.length; i++) {
            var key = this.board[i].toLowerCase();
            var name = this.player1.token.fighter[key].name;
            var emoji = this.player1.token.fighter[key].value;
            
            boardHTML += `<button class="button fighter-button fighter-${key}" name="${name}" onClick="game.play('${name}')">${emoji})</button>`
        }
       document.getElementById('game-board').innerHTML = boardHTML;
    }

    reset() {
        this.board = [];
        if (this.type) {
            this.board = Array.from(data.gameType[this.type]);
            this.setBoard();
        }
        render()
        this.winner = `It's a tie...`
    }
}