class Snake {
    constructor(width, height, color, containerMap) {
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

    move() {
        let Lngth = this.body.length - 1;
        for (let i = Lngth; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
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
    }

    render() {
        // remove all part
        for (let i = 0; i < this.body.length; i++) {
            const domPart = this.body[i].domPart;
            if (domPart) {
                domPart.remove();
            }
        }
        for (let i = 0; i < this.body.length; i++) {
            const color = this.body[i].color;
            const x = this.body[i].x;
            const y = this.body[i].y;
            const domPart = Snake.renderBodyPart(this.width, this.height, color, x, y);
            this.body[i].domPart = domPart;
            this.containerMap.appendChild(domPart);
        }
    }

    bindKey() {
        document.addEventListener('keyup', event => {
            console.log('ddd', event.keyCode);
            switch (event.keyCode) {
                case 83: // down
                    this.direction = 'down';
                    break;
                case 87: // up
                    this.direction = 'up';
                    break;
                case 65: // left
                    this.direction = 'left';
                    break;
                case 68: // right
                    this.direction = 'right';
                    break;
            }
        });
    }
    static renderBodyPart(width, height, color, x, y) {
        const div = document.createElement('div');
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.backgroundColor = color;
        div.style.position = "absolute";
        div.style.top = `${x * width}px`;
        div.style.left = `${y * height}px`;
        return div;
    }
}