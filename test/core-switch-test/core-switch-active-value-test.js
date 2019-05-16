const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: active-value', async () => {
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
      Attribute: active-value
      Description: switch value when in on state
      Type: boolean
      Default: true
  */
  it('with default value', async () => {
    await showroom.setAttribute('active-value', 'true')
    const att = await showroom.hasAttribute('active-value')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('active-value')
    assert.deepEqual(val, true)
  })

  it('with non-default value', async () => {
    await showroom.setAttribute('active-value', 'false')
    const att = await showroom.hasAttribute('active-value')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('active-value')
    assert.deepEqual(val, false)
  })

  it('with non-boolean value', async () => {
    await showroom.setAttribute('active-value', 'foo')
    const att = await showroom.hasAttribute('active-value')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('active-value')
    assert.deepEqual(val, true)
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('active-value', 'bar')
    const att = await showroom.hasAttribute('active-value')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('active-value')
    const val = await showroom.hasAttribute('active-value')
    assert.deepEqual(val, false)
  })
})
