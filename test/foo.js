var addOne = require('../src/foo')
var expect = require('chai').expect

describe('#addOne()', function () {
  context('Add 1 to 5', function () {
    it('should return 6', function () {
      expect(addOne(5)).to.equal(6)
    })
  })
})
