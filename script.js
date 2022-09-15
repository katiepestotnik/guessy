const game = {
    title: 'Guess the number',
    biggestNum: 10,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function () {
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        let guess
        while (guess !== this.secretNum) {
            let guess = this.getGuess()
            this.render(guess)
            if(!guess)break
            if(guess === this.secretNum)break

        }
    },
    getGuess: function () {
        let guess = parseInt(prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum} your previous guesses: * ${this.prevGuesses} *`))
        this.prevGuesses.push(guess)
        if (guess > this.biggestNum || guess < this.smallestNum) {
            alert(`${guess} is not within the guessing range`)
        }
        return guess

    },
    render: function (guess) {
            if (guess < game.secretNum) {
                alert(`${guess} is too low, try again`)
            } else if (guess > game.secretNum) {
                alert(`${guess} is too high, try again`)
            } else if (guess === game.secretNum) {
                alert(`${guess} is correct, you got it after ${this.prevGuesses.length} times.`)
            }
    }
}

game.play()


