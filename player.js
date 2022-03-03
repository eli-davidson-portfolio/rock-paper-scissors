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

    takeTurn(fighterID) {
        this.move = fighterID || this.randomMove();
    }

    randomMove(availableMoves) {
        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    win() {
        this.wins++;
    }

    get(property) {
        return this[property];
    }
}