const game = new Game();

const render = () => document.querySelector('.main').innerHTML = game.show()

const displayResults = () => game.result.forEach((result, index) => setTimeout(() => document.querySelector('.prompt').innerHTML = result, index * 3000)) 

game.menu.show('menu');
