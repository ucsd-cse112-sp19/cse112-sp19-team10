const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: name', async () => {
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
      Attribute: name
      Description: input name of core-switch
      Type: string
      Default: N/A
  */

  it('with string value', async () => {
    await showroom.setAttribute('name', 'bar')
    const att = await showroom.hasAttribute('name')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('name')
    assert.deepEqual(val, 'bar')
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('name', 'bar')
    const att = await showroom.hasAttribute('name')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('name')
    const val = await showroom.hasAttribute('name')
    assert.deepEqual(val, false)
  })
})
