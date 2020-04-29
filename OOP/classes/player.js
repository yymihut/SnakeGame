class Player {
    constructor(containerGameresults){
        this.containerGameresults = containerGameresults;
    }

    createDomLi() {
        const divPlayer = document.createElement('div');
        const liName = document.createElement('li');
        const liScore = document.createElement('li');
        divPlayer.setAttribute('class', 'divPlayer');
        divPlayer.appendChild(liName);
        divPlayer.appendChild(liScore);
        return divPlayer;
    }

    render() {
        this.player = this.createDomLi();
        this.containerGameresults.appendChild(this.player);
    }
}