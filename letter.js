function Letter(myValue) {
    this.guess = false;
    this.value = myValue;
    this.dispaly = function() {
        if (this.guess){
            return this.value;
        } else {
            return "_ ";
        }
    };
    this.check = function(userGuess){
        if(userGuess.toLowerCase === true) {
            this.guess = true;
            return true;
        }else {
            return false;
        }
    }
}

module.exports = Letter;