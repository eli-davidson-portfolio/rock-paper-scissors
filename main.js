
var game = createGame();

function createGame() {
    var player1 = new Player('human', 'token', 0);
    var player2 = new Player('computer', 'token', 0);
    return new Game(player1, player2);
}

function setGameType(type) {
    game.type = type;
    console.log(`game type: ${game.type}`)
}