function Snake(width, height, color, containerMap) {
  this.width = width;
  this.height = height;
  this.containerMap = containerMap;
  this.direction = 'right';
  this.score = 0;
  this.body = [
    {
      x: 1,
      y: 1,
      color: 'red'
    },
    {
      x: 2,
      y: 1,
      color: color
    },
    {
      x: 3,
      y: 1,
      color: color
    }
  ];
}

// facem ca snake-ul nostru sa se miste
Snake.prototype.run = function () {
  const levelAndSpeed = new Level();
  const food = new Food('orange');
  this.containerMap.appendChild(food.renderFood());
  setInterval(() => {                 /* **************************** */
    let Lngth = this.body.length - 1;
    for (let i = Lngth; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }
    switch (this.direction) {
      case 'right':
        this.body[0].y = this.body[0].y + 1;
        break;
      case 'left':
        this.body[0].y = this.body[0].y - 1;
        break;
      case 'down':
        this.body[0].x = this.body[0].x + 1;
        break;
      case 'up':
        this.body[0].x = this.body[0].x - 1;
        break;
    }
    this.render();
    //render food
   
    let getX = document.getElementById('food').offsetTop;
    let getY = document.getElementById('food').offsetLeft; 
    if (this.body[0].x * 20 == getX && this.body[0].y * 20 == getY) {
      let atEnd = this.body[this.body.length-1];      
      this.body.push({
        x: atEnd.x-1,
        y: atEnd.y-1,
        color: 'green'
      });
      this.score = this.score + 50;
      const score = document.querySelector('.score > span');
      score.innerText = `${this.score}`
      const old = document.getElementById('food');
      old.remove();
      this.containerMap.appendChild(food.renderFood()); 
    }
    //game over
    if (this.body[0].x * 20 == 620 || this.body[0].y * 20 == 620 ||
      this.body[0].x * 20 == 0 || this.body[0].y * 20 == 0 ||
      this.body.elementsNotDistinct() ){
      alert('Game over');
      location.reload();
    } 
    //modificare level si viteza
    console.log(levelAndSpeed.changeSpeedandLevel(this.body.length)[1]);
    this.containerMap.querySelector('span').innerText = 
    `${levelAndSpeed.changeSpeedandLevel(this.body.length)[0]}`;
   
  }, levelAndSpeed.changeSpeedandLevel(this.body.length)[1]);                      /* **************************** */

}
// adaugam la Array functia elementsNotDistinct
// pt. verificare ca arrayul sarpelui sa contina elemente unice (daca nu Game over)
Array.prototype.elementsNotDistinct = function () {
  let i, j, length = this.length - 1;
  for(i = 0; i < length; i++)
      for (j = i + 1; j <= length; j++)
          if (`${this[i].x}${this[i].y}` === `${this[j].x}${this[j].y}`) return true;

  return false;
};

// aici afisam Snake-ul nostru, sunt mai multe div-uri

Snake.prototype.render = function () {
  // remove all part
  for (let i = 0; i < this.body.length; i++) {
    console.log('lungimea la render   this.body : ' + this.body.length)
    const domPart = this.body[i].domPart;
    if (domPart) {
      domPart.remove();
    }
  }
  for (let i = 0; i < this.body.length; i++) {
    const color = this.body[i].color;
    const x = this.body[i].x;
    const y = this.body[i].y;
    console.log('background Color   : ' + this.body[i].color)
    const domPart = Snake.renderBodyPart(this.width, this.height, color, x, y);
    this.body[i].domPart = domPart;
    this.containerMap.appendChild(domPart);
  }
}

// avem o functie statica, este o functie normala doar ca este atasata de Snack
Snake.renderBodyPart = function (width, height, color, x, y) {

  const div = document.createElement('div');
  div.style.width = `${width}px`;
  div.style.height = `${height}px`;
  div.style.backgroundColor = color;
  div.style.position = "absolute";
  div.style.top = `${x * width}px`;
  div.style.left = `${y * height}px`;

  return div;
}

// ascultam la eventul de keypress pentru a putea schimba directia sarpelui
Snake.prototype.bindKey = function () {

  document.addEventListener('keyup', event => {
    console.log('ddd', event.keyCode)
    switch (event.keyCode) {
      case 83: // down
        this.direction = 'down'
        break;
      case 87: // up
        this.direction = 'up'
        break;
      case 65: // left
        this.direction = 'left'
        break;
      case 68: // right
        this.direction = 'right'
        break;
    }
  })
}

// aici luam div-ul pentru a pune fiecare parte din sarpe in el
const containerMap = document.querySelector('.container-map')
const snack = new Snake(20, 20, 'green', containerMap);

snack.run();
snack.bindKey();

