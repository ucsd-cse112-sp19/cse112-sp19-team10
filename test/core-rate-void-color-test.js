const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('void-color', async => {
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
    await showroom.setAttribute('void-color', '#C6D1DE')
    const att = await showroom.hasAttribute('void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-color')
    assert.deepEqual(val, '#C6D1DE')
  })

  it('color format 2', async () => {
    await showroom.setAttribute('void-color', 'green')
    const att = await showroom.hasAttribute('void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-color')
    assert.deepEqual(val, 'green')
  })

  /*
  it('non color format type', async () => {
    await showroom.setAttribute('void-color', 'true')
    const att = await showroom.hasAttribute('void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-color')
    assert.deepEqual(val, 'black')
  })

  it('incorrect color format', async () => {
    await showroom.setAttribute('void-color', '#GGGGGG')
    const att = await showroom.hasAttribute('void-color')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-color')
    assert.deepEqual(val, 'black')
  })
  */
})
