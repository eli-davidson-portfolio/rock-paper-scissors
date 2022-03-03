
var game = createGame();
render()

function createGame() {
    var player1 = new Player('human', 'token', 0);
    var player2 = new Player('computer', 'token', 0);
    return new Game(player1, player2);
}

function setGameType(type) {
    game.type = type;
    game.resetBoard();
    render()
}

function render() {
    console.log(`____________________`);
    console.log(`${game.player1.get('name')}: ${game.player1.get('wins')}`);
    console.log(`VS`);
    console.log(`${game.player2.get('name')}: ${game.player2.get('wins')}`);
    console.log(`Selected Game Type: ${game.type}`);
    console.log(`game board: ${game.board}`);
}

// function left() {
//     moves.push(moves.shift());
//     render(moves);
// }

// function right() {
//     moves.unshift(moves.pop());
//     render(moves);
// }