// functions (e.g. toBe()) coming with npm install jest » from the library
// Add the most basic test to your index.spec.js
// import
const {Farm} = require('./index')
const {Wheat, Sugarcane} = require('./crops')
const {Cow, Horse} = require('./animals')

//test Farm class
test('A new Farm can be created', () => {
  const farm = new Farm()
  expect(farm).toBeTruthy()
})

test('A Farm can have a name', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.name).toBe('TEST_NAME')
  })

// adding wheat class
test('We can add a crop to our farm', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
})

// test farm income without any crop » 0 test
test('We can add a crop to our farm', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
})

// test with real income
test('The income of a 100 Wheat + 100 Sugarcane farm is X', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
  farm.addCrop(new Sugarcane(100))
  expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1)
})

// adding cow
test('Animals can be added to the farm', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
})

// 0 test with animals
test('Animals will be taken into account for calculateIncome', () => {
  const farm = new Farm()
  farm.addAnimal(new Cow(100))
  expect(farm.calculateIncome()).not.toBe(0)
})

// test with real income » crops and animals
test('The income of a full farm', () => {
  const farm = new Farm('TEST_NAME')
  farm.addCrop(new Wheat(100))
  farm.addCrop(new Sugarcane(100))
  farm.addAnimal(new Cow(100))
  farm.addAnimal(new Horse(10))
  expect(farm.calculateIncome()).toBeCloseTo(2838.4, 1)
})
  
