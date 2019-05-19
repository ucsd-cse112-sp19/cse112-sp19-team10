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
    await showroom.setAttribute('low-threshold', '2')
    const att = await showroom.hasAttribute('low-threshold')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('low-threshold')
    assert.deepEqual(val, 4)
  })

  it('remove attribute', async () => {
    await showroom.setAttribute('low-threshold', '2')
    const att = await showroom.hasAttribute('low-threshold')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('low-threshold')
    assert.deepEqual(val, 4)
    await showroom.removeAttribute('low-threshold')
    val = await showroom.hasAttribute('low-threshold')
    assert.deepEqual(val, false)
  })

  it('boolean', async () => {
    await showroom.setAttribute('low-threshold', 'true')
    const att = await showroom.hasAttribute('low-threshold')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('low-threshold')
    assert.deepEqual(val, '')
  })

  it('string', async () => {
    await showroom.setAttribute('low-threshold', 'test')
    const att = await showroom.hasAttribute('low-threshold')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('low-threshold')
    assert.deepEqual(val, '')
  })
})