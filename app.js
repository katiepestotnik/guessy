const game = {
    title: 'Guess the number',
    biggestNum: 10,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function (guess) {
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        this.getGuess()
    },
    getGuess: function () {
        let guess
        while (guess !== game.secretNum) {
            guess = parseInt(prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum} your previous guesses: * ${this.prevGuesses} *`))
            this.prevGuesses.push(guess)
            if (guess > this.biggestNum || guess < this.smallestNum) {
                alert(`${guess} is not within the guessing range`)
            } 
            if (guess < game.secretNum) {
                alert(`${guess} is too low, try again`)
            } else if (guess > game.secretNum) {
                alert(`${guess} is too high, try again`)
            } else if (guess === game.secretNum) {
                alert(`${guess} is correct, you got it after ${this.prevGuesses.length} times.`)
            } else if (!guess) {
                break
            }  
            else {
                break
            }
        }
    },
    render: function () {

    }
}

game.play()


