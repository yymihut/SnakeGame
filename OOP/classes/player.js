class Players {
    constructor(gameResults, nameCompleted) {
        this.gameResults = gameResults;
        this.nameCompleted = nameCompleted;
        this.playersArray = [];
    }

    updateLocalStorage(scoreValue) {
        this.isLocalStorage();     
        this.playerObject = {
            name: this.nameCompleted.value,
            score: scoreValue
        }
        console.log('update local storage', this.playersArray);
        this.playersArray.push(this.playerObject);
        this.seItemLocalStorage();

    }

    isLocalStorage() {
        if (window.localStorage.length) {
            this.getItemLocalStorage();
            console.log('local', this.playersArray)
        } else {
            this.seItemLocalStorage();
        }
        console.log(window.localStorage.length);
    }

    seItemLocalStorage() {
        this.playersArray = window.localStorage.setItem('playersArray', JSON.stringify(this.playersArray));
    }
    getItemLocalStorage() {
        this.playersArray = JSON.parse(window.localStorage.getItem('playersArray'));
    }

    createDomLi() {
        const divPlayer = document.createElement('div');
        const liName = document.createElement('li');
        const liScore = document.createElement('li');
        divPlayer.setAttribute('class', 'divPlayer');
        divPlayer.appendChild(liName);
        divPlayer.appendChild(liScore);
        console.log('divPlayer', divPlayer)
        return divPlayer;
    }

    render() {
        this.player = this.createDomLi();
        this.gameResults.appendChild(this.player);
    }
}