const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: active-color', async () => {
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
      Attribute: active-color
      Description: background color when in on state
      Type: string
      Default: #409EFF
  */

  it('with default color background', async () => {
    await showroom.setAttribute('active-color', '#409EFF')
    const att = await showroom.hasAttribute('active-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('active-color')
    assert.deepEqual(val, '#409EFF')
  })

  it('with cherry red (#790604) background color', async () => {
    await showroom.setAttribute('active-color', '#790604')
    const att = await showroom.hasAttribute('active-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('active-color')
    assert.deepEqual(val, '#790604')
  })

  it('with non value', async () => {
    await showroom.setAttribute('active-color', 'bar')
    const att = await showroom.hasAttribute('active-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('active-color')
    assert.deepEqual(val, '#409EFF')
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('active-color', 'bar')
    const att = await showroom.hasAttribute('active-color')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('active-color')
    const val = await showroom.hasAttribute('active-color')
    assert.deepEqual(val, false)
  })
})
