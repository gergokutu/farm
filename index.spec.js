// functions (e.g. toBe()) coming with npm install jest » from the library
// Add the most basic test to your index.spec.js
// import
const {Farm} = require('./index')

//test
test('A new Farm can be created', () => {
  const farm = new Farm()
  expect(farm).toBeTruthy()
})

test('A Farm can have a name', () => {
    const farm = new Farm('TEST_NAME')
    expect(farm.name).toBe('TEST_NAME')
  })

  
