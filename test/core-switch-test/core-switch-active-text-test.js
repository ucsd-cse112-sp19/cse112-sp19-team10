const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: active-text', async () => {
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
      Attribute: active-text
      Description: text displayed when in on state
      Type: string
      Default: N/A
  */

  it('with string value', async () => {
    await showroom.setAttribute('active-text', 'foo')
    const att = await showroom.hasAttribute('active-text')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('active-text')
    assert.deepEqual(val, 'foo')
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('active-text', 'bar')
    const att = await showroom.hasAttribute('active-text')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('active-text')
    const val = await showroom.hasAttribute('active-text')
    assert.deepEqual(val, false)
  })
})
