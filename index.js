class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
    }

    addCrop(crop) {
        this.crops.push(crop)
    }

    calculateIncome() {
        // calculate total income!
        // we can transform all the crops into a value using the map function:
        return this.crops
            .map(crop => crop.getYieldInEuros())
            // map returns an array » with wheat and sugarcane yield...
            // but we need a single value » .reduce (sum up into a single value)
            .reduce((a,b) => a + b, 0)
    }
}

// export
module.exports.Farm = Farm

