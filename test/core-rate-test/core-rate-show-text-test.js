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
    await showroom.setAttribute('show-text', 'true')
    const att = await showroom.hasAttribute('show-text')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('show-text')
    assert.deepEqual(val, '')
  })

  it('remove attribute', async () => {
    await showroom.setAttribute('show-text', 'true')
    var att = await showroom.hasAttribute('show-text')
    assert.deepEqual(att, true)
    var val = await showroom.getAttribute('show-text')
    assert.deepEqual(val, '')
    await showroom.removeAttribute('show-text')
    val = await showroom.hasAttribute('show-text')
    assert.deepEqual(val, false)
  })

  it('non-boolean type', async () => {
    await showroom.setAttribute('show-text', 'test')
    const att = await showroom.hasAttribute('show-text')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('show-text')
    assert.deepEqual(val, false)
  })
})