// Create a file crops.js and add the Wheat class.
// The wheat class accepts the number of acres (area) as the sole constructor argument
// and has a function to calculate the yield:
class Crop {
    constructor(acres) {
        this.acres = acres
    }
// Create a method getYieldInEuros() in the Crop class
// that uses the price and the getYieldInKg function to calculate the value of the yield in euro's
    getYieldInEuros() {
        return this.price * this.getYieldInKg()
    }

    getCosts() {
        return this.acres * this.cost
    }
}

class Wheat extends Crop {
    // constructor removed because of extends
    // constructor in the parent class
    // then constructor needed again »
    // because of price property
    // super is refers to class Crop's constructor(acres) {this.acres = acres}
    constructor(acres) {
        super(acres)
        this.price = 1.5
        this.cost = 340
    }
    getYieldInKg() {
        // ECMAScript 2016 the exponentiation operator was introduced.
        // Which is equivalent to Math.pow.  
        return Math.pow(this.acres * 1.5, 1.3)
    }
}

class Sugarcane extends Crop {
    constructor(acres) {
        super(acres)
        this.price = 2.0
        this.cost = 166
    }
    getYieldInKg() {
        return Math.pow(this.acres * 2.6, 1.1)
    }
}

// same as » module.exports = { Wheat, Sugarcane, Crop }
module.exports = {
    Wheat,
    Sugarcane,
    Crop
}