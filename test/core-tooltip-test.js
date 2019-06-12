const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-tooltip', async () => {
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
    await showroom.setTestSubject('core-tooltip')
    await showroom.page.waitFor(150)
    // select the component with defaults from the descriptor file
  })

  context('core-tooltip attribute: effect', async () => {
    /*  Unit Testing for
        Attribute: effect
        Description: tooltip theme
        Type: string
        Accepted Values: dark/light
        Default: dark
    */

    it('Mapping Attribute -> Property with dark', async () => {
      await showroom.setAttribute('effect', 'dark')
      const att = await showroom.hasAttribute('effect')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('effect')
      assert.deepEqual(val, 'dark')
    })

    it('Mapping Property -> Attribute with light', async () => {
      await showroom.setProperty('effect', 'light')
      const att = await showroom.hasAttribute('effect')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('effect')
      assert.deepEqual(val, 'light')
    })

    // it('Mapping Attribute -> Property with invalid string', async () => {
    //   await showroom.setAttribute('effect', 'foo')
    //   const att = await showroom.hasAttribute('effect')
    //   assert.deepEqual(att, true)
    //   const val = await showroom.getProperty('effect')
    //   assert.deepEqual(val, 'dark')
    // })

    // it('Mapping Attribute -> Property with invalid value', async () => {
    //   await showroom.setAttribute('effect', 123)
    //   const att = await showroom.hasAttribute('effect')
    //   assert.deepEqual(att, true)
    //   const val = await showroom.getProperty('effect')
    //   assert.deepEqual(val, 'dark')
    // })

    // it('with invaild string: dark', async () => {
    //   await showroom.setAttribute('effect', 'foo')
    //   const att = await showroom.hasAttribute('effect')
    //   assert.deepEqual(att, true)
    //   const val2 = await showroom.getProperty('effect')
    //   assert.deepEqual(val2, 'dark')
    // })

    // it('with invaild string: light', async () => {
    //   await showroom.setProperty('effect', 'foo')
    //   const att = await showroom.hasAttribute('effect')
    //   assert.deepEqual(att, true)
    //   const val2 = await showroom.getProperty('effect')
    //   assert.deepEqual(val2, 'dark')
    // })
  })
})
