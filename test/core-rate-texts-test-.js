const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('texts', async => {
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
    assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
  })

  /*
  it('elements in array must all be strings', async () => {
    await showroom.setAttribute('texts', "[4, #F7BA2A, true, ['what']]")
    const att = await showroom.hasAttribute('texts')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('texts')
    assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
  })

  it('incorrect array/object length', async () => {
    await showroom.setAttribute('texts', "['oops', 'disappointed', 'normal']")
    const att = await showroom.hasAttribute('texts')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('texts')
    assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
  })

  it('non array/object type', async () => {
    await showroom.setAttribute('texts', 'true')
    const att = await showroom.hasAttribute('texts')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('texts')
    assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
  })
  */
})
