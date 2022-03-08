

function newGame() {
    game = new Game();
    game.reset();
}

function render() {
    document.querySelector('.main').innerHTML = game.show();
}

function displayResults() {
    var prompt = document.querySelector('.prompt');
    for (let i = 0; i < game.result.length; i++) {
        setTimeout(() => {prompt.innerHTML = game.result[i];}, i * 3000);
    }
    setTimeout(game.menu.hide, 15000);
}


var game = new Game();
game.menu.show('menu');
