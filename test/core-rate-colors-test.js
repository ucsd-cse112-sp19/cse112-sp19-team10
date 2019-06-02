const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('colors', async => {
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
    await showroom.setAttribute('colors', "[#F7BA2A, #F7BA2A, #F7BA2A]")
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('colors')
    assert.deepEqual(val, "[#F7BA2A, #F7BA2A, #F7BA2A]")
  })

  it('color format 2', async () => {
    await showroom.setAttribute('colors', "[red,yellow,green]")
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('colors')
    assert.deepEqual(val, "[red,yellow,green]")
  })

/*
  it('invalid array/object length', async () => {
    await showroom.setAttribute('colors', "[#F7BA2A, #F7BA2A]")
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('colors')
    assert.deepEqual(val, "[#2ed3ce,#2ed3ce,#2ed3ce]")
  })

  it('incorrect color format', async () => {
    await showroom.setAttribute('colors', "[#F7BA2A, #GGGGGG, #F7BA2A]")
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('colors')
    assert.deepEqual(val, "[#2ed3ce,#2ed3ce,#2ed3ce]")
  })

  it('non array/object type', async () => {
    await showroom.setAttribute('colors', 'true')
    const att = await showroom.hasAttribute('colors')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('colors')
    assert.deepEqual(val, "[#2ed3ce,#2ed3ce,#2ed3ce]")
  })
*/
})
