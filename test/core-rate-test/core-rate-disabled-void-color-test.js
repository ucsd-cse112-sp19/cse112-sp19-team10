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

  it('disabled-void-color', async () => {
    await showroom.setAttribute('disabled-void-color', '#EFF2F7')
    const att = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-color')
    assert.deepEqual(val, '#EFF2F7')
  })

  it('remove attribute', async () => {
    await showroom.setAttribute('disabled-void-color', '#EFF2F7')
    const att = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-color')
    assert.deepEqual(val, '#EFF2F7')
    await showroom.removeAttribute('disabled-void-color')
    val = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(val, false)
  })

  it('boolean', async () => {
    await showroom.setAttribute('disabled-void-color', 'true')
    const att = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-color')
    assert.deepEqual(val, '')
  })

  it('incorrect color format', async () => {
    await showroom.setAttribute('disabled-void-color', '#GGGGGG')
    const att = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-color')
    assert.deepEqual(val, '')
  })

  it('string', async () => {
    await showroom.setAttribute('disabled-void-color', 'test')
    const att = await showroom.hasAttribute('disabled-void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('disabled-void-color')
    assert.deepEqual(val, '')
  })
})