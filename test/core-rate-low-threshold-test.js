const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('low-threshold', async => {
  before(async () => {
    await showroom.start()
    // starts showroom server
  })

  after(async () => {
    console.log('Shutting down')
    await showroom.stop()
    // stops the showroom server
  })

  beforeEach(async () => {
    await showroom.setTestSubject('core-rate')
    await showroom.page.waitFor(150)
    // select the component with defaults from the descriptor file
  })

  it('number', async () => {
    await showroom.setAttribute('low-threshold', '2')
    const att = await showroom.hasAttribute('low-threshold')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('low-threshold')
    assert.deepEqual(val, '2')
  })

  /*
  it('invalid number', async () => {
    await showroom.setAttribute('low-threshold', '-1')
    const att = await showroom.hasAttribute('low-threshold')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('low-threshold')
    assert.deepEqual(val, '1')
  })

  it('non number type', async () => {
    await showroom.setAttribute('low-threshold', 'true')
    const att = await showroom.hasAttribute('low-threshold')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('low-threshold')
    assert.deepEqual(val, '1')
  })
  */
})
