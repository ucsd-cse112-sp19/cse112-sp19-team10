const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: width', async () => {
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
    await showroom.setTestSubject('core-switch')
    await showroom.page.waitFor(150)
    // select the component with defaults from the descriptor file
  })

  /*  Unit Testing for
      Attribute: width
      Description: sets the width of core-switch
      Type: number
      Default: 40
  */

  it('with default', async () => {
    await showroom.setAttribute('width', '40')
    const att = await showroom.hasAttribute('width')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('width')
    assert.deepEqual(val, 40)
  })

  it('without default value', async () => {
    await showroom.setAttribute('width', '100')
    const att = await showroom.hasAttribute('width')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('width')
    assert.deepEqual(val, 100)
  })

  it('with non-int', async () => {
    await showroom.setAttribute('width', 'blah')
    const att = await showroom.hasAttribute('width')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('width')
    assert.deepEqual(val, 40)
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('width', '123')
    const att = await showroom.hasAttribute('width')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('width')
    const val = await showroom.hasAttribute('width')
    assert.deepEqual(val, false)
  })
})
