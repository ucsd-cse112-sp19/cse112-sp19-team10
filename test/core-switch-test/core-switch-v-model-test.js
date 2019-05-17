const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: v-model', async () => {
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
      Attribute: v-model
      Description: binding value
      Type: boolean/ string/ number
      Default: false
  */

  it('with boolean: true', async () => {
    await showroom.setAttribute('v-model', 'true')
    const att = await showroom.hasAttribute('v-model')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('v-model')
    assert.deepEqual(val, true)
  })

  it('with boolean: false', async () => {
    await showroom.setAttribute('v-model', 'false')
    const att = await showroom.hasAttribute('v-model')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('v-model')
    assert.deepEqual(val, false)
  })

  it('with string', async () => {
    await showroom.setAttribute('v-model', 'foo')
    const att = await showroom.hasAttribute('v-model')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('v-model')
    assert.deepEqual(val, 'foo')
  })

  it('with number', async () => {
    await showroom.setAttribute('v-model', '123')
    const att = await showroom.hasAttribute('v-model')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('v-model')
    assert.deepEqual(val, '123')
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('v-model', 'bar')
    const att = await showroom.hasAttribute('v-model')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('v-model')
    const val = await showroom.hasAttribute('v-model')
    assert.deepEqual(val, false)
  })
})
