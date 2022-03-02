class Player {
    constructor (name, token, wins) {
        this.name = name;
        this.token = token;
        this.wins = wins || 0;
    }

    saveWinsToStorage () {
        // only necessary if you choose the localStorage extension
    }

    retrieveWinsFromStorage() {
        // only necessary if you choose the localStorage extension
    }

    takeTurn() {
        
    }

    win() {
        this.wins++;
    }

    get(property) {
        return this[property];
    }
}