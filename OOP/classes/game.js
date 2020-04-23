function Game(containerMap) {
    this.containerMap = containerMap;
}

Game.prototype.start = function() {
    this.snakeul = new Snake(20, 20, 'green', containerMap);
    /* this.food = new Food(this.containerMap); */
    this.pizza = new Pizza(this.containerMap);
    this.levelAndSpeed = new Level();
    this.pizza.render();
    console.log(this)
    this.run();
    this.snakeul.bindKey();
}

// facem ca snake-ul nostru sa se miste
Game.prototype.run = function() {
    const intervalId = setInterval(() => {                 /* **************************** */
        this.snakeul.move()
        //render food
        let getX = document.getElementById('food').offsetTop;
        let getY = document.getElementById('food').offsetLeft;
        console.log('getX, getY---- >'+ getX +'-----'+getY)
        if (this.snakeul.body[0].x * 20 == getX && this.snakeul.body[0].y * 20 == getY) {
            let atEnd = this.snakeul.body[this.snakeul.body.length - 1];
            console.log(this.snakeul.body[0].x+'-X---cap---Y-'+this.snakeul.body[0].y)
            for(let i=0; i<this.snakeul.body.length; i++){
                console.log(this.snakeul.body[i].x+'-X-----Y-'+this.snakeul.body[i].y)
            }            
            console.log(atEnd)
            this.snakeul.body.push({
                x: atEnd.x + 10,
                y: atEnd.y + 10,
                color: 'green'
            });
            this.score = this.score + 50;
            const score = document.querySelector('.score > span');
            score.innerText = `${this.score}`
            console.log(score)
            this.pizza.render();
            
            clearInterval(intervalId);
            this.run()
        }
        //game over
        this.gameOverEventFn();
        //modificare level si viteza
        this.containerMap.querySelector('span').innerText =
            `${this.levelAndSpeed.changeSpeedandLevel(this.snakeul.body.length)[0]}`;        
    }, this.levelAndSpeed.changeSpeedandLevel(this.snakeul.body.length)[1]);                   /* **************************** */
}

// adaugam la Array functia elementsNotDistinct
// pt. verificare ca arrayul sarpelui sa contina elemente unice (daca nu Game over)
Array.prototype.elementsNotDistinct = function () {
    let i, j, length = this.length - 1;
    for (i = 0; i < length; i++)
        for (j = i + 1; j <= length; j++)
            if (`${this[i].x}${this[i].y}` === `${this[j].x}${this[j].y}`) return true;

    return false;
};

Game.prototype.addGameOverEvent = function(eventCallback) {
    this.gameOverEventFn = eventCallback
}


