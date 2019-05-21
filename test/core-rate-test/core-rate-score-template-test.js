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

  it('variable', async () => {
    await showroom.setAttribute('score-template', '{3.7}')
    const att = await showroom.hasAttribute('score-template')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('score-template')
    assert.deepEqual(val, '3.7')
  })

  it('remove attribute', async () => {
    await showroom.setAttribute('score-template', '{3.7}')
    const att = await showroom.hasAttribute('score-template')
    assert.deepEqual(att, true)
    var val = await showroom.getAttribute('score-template')
    assert.deepEqual(val, '3.7')
    await showroom.removeAttribute('score-template')
    val = await showroom.hasAttribute('score-template')
    assert.deepEqual(val, false)
  })

  it('boolean', async () => {
    await showroom.setAttribute('score-template', 'true')
    const att = await showroom.hasAttribute('score-template')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('score-template')
    assert.deepEqual(val, '')
  })

  it('string', async () => {
    await showroom.setAttribute('score-template', 'test')
    const att = await showroom.hasAttribute('score-template')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('score-template')
    assert.deepEqual(val, '')
  })
})
