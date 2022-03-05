class Player {
    constructor (human) {
        this.name = '';
        this.token = {};
        this.wins = 0;
        this.move = '';
        this.moveIndex;
        this.setDefaultToken(human);
    }

    setDefaultToken(human) {
        this.token.avatar = {};
        console.log(data.avatar.human.skinTone[3].value)
        if (human) {
            this.token.avatar.name = data.avatar.human.gender.nb.adult.name;
            this.token.avatar.value = data.avatar.human.gender.nb.adult.value;
            this.token.avatar.skinTone = data.avatar.human.skinTone[3].value;
            this.token.fighter = data.fighters.human;
        } else {
            var creatureIndex = this.getRandomIndex(data.avatar.creature)
            this.token.avatar.name = data.avatar.creature[creatureIndex].name;
            this.token.avatar.value = data.avatar.creature[creatureIndex].value;
            this.token.fighter = data.fighters.creature;  
        }   this.name = this.token.avatar.name;
    }

    setName(name) {
        this.name = name;
        render();
    }

    getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    getRandomValue(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    takeTurn(move) {
        this.move = move || this.getRandomValue(game.board)
        console.log(`${this.name} selects ${this.move}`)
    }

    win() {
        this.wins++;
        return `${this.name} wins`;
    }

    saveWinsToStorage() {
        // only necessary if you choose the localStorage extension
    }

    retrieveWinsFromStorage() {
        // only necessary if you choose the localStorage extension
    }
}