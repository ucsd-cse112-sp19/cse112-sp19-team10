const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: validate-event', async () => {
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
      Attribute: validate-event
      Description: whether to trigger form validation
      Type: boolean
      Default: true
  */

  it('with default value', async () => {
    await showroom.setAttribute('validate-event', 'true')
    const att = await showroom.hasAttribute('validate-event')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('validate-event')
    assert.deepEqual(val, true)
  })

  it('with non-default value', async () => {
    await showroom.setAttribute('validate-event', 'false')
    const att = await showroom.hasAttribute('validate-event')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('validate-event')
    assert.deepEqual(val, false)
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('validate-event', 'true')
    const att = await showroom.hasAttribute('validate-event')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('validate-event')
    const val = await showroom.hasAttribute('validate-event')
    assert.deepEqual(val, false)
  })
})
