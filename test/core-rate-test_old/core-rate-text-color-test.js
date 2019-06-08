const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('text-color', async => {
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
    await showroom.setAttribute('text-color', '#1F2D3D')
    const att = await showroom.hasAttribute('text-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('text-color')
    assert.deepEqual(val, '#1F2D3D')
  })

  it('color format 2', async () => {
    await showroom.setAttribute('text-color', 'yellow')
    const att = await showroom.hasAttribute('text-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('text-color')
    assert.deepEqual(val, 'yellow')
  })

  /*
  it('boolean', async () => {
    await showroom.setAttribute('text-color', 'true')
    const att = await showroom.hasAttribute('text-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('text-color')
    assert.deepEqual(val, 'green')
  })

  it('incorrect color format', async () => {
    await showroom.setAttribute('text-color', 'test')
    const att = await showroom.hasAttribute('text-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('text-color')
    assert.deepEqual(val, 'green')
  })
  */
})
