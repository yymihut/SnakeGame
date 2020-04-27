class Food {
    constructor(containerMap) {
        this.color = 'gray';
        this.containerMap = containerMap;        
    }

    createDiv() {
        const div = document.createElement('div');
        this.x = Math.floor(Math.random() * 580 / 20) * 20 + 20;
        this.y = Math.floor(Math.random() * 580 / 20) * 20 + 20;
        div.style.width = `20px`;
        div.style.height = `20px`;
        div.style.backgroundImage = `${this.image}`;
        div.style.backgroundColor = this.color;
        div.style.position = "absolute";
        div.style.top = `${this.x}px`;
        div.style.left = `${this.y}px`;
        return div;
    }

    foodObject() {
        this.objectFood = {
            x: this.x,
            y: this.y,
            name: this.name,
            scoreValue: this.score
        }
    }

    render() {
        if (this.foodInDom) {
            this.foodInDom.remove();
        }   
        this.foodInDom = this.createDiv();       
        this.containerMap.appendChild(this.foodInDom);
        this.foodObject();           
    }

}

class Pizza extends Food {
    constructor(containerMap) {
        super(containerMap);
        this.image = 'url(./images/pizza.png)';
        this.name = 'pizza';
        this.score = 20;
    }
}

class Ham extends Food {
    constructor(containerMap) {
        super(containerMap);
        this.image = 'url(./images/ham.png)';
        this.name = 'ham';
        this.score = 30;
    }
}

class Salam extends Food {
    constructor(containerMap) {
        super(containerMap);
        this.image = 'url(./images/salam.png)';
        this.name = 'salam';
        this.score = 40;
    }
}