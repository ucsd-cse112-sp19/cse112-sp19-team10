const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('disabled-void-color', async => {
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
    await showroom.setTestSubject('core-rate')
    await showroom.page.waitFor(150)
    // select the component with defaults from the descriptor file
  })

  it('color format 1', async () => {
    await showroom.setAttribute('disabled-void-color', "#4286f4")
    const att = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-color')
    assert.deepEqual(val, "#4286f4")
  })

  it('color format 2', async () => {
    await showroom.setAttribute('disabled-void-color', "green")
    const att = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-color')
    assert.deepEqual(val, "green")
  })

  /*
  it('incorrect color format', async () => {
    await showroom.setAttribute('disabled-void-color', '#GGGGGG')
    const att = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-color')
    assert.deepEqual(val, "#4286f4")
  })

  it('non color format type', async () => {
    await showroom.setAttribute('disabled-void-color', 'test')
    const att = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-color')
    assert.deepEqual(val, "#4286f4")
  })
*/
})
