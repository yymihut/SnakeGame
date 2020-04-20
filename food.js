function Food(color) {
    this.color = color;
}

Food.prototype.renderFood = function () {
    let x = Math.floor(Math.random() * 580 / 20) * 20 + 20;
    let y = Math.floor(Math.random() * 580 / 20) * 20 + 20;
    console.log('random y : ' + y);
    console.log('random x : ' + x);
    const div = document.createElement('div');
    div.setAttribute('id', 'food');
    div.style.width = `20px`;
    div.style.height = `20px`;
    div.style.backgroundColor = this.color;
    div.style.position = "absolute";
    div.style.top = `${x}px`
    div.style.left = `${y}px`;

    return div;
}

