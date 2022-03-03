var game = new Game();
game.reset();


function render() {
    console.log(`${game.player1.name}: ${game.player1.wins}`);
    console.log(`${game.player2.name}: ${game.player2.wins}`);
    console.log(`Game Type: ${game.type}`);
    console.log(`Available Moves: ${game.board}`);
}
