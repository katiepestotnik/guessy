const game = {
    title: 'Guess the number',
    biggestNum: null,
    smallestNum: null,
    secretNum: null,
    prevGuesses: [],
    play: function () {
        this.biggestNum = this.getBiggest()
        this.smallestNum = this.getSmallest()
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        let guess
        while (guess !== this.secretNum) {
            guess = this.getGuess()
            this.render(guess)
            if(!guess)break
            if(guess === this.secretNum)break
        }
    },
    getBiggest: function () {
        return parseInt(prompt('Select high range number.'))
    },
    getSmallest: function () {
        return parseInt(prompt('Select low range number.'))
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
            if (guess < this.secretNum) {
                alert(`${guess} is too low, try again`)
            } else if (guess > this.secretNum) {
                alert(`${guess} is too high, try again`)
            } else if (guess === this.secretNum) {
                alert(`${guess} is correct, you got it after ${this.prevGuesses.length} times.`)
            }
    }
}

const play = () => {
    location.reload()
    game.play()
}

document.querySelector('.play-game').addEventListener('click', play)
//game.play()


