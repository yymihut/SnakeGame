const containerMap = document.querySelector('.container-map');
const gameResults = document.querySelector('.gameResults');
const clearStorageBtn = document.getElementById('clearStorage');
const startGameBtn = document.getElementById('startGame');
const resetGameBtn = document.getElementById('resetGame');
const nameCompleted = document.getElementById('enteredName');

const errorCompletion = () => {
  nameCompleted.style.color = 'red';
  nameCompleted.style.fontWeight = 'bold';
  nameCompleted.value = 'Please enter Name !'
  nameCompleted.addEventListener('click', function () {
    nameCompleted.value = '';
    nameCompleted.style.color = 'black';
  });
}

startGameBtn.addEventListener('click', () => {
  console.log('bbbb',window.localStorage.length)
  if (nameCompleted.value == 'Please enter Name !') {
    nameCompleted.value = ''
  } else {
    if (nameCompleted.value) {
      const game = new Game(containerMap, gameResults, nameCompleted);
      game.start();
      startGameBtn.disabled = true;
      nameCompleted.disabled = true;
    } else {
      errorCompletion()
    }
  }
});

resetGameBtn.addEventListener('click', ()=> {  
  location.reload();  
})

clearStorageBtn.addEventListener('click', ()=> {  
  window.localStorage.clear();  
})






