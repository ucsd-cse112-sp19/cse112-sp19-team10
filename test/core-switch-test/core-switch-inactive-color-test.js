const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch attribute: inactive-color', async () => {
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
      Attribute: inactive-color
      Description: background color when in off state
      Type: string
      Default: #C0CCDA
  */

  it('with default color background', async () => {
    await showroom.setAttribute('inactive-color', '#C0CCDA')
    const att = await showroom.hasAttribute('inactive-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('inactive-color')
    assert.deepEqual(val, '#C0CCDA')
  })

  it('with grey blue (#6699cc) background color', async () => {
    await showroom.setAttribute('inactive-color', '#6699cc')
    const att = await showroom.hasAttribute('inactive-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('inactive-color')
    assert.deepEqual(val, '#6699cc')
  })

  it('with non value', async () => {
    await showroom.setAttribute('inactive-color', 'bar')
    const att = await showroom.hasAttribute('inactive-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('inactive-color')
    assert.deepEqual(val, '#C0CCDA')
  })

  it('removing attiribute', async () => {
    await showroom.setAttribute('inactive-color', 'bar')
    const att = await showroom.hasAttribute('inactive-color')
    assert.deepEqual(att, true)
    await showroom.removeAttribute('inactive-color')
    const val = await showroom.hasAttribute('inactive-color')
    assert.deepEqual(val, false)
  })
})
