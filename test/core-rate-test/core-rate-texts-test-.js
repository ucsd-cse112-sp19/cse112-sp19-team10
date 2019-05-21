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

  it('array/object', async () => {
    await showroom.setAttribute('texts', "['oops', 'disappointed', 'normal', 'good', 'great']")
    const att = await showroom.hasAttribute('texts')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('texts')
    assert.deepEqual(val, ['oops', 'disappointed', 'normal', 'good', 'great'])
  })

  it('remove colors', async () => {
    await showroom.setAttribute('texts', "['oops', 'disappointed', 'normal', 'good', 'great']")
    const att = await showroom.hasAttribute('texts')
    assert.deepEqual(att, true)
    var val = await showroom.getAttribute('texts')
    assert.deepEqual(val, ['oops', 'disappointed', 'normal', 'good', 'great'])
    await showroom.removeAttribute('texts')
    val = await showroom.hasAttribute('texts')
    assert.deepEqual(val, false)
  })

  it('boolean', async () => {
    await showroom.setAttribute('texts', 'true')
    const att = await showroom.hasAttribute('texts')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('texts')
    assert.deepEqual(val, '')
  })

  it('string', async () => {
    await showroom.setAttribute('texts', 'test')
    const att = await showroom.hasAttribute('texts')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('texts')
    assert.deepEqual(val, '')
  })
})
