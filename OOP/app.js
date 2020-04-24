const containerMap = document.querySelector('.container-map');

const game = new Game(containerMap);
game.start();
game.addGameOverEvent(function (e) {
  if (this.snakeul.body[0].x * 20 == 620 || this.snakeul.body[0].y * 20 == 620 ||
    this.snakeul.body[0].x * 20 == 0 || this.snakeul.body[0].y * 20 == 0 ||
    this.snakeul.body.elementsNotDistinct()) {
    alert('Game over');
    location.reload();
    /* game.start(); */
  }  
})

