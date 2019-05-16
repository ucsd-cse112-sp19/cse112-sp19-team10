const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: inactive-text', async () => {
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
      Attribute: inactive-text
      Description: text displayed when in off state
      Type: string
      Default: N/A
  */

  it('with string value', async () => {
    await showroom.setAttribute('inactive-text', 'bar')
    const att = await showroom.hasAttribute('inactive-text')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('inactive-text')
    assert.deepEqual(val, 'bar')
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('inactive-text', 'bar')
    const att = await showroom.hasAttribute('inactive-text')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('inactive-text')
    const val = await showroom.hasAttribute('inactive-text')
    assert.deepEqual(val, false)
  })
})
