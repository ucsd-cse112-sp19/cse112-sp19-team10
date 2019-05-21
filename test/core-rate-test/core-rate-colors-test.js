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
    await showroom.setAttribute('colors', "['#F7BA2A', '#F7BA2A', '#F7BA2A']")
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('colors')
    assert.deepEqual(val, ['#F7BA2A', '#F7BA2A', '#F7BA2A'])
  })

  it('remove colors', async () => {
    await showroom.setAttribute('colors', "['#F7BA2A', '#F7BA2A', '#F7BA2A']")
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    var val = await showroom.getAttribute('colors')
    assert.deepEqual(val, ['#F7BA2A', '#F7BA2A', '#F7BA2A'])
    await showroom.removeAttribute('colors')
    val = await showroom.hasAttribute('colors')
    assert.deepEqual(val, false)
  })

  it('array/object - incorrect color format', async () => {
    await showroom.setAttribute('colors', "['#F7BA2A', '#GGGGGG', '#F7BA2A']")
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('colors')
    assert.deepEqual(val, '')
  })

  it('boolean', async () => {
    await showroom.setAttribute('colors', 'true')
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('colors')
    assert.deepEqual(val, '')
  })

  it('string', async () => {
    await showroom.setAttribute('colors', 'test')
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('colors')
    assert.deepEqual(val, '')
  })
})
