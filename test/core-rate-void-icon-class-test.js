const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('void-icon-class', async => {
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
    await showroom.setAttribute('void-icon-class', 'el-icon-star-off')
    const att = await showroom.hasAttribute('void-icon-class')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-icon-class')
    assert.deepEqual(val, 'el-icon-star-off')
  })

  /*
  it('non string type', async () => {
    await showroom.setAttribute('void-icon-class', 'true')
    const att = await showroom.hasAttribute('void-icon-class')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('void-icon-class')
    assert.deepEqual(val, 'fas fa-frown')
  })
  */
})
