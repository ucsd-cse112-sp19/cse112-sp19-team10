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
    await showroom.setAttribute('show-score', 'true')
    const att = await showroom.hasAttribute('show-score')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('show-score')
    assert.deepEqual(val, '')
  })

  it('remove attribute', async () => {
    await showroom.setAttribute('show-score', 'true')
    var att = await showroom.hasAttribute('show-score')
    assert.deepEqual(att, true)
    var val = await showroom.getAttribute('show-score')
    assert.deepEqual(val, '')
    await showroom.removeAttribute('show-score')
    val = await showroom.hasAttribute('show-score')
    assert.deepEqual(val, false)
  })

  it('non-boolean type', async () => {
    await showroom.setAttribute('show-score', 'test')
    const att = await showroom.hasAttribute('show-score')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('show-score')
    assert.deepEqual(val, false)
  })
})