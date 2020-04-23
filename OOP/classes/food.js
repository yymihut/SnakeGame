function Food(containerMap) {
    this.color = 'gray';
    this.containerMap = containerMap
}

Food.prototype.createDiv = function() {
    const div = document.createElement('div');
    let x = Math.floor(Math.random() * 580 / 20) * 20 + 20;
    let y = Math.floor(Math.random() * 580 / 20) * 20 + 20;

    div.setAttribute('id', 'food');
    div.style.width = `20px`;
    div.style.height = `20px`;
    div.style.backgroundColor = this.color;
    div.style.position = "absolute";
    div.style.top = `${x}px`
    div.style.left = `${y}px`;

    return div
}

Food.prototype.render = function() {
    if (this.foodInDom){
        this.foodInDom.remove();
    }    
    this.foodInDom = this.createDiv();
    this.containerMap.appendChild(this.foodInDom);
}

function Pizza(containerMap){
    Food.call(this)
}
Pizza.prototype = Object.create(Food.prototype);
Pizza.prototype.createDiv = function() {
    const div = document.createElement('div');
    let x = Math.floor(Math.random() * 580 / 20) * 20 + 20;
    let y = Math.floor(Math.random() * 580 / 20) * 20 + 20;

    div.setAttribute('id', 'food');
    div.style.width = `20px`;
    div.style.height = `20px`;
    div.style.backgroundImage = 'url(./images/pizza.png)'
    div.style.backgroundColor = this.color;
    div.style.position = "absolute";
    div.style.top = `${x}px`
    div.style.left = `${y}px`;

    return div
}

/* Ham.prototype = Object.create(Food.prototype);
Salam.prototype = Object.create(Food.prototype); */

