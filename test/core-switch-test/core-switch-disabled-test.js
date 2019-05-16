const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: disabled', async () => {
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
        Attribute: disabled
        Description: whether core-switch is disabled
        Type: boolean
        Default: false
    */
  it('with default value', async () => {
    await showroom.setAttribute('disabled', 'true')
    const att = await showroom.hasAttribute('disabled')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled')
    assert.deepEqual(val, '')
  })

  it('remove disabled attribute 1', async () => {
    await showroom.setAttribute('disabled', 'true')
    var att = await showroom.hasAttribute('disabled')
    assert.deepEqual(att, true)
    var val = await showroom.getAttribute('disabled')
    assert.deepEqual(val, '')
    att = await showroom.setAttribute('disabled', 'false')
    assert.deepEqual(att, true)
    val = await showroom.hasAttribute('disabled')
    assert.deepEqual(val, false)
  })

  it('removing attiribute 2', async () => {
    await showroom.setAttribute('disabled', 'true')
    const att = await showroom.hasAttribute('disabled')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('disabled')
    const val = await showroom.hasAttribute('disabled')
    assert.deepEqual(val, false)
  })

  it('with non-boolean', async () => {
    await showroom.setAttribute('disabled', 'blah')
    const att = await showroom.hasAttribute('disabled')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled')
    assert.deepEqual(val, false)
  })
})
