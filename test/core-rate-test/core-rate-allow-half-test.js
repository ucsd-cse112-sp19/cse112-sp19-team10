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

  it('allow-half', async () => {
    await showroom.setAttribute('allow-half', 'true')
    const att = await showroom.hasAttribute('allow-half')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('allow-half')
    assert.deepEqual(val, '')
  })

  it('remove allow-half', async () => {
    await showroom.setAttribute('allow-half', 'true')
    var att = await showroom.hasAttribute('allow-half')
    assert.deepEqual(att, true)
    var val = await showroom.getAttribute('allow-half')
    assert.deepEqual(val, '')
    await showroom.removeAttribute('allow-half')
    val = await showroom.hasAttribute('allow-half')
    assert.deepEqual(val, false)
  })

  it('non-boolean type', async () => {
    await showroom.setAttribute('allow-half', 'test')
    const att = await showroom.hasAttribute('allow-half')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('allow-half')
    assert.deepEqual(val, false)
  })
})