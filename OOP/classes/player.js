class Players {
    constructor(gameResults, nameCompleted) {
        this.gameResults = gameResults;
        this.nameCompleted = nameCompleted;
        this.playersArray = [];
    }

    updateLocalStorage(scoreValue) {
        this.isLocalStorage();
        this.isPush(scoreValue);
    }

    isPush(scoreValue) {
        this.playerObject = {
            name: this.nameCompleted.value,
            score: scoreValue
        }
        if (this.playerObject.score) {
            this.playersArray.push(this.playerObject);
            this.setItemLocalStorage();
        }
        this.getArrayPlayers();
        this.render();
    }

    getArrayPlayers() {
        const arrayToSort = [...this.getItemLocalStorage()];
        this.playersArraySort = this.sortArray(arrayToSort);
        return this.playersArraySort;
    }

    sortArray(array) {
        const arraySorted = array.sort(function (a, b) {
            return b.score - a.score;
        });
        return arraySorted;
    }

    isLocalStorage() {
        if (window.localStorage.length) {
            this.getItemLocalStorage();
        } else {
            this.setItemLocalStorage();
        }
    }

    setItemLocalStorage() {
        localStorage.setItem('playersArray', JSON.stringify(this.playersArray));
    }
    getItemLocalStorage() {
        this.playersArray = JSON.parse(window.localStorage.getItem('playersArray'));
        return this.playersArray;
    }

    createDomPlayers(i) {
        this.divPlayer = document.createElement('div');
        const liName = document.createElement('li');
        liName.setAttribute('class', 'nameList');
        const liScore = document.createElement('li');
        liScore.setAttribute('class', 'scoreList');
        liName.innerText = `${this.playersArraySort[i].name}`;
        liScore.innerText = `${this.playersArraySort[i].score}`;
        this.divPlayer.setAttribute('class', 'divPlayer');
        this.divPlayer.appendChild(liName);
        this.divPlayer.appendChild(liScore);
        return this.divPlayer;
    }

    render() {
        this.gameResults.innerHTML = '';
        this.getArrayPlayers();
        /* if (this.playersArraySort.length > 3) {
            for (let i = 0; i < 3; i++) {
                const players = this.createDomPlayers(i);
                this.gameResults.appendChild(players);
            }
        } else {
            for (let i = 0; i < this.playersArraySort.length; i++) {
                const players = this.createDomPlayers(i);
                this.gameResults.appendChild(players);
            }
        } */
        const items = this.playersArraySort.filter((item, idx) => idx < 3);

        for (let i = 0; i < items.length; i++) {
            const players = this.createDomPlayers(i);
            this.gameResults.appendChild(players);
        }
    }
}