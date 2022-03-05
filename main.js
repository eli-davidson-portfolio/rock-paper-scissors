
function newGame() {
    game = new Game();
    game.reset();
}

function render() {
    document.getElementById('player1-name').innerText = game.player1.name;
    document.getElementById('player1-avatar').innerHTML = `${game.player1.token.avatar.value}`;
    document.getElementById('player2-name').innerText = game.player2.name;
    document.getElementById('player2-avatar').innerHTML = game.player2.token.avatar.value;
}

var game;
newGame();
game.setType('advanced');
game.setBoard();