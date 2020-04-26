function Level() {
}

Level.prototype.changeSpeedandLevel = function (arrayLength) {
    console.log('la level arrayLength ----->>>' + arrayLength)
    switch (true) {
        case (3 <= arrayLength && arrayLength < 4):
            return ['Level - 1', 200]
        case (4 <= arrayLength && arrayLength < 6):
            return ['Level - 2', 150]
        case (6 <= arrayLength && arrayLength < 8):
            return  ['Level - 3', 120]
        case (8 <= arrayLength && arrayLength < 10):
            return  ['Level - 4', 110]
        case (10 <= arrayLength && arrayLength < 12):
            return  ['Level - 5', 100]
        case (arrayLength >= 12):
            return ['Level - 6', 90] 
    }
}