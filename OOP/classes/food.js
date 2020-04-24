class Food {
    constructor(containerMap) {
        this.color = 'gray';
        this.containerMap = containerMap;
    }

    createDiv() {
        const div = document.createElement('div');
        let x = Math.floor(Math.random() * 580 / 20) * 20 + 20;
        let y = Math.floor(Math.random() * 580 / 20) * 20 + 20;
        div.setAttribute('id', 'food');
        div.style.width = `20px`;
        div.style.height = `20px`;
        div.style.backgroundImage = `${this.image}`;
        div.style.backgroundColor = this.color;
        div.style.position = "absolute";
        div.style.top = `${x}px`;
        div.style.left = `${y}px`;
        return div;
    }

    render() {
        if (this.foodInDom) {
            this.foodInDom.remove();
        }
        this.foodInDom = this.createDiv();
        this.containerMap.appendChild(this.foodInDom);
        
    }
}

class Pizza extends Food {
    constructor(containerMap) {
        super(containerMap);
        this.image = 'url(./images/pizza.png)'
      }    
} 

class Ham extends Food {
    constructor(containerMap) {
        super(containerMap);
        this.image = 'url(./images/ham.png)'
      }    
} 

class Salam extends Food {
    constructor(containerMap) {
        super(containerMap);
        this.image = 'url(./images/salam.png)'
      }    
} 