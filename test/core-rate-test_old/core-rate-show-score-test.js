const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('show-score', async => {
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

  it('show score', async () => {
    await showroom.setAttribute('show-score', '')
    const att = await showroom.hasAttribute('show-score')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('show-score')
    assert.deepEqual(val, '')
  })

  /*
  it('non-boolean type', async () => {
    await showroom.setAttribute('show-score', 'test')
    const att = await showroom.hasAttribute('show-score')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('show-score')
    assert.deepEqual(val, '')
  })
  */
})
