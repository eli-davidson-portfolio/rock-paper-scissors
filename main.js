
var game = createGame();

function createGame() {
    var player1 = new Player('human', 'token', 0);
    var player2 = new Player('computer', 'token', 0);
    render(`Game Created`);
    render(`${player1.get('name')}: ${player1.get('wins')}`);
    render(`VS`);
    render(`${player2.get('name')}: ${player2.get('wins')}`);
    render(`Select Game Type:`);
    return new Game(player1, player2);
}

function setGameType(type) {
    game.type = type;
    render(`game type: ${game.type}`)
}

function render(message) {
    console.log(message);
}