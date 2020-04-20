function Level() {
}

Level.prototype.changeSpeedandLevel = function (arrayLength) {
    console.log('la level arrayLength ----->>>' + arrayLength)
    switch (true) {
        case (3 <= arrayLength && arrayLength < 5):
            return ['Level - 1', 200]
        case (5 <= arrayLength && arrayLength < 10):
            return ['Level - 2', 80]
        case (10 <= arrayLength && arrayLength < 15):
            return  ['Level - 3', 60]
        case (15 <= arrayLength && arrayLength < 20):
            return  ['Level - 4', 40]
        case (20 <= arrayLength && arrayLength < 25):
            return  ['Level - 5', 20]
        case (arrayLength >= 25):
            return ['Level - 6', 10] 
    }
}