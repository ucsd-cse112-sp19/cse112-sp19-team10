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
    await showroom.setAttribute('icon-classes', "['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']")
    const att = await showroom.hasAttribute('icon-classes')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('icon-classes')
    assert.deepEqual(val, ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'])
  })

  it('remove colors', async () => {
    await showroom.setAttribute('icon-classes', "['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']")
    const att = await showroom.hasAttribute('icon-classes')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('icon-classes')
    assert.deepEqual(val, ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'])
    await showroom.removeAttribute('icon-classes')
    val = await showroom.hasAttribute('icon-classes')
    assert.deepEqual(val, false)
  })

  it('boolean', async () => {
    await showroom.setAttribute('icon-classes', 'true')
    const att = await showroom.hasAttribute('icon-classes')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('icon-classes')
    assert.deepEqual(val, '')
  })

  it('string', async () => {
    await showroom.setAttribute('icon-classes', 'test')
    const att = await showroom.hasAttribute('icon-classes')
    assert.deepEqual(att, true)
    const val = await showroom.getAttribute('icon-classes')
    assert.deepEqual(val, '')
  })
})