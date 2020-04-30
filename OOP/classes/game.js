class Game {
    constructor(containerMap, gameResults, nameCompleted) {
        this.containerMap = containerMap;
        this.gameResults = gameResults;
        this.nameCompleted = nameCompleted;

    }

    start() {
        this.foodInit();
        this.run();
        this.snakeul.bindKey();
        this.playersInit();
    }

    playersInit() {
        this.players = new Players(this.gameResults, this.nameCompleted, this.scoreValue);
        this.players.render();
        console.log('playersInit()----', this.gameResults)
    }

    foodInit() {
        this.foodObjects = [];
        this.snakeul = new Snake(20, 20, 'green', containerMap);
        this.pizza = new Pizza(this.containerMap);
        this.pizza.render();
        this.foodObjects.push(this.pizza.objectFood);
        this.ham = new Ham(this.containerMap);
        this.ham.render();
        this.foodObjects.push(this.ham.objectFood);
        this.salam = new Salam(this.containerMap);
        this.salam.render();
        this.foodObjects.push(this.salam.objectFood);
        console.log(this.foodObjects);
    }

    // facem ca snake-ul nostru sa se miste
    run() {
        this.intervalId = setInterval(() => {
            this.snakeul.move();
            //render food
            const idxPizza = this.findFoodIndex('pizza');
            const idxHam = this.findFoodIndex('ham');
            const idxSalam = this.findFoodIndex('salam');
            const headX = this.snakeul.body[0].x * 20;
            const headY = this.snakeul.body[0].y * 20;
            const pizzaX = this.foodObjects[idxPizza].x;
            const pizzaY = this.foodObjects[idxPizza].y;
            const hamX = this.foodObjects[idxHam].x;
            const hamY = this.foodObjects[idxHam].y;
            const salamX = this.foodObjects[idxSalam].x;
            const salamY = this.foodObjects[idxSalam].y;
            if (headX == pizzaX && headY == pizzaY) {
                this.renderClearRun(this.pizza, idxPizza);
            }
            else if (headX == hamX && headY == hamY) {
                this.renderClearRun(this.ham, idxHam);
            }
            else if (headX == salamX && headY == salamY) {
                this.renderClearRun(this.salam, idxSalam);
            }
            //game over
            this.gameOverFn();
            //modificare level si viteza
            this.containerMap.querySelector('span').innerText =
                `${this.levelAndSpeed().level}`;
        }, 452)
    }
    /* this.levelAndSpeed().speed); */
    levelAndSpeed() {
        const arrayLength = this.snakeul.body.length;
        switch (true) {
            case (3 <= arrayLength && arrayLength < 4):
                return {
                    level: 'Level - 1',
                    speed: 200
                };
            case (4 <= arrayLength && arrayLength < 6):
                return {
                    level: 'Level - 2',
                    speed: 150
                };
            case (6 <= arrayLength && arrayLength < 8):
                return {
                    level: 'Level - 3',
                    speed: 140
                };
            case (8 <= arrayLength && arrayLength < 10):
                return {
                    level: 'Level - 4',
                    speed: 130
                };
            case (10 <= arrayLength && arrayLength < 12):
                return {
                    level: 'Level - 5',
                    speed: 120
                };
            case (arrayLength >= 12):
                return {
                    level: 'Level - 6',
                    speed: 110
                };
        }
    }

    findFoodIndex(foodType) {
        const foodIndex = this.foodObjects.map(e => {
            for (let i = 0; i < this.foodObjects.length; i++) {
                return e.name;
            }
        }).indexOf(`${foodType}`);
        return foodIndex;
    }

    renderClearRun(thisFood, index) {
        this.addFood();
        this.addScore(thisFood);
        this.foodObjects.splice(index, 1);
        thisFood.render();
        this.foodObjects.push(thisFood.objectFood);
        console.log(this.foodObjects);
        clearInterval(this.intervalId);
        this.run();
    }

    addFood() {
        let atEnd = this.snakeul.body[this.snakeul.body.length - 1];
        this.snakeul.body.push({
            x: atEnd.x + 10,
            y: atEnd.y + 10,
            color: 'green'
        });
    }

    addScore(thisFood) {
        const foodScore = thisFood.objectFood.scoreValue;
        const scoreDOM = this.containerMap.querySelector('.score > span');
        this.scoreValue = parseInt(scoreDOM.innerText) + foodScore;
        scoreDOM.innerText = this.scoreValue;
    }

    gameOverFn() {
        if (this.snakeul.body[0].x * 20 == 620 || this.snakeul.body[0].y * 20 == 620 ||
            this.snakeul.body[0].x * 20 == 0 || this.snakeul.body[0].y * 20 == 0 ||
            this.snakeul.body.elementsNotDistinct()) {
            alert('Game over');
            /* location.reload(); */
            /* checkPlayers(); */
            /* this.players.render(); */ 
            this.players.isLocalStorage();
            this.players.updateLocalStorage(this.scoreValue);
            /* this.players.render(); */
        }
    }
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

