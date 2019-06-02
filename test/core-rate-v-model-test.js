const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('v-model', async => {
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
    await showroom.setAttribute('v-model', '2')
    const att = await showroom.hasAttribute('v-model')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('v-model')
    assert.deepEqual(val, '2')
  })

  /*
  it('invalid number', async () => {
    await showroom.setAttribute('v-model', '-1')
    const att = await showroom.hasAttribute('v-model')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('v-model')
    assert.deepEqual(val, '0')
  })

  it('non number type', async () => {
    await showroom.setAttribute('v-model', 'true')
    const att = await showroom.hasAttribute('v-model')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('v-model')
    assert.deepEqual(val, '0')
  })
  */
})
