class NavBar {
    constructor() {
        this.title = '&#129704; Rock, Paper, Scissors';
        this.gameType = ' &#128074; Classic Game'
        this.menuButton = '';
        this.HTML = '';
        this.theme = {
            name: 'Purple',
            light: '#720d5d;',
            dark: '#4e0d3a;',
        }
        this.showButton();
        this.show();
    }
    show() {
        this.HTML = `
        <nav class="nav" style="background-color: ${this.theme.dark}">
        <h1>${this.title}</h1>
        <h1>${this.gameType}</h1>
        ${this.menuButton}
        </nav>`;
    }
    showButton() {
        this.menuButton = `<button class="button frosted button--medium--round" onClick="game.menu.show('menu')">&vellip;</button>`
        this.show();
    }
    hideButton() {
        this.menuButton = ''
        this.show();
    }
}

class Menu {
    constructor() {
        this.title = '';
        this.prompt = '';
        this.HTML = '';
        this.theme = {
            name: 'Purple',
            light: '#720d5d;',
            dark: '#4e0d3a;',
        }
    }

    setOptions(options) {
        this.options = []
        options.forEach(option => this.options.push(new MenuOption(option)))
    }

    getOptionsHTML() {
        var optionsHTML = '';
        this.options.forEach(option => optionsHTML += option.HTML)
        return optionsHTML;
    }

    show(menu) {
        game.prompt = '',
        game.navBar.hideButton();
        game.player1.hideFighters();
        game.player1.show();
        this.setOptions(data[menu].options);
        if (menu === 'name') {
            this.HTML = `
            <div class="container container-column container-menu "  style="background-color: ${this.theme.light}">
            <div class="container container-row container-menu-nav"  style="background-color: ${this.theme.dark}">
                <label class="title menu--title">${data[menu].title}</label>
                    <button class="button button--small--round frosted" onClick="game.menu.hide()">X</button>
            </div>
                <div class="container container--menu--options">
                    <input class="button frosted name-box" value="${game.player1.name}" style="text-align:center;"
       maxlength="10">
       ${this.getOptionsHTML()}
                </div>
            </div>`;
        } else {
            
            this.HTML = `
            <div class="container container-column container-menu"  style="background-color: ${this.theme.light}">
            <div class="container container-row container-menu-nav"  style="background-color: ${this.theme.dark}">
                <label class="title menu--title">${data[menu].title}</label>
                    <button class="button button--small--round frosted" onClick="game.menu.hide()">X</button>
            </div>
                <div class="container container--menu--options">
                    ${this.getOptionsHTML()}
                </div>
            </div>`;
        }
        render();
    }

    hide() {
        game.navBar.showButton()
        game.player1.show();
        game.player2.show();
        game.prompt = `${game.player1.token} &#128173; <br> It's your turn...`
        this.HTML = '';
        render();
    }
    
}
class MenuOption {
    constructor(option) {
        this.HTML = `<button class="button frosted button-menu" onClick="${option.onClick}">${option.value}  ${option.name}</button>`
    }
}

class Board {
    constructor() {
        this.title = '';
        this.prompt = '';
        this.won = '';
        this.lost = '';
        this.HTML = '';
        this.theme = {
            name: 'Purple',
            light: '#720d5d;',
            dark: '#4e0d3a;',
        }
    }

    setUp(i) {
        this.availableFighters = Array.from(data.gameType.options[i].winConditions);
    }

    moveToMedian(move) {
        for (; this.availableFighters.indexOf(move) != Math.floor(this.availableFighters.length / 2);) {
            this.availableFighters.unshift(this.availableFighters.pop());
        }
    }

    checkWinCondition(player1Move, player2Move) {
        this.moveToMedian(player1Move);
        var adjPlayer1Move = this.availableFighters.indexOf(player1Move);
        var adjPlayer2Move = this.availableFighters.indexOf(player2Move);
        var winner = 0
        if (adjPlayer2Move > adjPlayer1Move) {
            winner = 2;
        } else if (adjPlayer1Move > adjPlayer2Move) {
            winner = 1;
        }
        return winner;
    }

    show(navBar, player1, player2, menu, prompt) {
        var promptHTML ='';
        if (prompt) {
            promptHTML =`<label class="prompt">${prompt}</label>`
        }
        this.HTML = `
        <section class="container container-column-wide" style="background-color: ${this.theme.light}">
        ${navBar}
        <section class="container container-row">
        <section class="container container-column container-board">
            ${player1}
            ${promptHTML}
            ${player2}
            </section>
            ${menu}
            </section>
        </section>`;
    }

    hide() {
        this.HTML = '';
    }

}
class Game {
    constructor() {
        this.menu = new Menu();
        this.navBar = new NavBar();
        this.player1 = new Player('human');
        this.player2 = new Player('creature');
        this.board = new Board();
        this.result = [];
        this.HTML = '';
    }
    setNavType(type){
        this.navBar.gameType = `${data.gameType.options[type].value} ${data.gameType.options[type].name} Game`
        this.navBar.hideButton();
        game.menu.show('menu');
        this.setType(type);
    }
    setType(type) {

        this.type = type || 0
        this.board.setUp(this.type)
        this.player1.setFighters(this.board.availableFighters);
        this.player2.setFighters(this.board.availableFighters);
    }

    setTheme(i) {
        this.theme = {
            name: data.theme.options[i].name,
            light: data.theme.options[i].light,
            dark: data.theme.options[i].dark
        }
        this.player1.theme = this.theme;
        this.menu.theme = this.theme;
        this.navBar.theme = this.theme;
        this.board.theme = this.theme
        this.player1.show();
        this.navBar.show();
        this.board.show(this.player1.HTML, this.player2.HTML, this.menu.HTML, this.prompt)
        this.menu.show('theme')
    }

    play(userMove) {
        this.result = [];
        this.navBar.hideButton();
        this.player1.hideFighters();
        game.player1.show();
        this.prompt = `${this.player2.token} &#128173;<br>Now, it's ${this.player2.name}'s turn.`
        render();
        var player1Move = this.player1.takeTurn(userMove);
        var player2Move = this.player2.takeTurn();
        this.result.push(`${this.player2.token} &#9898; &#9898; ${this.player1.token}<br>Here we go!`)
        this.result.push(`${this.player2.token} &#9898; ${this.player1.fighters[player1Move]} ${this.player1.token} <br>You chose, ${player1Move}.`)
        this.result.push(`${this.player2.token} ${this.player2.fighters[player2Move]} ${this.player1.fighters[player1Move]} ${this.player1.token}<br>${this.player2.name} chose, ${player2Move}.`)
        var winner = this.board.checkWinCondition(player1Move, player2Move);
        switch (winner) {
            case 1:
                this.result.push(`${this.player2.token} &#128165; ${this.player1.fighters[player1Move]} ${this.player1.token}<br>${player1Move} beats ${player2Move}.`); 
                this.result.push(`&#127881; ${this.player1.token} &#127881;<br>&#10024; ${this.player1.win()}!!! &#10024;`);
            break;
            case 2:
                this.result.push(`${this.player2.token} ${this.player2.fighters[player2Move]} &#128165; ${this.player1.token}<br>${player2Move} beats ${player1Move}.`); this.result.push(`${this.player2.token}<br>${this.player2.win()}.`)
            break;
            default:
                this.result.push(`${this.player2.fighters[player2Move]} ${this.player1.fighters[player1Move]}<br>You both chose ${player1Move},`) 
                this.result.push(`${this.player2.token} ${this.player1.token}<br>it's a tie.`)
        }
        setTimeout(displayResults, 3000);
        setTimeout(this.menu.hide, 18000);
    }

    show(){
        this.setType(this.type);
        this.board.show(this.navBar.HTML, this.player1.HTML, this.player2.HTML, this.menu.HTML, this.prompt)
        this.HTML = '';
        this.HTML += this.board.HTML;
        return this.HTML;

    }

    hide(){
        this.HTML="";
    }

}