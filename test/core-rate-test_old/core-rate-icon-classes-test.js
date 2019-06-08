const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('icon-classes', async => {
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

  it('string', async () => {
    await showroom.setAttribute('icon-classes', 'el-icon-star-on')
    const att = await showroom.hasAttribute('icon-classes')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('icon-classes')
    assert.deepEqual(val, 'el-icon-star-on')
  })

  /*
  it('non string type', async () => {
    await showroom.setAttribute('icon-classes', 'true')
    const att = await showroom.hasAttribute('icon-classes')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('icon-classes')
    assert.deepEqual(val, "fas fa-smile")
  })
  */
})
