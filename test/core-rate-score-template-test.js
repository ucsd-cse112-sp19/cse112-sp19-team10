const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('score-template', async => {
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

  it('format', async () => {
    await showroom.setAttribute('score-template', ' points')
    const att = await showroom.hasAttribute('score-template')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('score-template')
    assert.deepEqual(val, ' points')
  })
})
