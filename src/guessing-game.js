class GuessingGame {
    constructor() {}
    
    range = {
        min: 0,
        max: 0,
    }    

    setRange(min, max) {
        this.range.min = min;
        this.range.max = max;
    }

    guess() {
        return Math.round((this.range.max - this.range.min) / 2) + this.range.min;
    }

    lower() {
        this.range.max = this.guess();
    }

    greater() {
        this.range.min = this.guess();
    }
}

module.exports = GuessingGame;
