let apiCall = () => fetch('https://emojihub.herokuapp.com/api/all').then(response => {
   (response.ok) ? response.json() : console.log("response not okay")
}).then(data => console.log("data is", data))


let game;

apiCall().then(game = new Game())


const render = () => document.querySelector('.main').innerHTML = game.show()

const displayResults = () => game.result.forEach((result, index) => setTimeout(() => document.querySelector('.prompt').innerHTML = result, index * 3000)) 

game.menu.show('menu');

