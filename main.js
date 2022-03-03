var game = new Game();
render();

function render() {
    console.log(`${game.player1.get('name')}: ${game.player1.get('wins')}`);
    console.log(`${game.player2.get('name')}: ${game.player2.get('wins')}`);
    console.log(`Game Type: ${game.type}`);
    console.log(`Available Moves: ${game.board}`);
}
