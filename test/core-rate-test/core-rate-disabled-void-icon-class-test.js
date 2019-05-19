const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('core-rate', async => {
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

  it('disabled', async () => {
    await showroom.setAttribute('disabled-void-icon-class', 'el-icon-star-on')
    const att = await showroom.hasAttribute('disabled-void-icon-class')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-icon-class')
    assert.deepEqual(val, 'el-icon-star-on')
  })

  it('remove attribute', async () => {
    await showroom.setAttribute('disabled-void-icon-class', 'el-icon-star-on')
    const att = await showroom.hasAttribute('disabled-void-icon-class')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-icon-class')
    assert.deepEqual(val, 'el-icon-star-on')
    await showroom.removeAttribute('disabled-void-icon-class')
    val = await showroom.hasAttribute('disabled-void-icon-class')
    assert.deepEqual(val, false)
  })

  it('boolean', async () => {
    await showroom.setAttribute('disabled-void-icon-class', 'true')
    const att = await showroom.hasAttribute('disabled-void-icon-class')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-icon-class')
    assert.deepEqual(val, '')
  })
})