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
    await showroom.setAttribute('void-color', '#C6D1DE')
    const att = await showroom.hasAttribute('void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-color')
    assert.deepEqual(val, '#C6D1DE')
  })

  it('remove attribute', async () => {
    await showroom.setAttribute('void-color', '#C6D1DE')
    const att = await showroom.hasAttribute('void-color')
    assert.deepEqual(att, true)
    var val = await showroom.getAttribute('void-color')
    assert.deepEqual(val, '#C6D1DE')
    await showroom.removeAttribute('void-color')
    val = await showroom.hasAttribute('void-color')
    assert.deepEqual(val, false)
  })

  it('boolean', async () => {
    await showroom.setAttribute('void-color', 'true')
    const att = await showroom.hasAttribute('void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-color')
    assert.deepEqual(val, '')
  })

  it('string', async () => {
    await showroom.setAttribute('void-color', 'test')
    const att = await showroom.hasAttribute('void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-color')
    assert.deepEqual(val, '')
  })

  it('incorrect color format', async () => {
    await showroom.setAttribute('void-color', '#GGGGGG')
    const att = await showroom.hasAttribute('void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-color')
    assert.deepEqual(val, '')
  })
})
