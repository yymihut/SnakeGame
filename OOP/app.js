const containerMap = document.querySelector('.container-map');
const containerGameresults = document.querySelector('.containerGameresults');
const startGameBtn = document.getElementById('startGame');

startGameBtn.addEventListener('click', function () {
  const game = new Game(containerMap, containerGameresults);
  game.start();
})



