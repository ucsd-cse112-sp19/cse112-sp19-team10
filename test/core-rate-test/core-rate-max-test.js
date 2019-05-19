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

  it('number', async () => {
    await showroom.setAttribute('max', '5')
    const att = await showroom.hasAttribute('max')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('max')
    assert.deepEqual(val, 5)
  })

  it('remove attribute', async () => {
    await showroom.setAttribute('max', '5')
    const att = await showroom.hasAttribute('max')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('max')
    assert.deepEqual(val, 5)
    await showroom.removeAttribute('max')
    val = await showroom.hasAttribute('max')
    assert.deepEqual(val, false)
  })

  it('boolean', async () => {
    await showroom.setAttribute('max', 'true')
    const att = await showroom.hasAttribute('max')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('max')
    assert.deepEqual(val, '')
  })

  it('string', async () => {
    await showroom.setAttribute('max', 'test')
    const att = await showroom.hasAttribute('max')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('max')
    assert.deepEqual(val, '')
  })
})