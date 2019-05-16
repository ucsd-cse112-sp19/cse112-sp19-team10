const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: inactive-icon-class', async () => {
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
      Attribute: inactive-icon-class
      Description: class name of the icon displayed when in off state, overrides inactive-text
      Type: string
      Default: N/A
  */
  it('with string value', async () => {
    await showroom.setAttribute('inactive-icon-class', 'negative')
    const att = await showroom.hasAttribute('inactive-icon-class')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('inactive-icon-class')
    assert.deepEqual(val, 'negative')
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('inactive-icon-class', 'bar')
    const att = await showroom.hasAttribute('inactive-icon-class')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('inactive-icon-class')
    const val = await showroom.hasAttribute('inactive-icon-class')
    assert.deepEqual(val, false)
  })
})