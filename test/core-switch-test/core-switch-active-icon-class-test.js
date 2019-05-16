const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: active-icon-class', async () => {
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
      Attribute: active-icon-class
      Description: class name of the icon displayed when in on state, overrides active-text
      Type: string
      Default: N/A
  */

  it('with string value', async () => {
    await showroom.setAttribute('active-icon-class', 'postive')
    const att = await showroom.hasAttribute('active-icon-class')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('active-icon-class')
    assert.deepEqual(val, 'postive')
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('active-icon-class', 'bar')
    const att = await showroom.hasAttribute('active-icon-class')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('active-icon-class')
    const val = await showroom.hasAttribute('active-icon-class')
    assert.deepEqual(val, false)
  })
})
