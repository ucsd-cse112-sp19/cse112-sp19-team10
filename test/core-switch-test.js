const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('Testing core-switch', async () => {
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
    await showroom.setTestSubject('core-switch')
    await showroom.page.waitFor(150)
    // select the component with defaults from the descriptor file
  })

  context('Testing core-switch attribute: active-color', async () => {
    /*  Unit Testing for
        Attribute: active-color
        Description: background color when in on state
        Type: string
        Default: #409EFF
    */

    it('with default color background', async () => {
      await showroom.setAttribute('active-color', '#409EFF')
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-color')
      assert.deepEqual(val, '#409EFF')
    })

    it('with cherry red (#790604) background color', async () => {
      await showroom.setAttribute('active-color', '#790604')
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-color')
      assert.deepEqual(val, '#790604')
    })

    it('with non value', async () => {
      await showroom.setAttribute('active-color', 'bar')
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-color')
      assert.deepEqual(val, '#409EFF')
    })
  })

  context('Testing core-switch attribute: active-icon-class', async () => {
    /*  Unit Testing for
        Attribute: active-icon-class
        Description: class name of the icon displayed when in on state, overrides active-text
        Type: string
        Default: N/A
    */

    it('with string value', async () => {
      await showroom.setAttribute('active-icon-class', 'postive')
      const att = await showroom.hasAttribute('active-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-icon-class')
      assert.deepEqual(val, 'postive')
    })
  })

  context('Testing core-switch attribute: active-text', async () => {
    /*  Unit Testing for
        Attribute: active-text
        Description: text displayed when in on state
        Type: string
        Default: N/A
    */

    it('with string value', async () => {
      await showroom.setAttribute('active-text', 'foo')
      const att = await showroom.hasAttribute('active-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-text')
      assert.deepEqual(val, 'foo')
    })
  })

  context('Testing core-switch attribute: active-value', async () => {
    /*  Unit Testing for
        Attribute: active-value
        Description: switch value when in on state
        Type: boolean/string/number
        Default: true
    */

    it('with default value', async () => {
      await showroom.setAttribute('active-value', 'true')
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-value')
      assert.deepEqual(val, 'true')
    })

    it('with non-default value', async () => {
      await showroom.setAttribute('active-value', 'false')
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-value')
      assert.deepEqual(val, 'false')
    })

    it('with string value', async () => {
      await showroom.setAttribute('active-value', 'foo')
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-value')
      assert.deepEqual(val, 'foo')
    })

    it('with number value', async () => {
      await showroom.setAttribute('active-value', '123')
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-value')
      assert.deepEqual(val, '123')
    })
  })

  context('Testing core-switch attribute: disabled', async () => {
    /*  Unit Testing for
          Attribute: disabled
          Description: whether core-switch is disabled
          Type: boolean
          Default: false
      */

    it('with default value', async () => {
      await showroom.setAttribute('disabled', '')
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled')
      assert.deepEqual(val, '')
    })
  })

  context('Testing core-switch attribute: inactive-color', async () => {
    /*  Unit Testing for
        Attribute: inactive-color
        Description: background color when in off state
        Type: string
        Default: #C0CCDA
    */

    it('with default color background', async () => {
      await showroom.setAttribute('inactive-color', '#C0CCDA')
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-color')
      assert.deepEqual(val, '#C0CCDA')
    })

    it('with grey blue (#6699cc) background color', async () => {
      await showroom.setAttribute('inactive-color', '#6699cc')
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-color')
      assert.deepEqual(val, '#6699cc')
    })

    it('with non value', async () => {
      await showroom.setAttribute('inactive-color', 'bar')
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-color')
      assert.deepEqual(val, '#C0CCDA')
    })
  })

  context('Testing core-switch attribute: inactive-icon-class', async () => {
    /*  Unit Testing for
        Attribute: inactive-icon-class
        Description: class name of the icon displayed when in off state, overrides inactive-text
        Type: string
        Default: N/A
    */
    it('with string value', async () => {
      await showroom.setAttribute('inactive-icon-class', 'negative')
      const att = await showroom.hasAttribute('inactive-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-icon-class')
      assert.deepEqual(val, 'negative')
    })
  })

  context('Testing core-switch attribute: inactive-text', async () => {
    /*  Unit Testing for
        Attribute: inactive-text
        Description: text displayed when in off state
        Type: string
        Default: N/A
    */

    it('with string value', async () => {
      await showroom.setAttribute('inactive-text', 'bar')
      const att = await showroom.hasAttribute('inactive-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-text')
      assert.deepEqual(val, 'bar')
    })
  })

  context('Testing core-switch attribute: inactive-value', async () => {
    /*  Unit Testing for
        Attribute: inactive-value
        Description: switch value when in off state
        Type: boolean/string/number
        Default: true
    */

    it('with default value', async () => {
      await showroom.setAttribute('inactive-value', 'true')
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-value')
      assert.deepEqual(val, 'true')
    })

    it('with non-default value', async () => {
      await showroom.setAttribute('inactive-value', 'false')
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-value')
      assert.deepEqual(val, 'false')
    })

    it('with string value', async () => {
      await showroom.setAttribute('inactive-value', 'foo')
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-value')
      assert.deepEqual(val, 'foo')
    })

    it('with number value', async () => {
      await showroom.setAttribute('inactive-value', '123')
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-value')
      assert.deepEqual(val, '123')
    })
  })

  context('Testing core-switch attribute: name', async () => {
    /*  Unit Testing for
        Attribute: name
        Description: input name of core-switch
        Type: string
        Default: N/A
    */

    it('with string value', async () => {
      await showroom.setAttribute('name', 'bar')
      const att = await showroom.hasAttribute('name')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('name')
      assert.deepEqual(val, 'bar')
    })
  })

  context('Testing core-switch attribute: v-model', async () => {
    /*  Unit Testing for
          Attribute: v-model
          Description: binding value
          Type: boolean/ string/ number
          Default: false
      */

    it('with boolean: true', async () => {
      await showroom.setAttribute('v-model', 'true')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, 'true')
    })

    it('with boolean: false', async () => {
      await showroom.setAttribute('v-model', 'false')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, 'false')
    })

    it('with string', async () => {
      await showroom.setAttribute('v-model', 'foo')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, 'foo')
    })

    it('with number', async () => {
      await showroom.setAttribute('v-model', '123')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '123')
    })
  })

})
