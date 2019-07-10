// functions (e.g. toBe()) coming with npm install jest » from the library
// Add the most basic test to your index.spec.js
// import
const {Farm} = require('./index')
const {Wheat, Sugarcane} = require('./crops')

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

  
