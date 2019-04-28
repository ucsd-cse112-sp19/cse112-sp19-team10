const addOne = require('./foo')

test('adds 1 to 5 to equal 6', () => {
  expect(addOne(5)).toBe(6)
})
