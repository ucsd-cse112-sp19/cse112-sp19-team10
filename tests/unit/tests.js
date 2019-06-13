'use strict'

const coverage = require('../Utils/coverage.js')

describe('All Tests', function () {
  before(function () {
    coverage.initCoverage()
  })

  require('./core-hello-test')
  require('./core-rate-test')
  require('./core-switch-test')

  after(function () {
    coverage.writeOutCoverage()
  })
})
