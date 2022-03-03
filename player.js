class Player {
    constructor (name, token, wins) {
        this.name = name;
        this.token = token;
        this.wins = wins || 0;
        this.move = '';
    }

    saveWinsToStorage () {
        // only necessary if you choose the localStorage extension
    }

    retrieveWinsFromStorage() {
        // only necessary if you choose the localStorage extension
    }

    takeTurn(move) {
        this.move = move || game.board[Math.floor(Math.random() * game.board.length)];
        console.log(`${this.name} selects ${this.move}`)
    }

    win() {
        console.log(`${this.name} wins!`)
        this.wins++;
    }

}