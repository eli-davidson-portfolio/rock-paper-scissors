class Hud {
    constructor() {
        this.token = '';
        this.name = '';
        this.wins = 0;
        this.HTML = '';
        this.show();

    }
    update(token, name, wins) {
        this.token = token;
        this.name = name;
        this.wins = wins;
        this.show();
    }
    show() {
        this.HTML = `
        <section class="hud">
            <div class="container container--option--avatar" >
                <label class="token"">${this.token}</label>
            </div>
            <div class="containter containter--option--stats">
                <lable class="name">${this.name}</label><br>
                <lable class="wins">${this.wins}</lable>
            </div>
        </section>
        `;
    }
    hide() {
        this.HTML = '';
    }
}


class Player {
    constructor (species) {
        this.species = species;
        this.playerNumber = 0;
        this.name = 'Human'
        this.avatarName = 'Person';
        this.avatar = ''
        this.token = '';
        this.gender = 'nonBinary'
        this.age = 'adult';
        this.skinTone = '';
        this.fighters = {};
        this.wins = 0;
        this.move = '';
        this.moveIndex;
        this.HTML = '';
        this.hud = new Hud();
        this.theme = {
            name: 'Purple',
            light: '#720d5d;',
            dark: '#4e0d3a;',
        }
        this.setPlayerNumber();
        this.setToken();
    }
    show() {
        this.hud.update(this.token, this.name, this.wins);
        this.HTML= `
        <section class="container frosted container--player${this.playerNumber}" style="background-color: ${this.theme.light}">
            ${this.fightersHTML}
            ${this.hud.HTML}
        </section>`
    }
    hide() {
        this.HTML = "";
    }

    setToken() {
        this.token = '';
        if (this.species === 'human') {
            this.avatarName = data.token[this.species][this.gender][this.age].name;
            this.avatar = data.token[this.species][this.gender][this.age].value;
            this.token = this.avatar + this.skinTone;
        } else {
            this.theme.light = '#696868;'
            var creatureIndex = this.getRandomIndex(data.token[this.species])
            this.name = data.token[this.species][creatureIndex].name;
            this.token = data.token[this.species][creatureIndex].value;
        }
        this.hud.update(this.token, this.name, this.wins);
    }

    setPlayerNumber() {
            this.playerNumber = 2
        if (this.species === 'human') {
            this.playerNumber = 1
        }
    }

    setName() {
        var name = document.querySelector('.name-box').value
        if (name) {
            this.name = name;
            this.setToken()
            game.menu.show('charactor');
        }
    }

    setGender(gender) {
        this.gender = gender;
        this.setToken();
        game.menu.show('gender');
    }

    setAge(age) {
        this.age = age;
        this.setToken();
        game.menu.show('age');
    }

    setSkinTone(index) {
        this.skinTone = data.skinTone.options[index].value;
        this.setToken();
        game.menu.show('skinTone');
    }

    setFighters(fighters) {
        this.fightersHTML = '';
            for (var i = 0; i < fighters.length; i++) {
                var key = fighters[i].toLowerCase();
                var name = data.fighters[key].name;
                var emoji = data.fighters[key][this.species]
                if (this.species === 'human') {
                    emoji += this.skinTone;
                    this.fightersHTML += `<button class="button button--round frosted fighter-button fighter-${key}" name="${name}" onClick="game.play('${name}')"><label class="fighter">${emoji}</label></button>`
                }
                this.fighters[name] = emoji;
            }
    }

    hideFighters() {
        this.fightersHTML = '';
    }

    getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    getRandomValue(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    takeTurn(move) {
        this.move = move || this.getRandomValue(game.board.availableFighters)
        this.moveIndex = game.board.availableFighters.indexOf(this.move);
        return this.move;
    }

    win() {
        this.wins++;
        this.show();
        return `${this.name} wins`;
    }

    saveWinsToStorage() {
        // only necessary if you choose the localStorage extension
    }

    retrieveWinsFromStorage() {
        // only necessary if you choose the localStorage extension
    }
}