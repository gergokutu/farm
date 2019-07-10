class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
        this.animals = []
    }

    addCrop(crop) {
        this.crops.push(crop)
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    calculateIncome() {
        // calculate total income!
        // we can transform all the crops into a value using the map function:
        return this.crops
            // map returns an array » with wheat and sugarcane yield...
            .map(crop => crop.getYieldInEuros())
            // add animal income also to the array
            .concat(this.animals.map(animal => animal.getValueInEuros()))
            // but we need a single value » .reduce (sum up into a single value)
            .reduce((a, b) => a + b, 0)
    }

    // print out the info about the farm
    printReport() {
        console.log(`
     ----------------------
     - Farm: FARM NAME    -
     - No. of crops: ${this.crops.length}   -
     - No. of animals: ${this.animals.length} -
     - Total income: ${this.calculateIncome()}€ -
     ----------------------
        `)
    }
}

// export
module.exports.Farm = Farm

